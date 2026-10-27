#!/usr/bin/env node
/**
 * Sync script: pull the 1000-repo interview-prep GitHub search results into this app's catalog.
 *
 * The app already ships a hand-picked catalog in src/data/repoCatalog.ts. This script
 * queries GitHub's REST search endpoint for interview-prep repos, ranks them by stars,
 * and writes a matching `src/data/repoCatalog.ts` file using the same interface the app
 * renders today (RepoCatalogEntry: repo, name, stars, category, url).
 *
 * Optional env:
 *  - GITHUB_TOKEN: personal access token (increases search caps & avoids low-rank results)
 *  - TOP_N (default 1000): how many repos to keep
 *
 * Usage:
 *   node scripts/sync-repo-catalog.mjs
 */

const TOP_N = Number(process.env.TOP_N ?? 1000);
const TOKEN = process.env.GITHUB_TOKEN ?? '';
const API = 'https://api.github.com';

interface RawRepo {
  id: number;
  full_name: string;
  name: string;
  stargazers_count: number;
  language: string | null;
  description: string | null;
  html_url: string;
  topics: string[];
}

interface SearchResult {
  total_count: number;
  items: RawRepo[];
  incomplete_results: boolean;
}

function githubFetch(path: string, search: URLSearchParams): Promise<SearchResult> {
  const url = `${API}${path}?${search.toString()}`;
  return fetch(url, {
    headers: {
      Accept: 'application/vnd.github+json',
      ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
    },
  }).then((r) => {
    if (!r.ok) throw new Error(`GitHub API ${r.status} for ${path}`);
    return r.json() as Promise<SearchResult>;
  });
}

const CATEGORY_HINTS: Array<{ pattern: RegExp; label: string }> = [
  // Behavioral / career
  [/behavioral|interview-questions|reverse-interview|career|resume|recruiter|hr/i, 'Behavioral'],
  // System design
  [/system-design|architecture|scalab|distributed|hld|lld|design-pattern|object-oriented|ood/i, 'System Design'],
  // DSA problem banks / sheets / roadmaps
  [/coding-interview|leetcode|problem|sheet|roadmap|tree|dp|dynamic-programming|dsa|algorithm|cracking/i, 'DSA'],
  // Frontend
  [/frontend|front-end|javascript|react|vue|angular|typescript|web-performance/i, 'Frontend'],
  // ML / data
  [/machine-learning|data-science|deep-learning|pytorch|tensorflow|ml/i, 'Machine Learning'],
  // Mock platforms / video
  [/mock-interview|mock interview|video|webrtc|proctoring/i, 'Mock Platforms'],
  // AI interview
  [/ai-interview|ai mock|interview copilot|interview assistant|voice interview/i, 'AI Interview'],
  // Practice & contests
  [/competitive-programming|contest|atcoder|codeforces|project-euler|practice/i, 'DSA'],
  // Learning platforms / curricula
  [/curriculum|university|study-plan|study plan|course|bootcamp|roadmap/i, 'DSA'],
];

function pickCategory(repo: RawRepo): string {
  const hay = `${repo.name} ${repo.description || ''} ${repo.topics.join(' ')} ${repo.language || ''}`.toLowerCase();
  for (const { pattern, label } of CATEGORY_HINTS) {
    if (pattern.test(hay)) return label;
  }
  return 'DSA';
}

function displayName(repo: RawRepo): string {
  const d = repo.description ?? '';
  const max = 140;
  const trimmed = d.length > max ? d.slice(0, max - 1) + '…' : d;
  return `${repo.full_name}${trimmed ? ` — ${trimmed}` : ''}`;
}

const SECONDS_PER_PAGE = 1; // keep GitHub search polite ("interview prep" returns well over a page of results)

async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
  console.log(`🔎 Searching GitHub for interview-prep repos (TOP_N=${TOP_N})…`);
  const search = new URLSearchParams({
    q: 'interview prep in:topics:career-stack',
    sort: 'stars',
    order: 'desc',
    per_page: '100',
  });

  const first = await githubFetch('/search/repositories', search);
  if (first.incomplete_results && !TOKEN) {
    console.warn('⚠️  GitHub returned incomplete_results without a token — results may be capped.');
  }
  const totalAvailable = first.total_count;
  console.log(`Found ${totalAvailable} repos total; fetching up to ${TOP_N}.`);

  const repos: RawRepo[] = [...first.items];
  let page = 2;
  while (repos.length < TOP_N) {
    await sleep(SECONDS_PER_PAGE * 1000);
    const next = await githubFetch('/search/repositories', new URLSearchParams({
      q: 'interview prep in:topics:career-stack',
      sort: 'stars',
      order: 'desc',
      per_page: '100',
      page: String(page),
    }));
    if (next.items.length === 0) break;
    repos.push(...next.items);
    if (next.incomplete_results && page > 3) {
      console.warn('⚠️  Incomplete results beyond page 3 — token may raise the cap.');
      break;
    }
    page++;
  }

  // De-dup by full_name and keep the highest-star entry (search can return near-dup forks).
  const byName = new Map<string, RawRepo>();
  for (const r of repos) {
    const prev = byName.get(r.full_name);
    if (!prev || r.stargazers_count > prev.stargazers_count) {
      byName.set(r.full_name, r);
    }
  }
  const unique = [...byName.values()];

  // Rank by stars desc; break ties by repo name.
  unique.sort((a, b) => b.stargazers_count - a.stargazers_count || a.full_name.localeCompare(b.full_name));

  const top = unique.slice(0, Math.max(1, TOP_N));

  const records = top.map((r) => {
    const topic = pickCategory(r);
    return {
      repo: r.full_name,
      name: displayName(r),
      stars: r.stargazers_count,
      category: topic,
      url: r.html_url,
    };
  });

  // Print a small summary of the cuts.
  const byCat: Record<string, number> = {};
  for (const r of records) {
    byCat[r.category] = (byCat[r.category] ?? 0) + 1;
  }
  console.log('📊 Categories written:');
  for (const [cat, n] of Object.entries(byCat).sort((a, b) => b[1] - a[1])) {
    console.log(`   ${cat}: ${n}`);
  }

  const code = [
    '/**',
    ' * Auto-synced interview-prep GitHub catalog.',
    ' * Regenerate with:  node scripts/sync-repo-catalog.mjs',
    ' *',
    ' * Interface: { repo, name, stars, category, url }',
    ' * This file is consumed by src/data/repoCatalog.ts and the GlobalSearch catalog hits.',
    ' */',
    '',
    'export interface RepoCatalogEntry {',
    '  repo: string;',
    '  name: string;',
    '  stars: number;',
    '  category: string;',
    '  url: string;',
    '}',
    '',
    `export const syncedRepoCatalog: RepoCatalogEntry[] = ${JSON.stringify(records, null, 2)};`,
    '',
    '// Exported so other modules can opt into the freshly-synced catalog.',
    'export { syncedRepoCatalog as repoCatalog };',
  ].join('\n');

  const outPath = 'src/data/repoCatalog.ts';
  const fs = require('fs');
  const existing = fs.existsSync(outPath);
  if (existing) {
    const current = fs.readFileSync(outPath, 'utf8');
    if (current === code) {
      console.log(`↪️  ${outPath} is already up to date (no write needed).`);
      return;
    }
  }
  fs.writeFileSync(outPath, code, 'utf8');
  console.log(`✅ Wrote ${records.length} repos to ${outPath}`);
}

run().catch((e) => {
  console.error('❌ Sync failed:', e.message);
  process.exit(1);
});

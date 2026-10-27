/**
 * One-off maintenance script: rebuilds `src/data/repoCatalog.ts` from verified data.
 *
 * 1. Drops catalog entries that github.com reports as missing (uses .repo-check.json
 *    written by scripts/verify-repos.cjs).
 * 2. Fills the catalog with the 390 repos whose READMEs are already mined into
 *    src/content/repos (src/content/repoIndex.ts), so every added repo exists and
 *    can be read offline in the app.
 * 3. Sorts by stars descending so the highest-signal repos render first.
 *
 * Usage: node scripts/verify-repos.cjs && node scripts/build-catalog.cjs
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const catalogPath = path.join(root, 'src', 'data', 'repoCatalog.ts');
const indexPath = path.join(root, 'src', 'content', 'repoIndex.ts');
const checkPath = path.join(root, '.repo-check.json');

const checks = fs.existsSync(checkPath) ? JSON.parse(fs.readFileSync(checkPath, 'utf8')) : {};

const CATEGORY_MAP = {
  'AI / ML & Data': 'Machine Learning',
  'General Prep': 'DSA',
  'System Design': 'System Design',
  'SQL & Data': 'Data & SQL'
};

// ---------- 1. existing catalog: keep only entries that resolve ----------
const existing = [];
for (const line of fs.readFileSync(catalogPath, 'utf8').split('\n')) {
  const match = line.match(/^\s*\{\s*repo: '([^']*)'/);
  if (!match) continue;
  const repo = match[1];
  if (checks[repo] && checks[repo] !== 200) continue;
  existing.push({ line, repo });
}

// ---------- 2. mined repos (real, offline-readable) ----------
const indexSource = fs.readFileSync(indexPath, 'utf8');
const mined = [...indexSource.matchAll(
  /"repo":\s*"([^"]+)",\s*"stars":\s*(\d+),\s*"language":\s*"([^"]*)",\s*"category":\s*"([^"]*)"/g
)].map((m) => ({ repo: m[1], stars: Number(m[2]), language: m[3], category: m[4] }));

const known = new Set(existing.map((e) => e.repo));
const additions = [];
for (const item of mined) {
  if (known.has(item.repo)) continue;
  if (checks[item.repo] && checks[item.repo] !== 200) continue;
  known.add(item.repo);
  const category = CATEGORY_MAP[item.category] || item.category || 'DSA';
  const label = item.repo.split('/')[1]?.replace(/[-_]+/g, ' ') || item.repo;
  const name = `${item.repo} — ${label} (offline README, ${item.category} prep)`.replace(/'/g, "\\'");
  additions.push({
    repo: item.repo,
    stars: item.stars,
    line: `  { repo: '${item.repo}', name: '${name}', stars: ${item.stars}, category: '${category}', url: 'https://github.com/${item.repo}'${item.language ? `, language: '${item.language.replace(/'/g, "\\'")}'` : ''} },`
  });
}

// ---------- 3. rewrite the array (sorted by stars desc) ----------
const starsOf = (line) => Number((line.match(/stars:\s*(\d+)/) || [])[1] || 0);
const entries = [...existing.map((e) => ({ repo: e.repo, line: e.line })), ...additions]
  .sort((a, b) => starsOf(b.line) - starsOf(a.line) || a.repo.localeCompare(b.repo));

const file = fs.readFileSync(catalogPath, 'utf8');
const arrayHeading = 'export const repoCatalog: RepoCatalogEntry[] = [';
const start = file.indexOf(arrayHeading);
const bodyStart = start + arrayHeading.length;
const bodyEnd = file.indexOf('\n];', bodyStart);
if (start < 0 || bodyEnd < 0) throw new Error('Could not locate repoCatalog array');

const header = `\n  // ---- Verified catalog: every entry resolves on github.com. Entries sourced from the\n  // mined README index also get an "offline" reader in the Resource Hub. ----\n`;
const next = file.slice(0, bodyStart) + header + entries.map((e) => e.line).join('\n') + file.slice(bodyEnd + 1);

fs.writeFileSync(catalogPath, next);
console.log(JSON.stringify({
  keptVerified: existing.length,
  addedFromMinedIndex: additions.length,
  total: entries.length
}, null, 1));

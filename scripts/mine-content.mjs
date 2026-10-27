/**
 * mine-content.mjs — mines the 390 stored repo READMEs (src/content/repos/*.md,
 * indexed by src/content/repoIndex.ts) into four static JSON files served from
 * public/ so the app can lazily fetch them:
 *
 *   public/repo-bank.json      — DSA/interview problems (LeetCode links + numbered
 *                                question lists), deduped, difficulty/topic inferred.
 *   public/sd-library.json     — System Design deep-dive topics (HLD + LLD) with
 *                                extracted markdown sections per topic.
 *   public/repo-flashcards.json— Q/A flashcards mined from interview-question repos,
 *                                grouped into decks by repo category.
 *   public/repo-roadmaps.json  — Study plans / roadmaps / curricula for the
 *                                8-week roadmap cross-linker.
 *
 * Usage: npm run mine   (or: node scripts/mine-content.mjs)
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(process.cwd());
const REPO_DIR = path.join(ROOT, 'src', 'content', 'repos');
const INDEX_FILE = path.join(ROOT, 'src', 'content', 'repoIndex.ts');
const OUT_DIR = path.join(ROOT, 'public');

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
const readIndex = () => {
  const src = fs.readFileSync(INDEX_FILE, 'utf8');
  const start = src.indexOf('= [') + 1;
  const json = src.slice(start, src.indexOf('];', start) + 1);
  return JSON.parse(json);
};

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 64);

/** Strip markdown emphasis / links / code ticks from a heading-ish string. */
const cleanText = (s) =>
  s
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')     // links → text
    .replace(/[*_`~]/g, '')                       // emphasis markers
    .replace(/<[^>]+>/g, '')                      // html tags
    .replace(/\\\[|\\\]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

const isJunkHeading = (h) =>
  /^(table of contents|toc|contents|index|license|contributing|translations?|contributors?|acknowledg|appendix|readme|references|footnotes|disclaimer|copyright|changelog|code of conduct|star history|support|advertisement|sponsors?|author|maintainers?|motivation|introduction|overview|installation|usage|getting started|quick ?start|anki|flash ?cards?|notes|summary|about|history|background|contact|faq\b)/i.test(h) ||
  h.length < 3;

const looksLikeCode = (line) => /^\s*(```|~~~|\||<img|<div|<p align|<a href|!\[)/.test(line);

// ---------------------------------------------------------------------------
// 1. Problem extraction (LeetCode links + numbered/bold question headings)
// ---------------------------------------------------------------------------
const LEETCODE_LINK = /\[([^\]]{2,80})\]\((https:\/\/leetcode\.com\/(?:problems|problems\/)[a-z0-9-]+\/?)\)/g;
const LEETCODE_BARE = /https:\/\/leetcode\.com\/problems\/([a-z0-9-]+)/g;
const NUMBERED_HEADING = /^#{2,4}\s*\d+[.)]\s+(.{3,120})$/;
const BOLD_QUESTION = /^\*\*([^*]{8,120}\?)\*\*\s*$/;

function extractProblems(text, meta) {
  const out = [];
  const lines = text.split('\n');
  let section = 'General';

  // (a) LeetCode markdown links — highest precision
  const seenSlugs = new Set();
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const h2 = /^##\s+(.{2,80})$/.exec(line);
    if (h2 && !isJunkHeading(cleanText(h2[1]))) section = cleanText(h2[1]);

    let m;
    LEETCODE_LINK.lastIndex = 0;
    while ((m = LEETCODE_LINK.exec(line))) {
      const slug = (m[2].match(/problems\/([a-z0-9-]+)/) || [])[1];
      if (!slug || seenSlugs.has(slug)) continue;
      seenSlugs.add(slug);
      const ctx = lines.slice(i, i + 4).join(' ');
      const dm = /\b(Easy|Medium|Hard)\b/.exec(ctx);
      let title = cleanText(m[1]);
      // slug-like link text ("isbinarysearchtree" / "two-sum") → readable Title Case from the slug
      if (/^[a-z0-9-]*$/.test(title) && !title.includes(' ')) {
        title = slug.split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ');
      }
      out.push({
        title,
        slug,
        url: `https://leetcode.com/problems/${slug}`,
        difficulty: dm ? dm[1] : 'Unknown',
        topics: [section],
        line: i
      });
    }
  }

  // (b) Numbered question headings ("## 12. How do X?") — question banks only.
  // Require a question mark: prose headings in study repos are not problems.
  for (let i = 0; i < lines.length; i++) {
    const m = NUMBERED_HEADING.exec(lines[i]);
    if (!m) continue;
    const title = cleanText(m[1]);
    if (!title || title.length < 8 || title.length > 120) continue;
    if (!/\?\s*$/.test(title)) continue;
    if (/^(code|example|solution|output|input|question)\s*[:.-]?\s*$/i.test(title)) continue;
    const ctx = lines.slice(i, i + 4).join(' ');
    const dm = /\bdifficulty\b[^A-Za-z]*(easy|medium|hard)|^\W*(easy|medium|hard)\b/im.exec(ctx);
    out.push({
      title: title.replace(/\?+$/, '?'),
      slug: slugify(title),
      url: meta.repo ? `https://github.com/${meta.repo}` : '',
      difficulty: dm ? dm[1][0].toUpperCase() + dm[1].slice(1).toLowerCase() : 'Unknown',
      topics: [meta.category],
      line: i
    });
  }

  return out;
}

// ---------------------------------------------------------------------------
// 2. System-design topic extraction (HLD + LLD deep-dives)
// ---------------------------------------------------------------------------
const SD_TOPIC_HEADING = /^(design(ing)?|how (does|do|to)|what is|scaling|building|implement)/i;
const SD_TERMS = /system design|scalab|distributed|load balanc|cache|caching|shard|replicat|queue|kafka|consensus|cap theorem|consisten|database|storage|api|microservice|rate limit|cdn|search|stream|message|lld|low[- ]level|oop|parking|elevator|chat|url short|news ?feed|timeline|video|notification|payment|rideshare|hotel|book|tic.?toe|snake|design pattern/i;

function extractSdTopics(text, meta) {
  const topics = [];
  const lines = text.split('\n');
  let cur = null;
  let depth = 0;

  const flush = () => {
    if (!cur) return;
    const content = cur.body.join('\n').trim();
    const titleOk =
      SD_TOPIC_HEADING.test(cur.title) ||
      SD_TERMS.test(cur.title) ||
      cur.headings.length >= 3; // a section with real subsections is a deep-dive
    if (cur.title.length >= 5 && !isJunkHeading(cur.title) && titleOk && content.length >= 300) {
      topics.push({
        id: `${slugify(meta.repo)}--${slugify(cur.title)}`,
        title: cur.title.slice(0, 110),
        repo: meta.repo,
        stars: meta.stars,
        category: meta.category,
        kind: /\blld\b|low[- ]level|oop|machine coding|design pattern/i.test(meta.repo + ' ' + cur.title) ? 'LLD' : 'HLD',
        headings: cur.headings,
        content: content.slice(0, 6000),
        url: `https://github.com/${meta.repo}`
      });
    }
    cur = null;
  };

  for (let line of lines) {
    const hm = /^(#{2,3})\s+(.{2,140})$/.exec(line);
    if (hm) {
      const title = cleanText(hm[2]);
      if (cur && hm[1].length <= depth) flush();
      if (!cur) {
        cur = { title, body: [], headings: [] };
        depth = hm[1].length;
      } else {
        cur.headings.push(title);
        cur.body.push(`### ${title}`);
      }
      continue;
    }
    if (cur) cur.body.push(line);
  }
  flush();
  return topics;
}

// ---------------------------------------------------------------------------
// 3. Q/A flashcard extraction
// ---------------------------------------------------------------------------
function extractQaCards(text, deck) {
  const cards = [];
  const lines = text.split('\n');

  // collect candidate question anchors: numbered headings and bold questions.
  // Numbered headings must be phrased as questions — prose steps are not cards.
  const anchors = [];
  for (let i = 0; i < lines.length; i++) {
    const nm = NUMBERED_HEADING.exec(lines[i]);
    if (nm) {
      const t = cleanText(nm[1]);
      if (t.length >= 10 && t.length <= 140 && /\?\s*$/.test(t)) anchors.push({ i, front: t });
      continue;
    }
    const bm = BOLD_QUESTION.exec(lines[i]);
    if (bm) {
      const t = cleanText(bm[1]);
      if (t.length >= 10 && t.length <= 140) anchors.push({ i, front: t });
    }
  }

  for (let a = 0; a < anchors.length; a++) {
    const { i, front } = anchors[a];
    const end = a + 1 < anchors.length ? anchors[a + 1].i : Math.min(lines.length, i + 60);
    const body = [];
    let inFence = false;
    for (let j = i + 1; j < end && body.join('\n').length < 900; j++) {
      const line = lines[j];
      if (/^\s*(```|~~~)/.test(line)) { inFence = !inFence; continue; }
      if (inFence) continue;
      if (/^#{1,6}\s/.test(line) || looksLikeCode(line)) continue;
      if (/^\s*$/.test(line)) { if (body.length) body.push(''); continue; }
      body.push(line.replace(/^\s*[-*>]+\s*/, ''));
    }
    const back = cleanText(body.join(' ').replace(/\s+/g, ' '));
    if (back.length >= 40) cards.push({ front, back: back.slice(0, 620) });
  }
  return cards;
}

// ---------------------------------------------------------------------------
// 4. Study-plan / roadmap extraction
// ---------------------------------------------------------------------------
function extractPlan(text, meta) {
  const lines = text.split('\n');
  const headings = [];
  let intro = '';
  let seenIntro = false;

  for (let i = 0; i < Math.min(lines.length, 4000); i++) {
    const hm = /^#{1,3}\s+(.{3,120})$/.exec(lines[i]);
    if (hm) {
      const t = cleanText(hm[1]);
      if (!isJunkHeading(t)) headings.push(t);
    } else if (!seenIntro && lines[i].trim().length > 60 && !looksLikeCode(lines[i])) {
      intro = cleanText(lines[i]).slice(0, 300);
      seenIntro = true;
    }
  }

  const planHeadings = headings.filter((h) =>
    /roadmap|study plan|curriculum|week\s*\d|day\s*\d|month\s*\d|schedule|timeline|phase|part\s*\d|step\s*\d|prep(aration)? (plan|roadmap|guide)|learning path/i.test(h)
  );
  if (planHeadings.length < 2 && !/roadmap|study plan|curriculum|30[- ]day|90[- ]day/i.test(text.slice(0, 4000))) return null;

  return {
    id: slugify(meta.repo),
    repo: meta.repo,
    name: meta.repo.split('/')[1].replace(/[-_]+/g, ' '),
    category: meta.category,
    stars: meta.stars,
    language: meta.language || '',
    url: `https://github.com/${meta.repo}`,
    summary: intro,
    sections: (planHeadings.length ? planHeadings : headings).slice(0, 40)
  };
}

// ---------------------------------------------------------------------------
// Deck mapping for flashcards
// ---------------------------------------------------------------------------
const deckFor = (meta) => {
  const repo = meta.repo.toLowerCase();
  if (meta.category === 'SQL & Data' || /\bsql\b|pandas|database/i.test(repo)) return 'SQL';
  if (meta.category === 'AI / ML & Data') return 'ML / AI';
  if (meta.category === 'Frontend & Mobile' || /front|react|angular|vue|js|android|ios|css/i.test(repo)) return 'Frontend';
  if (meta.category === 'Behavioral' || /behavioral|star\b/i.test(repo)) return 'Behavioral';
  if (meta.category === 'DevOps & Security' || /devops|sre|security|cloud|kubernetes|docker/i.test(repo)) return 'DevOps';
  if (meta.category === 'System Design') return /\blld\b|low[- ]level|oop|machine coding/i.test(repo) ? 'LLD' : 'System Design';
  if (/java\b|python\b|g\+\+|cpp|\bc\+\+|go\b|programming|algorith|data structure|dsa/i.test(repo)) return 'Coding';
  return 'General Prep';
};

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
const index = readIndex();
const bankProblems = new Map();   // key: slug → problem
const bankRepos = new Map();      // repo → { count }
const sdTopics = [];
const deckMap = new Map();        // deck → { repo, cards: [] }
const plans = [];

for (const meta of index) {
  const file = path.join(REPO_DIR, meta.file);
  if (!fs.existsSync(file)) continue;
  const text = fs.readFileSync(file, 'utf8');

  // ---- problems ----
  if (meta.category === 'General Prep' || meta.category === 'System Design' || /leetcode|algo|dsa|interview|coding|problem|placement|faang/i.test(meta.repo)) {
    const probs = extractProblems(text, meta);
    let added = 0;
    for (const p of probs) {
      if (!p.title || p.title.length < 3) continue;
      const key = p.slug;
      const existing = bankProblems.get(key);
      if (existing) {
        if (!existing.topics.includes(p.topics[0]) && existing.topics.length < 3) existing.topics.push(p.topics[0]);
        if (p.difficulty !== 'Unknown' && existing.difficulty === 'Unknown') existing.difficulty = p.difficulty;
        continue;
      }
      bankProblems.set(key, {
        id: `bank-${key}`,
        title: p.title,
        slug: p.slug,
        url: p.url,
        difficulty: p.difficulty,
        topics: p.topics.filter((t) => t && t.length < 40).slice(0, 3),
        sourceRepo: meta.repo,
        sourceStars: meta.stars
      });
      added++;
    }
    if (added > 0) bankRepos.set(meta.repo, { count: added, stars: meta.stars });
  }

  // ---- system design library ----
  if (meta.category === 'System Design' || SD_TERMS.test(meta.repo) ) {
    const topics = extractSdTopics(text, meta);
    for (const t of topics) sdTopics.push(t);
  }

  // ---- flashcards (only from repos that are actual question banks / study guides) ----
  {
    const qBankLike =
      /interview|questions?|quiz|flash ?card|prep|handbook|guide|notes|bank|faq|cheat ?sheet|study/i.test(meta.repo) ||
      ['General Prep', 'SQL & Data', 'Behavioral', 'Frontend & Mobile', 'DevOps & Security', 'System Design'].includes(meta.category);
    if (qBankLike) {
      const deck = deckFor(meta);
      const cards = extractQaCards(text, deck);
      if (cards.length >= 3) {
        const entry = deckMap.get(deck) || { repos: [], cards: [] };
        entry.repos.push({ repo: meta.repo, stars: meta.stars, count: cards.length });
        // cap per-repo for quality; prefer question-bank repos
        entry.cards.push(...cards.slice(0, 25).map((c) => ({ ...c, repo: meta.repo })));
        deckMap.set(deck, entry);
      }
    }
  }

  // ---- roadmaps / study plans ----
  if (/roadmap|study plan|curriculum|prep|plan|guide|university|bootcamp|handbook|30[- ]day|90[- ]day/i.test(meta.repo + ' ' + meta.category) || meta.category === 'General Prep') {
    const plan = extractPlan(text, meta);
    if (plan) plans.push(plan);
  }
}

// ---------------------------------------------------------------------------
// Write outputs
// ---------------------------------------------------------------------------
fs.mkdirSync(OUT_DIR, { recursive: true });
const now = new Date().toISOString();

const bankList = [...bankRepos.entries()]
  .sort((a, b) => b[1].count - a[1].count)
  .map(([repo, v]) => ({ repo, count: v.count, stars: v.stars }));
const bank = {
  generatedAt: now,
  problemCount: bankProblems.size,
  repoCount: bankRepos.size,
  repos: bankList,
  problems: [...bankProblems.values()].sort((a, b) => b.sourceStars - a.sourceStars)
};
fs.writeFileSync(path.join(OUT_DIR, 'repo-bank.json'), JSON.stringify(bank));

// SD library: dedupe by id, cap content, sort by stars
const seenSd = new Set();
const sdFiltered = [];
for (const t of sdTopics.sort((a, b) => b.stars - a.stars)) {
  if (seenSd.has(t.id)) continue;
  seenSd.add(t.id);
  sdFiltered.push(t);
}
const sd = {
  generatedAt: now,
  topicCount: sdFiltered.length,
  repoCount: new Set(sdFiltered.map((t) => t.repo)).size,
  topics: sdFiltered
};
fs.writeFileSync(path.join(OUT_DIR, 'sd-library.json'), JSON.stringify(sd));

// Flashcards: cap decks at 240 cards each, dedupe fronts within a deck
const decks = [];
for (const [name, entry] of deckMap) {
  const seen = new Set();
  const cards = [];
  for (const c of entry.cards) {
    const key = c.front.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim().slice(0, 90);
    if (seen.has(key)) continue;
    seen.add(key);
    cards.push({ id: `bank-card-${slugify(c.front).slice(0, 48)}-${cards.length}`, front: c.front, back: c.back, sourceRepo: c.repo });
    if (cards.length >= 240) break;
  }
  if (cards.length >= 3) {
    decks.push({
      name,
      cardCount: cards.length,
      repos: entry.repos.sort((a, b) => b.stars - a.stars).slice(0, 6),
      cards
    });
  }
}
decks.sort((a, b) => b.cardCount - a.cardCount);
const flash = { generatedAt: now, deckCount: decks.length, totalCards: decks.reduce((s, d) => s + d.cardCount, 0), decks };
fs.writeFileSync(path.join(OUT_DIR, 'repo-flashcards.json'), JSON.stringify(flash));

// Roadmaps
plans.sort((a, b) => b.stars - a.stars);
const roads = { generatedAt: now, planCount: plans.length, plans: plans.slice(0, 80) };
fs.writeFileSync(path.join(OUT_DIR, 'repo-roadmaps.json'), JSON.stringify(roads));

// ---------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------
const kb = (f) => Math.round(fs.statSync(path.join(OUT_DIR, f)).size / 1024) + ' KB';
console.log(`repo-bank.json       ${bank.problemCount} problems from ${bank.repoCount} repos (${kb('repo-bank.json')})`);
console.log(`sd-library.json      ${sd.topicCount} topics from ${sd.repoCount} repos (${kb('sd-library.json')})`);
console.log(`repo-flashcards.json ${flash.totalCards} cards in ${flash.deckCount} decks (${kb('repo-flashcards.json')})`);
for (const d of decks) console.log(`    deck ${d.name}: ${d.cardCount} cards`);
console.log(`repo-roadmaps.json   ${roads.planCount} study plans (${kb('repo-roadmaps.json')})`);

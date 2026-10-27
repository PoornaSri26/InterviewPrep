/**
 * One-off maintenance script: verifies every repo referenced by src/data/repoCatalog.ts
 * actually exists on github.com, and reports dead entries.
 *
 * Usage: node scripts/verify-repos.cjs [--prune]
 *   --prune  remove 404 entries from the catalog file (default: report only)
 */
const fs = require('fs');
const path = require('path');

const catalogPath = path.join(__dirname, '..', 'src', 'data', 'repoCatalog.ts');
const prune = process.argv.includes('--prune');
const CONCURRENCY = 6;

const repos = [...fs.readFileSync(catalogPath, 'utf8').matchAll(/^\s*\{\s*repo: '([^']*)'/gm)].map((m) => m[1]);
const unique = [...new Set(repos)];

const results = {};
let cursor = 0;

const check = async (repo) => {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 15000);
      const res = await fetch(`https://github.com/${repo}`, { method: 'HEAD', redirect: 'follow', signal: controller.signal });
      clearTimeout(timer);
      if (res.status === 429) {
        await new Promise((r) => setTimeout(r, 3000 * (attempt + 1)));
        continue;
      }
      return res.status;
    } catch {
      await new Promise((r) => setTimeout(r, 1000));
    }
  }
  return 'ERR';
};

const worker = async () => {
  while (cursor < unique.length) {
    const repo = unique[cursor++];
    results[repo] = await check(repo);
  }
};

(async () => {
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));

  const dead = Object.entries(results).filter(([repo, status]) => status === 404 || repo === '');
  const errors = Object.entries(results).filter(([, status]) => status !== 200 && status !== 404);

  fs.writeFileSync(path.join(__dirname, '..', '.repo-check.json'), JSON.stringify(results, null, 1));

  if (prune && dead.length) {
    const deadSet = new Set(dead.map(([repo]) => repo));
    const lines = fs.readFileSync(catalogPath, 'utf8').split('\n');
    const kept = lines.filter((line) => {
      const match = line.match(/^\s*\{\s*repo: '([^']*)'/);
      return !match || !deadSet.has(match[1]);
    });
    fs.writeFileSync(catalogPath, kept.join('\n'));
  }

  console.log(JSON.stringify({
    total: unique.length,
    reachable: Object.values(results).filter((s) => s === 200).length,
    notFound: dead.length,
    errors,
    pruned: prune ? dead.length : 0
  }, null, 1));
})();

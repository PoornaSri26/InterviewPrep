import fs from 'node:fs';

const src = fs.readFileSync('src/content/repoIndex.ts', 'utf8');
const start = src.indexOf('= [') + 1;
const json = src.slice(start, src.indexOf('];', start) + 1);
const idx = JSON.parse(json);

const cats = {};
let stars = 0;
for (const r of idx) { cats[r.category] = (cats[r.category] || 0) + 1; stars += r.stars; }
console.log('TOTAL', idx.length, 'repos,', (stars / 1e6).toFixed(1) + 'M stars');
for (const [c, n] of Object.entries(cats).sort((a, b) => b[1] - a[1])) console.log('  ' + c + ':', n);

console.log('--- TOP 15 ---');
idx.slice().sort((a, b) => b.stars - a.stars).slice(0, 15)
  .forEach(r => console.log('  ' + (r.stars / 1000).toFixed(0) + 'k', r.repo, '[' + r.category + ']'));

const pats = {
  'question banks / MCQs': /interview questions|quiz|mcq|frequently asked/i,
  'roadmaps / study plans': /roadmap|study plan|curriculum|\b30[- ]day|week \d/i,
  'system design content': /system design|scalability|cap theorem|load balanc|distributed/i,
  'LLD / OOP case studies': /low[- ]level design|design a parking|design elevator|oop design|design pattern/i,
  'code snippets / algorithms': /```(python|java|javascript|cpp|go|c\+\+)/i,
  'SQL / data engineering': /\bsql\b|pandas|window function|data engineer/i,
  'ML / LLM content': /machine learning|deep learning|pytorch|transformer|\bllm\b/i,
  'behavioral / STAR': /behavioral|star method|leadership principle|tell me about/i,
  'flashcards / cheatsheets': /flash ?card|cheat ?sheet|quick reference/i
};
const dir = 'src/content/repos';
const files = fs.readdirSync(dir);
const counts = Object.fromEntries(Object.keys(pats).map(k => [k, 0]));
const examples = Object.fromEntries(Object.keys(pats).map(k => [k, []]));
for (const f of files) {
  const t = fs.readFileSync(dir + '/' + f, 'utf8');
  for (const [k, re] of Object.entries(pats)) {
    if (re.test(t)) { counts[k]++; if (examples[k].length < 3) examples[k].push(f.replace(/\.md$/, '').replace(/__/g, '/')); }
  }
}
console.log(`--- CONTENT PATTERNS across ${files.length} stored READMEs ---`);
for (const [k, v] of Object.entries(counts)) {
  console.log(`  ${k}: ${v} (${Math.round((v / files.length) * 100)}%)  e.g. ${examples[k].join(', ')}`);
}

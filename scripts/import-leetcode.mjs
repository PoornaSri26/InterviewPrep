/**
 * Imports the local "Leetcode Company Wise Problems" CSV collection into
 * public/leetcode-sheets.json consumed by the LeetCode Sheets view.
 *
 * Usage:  node scripts/import-leetcode.mjs [path-to-leetcode-folder]
 * Default path: C:\Users\npoor\Leetcode
 *
 * Rerun this script whenever the CSVs change.
 */
import { readdirSync, readFileSync, writeFileSync, existsSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const DEFAULT_ROOT = 'C:/Users/npoor/Leetcode';
const root = process.argv[2] || DEFAULT_ROOT;
const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dirname, '..', 'public', 'leetcode-sheets.json');

// The collection folder is the one whose subdirectories each hold the CSVs
// (the extracted zip may nest it one level deep — don't match a company folder itself).
function findSheetsDir(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });
  const subdirs = entries.filter((e) => e.isDirectory() && !e.name.startsWith('__'));
  const csvSubdirs = subdirs.filter((s) => {
    try {
      return readdirSync(join(dir, s.name), { withFileTypes: true })
        .some((f) => f.isFile() && f.name.toLowerCase().endsWith('.csv'));
    } catch { return false; }
  });
  if (csvSubdirs.length >= 3) return dir;
  for (const s of subdirs) {
    const found = findSheetsDir(join(dir, s.name));
    if (found) return found;
  }
  return null;
}

/** Minimal RFC-4180-ish CSV parser: quoted fields, escaped quotes, CRLF. */
function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else inQuotes = false;
      } else field += c;
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ',') {
      row.push(field); field = '';
    } else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(field); field = '';
      if (row.some((f) => f.trim() !== '')) rows.push(row);
      row = [];
    } else field += c;
  }
  row.push(field);
  if (row.some((f) => f.trim() !== '')) rows.push(row);
  return rows;
}

const slugFromLink = (link) => (link.match(/\/problems\/([^/]+)/) || [, ''])[1];
const normTitle = (t) => t.trim().toLowerCase();

const sheetsDir = findSheetsDir(root);
if (!sheetsDir) {
  console.error(`No CSV collection found under ${root}`);
  process.exit(1);
}
console.log(`Scanning: ${sheetsDir}`);

const companies = readdirSync(sheetsDir, { withFileTypes: true })
  .filter((e) => e.isDirectory() && !e.name.startsWith('__'))
  .map((e) => e.name)
  .sort((a, b) => a.localeCompare(b));

const sheets = [];
let totalProblems = 0;
let doneCount = 0;
let skipped = 0;

const readCsvSafe = (company, file) => {
  const p = join(sheetsDir, company, file);
  if (!existsSync(p)) return null;
  try { return parseCsv(readFileSync(p, 'utf8')); } catch { return null; }
};

for (const company of companies) {
  const allRows = readCsvSafe(company, '5. All.csv');
  if (!allRows || allRows.length < 2) { skipped++; continue; }

  // Recent windows (titles only)
  const recent30 = new Set();
  const recent90 = new Set();
  for (const [file, set] of [['1. Thirty Days.csv', recent30], ['2. Three Months.csv', recent90]]) {
    const rows = readCsvSafe(company, file);
    if (!rows) continue;
    for (const r of rows.slice(1)) if (r[1]) set.add(normTitle(r[1]));
  }

  const problems = [];
  for (const r of allRows.slice(1)) {
    const [c0, c1, c2, c3, c4, c5] = r;
    // Header variants: some files use col0=difficulty with empty header, others label it "Difficulty".
    const difficultyRaw = (c0 || '').trim();
    const title = (c1 || '').trim();
    if (!title || /^title$/i.test(title) || /^difficulty$/i.test(difficultyRaw)) continue;
    const difficulty = ['EASY', 'MEDIUM', 'HARD'].includes(difficultyRaw.toUpperCase())
      ? difficultyRaw.toUpperCase()
      : (['EASY', 'MEDIUM', 'HARD'].includes((c0 || '').toUpperCase()) ? c0.toUpperCase() : 'UNKNOWN');

    const freq = parseFloat(c2);
    const acceptance = parseFloat(c3);
    const link = (c4 || '').trim();
    const topics = (c5 || '').split(',').map((t) => t.trim()).filter(Boolean);
    // Trailing columns hold the user's own status/notes (e.g. "Done").
    const note = (r.slice(6).map((f) => (f || '').trim()).find((f) => f !== '')) || undefined;
    const slug = slugFromLink(link) || normTitle(title).replace(/[^a-z0-9]+/g, '-');
    const key = `${company}::${slug}`;

    problems.push({
      id: key,
      title,
      difficulty,
      frequency: Number.isFinite(freq) ? freq : 0,
      acceptance: Number.isFinite(acceptance) ? Math.round(acceptance * 1000) / 10 : 0,
      link,
      topics,
      slug,
      note,
      last30: recent30.has(normTitle(title)),
      last90: recent90.has(normTitle(title))
    });
    totalProblems++;
    if (note && /done/i.test(note)) doneCount++;
  }

  if (problems.length > 0) {
    problems.sort((a, b) => b.frequency - a.frequency);
    sheets.push({ company, problems });
  }
}

const payload = {
  generatedAt: new Date().toISOString(),
  source: sheetsDir,
  companyCount: sheets.length,
  totalProblems,
  sheets
};

writeFileSync(outPath, JSON.stringify(payload));
const sizeMb = (statSync(outPath).size / (1024 * 1024)).toFixed(2);
console.log(`✓ ${sheets.length} companies, ${totalProblems} problem rows (${doneCount} marked Done, ${skipped} companies skipped)`);
console.log(`✓ Wrote ${outPath} (${sizeMb} MB)`);

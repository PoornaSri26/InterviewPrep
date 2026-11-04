import fs from 'fs';

const publicFiles = [
  'public/leetcode-sheets.json',
  'public/repo-bank.json',
  'public/repo-flashcards.json',
  'public/repo-roadmaps.json',
  'public/sd-library.json'
];

for (const f of publicFiles) {
  try {
    const raw = fs.readFileSync(f, 'utf8');
    const data = JSON.parse(raw);
    console.log(`\n=== ${f} ===`);
    if (Array.isArray(data)) {
      console.log(`Top-level array: ${data.length} items`);
    } else {
      console.log('Keys:', Object.keys(data));
      for (const k of Object.keys(data)) {
        if (Array.isArray(data[k])) {
          console.log(`  ${k}: array of ${data[k].length} items`);
        } else if (typeof data[k] === 'number') {
          console.log(`  ${k}: ${data[k]}`);
        }
      }
    }
  } catch (e) {
    console.error(f, e.message);
  }
}

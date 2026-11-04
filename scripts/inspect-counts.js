const fs = require('fs');

const files = [
  'src/data/problemsData.ts',
  'src/data/flashcardsData.ts',
  'src/data/questionBankData.ts',
  'src/data/behavioralData.ts',
  'src/data/systemDesignData.ts',
  'src/data/companyData.ts',
  'src/data/resourcesData.ts',
  'src/data/roadmapData.ts',
  'src/data/offersData.ts'
];

for (const file of files) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    const idCount = (content.match(/\bid:\s*['"`]/g) || []).length;
    console.log(`${file}: ${lines.length} lines, ~${idCount} items`);
  } catch (e) {
    console.error(file, e.message);
  }
}

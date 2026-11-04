import fs from 'fs';
const data = JSON.parse(fs.readFileSync('public/repo-bank.json', 'utf8'));
console.log('problemCount:', data.problemCount);
console.log('repoCount:', data.repoCount);
console.log('sample repo entry:', data.repos[0]);
console.log('sample problem entry:', data.problems[0]);

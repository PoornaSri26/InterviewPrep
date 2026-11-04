import fs from 'node:fs';
import path from 'node:path';

const REPO_DIR = 'src/content/repos';
const files = fs.readdirSync(REPO_DIR);

let totalNumberedQuestions = 0;
let totalBoldQuestions = 0;
let qRepos = 0;

for (const f of files) {
  if (!f.endsWith('.md')) continue;
  const content = fs.readFileSync(path.join(REPO_DIR, f), 'utf8');
  const lines = content.split('\n');
  let repoQuestions = 0;
  for (const l of lines) {
    if (/^#{1,4}\s+\d+[\.\)]\s+.{5,140}/.test(l)) {
      totalNumberedQuestions++;
      repoQuestions++;
    } else if (/^\*\*(?:Q(?:uestion)?\s*\d*[:\.]?|\d+[\.\)])\s*.{5,140}\*\*/i.test(l)) {
      totalBoldQuestions++;
      repoQuestions++;
    }
  }
  if (repoQuestions > 0) qRepos++;
}

console.log(`Found ${totalNumberedQuestions} numbered heading questions and ${totalBoldQuestions} bold questions across ${qRepos} repos! Total: ${totalNumberedQuestions + totalBoldQuestions}`);

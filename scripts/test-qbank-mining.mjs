/**
 * Script to test extracting all high-quality questions and answers from src/content/repos/
 */
import fs from 'node:fs';
import path from 'node:path';

const REPO_DIR = 'src/content/repos';
const files = fs.readdirSync(REPO_DIR);

const questions = [];

for (const file of files) {
  if (!file.endsWith('.md')) continue;
  const content = fs.readFileSync(path.join(REPO_DIR, file), 'utf8');
  const lines = content.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    let qText = null;

    // Pattern 1: Heading with number: "## 1. What is..." or "### 12. Explain..." or "1. ### What is..."
    const m1 = line.match(/^(?:#{1,4}\s+\d+[\.\)]|\d+[\.\)]\s+#{1,4})\s+(.+)/);
    // Pattern 2: Heading question: "## What is..." or "### How do you..."
    const m2 = line.match(/^#{2,4}\s+((?:What|How|Why|When|Where|Which|Explain|Describe|Compare|Can|Difference|Define|Is|Are|Does|Do|Give)\b[^\n\r]+)/i);
    // Pattern 3: Bold question: "**Q: What is...**" or "**1. What is...**"
    const m3 = line.match(/^\*\*(?:Q(?:uestion)?\s*\d*[:\.]?|\d+[\.\)])\s*(.+?)\*\*/i);

    if (m1) qText = m1[1];
    else if (m2) qText = m2[1];
    else if (m3) qText = m3[1];

    if (qText) {
      qText = qText.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/[*_`]/g, '').trim();
      if (qText.length >= 10 && qText.length <= 160 && !/^(table of contents|license|summary|readme|interview questions)/i.test(qText)) {
        // Collect answer text from subsequent lines
        const answerLines = [];
        for (let j = i + 1; j < Math.min(lines.length, i + 35); j++) {
          const next = lines[j].trim();
          if (/^#{1,4}\s+/.test(next) || /^\*\*(?:Q(?:uestion)?|\d+[\.\)])/i.test(next) || next.startsWith('| --')) break;
          if (next.length > 0 && !next.startsWith('![')) {
            answerLines.push(next.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/[*_`]/g, ''));
          }
        }
        const answer = answerLines.join(' ').replace(/\s+/g, ' ').trim();
        if (answer.length >= 40) {
          questions.push({
            file,
            question: qText,
            answer: answer.slice(0, 400)
          });
        }
      }
    }
  }
}

console.log(`Extracted ${questions.length} question-answer pairs from local repo markdown files!`);

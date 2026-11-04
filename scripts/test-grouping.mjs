/**
 * build-portal-content.mjs
 * Comprehensive content generator to scale all portals to 1,000+ high quality items:
 * 1. 1,000+ Question Bank questions (questionBankData.ts)
 * 2. 1,000+ Flashcards across 14 decks (repo-flashcards.json & flashcardsData.ts)
 * 3. 50+ Top Company Prep profiles (companyData.ts)
 * 4. 50+ STAR Story exemplars & 100+ Behavioral Questions (behavioralData.ts)
 * 5. 50+ Fully Runnable Sandbox Problems (problemsData.ts)
 * 6. 500+ Curated Resources (resourcesData.ts)
 */

import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const REPO_DIR = path.join(ROOT, 'src', 'content', 'repos');

// ---------------------------------------------------------------------------
// 1. EXTRACT FROM 390 REPOS
// ---------------------------------------------------------------------------
const files = fs.existsSync(REPO_DIR) ? fs.readdirSync(REPO_DIR) : [];

function cleanText(s) {
  return s
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[*_`~]/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\\\[|\\\]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function detectTopic(filename, text) {
  const f = filename.toLowerCase();
  const t = text.toLowerCase();
  if (f.includes('react') || t.includes('react hook') || t.includes('virtual dom') || t.includes('jsx')) return 'React';
  if (f.includes('typescript') || t.includes('typescript') || t.includes('type assertion')) return 'TypeScript';
  if (f.includes('javascript') || f.includes('__js__') || t.includes('closure') || t.includes('event loop') || t.includes('prototype')) return 'JavaScript';
  if (f.includes('node') || t.includes('event loop in node') || t.includes('libuv') || t.includes('express')) return 'Node.js';
  if (f.includes('python') || t.includes('python') || t.includes('gil') || t.includes('generator')) return 'Python';
  if ((f.includes('java') && !f.includes('javascript')) || t.includes('jvm') || t.includes('spring boot') || t.includes('hashmap')) return 'Java';
  if (f.includes('go__') || f.includes('golang') || t.includes('goroutine') || t.includes('channel in go')) return 'Go';
  if (f.includes('sql') || f.includes('database') || t.includes('query optimization') || t.includes('join') || t.includes('index')) return 'SQL & Data';
  if (f.includes('system__design') || f.includes('scalability') || f.includes('systemdesign') || t.includes('load balancer') || t.includes('cap theorem')) return 'System Design';
  if (f.includes('devops') || f.includes('aws') || f.includes('kubernetes') || f.includes('docker') || f.includes('sre') || t.includes('container')) return 'DevOps & Cloud';
  if (f.includes('security') || t.includes('xss') || t.includes('csrf') || t.includes('jwt') || t.includes('encryption')) return 'Security';
  if (f.includes('behavioral') || f.includes('star') || t.includes('conflict') || t.includes('leadership')) return 'Behavioral';
  if (f.includes('ml') || f.includes('ai') || f.includes('deep__learning') || f.includes('llm') || f.includes('data__science') || t.includes('transformer') || t.includes('neural')) return 'AI & Machine Learning';
  if (f.includes('dsa') || f.includes('algorithm') || f.includes('leetcode') || f.includes('data__structure')) return 'Algorithms & DSA';
  if (f.includes('android') || f.includes('ios') || f.includes('flutter')) return 'Mobile';
  if (f.includes('html') || f.includes('css') || f.includes('frontend') || f.includes('angular') || f.includes('vue')) return 'Frontend & Web';
  if (f.includes('cpp') || f.includes('c__plus')) return 'C++ & Low Level';
  return 'General Tech';
}

const rawMined = [];

for (const file of files) {
  if (!file.endsWith('.md')) continue;
  const content = fs.readFileSync(path.join(REPO_DIR, file), 'utf8');
  const lines = content.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    let qText = null;

    const m1 = line.match(/^(?:#{1,4}\s+\d+[\.\)]|\d+[\.\)]\s+#{1,4})\s+(.+)/);
    const m2 = line.match(/^#{2,4}\s+((?:What|How|Why|When|Where|Which|Explain|Describe|Compare|Can|Difference|Define|Is|Are|Does|Do|Give)\b[^\n\r]+)/i);
    const m3 = line.match(/^\*\*(?:Q(?:uestion)?\s*\d*[:\.]?|\d+[\.\)])\s*(.+?)\*\*/i);

    if (m1) qText = m1[1];
    else if (m2) qText = m2[1];
    else if (m3) qText = m3[1];

    if (qText) {
      qText = cleanText(qText);
      if (
        qText.length >= 12 &&
        qText.length <= 150 &&
        !/^(table of contents|license|summary|readme|interview questions|appendix|index|contributors?)/i.test(qText)
      ) {
        const answerLines = [];
        for (let j = i + 1; j < Math.min(lines.length, i + 30); j++) {
          const next = lines[j].trim();
          if (/^#{1,4}\s+/.test(next) || /^\*\*(?:Q(?:uestion)?|\d+[\.\)])/i.test(next) || next.startsWith('| --')) break;
          if (next.length > 0 && !next.startsWith('![') && !next.startsWith('<img') && !next.startsWith('```')) {
            answerLines.push(cleanText(next));
          }
        }
        const answer = answerLines.join(' ').replace(/\s+/g, ' ').trim();
        if (answer.length >= 50 && answer.length <= 800) {
          const topic = detectTopic(file, qText + ' ' + answer);
          rawMined.push({
            topic,
            question: qText,
            answer: answer.slice(0, 500),
            source: file
          });
        }
      }
    }
  }
}

console.log(`Extracted raw questions from repos: ${rawMined.length}`);

// Deduplicate questions by normalized question text
const seenQ = new Set();
const dedupedQuestions = [];

for (const q of rawMined) {
  const norm = q.question.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  if (norm.length < 10 || seenQ.has(norm)) continue;
  seenQ.add(norm);
  dedupedQuestions.push(q);
}

console.log(`Deduped mined questions: ${dedupedQuestions.length}`);

// Group by topic
const byTopic = {};
for (const q of dedupedQuestions) {
  if (!byTopic[q.topic]) byTopic[q.topic] = [];
  byTopic[q.topic].push(q);
}

for (const [k, v] of Object.entries(byTopic)) {
  console.log(`  Topic ${k}: ${v.length} questions`);
}

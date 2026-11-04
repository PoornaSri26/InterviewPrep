import fs from 'fs';

const filePath = 'src/data/behavioralData.ts';
let content = fs.readFileSync(filePath, 'utf8');

const map = {
  'Outage & Failure Recovery': 'Failure',
  'Ownership & Accountability': 'Leadership',
  'Technical Disagreement & Conflict': 'Conflict',
  'Invent & Simplify / Innovation': 'Impact',
  'Dive Deep & Root Cause Analysis': 'Leadership',
  'Customer Obsession': 'Impact',
  'Ambiguity & Fast Delivery': 'Ambiguity',
  'Mentorship & Culture': 'Teamwork',
  'Bias for Action & Deadlines': 'Impact',
  'High Stakes Stakeholder Management': 'Leadership'
};

for (const [k, v] of Object.entries(map)) {
  content = content.split(`"category": "${k}"`).join(`"category": "${v}"`);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Categories updated successfully!');

import { MockInterviewSession } from '../types';

/**
 * Local interview-coach engine.
 *
 * Everything here runs in the browser with no API keys: it reads the session
 * transcript the same way a human coach would — filler words, STAR structure,
 * quantified impact, answer depth, and domain vocabulary — then turns the
 * weakest signals into concrete drills.
 */

export interface CoachMetrics {
  answerCount: number;
  answerWords: number;
  avgAnswerWords: number;
  fillerCount: number;
  fillerRate: number;
  wordsPerMinute: number;
  starCoverage: number;
  quantifiedAnswers: number;
  structureScore: number;
  keywordHits: string[];
  keywordMisses: string[];
}

export interface CoachDrill {
  id: string;
  title: string;
  why: string;
  action: string;
  topic: string;
}

export interface CoachReport {
  headline: string;
  summary: string;
  metrics: CoachMetrics;
  strengths: string[];
  gaps: string[];
  drills: CoachDrill[];
  followUps: string[];
  nextAction: string;
}

export interface CoachPlan {
  sessions: number;
  averageOverall: number;
  trend: number;
  weakest: { label: string; score: number } | null;
  recurringFocus: string[];
  headline: string;
}

const FILLERS = ['um', 'uh', 'like', 'you know', 'basically', 'actually', 'kind of', 'sort of', 'literally', 'i mean', 'right?'];

/** Vocabulary a strong answer in each track tends to contain. */
const KEYWORD_BANK: Record<string, string[]> = {
  frontend: ['render', 'component', 'bundle', 'latency', 'accessibility', 'state', 'cache', 'hydration', 'performance', 'test'],
  backend: ['throughput', 'latency', 'shard', 'replica', 'queue', 'idempotent', 'cache', 'index', 'consistency', 'failure'],
  'distributed systems': ['throughput', 'latency', 'partition', 'replica', 'consensus', 'queue', 'backpressure', 'cache', 'consistency', 'failure'],
  'machine learning': ['dataset', 'embedding', 'training', 'evaluation', 'drift', 'baseline', 'precision', 'recall', 'latency', 'monitoring'],
  'engineering manager': ['stakeholder', 'roadmap', 'mentor', 'hiring', 'trade-off', 'impact', 'alignment', 'delivery', 'team', 'growth']
};

const STAR_CUES = {
  situation: ['when i', 'at my', 'in my previous', 'last year', 'on a project', 'we had', 'our team', 'the company'],
  task: ['tasked', 'goal', 'responsible', 'needed to', 'had to', 'my job', 'objective', 'asked to'],
  action: ['i built', 'i designed', 'i implemented', 'i led', 'i migrated', 'i wrote', 'i introduced', 'i refactored', 'i coordinated', 'we built'],
  result: ['result', 'impact', 'reduced', 'increased', 'improved', 'saved', 'cut', 'grew', 'shipped', 'adopted']
};

const normalize = (text: string) => text.toLowerCase().replace(/[^a-z0-9%\s.-]/g, ' ');

const countOccurrences = (haystack: string, needle: string): number => {
  if (!needle) return 0;
  // Whole-word matching: "um" must not be counted inside "number".
  const escaped = needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const matches = haystack.match(new RegExp(`\\b${escaped}\\b`, 'g'));
  return matches ? matches.length : 0;
};

const pickKeywords = (role: string, domain: string): string[] => {
  const haystack = `${role} ${domain}`.toLowerCase();
  for (const [key, words] of Object.entries(KEYWORD_BANK)) {
    if (haystack.includes(key)) return words;
  }
  return KEYWORD_BANK.backend;
};

export const buildCoachReport = (session: MockInterviewSession): CoachReport => {
  const answers = session.transcript
    .filter((turn) => turn.speaker === 'candidate')
    .map((turn) => turn.text.trim())
    .filter(Boolean);

  const joined = normalize(answers.join(' '));
  const allWords = joined.split(/\s+/).filter(Boolean);
  const answerWords = allWords.length;

  const fillerCount = FILLERS.reduce((sum, filler) => sum + countOccurrences(joined, normalize(filler).trim()), 0);
  const fillerRate = answerWords ? (fillerCount / answerWords) * 100 : 0;

  const minutes = Math.max(session.durationMinutes || 1, 1);
  const wordsPerMinute = Math.round(answerWords / minutes);

  const starHits = Object.values(STAR_CUES).map((cues) =>
    answers.some((answer) => {
      const text = normalize(answer);
      return cues.some((cue) => text.includes(normalize(cue).trim()));
    })
  );
  const starCoverage = Math.round((starHits.filter(Boolean).length / starHits.length) * 100);

  const quantifiedAnswers = answers.filter((answer) => /(?:\d|%|\bx\d|\bmillion|\bthousand|\bms\b|\bqps\b)/i.test(answer)).length;

  const keywords = pickKeywords(session.role, session.domain);
  const keywordHits = keywords.filter((word) => joined.includes(word));
  const keywordMisses = keywords.filter((word) => !joined.includes(word));

  const depthTarget = 90;
  const depthScore = answers.length ? Math.min(100, Math.round((answerWords / answers.length / depthTarget) * 100)) : 0;
  const quantifiedScore = answers.length ? (quantifiedAnswers / answers.length) * 100 : 0;
  const fillerScore = Math.max(0, 100 - fillerRate * 10);
  const keywordScore = keywords.length ? (keywordHits.length / keywords.length) * 100 : 0;
  const structureScore = Math.round(
    starCoverage * 0.4 + quantifiedScore * 0.2 + fillerScore * 0.15 + keywordScore * 0.15 + depthScore * 0.1
  );

  const answeredAll = answers.length >= 2;
  const gaps: string[] = [];
  if (!answeredAll) gaps.push('Only one substantive answer was captured — the coach needs at least two to separate style from substance.');
  if (fillerRate > 4) gaps.push(`${fillerCount} filler words across ${answerWords} words (${fillerRate.toFixed(1)}%). Aim below 3% to sound decisive.`);
  if (starCoverage < 75) gaps.push(`STAR coverage is ${starCoverage}% — ${starHits.map((hit, i) => (hit ? null : ['Situation', 'Task', 'Action', 'Result'][i])).filter(Boolean).join(', ')} missing from every answer.`);
  if (quantifiedAnswers < Math.max(1, Math.ceil(answers.length / 2))) gaps.push('Few answers quantify impact — numbers are what make a result believable.');
  if (keywordMisses.length) gaps.push(`Not yet mentioned: ${keywordMisses.slice(0, 5).join(', ')}.`);
  if (answers.length && answerWords / answers.length < 60) gaps.push('Answers are short for a senior loop — aim for 90–150 spoken words per answer.');

  const strengths: string[] = [];
  if (starCoverage >= 75) strengths.push('Answers follow the STAR arc consistently, so the interviewer can replay the story later.');
  if (fillerRate <= 4) strengths.push('Delivery is clean: filler words stay under the 4% threshold.');
  if (quantifiedAnswers >= Math.max(1, Math.ceil(answers.length / 2))) strengths.push('Impact is quantified in most answers, which reads as senior-level ownership.');
  if (keywordHits.length >= 4) strengths.push(`Comfortable with the track vocabulary: ${keywordHits.slice(0, 5).join(', ')}.`);
  if (strengths.length === 0) strengths.push('Session completed end-to-end — that is the prerequisite for every improvement below.');

  const drills: CoachDrill[] = [];
  if (fillerRate > 4) {
    drills.push({
      id: 'drill-fillers',
      title: '90-second clean-delivery drill',
      why: `Filler words appeared ${fillerCount} times (${fillerRate.toFixed(1)}% of speech).`,
      action: 'Record a 90-second answer to "walk me through your last project". Replay it and count every um/like/you know. Repeat until the count is under three.',
      topic: 'Communication'
    });
  }
  if (starCoverage < 100) {
    drills.push({
      id: 'drill-star',
      title: 'STAR skeleton in four sentences',
      why: 'Every behavioral answer needs a visible Situation, Task, Action, and Result.',
      action: 'Write one story as four labelled sentences, then say it aloud without reading. Do the same for your three weakest stories in STAR Studio.',
      topic: 'Behavioral'
    });
  }
  if (quantifiedAnswers < Math.max(1, Math.ceil(answers.length / 2))) {
    drills.push({
      id: 'drill-metrics',
      title: 'Add one number per answer',
      why: 'Quantified impact converts a description into evidence.',
      action: 'Take your last three answers and attach a metric to each result (latency, cost, users, revenue, incident count). Say the revised answer out loud.',
      topic: 'Impact'
    });
  }
  if (keywordMisses.length) {
    drills.push({
      id: 'drill-vocab',
      title: `Vocabulary pass: ${keywordMisses.slice(0, 3).join(', ')}`,
      why: 'These are the terms the interviewer expects to hear in this track.',
      action: `Explain each of ${keywordMisses.slice(0, 3).join(', ')} in one sentence and where you have used it. Add the weak ones to your flashcards.`,
      topic: 'Technical Depth'
    });
  }
  if (answers.length && answerWords / answers.length < 60) {
    drills.push({
      id: 'drill-depth',
      title: 'Expand to the 90-second shape',
      why: 'Short answers skip the trade-offs and failure modes interviewers probe.',
      action: 'Rebuild one answer with: context (20s), options considered (25s), decision and trade-off (25s), result and lesson (20s).',
      topic: 'Structure'
    });
  }
  if (drills.length === 0) {
    drills.push({
      id: 'drill-stretch',
      title: 'Stretch round: failure and ambiguity',
      why: 'Strong sessions need harder material to keep improving.',
      action: 'Run another mock with the "David Miller (Behavioral)" persona and answer only with stories that include a mistake and its correction.',
      topic: 'Behavioral'
    });
  }

  const focus = drills[0];
  const followUps = [
    `Walk me through the trade-off you did not mention the first time: what would you do differently now?`,
    keywordMisses.length
      ? `Where have you personally used ${keywordMisses[0]} in production, and what broke?`
      : `Which part of that design would fail first at 10x traffic, and how would you detect it?`,
    `Tell me about a time the outcome was worse than expected. What did you change afterwards?`
  ];

  const weakestCompetency = Object.entries(session.scores)
    .filter(([key]) => key !== 'overall')
    .sort((a, b) => a[1] - b[1])[0];

  const headline = weaknessesHeadline(structureScore, weakestCompetency[0], weakestCompetency[1]);

  const summary = [
    `Captured ${answers.length} answer${answers.length === 1 ? '' : 's'} (${answerWords} words, ~${wordsPerMinute} wpm).`,
    `STAR ${starCoverage}%, structure ${structureScore}/100, filler ${fillerRate.toFixed(1)}%.`,
    `The next rep should target ${focus.topic.toLowerCase()}.`
  ].join(' ');

  return {
    headline,
    summary,
    metrics: {
      answerCount: answers.length,
      answerWords,
      avgAnswerWords: answers.length ? Math.round(answerWords / answers.length) : 0,
      fillerCount,
      fillerRate,
      wordsPerMinute,
      starCoverage,
      quantifiedAnswers,
      structureScore,
      keywordHits,
      keywordMisses
    },
    strengths,
    gaps,
    drills,
    followUps,
    nextAction: focus.action
  };
};

const weaknessesHeadline = (structureScore: number, competency: string, score: number): string => {
  const label = competency.replace(/([A-Z])/g, ' $1').replace(/^./, (c) => c.toUpperCase());
  if (structureScore >= 80) return `Strong structure (${structureScore}/100) — polish ${label.toLowerCase()}, the lowest rubric dimension at ${score}%.`;
  if (structureScore >= 60) return `Solid content, uneven delivery. Focus on ${label.toLowerCase()} plus answer structure (${structureScore}/100).`;
  return `Structure is the bottleneck (${structureScore}/100). Rebuild answers before adding more technical depth.`;
};

export interface AnswerReview {
  index: number;
  question: string;
  answer: string;
  scores: { structure: number; depth: number; impact: number; clarity: number };
  notes: string[];
  upgrade: string;
}

/**
 * Per-answer evaluation. Each answer is scored against the same four signals a
 * reviewer would use, and paired with the interviewer question that prompted it.
 */
export const reviewAnswers = (session: MockInterviewSession): AnswerReview[] => {
  const reviews: AnswerReview[] = [];

  session.transcript.forEach((turn, index) => {
    if (turn.speaker !== 'candidate') return;
    const question =
      [...session.transcript.slice(0, index)].reverse().find((other) => other.speaker === 'interviewer')?.text ??
      'Interview question';
    const answer = turn.text.trim();
    const text = normalize(answer);
    const words = answer.split(/\s+/).filter(Boolean).length;
    const fillers = FILLERS.reduce((sum, filler) => sum + countOccurrences(text, normalize(filler).trim()), 0);
    const fillerRate = words ? (fillers / words) * 100 : 0;

    const cueEntries = Object.entries(STAR_CUES);
    const star = cueEntries.filter(([, cues]) => cues.some((cue) => text.includes(normalize(cue).trim()))).length;
    const missing = cueEntries
      .filter(([, cues]) => !cues.some((cue) => text.includes(normalize(cue).trim())))
      .map(([label]) => label);
    const hasNumbers = /(\d|%|\bx\d|\bmillion|\bthousand)/i.test(answer);

    const scores = {
      structure: Math.round((star / 4) * 100),
      depth: Math.max(0, Math.min(100, Math.round((words / 90) * 100))),
      impact: hasNumbers ? 100 : 0,
      clarity: Math.max(0, Math.min(100, Math.round(100 - fillerRate * 8)))
    };

    const notes: string[] = [];
    if (missing.length) notes.push(`No ${missing.join(', ')} cue — the answer never resolves into a result.`);
    if (!hasNumbers) notes.push('No number anywhere: add latency, cost, users, or incident impact.');
    if (fillerRate > 4) notes.push(`${fillers} filler words (${fillerRate.toFixed(1)}%) — say this answer aloud once more.`);
    if (words < 60) notes.push(`Only ${words} words: add the options you rejected and why.`);
    if (words > 260) notes.push(`${words} words is long for one answer: keep the decision and its evidence.`);
    if (notes.length === 0) notes.push('Complete answer: STAR arc, evidence, and a clear result.');

    reviews.push({
      index: reviews.length + 1,
      question,
      answer,
      scores,
      notes,
      upgrade: hasNumbers
        ? 'Name the trade-off explicitly: "I chose X over Y because Z", then the result.'
        : 'Quantify the result: "p95 fell from 480ms to 260ms" lands harder than "it got faster".'
    });
  });

  return reviews;
};

/**
 * Evidence-based rubric. Replaces the old word-count heuristic: every score is
 * a function of something measurable in the transcript.
 */
export const deriveScores = (session: MockInterviewSession): MockInterviewSession['scores'] => {
  const report = buildCoachReport(session);
  const candidateText = normalize(
    session.transcript
      .filter((turn) => turn.speaker === 'candidate')
      .map((turn) => turn.text)
      .join(' ')
  );

  const architectureTerms = ['cache', 'queue', 'index', 'replica', 'shard', 'load balanc', 'cdn', 'partition', 'consistency', 'latency', 'throughput'];
  const tradeoffTerms = ['trade-off', 'tradeoff', 'instead of', 'versus', 'alternative', 'downside', 'failure', 'risk'];

  const architecture = architectureTerms.filter((term) => candidateText.includes(term)).length;
  const tradeoffs = tradeoffTerms.filter((term) => candidateText.includes(term)).length;
  const keywordRatio = report.metrics.keywordHits.length / Math.max(1, report.metrics.keywordHits.length + report.metrics.keywordMisses.length);
  const quantifiedRatio = report.metrics.answerCount ? report.metrics.quantifiedAnswers / report.metrics.answerCount : 0;
  const depthRatio = Math.min(1, report.metrics.avgAnswerWords / 100);

  const clamp = (value: number) => Math.max(35, Math.min(98, Math.round(value)));

  const technicalAccuracy = clamp(42 + keywordRatio * 30 + depthRatio * 18 + Math.min(architecture, 4) * 3);
  const systemThinking = clamp(40 + Math.min(architecture, 6) * 7 + Math.min(tradeoffs, 4) * 4);
  const communication = clamp(100 - report.metrics.fillerRate * 6 + report.metrics.starCoverage * 0.18);
  const problemSolving = clamp(45 + Math.min(tradeoffs, 5) * 6 + quantifiedRatio * 15 + depthRatio * 10);
  const behavioralFit = clamp(50 + report.metrics.starCoverage * 0.3 + quantifiedRatio * 16);
  const overall = Math.round((technicalAccuracy + systemThinking + communication + problemSolving + behavioralFit) / 5);

  return { technicalAccuracy, systemThinking, communication, problemSolving, behavioralFit, overall };
};

/** Turns coach drills into flashcards so the fix is rehearsed, not just read. */
export const coachDrillCards = (drills: CoachDrill[]): { front: string; back: string }[] =>
  drills.map((drill) => ({
    front: `${drill.title} — what should I practise and why?`,
    back: `${drill.why} ${drill.action}`
  }));

export interface ExplainBackResult {
  score: number;
  feedback: string[];
  strengths: string[];
  improvements: string[];
  twistQuestion: string;
}

export const evaluateExplainBack = (problemTitle: string, explanation: string, twistAnswer?: string): ExplainBackResult => {
  const text = normalize(explanation);
  const words = explanation.split(/\s+/).filter(Boolean).length;
  const hasApproach = /(approach|algorithm|method|idea|strategy)/.test(text);
  const hasComplexity = /(time|space|complexity|o\(|big o)/.test(text);
  const hasExample = /(example|walk|step|first|then)/.test(text);
  const hasEdge = /(edge|case|corner|empty|null)/.test(text);

  let score = 60;
  const feedback: string[] = [];
  const strengths: string[] = [];
  const improvements: string[] = [];

  if (words >= 60) { score += 10; strengths.push('Good explanation length'); }
  else improvements.push('Explain in more detail (aim for 60-120 words)');

  if (hasApproach) { score += 10; strengths.push('Clearly explained your approach'); }
  else improvements.push('Start with your high-level approach');

  if (hasComplexity) { score += 10; strengths.push('Mentioned time/space complexity'); }
  else improvements.push('Include time and space complexity');

  if (hasExample) { score += 5; strengths.push('Walked through an example'); }
  else improvements.push('Walk through a small example step by step');

  if (hasEdge) { score += 5; strengths.push('Considered edge cases'); }
  else improvements.push('Mention edge cases to consider');

  score = Math.min(100, score);

  const twistQuestions = [
    `Now the array is streaming - can you do this in one pass?`,
    `What if there are duplicate values? How would your approach change?`,
    `Can you optimize this further? What's the trade-off?`,
    `How would you test this solution? What edge cases would you check?`,
    `If the input is 10x larger, would your solution still work well?`
  ];

  return {
    score,
    feedback,
    strengths,
    improvements,
    twistQuestion: twistQuestions[Math.floor(Math.random() * twistQuestions.length)]
  };
};

/** Aggregates the last sessions into one diagnosis for the dashboard. */
export const buildCoachPlan = (sessions: MockInterviewSession[]): CoachPlan | null => {
  if (sessions.length === 0) return null;

  const recent = [...sessions].slice(0, 5);
  const averageOverall = Math.round(recent.reduce((sum, s) => sum + s.scores.overall, 0) / recent.length);
  const trend = sessions.length > 1 ? sessions[0].scores.overall - sessions[1].scores.overall : 0;

  const dimensions: { key: keyof MockInterviewSession['scores']; label: string }[] = [
    { key: 'technicalAccuracy', label: 'Technical accuracy' },
    { key: 'systemThinking', label: 'System thinking' },
    { key: 'communication', label: 'Communication' },
    { key: 'problemSolving', label: 'Problem solving' },
    { key: 'behavioralFit', label: 'Behavioral fit' }
  ];

  const averages = dimensions
    .map((d) => ({ label: d.label, score: Math.round(recent.reduce((sum, s) => sum + s.scores[d.key], 0) / recent.length) }))
    .sort((a, b) => a.score - b.score);

  const recurringFocus: string[] = [];
  for (const session of recent) {
    for (const drill of buildCoachReport(session).drills) {
      if (!recurringFocus.includes(drill.topic)) recurringFocus.push(drill.topic);
    }
  }

  return {
    sessions: sessions.length,
    averageOverall,
    trend,
    weakest: averages[0] ?? null,
    recurringFocus: recurringFocus.slice(0, 3),
    headline: averages[0]
      ? `${averages[0].label} is the recurring weak spot at ${averages[0].score}%. ${trend > 0 ? `Scores are up ${trend} points.` : trend < 0 ? `Scores dipped ${Math.abs(trend)} points.` : 'Scores are flat.'}`
      : 'No scored sessions yet.'
  };
};

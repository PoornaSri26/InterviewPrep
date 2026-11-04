export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface TestCase {
  input: string;
  expected: string;
}

export interface Problem {
  id: string;
  title: string;
  difficulty: Difficulty;
  category: string;
  patterns?: string[];
  companies: string[];
  description: string;
  examples: { input: string; output: string; explanation?: string }[];
  constraints: string[];
  starterCodeJs: string;
  starterCodePy: string;
  testCases: TestCase[];
  solutionCodeJs: string;
  timeComplexity: string;
  spaceComplexity: string;
  hints: string[];
  sourceUrl?: string;
  status: 'unsolved' | 'learning' | 'reviewing' | 'mastered';
  lastReviewed?: string;
  nextReviewDate?: string;
  intervalDays: number;
  easeFactor: number;
  repetitionCount: number;
  userNotes?: string;
}

export interface MockInterviewSession {
  id: string;
  timestamp: string;
  role: string;
  domain: string;
  persona: string;
  durationMinutes: number;
  questionsAnswered: number;
  scores: {
    technicalAccuracy: number;
    systemThinking: number;
    communication: number;
    problemSolving: number;
    behavioralFit: number;
    overall: number;
  };
  transcript: {
    speaker: 'interviewer' | 'candidate';
    text: string;
    timestamp: string;
  }[];
  feedback: {
    summary: string;
    strengths: string[];
    improvements: string[];
    suggestedTopics: string[];
  };
}

export interface StarStory {
  id: string;
  title: string;
  category: 'Conflict' | 'Leadership' | 'Failure' | 'Ambiguity' | 'Impact' | 'Teamwork';
  situation: string;
  task: string;
  action: string;
  result: string;
  metrics: string;
  tags: string[];
  lastUpdated: string;
  score?: number;
}

export interface SystemDesignTopic {
  id: string;
  title: string;
  difficulty: Difficulty;
  scaleEstimate: string;
  requirements: {
    functional: string[];
    nonFunctional: string[];
  };
  architectureNodes: {
    id: string;
    label: string;
    type: 'client' | 'lb' | 'gateway' | 'service' | 'cache' | 'db' | 'queue' | 'storage';
    x: number;
    y: number;
  }[];
  architectureConnections: {
    from: string;
    to: string;
    label?: string;
  }[];
  keyConsiderations: string[];
  sampleQuestions: string[];
}

export interface RoadmapWeek {
  weekNumber: number;
  title: string;
  focus: string;
  topics: string[];
  resources: { name: string; url: string; type: 'site' | 'repo' | 'video' }[];
  milestones: { id: string; text: string; completed: boolean }[];
}

export interface ResourceItem {
  id: string;
  name: string;
  category: 'DSA' | 'System Design' | 'Frontend' | 'Machine Learning' | 'Behavioral' | 'Mock Platforms' | 'GitHub Repos' | 'Web Projects' | 'Video Mock' | 'AI Interview' | 'Company Prep';
  description: string;
  url: string;
  badge?: string;
  pricing: 'Free' | 'Freemium' | 'Paid';
  githubRepo?: string;
  techStack?: string;
}

// ----------- NEW TYPES FOR ADDED MODULES -----------

export interface Flashcard {
  id: string;
  topic: string;
  deck: string;           // builtin decks + any imported repo-bank deck (e.g. "ML / AI", "LLD")
  front: string;
  back: string;
  mnemonic?: string;
  example?: string;
  status: 'new' | 'learning' | 'mastered';
  intervalDays: number;
  easeFactor: number;
  repetitionCount: number;
  nextReviewDate?: string;
}

export type CompanyTier = 'FAANG+' | 'Top-Tier' | 'High-Growth' | 'Tier 1' | 'Quant / Fintech' | 'AI Frontier';

export interface CompanyProfile {
  id: string;
  name: string;
  tier: CompanyTier;
  logo: string;           // emoji stand-in
  accentColor: string;
  interviewProcess: {
    stage: string;
    description: string;
    duration: string;
  }[];
  lpPrinciples?: {
    name: string;
    description: string;
    sampleQuestion: string;
  }[];
  technicalFocus: string[];
  glassdoorUrl: string;
  levelsFyiUrl: string;
  commonProblems: { title: string; difficulty: Difficulty; url: string }[];
  insiderTips: string[];
}

export interface OfferPackage {
  id: string;
  companyName: string;
  location: string;
  costOfLivingIndex: number; // 100 = SF baseline
  role: string;
  level: string;
  baseSalary: number;
  annualBonus: number;       // target %
  signingBonus: number;
  equityTotal: number;       // USD value over vesting period
  vestingYears: number;
  cliffMonths: number;
  benefits: {
    health: number;          // estimated USD/year
    retirement401k: number;  // employer match %
    pto: number;             // days per year
    remoteDays: number;      // days WFH per week
    otherPerks: string;
  };
  notes: string;
  createdAt: string;
}

export interface DailyChallenge {
  date: string;           // YYYY-MM-DD
  problemId: string;
  completed: boolean;
  timeTakenMinutes?: number;
  codeSubmitted?: string;
}

// ----------- LEETCODE COMPANY SHEETS -----------

export type SheetDifficulty = 'EASY' | 'MEDIUM' | 'HARD' | 'UNKNOWN';

export interface LeetcodeSheetProblem {
  id: string;              // `${company}::${slug}`
  title: string;
  difficulty: SheetDifficulty;
  frequency: number;       // 0–100, company-relative
  acceptance: number;      // percent, 1 decimal
  link: string;
  topics: string[];
  slug: string;
  note?: string;           // your own note carried over from the CSV (e.g. "Done")
  last30: boolean;         // appears in the company's 30-day sheet
  last90: boolean;         // appears in the 3-month sheet
}

export interface LeetcodeSheet {
  company: string;
  problems: LeetcodeSheetProblem[];
}

export interface LeetcodeSheetsFile {
  generatedAt: string;
  source: string;
  companyCount: number;
  totalProblems: number;
  sheets: LeetcodeSheet[];
}

// Pattern-first learning
export interface DsaPattern {
  id: string;
  name: string;
  description: string;
  recognitionTips: string[];
  whenToUse: string[];
  timeComplexityTypical: string;
  spaceComplexityTypical: string;
}

// Bug hunt mode
export interface BugHuntProblem {
  id: string;
  title: string;
  description: string;
  language: 'javascript' | 'python';
  buggyCode: string;
  expectedBehavior: string;
  hints: string[];
  testCases: TestCase[];
  solutionExplanation: string;
  bugs: string[];
}

// Complexity gym
export interface ComplexityDrill {
  id: string;
  code: string;
  language: 'javascript' | 'python';
  question: string;
  expectedTime: string;
  expectedSpace: string;
  explanation: string;
}

export interface ProblemSolution {
  code: string;
  note: string;
  solved: boolean;
  updatedAt: string;
}

/** Your personal solutions, keyed by LeetCode slug (e.g. "two-sum"). */
export type SolutionMap = Record<string, ProblemSolution>;

/** Sheet data indexed by normalized problem title — links tracker rows to company sheets. */
export interface SheetProblemMeta {
  frequency: number;      // max across companies
  companies: string[];    // every company whose sheet lists it
}
export type SheetMetaMap = Record<string, SheetProblemMeta>;

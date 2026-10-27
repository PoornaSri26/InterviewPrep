import { ResourceItem } from '../types';

export const allResources: ResourceItem[] = [
  // Coding / DSA Practice Websites
  {
    id: 'leetcode',
    name: 'LeetCode',
    category: 'DSA',
    description: 'Gold standard for company-tagged problems, weekly contests, and interview discussions.',
    url: 'https://leetcode.com',
    badge: 'Industry Standard',
    pricing: 'Freemium'
  },
  {
    id: 'neetcode',
    name: 'NeetCode',
    category: 'DSA',
    description: 'Curated lists (Blind 75, NeetCode 150, 250) with high-clarity video explanations and code patterns.',
    url: 'https://neetcode.io',
    badge: 'Top Pick for Patterns',
    pricing: 'Free'
  },
  {
    id: 'takeuforward',
    name: 'TakeUForward',
    category: 'DSA',
    description: "Striver's SDE Sheet, A2Z DSA Course, and exhaustive problem breakdowns.",
    url: 'https://takeuforward.org',
    badge: 'SDE Sheet Favorite',
    pricing: 'Free'
  },
  {
    id: 'hackerrank',
    name: 'HackerRank',
    category: 'DSA',
    description: 'Beginner-friendly challenges, domain skill certifications; widely used by employers for initial screening.',
    url: 'https://www.hackerrank.com',
    badge: 'Screening Standard',
    pricing: 'Free'
  },
  {
    id: 'geeksforgeeks',
    name: 'GeeksforGeeks',
    category: 'DSA',
    description: 'Comprehensive CS concepts, data structures tutorials, and company interview archives.',
    url: 'https://www.geeksforgeeks.org',
    pricing: 'Freemium'
  },
  {
    id: 'interviewbit',
    name: 'InterviewBit',
    category: 'DSA',
    description: 'Structured topic-wise DSA path with timed coding environment and gamified stages.',
    url: 'https://www.interviewbit.com',
    pricing: 'Free'
  },
  {
    id: 'codeforces',
    name: 'Codeforces',
    category: 'DSA',
    description: 'Competitive programming platform with high-rated contests and advanced algorithmic challenges.',
    url: 'https://codeforces.com',
    badge: 'Advanced Algorithms',
    pricing: 'Free'
  },
  {
    id: 'codechef',
    name: 'CodeChef',
    category: 'DSA',
    description: 'Contests, practice challenges, and collegiate programming communities.',
    url: 'https://www.codechef.com',
    pricing: 'Free'
  },
  {
    id: 'codesignal',
    name: 'CodeSignal',
    category: 'DSA',
    description: 'General Coding Assessment (GCA) benchmark used by top tech firms like Uber and Capital One.',
    url: 'https://codesignal.com',
    badge: 'Assessment Prep',
    pricing: 'Freemium'
  },
  {
    id: 'codility',
    name: 'Codility',
    category: 'DSA',
    description: 'Screening-style timed tests and algorithmic efficiency benchmarks.',
    url: 'https://www.codility.com',
    pricing: 'Freemium'
  },
  {
    id: 'algomonster',
    name: 'AlgoMonster',
    category: 'DSA',
    description: 'Pattern-based DSA learning targeting FAANG interviews with visual flowcharts.',
    url: 'https://algo.monster',
    pricing: 'Paid'
  },
  {
    id: 'algoexpert',
    name: 'AlgoExpert',
    category: 'DSA',
    description: '160+ curated questions with in-depth video explanations and multi-language solutions by Clément.',
    url: 'https://www.algoexpert.io',
    pricing: 'Paid'
  },
  {
    id: 'naukri-code360',
    name: 'Naukri Code360 (Coding Ninjas)',
    category: 'DSA',
    description: 'Guided career paths, India-focused interview sheets, and company-specific problem sets.',
    url: 'https://www.naukri.com/code360',
    pricing: 'Freemium'
  },
  {
    id: 'exercism',
    name: 'Exercism',
    category: 'DSA',
    description: 'Code practice in 70+ languages with free human mentoring and test-driven feedback.',
    url: 'https://exercism.org',
    badge: 'Language Mastery',
    pricing: 'Free'
  },

  // System Design & Low-Level Design
  {
    id: 'bytebytego',
    name: 'ByteByteGo',
    category: 'System Design',
    description: 'Alex Xu’s famous system design newsletter, visual books, and interactive architectural courses.',
    url: 'https://bytebytego.com',
    badge: 'Visual Masterclass',
    pricing: 'Freemium'
  },
  {
    id: 'hello-interview',
    name: 'Hello Interview',
    category: 'System Design',
    description: 'Modern system design breakdowns, rubrics, and detailed step-by-step guides for Senior/Staff roles.',
    url: 'https://www.hellointerview.com',
    badge: 'Modern Guide',
    pricing: 'Free'
  },
  {
    id: 'educative-grokking',
    name: 'Educative (Grokking Series)',
    category: 'System Design',
    description: 'Grokking the System Design Interview and Grokking the Coding Interview text-based interactive courses.',
    url: 'https://www.educative.io',
    pricing: 'Paid'
  },
  {
    id: 'systemdesignschool',
    name: 'System Design School',
    category: 'System Design',
    description: 'Tutorials, case studies, and structured system design interview frameworks.',
    url: 'https://systemdesignschool.io',
    pricing: 'Freemium'
  },
  {
    id: 'highscalability',
    name: 'High Scalability',
    category: 'System Design',
    description: 'Real-world architectures and case studies of Netflix, YouTube, Twitter, and Uber.',
    url: 'https://highscalability.com',
    pricing: 'Free'
  },
  {
    id: 'refactoring-guru',
    name: 'Refactoring Guru',
    category: 'System Design',
    description: 'Design patterns and refactoring principles (Creational, Structural, Behavioral) essential for LLD/OOP rounds.',
    url: 'https://refactoring.guru',
    badge: 'LLD & OOP Essential',
    pricing: 'Free'
  },

  // Front-End Interview Prep
  {
    id: 'greatfrontend',
    name: 'GreatFrontEnd',
    category: 'Frontend',
    description: 'Ex-FAANG front-end interview preparation: JS questions, UI components, and Front End system design.',
    url: 'https://www.greatfrontend.com',
    badge: 'Premier Frontend',
    pricing: 'Freemium'
  },
  {
    id: 'frontendmentor',
    name: 'Frontend Mentor',
    category: 'Frontend',
    description: 'Real-world Figma UI designs to build with HTML, CSS, JavaScript, and modern frameworks.',
    url: 'https://www.frontendmentor.io',
    pricing: 'Freemium'
  },
  {
    id: 'javascript-info',
    name: 'JavaScript.info',
    category: 'Frontend',
    description: 'The definitive deep-dive guide from JS basics to advanced event loops, prototypes, and memory.',
    url: 'https://javascript.info',
    badge: 'Must Read JS',
    pricing: 'Free'
  },
  {
    id: 'bigfrontend',
    name: 'BigFrontEnd.dev',
    category: 'Frontend',
    description: 'Practice frontend coding questions, JavaScript quizzes, and UI widgets online.',
    url: 'https://bigfrontend.dev',
    pricing: 'Free'
  },

  // Machine Learning / Data Science
  {
    id: 'stratascratch',
    name: 'StrataScratch',
    category: 'Machine Learning',
    description: '1000+ real interview questions from top tech companies for Data Science, SQL, and Pandas.',
    url: 'https://www.stratascratch.com',
    pricing: 'Freemium'
  },
  {
    id: 'datalemur',
    name: 'DataLemur',
    category: 'Machine Learning',
    description: 'Ace the SQL and Data Science interview with company-tagged questions by Nick Singh (Author of Ace the Data Science Interview).',
    url: 'https://datalemur.com',
    badge: 'SQL Favorite',
    pricing: 'Freemium'
  },
  {
    id: 'sqlzoo',
    name: 'SQLZoo',
    category: 'Machine Learning',
    description: 'Interactive SQL practice tutorials covering SELECT, JOIN, AGGREGATE, and WINDOW functions.',
    url: 'https://sqlzoo.net',
    pricing: 'Free'
  },
  {
    id: 'kaggle-learn',
    name: 'Kaggle Learn',
    category: 'Machine Learning',
    description: 'Micro-courses covering Machine Learning, Feature Engineering, Deep Learning, and NLP.',
    url: 'https://www.kaggle.com/learn',
    pricing: 'Free'
  },
  {
    id: 'deep-ml',
    name: 'Deep-ML',
    category: 'Machine Learning',
    description: 'Linear algebra, ML algorithms implementation from scratch, and neural net mechanics.',
    url: 'https://www.deep-ml.com',
    badge: 'ML From Scratch',
    pricing: 'Free'
  },

  // Behavioral, HR & Career Prep
  {
    id: 'glassdoor',
    name: 'Glassdoor',
    category: 'Behavioral',
    description: 'Company-specific interview reviews, actual asked questions, and salary insights.',
    url: 'https://www.glassdoor.com',
    pricing: 'Free'
  },
  {
    id: 'blind',
    name: 'Blind (TeamBlind)',
    category: 'Behavioral',
    description: 'Anonymous tech community discussing internal hiring trends, compensation, and team cultures.',
    url: 'https://www.teamblind.com',
    pricing: 'Free'
  },
  {
    id: 'levels-fyi',
    name: 'Levels.fyi',
    category: 'Behavioral',
    description: 'Verified compensation data, tier leveling comparisons, and salary negotiation guidance.',
    url: 'https://www.levels.fyi',
    badge: 'Comp Benchmark',
    pricing: 'Free'
  },
  {
    id: 'tech-interview-handbook-site',
    name: 'Tech Interview Handbook',
    category: 'Behavioral',
    description: 'Free curated interview preparation materials for busy engineers: resumes, STAR behavioral stories, negotiation.',
    url: 'https://www.techinterviewhandbook.org',
    badge: 'Comprehensive Free Hub',
    pricing: 'Free'
  },
  {
    id: 'big-interview',
    name: 'Big Interview',
    category: 'Behavioral',
    description: 'Video-based training curriculum for behavioral and competency-based interview questions.',
    url: 'https://biginterview.com',
    pricing: 'Paid'
  },

  // Mock Interview Platforms
  {
    id: 'google-interview-warmup',
    name: 'Interview Warmup by Google',
    category: 'Mock Platforms',
    description: 'Free AI-powered practice tool by Google; transcribe answers and get instant feedback on vocabulary and job-related terms.',
    url: 'https://grow.google/certificates/interview-warmup',
    badge: 'Free AI Tool',
    pricing: 'Free'
  },
  {
    id: 'pramp',
    name: 'Pramp (Exponent)',
    category: 'Mock Platforms',
    description: 'Free peer-to-peer live mock interviews across coding, system design, data structures, and behavioral.',
    url: 'https://www.pramp.com',
    badge: 'Peer-to-Peer Classic',
    pricing: 'Free'
  },
  {
    id: 'tryexponent',
    name: 'Exponent',
    category: 'Mock Platforms',
    description: 'Peer mocks, PM, SWE, and system design interview courses with detailed video recordings of real FAANG mocks.',
    url: 'https://www.tryexponent.com',
    pricing: 'Freemium'
  },
  {
    id: 'interviewing-io',
    name: 'Interviewing.io',
    category: 'Mock Platforms',
    description: 'Anonymous mock interviews with senior engineers from Google, Meta, and Amazon, with hiring fast-tracks.',
    url: 'https://interviewing.io',
    badge: 'FAANG Interviewers',
    pricing: 'Freemium'
  },
  {
    id: 'prepfully',
    name: 'Prepfully',
    category: 'Mock Platforms',
    description: '1-on-1 mock interviews and coaching with verified interviewers from specific target companies.',
    url: 'https://prepfully.com',
    pricing: 'Paid'
  },
  {
    id: 'interview-kickstart',
    name: 'Interview Kickstart',
    category: 'Mock Platforms',
    description: 'Intensive engineering bootcamp designed for senior/staff level transitions at top tier tech firms.',
    url: 'https://www.interviewkickstart.com',
    pricing: 'Paid'
  },
  {
    id: 'meetapro',
    name: 'Meetapro',
    category: 'Mock Platforms',
    description: 'Affordable mock interviews with FAANG and high-growth engineers without subscription fees.',
    url: 'https://www.meetapro.com',
    pricing: 'Paid'
  },
  {
    id: 'scaler',
    name: 'Scaler Mock Interviews',
    category: 'Mock Platforms',
    description: 'Structured mock interview program with industry tech leaders and mentors.',
    url: 'https://www.scaler.com',
    pricing: 'Paid'
  },
  {
    id: 'finalroundai',
    name: 'Final Round AI',
    category: 'Mock Platforms',
    description: 'AI interview copilot and real-time mock evaluation system.',
    url: 'https://www.finalroundai.com',
    pricing: 'Paid'
  },
  {
    id: 'huru',
    name: 'Huru',
    category: 'Mock Platforms',
    description: 'AI mock interviewer analyzing vocal delivery, eye contact, and response content.',
    url: 'https://huru.ai',
    pricing: 'Paid'
  },

  // ==========================================================================
  // AI Interview Platforms — Resume + GitHub/Project-Aware
  // (Repos whose README mentions upload resume + generate questions from your
  // background + follow-ups + feedback)
  // ==========================================================================
  {
    id: 'ai-aural-oss',
    name: '1146345502/aural-oss',
    category: 'AI Interview',
    description: 'Open-source AI interview platform for voice, chat & video. Resume/project-aware Q-gen with follow-ups and scored feedback.',
    url: 'https://github.com/1146345502/aural-oss',
    badge: '216★ · Voice+Chat+Video',
    pricing: 'Free',
    githubRepo: '1146345502/aural-oss',
    techStack: 'TypeScript'
  },
  {
    id: 'ai-ai-recruiter-claude',
    name: 'zubair-trabzada/ai-recruiter-claude',
    category: 'AI Interview',
    description: 'AI recruiting & hiring engine for Claude Code. Job description optimization, batch resume screening, interview frameworks, salary benchmarking.',
    url: 'https://github.com/zubair-trabzada/ai-recruiter-claude',
    badge: '34★ · Claude Code',
    pricing: 'Free',
    githubRepo: 'zubair-trabzada/ai-recruiter-claude',
    techStack: 'Python'
  },
  {
    id: 'ai-ai-interview-coach',
    name: 'hadishah123/ai-interview-coach',
    category: 'AI Interview',
    description: 'Full-stack web app for interview practice with secure auth and scalable backend. Resume + GitHub-aware generated questions.',
    url: 'https://github.com/hadishah123/ai-interview-coach',
    badge: '11★ · Full-Stack',
    pricing: 'Free',
    githubRepo: 'hadishah123/ai-interview-coach',
    techStack: 'TypeScript'
  },
  {
    id: 'ai-interview-prep-edge',
    name: 'Edge-Explorer/Interview-Prep',
    category: 'AI Interview',
    description: 'AI-powered interview prep platform with Gemini 2.0 Flash, FastAPI, and React. Real-time AI mock interviews with performance analytics.',
    url: 'https://github.com/Edge-Explorer/Interview-Prep',
    badge: '8★ · Gemini 2.0',
    pricing: 'Free',
    githubRepo: 'Edge-Explorer/Interview-Prep',
    techStack: 'Python, FastAPI, React'
  },
  {
    id: 'ai-interview-prep-agent',
    name: 'Nikhil-creat/Interview-prep-agent',
    category: 'AI Interview',
    description: 'AI-powered resume-aware mock interview platform. Generates questions tied to your resume items with technical, project-deep-dive, and behavioral rounds.',
    url: 'https://github.com/Nikhil-creat/Interview-prep-agent',
    badge: '4★ · Resume-Aware',
    pricing: 'Free',
    githubRepo: 'Nikhil-creat/Interview-prep-agent',
    techStack: 'TypeScript'
  },
  {
    id: 'ai-interview-platform-tanmay',
    name: 'Tanmaygangurde20/AI-Interview-Platform',
    category: 'AI Interview',
    description: 'AI interview platform with resume upload, project link parsing, question generation, and scored feedback reports.',
    url: 'https://github.com/Tanmaygangurde20/AI-Interview-Platform',
    pricing: 'Free',
    githubRepo: 'Tanmaygangurde20/AI-Interview-Platform',
    techStack: 'Python'
  },
  {
    id: 'ai-give-me-job',
    name: 'kyoungbinkim/give-me-job',
    category: 'AI Interview',
    description: 'AI agent toolkit for Korean job applications — from resume evidence extraction to tailored cover letters and interview prep with follow-up questions.',
    url: 'https://github.com/kyoungbinkim/give-me-job',
    badge: '6★ · Korean JD',
    pricing: 'Free',
    githubRepo: 'kyoungbinkim/give-me-job',
    techStack: 'JavaScript'
  },

  // GitHub Repositories (Study Material)
  {
    id: 'system-design-primer',
    name: 'donnemartin/system-design-primer',
    category: 'GitHub Repos',
    description: 'The #1 system design resource on GitHub (270k+ stars). Comprehensive guide to designing scalable systems.',
    url: 'https://github.com/donnemartin/system-design-primer',
    badge: '270k+ Stars',
    pricing: 'Free',
    githubRepo: 'donnemartin/system-design-primer'
  },
  // -----------------------------------------------------------------------------
  // COMPANY PREP PROFILES — GitHub PR #305 resource request list (HR ~601-900)
  // -----------------------------------------------------------------------------
  {
    id: 'company-google',
    name: 'Google',
    category: 'Company Prep',
    description: 'Top interview categories from the curated 1000-repo list: system design interviews, behavioral/networking, algorithms, and frontend. Focus: distributed systems, coding rounds, and role fit. Recommended prep: bytebytego/system-design-101, kevinatkinson/awesome-google-tech-dev-guide, donnemartin/system-design-primer, and mock interview practice with voice/video.',
    url: 'https://careers.google.com',
    badge: '16,000★ · Top interview feed',
    pricing: 'Free',
    techStack: 'Distributed systems, SRE, UX, ML'
  },
  {
    id: 'company-microsoft',
    name: 'Microsoft',
    category: 'Company Prep',
    description: 'Top interview categories from the curated 1000-repo list: algorithms, system design, networking, and frontend. Focus: Azure/cloud roles, core CS fundamentals, and behavioral. Recommended prep: jwasham/coding-interview-university, systemdesignschool/system-design-school, DopplerHQ/awesome-interview-questions, and mock interview practice.',
    url: 'https://careers.microsoft.com',
    badge: '9,800★ · Interview prep hub',
    pricing: 'Free',
    techStack: 'Azure, .NET, TypeScript, Cloud'
  },
  {
    id: 'company-amazon',
    name: 'Amazon',
    category: 'Company Prep',
    description: 'Top interview categories from the curated 1000-repo list: algorithms, system design, HR/behavioral (Leadership Principles), and web projects. Focus: LP-aligned STAR stories, coding rounds, and bar raiser format. Recommended prep: tech-interview-handbook-site, donnemartin/system-design-primer, and mock interview practice with STAR stories.',
    url: 'https://www.amazon.jobs',
    badge: '19,000★ · LP + coding',
    pricing: 'Free',
    techStack: 'Leadership Principles, distributed systems, frontend'
  },
  {
    id: 'company-meta',
    name: 'Meta (Facebook)',
    category: 'Company Prep',
    description: 'Top interview categories from the curated 1000-repo list: algorithms, system design, frontend, and web projects. Focus: coding rounds and production-grade frontend/system design. Recommended prep: neetcode-gh/leetcode, yangshun/front-end-interview-handbook, bytebytego/system-design-101, and mock interview practice.',
    url: 'https://www.metacareers.com',
    badge: '11,500★ · Coding + UX',
    pricing: 'Free',
    techStack: 'Full-stack, React, infrastructure'
  },
  {
    id: 'system-design-101',
    name: 'ByteByteGoHq/system-design-101',
    category: 'GitHub Repos',
    description: 'Visual diagrams and explanations of architecture, databases, microservices, and network protocols.',
    url: 'https://github.com/ByteByteGoHq/system-design-101',
    badge: 'Visual Architecture',
    pricing: 'Free',
    githubRepo: 'ByteByteGoHq/system-design-101'
  },
  {
    id: 'coding-interview-university',
    name: 'jwasham/coding-interview-university',
    category: 'GitHub Repos',
    description: 'Complete multi-month study plan for software engineering interviews at top companies.',
    url: 'https://github.com/jwasham/coding-interview-university',
    badge: '300k+ Stars',
    pricing: 'Free',
    githubRepo: 'jwasham/coding-interview-university'
  },
  {
    id: 'tech-interview-handbook-repo',
    name: 'yangshun/tech-interview-handbook',
    category: 'GitHub Repos',
    description: 'Curated prep materials, cheatsheets, study plans, and behavioral questions by Yangshun Tay.',
    url: 'https://github.com/yangshun/tech-interview-handbook',
    badge: '120k+ Stars',
    pricing: 'Free',
    githubRepo: 'yangshun/tech-interview-handbook'
  },
  {
    id: 'kdn251-interviews',
    name: 'kdn251/interviews',
    category: 'GitHub Repos',
    description: 'Everything you need to know about technical interviews: data structures, algorithms, and design.',
    url: 'https://github.com/kdn251/interviews',
    pricing: 'Free',
    githubRepo: 'kdn251/interviews'
  },
  {
    id: 'awesome-interview-questions',
    name: 'DopplerHQ/awesome-interview-questions',
    category: 'GitHub Repos',
    description: 'Massive curated list of interview questions categorized by language, database, and framework.',
    url: 'https://github.com/DopplerHQ/awesome-interview-questions',
    pricing: 'Free',
    githubRepo: 'DopplerHQ/awesome-interview-questions'
  },
  {
    id: 'developer-roadmap',
    name: 'kamranahmedse/developer-roadmap',
    category: 'GitHub Repos',
    description: 'Interactive roadmaps and study paths for Frontend, Backend, DevOps, AI, and Software Architecture.',
    url: 'https://github.com/kamranahmedse/developer-roadmap',
    badge: '300k+ Stars',
    pricing: 'Free',
    githubRepo: 'kamranahmedse/developer-roadmap'
  },
  {
    id: 'front-end-interview-handbook',
    name: 'yangshun/front-end-interview-handbook',
    category: 'GitHub Repos',
    description: 'Classic front-end interview guide: JavaScript, HTML, CSS, React, and Web Performance.',
    url: 'https://github.com/yangshun/front-end-interview-handbook',
    badge: '40k+ Stars',
    pricing: 'Free',
    githubRepo: 'yangshun/front-end-interview-handbook'
  },
  {
    id: 'the-algorithms-python',
    name: 'TheAlgorithms/Python',
    category: 'GitHub Repos',
    description: 'All algorithms and data structures implemented in clean, idiomatic Python with documentation.',
    url: 'https://github.com/TheAlgorithms/Python',
    pricing: 'Free',
    githubRepo: 'TheAlgorithms/Python'
  },
  {
    id: 'javascript-algorithms',
    name: 'trekhleb/javascript-algorithms',
    category: 'GitHub Repos',
    description: 'Algorithms and data structures implemented in JavaScript with explanations and further reading.',
    url: 'https://github.com/trekhleb/javascript-algorithms',
    badge: '180k+ Stars',
    pricing: 'Free',
    githubRepo: 'trekhleb/javascript-algorithms'
  },
  {
    id: 'neetcode-gh-leetcode',
    name: 'neetcode-gh/leetcode',
    category: 'GitHub Repos',
    description: 'Solutions to NeetCode problems in Python, Java, C++, and JavaScript.',
    url: 'https://github.com/neetcode-gh/leetcode',
    pricing: 'Free',
    githubRepo: 'neetcode-gh/leetcode'
  },
  {
    id: 'data-science-interviews',
    name: 'alexeygrigorev/data-science-interviews',
    category: 'GitHub Repos',
    description: 'Data science interview questions, theory, mathematical foundations, and answers.',
    url: 'https://github.com/alexeygrigorev/data-science-interviews',
    pricing: 'Free',
    githubRepo: 'alexeygrigorev/data-science-interviews'
  },
  {
    id: 'machine-learning-systems-design',
    name: 'chiphuyen/machine-learning-systems-design',
    category: 'GitHub Repos',
    description: 'A comprehensive guide to ML systems design in enterprise production environments by Chip Huyen.',
    url: 'https://github.com/chiphuyen/machine-learning-systems-design',
    badge: 'Production ML',
    pricing: 'Free',
    githubRepo: 'chiphuyen/machine-learning-systems-design'
  },

  // GitHub Repositories: Web Projects / Source Code to Learn From
  {
    id: 'adrianhajdin-ai-mock',
    name: 'adrianhajdin/ai_mock_interviews (Prepwise)',
    category: 'Web Projects',
    description: 'Voice AI mock interview web app with scoring, audio feedback, and question evaluation.',
    url: 'https://github.com/adrianhajdin/ai_mock_interviews',
    badge: 'Popular Voice AI',
    pricing: 'Free',
    githubRepo: 'adrianhajdin/ai_mock_interviews',
    techStack: 'Next.js, Firebase, Tailwind CSS, Vapi AI, Google Gemini, Zod'
  },
  {
    id: 'resham011-algorecall',
    name: 'Resham011/AlgoRecall',
    category: 'Web Projects',
    description: 'Spaced-repetition DSA tracker: log problems, tag by company & topic, daily revision schedules, and progress dashboard.',
    url: 'https://github.com/Resham011/AlgoRecall',
    badge: 'SRS Algorithm Tracker',
    pricing: 'Free',
    githubRepo: 'Resham011/AlgoRecall',
    techStack: 'MongoDB, Express, React, Node, Redux, Tailwind'
  },
  {
    id: 'srummanf-dsa-atlas',
    name: 'srummanf/Data-Structures-And-Algorithms_SQL-DA-DS',
    category: 'Web Projects',
    description: 'DSA Atlas: company-wise DSA questions, curated LeetCode sheets, ML/SQL/DS notes, and Q&A.',
    url: 'https://github.com/srummanf/Data-Structures-And-Algorithms_SQL-DA-DS_Interview-Practice',
    pricing: 'Free',
    githubRepo: 'srummanf/Data-Structures-And-Algorithms_SQL-DA-DS_Interview-Practice',
    techStack: 'HTML/JS static site'
  },
  {
    id: 'iamvtyagi-prepwise',
    name: 'iamvtyagi/Prepwise',
    category: 'Web Projects',
    description: 'Voice interviewer with user auth, session recording, and post-session rubric scoring.',
    url: 'https://github.com/iamvtyagi/Prepwise',
    pricing: 'Free',
    githubRepo: 'iamvtyagi/Prepwise',
    techStack: 'Next.js, TypeScript, Firebase, Vapi, Gemini, shadcn/ui'
  },
  {
    id: 'obro79-mock-ai',
    name: 'obro79/mock_interview_ai',
    category: 'Web Projects',
    description: 'Real-time voice conversation with an AI interviewer, live transcript, call status, and feedback.',
    url: 'https://github.com/obro79/mock_interview_ai',
    pricing: 'Free',
    githubRepo: 'obro79/mock_interview_ai',
    techStack: 'Next.js, React, TypeScript, Vapi SDK, Tailwind'
  },
  {
    id: 'davismiler-interviewai',
    name: 'davismiler/InterviewAI',
    category: 'Web Projects',
    description: 'Personalized interviews based on resume, role, and round type; AI personas; feedback reports.',
    url: 'https://github.com/davismiler/InterviewAI',
    pricing: 'Free',
    githubRepo: 'davismiler/InterviewAI',
    techStack: 'Next.js, Vapi AI, Google Gemini'
  },
  {
    id: 'fossunited-interviewsim',
    name: 'FOSS United InterviewSim',
    category: 'Web Projects',
    description: 'Open-source AI technical interview simulator built on Spring Boot with step-by-step answer evaluation.',
    url: 'https://fossunited.org/hack/fosshack26/p/ekoor7ls62',
    badge: 'Hackathon Winner',
    pricing: 'Free',
    techStack: 'Spring Boot, Open-source LLM, GitHub API'
  },

  // ==========================================================================
  // VIDEO MOCK INTERVIEW — GitHub Repositories (cloneable projects)
  // ==========================================================================

  // Live WebRTC peer-to-peer
  {
    id: 'video-zy1h0s-mock',
    name: 'zy1h0s/mock — Mock Interview Training System',
    category: 'Video Mock',
    description: 'Trainer and candidate join a live WebRTC video room. Interviewer uses AI text-to-speech; the session is recorded with automatic transcription and AI-generated feedback. Includes an interview timer and admin dashboard.',
    url: 'https://github.com/zy1h0s/mock',
    badge: 'WebRTC + AI TTS + Recording',
    pricing: 'Free',
    githubRepo: 'zy1h0s/mock',
    techStack: 'WebRTC (Google STUN), React, Python backend'
  },
  {
    id: 'video-rounakNayak-codeshetra',
    name: 'RounakNayak/codeshetra-django — Paid Video Marketplace',
    category: 'Video Mock',
    description: 'Marketplace-style platform: interviewers create paid mock sessions, interviewees book them and meet over live WebRTC video. Includes email verification and Razorpay payment integration.',
    url: 'https://github.com/RounakNayak/codeshetra-django',
    badge: 'Razorpay Payments + WebRTC',
    pricing: 'Free',
    githubRepo: 'RounakNayak/codeshetra-django',
    techStack: 'Django, WebRTC, Razorpay, HTML/CSS/JS'
  },
  {
    id: 'video-rynocode-codeshetra',
    name: 'RynoCODE/codeshetra-django — Forked Video Marketplace',
    category: 'Video Mock',
    description: 'Fork of codeshetra-django with the same video booking marketplace flow — interviewers list paid slots, candidates book and connect over live WebRTC video.',
    url: 'https://github.com/RynoCODE/codeshetra-django',
    pricing: 'Free',
    githubRepo: 'RynoCODE/codeshetra-django',
    techStack: 'Django, WebRTC, Razorpay'
  },
  {
    id: 'video-siddg97-stormhacks',
    name: 'siddg97/stormhacks2021 — InterviewBuddy.space',
    category: 'Video Mock',
    description: 'StormHacks 2021 2nd-place hackathon project. AI mock interviewer with peer video interviews, answer transcription, filler-word detection, and words-per-minute analysis. Note: the peer-to-peer video portion was unfinished at submission.',
    url: 'https://github.com/siddg97/stormhacks2021',
    badge: 'Hackathon 2nd Place',
    pricing: 'Free',
    githubRepo: 'siddg97/stormhacks2021',
    techStack: 'Flask, GCP Storage, React, Speech-to-Text'
  },

  // AI video analysis (record yourself, get feedback)
  {
    id: 'video-archit1706-ascendai',
    name: 'Archit1706/AscendAI — Tone & Facial Analysis',
    category: 'Video Mock',
    description: 'Ascend.ai: records video mock interviews, reviews at timestamps, analyzes tone/pitch and facial expressions, provides a chatbot interviewer and a progress dashboard. Uses OpenCV + ResNet for facial analysis and Librosa + 1D-CNN for audio tone/pitch.',
    url: 'https://github.com/Archit1706/AscendAI',
    badge: 'Facial + Tone + Progress Dashboard',
    pricing: 'Free',
    githubRepo: 'Archit1706/AscendAI',
    techStack: 'WebRTC Recording, Video.js, OpenCV + ResNet, Librosa + 1D-CNN'
  },
  {
    id: 'video-stubbyguy-inview',
    name: 'StubbyGuy/InView — WildHacks 2025 Emotion AI',
    category: 'Video Mock',
    description: 'WildHacks 2025: AI-generated questions, Gemini evaluation of candidate answers, webcam emotion snapshots every second, post-interview dashboard with full session replay and emotion timeline.',
    url: 'https://github.com/StubbyGuy/InView',
    badge: 'Emotion + Gemini Grading + Replay',
    pricing: 'Free',
    githubRepo: 'StubbyGuy/InView',
    techStack: 'FastAPI, Gemini API, FER (Facial Emotion Recognition), WebRTC/MediaRecorder, OpenCV'
  },

  // Related concepts (no public repo confirmed)
  {
    id: 'video-peercode-concept',
    name: 'PeerCode (peercode.live) — Concept: Peer DSA + Video',
    category: 'Video Mock',
    description: 'Free peer-to-peer DSA mock interview site with a shared code editor and video/audio calls, announced on Codeforces 2026. No public source repo confirmed yet — good architectural reference for Socket.io + WebRTC integration.',
    url: 'https://peercode.live',
    badge: 'P2P + Shared Editor (Concept)',
    pricing: 'Free',
    techStack: 'React, Node.js, Socket.io, WebRTC, PostgreSQL'
  },
  {
    id: 'video-mockmate-concept',
    name: 'MockMate — Concept: MediaPipe Posture & Eye Contact',
    category: 'Video Mock',
    description: 'University final-year concept: AI interviewer combined with webcam analysis of eye contact, attention, and posture using MediaPipe Holistic. No public repo confirmed; described at maju.hosting.acm.org.',
    url: 'https://maju.hosting.acm.org',
    badge: 'MediaPipe Holistic (Concept)',
    pricing: 'Free',
    techStack: 'MediaPipe Holistic, AI Interviewer, Python backend'
  },

  // ==========================================================================
  // VIDEO MOCK INTERVIEW — Live Platforms & Websites (Part B)
  // ==========================================================================

  // Live peer or expert video interviews
  {
    id: 'video-pramp-live',
    name: 'Pramp — Free Live Peer Video Mocks',
    category: 'Video Mock',
    description: 'Free peer-to-peer live mock interview matching with a collaborative code editor and real-time video. Automatically swaps interviewer / interviewee roles halfway through.',
    url: 'https://www.pramp.com',
    badge: 'Free Peer Video',
    pricing: 'Free'
  },
  {
    id: 'video-interviewing-io-live',
    name: 'Interviewing.io — Anonymous Expert Video',
    category: 'Video Mock',
    description: 'Anonymous live video mocks with senior engineers from Google, Meta, and Amazon. Strong performers get direct hiring fast-tracks to top companies.',
    url: 'https://interviewing.io',
    badge: 'FAANG Interviewers',
    pricing: 'Freemium'
  },
  {
    id: 'video-exponent-live',
    name: 'Exponent — Peer & Coached Video Mocks',
    category: 'Video Mock',
    description: 'Peer video mocks and coached practice for SWE, PM, and design roles. Includes recorded session replays for self-review.',
    url: 'https://www.tryexponent.com',
    pricing: 'Freemium'
  },
  {
    id: 'video-prepfully-live',
    name: 'Prepfully — Paid Expert Video Mocks',
    category: 'Video Mock',
    description: '1-on-1 paid video mock interviews with verified interviewers from specific target companies. Detailed rubric-based feedback post-session.',
    url: 'https://prepfully.com',
    pricing: 'Paid'
  },
  {
    id: 'video-mentorcruise',
    name: 'MentorCruise — Video Mentoring & Mocks',
    category: 'Video Mock',
    description: 'Book live video sessions with mentors including current or former employees of specific companies for targeted mock interviews and career coaching.',
    url: 'https://mentorcruise.com',
    pricing: 'Paid'
  },

  // AI voice / video practice platforms
  {
    id: 'video-google-warmup',
    name: 'Interview Warmup by Google — Free AI Video',
    category: 'Video Mock',
    description: 'Free AI-powered video practice tool by Google. Transcribes answers in real-time and gives instant feedback on job-related vocabulary, filler words, and response structure.',
    url: 'https://grow.google/certificates/interview-warmup',
    badge: 'Free — by Google',
    pricing: 'Free'
  },
  {
    id: 'video-finalroundai-live',
    name: 'Final Round AI — AI Video Mock Copilot',
    category: 'Video Mock',
    description: 'AI mock interview copilot with real-time video sessions, answer scoring, and detailed post-interview feedback reports with improvement suggestions.',
    url: 'https://www.finalroundai.com',
    pricing: 'Paid'
  },
  {
    id: 'video-huru-live',
    name: 'Huru — AI Webcam Interview Practice',
    category: 'Video Mock',
    description: 'AI mock interviewer that analyzes vocal delivery, eye contact, filler words, pacing, and response content through your webcam in real time.',
    url: 'https://huru.ai',
    pricing: 'Paid'
  },
  {
    id: 'video-topai-directory',
    name: 'TopAI.tools — AI Video Interview Platform Directory',
    category: 'Video Mock',
    description: 'Curated directory of AI-powered video interview practice tools: Instant Interview, PracticeInterview.ai, Skillora, ParrotPrep, Boterview, and many more. Use to discover emerging platforms.',
    url: 'https://topai.tools/s/video-interview-practice',
    badge: 'Platform Discovery',
    pricing: 'Free'
  },

  // ==========================================================================
  // AI Interview — Partial Matches (Resume + 2+ of Q-gen, Follow-ups, Feedback)
  // ==========================================================================
  {
    id: 'ai-career-ops',
    name: 'career-ops-hq/career-ops',
    category: 'AI Interview',
    description: 'Open-source AI job search agent and job finder: scan job boards, score each job 1-5 against your CV before you apply, tailor an ATS-friendly resume.',
    url: 'https://github.com/career-ops-hq/career-ops',
    badge: '76,553★ · AI Job Search',
    pricing: 'Free',
    githubRepo: 'career-ops-hq/career-ops',
    techStack: 'JavaScript'
  },
  {
    id: 'ai-natively-cluely',
    name: 'Natively-AI-assistant/natively-cluely-ai-assistant',
    category: 'AI Interview',
    description: 'Free open-source AI meeting assistant, interview copilot, and note taker. Best open-source alternative to Cluely, Otter, Granola, and Final Round AI.',
    url: 'https://github.com/Natively-AI-assistant/natively-cluely-ai-assistant',
    badge: '3,058★ · Interview Copilot',
    pricing: 'Free',
    githubRepo: 'Natively-AI-assistant/natively-cluely-ai-assistant',
    techStack: 'TypeScript'
  },
  {
    id: 'ai-findjobs-agent',
    name: 'he-yufeng/FindJobs-Agent',
    category: 'AI Interview',
    description: 'LLM-powered toolkit for skill analysis, AI interviews, resume scoring, and job structuring. Automates professional skill taxonomy and interview question generation.',
    url: 'https://github.com/he-yufeng/FindJobs-Agent',
    badge: '242★ · Skill + Interview',
    pricing: 'Free',
    githubRepo: 'he-yufeng/FindJobs-Agent',
    techStack: 'Python'
  },
  {
    id: 'ai-jobpilot',
    name: 'jlifeng/JobPilot',
    category: 'AI Interview',
    description: 'Zero-Deployment AI Resume Builder, JD Matcher & Mock Interview Assistant. Desktop AI job-seeking assistant with resume optimization, job matching, and mock interviews.',
    url: 'https://github.com/jlifeng/JobPilot',
    badge: '145★ · Desktop App',
    pricing: 'Free',
    githubRepo: 'jlifeng/JobPilot',
    techStack: 'TypeScript'
  },
  {
    id: 'ai-career-pilot',
    name: 'anurag3407/career-pilot',
    category: 'AI Interview',
    description: 'Open-source AI-powered career platform for resume optimization, mock interviews, and job tracking. Includes architecture analysis and portfolio building.',
    url: 'https://github.com/anurag3407/career-pilot',
    badge: '137★ · Career OS',
    pricing: 'Free',
    githubRepo: 'anurag3407/career-pilot',
    techStack: 'JavaScript'
  },
  {
    id: 'ai-interview-pilot-ai',
    name: 'tejpshah/interview-pilot-ai',
    category: 'AI Interview',
    description: 'AI practice interviewer that role-plays personalized interviews tailored to your background, listening and replying like a real interviewer. Resume-aware with voice.',
    url: 'https://github.com/tejpshah/interview-pilot-ai',
    badge: '122★ · Voice AI',
    pricing: 'Free',
    githubRepo: 'tejpshah/interview-pilot-ai',
    techStack: 'Python'
  },
  {
    id: 'ai-career-agents',
    name: 'karthikrshet/Career-Agents',
    category: 'AI Interview',
    description: 'Open-source AI Career Operating System with 167 specialized AI agents across 19 divisions, spoken voice lab (27 languages), AI job search, ATS resume tools.',
    url: 'https://github.com/karthikrshet/Career-Agents',
    badge: '63★ · 167 Agents',
    pricing: 'Free',
    githubRepo: 'karthikrshet/Career-Agents',
    techStack: 'TypeScript'
  },
  {
    id: 'ai-deep-interview',
    name: 'ngoanpv/DeepInterview',
    category: 'AI Interview',
    description: 'Open-source voice-first AI mock interviewer. Upload your CV + job description, practice out loud with an adaptive multilingual interviewer that reacts to your answers.',
    url: 'https://github.com/ngoanpv/DeepInterview',
    badge: '61★ · Voice-First',
    pricing: 'Free',
    githubRepo: 'ngoanpv/DeepInterview',
    techStack: 'Python'
  },
  {
    id: 'ai-offercome',
    name: 'yuecao365/OfferCome',
    category: 'AI Interview',
    description: 'AI-powered career workspace for job tracking, resume management, and interview preparation with personalized question generation.',
    url: 'https://github.com/yuecao365/OfferCome',
    badge: '24★ · Career Workspace',
    pricing: 'Free',
    githubRepo: 'yuecao365/OfferCome',
    techStack: 'TypeScript'
  },
  {
    id: 'ai-intervyu',
    name: 'sahu-adarsh/intervyu',
    category: 'AI Interview',
    description: 'Practice real voice interviews with an AI interviewer, get coding problems evaluated live, and receive a scored performance report with improvement suggestions.',
    url: 'https://github.com/sahu-adarsh/intervyu',
    badge: '21★ · Live Coding Eval',
    pricing: 'Free',
    githubRepo: 'sahu-adarsh/intervyu',
    techStack: 'TypeScript'
  },
  {
    id: 'ai-ai-interview-system',
    name: 'manthan89-py/AI-Interview-System',
    category: 'AI Interview',
    description: 'Intelligent interview platform that conducts automated job interviews using AI. Analyzes candidate resumes, asks relevant questions, and evaluates responses.',
    url: 'https://github.com/manthan89-py/AI-Interview-System',
    badge: '18★ · Auto Interview',
    pricing: 'Free',
    githubRepo: 'manthan89-py/AI-Interview-System',
    techStack: 'Python'
  },
  {
    id: 'ai-interviewminds',
    name: 'theunstopabble/InterviewMinds',
    category: 'AI Interview',
    description: 'Production-grade AI Mock Interview Platform with 81 service modules. ML Proctoring (face-api.js + TensorFlow.js), CRDT collaborative code editor, voice interactions.',
    url: 'https://github.com/theunstopabble/InterviewMinds',
    badge: '14★ · 81 Modules',
    pricing: 'Free',
    githubRepo: 'theunstopabble/InterviewMinds',
    techStack: 'TypeScript'
  },
  {
    id: 'ai-advanced-interview-responder',
    name: 'Gamingpro237/Advanced_Interview_responder_with_AI',
    category: 'AI Interview',
    description: 'The Advanced Interview Responder uses AI to generate tailored responses from a user\'s resume and real-time transcribed questions, displaying suggested answers.',
    url: 'https://github.com/Gamingpro237/Advanced_Interview_responder_with_AI',
    badge: '13★ · Resume Responder',
    pricing: 'Free',
    githubRepo: 'Gamingpro237/Advanced_Interview_responder_with_AI',
    techStack: 'Python'
  },
  {
    id: 'ai-entervu',
    name: 'hassan9khaled/EnterVU',
    category: 'AI Interview',
    description: 'AI-powered Interview Preparation & Evaluation System. Users upload their CV and specify a role, then practice with AI-generated questions and receive scored evaluations.',
    url: 'https://github.com/hassan9khaled/EnterVU',
    badge: '12★ · CV Eval',
    pricing: 'Free',
    githubRepo: 'hassan9khaled/EnterVU',
    techStack: 'JavaScript'
  },
  {
    id: 'ai-resumatch',
    name: 'sayyedrabeeh/resume-ai-',
    category: 'AI Interview',
    description: 'ResuMatch is a full-stack web application designed to streamline the job application process. Offers resume parsing, job matching, and interview prep features.',
    url: 'https://github.com/sayyedrabeeh/resume-ai-',
    badge: '11★ · Full-Stack',
    pricing: 'Free',
    githubRepo: 'sayyedrabeeh/resume-ai-',
    techStack: 'Python'
  },
  {
    id: 'ai-intervity',
    name: 'rahullahoria/Intervity',
    category: 'AI Interview',
    description: 'Free Learning by AI — 100% On-Device, Offline, Private AI Mock Interviews for Everyone. Full-Duplex Voice, Kokoro-82M TTS, Whisper STT, and LLM evaluation.',
    url: 'https://github.com/rahullahoria/Intervity',
    badge: '10★ · Offline AI',
    pricing: 'Free',
    githubRepo: 'rahullahoria/Intervity',
    techStack: 'TypeScript'
  },
  {
    id: 'ai-lujie-careerkit',
    name: 'Chozzc/Lujie-Careerkit',
    category: 'AI Interview',
    description: 'An AI-powered career workspace from resume editing to offer acceptance, covering resume editing, JD matching, application tracking, mock interviews, and offer comparison.',
    url: 'https://github.com/Chozzc/Lujie-Careerkit',
    badge: '383★ · Career OS',
    pricing: 'Free',
    githubRepo: 'Chozzc/Lujie-Careerkit',
    techStack: 'TypeScript'
  },
  {
    id: 'ai-interview-helper',
    name: 'JasonJarvan/interview-helper',
    category: 'AI Interview',
    description: 'Open-source AI interview assistant using OpenAI Whisper for STT (speech-to-text), then sending questions to ChatGPT for answers. Chinese-language README.',
    url: 'https://github.com/JasonJarvan/interview-helper',
    badge: '325★ · Whisper+ChatGPT',
    pricing: 'Free',
    githubRepo: 'JasonJarvan/interview-helper',
    techStack: 'Python'
  },
  {
    id: 'ai-coderev',
    name: 'CharlieDigital/coderev',
    category: 'AI Interview',
    description: 'CodeRev is a lightweight tool that helps teams conduct technical interviews using code reviews. Structured interview workflow for engineering hiring.',
    url: 'https://github.com/CharlieDigital/coderev',
    badge: '164★ · Code Review',
    pricing: 'Free',
    githubRepo: 'CharlieDigital/coderev',
    techStack: 'Vue'
  },
  {
    id: 'ai-lockedin',
    name: 'daypunk/LockedIn',
    category: 'AI Interview',
    description: 'Lives inside your Claude Code session. Capture work as structured experience, then render resumes, Korean cover letters, interview answers, and job summaries.',
    url: 'https://github.com/daypunk/LockedIn',
    badge: '127★ · Claude Skill',
    pricing: 'Free',
    githubRepo: 'daypunk/LockedIn',
    techStack: 'Python'
  },
  {
    id: 'ai-lisa',
    name: 'blencorp/lisa',
    category: 'AI Interview',
    description: 'Lisa plans. Ralph does. Interactive specification interview workflow for Claude Code that conducts in-depth feature interviews and generates implementation plans.',
    url: 'https://github.com/blencorp/lisa',
    badge: '120★ · Claude Skill',
    pricing: 'Free',
    githubRepo: 'blencorp/lisa',
    techStack: 'TypeScript'
  },
  {
    id: 'ai-loop-maker',
    name: 'EricTechPro/loop-maker',
    category: 'AI Interview',
    description: 'Interviews you, then scaffolds a self-running agent loop. Cross-harness support for Claude Code, Codex, Hermes, and OpenClaw — automated interview practice agent.',
    url: 'https://github.com/EricTechPro/loop-maker',
    badge: '74★ · Agent Loop',
    pricing: 'Free',
    githubRepo: 'EricTechPro/loop-maker',
    techStack: 'Go Template'
  },
  {
    id: 'ai-resume-ai-match',
    name: 'adnanaziz/epicode',
    category: 'AI Interview',
    description: 'Code for Elements of Programming Interviews — the canonical EPI reference with 250+ problems, solutions, and explanations for technical interview prep.',
    url: 'https://github.com/adnanaziz/epicode',
    badge: '229★ · EPI Reference',
    pricing: 'Free',
    githubRepo: 'adnanaziz/epicode',
    techStack: 'C++'
  },
  {
    id: 'ai-beat-claude',
    name: 'ericosiu/beat-claude',
    category: 'AI Interview',
    description: 'The hiring challenge for AI-native marketers. Beat Claude to get an interview — prompt engineering challenge with AI-evaluated submissions.',
    url: 'https://github.com/ericosiu/beat-claude',
    badge: '202★ · AI Challenge',
    pricing: 'Free',
    githubRepo: 'ericosiu/beat-claude',
    techStack: 'Python'
  },
  {
    id: 'ai-ood-interview',
    name: 'ByteByteGoHq/ood-interview',
    category: 'AI Interview',
    description: 'Code for the OOD Interview Book by ByteByteGo. Available on Amazon — object-oriented design interview questions and solutions for technical interviews.',
    url: 'https://github.com/ByteByteGoHq/ood-interview',
    badge: '299★ · OOD Book',
    pricing: 'Free',
    githubRepo: 'ByteByteGoHq/ood-interview',
    techStack: 'Java'
  },
  {
    id: 'ai-dataengineer-prep',
    name: 'Noman654/dataengineer_prep',
    category: 'AI Interview',
    description: 'Data engineering interview prep — PySpark notebooks, theory docs, quizzes, and company-specific patterns. Built around Zephyr Coffee Co. case study.',
    url: 'https://github.com/Noman654/dataengineer_prep',
    badge: '88★ · DE Prep',
    pricing: 'Free',
    githubRepo: 'Noman654/dataengineer_prep',
    techStack: 'Jupyter Notebook'
  },
  {
    id: 'ai-code-interview-training',
    name: 'renzon/code_interview_training',
    category: 'AI Interview',
    description: 'Project for training to code interview — practice repository with interview-focused coding exercises and patterns.',
    url: 'https://github.com/renzon/code_interview_training',
    pricing: 'Free',
    githubRepo: 'renzon/code_interview_training',
    techStack: 'Python'
  },
  {
    id: 'ai-interview-prep-docs',
    name: 'lan1177/interview-prep',
    category: 'AI Interview',
    description: 'Claude Code skill: 产品/增长/运营/商业策略岗位面试准备文档生成器 — generates interview prep documents for product, growth, operations, and business strategy roles.',
    url: 'https://github.com/lan1177/interview-prep',
    badge: '103★ · Claude Skill',
    pricing: 'Free',
    githubRepo: 'lan1177/interview-prep',
    techStack: 'TypeScript'
  },
  {
    id: 'ai-potato-android',
    name: 'yunshuipiao/Potato',
    category: 'AI Interview',
    description: 'Read the fucking source code for the Android interview — deep source code reading project for Android engineering interview preparation.',
    url: 'https://github.com/yunshuipiao/Potato',
    badge: '83★ · Android SRC',
    pricing: 'Free',
    githubRepo: 'yunshuipiao/Potato',
    techStack: 'Kotlin'
  },
  {
    id: 'ai-kotlin-interviews',
    name: 'frostyshadows/kotlinforinterviews',
    category: 'AI Interview',
    description: 'An overview of Kotlin code snippets that came up often during interview prep — common Kotlin patterns and solutions for technical interviews.',
    url: 'https://github.com/frostyshadows/kotlinforinterviews',
    badge: '111★ · Kotlin Patterns',
    pricing: 'Free',
    githubRepo: 'frostyshadows/kotlinforinterviews',
    techStack: 'Kotlin'
  },
  {
    id: 'ai-sre-interview-handbook',
    name: 'AceInterviews/google-sre-interview-handbook',
    category: 'AI Interview',
    description: 'Google SRE interview handbook — comprehensive preparation material for Site Reliability Engineer interviews at Google and similar companies.',
    url: 'https://github.com/AceInterviews/google-sre-interview-handbook',
    pricing: 'Free',
    githubRepo: 'AceInterviews/google-sre-interview-handbook',
    techStack: 'SRE/Infrastructure'
  },
  {
    id: 'ai-interview-question-generator',
    name: 'Gamingpro237/Advanced_Interview_responder_with_AI',
    category: 'AI Interview',
    description: '(duplicate entry removed — see Advanced_Interview_responder_with_AI)',
    url: 'https://github.com/Gamingpro237/Advanced_Interview_responder_with_AI',
    pricing: 'Free'
  },
  // Additional notable repos from the partial match list (selected high-signal entries)
  {
    id: 'ai-prepwise-voice',
    name: 'iamvtyagi/Prepwise',
    category: 'AI Interview',
    description: 'Voice interviewer with user auth, session recording, and post-session rubric scoring. Next.js + Vapi + Gemini stack for AI mock interviews.',
    url: 'https://github.com/iamvtyagi/Prepwise',
    badge: 'Voice + Scoring',
    pricing: 'Free',
    githubRepo: 'iamvtyagi/Prepwise',
    techStack: 'Next.js, TypeScript, Firebase, Vapi, Gemini'
  },
  {
    id: 'ai-mock-interview-ai',
    name: 'obro79/mock_interview_ai',
    category: 'AI Interview',
    description: 'Real-time voice conversation with an AI interviewer, live transcript, call status, and feedback. Next.js + Vapi SDK + Tailwind stack.',
    url: 'https://github.com/obro79/mock_interview_ai',
    pricing: 'Free',
    githubRepo: 'obro79/mock_interview_ai',
    techStack: 'Next.js, React, TypeScript, Vapi SDK, Tailwind'
  },
  {
    id: 'ai-interviewai-davismiler',
    name: 'davismiler/InterviewAI',
    category: 'AI Interview',
    description: 'Personalized interviews based on resume, role, and round type; AI personas; feedback reports. Next.js + Vapi AI + Google Gemini.',
    url: 'https://github.com/davismiler/InterviewAI',
    pricing: 'Free',
    githubRepo: 'davismiler/InterviewAI',
    techStack: 'Next.js, Vapi AI, Google Gemini'
  },
  {
    id: 'ai-resham-algorecall',
    name: 'Resham011/AlgoRecall',
    category: 'AI Interview',
    description: 'Spaced-repetition DSA tracker: log problems, tag by company & topic, daily revision schedules, and progress dashboard. MongoDB + Express + React + Node.',
    url: 'https://github.com/Resham011/AlgoRecall',
    badge: 'SRS Algorithm Tracker',
    pricing: 'Free',
    githubRepo: 'Resham011/AlgoRecall',
    techStack: 'MongoDB, Express, React, Node, Redux, Tailwind'
  },
  {
    id: 'ai-srumman-dsa-atlas',
    name: 'srummanf/Data-Structures-And-Algorithms_SQL-DA-DS',
    category: 'AI Interview',
    description: 'DSA Atlas: company-wise DSA questions, curated LeetCode sheets, ML/SQL/DS notes, and Q&A. Covers data structures, algorithms, SQL, data analysis, and data science.',
    url: 'https://github.com/srummanf/Data-Structures-And-Algorithms_SQL-DA-DS_Interview-Practice',
    pricing: 'Free',
    githubRepo: 'srummanf/Data-Structures-And-Algorithms_SQL-DA-DS_Interview-Practice',
    techStack: 'HTML/JS static site'
  },
  {
    id: 'ai-adrianhajdin-ai-mock',
    name: 'adrianhajdin/ai_mock_interviews (Prepwise)',
    category: 'AI Interview',
    description: 'Voice AI mock interview web app with scoring, audio feedback, and question evaluation. Next.js, Firebase, Tailwind CSS, Vapi AI, Google Gemini, Zod.',
    url: 'https://github.com/adrianhajdin/ai_mock_interviews',
    badge: 'Popular Voice AI',
    pricing: 'Free',
    githubRepo: 'adrianhajdin/ai_mock_interviews',
    techStack: 'Next.js, Firebase, Tailwind CSS, Vapi AI, Google Gemini, Zod'
  }
];

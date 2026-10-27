// Compact reference list — searchable via GlobalSearch and rendered as cards
// when FEATURE_GITHUB_CATALOG is enabled in Settings.
/**
 * Live catalog from `scripts/sync-repo-catalog.mjs`.
 * If it is empty here, the app imports defaults from `resourcesData.ts` so the page never goes blank.
 */
export interface RepoCatalogEntry {
  repo: string; // "owner/repo"
  name: string; // display name
  stars: number;
  category: string;
  url: string; // GitHub page
  description?: string;
  language?: string;
  topics?: string[];
}

export interface RepoCatalogOptions {
  /** Keep repos that match the user-provided list even when they fall below the top-N window. */
  constrained?: boolean;
  /** Total repos to fetch from GitHub search.
   *  Tune down to fit in this budget if the catalog needs to land in-band.
   */
  topN?: number;
  token?: string;
}

/**
 * GitHub-curated repo catalog.
 * Keep this array sorted by stars descending so the app can render the highest-value
 * interview repositories first and so the sync script can de-duplicate by name easily.
 */
export const repoCatalog: RepoCatalogEntry[] = [
  // ---- Verified catalog: every entry resolves on github.com. Entries sourced from the
  // mined README index also get an "offline" reader in the Resource Hub. ----
  { repo: 'jwasham/coding-interview-university', name: "coding-interview-university — Complete multi-month study plan for SWE interviews (300k+ stars)", stars: 340000, category: 'DSA', url: 'https://github.com/jwasham/coding-interview-university' },
  { repo: 'kamranahmedse/developer-roadmap', name: 'developer-roadmap — Interactive roadmaps for Frontend, Backend, DevOps, AI, Architecture (300k+ stars)', stars: 300000, category: 'DSA', url: 'https://github.com/kamranahmedse/developer-roadmap' },
  { repo: 'donnemartin/system-design-primer', name: 'system-design-primer — The #1 system design resource on GitHub (270k+ stars)', stars: 270000, category: 'System Design', url: 'https://github.com/donnemartin/system-design-primer' },
  { repo: 'trekhleb/javascript-algorithms', name: 'javascript-algorithms — Algorithms & data structures in JS with explanations (180k+ stars)', stars: 180000, category: 'DSA', url: 'https://github.com/trekhleb/javascript-algorithms' },
  { repo: 'TheAlgorithms/Python', name: 'TheAlgorithms/Python — All algorithms and data structures implemented in clean Python', stars: 160000, category: 'DSA', url: 'https://github.com/TheAlgorithms/Python' },
  { repo: 'getify/You-Dont-Know-JS', name: 'You-Dont-Know-JS — Getify\'s JS deep-dive books: types, scope, closures, this, prototypes, async, ES6+', stars: 140000, category: 'Frontend', url: 'https://github.com/getify/You-Dont-Know-JS' },
  { repo: 'labuladong/fucking-algorithm', name: 'fucking-algorithm — LeetCode problem solutions with clear explanations (Chinese, 120k+ stars)', stars: 120000, category: 'DSA', url: 'https://github.com/labuladong/fucking-algorithm' },
  { repo: 'yangshun/tech-interview-handbook', name: 'tech-interview-handbook — Curated prep materials, cheatsheets, study plans, behavioral questions (120k+ stars)', stars: 120000, category: 'DSA', url: 'https://github.com/yangshun/tech-interview-handbook' },
  { repo: 'airbnb/javascript', name: 'airbnb/javascript — JavaScript style guide from Airbnb (100k+ stars) — reference for frontend interview coding standards', stars: 100000, category: 'Frontend', url: 'https://github.com/airbnb/javascript' },
  { repo: 'tensorflow/tensorflow', name: 'tensorflow — Open-source ML framework (100k+ stars) — reference implementations for ML interview topics', stars: 100000, category: 'Machine Learning', url: 'https://github.com/tensorflow/tensorflow' },
  { repo: 'pytorch/pytorch', name: 'pytorch — Deep learning framework (80k+ stars) — reference for ML system design questions', stars: 80000, category: 'Machine Learning', url: 'https://github.com/pytorch/pytorch' },
  { repo: 'career-ops-hq/career-ops', name: 'career-ops — Open-source AI job search agent: scan job boards, score jobs vs your CV, tailor ATS resume', stars: 76553, category: 'AI Interview', url: 'https://github.com/career-ops-hq/career-ops' },
  { repo: 'freeCodeCamp/freeCodeCamp', name: 'freeCodeCamp — Open-source learning platform with certifications, projects, and interview prep (50k+ stars)', stars: 50000, category: 'Web Projects', url: 'https://github.com/freeCodeCamp/freeCodeCamp' },
  { repo: 'yangshun/front-end-interview-handbook', name: 'front-end-interview-handbook — Classic front-end interview guide: JS, HTML, CSS, React, Web Performance (40k+ stars)', stars: 40000, category: 'Behavioral', url: 'https://github.com/yangshun/front-end-interview-handbook' },
  { repo: 'ByteByteGoHq/system-design-101', name: 'system-design-101 — Visual diagrams and explanations of architecture, databases, microservices, network protocols', stars: 35000, category: 'System Design', url: 'https://github.com/ByteByteGoHq/system-design-101' },
  { repo: 'ossu/computer-science', name: 'computer-science — Open-source computer science curriculum with core topics and interview-relevant coursework', stars: 35000, category: 'DSA', url: 'https://github.com/ossu/computer-science' },
  { repo: 'doocs/leetcode', name: 'doocs/leetcode — LeetCode solutions with detailed explanations, multi-language (30k+ stars)', stars: 30000, category: 'DSA', url: 'https://github.com/doocs/leetcode' },
  { repo: 'neetcode-gh/leetcode', name: 'neetcode-gh/leetcode — Solutions to NeetCode problems in Python, Java, C++, JS', stars: 25000, category: 'DSA', url: 'https://github.com/neetcode-gh/leetcode' },
  { repo: 'apachecn/awesome-algorithm', name: 'awesome-algorithm — Comprehensive algorithm resources, tutorials, and implementations', stars: 15000, category: 'DSA', url: 'https://github.com/apachecn/awesome-algorithm' },
  { repo: 'DopplerHQ/awesome-interview-questions', name: 'awesome-interview-questions — Massive curated list of interview questions by language, database, framework', stars: 15000, category: 'Behavioral', url: 'https://github.com/DopplerHQ/awesome-interview-questions' },
  { repo: 'rasbt/python-machine-learning-book', name: 'python-machine-learning-book — Companion code for Python Machine Learning book by Raschka (3rd ed.)', stars: 15000, category: 'Machine Learning', url: 'https://github.com/rasbt/python-machine-learning-book' },
  { repo: 'soulmachine/leetcode', name: 'leetcode — LeetCode solutions in multiple languages with company tags and difficulty ratings', stars: 15000, category: 'DSA', url: 'https://github.com/soulmachine/leetcode' },
  { repo: 'haoel/leetcode', name: 'leetcode — LeetCode solutions with detailed explanations, multi-language (10k+ stars)', stars: 10000, category: 'DSA', url: 'https://github.com/haoel/leetcode' },
  { repo: 'kdn251/interviews', name: 'interviews — Everything you need to know about technical interviews: data structures, algorithms, design', stars: 10000, category: 'Behavioral', url: 'https://github.com/kdn251/interviews' },
  { repo: 'keon/algorithms', name: 'algorithms — Minimal algorithms implementations in Python (10k+ stars)', stars: 10000, category: 'DSA', url: 'https://github.com/keon/algorithms' },
  { repo: 'TheOdinProject/theodinproject', name: 'theodinproject — Full-stack curriculum with projects, testing, and real-world development practices', stars: 10000, category: 'Web Projects', url: 'https://github.com/TheOdinProject/theodinproject' },
  { repo: 'williamfiset/algorithms', name: 'algorithms — Animated algorithm visualizations and implementations in Java (10k+ stars)', stars: 10000, category: 'DSA', url: 'https://github.com/williamfiset/algorithms' },
  { repo: 'fastai/fastbook', name: 'fastbook — fast.ai book: Deep Learning for Coders with fastai and PyTorch', stars: 8900, category: 'Machine Learning', url: 'https://github.com/fastai/fastbook' },
  { repo: 'alexeygrigorev/data-science-interviews', name: 'data-science-interviews — Data science interview questions, theory, math foundations, and answers', stars: 8500, category: 'Machine Learning', url: 'https://github.com/alexeygrigorev/data-science-interviews' },
  { repo: 'checkcheckzz/system-design-interview', name: 'system-design-interview — Curated system design interview questions with detailed solutions', stars: 7200, category: 'System Design', url: 'https://github.com/checkcheckzz/system-design-interview' },
  { repo: 'chiphuyen/machine-learning-systems-design', name: 'machine-learning-systems-design — Comprehensive guide to ML systems design in enterprise production (Chip Huyen)', stars: 7200, category: 'Machine Learning', url: 'https://github.com/chiphuyen/machine-learning-systems-design' },
  { repo: 'fastai/course22', name: 'course22 — Practical Deep Learning for Coders (fast.ai 2022 edition)', stars: 5500, category: 'Machine Learning', url: 'https://github.com/fastai/course22' },
  { repo: 'adrianhajdin/ai_mock_interviews', name: 'ai_mock_interviews (Prepwise) — Voice AI mock interview web app: scoring, audio feedback, question eval (Next.js, Firebase, Vapi, Gemini)', stars: 3200, category: 'Video Mock', url: 'https://github.com/adrianhajdin/ai_mock_interviews' },
  { repo: 'Natively-AI-assistant/natively-cluely-ai-assistant', name: 'natively-cluely-ai-assistant — Open-source AI meeting assistant + interview copilot (Cluely alternative)', stars: 3058, category: 'AI Interview', url: 'https://github.com/Natively-AI-assistant/natively-cluely-ai-assistant' },
  { repo: 'iamvtyagi/Prepwise', name: 'Prepwise — Voice interviewer with user auth, session recording, post-session rubric scoring (Next.js, Vapi, Gemini, shadcn)', stars: 480, category: 'Video Mock', url: 'https://github.com/iamvtyagi/Prepwise' },
  { repo: 'Chozzc/Lujie-Careerkit', name: 'Lujie-Careerkit — AI career workspace: resume editing → JD matching → application tracking → mock interviews → offer comparison', stars: 383, category: 'AI Interview', url: 'https://github.com/Chozzc/Lujie-Careerkit' },
  { repo: 'mwaseemzakir/awesome-dotnet-resources', name: 'awesome-dotnet-resources — Hand-picked .NET/C# resources: books, courses, blogs, tools, AI tools, newsletters, podcasts, interview prep', stars: 349, category: 'DSA', url: 'https://github.com/Mwaseemzakir/awesome-dotnet-resources' },
  { repo: 'JasonJarvan/interview-helper', name: 'interview-helper — Open-source AI interview assistant: OpenAI Whisper STT → ChatGPT answers (Chinese README)', stars: 325, category: 'AI Interview', url: 'https://github.com/JasonJarvan/interview-helper' },
  { repo: 'ByteByteGoHq/ood-interview', name: 'ood-interview — Code for the OOD Interview Book by ByteByteGo (object-oriented design interview prep)', stars: 299, category: 'AI Interview', url: 'https://github.com/ByteByteGoHq/ood-interview' },
  { repo: 'obro79/mock_interview_ai', name: 'mock_interview_ai — Real-time voice conversation with AI interviewer, live transcript, call status, feedback (Next.js, Vapi SDK, Tailwind)', stars: 280, category: 'Video Mock', url: 'https://github.com/obro79/mock_interview_ai' },
  { repo: 'he-yufeng/FindJobs-Agent', name: 'FindJobs-Agent — LLM toolkit: skill analysis, AI interviews, resume scoring, job structuring', stars: 242, category: 'AI Interview', url: 'https://github.com/he-yufeng/FindJobs-Agent' },
  { repo: 'adnanaziz/epicode', name: 'epicode — Code for Elements of Programming Interviews (250+ problems, solutions, C++)', stars: 229, category: 'AI Interview', url: 'https://github.com/adnanaziz/epicode' },
  { repo: '1146345502/aural-oss', name: 'aural-oss — Open-source AI interview platform (voice, chat, video)', stars: 216, category: 'AI Interview', url: 'https://github.com/1146345502/aural-oss' },
  { repo: 'siddg97/stormhacks2021', name: 'stormhacks2021 — InterviewBuddy.space: StormHacks 2nd place, AI mock + peer video, filler-word detection, WPM analysis', stars: 210, category: 'Video Mock', url: 'https://github.com/siddg97/stormhacks2021' },
  { repo: 'ericosiu/beat-claude', name: 'beat-claude — Hiring challenge for AI-native marketers: prompt engineering challenge with AI-evaluated submissions', stars: 202, category: 'AI Interview', url: 'https://github.com/ericosiu/beat-claude' },
  { repo: 'wousp112/awesome-justin-sun-ideas-to-ai-howto', name: 'awesome-justin-sun-ideas-to-ai-howto — Justin Sun AI ideas + 23 AI tutorials + 86-tool usability table (Chinese)', stars: 181, category: 'AI Interview', url: 'https://github.com/wousp112/awesome-justin-sun-ideas-to-ai-howto' },
  { repo: 'zy1h0s/mock', name: 'mock — Mock Interview Training System: WebRTC video, AI TTS, recording, transcription, AI feedback', stars: 180, category: 'Video Mock', url: 'https://github.com/zy1h0s/mock' },
  { repo: 'Archit1706/AscendAI', name: 'AscendAI — Records video mock interviews, tone/pitch + facial analysis (OpenCV+ResNet, Librosa+1D-CNN), chatbot interviewer, progress dashboard', stars: 160, category: 'Video Mock', url: 'https://github.com/Archit1706/AscendAI' },
  { repo: 'anurag3407/career-pilot', name: 'career-pilot — Open-source AI career platform: resume optimization, mock interviews, job tracking', stars: 137, category: 'AI Interview', url: 'https://github.com/anurag3407/career-pilot' },
  { repo: 'tejpshah/interview-pilot-ai', name: 'interview-pilot-ai — AI role-plays personalized interviews tailored to your background, voice-enabled', stars: 122, category: 'AI Interview', url: 'https://github.com/tejpshah/interview-pilot-ai' },
  { repo: 'RounakNayak/codeshetra-django', name: 'codeshetra-django — Paid video marketplace: interviewers list paid sessions, WebRTC video, Razorpay payments', stars: 95, category: 'Video Mock', url: 'https://github.com/RounakNayak/codeshetra-django' },
  { repo: 'Noman654/dataengineer_prep', name: 'dataengineer_prep — Data engineering interview prep: PySpark notebooks, theory, quizzes, company patterns (Zephyr Coffee Co.)', stars: 88, category: 'AI Interview', url: 'https://github.com/Noman654/dataengineer_prep' },
  { repo: 'StubbyGuy/InView', name: 'InView — WildHacks 2025: AI-generated questions, Gemini evaluation, webcam emotion snapshots, session replay, emotion timeline', stars: 85, category: 'Video Mock', url: 'https://github.com/StubbyGuy/InView' },
  { repo: 'karthikrshet/Career-Agents', name: 'Career-Agents — Open-source AI Career OS: 167 agents, 19 divisions, 27-language voice lab', stars: 63, category: 'AI Interview', url: 'https://github.com/karthikrshet/Career-Agents' },
  { repo: 'ngoanpv/DeepInterview', name: 'DeepInterview — Voice-first AI mock interviewer: upload CV + JD, practice out loud, multilingual', stars: 61, category: 'AI Interview', url: 'https://github.com/ngoanpv/DeepInterview' },
  { repo: 'RynoCODE/codeshetra-django', name: 'codeshetra-django (RynoCODE fork) — Forked video booking marketplace with WebRTC + Razorpay', stars: 42, category: 'Video Mock', url: 'https://github.com/RynoCODE/codeshetra-django' },
  { repo: 'jlifeng/JobPilot', name: 'ai-recruiter-claude — AI recruiting & hiring engine for Claude Code', stars: 34, category: 'AI Interview', url: 'https://github.com/zubair-trabzada/ai-recruiter-claude' },
  { repo: 'zubair-trabzada/ai-recruiter-claude', name: 'ai-recruiter-claude — AI recruiting & hiring engine for Claude Code', stars: 34, category: 'AI Interview', url: 'https://github.com/zubair-trabzada/ai-recruiter-claude' },
  { repo: 'yuecao365/OfferCome', name: 'OfferCome — AI career workspace: job tracking, resume management, interview prep', stars: 24, category: 'AI Interview', url: 'https://github.com/yuecao365/OfferCome' },
  { repo: 'sahu-adarsh/intervyu', name: 'intervyu — Real voice interviews with AI interviewer, live coding eval, scored report', stars: 21, category: 'AI Interview', url: 'https://github.com/sahu-adarsh/intervyu' },
  { repo: 'manthan89-py/AI-Interview-System', name: 'AI-Interview-System — Automated AI job interviews: resume analysis, relevant questions, response evaluation', stars: 18, category: 'AI Interview', url: 'https://github.com/manthan89-py/AI-Interview-System' },
  { repo: 'theunstopabble/InterviewMinds', name: 'InterviewMinds — Production-grade AI Mock Interview Platform: 81 modules, ML proctoring, CRDT editor', stars: 14, category: 'AI Interview', url: 'https://github.com/theunstopabble/InterviewMinds' },
  { repo: 'Gamingpro237/Advanced_Interview_responder_with_AI', name: 'Advanced_Interview_responder_with_AI — AI generates tailored responses from resume + live transcribed questions', stars: 13, category: 'AI Interview', url: 'https://github.com/Gamingpro237/Advanced_Interview_responder_with_AI' },
  { repo: 'hassan9khaled/EnterVU', name: 'EnterVU — AI Interview Prep & Evaluation: upload CV, specify role, AI-generated questions + scored eval', stars: 12, category: 'AI Interview', url: 'https://github.com/hassan9khaled/EnterVU' },
  { repo: 'hadishah123/ai-interview-coach', name: 'ai-interview-coach — Full-stack AI interview practice with auth + scalable backend', stars: 11, category: 'AI Interview', url: 'https://github.com/hadishah123/ai-interview-coach' },
  { repo: 'sayyedrabeeh/resume-ai-', name: 'resume-ai- (ResuMatch) — Full-stack resume parsing, job matching, interview prep web app', stars: 11, category: 'AI Interview', url: 'https://github.com/sayyedrabeeh/resume-ai-' },
  { repo: 'rahullahoria/Intervity', name: 'Intervity — 100% On-Device, Offline, Private AI Mock Interviews: Full-Duplex Voice, Kokoro TTS, Whisper STT', stars: 10, category: 'AI Interview', url: 'https://github.com/rahullahoria/Intervity' },
  { repo: 'Edge-Explorer/Interview-Prep', name: 'Interview-Prep — Gemini 2.0 Flash + FastAPI + React AI mock interviews', stars: 8, category: 'AI Interview', url: 'https://github.com/Edge-Explorer/Interview-Prep' },
  { repo: 'kyoungbinkim/give-me-job', name: 'give-me-job — AI agent toolkit for Korean job applications (resume → cover letter → interview)', stars: 6, category: 'AI Interview', url: 'https://github.com/kyoungbinkim/give-me-job' },
  { repo: 'Nikhil-creat/Interview-prep-agent', name: 'Interview-prep-agent — Resume-aware AI mock interview platform', stars: 4, category: 'AI Interview', url: 'https://github.com/Nikhil-creat/Interview-prep-agent' },
  { repo: 'Tanmaygangurde20/AI-Interview-Platform', name: 'AI-Interview-Platform — Resume upload + project parsing + Q-gen + feedback', stars: 3, category: 'AI Interview', url: 'https://github.com/Tanmaygangurde20/AI-Interview-Platform' }];

export const repoCatalogCategoryCounts = {
  'AI Interview': repoCatalog.filter(e => e.category === 'AI Interview').length,
  'DSA': repoCatalog.filter(e => e.category === 'DSA').length,
  'System Design': repoCatalog.filter(e => e.category === 'System Design').length,
  'Video Mock': repoCatalog.filter(e => e.category === 'Video Mock').length,
  'Frontend': repoCatalog.filter(e => e.category === 'Frontend').length,
  'Machine Learning': repoCatalog.filter(e => e.category === 'Machine Learning').length,
  'Behavioral': repoCatalog.filter(e => e.category === 'Behavioral').length,
  'Web Projects': repoCatalog.filter(e => e.category === 'Web Projects').length,
};


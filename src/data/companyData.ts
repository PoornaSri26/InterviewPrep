import { CompanyProfile } from '../types';

export const companyProfiles: CompanyProfile[] = [
  {
    id: 'google',
    name: 'Google / Alphabet',
    tier: 'FAANG+',
    logo: '🔵',
    accentColor: '#4285F4',
    interviewProcess: [
      { stage: 'Recruiter Screen', description: 'Resume review + 15-min call. Comp expectations, visa, team interests.', duration: '15 min' },
      { stage: 'Technical Phone Screen', description: '1 coding question (Medium–Hard) in shared Google Doc or Chromebook. Focus on correctness and communication.', duration: '45 min' },
      { stage: 'Onsite (4–5 Rounds)', description: '2–3 Coding (LeetCode-style), 1 System Design, 1 Googleyness & Leadership (behavioral). All virtual now.', duration: '4–5 × 45 min' },
      { stage: 'Hiring Committee Review', description: 'Packet of all 5 scorecards reviewed by HC. Hiring manager can push back. Calibration takes 2–4 weeks.', duration: '2–4 weeks' },
      { stage: 'Team Matching', description: 'If HC approves, recruiter presents your profile to teams that have headcount. You may choose from multiple offers.', duration: '1–3 weeks' }
    ],
    lpPrinciples: undefined,
    technicalFocus: [
      'Graph algorithms (BFS/DFS, Dijkstra, topological sort)',
      'Dynamic programming (memoization and tabulation)',
      'String manipulation and parsing',
      'Large-scale system design (Bigtable, Spanner, GFS internals)',
      'Low-level concurrency and lock-free data structures'
    ],
    glassdoorUrl: 'https://www.glassdoor.com/Interview/Google-Interview-Questions-E9079.htm',
    levelsFyiUrl: 'https://www.levels.fyi/companies/google/salaries/',
    commonProblems: [
      { title: 'Word Ladder', difficulty: 'Hard', url: 'https://leetcode.com/problems/word-ladder/' },
      { title: 'Trapping Rain Water', difficulty: 'Hard', url: 'https://leetcode.com/problems/trapping-rain-water/' },
      { title: 'LRU Cache', difficulty: 'Medium', url: 'https://leetcode.com/problems/lru-cache/' },
      { title: 'Meeting Rooms II', difficulty: 'Medium', url: 'https://leetcode.com/problems/meeting-rooms-ii/' },
      { title: 'Serialize and Deserialize Binary Tree', difficulty: 'Hard', url: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/' }
    ],
    insiderTips: [
      'Googleyness round heavily weighs intellectual humility — show you can change your mind with evidence.',
      'Use STAR format but keep Situation to <20% of answer. Google interviewers time themselves.',
      'In coding rounds, always state your brute-force first even if you know the optimal solution.',
      'Explicit time/space complexity analysis after every solution is mandatory — not optional.',
      'Ask clarifying questions about edge cases before writing a single line of code.'
    ]
  },
  {
    id: 'meta',
    name: 'Meta (Facebook)',
    tier: 'FAANG+',
    logo: '🔵',
    accentColor: '#0866FF',
    interviewProcess: [
      { stage: 'Recruiter Intro Call', description: 'Team fit, compensation range, timeline, relocation. Very fast — can move to technical within a week.', duration: '20 min' },
      { stage: 'Technical Phone Screen', description: '2 coding questions back-to-back. Both are usually Medium difficulty. Fast-paced.', duration: '60 min' },
      { stage: 'Onsite (5 Rounds)', description: '2 Coding, 1 System Design, 1 Behavioral (Core Values), 1 optional Domain round for senior candidates.', duration: '5 × 45 min' },
      { stage: 'Hiring Committee', description: 'Manager reads packets. Strong decisions come from scorecard averages. "Leaning No" in 1 round can be overridden by a strong HC advocate.', duration: '1–2 weeks' }
    ],
    lpPrinciples: undefined,
    technicalFocus: [
      'Fast and optimized algorithmic coding (Meta values efficient solutions)',
      'Graph and tree problems heavily featuring recursion',
      'Large-scale distributed system design (news feed, Instagram, WhatsApp)',
      'Product-sense system design (tradeoffs around user experience vs consistency)',
      'Core Values behavioral: Impact, Move Fast, Be Open'
    ],
    glassdoorUrl: 'https://www.glassdoor.com/Interview/Meta-Interview-Questions-E40772.htm',
    levelsFyiUrl: 'https://www.levels.fyi/companies/meta/salaries/',
    commonProblems: [
      { title: 'Binary Tree Right Side View', difficulty: 'Medium', url: 'https://leetcode.com/problems/binary-tree-right-side-view/' },
      { title: 'Minimum Remove to Make Valid Parentheses', difficulty: 'Medium', url: 'https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/' },
      { title: 'Range Sum of BST', difficulty: 'Easy', url: 'https://leetcode.com/problems/range-sum-of-bst/' },
      { title: 'Accounts Merge', difficulty: 'Medium', url: 'https://leetcode.com/problems/accounts-merge/' },
      { title: 'Subarray Sum Equals K', difficulty: 'Medium', url: 'https://leetcode.com/problems/subarray-sum-equals-k/' }
    ],
    insiderTips: [
      'Meta interviewers are trained to say "Is there a more optimal solution?" even if your answer is correct — don\'t panic.',
      'The Behavioral round maps directly to Meta\'s Core Values. Research all 6 before the interview.',
      'System design at Meta often focuses on product decisions (what to cache vs store, consistency tradeoffs).',
      'Meta values "move fast" — coding should be fast and clean. A slow but correct solution is penalized.',
      'Reference Meta products (Instagram Feed ranking, WhatsApp delivery receipts) in system design answers.'
    ]
  },
  {
    id: 'amazon',
    name: 'Amazon / AWS',
    tier: 'FAANG+',
    logo: '🟠',
    accentColor: '#FF9900',
    interviewProcess: [
      { stage: 'Online Assessment (OA)', description: '2 coding problems + behavioral workstyle assessment on HackerRank platform. Usually auto-rejected below threshold score.', duration: '90 min' },
      { stage: 'Phone Screen', description: '1–2 coding questions + 1–2 LP (Leadership Principle) behavioral questions. Can have 2 interviewers.', duration: '60 min' },
      { stage: 'Onsite Loop (5–6 Rounds)', description: '2 Coding, 1 System Design (for SDE II+), 1 Bar Raiser round, multiple LP-heavy behavioral rounds. Every round asks LP questions.', duration: '5–6 × 60 min' },
      { stage: 'Bar Raiser', description: 'A specially trained senior Amazon employee who evaluates if you raise the bar vs. current team. Has veto power. Focus is heavily LP.', duration: '60 min' }
    ],
    lpPrinciples: [
      { name: 'Customer Obsession', description: 'Start with the customer and work backwards. Earn and maintain trust.', sampleQuestion: 'Tell me about a time you went above and beyond for a customer when it wasn\'t in your direct job scope.' },
      { name: 'Ownership', description: 'Think long term. Never say "that\'s not my job."', sampleQuestion: 'Describe a project you took full ownership of that was technically complex and had high business stakes.' },
      { name: 'Invent and Simplify', description: 'Expect and require innovation. Always find ways to simplify.', sampleQuestion: 'Tell me about a time you identified a problem and invented a completely new solution rather than following convention.' },
      { name: 'Are Right, A Lot', description: 'Have strong judgement. Seek diverse perspectives.', sampleQuestion: 'Give an example of when you used data or a novel insight to make a counterintuitive architectural decision.' },
      { name: 'Learn and Be Curious', description: 'Leaders are never done learning. Dive deep into new areas.', sampleQuestion: 'What is the most technically complex thing you taught yourself in the last 12 months and how did you apply it?' },
      { name: 'Hire and Develop the Best', description: 'Recognize talent. Coach proactively.', sampleQuestion: 'Tell me about a time you mentored someone who was struggling and the impact it had on their performance.' },
      { name: 'Insist on the Highest Standards', description: 'Never let mediocrity be the bar. Continually raise it.', sampleQuestion: 'Describe a situation where you pushed back on something you felt was below the quality bar despite pressure to ship.' },
      { name: 'Think Big', description: 'Create and communicate a bold direction.', sampleQuestion: 'Tell me about a time you proposed a strategy that was bold or unconventional and how you built alignment.' },
      { name: 'Bias for Action', description: 'Speed matters. Most decisions are reversible.', sampleQuestion: 'Describe a time you had to make a critical decision without complete information and what happened.' },
      { name: 'Frugality', description: 'Accomplish more with less. Constraints breed resourcefulness.', sampleQuestion: 'Tell me about a time you delivered a project under significant resource constraints.' },
      { name: 'Earn Trust', description: 'Listen attentively. Speak candidly. Be self-critical.', sampleQuestion: 'Describe a situation where you made a mistake that cost the team or business significantly. How did you handle it?' },
      { name: 'Dive Deep', description: 'Operate at all levels. Audit frequently. Skeptical when metrics differ from anecdote.', sampleQuestion: 'Walk me through a time you had to dig several layers into a production system to find a bug or root cause.' },
      { name: 'Have Backbone; Disagree and Commit', description: 'Challenge decisions when you disagree. Once decided, commit fully.', sampleQuestion: 'Tell me about a time you strongly disagreed with a manager\'s technical decision. What did you do?' },
      { name: 'Deliver Results', description: 'Focus on key inputs. Deliver on time despite setbacks.', sampleQuestion: 'Describe the most challenging project you completed. What obstacles did you overcome and what were the measurable results?' },
      { name: 'Strive to be Earth\'s Best Employer', description: 'Work environment that is safer, more productive, and more diverse.', sampleQuestion: 'Tell me about a time you actively worked to improve the team culture or working environment for your colleagues.' },
      { name: 'Success and Scale Bring Broad Responsibility', description: 'Be aware of the broader impact of Amazon\'s scale on the world.', sampleQuestion: 'How have you considered the societal or environmental implications of a technical decision you made?' }
    ],
    technicalFocus: [
      'Arrays, Strings, Trees, Graphs — standard LeetCode Medium',
      'System Design: scalable microservices, AWS services (DynamoDB, SQS, Lambda)',
      'Object-Oriented Design for LLD rounds (design Amazon cart / warehouse)',
      'Distributed systems reliability: idempotency, eventual consistency, SQS at-least-once'
    ],
    glassdoorUrl: 'https://www.glassdoor.com/Interview/Amazon-Interview-Questions-E6036.htm',
    levelsFyiUrl: 'https://www.levels.fyi/companies/amazon/salaries/',
    commonProblems: [
      { title: 'Number of Islands', difficulty: 'Medium', url: 'https://leetcode.com/problems/number-of-islands/' },
      { title: 'LRU Cache', difficulty: 'Medium', url: 'https://leetcode.com/problems/lru-cache/' },
      { title: 'Reorder Data in Log Files', difficulty: 'Easy', url: 'https://leetcode.com/problems/reorder-data-in-log-files/' },
      { title: 'Merge k Sorted Lists', difficulty: 'Hard', url: 'https://leetcode.com/problems/merge-k-sorted-lists/' },
      { title: 'Copy List with Random Pointer', difficulty: 'Medium', url: 'https://leetcode.com/problems/copy-list-with-random-pointer/' }
    ],
    insiderTips: [
      'Prepare 2 strong STAR stories per Leadership Principle before your loop — you will be asked 8–12 LP questions total.',
      'Bar Raiser looks for cultural fit more than technical skill. They will probe deeply on ownership and disagreement stories.',
      'Never say "we" without immediately clarifying "my specific contribution was..." — Amazon grades YOU not the team.',
      'Amazon OA: the 2nd coding question is usually harder. Aim for a correct brute-force before optimizing.',
      'Reference AWS services naturally in system design — it\'s expected and viewed positively by interviewers.'
    ]
  },
  {
    id: 'apple',
    name: 'Apple',
    tier: 'FAANG+',
    logo: '🍎',
    accentColor: '#555555',
    interviewProcess: [
      { stage: 'Recruiter Screening', description: 'Background check, team interest alignment, salary expectations. Apple is secretive about team details at this stage.', duration: '30 min' },
      { stage: 'Technical Phone Screen', description: '1–2 coding questions. Focus on clean code and elegant solutions — Apple values craftsmanship.', duration: '60 min' },
      { stage: 'Onsite (4–6 Rounds)', description: '2–3 Coding rounds, 1 System/Architecture Design, 1–2 Domain-Specific (e.g., iOS performance, Core Data). Less behavioral than Amazon.', duration: '5 × 45–60 min' }
    ],
    technicalFocus: [
      'Swift / Objective-C for iOS roles; C++ for hardware/performance teams',
      'Memory management, ARC, retain cycles (iOS-specific)',
      'Core Data, UIKit architecture (MVC vs MVVM vs Clean Architecture)',
      'Algorithm efficiency with a focus on clean, readable code over micro-optimizations',
      'GPU/Metal programming for graphics roles'
    ],
    glassdoorUrl: 'https://www.glassdoor.com/Interview/Apple-Interview-Questions-E1138.htm',
    levelsFyiUrl: 'https://www.levels.fyi/companies/apple/salaries/',
    commonProblems: [
      { title: 'Merge Intervals', difficulty: 'Medium', url: 'https://leetcode.com/problems/merge-intervals/' },
      { title: 'Valid Palindrome', difficulty: 'Easy', url: 'https://leetcode.com/problems/valid-palindrome/' },
      { title: 'Course Schedule', difficulty: 'Medium', url: 'https://leetcode.com/problems/course-schedule/' },
      { title: 'Spiral Matrix', difficulty: 'Medium', url: 'https://leetcode.com/problems/spiral-matrix/' },
      { title: 'Maximum Subarray', difficulty: 'Medium', url: 'https://leetcode.com/problems/maximum-subarray/' }
    ],
    insiderTips: [
      'Apple values polished, well-crafted code above all — comment your code and handle edge cases explicitly.',
      'Teamwork and humility are highly valued; Apple interviewers watch for ego closely.',
      'Research the specific team\'s domain (Maps, Siri, Xcode toolchain) and reference their technical challenges.',
      'Apple rarely gives feedback, so treat every round as a fresh start and stay composed.',
      'Dress code is more formal than other FAANG — business casual is safe.'
    ]
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    tier: 'FAANG+',
    logo: '🪟',
    accentColor: '#00A4EF',
    interviewProcess: [
      { stage: 'Recruiter Screen', description: 'Quick background check, team preferences, compensation. Microsoft has many teams; indicate Azure, GitHub, Teams, Xbox, etc.', duration: '30 min' },
      { stage: 'Technical Phone Screen', description: '1–2 coding questions in a shared whiteboard tool or Codility. Medium difficulty.', duration: '60 min' },
      { stage: 'Onsite (4–5 Rounds)', description: '2–3 Coding, 1 System Design, 1 "As Appropriate" manager/director round. Very collaborative — interviewers discuss your profile together.', duration: '4–5 × 60 min' },
      { stage: '"As Appropriate" Round', description: 'Only called in if the panel is on the fence. Senior director asks high-level behavioral and growth mindset questions.', duration: '45 min' }
    ],
    technicalFocus: [
      'Tree and graph algorithms (DFS/BFS, binary search trees)',
      'OOP design (design a parking lot, elevator, chess game)',
      'Azure cloud architecture for cloud/backend roles',
      'C#/.NET for enterprise teams; TypeScript for web teams',
      'Growth Mindset culture — show curiosity and learning velocity'
    ],
    glassdoorUrl: 'https://www.glassdoor.com/Interview/Microsoft-Interview-Questions-E1651.htm',
    levelsFyiUrl: 'https://www.levels.fyi/companies/microsoft/salaries/',
    commonProblems: [
      { title: 'Reverse Linked List', difficulty: 'Easy', url: 'https://leetcode.com/problems/reverse-linked-list/' },
      { title: 'Lowest Common Ancestor of a BST', difficulty: 'Medium', url: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/' },
      { title: 'Validate Binary Search Tree', difficulty: 'Medium', url: 'https://leetcode.com/problems/validate-binary-search-tree/' },
      { title: 'Clone Graph', difficulty: 'Medium', url: 'https://leetcode.com/problems/clone-graph/' },
      { title: 'Word Break', difficulty: 'Medium', url: 'https://leetcode.com/problems/word-break/' }
    ],
    insiderTips: [
      'Microsoft has a "Growth Mindset" culture (Satya Nadella\'s mission). Show curiosity, openness to feedback, and learning from failure.',
      'The coding bar is generally more approachable than Google/Meta — focus on clean code and good communication.',
      '"As Appropriate" round is rare but decisive. Be polished, strategic, and emphasize long-term impact.',
      'Mention specific Microsoft products (Azure Cosmos DB, GitHub Copilot, Teams) when relevant in system design.',
      'Microsoft interviewers collaborate heavily; being collaborative and pleasant in the interview room matters significantly.'
    ]
  },
  {
    id: 'netflix',
    name: 'Netflix',
    tier: 'FAANG+',
    logo: '🔴',
    accentColor: '#E50914',
    interviewProcess: [
      { stage: 'Recruiter Call', description: 'Culture fit assessment for "Dream Team" model. Comp transparency — Netflix is known for top-of-market salaries (all cash, no equity at non-director level).', duration: '30 min' },
      { stage: 'Hiring Manager Call', description: 'Deep discussion of your most impactful projects. Technical breadth check.', duration: '60 min' },
      { stage: 'Onsite (6–7 Rounds)', description: 'Heavily behavioral. 2 Technical coding, 1 System Design at massive scale, 3–4 Values-based behavioral rounds with different stakeholders.', duration: '6–7 × 60 min' }
    ],
    technicalFocus: [
      'Streaming infrastructure: adaptive bitrate, CDN architecture, video encoding pipelines',
      'Distributed systems at massive scale (Chaos Engineering, Netflix OSS: Hystrix, Eureka)',
      'Microservices resilience patterns: circuit breakers, bulkheads, fallbacks',
      'Data engineering: Spark, Kafka, Iceberg for analytics at scale',
      'Java/Kotlin for backend; React for frontend teams'
    ],
    glassdoorUrl: 'https://www.glassdoor.com/Interview/Netflix-Interview-Questions-E11891.htm',
    levelsFyiUrl: 'https://www.levels.fyi/companies/netflix/salaries/',
    commonProblems: [
      { title: 'Design Netflix', difficulty: 'Hard', url: 'https://www.hellointerview.com/learn/system-design/answer-keys/netflix' },
      { title: 'Median of Two Sorted Arrays', difficulty: 'Hard', url: 'https://leetcode.com/problems/median-of-two-sorted-arrays/' },
      { title: 'Sliding Window Maximum', difficulty: 'Hard', url: 'https://leetcode.com/problems/sliding-window-maximum/' },
      { title: 'Find K Pairs with Smallest Sums', difficulty: 'Medium', url: 'https://leetcode.com/problems/find-k-pairs-with-smallest-sums/' },
      { title: 'Flatten Nested List Iterator', difficulty: 'Medium', url: 'https://leetcode.com/problems/flatten-nested-list-iterator/' }
    ],
    insiderTips: [
      'Netflix is 70% behavioral. Prepare "Informed Captain" stories — you made a bold decision with data and owned the outcome.',
      'Netflix values autonomy and context over control. Show decision-making maturity without needing approval.',
      'Compensation is all-cash at IC levels — negotiate the base aggressively (they pay top-of-market by policy).',
      'Chaos Engineering familiarity (Simian Army, fault injection) strongly impresses Netflix system design interviewers.',
      '"Keeper Test" culture — they will directly ask if your manager would fight to keep you. Frame your impact boldly.'
    ]
  },
  {
    id: 'openai',
    name: 'OpenAI',
    tier: 'Top-Tier',
    logo: '🤖',
    accentColor: '#10a37f',
    interviewProcess: [
      { stage: 'Recruiter Screen', description: 'Team fit, research alignment, safety mindset. OpenAI now moves very fast — offers within 2 weeks for strong candidates.', duration: '30 min' },
      { stage: 'Technical Screen', description: 'ML or SWE focused depending on role. ML roles: ML systems + research depth. SWE roles: distributed systems + product engineering.', duration: '60 min' },
      { stage: 'Virtual Onsite (4–5 Rounds)', description: 'Research/technical depth, system design (ML infrastructure scale), coding, and a Safety & Ethics alignment round.', duration: '4–5 × 45 min' }
    ],
    technicalFocus: [
      'LLM training infrastructure: distributed training (FSDP, Megatron-LM, DeepSpeed)',
      'RLHF pipeline design and alignment research understanding',
      'ML systems: model serving, KV-cache optimization, speculative decoding',
      'Python, PyTorch, CUDA (for research engineering roles)',
      'AI safety mindset: misuse vectors, constitutional AI, red-teaming'
    ],
    glassdoorUrl: 'https://www.glassdoor.com/Interview/OpenAI-Interview-Questions-E1158925.htm',
    levelsFyiUrl: 'https://www.levels.fyi/companies/openai/salaries/',
    commonProblems: [
      { title: 'Design a Distributed Training System (custom)', difficulty: 'Hard', url: 'https://github.com/chiphuyen/machine-learning-systems-design' },
      { title: 'Implement Attention Mechanism from Scratch', difficulty: 'Hard', url: 'https://www.deep-ml.com' },
      { title: 'LRU Cache', difficulty: 'Medium', url: 'https://leetcode.com/problems/lru-cache/' },
      { title: 'Median of Two Sorted Arrays', difficulty: 'Hard', url: 'https://leetcode.com/problems/median-of-two-sorted-arrays/' },
      { title: 'Design a Rate Limiter', difficulty: 'Medium', url: 'https://bytebytego.com' }
    ],
    insiderTips: [
      'OpenAI values deep intellectual curiosity. Expect probing "Why?" questions several levels deep into your research or design choices.',
      'Demonstrate genuine safety consciousness — they want engineers who think about misuse and alignment proactively.',
      'Show familiarity with recent LLM papers (Attention Is All You Need, GPT-4 technical report, Constitutional AI).',
      'Compensation is very high (top-of-market cash + significant equity). Be direct about your expectations.',
      'Culture is fast-moving and research-driven — express comfort with ambiguity and rapid iteration.'
    ]
  },
  {
    id: 'stripe',
    name: 'Stripe',
    tier: 'Top-Tier',
    logo: '💳',
    accentColor: '#635BFF',
    interviewProcess: [
      { stage: 'Resume + Portfolio Screen', description: 'Stripe values strong writing. They often ask for a writing sample — clarity and precision matter enormously.', duration: 'Async' },
      { stage: 'Technical Screen', description: '1–2 coding problems (real-world, not LeetCode-style). May include debugging a Stripe-like system or API design.', duration: '75 min' },
      { stage: 'Onsite (5 Rounds)', description: '2 Coding (practical, product-focused), 1 System Design (financial systems), 1 Integration (product sense), 1 Values/Collaboration.', duration: '5 × 60 min' }
    ],
    technicalFocus: [
      'API design: RESTful standards, webhook reliability, idempotency keys',
      'Financial system reliability: double-entry bookkeeping, reconciliation, exactly-once semantics',
      'Ruby/Go for backend; TypeScript/React for frontend; Sorbet for type safety',
      'Strong writing and documentation skills (Stripe culture)',
      'Payments infrastructure: card networks (Visa/Mastercard flows), fraud detection'
    ],
    glassdoorUrl: 'https://www.glassdoor.com/Interview/Stripe-Interview-Questions-E671932.htm',
    levelsFyiUrl: 'https://www.levels.fyi/companies/stripe/salaries/',
    commonProblems: [
      { title: 'Design Stripe Payment API (custom)', difficulty: 'Hard', url: 'https://stripe.com/docs/api' },
      { title: 'Flatten a JSON object', difficulty: 'Medium', url: 'https://bigfrontend.dev' },
      { title: 'Design Idempotent Payment System', difficulty: 'Hard', url: 'https://stripe.com/blog/idempotency' },
      { title: 'Graph Valid Tree', difficulty: 'Medium', url: 'https://leetcode.com/problems/graph-valid-tree/' },
      { title: 'Task Scheduler', difficulty: 'Medium', url: 'https://leetcode.com/problems/task-scheduler/' }
    ],
    insiderTips: [
      'Stripe interviews are very practical — expect to debug real API integrations or design idempotent payment flows.',
      'Written communication matters as much as code. Polish your cover letter and any written responses.',
      'Show genuine curiosity about payments infrastructure — read the Stripe blog and API documentation beforehand.',
      'Idempotency, webhook reliability, and financial consistency are Stripe\'s core technical concerns.',
      'Stripe values "craft" — take time to write clean, well-named code with good error handling.'
    ]
  }
];

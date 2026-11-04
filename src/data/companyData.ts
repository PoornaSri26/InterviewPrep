import { CompanyProfile } from '../types';

/**
 * 52 Premier Tech Companies, Quant Hedge Funds, and AI Frontier Labs.
 * Each profile contains interview process stages, compensation links, technical focus, and tips.
 */
export const companyProfiles: CompanyProfile[] = [
  {
    "id": "google",
    "name": "Google / Alphabet",
    "tier": "FAANG+",
    "logo": "🔵",
    "accentColor": "#4285F4",
    "interviewProcess": [
      {
        "stage": "Recruiter Screen",
        "description": "15-min call. Comp expectations, visa, team interests.",
        "duration": "15 min"
      },
      {
        "stage": "Technical Phone Screen",
        "description": "1 coding question (Medium–Hard) in Google Doc/Chromebook.",
        "duration": "45 min"
      },
      {
        "stage": "Onsite (5 Rounds)",
        "description": "3 Coding, 1 System Design, 1 Googleyness & Leadership.",
        "duration": "5 × 45 min"
      },
      {
        "stage": "Hiring Committee Review",
        "description": "Packet reviewed by independent HC. Calibration takes 2–4 weeks.",
        "duration": "2–4 weeks"
      },
      {
        "stage": "Team Matching",
        "description": "Match with engineering managers with open headcount.",
        "duration": "1–3 weeks"
      }
    ],
    "technicalFocus": [
      "Graph algorithms & Topological Sort",
      "Dynamic Programming",
      "Spanner/Bigtable Large-Scale Systems",
      "Concurrency & Lock-Free Data Structures"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/Google-Interview-Questions-E9079.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/google/salaries/",
    "commonProblems": [
      {
        "title": "Word Ladder",
        "difficulty": "Hard",
        "url": "https://leetcode.com/problems/word-ladder/"
      },
      {
        "title": "Trapping Rain Water",
        "difficulty": "Hard",
        "url": "https://leetcode.com/problems/trapping-rain-water/"
      },
      {
        "title": "LRU Cache",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/lru-cache/"
      },
      {
        "title": "Meeting Rooms II",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/meeting-rooms-ii/"
      },
      {
        "title": "Serialize and Deserialize Binary Tree",
        "difficulty": "Hard",
        "url": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/"
      }
    ],
    "insiderTips": [
      "Googleyness round heavily weighs intellectual humility.",
      "State brute-force first before optimizing.",
      "Explicit time/space complexity analysis is mandatory."
    ]
  },
  {
    "id": "meta",
    "name": "Meta (Facebook)",
    "tier": "FAANG+",
    "logo": "🔵",
    "accentColor": "#0866FF",
    "interviewProcess": [
      {
        "stage": "Recruiter Screen",
        "description": "Resume review & timeline alignment.",
        "duration": "20 min"
      },
      {
        "stage": "Technical Screen",
        "description": "2 coding problems in CoderPad. Speed is critical.",
        "duration": "45 min"
      },
      {
        "stage": "Onsite (4–5 Rounds)",
        "description": "2 Coding, 1 System Design, 1 Behavioral (Values).",
        "duration": "5 × 45 min"
      }
    ],
    "technicalFocus": [
      "High-speed algorithmic implementation",
      "Graph & Tree traversals",
      "Newsfeed / Messaging System Design",
      "Move Fast & Impact Values"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/Meta-Interview-Questions-E40772.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/facebook/salaries/",
    "commonProblems": [
      {
        "title": "Subarray Sum Equals K",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/subarray-sum-equals-k/"
      },
      {
        "title": "Lowest Common Ancestor of a Binary Tree",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/"
      },
      {
        "title": "Minimum Remove to Make Valid Parentheses",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/"
      },
      {
        "title": "K Closest Points to Origin",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/k-closest-points-to-origin/"
      }
    ],
    "insiderTips": [
      "Meta expects you to solve 2 coding problems in 45 minutes.",
      "Practice writing clean bug-free code with zero compilation errors on the first pass."
    ]
  },
  {
    "id": "amazon",
    "name": "Amazon / AWS",
    "tier": "FAANG+",
    "logo": "🟠",
    "accentColor": "#FF9900",
    "interviewProcess": [
      {
        "stage": "Online Assessment (OA)",
        "description": "2 LeetCode problems + Work Style Assessment.",
        "duration": "90 min"
      },
      {
        "stage": "Technical Screen",
        "description": "1 coding problem + 20 min LP deep-dive.",
        "duration": "60 min"
      },
      {
        "stage": "Onsite (4–5 Rounds)",
        "description": "Bar Raiser, Coding, LLD, HLD, Leadership Principles in EVERY round.",
        "duration": "5 × 60 min"
      }
    ],
    "lpPrinciples": [
      {
        "name": "Customer Obsession",
        "description": "Leaders start with the customer and work backwards. They work vigorously to earn and keep customer trust.",
        "sampleQuestion": "Tell me about a time you had to make a decision on behalf of a customer where trade-offs had to be made."
      },
      {
        "name": "Ownership",
        "description": "Leaders are owners. They think long term and don’t sacrifice long-term value for short-term results.",
        "sampleQuestion": "Give an example of a tough problem you solved that was outside your direct area of responsibility."
      },
      {
        "name": "Invent and Simplify",
        "description": "Leaders expect and require innovation and invention from their teams and always find ways to simplify.",
        "sampleQuestion": "Describe a time when you found a simple solution to an otherwise complex technical problem."
      },
      {
        "name": "Bias for Action",
        "description": "Speed matters in business. Many decisions and actions are reversible and do not need extensive study.",
        "sampleQuestion": "Describe a situation where you had to make a critical engineering decision with incomplete information."
      },
      {
        "name": "Have Backbone; Disagree and Commit",
        "description": "Leaders are obligated to respectfully challenge decisions when they disagree, even when doing so is uncomfortable or exhausting.",
        "sampleQuestion": "Tell me about a time you strongly disagreed with your manager or team on an architectural decision."
      },
      {
        "name": "Deliver Results",
        "description": "Leaders focus on the key inputs for their business and deliver them with the right quality and in a timely fashion.",
        "sampleQuestion": "Tell me about a high-stakes project with tight deadlines that you successfully delivered."
      }
    ],
    "technicalFocus": [
      "Object-Oriented Design (LLD)",
      "DynamoDB / S3 scale architectures",
      "Sliding Window & BFS/DFS",
      "Leadership Principles (50% of hiring decision)"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/Amazon-Interview-Questions-E6036.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/amazon/salaries/",
    "commonProblems": [
      {
        "title": "Course Schedule II",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/course-schedule-ii/"
      },
      {
        "title": "Reorder Data in Log Files",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/reorder-data-in-log-files/"
      },
      {
        "title": "Critical Connections in a Network",
        "difficulty": "Hard",
        "url": "https://leetcode.com/problems/critical-connections-in-a-network/"
      }
    ],
    "insiderTips": [
      "Every single interviewer is assigned 2 Leadership Principles.",
      "Have at least 2 distinct STAR stories for every LP."
    ]
  },
  {
    "id": "apple",
    "name": "Apple",
    "tier": "FAANG+",
    "logo": "⚪",
    "accentColor": "#A2AAAD",
    "interviewProcess": [
      {
        "stage": "Recruiter Chat",
        "description": "Team fit and domain knowledge screen.",
        "duration": "30 min"
      },
      {
        "stage": "Team Screen",
        "description": "Technical deep-dive on low-level fundamentals or coding.",
        "duration": "45–60 min"
      },
      {
        "stage": "Onsite (5–6 Rounds)",
        "description": "Intensive team-specific rounds: systems, coding, hardware/OS interfaces.",
        "duration": "6 × 45 min"
      }
    ],
    "technicalFocus": [
      "Memory management & OS primitives",
      "Algorithms with space constraints",
      "High-reliability software architecture",
      "Domain specialization"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/Apple-Interview-Questions-E1138.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/apple/salaries/",
    "commonProblems": [
      {
        "title": "LRU Cache",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/lru-cache/"
      },
      {
        "title": "Merge Intervals",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/merge-intervals/"
      },
      {
        "title": "Design Add and Search Words Data Structure",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/design-add-and-search-words-data-structure/"
      }
    ],
    "insiderTips": [
      "Hiring is decentralized per team. Read the exact team description carefully.",
      "Expect deep questions on memory layouts and caching."
    ]
  },
  {
    "id": "microsoft",
    "name": "Microsoft / Azure",
    "tier": "FAANG+",
    "logo": "🟩",
    "accentColor": "#00A4EF",
    "interviewProcess": [
      {
        "stage": "Recruiter Call",
        "description": "Overview of roles in Azure, M365, Windows, Developer Division.",
        "duration": "30 min"
      },
      {
        "stage": "Technical Phone Screen",
        "description": "Data structures & problem solving.",
        "duration": "45 min"
      },
      {
        "stage": "Onsite Loop (4–5 Rounds)",
        "description": "Coding, System Design, As-Appropriate (AA / Partner Director round).",
        "duration": "4 × 45 min"
      }
    ],
    "technicalFocus": [
      "Tree and Graph traversals",
      "Distributed Cloud Architecture (Azure)",
      "Growth Mindset behavioral culture",
      "Clean modular code"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/Microsoft-Interview-Questions-E1651.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/microsoft/salaries/",
    "commonProblems": [
      {
        "title": "Spiral Matrix",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/spiral-matrix/"
      },
      {
        "title": "Sign of the Product of an Array",
        "difficulty": "Easy",
        "url": "https://leetcode.com/problems/sign-of-the-product-of-an-array/"
      },
      {
        "title": "Letter Combinations of a Phone Number",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/letter-combinations-of-a-phone-number/"
      }
    ],
    "insiderTips": [
      "Satya Nadella’s \"Growth Mindset\" is tested in the AA round.",
      "Demonstrate how you learn from mistakes and collaborate across teams."
    ]
  },
  {
    "id": "netflix",
    "name": "Netflix",
    "tier": "FAANG+",
    "logo": "🔴",
    "accentColor": "#E50914",
    "interviewProcess": [
      {
        "stage": "Recruiter Call",
        "description": "Deep screen on Culture Memo alignment.",
        "duration": "30 min"
      },
      {
        "stage": "Technical Screen (2 Rounds)",
        "description": "Coding & System Architecture with Senior Engineers.",
        "duration": "2 × 45 min"
      },
      {
        "stage": "Onsite (4 Rounds)",
        "description": "System Design, Architecture Deep Dive, Director & VP culture interviews.",
        "duration": "4 × 45 min"
      }
    ],
    "technicalFocus": [
      "Resilience engineering (Chaos Monkey patterns)",
      "Microservices at massive scale",
      "Distributed state management",
      "Culture Memo: Freedom & Responsibility"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/Netflix-Interview-Questions-E11891.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/netflix/salaries/",
    "commonProblems": [
      {
        "title": "Design In-Memory File System",
        "difficulty": "Hard",
        "url": "https://leetcode.com/problems/design-in-memory-file-system/"
      },
      {
        "title": "Copy List with Random Pointer",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/copy-list-with-random-pointer/"
      },
      {
        "title": "Top K Frequent Elements",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/top-k-frequent-elements/"
      }
    ],
    "insiderTips": [
      "Netflix hires predominantly Senior+ engineers. Top-of-market all-cash compensation.",
      "You MUST read and breathe the Netflix Culture Memo."
    ]
  },
  {
    "id": "uber",
    "name": "Uber",
    "tier": "Tier 1",
    "logo": "⬛",
    "accentColor": "#000000",
    "interviewProcess": [
      {
        "stage": "Recruiter Screen",
        "description": "Background & team match.",
        "duration": "20 min"
      },
      {
        "stage": "Coding Screen",
        "description": "Algorithms & data structures.",
        "duration": "60 min"
      },
      {
        "stage": "Onsite (4–5 Rounds)",
        "description": "2 Coding, 1 Architecture (Dispatch/Geohash), 1 Behavioral.",
        "duration": "5 × 45 min"
      }
    ],
    "technicalFocus": [
      "Geospatial indexing (H3, Geohash, QuadTrees)",
      "Real-time WebSocket connection handling",
      "Dynamic pricing algorithms",
      "Distributed locks"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/Uber-Interview-Questions-E575263.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/uber/salaries/",
    "commonProblems": [
      {
        "title": "Bus Routes",
        "difficulty": "Hard",
        "url": "https://leetcode.com/problems/bus-routes/"
      },
      {
        "title": "Design Hit Counter",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/design-hit-counter/"
      }
    ],
    "insiderTips": [
      "System design almost always involves real-time location tracking or ride matching."
    ]
  },
  {
    "id": "stripe",
    "name": "Stripe",
    "tier": "Tier 1",
    "logo": "🟣",
    "accentColor": "#635BFF",
    "interviewProcess": [
      {
        "stage": "Recruiter Chat",
        "description": "Experience & cultural fit.",
        "duration": "20 min"
      },
      {
        "stage": "Integration Screen",
        "description": "Real coding in your local IDE with internet access.",
        "duration": "60 min"
      },
      {
        "stage": "Onsite (5 Rounds)",
        "description": "Coding in local IDE, Bug Squash, System Design, Integration, Behavioral.",
        "duration": "5 × 60 min"
      }
    ],
    "technicalFocus": [
      "API design & Idempotency",
      "Zero-downtime database migrations",
      "Payment ledger consistency",
      "Practical local IDE debugging"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/Stripe-Interview-Questions-E671932.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/stripe/salaries/",
    "commonProblems": [
      {
        "title": "Parse Lisp Expression",
        "difficulty": "Hard",
        "url": "https://leetcode.com/problems/parse-lisp-expression/"
      },
      {
        "title": "Design Rate Limiter",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/design-rate-limiter/"
      }
    ],
    "insiderTips": [
      "Stripe uses your own IDE. Write clean tests, use debugger, write documentation."
    ]
  },
  {
    "id": "airbnb",
    "name": "Airbnb",
    "tier": "Tier 1",
    "logo": "🔴",
    "accentColor": "#FF5A5F",
    "interviewProcess": [
      {
        "stage": "Recruiter Screen",
        "description": "Profile review.",
        "duration": "20 min"
      },
      {
        "stage": "Coding Screen",
        "description": "Practical algorithmic problem.",
        "duration": "60 min"
      },
      {
        "stage": "Onsite (5 Rounds)",
        "description": "2 Coding, 1 Architecture, 2 Core Values behavioral interviews.",
        "duration": "5 × 45 min"
      }
    ],
    "technicalFocus": [
      "Search & ranking systems",
      "Calendar availability indexing",
      "Core Values: Host mindset, Be a Cereal Entrepreneur"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/Airbnb-Interview-Questions-E391850.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/airbnb/salaries/",
    "commonProblems": [
      {
        "title": "Alien Dictionary",
        "difficulty": "Hard",
        "url": "https://leetcode.com/problems/alien-dictionary/"
      },
      {
        "title": "Text Justification",
        "difficulty": "Hard",
        "url": "https://leetcode.com/problems/text-justification/"
      }
    ],
    "insiderTips": [
      "Core values rounds are distinct from technical rounds and can veto offers."
    ]
  },
  {
    "id": "bytedance",
    "name": "ByteDance / TikTok",
    "tier": "Tier 1",
    "logo": "🎵",
    "accentColor": "#00F2FE",
    "interviewProcess": [
      {
        "stage": "OA Screen",
        "description": "3–4 algorithmic problems.",
        "duration": "90 min"
      },
      {
        "stage": "Round 1 Technical",
        "description": "Coding + CS fundamentals (OS, Networks, DB).",
        "duration": "60 min"
      },
      {
        "stage": "Round 2 Technical",
        "description": "Hard coding + system architecture.",
        "duration": "60 min"
      },
      {
        "stage": "Round 3 Technical Leader",
        "description": "System design + high-concurrency architecture.",
        "duration": "60 min"
      }
    ],
    "technicalFocus": [
      "Deep CS fundamentals: TCP handshake, virtual memory, B+ trees",
      "Recommendation engine feeds",
      "Ultra high concurrency"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/ByteDance-Interview-Questions-E1624196.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/bytedance/salaries/",
    "commonProblems": [
      {
        "title": "Longest Consecutive Sequence",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/longest-consecutive-sequence/"
      },
      {
        "title": "Median of Two Sorted Arrays",
        "difficulty": "Hard",
        "url": "https://leetcode.com/problems/median-of-two-sorted-arrays/"
      }
    ],
    "insiderTips": [
      "Prepare deep network stack and operating systems theory. ByteDance drills fundamentals."
    ]
  },
  {
    "id": "snowflake",
    "name": "Snowflake",
    "tier": "Tier 1",
    "logo": "❄️",
    "accentColor": "#29B5E8",
    "interviewProcess": [
      {
        "stage": "Recruiter Screen",
        "description": "Experience & tech stack.",
        "duration": "20 min"
      },
      {
        "stage": "Technical Phone Screen",
        "description": "Algorithms & data structures.",
        "duration": "60 min"
      },
      {
        "stage": "Onsite Loop (5 Rounds)",
        "description": "3 Coding, 1 Distributed Database Architecture, 1 Managerial.",
        "duration": "5 × 45 min"
      }
    ],
    "technicalFocus": [
      "Columnar storage engines",
      "Query compilation & vectorized execution",
      "Distributed transactions and metadata services"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/Snowflake-Interview-Questions-E826229.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/snowflake/salaries/",
    "commonProblems": [
      {
        "title": "Design In-Memory File System",
        "difficulty": "Hard",
        "url": "https://leetcode.com/problems/design-in-memory-file-system/"
      },
      {
        "title": "Merge k Sorted Lists",
        "difficulty": "Hard",
        "url": "https://leetcode.com/problems/merge-k-sorted-lists/"
      }
    ],
    "insiderTips": [
      "Expect questions around query optimization, caching, and multi-tenant data isolation."
    ]
  },
  {
    "id": "databricks",
    "name": "Databricks",
    "tier": "Tier 1",
    "logo": "🧱",
    "accentColor": "#FF3621",
    "interviewProcess": [
      {
        "stage": "Recruiter Chat",
        "description": "Role overview.",
        "duration": "20 min"
      },
      {
        "stage": "Technical Screen",
        "description": "Concurrent data structure or algorithmic challenge.",
        "duration": "60 min"
      },
      {
        "stage": "Onsite Loop",
        "description": "Concurrency coding, Distributed Systems Design, Algorithms, Cultural fit.",
        "duration": "5 × 60 min"
      }
    ],
    "technicalFocus": [
      "Spark/Delta Lake internals",
      "Multi-threaded programming and memory models",
      "LSM trees and Parquet formats"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/Databricks-Interview-Questions-E970635.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/databricks/salaries/",
    "commonProblems": [
      {
        "title": "Implement Trie (Prefix Tree)",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/implement-trie-prefix-tree/"
      },
      {
        "title": "LRU Cache with TTL",
        "difficulty": "Hard",
        "url": "https://leetcode.com/problems/lru-cache/"
      }
    ],
    "insiderTips": [
      "Databricks heavily tests multi-threaded correctness, mutexes, condition variables, and memory race conditions."
    ]
  },
  {
    "id": "jane-street",
    "name": "Jane Street",
    "tier": "Quant / Fintech",
    "logo": "🟢",
    "accentColor": "#00875A",
    "interviewProcess": [
      {
        "stage": "Technical Phone Screen 1",
        "description": "Mental math, probability puzzles, and algorithmic code.",
        "duration": "45 min"
      },
      {
        "stage": "Technical Phone Screen 2",
        "description": "Data structures, game theory, or functional programming.",
        "duration": "45 min"
      },
      {
        "stage": "Full-Day Onsite",
        "description": "4–5 intense rounds with quantitative traders and systems engineers.",
        "duration": "Full Day"
      }
    ],
    "technicalFocus": [
      "Cache-conscious data structures",
      "Network packet serialization (UDP/TCP bypass)",
      "Probability, Bayesian inference, and expected value",
      "OCaml / Functional paradigms"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/Jane-Street-Interview-Questions-E255549.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/jane-street/salaries/",
    "commonProblems": [
      {
        "title": "Sliding Window Maximum",
        "difficulty": "Hard",
        "url": "https://leetcode.com/problems/sliding-window-maximum/"
      },
      {
        "title": "Find Median from Data Stream",
        "difficulty": "Hard",
        "url": "https://leetcode.com/problems/find-median-from-data-stream/"
      }
    ],
    "insiderTips": [
      "Practice probability and game theory. Jane Street values mental agility and reasoning out loud."
    ]
  },
  {
    "id": "citadel",
    "name": "Citadel / Citadel Securities",
    "tier": "Quant / Fintech",
    "logo": "🏰",
    "accentColor": "#1B365D",
    "interviewProcess": [
      {
        "stage": "HackerRank OA",
        "description": "3 difficult algorithmic problems with tight time limits.",
        "duration": "90 min"
      },
      {
        "stage": "Phone Screen",
        "description": "Low-latency systems or C++ internals.",
        "duration": "60 min"
      },
      {
        "stage": "Superday",
        "description": "5 rounds: C++ memory model, architecture, high-frequency order book design.",
        "duration": "5 × 45 min"
      }
    ],
    "technicalFocus": [
      "C++20, RAII, move semantics, template metaprogramming",
      "Kernel bypass (Solarflare OpenOnload, DPDK)",
      "Limit Order Book matching engine design",
      "Lock-free ring buffers (Disruptor)"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/Citadel-Interview-Questions-E14925.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/citadel/salaries/",
    "commonProblems": [
      {
        "title": "Design Order Book",
        "difficulty": "Hard",
        "url": "https://leetcode.com/discuss/interview-question/system-design/"
      },
      {
        "title": "Shortest Subarray with Sum at Least K",
        "difficulty": "Hard",
        "url": "https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/"
      }
    ],
    "insiderTips": [
      "Master cache lines (L1/L2/L3), memory alignment, atomic operations, and cache false sharing."
    ]
  },
  {
    "id": "two-sigma",
    "name": "Two Sigma",
    "tier": "Quant / Fintech",
    "logo": "🔷",
    "accentColor": "#002B49",
    "interviewProcess": [
      {
        "stage": "Online Assessment",
        "description": "Algorithms and math problems.",
        "duration": "90 min"
      },
      {
        "stage": "Technical Screen",
        "description": "Coding in Java or C++.",
        "duration": "60 min"
      },
      {
        "stage": "Onsite Superday",
        "description": "Distributed computing, data engineering, algorithms, behavioral.",
        "duration": "5 × 60 min"
      }
    ],
    "technicalFocus": [
      "Distributed data processing (MapReduce / Spark)",
      "JVM internals and GC tuning",
      "Probability & statistical hypothesis testing"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/Two-Sigma-Interview-Questions-E242944.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/two-sigma/salaries/",
    "commonProblems": [
      {
        "title": "Friend Circles (Number of Provinces)",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/number-of-provinces/"
      },
      {
        "title": "Random Pick with Weight",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/random-pick-with-weight/"
      }
    ],
    "insiderTips": [
      "Two Sigma views itself as a technology company that trades. Emphasize robust software engineering principles."
    ]
  },
  {
    "id": "openai",
    "name": "OpenAI",
    "tier": "AI Frontier",
    "logo": "⚡",
    "accentColor": "#10A37F",
    "interviewProcess": [
      {
        "stage": "Recruiter Chat",
        "description": "Mission alignment & technical trajectory.",
        "duration": "20 min"
      },
      {
        "stage": "Technical Screen",
        "description": "Practical coding challenge in your local environment.",
        "duration": "60 min"
      },
      {
        "stage": "Onsite Loop",
        "description": "Large-scale distributed systems, GPU cluster orchestration, model serving, behavioral.",
        "duration": "5 × 60 min"
      }
    ],
    "technicalFocus": [
      "High-throughput LLM inference engines (vLLM, continuous batching)",
      "Triton & CUDA kernel optimization",
      "Distributed training (Megatron, DeepSpeed, ZeRO)",
      "High-availability agentic workflows"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/OpenAI-Interview-Questions-E2431782.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/openai/salaries/",
    "commonProblems": [
      {
        "title": "Design KV Cache PagedAttention",
        "difficulty": "Hard",
        "url": "https://leetcode.com/"
      },
      {
        "title": "Top K Frequent Words",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/top-k-frequent-words/"
      }
    ],
    "insiderTips": [
      "Be ready to discuss transformer architecture, KV caching memory bottlenecks, and distributed GPU communication topologies."
    ]
  },
  {
    "id": "anthropic",
    "name": "Anthropic",
    "tier": "AI Frontier",
    "logo": "🧭",
    "accentColor": "#D97706",
    "interviewProcess": [
      {
        "stage": "Recruiter Chat",
        "description": "Alignment with constitutional AI & safety research.",
        "duration": "20 min"
      },
      {
        "stage": "Work-Sample Screen",
        "description": "Realistic codebase debugging and feature implementation in local repo.",
        "duration": "90 min"
      },
      {
        "stage": "Onsite Loop",
        "description": "Systems architecture, model reliability, collaborative coding, AI safety alignment.",
        "duration": "5 × 60 min"
      }
    ],
    "technicalFocus": [
      "Model serving infra & fault tolerance",
      "Python/Rust async backends",
      "Evaluation pipelines and safety benchmarks",
      "Clean software engineering over leetcode memorization"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/Anthropic-Interview-Questions-E8529237.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/anthropic/salaries/",
    "commonProblems": [
      {
        "title": "Design an LRU Cache with Eviction Callbacks",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/lru-cache/"
      },
      {
        "title": "Word Search II",
        "difficulty": "Hard",
        "url": "https://leetcode.com/problems/word-search-ii/"
      }
    ],
    "insiderTips": [
      "Anthropic prioritizes practical engineering ability, local environment fluency, and alignment with their public safety mission."
    ]
  },
  {
    "id": "salesforce",
    "name": "Salesforce",
    "tier": "Tier 1",
    "logo": "☁️",
    "accentColor": "#00A1E0",
    "interviewProcess": [
      {
        "stage": "Recruiter Screen",
        "description": "15-min call on goals, compensation, and background.",
        "duration": "15–20 min"
      },
      {
        "stage": "Technical Screen",
        "description": "Core data structures, problem solving, or live coding.",
        "duration": "45–60 min"
      },
      {
        "stage": "Onsite Virtual Loop (4–5 Rounds)",
        "description": "Coding algorithms, System Architecture, and Cultural alignment.",
        "duration": "4–5 × 45 min"
      }
    ],
    "technicalFocus": [
      "Data structures & algorithm efficiency",
      "System design for scalability and fault tolerance",
      "Production debugging and edge case handling",
      "Company cultural values and collaboration"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/Salesforce-Interview-Questions.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/salesforce/salaries/",
    "commonProblems": [
      {
        "title": "Two Sum",
        "difficulty": "Easy",
        "url": "https://leetcode.com/problems/two-sum/"
      },
      {
        "title": "LRU Cache",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/lru-cache/"
      },
      {
        "title": "Merge Intervals",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/merge-intervals/"
      }
    ],
    "insiderTips": [
      "Review Salesforce's frequency-ranked problems in your Company Sheets view before your interview.",
      "Communicate trade-offs out loud before jumping into code implementation.",
      "Prepare 2 strong STAR stories demonstrating deep technical ownership and business impact."
    ]
  },
  {
    "id": "palantir",
    "name": "Palantir",
    "tier": "Tier 1",
    "logo": "👁️",
    "accentColor": "#101820",
    "interviewProcess": [
      {
        "stage": "Recruiter Screen",
        "description": "15-min call on goals, compensation, and background.",
        "duration": "15–20 min"
      },
      {
        "stage": "Technical Screen",
        "description": "Core data structures, problem solving, or live coding.",
        "duration": "45–60 min"
      },
      {
        "stage": "Onsite Virtual Loop (4–5 Rounds)",
        "description": "Coding algorithms, System Architecture, and Cultural alignment.",
        "duration": "4–5 × 45 min"
      }
    ],
    "technicalFocus": [
      "Data structures & algorithm efficiency",
      "System design for scalability and fault tolerance",
      "Production debugging and edge case handling",
      "Company cultural values and collaboration"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/Palantir-Interview-Questions.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/palantir/salaries/",
    "commonProblems": [
      {
        "title": "Two Sum",
        "difficulty": "Easy",
        "url": "https://leetcode.com/problems/two-sum/"
      },
      {
        "title": "LRU Cache",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/lru-cache/"
      },
      {
        "title": "Merge Intervals",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/merge-intervals/"
      }
    ],
    "insiderTips": [
      "Review Palantir's frequency-ranked problems in your Company Sheets view before your interview.",
      "Communicate trade-offs out loud before jumping into code implementation.",
      "Prepare 2 strong STAR stories demonstrating deep technical ownership and business impact."
    ]
  },
  {
    "id": "coinbase",
    "name": "Coinbase",
    "tier": "Tier 1",
    "logo": "🔵",
    "accentColor": "#0052FF",
    "interviewProcess": [
      {
        "stage": "Recruiter Screen",
        "description": "15-min call on goals, compensation, and background.",
        "duration": "15–20 min"
      },
      {
        "stage": "Technical Screen",
        "description": "Core data structures, problem solving, or live coding.",
        "duration": "45–60 min"
      },
      {
        "stage": "Onsite Virtual Loop (4–5 Rounds)",
        "description": "Coding algorithms, System Architecture, and Cultural alignment.",
        "duration": "4–5 × 45 min"
      }
    ],
    "technicalFocus": [
      "Data structures & algorithm efficiency",
      "System design for scalability and fault tolerance",
      "Production debugging and edge case handling",
      "Company cultural values and collaboration"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/Coinbase-Interview-Questions.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/coinbase/salaries/",
    "commonProblems": [
      {
        "title": "Two Sum",
        "difficulty": "Easy",
        "url": "https://leetcode.com/problems/two-sum/"
      },
      {
        "title": "LRU Cache",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/lru-cache/"
      },
      {
        "title": "Merge Intervals",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/merge-intervals/"
      }
    ],
    "insiderTips": [
      "Review Coinbase's frequency-ranked problems in your Company Sheets view before your interview.",
      "Communicate trade-offs out loud before jumping into code implementation.",
      "Prepare 2 strong STAR stories demonstrating deep technical ownership and business impact."
    ]
  },
  {
    "id": "linkedin",
    "name": "LinkedIn",
    "tier": "Tier 1",
    "logo": "🔗",
    "accentColor": "#0A66C2",
    "interviewProcess": [
      {
        "stage": "Recruiter Screen",
        "description": "15-min call on goals, compensation, and background.",
        "duration": "15–20 min"
      },
      {
        "stage": "Technical Screen",
        "description": "Core data structures, problem solving, or live coding.",
        "duration": "45–60 min"
      },
      {
        "stage": "Onsite Virtual Loop (4–5 Rounds)",
        "description": "Coding algorithms, System Architecture, and Cultural alignment.",
        "duration": "4–5 × 45 min"
      }
    ],
    "technicalFocus": [
      "Data structures & algorithm efficiency",
      "System design for scalability and fault tolerance",
      "Production debugging and edge case handling",
      "Company cultural values and collaboration"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/LinkedIn-Interview-Questions.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/linkedin/salaries/",
    "commonProblems": [
      {
        "title": "Two Sum",
        "difficulty": "Easy",
        "url": "https://leetcode.com/problems/two-sum/"
      },
      {
        "title": "LRU Cache",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/lru-cache/"
      },
      {
        "title": "Merge Intervals",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/merge-intervals/"
      }
    ],
    "insiderTips": [
      "Review LinkedIn's frequency-ranked problems in your Company Sheets view before your interview.",
      "Communicate trade-offs out loud before jumping into code implementation.",
      "Prepare 2 strong STAR stories demonstrating deep technical ownership and business impact."
    ]
  },
  {
    "id": "adobe",
    "name": "Adobe",
    "tier": "Tier 1",
    "logo": "🅰️",
    "accentColor": "#FF0000",
    "interviewProcess": [
      {
        "stage": "Recruiter Screen",
        "description": "15-min call on goals, compensation, and background.",
        "duration": "15–20 min"
      },
      {
        "stage": "Technical Screen",
        "description": "Core data structures, problem solving, or live coding.",
        "duration": "45–60 min"
      },
      {
        "stage": "Onsite Virtual Loop (4–5 Rounds)",
        "description": "Coding algorithms, System Architecture, and Cultural alignment.",
        "duration": "4–5 × 45 min"
      }
    ],
    "technicalFocus": [
      "Data structures & algorithm efficiency",
      "System design for scalability and fault tolerance",
      "Production debugging and edge case handling",
      "Company cultural values and collaboration"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/Adobe-Interview-Questions.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/adobe/salaries/",
    "commonProblems": [
      {
        "title": "Two Sum",
        "difficulty": "Easy",
        "url": "https://leetcode.com/problems/two-sum/"
      },
      {
        "title": "LRU Cache",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/lru-cache/"
      },
      {
        "title": "Merge Intervals",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/merge-intervals/"
      }
    ],
    "insiderTips": [
      "Review Adobe's frequency-ranked problems in your Company Sheets view before your interview.",
      "Communicate trade-offs out loud before jumping into code implementation.",
      "Prepare 2 strong STAR stories demonstrating deep technical ownership and business impact."
    ]
  },
  {
    "id": "oracle",
    "name": "Oracle / OCI",
    "tier": "Tier 1",
    "logo": "🅾️",
    "accentColor": "#F80000",
    "interviewProcess": [
      {
        "stage": "Recruiter Screen",
        "description": "15-min call on goals, compensation, and background.",
        "duration": "15–20 min"
      },
      {
        "stage": "Technical Screen",
        "description": "Core data structures, problem solving, or live coding.",
        "duration": "45–60 min"
      },
      {
        "stage": "Onsite Virtual Loop (4–5 Rounds)",
        "description": "Coding algorithms, System Architecture, and Cultural alignment.",
        "duration": "4–5 × 45 min"
      }
    ],
    "technicalFocus": [
      "Data structures & algorithm efficiency",
      "System design for scalability and fault tolerance",
      "Production debugging and edge case handling",
      "Company cultural values and collaboration"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/Oracle-/-OCI-Interview-Questions.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/oracle/salaries/",
    "commonProblems": [
      {
        "title": "Two Sum",
        "difficulty": "Easy",
        "url": "https://leetcode.com/problems/two-sum/"
      },
      {
        "title": "LRU Cache",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/lru-cache/"
      },
      {
        "title": "Merge Intervals",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/merge-intervals/"
      }
    ],
    "insiderTips": [
      "Review Oracle / OCI's frequency-ranked problems in your Company Sheets view before your interview.",
      "Communicate trade-offs out loud before jumping into code implementation.",
      "Prepare 2 strong STAR stories demonstrating deep technical ownership and business impact."
    ]
  },
  {
    "id": "spotify",
    "name": "Spotify",
    "tier": "Tier 1",
    "logo": "🟢",
    "accentColor": "#1ED760",
    "interviewProcess": [
      {
        "stage": "Recruiter Screen",
        "description": "15-min call on goals, compensation, and background.",
        "duration": "15–20 min"
      },
      {
        "stage": "Technical Screen",
        "description": "Core data structures, problem solving, or live coding.",
        "duration": "45–60 min"
      },
      {
        "stage": "Onsite Virtual Loop (4–5 Rounds)",
        "description": "Coding algorithms, System Architecture, and Cultural alignment.",
        "duration": "4–5 × 45 min"
      }
    ],
    "technicalFocus": [
      "Data structures & algorithm efficiency",
      "System design for scalability and fault tolerance",
      "Production debugging and edge case handling",
      "Company cultural values and collaboration"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/Spotify-Interview-Questions.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/spotify/salaries/",
    "commonProblems": [
      {
        "title": "Two Sum",
        "difficulty": "Easy",
        "url": "https://leetcode.com/problems/two-sum/"
      },
      {
        "title": "LRU Cache",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/lru-cache/"
      },
      {
        "title": "Merge Intervals",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/merge-intervals/"
      }
    ],
    "insiderTips": [
      "Review Spotify's frequency-ranked problems in your Company Sheets view before your interview.",
      "Communicate trade-offs out loud before jumping into code implementation.",
      "Prepare 2 strong STAR stories demonstrating deep technical ownership and business impact."
    ]
  },
  {
    "id": "atlassian",
    "name": "Atlassian",
    "tier": "Tier 1",
    "logo": "🔷",
    "accentColor": "#0052CC",
    "interviewProcess": [
      {
        "stage": "Recruiter Screen",
        "description": "15-min call on goals, compensation, and background.",
        "duration": "15–20 min"
      },
      {
        "stage": "Technical Screen",
        "description": "Core data structures, problem solving, or live coding.",
        "duration": "45–60 min"
      },
      {
        "stage": "Onsite Virtual Loop (4–5 Rounds)",
        "description": "Coding algorithms, System Architecture, and Cultural alignment.",
        "duration": "4–5 × 45 min"
      }
    ],
    "technicalFocus": [
      "Data structures & algorithm efficiency",
      "System design for scalability and fault tolerance",
      "Production debugging and edge case handling",
      "Company cultural values and collaboration"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/Atlassian-Interview-Questions.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/atlassian/salaries/",
    "commonProblems": [
      {
        "title": "Two Sum",
        "difficulty": "Easy",
        "url": "https://leetcode.com/problems/two-sum/"
      },
      {
        "title": "LRU Cache",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/lru-cache/"
      },
      {
        "title": "Merge Intervals",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/merge-intervals/"
      }
    ],
    "insiderTips": [
      "Review Atlassian's frequency-ranked problems in your Company Sheets view before your interview.",
      "Communicate trade-offs out loud before jumping into code implementation.",
      "Prepare 2 strong STAR stories demonstrating deep technical ownership and business impact."
    ]
  },
  {
    "id": "figma",
    "name": "Figma",
    "tier": "Tier 1",
    "logo": "🎨",
    "accentColor": "#F24E1E",
    "interviewProcess": [
      {
        "stage": "Recruiter Screen",
        "description": "15-min call on goals, compensation, and background.",
        "duration": "15–20 min"
      },
      {
        "stage": "Technical Screen",
        "description": "Core data structures, problem solving, or live coding.",
        "duration": "45–60 min"
      },
      {
        "stage": "Onsite Virtual Loop (4–5 Rounds)",
        "description": "Coding algorithms, System Architecture, and Cultural alignment.",
        "duration": "4–5 × 45 min"
      }
    ],
    "technicalFocus": [
      "Data structures & algorithm efficiency",
      "System design for scalability and fault tolerance",
      "Production debugging and edge case handling",
      "Company cultural values and collaboration"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/Figma-Interview-Questions.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/figma/salaries/",
    "commonProblems": [
      {
        "title": "Two Sum",
        "difficulty": "Easy",
        "url": "https://leetcode.com/problems/two-sum/"
      },
      {
        "title": "LRU Cache",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/lru-cache/"
      },
      {
        "title": "Merge Intervals",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/merge-intervals/"
      }
    ],
    "insiderTips": [
      "Review Figma's frequency-ranked problems in your Company Sheets view before your interview.",
      "Communicate trade-offs out loud before jumping into code implementation.",
      "Prepare 2 strong STAR stories demonstrating deep technical ownership and business impact."
    ]
  },
  {
    "id": "canva",
    "name": "Canva",
    "tier": "Tier 1",
    "logo": "🖌️",
    "accentColor": "#00C4CC",
    "interviewProcess": [
      {
        "stage": "Recruiter Screen",
        "description": "15-min call on goals, compensation, and background.",
        "duration": "15–20 min"
      },
      {
        "stage": "Technical Screen",
        "description": "Core data structures, problem solving, or live coding.",
        "duration": "45–60 min"
      },
      {
        "stage": "Onsite Virtual Loop (4–5 Rounds)",
        "description": "Coding algorithms, System Architecture, and Cultural alignment.",
        "duration": "4–5 × 45 min"
      }
    ],
    "technicalFocus": [
      "Data structures & algorithm efficiency",
      "System design for scalability and fault tolerance",
      "Production debugging and edge case handling",
      "Company cultural values and collaboration"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/Canva-Interview-Questions.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/canva/salaries/",
    "commonProblems": [
      {
        "title": "Two Sum",
        "difficulty": "Easy",
        "url": "https://leetcode.com/problems/two-sum/"
      },
      {
        "title": "LRU Cache",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/lru-cache/"
      },
      {
        "title": "Merge Intervals",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/merge-intervals/"
      }
    ],
    "insiderTips": [
      "Review Canva's frequency-ranked problems in your Company Sheets view before your interview.",
      "Communicate trade-offs out loud before jumping into code implementation.",
      "Prepare 2 strong STAR stories demonstrating deep technical ownership and business impact."
    ]
  },
  {
    "id": "pinterest",
    "name": "Pinterest",
    "tier": "Tier 1",
    "logo": "📌",
    "accentColor": "#E60023",
    "interviewProcess": [
      {
        "stage": "Recruiter Screen",
        "description": "15-min call on goals, compensation, and background.",
        "duration": "15–20 min"
      },
      {
        "stage": "Technical Screen",
        "description": "Core data structures, problem solving, or live coding.",
        "duration": "45–60 min"
      },
      {
        "stage": "Onsite Virtual Loop (4–5 Rounds)",
        "description": "Coding algorithms, System Architecture, and Cultural alignment.",
        "duration": "4–5 × 45 min"
      }
    ],
    "technicalFocus": [
      "Data structures & algorithm efficiency",
      "System design for scalability and fault tolerance",
      "Production debugging and edge case handling",
      "Company cultural values and collaboration"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/Pinterest-Interview-Questions.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/pinterest/salaries/",
    "commonProblems": [
      {
        "title": "Two Sum",
        "difficulty": "Easy",
        "url": "https://leetcode.com/problems/two-sum/"
      },
      {
        "title": "LRU Cache",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/lru-cache/"
      },
      {
        "title": "Merge Intervals",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/merge-intervals/"
      }
    ],
    "insiderTips": [
      "Review Pinterest's frequency-ranked problems in your Company Sheets view before your interview.",
      "Communicate trade-offs out loud before jumping into code implementation.",
      "Prepare 2 strong STAR stories demonstrating deep technical ownership and business impact."
    ]
  },
  {
    "id": "lyft",
    "name": "Lyft",
    "tier": "Tier 1",
    "logo": "🚗",
    "accentColor": "#FF00BF",
    "interviewProcess": [
      {
        "stage": "Recruiter Screen",
        "description": "15-min call on goals, compensation, and background.",
        "duration": "15–20 min"
      },
      {
        "stage": "Technical Screen",
        "description": "Core data structures, problem solving, or live coding.",
        "duration": "45–60 min"
      },
      {
        "stage": "Onsite Virtual Loop (4–5 Rounds)",
        "description": "Coding algorithms, System Architecture, and Cultural alignment.",
        "duration": "4–5 × 45 min"
      }
    ],
    "technicalFocus": [
      "Data structures & algorithm efficiency",
      "System design for scalability and fault tolerance",
      "Production debugging and edge case handling",
      "Company cultural values and collaboration"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/Lyft-Interview-Questions.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/lyft/salaries/",
    "commonProblems": [
      {
        "title": "Two Sum",
        "difficulty": "Easy",
        "url": "https://leetcode.com/problems/two-sum/"
      },
      {
        "title": "LRU Cache",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/lru-cache/"
      },
      {
        "title": "Merge Intervals",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/merge-intervals/"
      }
    ],
    "insiderTips": [
      "Review Lyft's frequency-ranked problems in your Company Sheets view before your interview.",
      "Communicate trade-offs out loud before jumping into code implementation.",
      "Prepare 2 strong STAR stories demonstrating deep technical ownership and business impact."
    ]
  },
  {
    "id": "doordash",
    "name": "DoorDash",
    "tier": "Tier 1",
    "logo": "🥡",
    "accentColor": "#FF3008",
    "interviewProcess": [
      {
        "stage": "Recruiter Screen",
        "description": "15-min call on goals, compensation, and background.",
        "duration": "15–20 min"
      },
      {
        "stage": "Technical Screen",
        "description": "Core data structures, problem solving, or live coding.",
        "duration": "45–60 min"
      },
      {
        "stage": "Onsite Virtual Loop (4–5 Rounds)",
        "description": "Coding algorithms, System Architecture, and Cultural alignment.",
        "duration": "4–5 × 45 min"
      }
    ],
    "technicalFocus": [
      "Data structures & algorithm efficiency",
      "System design for scalability and fault tolerance",
      "Production debugging and edge case handling",
      "Company cultural values and collaboration"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/DoorDash-Interview-Questions.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/doordash/salaries/",
    "commonProblems": [
      {
        "title": "Two Sum",
        "difficulty": "Easy",
        "url": "https://leetcode.com/problems/two-sum/"
      },
      {
        "title": "LRU Cache",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/lru-cache/"
      },
      {
        "title": "Merge Intervals",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/merge-intervals/"
      }
    ],
    "insiderTips": [
      "Review DoorDash's frequency-ranked problems in your Company Sheets view before your interview.",
      "Communicate trade-offs out loud before jumping into code implementation.",
      "Prepare 2 strong STAR stories demonstrating deep technical ownership and business impact."
    ]
  },
  {
    "id": "instacart",
    "name": "Instacart",
    "tier": "Tier 1",
    "logo": "🥕",
    "accentColor": "#003D29",
    "interviewProcess": [
      {
        "stage": "Recruiter Screen",
        "description": "15-min call on goals, compensation, and background.",
        "duration": "15–20 min"
      },
      {
        "stage": "Technical Screen",
        "description": "Core data structures, problem solving, or live coding.",
        "duration": "45–60 min"
      },
      {
        "stage": "Onsite Virtual Loop (4–5 Rounds)",
        "description": "Coding algorithms, System Architecture, and Cultural alignment.",
        "duration": "4–5 × 45 min"
      }
    ],
    "technicalFocus": [
      "Data structures & algorithm efficiency",
      "System design for scalability and fault tolerance",
      "Production debugging and edge case handling",
      "Company cultural values and collaboration"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/Instacart-Interview-Questions.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/instacart/salaries/",
    "commonProblems": [
      {
        "title": "Two Sum",
        "difficulty": "Easy",
        "url": "https://leetcode.com/problems/two-sum/"
      },
      {
        "title": "LRU Cache",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/lru-cache/"
      },
      {
        "title": "Merge Intervals",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/merge-intervals/"
      }
    ],
    "insiderTips": [
      "Review Instacart's frequency-ranked problems in your Company Sheets view before your interview.",
      "Communicate trade-offs out loud before jumping into code implementation.",
      "Prepare 2 strong STAR stories demonstrating deep technical ownership and business impact."
    ]
  },
  {
    "id": "snap",
    "name": "Snap / Snapchat",
    "tier": "Tier 1",
    "logo": "👻",
    "accentColor": "#FFFC00",
    "interviewProcess": [
      {
        "stage": "Recruiter Screen",
        "description": "15-min call on goals, compensation, and background.",
        "duration": "15–20 min"
      },
      {
        "stage": "Technical Screen",
        "description": "Core data structures, problem solving, or live coding.",
        "duration": "45–60 min"
      },
      {
        "stage": "Onsite Virtual Loop (4–5 Rounds)",
        "description": "Coding algorithms, System Architecture, and Cultural alignment.",
        "duration": "4–5 × 45 min"
      }
    ],
    "technicalFocus": [
      "Data structures & algorithm efficiency",
      "System design for scalability and fault tolerance",
      "Production debugging and edge case handling",
      "Company cultural values and collaboration"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/Snap-/-Snapchat-Interview-Questions.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/snap/salaries/",
    "commonProblems": [
      {
        "title": "Two Sum",
        "difficulty": "Easy",
        "url": "https://leetcode.com/problems/two-sum/"
      },
      {
        "title": "LRU Cache",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/lru-cache/"
      },
      {
        "title": "Merge Intervals",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/merge-intervals/"
      }
    ],
    "insiderTips": [
      "Review Snap / Snapchat's frequency-ranked problems in your Company Sheets view before your interview.",
      "Communicate trade-offs out loud before jumping into code implementation.",
      "Prepare 2 strong STAR stories demonstrating deep technical ownership and business impact."
    ]
  },
  {
    "id": "bloomberg",
    "name": "Bloomberg",
    "tier": "Quant / Fintech",
    "logo": "📊",
    "accentColor": "#2800D7",
    "interviewProcess": [
      {
        "stage": "Recruiter Screen",
        "description": "15-min call on goals, compensation, and background.",
        "duration": "15–20 min"
      },
      {
        "stage": "Technical Screen",
        "description": "Core data structures, problem solving, or live coding.",
        "duration": "45–60 min"
      },
      {
        "stage": "Onsite Virtual Loop (4–5 Rounds)",
        "description": "Coding algorithms, System Architecture, and Cultural alignment.",
        "duration": "4–5 × 45 min"
      }
    ],
    "technicalFocus": [
      "Data structures & algorithm efficiency",
      "System design for scalability and fault tolerance",
      "Production debugging and edge case handling",
      "Company cultural values and collaboration"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/Bloomberg-Interview-Questions.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/bloomberg/salaries/",
    "commonProblems": [
      {
        "title": "Two Sum",
        "difficulty": "Easy",
        "url": "https://leetcode.com/problems/two-sum/"
      },
      {
        "title": "LRU Cache",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/lru-cache/"
      },
      {
        "title": "Merge Intervals",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/merge-intervals/"
      }
    ],
    "insiderTips": [
      "Review Bloomberg's frequency-ranked problems in your Company Sheets view before your interview.",
      "Communicate trade-offs out loud before jumping into code implementation.",
      "Prepare 2 strong STAR stories demonstrating deep technical ownership and business impact."
    ]
  },
  {
    "id": "goldman-sachs",
    "name": "Goldman Sachs",
    "tier": "Quant / Fintech",
    "logo": "💼",
    "accentColor": "#7399C6",
    "interviewProcess": [
      {
        "stage": "Recruiter Screen",
        "description": "15-min call on goals, compensation, and background.",
        "duration": "15–20 min"
      },
      {
        "stage": "Technical Screen",
        "description": "Core data structures, problem solving, or live coding.",
        "duration": "45–60 min"
      },
      {
        "stage": "Onsite Virtual Loop (4–5 Rounds)",
        "description": "Coding algorithms, System Architecture, and Cultural alignment.",
        "duration": "4–5 × 45 min"
      }
    ],
    "technicalFocus": [
      "Data structures & algorithm efficiency",
      "System design for scalability and fault tolerance",
      "Production debugging and edge case handling",
      "Company cultural values and collaboration"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/Goldman-Sachs-Interview-Questions.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/goldman-sachs/salaries/",
    "commonProblems": [
      {
        "title": "Two Sum",
        "difficulty": "Easy",
        "url": "https://leetcode.com/problems/two-sum/"
      },
      {
        "title": "LRU Cache",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/lru-cache/"
      },
      {
        "title": "Merge Intervals",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/merge-intervals/"
      }
    ],
    "insiderTips": [
      "Review Goldman Sachs's frequency-ranked problems in your Company Sheets view before your interview.",
      "Communicate trade-offs out loud before jumping into code implementation.",
      "Prepare 2 strong STAR stories demonstrating deep technical ownership and business impact."
    ]
  },
  {
    "id": "morgan-stanley",
    "name": "Morgan Stanley",
    "tier": "Quant / Fintech",
    "logo": "🏛️",
    "accentColor": "#002E62",
    "interviewProcess": [
      {
        "stage": "Recruiter Screen",
        "description": "15-min call on goals, compensation, and background.",
        "duration": "15–20 min"
      },
      {
        "stage": "Technical Screen",
        "description": "Core data structures, problem solving, or live coding.",
        "duration": "45–60 min"
      },
      {
        "stage": "Onsite Virtual Loop (4–5 Rounds)",
        "description": "Coding algorithms, System Architecture, and Cultural alignment.",
        "duration": "4–5 × 45 min"
      }
    ],
    "technicalFocus": [
      "Data structures & algorithm efficiency",
      "System design for scalability and fault tolerance",
      "Production debugging and edge case handling",
      "Company cultural values and collaboration"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/Morgan-Stanley-Interview-Questions.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/morgan-stanley/salaries/",
    "commonProblems": [
      {
        "title": "Two Sum",
        "difficulty": "Easy",
        "url": "https://leetcode.com/problems/two-sum/"
      },
      {
        "title": "LRU Cache",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/lru-cache/"
      },
      {
        "title": "Merge Intervals",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/merge-intervals/"
      }
    ],
    "insiderTips": [
      "Review Morgan Stanley's frequency-ranked problems in your Company Sheets view before your interview.",
      "Communicate trade-offs out loud before jumping into code implementation.",
      "Prepare 2 strong STAR stories demonstrating deep technical ownership and business impact."
    ]
  },
  {
    "id": "robinhood",
    "name": "Robinhood",
    "tier": "Quant / Fintech",
    "logo": "🏹",
    "accentColor": "#00C805",
    "interviewProcess": [
      {
        "stage": "Recruiter Screen",
        "description": "15-min call on goals, compensation, and background.",
        "duration": "15–20 min"
      },
      {
        "stage": "Technical Screen",
        "description": "Core data structures, problem solving, or live coding.",
        "duration": "45–60 min"
      },
      {
        "stage": "Onsite Virtual Loop (4–5 Rounds)",
        "description": "Coding algorithms, System Architecture, and Cultural alignment.",
        "duration": "4–5 × 45 min"
      }
    ],
    "technicalFocus": [
      "Data structures & algorithm efficiency",
      "System design for scalability and fault tolerance",
      "Production debugging and edge case handling",
      "Company cultural values and collaboration"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/Robinhood-Interview-Questions.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/robinhood/salaries/",
    "commonProblems": [
      {
        "title": "Two Sum",
        "difficulty": "Easy",
        "url": "https://leetcode.com/problems/two-sum/"
      },
      {
        "title": "LRU Cache",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/lru-cache/"
      },
      {
        "title": "Merge Intervals",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/merge-intervals/"
      }
    ],
    "insiderTips": [
      "Review Robinhood's frequency-ranked problems in your Company Sheets view before your interview.",
      "Communicate trade-offs out loud before jumping into code implementation.",
      "Prepare 2 strong STAR stories demonstrating deep technical ownership and business impact."
    ]
  },
  {
    "id": "block",
    "name": "Block (Square / Cash App)",
    "tier": "Quant / Fintech",
    "logo": "⬛",
    "accentColor": "#2E7D32",
    "interviewProcess": [
      {
        "stage": "Recruiter Screen",
        "description": "15-min call on goals, compensation, and background.",
        "duration": "15–20 min"
      },
      {
        "stage": "Technical Screen",
        "description": "Core data structures, problem solving, or live coding.",
        "duration": "45–60 min"
      },
      {
        "stage": "Onsite Virtual Loop (4–5 Rounds)",
        "description": "Coding algorithms, System Architecture, and Cultural alignment.",
        "duration": "4–5 × 45 min"
      }
    ],
    "technicalFocus": [
      "Data structures & algorithm efficiency",
      "System design for scalability and fault tolerance",
      "Production debugging and edge case handling",
      "Company cultural values and collaboration"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/Block-(Square-/-Cash-App)-Interview-Questions.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/block/salaries/",
    "commonProblems": [
      {
        "title": "Two Sum",
        "difficulty": "Easy",
        "url": "https://leetcode.com/problems/two-sum/"
      },
      {
        "title": "LRU Cache",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/lru-cache/"
      },
      {
        "title": "Merge Intervals",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/merge-intervals/"
      }
    ],
    "insiderTips": [
      "Review Block (Square / Cash App)'s frequency-ranked problems in your Company Sheets view before your interview.",
      "Communicate trade-offs out loud before jumping into code implementation.",
      "Prepare 2 strong STAR stories demonstrating deep technical ownership and business impact."
    ]
  },
  {
    "id": "hudson-river-trading",
    "name": "Hudson River Trading (HRT)",
    "tier": "Quant / Fintech",
    "logo": "📈",
    "accentColor": "#F97316",
    "interviewProcess": [
      {
        "stage": "Recruiter Screen",
        "description": "15-min call on goals, compensation, and background.",
        "duration": "15–20 min"
      },
      {
        "stage": "Technical Screen",
        "description": "Core data structures, problem solving, or live coding.",
        "duration": "45–60 min"
      },
      {
        "stage": "Onsite Virtual Loop (4–5 Rounds)",
        "description": "Coding algorithms, System Architecture, and Cultural alignment.",
        "duration": "4–5 × 45 min"
      }
    ],
    "technicalFocus": [
      "Data structures & algorithm efficiency",
      "System design for scalability and fault tolerance",
      "Production debugging and edge case handling",
      "Company cultural values and collaboration"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/Hudson-River-Trading-(HRT)-Interview-Questions.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/hudson-river-trading/salaries/",
    "commonProblems": [
      {
        "title": "Two Sum",
        "difficulty": "Easy",
        "url": "https://leetcode.com/problems/two-sum/"
      },
      {
        "title": "LRU Cache",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/lru-cache/"
      },
      {
        "title": "Merge Intervals",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/merge-intervals/"
      }
    ],
    "insiderTips": [
      "Review Hudson River Trading (HRT)'s frequency-ranked problems in your Company Sheets view before your interview.",
      "Communicate trade-offs out loud before jumping into code implementation.",
      "Prepare 2 strong STAR stories demonstrating deep technical ownership and business impact."
    ]
  },
  {
    "id": "nvidia",
    "name": "Nvidia",
    "tier": "Tier 1",
    "logo": "👁️",
    "accentColor": "#76B900",
    "interviewProcess": [
      {
        "stage": "Recruiter Screen",
        "description": "15-min call on goals, compensation, and background.",
        "duration": "15–20 min"
      },
      {
        "stage": "Technical Screen",
        "description": "Core data structures, problem solving, or live coding.",
        "duration": "45–60 min"
      },
      {
        "stage": "Onsite Virtual Loop (4–5 Rounds)",
        "description": "Coding algorithms, System Architecture, and Cultural alignment.",
        "duration": "4–5 × 45 min"
      }
    ],
    "technicalFocus": [
      "Data structures & algorithm efficiency",
      "System design for scalability and fault tolerance",
      "Production debugging and edge case handling",
      "Company cultural values and collaboration"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/Nvidia-Interview-Questions.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/nvidia/salaries/",
    "commonProblems": [
      {
        "title": "Two Sum",
        "difficulty": "Easy",
        "url": "https://leetcode.com/problems/two-sum/"
      },
      {
        "title": "LRU Cache",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/lru-cache/"
      },
      {
        "title": "Merge Intervals",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/merge-intervals/"
      }
    ],
    "insiderTips": [
      "Review Nvidia's frequency-ranked problems in your Company Sheets view before your interview.",
      "Communicate trade-offs out loud before jumping into code implementation.",
      "Prepare 2 strong STAR stories demonstrating deep technical ownership and business impact."
    ]
  },
  {
    "id": "amd",
    "name": "AMD",
    "tier": "Tier 1",
    "logo": "💻",
    "accentColor": "#ED1C24",
    "interviewProcess": [
      {
        "stage": "Recruiter Screen",
        "description": "15-min call on goals, compensation, and background.",
        "duration": "15–20 min"
      },
      {
        "stage": "Technical Screen",
        "description": "Core data structures, problem solving, or live coding.",
        "duration": "45–60 min"
      },
      {
        "stage": "Onsite Virtual Loop (4–5 Rounds)",
        "description": "Coding algorithms, System Architecture, and Cultural alignment.",
        "duration": "4–5 × 45 min"
      }
    ],
    "technicalFocus": [
      "Data structures & algorithm efficiency",
      "System design for scalability and fault tolerance",
      "Production debugging and edge case handling",
      "Company cultural values and collaboration"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/AMD-Interview-Questions.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/amd/salaries/",
    "commonProblems": [
      {
        "title": "Two Sum",
        "difficulty": "Easy",
        "url": "https://leetcode.com/problems/two-sum/"
      },
      {
        "title": "LRU Cache",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/lru-cache/"
      },
      {
        "title": "Merge Intervals",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/merge-intervals/"
      }
    ],
    "insiderTips": [
      "Review AMD's frequency-ranked problems in your Company Sheets view before your interview.",
      "Communicate trade-offs out loud before jumping into code implementation.",
      "Prepare 2 strong STAR stories demonstrating deep technical ownership and business impact."
    ]
  },
  {
    "id": "intel",
    "name": "Intel",
    "tier": "Tier 1",
    "logo": "💾",
    "accentColor": "#0071C5",
    "interviewProcess": [
      {
        "stage": "Recruiter Screen",
        "description": "15-min call on goals, compensation, and background.",
        "duration": "15–20 min"
      },
      {
        "stage": "Technical Screen",
        "description": "Core data structures, problem solving, or live coding.",
        "duration": "45–60 min"
      },
      {
        "stage": "Onsite Virtual Loop (4–5 Rounds)",
        "description": "Coding algorithms, System Architecture, and Cultural alignment.",
        "duration": "4–5 × 45 min"
      }
    ],
    "technicalFocus": [
      "Data structures & algorithm efficiency",
      "System design for scalability and fault tolerance",
      "Production debugging and edge case handling",
      "Company cultural values and collaboration"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/Intel-Interview-Questions.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/intel/salaries/",
    "commonProblems": [
      {
        "title": "Two Sum",
        "difficulty": "Easy",
        "url": "https://leetcode.com/problems/two-sum/"
      },
      {
        "title": "LRU Cache",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/lru-cache/"
      },
      {
        "title": "Merge Intervals",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/merge-intervals/"
      }
    ],
    "insiderTips": [
      "Review Intel's frequency-ranked problems in your Company Sheets view before your interview.",
      "Communicate trade-offs out loud before jumping into code implementation.",
      "Prepare 2 strong STAR stories demonstrating deep technical ownership and business impact."
    ]
  },
  {
    "id": "qualcomm",
    "name": "Qualcomm",
    "tier": "Tier 1",
    "logo": "📡",
    "accentColor": "#3253DC",
    "interviewProcess": [
      {
        "stage": "Recruiter Screen",
        "description": "15-min call on goals, compensation, and background.",
        "duration": "15–20 min"
      },
      {
        "stage": "Technical Screen",
        "description": "Core data structures, problem solving, or live coding.",
        "duration": "45–60 min"
      },
      {
        "stage": "Onsite Virtual Loop (4–5 Rounds)",
        "description": "Coding algorithms, System Architecture, and Cultural alignment.",
        "duration": "4–5 × 45 min"
      }
    ],
    "technicalFocus": [
      "Data structures & algorithm efficiency",
      "System design for scalability and fault tolerance",
      "Production debugging and edge case handling",
      "Company cultural values and collaboration"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/Qualcomm-Interview-Questions.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/qualcomm/salaries/",
    "commonProblems": [
      {
        "title": "Two Sum",
        "difficulty": "Easy",
        "url": "https://leetcode.com/problems/two-sum/"
      },
      {
        "title": "LRU Cache",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/lru-cache/"
      },
      {
        "title": "Merge Intervals",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/merge-intervals/"
      }
    ],
    "insiderTips": [
      "Review Qualcomm's frequency-ranked problems in your Company Sheets view before your interview.",
      "Communicate trade-offs out loud before jumping into code implementation.",
      "Prepare 2 strong STAR stories demonstrating deep technical ownership and business impact."
    ]
  },
  {
    "id": "cisco",
    "name": "Cisco Systems",
    "tier": "Tier 1",
    "logo": "🌐",
    "accentColor": "#049FD9",
    "interviewProcess": [
      {
        "stage": "Recruiter Screen",
        "description": "15-min call on goals, compensation, and background.",
        "duration": "15–20 min"
      },
      {
        "stage": "Technical Screen",
        "description": "Core data structures, problem solving, or live coding.",
        "duration": "45–60 min"
      },
      {
        "stage": "Onsite Virtual Loop (4–5 Rounds)",
        "description": "Coding algorithms, System Architecture, and Cultural alignment.",
        "duration": "4–5 × 45 min"
      }
    ],
    "technicalFocus": [
      "Data structures & algorithm efficiency",
      "System design for scalability and fault tolerance",
      "Production debugging and edge case handling",
      "Company cultural values and collaboration"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/Cisco-Systems-Interview-Questions.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/cisco/salaries/",
    "commonProblems": [
      {
        "title": "Two Sum",
        "difficulty": "Easy",
        "url": "https://leetcode.com/problems/two-sum/"
      },
      {
        "title": "LRU Cache",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/lru-cache/"
      },
      {
        "title": "Merge Intervals",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/merge-intervals/"
      }
    ],
    "insiderTips": [
      "Review Cisco Systems's frequency-ranked problems in your Company Sheets view before your interview.",
      "Communicate trade-offs out loud before jumping into code implementation.",
      "Prepare 2 strong STAR stories demonstrating deep technical ownership and business impact."
    ]
  },
  {
    "id": "ibm",
    "name": "IBM",
    "tier": "Tier 1",
    "logo": "🏢",
    "accentColor": "#052FAD",
    "interviewProcess": [
      {
        "stage": "Recruiter Screen",
        "description": "15-min call on goals, compensation, and background.",
        "duration": "15–20 min"
      },
      {
        "stage": "Technical Screen",
        "description": "Core data structures, problem solving, or live coding.",
        "duration": "45–60 min"
      },
      {
        "stage": "Onsite Virtual Loop (4–5 Rounds)",
        "description": "Coding algorithms, System Architecture, and Cultural alignment.",
        "duration": "4–5 × 45 min"
      }
    ],
    "technicalFocus": [
      "Data structures & algorithm efficiency",
      "System design for scalability and fault tolerance",
      "Production debugging and edge case handling",
      "Company cultural values and collaboration"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/IBM-Interview-Questions.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/ibm/salaries/",
    "commonProblems": [
      {
        "title": "Two Sum",
        "difficulty": "Easy",
        "url": "https://leetcode.com/problems/two-sum/"
      },
      {
        "title": "LRU Cache",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/lru-cache/"
      },
      {
        "title": "Merge Intervals",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/merge-intervals/"
      }
    ],
    "insiderTips": [
      "Review IBM's frequency-ranked problems in your Company Sheets view before your interview.",
      "Communicate trade-offs out loud before jumping into code implementation.",
      "Prepare 2 strong STAR stories demonstrating deep technical ownership and business impact."
    ]
  },
  {
    "id": "vmware",
    "name": "VMware",
    "tier": "Tier 1",
    "logo": "⚙️",
    "accentColor": "#717074",
    "interviewProcess": [
      {
        "stage": "Recruiter Screen",
        "description": "15-min call on goals, compensation, and background.",
        "duration": "15–20 min"
      },
      {
        "stage": "Technical Screen",
        "description": "Core data structures, problem solving, or live coding.",
        "duration": "45–60 min"
      },
      {
        "stage": "Onsite Virtual Loop (4–5 Rounds)",
        "description": "Coding algorithms, System Architecture, and Cultural alignment.",
        "duration": "4–5 × 45 min"
      }
    ],
    "technicalFocus": [
      "Data structures & algorithm efficiency",
      "System design for scalability and fault tolerance",
      "Production debugging and edge case handling",
      "Company cultural values and collaboration"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/VMware-Interview-Questions.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/vmware/salaries/",
    "commonProblems": [
      {
        "title": "Two Sum",
        "difficulty": "Easy",
        "url": "https://leetcode.com/problems/two-sum/"
      },
      {
        "title": "LRU Cache",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/lru-cache/"
      },
      {
        "title": "Merge Intervals",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/merge-intervals/"
      }
    ],
    "insiderTips": [
      "Review VMware's frequency-ranked problems in your Company Sheets view before your interview.",
      "Communicate trade-offs out loud before jumping into code implementation.",
      "Prepare 2 strong STAR stories demonstrating deep technical ownership and business impact."
    ]
  },
  {
    "id": "intuit",
    "name": "Intuit",
    "tier": "Tier 1",
    "logo": "🧾",
    "accentColor": "#0077C5",
    "interviewProcess": [
      {
        "stage": "Recruiter Screen",
        "description": "15-min call on goals, compensation, and background.",
        "duration": "15–20 min"
      },
      {
        "stage": "Technical Screen",
        "description": "Core data structures, problem solving, or live coding.",
        "duration": "45–60 min"
      },
      {
        "stage": "Onsite Virtual Loop (4–5 Rounds)",
        "description": "Coding algorithms, System Architecture, and Cultural alignment.",
        "duration": "4–5 × 45 min"
      }
    ],
    "technicalFocus": [
      "Data structures & algorithm efficiency",
      "System design for scalability and fault tolerance",
      "Production debugging and edge case handling",
      "Company cultural values and collaboration"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/Intuit-Interview-Questions.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/intuit/salaries/",
    "commonProblems": [
      {
        "title": "Two Sum",
        "difficulty": "Easy",
        "url": "https://leetcode.com/problems/two-sum/"
      },
      {
        "title": "LRU Cache",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/lru-cache/"
      },
      {
        "title": "Merge Intervals",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/merge-intervals/"
      }
    ],
    "insiderTips": [
      "Review Intuit's frequency-ranked problems in your Company Sheets view before your interview.",
      "Communicate trade-offs out loud before jumping into code implementation.",
      "Prepare 2 strong STAR stories demonstrating deep technical ownership and business impact."
    ]
  },
  {
    "id": "roblox",
    "name": "Roblox",
    "tier": "Tier 1",
    "logo": "🎮",
    "accentColor": "#E1242A",
    "interviewProcess": [
      {
        "stage": "Recruiter Screen",
        "description": "15-min call on goals, compensation, and background.",
        "duration": "15–20 min"
      },
      {
        "stage": "Technical Screen",
        "description": "Core data structures, problem solving, or live coding.",
        "duration": "45–60 min"
      },
      {
        "stage": "Onsite Virtual Loop (4–5 Rounds)",
        "description": "Coding algorithms, System Architecture, and Cultural alignment.",
        "duration": "4–5 × 45 min"
      }
    ],
    "technicalFocus": [
      "Data structures & algorithm efficiency",
      "System design for scalability and fault tolerance",
      "Production debugging and edge case handling",
      "Company cultural values and collaboration"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/Roblox-Interview-Questions.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/roblox/salaries/",
    "commonProblems": [
      {
        "title": "Two Sum",
        "difficulty": "Easy",
        "url": "https://leetcode.com/problems/two-sum/"
      },
      {
        "title": "LRU Cache",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/lru-cache/"
      },
      {
        "title": "Merge Intervals",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/merge-intervals/"
      }
    ],
    "insiderTips": [
      "Review Roblox's frequency-ranked problems in your Company Sheets view before your interview.",
      "Communicate trade-offs out loud before jumping into code implementation.",
      "Prepare 2 strong STAR stories demonstrating deep technical ownership and business impact."
    ]
  },
  {
    "id": "reddit",
    "name": "Reddit",
    "tier": "Tier 1",
    "logo": "🤖",
    "accentColor": "#FF4500",
    "interviewProcess": [
      {
        "stage": "Recruiter Screen",
        "description": "15-min call on goals, compensation, and background.",
        "duration": "15–20 min"
      },
      {
        "stage": "Technical Screen",
        "description": "Core data structures, problem solving, or live coding.",
        "duration": "45–60 min"
      },
      {
        "stage": "Onsite Virtual Loop (4–5 Rounds)",
        "description": "Coding algorithms, System Architecture, and Cultural alignment.",
        "duration": "4–5 × 45 min"
      }
    ],
    "technicalFocus": [
      "Data structures & algorithm efficiency",
      "System design for scalability and fault tolerance",
      "Production debugging and edge case handling",
      "Company cultural values and collaboration"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/Reddit-Interview-Questions.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/reddit/salaries/",
    "commonProblems": [
      {
        "title": "Two Sum",
        "difficulty": "Easy",
        "url": "https://leetcode.com/problems/two-sum/"
      },
      {
        "title": "LRU Cache",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/lru-cache/"
      },
      {
        "title": "Merge Intervals",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/merge-intervals/"
      }
    ],
    "insiderTips": [
      "Review Reddit's frequency-ranked problems in your Company Sheets view before your interview.",
      "Communicate trade-offs out loud before jumping into code implementation.",
      "Prepare 2 strong STAR stories demonstrating deep technical ownership and business impact."
    ]
  },
  {
    "id": "notion",
    "name": "Notion",
    "tier": "Tier 1",
    "logo": "📝",
    "accentColor": "#000000",
    "interviewProcess": [
      {
        "stage": "Recruiter Screen",
        "description": "15-min call on goals, compensation, and background.",
        "duration": "15–20 min"
      },
      {
        "stage": "Technical Screen",
        "description": "Core data structures, problem solving, or live coding.",
        "duration": "45–60 min"
      },
      {
        "stage": "Onsite Virtual Loop (4–5 Rounds)",
        "description": "Coding algorithms, System Architecture, and Cultural alignment.",
        "duration": "4–5 × 45 min"
      }
    ],
    "technicalFocus": [
      "Data structures & algorithm efficiency",
      "System design for scalability and fault tolerance",
      "Production debugging and edge case handling",
      "Company cultural values and collaboration"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/Notion-Interview-Questions.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/notion/salaries/",
    "commonProblems": [
      {
        "title": "Two Sum",
        "difficulty": "Easy",
        "url": "https://leetcode.com/problems/two-sum/"
      },
      {
        "title": "LRU Cache",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/lru-cache/"
      },
      {
        "title": "Merge Intervals",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/merge-intervals/"
      }
    ],
    "insiderTips": [
      "Review Notion's frequency-ranked problems in your Company Sheets view before your interview.",
      "Communicate trade-offs out loud before jumping into code implementation.",
      "Prepare 2 strong STAR stories demonstrating deep technical ownership and business impact."
    ]
  },
  {
    "id": "github",
    "name": "GitHub",
    "tier": "Tier 1",
    "logo": "🐙",
    "accentColor": "#24292E",
    "interviewProcess": [
      {
        "stage": "Recruiter Screen",
        "description": "15-min call on goals, compensation, and background.",
        "duration": "15–20 min"
      },
      {
        "stage": "Technical Screen",
        "description": "Core data structures, problem solving, or live coding.",
        "duration": "45–60 min"
      },
      {
        "stage": "Onsite Virtual Loop (4–5 Rounds)",
        "description": "Coding algorithms, System Architecture, and Cultural alignment.",
        "duration": "4–5 × 45 min"
      }
    ],
    "technicalFocus": [
      "Data structures & algorithm efficiency",
      "System design for scalability and fault tolerance",
      "Production debugging and edge case handling",
      "Company cultural values and collaboration"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/GitHub-Interview-Questions.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/github/salaries/",
    "commonProblems": [
      {
        "title": "Two Sum",
        "difficulty": "Easy",
        "url": "https://leetcode.com/problems/two-sum/"
      },
      {
        "title": "LRU Cache",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/lru-cache/"
      },
      {
        "title": "Merge Intervals",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/merge-intervals/"
      }
    ],
    "insiderTips": [
      "Review GitHub's frequency-ranked problems in your Company Sheets view before your interview.",
      "Communicate trade-offs out loud before jumping into code implementation.",
      "Prepare 2 strong STAR stories demonstrating deep technical ownership and business impact."
    ]
  },
  {
    "id": "scale-ai",
    "name": "Scale AI",
    "tier": "AI Frontier",
    "logo": "⚖️",
    "accentColor": "#6366F1",
    "interviewProcess": [
      {
        "stage": "Recruiter Screen",
        "description": "15-min call on goals, compensation, and background.",
        "duration": "15–20 min"
      },
      {
        "stage": "Technical Screen",
        "description": "Core data structures, problem solving, or live coding.",
        "duration": "45–60 min"
      },
      {
        "stage": "Onsite Virtual Loop (4–5 Rounds)",
        "description": "Coding algorithms, System Architecture, and Cultural alignment.",
        "duration": "4–5 × 45 min"
      }
    ],
    "technicalFocus": [
      "Data structures & algorithm efficiency",
      "System design for scalability and fault tolerance",
      "Production debugging and edge case handling",
      "Company cultural values and collaboration"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/Scale-AI-Interview-Questions.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/scale-ai/salaries/",
    "commonProblems": [
      {
        "title": "Two Sum",
        "difficulty": "Easy",
        "url": "https://leetcode.com/problems/two-sum/"
      },
      {
        "title": "LRU Cache",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/lru-cache/"
      },
      {
        "title": "Merge Intervals",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/merge-intervals/"
      }
    ],
    "insiderTips": [
      "Review Scale AI's frequency-ranked problems in your Company Sheets view before your interview.",
      "Communicate trade-offs out loud before jumping into code implementation.",
      "Prepare 2 strong STAR stories demonstrating deep technical ownership and business impact."
    ]
  },
  {
    "id": "huggingface",
    "name": "Hugging Face",
    "tier": "AI Frontier",
    "logo": "🤗",
    "accentColor": "#FFD21E",
    "interviewProcess": [
      {
        "stage": "Recruiter Screen",
        "description": "15-min call on goals, compensation, and background.",
        "duration": "15–20 min"
      },
      {
        "stage": "Technical Screen",
        "description": "Core data structures, problem solving, or live coding.",
        "duration": "45–60 min"
      },
      {
        "stage": "Onsite Virtual Loop (4–5 Rounds)",
        "description": "Coding algorithms, System Architecture, and Cultural alignment.",
        "duration": "4–5 × 45 min"
      }
    ],
    "technicalFocus": [
      "Data structures & algorithm efficiency",
      "System design for scalability and fault tolerance",
      "Production debugging and edge case handling",
      "Company cultural values and collaboration"
    ],
    "glassdoorUrl": "https://www.glassdoor.com/Interview/Hugging-Face-Interview-Questions.htm",
    "levelsFyiUrl": "https://www.levels.fyi/companies/huggingface/salaries/",
    "commonProblems": [
      {
        "title": "Two Sum",
        "difficulty": "Easy",
        "url": "https://leetcode.com/problems/two-sum/"
      },
      {
        "title": "LRU Cache",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/lru-cache/"
      },
      {
        "title": "Merge Intervals",
        "difficulty": "Medium",
        "url": "https://leetcode.com/problems/merge-intervals/"
      }
    ],
    "insiderTips": [
      "Review Hugging Face's frequency-ranked problems in your Company Sheets view before your interview.",
      "Communicate trade-offs out loud before jumping into code implementation.",
      "Prepare 2 strong STAR stories demonstrating deep technical ownership and business impact."
    ]
  }
];

import { RoadmapWeek } from '../types';

export const initialRoadmap: RoadmapWeek[] = [
  {
    weekNumber: 1,
    title: 'Weeks 1-2: Core DSA & Problem Patterns',
    focus: 'Arrays, Strings, Hashing, Two Pointers & Sliding Window',
    topics: [
      'Two Pointers (Left-Right convergence, Fast-Slow pointers)',
      'Sliding Window (Fixed size, Dynamic length with hash table)',
      'Prefix Sums & Frequency Maps',
      'String parsing & In-place manipulation'
    ],
    resources: [
      { name: 'NeetCode Blind 75 (Arrays & Two Pointers)', url: 'https://neetcode.io', type: 'site' },
      { name: 'Coding Interview University (Data Structures)', url: 'https://github.com/jwasham/coding-interview-university', type: 'repo' }
    ],
    milestones: [
      { id: 'm1-1', text: 'Solve Two Sum, Valid Anagram & Group Anagrams', completed: true },
      { id: 'm1-2', text: 'Solve Best Time to Buy and Sell Stock & Longest Substring Without Repeating Characters', completed: true },
      { id: 'm1-3', text: 'Solve Trapping Rain Water & Container With Most Water', completed: false },
      { id: 'm1-4', text: 'Review time and space complexity fundamentals (Master Theorem, Big-O)', completed: true }
    ]
  },
  {
    weekNumber: 3,
    title: 'Weeks 3-4: Non-Linear Structures & Dynamic Programming',
    focus: 'Trees, Graphs, Recursion, Heaps, Backtracking & DP',
    topics: [
      'Binary Trees (DFS preorder/inorder/postorder, BFS level-order traversal)',
      'Binary Search Trees (Validation, Lowest Common Ancestor)',
      'Graphs (BFS/DFS, Topological Sort, Dijkstra, Union-Find)',
      'Dynamic Programming (1D Fibonacci patterns, 0/1 Knapsack, Longest Common Subsequence)'
    ],
    resources: [
      { name: "TakeUForward Striver's SDE Sheet", url: 'https://takeuforward.org', type: 'site' },
      { name: 'LeetCode Top Interview 150', url: 'https://leetcode.com', type: 'site' }
    ],
    milestones: [
      { id: 'm2-1', text: 'Implement Tree Traversals (Invert Tree, Max Depth, Level Order)', completed: false },
      { id: 'm2-2', text: 'Solve Course Schedule (Graph Cycle Detection / Topo Sort)', completed: false },
      { id: 'm2-3', text: 'Solve Coin Change & Longest Increasing Subsequence (1D DP)', completed: false },
      { id: 'm2-4', text: 'Implement LRU Cache using Doubly Linked List + Hash Map', completed: false }
    ]
  },
  {
    weekNumber: 5,
    title: 'Week 5: System Design & Scalability Architecture',
    focus: 'HLD Fundamentals, Load Balancers, Caching, Databases & CAP Theorem',
    topics: [
      'Horizontal vs Vertical Scaling, Load Balancing (Round Robin, Consistent Hashing)',
      'Caching Strategies (Write-Through, Write-Back, Cache-Aside, Redis, Eviction Policies)',
      'Database Sharding, Replication (Leader-Follower), SQL vs NoSQL trade-offs',
      'Message Queues (Kafka, RabbitMQ) and Asynchronous decoupling'
    ],
    resources: [
      { name: 'System Design Primer', url: 'https://github.com/donnemartin/system-design-primer', type: 'repo' },
      { name: 'ByteByteGo Architecture Visuals', url: 'https://bytebytego.com', type: 'site' },
      { name: 'Hello Interview Guides', url: 'https://www.hellointerview.com', type: 'site' }
    ],
    milestones: [
      { id: 'm3-1', text: 'Memorize Latency Numbers Every Programmer Should Know (RAM vs SSD vs WAN)', completed: false },
      { id: 'm3-2', text: 'Practice 4-Step System Design Interview Framework on URL Shortener', completed: false },
      { id: 'm3-3', text: 'Design a Distributed Rate Limiter (Token Bucket vs Leaky Bucket)', completed: false },
      { id: 'm3-4', text: 'Design a Video Streaming Architecture (YouTube / Netflix CDN)', completed: false }
    ]
  },
  {
    weekNumber: 6,
    title: 'Week 6: Domain Specifics & CS Fundamentals',
    focus: 'OS, Concurrency, DBMS, Computer Networks & LLD Design Patterns',
    topics: [
      'Operating Systems (Processes, Threads, Virtual Memory, Deadlocks)',
      'Computer Networks (TCP/IP 3-Way Handshake, UDP, HTTP/2, WebSockets, TLS)',
      'Database Internals (ACID transactions, Isolation Levels, B-Trees vs LSM Trees)',
      'Design Patterns (Singleton, Factory, Observer, Strategy) for Low Level Design'
    ],
    resources: [
      { name: 'Awesome Interview Questions', url: 'https://github.com/DopplerHQ/awesome-interview-questions', type: 'repo' },
      { name: 'Refactoring Guru Design Patterns', url: 'https://refactoring.guru', type: 'site' },
      { name: 'Front-End Interview Handbook', url: 'https://github.com/yangshun/front-end-interview-handbook', type: 'repo' }
    ],
    milestones: [
      { id: 'm4-1', text: 'Review Process vs Thread concurrency and race conditions', completed: false },
      { id: 'm4-2', text: 'Understand indexing tradeoffs and EXPLAIN query analysis in SQL', completed: false },
      { id: 'm4-3', text: 'Design Parking Lot or Elevator System in OOP / LLD', completed: false },
      { id: 'm4-4', text: 'Review Web Performance: Critical Rendering Path & Core Web Vitals', completed: false }
    ]
  },
  {
    weekNumber: 7,
    title: 'Week 7: Behavioral Mastery & Company Tailoring',
    focus: 'STAR Stories, Leadership Principles & Salary Negotiation',
    topics: [
      'Amazon 16 Leadership Principles & Google "Googleyness"',
      'Structuring STAR stories with quantifiable impact and personal agency',
      'Reverse Interviewing: 5 insightful questions to ask interviewers',
      'Compensation benchmarking on Levels.fyi and counter-offer strategy'
    ],
    resources: [
      { name: 'Tech Interview Handbook (Behavioral)', url: 'https://www.techinterviewhandbook.org', type: 'site' },
      { name: 'Levels.fyi Negotiation Guide', url: 'https://www.levels.fyi', type: 'site' },
      { name: 'Blind Company Culture Threads', url: 'https://www.teamblind.com', type: 'site' }
    ],
    milestones: [
      { id: 'm5-1', text: 'Draft 5 reusable STAR stories (Conflict, Failure, Leadership, Ambiguity, Impact)', completed: false },
      { id: 'm5-2', text: 'Record yourself answering "Tell me about yourself" in under 2 minutes', completed: false },
      { id: 'm5-3', text: 'Research recent interview questions on Glassdoor for target company', completed: false }
    ]
  },
  {
    weekNumber: 8,
    title: 'Week 8: Full-Throttle Mock Simulation & Refinement',
    focus: 'Live Voice Mocks, Timed Coding & Final Polishing',
    topics: [
      'Full 45-minute timed mock interview sessions (2-3 per week)',
      'Thinking out loud while writing clean, modular code with edge cases',
      'Post-mock feedback analysis and gap remediation'
    ],
    resources: [
      { name: 'InterviewMaster OS AI Mock Simulator', url: '#mock', type: 'site' },
      { name: 'Interviewing.io', url: 'https://interviewing.io', type: 'site' },
      { name: 'Pramp Peer Mocks', url: 'https://www.pramp.com', type: 'site' }
    ],
    milestones: [
      { id: 'm6-1', text: 'Complete at least 3 AI Voice Mock rounds in this app', completed: false },
      { id: 'm6-2', text: 'Conduct 2 peer mocks with a stranger on Pramp or Discord', completed: false },
      { id: 'm6-3', text: 'Review SRS Spaced Repetition queue for all "learning" DSA cards', completed: false },
      { id: 'm6-4', text: 'Final checklist: Resume PDF ready, audio/video equipment tested', completed: false }
    ]
  }
];

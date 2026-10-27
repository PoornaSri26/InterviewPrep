import { Flashcard } from '../types';

export const initialFlashcards: Flashcard[] = [
  // -------- Big-O --------
  {
    id: 'bf-big-o-1', topic: 'Complexity', deck: 'Big-O',
    front: 'Time complexity of binary search on a sorted array of N elements?',
    back: 'O(log N) — the search space halves every step.',
    mnemonic: 'Halve it, quit it',
    example: '1M elements → ~20 comparisons',
    status: 'new', intervalDays: 1, easeFactor: 2.5, repetitionCount: 0
  },
  {
    id: 'bf-big-o-2', topic: 'Complexity', deck: 'Big-O',
    front: 'Amortized complexity of pushing N elements with dynamic array resizing?',
    back: 'O(1) amortized per push; O(N) total for N pushes (geometric growth).',
    mnemonic: 'Amortize = spread the resize tax',
    example: 'Pushing 1M items is ~2N total copies.',
    status: 'new', intervalDays: 1, easeFactor: 2.5, repetitionCount: 0
  },
  {
    id: 'bf-big-o-3', topic: 'Complexity', deck: 'Big-O',
    front: 'Worst case of quicksort and when does it happen?',
    back: 'O(N²) — pivot always lands at one extreme (sorted input with naive pivot).',
    mnemonic: 'Sorted input, anymore pain',
    example: 'Fixing it: randomize pivot or median-of-three.',
    status: 'new', intervalDays: 1, easeFactor: 2.5, repetitionCount: 0
  },

  // -------- Data Structures --------
  {
    id: 'bf-ds-1', topic: 'Heaps', deck: 'Data Structures',
    front: 'How would you design a data structure to support insert + find-median in O(log N) time?',
    back: 'Two heaps: max-heap for the lower half, min-heap for the upper half; balance sizes differing by 1.',
    mnemonic: 'Two heaps, one median',
    example: 'Running Median problem (LeetCode 295).',
    status: 'new', intervalDays: 1, easeFactor: 2.5, repetitionCount: 0
  },
  {
    id: 'bf-ds-2', topic: 'HashMap', deck: 'Data Structures',
    front: 'When would a hash map degrade to O(N) lookups and what fixes it?',
    back: 'All keys hash to the same bucket (bad hash / adversarial input). Fix: treeify buckets (Java 8+ → O(log N)) or a better/spread hash.',
    mnemonic: 'Clump in a bucket → chop it up',
    example: 'String hashDoS attacks on Java HashMaps.',
    status: 'new', intervalDays: 1, easeFactor: 2.5, repetitionCount: 0
  },
  {
    id: 'bf-ds-3', topic: 'Trees', deck: 'Data Structures',
    front: 'Property checking: how to validate a Binary Search Tree in O(N)?',
    back: 'DFS carrying (min, max) bounds — each node must lie within them. Or in-order traversal must be strictly ascending.',
    mnemonic: 'Border patrol down the tree',
    example: 'A node with value 9 under bound [10, ∞) is invalid.',
    status: 'new', intervalDays: 1, easeFactor: 2.5, repetitionCount: 0
  },

  // -------- Algorithms --------
  {
    id: 'bf-algo-1', topic: 'Sliding Window', deck: 'Algorithms',
    front: 'Sliding Window — when do you expand vs shrink?',
    back: 'Expand the right edge to include new elements; shrink the left edge only once a constraint (window validity) is violated.',
    mnemonic: 'Grow till guilty, shrink till clean',
    example: 'Longest substring without repeats / min window substring.',
    status: 'new', intervalDays: 1, easeFactor: 2.5, repetitionCount: 0
  },
  {
    id: 'bf-algo-2', topic: 'DP', deck: 'Algorithms',
    front: 'What is the framework for solving a DP problem?',
    back: '1. Define the state. 2. Define the recurrence (choices). 3. Base cases. 4. Iteration order (or memo DFS).',
    mnemonic: 'State, Choice, Base, Order',
    example: 'House Robber: state = (houseIndex), recurrence = max(dp[i-1], dp[i-2] + money).',
    status: 'new', intervalDays: 1, easeFactor: 2.5, repetitionCount: 0
  },
  {
    id: 'bf-algo-3', topic: 'Graphs', deck: 'Algorithms',
    front: 'BFS vs DFS — which to pick and why?',
    back: 'BFS for shortest unweighted path or level-order; DFS for connected components, cycle detection, topological排序.',
    mnemonic: 'Breadth first, depth for structure',
    example: 'Word Ladder uses BFS; course schedule uses DFS colors or Kahn’s topological BFS.',
    status: 'new', intervalDays: 1, easeFactor: 2.5, repetitionCount: 0
  },
  {
    id: 'bf-algo-4', topic: 'Sorting', deck: 'Algorithms',
    front: 'Stability in sorting: which popular sorts are stable?',
    back: 'Merge sort, insertion sort, radix sort are stable; quicksort, heapsort, selection sort are NOT by default.',
    mnemonic: 'Merge keeps a stable house',
    example: 'Sorting rows by two keys: sort the secondary key first, then stable-sort the primary.',
    status: 'new', intervalDays: 1, easeFactor: 2.5, repetitionCount: 0
  },

  // -------- System Design --------
  {
    id: 'bf-sd-1', topic: 'Caching', deck: 'System Design',
    front: 'Cache-Aside vs Write-Through — tradeoffs?',
    back: 'Cache-aside: lazy load, misses on cold, stale risk from TTL. Write-through: written to cache+DB at once, strong consistency, more write latency.',
    mnemonic: 'Read lazy vs write eager',
    example: 'Redis cache-aside is the most common HTTP read path for DBs.',
    status: 'new', intervalDays: 1, easeFactor: 2.5, repetitionCount: 0
  },
  {
    id: 'bf-sd-2', topic: 'Load Balancing', deck: 'System Design',
    front: 'L4 vs L7 load balancing — what’s the difference?',
    back: 'L4 routes by IP/port (fast, no payload insight). L7 inspects HTTP headers/cookies (routing by path, sticky sessions, content).',
    mnemonic: 'Packets vs payload',
    example: 'AWS NLB is L4; ALB is L7.',
    status: 'new', intervalDays: 1, easeFactor: 2.5, repetitionCount: 0
  },
  {
    id: 'bf-sd-3', topic: 'Sharding', deck: 'System Design',
    front: 'Hot shard problem — how do you fix a celebrity-write hotspot?',
    back: 'Split the hot shard further, add read replicas, cache hot entities, or use a secondary key/geo composite shard key.',
    mnemonic: 'Fame splits, cache copies',
    example: 'A celebrity tweet row inside one shard gets burst-read 10k times/s.',
    status: 'new', intervalDays: 1, easeFactor: 2.5, repetitionCount: 0
  },
  {
    id: 'bf-sd-4', topic: 'CAP', deck: 'System Design',
    front: 'CAP theorem in 10 seconds + the standard “AP vs CP” examples?',
    back: 'Under a network partition, choose availability (AP) or consistency (CP). AP: Cassandra, Dynamo. CP: ZooKeeper, Spanner, etcd.',
    mnemonic: 'Partitioned? Pick loyalty (AP) or truth (CP)',
    example: 'Financial ledger → CP; social feed likes → AP.',
    status: 'new', intervalDays: 1, easeFactor: 2.5, repetitionCount: 0
  },

  // -------- SQL --------
  {
    id: 'bf-sql-1', topic: 'Joins', deck: 'SQL',
    front: 'What does a LEFT JOIN keep vs INNER JOIN?',
    back: 'INNER: only matched pairs. LEFT: all rows from the left + NULLs for unmatched right.',
    mnemonic: 'LEFT protects its own',
    example: 'SELECT * FROM users u LEFT JOIN orders o ON u.id = o.user_id — keeps users with zero orders.',
    status: 'new', intervalDays: 1, easeFactor: 2.5, repetitionCount: 0
  },
  {
    id: 'bf-sql-2', topic: 'Indexing', deck: 'SQL',
    front: 'Why does putting a function on the indexed column kill index usage?',
    back: 'A B-Tree stores raw values; YEAR(created_at) or LOWER(name) can\'t seek into it unless an expression index exists.',
    mnemonic: 'Function wraps, index drops',
    example: 'WHERE YEAR(created_at)=2024 → full scan. Rewrite with a range: WHERE created_at ≥ \'2024-01-01\'.',
    status: 'new', intervalDays: 1, easeFactor: 2.5, repetitionCount: 0
  },
  {
    id: 'bf-sql-3', topic: 'Windows', deck: 'SQL',
    front: 'ROW_NUMBER vs RANK vs DENSE_RANK (when ties exist)?',
    back: 'ROW_NUMBER: strictly 1,2,3,4 (tie broken arbitrarily). RANK: ties share a rank, gaps after (1,1,3). DENSE_RANK: ties share, no gaps (1,1,2).',
    mnemonic: 'Row is strict, Rank gaps, Dense no gaps',
    example: 'Top-3 leaderboard with ties usually wants DENSE_RANK or RANK, not ROW_NUMBER.',
    status: 'new', intervalDays: 1, easeFactor: 2.5, repetitionCount: 0
  },

  // -------- OS & Networks --------
  {
    id: 'bf-os-1', topic: 'Processes', deck: 'OS & Networks',
    front: 'Process vs Thread — memory isolation and context-switching cost?',
    back: 'Processes have separate address spaces (heavy switch, safe crash isolation); threads share heap within a process (cheap switch, needs sync).',
    mnemonic: 'Heavy wall vs shared room',
    example: 'Chrome uses separate processes per tab for isolation.',
    status: 'new', intervalDays: 1, easeFactor: 2.5, repetitionCount: 0
  },
  {
    id: 'bf-os-2', topic: 'TCP', deck: 'OS & Networks',
    front: 'Why is TCP called reliable when UDP isn\'t?',
    back: 'TCP does SYN/ACK handshake, sequence numbers, retransmission, ordering, and flow control. UDP is just fire-and-forget datagrams.',
    mnemonic: 'TCP confirms, UDP guesses',
    example: 'WebRTC video uses RTP/UDP — late frames are worthless, so retransmitting hurts.',
    status: 'new', intervalDays: 1, easeFactor: 2.5, repetitionCount: 0
  },
  {
    id: 'bf-os-3', topic: 'HTTPS', deck: 'OS & Networks',
    front: 'What exactly does TLS 1.3 protect against that plain HTTP doesn\'t?',
    back: 'MITM reading/tampering (encryption), impersonation (server cert chain to a CA), and hidden re-writes (integrity MAC).',
    mnemonic: 'Cipher + certificate + checksum',
    example: 'Wi-Fi hotspot snooping on laptop traffic is blocked by TLS.',
    status: 'new', intervalDays: 1, easeFactor: 2.5, repetitionCount: 0
  },

  // -------- JavaScript --------
  {
    id: 'bf-js-1', topic: 'Event Loop', deck: 'JavaScript',
    front: 'Promise.then vs setTimeout — which runs first?',
    back: 'Promise callbacks land in the microtask queue and drain before the next macrotask; setTimeout lands in the macrotask queue via the event loop.',
    mnemonic: 'Microtasks sip, macrotasks feast',
    example: 'output order: sync → promise.then → setTimeout.',
    status: 'new', intervalDays: 1, easeFactor: 2.5, repetitionCount: 0
  },
  {
    id: 'bf-js-2', topic: 'Closures', deck: 'JavaScript',
    front: 'Why does `for (var i = 0; i < 3; i++) setTimeout(...)` log 3,3,3 and how is it fixed?',
    back: '`var` is function-scoped (one shared binding). Use `let` (new binding per iteration) or an IIFE to capture a snapshot.',
    mnemonic: 'var shares, let copies counter',
    example: 'for (let i = 0; i < 3; i++) setTimeout(() => console.log(i), 0); // 0,1,2',
    status: 'new', intervalDays: 1, easeFactor: 2.5, repetitionCount: 0
  },
  {
    id: 'bf-js-3', topic: 'Equality', deck: 'JavaScript',
    front: 'Why do `[] == ![]` and `[null] == null` trip up interviews?',
    back: 'Loose `==` coerces (ToNumber(ToPrimitive). [] → "" → 0, ![] → false → 0). Use strict === and Object.is for NaN.',
    mnemonic: 'Never coerce, always verify',
    example: 'Object.is(NaN, NaN) === true; NaN === NaN is false.',
    status: 'new', intervalDays: 1, easeFactor: 2.5, repetitionCount: 0
  },

  // -------- Behavioral --------
  {
    id: 'bf-beh-1', topic: 'STAR', deck: 'Behavioral',
    front: 'Ideal STAR time split — how much should Situation vs Action occupy?',
    back: 'Situation + Task ≤ 30%, Action 50%, Result 20% with metrics. Interviewers grade the Action most heavily.',
    mnemonic: 'Action owns the mic',
    example: 'For a 2-min answer: ~35s setup, ~60s steps, ~25s impact.',
    status: 'new', intervalDays: 1, easeFactor: 2.5, repetitionCount: 0
  },
  {
    id: 'bf-beh-2', topic: 'Failure', deck: 'Behavioral',
    front: 'What makes a “tell me about a failure” answer credible?',
    back: 'Real ownership (no external blaming), specific technical root cause, concrete corrective system/process change, and post-feedback metrics.',
    mnemonic: 'No villains, only valves',
    example: '“I shipped an N+1 query that slowed checkout; added p95 dashboards + query lint rules in CI.”',
    status: 'new', intervalDays: 1, easeFactor: 2.5, repetitionCount: 0
  },
  {
    id: 'bf-beh-3', topic: 'Conflict', deck: 'Behavioral',
    front: 'Conflict question structure: how to disagree without sounding hard to work with?',
    back: 'Anchor on shared goal → present data for the disagreement → empathize with their constraint → explicit decision protocol → commit after the decision.',
    mnemonic: 'Goal, evidence, empathy, commit',
    example: '“We both wanted zero churn; I proved the rollout would raise error rates, we agreed on a canary.”',
    status: 'new', intervalDays: 1, easeFactor: 2.5, repetitionCount: 0
  }
];

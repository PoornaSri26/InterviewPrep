import { DsaPattern } from '../types';

export const dsaPatterns: DsaPattern[] = [
  {
    id: 'two-pointers',
    name: 'Two Pointers',
    description: 'Use two pointers moving towards each other or in same direction to solve array/string problems efficiently.',
    recognitionTips: [
      'Array/string is sorted or can be sorted',
      'Looking for pairs with specific sum/difference',
      'Need to find palindromes or remove elements'
    ],
    whenToUse: ['Pair sum', 'Container with most water', '3Sum', 'Valid palindrome'],
    timeComplexityTypical: 'O(n)',
    spaceComplexityTypical: 'O(1)'
  },
  {
    id: 'sliding-window',
    name: 'Sliding Window',
    description: 'Expand and shrink a window to find subarrays/substrings satisfying conditions.',
    recognitionTips: [
      'Contiguous subarray/substring',
      'Find longest/shortest with condition',
      'Optimization over brute force O(n²)'
    ],
    whenToUse: ['Longest substring without repeating', 'Minimum window substring', 'Maximum sum subarray of size k'],
    timeComplexityTypical: 'O(n)',
    spaceComplexityTypical: 'O(1) or O(k)'
  },
  {
    id: 'fast-slow-pointers',
    name: 'Fast & Slow Pointers',
    description: 'Use two pointers at different speeds to detect cycles or find middle elements.',
    recognitionTips: [
      'Linked list cycle detection',
      'Find middle node',
      'Happy number problem'
    ],
    whenToUse: ['Linked list cycle', 'Middle of linked list', 'Find start of cycle'],
    timeComplexityTypical: 'O(n)',
    spaceComplexityTypical: 'O(1)'
  },
  {
    id: 'merge-intervals',
    name: 'Merge Intervals',
    description: 'Sort intervals and merge overlapping ones.',
    recognitionTips: [
      'List of intervals [start, end]',
      'Need to merge or find overlaps',
      'Meeting rooms problems'
    ],
    whenToUse: ['Merge intervals', 'Meeting rooms II', 'Insert interval'],
    timeComplexityTypical: 'O(n log n)',
    spaceComplexityTypical: 'O(n)'
  },
  {
    id: 'backtracking',
    name: 'Backtracking',
    description: 'Explore all possibilities by building solution incrementally and backtracking when invalid.',
    recognitionTips: [
      'Find all combinations/permutations/subsets',
      'Path finding with choices',
      'Decision tree problems'
    ],
    whenToUse: ['Permutations', 'Combinations', 'N-Queens', 'Word search'],
    timeComplexityTypical: 'Exponential O(b^d)',
    spaceComplexityTypical: 'O(d) recursion stack'
  },
  {
    id: 'bfs',
    name: 'BFS (Breadth First Search)',
    description: 'Explore level by level, shortest path in unweighted graphs.',
    recognitionTips: [
      'Shortest path in unweighted graph',
      'Level order traversal',
      'Find nearest node'
    ],
    whenToUse: ['Binary tree level order', 'Shortest path in grid', 'Rotten oranges'],
    timeComplexityTypical: 'O(V + E)',
    spaceComplexityTypical: 'O(V)'
  },
  {
    id: 'dfs',
    name: 'DFS (Depth First Search)',
    description: 'Explore as deep as possible before backtracking.',
    recognitionTips: [
      'Explore all paths',
      'Tree traversal',
      'Connected components'
    ],
    whenToUse: ['Path sum', 'Number of islands', 'Course schedule'],
    timeComplexityTypical: 'O(V + E)',
    spaceComplexityTypical: 'O(V)'
  },
  {
    id: 'dp',
    name: 'Dynamic Programming',
    description: 'Break down problem into overlapping subproblems and cache results.',
    recognitionTips: [
      'Optimal substructure',
      'Overlapping subproblems',
      'Count ways or min/max cost'
    ],
    whenToUse: ['Climbing stairs', 'Coin change', 'Longest common subsequence'],
    timeComplexityTypical: 'Varies O(n*m)',
    spaceComplexityTypical: 'Varies O(n*m)'
  },
  {
    id: 'stack',
    name: 'Stack',
    description: 'LIFO structure for problems needing to track previous/next greater/smaller.',
    recognitionTips: [
      'Next greater element',
      'Balanced parentheses',
      'Undo operations'
    ],
    whenToUse: ['Valid parentheses', 'Daily temperatures', 'Largest rectangle in histogram'],
    timeComplexityTypical: 'O(n)',
    spaceComplexityTypical: 'O(n)'
  },
  {
    id: 'heap',
    name: 'Heap/Priority Queue',
    description: 'Efficiently get min/max element. Use for top K problems.',
    recognitionTips: [
      'Find K largest/smallest elements',
      'Merge K sorted lists',
      'Scheduling problems'
    ],
    whenToUse: ['Kth largest element', 'Merge k sorted lists', 'Find median from data stream'],
    timeComplexityTypical: 'O(n log k)',
    spaceComplexityTypical: 'O(k)'
  },
  {
    id: 'binary-search',
    name: 'Binary Search',
    description: 'Divide and conquer on sorted data or search space.',
    recognitionTips: [
      'Array is sorted',
      'Search in range [1, n]',
      'Find first/last occurrence'
    ],
    whenToUse: ['Binary search', 'Search in rotated sorted array', 'Find peak element'],
    timeComplexityTypical: 'O(log n)',
    spaceComplexityTypical: 'O(1)'
  },
  {
    id: 'trie',
    name: 'Trie (Prefix Tree)',
    description: 'Tree for efficient string prefix searches.',
    recognitionTips: [
      'Autocomplete/prefix matching',
      'Word dictionary',
      'Search suggestions'
    ],
    whenToUse: ['Implement trie', 'Word search II', 'Longest word in dictionary'],
    timeComplexityTypical: 'O(m) per operation',
    spaceComplexityTypical: 'O(alphabet * m)'
  },
  {
    id: 'union-find',
    name: 'Union-Find/Disjoint Set',
    description: 'Track disjoint sets with union and find operations.',
    recognitionTips: [
      'Connected components',
      'Dynamic connectivity',
      'Find if already connected'
    ],
    whenToUse: ['Number of islands II', 'Graph valid tree', 'Redundant connection'],
    timeComplexityTypical: 'Nearly constant α(n)',
    spaceComplexityTypical: 'O(n)'
  },
  {
    id: 'greedy',
    name: 'Greedy',
    description: 'Make locally optimal choice at each step to reach global optimum.',
    recognitionTips: [
      'Maximize/minimize with choices',
      'Interval scheduling',
      'Coin change in canonical system'
    ],
    whenToUse: ['Jump game', 'Gas station', 'Meeting rooms'],
    timeComplexityTypical: 'O(n log n)',
    spaceComplexityTypical: 'O(1)'
  },
  {
    id: 'topological-sort',
    name: 'Topological Sort',
    description: 'Order vertices in DAG such that for every edge u->v, u comes before v.',
    recognitionTips: [
      'Dependency resolution',
      'Course prerequisites',
      'Task scheduling with dependencies'
    ],
    whenToUse: ['Course schedule', 'Alien dictionary', 'Sequence reconstruction'],
    timeComplexityTypical: 'O(V + E)',
    spaceComplexityTypical: 'O(V)'
  },
  {
    id: 'monotonic-stack',
    name: 'Monotonic Stack',
    description: 'Maintain a stack with monotonic (increasing/decreasing) order to solve "next greater/smaller" efficiently.',
    recognitionTips: [
      'Need next greater/smaller element',
      'Trapping rain water',
      'Stock span problems'
    ],
    whenToUse: ['Next greater element', 'Trapping rain water', 'Stock span'],
    timeComplexityTypical: 'O(n)',
    spaceComplexityTypical: 'O(n)'
  },
  {
    id: 'sliding-window-maximum',
    name: 'Sliding Window Maximum',
    description: 'Use deque to maintain maximum in sliding window as it moves.',
    recognitionTips: [
      'Maximum in every window of size k',
      'Moving window with max/min',
      'Need efficient way over O(nk)'
    ],
    whenToUse: ['Sliding window maximum', 'The maximum in windows'],
    timeComplexityTypical: 'O(n)',
    spaceComplexityTypical: 'O(k)'
  }
];

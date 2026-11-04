import React, { useState } from 'react';
import { BookOpen, Search, ChevronRight, Code2, Clock, HardDrive } from 'lucide-react';

interface CheatItem {
  id: string;
  category: string;
  title: string;
  content: string[];
  code?: string;
  timeComplexity?: string;
  spaceComplexity?: string;
}

const cheatSheets: CheatItem[] = [
  {
    id: 'arrays',
    category: 'Data Structures',
    title: 'Arrays',
    content: [
      'Contiguous memory, O(1) access by index',
      'Insertion/deletion at end: O(1) amortized',
      'Insertion/deletion in middle: O(n)',
      'Search: O(n) linear, O(log n) if sorted'
    ],
    code: `// Common operations
arr.push(x);      // append
arr.pop();        // remove end
arr.unshift(x);   // prepend (O(n))
arr.shift();      // remove start (O(n))
arr.slice(i,j);   // copy range
arr.splice(i,n);  // remove/insert`,
    timeComplexity: 'Access O(1), Search O(n)',
    spaceComplexity: 'O(n)'
  },
  {
    id: 'hashmap',
    category: 'Data Structures',
    title: 'Hash Map / Dictionary',
    content: [
      'Key-value pairs, O(1) average lookup/insert/delete',
      'Use for frequency counting, lookups',
      'Watch for hash collisions'
    ],
    code: `// JS
const map = new Map();
map.set(key, value);
map.get(key);
map.has(key);
map.delete(key);

// Or object
const obj = {}; obj[key] = value;`,
    timeComplexity: 'Average O(1), Worst O(n)',
    spaceComplexity: 'O(n)'
  },
  {
    id: 'stack',
    category: 'Data Structures',
    title: 'Stack (LIFO)',
    content: [
      'Push/pop from top only',
      'Use cases: parentheses, undo, DFS recursion',
      'Implement with array (push/pop) or linked list'
    ],
    code: `const stack = [];
stack.push(x); // push
stack.pop();   // pop
stack[stack.length-1]; // peek`,
    timeComplexity: 'All operations O(1)',
    spaceComplexity: 'O(n)'
  },
  {
    id: 'queue',
    category: 'Data Structures',
    title: 'Queue (FIFO)',
    content: [
      'Enqueue at rear, dequeue from front',
      'Use cases: BFS, scheduling, buffer',
      'Use array with front index or linked list'
    ],
    code: `const queue = [];
queue.push(x);      // enqueue
queue.shift();      // dequeue (O(n) for array)
 // Better: use index or deque
let front = 0;
queue[front++];     // dequeue O(1)`,
    timeComplexity: 'All operations O(1)',
    spaceComplexity: 'O(n)'
  },
  {
    id: 'bfs-dfs',
    category: 'Algorithms',
    title: 'BFS vs DFS',
    content: [
      'BFS: shortest path in unweighted, uses queue',
      'DFS: explore deeply, uses stack/recursion',
      'BFS guarantees shortest in edges, DFS may not'
    ],
    code: `// BFS
function bfs(root) {
  const queue = [root];
  while(queue.length) {
    const node = queue.shift();
    // process
    queue.push(...node.children);
  }
}

// DFS (recursive)
function dfs(node) {
  if(!node) return;
  // process
  node.children.forEach(dfs);
}`,
    timeComplexity: 'O(V + E)',
    spaceComplexity: 'O(V)'
  },
  {
    id: 'binary-search',
    category: 'Algorithms',
    title: 'Binary Search',
    content: [
      'Array must be sorted',
      'Divide and conquer, O(log n)',
      'Classic for "find in sorted array"'
    ],
    code: `function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while(left <= right) {
    let mid = Math.floor((left+right)/2);
    if(arr[mid] === target) return mid;
    if(arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}`,
    timeComplexity: 'O(log n)',
    spaceComplexity: 'O(1)'
  },
  {
    id: 'twopointers',
    category: 'Patterns',
    title: 'Two Pointers',
    content: [
      'Use two pointers moving towards each other or same direction',
      'Great for sorted arrays, palindromes, pairs',
      'Reduces O(n^2) to O(n) in many cases'
    ],
    code: `// Opposite ends
function twoSum(arr, target) {
  let left = 0, right = arr.length-1;
  while(left < right) {
    let sum = arr[left] + arr[right];
    if(sum === target) return [left,right];
    if(sum < target) left++;
    else right--;
  }
  return [];
}`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)'
  },
  {
    id: 'sliding-window',
    category: 'Patterns',
    title: 'Sliding Window',
    content: [
      'Expand right, shrink left to maintain condition',
      'Use for subarrays/substrings with constraints',
      'Avoid nested loops over windows'
    ],
    code: `function maxSumSubarray(arr, k) {
  let windowSum = arr.slice(0,k).reduce((a,b)=>a+b,0);
  let maxSum = windowSum;
  for(let i=k; i<arr.length; i++) {
    windowSum = windowSum - arr[i-k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)'
  },
  {
    id: 'recursion',
    category: 'Concepts',
    title: 'Recursion Tips',
    content: [
      'Base case is critical',
      'Watch for stack overflow (deep recursion)',
      'Consider iterative or memoization for overlapping subproblems'
    ],
    code: `// Always define base case
function factorial(n) {
  if(n <= 1) return 1; // base case
  return n * factorial(n-1);
}`,
    timeComplexity: 'Varies',
    spaceComplexity: 'O(h) for recursion stack'
  }
];

export const CheatSheetView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = ['All', ...Array.from(new Set(cheatSheets.map(c => c.category)))];
  
  const filtered = cheatSheets.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.content.some(c => c.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div className="glass-card" style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <BookOpen size={28} color="var(--accent-cyan)" />
          <h1 style={{ fontSize: '1.8rem' }}>Quick Reference Cheat Sheet</h1>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          Instant lookup for data structures, algorithms, and common patterns
        </p>
      </div>

      <div className="glass-card" style={{ padding: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ position: 'relative', flex: 1, minWidth: '200px' }}>
          <Search size={18} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder="Search cheat sheets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '0.6rem 0.6rem 0.6rem 2.25rem',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              color: 'var(--text-main)',
              fontSize: '0.9rem'
            }}
          />
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              className={selectedCategory === cat ? 'btn-primary' : 'btn-secondary'}
              style={{ padding: '0.5rem 0.9rem', fontSize: '0.85rem' }}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {filtered.map(item => (
          <div key={item.id} className="glass-card" style={{ overflow: 'hidden' }}>
            <button
              onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
              style={{
                width: '100%',
                padding: '1rem 1.25rem',
                background: 'transparent',
                border: 'none',
                color: 'var(--text-main)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                textAlign: 'left'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Code2 size={20} color="var(--accent-cyan)" />
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontWeight: 600, fontSize: '1rem' }}>{item.title}</span>
                    <span className="badge badge-primary" style={{ fontSize: '0.7rem' }}>{item.category}</span>
                  </div>
                </div>
              </div>
              <ChevronRight
                size={18}
                style={{
                  transform: expandedId === item.id ? 'rotate(90deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s',
                  color: 'var(--text-muted)'
                }}
              />
            </button>
            {expandedId === item.id && (
              <div style={{ padding: '0 1.25rem 1.25rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', paddingLeft: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  {item.content.map((c, idx) => (
                    <li key={idx}>{c}</li>
                  ))}
                </ul>
                {(item.timeComplexity || item.spaceComplexity) && (
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    {item.timeComplexity && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem' }}>
                        <Clock size={16} color="var(--accent-amber)" />
                        <span style={{ color: 'var(--text-muted)' }}>Time:</span>
                        <span style={{ color: 'var(--text-main)', fontWeight: 500 }}>{item.timeComplexity}</span>
                      </div>
                    )}
                    {item.spaceComplexity && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem' }}>
                        <HardDrive size={16} color="var(--accent-cyan)" />
                        <span style={{ color: 'var(--text-muted)' }}>Space:</span>
                        <span style={{ color: 'var(--text-main)', fontWeight: 500 }}>{item.spaceComplexity}</span>
                      </div>
                    )}
                  </div>
                )}
                {item.code && (
                  <pre style={{
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1rem',
                    overflowX: 'auto',
                    fontSize: '0.85rem',
                    lineHeight: '1.5',
                    color: '#e2e8f0'
                  }}>
                    <code>{item.code}</code>
                  </pre>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

import { ComplexityDrill } from '../types';

export const complexityDrills: ComplexityDrill[] = [
  {
    id: 'cg-1',
    code: `function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}`,
    language: 'javascript',
    question: 'What is the time and space complexity of this function?',
    expectedTime: 'O(n)',
    expectedSpace: 'O(1)',
    explanation: 'Single pass through array, constant extra space.'
  },
  {
    id: 'cg-2',
    code: `function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}`,
    language: 'javascript',
    question: 'What is the time and space complexity?',
    expectedTime: 'O(n²)',
    expectedSpace: 'O(1)',
    explanation: 'Nested loops, no extra space proportional to input.'
  },
  {
    id: 'cg-3',
    code: `function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}`,
    language: 'javascript',
    question: 'What is the time and space complexity?',
    expectedTime: 'O(log n)',
    expectedSpace: 'O(1)',
    explanation: 'Each iteration halves the search space.'
  },
  {
    id: 'cg-4',
    code: `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}`,
    language: 'javascript',
    question: 'What is the time and space complexity?',
    expectedTime: 'O(2^n)',
    expectedSpace: 'O(n)',
    explanation: 'Exponential time due to overlapping subproblems, space from recursion stack.'
  },
  {
    id: 'cg-5',
    code: `function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}`,
    language: 'javascript',
    question: 'What is the time and space complexity?',
    expectedTime: 'O(n log n)',
    expectedSpace: 'O(n)',
    explanation: 'Divide and conquer gives log n levels, each element processed once; space for arrays.'
  },
  {
    id: 'cg-6',
    code: `function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const left = arr.filter(x => x < pivot);
  const right = arr.filter(x => x > pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
}`,
    language: 'javascript',
    question: 'What is the time and space complexity?',
    expectedTime: 'O(n log n) average, O(n²) worst case',
    expectedSpace: 'O(n)',
    explanation: 'Average case good with random pivot, worst case when sorted; filter creates new arrays.'
  },
  {
    id: 'cg-7',
    code: `function dfs(graph, start, visited = new Set()) {
  visited.add(start);
  console.log(start);
  for (let neighbor of graph[start]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  }
}`,
    language: 'javascript',
    question: 'What is the time and space complexity?',
    expectedTime: 'O(V + E)',
    expectedSpace: 'O(V)',
    explanation: 'Visit each vertex and edge once; space for visited set and recursion stack.'
  }
];

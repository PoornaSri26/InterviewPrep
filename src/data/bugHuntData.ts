import { BugHuntProblem } from '../types';

export const bugHuntProblems: BugHuntProblem[] = [
  {
    id: 'bug-1',
    title: 'Two Sum Bug Hunt',
    description: 'This function is supposed to find indices of two numbers that add up to target. It has bugs - find and fix them.',
    language: 'javascript',
    buggyCode: `function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map[complement]) {
      return [map[complement], i];
    }
    map[nums[i]] = i;
  }
  return [];
}`,
    expectedBehavior: 'Return array of two indices whose values sum to target',
    hints: ['Check how object keys are accessed', 'Look at when you store vs check'],
    testCases: [
      { input: '[2,7,11,15], 9', expected: '[0,1]' },
      { input: '[3,2,4], 6', expected: '[1,2]' }
    ],
    solutionExplanation: 'When checking if complement exists, we need to check for undefined, not truthiness. Also we store current element after checking.',
    bugs: ['Using if (map[complement]) is wrong for value 0', 'Should store index after checking']
  },
  {
    id: 'bug-2',
    title: 'Palindrome Bug Hunt',
    description: 'Check if a string is palindrome. Find the bugs.',
    language: 'javascript',
    buggyCode: `function isPalindrome(s) {
  let left = 0;
  let right = s.length;
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}`,
    expectedBehavior: 'Return true if string reads same forwards and backwards',
    hints: ['Check array/string indexing', 'Look at initial right boundary'],
    testCases: [
      { input: '"racecar"', expected: 'true' },
      { input: '"hello"', expected: 'false' }
    ],
    solutionExplanation: 'right should start at s.length - 1, not s.length',
    bugs: ['Off-by-one error: right should be s.length - 1']
  },
  {
    id: 'bug-3',
    title: 'Fibonacci Bug Hunt',
    description: 'Compute nth Fibonacci number. Find bugs.',
    language: 'javascript',
    buggyCode: `function fib(n) {
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i < n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}`,
    expectedBehavior: 'Return fib(n) where fib(0)=0, fib(1)=1',
    hints: ['Check loop bounds', 'fib(2) should return 1'],
    testCases: [
      { input: '0', expected: '0' },
      { input: '1', expected: '1' },
      { input: '2', expected: '1' },
      { input: '3', expected: '2' }
    ],
    solutionExplanation: 'Loop should run up to i <= n or condition should be i <= n',
    bugs: ['Loop condition is wrong - misses fib(2)']
  },
  {
    id: 'bug-4',
    title: 'Array Max Bug Hunt',
    description: 'Find maximum element in array. Spot the bug.',
    language: 'javascript',
    buggyCode: `function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}`,
    expectedBehavior: 'Return maximum element in array',
    hints: ['What if all numbers are negative?', 'Initialize properly'],
    testCases: [
      { input: '[1, 5, 3, 9, 2]', expected: '9' },
      { input: '[-1, -5, -3]', expected: '-1' }
    ],
    solutionExplanation: 'Initialize max to arr[0], not 0. Also handle empty array.',
    bugs: ['Wrong initialization when all numbers are negative']
  },
  {
    id: 'bug-5',
    title: 'Reverse Array Bug Hunt',
    description: 'Reverse an array in place. Find bugs.',
    language: 'javascript',
    buggyCode: `function reverseArray(arr) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr;
}`,
    expectedBehavior: 'Reverse array elements in place',
    hints: ['Check boundaries'],
    testCases: [
      { input: '[1,2,3,4]', expected: '[4,3,2,1]' }
    ],
    solutionExplanation: 'right should start at arr.length - 1, not arr.length',
    bugs: ['Off-by-one: right index starts at wrong position']
  }
];

import { Problem } from '../types';

export const initialProblems: Problem[] = [
  {
    id: 'two-sum',
    title: 'Two Sum',
    difficulty: 'Easy',
    category: 'Arrays & Hashing',
    companies: ['Google', 'Amazon', 'Meta', 'Apple', 'Microsoft'],
    description: 'Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.',
    examples: [
      { input: 'nums = [2,7,11,15], target = 9', output: '[0,1]', explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].' },
      { input: 'nums = [3,2,4], target = 6', output: '[1,2]' },
      { input: 'nums = [3,3], target = 6', output: '[0,1]' }
    ],
    constraints: [
      '2 <= nums.length <= 10^4',
      '-10^9 <= nums[i] <= 10^9',
      '-10^9 <= target <= 10^9',
      'Only one valid answer exists.'
    ],
    starterCodeJs: `function twoSum(nums, target) {
  // Write your solution here
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`,
    starterCodePy: `def twoSum(nums: list[int], target: int) -> list[int]:
    # Write your solution here
    seen = {}
    for i, num in enumerate(nums):
        diff = target - num
        if diff in seen:
            return [seen[diff], i]
        seen[num] = i
    return []`,
    testCases: [
      { input: '[[2,7,11,15], 9]', expected: '[0,1]' },
      { input: '[[3,2,4], 6]', expected: '[1,2]' },
      { input: '[[3,3], 6]', expected: '[0,1]' }
    ],
    solutionCodeJs: `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`,
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(N)',
    hints: [
      'A brute force approach checks all pairs in O(N^2). Can we do it in one pass?',
      'Use a Hash Map to store numbers you have already visited and their indices.',
      'For each element, check if (target - current) exists in your map.'
    ],
    sourceUrl: 'https://leetcode.com/problems/two-sum/',
    status: 'unsolved',
    intervalDays: 1,
    easeFactor: 2.5,
    repetitionCount: 0
  },
  {
    id: 'valid-parentheses',
    title: 'Valid Parentheses',
    difficulty: 'Easy',
    category: 'Stack',
    companies: ['Amazon', 'Meta', 'Microsoft', 'Google', 'Netflix'],
    description: 'Given a string `s` containing just the characters \'(\', \')\', \'{\', \'}\', \'[\' and \']\', determine if the input string is valid. An input string is valid if open brackets must be closed by the same type of brackets and open brackets must be closed in the correct order.',
    examples: [
      { input: 's = "()"', output: 'true' },
      { input: 's = "()[]{}"', output: 'true' },
      { input: 's = "(]"', output: 'false' },
      { input: 's = "([)]"', output: 'false' }
    ],
    constraints: [
      '1 <= s.length <= 10^4',
      's consists of parentheses only \'()[]{}\'.'
    ],
    starterCodeJs: `function isValid(s) {
  // Write your solution here
  const stack = [];
  const map = { ')': '(', '}': '{', ']': '[' };
  
  for (const char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
      if (stack.pop() !== map[char]) return false;
    }
  }
  return stack.length === 0;
}`,
    starterCodePy: `def isValid(s: str) -> bool:
    stack = []
    pairs = {')': '(', '}': '{', ']': '['}
    for char in s:
        if char in '({[':
            stack.append(char)
        elif not stack or stack.pop() != pairs[char]:
            return False
    return len(stack) == 0`,
    testCases: [
      { input: '["()"]', expected: 'true' },
      { input: '["()[]{}"]', expected: 'true' },
      { input: '["(]"]', expected: 'false' },
      { input: '["([)]"]', expected: 'false' }
    ],
    solutionCodeJs: `function isValid(s) {
  const stack = [];
  const map = { ')': '(', '}': '{', ']': '[' };
  for (const char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
      if (stack.pop() !== map[char]) return false;
    }
  }
  return stack.length === 0;
}`,
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(N)',
    hints: [
      'Consider using a Last-In First-Out (LIFO) data structure: a Stack.',
      'Whenever you encounter a closing bracket, the top of the stack must match its pair.'
    ],
    sourceUrl: 'https://leetcode.com/problems/valid-parentheses/',
    status: 'unsolved',
    intervalDays: 1,
    easeFactor: 2.5,
    repetitionCount: 0
  },
  {
    id: 'best-time-to-buy-and-sell-stock',
    title: 'Best Time to Buy and Sell Stock',
    difficulty: 'Easy',
    category: 'Sliding Window',
    companies: ['Amazon', 'Apple', 'Meta', 'Microsoft', 'Google'],
    description: 'You are given an array `prices` where `prices[i]` is the price of a given stock on the `i-th` day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.',
    examples: [
      { input: 'prices = [7,1,5,3,6,4]', output: '5', explanation: 'Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.' },
      { input: 'prices = [7,6,4,3,1]', output: '0', explanation: 'In this case, no transactions are done and max profit = 0.' }
    ],
    constraints: [
      '1 <= prices.length <= 10^5',
      '0 <= prices[i] <= 10^4'
    ],
    starterCodeJs: `function maxProfit(prices) {
  // Write your solution here
  let minPrice = Infinity;
  let maxProfit = 0;
  for (const p of prices) {
    if (p < minPrice) minPrice = p;
    else if (p - minPrice > maxProfit) maxProfit = p - minPrice;
  }
  return maxProfit;
}`,
    starterCodePy: `def maxProfit(prices: list[int]) -> int:
    min_price = float('inf')
    max_p = 0
    for p in prices:
        if p < min_price:
            min_price = p
        elif p - min_price > max_p:
            max_p = p - min_price
    return max_p`,
    testCases: [
      { input: '[[7,1,5,3,6,4]]', expected: '5' },
      { input: '[[7,6,4,3,1]]', expected: '0' }
    ],
    solutionCodeJs: `function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;
  for (const p of prices) {
    if (p < minPrice) minPrice = p;
    else if (p - minPrice > maxProfit) maxProfit = p - minPrice;
  }
  return maxProfit;
}`,
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    hints: [
      'Track the lowest price seen so far as you iterate through the list.',
      'At each day, calculate the profit if you sold today (current price - min price).'
    ],
    sourceUrl: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/',
    status: 'unsolved',
    intervalDays: 1,
    easeFactor: 2.5,
    repetitionCount: 0
  },
  {
    id: 'longest-substring-without-repeating-characters',
    title: 'Longest Substring Without Repeating Characters',
    difficulty: 'Medium',
    category: 'Sliding Window',
    companies: ['Amazon', 'Google', 'Meta', 'Uber', 'Microsoft'],
    description: 'Given a string `s`, find the length of the longest substring without repeating characters.',
    examples: [
      { input: 's = "abcabcbb"', output: '3', explanation: 'The answer is "abc", with the length of 3.' },
      { input: 's = "bbbbb"', output: '1', explanation: 'The answer is "b", with the length of 1.' },
      { input: 's = "pwwkew"', output: '3', explanation: 'The answer is "wke", with the length of 3.' }
    ],
    constraints: [
      '0 <= s.length <= 5 * 10^4',
      's consists of English letters, digits, symbols and spaces.'
    ],
    starterCodeJs: `function lengthOfLongestSubstring(s) {
  // Write your solution here
  const seen = new Map();
  let maxLen = 0;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    if (seen.has(char) && seen.get(char) >= left) {
      left = seen.get(char) + 1;
    }
    seen.set(char, right);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}`,
    starterCodePy: `def lengthOfLongestSubstring(s: str) -> int:
    seen = {}
    left = 0
    max_len = 0
    for right, char in enumerate(s):
        if char in seen and seen[char] >= left:
            left = seen[char] + 1
        seen[char] = right
        max_len = max(max_len, right - left + 1)
    return max_len`,
    testCases: [
      { input: '["abcabcbb"]', expected: '3' },
      { input: '["bbbbb"]', expected: '1' },
      { input: '["pwwkew"]', expected: '3' }
    ],
    solutionCodeJs: `function lengthOfLongestSubstring(s) {
  const seen = new Map();
  let maxLen = 0;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    if (seen.has(char) && seen.get(char) >= left) {
      left = seen.get(char) + 1;
    }
    seen.set(char, right);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}`,
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(min(N, M)) where M is alphabet size',
    hints: [
      'Use two pointers (sliding window) representing the current valid substring.',
      'Maintain a Map of character to its most recent index.'
    ],
    sourceUrl: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
    status: 'unsolved',
    intervalDays: 1,
    easeFactor: 2.5,
    repetitionCount: 0
  },
  {
    id: 'lru-cache',
    title: 'LRU Cache',
    difficulty: 'Medium',
    category: 'Design',
    companies: ['Amazon', 'Google', 'Meta', 'Microsoft', 'Uber', 'Apple'],
    description: 'Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. Implement the `LRUCache` class with `get(key)` and `put(key, value)` both running in O(1) average time complexity.',
    examples: [
      {
        input: '["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]\n[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]',
        output: '[null, null, null, 1, null, -1, null, -1, 3, 4]'
      }
    ],
    constraints: [
      '1 <= capacity <= 3000',
      '0 <= key <= 10^4',
      '0 <= value <= 10^5',
      'At most 2 * 10^5 calls will be made to get and put.'
    ],
    starterCodeJs: `class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    const val = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, val);
    return val;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    this.cache.set(key, value);
  }
}`,
    starterCodePy: `class LRUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache = {} # ordered in python 3.7+

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1
        val = self.cache.pop(key)
        self.cache[key] = val
        return val

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.cache.pop(key)
        elif len(self.cache) >= self.capacity:
            oldest = next(iter(self.cache))
            del self.cache[oldest]
        self.cache[key] = value`,
    testCases: [
      {
        input: 'function test() { const l = new LRUCache(2); l.put(1,1); l.put(2,2); const a = l.get(1); l.put(3,3); const b = l.get(2); return [a, b]; } test()',
        expected: '[1,-1]'
      }
    ],
    solutionCodeJs: `class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }
  get(key) {
    if (!this.cache.has(key)) return -1;
    const val = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, val);
    return val;
  }
  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    this.cache.set(key, value);
  }
}`,
    timeComplexity: 'O(1) for both get and put',
    spaceComplexity: 'O(capacity)',
    hints: [
      'In JavaScript, Map maintains key insertion order.',
      'Re-inserting a key moves it to the most recently used position.',
      'In lower-level systems, this is implemented using a Doubly Linked List + Hash Map.'
    ],
    sourceUrl: 'https://leetcode.com/problems/lru-cache/',
    status: 'unsolved',
    intervalDays: 1,
    easeFactor: 2.5,
    repetitionCount: 0
  },
  {
    id: 'trapping-rain-water',
    title: 'Trapping Rain Water',
    difficulty: 'Hard',
    category: 'Two Pointers',
    companies: ['Google', 'Amazon', 'Meta', 'Bloomberg', 'Goldman Sachs'],
    description: 'Given `n` non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.',
    examples: [
      { input: 'height = [0,1,0,2,1,0,1,3,2,1,2,1]', output: '6', explanation: 'The elevation map traps 6 units of rain water.' },
      { input: 'height = [4,2,0,3,2,5]', output: '9' }
    ],
    constraints: [
      'n == height.length',
      '1 <= n <= 2 * 10^4',
      '0 <= height[i] <= 10^5'
    ],
    starterCodeJs: `function trap(height) {
  // Two Pointers approach
  let left = 0, right = height.length - 1;
  let leftMax = 0, rightMax = 0;
  let total = 0;
  
  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) leftMax = height[left];
      else total += leftMax - height[left];
      left++;
    } else {
      if (height[right] >= rightMax) rightMax = height[right];
      else total += rightMax - height[right];
      right--;
    }
  }
  return total;
}`,
    starterCodePy: `def trap(height: list[int]) -> int:
    left, right = 0, len(height) - 1
    left_max, right_max = 0, 0
    total = 0
    while left < right:
        if height[left] < height[right]:
            if height[left] >= left_max:
                left_max = height[left]
            else:
                total += left_max - height[left]
            left += 1
        else:
            if height[right] >= right_max:
                right_max = height[right]
            else:
                total += right_max - height[right]
            right -= 1
    return total`,
    testCases: [
      { input: '[[0,1,0,2,1,0,1,3,2,1,2,1]]', expected: '6' },
      { input: '[[4,2,0,3,2,5]]', expected: '9' }
    ],
    solutionCodeJs: `function trap(height) {
  let left = 0, right = height.length - 1;
  let leftMax = 0, rightMax = 0;
  let total = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) leftMax = height[left];
      else total += leftMax - height[left];
      left++;
    } else {
      if (height[right] >= rightMax) rightMax = height[right];
      else total += rightMax - height[right];
      right--;
    }
  }
  return total;
}`,
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    hints: [
      'Water trapped above any bar `i` is determined by min(max_left, max_right) - height[i].',
      'Instead of computing prefix/suffix arrays in O(N) space, can we use two pointers from the outside inward?'
    ],
    sourceUrl: 'https://leetcode.com/problems/trapping-rain-water/',
    status: 'unsolved',
    intervalDays: 1,
    easeFactor: 2.5,
    repetitionCount: 0
  }
];

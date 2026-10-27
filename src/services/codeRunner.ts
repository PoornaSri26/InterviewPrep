// In-browser test runner for JavaScript code execution

export interface TestResult {
  index: number;
  input: string;
  expected: string;
  actual: string;
  passed: boolean;
  logs: string[];
  executionTimeMs: number;
  error?: string;
}

export const runJsCodeAgainstTests = (
  userCode: string,
  functionName: string,
  testCases: { input: string; expected: string }[]
): {
  allPassed: boolean;
  results: TestResult[];
  logs: string[];
} => {
  const results: TestResult[] = [];
  let allPassed = true;
  const capturedLogs: string[] = [];

  for (let i = 0; i < testCases.length; i++) {
    const testCase = testCases[i];
    const testLogs: string[] = [];

    const mockConsole = {
      log: (...args: any[]) => {
        const line = args.map((a) => (typeof a === 'object' ? JSON.stringify(a) : String(a))).join(' ');
        testLogs.push(line);
        capturedLogs.push(line);
      },
      error: (...args: any[]) => {
        const line = '[ERROR] ' + args.map((a) => (typeof a === 'object' ? JSON.stringify(a) : String(a))).join(' ');
        testLogs.push(line);
        capturedLogs.push(line);
      },
      warn: (...args: any[]) => {
        const line = '[WARN] ' + args.map((a) => (typeof a === 'object' ? JSON.stringify(a) : String(a))).join(' ');
        testLogs.push(line);
        capturedLogs.push(line);
      }
    };

    const startTime = performance.now();
    try {
      // Check if testCase.input is an explicit call expression (e.g. for classes like LRUCache)
      const isCallExpression = testCase.input.includes('test()') || testCase.input.startsWith('(');

      let runnerScript: string;
      if (isCallExpression) {
        runnerScript = `
          ${userCode}
          return (${testCase.input});
        `;
      } else {
        runnerScript = `
          ${userCode}
          const args = ${testCase.input};
          if (typeof ${functionName} === 'function') {
            return ${functionName}(...args);
          }
          throw new Error('Function "${functionName}" is not defined.');
        `;
      }

      // Safe Function constructor
      const executeFn = new Function('console', runnerScript);
      const actualOutput = executeFn(mockConsole);
      const endTime = performance.now();

      const actualStr = JSON.stringify(actualOutput);
      const expectedNormalized = testCase.expected.trim();
      const actualNormalized = actualStr !== undefined ? actualStr.trim() : 'undefined';

      // Compare outputs (handle loose array ordering or exact string match)
      const passed =
        actualNormalized === expectedNormalized ||
        actualNormalized.replace(/\s+/g, '') === expectedNormalized.replace(/\s+/g, '');

      if (!passed) allPassed = false;

      results.push({
        index: i + 1,
        input: testCase.input,
        expected: testCase.expected,
        actual: actualStr !== undefined ? actualStr : 'undefined',
        passed,
        logs: testLogs,
        executionTimeMs: Math.round((endTime - startTime) * 100) / 100
      });
    } catch (err: any) {
      const endTime = performance.now();
      allPassed = false;
      results.push({
        index: i + 1,
        input: testCase.input,
        expected: testCase.expected,
        actual: 'Error: ' + (err.message || String(err)),
        passed: false,
        logs: testLogs,
        executionTimeMs: Math.round((endTime - startTime) * 100) / 100,
        error: err.message || String(err)
      });
    }
  }

  return {
    allPassed,
    results,
    logs: capturedLogs
  };
};

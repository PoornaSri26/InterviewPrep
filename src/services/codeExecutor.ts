// Code Executor Service - Supports multiple execution backends
// Inspired by Judge0 and Piston

export interface ExecutionResult {
  stdout: string;
  stderr: string;
  output: string;
  status: {
    id: number;
    description: string;
  };
  time: string | null;
  memory: number | null;
}

export class CodeExecutor {
  // Piston API - public instances available
  private static PISTON_URLS = [
    'https://emkc.org/api/v2/piston',
    'https://piston.rs/api/v2/piston'
  ];
  
  static async executeWithPiston(
    language: string,
    code: string,
    stdin: string = ''
  ): Promise<ExecutionResult> {
    const languageMap: Record<string, { language: string; version: string }> = {
      'javascript': { language: 'javascript', version: '18.15.0' },
      'python': { language: 'python', version: '3.10.0' },
      'java': { language: 'java', version: '15.0.2' },
      'cpp': { language: 'cpp', version: '10.2.0' },
      'c': { language: 'c', version: '10.2.0' },
      'typescript': { language: 'typescript', version: '5.0.3' }
    };
    
    const langConfig = languageMap[language.toLowerCase()];
    if (!langConfig) {
      throw new Error(`Language ${language} not supported`);
    }
    
    for (const baseUrl of this.PISTON_URLS) {
      try {
        const response = await fetch(`${baseUrl}/execute`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            language: langConfig.language,
            version: langConfig.version,
            files: [
              {
                name: language === 'python' ? 'main.py' : language === 'javascript' ? 'main.js' : 'main.' + language,
                content: code
              }
            ],
            stdin: stdin,
            args: [],
            compile_timeout: 10000,
            run_timeout: 3000,
            compile_memory_limit: -1,
            run_memory_limit: -1
          })
        });
        
        if (response.ok) {
          const data = await response.json();
          return {
            stdout: data.run?.stdout || '',
            stderr: data.run?.stderr || '',
            output: data.run?.output || data.run?.stdout || '',
            status: {
              id: data.run?.code === 0 ? 3 : 4, // 3 = Accepted, 4 = Wrong Answer/Error
              description: data.run?.code === 0 ? 'Accepted' : 'Runtime Error'
            },
            time: data.run?.signal || null,
            memory: null
          };
        }
      } catch (error) {
        console.warn(`Failed to use Piston at ${baseUrl}, trying next...`);
      }
    }
    
    throw new Error('All execution backends failed');
  }
  
  static async executeCode(
    language: 'javascript' | 'python' | 'java' | 'cpp' | 'typescript',
    code: string,
    testCases?: Array<{ input: string; expected: string }>
  ): Promise<{
    success: boolean;
    results: Array<{ passed: boolean; input: string; expected: string; actual: string; time?: string }>;
    logs: string[];
  }> {
    const logs: string[] = [];
    
    try {
      if (language === 'javascript') {
        // Use in-browser execution for JS (existing behavior)
        logs.push('[INFO] Using in-browser JavaScript execution');
        return {
          success: true,
          results: [],
          logs
        };
      }
      
      // For other languages, try Piston
      logs.push(`[INFO] Executing ${language} code via Piston API...`);
      const result = await this.executeWithPiston(language, code);
      
      logs.push(`[STDOUT] ${result.stdout}`);
      if (result.stderr) {
        logs.push(`[STDERR] ${result.stderr}`);
      }
      
      return {
        success: result.status.id === 3,
        results: [],
        logs
      };
    } catch (error: any) {
      logs.push(`[ERROR] ${error.message}`);
      return {
        success: false,
        results: [],
        logs
      };
    }
  }
}

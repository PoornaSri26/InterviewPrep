import React, { useState, useEffect } from 'react';
import { Problem } from '../types';
import { runJsCodeAgainstTests, TestResult } from '../services/codeRunner';
import { evaluateExplainBack } from '../services/coach';
import confetti from 'canvas-confetti';
import { 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  Lightbulb, 
  Terminal, 
  Code2, 
  ChevronDown, 
  ChevronUp,
  Sparkles,
  Copy,
  BookOpen,
  MessageSquare
} from 'lucide-react';

interface CodeSandboxViewProps {
  problems: Problem[];
  activeProblemId: string | null;
  onSelectProblem: (id: string) => void;
  onGradeProblem: (id: string, quality: 0 | 1 | 2 | 3 | 4 | 5) => void;
}

export const CodeSandboxView: React.FC<CodeSandboxViewProps> = ({
  problems,
  activeProblemId,
  onSelectProblem,
  onGradeProblem
}) => {
  const currentProblem =
    problems.find((p) => p.id === activeProblemId) || problems[0];

  const [language, setLanguage] = useState<'javascript' | 'python' | 'java' | 'cpp' | 'typescript'>('javascript');
  const [code, setCode] = useState(currentProblem.starterCodeJs);
  const [testResults, setTestResults] = useState<{
    ran: boolean;
    allPassed: boolean;
    results: TestResult[];
    logs: string[];
  }>({
    ran: false,
    allPassed: false,
    results: [],
    logs: []
  });

  const [showHints, setShowHints] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [activeTab, setActiveTab] = useState<'testcases' | 'console'>('testcases');
  const [showExplainBack, setShowExplainBack] = useState(false);
  const [explanation, setExplanation] = useState('');
  const [explainResult, setExplainResult] = useState<any>(null);

  // When selected problem or language changes
  useEffect(() => {
    if (language === 'javascript') {
      setCode(currentProblem.starterCodeJs);
    } else if (language === 'python') {
      setCode(currentProblem.starterCodePy);
    } else if (language === 'java') {
      setCode(`public class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your solution here
        return new int[]{0,1};
    }
}`);
    } else if (language === 'cpp') {
      setCode(`#include <vector>
using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // Write your solution here
        return {};
    }
};`);
    } else {
      setCode(currentProblem.starterCodeJs);
    }
    setTestResults({ ran: false, allPassed: false, results: [], logs: [] });
    setShowHints(false);
    setShowSolution(false);
  }, [currentProblem.id, language]);

  // Extract function name from starter code
  const getFunctionName = (codeStr: string): string => {
    const match = codeStr.match(/function\s+([a-zA-Z0-9_$]+)/);
    if (match) return match[1];
    const classMatch = codeStr.match(/class\s+([a-zA-Z0-9_$]+)/);
    if (classMatch) return classMatch[1];
    return 'twoSum';
  };

  // Run in-browser test runner
  const handleRunTests = () => {
    if (language === 'python' || language === 'java' || language === 'cpp') {
      setTestResults({
        ran: true,
        allPassed: false,
        results: [],
        logs: [
          '[INFO] Multi-language execution requires external judge service (Judge0/Piston).',
          `[INFO] Code ready for execution in ${language.toUpperCase()}.`,
          '[TIP] For local testing, use the in-browser JavaScript runner or connect to a judge API.'
        ]
      });
      return;
    }

    const fnName = getFunctionName(code);
    const execution = runJsCodeAgainstTests(code, fnName, currentProblem.testCases);

    setTestResults({
      ran: true,
      allPassed: execution.allPassed,
      results: execution.results,
      logs: execution.logs
    });

    if (execution.allPassed) {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });
    }
  };

  const handleResetCode = () => {
    if (language === 'javascript') {
      setCode(currentProblem.starterCodeJs);
    } else {
      setCode(currentProblem.starterCodePy);
    }
    setTestResults({ ran: false, allPassed: false, results: [], logs: [] });
  };

  const handleLoadSolution = () => {
    setCode(currentProblem.solutionCodeJs);
    setLanguage('javascript');
  };

  const handleExplainBack = () => {
    const result = evaluateExplainBack(currentProblem.title, explanation);
    setExplainResult(result);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {/* Top Selector Bar */}
      <div className="glass-card" style={{ padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Code2 size={20} color="var(--accent-primary)" />
            <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>Select Problem:</span>
          </div>

          <select
            className="search-input"
            style={{ width: 'auto', padding: '0.45rem 1rem', minWidth: '240px' }}
            value={currentProblem.id}
            onChange={(e) => onSelectProblem(e.target.value)}
          >
            {problems.map((p) => (
              <option key={p.id} value={p.id}>
                {p.title} ({p.difficulty}) — {p.category}
              </option>
            ))}
          </select>
        </div>          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', background: 'var(--bg-surface-elevated)', padding: '3px', borderRadius: 'var(--radius-md)' }}>
              <button
                className={`nav-tab-btn ${language === 'javascript' ? 'active' : ''}`}
                style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem' }}
                onClick={() => setLanguage('javascript')}
              >
                JavaScript
              </button>
              <button
                className={`nav-tab-btn ${language === 'python' ? 'active' : ''}`}
                style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem' }}
                onClick={() => setLanguage('python')}
              >
                Python
              </button>
              <button
                className={`nav-tab-btn ${language === 'java' ? 'active' : ''}`}
                style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem' }}
                onClick={() => setLanguage('java' as any)}
              >
                Java
              </button>
              <button
                className={`nav-tab-btn ${language === 'cpp' ? 'active' : ''}`}
                style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem' }}
                onClick={() => setLanguage('cpp' as any)}
              >
                C++
              </button>
            </div>

            <button className="btn-secondary" style={{ padding: '0.45rem 0.85rem', fontSize: '0.82rem' }} onClick={handleResetCode}>
              <RotateCcw size={14} />
              Reset
            </button>
            <button className="btn-primary" style={{ padding: '0.45rem 1.1rem', fontSize: '0.85rem' }} onClick={handleRunTests}>
              <Play size={15} />
              Run Test Cases
            </button>
          </div>
      </div>

      {/* Main Split: Left Problem Description | Right Code Editor & Test Cases */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(320px, 420px) 1fr', gap: '1.25rem' }}>
        {/* Left: Problem Details & Hints */}
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', height: '720px', overflowY: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <h2 style={{ fontSize: '1.35rem' }}>{currentProblem.title}</h2>
            <span className={`badge ${currentProblem.difficulty === 'Easy' ? 'badge-easy' : currentProblem.difficulty === 'Medium' ? 'badge-medium' : 'badge-hard'}`}>
              {currentProblem.difficulty}
            </span>
          </div>

          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            {currentProblem.companies.map((c) => (
              <span key={c} style={{ fontSize: '0.7rem', background: 'rgba(255,255,255,0.06)', padding: '2px 8px', borderRadius: '4px', color: 'var(--text-muted)' }}>
                {c}
              </span>
            ))}
          </div>

          <div style={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#e2e8f0', marginBottom: '1.25rem' }}>
            {currentProblem.description}
          </div>

          {/* Examples */}
          <div style={{ marginBottom: '1.25rem' }}>
            <h4 style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
              Examples:
            </h4>
            {currentProblem.examples.map((ex, idx) => (
              <div key={idx} style={{ background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '0.75rem', fontSize: '0.82rem', marginBottom: '0.5rem' }}>
                <div><strong>Input:</strong> <code>{ex.input}</code></div>
                <div><strong>Output:</strong> <code>{ex.output}</code></div>
                {ex.explanation && (
                  <div style={{ color: 'var(--text-dim)', marginTop: '0.25rem' }}>
                    <strong>Explanation:</strong> {ex.explanation}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Constraints */}
          <div style={{ marginBottom: '1.25rem' }}>
            <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>Constraints:</h4>
            <ul style={{ paddingLeft: '1.2rem', fontSize: '0.82rem', color: 'var(--text-dim)' }}>
              {currentProblem.constraints.map((c, i) => (
                <li key={i}><code>{c}</code></li>
              ))}
            </ul>
          </div>

          {/* Complexity Target */}
          <div style={{ background: 'rgba(99, 102, 241, 0.08)', border: '1px solid rgba(99, 102, 241, 0.2)', padding: '0.75rem', borderRadius: 'var(--radius-md)', fontSize: '0.82rem', marginBottom: '1.25rem' }}>
            <div><strong>Target Time:</strong> <code style={{ color: '#a5b4fc' }}>{currentProblem.timeComplexity}</code></div>
            <div><strong>Target Space:</strong> <code style={{ color: '#a5b4fc' }}>{currentProblem.spaceComplexity}</code></div>
          </div>

          {/* Hints Accordion */}
          <div style={{ marginBottom: '0.75rem' }}>
            <button
              className="btn-secondary"
              style={{ width: '100%', justifyContent: 'space-between', padding: '0.5rem 0.85rem', fontSize: '0.82rem' }}
              onClick={() => setShowHints(!showHints)}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Lightbulb size={15} color="var(--accent-amber)" />
                Hints ({currentProblem.hints.length})
              </span>
              {showHints ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
            </button>
            {showHints && (
              <div style={{ background: 'var(--bg-surface-elevated)', padding: '0.75rem', borderRadius: '0 0 var(--radius-md) var(--radius-md)', fontSize: '0.82rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {currentProblem.hints.map((hint, i) => (
                  <div key={i}>• {hint}</div>
                ))}
              </div>
            )}
          </div>

          {/* Solution Code Toggle */}
          <div>
            <button
              className="btn-secondary"
              style={{ width: '100%', justifyContent: 'space-between', padding: '0.5rem 0.85rem', fontSize: '0.82rem' }}
              onClick={() => setShowSolution(!showSolution)}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <BookOpen size={15} color="var(--accent-cyan)" />
                Reference Optimal Solution
              </span>
              {showSolution ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
            </button>
            {showSolution && (
              <div style={{ background: 'var(--bg-surface-elevated)', padding: '0.75rem', borderRadius: '0 0 var(--radius-md) var(--radius-md)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <button
                  className="btn-secondary"
                  style={{ alignSelf: 'flex-start', padding: '0.3rem 0.6rem', fontSize: '0.75rem' }}
                  onClick={handleLoadSolution}
                >
                  <Copy size={12} />
                  Load Solution into Editor
                </button>
                <pre style={{ fontSize: '0.75rem', color: '#67e8f9', background: '#0a0d14', padding: '0.5rem', borderRadius: '4px', overflowX: 'auto' }}>
                  {currentProblem.solutionCodeJs}
                </pre>
              </div>
            )}
          </div>
        </div>

        {/* Right: Code Editor & Test Case Results */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '720px' }}>
          {/* Editor Container */}
          <div className="code-window" style={{ flex: '1 1 55%' }}>
            <div className="code-window-header">
              <div className="window-dots">
                <span className="window-dot red" />
                <span className="window-dot yellow" />
                <span className="window-dot green" />
              </div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                {currentProblem.id}.{language === 'javascript' ? 'js' : 'py'}
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
                {language.toUpperCase()}
              </span>
            </div>

            <textarea
              className="code-editor-textarea"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              spellCheck={false}
              placeholder="// Write your algorithmic code here..."
            />
          </div>

          {/* Test Case & Console Results Pane */}
          <div className="glass-card" style={{ flex: '1 1 45%', display: 'flex', flexDirection: 'column', padding: '1rem' }}>
            {/* Header Tabs */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  className={`nav-tab-btn ${activeTab === 'testcases' ? 'active' : ''}`}
                  style={{ padding: '0.3rem 0.75rem', fontSize: '0.8rem' }}
                  onClick={() => setActiveTab('testcases')}
                >
                  Test Results {testResults.ran && (testResults.allPassed ? '✓ (Passed)' : '✗ (Failed)')}
                </button>
                <button
                  className={`nav-tab-btn ${activeTab === 'console' ? 'active' : ''}`}
                  style={{ padding: '0.3rem 0.75rem', fontSize: '0.8rem' }}
                  onClick={() => setActiveTab('console')}
                >
                  <Terminal size={13} />
                  Console Logs ({testResults.logs.length})
                </button>
              </div>

              {testResults.ran && testResults.allPassed && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ fontSize: '0.75rem', color: '#34d399', fontWeight: 600 }}>Record Memory:</span>
                  <button className="btn-secondary" style={{ padding: '0.2rem 0.5rem', fontSize: '0.7rem' }} onClick={() => onGradeProblem(currentProblem.id, 3)}>
                    Good (3d)
                  </button>
                  <button className="btn-primary" style={{ padding: '0.2rem 0.5rem', fontSize: '0.7rem' }} onClick={() => onGradeProblem(currentProblem.id, 5)}>
                    Mastered (14d+)
                  </button>
                </div>
              )}
            </div>

            {/* Test Case Content Area */}
            <div style={{ flex: 1, overflowY: 'auto' }}>
              {activeTab === 'testcases' && (
                <div>
                  {!testResults.ran ? (
                    <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-dim)', fontSize: '0.85rem' }}>
                      Click <strong>"Run Test Cases"</strong> to evaluate your code against automated test inputs.
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                      {testResults.results.map((res) => (
                        <div
                          key={res.index}
                          style={{
                            background: res.passed ? 'rgba(16, 185, 129, 0.08)' : 'rgba(244, 63, 94, 0.08)',
                            border: `1px solid ${res.passed ? 'rgba(16, 185, 129, 0.25)' : 'rgba(244, 63, 94, 0.25)'}`,
                            borderRadius: 'var(--radius-md)',
                            padding: '0.7rem',
                            fontSize: '0.8rem'
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.3rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600 }}>
                              {res.passed ? (
                                <CheckCircle2 size={15} color="#34d399" />
                              ) : (
                                <XCircle size={15} color="#fb7185" />
                              )}
                              <span>Case {res.index}</span>
                            </div>
                            <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>{res.executionTimeMs} ms</span>
                          </div>

                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
                            <div>
                              <span style={{ color: 'var(--text-dim)', display: 'block' }}>Input:</span>
                              <div style={{ color: '#e2e8f0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{res.input}</div>
                            </div>
                            <div>
                              <span style={{ color: 'var(--text-dim)', display: 'block' }}>Expected:</span>
                              <div style={{ color: '#34d399' }}>{res.expected}</div>
                            </div>
                            <div>
                              <span style={{ color: 'var(--text-dim)', display: 'block' }}>Output:</span>
                              <div style={{ color: res.passed ? '#34d399' : '#fb7185' }}>{res.actual}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'console' && (
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', background: '#090d16', padding: '0.75rem', borderRadius: 'var(--radius-md)', minHeight: '120px' }}>
                  {testResults.logs.length === 0 ? (
                    <span style={{ color: 'var(--text-dim)' }}>// No console output captured</span>
                  ) : (
                    testResults.logs.map((log, i) => (
                      <div key={i} style={{ color: log.startsWith('[ERROR]') ? '#fb7185' : '#a5b4fc', marginBottom: '0.2rem' }}>
                        {log}
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {testResults.allPassed && (
        <div className="glass-card" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <MessageSquare size={20} color="var(--accent-primary)" />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Explain it Back</h3>
            </div>
            <button className="btn btn-secondary" style={{ padding: '0.4rem 0.75rem' }} onClick={() => setShowExplainBack(!showExplainBack)}>
              {showExplainBack ? 'Hide' : 'Show'}
            </button>
          </div>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
            Explain your solution to a beginner. After that, you'll get a twist question!
          </p>
          {showExplainBack && (
            <div>
              <textarea
                value={explanation}
                onChange={(e) => setExplanation(e.target.value)}
                placeholder="Explain your approach, algorithm, time/space complexity, and walk through an example..."
                style={{
                  width: '100%',
                  minHeight: '120px',
                  padding: '0.75rem',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--text-primary)',
                  fontSize: '0.9rem',
                  fontFamily: 'inherit',
                  resize: 'vertical'
                }}
              />
              <button className="btn btn-primary" style={{ marginTop: '0.75rem' }} onClick={handleExplainBack} disabled={!explanation.trim()}>
                Evaluate Explanation
              </button>

              {explainResult && (
                <div style={{ marginTop: '1rem', padding: '1rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h4 style={{ fontWeight: 600 }}>Score: {explainResult.score}/100</h4>
                  </div>
                  {explainResult.strengths.length > 0 && (
                    <div style={{ marginBottom: '0.75rem' }}>
                      <p style={{ color: 'var(--accent-success)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Strengths:</p>
                      <ul style={{ paddingLeft: '1.25rem' }}>
                        {explainResult.strengths.map((s: string, i: number) => (
                          <li key={i} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{s}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {explainResult.improvements.length > 0 && (
                    <div style={{ marginBottom: '0.75rem' }}>
                      <p style={{ color: 'var(--accent-warning)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Improvements:</p>
                      <ul style={{ paddingLeft: '1.25rem' }}>
                        {explainResult.improvements.map((imp: string, i: number) => (
                          <li key={i} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{imp}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div style={{ padding: '0.75rem', background: 'rgba(99, 102, 241, 0.1)', borderRadius: 'var(--radius-md)', border: '1px solid var(--accent-primary)' }}>
                    <p style={{ fontWeight: 600, marginBottom: '0.5rem', color: 'var(--accent-primary)' }}>Twist Question:</p>
                    <p style={{ color: 'var(--text-secondary)' }}>{explainResult.twistQuestion}</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

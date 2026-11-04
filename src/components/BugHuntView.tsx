import React, { useState } from 'react';
import { bugHuntProblems } from '../data/bugHuntData';
import { Bug, CheckCircle, Lightbulb, Play } from 'lucide-react';
import Editor from '@monaco-editor/react';

export const BugHuntView: React.FC = () => {
  const [selectedBug, setSelectedBug] = useState(bugHuntProblems[0]);
  const [code, setCode] = useState(selectedBug.buggyCode);
  const [showHints, setShowHints] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [solved, setSolved] = useState(false);

  const handleSelectBug = (bug: typeof bugHuntProblems[0]) => {
    setSelectedBug(bug);
    setCode(bug.buggyCode);
    setShowHints(false);
    setShowSolution(false);
    setSolved(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div className="glass-card" style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <Bug size={24} color="var(--accent-danger)" />
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Bug Hunt Mode</h2>
        </div>
        <p style={{ color: 'var(--text-muted)' }}>
          Find and fix hidden bugs in working-looking code. This mirrors real debugging interviews.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '1.5rem' }}>
        <div className="glass-card" style={{ padding: '1rem' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>BUG HUNTS</h3>
          {bugHuntProblems.map((bug) => (
            <button
              key={bug.id}
              onClick={() => handleSelectBug(bug)}
              style={{
                width: '100%',
                textAlign: 'left',
                padding: '0.75rem',
                marginBottom: '0.5rem',
                background: selectedBug.id === bug.id ? 'rgba(239, 68, 68, 0.1)' : 'transparent',
                border: selectedBug.id === bug.id ? '1px solid var(--accent-danger)' : '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--text-primary)',
                cursor: 'pointer'
              }}
            >
              {bug.title}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem' }}>{selectedBug.title}</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>{selectedBug.description}</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Expected: {selectedBug.expectedBehavior}</p>
          </div>

          <div className="glass-card" style={{ overflow: 'hidden' }}>
            <div style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 600 }}>Buggy Code</span>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button className="btn btn-secondary" style={{ padding: '0.4rem 0.75rem' }} onClick={() => setShowHints(!showHints)}>
                  <Lightbulb size={14} /> {showHints ? 'Hide' : 'Show'} Hints
                </button>
                <button className="btn btn-secondary" style={{ padding: '0.4rem 0.75rem' }} onClick={() => setShowSolution(!showSolution)}>
                  <CheckCircle size={14} /> {showSolution ? 'Hide' : 'Show'} Solution
                </button>
              </div>
            </div>
            <Editor
              height="400px"
              language="javascript"
              theme="vs-dark"
              value={code}
              onChange={(value) => setCode(value || '')}
              options={{
                fontSize: 14,
                minimap: { enabled: false },
                scrollBeyondLastLine: false
              }}
            />
          </div>

          {showHints && (
            <div className="glass-card" style={{ padding: '1rem', background: 'rgba(251, 191, 36, 0.1)', border: '1px solid var(--accent-warning)' }}>
              <h4 style={{ marginBottom: '0.75rem', color: 'var(--accent-warning)' }}>Hints</h4>
              <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {selectedBug.hints.map((hint, i) => (
                  <li key={i} style={{ color: 'var(--text-secondary)' }}>{hint}</li>
                ))}
              </ul>
            </div>
          )}

          {showSolution && (
            <div className="glass-card" style={{ padding: '1rem', background: 'rgba(34, 197, 94, 0.1)', border: '1px solid var(--accent-success)' }}>
              <h4 style={{ marginBottom: '0.75rem', color: 'var(--accent-success)' }}>Solution Explanation</h4>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>{selectedBug.solutionExplanation}</p>
              <div style={{ padding: '0.75rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-md)' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Bugs found:</p>
                <ul style={{ paddingLeft: '1.25rem' }}>
                  {selectedBug.bugs.map((bug, i) => (
                    <li key={i} style={{ color: 'var(--text-secondary)' }}>{bug}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

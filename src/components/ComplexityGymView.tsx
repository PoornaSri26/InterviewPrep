import React, { useState } from 'react';
import { complexityDrills } from '../data/complexityGymData';
import { BarChart3, CheckCircle, XCircle, ChevronRight } from 'lucide-react';
import Editor from '@monaco-editor/react';

export const ComplexityGymView: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeAnswer, setTimeAnswer] = useState('');
  const [spaceAnswer, setSpaceAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const drill = complexityDrills[currentIndex];

  const checkAnswer = () => {
    const timeCorrect = timeAnswer.trim().toLowerCase() === drill.expectedTime.toLowerCase();
    const spaceCorrect = spaceAnswer.trim().toLowerCase() === drill.expectedSpace.toLowerCase();
    if (timeCorrect && spaceCorrect) setScore(score + 1);
    setShowResult(true);
  };

  const nextDrill = () => {
    if (currentIndex < complexityDrills.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setTimeAnswer('');
      setSpaceAnswer('');
      setShowResult(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div className="glass-card" style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <BarChart3 size={24} color="var(--accent-secondary)" />
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Complexity Gym</h2>
            </div>
            <p style={{ color: 'var(--text-muted)' }}>
              Quick drills to master Big O analysis
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Score</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-success)' }}>{score} / {complexityDrills.length}</div>
          </div>
        </div>
      </div>

      <div className="glass-card" style={{ padding: '1.5rem' }}>
        <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Question {currentIndex + 1} of {complexityDrills.length}</h3>
        </div>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '1.05rem' }}>{drill.question}</p>

        <div className="glass-card" style={{ overflow: 'hidden', marginBottom: '1.5rem' }}>
          <Editor
            height="250px"
            language={drill.language}
            theme="vs-dark"
            value={drill.code}
            options={{
              readOnly: true,
              fontSize: 14,
              minimap: { enabled: false },
              scrollBeyondLastLine: false
            }}
          />
        </div>

        {!showResult ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Time Complexity</label>
              <input
                type="text"
                value={timeAnswer}
                onChange={(e) => setTimeAnswer(e.target.value)}
                placeholder="e.g., O(n), O(log n), O(n²)"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--text-primary)',
                  fontSize: '0.95rem'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Space Complexity</label>
              <input
                type="text"
                value={spaceAnswer}
                onChange={(e) => setSpaceAnswer(e.target.value)}
                placeholder="e.g., O(1), O(n)"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--text-primary)',
                  fontSize: '0.95rem'
                }}
              />
            </div>
            <button className="btn btn-primary" onClick={checkAnswer} style={{ alignSelf: 'flex-start' }}>
              Check Answer
            </button>
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', gap: '2rem', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {timeAnswer.trim().toLowerCase() === drill.expectedTime.toLowerCase() ? 
                  <CheckCircle size={20} color="var(--accent-success)" /> : 
                  <XCircle size={20} color="var(--accent-danger)" />
                }
                <span>Time: {drill.expectedTime}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {spaceAnswer.trim().toLowerCase() === drill.expectedSpace.toLowerCase() ? 
                  <CheckCircle size={20} color="var(--accent-success)" /> : 
                  <XCircle size={20} color="var(--accent-danger)" />
                }
                <span>Space: {drill.expectedSpace}</span>
              </div>
            </div>
            <div style={{ padding: '1rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }}>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{drill.explanation}</p>
            </div>
            {currentIndex < complexityDrills.length - 1 && (
              <button className="btn btn-primary" onClick={nextDrill}>
                Next Drill <ChevronRight size={16} />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { dsaPatterns } from '../data/patternsData';
import { BrainCircuit, ChevronRight, Lightbulb, Target, Clock, Database } from 'lucide-react';

export const PatternLearningView: React.FC = () => {
  const [selectedPattern, setSelectedPattern] = useState(dsaPatterns[0]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div className="glass-card" style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <BrainCircuit size={24} color="var(--accent-primary)" />
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Pattern-First Learning</h2>
        </div>
        <p style={{ color: 'var(--text-muted)' }}>
          Learn to recognize patterns, not memorize solutions. Master 15 core patterns with recognition tips.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '1.5rem' }}>
        <div className="glass-card" style={{ padding: '1rem', maxHeight: '70vh', overflowY: 'auto' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>PATTERNS</h3>
          {dsaPatterns.map((pattern) => (
            <button
              key={pattern.id}
              onClick={() => setSelectedPattern(pattern)}
              style={{
                width: '100%',
                textAlign: 'left',
                padding: '0.75rem',
                marginBottom: '0.5rem',
                background: selectedPattern.id === pattern.id ? 'var(--accent-primary-glow)' : 'transparent',
                border: selectedPattern.id === pattern.id ? '1px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span>{pattern.name}</span>
              <ChevronRight size={16} />
            </button>
          ))}
        </div>

        <div className="glass-card" style={{ padding: '2rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem' }}>{selectedPattern.name}</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '2rem', lineHeight: 1.7 }}>
            {selectedPattern.description}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
            <div style={{ padding: '1rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <Lightbulb size={18} color="var(--accent-warning)" />
                <h3 style={{ fontWeight: 600 }}>Recognition Tips</h3>
              </div>
              <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {selectedPattern.recognitionTips.map((tip, i) => (
                  <li key={i} style={{ color: 'var(--text-secondary)' }}>{tip}</li>
                ))}
              </ul>
            </div>

            <div style={{ padding: '1rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <Target size={18} color="var(--accent-primary)" />
                <h3 style={{ fontWeight: 600 }}>When to Use</h3>
              </div>
              <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {selectedPattern.whenToUse.map((use, i) => (
                  <li key={i} style={{ color: 'var(--text-secondary)' }}>{use}</li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '2rem', padding: '1rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Clock size={18} color="var(--accent-success)" />
              <span style={{ color: 'var(--text-muted)' }}>Time:</span>
              <span style={{ fontWeight: 600 }}>{selectedPattern.timeComplexityTypical}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Database size={18} color="var(--accent-secondary)" />
              <span style={{ color: 'var(--text-muted)' }}>Space:</span>
              <span style={{ fontWeight: 600 }}>{selectedPattern.spaceComplexityTypical}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

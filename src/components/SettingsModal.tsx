import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Upload, 
  RotateCcw, 
  Key, 
  Sparkles, 
  ShieldAlert,
  Keyboard
} from 'lucide-react';
import { Problem, MockInterviewSession, StarStory, RoadmapWeek, Flashcard, OfferPackage, SolutionMap } from '../types';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  problems: Problem[];
  mocks: MockInterviewSession[];
  starStories: StarStory[];
  roadmap: RoadmapWeek[];
  flashcards: Flashcard[];
  offers: OfferPackage[];
  solutions: SolutionMap;
  onResetAllData: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  problems,
  mocks,
  starStories,
  roadmap,
  flashcards,
  offers,
  solutions,
  onResetAllData
}) => {
  const [apiKey, setApiKey] = useState(() => localStorage.getItem('interview_os_gemini_key') || '');
  const [savedKeyMsg, setSavedKeyMsg] = useState(false);

  if (!isOpen) return null;

  const handleSaveApiKey = () => {
    localStorage.setItem('interview_os_gemini_key', apiKey.trim());
    setSavedKeyMsg(true);
    setTimeout(() => setSavedKeyMsg(false), 2500);
  };

  const handleExportJson = () => {
    const fullBackup = {
      version: '1.0',
      exportedAt: new Date().toISOString(),
      problems,
      mocks,
      starStories,
      roadmap,
      flashcards,
      offers,
      solutions
    };

    const blob = new Blob([JSON.stringify(fullBackup, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `InterviewMaster-Backup-${Date.now()}.json`;
    a.click();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '580px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
          <h3 style={{ fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sparkles size={18} color="var(--accent-primary)" />
            InterviewMaster OS Settings & Data
          </h3>
          <button className="btn-icon" onClick={onClose}>
            <X size={16} />
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Optional Gemini API Key */}
          <div style={{ background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-subtle)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
            <h4 style={{ fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
              <Key size={15} color="var(--accent-cyan)" />
              Optional Google Gemini API Key
            </h4>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginBottom: '0.75rem' }}>
              Built-in AI simulations and Web Speech API work automatically with zero key required. If you wish to connect your personal Gemini Pro/Flash API for live streaming generation, enter your key below:
            </p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="password"
                className="search-input"
                style={{ borderRadius: 'var(--radius-sm)', padding: '0.5rem 0.8rem', fontSize: '0.85rem' }}
                placeholder="AIzaSy..."
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
              />
              <button className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }} onClick={handleSaveApiKey}>
                {savedKeyMsg ? 'Saved ✓' : 'Save'}
              </button>
            </div>
          </div>

          {/* Export / Backup */}
          <div>
            <h4 style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>Backup & Portability</h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
              Export all your progress: solved test cases, SRS problem and flashcard schedules, STAR stories, mock history, roadmap and tracked offers.
            </p>
            <button className="btn-secondary" style={{ width: '100%', padding: '0.65rem' }} onClick={handleExportJson}>
              <Download size={15} />
              Export Full Prep Archive (.JSON)
            </button>
          </div>

          {/* Keyboard Shortcuts */}
          <div>
            <h4 style={{ fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
              <Keyboard size={15} color="var(--accent-amber)" />
              Developer Shortcuts
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem', fontSize: '0.78rem' }}>
              <div style={{ background: 'var(--bg-surface-elevated)', padding: '0.5rem', borderRadius: '4px', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Submit Answer</span>
                <code>Enter</code>
              </div>
              <div style={{ background: 'var(--bg-surface-elevated)', padding: '0.5rem', borderRadius: '4px', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>New Line</span>
                <code>Shift + Enter</code>
              </div>
              <div style={{ background: 'var(--bg-surface-elevated)', padding: '0.5rem', borderRadius: '4px', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Voice Dictation</span>
                <code>Mic Button</code>
              </div>
              <div style={{ background: 'var(--bg-surface-elevated)', padding: '0.5rem', borderRadius: '4px', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Auto Run Tests</span>
                <code>Run Code</code>
              </div>
            </div>
          </div>

          {/* Reset Danger Zone */}
          <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h5 style={{ fontSize: '0.85rem', color: '#fb7185' }}>Reset All Progress</h5>
              <p style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>Restores default problems and clears streak.</p>
            </div>
            <button
              className="btn-secondary"
              style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem', borderColor: 'rgba(244, 63, 94, 0.4)', color: '#fb7185' }}
              onClick={() => {
                if (confirm('Are you sure you want to reset all stored mock interviews and problem states?')) {
                  onResetAllData();
                  onClose();
                }
              }}
            >
              <RotateCcw size={13} />
              Reset All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { Clock, Play, Pause, RotateCcw } from 'lucide-react';

export const StudyTimer: React.FC = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState<'work' | 'break'>('work');

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          if (mode === 'work') {
            setMode('break');
            setMinutes(5);
            setSeconds(0);
          } else {
            setMode('work');
            setMinutes(25);
            setSeconds(0);
          }
          setIsActive(false);
        }
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      if (interval) clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, seconds, minutes, mode]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMode('work');
    setMinutes(25);
    setSeconds(0);
  };

  const totalSeconds = mode === 'work' ? 25 * 60 : 5 * 60;
  const currentSeconds = minutes * 60 + seconds;
  const progress = ((totalSeconds - currentSeconds) / totalSeconds) * 100;

  return (
    <div className="glass-card" style={{ padding: '1.25rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
        <Clock size={20} color={mode === 'work' ? 'var(--accent-primary)' : 'var(--accent-success)'} />
        <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>
          {mode === 'work' ? 'Focus Time' : 'Break Time'}
        </h3>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <div style={{ fontSize: '2.5rem', fontWeight: 700, fontFamily: 'var(--font-mono)', marginBottom: '0.5rem' }}>
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </div>
        <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden', marginBottom: '1rem' }}>
          <div
            style={{
              height: '100%',
              width: `${progress}%`,
              background: mode === 'work' ? 'var(--accent-primary)' : 'var(--accent-success)',
              transition: 'width 1s linear'
            }}
          />
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
          <button className="btn-primary" onClick={toggleTimer} style={{ padding: '0.5rem 1rem' }}>
            {isActive ? <Pause size={16} /> : <Play size={16} />}
            {isActive ? 'Pause' : 'Start'}
          </button>
          <button className="btn-secondary" onClick={resetTimer} style={{ padding: '0.5rem 1rem' }}>
            <RotateCcw size={16} />
            Reset
          </button>
        </div>
      </div>
      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center' }}>
        Pomodoro Technique: 25 min work / 5 min break
      </div>
    </div>
  );
};

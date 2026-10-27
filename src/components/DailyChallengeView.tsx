import React, { useEffect, useMemo, useState } from 'react';
import { Problem, DailyChallenge } from '../types';
import {
  CalendarCheck,
  Timer,
  Play,
  Pause,
  CheckCircle2,
  Code2,
  Flame,
  History
} from 'lucide-react';
import confetti from 'canvas-confetti';
import {
  getTodaysChallenge,
  getDailyChallengeHistory,
  saveDailyChallenge
} from '../services/storage';

interface DailyChallengeViewProps {
  problems: Problem[];
  onSolveProblem: (problemId: string) => void;
}

const fmtElapsed = (s: number) =>
  `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

const diffBadge = (d: string) =>
  d === 'Easy' ? 'badge badge-easy' : d === 'Hard' ? 'badge badge-hard' : 'badge badge-medium';

export const DailyChallengeView: React.FC<DailyChallengeViewProps> = ({
  problems,
  onSolveProblem
}) => {
  const [challenge, setChallenge] = useState<DailyChallenge>(() => getTodaysChallenge(problems));
  const [history, setHistory] = useState<DailyChallenge[]>(() => getDailyChallengeHistory());
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);

  const problem = useMemo(
    () => problems.find((p) => p.id === challenge.problemId),
    [problems, challenge.problemId]
  );

  // Timer tick
  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => window.clearInterval(id);
  }, [running]);

  const totalCompleted = history.filter((h) => h.completed).length;

  // Current completion streak (consecutive days back from today or yesterday)
  const streak = useMemo(() => {
    const doneDates = new Set(history.filter((h) => h.completed).map((h) => h.date));
    let count = 0;
    const cursor = new Date();
    if (!doneDates.has(cursor.toISOString().split('T')[0])) {
      cursor.setDate(cursor.getDate() - 1); // today not done yet — streak may still be alive
    }
    while (doneDates.has(cursor.toISOString().split('T')[0])) {
      count++;
      cursor.setDate(cursor.getDate() - 1);
    }
    return count;
  }, [history]);

  const handleComplete = () => {
    if (!problem) return;
    const updated: DailyChallenge = {
      ...challenge,
      problemId: problem.id,
      completed: true,
      timeTakenMinutes: Math.max(1, Math.round(elapsed / 60))
    };
    setChallenge(updated);
    setHistory(saveDailyChallenge(updated));
    setRunning(false);
    confetti({ particleCount: 90, spread: 65, origin: { y: 0.7 } });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Banner */}
      <div className="glass-card" style={{ background: 'linear-gradient(135deg, rgba(244, 63, 94, 0.13), rgba(245, 158, 11, 0.1))', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', padding: '2rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
            <span className="badge badge-primary">
              <CalendarCheck size={12} /> Daily Challenge
            </span>
            <span className="badge badge-medium">{challenge.date}</span>
          </div>
          <h2 style={{ fontSize: '1.75rem' }}>Problem of the Day</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '640px' }}>
            One deterministic problem every day — same pick for everyone, seeded by the date. Keep the streak alive.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ background: 'var(--bg-surface-elevated)', padding: '0.85rem 1.1rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(245, 158, 11, 0.3)', textAlign: 'center', minWidth: '110px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem', color: '#fbbf24', fontSize: '1.35rem', fontWeight: 800 }}>
              <Flame size={18} /> {streak}
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Day Streak</div>
          </div>
          <div style={{ background: 'var(--bg-surface-elevated)', padding: '0.85rem 1.1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', textAlign: 'center', minWidth: '110px' }}>
            <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#34d399' }}>{totalCompleted}</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Completed</div>
          </div>
        </div>
      </div>

      <div className="grid-2" style={{ gap: '1.5rem', alignItems: 'start' }}>
        {/* Today's Problem */}
        <div className="glass-card" style={{ borderColor: challenge.completed ? 'rgba(16, 185, 129, 0.4)' : undefined }}>
          {problem ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <span className={diffBadge(problem.difficulty)}>{problem.difficulty}</span>
                    <span className="badge badge-cyan">{problem.category}</span>
                    {challenge.completed && (
                      <span className="badge badge-easy">
                        <CheckCircle2 size={12} /> Done
                      </span>
                    )}
                  </div>
                  <h3 style={{ fontSize: '1.35rem' }}>{problem.title}</h3>
                </div>
                {challenge.completed && challenge.timeTakenMinutes !== undefined && (
                  <div style={{ textAlign: 'right', fontSize: '0.78rem', color: 'var(--text-dim)' }}>
                    Solved in
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#34d399' }}>{challenge.timeTakenMinutes} min</div>
                  </div>
                )}
              </div>

              <p style={{ fontSize: '0.87rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {problem.description.length > 320 ? `${problem.description.slice(0, 320)}…` : problem.description}
              </p>

              {problem.constraints.length > 0 && (
                <ul style={{ fontSize: '0.78rem', color: 'var(--text-dim)', paddingLeft: '1.1rem', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  {problem.constraints.slice(0, 3).map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              )}

              {/* Timer Row */}
              <div style={{ background: 'var(--bg-surface-elevated)', borderRadius: 'var(--radius-md)', padding: '0.9rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                  <Timer size={18} color={running ? '#fb7185' : 'var(--text-dim)'} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.35rem', fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>
                    {fmtElapsed(elapsed)}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    className={running ? 'btn-secondary' : 'btn-primary'}
                    style={{ padding: '0.45rem 0.9rem', fontSize: '0.8rem' }}
                    onClick={() => setRunning((r) => !r)}
                    disabled={challenge.completed}
                  >
                    {running ? <><Pause size={14} /> Pause</> : <><Play size={14} /> {elapsed > 0 ? 'Resume' : 'Start Timer'}</>}
                  </button>
                  <button
                    className="btn-secondary"
                    style={{ padding: '0.45rem 0.9rem', fontSize: '0.8rem' }}
                    onClick={() => onSolveProblem(problem.id)}
                  >
                    <Code2 size={14} /> Open in Sandbox
                  </button>
                  <button
                    className="btn-success"
                    style={{ padding: '0.45rem 0.9rem', fontSize: '0.8rem', opacity: challenge.completed ? 0.55 : 1 }}
                    onClick={handleComplete}
                    disabled={challenge.completed}
                  >
                    <CheckCircle2 size={14} /> {challenge.completed ? 'Completed' : 'Mark Complete'}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '2rem 0' }}>
              No problems available for today's challenge yet.
            </p>
          )}
        </div>

        {/* History */}
        <div className="glass-card">
          <h3 style={{ fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <History size={16} color="var(--accent-cyan)" /> Recent History
          </h3>
          {history.length === 0 ? (
            <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>
              Complete today's challenge to start your history.
            </p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              {history.slice(0, 10).map((h) => {
                const p = problems.find((x) => x.id === h.problemId);
                return (
                  <div
                    key={h.date}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '0.6rem',
                      padding: '0.55rem 0.7rem',
                      background: h.completed ? 'rgba(16, 185, 129, 0.06)' : 'var(--bg-surface-elevated)',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.82rem', color: '#fff' }}>{p?.title ?? 'Unknown problem'}</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>
                        {h.date}
                        {h.timeTakenMinutes !== undefined && ` · ${h.timeTakenMinutes} min`}
                      </div>
                    </div>
                    {h.completed ? (
                      <CheckCircle2 size={16} color="#34d399" />
                    ) : h.date === new Date().toISOString().split('T')[0] ? (
                      <span className="badge badge-cyan" style={{ fontSize: '0.65rem' }}>in progress</span>
                    ) : (
                      <span className="badge badge-medium" style={{ fontSize: '0.65rem' }}>skipped</span>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

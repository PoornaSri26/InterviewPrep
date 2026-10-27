import React, { useMemo } from 'react';
import { RoadmapWeek } from '../types';
import { RepoRoadmapsFile, RepoPlan } from '../types/minedContent';
import { 
  Compass, 
  CheckCircle2, 
  Circle, 
  ExternalLink, 
  Calendar,
  Layers,
  Sparkles,
  BookOpen,
  Star,
  FolderGit2
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface RoadmapViewProps {
  roadmap: RoadmapWeek[];
  onToggleMilestone: (weekNum: number, milestoneId: string) => void;
  repoPlans?: RepoRoadmapsFile | null;
}

/** Keywords that tie a week's focus to a mined study-plan repo. */
const WEEK_KEYWORDS: Record<number, string[]> = {
  1: ['dsa', 'data structure', 'algorithm', 'array', 'string', 'two pointer', 'sliding window', 'leetcode', 'coding interview', 'problem'],
  3: ['tree', 'graph', 'dynamic programming', 'dp', 'recursion', 'backtracking', 'heap', 'binary search', 'dsa', 'algorithm'],
  5: ['system design', 'scalability', 'distributed', 'high level', 'hld', 'architecture', 'load balanc', 'cache', 'database'],
  6: ['operating system', 'network', 'dbms', 'sql', 'concurrency', 'low level', 'lld', 'design pattern', 'oop', 'cs fundamental'],
  7: ['behavioral', 'star', 'leadership', 'negotiation', 'salary', 'resume', 'career'],
  8: ['mock', 'interview', 'practice', 'simulation', 'leetcode', 'coding']
};

const scorePlan = (plan: RepoPlan, keywords: string[]) => {
  const hay = `${plan.name} ${plan.repo} ${plan.summary} ${plan.sections.join(' ')}`.toLowerCase();
  let score = 0;
  for (const kw of keywords) if (hay.includes(kw)) score++;
  return score;
};

export const RoadmapView: React.FC<RoadmapViewProps> = ({
  roadmap,
  onToggleMilestone,
  repoPlans = null
}) => {
  const completedMilestones = roadmap.flatMap((w) => w.milestones).filter((m) => m.completed).length;
  const totalMilestones = roadmap.flatMap((w) => w.milestones).length;
  const percent = Math.round((completedMilestones / (totalMilestones || 1)) * 100);

  // Match each week to the most relevant mined study plans (top 3, score >= 2)
  const weekPlans = useMemo(() => {
    const map: Record<number, RepoPlan[]> = {};
    if (!repoPlans) return map;
    for (const week of roadmap) {
      const kws = WEEK_KEYWORDS[week.weekNumber] || [];
      const scored = repoPlans.plans
        .map((p) => ({ p, s: scorePlan(p, kws) }))
        .filter((x) => x.s >= 2)
        .sort((a, b) => b.s - a.s || b.p.stars - a.p.stars)
        .slice(0, 3)
        .map((x) => x.p);
      if (scored.length) map[week.weekNumber] = scored;
    }
    return map;
  }, [roadmap, repoPlans]);

  const handleToggle = (weekNum: number, milestoneId: string, currentStatus: boolean) => {
    onToggleMilestone(weekNum, milestoneId);
    if (!currentStatus) {
      confetti({ particleCount: 40, spread: 50, origin: { y: 0.8 } });
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Top Banner */}
      <div className="glass-card" style={{ background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(16, 185, 129, 0.1))', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', padding: '2rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
            <span className="badge badge-primary">
              <Compass size={12} />
              8-Week FAANG Master Curriculum
            </span>
            <span className="badge badge-easy">{percent}% Completed</span>
          </div>
          <h2 style={{ fontSize: '1.75rem' }}>Full-Cycle Technical Interview Roadmap</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '650px' }}>
            A structured week-by-week timeline progressing from Core DSA through System Design, CS Fundamentals, Behavioral Stories, to Live Mocks.
          </p>
        </div>

        <div style={{ minWidth: '220px', background: 'var(--bg-surface-elevated)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
            <span>Milestones Mastered:</span>
            <strong>{completedMilestones} / {totalMilestones}</strong>
          </div>
          <div style={{ height: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '10px' }}>
            <div style={{ width: `${percent}%`, height: '100%', background: 'linear-gradient(90deg, #6366f1, #10b981)', borderRadius: '10px', transition: 'width 0.3s ease' }} />
          </div>
        </div>
      </div>

      {/* Timeline Grid */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {roadmap.map((week) => {
          const weekCompleted = week.milestones.every((m) => m.completed);
          return (
            <div
              key={week.weekNumber}
              className="glass-card"
              style={{
                borderColor: weekCompleted ? 'rgba(16, 185, 129, 0.35)' : undefined,
                background: weekCompleted ? 'rgba(16, 185, 129, 0.04)' : undefined
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <span className="badge badge-cyan">{week.title}</span>
                    {weekCompleted && (
                      <span className="badge badge-easy">
                        <CheckCircle2 size={12} /> Week Complete!
                      </span>
                    )}
                  </div>
                  <h3 style={{ fontSize: '1.2rem' }}>Focus: {week.focus}</h3>
                </div>
              </div>

              {/* Topics & Resources */}
              <div className="grid-2" style={{ marginBottom: '1rem' }}>
                <div>
                  <h4 style={{ fontSize: '0.82rem', color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                    Core Concepts to Master
                  </h4>
                  <ul style={{ paddingLeft: '1.2rem', fontSize: '0.82rem', color: 'var(--text-main)', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    {week.topics.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 style={{ fontSize: '0.82rem', color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                    Curated Materials
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {week.resources.map((res, i) => (
                      <a
                        key={i}
                        href={res.url}
                        target="_blank"
                        rel="noreferrer"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', color: '#a5b4fc', textDecoration: 'none' }}
                      >
                        <ExternalLink size={12} />
                        {res.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Repo study-plan cross-links */}
              {weekPlans[week.weekNumber] && (
                <div style={{ marginBottom: '1rem', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '0.75rem 0.9rem', background: 'rgba(99, 102, 241, 0.04)' }}>
                  <h4 style={{ fontSize: '0.82rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <FolderGit2 size={13} /> Matching GitHub Study Plans
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {weekPlans[week.weekNumber].map((plan) => (
                      <a
                        key={plan.id}
                        href={plan.url}
                        target="_blank"
                        rel="noreferrer"
                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: '#67e8f9', textDecoration: 'none' }}
                      >
                        <BookOpen size={12} />
                        <span style={{ fontWeight: 600 }}>{plan.name}</span>
                        <span style={{ color: 'var(--text-dim)', fontSize: '0.7rem', display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
                          <Star size={9} /> {(plan.stars / 1000).toFixed(1)}k★
                        </span>
                        {plan.summary && (
                          <span style={{ color: 'var(--text-dim)', fontSize: '0.72rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '320px' }}>
                            — {plan.summary.slice(0, 90)}
                          </span>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Milestones Checkboxes */}
              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '0.75rem' }}>
                <h4 style={{ fontSize: '0.82rem', color: 'var(--accent-primary)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  Weekly Checkable Deliverables:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {week.milestones.map((m) => (
                    <div
                      key={m.id}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        cursor: 'pointer',
                        padding: '0.35rem 0.5rem',
                        borderRadius: 'var(--radius-sm)',
                        background: m.completed ? 'rgba(16, 185, 129, 0.08)' : 'transparent',
                        transition: 'background 0.15s'
                      }}
                      onClick={() => handleToggle(week.weekNumber, m.id, m.completed)}
                    >
                      {m.completed ? (
                        <CheckCircle2 size={16} color="#34d399" />
                      ) : (
                        <Circle size={16} color="var(--text-dim)" />
                      )}
                      <span style={{ fontSize: '0.85rem', color: m.completed ? 'var(--text-muted)' : '#fff', textDecoration: m.completed ? 'line-through' : 'none' }}>
                        {m.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

import React from 'react';import {
  Problem, 
  MockInterviewSession, 
  StarStory, 
  RoadmapWeek 
} from '../types';
import { buildCoachPlan, buildCoachReport } from '../services/coach';

import { 
  BrainCircuit, 
  Mic, 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Target,
  CalendarCheck,
  Table,
  BarChart3
} from 'lucide-react';

interface DashboardViewProps {
  problems: Problem[];
  mockSessions: MockInterviewSession[];
  starStories: StarStory[];
  roadmap: RoadmapWeek[];
  onNavigate: (tab: string) => void;
  onSolveProblem: (problemId: string) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  problems,
  mockSessions,
  starStories,
  roadmap,
  onNavigate,
  onSolveProblem
}) => {
  const todayStr = new Date().toISOString().split('T')[0];

  // Calculate stats
  const solvedCount = problems.filter((p) => p.status !== 'unsolved').length;
  const masteredCount = problems.filter((p) => p.status === 'mastered').length;
  const dueToday = problems.filter(
    (p) => p.nextReviewDate && p.nextReviewDate <= todayStr && p.status !== 'unsolved'
  );
  const completedMilestones = roadmap.flatMap((w) => w.milestones).filter((m) => m.completed).length;
  const totalMilestones = roadmap.flatMap((w) => w.milestones).length;
  const roadmapPercent = Math.round((completedMilestones / (totalMilestones || 1)) * 100);

  // Average mock interview scores
  const avgScores = mockSessions.length
    ? {
        technical: Math.round(
          mockSessions.reduce((acc, m) => acc + m.scores.technicalAccuracy, 0) / mockSessions.length
        ),
        system: Math.round(
          mockSessions.reduce((acc, m) => acc + m.scores.systemThinking, 0) / mockSessions.length
        ),
        communication: Math.round(
          mockSessions.reduce((acc, m) => acc + m.scores.communication, 0) / mockSessions.length
        ),
        problemSolving: Math.round(
          mockSessions.reduce((acc, m) => acc + m.scores.problemSolving, 0) / mockSessions.length
        ),
        behavioral: Math.round(
          mockSessions.reduce((acc, m) => acc + m.scores.behavioralFit, 0) / mockSessions.length
        ),
        overall: Math.round(
          mockSessions.reduce((acc, m) => acc + m.scores.overall, 0) / mockSessions.length
        )
      }
    : {
        technical: 82,
        system: 78,
        communication: 85,
        problemSolving: 80,
        behavioral: 88,
        overall: 83
      };

  // Radar Chart helper (polygon coordinates)
  const competencies = [
    { label: 'Technical DSA', val: avgScores.technical, angle: 0 },
    { label: 'System Design', val: avgScores.system, angle: 72 },
    { label: 'Communication', val: avgScores.communication, angle: 144 },
    { label: 'Problem Solving', val: avgScores.problemSolving, angle: 216 },
    { label: 'Behavioral Fit', val: avgScores.behavioral, angle: 288 }
  ];

  const centerX = 160;
  const centerY = 160;
  const maxRadius = 110;

  const getCoordinates = (value: number, angleDegrees: number) => {
    const angleRad = ((angleDegrees - 90) * Math.PI) / 180;
    const r = (value / 100) * maxRadius;
    return {
      x: centerX + r * Math.cos(angleRad),
      y: centerY + r * Math.sin(angleRad)
    };
  };

  const polygonPoints = competencies
    .map((c) => {
      const { x, y } = getCoordinates(c.val, c.angle);
      return `${x},${y}`;
    })
    .join(' ');

  // Cross-session coach diagnosis (recency-weighted on the last five sessions)
  const coachPlan = buildCoachPlan(mockSessions);
  const latestCoachDrills = mockSessions.length > 0 ? buildCoachReport(mockSessions[0]).drills.slice(0, 2) : [];

  // Weakness heatmap by category
  const weaknessMap = problems.reduce((acc, p) => {
    const cat = p.category || 'Other';
    if (!acc[cat]) acc[cat] = { total: 0, mastered: 0, learning: 0 };
    acc[cat].total++;
    if (p.status === 'mastered') acc[cat].mastered++;
    if (p.status === 'learning' || p.status === 'reviewing') acc[cat].learning++;
    return acc;
  }, {} as Record<string, { total: number; mastered: number; learning: number }>);

  const weakAreas = Object.entries(weaknessMap)
    .map(([cat, data]) => ({
      category: cat,
      total: data.total,
      masteryRate: data.total ? Math.round((data.mastered / data.total) * 100) : 0,
      weakness: data.total ? Math.round(((data.total - data.mastered) / data.total) * 100) : 0
    }))
    .sort((a, b) => b.weakness - a.weakness)
    .slice(0, 5);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Welcome Banner */}
      <div 
        className="glass-card" 
        style={{
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(6, 182, 212, 0.1))',
          borderColor: 'rgba(99, 102, 241, 0.3)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem',
          padding: '2rem'
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <span className="badge badge-cyan">
              <Sparkles size={13} />
              AI-Powered Interview Operating System
            </span>
            <span className="badge badge-primary">FAANG Ready</span>
          </div>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>
            Welcome back to your Preparation Command Center
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '650px', fontSize: '0.95rem' }}>
            Master Data Structures with Spaced-Repetition (AlgoRecall SM-2), simulate voice-driven AI mock interviews (Prepwise style), design distributed systems, and track your 8-week FAANG roadmap.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <button 
            className="btn-primary" 
            onClick={() => onNavigate('mock')}
            style={{ padding: '0.8rem 1.5rem', fontSize: '0.95rem' }}
          >
            <Mic size={18} />
            Start Voice AI Mock
          </button>
          <button 
            className="btn-secondary" 
            onClick={() => onNavigate('dsa')}
            style={{ padding: '0.8rem 1.5rem', fontSize: '0.95rem' }}
          >
            <BrainCircuit size={18} />
            Review Queue ({dueToday.length})
          </button>
        </div>
      </div>

      {/* Top 4 Metrics Cards */}
      <div className="grid-4">
        <div className="glass-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--accent-cyan)' }}>
            <BrainCircuit size={22} />
            <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>SM-2 ALGORITHM</span>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, margin: '0.6rem 0 0.2rem' }}>
            {solvedCount} / {problems.length}
          </div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            Problems Practiced ({masteredCount} Mastered)
          </div>
          <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.5rem' }}>
            <span className="badge badge-easy">{masteredCount} Retention 14d+</span>
          </div>
        </div>

        <div className="glass-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--accent-amber)' }}>
            <Clock size={22} />
            <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>DUE TODAY</span>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, margin: '0.6rem 0 0.2rem', color: '#fbbf24' }}>
            {dueToday.length}
          </div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            Spaced Repetition Reviews Pending
          </div>
          <div style={{ marginTop: '0.75rem' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
              Reinforces memory decay curve
            </span>
          </div>
        </div>

        <div className="glass-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--accent-primary)' }}>
            <Mic size={22} />
            <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>SIMULATION</span>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, margin: '0.6rem 0 0.2rem' }}>
            {mockSessions.length}
          </div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            Mocks Completed (Avg: {avgScores.overall}%)
          </div>
          <div style={{ marginTop: '0.75rem' }}>
            <span className="badge badge-primary">Voice & Video Enabled</span>
          </div>
        </div>

        <div className="glass-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--accent-emerald)' }}>
            <Target size={22} />
            <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>ROADMAP</span>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, margin: '0.6rem 0 0.2rem' }}>
            {roadmapPercent}%
          </div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            8-Week Study Plan Completed
          </div>
          <div style={{ marginTop: '0.75rem', background: 'rgba(255,255,255,0.08)', borderRadius: '10px', height: '6px' }}>
            <div 
              style={{ 
                width: `${roadmapPercent}%`, 
                height: '100%', 
                background: 'linear-gradient(90deg, #10b981, #06b6d4)', 
                borderRadius: '10px' 
              }} 
            />
          </div>
        </div>
      </div>

      {/* Main Row: Radar Chart Competencies + Spaced Due Queue */}
      <div className="grid-2">
        {/* Competency Radar Evaluation */}
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem' }}>Competency Radar</h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                Holistic score across 5 key technical interview pillars
              </p>
            </div>
            <span className="badge badge-primary">{avgScores.overall}% Readiness</span>
          </div>

          {/* SVG Radar */}
          <div style={{ position: 'relative', width: '320px', height: '320px' }}>
            <svg viewBox="0 0 320 320" className="radar-chart-svg">
              {/* Concentric rings */}
              {[0.25, 0.5, 0.75, 1].map((scale, i) => (
                <circle
                  key={i}
                  cx={centerX}
                  cy={centerY}
                  r={maxRadius * scale}
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.08)"
                  strokeDasharray={scale === 1 ? 'none' : '3,3'}
                />
              ))}

              {/* Axis rays */}
              {competencies.map((c, i) => {
                const { x, y } = getCoordinates(100, c.angle);
                return (
                  <line
                    key={i}
                    x1={centerX}
                    y1={centerY}
                    x2={x}
                    y2={y}
                    stroke="rgba(255, 255, 255, 0.12)"
                  />
                );
              })}

              {/* Score Polygon */}
              <polygon
                points={polygonPoints}
                fill="rgba(99, 102, 241, 0.28)"
                stroke="#6366f1"
                strokeWidth="2.5"
              />

              {/* Data points */}
              {competencies.map((c, i) => {
                const { x, y } = getCoordinates(c.val, c.angle);
                return (
                  <circle
                    key={i}
                    cx={x}
                    cy={y}
                    r="4.5"
                    fill="#22d3ee"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                  />
                );
              })}
            </svg>

            {/* Labels overlay */}
            <div style={{ position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)', fontSize: '0.75rem', fontWeight: 600, color: '#a5b4fc' }}>
              Technical DSA ({avgScores.technical}%)
            </div>
            <div style={{ position: 'absolute', top: '35%', right: '5px', fontSize: '0.75rem', fontWeight: 600, color: '#a5b4fc', textAlign: 'right' }}>
              System Design<br />({avgScores.system}%)
            </div>
            <div style={{ position: 'absolute', bottom: '15px', right: '35px', fontSize: '0.75rem', fontWeight: 600, color: '#a5b4fc' }}>
              Communication ({avgScores.communication}%)
            </div>
            <div style={{ position: 'absolute', bottom: '15px', left: '35px', fontSize: '0.75rem', fontWeight: 600, color: '#a5b4fc' }}>
              Problem Solving ({avgScores.problemSolving}%)
            </div>
            <div style={{ position: 'absolute', top: '35%', left: '5px', fontSize: '0.75rem', fontWeight: 600, color: '#a5b4fc' }}>
              Behavioral Fit<br />({avgScores.behavioral}%)
            </div>
          </div>
        </div>

        {/* Coach Diagnosis */}
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', borderColor: 'rgba(6, 182, 212, 0.25)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', gap: '0.75rem' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Sparkles size={17} color="#67e8f9" />
                Coach&apos;s Diagnosis
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                Recurring weak spots across your last five mock interviews
              </p>
            </div>
            {coachPlan && <span className="badge badge-cyan">{coachPlan.sessions} session{coachPlan.sessions === 1 ? '' : 's'}</span>}
          </div>

          {coachPlan ? (
            <>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-main)', marginBottom: '0.9rem' }}>{coachPlan.headline}</p>

              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.9rem' }}>
                <span className={`badge ${coachPlan.trend >= 0 ? 'badge-easy' : 'badge-medium'}`}>
                  {coachPlan.trend >= 0 ? '+' : ''}{coachPlan.trend} pts trend
                </span>
                <span className="badge badge-primary">Avg {coachPlan.averageOverall}/100</span>
                {coachPlan.recurringFocus.map((focus) => (
                  <span key={focus} className="badge badge-cyan" style={{ fontSize: '0.65rem' }}>{focus}</span>
                ))}
              </div>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingLeft: '1.1rem', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                {latestCoachDrills.map((drill) => (
                  <li key={drill.id}><strong style={{ color: 'var(--text-main)' }}>{drill.title}</strong> — {drill.why}</li>
                ))}
              </ul>

              <button className="btn-secondary" style={{ alignSelf: 'flex-start', padding: '0.5rem 0.9rem', fontSize: '0.82rem' }} onClick={() => onNavigate('mock')}>
                Run the next rep <ArrowRight size={14} />
              </button>
            </>
          ) : (
            <>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.9rem' }}>
                No mock interviews yet. Run one and the coach will diagnose filler words, STAR coverage, answer depth and quantified impact — then turn the gaps into drills.
              </p>
              <button className="btn-primary" style={{ alignSelf: 'flex-start', padding: '0.55rem 1rem', fontSize: '0.85rem' }} onClick={() => onNavigate('mock')}>
                Start a mock interview <ArrowRight size={14} />
              </button>
            </>
          )}
        </div>

        {/* Due for Review Today (AlgoRecall Queue) */}
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem' }}>Spaced Repetition Queue</h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                Target problems due today to maximize recall retention
              </p>
            </div>
            <button 
              className="btn-secondary" 
              style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
              onClick={() => onNavigate('dsa')}
            >
              View Full List
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1, overflowY: 'auto' }}>
            {(dueToday.length > 0 ? dueToday : problems).slice(0, 4).map((prob) => {
              const diffBadge =
                prob.difficulty === 'Easy'
                  ? 'badge-easy'
                  : prob.difficulty === 'Medium'
                  ? 'badge-medium'
                  : 'badge-hard';

              return (
                <div
                  key={prob.id}
                  style={{
                    background: 'var(--bg-surface-elevated)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.85rem 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    transition: 'all 0.2s'
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontWeight: 600, fontSize: '0.92rem' }}>{prob.title}</span>
                      <span className={`badge ${diffBadge}`}>{prob.difficulty}</span>
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', display: 'flex', gap: '0.5rem' }}>
                      <span>{prob.category}</span>
                      <span>•</span>
                      <span>{prob.nextReviewDate && prob.nextReviewDate <= todayStr ? 'Due now' : `Next review: ${prob.nextReviewDate || 'Today'}`}</span>
                    </div>
                  </div>

                  <button
                    className="btn-primary"
                    style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
                    onClick={() => onSolveProblem(prob.id)}
                  >
                    Solve
                    <ArrowRight size={14} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Weakness Heatmap */}
      {weakAreas.length > 0 && (
        <div className="glass-card" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <BarChart3 size={22} color="var(--accent-warning)" />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Weakness Heatmap</h3>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Focus on red areas first</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
            {weakAreas.map((area) => (
              <div
                key={area.category}
                style={{
                  padding: '0.75rem',
                  background: area.weakness > 60 ? 'rgba(239, 68, 68, 0.1)' : area.weakness > 30 ? 'rgba(251, 191, 36, 0.1)' : 'rgba(34, 197, 94, 0.1)',
                  border: `1px solid ${area.weakness > 60 ? 'var(--accent-danger)' : area.weakness > 30 ? 'var(--accent-warning)' : 'var(--accent-success)'}`,
                  borderRadius: 'var(--radius-md)',
                  cursor: 'pointer'
                }}
                onClick={() => onNavigate('dsa')}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{area.category}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{area.masteryRate}%</span>
                </div>
                <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div
                    style={{
                      height: '100%',
                      width: `${area.masteryRate}%`,
                      background: area.weakness > 60 ? 'var(--accent-danger)' : area.weakness > 30 ? 'var(--accent-warning)' : 'var(--accent-success)'
                    }}
                  />
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '0.4rem' }}>
                  {area.total} problems • {area.weakness}% weak
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* New Features Quick Access */}
      <div className="glass-card" style={{ padding: '1.25rem' }}>
        <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Sparkles size={18} color="var(--accent-cyan)" />
          New Learning Modes
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
          <button className="btn-secondary" style={{ justifyContent: 'flex-start', padding: '0.75rem' }} onClick={() => onNavigate('patterns')}>
            <BrainCircuit size={16} /> Pattern-First Learning
          </button>
          <button className="btn-secondary" style={{ justifyContent: 'flex-start', padding: '0.75rem' }} onClick={() => onNavigate('bughunt')}>
            <ShieldCheck size={16} /> Bug Hunt Mode
          </button>
          <button className="btn-secondary" style={{ justifyContent: 'flex-start', padding: '0.75rem' }} onClick={() => onNavigate('complexity')}>
            <BarChart3 size={16} /> Complexity Gym
          </button>
          <button className="btn-secondary" style={{ justifyContent: 'flex-start', padding: '0.75rem' }} onClick={() => onNavigate('sandbox')}>
            <Sparkles size={16} /> Explain-It-Back in Sandbox
          </button>
        </div>
      </div>

      {/* Behavioral & System Design Quick Cards */}
      <div className="grid-3">
        <div 
          className="glass-card" 
          style={{ cursor: 'pointer' }}
          onClick={() => onNavigate('behavioral')}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: 'var(--accent-primary)' }}>
            <ShieldCheck size={20} />
            <h4 style={{ fontSize: '1.05rem' }}>STAR Behavioral Studio</h4>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
            Craft and refine high-impact Situation-Task-Action-Result stories with metrics for Amazon Leadership & Googleyness rounds.
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>{starStories.length} Stories Ready</span>
            <ArrowRight size={16} color="var(--accent-primary)" />
          </div>
        </div>

        <div 
          className="glass-card" 
          style={{ cursor: 'pointer' }}
          onClick={() => onNavigate('system-design')}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: 'var(--accent-cyan)' }}>
            <TrendingUp size={20} />
            <h4 style={{ fontSize: '1.05rem' }}>System Design Studio</h4>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
            Explore interactive architecture graphs for YouTube, TinyURL, and Distributed Rate Limiters with latency cheat sheets.
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>Interactive Architecture Studio</span>
            <ArrowRight size={16} color="var(--accent-cyan)" />
          </div>
        </div>

        <div 
          className="glass-card" 
          style={{ cursor: 'pointer' }}
          onClick={() => onNavigate('resources')}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: 'var(--accent-emerald)' }}>
            <Sparkles size={20} />
            <h4 style={{ fontSize: '1.05rem' }}>Resource Hub (500+ Curated Tools)</h4>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
            Curated database of all top websites, mock interview platforms, GitHub open-source repositories, and study guides.
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--accent-emerald)' }}>Explore Full Catalog</span>
            <ArrowRight size={16} color="var(--accent-emerald)" />
          </div>
        </div>

        <div
          className="glass-card"
          style={{ cursor: 'pointer' }}
          onClick={() => onNavigate('daily')}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: 'var(--accent-amber)' }}>
            <CalendarCheck size={20} />
            <h4 style={{ fontSize: '1.05rem' }}>Daily Challenge</h4>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
            One deterministic problem per day with a built-in timer. Keep your streak alive and grow your drill history.
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--accent-amber)' }}>Start Today's Problem</span>
            <ArrowRight size={16} color="var(--accent-amber)" />
          </div>
        </div>

        <div
          className="glass-card"
          style={{ cursor: 'pointer' }}
          onClick={() => onNavigate('sheets')}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: '#fbbf24' }}>
            <Table size={20} />
            <h4 style={{ fontSize: '1.05rem' }}>LeetCode Company Sheets</h4>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
            6,500+ frequency-ranked problems across 241 companies from your local collection — with your own saved solutions.
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.8rem', color: '#fbbf24' }}>Browse Companies</span>
            <ArrowRight size={16} color="#fbbf24" />
          </div>
        </div>

      </div>
    </div>
  );
};

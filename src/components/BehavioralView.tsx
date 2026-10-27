import React, { useState } from 'react';
import { StarStory } from '../types';
import { behavioralQuestions } from '../data/behavioralData';
import { 
  ShieldCheck, 
  Plus, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Bookmark, 
  Trash2, 
  Edit3,
  HelpCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface BehavioralViewProps {
  stories: StarStory[];
  onSaveStory: (story: StarStory) => void;
  onDeleteStory: (id: string) => void;
}

export const BehavioralView: React.FC<BehavioralViewProps> = ({
  stories,
  onSaveStory,
  onDeleteStory
}) => {
  const [activeTab, setActiveTab] = useState<'stories' | 'builder' | 'questions'>('stories');

  // Form state for building or editing a STAR story
  const [editingId, setEditingId] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<StarStory['category']>('Leadership');
  const [situation, setSituation] = useState('');
  const [task, setTask] = useState('');
  const [action, setAction] = useState('');
  const [result, setResult] = useState('');
  const [metrics, setMetrics] = useState('');
  const [tags, setTags] = useState('Architecture, Teamwork');

  // Feedback analysis state
  const [aiFeedback, setAiFeedback] = useState<{
    score: number;
    positives: string[];
    recommendations: string[];
  } | null>(null);

  // Edit existing story
  const handleEdit = (story: StarStory) => {
    setEditingId(story.id);
    setTitle(story.title);
    setCategory(story.category);
    setSituation(story.situation);
    setTask(story.task);
    setAction(story.action);
    setResult(story.result);
    setMetrics(story.metrics);
    setTags(story.tags.join(', '));
    setAiFeedback(null);
    setActiveTab('builder');
  };

  // Reset form
  const handleNewStory = () => {
    setEditingId(null);
    setTitle('');
    setCategory('Leadership');
    setSituation('');
    setTask('');
    setAction('');
    setResult('');
    setMetrics('');
    setTags('Architecture, Teamwork');
    setAiFeedback(null);
    setActiveTab('builder');
  };

  // AI Story Grader
  const handleAnalyzeStory = () => {
    if (!action.trim() || !result.trim()) {
      alert('Please fill out both the Action and Result sections to analyze your story.');
      return;
    }

    let calculatedScore = 75;
    const pos: string[] = [];
    const recs: string[] = [];

    // Check for metrics
    const hasNumbers = /\d+%|\$\d+|\d+\s*(ms|min|sec|days|hours|users)/i.test(result + ' ' + metrics);
    if (hasNumbers) {
      calculatedScore += 15;
      pos.push('Strong quantified impact: Explicit metrics ($ or % or latency units) are present.');
    } else {
      recs.push('Add specific numbers to your Result (e.g. "Reduced P99 latency by 35%" or "Saved $40k/month in AWS egress").');
    }

    // Check action depth
    if (action.length > 150) {
      calculatedScore += 10;
      pos.push('Detailed personal agency: The Action section thoroughly highlights your concrete steps rather than vague teamwork.');
    } else {
      recs.push('Expand the Action section. Interviewers look for 50-60% of your time spent on YOUR specific decisions and technical steps.');
    }

    // Check situation brevity
    if (situation.length > 300) {
      recs.push('Keep the Situation concise (under 20% of your time). Avoid over-explaining background context.');
    } else {
      pos.push('Crisp situational framing: Sets the stage without rambling.');
    }

    calculatedScore = Math.min(98, Math.max(70, calculatedScore));

    setAiFeedback({
      score: calculatedScore,
      positives: pos,
      recommendations: recs
    });

    if (calculatedScore >= 85) {
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
    }
  };

  // Save story
  const handleSubmitStory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !action.trim()) return;

    const newStory: StarStory = {
      id: editingId || 'star-' + Date.now(),
      title: title.trim(),
      category,
      situation: situation.trim(),
      task: task.trim(),
      action: action.trim(),
      result: result.trim(),
      metrics: metrics.trim(),
      tags: tags.split(',').map((t) => t.trim()).filter(Boolean),
      lastUpdated: new Date().toISOString().split('T')[0],
      score: aiFeedback?.score || 88
    };

    onSaveStory(newStory);
    setActiveTab('stories');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Top Banner */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
            <span className="badge badge-primary">
              <ShieldCheck size={12} />
              STAR Method Studio
            </span>
            <span className="badge badge-cyan">Amazon Leadership & Googleyness</span>
          </div>
          <h2 style={{ fontSize: '1.75rem' }}>Behavioral & STAR Story Studio</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Craft, score, and catalog high-impact Situation-Task-Action-Result stories with verified metrics.
          </p>
        </div>

        {/* Tab switch */}
        <div style={{ display: 'flex', background: 'var(--bg-surface-elevated)', padding: '3px', borderRadius: 'var(--radius-full)' }}>
          <button
            className={`nav-tab-btn ${activeTab === 'stories' ? 'active' : ''}`}
            onClick={() => setActiveTab('stories')}
          >
            <Bookmark size={14} />
            Saved Story Bank ({stories.length})
          </button>
          <button
            className={`nav-tab-btn ${activeTab === 'builder' ? 'active' : ''}`}
            onClick={handleNewStory}
          >
            <Plus size={14} />
            {editingId ? 'Edit Story' : 'New Story'}
          </button>
          <button
            className={`nav-tab-btn ${activeTab === 'questions' ? 'active' : ''}`}
            onClick={() => setActiveTab('questions')}
          >
            <HelpCircle size={14} />
            Top Behavioral Q&A
          </button>
        </div>
      </div>

      {/* Tab 1: Saved Story Bank */}
      {activeTab === 'stories' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {stories.map((story) => (
            <div key={story.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <span className="badge badge-primary">{story.category}</span>
                    <span className="badge badge-easy">Score: {story.score || 92}%</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Updated: {story.lastUpdated}</span>
                  </div>
                  <h3 style={{ fontSize: '1.2rem' }}>{story.title}</h3>
                </div>

                <div style={{ display: 'flex', gap: '0.4rem' }}>
                  <button className="btn-secondary" style={{ padding: '0.35rem 0.65rem', fontSize: '0.75rem' }} onClick={() => handleEdit(story)}>
                    <Edit3 size={13} /> Edit
                  </button>
                  <button className="btn-secondary" style={{ padding: '0.35rem 0.65rem', fontSize: '0.75rem', color: '#fb7185' }} onClick={() => onDeleteStory(story.id)}>
                    <Trash2 size={13} />
                  </button>
                </div>
              </div>

              {/* STAR 4-Part Grid */}
              <div className="grid-2">
                <div style={{ background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '0.85rem' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                    Situation (15%)
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                    {story.situation}
                  </p>
                </div>

                <div style={{ background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '0.85rem' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--accent-amber)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                    Task (10%)
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                    {story.task}
                  </p>
                </div>
              </div>

              <div style={{ background: 'rgba(99, 102, 241, 0.08)', border: '1px solid rgba(99, 102, 241, 0.25)', borderRadius: 'var(--radius-md)', padding: '0.85rem' }}>
                <div style={{ fontSize: '0.75rem', color: '#a5b4fc', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                  Action (55%) — What YOU Built & Executed
                </div>
                <p style={{ fontSize: '0.88rem', color: '#ffffff', lineHeight: 1.5 }}>
                  {story.action}
                </p>
              </div>

              <div style={{ background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.25)', borderRadius: 'var(--radius-md)', padding: '0.85rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#34d399', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                    Result (20%) & Business Impact
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-main)' }}>
                    {story.result}
                  </p>
                </div>
                {story.metrics && (
                  <div style={{ background: 'rgba(16, 185, 129, 0.2)', padding: '0.4rem 0.8rem', borderRadius: 'var(--radius-md)', fontSize: '0.8rem', color: '#34d399', fontWeight: 700 }}>
                    {story.metrics}
                  </div>
                )}
              </div>
            </div>
          ))}

          {stories.length === 0 && (
            <div className="glass-card" style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <ShieldCheck size={40} style={{ color: 'var(--text-dim)', marginBottom: '1rem' }} />
              <h3>Your STAR Story Bank is Empty</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.25rem' }}>
                Click "New Story" to document your production outages, architectural migrations, and leadership achievements.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Interactive STAR Builder & AI Evaluator */}
      {activeTab === 'builder' && (
        <div className="grid-2" style={{ alignItems: 'start' }}>
          {/* Builder Form */}
          <div className="glass-card">
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
              {editingId ? 'Edit STAR Story' : 'Draft New STAR Story'}
            </h3>

            <form onSubmit={handleSubmitStory} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
                  Story Title
                </label>
                <input
                  type="text"
                  required
                  className="search-input"
                  style={{ borderRadius: 'var(--radius-md)', padding: '0.6rem 0.85rem' }}
                  placeholder="e.g. Scaling Checkout API during Black Friday Surge"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="grid-2">
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
                    Category
                  </label>
                  <select
                    className="search-input"
                    style={{ borderRadius: 'var(--radius-md)', padding: '0.6rem 0.85rem' }}
                    value={category}
                    onChange={(e) => setCategory(e.target.value as any)}
                  >
                    <option value="Conflict">Conflict & Disagreement</option>
                    <option value="Leadership">Leadership & Ownership</option>
                    <option value="Failure">Failure & Outage Post-Mortem</option>
                    <option value="Ambiguity">Navigating Ambiguity</option>
                    <option value="Impact">High-Impact Delivery</option>
                    <option value="Teamwork">Cross-Functional Teamwork</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
                    Tags (comma separated)
                  </label>
                  <input
                    type="text"
                    className="search-input"
                    style={{ borderRadius: 'var(--radius-md)', padding: '0.6rem 0.85rem' }}
                    placeholder="Redis, PostgreSQL, Mentorship"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                  <label style={{ fontSize: '0.82rem', color: 'var(--accent-cyan)' }}>
                    Situation (15%) — Context & Hurdle
                  </label>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>{situation.length} chars</span>
                </div>
                <textarea
                  className="search-input"
                  style={{ borderRadius: 'var(--radius-md)', height: '70px', resize: 'vertical', padding: '0.6rem 0.85rem' }}
                  placeholder="What was the situation? What was the risk or bottleneck?"
                  value={situation}
                  onChange={(e) => setSituation(e.target.value)}
                />
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                  <label style={{ fontSize: '0.82rem', color: 'var(--accent-amber)' }}>
                    Task (10%) — Your Personal Ownership
                  </label>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>{task.length} chars</span>
                </div>
                <textarea
                  className="search-input"
                  style={{ borderRadius: 'var(--radius-md)', height: '60px', resize: 'vertical', padding: '0.6rem 0.85rem' }}
                  placeholder="What was your specific goal or responsibility?"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                />
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                  <label style={{ fontSize: '0.82rem', color: '#a5b4fc' }}>
                    Action (55%) — Concrete Decisions & Technical Execution
                  </label>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>{action.length} chars</span>
                </div>
                <textarea
                  className="search-input"
                  style={{ borderRadius: 'var(--radius-md)', height: '110px', resize: 'vertical', padding: '0.6rem 0.85rem' }}
                  placeholder="Detail 3-4 numbered steps you personally took (e.g. 1. Profiling SQL queries, 2. Implementing circuit-breaker...)"
                  value={action}
                  onChange={(e) => setAction(e.target.value)}
                />
              </div>

              <div className="grid-2">
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                    <label style={{ fontSize: '0.82rem', color: '#34d399' }}>
                      Result (20%) — Outcome
                    </label>
                  </div>
                  <textarea
                    className="search-input"
                    style={{ borderRadius: 'var(--radius-md)', height: '70px', resize: 'vertical', padding: '0.6rem 0.85rem' }}
                    placeholder="What changed? How did the business or system benefit?"
                    value={result}
                    onChange={(e) => setResult(e.target.value)}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: '#34d399', marginBottom: '0.2rem' }}>
                    Key Metric Callout
                  </label>
                  <input
                    type="text"
                    className="search-input"
                    style={{ borderRadius: 'var(--radius-md)', padding: '0.6rem 0.85rem' }}
                    placeholder="e.g. 99.98% SLA, 85% latency reduction"
                    value={metrics}
                    onChange={(e) => setMetrics(e.target.value)}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
                <button type="button" className="btn-secondary" style={{ flex: 1 }} onClick={handleAnalyzeStory}>
                  <Sparkles size={16} />
                  Analyze with AI
                </button>
                <button type="submit" className="btn-primary" style={{ flex: 1 }}>
                  Save to Story Bank
                </button>
              </div>
            </form>
          </div>

          {/* AI Analysis Card */}
          <div className="glass-card">
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={18} color="var(--accent-primary)" />
              AI Hiring Bar Evaluation
            </h3>

            {!aiFeedback ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-dim)', fontSize: '0.85rem' }}>
                Fill out the Action and Result fields, then click <strong>"Analyze with AI"</strong> to receive real-time feedback on metric presence and personal agency ratio.
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(99, 102, 241, 0.1)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: aiFeedback.score >= 85 ? '#34d399' : '#fbbf24' }}>
                    {aiFeedback.score}%
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem' }}>
                      {aiFeedback.score >= 85 ? 'Strong FAANG Alignment' : 'Leaning Pass (Needs Polish)'}
                    </h4>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>
                      Evaluated on Action depth, personal agency, and quantifiable metric density.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 style={{ fontSize: '0.88rem', color: '#34d399', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <CheckCircle2 size={15} />
                    What Worked Well
                  </h4>
                  <ul style={{ paddingLeft: '1.2rem', fontSize: '0.82rem', color: 'var(--text-main)', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {aiFeedback.positives.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>

                {aiFeedback.recommendations.length > 0 && (
                  <div>
                    <h4 style={{ fontSize: '0.88rem', color: '#fbbf24', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <AlertCircle size={15} />
                      Refinement Suggestions
                    </h4>
                    <ul style={{ paddingLeft: '1.2rem', fontSize: '0.82rem', color: 'var(--text-main)', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                      {aiFeedback.recommendations.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab 3: Top Behavioral Q&A Prompts */}
      {activeTab === 'questions' && (
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <h3 style={{ fontSize: '1.2rem' }}>Essential Behavioral Interview Question Library</h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            These 5 archetype questions account for over 80% of behavioral interview prompts at Google, Amazon, Meta, and Apple.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {behavioralQuestions.map((bq, i) => (
              <div key={i} className="glass-card-elevated" style={{ borderLeft: '4px solid var(--accent-cyan)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.3rem' }}>
                  <span className="badge badge-cyan">{bq.category}</span>
                </div>
                <h4 style={{ fontSize: '1.05rem', color: '#fff', marginBottom: '0.4rem' }}>
                  "{bq.question}"
                </h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  <strong>Interviewer Strategy:</strong> {bq.tips}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

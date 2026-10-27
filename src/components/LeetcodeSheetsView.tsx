import React, { useEffect, useMemo, useState } from 'react';
import {
  LeetcodeSheet,
  LeetcodeSheetProblem,
  LeetcodeSheetsFile,
  ProblemSolution,
  SolutionMap,
  Problem
} from '../types';
import {
  Table,
  Search,
  ExternalLink,
  CheckCircle2,
  Circle,
  Code2,
  X,
  Flame,
  Save,
  FolderOpen,
  Clock,
  ArrowLeft
} from 'lucide-react';

interface LeetcodeSheetsViewProps {
  solutions: SolutionMap;
  onSaveSolution: (slug: string, solution: ProblemSolution) => void;
  openCompany?: string | null;
  onOpenCompanyConsumed?: () => void;
  onAddToTracker?: (row: LeetcodeSheetProblem, company: string) => void;
  existingProblemIds?: string[];
  problems?: Problem[];
}

const diffBadge = (d: string) =>
  d === 'EASY' ? 'badge badge-easy' : d === 'HARD' ? 'badge badge-hard' : d === 'MEDIUM' ? 'badge badge-medium' : 'badge badge-primary';

const isSolved = (p: LeetcodeSheetProblem, solutions: SolutionMap) =>
  solutions[p.slug]?.solved ?? /\bdone\b/i.test(p.note || '');

const codeTextareaStyle: React.CSSProperties = {
  width: '100%',
  minHeight: '220px',
  background: '#060910',
  border: '1px solid var(--border-subtle)',
  borderRadius: 'var(--radius-md)',
  color: '#e2e8f0',
  fontFamily: 'var(--font-mono)',
  fontSize: '0.82rem',
  padding: '0.85rem',
  resize: 'vertical',
  outline: 'none',
  tabSize: 2
};

export const LeetcodeSheetsView: React.FC<LeetcodeSheetsViewProps> = ({
  solutions,
  onSaveSolution,
  openCompany,
  onOpenCompanyConsumed,
  onAddToTracker,
  existingProblemIds = [],
  problems = []
}) => {
  const [data, setData] = useState<LeetcodeSheetsFile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [selectedCompany, setSelectedCompany] = useState('');
  const [search, setSearch] = useState('');
  const [difficulty, setDifficulty] = useState<'ALL' | 'EASY' | 'MEDIUM' | 'HARD'>('ALL');
  const [onlyRecent, setOnlyRecent] = useState(false);
  const [hideSolved, setHideSolved] = useState(false);

  // Solution editor
  const [editing, setEditing] = useState<LeetcodeSheetProblem | null>(null);
  const [draftCode, setDraftCode] = useState('');
  const [draftNote, setDraftNote] = useState('');
  const [draftSolved, setDraftSolved] = useState(false);
  const [savedFlash, setSavedFlash] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch('/leetcode-sheets.json')
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((json: LeetcodeSheetsFile) => {
        if (!cancelled) {
          setData(json);
          setLoading(false);
        }
      })
      .catch((e) => {
        if (!cancelled) {
          setError(`Could not load leetcode-sheets.json — run scripts/import-leetcode.mjs. (${e.message})`);
          setLoading(false);
        }
      });
    return () => { cancelled = true; };
  }, []);

  const sheet: LeetcodeSheet | undefined = useMemo(
    () => data?.sheets.find((s) => s.company === selectedCompany),
    [data, selectedCompany]
  );

  // Deep link from Company Prep / Global Search
  useEffect(() => {
    if (!data || !openCompany) return;
    if (data.sheets.some((s) => s.company === openCompany)) {
      setSelectedCompany(openCompany);
      setSearch('');
      setDifficulty('ALL');
    }
    onOpenCompanyConsumed?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, openCompany]);

  const filtered = useMemo(() => {
    if (!sheet) return [];
    const q = search.trim().toLowerCase();
    return sheet.problems.filter((p) => {
      if (difficulty !== 'ALL' && p.difficulty !== difficulty) return false;
      if (onlyRecent && !p.last30) return false;
      if (hideSolved && isSolved(p, solutions)) return false;
      if (q && !(p.title.toLowerCase().includes(q) || p.topics.some((t) => t.toLowerCase().includes(q)))) return false;
      return true;
    });
  }, [sheet, search, difficulty, onlyRecent, hideSolved, solutions]);

  const solvedTotal = useMemo(
    () => Object.values(solutions).filter((s) => s.solved).length,
    [solutions]
  );

  const openEditor = (p: LeetcodeSheetProblem) => {
    const existing = solutions[p.slug];
    setEditing(p);
    setDraftCode(existing?.code ?? '');
    setDraftNote(existing?.note ?? p.note ?? '');
    setDraftSolved(isSolved(p, solutions));
  };

  const saveDraft = () => {
    if (!editing) return;
    onSaveSolution(editing.slug, {
      code: draftCode,
      note: draftNote,
      solved: draftSolved,
      updatedAt: new Date().toISOString()
    });
    setSavedFlash(true);
    setTimeout(() => {
      setSavedFlash(false);
      setEditing(null);
    }, 700);
  };

  // ---------- Loading / Error ----------
  if (loading) {
    return (
      <div className="glass-card" style={{ textAlign: 'center', padding: '3rem' }}>
        <p style={{ color: 'var(--text-muted)' }}>Loading 6,500+ company-wise problems…</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="glass-card" style={{ textAlign: 'center', padding: '3rem' }}>
        <p style={{ color: '#fb7185' }}>{error || 'No data.'}</p>
      </div>
    );
  }

  // ---------- Company Overview ----------
  if (!selectedCompany) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div className="glass-card" style={{ background: 'linear-gradient(135deg, rgba(255, 161, 22, 0.14), rgba(99, 102, 241, 0.12))', padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
            <span className="badge badge-primary">
              <Table size={12} /> LeetCode Company Sheets
            </span>
            <span className="badge badge-cyan">{data.companyCount} companies</span>
            <span className="badge badge-easy">{solvedTotal} solved by you</span>
          </div>
          <h2 style={{ fontSize: '1.75rem' }}>Company-Wise Problem Bank</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '720px' }}>
            {data.totalProblems.toLocaleString()} problems imported from your local Leetcode collection (frequency-ranked per company, with your Done notes). Pick a company to drill its sheet — every row opens a panel where you save <em>your own solution</em>.
          </p>
        </div>

        <div className="grid-4" style={{ gap: '0.85rem' }}>
          {data.sheets.map((s) => {
            const done = s.problems.filter((p) => isSolved(p, solutions)).length;
            return (
              <button
                key={s.company}
                className="glass-card"
                style={{ padding: '0.9rem 1rem', textAlign: 'left', cursor: 'pointer', color: '#fff', fontFamily: 'inherit' }}
                onClick={() => { setSelectedCompany(s.company); setSearch(''); setDifficulty('ALL'); setOnlyRecent(false); setHideSolved(false); }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
                  <strong style={{ fontSize: '0.88rem' }}>{s.company}</strong>
                  <span className="badge badge-cyan" style={{ fontSize: '0.65rem' }}>{s.problems.length}</span>
                </div>
                <div style={{ fontSize: '0.72rem', color: done > 0 ? '#34d399' : 'var(--text-dim)', marginTop: '0.3rem' }}>
                  {done > 0 ? `${done} solved` : 'not started'}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // ---------- Company Sheet ----------
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {/* Header */}
      <div className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', padding: '1.25rem 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <button className="btn-icon" title="Back to all companies" onClick={() => setSelectedCompany('')}>
            <ArrowLeft size={16} />
          </button>
          <div>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.2rem' }}>
              <span className="badge badge-primary">{sheet?.problems.length} problems</span>
              <span className="badge badge-easy">{sheet?.problems.filter((p) => isSolved(p, solutions)).length} solved</span>
              <span className="badge badge-medium">
                <Flame size={11} /> {sheet?.problems.filter((p) => p.last30).length} trending 30d
              </span>
            </div>
            <h2 style={{ fontSize: '1.45rem' }}>{selectedCompany}</h2>
          </div>
        </div>
        <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textAlign: 'right' }}>
          Data generated {new Date(data.generatedAt).toLocaleDateString()}
        </div>
      </div>

      {/* Filters */}
      <div className="filter-bar" style={{ marginBottom: 0 }}>
        <div className="search-input-wrapper">
          <Search size={15} />
          <input
            className="search-input"
            placeholder={`Search ${selectedCompany} problems or topics…`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {(['ALL', 'EASY', 'MEDIUM', 'HARD'] as const).map((d) => (
          <button
            key={d}
            className={difficulty === d ? 'nav-tab-btn active' : 'nav-tab-btn'}
            onClick={() => setDifficulty(d)}
          >
            {d === 'ALL' ? 'All' : d[0] + d.slice(1).toLowerCase()}
          </button>
        ))}
        <button className={onlyRecent ? 'nav-tab-btn active' : 'nav-tab-btn'} onClick={() => setOnlyRecent((v) => !v)}>
          <Clock size={13} style={{ verticalAlign: 'text-bottom' }} /> Last 30 days
        </button>
        <button className={hideSolved ? 'nav-tab-btn active' : 'nav-tab-btn'} onClick={() => setHideSolved((v) => !v)}>
          <CheckCircle2 size={13} style={{ verticalAlign: 'text-bottom' }} /> Hide solved
        </button>
      </div>

      {/* Rows */}
      <div className="glass-card" style={{ padding: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        {filtered.length === 0 && (
          <p style={{ color: 'var(--text-dim)', textAlign: 'center', padding: '2rem' }}>No problems match your filters.</p>
        )}
        {filtered.map((p) => {
          const solved = isSolved(p, solutions);
          const mine = solutions[p.slug];
          const normTitle = p.title.trim().toLowerCase();
          const alreadyInTracker =
            existingProblemIds.includes(`sheet-${p.slug}`) ||
            problems.some((x) => x.title.trim().toLowerCase() === normTitle);
          return (
            <div
              key={p.id}
              style={{
                display: 'grid',
                gridTemplateColumns: '92px minmax(200px, 1fr) 110px 90px auto',
                gap: '0.75rem',
                alignItems: 'center',
                padding: '0.6rem 0.7rem',
                background: solved ? 'rgba(16, 185, 129, 0.05)' : 'var(--bg-surface-elevated)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <span className={diffBadge(p.difficulty)} style={{ fontSize: '0.66rem', justifyContent: 'center' }}>
                {p.difficulty.toLowerCase()}
              </span>

              <div style={{ minWidth: 0 }}>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#fff', fontSize: '0.88rem', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                >
                  {p.title} <ExternalLink size={11} color="var(--text-dim)" />
                </a>
                {(() => {
                  const tp =
                    problems.find((x) => x.id === `sheet-${p.slug}`) ||
                    problems.find((x) => x.title.trim().toLowerCase() === normTitle);
                  if (!tp || tp.status === 'unsolved') return null;
                  return (
                    <span
                      className={`badge ${tp.status === 'mastered' ? 'badge-easy' : 'badge-medium'}`}
                      style={{ fontSize: '0.62rem', marginLeft: '0.45rem', verticalAlign: 'middle' }}
                      title={`Your SRS status — next review ${tp.nextReviewDate || 'today'}`}
                    >
                      SRS: {tp.status}{tp.nextReviewDate ? ` · ${tp.nextReviewDate}` : ''}
                    </span>
                  );
                })()}
                <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap', marginTop: '0.2rem' }}>
                  {p.topics.slice(0, 3).map((t) => (
                    <span key={t} style={{ fontSize: '0.64rem', color: 'var(--text-dim)', background: 'rgba(255,255,255,0.04)', padding: '1px 6px', borderRadius: '8px' }}>{t}</span>
                  ))}
                  {p.topics.length > 3 && <span style={{ fontSize: '0.64rem', color: 'var(--text-dim)' }}>+{p.topics.length - 3}</span>}
                  {mine?.code && <span style={{ fontSize: '0.64rem', color: '#a5b4fc' }}>· my solution ✓</span>}
                </div>
              </div>

              <div title={`Company-relative frequency: ${p.frequency}`}>
                <div style={{ height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '6px', overflow: 'hidden' }}>
                  <div style={{ width: `${Math.min(100, p.frequency)}%`, height: '100%', background: p.frequency > 60 ? '#f59e0b' : '#6366f1' }} />
                </div>
                <span style={{ fontSize: '0.66rem', color: 'var(--text-dim)' }}>{p.frequency.toFixed(1)} freq</span>
              </div>

              <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontVariantNumeric: 'tabular-nums' }}>
                {p.acceptance}% acc
              </span>

              <div style={{ display: 'flex', gap: '0.4rem', justifyContent: 'flex-end' }}>
                <button
                  className="btn-secondary"
                  style={{ padding: '0.32rem 0.65rem', fontSize: '0.74rem', opacity: alreadyInTracker ? 0.55 : 1 }}
                  disabled={alreadyInTracker}
                  title="Import this problem into your DSA Spaced Tracker"
                  onClick={() => onAddToTracker?.(p, selectedCompany)}
                >
                  {alreadyInTracker ? '✓ In tracker' : '＋ Tracker'}
                </button>
                <button className="btn-secondary" style={{ padding: '0.32rem 0.65rem', fontSize: '0.74rem' }} onClick={() => openEditor(p)}>
                  <Code2 size={12} /> {mine?.code || mine ? 'Edit' : 'Solution'}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Solution Editor Modal */}
      {editing && (
        <div className="modal-overlay" onClick={() => setEditing(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '760px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem', gap: '1rem' }}>
              <div>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  <span className={diffBadge(editing.difficulty)} style={{ fontSize: '0.68rem' }}>{editing.difficulty.toLowerCase()}</span>
                  <span className="badge badge-cyan" style={{ fontSize: '0.68rem' }}>{selectedCompany}</span>
                </div>
                <h3 style={{ fontSize: '1.2rem' }}>{editing.title}</h3>
                <a href={editing.link} target="_blank" rel="noreferrer" style={{ fontSize: '0.78rem', color: '#a5b4fc', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  Open on LeetCode <ExternalLink size={11} />
                </a>
              </div>
              <button className="btn-icon" onClick={() => setEditing(null)}>
                <X size={16} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.85rem', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={draftSolved}
                  onChange={(e) => setDraftSolved(e.target.checked)}
                  style={{ width: '16px', height: '16px', accentColor: '#10b981' }}
                />
                {draftSolved ? <><CheckCircle2 size={15} color="#34d399" /> Solved</> : <><Circle size={15} /> Mark as solved</>}
              </label>

              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '0.35rem', letterSpacing: '0.04em' }}>
                  My Solution (paste your code — any language)
                </div>
                <textarea
                  style={codeTextareaStyle}
                  placeholder={`// Your ${editing.topics[0] || ''} solution for "${editing.title}"…`}
                  value={draftCode}
                  onChange={(e) => setDraftCode(e.target.value)}
                  spellCheck={false}
                />
              </div>

              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '0.35rem', letterSpacing: '0.04em' }}>
                  Notes / approach
                </div>
                <textarea
                  style={{ ...codeTextareaStyle, minHeight: '80px', fontFamily: 'var(--font-sans)' }}
                  placeholder="Pattern, edge cases, complexity, follow-ups…"
                  value={draftNote}
                  onChange={(e) => setDraftNote(e.target.value)}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.6rem' }}>
                <button className="btn-secondary" style={{ padding: '0.5rem 1rem' }} onClick={() => setEditing(null)}>
                  Cancel
                </button>
                <button className="btn-primary" style={{ padding: '0.5rem 1.1rem' }} onClick={saveDraft}>
                  <Save size={14} /> {savedFlash ? 'Saved ✓' : 'Save Solution'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

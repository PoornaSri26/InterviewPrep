import React, { useMemo, useState, useEffect } from 'react';
import { BankQuestion, questionBank, questionTopics } from '../data/questionBankData';
import { BookOpen, Search, CheckCircle2, Circle, Layers, ChevronDown, ChevronUp, Sparkles, ChevronLeft, ChevronRight, CheckCheck, RotateCcw } from 'lucide-react';

const KNOWN_KEY = 'interview_os_qbank_known';

const readKnown = (): string[] => {
  try {
    const raw = localStorage.getItem(KNOWN_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
};

interface QuestionBankViewProps {
  /** Adds the selected questions to the Flashcards module and returns how many were new. */
  onAddCards?: (cards: { front: string; back: string }[]) => number;
}

export const QuestionBankView: React.FC<QuestionBankViewProps> = ({ onAddCards }) => {
  const [search, setSearch] = useState('');
  const [topic, setTopic] = useState('All');
  const [openId, setOpenId] = useState<string | null>(null);
  const [known, setKnown] = useState<string[]>(readKnown);
  const [added, setAdded] = useState<number | null>(null);
  const [confidenceFilter, setConfidenceFilter] = useState<'All' | 'Confident' | 'NeedsReview'>('All');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(30);

  const toggleKnown = (id: string) => {
    setKnown((current) => {
      const next = current.includes(id) ? current.filter((x) => x !== id) : [...current, id];
      try {
        localStorage.setItem(KNOWN_KEY, JSON.stringify(next));
      } catch {
        /* storage full or disabled — progress is best-effort */
      }
      return next;
    });
  };

  const markAllFilteredConfident = () => {
    setKnown((current) => {
      const set = new Set(current);
      for (const q of filtered) set.add(q.id);
      const next = Array.from(set);
      try {
        localStorage.setItem(KNOWN_KEY, JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const resetAllKnown = () => {
    if (!window.confirm('Reset confidence status for all questions?')) return;
    setKnown([]);
    try {
      localStorage.removeItem(KNOWN_KEY);
    } catch {}
  };

  // Reset to page 1 whenever search, topic, or confidence filter changes
  useEffect(() => {
    setPage(1);
  }, [search, topic, confidenceFilter]);

  const topicCounts = useMemo(() => {
    const counts: Record<string, number> = { All: questionBank.length };
    for (const q of questionBank) {
      counts[q.topic] = (counts[q.topic] || 0) + 1;
    }
    return counts;
  }, []);

  const filtered = useMemo(() => {
    const needle = search.trim().toLowerCase();
    return questionBank.filter((q) => {
      const matchesTopic = topic === 'All' || q.topic === topic;
      const isKnown = known.includes(q.id);
      const matchesConfidence =
        confidenceFilter === 'All' ||
        (confidenceFilter === 'Confident' && isKnown) ||
        (confidenceFilter === 'NeedsReview' && !isKnown);

      if (!matchesTopic || !matchesConfidence) return false;
      if (!needle) return true;

      const haystack = `${q.question} ${q.answer} ${q.tags.join(' ')}`.toLowerCase();
      return haystack.includes(needle);
    });
  }, [search, topic, confidenceFilter, known]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, totalPages);

  const paginated = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, currentPage, pageSize]);

  const asCards = (questions: BankQuestion[]) =>
    questions.map((q) => ({
      front: q.question,
      back: `${q.answer}\n\n— ${q.topic}${q.tags.length ? ` · ${q.tags.join(', ')}` : ''}`
    }));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem', flexWrap: 'wrap' }}>
            <span className="badge badge-primary">
              <BookOpen size={12} />
              Question Bank
            </span>
            <span className="badge badge-cyan">{questionBank.length.toLocaleString()} questions · {questionTopics.length - 1} tracks</span>
            <span className="badge badge-easy">1,000+ Master Library</span>
          </div>
          <h2 style={{ fontSize: '1.75rem' }}>Language, Framework & Systems Rapid Review</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '780px' }}>
            One crisp model answer per question across JavaScript, TypeScript, React, Node, Python, Java, Go, SQL & Data, System Design, DevOps, Cloud, Security, AI & ML, Algorithms, and Behavioral.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', minWidth: '240px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            <span>Marked confident</span>
            <strong style={{ color: '#34d399' }}>{known.length.toLocaleString()} / {questionBank.length.toLocaleString()} ({Math.round((known.length / (questionBank.length || 1)) * 100)}%)</strong>
          </div>
          <div style={{ height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '10px', overflow: 'hidden' }}>
            <div style={{ width: `${(known.length / (questionBank.length || 1)) * 100}%`, height: '100%', background: '#10b981', borderRadius: '10px', transition: 'width 0.3s ease' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '0.2rem' }}>
            <button
              onClick={markAllFilteredConfident}
              className="btn btn-ghost"
              style={{ fontSize: '0.72rem', padding: '0.2rem 0.5rem', color: 'var(--accent-cyan)' }}
              title="Mark all current filtered questions as confident"
            >
              <CheckCheck size={12} /> Mark filtered confident
            </button>
            {known.length > 0 && (
              <button
                onClick={resetAllKnown}
                className="btn btn-ghost"
                style={{ fontSize: '0.72rem', padding: '0.2rem 0.5rem', color: 'var(--text-dim)' }}
                title="Reset all marked confident"
              >
                <RotateCcw size={12} /> Reset
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Filter and Control Bar */}
      <div className="glass-card" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <div className="search-input-wrapper" style={{ flex: '1 1 260px' }}>
            <Search size={16} />
            <input
              type="text"
              className="search-input"
              placeholder="Search 1,000+ questions, answers, or tags (event loop, index, closure, k8s, microservices…)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Confidence Filter */}
          <div style={{ display: 'flex', gap: '0.25rem', background: 'var(--bg-surface-elevated)', borderRadius: 'var(--radius-md)', padding: '0.2rem', border: '1px solid var(--border-subtle)' }}>
            {(['All', 'Confident', 'NeedsReview'] as const).map((cf) => (
              <button
                key={cf}
                className={confidenceFilter === cf ? 'nav-tab-btn active' : 'nav-tab-btn'}
                onClick={() => setConfidenceFilter(cf)}
                style={{ padding: '0.35rem 0.7rem', fontSize: '0.76rem' }}
              >
                {cf === 'NeedsReview' ? 'Needs Review' : cf}
              </button>
            ))}
          </div>

          {/* Page size selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', color: 'var(--text-dim)' }}>
            <span>Per page:</span>
            <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
              className="select-chip"
              style={{ padding: '0.35rem 0.6rem', fontSize: '0.78rem' }}
            >
              <option value={20}>20</option>
              <option value={30}>30</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>

          <button
            className="btn-secondary"
            style={{ padding: '0.5rem 1rem', fontSize: '0.82rem' }}
            disabled={!onAddCards || filtered.length === 0}
            onClick={() => onAddCards && setAdded(onAddCards(asCards(filtered.slice(0, 100))))}
            title="Import up to 100 current filtered questions into Flashcards"
          >
            <Layers size={15} />
            Add {Math.min(100, filtered.length)} to Flashcards
          </button>
        </div>

        {/* Topic Pills */}
        <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
          {questionTopics.map((item) => {
            const count = topicCounts[item] || 0;
            return (
              <button
                key={item}
                className={`nav-tab-btn ${topic === item ? 'active' : ''}`}
                style={{ padding: '0.3rem 0.65rem', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
                onClick={() => setTopic(item)}
              >
                <span>{item}</span>
                <span style={{ fontSize: '0.65rem', opacity: 0.75 }}>({count})</span>
              </button>
            );
          })}
        </div>

        {added !== null && (
          <p style={{ fontSize: '0.8rem', color: added > 0 ? '#34d399' : 'var(--text-muted)' }}>
            {added > 0
              ? `${added} question${added === 1 ? '' : 's'} added to the “Q&A Bank” deck in Flashcards.`
              : 'Those questions are already in your flashcards.'}
          </p>
        )}
      </div>

      {/* Results Count & Pagination Controls Top */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.82rem', color: 'var(--text-dim)', flexWrap: 'wrap', gap: '0.5rem' }}>
        <span>
          Showing <strong>{filtered.length === 0 ? 0 : (currentPage - 1) * pageSize + 1}</strong>–
          <strong>{Math.min(currentPage * pageSize, filtered.length)}</strong> of <strong>{filtered.length.toLocaleString()}</strong> questions
        </span>

        {totalPages > 1 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <button
              className="btn btn-ghost"
              disabled={currentPage <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              style={{ padding: '0.25rem 0.5rem' }}
            >
              <ChevronLeft size={16} /> Prev
            </button>
            <span style={{ padding: '0 0.4rem', color: 'var(--text)' }}>
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="btn btn-ghost"
              disabled={currentPage >= totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              style={{ padding: '0.25rem 0.5rem' }}
            >
              Next <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>

      {/* Question Cards List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {paginated.map((q) => {
          const isOpen = openId === q.id;
          const isKnown = known.includes(q.id);
          return (
            <div key={q.id} className="glass-card" style={{ borderColor: isKnown ? 'rgba(16,185,129,0.3)' : undefined, padding: '1rem 1.15rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <button
                  className="btn-icon"
                  style={{ padding: '0.2rem', flexShrink: 0 }}
                  title={isKnown ? 'Mark as needs review' : 'Mark as confident'}
                  onClick={() => toggleKnown(q.id)}
                >
                  {isKnown ? <CheckCircle2 size={18} color="#34d399" /> : <Circle size={18} color="var(--text-dim)" />}
                </button>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '0.25rem', alignItems: 'center' }}>
                    <span className="badge badge-cyan" style={{ fontSize: '0.62rem' }}>{q.topic}</span>
                    {q.tags.map((tag) => (
                      <span key={tag} className="badge" style={{ fontSize: '0.62rem', color: 'var(--text-dim)', border: '1px solid var(--border-subtle)' }}>{tag}</span>
                    ))}
                    {isKnown && (
                      <span className="badge badge-easy" style={{ fontSize: '0.6rem' }}>Mastered</span>
                    )}
                  </div>

                  <h3
                    style={{ fontSize: '0.98rem', color: '#fff', cursor: 'pointer', lineHeight: 1.4 }}
                    onClick={() => setOpenId(isOpen ? null : q.id)}
                  >
                    {q.question}
                  </h3>

                  {isOpen && (
                    <div style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.6, marginTop: '0.6rem', padding: '0.75rem', background: 'var(--bg-surface-elevated)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                      {q.answer}
                    </div>
                  )}

                  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.6rem', flexWrap: 'wrap' }}>
                    <button
                      className="btn-secondary"
                      style={{ padding: '0.3rem 0.7rem', fontSize: '0.75rem' }}
                      onClick={() => setOpenId(isOpen ? null : q.id)}
                    >
                      {isOpen ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                      {isOpen ? 'Hide answer' : 'Reveal answer'}
                    </button>
                    {onAddCards && (
                      <button
                        className="btn-secondary"
                        style={{ padding: '0.3rem 0.7rem', fontSize: '0.75rem' }}
                        onClick={() => setAdded(onAddCards(asCards([q])))}
                      >
                        <Layers size={13} /> Add to Flashcards
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {filtered.length === 0 && (
          <div className="glass-card" style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
            <Sparkles size={32} style={{ color: 'var(--text-dim)', marginBottom: '0.75rem' }} />
            <h3>No questions match that filter</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Try another topic, clear your search, or adjust the confidence filter.</p>
          </div>
        )}
      </div>

      {/* Bottom Pagination */}
      {totalPages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', padding: '1rem 0' }}>
          <button
            className="btn btn-secondary"
            disabled={currentPage <= 1}
            onClick={() => { setPage(1); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}
          >
            First
          </button>
          <button
            className="btn btn-secondary"
            disabled={currentPage <= 1}
            onClick={() => { setPage((p) => Math.max(1, p - 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}
          >
            <ChevronLeft size={14} /> Prev
          </button>
          <span style={{ fontSize: '0.82rem', padding: '0 0.5rem', color: 'var(--text)' }}>
            Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
          </span>
          <button
            className="btn btn-secondary"
            disabled={currentPage >= totalPages}
            onClick={() => { setPage((p) => Math.min(totalPages, p + 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}
          >
            Next <ChevronRight size={14} />
          </button>
          <button
            className="btn btn-secondary"
            disabled={currentPage >= totalPages}
            onClick={() => { setPage(totalPages); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}
          >
            Last
          </button>
        </div>
      )}
    </div>
  );
};


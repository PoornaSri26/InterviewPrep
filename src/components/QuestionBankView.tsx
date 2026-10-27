import React, { useMemo, useState } from 'react';
import { BankQuestion, questionBank, questionTopics } from '../data/questionBankData';
import { BookOpen, Search, CheckCircle2, Circle, Layers, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

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

  const filtered = useMemo(() => {
    const needle = search.trim().toLowerCase();
    return questionBank.filter((q) => {
      const matchesTopic = topic === 'All' || q.topic === topic;
      const haystack = `${q.question} ${q.answer} ${q.tags.join(' ')}`.toLowerCase();
      return matchesTopic && (!needle || haystack.includes(needle));
    });
  }, [search, topic]);

  const asCards = (questions: BankQuestion[]) =>
    questions.map((q) => ({
      front: q.question,
      back: `${q.answer}\n\n— ${q.topic}${q.tags.length ? ` · ${q.tags.join(', ')}` : ''}`
    }));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
            <span className="badge badge-primary">
              <BookOpen size={12} />
              Question Bank
            </span>
            <span className="badge badge-cyan">{questionBank.length} questions · {questionTopics.length - 1} tracks</span>
          </div>
          <h2 style={{ fontSize: '1.75rem' }}>Language & Framework Rapid Review</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '700px' }}>
            One crisp model answer per question across JavaScript, TypeScript, React, Node, Python, Java, SQL, system design, DevOps, security, behavioral, and the questions you should ask them.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', minWidth: '220px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            <span>Marked confident</span>
            <strong style={{ color: '#34d399' }}>{known.length}/{questionBank.length}</strong>
          </div>
          <div style={{ height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '10px' }}>
            <div style={{ width: `${(known.length / questionBank.length) * 100}%`, height: '100%', background: '#10b981', borderRadius: '10px' }} />
          </div>
        </div>
      </div>

      <div className="glass-card" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <div className="search-input-wrapper" style={{ flex: '1 1 280px' }}>
            <Search size={16} />
            <input
              type="text"
              className="search-input"
              placeholder="Search questions, answers, or tags (event loop, index, on-call…)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button
            className="btn-secondary"
            style={{ padding: '0.5rem 1rem', fontSize: '0.82rem' }}
            disabled={!onAddCards || filtered.length === 0}
            onClick={() => onAddCards && setAdded(onAddCards(asCards(filtered)))}
          >
            <Layers size={15} />
            Add {filtered.length} to Flashcards
          </button>
        </div>

        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
          {questionTopics.map((item) => (
            <button
              key={item}
              className={`nav-tab-btn ${topic === item ? 'active' : ''}`}
              style={{ padding: '0.32rem 0.75rem', fontSize: '0.78rem' }}
              onClick={() => setTopic(item)}
            >
              {item}
            </button>
          ))}
        </div>

        {added !== null && (
          <p style={{ fontSize: '0.8rem', color: added > 0 ? '#34d399' : 'var(--text-muted)' }}>
            {added > 0
              ? `${added} question${added === 1 ? '' : 's'} added to the “Q&A Bank” deck in Flashcards.`
              : 'Those questions are already in your flashcards.'}
          </p>
        )}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {filtered.map((q) => {
          const isOpen = openId === q.id;
          const isKnown = known.includes(q.id);
          return (
            <div key={q.id} className="glass-card" style={{ borderColor: isKnown ? 'rgba(16,185,129,0.25)' : undefined, padding: '1rem 1.15rem' }}>
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
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '0.25rem' }}>
                    <span className="badge badge-cyan" style={{ fontSize: '0.62rem' }}>{q.topic}</span>
                    {q.tags.map((tag) => (
                      <span key={tag} className="badge" style={{ fontSize: '0.62rem', color: 'var(--text-dim)', border: '1px solid var(--border-subtle)' }}>{tag}</span>
                    ))}
                  </div>

                  <h3 style={{ fontSize: '0.98rem', color: '#fff' }}>{q.question}</h3>

                  {isOpen && (
                    <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.6, marginTop: '0.5rem' }}>
                      {q.answer}
                    </p>
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
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Try another topic or clear the search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

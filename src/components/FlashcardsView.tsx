import React, { useMemo, useState } from 'react';
import { Flashcard } from '../types';
import { RepoFlashcardsFile, BankCard } from '../types/minedContent';
import {
  Layers,
  Play,
  RotateCcw,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  Lightbulb,
  BookOpen,
  Download,
  Star
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface FlashcardsViewProps {
  cards: Flashcard[];
  onGradeCard: (cardId: string, quality: 0 | 1 | 2 | 3 | 4 | 5) => void;
  bankDecks?: RepoFlashcardsFile | null;
  onImportCards?: (cards: BankCard[], deckName: string) => number;
}

const BUILTIN_DECKS = [
  'Big-O',
  'Data Structures',
  'Algorithms',
  'System Design',
  'SQL',
  'OS & Networks',
  'JavaScript',
  'Behavioral'
];

const todayStr = () => new Date().toISOString().split('T')[0];

const isDue = (card: Flashcard) =>
  !card.nextReviewDate || card.nextReviewDate <= todayStr();

const statusBadge = (status: Flashcard['status']) => {
  if (status === 'mastered') return 'badge badge-easy';
  if (status === 'learning') return 'badge badge-medium';
  return 'badge badge-primary';
};

export const FlashcardsView: React.FC<FlashcardsViewProps> = ({ cards, onGradeCard, bankDecks = null, onImportCards }) => {
  const [deckFilter, setDeckFilter] = useState<string>('All');
  const [sessionQueue, setSessionQueue] = useState<string[]>([]);
  const [revealed, setRevealed] = useState(false);
  const [reviewedCount, setReviewedCount] = useState(0);
  const [showImport, setShowImport] = useState(false);
  const [importFlash, setImportFlash] = useState<string | null>(null);

  // Decks = builtin + any imported repo decks present in the user's cards
  const DECKS = useMemo(() => {
    const fromCards = cards.map((c) => c.deck).filter((d) => d && !BUILTIN_DECKS.includes(d));
    return ['All', ...BUILTIN_DECKS, ...Array.from(new Set(fromCards))];
  }, [cards]);

  const handleImportDeck = (deckName: string, deckCards: BankCard[]) => {
    if (!onImportCards) return;
    const added = onImportCards(deckCards, deckName);
    setImportFlash(added > 0 ? `Imported ${added} “${deckName}” cards.` : `All “${deckName}” cards are already in your collection.`);
    setTimeout(() => setImportFlash(null), 3200);
  };

  const filtered = useMemo(
    () => (deckFilter === 'All' ? cards : cards.filter((c) => c.deck === deckFilter)),
    [cards, deckFilter]
  );

  const dueCards = useMemo(() => filtered.filter(isDue), [filtered]);
  const masteredCount = cards.filter((c) => c.status === 'mastered').length;
  const learningCount = cards.filter((c) => c.status === 'learning').length;
  const newCount = cards.filter((c) => c.status === 'new').length;
  const masteredPercent = Math.round((masteredCount / (cards.length || 1)) * 100);

  const currentCard =
    sessionQueue.length > 0 ? cards.find((c) => c.id === sessionQueue[0]) : undefined;

  const startSession = () => {
    const queue = dueCards.map((c) => c.id);
    if (queue.length === 0) return;
    setSessionQueue(queue);
    setReviewedCount(0);
    setRevealed(false);
  };

  const exitSession = () => {
    setSessionQueue([]);
    setRevealed(false);
  };

  const grade = (quality: 0 | 1 | 2 | 3 | 4 | 5) => {
    if (!currentCard) return;
    onGradeCard(currentCard.id, quality);
    const nextQueue = sessionQueue.slice(1);
    const nextReviewed = reviewedCount + 1;
    setSessionQueue(nextQueue);
    setReviewedCount(nextReviewed);
    setRevealed(false);
    if (nextQueue.length === 0) {
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.7 } });
    }
  };

  // ---------- Review Session Mode ----------
  if (sessionQueue.length > 0 && currentCard) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span className="badge badge-primary">
              <Play size={12} /> Review Session
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              {reviewedCount} reviewed · {sessionQueue.length} remaining
            </span>
          </div>
          <button className="btn-secondary" style={{ padding: '0.4rem 0.9rem', fontSize: '0.8rem' }} onClick={exitSession}>
            <RotateCcw size={13} /> End Session
          </button>
        </div>

        {/* The Card */}
        <div
          className="glass-card-elevated"
          style={{ minHeight: '300px', cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', gap: '1rem', padding: '2.5rem', borderColor: 'rgba(99, 102, 241, 0.35)' }}
          onClick={() => setRevealed(true)}
        >
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <span className="badge badge-cyan">{currentCard.deck}</span>
            <span className="badge badge-primary">{currentCard.topic}</span>
          </div>

          {!revealed ? (
            <>
              <h2 style={{ fontSize: '1.5rem', maxWidth: '720px' }}>{currentCard.front}</h2>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Sparkles size={14} /> Think of your answer, then click to reveal
              </p>
            </>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', maxWidth: '760px', animation: 'fadeIn 0.25s ease-out' }}>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', lineHeight: 1.6 }}>{currentCard.back}</p>
              {currentCard.mnemonic && (
                <div style={{ background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: 'var(--radius-md)', padding: '0.6rem 0.9rem', fontSize: '0.85rem', color: '#fbbf24' }}>
                  <Lightbulb size={13} style={{ marginRight: '0.4rem', verticalAlign: 'text-bottom' }} />
                  <strong>Mnemonic:</strong> {currentCard.mnemonic}
                </div>
              )}
              {currentCard.example && (
                <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '0.6rem 0.9rem', fontSize: '0.82rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  {currentCard.example}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Grading */}
        {revealed ? (
          <div className="grid-3" style={{ gap: '1rem' }}>
            <button className="btn-danger" style={{ padding: '0.8rem' }} onClick={() => grade(1)}>
              <RotateCcw size={15} /> Again · I forgot this
            </button>
            <button className="btn-primary" style={{ padding: '0.8rem' }} onClick={() => grade(3)}>
              <CheckCircle2 size={15} /> Good · Recalled with effort
            </button>
            <button className="btn-success" style={{ padding: '0.8rem' }} onClick={() => grade(5)}>
              <Sparkles size={15} /> Easy · Instant recall
            </button>
          </div>
        ) : (
          <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
            Grade honestly — the SM-2 scheduler uses it to set your next review interval.
          </p>
        )}
      </div>
    );
  }

  // ---------- Session Complete ----------
  if (sessionQueue.length === 0 && reviewedCount > 0) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div className="glass-card" style={{ textAlign: 'center', padding: '3rem 2rem', background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.12), rgba(99, 102, 241, 0.1))' }}>
          <CheckCircle2 size={42} color="#34d399" style={{ marginBottom: '0.75rem' }} />
          <h2 style={{ fontSize: '1.6rem', marginBottom: '0.4rem' }}>Session complete!</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
            You reviewed <strong>{reviewedCount}</strong> cards. Intervals have been rescheduled by the SM-2 algorithm.
          </p>
          <button className="btn-secondary" style={{ padding: '0.55rem 1.2rem' }} onClick={() => setReviewedCount(0)}>
            Back to Decks
          </button>
        </div>
      </div>
    );
  }

  // ---------- Overview / Browse ----------
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Banner */}
      <div className="glass-card" style={{ background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(99, 102, 241, 0.12))', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', padding: '2rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
            <span className="badge badge-primary">
              <Layers size={12} /> SRS Flashcards
            </span>
            <span className="badge badge-cyan">{dueCards.length} due now</span>
          </div>
          <h2 style={{ fontSize: '1.75rem' }}>Spaced Repetition Deck</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '620px' }}>
            Interview-grade recall drills across {DECKS.length - 1} decks — built-in Big-O, algorithms, system design, SQL, JS, OS/networks and behavioral, plus any repo decks you import. Cards resurface exactly when you're about to forget them.
          </p>
        </div>
        <div style={{ minWidth: '220px', background: 'var(--bg-surface-elevated)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
            <span>Mastered:</span>
            <strong>{masteredCount} / {cards.length}</strong>
          </div>
          <div style={{ height: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '10px', marginBottom: '0.85rem' }}>
            <div style={{ width: `${masteredPercent}%`, height: '100%', background: 'linear-gradient(90deg, #06b6d4, #6366f1)', borderRadius: '10px', transition: 'width 0.3s ease' }} />
          </div>
          <button
            className="btn-primary"
            style={{ width: '100%', padding: '0.6rem', opacity: dueCards.length === 0 ? 0.5 : 1 }}
            onClick={startSession}
            disabled={dueCards.length === 0}
          >
            <Play size={15} />
            {dueCards.length === 0 ? 'All caught up' : `Review ${dueCards.length} due card${dueCards.length === 1 ? '' : 's'}`}
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid-3" style={{ gap: '1rem' }}>
        <div className="glass-card" style={{ padding: '1.1rem' }}>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>New</div>
          <div style={{ fontSize: '1.6rem', fontWeight: 800 }}>{newCount}</div>
        </div>
        <div className="glass-card" style={{ padding: '1.1rem' }}>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Learning</div>
          <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fbbf24' }}>{learningCount}</div>
        </div>
        <div className="glass-card" style={{ padding: '1.1rem' }}>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Mastered</div>
          <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#34d399' }}>{masteredCount}</div>
        </div>
      </div>

      {/* Import flash */}
      {importFlash && (
        <div className="glass-card" style={{ borderColor: 'rgba(16, 185, 129, 0.45)', background: 'rgba(16, 185, 129, 0.08)', padding: '0.7rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <CheckCircle2 size={16} color="#34d399" />
          <span style={{ fontSize: '0.85rem', color: '#34d399' }}>{importFlash}</span>
        </div>
      )}

      {/* Repo deck imports */}
      {bankDecks && bankDecks.decks.length > 0 && (
        <div className="glass-card" style={{ padding: '1.1rem 1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span className="badge badge-medium"><Download size={11} /> Repo Decks</span>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                {bankDecks.totalCards.toLocaleString()} Q/A cards mined from {bankDecks.decks.length} decks — import any deck to drill it with SM-2.
              </span>
            </div>
            <button className="btn-secondary" style={{ padding: '0.35rem 0.8rem', fontSize: '0.78rem' }} onClick={() => setShowImport((v) => !v)}>
              {showImport ? 'Hide decks' : 'Browse decks'}
            </button>
          </div>
          {showImport && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '0.6rem' }}>
              {bankDecks.decks.map((d) => {
                const alreadyHave = cards.filter((c) => c.deck === d.name).length;
                return (
                  <div key={d.name} style={{ border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '0.75rem 0.85rem', background: 'var(--bg-surface-elevated)', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
                      <strong style={{ fontSize: '0.86rem' }}>{d.name}</strong>
                      <span className="badge badge-cyan" style={{ fontSize: '0.64rem' }}>{d.cardCount} cards</span>
                    </div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Star size={10} /> {d.repos[0]?.repo}{d.repos.length > 1 ? ` +${d.repos.length - 1} more` : ''}
                    </div>
                    <button
                      className={alreadyHave > 0 ? 'btn-secondary' : 'btn-primary'}
                      style={{ padding: '0.4rem 0.7rem', fontSize: '0.78rem' }}
                      onClick={() => handleImportDeck(d.name, d.cards)}
                    >
                      <Download size={13} /> {alreadyHave > 0 ? `Import more (${alreadyHave} owned)` : 'Import deck'}
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Deck Filter */}
      <div className="filter-bar" style={{ marginBottom: 0 }}>
        {DECKS.map((d) => (
          <button
            key={d}
            className={d === deckFilter ? 'nav-tab-btn active' : 'nav-tab-btn'}
            onClick={() => setDeckFilter(d)}
          >
            {d}
          </button>
        ))}
      </div>

      {/* Card Grid */}
      <div className="grid-3" style={{ gap: '1rem' }}>
        {filtered.map((card) => (
          <div key={card.id} className="glass-card" style={{ padding: '1.1rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="badge badge-cyan" style={{ fontSize: '0.68rem' }}>{card.deck}</span>
              <span className={statusBadge(card.status)}>{card.status}</span>
            </div>
            <p style={{ fontSize: '0.92rem', fontWeight: 600, lineHeight: 1.45 }}>{card.front}</p>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>{card.back}</p>
            <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '0.55rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.72rem', color: 'var(--text-dim)' }}>
              <span>
                <BookOpen size={11} style={{ verticalAlign: 'text-bottom', marginRight: '0.25rem' }} />
                {card.topic} · every {card.intervalDays}d
              </span>
              {isDue(card) && (
                <span style={{ color: '#a5b4fc', display: 'inline-flex', alignItems: 'center' }}>
                  due <ChevronRight size={12} />
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

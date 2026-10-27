import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Problem, Flashcard, CompanyProfile, SystemDesignTopic, ResourceItem } from '../types';
import { repoIndex } from '../content/repoIndex';
import { repoCatalog } from '../data/repoCatalog';
import { Search, CornerDownLeft, X, Layers, Building, Table, BookOpen, BrainCircuit, Network, Library, Mic, Database, Globe } from 'lucide-react';

export interface GlobalSearchData {
  problems: Problem[];
  flashcards: Flashcard[];
  companies: CompanyProfile[];
  systemTopics: SystemDesignTopic[];
  resources: ResourceItem[];
  repoCatalog?: typeof repoCatalog;
}

interface GlobalSearchProps {
  isOpen: boolean;
  onClose: () => void;
  data: GlobalSearchData;
  /** jump(target: tabId, key?) — key identifies the record within the tab */
  onJump: (tab: string, key?: string) => void;
}

type Hit = { tab: string; key: string; title: string; sub: string; kind: string; icon: React.ReactNode };

const iconFor: Record<string, React.ReactNode> = {
  dsa: <BrainCircuit size={14} />,
  flashcards: <Layers size={14} />,
  sheets: <Table size={14} />,
  library: <BookOpen size={14} />,
  companies: <Building size={14} />,
  'system-design': <Network size={14} />,
  resources: <Library size={14} />,
  mock: <Mic size={14} />,
  bank: <Database size={14} />
};

export const GlobalSearch: React.FC<GlobalSearchProps> = ({ isOpen, onClose, data, onJump }) => {
  const [q, setQ] = useState('');
  const [sheetHits, setSheetHits] = useState<Hit[] | null>(null);
  const [bankHits, setBankHits] = useState<Hit[] | null>(null);
  const [catalogHits, setCatalogHits] = useState<Hit[] | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setQ('');
      setSheetHits(null);
      setBankHits(null);
      setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [isOpen]);

  // Lazy-load the mined repo bank on first keystroke (mirrors the sheet index)
  useEffect(() => {
    if (!isOpen || q.trim().length < 2) {
      if (bankHits) setBankHits(null);
      return;
    }
    let cancelled = false;
    fetch('/repo-bank.json')
      .then((r) => (r.ok ? r.json() : null))
      .then((json) => {
        if (cancelled || !json) return;
        const needle = q.trim().toLowerCase();
        const hits: Hit[] = [];
        for (const p of json.problems) {
          if (hits.length >= 150) break;
          if (p.title.toLowerCase().includes(needle) || p.topics.some((t: string) => t.toLowerCase().includes(needle))) {
            hits.push({
              tab: 'dsa',
              key: p.id,
              title: p.title,
              sub: `Repo bank · ${p.difficulty.toLowerCase()} · ${p.sourceRepo}`,
              kind: 'Repo bank',
              icon: iconFor.bank
            });
          }
        }
        setBankHits(hits);
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, [isOpen, q]);

  // Lazy-load the 1000-repo catalog on first keystroke
  useEffect(() => {
    if (!isOpen || q.trim().length < 2) {
      if (catalogHits) setCatalogHits(null);
      return;
    }
    let cancelled = false;
    const needle = q.trim().toLowerCase();
    const hits: Hit[] = [];
    for (const entry of repoCatalog) {
      if (hits.length >= 200) break;
      if (entry.name.toLowerCase().includes(needle) || entry.repo.toLowerCase().includes(needle) || entry.category.toLowerCase().includes(needle)) {
        hits.push({
          tab: 'resources',
          key: entry.repo,
          title: entry.name,
          sub: `★ ${(entry.stars / 1000).toFixed(1)}k · ${entry.category} · github.com/${entry.repo}`,
          kind: 'Repo catalog',
          icon: <Globe size={14} />
        });
      }
    }
    if (!cancelled) setCatalogHits(hits);
    return () => { cancelled = true; };
  }, [isOpen, q]);

  // Lazy-load the big sheet index (6.5k rows) on first keystroke
  useEffect(() => {
    if (!isOpen || q.trim().length < 2) {
      if (sheetHits) setSheetHits(null);
      return;
    }
    let cancelled = false;
    fetch('/leetcode-sheets.json')
      .then((r) => (r.ok ? r.json() : null))
      .then((json) => {
        if (cancelled || !json) return;
        const needle = q.trim().toLowerCase();
        const hits: Hit[] = [];
        for (const sheet of json.sheets) {
          for (const p of sheet.problems) {
            if (hits.length >= 400) break;
            if (p.title.toLowerCase().includes(needle)) {
              hits.push({
                tab: 'sheets',
                key: sheet.company,
                title: p.title,
                sub: `${sheet.company} · ${p.difficulty.toLowerCase()} · freq ${p.frequency}`,
                kind: 'Sheet problem',
                icon: iconFor.sheets
              });
            }
          }
          if (hits.length >= 400) break;
        }
        setSheetHits(hits);
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, [isOpen, q]);

  const hits = useMemo<Hit[]>(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return [];
    const out: Hit[] = [];
    const push = (h: Hit) => out.length < 60 && out.push(h);

    for (const p of data.problems) {
      if (p.title.toLowerCase().includes(needle) || p.category.toLowerCase().includes(needle) || p.companies.some((c) => c.toLowerCase().includes(needle)))
        push({ tab: 'dsa', key: p.id, title: p.title, sub: `${p.difficulty} · ${p.category} · ${p.status}`, kind: 'DSA problem', icon: iconFor.dsa });
    }
    for (const f of data.flashcards) {
      if (f.front.toLowerCase().includes(needle) || f.deck.toLowerCase().includes(needle) || f.topic.toLowerCase().includes(needle))
        push({ tab: 'flashcards', key: f.deck, title: f.front, sub: `Flashcard · ${f.deck}`, kind: 'Flashcard', icon: iconFor.flashcards });
    }
    for (const c of data.companies) {
      if (c.name.toLowerCase().includes(needle))
        push({ tab: 'companies', key: c.id, title: c.name, sub: `${c.tier} · company prep`, kind: 'Company', icon: iconFor.companies });
    }
    for (const s of data.systemTopics) {
      if (s.title.toLowerCase().includes(needle))
        push({ tab: 'system-design', key: s.id, title: s.title, sub: `System design · ${s.difficulty}`, kind: 'System design', icon: iconFor['system-design'] });
    }
    for (const r of data.resources) {
      if (r.name.toLowerCase().includes(needle) || r.description.toLowerCase().includes(needle))
        push({ tab: 'resources', key: r.id, title: r.name, sub: `${r.category} · ${r.pricing}`, kind: 'Resource', icon: iconFor.resources });
    }
    for (const repo of repoIndex) {
      if (repo.repo.toLowerCase().includes(needle))
        push({ tab: 'resources', key: repo.repo, title: repo.repo, sub: `★ ${(repo.stars / 1000).toFixed(1)}k · ${repo.category}`, kind: 'Repo', icon: iconFor.library });
    }
    return out;
  }, [q, data]);

  const allHits = useMemo(() => [...hits, ...(sheetHits ?? []), ...(bankHits ?? []), ...(catalogHits ?? [])], [hits, sheetHits, bankHits, catalogHits]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'Enter' && allHits[0]) {
      onJump(allHits[0].tab, allHits[0].key);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" style={{ alignItems: 'flex-start', paddingTop: '12vh' }} onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '680px', padding: '0', overflow: 'hidden' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', padding: '1rem 1.25rem', borderBottom: '1px solid var(--border-subtle)' }}>
          <Search size={17} color="var(--text-dim)" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Search everything: problems, flashcards, sheets, repos, companies, resources…"
            style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', color: '#fff', fontSize: '0.95rem' }}
          />
          <button className="btn-icon" style={{ width: '28px', height: '28px' }} onClick={onClose}>
            <X size={14} />
          </button>
        </div>

        <div style={{ maxHeight: '55vh', overflowY: 'auto', padding: '0.5rem' }}>
          {q.trim().length === 0 && (
            <p style={{ fontSize: '0.82rem', color: 'var(--text-dim)', padding: '1.25rem', textAlign: 'center' }}>
              Type at least 1 character. Press <code>Enter</code> to jump to the top hit.
            </p>
          )}
          {q.trim().length >= 1 && allHits.length === 0 && (
            <p style={{ fontSize: '0.82rem', color: 'var(--text-dim)', padding: '1.25rem', textAlign: 'center' }}>
              No matches across modules.
            </p>
          )}
          {allHits.map((h, i) => (
            <button
              key={`${h.tab}-${h.key}-${i}`}
              onClick={() => { onJump(h.tab, h.key); onClose(); }}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '0.7rem',
                padding: '0.6rem 0.8rem',
                background: i === 0 ? 'rgba(99, 102, 241, 0.14)' : 'transparent',
                border: 'none',
                borderRadius: 'var(--radius-sm)',
                cursor: 'pointer',
                textAlign: 'left',
                color: '#fff'
              }}
            >
              <span style={{ color: 'var(--accent-cyan)', display: 'flex' }}>{h.icon}</span>
              <span style={{ flex: 1, minWidth: 0 }}>
                <span style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{h.title}</span>
                <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-dim)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{h.sub}</span>
              </span>
              <span className="badge badge-primary" style={{ fontSize: '0.62rem' }}>{h.kind}</span>
              {i === 0 && <CornerDownLeft size={13} color="var(--text-dim)" />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

import React, { useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Problem,
  Difficulty,
  SheetMetaMap,
} from '../types';
import type { BankProblem, RepoBankFile } from '../types/minedContent';
import {
  Search,
  Filter,
  Plus,
  ExternalLink,
  CheckCircle,
  RotateCcw,
  Code2,
  BrainCircuit,
  Calendar,
  Building2,
  Tag,
  Zap,
  Database,
  Download,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

interface DsaTrackerViewProps {
  problems: Problem[];
  onSolveProblem: (id: string) => void;
  onGradeProblem: (id: string, quality: 0 | 1 | 2 | 3 | 4 | 5) => void;
  onAddCustomProblem: (problem: Problem) => void;
  sheetMeta?: SheetMetaMap | null;
  sheetInfo?: { companies: number; totalProblems: number } | null;
  repoBank?: RepoBankFile | null;
  onImportFromBank?: (items: BankProblem[]) => number;
}

export const DsaTrackerView: React.FC<DsaTrackerViewProps> = ({
  problems,
  onSolveProblem,
  onGradeProblem,
  onAddCustomProblem,
  sheetMeta = null,
  sheetInfo = null,
  repoBank = null,
  onImportFromBank,
}) => {
  const [search, setSearch] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState(
    'All'
  );
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [showAddModal, setShowAddModal] = useState(false);

  // Repo Bank import dialog state
  const [showBankModal, setShowBankModal] = useState(false);
  const [bankSearch, setBankSearch] = useState('');
  const [bankDifficulty, setBankDifficulty] = useState<string>('All');
  const [bankRepo, setBankRepo] = useState('All');
  const [selectedIds, setSelectedIds] = useState<Set<string>>(
    new Set()
  );

  const [importFlash, setImportFlash] = useState<string | null>(
    null
  );

  // Form state for adding custom problem
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const todayStr = new Date().toISOString().split('T')[0];

  const dueTodayCount = problems.filter(
    (p) => p.nextReviewDate && p.nextReviewDate <= todayStr && p.status !== 'unsolved'
  ).length;

  const companiesList = [
    'All',
    'Google',
    'Meta',
    'Amazon',
    'Microsoft',
    'Apple',
    'Uber',
  ];
  const difficultiesList = ['All', 'Easy', 'Medium', 'Hard'];
  const statusesList = [
    'All',
    'Due Today',
    'Mastered',
    'Learning',
    'Unsolved',
  ];

  const trackerTitleSet = useMemo(
    () => new Set(problems.map((p) => p.title.trim().toLowerCase())),
    [problems]
  );

  const inTracker = (b: BankProblem) =>
    trackerTitleSet.has(b.title.trim().toLowerCase());

  const addToTracker = (item: BankProblem, difficulty: Difficulty, companiesString: string) => {
    const companies = companiesString
      .split(',')
      .map((c) => c.trim())
      .filter(Boolean);

    const existingLower = new Map(
      problems.map((p) => [p.title.toLowerCase(), p.title])
    );
    const existingTitle = existingLower.get(item.title.toLowerCase());
    if (existingTitle) {
      setImportFlash(`Skipped: ${existingTitle} already in tracker.`);
      return;
    }

    const description = `${item.difficulty} DSA problem from ${item.sourceRepo}.\nSource: ${item.url}`;

    const problem: Problem = {
      id: uuidv4(),
      title: item.title,
      difficulty,
      category: item.topics[0] ?? 'Algorithms',
      companies,
      description,
      examples: [],
      constraints: [
        'Constraints will need to be added by hand after import.',
      ],
      starterCodeJs: '// TODO: implement solution',
      starterCodePy: '# TODO: implement solution',
      testCases: [
        { input: '', expected: '' },
      ],
      solutionCodeJs: '// Add your solution here.',
      timeComplexity: 'Not yet analyzed.',
      spaceComplexity: 'Not yet analyzed.',
      hints: ['Start by clarifying the problem statement.', 'Work through one example by hand.', 'Write down constraints before coding.'],
      sourceUrl: item.url,
      status: 'unsolved',
      intervalDays: 1,
      easeFactor: 2.5,
      repetitionCount: 0,
    };

    onAddCustomProblem(problem);
    setImportFlash(`Imported: ${item.title}`);
    setSelectedIds((prev) => {
      const next = new Set(prev);
      next.delete(item.id);
      return next;
    });
};


  const filteredProblems = useMemo(() => {
    let filtered = problems;

    if (search.trim()) {
      const q = search.trim().toLowerCase();
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(q)
      );
    }

    if (selectedCompany !== 'All') {
      filtered = filtered.filter((p) =>
        p.companies.includes(selectedCompany)
      );
    }

    if (selectedDifficulty !== 'All') {
      filtered = filtered.filter(
        (p) => p.difficulty === selectedDifficulty
      );
    }

    if (selectedStatus === 'Due Today') {
      filtered = filtered.filter(
        (p) =>
          p.nextReviewDate &&
          p.nextReviewDate <= todayStr &&
          p.status !== 'unsolved'
      );
    } else if (selectedStatus === 'Mastered') {
      filtered = filtered.filter((p) => p.status === 'mastered');
    } else if (selectedStatus === 'Learning') {
      filtered = filtered.filter((p) => p.status === 'learning');
    } else if (selectedStatus === 'Unsolved') {
      filtered = filtered.filter((p) => p.status === 'unsolved');
    }

    return filtered.sort((a, b) => a.title.localeCompare(b.title));
  }, [
    problems,
    search,
    selectedCompany,
    selectedDifficulty,
    selectedStatus,
    todayStr,
  ]);

  const [trackerPage, setTrackerPage] = useState(1);
  const [trackerPageSize, setTrackerPageSize] = useState(30);

  const totalTrackerPages = Math.max(1, Math.ceil(filteredProblems.length / trackerPageSize));
  const currentTrackerPage = Math.min(trackerPage, totalTrackerPages);
  const paginatedProblems = useMemo(() => {
    if (trackerPageSize === 0) return filteredProblems;
    const start = (currentTrackerPage - 1) * trackerPageSize;
    return filteredProblems.slice(start, start + trackerPageSize);
  }, [filteredProblems, currentTrackerPage, trackerPageSize]);

  const handleQuickImportTopN = (count: number) => {
    if (!onImportFromBank || !repoBank?.problems?.length) return;
    const items = repoBank.problems.slice(0, count);
    const added = onImportFromBank(items);
    setImportFlash(`Successfully imported ${added} problems into your SRS Tracker!`);
  };

  const filteredBankProblems = useMemo(() => {
    return (repoBank?.problems ?? []).filter((item) => {
      const q = bankSearch.trim().toLowerCase();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.sourceRepo.toLowerCase().includes(q) ||
        item.topics.some((t) => t.toLowerCase().includes(q));
      const matchesDifficulty =
        bankDifficulty === 'All' ||
        item.difficulty === bankDifficulty;
      const matchesRepo =
        bankRepo === 'All' ||
        item.sourceRepo === bankRepo;
      return matchesSearch && matchesDifficulty && matchesRepo;
    });
  }, [repoBank, bankSearch, bankDifficulty, bankRepo]);

  const handleImportSelected = () => {
    if (!onImportFromBank) return;
    const ids = Array.from(selectedIds);
    const items = (repoBank?.problems ?? []).filter((item) =>
      ids.includes(item.id)
    );
    if (items.length === 0) return;
    const added = onImportFromBank(items);
    setShowBankModal(false);
    setSelectedIds(new Set());
    setImportFlash(`Imported ${added} problems from repo bank.`);
  };

  const handleAddCustom = () => {
    const trimmedTitle = newTitle.trim();
    if (!trimmedTitle) {
      setImportFlash('Problem title is required.');
      return;
    }

    const companies = newDescription
      .split(',')
      .map((c) => c.trim())
      .filter(Boolean);

    const newProblem: Problem = {
      id: uuidv4(),
      title: trimmedTitle,
      difficulty: 'Medium',
      category: 'Dynamic Programming',
      companies: companies.length ? companies : ['Google', 'Meta'],
      description: newDescription.trim() || 'Custom problem added from the DSA tracker.',
      examples: [],
      constraints: [],
      starterCodeJs: '// TODO: implement solution',
      starterCodePy: '# TODO: implement solution',
      testCases: [
        { input: '', expected: '' },
      ],
      solutionCodeJs: '// Add your solution here.',
      timeComplexity: 'Not yet analyzed.',
      spaceComplexity: 'Not yet analyzed.',
      hints: ['Start by clarifying the problem statement.', 'Work through one example by hand.', 'Write down constraints before coding.'],
      status: 'unsolved',
      intervalDays: 1,
      easeFactor: 2.5,
      repetitionCount: 0,
    };

    onAddCustomProblem(newProblem);
    setShowAddModal(false);
    setNewTitle('');
    setNewDescription('');
    setImportFlash(`Added: ${newProblem.title}`);
  };

  const clearFlash = () => setImportFlash(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <BrainCircuit size={20} />
          <div>
            <div
              style={{
                fontSize: '1.1rem',
                fontWeight: 600,
              }}
            >
              DSA Tracker
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
              {problems.length} problems · {sheetInfo?.totalProblems ?? 0} sheet problems ·{' '}
              {repoBank?.problemCount ?? 0} repo bank problems
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button
            className="btn btn-primary"
            onClick={() => setShowBankModal(true)}
            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}
          >
            <Database size={14} /> Import from Repo Bank
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleQuickImportTopN(1000)}
            disabled={!repoBank?.problems?.length}
            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', border: '1px solid rgba(99, 102, 241, 0.4)' }}
            title="Instantly import 1,000 problems into your SRS Tracker"
          >
            <Sparkles size={14} color="#a5b4fc" /> Quick Import 1,000
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setShowAddModal(true)}
            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}
          >
            <Plus size={14} /> Add Problem
          </button>
        </div>
      </div>

      {/* Filters */}
      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <div
          className="search-box"
          style={{ position: 'relative', flex: '1 1 220px', minWidth: '140px' }}
        >
          <Search
            size={14}
            style={{
              position: 'absolute',
              left: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--text-dim)',
            }}
          />
          <input
            type="text"
            placeholder="Search problems..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: '100%',
              padding: '0.45rem 0.6rem 0.45rem 2rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              background: 'var(--bg-surface)',
              color: 'var(--text)',
              fontSize: '0.85rem',
            }}
          />
        </div>

        <select
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
          className="select-chip"
          style={{ padding: '0.45rem 0.6rem' }}
        >
          {companiesList.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <select
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
          className="select-chip"
          style={{ padding: '0.45rem 0.6rem' }}
        >
          {difficultiesList.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>

        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          className="select-chip"
          style={{ padding: '0.45rem 0.6rem' }}
        >
          {statusesList.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Tracker Pagination Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.82rem', color: 'var(--text-dim)', flexWrap: 'wrap', gap: '0.5rem' }}>
        <span>
          Showing <strong>{filteredProblems.length === 0 ? 0 : (currentTrackerPage - 1) * trackerPageSize + 1}</strong>–
          <strong>{Math.min(currentTrackerPage * trackerPageSize, filteredProblems.length)}</strong> of <strong>{filteredProblems.length.toLocaleString()}</strong> problems
        </span>

        {totalTrackerPages > 1 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <button
              className="btn btn-ghost"
              disabled={currentTrackerPage <= 1}
              onClick={() => setTrackerPage((p) => Math.max(1, p - 1))}
              style={{ padding: '0.25rem 0.5rem' }}
            >
              <ChevronLeft size={16} /> Prev
            </button>
            <span style={{ padding: '0 0.4rem', color: 'var(--text)' }}>
              Page {currentTrackerPage} of {totalTrackerPages}
            </span>
            <button
              className="btn btn-ghost"
              disabled={currentTrackerPage >= totalTrackerPages}
              onClick={() => setTrackerPage((p) => Math.min(totalTrackerPages, p + 1))}
              style={{ padding: '0.25rem 0.5rem' }}
            >
              Next <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>

      {/* Problem list */}
      {filteredProblems.length === 0 ? (
        <div
          style={{
            padding: '2rem',
            textAlign: 'center',
            color: 'var(--text-dim)',
          }}
        >
          {problems.length === 0 ? (
            <div>
              No problems yet. Add your first problem or import from the repo bank.
            </div>
          ) : (
            <div>No problems match the current filters.</div>
          )}
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}
        >
          {paginatedProblems.map((problem) => (
            <div
              key={problem.id}
              className="glass-card"
              style={{
                padding: '0.9rem 1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
              }}
            >
              <div style={{ flex: '1 1 200px', minWidth: '160px' }}>
                <div
                  style={{
                    fontWeight: 500,
                    fontSize: '0.95rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    flexWrap: 'wrap',
                  }}
                >
                  <span
                    className={`badge badge-${problem.difficulty === 'Easy' ? 'easy' : problem.difficulty === 'Medium' ? 'medium' : 'hard'}`}
                  >
                    {problem.difficulty}
                  </span>
                  {problem.sourceUrl && (
                    <a
                      href={problem.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--accent-cyan)',
                        textDecoration: 'none',
                      }}
                    >
                      <ExternalLink size={12} /> Source
                    </a>
                  )}
                </div>
                <div
                  style={{
                    marginTop: '0.25rem',
                    fontSize: '0.85rem',
                    color: 'var(--text-dim)',
                  }}
                >
                  {problem.title}
                </div>
                <div
                  style={{
                    marginTop: '0.35rem',
                    fontSize: '0.75rem',
                    color: 'var(--text-dim)',
                  }}
                >
                  {problem.companies.length > 0 &&
                    problem.companies.map((c) => (
                      <span
                        key={c}
                        className="tag"
                        style={{ marginRight: '0.25rem' }}
                      >
                        {c}
                      </span>
                    ))}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span
                  className={`badge ${
                    problem.status === 'mastered'
                      ? 'badge-easy'
                      : problem.status === 'learning'
                      ? 'badge-medium'
                      : problem.status === 'reviewing'
                      ? 'badge-primary'
                      : 'badge-dim'
                  }`}
                  style={{ textTransform: 'capitalize' }}
                >
                  {problem.status}
                </span>

                {problem.nextReviewDate && (
                  <span
                    className={`badge ${
                      problem.nextReviewDate <= todayStr &&
                      problem.status !== 'unsolved'
                        ? 'badge-medium'
                        : 'badge-dim'
                    }`}
                  >
                    <Calendar size={11} />{' '}
                    {problem.nextReviewDate}
                  </span>
                )}

                <div style={{ display: 'flex', gap: '0.35rem' }}>
                  <button
                    className="btn btn-ghost"
                    onClick={() => onSolveProblem(problem.id)}
                    title="Open in sandbox"
                    style={{ padding: '0.35rem', lineHeight: 1 }}
                  >
                    <Code2 size={14} />
                  </button>
                  <button
                    className="btn btn-ghost"
                    onClick={() => onGradeProblem(problem.id, 3)}
                    title="Quick grade (3)"
                    style={{ padding: '0.35rem', lineHeight: 1 }}
                  >
                    <RotateCcw size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tracker Pagination Bottom */}
      {totalTrackerPages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', padding: '1rem 0' }}>
          <button
            className="btn btn-secondary"
            disabled={currentTrackerPage <= 1}
            onClick={() => { setTrackerPage(1); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}
          >
            First
          </button>
          <button
            className="btn btn-secondary"
            disabled={currentTrackerPage <= 1}
            onClick={() => { setTrackerPage((p) => Math.max(1, p - 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}
          >
            <ChevronLeft size={14} /> Prev
          </button>
          <span style={{ fontSize: '0.82rem', padding: '0 0.5rem', color: 'var(--text)' }}>
            Page <strong>{currentTrackerPage}</strong> of <strong>{totalTrackerPages}</strong>
          </span>
          <button
            className="btn btn-secondary"
            disabled={currentTrackerPage >= totalTrackerPages}
            onClick={() => { setTrackerPage((p) => Math.min(totalTrackerPages, p + 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}
          >
            Next <ChevronRight size={14} />
          </button>
          <button
            className="btn btn-secondary"
            disabled={currentTrackerPage >= totalTrackerPages}
            onClick={() => { setTrackerPage(totalTrackerPages); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}
          >
            Last
          </button>
        </div>
      )}

      {/* Flash banner */}
      {importFlash && (
        <div
          className="glass-card"
          style={{
            padding: '0.75rem 1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '0.75rem',
            background: 'var(--bg-surface-elevated)',
          }}
        >
          <div>{importFlash}</div>
          <button
            className="btn btn-ghost"
            onClick={clearFlash}
            style={{ padding: '0.3rem', lineHeight: 1 }}
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* Repo Bank import modal */}
      {showBankModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.45)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 50,
          }}
          onClick={() => setShowBankModal(false)}
        >
          <div
            className="glass-card"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '640px',
              maxHeight: '80vh',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem 1.25rem',
                borderBottom: '1px solid var(--border-subtle)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Database size={18} />
                <div>
                  <div style={{ fontWeight: 600 }}>Repo Bank</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                    {repoBank?.problemCount ?? 0} problems · {repoBank?.repoCount ?? 0} repos
                  </div>
                </div>
              </div>
              <button
                className="btn btn-ghost"
                onClick={() => setShowBankModal(false)}
                style={{ padding: '0.35rem', lineHeight: 1 }}
              >
                <X size={16} />
              </button>
            </div>

            <div
              style={{
                padding: '1rem 1.25rem',
                borderBottom: '1px solid var(--border-subtle)',
                display: 'flex',
                gap: '0.5rem',
                flexWrap: 'wrap',
                alignItems: 'center',
              }}
            >
              <input
                type="text"
                placeholder="Search bank problems..."
                value={bankSearch}
                onChange={(e) => setBankSearch(e.target.value)}
                style={{
                  flex: '1 1 180px',
                  padding: '0.45rem 0.6rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                  background: 'var(--bg-surface)',
                  color: 'var(--text)',
                  fontSize: '0.85rem',
                }}
              />

              <select
                value={bankDifficulty}
                onChange={(e) => setBankDifficulty(e.target.value)}
                className="select-chip"
                style={{ padding: '0.45rem 0.6rem' }}
              >
                <option value="All">All difficulties</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
                <option value="Unknown">Unknown</option>
              </select>

              <select
                value={bankRepo}
                onChange={(e) => setBankRepo(e.target.value)}
                className="select-chip"
                style={{ padding: '0.45rem 0.6rem' }}
              >
                <option value="All">All repos</option>
                {(repoBank?.repos ?? []).map((r) => (
                  <option key={r.repo} value={r.repo}>
                    {r.repo} ({r.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Quick Selection Toolbar */}
            <div
              style={{
                display: 'flex',
                gap: '0.4rem',
                flexWrap: 'wrap',
                padding: '0.5rem 1.25rem',
                background: 'var(--bg-surface-elevated)',
                borderBottom: '1px solid var(--border-subtle)',
                alignItems: 'center',
              }}
            >
              <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Quick select:</span>
              <button
                className="btn btn-ghost"
                style={{ fontSize: '0.72rem', padding: '0.2rem 0.5rem' }}
                onClick={() => setSelectedIds(new Set(filteredBankProblems.slice(0, 50).map((p) => p.id)))}
              >
                Top 50
              </button>
              <button
                className="btn btn-ghost"
                style={{ fontSize: '0.72rem', padding: '0.2rem 0.5rem' }}
                onClick={() => setSelectedIds(new Set(filteredBankProblems.slice(0, 100).map((p) => p.id)))}
              >
                Top 100
              </button>
              <button
                className="btn btn-ghost"
                style={{ fontSize: '0.72rem', padding: '0.2rem 0.5rem' }}
                onClick={() => setSelectedIds(new Set(filteredBankProblems.slice(0, 500).map((p) => p.id)))}
              >
                Top 500
              </button>
              <button
                className="btn btn-ghost"
                style={{ fontSize: '0.72rem', padding: '0.2rem 0.5rem', color: 'var(--accent-cyan)' }}
                onClick={() => setSelectedIds(new Set(filteredBankProblems.slice(0, 1000).map((p) => p.id)))}
              >
                Top 1,000
              </button>
              <button
                className="btn btn-ghost"
                style={{ fontSize: '0.72rem', padding: '0.2rem 0.5rem' }}
                onClick={() => setSelectedIds(new Set(filteredBankProblems.map((p) => p.id)))}
              >
                All Filtered ({filteredBankProblems.length})
              </button>
              {selectedIds.size > 0 && (
                <button
                  className="btn btn-ghost"
                  style={{ fontSize: '0.72rem', padding: '0.2rem 0.5rem', color: 'var(--text-dim)' }}
                  onClick={() => setSelectedIds(new Set())}
                >
                  Clear ({selectedIds.size})
                </button>
              )}
            </div>

            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                padding: '0.5rem 0',
              }}
            >
              {filteredBankProblems.length === 0 ? (
                <div style={{ padding: '1rem', textAlign: 'center', color: 'var(--text-dim)' }}>
                  No repo bank problems match your filter.
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  {filteredBankProblems.slice(0, 300).map((item) => {
                      const selected = selectedIds.has(item.id);
                      return (
                        <label
                          key={item.id}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.5rem',
                            padding: '0.5rem 1.25rem',
                            cursor: 'pointer',
                            background:
                              selected
                                ? 'var(--bg-surface-elevated)'
                                : 'transparent',
                            borderRadius: 'var(--radius-md)',
                          }}
                        >
                          <input
                            type="checkbox"
                            checked={selected}
                            onChange={() =>
                              setSelectedIds((prev) => {
                                const next = new Set(prev);
                                if (next.has(item.id)) {
                                  next.delete(item.id);
                                } else {
                                  next.add(item.id);
                                }
                                return next;
                              })
                            }
                            style={{ marginTop: '0.2rem' }}
                          />
                          <div style={{ flex: 1 }}>
                            <div
                              style={{
                                fontWeight: 500,
                                fontSize: '0.9rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                flexWrap: 'wrap',
                              }}
                            >
                              <span
                                className={`badge badge-${item.difficulty === 'Easy' ? 'easy' : item.difficulty === 'Hard' ? 'hard' : 'medium'}`}
                              >
                                {item.difficulty}
                              </span>
                              <span
                                style={{
                                  color: 'var(--text-dim)',
                                  fontSize: '0.75rem',
                                }}
                              >
                                {item.sourceRepo}
                              </span>
                            </div>
                            <div
                              style={{
                                marginTop: '0.2rem',
                                fontSize: '0.85rem',
                                color: 'var(--text-dim)',
                              }}
                            >
                              {item.title}
                            </div>
                            {item.topics.length > 0 && (
                              <div
                                style={{
                                  marginTop: '0.2rem',
                                  fontSize: '0.7rem',
                                  color: 'var(--text-dim)',
                                }}
                              >
                                {item.topics.map((t) => (
                                  <span
                                    key={t}
                                    className="tag"
                                    style={{ marginRight: '0.2rem' }}
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                          {inTracker(item) && (
                            <CheckCircle
                              size={16}
                              style={{ color: 'var(--accent-easy)', flexShrink: 0 }}
                            />
                          )}
                        </label>
                      );
                    })}
                </div>
              )}
            </div>

            <div
              style={{
                padding: '0.75rem 1.25rem',
                borderTop: '1px solid var(--border-subtle)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                {selectedIds.size} selected
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  className="btn btn-ghost"
                  onClick={() => setShowBankModal(false)}
                  style={{ padding: '0.45rem 0.75rem' }}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-primary"
                  onClick={handleImportSelected}
                  disabled={selectedIds.size === 0}
                  style={{ padding: '0.45rem 0.75rem' }}
                >
                  Import {selectedIds.size}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add custom problem modal */}
      {showAddModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.45)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 50,
          }}
          onClick={() => setShowAddModal(false)}
        >
          <div
            className="glass-card"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '480px',
              padding: '1.25rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Plus size={18} />
                <div style={{ fontWeight: 600 }}>Add Problem</div>
              </div>
              <button
                className="btn btn-ghost"
                onClick={() => setShowAddModal(false)}
                style={{ padding: '0.35rem', lineHeight: 1 }}
              >
                <X size={16} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.8rem',
                    color: 'var(--text-dim)',
                    marginBottom: '0.3rem',
                  }}
                >
                  Title
                </label>
                <input
                  type="text"
                  placeholder="Two Sum"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.5rem 0.6rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-subtle)',
                    background: 'var(--bg-surface)',
                    color: 'var(--text)',
                    fontSize: '0.9rem',
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.8rem',
                    color: 'var(--text-dim)',
                    marginBottom: '0.3rem',
                  }}
                >
                  Companies (comma separated)
                </label>
                <input
                  type="text"
                  placeholder="Google, Meta"
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.5rem 0.6rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-subtle)',
                    background: 'var(--bg-surface)',
                    color: 'var(--text)',
                    fontSize: '0.9rem',
                  }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                <button
                  className="btn btn-ghost"
                  onClick={() => setShowAddModal(false)}
                  style={{ padding: '0.5rem 0.75rem' }}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-primary"
                  onClick={handleAddCustom}
                  style={{ padding: '0.5rem 0.75rem' }}
                >
                  Add Problem
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

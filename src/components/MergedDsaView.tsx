import React, { useState } from 'react';
import { Problem, ProblemSolution, SolutionMap, SheetMetaMap, LeetcodeSheetProblem } from '../types';
import { BankProblem } from '../types/minedContent';
import type { RepoBankFile } from '../types/minedContent';
import { DsaTrackerView } from './DsaTrackerView';
import { LeetcodeSheetsView } from './LeetcodeSheetsView';
import { BrainCircuit, Table, CheckCircle2, Flame, FileSpreadsheet, Database } from 'lucide-react';

interface MergedDsaViewProps {
  initialMode: 'tracker' | 'sheets';
  problems: Problem[];
  onSolveProblem: (id: string) => void;
  onGradeProblem: (id: string, quality: 0 | 1 | 2 | 3 | 4 | 5) => void;
  onAddCustomProblem: (problem: Problem) => void;
  solutions: SolutionMap;
  onSaveSolution: (slug: string, solution: ProblemSolution) => void;
  openCompany: string | null;
  onOpenCompanyConsumed: () => void;
  onAddToTracker: (row: LeetcodeSheetProblem, company: string) => void;
  sheetMeta: SheetMetaMap | null;
  sheetInfo: { companies: number; totalProblems: number } | null;
  onImportFromBank?: (items: BankProblem[]) => number;
  repoBank?: RepoBankFile | null;
}

/**
 * One merged module: your SM-2 spaced-repetition tracker and the
 * frequency-ranked company sheets share the same shell, stats and data.
 */
export const MergedDsaView: React.FC<MergedDsaViewProps> = ({
  initialMode,
  problems,
  onSolveProblem,
  onGradeProblem,
  onAddCustomProblem,
  solutions,
  onSaveSolution,
  openCompany,
  onOpenCompanyConsumed,
  onAddToTracker,
  sheetMeta,
  sheetInfo,
  onImportFromBank,
  repoBank = null
}) => {
  // Deep-linked company always opens the sheets pane
  const [mode, setMode] = useState<'tracker' | 'sheets'>(openCompany ? 'sheets' : initialMode);

  const todayStr = new Date().toISOString().split('T')[0];
  const dueToday = problems.filter((p) => p.nextReviewDate && p.nextReviewDate <= todayStr && p.status !== 'unsolved').length;
  const mastered = problems.filter((p) => p.status === 'mastered').length;
  // imports carry a `sheet-` or `bank-` prefix — count both, they're all "from the banks"
  const fromSheets = problems.filter((p) => p.id.startsWith('sheet-') || p.id.startsWith('bank-')).length;
  const solvedSolutions = Object.values(solutions).filter((s) => s.solved).length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Merged module header */}
      <div className="glass-card" style={{ background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.14), rgba(245, 158, 11, 0.1))', padding: '1.35rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', flexWrap: 'wrap' }}>
          {/* Segmented switcher */}
          <div style={{ display: 'flex', background: 'var(--bg-surface-elevated)', borderRadius: 'var(--radius-full)', padding: '0.25rem', border: '1px solid var(--border-subtle)' }}>
            <button
              className={mode === 'tracker' ? 'nav-tab-btn active' : 'nav-tab-btn'}
              onClick={() => setMode('tracker')}
              style={{ padding: '0.45rem 0.95rem' }}
            >
              <BrainCircuit size={14} /> My SRS Tracker
            </button>
            <button
              className={mode === 'sheets' ? 'nav-tab-btn active' : 'nav-tab-btn'}
              onClick={() => setMode('sheets')}
              style={{ padding: '0.45rem 0.95rem' }}
            >
              <Table size={14} /> Company Sheets
            </button>
          </div>

          {/* Merged stats */}
          <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
            <span className="badge badge-medium" title="Problems due for SM-2 review today">
              <Flame size={11} /> {dueToday} due
            </span>
            <span className="badge badge-easy">
              <CheckCircle2 size={11} /> {mastered} mastered
            </span>
            <span className="badge badge-primary" title="Problems imported from company sheets or the repo bank into your SRS queue">
              <FileSpreadsheet size={11} /> {fromSheets} imported
            </span>

            <span className="badge badge-cyan" title="Your saved solutions across sheet problems">
            {solvedSolutions} solved by you
          </span>
          {sheetInfo && (
            <span className="badge badge-primary" title="Full sheet bank available in the Company Sheets pane">
              {sheetInfo.totalProblems.toLocaleString()} problems · {sheetInfo.companies} companies
            </span>
          )}
          {repoBank && (
            <span className="badge badge-cyan" title="Mined GitHub problem bank available in the tracker's import dialog">
              <Database size={11} /> {repoBank.problemCount.toLocaleString().replace('NaN','0') ?? '0'} repo bank
            </span>
          )}
          </div>
        </div>

        <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', maxWidth: '320px', textAlign: 'right' }}>
          One module: grade any problem with SM-2, then drill it from its company sheet — status and solutions stay in sync.
        </span>
      </div>

      {mode === 'tracker' ? (
        <DsaTrackerView
          problems={problems}
          onSolveProblem={onSolveProblem}
          onGradeProblem={onGradeProblem}
          onAddCustomProblem={onAddCustomProblem}
          sheetMeta={sheetMeta}
          sheetInfo={sheetInfo}
          repoBank={repoBank}
          onImportFromBank={onImportFromBank}
        />
      ) : (
        <LeetcodeSheetsView
          solutions={solutions}
          onSaveSolution={onSaveSolution}
          openCompany={openCompany}
          onOpenCompanyConsumed={onOpenCompanyConsumed}
          onAddToTracker={onAddToTracker}
          existingProblemIds={problems.map((p) => p.id)}
          problems={problems}
        />
      )}
    </div>
  );
};

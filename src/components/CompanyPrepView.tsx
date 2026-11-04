import React, { useMemo, useState } from 'react';
import { companyProfiles } from '../data/companyData';
import {
  ExternalLink,
  Clock,
  Target,
  Lightbulb,
  ListChecks,
  Compass,
  Award,
  Table,
  Search,
} from 'lucide-react';

interface CompanyPrepViewProps {
  onOpenSheet?: (company: string) => void;
}

const diffBadge = (d: string) =>
  d === 'Easy' ? 'badge badge-easy' : d === 'Hard' ? 'badge badge-hard' : 'badge badge-medium';

export const CompanyPrepView: React.FC<CompanyPrepViewProps> = ({ onOpenSheet }) => {
  const [selectedId, setSelectedId] = useState(companyProfiles[0]?.id ?? '');
  const [searchCompany, setSearchCompany] = useState('');
  const [tierFilter, setTierFilter] = useState<string>('All');

  const tiers = ['All', 'FAANG+', 'Tier 1', 'Quant / Fintech', 'AI Frontier'];

  const filteredCompanies = useMemo(() => {
    return companyProfiles.filter((c) => {
      const matchesTier = tierFilter === 'All' || c.tier === tierFilter;
      const matchesSearch = !searchCompany || c.name.toLowerCase().includes(searchCompany.toLowerCase());
      return matchesTier && matchesSearch;
    });
  }, [tierFilter, searchCompany]);

  const company = companyProfiles.find((c) => c.id === selectedId) ?? companyProfiles[0];

  if (!company) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Banner */}
      <div className="glass-card" style={{ background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.12), rgba(99, 102, 241, 0.12))', padding: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
          <span className="badge badge-primary">
            <Compass size={12} /> Company Intelligence
          </span>
          <span className="badge badge-cyan">{companyProfiles.length} Top Tech Companies & Quant Firms</span>
        </div>
        <h2 style={{ fontSize: '1.75rem' }}>Company-Specific Interview Prep</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '720px' }}>
          Real interview loops, leadership-principle frameworks, frequently-asked problems and insider tactics for each target company — so you prepare for <em>their</em> process, not a generic one.
        </p>
      </div>

      {/* Search and Tier Filter Bar */}
      <div className="glass-card" style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <div className="search-input-wrapper" style={{ flex: '1 1 240px' }}>
            <Search size={16} />
            <input
              type="text"
              className="search-input"
              placeholder="Search 52 companies (Google, OpenAI, Jane Street, Stripe…)"
              value={searchCompany}
              onChange={(e) => setSearchCompany(e.target.value)}
            />
          </div>

          <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
            {tiers.map((t) => (
              <button
                key={t}
                className={tierFilter === t ? 'nav-tab-btn active' : 'nav-tab-btn'}
                onClick={() => setTierFilter(t)}
                style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Company Selector Buttons */}
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', maxHeight: '180px', overflowY: 'auto', padding: '0.25rem 0' }}>
          {filteredCompanies.map((c) => {
            const active = c.id === company.id;
            return (
              <button
                key={c.id}
                className={active ? 'nav-tab-btn active' : 'nav-tab-btn'}
                onClick={() => setSelectedId(c.id)}
                style={active ? { background: c.accentColor, boxShadow: `0 2px 10px ${c.accentColor}55`, color: '#fff' } : { border: `1px solid ${c.accentColor}44` }}
              >
                <span>{c.logo}</span> {c.name}
              </button>
            );
          })}
          {filteredCompanies.length === 0 && (
            <div style={{ padding: '0.5rem', color: 'var(--text-dim)', fontSize: '0.82rem' }}>
              No companies match "{searchCompany}".
            </div>
          )}
        </div>
      </div>

      {/* Company Header */}
      <div
        className="glass-card"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          borderColor: `${company.accentColor}66`,
          background: `linear-gradient(135deg, ${company.accentColor}1f, transparent 60%)`
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ fontSize: '2.2rem', background: 'var(--bg-surface-elevated)', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--radius-md)', border: `1px solid ${company.accentColor}66` }}>
            {company.logo}
          </div>
          <div>
            <h2 style={{ fontSize: '1.5rem' }}>{company.name}</h2>
            <span className="badge badge-primary" style={{ marginTop: '0.3rem' }}>
              <Award size={12} /> {company.tier}
            </span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
          <button
            className="btn-primary"
            style={{ padding: '0.5rem 0.9rem', fontSize: '0.8rem' }}
            title="Open this company's frequency-ranked LeetCode sheet"
            onClick={() => onOpenSheet?.(company.name.split(' /')[0].split(' (')[0])}
          >
            <Table size={13} /> Company Sheet
          </button>
          <a href={company.glassdoorUrl} target="_blank" rel="noreferrer" className="btn-secondary" style={{ textDecoration: 'none', padding: '0.5rem 0.9rem', fontSize: '0.8rem' }}>
            <ExternalLink size={13} /> Glassdoor Questions
          </a>
          <a href={company.levelsFyiUrl} target="_blank" rel="noreferrer" className="btn-secondary" style={{ textDecoration: 'none', padding: '0.5rem 0.9rem', fontSize: '0.8rem' }}>
            <ExternalLink size={13} /> Levels.fyi Comp
          </a>
        </div>
      </div>

      <div className="grid-2" style={{ gap: '1.5rem', alignItems: 'start' }}>
        {/* Interview Process Timeline */}
        <div className="glass-card">
          <h3 style={{ fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <Clock size={17} color="var(--accent-cyan)" /> Interview Process
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {company.interviewProcess.map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.9rem', position: 'relative', paddingBottom: i < company.interviewProcess.length - 1 ? '1.25rem' : 0 }}>
                {i < company.interviewProcess.length - 1 && (
                  <div style={{ position: 'absolute', left: '14px', top: '30px', bottom: 0, width: '2px', background: `${company.accentColor}44` }} />
                )}
                <div style={{ minWidth: '30px', height: '30px', borderRadius: '50%', background: `${company.accentColor}22`, border: `1px solid ${company.accentColor}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800, color: '#fff', zIndex: 1 }}>
                  {i + 1}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <strong style={{ fontSize: '0.92rem' }}>{step.stage}</strong>
                    <span className="badge badge-cyan" style={{ fontSize: '0.68rem' }}>{step.duration}</span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem', lineHeight: 1.55 }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Technical Focus */}
          <div className="glass-card">
            <h3 style={{ fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
              <Target size={17} color="var(--accent-primary)" /> Technical Focus Areas
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', paddingLeft: '1.1rem', fontSize: '0.85rem', color: 'var(--text-main)' }}>
              {company.technicalFocus.map((f, i) => (
                <li key={i} style={{ lineHeight: 1.55 }}>{f}</li>
              ))}
            </ul>
          </div>

          {/* Common Problems */}
          <div className="glass-card">
            <h3 style={{ fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
              <ListChecks size={17} color="var(--accent-emerald)" /> Frequently Asked Problems
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              {company.commonProblems.map((p, i) => (
                <a
                  key={i}
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.6rem', padding: '0.5rem 0.7rem', background: 'var(--bg-surface-elevated)', borderRadius: 'var(--radius-sm)', textDecoration: 'none', border: '1px solid var(--border-subtle)' }}
                >
                  <span style={{ fontSize: '0.85rem', color: '#fff' }}>{p.title}</span>
                  <span className={diffBadge(p.difficulty)} style={{ fontSize: '0.68rem' }}>{p.difficulty}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Principles (Amazon-style) */}
      {company.lpPrinciples && company.lpPrinciples.length > 0 && (
        <div className="glass-card">
          <h3 style={{ fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <Award size={17} color="var(--accent-amber)" /> Leadership Principles — Graded in Every Round
          </h3>
          <div className="grid-3" style={{ gap: '1rem' }}>
            {company.lpPrinciples.map((lp) => (
              <div key={lp.name} className="glass-card-elevated" style={{ padding: '1rem' }}>
                <strong style={{ fontSize: '0.9rem', color: '#fbbf24', display: 'block', marginBottom: '0.3rem' }}>{lp.name}</strong>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.55rem', lineHeight: 1.5 }}>{lp.description}</p>
                <p style={{ fontSize: '0.74rem', color: 'var(--text-dim)', fontStyle: 'italic', lineHeight: 1.5 }}>
                  “{lp.sampleQuestion}”
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Insider Tips */}
      <div className="glass-card" style={{ background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08), transparent 55%)' }}>
        <h3 style={{ fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <Lightbulb size={17} color="var(--accent-amber)" /> Insider Tips
        </h3>
        <div className="grid-2" style={{ gap: '0.75rem' }}>
          {company.insiderTips.map((tip, i) => (
            <div key={i} style={{ display: 'flex', gap: '0.6rem', background: 'var(--bg-surface-elevated)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
              <span style={{ minWidth: '22px', height: '22px', borderRadius: '50%', background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', fontSize: '0.72rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {i + 1}
              </span>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-main)', lineHeight: 1.55 }}>{tip}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

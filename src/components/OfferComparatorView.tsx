import React, { useMemo, useState } from 'react';
import { OfferPackage } from '../types';
import { Wallet, Plus, Trash2, X, Trophy, MapPin, Pencil } from 'lucide-react';

interface OfferComparatorViewProps {
  offers: OfferPackage[];
  onSaveOffer: (offer: OfferPackage) => void;
  onDeleteOffer: (id: string) => void;
}

const usd = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

const bonusCash = (o: OfferPackage) => Math.round((o.baseSalary * o.annualBonus) / 100);
const annualEquity = (o: OfferPackage) => Math.round(o.equityTotal / o.vestingYears);
const year1Cash = (o: OfferPackage) => o.baseSalary + bonusCash(o) + o.signingBonus;
const steadyAnnual = (o: OfferPackage) =>
  o.baseSalary + bonusCash(o) + annualEquity(o) + o.benefits.health;
const adjustedAnnual = (o: OfferPackage) => Math.round((steadyAnnual(o) * 100) / o.costOfLivingIndex);
const fourYearTotal = (o: OfferPackage) =>
  o.baseSalary * 4 + bonusCash(o) * 4 + o.signingBonus + o.equityTotal + o.benefits.health * 4;

type Metric = {
  label: string;
  render: (o: OfferPackage) => string;
  value?: (o: OfferPackage) => number; // present => highlight max
};

const METRICS: Metric[] = [
  { label: 'Location', render: (o) => o.location },
  { label: 'Cost-of-Living Index (SF = 100)', render: (o) => String(o.costOfLivingIndex) },
  { label: 'Base Salary', render: (o) => usd(o.baseSalary), value: (o) => o.baseSalary },
  { label: 'Target Bonus', render: (o) => `${o.annualBonus}% · ${usd(bonusCash(o))}`, value: (o) => bonusCash(o) },
  { label: 'Signing Bonus', render: (o) => usd(o.signingBonus), value: (o) => o.signingBonus },
  {
    label: 'Equity (total / per year)',
    render: (o) => `${usd(o.equityTotal)} / ${usd(annualEquity(o))}`,
    value: (o) => annualEquity(o)
  },
  { label: 'Year-1 Cash', render: (o) => usd(year1Cash(o)), value: (o) => year1Cash(o) },
  { label: 'Steady-State Annual Comp', render: (o) => usd(steadyAnnual(o)), value: (o) => steadyAnnual(o) },
  {
    label: '✅ COL-Adjusted Annual (higher = better real pay)',
    render: (o) => usd(adjustedAnnual(o)),
    value: (o) => adjustedAnnual(o)
  },
  { label: '4-Year Total Comp', render: (o) => usd(fourYearTotal(o)), value: (o) => fourYearTotal(o) },
  { label: '401(k) Match', render: (o) => `${o.benefits.retirement401k}%`, value: (o) => o.benefits.retirement401k },
  { label: 'PTO Days', render: (o) => `${o.benefits.pto}`, value: (o) => o.benefits.pto },
  { label: 'Remote Days / Week', render: (o) => `${o.benefits.remoteDays}`, value: (o) => o.benefits.remoteDays }
];

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'var(--bg-surface)',
  border: '1px solid var(--border-subtle)',
  borderRadius: 'var(--radius-sm)',
  padding: '0.5rem 0.7rem',
  color: '#fff',
  fontSize: '0.85rem',
  outline: 'none'
};

const Field: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <label style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
    {label}
    {children}
  </label>
);

const emptyForm = {
  companyName: '',
  location: '',
  role: '',
  level: '',
  costOfLivingIndex: '100',
  baseSalary: '',
  annualBonus: '10',
  signingBonus: '',
  equityTotal: '',
  vestingYears: '4',
  cliffMonths: '12',
  health: '',
  retirement401k: '50',
  pto: '15',
  remoteDays: '0',
  otherPerks: '',
  notes: ''
};

export const OfferComparatorView: React.FC<OfferComparatorViewProps> = ({
  offers,
  onSaveOffer,
  onDeleteOffer
}) => {
  const [formOpen, setFormOpen] = useState(false);
  const [form, setForm] = useState({ ...emptyForm });

  const bestOffer = useMemo(() => {
    if (offers.length === 0) return undefined;
    return [...offers].sort((a, b) => adjustedAnnual(b) - adjustedAnnual(a))[0];
  }, [offers]);

  const set = (key: keyof typeof emptyForm) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = () => {
    if (!form.companyName.trim() || !form.baseSalary.trim()) return;
    const offer: OfferPackage = {
      id: `offer-${Date.now()}`,
      companyName: form.companyName.trim(),
      location: form.location.trim() || '—',
      costOfLivingIndex: Number(form.costOfLivingIndex) || 100,
      role: form.role.trim() || 'Software Engineer',
      level: form.level.trim() || '—',
      baseSalary: Number(form.baseSalary) || 0,
      annualBonus: Number(form.annualBonus) || 0,
      signingBonus: Number(form.signingBonus) || 0,
      equityTotal: Number(form.equityTotal) || 0,
      vestingYears: Number(form.vestingYears) || 4,
      cliffMonths: Number(form.cliffMonths) || 12,
      benefits: {
        health: Number(form.health) || 0,
        retirement401k: Number(form.retirement401k) || 0,
        pto: Number(form.pto) || 0,
        remoteDays: Number(form.remoteDays) || 0,
        otherPerks: form.otherPerks.trim()
      },
      notes: form.notes.trim(),
      createdAt: new Date().toISOString().split('T')[0]
    };
    onSaveOffer(offer);
    setForm({ ...emptyForm });
    setFormOpen(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Banner */}
      <div className="glass-card" style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.14), rgba(99, 102, 241, 0.12))', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', padding: '2rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
            <span className="badge badge-primary">
              <Wallet size={12} /> Offer Comparator
            </span>
            <span className="badge badge-cyan">{offers.length} offer{offers.length === 1 ? '' : 's'} tracked</span>
          </div>
          <h2 style={{ fontSize: '1.75rem' }}>Negotiate With Real Numbers</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '640px' }}>
            Compare offers on cost-of-living-adjusted pay, vesting, sign-on and benefits — not just headline base salary.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', minWidth: '230px' }}>
          {bestOffer && (
            <div style={{ background: 'var(--bg-surface-elevated)', padding: '0.7rem 0.9rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(245, 158, 11, 0.35)', fontSize: '0.82rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#fbbf24', fontWeight: 700, marginBottom: '0.15rem' }}>
                <Trophy size={14} /> Best real pay: {bestOffer.companyName}
              </div>
              <span style={{ color: 'var(--text-muted)' }}>{usd(adjustedAnnual(bestOffer))}/yr adjusted</span>
            </div>
          )}
          <button className="btn-primary" style={{ padding: '0.6rem 1rem' }} onClick={() => setFormOpen(true)}>
            <Plus size={15} /> Add an Offer
          </button>
        </div>
      </div>

      {offers.length === 0 && (
        <div className="glass-card" style={{ textAlign: 'center', padding: '2.5rem' }}>
          <p style={{ color: 'var(--text-muted)' }}>No offers tracked yet — add your first offer to start comparing.</p>
        </div>
      )}

      {/* Comparison Table */}
      {offers.length >= 2 && (
        <div className="glass-card" style={{ padding: '1.25rem', overflowX: 'auto' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Side-by-Side Comparison</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem', minWidth: '560px' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '0.55rem 0.7rem', color: 'var(--text-dim)', fontSize: '0.72rem', textTransform: 'uppercase', borderBottom: '1px solid var(--border-subtle)', width: '230px' }}>
                  Metric
                </th>
                {offers.map((o) => (
                  <th key={o.id} style={{ textAlign: 'left', padding: '0.55rem 0.7rem', borderBottom: '1px solid var(--border-subtle)', color: '#fff', fontSize: '0.85rem' }}>
                    <span style={{ marginRight: '0.35rem' }}>{o.companyName}</span>
                    <span style={{ color: 'var(--text-dim)', fontWeight: 400, fontSize: '0.75rem' }}>{o.level}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {METRICS.map((m) => {
                let bestId: string | null = null;
                if (m.value && offers.length >= 2) {
                  const best = [...offers].sort((a, b) => (m.value!(b) ?? 0) - (m.value!(a) ?? 0))[0];
                  bestId = best.id;
                }
                return (
                  <tr key={m.label} style={{ background: 'rgba(255,255,255,0.02)' }}>
                    <td style={{ padding: '0.5rem 0.7rem', color: 'var(--text-muted)', borderBottom: '1px solid var(--border-subtle)' }}>{m.label}</td>
                    {offers.map((o) => (
                      <td
                        key={o.id}
                        style={{
                          padding: '0.5rem 0.7rem',
                          borderBottom: '1px solid var(--border-subtle)',
                          color: o.id === bestId ? '#34d399' : 'var(--text-main)',
                          fontWeight: o.id === bestId ? 700 : 400
                        }}
                      >
                        {m.render(o)}
                        {o.id === bestId && <span title="Best value" style={{ marginLeft: '0.35rem' }}>▲</span>}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Offer Cards */}
      <div className="grid-3" style={{ gap: '1rem', alignItems: 'start' }}>
        {offers.map((o) => (
          <div key={o.id} className="glass-card" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', borderColor: o.id === bestOffer?.id ? 'rgba(245, 158, 11, 0.4)' : undefined }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem' }}>{o.companyName} · {o.level}</h3>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <MapPin size={11} /> {o.location} · {o.role}
                </p>
              </div>
              <button
                className="btn-icon"
                title="Delete offer"
                style={{ width: '30px', height: '30px' }}
                onClick={() => {
                  if (confirm(`Delete the ${o.companyName} offer?`)) onDeleteOffer(o.id);
                }}
              >
                <Trash2 size={13} />
              </button>
            </div>

            <div style={{ background: 'var(--bg-surface-elevated)', borderRadius: 'var(--radius-md)', padding: '0.8rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Base</span>
                <strong>{usd(o.baseSalary)}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Bonus · Signing</span>
                <strong>{o.annualBonus}% · {usd(o.signingBonus)}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Equity</span>
                <strong>{usd(o.equityTotal)} / {o.vestingYears}y</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.4rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>COL-adjusted /yr</span>
                <strong style={{ color: '#34d399' }}>{usd(adjustedAnnual(o))}</strong>
              </div>
            </div>

            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <span>🏥 {usd(o.benefits.health)}/yr health · {o.benefits.retirement401k}% 401(k)</span>
              <span>🌴 {o.benefits.pto} PTO days · {o.benefits.remoteDays} remote days/wk</span>
              {o.benefits.otherPerks && <span style={{ color: 'var(--text-dim)' }}>{o.benefits.otherPerks}</span>}
            </div>

            {o.notes && (
              <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontStyle: 'italic', lineHeight: 1.5, borderTop: '1px solid var(--border-subtle)', paddingTop: '0.55rem' }}>
                {o.notes}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Add Offer Modal */}
      {formOpen && (
        <div className="modal-overlay" onClick={() => setFormOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '680px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
              <h3 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Pencil size={17} color="var(--accent-primary)" /> Add Offer Package
              </h3>
              <button className="btn-icon" onClick={() => setFormOpen(false)}>
                <X size={16} />
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.85rem' }}>
              <Field label="Company *"><input style={inputStyle} value={form.companyName} onChange={set('companyName')} placeholder="e.g. Google" /></Field>
              <Field label="Location"><input style={inputStyle} value={form.location} onChange={set('location')} placeholder="e.g. Seattle, WA" /></Field>
              <Field label="Role"><input style={inputStyle} value={form.role} onChange={set('role')} placeholder="SWE" /></Field>
              <Field label="Level"><input style={inputStyle} value={form.level} onChange={set('level')} placeholder="L4 / E4 / L5" /></Field>
              <Field label="COL Index (SF = 100)"><input style={inputStyle} type="number" value={form.costOfLivingIndex} onChange={set('costOfLivingIndex')} /></Field>
              <Field label="Base Salary ($) *"><input style={inputStyle} type="number" value={form.baseSalary} onChange={set('baseSalary')} placeholder="165000" /></Field>
              <Field label="Target Bonus (%)"><input style={inputStyle} type="number" value={form.annualBonus} onChange={set('annualBonus')} /></Field>
              <Field label="Signing Bonus ($)"><input style={inputStyle} type="number" value={form.signingBonus} onChange={set('signingBonus')} /></Field>
              <Field label="Equity Total ($)"><input style={inputStyle} type="number" value={form.equityTotal} onChange={set('equityTotal')} placeholder="360000" /></Field>
              <Field label="Vesting Years"><input style={inputStyle} type="number" value={form.vestingYears} onChange={set('vestingYears')} /></Field>
              <Field label="Cliff (months)"><input style={inputStyle} type="number" value={form.cliffMonths} onChange={set('cliffMonths')} /></Field>
              <Field label="Health / yr ($)"><input style={inputStyle} type="number" value={form.health} onChange={set('health')} /></Field>
              <Field label="401(k) Match (%)"><input style={inputStyle} type="number" value={form.retirement401k} onChange={set('retirement401k')} /></Field>
              <Field label="PTO Days"><input style={inputStyle} type="number" value={form.pto} onChange={set('pto')} /></Field>
              <Field label="Remote Days / Week"><input style={inputStyle} type="number" value={form.remoteDays} onChange={set('remoteDays')} /></Field>
              <Field label="Other Perks"><input style={inputStyle} value={form.otherPerks} onChange={set('otherPerks')} placeholder="Meals, gear stipend..." /></Field>
              <div style={{ gridColumn: '1 / -1' }}>
                <Field label="Notes"><input style={inputStyle} value={form.notes} onChange={set('notes')} placeholder="Vesting quirks, negotiation context..." /></Field>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.6rem', marginTop: '1.25rem' }}>
              <button className="btn-secondary" style={{ padding: '0.55rem 1rem' }} onClick={() => setFormOpen(false)}>
                Cancel
              </button>
              <button
                className="btn-primary"
                style={{ padding: '0.55rem 1.1rem', opacity: !form.companyName.trim() || !form.baseSalary.trim() ? 0.5 : 1 }}
                disabled={!form.companyName.trim() || !form.baseSalary.trim()}
                onClick={handleSubmit}
              >
                Save Offer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

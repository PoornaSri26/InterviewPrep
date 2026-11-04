import React from 'react';
import { Calendar } from 'lucide-react';

export const StreakCalendar: React.FC = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const activity = [true, true, true, true, false, true, true]; // mock data
  
  return (
    <div className="glass-card" style={{ padding: '1.25rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
        <Calendar size={20} color="var(--accent-amber)" />
        <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Weekly Activity</h3>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.5rem' }}>
        {days.map((day, i) => (
          <div key={day} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{day}</div>
            <div
              style={{
                width: '100%',
                aspectRatio: '1',
                borderRadius: 'var(--radius-md)',
                background: activity[i] ? 'rgba(251, 191, 36, 0.3)' : 'var(--bg-surface)',
                border: activity[i] ? '1px solid var(--accent-amber)' : '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {activity[i] && <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-amber)' }} />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

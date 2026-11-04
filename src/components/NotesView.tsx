import React, { useState } from 'react';
import { StickyNote, Plus, Trash2 } from 'lucide-react';

interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

export const NotesView: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [currentNote, setCurrentNote] = useState<Note | null>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const createNote = () => {
    const newNote: Note = {
      id: Date.now().toString(),
      title: title || 'Untitled Note',
      content,
      createdAt: new Date().toISOString()
    };
    setNotes([newNote, ...notes]);
    setTitle('');
    setContent('');
    setCurrentNote(newNote);
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter(n => n.id !== id));
    if (currentNote?.id === id) setCurrentNote(null);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div className="glass-card" style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <StickyNote size={24} color="var(--accent-primary)" />
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>My Notes</h2>
        </div>
        <p style={{ color: 'var(--text-muted)' }}>
          Capture quick notes, tricks, and insights during your prep
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '1.5rem' }}>
        <div className="glass-card" style={{ padding: '1rem' }}>
          <button className="btn-primary" onClick={createNote} style={{ width: '100%', marginBottom: '1rem' }}>
            <Plus size={16} /> New Note
          </button>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxHeight: '60vh', overflowY: 'auto' }}>
            {notes.map(note => (
              <button
                key={note.id}
                onClick={() => { setCurrentNote(note); setTitle(note.title); setContent(note.content); }}
                style={{
                  textAlign: 'left',
                  padding: '0.75rem',
                  background: currentNote?.id === note.id ? 'var(--accent-primary-glow)' : 'transparent',
                  border: currentNote?.id === note.id ? '1px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--text-primary)',
                  cursor: 'pointer'
                }}
              >
                <div style={{ fontWeight: 600, marginBottom: '0.25rem', fontSize: '0.9rem' }}>{note.title}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  {new Date(note.createdAt).toLocaleDateString()}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="glass-card" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem' }}>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Note title..."
              style={{
                flex: 1,
                padding: '0.75rem',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--text-primary)',
                fontSize: '0.95rem'
              }}
            />
            {currentNote && (
              <button className="btn-secondary" onClick={() => deleteNote(currentNote.id)}>
                <Trash2 size={16} />
              </button>
            )}
          </div>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Start writing your notes..."
            style={{
              width: '100%',
              minHeight: '400px',
              padding: '0.75rem',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              color: 'var(--text-primary)',
              fontSize: '0.9rem',
              fontFamily: 'inherit',
              resize: 'vertical'
            }}
          />
          <button className="btn-primary" onClick={createNote} style={{ marginTop: '1rem' }}>
            {currentNote ? 'Update Note' : 'Save Note'}
          </button>
        </div>
      </div>
    </div>
  );
};

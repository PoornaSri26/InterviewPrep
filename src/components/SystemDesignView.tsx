import React, { useEffect, useMemo, useState } from 'react';
import { systemDesignTopics, systemDesignCheatSheet } from '../data/systemDesignData';
import { SdLibraryFile, SdLibraryTopic } from '../types/minedContent';
import { marked } from 'marked';
import { 
  Network, 
  Server, 
  Database, 
  Layers, 
  Zap, 
  CheckCircle2, 
  Info, 
  Plus, 
  ArrowRight,
  Clock,
  Sparkles,
  BookOpen,
  Search,
  ExternalLink,
  X,
  Star
} from 'lucide-react';

marked.setOptions({ gfm: true, breaks: false });

export const SystemDesignView: React.FC = () => {
  const [selectedTopicId, setSelectedTopicId] = useState(systemDesignTopics[0].id);
  const [activeTab, setActiveTab] = useState<'canvas' | 'framework' | 'cheatsheet' | 'library'>('canvas');
  const [selectedNode, setSelectedNode] = useState<any | null>(null);

  // Deep-dive library (lazily fetched mined content)
  const [library, setLibrary] = useState<SdLibraryFile | null>(null);
  const [libLoading, setLibLoading] = useState(false);
  const [libError, setLibError] = useState('');
  const [libSearch, setLibSearch] = useState('');
  const [libKind, setLibKind] = useState<'All' | 'HLD' | 'LLD'>('All');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [renderedMd, setRenderedMd] = useState<Record<string, string>>({});

  // Fetch the library only when the tab is first opened
  useEffect(() => {
    if (activeTab !== 'library' || library || libLoading || libError) return;
    setLibLoading(true);
    fetch('/sd-library.json')
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`))))
      .then((json: SdLibraryFile) => { setLibrary(json); setLibLoading(false); })
      .catch((e) => { setLibError(`Could not load sd-library.json — run \`npm run mine\`. (${e.message})`); setLibLoading(false); });
  }, [activeTab, library, libLoading, libError]);

  const libFiltered = useMemo(() => {
    if (!library) return [];
    const q = libSearch.trim().toLowerCase();
    return library.topics.filter((t) => {
      if (libKind !== 'All' && t.kind !== libKind) return false;
      if (q && !(t.title.toLowerCase().includes(q) || t.repo.toLowerCase().includes(q) || t.content.toLowerCase().includes(q))) return false;
      return true;
    });
  }, [library, libSearch, libKind]);

  // Group library topics by repo for a browsable layout
  const libGrouped = useMemo(() => {
    const groups = new Map<string, SdLibraryTopic[]>();
    for (const t of libFiltered) {
      const arr = groups.get(t.repo) || [];
      arr.push(t);
      groups.set(t.repo, arr);
    }
    return [...groups.entries()].sort((a, b) => (b[1][0]?.stars || 0) - (a[1][0]?.stars || 0));
  }, [libFiltered]);

  const toggleExpand = async (t: SdLibraryTopic) => {
    if (expandedId === t.id) { setExpandedId(null); return; }
    setExpandedId(t.id);
    if (!renderedMd[t.id]) {
      try {
        const html = await marked.parse(t.content);
        setRenderedMd((prev) => ({ ...prev, [t.id]: html }));
      } catch {
        setRenderedMd((prev) => ({ ...prev, [t.id]: `<pre>${t.content}</pre>` }));
      }
    }
  };

  const currentTopic =
    systemDesignTopics.find((t) => t.id === selectedTopicId) || systemDesignTopics[0];

  const [nodes, setNodes] = useState(currentTopic.architectureNodes);

  // Switch topic resets nodes
  const handleSelectTopic = (id: string) => {
    setSelectedTopicId(id);
    const found = systemDesignTopics.find((t) => t.id === id);
    if (found) {
      setNodes(found.architectureNodes);
      setSelectedNode(null);
    }
  };

  // Add custom node to diagram
  const handleAddNode = (type: 'lb' | 'cache' | 'service' | 'db' | 'queue') => {
    const labels = {
      lb: 'Regional Load Balancer',
      cache: 'Memcached / Redis Cluster',
      service: 'Worker Service',
      db: 'Read Replica (PostgreSQL)',
      queue: 'Kafka Message Queue'
    };

    const newNode = {
      id: 'node-' + Date.now(),
      label: labels[type],
      type,
      x: 300 + Math.floor(Math.random() * 200),
      y: 100 + Math.floor(Math.random() * 180)
    };

    setNodes([...nodes, newNode]);
  };

  const getNodeColor = (type: string) => {
    switch (type) {
      case 'client': return '#38bdf8';
      case 'lb': return '#fbbf24';
      case 'gateway': return '#f43f5e';
      case 'service': return '#818cf8';
      case 'cache': return '#34d399';
      case 'db': return '#c084fc';
      case 'queue': return '#f97316';
      case 'storage': return '#06b6d4';
      default: return '#94a3b8';
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Top Banner */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
            <span className="badge badge-primary">
              <Network size={12} />
              Architecture Studio
            </span>
            <span className="badge badge-cyan">System Design Primer & ByteByteGo</span>
          </div>
          <h2 style={{ fontSize: '1.75rem' }}>System Design & Scalability Studio</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Interactive architectural blueprints, back-of-the-envelope estimation math, and core distributed systems patterns.
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div style={{ display: 'flex', background: 'var(--bg-surface-elevated)', padding: '3px', borderRadius: 'var(--radius-full)' }}>
          <button
            className={`nav-tab-btn ${activeTab === 'canvas' ? 'active' : ''}`}
            onClick={() => setActiveTab('canvas')}
          >
            <Network size={14} />
            Architecture Canvas
          </button>
          <button
            className={`nav-tab-btn ${activeTab === 'framework' ? 'active' : ''}`}
            onClick={() => setActiveTab('framework')}
          >
            <Layers size={14} />
            4-Step Framework
          </button>
          <button
            className={`nav-tab-btn ${activeTab === 'cheatsheet' ? 'active' : ''}`}
            onClick={() => setActiveTab('cheatsheet')}
          >
            <Zap size={14} />
            Latency Cheat Sheet
          </button>
          <button
            className={`nav-tab-btn ${activeTab === 'library' ? 'active' : ''}`}
            onClick={() => setActiveTab('library')}
          >
            <BookOpen size={14} />
            Deep-Dive Library
          </button>
        </div>
      </div>

      {/* Case Study Selector Bar */}
      <div className="glass-card" style={{ padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>Select Blueprint:</span>
          {systemDesignTopics.map((topic) => (
            <button
              key={topic.id}
              className={`nav-tab-btn ${topic.id === currentTopic.id ? 'active' : ''}`}
              style={{ padding: '0.4rem 0.9rem', fontSize: '0.82rem' }}
              onClick={() => handleSelectTopic(topic.id)}
            >
              {topic.title.split('(')[0]}
            </button>
          ))}
        </div>

        <span className={`badge ${currentTopic.difficulty === 'Easy' ? 'badge-easy' : currentTopic.difficulty === 'Medium' ? 'badge-medium' : 'badge-hard'}`}>
          Difficulty: {currentTopic.difficulty}
        </span>
      </div>

      {/* Tab 1: Architecture Canvas */}
      {activeTab === 'canvas' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Top Requirements & Scale Box */}
          <div className="grid-2">
            <div className="glass-card" style={{ padding: '1.25rem' }}>
              <h4 style={{ fontSize: '0.95rem', color: 'var(--accent-cyan)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Clock size={16} />
                Traffic & Scale Estimation
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#e2e8f0', lineHeight: 1.5 }}>
                {currentTopic.scaleEstimate}
              </p>
            </div>

            <div className="glass-card" style={{ padding: '1.25rem' }}>
              <h4 style={{ fontSize: '0.95rem', color: 'var(--accent-primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} />
                Core Functional Requirements
              </h4>
              <ul style={{ fontSize: '0.82rem', color: 'var(--text-muted)', paddingLeft: '1.1rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {currentTopic.requirements.functional.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Canvas Toolbar & Whiteboard Area */}
          <div className="glass-card" style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.1rem' }}>End-to-End System Blueprint</h3>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>
                  Click on any infrastructure component to inspect its scaling strategy and failover policy.
                </span>
              </div>

              {/* Add node buttons */}
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                <button className="btn-secondary" style={{ padding: '0.3rem 0.6rem', fontSize: '0.75rem' }} onClick={() => handleAddNode('cache')}>
                  <Plus size={12} /> + Cache
                </button>
                <button className="btn-secondary" style={{ padding: '0.3rem 0.6rem', fontSize: '0.75rem' }} onClick={() => handleAddNode('queue')}>
                  <Plus size={12} /> + Queue
                </button>
                <button className="btn-secondary" style={{ padding: '0.3rem 0.6rem', fontSize: '0.75rem' }} onClick={() => handleAddNode('db')}>
                  <Plus size={12} /> + DB Replica
                </button>
              </div>
            </div>

            {/* Visual Whiteboard */}
            <div className="architecture-canvas">
              {/* SVG connection lines */}
              <svg style={{ position: 'absolute', inset: 0, width: '1200px', height: '100%', pointerEvents: 'none' }}>
                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(99, 102, 241, 0.7)" />
                  </marker>
                </defs>
                {currentTopic.architectureConnections.map((conn, idx) => {
                  const fromNode = nodes.find((n) => n.id === conn.from);
                  const toNode = nodes.find((n) => n.id === conn.to);
                  if (!fromNode || !toNode) return null;

                  const x1 = fromNode.x + 80;
                  const y1 = fromNode.y + 30;
                  const x2 = toNode.x + 20;
                  const y2 = toNode.y + 30;

                  return (
                    <g key={idx}>
                      <path
                        d={`M ${x1} ${y1} C ${(x1 + x2) / 2} ${y1}, ${(x1 + x2) / 2} ${y2}, ${x2} ${y2}`}
                        stroke="rgba(99, 102, 241, 0.45)"
                        strokeWidth="2"
                        strokeDasharray="4,4"
                        fill="none"
                        markerEnd="url(#arrow)"
                      />
                      {conn.label && (
                        <text
                          x={(x1 + x2) / 2}
                          y={(y1 + y2) / 2 - 6}
                          fill="#94a3b8"
                          fontSize="10"
                          textAnchor="middle"
                          fontFamily="var(--font-sans)"
                        >
                          {conn.label}
                        </text>
                      )}
                    </g>
                  );
                })}
              </svg>

              {/* Render Nodes */}
              {nodes.map((node) => {
                const isSelected = selectedNode?.id === node.id;
                const nodeColor = getNodeColor(node.type);

                return (
                  <div
                    key={node.id}
                    className="diagram-node"
                    style={{
                      left: `${node.x}px`,
                      top: `${node.y}px`,
                      borderColor: isSelected ? 'var(--accent-cyan)' : undefined,
                      boxShadow: isSelected ? '0 0 20px rgba(6, 182, 212, 0.4)' : undefined
                    }}
                    onClick={() => setSelectedNode(node)}
                  >
                    <span className="diagram-node-type" style={{ color: nodeColor }}>
                      {node.type}
                    </span>
                    <span>{node.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Node Inspection Modal / Panel */}
          {selectedNode && (
            <div className="glass-card" style={{ borderColor: 'var(--accent-cyan)', background: 'var(--bg-surface-elevated)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <h4 style={{ fontSize: '1rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Info size={16} color="var(--accent-cyan)" />
                  Component Inspector: {selectedNode.label}
                </h4>
                <button className="btn-secondary" style={{ padding: '0.2rem 0.5rem', fontSize: '0.75rem' }} onClick={() => setSelectedNode(null)}>
                  Close
                </button>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <strong>Role in Architecture:</strong> Operates at the {selectedNode.type.toUpperCase()} tier. Scaled horizontally via auto-scaling groups behind health-checked DNS endpoints.
              </p>
            </div>
          )}

          {/* Key Considerations & Questions */}
          <div className="grid-2">
            <div className="glass-card">
              <h3 style={{ fontSize: '1.05rem', color: '#a5b4fc', marginBottom: '0.75rem' }}>
                Key Technical Considerations
              </h3>
              <ul style={{ paddingLeft: '1.2rem', fontSize: '0.85rem', color: 'var(--text-main)', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {currentTopic.keyConsiderations.map((kc, i) => (
                  <li key={i}>{kc}</li>
                ))}
              </ul>
            </div>

            <div className="glass-card">
              <h3 style={{ fontSize: '1.05rem', color: '#67e8f9', marginBottom: '0.75rem' }}>
                Follow-Up Questions Interviewers Ask
              </h3>
              <ul style={{ paddingLeft: '1.2rem', fontSize: '0.85rem', color: 'var(--text-main)', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {currentTopic.sampleQuestions.map((sq, i) => (
                  <li key={i}>{sq}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: 4-Step Framework */}
      {activeTab === 'framework' && (
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.4rem' }}>
              The 4-Step FAANG System Design Interview Framework
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              Follow this structured 45-minute blueprint to guarantee comprehensive architectural depth and avoid jumping straight into drawing boxes.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {systemDesignCheatSheet.frameworkSteps.map((step, idx) => (
              <div key={idx} className="glass-card-elevated" style={{ borderLeft: '4px solid #6366f1' }}>
                <h4 style={{ fontSize: '1.05rem', color: '#a5b4fc', marginBottom: '0.4rem' }}>
                  {step.step}
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Latency & Availability Cheat Sheet */}
      {activeTab === 'cheatsheet' && (
        <div className="grid-2">
          {/* Latency Numbers */}
          <div className="glass-card">
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--accent-cyan)' }}>
              Latency Numbers Every Engineer Must Know
            </h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '1rem' }}>
              Source: Peter Norvig & System Design Primer
            </p>

            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-subtle)', textAlign: 'left', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '0.5rem 0' }}>Operation</th>
                  <th>Absolute Time</th>
                  <th>Relative</th>
                </tr>
              </thead>
              <tbody>
                {systemDesignCheatSheet.latencyNumbers.map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <td style={{ padding: '0.45rem 0' }}>{row.operation}</td>
                    <td style={{ color: '#fbbf24', fontFamily: 'var(--font-mono)' }}>{row.time}</td>
                    <td style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>{row.relative}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Availability Nines */}
          <div className="glass-card">
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--accent-primary)' }}>
              SLA High Availability (99.9% vs 99.99%)
            </h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '1rem' }}>
              Maximum allowable downtime thresholds
            </p>

            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-subtle)', textAlign: 'left', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '0.5rem 0' }}>SLA Tier</th>
                  <th>Downtime / Year</th>
                  <th>Downtime / Month</th>
                </tr>
              </thead>
              <tbody>
                {systemDesignCheatSheet.availabilityNines.map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <td style={{ padding: '0.45rem 0', fontWeight: 600 }}>{row.level}</td>
                    <td style={{ color: '#fb7185', fontFamily: 'var(--font-mono)' }}>{row.downtimeYear}</td>
                    <td style={{ color: '#a5b4fc', fontFamily: 'var(--font-mono)' }}>{row.downtimeMonth}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 4: Deep-Dive Library (mined from stored repos) */}
      {activeTab === 'library' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Library header */}
          <div className="glass-card" style={{ background: 'linear-gradient(135deg, rgba(192, 132, 252, 0.14), rgba(6, 182, 212, 0.1))', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem', flexWrap: 'wrap' }}>
              <span className="badge badge-primary"><BookOpen size={12} /> Deep-Dive Library</span>
              {library && <span className="badge badge-cyan">{library.topicCount.toLocaleString()} topics</span>}
              {library && <span className="badge badge-easy">{library.repoCount} repos</span>}
            </div>
            <h2 style={{ fontSize: '1.6rem' }}>System Design Deep-Dives</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '720px' }}>
              High-level and low-level design deep-dives mined from your stored GitHub repos — expand any topic to read the full write-up offline.
            </p>
          </div>

          {/* Loading / error */}
          {libLoading && (
            <div className="glass-card" style={{ textAlign: 'center', padding: '2.5rem' }}>
              <p style={{ color: 'var(--text-muted)' }}>Loading deep-dive library…</p>
            </div>
          )}
          {libError && (
            <div className="glass-card" style={{ textAlign: 'center', padding: '2.5rem' }}>
              <p style={{ color: '#fb7185' }}>{libError}</p>
            </div>
          )}

          {/* Library filters */}
          {library && (
            <>
              <div className="filter-bar" style={{ marginBottom: 0 }}>
                <div className="search-input-wrapper" style={{ flex: 1, minWidth: '220px' }}>
                  <Search size={15} />
                  <input
                    className="search-input"
                    placeholder="Search deep-dive topics or repos…"
                    value={libSearch}
                    onChange={(e) => setLibSearch(e.target.value)}
                  />
                </div>
                {(['All', 'HLD', 'LLD'] as const).map((k) => (
                  <button
                    key={k}
                    className={libKind === k ? 'nav-tab-btn active' : 'nav-tab-btn'}
                    onClick={() => { setLibKind(k); setExpandedId(null); }}
                  >
                    {k === 'All' ? 'All' : k === 'HLD' ? 'High-Level' : 'Low-Level'}
                  </button>
                ))}
              </div>

              {/* Grouped by repo */}
              {libGrouped.length === 0 && (
                <div className="glass-card" style={{ textAlign: 'center', padding: '2.5rem' }}>
                  <p style={{ color: 'var(--text-dim)' }}>No deep-dives match your filters.</p>
                </div>
              )}
              {libGrouped.map(([repo, topics]) => (
                <div key={repo} className="glass-card" style={{ padding: '1.1rem 1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                    <Database size={15} color="#c084fc" />
                    <span style={{ fontWeight: 700, fontSize: '0.92rem' }}>{repo}</span>
                    <span className="badge badge-medium"><Star size={10} /> {(topics[0]?.stars / 1000).toFixed(0)}k★</span>
                    <span className="badge badge-cyan">{topics.length} topics</span>
                    <a href={`https://github.com/${repo}`} target="_blank" rel="noreferrer" style={{ fontSize: '0.72rem', color: '#a5b4fc', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                      GitHub <ExternalLink size={11} />
                    </a>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {topics.map((t) => {
                      const open = expandedId === t.id;
                      return (
                        <div
                          key={t.id}
                          style={{
                            border: '1px solid var(--border-subtle)',
                            borderRadius: 'var(--radius-md)',
                            background: open ? 'var(--bg-surface-elevated)' : 'transparent',
                            overflow: 'hidden'
                          }}
                        >
                          <button
                            onClick={() => toggleExpand(t)}
                            style={{
                              width: '100%',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              gap: '0.6rem',
                              padding: '0.55rem 0.75rem',
                              background: 'transparent',
                              border: 'none',
                              color: '#fff',
                              cursor: 'pointer',
                              fontFamily: 'inherit',
                              textAlign: 'left'
                            }}
                          >
                            <span style={{ fontSize: '0.86rem', fontWeight: 600 }}>{t.title}</span>
                            <span className={`badge ${t.kind === 'LLD' ? 'badge-medium' : 'badge-primary'}`} style={{ fontSize: '0.62rem', flexShrink: 0 }}>
                              {t.kind}
                            </span>
                          </button>
                          {open && (
                            <div style={{ padding: '0 0.85rem 0.9rem', borderTop: '1px solid var(--border-subtle)' }}>
                              {renderedMd[t.id] ? (
                                <div
                                  className="markdown-body"
                                  style={{ fontSize: '0.82rem', lineHeight: 1.6, color: 'var(--text-main)', paddingTop: '0.7rem' }}
                                  dangerouslySetInnerHTML={{ __html: renderedMd[t.id] }}
                                />
                              ) : (
                                <p style={{ color: 'var(--text-dim)', fontSize: '0.8rem', padding: '0.7rem 0' }}>Rendering…</p>
                              )}
                              {t.headings.length > 0 && (
                                <div style={{ marginTop: '0.7rem', display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                                  {t.headings.slice(0, 10).map((h, i) => (
                                    <span key={i} style={{ fontSize: '0.64rem', color: 'var(--text-dim)', background: 'rgba(255,255,255,0.04)', padding: '1px 7px', borderRadius: '8px' }}>{h}</span>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
};

import React, { useEffect, useState } from 'react';
import type { RepoCatalogEntry } from '../data/repoCatalog';
import { marked } from 'marked';
import { allResources } from '../data/resourcesData';
import { repoIndex } from '../content/repoIndex';
import { ResourceItem } from '../types';
import { 
  Library, 
  Search, 
  ExternalLink, 
  GitBranch,
  Filter,
  Video,
  AlertCircle,
  Code2,
  Mic,
  Camera,
  Layers,
  Shield,
  BookOpen,
  X,
  Sparkles,
  GitFork,
  ArrowRight,
  Building
} from 'lucide-react';

marked.setOptions({ gfm: true, breaks: false });

/** Lazy loaders: each stored README is code-split, fetched only when opened. */
const repoFiles = import.meta.glob('../content/repos/*.md', { query: '?raw', import: 'default' });

const sanitize = (html: string): string =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<iframe[\s\S]*?<\/iframe>/gi, '')
    .replace(/\son\w+\s*=\s*"[^"]*"/gi, '')
    .replace(/\son\w+\s*=\s*'[^']*'/gi, '')
    .replace(/\son\w+\s*=\s*[^\s>]+/gi, '')
    .replace(/href\s*=\s*(['"])\s*javascript:[^'"]*\1/gi, 'href="#"');

/** The 390 curated repos, merged into the hub as GitHub Repos entries. */
const repoResources: ResourceItem[] = repoIndex.map((r) => ({
  id: `repo-${r.repo}`,
  name: r.repo,
  category: 'GitHub Repos',
  description: `${r.category} · ★ ${(r.stars / 1000).toFixed(1)}k — offline README stored in this project${r.language ? ` · ${r.language}` : ''}`,
  url: `https://github.com/${r.repo}`,
  badge: r.stars >= 10000 ? 'Top Repo' : r.stars >= 1000 ? '1k+ stars' : undefined,
  pricing: 'Free',
  githubRepo: r.repo,
  techStack: r.language || undefined
}));

// Video mock architecture guide data (Part C from user prompt)
const videoArchitectureGuide = {
  layers: [
    {
      title: 'Video Transport — WebRTC',
      icon: 'video',
      color: '#6366f1',
      detail: 'WebRTC for real-time video/audio between peers. Add a TURN server (Coturn) for reliability — STUN alone fails on corporate/symmetric NAT networks. Managed options (LiveKit, Daily.co, Twilio Video) eliminate self-hosting complexity.'
    },
    {
      title: 'Signaling Server',
      icon: 'code',
      color: '#06b6d4',
      detail: 'Socket.io or native WebSocket to negotiate SDP offer/answer and ICE candidates between browsers. Keep it stateless — store session state in Redis for horizontal scaling.'
    },
    {
      title: 'Collaborative Code Editor',
      icon: 'code',
      color: '#f59e0b',
      detail: 'Monaco Editor (same engine as VS Code) or CodeMirror 6 with Yjs CRDT for real-time conflict-free shared editing. Plug in Judge0 or Piston for sandboxed multi-language code execution.'
    },
    {
      title: 'Matching & Scheduling',
      icon: 'layers',
      color: '#10b981',
      detail: 'User queue (Socket.io rooms) for instant peer matching or calendar booking (Calendly API / custom). Assign and swap roles (interviewer ↔ interviewee) at the halfway point. Support both random and skill-level-based matching.'
    },
    {
      title: 'Recording & Transcription',
      icon: 'mic',
      color: '#f43f5e',
      detail: 'MediaRecorder API to capture the session locally or mix server-side with a media server (Livekit Egress). Pipe audio to OpenAI Whisper, Deepgram, or AssemblyAI for a searchable timestamped transcript.'
    },
    {
      title: 'AI Feedback Engine',
      icon: 'mic',
      color: '#a855f7',
      detail: 'Run the transcript through an LLM (Gemini, GPT-4, Claude) with a structured rubric prompt. Compute filler-word ratio (um, uh, like), talking speed (words/min), and answer-quality score. Return JSON rubric scores.'
    },
    {
      title: 'Webcam Analysis (Optional)',
      icon: 'camera',
      color: '#fbbf24',
      detail: 'MediaPipe FaceMesh/Holistic for eye-contact direction and posture estimation. ⚠️ Caution: facial emotion classification is scientifically contested — HireVue dropped it from their platform. Treat as a rough self-improvement hint only, never a hiring signal.'
    },
    {
      title: 'Auth, Payments & Storage',
      icon: 'shield',
      color: '#34d399',
      detail: 'Clerk or Firebase Auth for user identity. Razorpay (India) or Stripe for paid session bookings. Store recordings in S3-compatible storage (Cloudflare R2 for cost efficiency). Use signed URLs for time-limited access.'
    }
  ],
  searchQueries: [
    'topic:webrtc interview',
    'mock interview webrtc',
    'video interview platform react node socket.io',
    'ai interview emotion detection webcam'
  ]
};

type RepoCatalogTab = 'catalog' | 'imports';

export const ResourcesView: React.FC<{
  repoCatalog?: RepoCatalogEntry[];
  onToggleRepoCatalog?: () => void;
  onImportRepoPack?: (entries: RepoCatalogEntry[], kind: 'problem' | 'flashcard') => number;
}> = ({ repoCatalog = [], onToggleRepoCatalog, onImportRepoPack }) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPricing, setSelectedPricing] = useState('All');
  const [showBuildGuide, setShowBuildGuide] = useState(false);
  const [readerRepo, setReaderRepo] = useState<string | null>(null);
  const [readerContent, setReaderContent] = useState('');
  const [readerLoading, setReaderLoading] = useState(false);
  const [catalogTab, setCatalogTab] = useState<RepoCatalogTab>('catalog');
  const [importedCount, setImportedCount] = useState<number | null>(null);
  const [catalogSearch, setCatalogSearch] = useState('');
  const [selectedCatalogCategory, setSelectedCatalogCategory] = useState('All');
  const [catalogLimit, setCatalogLimit] = useState(48);

  const openReader = async (repoName: string, file: string) => {
    setReaderRepo(repoName);
    setReaderLoading(true);
    setReaderContent('');
    try {
      const loader = repoFiles[`../content/repos/${file}`];
      const raw = loader ? ((await loader()) as string) : '';
      const html = await marked.parse(raw);
      setReaderContent(sanitize(html));
    } catch (e) {
      setReaderContent(`<p>Could not render stored content: ${String(e)}</p>`);
    } finally {
      setReaderLoading(false);
    }
  };

  const resourceCategories = [
    'All',
    'DSA',
    'System Design',
    'Frontend',
    'Machine Learning',
    'Behavioral',
    'Mock Platforms',
    'AI Interview',
    'GitHub Repos',
    'Web Projects',
    'Video Mock',
    'Company Prep'
  ];

  const catalogCategories = [
    'All',
    ...Array.from(new Set(repoCatalog.map((r) => r.category))).sort()
  ];

  const filteredCatalogEntries = repoCatalog.filter((entry) => {
    const needle = catalogSearch.trim().toLowerCase();
    const haystack = [entry.repo, entry.name, entry.category, entry.language ?? '', entry.description ?? '']
      .join(' ')
      .toLowerCase();
    const matchesSearch = !needle || haystack.includes(needle);
    const matchesCategory = selectedCatalogCategory === 'All' || entry.category === selectedCatalogCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCatalogQuickImport = (kind: 'problem' | 'flashcard', entry?: RepoCatalogEntry) => {
    if (!onImportRepoPack) return;
    const entries = entry ? [entry] : filteredCatalogEntries.slice(0, 3);
    if (entries.length === 0) return;
    setImportedCount(onImportRepoPack(entries, kind));
  };

  // A fresh filter starts from the top of the list again.
  useEffect(() => {
    setCatalogLimit(48);
  }, [catalogSearch, selectedCatalogCategory]);

  const allItems = [...allResources, ...repoResources];

  const filteredResources = allItems.filter((res) => {
    const matchesSearch =
      res.name.toLowerCase().includes(search.toLowerCase()) ||
      res.description.toLowerCase().includes(search.toLowerCase()) ||
      (res.techStack && res.techStack.toLowerCase().includes(search.toLowerCase())) ||
      res.url.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' || res.category === selectedCategory;

    const matchesPricing =
      selectedPricing === 'All' || res.pricing === selectedPricing;

    return matchesSearch && matchesCategory && matchesPricing;
  });

  const isVideoMock = selectedCategory === 'Video Mock';
  const videoGithubCount = allResources.filter(r => r.category === 'Video Mock' && r.githubRepo).length;
  const videoSiteCount = allResources.filter(r => r.category === 'Video Mock' && !r.githubRepo).length;

  const catalogEmpty = repoCatalog.length === 0;
  const catalogSectionVisible = !catalogEmpty;
  const catalogHasSelection = selectedCategory !== 'All' || search.length > 0;

  /** Repos that also have a mined README stored in this project can be read offline. */
  const offlineRepoFiles = new Map(repoIndex.map((r) => [r.repo, r.file]));

  const getNodeIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video size={16} />;
      case 'code': return <Code2 size={16} />;
      case 'mic': return <Mic size={16} />;
      case 'camera': return <Camera size={16} />;
      case 'layers': return <Layers size={16} />;
      case 'shield': return <Shield size={16} />;
      default: return <Code2 size={16} />;
    }
  };

  const categoryStyles: Record<string, {
    background?: string;
    color?: string;
    border?: string;
    icon?: React.ReactNode;
  }> = {
    'Company Prep': {
      background: 'rgba(251,191,36,0.10)',
      color: '#fbbf24',
      border: 'rgba(251,191,36,0.25)',
      icon: <Building size={11} />
    },
    'DSA': {
      background: 'rgba(16,185,129,0.10)',
      color: '#34d399',
      border: 'rgba(16,185,129,0.25)'
    },
    'System Design': {
      background: 'rgba(56,189,248,0.10)',
      color: '#38bdf8',
      border: 'rgba(56,189,248,0.25)'
    },
    'Frontend': {
      background: 'rgba(168,85,247,0.10)',
      color: '#a855f7',
      border: 'rgba(168,85,247,0.25)'
    },
    'Machine Learning': {
      background: 'rgba(251,146,60,0.10)',
      color: '#fb923c',
      border: 'rgba(251,146,60,0.25)'
    },
    'Behavioral': {
      background: 'rgba(244,114,182,0.10)',
      color: '#f472b6',
      border: 'rgba(244,114,182,0.25)'
    },
    'Mock Platforms': {
      background: 'rgba(232,121,249,0.10)',
      color: '#e879f9',
      border: 'rgba(232,121,249,0.25)'
    },
    'AI Interview': {
      background: 'rgba(34,211,238,0.10)',
      color: '#22d3ee',
      border: 'rgba(34,211,238,0.25)'
    }
  };

  const getCategoryStyle = (category: string) => categoryStyles[category];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Top Banner */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
            <span className="badge badge-primary">
              <Library size={12} />
              Curated Directory
            </span>
            <span className="badge badge-cyan">{allResources.length} Verified Entries</span>
            {isVideoMock && (
              <>
                <span className="badge badge-medium">{videoGithubCount} GitHub Repos</span>
                <span className="badge badge-primary">{videoSiteCount} Live Platforms</span>
              </>
            )}
          </div>
          <h2 style={{ fontSize: '1.75rem' }}>
            {isVideoMock ? 'Video Mock Interview Resources' : 'Comprehensive Interview Resource Hub'}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            {isVideoMock
              ? 'Cloneable GitHub video mock projects (WebRTC, AI emotion analysis) + live platforms to practice on right now.'
              : 'All top coding platforms, system design guides, mock interview portals, and open-source GitHub projects in one place.'}
          </p>
        </div>

        {isVideoMock && (
          <button
            className={showBuildGuide ? 'btn-primary' : 'btn-secondary'}
            style={{ padding: '0.65rem 1.25rem' }}
            onClick={() => setShowBuildGuide(!showBuildGuide)}
          >
            <Code2 size={16} />
            {showBuildGuide ? 'Hide Architecture Guide' : 'Build Your Own (Architecture Guide)'}
          </button>
        )}
      </div>

      {/* "Build Your Own" Architecture Guide — only when Video Mock is selected */}
      {isVideoMock && showBuildGuide && (
        <div className="glass-card" style={{ borderColor: 'rgba(99, 102, 241, 0.35)' }}>
          <div style={{ marginBottom: '1.25rem' }}>
            <h3 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Code2 size={18} color="var(--accent-primary)" />
              Full Architecture Blueprint: Building a Video Mock Interview Platform
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
              Typical 8-layer stack based on analysis of all open-source video mock projects above.
            </p>
          </div>

          <div className="grid-2">
            {videoArchitectureGuide.layers.map((layer, idx) => (
              <div
                key={idx}
                className="glass-card-elevated"
                style={{ borderLeft: `4px solid ${layer.color}`, padding: '1rem' }}
              >
                <h4 style={{ fontSize: '0.92rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                  <span style={{ color: layer.color }}>{getNodeIcon(layer.icon)}</span>
                  {layer.title}
                </h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {layer.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Warning callout for facial emotion analysis */}
          <div style={{ marginTop: '1.25rem', background: 'rgba(245, 158, 11, 0.08)', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: 'var(--radius-md)', padding: '1rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
            <AlertCircle size={18} color="#fbbf24" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h5 style={{ fontSize: '0.88rem', color: '#fbbf24', marginBottom: '0.2rem' }}>
                ⚠️ Caution on Facial Emotion / "Confidence" Detection
              </h5>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                The Hugging Face community and AI ethics researchers note that facial emotion classification is scientifically contested — individual emotions are context-dependent and models exhibit strong demographic bias. HireVue removed facial analysis from its platform. For your practice tool, prioritize evidence-based signals: <strong>speech-to-text accuracy, filler-word ratio, pacing (words/min), and LLM rubric scoring</strong> over emotion labels from a face.
              </p>
            </div>
          </div>

          {/* GitHub Search Queries */}
          <div style={{ marginTop: '1.25rem', padding: '1rem', background: '#090d16', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
            <h4 style={{ fontSize: '0.88rem', color: '#a5b4fc', marginBottom: '0.5rem' }}>
              🔍 GitHub Search Queries (sort by "Recently Updated"):
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {videoArchitectureGuide.searchQueries.map((q, i) => (
                <a
                  key={i}
                  href={`https://github.com/search?q=${encodeURIComponent(q)}&s=updated&o=desc`}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    background: 'rgba(99,102,241,0.15)',
                    border: '1px solid rgba(99,102,241,0.3)',
                    color: '#a5b4fc',
                    padding: '0.3rem 0.7rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-mono)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                >
                  <ExternalLink size={11} />
                  {q}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="glass-card" style={{ padding: '1.25rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
          {/* Search */}
          <div className="search-input-wrapper">
            <Search size={16} />
            <input
              type="text"
              className="search-input"
              placeholder="Search resources, repos, tech stacks (e.g. WebRTC, Vapi, Next.js, Grokking, Razorpay)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Pricing filter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Filter size={16} color="var(--text-dim)" />
            <select
              className="search-input"
              style={{ width: 'auto', padding: '0.5rem 0.9rem' }}
              value={selectedPricing}
              onChange={(e) => setSelectedPricing(e.target.value)}
            >
              <option value="All">All Pricing (Free, Freemium, Paid)</option>
              <option value="Free">100% Free Only</option>
              <option value="Freemium">Freemium</option>
              <option value="Paid">Paid</option>
            </select>
          </div>
        </div>

        {/* Category Pill Filters */}
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
          {resourceCategories.map((cat) => (
            <button
              key={cat}
              className={`nav-tab-btn ${selectedCategory === cat ? 'active' : ''}`}
              style={{
                padding: '0.35rem 0.8rem',
                fontSize: '0.8rem',
                ...(cat === 'Video Mock' ? { borderColor: 'rgba(244,63,94,0.3)' } : {})
              }}
              onClick={() => {
                setSelectedCategory(cat);
                if (cat !== 'Video Mock') setShowBuildGuide(false);
              }}
            >
              {cat === 'Video Mock' && <Video size={13} style={{ marginRight: '4px' }} />}
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Catalog disabled — keep a way back in, since the browser itself is hidden when off */}
      {catalogEmpty && onToggleRepoCatalog && (
        <div
          className="glass-card"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap',
            borderColor: 'rgba(99, 102, 241, 0.2)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <Sparkles size={16} color="var(--accent-cyan)" />
            <div>
              <h3 style={{ fontSize: '0.95rem' }}>GitHub Repo Catalog is off</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Turn it on to browse the curated interview repositories, read their stored READMEs, and import them into your DSA tracker and flashcards.
              </p>
            </div>
          </div>
          <button className="btn-primary" style={{ padding: '0.5rem 1rem' }} onClick={onToggleRepoCatalog}>
            <GitFork size={14} /> Turn Catalog On
          </button>
        </div>
      )}

      {/* GitHub Repo Catalog */}
      {!catalogEmpty && (
        <div style={{ marginTop: '0.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                <Sparkles size={13} color="var(--accent-cyan)" />
                <span className="badge badge-cyan">GitHub Repo Catalog</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  {filteredCatalogEntries.length} of {repoCatalog.length} repos · searchable · importable
                </span>
              </div>
              <h3 style={{ fontSize: '1.05rem', marginTop: '0.25rem' }}>
                Top interview-prep repos from the curated catalog
              </h3>
            </div>
            <div style={{ display: 'flex', gap: '0.4rem' }}>
              <button
                className={`nav-tab-btn ${catalogTab === 'catalog' ? 'active' : ''}`}
                onClick={() => {
                  setCatalogTab('catalog');
                  setImportedCount(null);
                }}
                style={{ padding: '0.35rem 0.8rem', fontSize: '0.78rem' }}
              >
                Browse
              </button>
              <button
                className={`nav-tab-btn ${catalogTab === 'imports' ? 'active' : ''}`}
                onClick={() => setCatalogTab('imports')}
                style={{ padding: '0.35rem 0.8rem', fontSize: '0.78rem' }}
              >
                Imports
              </button>
            </div>
          </div>

          {catalogTab === 'imports' ? (
            <div className="glass-card" style={{ padding: '1.25rem' }}>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                When the catalog feature is on, the repo browser above can add repos to your personal DSA tracker and flashcards decks.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <button
                  className="btn-secondary"
                  onClick={() => {
                    if (!onToggleRepoCatalog) return;
                    onToggleRepoCatalog();
                  }}
                  style={{ padding: '0.5rem 1rem' }}
                >
                  Turn Catalog Off
                </button>
                {importedCount !== null && (
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-dim)' }}>
                    Last import added{' '}
                    <strong style={{ color: 'var(--text)' }}>{importedCount}</strong> items.
                  </span>
                )}
              </div>
            </div>
          ) : (
            <>
              {/* Catalog filters */}
              <div className="glass-card" style={{ padding: '1.25rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                  <div className="search-input-wrapper" style={{ flex: '1 1 260px' }}>
                    <Search size={16} />
                    <input
                      type="text"
                      className="search-input"
                      placeholder="Search catalog by repo name, topic, language..."
                      value={catalogSearch}
                      onChange={(e) => setCatalogSearch(e.target.value)}
                    />
                  </div>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                    {catalogCategories.map((cat) => (
                      <button
                        key={cat}
                        className={`nav-tab-btn ${selectedCatalogCategory === cat ? 'active' : ''}`}
                        style={{ padding: '0.35rem 0.8rem', fontSize: '0.78rem' }}
                        onClick={() => setSelectedCatalogCategory(cat)}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quick import chip */}
                <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Quick add to:</span>
                  <button
                    className="btn-secondary"
                    style={{ padding: '0.4rem 0.85rem', fontSize: '0.78rem' }}
                    onClick={() => handleCatalogQuickImport('problem')}
                  >
                    <GitFork size={13} />
                    Add 3 repos to DSA Tracker
                  </button>
                  <button
                    className="btn-secondary"
                    style={{ padding: '0.4rem 0.85rem', fontSize: '0.78rem' }}
                    onClick={() => handleCatalogQuickImport('flashcard')}
                  >
                    <BookOpen size={13} />
                    Add 3 repos to Flashcards
                  </button>
                </div>
              </div>

              {/* Catalog card grid */}
              <div className="grid-3">
                {filteredCatalogEntries.slice(0, catalogLimit).map((entry) => {
                  const starsK = entry.stars >= 1000 ? `${(entry.stars / 1000).toFixed(1)}k` : String(entry.stars);
                  return (
                    <div
                      key={entry.repo}
                      className="glass-card"
                      style={{ borderColor: 'rgba(99, 102, 241, 0.25)' }}
                    >
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.4rem' }}>
                          <span className="badge" style={{ background: 'rgba(99,102,241,0.12)', color: '#a5b4fc', border: '1px solid rgba(99,102,241,0.25)' }}>
                            {entry.category}
                          </span>
                          <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                            ★ {starsK}
                          </span>
                        </div>

                        <h3 style={{ fontSize: '0.95rem', color: '#fff', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <GitBranch size={14} color="var(--accent-cyan)" />
                          {entry.name}
                        </h3>

                        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                          {entry.repo}
                        </p>

                        {(entry.language || entry.topics?.length) && (
                          <p style={{ fontSize: '0.72rem', color: 'var(--text-dim)', marginBottom: '0.6rem' }}>
                            {entry.language && <span className="badge badge-cyan" style={{ fontSize: '0.65rem', marginRight: '0.35rem' }}>{entry.language}</span>}
                            {entry.topics?.slice(0, 3).join(' · ')}
                          </p>
                        )}

                        <div style={{ display: 'flex', gap: '0.4rem' }}>
                          <a
                            href={entry.url}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-primary"
                            style={{ padding: '0.35rem 0.75rem', fontSize: '0.75rem', flex: 1, textDecoration: 'none', textAlign: 'center' }}
                          >
                            View Repo <ExternalLink size={11} />
                          </a>
                          {offlineRepoFiles.has(entry.repo) && (
                            <button
                              className="btn-secondary"
                              style={{ padding: '0.35rem 0.75rem', fontSize: '0.75rem' }}
                              onClick={() => {
                                const file = offlineRepoFiles.get(entry.repo);
                                if (file) openReader(entry.repo, file);
                              }}
                              title="Read the stored README for this repo"
                            >
                              <BookOpen size={12} />
                              Read
                            </button>
                          )}
                          <button
                            className="btn-secondary"
                            style={{ padding: '0.35rem 0.75rem', fontSize: '0.75rem' }}
                            onClick={() => handleCatalogQuickImport('problem', entry)}
                            title="Add this repo to your DSA tracker"
                          >
                            <GitFork size={12} />
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {filteredCatalogEntries.length > catalogLimit && (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.9rem' }}>
                  <button
                    className="btn-secondary"
                    style={{ padding: '0.5rem 1.1rem', fontSize: '0.82rem' }}
                    onClick={() => setCatalogLimit((limit) => limit + 48)}
                  >
                    Show {Math.min(48, filteredCatalogEntries.length - catalogLimit)} more · {catalogLimit} of {filteredCatalogEntries.length}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      )}

      {/* Resources Cards Grid */}
      <div className="grid-3">
        {filteredResources.map((res) => {
          const isGithub = res.category === 'GitHub Repos' || res.category === 'Web Projects' || (res.category === 'Video Mock' && !!res.githubRepo);
          const isVideoMockCard = res.category === 'Video Mock';
          const catStyle = getCategoryStyle(res.category);

          return (
            <div
              key={res.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '0.75rem',
                borderColor: isVideoMockCard
                  ? 'rgba(244, 63, 94, 0.2)'
                  : isGithub
                  ? 'rgba(99, 102, 241, 0.25)'
                  : undefined
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.4rem' }}>
                  <span
                    className="badge"
                    style={{
                      background: isVideoMockCard ? 'rgba(244,63,94,0.12)' : catStyle?.background ?? 'rgba(99,102,241,0.12)',
                      color: isVideoMockCard ? '#fb7185' : catStyle?.color ?? '#a5b4fc',
                      border: `1px solid ${isVideoMockCard ? 'rgba(244,63,94,0.25)' : catStyle?.border ?? 'rgba(99,102,241,0.25)'}`
                    }}
                  >
                    {isVideoMockCard && <Video size={11} />}
                    {res.category}
                  </span>
                  <div style={{ display: 'flex', gap: '0.3rem' }}>
                    {res.badge && (
                      <span className="badge badge-cyan" style={{ fontSize: '0.7rem' }}>
                        {res.badge}
                      </span>
                    )}
                    <span
                      style={{
                        fontSize: '0.7rem',
                        padding: '2px 6px',
                        borderRadius: '4px',
                        background: res.pricing === 'Free' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255,255,255,0.06)',
                        color: res.pricing === 'Free' ? '#34d399' : 'var(--text-dim)'
                      }}
                    >
                      {res.pricing}
                    </span>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.05rem', color: '#fff', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  {catStyle?.icon && catStyle?.icon}
                  {isGithub && !catStyle?.icon && <GitBranch size={16} color={isVideoMockCard ? '#fb7185' : 'var(--accent-cyan)'} />}
                  {!isGithub && isVideoMockCard && !catStyle?.icon && <Video size={16} color="#fb7185" />}
                  {res.name}
                </h3>

                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {res.description}
                </p>

                {res.techStack && (
                  <div style={{ marginTop: '0.6rem', padding: '0.4rem 0.6rem', borderRadius: 'var(--radius-sm)', background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-subtle)', fontSize: '0.75rem', color: '#a5b4fc' }}>
                    <strong>Stack:</strong> {res.techStack}
                  </div>
                )}
              </div>

              <div style={{ paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
                {res.id.startsWith('repo-') && (
                  <button
                    className="btn-secondary"
                    style={{ padding: '0.4rem 0.75rem', fontSize: '0.78rem', whiteSpace: 'nowrap' }}
                    title="Read the stored offline content for this repo"
                    onClick={() => {
                      const entry = repoIndex.find((r) => `repo-${r.repo}` === res.id);
                      if (entry) openReader(entry.repo, entry.file);
                    }}
                  >
                    <BookOpen size={13} /> Offline
                  </button>
                )}
                <a
                  href={res.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                  style={{
                    padding: '0.4rem 0.85rem',
                    fontSize: '0.8rem',
                    flex: 1,
                    textDecoration: 'none',
                    textAlign: 'center',
                    ...(isVideoMockCard ? { background: 'linear-gradient(135deg, #f43f5e, #e11d48)', boxShadow: '0 4px 14px rgba(244,63,94,0.3)' } : {})
                  }}
                >
                  {isGithub ? 'View Repo' : 'Visit Platform'}
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {filteredResources.length === 0 && (
        <div className="glass-card" style={{ textAlign: 'center', padding: '3rem 1rem' }}>
          <Library size={40} style={{ color: 'var(--text-dim)', marginBottom: '1rem' }} />
          <h3>No resources match your search</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            Try adjusting your search query or selecting "All" categories.
          </p>
        </div>
      )}

      {/* Offline README reader for merged repo entries */}
      {readerRepo && (
        <div className="modal-overlay" onClick={() => setReaderRepo(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '900px', maxHeight: '92vh', padding: '1.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem', gap: '1rem' }}>
              <div>
                <span className="badge badge-primary" style={{ fontSize: '0.66rem', marginBottom: '0.3rem' }}>Stored offline</span>
                <h3 style={{ fontSize: '1.15rem', wordBreak: 'break-word' }}>{readerRepo}</h3>
                <a href={`https://github.com/${readerRepo}`} target="_blank" rel="noreferrer" style={{ fontSize: '0.78rem', color: '#a5b4fc', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  View on GitHub <ExternalLink size={11} />
                </a>
              </div>
              <button className="btn-icon" onClick={() => setReaderRepo(null)}>
                <X size={16} />
              </button>
            </div>
            {readerLoading ? (
              <p style={{ color: 'var(--text-muted)', padding: '2rem 0', textAlign: 'center' }}>Loading stored content…</p>
            ) : (
              <div className="markdown-body" dangerouslySetInnerHTML={{ __html: readerContent }} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

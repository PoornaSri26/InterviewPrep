import React from 'react';
import { 
  Sparkles, 
  Flame, 
  LayoutDashboard, 
  Mic, 
  BrainCircuit, 
  Code2, 
  Network, 
  MessageSquareText, 
  Compass, 
  Library,
  CalendarCheck,
  Layers,
  Building,
  Wallet,
  Search,
  BookOpen,
  Home
} from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  streak: { current: number; max: number };
  onOpenSettings: () => void;
  onOpenSearch: () => void;
  onGoHome?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  streak,
  onOpenSettings,
  onOpenSearch,
  onGoHome
}) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'mock', label: 'AI Voice Mock', icon: Mic, badge: 'Voice AI' },
    { id: 'dsa', label: 'DSA + Sheets', icon: BrainCircuit, badge: 'SRS' },
    { id: 'sandbox', label: 'Code Sandbox', icon: Code2 },
    { id: 'system-design', label: 'System Design', icon: Network },
    { id: 'behavioral', label: 'STAR Studio', icon: MessageSquareText },
    { id: 'roadmap', label: '8-Week Plan', icon: Compass },
    { id: 'resources', label: 'Resource Hub', icon: Library },
    { id: 'daily', label: 'Daily Challenge', icon: CalendarCheck, badge: 'Daily' },
    { id: 'flashcards', label: 'Flashcards', icon: Layers, badge: 'SRS' },
    { id: 'qbank', label: 'Q&A Bank', icon: BookOpen },
    { id: 'companies', label: 'Company Prep', icon: Building },
    { id: 'offers', label: 'Offer Comparator', icon: Wallet }
  ];

  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* Brand */}
        <div className="brand" onClick={() => onGoHome ? onGoHome() : setActiveTab('dashboard')} style={{ cursor: 'pointer' }} title="Back to Home">
          <div className="brand-icon-wrapper">
            <Sparkles size={20} />
          </div>
          <div className="brand-text">
            <h1>InterviewMaster OS</h1>
            <span>Apex Tech Prep & Mock Studio</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="nav-tabs">
          {navItems.map((item) => {
            const Icon = item.icon;
            // 'sheets' is a deep-link alias into the merged DSA module
            const isActive = activeTab === item.id || (item.id === 'dsa' && activeTab === 'sheets');
            return (
              <button
                key={item.id}
                className={`nav-tab-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveTab(item.id)}
              >
                <Icon size={16} />
                <span>{item.label}</span>
                {item.badge && !isActive && (
                  <span style={{
                    fontSize: '0.65rem',
                    background: 'rgba(99, 102, 241, 0.25)',
                    color: '#a5b4fc',
                    padding: '1px 6px',
                    borderRadius: '10px'
                  }}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Quick Stats & Controls */}
        <div className="nav-stats">
          <button
            className="btn-icon"
            onClick={onOpenSearch}
            title="Search everything (problems, sheets, repos, cards…)"
          >
            <Search size={16} />
          </button>
          <div className="streak-badge" title="Consecutive day practice streak">
            <Flame size={16} />
            <span>{streak.current}d Streak</span>
          </div>
          <button 
            className="btn-icon" 
            onClick={onOpenSettings} 
            title="Platform Settings & Export Data"
          >
            <Sparkles size={16} />
          </button>
        </div>
      </div>
    </header>
  );
};

import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Payments from './pages/Payments';
import TrustSafety from './pages/TrustSafety';
import Support from './pages/Support';
import Analytics from './pages/Analytics';
import AICenter from './pages/AICenter';
import Fraud from './pages/Fraud';
import Verification from './pages/Verification';
import Placeholder from './pages/Placeholder';

const placeholderPages = [
  'providers', 'trips', 'travel-date', 'bookings', 'wallet', 'subscriptions',
  'marketplace', 'community', 'disputes', 'reviews', 'notifications',
  'settings', 'admin-management', 'audit-logs', 'knowledge-base', 'emergency',
];

function PageContent({ page }: { page: string }) {
  switch (page) {
    case 'dashboard': return <Dashboard />;
    case 'users': return <Users />;
    case 'payments': return <Payments />;
    case 'trust-safety': return <TrustSafety />;
    case 'support': return <Support />;
    case 'analytics': return <Analytics />;
    case 'ai-center': return <AICenter />;
    case 'fraud': return <Fraud />;
    case 'verification': return <Verification />;
    default:
      if (placeholderPages.includes(page)) return <Placeholder page={page} />;
      return <Dashboard />;
  }
}

export default function App() {
  const [activePage, setActivePage] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', background: '#F8FAFC' }}>
      <Sidebar
        active={activePage}
        onNav={setActivePage}
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(c => !c)}
      />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative' }}>
        <Header page={activePage} />
        <main style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}>
          <PageContent page={activePage} />
        </main>
      </div>
    </div>
  );
}

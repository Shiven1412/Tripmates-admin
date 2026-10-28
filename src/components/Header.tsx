import { useState } from 'react';
import { Icon, Badge } from './ui';

const pageLabels: Record<string, string> = {
  dashboard: 'Dashboard',
  users: 'User Management',
  providers: 'Provider Management',
  verification: 'Verification Center',
  trips: 'Trip Management',
  'travel-date': 'Travel Date Management',
  bookings: 'Bookings Center',
  payments: 'Payments & Finance',
  wallet: 'Wallet Management',
  subscriptions: 'Subscription Management',
  marketplace: 'Marketplace Management',
  'trust-safety': 'Trust & Safety Center',
  community: 'Community Moderation',
  disputes: 'Disputes Center',
  fraud: 'Fraud Detection Center',
  support: 'Help Desk & Support Center',
  reviews: 'Reviews & Ratings',
  notifications: 'Notifications Center',
  analytics: 'Analytics Center',
  'ai-center': 'AI Control Center',
  settings: 'System Settings',
  'admin-management': 'Admin Management',
  'audit-logs': 'Audit Logs',
  'knowledge-base': 'Knowledge Base Management',
  emergency: 'Emergency Response Desk',
};

export default function Header({ page }: { page: string }) {
  const [notifOpen, setNotifOpen] = useState(false);
  const [searchVal, setSearchVal] = useState('');

  return (
    <header className="h-14 bg-white border-b border-slate-200 flex items-center gap-4 px-6 shrink-0">
      {/* Page title */}
      <div className="flex-1 min-w-0">
        <h2 className="text-sm font-semibold text-slate-900 truncate">{pageLabels[page] ?? page}</h2>
      </div>

      {/* Global search */}
      <div className="relative w-64 hidden md:block">
        <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
        <input
          type="text"
          value={searchVal}
          onChange={e => setSearchVal(e.target.value)}
          placeholder="Search users, trips, bookings…"
          className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white placeholder:text-slate-400 transition-all"
        />
        <kbd className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">⌘K</kbd>
      </div>

      {/* Status indicator */}
      <div className="flex items-center gap-1.5 text-xs text-slate-500 hidden lg:flex">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-dot" />
        All systems normal
      </div>

      {/* Alerts */}
      <button className="relative text-slate-500 hover:text-slate-800 p-2 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer" onClick={() => setNotifOpen(!notifOpen)}>
        <Icon name="bell" className="w-4 h-4" />
        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white" />
      </button>

      {notifOpen && (
        <div className="absolute top-14 right-4 w-80 bg-white rounded-xl border border-slate-200 shadow-xl z-50 overflow-hidden">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-900">Notifications</span>
            <Badge status="critical" dot={false} />
          </div>
          <div className="divide-y divide-slate-50">
            {[
              { title: 'Critical safety report', desc: 'SR-1048 escalated — needs immediate review', time: '2m ago', type: 'critical' },
              { title: 'Fraud alert detected', desc: '4 duplicate accounts flagged by system', time: '18m ago', type: 'high' },
              { title: 'Ticket SLA overdue', desc: 'TK-4822 exceeded 4-hour SLA window', time: '1h ago', type: 'warning' },
              { title: 'Verification backlog', desc: '892 pending verifications need attention', time: '3h ago', type: 'info' },
            ].map((n, i) => (
              <div key={i} className="p-3 hover:bg-slate-50 cursor-pointer">
                <div className="flex items-start gap-3">
                  <span className={`mt-0.5 w-2 h-2 rounded-full shrink-0 ${
                    n.type === 'critical' ? 'bg-red-600' : n.type === 'high' ? 'bg-red-500' : n.type === 'warning' ? 'bg-amber-500' : 'bg-blue-500'
                  }`} />
                  <div>
                    <div className="text-xs font-semibold text-slate-900">{n.title}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{n.desc}</div>
                    <div className="text-[10px] text-slate-400 mt-1">{n.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-slate-100 text-center">
            <button className="text-xs font-semibold text-blue-600 hover:text-blue-700 cursor-pointer">View all notifications</button>
          </div>
        </div>
      )}
    </header>
  );
}

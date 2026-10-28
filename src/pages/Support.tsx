import { useState } from 'react';
import { tickets } from '../data/mockData';
import { Badge, Card, PageHeader, Button, Icon, SearchBar, Avatar, StatRow, Tabs } from '../components/ui';

const supportStats = [
  { label: 'Open Tickets', value: 347, color: 'text-blue-600' },
  { label: 'Escalated', value: 8, color: 'text-red-600' },
  { label: 'Avg Resolution', value: '3.4h', color: 'text-amber-600' },
  { label: 'CSAT Score', value: '94%', color: 'text-emerald-600' },
];

const priorityColor: Record<string, string> = {
  urgent: 'bg-red-100 text-red-700 border border-red-200',
  high: 'bg-orange-100 text-orange-700 border border-orange-200',
  medium: 'bg-amber-100 text-amber-700 border border-amber-200',
  low: 'bg-slate-100 text-slate-600 border border-slate-200',
};

export default function Support() {
  const [selectedTicket, setSelectedTicket] = useState<typeof tickets[0] | null>(null);
  const [tab, setTab] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = tickets.filter(t => {
    const matchTab = tab === 'All' || t.status === tab.toLowerCase() || (tab === 'Escalated' && t.status === 'escalated');
    const matchSearch = t.user.toLowerCase().includes(search.toLowerCase()) ||
      t.subject.toLowerCase().includes(search.toLowerCase()) ||
      t.id.toLowerCase().includes(search.toLowerCase());
    return matchTab && matchSearch;
  });

  return (
    <div className="p-6 animate-fade-in flex gap-4 h-full min-h-0">
      <div className="flex-1 min-w-0 space-y-4">
        <PageHeader
          title="Help Desk & Support Center"
          subtitle="Manage tickets, agent assignments and SLA tracking"
          actions={
            <>
              <Button variant="secondary">Assign Agent</Button>
              <Button variant="primary"><Icon name="plus" className="w-3.5 h-3.5 inline mr-1" />New Ticket</Button>
            </>
          }
        />

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {supportStats.map((s, i) => (
            <Card key={i} className="p-4">
              <div className={`tabular text-2xl font-bold ${s.color}`}>{s.value}</div>
              <div className="text-xs font-semibold text-slate-600 mt-1">{s.label}</div>
            </Card>
          ))}
        </div>

        {/* Ticket categories */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
          {[
            { label: 'Account Issues', count: 84 },
            { label: 'Bookings', count: 72 },
            { label: 'Payments', count: 61 },
            { label: 'Verification', count: 48 },
            { label: 'Safety Reports', count: 32 },
          ].map((c, i) => (
            <Card key={i} className="p-3 cursor-pointer hover:bg-slate-50 transition-colors">
              <div className="tabular text-lg font-bold text-slate-900">{c.count}</div>
              <div className="text-xs text-slate-500 mt-0.5">{c.label}</div>
            </Card>
          ))}
        </div>

        {/* Tickets */}
        <Card>
          <div className="p-4 border-b border-slate-100 flex flex-wrap gap-3 items-center">
            <Tabs tabs={['All', 'Open', 'Escalated', 'Resolved']} active={tab} onChange={setTab} />
            <div className="ml-auto">
              <SearchBar placeholder="Search tickets…" value={search} onChange={setSearch} />
            </div>
          </div>
          <div className="divide-y divide-slate-50">
            {filtered.map(t => (
              <div
                key={t.id}
                onClick={() => setSelectedTicket(selectedTicket?.id === t.id ? null : t)}
                className={`p-4 cursor-pointer hover:bg-slate-50 transition-colors ${selectedTicket?.id === t.id ? 'bg-blue-50 border-l-2 border-l-blue-500' : ''}`}
              >
                <div className="flex items-start gap-3">
                  <Avatar initials={t.user.split(' ').map(n => n[0]).join('')} size="sm" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="tabular text-xs font-mono text-slate-400">{t.id}</span>
                      <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${priorityColor[t.priority]}`}>{t.priority}</span>
                      <Badge status={t.status} dot={false} />
                    </div>
                    <div className="text-sm font-semibold text-slate-900 mt-1">{t.subject}</div>
                    <div className="flex items-center gap-4 mt-1.5 text-xs text-slate-400">
                      <span>{t.user}</span>
                      <span>·</span>
                      <span>{t.category}</span>
                      <span>·</span>
                      <span>Agent: {t.agent}</span>
                      <span>·</span>
                      <span>{t.created}</span>
                      <span className={`ml-auto font-semibold ${t.sla === 'Overdue' ? 'text-red-600' : t.sla === 'Resolved' ? 'text-emerald-600' : 'text-amber-600'}`}>
                        SLA: {t.sla}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Ticket detail panel */}
      {selectedTicket && (
        <div className="w-80 shrink-0 space-y-4 overflow-y-auto animate-fade-in">
          <Card className="p-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Ticket Detail</span>
              <button onClick={() => setSelectedTicket(null)} className="text-slate-400 hover:text-slate-600 cursor-pointer">
                <Icon name="x" className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-3 text-xs">
              <div className="font-bold text-slate-900 text-sm">{selectedTicket.subject}</div>
              <div className="flex gap-2 flex-wrap">
                <Badge status={selectedTicket.status} />
                <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${priorityColor[selectedTicket.priority]}`}>{selectedTicket.priority}</span>
              </div>
              {[
                { label: 'Ticket ID', value: selectedTicket.id },
                { label: 'User', value: selectedTicket.user },
                { label: 'Category', value: selectedTicket.category },
                { label: 'Assigned To', value: selectedTicket.agent },
                { label: 'Created', value: selectedTicket.created },
                { label: 'SLA', value: selectedTicket.sla },
              ].map(r => (
                <div key={r.label} className="flex justify-between py-1.5 border-b border-slate-50">
                  <span className="text-slate-500">{r.label}</span>
                  <span className="font-semibold text-slate-800">{r.value}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-4">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Timeline</div>
            <div className="space-y-3">
              {[
                { event: 'Ticket created', time: selectedTicket.created, by: selectedTicket.user },
                { event: 'Assigned to agent', time: '10m later', by: 'System' },
                { event: 'First response sent', time: '1h later', by: selectedTicket.agent },
              ].map((e, i) => (
                <div key={i} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-0.5" />
                    {i < 2 && <div className="w-px flex-1 bg-slate-200 mt-1" />}
                  </div>
                  <div className="pb-3">
                    <div className="text-xs font-semibold text-slate-900">{e.event}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{e.time} · {e.by}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-4">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Actions</div>
            <div className="space-y-2">
              <Button variant="primary" className="w-full justify-center">Reply to User</Button>
              <Button variant="secondary" className="w-full justify-center">Reassign Agent</Button>
              <Button variant="warning" className="w-full justify-center">Escalate</Button>
              <Button variant="success" className="w-full justify-center">Mark Resolved</Button>
            </div>
            <div className="mt-3">
              <textarea
                className="w-full text-xs border border-slate-200 rounded-lg p-2.5 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 placeholder:text-slate-400"
                rows={3}
                placeholder="Add internal note…"
              />
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}

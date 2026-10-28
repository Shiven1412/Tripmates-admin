import { useState } from 'react';
import { safetyReports } from '../data/mockData';
import { Badge, Card, PageHeader, Button, Icon, SearchBar, Avatar, Tabs } from '../components/ui';

const stats = [
  { label: 'Active Reports', value: 128, color: 'text-red-600', sub: '↑ 12 this week' },
  { label: 'Under Investigation', value: 34, color: 'text-amber-600', sub: '↓ 3 from yesterday' },
  { label: 'Escalated', value: 8, color: 'text-red-700', sub: 'Needs urgent action' },
  { label: 'Resolved (30d)', value: 412, color: 'text-emerald-600', sub: '89% resolution rate' },
];

const categoryColors: Record<string, string> = {
  Harassment: 'bg-red-100 text-red-700',
  Scam: 'bg-red-100 text-red-700',
  Fraud: 'bg-red-100 text-red-700',
  'Fake Identity': 'bg-amber-100 text-amber-700',
  Spam: 'bg-slate-100 text-slate-700',
  'Inappropriate Content': 'bg-orange-100 text-orange-700',
  'Safety Incident': 'bg-red-200 text-red-900',
};

export default function TrustSafety() {
  const [selected, setSelected] = useState<typeof safetyReports[0] | null>(null);
  const [tab, setTab] = useState('All Reports');
  const [search, setSearch] = useState('');

  const filtered = safetyReports.filter(r =>
    r.reporter.toLowerCase().includes(search.toLowerCase()) ||
    r.reported.toLowerCase().includes(search.toLowerCase()) ||
    r.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 animate-fade-in flex gap-4 h-full min-h-0">
      <div className="flex-1 min-w-0 space-y-4">
        <PageHeader
          title="Trust & Safety Center"
          subtitle="Manage reports, investigations and moderation actions"
          actions={
            <Button variant="danger"><Icon name="alert-octagon" className="w-3.5 h-3.5 inline mr-1" />Emergency Protocol</Button>
          }
        />

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {stats.map((s, i) => (
            <Card key={i} className="p-4">
              <div className={`tabular text-2xl font-bold ${s.color}`}>{s.value}</div>
              <div className="text-xs font-semibold text-slate-700 mt-1">{s.label}</div>
              <div className="text-[10px] text-slate-400 mt-0.5">{s.sub}</div>
            </Card>
          ))}
        </div>

        {/* Reports table */}
        <Card>
          <div className="p-4 border-b border-slate-100 flex flex-wrap gap-3 items-center">
            <Tabs tabs={['All Reports', 'Harassment', 'Fraud', 'Fake Identity', 'Escalated']} active={tab} onChange={setTab} />
            <div className="ml-auto">
              <SearchBar placeholder="Search reports…" value={search} onChange={setSearch} />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Report ID</th>
                  <th>Reporter</th>
                  <th>Reported</th>
                  <th>Category</th>
                  <th>Severity</th>
                  <th>Evidence</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(r => (
                  <tr key={r.id} className={`cursor-pointer ${selected?.id === r.id ? 'bg-red-50' : ''}`} onClick={() => setSelected(selected?.id === r.id ? null : r)}>
                    <td><span className="tabular font-mono text-xs text-slate-500">{r.id}</span></td>
                    <td>
                      <div className="flex items-center gap-2">
                        <Avatar initials={r.reporter.split(' ').map(n => n[0]).join('')} size="sm" />
                        <span className="font-medium text-slate-900 text-sm">{r.reporter}</span>
                      </div>
                    </td>
                    <td className="text-slate-600">{r.reported}</td>
                    <td>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColors[r.category] ?? 'bg-slate-100 text-slate-600'}`}>
                        {r.category}
                      </span>
                    </td>
                    <td><Badge status={r.severity} /></td>
                    <td>
                      <span className="tabular text-xs font-semibold text-slate-700 flex items-center gap-1">
                        <Icon name="file-text" className="w-3.5 h-3.5 text-slate-400" />
                        {r.evidence} files
                      </span>
                    </td>
                    <td className="text-slate-500 tabular text-xs">{r.date}</td>
                    <td><Badge status={r.status} /></td>
                    <td onClick={e => e.stopPropagation()}>
                      <div className="flex gap-1">
                        <Button variant="danger" size="xs">Escalate</Button>
                        <Button variant="secondary" size="xs">Review</Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* Investigation panel */}
      {selected && (
        <div className="w-80 shrink-0 space-y-4 overflow-y-auto animate-fade-in">
          <Card className="p-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Investigation Panel</span>
              <button onClick={() => setSelected(null)} className="text-slate-400 hover:text-slate-600 cursor-pointer">
                <Icon name="x" className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-lg">
                <div className="font-semibold text-slate-500 mb-1">Report ID</div>
                <div className="tabular font-mono text-slate-900">{selected.id}</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-3 bg-slate-50 rounded-lg">
                  <div className="font-semibold text-slate-500 mb-1">Reporter</div>
                  <div className="font-semibold text-slate-900">{selected.reporter}</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg">
                  <div className="font-semibold text-slate-500 mb-1">Reported</div>
                  <div className="font-semibold text-slate-900">{selected.reported}</div>
                </div>
              </div>
              <div className="p-3 bg-red-50 rounded-lg border border-red-100">
                <div className="font-semibold text-red-500 mb-1">Category</div>
                <div className="font-bold text-red-800">{selected.category}</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-3 bg-slate-50 rounded-lg">
                  <div className="font-semibold text-slate-500 mb-1">Severity</div>
                  <Badge status={selected.severity} />
                </div>
                <div className="p-3 bg-slate-50 rounded-lg">
                  <div className="font-semibold text-slate-500 mb-1">Evidence</div>
                  <div className="font-bold text-slate-900">{selected.evidence} files</div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Evidence & Screenshots</div>
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: Math.min(selected.evidence, 6) }).map((_, i) => (
                <div key={i} className="aspect-square bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 text-xs cursor-pointer hover:bg-slate-200 transition-colors">
                  <Icon name="file-text" className="w-5 h-5" />
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-4">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Action</div>
            <div className="space-y-2">
              <Button variant="warning" className="w-full justify-center">Issue Warning</Button>
              <Button variant="warning" className="w-full justify-center">Temporary Suspension</Button>
              <Button variant="danger" className="w-full justify-center">Permanent Ban</Button>
              <Button variant="secondary" className="w-full justify-center">Escalate to Safety Officer</Button>
              <div className="pt-1">
                <textarea
                  className="w-full text-xs border border-slate-200 rounded-lg p-2.5 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 placeholder:text-slate-400"
                  rows={3}
                  placeholder="Add internal note…"
                />
                <Button variant="secondary" className="w-full justify-center mt-2">Save Note</Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}

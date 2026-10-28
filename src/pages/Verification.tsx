import { useState } from 'react';
import { verifications } from '../data/mockData';
import { Badge, Card, PageHeader, Button, Icon, SearchBar, Tabs, Avatar } from '../components/ui';

export default function Verification() {
  const [tab, setTab] = useState('Pending');
  const [search, setSearch] = useState('');

  const filtered = verifications.filter(v => {
    const matchTab = tab === 'All' || v.status.toLowerCase().includes(tab.toLowerCase().replace(' ', '_'));
    const matchSearch = v.user.toLowerCase().includes(search.toLowerCase()) || v.id.toLowerCase().includes(search.toLowerCase());
    return matchTab && matchSearch;
  });

  return (
    <div className="p-6 space-y-5 animate-fade-in">
      <PageHeader
        title="Verification Center"
        subtitle="Review traveler, provider and business verifications"
        actions={<Button variant="primary">Bulk Approve</Button>}
      />

      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {[
          { label: 'Pending', count: 892, color: 'text-amber-600 bg-amber-50 border-amber-200' },
          { label: 'Approved', count: 14820, color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
          { label: 'Rejected', count: 312, color: 'text-red-600 bg-red-50 border-red-200' },
          { label: 'Escalated', count: 28, color: 'text-red-700 bg-red-100 border-red-300' },
          { label: 'Review Required', count: 147, color: 'text-blue-600 bg-blue-50 border-blue-200' },
        ].map((s, i) => (
          <div key={i} className={`border rounded-xl p-4 ${s.color}`}>
            <div className="tabular text-2xl font-bold">{s.count.toLocaleString()}</div>
            <div className="text-xs font-semibold mt-1 opacity-80">{s.label}</div>
          </div>
        ))}
      </div>

      <Card>
        <div className="p-4 border-b border-slate-100 flex flex-wrap gap-3 items-center">
          <Tabs tabs={['Pending', 'Review Required', 'Escalated', 'Approved', 'Rejected', 'All']} active={tab} onChange={setTab} />
          <div className="ml-auto">
            <SearchBar placeholder="Search verifications…" value={search} onChange={setSearch} />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>User</th>
                <th>Type</th>
                <th>Documents</th>
                <th>Risk</th>
                <th>Submitted</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {verifications.map(v => (
                <tr key={v.id}>
                  <td className="tabular font-mono text-xs text-slate-400">{v.id}</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <Avatar initials={v.user.split(' ').map(n => n[0]).join('').slice(0, 2)} size="sm" />
                      <span className="font-semibold text-slate-900 text-sm">{v.user}</span>
                    </div>
                  </td>
                  <td className="text-slate-600 text-xs">{v.type}</td>
                  <td>
                    <div className="flex gap-1 flex-wrap">
                      {v.documents.map(d => (
                        <span key={d} className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">{d}</span>
                      ))}
                    </div>
                  </td>
                  <td><Badge status={v.risk} dot={false} /></td>
                  <td className="text-slate-500 text-xs tabular">{v.submitted}</td>
                  <td><Badge status={v.status} /></td>
                  <td>
                    <div className="flex gap-1">
                      <Button variant="success" size="xs">Approve</Button>
                      <Button variant="danger" size="xs">Reject</Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

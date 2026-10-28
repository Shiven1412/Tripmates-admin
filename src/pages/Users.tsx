import { useState } from 'react';
import { users } from '../data/mockData';
import { Badge, Avatar, SearchBar, Button, Card, PageHeader, Icon, StatRow } from '../components/ui';

export default function Users() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selected, setSelected] = useState<string | null>(null);
  const [bulkSelected, setBulkSelected] = useState<string[]>([]);

  const filtered = users.filter(u => {
    const matchSearch = u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.id.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === 'all' || u.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const selectedUser = users.find(u => u.id === selected);

  const toggleBulk = (id: string) => {
    setBulkSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  return (
    <div className="p-6 animate-fade-in flex gap-4 h-full min-h-0">
      {/* Main table panel */}
      <div className="flex-1 min-w-0 flex flex-col gap-4">
        <PageHeader
          title="User Management"
          subtitle={`${users.length.toLocaleString()} total users · ${users.filter(u => u.status === 'active').length} active`}
          actions={
            <>
              <Button variant="secondary"><Icon name="download" className="w-3.5 h-3.5 inline mr-1" />Export</Button>
              <Button variant="primary"><Icon name="plus" className="w-3.5 h-3.5 inline mr-1" />Invite User</Button>
            </>
          }
        />

        {/* Filters */}
        <Card>
          <div className="p-4 flex flex-wrap gap-3 border-b border-slate-100">
            <div className="flex-1 min-w-48">
              <SearchBar placeholder="Search users…" value={search} onChange={setSearch} />
            </div>
            <div className="flex gap-2">
              {['all', 'active', 'suspended', 'flagged', 'under_review'].map(s => (
                <button
                  key={s}
                  onClick={() => setStatusFilter(s)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    statusFilter === s ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {s === 'all' ? 'All Users' : s.replace(/_/g, ' ')}
                </button>
              ))}
            </div>
          </div>

          {bulkSelected.length > 0 && (
            <div className="px-4 py-2.5 bg-blue-50 border-b border-blue-100 flex items-center gap-3">
              <span className="text-xs font-semibold text-blue-700">{bulkSelected.length} selected</span>
              <Button variant="warning" size="xs">Suspend</Button>
              <Button variant="danger" size="xs">Ban</Button>
              <Button variant="secondary" size="xs">Send Notification</Button>
              <button onClick={() => setBulkSelected([])} className="ml-auto text-xs text-slate-500 hover:text-slate-700 cursor-pointer">Clear</button>
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th className="w-10"><input type="checkbox" className="rounded" onChange={e => e.target.checked ? setBulkSelected(filtered.map(u => u.id)) : setBulkSelected([])} /></th>
                  <th>User</th>
                  <th>Location</th>
                  <th>Joined</th>
                  <th>Trips</th>
                  <th>Trust Score</th>
                  <th>Status</th>
                  <th>Verified</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(u => (
                  <tr
                    key={u.id}
                    className={`cursor-pointer ${selected === u.id ? 'bg-blue-50' : ''}`}
                    onClick={() => setSelected(selected === u.id ? null : u.id)}
                  >
                    <td onClick={e => e.stopPropagation()}>
                      <input type="checkbox" className="rounded" checked={bulkSelected.includes(u.id)} onChange={() => toggleBulk(u.id)} />
                    </td>
                    <td>
                      <div className="flex items-center gap-3">
                        <Avatar initials={u.avatar} size="sm" />
                        <div>
                          <div className="font-semibold text-slate-900 text-sm">{u.name}</div>
                          <div className="text-xs text-slate-400">{u.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="text-slate-600">{u.location}</td>
                    <td className="text-slate-600 tabular">{u.joined}</td>
                    <td className="tabular font-semibold text-slate-900">{u.trips}</td>
                    <td>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-slate-100 rounded-full h-1.5 w-16">
                          <div
                            className={`h-1.5 rounded-full ${u.trustScore >= 85 ? 'bg-emerald-500' : u.trustScore >= 65 ? 'bg-amber-500' : 'bg-red-500'}`}
                            style={{ width: `${u.trustScore}%` }}
                          />
                        </div>
                        <span className="tabular text-xs font-bold text-slate-700">{u.trustScore}</span>
                      </div>
                    </td>
                    <td><Badge status={u.status} /></td>
                    <td>
                      {u.verified
                        ? <span className="text-emerald-600 flex items-center gap-1 text-xs"><Icon name="check" className="w-3.5 h-3.5" />Verified</span>
                        : <span className="text-slate-400 text-xs">—</span>}
                    </td>
                    <td onClick={e => e.stopPropagation()}>
                      <button className="p-1 text-slate-400 hover:text-slate-600 cursor-pointer rounded">
                        <Icon name="more-horizontal" className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-4 py-3 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500">{filtered.length} results</span>
            <div className="flex gap-1">
              {[1, 2, 3].map(p => (
                <button key={p} className={`w-7 h-7 text-xs rounded ${p === 1 ? 'bg-slate-900 text-white' : 'text-slate-500 hover:bg-slate-100'} cursor-pointer`}>{p}</button>
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* User detail panel */}
      {selectedUser && (
        <div className="w-80 shrink-0 space-y-4 overflow-y-auto animate-fade-in">
          <Card className="p-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">User Profile</span>
              <button onClick={() => setSelected(null)} className="text-slate-400 hover:text-slate-600 cursor-pointer">
                <Icon name="x" className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-col items-center text-center mb-4">
              <Avatar initials={selectedUser.avatar} size="lg" />
              <div className="mt-2 font-bold text-slate-900">{selectedUser.name}</div>
              <div className="text-xs text-slate-500">{selectedUser.email}</div>
              <div className="mt-2"><Badge status={selectedUser.status} /></div>
            </div>
            <StatRow items={[
              { label: 'Trips', value: selectedUser.trips },
              { label: 'Trust Score', value: selectedUser.trustScore, color: selectedUser.trustScore >= 85 ? 'text-emerald-600' : 'text-amber-600' },
            ]} />
            <div className="mt-4 space-y-2 text-xs">
              {[
                { label: 'User ID', value: selectedUser.id },
                { label: 'Location', value: selectedUser.location },
                { label: 'Joined', value: selectedUser.joined },
                { label: 'Verified', value: selectedUser.verified ? 'Yes' : 'No' },
              ].map(r => (
                <div key={r.label} className="flex justify-between items-center py-1.5 border-b border-slate-50">
                  <span className="text-slate-500">{r.label}</span>
                  <span className="font-semibold text-slate-800">{r.value}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-4">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Admin Actions</div>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="warning" className="justify-center">Suspend</Button>
              <Button variant="danger" className="justify-center">Ban User</Button>
              <Button variant="secondary" className="justify-center">Reset Verify</Button>
              <Button variant="secondary" className="justify-center">Send Notif</Button>
              <Button variant="secondary" className="justify-center col-span-2">View Activity Log</Button>
            </div>
          </Card>

          <Card className="p-4">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Travel Personality</div>
            {['Adventure Seeker', 'Budget Traveler', 'Culture Enthusiast'].map((tag, i) => (
              <span key={i} className="inline-block bg-violet-50 text-violet-700 text-xs font-semibold px-2.5 py-1 rounded-full mr-1.5 mb-1.5">{tag}</span>
            ))}
          </Card>
        </div>
      )}
    </div>
  );
}

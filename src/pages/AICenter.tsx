import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { aiMetrics } from '../data/mockData';
import { Badge, Card, PageHeader, Button, Icon } from '../components/ui';

const usageTrend = [
  { hour: '00', requests: 12400, tokens: 48000000 },
  { hour: '04', requests: 8200, tokens: 32000000 },
  { hour: '08', requests: 24800, tokens: 92000000 },
  { hour: '12', requests: 42100, tokens: 168000000 },
  { hour: '16', requests: 48200, tokens: 192000000 },
  { hour: '20', requests: 38400, tokens: 148000000 },
  { hour: '24', requests: 28100, tokens: 108000000 },
];

export default function AICenter() {
  return (
    <div className="p-6 space-y-5 animate-fade-in">
      <PageHeader
        title="AI Control Center"
        subtitle="Monitor AI module usage, token consumption and model costs"
        actions={<Button variant="secondary">Configure AI Settings</Button>}
      />

      {/* Top stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: 'Total Requests (24h)', value: '583,532', sub: '↑ 12.4%', color: 'text-blue-600' },
          { label: 'Tokens Consumed', value: '1.46B', sub: '↑ 8.7%', color: 'text-violet-600' },
          { label: 'Total AI Cost (mo)', value: '₹1.84M', sub: '↑ 14.1%', color: 'text-amber-600' },
          { label: 'Avg Accuracy', value: '90.0%', sub: '↓ 1.2pp (Travel Date)', color: 'text-emerald-600' },
        ].map((s, i) => (
          <Card key={i} className="p-4">
            <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">{s.label}</div>
            <div className={`tabular text-2xl font-bold ${s.color} mt-1.5`}>{s.value}</div>
            <div className="text-xs text-slate-400 mt-1">{s.sub}</div>
          </Card>
        ))}
      </div>

      {/* Usage chart */}
      <Card className="p-5">
        <div className="text-sm font-bold text-slate-900 mb-4">API Usage Trend (24h)</div>
        <ResponsiveContainer width="100%" height={180}>
          <AreaChart data={usageTrend} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="reqGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
            <XAxis dataKey="hour" tick={{ fontSize: 11, fill: '#94A3B8' }} axisLine={false} tickLine={false} tickFormatter={h => `${h}:00`} />
            <YAxis tick={{ fontSize: 11, fill: '#94A3B8' }} axisLine={false} tickLine={false} tickFormatter={v => `${(v / 1000).toFixed(0)}K`} />
            <Tooltip />
            <Area type="monotone" dataKey="requests" name="Requests" stroke="#8B5CF6" strokeWidth={2} fill="url(#reqGrad)" dot={false} />
          </AreaChart>
        </ResponsiveContainer>
      </Card>

      {/* AI Modules table */}
      <Card>
        <div className="p-4 border-b border-slate-100">
          <h3 className="text-sm font-bold text-slate-900">AI Module Performance</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Module</th>
                <th>Requests (24h)</th>
                <th>Tokens Consumed</th>
                <th>Cost (mo)</th>
                <th>Accuracy</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {aiMetrics.map((m, i) => (
                <tr key={i}>
                  <td className="font-semibold text-slate-900">{m.module}</td>
                  <td className="tabular">{m.requests.toLocaleString()}</td>
                  <td className="tabular">{(m.tokens / 1000000).toFixed(0)}M</td>
                  <td className="tabular font-semibold text-slate-900">₹{m.cost.toLocaleString()}</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-slate-100 rounded-full h-1.5">
                        <div
                          className={`h-1.5 rounded-full ${m.accuracy >= 90 ? 'bg-emerald-500' : m.accuracy >= 80 ? 'bg-amber-500' : 'bg-red-500'}`}
                          style={{ width: `${m.accuracy}%` }}
                        />
                      </div>
                      <span className="tabular text-xs font-bold text-slate-700">{m.accuracy}%</span>
                    </div>
                  </td>
                  <td><Badge status={m.status} /></td>
                  <td>
                    <Button variant="ghost" size="xs">Configure</Button>
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

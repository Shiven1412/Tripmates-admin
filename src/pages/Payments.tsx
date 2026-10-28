import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { payments, revenueData } from '../data/mockData';
import { Badge, Card, PageHeader, Button, Icon, SearchBar, Tabs } from '../components/ui';
import { useState } from 'react';

const revenueCards = [
  { label: 'Gross Revenue', value: '₹42.18M', delta: '+14.6%', up: true, sub: 'This month' },
  { label: 'Net Revenue', value: '₹31.20M', delta: '+12.1%', up: true, sub: 'After refunds' },
  { label: 'Commission Revenue', value: '₹10.98M', delta: '+18.4%', up: true, sub: '26% blended rate' },
  { label: 'Provider Payouts', value: '₹28.40M', delta: '+9.7%', up: true, sub: 'Settled this month' },
  { label: 'Pending Refunds', value: '₹2.14M', delta: '+0.8%', up: false, sub: '214 refunds' },
  { label: 'Escrow Balance', value: '₹4.82M', delta: '-3.2%', up: true, sub: 'In hold' },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-slate-200 rounded-lg px-3 py-2 shadow-lg text-xs">
      <div className="font-semibold text-slate-700 mb-1">{label}</div>
      {payload.map((p: any, i: number) => (
        <div key={i} className="flex items-center gap-2">
          <span style={{ color: p.color }}>{p.name}:</span>
          <span className="font-mono font-semibold text-slate-900">₹{(p.value / 1000000).toFixed(2)}M</span>
        </div>
      ))}
    </div>
  );
};

export default function Payments() {
  const [tab, setTab] = useState('Payments');
  const [search, setSearch] = useState('');

  const filtered = payments.filter(p =>
    p.id.toLowerCase().includes(search.toLowerCase()) ||
    p.from.toLowerCase().includes(search.toLowerCase()) ||
    p.to.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-5 animate-fade-in">
      <PageHeader
        title="Payments & Finance"
        subtitle="Revenue tracking, transactions, refunds and settlements"
        actions={
          <>
            <Button variant="secondary"><Icon name="download" className="w-3.5 h-3.5 inline mr-1" />Export CSV</Button>
            <Button variant="primary">Generate Invoice</Button>
          </>
        }
      />

      {/* Revenue KPI cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
        {revenueCards.map((c, i) => (
          <Card key={i} className="p-4">
            <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">{c.label}</div>
            <div className="tabular text-xl font-bold text-slate-900 mt-1.5">{c.value}</div>
            <div className={`text-xs font-semibold mt-1 ${c.up ? 'text-emerald-600' : 'text-red-500'}`}>
              {c.up ? '↑' : '↓'} {c.delta}
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5">{c.sub}</div>
          </Card>
        ))}
      </div>

      {/* Revenue chart */}
      <Card className="p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-slate-900">Revenue Trend</h3>
          <Tabs tabs={['6M', '3M', '1M', '1W']} active="6M" onChange={() => {}} />
        </div>
        <ResponsiveContainer width="100%" height={180}>
          <AreaChart data={revenueData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="pgrossGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.12} />
                <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
            <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: '#94A3B8' }} axisLine={false} tickLine={false} tickFormatter={v => `₹${(v / 1000000).toFixed(1)}M`} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="gross" name="Gross Revenue" stroke="#10B981" strokeWidth={2} fill="url(#pgrossGrad)" dot={false} />
            <Area type="monotone" dataKey="commission" name="Commission" stroke="#F59E0B" strokeWidth={1.5} fill="none" dot={false} strokeDasharray="4 2" />
          </AreaChart>
        </ResponsiveContainer>
      </Card>

      {/* Transactions table */}
      <Card>
        <div className="p-4 border-b border-slate-100 flex flex-wrap gap-3 items-center">
          <Tabs tabs={['Payments', 'Refunds', 'Settlements', 'Invoices', 'Tax Records']} active={tab} onChange={setTab} />
          <div className="ml-auto flex gap-2">
            <SearchBar placeholder="Search transactions…" value={search} onChange={setSearch} />
            <Button variant="secondary" size="sm"><Icon name="filter" className="w-3.5 h-3.5" /></Button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>From</th>
                <th>To</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Method</th>
                <th>Date</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(p => (
                <tr key={p.id} className="cursor-pointer">
                  <td><span className="tabular font-mono text-xs text-slate-500">{p.id}</span></td>
                  <td className="font-medium text-slate-900">{p.from}</td>
                  <td className="text-slate-600">{p.to}</td>
                  <td>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      p.type === 'Refund' ? 'bg-violet-50 text-violet-700'
                      : p.type === 'Settlement' ? 'bg-blue-50 text-blue-700'
                      : p.type === 'Dispute Hold' ? 'bg-red-50 text-red-700'
                      : 'bg-slate-100 text-slate-600'
                    }`}>{p.type}</span>
                  </td>
                  <td className="tabular font-bold text-slate-900">₹{p.amount.toLocaleString()}</td>
                  <td className="text-slate-600 text-xs">{p.method}</td>
                  <td className="text-slate-500 tabular">{p.date}</td>
                  <td><Badge status={p.status} /></td>
                  <td>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="xs"><Icon name="eye" className="w-3.5 h-3.5" /></Button>
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

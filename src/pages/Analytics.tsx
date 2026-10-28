import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import { userGrowthData, revenueData, bookingsTrendData } from '../data/mockData';
import { Card, PageHeader, Button, Icon, Tabs } from '../components/ui';
import { useState } from 'react';

const retentionData = [
  { cohort: 'Apr', w1: 100, w2: 68, w4: 52, w8: 41 },
  { cohort: 'May', w1: 100, w2: 72, w4: 56, w8: 44 },
  { cohort: 'Jun', w1: 100, w2: 71, w4: 54, w8: 43 },
  { cohort: 'Jul', w1: 100, w2: 74, w4: 58, w8: 46 },
  { cohort: 'Aug', w1: 100, w2: 76, w4: 61, w8: null },
  { cohort: 'Sep', w1: 100, w2: 78, w4: null, w8: null },
];

const destData = [
  { name: 'Goa', value: 28 },
  { name: 'Ladakh', value: 22 },
  { name: 'Manali', value: 18 },
  { name: 'Kerala', value: 14 },
  { name: 'Rajasthan', value: 11 },
  { name: 'Others', value: 7 },
];

const COLORS = ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444', '#94A3B8'];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-slate-200 rounded-lg px-3 py-2 shadow-lg text-xs">
      <div className="font-semibold text-slate-700 mb-1">{label}</div>
      {payload.map((p: any, i: number) => (
        <div key={i} className="flex items-center gap-2">
          <span style={{ color: p.color }}>{p.name}:</span>
          <span className="font-mono font-semibold text-slate-900">{p.value?.toLocaleString?.() ?? p.value}</span>
        </div>
      ))}
    </div>
  );
};

export default function Analytics() {
  const [period, setPeriod] = useState('6M');

  return (
    <div className="p-6 space-y-5 animate-fade-in">
      <PageHeader
        title="Analytics Center"
        subtitle="Platform-wide metrics, growth trends and conversion analysis"
        actions={
          <>
            <Tabs tabs={['1W', '1M', '3M', '6M', '1Y']} active={period} onChange={setPeriod} />
            <Button variant="secondary"><Icon name="download" className="w-3.5 h-3.5 inline mr-1" />Export</Button>
          </>
        }
      />

      {/* Top metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: 'Active Users (DAU)', value: '84,291', change: '+6.2%', up: true },
          { label: 'New Sign-ups (Today)', value: '2,841', change: '+11.4%', up: true },
          { label: 'Booking Conversion', value: '14.8%', change: '+1.2pp', up: true },
          { label: 'Avg Session (min)', value: '18.4', change: '+3.1%', up: true },
        ].map((m, i) => (
          <Card key={i} className="p-4">
            <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">{m.label}</div>
            <div className="tabular text-2xl font-bold text-slate-900 mt-1.5">{m.value}</div>
            <div className={`text-xs font-semibold mt-1 ${m.up ? 'text-emerald-600' : 'text-red-500'}`}>{m.up ? '↑' : '↓'} {m.change}</div>
          </Card>
        ))}
      </div>

      {/* Main charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <Card className="p-5">
          <div className="text-sm font-bold text-slate-900 mb-4">User Growth Trend</div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={userGrowthData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="aGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#94A3B8' }} axisLine={false} tickLine={false} tickFormatter={v => `${(v / 1000000).toFixed(1)}M`} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="users" name="Users" stroke="#3B82F6" strokeWidth={2} fill="url(#aGrad)" dot={false} />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-5">
          <div className="text-sm font-bold text-slate-900 mb-4">Revenue Growth</div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={revenueData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#94A3B8' }} axisLine={false} tickLine={false} tickFormatter={v => `₹${(v / 1000000).toFixed(1)}M`} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="net" name="Net Revenue" fill="#10B981" radius={[3, 3, 0, 0]} />
              <Bar dataKey="commission" name="Commission" fill="#3B82F6" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Retention + Popular Destinations */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <Card className="xl:col-span-2 p-5">
          <div className="text-sm font-bold text-slate-900 mb-4">User Retention by Cohort</div>
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Cohort</th>
                  <th>Week 1</th>
                  <th>Week 2</th>
                  <th>Week 4</th>
                  <th>Week 8</th>
                </tr>
              </thead>
              <tbody>
                {retentionData.map(r => (
                  <tr key={r.cohort}>
                    <td className="font-semibold text-slate-900">{r.cohort}</td>
                    {[r.w1, r.w2, r.w4, r.w8].map((val, i) => (
                      <td key={i}>
                        {val !== null ? (
                          <div className="flex items-center gap-2">
                            <div className="w-16 bg-slate-100 rounded-full h-1.5">
                              <div
                                className="h-1.5 rounded-full"
                                style={{ width: `${val}%`, background: val >= 70 ? '#10B981' : val >= 50 ? '#3B82F6' : '#F59E0B' }}
                              />
                            </div>
                            <span className="tabular text-xs font-semibold text-slate-700">{val}%</span>
                          </div>
                        ) : <span className="text-slate-300 text-xs">—</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card className="p-5">
          <div className="text-sm font-bold text-slate-900 mb-4">Popular Destinations</div>
          <ResponsiveContainer width="100%" height={160}>
            <PieChart>
              <Pie data={destData} cx="50%" cy="50%" innerRadius={45} outerRadius={70} dataKey="value" paddingAngle={2}>
                {destData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-2">
            {destData.map((d, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ background: COLORS[i] }} />
                <span className="text-xs text-slate-600 flex-1">{d.name}</span>
                <span className="tabular text-xs font-bold text-slate-900">{d.value}%</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

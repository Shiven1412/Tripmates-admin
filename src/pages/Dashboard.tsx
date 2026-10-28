import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import { kpiData, userGrowthData, revenueData, bookingsTrendData, activityFeed } from '../data/mockData';
import { KPICard, Card, Badge, Avatar, Icon } from '../components/ui';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-slate-200 rounded-lg px-3 py-2 shadow-lg text-xs">
      <div className="font-semibold text-slate-700 mb-1">{label}</div>
      {payload.map((p: any, i: number) => (
        <div key={i} className="flex items-center gap-2">
          <span style={{ color: p.color }}>{p.name}:</span>
          <span className="font-mono font-semibold text-slate-900">
            {typeof p.value === 'number' && p.value > 10000
              ? `${(p.value / 1000000).toFixed(2)}M`
              : p.value?.toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
};

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* KPI Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-bold text-slate-900">Platform Overview</h2>
          <span className="text-xs text-slate-500 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse-dot" />
            Live · Updated just now
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
          {kpiData.map((k, i) => (
            <KPICard key={i} {...k} />
          ))}
        </div>
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        {/* User & Provider Growth */}
        <Card className="xl:col-span-2 p-5">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-sm font-bold text-slate-900">User & Provider Growth</h3>
              <p className="text-xs text-slate-500 mt-0.5">Last 6 months</p>
            </div>
            <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
              <Icon name="trending-up" className="w-3 h-3" /> +56.4% YoY
            </span>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={userGrowthData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="usersGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="provGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#94A3B8' }} axisLine={false} tickLine={false} tickFormatter={v => `${(v / 1000000).toFixed(1)}M`} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="users" name="Users" stroke="#3B82F6" strokeWidth={2} fill="url(#usersGrad)" dot={false} />
              <Area type="monotone" dataKey="providers" name="Providers" stroke="#8B5CF6" strokeWidth={2} fill="url(#provGrad)" dot={false} />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        {/* Bookings trend */}
        <Card className="p-5">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Daily Bookings</h3>
              <p className="text-xs text-slate-500 mt-0.5">This week</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={bookingsTrendData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
              <XAxis dataKey="day" tick={{ fontSize: 11, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="bookings" name="Bookings" fill="#3B82F6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Revenue chart + Activity feed */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        {/* Revenue */}
        <Card className="xl:col-span-2 p-5">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Revenue Breakdown</h3>
              <p className="text-xs text-slate-500 mt-0.5">Gross, Net & Commission</p>
            </div>
            <div className="flex items-center gap-4 text-xs text-slate-500">
              {[{ label: 'Gross', color: '#10B981' }, { label: 'Net', color: '#3B82F6' }, { label: 'Commission', color: '#F59E0B' }].map(l => (
                <span key={l.label} className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-sm" style={{ background: l.color }} />
                  {l.label}
                </span>
              ))}
            </div>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={revenueData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="grossGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="netGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#94A3B8' }} axisLine={false} tickLine={false} tickFormatter={v => `₹${(v / 1000000).toFixed(1)}M`} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="gross" name="Gross Revenue" stroke="#10B981" strokeWidth={2} fill="url(#grossGrad)" dot={false} />
              <Area type="monotone" dataKey="net" name="Net Revenue" stroke="#3B82F6" strokeWidth={2} fill="url(#netGrad)" dot={false} />
              <Area type="monotone" dataKey="commission" name="Commission" stroke="#F59E0B" strokeWidth={1.5} fill="none" dot={false} strokeDasharray="4 2" />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        {/* Activity Feed */}
        <Card className="p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-900">Activity Feed</h3>
            <span className="text-[10px] font-semibold text-slate-400 bg-slate-100 px-2 py-1 rounded-full">LIVE</span>
          </div>
          <div className="space-y-3">
            {activityFeed.map((item, i) => (
              <div key={i} className="flex items-start gap-3 group">
                <div className="w-7 h-7 bg-slate-100 rounded-full flex items-center justify-center text-sm shrink-0 group-hover:bg-slate-200 transition-colors">
                  {item.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs text-slate-800 leading-snug">
                    <span className="font-semibold">{item.user}</span>
                    {item.action ? ` ${item.action}` : item.location ? ` signed up from ${item.location}` : ''}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">{item.time}</div>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-4 w-full text-xs font-semibold text-blue-600 hover:text-blue-700 py-2 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors cursor-pointer">
            View all activity →
          </button>
        </Card>
      </div>

      {/* Quick status row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: 'Verification Queue', count: 892, action: 'Review Now', color: 'text-amber-600 bg-amber-50 hover:bg-amber-100', icon: 'shield-check', page: 'verification' },
          { label: 'Open Support Tickets', count: 347, action: 'View Tickets', color: 'text-blue-600 bg-blue-50 hover:bg-blue-100', icon: 'headphones', page: 'support' },
          { label: 'Active Safety Reports', count: 5, action: 'Investigate', color: 'text-red-600 bg-red-50 hover:bg-red-100', icon: 'shield', page: 'trust-safety' },
          { label: 'Fraud Alerts', count: 4, action: 'Act Now', color: 'text-red-700 bg-red-100 hover:bg-red-200', icon: 'zap', page: 'fraud' },
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-xl border border-slate-200 p-4 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Icon name={item.icon} className="w-4 h-4 text-slate-500" />
              <span className="text-xs font-semibold text-slate-600">{item.label}</span>
            </div>
            <div className="tabular text-2xl font-bold text-slate-900">{item.count}</div>
            <button className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${item.color}`}>
              {item.action}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

import { fraudAlerts } from '../data/mockData';
import { Badge, Card, PageHeader, Button, Icon } from '../components/ui';

export default function Fraud() {
  return (
    <div className="p-6 space-y-5 animate-fade-in">
      <PageHeader
        title="Fraud Detection Center"
        subtitle="AI-powered risk monitoring, duplicate accounts and suspicious activity"
        actions={<Button variant="danger"><Icon name="zap" className="w-3.5 h-3.5 inline mr-1" />Run Full Scan</Button>}
      />

      {/* Risk summary */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {[
          { label: 'High Risk Users', value: 48, color: 'text-red-600 bg-red-50 border-red-200' },
          { label: 'High Risk Providers', value: 12, color: 'text-red-600 bg-red-50 border-red-200' },
          { label: 'Suspicious Payments', value: 27, color: 'text-amber-600 bg-amber-50 border-amber-200' },
          { label: 'Fake Profiles', value: 8, color: 'text-red-700 bg-red-100 border-red-300' },
          { label: 'Duplicate Accounts', value: 34, color: 'text-orange-600 bg-orange-50 border-orange-200' },
        ].map((s, i) => (
          <div key={i} className={`border rounded-xl p-4 ${s.color}`}>
            <div className={`tabular text-2xl font-bold`}>{s.value}</div>
            <div className="text-xs font-semibold mt-1 opacity-80">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Active alerts */}
      <Card>
        <div className="p-4 border-b border-slate-100">
          <h3 className="text-sm font-bold text-slate-900">Active Fraud Alerts</h3>
        </div>
        <div className="divide-y divide-slate-50">
          {fraudAlerts.map(a => (
            <div key={a.id} className="p-4 hover:bg-slate-50 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className={`w-2.5 h-2.5 rounded-full mt-1 shrink-0 ${
                    a.risk === 'critical' ? 'bg-red-600' : a.risk === 'high' ? 'bg-red-500' : 'bg-amber-500'
                  }`} />
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{a.user}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{a.type} · {a.accounts} account{a.accounts > 1 ? 's' : ''} · Last seen {a.lastSeen}</div>
                    <div className="text-xs text-slate-400 mt-1">{a.action}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Badge status={a.risk} dot={false} />
                  <Button variant="danger" size="xs">Freeze</Button>
                  <Button variant="secondary" size="xs">Investigate</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Risk matrix */}
      <Card className="p-5">
        <h3 className="text-sm font-bold text-slate-900 mb-4">Risk Level Distribution</h3>
        <div className="space-y-3">
          {[
            { level: 'Critical', count: 12, pct: 4, color: 'bg-red-600' },
            { level: 'High', count: 48, pct: 16, color: 'bg-red-500' },
            { level: 'Medium', count: 124, pct: 41, color: 'bg-amber-500' },
            { level: 'Low', count: 118, pct: 39, color: 'bg-emerald-500' },
          ].map(r => (
            <div key={r.level} className="flex items-center gap-3">
              <span className="text-xs font-semibold text-slate-600 w-16">{r.level}</span>
              <div className="flex-1 bg-slate-100 rounded-full h-2">
                <div className={`${r.color} h-2 rounded-full transition-all`} style={{ width: `${r.pct}%` }} />
              </div>
              <span className="tabular text-xs font-bold text-slate-900 w-8 text-right">{r.count}</span>
              <span className="tabular text-xs text-slate-400 w-8">{r.pct}%</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

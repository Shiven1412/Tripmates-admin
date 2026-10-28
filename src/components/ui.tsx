import type { ReactNode } from 'react';

const cx = (...parts: Array<string | false | null | undefined>) =>
  parts.filter(Boolean).join(' ');

export function Icon({ name, className = '' }: { name: string; className?: string }) {
  const common = 'h-4 w-4 shrink-0';

  const paths = {
    search: (
      <>
        <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <path d="M16 16L21 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </>
    ),
    bell: (
      <>
        <path d="M15 17h5l-1.5-1.5A2.8 2.8 0 0118 14V10a6 6 0 10-12 0v4c0 .8-.2 1.5-.6 2.1L4 17h5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 20a2 2 0 004 0" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </>
    ),
    grid: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <rect x="14" y="3" width="7" height="4" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <rect x="14" y="13" width="7" height="8" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
      </>
    ),
    users: (
      <>
        <path d="M16 19v-1a4 4 0 00-4-4H8a4 4 0 00-4 4v1" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="10" cy="7" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path d="M20 19v-1a4 4 0 00-3-3.87" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M16 4.2a3.5 3.5 0 010 6.8" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </>
    ),
    building: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path d="M9 4v16M15 4v16M4 9h16M4 15h16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </>
    ),
    'shield-check': (
      <>
        <path d="M12 3l7 3v6c0 4.5-2.8 7.7-7 9-4.2-1.3-7-4.5-7-9V6l7-3z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M9 12.5l2 2 4-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
    map: (
      <>
        <path d="M9 4l6-2 6 2v16l-6-2-6 2-6-2V4l6 2z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M9 4v16M15 2v16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </>
    ),
    heart: (
      <path d="M12 20s-7-4.5-7-10a4 4 0 017-2.5A4 4 0 0119 10c0 5.5-7 10-7 10z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path d="M8 3v4M16 3v4M3 10h18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </>
    ),
    'credit-card': (
      <>
        <rect x="2.5" y="5" width="19" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path d="M2.5 10h19" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </>
    ),
    wallet: (
      <>
        <path d="M4 7.5A2.5 2.5 0 016.5 5H18a2 2 0 012 2v9a2 2 0 01-2 2H6.5A2.5 2.5 0 014 15.5v-8zm0 0h14.5A2.5 2.5 0 0119 10H15a2 2 0 01-2-2V7.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <circle cx="16.5" cy="12.5" r="1" fill="currentColor" />
      </>
    ),
    layers: (
      <>
        <path d="M12 3l9 5-9 5-9-5 9-5zm-9 9l9 5 9-5M3 15l9 5 9-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
    store: (
      <>
        <path d="M4 8l1.5-4h13L20 8M5 8h14v10H5z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M9 12h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </>
    ),
    shield: (
      <path d="M12 3l7 3v6c0 4.5-2.8 7.7-7 9-4.2-1.3-7-4.5-7-9V6l7-3z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    ),
    'message-circle': (
      <>
        <path d="M4 12a8 8 0 1016 0v5.5A1.5 1.5 0 0118.5 19H12a8 8 0 01-8-7z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 11h8M8 15h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
    'alert-triangle': (
      <>
        <path d="M12 4l9 15H3L12 4z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M12 9v4M12 17h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </>
    ),
    zap: (
      <path d="M13 2L5 13h5l-1 9 8-11h-5l1-9z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    ),
    headphones: (
      <>
        <path d="M4 13a8 8 0 1116 0" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <rect x="3" y="12" width="4" height="7" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <rect x="17" y="12" width="4" height="7" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      </>
    ),
    star: (
      <path d="M12 3.5l2.5 5.1 5.6.8-4 3.9 1 5.5-5.1-2.7-5.1 2.7 1-5.5-4-3.9 5.6-.8L12 3.5z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    ),
    'bar-chart': (
      <>
        <path d="M4 18V7M10 18V4M16 18v-9M22 18V2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </>
    ),
    cpu: (
      <>
        <rect x="5" y="5" width="14" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path d="M19.4 15a1.2 1.2 0 000 1.7l.1.1a1.8 1.8 0 01-2.5 2.5l-.1-.1a1.2 1.2 0 00-1.7 0 1.2 1.2 0 00-.3.8V20a1.9 1.9 0 01-3.8 0v-.2a1.2 1.2 0 00-.3-.8 1.2 1.2 0 00-1.7 0l-.1.1a1.8 1.8 0 01-2.5-2.5l.1-.1a1.2 1.2 0 000-1.7 1.2 1.2 0 00-.8-.3H4a1.9 1.9 0 010-3.8h.2a1.2 1.2 0 00.8-.3 1.2 1.2 0 000-1.7l-.1-.1a1.8 1.8 0 112.5-2.5l.1.1a1.2 1.2 0 001.7 0 1.2 1.2 0 00.3-.8V4a1.9 1.9 0 013.8 0v.2a1.2 1.2 0 00.3.8 1.2 1.2 0 001.7 0l.1-.1a1.8 1.8 0 112.5 2.5l-.1.1a1.2 1.2 0 000 1.7c.2.2.5.3.8.3h.2a1.9 1.9 0 010 3.8h-.2a1.2 1.2 0 00-.8.3z" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
    'user-check': (
      <>
        <path d="M16 19v-1a4 4 0 00-4-4H8a4 4 0 00-4 4v1" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="10" cy="7" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path d="M18 8l1.5 1.5L23 5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
    'file-text': (
      <>
        <path d="M7 3h7l5 5v12a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M14 3v5h5M9 12h6M9 16h6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
    book: (
      <>
        <path d="M5 5.5A2.5 2.5 0 017.5 3H18a2 2 0 012 2v13.5H7.5A2.5 2.5 0 005 16V5.5z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M5 16h15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </>
    ),
    'alert-octagon': (
      <>
        <path d="M12 2l8 4v6l-8 4-8-4V6l8-4z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </>
    ),
    'chevron-right': <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />,
    'chevron-left': <path d="M15 6L9 12l6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />,
    'log-out': (
      <>
        <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M16 17l5-5-5-5M21 12H9" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
    plus: <path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />,
    download: (
      <>
        <path d="M12 4v10M8.5 19.5L12 23l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 18.5v1.5h16v-1.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </>
    ),
    eye: (
      <>
        <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="2.8" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </>
    ),
    filter: (
      <>
        <path d="M4 6h16M7 12h10M10 18h4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </>
    ),
    'more-horizontal': <path d="M5 12h.01M12 12h.01M19 12h.01" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />,
    x: <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />,
    check: <path d="M5 12.5l4 4L19 2.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />,
    'trending-up': (
      <>
        <path d="M4 16l6-6 4 4 7-9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 5h3v3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
    'shield-check': (
      <>
        <path d="M12 3l7 3v6c0 4.5-2.8 7.7-7 9-4.2-1.3-7-4.5-7-9V6l7-3z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M9 12.5l2 2 4-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
    'flame': (
      <path d="M12 2c2 3 3 4.7 3 7a5 5 0 11-10 0c0-2.2 1-4.1 3-6.1.6-.7 1.6-.5 2 .2.8 1.4 1.1 2.5 2 4.9z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    ),
  } as Record<string, ReactNode>;

  const content = paths[name] ?? (
    <>
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7v5l3 3" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </>
  );

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={cx(common, className)}>
      {content}
    </svg>
  );
}

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={cx('bg-white rounded-xl border border-slate-200 shadow-sm', className)}>{children}</div>;
}

export function KPICard({
  label,
  value,
  delta,
  up,
  currency = false,
  color = 'info',
}: {
  label: string;
  value: number;
  delta: string;
  up: boolean;
  currency?: boolean;
  color?: 'info' | 'success' | 'purple' | 'warning' | 'danger';
}) {
  const colorMap = {
    info: 'text-blue-600 bg-blue-50',
    success: 'text-emerald-600 bg-emerald-50',
    purple: 'text-violet-600 bg-violet-50',
    warning: 'text-amber-600 bg-amber-50',
    danger: 'text-red-600 bg-red-50',
  } as const;

  const formatValue = (n: number) => {
    if (currency) return `₹${(n / 1000000).toFixed(1)}M`;
    if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
    if (n >= 1000) return `${(n / 1000).toFixed(1)}K`;
    return n.toLocaleString();
  };

  return (
    <Card className="p-4">
      <div className="flex items-start justify-between gap-2">
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">{label}</div>
          <div className="mt-2 text-xl font-bold tabular text-slate-900">{formatValue(value)}</div>
        </div>
        <span className={cx('inline-flex items-center rounded-full px-1.5 py-0.5 text-[10px] font-semibold', colorMap[color])}>
          {up ? '↑' : '↓'} {delta}
        </span>
      </div>
    </Card>
  );
}

export function Badge({ status, dot = true }: { status: string; dot?: boolean }) {
  const palette: Record<string, string> = {
    active: 'bg-emerald-50 text-emerald-700',
    suspended: 'bg-red-50 text-red-700',
    flagged: 'bg-amber-50 text-amber-700',
    under_review: 'bg-violet-50 text-violet-700',
    pending: 'bg-amber-50 text-amber-700',
    review_required: 'bg-violet-50 text-violet-700',
    escalated: 'bg-red-50 text-red-700',
    approved: 'bg-emerald-50 text-emerald-700',
    rejected: 'bg-red-50 text-red-700',
    completed: 'bg-emerald-50 text-emerald-700',
    processing: 'bg-blue-50 text-blue-700',
    held: 'bg-amber-50 text-amber-700',
    cancelled: 'bg-slate-100 text-slate-700',
    critical: 'bg-red-100 text-red-700',
    high: 'bg-red-50 text-red-700',
    medium: 'bg-amber-50 text-amber-700',
    low: 'bg-emerald-50 text-emerald-700',
    healthy: 'bg-emerald-50 text-emerald-700',
    degraded: 'bg-amber-50 text-amber-700',
    info: 'bg-blue-50 text-blue-700',
    warning: 'bg-amber-50 text-amber-700',
    success: 'bg-emerald-50 text-emerald-700',
    danger: 'bg-red-50 text-red-700',
    default: 'bg-slate-100 text-slate-700',
  };

  const label = status
    .replace(/_/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());

  return (
    <span className={cx('inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] font-semibold', palette[status] ?? palette.default)}>
      {dot && <span className={cx('h-1.5 w-1.5 rounded-full', status === 'critical' || status === 'high' || status === 'escalated' || status === 'rejected' || status === 'suspended' ? 'bg-current' : 'bg-current opacity-80')} />} 
      {label}
    </span>
  );
}

export function Avatar({ initials, size = 'md' }: { initials: string; size?: 'sm' | 'md' | 'lg' }) {
  const sizeMap = { sm: 'w-8 h-8 text-[10px]', md: 'w-10 h-10 text-xs', lg: 'w-12 h-12 text-sm' } as const;
  return (
    <div className={cx('rounded-full bg-gradient-to-br from-blue-500 to-violet-500 text-white font-bold flex items-center justify-center shrink-0', sizeMap[size])}>
      {initials.slice(0, 2).toUpperCase()}
    </div>
  );
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
}: {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'ghost';
  size?: 'xs' | 'sm' | 'md';
  className?: string;
}) {
  const variants = {
    primary: 'bg-slate-900 text-white hover:bg-slate-800',
    secondary: 'bg-slate-100 text-slate-700 hover:bg-slate-200',
    danger: 'bg-red-600 text-white hover:bg-red-700',
    warning: 'bg-amber-500 text-white hover:bg-amber-600',
    success: 'bg-emerald-600 text-white hover:bg-emerald-700',
    ghost: 'bg-transparent text-slate-600 hover:bg-slate-100',
  };
  const sizes = { xs: 'px-2 py-1 text-[10px]', sm: 'px-2.5 py-1.5 text-xs', md: 'px-3 py-2 text-xs' };

  return (
    <button className={cx('inline-flex items-center justify-center rounded-lg font-semibold transition-colors cursor-pointer', variants[variant], sizes[size], className)}>
      {children}
    </button>
  );
}

export function SearchBar({ placeholder, value, onChange }: { placeholder: string; value: string; onChange: (value: string) => void }) {
  return (
    <div className="relative">
      <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 py-2 text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white"
      />
    </div>
  );
}

export function Tabs({ tabs, active, onChange }: { tabs: string[]; active: string; onChange: (tab: string) => void }) {
  return (
    <div className="flex flex-wrap items-center gap-1.5 rounded-lg bg-slate-100 p-1">
      {tabs.map(tab => (
        <button
          key={tab}
          type="button"
          onClick={() => onChange(tab)}
          className={cx('px-2.5 py-1.5 rounded-md text-[10px] font-semibold transition-colors cursor-pointer', active === tab ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700')}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export function PageHeader({ title, subtitle, actions }: { title: string; subtitle?: string; actions?: ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div>
        <h2 className="text-lg font-bold text-slate-900">{title}</h2>
        {subtitle && <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  );
}

export function StatRow({ items }: { items: Array<{ label: string; value: string | number; color?: string }> }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {items.map(item => (
        <div key={item.label} className="rounded-lg bg-slate-50 px-3 py-2">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">{item.label}</div>
          <div className={cx('tabular text-base font-bold mt-1', item.color ?? 'text-slate-900')}>{item.value}</div>
        </div>
      ))}
    </div>
  );
}

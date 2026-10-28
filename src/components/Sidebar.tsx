import { navGroups } from '../data/mockData';
import { Icon } from './ui';

interface SidebarProps {
  active: string;
  onNav: (id: string) => void;
  collapsed: boolean;
  onToggle: () => void;
}

export default function Sidebar({ active, onNav, collapsed, onToggle }: SidebarProps) {
  return (
    <aside
      className="flex flex-col h-full transition-all duration-300 ease-in-out"
      style={{
        width: collapsed ? 64 : 240,
        background: '#0F172A',
        borderRight: '1px solid #1E293B',
        flexShrink: 0,
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-4 border-b border-slate-800">
        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center shrink-0">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
          </svg>
        </div>
        {!collapsed && (
          <div className="min-w-0">
            <div className="text-white font-bold text-sm leading-tight">TripMates</div>
            <div className="text-slate-500 text-[10px] font-medium tracking-wider uppercase">Admin</div>
          </div>
        )}
        <button
          onClick={onToggle}
          className="ml-auto text-slate-500 hover:text-slate-300 transition-colors cursor-pointer shrink-0"
        >
          <Icon name={collapsed ? 'chevron-right' : 'chevron-left'} className="w-4 h-4" />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-3 space-y-0.5">
        {navGroups.map(group => (
          <div key={group.label} className="px-2">
            {!collapsed && (
              <div className="text-[10px] font-semibold text-slate-600 uppercase tracking-widest px-2 pt-4 pb-1.5">
                {group.label}
              </div>
            )}
            {collapsed && group !== navGroups[0] && (
              <div className="border-t border-slate-800 my-2" />
            )}
            {group.items.map(item => {
              const isActive = active === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNav(item.id)}
                  title={collapsed ? item.label : undefined}
                  className={`w-full flex items-center gap-3 px-2 py-2 rounded-lg text-sm font-medium transition-all duration-150 cursor-pointer mb-0.5 ${
                    isActive
                      ? 'bg-slate-700 text-white'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  } ${collapsed ? 'justify-center' : ''}`}
                >
                  <Icon name={item.icon} className="w-4 h-4 shrink-0" />
                  {!collapsed && <span className="truncate">{item.label}</span>}
                  {!collapsed && item.id === 'support' && (
                    <span className="ml-auto bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center shrink-0">3</span>
                  )}
                  {!collapsed && item.id === 'fraud' && (
                    <span className="ml-auto bg-amber-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center shrink-0">!</span>
                  )}
                  {!collapsed && item.id === 'verification' && (
                    <span className="ml-auto bg-blue-500 text-white text-[10px] font-bold rounded-full px-1.5 h-4 flex items-center justify-center shrink-0">892</span>
                  )}
                </button>
              );
            })}
          </div>
        ))}
      </nav>

      {/* User */}
      <div className={`border-t border-slate-800 p-3 flex items-center gap-3 ${collapsed ? 'justify-center' : ''}`}>
        <div className="w-7 h-7 bg-gradient-to-br from-blue-400 to-violet-500 rounded-full flex items-center justify-center shrink-0">
          <span className="text-white text-[10px] font-bold">SA</span>
        </div>
        {!collapsed && (
          <>
            <div className="min-w-0 flex-1">
              <div className="text-slate-200 text-xs font-semibold truncate">Super Admin</div>
              <div className="text-slate-500 text-[10px] truncate">admin@tripmates.in</div>
            </div>
            <Icon name="log-out" className="w-4 h-4 text-slate-600 hover:text-slate-400 cursor-pointer shrink-0" />
          </>
        )}
      </div>
    </aside>
  );
}

import {
  LayoutDashboard,
  Apple,
  Dumbbell,
  Moon,
  Lightbulb,
  LibraryBig,
  BarChart3,
  Settings as SettingsIcon,
  Activity,
} from 'lucide-react'

const NAV_ITEMS = [
  { key: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { key: 'nutrition', label: 'Nutrition', icon: Apple },
  { key: 'workout', label: 'Workout', icon: Dumbbell },
  { key: 'sleep', label: 'Sleep', icon: Moon },
  { key: 'health-tips', label: 'Health Tips', icon: Lightbulb },
  { key: 'exercise-library', label: 'Exercise Library', icon: LibraryBig },
  { key: 'weekly-report', label: 'Weekly Report', icon: BarChart3 },
]

export default function Sidebar({ activePage, onNavigate }) {
  return (
    <aside className="hidden lg:flex flex-col w-64 shrink-0 h-screen sticky top-0 border-r border-line bg-base-900">
      <div className="flex items-center gap-2.5 px-6 h-20 border-b border-line">
        <div className="w-9 h-9 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center">
          <Activity size={18} className="text-accent-light" strokeWidth={2.5} />
        </div>
        <div>
          <p className="font-display font-bold text-[15px] leading-tight tracking-tight">VERTEX</p>
          <p className="text-[11px] text-base-600 leading-tight">Health Dashboard</p>
        </div>
      </div>

      <nav className="flex-1 px-3 py-5 space-y-1 overflow-y-auto">
        {NAV_ITEMS.map(({ key, label, icon: Icon }) => {
          const active = activePage === key
          return (
            <button
              key={key}
              onClick={() => onNavigate(key)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                active
                  ? 'bg-accent/12 text-white border border-accent/30'
                  : 'text-base-600 hover:text-white hover:bg-base-800 border border-transparent'
              }`}
            >
              <Icon size={17} strokeWidth={2} className={active ? 'text-accent-light' : ''} />
              {label}
            </button>
          )
        })}
      </nav>

      <div className="p-3 border-t border-line">
        <button
          onClick={() => onNavigate('settings')}
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
            activePage === 'settings'
              ? 'bg-accent/12 text-white border border-accent/30'
              : 'text-base-600 hover:text-white hover:bg-base-800 border border-transparent'
          }`}
        >
          <SettingsIcon size={17} strokeWidth={2} />
          Settings
        </button>
      </div>
    </aside>
  )
}

export { NAV_ITEMS }

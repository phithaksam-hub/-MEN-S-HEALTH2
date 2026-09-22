import { useState } from 'react'
import { Menu, X, Activity, Settings as SettingsIcon } from 'lucide-react'
import { NAV_ITEMS } from './Sidebar.jsx'

export default function MobileNav({ activePage, onNavigate }) {
  const [open, setOpen] = useState(false)

  function go(key) {
    onNavigate(key)
    setOpen(false)
  }

  return (
    <>
      <header className="lg:hidden sticky top-0 z-30 flex items-center justify-between h-16 px-4 bg-base-900/95 backdrop-blur border-b border-line">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center">
            <Activity size={16} className="text-accent-light" strokeWidth={2.5} />
          </div>
          <span className="font-display font-bold text-sm tracking-tight">VERTEX</span>
        </div>
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="p-2 rounded-lg text-base-600 hover:text-white hover:bg-base-800"
        >
          <Menu size={22} />
        </button>
      </header>

      {open && (
        <div className="lg:hidden fixed inset-0 z-40 flex">
          <div className="absolute inset-0 bg-black/70" onClick={() => setOpen(false)} />
          <div className="relative w-72 h-full bg-base-900 border-r border-line p-4 flex flex-col animate-in">
            <div className="flex items-center justify-between mb-6">
              <span className="font-display font-bold text-sm tracking-tight">Menu</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="p-2 rounded-lg text-base-600 hover:text-white hover:bg-base-800"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="space-y-1 flex-1 overflow-y-auto">
              {NAV_ITEMS.map(({ key, label, icon: Icon }) => {
                const active = activePage === key
                return (
                  <button
                    key={key}
                    onClick={() => go(key)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ${
                      active ? 'bg-accent/12 text-white border border-accent/30' : 'text-base-600 hover:text-white hover:bg-base-800'
                    }`}
                  >
                    <Icon size={17} />
                    {label}
                  </button>
                )
              })}
            </nav>
            <button
              onClick={() => go('settings')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium border-t border-line mt-2 pt-4 ${
                activePage === 'settings' ? 'text-white' : 'text-base-600 hover:text-white'
              }`}
            >
              <SettingsIcon size={17} />
              Settings
            </button>
          </div>
        </div>
      )}

      {/* Bottom nav for quick access on small screens */}
      <nav className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-base-900/95 backdrop-blur border-t border-line flex justify-around py-2">
        {NAV_ITEMS.slice(0, 5).map(({ key, label, icon: Icon }) => {
          const active = activePage === key
          return (
            <button
              key={key}
              onClick={() => go(key)}
              className={`flex flex-col items-center gap-1 px-2 py-1 text-[10px] font-medium ${
                active ? 'text-accent-light' : 'text-base-600'
              }`}
            >
              <Icon size={18} />
              {label.split(' ')[0]}
            </button>
          )
        })}
      </nav>
    </>
  )
}

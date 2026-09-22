export default function StatCard({ label, value, unit, sub, icon: Icon, accent = 'accent' }) {
  const ring = {
    accent: 'text-accent-light bg-accent/12 border-accent/25',
    green: 'text-status-green bg-status-green/12 border-status-green/25',
    blue: 'text-status-blue bg-status-blue/12 border-status-blue/25',
    amber: 'text-status-amber bg-status-amber/12 border-status-amber/25',
  }[accent]

  return (
    <div className="rounded-xl border border-line bg-base-900 p-4 sm:p-5 shadow-card animate-in">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium text-base-600">{label}</span>
        {Icon && (
          <div className={`w-8 h-8 rounded-lg border flex items-center justify-center ${ring}`}>
            <Icon size={15} strokeWidth={2.25} />
          </div>
        )}
      </div>
      <div className="flex items-baseline gap-1">
        <span className="font-display font-bold text-2xl tracking-tight">{value}</span>
        {unit && <span className="text-sm text-base-600">{unit}</span>}
      </div>
      {sub && <p className="text-xs text-base-600 mt-1">{sub}</p>}
    </div>
  )
}

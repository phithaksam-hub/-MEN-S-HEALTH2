export default function ProgressBar({ value, max, colorClass = 'bg-accent', trackClass = 'bg-base-700', height = 'h-2' }) {
  const pct = max > 0 ? Math.min(100, Math.round((value / max) * 100)) : 0
  return (
    <div className={`w-full ${height} rounded-full ${trackClass} overflow-hidden`}>
      <div
        className={`${height} rounded-full ${colorClass} transition-all duration-500 ease-out`}
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}

const STYLES = {
  Beginner: 'text-status-green bg-status-green/12 border-status-green/30',
  Intermediate: 'text-status-blue bg-status-blue/12 border-status-blue/30',
  Advanced: 'text-status-amber bg-status-amber/12 border-status-amber/30',
}

export default function DifficultyBadge({ level }) {
  const cls = STYLES[level] || 'text-base-600 bg-base-800 border-line'
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium border ${cls}`}>
      {level}
    </span>
  )
}

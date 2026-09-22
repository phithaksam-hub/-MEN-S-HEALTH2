export default function WorkoutDayCard({ day, active, onSelect }) {
  const progress = day.exercises.length
    ? Math.round((day.exercises.filter((e) => e.done).length / day.exercises.length) * 100)
    : 0

  return (
    <button
      onClick={() => onSelect(day.day)}
      className={`shrink-0 w-[104px] sm:w-[120px] rounded-xl border p-3 text-left transition-colors ${
        active ? 'border-accent/50 bg-accent/10' : 'border-line bg-base-900 hover:border-base-600'
      } ${day.isRest ? 'opacity-70' : ''}`}
    >
      <p className="text-[11px] font-medium text-base-600">{day.day.slice(0, 3)}</p>
      <p className="font-display font-semibold text-sm mt-1 mb-2 leading-snug">{day.title}</p>
      {!day.isRest && (
        <div className="w-full h-1.5 rounded-full bg-base-700 overflow-hidden">
          <div className="h-1.5 rounded-full bg-status-green transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
      )}
    </button>
  )
}

import { Dumbbell, ChevronRight } from 'lucide-react'
import ExerciseIllustration from './ExerciseIllustration.jsx'
import DifficultyBadge from './DifficultyBadge.jsx'

export default function ExerciseCard({ exercise, onViewDetails }) {
  return (
    <div className="group rounded-xl border border-line bg-base-900 overflow-hidden shadow-card hover:border-accent/40 transition-colors animate-in flex flex-col">
      <ExerciseIllustration pattern={exercise.pattern} className="aspect-[16/10] w-full" />

      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-1">
          <div>
            <h3 className="font-display font-semibold text-sm leading-snug">{exercise.name}</h3>
            <p className="text-xs text-base-600">{exercise.thaiName}</p>
          </div>
          <DifficultyBadge level={exercise.difficulty} />
        </div>

        <div className="flex items-center gap-1.5 text-xs text-base-600 mt-2">
          <Dumbbell size={13} />
          <span>{exercise.equipment}</span>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-2">
          {exercise.targetMuscles.map((m) => (
            <span key={m} className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-base-800 border border-line text-base-600">
              {m}
            </span>
          ))}
        </div>

        <p className="text-xs text-base-600 mt-3 leading-relaxed line-clamp-2">{exercise.shortInstructions}</p>

        <button
          onClick={() => onViewDetails(exercise)}
          className="mt-4 w-full flex items-center justify-center gap-1 text-xs font-medium text-accent-light border border-accent/30 bg-accent/8 rounded-lg py-2 hover:bg-accent/16 transition-colors"
        >
          View Details
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  )
}

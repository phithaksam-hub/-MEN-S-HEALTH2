import { X, ShieldAlert, AlertTriangle, Repeat, Timer } from 'lucide-react'
import ExerciseIllustration from './ExerciseIllustration.jsx'
import DifficultyBadge from './DifficultyBadge.jsx'

export default function ExerciseModal({ exercise, onClose }) {
  if (!exercise) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full sm:max-w-2xl max-h-[92vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl border border-line bg-base-900 animate-in">
        <div className="sticky top-0 z-10 flex items-start justify-between gap-3 px-5 sm:px-6 py-4 border-b border-line bg-base-900/95 backdrop-blur">
          <div>
            <h2 className="font-display font-bold text-lg leading-tight">{exercise.name}</h2>
            <p className="text-sm text-base-600">{exercise.thaiName}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-2 rounded-lg text-base-600 hover:text-white hover:bg-base-800 shrink-0"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-5 sm:p-6 space-y-6">
          <ExerciseIllustration pattern={exercise.pattern} size="lg" className="aspect-[16/9] w-full" />

          <div className="flex flex-wrap items-center gap-2">
            <DifficultyBadge level={exercise.difficulty} />
            <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-base-800 border border-line text-base-600">
              {exercise.equipment}
            </span>
            {exercise.targetMuscles.map((m) => (
              <span key={m} className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-base-800 border border-line text-base-600">
                {m}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-lg border border-line bg-base-800 p-3 text-center">
              <Repeat size={16} className="mx-auto mb-1 text-accent-light" />
              <p className="text-sm font-semibold">{exercise.sets} sets</p>
              <p className="text-[11px] text-base-600">{exercise.reps}</p>
            </div>
            <div className="rounded-lg border border-line bg-base-800 p-3 text-center">
              <Timer size={16} className="mx-auto mb-1 text-accent-light" />
              <p className="text-sm font-semibold">{exercise.rest}</p>
              <p className="text-[11px] text-base-600">Rest time</p>
            </div>
            <div className="rounded-lg border border-line bg-base-800 p-3 text-center">
              <ShieldAlert size={16} className="mx-auto mb-1 text-status-amber" />
              <p className="text-[11px] text-base-600 leading-snug">{exercise.category}</p>
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-sm mb-2">How To Perform</h3>
            <ol className="space-y-2">
              {exercise.steps.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm text-base-600">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-accent/15 border border-accent/30 text-accent-light text-[11px] font-semibold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <div className="rounded-lg border border-status-amber/25 bg-status-amber/8 p-3">
              <div className="flex items-center gap-1.5 text-status-amber text-xs font-semibold mb-1">
                <ShieldAlert size={14} />
                Safety Tip
              </div>
              <p className="text-xs text-base-600 leading-relaxed">{exercise.safetyTip}</p>
            </div>
            <div className="rounded-lg border border-line bg-base-800 p-3">
              <div className="flex items-center gap-1.5 text-base-600 text-xs font-semibold mb-1">
                <AlertTriangle size={14} />
                Common Mistakes
              </div>
              <p className="text-xs text-base-600 leading-relaxed">{exercise.commonMistakes}</p>
            </div>
          </div>

          <p className="text-[11px] text-base-600 border-t border-line pt-4">
            ข้อมูลในเว็บไซต์มีไว้เพื่อให้ความรู้ทั่วไป ไม่ใช่คำแนะนำทางการแพทย์
          </p>
        </div>
      </div>
    </div>
  )
}

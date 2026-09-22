import { useState } from 'react'
import { CheckCircle2, Circle, Clock, Gauge } from 'lucide-react'
import { useApp } from '../store/AppContext.jsx'
import { getExerciseById } from '../data/exercises.js'
import WorkoutDayCard from '../components/WorkoutDayCard.jsx'
import DifficultyBadge from '../components/DifficultyBadge.jsx'
import ProgressBar from '../components/ProgressBar.jsx'

export default function Workout() {
  const { weekPlan, toggleExerciseDone } = useApp()
  const [selectedDay, setSelectedDay] = useState(weekPlan.find((d) => !d.isRest)?.day ?? weekPlan[0].day)

  const day = weekPlan.find((d) => d.day === selectedDay)

  const totalExercisesInWeek = weekPlan.reduce((sum, d) => sum + d.exercises.length, 0)
  const doneExercisesInWeek = weekPlan.reduce((sum, d) => sum + d.exercises.filter((e) => e.done).length, 0)
  const completedSessions = weekPlan.filter((d) => !d.isRest && d.exercises.length && d.exercises.every((e) => e.done)).length
  const totalSessions = weekPlan.filter((d) => !d.isRest).length

  const dayDoneCount = day.exercises.filter((e) => e.done).length

  return (
    <div className="space-y-6 pb-8">
      <div>
        <h1 className="font-display font-bold text-2xl sm:text-3xl tracking-tight">Workout</h1>
        <p className="text-sm text-base-600 mt-1">Weekly training schedule</p>
      </div>

      <div className="rounded-xl border border-line bg-base-900 p-5 shadow-card">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-display font-semibold text-sm">Weekly Progress</h2>
          <span className="text-sm font-medium text-status-green">{completedSessions} / {totalSessions} workouts completed</span>
        </div>
        <ProgressBar value={doneExercisesInWeek} max={totalExercisesInWeek || 1} colorClass="bg-status-green" height="h-2.5" />
      </div>

      <div className="flex gap-2.5 overflow-x-auto pb-1">
        {weekPlan.map((d) => (
          <WorkoutDayCard key={d.day} day={d} active={d.day === selectedDay} onSelect={setSelectedDay} />
        ))}
      </div>

      <div className="rounded-xl border border-line bg-base-900 p-5 shadow-card">
        <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
          <div>
            <h2 className="font-display font-semibold text-lg">{day.title}</h2>
            <p className="text-xs text-base-600">{day.day}</p>
          </div>
          {!day.isRest && (
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-xs text-base-600">
                <Clock size={13} />
                {day.duration}
              </span>
              <DifficultyBadge level={day.difficulty} />
            </div>
          )}
        </div>

        {day.isRest ? (
          <p className="text-sm text-base-600 py-8 text-center">Rest day — recovery is part of the plan.</p>
        ) : (
          <>
            <p className="text-xs text-base-600 mb-3">{dayDoneCount} / {day.exercises.length} exercises completed</p>
            <div className="space-y-2.5">
              {day.exercises.map((entry, i) => {
                const exercise = getExerciseById(entry.exId)
                if (!exercise) return null
                return (
                  <button
                    key={`${entry.exId}-${i}`}
                    onClick={() => toggleExerciseDone(day.day, i)}
                    className={`w-full flex items-center gap-3 rounded-lg border px-4 py-3 text-left transition-colors ${
                      entry.done ? 'border-status-green/30 bg-status-green/8' : 'border-line bg-base-800 hover:border-accent/30'
                    }`}
                  >
                    {entry.done ? (
                      <CheckCircle2 size={20} className="text-status-green shrink-0" />
                    ) : (
                      <Circle size={20} className="text-base-700 shrink-0" />
                    )}
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-medium ${entry.done ? 'line-through text-base-600' : ''}`}>{exercise.name}</p>
                      <p className="text-xs text-base-600">
                        {entry.sets} sets · {entry.reps} · rest {entry.rest}
                      </p>
                    </div>
                    <Gauge size={14} className="text-base-700 shrink-0" />
                  </button>
                )
              })}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

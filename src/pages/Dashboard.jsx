import { useMemo } from 'react'
import { Moon, Apple, Dumbbell, GlassWater, Sunrise, Coffee, Utensils, BedDouble, CheckCircle2, Circle } from 'lucide-react'
import StatCard from '../components/StatCard.jsx'
import { BarMini } from '../components/ChartCard.jsx'
import { useApp } from '../store/AppContext.jsx'
import { nutritionOverview } from '../data/nutrition.js'
import { sleepSchedule } from '../data/sleep.js'
import { healthTips } from '../data/healthTips.js'

const TODAY_PLAN = [
  { label: 'Breakfast', time: '07:30', icon: Coffee, status: 'done' },
  { label: 'Workout', time: '18:00', icon: Dumbbell, status: 'upcoming' },
  { label: 'Lunch', time: '12:30', icon: Utensils, status: 'done' },
  { label: 'Recovery', time: '19:00', icon: Sunrise, status: 'upcoming' },
  { label: 'Dinner', time: '19:30', icon: Utensils, status: 'upcoming' },
  { label: 'Sleep', time: '22:30', icon: BedDouble, status: 'upcoming' },
]

function todayDate() {
  return new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
}

export default function Dashboard({ onNavigate }) {
  const { weekPlan, sleepHistory, waterIntake, profile } = useApp()

  const todaysWorkout = weekPlan[0]
  const completedSessions = weekPlan.filter((d) => !d.isRest && d.exercises.length && d.exercises.every((e) => e.done)).length
  const totalSessions = weekPlan.filter((d) => !d.isRest).length

  const tipOfTheDay = useMemo(() => {
    const idx = new Date().getDate() % healthTips.length
    return healthTips[idx]
  }, [])

  const weeklyActivityData = sleepHistory.map((d) => ({ label: d.day, value: Math.round(d.hours * 10) / 10 }))

  return (
    <div className="space-y-6 pb-8">
      <div>
        <p className="text-sm text-base-600">{todayDate()}</p>
        <h1 className="font-display font-bold text-2xl sm:text-3xl tracking-tight mt-1">
          Good Morning, {profile.name.split(' ')[0]}
        </h1>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <StatCard
          label="Sleep"
          value={`${Math.floor(sleepHistory[sleepHistory.length - 1].hours)}h ${Math.round(
            (sleepHistory[sleepHistory.length - 1].hours % 1) * 60
          )}m`}
          sub="Last night"
          icon={Moon}
          accent="accent"
        />
        <StatCard
          label="Nutrition"
          value={`${Math.round((nutritionOverview.calories.current / nutritionOverview.calories.target) * 100)}%`}
          sub={`${nutritionOverview.calories.current} / ${nutritionOverview.calories.target} kcal`}
          icon={Apple}
          accent="green"
        />
        <StatCard
          label="Workout"
          value={`${completedSessions} / ${totalSessions}`}
          sub="sessions this week"
          icon={Dumbbell}
          accent="blue"
        />
        <StatCard label="Water" value={waterIntake} unit={`/ ${nutritionOverview.water.target} L`} icon={GlassWater} accent="amber" />
      </div>

      <div className="grid lg:grid-cols-5 gap-4 sm:gap-6">
        <div className="lg:col-span-3 rounded-xl border border-line bg-base-900 p-5 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display font-semibold text-base">Today's Plan</h2>
            <button onClick={() => onNavigate('workout')} className="text-xs font-medium text-accent-light">
              View workout →
            </button>
          </div>
          <div className="space-y-1">
            {TODAY_PLAN.map(({ label, time, icon: Icon, status }) => (
              <div key={label} className="flex items-center gap-3 py-2.5 border-b border-line last:border-b-0">
                <div className="w-8 h-8 rounded-lg bg-base-800 border border-line flex items-center justify-center shrink-0">
                  <Icon size={15} className="text-base-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">{label}</p>
                  <p className="text-xs text-base-600">{time}</p>
                </div>
                {status === 'done' ? (
                  <CheckCircle2 size={17} className="text-status-green shrink-0" />
                ) : (
                  <Circle size={17} className="text-base-700 shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 rounded-xl border border-line bg-base-900 p-5 shadow-card">
          <h2 className="font-display font-semibold text-base mb-4">Weekly Activity</h2>
          <BarMini data={weeklyActivityData} unit="h" colorClass="bg-accent" />
          <p className="text-xs text-base-600 mt-4">Sleep hours over the last 7 days.</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="lg:col-span-2 rounded-xl border border-line bg-base-900 p-5 shadow-card">
          <h2 className="font-display font-semibold text-base mb-3">
            {todaysWorkout.isRest ? 'Rest Day' : `Today's Workout — ${todaysWorkout.title}`}
          </h2>
          {todaysWorkout.isRest ? (
            <p className="text-sm text-base-600">No scheduled training today. Consider light stretching or a walk.</p>
          ) : (
            <button
              onClick={() => onNavigate('workout')}
              className="w-full flex items-center justify-between rounded-lg border border-line bg-base-800 px-4 py-3 hover:border-accent/40 transition-colors"
            >
              <div className="text-left">
                <p className="text-sm font-medium">{todaysWorkout.exercises.length} exercises · {todaysWorkout.duration}</p>
                <p className="text-xs text-base-600">Difficulty: {todaysWorkout.difficulty}</p>
              </div>
              <span className="text-xs font-medium text-accent-light">Start →</span>
            </button>
          )}
        </div>

        <div className="rounded-xl border border-accent/25 bg-gradient-to-br from-accent/10 to-transparent p-5 shadow-card">
          <h2 className="font-display font-semibold text-base mb-2">Health Tip of the Day</h2>
          <p className="text-xs font-medium text-accent-light mb-1">{tipOfTheDay.category}</p>
          <p className="text-sm font-medium mb-1.5">{tipOfTheDay.title}</p>
          <p className="text-xs text-base-600 leading-relaxed">{tipOfTheDay.shortDescription}</p>
        </div>
      </div>
    </div>
  )
}

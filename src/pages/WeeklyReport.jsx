import { useApp } from '../store/AppContext.jsx'
import { nutritionOverview } from '../data/nutrition.js'
import { BarMini, LineMini } from '../components/ChartCard.jsx'
import StatCard from '../components/StatCard.jsx'
import { Dumbbell, Moon, Apple, GlassWater } from 'lucide-react'

export default function WeeklyReport() {
  const { weekPlan, sleepHistory, meals, waterIntake } = useApp()

  const completedSessions = weekPlan.filter((d) => !d.isRest && d.exercises.length && d.exercises.every((e) => e.done)).length
  const totalSessions = weekPlan.filter((d) => !d.isRest).length
  const avgSleep = sleepHistory.reduce((s, d) => s + d.hours, 0) / sleepHistory.length
  const avgSleepStr = `${Math.floor(avgSleep)}h ${Math.round((avgSleep % 1) * 60)}m`

  const totalCalories = meals.reduce((s, m) => s + m.calories, 0)
  const nutritionPct = Math.round((totalCalories / nutritionOverview.calories.target) * 100)

  const workoutActivityData = weekPlan.map((d) => ({
    label: d.day.slice(0, 3),
    value: d.exercises.length ? d.exercises.filter((e) => e.done).length : 0,
  }))

  return (
    <div className="space-y-6 pb-8">
      <div>
        <h1 className="font-display font-bold text-2xl sm:text-3xl tracking-tight">Weekly Report</h1>
        <p className="text-sm text-base-600 mt-1">A summary of the last 7 days</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <StatCard label="Workout" value={`${completedSessions} / ${totalSessions}`} sub="completed" icon={Dumbbell} accent="blue" />
        <StatCard label="Average Sleep" value={avgSleepStr} icon={Moon} accent="accent" />
        <StatCard label="Nutrition" value={`${nutritionPct}%`} sub="of calorie target" icon={Apple} accent="green" />
        <StatCard label="Water" value={`${waterIntake} L`} sub="today's log" icon={GlassWater} accent="amber" />
      </div>

      <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
        <div className="rounded-xl border border-line bg-base-900 p-5 shadow-card">
          <h2 className="font-display font-semibold text-base mb-4">Workout Activity</h2>
          <BarMini data={workoutActivityData} colorClass="bg-status-blue" />
          <p className="text-xs text-base-600 mt-4">Exercises completed per day.</p>
        </div>
        <div className="rounded-xl border border-line bg-base-900 p-5 shadow-card">
          <h2 className="font-display font-semibold text-base mb-4">Sleep Duration</h2>
          <LineMini data={sleepHistory.map((d) => ({ label: d.day, value: d.hours }))} />
        </div>
      </div>

      <div className="rounded-xl border border-line bg-base-900 p-5 shadow-card">
        <h2 className="font-display font-semibold text-base mb-3">Weekly Summary</h2>
        <div className="space-y-2 text-sm text-base-600 leading-relaxed">
          <p>
            You completed {completedSessions} of {totalSessions} planned workout sessions this week, averaging {avgSleepStr} of sleep
            per night.
          </p>
          <p>
            Nutrition logging covered about {nutritionPct}% of your daily calorie target based on meals recorded today. Keep logging
            consistently to get a clearer weekly picture.
          </p>
          <p>Small, steady progress across training, sleep, and nutrition adds up — keep the routine going into next week.</p>
        </div>
        <p className="text-[11px] text-base-600 border-t border-line pt-4 mt-4">
          ข้อมูลในเว็บไซต์มีไว้เพื่อให้ความรู้ทั่วไป ไม่ใช่คำแนะนำทางการแพทย์
        </p>
      </div>
    </div>
  )
}

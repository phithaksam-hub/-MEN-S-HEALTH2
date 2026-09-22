import { useState } from 'react'
import { Moon, Sunrise, BedDouble, TrendingUp } from 'lucide-react'
import { useApp } from '../store/AppContext.jsx'
import { sleepTarget, sleepTips } from '../data/sleep.js'
import { LineMini } from '../components/ChartCard.jsx'
import StatCard from '../components/StatCard.jsx'

function average(arr) {
  return arr.reduce((s, v) => s + v, 0) / arr.length
}

function formatHours(h) {
  const hrs = Math.floor(h)
  const mins = Math.round((h % 1) * 60)
  return `${hrs}h ${mins}m`
}

export default function Sleep() {
  const { sleepHistory, sleepSchedule, updateSleepEntry } = useApp()
  const [selectedDay, setSelectedDay] = useState(sleepHistory[sleepHistory.length - 1].day)

  const entry = sleepHistory.find((d) => d.day === selectedDay)
  const avgSleep = average(sleepHistory.map((d) => d.hours))
  const consistency = Math.max(
    0,
    100 - Math.round((Math.max(...sleepHistory.map((d) => d.hours)) - Math.min(...sleepHistory.map((d) => d.hours))) * 20)
  )

  function handleLog(value) {
    const num = Number(value)
    if (Number.isNaN(num) || num < 0 || num > 14) return
    updateSleepEntry(selectedDay, num)
  }

  return (
    <div className="space-y-6 pb-8">
      <div>
        <h1 className="font-display font-bold text-2xl sm:text-3xl tracking-tight">Sleep</h1>
        <p className="text-sm text-base-600 mt-1">Track your rest and recovery</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <StatCard label="Target Sleep" value={formatHours(sleepTarget.hours + sleepTarget.minutes / 60)} icon={Moon} accent="accent" />
        <StatCard label="Actual (avg)" value={formatHours(avgSleep)} icon={BedDouble} accent="blue" />
        <StatCard label="Bedtime" value={sleepSchedule.bedtime} icon={Moon} accent="amber" />
        <StatCard label="Wake-up" value={sleepSchedule.wakeup} icon={Sunrise} accent="green" />
      </div>

      <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="lg:col-span-2 rounded-xl border border-line bg-base-900 p-5 shadow-card">
          <h2 className="font-display font-semibold text-base mb-4">Sleep History — Last 7 Days</h2>
          <LineMini data={sleepHistory.map((d) => ({ label: d.day, value: d.hours }))} />
        </div>

        <div className="rounded-xl border border-line bg-base-900 p-5 shadow-card flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp size={16} className="text-status-green" />
            <h2 className="font-display font-semibold text-sm">Sleep Consistency</h2>
          </div>
          <div className="flex items-end gap-2 mb-2">
            <span className="font-display font-bold text-3xl">{consistency}%</span>
          </div>
          <p className="text-xs text-base-600">Based on how much your nightly sleep duration varies this week.</p>
        </div>
      </div>

      <div className="rounded-xl border border-line bg-base-900 p-5 shadow-card">
        <h2 className="font-display font-semibold text-base mb-4">Log Sleep</h2>
        <div className="flex gap-2 overflow-x-auto pb-1 mb-4">
          {sleepHistory.map((d) => (
            <button
              key={d.day}
              onClick={() => setSelectedDay(d.day)}
              className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                selectedDay === d.day ? 'bg-accent/15 border-accent/40 text-accent-light' : 'border-line text-base-600 hover:text-white'
              }`}
            >
              {d.day}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <p className="text-sm text-base-600 w-32">
            {selectedDay}: <span className="text-white font-medium">{formatHours(entry.hours)}</span>
          </p>
          <input
            type="range"
            min="0"
            max="12"
            step="0.25"
            value={entry.hours}
            onChange={(e) => handleLog(e.target.value)}
            className="flex-1 accent-accent"
          />
        </div>
      </div>

      <div className="rounded-xl border border-line bg-base-900 p-5 shadow-card">
        <h2 className="font-display font-semibold text-base mb-3">Sleep Tips</h2>
        <ul className="space-y-2">
          {sleepTips.map((tip, i) => (
            <li key={i} className="flex gap-2.5 text-sm text-base-600">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-light mt-2 shrink-0" />
              {tip}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

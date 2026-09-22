import { useState } from 'react'
import { User, Bell, Moon, Save } from 'lucide-react'
import { useApp } from '../store/AppContext.jsx'

const GOALS = ['Lose Weight', 'Build Muscle', 'Improve Endurance', 'Maintain Health']

export default function Settings() {
  const { profile, updateProfile, settings, updateSettings } = useApp()
  const [form, setForm] = useState(profile)
  const [saved, setSaved] = useState(false)

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
    setSaved(false)
  }

  function handleSave(e) {
    e.preventDefault()
    updateProfile({
      name: form.name,
      age: Number(form.age) || form.age,
      height: Number(form.height) || form.height,
      weight: Number(form.weight) || form.weight,
      goal: form.goal,
    })
    setSaved(true)
  }

  return (
    <div className="space-y-6 pb-8 max-w-2xl">
      <div>
        <h1 className="font-display font-bold text-2xl sm:text-3xl tracking-tight">Settings</h1>
        <p className="text-sm text-base-600 mt-1">Manage your profile and preferences</p>
      </div>

      <form onSubmit={handleSave} className="rounded-xl border border-line bg-base-900 p-5 shadow-card space-y-4">
        <div className="flex items-center gap-2 mb-1">
          <User size={16} className="text-accent-light" />
          <h2 className="font-display font-semibold text-base">Profile</h2>
        </div>

        <div>
          <label className="block text-xs font-medium text-base-600 mb-1.5">Name</label>
          <input
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            className="w-full rounded-lg bg-base-800 border border-line px-3 py-2 text-sm outline-none focus:border-accent/50"
          />
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className="block text-xs font-medium text-base-600 mb-1.5">Age</label>
            <input
              type="number"
              min="0"
              value={form.age}
              onChange={(e) => update('age', e.target.value)}
              className="w-full rounded-lg bg-base-800 border border-line px-3 py-2 text-sm outline-none focus:border-accent/50"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-base-600 mb-1.5">Height (cm)</label>
            <input
              type="number"
              min="0"
              value={form.height}
              onChange={(e) => update('height', e.target.value)}
              className="w-full rounded-lg bg-base-800 border border-line px-3 py-2 text-sm outline-none focus:border-accent/50"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-base-600 mb-1.5">Weight (kg)</label>
            <input
              type="number"
              min="0"
              value={form.weight}
              onChange={(e) => update('weight', e.target.value)}
              className="w-full rounded-lg bg-base-800 border border-line px-3 py-2 text-sm outline-none focus:border-accent/50"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-base-600 mb-1.5">Goal</label>
          <div className="grid grid-cols-2 gap-2">
            {GOALS.map((g) => (
              <button
                type="button"
                key={g}
                onClick={() => update('goal', g)}
                className={`py-2 rounded-lg text-xs font-medium border transition-colors ${
                  form.goal === g ? 'bg-accent/15 border-accent/40 text-accent-light' : 'border-line text-base-600 hover:text-white'
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 mt-2 rounded-lg bg-accent hover:bg-accent-light text-white text-sm font-semibold py-2.5 transition-colors"
        >
          <Save size={15} />
          {saved ? 'Saved' : 'Save Changes'}
        </button>
      </form>

      <div className="rounded-xl border border-line bg-base-900 p-5 shadow-card space-y-4">
        <h2 className="font-display font-semibold text-base">Preferences</h2>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Moon size={16} className="text-accent-light" />
            <div>
              <p className="text-sm font-medium">Dark Mode</p>
              <p className="text-xs text-base-600">VERTEX is designed dark-first</p>
            </div>
          </div>
          <button
            onClick={() => updateSettings({ darkMode: !settings.darkMode })}
            className={`w-11 h-6 rounded-full relative transition-colors ${settings.darkMode ? 'bg-accent' : 'bg-base-700'}`}
          >
            <span
              className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all ${
                settings.darkMode ? 'left-[22px]' : 'left-0.5'
              }`}
            />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Bell size={16} className="text-accent-light" />
            <div>
              <p className="text-sm font-medium">Notifications</p>
              <p className="text-xs text-base-600">Reminders for workouts and meals</p>
            </div>
          </div>
          <button
            onClick={() => updateSettings({ notifications: !settings.notifications })}
            className={`w-11 h-6 rounded-full relative transition-colors ${settings.notifications ? 'bg-accent' : 'bg-base-700'}`}
          >
            <span
              className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all ${
                settings.notifications ? 'left-[22px]' : 'left-0.5'
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  )
}

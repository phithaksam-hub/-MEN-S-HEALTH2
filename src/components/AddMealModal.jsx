import { useState } from 'react'
import { X } from 'lucide-react'
import { mealTypes } from '../data/nutrition.js'

const empty = { type: 'Breakfast', time: '', name: '', calories: '', protein: '', carbs: '', fat: '' }

export default function AddMealModal({ onClose, onAdd }) {
  const [form, setForm] = useState(empty)

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.name.trim() || !form.time) return
    onAdd({
      id: `meal-${Date.now()}`,
      type: form.type,
      time: form.time,
      name: form.name.trim(),
      calories: Number(form.calories) || 0,
      protein: Number(form.protein) || 0,
      carbs: Number(form.carbs) || 0,
      fat: Number(form.fat) || 0,
    })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <form
        onSubmit={handleSubmit}
        className="relative w-full sm:max-w-md max-h-[92vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl border border-line bg-base-900 animate-in"
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-line">
          <h2 className="font-display font-semibold text-base">Add Meal</h2>
          <button type="button" onClick={onClose} className="p-2 rounded-lg text-base-600 hover:text-white hover:bg-base-800">
            <X size={20} />
          </button>
        </div>

        <div className="p-5 space-y-4">
          <div>
            <label className="block text-xs font-medium text-base-600 mb-1.5">Meal Type</label>
            <div className="grid grid-cols-4 gap-2">
              {mealTypes.map((t) => (
                <button
                  type="button"
                  key={t}
                  onClick={() => update('type', t)}
                  className={`py-1.5 rounded-lg text-[11px] font-medium border transition-colors ${
                    form.type === t ? 'bg-accent/15 border-accent/40 text-accent-light' : 'border-line text-base-600 hover:text-white'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-base-600 mb-1.5">Meal Name</label>
            <input
              required
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
              placeholder="e.g. Grilled chicken salad"
              className="w-full rounded-lg bg-base-800 border border-line px-3 py-2 text-sm outline-none focus:border-accent/50"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-base-600 mb-1.5">Time</label>
            <input
              required
              type="time"
              value={form.time}
              onChange={(e) => update('time', e.target.value)}
              className="w-full rounded-lg bg-base-800 border border-line px-3 py-2 text-sm outline-none focus:border-accent/50"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-base-600 mb-1.5">Calories (kcal)</label>
              <input
                type="number"
                min="0"
                value={form.calories}
                onChange={(e) => update('calories', e.target.value)}
                className="w-full rounded-lg bg-base-800 border border-line px-3 py-2 text-sm outline-none focus:border-accent/50"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-base-600 mb-1.5">Protein (g)</label>
              <input
                type="number"
                min="0"
                value={form.protein}
                onChange={(e) => update('protein', e.target.value)}
                className="w-full rounded-lg bg-base-800 border border-line px-3 py-2 text-sm outline-none focus:border-accent/50"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-base-600 mb-1.5">Carbs (g)</label>
              <input
                type="number"
                min="0"
                value={form.carbs}
                onChange={(e) => update('carbs', e.target.value)}
                className="w-full rounded-lg bg-base-800 border border-line px-3 py-2 text-sm outline-none focus:border-accent/50"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-base-600 mb-1.5">Fat (g)</label>
              <input
                type="number"
                min="0"
                value={form.fat}
                onChange={(e) => update('fat', e.target.value)}
                className="w-full rounded-lg bg-base-800 border border-line px-3 py-2 text-sm outline-none focus:border-accent/50"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-3 px-5 py-4 border-t border-line">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-2.5 rounded-lg text-sm font-medium border border-line text-base-600 hover:text-white"
          >
            Cancel
          </button>
          <button type="submit" className="flex-1 py-2.5 rounded-lg text-sm font-semibold bg-accent hover:bg-accent-light text-white transition-colors">
            Add Meal
          </button>
        </div>
      </form>
    </div>
  )
}

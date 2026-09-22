import { Clock, Flame } from 'lucide-react'

const TYPE_STYLE = {
  Breakfast: 'text-status-green bg-status-green/12 border-status-green/25',
  Lunch: 'text-status-blue bg-status-blue/12 border-status-blue/25',
  Dinner: 'text-accent-light bg-accent/12 border-accent/25',
  Snack: 'text-status-amber bg-status-amber/12 border-status-amber/25',
}

export default function MealCard({ meal }) {
  return (
    <div className="rounded-xl border border-line bg-base-900 p-4 shadow-card animate-in">
      <div className="flex items-start justify-between gap-2 mb-2">
        <span className={`px-2 py-0.5 rounded-full text-[11px] font-medium border ${TYPE_STYLE[meal.type] || 'text-base-600 bg-base-800 border-line'}`}>
          {meal.type}
        </span>
        <span className="flex items-center gap-1 text-xs text-base-600">
          <Clock size={12} />
          {meal.time}
        </span>
      </div>
      <h4 className="font-display font-semibold text-sm mb-2">{meal.name}</h4>
      <div className="flex items-center gap-1 text-xs text-base-600 mb-2">
        <Flame size={13} className="text-status-amber" />
        <span className="font-medium text-white">{meal.calories}</span> kcal
      </div>
      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="rounded-md bg-base-800 py-1.5">
          <p className="text-xs font-semibold">{meal.protein}g</p>
          <p className="text-[10px] text-base-600">Protein</p>
        </div>
        <div className="rounded-md bg-base-800 py-1.5">
          <p className="text-xs font-semibold">{meal.carbs}g</p>
          <p className="text-[10px] text-base-600">Carbs</p>
        </div>
        <div className="rounded-md bg-base-800 py-1.5">
          <p className="text-xs font-semibold">{meal.fat}g</p>
          <p className="text-[10px] text-base-600">Fat</p>
        </div>
      </div>
    </div>
  )
}

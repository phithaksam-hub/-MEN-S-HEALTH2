import { useMemo, useState } from 'react'
import { Plus, GlassWater } from 'lucide-react'
import { useApp } from '../store/AppContext.jsx'
import { nutritionOverview, nutritionTips, mealTypes } from '../data/nutrition.js'
import ProgressBar from '../components/ProgressBar.jsx'
import MealCard from '../components/MealCard.jsx'
import AddMealModal from '../components/AddMealModal.jsx'

const OVERVIEW_ROWS = [
  { key: 'calories', label: 'Calories', color: 'bg-accent' },
  { key: 'protein', label: 'Protein', color: 'bg-status-green' },
  { key: 'carbs', label: 'Carbohydrates', color: 'bg-status-blue' },
  { key: 'fat', label: 'Fat', color: 'bg-status-amber' },
]

export default function Nutrition() {
  const { meals, addMeal, waterIntake, addWater } = useApp()
  const [modalOpen, setModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('All')

  const totals = useMemo(() => {
    const sum = { calories: 0, protein: 0, carbs: 0, fat: 0 }
    meals.forEach((m) => {
      sum.calories += m.calories
      sum.protein += m.protein
      sum.carbs += m.carbs
      sum.fat += m.fat
    })
    return sum
  }, [meals])

  const filteredMeals = activeTab === 'All' ? meals : meals.filter((m) => m.type === activeTab)

  return (
    <div className="space-y-6 pb-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl sm:text-3xl tracking-tight">Nutrition</h1>
          <p className="text-sm text-base-600 mt-1">Daily overview and meal schedule</p>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="flex items-center gap-1.5 text-sm font-medium bg-accent hover:bg-accent-light text-white rounded-lg px-4 py-2.5 transition-colors shrink-0"
        >
          <Plus size={16} />
          Add Meal
        </button>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-xl border border-line bg-base-900 p-5 shadow-card space-y-4">
          {OVERVIEW_ROWS.map(({ key, label, color }) => (
            <div key={key}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-medium text-base-600">{label}</span>
                <span className="text-xs font-medium">
                  {totals[key]} / {nutritionOverview[key].target} {nutritionOverview[key].unit}
                </span>
              </div>
              <ProgressBar value={totals[key]} max={nutritionOverview[key].target} colorClass={color} />
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-line bg-base-900 p-5 shadow-card flex flex-col">
          <div className="flex items-center justify-between mb-1.5">
            <span className="flex items-center gap-1.5 text-xs font-medium text-base-600">
              <GlassWater size={14} className="text-accent-light" />
              Water
            </span>
            <span className="text-xs font-medium">
              {waterIntake} / {nutritionOverview.water.target} L
            </span>
          </div>
          <ProgressBar value={waterIntake} max={nutritionOverview.water.target} colorClass="bg-accent" height="h-2.5" />
          <div className="flex gap-2 mt-4">
            {[0.25, 0.5, 1].map((amt) => (
              <button
                key={amt}
                onClick={() => addWater(amt)}
                className="flex-1 rounded-lg border border-line bg-base-800 text-xs font-medium py-2 hover:border-accent/40 hover:text-accent-light transition-colors"
              >
                +{amt}L
              </button>
            ))}
          </div>
          <p className="text-xs text-base-600 mt-auto pt-4">Tap a button to log water intake for today.</p>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-1">
          {['All', ...mealTypes].map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                activeTab === t ? 'bg-accent/15 border-accent/40 text-accent-light' : 'border-line text-base-600 hover:text-white'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {filteredMeals.length === 0 ? (
          <p className="text-sm text-base-600 py-8 text-center">No meals logged for this category yet.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredMeals.map((meal) => (
              <MealCard key={meal.id} meal={meal} />
            ))}
          </div>
        )}
      </div>

      <div className="rounded-xl border border-line bg-base-900 p-5 shadow-card">
        <h2 className="font-display font-semibold text-base mb-3">Nutrition Tips</h2>
        <ul className="space-y-2">
          {nutritionTips.map((tip, i) => (
            <li key={i} className="flex gap-2.5 text-sm text-base-600">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-light mt-2 shrink-0" />
              {tip}
            </li>
          ))}
        </ul>
        <p className="text-[11px] text-base-600 border-t border-line pt-4 mt-4">
          ข้อมูลในเว็บไซต์มีไว้เพื่อให้ความรู้ทั่วไป ไม่ใช่คำแนะนำทางการแพทย์
        </p>
      </div>

      {modalOpen && (
        <AddMealModal
          onClose={() => setModalOpen(false)}
          onAdd={(meal) => {
            addMeal(meal)
            setModalOpen(false)
          }}
        />
      )}
    </div>
  )
}

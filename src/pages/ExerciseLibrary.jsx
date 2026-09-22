import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { exercises, CATEGORIES } from '../data/exercises.js'
import ExerciseCard from '../components/ExerciseCard.jsx'
import ExerciseModal from '../components/ExerciseModal.jsx'

export default function ExerciseLibrary() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [query, setQuery] = useState('')
  const [selectedExercise, setSelectedExercise] = useState(null)

  const filtered = useMemo(() => {
    return exercises.filter((ex) => {
      const matchesCategory = activeCategory === 'All' || ex.category === activeCategory
      const q = query.trim().toLowerCase()
      const matchesQuery =
        !q || ex.name.toLowerCase().includes(q) || ex.thaiName.includes(q) || ex.targetMuscles.some((m) => m.toLowerCase().includes(q))
      return matchesCategory && matchesQuery
    })
  }, [activeCategory, query])

  return (
    <div className="space-y-6 pb-8">
      <div>
        <h1 className="font-display font-bold text-2xl sm:text-3xl tracking-tight">Exercise Library</h1>
        <p className="text-sm text-base-600 mt-1">คลังท่าออกกำลังกาย พร้อมภาพประกอบ วิธีทำ และข้อมูลสำคัญ</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <div className="flex gap-2 overflow-x-auto pb-1">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                activeCategory === c ? 'bg-accent/15 border-accent/40 text-accent-light' : 'border-line text-base-600 hover:text-white'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="relative sm:w-64 shrink-0">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-base-600" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search exercises..."
            className="w-full rounded-lg bg-base-900 border border-line pl-9 pr-3 py-2 text-sm outline-none focus:border-accent/50"
          />
        </div>
      </div>

      <p className="text-xs text-base-600">{filtered.length} exercises</p>

      {filtered.length === 0 ? (
        <p className="text-sm text-base-600 py-12 text-center">No exercises match your search or filter.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((ex) => (
            <ExerciseCard key={ex.id} exercise={ex} onViewDetails={setSelectedExercise} />
          ))}
        </div>
      )}

      <ExerciseModal exercise={selectedExercise} onClose={() => setSelectedExercise(null)} />
    </div>
  )
}

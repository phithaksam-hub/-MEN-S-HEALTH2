import { useState } from 'react'
import { tipCategories, healthTips } from '../data/healthTips.js'
import TipCard from '../components/TipCard.jsx'
import TipModal from '../components/TipModal.jsx'

export default function HealthTips() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedTip, setSelectedTip] = useState(null)

  const filtered = activeCategory === 'All' ? healthTips : healthTips.filter((t) => t.category === activeCategory)

  return (
    <div className="space-y-6 pb-8">
      <div>
        <h1 className="font-display font-bold text-2xl sm:text-3xl tracking-tight">Health Tips</h1>
        <p className="text-sm text-base-600 mt-1">General guidance across nutrition, sleep, exercise, and recovery</p>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1">
        {['All', ...tipCategories].map((c) => (
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

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((tip) => (
          <TipCard key={tip.id} tip={tip} onReadMore={setSelectedTip} />
        ))}
      </div>

      <TipModal tip={selectedTip} onClose={() => setSelectedTip(null)} />
    </div>
  )
}

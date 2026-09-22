import * as Icons from 'lucide-react'

export default function TipCard({ tip, onReadMore }) {
  const Icon = Icons[tip.icon] || Icons.Lightbulb
  return (
    <button
      onClick={() => onReadMore(tip)}
      className="text-left rounded-xl border border-line bg-base-900 p-4 shadow-card hover:border-accent/40 transition-colors animate-in flex flex-col"
    >
      <div className="w-9 h-9 rounded-lg bg-accent/12 border border-accent/25 flex items-center justify-center mb-3">
        <Icon size={17} className="text-accent-light" strokeWidth={2} />
      </div>
      <span className="text-[11px] font-medium text-base-600 mb-1">{tip.category}</span>
      <h3 className="font-display font-semibold text-sm mb-1.5 leading-snug">{tip.title}</h3>
      <p className="text-xs text-base-600 leading-relaxed flex-1">{tip.shortDescription}</p>
      <span className="text-xs font-medium text-accent-light mt-3">Read More →</span>
    </button>
  )
}

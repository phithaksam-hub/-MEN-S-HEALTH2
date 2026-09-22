import { X } from 'lucide-react'
import * as Icons from 'lucide-react'

export default function TipModal({ tip, onClose }) {
  if (!tip) return null
  const Icon = Icons[tip.icon] || Icons.Lightbulb

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full sm:max-w-md rounded-t-2xl sm:rounded-2xl border border-line bg-base-900 animate-in">
        <div className="flex items-center justify-between px-5 py-4 border-b border-line">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-accent/12 border border-accent/25 flex items-center justify-center">
              <Icon size={17} className="text-accent-light" />
            </div>
            <div>
              <p className="text-[11px] text-base-600">{tip.category}</p>
              <h2 className="font-display font-semibold text-sm">{tip.title}</h2>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg text-base-600 hover:text-white hover:bg-base-800">
            <X size={20} />
          </button>
        </div>
        <div className="p-5">
          <p className="text-sm text-base-600 leading-relaxed">{tip.fullDescription}</p>
          <p className="text-[11px] text-base-600 border-t border-line pt-4 mt-5">
            ข้อมูลในเว็บไซต์มีไว้เพื่อให้ความรู้ทั่วไป ไม่ใช่คำแนะนำทางการแพทย์
          </p>
        </div>
      </div>
    </div>
  )
}

// Lightweight CSS/SVG chart building blocks — no external chart library.

export function BarMini({ data, valueKey = 'value', labelKey = 'label', max, colorClass = 'bg-accent', unit = '' }) {
  const maxVal = max ?? Math.max(...data.map((d) => d[valueKey]), 1)
  return (
    <div className="flex items-end gap-2 sm:gap-3 h-36">
      {data.map((d, i) => {
        const h = Math.max(6, Math.round((d[valueKey] / maxVal) * 100))
        return (
          <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
            <span className="text-[10px] text-base-600">{d[valueKey]}{unit}</span>
            <div className="w-full max-w-[26px] rounded-t-md bg-base-800 relative overflow-hidden" style={{ height: '100%' }}>
              <div
                className={`absolute bottom-0 left-0 right-0 rounded-t-md ${colorClass} transition-all duration-500`}
                style={{ height: `${h}%` }}
              />
            </div>
            <span className="text-[10px] text-base-600">{d[labelKey]}</span>
          </div>
        )
      })}
    </div>
  )
}

export function LineMini({ data, valueKey = 'value', labelKey = 'label', color = '#5B8DF6' }) {
  const values = data.map((d) => d[valueKey])
  const max = Math.max(...values)
  const min = Math.min(...values)
  const range = max - min || 1
  const w = 100
  const h = 40
  const step = w / (data.length - 1 || 1)

  const points = values.map((v, i) => {
    const x = i * step
    const y = h - ((v - min) / range) * h
    return `${x},${y}`
  })

  return (
    <div>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-24" preserveAspectRatio="none">
        <polyline points={points.join(' ')} fill="none" stroke={color} strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        {values.map((v, i) => {
          const x = i * step
          const y = h - ((v - min) / range) * h
          return <circle key={i} cx={x} cy={y} r="1.6" fill={color} />
        })}
      </svg>
      <div className="flex justify-between mt-1">
        {data.map((d, i) => (
          <span key={i} className="text-[10px] text-base-600">
            {d[labelKey]}
          </span>
        ))}
      </div>
    </div>
  )
}

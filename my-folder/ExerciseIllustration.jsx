// Consistent, generated vector illustrations for the Exercise Library.
// Each "pattern" maps to a simplified human figure shown in a start and
// movement position, connected by a directional arrow, on a dark card
// background with a blue highlight — matching the site's visual language.
// Illustrations are pure SVG (no external images) so every card renders
// the same style without needing raster assets.

function Stickman({ x = 0, pose = 'stand', color = '#5B8DF6', opacity = 1 }) {
  // Poses are hand-tuned simple stick figures (head + torso + limbs)
  const poses = {
    stand: {
      head: [x, 18],
      torso: [
        [x, 25],
        [x, 55],
      ],
      arms: [
        [x, 32, x - 14, 44],
        [x, 32, x + 14, 44],
      ],
      legs: [
        [x, 55, x - 10, 82],
        [x, 55, x + 10, 82],
      ],
    },
    squatDown: {
      head: [x, 30],
      torso: [
        [x, 37],
        [x, 58],
      ],
      arms: [
        [x, 42, x - 16, 36],
        [x, 42, x + 16, 36],
      ],
      legs: [
        [x, 58, x - 18, 68],
        [x - 18, 68, x - 14, 84],
        [x, 58, x + 18, 68],
        [x + 18, 68, x + 14, 84],
      ],
    },
    lunge: {
      head: [x, 22],
      torso: [
        [x, 29],
        [x + 2, 55],
      ],
      arms: [
        [x + 2, 34, x - 12, 46],
        [x + 2, 34, x + 14, 44],
      ],
      legs: [
        [x + 2, 55, x - 16, 84],
        [x + 2, 55, x + 22, 70],
        [x + 22, 70, x + 20, 84],
      ],
    },
    pressUp: {
      head: [x, 14],
      torso: [
        [x, 21],
        [x, 52],
      ],
      arms: [
        [x, 26, x - 18, 20],
        [x, 26, x + 18, 20],
      ],
      legs: [
        [x, 52, x - 9, 82],
        [x, 52, x + 9, 82],
      ],
    },
    pressDown: {
      head: [x, 24],
      torso: [
        [x, 31],
        [x, 55],
      ],
      arms: [
        [x, 34, x - 16, 34],
        [x, 34, x + 16, 34],
      ],
      legs: [
        [x, 55, x - 9, 82],
        [x, 55, x + 9, 82],
      ],
    },
    pullDown: {
      head: [x, 26],
      torso: [
        [x, 33],
        [x, 56],
      ],
      arms: [
        [x, 36, x - 16, 16],
        [x, 36, x + 16, 16],
      ],
      legs: [
        [x, 56, x - 9, 82],
        [x, 56, x + 9, 82],
      ],
    },
    pullUp: {
      head: [x, 14],
      torso: [
        [x, 21],
        [x, 46],
      ],
      arms: [
        [x, 22, x - 15, 14],
        [x, 22, x + 15, 14],
      ],
      legs: [
        [x, 46, x - 8, 74],
        [x, 46, x + 8, 74],
      ],
    },
    hingeUp: {
      head: [x, 18],
      torso: [
        [x, 25],
        [x, 54],
      ],
      arms: [
        [x, 32, x - 12, 46],
        [x, 32, x + 12, 46],
      ],
      legs: [
        [x, 54, x - 10, 82],
        [x, 54, x + 10, 82],
      ],
    },
    hingeDown: {
      head: [x - 20, 40],
      torso: [
        [x - 20, 44],
        [x + 6, 58],
      ],
      arms: [
        [x - 10, 48, x - 4, 66],
        [x - 10, 48, x - 16, 64],
      ],
      legs: [
        [x + 6, 58, x - 2, 84],
        [x + 6, 58, x + 14, 84],
      ],
    },
    hold: {
      head: [x - 26, 40],
      torso: [
        [x - 26, 44],
        [x + 14, 44],
      ],
      arms: [
        [x - 22, 44, x - 22, 60],
        [x - 22, 44, x - 22, 60],
      ],
      legs: [
        [x + 14, 44, x + 32, 44],
        [x + 14, 44, x + 32, 44],
      ],
    },
    twist: {
      head: [x, 26],
      torso: [
        [x, 33],
        [x, 56],
      ],
      arms: [
        [x, 38, x - 18, 30],
        [x, 38, x + 6, 42],
      ],
      legs: [
        [x, 56, x - 10, 82],
        [x, 56, x + 10, 82],
      ],
    },
    cardio: {
      head: [x, 16],
      torso: [
        [x, 23],
        [x + 3, 50],
      ],
      arms: [
        [x + 2, 28, x - 12, 20],
        [x + 2, 28, x + 14, 36],
      ],
      legs: [
        [x + 3, 50, x - 12, 68],
        [x + 3, 50, x + 16, 82],
      ],
    },
    compound: {
      head: [x, 20],
      torso: [
        [x, 27],
        [x, 50],
      ],
      arms: [
        [x, 30, x - 16, 18],
        [x, 30, x + 16, 18],
      ],
      legs: [
        [x, 50, x - 14, 70],
        [x, 50, x + 14, 70],
      ],
    },
  }

  const p = poses[pose] || poses.stand

  return (
    <g stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" opacity={opacity}>
      <circle cx={p.head[0]} cy={p.head[1]} r="6.5" />
      <line x1={p.torso[0][0]} y1={p.torso[0][1]} x2={p.torso[1][0]} y2={p.torso[1][1]} />
      {p.arms.map((a, i) => (
        <line key={`a${i}`} x1={a[0]} y1={a[1]} x2={a[2]} y2={a[3]} />
      ))}
      {p.legs.map((l, i) => (
        <line key={`l${i}`} x1={l[0]} y1={l[1]} x2={l[2]} y2={l[3]} />
      ))}
    </g>
  )
}

const PATTERN_POSES = {
  squat: ['stand', 'squatDown'],
  lunge: ['stand', 'lunge'],
  press: ['pressUp', 'pressDown'],
  push: ['pressUp', 'pressDown'],
  pull: ['pullDown', 'pullUp'],
  hinge: ['hingeUp', 'hingeDown'],
  hold: ['hold', 'hold'],
  twist: ['twist', 'twist'],
  raise: ['stand', 'pressUp'],
  curl: ['stand', 'pullUp'],
  cardio: ['cardio', 'cardio'],
  compound: ['squatDown', 'compound'],
}

export default function ExerciseIllustration({ pattern, size = 'md', className = '' }) {
  const [poseA, poseB] = PATTERN_POSES[pattern] || PATTERN_POSES.compound
  const dims = size === 'lg' ? { w: 320, h: 200 } : { w: 220, h: 140 }

  return (
    <div
      className={`relative rounded-lg overflow-hidden border border-line ${className}`}
      style={{
        background:
          'radial-gradient(120% 100% at 15% 0%, rgba(47,111,237,0.16) 0%, rgba(10,11,13,0) 55%), #0F1115',
      }}
    >
      <svg viewBox="0 0 200 100" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" className="block">
        {/* baseline */}
        <line x1="10" y1="90" x2="190" y2="90" stroke="#1E222A" strokeWidth="1.5" />
        <Stickman x={45} pose={poseA} color="#3A4250" opacity={0.9} />
        <Stickman x={135} pose={poseB} color="#5B8DF6" opacity={1} />
        {/* direction arrow */}
        <g stroke="#22D3EE" strokeWidth="2" fill="none" strokeLinecap="round">
          <line x1="80" y1="55" x2="108" y2="55" />
          <polyline points="101,49 108,55 101,61" />
        </g>
      </svg>
    </div>
  )
}

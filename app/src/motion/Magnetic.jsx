import { useRef } from 'react'
import { m, useMotionValue, useSpring } from 'motion/react'

// Wrapper that pulls its child toward the cursor. Mouse only, springs back on leave.
export default function Magnetic({ children, strength = 0.3 }) {
  const ref = useRef(null)
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 16, mass: 0.4 })
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 16, mass: 0.4 })
  return (
    <m.span
      ref={ref} style={{ x, y, display: 'inline-block' }}
      onPointerMove={(e) => {
        if (e.pointerType !== 'mouse') return
        const r = ref.current.getBoundingClientRect()
        x.set((e.clientX - (r.left + r.width / 2)) * strength)
        y.set((e.clientY - (r.top + r.height / 2)) * strength)
      }}
      onPointerLeave={() => { x.set(0); y.set(0) }}
    >{children}</m.span>
  )
}

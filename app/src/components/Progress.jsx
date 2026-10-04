import { m, useScroll, useSpring } from 'motion/react'
// Thin page-scroll progress bar (transform-only).
export default function Progress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 })
  return <m.div className="progress" style={{ scaleX }} aria-hidden="true" />
}

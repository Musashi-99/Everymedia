import { createRoot } from 'react-dom/client'
import { LazyMotion, MotionConfig } from 'motion/react'
import '@fontsource-variable/manrope/wght.css'
import App from './App.jsx'
import './styles.css'

const features = () => import('./motion/features.js').then((r) => r.default)
createRoot(document.getElementById('root')).render(
  <MotionConfig reducedMotion="user">
    <LazyMotion features={features} strict><App /></LazyMotion>
  </MotionConfig>
)

// GSAP, ScrollTrigger and Lenis load after first paint so they never block LCP.
const ready = () => document.documentElement.classList.add('fx-ready')
const idle = window.requestIdleCallback || ((f) => setTimeout(f, 200))
idle(() => import('./fx/scrollFx.js').then((r) => r.init()).catch(ready))
setTimeout(ready, 4000) // safety net: never leave split headings hidden

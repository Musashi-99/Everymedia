// Shared Framer Motion variants. Only transform + opacity are animated.
export const ease = [0.22, 0.8, 0.24, 1]
export const fadeUp = { hidden: { opacity: 0, y: 36 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } } }
export const fade = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.9, ease } } }
export const rise = { hidden: { y: '108%' }, show: { y: '0%', transition: { duration: 1.05, ease } } }
export const pop = { hidden: { opacity: 0, scale: 0.4 }, show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 380, damping: 18 } } }
export const stagger = (s = 0.1, d = 0) => ({ hidden: {}, show: { transition: { staggerChildren: s, delayChildren: d } } })
// spread on a container: children with `variants` animate when it scrolls into view (once)
export const inView = { initial: 'hidden', whileInView: 'show', viewport: { once: true, amount: 0.15 } }

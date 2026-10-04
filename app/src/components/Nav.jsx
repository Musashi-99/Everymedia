import { useEffect, useState } from 'react'
import { m, useScroll, useMotionValueEvent } from 'motion/react'
import { nav } from '../data/content'
import { ease } from '../motion/presets'
import Btn from './Btn'
export default function Nav() {
  const [s, setS] = useState(false)
  const [hide, setHide] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()
  // state only flips on direction change, so scrolling does not re-render
  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0
    setS(y > 20)
    if (y > prev && y > 240) setHide(true)
    else if (y < prev) setHide(false)
  })
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])
  return (
    <m.nav
      className={(s ? 'scrolled' : '') + (open ? ' open' : '')}
      initial={{ y: '-100%' }} animate={{ y: hide && !open ? '-110%' : '0%' }}
      transition={{ duration: 0.6, ease }}
    >
      <div className="in">
        <a className="logo" href="#">Everymedia</a>
        <ul onClick={() => setOpen(false)}>{nav.links.map(l => <li key={l}><a href={l === 'Expertise' ? '#expertise' : '#'}>{l}</a></li>)}</ul>
        <Btn v="btn-black" arrow="↗">{nav.cta}</Btn>
        <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(o => !o)}><i /><i /></button>
      </div>
    </m.nav>
  )
}

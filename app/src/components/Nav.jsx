import { useEffect, useState } from 'react'
import { nav } from '../data/content'
import Btn from './Btn'
export default function Nav() {
  const [s, setS] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const f = () => setS(window.scrollY > 20)
    window.addEventListener('scroll', f)
    return () => window.removeEventListener('scroll', f)
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])
  return (
    <nav className={(s ? 'scrolled' : '') + (open ? ' open' : '')}>
      <div className="in">
        <a className="logo" href="#">Everymedia</a>
        <ul onClick={() => setOpen(false)}>{nav.links.map(l => <li key={l}><a href={l === 'Expertise' ? '#expertise' : '#'}>{l}</a></li>)}</ul>
        <Btn v="btn-black" arrow="↗">{nav.cta}</Btn>
        <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(o => !o)}><i /><i /></button>
      </div>
    </nav>
  )
}

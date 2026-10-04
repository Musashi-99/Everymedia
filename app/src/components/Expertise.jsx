import { useRef, useState } from 'react'
import { AnimatePresence, m } from 'motion/react'
import { expertise as e } from '../data/content'
import { ease, fadeUp, inView, stagger } from '../motion/presets'
import Img from './Img'
import Btn from './Btn'

const panel = { hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.12 } }, exit: { opacity: 0, transition: { duration: 0.2 } } }
const line = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } } }
const spring = { type: 'spring', stiffness: 420, damping: 38 }

export default function Expertise() {
  const [i, setI] = useState(0)
  const ref = useRef(null)
  const s = e.services[i]
  const pick = (n) => {
    setI(n)
    if (window.matchMedia('(max-width: 768px)').matches) {
      requestAnimationFrame(() => ref.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }))
    }
  }
  return (
    <m.section className="exp" id="expertise" variants={stagger(0.12)} {...inView}>
      <m.div className="sec-head" variants={fadeUp}><span className="eyebrow">{e.eyebrow}</span><a className="tlink" href="#"><span>{e.link}</span><i>→</i></a></m.div>
      <div className="exp-grid">
        <div className="exp-list">
          {e.services.map((x, n) => (
            <m.div key={x.name} variants={fadeUp}>
              <div className={'row' + (n === i ? ' active' : '')} role="button" tabIndex={0} onClick={() => pick(n)} onKeyDown={(ev) => (ev.key === 'Enter' || ev.key === ' ') && (ev.preventDefault(), pick(n))}>
                {n === i && <m.span className="pill" layoutId="exp-pill" transition={spring} style={{ borderRadius: 14 }} />}
                <span className="n">{String(n + 1).padStart(2, '0')}</span>
                <div className="t"><h4>{x.name}</h4><p>{x.blurb}</p></div>
                <span className="circle">↗</span>
              </div>
            </m.div>
          ))}
        </div>
        <m.div className="exp-img" ref={ref} variants={fadeUp}>
          <AnimatePresence initial={false}>
            <m.div className="ph" key={`i${i}`} initial={{ opacity: 0, scale: 1.08 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8, ease }}>
              <Img src={s.image} alt={s.name} pos="30% center" sizes="(max-width:1024px) 100vw, 55vw" />
            </m.div>
          </AnimatePresence>
          <AnimatePresence mode="popLayout" initial={false}>
            <m.div className="txt" key={`t${i}`} variants={panel} initial="hidden" animate="show" exit="exit">
              <m.div className="tag" variants={line}>{s.name.toUpperCase()}</m.div>
              <m.h3 variants={line}>{s.title[0]}<br />{s.title[1]}</m.h3>
              <m.p variants={line}>{s.copy}</m.p>
              <m.div variants={line}><Btn v="btn-white" style={{ height: 42, fontSize: 12 }}>Explore {s.name}</Btn></m.div>
            </m.div>
          </AnimatePresence>
        </m.div>
      </div>
    </m.section>
  )
}

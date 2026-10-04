import { useRef, useState } from 'react'
import { m, useScroll, useMotionValueEvent } from 'motion/react'
import { process as p } from '../data/content'
import { fadeUp, inView, stagger } from '../motion/presets'
import Img from './Img'
import Btn from './Btn'
export default function Process() {
  const [i, setI] = useState(0)
  const ref = useRef(null)
  // Scrolling through the section walks DEFINE, DESIGN, DEPLOY (clicks still work).
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 65%', 'end 55%'] })
  useMotionValueEvent(scrollYProgress, 'change', (v) => setI(Math.min(p.steps.length - 1, Math.floor(v * p.steps.length))))
  return (
    <m.section className="process" ref={ref} variants={stagger(0.12)} {...inView}>
      <m.div variants={fadeUp}>
        <div className="eyebrow">{p.eyebrow}</div>
        <h2>{p.title[0]}<br />{p.title[1]}</h2>
        <p>{p.copy}</p>
        <Btn v="btn-outline">{p.cta}</Btn>
      </m.div>
      <div className="steps">
        {p.steps.map((s, n) => (
          <m.div key={s.name} variants={fadeUp}>
            <div className={'row' + (n === i ? ' active' : '')} role="button" tabIndex={0} onClick={() => setI(n)} onKeyDown={(ev) => (ev.key === 'Enter' || ev.key === ' ') && (ev.preventDefault(), setI(n))}>
              {n === i && <m.span className="pill" layoutId="proc-pill" transition={{ type: 'spring', stiffness: 420, damping: 38 }} style={{ borderRadius: 14 }} />}
              <span className="n">{String(n + 1).padStart(2, '0')}</span>
              <div className="t"><h4>{s.name}</h4><p>{s.blurb}</p></div>
              <span className="circle">↗</span>
            </div>
          </m.div>
        ))}
      </div>
      <m.div className="img" variants={fadeUp} data-clip><div className="ph"><Img src={p.image} alt="Strategy wall" pos="60% center" parallax sizes="(max-width:1024px) 100vw, 30vw" /></div></m.div>
    </m.section>
  )
}

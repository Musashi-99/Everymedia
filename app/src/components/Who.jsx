import { m } from 'motion/react'
import { who as w, stats } from '../data/content'
import { fadeUp, inView, stagger } from '../motion/presets'
import Btn from './Btn'
// Numeric stats get data-count, GSAP counts them up (fx/scrollFx.js). Others render as-is.
export default function Who() {
  return (
    <>
      <m.section className="who" variants={stagger(0.14)} {...inView}>
        <m.div variants={fadeUp}>
          <div className="eyebrow">{w.eyebrow}</div>
          <h2 data-split>We bring together <b>creativity, technology</b> and data to make brands <b><em>impossible to ignore.</em></b></h2>
        </m.div>
        <m.div className="right" variants={fadeUp}><p>{w.copy}</p><Btn v="btn-outline">{w.cta}</Btn></m.div>
      </m.section>
      <m.section className="stats" variants={stagger(0.1)} {...inView}>
        {stats.map(s => <m.div key={s.label} variants={fadeUp}><b data-count={/^\d+\D*$/.test(s.value) ? s.value : undefined}>{s.value}</b><span>{s.label}</span></m.div>)}
      </m.section>
    </>
  )
}

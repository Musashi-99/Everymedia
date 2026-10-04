import { m } from 'motion/react'
import { people as p } from '../data/content'
import { fadeUp, inView, pop, stagger } from '../motion/presets'
import { imgUrl } from '../lib/img'
import Img from './Img'
import Btn from './Btn'
export default function People() {
  return (
    <m.section className="people" variants={stagger(0.12)} {...inView}>
      <div className="ph"><Img src={p.image} alt="Team" pos="70% center" parallax /></div>
      <div className="content">
        <m.div className="eyebrow" variants={fadeUp}>{p.eyebrow}</m.div>
        <h2 data-split>{p.title}</h2>
        <m.p variants={fadeUp}>{p.copy}</m.p>
        <m.div variants={fadeUp}><Btn v="btn-white" style={{ height: 42, fontSize: 12 }}>{p.cta}</Btn></m.div>
      </div>
      <m.div className="br" variants={stagger(0.08, 0.3)}>
        <div className="avatars">{p.avatars.map((a, n) => <m.i key={n} variants={pop} style={{ backgroundImage: `url(${imgUrl(p.image)})`, backgroundSize: '600%', backgroundPosition: a }} />)}</div>
        <m.span variants={fadeUp}>{p.note[0]}<br />{p.note[1]}</m.span>
        <a className="circle o" href="#">←</a><a className="circle o" href="#">→</a>
      </m.div>
    </m.section>
  )
}

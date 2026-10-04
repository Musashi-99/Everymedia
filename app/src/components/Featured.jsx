import { m } from 'motion/react'
import { featured as f } from '../data/content'
import { fadeUp, inView, stagger } from '../motion/presets'
import Img from './Img'
function Card({ c, cls, pos, sizes }) {
  return (
    <m.a className={'card ' + cls} href="#" variants={fadeUp}>
      <div className="ph"><Img src={c.image} alt={c.title} pos={pos} parallax sizes={sizes} /></div>
      <div className="info">
        <div><div className="tag">{c.tag}</div><h4>{c.title}</h4>{c.copy && <p>{c.copy}</p>}</div>
        <span className="circle w">↗</span>
      </div>
    </m.a>
  )
}
export default function Featured() {
  return (
    <m.section className="feat" variants={stagger(0.14)} {...inView}>
      <m.div className="sec-head" variants={fadeUp}><span className="eyebrow">{f.eyebrow}</span><a className="tlink" href="#"><span>{f.link}</span><i>→</i></a></m.div>
      <div className="feat-grid">
        <Card c={f.main} cls="main" pos="38% center" sizes="(max-width:1024px) 100vw, 55vw" />
        <div className="right-col">
          <Card c={f.sports} cls="sports" pos="85% center" sizes="(max-width:1024px) 100vw, 45vw" />
          <div className="small-row">
            <Card c={f.small[0]} cls="sm" pos="50% 30%" sizes="(max-width:1024px) 50vw, 22vw" />
            <Card c={f.small[1]} cls="sm" pos="50% 30%" sizes="(max-width:1024px) 50vw, 22vw" />
          </div>
        </div>
      </div>
    </m.section>
  )
}

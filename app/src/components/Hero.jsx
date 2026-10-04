import { m } from 'motion/react'
import { hero as h } from '../data/content'
import { ease, fade, fadeUp, rise, stagger } from '../motion/presets'
import Img from './Img'
import Btn from './Btn'

// Load choreography: image settles (scale 1.18 to 1), headline lines rise out of masks,
// copy + buttons follow. GSAP (scrollFx) handles the scroll-out via the data-hero-* hooks.
const settle = { hidden: { scale: 1.18 }, show: { scale: 1, transition: { duration: 1.8, ease } } }

export default function Hero() {
  return (
    <m.section className="hero" variants={stagger(0.11, 0.2)} initial="hidden" animate="show">
      <m.div className="ph" variants={settle}><div className="pxw" data-hero-img><Img src={h.image} alt="Film production" pos="75% center" eager /></div></m.div>
      <div className="content" data-hero-content>
        <m.div className="eyebrow" variants={fade}>{h.eyebrow}</m.div>
        <h1>
          {h.lines.map(l => <span className="ln" key={l}><m.span variants={rise}>{l}</m.span></span>)}
          <span className="ln"><m.em variants={rise}>{h.italic}</m.em></span>
        </h1>
        <m.p variants={fadeUp}>{h.copy}</m.p>
        <m.div className="btns" variants={fadeUp}>
          <Btn v="btn-white" magnetic>{h.primary}</Btn>
          <a className="play" href="#"><i>▶</i> {h.secondary}</a>
        </m.div>
      </div>
      <m.div className="meta-l" variants={fade}>{h.tags.map((t, i) => <span key={t} className="tg">{i > 0 && <b>|</b>}{t}</span>)}</m.div>
      <m.div className="meta-r" variants={fade}><span>01</span><div className="bar" /><span style={{ opacity: .5 }}>03</span><a className="circle o" href="#">←</a><a className="circle o" href="#">→</a></m.div>
    </m.section>
  )
}

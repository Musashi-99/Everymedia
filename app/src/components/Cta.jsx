import { m } from 'motion/react'
import { cta as c } from '../data/content'
import { fadeUp, inView, stagger } from '../motion/presets'
import Img from './Img'
import Btn from './Btn'
import Social from './Social'
export default function Cta() {
  return (
    <m.section className="cta" variants={stagger(0.12)} {...inView}>
      <div className="ph"><Img src={c.image} alt="" pos="right center" parallax /></div>
      <div className="content">
        <m.div className="eyebrow" variants={fadeUp}>{c.eyebrow}</m.div>
        <h2 data-split>{c.title[0]} <br />{c.title[1]}</h2>
        <m.p variants={fadeUp}>{c.copy}</m.p>
        <m.div variants={fadeUp}><Btn v="btn-white" magnetic>{c.button}</Btn></m.div>
        <m.div variants={fadeUp}><Social /></m.div>
      </div>
    </m.section>
  )
}

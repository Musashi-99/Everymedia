import { hero as h } from '../data/content'
import Img from './Img'
import Btn from './Btn'
export default function Hero() {
  return (
    <section className="hero">
      <div className="ph"><Img src={h.image} alt="Film production" pos="75% center" /></div>
      <div className="content">
        <div className="eyebrow">{h.eyebrow}</div>
        <h1>{h.lines.map(l => <span key={l}>{l}</span>)}<em>{h.italic}</em></h1>
        <p>{h.copy}</p>
        <div className="btns">
          <Btn v="btn-white">{h.primary}</Btn>
          <a className="play" href="#"><i>▶</i> {h.secondary}</a>
        </div>
      </div>
      <div className="meta-l">{h.tags.map((t, i) => <span key={t} className="tg">{i > 0 && <b>|</b>}{t}</span>)}</div>
      <div className="meta-r"><span>01</span><div className="bar" /><span style={{ opacity: .5 }}>03</span><a className="circle o" href="#">←</a><a className="circle o" href="#">→</a></div>
    </section>
  )
}

import { featured as f } from '../data/content'
import useReveal from '../hooks/useReveal'
import Img from './Img'
function Card({ c, cls, pos }) {
  return (
    <a className={'card ' + cls} href="#">
      <div className="ph"><Img src={c.image} alt={c.title} pos={pos} /></div>
      <div className="info">
        <div><div className="tag">{c.tag}</div><h4>{c.title}</h4>{c.copy && <p>{c.copy}</p>}</div>
        <span className="circle w">↗</span>
      </div>
    </a>
  )
}
export default function Featured() {
  const r = useReveal()
  return (
    <section className="feat reveal" ref={r}>
      <div className="sec-head"><span className="eyebrow">{f.eyebrow}</span><a className="tlink" href="#"><span>{f.link}</span><i>→</i></a></div>
      <div className="feat-grid">
        <Card c={f.main} cls="main" pos="38% center" />
        <div className="right-col">
          <Card c={f.sports} cls="sports" pos="85% center" />
          <div className="small-row">
            <Card c={f.small[0]} cls="sm" pos="50% 30%" />
            <Card c={f.small[1]} cls="sm" pos="50% 30%" />
          </div>
        </div>
      </div>
    </section>
  )
}

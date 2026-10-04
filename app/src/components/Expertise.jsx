import { useState } from 'react'
import { expertise as e } from '../data/content'
import useReveal from '../hooks/useReveal'
import Img from './Img'
import Btn from './Btn'
export default function Expertise() {
  const [i, setI] = useState(0)
  const r = useReveal()
  const s = e.services[i]
  return (
    <section className="exp reveal" id="expertise" ref={r}>
      <div className="sec-head"><span className="eyebrow">{e.eyebrow}</span><a className="tlink" href="#"><span>{e.link}</span><i>→</i></a></div>
      <div className="exp-grid">
        <div className="exp-list">
          {e.services.map((x, n) => (
            <div key={x.name} className={'row' + (n === i ? ' active' : '')} role="button" tabIndex={0} onClick={() => setI(n)} onKeyDown={(ev) => (ev.key === 'Enter' || ev.key === ' ') && (ev.preventDefault(), setI(n))}>
              <span className="n">{String(n + 1).padStart(2, '0')}</span>
              <div className="t"><h4>{x.name}</h4><p>{x.blurb}</p></div>
              <span className="circle">↗</span>
            </div>
          ))}
        </div>
        <div className="exp-img">
          <div className="ph"><Img src={s.image} alt={s.name} pos="30% center" /></div>
          <div className="txt" key={i}>
            <div className="tag">{s.name.toUpperCase()}</div>
            <h3>{s.title[0]}<br />{s.title[1]}</h3>
            <p>{s.copy}</p>
            <Btn v="btn-white" style={{ height: 42, fontSize: 12 }}>Explore {s.name}</Btn>
          </div>
        </div>
      </div>
    </section>
  )
}

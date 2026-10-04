import { useState } from 'react'
import { process as p } from '../data/content'
import useReveal from '../hooks/useReveal'
import Img from './Img'
import Btn from './Btn'
export default function Process() {
  const [i, setI] = useState(0)
  const r = useReveal()
  return (
    <section className="process reveal" ref={r}>
      <div>
        <div className="eyebrow">{p.eyebrow}</div>
        <h2>{p.title[0]}<br />{p.title[1]}</h2>
        <p>{p.copy}</p>
        <Btn v="btn-outline">{p.cta}</Btn>
      </div>
      <div className="steps">
        {p.steps.map((s, n) => (
          <div key={s.name} className={'row' + (n === i ? ' active' : '')} role="button" tabIndex={0} onClick={() => setI(n)} onKeyDown={(ev) => (ev.key === 'Enter' || ev.key === ' ') && (ev.preventDefault(), setI(n))}>
            <span className="n">{String(n + 1).padStart(2, '0')}</span>
            <div className="t"><h4>{s.name}</h4><p>{s.blurb}</p></div>
            <span className="circle">↗</span>
          </div>
        ))}
      </div>
      <div className="img"><div className="ph"><Img src={p.image} alt="Strategy wall" pos="60% center" /></div></div>
    </section>
  )
}

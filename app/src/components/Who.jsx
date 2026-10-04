import { who as w, stats } from '../data/content'
import Btn from './Btn'
import useReveal from '../hooks/useReveal'
export default function Who() {
  const r1 = useReveal(), r2 = useReveal()
  return (
    <>
      <section className="who reveal" ref={r1}>
        <div>
          <div className="eyebrow">{w.eyebrow}</div>
          <h2>We bring together <b>creativity, technology</b> and data to make brands <b><em>impossible to ignore.</em></b></h2>
        </div>
        <div className="right"><p>{w.copy}</p><Btn v="btn-outline">{w.cta}</Btn></div>
      </section>
      <section className="stats reveal" ref={r2}>
        {stats.map(s => <div key={s.label}><b>{s.value}</b><span>{s.label}</span></div>)}
      </section>
    </>
  )
}

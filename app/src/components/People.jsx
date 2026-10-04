import { people as p } from '../data/content'
import useReveal from '../hooks/useReveal'
import Img from './Img'
import Btn from './Btn'
export default function People() {
  const r = useReveal()
  return (
    <section className="people reveal" ref={r}>
      <div className="ph"><Img src={p.image} alt="Team" pos="70% center" /></div>
      <div className="content">
        <div className="eyebrow">{p.eyebrow}</div>
        <h2>{p.title}</h2>
        <p>{p.copy}</p>
        <Btn v="btn-white" style={{ height: 42, fontSize: 12 }}>{p.cta}</Btn>
      </div>
      <div className="br">
        <div className="avatars">{p.avatars.map((a, n) => <i key={n} style={{ backgroundImage: `url(${p.image})`, backgroundSize: '600%', backgroundPosition: a }} />)}</div>
        <span>{p.note[0]}<br />{p.note[1]}</span>
        <a className="circle o" href="#">←</a><a className="circle o" href="#">→</a>
      </div>
    </section>
  )
}

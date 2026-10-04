import { cta as c } from '../data/content'
import useReveal from '../hooks/useReveal'
import Img from './Img'
import Btn from './Btn'
import Social from './Social'
export default function Cta() {
  const r = useReveal()
  return (
    <section className="cta reveal" ref={r}>
      <div className="ph"><Img src={c.image} alt="" pos="right center" /></div>
      <div className="content">
        <div className="eyebrow">{c.eyebrow}</div>
        <h2>{c.title[0]} <br />{c.title[1]}</h2>
        <p>{c.copy}</p>
        <Btn v="btn-white">{c.button}</Btn>
        <Social />
      </div>
    </section>
  )
}

import { footer as f } from '../data/content'
import Social from './Social'
export default function Footer() {
  return (
    <footer>
      <div className="f-top">
        <div className="l"><a className="logo" href="#">Everymedia</a><small>{f.descriptor}</small></div>
        <div className="f-links">{f.links.map(l => <a key={l} href="#">{l}</a>)}</div>
        <div className="f-soc"><Social label="Follow us" /></div>
      </div>
      <div className="f-bot"><span>{f.copyright}</span><div>{f.legal.map(l => <a key={l} href="#">{l}</a>)}</div></div>
    </footer>
  )
}

import Magnetic from '../motion/Magnetic'
// Shared pill button. `v` = btn-black | btn-white | btn-outline. Arrow animates on hover (see styles.css).
// `magnetic` = pulls toward cursor (hero / CTA only).
export default function Btn({ v = 'btn-black', href = '#', arrow = '→', magnetic = false, children, ...rest }) {
  const a = (
    <a className={'btn ' + v} href={href} {...rest}>
      <span className="lbl">{children}</span>
      <span className="arr" aria-hidden="true">{arrow}</span>
    </a>
  )
  return magnetic ? <Magnetic>{a}</Magnetic> : a
}

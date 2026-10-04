// Shared pill button. `v` = btn-black | btn-white | btn-outline. Arrow animates on hover (see styles.css).
export default function Btn({ v = 'btn-black', href = '#', arrow = '→', children, ...rest }) {
  return (
    <a className={'btn ' + v} href={href} {...rest}>
      <span className="lbl">{children}</span>
      <span className="arr" aria-hidden="true">{arrow}</span>
    </a>
  )
}

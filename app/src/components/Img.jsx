// Image slot: fills its parent. Position via `pos` (object-position).
export default function Img({ src, alt = '', pos = 'center' }) {
  return <img className="fill" src={src} alt={alt} style={{ objectPosition: pos }} loading="lazy" />
}

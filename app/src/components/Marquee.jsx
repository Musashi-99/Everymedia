// Pure-CSS marquee (compositor-only). GSAP adds scroll-velocity boost via playbackRate.
const words = ['Creative', 'Technology', 'Data', 'Campaigns', 'Content', 'UI / UX', 'Video']
export default function Marquee() {
  const set = words.map((w) => <span key={w}>{w}<i aria-hidden="true">✦</i></span>)
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track" data-marquee>{set}{set}</div>
    </div>
  )
}

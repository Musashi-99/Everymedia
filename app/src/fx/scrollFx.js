// Scroll-linked motion: GSAP + ScrollTrigger + SplitText + Lenis.
// Dynamic-imported after first paint (see main.jsx). Framer owns React-state UI; this file owns
// anything driven by scroll position. Only transform / opacity / clip-path are animated.
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger, SplitText)

const root = document.documentElement
const $$ = (s) => gsap.utils.toArray(s)

export function init() {
  const mm = gsap.matchMedia()

  // Full motion (users who did not ask for reduced motion)
  mm.add('(prefers-reduced-motion: no-preference)', () => {
    const fine = matchMedia('(pointer: fine)').matches
    const wide = matchMedia('(min-width: 769px)').matches

    // 1. Smooth scroll, driven by the GSAP ticker so ScrollTrigger stays in sync.
    let lenis
    if (fine) {
      lenis = new Lenis({ lerp: 0.1, anchors: true })
      lenis.on('scroll', ScrollTrigger.update)
      gsap.ticker.add((t) => lenis.raf(t * 1000))
      gsap.ticker.lagSmoothing(0)
    }

    // 2. Hero: image pushes in, copy lifts away as the section scrolls out.
    const hero = document.querySelector('.hero')
    if (hero) {
      const st = { trigger: hero, start: 'top top', end: 'bottom top', scrub: true }
      gsap.to('[data-hero-img]', { scale: 1.14, ease: 'none', scrollTrigger: st })
      gsap.to('[data-hero-content]', { yPercent: wide ? -14 : -8, opacity: 0.15, ease: 'none', scrollTrigger: { ...st, end: '75% top' } })
    }

    // 3. Parallax on every [data-px] picture (scaled so edges never show).
    const amp = wide ? 7 : 4
    $$('[data-px]').forEach((el) => {
      gsap.fromTo(el, { yPercent: -amp, scale: 1 + amp / 50 }, {
        yPercent: amp, scale: 1 + amp / 50, ease: 'none', force3D: true,
        scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
      })
    })

    // 4. Process image: clip-path opens as it arrives.
    $$('[data-clip]').forEach((el) => {
      gsap.fromTo(el, { clipPath: 'inset(10% 8% 10% 8% round 16px)' }, {
        clipPath: 'inset(0% 0% 0% 0% round 16px)', ease: 'none',
        scrollTrigger: { trigger: el, start: 'top 95%', end: 'top 45%', scrub: true },
      })
    })

    // 5. Stat count-ups.
    $$('[data-count]').forEach((el) => {
      const [, num, suffix = ''] = el.dataset.count.match(/^(\d+)(\D*)$/)
      const to = +num, o = { v: to > 1900 ? to - 40 : 0 }
      el.textContent = Math.round(o.v) + suffix
      gsap.to(o, {
        v: to, duration: 1.8, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        onUpdate: () => { el.textContent = Math.round(o.v) + suffix },
      })
    })

    // 6. Headline line-mask reveals. Wait for the web font so line breaks are final.
    const splits = []
    document.fonts.ready.then(() => {
      $$('[data-split]').forEach((el) => {
        splits.push(SplitText.create(el, {
          type: 'lines', mask: 'lines', autoSplit: true,
          onSplit: (self) => gsap.from(self.lines, {
            yPercent: 110, duration: 1, ease: 'power4.out', stagger: 0.09,
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          }),
        }))
      })
      root.classList.add('fx-ready')
      ScrollTrigger.refresh()
    })

    // 7. Marquee speeds up with scroll velocity, then eases back.
    const track = document.querySelector('[data-marquee]')
    if (track) {
      const boost = { v: 0 }
      const apply = () => { const a = track.getAnimations()[0]; if (a) a.playbackRate = 1 + boost.v }
      ScrollTrigger.create({
        trigger: track, start: 'top bottom', end: 'bottom top',
        onUpdate: (self) => {
          boost.v = Math.min(Math.abs(self.getVelocity()) / 300, 7)
          apply()
          gsap.to(boost, { v: 0, duration: 0.9, ease: 'power2.out', overwrite: true, onUpdate: apply })
        },
      })
    }

    return () => { lenis?.destroy(); splits.forEach((s) => s.revert()) }
  })

  // Reduced motion: no splitting, no smooth scroll, nothing hidden.
  mm.add('(prefers-reduced-motion: reduce)', () => { root.classList.add('fx-ready') })
}

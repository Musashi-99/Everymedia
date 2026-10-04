import { imgSet, imgMeta } from '../lib/img'

// Image slot: fills its parent. AVIF/WebP/JPG, explicit size (no CLS).
// `eager` = above-the-fold/LCP. `parallax` = GSAP scrolls the <picture> wrapper (see fx/scrollFx.js).
export default function Img({ src, alt = '', pos = 'center', eager = false, parallax = false, sizes = '100vw' }) {
  const m = imgMeta(src)
  return (
    <picture className="pxw" data-px={parallax ? '' : undefined}>
      {m && <source type="image/avif" srcSet={imgSet(src, 'avif')} sizes={sizes} />}
      {m && <source type="image/webp" srcSet={imgSet(src, 'webp')} sizes={sizes} />}
      <img
        className="fill" src={src} alt={alt} width={m?.width} height={m?.height}
        style={{ objectPosition: pos }}
        loading={eager ? 'eager' : 'lazy'} decoding={eager ? 'sync' : 'async'}
        {...(eager ? { fetchpriority: 'high' } : {})}
      />
    </picture>
  )
}

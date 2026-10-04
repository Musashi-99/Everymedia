import manifest from '../data/images.json'

// Build <picture> sources for an optimized image (see scripts/optimize-images.mjs).
export function imgSet(src, ext) {
  const m = manifest[src]
  if (!m) return null
  return m.widths.map((w) => `/images/opt/${m.name}-${w}.${ext} ${w}w`).join(', ')
}
export const imgMeta = (src) => manifest[src]
// Single URL, largest variant (for CSS backgrounds).
export function imgUrl(src, ext = 'webp') {
  const m = manifest[src]
  return m ? `/images/opt/${m.name}-${m.widths[m.widths.length - 1]}.${ext}` : src
}

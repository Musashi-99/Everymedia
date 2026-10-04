// Generates AVIF + WebP at 640/1200/full width and a manifest (src/data/images.json).
// Usage: npm run images
import sharp from 'sharp'
import { readdirSync, mkdirSync, writeFileSync } from 'node:fs'
const SRC = 'public/images', OUT = 'public/images/opt'
mkdirSync(OUT, { recursive: true })
const manifest = {}
for (const f of readdirSync(SRC).filter((f) => f.endsWith('.jpg'))) {
  const name = f.replace('.jpg', '')
  const { width, height } = await sharp(`${SRC}/${f}`).metadata()
  const widths = [...new Set([640, 1200].filter((w) => w < width).concat(width))]
  for (const w of widths) {
    const img = () => sharp(`${SRC}/${f}`).resize({ width: w })
    await img().avif({ quality: 52, effort: 5 }).toFile(`${OUT}/${name}-${w}.avif`)
    await img().webp({ quality: 74 }).toFile(`${OUT}/${name}-${w}.webp`)
  }
  manifest[`/images/${f}`] = { name, width, height, widths }
}
writeFileSync('src/data/images.json', JSON.stringify(manifest, null, 1))
console.log('optimized', Object.keys(manifest).length, 'images')

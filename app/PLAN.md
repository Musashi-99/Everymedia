# Everymedia — Motion + Performance Plan

## 1. Audit (baseline)

| Area | Finding | Impact |
|---|---|---|
| Motion | Only one-shot CSS `.reveal` fade per section. Hero has no entrance. Nothing scroll-linked. | Feels static |
| Motion | `.reveal` hides content (`opacity:0`) until JS runs; no `<noscript>` safety | Invisible page if JS fails |
| Perf | Hero image uses `loading="lazy"` (it is the LCP element) | Slower LCP |
| Perf | 9 JPGs, 1.6 MB total, no WebP/AVIF, no responsive sizes, no width/height | Heavy, CLS-prone |
| Perf | Font via Google CSS (render path + 2 extra origins), 6 weights | Delays text paint |
| Perf | Nav `scroll` listener not passive, sets state on every event | Jank source |
| UX | Expertise swaps one image; text key-remount only. Process steps highlight but do nothing. | Interactions feel dead |
| Code | CSS full of `!important` hero overrides; root `index.html` duplicate of React app | Maintenance debt |
| Baseline | JS 50.5 kB gz, CSS 5.9 kB gz | Budget to protect |

## 2. Architecture decisions

**Split of responsibility (no overlap, so no fighting over the same element):**
- **Framer Motion (`motion`)** → React-state-driven UI: page-load choreography, in-view reveals, hover/tap, shared-layout pill on service list, `AnimatePresence` panel swaps, mobile menu, nav hide/show.
  Loaded via `LazyMotion` + `domAnimation` + `m.*` (~5 kB instead of ~30 kB).
- **GSAP + ScrollTrigger** → scroll-linked / timeline work: hero parallax + scale-out, headline word reveals (SplitText), stat count-ups, pinned-feel process progress, featured card parallax, marquee. **Dynamic-imported after first paint** so it never blocks LCP.
- **Lenis** → smooth scroll, synced to GSAP ticker. Off for reduced-motion / touch.

**Performance rules**
1. Animate only `transform` + `opacity`. `will-change` set only during animation.
2. GSAP chunk lazy-loaded via `import()` in idle callback; hero entrance runs on Framer (already in main bundle) so no flash waiting for it.
3. Images → AVIF + WebP + JPG fallback via `<picture>`, 3 widths, explicit `width/height`, hero `fetchpriority=high` + `<link rel=preload>`, rest lazy.
4. Self-host Manrope variable (woff2, latin only), `font-display:swap`, preload.
5. `prefers-reduced-motion`: Framer `MotionConfig reducedMotion="user"`, GSAP `matchMedia`, Lenis disabled.
6. Mobile: lighter parallax amplitude, no pinning.
7. Split headings hidden only until `fx-ready`; 4 s safety timer + catch guarantee they always show.

**Budget:** critical-path JS ≤ 80 kB gz, everything else lazy; images delivered ≤ 600 kB per page view, no CLS.

## 3. Motion design spec

| Section | Framer | GSAP |
|---|---|---|
| Nav | slide-in on load, hide on scroll-down / show on scroll-up, mobile menu stagger | — |
| Hero | masked line-by-line headline rise, staggered eyebrow/copy/buttons, image scale 1.15→1 | scroll parallax image + content fade/lift, progress bar |
| Who | in-view fade-up | SplitText word reveal on h2 (scrub-free, once) |
| Stats | in-view stagger | count-up numbers (40+, 6+, 2010) |
| Expertise | `layoutId` active pill slides between rows, `AnimatePresence` crossfade of image + text | — |
| Featured | staggered card entrance, hover tilt-lift | image parallax inside cards |
| Process | step stagger, active row pill | progress line scrubs with scroll, image clip-path reveal |
| People | avatar stack pop-in | image parallax |
| CTA | headline rise, button magnetic hover | background drift |
| Global | button press spring | marquee strip of capabilities between sections, scroll progress bar |

## 4. Build steps
1. Install deps: `motion gsap @gsap/react lenis @fontsource-variable/manrope`, dev `sharp`.
2. `scripts/optimize-images.mjs` → AVIF/WebP/JPG at 480/960/1600 w; `Img` component → `<picture>`.
3. Font self-host, remove Google links, preload hero + font.
4. Shared motion primitives: `motion/` (presets, `Reveal`, `Stagger`, `MotionRoot`).
5. Lazy GSAP layer: `useScrollFx` mounted after idle; Lenis + ScrollTrigger sync.
6. Rewire components (Nav → Hero → Who/Stats → Expertise → Featured → Process → People → Cta).
7. Remove `useReveal` + `.reveal` CSS, fold dead `!important` hero overrides.
8. Verify: build size vs budget, Playwright screenshots desktop + mobile, console errors, reduced-motion.

## 5. Results (measured, local preview, headless Chromium)

| Metric | Before | After |
|---|---|---|
| Critical JS (gz) | 50.5 kB | 75.9 kB (React + Framer core) |
| Lazy JS (gz) | 0 | 25.7 kB Framer features + 54.7 kB GSAP/ScrollTrigger/SplitText/Lenis, loaded after first paint |
| CSS (gz) | 5.9 kB | 9.9 kB |
| Images, full-page transfer | ~1.6 MB JPG | ~0.6-0.8 MB total page transfer (AVIF) |
| Hero image | lazy JPG | eager, preloaded, AVIF responsive |
| Fonts | Google CSS + 6 weights | self-hosted variable woff2, latin subset fetched only |
| JS console errors | n/a | 0 (desktop, mobile, reduced-motion) |
| Horizontal overflow | n/a | none at 390 px and 1440 px |

Run `npm run images` after adding or changing any JPG in `public/images/`.

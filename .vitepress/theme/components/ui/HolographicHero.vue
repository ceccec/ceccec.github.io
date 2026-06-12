<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useData } from 'vitepress'
import { useDeviceEnergy } from '../../lib/useDeviceEnergy'
import { useTones } from '../../lib/useTones'
import { recordPlay, noteOf } from '../../lib/usePlayMind'

// Every page has an animated hero that merges all the page's related items —
// its category and holographic tags — in a holographic fractal: a self-similar
// figure (each branch a smaller copy of the whole) seeded deterministically from
// the page's own path, so the hero IS the page, in one figure. Zero dependencies,
// energy-aware, reduced-motion aware. Lives in components/ui (a shared primitive).
const { page, frontmatter, title, description } = useData()
const { saveEnergy } = useDeviceEnergy()
const { blip } = useTones()

// Anything definable as Open Graph is displayed here: the hero is the page's own OG
// card, showing the og:title, og:description and category over the fractal og:image.
const ogTitle = computed(() => (frontmatter.value.ogTitle as string) || title.value || 'Double Torus')
const ogDescription = computed(() => (frontmatter.value.ogDescription as string) || (frontmatter.value.description as string) || description.value || '')

function seedOf(text: string): number {
  let h = 0x811c9dc5
  for (let i = 0; i < text.length; i += 1) {
    h ^= text.charCodeAt(i)
    h = Math.imul(h, 0x01000193) >>> 0
  }
  return h >>> 0
}
const seed = computed(() => seedOf(page.value.relativePath || 'home'))
const hue = computed(() => seed.value % 360)
const arms = computed(() => 3 + (seed.value % 6)) // 3..8 symmetric arms — the fractal's order
const tags = computed(() => ((frontmatter.value.tags as string[]) || []).slice(0, 6))
const category = computed(() => (frontmatter.value.category as string) || 'double torus')

const canvas = ref<HTMLCanvasElement | null>(null)
// The hero is a slider through dimensions: a phase (0..1) that the movie advances
// smoothly and the viewer can scrub. The fractal's parameters interpolate with the
// phase, so changing the dimension morphs the figure continuously — an animated movie.
const slider = ref(0) // 0..1000, the dimension slider
const manual = ref(false) // when the viewer scrubs, follow the slider; else auto-advance
let phase = 0
let raf = 0
let running = false
let reduce = false

// Continuous, interpolated "dimensions": every parameter is a smooth function of the
// phase, so there are no jumps — the experience slides from one dimension to the next.
function dims(p: number) {
  const tau = p * Math.PI * 2
  return {
    spread: 0.5 + 0.32 * Math.sin(tau), // branch angle
    depthFade: 0.16 + 0.12 * (0.5 + 0.5 * Math.cos(tau)), // colour depth
    hueShift: (p * 220) % 360, // colour slides through the wheel
    twist: 0.2 + 0.5 * Math.sin(tau * 0.5), // rotation
    shrink: 0.64 + 0.08 * Math.sin(tau * 1.5), // self-similar ratio
    breath: 0.85 + 0.15 * Math.sin(tau * 2), // scale
  }
}

function branch(ctx: CanvasRenderingContext2D, x: number, y: number, len: number, angle: number, depth: number, d: ReturnType<typeof dims>) {
  if (depth <= 0 || len < 3) return
  const x2 = x + Math.cos(angle) * len
  const y2 = y + Math.sin(angle) * len
  ctx.strokeStyle = `hsla(${(hue.value + d.hueShift + depth * 28) % 360}, 72%, 60%, ${d.depthFade + depth * 0.1})`
  ctx.lineWidth = Math.max(0.5, depth * 0.6)
  ctx.beginPath()
  ctx.moveTo(x, y)
  ctx.lineTo(x2, y2)
  ctx.stroke()
  // self-similar: each branch spawns two smaller copies of the whole rule (holographic)
  branch(ctx, x2, y2, len * d.shrink, angle - d.spread, depth - 1, d)
  branch(ctx, x2, y2, len * d.shrink, angle + d.spread, depth - 1, d)
}

function draw(time: number) {
  const el = canvas.value
  if (!el) return
  const ctx = el.getContext('2d')
  if (!ctx) return
  const w = el.width
  const h = el.height
  ctx.clearRect(0, 0, w, h)
  const cx = w / 2
  const cy = h / 2
  const t = reduce ? 0 : time * 0.0006
  // advance the dimension smoothly (the movie); the slider follows unless scrubbed
  if (!manual.value && !reduce) phase = (phase + 0.0009) % 1
  if (!manual.value) slider.value = Math.round(phase * 1000)
  const p = manual.value ? slider.value / 1000 : phase
  const d = dims(p)
  const baseLen = Math.min(w, h) * 0.22 * d.breath
  // quantum responsiveness: depth and arm count adapt smoothly to the width
  const depth = cssWidth > 900 ? 6 : cssWidth > 520 ? 5 : 4
  const armCount = arms.value + (cssWidth > 800 ? 2 : cssWidth > 480 ? 1 : 0)
  // the holographic fractal: arms symmetric copies of the same branching rule
  for (let a = 0; a < armCount; a += 1) {
    const angle = (a / armCount) * Math.PI * 2 + t * d.twist
    branch(ctx, cx, cy, baseLen, angle, depth, d)
  }
  // merge all related: the page's tags orbit the centre, each joined to it
  const n = tags.value.length
  for (let i = 0; i < n; i += 1) {
    const angle = (i / Math.max(1, n)) * Math.PI * 2 - t * 0.5
    const r = Math.min(w, h) * 0.34
    const x = cx + Math.cos(angle) * r
    const y = cy + Math.sin(angle) * r
    ctx.strokeStyle = `hsla(${(hue.value + 180) % 360}, 70%, 62%, 0.35)`
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(cx, cy)
    ctx.lineTo(x, y)
    ctx.stroke()
    ctx.fillStyle = `hsl(${(hue.value + i * 24) % 360}, 80%, 60%)`
    ctx.beginPath()
    ctx.arc(x, y, 3.5, 0, Math.PI * 2)
    ctx.fill()
  }
  // the holographic core
  ctx.fillStyle = `hsl(${hue.value}, 80%, 60%)`
  ctx.globalAlpha = 0.7 + (reduce ? 0 : 0.3 * Math.sin(t * 2))
  ctx.beginPath()
  ctx.arc(cx, cy, 5, 0, Math.PI * 2)
  ctx.fill()
  ctx.globalAlpha = 1
}

function loop(time: number) {
  if (!running) return
  draw(time)
  raf = requestAnimationFrame(loop)
}
// A big hero at the Open Graph aspect ratio (1200x630), so the hero fits the OG card;
// the height follows the width, capped so it stays a banner. Quantum responsiveness:
// the fractal's depth and arm count adapt to the available width.
let cssWidth = 1200
function size() {
  const el = canvas.value
  if (!el) return
  const ratio = Math.min(window.devicePixelRatio || 1, 2)
  const w = el.clientWidth
  cssWidth = w
  const h = Math.min(Math.round((w * 630) / 1200), 460) // OG 1200x630, capped to a banner
  el.width = w * ratio
  el.height = h * ratio
  el.style.height = `${h}px`
}
function start() {
  if (running) return
  running = true
  raf = requestAnimationFrame(loop)
}
function stop() {
  running = false
  if (raf) cancelAnimationFrame(raf)
  raf = 0
}
function sync() {
  if (reduce || saveEnergy.value) {
    stop()
    requestAnimationFrame((t) => draw(t))
  } else start()
}
watch([saveEnergy, () => page.value.relativePath], () => {
  size()
  sync()
})
onMounted(() => {
  reduce = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  size()
  window.addEventListener('resize', size)
  sync()
})
onUnmounted(() => {
  stop()
  window.removeEventListener('resize', size)
})

// Scrubbing the slider changes the dimension by hand; if the movie is paused
// (energy-saving or reduced motion), redraw the chosen frame.
function onScrub() {
  manual.value = true
  if (!running) requestAnimationFrame((t) => draw(t))
}
function play() {
  manual.value = false
  sync()
}

// Tapping the hero is a gesture: the tap's horizontal position sets the dimension,
// and a tone sounds whose pitch maps to that dimension (a pentatonic step), so tapping
// across the hero plays the movie like an instrument. Energy- and motion-aware.
const PENTA = [0, 2, 4, 7, 9]
function tap(event: PointerEvent | MouseEvent) {
  const el = canvas.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  const x = Math.min(1, Math.max(0, (event.clientX - rect.left) / Math.max(1, rect.width)))
  manual.value = true
  slider.value = Math.round(x * 1000)
  if (!running) requestAnimationFrame((t) => draw(t))
  // playing the hero is play too: fold into the quantum mind; the results point the note.
  const m = recordPlay('hero')
  if (!saveEnergy.value) {
    blip(noteOf(m), { duration: 0.16, type: 'triangle' }) // the results point the note
  }
}
</script>

<template>
  <ClientOnly>
    <section class="holo-hero" :style="{ '--hue': hue }">
      <canvas ref="canvas" class="holo-hero__canvas" role="img" aria-label="holographic fractal hero — tap to play" @pointerdown="tap" />
      <div class="holo-hero__og">
        <span class="holo-hero__cat">{{ category }}</span>
        <strong class="holo-hero__title">{{ ogTitle }}</strong>
        <span v-if="ogDescription" class="holo-hero__desc">{{ ogDescription }}</span>
        <span v-if="tags.length" class="holo-hero__tags">
          <span v-for="tag in tags" :key="tag" class="holo-hero__tag">{{ tag }}</span>
        </span>
      </div>
      <input
        v-model.number="slider"
        class="holo-hero__slider"
        type="range"
        min="0"
        max="1000"
        aria-label="slide through dimensions"
        @input="onScrub"
        @dblclick="play"
      />
    </section>
  </ClientOnly>
</template>

<style scoped>
.holo-hero {
  position: relative;
  margin: 0 0 1.5rem;
  width: 100%;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  background: radial-gradient(circle at 50% 45%, hsla(var(--hue), 60%, 50%, 0.08), transparent 70%);
}
.holo-hero__canvas {
  width: 100%;
  display: block;
  cursor: pointer;
  touch-action: pan-y;
}
.holo-hero__og {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem 1.1rem 1.6rem;
  background: linear-gradient(to top, var(--vp-c-bg), transparent);
  pointer-events: none;
}
.holo-hero__cat {
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  text-transform: lowercase;
  color: hsl(var(--hue), 70%, 55%);
}
.holo-hero__title {
  font-size: clamp(1.1rem, 3vw, 1.9rem);
  line-height: 1.15;
  color: var(--vp-c-text-1);
}
.holo-hero__desc {
  font-size: 0.82rem;
  color: var(--vp-c-text-2);
  max-width: 46rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.holo-hero__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-top: 0.15rem;
}
.holo-hero__tag {
  font-size: 0.64rem;
  padding: 0.05rem 0.45rem;
  border-radius: 999px;
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-3);
}
.holo-hero__slider {
  position: absolute;
  right: 0.7rem;
  bottom: 0.5rem;
  width: 40%;
  max-width: 180px;
  height: 3px;
  accent-color: hsl(var(--hue), 75%, 55%);
  opacity: 0.55;
  cursor: ew-resize;
  transition: opacity 0.2s ease;
}
.holo-hero__slider:hover {
  opacity: 1;
}
</style>

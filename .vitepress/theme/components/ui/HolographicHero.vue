<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useData } from 'vitepress'
import { useDeviceEnergy } from '../../lib/useDeviceEnergy'
import { useTones } from '../../lib/useTones'

// Every page has an animated hero that merges all the page's related items —
// its category and holographic tags — in a holographic fractal: a self-similar
// figure (each branch a smaller copy of the whole) seeded deterministically from
// the page's own path, so the hero IS the page, in one figure. Zero dependencies,
// energy-aware, reduced-motion aware. Lives in components/ui (a shared primitive).
const { page, frontmatter } = useData()
const { saveEnergy } = useDeviceEnergy()
const { blip } = useTones()

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
  const baseLen = Math.min(w, h) * 0.17 * d.breath
  // the holographic fractal: arms symmetric copies of the same branching rule
  for (let a = 0; a < arms.value; a += 1) {
    const angle = (a / arms.value) * Math.PI * 2 + t * d.twist
    branch(ctx, cx, cy, baseLen, angle, 5, d)
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
function size() {
  const el = canvas.value
  if (!el) return
  const ratio = Math.min(window.devicePixelRatio || 1, 2)
  el.width = el.clientWidth * ratio
  el.height = 150 * ratio
  el.style.height = '150px'
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
  if (!saveEnergy.value) {
    const note = PENTA[Math.floor(x * PENTA.length) % PENTA.length]
    const octave = Math.floor(x * 2)
    blip(220 * Math.pow(2, (note + octave * 12) / 12), { duration: 0.16, type: 'triangle' }) // pitch follows the dimension
  }
}
</script>

<template>
  <ClientOnly>
    <section class="holo-hero" :style="{ '--hue': hue }">
      <canvas ref="canvas" class="holo-hero__canvas" role="img" aria-label="holographic fractal hero — tap to play" @pointerdown="tap" />
      <span class="holo-hero__cat">{{ category }}</span>
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
  margin: 0 0 1.25rem;
  height: 150px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  background: radial-gradient(circle at 50% 50%, hsla(var(--hue), 60%, 50%, 0.06), transparent 70%);
}
.holo-hero__canvas {
  width: 100%;
  display: block;
  cursor: pointer;
  touch-action: pan-y;
}
.holo-hero__cat {
  position: absolute;
  left: 0.8rem;
  bottom: 0.6rem;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: lowercase;
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
@media (prefers-reduced-motion: reduce) {
  .holo-hero { height: 110px; }
}
</style>

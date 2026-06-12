<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useData } from 'vitepress'
import { useDeviceEnergy } from '../../lib/useDeviceEnergy'
import { useTones } from '../../lib/useTones'
import { recordPlay } from '../../lib/usePlayMind'

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

// Tapping or clicking the hero produces harmonic music streams with visual effects:
// each tap streams a pair of healing (Solfeggio) frequencies and spawns a visual burst
// at the point — expanding rings and radiating sparks in the hero's hue — animated even
// when the movie is paused. The player controls toggle the music streams on and off;
// the streams are always in healing mode (the frequencies are always the Solfeggio set).
// Energy- and motion-aware.
const HEALING_PAIRS: readonly { hz: [number, number]; note: string }[] = [
  { hz: [174, 285], note: 'foundation · restoration' },
  { hz: [396, 528], note: 'release · transformation' },
  { hz: [417, 639], note: 'change · connection' },
  { hz: [528, 741], note: 'transformation · expression' },
  { hz: [639, 852], note: 'connection · intuition' },
  { hz: [741, 963], note: 'expression · unity' },
]
const musicOn = ref(true) // the player control: music streams on / off (always healing)
const healingPair = ref(HEALING_PAIRS[1].note) // the pair currently sounding
interface Burst { x: number; y: number; born: number; hue: number; sparks: { angle: number; speed: number }[] }
let bursts: Burst[] = []
let burstRaf = 0

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

// The trinity of rotation: a vector turned through all three planes — xy, yz, zx — so the hero
// tumbles in space, not just spins in the plane. Returns the rotated point; z drives perspective.
function rotate3(x: number, y: number, z: number, rxy: number, ryz: number, rzx: number) {
  // xy plane (about z)
  let X = x * Math.cos(rxy) - y * Math.sin(rxy)
  let Y = x * Math.sin(rxy) + y * Math.cos(rxy)
  let Z = z
  // yz plane (about x)
  const Y1 = Y * Math.cos(ryz) - Z * Math.sin(ryz)
  const Z1 = Y * Math.sin(ryz) + Z * Math.cos(ryz)
  Y = Y1
  Z = Z1
  // zx plane (about y)
  const Z2 = Z * Math.cos(rzx) - X * Math.sin(rzx)
  const X2 = Z * Math.sin(rzx) + X * Math.cos(rzx)
  Z = Z2
  X = X2
  return { X, Y, Z }
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
  // Walk the path from 0d to infinity and back, beyond: a smooth out-and-back envelope that
  // collapses the figure toward a point (0d) at the path's ends and opens it fully toward the
  // middle, while the trinity rotation carries on, so it never returns identical — beyond.
  const dimWalk = 0.5 - 0.5 * Math.cos(p * Math.PI * 2) // 0 at the ends (a point), 1 at the middle
  const baseLen = Math.min(w, h) * 0.22 * d.breath * (0.16 + 0.84 * dimWalk)
  // quantum responsiveness: depth and arm count adapt smoothly to the width
  const depth = cssWidth > 900 ? 6 : cssWidth > 520 ? 5 : 4
  const armCount = arms.value + (cssWidth > 800 ? 2 : cssWidth > 480 ? 1 : 0)
  // The trinity of rotational planes: three angles turning at distinct rates (xy, yz, zx), so the
  // fractal ring tumbles through space. Each arm is a 3D direction rotated through all three and
  // projected with perspective — arms turning toward the viewer grow, those turning away recede.
  const rXY = t * d.twist
  const rYZ = t * 0.33
  const rZX = t * 0.21
  const focal = 2.4
  // the holographic fractal: arms symmetric copies of the same branching rule, and the same form
  // spins in two opposite directions at once (the merkaba) — each arm drawn forward and reversed.
  for (let a = 0; a < armCount; a += 1) {
    const base = (a / armCount) * Math.PI * 2
    for (const dir of [1, -1]) {
      const v = rotate3(Math.cos(base), Math.sin(base), 0, rXY * dir, rYZ * dir, rZX * dir)
      const persp = focal / (focal - v.Z) // perspective: nearer (z>0) larger
      const angle = Math.atan2(v.Y, v.X)
      branch(ctx, cx, cy, baseLen * persp, angle, depth, d)
    }
  }
  // merge all related: the page's tags orbit the centre on a ring that tumbles through the same
  // three planes, but counter-rotating (the merkaba), each joined to the core.
  const n = tags.value.length
  const r = Math.min(w, h) * 0.34
  for (let i = 0; i < n; i += 1) {
    const base = (i / Math.max(1, n)) * Math.PI * 2
    const v = rotate3(Math.cos(base), Math.sin(base), 0, -rXY, -rYZ, -rZX) // counter-rotating ring
    const persp = focal / (focal - v.Z)
    const x = cx + v.X * r * persp
    const y = cy + v.Y * r * persp
    ctx.strokeStyle = `hsla(${(hue.value + 180) % 360}, 70%, 62%, ${0.18 + 0.22 * persp})`
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(cx, cy)
    ctx.lineTo(x, y)
    ctx.stroke()
    ctx.fillStyle = `hsl(${(hue.value + i * 24) % 360}, 80%, 60%)`
    ctx.beginPath()
    ctx.arc(x, y, Math.max(1, 3.5 * persp), 0, Math.PI * 2)
    ctx.fill()
  }
  // the holographic core
  ctx.fillStyle = `hsl(${hue.value}, 80%, 60%)`
  ctx.globalAlpha = 0.7 + (reduce ? 0 : 0.3 * Math.sin(t * 2))
  ctx.beginPath()
  ctx.arc(cx, cy, 5, 0, Math.PI * 2)
  ctx.fill()
  ctx.globalAlpha = 1
  // the tap's visual effects: expanding rings and radiating sparks in the hero's hue,
  // fading out over ~1.1s — the visual half of the harmonic music stream.
  const now = performance.now()
  bursts = bursts.filter((b) => now - b.born < 1100)
  for (const b of bursts) {
    const age = (now - b.born) / 1100 // 0..1
    const ring = age * Math.min(w, h) * 0.42
    ctx.strokeStyle = `hsla(${b.hue}, 85%, 62%, ${(1 - age) * 0.6})`
    ctx.lineWidth = 2 * (1 - age)
    ctx.beginPath()
    ctx.arc(b.x, b.y, ring, 0, Math.PI * 2)
    ctx.stroke()
    for (const s of b.sparks) {
      const reach = age * s.speed * Math.min(w, h) * 0.4
      const sx = b.x + Math.cos(s.angle) * reach
      const sy = b.y + Math.sin(s.angle) * reach
      ctx.fillStyle = `hsla(${(b.hue + s.angle * 30) % 360}, 90%, 64%, ${(1 - age) * 0.8})`
      ctx.beginPath()
      ctx.arc(sx, sy, 2.4 * (1 - age), 0, Math.PI * 2)
      ctx.fill()
    }
  }
}

// When the movie is paused (energy-saving or reduced motion), keep ticking briefly so
// a tap's burst still animates, then stop once the bursts have faded.
function animateBursts() {
  if (running) return // the main loop already animates the bursts
  const step = (time: number) => {
    draw(time)
    burstRaf = bursts.length > 0 ? requestAnimationFrame(step) : 0
  }
  if (!burstRaf) burstRaf = requestAnimationFrame(step)
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
  // Native resolution, uncapped to the device's full pixel ratio (guarded by a 64K ceiling).
  const ratio = window.devicePixelRatio || 1
  const w = el.clientWidth
  cssWidth = w
  const h = Math.min(Math.round((w * 630) / 1200), 460) // OG 1200x630, capped to a banner
  el.width = Math.min(61440, w * ratio)
  el.height = Math.min(61440, h * ratio)
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
  if (burstRaf) cancelAnimationFrame(burstRaf)
  burstRaf = 0
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

// Tapping the hero is a gesture: the tap's horizontal position sets the dimension and
// chooses a Solfeggio healing-frequency pair, which streams while a visual burst blooms
// at the point — so tapping across the hero plays it like a healing instrument.
// Energy- and motion-aware, and silent when the music control is off.
function tap(event: PointerEvent | MouseEvent) {
  const el = canvas.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  const x = Math.min(1, Math.max(0, (event.clientX - rect.left) / Math.max(1, rect.width)))
  manual.value = true
  slider.value = Math.round(x * 1000)
  if (!running) requestAnimationFrame((t) => draw(t))
  // playing the hero is play too: fold the play into the quantum mind (offline, silent).
  recordPlay('hero')
  // a visual burst at the tapped point — rings and sparks in the hero's hue
  const ratioY = Math.min(1, Math.max(0, (event.clientY - rect.top) / Math.max(1, rect.height)))
  bursts.push({
    x: x * el.width,
    y: ratioY * el.height,
    born: performance.now(),
    hue: (hue.value + x * 120) % 360,
    sparks: Array.from({ length: 10 }, (_, i) => ({ angle: (i / 10) * Math.PI * 2, speed: 0.5 + ((i * 7) % 10) / 10 })),
  })
  if (bursts.length > 12) bursts.shift()
  // a harmonic music stream, always in healing mode: tapping streams a PAIR of Solfeggio
  // healing frequencies — chosen by where you tap — gated by the music on/off control.
  if (musicOn.value && !saveEnergy.value) {
    const pair = HEALING_PAIRS[Math.min(HEALING_PAIRS.length - 1, Math.floor(x * HEALING_PAIRS.length))]
    healingPair.value = pair.note
    pair.hz.forEach((hz, i) => {
      window.setTimeout(() => blip(hz, { duration: 0.34, type: 'sine', peak: 0.09 - i * 0.015 }), i * 90)
    })
  }
  if (!running) animateBursts()
}
</script>

<template>
  <ClientOnly>
    <section class="holo-hero" :style="{ '--hue': hue }">
      <canvas ref="canvas" class="holo-hero__canvas" role="img" aria-label="holographic fractal hero — tap to play harmonic healing music streams" @pointerdown="tap" />
      <div class="holo-hero__controls">
        <button
          type="button"
          class="holo-hero__music"
          :class="{ 'holo-hero__music--off': !musicOn }"
          :aria-pressed="musicOn"
          :title="musicOn ? 'Healing music streams: on' : 'Healing music streams: off'"
          @click="musicOn = !musicOn"
        >♪ {{ musicOn ? 'on' : 'off' }}</button>
        <span class="holo-hero__mode">healing · {{ healingPair }}</span>
      </div>
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
.holo-hero__controls {
  position: absolute;
  top: 0.55rem;
  right: 0.6rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  z-index: 2;
}
.holo-hero__music {
  font-size: 0.7rem;
  line-height: 1;
  padding: 0.3rem 0.5rem;
  border-radius: 999px;
  border: 1px solid hsla(var(--hue), 70%, 55%, 0.6);
  background: hsla(var(--hue), 70%, 50%, 0.16);
  color: var(--vp-c-text-1);
  cursor: pointer;
}
.holo-hero__music--off {
  opacity: 0.55;
  border-style: dashed;
}
.holo-hero__mode {
  font-size: 0.62rem;
  letter-spacing: 0.04em;
  color: hsl(var(--hue), 60%, 58%);
  background: var(--vp-c-bg-soft);
  padding: 0.2rem 0.45rem;
  border-radius: 999px;
  opacity: 0.85;
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

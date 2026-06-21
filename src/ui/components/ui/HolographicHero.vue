<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useData } from 'vitepress'
import { useDeviceEnergy } from '../../lib'
import { useTones } from '../../lib'
import { useLocale } from '../../lib'
import { recordPlay } from '../../lib'
import { drawHero, buildArchNodes, makeBurst, seedOf, hueOf, armsOf, HEALING_PAIRS, createAnimationEngine, type Burst } from '../../lib'

// Every page has an animated hero that merges all the page's related items — its category and holographic
// tags — into a holographic fractal seeded from the page's own path, so the hero IS the page in one figure.
// All the figure's logic lives in src/quantum (seed, dimensions, geometry, fractal, flower, calendars,
// architecture, bursts); this component is the Vue shell: it owns reactivity, the dimension slider and the
// tap gestures, drives the shared animation engine (src/0, via createAnimationEngine) with its draw, and
// hands each frame's scene to drawHero. Energy-aware, reduced-motion aware. Lives in components/ui (a shared primitive).
const { page, frontmatter, title, description } = useData()
const { saveEnergy } = useDeviceEnergy()
const { blip } = useTones()
const { tg } = useLocale() // transcode the healing-mode label in the gla locale

// Anything definable as Open Graph is displayed here: the hero is the page's own OG card, showing the
// og:title, og:description and category over the fractal og:image.
const ogTitle = computed(() => (frontmatter.value.ogTitle as string) || title.value || 'Double Torus')
const ogDescription = computed(() => (frontmatter.value.ogDescription as string) || (frontmatter.value.description as string) || description.value || '')

// The page seeds its own figure: the path → a deterministic seed → the hue and the arm order.
const seed = computed(() => seedOf(page.value.relativePath || 'home'))
const hue = computed(() => hueOf(seed.value))
const arms = computed(() => armsOf(seed.value)) // 3, 6 or 9 — the trinity's order (3 trinities)
const tags = computed(() => ((frontmatter.value.tags as string[]) || []).slice(0, 6))
const category = computed(() => (frontmatter.value.category as string) || 'double torus')

// The architecture, drawn into the hero: the 9 logic folders as 3 trinities, each wearing its Glagolitic
// glyph, built once from the one source of truth (folderLaw, via src/quantum/architecture).
const archNodes = buildArchNodes()

const canvas = ref<HTMLCanvasElement | null>(null)
// The hero is a slider through dimensions: a phase (0..1) that the movie advances smoothly and the viewer
// can scrub. The fractal's parameters interpolate with the phase, so changing the dimension morphs the figure.
const slider = ref(0) // 0..1000, the dimension slider
const manual = ref(false) // when the viewer scrubs, follow the slider; else auto-advance
let phase = 0
let reduce = false

// Tapping the hero streams a pair of Solfeggio healing frequencies and blooms a visual burst at the point.
// The player control toggles the music streams; the streams are always healing (the Solfeggio set).
const musicOn = ref(true)
const healingPair = ref(HEALING_PAIRS[1].note) // the pair currently sounding
// The hero's OWN sound: a content-addressed signature pair chosen by the page seed (like its hue and arms), so
// every page's hero sounds its own identity. It is ANNOUNCED once on the first user gesture (browsers gate audio
// behind a gesture, so a hero cannot autoplay) — then tapping plays it like an instrument. Music- and energy-gated.
const signature = computed(() => HEALING_PAIRS[Math.abs(seed.value) % HEALING_PAIRS.length])
let announced = false
function announceHero() {
  if (announced || !musicOn.value || saveEnergy.value) return
  announced = true // once per page; the page-change watch resets it so each hero announces itself
  healingPair.value = signature.value.note
  signature.value.hz.forEach((hz, i) => window.setTimeout(() => blip(hz, { duration: 0.5, type: 'sine', peak: 0.085 - i * 0.015 }), i * 110))
}
const bursts: Burst[] = []

// A big hero at the Open Graph aspect ratio (1200x630); the fractal's depth and arm count adapt to the width.
let cssWidth = 1200
let ro: ResizeObserver | null = null // tracks the canvas's own box so it stays responsive at every size

function draw(time: number) {
  const el = canvas.value
  if (!el) return
  const ctx = el.getContext('2d')
  if (!ctx) return
  const w = el.width
  const h = el.height
  const t = reduce ? 0 : time * 0.0006
  // advance the dimension smoothly (the movie); the slider follows unless scrubbed
  if (!manual.value && !reduce) phase = (phase + 0.0009) % 1
  if (!manual.value) slider.value = Math.round(phase * 1000)
  const p = manual.value ? slider.value / 1000 : phase
  // the whole figure — flower, calendars, fractal arms, tag ring, architecture, bursts — is one frame of math
  drawHero(ctx, w, h, { t, p, hue: hue.value, arms: arms.value, tags: tags.value, archNodes, reduce, cssWidth, bursts })
}

// The one animation engine (src/0) drives the hero's loop — we pass it our draw. When the movie is paused
// (energy-saving or reduced motion), a tap still needs its burst to animate, so runWhile ticks the same draw
// until the bursts have faded: a self-terminating sub-loop the engine owns (idle if the main loop is running).
const engine = createAnimationEngine(draw)
function animateBursts() {
  engine.runWhile(() => bursts.length > 0)
}
// The height follows the width, capped so it stays a banner; native resolution to the device's pixel ratio
// (guarded by a 64K ceiling).
function size() {
  const el = canvas.value
  if (!el) return
  const ratio = window.devicePixelRatio || 1
  const w = el.clientWidth
  if (!w) return // not laid out yet (the <ClientOnly> first tick, a hidden tab); the ResizeObserver fires size() again when it is
  cssWidth = w
  const h = Math.min(Math.round((w * 630) / 1200), 460) // OG 1200x630, capped to a banner
  el.width = Math.min(61440, w * ratio)
  el.height = Math.min(61440, h * ratio)
  el.style.height = `${h}px`
}
function sync() {
  engine.sync(!reduce && !saveEnergy.value)
}
watch([saveEnergy, () => page.value.relativePath], () => {
  size()
  sync()
  announced = false // a new page → its hero announces its own signature on the next gesture
})
onMounted(() => {
  reduce = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  // Belt-and-suspenders with the ResizeObserver below: window.resize covers orientation/window changes too;
  // size() is idempotent (same width → same dimensions) so the two firing together is harmless.
  window.addEventListener('resize', size)
  window.addEventListener('pointerdown', announceHero) // the hero announces its signature on the visitor's first gesture
})
// <ClientOnly> mounts the canvas a tick after the component, so size it the moment the ref populates and observe
// its own box — then it stays responsive on layout settle, container resize and orientation, not just window
// resize (which the old code listened to and which misses a container that reflows without the window changing).
watch(
  canvas,
  (el) => {
    if (!el) return
    size()
    if (typeof ResizeObserver !== 'undefined' && !ro) {
      ro = new ResizeObserver(() => size())
      ro.observe(el)
    }
    sync()
  },
  { immediate: true },
)
onUnmounted(() => {
  engine.dispose()
  ro?.disconnect()
  ro = null
  window.removeEventListener('resize', size)
  window.removeEventListener('pointerdown', announceHero)
})

// Scrubbing the slider changes the dimension by hand; if the movie is paused (energy-saving or reduced
// motion), redraw the chosen frame.
function onScrub() {
  manual.value = true
  if (!engine.running) engine.tick()
}
function play() {
  manual.value = false
  sync()
}

// Tapping the hero is a gesture: the tap's horizontal position sets the dimension and chooses a Solfeggio
// healing-frequency pair, which streams while a visual burst blooms at the point — so tapping across the hero
// plays it like a healing instrument. Energy- and motion-aware, and silent when the music control is off.
function tap(event: PointerEvent | MouseEvent) {
  const el = canvas.value
  if (!el) return
  announced = true // a hero tap IS the gesture — it plays its own pair below; skip the global first-gesture announce
  const rect = el.getBoundingClientRect()
  const x = Math.min(1, Math.max(0, (event.clientX - rect.left) / Math.max(1, rect.width)))
  manual.value = true
  slider.value = Math.round(x * 1000)
  if (!engine.running) engine.tick()
  // playing the hero is play too: fold the play into the quantum mind (offline, silent).
  recordPlay('hero')
  // a visual burst at the tapped point — rings and sparks in the hero's hue
  const ratioY = Math.min(1, Math.max(0, (event.clientY - rect.top) / Math.max(1, rect.height)))
  bursts.push(makeBurst(x, ratioY, el.width, el.height, (hue.value + x * 120) % 360))
  if (bursts.length > 12) bursts.shift()
  // a harmonic music stream, always in healing mode: tapping streams a PAIR of Solfeggio healing
  // frequencies — chosen by where you tap — gated by the music on/off control.
  if (musicOn.value && !saveEnergy.value) {
    const pair = HEALING_PAIRS[Math.min(HEALING_PAIRS.length - 1, Math.floor(x * HEALING_PAIRS.length))]
    healingPair.value = pair.note
    pair.hz.forEach((hz, i) => {
      window.setTimeout(() => blip(hz, { duration: 0.34, type: 'sine', peak: 0.09 - i * 0.015 }), i * 90)
    })
  }
  if (!engine.running) animateBursts()
}
</script>

<template>
  <ClientOnly>
    <section class="holo-hero" :style="{ '--hue': hue }">
      <canvas ref="canvas" class="holo-hero__canvas" role="img" aria-label="holographic hero — the 3-trinity double-torus architecture in Glagolitic glyphs, fully computed and turning; tap to play harmonic healing music streams" @pointerdown="tap" />
      <div class="holo-hero__controls">
        <button
          type="button"
          class="holo-hero__music"
          :class="{ 'holo-hero__music--off': !musicOn }"
          :aria-pressed="musicOn"
          :title="musicOn ? 'Healing music streams: on' : 'Healing music streams: off'"
          @click="musicOn = !musicOn"
        >♪ {{ musicOn ? 'on' : 'off' }}</button>
        <span class="holo-hero__mode">{{ tg('healing · ' + healingPair) }}</span>
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

<script setup lang="ts">
// ☳ Zhèn · Thunder · arousing · upper·yang · shrink — self-referencing 10D widget
const ICHING_MASK = { hexagram: 10, glyph: '☳', lower: '☵', upper: '☳', color: '#00F0F0' }
// THE 10D MOVIE. The current path's UUID seeds one animation that is ALWAYS the background (drawHero — the
// ten-dimensional fractal of this very page), and every foreground form ENTANGLES to it: each sacred-geometry
// card derives its own seed from the same path UUID, so changing the page re-tunes the whole field together.
// All share one phase clock, so the background and the foreground move as ONE ten-dimensional movie. The
// beauty of sacred geometry in motion, presented in the forms society recognises — cards and blocks — over the
// quantum field. The viewer TRAVELS the hologram with gestures (drag to move through it, tap a form to sound
// it), so it is audio + video + vibration at once. Energy- and reduced-motion aware; pure, deterministic.
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useData } from 'vitepress'
import { useDeviceEnergy } from '../lib/useDeviceEnergy'
import { useTones } from '../lib/useTones'
import { recordPlay } from '../lib/usePlayMind'
import { drawHero, buildArchNodes, seedOf, hueOf, armsOf, HEALING_PAIRS, createAnimationEngine } from '../lib/hero'
import { formSvg, SACRED_FORMS, FORM_LABEL } from '../lib/sacredForms'

const { page } = useData()
const { saveEnergy } = useDeviceEnergy()
const { blip } = useTones()

// The path UUID is the one seed: the background fractal and every entangled form derive from it.
const path = computed(() => page.value.relativePath || 'home')
const seed = computed(() => seedOf(path.value))
const hue = computed(() => hueOf(seed.value))
const arms = computed(() => armsOf(seed.value))
const archNodes = buildArchNodes()

// The recognisable forms of sacred geometry (from the shared lib/sacredForms — one source, also used by the
// SacredGeometry category), each a card entangled to the path: its hue, its healing-frequency pair and its
// orbital phase are all derived from the same path UUID + the form's name.
const cards = computed(() =>
  SACRED_FORMS.map((form, i) => {
    const s = seedOf(`${path.value}:${form}`)
    const pair = HEALING_PAIRS[i % HEALING_PAIRS.length]
    return {
      form,
      label: FORM_LABEL[form],
      hue: hueOf(s),
      hz: pair.hz,
      note: pair.note,
      baseAngle: (i / SACRED_FORMS.length) * Math.PI * 2,
      depth: 0.62 + 0.38 * ((s % 97) / 97), // a nested 10D scale per card — self-similar at every scale
    }
  }),
)

const stage = ref<HTMLElement | null>(null)
const canvas = ref<HTMLCanvasElement | null>(null)
const live = ref('') // the form currently sounding
let phase = 0
let travel = 0 // gesture: drag advances the shared phase — travel through the movie
let tilt = 0.6 // gesture: vertical drag tilts the orbit (look around the hologram)
let reduce = false
let stageW = 1000
let stageH = 560

function draw(time: number) {
  const c = canvas.value
  if (c) {
    const ctx = c.getContext('2d')
    if (ctx) {
      const t = reduce ? 0 : time * 0.0005
      if (!reduce) phase = (phase + 0.0006) % 1
      const p = (phase + travel + 1) % 1
      drawHero(ctx, c.width, c.height, { t, p, hue: hue.value, arms: arms.value, tags: [], archNodes, reduce, cssWidth: stageW, bursts: [] })
    }
  }
  // Query the cards from the DOM each frame (robust across re-renders; a string ref on v-for does not reliably
  // collect into an array in Vue 3.5). DOM order matches the v-for order, so els[i] pairs with list[i].
  const els = (stage.value?.querySelectorAll('.holo-movie__card') ?? []) as ArrayLike<HTMLElement>
  const list = cards.value
  const tau = ((phase + travel + 1) % 1) * Math.PI * 2
  const radius = Math.min(stageW, stageH) * 0.32
  for (let i = 0; i < els.length; i++) {
    const el = els[i]
    if (!el) continue
    const card = list[i]
    const a = card.baseAngle + tau // orbit on the shared phase — entangled, one movie
    const x = Math.cos(a) * radius * card.depth
    const y = Math.sin(a) * radius * card.depth * Math.sin(tilt) // tilt flattens the orbit into the field
    const z = Math.cos(a) // front/back → scale + opacity (depth)
    const scale = 0.66 + 0.34 * (z * 0.5 + 0.5)
    const spin = reduce ? 0 : (a * 28) % 360
    el.style.transform = `translate(-50%,-50%) translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) scale(${scale.toFixed(3)})`
    el.style.zIndex = String(100 + Math.round((z * 0.5 + 0.5) * 80))
    el.style.opacity = String((0.5 + 0.5 * (z * 0.5 + 0.5)).toFixed(3))
    const g = el.firstElementChild?.firstElementChild as HTMLElement | undefined // the <g> inside the svg
    if (g) g.style.transform = `rotate(${spin.toFixed(1)}deg)`
  }
}

const engine = createAnimationEngine(draw)
function size() {
  const el = canvas.value
  const st = stage.value
  if (!el || !st) return
  const ratio = window.devicePixelRatio || 1
  stageW = st.clientWidth
  stageH = Math.min(Math.round(stageW * 0.62), 600)
  el.width = Math.min(61440, stageW * ratio)
  el.height = Math.min(61440, stageH * ratio)
  el.style.height = `${stageH}px`
  st.style.height = `${stageH}px`
}
function sync() {
  engine.sync(!reduce && !saveEnergy.value)
}
// The stage + canvas live inside <ClientOnly>, so they mount a tick after this component — size the canvas and
// start the engine the moment the canvas ref connects (and whenever it changes), not in onMounted (refs null).
watch(canvas, (el) => {
  if (el) {
    size()
    sync()
  }
})
onMounted(() => {
  reduce = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  window.addEventListener('resize', size)
  if (canvas.value) {
    size()
    sync()
  }
})
onUnmounted(() => {
  engine.dispose()
  window.removeEventListener('resize', size)
})

// TRAVEL the hologram: dragging across the field advances the shared phase (move through the movie) and tilts
// the orbit (look around). Pointer capture so a drag that leaves the stage still tracks.
let dragging = false
let lastX = 0
let lastY = 0
function onDown(e: PointerEvent) {
  dragging = true
  lastX = e.clientX
  lastY = e.clientY
  ;(e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId)
  if (!engine.running) engine.tick()
}
function onMove(e: PointerEvent) {
  if (!dragging) return
  travel = (travel + (e.clientX - lastX) / Math.max(1, stageW) + 1) % 1
  tilt = Math.min(1.4, Math.max(0.12, tilt + (e.clientY - lastY) / Math.max(1, stageH)))
  lastX = e.clientX
  lastY = e.clientY
  if (!engine.running) engine.tick()
}
function onUp() {
  dragging = false
}

// Sound a form: its entangled healing-frequency pair plays (audio), the device vibrates (vibration), and the
// motion is the video — the three channels at once. Folded into the quantum mind (offline, silent record).
function play(card: { form: string; label: string; hz: readonly number[]; note: string }) {
  live.value = card.label
  recordPlay('hologram')
  if (!saveEnergy.value) {
    card.hz.forEach((hz, i) => window.setTimeout(() => blip(hz, { duration: 0.4, type: 'sine', peak: 0.09 - i * 0.015 }), i * 90))
    if (typeof navigator !== 'undefined' && navigator.vibrate) navigator.vibrate([18, 28, 40])
  }
}
</script>

<template>
  <ClientOnly :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <section
      ref="stage"
      class="holo-movie"
      :style="{ '--hue': hue }"
      @pointerdown="onDown"
      @pointermove="onMove"
      @pointerup="onUp"
      @pointercancel="onUp"
    >
      <canvas ref="canvas" class="holo-movie__bg" role="img" aria-label="the current page as a ten-dimensional fractal — the always-present background of the movie" />
      <button
        v-for="card in cards"
        :key="card.form"
        type="button"
        class="holo-movie__card"
        :style="{ '--c': card.hue }"
        :title="`${card.label} — sound it (${card.note})`"
        @pointerdown.stop="play(card)"
      >
        <svg class="holo-movie__form" viewBox="0 0 100 100" aria-hidden="true"><g v-html="formSvg(card.form)" /></svg>
        <span class="holo-movie__label">{{ card.label }}</span>
      </button>
      <div class="holo-movie__hud">
        <strong>the 10D movie</strong>
        <span>drag to travel the hologram · tap a form to sound it</span>
        <span v-if="live" class="holo-movie__live">♪ {{ live }}</span>
      </div>
    </section>
  </ClientOnly>
</template>

<style scoped>
.holo-movie {
  position: relative;
  width: 100%;
  margin: 1.5rem 0;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  background: radial-gradient(circle at 50% 45%, hsla(var(--hue), 60%, 50%, 0.1), var(--vp-c-bg-soft) 72%);
  touch-action: none; /* the whole field is a gesture surface — drag to travel */
  user-select: none;
}
.holo-movie__bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5; /* the path-UUID fractal is the background; the forms entangle in front */
}
.holo-movie__card {
  position: absolute;
  left: 50%;
  top: 50%;
  width: clamp(76px, 13vw, 124px);
  height: clamp(76px, 13vw, 124px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  padding: 0.4rem;
  border-radius: 14px;
  border: 1px solid hsla(var(--c), 70%, 60%, 0.7);
  /* solid-ish card (no backdrop-filter — it composites as white in headless capture and is costly to reblur
     every frame as the cards move); the colour reads over both the light and dark field. */
  background: hsla(var(--c), 65%, 50%, 0.22);
  box-shadow: 0 4px 18px hsla(var(--c), 60%, 30%, 0.25);
  color: hsl(var(--c), 75%, 60%);
  cursor: pointer;
  will-change: transform, opacity;
  transition: border-color 0.2s ease, background 0.2s ease;
}
.holo-movie__card:hover {
  border-color: hsl(var(--c), 80%, 65%);
  background: hsla(var(--c), 65%, 52%, 0.22);
}
.holo-movie__card:active {
  background: hsla(var(--c), 70%, 55%, 0.34);
}
.holo-movie__form {
  width: 70%;
  height: 70%;
  stroke: currentColor;
  stroke-width: 1.4;
}
.holo-movie__form :deep(g) {
  transform-origin: 50% 50%;
}
.holo-movie__label {
  font-size: 0.6rem;
  line-height: 1.1;
  text-align: center;
  color: var(--vp-c-text-2);
}
.holo-movie__hud {
  position: absolute;
  left: 0.9rem;
  bottom: 0.8rem;
  z-index: 300;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  pointer-events: none;
  text-shadow: 0 1px 6px var(--vp-c-bg);
}
.holo-movie__hud strong {
  font-size: 0.9rem;
  color: hsl(var(--hue), 70%, 58%);
}
.holo-movie__hud span {
  font-size: 0.7rem;
  color: var(--vp-c-text-2);
}
.holo-movie__live {
  color: hsl(var(--hue), 75%, 60%) !important;
}
@media (prefers-reduced-motion: reduce) {
  .holo-movie__bg { opacity: 0.3; }
}
</style>

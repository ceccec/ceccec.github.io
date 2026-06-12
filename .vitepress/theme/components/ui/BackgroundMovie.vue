<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { buildMatrix, threeWordWaves, seedFromText } from '../../lib/quantumMind'
import { useDeviceEnergy } from '../../lib/useDeviceEnergy'
import { useTones } from '../../lib/useTones'
import { usePlayMind, recordPlay, noteOf, artBiasOf } from '../../lib/usePlayMind'

// Entangled groups of digits fill the background movie as colourful watermarks,
// folding into letters, words and sentences — colourful streams to the void at the
// centre — and resurrect as split streams in new dimensions, animated with the same
// dry math: every digit, colour and path is deterministic (a seeded fold), nothing
// random. A full-viewport watermark behind the content. Lives in components/ui.
const { saveEnergy } = useDeviceEnergy()
const { blip } = useTones()
const { mind } = usePlayMind() // the student's quantum mind, formed by playing

const TAU = Math.PI * 2
const GOLDEN = Math.PI * (3 - Math.sqrt(5)) // the golden angle — new dimension on resurrection
// The word bank is the portal's own words (dry math, content-addressed).
const matrix = buildMatrix()
const words = threeWordWaves(matrix).waves.flatMap((w) => w.words)
const phrases = threeWordWaves(matrix).waves.map((w) => w.phrase)
const glyphForDigit = '0123456789' // digits themselves, the raw stream

// A deterministic seeded generator — dry math, not Math.random.
function lcg(seedStr: string) {
  let s = seedFromText(seedStr, 8) || 1
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0
    return s / 0xffffffff
  }
}

interface P {
  theta: number
  r: number
  dir: number // -1 inbound (to the void), +1 outbound (resurrected, splitting)
  speed: number
  group: number // which entangled group / word
  digit: number
  dim: number // the dimension the split resurrects into
}

const N = 130
let particles: P[] = []
function makeParticles(seed: string, R: number) {
  const rng = lcg(seed)
  particles = Array.from({ length: N }, (_, i) => {
    const digit = Math.floor(rng() * 10)
    return {
      theta: rng() * TAU,
      r: rng() * R,
      dir: rng() < 0.5 ? -1 : 1,
      speed: (0.18 + rng() * 0.5),
      group: i % Math.max(1, words.length),
      digit,
      dim: i % 4,
    }
  })
}

const canvas = ref<HTMLCanvasElement | null>(null)
let raf = 0
let running = false
let reduce = false
let cx = 0
let cy = 0
let R = 600

// The interactive movie game: a tap anywhere that isn't a control plays the movie —
// a tone whose pitch maps to where you tapped, a light vibration, and a ripple that
// scatters the nearest streams. Sound and vibration fused into the game.
interface Ripple { x: number; y: number; born: number; hue: number }
let ripples: Ripple[] = []
const PENTA = [0, 2, 4, 7, 9, 12]
function isControl(el: EventTarget | null): boolean {
  let node = el as HTMLElement | null
  for (let i = 0; node && i < 6; i += 1) {
    const tag = node.tagName
    if (tag === 'A' || tag === 'BUTTON' || tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || tag === 'LABEL') return true
    if (node.getAttribute?.('role') === 'button' || node.isContentEditable) return true
    node = node.parentElement
  }
  return false
}
function onTap(event: PointerEvent) {
  if (event.button !== 0 && event.pointerType === 'mouse') return
  if (isControl(event.target)) return // never steal a click from a control
  const x = event.clientX
  const y = event.clientY
  const ratio = Math.min(window.devicePixelRatio || 1, 1.5)
  const ix = x * ratio
  const iy = y * ratio
  const k = Math.min(1, Math.hypot(ix - cx, iy - cy) / (R || 1))
  const hue = Math.round((1 - k) * 320)
  ripples.push({ x: ix, y: iy, born: performance.now(), hue })
  if (ripples.length > 24) ripples.shift()
  // scatter the nearest streams outward — the streams react to the tap
  for (const p of particles) {
    const px = cx + Math.cos(p.theta) * p.r
    const py = cy + Math.sin(p.theta) * p.r * 0.62
    if (Math.hypot(px - ix, py - iy) < 90 * ratio) p.dir = 1
  }
  // playing IS the exam: fold this play into the quantum mind (silent, offline),
  // and let the results point the musical note the play now sounds.
  const m = recordPlay('movie')
  if (!saveEnergy.value) {
    blip(noteOf(m), { duration: 0.18, type: 'sine' }) // the results point the note
    if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
      navigator.vibrate([8, 16, 8]) // a light haptic, fused with the sound
    }
  }
  if (!running) requestAnimationFrame((t) => draw(t))
}

function draw(time: number) {
  const el = canvas.value
  if (!el) return
  const ctx = el.getContext('2d')
  if (!ctx) return
  const w = el.width
  const h = el.height
  // gentle fade trail instead of full clear — colourful streams leave a wake
  ctx.fillStyle = 'rgba(0,0,0,0)'
  ctx.clearRect(0, 0, w, h)
  cx = w / 2
  cy = h / 2
  R = Math.hypot(cx, cy)
  const t = reduce ? 0 : time * 0.001
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  for (const p of particles) {
    if (!reduce) p.r += p.dir * p.speed * (0.6 + p.r / R) // accelerate away from the void
    if (p.r <= 1) {
      // reached the void: resurrect outbound, split into a new dimension (new angle)
      p.dir = 1
      p.r = 1
      p.theta += GOLDEN * (1 + p.dim)
      p.group = (p.group + 1) % Math.max(1, words.length)
      p.digit = (p.digit * 2) % 10 // the doubling stream
      p.dim = (p.dim + 1) % 4
    } else if (p.r >= R) {
      // reached the edge: converge again, streaming back to the void
      p.dir = -1
      p.r = R
      p.theta += 0.2
    }
    const k = p.r / R // 0 at the void, 1 at the edge
    const x = cx + Math.cos(p.theta) * p.r
    const y = cy + Math.sin(p.theta) * p.r * 0.62 // squash → perspective toward the void
    // the stream of art continues in balance with the individual: a gentle hue bias
    // from the student's own quantum mind (a third of the way, never overwhelming).
    const bias = artBiasOf(mind.value) * 0.33
    const hue = (p.digit * 36 + p.dim * 90 + t * 12 + bias) % 360
    const alpha = 0.5 * (1 - k) + 0.06 // brightest folding into the void
    const size = 8 + (1 - k) * 18 // grows folding into the void
    ctx.fillStyle = `hsla(${hue}, 80%, 60%, ${alpha * 0.42})`
    ctx.font = `${size}px var(--vp-font-family-mono, monospace)`
    let text: string
    if (k > 0.66) text = glyphForDigit[p.digit] // far: the raw digit
    else if (k > 0.34) {
      const word = words[p.group]
      text = word[(p.digit + p.dim) % word.length].toUpperCase() // mid: a letter
    } else if (k > 0.12) text = words[p.group] // near: the folded word
    else text = phrases[p.group % phrases.length] // at the void: the sentence
    ctx.fillText(text, x, y)
  }
  // the game's ripples: expanding rings where the player tapped
  const now = performance.now()
  ripples = ripples.filter((rp) => now - rp.born < 900)
  for (const rp of ripples) {
    const age = (now - rp.born) / 900
    ctx.strokeStyle = `hsla(${rp.hue}, 85%, 62%, ${(1 - age) * 0.5})`
    ctx.lineWidth = 2 * (1 - age)
    ctx.beginPath()
    ctx.arc(rp.x, rp.y, age * 120 * (window.devicePixelRatio || 1), 0, TAU)
    ctx.stroke()
  }
}

function loop(time: number) {
  if (!running) return
  draw(time)
  raf = requestAnimationFrame(loop)
}
function size() {
  const el = canvas.value
  if (!el) return
  const ratio = Math.min(window.devicePixelRatio || 1, 1.5)
  el.width = window.innerWidth * ratio
  el.height = window.innerHeight * ratio
  el.style.width = `${window.innerWidth}px`
  el.style.height = `${window.innerHeight}px`
  makeParticles('background-movie:dry-math', Math.hypot(el.width / 2, el.height / 2))
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
  if (reduce || saveEnergy.value || document.hidden) {
    stop()
    requestAnimationFrame((t) => draw(t))
  } else start()
}
onMounted(() => {
  reduce = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  size()
  window.addEventListener('resize', size)
  document.addEventListener('visibilitychange', sync)
  window.addEventListener('pointerdown', onTap)
  sync()
})
onUnmounted(() => {
  stop()
  window.removeEventListener('resize', size)
  document.removeEventListener('visibilitychange', sync)
  window.removeEventListener('pointerdown', onTap)
})
</script>

<template>
  <ClientOnly>
    <canvas ref="canvas" class="bg-movie" aria-hidden="true" />
  </ClientOnly>
</template>

<style scoped>
.bg-movie {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  opacity: 0.7;
}
</style>

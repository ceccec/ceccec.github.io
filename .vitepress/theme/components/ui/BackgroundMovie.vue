<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useData } from 'vitepress'
import { buildMatrix, threeWordWaves, seedFromText } from '../../lib/quantumMind'
import { useDeviceEnergy } from '../../lib/useDeviceEnergy'
import { useTones } from '../../lib/useTones'
import { usePlayMind, recordPlay, noteOf, artBiasOf } from '../../lib/usePlayMind'

// Entangled groups of digits fill the background movie as colourful watermarks,
// folding into letters, words and sentences — colourful streams to the void at the
// centre — and resurrect as split streams in new dimensions, animated with the same
// dry math: every digit, colour and path is deterministic (a seeded fold), nothing
// random. A full-viewport watermark behind the content. The whole background is one
// endless movie on every page, but it is never generic: it is seeded from the page
// you are on — its path, title, description and references — and its streams fold the
// page's OWN words, so the background exactly matches the content. Lives in components/ui.
const { page, frontmatter, title, description } = useData()
const { saveEnergy } = useDeviceEnergy()
const { blip } = useTones()
const { mind } = usePlayMind() // the student's quantum mind, formed by playing

const TAU = Math.PI * 2
const GOLDEN = Math.PI * (3 - Math.sqrt(5)) // the golden angle — new dimension on resurrection
// The portal's own words are the base bank (dry math, content-addressed); the page's
// own words lead it, so the movie reads the content you are on back to you.
const matrix = buildMatrix()
const baseWords = threeWordWaves(matrix).waves.flatMap((w) => w.words)
const basePhrases = threeWordWaves(matrix).waves.map((w) => w.phrase)
let words = baseWords
let phrases = basePhrases
const glyphForDigit = '0123456789' // digits themselves, the raw stream

// The page's references: the frontmatter fields that name what the page is about.
function pageReferences(): string[] {
  const fm = (frontmatter.value || {}) as Record<string, unknown>
  const refs: string[] = []
  for (const key of ['keywords', 'tags', 'teaches', 'audience'] as const) {
    const value = fm[key]
    if (Array.isArray(value)) refs.push(...value.map((entry) => String(entry)))
    else if (typeof value === 'string') refs.push(value)
  }
  if (typeof fm.category === 'string') refs.push(fm.category)
  return refs
}
// The seed IS the page: path, title, description and references fold to one seed, so
// the same page always plays the same movie, and a different page a different one.
function pageSeed(): string {
  return [page.value.relativePath || 'home', title.value || '', description.value || '', ...pageReferences()].join('|')
}
// The page's own words become the streams that fold to letters, words and the
// sentence at the void — so the background reads the content back to you.
function pageWords(): string[] {
  const source = [title.value || '', ...pageReferences()].join(' ')
  const unique = Array.from(new Set(source.split(/[^A-Za-z]+/).map((w) => w.trim()).filter((w) => w.length >= 3)))
  return unique.slice(0, 16)
}
// Match the movie to the page: page words lead the bank and the title is the sentence
// at the void; fall back to the portal's words where a page names nothing.
function applyPage() {
  const pw = pageWords()
  words = pw.length ? [...pw, ...baseWords] : baseWords
  phrases = [(title.value || basePhrases[0] || 'double torus').toString(), ...basePhrases]
}

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
interface Ripple { x: number; y: number; born: number; hue: number; remote?: boolean }
let ripples: Ripple[] = []

// Let all realtime participants participate in the movie. Every participant on the same
// origin shares one canvas of effects: each tap is broadcast on a same-origin channel,
// and every other participant's tap blooms here as a colourful, rainbow-ringed ripple —
// so the movie is collective, made of everyone's touches. No server, no network beyond
// the local BroadcastChannel; presence is ephemeral and anonymous, energy- and
// reduced-motion-aware (a participant at rest sees no remote motion either).
let movieChannel: BroadcastChannel | null = null
function spawnRemoteRipple(nx: number, ny: number, hue: number) {
  if (reduce || saveEnergy.value) return // honour the local participant's motion/energy choice
  const el = canvas.value
  if (!el) return
  const ix = nx * el.width
  const iy = ny * el.height
  ripples.push({ x: ix, y: iy, born: performance.now(), hue, remote: true })
  if (ripples.length > 32) ripples.shift()
  // a participant's touch scatters the nearest streams here too — shared motion
  for (const p of particles) {
    const px = cx + Math.cos(p.theta) * p.r
    const py = cy + Math.sin(p.theta) * p.r * 0.62
    if (Math.hypot(px - ix, py - iy) < 90) p.dir = 1
  }
  if (!running) requestAnimationFrame((t) => draw(t))
}
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
  // broadcast this touch so every realtime participant sees it bloom in their movie
  movieChannel?.postMessage({ x: x / window.innerWidth, y: y / window.innerHeight, hue })
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
  const dpr = window.devicePixelRatio || 1
  for (const rp of ripples) {
    const age = (now - rp.born) / 900
    const baseR = age * 120 * dpr
    // a participant's ripple blooms in colourful rainbow rings; your own is one ring
    const rings = rp.remote ? 3 : 1
    for (let ring = 0; ring < rings; ring += 1) {
      const radius = Math.max(0, baseR - ring * 14 * dpr)
      ctx.strokeStyle = `hsla(${(rp.hue + ring * 40) % 360}, 90%, 62%, ${(1 - age) * (rp.remote ? 0.55 : 0.5)})`
      ctx.lineWidth = (rp.remote ? 2.4 : 2) * (1 - age)
      ctx.beginPath()
      ctx.arc(rp.x, rp.y, radius, 0, TAU)
      ctx.stroke()
    }
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
  makeParticles(pageSeed(), Math.hypot(el.width / 2, el.height / 2))
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
  applyPage()
  size()
  window.addEventListener('resize', size)
  document.addEventListener('visibilitychange', sync)
  window.addEventListener('pointerdown', onTap)
  // open the shared movie channel: all same-origin participants paint into one movie
  if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
    movieChannel = new BroadcastChannel('double-torus-movie')
    movieChannel.onmessage = (event: MessageEvent) => {
      const data = event.data as { x?: number; y?: number; hue?: number }
      if (typeof data?.x === 'number' && typeof data?.y === 'number') {
        spawnRemoteRipple(data.x, data.y, Number(data.hue) || 200)
      }
    }
  }
  sync()
})
// The background is endless and global, but never the same: when the route changes,
// re-seed from the new page so the movie keeps matching its content and references.
watch(() => page.value.relativePath, () => {
  applyPage()
  size()
  sync()
})
onUnmounted(() => {
  stop()
  window.removeEventListener('resize', size)
  document.removeEventListener('visibilitychange', sync)
  window.removeEventListener('pointerdown', onTap)
  movieChannel?.close()
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

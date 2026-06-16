<script setup lang="ts">
// ☲ Lí · Fire · clinging · upper·yang · breath — self-referencing 10D widget
const ICHING_MASK = { hexagram: 44, name: 'Bì', glyph: '☲☶', lower: 'Gèn', upper: 'Lí', color: '#F0FF00' } as const
import { computed, ref } from 'vue'
import { useLocale } from '../lib/useLocale'
import { buildMatrix, plasmaContainment, a432 } from '../lib/quantumMind'
import { dims } from '../lib/hero'
import { useAnimationEngine } from '../lib/useAnimationEngine'

// Quantum plasma contained by bit logic. A continuous, flowing plasma field —
// movement — gated by the 128 bits of the double-torus word: the plasma shows
// only in cells whose bit is set, dark where it is not. Analog contained by
// digital. Zero dependencies, client-side, energy-aware (pauses when hidden or
// on low battery, leaving a static frame).
//
// The plasma's MOTION is driven by dims(p) — the ten self-similar dimensions:
// the four genus-2 homology loops (loopA1/B1/A2/B2, coprime quasiperiodic) set
// the four sines' phase rates, twist tilts the diagonal wave, breath modulates
// the radial amplitude — so the field never repeats. Its COLOUR is anchored on
// A432: frequencyToLight(432).hue (~red-orange) is the base, hueShift slides it
// through the wheel deterministically. Same field, the rates/hues now sourced.
const matrix = buildMatrix()
const containment = plasmaContainment(matrix)
const { bg } = useLocale()

// A432 colour anchor: 432 Hz doubled to visible light ≈ 631 nm, a red-orange (hue ~5).
const A432 = a432()
const PLASMA_HUE = A432.light.hue

const canvas = ref<HTMLCanvasElement | null>(null)

function draw(time: number) {
  const el = canvas.value
  if (!el) return
  const ctx = el.getContext('2d')
  if (!ctx) return
  const w = el.width
  const h = el.height
  const cols = containment.cols
  const rows = containment.rows
  const cw = w / cols
  const ch = h / rows
  const t = time * 0.0012
  // The ten dimensions at this instant. p loops once every ~5200 ms; the four homology loops
  // (quasiperiodic, coprime rates) drive the four sines' phases, twist tilts the diagonal wave,
  // breath modulates the radial amplitude — so the plasma flows the genus-2 torus, never repeating.
  const d = dims((time * 0.00019) % 1)
  const pCol = t * (1 + d.loopA1 * 0.4)
  const pRow = -t * (1.1 + d.loopB1 * 0.4)
  const pDiag = t * (0.7 + d.loopA2 * 0.3) + d.twist
  const pRad = -t * (1 + d.loopB2 * 0.3)
  const radAmp = d.breath // ~0.85..1: the radial wave breathes
  ctx.clearRect(0, 0, w, h)
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const bit = containment.bits[row * cols + col]
      const x = col * cw
      const y = row * ch
      if (!bit) {
        // The bit is unset: the container wall. The plasma cannot flow here.
        ctx.fillStyle = 'var(--vp-c-bg)'
        ctx.fillStyle = 'rgba(0,0,0,0.18)'
        ctx.fillRect(x, y, cw, ch)
        ctx.strokeStyle = 'rgba(120,120,140,0.10)'
        ctx.strokeRect(x, y, cw, ch)
        continue
      }
      // Classic plasma: a sum of sines, animated; the phase rates come from the homology loops.
      const v =
        Math.sin(col * 0.6 + pCol) +
        Math.sin(row * 0.7 + pRow) +
        Math.sin((col + row) * 0.5 + pDiag) +
        radAmp * Math.sin(Math.hypot(col - cols / 2, row - rows / 2) * 0.6 + pRad)
      // Hue anchored on A432's red-orange, slid through the wheel by the field and hueShift dimension.
      const hue = (PLASMA_HUE + d.hueShift + ((v + 4) / 8) * 120) % 360
      const light = 45 + ((v + 4) / 8) * 25
      ctx.fillStyle = `hsl(${Math.round(hue)}, 80%, ${Math.round(light)}%)`
      ctx.fillRect(x, y, cw + 0.5, ch + 0.5)
    }
  }
}

function sizeCanvas() {
  const el = canvas.value
  if (!el) return
  const ratio = Math.min(window.devicePixelRatio || 1, 2)
  el.width = el.clientWidth * ratio
  el.height = 200 * ratio
  el.style.height = '200px'
}

useAnimationEngine(canvas, draw, sizeCanvas)

const caption = computed(() =>
  bg.value
    ? `Квантова плазма, удържана от битова логика: непрекъснатото поле тече само където бит е вдигнат — ${containment.ones} от 128 бита на 128-битовата дума.`
    : `Quantum plasma contained by bit logic: the continuous field flows only where a bit is set — ${containment.ones} of the 128 bits of the 128-bit word.`,
)
</script>

<template>
  <section class="plasma dt-card" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <p class="eyebrow">{{ bg ? 'квантова плазма · удържана от битове' : 'quantum plasma · contained by bits' }}</p>
    <canvas ref="canvas" class="plasma__canvas" />
    <p class="plasma__caption">{{ caption }}</p>
  </section>
</template>

<style scoped>
.plasma {
  margin: 1.25rem 0;
  border-radius: 12px;
  padding: 1rem 1.25rem;
}
.plasma__canvas {
  width: 100%;
  display: block;
  border-radius: 8px;
  image-rendering: pixelated;
}
.plasma__caption {
  margin: 0.6rem 0 0;
  font-size: 0.78rem;
  color: var(--vp-c-text-2);
}
</style>

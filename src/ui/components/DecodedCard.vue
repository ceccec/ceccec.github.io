<script setup lang="ts">
// ☵ Kǎn · Water · abysmal · upper·yang · breath — the shared decode card, now an interactive 10D widget
const ICHING_MASK = { hexagram: 19, glyph: '☵', lower: '☱', upper: '☵', color: '#0F00FF' } as const
import { computed, ref } from 'vue'
import { useLocale, useAnimationEngine, dims as dimsAt, seedFromText } from '../lib'

// The shared renderer for a decoded-knowledge fold: a verified statement, the fold's data list, and the honest
// boundary (documented kept, legend flagged). Every domain fold has the same { statement, items, boundary }
// shape, so one card renders all of them — "decode in reusable code", DRY across the domain pages. It is now an
// INTERACTIVE 10D WIDGET: a content-addressed background (seeded from this card's own text) breathes through the
// ten dimensions (dims) as two counter-rotating rings — the same genesis motion as the matrix, miniaturised per
// card and self-similar; hover intensifies it. Energy- and viewport-aware (only visible cards animate), behind
// the text so it stays readable. One edit here makes every decode card across the portal a living widget.
const props = defineProps<{
  eyebrow: string
  eyebrowBg?: string
  statement: string
  items: { label: string; detail?: string }[]
  boundary?: string
}>()
const { bg } = useLocale()
const eyebrowText = computed(() => (bg.value && props.eyebrowBg ? props.eyebrowBg : props.eyebrow))
const boundaryLabel = computed(() => (bg.value ? 'Граница' : 'Boundary'))

// content-address: this card's own text seeds its hue and point-count, so each card has its own 10D motion
const seed = seedFromText(`${props.eyebrow}|${props.statement}`)
const baseHue = seed % 360
const points = 6 + (seed % 4) // 6–9 points per ring
const bgCanvas = ref<HTMLCanvasElement | null>(null)
const hover = ref(false)

function draw(time: number) {
  const el = bgCanvas.value
  if (!el) return
  const ctx = el.getContext('2d')
  if (!ctx) return
  const w = el.width
  const h = el.height
  ctx.clearRect(0, 0, w, h)
  const cx = w / 2
  const cy = h / 2
  const p = (((time * 0.000013) % 1) + 1) % 1
  const dim = dimsAt(p)
  const rot = time * 0.0002 * (1 + 0.5 * dim.twist)
  const breath = 0.9 + 0.1 * Math.max(0, Math.min(1, (dim.breath - 0.85) / 0.15))
  const amp = hover.value ? 1 : 0.5 // hover intensifies the field
  const R = Math.min(w, h) * 0.4
  const hue = (baseHue + dim.hueShift * 120) % 360
  for (let ring = 0; ring < 2; ring += 1) {
    const dir = ring === 0 ? 1 : -1 // the two rings counter-rotate
    const rr = R * (ring === 0 ? 0.55 : 1) * breath
    ctx.strokeStyle = `hsla(${(hue + ring * 40) % 360}, 64%, 60%, ${0.05 * amp})`
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.arc(cx, cy, rr, 0, Math.PI * 2)
    ctx.stroke()
    for (let k = 0; k < points; k += 1) {
      const a = (k / points) * Math.PI * 2 + dir * rot
      const rk = rr * (1 + 0.12 * Math.sin(a * 2 + time * 0.0004 * (1 + dim.loopA1))) // 4D fold wobble (loopA1)
      const x = cx + Math.cos(a) * rk
      const y = cy + Math.sin(a) * rk
      ctx.fillStyle = `hsla(${(hue + k * 12) % 360}, 70%, 62%, ${0.18 * amp})`
      ctx.beginPath()
      ctx.arc(x, y, 2.2 * (hover.value ? 1.4 : 1), 0, Math.PI * 2)
      ctx.fill()
    }
  }
}
function sizeCanvas() {
  const el = bgCanvas.value
  if (!el) return
  const ratio = Math.min(window.devicePixelRatio || 1, 2)
  el.width = Math.max(1, el.clientWidth) * ratio
  el.height = Math.max(1, el.clientHeight) * ratio
}
useAnimationEngine(bgCanvas, draw, sizeCanvas)
</script>

<template>
  <section
    class="decoded dt-card"
    :data-hexagram="ICHING_MASK.hexagram"
    :data-trigram="ICHING_MASK.glyph"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <canvas ref="bgCanvas" class="decoded__bg" aria-hidden="true" />
    <p class="eyebrow">{{ eyebrowText }}</p>
    <p class="decoded__statement">{{ statement }}</p>
    <ul class="decoded__items">
      <li v-for="(it, i) in items" :key="i">
        <span class="decoded__label">{{ it.label }}</span>
        <span v-if="it.detail" class="decoded__detail">{{ it.detail }}</span>
      </li>
    </ul>
    <p v-if="boundary" class="decoded__boundary"><strong>{{ boundaryLabel }}:</strong> {{ boundary }}</p>
  </section>
</template>

<style scoped>
.decoded {
  position: relative;
  overflow: hidden;
  margin: 1.25rem 0;
  border-radius: 12px;
  padding: 1rem 1.25rem;
}
.decoded__bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.6;
  pointer-events: none;
}
.decoded > p,
.decoded > ul {
  position: relative;
  z-index: 1;
}
.decoded__statement {
  margin: 0.2rem 0 0.8rem;
  font-size: 0.9rem;
  color: var(--vp-c-text-1);
}
.decoded__items {
  list-style: none;
  padding: 0;
  margin: 0 0 0.8rem;
  display: grid;
  gap: 0.4rem;
}
.decoded__items li {
  border: 1px solid var(--vp-c-divider);
  /* the card's own I Ching hexagram hue, inherited from the enclosing LayersPanel's --lp-accent
     (cascades to this slotted card); falls back to the brand when used standalone */
  border-left: 3px solid var(--lp-accent, var(--vp-c-brand-1));
  border-radius: 8px;
  padding: 0.4rem 0.6rem;
  font-size: 0.84rem;
  background: color-mix(in srgb, var(--vp-c-bg) 78%, transparent);
  transition: border-color 0.15s, background 0.15s;
}
.decoded__items li:hover {
  background: color-mix(in srgb, var(--lp-accent, var(--vp-c-brand-1)) 5%, var(--vp-c-bg));
  border-left-color: var(--lp-accent, var(--vp-c-brand-1));
}
.decoded__label {
  font-weight: 600;
  color: var(--vp-c-text-1);
}
.decoded__detail {
  display: block;
  margin-top: 0.15rem;
  font-size: 0.78rem;
  color: var(--vp-c-text-2);
}
.decoded__boundary {
  margin: 0;
  font-size: 0.76rem;
  color: var(--vp-c-text-3);
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 0.55rem;
}
.decoded__boundary strong {
  color: var(--lp-accent, var(--vp-c-brand-1));
}
</style>

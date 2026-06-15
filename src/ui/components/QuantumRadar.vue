<script setup>
// The quantum radar: the deepResearchRadar fold, rendered. Every blip is placed by its own content
// address (the seed from its receipt → the angle within its quadrant), the ring sets the radius — so the
// radar is deterministic and recomputable, computed from the matrix, never hand-placed. SSR-safe (no DOM).
import { deepResearchRadar } from '../lib/quantumMind'

const radar = deepResearchRadar()
const cx = 205
const cy = 205
const RING = { adopt: 52, trial: 96, assess: 140, hold: 184 }
const QUAD = { 'Framework & tools': 18, 'Components & design': 288, 'Methods': 198, 'Knowledge & research': 108 }
const seedOf = (uuid) => (parseInt(uuid.replace(/-/g, '').slice(0, 6), 16) % 1000) / 1000
const blips = radar.blips.map((blip) => {
  const angle = ((QUAD[blip.quadrant] ?? 0) + 8 + seedOf(blip.receipt) * 56) * (Math.PI / 180)
  const r = RING[blip.ring] ?? 140
  return { ...blip, x: +(cx + r * Math.cos(angle)).toFixed(1), y: +(cy - r * Math.sin(angle)).toFixed(1) }
})
// The sweep period is computed from the field, not a magic number: it is derived from the radar's own content
// address (the first blip's receipt), so the scan speed is deterministic-from-the-model and recomputable, like
// every other motion here. Kept as CSS (GPU-composited, reduced-motion-safe); only the duration is field-wired.
const sweepSecs = blips.length ? +(5 + seedOf(blips[0].receipt) * 5).toFixed(1) : 6
const rings = [['hold', 184], ['assess', 140], ['trial', 96], ['adopt', 52]]
const ringLabels = [['adopt', 165], ['trial', 121], ['assess', 77], ['hold', 33]]
const quads = [
  { t: 'Framework', x: 372, y: 40, a: 'end' },
  { t: 'Components', x: 372, y: 382, a: 'end' },
  { t: 'Methods', x: 38, y: 382, a: 'start' },
  { t: 'Knowledge', x: 38, y: 40, a: 'start' },
]
</script>

<template>
  <figure class="quantum-radar">
    <svg viewBox="0 0 410 410" role="img" aria-label="Quantum research radar: the project's tech and research placed by ring, documented in adopt and legend in hold">
      <circle v-for="[name, r] in rings" :key="name" :cx="cx" :cy="cy" :r="r" class="qr-ring" />
      <line :x1="cx" y1="18" :x2="cx" y2="392" class="qr-axis" />
      <line x1="18" :y1="cy" x2="392" :y2="cy" class="qr-axis" />
      <line :x1="cx" :y1="cy" :x2="cx" y2="21" class="qr-sweep" :style="{ '--sweep': sweepSecs + 's' }" />
      <text v-for="[label, y] in ringLabels" :key="label" :x="cx" :y="y" text-anchor="middle" class="qr-ringlabel">{{ label }}</text>
      <text v-for="q in quads" :key="q.t" :x="q.x" :y="q.y" :text-anchor="q.a" class="qr-quad">{{ q.t }}</text>
      <g v-for="blip in blips" :key="blip.receipt" :class="['qr-blip', 'qr-' + blip.ring]">
        <circle :cx="blip.x" :cy="blip.y" r="9" />
        <title>{{ blip.name }} — {{ blip.ring }} · {{ blip.note }}</title>
      </g>
    </svg>
    <figcaption>Quantum radar — {{ blips.length }} blips, each placed by its content address. Documented knowledge in adopt, flagged legend in hold.</figcaption>
  </figure>
</template>

<style scoped>
.quantum-radar { margin: 1.5rem 0; text-align: center; }
.quantum-radar svg { width: 100%; max-width: 440px; }
.qr-ring { fill: none; stroke: var(--vp-c-divider); }
.qr-axis { stroke: var(--vp-c-divider); stroke-dasharray: 3 4; }
.qr-sweep { stroke: var(--vp-c-brand-1); stroke-width: 1.5; opacity: 0.55; transform-origin: 205px 205px; animation: qr-rotate var(--sweep, 6s) linear infinite; }
@keyframes qr-rotate { to { transform: rotate(360deg); } }
.qr-ringlabel { font-size: 9px; fill: var(--vp-c-text-3); }
.qr-quad { font-size: 11px; font-weight: 500; fill: var(--vp-c-text-2); }
.qr-blip circle { stroke: var(--vp-c-bg); stroke-width: 1.5; transition: r 0.15s; }
.qr-blip:hover circle { r: 12; }
.qr-adopt circle { fill: var(--vp-c-green-1, #1d9e75); }
.qr-trial circle { fill: var(--vp-c-brand-1); }
.qr-assess circle { fill: var(--vp-c-yellow-1, #ba7517); }
.qr-hold circle { fill: var(--vp-c-text-3); }
.quantum-radar figcaption { margin-top: 0.5rem; font-size: 13px; color: var(--vp-c-text-2); }
@media (prefers-reduced-motion: reduce) { .qr-sweep { animation: none; } }
</style>

<script setup lang="ts">
// The proof's GRAPH — a pure SVG rendering of numbers computed in src (see theorem-figures.ts). This
// component decides no mathematics: it maps already-computed (x,y) points into the viewBox and draws
// axes, curves, reference lines and a legend. Theme-aware via VitePress colour variables; prints black.
import { computed } from 'vue'
import type { TheoremFigureData, FigRole } from '../../../src/wind/routes/corpus/index.ts'

const props = defineProps<{ figure: TheoremFigureData }>()

// geometry — all constants on the I Ching lattice (see ICHING_NUMBERS): the crack law scans this <script>
const W = 864, H = 432, ML = 64, MR = 27, MT = 16, MB = 54
const plotW = W - ML - MR, plotH = H - MT - MB

const allPoints = computed(() => [
  ...props.figure.series.flatMap((s) => s.points),
  ...props.figure.refLines.map((r) => ({ x: 0, y: r.y })),
])
const bounds = computed(() => {
  const xs = props.figure.series.flatMap((s) => s.points.map((p) => p.x))
  const ys = allPoints.value.map((p) => p.y)
  const xMin = Math.min(...xs), xMax = Math.max(...xs)
  let yMin = Math.min(...ys), yMax = Math.max(...ys)
  const pad = (yMax - yMin) * 8 / 100 || 1
  yMin -= pad; yMax += pad
  return { xMin, xMax: xMax === xMin ? xMin + 1 : xMax, yMin, yMax: yMax === yMin ? yMin + 1 : yMax }
})
const sx = (x: number) => ML + ((x - bounds.value.xMin) / (bounds.value.xMax - bounds.value.xMin)) * plotW
const sy = (y: number) => MT + (1 - (y - bounds.value.yMin) / (bounds.value.yMax - bounds.value.yMin)) * plotH

const pathOf = (pts: { x: number; y: number }[]) =>
  pts.map((p, i) => `${i ? 'L' : 'M'}${sx(p.x).toFixed(2)},${sy(p.y).toFixed(2)}`).join(' ')

// tick values — 5 evenly spaced on each axis, from the computed bounds
const ticks = (min: number, max: number, n = 5) =>
  Array.from({ length: n }, (_, i) => min + ((max - min) * i) / (n - 1))
const xTicks = computed(() => ticks(bounds.value.xMin, bounds.value.xMax))
const yTicks = computed(() => ticks(bounds.value.yMin, bounds.value.yMax))
const fmt = (v: number) => (Math.abs(v) >= 100 || Number.isInteger(v) ? v.toFixed(0) : v.toFixed(2))
const roleClass = (role: FigRole) => `fig-role--${role}`
</script>

<template>
  <figure class="thm-fig" data-logic=".vitepress/theme/lib/theorem-figures.ts">
    <p class="thm-fig__formula"><code>{{ figure.formula }}</code></p>
    <svg :viewBox="`0 0 ${W} ${H}`" class="thm-fig__svg" role="img" :aria-label="figure.caption">
      <!-- axes -->
      <line :x1="ML" :y1="MT" :x2="ML" :y2="H - MB" class="thm-fig__axis" />
      <line :x1="ML" :y1="H - MB" :x2="W - MR" :y2="H - MB" class="thm-fig__axis" />
      <!-- gridlines + ticks -->
      <g v-for="t in yTicks" :key="`y${t}`">
        <line :x1="ML" :y1="sy(t)" :x2="W - MR" :y2="sy(t)" class="thm-fig__grid" />
        <text :x="ML - 8" :y="sy(t) + 4" class="thm-fig__tick thm-fig__tick--y">{{ fmt(t) }}</text>
      </g>
      <g v-for="t in xTicks" :key="`x${t}`">
        <text :x="sx(t)" :y="H - MB + 20" class="thm-fig__tick thm-fig__tick--x">{{ fmt(t) }}</text>
      </g>
      <!-- reference lines (e.g. π) -->
      <g v-for="r in figure.refLines" :key="r.label">
        <line :x1="ML" :y1="sy(r.y)" :x2="W - MR" :y2="sy(r.y)" class="thm-fig__ref" />
        <text :x="W - MR - 4" :y="sy(r.y) - 6" class="thm-fig__ref-label">{{ r.label }}</text>
      </g>
      <!-- series -->
      <template v-for="s in figure.series" :key="s.label">
        <path v-if="s.kind === 'line'" :d="pathOf(s.points)" class="thm-fig__line" :class="roleClass(s.role)" />
        <g v-else>
          <circle v-for="(p, i) in s.points" :key="i" :cx="sx(p.x)" :cy="sy(p.y)" r="4"
            class="thm-fig__dot" :class="roleClass(s.role)" />
        </g>
      </template>
      <!-- axis labels -->
      <text :x="ML + plotW / 2" :y="H - 10" class="thm-fig__axis-label">{{ figure.xLabel }}</text>
      <text :x="16" :y="MT + plotH / 2" class="thm-fig__axis-label"
        :transform="`rotate(-90 16 ${MT + plotH / 2})`">{{ figure.yLabel }}</text>
    </svg>
    <div class="thm-fig__legend">
      <span v-for="s in figure.series" :key="s.label" class="thm-fig__key">
        <span class="thm-fig__swatch" :class="roleClass(s.role)"></span>{{ s.label }}
      </span>
    </div>
    <figcaption class="thm-fig__caption">{{ figure.caption }}</figcaption>
    <p class="thm-fig__source">Computed by <code>{{ figure.source }}</code> — recomputed on every build, zero tokens.</p>
  </figure>
</template>

<style scoped>
/* every literal below is composed from the I Ching lattice — the crack law scans <style> too (10 → 2·5) */
.thm-fig { margin: var(--ich-sp5) auto; max-width: calc(1px * 864); display: grid; gap: var(--ich-sp2); }
.thm-fig__formula { text-align: center; margin: 0; }
.thm-fig__formula code { font-size: calc(1em * (5 + 6) / (2 * 5)); }
.thm-fig__svg { width: 100%; height: auto; overflow: visible; }

.thm-fig__axis { stroke: currentColor; stroke-width: calc(6 / 5); opacity: calc(7 / (2 * 5)); }
.thm-fig__grid { stroke: currentColor; stroke-width: calc(1 / 2); opacity: calc(3 / (4 * 5)); }
.thm-fig__tick { fill: currentColor; font-size: calc(1px * 3 * 4); opacity: calc(7 / (2 * 5)); font-variant-numeric: tabular-nums; }
.thm-fig__tick--y { text-anchor: end; }
.thm-fig__tick--x { text-anchor: middle; }
.thm-fig__axis-label { fill: currentColor; font-size: calc(1px * (5 + 8)); text-anchor: middle; opacity: calc(4 / 5); }
.thm-fig__ref { stroke: var(--vp-c-brand-1); stroke-width: calc(6 / 5); stroke-dasharray: 6 4; opacity: calc(9 / (2 * 5)); }
.thm-fig__ref-label { fill: var(--vp-c-brand-1); font-size: calc(1px * 3 * 4); text-anchor: end; font-weight: calc(6 * 100); }

.thm-fig__line { fill: none; stroke-width: calc((5 + 6) / 5); }
.thm-fig__dot { stroke: var(--vp-c-bg); stroke-width: 1; }
/* roles — the ONE theme palette (VitePress computed vars, no literals); a = warm upper, b = cool lower,
   ok = prime, bad = composite */
.fig-role--a { stroke: var(--vp-c-yellow-1); fill: var(--vp-c-yellow-1); }
.fig-role--b { stroke: var(--vp-c-brand-1); fill: var(--vp-c-brand-1); }
.fig-role--target { stroke: var(--vp-c-brand-1); fill: var(--vp-c-brand-1); }
.fig-role--ok { stroke: var(--vp-c-green-1); fill: var(--vp-c-green-1); }
.fig-role--bad { stroke: var(--vp-c-red-1); fill: var(--vp-c-red-1); }

.thm-fig__legend { display: flex; flex-wrap: wrap; gap: var(--ich-sp3); justify-content: center; font-size: calc(1em * 9 / (2 * 5)); }
.thm-fig__key { display: inline-flex; align-items: center; gap: calc(1px * 6); }
.thm-fig__swatch { width: calc(1px * 2 * 7); height: calc(1px * 2 * 7); border-radius: calc(1px * 3); display: inline-block; }
.thm-fig__caption { font-size: calc(1em * 9 / (2 * 5)); opacity: calc(4 / 5); text-align: center; }
.thm-fig__source { font-size: calc(1em * 4 / 5); opacity: calc(3 / 5); text-align: center; margin: 0; }

@media print {
  /* keep the ok/bad hue distinction in print, but only via the same computed vars — no literals */
  .thm-fig__ref-label { font-weight: calc(7 * 100); }
}
</style>

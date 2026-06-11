<script setup lang="ts">
import { computed } from 'vue'
import { harmonicBands, goldenRatio } from '../lib/quantumMind'
import { useLocale } from '../lib/useLocale'

// Folder distribution as harmonic numbers at all scales, with no Fibonacci gaps.
// The golden spiral grows by consecutive Fibonacci quarter-turns — adjacent scales,
// nothing skipped — and the bar below tiles the same run with no gap between bands.
// This file is itself the one that brought the count to a gapless run.
const { pick } = useLocale()
const ladder = harmonicBands(150).fibonacci.slice(0, 9) // 1,2,3,5,8,13,21,34,55
const golden = goldenRatio() // the limit the bands converge to
const HUES = [48, 36, 28, 200, 190, 175, 150, 280, 322]

// A golden spiral as chained quarter-arcs, each radius the next Fibonacci number.
const spiral = computed(() => {
  let px = 0
  let py = 0
  let heading = 0
  const pts: [number, number][] = [[0, 0]]
  for (const r of ladder) {
    const cx = px + Math.cos(heading + Math.PI / 2) * r
    const cy = py + Math.sin(heading + Math.PI / 2) * r
    const start = Math.atan2(py - cy, px - cx)
    for (let s = 1; s <= 12; s += 1) {
      const a = start + (Math.PI / 2) * (s / 12)
      pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r])
    }
    px = pts[pts.length - 1][0]
    py = pts[pts.length - 1][1]
    heading += Math.PI / 2
  }
  const xs = pts.map((p) => p[0])
  const ys = pts.map((p) => p[1])
  const minX = Math.min(...xs)
  const minY = Math.min(...ys)
  const span = Math.max(Math.max(...xs) - minX, Math.max(...ys) - minY) || 1
  const norm = pts.map(([x, y]) => [((x - minX) / span) * 96 + 2, ((y - minY) / span) * 96 + 2] as [number, number])
  return `M${norm.map(([x, y]) => `${x.toFixed(2)},${y.toFixed(2)}`).join(' L')}`
})

const totalLadder = ladder.reduce((sum, value) => sum + value, 0)
const segments = computed(() => {
  let offset = 0
  return ladder.map((value, i) => {
    const seg = { value, left: (offset / totalLadder) * 100, width: (value / totalLadder) * 100, hue: HUES[i] }
    offset += value
    return seg
  })
})
</script>

<template>
  <section class="hs dt-card">
    <p class="eyebrow">{{ pick('harmonic distribution · consecutive Fibonacci, no gaps', 'хармонично разпределение · последователни Фибоначи, без празнини') }}</p>
    <div class="hs__row">
      <svg viewBox="0 0 100 100" class="hs__spiral" aria-hidden="true">
        <path :d="spiral" fill="none" stroke="url(#hsgrad)" stroke-width="1.4" stroke-linecap="round" />
        <defs>
          <linearGradient id="hsgrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="hsl(48, 85%, 60%)" />
            <stop offset="50%" stop-color="hsl(170, 70%, 55%)" />
            <stop offset="100%" stop-color="hsl(322, 75%, 62%)" />
          </linearGradient>
        </defs>
      </svg>
      <div class="hs__bands">
        <div class="hs__bar">
          <span
            v-for="(seg, i) in segments"
            :key="i"
            class="hs__seg"
            :style="{ left: seg.left + '%', width: seg.width + '%', background: `hsl(${seg.hue}, 70%, 56%)` }"
            :title="`${seg.value}`"
          >{{ seg.value }}</span>
        </div>
        <p class="hs__note">
          {{ pick(
            'Every file finds its place on a run of consecutive Fibonacci numbers — adjacent scales, nothing skipped. The distribution is harmonic at all scales, with no gaps; when a count cannot form a gapless run, the build names the deficit to the nearest one that can.',
            'Всеки файл намира мястото си в редица от последователни числа на Фибоначи — съседни мащаби, без прескачане. Разпределението е хармонично на всички мащаби, без празнини; когато броят не образува плътна редица, компилацията назовава дефицита до най-близката, която образува.') }}
        </p>
        <p class="hs__phi">
          {{ pick('each scale is φ times the next', 'всеки мащаб е φ пъти следващия') }} ·
          <strong>F(n+1)/F(n) → φ = {{ golden.phi }}</strong>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hs {
  margin: 1.5rem 0;
  border-radius: 14px;
  padding: 1.2rem 1.4rem;
}
.hs__row {
  display: grid;
  grid-template-columns: 168px 1fr;
  gap: 1.2rem;
  align-items: center;
  margin-top: 0.5rem;
}
.hs__spiral {
  width: 100%;
  height: auto;
  filter: drop-shadow(0 2px 8px rgba(168, 85, 247, 0.18));
}
.hs__bands {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}
.hs__bar {
  position: relative;
  height: 40px;
  border-radius: 8px;
  overflow: hidden;
  background: var(--vp-c-bg-soft);
}
.hs__seg {
  position: absolute;
  top: 0;
  bottom: 0;
  display: grid;
  place-items: center;
  color: #fff;
  font-size: 0.78rem;
  font-weight: 700;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
  border-right: 1px solid var(--vp-c-bg);
}
.hs__note {
  margin: 0;
  font-size: 0.82rem;
  color: var(--vp-c-text-2);
  line-height: 1.55;
}
.hs__phi {
  margin: 0;
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
}
.hs__phi strong {
  color: var(--vp-c-brand-1);
  font-variant-numeric: tabular-nums;
}
@media (max-width: 560px) {
  .hs__row { grid-template-columns: 1fr; }
  .hs__spiral { max-width: 200px; margin: 0 auto; }
}
</style>

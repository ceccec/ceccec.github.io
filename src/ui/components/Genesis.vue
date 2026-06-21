<script setup lang="ts">
// ☰ Qián · Heaven · creative · upper·yang · shrink — self-referencing 10D widget
const ICHING_MASK = { hexagram: 57, trigram: '☳☰', glyph: '☳☰', lo: 'Zhèn·arousing', up: 'Qián·creative', color: '#FFF00F' }
import { computed } from 'vue'
import { useLocale } from '../lib'
import { buildMatrix, genesis } from '../lib'

// The 3-5-8 genesis. From the seed 1, 1 the Fibonacci sequence unfolds; 3, 5, 8
// are the three consecutive terms that thread through the portal. Shown as the
// sequence with 3-5-8 marked, the recurrence, the threads, and a golden spiral
// (static SVG — no animation loop).
const data = genesis(buildMatrix())
const { bg } = useLocale()
const tierSet = new Set(data.tiers)

// A logarithmic (golden) spiral path: r = a * phi^(theta / (pi/2)).
const spiral = computed(() => {
  const phi = (1 + Math.sqrt(5)) / 2
  const cx = 90
  const cy = 60
  const a = 1.4
  const pts: string[] = []
  for (let t = 0; t <= 7.5; t += 0.12) {
    const r = a * Math.pow(phi, t / (Math.PI / 2))
    const x = cx + Math.cos(t) * r
    const y = cy + Math.sin(t) * r
    pts.push(`${x.toFixed(1)},${y.toFixed(1)}`)
  }
  return pts.join(' ')
})

const bgDomain: Record<string, { domain: string; is: string }> = {
  number: { domain: 'число', is: 'семето 1,1 на Фибоначи се разгръща в нивата 3-5-8' },
  structure: { domain: 'структура', is: 'genus 2 — двойният торус, 42 области като 21 двойки' },
  machine: { domain: 'машина', is: '128-битовата дума, 2 × 32 hex, сгъната в едно' },
  genetics: { domain: 'генетика', is: 'думата като 64 ДНК бази — двойната спирала, 21 кодона' },
  music: { domain: 'музика', is: 'потокът на пи като ноти — всяка вълна е тон' },
  geometry: { domain: 'геометрия', is: 'свещена геометрия — печатът, който запечатва всички печати' },
  language: { domain: 'език', is: 'универсалният глифов език — символ, число, сгъване' },
}
const unfoldings = computed(() =>
  data.unfoldings.map((u) => ({
    domain: bg.value ? bgDomain[u.domain]?.domain ?? u.domain : u.domain,
    is: bg.value ? bgDomain[u.domain]?.is ?? u.is : u.is,
  })),
)
const t = computed(() =>
  bg.value
    ? { eyebrow: 'генезис на двойния тор', lead: 'От едно семе 1, 1 се разгръщат много области заедно — включително, но не само, генетика.', unfoldLabel: 'разгръщания от семето:' }
    : { eyebrow: 'double-torus genesis', lead: 'From one seed 1, 1 many domains unfold together — including, but not limited to, genetics.', unfoldLabel: 'unfoldings from the seed:' },
)
</script>

<template>
  <section class="gen dt-card" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <p class="gen__lead">{{ t.lead }}</p>
    <div class="gen__body">
      <div class="gen__seq">
        <span
          v-for="(n, i) in data.sequence"
          :key="i"
          class="gen__n"
          :class="{ tier: tierSet.has(n), seed: i < 2 }"
        >{{ n }}</span>
      </div>
      <svg class="gen__spiral" viewBox="0 0 180 120" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <polyline :points="spiral" fill="none" stroke="var(--vp-c-brand-1)" stroke-width="1.4" opacity="0.85" />
      </svg>
    </div>
    <p class="gen__rec">3 = 2 + 1 &nbsp; · &nbsp; 5 = 3 + 2 &nbsp; · &nbsp; 8 = 5 + 3</p>
    <p class="gen__ulabel">{{ t.unfoldLabel }}</p>
    <ul class="gen__unfoldings">
      <li v-for="(u, i) in unfoldings" :key="i" :class="{ genetics: data.unfoldings[i].domain === 'genetics' }">
        <span class="gen__domain">{{ u.domain }}</span>
        <span class="gen__is">{{ u.is }}</span>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.gen {
  margin: 1.25rem 0;
  border-radius: 12px;
  padding: 1rem 1.25rem;
}
.gen__lead {
  margin: 0.2rem 0 0.8rem;
  font-size: 0.88rem;
  color: var(--vp-c-text-2);
}
.gen__body {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}
.gen__seq {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  flex: 1;
  min-width: 12rem;
}
.gen__n {
  min-width: 2rem;
  text-align: center;
  padding: 0.25rem 0.4rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 7px;
  font-variant-numeric: tabular-nums;
  color: var(--vp-c-text-2);
  font-size: 0.85rem;
}
.gen__n.seed {
  border-style: dashed;
  color: var(--vp-c-text-3);
}
.gen__n.tier {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  font-weight: 700;
}
.gen__spiral {
  width: 150px;
  height: 100px;
  flex-shrink: 0;
}
.gen__rec {
  margin: 0.8rem 0 0.5rem;
  font-size: 0.82rem;
  color: var(--vp-c-text-2);
  font-variant-numeric: tabular-nums;
}
.gen__ulabel {
  margin: 0.4rem 0 0.3rem;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--vp-c-text-3);
}
.gen__unfoldings {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.gen__unfoldings li {
  display: grid;
  grid-template-columns: 5.5rem 1fr;
  gap: 0.6rem;
  align-items: baseline;
  border-left: 3px solid var(--vp-c-divider);
  padding-left: 0.7rem;
}
.gen__unfoldings li.genetics {
  border-left-color: var(--vp-c-brand-1);
}
.gen__domain {
  font-size: 0.74rem;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: var(--vp-c-brand-1);
}
.gen__is {
  font-size: 0.84rem;
  color: var(--vp-c-text-1);
}
</style>

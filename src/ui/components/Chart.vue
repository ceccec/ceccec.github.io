<script setup lang="ts">
import { computed } from 'vue'

// A shadcn-style bar chart — pure SVG, themed with the site CSS variables (no Tailwind, so no
// preflight conflict with VitePress). One reusable primitive over a { label, value } series.
const props = defineProps<{ series: { label: string; value: number }[]; title?: string }>()

const W = 100
const H = 38
const GAP = 1.5
const max = computed(() => Math.max(1, ...props.series.map((s) => Math.abs(s.value))))
const barW = computed(() => (W - GAP * Math.max(0, props.series.length - 1)) / Math.max(1, props.series.length))
const bars = computed(() =>
  props.series.map((s, i) => {
    const h = (Math.abs(s.value) / max.value) * H
    return { x: i * (barW.value + GAP), y: H - h, w: barW.value, h: Math.max(0.4, h), label: s.label, value: s.value }
  }),
)
</script>

<template>
  <figure class="chart dt-card">
    <figcaption v-if="title" class="chart__title">{{ title }}</figcaption>
    <svg :viewBox="`0 0 ${W} ${H}`" preserveAspectRatio="none" class="chart__svg" role="img" :aria-label="title || 'bar chart'">
      <rect v-for="(b, i) in bars" :key="i" :x="b.x" :y="b.y" :width="b.w" :height="b.h" class="chart__bar">
        <title>{{ b.label }}: {{ b.value }}</title>
      </rect>
    </svg>
    <ul class="chart__axis">
      <li v-for="(b, i) in bars" :key="i" :style="{ width: `${100 / bars.length}%` }" :title="`${b.label}: ${b.value}`">{{ b.label }}</li>
    </ul>
  </figure>
</template>

<style scoped>
.chart {
  margin: 1.25rem 0;
  border-radius: 12px;
  padding: 1rem 1.25rem;
}
.chart__title {
  font-size: 0.74rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--vp-c-text-3);
  margin-bottom: 0.5rem;
}
.chart__svg {
  width: 100%;
  height: 140px;
  display: block;
  overflow: visible;
}
.chart__bar {
  fill: var(--vp-c-brand-3);
  transition: fill 0.15s;
}
.chart__bar:hover {
  fill: var(--vp-c-brand-1);
}
.chart__axis {
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0.35rem 0 0;
  font-size: 0.6rem;
  color: var(--vp-c-text-3);
}
.chart__axis li {
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 0 1px;
}
</style>

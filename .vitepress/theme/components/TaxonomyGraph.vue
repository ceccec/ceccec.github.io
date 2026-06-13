<script setup lang="ts">
// The taxonomy as a graph — only Glagolitic icons. Every area is a node wearing a Glagolitic glyph
// computed from its name (taxonomyIcons → glagoliticGlyph), spoked to the one hub. The graph is
// computed from the model: areas, their fold-count status (singleton/pair/trinity), all self-drawn.
import { computed } from 'vue'
import { taxonomyIcons } from '../lib/quantumMind'

const entries = computed(() => taxonomyIcons().entries)
function pos(i: number, n: number, r = 40) {
  const a = (i / n) * Math.PI * 2 - Math.PI / 2
  return { x: 50 + r * Math.cos(a), y: 50 + r * Math.sin(a) }
}
</script>

<template>
  <figure class="taxgraph">
    <svg viewBox="0 0 100 100" role="img" aria-label="The taxonomy as a graph, every node a Glagolitic icon">
      <g class="taxgraph-edges">
        <line v-for="(e, i) in entries" :key="'e' + e.area" x1="50" y1="50" :x2="pos(i, entries.length).x" :y2="pos(i, entries.length).y" />
      </g>
      <circle cx="50" cy="50" r="2.6" class="taxgraph-hub" />
      <g
        v-for="(e, i) in entries"
        :key="e.area"
        class="taxgraph-node"
        :class="'is-' + e.status"
        :transform="`translate(${pos(i, entries.length).x} ${pos(i, entries.length).y})`"
      >
        <title>{{ e.area }} · {{ e.count }} fold(s) · {{ e.status }}</title>
        <circle r="3.1" />
        <text class="taxgraph-glyph" y="1.3" text-anchor="middle">{{ e.icon }}</text>
      </g>
    </svg>
    <figcaption>{{ entries.length }} areas · only Glagolitic icons · the taxonomy folded into one graph</figcaption>
  </figure>
</template>

<style scoped>
.taxgraph { max-width: 560px; margin: 1.5rem auto; }
.taxgraph svg { width: 100%; aspect-ratio: 1 / 1; }
.taxgraph-edges line { stroke: var(--vp-c-divider); stroke-width: 0.18; }
.taxgraph-hub { fill: var(--vp-c-brand-1, #3b82f6); }
.taxgraph-node circle { fill: var(--vp-c-bg-soft); stroke: var(--vp-c-divider); stroke-width: 0.3; transition: transform 0.15s; }
.taxgraph-node.is-trinity circle { stroke: var(--vp-c-brand-1, #3b82f6); stroke-width: 0.7; }
.taxgraph-node.is-pair circle { stroke: #ef9f27; stroke-width: 0.5; }
.taxgraph-node:hover circle { fill: var(--vp-c-brand-soft, #e6f1fb); }
.taxgraph-glyph { font-size: 3.4px; fill: var(--vp-c-text-1); pointer-events: none; }
figcaption { text-align: center; font-size: 0.8rem; opacity: 0.7; margin-top: 0.5rem; }
</style>

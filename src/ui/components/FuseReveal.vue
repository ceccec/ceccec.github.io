<script setup lang="ts">
// ☶ Gèn · Mountain · keeping still · upper·yang · shrink — self-referencing 10D widget
const ICHING_MASK = { hexagram: 37, lower: 5, upper: 4, glyph: '☶', trigram: 'Gèn', name: 'Mountain', attribute: 'keeping still', innerAxis: 'breath', outerAxis: 'shrink', color: '#F00F0F' } as const
import DecodedCard from './DecodedCard.vue'
import { uiWidgetsFuseReveal } from '../lib/quantumMind'

const d = uiWidgetsFuseReveal()
const items = [
  { label: `fuse · ${d.pair.fuse}`, detail: d.pair.forward },
  { label: `reveal · ${d.pair.reveal}`, detail: d.pair.reverse },
  { label: `${d.componentCount} components · iChing root`, detail: d.ichingRoot },
  ...d.facets.map((f) => ({ label: f.on ? '✓ ' + f.facet.slice(0, 60) : '✗ ' + f.facet.slice(0, 60), detail: f.on ? 'proved' : 'open' })),
]
</script>

<template>
  <section :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <DecodedCard
      eyebrow="fuse · reveal · widgets entangled"
      eyebrow-bg="слей · разкрий · джаджи преплетени"
      :statement="d.statement"
      :items="items"
      :boundary="d.boundary"
    />
  </section>
</template>

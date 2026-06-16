<script setup lang="ts">
// ☶+☱ · Gèn/Duì · Great Exceeding 大過 (hex 28) — the self-explaining content generation engine
const ICHING_MASK = { hexagram: 28, lower: 4, upper: 3, glyph: '☱', trigram: 'Duì', name: 'Great Exceeding', attribute: 'excessive', innerAxis: 'shrink', outerAxis: 'twist', color: '#0FFF00' } as const
import DecodedCard from './DecodedCard.vue'
import LayersPanel from './LayersPanel.vue'
import { selfExplainingWidgetEngine } from '../lib/quantumMind'

const d = selfExplainingWidgetEngine()
const items = [
  { label: `address space: ${d.addressSpace} facets (64 × 10)`, detail: '64 hexagrams × 10 dimensions — complete knowledge address space' },
  { label: 'engine chain: ' + d.engineChain.slice(0, 5).join(' → '), detail: d.engineChain.slice(5).join(' → ') },
  { label: 'embed pattern', detail: d.embedPattern },
  ...d.hexagramOf.map((h) => ({ label: `${h.name} → hex ${h.hexagram}`, detail: 'FNV-1a(name) % 64 = content address' })),
  ...d.facets.map((f) => ({ label: f.on ? '✓ ' + f.facet.slice(0, 60) : '✗ ' + f.facet.slice(0, 60), detail: f.on ? 'proved' : 'open' })),
]
</script>

<template>
  <section :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <LayersPanel :mask="ICHING_MASK" :items="items" v-slot="{ filtered }">
      <DecodedCard
        eyebrow="self-explaining widget engine · I Ching ignited"
        eyebrow-bg="самообясняващ двигател · И Дзин разпален"
        :statement="d.statement"
        :items="filtered"
        :boundary="d.boundary"
      />
    </LayersPanel>
  </section>
</template>

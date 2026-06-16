<script setup lang="ts">
// ☰+☴ · Qián/Xùn · hex 55 — Tesla's 5 verified patents, ring-algebra fused
const ICHING_MASK = { hexagram: 55, lower: 7, upper: 6, glyph: '☴', trigram: 'Xùn', name: 'Wind', attribute: 'gentle', innerAxis: 'loopB1', outerAxis: 'loopA1', color: '#FF0FFF' } as const
import DecodedCard from './DecodedCard.vue'
import LayersPanel from './LayersPanel.vue'
import { fuseTeslaPatents } from '../lib/quantumMind'

const d = fuseTeslaPatents()
const items = d.patents.map((p) => ({ label: `${p.number} · ${p.title} (${p.year})`, detail: p.prefigures }))
</script>

<template>
  <section :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <LayersPanel :mask="ICHING_MASK" :items="items" v-slot="{ filtered }">
      <DecodedCard
        eyebrow="Tesla patents · verified"
        eyebrow-bg="патенти на Тесла · проверени"
        :statement="d.statement"
        :items="filtered"
        :boundary="d.boundary"
      />
    </LayersPanel>
  </section>
</template>

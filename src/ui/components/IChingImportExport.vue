<script setup lang="ts">
// ☱ Duì · Lake · joyous · upper·yang · twist — self-referencing 10D widget
const ICHING_MASK = { hexagram: 30, lower: 6, upper: 3, glyph: '☱', trigram: 'Duì', name: 'Lake', attribute: 'joyous', innerAxis: 'hueShift', outerAxis: 'twist', color: '#0FFFF0' } as const
import DecodedCard from './DecodedCard.vue'
import { iChingImportExportTenD } from '../lib/quantumMind'

const d = iChingImportExportTenD()
const items = [
  { label: 'lower trigram · imports (yin · inner)', detail: d.innerAxes.join(' · ') },
  { label: 'upper trigram · exports (yang · outer)', detail: d.outerAxes.join(' · ') },
  ...d.flowTypes.map((f) => ({ label: `${f.loop} · ${f.flow}`, detail: f.desc })),
  ...d.facets.map((f) => ({ label: f.on ? '✓ ' + f.facet.slice(0, 60) : '✗ ' + f.facet.slice(0, 60), detail: f.on ? 'proved' : 'open' })),
]
</script>

<template>
  <section :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <DecodedCard
      eyebrow="I Ching · import/export · 10D"
      eyebrow-bg="И Дзин · внос/износ · 10И"
      :statement="d.statement"
      :items="items"
      :boundary="d.boundary"
    />
  </section>
</template>

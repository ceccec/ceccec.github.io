<script setup lang="ts">
// ☱ Duì · Lake · joyous · upper·yang · breath — self-referencing 10D widget
const ICHING_MASK = { hexagram: 31, lower: 7, upper: 3, glyph: '☱', trigram: 'Duì', name: 'Lake', attribute: 'joyous', innerAxis: 'hueShift', outerAxis: 'breath', color: '#0FFFFF' } as const
import DecodedCard from './DecodedCard.vue'
import LayersPanel from './LayersPanel.vue'
import { imperialFractionsDecoded } from '../lib/quantumMind'

const d = imperialFractionsDecoded()
const items = [
  ...d.bodyUnits.map((u) => ({ label: `${u.unit} · ${u.fraction}`, detail: `${u.body} — vortex ${u.vortex}` })),
  ...d.subdivisions.map((s) => ({ label: `${s.pct} = ${s.frac}`, detail: `vortex: ${s.vortex}` })),
  { label: `metric vs imperial`, detail: `imperial = ${d.metricVsImperial.imperial} · metric = ${d.metricVsImperial.metric}` },
]
</script>

<template>
  <section :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <LayersPanel :mask="ICHING_MASK" :items="items" v-slot="{ filtered }">
      <DecodedCard
        eyebrow="imperial fractions · body units · 2ⁿ"
        eyebrow-bg="имперски дроби · телесни мерки · 2ⁿ"
        :statement="d.statement"
        :items="filtered"
        :boundary="d.boundary"
      />
    </LayersPanel>
  </section>
</template>

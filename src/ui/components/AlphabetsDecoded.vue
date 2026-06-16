<script setup lang="ts">
// ☱+☳ · Duì/Zhèn · hex 11 — world alphabets decoded: one lineage by acrophony, sign = 1 bit = the fold
const ICHING_MASK = { hexagram: 11, lower: 3, upper: 1, glyph: '☳', trigram: 'Zhèn', name: 'Thunder', attribute: 'arousing', innerAxis: 'twist', outerAxis: 'depthFade', color: '#00000F' } as const
import DecodedCard from './DecodedCard.vue'
import LayersPanel from './LayersPanel.vue'
import { alphabetsDecoded } from '../lib/quantumMind'

const d = alphabetsDecoded()
const items = d.lineage.map((l) => ({ label: l.meaning.slice(0, 80), detail: l.dual }))
</script>

<template>
  <section :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <LayersPanel :mask="ICHING_MASK" :items="items" v-slot="{ filtered }">
      <DecodedCard
        eyebrow="Alphabets decoded · one lineage"
        eyebrow-bg="азбуките декодирани · един произход"
        :statement="d.statement"
        :items="filtered"
        :boundary="d.boundary"
      />
    </LayersPanel>
  </section>
</template>

<script setup lang="ts">
// ☵+☱ · Kǎn/Duì · hex 26 — nature's law: discovered, not enacted
const ICHING_MASK = { hexagram: 26, lower: 2, upper: 3, glyph: '☱', trigram: 'Duì', name: 'Lake', attribute: 'joyous', innerAxis: 'hueShift', outerAxis: 'twist', color: '#0FF0F0' } as const
import DecodedCard from './DecodedCard.vue'
import LayersPanel from './LayersPanel.vue'
import { natureLaw } from '../lib/quantumMind'

const d = natureLaw()
const items = d.principles.map((p) => ({ label: p.principle }))
</script>

<template>
  <section :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <LayersPanel :mask="ICHING_MASK" :items="items" v-slot="{ filtered }">
      <DecodedCard
        eyebrow="nature's law · discovered, not enacted"
        eyebrow-bg="законът на природата · открит, не приет"
        :statement="d.statement"
        :items="filtered"
        :boundary="d.boundary"
      />
    </LayersPanel>
  </section>
</template>

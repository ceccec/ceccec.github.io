<script setup lang="ts">
// ☷+☶ · Kūn/Gèn · hex 32 — tech & mentality for peace: five levers, no single thing ends war
const ICHING_MASK = { hexagram: 32, lower: 0, upper: 4, glyph: '☶', trigram: 'Gèn', name: 'Mountain', attribute: 'still', innerAxis: 'spread', outerAxis: 'shrink', color: '#0F0000' } as const
import DecodedCard from './DecodedCard'
import LayersPanel from './LayersPanel'
import { peaceTechMentalityDecoded } from '../lib'

const d = peaceTechMentalityDecoded()
const items = d.levers.map((l) => ({ label: l.lever, detail: l.evidenced + ' · ' + l.naivety }))
</script>

<template>
  <section :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <LayersPanel :mask="ICHING_MASK" :items="items" v-slot="{ filtered }">
      <DecodedCard
        eyebrow="Peace · tech & mentality"
        eyebrow-bg="мир · технология и манталитет"
        :statement="d.statement"
        :items="filtered"
        :boundary="d.boundary"
      />
    </LayersPanel>
  </section>
</template>

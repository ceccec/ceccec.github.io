<script setup lang="ts">
// ☷+☶ · Kūn/Gèn · hex 32 — Glagolitic decoded: first Slavic alphabet, cross+triangle+circle
const ICHING_MASK = { hexagram: 32, lower: 0, upper: 4, glyph: '☶', trigram: 'Gèn', name: 'Mountain', attribute: 'keeping still', innerAxis: 'spread', outerAxis: 'shrink', color: '#F00000' } as const
import DecodedCard from './DecodedCard'
import LayersPanel from './LayersPanel'
import { glagolitic } from '../lib'

const d = glagolitic()
const items = d.core.map((c) => ({ label: c.facet, detail: c.maps }))
</script>

<template>
  <section :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <LayersPanel :mask="ICHING_MASK" :items="items" v-slot="{ filtered }">
      <DecodedCard
        eyebrow="Glagolitic · the first Slavic alphabet"
        eyebrow-bg="глаголица · първата славянска азбука"
        :statement="d.statement"
        :items="filtered"
        :boundary="d.boundary"
      />
    </LayersPanel>
  </section>
</template>

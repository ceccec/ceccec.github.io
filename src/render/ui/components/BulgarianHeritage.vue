<script setup lang="ts">
// ☱+☴ · Duì/Xùn · hex 51 — Bulgarian heritage decoded: traditions, folklore, architecture
const ICHING_MASK = { hexagram: 51, lower: 3, upper: 6, glyph: '☴', trigram: 'Xùn', name: 'Wind', attribute: 'gentle', innerAxis: 'twist', outerAxis: 'loopA1', color: '#FF00FF' } as const
import DecodedCard from './DecodedCard'
import LayersPanel from './LayersPanel'
import { bulgarianHeritage } from '../lib'

const d = bulgarianHeritage()
const items = d.topics.map((t) => ({ label: t.topic, detail: t.documented }))
</script>

<template>
  <section :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <LayersPanel :mask="ICHING_MASK" :items="items" v-slot="{ filtered }">
      <DecodedCard
        eyebrow="Bulgarian heritage · decoded"
        eyebrow-bg="българско наследство · декодирано"
        :statement="d.statement"
        :items="filtered"
        :boundary="d.boundary"
      />
    </LayersPanel>
  </section>
</template>

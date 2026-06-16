<script setup lang="ts">
// ☴+☱ · Xùn/Duì · hex 30 — Bulgarian history 681→present, six verified eras, state-history ascending
const ICHING_MASK = { hexagram: 30, lower: 6, upper: 3, glyph: '☱', trigram: 'Duì', name: 'Lake', attribute: 'joyous', innerAxis: 'loopA1', outerAxis: 'twist', color: '#000F0F' } as const
import DecodedCard from './DecodedCard.vue'
import LayersPanel from './LayersPanel.vue'
import { bulgarianHistory, bulgarianHistoryDecoded } from '../lib/quantumMind'

const h = bulgarianHistory()
const d = bulgarianHistoryDecoded()
const items = h.eras.map((e) => ({ label: e.era + ' · ' + e.span, detail: e.documented }))
</script>

<template>
  <section :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <LayersPanel :mask="ICHING_MASK" :items="items" v-slot="{ filtered }">
      <DecodedCard
        eyebrow="Bulgarian history · six eras"
        eyebrow-bg="история на България · шест епохи"
        :statement="d.statement"
        :items="filtered"
        :boundary="d.boundary"
      />
    </LayersPanel>
  </section>
</template>

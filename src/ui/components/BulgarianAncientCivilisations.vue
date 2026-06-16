<script setup lang="ts">
// ☰+☲ · Qián/Lí · hex 47 — ancient civilisations of the land, six strata deepest-first
const ICHING_MASK = { hexagram: 47, lower: 7, upper: 5, glyph: '☲', trigram: 'Lí', name: 'Fire', attribute: 'clinging', innerAxis: 'loopB1', outerAxis: 'breath', color: '#0F000F' } as const
import DecodedCard from './DecodedCard.vue'
import LayersPanel from './LayersPanel.vue'
import { bulgarianAncientCivilisations, bulgarianAncientCivilisationsDecoded } from '../lib/quantumMind'

const c = bulgarianAncientCivilisations()
const d = bulgarianAncientCivilisationsDecoded()
const items = c.strata.map((s) => ({ label: s.stratum + ' · ' + s.span, detail: s.documented }))
</script>

<template>
  <section :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <LayersPanel :mask="ICHING_MASK" :items="items" v-slot="{ filtered }">
      <DecodedCard
        eyebrow="Ancient civilisations · six strata"
        eyebrow-bg="древни цивилизации · шест пласта"
        :statement="d.statement"
        :items="filtered"
        :boundary="d.boundary"
      />
    </LayersPanel>
  </section>
</template>

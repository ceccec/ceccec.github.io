<script setup lang="ts">
// ☵+☵ · Kǎn/Kǎn · hex 18 — genetics challenges history: five aDNA domains, autochthony refuted
const ICHING_MASK = { hexagram: 18, lower: 2, upper: 2, glyph: '☵', trigram: 'Kǎn', name: 'Water', attribute: 'abysmal', innerAxis: 'hueShift', outerAxis: 'hueShift', color: '#000F00' } as const
import DecodedCard from './DecodedCard.vue'
import LayersPanel from './LayersPanel.vue'
import { geneticLinksChallengeHistory, geneticLinksChallengeHistoryDecoded } from '../lib/quantumMind'

const g = geneticLinksChallengeHistory()
const d = geneticLinksChallengeHistoryDecoded()
const items = g.domains.map((dom) => ({ label: dom.domain, detail: dom.challenge + ' · ' + dom.studies }))
</script>

<template>
  <section :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <LayersPanel :mask="ICHING_MASK" :items="items" v-slot="{ filtered }">
      <DecodedCard
        eyebrow="Genetics challenges history · five domains"
        eyebrow-bg="генетиката оспорва историята · пет области"
        :statement="d.statement"
        :items="filtered"
        :boundary="d.boundary"
      />
    </LayersPanel>
  </section>
</template>

<script setup lang="ts">
// ☶+☱ · Gèn/Duì · hex 28 — Bulgarian ethnogenesis: Bulgars, Slavs, Thracians, fusion
const ICHING_MASK = { hexagram: 28, lower: 4, upper: 3, glyph: '☱', trigram: 'Duì', name: 'Lake', attribute: 'joyous', innerAxis: 'shrink', outerAxis: 'twist', color: '#000F0F' } as const
import DecodedCard from './DecodedCard.vue'
import LayersPanel from './LayersPanel.vue'
import { bulgarianEthnogenesis, bulgarianEthnogenesisDecoded } from '../lib/quantumMind'

const e = bulgarianEthnogenesis()
const d = bulgarianEthnogenesisDecoded()
const items = e.peoples.map((p) => ({ label: p.people, detail: p.documented }))
</script>

<template>
  <section :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <LayersPanel :mask="ICHING_MASK" :items="items" v-slot="{ filtered }">
      <DecodedCard
        eyebrow="Bulgarian ethnogenesis · four peoples"
        eyebrow-bg="етногенезис · четири народа"
        :statement="d.statement"
        :items="filtered"
        :boundary="d.boundary"
      />
    </LayersPanel>
  </section>
</template>

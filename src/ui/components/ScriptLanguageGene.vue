<script setup lang="ts">
// ☲+☶ · Lí/Gèn · hex 37 — script, language, gene: three independent inheritance systems
const ICHING_MASK = { hexagram: 37, lower: 5, upper: 4, glyph: '☶', trigram: 'Gèn', name: 'Mountain', attribute: 'keeping still', innerAxis: 'breath', outerAxis: 'shrink', color: '#F00F0F' } as const
import DecodedCard from './DecodedCard.vue'
import LayersPanel from './LayersPanel.vue'
import { entangledScriptLanguageGene } from '../lib/quantumMind'

const d = entangledScriptLanguageGene()
const items = d.relations.map((r) => ({ label: r.meaning, detail: r.dual }))
</script>

<template>
  <section :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <LayersPanel :mask="ICHING_MASK" :items="items" v-slot="{ filtered }">
      <DecodedCard
        eyebrow="script · language · gene — entangled"
        eyebrow-bg="писмо · език · ген — заплетени"
        :statement="d.statement"
        :items="filtered"
        :boundary="d.boundary"
      />
    </LayersPanel>
  </section>
</template>

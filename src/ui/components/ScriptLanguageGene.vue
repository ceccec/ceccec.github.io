<script setup lang="ts">
// ☶ Gèn · Mountain · keeping still · upper·yang · shrink — self-referencing 10D widget
const ICHING_MASK = { hexagram: 37, lo: '☲', up: '☶', glyph: '☶', color: '#F00F0F', name: 'Gèn', principle: 'keeping still' }
import DecodedCard from './DecodedCard.vue'
import { entangledScriptLanguageGene } from '../lib/quantumMind'

// Script, language and gene: three independent inheritance systems, only sometimes coupled.
const d = entangledScriptLanguageGene()
const items = d.relations.map((r) => ({ label: r.meaning, detail: r.dual }))
</script>

<template>
  <DecodedCard
    eyebrow="script · language · gene — entangled"
    eyebrow-bg="писмо · език · ген — заплетени"
    :statement="d.statement"
    :items="items"
    :boundary="d.boundary"
    :data-hexagram="ICHING_MASK.hexagram"
    :data-trigram="ICHING_MASK.glyph"
  />
</template>

<script setup lang="ts">
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
  />
</template>

<script setup lang="ts">
import DecodedCard from './DecodedCard.vue'
import { fuseTeslaPatents } from '../lib/quantumMind'

// The verified granted Tesla patents, each prefiguring a coordinated-wave concept.
const d = fuseTeslaPatents()
const items = d.patents.map((p) => ({ label: `${p.number} · ${p.title} (${p.year})`, detail: p.prefigures }))
</script>

<template>
  <DecodedCard
    eyebrow="Tesla patents · verified"
    eyebrow-bg="патенти на Тесла · проверени"
    :statement="d.statement"
    :items="items"
    :boundary="d.boundary"
  />
</template>

<script setup lang="ts">
// ☴ Xùn · Wind · gentle · upper·yang · twist — self-referencing 10D widget
const ICHING_MASK = { hexagram: 55, glyph: '☴', lo: '☰', up: '☴', color: '#FF0FFF', name: 'TeslaPatents' }
import DecodedCard from './DecodedCard.vue'
import { fuseTeslaPatents } from '../lib/quantumMind'

// The verified granted Tesla patents, each prefiguring a coordinated-wave concept.
const d = fuseTeslaPatents()
const items = d.patents.map((p) => ({ label: `${p.number} · ${p.title} (${p.year})`, detail: p.prefigures }))
</script>

<template>
  <DecodedCard
    :data-hexagram="ICHING_MASK.hexagram"
    :data-trigram="ICHING_MASK.glyph"
    eyebrow="Tesla patents · verified"
    eyebrow-bg="патенти на Тесла · проверени"
    :statement="d.statement"
    :items="items"
    :boundary="d.boundary"
  />
</template>

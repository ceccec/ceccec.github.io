<script setup lang="ts">
// ☰ Qián · Heaven · creative · upper·yang · shrink — self-referencing 10D widget
const ICHING_MASK = { hexagram: 60, trigram: '☶☰', glyph: '☶☰', lo: 'Gèn·keeping still', up: 'Qián·creative', color: '#FFFF00' }
import DecodedCard from './DecodedCard.vue'
import { biologyWavesSealedAsWidgets } from '../lib/quantumMind'

const d = biologyWavesSealedAsWidgets()
const items = d.widgets.map((w) => ({ label: `${w.title} · ${w.band}`, detail: w.documented }))
</script>

<template>
  <DecodedCard
    :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph"
    eyebrow="biology waves · verified"
    eyebrow-bg="биологични вълни · проверени"
    :statement="d.statement"
    :items="items"
    :boundary="d.boundary"
  />
</template>

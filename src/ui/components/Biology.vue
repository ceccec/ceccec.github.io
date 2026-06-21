<script setup lang="ts">
// ☰ Qián · Heaven · creative · upper·yang · shrink — self-referencing 10D widget
const ICHING_MASK = { hexagram: 60, trigram: '☶☰', glyph: '☶☰', lo: 'Gèn·keeping still', up: 'Qián·creative', color: '#FFFF00' }
import DecodedCard from './DecodedCard'
import LayersPanel from './LayersPanel'
import { biologyWavesSealedAsWidgets } from '../lib'

const d = biologyWavesSealedAsWidgets()
const items = d.widgets.map((w) => ({ label: `${w.title} · ${w.band}`, detail: w.documented }))
</script>

<template>
  <LayersPanel :mask="ICHING_MASK" :items="items" v-slot="{ filtered }">
    <DecodedCard
      eyebrow="biology waves · verified"
      eyebrow-bg="биологични вълни · проверени"
      :statement="d.statement"
      :items="filtered"
      :boundary="d.boundary"
    />
  </LayersPanel>
</template>

<script setup lang="ts">
// ☱ Duì · Lake · joyous · upper·yang · twist — self-referencing 10D widget
const ICHING_MASK = { hexagram: 27, glyph: '☱', lo: 'Duì·joyous', up: 'Duì·joyous', color: '#0FF0FF' } as const
import DecodedCard from './DecodedCard.vue'
import { publicFrequencyApis } from '../lib/quantumMind'

// Public, no-key frequency data sources — FCC spectrum, USGS seismic, Web Audio, Schumann.
const d = publicFrequencyApis()
const items = d.sources.map((s) => ({ label: s.api, detail: `${s.band} · ${s.data} · ${s.auth}` }))
</script>

<template>
  <DecodedCard
    :data-hexagram="ICHING_MASK.hexagram"
    :data-trigram="ICHING_MASK.glyph"
    eyebrow="public frequency APIs · no key"
    eyebrow-bg="публични честотни API · без ключ"
    :statement="d.statement"
    :items="items"
    :boundary="d.boundary"
  />
</template>

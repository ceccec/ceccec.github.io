<script setup lang="ts">
import DecodedCard from './DecodedCard.vue'
import { publicFrequencyApis } from '../lib/quantumMind'

// Public, no-key frequency data sources — FCC spectrum, USGS seismic, Web Audio, Schumann.
const d = publicFrequencyApis()
const items = d.sources.map((s) => ({ label: s.api, detail: `${s.band} · ${s.data} · ${s.auth}` }))
</script>

<template>
  <DecodedCard
    eyebrow="public frequency APIs · no key"
    eyebrow-bg="публични честотни API · без ключ"
    :statement="d.statement"
    :items="items"
    :boundary="d.boundary"
  />
</template>

<script setup lang="ts">
import DecodedCard from './DecodedCard.vue'
import { glagolitic } from '../lib/quantumMind'

// Glagolitic decoded to its ancient core: the first Slavic alphabet, built from cross + triangle + circle.
const d = glagolitic()
const items = d.core.map((c) => ({ label: c.facet, detail: c.maps }))
</script>

<template>
  <DecodedCard
    eyebrow="Glagolitic · the first Slavic alphabet"
    eyebrow-bg="глаголица · първата славянска азбука"
    :statement="d.statement"
    :items="items"
    :boundary="d.boundary"
  />
</template>

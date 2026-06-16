<script setup lang="ts">
import DecodedCard from './DecodedCard.vue'
import { natureLaw } from '../lib/quantumMind'

// Nature's law: discovered, not enacted — the principles the commons rests on.
const d = natureLaw()
const items = d.principles.map((p) => ({ label: p.principle }))
</script>

<template>
  <DecodedCard
    eyebrow="nature's law · discovered, not enacted"
    eyebrow-bg="законът на природата · открит, не приет"
    :statement="d.statement"
    :items="items"
    :boundary="d.boundary"
  />
</template>

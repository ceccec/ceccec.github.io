<script setup lang="ts">
// ☰ Qián · Heaven · creative · upper·yang · shrink — self-referencing 10D widget
const ICHING_MASK = { hexagram: 57, trigram: '☳☰', glyph: '☳☰', lo: 'Zhèn·arousing', up: 'Qián·creative', color: '#FFF00F' }
import DecodedCard from './DecodedCard.vue'
import { attestation } from '../lib/quantumMind'

// Attestation: generate a key, sign, verify — the browser-local provenance chain.
const d = attestation()
const items = d.steps.map((s) => ({ label: s.step, detail: s.how }))
</script>

<template>
  <DecodedCard
    :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph"
    eyebrow="attestation · key + sign + verify"
    eyebrow-bg="атестация · ключ + подпис + проверка"
    :statement="d.statement"
    :items="items"
    :boundary="d.boundary"
  />
</template>

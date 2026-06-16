<script setup lang="ts">
import DecodedCard from './DecodedCard.vue'
import { attestation } from '../lib/quantumMind'

// Attestation: generate a key, sign, verify — the browser-local provenance chain.
const d = attestation()
const items = d.steps.map((s) => ({ label: s.step, detail: s.how }))
</script>

<template>
  <DecodedCard
    eyebrow="attestation · key + sign + verify"
    eyebrow-bg="атестация · ключ + подпис + проверка"
    :statement="d.statement"
    :items="items"
    :boundary="d.boundary"
  />
</template>

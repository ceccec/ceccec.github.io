<script setup lang="ts">
// ☳ Zhèn · Thunder · arousing · upper·yang · shrink — self-referencing 10D widget
const ICHING_MASK = { hexagram: 10, glyph: '☳', lower: '☵', upper: '☳', color: '#00F0F0' }
import { computed } from 'vue'
import { useData } from 'vitepress'
import { proofRegistry } from '../lib'
import ProofDetail from './ui/ProofDetail'

// One model-driven renderer for every proof (replacing 17 per-proof wrapper components). It reads the
// proofRegistry (the proofs as data, computed from the model). On a proof's own [page] route it renders that
// proof in full; everywhere else (the home) it renders every proof as a card linking to its page. ProofDetail
// does the sufficient-proof rendering (checks, evidence, recompute).
const { params } = useData()
const registry = proofRegistry()
const current = computed(() => {
  const slug = params.value && (params.value as { page?: string }).page
  return registry.find((entry) => entry.slug === slug) || null
})
</script>

<template>
  <ProofDetail v-if="current" :data="current.proof" :title="current.title" :slug="current.slug" />
  <template v-else>
    <ProofDetail v-for="entry in registry" :key="entry.slug" :data="entry.proof" :title="entry.title" :slug="entry.slug" />
  </template>
</template>

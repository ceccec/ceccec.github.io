<script setup lang="ts">
import { useData } from 'vitepress'
import HolographicHero from './HolographicHero'

// Doc pages get the holographic OG hero via doc-before; the home layout gets it via home-hero-before.
// Gating doc-before on home avoids rendering HolographicHero twice on the same page.
const { frontmatter } = useData()
</script>

<template>
  <HolographicHero v-if="frontmatter.layout !== 'home'" />
</template>

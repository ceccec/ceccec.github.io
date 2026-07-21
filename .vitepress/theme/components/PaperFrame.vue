<script setup lang="ts">
// EVERY PAGE IS A PRINTABLE FORMATTED SCIENTIFIC PAPER (user law) — the paper chrome, computed from the
// page's OWN computed frontmatter (transformPageData lifts title · description · keywords · category from
// the sealed model): an abstract block and a keywords line above the content, print-first. The thin-shell
// law holds: no logic here beyond reading the already-computed frontmatter; the paper DATA is the fold
// (monographAsScientificPaper / everyPageIsAPrintableScientificPaper in src/wind/site).
import { computed } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()

const abstract = computed(() => {
  const description = frontmatter.value.description
  return typeof description === 'string' && description.length > 0 ? description : ''
})
const keywords = computed(() => {
  const tags = frontmatter.value.tags ?? frontmatter.value.keywords
  return Array.isArray(tags) ? tags.filter((tag): tag is string => typeof tag === 'string') : []
})
const category = computed(() => (typeof frontmatter.value.category === 'string' ? frontmatter.value.category : ''))
const show = computed(() => abstract.value.length > 0)
</script>

<template>
  <section v-if="show" class="paper-frame">
    <p class="paper-frame__eyebrow">
      <span class="paper-frame__kind">Scientific paper</span>
      <span v-if="category" class="paper-frame__category">· {{ category }}</span>
      <span class="paper-frame__print">· printable</span>
    </p>
    <p class="paper-frame__abstract"><strong>Abstract.</strong> {{ abstract }}</p>
    <p v-if="keywords.length" class="paper-frame__keywords"><strong>Keywords.</strong> {{ keywords.join(' · ') }}</p>
  </section>
</template>

<style scoped>
.paper-frame {
  margin: 0 0 var(--ich-sp6);
  padding: var(--ich-sp3) var(--ich-sp4);
  border-left: var(--ich-border-3) solid var(--vp-c-brand-1, currentColor);
  background: var(--vp-c-bg-soft, transparent);
  border-radius: 0 var(--ich-sp4) var(--ich-sp4) 0;
}
.paper-frame__eyebrow {
  margin: 0 0 var(--ich-sp1);
  font-size: var(--ich-text-2xs);
  letter-spacing: var(--ich-track-wide);
  text-transform: uppercase;
  opacity: calc(3 / 4);
}
.paper-frame__abstract {
  margin: 0;
  font-size: var(--ich-text-ms);
  line-height: var(--ich-lh-normal);
}
.paper-frame__keywords {
  margin: var(--ich-sp1) 0 0;
  font-size: var(--ich-text-xs);
  opacity: calc(4 / 5);
}
</style>

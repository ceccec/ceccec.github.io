<script setup lang="ts">
// ☵ Kǎn · Water · abysmal · upper·yang · breath — self-referencing 10D widget
const ICHING_MASK = { hexagram: 19, glyph: '☵', lower: '☱', upper: '☵', color: '#0F00FF' } as const
import { computed } from 'vue'
import { useLocale } from '../lib/useLocale'

// The shared renderer for a decoded-knowledge fold: a verified statement, the fold's
// data list, and the honest boundary (documented kept, legend flagged). Every domain
// fold has the same { statement, <data array>, boundary } shape, so one card renders
// all of them — the "decode in reusable code" principle, DRY across the domain pages.
const props = defineProps<{
  eyebrow: string
  eyebrowBg?: string
  statement: string
  items: { label: string; detail?: string }[]
  boundary?: string
}>()
const { bg } = useLocale()
const eyebrowText = computed(() => (bg.value && props.eyebrowBg ? props.eyebrowBg : props.eyebrow))
const boundaryLabel = computed(() => (bg.value ? 'Граница' : 'Boundary'))
</script>

<template>
  <section class="decoded dt-card" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <p class="eyebrow">{{ eyebrowText }}</p>
    <p class="decoded__statement">{{ statement }}</p>
    <ul class="decoded__items">
      <li v-for="(it, i) in items" :key="i">
        <span class="decoded__label">{{ it.label }}</span>
        <span v-if="it.detail" class="decoded__detail">{{ it.detail }}</span>
      </li>
    </ul>
    <p v-if="boundary" class="decoded__boundary"><strong>{{ boundaryLabel }}:</strong> {{ boundary }}</p>
  </section>
</template>

<style scoped>
.decoded {
  margin: 1.25rem 0;
  border-radius: 12px;
  padding: 1rem 1.25rem;
}
.decoded__statement {
  margin: 0.2rem 0 0.8rem;
  font-size: 0.9rem;
  color: var(--vp-c-text-1);
}
.decoded__items {
  list-style: none;
  padding: 0;
  margin: 0 0 0.8rem;
  display: grid;
  gap: 0.4rem;
}
.decoded__items li {
  border: 1px solid var(--vp-c-divider);
  /* the card's own I Ching hexagram hue, inherited from the enclosing LayersPanel's --lp-accent
     (cascades to this slotted card); falls back to the brand when used standalone */
  border-left: 3px solid var(--lp-accent, var(--vp-c-brand-1));
  border-radius: 8px;
  padding: 0.4rem 0.6rem;
  font-size: 0.84rem;
  transition: border-color 0.15s, background 0.15s;
}
.decoded__items li:hover {
  background: color-mix(in srgb, var(--lp-accent, var(--vp-c-brand-1)) 5%, transparent);
  border-left-color: var(--lp-accent, var(--vp-c-brand-1));
}
.decoded__label {
  font-weight: 600;
  color: var(--vp-c-text-1);
}
.decoded__detail {
  display: block;
  margin-top: 0.15rem;
  font-size: 0.78rem;
  color: var(--vp-c-text-2);
}
.decoded__boundary {
  margin: 0;
  font-size: 0.76rem;
  color: var(--vp-c-text-3);
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 0.55rem;
}
.decoded__boundary strong {
  color: var(--lp-accent, var(--vp-c-brand-1));
}
</style>

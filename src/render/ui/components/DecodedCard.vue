<script setup lang="ts">
// ☵ Kǎn · Water · abysmal · upper·yang · breath — the shared decode card, now an interactive 10D widget
const ICHING_MASK = { hexagram: 19, glyph: '☵', lower: '☱', upper: '☵', color: '#0F00FF' } as const
import { computed, ref } from 'vue'
import { useLocale, useTenDField } from '../lib'

// The shared renderer for a decoded-knowledge fold: a verified statement, the fold's data list, and the honest
// boundary (documented kept, legend flagged). Every domain fold has the same { statement, items, boundary }
// shape, so one card renders all of them — "decode in reusable code", DRY across the domain pages. It is now an
// INTERACTIVE 10D WIDGET: the card's own STATEMENT is the prompt — textToMovie folds it to content-addressed
// particles that orbit through the ten dimensions (dims), the animation being the statement's reproducible
// signature (recompute the text → identical movie; its proof of identity, not of truth). Hover intensifies it;
// energy- & viewport-aware (only visible cards animate), behind the text. One shared engine (useTenDField) — one
// edit makes every decode card across the portal a living widget that proves its own statement by computing it.
const props = defineProps<{
  eyebrow: string
  eyebrowBg?: string
  statement: string
  items: { label: string; detail?: string }[]
  boundary?: string
}>()
const { bg, pick, tg } = useLocale() // tg transcodes the fold CONTENT (statement/items/boundary) to Glagolitic in gla
const eyebrowText = computed(() => pick(props.eyebrow, props.eyebrowBg || props.eyebrow))
const boundaryLabel = computed(() => pick('Boundary', 'Граница'))

// the STATEMENT is the prompt: its own text computes its animation (textToMovie, deterministic & reproducible —
// the animation IS the statement's signature/proof of identity). One shared engine; hover intensifies it.
const bgCanvas = ref<HTMLCanvasElement | null>(null)
const hover = ref(false)
useTenDField(bgCanvas, props.statement || props.eyebrow, hover)
</script>

<template>
  <section
    class="decoded dt-card"
    :data-hexagram="ICHING_MASK.hexagram"
    :data-trigram="ICHING_MASK.glyph"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <canvas ref="bgCanvas" class="decoded__bg" aria-hidden="true" />
    <p class="eyebrow">{{ eyebrowText }}</p>
    <p class="decoded__statement">{{ tg(statement) }}</p>
    <ul class="decoded__items">
      <li v-for="(it, i) in items" :key="i">
        <span class="decoded__label">{{ tg(it.label) }}</span>
        <span v-if="it.detail" class="decoded__detail">{{ tg(it.detail) }}</span>
      </li>
    </ul>
    <p v-if="boundary" class="decoded__boundary"><strong>{{ boundaryLabel }}:</strong> {{ tg(boundary) }}</p>
  </section>
</template>

<style scoped>
.decoded {
  position: relative;
  overflow: hidden;
  margin: 1.25rem 0;
  border-radius: 12px;
  padding: 1rem 1.25rem;
}
.decoded__bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.6;
  pointer-events: none;
}
.decoded > p,
.decoded > ul {
  position: relative;
  z-index: 1;
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
  background: color-mix(in srgb, var(--vp-c-bg) 78%, transparent);
  transition: border-color 0.15s, background 0.15s;
}
.decoded__items li:hover {
  background: color-mix(in srgb, var(--lp-accent, var(--vp-c-brand-1)) 5%, var(--vp-c-bg));
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

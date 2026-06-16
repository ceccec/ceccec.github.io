<script setup lang="ts">
// ☱ Duì · Lake · joyous · upper·yang · twist — self-referencing 10D widget
const ICHING_MASK = { hexagram: 26, glyph: '☱', lo: 'Kǎn·abysmal', up: 'Duì·joyous', color: '#0FF0F0' } as const
import { computed } from 'vue'
import { useLocale } from '../lib/useLocale'
import { fold358853 } from '../lib/quantumMind'

// Fold 358 and 853 — the breath of the tiers. 3 → 5 → 8 expands; 8 → 5 → 3
// contracts; folded together they meet at equilibrium, and because the fold is
// order-sensitive the two roots differ.
const data = fold358853()
const { bg } = useLocale()
const t = computed(() =>
  bg.value
    ? { eyebrow: '358 и 853 · дъхът на нивата', expand: 'разширяване', contract: 'свиване', differ: 'различни корени (редът има значение)' }
    : { eyebrow: '358 and 853 · the breath of the tiers', expand: 'expand', contract: 'contract', differ: 'different roots (order matters)' },
)
</script>

<template>
  <section class="fb dt-card" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <div class="fb__rows">
      <div class="fb__row expand">
        <span class="fb__label">{{ t.expand }} →</span>
        <span v-for="n in data.ascending" :key="'a' + n" class="fb__n">{{ n }}</span>
        <code class="fb__root">{{ data.forward.slice(0, 8) }}</code>
      </div>
      <div class="fb__row contract">
        <span class="fb__label">← {{ t.contract }}</span>
        <span v-for="n in data.descending" :key="'d' + n" class="fb__n alt">{{ n }}</span>
        <code class="fb__root">{{ data.reverse.slice(0, 8) }}</code>
      </div>
    </div>
    <p class="fb__meet">∞ <code>{{ data.root.slice(0, 13) }}…</code> · {{ t.differ }}</p>
  </section>
</template>

<style scoped>
.fb {
  margin: 1.25rem 0;
  border-radius: 12px;
  padding: 1rem 1.25rem;
}
.fb__rows {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin: 0.5rem 0;
}
.fb__row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.fb__label {
  min-width: 6rem;
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
}
.fb__n {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 7px;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}
.fb__n.alt {
  color: var(--vp-c-warning-1, #d97706);
  background: rgba(217, 119, 6, 0.14);
}
.fb__root {
  margin-left: auto;
  font-size: 0.7rem;
  color: var(--vp-c-text-3);
}
.fb__meet {
  margin: 0.5rem 0 0;
  font-size: 0.82rem;
  color: var(--vp-c-text-2);
}
</style>

<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { foldPair, toUuid } from '../lib/quantumMind'

// Each pair is the trinity open graph, used everywhere. A page is a pair — its title
// and its essence (description/category) — and the pair folds, order-sensitive, to a
// third: their merged content address. Two make three. That trinity IS the page's open
// graph card: the two human terms plus the one computed seal that binds them, the same
// shape every page (and the hero) carries.
const { page, title, description, frontmatter } = useData()

const a = computed(() => (title.value || 'Double Torus').toString())
const b = computed(() =>
  (
    (frontmatter.value.ogDescription as string) ||
    (frontmatter.value.description as string) ||
    description.value ||
    (frontmatter.value.category as string) ||
    'a quantum-learning portal'
  ).toString(),
)
// The third of the trinity: the order-sensitive fold of the pair — the page's own seal.
const pair = computed(() => foldPair(toUuid(`og:${a.value}`), toUuid(`og:${b.value}:${page.value.relativePath}`)))
const third = computed(() => pair.value.merged)
const orderSensitive = computed(() => pair.value.bidirectional)
const hue = computed(() => {
  const hex = third.value.replace(/[^0-9a-f]/gi, '')
  let sum = 0
  for (const ch of hex) sum += Number.parseInt(ch, 16) || 0
  return sum % 360
})
</script>

<template>
  <ClientOnly>
    <section class="og-trinity" :style="{ '--og-hue': hue }" aria-label="open-graph trinity: a pair and its fold">
      <header class="og-trinity__head">
        <span class="og-trinity__tag">open graph · pair → trinity</span>
      </header>
      <div class="og-trinity__pair">
        <span class="og-trinity__term">{{ a }}</span>
        <span class="og-trinity__op">·</span>
        <span class="og-trinity__term">{{ b }}</span>
      </div>
      <div class="og-trinity__fold">
        <span class="og-trinity__arrow">↓ fold</span>
        <code class="og-trinity__third">{{ third }}</code>
        <span class="og-trinity__note">{{ orderSensitive ? 'order-sensitive (genus-2)' : 'symmetric' }} — two make three</span>
      </div>
    </section>
  </ClientOnly>
</template>

<style scoped>
.og-trinity {
  margin: 1.5rem 0;
  padding: 1rem 1.1rem;
  border-radius: 12px;
  border: 1px solid hsla(var(--og-hue), 60%, 55%, 0.5);
  background: radial-gradient(circle at 50% 0%, hsla(var(--og-hue), 60%, 50%, 0.1), transparent 70%), var(--vp-c-bg-soft);
}
.og-trinity__tag {
  font-size: 0.66rem;
  letter-spacing: 0.08em;
  text-transform: lowercase;
  color: hsl(var(--og-hue), 65%, 55%);
}
.og-trinity__pair {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5rem;
  margin: 0.4rem 0;
}
.og-trinity__term {
  font-size: clamp(1rem, 2.4vw, 1.4rem);
  font-weight: 600;
  color: var(--vp-c-text-1);
}
.og-trinity__op {
  color: hsl(var(--og-hue), 65%, 55%);
}
.og-trinity__fold {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}
.og-trinity__arrow {
  font-size: 0.72rem;
  color: var(--vp-c-text-2);
}
.og-trinity__third {
  font-size: 0.78rem;
  word-break: break-all;
  color: hsl(var(--og-hue), 60%, 58%);
}
.og-trinity__note {
  font-size: 0.66rem;
  color: var(--vp-c-text-2);
}
</style>

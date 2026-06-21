<script setup lang="ts">
// ☶ Gèn · Mountain · keeping still · upper·yang · shrink — self-referencing 10D widget
const ICHING_MASK = { hexagram: 32, lo: '☷', up: '☶', glyph: '☶', color: '#F00000', name: 'Gèn', principle: 'keeping still' }
import { computed } from 'vue'
import { useLocale } from '../lib'
import { taxonomyIcons, areaLabel } from '../lib'

// Icons for taxonomy: each command area gets an icon. The icons discover gaps —
// any area that is not a clean trinity is flagged, so you can see at a glance
// where the implementation is one fold short or over.
const taxonomy = taxonomyIcons()
const { bg } = useLocale()
const t = computed(() =>
  bg.value
    ? { eyebrow: 'икони-таксономия', sub: `${taxonomy.entries.length} области · ${taxonomy.gaps.length} пролуки`, gap: 'пролука', trinity: 'троица' }
    : { eyebrow: 'icon taxonomy', sub: `${taxonomy.entries.length} areas · ${taxonomy.gaps.length} gaps`, gap: 'gap', trinity: 'trinity' },
)
</script>

<template>
  <section class="taxonomy" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <p class="taxonomy__sub">{{ t.sub }}</p>
    <ul class="taxonomy__grid">
      <li
        v-for="entry in taxonomy.entries"
        :key="entry.area"
        :class="{ gap: entry.gap, trinity: entry.status === 'trinity' }"
        :title="`${areaLabel(entry.area, lang)}: ${entry.verbs.join(', ')} — ${entry.gap ? t.gap : t.trinity}`"
      >
        <span class="taxonomy__icon">{{ entry.icon }}</span>
        <span class="taxonomy__area">{{ areaLabel(entry.area, lang) }}</span>
        <span class="taxonomy__count">{{ entry.count }}</span>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.taxonomy {
  margin: 1.25rem 0;
}
.taxonomy__sub {
  color: var(--vp-c-text-2);
  font-size: 0.85rem;
  margin: 0.1rem 0 0.6rem;
}
.taxonomy__grid {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(108px, 1fr));
  gap: 0.4rem;
}
.taxonomy__grid li {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 0.35rem 0.5rem;
  background: var(--vp-c-bg-soft);
}
.taxonomy__grid li.gap {
  border-style: dashed;
  border-color: var(--vp-c-warning-1, var(--vp-c-warning-1));
}
.taxonomy__grid li.trinity {
  border-color: var(--vp-c-brand-1);
}
.taxonomy__icon {
  font-size: 1.1rem;
}
.taxonomy__area {
  flex: 1;
  font-size: 0.8rem;
  word-break: break-word;
}
.taxonomy__count {
  font-weight: 700;
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
}
.taxonomy__grid li.trinity .taxonomy__count {
  color: var(--vp-c-brand-1);
}
</style>

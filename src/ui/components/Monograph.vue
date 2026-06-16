<script setup>
// ☶ Gèn · Mountain · keeping still · upper·yang · shrink — self-referencing 10D widget
const ICHING_MASK = { hexagram: 34, lo: '☵', up: '☶', glyph: '☶', color: '#F000F0', name: 'Gèn', principle: 'keeping still' }
// All displayed in hero / card / thumb: one renderer for every monograph, at three scales. The data is
// the monograph (staticPages) — title, abstract, figures — content-addressed. Path A: the shadcn Card
// structure rewritten into the repo's own semantic classes (no Tailwind). A seed in, a monograph out.
import { computed } from 'vue'
import { staticPages, toUuid } from '../lib/quantumMind'

const props = defineProps({
  slug: { type: String, default: '' },
  variant: { type: String, default: 'card' }, // hero | card | thumb
})

const pages = staticPages()
const page = computed(() => pages.find((entry) => entry.slug === props.slug) || pages[0])
const id = computed(() => toUuid(`monograph:${page.value.slug}`))
const href = computed(() => `/${page.value.slug}`)
</script>

<template>
  <a :class="['monograph', `monograph--${variant}`]" :href="href" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <span class="monograph-id">{{ id.slice(0, 8) }}</span>
    <h3 class="monograph-title">{{ page.title.en }}</h3>
    <p v-if="variant !== 'thumb'" class="monograph-abstract">{{ page.description.en }}</p>
    <span v-if="variant === 'hero'" class="monograph-meta">{{ page.components.length }} figures · {{ page.keywords.join(' · ') }}</span>
  </a>
</template>

<style scoped>
.monograph {
  display: block;
  text-decoration: none;
  color: inherit;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
}
.monograph:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
  box-shadow: 0 4px 18px var(--vp-c-shadow-1, rgba(0, 0, 0, 0.1));
}
.monograph-id { font-family: var(--vp-font-family-mono); font-size: 11px; color: var(--vp-c-text-3); }
.monograph-title { margin: 0.15rem 0 0; font-weight: 600; line-height: 1.15; color: var(--vp-c-text-1); }
.monograph-abstract { color: var(--vp-c-text-2); margin: 0.5rem 0 0; }
.monograph-meta { display: block; margin-top: 0.75rem; font-size: 12px; color: var(--vp-c-text-3); }

.monograph--hero { padding: 2rem 2.25rem; }
.monograph--hero .monograph-title { font-size: 2rem; }
.monograph--hero .monograph-abstract { font-size: 1.12rem; max-width: 62ch; }

.monograph--card { padding: 1.2rem 1.35rem; }
.monograph--card .monograph-title { font-size: 1.2rem; }
.monograph--card .monograph-abstract {
  font-size: 0.95rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.monograph--thumb { padding: 0.55rem 0.8rem; }
.monograph--thumb .monograph-title { font-size: 0.9rem; }
.monograph--thumb .monograph-id { display: none; }
</style>

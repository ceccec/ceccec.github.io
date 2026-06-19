<script setup lang="ts">
// ☰ Qián · Heaven — the portal, computed from the core. The README out-communicated the homepage because it
// renders the monograph map (every domain, one honest line) from one source; this renders the SAME source
// (staticPages + the live counts) as navigable UI. So a visitor KNOWS the portal from the homepage and clicks
// straight into any domain's depth — core → UI → back, one system, no second copy.
const ICHING_MASK = { hexagram: 1, glyph: '☰', name: 'Qián', attribute: 'the creative portal', color: '#FFF00F' } as const
import { computed } from 'vue'
import { useData } from 'vitepress'
import { staticPages, conceptCommands, monographs, buildMatrix } from '../lib/quantumMind'

const { localeIndex } = useData()
const bg = computed(() => localeIndex.value === 'bg')
const pfx = computed(() => (localeIndex.value === 'bg' ? '/bg/' : localeIndex.value === 'en' ? '/en/' : '/'))

const pages = staticPages()
const refCount = (() => { try { return monographs(buildMatrix()).count } catch { return 0 } })()

const domains = computed(() =>
  pages.map((p) => ({
    slug: p.slug,
    title: bg.value && p.title.bg ? p.title.bg : p.title.en,
    abstract: bg.value && p.description.bg ? p.description.bg : p.description.en,
    keywords: (p.keywords ?? []).slice(0, 4),
    components: p.components.length,
    link: pfx.value + p.slug,
  })),
)
const stats = computed(() => [
  { n: pages.length, label: bg.value ? 'области' : 'domains' },
  { n: conceptCommands.length, label: bg.value ? 'команди' : 'commands' },
  { n: refCount, label: bg.value ? 'референции' : 'references' },
])
</script>

<template>
  <section class="ov" :data-hexagram="ICHING_MASK.hexagram" :style="{ '--ov-accent': ICHING_MASK.color }">
    <p class="ov__eyebrow">{{ bg ? 'порталът — изчислен от ядрото' : 'the portal — computed from the core' }}</p>
    <p class="ov__lead">
      {{ bg
        ? 'Всяка област по-долу е изчислена от един източник (същия като README): заглавие, един честен ред, и връзка към дълбочината. Кликни, за да изследваш.'
        : 'Every domain below is computed from one source (the same as the README): a title, one honest line, and a link into the depth. Click to explore.' }}
    </p>
    <ul class="ov__stats">
      <li v-for="s in stats" :key="s.label"><strong>{{ s.n }}</strong> {{ s.label }}</li>
    </ul>
    <div class="ov__grid">
      <a v-for="d in domains" :key="d.slug" class="ov__card" :href="d.link">
        <span class="ov__title">{{ d.title }}</span>
        <span class="ov__abstract">{{ d.abstract }}</span>
        <span v-if="d.keywords.length" class="ov__kw">{{ d.keywords.join(' · ') }}</span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.ov { margin: 1.5rem 0 2rem; }
.ov__eyebrow {
  font-size: 0.72rem; letter-spacing: 0.08em; text-transform: uppercase;
  color: var(--ov-accent, var(--vp-c-brand-1)); margin: 0 0 0.3rem;
}
.ov__lead { margin: 0 0 1rem; font-size: 0.92rem; color: var(--vp-c-text-2); line-height: 1.5; max-width: 60ch; }
.ov__stats {
  display: flex; flex-wrap: wrap; gap: 0.4rem 1.4rem; list-style: none; padding: 0;
  margin: 0 0 1.2rem; font-size: 0.85rem; color: var(--vp-c-text-3);
}
.ov__stats strong { color: var(--vp-c-text-1); font-variant-numeric: tabular-nums; font-size: 1.05rem; }
.ov__grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 0.7rem;
}
.ov__card {
  display: flex; flex-direction: column; gap: 0.25rem;
  border: 1px solid var(--vp-c-divider);
  border-left: 3px solid var(--ov-accent, var(--vp-c-brand-1));
  border-radius: 10px; padding: 0.7rem 0.85rem;
  background: var(--vp-c-bg-soft); text-decoration: none;
  transition: border-color 0.15s, transform 0.15s, background 0.15s;
}
.ov__card:hover {
  transform: translateY(-2px);
  border-color: var(--ov-accent, var(--vp-c-brand-1));
  background: color-mix(in srgb, var(--ov-accent, var(--vp-c-brand-1)) 5%, var(--vp-c-bg-soft));
}
.ov__card:focus-visible { outline: 2px solid var(--ov-accent, var(--vp-c-brand-1)); outline-offset: 2px; }
.ov__title { font-weight: 600; font-size: 0.92rem; color: var(--vp-c-text-1); }
.ov__abstract { font-size: 0.78rem; color: var(--vp-c-text-2); line-height: 1.45; display: -webkit-box; -webkit-line-clamp: 4; line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; }
.ov__kw { font-size: 0.68rem; color: var(--vp-c-text-3); margin-top: 0.15rem; }
</style>

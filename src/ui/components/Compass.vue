<script setup lang="ts">
// ☲ Lí · Fire · clinging — the Compass: navigation and search FUSED into one "find your way" entry. The same
// computed eight-fold that is the top nav (siteNavigation, the Earth power — the semantic domain map) is shown
// here as a searchable grid: type to filter every page by name or domain, or just browse the eight trigrams.
// Zero-network — the filter is client-side over the already-computed nav; no separate index, no query to a host.
const ICHING_MASK = { hexagram: 30, glyph: '☲', lo: '☲', up: '☲', name: 'Lí', attribute: 'clinging', color: '#F00F0F' } as const
import { ref, computed } from 'vue'
import { siteNavigation } from '../lib/quantumMind'
import { useData } from 'vitepress'

const { localeIndex } = useData()
const bg = computed(() => localeIndex.value === 'bg')
const nav = computed(() => (bg.value ? siteNavigation().bg.nav : siteNavigation().en.nav))
// The Earth power (地) is the SEMANTIC eight-fold — pages by their iChingDomainMap trigram, each page once.
// (Heaven and Human reorganise the same pages by the other two cube axes; here we navigate the meaningful one.)
const sections = computed(() => nav.value.find((d: { text: string }) => /地/.test(d.text))?.items ?? [])
const q = ref('')
const filtered = computed(() => {
  const query = q.value.trim().toLowerCase()
  return sections.value
    .map((s: { text: string; items?: { text: string; link: string }[] }) => ({
      text: s.text,
      items: query ? (s.items ?? []).filter((it) => it.text.toLowerCase().includes(query) || s.text.toLowerCase().includes(query)) : (s.items ?? []),
    }))
    .filter((s) => s.items.length > 0)
})
const hits = computed(() => filtered.value.reduce((n, s) => n + s.items.length, 0))
</script>

<template>
  <section class="compass" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <input
      class="compass__q"
      v-model="q"
      type="search"
      :placeholder="bg ? '⌖ търси или навигирай осемкратното…' : '⌖ search or navigate the eight-fold…'"
      :aria-label="bg ? 'търсене в портала' : 'search the portal'"
    />
    <p class="compass__hits">{{ q ? `${hits} ${bg ? 'намерени' : 'found'}` : (bg ? 'или разгледай осемте тригарама' : 'or browse the eight trigrams') }}</p>
    <div class="compass__grid">
      <section v-for="s in filtered" :key="s.text" class="compass__sec">
        <h4 class="compass__sec-name">{{ s.text }}</h4>
        <ul>
          <li v-for="it in s.items" :key="it.link"><a :href="it.link">{{ it.text }}</a></li>
        </ul>
      </section>
    </div>
  </section>
</template>

<style scoped>
.compass { margin: 1.5rem 0 2rem; }
.compass__q {
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1.05rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}
.compass__q:focus { outline: 2px solid var(--vp-c-brand-1); border-color: var(--vp-c-brand-1); }
.compass__hits { margin: 0.4rem 0 0; font-size: 0.78rem; color: var(--vp-c-text-3); }
.compass__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 0.7rem 1.5rem;
  margin-top: 1.1rem;
}
.compass__sec-name { margin: 0 0 0.3rem; font-size: 0.82rem; color: var(--vp-c-text-2); font-weight: 600; }
.compass__sec ul { list-style: none; padding: 0; margin: 0; }
.compass__sec li { padding: 0.12rem 0; font-size: 0.86rem; }
.compass__sec a { text-decoration: none; }
</style>

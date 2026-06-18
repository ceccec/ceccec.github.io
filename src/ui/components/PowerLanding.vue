<script setup lang="ts">
// ☰ Qián · the Three Powers landing — ONE component for 天 Heaven / 人 Human / 地 Earth. It reads its own route
// slug, maps to the matching power door in siteNavigation, and renders that power's eight-fold (its trigram
// sections + pages). DRY: one component, three destinations; the structure is the computed nav, not hardcoded.
const ICHING_MASK = { hexagram: 1, glyph: '☰', lo: '☰', up: '☰', name: 'Three Powers', attribute: 'creative', color: '#FFF00F' } as const
import { computed } from 'vue'
import { siteNavigation } from '../lib/quantumMind'
import { useData } from 'vitepress'

const { params, localeIndex } = useData()
const bg = computed(() => localeIndex.value === 'bg')
const slug = computed(() => String((params.value as { page?: string } | undefined)?.page ?? ''))
// the three power pages map to the three power doors in the nav (1 Heaven · 2 Human · 3 Earth)
const idx = computed(() => (({ heaven: 1, human: 2, earth: 3 }) as Record<string, number>)[slug.value] ?? 1)
const door = computed(() => (bg.value ? siteNavigation().bg.nav : siteNavigation().en.nav)[idx.value])
const sections = computed(() => (door.value?.items ?? []) as { text: string; items?: { text: string; link: string }[] }[])
const pageCount = computed(() => sections.value.reduce((n, s) => n + (s.items?.length ?? 0), 0))
</script>

<template>
  <section class="power" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <p class="power__head">
      <span class="power__glyph">{{ door?.text }}</span>
      <span class="power__count">{{ pageCount }} {{ bg ? 'страници' : 'pages' }}</span>
    </p>
    <div class="power__grid">
      <section v-for="s in sections" :key="s.text" class="power__sec">
        <h3 class="power__sec-name">{{ s.text }}</h3>
        <ul>
          <li v-for="it in (s.items || [])" :key="it.link"><a :href="it.link">{{ it.text }}</a></li>
        </ul>
      </section>
    </div>
  </section>
</template>

<style scoped>
.power { margin: 1.5rem 0; }
.power__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 0.5rem;
}
.power__glyph { font-size: 1.4rem; font-weight: 700; color: var(--vp-c-brand-1); }
.power__count { font-size: 0.78rem; color: var(--vp-c-text-3); }
.power__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.8rem 1.5rem;
  margin-top: 1.2rem;
}
.power__sec-name { font-size: 0.85rem; color: var(--vp-c-text-2); margin: 0 0 0.3rem; font-weight: 600; }
.power__sec ul { list-style: none; padding: 0; margin: 0; }
.power__sec li { padding: 0.14rem 0; font-size: 0.86rem; }
.power__sec a { text-decoration: none; }
</style>

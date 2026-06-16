<script setup lang="ts">
// ☰ Qián · Heaven · creative · upper·yang · shrink — self-referencing 10D widget
const ICHING_MASK = { hexagram: 62, trigram: '☴☰', glyph: '☴☰', lo: 'Xùn·gentle', up: 'Qián·creative', color: '#FFFFF0' }
import { computed } from 'vue'
import { navigation358 } from '../lib/quantumMind'
import { useLocale } from '../lib/useLocale'

// Navigation in 3-5-8, with a tooltip on every destination. Three to arrive,
// five to use, eight to go deep — each a link whose tip is both a hover title
// and shown inline. Internal routes get the /bg prefix in Bulgarian.
const data = navigation358()
// localize handles the /bg prefix and leaves static artifacts (json/txt/...) as-is.
const { bg, localize: href } = useLocale()

// Bulgarian tooltips, keyed by the English label.
const bgTip: Record<string, string> = {
  Home: 'Обещанията, с прости думи.',
  School: 'Научи го от основата, на всяка възраст.',
  Academy: 'Пет курса, преизчислим акредитив.',
  Console: 'Питай — консултира се със себе си, преди да отговори.',
  Commands: 'Всяка способност, именувана и изпълнима.',
  MCP: 'Инструменталният слой за езикови модели.',
  Show: 'Всичко в действие, слято в една вълна.',
  Mind: 'Формата — двойният торус, в 3d 5d 8d.',
  Architecture: 'Формалният модел и живият печат.',
  Boundaries: 'Всяка граница, която обявява, на едно място.',
  Governance: 'Оценявай и гласувай върху преизчислимия печат.',
  "Developer's mind": 'Всичко е умът на разработчика.',
  'mcp.json': 'Всяка команда като MCP инструмент.',
  'llms.txt': 'Протоколът за хармонизиране на агенти.',
  'digit-index.json': 'Индексът на сгъване на цифрите на пи.',
  'site.webmanifest': 'Манифестът за инсталируемо PWA (PWA).',
}
const bgTier: Record<number, string> = { 3: 'пристигни', 5: 'използвай', 8: 'навлез' }

function tip(label: string, fallback: string) {
  return bg.value ? bgTip[label] ?? fallback : fallback
}
const t = computed(() => (bg.value ? { eyebrow: 'навигация · 3-5-8', tiers: bgTier } : { eyebrow: 'navigation · 3-5-8', tiers: { 3: 'arrive', 5: 'use', 8: 'go deep' } as Record<number, string> }))
</script>

<template>
  <section class="nav358 dt-card" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <div class="nav358__tiers">
      <div v-for="tier in data.tiers" :key="tier.tier" class="nav358__tier">
        <p class="nav358__h"><span class="nav358__n">{{ tier.tier }}</span> {{ t.tiers[tier.tier] }}</p>
        <ul>
          <li v-for="item in tier.items" :key="item.label">
            <a :href="href(item.route)" :title="tip(item.label, item.tip)">{{ item.label }}</a>
            <span class="nav358__tip">{{ tip(item.label, item.tip) }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.nav358 {
  margin: 1.5rem 0;
  border-radius: 14px;
  padding: 1.2rem 1.4rem;
}
.nav358__tiers {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.9rem;
}
@media (min-width: 720px) {
  .nav358__tiers {
    grid-template-columns: auto auto 1fr;
  }
}
.nav358__h {
  margin: 0 0 0.4rem;
  font-size: 0.74rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--vp-c-text-3);
}
.nav358__n {
  display: inline-block;
  min-width: 1.3rem;
  text-align: center;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  border-radius: 5px;
}
.nav358__tier ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.nav358__tier li {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.nav358__tier a {
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
}
.nav358__tip {
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
}
</style>

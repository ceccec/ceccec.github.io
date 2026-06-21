<script setup>
// ☷ Kūn · Earth · receptive · upper·yang · twist — self-referencing 10D widget
const ICHING_MASK = { hexagram: 3, glyph: '☷', trigram: 'Kūn·receptive', color: '#0000FF' }
// REALTIME WIRING, rendered. At this scale the navigation cannot be hand-maintained, so every page computes
// its own from its route: realtimeWiring(path) returns the three trinity gateways every page leads to
// (proven · animated · presented) and the related paths (scored by shared tags = shared seed = entanglement).
// The computed recomputes the instant the route changes — that IS the realtime wiring. Client-side, zero-token.
// Mounted in the left sidebar (sidebar-nav-after) on every page. Locale-aware like the corpus-index components.
import { computed } from 'vue'
import { useRoute, useData } from 'vitepress'
import { realtimeWiring } from '../lib'

const route = useRoute()
const { localeIndex } = useData()
const bg = computed(() => localeIndex.value === 'bg')
const pfx = computed(() => (localeIndex.value === 'en' ? '/en' : localeIndex.value === 'bg' ? '/bg' : ''))

// REALTIME: the whole wiring for THIS route, recomputed on every navigation.
const wiring = computed(() => realtimeWiring(route.path))
const href = (slug) => `${pfx.value}/${slug}`
const REALM_BG = { proven: 'доказано', animated: 'анимирано', presented: 'представено' }
const realm = (r) => (bg.value ? REALM_BG[r] ?? r : r)
</script>

<template>
  <nav class="tg" :aria-label="bg ? 'Троични портали и свързани пътища' : 'Trinity gateways and related paths'" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <p class="tg__label">{{ bg ? 'Портали' : 'Gateways' }}</p>
    <ul class="tg__gateways" role="list">
      <li v-for="g in wiring.gateways" :key="g.slug" :style="{ '--hue': g.hue }">
        <a class="tg__gw" :class="{ 'tg--here': wiring.here === g.slug }" :href="href(g.slug)" :aria-current="wiring.here === g.slug ? 'page' : undefined">
          <span class="tg__glyph" aria-hidden="true">{{ g.glyph }}</span>
          <span class="tg__gw-text">
            <span class="tg__realm">{{ realm(g.realm) }}</span>
            <span class="tg__name">{{ bg ? g.titleBg : g.titleEn }}</span>
          </span>
        </a>
      </li>
    </ul>

    <template v-if="wiring.related.length">
      <p class="tg__label">{{ bg ? 'Свързани пътища' : 'Related paths' }}</p>
      <ul class="tg__related" role="list">
        <li v-for="r in wiring.related" :key="r.slug" :style="{ '--hue': r.hue }">
          <a class="tg__rel" :href="href(r.slug)" :title="(bg ? 'споделени етикети' : 'shared tags') + ': ' + r.shared.join(', ')">
            <span class="tg__dot" aria-hidden="true"></span>
            <span class="tg__name">{{ bg ? r.titleBg : r.titleEn }}</span>
            <span class="tg__score" :aria-label="`${r.score} ${bg ? 'споделени' : 'shared'}`">{{ r.score }}</span>
          </a>
        </li>
      </ul>
    </template>
  </nav>
</template>

<style scoped>
.tg {
  margin: 1.25rem 0 0.5rem;
  padding-top: 1rem;
  border-top: 1px solid var(--vp-c-divider);
}
.tg__label {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
  margin: 0 0 0.5rem;
}
.tg__gateways,
.tg__related {
  list-style: none;
  margin: 0 0 1rem;
  padding: 0;
  display: grid;
  gap: 0.3rem;
}
.tg__gw {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.4rem 0.55rem;
  border-radius: 8px;
  border-left: 3px solid hsl(var(--hue) 65% 55%);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: background 0.18s, transform 0.18s;
}
.tg__gw:hover {
  background: color-mix(in oklab, hsl(var(--hue) 65% 55%) 14%, var(--vp-c-bg-soft));
  transform: translateX(2px);
}
.tg__gw.tg--here {
  box-shadow: 0 0 0 1px hsl(var(--hue) 65% 55%) inset;
}
.tg__glyph {
  font-size: 1.05rem;
  line-height: 1;
  color: hsl(var(--hue) 65% 55%);
  flex: none;
  width: 1.2rem;
  text-align: center;
}
.tg__gw-text {
  display: flex;
  flex-direction: column;
  min-width: 0;
}
.tg__realm {
  font-size: 0.62rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: hsl(var(--hue) 50% 50%);
}
.tg__name {
  font-size: 0.82rem;
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tg__rel {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.4rem;
  border-radius: 6px;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.18s, background 0.18s;
}
.tg__rel:hover {
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-soft);
}
.tg__dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex: none;
  background: hsl(var(--hue) 65% 55%);
}
.tg__rel .tg__name {
  flex: 1;
  font-size: 0.8rem;
}
.tg__score {
  font-size: 0.65rem;
  font-variant-numeric: tabular-nums;
  color: var(--vp-c-text-3);
  background: var(--vp-c-default-soft);
  border-radius: 999px;
  padding: 0.02rem 0.4rem;
  flex: none;
}
.tg__gw:focus-visible,
.tg__rel:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}
</style>

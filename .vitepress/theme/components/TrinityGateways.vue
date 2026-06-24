<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import { realtimeWiring } from '../../../src/thunder/trading/index.ts'
import { useSiteLocale } from '../../lib/mounts'
import UiCardShell from './UiCardShell.vue'

const route = useRoute()
const { pick, localize } = useSiteLocale()

const wire = computed(() => realtimeWiring(route.path))

const seedParts = computed(() => ['trinity-gateways', wire.value.here] as const)

const link = (slug: string) => localize(slug ? `/${slug}` : '/')

const gatewaysLabel = computed(() => pick('Trinity gateways', 'Троични портали'))
const relatedLabel = computed(() => pick('Related by shared tags', 'Свързани по общи тагове'))
const navAria = computed(() => pick('Trinity gateways', 'Троични портали'))
</script>

<template>
  <UiCardShell
    v-if="wire.gateways.length"
    class="trinity-gateways"
    component="TrinityGateways"
    ghost
    movie-intensity="soft"
    :seed-parts="seedParts"
    :title="gatewaysLabel"
  >
    <nav :aria-label="navAria">
      <p class="trinity-gateways__heading">{{ gatewaysLabel }}</p>
      <ul class="trinity-gateways__list">
        <li v-for="gateway in wire.gateways" :key="gateway.slug">
          <a
            class="trinity-gateways__link"
            :href="link(gateway.slug)"
            :style="{ '--gateway-hue': gateway.hue }"
          >
            <span class="trinity-gateways__glyph">{{ gateway.glyph }}</span>
            <span class="trinity-gateways__realm">{{ gateway.realm }}</span>
            <span class="trinity-gateways__title">{{ pick(gateway.titleEn, gateway.titleBg) }}</span>
          </a>
        </li>
      </ul>

      <template v-if="wire.related.length">
        <p class="trinity-gateways__heading trinity-gateways__heading--related">{{ relatedLabel }}</p>
        <ul class="trinity-gateways__list trinity-gateways__list--related">
          <li v-for="related in wire.related" :key="related.slug">
            <a
              class="trinity-gateways__link trinity-gateways__link--related"
              :href="link(related.slug)"
              :style="{ '--gateway-hue': related.hue }"
            >
              {{ pick(related.titleEn, related.titleBg) }}
            </a>
          </li>
        </ul>
      </template>
    </nav>
  </UiCardShell>
</template>

<style scoped>
.trinity-gateways {
  margin: calc(var(--vp-movie-gap, 0.75rem) * 0.5) 0;
}

.trinity-gateways__heading {
  margin: 0 0 calc(var(--vp-movie-gap, 0.5rem) * 0.85);
  font-size: calc(0.78rem + var(--vp-movie-gap, 0.5rem) * 0.05);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  opacity: var(--vp-movie-fade, 0.72);
}

.trinity-gateways__heading--related {
  margin-top: calc(var(--vp-movie-gap, 0.75rem) * 1.1);
}

.trinity-gateways__list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: calc(var(--vp-movie-gap, 0.5rem) * 0.55);
}

.trinity-gateways__link {
  display: grid;
  grid-template-columns: auto auto 1fr;
  align-items: baseline;
  gap: 0.35rem 0.45rem;
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-size: calc(0.86rem + var(--vp-movie-gap, 0.5rem) * 0.04);
}

.trinity-gateways__link:hover {
  color: var(--vp-movie-link);
}

.trinity-gateways__glyph {
  color: oklch(0.72 0.11 calc(var(--gateway-hue) * 1deg));
}

.trinity-gateways__realm {
  font-size: 0.82em;
  opacity: var(--vp-movie-fade, 0.7);
}

.trinity-gateways__link--related {
  display: block;
}
</style>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import { realtimeWiring } from '../../../src/thunder/trading/index.ts'
import { useSiteLocale } from '../../lib/mounts'
import UiCardShell from './UiCardShell.vue'
import LinkedHeroCard from './LinkedHeroCard.vue'

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
        <div class="trinity-gateways__related-cards">
          <LinkedHeroCard
            v-for="related in wire.related"
            :key="related.slug"
            :route="related.slug ? `/${related.slug}` : '/'"
            :title="pick(related.titleEn, related.titleBg)"
            :glyph="related.glyph"
            :hue="related.hue"
          />
        </div>
      </template>
    </nav>
  </UiCardShell>
</template>

<style scoped>
.trinity-gateways {
  margin: calc(var(--vp-movie-gap, var(--ich-sp6)) * calc(1 / 2)) 0;
}

.trinity-gateways__heading {
  margin: 0 0 calc(var(--vp-movie-gap, var(--ich-sp4)) * calc(5 / 6));
  font-size: var(--ich-text-ms);
  letter-spacing: var(--ich-track-ui);
  text-transform: uppercase;
  opacity: var(--vp-movie-fade, var(--ich-op-soft));
}

.trinity-gateways__heading--related {
  margin-top: calc(var(--vp-movie-gap, var(--ich-sp6)) * calc(9 / 8));
}

.trinity-gateways__list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: calc(var(--vp-movie-gap, var(--ich-sp4)) * calc(3 / 5));
}

.trinity-gateways__link {
  display: grid;
  grid-template-columns: auto auto 1fr;
  align-items: baseline;
  gap: var(--ich-gap-row) var(--ich-gap-col);
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-size: var(--ich-text-ml);
}

.trinity-gateways__link:hover {
  color: var(--vp-movie-link);
}

.trinity-gateways__glyph {
  color: oklch(var(--ich-oklch-l-glyph) var(--ich-oklch-c-gateway) calc(var(--gateway-hue) * 1deg));
}

.trinity-gateways__realm {
  font-size: var(--ich-em-sm);
  opacity: var(--vp-movie-fade, var(--ich-op-soft));
}

.trinity-gateways__link--related {
  display: block;
}

.trinity-gateways__related-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));
  gap: calc(var(--vp-movie-gap, var(--ich-sp4)) * calc(2 / 3));
}
</style>

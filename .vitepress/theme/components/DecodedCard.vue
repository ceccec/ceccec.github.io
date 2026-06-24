<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import {
  decodedCardCrosslinksLabel,
  decodedCardFacetMark,
} from '@vp-lib/hero-movie'
import type { ComponentCrosslink } from '../../lib/crosslinks'
import { useSiteLocale } from '../../lib/mounts'
import UiCardShell from './UiCardShell.vue'

export type DecodedFacet = { facet: string; on?: boolean; receipt?: string; link?: string }
export type DecodedStation = { step?: number; station: string; route: string; why?: string }

const props = defineProps<{
  title?: string
  statement?: string
  boundary?: string
  facets?: DecodedFacet[]
  stations?: DecodedStation[]
  crosslinks?: ComponentCrosslink[]
  ok?: boolean
  /** Heading level for card title — use 3 when nested under a page h1. */
  titleLevel?: 2 | 3
  /** Omit visible title when parent already shows the same heading. */
  skipTitle?: boolean
}>()

const route = useRoute()
const { t, localize, locale, pick } = useSiteLocale()

const seedParts = computed(() => [props.title, props.statement, route.path] as const)

const displayTitle = computed(() => t(props.title))
const titleLevel = computed(() => props.titleLevel ?? 2)
const showTitle = computed(() => Boolean(displayTitle.value) && !props.skipTitle)
const displayFacets = computed(() =>
  props.facets?.map((facet) => ({ ...facet, facet: t(facet.facet) ?? facet.facet })),
)
const displayStations = computed(() =>
  props.stations?.map((station) => ({
    ...station,
    station: t(station.station) ?? station.station,
  })),
)
const displayCrosslinks = computed(() =>
  props.crosslinks?.map((link) => ({ ...link, text: t(link.text) ?? link.text })),
)

const crosslinksLabel = computed(() =>
  decodedCardCrosslinksLabel(locale.value, route.path, props.crosslinks?.length ?? 0),
)
const relatedAria = computed(() => pick('Related links', 'Свързани връзки'))

const titleId = computed(() => {
  const title = displayTitle.value
  if (!title) return undefined
  return title
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 48)
})
</script>

<template>
  <UiCardShell class="decoded-card" :seed-parts="seedParts" :title="displayTitle">
    <component
      :is="titleLevel === 3 ? 'h3' : 'h2'"
      v-if="showTitle"
      :id="titleId"
      class="decoded-card__title"
    >{{ displayTitle }}</component>
    <ol v-if="displayStations?.length" class="decoded-card__stations">
      <li v-for="station in displayStations" :key="station.route + station.station">
        <a :href="localize(station.route)">{{ station.station }}</a>
      </li>
    </ol>
    <ul v-else-if="displayFacets?.length" class="decoded-card__facets">
      <li v-for="(facet, index) in displayFacets" :key="facet.facet">
        <span class="decoded-card__mark" :class="{ 'decoded-card__mark--on': facet.on }">{{
          decodedCardFacetMark(facet.on ?? false, index, facet.facet)
        }}</span>
        <a v-if="facet.link" :href="localize(facet.link)">{{ facet.facet }}</a>
        <template v-else>{{ facet.facet }}</template>
      </li>
    </ul>
    <nav v-if="displayCrosslinks?.length" class="decoded-card__crosslinks" :aria-label="relatedAria">
      <span class="decoded-card__crosslinks-label">{{ crosslinksLabel }}</span>
      <a
        v-for="link in displayCrosslinks"
        :key="link.link"
        :href="link.link"
        class="decoded-card__crosslink"
        :data-kind="link.kind"
      >{{ link.text }}</a>
    </nav>
  </UiCardShell>
</template>

<style scoped>
.decoded-card__title {
  font-weight: 600;
  margin: 0 0 var(--vp-movie-gap);
}

.decoded-card__stations,
.decoded-card__facets {
  margin: 0 0 calc(var(--vp-movie-gap) * 1.5);
}

.decoded-card__mark {
  display: inline-block;
  width: calc(var(--vp-movie-gap) * 3.1);
  font-family: var(--vp-font-family-mono);
}

.decoded-card__crosslinks {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  margin: 0 0 calc(var(--vp-movie-gap) * 1.5);
}

.decoded-card__crosslinks-label {
  margin-right: var(--vp-movie-gap);
}

.decoded-card__crosslink {
  text-decoration: none;
  border-bottom: 1px dotted var(--vp-movie-link);
}
</style>

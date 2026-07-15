<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import {
  decodedCardCrosslinksLabel,
  decodedCardFacetMark,
} from '@vp-lib/hero-movie'
import type { ComponentCrosslink } from '../../lib/crosslinks'
import type { QuantumProjection } from '@vp-lib/hero-movie'
import { useSiteLocale } from '../../lib/mounts'
import UiCardShell from './UiCardShell.vue'
import { UiBadge } from '../../lib/shadcn-ui.ts'
import ProofAnimation from './ProofAnimation.vue'
import { specForContent } from '../../../src/thunder/waves'

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
  /** Quantum-app projection painted as this card's movie (the card's animation = a view of the field). */
  movieApp?: QuantumProjection
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

// simplify & animate law: every card leads with its computed animation (the one renderer, the one
// keyword table) unless a movie projection already animates it; prose clamps behind the figure.
const animSpec = computed(() => (props.movieApp || !displayTitle.value ? null : specForContent(displayTitle.value)))

const titleId = computed(() => {
  const title = displayTitle.value
  if (!title) return undefined
  return title
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, (16 * 3))
})
</script>

<template>
  <UiCardShell class="decoded-card" :seed-parts="seedParts" :title="displayTitle" :movie-app="movieApp">
    <component
      :is="titleLevel === 3 ? 'h3' : 'h2'"
      v-if="showTitle"
      :id="titleId"
      class="decoded-card__title"
    >{{ displayTitle }}</component>
    <ClientOnly v-if="animSpec">
      <figure class="decoded-card__anim" aria-hidden="true">
        <ProofAnimation :spec="animSpec" :size="2 * 9 * 5" />
      </figure>
    </ClientOnly>
    <p v-if="statement" class="decoded-card__statement decoded-card__clamp" @click="($event.currentTarget as HTMLElement).classList.toggle('decoded-card__clamp')">{{ t(statement) }}</p>
    <p v-if="boundary" class="decoded-card__boundary">{{ t(boundary) }}</p>
    <ol v-if="displayStations?.length" class="decoded-card__stations">
      <li v-for="station in displayStations" :key="station.route + station.station">
        <a :href="localize(station.route)">{{ station.station }}</a>
      </li>
    </ol>
    <ul v-else-if="displayFacets?.length" class="decoded-card__facets">
      <li v-for="(facet, index) in displayFacets" :key="facet.facet">
        <UiBadge
          variant="outline"
          :class="facet.on ? 'ui-badge--on decoded-card__facet-badge' : 'ui-badge--off decoded-card__facet-badge'"
        >{{
          decodedCardFacetMark(facet.on ?? false, index, facet.facet)
        }}</UiBadge>
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
      >
        <UiBadge variant="outline">{{ link.text }}</UiBadge>
      </a>
    </nav>
  </UiCardShell>
</template>

<style scoped>
.decoded-card__title {
  font-weight: var(--ich-weight-semibold);
  margin: 0 0 var(--vp-movie-gap);
}

.decoded-card__statement {
  margin: 0 0 var(--vp-movie-gap);
  line-height: var(--ich-lh-relaxed);
  text-shadow: var(--vp-hero-text-shadow);
}

.decoded-card__boundary {
  margin: 0 0 calc(var(--vp-movie-gap) * calc(3 / 2));
  padding-left: calc(var(--vp-movie-gap) * calc(5 / 4));
  border-left: calc(var(--ich-line) * 2) solid var(--vp-movie-link);
  font-size: var(--ich-em-card-title);
  line-height: var(--ich-lh-normal);
  opacity: var(--ich-op-card-soft);
  text-shadow: var(--vp-hero-text-shadow);
}

.decoded-card__stations,
.decoded-card__facets {
  margin: 0 0 calc(var(--vp-movie-gap) * calc(3 / 2));
}

.decoded-card__facet-badge {
  margin-right: calc(var(--vp-movie-gap) * calc(1 / 2));
  font-family: var(--vp-font-family-mono);
  font-size: var(--ich-em-card-meta);
}

.decoded-card__crosslinks {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: calc(var(--vp-movie-gap) * calc(1 / 2));
  margin: 0 0 calc(var(--vp-movie-gap) * calc(3 / 2));
}

.decoded-card__crosslinks-label {
  margin-right: var(--vp-movie-gap);
}

.decoded-card__crosslink {
  text-decoration: none;
}
.decoded-card__anim { margin: 0; display: grid; justify-items: center; }
.decoded-card__anim canvas { max-width: calc(1px * 2 * 9 * 5); }
.decoded-card__clamp { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; overflow: hidden; cursor: pointer; }
</style>

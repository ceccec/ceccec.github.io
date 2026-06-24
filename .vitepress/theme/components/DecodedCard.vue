<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import { localeFromRoute, localePath } from '../../../src/site/index'
import {
  cardMovieColorVars,
  cardMovieSeed,
  decodedCardCrosslinksLabel,
  decodedCardFacetMark,
} from '@vp-lib/hero-movie'
import type { ComponentCrosslink } from '../../lib/crosslinks'
import CardBackgroundMovie from './CardBackgroundMovie.vue'

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
}>()

const route = useRoute()
const locale = computed(() => localeFromRoute(route.path))
const localize = (path: string) => localePath(path, locale.value)

const movieSeed = computed(() => cardMovieSeed([props.title, props.statement, route.path]))
const cardStyle = computed(() => cardMovieColorVars(route.path, movieSeed.value))
const crosslinksLabel = computed(() =>
  decodedCardCrosslinksLabel(locale.value, route.path, props.crosslinks?.length ?? 0),
)
</script>

<template>
  <article class="decoded-card ui-card" data-shadcn="card" :style="cardStyle">
    <CardBackgroundMovie :seed="movieSeed" :title="title" />
    <div class="ui-card__content">
      <header v-if="title" class="decoded-card__title">{{ title }}</header>
      <p v-if="statement" class="decoded-card__statement">{{ statement }}</p>
      <ol v-if="stations?.length" class="decoded-card__stations">
        <li v-for="station in stations" :key="station.route + station.station">
          <a :href="localize(station.route)">{{ station.station }}</a>
          <span v-if="station.why"> — {{ station.why }}</span>
        </li>
      </ol>
      <ul v-else-if="facets?.length" class="decoded-card__facets">
        <li v-for="(facet, index) in facets" :key="facet.facet">
          <span class="decoded-card__mark" :class="{ 'decoded-card__mark--on': facet.on }">{{
            decodedCardFacetMark(facet.on ?? false, index, facet.facet)
          }}</span>
          <a v-if="facet.link" :href="localize(facet.link)">{{ facet.facet }}</a>
          <template v-else>{{ facet.facet }}</template>
        </li>
      </ul>
      <nav v-if="crosslinks?.length" class="decoded-card__crosslinks" aria-label="Related">
        <span class="decoded-card__crosslinks-label">{{ crosslinksLabel }}</span>
        <a
          v-for="link in crosslinks"
          :key="link.link"
          :href="link.link"
          class="decoded-card__crosslink"
          :data-kind="link.kind"
        >{{ link.text }}</a>
      </nav>
      <p v-if="boundary" class="decoded-card__boundary">{{ boundary }}</p>
    </div>
  </article>
</template>

<style scoped>
.ui-card__content {
  position: relative;
  z-index: 1;
}

.decoded-card__title {
  font-weight: 600;
  margin: 0 0 var(--vp-movie-gap);
}

.decoded-card__statement {
  margin: 0 0 calc(var(--vp-movie-gap) * 1.5);
}

.decoded-card__stations,
.decoded-card__facets {
  margin: 0 0 calc(var(--vp-movie-gap) * 1.5);
  padding-left: calc(var(--vp-movie-pad-x) * 1.1);
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
  font-size: calc(0.82rem + var(--vp-movie-gap) * 0.12);
}

.decoded-card__crosslinks-label {
  margin-right: var(--vp-movie-gap);
}

.decoded-card__crosslink {
  text-decoration: none;
  border-bottom: 1px dotted var(--vp-movie-link);
}

.decoded-card__boundary {
  margin: 0;
  font-size: calc(0.82rem + var(--vp-movie-gap) * 0.06);
  line-height: var(--vp-movie-line-height);
}
</style>

<script setup lang="ts">
import { computed } from 'vue'
import { heroPreviewForRoute } from '../../../src/wind/routes/corpus/index.ts'
import { useSiteLocale } from '../../lib/mounts'
import UiCardShell from './UiCardShell.vue'

const props = defineProps<{
  route: string
  title?: string
  glyph?: string
  hue?: number
}>()

const { t, localize, scriptGlyph } = useSiteLocale()

// Hero is the abstract: preview seed + destination movieRoute drive CardBackgroundMovie —
// full intensity so animation *forms* the card body (not a whisper chrome inset).
const preview = computed(() => heroPreviewForRoute(props.route, props.title))
const href = computed(() => localize(props.route))
const seedParts = computed(() => [props.route, preview.value.title] as const)
const displayTitle = computed(() => t(props.title) ?? preview.value.title)
</script>

<template>
  <a
    :href="href"
    class="linked-hero-card linked-hero-card--forms"
    data-logic="src/quantum/apps/index.ts#dryAllToUnifiedComponentsWiredToRosettaWhichIsTheMovie"
    data-wire="rosetta→movie"
    :style="{ '--card-hue': props.hue ?? preview.hue }"
  >
    <UiCardShell
      class="linked-hero-card__shell"
      :seed-parts="seedParts"
      :movie-route="route"
      :title="displayTitle"
      movie-intensity="full"
    >
      <span v-if="scriptGlyph(glyph)" class="linked-hero-card__glyph" aria-hidden="true">{{ glyph }}</span>
      <span class="linked-hero-card__title">{{ displayTitle }}</span>
      <span v-if="$slots.meta" class="linked-hero-card__meta"><slot name="meta" /></span>
    </UiCardShell>
  </a>
</template>

<script lang="ts">
export default { name: 'LinkedHeroCard' }
</script>

<style scoped>
.linked-hero-card {
  display: block;
  text-decoration: none;
  color: inherit;
  min-height: 100%;
}

/* Abstract → concrete: card body IS the hero movie plane (pair card/forms). */
.linked-hero-card--forms :deep(.ui-card) {
  min-height: calc(var(--vp-movie-min-h) * calc(5 / 4));
  border-color: color-mix(
    in oklch,
    oklch(var(--ich-oklch-l-glyph) var(--ich-oklch-c-glyph) calc(var(--card-hue) * 1deg)),
    transparent calc(9 / 16 * 100%)
  );
  background: transparent;
}

.linked-hero-card--forms :deep(.ui-card__movie) {
  opacity: 1;
}

.linked-hero-card--forms :deep(.ui-card::after) {
  /* Soft morph accent — hue from the shared hero field, not chrome stripe. */
  background: linear-gradient(
    var(--vp-movie-gradient-angle),
    color-mix(
      in oklch,
      oklch(var(--ich-oklch-l-glyph) var(--ich-oklch-c-glyph) calc(var(--card-hue) * 1deg)),
      transparent calc(9 / 16 * 100%)
    ),
    transparent
  );
  height: calc(var(--vp-movie-accent-h) * 2);
}

.linked-hero-card--forms :deep(.ui-card__content) {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: calc(var(--vp-movie-min-h) * calc(5 / 4));
  padding: calc(var(--vp-movie-pad-y) * calc(5 / 4)) calc(var(--vp-movie-pad-x) * calc(5 / 4));
}

.linked-hero-card__shell {
  height: 100%;
}

.linked-hero-card__glyph {
  display: block;
  font-size: calc(var(--vp-movie-gap, var(--ich-sp4)) * calc(7 / 4));
  color: oklch(var(--ich-oklch-l-glyph) var(--ich-oklch-c-glyph) calc(var(--card-hue, 200) * 1deg));
  margin-bottom: calc(var(--vp-movie-gap, var(--ich-sp4)) * calc(1 / 2));
}

.linked-hero-card__title {
  display: block;
  font-weight: var(--ich-weight-semibold);
  font-size: var(--ich-em-card-title);
  line-height: var(--ich-lh-card-title);
  text-shadow: var(--vp-hero-text-shadow);
}

/* Optional meta row — collections pass ordinal/prover/tags into the standard animated card. */
.linked-hero-card__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: calc(var(--vp-movie-gap, var(--ich-sp4)) * calc(1 / 2));
  margin-top: calc(var(--vp-movie-gap, var(--ich-sp4)) * calc(1 / 2));
  font-size: calc(1em * 4 / 5);
  opacity: calc(4 / 5);
}
</style>

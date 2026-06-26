<script setup lang="ts">
import { computed } from 'vue'
import { heroPreviewForRoute } from '../../../src/routes/corpus/index.ts'
import { useSiteLocale } from '../../lib/mounts'
import UiCardShell from './UiCardShell.vue'

const props = defineProps<{
  route: string
  title?: string
  glyph?: string
  hue?: number
}>()

const { t, localize } = useSiteLocale()

const preview = computed(() => heroPreviewForRoute(props.route, props.title))
const href = computed(() => localize(props.route))
const seedParts = computed(() => [props.route, props.title, props.glyph] as const)
const displayTitle = computed(() => t(props.title) ?? preview.value.title)
</script>

<template>
  <a :href="href" class="linked-hero-card" :style="{ '--card-hue': props.hue ?? preview.hue }">
    <UiCardShell
      class="linked-hero-card__shell"
      :seed-parts="seedParts"
      :title="displayTitle"
      movie-intensity="whisper"
    >
      <span v-if="glyph" class="linked-hero-card__glyph" aria-hidden="true">{{ glyph }}</span>
      <span class="linked-hero-card__title">{{ displayTitle }}</span>
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
  font-weight: 600;
  font-size: var(--ich-em-card-title);
  line-height: var(--ich-lh-card-title);
  text-shadow: var(--vp-hero-text-shadow);
}
</style>

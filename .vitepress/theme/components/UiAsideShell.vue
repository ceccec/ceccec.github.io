<script setup lang="ts">
import { useCardMovie, useImmersiveMovie } from '../../lib/mounts'
import CardBackgroundMovie from './CardBackgroundMovie.vue'

const props = withDefaults(
  defineProps<{
    seedParts: readonly (string | undefined)[]
    title?: string
    open?: boolean
    variant?: 'boxed' | 'divider'
    summaryLayout?: 'stack' | 'inline'
  }>(),
  { variant: 'boxed', summaryLayout: 'stack' },
)

defineEmits<{ toggle: [event: Event] }>()

const { seed, cardStyle } = useCardMovie(() => props.seedParts)
const { textShadow } = useImmersiveMovie()
</script>

<template>
  <details
    class="ui-aside"
    :class="[`ui-aside--${variant}`, { 'ui-aside--inline-summary': summaryLayout === 'inline' }]"
    :style="cardStyle"
    :open="open"
    @toggle="$emit('toggle', $event)"
  >
    <CardBackgroundMovie :seed="seed" :title="title" intensity="soft" />
    <summary class="ui-aside__summary" :style="{ textShadow }">
      <slot name="summary" />
    </summary>
    <div class="ui-aside__body" :style="{ textShadow }">
      <slot />
    </div>
  </details>
</template>

<style scoped>
.ui-aside {
  position: relative;
  overflow: hidden;
  background: transparent;
}

.ui-aside--boxed {
  margin: calc(var(--vp-movie-gap, var(--ich-sp6)) * calc(3 / 2)) 0 calc(var(--vp-movie-gap, var(--ich-sp6)) * calc(3 / 4));
  padding: calc(var(--vp-movie-gap, var(--ich-sp6)) * calc(5 / 6)) var(--vp-movie-gap, var(--ich-sp6));
  border: 1px dashed var(--vp-hero-border);
  border-radius: var(--vp-movie-radius, var(--ich-sp4));
}

.ui-aside--divider {
  margin: calc(var(--vp-movie-gap, var(--ich-sp6)) * calc(5 / 6)) 0;
  padding: calc(var(--vp-movie-gap, var(--ich-sp4)) * calc(2 / 3)) 0;
  border-top: 1px dashed var(--vp-hero-border);
}

.ui-aside__summary {
  position: relative;
  z-index: 1;
  cursor: pointer;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--ich-sp1);
}

.ui-aside--inline-summary .ui-aside__summary {
  flex-direction: row;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--ich-gap-row) var(--ich-gap-col);
}

.ui-aside__summary::-webkit-details-marker {
  display: none;
}

.ui-aside__body {
  position: relative;
  z-index: 1;
  margin-top: calc(var(--vp-movie-gap, var(--ich-sp6)) * calc(9 / 10));
  display: flex;
  flex-direction: column;
  gap: calc(var(--vp-movie-gap, var(--ich-sp4)) * calc(3 / 4));
}

.ui-aside--divider .ui-aside__body {
  margin-top: calc(var(--vp-movie-gap, var(--ich-sp4)) * calc(5 / 6));
  font-size: var(--ich-text-ml);
}
</style>

<style>
.ui-aside__title {
  font-size: var(--ich-text-ms);
  letter-spacing: var(--ich-track-ui);
  text-transform: uppercase;
  opacity: var(--vp-movie-fade, var(--ich-op-strong));
}

.ui-aside__hint {
  font-size: var(--ich-text-sm);
  opacity: var(--vp-movie-fade, var(--ich-op-dim));
}

.vp-with-hero-movie .ui-aside .ui-card__movie {
  min-height: 100%;
}
</style>

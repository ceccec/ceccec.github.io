<script setup lang="ts">
import { useCardMovie } from '../../lib/mounts'

const props = withDefaults(
  defineProps<{
    seedParts: readonly (string | undefined)[]
    open?: boolean
    variant?: 'boxed' | 'divider'
    summaryLayout?: 'stack' | 'inline'
  }>(),
  { variant: 'boxed', summaryLayout: 'stack' },
)

defineEmits<{ toggle: [event: Event] }>()

const { cardStyle } = useCardMovie(() => props.seedParts)
</script>

<template>
  <details
    class="ui-aside"
    :class="[`ui-aside--${variant}`, { 'ui-aside--inline-summary': summaryLayout === 'inline' }]"
    :style="cardStyle"
    :open="open"
    @toggle="$emit('toggle', $event)"
  >
    <summary class="ui-aside__summary">
      <slot name="summary" />
    </summary>
    <div class="ui-aside__body">
      <slot />
    </div>
  </details>
</template>

<style scoped>
.ui-aside--boxed {
  margin: calc(var(--vp-movie-gap, 0.75rem) * 1.5) 0 calc(var(--vp-movie-gap, 0.75rem) * 0.75);
  padding: calc(var(--vp-movie-gap, 0.75rem) * 0.85) calc(var(--vp-movie-gap, 0.75rem) * 1);
  border: 1px dashed var(--vp-hero-border);
  border-radius: var(--vp-movie-radius, 0.5rem);
  background: transparent;
}

.ui-aside--divider {
  margin: calc(var(--vp-movie-gap, 0.75rem) * 0.85) 0;
  padding: calc(var(--vp-movie-gap, 0.5rem) * 0.65) 0;
  border-top: 1px dashed var(--vp-hero-border);
}

.ui-aside__summary {
  cursor: pointer;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  text-shadow: var(--vp-hero-text-shadow);
}

.ui-aside--inline-summary .ui-aside__summary {
  flex-direction: row;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.35rem 0.65rem;
}

.ui-aside__summary::-webkit-details-marker {
  display: none;
}

.ui-aside__body {
  margin-top: calc(var(--vp-movie-gap, 0.75rem) * 0.9);
  display: flex;
  flex-direction: column;
  gap: calc(var(--vp-movie-gap, 0.5rem) * 0.75);
  text-shadow: var(--vp-hero-text-shadow);
}

.ui-aside--divider .ui-aside__body {
  margin-top: calc(var(--vp-movie-gap, 0.5rem) * 0.85);
  font-size: calc(0.86rem + var(--vp-movie-gap, 0.5rem) * 0.03);
}
</style>

<style>
.ui-aside__title {
  font-size: calc(0.78rem + var(--vp-movie-gap, 0.5rem) * 0.05);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  opacity: var(--vp-movie-fade, 0.82);
}

.ui-aside__hint {
  font-size: calc(0.82rem + var(--vp-movie-gap, 0.5rem) * 0.03);
  opacity: var(--vp-movie-fade, 0.68);
}
</style>

<script setup lang="ts">
import { computed } from 'vue'
import { revolutChannel } from '../../../src/site/index'
import { useCardMovie, useSiteLocale } from '../../lib/mounts'

const { pick } = useSiteLocale()
const channel = computed(() => revolutChannel())

const { cardStyle } = useCardMovie(() => ['sponsor-chip', channel.value.handle])

const label = computed(() => pick('Sponsor', 'Подкрепа'))
</script>

<template>
  <a
    class="sponsor-chip"
    :style="cardStyle"
    :href="channel.url"
    rel="noopener noreferrer"
    target="_blank"
    :aria-label="label"
  >
    <span class="sponsor-chip__label">{{ label }}</span>
  </a>
</template>

<style scoped>
.sponsor-chip {
  position: fixed;
  z-index: 45;
  right: max(0.75rem, env(safe-area-inset-right, 0px));
  bottom: max(0.75rem, env(safe-area-inset-bottom, 0px));
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: min(14rem, calc(100vw - 1.5rem - env(safe-area-inset-left, 0px) - env(safe-area-inset-right, 0px)));
  padding: 0.4rem 0.65rem;
  border: 1px solid var(--vp-hero-border);
  border-radius: var(--vp-movie-radius, 0.5rem);
  background: var(--vp-hero-bg-ghost);
  backdrop-filter: blur(var(--vp-hero-glass-blur-sm, 6px));
  color: var(--vp-c-text-1);
  text-decoration: none;
  text-shadow: var(--vp-hero-text-shadow);
  pointer-events: auto;
  transition: border-color 0.2s ease, color 0.2s ease;
}

.sponsor-chip:hover {
  color: var(--vp-movie-link);
  border-color: var(--vp-movie-link);
}

.sponsor-chip:focus-visible {
  outline: 2px solid var(--vp-movie-link);
  outline-offset: 2px;
}

.sponsor-chip__label {
  font-size: 0.78rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-weight: 500;
  opacity: var(--vp-movie-fade, 0.88);
}
</style>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import { buildMatrix } from '../../../src/heaven/compute/index'
import { pageForgeMaxTamper } from '../../../src/site/index'
import { useSiteLocale } from '../../lib/mounts'

const route = useRoute()
const { pick } = useSiteLocale()

const forge = computed(() => pageForgeMaxTamper(route.path, buildMatrix()))

const label = computed(() =>
  pick('Forge max tampering cost', 'Кова max цена на подправяне'),
)
</script>

<template>
  <footer
    class="forge-max-tamper-bar"
    :aria-label="label"
    data-shadcn="card"
    data-topic="forge-max-tamper"
  >
    <span class="forge-max-tamper-bar__cost">{{ forge.forgeCostLabel }}</span>
    <span class="forge-max-tamper-bar__sep" aria-hidden="true">·</span>
    <span class="forge-max-tamper-bar__stats">{{ forge.statsLine }}</span>
    <span class="forge-max-tamper-bar__sep" aria-hidden="true">·</span>
    <code class="forge-max-tamper-bar__root">{{ forge.pageRoot.slice(0, 18) }}…</code>
  </footer>
</template>

<style scoped>
.forge-max-tamper-bar {
  position: fixed;
  z-index: 44;
  left: max(0.75rem, env(safe-area-inset-left, 0px));
  right: max(9rem, calc(0.75rem + env(safe-area-inset-right, 0px) + 7rem));
  bottom: max(0.75rem, env(safe-area-inset-bottom, 0px));
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.35rem 0.5rem;
  padding: 0.35rem 0.55rem;
  border: 1px solid var(--vp-hero-border);
  border-radius: var(--vp-movie-radius, 0.5rem);
  background: var(--vp-hero-bg-ghost);
  backdrop-filter: blur(var(--vp-hero-glass-blur-sm, 6px));
  color: var(--vp-c-text-2);
  font-size: 0.68rem;
  line-height: 1.35;
  text-shadow: var(--vp-hero-text-shadow);
  pointer-events: none;
  opacity: var(--vp-movie-fade, 0.82);
}

.forge-max-tamper-bar__cost {
  color: var(--vp-movie-link);
  font-weight: 600;
  letter-spacing: 0.04em;
}

.forge-max-tamper-bar__stats {
  flex: 1 1 auto;
  min-width: 0;
}

.forge-max-tamper-bar__root {
  font-size: 0.65rem;
  opacity: 0.85;
}

.forge-max-tamper-bar__sep {
  opacity: 0.45;
}

@media (max-width: 640px) {
  .forge-max-tamper-bar__stats {
    display: none;
  }
}
</style>

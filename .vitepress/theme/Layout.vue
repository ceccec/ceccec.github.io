<script setup lang="ts">
import { computed, defineAsyncComponent, nextTick, onMounted, onUnmounted, ref, useSlots, watch } from 'vue'
import { useRoute, useData } from 'vitepress'
import DefaultTheme, { VPHomeHero } from 'vitepress/theme'
import ClientOnly from './components/ClientOnly.vue'
const BackgroundMovie = defineAsyncComponent(() => import('./components/BackgroundMovie.vue'))
import HeroBackgroundLayer from './components/HeroBackgroundLayer.vue'
import VoidSidebar from './components/VoidSidebar.vue'
import TrinityGateways from './components/TrinityGateways.vue'
import CollectiveMind from './components/CollectiveMind.vue'
import GlobalHelp from './components/GlobalHelp.vue'
import RevolutAside from './components/RevolutAside.vue'
import VitePressPossibilities from './components/VitePressPossibilities.vue'
import { applyHeroChromeVars } from '../lib/hero-chrome'

const { Layout: VPLayout } = DefaultTheme
const route = useRoute()
const { frontmatter } = useData()
const showHomeHero = computed(() => Boolean(frontmatter.value.hero))
const cssWidth = ref((64 * 16))
const slots = useSlots()
const forwardedSlots = computed(() =>
  Object.keys(slots).filter(
    (name) =>
      name !== 'sidebar-nav-after' &&
      name !== 'sidebar-nav-before' &&
      name !== 'aside-bottom',
  ),
)

let themeObserver: MutationObserver | null = null

function syncHeroChrome(): void {
  applyHeroChromeVars(route.path, cssWidth.value)
}

function onResize(): void {
  if (typeof window !== 'undefined') cssWidth.value = window.innerWidth
  syncHeroChrome()
}

watch(() => route.path, () => nextTick(() => syncHeroChrome()))

onMounted(() => {
  onResize()
  nextTick(() => syncHeroChrome())
  window.addEventListener('resize', onResize)
  themeObserver = new MutationObserver(() => syncHeroChrome())
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
  themeObserver?.disconnect()
  themeObserver = null
})
</script>

<template>
  <div class="vp-with-hero-movie">
    <ClientOnly>
      <div class="vp-with-hero-movie__backdrop" aria-hidden="true">
        <BackgroundMovie />
      </div>
      <HeroBackgroundLayer />
    </ClientOnly>
    <div class="vp-with-hero-movie__content">
      <VPLayout>
        <template #doc-before>
          <div v-if="showHomeHero" class="vp-doc vp-home-hero-doc">
            <VPHomeHero />
          </div>
        </template>
        <template #sidebar-nav-after>
          <TrinityGateways />
          <VoidSidebar />
          <slot name="sidebar-nav-after" />
        </template>
        <template #aside-bottom>
          <RevolutAside />
          <slot name="aside-bottom" />
        </template>
        <template #doc-footer-before>
          <CollectiveMind />
          <GlobalHelp />
          <VitePressPossibilities />
        </template>
        <template v-for="name in forwardedSlots" :key="name" #[name]="slotData">
          <slot :name="name" v-bind="slotData || {}" />
        </template>
      </VPLayout>
    </div>
  </div>
</template>

<style scoped>
.vp-with-hero-movie {
  position: relative;
  min-height: 100vh;
  background: transparent;
}

.vp-with-hero-movie__backdrop {
  position: fixed;
  inset: 0;
  z-index: var(--vp-hero-canvas-z);
  pointer-events: none;
  overflow: hidden;
}

.vp-with-hero-movie__content {
  position: relative;
  z-index: var(--vp-hero-content-z);
  isolation: isolate;
  background: transparent;
}
</style>

<style>
html.vp-hero-immersive .vp-with-hero-movie__backdrop {
  z-index: calc(var(--vp-hero-content-z) + 1);
}
</style>

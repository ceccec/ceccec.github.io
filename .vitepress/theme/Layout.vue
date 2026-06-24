<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, useSlots, watch } from 'vue'
import { useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import ClientOnly from './components/ClientOnly.vue'
import BackgroundMovie from './components/BackgroundMovie.vue'
import HeroBackgroundLayer from './components/HeroBackgroundLayer.vue'
import RealtimeSubtitles from './components/RealtimeSubtitles.vue'
import VoidSidebar from './components/VoidSidebar.vue'
import TrinityGateways from './components/TrinityGateways.vue'
import CollectiveMind from './components/CollectiveMind.vue'
import GlobalHelp from './components/GlobalHelp.vue'
import RevolutAside from './components/RevolutAside.vue'
import SponsorChip from './components/SponsorChip.vue'
import ForgeMaxTamperBar from './components/ForgeMaxTamperBar.vue'
import VitePressPossibilities from './components/VitePressPossibilities.vue'
import { applyHeroChromeVars } from '../lib/hero-chrome'

const { Layout: VPLayout } = DefaultTheme
const route = useRoute()
const cssWidth = ref(1024)
const slots = useSlots()
const forwardedSlots = computed(() =>
  Object.keys(slots).filter((name) => name !== 'sidebar-nav-after' && name !== 'sidebar-nav-before'),
)

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
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
})
</script>

<template>
  <div class="vp-with-hero-movie">
    <ClientOnly>
      <div class="vp-with-hero-movie__backdrop" aria-hidden="true">
        <BackgroundMovie />
      </div>
      <HeroBackgroundLayer />
      <RealtimeSubtitles />
      <ForgeMaxTamperBar />
      <SponsorChip />
    </ClientOnly>
    <div class="vp-with-hero-movie__content">
      <VPLayout>
        <template #sidebar-nav-after>
          <TrinityGateways />
          <RevolutAside />
          <VoidSidebar />
          <slot name="sidebar-nav-after" />
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

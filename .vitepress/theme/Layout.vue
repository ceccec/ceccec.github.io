<script setup lang="ts">
import { computed, defineAsyncComponent, nextTick, onMounted, onUnmounted, ref, useSlots, watch } from 'vue'
import { useRoute, useData } from 'vitepress'
import DefaultTheme, { VPHomeHero } from 'vitepress/theme'
import ClientOnly from './components/ClientOnly.vue'
const BackgroundMovie = defineAsyncComponent(() => import('./components/BackgroundMovie.vue'))
import HeroBackgroundLayer from './components/HeroBackgroundLayer.vue'
import TrinityGateways from './components/TrinityGateways.vue'
import CollectiveMind from './components/CollectiveMind.vue'
import GlobalHelp from './components/GlobalHelp.vue'
import SpeechReader from './components/SpeechReader.vue'
import RevolutAside from './components/RevolutAside.vue'
import VitePressPossibilities from './components/VitePressPossibilities.vue'
import PaperFrame from './components/PaperFrame.vue'
import { applyHeroChromeVars } from '../lib/hero-chrome'

const { Layout: VPLayout } = DefaultTheme
const route = useRoute()
const { frontmatter, page: pageData } = useData()
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
// EVERY PAGE IS A PAPER, SO EVERY PAGE CARRIES ITS CREDIT. A measurement over the built site found
// 1039 pages with no author, no licence and no DOI outside the Lean theorem pages. The citation is
// computed from the ONE sealed credit fold, never typed here.
import { pageCitation, CANONICAL_HOST } from '../render'
const credit = computed(() => pageCitation(
  (pageData.value.title || frontmatter.value.title || 'Double Torus') as string,
  `${CANONICAL_HOST}/${pageData.value.relativePath.replace(/(index)?\.md$/, '')}`
))

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
          <!-- every page is a printable formatted scientific paper (user law): the paper chrome —
               abstract + keywords from the page's computed frontmatter — leads every document. -->
          <PaperFrame />
        </template>
        <template #sidebar-nav-after>
          <TrinityGateways />
          <slot name="sidebar-nav-after" />
        </template>
        <template #aside-bottom>
          <RevolutAside />
          <slot name="aside-bottom" />
        </template>
        <template #doc-footer-before>
          <section class="page-credit">
            <p class="page-credit__cite"><strong>Cite this page.</strong> {{ credit.text }}</p>
            <p class="page-credit__meta">
              <a :href="credit.orcidUrl" rel="author noopener">{{ credit.author }} · ORCID</a>
              <span aria-hidden="true"> · </span>
              <a :href="credit.doiUrl" rel="noopener">DOI {{ credit.doiUrl.replace('https://doi.org/', '') }}</a>
              <span aria-hidden="true"> · </span>
              <a :href="credit.licenceUrl" rel="license noopener">{{ credit.licence }}</a>
            </p>
          </section>
          <CollectiveMind />
          <GlobalHelp />
          <SpeechReader />
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
.page-credit {
  margin: var(--ich-sp6) 0 var(--ich-sp4);
  padding-top: var(--ich-sp3);
  border-top: 1px solid var(--vp-c-divider);
  font-size: 0.82rem;
  color: var(--vp-c-text-2);
}
.page-credit__cite { margin: 0 0 0.25rem; word-break: break-word; }
.page-credit__meta { margin: 0; }
.page-credit a { color: inherit; text-decoration: underline; text-underline-offset: 2px; }

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

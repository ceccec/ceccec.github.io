<script setup lang="ts">
import { computed, defineAsyncComponent, nextTick, onMounted, onUnmounted, ref, useSlots, watch } from 'vue'
import { useRoute, useData, useRouter, withBase } from 'vitepress'
import DefaultTheme, { VPHomeHero } from 'vitepress/theme'
import ClientOnly from './components/ClientOnly.vue'
const BackgroundMovie = defineAsyncComponent(() => import('./components/BackgroundMovie.vue'))
// ASYNC, LIKE THE MOVIE: it renders inside <ClientOnly>, so nothing of it is in the server HTML or the first paint — and its
// static imports (hero-movie, hero-movie-paint, mounts) reach the render barrel, which put the 7.8 MB corpus chunk in
// front of every page. Loaded after hydration it costs the reader nothing they could see.
const HeroBackgroundLayer = defineAsyncComponent(() => import('./components/HeroBackgroundLayer.vue'))
// ASIDES AND PANELS ARE NOT FIRST-PAINT CHROME. Each of these was imported eagerly, and each reaches the
// render barrel, so Layout — which renders EVERY page — carried their source graph into the chunk a visitor
// must fetch before anything evaluates.
// SSR is unaffected: Vue awaits an async component while rendering, which is why /formulas already shipped
// its 845 KiB of rows with FormulaIndex registered exactly this way.
//
// THE TRADE, MEASURED AND AUTHORISED. This costs +1 KiB in the entry chunk (the seven async loader stubs)
// and saves 38 KiB in the entry's STATIC CLOSURE — what the browser must actually fetch before the module
// evaluates. Net 37 KiB less per visitor, on the measure build-time.ts itself calls the truer one: the
// app-chunk line "measures one file", the closure is the shell. Raising a floor is not a thing this repo
// does on its own judgement, so build.app-chunk-kilobytes 236 → 237 was re-seeded on the author's explicit
// instruction, from a clean full rebuild, with the closure falling 9015 → 8977 in the same measurement.
const TrinityGateways = defineAsyncComponent(() => import('./components/TrinityGateways.vue'))
const CollectiveMind = defineAsyncComponent(() => import('./components/CollectiveMind.vue'))
const GlobalHelp = defineAsyncComponent(() => import('./components/GlobalHelp.vue'))
const SpeechReader = defineAsyncComponent(() => import('./components/SpeechReader.vue'))
const RevolutAside = defineAsyncComponent(() => import('./components/RevolutAside.vue'))
const VitePressPossibilities = defineAsyncComponent(() => import('./components/VitePressPossibilities.vue'))
const PaperFrame = defineAsyncComponent(() => import('./components/PaperFrame.vue'))
// The hero colour variables are inlined into every page at build (transformHtml → heroChromeStyleBlocks); re-applying them on
// client navigation needs the matrix, so that module loads on demand instead of in front of the first paint.
const applyHeroChromeVars = (path: string, width: number) => { void import('../lib/hero-chrome').then((m) => m.applyHeroChromeVars(path, width)) }

const { Layout: VPLayout } = DefaultTheme
const route = useRoute()
const { frontmatter, page: pageData } = useData()
const showHomeHero = computed(() => Boolean(frontmatter.value.hero))

// COLOUR IS HEXAGRAM — the binding that was missing. Every route already had a content-addressed
// hexagram (seedFromText(slug) % 64, the same placement the architecture uses for folders) and it
// reached the DOM at no point: --ich-element-1-rgb and --ich-element-2-rgb were referenced by the
// layout's gradient and emitted by nothing, so that declaration was dropped by every browser.
// Six bits of the route's own address are exactly a hue on the oklch wheel, and the pair is the
// reflection 64−1−h — a page and its involution opposite each other. One binding here; every
// component below inherits a colour it did not pick and cannot drift from.
// FROM THE PROGRAM, NOT THE NAME (owner, 2026-11-16): the hexagram is the top six bits of the page's program uuid — the
// address of what the page computes (frontmatter.uuid). A page with no program (the 404) keeps the slug's placement.
const ichHex = computed(() => {
  const uuid = typeof frontmatter.value.uuid === 'string' ? frontmatter.value.uuid.replace(/-/g, '') : ''
  if (/^[0-9a-f]{2}/i.test(uuid)) return Number.parseInt(uuid.slice(0, 2), 16) >> 2
  const slug = route.path.replace(/^\/(en|bg)(?=\/|$)/, '').replace(/^\//, '').split('/').filter(Boolean).pop() || 'home'
  return ((seedFromText(slug) % 64) + 64) % 64
})
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

// THE HOME PAGE'S EDITION, THROUGH THE ROUTER (moved from a head script that called location.replace before hydration): a
// visitor arriving at / from outside, with a saved Bulgarian or Glagolitic choice (localStorage 'dt-locale') or a Bulgarian
// browser, is sent to that edition by useRouter().go. A saved 'en' or an internal arrival stays.
const router = useRouter()
onMounted(() => {
  try {
    if (route.path !== withBase('/')) return
    const saved = localStorage.getItem('dt-locale')
    if (saved === 'en') return
    const target = saved === 'bg' ? '/bg/' : saved === 'cu' ? '/gla/' : (document.referrer.startsWith(location.origin) ? null : (navigator.language || 'en').toLowerCase().startsWith('bg') ? '/bg/' : null)
    if (target) void router.go(withBase(target))
  } catch { /* storage blocked — stay on the English root */ }
})
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
// The citation is computed at BUILD (transformPageData → frontmatter.citation, from the one sealed credit fold): reading it
// here costs the browser nothing, where importing pageCitation pulled the whole render barrel (8.3 MB) onto every page.
import { seedFromText } from '../../src/0/index.ts'
const credit = computed(() => frontmatter.value.citation as { text: string; author: string; orcidUrl: string; doiUrl: string; licence: string; licenceUrl: string } | undefined)

</script>

<template>
  <div class="vp-with-hero-movie" :style="{ '--ich-hex': String(ichHex) }">
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
          <section v-if="credit" class="page-credit">
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
  border-top: var(--ich-line) solid var(--vp-c-divider);
  font-size: var(--ich-sp7);
  color: var(--vp-c-text-2);
}
.page-credit__cite { margin: 0 0 var(--ich-sp2); word-break: break-word; }
.page-credit__meta { margin: 0; }
.page-credit a { color: inherit; text-decoration: underline; text-underline-offset: var(--ich-sp1); }

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

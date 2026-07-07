<script setup lang="ts">
// ☰ Qián · Heaven — compute/model render shell: each card its dedicated page with detailed computed
// research, an animated proof (createAnimationEngine + the card's uuidHero — hue/rotations/spin/tone/tips),
// and text-to-speech (the browser speechSynthesis reads the computed speech string). Thin shell: all
// content computed in src/heaven/compute (the dissolved model section); the .vue only paints the fold and drives the browser-only surfaces.
import { computed, onBeforeUnmount, onMounted, ref, shallowRef } from 'vue'
import { useRoute } from 'vitepress'
import { cardPage, cardPages, discoveryPage, discoveryPages, type CardPage } from '../../../src/heaven/compute/index.ts'
import { createAnimationEngine, humanBreath } from '../../../src/0'
import UiCard from './ui/Card.vue'
import UiCardContent from './ui/CardContent.vue'
import UiBadge from './ui/Badge.vue'
import UiAlert from './ui/Alert.vue'

const route = useRoute()
// A dedicated page picks its slug from the route (/…/model/<slug>); otherwise the whole computed gallery.
const slugFromRoute = computed(() => {
  const match = route.path.replace(/\/(en|bg)\//, '/').match(/\/model\/([a-z0-9-]+)/)
  return match?.[1] ?? null
})
const pages = computed<CardPage[]>(() => {
  const one = slugFromRoute.value ? (cardPage(slugFromRoute.value) ?? discoveryPage(slugFromRoute.value)) : null
  return one ? [one] : [...cardPages().pages, ...discoveryPages().pages]
})

// ── Animated proof — the card's content-address (uuidHero) rendered as a spinning twin-handle merkaba ──
const frames = ref<Record<string, { ax: number; ay: number; bx: number; by: number; t: number }>>({})
const engine = shallowRef<ReturnType<typeof createAnimationEngine> | null>(null)
function paint(timeMs: number) {
  const next: typeof frames.value = {}
  for (const page of pages.value) {
    const h = page.hero
    const spin = (timeMs / h.spinMs) * 2 * Math.PI
    const pulse = 1 + humanBreath(timeMs, h.spinMs, 0.12) - 1 // gentle breathing scale about 1
    const r1 = 46 * (1 + pulse * 0.15)
    const r2 = 28 * (1 + pulse * 0.15)
    next[page.slug] = {
      ax: r1 * Math.cos(h.theta + spin), ay: r1 * Math.sin(h.theta + spin),
      bx: r2 * Math.cos(h.phi - spin), by: r2 * Math.sin(h.phi - spin), // −spin: counter-rotating handle
      t: timeMs,
    }
  }
  frames.value = next
}
onMounted(() => {
  const e = createAnimationEngine(paint)
  engine.value = e
  e.start()
})
onBeforeUnmount(() => { engine.value?.dispose(); if (typeof window !== 'undefined') window.speechSynthesis?.cancel() })

// ── Text-to-speech — the browser voice reads the computed speech string ──
const speaking = ref<string | null>(null)
const ttsAvailable = typeof window !== 'undefined' && 'speechSynthesis' in window
function speak(page: CardPage) {
  if (!ttsAvailable) return
  window.speechSynthesis.cancel()
  if (speaking.value === page.slug) { speaking.value = null; return }
  const u = new SpeechSynthesisUtterance(page.speech)
  u.rate = 0.98
  u.pitch = 0.5 + (page.hero.hue / 360) // pitch computed from the card's hue — the proof, heard
  u.onend = () => { if (speaking.value === page.slug) speaking.value = null }
  speaking.value = page.slug
  window.speechSynthesis.speak(u)
}
</script>

<template>
  <div class="model-cards" data-logic="src/heaven/compute/model/index.ts">
    <UiCard v-for="page in pages" :key="page.slug" :id="`card-${page.slug}`" class="model-card">
      <UiCardContent class="vp-doc model-card__content">
        <div class="model-card__grid">
          <figure class="model-card__proof" :style="{ '--hue': page.hero.hue }" aria-hidden="true">
            <svg viewBox="-64 -64 128 128" role="img">
              <circle class="model-card__ring" cx="0" cy="0" r="52" />
              <g v-if="frames[page.slug]">
                <line class="model-card__handle model-card__handle--up"
                  :x1="-frames[page.slug].ax" :y1="-frames[page.slug].ay"
                  :x2="frames[page.slug].ax" :y2="frames[page.slug].ay" />
                <line class="model-card__handle model-card__handle--down"
                  :x1="-frames[page.slug].bx" :y1="-frames[page.slug].by"
                  :x2="frames[page.slug].bx" :y2="frames[page.slug].by" />
                <circle class="model-card__tip" :cx="frames[page.slug].ax" :cy="frames[page.slug].ay" r="4" />
                <circle class="model-card__tip" :cx="frames[page.slug].bx" :cy="frames[page.slug].by" r="3" />
              </g>
              <text class="model-card__glyph" x="0" y="0" dominant-baseline="central" text-anchor="middle">◆</text>
            </svg>
            <figcaption>{{ page.hero.frequency }} Hz · hue {{ page.hero.hue }}</figcaption>
          </figure>

          <div class="model-card__body">
            <header class="model-card__head">
              <UiBadge variant="outline">{{ page.source }}</UiBadge>
              <h2>{{ page.title }}</h2>
              <p class="model-card__q">{{ page.question }}</p>
            </header>

            <p class="model-card__research">{{ page.research }}</p>

            <div class="model-card__facets">
              <UiBadge v-for="facet in page.facets" :key="facet.facet" :variant="facet.on ? 'default' : 'outline'">
                {{ facet.on ? '✓' : '—' }} {{ facet.facet }}
              </UiBadge>
            </div>

            <div class="model-card__actions">
              <button v-if="ttsAvailable" type="button" class="model-card__speak" @click="speak(page)">
                {{ speaking === page.slug ? '⏹ Stop' : '▶ Speak the proof' }}
              </button>
              <UiBadge :variant="page.verified ? 'default' : 'outline'">
                wave · {{ page.verified ? 'verified ✓' : 'open —' }}
              </UiBadge>
            </div>

            <UiAlert title="Honest boundary">
              <p>{{ page.boundary }}</p>
            </UiAlert>
          </div>
        </div>
      </UiCardContent>
    </UiCard>
  </div>
</template>

<style scoped>
.model-cards { display: grid; gap: var(--ich-sp6); }
.model-card__grid { display: grid; grid-template-columns: minmax(0, 180px) 1fr; gap: var(--ich-sp6); align-items: start; }
.model-card__proof { margin: 0; display: grid; gap: var(--ich-sp2); justify-items: center; }
.model-card__proof svg { width: 100%; max-width: 180px; aspect-ratio: 1; }
.model-card__ring { fill: none; stroke: oklch(70% 0.12 calc(var(--hue) * 1deg)); stroke-width: 1; opacity: 0.4; }
.model-card__handle { stroke-width: 2; stroke-linecap: round; }
.model-card__handle--up { stroke: oklch(72% 0.17 calc(var(--hue) * 1deg)); }
.model-card__handle--down { stroke: oklch(60% 0.17 calc((var(--hue) + 180) * 1deg)); }
.model-card__tip { fill: oklch(80% 0.18 calc(var(--hue) * 1deg)); }
.model-card__glyph { fill: oklch(70% 0.14 calc(var(--hue) * 1deg)); font-size: 14px; opacity: 0.5; }
.model-card__proof figcaption { font-size: var(--ich-text-ms); opacity: 0.7; font-variant-numeric: tabular-nums; }
.model-card__body { display: grid; gap: var(--ich-sp4); }
.model-card__head h2 { margin: var(--ich-sp2) 0 0; }
.model-card__q { opacity: 0.7; font-style: italic; margin: 0; }
.model-card__research { line-height: 1.6; }
.model-card__facets { display: flex; flex-wrap: wrap; gap: var(--ich-sp2); }
.model-card__actions { display: flex; flex-wrap: wrap; gap: var(--ich-sp3); align-items: center; }
.model-card__speak {
  border: 1px solid oklch(65% 0.14 calc(var(--a432-hue, 5) * 1deg));
  background: transparent; color: inherit; border-radius: var(--ich-radius, 8px);
  padding: var(--ich-sp2) var(--ich-sp4); cursor: pointer; font-size: var(--ich-text-ms);
}
.model-card__speak:hover { background: oklch(65% 0.14 calc(var(--a432-hue, 5) * 1deg) / 0.12); }
@media (max-width: 620px) { .model-card__grid { grid-template-columns: 1fr; } }
</style>

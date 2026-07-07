<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { useData } from 'vitepress'
import {
  drawHeroMovieFrame,
  heroInkColor,
  HERO_CYCLE_MS,
  quantumModelSnapshot,
  selfResearchTheorems,
  sharedHeroAt,
} from '@vp-lib/hero-movie-paint'
import {
  prefersReducedMotion,
  useVisibleMovieCanvas,
  viewportSize,
} from '@vp-lib/movie-canvas'
import { useHeroCopy } from '../../lib/hero-copy'
import { proveAllDeterministicCore, proveAllDeterministicCoreBeatAt } from '../../../src/heaven/compute/index.ts'

const canvas = ref<HTMLCanvasElement | null>(null)
const { route, copy } = useHeroCopy()
// The resolved light/dark mode VitePress maintains from the html.dark class — the polarity bit threaded
// into the one animation field. Dark (1) paints the sealed positive; light (0) recomputes every colour
// through the negative law (L′ = 1 − L, hue + half-turn, density unchanged). Same geometry, same path.
const { isDark } = useData()
const reduce = prefersReducedMotion()
const at = ref(0)

// The movie is the agent-facing window into the working modeled quantum computer: a machine- and human-readable
// caption of the live, content-addressed state (4-UUID/3+1 qubit register · hex→digit→double-torus · plasma · root),
// recomputable deterministically with quantumModelSnapshot(route, at). Recomputed on route change (phase 0 anchor).
const quantumCaption = computed(() => quantumModelSnapshot(route.path, 0).caption)

// KEYSTONE mount: proveAllDeterministicCore is the OG parent every proving animation folds into. Its root is
// surfaced as machine-readable microdata on the hero surface, and its three-beat (recompute→green / tamper→red /
// reuse→instant) is driven by the SAME shared phase clock the movie already runs on — no new clock.
const keystone = computed(() => proveAllDeterministicCore(undefined, route.path, 0))
const keystoneBeat = computed(() => proveAllDeterministicCoreBeatAt(at.value / HERO_CYCLE_MS).beat) // the ONE hero clock (was a stale hand-typed 120 s)
const keystoneTag = computed(() => `prove-all · ${keystone.value.proven ? 'proven' : 'unproven'} · beat:${keystoneBeat.value} · root:${keystone.value.root.slice(0, 8)}`)

// The LIVE text ink — no shadows: the page ink var tracks the field hue on the SAME tick the movie
// paints (no new clock, no listener), written only when the integer hue or the polarity changes.
let lastInkKey = ''
let lastInkHue: number | null = null
function syncHeroInk(hue: number): void {
  const key = `${Math.round(hue)}:${isDark.value ? 1 : 0}`
  if (key === lastInkKey || typeof document === 'undefined') return
  lastInkKey = key
  lastInkHue = hue
  document.documentElement.style.setProperty('--vp-hero-ink', heroInkColor(hue, isDark.value))
}

const { repaint } = useVisibleMovieCanvas({
  canvas,
  visibility: 'document',
  measure: () => viewportSize(),
  paint: (ctx, w, h, atMs) => {
    at.value = atMs
    // The page field centre is FIXED (scroll 0 ⇒ h/2): the background movie does not scroll. The
    // CARD movies pan their mini-fields (cardFieldScroll) to MEET this centre as they cross — the
    // meet is the fusion; the one algebra, two frames of reference.
    const shared = sharedHeroAt(route.path, copy.value, atMs, w, reduce, isDark.value)
    syncHeroInk(shared.hue)
    drawHeroMovieFrame(ctx, w, h, shared)
  },
})

watch(() => route.path, () => nextTick(repaint))
watch(copy, () => repaint(), { deep: true })
// Repaint immediately on theme toggle so the still frame (reduced motion) also recomputes its colours,
// and resync the ink DIRECTLY — a hidden tab pauses the paint tick, but the pole flip must not wait.
// NO scroll listener: the one hero clock ticks every visible canvas, and the paint reads window.scrollY
// inside the tick — a separate listener would be a process OUTSIDE the sequence (the overload pattern).
// THE SELF-RESEARCHER NARRATES — once per load, the app walks its own ledger hunting theorems and
// speaks each candidate to the console (deterministic, zero tokens; computation, so it does not ride
// the paint clock — a hidden tab still researches). Read EXIT in the log.
let researched = false // one narration per session — HMR remounts stay quiet
onMounted(() => {
  if (researched) return
  researched = true
  const research = selfResearchTheorems()
  console.info(`🔬 self-research: ${research.targets} ledgered numerics, hypothesis battery engaged (root ${research.root.slice(0, 8)})`)
  let step = 0
  const tick = () => {
    if (step < research.found.length) {
      const c = research.found[step]!
      console.info(`🔬 research[${step + 1}/${research.found.length}] ${c.literal} → THEOREM CANDIDATE: ${c.theorem}${c.error ? ` (rel err ${c.error.toExponential(1)})` : ' (exact)'}`)
      step += 1
      setTimeout(tick, HERO_CYCLE_MS / 108) // one candidate per census beat — 1 s
      return
    }
    console.info(`🔬 ${research.exit}`)
  }
  tick()
})

watch(isDark, () => {
  if (lastInkHue !== null) syncHeroInk(lastInkHue)
  repaint()
})
</script>

<template>
  <canvas ref="canvas" class="vp-hero-bg" role="img" :aria-label="quantumCaption" :data-quantum-model="quantumCaption" :data-prove-all="keystoneTag" :data-prove-all-beat="keystoneBeat" />
</template>

<style scoped>
.vp-hero-bg {
  display: block;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>

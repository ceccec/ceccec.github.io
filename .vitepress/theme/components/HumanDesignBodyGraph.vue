<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useData, useRoute } from 'vitepress'
import {
  drawHumanDesignBodyGraph,
  humanDesignBodyGraphPanelComputes,
  humanDesignBodyGraphSvg,
  julianDayFromCivil,
  MEEUS_J2000_CIVIL,
  MEEUS_J2000_JD,
} from '../../../src/heaven/sky/astronomy/index'
import { prefersReducedMotion, useVisibleMovieCanvas } from '@vp-lib/movie-canvas'
import { useSiteLocale } from '../../lib/mounts'
import UiCardShell from './UiCardShell.vue'
import UiBadge from './ui/Badge.vue'

const route = useRoute()
const { t } = useSiteLocale()
const canvasHost = ref<HTMLElement | null>(null)
const canvas = ref<HTMLCanvasElement | null>(null)
const year = ref(MEEUS_J2000_CIVIL.year)
const month = ref(MEEUS_J2000_CIVIL.month)
const day = ref(MEEUS_J2000_CIVIL.day)
const hourUt = ref(MEEUS_J2000_CIVIL.hourUt)
const birthJd = computed(() => julianDayFromCivil(year.value, month.value, day.value, hourUt.value))
const panel = computed(() => humanDesignBodyGraphPanelComputes(undefined, birthJd.value))
const displayTitle = computed(() => t('Human Design BodyGraph'))
const seedParts = computed(() => ['HumanDesignBodyGraph', panel.value.root, String(birthJd.value), route.path] as const)
const reduce = prefersReducedMotion()
const { isDark } = useData()
const structureSvg = computed(() => humanDesignBodyGraphSvg(undefined, birthJd.value, { animate: !reduce, dark: isDark.value }))

const { repaint } = useVisibleMovieCanvas({
  canvas,
  root: canvasHost,
  visibility: 'intersection',
  measure: () => ({
    w: canvasHost.value?.clientWidth ?? 0,
    h: canvasHost.value?.clientHeight ?? 0,
  }),
  paint: (ctx, w, h, at) => {
    drawHumanDesignBodyGraph(ctx, w, h, panel.value, { dark: isDark.value, reduce, at })
  },
})

watch([isDark, birthJd], () => repaint())

function resetJ2000() {
  year.value = MEEUS_J2000_CIVIL.year
  month.value = MEEUS_J2000_CIVIL.month
  day.value = MEEUS_J2000_CIVIL.day
  hourUt.value = MEEUS_J2000_CIVIL.hourUt
}
</script>

<template>
  <UiCardShell
    id="human-design-bodygraph"
    class="hd-bodygraph"
    component="HumanDesignBodyGraph"
    :seed-parts="seedParts"
    :title="displayTitle"
  >
    <p class="hd-bodygraph__honesty">
      Structure-only (W3–W7). Symbolic JD sample — not a person. Profiling/aura refuted.
    </p>
    <div class="hd-bodygraph__jd" role="group" :aria-label="t('Birth JD (symbolic)')">
      <label>
        <span>Y</span>
        <input v-model.number="year" type="number" step="1" />
      </label>
      <label>
        <span>M</span>
        <input v-model.number="month" type="number" min="1" max="12" step="1" />
      </label>
      <label>
        <span>D</span>
        <input v-model.number="day" type="number" min="1" max="31" step="1" />
      </label>
      <label>
        <span>UT</span>
        <input v-model.number="hourUt" type="number" min="0" max="23.999" step="0.1" />
      </label>
      <UiBadge variant="outline">JD {{ birthJd }}</UiBadge>
      <button type="button" class="hd-bodygraph__reset" @click="resetJ2000">
        J2000
      </button>
    </div>
    <div class="hd-bodygraph__meta" role="status">
      <UiBadge variant="outline">{{ panel.definitionKind }}</UiBadge>
      <UiBadge variant="outline">{{ panel.definedCenters.length }} defined · {{ panel.openCenters.length }} open</UiBadge>
      <UiBadge variant="outline">{{ panel.definedChannelCount }} channels</UiBadge>
      <UiBadge variant="outline">{{ panel.hangingGates.length }} hanging</UiBadge>
      <UiBadge variant="outline">{{ panel.cuspCount }} cusps</UiBadge>
      <UiBadge :variant="panel.computes ? 'default' : 'outline'">
        {{ panel.computes ? 'computes' : 'open' }}
      </UiBadge>
      <UiBadge v-if="birthJd === MEEUS_J2000_JD" variant="outline">J2000</UiBadge>
    </div>
    <div ref="canvasHost" class="hd-bodygraph__canvas-host">
      <canvas
        ref="canvas"
        class="hd-bodygraph__canvas"
        :aria-label="displayTitle"
      />
    </div>
    <div
      class="hd-bodygraph__svg"
      role="img"
      :aria-label="t('BodyGraph structure SVG (W7)')"
      v-html="structureSvg"
    />
    <p class="hd-bodygraph__boundary">{{ panel.boundary }}</p>
  </UiCardShell>
</template>

<style scoped>
.hd-bodygraph {
  margin: var(--ich-sp4) 0;
}

.hd-bodygraph__honesty,
.hd-bodygraph__boundary {
  margin: 0 0 var(--ich-sp3);
  font-size: var(--ich-fs-sm, 0.875rem);
  line-height: calc(3 / 2);
  color: var(--vp-c-text-2);
}

.hd-bodygraph__jd {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--ich-sp2);
  margin-bottom: var(--ich-sp3);
}

.hd-bodygraph__jd label {
  display: inline-flex;
  align-items: center;
  gap: calc(var(--ich-sp1, 0.25rem));
  font-size: var(--ich-fs-sm, 0.875rem);
  color: var(--vp-c-text-2);
}

.hd-bodygraph__jd input {
  width: 4.5rem;
  padding: 0.2rem 0.35rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: calc(var(--vp-movie-radius, 0.5rem) * calc(1 / 2));
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font: inherit;
}

.hd-bodygraph__reset {
  padding: 0.25rem 0.55rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: calc(var(--vp-movie-radius, 0.5rem) * calc(1 / 2));
  background: transparent;
  color: var(--vp-c-text-1);
  font: inherit;
  font-size: var(--ich-fs-sm, 0.875rem);
  cursor: pointer;
}

.hd-bodygraph__meta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--ich-sp2);
  margin-bottom: var(--ich-sp3);
}

.hd-bodygraph__canvas-host {
  position: relative;
  z-index: 2;
  width: 100%;
  min-height: min(var(--ich-vw-movie), var(--vp-movie-min-h));
}

.hd-bodygraph__canvas {
  display: block;
  width: 100%;
  height: min(var(--ich-vw-movie), var(--vp-movie-min-h));
  border-radius: calc(var(--vp-movie-radius) * calc(3 / 4));
  background: transparent;
}

.hd-bodygraph__svg {
  margin-top: var(--ich-sp3);
  width: min(100%, calc(var(--ich-vw-movie) * calc(3 / 4)));
  max-width: 100%;
}

.hd-bodygraph__svg :deep(svg) {
  display: block;
  width: 100%;
  height: auto;
  border-radius: calc(var(--vp-movie-radius) * calc(3 / 4));
}
</style>

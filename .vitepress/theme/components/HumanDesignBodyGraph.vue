<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useData, useRoute } from 'vitepress'
import {
  drawHumanDesignBodyGraph,
  humanDesignBodyGraphPanelComputes,
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
const panel = humanDesignBodyGraphPanelComputes()
const displayTitle = computed(() => t('Human Design BodyGraph'))
const seedParts = computed(() => ['HumanDesignBodyGraph', panel.root, route.path] as const)
const reduce = prefersReducedMotion()
const { isDark } = useData()

const { repaint } = useVisibleMovieCanvas({
  canvas,
  root: canvasHost,
  visibility: 'intersection',
  measure: () => ({
    w: canvasHost.value?.clientWidth ?? 0,
    h: canvasHost.value?.clientHeight ?? 0,
  }),
  paint: (ctx, w, h, at) => {
    drawHumanDesignBodyGraph(ctx, w, h, panel, { dark: isDark.value, reduce, at })
  },
})

watch(isDark, () => repaint())
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
      Structure-only schematic from sealed W5 chart folds (wheel · channels · Meeus). Sample JD
      {{ MEEUS_J2000_JD }} (J2000) — not a person. Profiling/aura claims remain refuted.
    </p>
    <div class="hd-bodygraph__meta" role="status">
      <UiBadge variant="outline">{{ panel.definedChannelCount }} defined channels</UiBadge>
      <UiBadge variant="outline">{{ panel.activatedGates.length }} gates lit</UiBadge>
      <UiBadge variant="outline">{{ panel.cuspCount }} cusp warnings</UiBadge>
      <UiBadge :variant="panel.computes ? 'default' : 'outline'">
        {{ panel.computes ? 'computes' : 'open' }}
      </UiBadge>
    </div>
    <div ref="canvasHost" class="hd-bodygraph__canvas-host">
      <canvas
        ref="canvas"
        class="hd-bodygraph__canvas"
        :aria-label="displayTitle"
      />
    </div>
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
</style>

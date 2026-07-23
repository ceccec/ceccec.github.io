<script setup lang="ts">
// Display gate — co-located src/fire/physics/index.ts. The EMF→A432 balancing-field animation:
// EM field shells around the device + the noise-seeded A432 balancing field, on the one animation
// engine (useVisibleMovieCanvas) and the one colour source (A432_HUE / frequencyToLight).
// Morph: raw UiCard → UiCardShell (universal card family · dryCleanAllVueComponentsToTheUniversalSet).
import { computed, ref, shallowRef, watch } from 'vue'
import { drawEmfA432Field, emfA432PanelComputes } from './index.ts'
import { useData } from 'vitepress'
import { movieCanvasHex } from '../../../.vitepress/lib/hero-movie-paint'
import { prefersReducedMotion, useVisibleMovieCanvas } from '../../../.vitepress/lib/movie-canvas'
import { useSiteLocale } from '../../../.vitepress/lib/mounts'
import UiCardShell from '../../../.vitepress/theme/components/UiCardShell.vue'
import UiBadge from '../../../.vitepress/theme/components/ui/Badge.vue'
import UiAlert from '../../../.vitepress/theme/components/ui/Alert.vue'

const panel = shallowRef(emfA432PanelComputes())
const { pick } = useSiteLocale()
const t = (pair: { en: string; bg: string }) => pick(pair.en, pair.bg)
const reduce = prefersReducedMotion()
// Polarity bit for the canvas and label ink — same negative law as the movie palette.
const { isDark } = useData()
const canvasHost = ref<HTMLElement | null>(null)
const canvas = ref<HTMLCanvasElement | null>(null)

const bands = computed(() => panel.value.bands)
const field = computed(() => panel.value.balancingField)
const seedParts = computed(() => ['EmfA432', String(panel.value.hue)] as const)
const title = computed(() => t(panel.value.copy.title))

function paintEmf(ctx: CanvasRenderingContext2D, w: number, h: number, at: number) {
  drawEmfA432Field(ctx, w, h, reduce ? 0 : at, panel.value.hue, isDark.value)
}

const { repaint } = useVisibleMovieCanvas({
  canvas,
  root: canvasHost,
  visibility: 'intersection',
  measure: () => ({
    w: canvasHost.value?.clientWidth ?? 0,
    h: canvasHost.value?.clientHeight ?? 0,
  }),
  paint: paintEmf,
})

// Repaint on theme toggle so the reduced-motion still frame also recomputes its colours.
watch(isDark, () => repaint())
</script>

<template>
  <UiCardShell
    id="emf-a432-panel"
    class="emf-a432-panel"
    component="EmfA432"
    movie-intensity="soft"
    :seed-parts="seedParts"
    :title="title"
    data-logic="src/fire/physics/index.ts"
    data-target="src/fire/physics/index.ts#emfAroundDeviceHarmonisedToA432"
    data-topic="emf"
  >
    <div class="emf-a432-panel__content">
      <header class="emf-a432-panel__header">
        <h2>{{ title }}</h2>
        <p class="emf-a432-panel__lede">{{ t(panel.copy.lede) }}</p>
        <div class="emf-a432-panel__badges">
          <UiBadge :variant="panel.computes ? 'default' : 'outline'">
            computed · {{ panel.computes ? '✓' : '—' }}
          </UiBadge>
          <UiBadge :variant="field.entropyCollapsed ? 'default' : 'outline'">
            entropy {{ field.entropyBefore }} → {{ field.entropyAfter }} bits
          </UiBadge>
          <UiBadge variant="secondary">A432 hue {{ panel.hue }}</UiBadge>
        </div>
      </header>

      <div ref="canvasHost" class="emf-a432-panel__movie-host">
        <canvas
          ref="canvas"
          class="emf-a432-panel__movie"
          :aria-label="t({ en: 'Device EM field shells and the noise-seeded A432 balancing field', bg: 'EM черупки на устройството и A432 поле, посято от шума' })"
        />
      </div>

      <ul class="emf-a432-panel__bands">
        <li v-for="b in bands" :key="b.receipt">
          <span :style="{ color: movieCanvasHex(panel.hue, { dark: isDark }) }">{{ b.source }}</span>
          · {{ b.photonEvText }} eV · {{ b.ionizing ? 'ionizing' : 'non-ionizing' }}
          · ~{{ b.ordersBelowIonizing }} orders below 10 eV
        </li>
      </ul>

      <UiAlert :title="t({ en: 'Honest boundary', bg: 'Честна граница' })">
        <p>{{ panel.boundary }}</p>
      </UiAlert>
    </div>
  </UiCardShell>
</template>

<style scoped>
.emf-a432-panel__content {
  display: grid;
  gap: 1rem;
}

.emf-a432-panel__lede {
  margin: var(--ich-sp4) 0 0;
  opacity: var(--ich-op-strong);
}

.emf-a432-panel__badges {
  display: flex;
  flex-wrap: wrap;
  gap: var(--ich-sp4);
  margin-top: var(--ich-sp6);
}

.emf-a432-panel__movie-host {
  min-height: calc(var(--ich-fig) + var(--ich-unit));
  border-radius: calc(1rem * 3 / 4);
  overflow: hidden;
  background: var(--ich-scrim);
}

.emf-a432-panel__movie {
  display: block;
  width: 100%;
  height: calc(var(--ich-fig) + var(--ich-unit));
}

.emf-a432-panel__bands {
  margin: 0;
  padding-left: var(--ich-sp9);
  display: grid;
  gap: var(--ich-sp2);
  font-size: calc(1em * 8 / 9);
}
</style>

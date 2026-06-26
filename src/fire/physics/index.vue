<script setup lang="ts">
// Display gate — co-located src/fire/physics/index.ts. The EMF→A432 balancing-field animation:
// EM field shells around the device + the noise-seeded A432 balancing field, on the one animation
// engine (useVisibleMovieCanvas) and the one colour source (A432_HUE / frequencyToLight).
import { computed, ref, shallowRef } from 'vue'
import { drawEmfA432Field, emfA432PanelComputes } from './index.ts'
import { prefersReducedMotion, useVisibleMovieCanvas } from '../../../.vitepress/lib/movie-canvas'
import { useSiteLocale } from '../../../.vitepress/lib/mounts'
import UiCard from '../../../.vitepress/theme/components/ui/Card.vue'
import UiCardContent from '../../../.vitepress/theme/components/ui/CardContent.vue'
import UiBadge from '../../../.vitepress/theme/components/ui/Badge.vue'
import UiAlert from '../../../.vitepress/theme/components/ui/Alert.vue'

const panel = shallowRef(emfA432PanelComputes())
const { pick } = useSiteLocale()
const t = (pair: { en: string; bg: string }) => pick(pair.en, pair.bg)
const reduce = prefersReducedMotion()
const canvasHost = ref<HTMLElement | null>(null)
const canvas = ref<HTMLCanvasElement | null>(null)

const bands = computed(() => panel.value.bands)
const field = computed(() => panel.value.balancingField)

function paintEmf(ctx: CanvasRenderingContext2D, w: number, h: number, at: number) {
  drawEmfA432Field(ctx, w, h, reduce ? 0 : at, panel.value.hue)
}

useVisibleMovieCanvas({
  canvas,
  root: canvasHost,
  visibility: 'intersection',
  measure: () => ({
    w: canvasHost.value?.clientWidth ?? 0,
    h: canvasHost.value?.clientHeight ?? 0,
  }),
  paint: paintEmf,
})
</script>

<template>
  <UiCard
    id="emf-a432-panel"
    class="emf-a432-panel"
    data-logic="src/fire/physics/index.ts"
    data-target="src/fire/physics/index.ts#emfAroundDeviceHarmonisedToA432"
    data-topic="emf"
  >
    <UiCardContent class="vp-doc emf-a432-panel__content">
      <header class="emf-a432-panel__header">
        <h2>{{ t(panel.copy.title) }}</h2>
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
          <span :style="{ color: `hsl(${panel.hue} 70% 65%)` }">{{ b.source }}</span>
          · {{ b.photonEvText }} eV · {{ b.ionizing ? 'ionizing' : 'non-ionizing' }}
          · ~{{ b.ordersBelowIonizing }} orders below 10 eV
        </li>
      </ul>

      <UiAlert :title="t({ en: 'Honest boundary', bg: 'Честна граница' })">
        <p>{{ panel.boundary }}</p>
      </UiAlert>
    </UiCardContent>
  </UiCard>
</template>

<style scoped>
.emf-a432-panel__content {
  display: grid;
  gap: 1rem;
}

.emf-a432-panel__lede {
  margin: 0.5rem 0 0;
  opacity: 0.9;
}

.emf-a432-panel__badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.75rem;
}

.emf-a432-panel__movie-host {
  min-height: 220px;
  border-radius: 0.75rem;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.25);
}

.emf-a432-panel__movie {
  display: block;
  width: 100%;
  height: 220px;
}

.emf-a432-panel__bands {
  margin: 0;
  padding-left: 1.1rem;
  display: grid;
  gap: 0.25rem;
  font-size: 0.92em;
}
</style>

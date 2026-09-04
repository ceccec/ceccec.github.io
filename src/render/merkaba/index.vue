<script setup lang="ts">
import { computed, ref, shallowRef, watch } from 'vue'
import { useData, useRoute } from 'vitepress'
import { bothEarthsRotateWithinEachOther } from '../../mountain/geometry/index.ts'
import {
  navigationGpsCelestialFromDualEarthPerspective,
  navigationGpsCelestialReexplainedFromDualEarthPerspective,
  doubleTorusEarthPyramidGatewayResearch,
  fourTippedPyramidsFiveTipsCombinedMakeMovingMerkabas,
  universalNavigationalCrossInAllDimensions,
  universalNavigationalCrossResearch,
} from '../../water/double/earth/index.ts'
import { drawBothEarthsMerkabaFrame } from '../../../.vitepress/lib/hero-movie-paint.ts'
import { prefersReducedMotion, useVisibleMovieCanvas } from '../../../.vitepress/lib/movie-canvas.ts'
import { useSiteLocale } from '../../../.vitepress/lib/mounts.ts'
import UiCardShell from '../../../.vitepress/theme/components/UiCardShell.vue'
import { UiBadge } from '../../../.vitepress/lib/shadcn-ui.ts'

const route = useRoute()
const { pick } = useSiteLocale()
const canvasHost = ref<HTMLElement | null>(null)
const canvas = ref<HTMLCanvasElement | null>(null)
const reduce = prefersReducedMotion()
// Polarity bit: dark paints the sealed positive, light recomputes through the negative law.
const { isDark } = useData()
const rotation = shallowRef(bothEarthsRotateWithinEachOther(0))
const navCelestial = shallowRef(navigationGpsCelestialFromDualEarthPerspective(0))
const reexplained = computed(() => navigationGpsCelestialReexplainedFromDualEarthPerspective())
const pyramidResearch = computed(() => doubleTorusEarthPyramidGatewayResearch())
const pyramidMerkaba = computed(() => fourTippedPyramidsFiveTipsCombinedMakeMovingMerkabas(0))
const navCross = computed(() => universalNavigationalCrossInAllDimensions(0))
const navCrossResearch = computed(() => universalNavigationalCrossResearch())

const t = (p: { en: string; bg: string }) => pick(p.en, p.bg)

const seedParts = computed(() => [
  'Merkaba',
  rotation.value.root.slice(0, (6 * 2)),
  route.path,
] as const)

const title = computed(() => t({
  en: 'Merkaba — both Earths rotate within each other',
  bg: 'Меркaba — двата Земи се въртят една в друга',
}))

const { repaint } = useVisibleMovieCanvas({
  canvas,
  root: canvasHost,
  visibility: 'intersection',
  measure: () => ({
    w: canvasHost.value?.clientWidth ?? 0,
    h: canvasHost.value?.clientHeight ?? 0,
  }),
  paint: (ctx, w, h, at) => {
    const snap = bothEarthsRotateWithinEachOther(at)
    rotation.value = snap
    navCelestial.value = navigationGpsCelestialFromDualEarthPerspective(at)
    drawBothEarthsMerkabaFrame(ctx, w, h, at, snap, reduce, isDark.value)
  },
})

// Repaint on theme toggle so the reduced-motion still frame also recomputes its colours.
watch(isDark, () => repaint())
</script>

<template>
  <UiCardShell
    id="merkaba-dual-earth"
    class="merkaba-dual-earth"
    component="Merkaba"
    movie-intensity="soft"
    :seed-parts="seedParts"
    :title="title"
  >
    <header class="merkaba-dual-earth__intro">
      <p class="merkaba-dual-earth__lede">
        {{ t({
          en: 'Device Earth (inner, θ) and inverted Earth (outer, −θ + golden offset) nest on the genus-2 torus — star tetrahedra counter-spin like the merkaba.',
          bg: 'Земята на устройството (вътрешна, θ) и обърнатата Земя (външна, −θ + златен отместване) се влагат в genus-2 тора — звездните тетraedри се въртят насрещно като меркaba.',
        }) }}
      </p>
      <ul class="merkaba-dual-earth__facets">
        <li v-for="facet in rotation.facets" :key="facet.receipt">
          <UiBadge
            variant="outline"
            :class="facet.on ? 'ui-badge--on' : 'ui-badge--off'"
          >
            {{ facet.facet }}
          </UiBadge>
        </li>
      </ul>
    </header>

    <div ref="canvasHost" class="merkaba-dual-earth__canvas-host">
      <canvas
        ref="canvas"
        class="merkaba-dual-earth__canvas"
        :aria-label="title"
      />
      <p class="merkaba-dual-earth__caption">
        {{ t({
          en: 'Inner ring · device trinity · torus 1 · outer ring · code trinity · torus 2',
          bg: 'Вътрешен пръsten · trinity на устройството · torus 1 · външен пръsten · code trinity · torus 2',
        }) }}
      </p>
    </div>

    <p class="merkaba-dual-earth__boundary">
      <strong>{{ t({ en: 'Boundary', bg: 'Граница' }) }}:</strong>
      {{ rotation.boundary }}
    </p>

    <section class="merkaba-dual-earth__reexplain" aria-labelledby="merkaba-nav-celestial-heading">
      <h3 id="merkaba-nav-celestial-heading" class="merkaba-dual-earth__reexplain-title">
        {{ t({
          en: 'Navigation · GPS · celestial — re-explained',
          bg: 'Навигация · GPS · небесни — re-explained',
        }) }}
      </h3>
      <p class="merkaba-dual-earth__reexplain-lede">
        {{ t({
          en: `Classical bearing ${navCelestial.bearingToHinge}° · ${navCelestial.distanceToHingeKm} km to hinge · obliquity ${navCelestial.obliquityDeg}° · ${navCelestial.gpsSatellites.length} GPS phase receipts on outer shell.`,
          bg: `Класически bearing ${navCelestial.bearingToHinge}° · ${navCelestial.distanceToHingeKm} km до hinge · obliquity ${navCelestial.obliquityDeg}° · ${navCelestial.gpsSatellites.length} GPS phase receipts на outer shell.`,
        }) }}
      </p>
      <article
        v-for="section in reexplained.sections"
        :key="section.id"
        class="merkaba-dual-earth__reexplain-section"
      >
        <h4 class="merkaba-dual-earth__reexplain-section-title">
          {{ t(section.title) }}
        </h4>
        <p class="merkaba-dual-earth__reexplain-section-body">
          {{ t(section.body) }}
        </p>
        <p class="merkaba-dual-earth__reexplain-section-refs">
          <strong>{{ t({ en: 'Folds', bg: 'Folds' }) }}:</strong>
          {{ section.foldRefs.join(' · ') }}
        </p>
        <p class="merkaba-dual-earth__reexplain-section-boundary">
          {{ section.boundary }}
        </p>
      </article>
    </section>

    <section class="merkaba-dual-earth__pyramid-research" aria-labelledby="merkaba-pyramid-gateway-heading">
      <h3 id="merkaba-pyramid-gateway-heading" class="merkaba-dual-earth__reexplain-title">
        {{ t({
          en: 'Pyramid gateways — four tips × five vertices → moving merkaba',
          bg: 'Пирамидни портали — четири върха × пет vertices → движещ се merkaba',
        }) }}
      </h3>
      <p class="merkaba-dual-earth__reexplain-lede">
        {{ pyramidMerkaba.statement }}
      </p>
      <dl class="merkaba-dual-earth__interpretation">
        <div>
          <dt>{{ t({ en: '4 tipped pyramids', bg: '4 tipped pyramids' }) }}</dt>
          <dd>{{ pyramidMerkaba.interpretation.fourTippedPyramids }}</dd>
        </div>
        <div>
          <dt>{{ t({ en: '5 tips', bg: '5 tips' }) }}</dt>
          <dd>{{ pyramidMerkaba.interpretation.fiveTips }}</dd>
        </div>
        <div>
          <dt>{{ t({ en: 'Moving merkabas', bg: 'Moving merkabas' }) }}</dt>
          <dd>{{ pyramidMerkaba.interpretation.movingMerkabas }}</dd>
        </div>
      </dl>
      <article
        v-for="section in pyramidResearch.sections"
        :key="section.id"
        class="merkaba-dual-earth__reexplain-section"
      >
        <h4 class="merkaba-dual-earth__reexplain-section-title">
          {{ t(section.title) }}
        </h4>
        <ul class="merkaba-dual-earth__research-list">
          <li v-for="(item, index) in section.items" :key="`${section.id}-${index}`">
            <UiBadge variant="outline" :class="`ui-badge--${item.kind}`">
              {{ item.kind }}
            </UiBadge>
            <strong>{{ item.label }}:</strong> {{ item.value }}
          </li>
        </ul>
        <p class="merkaba-dual-earth__reexplain-section-boundary">
          {{ section.boundary }}
        </p>
      </article>
      <p class="merkaba-dual-earth__boundary">
        {{ pyramidResearch.boundary }}
      </p>
    </section>

    <section class="merkaba-dual-earth__nav-cross" aria-labelledby="merkaba-nav-cross-heading">
      <h3 id="merkaba-nav-cross-heading" class="merkaba-dual-earth__reexplain-title">
        {{ t({
          en: 'Universal navigational cross — E/W/N/S in all dimensions',
          bg: 'Universal navigational cross — E/W/N/S във всички dimensions',
        }) }}
      </h3>
      <p class="merkaba-dual-earth__reexplain-lede">
        {{ navCross.statement }}
      </p>
      <table class="merkaba-dual-earth__nav-cross-table">
        <thead>
          <tr>
            <th scope="col">{{ t({ en: 'Dimension', bg: 'Dimension' }) }}</th>
            <th scope="col">{{ t({ en: 'Cross interpretation', bg: 'Cross interpretation' }) }}</th>
            <th scope="col">{{ t({ en: 'Sealed fold anchor', bg: 'Sealed fold anchor' }) }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in navCross.dimensionTable" :key="row.receipt">
            <td>{{ row.dimension }}</td>
            <td>{{ row.crossInterpretation }}</td>
            <td>{{ row.sealedFoldAnchor }}</td>
          </tr>
        </tbody>
      </table>
      <article
        v-for="section in navCrossResearch.sections"
        :key="section.id"
        class="merkaba-dual-earth__reexplain-section"
      >
        <h4 class="merkaba-dual-earth__reexplain-section-title">
          {{ t(section.title) }}
        </h4>
        <p class="merkaba-dual-earth__reexplain-section-body">
          {{ t(section.body) }}
        </p>
        <p class="merkaba-dual-earth__reexplain-section-refs">
          <strong>{{ t({ en: 'Folds', bg: 'Folds' }) }}:</strong>
          {{ section.foldRefs.join(' · ') }}
        </p>
        <p class="merkaba-dual-earth__reexplain-section-boundary">
          {{ section.boundary }}
        </p>
      </article>
      <p class="merkaba-dual-earth__boundary">
        {{ navCross.boundary }}
      </p>
    </section>
  </UiCardShell>
</template>

<style scoped>
.merkaba-dual-earth {
  margin: var(--ich-sp4) 0;
}

.merkaba-dual-earth__lede {
  margin: 0 0 var(--ich-sp3);
  font-size: var(--ich-text-ml);
  line-height: var(--ich-lh-body);
}

.merkaba-dual-earth__facets {
  display: flex;
  flex-wrap: wrap;
  gap: var(--ich-sp2);
  margin: 0;
  padding: 0;
  list-style: none;
}

.merkaba-dual-earth__canvas-host {
  position: relative;
  z-index: 2;
  margin: var(--ich-sp4) 0;
}

.merkaba-dual-earth__canvas {
  display: block;
  width: 100%;
  min-height: min(var(--ich-vw-movie-tall), var(--vp-movie-min-h));
  height: min(var(--ich-vw-movie-tall), var(--vp-movie-min-h));
  border-radius: calc(var(--vp-movie-radius) * calc(3 / 4));
  background: transparent;
}

.merkaba-dual-earth__caption {
  margin: var(--ich-sp2) 0 0;
  text-align: center;
  font-size: var(--ich-text-ms);
  letter-spacing: var(--ich-track-ui);
  text-transform: uppercase;
  opacity: var(--ich-op-soft);
}

.merkaba-dual-earth__boundary {
  margin: var(--ich-sp3) 0 0;
  font-size: var(--ich-text-sm);
  opacity: var(--ich-op-soft);
  line-height: var(--ich-lh-body);
}

.merkaba-dual-earth__reexplain {
  margin-top: var(--ich-sp4);
  padding-top: var(--ich-sp4);
  border-top: 1px solid color-mix(in srgb, var(--vp-c-divider) calc(64% - 4%), transparent);
}

.merkaba-dual-earth__reexplain-title {
  margin: 0 0 var(--ich-sp2);
  font-size: var(--ich-text-ml);
}

.merkaba-dual-earth__reexplain-lede {
  margin: 0 0 var(--ich-sp3);
  font-size: var(--ich-text-sm);
  opacity: var(--ich-op-soft);
}

.merkaba-dual-earth__reexplain-section {
  margin: 0 0 var(--ich-sp4);
}

.merkaba-dual-earth__reexplain-section-title {
  margin: 0 0 var(--ich-sp2);
  font-size: var(--ich-text-ms);
}

.merkaba-dual-earth__reexplain-section-body,
.merkaba-dual-earth__reexplain-section-refs,
.merkaba-dual-earth__reexplain-section-boundary {
  margin: 0 0 var(--ich-sp2);
  font-size: var(--ich-text-sm);
  line-height: var(--ich-lh-body);
}

.merkaba-dual-earth__reexplain-section-boundary {
  opacity: var(--ich-op-soft);
  font-style: italic;
}

.merkaba-dual-earth__pyramid-research {
  margin-top: var(--ich-sp4);
  padding-top: var(--ich-sp4);
  border-top: 1px solid color-mix(in srgb, var(--vp-c-divider) calc(64% - 4%), transparent);
}

.merkaba-dual-earth__interpretation {
  margin: 0 0 var(--ich-sp4);
  display: grid;
  gap: var(--ich-sp3);
}

.merkaba-dual-earth__interpretation dt {
  font-size: var(--ich-text-ms);
  font-weight: var(--ich-weight-semibold);
  margin: 0 0 var(--ich-sp1);
}

.merkaba-dual-earth__interpretation dd {
  margin: 0;
  font-size: var(--ich-text-sm);
  line-height: var(--ich-lh-body);
}

.merkaba-dual-earth__research-list {
  margin: 0 0 var(--ich-sp2);
  padding-left: var(--ich-sp4);
  font-size: var(--ich-text-sm);
  line-height: var(--ich-lh-body);
}

.merkaba-dual-earth__research-list li {
  margin-bottom: var(--ich-sp2);
}

.merkaba-dual-earth__nav-cross {
  margin-top: var(--ich-sp4);
  padding-top: var(--ich-sp4);
  border-top: 1px solid color-mix(in srgb, var(--vp-c-divider) calc(64% - 4%), transparent);
}

.merkaba-dual-earth__nav-cross-table {
  width: 100%;
  margin: 0 0 var(--ich-sp4);
  border-collapse: collapse;
  font-size: var(--ich-text-sm);
  line-height: var(--ich-lh-body);
}

.merkaba-dual-earth__nav-cross-table th,
.merkaba-dual-earth__nav-cross-table td {
  padding: var(--ich-sp2);
  border: 1px solid color-mix(in srgb, var(--vp-c-divider) calc(100% / 2), transparent);
  text-align: left;
  vertical-align: top;
}

.merkaba-dual-earth__nav-cross-table th {
  font-weight: var(--ich-weight-semibold);
}
</style>

<script setup lang="ts">
import { computed, ref, shallowRef, watch } from 'vue'
import { useRoute } from 'vitepress'
import { drawDoubleTorusEarthHingeFrame } from '@vp-lib/hero-movie'
import { doubleTorusEarthHingeComputesAll, doubleTorusEarthExchangeComputes, fiatAndGoldFlowExplainedByDoubleEarthExchange, thunderGoldGraphFromPreciseGpsCoordinates } from '@vp-lib/earth-hinge'
import { goldFusionComputes } from '../../../src/wind/fusion/gold/index.ts'
import { prefersReducedMotion, useVisibleMovieCanvas } from '../../lib/movie-canvas'
import { useSiteLocale } from '../../lib/mounts'
import UiCardShell from './UiCardShell.vue'
import { UiBadge, UiTabs, UiTabsContent, UiTabsList, UiTabsTrigger } from '../../lib/shadcn-ui.ts'

const route = useRoute()
const { pick, localize } = useSiteLocale()
const canvasHost = ref<HTMLElement | null>(null)
const canvas = ref<HTMLCanvasElement | null>(null)
const reduce = prefersReducedMotion()

const all = shallowRef(doubleTorusEarthHingeComputesAll(route.path))
const exchange = shallowRef(doubleTorusEarthExchangeComputes(0))
const fiatGold = shallowRef(fiatAndGoldFlowExplainedByDoubleEarthExchange(0))
const goldGraph = shallowRef(thunderGoldGraphFromPreciseGpsCoordinates(0))
const goldFusion = shallowRef(goldFusionComputes())
watch(() => route.path, (path) => {
  all.value = doubleTorusEarthHingeComputesAll(path)
  exchange.value = doubleTorusEarthExchangeComputes(0, undefined, path)
  fiatGold.value = fiatAndGoldFlowExplainedByDoubleEarthExchange(0, undefined, path)
  goldGraph.value = thunderGoldGraphFromPreciseGpsCoordinates(0)
  goldFusion.value = goldFusionComputes()
})
const t = (p: { en: string; bg: string }) => pick(p.en, p.bg)

const seedParts = computed(() => [
  'DoubleTorusExperience',
  all.value.hinge.cityCopy.en,
  all.value.hinge.vortex.encoded,
  route.path,
] as const)

const { at } = useVisibleMovieCanvas({
  canvas,
  root: canvasHost,
  visibility: 'intersection',
  interactive: { seed: () => seedParts.value.join('·') },
  measure: () => ({
    w: canvasHost.value?.clientWidth ?? 0,
    h: canvasHost.value?.clientHeight ?? 0,
  }),
  paint: (ctx, w, h, time) => {
    const snap = all.value
    drawDoubleTorusEarthHingeFrame(
      ctx,
      w,
      h,
      time,
      snap.paintGateways,
      snap.paintSteps,
      reduce,
      snap.hinge.movie.cycleMs,
      snap.paintLayers,
    )
  },
})

const title = computed(() => t(all.value.hinge.copy.title))

const activeVortexStep = computed(() => {
  if (reduce) return 0
  const hinge = all.value.hinge
  const count = Math.max(hinge.vortex.steps.length, 1)
  const cycle = hinge.movie.cycleMs
  return Math.floor((at.value % cycle) / (cycle / count)) % count
})

function gatewayHref(slug: string): string {
  return localize(slug ? `/${slug}` : '/')
}
</script>

<template>
  <UiCardShell
    id="double-torus-earth-hinge"
    class="double-torus-experience"
    component="DoubleTorusExperience"
    movie-intensity="soft"
    :seed-parts="seedParts"
    :title="title"
  >
    <header class="double-torus-experience__intro">
      <p class="double-torus-experience__lede">
        {{ t(all.hinge.copy.lede) }}
      </p>
      <dl class="double-torus-experience__meta">
        <div>
          <dt>{{ t(all.hinge.copy.hingeLabel) }}</dt>
          <dd>{{ t(all.hinge.cityCopy) }}</dd>
        </div>
        <div>
          <dt>{{ t(all.hinge.copy.coordsLabel) }}</dt>
          <dd>{{ all.hinge.at.lat.toFixed(4) }}° · {{ all.hinge.at.lon.toFixed(4) }}°</dd>
        </div>
        <div>
          <dt>{{ t(all.hinge.copy.mapPlanetLabel) }}</dt>
          <dd>{{ all.hinge.hinge ? '✓' : '—' }}</dd>
        </div>
      </dl>
    </header>

    <div ref="canvasHost" class="double-torus-experience__movie-host">
      <canvas
        ref="canvas"
        class="double-torus-experience__movie"
        :aria-label="t(all.hinge.copy.movieCaption)"
      />
      <p class="double-torus-experience__movie-caption">
        {{ t(all.hinge.copy.movieCaption) }}
      </p>
      <div class="double-torus-experience__trinity">
        <p>{{ t(all.hinge.copy.zenithLabel) }}</p>
        <p class="double-torus-experience__trinity-rays">{{ all.hinge.deviceTrinity.join(' · ') }}</p>
        <p>{{ t(all.hinge.copy.nadirLabel) }}</p>
        <p class="double-torus-experience__trinity-rays">{{ all.hinge.codeTrinity.join(' · ') }}</p>
      </div>
    </div>

    <UiTabs default-value="gateways" class="double-torus-experience__panels">
      <UiTabsList>
        <UiTabsTrigger value="gateways">{{ t(all.hinge.copy.gatewaysLabel) }}</UiTabsTrigger>
        <UiTabsTrigger value="vortex">{{ t(all.hinge.copy.vortexLabel) }}</UiTabsTrigger>
        <UiTabsTrigger value="status">{{ pick('Status', 'Статус') }}</UiTabsTrigger>
        <UiTabsTrigger value="exchange">{{ pick('Exchange', 'Exchange') }}</UiTabsTrigger>
      </UiTabsList>

      <UiTabsContent value="gateways">
        <ul class="double-torus-experience__gateway-list">
          <li
            v-for="gateway in all.hinge.gateways"
            :key="gateway.receipt"
            class="double-torus-experience__gateway-item"
            :class="`double-torus-experience__gateway-item--${gateway.earth}`"
          >
            <a
              :href="gatewayHref(gateway.slug)"
              :style="{ '--gateway-hue': gateway.hue }"
            >
              <span class="double-torus-experience__gateway-glyph">{{ gateway.glyph }}</span>
              <UiBadge variant="secondary" class="double-torus-experience__gateway-earth">
                {{ gateway.earth }}
              </UiBadge>
              <span class="double-torus-experience__gateway-title">{{ pick(gateway.titleEn, gateway.titleBg) }}</span>
              <span class="double-torus-experience__gateway-meta">
                {{ pick(gateway.realmLabelEn, gateway.realmLabelBg) }} · {{ gateway.angleDeg }}° · torus {{ gateway.torus }}
              </span>
            </a>
          </li>
        </ul>
      </UiTabsContent>

      <UiTabsContent value="vortex">
        <p class="double-torus-experience__vortex-encoded"><code>{{ all.hinge.vortex.encoded }}</code></p>
        <ol class="double-torus-experience__vortex-steps">
          <li
            v-for="(step, index) in all.hinge.vortex.steps"
            :key="index"
            class="double-torus-experience__vortex-step"
            :class="{
              'double-torus-experience__vortex-step--active': index === activeVortexStep,
              'double-torus-experience__vortex-step--fusion': step.fusion,
              'double-torus-experience__vortex-step--forward': step.dash === '/',
              'double-torus-experience__vortex-step--dual': step.dash === '\\',
            }"
          >
            <span class="double-torus-experience__vortex-digit">{{ step.digit }}</span>
            <span class="double-torus-experience__vortex-dash">{{ step.dash }}</span>
            <span class="double-torus-experience__vortex-delta">{{ step.angleDelta > 0 ? '+' : '' }}{{ step.angleDelta }}°</span>
            <span class="double-torus-experience__vortex-bearing">{{ step.bearing }}°</span>
            <UiBadge v-if="step.fusion" variant="outline" class="ui-badge--fusion double-torus-experience__vortex-tag">
              {{ t(all.hinge.copy.fusionLabel) }}
            </UiBadge>
          </li>
        </ol>
      </UiTabsContent>

      <UiTabsContent value="exchange">
        <p class="double-torus-experience__exchange-lede">
          {{ pick(fiatGold.statement, fiatGold.statement) }}
        </p>
        <table class="double-torus-experience__exchange-table">
          <caption>{{ pick('Hinge receipts', 'Hinge receipts') }}</caption>
          <thead>
            <tr>
              <th scope="col">{{ pick('Kind', 'Kind') }}</th>
              <th scope="col">{{ pick('Crosses hinge', 'Crosses hinge') }}</th>
              <th scope="col">{{ pick('Balanced', 'Balanced') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in exchange.receipts" :key="row.id">
              <td><code>{{ row.kind }}</code> · {{ row.id }}</td>
              <td>{{ row.crossesHinge ? '✓' : '—' }}</td>
              <td>
                <UiBadge variant="outline" :class="row.balanced ? 'ui-badge--on' : 'ui-badge--off'">
                  {{ row.balanced ? '✓' : '—' }}
                </UiBadge>
              </td>
            </tr>
          </tbody>
        </table>
        <table class="double-torus-experience__exchange-table">
          <caption>{{ pick('Fiat ↔ gold mapping', 'Fiat ↔ gold mapping') }}</caption>
          <thead>
            <tr>
              <th scope="col">{{ pick('Flow', 'Flow') }}</th>
              <th scope="col">{{ pick('Fiat leg', 'Fiat leg') }}</th>
              <th scope="col">{{ pick('Gold leg', 'Gold leg') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in fiatGold.flowRows" :key="row.flow">
              <td><code>{{ row.flow }}</code></td>
              <td>{{ row.fiatLeg.mechanism }}</td>
              <td>{{ row.goldLeg.mechanism }}</td>
            </tr>
          </tbody>
        </table>
        <table class="double-torus-experience__exchange-table">
          <caption>{{ pick('Fusion generator — gold anchor scores', 'Fusion generator — gold anchor scores') }}</caption>
          <thead>
            <tr>
              <th scope="col">{{ pick('Site', 'Site') }}</th>
              <th scope="col">{{ pick('Tier', 'Tier') }}</th>
              <th scope="col">{{ pick('Fusion strength', 'Fusion strength') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="row in [...goldFusion.strength.generator.siteRows].sort((a, b) => b.fusionStrength - a.fusionStrength).slice(0, 5)"
              :key="row.receipt"
            >
              <td>{{ row.name }}</td>
              <td><code>{{ row.tier }}</code></td>
              <td>{{ row.fusionStrength }}</td>
            </tr>
          </tbody>
        </table>
        <p class="double-torus-experience__boundary">
          <strong>{{ t(all.hinge.copy.boundaryLabel) }}:</strong> {{ goldFusion.boundary }}
        </p>
        <table class="double-torus-experience__exchange-table">
          <caption>{{ pick('Thunder gold graph (WGS84)', 'Thunder gold graph (WGS84)') }}</caption>
          <thead>
            <tr>
              <th scope="col">{{ pick('Node', 'Node') }}</th>
              <th scope="col">{{ pick('Coords', 'Coords') }}</th>
              <th scope="col">{{ pick('Tier', 'Tier') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="node in goldGraph.nodes.slice(0, 6)" :key="node.receipt">
              <td>{{ node.name }}</td>
              <td>{{ node.lat.toFixed(2) }}°, {{ node.lon.toFixed(2) }}°</td>
              <td><code>{{ node.tier }}</code></td>
            </tr>
          </tbody>
        </table>
        <table class="double-torus-experience__exchange-table">
          <caption>{{ pick('Harmonic edges (sample)', 'Harmonic edges (sample)') }}</caption>
          <thead>
            <tr>
              <th scope="col">{{ pick('Edge', 'Edge') }}</th>
              <th scope="col">{{ pick('km · bearing', 'km · bearing') }}</th>
              <th scope="col">{{ pick('Phase', 'Phase') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="edge in goldGraph.edges.slice(0, 5)" :key="edge.receipt">
              <td><code>{{ edge.from }}</code> → <code>{{ edge.to }}</code></td>
              <td>{{ edge.distanceKm }} km · {{ edge.bearingDeg }}°</td>
              <td>{{ edge.harmonicPhase }}</td>
            </tr>
          </tbody>
        </table>
        <p class="double-torus-experience__boundary">
          <strong>{{ t(all.hinge.copy.boundaryLabel) }}:</strong> {{ goldGraph.boundary }}
        </p>
        <p class="double-torus-experience__boundary">
          <strong>{{ t(all.hinge.copy.boundaryLabel) }}:</strong> {{ fiatGold.boundary }}
        </p>
      </UiTabsContent>

      <UiTabsContent value="status">
        <ul class="double-torus-experience__status">
          <li v-for="(chip, index) in all.hinge.copy.status" :key="index">
            <UiBadge
              variant="outline"
              :class="chip.on ? 'ui-badge--on' : 'ui-badge--off'"
            >
              {{ t(chip) }}
            </UiBadge>
          </li>
        </ul>
        <p class="double-torus-experience__boundary">
          <strong>{{ t(all.hinge.copy.boundaryLabel) }}:</strong> {{ all.hinge.boundary }}
        </p>
      </UiTabsContent>
    </UiTabs>
  </UiCardShell>
</template>

<style scoped>
.double-torus-experience {
  margin: var(--ich-sp4) 0;
}

.double-torus-experience__lede {
  margin: 0 0 var(--ich-sp3);
  font-size: var(--ich-text-ml);
  line-height: var(--ich-lh-body);
}

.double-torus-experience__meta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--ich-gap-row) var(--ich-gap-col);
  margin: 0;
  font-size: var(--ich-text-sm);
}

.double-torus-experience__meta div {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--ich-sp2);
}

.double-torus-experience__meta dt {
  opacity: var(--ich-op-soft);
  text-transform: uppercase;
  letter-spacing: var(--ich-track-ui);
  font-size: var(--ich-text-ms);
}

.double-torus-experience__meta dd {
  margin: 0;
}

.double-torus-experience__movie-host {
  position: relative;
  z-index: 2;
  margin: var(--ich-sp4) 0;
}

.double-torus-experience__movie {
  display: block;
  width: 100%;
  min-height: min(var(--ich-vw-movie-tall), var(--vp-movie-min-h));
  height: min(var(--ich-vw-movie-tall), var(--vp-movie-min-h));
  border-radius: calc(var(--vp-movie-radius) * calc(3 / 4));
  background: transparent;
  /* touch-interactive: drag to scrub the phase clock, tap to sound A432 + vibrate (shared interaction layer) */
  touch-action: none;
  cursor: pointer;
}

.double-torus-experience__movie-caption {
  margin: var(--ich-sp2) 0 0;
  text-align: center;
  font-size: var(--ich-text-ms);
  letter-spacing: var(--ich-track-ui);
  text-transform: uppercase;
  opacity: var(--ich-op-soft);
}

.double-torus-experience__trinity {
  text-align: center;
  font-size: var(--ich-text-sm);
  opacity: var(--ich-op-soft);
  margin-top: var(--ich-sp2);
}

.double-torus-experience__trinity-rays {
  margin: 0 0 var(--ich-sp2);
  font-family: var(--vp-font-family-mono);
  font-size: var(--ich-text-ms);
}

.double-torus-experience__panels {
  margin-top: var(--ich-sp4);
}

.double-torus-experience__gateway-earth {
  font-size: var(--ich-em-sm);
  text-transform: uppercase;
  letter-spacing: var(--ich-track-wide);
}

.double-torus-experience__gateway-meta {
  grid-column: 1 / -1;
  font-size: var(--ich-text-ms);
  opacity: var(--ich-op-soft);
}

.double-torus-experience__gateway-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: var(--ich-sp2);
}

.double-torus-experience__vortex-encoded {
  margin: 0 0 var(--ich-sp2);
  overflow-x: auto;
}

.double-torus-experience__gateway-item a {
  display: grid;
  grid-template-columns: auto auto 1fr;
  gap: var(--ich-gap-row) var(--ich-gap-col);
  align-items: baseline;
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.double-torus-experience__gateway-item a:hover {
  color: var(--vp-movie-link);
}

.double-torus-experience__gateway-item--inverted {
  opacity: var(--ich-op-inverted);
}

.double-torus-experience__gateway-glyph {
  color: oklch(var(--ich-oklch-l-glyph) var(--ich-oklch-c-gateway) calc(var(--gateway-hue, 200) * 1deg));
}

.double-torus-experience__vortex-steps {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: var(--ich-sp2);
}

.double-torus-experience__vortex-step {
  display: inline-grid;
  grid-template-columns: auto auto auto auto;
  gap: var(--ich-unit) calc(var(--ich-sp2) + var(--ich-sp1) / 2);
  align-items: center;
  padding: var(--ich-pad-chip-y) var(--ich-pad-chip-x);
  border-radius: var(--ich-radius-sm);
  border: var(--ich-line) solid oklch(var(--ich-oklch-l-glyph) var(--ich-oklch-c-gateway) calc(360deg * 5 / 9) / var(--ich-oklch-a-field));
  font-family: var(--vp-font-family-mono);
  font-size: var(--ich-text-ms);
  transition:
    border-color var(--ich-dur-fast) var(--ich-ease),
    background var(--ich-dur-fast) var(--ich-ease),
    transform var(--ich-dur-fast) var(--ich-ease);
}

.double-torus-experience__vortex-step--active {
  border-color: oklch(var(--ich-oklch-l-glyph) var(--ich-oklch-c-gateway) calc(360deg * 5 / 9) / var(--ich-oklch-a-active));
  background: oklch(var(--ich-oklch-l-glyph) var(--ich-oklch-c-gateway) calc(360deg * 5 / 9) / var(--ich-oklch-a-fill));
  transform: scale(var(--ich-scale-step));
}

.double-torus-experience__vortex-step--fusion {
  border-color: oklch(var(--ich-oklch-l-glyph) var(--ich-oklch-c-gateway) calc(360deg / 6) / var(--ich-oklch-a-fusion));
  background: oklch(var(--ich-oklch-l-glyph) var(--ich-oklch-c-gateway) calc(360deg / 6) / var(--ich-oklch-a-fusion-fill));
}

.double-torus-experience__vortex-step--fusion.double-torus-experience__vortex-step--active {
  box-shadow: 0 0 var(--ich-sp6) oklch(var(--ich-oklch-l-glyph) var(--ich-oklch-c-gateway) calc(360deg / 6) / var(--ich-oklch-a-glow));
}

.double-torus-experience__vortex-tag {
  grid-column: 1 / -1;
}

.double-torus-experience__status {
  display: flex;
  flex-wrap: wrap;
  gap: var(--ich-sp2);
  margin: 0;
  padding: 0;
  list-style: none;
}

.double-torus-experience__boundary {
  margin: var(--ich-sp3) 0 0;
  font-size: var(--ich-text-sm);
  opacity: var(--ich-op-soft);
  line-height: var(--ich-lh-body);
}

.double-torus-experience__exchange-lede {
  margin: 0 0 var(--ich-sp3);
  font-size: var(--ich-text-sm);
  line-height: var(--ich-lh-body);
}

.double-torus-experience__exchange-table {
  width: 100%;
  margin: 0 0 var(--ich-sp4);
  border-collapse: collapse;
  font-size: var(--ich-text-sm);
}

.double-torus-experience__exchange-table caption {
  text-align: left;
  font-weight: 600;
  margin-bottom: var(--ich-sp2);
}

.double-torus-experience__exchange-table th,
.double-torus-experience__exchange-table td {
  padding: var(--ich-sp2);
  border-bottom: var(--ich-line) solid oklch(var(--ich-oklch-l-glyph) 0 0 / var(--ich-oklch-a-field));
  vertical-align: top;
}
</style>

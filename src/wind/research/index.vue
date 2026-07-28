<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import { researchPanelComputes, millenniumPanelComputes, domainProofPanelComputes, proseStandardisedToClay } from './index.ts'
import { harmonizeScienceDomainsInWavesOfWaves } from '../../thunder/waves/index.ts'
import UiCard from '../../../.vitepress/theme/components/ui/Card.vue'
import UiCardContent from '../../../.vitepress/theme/components/ui/CardContent.vue'
import UiBadge from '../../../.vitepress/theme/components/ui/Badge.vue'
import UiButton from '../../../.vitepress/theme/components/ui/Button.vue'
import UiSeparator from '../../../.vitepress/theme/components/ui/Separator.vue'
import { statusBadgeKind } from '../../../.vitepress/lib/status-badge'

const panel = shallowRef(researchPanelComputes())
const millennium = shallowRef(millenniumPanelComputes())
const domainProofs = shallowRef(domainProofPanelComputes())
const clayProse = shallowRef(proseStandardisedToClay())
const domainHarm = shallowRef(harmonizeScienceDomainsInWavesOfWaves())
const running = ref(false)
const error = ref('')

function runMillennium() {
  running.value = true
  error.value = ''
  try {
    millennium.value = millenniumPanelComputes()
    panel.value = researchPanelComputes()
    domainProofs.value = domainProofPanelComputes()
    clayProse.value = proseStandardisedToClay()
    domainHarm.value = harmonizeScienceDomainsInWavesOfWaves()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'run failed'
  } finally {
    running.value = false
  }
}

runMillennium()
</script>

<template>
  <UiCard id="research-index" class="research-index" data-logic="src/wind/research/index.ts" data-target="src/wind/research/index.ts#millenniumPanelComputes" data-topic="research">
    <UiCardContent class="vp-doc research-index__content">
      <header class="research-index__header">
        <p class="research-index__lede">
          Apparatus index — sciences, standards, reproducibility.
        </p>
        <div class="research-index__actions">
          <UiBadge :status="statusBadgeKind(panel.computes)">{{ panel.computes ? '✓' : '—' }}</UiBadge>
          <UiButton size="sm" :disabled="running" @click="runMillennium">{{ running ? 'Running…' : 'Recompute' }}</UiButton>
        </div>
      </header>
      <UiSeparator />
      <p v-if="error" class="research-index__error" role="alert">{{ error }}</p>

      <section id="proofs" class="research-index__hub-link">
        <h3><a href="/proofs">Domain proofs</a></h3>
        <UiBadge :status="domainProofs.computes && domainProofs.claySolvedByThisFold === 0 ? 'ready' : 'warn'">
          rows={{ domainProofs.rows.length }} · clay={{ domainProofs.claySolvedByThisFold }} ·
          gaps closed={{ domainProofs.closedGaps }} / open={{ domainProofs.openGaps }}
        </UiBadge>
        <p class="research-index__meta">
          <a :href="domainProofs.problemsUrl" rel="noopener noreferrer" target="_blank">Millennium Problems</a>
          ·
          <a :href="domainProofs.rulesPdfUrl" rel="noopener noreferrer" target="_blank">Prize Rules PDF</a>
          · prose→Clay audited={{ clayProse.auditedCount }} · pass={{ clayProse.passedCount }} · fail={{ clayProse.failedCount }}
        </p>
        <ul v-if="clayProse.failedCount > 0" class="research-index__list">
          <li v-for="f in clayProse.failed" :key="f.id">
            <code>{{ f.surface }}</code>
            <span class="research-index__pair">residual={{ f.residual }}</span>
          </li>
        </ul>
      </section>
      <UiSeparator />

      <section id="millennium-challenge">
        <h3>Millennium challenge</h3>
        <UiBadge :status="millennium.claySolvedByThisFold === 0 && millennium.computes ? 'ready' : 'warn'">
          claySolvedByThisFold={{ millennium.claySolvedByThisFold }} · {{ millennium.computes ? '✓' : '—' }}
        </UiBadge>
        <p class="research-index__meta">
          infinity-on-reuse {{ millennium.infinityReuse.on ? '✓' : '—' }} ·
          memo {{ millennium.infinityReuse.afterFirst }}→{{ millennium.infinityReuse.afterSecond }} ·
          tokens={{ millennium.infinityReuse.runtimeTokens }}
        </p>
        <p class="research-index__meta">
          Per-problem Clay pages:
          <a href="/proofs">/proofs</a>
          (millennium-* slugs) · <code>{{ millennium.cli }}</code>
        </p>
        <p class="research-index__meta">{{ millennium.boundary }}</p>
      </section>
      <UiSeparator />

      <section id="sciences-trinities">
        <h3>Sciences · significance · trinities</h3>
        <UiBadge :status="statusBadgeKind(Boolean(panel.significance?.computes))">
          meanSig={{ panel.significance?.meanScore ?? '—' }}/100 · trinities={{ panel.trinities?.count ?? '—' }}
        </UiBadge>
        <p class="research-index__meta">{{ panel.trinities?.boundary }}</p>
        <table class="research-index__table">
          <thead><tr><th>Domain</th><th>Score</th><th>Ray</th><th>Gaps</th></tr></thead>
          <tbody>
            <tr v-for="d in panel.significance?.domains ?? []" :key="d.id">
              <td><code>{{ d.id }}</code></td>
              <td>{{ d.score }}</td>
              <td>{{ d.ray }}</td>
              <td>{{ d.gapsOpen }}</td>
            </tr>
          </tbody>
        </table>
        <p class="research-index__meta">
          crypto OECD {{ panel.trinities?.cryptoVertex?.oecd }} ·
          fold <code>{{ panel.trinities?.fold ?? 'sciencesInteractInTrinities' }}</code> ·
          pair <code>{{ panel.trinities?.pair ?? 'sciences/trinities' }}</code> ·
          <code>npm run quantum:sciences-trinities</code>
        </p>
      </section>
      <UiSeparator />

      <section id="harmonize-domains">
        <h3>Domain waves · harmonize</h3>
        <UiBadge :status="statusBadgeKind(Boolean(domainHarm.computes))">
          domainsTuned={{ domainHarm.domainsTuned ? 1 : 0 }} · meanSig={{ domainHarm.meanSig ?? '—' }} ·
          encode={{ domainHarm.encodeAlignedCount ?? '—' }} · cryptoGaps={{ domainHarm.cryptoGapsOpen ?? '—' }}
        </UiBadge>
        <table class="research-index__table">
          <thead><tr><th>Domain</th><th>Score</th><th>Gaps</th><th>Coverage</th><th>Tune</th><th>Fold</th><th>Seal</th><th>Encode</th><th>Residual</th></tr></thead>
          <tbody>
            <tr v-for="d in domainHarm.domains ?? []" :key="d.id">
              <td><code>{{ d.id }}</code></td>
              <td>{{ d.score }}</td>
              <td>{{ d.gapsOpen }}</td>
              <td>{{ d.coverage }}</td>
              <td>{{ d.tuned ? '✓' : '—' }}</td>
              <td>{{ d.gapsFolded ? '✓' : '—' }}</td>
              <td>{{ d.sealed ? '✓' : '—' }}</td>
              <td>{{ d.encodeAligned ? '✓' : '—' }}</td>
              <td>{{ d.residualNamed ? (d.cryptoVertex ? 'named-lab' : 'ok') : '—' }}</td>
            </tr>
          </tbody>
        </table>
        <p class="research-index__meta">
          fold <code>harmonizeScienceDomainsInWavesOfWaves</code> ·
          pair <code>{{ domainHarm.pair }}</code> · dual <code>{{ domainHarm.dualPair }}</code> ·
          mill={{ Math.round((domainHarm.journeyMillRatio ?? 0) * 100) }}% ·
          test={{ Math.round((domainHarm.journeyTestRatio ?? 0) * 100) }}% ·
          <code>npm run quantum:harmonize-domains</code>
        </p>
      </section>
      <UiSeparator />

      <section id="drift-manage">
        <h3>Computational drift</h3>
        <UiBadge :status="statusBadgeKind(Boolean(panel.drift?.computes))">
          total={{ panel.drift?.driftTotal ?? '—' }} · managed={{ panel.drift?.managedCount ?? '—' }}/{{ panel.drift?.rowCount ?? '—' }}
        </UiBadge>
        <table class="research-index__table">
          <thead><tr><th>Surface</th><th>Drift</th><th>Route</th><th>Managed</th></tr></thead>
          <tbody>
            <tr v-for="r in panel.drift?.rows ?? []" :key="r.id">
              <td><code>{{ r.id }}</code></td>
              <td>{{ r.drift }}</td>
              <td>{{ r.route }}</td>
              <td>{{ r.managed ? '✓' : '—' }}</td>
            </tr>
          </tbody>
        </table>
        <p class="research-index__meta">
          facetOnRate={{ panel.drift?.metrics?.facetOnRate?.toFixed?.(2) ?? '—' }} ·
          certified={{ panel.drift?.metrics?.certifiedNumeric }} · clay={{ panel.drift?.metrics?.clayNumeric }} ·
          <code>npm run quantum:drift-manage</code>
        </p>
      </section>
      <UiSeparator />

      <section id="drift-invert">
        <h3>Drift inverted · trinity gateway</h3>
        <UiBadge :status="statusBadgeKind(Boolean(panel.invert?.driftInvertedIsTrinityGateway))">
          gateway={{ panel.invert?.driftInvertedIsTrinityGateway ? 1 : 0 }} · faces={{ panel.invert?.gatewayFaces ?? '—' }} · deadEnd={{ panel.invert?.notDeadEndGap ? 0 : 1 }}
        </UiBadge>
        <p class="research-index__meta">
          fold <code>{{ panel.invert?.fold ?? 'driftInvertedIsTrinityGateway' }}</code> ·
          pair <code>{{ panel.invert?.pair }}</code> ·
          <code>npm run quantum:drift-invert</code>
        </p>
      </section>
      <UiSeparator />

      <section id="hex-crack">
        <h3>Hex · theorem crack</h3>
        <UiBadge :status="statusBadgeKind(Boolean(panel.hexCrack?.hexInsteadOfTheoremIsCrack))">
          found={{ panel.hexCrack?.found ?? '—' }} · fixed={{ panel.hexCrack?.fixed ?? '—' }} · remaining={{ panel.hexCrack?.remaining ?? '—' }}
        </UiBadge>
        <table class="research-index__table">
          <thead><tr><th>Surface</th><th>Kind</th><th>Status</th><th>Theorem</th></tr></thead>
          <tbody>
            <tr v-for="s in panel.hexCrack?.surfaces ?? []" :key="s.id">
              <td><code>{{ s.id }}</code></td>
              <td>{{ s.kind }}</td>
              <td>{{ s.status }}</td>
              <td><code>{{ s.theorem }}</code></td>
            </tr>
          </tbody>
        </table>
        <p class="research-index__meta">
          pair <code>{{ panel.hexCrack?.pair }}</code> ·
          <code>npm run quantum:hex-crack</code>
        </p>
      </section>
      <UiSeparator />

      <section id="theorem-const">
        <h3>Theorem · const</h3>
        <UiBadge :status="statusBadgeKind(Boolean(panel.theoremConst?.computationsUseOnlyQuantumTheoremsAsConstants))">
          found={{ panel.theoremConst?.found ?? '—' }} · fixed={{ panel.theoremConst?.fixed ?? '—' }} · remaining={{ panel.theoremConst?.remaining ?? '—' }}
        </UiBadge>
        <table class="research-index__table">
          <thead><tr><th>Offender</th><th>Status</th><th>Theorem</th></tr></thead>
          <tbody>
            <tr v-for="o in panel.theoremConst?.offenders ?? []" :key="o.id">
              <td><code>{{ o.id }}</code></td>
              <td>{{ o.status }}</td>
              <td><code>{{ o.theorem }}</code></td>
            </tr>
          </tbody>
        </table>
        <p class="research-index__meta">
          pair <code>{{ panel.theoremConst?.pair }}</code> ·
          <code>npm run quantum:theorem-const</code>
        </p>
      </section>
      <UiSeparator />

      <section id="sciences-standards-quantum">
        <h3>Sciences · standards (quantum only)</h3>
        <UiBadge :status="(panel.standards?.after?.gapCount ?? 1) === 0 ? 'ready' : (panel.standards?.after?.partialCount ?? 0) > 0 ? 'partial' : 'gap'">
          before {{ panel.standards?.before?.coveredCount ?? '—' }}/{{ panel.standards?.before?.partialCount ?? '—' }}/{{ panel.standards?.before?.gapCount ?? '—' }}
          → after {{ panel.standards?.after?.coveredCount ?? '—' }}/{{ panel.standards?.after?.partialCount ?? '—' }}/{{ panel.standards?.after?.gapCount ?? '—' }}
          · filled={{ panel.standards?.filledCount ?? '—' }}
        </UiBadge>
        <p class="research-index__meta">{{ panel.standards?.boundary }}</p>
        <table class="research-index__table">
          <thead><tr><th>Domain</th><th>Before</th><th>After</th><th>Filled</th><th>Standard map</th></tr></thead>
          <tbody>
            <tr v-for="d in panel.standards?.domains ?? []" :key="d.id">
              <td><code>{{ d.id }}</code></td>
              <td><UiBadge :status="statusBadgeKind(d.before)">{{ d.before }}</UiBadge></td>
              <td><UiBadge :status="statusBadgeKind(d.coverage)">{{ d.coverage }}</UiBadge></td>
              <td>{{ d.filledByQuantum ? '✓' : '—' }}{{ d.unclosableWithoutExternalLab ? ' lab' : '' }}</td>
              <td class="research-index__meta">{{ d.standardMap }}</td>
            </tr>
          </tbody>
        </table>
        <p class="research-index__meta">
          clay={{ panel.standards?.claySolvedByThisFold }} · certified={{ panel.standards?.certified }} ·
          qpuRequired={{ panel.standards?.qpuRequired }} ·
          <code>npm run quantum:sciences-standards-quantum</code>
        </p>
      </section>
      <UiSeparator />

      <section>
        <h3>Reproducibility gates</h3>
        <ul class="research-index__list">
          <li v-for="gate in panel.repro" :key="gate.id">
            <code>{{ gate.command }}</code>
            <span class="research-index__pair">({{ gate.pair }})</span>
          </li>
        </ul>
      </section>
      <UiSeparator />

      <section>
        <h3>Programs</h3>
        <table class="research-index__table">
          <thead><tr><th>Domain</th><th>Method</th><th>Verify</th></tr></thead>
          <tbody>
            <tr v-for="row in panel.rows" :key="row.domain + row.home">
              <td><strong>{{ row.domain }}</strong><div class="research-index__meta">{{ row.tier }} · {{ row.home }}</div></td>
              <td><code>{{ row.method }}</code></td>
              <td><code>{{ row.verify }}</code></td>
            </tr>
          </tbody>
        </table>
      </section>
    </UiCardContent>
  </UiCard>
</template>

<style scoped>
.research-index__header { display: grid; gap: var(--ich-sp3); }
.research-index__actions { display: flex; flex-wrap: wrap; gap: var(--ich-sp3); align-items: center; }
.research-index__lede { opacity: var(--ich-op-card-soft); max-width: calc(1rem * (54 - 2)); margin: 0; }
.research-index__hub-link { display: grid; gap: var(--ich-sp3); }
.research-index__table { width: 100%; border-collapse: collapse; font-size: var(--ich-text-ms); margin-top: var(--ich-sp4); }
.research-index__table th, .research-index__table td { border: 1px solid color-mix(in srgb, currentColor calc(9% + 6%), transparent); padding: var(--ich-sp4) var(--ich-sp5); vertical-align: top; text-align: left; }
.research-index__meta { font-size: var(--ich-text-xs); opacity: var(--ich-op-card-meta); margin-top: var(--ich-sp2); }
.research-index__list { list-style: none; padding: 0; margin: 0; }
.research-index__list li { margin-bottom: var(--ich-sp3); }
.research-index__pair { opacity: var(--ich-op-soft); margin-left: var(--ich-sp3); }
.research-index__error { color: var(--status-error); font-size: var(--ich-text-sm); }
</style>

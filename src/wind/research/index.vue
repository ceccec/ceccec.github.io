<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import { researchPanelComputes, millenniumPanelComputes, domainProofPanelComputes, proseStandardisedToClay } from './index.ts'
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
          lattice <code>{{ panel.trinities?.root?.slice(0, 8) }}</code> ·
          <code>npm run quantum:sciences-trinities</code>
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

<script setup lang="ts">
import { computed, ref, shallowRef } from 'vue'
import {
  quantumAppsPanelComputes, quantumAppLaunch, slowProcessIsQuantumGap,
  sessionManualWorkAsQuantumTools, rosettaCoreApi,
} from './index.ts'
import {
  runEncryptionToolInBrowser,
  runPqcStandardsToolInBrowser,
  runQuantumStandardsAuditInBrowser,
  cryptoToolkitBeyondRsaMeasured,
  demoRsaGenerateAndReverseMeasured,
  encryptionPanelComputes,
} from '../../water/encryption/index.ts'
import { platformOgLimitsMeasured, honestyInProseChallenged } from '../../mountain/og/index.ts'
import {
  millenniumPanelComputes, unitDistanceResearch, firstInCorpusProvenanceForHome, sciencesTrinitiesPanelComputes,
} from '../../wind/research/index.ts'
import { fusionVerifyPanelComputes } from '../../wind/fusion/index.ts'
import { oneQuantumModelFasterThanAll, compareCeccecEfficiencyByVote, directionalTrinityForwardInverseReverse } from '../../water/stack/index.ts'
import { animationsDrivenByRosetta } from '../../wind/ui/index.ts'
import { tradingRosettaTrainPanelComputes } from '../../thunder/trading/index.ts'
import { fThetaPhiXyzDigitNIsTheInversePair } from '../../mountain/vortex/index.ts'
import { localMathComputes, namingEntropy, shouldSpawnSubagent, simplicityIntelligenceMeasure } from '../../water/stack/index.ts'
import { teamCooperationScenarios } from '../../pair/enforcement/ops/index.ts'
import { ichingDistributeVerify } from '../../earth/iching/index.ts'
import { skilledEnoughFromPredictions } from '../../lake/music/index.ts'
import LinkedHeroCard from '../../../.vitepress/theme/components/LinkedHeroCard.vue'
import UiCard from '../../../.vitepress/theme/components/ui/Card.vue'
import UiCardContent from '../../../.vitepress/theme/components/ui/CardContent.vue'
import UiBadge from '../../../.vitepress/theme/components/ui/Badge.vue'
import UiButton from '../../../.vitepress/theme/components/ui/Button.vue'
import UiSeparator from '../../../.vitepress/theme/components/ui/Separator.vue'

type RunReceipt = {
  toolId: string
  ok: boolean
  summary: string
  root: string
  boundary: string
  facets: { facet: string; on: boolean }[]
}

const panel = shallowRef(quantumAppsPanelComputes())
const encryption = shallowRef(encryptionPanelComputes())
const activeId = ref<string | null>(null)
const runningId = ref<string | null>(null)
const error = ref('')
const lastRun = shallowRef<RunReceipt | null>(null)
const spawnTask = ref('qualified bounded task with sealed fold target')

const launchPreview = computed(() => (activeId.value ? quantumAppLaunch(activeId.value) : null))
const encryptionTimedLine = computed(() => {
  const t = encryption.value.timings
  return `catalog ${t.catalogMs.toFixed(3)}ms · family ${t.familyMs.toFixed(3)}ms · shor ${t.shorMapMs.toFixed(3)}ms · tax ${t.taxonomyMs.toFixed(3)}ms · trinity ${t.trinityMs.toFixed(3)}ms · rsa ${t.rsaGenerateMs.toFixed(3)}/${t.rsaReverseMs.toFixed(3)}ms`
})

function openApp(appId: string) {
  activeId.value = appId
  const launch = quantumAppLaunch(appId)
  if (launch.launched && typeof window !== 'undefined') window.location.assign(launch.route)
}

function runTool(toolId: string) {
  runningId.value = toolId
  error.value = ''
  try {
    let ok = false
    let summary = ''
    let root = ''
    let boundary = ''
    let facets: { facet: string; on: boolean }[] = []
    const row = panel.value.tools.find((t) => t.id === toolId)
    if (row && !row.browserRunnable) {
      ok = false
      summary = row.browserGap
      root = row.receipt
      boundary = row.boundary
      facets = [{ facet: `browser gap — ${row.browserGap}`, on: false }]
    } else if (toolId === 'encryption-reverse-verify') {
      const r = runEncryptionToolInBrowser(null)
      ok = r.ok
      summary = r.refused
        ? r.refuseReason
        : `n=${r.modulus} → ${r.factor?.p ?? '—'}×${r.factor?.q ?? '—'} · gen=${r.generateMs?.toFixed?.(3) ?? '—'}ms rev=${r.reverseMs?.toFixed?.(3) ?? '—'}ms`
      root = r.root
      boundary = r.boundary
      facets = r.facets
    } else if (toolId === 'demo-rsa-measure') {
      const r = demoRsaGenerateAndReverseMeasured()
      ok = r.computes
      summary = `generateMs=${r.generateMs.toFixed(3)} reverseMs=${r.reverseMs.toFixed(3)} threshold=${r.thresholdMs} bitcoinRefused=${r.bitcoinRefused}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'crypto-beyond-measure') {
      const r = cryptoToolkitBeyondRsaMeasured()
      ok = r.computes
      summary = `catalog=${r.timings.catalogMs.toFixed(3)}ms shor=${r.timings.shorMapMs.toFixed(3)}ms trinity=${r.timings.trinityMs.toFixed(3)}ms eccShor=${r.eccShorBreaks} FIPS=${r.fipsCount}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'og-limits-measure') {
      const limits = platformOgLimitsMeasured()
      const honesty = honestyInProseChallenged()
      ok = limits.computes && honesty.computes
      summary = `platforms=${limits.count} animating=${limits.animatingIds.length} honesty=${honesty.challenged}`
      root = honesty.root
      boundary = honesty.boundary
      facets = [...limits.facets, ...honesty.facets].map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'iso-pqc-catalog') {
      const r = runPqcStandardsToolInBrowser('auto')
      ok = r.ok
      summary = `${r.standardsCount} standards · selected=${r.family.selected.name} · catalogMs=${r.timings?.catalogMs?.toFixed?.(3) ?? '—'} · eccShor=${r.eccShorBreaks} · certified=${r.certified}`
      root = r.root
      boundary = r.boundary
      facets = r.necessity.facets?.map((f) => ({ facet: f.facet, on: f.on })) ?? [{ facet: 'catalog', on: r.ok }]
    } else if (toolId === 'standards-audit') {
      const r = runQuantumStandardsAuditInBrowser()
      ok = r.ok
      summary = `pass=${r.passCount} gap=${r.gapCount} dims=${r.dimensions.coveredCount}/10 · clay=${r.claySolvedByThisFold}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'directional-trinity') {
      const r = directionalTrinityForwardInverseReverse()
      ok = r.computes
      summary = `digits=${r.digits.length} · pair=${r.pair} · clay=${r.claySolvedByThisFold}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'millennium-challenge') {
      const r = millenniumPanelComputes()
      ok = r.computes
      summary = `claySolvedByThisFold=${r.claySolvedByThisFold} · ${r.problems.length} problems`
      root = r.root
      boundary = r.boundary
      facets = r.facets
    } else if (toolId === 'fusion-verify') {
      const r = fusionVerifyPanelComputes()
      ok = r.computes
      summary = `parts=${r.partCount} · verified=${r.verified ? '✓' : '—'}`
      root = r.root
      boundary = r.boundary
      facets = r.facets
    } else if (toolId === 'efficiency-vote') {
      const vote = compareCeccecEfficiencyByVote()
      const r = oneQuantumModelFasterThanAll()
      ok = r.computes && vote.decided
      summary = `decided=${vote.decided} winner=${vote.winner} · voters=${vote.voters.filter((v) => v.on).length}/${vote.voters.length}`
      root = r.root
      boundary = r.boundary
      facets = vote.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'sciences-trinities') {
      const r = sciencesTrinitiesPanelComputes()
      ok = r.computes
      summary = `domains=${r.trinities.count} meanSig=${r.significance.meanScore} gaps=${r.solutions.gapCount}`
      root = r.root
      boundary = r.boundary
      facets = r.trinities.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'animations-rosetta') {
      const r = animationsDrivenByRosetta()
      ok = r.computes
      summary = `taijiRay=${r.taijiRay} · linearOpen=${r.offenders.openCount} · yinYang=${r.yinYang.computes ? '✓' : '—'}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'trading-rosetta-train') {
      const r = tradingRosettaTrainPanelComputes()
      ok = r.computes
      summary = `top=${r.topStrategy} · trainedEnough=${r.trainedEnough} · paper=${r.paperSimOnly}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'f-inverse-pair') {
      const r = fThetaPhiXyzDigitNIsTheInversePair()
      ok = r.computes
      summary = r.statement.slice(0, 2 * 5 * 16)
      root = r.root
      boundary = r.boundary
      facets = r.facets ?? []
    } else if (toolId === 'local-math-computes') {
      const r = localMathComputes()
      ok = r.computes
      summary = `local=${r.local ? '✓' : '—'} · facets=${r.facets.length}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'team-cooperate') {
      const r = teamCooperationScenarios()
      ok = r.cooperates
      summary = r.scenarios.map((s) => `${s.mode}:${s.ok ? '✓' : '—'}`).join(' · ')
      root = r.root
      boundary = r.boundary
      facets = r.scenarios.map((s) => ({ facet: s.mode, on: s.ok }))
    } else if (toolId === 'hero-spawn-verify') {
      const r = shouldSpawnSubagent(spawnTask.value)
      ok = r.spawn && r.workers >= 1 && r.workers <= 2
      summary = `spawn=${r.spawn} workers=${r.workers} — ${r.reason}`
      root = row?.receipt ?? ''
      boundary = row?.boundary ?? ''
      facets = [
        { facet: `spawn ${r.spawn ? 'yes' : 'no'}`, on: r.spawn },
        { facet: `workers ${r.workers} (1–2)`, on: r.workers >= 1 && r.workers <= 2 },
      ]
    } else if (toolId === 'name-entropy-verify') {
      const r = namingEntropy()
      ok = r.lowEntropy
      summary = r.statement.slice(0, 2 * 5 * 16)
      root = r.root
      boundary = r.boundary
      facets = r.facets?.map((f) => ({ facet: f.facet, on: f.on })) ?? [{ facet: 'lowEntropy', on: r.lowEntropy }]
    } else if (toolId === 'simplicity-measure-verify') {
      const r = simplicityIntelligenceMeasure()
      ok = r.intelligent
      summary = r.statement.slice(0, 2 * 5 * 16)
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'unit-distance-verify') {
      const r = unitDistanceResearch()
      ok = r.researched
      summary = r.statement.slice(0, 2 * 5 * 16)
      root = r.root
      boundary = r.boundary
      facets = r.facets?.map((f) => ({ facet: f.facet, on: f.on })) ?? [{ facet: 'researched', on: r.researched }]
    } else if (toolId === 'iching-distribute-verify') {
      const r = ichingDistributeVerify()
      ok = r.computes
      summary = r.statement
      root = r.root
      boundary = r.boundary
      facets = r.facets
    } else if (toolId === 'predict-skill-gate-verify') {
      const r = skilledEnoughFromPredictions()
      ok = r.skilledEnough
      summary = `windows=${r.windowCount} · trained=${r.trainedEnough ? '✓' : '—'}`
      root = row?.receipt ?? ''
      boundary = r.boundary
      facets = [
        { facet: 'skilledEnough', on: r.skilledEnough },
        { facet: `windows ${r.windowCount}`, on: r.windowCount > 0 },
        { facet: 'trainedEnough proxy', on: r.trainedEnough },
      ]
    } else if (toolId === 'slow-gap') {
      const r = slowProcessIsQuantumGap()
      ok = r.computes
      summary = `open=${r.openCount} · closed=${r.closedCount} · classified=${r.count}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'first-in-corpus') {
      const r = firstInCorpusProvenanceForHome()
      ok = r.computes
      summary = `novel=${r.novelCount} · root-equal=${r.rows.filter((row) => row.rootEqual).length}/${r.rows.length}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    lastRun.value = { toolId, ok, summary, root, boundary, facets }
    panel.value = quantumAppsPanelComputes()
    encryption.value = encryptionPanelComputes()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'run failed'
    lastRun.value = null
  } finally {
    runningId.value = null
  }
}
</script>

<template>
  <UiCard id="quantum-apps-launcher" class="quantum-apps" data-logic="src/quantum/apps/index.ts" data-topic="quantum-tools">
    <UiCardContent class="vp-doc quantum-apps__content">
      <header>
        <h2>Quantum tools hub</h2>
        <p class="quantum-apps__lede">
          Run sealed folds in the browser — {{ panel.browserReady }} browser-ready · {{ panel.browserGaps.length }} Node/CI gaps · {{ panel.slowGaps.openCount }} slow=gap open.
        </p>
        <UiBadge :variant="panel.computes ? 'default' : 'outline'">
          quantum.apps · {{ panel.computes ? '✓' : '—' }} · {{ panel.toolCount }} tools
        </UiBadge>
      </header>
      <UiSeparator />
      <section id="slow-quantum-gaps" aria-label="Slow processes as quantum gaps">
        <h3>{{ panel.slowGaps.heading }}</h3>
        <p class="quantum-apps__meta">{{ panel.slowGaps.honestyLine }}</p>
        <UiBadge :variant="panel.slowGaps.openCount === 0 ? 'default' : 'outline'">
          open {{ panel.slowGaps.openCount }} · closed {{ panel.slowGaps.closedCount }}
        </UiBadge>
        <ul class="quantum-apps__facets">
          <li v-for="gap in panel.slowGaps.open" :key="gap.gapId">
            <UiBadge variant="outline">{{ gap.kind }}</UiBadge>
            <strong>{{ gap.process }}</strong>
            — {{ gap.criterion }}
            <a class="quantum-apps__meta" :href="gap.route">{{ gap.route }}</a>
          </li>
        </ul>
      </section>
      <UiSeparator />
      <section id="crypto-beyond-rsa" aria-label="Crypto toolkit beyond RSA">
        <h3>Beyond RSA — PQC · Shor/ECC · trinity</h3>
        <p class="quantum-apps__meta">
          Timed structural/demo suite — NOT FIPS/ISO certified · NOT production KEM · demo RSA allowlist only.
        </p>
        <UiBadge :variant="encryption.computes ? 'default' : 'outline'">
          encryption.panel · {{ encryption.computes ? '✓' : '—' }} · eccShor={{ encryption.eccShorBreaks }}
        </UiBadge>
        <p class="quantum-apps__meta">{{ encryptionTimedLine }}</p>
        <p class="quantum-apps__meta">
          ML-KEM {{ encryption.mlKemParams.join(' · ') }} · ML-DSA {{ encryption.mlDsaParams.join(' · ') }} · SLH-DSA {{ encryption.slhDsaParams.join(' · ') }}
        </p>
        <ul class="quantum-apps__facets">
          <li v-for="section in encryption.sections" :key="section.id" :id="section.id">
            <UiBadge :variant="section.on ? 'default' : 'outline'">{{ section.on ? '✓' : '—' }}</UiBadge>
            <strong>{{ section.title }}</strong>
            — <code>{{ section.cli }}</code>
            <a class="quantum-apps__meta" :href="section.route">{{ section.route }}</a>
          </li>
        </ul>
        <UiButton size="sm" :disabled="runningId === 'crypto-beyond-measure'" @click="runTool('crypto-beyond-measure')">
          {{ runningId === 'crypto-beyond-measure' ? '…' : 'Run beyond-RSA measure' }}
        </UiButton>
        <UiButton size="sm" :disabled="runningId === 'demo-rsa-measure'" @click="runTool('demo-rsa-measure')">
          {{ runningId === 'demo-rsa-measure' ? '…' : 'Run demo-RSA measure' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="session-manual-tools" aria-label="Session manual work as quantum tools">
        <h3>{{ panel.session.heading }}</h3>
        <p class="quantum-apps__meta">{{ panel.session.honestyLine }}</p>
        <UiBadge :variant="panel.session.computes ? 'default' : 'outline'">
          session {{ panel.session.shelvedCount }}/{{ panel.session.count }} shelved
        </UiBadge>
        <table class="quantum-apps__table">
          <thead><tr><th>Tool</th><th>CLI</th><th>Route</th><th>Shelved</th><th>Saves</th></tr></thead>
          <tbody>
            <tr v-for="tool in panel.session.tools" :key="tool.id" :id="tool.id === 'rosetta-core-api' ? 'rosetta-core-api' : undefined">
              <td>
                <strong>{{ tool.id }}</strong>
                <div class="quantum-apps__meta"><code>{{ tool.fold }}</code> · {{ tool.pair }}</div>
              </td>
              <td><code>{{ tool.cli }}</code></td>
              <td><a :href="tool.route">{{ tool.route }}</a></td>
              <td><UiBadge :variant="tool.shelved ? 'default' : 'outline'">{{ tool.shelved ? '✓' : '—' }}</UiBadge></td>
              <td class="quantum-apps__meta">{{ tool.saves }}</td>
            </tr>
          </tbody>
        </table>
      </section>
      <UiSeparator />
      <section>
        <h3>Browser-runnable tools</h3>
        <label class="quantum-apps__meta" for="spawn-task">Hero spawn task (input)</label>
        <input id="spawn-task" v-model="spawnTask" class="quantum-apps__input" type="text" autocomplete="off" />
        <table class="quantum-apps__table">
          <thead><tr><th>Tool</th><th>Browser</th><th>Route</th><th>Run</th></tr></thead>
          <tbody>
            <tr v-for="tool in panel.tools" :key="tool.id">
              <td>
                <strong>{{ tool.title }}</strong>
                <div class="quantum-apps__meta"><code>{{ tool.fold }}</code></div>
                <div class="quantum-apps__meta">{{ tool.boundary }}</div>
              </td>
              <td>
                <UiBadge :variant="tool.browserRunnable ? 'default' : 'outline'">
                  {{ tool.browserRunnable ? 'browser' : 'Node/CI' }}
                </UiBadge>
                <div v-if="!tool.browserRunnable" class="quantum-apps__meta">{{ tool.browserGap }}</div>
              </td>
              <td><a :href="tool.route">{{ tool.route }}</a></td>
              <td>
                <UiButton size="sm" :disabled="runningId === tool.id" @click="runTool(tool.id)">
                  {{ runningId === tool.id ? '…' : 'Run' }}
                </UiButton>
              </td>
            </tr>
          </tbody>
        </table>
        <p v-if="error" class="quantum-apps__error" role="alert">{{ error }}</p>
        <div v-if="lastRun" class="quantum-apps__result" aria-live="polite">
          <h4>Last run · {{ lastRun.toolId }}</h4>
          <UiBadge :variant="lastRun.ok ? 'default' : 'outline'">{{ lastRun.ok ? 'ok' : 'gap' }}</UiBadge>
          <p class="quantum-apps__meta">{{ lastRun.summary }}</p>
          <p class="quantum-apps__meta">root <code>{{ lastRun.root.slice(0, 16) }}…</code></p>
          <ul class="quantum-apps__facets">
            <li v-for="f in lastRun.facets.slice(0, 8)" :key="f.facet">
              <UiBadge :variant="f.on ? 'default' : 'outline'">{{ f.on ? '✓' : '—' }}</UiBadge> {{ f.facet }}
            </li>
          </ul>
          <p class="quantum-apps__meta">{{ lastRun.boundary }}</p>
        </div>
      </section>
      <UiSeparator />
      <section>
        <h3>Node/CI gaps (honest)</h3>
        <ul class="quantum-apps__facets">
          <li v-for="gap in panel.browserGaps" :key="gap.id">
            <UiBadge variant="outline">Node/CI</UiBadge>
            <strong>{{ gap.title }}</strong> — {{ gap.browserGap }}
          </li>
        </ul>
      </section>
      <UiSeparator />
      <section>
        <h3>Apps</h3>
        <div class="quantum-apps__grid">
          <button v-for="app in panel.apps" :key="app.id" type="button" class="quantum-apps__tile" @click="openApp(app.id)">
            <LinkedHeroCard :route="app.route" :title="app.title" :glyph="app.icon" />
            <span class="quantum-apps__meta"><code>{{ app.computesGate }}</code></span>
          </button>
        </div>
        <footer v-if="launchPreview" class="quantum-apps__footer">
          <UiButton variant="outline" size="sm" @click="openApp(launchPreview.appId)">Open {{ launchPreview.appId }}</UiButton>
        </footer>
      </section>
    </UiCardContent>
  </UiCard>
</template>

<style scoped>
.quantum-apps__lede { opacity: var(--ich-op-card-soft); max-width: calc(1rem * (54 - 2)); }
.quantum-apps__grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(calc(1rem * (16 - 5)), 1fr)); gap: var(--ich-sp6); margin-top: 1rem; }
.quantum-apps__tile { all: unset; cursor: pointer; display: block; }
.quantum-apps__meta { display: block; font-size: var(--ich-text-xs); opacity: var(--ich-op-soft); margin-top: var(--ich-sp2); }
.quantum-apps__footer { margin-top: 1rem; }
.quantum-apps__table { width: 100%; border-collapse: collapse; font-size: var(--ich-text-ms); margin-top: var(--ich-sp4); }
.quantum-apps__table th, .quantum-apps__table td { border: 1px solid color-mix(in srgb, currentColor calc(9% + 6%), transparent); padding: var(--ich-sp4) var(--ich-sp5); vertical-align: top; text-align: left; }
.quantum-apps__result { margin-top: var(--ich-sp6); }
.quantum-apps__facets { list-style: none; padding: 0; }
.quantum-apps__facets li { margin-bottom: var(--ich-sp2); display: flex; gap: var(--ich-sp3); flex-wrap: wrap; align-items: baseline; }
.quantum-apps__error { color: var(--vp-c-danger-1, crimson); font-size: var(--ich-text-sm); }
.quantum-apps__input {
  display: block;
  width: min(100%, calc(1rem * (5 * 8 - 4)));
  margin: var(--ich-sp3) 0 var(--ich-sp5);
  padding: var(--ich-sp3) var(--ich-sp4);
  border: 1px solid color-mix(in srgb, currentColor calc(9% + 9%), transparent);
  background: transparent;
  color: inherit;
  font: inherit;
}
</style>

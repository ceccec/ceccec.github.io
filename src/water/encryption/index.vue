<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import {
  encryptionPanelComputes,
  runEncryptionToolInBrowser,
  runPqcStandardsToolInBrowser,
  runQuantumStandardsAuditInBrowser,
  runIsoPqcRequirementsGapFillInBrowser,
} from './index.ts'
import UiCard from '../../../.vitepress/theme/components/ui/Card.vue'
import UiCardContent from '../../../.vitepress/theme/components/ui/CardContent.vue'
import UiBadge from '../../../.vitepress/theme/components/ui/Badge.vue'
import UiButton from '../../../.vitepress/theme/components/ui/Button.vue'
import UiSeparator from '../../../.vitepress/theme/components/ui/Separator.vue'

const panel = shallowRef(encryptionPanelComputes())
const selectedModulus = ref<number | null>(null)
const familyPrefer = ref<'auto' | 'lattice' | 'hash' | 'code'>('auto')
const running = ref(false)
const error = ref('')
const result = shallowRef<ReturnType<typeof runEncryptionToolInBrowser> | null>(null)
const pqcResult = shallowRef<ReturnType<typeof runPqcStandardsToolInBrowser> | null>(null)
const auditResult = shallowRef<ReturnType<typeof runQuantumStandardsAuditInBrowser> | null>(null)
const isoGapResult = shallowRef<ReturnType<typeof runIsoPqcRequirementsGapFillInBrowser> | null>(null)

function selectModulus(n: number) {
  selectedModulus.value = n
}

function runTool() {
  running.value = true
  error.value = ''
  try {
    result.value = runEncryptionToolInBrowser(selectedModulus.value)
    pqcResult.value = runPqcStandardsToolInBrowser(familyPrefer.value)
    auditResult.value = runQuantumStandardsAuditInBrowser()
    isoGapResult.value = runIsoPqcRequirementsGapFillInBrowser()
    panel.value = encryptionPanelComputes()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'run failed'
    result.value = null
  } finally {
    running.value = false
  }
}

runTool()
</script>

<template>
  <UiCard
    id="encryption-tools"
    class="encryption-tools"
    data-logic="src/water/encryption/index.ts"
    data-target="src/water/encryption/index.ts#runEncryptionToolInBrowser"
    data-topic="encryption"
  >
    <UiCardContent class="vp-doc encryption-tools__content">
      <header class="encryption-tools__header">
        <h2>Quantum encryption tools</h2>
        <p class="encryption-tools__lede">
          Browser-sync encrypt ↔ decrypt + modeled Shor on sealed demo RSA + ISO/NIST PQC catalog + standards audit (reverse + inverse · 10D).
          Alignment only — not ISO certified, not FIPS validated.
        </p>
        <UiBadge :variant="panel.computes ? 'default' : 'outline'">
          encryption.panel · {{ panel.computes ? '✓' : '—' }}
        </UiBadge>
        <UiBadge variant="outline">mode browser-sync</UiBadge>
        <UiBadge v-if="auditResult" :variant="auditResult.gapCount === 0 ? 'default' : 'outline'">
          audit {{ auditResult.passCount }} pass · {{ auditResult.gapCount }} gap
        </UiBadge>
      </header>
      <UiSeparator />
      <section aria-label="Demo modulus picker">
        <h3>Demo modulus (reverse)</h3>
        <div class="encryption-tools__moduli">
          <UiButton
            v-for="n in panel.demoModuli"
            :key="n"
            size="sm"
            :variant="selectedModulus === n ? 'default' : 'outline'"
            @click="selectModulus(n)"
          >
            n={{ n }}
          </UiButton>
          <UiButton size="sm" variant="outline" @click="selectedModulus = null">teaching default</UiButton>
        </div>
        <div class="encryption-tools__moduli">
          <span class="encryption-tools__meta">PQC family prefer</span>
          <UiButton
            v-for="p in (['auto', 'lattice', 'hash', 'code'] as const)"
            :key="p"
            size="sm"
            :variant="familyPrefer === p ? 'default' : 'outline'"
            @click="familyPrefer = p"
          >
            {{ p }}
          </UiButton>
        </div>
        <UiButton class="encryption-tools__run" :disabled="running" @click="runTool">
          {{ running ? 'Running…' : 'Run reverse + PQC + audit' }}
        </UiButton>
        <p v-if="error" class="encryption-tools__error" role="alert">{{ error }}</p>
      </section>
      <UiSeparator />
      <section v-if="result">
        <h3>Reverse live result</h3>
        <UiBadge :variant="result.ok ? 'default' : 'outline'">{{ result.ok ? 'ok' : 'gap' }}</UiBadge>
        <UiBadge v-if="result.refused" variant="outline">refused</UiBadge>
        <p class="encryption-tools__meta">
          n={{ result.modulus }} · bits={{ result.bits }}
          <template v-if="result.refused"> · {{ result.refuseReason }}</template>
        </p>
        <p v-if="result.factor?.factored" class="encryption-tools__meta">
          factor {{ result.factor.N }} → {{ result.factor.p }}×{{ result.factor.q }} · base={{ result.factor.base }} · order={{ result.factor.order }}
        </p>
        <p class="encryption-tools__meta">root <code>{{ result.root.slice(0, 16) }}…</code></p>
        <ul class="encryption-tools__list">
          <li v-for="facet in result.facets" :key="facet.facet">
            <UiBadge :variant="facet.on ? 'default' : 'outline'">{{ facet.on ? '✓' : '—' }}</UiBadge>
            {{ facet.facet }}
          </li>
        </ul>
        <p class="encryption-tools__boundary">{{ result.boundary }}</p>
      </section>
      <UiSeparator />
      <section id="local-reverse-timed-vs-standards" aria-label="Local reverse timed versus standards">
        <h3>Local reverse timed vs ISO/NIST standards</h3>
        <p class="encryption-tools__lede">
          Toy DEMO_RSA_MODULI wall-clock vs estimated classical security work. demo ≠ AES wire · certified=false · does NOT break NIST PQC · reference bounds only (this repo is not the ISO standard).
        </p>
        <UiBadge :variant="result?.localTimed?.computes ? 'default' : 'outline'">
          rev={{ result?.localTimed?.reverseMs?.toFixed?.(3) ?? panel.localTimed?.reverseMs?.toFixed?.(3) ?? '—' }}ms
          · ops/s={{ result?.localTimed?.aggregateOpsPerSec?.toFixed?.(3) ?? panel.localTimed?.aggregateOpsPerSec?.toFixed?.(3) ?? '—' }}
          · breaksNistPqc={{ result?.localTimed?.breaksNistPqc ?? panel.localTimed?.breaksNistPqc ?? false }}
        </UiBadge>
        <table class="encryption-tools__table">
          <thead>
            <tr><th>N</th><th>Bits</th><th>reverseMs</th><th>ops/s</th></tr>
          </thead>
          <tbody>
            <tr v-for="row in (result?.localTimed?.timed?.rows ?? panel.localTimed?.timed?.rows ?? [])" :key="row.N">
              <td><code>{{ row.N }}</code></td>
              <td>{{ row.bits }}</td>
              <td>{{ row.reverseMs.toFixed(3) }}</td>
              <td>{{ row.opsPerSec.toFixed(3) }}</td>
            </tr>
          </tbody>
        </table>
        <table class="encryption-tools__table">
          <thead>
            <tr><th>Standard</th><th>Classical bits</th><th>log₂(est sec)</th><th>Breaks?</th></tr>
          </thead>
          <tbody>
            <tr v-for="c in (result?.comparisons ?? panel.localTimed?.comparisons ?? [])" :key="c.id">
              <td><code>{{ c.id }}</code></td>
              <td>{{ c.classicalSecurityBits }}</td>
              <td>{{ c.estimatedClassicalLog2Sec.toFixed(1) }}</td>
              <td>{{ c.breaksStandard }}</td>
            </tr>
          </tbody>
        </table>
        <p class="encryption-tools__boundary">{{ result?.localTimed?.boundary ?? panel.localTimed?.boundary }}</p>
      </section>
      <UiSeparator />
      <section id="prove-local-novel-encrypt" aria-label="Prove local novel encryption security">
        <h3>Local novel-encryption security proof</h3>
        <p class="encryption-tools__lede">
          Structural + adversarial + measured-local. Composes ISO/NIST standards map as reference bounds only — this repo is NOT the ISO standard. productionReverseRefused · fieldHistory=none · certified=false.
        </p>
        <UiBadge :variant="(result?.localNovel?.localSecurityProved ?? panel.localNovel?.localSecurityProved) ? 'default' : 'outline'">
          localSecurityProved={{ result?.localNovel?.localSecurityProved ?? panel.localNovel?.localSecurityProved ?? '—' }}
          · thisRepoIsNotTheIsoStandard={{ result?.localNovel?.thisRepoIsNotTheIsoStandard ?? panel.localNovel?.thisRepoIsNotTheIsoStandard ?? true }}
        </UiBadge>
        <ul class="encryption-tools__list">
          <li v-for="c in (result?.localNovel?.inventory?.components ?? panel.localNovel?.inventory?.components ?? [])" :key="c.id">
            <UiBadge variant="outline">{{ c.kind }}</UiBadge>
            {{ c.id }} — {{ c.fold }}
          </li>
        </ul>
        <p class="encryption-tools__boundary">{{ result?.localNovel?.boundary ?? panel.localNovel?.boundary }}</p>
      </section>
      <UiSeparator />
      <section id="iso-pqc-catalog" aria-label="ISO NIST PQC catalog">
        <h3>ISO / NIST PQC catalog</h3>
        <p class="encryption-tools__meta">
          Research date {{ pqcResult?.researchDate ?? panel.pqc?.researchDate }} ·
          {{ (pqcResult?.standardsCount ?? panel.standards?.length) ?? 0 }} standards ·
          selected {{ pqcResult?.family.selected.name ?? '—' }}
        </p>
        <table class="encryption-tools__table">
          <thead>
            <tr><th>Id</th><th>Domain</th><th>Tool / theorem</th><th>Status (2026-07)</th></tr>
          </thead>
          <tbody>
            <tr v-for="row in (pqcResult?.standards ?? panel.standards ?? [])" :key="row.id">
              <td><code>{{ row.id }}</code></td>
              <td>{{ row.domain }}</td>
              <td>{{ row.toolOrTheorem }}</td>
              <td>{{ row.statusAsOf2026_07 }}</td>
            </tr>
          </tbody>
        </table>
        <p class="encryption-tools__boundary">{{ pqcResult?.boundary ?? panel.pqc?.boundary }}</p>
      </section>
      <UiSeparator />
      <section id="iso-requires-pqc" aria-label="Does ISO require post-quantum security">
        <h3>Does ISO require post-quantum security?</h3>
        <p class="encryption-tools__lede">{{ isoGapResult?.plainAnswer ?? '—' }}</p>
        <UiBadge :variant="isoGapResult?.isoRequiresPostQuantumSecurity === false ? 'default' : 'outline'">
          isoRequiresPQC={{ isoGapResult?.isoRequiresPostQuantumSecurity ?? '—' }}
        </UiBadge>
        <UiBadge variant="outline">universalMandate={{ isoGapResult?.universalMandate ?? false }}</UiBadge>
        <UiBadge variant="outline">migrationGuidance={{ isoGapResult?.migrationGuidance ?? true }}</UiBadge>
        <UiBadge variant="outline">nistAlignedIsoWork={{ isoGapResult?.nistAlignedIsoWork ?? true }}</UiBadge>
        <UiBadge variant="outline">isoOfficialStandard=false · certified=false</UiBadge>
      </section>
      <UiSeparator />
      <section id="iso-pqc-gap-fill" aria-label="ISO NIST PQC gap fill all quantum directions">
        <h3>ISO/NIST PQC gap-fill — forward · inverse · reverse</h3>
        <p class="encryption-tools__lede">
          Normative needs mapped to covered | partial | gap. Lab certification stays gap with handoff — not faked closed.
        </p>
        <UiBadge :variant="isoGapResult?.ok ? 'default' : 'outline'">
          covered={{ isoGapResult?.coveredCount ?? '—' }}
          · partial={{ isoGapResult?.partialCount ?? '—' }}
          · gap={{ isoGapResult?.gapCount ?? '—' }}
        </UiBadge>
        <table v-if="isoGapResult?.needs?.length" class="encryption-tools__table">
          <thead>
            <tr><th>Coverage</th><th>Id</th><th>Direction</th><th>Need</th><th>Lab?</th></tr>
          </thead>
          <tbody>
            <tr v-for="n in isoGapResult.needs" :key="n.id">
              <td><UiBadge :variant="n.coverage === 'covered' ? 'default' : 'outline'">{{ n.coverage }}</UiBadge></td>
              <td><code>{{ n.id }}</code></td>
              <td>{{ n.direction }}</td>
              <td>{{ n.need }}</td>
              <td>{{ n.unclosableWithoutExternalLab }}</td>
            </tr>
          </tbody>
        </table>
        <p class="encryption-tools__boundary">{{ isoGapResult?.boundary }}</p>
      </section>
      <UiSeparator />
      <section id="quantum-standards-audit" aria-label="Quantum standards audit">
        <h3>Quantum standards audit</h3>
        <p class="encryption-tools__lede">
          Reverse (demo RSA) + inverse (digit-zero · f→{p,q} · ratInv) + reverse≠inverse · covered|partial|gap · all 10 computable dimensions.
        </p>
        <UiBadge v-if="auditResult" :variant="auditResult.ok ? 'default' : 'outline'">
          covered {{ auditResult.coveredCount ?? auditResult.passCount }} · partial {{ auditResult.partialCount ?? 0 }} · gap {{ auditResult.gapCount }} · dims {{ auditResult.dimensions.coveredCount }}/10
        </UiBadge>
        <table v-if="auditResult" class="encryption-tools__table">
          <thead>
            <tr><th>Coverage</th><th>Id</th><th>Standard / dimension</th><th>R/I</th><th>Export</th></tr>
          </thead>
          <tbody>
            <tr v-for="row in auditResult.audits" :key="row.id">
              <td><UiBadge :variant="(row.coverage ?? row.verdict) === 'covered' || row.verdict === 'pass' ? 'default' : 'outline'">{{ row.coverage ?? row.verdict }}</UiBadge></td>
              <td><code>{{ row.id }}</code></td>
              <td>{{ row.standardOrDimension }}</td>
              <td>{{ row.reverseOrInverse }}</td>
              <td>{{ row.auditExport }}</td>
            </tr>
          </tbody>
        </table>
        <h4 v-if="auditResult">Dimension coverage</h4>
        <ul v-if="auditResult" class="encryption-tools__list">
          <li v-for="dim in auditResult.dimensions.rows" :key="dim.dimension">
            <UiBadge :variant="dim.verdict === 'pass' ? 'default' : 'outline'">{{ dim.verdict }}</UiBadge>
            <strong>{{ dim.dimension }}</strong> → {{ dim.auditId }}
            <span v-if="dim.gapReason" class="encryption-tools__meta"> — {{ dim.gapReason }}</span>
          </li>
        </ul>
        <p v-if="auditResult" class="encryption-tools__boundary">{{ auditResult.boundary }}</p>
      </section>
    </UiCardContent>
  </UiCard>
</template>

<style scoped>
.encryption-tools__lede { opacity: var(--ich-op-card-soft); max-width: calc(1rem * (54 - 2)); }
.encryption-tools__moduli { display: flex; flex-wrap: wrap; gap: var(--ich-sp3); margin: var(--ich-sp4) 0; align-items: center; }
.encryption-tools__run { margin-top: var(--ich-sp3); }
.encryption-tools__list { list-style: none; padding: 0; margin: var(--ich-sp4) 0 0; }
.encryption-tools__list li { margin-bottom: var(--ich-sp3); display: flex; gap: var(--ich-sp3); align-items: flex-start; }
.encryption-tools__meta { font-size: var(--ich-text-xs); opacity: var(--ich-op-card-meta); }
.encryption-tools__boundary { font-size: var(--ich-text-sm); opacity: var(--ich-op-card-meta); margin-top: var(--ich-sp4); }
.encryption-tools__error { color: var(--vp-c-danger-1, crimson); font-size: var(--ich-text-sm); }
.encryption-tools__table { width: 100%; border-collapse: collapse; font-size: var(--ich-text-xs); margin: var(--ich-sp4) 0; }
.encryption-tools__table th, .encryption-tools__table td { text-align: left; padding: var(--ich-sp2) var(--ich-sp3); border-bottom: 1px solid var(--vp-c-divider); vertical-align: top; }
</style>

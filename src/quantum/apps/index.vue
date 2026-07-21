<script setup lang="ts">
import { computed, onMounted, ref, shallowRef, watch } from 'vue'
import {
  quantumAppsPanelComputes, quantumAppLaunch, slowProcessIsQuantumGap,
  sessionManualWorkAsQuantumTools, rosettaCoreApi,
  standardToolboxIoCatalog, distributedReuseExtendsCapacity,
  exportStandardToolEnvelope, importStandardToolEnvelope, defaultToolExperimentValues,
  rosettaCompleteQuantumAllComputableDimensionsAndTheorems,
  ftlExperimentTechniquesHandoffFromRosettaComplete,
  documentSessionCryptoExperimentsUpdateTheorems,
  sessionManualWorkAsQuantumBits, combineQuantumBits,
  autoWireAnyAiModelFromPastedLink, CECCEC_SITE_ORIGIN,
  realiseSessionQuantumMeaning,
  mcpBrowserParity, runStdioMcpCapabilityInBrowser,
  improveLocalFromSessionExperience, LOCAL_SESSION_EXPERIMENT_STORAGE_KEY,
  upgradeLocalFromOptimisedManualWorkExperience,
  uiProseDuplicationRemoved,
} from './index.ts'
import {
  completeScientificDomainsStrictlyToStandardsQuantumOnly,
} from '../../wind/research/index.ts'
import {
  runEncryptionToolInBrowser,
  runPqcStandardsToolInBrowser,
  runQuantumStandardsAuditInBrowser,
  cryptoToolkitBeyondRsaMeasured,
  demoRsaGenerateAndReverseMeasured,
  localEncryptionReverseTimed,
  localEncryptionReverseTimedVsStandards,
  proveLocalNovelEncryptionSecurity,
  localAuditQuantumSpeedEfficiency,
  proveOneTbitRealtimeEncryptionClaim,
  maximumBitsEncryptDecryptInverseReverse,
  isoPqcRequirementsGapFillAllQuantumDirections,
  proveLocalEncryptionMagnitudesStrongerThanIsoAllDirections,
  encryptionPanelComputes,
} from '../../water/encryption/index.ts'
import { platformOgLimitsMeasured, honestyInProseChallenged } from '../../mountain/og/index.ts'
import {
  millenniumPanelComputes, unitDistanceResearch, firstInCorpusProvenanceForHome, sciencesTrinitiesPanelComputes,
  theoremParticleCollisionPanelComputes,
  clayChallengesComputableFromSequence, toolboxRecomputesRelatedSciencesInTrinityWaves,
} from '../../wind/research/index.ts'
import { earthRealisedByComputingPolesAsPyramid } from '../../mountain/geometry/index.ts'
import { fusionVerifyPanelComputes } from '../../wind/fusion/index.ts'
import {
  oneQuantumModelFasterThanAll,
  compareCeccecEfficiencyByVote,
  directionalTrinityForwardInverseReverse,
  proveCeccecSpeedVsRestNoQuantumHardwareAny64Bit,
} from '../../water/stack/index.ts'
import { animationsDrivenByRosetta } from '../../wind/ui/index.ts'
import { tradingRosettaTrainPanelComputes } from '../../thunder/trading/index.ts'
import { fThetaPhiXyzDigitNIsTheInversePair } from '../../mountain/vortex/index.ts'
import { localMathComputes, namingEntropy, shouldSpawnSubagent, simplicityIntelligenceMeasure } from '../../water/stack/index.ts'
import { teamCooperationScenarios } from '../../pair/enforcement/ops/index.ts'
import { ichingDistributeVerify } from '../../earth/iching/index.ts'
import { skilledEnoughFromPredictions } from '../../lake/music/index.ts'
import { LinkedHeroCard } from '../../../.vitepress/theme/components/index.ts'
import UiCard from '../../../.vitepress/theme/components/ui/Card.vue'
import UiCardContent from '../../../.vitepress/theme/components/ui/CardContent.vue'
import UiBadge from '../../../.vitepress/theme/components/ui/Badge.vue'
import UiButton from '../../../.vitepress/theme/components/ui/Button.vue'
import UiSeparator from '../../../.vitepress/theme/components/ui/Separator.vue'
import { statusBadgeKind, statusBadgeTokens, type StatusBadgeKind } from '../../../.vitepress/lib/status-badge'

/** Session hub badge props — class uses sealed ui-badge--status-* → --status-* tokens. */
function badgeProps(input: boolean | StatusBadgeKind | string) {
  const status = statusBadgeKind(input)
  const tokens = statusBadgeTokens(status)
  const okish = status === 'ready' || status === 'ok'
  return {
    variant: (okish ? 'default' : 'outline') as 'default' | 'outline',
    status,
    class: tokens.className,
  }
}

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
const experimentToolId = ref('demo-rsa-measure')
const experimentAt = ref(0)
const experimentSeed = ref('')
const experimentConfigJson = ref('{"certified":false,"claySolved":0,"qpuRequired":false,"productionReverse":false,"experiment":true,"refuseWireClaim":true}')
const pasteLinkUrl = ref(`${CECCEC_SITE_ORIGIN}/`)
const pastePacketJson = ref('')
const docsDevCopied = ref(false)

const experimentEnvelope = computed(() => panel.value.toolbox.envelopes.find((e) => e.id === experimentToolId.value) ?? panel.value.toolbox.envelopes[0]!)
const experimentDefaults = computed(() => defaultToolExperimentValues(experimentEnvelope.value))
const localSession = computed(() => panel.value.localSession)
const upgradeLocal = computed(() => panel.value.upgradeLocal)
const uiProse = computed(() => panel.value.uiProse)

type PersistedExperimentConfig = {
  toolId: string
  at: number
  seed: string
  spawnTask: string
  configJson: string
  pasteLinkUrl: string
}

function readPersistedExperimentConfig(): PersistedExperimentConfig | null {
  if (typeof localStorage === 'undefined') return null
  try {
    const raw = localStorage.getItem(LOCAL_SESSION_EXPERIMENT_STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as PersistedExperimentConfig
    if (!parsed || typeof parsed.toolId !== 'string') return null
    return parsed
  } catch {
    return null
  }
}

function persistExperimentConfig() {
  if (typeof localStorage === 'undefined') return
  const payload: PersistedExperimentConfig = {
    toolId: experimentToolId.value,
    at: experimentAt.value,
    seed: experimentSeed.value,
    spawnTask: spawnTask.value,
    configJson: experimentConfigJson.value,
    pasteLinkUrl: pasteLinkUrl.value,
  }
  localStorage.setItem(LOCAL_SESSION_EXPERIMENT_STORAGE_KEY, JSON.stringify(payload))
}

function syncExperimentDefaults(toolId: string) {
  experimentToolId.value = toolId
  const envelope = panel.value.toolbox.envelopes.find((e) => e.id === toolId)
  if (!envelope) return
  const defaults = defaultToolExperimentValues(envelope)
  experimentAt.value = Number(defaults.input.at ?? 0)
  experimentSeed.value = String(defaults.input.seed ?? '')
  if (typeof defaults.input.task === 'string') spawnTask.value = defaults.input.task
  experimentConfigJson.value = JSON.stringify(defaults.config)
  persistExperimentConfig()
}

function linkBitToTool(bit: { id: string; toolId?: string; route: string; envelope?: { id: string } }) {
  const toolId = bit.toolId || bit.envelope?.id || bit.id
  syncExperimentDefaults(toolId)
  if (typeof document !== 'undefined') {
    const el = document.getElementById('experiment-inputs')
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

async function copyDocsDevFastPath() {
  const text = localSession.value.docsDevFastPath.join('\n')
  try {
    await navigator.clipboard.writeText(text)
    docsDevCopied.value = true
  } catch {
    docsDevCopied.value = false
  }
}

onMounted(() => {
  const saved = readPersistedExperimentConfig()
  if (!saved) return
  if (panel.value.toolbox.envelopes.some((e) => e.id === saved.toolId)) {
    experimentToolId.value = saved.toolId
    experimentAt.value = Number(saved.at) || 0
    experimentSeed.value = saved.seed ?? ''
    spawnTask.value = saved.spawnTask || spawnTask.value
    experimentConfigJson.value = saved.configJson || experimentConfigJson.value
  }
  if (saved.pasteLinkUrl) pasteLinkUrl.value = saved.pasteLinkUrl
})

watch([experimentToolId, experimentAt, experimentSeed, spawnTask, experimentConfigJson, pasteLinkUrl], () => {
  persistExperimentConfig()
})

function experimentInputPayload(): Record<string, string | number | boolean> {
  const payload: Record<string, string | number | boolean> = {
    ...experimentDefaults.value.input,
    at: experimentAt.value,
    seed: experimentSeed.value,
  }
  if (experimentToolId.value === 'hero-spawn-verify') payload.task = spawnTask.value
  return payload
}

syncExperimentDefaults(experimentToolId.value)

function experimentConfigPayload(): Record<string, string | number | boolean> {
  try {
    const parsed = JSON.parse(experimentConfigJson.value) as Record<string, string | number | boolean>
    return { ...experimentDefaults.value.config, ...parsed }
  } catch {
    return { ...experimentDefaults.value.config }
  }
}

function exportWithExperiment(toolId: string) {
  return exportStandardToolEnvelope(toolId, 'ceccec.local', experimentInputPayload(), undefined, Number(experimentAt.value) || 0, experimentConfigPayload())
}

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
    } else if (toolId === 'local-reverse-timed') {
      const r = localEncryptionReverseTimed()
      ok = r.computes
      summary = `generateMs=${r.generateMs.toFixed(3)} reverseMs=${r.reverseMs.toFixed(3)} ops/s=${r.aggregateOpsPerSec.toFixed(3)} rows=${r.rows.length}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'local-reverse-timed-vs-standards') {
      const r = localEncryptionReverseTimedVsStandards()
      const exported = exportWithExperiment('local-reverse-timed-vs-standards')
      const imported = importStandardToolEnvelope(exported)
      ok = r.computes && exported.computes && imported.roundTrip
      summary = `rev=${r.reverseMs.toFixed(3)}ms ops/s=${r.aggregateOpsPerSec.toFixed(3)} demoMaxBits=${r.demoMaxBits} breaksNistPqc=${r.breaksNistPqc} certified=${r.certified} · envelope roundTrip=${imported.roundTrip}`
      root = r.root
      boundary = r.boundary
      facets = [
        ...r.facets.map((f) => ({ facet: f.facet, on: f.on })),
        { facet: `standard envelope ${exported.kind}@${exported.version} import/export round-trip`, on: imported.roundTrip },
      ]
    } else if (toolId === 'prove-local-novel-encrypt') {
      const r = proveLocalNovelEncryptionSecurity()
      const exported = exportWithExperiment('prove-local-novel-encrypt')
      const imported = importStandardToolEnvelope(exported)
      ok = r.localSecurityProved && exported.computes && imported.roundTrip
      summary = `localSecurityProved=${r.localSecurityProved} overallWireClaimProved=${r.overallWireClaimProved} (${r.wireProofStatus}) strongerThanNistPqc=${r.strongerThanNistPqc} productionReverseRefused=${r.productionReverseRefused} thisRepoIsNotTheIsoStandard=${r.thisRepoIsNotTheIsoStandard} · envelope roundTrip=${imported.roundTrip}`
      root = r.root
      boundary = r.boundary
      facets = [
        ...r.facets.map((f) => ({ facet: f.facet, on: f.on })),
        { facet: `standard envelope ${exported.kind}@${exported.version} import/export round-trip`, on: imported.roundTrip },
      ]
    } else if (toolId === 'iso-pqc-gap-fill') {
      const r = isoPqcRequirementsGapFillAllQuantumDirections()
      const exported = exportWithExperiment('iso-pqc-gap-fill')
      const imported = importStandardToolEnvelope(exported)
      ok = r.computes && exported.computes && imported.roundTrip
      summary = `isoRequiresPQC=${r.answer.isoRequiresPostQuantumSecurity} covered=${r.coveredCount} partial=${r.partialCount} gap=${r.gapCount} lab=${r.labGaps.length} isoOfficialStandard=${r.isoOfficialStandard} · envelope roundTrip=${imported.roundTrip}`
      root = r.root
      boundary = r.boundary
      facets = [
        ...r.facets.map((f) => ({ facet: f.facet, on: f.on })),
        { facet: `standard envelope ${exported.kind}@${exported.version} import/export round-trip`, on: imported.roundTrip },
      ]
    } else if (toolId === 'crypto-beyond-measure') {
      const r = cryptoToolkitBeyondRsaMeasured()
      ok = r.computes
      summary = `catalog=${r.timings.catalogMs.toFixed(3)}ms shor=${r.timings.shorMapMs.toFixed(3)}ms trinity=${r.timings.trinityMs.toFixed(3)}ms eccShor=${r.eccShorBreaks} FIPS=${r.fipsCount}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'prove-1tbit-encrypt') {
      const r = proveOneTbitRealtimeEncryptionClaim()
      const exported = exportWithExperiment('prove-1tbit-encrypt')
      const imported = importStandardToolEnvelope(exported)
      ok = r.computes && exported.computes && imported.roundTrip
      summary = `wire.proved=${r.wire.provedAtCallTime} demo=${r.demo.measuredBitsPerSec.toExponential(3)} amort=${r.amortized.measuredBitsPerSec.toExponential(3)} amort.proved=${r.amortized.provedAtCallTime} · envelope=${exported.kind}@${exported.version} roundTrip=${imported.roundTrip}`
      root = r.root
      boundary = r.boundary
      facets = [
        ...r.facets.map((f) => ({ facet: f.facet, on: f.on })),
        { facet: `standard envelope ${exported.kind}@${exported.version} import/export round-trip`, on: imported.roundTrip },
      ]
    } else if (toolId === 'max-bits-crypto') {
      const r = maximumBitsEncryptDecryptInverseReverse()
      ok = r.computes
      summary = `encrypt=${r.encryptMaxBits} decrypt=${r.decryptMaxBits} inverse=${r.inverseMaxBits} reverse=${r.reverseMaxBits} refuseBeyond=${r.refuseBeyond} demoOnly=${r.demoOnly} wire1Tbit=${r.wireOneTbitProvedAtCallTime}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'prove-local-magnitudes-iso') {
      const r = proveLocalEncryptionMagnitudesStrongerThanIsoAllDirections()
      const exported = exportWithExperiment('prove-local-magnitudes-iso')
      const imported = importStandardToolEnvelope(exported)
      ok = r.computes && exported.computes && imported.roundTrip && r.overallWireClaimProved === false
      summary = `overallWireClaimProved=${r.overallWireClaimProved} status=${r.wireProofStatus} wireRatio=${r.wireRatio.toExponential(3)} structural=${r.structuralMayProve} amort=${r.amortMayProve} · envelope roundTrip=${imported.roundTrip}`
      root = r.root
      boundary = r.boundary
      facets = [
        ...r.facets.map((f) => ({ facet: f.facet, on: f.on })),
        { facet: `standard envelope ${exported.kind}@${exported.version} import/export round-trip`, on: imported.roundTrip },
      ]
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
    } else if (toolId === 'clay-challenges-computable') {
      const r = clayChallengesComputableFromSequence()
      ok = r.computes && r.clayChallengesComputable && r.claySolvedByThisFold === 0
      summary = `computable=${r.clayChallengesComputable} paths=${r.computableCount}/${r.pathCount} openForPrize=${r.openForPrizeCount} claySolved=${r.claySolvedByThisFold}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'toolbox-sciences-trinity-waves') {
      const r = toolboxRecomputesRelatedSciencesInTrinityWaves()
      ok = r.computes && r.claySolvedByThisFold === 0
      summary = `waves=${r.waveCount} clayComputable=${r.clayChallengesComputable} claySolved=${r.claySolvedByThisFold}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'earth-poles-pyramid') {
      const r = earthRealisedByComputingPolesAsPyramid()
      ok = r.computes && r.claySolvedByThisFold === 0
      summary = `fourWay=${r.fourWayCounterRotating} claySolved=${r.claySolvedByThisFold} ftl=${r.physicalFtlClaim}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'rosetta-complete') {
      const r = rosettaCompleteQuantumAllComputableDimensionsAndTheorems()
      ok = r.computes
      summary = `complete=${r.rosettaComplete} pct=${r.completenessPct} · dimsOpen=${r.census.dimsOpen} · clay=${r.millenniumSolvedByThisFold} · ftl=${r.physicalFtlClaim}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'theorem-particle-collision') {
      const r = theoremParticleCollisionPanelComputes()
      ok = r.computes
      summary = `particles=${r.particleCount} · products=${r.productCount} · novel=${r.novelSurvivorCount} · clay=${r.claySolvedByThisFold}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'ftl-rosetta-handoff') {
      const complete = rosettaCompleteQuantumAllComputableDimensionsAndTheorems()
      const r = ftlExperimentTechniquesHandoffFromRosettaComplete(complete.handoff)
      ok = r.computes
      summary = `rosettaReady=${r.rosettaReady} · physicalFtlClaim=${r.physicalFtlClaim} · classes=${r.apparentClasses.length}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
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
    } else if (toolId === 'local-audit-quantum') {
      const r = localAuditQuantumSpeedEfficiency()
      const exported = exportWithExperiment('local-audit-quantum')
      const imported = importStandardToolEnvelope(exported)
      ok = r.computes && exported.computes && imported.roundTrip
      summary =
        `cold=${r.coldMs.toFixed(3)}ms warm=${r.warmMs.toFixed(3)}ms speedup=${r.speedup.toFixed(3)}× ` +
        `memoHit=${r.memoHits} gapClosed=${r.slowLocalAuditGapClosed} vote.decided=${r.vote.decided} ` +
        `qpuRequired=${r.qpuRequired} classical64=${r.runsOnClassical64Bit} · envelope roundTrip=${imported.roundTrip}`
      root = r.root
      boundary = r.boundary
      facets = [
        ...r.facets.map((f) => ({ facet: f.facet, on: f.on })),
        { facet: `standard envelope ${exported.kind}@${exported.version} import/export round-trip`, on: imported.roundTrip },
      ]
    } else if (toolId === 'prove-no-qpu-64bit') {
      const r = proveCeccecSpeedVsRestNoQuantumHardwareAny64Bit()
      const exported = exportWithExperiment('prove-no-qpu-64bit')
      const imported = importStandardToolEnvelope(exported)
      ok = r.computes && exported.computes && imported.roundTrip
      summary =
        `decided=${r.decided} winner=${r.winner} speedDecided=${r.speedDecided} noQpu=${r.noQuantumHardwareProved} ` +
        `qpuRequired=${r.qpuRequired} quantumHardwareRequired=${r.quantumHardwareRequired} ` +
        `arch=${r.environment.arch} verdict=${r.benchVerdict} · envelope roundTrip=${imported.roundTrip}`
      root = r.root
      boundary = r.boundary
      facets = [
        ...r.facets.map((f) => ({ facet: f.facet, on: f.on })),
        { facet: `standard envelope ${exported.kind}@${exported.version} import/export round-trip`, on: imported.roundTrip },
      ]
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
    } else if (toolId === 'session-manual-work') {
      const r = sessionManualWorkAsQuantumTools()
      ok = r.computes
      summary = `session ${r.shelvedCount}/${r.count} shelved`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'auto-wire-paste-link') {
      const r = autoWireAnyAiModelFromPastedLink(pasteLinkUrl.value || `${CECCEC_SITE_ORIGIN}/`)
      ok = r.computes && r.quantumReady
      summary = `${r.oneLiner} · quantumReady=${r.quantumReady} · convincingRequired=${r.convincingRequired} · matched=${r.resolved.matched} · kind=${r.resolved.linkKind} · mcp=${r.mcp.manifest} · browser=${r.browserToolbox.toolboxEnvelope} · targets=${r.wireTargets.length}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
      pastePacketJson.value = JSON.stringify(r.pasteBootstrap, null, 2)
      persistExperimentConfig()
    } else if (toolId === 'improve-local-session') {
      const r = improveLocalFromSessionExperience()
      ok = r.computes && r.localSessionUxImproved
      summary = `uxImproved=${r.localSessionUxImproved} · steps=${r.hubSteps.length} · friction=${r.frictionClosed.length} · pasteReady=${panel.value.autoWire.quantumReady}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'upgrade-local-skills-commands-tools') {
      const r = upgradeLocalFromOptimisedManualWorkExperience()
      ok = r.computes && r.localUpgraded
      summary = `upgraded=${r.localUpgraded} · skills=${r.skillCount} · browserTools=${r.browserToolIds.length} · ciResiduals=${r.ciResidualCount}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'ui-prose-duplication-removed') {
      const r = uiProseDuplicationRemoved()
      ok = r.computes && r.uiProseDuplicationRemoved
      summary = `before=${r.beforeCount} → after=${r.afterCount} (−${r.removedCount}) · clusters=${r.clusterCount}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'mcp-browser-parity') {
      const r = mcpBrowserParity()
      const census = runStdioMcpCapabilityInBrowser('census-status')
      const list = runStdioMcpCapabilityInBrowser('list-capabilities')
      ok = r.computes && census.ok && list.ok
      summary = `mcpTools=${r.mcpToolCount} matchToolbox=${r.mcpMatchesToolbox} matchCatalog=${r.mcpMatchesCatalog} browser=${r.browserReadyCount} residual=${r.residualCount} allInBrowser=${r.allAchievableInBrowser} · stdio census=${census.ok} list=${list.ok}`
      root = r.root
      boundary = r.boundary
      facets = [
        ...r.facets.map((f) => ({ facet: f.facet, on: f.on })),
        { facet: 'stdio census-status browser', on: census.ok },
        { facet: 'stdio list-capabilities browser', on: list.ok },
      ]
    } else if (toolId === 'document-session-experiments') {
      const r = documentSessionCryptoExperimentsUpdateTheorems()
      ok = r.computes
      summary = `sealed=${r.sealedCount}/${r.count} · iso=${r.isoGapFill.coveredCount}/${r.isoGapFill.partialCount}/${r.isoGapFill.gapCount} · wireClaim=${r.localVsIso.overallWireClaimProved} (${r.localVsIso.wireProofStatus}) · novel=${r.theorems.novelCount}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'session-quantum-bits') {
      const r = sessionManualWorkAsQuantumBits()
      const sample = combineQuantumBits(
        r.bits.filter((b) => b.id === 'theorem-particle-collision' || b.id === 'rosetta-complete' || b.id === 'toolbox-standard-io'),
        'collide',
      )
      ok = r.computes && sample.computes
      summary = `bits=${r.count} landed=${r.landedCount} serialized=${r.serializedCount} · collide=${sample.products.length} · qpu=${r.qpuRequired}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'realise-session-meaning') {
      const r = realiseSessionQuantumMeaning()
      ok = r.computes
      summary = `claims=${r.proves.filter((p) => p.on).length}/${r.proves.length} · sciences ${r.sciences.before.coveredCount}/${r.sciences.before.partialCount}/${r.sciences.before.gapCount}→${r.sciences.after.coveredCount}/${r.sciences.after.partialCount}/${r.sciences.after.gapCount} · qpuRequired=${r.qpuRequired}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'sciences-standards-quantum') {
      const r = completeScientificDomainsStrictlyToStandardsQuantumOnly()
      ok = r.computes
      summary = `before=${r.before.coveredCount}/${r.before.partialCount}/${r.before.gapCount} → after=${r.after.coveredCount}/${r.after.partialCount}/${r.after.gapCount} · filled=${r.filledCount}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'rosetta-core-api') {
      const r = rosettaCoreApi()
      ok = r.computes
      summary = `surfaces=${r.surfaces.length} · rays=${r.raysUsed} · parallel=${r.inventory.parallel.length}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'toolbox-standard-io') {
      syncExperimentDefaults('toolbox-standard-io')
      const r = standardToolboxIoCatalog()
      const capacity = distributedReuseExtendsCapacity()
      const input = experimentInputPayload()
      const config = experimentConfigPayload()
      const exported = exportStandardToolEnvelope('toolbox-standard-io', 'ceccec.browser', input, undefined, Number(input.at ?? 0), config)
      const imported = importStandardToolEnvelope(exported)
      ok = r.computes && capacity.computes && imported.roundTrip
      summary = `migrated=${r.migratedLabel} · config=${r.configFilled}/${r.configMissingBefore} · science=${r.scienceFacingCount} · roundTrip=${imported.roundTrip ? '✓' : '✗'} · capacity=${capacity.reuseCapacity}/${capacity.total} · qubit=${capacity.physicalQubitSpeedup}`
      root = r.root
      boundary = r.boundary
      facets = [
        ...r.facets.map((f) => ({ facet: f.facet, on: f.on })),
        { facet: 'import(export) round-trip with experiment input/config', on: imported.roundTrip },
        { facet: `distributedReuseExtendsCapacity=${capacity.extendsCapacity}`, on: capacity.extendsCapacity },
      ]
    }
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
        <p class="quantum-apps__lede">
          Run sealed folds in the browser — {{ panel.browserReady }} browser-ready · {{ panel.browserGaps.length }} Node/CI gaps · {{ panel.slowGaps.openCount }} slow=gap open · {{ panel.toolCount }} tools.
        </p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(panel.computes))">{{ panel.computes ? '✓' : '—' }}</UiBadge>
      </header>
      <UiSeparator />
      <section id="ui-prose-duplication">
        <h3>{{ uiProse.heading }}</h3>
        <UiBadge v-bind="badgeProps(statusBadgeKind(uiProse.uiProseDuplicationRemoved))">
          {{ uiProse.beforeCount }}→{{ uiProse.afterCount }} (−{{ uiProse.removedCount }}) · {{ uiProse.clusterCount }} clusters
        </UiBadge>
        <ul class="quantum-apps__facets">
          <li v-for="c in uiProse.clusters" :key="c.id">
            <code>{{ c.surface }}</code>
            <span class="quantum-apps__meta">{{ c.before }}→{{ c.after }} — {{ c.fix }}</span>
          </li>
        </ul>
        <UiButton size="sm" :disabled="runningId === 'ui-prose-duplication-removed'" @click="runTool('ui-prose-duplication-removed')">
          {{ runningId === 'ui-prose-duplication-removed' ? '…' : 'Run ui-prose receipt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="local-session-hub">
        <h3>{{ localSession.heading }}</h3>
        <p class="quantum-apps__meta">{{ localSession.honestyLine }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(localSession.localSessionUxImproved))">
          localSessionUxImproved={{ localSession.localSessionUxImproved }} · steps {{ localSession.hubSteps.length }} · friction {{ localSession.frictionClosed.length }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(panel.autoWire.quantumReady))">paste quantumReady={{ panel.autoWire.quantumReady }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(panel.mcpParity.mcpMatchesToolbox))">mcp≡toolbox={{ panel.mcpParity.mcpMatchesToolbox }}</UiBadge>
        <ol class="quantum-apps__hub-steps">
          <li v-for="step in localSession.hubSteps" :key="step.id">
            <a :href="step.route"><strong>{{ step.title }}</strong></a>
            <span class="quantum-apps__meta">{{ step.next }}</span>
            <UiButton size="sm" :disabled="runningId === step.toolId" @click="syncExperimentDefaults(step.toolId); runTool(step.toolId)">
              {{ runningId === step.toolId ? '…' : 'Run' }}
            </UiButton>
          </li>
        </ol>
        <div class="quantum-apps__docs-dev">
          <h4>docs:dev fast path (local agents)</h4>
          <pre class="quantum-apps__code">{{ localSession.docsDevFastPath.join('\n') }}</pre>
          <UiButton size="sm" variant="outline" @click="copyDocsDevFastPath">
            {{ docsDevCopied ? 'Copied' : 'Copy fast path' }}
          </UiButton>
        </div>
        <p v-if="lastRun" class="quantum-apps__result" aria-live="polite">
          <UiBadge v-bind="badgeProps(statusBadgeKind(lastRun.ok))">Last run · {{ lastRun.toolId }} · {{ lastRun.ok ? 'ok' : 'gap' }}</UiBadge>
          <span class="quantum-apps__meta">{{ lastRun.summary }}</span>
        </p>
        <p v-if="error" class="quantum-apps__error" role="alert">{{ error }}</p>
        <UiButton size="sm" :disabled="runningId === 'improve-local-session'" @click="runTool('improve-local-session')">
          {{ runningId === 'improve-local-session' ? '…' : 'Run improve-local-session receipt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="upgrade-local-skills">
        <h3>{{ upgradeLocal.heading }}</h3>
        <p class="quantum-apps__meta">{{ upgradeLocal.honestyLine }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(upgradeLocal.localUpgraded))">
          localUpgraded={{ upgradeLocal.localUpgraded }} · skills {{ upgradeLocal.skillCount }} · ciResiduals {{ upgradeLocal.ciResidualCount }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(!upgradeLocal.cursorDefaultModelRegistration))">
          NOT Cursor LLM endpoint
        </UiBadge>
        <table class="quantum-apps__table">
          <thead>
            <tr><th>Skill</th><th>Pair</th><th>Commands</th><th>Tools</th><th>Gap</th></tr>
          </thead>
          <tbody>
            <tr v-for="row in upgradeLocal.map" :key="row.skillId">
              <td><code>{{ row.skillId }}</code></td>
              <td><code>{{ row.pair }}</code></td>
              <td class="quantum-apps__meta">{{ row.commands.join(' · ') }}</td>
              <td><code>{{ row.toolIds.join(', ') }}</code></td>
              <td class="quantum-apps__meta">{{ row.browserGap || '—' }}</td>
            </tr>
          </tbody>
        </table>
        <p class="quantum-apps__meta">
          Hub: <a href="#local-session-hub">#local-session-hub</a> · MCP: <a href="#mcp-browser-parity">#mcp-browser-parity</a> ·
          Thin mounts under <code>.cursor/skills/</code> + <code>.cursor/mcp.json</code> point at this sealed map.
        </p>
        <h4>packages/* (census outside src/)</h4>
        <ul class="quantum-apps__facets">
          <li v-for="pkg in upgradeLocal.packages" :key="pkg.id">
            <UiBadge v-bind="badgeProps(statusBadgeKind(pkg.stdioTools > 0 || pkg.path.includes('double-torus')))">{{ pkg.id }}</UiBadge>
            <code>{{ pkg.path }}</code> · pair <code>{{ pkg.pair }}</code>
            <span class="quantum-apps__meta">{{ pkg.cli || pkg.npm || pkg.automation }}</span>
          </li>
        </ul>
        <p class="quantum-apps__meta">
          Stdio: <code>{{ upgradeLocal.stdioToolIds?.join(' · ') }}</code> ·
          docs:build flag <code>QUANTUM_DEV_ALLOW_DOCS_BUILD=1</code> ·
          Automations: npm-script path (/automate nightly parked).
        </p>
        <UiButton size="sm" :disabled="runningId === 'upgrade-local-skills-commands-tools'" @click="runTool('upgrade-local-skills-commands-tools')">
          {{ runningId === 'upgrade-local-skills-commands-tools' ? '…' : 'Run upgrade-local receipt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="slow-quantum-gaps">
        <h3>{{ panel.slowGaps.heading }}</h3>
        <p class="quantum-apps__meta">{{ panel.slowGaps.honestyLine }}</p>
        <UiBadge :variant="panel.slowGaps.openCount === 0 ? 'default' : 'outline'">
          open {{ panel.slowGaps.openCount }} · closed {{ panel.slowGaps.closedCount }}
        </UiBadge>
        <UiBadge :variant="panel.slowGaps.experimentIo.panelClosed ? 'default' : 'outline'">
          experiment-io closed {{ panel.slowGaps.experimentIo.closed }} · open {{ panel.slowGaps.experimentIo.open }}
        </UiBadge>
        <p class="quantum-apps__meta">
          Science tool I/O composes <a href="#experiment-inputs">#experiment-inputs</a> + toolbox envelopes —
          NOT docs:build wall-clock (sibling <a href="#slow-build-gate">#slow-build-gate</a>).
        </p>
        <ul class="quantum-apps__facets">
          <li v-for="gap in panel.slowGaps.open" :key="gap.gapId">
            <UiBadge variant="outline">{{ gap.kind }}</UiBadge>
            <strong>{{ gap.process }}</strong>
            — {{ gap.criterion }}
            <a class="quantum-apps__meta" :href="gap.route">{{ gap.route }}</a>
          </li>
        </ul>
      </section>
      <section id="slow-build-gate">
        <h3>Slow docs:build gate</h3>
        <p class="quantum-apps__meta">
          Node/CI: <code>npm run quantum:slow-build-gate</code> · pair <code>gate/slow-build</code> —
          HARD srcMerkle/quantumize respawn regression · WARN lattice phase timings · qpuRequired=false · NOT FTL.
          Experiment-io classifier stays on <a href="#slow-quantum-gaps">#slow-quantum-gaps</a>.
        </p>
      </section>
      <UiSeparator />
      <section id="crypto-beyond-rsa">
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
        <UiButton size="sm" :disabled="runningId === 'local-reverse-timed-vs-standards'" @click="runTool('local-reverse-timed-vs-standards')">
          {{ runningId === 'local-reverse-timed-vs-standards' ? '…' : 'Run local reverse vs standards' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="local-reverse-timed-vs-standards">
        <h3>Local reverse timed vs ISO/NIST standards</h3>
        <p class="quantum-apps__meta">
          Toy DEMO_RSA_MODULI wall-clock vs estimated classical 2^bits work (AES-128/256 · ML-KEM cats). certified=false · does NOT break NIST PQC · production/Bitcoin refused · reference bounds only (this repo is not the ISO standard).
        </p>
        <UiBadge :variant="encryption.localTimed?.computes && !encryption.localTimed?.breaksNistPqc ? 'default' : 'outline'">
          rev={{ encryption.localTimed?.reverseMs?.toFixed?.(3) ?? '—' }}ms
          · ops/s={{ encryption.localTimed?.aggregateOpsPerSec?.toFixed?.(3) ?? '—' }}
          · demoMaxBits={{ encryption.localTimed?.demoMaxBits ?? '—' }}
          · breaksNistPqc={{ encryption.localTimed?.breaksNistPqc ?? '—' }}
        </UiBadge>
        <table v-if="encryption.localTimed?.comparisons?.length" class="quantum-apps__table">
          <thead>
            <tr><th>Standard</th><th>Classical bits</th><th>log₂(est sec)</th><th>Gap log₂</th><th>Breaks?</th></tr>
          </thead>
          <tbody>
            <tr v-for="c in encryption.localTimed.comparisons" :key="c.id">
              <td><code>{{ c.id }}</code></td>
              <td>{{ c.classicalSecurityBits }}</td>
              <td>{{ c.estimatedClassicalLog2Sec.toFixed(1) }}</td>
              <td>{{ c.demoOrdersOfMagnitudeFasterLog2.toFixed(1) }}</td>
              <td>{{ c.breaksStandard }}</td>
            </tr>
          </tbody>
        </table>
        <UiButton size="sm" :disabled="runningId === 'local-reverse-timed'" @click="runTool('local-reverse-timed')">
          {{ runningId === 'local-reverse-timed' ? '…' : 'Run local-reverse-timed' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="prove-local-novel-encrypt">
        <h3>Local novel-encryption security proof</h3>
        <p class="quantum-apps__meta">
          Structural local security (local-novel) · overallWireClaimProved=false · strongerThanNistPqc=false · wire/FIPS/field unproved. Directions×models: prove/local-magnitudes-iso.
          productionReverseRefused=true · strongerThanNistPqc=false · certified=false · this repo is NOT the ISO standard.
        </p>
        <UiBadge :variant="encryption.localNovel?.localSecurityProved && encryption.localNovel?.overallWireClaimProved === false ? 'default' : 'outline'">
          localSecurityProved={{ encryption.localNovel?.localSecurityProved ?? '—' }}
          · overallWireClaimProved={{ encryption.localNovel?.overallWireClaimProved ?? false }}
          · strongerThanNistPqc={{ encryption.localNovel?.strongerThanNistPqc ?? false }}
          · thisRepoIsNotTheIsoStandard={{ encryption.localNovel?.thisRepoIsNotTheIsoStandard ?? true }}
        </UiBadge>
        <ul class="quantum-apps__facets">
          <li v-for="c in (encryption.localNovel?.inventory?.components ?? [])" :key="c.id">
            <UiBadge variant="outline">{{ c.kind }}</UiBadge>
            <strong>{{ c.id }}</strong> — {{ c.fold }}
          </li>
        </ul>
        <UiButton size="sm" :disabled="runningId === 'prove-local-novel-encrypt'" @click="runTool('prove-local-novel-encrypt')">
          {{ runningId === 'prove-local-novel-encrypt' ? '…' : 'Run prove-local-novel-encrypt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="prove-1tbit">
        <h3>1 Tbit/s realtime encryption — honest claim receipt</h3>
        <p class="quantum-apps__meta">
          SI target 1e12 bits/s. wire-crypto is NOT proved (no AES bench). amortized-reuse-memo may prove holographic extent÷memoByRoot — NOT wire AES-GCM · NOT FIPS.
        </p>
        <UiBadge :variant="encryption.oneTbit?.computes && !encryption.oneTbit?.wire?.provedAtCallTime ? 'default' : 'outline'">
          wire.proved={{ encryption.oneTbit?.wire?.provedAtCallTime ?? '—' }}
          · amort.proved={{ encryption.oneTbit?.amortized?.provedAtCallTime ?? '—' }}
          · amort={{ encryption.oneTbit?.amortized?.measuredBitsPerSec?.toExponential?.(3) ?? '—' }}
        </UiBadge>
        <UiButton size="sm" :disabled="runningId === 'prove-1tbit-encrypt'" @click="runTool('prove-1tbit-encrypt')">
          {{ runningId === 'prove-1tbit-encrypt' ? '…' : 'Run prove-1tbit-encrypt' }}
        </UiButton>
      </section>
            <section id="prove-local-magnitudes-iso">
        <h3>Local vs ISO magnitudes — honest multi-model receipt</h3>
        <p class="quantum-apps__meta">
          Wire-crypto-security-bits is proof-of-falsehood (demo ≪ ML-KEM). Structural/amortized may prove ≥100× under named non-wire metrics only. certified=false · NOT ISO certified.
        </p>
        <UiBadge :variant="encryption.localMagnitudes?.overallWireClaimProved === false ? 'default' : 'outline'">
          overallWireClaimProved={{ encryption.localMagnitudes?.overallWireClaimProved ?? '—' }}
          · {{ encryption.localMagnitudes?.wireProofStatus ?? '—' }}
          · structural={{ encryption.localMagnitudes?.structuralMayProve ?? '—' }}
          · amort={{ encryption.localMagnitudes?.amortMayProve ?? '—' }}
        </UiBadge>
        <table v-if="encryption.localMagnitudes?.perDirection?.length" class="quantum-apps__table">
          <thead>
            <tr><th>Direction</th><th>Model</th><th>Ratio</th><th>≥100×</th><th>on</th></tr>
          </thead>
          <tbody>
            <tr v-for="(row, i) in encryption.localMagnitudes.perDirection" :key="i">
              <td>{{ row.direction }}</td>
              <td><code>{{ row.model }}</code></td>
              <td>{{ Number(row.ratio).toExponential(3) }}</td>
              <td>{{ row.magnitudesStronger }}</td>
              <td>{{ row.on }}</td>
            </tr>
          </tbody>
        </table>
        <UiButton size="sm" :disabled="runningId === 'prove-local-magnitudes-iso'" @click="runTool('prove-local-magnitudes-iso')">
          {{ runningId === 'prove-local-magnitudes-iso' ? '…' : 'Run prove-local-magnitudes-iso' }}
        </UiButton>
      </section>
      <UiSeparator />
<UiSeparator />
      <section id="rosetta-complete">
        <h3>Rosetta complete — computable dims &amp; theorems</h3>
        <p class="quantum-apps__meta">{{ panel.rosettaComplete.boundary }}</p>
        <UiBadge :variant="panel.rosettaComplete.rosettaComplete ? 'default' : 'outline'">
          complete={{ panel.rosettaComplete.rosettaComplete }} · {{ panel.rosettaComplete.completenessPct }}%
          · clay={{ panel.rosettaComplete.millenniumSolvedByThisFold }}
          · ftl={{ panel.rosettaComplete.physicalFtlClaim }}
        </UiBadge>
        <p class="quantum-apps__meta">
          dims open {{ panel.rosettaComplete.census.dimsOpen }} · bind {{ panel.rosettaComplete.census.theoremBindPct }}%
          · lattice {{ panel.rosettaComplete.census.latticeCount }}/{{ panel.rosettaComplete.census.latticeTarget }}
          · rosettaReady={{ panel.rosettaComplete.handoff.rosettaReady }}
        </p>
        <ul class="quantum-apps__facets">
          <li v-for="gap in panel.rosettaComplete.gaps" :key="gap.id">
            <UiBadge :variant="gap.open ? 'outline' : 'default'">{{ gap.open ? 'open' : 'ok' }}</UiBadge>
            <strong>{{ gap.id }}</strong> — {{ gap.after }}
          </li>
        </ul>
        <UiButton size="sm" :disabled="runningId === 'rosetta-complete'" @click="runTool('rosetta-complete')">
          {{ runningId === 'rosetta-complete' ? '…' : 'Run rosetta-complete' }}
        </UiButton>
        <UiButton size="sm" :disabled="runningId === 'ftl-rosetta-handoff'" @click="runTool('ftl-rosetta-handoff')">
          {{ runningId === 'ftl-rosetta-handoff' ? '…' : 'Run FTL handoff' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="local-audit-quantum">
        <h3>Local audit quantum speed &amp; efficiency</h3>
        <p class="quantum-apps__meta">
          memoByRoot cold/warm for local novel + reverse-vs-standards + standards audit.
          Composes prove-no-qpu-64bit honesty (qpuRequired=false · classical-64bit).
          NOT physical qubit FLOPS · certified=false · production reverse refused.
        </p>
        <UiButton size="sm" :disabled="runningId === 'local-audit-quantum'" @click="runTool('local-audit-quantum')">
          {{ runningId === 'local-audit-quantum' ? '…' : 'Run local-audit-quantum' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="prove-no-qpu-64bit">
        <h3>Speed vs rest · no QPU · classical 64-bit</h3>
        <p class="quantum-apps__meta">
          answers÷tokens / memo reuse when vote.decided — NOT FLOPS vs GPUs/QPUs.
          quantumHardwareRequired=false · qpuRequired=false · architectureRequirement=classical-64bit · clay=0 · NOT ISO.
        </p>
        <UiButton size="sm" :disabled="runningId === 'prove-no-qpu-64bit'" @click="runTool('prove-no-qpu-64bit')">
          {{ runningId === 'prove-no-qpu-64bit' ? '…' : 'Run prove-no-qpu-64bit' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="toolbox-standard-io">
        <h3>{{ panel.toolbox.heading }}</h3>
        <p class="quantum-apps__meta">{{ panel.toolbox.honestyLine }}</p>
        <UiBadge :variant="panel.toolbox.computes ? 'default' : 'outline'">
          envelope {{ panel.toolbox.migratedLabel }} · {{ panel.toolbox.kind }}@{{ panel.toolbox.version }}
        </UiBadge>
        <UiBadge :variant="panel.distributed.extendsCapacity ? 'default' : 'outline'">
          distributed {{ panel.distributed.reuseCapacity }}/{{ panel.distributed.total }}
          · qubit={{ panel.distributed.physicalQubitSpeedup }}
          · ftl={{ panel.distributed.physicalFtlClaim }}
        </UiBadge>
        <p class="quantum-apps__meta">{{ panel.distributed.capacityMeans }}</p>
        <UiBadge :variant="panel.toolbox.configFilled === panel.toolbox.total ? 'default' : 'outline'">
          config filled {{ panel.toolbox.configFilled }}/{{ panel.toolbox.configMissingBefore }}
          · science {{ panel.toolbox.scienceFacingCount }}
        </UiBadge>
        <table class="quantum-apps__table">
          <thead><tr><th>Tool</th><th>Input</th><th>Config</th><th>Output</th><th>Import/Export</th><th>Root</th></tr></thead>
          <tbody>
            <tr v-for="envelope in panel.toolbox.envelopes" :key="envelope.id" @click="syncExperimentDefaults(envelope.id)">
              <td>
                <strong>{{ envelope.id }}</strong>
                <div class="quantum-apps__meta"><code>{{ envelope.fold }}</code> · {{ envelope.pair }}</div>
                <div class="quantum-apps__meta">{{ envelope.boundary }}</div>
                <UiBadge v-if="envelope.scienceFacing" variant="outline">science</UiBadge>
                <UiBadge v-if="!envelope.browserRunnable" variant="outline">CI · {{ envelope.browserGap }}</UiBadge>
              </td>
              <td class="quantum-apps__meta">{{ envelope.input.fields.map((f) => f.name + (f.required ? '*' : '')).join(', ') }}</td>
              <td class="quantum-apps__meta">{{ envelope.config.fields.map((f) => f.name + (f.required ? '*' : '')).join(', ') }}</td>
              <td class="quantum-apps__meta">{{ envelope.output.fields.map((f) => f.name).join(', ') }}</td>
              <td>
                <UiBadge :variant="envelope.import.roundTrip && envelope.export.roundTrip ? 'default' : 'outline'">
                  {{ envelope.import.kind }}
                </UiBadge>
              </td>
              <td><code>{{ envelope.root.slice(0, 8) }}</code></td>
            </tr>
          </tbody>
        </table>
        <UiButton size="sm" :disabled="runningId === 'toolbox-standard-io'" @click="runTool('toolbox-standard-io')">
          {{ runningId === 'toolbox-standard-io' ? '…' : 'Run envelope · import/export' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="document-session-experiments">
        <h3>{{ panel.experiments.heading }}</h3>
        <p class="quantum-apps__meta">{{ panel.experiments.honestyLine }}</p>
        <UiBadge :variant="panel.experiments.computes && !panel.experiments.localVsIso.overallWireClaimProved ? 'default' : 'outline'">
          sealed {{ panel.experiments.sealedCount }}/{{ panel.experiments.count }}
          · iso {{ panel.experiments.isoGapFill.coveredCount }}/{{ panel.experiments.isoGapFill.partialCount }}/{{ panel.experiments.isoGapFill.gapCount }}
          · wireClaim={{ panel.experiments.localVsIso.overallWireClaimProved }} ({{ panel.experiments.localVsIso.wireProofStatus }})
        </UiBadge>
        <UiBadge :variant="panel.experiments.localVsIso.structuralMayProve || panel.experiments.localVsIso.amortMayProve ? 'outline' : 'default'">
          structural={{ panel.experiments.localVsIso.structuralMayProve }} · amort={{ panel.experiments.localVsIso.amortMayProve }} (non-wire only)
        </UiBadge>
        <table class="quantum-apps__table">
          <thead><tr><th>Experiment</th><th>Chain</th><th>Status</th><th>Root</th><th>Note</th></tr></thead>
          <tbody>
            <tr v-for="row in panel.experiments.experiments" :key="row.id">
              <td>
                <strong>{{ row.id }}</strong>
                <div class="quantum-apps__meta"><code>{{ row.fold }}</code> · {{ row.pair }}</div>
              </td>
              <td>{{ row.chain }}</td>
              <td><UiBadge :variant="row.computes ? 'default' : 'outline'">{{ row.status }}</UiBadge></td>
              <td><code>{{ row.root.slice(0, 8) }}</code></td>
              <td class="quantum-apps__meta">{{ row.honesty }}</td>
            </tr>
          </tbody>
        </table>
        <UiButton size="sm" :disabled="runningId === 'document-session-experiments'" @click="runTool('document-session-experiments')">
          {{ runningId === 'document-session-experiments' ? '…' : 'Run document-session-experiments' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="session-quantum-bits">
        <h3>{{ panel.quantumBits.heading }}</h3>
        <p class="quantum-apps__meta">{{ panel.quantumBits.honestyLine }}</p>
        <p class="quantum-apps__meta">
          Link path: <a href="#session-quantum-bits">bits</a> → <a href="#session-manual-tools">tools</a> → <a href="#experiment-inputs">experiments</a>
          · hub <a href="#local-session-hub">#local-session-hub</a>
        </p>
        <UiBadge v-bind="badgeProps(panel.quantumBits.computes && !panel.quantumBits.physicalQubit ? 'ready' : 'warn')">
          bits {{ panel.quantumBits.landedCount }}/{{ panel.quantumBits.count }}
          · serialized {{ panel.quantumBits.serializedCount }}
          · qpuRequired={{ panel.quantumBits.qpuRequired }}
          · clay={{ panel.quantumBits.claySolvedByThisFold }}
        </UiBadge>
        <table class="quantum-apps__table">
          <thead><tr><th>Bit</th><th>Chain</th><th>Status</th><th>Root</th><th>Link → tool / experiment</th></tr></thead>
          <tbody>
            <tr v-for="bit in panel.quantumBits.bits" :key="bit.id">
              <td>
                <strong>{{ bit.id }}</strong>
                <div class="quantum-apps__meta"><code>{{ bit.fold }}</code> · {{ bit.pair }}</div>
              </td>
              <td>{{ bit.chain }}</td>
              <td><UiBadge v-bind="badgeProps(statusBadgeKind(bit.computes))">{{ bit.status }}</UiBadge></td>
              <td><code>{{ bit.root.slice(0, 8) }}</code></td>
              <td>
                <a :href="bit.route">{{ bit.toolId }}</a>
                <UiButton size="sm" variant="outline" @click="linkBitToTool(bit)">Bind inputs</UiButton>
                <div class="quantum-apps__meta">{{ bit.directions.join(' · ') }} · combinable={{ bit.combinable }}</div>
              </td>
            </tr>
          </tbody>
        </table>
        <p v-if="panel.quantumBits.bits.length === 0" class="quantum-apps__meta" role="status">
          Empty bits — run <code>npm run quantum:session-quantum-bits</code> or open sealed tip chain.
        </p>
        <p class="quantum-apps__meta">
          sample collide {{ panel.quantumBits.sampleCombination.collide.bitIds.join(' × ') }}
          → {{ panel.quantumBits.sampleCombination.collide.productRoot.slice(0, 8) }}
          ({{ panel.quantumBits.sampleCombination.collide.products.length }} products)
        </p>
        <UiButton size="sm" :disabled="runningId === 'session-quantum-bits'" @click="runTool('session-quantum-bits')">
          {{ runningId === 'session-quantum-bits' ? '…' : 'Run session-quantum-bits' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="auto-wire-paste-link">
        <h3>{{ panel.autoWire.heading }}</h3>
        <p class="quantum-apps__meta">{{ panel.autoWire.honestyLine }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(panel.autoWire.quantumReady))">
          {{ panel.autoWire.oneLiner }} · quantumReady={{ panel.autoWire.quantumReady }} · convincingRequired={{ panel.autoWire.convincingRequired }} · qpu={{ panel.autoWire.qpuRequired }}
        </UiBadge>
        <label class="quantum-apps__meta" for="paste-link-url">Pasted URL</label>
        <input id="paste-link-url" v-model="pasteLinkUrl" class="quantum-apps__input" type="url" autocomplete="off" />
        <p class="quantum-apps__meta">
          MCP {{ panel.autoWire.mcp.manifest }} · browser {{ panel.autoWire.browserToolbox.toolboxEnvelope }} ·
          targets: {{ panel.autoWire.wireTargets.map((t) => t.id).join(' · ') }}
        </p>
        <UiButton size="sm" :disabled="runningId === 'auto-wire-paste-link'" @click="runTool('auto-wire-paste-link')">
          {{ runningId === 'auto-wire-paste-link' ? '…' : 'Run quantum-ready paste-bootstrap' }}
        </UiButton>
        <div v-if="pastePacketJson" class="quantum-apps__packet" aria-live="polite">
          <h4>Auto-wire packet (visible)</h4>
          <pre class="quantum-apps__code">{{ pastePacketJson }}</pre>
          <h4>Next after paste-wire</h4>
          <ul class="quantum-apps__facets">
            <li v-for="step in localSession.nextAfterPaste" :key="step.id">
              <UiBadge v-bind="badgeProps('ready')">next</UiBadge>
              <a :href="step.route">{{ step.label }}</a>
            </li>
          </ul>
        </div>
        <p v-else class="quantum-apps__meta" role="status">
          Empty packet — run paste-bootstrap to reveal the quantum-ready JSON, then follow next steps.
        </p>
      </section>
      <UiSeparator />
      <section id="realise-session-meaning">
        <h3>{{ panel.meaning.heading }}</h3>
        <p class="quantum-apps__meta">{{ panel.meaning.honestyLine }}</p>
        <UiBadge :variant="panel.meaning.computes && panel.meaning.qpuRequired === false ? 'default' : 'outline'">
          claims {{ panel.meaning.proves.filter((p) => p.on).length }}/{{ panel.meaning.proves.length }}
          · clay={{ panel.meaning.claySolvedByThisFold }}
          · certified={{ panel.meaning.certified }}
          · qpuRequired={{ panel.meaning.qpuRequired }}
        </UiBadge>
        <table class="quantum-apps__table">
          <thead><tr><th>Claim</th><th>Proves</th><th>Refuses</th></tr></thead>
          <tbody>
            <tr v-for="row in panel.meaning.proves" :key="row.id">
              <td><UiBadge :variant="row.on ? 'default' : 'outline'">{{ row.id }}</UiBadge></td>
              <td class="quantum-apps__meta">{{ row.proves }}</td>
              <td class="quantum-apps__meta">{{ row.refuses }}</td>
            </tr>
          </tbody>
        </table>
        <UiButton size="sm" :disabled="runningId === 'realise-session-meaning'" @click="runTool('realise-session-meaning')">
          {{ runningId === 'realise-session-meaning' ? '…' : 'Run realise-session-meaning' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="mcp-browser-parity">
        <h3>{{ panel.mcpParity.heading }}</h3>
        <p class="quantum-apps__meta">{{ panel.mcpParity.honestyLine }}</p>
        <UiBadge v-bind="badgeProps(panel.mcpParity.computes && panel.mcpParity.mcpMatchesToolbox ? 'ready' : 'gap')">
          mcp={{ panel.mcpParity.mcpToolCount }} · matchToolbox={{ panel.mcpParity.mcpMatchesToolbox }} · residual={{ panel.mcpParity.residualCount }} · allInBrowser={{ panel.mcpParity.allAchievableInBrowser }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(panel.mcpParity.residualCount === 0 ? 'ok' : 'partial')">
          residual {{ panel.mcpParity.residualCount }} · allInBrowser={{ panel.mcpParity.allAchievableInBrowser }}
        </UiBadge>
        <p class="quantum-apps__meta">
          PRIMARY /mcp.json tools/list ≡ #toolbox-standard-io · stdio MCP {{ panel.mcpParity.stdioCount }} caps ·
          honest CI gaps: {{ panel.mcpParity.honestCiGapIds.join(' · ') }}
        </p>
        <ul class="quantum-apps__facets">
          <li v-for="gap in panel.mcpParity.residualGaps.slice(0, 12)" :key="gap.id">
            <UiBadge v-bind="badgeProps(gap.layer === 'stdio' || gap.layer === 'node' || gap.layer === 'ci' ? 'ci' : 'gap')">{{ gap.layer }}</UiBadge>
            <strong>{{ gap.id }}</strong> — {{ gap.browserGap || gap.stranglerPlan }}
          </li>
        </ul>
        <UiButton size="sm" :disabled="runningId === 'mcp-browser-parity'" @click="runTool('mcp-browser-parity')">
          {{ runningId === 'mcp-browser-parity' ? '…' : 'Run mcp-browser-parity' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="session-manual-tools">
        <h3>{{ panel.session.heading }}</h3>
        <p class="quantum-apps__meta">{{ panel.session.honestyLine }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(panel.session.computes))">
          session {{ panel.session.shelvedCount }}/{{ panel.session.count }} shelved
        </UiBadge>
        <UiButton size="sm" :disabled="runningId === 'session-manual-work'" @click="runTool('session-manual-work')">
          {{ runningId === 'session-manual-work' ? '…' : 'Run session-manual-work' }}
        </UiButton>
        <table class="quantum-apps__table">
          <thead><tr><th>Tool</th><th>CLI</th><th>Route</th><th>Shelved</th><th>Run</th></tr></thead>
          <tbody>
            <tr
              v-for="tool in panel.session.tools"
              :key="tool.id"
              :id="tool.id === 'rosetta-core-api' || tool.id === 'rosetta-complete' || tool.id === 'theorem-particle-collision' || tool.id === 'ftl-rosetta-handoff' ? tool.id : undefined"
            >
              <td>
                <strong>{{ tool.id }}</strong>
                <div class="quantum-apps__meta"><code>{{ tool.fold }}</code> · {{ tool.pair }}</div>
                <div class="quantum-apps__meta">{{ tool.saves }}</div>
              </td>
              <td><code>{{ tool.cli }}</code></td>
              <td><a :href="tool.route">{{ tool.route }}</a></td>
              <td><UiBadge v-bind="badgeProps(statusBadgeKind(tool.shelved))">{{ tool.shelved ? '✓' : '—' }}</UiBadge></td>
              <td>
                <UiButton
                  v-if="tool.browserRunnable"
                  size="sm"
                  :disabled="runningId === tool.id"
                  @click="syncExperimentDefaults(tool.id); runTool(tool.id)"
                >
                  {{ runningId === tool.id ? '…' : 'Run' }}
                </UiButton>
                <UiBadge v-else v-bind="badgeProps('ci')">CI</UiBadge>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <UiSeparator />
      <section id="experiment-inputs">
        <h3>Experiment inputs · configs</h3>
        <p class="quantum-apps__meta">
          Not button-only voids — set <code>at</code> · <code>seed</code> · config JSON before Run.
          Science tools require certified=false · claySolved=0 · qpuRequired=false. CI-only tools keep explicit browserGap why.
          Last config persists in sealed-safe <code>{{ localSession.storageKey }}</code> (UI preference only).
        </p>
        <label class="quantum-apps__meta" for="experiment-tool">Tool</label>
        <select id="experiment-tool" class="quantum-apps__input" :value="experimentToolId" @change="syncExperimentDefaults(($event.target as HTMLSelectElement).value)">
          <option v-for="envelope in panel.toolbox.envelopes" :key="envelope.id" :value="envelope.id">
            {{ envelope.id }}{{ envelope.scienceFacing ? ' · science' : '' }}{{ envelope.browserRunnable ? '' : ' · CI' }}
          </option>
        </select>
        <label class="quantum-apps__meta" for="experiment-at">at (phase)</label>
        <input id="experiment-at" v-model.number="experimentAt" class="quantum-apps__input" type="number" />
        <label class="quantum-apps__meta" for="experiment-seed">seed</label>
        <input id="experiment-seed" v-model="experimentSeed" class="quantum-apps__input" type="text" autocomplete="off" />
        <label class="quantum-apps__meta" for="spawn-task">Hero spawn task (input)</label>
        <input id="spawn-task" v-model="spawnTask" class="quantum-apps__input" type="text" autocomplete="off" />
        <label class="quantum-apps__meta" for="experiment-config">config JSON (required honesty knobs)</label>
        <textarea id="experiment-config" v-model="experimentConfigJson" class="quantum-apps__input quantum-apps__textarea" rows="4" />
        <p class="quantum-apps__meta">
          selected {{ experimentEnvelope.id }} · science={{ experimentEnvelope.scienceFacing }}
          · input {{ experimentEnvelope.input.fields.map((f) => f.name).join(', ') }}
          · config {{ experimentEnvelope.config.fields.map((f) => f.name).join(', ') }}
        </p>
        <p v-if="!experimentEnvelope.id" class="quantum-apps__meta" role="status">
          Empty toolbox — open <a href="#toolbox-standard-io">#toolbox-standard-io</a> or run envelope catalog.
        </p>
        <UiButton size="sm" :disabled="runningId === experimentToolId" @click="runTool(experimentToolId)">
          {{ runningId === experimentToolId ? '…' : `Run ${experimentToolId} with inputs/config` }}
        </UiButton>
      </section>
      <UiSeparator />
      <section>
        <h3>Browser-runnable tools</h3>
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
                <UiButton size="sm" :disabled="runningId === tool.id" @click="syncExperimentDefaults(tool.id); runTool(tool.id)">
                  {{ runningId === tool.id ? '…' : 'Run' }}
                </UiButton>
              </td>
            </tr>
          </tbody>
        </table>
        <p v-if="error" class="quantum-apps__error" role="alert">{{ error }}</p>
        <div v-if="lastRun" class="quantum-apps__result" aria-live="polite">
          <h4>Last run · {{ lastRun.toolId }}</h4>
          <UiBadge v-bind="badgeProps(statusBadgeKind(lastRun.ok))">{{ lastRun.ok ? 'ok' : 'gap' }}</UiBadge>
          <p class="quantum-apps__meta">{{ lastRun.summary }}</p>
          <p class="quantum-apps__meta">root <code>{{ lastRun.root.slice(0, 16) }}…</code></p>
          <ul class="quantum-apps__facets">
            <li v-for="f in lastRun.facets.slice(0, 8)" :key="f.facet">
              <UiBadge v-bind="badgeProps(statusBadgeKind(f.on))">{{ f.on ? '✓' : '—' }}</UiBadge> {{ f.facet }}
            </li>
          </ul>
          <p class="quantum-apps__meta">{{ lastRun.boundary }}</p>
        </div>
        <p v-else class="quantum-apps__meta" role="status">
          No run yet — start at <a href="#local-session-hub">#local-session-hub</a> or pick a tool below.
        </p>
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
.quantum-apps__textarea { font-family: var(--vp-font-family-mono, ui-monospace, monospace); min-height: calc(1rem * 6); resize: vertical; }
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
.quantum-apps__hub-steps { list-style: decimal; padding-left: calc(1rem * (3 / 2)); margin: var(--ich-sp4) 0; }
.quantum-apps__hub-steps li { margin-bottom: var(--ich-sp4); display: flex; flex-wrap: wrap; gap: var(--ich-sp3); align-items: baseline; }
.quantum-apps__docs-dev { margin-top: var(--ich-sp5); }
.quantum-apps__code {
  display: block;
  overflow: auto;
  max-height: calc(1rem * (8 + 5));
  padding: var(--ich-sp4);
  margin: var(--ich-sp3) 0;
  font-family: var(--vp-font-family-mono, ui-monospace, monospace);
  font-size: var(--ich-text-xs);
  border: 1px solid color-mix(in srgb, currentColor calc(9% + 6%), transparent);
  white-space: pre-wrap;
}
.quantum-apps__packet { margin-top: var(--ich-sp5); }
</style>

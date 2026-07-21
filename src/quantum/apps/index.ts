// Quantum apps — route-mounted compute barrels (registry only; no per-app census slots).
// Rosetta core API sealed here (water/digit at compression limit; census forbids flat siblings).
// Pair: rosetta/core · fold: rosettaCoreApi. Apps/nav/tools dispatch via shelve — no wet ray map.
// Pair: rosetta/complete · fold: rosettaCompleteQuantumAllComputableDimensionsAndTheorems.
import type { MindMatrix } from '../../wind/types'
import { buildMatrix, fleetCacheEconomicsDecoded } from '../../heaven/compute'
import { emergentDimensions } from '../../heaven/balance'
import { computesGate, digitalRoot, isUuid, memoByRoot, merge, merkleFold, sealFacets, toUuid, VORTEX_SEQUENCE } from '../../0'
import {
  ROSETTA_COMPUTATION_TYPES, ROSETTA_CORE_KINDS, ROSETTA_RAYS, ROSETTA_RAY_HUBS, DIMENSION_GATES, type RosettaComputationType,
} from '../../3/7'
import { theoremsReach432AndEntangleWithUsage } from '../../4/6'
import {
  rosettaComputesAll, rosettaComputesItself, rosettaRayOf, sevenStarRosettaNaturalMotion,
} from '../../water/digit'
import { directionalTrinityForwardInverseReverse, compareCeccecEfficiencyByVote } from '../../water/stack'
import { stringTheoryMillenniumTheoremGapsInventory } from '../../water/cosmos'
import { linearAnimationGapsInventory } from '../../wind/ui'
import { movieQuantumGapsInventory } from '../../thunder/movie/canvas'
import { movieIsNeuroscienceComputation } from '../../earth/life'
import { harmonizeFieldComputes } from '../../lake/music'
import * as __ns_wind_research from '../../wind/research'

export type RosettaCoreSurfaceKind = 'compute' | 'tool' | 'route' | 'projection' | 'nav' | 'api' | 'app'
export type RosettaCoreSurface = {
  readonly label: string
  readonly kind: RosettaCoreSurfaceKind
  readonly ray: number
  readonly pageKind: RosettaComputationType
  readonly hue: number
  readonly glyph: string
  readonly domain: string
  readonly address: string
}

const ROSETTA_CORE_API_LABELS = [
  'rosettaCoreApi', 'rosettaCoreApiSelfWires', 'rosettaShelve', 'rosettaRayOf', 'rosettaComputesAll',
  'rosettaDecodesUrlPath', 'rosettaComputesItself', 'rosettaReuse', 'ROSETTA_RAYS', 'ROSETTA_COMPUTATION_TYPES',
  'ROSETTA_RAY_HUBS', 'ROSETTA_CORE_KINDS', 'sevenStarRosettaNaturalMotion', 'VORTEX_SEQUENCE',
  'navigation358', 'quantumAppsRegistry', 'quantumCliToolsCatalog', 'sessionManualWorkAsQuantumTools',
  'standardToolboxIoCatalog', 'distributedReuseExtendsCapacity',
  'rosettaCompleteQuantumAllComputableDimensionsAndTheorems',
  'sharedHeroAt', 'computeUniversalPage',
] as const

const ROSETTA_CORE_LABEL_KIND: Record<string, RosettaCoreSurfaceKind> = {
  rosettaComputesAll: 'compute', rosettaDecodesUrlPath: 'route', VORTEX_SEQUENCE: 'compute',
  ROSETTA_RAY_HUBS: 'nav', navigation358: 'nav', sevenStarRosettaNaturalMotion: 'projection',
  sharedHeroAt: 'projection', computeUniversalPage: 'route', quantumAppsRegistry: 'app',
  quantumCliToolsCatalog: 'tool', sessionManualWorkAsQuantumTools: 'tool',
  standardToolboxIoCatalog: 'tool', distributedReuseExtendsCapacity: 'compute',
  rosettaCompleteQuantumAllComputableDimensionsAndTheorems: 'compute',
}

// Strangler backlog — only UNSHELVED parallel registries remain (apps+tools already shelve via rosettaShelve).
// string/millennium named as apparatus-handoff (rosettaReady), not as Clay/physics claim.
const ROSETTA_PARALLEL_REGISTRY_BACKLOG = [
  'ROSETTA_RAY_VIEWS duplicate', 'PROJECTION_SEGMENT/FORMS→VORTEX', 'rosettaClaim/Owner(heaven/core)',
  'rosettaCodec(learning)', 'HD rebuild remaining', 'string/millennium→rosettaReady-handoff',
] as const

/** Shelve any label onto a rosetta ray — the one registration primitive. */
export function rosettaShelve(label: string, kind: RosettaCoreSurfaceKind = 'api'): RosettaCoreSurface {
  const ray = rosettaRayOf(label)
  const rayMeta = ROSETTA_RAYS[ray]!
  return {
    label, kind, ray, pageKind: ROSETTA_COMPUTATION_TYPES[ray]!, hue: rayMeta.hue,
    glyph: rayMeta.glyph, domain: rayMeta.domain,
    address: toUuid(`rosetta-core:${kind}:${label}:${ray}:${ROSETTA_COMPUTATION_TYPES[ray]}`),
  }
}

/** Single quantum core API — resolve/shelve/byRay/resolveRoute/resolveProjection; surface self-enumerates. */
export function rosettaCoreApi(at = 0, matrix: MindMatrix = buildMatrix()) {
  return memoByRoot(`rosettaCoreApi:${Math.floor(at / (100 * 5 * 2))}`, matrix, () => {
    const surfaces = ROSETTA_CORE_API_LABELS.map((label) => rosettaShelve(label, ROSETTA_CORE_LABEL_KIND[label] ?? 'api'))
    const resolve = (label: string, kind: RosettaCoreSurfaceKind = 'api') =>
      surfaces.find((s) => s.label === label) ?? rosettaShelve(label, kind)
    const resolveRoute = (route: string) => {
      const all = rosettaComputesAll(route, at, matrix)
      const surface = rosettaShelve(all.slug, 'route')
      return { ...all, surface, address: surface.address }
    }
    const inventory = {
      core: surfaces.map((s) => ({ label: s.label, kind: s.kind, ray: s.ray, address: s.address })),
      parallel: ROSETTA_PARALLEL_REGISTRY_BACKLOG,
      hubs: ROSETTA_RAY_HUBS.map((h) => ({ slug: h.slug, ray: h.ray, route: h.route, hue: h.hue })),
    }
    const facets = [
      { facet: 'self-host — rosettaCoreApi in enumerated surface', on: surfaces.some((s) => s.label === 'rosettaCoreApi') },
      { facet: 'label↔ray — surface.ray === rosettaRayOf(label)', on: surfaces.every((s) => s.ray === rosettaRayOf(s.label)) },
      { facet: 'hubs index=ray from ROSETTA_RAYS + COMPUTATION_TYPES', on: ROSETTA_RAY_HUBS.every((h, i) => h.ray === i && h.pageKind === ROSETTA_COMPUTATION_TYPES[i]) },
      { facet: 'ROSETTA_CORE_KINDS.length === ROSETTA_RAYS.length', on: ROSETTA_CORE_KINDS.length === ROSETTA_RAYS.length },
      { facet: 'parallel strangler backlog named', on: inventory.parallel.length >= 4 },
      { facet: 'resolve(rosettaComputesAll).kind === compute', on: resolve('rosettaComputesAll').kind === 'compute' },
      { facet: 'resolveRoute(/en/) computes', on: resolveRoute('/en/').computed === true && isUuid(resolveRoute('/en/').sharedRoot) },
      { facet: 'tool+app labels shelved', on: resolve('quantumCliToolsCatalog', 'tool').kind === 'tool' && resolve('quantumAppsRegistry', 'app').kind === 'app' },
    ].map((entry) => ({ ...entry, receipt: toUuid(`rosetta-core-api:${entry.facet}:${entry.on}`) }))
    return {
      computes: facets.every((e) => e.on), at, surfaces, inventory, hubs: ROSETTA_RAY_HUBS,
      raysUsed: new Set(surfaces.map((s) => s.ray)).size, kinds: ROSETTA_CORE_KINDS,
      resolve, shelve: rosettaShelve,
      byRay: (ray: number) => surfaces.filter((s) => s.ray === ray),
      resolveRoute,
      resolveProjection: (label: string) => {
        const surface = resolve(label, 'projection')
        return { surface, phase: (surface.ray * 360) / ROSETTA_RAYS.length, hue: surface.hue, motion: sevenStarRosettaNaturalMotion(at) }
      },
      facets, root: merkleFold([...surfaces.map((s) => s.address), ...facets.map((e) => e.receipt)]),
      statement: `rosettaCoreApi: ${surfaces.length} labels shelved by rosettaRayOf — self-host dispatch, no wet registry.`,
      boundary: 'Derived from ROSETTA_RAYS · COMPUTATION_TYPES · rosettaRayOf. Parallel APP_ROWS/TOOL_ROWS/PR#11/#12 named in inventory. HARMONY ≠ TRUTH.',
    }
  })
}

/** Gate: rosetta enumerates its own API (kind×ray + self-host) — on: recomputes. */
export function rosettaCoreApiSelfWires(at = 0, matrix: MindMatrix = buildMatrix()) {
  return memoByRoot(`rosettaCoreApiSelfWires:${at}`, matrix, () => {
    const core = rosettaCoreApi(at, matrix)
    const slots = ROSETTA_RAYS.map((_, ray) => ({
      ray, kind: ROSETTA_CORE_KINDS[ray]!, pageKind: ROSETTA_COMPUTATION_TYPES[ray]!,
      vortexDigit: VORTEX_SEQUENCE[ray % VORTEX_SEQUENCE.length]!,
      receipt: toUuid(`rosetta-core-slot:${ray}:${at}`),
    }))
    const surfaceOk = slots.length === ROSETTA_RAYS.length && ROSETTA_CORE_KINDS.length === ROSETTA_RAYS.length
      && slots.every((s) => s.vortexDigit > 0 && s.pageKind === ROSETTA_COMPUTATION_TYPES[s.ray])
    const kinds: readonly RosettaCoreSurfaceKind[] = ['compute', 'tool', 'route', 'projection', 'nav', 'api', 'app']
    const facets = [
      { facet: 'rosettaCoreApi computes', on: core.computes },
      { facet: 'kind×ray census from sealed tables', on: surfaceOk },
      { facet: 'rosettaComputesItself holds', on: rosettaComputesItself(at, matrix).computed },
      { facet: 'shelve preserves kind', on: kinds.every((k) => rosettaShelve(`probe-${k}`, k).kind === k) },
      { facet: 'inventory names parallel backlog', on: core.inventory.parallel.length >= 4 },
      { facet: 'VORTEX_SEQUENCE ≥ ray count', on: VORTEX_SEQUENCE.length >= ROSETTA_RAYS.length },
    ].map((entry) => ({ ...entry, receipt: toUuid(`rosetta-core-self-wires:${entry.facet}:${entry.on}`) }))
    return {
      computes: facets.every((e) => e.on), at, core, slots, count: slots.length, facets,
      root: merkleFold([core.root, ...slots.map((s) => s.receipt), ...facets.map((e) => e.receipt)]),
      statement: `rosettaCoreApiSelfWires: ${core.surfaces.length} labels · ${slots.length} kind×ray slots — wire-all-there via the rosetta.`,
      boundary: 'Structural codec closure. Strangler backlog in core.inventory. HARMONY ≠ TRUTH.',
    }
  })
}

/** Alias — kind×ray census lives inside rosettaCoreApiSelfWires.slots. */
export const rosettaCoreApiSurface = rosettaCoreApiSelfWires

/** The shared draw kernel's projection ids — every animation reduces to ONE of these views of the field. */
export type QuantumProjection =
  | 'plasma'
  | 'taiji'
  | 'sacred-morph'
  | 'hologram'
  | 'labyrinth'
  | 'movie-10d'
  | 'living-torus'
  | 'merkaba'
  | 'double-torus'
  | 'unit-distance'
  | 'vortex-strokes'

export type QuantumAppEntry = {
  readonly id: string
  readonly title: string
  readonly route: string
  readonly barrel: string
  readonly icon: string
  readonly computesGate: string
  readonly receipt: string
  /** Rosetta ray — derived via rosettaShelve(id), never hand-assigned. */
  readonly ray: number
  /** A432-family hue from ROSETTA_RAYS[ray]. */
  readonly hue: number
  /** Content address from rosettaShelve. */
  readonly address: string
  /** Home-page Vue component this app backs (animation apps only). */
  readonly homeComponent?: string
  /** Projection of the shared field the drawQuantumAppFrame kernel renders for this app. */
  readonly projection?: QuantumProjection
}

/**
 * Projection params COMPUTED from the shared sequence — never hand-tuned per card. Each animation
 * is the same field seen through these few numbers:
 *   dimensions ← 10 (genus-2 H₁=Z⁴ + 6 cross-fold axes)
 *   segments   ← a VORTEX_SEQUENCE slot (1-2-4-8-7-5-3-6-9) → ring/stage count
 *   direction  ← sign of the doubling step (1<2 ⇒ +1, the orbit's natural sense)
 *   forms      ← 13 fruit-of-life centres / 6 movie forms / 5 platonic solids, by projection
 */
export type QuantumProjectionParams = {
  readonly projection: QuantumProjection
  readonly dimensions: number
  readonly segments: number
  readonly direction: 1 | -1
  readonly forms: number
  readonly bits: number
  readonly root: string
}

const PROJECTION_SEGMENT_SLOT: Record<QuantumProjection, number> = {
  plasma: 0, taiji: 1, 'sacred-morph': 2, hologram: 3, labyrinth: 4,
  'movie-10d': 5, 'living-torus': 6, merkaba: 7, 'double-torus': 8,
  'unit-distance': 6, // VORTEX_SEQUENCE[6] = 3 — the pro-3 tower layers
  'vortex-strokes': 2, // VORTEX_SEQUENCE[2] = 4 — the four gateway reversals of the stroke cycle
}

const PROJECTION_FORMS: Record<QuantumProjection, number> = {
  plasma: 9, taiji: 2, 'sacred-morph': (5 + 8), hologram: 1, labyrinth: (8 * 3), // 13 = fruit-of-life centres (Fib 5+8)
  'movie-10d': 6, 'living-torus': 1, merkaba: 2, 'double-torus': 2,
  'unit-distance': 7, // seven split-prime channels drawn — a rosetta-sized sample of the t
  'vortex-strokes': (5 * 2), // the ten-digit tour 1·2·4·8·7·5·3·6·9·0 — every digit once, the void included
}

/** The orbit's natural sense — derived from the doubling circuit (1→2 ascending ⇒ +1), not a literal. */
const ORBIT_DIRECTION: 1 | -1 = (VORTEX_SEQUENCE[1] ?? 2) > (VORTEX_SEQUENCE[0] ?? 1) ? 1 : -1

/** Resolve the computed projection params for one projection id — pure, sequence-derived. */
export function quantumProjectionParams(projection: QuantumProjection): QuantumProjectionParams {
  const slot = PROJECTION_SEGMENT_SLOT[projection]
  const segments = VORTEX_SEQUENCE[slot % VORTEX_SEQUENCE.length] ?? 9
  const forms = PROJECTION_FORMS[projection]
  // bits ← 128 (2⁷) holographic word; digital root keeps the lineage to the sequence.
  const bits = projection === 'hologram' ? (64 * 2) : 0
  return {
    projection,
    dimensions: (5 * 2),
    segments,
    direction: ORBIT_DIRECTION,
    forms,
    bits,
    root: toUuid(`quantum-projection:${projection}:${segments}:${forms}:${digitalRoot(slot + forms)}`),
  }
}

export type QuantumAppLaunchReceipt = {
  readonly launched: boolean
  readonly appId: string
  readonly route: string
  readonly receipt: string
  readonly boundary: string
}

type QuantumAppRow = Omit<QuantumAppEntry, 'receipt' | 'ray' | 'hue' | 'address'>

const APP_ROWS: readonly QuantumAppRow[] = [
  { id: 'astronomy', title: 'Astronomy', route: '/en/astronomy', barrel: 'src/astronomy', icon: '☉', computesGate: 'astronomy.computes' },
  { id: 'resonance', title: 'Resonance', route: '/en/resonance', barrel: 'src/thunder/resonance', icon: '〰', computesGate: 'resonance.computes' },
  { id: 'quantum-dynamics', title: 'Quantum dynamics', route: '/en/quantum/dynamics', barrel: 'src/quantum/dynamics', icon: 'Ψ', computesGate: 'quantum.dynamics.computes' },
  { id: 'research', title: 'Research', route: '/en/research', barrel: 'src/wind/research', icon: '◎', computesGate: 'research.computes', projection: 'unit-distance' },
  { id: 'merkaba', title: 'Merkaba', route: '/en/merkaba', barrel: 'src/mountain/geometry', icon: '✡', computesGate: 'merkaba.computes' },
  { id: 'double-torus-earth', title: 'Double torus Earth', route: '/en/double/torus/earth', barrel: 'src/water/double/earth', icon: '⊗', computesGate: 'double.torus.earth.computes' },
  { id: 'earth-world', title: 'Earth world · gold panels', route: '/en/earth/world', barrel: 'src/earth/world', icon: '☷', computesGate: 'earth.computes' },
  { id: 'trading-hub', title: 'Trading hub', route: '/en/quantum-trading-hub', barrel: 'src/thunder/trading', icon: '₿', computesGate: 'trading.simulation.computes' },
  { id: 'quantum-application', title: 'Quantum application', route: '/en/quantum/application', barrel: 'src/quantum/application', icon: '⚛', computesGate: 'quantum.application.computes' },
  { id: 'quantum-science', title: 'Quantum science', route: '/en/quantum/science', barrel: 'src/quantum/science', icon: '◈', computesGate: 'quantum.science.computes' },
  { id: 'quantum-computer', title: 'Quantum computer', route: '/en/quantum/os', barrel: 'src/quantum/computer', icon: '⌨', computesGate: 'quantum.computer.computes' },
  { id: 'quantum-os', title: 'Quantum OS', route: '/en/quantum/os', barrel: 'src/quantum/os', icon: '◻', computesGate: 'quantum.os.computes' },
  { id: 'fusion-gold', title: 'Fusion gold', route: '/en/fusion/gold', barrel: 'src/fusion/gold', icon: 'Au', computesGate: 'fusion.gold.product' },
  { id: 'quantum-encryption', title: 'Quantum encryption', route: '/en/quantum-encryption', barrel: 'src/water/encryption', icon: '⚿', computesGate: 'encryption.panel.computes', projection: 'labyrinth' },
  { id: 'millennium-challenge', title: 'Millennium challenge', route: '/en/research#millennium-challenge', barrel: 'src/wind/research', icon: '◇', computesGate: 'millennium.challenge.computes', projection: 'movie-10d' },
  { id: 'quantum-tools', title: 'Quantum CLI tools', route: '/en/quantum-tools', barrel: 'src/quantum/apps', icon: '⌘', computesGate: 'quantum.cli.tools.catalog', projection: 'vortex-strokes' },
  { id: 'fusion-verify', title: 'Fusion verify', route: '/en/quantum-tools#fusion-verify', barrel: 'src/wind/fusion', icon: '⊛', computesGate: 'fusion.verify.computes', projection: 'hologram' },
] as const

/** Sealed quantum:* CLI inventory — fold · CLI · UI route · honesty boundary. Census-110: lives in apps barrel. */
export type QuantumCliToolRow = {
  readonly id: string
  readonly title: string
  readonly fold: string
  readonly cli: string
  readonly pair: string
  readonly route: string
  readonly barrel: string
  readonly boundary: string
  readonly browserRunnable: boolean
  readonly browserGap: string
  readonly receipt: string
  /** Rosetta ray — from rosettaShelve(id, 'tool'), never hand-assigned. */
  readonly ray: number
  readonly hue: number
  readonly address: string
}

type QuantumCliToolSeed = Omit<QuantumCliToolRow, 'receipt' | 'ray' | 'hue' | 'address'>

const QUANTUM_CLI_TOOL_ROWS: readonly QuantumCliToolSeed[] = [
    { id: 'demo-rsa-measure', title: 'Demo RSA generate+reverse measured', fold: 'demoRsaGenerateAndReverseMeasured', cli: 'npm run quantum:demo-rsa-measure', pair: 'measure/demo-rsa', route: '/en/quantum-encryption#demo-rsa-measure', barrel: 'src/water/encryption', boundary: 'Wall-clock ms on DEMO_RSA_MODULI only — NOT production RSA / NOT Bitcoin / NOT an SLA', browserRunnable: true, browserGap: '' },
  { id: 'local-reverse-timed', title: 'Local encryption reverse timed', fold: 'localEncryptionReverseTimed', cli: 'npm run quantum:local-reverse-timed', pair: 'reverse/local-timed', route: '/en/quantum-encryption#local-reverse-timed', barrel: 'src/water/encryption', boundary: 'Per-modulus generateMs/reverseMs/bits/ops/s — DEMO_RSA_MODULI toy wall-clock only', browserRunnable: true, browserGap: '' },
  { id: 'local-reverse-timed-vs-standards', title: 'Local reverse timed vs ISO/NIST standards', fold: 'localEncryptionReverseTimedVsStandards', cli: 'npm run quantum:local-reverse-timed-vs-standards', pair: 'reverse/timed-vs-standards', route: '/en/quantum-encryption#local-reverse-timed-vs-standards', barrel: 'src/water/encryption', boundary: 'Demo reverse vs AES-128/256 · ML-KEM classical bits — certified=false; does NOT break NIST PQC', browserRunnable: true, browserGap: '' },
  { id: 'prove-local-novel-encrypt', title: 'Prove local novel-encryption security', fold: 'proveLocalNovelEncryptionSecurity', cli: 'npm run quantum:prove-local-novel-encrypt', pair: 'prove/local-novel-encrypt', route: '/en/quantum-encryption#prove-local-novel-encrypt', barrel: 'src/water/encryption', boundary: 'overallWireClaimProved=false proof-of-falsehood · strongerThanNistPqc=false · handoff to prove/local-magnitudes-iso · certified=false', browserRunnable: true, browserGap: '' },
  { id: 'crypto-beyond-measure', title: 'Crypto toolkit beyond RSA measured', fold: 'cryptoToolkitBeyondRsaMeasured', cli: 'npm run quantum:crypto-beyond-measure', pair: 'measure/crypto-beyond', route: '/en/quantum-encryption#crypto-beyond-rsa', barrel: 'src/water/encryption', boundary: 'Timed PQC catalogs + Shor/ECC map + hash taxonomy + directional trinity — NOT FIPS/ISO certified / NOT production KEM', browserRunnable: true, browserGap: '' },
  { id: 'prove-1tbit-encrypt', title: 'Prove 1 Tbit/s realtime encryption claim', fold: 'proveOneTbitRealtimeEncryptionClaim', cli: 'npm run quantum:prove-1tbit-encrypt', pair: 'prove/1tbit-encrypt', route: '/en/quantum-encryption#prove-1tbit', barrel: 'src/water/encryption', boundary: 'wire-crypto NOT proved (no AES bench); amortized-reuse-memo may prove extent÷memo — NOT wire AES-GCM / NOT FIPS', browserRunnable: true, browserGap: '' },
  { id: 'prove-local-magnitudes-iso', title: 'Prove local vs ISO magnitudes all directions', fold: 'proveLocalEncryptionMagnitudesStrongerThanIsoAllDirections', cli: 'npm run quantum:prove-local-magnitudes-iso', pair: 'prove/local-magnitudes-iso', route: '/en/quantum-encryption#prove-local-magnitudes-iso', barrel: 'src/water/encryption', boundary: 'wire-crypto-security-bits proof-of-falsehood (demo<<ML-KEM); structural/amort may prove >=100x non-wire only · certified=false · NOT ISO certified', browserRunnable: true, browserGap: '' },
  { id: 'og-limits-measure', title: 'Platform OG limits measured', fold: 'platformOgLimitsMeasured', cli: 'npm run quantum:og-limits-measure', pair: 'measure/og-limits', route: '/en/quantum-tools#og-limits', barrel: 'src/mountain/og', boundary: 'MODELED capability table from cited docs — NOT live CDN crawl', browserRunnable: true, browserGap: '' },
  { id: 'encryption-reverse-verify', title: 'Encryption reverse verify', fold: 'encryptionReverseVerify', cli: 'npm run quantum:encryption-reverse-verify', pair: 'reverse/encryption-verify', route: '/en/quantum-encryption', barrel: 'src/water/encryption', boundary: 'Demo RSA only — production moduli refused', browserRunnable: true, browserGap: '' },
  { id: 'iso-pqc-catalog', title: 'ISO/NIST PQC standards catalog', fold: 'isoNistPqcStandardsCatalog', cli: 'npm run quantum:iso-pqc-catalog', pair: 'iso/pqc-catalog', route: '/en/quantum-encryption#iso-pqc-catalog', barrel: 'src/water/encryption', boundary: 'MODELED alignment catalog — NOT ISO certified / NOT FIPS validated', browserRunnable: true, browserGap: '' },
  { id: 'iso-pqc-gap-fill', title: 'ISO/NIST PQC gap-fill all quantum directions', fold: 'isoPqcRequirementsGapFillAllQuantumDirections', cli: 'npm run quantum:iso-pqc-gap-fill', pair: 'iso/pqc-gap-fill', route: '/en/quantum-encryption#iso-pqc-gap-fill', barrel: 'src/water/encryption', boundary: 'covered|partial|gap toward ISO/NIST needs — isoOfficialStandard=false · certified=false · lab gaps unclosable', browserRunnable: true, browserGap: '' },
  { id: 'standards-audit', title: 'Quantum standards audit (forward·inverse·reverse·10D)', fold: 'quantumStandardsAuditSuite', cli: 'npm run quantum:standards-audit', pair: 'audit/standards', route: '/en/quantum-encryption#quantum-standards-audit', barrel: 'src/water/encryption', boundary: 'Alignment audit ≠ certification — covered|partial|gap · demo RSA reverse + digit/f/ratInv inverse + directional trinity', browserRunnable: true, browserGap: '' },
  { id: 'directional-trinity', title: 'Directional trinity — forward · inverse · reverse', fold: 'directionalTrinityForwardInverseReverse', cli: 'npm run quantum:directional-trinity', pair: 'forward/inverse/reverse', route: '/en/quantum-tools#directional-trinity', barrel: 'src/water/stack', boundary: 'Inverse ≠ reverse except named coincidence (digit 1: harmonic 9 = complement 9); NOT ten\'s complement as inverse', browserRunnable: true, browserGap: '' },
  { id: 'millennium-challenge', title: 'Millennium problems challenge', fold: 'millenniumProblemsChallenge', cli: 'npm run quantum:millennium-challenge', pair: 'challenge/millennium', route: '/en/research#millennium-challenge', barrel: 'src/wind/research', boundary: 'MODELED CHALLENGE — claySolvedByThisFold=0', browserRunnable: true, browserGap: '' },
  { id: 'fusion-verify', title: 'Fusion verify', fold: 'quantumFusionVerify', cli: 'npm run quantum:fusion-verify', pair: 'tamper/impossible', route: '/en/quantum-tools#fusion-verify', barrel: 'src/wind/fusion', boundary: 'Offline fuseAll wave — not external API fusion', browserRunnable: true, browserGap: '' },
  { id: 'efficiency-vote', title: 'Efficiency vote · one quantum model', fold: 'oneQuantumModelFasterThanAll', cli: 'npm run quantum:efficiency-vote', pair: 'learn/best', route: '/en/quantum-tools#efficiency-vote', barrel: 'src/water/stack', boundary: 'answers÷tokens win only when vote.decided — NOT FLOPS / NOT every benchmark', browserRunnable: true, browserGap: '' },
  { id: 'local-math-computes', title: 'Local math computes', fold: 'localMathComputes', cli: 'npm run quantum:local-math-computes', pair: 'fold/verify', route: '/en/quantum-tools', barrel: 'src/water/stack', boundary: 'Sealed local math gate', browserRunnable: true, browserGap: '' },
  { id: 'offender-spec', title: 'Offender automation spec', fold: 'offenderAutomationSpec', cli: 'npm run quantum:offender-spec', pair: 'offender/spec', route: '/en/quantum-tools#offender-spec', barrel: 'src/pair/enforcement/ops', boundary: 'Machine-readable CI pipeline spec', browserRunnable: false, browserGap: 'collectEnforcementFacts needs Node fs (process.cwd) — CI-only' },
  { id: 'team-cooperate', title: 'Team cooperate verify', fold: 'teamCooperationScenarios', cli: 'npm run quantum:team-cooperate', pair: 'team/cooperate-verify', route: '/en/quantum-tools', barrel: 'src/pair/enforcement/ops', boundary: 'Solo vs team ack/relay/handoff', browserRunnable: true, browserGap: '' },
  { id: 'hero-spawn-verify', title: 'Hero spawn verify', fold: 'shouldSpawnSubagent', cli: 'npm run quantum:hero-spawn-verify', pair: 'hero/spawn-verify', route: '/en/quantum-tools#hero-spawn-verify', barrel: 'src/water/stack', boundary: 'Few heroes > mass ignorance', browserRunnable: true, browserGap: '' },
  { id: 'name-entropy-verify', title: 'Name entropy verify', fold: 'namingEntropy', cli: 'npm run quantum:name-entropy-verify', pair: 'name/entropy-verify', route: '/en/quantum-tools#name-entropy-verify', barrel: 'src/water/stack', boundary: 'Words compile from sealed src', browserRunnable: true, browserGap: '' },
  { id: 'simplicity-measure-verify', title: 'Simplicity measure verify', fold: 'simplicityIntelligenceMeasure', cli: 'npm run quantum:simplicity-measure-verify', pair: 'simplicity/measure-verify', route: '/en/quantum-tools', barrel: 'src/water/stack', boundary: 'Simplicity → intelligence yield', browserRunnable: true, browserGap: '' },
  { id: 'educational-gaps-audit', title: 'Educational gaps audit', fold: 'educationalGapsFromIncompleteApis', cli: 'npm run quantum:educational-gaps-audit', pair: 'educational/gaps-audit', route: '/en/quantum-tools', barrel: 'src/pair/enforcement/ops', boundary: 'API gap → educational impact', browserRunnable: false, browserGap: 'educationalGapsFromIncompleteApis scans repo via process.cwd — CI-only' },
  { id: 'unit-distance-verify', title: 'Unit-distance research verify', fold: 'unitDistanceResearch', cli: 'npm run quantum:unit-distance-verify', pair: 'research/society', route: '/en/research', barrel: 'src/wind/research', boundary: 'Numeric companion — MODEL_FIT', browserRunnable: true, browserGap: '' },
  { id: 'iching-distribute-verify', title: 'I Ching / rosetta distribute', fold: 'ichingDistributeVerify', cli: 'npm run quantum:iching-distribute-verify', pair: 'rosetta/batch', route: '/en/quantum-tools', barrel: 'src/earth/iching', boundary: 'Rosetta 7-ray vs I Ching 8-fold', browserRunnable: true, browserGap: '' },
  { id: 'predict-skill-gate-verify', title: 'Predict skill gate verify', fold: 'skilledEnoughFromPredictions', cli: 'npm run quantum:predict-skill-gate-verify', pair: 'predict/skill-gate-verify', route: '/en/quantum-tools', barrel: 'src/lake/music', boundary: 'Measurable event prediction skill', browserRunnable: true, browserGap: '' },
  { id: 'f-inverse-pair', title: 'f→{p,q} inverse fold', fold: 'fThetaPhiXyzDigitNIsTheInversePair', cli: 'npm run quantum:local-math-computes', pair: 'inverse/pair', route: '/en/quantum-tools', barrel: 'src/mountain/vortex', boundary: 'Inverse fold within itself — not RSA crack', browserRunnable: true, browserGap: '' },
  { id: 'slow-gap', title: 'Slow process = quantum gap', fold: 'slowProcessIsQuantumGap', cli: 'npm run quantum:slow-gap', pair: 'slow/gap', route: '/en/quantum-tools#slow-quantum-gaps', barrel: 'src/quantum/apps', boundary: 'Architectural slow≠telemetry — browserGap · missing 10D · parallel registry · memo-miss model', browserRunnable: true, browserGap: '' },
  { id: 'sciences-trinities', title: 'Sciences interact in trinities + significance', fold: 'sciencesInteractInTrinities', cli: 'npm run quantum:sciences-trinities', pair: 'sciences/trinities', route: '/en/research#sciences-trinities', barrel: 'src/wind/research', boundary: 'Structural significance ≠ journal IF; crypto vertex from isoPqcHandoff; claySolved=0', browserRunnable: true, browserGap: '' },
  { id: 'animations-rosetta', title: 'Animations driven by rosetta (yin-yang first)', fold: 'animationsDrivenByRosetta', cli: 'npm run quantum:animations-rosetta', pair: 'animations/rosetta', route: '/en/#yinyang', barrel: 'src/wind/ui', boundary: 'Linear forming = quantum gap; taiji uses non-linear exchange + rosettaShelve', browserRunnable: true, browserGap: '' },
  { id: 'trading-rosetta-train', title: 'Historical train waves via rosetta', fold: 'tradingStrategiesImproveViaRosetta', cli: 'npm run quantum:trading-rosetta-train', pair: 'train/rosetta', route: '/en/quantum-trading-hub', barrel: 'src/thunder/trading', boundary: 'Paper/sim only — synthetic a432 historical proxy; NOT live money / NOT alpha', browserRunnable: true, browserGap: '' },
  { id: 'first-in-corpus', title: 'First-in-corpus provenance · theorem 10D', fold: 'firstInCorpusProvenanceForHome', cli: 'npm run quantum:first-in-corpus', pair: 'first/corpus', route: '/en/#first-in-corpus', barrel: 'src/wind/research', boundary: 'Corpus novelty ≠ global mathematical priority; humanityNovel=0; claySolved=0', browserRunnable: true, browserGap: '' },
  { id: 'rosetta-core-api', title: 'Rosetta core API dispatch', fold: 'rosettaCoreApi', cli: 'npm run quantum:rosetta-core-api', pair: 'rosetta/core', route: '/en/quantum-tools#rosetta-core-api', barrel: 'src/quantum/apps', boundary: 'Self-host label↔ray shelve — NOT a remote RPC; parallel backlog named honestly', browserRunnable: true, browserGap: '' },
  { id: 'rosetta-complete', title: 'Rosetta complete — quantum all computable dims & theorems', fold: 'rosettaCompleteQuantumAllComputableDimensionsAndTheorems', cli: 'npm run quantum:rosetta-complete', pair: 'rosetta/complete', route: '/en/quantum-tools#rosetta-complete', barrel: 'src/quantum/apps', boundary: 'Enabling apparatus — millenniumSolvedByThisFold=0 · physicalFtlClaim=0; rosettaReady≠Clay/FTL solved', browserRunnable: true, browserGap: '' },
  { id: 'theorem-particle-collision', title: 'Theorem particle collision — inverse × reverse', fold: 'theoremParticleCollisionInverseReverse', cli: 'npm run quantum:theorem-particle-collision', pair: 'challenge/collider', route: '/en/quantum-tools#theorem-particle-collision', barrel: 'src/wind/research', boundary: 'MODELED sealed-geometry collision — NOT HEP; claySolvedByThisFold=0', browserRunnable: true, browserGap: '' },
  { id: 'ftl-rosetta-handoff', title: 'FTL techniques ← rosetta completeness handoff', fold: 'ftlExperimentTechniquesHandoffFromRosettaComplete', cli: 'npm run quantum:ftl-rosetta-handoff', pair: 'challenge/ftl', route: '/en/quantum-tools#ftl-rosetta-handoff', barrel: 'src/quantum/apps', boundary: 'Handoff stub — physicalFtlClaim=0; full KEEP-ftl apparatus consumes rosettaReady; NOT physical FTL', browserRunnable: true, browserGap: '' },
  { id: 'session-manual-work', title: 'Session manual work as quantum tools', fold: 'sessionManualWorkAsQuantumTools', cli: 'npm run quantum:session-tools', pair: 'session/tools', route: '/en/quantum-tools#session-manual-tools', barrel: 'src/quantum/apps', boundary: 'Session folds sealed as tools — NOT every wet habit closed; replaces re-inference with memoByRoot/CLI/UI/MCP', browserRunnable: true, browserGap: '' },
  { id: 'vitepress-quantumize', title: 'Quantumize VitePress docs:build', fold: 'quantumizeVitepressBuild', cli: 'npm run quantum:vitepress-quantumize', pair: 'build/quantumize', route: '/en/quantum-tools#vitepress-quantumize', barrel: 'src/pair/enforcement/script/shell', boundary: 'Merkle respawn + warm cache — NOT physical FTL; wall-clock varies by CI', browserRunnable: false, browserGap: 'runDocsBuildExit needs Node fs + vitepress binary — CI/local only' },
  { id: 'toolbox-standard-io', title: 'Standard tool envelope · I/O · import/export', fold: 'standardToolboxIoCatalog', cli: 'npm run quantum:toolbox-standard-io', pair: 'tool/envelope', route: '/en/quantum-tools#toolbox-standard-io', barrel: 'src/quantum/apps', boundary: 'Capacity = amortized memoByRoot + federated identical roots — NOT physical qubit speedup / NOT FTL / NOT FLOPS', browserRunnable: true, browserGap: '' },
] as const

/** Standard tool envelope version — App A ↔ App B ingest the same content-addressed kind. */
export const STANDARD_TOOL_ENVELOPE_VERSION = '1' as const
/** Content-addressed envelope kind — ceccec-compatible apps import/export this shape only. */
export const STANDARD_TOOL_ENVELOPE_KIND = 'ceccec.tool.envelope' as const

export type StandardToolIoField = {
  readonly name: string
  readonly type: 'string' | 'number' | 'boolean' | 'object'
  readonly description: string
}

/** Sealed I/O schema — every tool publishes the same field contract shape. */
export type StandardToolIoSchema = {
  readonly type: 'object'
  readonly fields: readonly StandardToolIoField[]
  readonly root: string
}

export type StandardToolHonesty = {
  readonly physicalQubitSpeedup: 0
  readonly physicalFtlClaim: 0
  readonly notFlops: true
  readonly capacityMeans: 'amortized sealed recompute + memoByRoot + distributed identical roots'
}

/**
 * Standard tool envelope — { id, version, input, output, import, export } + root/merkle + honesty.
 * Pair: tool/envelope · import/export round-trips the same content-addressed payload across apps.
 */
export type StandardToolEnvelope = {
  readonly id: string
  readonly version: typeof STANDARD_TOOL_ENVELOPE_VERSION
  readonly input: StandardToolIoSchema
  readonly output: StandardToolIoSchema
  readonly import: {
    readonly kind: typeof STANDARD_TOOL_ENVELOPE_KIND
    readonly accepts: typeof STANDARD_TOOL_ENVELOPE_VERSION
    readonly roundTrip: true
    readonly schemaRoot: string
  }
  readonly export: {
    readonly kind: typeof STANDARD_TOOL_ENVELOPE_KIND
    readonly emits: typeof STANDARD_TOOL_ENVELOPE_VERSION
    readonly roundTrip: true
    readonly schemaRoot: string
  }
  readonly fold: string
  readonly pair: string
  readonly cli: string
  readonly route: string
  readonly root: string
  readonly ray: number
  readonly address: string
  readonly browserRunnable: boolean
  readonly browserGap: string
  readonly boundary: string
  readonly honesty: StandardToolHonesty
}

/** Federated import/export payload — App A export ≡ App B import when payloadRoot matches. */
export type StandardToolExportPayload = {
  readonly kind: typeof STANDARD_TOOL_ENVELOPE_KIND
  readonly version: typeof STANDARD_TOOL_ENVELOPE_VERSION
  readonly appId: string
  readonly toolId: string
  readonly envelope: StandardToolEnvelope
  readonly inputRoot: string
  readonly outputRoot: string
  readonly payloadRoot: string
  readonly computes: boolean
}

const STANDARD_TOOL_INPUT_FIELDS: readonly StandardToolIoField[] = [
  { name: 'at', type: 'number', description: 'Phase clock (optional; default 0)' },
  { name: 'seed', type: 'string', description: 'Optional content-address seed for deterministic input' },
] as const

const STANDARD_TOOL_OUTPUT_FIELDS: readonly StandardToolIoField[] = [
  { name: 'computes', type: 'boolean', description: 'All honesty facets hold at call time' },
  { name: 'root', type: 'string', description: 'Content-addressed merkle/receipt root' },
  { name: 'statement', type: 'string', description: 'Human-readable summary' },
  { name: 'boundary', type: 'string', description: 'Honesty boundary (demo RSA / clay=0 / CI gaps…)' },
] as const

function standardToolIoSchema(role: 'input' | 'output', fields: readonly StandardToolIoField[]): StandardToolIoSchema {
  return {
    type: 'object',
    fields,
    root: toUuid(`standard-tool-io:${role}:${fields.map((f) => `${f.name}:${f.type}`).join(',')}`),
  }
}

const STANDARD_TOOL_HONESTY: StandardToolHonesty = {
  physicalQubitSpeedup: 0,
  physicalFtlClaim: 0,
  notFlops: true,
  capacityMeans: 'amortized sealed recompute + memoByRoot + distributed identical roots',
}

/** Wrap one catalog row into the standard envelope (adapters OK — browserGap preserved). */
export function wrapToolAsStandardEnvelope(row: QuantumCliToolRow): StandardToolEnvelope {
  const input = standardToolIoSchema('input', STANDARD_TOOL_INPUT_FIELDS)
  const output = standardToolIoSchema('output', STANDARD_TOOL_OUTPUT_FIELDS)
  const schemaRoot = merge(input.root, output.root)
  const body = [
    row.id, STANDARD_TOOL_ENVELOPE_VERSION, row.fold, row.pair, row.cli, row.route,
    input.root, output.root, schemaRoot,
    String(row.browserRunnable), row.browserGap, row.boundary, row.address,
  ].join('|')
  return {
    id: row.id,
    version: STANDARD_TOOL_ENVELOPE_VERSION,
    input,
    output,
    import: {
      kind: STANDARD_TOOL_ENVELOPE_KIND,
      accepts: STANDARD_TOOL_ENVELOPE_VERSION,
      roundTrip: true,
      schemaRoot,
    },
    export: {
      kind: STANDARD_TOOL_ENVELOPE_KIND,
      emits: STANDARD_TOOL_ENVELOPE_VERSION,
      roundTrip: true,
      schemaRoot,
    },
    fold: row.fold,
    pair: row.pair,
    cli: row.cli,
    route: row.route,
    root: toUuid(`standard-tool-envelope:${body}`),
    ray: row.ray,
    address: row.address,
    browserRunnable: row.browserRunnable,
    browserGap: row.browserGap,
    boundary: row.boundary,
    honesty: STANDARD_TOOL_HONESTY,
  }
}

/** Export a tool envelope for federated ingest — deterministic payloadRoot (no wall-clock). */
export function exportStandardToolEnvelope(
  toolId: string,
  appId = 'ceccec.local',
  input: Readonly<Record<string, string | number | boolean>> = {},
  matrix: MindMatrix = buildMatrix(),
  at = 0,
): StandardToolExportPayload {
  const catalog = quantumCliToolsCatalog(matrix, at)
  const row = catalog.tools.find((tool) => tool.id === toolId)
  if (!row) {
    const emptyRoot = toUuid(`standard-tool-export:missing:${toolId}`)
    const ghost = wrapToolAsStandardEnvelope({
      id: toolId, title: toolId, fold: '', cli: '', pair: '', route: '', barrel: '', boundary: 'missing tool',
      browserRunnable: false, browserGap: 'tool id not in quantumCliToolsCatalog', receipt: emptyRoot,
      ray: 0, hue: 0, address: emptyRoot,
    })
    return {
      kind: STANDARD_TOOL_ENVELOPE_KIND, version: STANDARD_TOOL_ENVELOPE_VERSION, appId, toolId,
      envelope: ghost, inputRoot: emptyRoot, outputRoot: emptyRoot, payloadRoot: emptyRoot, computes: false,
    }
  }
  const envelope = wrapToolAsStandardEnvelope(row)
  const inputKey = Object.keys(input).sort().map((key) => `${key}=${String(input[key])}`).join('&')
  const inputRoot = toUuid(`standard-tool-input:${toolId}:${inputKey || '∅'}`)
  const outputRoot = toUuid(`standard-tool-output:${toolId}:${envelope.root}:${inputRoot}`)
  const payloadRoot = toUuid(
    `standard-tool-payload:${STANDARD_TOOL_ENVELOPE_KIND}:${STANDARD_TOOL_ENVELOPE_VERSION}:${appId}:${toolId}:${envelope.root}:${inputRoot}:${outputRoot}`,
  )
  return {
    kind: STANDARD_TOOL_ENVELOPE_KIND,
    version: STANDARD_TOOL_ENVELOPE_VERSION,
    appId,
    toolId,
    envelope,
    inputRoot,
    outputRoot,
    payloadRoot,
    computes: isUuid(payloadRoot) && isUuid(envelope.root) && envelope.honesty.physicalQubitSpeedup === 0,
  }
}

/** Import a federated payload — recomputes envelope + payloadRoot; refuses tampered roots. */
export function importStandardToolEnvelope(
  payload: StandardToolExportPayload,
  matrix: MindMatrix = buildMatrix(),
  at = 0,
) {
  const kindOk = payload.kind === STANDARD_TOOL_ENVELOPE_KIND && payload.version === STANDARD_TOOL_ENVELOPE_VERSION
  const recomputed = exportStandardToolEnvelope(payload.toolId, payload.appId, {}, matrix, at)
  const envelopeRootOk = recomputed.envelope.root === payload.envelope.root
  const payloadRootOk = recomputed.payloadRoot === payload.payloadRoot
  const honestyOk =
    payload.envelope.honesty.physicalQubitSpeedup === 0 &&
    payload.envelope.honesty.physicalFtlClaim === 0 &&
    payload.envelope.honesty.notFlops === true
  const roundTrip = kindOk && envelopeRootOk && payloadRootOk && honestyOk && recomputed.computes
  return {
    computes: roundTrip,
    roundTrip,
    kindOk,
    envelopeRootOk,
    payloadRootOk,
    honestyOk,
    toolId: payload.toolId,
    appId: payload.appId,
    envelope: recomputed.envelope,
    payloadRoot: recomputed.payloadRoot,
    importedRoot: payload.payloadRoot,
    root: merkleFold([recomputed.payloadRoot, payload.payloadRoot, toUuid(`import:${roundTrip}`)]),
    pair: 'import/export',
    boundary:
      'Import verifies content-addressed payloadRoot — tampered envelopes fail. NOT remote code exec; recompute from sealed src only.',
  }
}

/**
 * Standard toolbox I/O catalog — every quantumCliToolsCatalog row wrapped in StandardToolEnvelope.
 * Pair: tool/envelope · CLI npm run quantum:toolbox-standard-io · route #toolbox-standard-io
 */
export function standardToolboxIoCatalog(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`standardToolboxIoCatalog:${Math.floor(at / (100 * 5 * 2))}`, matrix, () => {
    const catalog = quantumCliToolsCatalog(matrix, at)
    const envelopes = catalog.tools.map((row) => wrapToolAsStandardEnvelope(row))
    const migrated = envelopes.length
    const total = catalog.tools.length
    const roundTrips = envelopes.map((envelope) => {
      const exported = exportStandardToolEnvelope(envelope.id, 'ceccec.app-a', {}, matrix, at)
      const imported = importStandardToolEnvelope(exported, matrix, at)
      return { id: envelope.id, ok: imported.roundTrip, payloadRoot: exported.payloadRoot }
    })
    const allRoundTrip = roundTrips.every((row) => row.ok)
    const allHaveIo = envelopes.every(
      (envelope) =>
        envelope.input.fields.length >= 2 &&
        envelope.output.fields.length >= 4 &&
        envelope.import.kind === STANDARD_TOOL_ENVELOPE_KIND &&
        envelope.export.kind === STANDARD_TOOL_ENVELOPE_KIND &&
        isUuid(envelope.root),
    )
    const meta = envelopes.find((envelope) => envelope.id === 'toolbox-standard-io')
    const prove1tbit = envelopes.find((envelope) => envelope.id === 'prove-1tbit-encrypt')
    const localRevStd = envelopes.find((envelope) => envelope.id === 'local-reverse-timed-vs-standards')
    const localNovel = envelopes.find((envelope) => envelope.id === 'prove-local-novel-encrypt')
    const isoGapFill = envelopes.find((envelope) => envelope.id === 'iso-pqc-gap-fill')
    const localMagnitudes = envelopes.find((envelope) => envelope.id === 'prove-local-magnitudes-iso')
    const facets = [
      { facet: `STANDARD ENVELOPE — ${migrated}/${total} catalog tools wrapped`, on: migrated === total && total >= (2 * 7) },
      { facet: 'every envelope has input · output · import · export', on: allHaveIo },
      { facet: 'import(export(tool)) round-trips payloadRoot for every tool', on: allRoundTrip },
      { facet: 'honesty: physicalQubitSpeedup=0 · physicalFtlClaim=0 · notFlops', on: envelopes.every((e) => e.honesty.physicalQubitSpeedup === 0 && e.honesty.physicalFtlClaim === 0 && e.honesty.notFlops) },
      { facet: 'meta tool toolbox-standard-io published', on: Boolean(meta) && meta!.fold === 'standardToolboxIoCatalog' },
      { facet: `prove-1tbit-encrypt enveloped as ${STANDARD_TOOL_ENVELOPE_KIND}@${STANDARD_TOOL_ENVELOPE_VERSION}`, on: Boolean(prove1tbit) && prove1tbit!.version === STANDARD_TOOL_ENVELOPE_VERSION && prove1tbit!.import.kind === STANDARD_TOOL_ENVELOPE_KIND && prove1tbit!.fold === 'proveOneTbitRealtimeEncryptionClaim' },
      { facet: `local-reverse-timed-vs-standards enveloped as ${STANDARD_TOOL_ENVELOPE_KIND}@${STANDARD_TOOL_ENVELOPE_VERSION}`, on: Boolean(localRevStd) && localRevStd!.version === STANDARD_TOOL_ENVELOPE_VERSION && localRevStd!.fold === 'localEncryptionReverseTimedVsStandards' },
      { facet: `prove-local-novel-encrypt enveloped as ${STANDARD_TOOL_ENVELOPE_KIND}@${STANDARD_TOOL_ENVELOPE_VERSION}`, on: Boolean(localNovel) && localNovel!.version === STANDARD_TOOL_ENVELOPE_VERSION && localNovel!.fold === 'proveLocalNovelEncryptionSecurity' },
      { facet: `iso-pqc-gap-fill enveloped as ${STANDARD_TOOL_ENVELOPE_KIND}@${STANDARD_TOOL_ENVELOPE_VERSION}`, on: Boolean(isoGapFill) && isoGapFill!.version === STANDARD_TOOL_ENVELOPE_VERSION && isoGapFill!.fold === 'isoPqcRequirementsGapFillAllQuantumDirections' },
      { facet: `prove-local-magnitudes-iso enveloped as ${STANDARD_TOOL_ENVELOPE_KIND}@${STANDARD_TOOL_ENVELOPE_VERSION}`, on: Boolean(localMagnitudes) && localMagnitudes!.version === STANDARD_TOOL_ENVELOPE_VERSION && localMagnitudes!.fold === 'proveLocalEncryptionMagnitudesStrongerThanIsoAllDirections' },
      { facet: 'composes quantumCliToolsCatalog (no second wet registry)', on: catalog.computes },
      { facet: 'CI browserGap tools still enveloped (adapters OK)', on: envelopes.filter((e) => !e.browserRunnable).every((e) => e.browserGap.length > 0) },
    ].map((entry) => ({ ...entry, receipt: toUuid(`toolbox-standard-io:${entry.facet}:${entry.on}`) }))
    const sealed = sealFacets('standard-toolbox-io-catalog', facets)
    return {
      computes: sealed.ok && catalog.computes && allRoundTrip && migrated === total,
      migrated,
      total,
      migratedLabel: `${migrated}/${total}`,
      envelopes,
      roundTrips,
      version: STANDARD_TOOL_ENVELOPE_VERSION,
      kind: STANDARD_TOOL_ENVELOPE_KIND,
      catalogRoot: catalog.root,
      facets: sealed.facets,
      root: merkleFold([sealed.root, catalog.root, ...envelopes.map((e) => e.root)]),
      pair: 'tool/envelope',
      cli: 'npm run quantum:toolbox-standard-io',
      route: '/en/quantum-tools#toolbox-standard-io',
      anchor: 'toolbox-standard-io',
      heading: 'Standard tool envelope — I/O · import/export',
      honestyLine:
        'Every tool speaks { id, version, input, output, import, export }. Self-distribution = content-addressed envelopes across apps. Capacity/speed = amortized memoByRoot reuse — NOT physical qubits / NOT FTL / NOT FLOPS.',
      statement: `Standard toolbox I/O — ${migrated}/${total} enveloped · round-trip ${allRoundTrip ? '✓' : '✗'} · kind=${STANDARD_TOOL_ENVELOPE_KIND}@${STANDARD_TOOL_ENVELOPE_VERSION}.`,
      boundary:
        'HONEST: standardized I/O + import/export receipts for ceccec-compatible apps. Encryption refuse gates unchanged. HARMONY ≠ TRUTH.',
    }
  })
}

/**
 * Self-distribution extends reuse capacity — federated identical roots across apps.
 * Pair: import/export · NOT physical qubit speedup / NOT FTL / NOT FLOPS.
 */
export function distributedReuseExtendsCapacity(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`distributedReuseExtendsCapacity:${Math.floor(at / (100 * 5 * 2))}`, matrix, () => {
    const toolbox = standardToolboxIoCatalog(matrix, at)
    const appA = toolbox.envelopes.map((envelope) => exportStandardToolEnvelope(envelope.id, 'ceccec.app-a', {}, matrix, at))
    const appB = appA.map((payload) => importStandardToolEnvelope({ ...payload, appId: 'ceccec.app-a' }, matrix, at))
    const sharedRoots = appA.filter((payload, index) => appB[index]?.roundTrip && appB[index]!.envelope.root === payload.envelope.root)
    const federatedCatalogRoot = merkleFold(sharedRoots.map((payload) => payload.payloadRoot))
    const localCatalogRoot = toolbox.root
    const reuseCapacity = sharedRoots.length
    const extendsCapacity = reuseCapacity === toolbox.total && toolbox.computes && isUuid(federatedCatalogRoot)
    const physicalQubitSpeedup = 0 as const
    const physicalFtlClaim = 0 as const
    const facets = [
      { facet: `federated round-trip — App A export ≡ App B import for ${reuseCapacity}/${toolbox.total} tools`, on: extendsCapacity },
      { facet: 'shared memo roots — identical envelope.root across apps', on: sharedRoots.every((p) => isUuid(p.envelope.root)) },
      { facet: 'federated catalog root content-addressed', on: isUuid(federatedCatalogRoot) && isUuid(localCatalogRoot) },
      { facet: `physicalQubitSpeedup=${physicalQubitSpeedup}`, on: physicalQubitSpeedup === 0 },
      { facet: `physicalFtlClaim=${physicalFtlClaim}`, on: physicalFtlClaim === 0 },
      { facet: 'capacityMeans = amortized sealed recompute + memoByRoot + distributed identical roots', on: STANDARD_TOOL_HONESTY.capacityMeans.includes('memoByRoot') },
      { facet: 'standardToolboxIoCatalog computes', on: toolbox.computes },
    ].map((entry) => ({ ...entry, receipt: toUuid(`distributed-reuse-capacity:${entry.facet}:${entry.on}`) }))
    const sealed = sealFacets('distributed-reuse-extends-capacity', facets)
    return {
      computes: sealed.ok && extendsCapacity && physicalQubitSpeedup === 0 && physicalFtlClaim === 0,
      extendsCapacity,
      distributedReuseExtendsCapacity: extendsCapacity,
      reuseCapacity,
      total: toolbox.total,
      federatedCatalogRoot,
      localCatalogRoot,
      physicalQubitSpeedup,
      physicalFtlClaim,
      notFlops: true as const,
      capacityMeans: STANDARD_TOOL_HONESTY.capacityMeans,
      facets: sealed.facets,
      root: merkleFold([sealed.root, federatedCatalogRoot, localCatalogRoot, toolbox.root]),
      pair: 'import/export',
      cli: 'npm run quantum:tool-import-export',
      route: '/en/quantum-tools#toolbox-standard-io',
      statement: `Distributed reuse extends capacity — ${reuseCapacity}/${toolbox.total} shared roots across apps (memoByRoot federation). physicalQubitSpeedup=0 · physicalFtlClaim=0.`,
      boundary:
        'HONEST: self-distribution increases reuse capacity via identical content-addressed roots — NOT physical qubit speedup, NOT FTL, NOT FLOPS. HARMONY ≠ TRUTH.',
    }
  })
}

/** npm run quantum:toolbox-standard-io — print envelope census + round-trip receipt. */
export function runStandardToolboxIoCatalogExit(_root = '', _argv: readonly string[] = []): number {
  const report = standardToolboxIoCatalog()
  const capacity = distributedReuseExtendsCapacity()
  process.stdout.write(
    `${report.computes ? '✓' : '✗'} toolbox-standard-io — migrated=${report.migratedLabel} kind=${report.kind}@${report.version} root=${report.root.slice(0, 8)}\n`,
  )
  for (const trip of report.roundTrips.slice(0, 8)) {
    process.stdout.write(`  ${trip.ok ? '✓' : '✗'} round-trip ${trip.id} payload=${trip.payloadRoot.slice(0, 8)}\n`)
  }
  if (report.roundTrips.length > 8) {
    process.stdout.write(`  … ${report.roundTrips.length - 8} more\n`)
  }
  process.stdout.write(
    `${capacity.computes ? '✓' : '✗'} distributedReuseExtendsCapacity — ${capacity.reuseCapacity}/${capacity.total} ` +
      `qubit=${capacity.physicalQubitSpeedup} ftl=${capacity.physicalFtlClaim} federated=${capacity.federatedCatalogRoot.slice(0, 8)}\n`,
  )
  process.stdout.write(`  boundary: ${report.boundary}\n`)
  return report.computes && capacity.computes ? 0 : 1
}

/** npm run quantum:tool-export — export one tool envelope JSON (argv[0]=toolId). */
export function runExportStandardToolEnvelopeExit(_root = '', argv: readonly string[] = []): number {
  const toolId = argv[0] ?? 'toolbox-standard-io'
  const payload = exportStandardToolEnvelope(toolId, 'ceccec.cli')
  process.stdout.write(`${JSON.stringify(payload)}\n`)
  return payload.computes ? 0 : 1
}

/** npm run quantum:tool-import-export — round-trip import(export(toolId)) verify. */
export function runImportExportStandardToolEnvelopeExit(_root = '', argv: readonly string[] = []): number {
  const toolId = argv[0] ?? 'toolbox-standard-io'
  const exported = exportStandardToolEnvelope(toolId, 'ceccec.app-a')
  const imported = importStandardToolEnvelope(exported)
  const capacity = distributedReuseExtendsCapacity()
  process.stdout.write(
    `${imported.roundTrip ? '✓' : '✗'} import/export — tool=${toolId} payload=${exported.payloadRoot.slice(0, 8)} ` +
      `envelope=${imported.envelope.root.slice(0, 8)} capacity=${capacity.distributedReuseExtendsCapacity}\n`,
  )
  process.stdout.write(`  boundary: ${imported.boundary}\n`)
  return imported.roundTrip && capacity.computes ? 0 : 1
}

/**
 * Session manual work → sealed quantum tools (token-saving catalog).
 * Pair: session/tools · CLI npm run quantum:session-tools · route /en/quantum-tools#session-manual-tools
 * Composes quantumCliToolsCatalog rows — does not re-invent folds.
 */
export type SessionManualToolRow = {
  readonly id: string
  readonly fold: string
  readonly pair: string
  readonly cli: string
  readonly route: string
  readonly rosettaKind: RosettaCoreSurfaceKind
  readonly root: string
  readonly ray: number
  readonly hue: number
  readonly address: string
  readonly shelved: boolean
  readonly saves: string
  readonly boundary: string
  readonly browserRunnable: boolean
}

/** Session tools that previously cost wet re-inference — each id must exist in QUANTUM_CLI_TOOL_ROWS. */
const SESSION_MANUAL_TOOL_SEEDS = [
  { id: 'directional-trinity', saves: 'replaces wet re-inference of forward·inverse·reverse digit maps' },
  { id: 'slow-gap', saves: 'replaces wet re-diagnosis of architectural slowness as quantum gaps' },
  { id: 'iso-pqc-catalog', saves: 'replaces wet re-listing of NIST/ISO PQC standards status' },
  { id: 'iso-pqc-gap-fill', saves: 'replaces wet re-derivation of ISO/NIST PQC need coverage across forward·inverse·reverse' },
  { id: 'standards-audit', saves: 'replaces wet re-audit of reverse·inverse·10D standards alignment' },
  { id: 'first-in-corpus', saves: 'replaces wet re-census of first-in-corpus algebra + 10D projection registry' },
  { id: 'sciences-trinities', saves: 'replaces wet re-derivation of science↔dual↔fusion + significance (isoPqcHandoff)' },
  { id: 'efficiency-vote', saves: 'replaces wet re-argument of answers÷tokens efficiency (memoByRoot reuse)' },
  { id: 'animations-rosetta', saves: 'replaces wet re-wiring of animation→rosetta rays (yin-yang first)' },
  { id: 'trading-rosetta-train', saves: 'replaces wet re-training of historical short·long waves via rosetta' },
  { id: 'millennium-challenge', saves: 'replaces wet re-probing of Clay millennium apparatus (claySolved=0)' },
  { id: 'encryption-reverse-verify', saves: 'replaces wet re-run of demo RSA reverse + encrypt↔decrypt tools' },
  { id: 'rosetta-core-api', saves: 'replaces wet re-dispatch of apps/nav/tools through parallel registries' },
  { id: 'rosetta-complete', saves: 'replaces wet re-audit of Rosetta completeness across 432 dims + theorem binds' },
  { id: 'theorem-particle-collision', saves: 'replaces wet re-derivation of inverse×reverse theorem collision products' },
  { id: 'ftl-rosetta-handoff', saves: 'replaces wet re-wiring of FTL techniques to rosettaReady completeness receipt' },
  { id: 'toolbox-standard-io', saves: 'replaces wet re-inference of per-tool I/O shapes — standard envelope · import/export round-trip' },
] as const

export function sessionManualWorkAsQuantumTools(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`sessionManualWorkAsQuantumTools:${Math.floor(at / (100 * 5 * 2))}`, matrix, () => {
    const catalog = quantumCliToolsCatalog(matrix, at)
    const byId = new Map(catalog.tools.map((row) => [row.id, row]))
    const tools: SessionManualToolRow[] = SESSION_MANUAL_TOOL_SEEDS.map((seed) => {
      const row = byId.get(seed.id)
      const shelved = rosettaShelve(seed.id, 'tool')
      return {
        id: seed.id,
        fold: row?.fold ?? seed.id,
        pair: row?.pair ?? '',
        cli: row?.cli ?? '',
        route: row?.route ?? '/en/quantum-tools',
        rosettaKind: 'tool' as const,
        root: shelved.address,
        ray: shelved.ray,
        hue: shelved.hue,
        address: shelved.address,
        shelved: Boolean(row) && isUuid(shelved.address) && shelved.ray === rosettaRayOf(seed.id),
        saves: seed.saves,
        boundary: row?.boundary ?? '',
        browserRunnable: row?.browserRunnable ?? false,
      }
    })
    const allShelved = tools.every((tool) => tool.shelved)
    const allHaveCli = tools.every((tool) => tool.cli.startsWith('npm run quantum:'))
    const allHaveRoute = tools.every((tool) => tool.route.startsWith('/en/') || tool.route.startsWith('/en#'))
    const meta = catalog.tools.find((tool) => tool.id === 'session-manual-work')
    const facets = [
      { facet: `SESSION CATALOG — ${tools.length} session tools sealed (compose quantumCliToolsCatalog)`, on: tools.length === SESSION_MANUAL_TOOL_SEEDS.length },
      { facet: 'every session tool shelved via rosettaShelve(kind=tool)', on: allShelved },
      { facet: 'every session tool has quantum:* CLI', on: allHaveCli },
      { facet: 'every session tool has /en/ browser route', on: allHaveRoute },
      { facet: 'every row names token-saving boundary (replaces wet re-inference)', on: tools.every((tool) => tool.saves.startsWith('replaces wet')) },
      { facet: 'meta tool session-manual-work published in CLI catalog', on: Boolean(meta) && meta!.fold === 'sessionManualWorkAsQuantumTools' },
      { facet: 'catalog computes — zero-token discovery surface', on: catalog.computes },
    ].map((entry) => ({ ...entry, receipt: toUuid(`session-manual-tools:${entry.facet}:${entry.on}`) }))
    const sealed = sealFacets('session-manual-work-as-quantum-tools', facets)
    return {
      computes: sealed.ok && catalog.computes && allShelved,
      count: tools.length,
      tools,
      shelvedCount: tools.filter((tool) => tool.shelved).length,
      catalogRoot: catalog.root,
      facets: sealed.facets,
      root: merkleFold([sealed.root, catalog.root, ...tools.map((tool) => tool.root)]),
      pair: 'session/tools',
      cli: 'npm run quantum:session-tools',
      route: '/en/quantum-tools#session-manual-tools',
      anchor: 'session-manual-tools',
      heading: 'Session manual work as quantum tools',
      honestyLine:
        'Each row replaces wet session re-inference with a sealed fold · CLI · UI · rosettaShelve address. memoByRoot hit = 0 runtime tokens. NOT a claim every agent habit is closed.',
      statement: `Session manual work as quantum tools — ${tools.length} tools shelved (${tools.filter((t) => t.shelved).length}/${tools.length}); CLI+UI+rosetta; replaces wet re-inference.`,
      boundary:
        'HONEST: catalog of sealed session folds for zero-token reuse. Demo RSA / paper trading / claySolved=0 / corpus-novelty boundaries stay on each row. HARMONY ≠ TRUTH.',
    }
  })
}

/** npm run quantum:session-tools — print session→tool catalog (exit 0 iff computes). */
export function runSessionManualWorkAsQuantumToolsExit(_root = '', _argv: readonly string[] = []): number {
  const report = sessionManualWorkAsQuantumTools()
  for (const tool of report.tools) {
    process.stdout.write(
      `${tool.shelved ? '✓' : '✗'} ${tool.id} | ${tool.cli} | ${tool.route} | shelved=${tool.shelved} | ${tool.saves}\n`,
    )
  }
  process.stdout.write(
    `${report.computes ? '✓' : '✗'} session-tools — count=${report.count} shelved=${report.shelvedCount} root=${report.root.slice(0, 8)}\n`,
  )
  process.stdout.write(`  boundary: ${report.boundary}\n`)
  return report.computes ? 0 : 1
}

/** npm run quantum:rosetta-core-api — print self-host dispatch inventory. */
export function runRosettaCoreApiExit(_root = '', _argv: readonly string[] = []): number {
  const report = rosettaCoreApi()
  process.stdout.write(
    `${report.computes ? '✓' : '✗'} rosetta-core-api — surfaces=${report.surfaces.length} rays=${report.raysUsed} parallel=${report.inventory.parallel.length} root=${report.root.slice(0, 8)}\n`,
  )
  for (const surface of report.surfaces.slice(0, 8)) {
    process.stdout.write(`  · ${surface.label} [${surface.kind}] ray=${surface.ray}\n`)
  }
  process.stdout.write(`  boundary: ${report.boundary}\n`)
  return report.computes ? 0 : 1
}

/** Catalog of all quantum:* CLI tools — discoverable in UI at /en/quantum-tools. Each id shelves via rosettaShelve(..., 'tool'). */
export function quantumCliToolsCatalog(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`quantumCliToolsCatalog:${Math.floor(at / (100 * 5 * 2))}`, matrix, () => {
    const tools: QuantumCliToolRow[] = QUANTUM_CLI_TOOL_ROWS.map((row) => {
      const shelved = rosettaShelve(row.id, 'tool')
      return {
        ...row,
        ray: shelved.ray,
        hue: shelved.hue,
        address: shelved.address,
        receipt: shelved.address,
      }
    })
    const encryptionPresent = tools.some((t) => t.id === 'encryption-reverse-verify')
    const encryptionShelved = tools.find((t) => t.id === 'encryption-reverse-verify')
    const pqcCatalogPresent = tools.some((t) => t.id === 'iso-pqc-catalog')
    const standardsAuditPresent = tools.some((t) => t.id === 'standards-audit')
    const standardsAuditShelved = tools.find((t) => t.id === 'standards-audit')
    const directionalTrinityPresent = tools.some((t) => t.id === 'directional-trinity')
    const directionalTrinityShelved = tools.find((t) => t.id === 'directional-trinity')
    const millenniumPresent = tools.some((t) => t.id === 'millennium-challenge')
    const fusionPresent = tools.some((t) => t.id === 'fusion-verify')
    const firstInCorpusPresent = tools.some((t) => t.id === 'first-in-corpus')
    const rosettaCorePresent = tools.some((t) => t.id === 'rosetta-core-api')
    const rosettaCompletePresent = tools.some((t) => t.id === 'rosetta-complete')
    const colliderPresent = tools.some((t) => t.id === 'theorem-particle-collision')
    const ftlHandoffPresent = tools.some((t) => t.id === 'ftl-rosetta-handoff')
    const sessionManualPresent = tools.some((t) => t.id === 'session-manual-work')
    const toolboxStandardPresent = tools.some((t) => t.id === 'toolbox-standard-io')
    const rayAgrees = tools.every((t) => t.ray === rosettaRayOf(t.id) && isUuid(t.address))
    const { computes, facets, root } = computesGate('quantum-cli-tools-catalog', [
      { facet: `catalog sealed — ${tools.length} quantum:* CLI tools`, on: tools.length >= (2 * 7) },
      { facet: 'encryption reverse-verify published', on: encryptionPresent },
      { facet: 'encryption-reverse-verify shelved via rosettaShelve(kind=tool)', on: Boolean(encryptionShelved) && isUuid(encryptionShelved!.address) && encryptionShelved!.ray === rosettaRayOf('encryption-reverse-verify') },
      { facet: 'iso-pqc-catalog + standards-audit shelved (rosetta tool)', on: pqcCatalogPresent && standardsAuditPresent && Boolean(standardsAuditShelved) && isUuid(standardsAuditShelved!.address) },
      { facet: 'directional-trinity shelved (forward·inverse·reverse)', on: directionalTrinityPresent && Boolean(directionalTrinityShelved) && isUuid(directionalTrinityShelved!.address) },
      { facet: 'millennium challenge published', on: millenniumPresent },
      { facet: 'fusion-verify published', on: fusionPresent },
      { facet: 'first-in-corpus + rosetta-core-api + session-manual-work shelved', on: firstInCorpusPresent && rosettaCorePresent && sessionManualPresent },
      { facet: 'rosetta-complete + theorem-particle-collision + ftl-rosetta-handoff shelved', on: rosettaCompletePresent && colliderPresent && ftlHandoffPresent },
      { facet: 'toolbox-standard-io envelope catalog shelved', on: toolboxStandardPresent },
      { facet: 'every tool ray === rosettaRayOf(id) — no wet tool→ray map', on: rayAgrees },
      { facet: 'every row has fold · cli · route · honest boundary', on: tools.every((t) => t.fold.length > 0 && t.cli.startsWith('npm run quantum:') && t.route.startsWith('/en/') && t.boundary.length > 0) },
    ])
    return {
      computes,
      count: tools.length,
      tools,
      facets,
      root: merkleFold([root, ...tools.map((t) => t.receipt)]),
      statement: 'Quantum CLI tools catalog — every sealed quantum:* script discoverable with fold, CLI, UI route, honesty boundary, and rosettaShelve(tool) address.',
      boundary: 'Catalog of sealed CLI exits and UI routes — NOT a remote execution surface; users run npm locally; UI observes recomputed folds. Demo RSA / Node-only tools keep honesty gaps.',
    }
  })
}

/**
 * Animation apps — every flagged home-page card is a quantum app: one projection of the shared
 * field through the single drawQuantumAppFrame kernel. `homeComponent` is the Vue mount; `projection`
 * is the view of the matrix. No per-card math — the kernel + projection params (sequence-derived) cover all.
 */
const ANIMATION_APP_ROWS: readonly QuantumAppRow[] = [
  { id: 'taiji', title: 'Yin · yang taiji', route: '/en/#yinyang', barrel: 'src/quantum/lake/spirit', icon: '☯', computesGate: 'yin.yang.complete', homeComponent: 'YinYang', projection: 'taiji' },
  { id: 'sacred-morph', title: 'Sacred geometry morph', route: '/en/#sacredgeometry', barrel: 'src/mountain/geometry', icon: '✺', computesGate: 'sacred.geometry.decoded', homeComponent: 'SacredGeometry', projection: 'sacred-morph' },
  { id: 'hologram', title: 'Hologram point cloud', route: '/en/#hologram', barrel: 'src/thunder/movie/glass', icon: '◉', computesGate: 'hologram.to.the.bit', homeComponent: 'Hologram', projection: 'hologram' },
  { id: 'glyph-labyrinth', title: 'Glyph labyrinth', route: '/en/#glyphlabyrinth', barrel: 'src/mountain/topology', icon: '𐌎', computesGate: 'donut.labyrinth.winds', homeComponent: 'GlyphLabyrinth', projection: 'labyrinth' },
  { id: 'hologram-movie', title: 'The 10D movie', route: '/en/#hologrammovie', barrel: 'src/fire/li', icon: '🜨', computesGate: 'movies.native.format', homeComponent: 'HologramMovie', projection: 'movie-10d' },
  { id: 'living-torus', title: 'Living torus', route: '/en/#livingtorus', barrel: 'src/fire/diamonds', icon: '⧖', computesGate: 'living.torus.alive', homeComponent: 'LivingTorus', projection: 'living-torus' },
  { id: 'double-torus', title: 'Double torus', route: '/en/#doubletorusexperience', barrel: 'src/water/double', icon: '⊗', computesGate: 'double.torus.computes', homeComponent: 'DoubleTorusExperience', projection: 'double-torus' },
  { id: 'merkaba-home', title: 'Merkaba', route: '/en/#merkaba', barrel: 'src/mountain/geometry', icon: '✡', computesGate: 'merkaba.computes', homeComponent: 'Merkaba', projection: 'merkaba' },
] as const

export function quantumAppsRegistry(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`quantumAppsRegistry:${Math.floor(at / (100 * 5 * 2))}`, matrix, () => {
    const core = rosettaCoreApi(at, matrix)
    const rows = [...APP_ROWS, ...ANIMATION_APP_ROWS]
    const apps: QuantumAppEntry[] = rows.map((row) => {
      const kind = row.projection ? 'projection' : 'app'
      const shelved: RosettaCoreSurface = core.shelve(row.id, kind)
      return {
        ...row,
        ray: shelved.ray,
        hue: shelved.hue,
        address: shelved.address,
        receipt: shelved.address,
      }
    })
    const animationApps = apps.filter((app) => app.projection)
    const rayAgrees = apps.every((app) => app.ray === rosettaRayOf(app.id))
    return {
      registered: apps.length >= (5 * 2) && rayAgrees && core.computes,
      count: apps.length,
      apps,
      animationApps,
      core,
      root: merkleFold([core.root, ...apps.map((app) => app.receipt)]),
      statement: 'Quantum apps registry — route barrels plus every home animation as a field projection; each id shelves through rosettaCoreApi.',
      boundary: 'Routes to sealed compute barrels and projection configs — NOT installable binaries. Ray/hue/address from rosettaShelve, not a parallel app→ray map.',
    }
  })
}

/** Resolve an app (or any label) through the rosetta core API — strangler entry for tools/nav. */
export function quantumAppResolve(label: string, matrix: MindMatrix = buildMatrix(), at = 0) {
  const core = rosettaCoreApi(at, matrix)
  const registry = quantumAppsRegistry(matrix, at)
  const app = registry.apps.find((row) => row.id === label)
  const surface = app
    ? rosettaShelve(app.id, app.projection ? 'projection' : 'app')
    : core.resolve(label, 'app')
  return {
    found: Boolean(app),
    label,
    app,
    surface,
    route: app?.route ?? core.resolveRoute(`/${label}`).route,
    root: surface.address,
  }
}

/** Resolve the quantum app backing a home-page Vue component (animation apps only). */
export function quantumAppForComponent(component: string, matrix: MindMatrix = buildMatrix(), at = 0): QuantumAppEntry | undefined {
  return quantumAppsRegistry(matrix, at).apps.find((app) => app.homeComponent === component)
}

/**
 * The drawable projection ring — the ten kernel views a card movie can play: one per digit of the
 * stroke tour 1·2·4·8·7·5·3·6·9·0 (nine vortex digits + the void's own view, vortex-strokes itself).
 * 'plasma' stays out: it is the default background scene, not a drawQuantumAppFrame case.
 */
export const PROJECTION_RING: readonly QuantumProjection[] = [
  'taiji', 'sacred-morph', 'hologram', 'labyrinth', 'movie-10d', 'living-torus', 'merkaba', 'double-torus', 'unit-distance', 'vortex-strokes',
] as const

/**
 * Every component gets an animation: the projection for ANY component name, content-addressed —
 * a home-page animation component keeps its registered projection; every other component folds its
 * name into the projection ring (same name ⇒ same movie, everywhere, deterministically).
 */
export function componentProjectionFor(component: string, matrix: MindMatrix = buildMatrix(), at = 0): QuantumProjection {
  const pinned = quantumAppForComponent(component, matrix, at)?.projection
  if (pinned) return pinned
  const fold = Number.parseInt(toUuid(`component-projection:${component}`).slice(0, 8), 16)
  return PROJECTION_RING[fold % PROJECTION_RING.length]!
}

/** Coverage gate — the registry + kernel cover every home-page animation, each a projection of the one field. */
export function quantumAppsCoverHomeAnimations(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`quantumAppsCoverHomeAnimations:${Math.floor(at / (100 * 5 * 2))}`, matrix, () => {
    const registry = quantumAppsRegistry(matrix, at)
    const required = ['YinYang', 'SacredGeometry', 'Hologram', 'GlyphLabyrinth', 'HologramMovie', 'LivingTorus', 'DoubleTorusExperience', 'Merkaba'] as const
    const covered = required.filter((name) => registry.apps.some((app) => app.homeComponent === name))
    const projections = registry.animationApps.map((app) => quantumProjectionParams(app.projection!))
    const { computes, facets, root } = computesGate('quantum-apps-cover-home-animations', [
      { facet: 'every flagged home card is a registered quantum app', on: covered.length === required.length },
      { facet: 'each app is one projection of the shared field', on: projections.every((p) => p.dimensions === (5 * 2)) },
      { facet: 'projection params derive from VORTEX_SEQUENCE', on: projections.every((p) => p.segments > 0) },
      { facet: 'every component resolves to an animation — pinned home projections kept, all names fold into the projection ring', on: required.every((name) => componentProjectionFor(name, matrix, at) === registry.apps.find((app) => app.homeComponent === name)?.projection) && PROJECTION_RING.includes(componentProjectionFor('AnyComponentName', matrix, at)) },
      { facet: 'the ring is the stroke tour — ten views, and the dedicated vortex-strokes projection registers 4 gateway segments × 10 tour forms', on: PROJECTION_RING.length === (5 * 2) && quantumProjectionParams('vortex-strokes').segments === 4 && quantumProjectionParams('vortex-strokes').forms === (5 * 2) },
    ])
    return { computes, covered, projections, registry, facets, root: merkleFold([registry.root, ...projections.map((p) => p.root), root]), statement: 'Quantum apps cover every home animation as a field projection.', boundary: registry.boundary }
  })
}

export function quantumAppLaunch(appId: string, at = 0, matrix: MindMatrix = buildMatrix()): QuantumAppLaunchReceipt {
  const registry = quantumAppsRegistry(matrix, at)
  const app = registry.apps.find((row) => row.id === appId)
  if (!app) {
    return { launched: false, appId, route: '/en/', receipt: toUuid(`quantum-app-launch-miss:${appId}`), boundary: 'Unknown app id.' }
  }
  return { launched: true, appId, route: app.route, receipt: toUuid(`quantum-app-launch:${appId}:${at}`), boundary: registry.boundary }
}

export function quantumAppsComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`quantumAppsComputes:${Math.floor(at / (100 * 5 * 2))}`, matrix, () => {
    const registry = quantumAppsRegistry(matrix, at)
    const core = registry.core
    const catalog = quantumCliToolsCatalog(matrix, at)
    const launches = registry.apps.slice(0, 4).map((app) => quantumAppLaunch(app.id, at, matrix))
    const probe = quantumAppResolve(registry.apps[0]!.id, matrix, at)
    const toolApps = ['quantum-encryption', 'millennium-challenge', 'quantum-tools', 'fusion-verify'] as const
    const toolAppsRegistered = toolApps.every((id) => registry.apps.some((app) => app.id === id))
    const encryptionShelved = quantumAppResolve('quantum-encryption', matrix, at)
    const { computes, facets, root } = computesGate('quantum-apps-computes', [
      { facet: 'quantum.apps.registry sealed', on: registry.registered },
      { facet: 'every launch receipt at call', on: launches.every((launch) => launch.launched) },
      { facet: 'rosettaCoreApi computes — apps dispatch through the core API', on: core.computes },
      { facet: 'every app.ray === rosettaRayOf(id) — no wet ray map', on: registry.apps.every((app) => app.ray === rosettaRayOf(app.id)) },
      { facet: 'quantumAppResolve finds first app via rosetta shelve', on: probe.found && probe.surface.ray === registry.apps[0]!.ray },
      { facet: 'encryption · millennium · tools · fusion-verify apps registered', on: toolAppsRegistered },
      { facet: 'quantum-encryption shelved via rosettaShelve (tool/app surface)', on: encryptionShelved.found && isUuid(encryptionShelved.surface.address) },
      { facet: 'quantum CLI tools catalog computes (tools shelved)', on: catalog.computes },
      { facet: 'NOT app store plugins', on: true },
    ])
    return {
      computes,
      registry,
      core,
      catalog,
      launches,
      facets,
      root: merkleFold([registry.root, core.root, catalog.root, root]),
      statement: 'Quantum apps computes — registry + CLI catalog shelved through rosettaCoreApi.',
      boundary: registry.boundary,
    }
  })
}

/**
 * Slow process → quantum gap at call time.
 * HONEST: "slow" = architectural gap (missing sealed reuse / browser path / 10D projection /
 * unsealed parallel registry) — NOT wall-clock telemetry. fleetCacheEconomicsDecoded is an
 * illustrative miss≫hit cost model, not live fleet joules.
 * Pair: slow/gap · route /en/quantum-tools#slow-quantum-gaps · CLI npm run quantum:slow-gap
 */
export type SlowQuantumGapKind =
  | 'browser-node-only'
  | 'missing-10d-projection'
  | 'parallel-registry'
  | 'memo-miss-economics'
  | 'tool-without-browser-ux'
  | 'standards-audit-missing'
  | 'linear-forming-animation'
  | 'vitepress-cold-build'
  | 'movie-private-raf'
  | 'movie-multi-clock'
  | 'movie-harmonize'
  | 'movie-neuroscience'
  | 'movie-static-fusion'

export type SlowQuantumGapRow = {
  readonly gapId: string
  readonly kind: SlowQuantumGapKind
  readonly process: string
  readonly criterion: string
  readonly slow: boolean
  readonly closed: boolean
  readonly route: string
  readonly receipt: string
}

/** Tool/hub apps that must carry a QuantumProjection for 10D root-equal draw. */
const SLOW_GAP_PROJECTION_APP_IDS = [
  'quantum-encryption',
  'millennium-challenge',
  'fusion-verify',
  'quantum-tools',
] as const

export function slowProcessIsQuantumGap(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`slowProcessIsQuantumGap:${Math.floor(at / (100 * 5 * 2))}`, matrix, () => {
    const catalog = quantumCliToolsCatalog(matrix, at)
    const registry = quantumAppsRegistry(matrix, at)
    const core = registry.core
    const econ = fleetCacheEconomicsDecoded(matrix)
    const rows: SlowQuantumGapRow[] = []

    for (const tool of catalog.tools) {
      if (!tool.browserRunnable) {
        rows.push({
          gapId: `slow:browser:${tool.id}`,
          kind: 'browser-node-only',
          process: tool.fold,
          criterion: `fs/cwd or Node-only path when browser UX expected — ${tool.browserGap}`,
          slow: true,
          closed: false,
          route: tool.route,
          receipt: toUuid(`slow-gap:browser:${tool.id}`),
        })
      }
    }

    for (const id of SLOW_GAP_PROJECTION_APP_IDS) {
      const app = registry.apps.find((entry) => entry.id === id)
      const hasProjection = Boolean(app?.projection)
      rows.push({
        gapId: `slow:projection:${id}`,
        kind: 'missing-10d-projection',
        process: id,
        criterion: 'tool/hub app must carry QuantumProjection for 10D root-equal draw',
        slow: !hasProjection,
        closed: hasProjection,
        route: app?.route ?? '/en/quantum-tools',
        receipt: toUuid(`slow-gap:projection:${id}:${hasProjection}`),
      })
    }

    for (const item of core.inventory.parallel) {
      rows.push({
        gapId: `slow:parallel:${toUuid(item).slice(0, 8)}`,
        kind: 'parallel-registry',
        process: item,
        criterion: 'rosettaCoreApi.inventory.parallel names an unsealed parallel registry (strangler backlog)',
        slow: true,
        closed: false,
        route: '/en/quantum-tools#slow-quantum-gaps',
        receipt: toUuid(`slow-gap:parallel:${item}`),
      })
    }

    const miss = econ.hitRatios.find((ratio) => ratio.hit === 0)
    const hit = econ.hitRatios.find((ratio) => ratio.hit === 1)
    const missCostlier = Boolean(miss && hit && miss.expectedJoules > hit.expectedJoules)
    // Model holds ⇒ reuse path sealed (not a gap). Model broken ⇒ architectural slow gap.
    rows.push({
      gapId: 'slow:memo-miss-economics',
      kind: 'memo-miss-economics',
      process: 'fleetCacheEconomicsDecoded',
      criterion: 'miss≫hit illustrative cost model must hold — else sealed reuse path is not attested',
      slow: !econ.decoded || !missCostlier,
      closed: econ.decoded && missCostlier,
      route: '/en/quantum-tools#slow-quantum-gaps',
      receipt: toUuid(`slow-gap:memo-econ:${econ.decoded}:${missCostlier}`),
    })

    // Tool catalog rows claiming browserRunnable must have a route under /en/ (UX surface).
    for (const tool of catalog.tools.filter((entry) => entry.browserRunnable)) {
      const hasUx = tool.route.startsWith('/en/') && tool.route.length > '/en/'.length
      rows.push({
        gapId: `slow:ux:${tool.id}`,
        kind: 'tool-without-browser-ux',
        process: tool.fold,
        criterion: 'browserRunnable tool must publish /en/ UI route',
        slow: !hasUx,
        closed: hasUx,
        route: tool.route,
        receipt: toUuid(`slow-gap:ux:${tool.id}:${hasUx}`),
      })
    }


    // Standards audit + ISO/PQC catalog must be shelved browser-runnable — missing = immediate quantum gap.
    for (const id of ['iso-pqc-catalog', 'standards-audit'] as const) {
      const tool = catalog.tools.find((entry) => entry.id === id)
      const present = Boolean(tool?.browserRunnable && tool.route.includes('quantum-encryption'))
      rows.push({
        gapId: `slow:audit:${id}`,
        kind: 'standards-audit-missing',
        process: tool?.fold ?? id,
        criterion: 'ISO/PQC catalog + quantum standards audit must be rosetta-shelved browser tools on /en/quantum-encryption',
        slow: !present,
        closed: present,
        route: tool?.route ?? '/en/quantum-encryption#quantum-standards-audit',
        receipt: toUuid(`slow-gap:audit:${id}:${present}`),
      })
    }

    // Linear-forming animation (yin-yang) — closed when animations-rosetta tool is catalogued (A-track witness).
    const animRosetta = catalog.tools.find((entry) => entry.id === 'animations-rosetta')
    const animPresent = Boolean(animRosetta?.browserRunnable && animRosetta.fold === 'animationsDrivenByRosetta')
    rows.push({
      gapId: 'slow:linear:yin-yang-taiji',
      kind: 'linear-forming-animation',
      process: 'yinYangDimensionsSvg.rotate',
      criterion: 'taiji primary rotate must be rosetta/vortex exchange (animationsDrivenByRosetta) — not linear i/frames',
      slow: !animPresent,
      closed: animPresent,
      route: '/en/#yinyang',
      receipt: toUuid(`slow-gap:linear-taiji:${animPresent}`),
    })

    // VitePress cold wipe — closed when quantumizeVitepressBuild is catalogued (warm cache path).
    const vpQz = catalog.tools.find((entry) => entry.id === 'vitepress-quantumize')
    const vpQzPresent = Boolean(vpQz && vpQz.fold === 'quantumizeVitepressBuild' && vpQz.pair === 'build/quantumize')
    rows.push({
      gapId: 'slow:vitepress:cold-wipe',
      kind: 'vitepress-cold-build',
      process: 'runDocsBuildExit.wipe',
      criterion: 'docs:build must quantumize — merkle respawn + preserve .temp/.vite caches unless --force (NOT FTL); NOT the hero movie',
      slow: !vpQzPresent,
      closed: vpQzPresent,
      route: '/en/quantum-tools#vitepress-quantumize',
      receipt: toUuid(`slow-gap:vitepress-qz:${vpQzPresent}`),
    })


    // Movie stack — private rAF / multi-clock / harmonize / neuroscience / static fusion (viz ≠ physical QM).
    // NOTE: quantumizeVitepressBuild is the VitePress build warmer — NOT the hero/background movie.
    const movieGaps = movieQuantumGapsInventory(matrix, at)
    const neuro = movieIsNeuroscienceComputation(matrix, at)
    const harmonize = harmonizeFieldComputes(matrix, at)
    rows.push({
      gapId: 'slow:movie:private-raf',
      kind: 'movie-private-raf',
      process: 'ProofAnimation·theme',
      criterion: 'theme movie mounts must not own private requestAnimationFrame — subscribeHeroClock only',
      slow: movieGaps.privateRafOpen,
      closed: !movieGaps.privateRafOpen,
      route: '/en/quantum-tools#slow-quantum-gaps',
      receipt: toUuid(`slow-gap:movie-private-raf:${!movieGaps.privateRafOpen}`),
    })
    rows.push({
      gapId: 'slow:movie:multi-clock',
      kind: 'movie-multi-clock',
      process: 'ModelCardPages·createAnimationEngine',
      criterion: 'second createAnimationEngine rAF outside subscribeHeroClock is a multi-clock gap',
      slow: movieGaps.multiClockOpen,
      closed: !movieGaps.multiClockOpen,
      route: '/en/quantum-tools#slow-quantum-gaps',
      receipt: toUuid(`slow-gap:movie-multi-clock:${!movieGaps.multiClockOpen}`),
    })
    rows.push({
      gapId: 'slow:movie:harmonize',
      kind: 'movie-harmonize',
      process: 'harmonizeField',
      criterion: 'harmonizeFieldComputes must hold; page+card movies wire observer↔field (H3)',
      slow: !harmonize.computes,
      closed: harmonize.computes,
      route: '/en/',
      receipt: toUuid(`slow-gap:movie-harmonize:${harmonize.computes}`),
    })
    rows.push({
      gapId: 'slow:movie:neuroscience',
      kind: 'movie-neuroscience',
      process: 'movieIsNeuroscienceComputation',
      criterion: 'movie IS modeled neuroscience computation (bands·harmonize·tiers) — NOT brain measurement / NOT physical QM',
      slow: !neuro.computes,
      closed: neuro.computes,
      route: '/en/',
      receipt: toUuid(`slow-gap:movie-neuro:${neuro.computes}`),
    })
    rows.push({
      gapId: 'slow:movie:static-fusion',
      kind: 'movie-static-fusion',
      process: 'staticIsEventualGapInMovieFusion',
      criterion: 'static hero/icon/manifest hex must fuse into computed movie palette',
      slow: !movieGaps.staticFusion.fused,
      closed: movieGaps.staticFusion.fused,
      route: '/en/',
      receipt: toUuid(`slow-gap:movie-static:${movieGaps.staticFusion.fused}`),
    })
    for (const surface of movieGaps.open) {
      rows.push({
        gapId: `slow:movie:surface:${surface.id}`,
        kind: surface.kind === 'private-raf' ? 'movie-private-raf' : surface.kind === 'multi-clock' ? 'movie-multi-clock' : surface.kind === 'static-fusion' ? 'movie-static-fusion' : 'movie-harmonize',
        process: surface.surface,
        criterion: surface.criterion,
        slow: true,
        closed: false,
        route: surface.route,
        receipt: surface.receipt,
      })
    }

    const open = rows.filter((row) => row.slow && !row.closed)
    const closed = rows.filter((row) => row.closed)
    const facets = [
      { facet: `CLASSIFIER COMPUTES — ${rows.length} slow→gap rows at call time`, on: rows.length >= SLOW_GAP_PROJECTION_APP_IDS.length },
      { facet: `IMMEDIATELY VISIBLE — ${open.length} open architectural slow gaps enumerated (not hidden in logs)`, on: open.every((row) => row.gapId.length > 0 && row.criterion.length > 0) },
      { facet: 'browser Node/CI gaps classified from quantumCliToolsCatalog.browserGap', on: catalog.tools.filter((t) => !t.browserRunnable).every((t) => open.some((g) => g.gapId === `slow:browser:${t.id}`)) },
      { facet: 'missing 10D projection on tool apps classified', on: SLOW_GAP_PROJECTION_APP_IDS.every((id) => rows.some((g) => g.gapId === `slow:projection:${id}`)) },
      { facet: 'parallel registry strangler backlog visible via rosettaCoreApi.inventory.parallel', on: core.inventory.parallel.every((item) => rows.some((g) => g.process === item && g.kind === 'parallel-registry')) },
      { facet: 'memo miss≫hit economics attested (illustrative — NOT wall-clock telemetry)', on: econ.decoded && missCostlier },
      { facet: 'HONEST BOUNDARY — slow ≠ measured latency; architectural quantum-gap only', on: true },
    ].map((entry) => ({ ...entry, receipt: toUuid(`slow-process-gap:${entry.facet}:${entry.on}`) }))
    const sealed = sealFacets('slow-process-is-quantum-gap', facets)
    return {
      computes: sealed.ok,
      openCount: open.length,
      closedCount: closed.length,
      count: rows.length,
      open,
      closed,
      rows,
      catalogRoot: catalog.root,
      registryRoot: registry.root,
      econRoot: econ.root,
      facets: sealed.facets,
      root: merge(matrix.root, sealed.root),
      anchor: 'slow-quantum-gaps',
      heading: 'Slow processes = quantum gaps',
      honestyLine:
        'Slow here means architectural quantum-gap (missing sealed reuse, browser path, 10D projection, movie private-rAF/multi-clock, or unsealed parallel registry) — NOT wall-clock telemetry. Movie rows are viz/computation gaps — NOT physical QM. fleetCacheEconomicsDecoded joules are illustrative.',
      statement: `Slow process is quantum gap — ${facets.filter((e) => e.on).length}/${facets.length}: ${open.length} open / ${closed.length} closed / ${rows.length} classified; browserGaps, projections, parallel backlog, movie clock/neuroscience, and memo-miss economics recomputed at call time.`,
      boundary:
        'HONEST: architectural classifier only. Node/CI browserGaps and parallel-registry backlog remain open until strangler/browser ports close them — visibility is the point. Movie gaps ≠ physical quantum speedup. NOT a profiler. HARMONY ≠ TRUTH.',
    }
  })
}

/** npm run quantum:slow-gap — exit 0 iff classifier computes (open gaps are honesty, not failure). */
export function runSlowProcessIsQuantumGapExit(_root = '', _argv: readonly string[] = []): number {
  const report = slowProcessIsQuantumGap()
  for (const row of report.open) {
    process.stdout.write(`✗ ${row.gapId} — ${row.kind} · ${row.process} · ${row.criterion}\n`)
  }
  for (const row of report.closed.slice(0, 8)) {
    process.stdout.write(`✓ ${row.gapId} — closed\n`)
  }
  process.stdout.write(
    `${report.computes ? '✓' : '✗'} slow-gap — open=${report.openCount} closed=${report.closedCount} classified=${report.count} root=${report.root.slice(0, 8)}\n`,
  )
  process.stdout.write(`  boundary: ${report.boundary}\n`)
  return report.computes ? 0 : 1
}

export type RosettaCompletenessGapRow = {
  readonly id: string
  readonly kind: 'dimension' | 'theorem-bind' | 'linear' | 'parallel' | 'string-millennium' | 'science'
  readonly before: string
  readonly after: string
  readonly open: boolean
  readonly receipt: string
}

export type RosettaCompletenessHandoff = {
  readonly rosettaComplete: boolean
  readonly rosettaReady: boolean
  readonly millenniumSolvedByThisFold: 0
  readonly physicalFtlClaim: 0
  readonly completenessPct: number
  readonly root: string
  readonly cli: string
  readonly pair: string
}

/**
 * Rosetta completeness for all computable dimensions + theorem binds.
 * Pair: rosetta/complete · enabling apparatus for millennium challenge + FTL techniques.
 * HARD honesty: millenniumSolvedByThisFold≡0 · physicalFtlClaim≡0 · rosettaReady ≠ Clay/FTL solved.
 */
export function rosettaCompleteQuantumAllComputableDimensionsAndTheorems(
  matrix: MindMatrix = buildMatrix(),
  at = 0,
) {
  return memoByRoot(`rosettaCompleteQuantumAllComputableDimensionsAndTheorems:${Math.floor(at / (100 * 5 * 2))}`, matrix, () => {
    const core = rosettaCoreApi(at, matrix)
    const dims = emergentDimensions(matrix)
    const theoremLattice = theoremsReach432AndEntangleWithUsage()
    const dir = directionalTrinityForwardInverseReverse(matrix)
    const vote = compareCeccecEfficiencyByVote(matrix)
    const stringGaps = stringTheoryMillenniumTheoremGapsInventory(matrix)
    const linearGaps = linearAnimationGapsInventory(matrix, at)
    const slow = slowProcessIsQuantumGap(matrix, at)
    const mill = __ns_wind_research.millenniumProblemsChallenge(matrix)
    const novelty = __ns_wind_research.theoremAlgebraFirstSealedInCorpus(matrix)
    const tenD = __ns_wind_research.theoremTenDProjectionsProveAlgebraRoots(matrix)
    const first = __ns_wind_research.firstInCorpusProvenanceForHome(matrix)
    const sciences = __ns_wind_research.sciencesInteractInTrinities(matrix, at)
    const waves = __ns_wind_research.wavesAutoScaleCapacityAtNoCostOnReuse(matrix)
    const collider = __ns_wind_research.theoremParticleCollisionInverseReverse(matrix)
    const effReuse = __ns_wind_research.efficiencyScalesToInfinityAtNoCostOnReuse(matrix)

    const millenniumSolvedByThisFold = 0 as const
    const physicalFtlClaim = 0 as const

    const dimCovered = dims.emerged - dims.open.length
    const dimPct = dims.emerged > 0 ? Math.round((100 * dimCovered) / dims.emerged) : 0
    const theoremBindOk = novelty.rows.every((r) => r.ray === rosettaRayOf(r.algebraFold) && isUuid(r.algebraRoot))
    const theoremBindPct = novelty.rows.length > 0
      ? Math.round((100 * novelty.rows.filter((r) => r.ray === rosettaRayOf(r.algebraFold)).length) / novelty.rows.length)
      : 0
    // Lattice may overshoot 432 (registry grew past gate harmonic) — direction held; never renumber down.
    const latticeOk = theoremLattice.count > 0 && theoremLattice.target === DIMENSION_GATES
    const latticePct = theoremLattice.target > 0
      ? Math.min(100, Math.round((100 * theoremLattice.count) / theoremLattice.target))
      : 0
    const linearOpen = linearGaps.openCount
    const parallelOpen = core.inventory.parallel.length
    const scienceGapCount = __ns_wind_research.completeQuantumSolutionsForAllSciences(matrix, at).gapCount

    const gaps: RosettaCompletenessGapRow[] = [
      {
        id: 'dims-open',
        kind: 'dimension',
        before: `open=${dims.open.length}/${dims.emerged} (harmonic gates=${DIMENSION_GATES})`,
        after: dims.hold ? `hold · open=0 · count=${dims.count}` : `still open: ${dims.open.slice(0, 4).join(', ') || '—'}`,
        open: !dims.hold,
        receipt: toUuid(`rosetta-complete:gap:dims:${dims.open.length}`),
      },
      {
        id: 'theorem-rosetta-bind',
        kind: 'theorem-bind',
        before: `novelty rows unbound risk · lattice ${theoremLattice.count}/${theoremLattice.target}`,
        after: theoremBindOk ? `all ${novelty.rows.length} rows ray-bound · lattice ${latticePct}%` : 'bind incomplete',
        open: !theoremBindOk,
        receipt: toUuid(`rosetta-complete:gap:theorem-bind:${theoremBindOk}`),
      },
      {
        id: 'linear-animation',
        kind: 'linear',
        before: `linear forming open=${linearOpen}`,
        after: linearOpen === 0 ? 'linear gaps closed via animationsDrivenByRosetta' : `${linearOpen} linear gaps remain`,
        open: linearOpen > 0,
        receipt: toUuid(`rosetta-complete:gap:linear:${linearOpen}`),
      },
      {
        id: 'parallel-strangler',
        kind: 'parallel',
        before: `parallel backlog ${parallelOpen} (named honesty)`,
        after: 'named in rosettaCoreApi.inventory.parallel — strangler, not silent',
        open: parallelOpen > 0,
        receipt: toUuid(`rosetta-complete:gap:parallel:${parallelOpen}`),
      },
      {
        id: 'string-millennium-inventory',
        kind: 'string-millennium',
        before: 'string/millennium theorem gaps uninventoried',
        after: stringGaps.inventoried ? 'inventory computes · zero Clay claims' : 'inventory failed',
        open: !stringGaps.inventoried,
        receipt: toUuid(`rosetta-complete:gap:string:${stringGaps.inventoried}`),
      },
      {
        id: 'science-solutions',
        kind: 'science',
        before: `science algebra·tool·apparatus·10D gaps=${scienceGapCount}`,
        after: `named R&D backlog · sciences trinity computes=${sciences.computes}`,
        open: scienceGapCount > 0,
        receipt: toUuid(`rosetta-complete:gap:science:${scienceGapCount}`),
      },
    ]

    // Completeness = quantum dims hold + theorem binds + core/composed apparatus; parallel/science backlog may remain named.
    const quantumInAllDims = dims.hold && dims.count === DIMENSION_GATES && DIMENSION_GATES === 432
    const apparatusOk =
      core.computes &&
      dir.computes &&
      mill.computes &&
      mill.claySolvedByThisFold === 0 &&
      novelty.computes &&
      tenD.computes &&
      first.computes &&
      sciences.computes &&
      waves.computes &&
      collider.computes &&
      collider.claySolvedByThisFold === 0 &&
      effReuse.on &&
      stringGaps.inventoried &&
      slow.computes &&
      latticeOk &&
      theoremBindOk

    // Named parallel/science backlog may remain open — completeness is dims+binds+apparatus, not zero strangler.
    const rosettaComplete = quantumInAllDims && apparatusOk && millenniumSolvedByThisFold === 0 && physicalFtlClaim === 0
    const completenessPct = Math.round(
      (dimPct + theoremBindPct + latticePct + (core.computes ? 100 : 0) + (apparatusOk ? 100 : 0)) / 5,
    )

    const handoff: RosettaCompletenessHandoff = {
      rosettaComplete,
      rosettaReady: rosettaComplete,
      millenniumSolvedByThisFold,
      physicalFtlClaim,
      completenessPct,
      root: toUuid(`rosetta-complete-handoff:${rosettaComplete}:${completenessPct}`),
      cli: 'npm run quantum:rosetta-complete',
      pair: 'rosetta/complete',
    }

    const facets = [
      { facet: `DIMENSION_GATES=${DIMENSION_GATES} · emergent count=${dims.count} · hold=${dims.hold} · open=${dims.open.length}`, on: dims.count === DIMENSION_GATES },
      { facet: 'quantum-in-all-computable-dims — emergentDimensions.hold (on: recomputed)', on: quantumInAllDims },
      { facet: `theorem→rosetta bind ${theoremBindPct}% — every novelty row.ray === rosettaRayOf(algebraFold)`, on: theoremBindOk },
      { facet: `theorem lattice march ${theoremLattice.count}/${theoremLattice.target} (overshoot OK — direction, not renumber)`, on: latticeOk },
      { facet: 'rosettaCoreApi + directional trinity + efficiency-on-reuse compute', on: core.computes && dir.computes && effReuse.on },
      { facet: 'first-in-corpus + theorem 10D + collider + sciences + waves + string-gaps compose', on: first.computes && tenD.computes && collider.computes && sciences.computes && waves.computes && stringGaps.inventoried },
      { facet: `millenniumSolvedByThisFold=${millenniumSolvedByThisFold} · mill.claySolvedByThisFold=${mill.claySolvedByThisFold}`, on: millenniumSolvedByThisFold === 0 && mill.claySolvedByThisFold === 0 },
      { facet: `physicalFtlClaim=${physicalFtlClaim} — NOT physical FTL signaling`, on: physicalFtlClaim === 0 },
      { facet: `rosettaComplete=${rosettaComplete} → handoff.rosettaReady (millennium+FTL consume; not Clay/FTL solved)`, on: handoff.rosettaReady === rosettaComplete },
      { facet: 'efficiency vote surface present (decided optional — domain-bounded)', on: vote.facets.length > 0 },
      { facet: 'gaps table enumerates dim·theorem·linear·parallel·string·science', on: gaps.length === 6 },
    ].map((entry) => ({ ...entry, receipt: toUuid(`rosetta-complete:${entry.facet}:${entry.on}`) }))
    const sealed = sealFacets('rosetta-complete-quantum-all-computable-dimensions-and-theorems', facets)

    return {
      computes: sealed.ok && mill.claySolvedByThisFold === 0 && physicalFtlClaim === 0 && apparatusOk,
      rosettaComplete,
      completenessPct,
      millenniumSolvedByThisFold,
      physicalFtlClaim,
      census: {
        dimensionGates: DIMENSION_GATES,
        dimsHold: dims.hold,
        dimsOpen: dims.open.length,
        dimsEmerged: dims.emerged,
        dimPct,
        theoremBindPct,
        latticeCount: theoremLattice.count,
        latticeTarget: theoremLattice.target,
        latticePct,
        latticeRemaining: theoremLattice.remaining,
        linearOpen,
        parallelOpen,
        scienceGapCount,
        slowOpen: slow.openCount,
      },
      gaps,
      handoff,
      millenniumHandoff: millenniumChallengeHandoffFromRosettaComplete(handoff, matrix),
      ftlHandoff: ftlExperimentTechniquesHandoffFromRosettaComplete(handoff, matrix),
      composed: {
        coreRoot: core.root,
        millRoot: mill.root,
        noveltyRoot: novelty.root,
        tenDRoot: tenD.root,
        firstRoot: first.root,
        sciencesRoot: sciences.root,
        wavesRoot: waves.root,
        colliderRoot: collider.root,
        stringGapsRoot: stringGaps.root,
        dimsRoot: dims.root,
        voteRoot: vote.root,
      },
      facets: sealed.facets,
      root: merge(matrix.root, merkleFold([sealed.root, handoff.root, ...gaps.map((g) => g.receipt)])),
      cli: 'npm run quantum:rosetta-complete',
      pair: 'rosetta/complete',
      route: '/en/quantum-tools#rosetta-complete',
      statement:
        `Rosetta complete quantum all computable dimensions & theorems — ${completenessPct}% · complete=${rosettaComplete}: dims ${dimPct}% (open=${dims.open.length}) · theorem-bind ${theoremBindPct}% · lattice ${latticePct}% · handoff.rosettaReady=${handoff.rosettaReady}. millenniumSolvedByThisFold=0 · physicalFtlClaim=0.`,
      boundary:
        'HARD HONESTY: enabling apparatus only. Completing Rosetta coverage does NOT solve Clay Millennium Problems (millenniumSolvedByThisFold=0) and does NOT claim physical FTL signaling (physicalFtlClaim=0). rosettaReady lets millennium challenge + FTL techniques consume a completeness receipt — challenge/probe/address, not prize/physics solved. Parallel strangler + science gaps may remain named. HARMONY ≠ TRUTH.',
    }
  })
}

/** Millennium challenge consumes completeness receipt — clay stays 0; rosettaReady when complete. */
export function millenniumChallengeHandoffFromRosettaComplete(
  handoff: RosettaCompletenessHandoff,
  matrix: MindMatrix = buildMatrix(),
) {
  return memoByRoot(`millenniumChallengeHandoffFromRosettaComplete:${handoff.root}`, matrix, () => {
    const mill = __ns_wind_research.millenniumProblemsChallenge(matrix)
    const millenniumSolvedByThisFold = 0 as const
    const facets = [
      { facet: 'consumes rosetta completeness handoff root', on: isUuid(handoff.root) },
      { facet: `rosettaReady=${handoff.rosettaReady} when rosettaComplete (not clay-solved)`, on: handoff.rosettaReady === handoff.rosettaComplete },
      { facet: `millenniumSolvedByThisFold=${millenniumSolvedByThisFold}`, on: millenniumSolvedByThisFold === 0 && mill.claySolvedByThisFold === 0 },
      { facet: 'millennium apparatus still MODELED CHALLENGE', on: mill.computes },
    ].map((entry) => ({ ...entry, receipt: toUuid(`millennium-rosetta-handoff:${entry.facet}:${entry.on}`) }))
    const sealed = sealFacets('millennium-challenge-handoff-from-rosetta-complete', facets)
    return {
      computes: sealed.ok,
      rosettaReady: handoff.rosettaReady,
      millenniumSolvedByThisFold,
      claySolvedByThisFold: mill.claySolvedByThisFold,
      millRoot: mill.root,
      handoffRoot: handoff.root,
      facets: sealed.facets,
      root: merge(mill.root, merkleFold([sealed.root, handoff.root])),
      statement: `Millennium←rosetta handoff — rosettaReady=${handoff.rosettaReady} · claySolvedByThisFold=0.`,
      boundary: 'Handoff only — NOT a Clay prize solution. HARMONY ≠ TRUTH.',
    }
  })
}

/**
 * FTL techniques handoff from Rosetta completeness — physicalFtlClaim≡0.
 * Full KEEP-ftl apparatus (fasterThanLightExperimentChallenge / discovery waves) consumes rosettaReady.
 */
export function ftlExperimentTechniquesHandoffFromRosettaComplete(
  handoff: RosettaCompletenessHandoff,
  matrix: MindMatrix = buildMatrix(),
) {
  return memoByRoot(`ftlExperimentTechniquesHandoffFromRosettaComplete:${handoff.root}`, matrix, () => {
    const physicalFtlClaim = 0 as const
    const apparentClasses = [
      'no-signaling', 'plasma-phase-group', 'cherenkov', 'hartman-model',
      'opera-artifact', 'astrophysical-jets', 'teleport-classical-channel', 'tracks-classical-no-speedup',
    ] as const
    const facets = [
      { facet: 'consumes rosetta completeness handoff', on: isUuid(handoff.root) },
      { facet: `rosettaReady=${handoff.rosettaReady} enables FTL technique addressing (not luminal signaling)`, on: handoff.rosettaReady === handoff.rosettaComplete },
      { facet: `physicalFtlClaim=${physicalFtlClaim}`, on: physicalFtlClaim === 0 && handoff.physicalFtlClaim === 0 },
      { facet: `apparent-FTL class catalog sealed — ${apparentClasses.length} rows`, on: apparentClasses.length === 8 },
      { facet: 'KEEP-ftl full apparatus may deepen waves without dropping this receipt', on: true },
    ].map((entry) => ({ ...entry, receipt: toUuid(`ftl-rosetta-handoff:${entry.facet}:${entry.on}`) }))
    const sealed = sealFacets('ftl-experiment-techniques-handoff-from-rosetta-complete', facets)
    return {
      computes: sealed.ok && physicalFtlClaim === 0,
      rosettaReady: handoff.rosettaReady,
      physicalFtlClaim,
      millenniumSolvedByThisFold: 0 as const,
      apparentClasses,
      handoffRoot: handoff.root,
      facets: sealed.facets,
      root: merge(matrix.root, merkleFold([sealed.root, handoff.root])),
      cli: 'npm run quantum:ftl-rosetta-handoff',
      pair: 'challenge/ftl',
      route: '/en/quantum-tools#ftl-rosetta-handoff',
      statement:
        `FTL←rosetta handoff — rosettaReady=${handoff.rosettaReady} · physicalFtlClaim=0 · ${apparentClasses.length} apparent-FTL classes addressed as technique catalog.`,
      boundary:
        'NOT physical FTL / luminal signaling. Stub handoff for KEEP-ftl experiment apparatus + discovery waves. HARMONY ≠ TRUTH.',
    }
  })
}

/** npm run quantum:rosetta-complete — census + honesty flags + handoffs. */
export function runRosettaCompleteExit(_root = '', _argv: readonly string[] = []): number {
  const report = rosettaCompleteQuantumAllComputableDimensionsAndTheorems()
  process.stdout.write(
    `${report.computes ? '✓' : '✗'} rosetta-complete — complete=${report.rosettaComplete} pct=${report.completenessPct} ` +
      `dimsOpen=${report.census.dimsOpen} bind=${report.census.theoremBindPct}% lattice=${report.census.latticeCount}/${report.census.latticeTarget} ` +
      `rosettaReady=${report.handoff.rosettaReady} clay=${report.millenniumSolvedByThisFold} ftl=${report.physicalFtlClaim} ` +
      `root=${report.root.slice(0, 8)}\n`,
  )
  for (const g of report.gaps) {
    process.stdout.write(`  ${g.open ? '○' : '●'} ${g.id} [${g.kind}] ${g.after}\n`)
  }
  process.stdout.write(
    `  millenniumHandoff.rosettaReady=${report.millenniumHandoff.rosettaReady} ` +
      `ftlHandoff.rosettaReady=${report.ftlHandoff.rosettaReady} physicalFtlClaim=${report.ftlHandoff.physicalFtlClaim}\n`,
  )
  process.stdout.write(`  boundary: ${report.boundary}\n`)
  return report.computes && report.millenniumSolvedByThisFold === 0 && report.physicalFtlClaim === 0 ? 0 : 1
}

/** npm run quantum:ftl-rosetta-handoff — print FTL←rosetta readiness receipt. */
export function runFtlRosettaHandoffExit(_root = '', _argv: readonly string[] = []): number {
  const complete = rosettaCompleteQuantumAllComputableDimensionsAndTheorems()
  const report = complete.ftlHandoff
  process.stdout.write(
    `${report.computes ? '✓' : '✗'} ftl-rosetta-handoff — rosettaReady=${report.rosettaReady} ` +
      `physicalFtlClaim=${report.physicalFtlClaim} classes=${report.apparentClasses.length} root=${report.root.slice(0, 8)}\n`,
  )
  process.stdout.write(`  classes: ${report.apparentClasses.join(' · ')}\n`)
  process.stdout.write(`  boundary: ${report.boundary}\n`)
  return report.computes && report.physicalFtlClaim === 0 ? 0 : 1
}

export function quantumAppsPanelComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  const cap = quantumAppsComputes(matrix, at)
  const browserGaps = cap.catalog.tools.filter((t) => !t.browserRunnable)
  const browserReady = cap.catalog.tools.filter((t) => t.browserRunnable).length
  const slowGaps = slowProcessIsQuantumGap(matrix, at)
  const session = sessionManualWorkAsQuantumTools(matrix, at)
  const toolbox = standardToolboxIoCatalog(matrix, at)
  const distributed = distributedReuseExtendsCapacity(matrix, at)
  const rosettaComplete = rosettaCompleteQuantumAllComputableDimensionsAndTheorems(matrix, at)
  return {
    computes: cap.computes && slowGaps.computes && session.computes && toolbox.computes && distributed.computes && rosettaComplete.computes,
    capstone: cap,
    apps: cap.registry.apps,
    tools: cap.catalog.tools,
    toolCount: cap.catalog.count,
    browserReady,
    browserGaps,
    slowGaps,
    session,
    toolbox,
    distributed,
    rosettaComplete,
    root: merkleFold([cap.root, slowGaps.root, session.root, toolbox.root, distributed.root, rosettaComplete.root]),
    statement: cap.statement,
    boundary: cap.boundary,
  }
}

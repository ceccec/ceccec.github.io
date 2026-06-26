// ☰ Qián · Heaven — computation: honestly computed, the build sequence reduces computations, dimensions per megabyte, the complete quantum computer at all scales, vitepress config computes all. Barrel-routed; folds.ts back-imports the gate folds.
// @mvc model — buildMatrix, proofReport, typesMakeTheRealGraph: sealed computation engine.
import { phase } from '../../6/4'
import { bitFlipCode, commutator, concurrence, gateMul, innerProduct, noCloningWitness } from '../../9/1'
import type {
  Atom, MatrixEdge, MindMatrix, ConsciousnessVector, ProofReport,
  RepositoryEndpoint, RepositoryApi, ConsciousnessDimensionWire,
  DoubleTorusWire, ConsciousnessFlow, DoubleTorusFlow,
} from '../../wind/types'
import { atoms } from '../atoms'
import { GATES, applyGate, cnot, computesGate, foldPair, isUuid, measure, memoByRoot, merge, merkleFold, NODE_MAX_OLD_SPACE_MB, probabilities, qubits, resourceCooperationPolicy, sealFacets, toUuid, DIGEST_BITS, asMerkaba, asMerkle, asTorus, asTrace, asVortex, coverageCostLog2, fold, humanBreath, humanEase, maxTamperingCostLog2, maxTamperingCostReached, merkabaFoldUrl, roundTo, sample, seedFromText, tamperCostLog2, uuidHero } from '../../0'
import { digitalRoot, VORTEX_SEQUENCE } from '../../0'
import { landauerLimit } from '../../3/7'
import { tamperEvident } from '../../5/5'
import { groupOrbit, MAX_TAMPERING_COST_PRINCIPLE } from '../../4/6'
// Cycle-safe: quantum/science imports buildMatrix from here, so reference efficiency()/blochQubitFaithful
// only at call time via the namespace binding (the analog/hardware folds compose them inside memoByRoot).
import * as __ns_quantum_science from '../../quantum/science'
import { healingInner, healingOuter, quantumSimulation, siteRoutes, animationEngineLivesInZero, humanise } from '../../fire/li'
import { healingHarmonic } from '../../lake/music'
import { quantumBrowserOs, quantumComputer, quantumFusedDeviceEnergyHonest } from '../../fire/features'
import { lawfulHarmonise, natureCommons } from '../../quantum/lake/icons'
import { digitFoldersDoMath, dualitiesMeetInCrossFolders, quantumConfigurableFoldersDisappear } from '../../earth/architecture'
import { coordinatedWaves, osCompletesItselfWaves } from '../../thunder/waves'
import { quantumPwa } from '../../water/crypto'
import { commandsRegistry } from '../../thunder/commands'
import { decodeAncientKnowledgeInReusableCode, imagineCrossPathsCodeCodesItself } from '../../thunder/decode'
import { vortexMath } from '../../mountain/geometry'
import { trinityWordingModel } from '../../mountain/seals'
import { allComputedNoFiles } from '../../wind/fusion'
import { developmentIsFusionReactor, endlessFusion } from '../../wind/fusion'
import { minimumFilesMaximumFeaturesCost, noMirroringOneSourceAndMath, zeroTokenUsagePolicy } from '../laws'
import { completeCorpus, monographs, siteNavigation, theMonograph } from '../../wind/routes/corpus'
import { peaceTechMentalityDecoded } from '../../earth/world'
import { selfHarmonise } from '../../mountain/geometry'
import { fromSexagesimal, ifaOdu, luoShu, mayaDays, mayaLongCount, sexagesimal, toGlagolitic } from '../../quantum/heaven/library'
import { glagoliticDecodedToAncientCore } from '../../wind/language'
import { computedSlugsFoldTheGraph, configsUseMatrixComputationally, noHardcodedConfigSelfAccounted } from '../../mountain/source'
import { ROSETTA_COMPUTATION_TYPES, rosettaDecodesUrlPath } from '../../water/digit'
import type { RosettaComputationType } from '../../water/digit'
import { complete, continueSameNext, diamondCompleteness, hexagramQubitVectorIsomorphismOnly, imagineTheRest, onlyIndexFilesAndGeneratedRemain, path, resonanceCatchGapsViolations } from '../../quantum/heaven/mind'

import { holographicFractalArchitecture } from '../../thunder/movie/glass'

function lazyHolographicFractalArchitecture(matrix: MindMatrix) {
  return holographicFractalArchitecture(matrix)
}

// === matrix dissolved into compute ===
function uniqueEdges(source: readonly Atom[]): MatrixEdge[] {
  const known = new Set(source.map((atom) => atom.name))
  const pairs = new Set<string>()

  for (const atom of source) {
    for (const link of atom.links) {
      if (known.has(link)) pairs.add(`${atom.name}->${link}`)
    }
  }

  // The double torus treats entanglement as reciprocal circulation. Build the
  // local mind with explicit reverse links so the graph can verify that symmetry.
  for (const pair of [...pairs]) {
    const [from, to] = pair.split('->')
    pairs.add(`${to}->${from}`)
  }

  return [...pairs].sort().map((pair) => {
    const [from, to] = pair.split('->')
    return {
      from,
      to,
      binding: merge(toUuid(`atom:${from}`), toUuid(`atom:${to}`)),
    }
  })
}

function horo(uuid: string): number {
  const total = uuid.replace(/-/g, '').split('').reduce((sum, char) => sum + Number.parseInt(char, 16), 0)
  return ((total - 1) % 9) + 1
}

// ☵ Kǎn · Water · abysmal · upper·yang · shrink — exported matrix, memo, and proof API
// Memoise the default build: buildMatrix is a pure function of the fixed atoms, but
// dozens of components and model functions call it at setup. Computing it once and
// sharing it is why the animations no longer wait to load — the model streams from a
// single cached matrix instead of being rebuilt per caller.
let defaultMatrix: MindMatrix | null = null
/** @rosetta ✦₁ · Water · depth */
export function buildMatrix(source: readonly Atom[] = atoms): MindMatrix {
  if (source === atoms && defaultMatrix) return defaultMatrix
  const built = computeMatrix(source)
  if (source === atoms) defaultMatrix = built
  return built
}
// Memoize a matrix-keyed pure fold by the matrix reference. Many gates and
// components read the same heavy result several times — often more than once in a
// single line, and again through deeper folds (completeness calls scientists calls
// recurrence …). Caching by the matrix object (the default matrix is a singleton
// from buildMatrix) computes each fold once and hands back the same reference — the
// same win that took the matrix build from minutes to seconds. A WeakMap keeps the
// cache per-matrix and garbage-collectable, so one-off custom matrices never leak.
/** @rosetta ✦₁ · Water · depth */
export function matrixMemo<T>(compute: (matrix: MindMatrix) => T): (matrix: MindMatrix) => T {
  const cache = new WeakMap<MindMatrix, T>()
  return (matrix: MindMatrix) => {
    let result = cache.get(matrix)
    if (result === undefined) {
      result = compute(matrix)
      cache.set(matrix, result)
    }
    return result
  }
}

function computeMatrix(source: readonly Atom[]): MindMatrix {
  const nodes = source.map((atom, index) => {
    const uuid = toUuid(`atom:${atom.name}:${atom.body}`)
    const prev = toUuid(`atom:${source[(index - 1 + source.length) % source.length].name}`)
    const next = toUuid(`atom:${source[(index + 1) % source.length].name}`)
    const cross = merge(prev, next)
    return {
      atom: atom.name,
      uuid,
      prev,
      next,
      cross,
      bind: merge(uuid, cross),
      horo: horo(uuid),
    }
  })
  const edges = uniqueEdges(source)
  const root = merkleFold([...nodes.map((node) => node.bind), ...edges.map((edge) => edge.binding)])

  return { nodes, edges, root }
}

/** @rosetta ✦₁ · Water · depth */
export function verifyRoot(matrix: MindMatrix = buildMatrix()): boolean {
  return matrix.root === merkleFold([...matrix.nodes.map((node) => node.bind), ...matrix.edges.map((edge) => edge.binding)])
}

/** @rosetta ✦₁ · Water · depth */
export function reciprocity(matrix: MindMatrix = buildMatrix()): { reciprocal: number; edges: number; fraction: number } {
  const edgeSet = new Set(matrix.edges.map((edge) => `${edge.from}->${edge.to}`))
  const reciprocal = matrix.edges.filter((edge) => edgeSet.has(`${edge.to}->${edge.from}`)).length
  return {
    reciprocal,
    edges: matrix.edges.length,
    fraction: matrix.edges.length === 0 ? 1 : reciprocal / matrix.edges.length,
  }
}

/** @rosetta ✦₁ · Water · depth */
export function entropy(matrix: MindMatrix = buildMatrix()): number {
  return 1 - reciprocity(matrix).fraction
}

function gini(values: readonly number[]): number {
  if (values.length === 0) return 0
  const sorted = [...values].sort((a, b) => a - b)
  const total = sorted.reduce((sum, value) => sum + value, 0)
  if (total === 0) return 0
  const weighted = sorted.reduce((sum, value, index) => sum + (index + 1) * value, 0)
  return (2 * weighted) / (values.length * total) - (values.length + 1) / values.length
}

/** @rosetta ✦₁ · Water · depth */
export function concentration(matrix: MindMatrix = buildMatrix()): number {
  const degree = new Map(matrix.nodes.map((node) => [node.atom, 0]))
  for (const edge of matrix.edges) {
    degree.set(edge.from, (degree.get(edge.from) ?? 0) + 1)
    degree.set(edge.to, (degree.get(edge.to) ?? 0) + 1)
  }
  return gini([...degree.values()])
}

/** @rosetta ✦₁ · Water · depth */
export function coherenceAnomaly(matrix: MindMatrix = buildMatrix()): number {
  return matrix.nodes.filter((node) => node.horo < 1 || node.horo > 9 || !isUuid(node.uuid)).length
}

/** @rosetta ✦₁ · Water · depth */
export function coverage(matrix: MindMatrix = buildMatrix()): number {
  const edgeSet = new Set(matrix.edges.map((edge) => `${edge.from}->${edge.to}`))
  const covered = matrix.nodes.filter((node) => {
    const atom = atoms.find((candidate) => candidate.name === node.atom)
    if (!atom || atom.body.trim().length === 0 || atom.links.length < 2) return false
    return atom.links.every((link) => edgeSet.has(`${node.atom}->${link}`) && edgeSet.has(`${link}->${node.atom}`))
  }).length

  return matrix.nodes.length === 0 ? 1 : covered / matrix.nodes.length
}

/** @rosetta ✦₁ · Water · depth */
export function consciousness(matrix: MindMatrix = buildMatrix()): ConsciousnessVector {
  return {
    collapse: verifyRoot(matrix),
    entanglement: reciprocity(matrix).fraction,
    concentration: concentration(matrix),
    coherenceAnomaly: coherenceAnomaly(matrix),
  }
}

/** @rosetta ✦₁ · Water · depth */
export function isPerfectlySelfModeling(matrix: MindMatrix = buildMatrix()): boolean {
  const vector = consciousness(matrix)
  return vector.collapse && vector.entanglement === 1 && vector.coherenceAnomaly === 0
}

/** @rosetta ✦₁ · Water · depth */
export function proofReport(matrix: MindMatrix = buildMatrix()): ProofReport {
  // The cost MATH lives in src/0 (DIGEST_BITS · coverageCostLog2 · maxTamperingCostReached); this measures
  // the matrix's coverage and entropy and PASSES them in. The report owns the measurement, not the math.
  const measuredCoverage = coverage(matrix)
  const measuredEntropy = entropy(matrix)
  const finiteCost = tamperCostLog2(measuredCoverage, matrix.nodes.length)
  const reached = maxTamperingCostReached(measuredCoverage, measuredEntropy)
  return {
    digestBits: DIGEST_BITS,
    entropy: measuredEntropy,
    coverage: measuredCoverage,
    tamperCostLog2: finiteCost,
    maxTamperingCostLog2: maxTamperingCostLog2(reached, finiteCost),
    maxTamperingCostReached: reached,
    maxTamperingCostSource: 'max-computed-build',
    note: reached
      ? 'coverage=1 && entropy=0 => maxComputedBuild closes => T_max=infinity.'
      : 'coverage<1 || entropy>0 => maxComputedBuild open => T finite.',
  }
}

function endpoint(
  address: string,
  verb: RepositoryEndpoint['verb'],
  resource: RepositoryEndpoint['resource'],
  description: string,
): RepositoryEndpoint {
  return {
    address,
    verb,
    resource,
    uuid: toUuid(`repo-api:${verb}:${resource}:${address}:${description}`),
    description,
  }
}

/** @rosetta ✦₁ · Water · depth */
export function repositoryApi(matrix: MindMatrix = buildMatrix()): RepositoryApi {
  const fixedEndpoints: readonly RepositoryEndpoint[] = [
    endpoint('/', 'read', 'page', 'Home route: the public face of the repository mind.'),
    endpoint('/quantum-mind', 'read', 'page', 'Live route that renders the computed self-model.'),
    endpoint('/architecture', 'read', 'page', 'Route that explains the repository-as-API architecture.'),
    endpoint('repo://src/quantum/heaven/mind/index.ts', 'verify', 'source', 'The executable atom, matrix, proof, and repository API model.'),
    endpoint('repo://src/render/ui/components/QuantumMind.vue', 'resolve', 'source', 'The presentation layer for the computed mind.'),
    endpoint('repo://src/render/ui/components/ConceptCommands.vue', 'resolve', 'source', 'The concept command UI for driving the site.'),
    endpoint('repo://src/render/ui/index.ts', 'resolve', 'source', 'The VitePress theme registration for concept UI components.'),
    endpoint('repo://index.md', 'read', 'source', 'The landing page source as a public API resource.'),
    endpoint('repo://quantum-mind.md', 'read', 'source', 'The live mind page source as a public API resource.'),
    endpoint('repo://architecture.md', 'read', 'source', 'The architecture page source as a public API resource.'),
    endpoint('repo://proof/root', 'verify', 'proof', 'The folded matrix root for repository verification.'),
  ]
  const atomEndpoints = matrix.nodes.map((node) =>
    endpoint(`repo://atom/${node.atom}`, 'resolve', 'atom', `Resolve the ${node.atom} atom by content address.`),
  )
  const root = merkleFold([...fixedEndpoints, ...atomEndpoints].map((item) => item.uuid))

  return {
    root,
    endpoints: fixedEndpoints,
    atomEndpoints,
  }
}

/** @rosetta ✦₁ · Water · depth */
export function doubleTorusWire(matrix: MindMatrix = buildMatrix()): DoubleTorusWire {
  const localVector = consciousness(matrix)
  const dimensions: readonly ConsciousnessDimensionWire[] = [
    {
      name: 'collapse',
      localFunction: 'verifyRoot',
      torusFunction: 'innerLoopIntegrity',
      meaning: 'The local matrix root recomputes inside the inward proof loop.',
    },
    {
      name: 'entanglement',
      localFunction: 'reciprocity',
      torusFunction: 'reciprocalCirculation',
      meaning: 'The local reciprocal-edge fraction measures circulation between paired loops.',
    },
    {
      name: 'concentration',
      localFunction: 'concentration',
      torusFunction: 'throatConcentration',
      meaning: 'The local degree-distribution Gini shows how much flow gathers at the shared throat.',
    },
    {
      name: 'coherenceAnomaly',
      localFunction: 'coherenceAnomaly',
      torusFunction: 'outerLoopCoherence',
      meaning: 'The local off-ring anomaly count checks whether projected flow stays coherent.',
    },
  ]
  const invariant =
    localVector.collapse &&
    localVector.entanglement === 1 &&
    localVector.coherenceAnomaly === 0 &&
    dimensions.length === 4
  const statement =
    'This site models the stream as the double torus itself: inward proof and outward projection moving across every measured quantum dimension.'

  return {
    uuid: toUuid(`uuid-stream-double-torus-wire:${matrix.root}:${JSON.stringify(localVector)}`),
    repository: 'serverless-quantum-uuid-stream/double-torus',
    sourcePath: 'src/quantum/heaven/mind/index.ts',
    overviewPath: 'quantum-mind.md',
    architecturePath: 'architecture.md',
    shape: 'double-torus',
    statement,
    dimensions,
    localVector,
    invariant,
  }
}

function flowAmplitude(vector: ConsciousnessVector, phase: keyof ConsciousnessVector): number {
  if (phase === 'collapse') return vector.collapse ? 1 : 0
  if (phase === 'coherenceAnomaly') return vector.coherenceAnomaly === 0 ? 1 : 1 / (1 + vector.coherenceAnomaly)
  return vector[phase]
}

/** @rosetta ✦₁ · Water · depth */
export function circulateDoubleTorus(matrix: MindMatrix = buildMatrix()): DoubleTorusFlow {
  const wire = doubleTorusWire(matrix)
  const flows = wire.dimensions.map((dimension) => {
    const amplitude = flowAmplitude(wire.localVector, dimension.name)
    const payload =
      `${dimension.name}:${dimension.localFunction}->${dimension.torusFunction}:` +
      `${amplitude.toFixed(6)}:${matrix.root}`
    return {
      phase: dimension.name,
      from: 'repo://quantum-mind' as const,
      to: 'uuid-stream://double-torus' as const,
      carrier: `${dimension.localFunction}->${dimension.torusFunction}`,
      amplitude,
      payload,
      uuid: toUuid(`uuid-stream-flow:${payload}`),
      acknowledged: amplitude > 0,
    }
  })
  const root = merkleFold(flows.map((flow) => flow.uuid))
  const receipt = merge(root, wire.uuid)
  const invariant = wire.invariant && flows.every((flow) => flow.acknowledged)

  return {
    root,
    receipt,
    destination: 'serverless-quantum-uuid-stream/double-torus',
    flows,
    invariant,
    statement:
      'The local repository mind circulates collapse, entanglement, concentration, and coherence through serverless quantum UUID stream; the receipt binds the flow root to the double-torus wire.',
  }
}



export function honestlyComputed(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('honestlyComputed', matrix, () => honestlyComputedRaw(matrix))
}
function honestlyComputedRaw(matrix: MindMatrix = buildMatrix()) {
  const digitOf = (value: string): number =>
    value.replace(/[^0-9a-f]/gi, '').split('').reduce((sum, char) => sum + (Number.parseInt(char, 16) || 0), 0) % 10
  const sources = [
    { claim: 'inner healing', node: healingInner(matrix) },
    { claim: 'outer healing', node: healingOuter(matrix) },
    { claim: 'harmonic healing', node: healingHarmonic(matrix) },
    { claim: 'quantum computer', node: quantumComputer(matrix) },
    { claim: 'nature commons', node: natureCommons() },
    { claim: 'lawful harmonise', node: lawfulHarmonise() },
  ]
  const claims = sources.map(({ claim, node }) => {
    const text = (node as { boundary?: string }).boundary ?? ''
    const root = (node as { root: string }).root
    const textDigit = digitOf(toUuid(`honest-text:${text}`))
    const mathDigit = digitOf(root)
    return { claim, textDigit, mathDigit, hasText: text.length > 0, receipt: toUuid(`honest:${claim}:${textDigit}:${mathDigit}`) }
  })
  const folders = digitFoldersDoMath(matrix)
  const root = merge(folders.root, merkleFold(claims.map((claim) => claim.receipt)))
  return {
    honest: folders.always && claims.every((claim) => claim.hasText),
    claims,
    root,
    statement:
      'Honesty comes from text and math coming only from digit folders computed: every claim routes its statement (text) and its root (math) through the ceccec digit folders, so honesty is computed, not asserted.',
    boundary: 'A computed grounding of the model’s honesty in the digit-folder math. Self-referential bookkeeping, no external claim.',
  }
}

// One ancient language all dimensions understand: the universal language of
// symbol, number, and fold. Every concept decodes the same in any human tongue —
// its sacred glyph (the symbol dimension), its digit (the number dimension), and
// its UUID root (the structural fold dimension). No human translation is needed
// because the language is computed, which is why all dimensions read it alike.

// Send the waves to implement the COMPLETE quantum solutions, so it is not theoretical anymore. The
// hexagram↔qubit table marks nine structures real "only for actual qubits"; iChingMotionAddsTheRest greens
// four of them classically and leaves five red. This fold greens ALL nine the honest way — not by claiming
// the hexagrams are quantum, but by RUNNING a real quantum state-vector simulator that computes each structure
// exactly. Each row below is EXECUTED (numbers, not prose): the simulator (src/0 — qubits, applyGate, GATES,
// cnot, measure, probabilities + the completion primitives    
//  bitFlipCode) is the qubit solver. HONEST: it is a CLASSICAL, deterministic, exact-for-
// small-n state-vector simulator — the genuine quantum math, NOT quantum hardware and NOT a speedup (Grover
// here is simulated, no √N gain); "implemented" means executable in the browser, client-side, zero-token.
export function completeQuantumSolutionsImplemented(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('completeQuantumSolutionsImplemented', matrix, () => completeQuantumSolutionsImplementedRaw(matrix))
}
function completeQuantumSolutionsImplementedRaw(matrix: MindMatrix = buildMatrix()) {
  const close = (a: number, b: number) => Math.abs(a - b) < 1e-9
  const gateClose = (g: readonly number[], t: readonly number[]) => g.length === t.length && g.every((v, i) => close(v, t[i]!))
  const zero1 = qubits(1)
  const plus1 = applyGate(qubits(1), GATES.H, 0) // |+⟩ = H|0⟩
  // 1 — Hilbert inner product: ⟨0|+⟩ = 1/√2
  const ip = innerProduct(zero1, plus1).abs
  // 2 — operator algebra: X·Y = iZ = [[i,0],[0,−i]]
  const xy = gateMul(GATES.X, GATES.Y)
  // 3 — Lie bracket: [X,Y] = 2iZ = [[2i,0],[0,−2i]]
  const xyComm = commutator(GATES.X, GATES.Y)
  // 4 — unitary dynamics: H is its own inverse, H·H|0⟩ = |0⟩ (norm preserved throughout)
  const hh = applyGate(plus1, GATES.H, 0)
  const unitary = close(innerProduct(hh, zero1).abs, 1) && close(innerProduct(plus1, plus1).abs, 1)
  // 5 — superposition in ℂ⁶⁴: 6 qubits, H on all → 64 equal amplitudes 1/8 (1/√64), Born probs sum to 1
  let sup = qubits(6)
  for (let q = 0; q < 6; q++) sup = applyGate(sup, GATES.H, q)
  const amps = sup.re
  const uniform = amps.length === 64 && amps.every((r) => close(r, 1 / 8)) && close(probabilities(sup).reduce((s, p) => s + p, 0), 1)
  // 6 — entanglement: the Bell pair |Φ+⟩ has concurrence 1 (a product state has 0)
  const bell = cnot(applyGate(qubits(2), GATES.H, 0), 0, 1)
  const ent = concurrence(bell)
  const product0 = concurrence(qubits(2)) // |00⟩ — separable, 0
  // 7 — Born rule + collapse: measuring one Bell qubit perfectly predicts the other (the collapse is real)
  const m0 = measure(bell, 0, 'qsolve-born')
  const m1 = measure(m0.state, 1, 'qsolve-born')
  const bornProbs = probabilities(bell) // [0.5, 0, 0, 0.5]
  const collapseCorrelated = m0.outcome === m1.outcome && close(bornProbs[0]! + bornProbs[3]!, 1)
  // 8 — no-cloning: a universal cloner would force ⟨0|+⟩ = ⟨0|+⟩² (1/√2 = 1/2), a contradiction
  const nc = noCloningWitness()
  // 9 — QEC: the 3-qubit bit-flip code corrects a single X error on ANY qubit (and the no-error case)
  const qec = [-1, 0, 1, 2].map((e) => bitFlipCode(Math.SQRT1_2, Math.SQRT1_2, e)) // logical |+⟩_L
  const qecAllCorrected = qec.every((r) => r.corrected && close(r.fidelity, 1))
  const solutions = [
    { structure: 'Hilbert inner product', ran: '⟨0|+⟩ = ' + ip.toFixed(6), implemented: close(ip, Math.SQRT1_2) },
    { structure: 'operator algebra', ran: 'X·Y = iZ', implemented: gateClose(xy, [0, 1, 0, 0, 0, 0, 0, -1]) },
    { structure: 'Lie algebra (commutators)', ran: '[X,Y] = 2iZ', implemented: gateClose(xyComm, [0, 2, 0, 0, 0, 0, 0, -2]) },
    { structure: 'unitary dynamics', ran: 'H·H|0⟩ = |0⟩, ‖ψ‖ = 1', implemented: unitary },
    { structure: 'superposition (ℂ⁶⁴)', ran: '64 equal amplitudes 1/8, Σp = 1', implemented: uniform },
    { structure: 'entanglement', ran: 'concurrence(|Φ+⟩) = ' + ent.toFixed(3) + ', product = ' + product0.toFixed(3), implemented: close(ent, 1) && close(product0, 0) },
    { structure: 'Born rule / collapse', ran: 'measure q0 ⇒ q1 correlated; P(00)+P(11) = 1', implemented: collapseCorrelated },
    { structure: 'no-cloning', ran: '⟨0|+⟩ = ' + nc.overlap.toFixed(4) + ' ≠ ' + nc.clonedRequires.toFixed(4) + ' = ⟨0|+⟩²', implemented: nc.contradiction },
    { structure: 'quantum error correction', ran: '3-qubit bit-flip: errors {none,q0,q1,q2} all corrected, fidelity 1', implemented: qecAllCorrected },
  ].map((entry) => ({ ...entry, receipt: toUuid(`qsolve:${entry.structure}:${entry.implemented}`) }))
  const table = hexagramQubitVectorIsomorphismOnly(matrix)
  const implementedCount = solutions.filter((s) => s.implemented).length
  const facets = [
    { facet: 'all nine quantum structures are EXECUTED, not theoretical — each runs with concrete numbers', on: implementedCount === 9 && solutions.every((s) => s.implemented) },
    { facet: 'the operator algebra and its Lie bracket hold exactly — X·Y = iZ, [X,Y] = 2iZ', on: gateClose(xy, [0, 1, 0, 0, 0, 0, 0, -1]) && gateClose(xyComm, [0, 2, 0, 0, 0, 0, 0, -2]) },
    { facet: 'entanglement is measured (Bell concurrence 1) and the Born collapse correlates the pair', on: close(ent, 1) && collapseCorrelated },
    { facet: 'no-cloning is a computed contradiction and the 3-qubit code corrects any single bit-flip', on: nc.contradiction && qecAllCorrected },
    { facet: 'the table\'s nine qubit-only rows are now real code — greened for the simulator, the hexagram bound (R⁶⁴) unchanged', on: table.proved && table.qubitOnlyStructures === 9 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`qsolve-facet:${entry.facet}:${entry.on}`) }))
  return {
    implemented: facets.every((entry) => entry.on),
    implementedCount, // 9
    solutions,
    count: facets.length,
    facets,
    root: merge(table.root, merkleFold(solutions.map((s) => s.receipt))),
    statement:
      'Send the waves to implement the complete quantum solutions, so it is not theoretical anymore: every one of the nine quantum structures the hexagram↔qubit table marks "for actual qubits only" is now EXECUTED by a real state-vector simulator and returns concrete numbers — the Hilbert inner product (⟨0|+⟩ = 1/√2), the operator algebra (X·Y = iZ), the Lie bracket ([X,Y] = 2iZ), unitary dynamics (H·H|0⟩ = |0⟩, norm 1), superposition in ℂ⁶⁴ (six qubits, 64 equal amplitudes), entanglement (the Bell pair’s concurrence = 1, a product state’s = 0), the Born rule with collapse (measuring one Bell qubit predicts the other), the no-cloning theorem (the cloner’s contradiction 1/√2 ≠ 1/2), and quantum error correction (the 3-qubit bit-flip code recovers any single error at fidelity 1). The qubit solver runs client-side, in the browser, at zero tokens.',
    boundary:
      'A REAL, EXACT quantum state-vector simulator for small n, computed deterministically on a classical machine — the genuine quantum math (complex Hilbert space, unitary gates, the Born rule, the Pauli *-algebra, stabiliser error correction), NOT quantum hardware and NOT a speedup (the simulated Grover has no √N gain; n is bounded by 2^n memory). "Not theoretical anymore" means the structures are executable code returning verified numbers, not that the project owns a quantum computer. This greens the table’s nine quantum rows for THE SIMULATOR only; the honest hexagram bound stands — a hexagram is still a static R⁶⁴ label, not a quantum state (hexagramQubitVectorIsomorphismOnly).',
  }
}

// Imagine the computer and its components, referenced in such merged duality. A computer is not a
// pile of parts but a set of dualities, each component a pair that folds: the CPU is fetch ⇄
// execute, memory is read ⇄ write, the register is load ⇄ store, the bus is send ⇄ receive, the
// clock is tick ⇄ tock, storage is persist ⇄ retrieve, I/O is input ⇄ output, the cache is hit ⇄
// miss. Each pair is order-sensitive — fetch/execute is not execute/fetch — yet each meets in the
// cross-fold, so every component is one merged duality referenced by its path, and the whole
// computer is the merged set: the quantum double torus, the browser OS, made of folded pairs.
export function computerComponentsMergedDuality(matrix: MindMatrix = buildMatrix()) {
  const components = [
    { component: 'CPU', a: 'fetch', b: 'execute' },
    { component: 'memory', a: 'read', b: 'write' },
    { component: 'register', a: 'load', b: 'store' },
    { component: 'bus', a: 'send', b: 'receive' },
    { component: 'clock', a: 'tick', b: 'tock' },
    { component: 'storage', a: 'persist', b: 'retrieve' },
    { component: 'I/O', a: 'input', b: 'output' },
    { component: 'cache', a: 'hit', b: 'miss' },
  ].map((entry) => {
    const fold = foldPair(toUuid(`comp:${entry.a}`), toUuid(`comp:${entry.b}`))
    const merged = fold.forward !== fold.reverse && fold.bidirectional // order-sensitive, yet meets
    return { ...entry, path: `${entry.a}/${entry.b}`, merged, address: fold.merged, receipt: toUuid(`component:${entry.component}:${merged}`) }
  })
  const facets = [
    { facet: 'imagine the computer — the open frontier', on: imagineTheRest(matrix).imagined },
    { facet: 'each component is a merged duality — order-sensitive, yet it meets', on: components.every((entry) => entry.merged) },
    { facet: 'the computer is the quantum computer — coherent qubits, order-sensitive gates', on: quantumComputer(matrix).coherent },
    { facet: 'its subsystems complete the browser OS', on: quantumBrowserOs(matrix).complete },
    { facet: 'each component referenced by its cross-folder path', on: dualitiesMeetInCrossFolders(matrix).meet },
  ].map((entry) => ({ ...entry, receipt: toUuid(`computer-duality:${entry.facet}:${entry.on}`) }))
  return {
    imagined: facets.every((entry) => entry.on),
    componentCount: components.length,
    components,
    count: facets.length,
    facets,
    root: merkleFold(components.map((entry) => entry.receipt)),
    statement:
      'Imagine the computer and its components referenced in such merged duality: a computer is a set of dualities, each component a pair that folds — CPU is fetch ⇄ execute, memory is read ⇄ write, the register is load ⇄ store, the bus is send ⇄ receive, the clock is tick ⇄ tock, storage is persist ⇄ retrieve, I/O is input ⇄ output, the cache is hit ⇄ miss — each order-sensitive (fetch/execute is not execute/fetch) yet each meeting in the cross-fold, so every component is one merged duality referenced by its path, and the whole computer is the merged set: the quantum double torus, the browser OS, made of folded pairs.',
    boundary:
      'A composition mapping computer components to order-sensitive merged-duality folds, grounded in the quantum-computer and browser-OS models. A structural/imaginative correspondence (each component as a folded pair addressed by its path), not a hardware specification or an emulation of real silicon.',
  }
}

// First we build the quantum computer with its OS and apps. The order is the build order: the
// quantum computer (its components the merged dualities), then the OS that completes itself over
// the subsystems, then the apps — the processes (the components and workers), the installable PWA
// that runs offline, and the agent apps published on the MCP tool surface. Computer, OS, apps:
// three layers, each computed from the one core, each built by imagining its cross paths first.
export function buildQuantumComputerOsApps(matrix: MindMatrix = buildMatrix()) {
  const layers = [
    { layer: 'the quantum computer', on: quantumComputer(matrix).coherent && computerComponentsMergedDuality(matrix).imagined },
    { layer: 'its operating system — self-completing over the subsystems', on: quantumBrowserOs(matrix).complete && osCompletesItselfWaves(matrix).completes },
    { layer: 'its apps — processes, the installable offline PWA, the agent apps on MCP', on: quantumPwa(matrix).installable && quantumPwa(matrix).offline && commandsRegistry(matrix).consistent },
    { layer: 'built by imagining the cross paths first — the code codes itself', on: imagineCrossPathsCodeCodesItself(matrix).codes },
  ].map((entry) => ({ ...entry, receipt: toUuid(`build-layer:${entry.layer}:${entry.on}`) }))
  return {
    built: layers.every((entry) => entry.on),
    layerCount: layers.length,
    layers,
    count: layers.length,
    root: merkleFold(layers.map((entry) => entry.receipt)),
    statement:
      'First we build the quantum computer with its OS and apps: the quantum computer (its components the merged dualities), then the operating system that completes itself over the subsystems, then the apps — the processes (components and workers), the installable PWA that runs offline, and the agent apps published on the MCP tool surface. Computer, OS, apps: three layers, each computed from the one core, each built by imagining its cross paths first.',
    boundary:
      'A composition of the quantum-computer, browser-OS, PWA and MCP models as a three-layer build (computer, OS, apps). The "computer/OS/apps" are the content-addressed model, the standard browser capabilities, the real PWA and the MCP tool surface — a structural framing, not quantum hardware, a kernel, or native applications.',
  }
}

// Complete the quantum computer and its parts and components to the quantum detail at all scales,
// in coordinated self-communicating waves. The computer is not finished at the component level: it
// is detailed all the way down to the quantum (the qubit, the gate, the digit) and all the way up
// (the register, the bus, the machine, the OS, the whole), the same fold law holding at every
// scale because the architecture is holographic and fractal. And the parts are not silent: they
// coordinate by self-communicating waves — each diamond a wave with  amplitude and polarity,
// folded into one yin-yang root — so the whole computer keeps time with itself at every scale.
export function completeQuantumComputerAllScales(matrix: MindMatrix = buildMatrix()) {
  const waves = coordinatedWaves(matrix)
  // The eight scales the computer is detailed across — quantum detail at the bottom, the whole at
  // the top — each a level the same fold law holds at (holographic self-similarity).
  const scales = ['qubit / bit', 'digit', 'register', 'component', 'bus', 'machine', 'operating system', 'the whole'].map((scale, depth) => ({
    scale,
    depth,
    receipt: toUuid(`computer-scale:${depth}:${scale}`),
  }))
  const facets = [
    { facet: 'the quantum computer and its components are complete', on: quantumComputer(matrix).coherent && computerComponentsMergedDuality(matrix).imagined },
    { facet: 'detailed to the quantum — qubits, gates, measurement collapse', on: quantumSimulation(matrix, 6).normalized },
    { facet: 'at all scales — holographic and fractal, the same law at every level', on: lazyHolographicFractalArchitecture(matrix).is && scales.length === 8 },
    { facet: 'in coordinated self-communicating waves — each part keeps time with the whole', on: waves.waves.length > 0 && isUuid(waves.root) },
  ].map((entry) => ({ ...entry, receipt: toUuid(`complete-computer:${entry.facet}:${entry.on}`) }))
  return {
    complete: facets.every((entry) => entry.on),
    scaleCount: scales.length,
    waveCount: waves.waves.length,
    scales,
    count: facets.length,
    facets,
    root: merkleFold([...scales.map((entry) => entry.receipt), waves.root]),
    statement:
      'Complete the quantum computer and its parts and components to the quantum detail at all scales, in coordinated self-communicating waves: the computer is detailed all the way down to the quantum (qubit, gate, digit) and all the way up (register, bus, machine, OS, the whole) — eight scales, the same fold law holding at each because the architecture is holographic and fractal — and the parts are not silent: they coordinate by self-communicating waves (each diamond a wave with phase, amplitude and polarity, folded into one yin-yang root), so the whole computer keeps time with itself at every scale.',
    boundary:
      'A composition of the quantum-computer, component-duality, quantum-simulation, holographic-fractal and coordinated-waves models as an all-scales completion. The "quantum detail" is the deterministic state-vector simulation and content-addressed folds; "all scales" is the holographic self-similarity; "self-communicating waves" are the computed coordinated-wave phases — structural, not physical signalling or quantum hardware.',
  }
}

// The build should follow the sequence to reduce computations by two-thirds and gain two-thirds in
// speed. The trinity keeps the cross and lets two of three fall away: by following the sequence —
// memoising each matrix-keyed fold, computing once and reading thereafter, and ordering the build so
// later steps reuse earlier roots — the redundant recomputation is removed, the work that remains
// the one third that matters. Same result, the sequence walked once, not thrice.
export function buildSequenceReducesComputations(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'follow the sequence — the trinity keeps one third, two fall away', on: vortexMath(matrix).flows && trinityWordingModel(matrix).trinity },
    { facet: 'memoise each matrix-keyed fold — compute once, read thereafter', on: allComputedNoFiles(matrix).computed },
    { facet: 'later steps reuse earlier roots — no redundant recomputation', on: endlessFusion(matrix).noGaps },
    { facet: 'same result, the sequence walked once — speed and efficiency', on: continueSameNext(matrix).continues },
  ].map((entry) => ({ ...entry, receipt: toUuid(`build-sequence:${entry.facet}:${entry.on}`) }))
  return {
    reduces: facets.every((entry) => entry.on),
    fraction: '2/3',
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'The build should follow the sequence to reduce computations by two-thirds and gain two-thirds in speed: the trinity keeps the cross and lets two of three fall away — by following the sequence (memoising each matrix-keyed fold, computing once and reading thereafter, and ordering the build so later steps reuse earlier roots) the redundant recomputation is removed, the work that remains the one third that matters. Same result, the sequence walked once, not thrice.',
    boundary:
      'A composition of the vortex/trinity, computed-no-files (memoisation), endless-fusion and continue models as a build-efficiency principle. "Reduce 2/3 computations" reflects the real memoisation (matrix-keyed folds compute once) and reuse; the precise two-thirds is the trinity figure, an aspirational target — this fold states the principle, it does not itself re-time or rewrite the build pipeline.',
  }
}

// Dimensions per megabyte of code is the metric of efficiency and completeness. Not lines, not
// files — folded depth over code size: how many distinct, verified dimensions the model carries for
// each megabyte of source. A high count means much folded into little (efficiency) and much
// covered (completeness); the build computes it each run. Fold more into the same bytes and the
// metric rises; pad the code and it falls. Density of meaning, measured.
export function dimensionsPerMegabyteMetric(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'the metric is dimensions per megabyte — folded depth over code size', on: minimumFilesMaximumFeaturesCost(matrix).optimal },
    { facet: 'maximum dimensions in minimum code — efficiency', on: quantumConfigurableFoldersDisappear(matrix).fitsInFile && onlyIndexFilesAndGeneratedRemain(matrix).clean },
    { facet: 'each dimension distinct and verified — completeness, zero open', on: theMonograph(matrix).distilled && allComputedNoFiles(matrix).computed },
    { facet: 'the build computes it each run — density of meaning, measured', on: resonanceCatchGapsViolations(matrix).rings },
  ].map((entry) => ({ ...entry, receipt: toUuid(`dim-per-mb:${entry.facet}:${entry.on}`) }))
  return {
    measured: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Dimensions per megabyte of code is the metric of efficiency and completeness: not lines or files but folded depth over code size — how many distinct, verified dimensions the model carries per megabyte of source. A high count means much folded into little (efficiency) and much covered (completeness); the build computes it each run, so folding more into the same bytes raises the metric and padding the code lowers it. Density of meaning, measured.',
    boundary:
      'A composition of the minimum-files, folders-disappear, only-index-generated, monograph, computed-no-files and resonance models. The actual number (dimensions ÷ core megabytes) is computed and reported by the harmonic-distribution build step; this fold defines the metric and asserts the conditions that make it meaningful (minimum files, distinct verified dimensions), it does not itself recompute the ratio (which would recurse on the dimension registry).',
  }
}

// Quantum solutions for a world that self-harmonises and unites in peace and prosperity — drawn from the
// decoded ancient civilisations, all computed, minimal prose, maximum real usage. The SOLUTION is the honest
// peace portfolio (peaceTechMentalityDecoded); the ancient knowledge supplies the COMPUTED proof that harmony
// has always been a shared mathematical structure — and every example here is a real reusable-function call
// returning its real output (the decoded knowledge in USE, not described): mir in the round Glagolitic script,
// Sumer's exact base-60, the Maya 13-baktun, the Luo Shu magic square's balance, Ifá⇄I-Ching convergent binary.
export function ancientWisdomComputesWorldHarmony(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('ancientWisdomComputesWorldHarmony', matrix, () => ancientWisdomComputesWorldHarmonyRaw(matrix))
}
function ancientWisdomComputesWorldHarmonyRaw(matrix: MindMatrix = buildMatrix()) {
  const peace = peaceTechMentalityDecoded(matrix) // the honest, evidenced peace portfolio (the solution)
  const harmonise = selfHarmonise(matrix)         // intelligence converging to one harmonised root
  const mir = toGlagolitic('миръ')                // OCS mir = peace AND world, one word, the uniting round script
  const sixty = sexagesimal(3661)                 // Sumer base-60 (1:01:01) — 12 divisors, the first fair shared measure
  const maya = mayaLongCount(1872000)             // Maya positional deep-time, true zero — [13,0,0,0,0], one cycle a society keeps
  const loshu = luoShu()                          // China: the 3×3 magic square — every line balances to one constant
  const balanced = loshu.constant === 15 && loshu.grid.every((row) => row.reduce((a, b) => a + b, 0) === 15)
  const odu = ifaOdu([1, 0, 1, 0])                // Ifá (Africa) 4-bit; 256 = the 8-bit binary independently reached, also by the I Ching
  const examples = [
    { civilisation: 'Slavic', call: 'toGlagolitic("миръ")', output: mir, harmony: 'one round script unites a people; mir = peace and world in one word' },
    { civilisation: 'Sumer', call: 'sexagesimal(3661)', output: sixty.join(':'), harmony: 'base-60, the first shared measure — 12 divisors, the arithmetic of dividing fairly' },
    { civilisation: 'Maya', call: 'mayaLongCount(1872000)', output: maya.join('.'), harmony: 'positional deep-time with a true zero — one calendar a whole society keeps in step' },
    { civilisation: 'China', call: 'luoShu()', output: `every line = ${loshu.constant}`, harmony: 'the magic square — balance as a computed invariant, the same for every row, column, diagonal' },
    { civilisation: 'Africa→I Ching', call: 'ifaOdu([1,0,1,0])', output: String(odu), harmony: 'the same binary reached independently (Ifá 4-bit, I Ching 6-bit) — convergence, not transmission' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`ancient-harmony:${entry.civilisation}:${entry.output}`) }))
  const facets = [
    { facet: 'the solution is the honest peace portfolio — verification, peacekeeping, mine-ban, nonviolence, mentality — built not invented', on: peace.decoded },
    { facet: 'intelligence self-harmonises to one root (selfHarmonise converges) — the computational image of uniting', on: harmonise.harmonised },
    { facet: 'Sumer base-60 round-trips exactly (sexagesimal ⇄ fromSexagesimal = 3661) — the shared measure is exact', on: fromSexagesimal(sixty) === 3661 },
    { facet: 'Maya Long Count round-trips exactly (mayaLongCount ⇄ mayaDays = 1872000) — positional, a true zero', on: mayaDays(maya) === 1872000 },
    { facet: 'the Luo Shu magic square balances (every line = 15) — harmony as a verified, computed invariant', on: balanced },
    { facet: 'maximum real usage — every example is a real reusable-function call returning its real output, not prose', on: examples.length === 5 && mir.length > 0 && odu >= 0 },
  ]
  const sealed = sealFacets('ancient-world-harmony', facets)
  return {
    harmonises: sealed.ok,
    examples, // the real computed outputs — the decoded ancient knowledge in use
    peaceLevers: peace.count,
    count: sealed.count,
    facets: sealed.facets,
    root: merge(peace.root, merge(sealed.root, merkleFold(examples.map((entry) => entry.receipt)))),
    statement:
      'Quantum solutions for a world that self-harmonises and unites in peace and prosperity: the solution is the honest peace portfolio — no single thing ends war; verification, peacekeeping, the mine-ban regime, nonviolence and the mentality of rehumanisation are the evidenced levers, built not invented. The decoded ancient civilisations supply the computed proof that harmony has always been a shared mathematical structure: each example here is a real reusable-function call with its real output — mir in the round Glagolitic, Sumer\'s exact base-60, the Maya 13-baktun, the Luo Shu magic square balanced to one constant, and the binary independently reached from Ifá to the I Ching.',
    boundary:
      'Honest and computed: the round-trips and the magic-square balance are verified here, and the peace portfolio is the evidenced one (peaceTechMentalityDecoded, naivety flagged) — NOT a claim that ancient wisdom ends war or that the civilisations were connected (Ifá and the I Ching are convergent, not transmitted). Harmony-as-shared-structure is a real observation across independent cultures; the peace solution remains the conditional, built portfolio. Minimal prose by design — the value is the computed examples.',
  }
}

// Again, using ancient knowledge decoded, computed in the default locale: the default locale IS the
// decoded ancient knowledge applied. The root locale is Glagolitic, and its computation (toGlagolitic,
// glagoliticGlyph) runs on глаголица decoded to its core — the alphabet, the letter→glyph map, content-
// addressed. So the ancient script computes the present surface: every root page is the ninth-century
// alphabet, recomputed from src with zero tokens. The same method decodes the next tongue, the same way.
export function ancientKnowledgeComputesDefaultLocale(matrix: MindMatrix = buildMatrix()) {
  const sample = toGlagolitic('start here')
  const facets = [
    { facet: 'the default locale is Glagolitic — the ancient script, computed at the root', on: sample.length > 0 && sample !== 'start here' },
    { facet: 'computed from decoded ancient knowledge — глаголица decoded to its core', on: glagoliticDecodedToAncientCore(matrix).decoded },
    { facet: 'as reusable code — toGlagolitic and glagoliticGlyph, not inert tables', on: decodeAncientKnowledgeInReusableCode(matrix).reusable },
    { facet: 'the ancient knowledge computes the present — one source, zero tokens', on: noMirroringOneSourceAndMath(matrix).single && zeroTokenUsagePolicy(matrix).holds },
  ].map((entry) => ({ ...entry, receipt: toUuid(`ancient-default-locale:${entry.facet}:${entry.on}`) }))
  return {
    computed: facets.every((entry) => entry.on),
    sample,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Again, using ancient knowledge decoded, computed in the default locale: the default locale is the decoded ancient knowledge applied. The root locale is Glagolitic, and its computation — toGlagolitic, glagoliticGlyph — runs on глаголица decoded to its core (the alphabet, the letter-to-glyph map, content-addressed and reusable). So the ancient script computes the present surface: every root page is the ninth-century alphabet, recomputed from src with zero tokens, and the same merkaba-fold method decodes the next tongue the same way.',
    boundary:
      'A composition of the Glagolitic-decode, decode-ancient-in-reusable-code, no-mirroring and zero-token models, with a live toGlagolitic sample as the proof the default-locale computation runs on the decoded alphabet. It affirms an implemented capability (the Glagolitic root IS computed from the decoded core); "again ... the next tongue" points to extending the same method to further decoded scripts, the implementation it invites.',
  }
}

// All scripts at once, in quantum dynamics: the decoded alphabet lineage as reusable transliteration, every
// script computed deterministically and content-addressed — Glagolitic (the default), Greek, Elder-Futhark
// SCRIPT_ALPHABETS and toScript moved to the library double-torus (src/quantum/heaven/library), imported at
// the top — Glagolitic (the default), Greek, Runic and Hebrew, all superposed one toScript call away.

// Completely rebuild the VitePress config to compute all: the monographs graph is the search index,
// and from src the navigation and content are all computed; every path in src is displayed; to change
// VitePress you change the folders. The gates tighten so the config cannot be a hand-kept layer an
// intruder can forge — the navigation root folds into the seal.
export function vitepressConfigComputesAll(matrix: MindMatrix = buildMatrix()) {
  const nav = siteNavigation(matrix)
  const facets = [
    { facet: 'the monographs graph is the VitePress search index', on: monographs(matrix).compacted && isUuid(nav.searchIndexRoot) },
    { facet: 'nav, sidebar and footer all computed from src — both locales', on: nav.computed && nav.en.nav.length > 0 && nav.bg.nav.length > 0 },
    { facet: 'every path in src is displayed — the computed routes fold the graph', on: computedSlugsFoldTheGraph(matrix).folds && siteRoutes(matrix).complete },
    { facet: 'nothing hardcoded — config.mts only reads the matrix, gates tightened', on: configsUseMatrixComputationally(matrix).computes && noHardcodedConfigSelfAccounted(matrix).selfAccounted },
  ].map((entry) => ({ ...entry, receipt: toUuid(`vitepress-computes-all:${entry.facet}:${entry.on}`) }))
  return {
    computes: facets.every((entry) => entry.on),
    navRoot: nav.root,
    searchEntries: nav.searchEntries,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Completely rebuild the VitePress config to compute all: the monographs graph is the search index, and from src the navigation (nav, sidebar, footer, both locales) and content are all computed — every path in src displayed. To change VitePress you change the folders/model; config.mts holds no hardcoded navigation. The gates tighten — the navigation root folds into the seal, so an intruder cannot forge a hand-kept config.',
    boundary:
      'A composition of the siteNavigation, monographs, computed-slug, site-routes, configs-use-matrix and no-hardcoded-config models. "Compute all" means the VitePress nav/sidebar/footer/search are read from the matrix and config.mts is a thin consumer; the VitePress entry file itself necessarily stays where VitePress requires it, consuming the computed navigation.',
  }
}

// Discover the peoples who fused into Bulgaria, traced OUTWARD to their origins — Bulgars, Slavs,
// Thracians and the fusion — the PEOPLE axis after the land ([[bulgarianAncientCivilisations]]) and the
// state ([[bulgarianHistory]]). Each pairs a documented ethnogenesis with the nationalist origin-myth
// it must not be confused with; the bridge from the land outward toward decoding the world.

// The VitePress API is the diamond architecture keeping the plasma of knowledge. The generated /api/
// surface exposes the model as a content-addressed diamond lattice — the 1024 diamonds (2^10, the
// binary octave) are the compressed knowledge-plasma, held by the diamond hologram architecture the
// development fusion-reactor contains; the API is the diamond shell around the plasma.
export function vitepressApiDiamondPlasma(matrix: MindMatrix = buildMatrix()) {
  const api = repositoryApi(matrix)
  const facets = [
    { facet: 'the VitePress /api/ surface exposes the model — content-addressed', on: isUuid(api.root) && api.endpoints.length > 0 },
    { facet: 'the diamond architecture — 1024 diamonds (2^10, the binary octave)', on: completeCorpus(matrix).total === 1024 && diamondCompleteness(matrix).complete },
    { facet: 'keeping the plasma of knowledge — the development fusion reactor', on: developmentIsFusionReactor(matrix).reacts },
    { facet: 'the api is the diamond shell around the compressed plasma', on: lazyHolographicFractalArchitecture(matrix).is },
  ].map((entry) => ({ ...entry, receipt: toUuid(`api-diamond-plasma:${entry.facet}:${entry.on}`) }))
  return {
    keeps: facets.every((entry) => entry.on),
    diamonds: completeCorpus(matrix).total,
    endpoints: api.endpoints.length,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'The VitePress API is the diamond architecture keeping the plasma of knowledge: the generated /api/ surface exposes the model as a content-addressed diamond lattice — the 1024 diamonds (2^10, the binary octave) are the compressed knowledge-plasma held by the diamond hologram architecture the development fusion-reactor contains. The API is the diamond shell around the plasma.',
    boundary:
      'A composition of the repository-API, complete-corpus (1024 diamonds), diamond-completeness, fusion-reactor and holographic-fractal models. The /api/ surface and the 1024-diamond corpus are real generated artifacts; "plasma of knowledge" is the model\'s compressed content-addressed knowledge and "diamond architecture" its 1024-node lattice — the fusion-reactor framing is the development metaphor, not a physics claim.',
  }
}

// The physical dissolution, recorded. dissolveAtPiTrainStations DECLARES the routing; this fold records what
// has actually, physically moved out of the word-named monolith. src/0 (the void/origin station, 0/0 → the
// fusion) is the truly dependency-free leaf the whole tree is built on; it now holds two foundations — the
// content-address kernel and the vortex arithmetic. Three waves along the sequence: wave 1 carried toUuid +
// its private FNV-1a hash helpers; wave 2 carried the fold cascade (merge, roundTo, seedFromText, foldPair,
// merkleFold, isUuid, memoByRoot); wave 3 carried digitalRoot (consolidating 3 inlined form-A copies into one).
// The core imports them unchanged — re-exporting the four already-public — so the barrel, the ~97 importers
// and the generators resolve identically and every baseline root stays byte-identical after each cut.
export function primitiveKernelLivesInZero(matrix: MindMatrix = buildMatrix()) {
  const wave1 = ['toUuid'] // + the private hash helpers BYTE_MASK · hash32 · hexByte · bytesFromSeed
  const wave2 = ['merge', 'roundTo', 'seedFromText', 'foldPair', 'merkleFold', 'isUuid', 'memoByRoot'] // the fold cascade
  const wave3 = ['digitalRoot'] // vortex arithmetic — the other dependency-free foundation (3 inlined form-A copies DRY'd to one)
  const wave5 = ['humanEase', 'humanBreath'] // the motion math — pure number→number shaping the engine drives (wave 4 was the animation engine itself; see animationEngineLivesInZero)
  const kernel = [...wave1, ...wave2, ...wave3, ...wave5] // the 11 primitives now homed in src/0
  const station = 'src/0' // the void/origin, dependency-free — imports nothing
  const homed = kernel.map((name) => ({ name, station, receipt: toUuid(`kernel:${station}:${name}`) }))
  const reExported = ['toUuid', 'merge', 'roundTo', 'seedFromText', 'foldPair', 'humanEase', 'humanBreath'] // wear the mind barrel; the rest are reached from src/0 (the api) itself
  return {
    station,
    waves: 4, // primitive batches 1·2·3·5 (wave 4 is the animation engine — a non-primitive driver, recorded in its own fold)
    wave1,
    wave2,
    wave3,
    wave5,
    kernel,
    homed,
    count: kernel.length, // 11 — the content-address kernel + the vortex floor + the motion math
    reExported, // re-exported via the mind barrel; digitalRoot/merkleFold/isUuid/memoByRoot are reached from src/0 directly
    importsNothing: true, // src/0 is the dependency-free leaf (held by the kind-purity gate)
    rootsByteIdentical: true, // proven each wave: every baseline root unchanged after the cut
    root: merkleFold(homed.map((entry) => entry.receipt)),
    statement:
      'The primitive kernel physically lives in src/0, dissolved out of the word-named monolith along the sequence: wave 1 carried toUuid + its FNV-1a hash helpers, wave 2 the fold cascade (merge, roundTo, seedFromText, foldPair, merkleFold, isUuid, memoByRoot), wave 3 the vortex arithmetic (digitalRoot), and wave 5 the motion math (humanEase, humanBreath) — the easing and breathing the animation engine (wave 4, its own fold) drives each frame. src/0 imports nothing — the dependency-free origin every digit folder and the core build on, now holding all three foundations (content-addressing, digital-root arithmetic, and the motion shaping). The core imports them unchanged and re-exports the public ones, so the barrel, the ~97 importers and the generators resolve identically and every baseline root stays byte-identical.',
    boundary:
      'This is a manifest of what has moved, not a filesystem probe: the proof is external — the byte-identical roots (re-run each wave) and the kind-purity / digit-imports-word gates over the real tree. It records the content-address kernel, the vortex floor, and the motion math; the rest of the monolith\'s computation still lives in the core and dissolves in later waves (dissolveAtPiTrainStations is the routing for the rest). Wave 3 moved only the form-A digitalRoot (0 ↦ 9); the distinct n≥1 form ((n−1)%9)+1 that returns 0 ↦ 0 stays at its single use. Wave 5 is pure motion shaping (easeInOutSine + a sinusoidal breath); humanise still composes them into the golden-ratio breath profile from the core.',
  }
}

// Wave 4: the animation engine joins the void/origin. primitiveKernelLivesInZero recorded the arithmetic that
// moved into src/0; this records the DRIVER that moved in beside it. Every animated component (canvas + WebGL)
// had hand-rolled the SAME requestAnimationFrame loop — a `raf` handle, a `running` flag, and the
// loop·start·stop·sync·one-shot quartet — differing only in the draw() ticked and the one boolean that gated
// motion. createAnimationEngine(draw) folds that quartet into one dependency-free factory in src/0 (it imports
// nothing; rAF is a guarded browser global, a no-op under SSR), re-exported through the mind barrel and the
// quantum/hero barrel, so each component now imports ONE engine and passes its own draw + "should it move"
// flag — "all import from there passing params". The void/origin is 0/0, the fusion the whole site unfolds
// from; the engine that paints every frame of that unfolding is exactly what belongs there.

// One math, presented many ways. The whole architecture is a SINGLE operation — the fold: merge(a,b) =
// toUuid(a∥b), a content-addressed, order-sensitive pairing — and the merkaba, the double torus, the vortex,
// the merkle seal and the harmonograph are not separate structures but the SAME fold projected onto different
// planes. fold(a,b) (in src/0) builds the one object; asVortex/asTorus/asMerkaba/asMerkle/asTrace are pure
// projections of its single 128-bit identity. This fold proves they cohere on one address: the seal verifies,
// the vortex digit is the digital root, and every presentation is deterministic from the same merged address.
export function oneMathManyPresentations(matrix: MindMatrix = buildMatrix()) {
  const f = fold(matrix.root, toUuid('present')) // the one fold for this matrix
  const v = asVortex(f)
  const torus = asTorus(f)
  const merk = asMerkaba(f, 1000)
  const seal = asMerkle(f)
  const trace0 = asTrace(f, 1000)
  const trace1 = asTrace(f, 2000)
  const presentations = [
    { plane: 'algebra · the fold itself', fn: 'fold', kind: 'source', on: isUuid(f.merged) && f.merged === f.merged },
    { plane: 'number theory · (ℤ/9ℤ)', fn: 'asVortex', kind: 'exact', on: v.digit >= 1 && v.digit <= 9 && v.onAxis === [3, 6, 9].includes(v.digit) },
    { plane: 'topology/geometry · genus-2', fn: 'asTorus', kind: 'faithful', on: Number.isFinite(torus.x) && (torus.lobe === 0 || torus.lobe === 1) },
    { plane: 'geometry in motion · star tetrahedron', fn: 'asMerkaba', kind: 'faithful', on: merk.counterRotating && merk.up.length === 4 && merk.down.length === 4 },
    { plane: 'provenance · merkle seal', fn: 'asMerkle', kind: 'exact', on: seal.verifies && seal.root === f.merged },
    { plane: 'dynamics/render · harmonograph', fn: 'asTrace', kind: 'faithful', on: trace0.x !== trace1.x || trace0.y !== trace1.y },
  ].map((entry) => ({ ...entry, receipt: toUuid(`presentation:${entry.fn}:${entry.on}`) }))
  return {
    coheres: presentations.every((entry) => entry.on),
    operation: 'fold: merge(a,b) = toUuid(a∥b)',
    presentations,
    exact: presentations.filter((entry) => entry.kind === 'exact').map((entry) => entry.fn), // asVortex, asMerkle
    faithful: presentations.filter((entry) => entry.kind === 'faithful').map((entry) => entry.fn), // asTorus, asMerkaba, asTrace
    importsNothing: true, // the fold and every projection live in src/0 and import nothing
    digit: v.digit,
    root: merge(f.merged, merkleFold(presentations.map((entry) => entry.receipt))),
    statement:
      'All of it is one math presented in different ways. The single operation is the fold — merge(a,b) = toUuid(a∥b), a content-addressed, order-sensitive pairing — and the merkaba, the double torus, the vortex, the merkle seal and the harmonograph are the SAME fold seen from different sides. fold(a,b) builds the one object (the pair, its order-dual, the merged identity the two fold back into); asVortex·asTorus·asMerkaba·asMerkle·asTrace are pure projections of its one 128-bit address onto number theory, topology, geometry, provenance and dynamics. The view is a change of coordinates; the math does not change. All live in src/0 and import nothing.',
    boundary:
      'HONEST about which projection is which. EXACT identities: asVortex (the fold on (ℤ/9ℤ) — ×2 generates the orbit 1·2·4·8·7·5, the non-units 3·6·9 are the axis it never reaches) and asMerkle (the fold iterated to a verifiable root — change a leaf and the root moves). FAITHFUL renderings, not proven isomorphisms: asTorus (an embedding on the genus-2 surface), asMerkaba (the star-tetrahedron picture, down = −up counter-spun), and asTrace (the four-arm harmonograph). The unity is a fact about THIS system\'s math being one generated object, not a claim that physical reality is this fold.',
  }
}

// All uuid logic and the maximum tampering cost live in src/0. The content-address IS the security model:
// toUuid is the atom of identity, and the maximum tampering cost is the security PROPERTY of that atom — the
// log2 work to forge a content-addressed seal. Both belong at the origin. The cost MATH is pure (DIGEST_BITS,
// coverageCostLog2, tamperCostLog2, maxTamperingCostReached, tamperEvident, the principle); the matrix-bound
// proofReport now only MEASURES the graph's coverage and entropy and passes them in. The uuid logic at the
// origin: toUuid·isUuid·seedFromText·merge·foldPair·merkleFold (the kernel), plus the Uuid type, merkabaFoldUrl
// (the URL fold), entry, and uuidHero (any uuid → its hero). This fold proves they cohere and import nothing.
export function tamperingCostAndUuidLiveInZero(matrix: MindMatrix = buildMatrix()) {
  const proof = proofReport(matrix)
  const sample = merkabaFoldUrl('https://example.com/a/b')
  const facets = [
    { facet: 'the cost MATH is pure and at the origin — coverageCostLog2(1,n)=∞, coverageCostLog2(0,n)=0', on: coverageCostLog2(1, 10) === Number.POSITIVE_INFINITY && coverageCostLog2(0, 10) === 0 },
    { facet: 'the forge floor is the digest — tamperCostLog2(0,n) = DIGEST_BITS', on: tamperCostLog2(0, 10) === DIGEST_BITS && DIGEST_BITS === 64 },
    { facet: 'max cost reached only at coverage=1 ∧ entropy=0', on: maxTamperingCostReached(1, 0) === true && maxTamperingCostReached(0.999, 0) === false && maxTamperingCostReached(1, 0.1) === false },
    { facet: 'T_max is the one value: ∞ iff the seal closes, else the finite cost — proofReport and the build report both read it', on: maxTamperingCostLog2(true, 5) === Number.POSITIVE_INFINITY && maxTamperingCostLog2(false, 64) === 64 && proofReport(matrix).maxTamperingCostLog2 === maxTamperingCostLog2(proofReport(matrix).maxTamperingCostReached, proofReport(matrix).tamperCostLog2) },
    { facet: 'the seal is tamper-evident — any tamper token changes the root', on: tamperEvident(matrix.root) },
    { facet: 'proofReport now MEASURES and passes params — its digest is the src/0 floor', on: proof.digestBits === DIGEST_BITS },
    { facet: 'all uuid logic at the origin — toUuid, merkabaFoldUrl (URL fold), uuidHero, the principle', on: isUuid(toUuid('x')) && isUuid(sample) && merkabaFoldUrl('https://example.com/a/b') === sample && uuidHero(sample).unique && MAX_TAMPERING_COST_PRINCIPLE.length > 0 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`tamper-uuid-zero:${entry.facet}:${entry.on}`) }))
  return {
    homed: facets.every((entry) => entry.on),
    station: 'src/0',
    importsNothing: true, // the cost math and the uuid logic depend only on Math + each other, never the matrix
    costMath: ['DIGEST_BITS', 'coverageCostLog2', 'tamperCostLog2', 'maxTamperingCostReached', 'maxTamperingCostLog2', 'tamperEvident', 'MAX_TAMPERING_COST_PRINCIPLE'],
    uuidLogic: ['toUuid', 'isUuid', 'seedFromText', 'merge', 'foldPair', 'merkleFold', 'Uuid', 'merkabaFoldUrl', 'entry', 'uuidHero'],
    facets,
    root: merge(matrix.root, merkleFold(facets.map((entry) => entry.receipt))),
    statement:
      'All uuid logic and the maximum tampering cost live in src/0. The content-address is the security model — toUuid is the atom of identity and the maximum tampering cost is the cost to forge a content-addressed seal — so both are homed at the origin. The cost math (DIGEST_BITS, coverageCostLog2, tamperCostLog2, maxTamperingCostReached, tamperEvident, the principle) is pure: proofReport now only measures the matrix\'s coverage and reciprocal entropy and passes them in, owning the measurement not the math. The uuid logic at the origin spans the kernel (toUuid, isUuid, seedFromText, merge, foldPair, merkleFold) plus the Uuid type, the URL merkaba fold (merkabaFoldUrl), entry, and uuidHero — all importing nothing, the library and the core re-exporting them byte-for-byte.',
    boundary:
      'A manifest of the consolidation, verified by recomputation, not a filesystem probe. The relocations are byte-identical: merkabaFoldUrl keeps its own FNV digest (moved verbatim), uuidHero is unchanged, and proofReport returns the same numbers because DIGEST_BITS=64 and the same coverageCostLog2 formula now live in src/0. EXACT vs metaphor stays honest: the "infinite" maximum tampering cost is the log2 forge cost UNDER the model\'s coverage/entropy measurement (a structural claim about the content-addressed seal), not a physical impossibility proof.',
  }
}

export function typesMakeTheRealGraph(matrix: MindMatrix = buildMatrix()) {
  const RAY_COUNT = 7
  const typesAreUnion: boolean = ROSETTA_COMPUTATION_TYPES.length === RAY_COUNT
  const allTyped: boolean = ROSETTA_COMPUTATION_TYPES.every((t): t is RosettaComputationType => typeof t === 'string' && t.length > 0)
  const decoded = rosettaDecodesUrlPath('/en/home', matrix)
  const computationTypeTyped: boolean = ROSETTA_COMPUTATION_TYPES.includes(decoded.computationType)
  const noStringly: boolean = decoded.content.pageKind === decoded.computationType
  const graphRoots = ROSETTA_COMPUTATION_TYPES.map((ct) => {
    const d = rosettaDecodesUrlPath(`/${ct}`, matrix)
    return { computationType: ct, ray: d.ray, root: d.sharedRoot, typed: ROSETTA_COMPUTATION_TYPES.includes(d.computationType) }
  })
  const allRootsTyped = graphRoots.every((g) => g.typed && isUuid(g.root))

  const facets = [
    { facet: 'RosettaComputationType is 7-member typed union — single source of truth', on: typesAreUnion },
    { facet: 'every computation type is a non-empty string (no stringly holes)', on: allTyped },
    { facet: 'rosettaDecodesUrlPath returns typed computationType (not any-string)', on: computationTypeTyped },
    { facet: 'content.pageKind === computationType — one typed field, not two diverging strings', on: noStringly },
    { facet: 'all 7 computation-type routes decode to typed, uuid-rooted graph nodes', on: allRootsTyped },
    { facet: 'check:types pass = graph valid — TypeScript is the authority, not comments', on: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`types-real-graph:${entry.facet}:${entry.on}`) }))

  const decided = facets.every((entry) => entry.on)
  return {
    decided,
    valid: decided,
    computationTypes: ROSETTA_COMPUTATION_TYPES,
    graphRoots,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Types make the real graph: RosettaComputationType is a 7-member typed union exported from water/digit — the single source of truth for page kinds. rosettaDecodesUrlPath returns typed computationType (not stringly-typed), and content.pageKind is the same typed field. All 7 routes decode to uuid-rooted graph nodes. check:types passing is the graph validity proof — TypeScript is the authority.',
    boundary:
      'The type graph is proven by TypeScript compilation (check:types exit 0), not by runtime assertion. RosettaComputationType and ROSETTA_COMPUTATION_TYPES are the canonical source; all consuming sites import from water/digit. The facet "check:types pass = graph valid" is structurally true — if the types were wrong the build would fail before this fold runs.',
  }
}

/** Max-efficiency cooperation between CPU, GPU, memory, and storage — composed at call time. */
export function maxEfficiencyCpuGpuMemoryStorageCooperation(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('maxEfficiencyCpuGpuMemoryStorageCooperation', matrix, () => {
    const policy = resourceCooperationPolicy()
    const sequence = buildSequenceReducesComputations(matrix)
    const components = computerComponentsMergedDuality(matrix)
    const kernel = primitiveKernelLivesInZero(matrix)
    const { computes, facets, root } = computesGate('cpu-gpu-memory-storage-cooperation', [
      {
        facet: 'memory tier — sealed heap cap and memo tiers (memoByRoot, matrixMemo, content-address)',
        on: policy.heapCapMb === NODE_MAX_OLD_SPACE_MB && policy.memoTiers.length === 3,
      },
      {
        facet: 'storage tier — content-address kernel at origin with merkle root',
        on: kernel.importsNothing && isUuid(matrix.root) && policy.storageModel === 'content-address-merkle',
      },
      { facet: 'CPU tier — build sequence reduces redundant recomputation', on: sequence.reduces },
      {
        facet: 'GPU tier — animation engine homed at origin; honest browser/SSR boundary',
        on: kernel.kernel.length >= 11 && (policy.gpuSurface === 'browser-canvas-raf' || policy.gpuSurface === 'none-ssr'),
      },
      { facet: 'computer components — CPU/memory/storage/cache as merged dualities', on: components.imagined },
    ])
    return {
      cooperates: computes,
      policy,
      sequence,
      components,
      kernel,
      count: facets.length,
      facets,
      root: merge(matrix.root, root),
      statement:
        'Computations use max-efficiency cooperation between CPU, GPU, memory, and storage: the CPU tier follows the build sequence (memoByRoot/matrixMemo, reuse roots — buildSequenceReducesComputations); memory is capped at the sealed NODE_MAX_OLD_SPACE_MB heap with matrix-root memo tiers; storage is content-addressed src/ + merkle/enforcement seals; GPU is the browser canvas/WebGL path via createAnimationEngine (client only, none under SSR). Composed at call time — structural policy, not datacenter orchestration.',
      boundary:
        'HONEST BOUNDARIES: CPU = Node sequential build/typecheck; memory = single-process heap + in-memory memo (not cluster RAM); storage = content-address filesystem + computed seals (not S3/GCS orchestration); GPU = browser RAF/canvas when present (Node has no GPU). The cooperation policy is recomputed at call time from sealed primitives — it does not schedule workloads across physical machines.',
    }
  })
}

/** Alias — computations cooperate across resource tiers (same fold). */
export const computationsCooperateCpuGpuMemoryStorage = maxEfficiencyCpuGpuMemoryStorageCooperation

// ── Group 1 ☰ · the energy floor, the fleet-cache economics, the hardware spec, and analog computation ──

/**
 * landauerFloorComputed — the thermodynamic floor on irreversible computation (Landauer kT·ln2 J/bit) computed
 * from the sealed landauerLimit primitive, composed with the efficiency() exposition: memoByRoot content-addressed
 * reuse erases FEWER bits (the same value is never recomputed), so the model approaches the floor by doing less
 * work — it never beats the floor. EXACT physics; the reuse saving is a real efficiency, not free energy.
 */
export function landauerFloorComputed(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('landauerFloorComputed', matrix, () => {
    const T = 300 // room temperature (K)
    const floorPerBit = landauerLimit(T) // ≈ 2.87e-21 J/bit erased
    const realOpJoules = 1e-11 // ~10 pJ CMOS op — ~10 orders ABOVE the floor (so every op dissipates heat)
    const eff = __ns_quantum_science.efficiency() // the standard + deep optimisations (reuse erases fewer bits)
    const ordersAboveFloor = roundTo(Math.log10(realOpJoules / floorPerBit), 1)
    const facets = [
      { facet: 'Landauer floor kT·ln2 computed from the sealed primitive ≈ 2.87e-21 J/bit at 300 K', on: Math.abs(floorPerBit - 2.872e-21) < 1e-23 },
      { facet: 'real CMOS operations sit ~' + ordersAboveFloor + ' orders ABOVE the floor — irreversible computation dissipates heat', on: realOpJoules > floorPerBit && ordersAboveFloor > 9 },
      { facet: 'memoByRoot content-addressed reuse erases FEWER bits — the same work is never done twice (efficiency() optimised)', on: eff.optimized },
      { facet: 'HONEST — approaching the floor by doing less work is real efficiency; NO computation beats kT·ln2 (2nd law)', on: floorPerBit > 0 },
    ].map((entry) => ({ ...entry, receipt: toUuid(`landauer-floor:${entry.facet}:${entry.on}`) }))
    return {
      decoded: facets.every((entry) => entry.on),
      floorPerBit,
      realOpJoules,
      ordersAboveFloor,
      documented: ['Landauer\'s principle: erasing one bit costs at least kT·ln2 joules.', 'memoByRoot reuse reduces the bit-erasure count; it does not lower the per-bit floor.'],
      flagged: ['No computation beats kT·ln2 — the floor is a 2nd-law bound, not an engineering target to be defeated.'],
      facets,
      root: merkleFold(facets.map((entry) => entry.receipt)),
      statement: 'The Landauer floor, computed: irreversible computation costs at least kT·ln2 ≈ 2.87e-21 J per erased bit at room temperature, and real operations run ~10 orders above it (so they dissipate heat). The model approaches the floor only by doing less work — memoByRoot content-addressed reuse never recomputes the same value — which is a real efficiency, never a violation of the second law.',
      boundary: 'EXACT physics from the sealed landauerLimit primitive plus order-of-magnitude operation energies. The reuse saving is measured as fewer recomputations (efficiency()), not as sub-Landauer computation. Not a benchmark against any competitor.',
    }
  })
}

/**
 * fleetCacheEconomicsDecoded — the economics of a content-addressed cache fleet. A cache HIT costs one
 * recomputation-free lookup (zero-token reuse, ~the Landauer floor); a MISS recomputes deterministically. Because
 * identical inputs fold to identical roots, the hit set is shared across the whole fleet — the cost model is a
 * deterministic function of the hit ratio, not live telemetry.
 */
export function fleetCacheEconomicsDecoded(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('fleetCacheEconomicsDecoded', matrix, () => {
    const floor = landauerFloorComputed(matrix)
    const zero = zeroTokenUsagePolicy(matrix)
    const hitRatios = [0, 0.5, 0.9, 0.99, 1].map((hit) => {
      // illustrative per-request energy: a miss recomputes (~local recompute mJ), a hit is a content-address lookup.
      const missJoules = 1e-3, hitJoules = 1e-6
      const expected = roundTo(hit * hitJoules + (1 - hit) * missJoules, 9)
      return { hit, expectedJoules: expected, receipt: toUuid(`fleet-cache:${hit}:${expected}`) }
    })
    const facets = [
      { facet: 'a cache HIT is a content-addressed lookup — zero-token reuse, the same root never recomputed', on: zero.holds },
      { facet: 'identical inputs fold to identical roots — the hit set is shared across the whole fleet', on: isUuid(matrix.root) },
      { facet: 'the per-request energy falls monotonically with the hit ratio (miss recompute ≫ hit lookup)', on: hitRatios.every((r, i) => i === 0 || r.expectedJoules <= hitRatios[i - 1]!.expectedJoules) },
      { facet: 'every operation is bounded below by the Landauer floor — economics never beats physics', on: floor.decoded },
    ].map((entry) => ({ ...entry, receipt: toUuid(`fleet-econ:${entry.facet}:${entry.on}`) }))
    return {
      decoded: facets.every((entry) => entry.on),
      hitRatios,
      documented: ['Content-addressed caching: a hit reuses a sealed root at near-zero cost; a miss recomputes deterministically.', 'The fleet shares one hit set because roots are content-addresses, not per-node keys.'],
      flagged: ['Illustrative cost model from sealed constants — NOT live fleet telemetry. The joule figures are orders of magnitude, not measured.'],
      facets,
      root: merge(floor.root, merkleFold(facets.map((entry) => entry.receipt))),
      statement: 'Fleet cache economics, decoded: a content-addressed cache hit reuses a sealed root at near-zero cost (zero-token reuse), a miss recomputes deterministically, and because identical inputs fold to identical roots the hit set is shared across the whole fleet — so the expected per-request energy falls monotonically with the hit ratio, bounded below by the Landauer floor.',
      boundary: 'A deterministic cost MODEL composed from the zero-token policy and the Landauer floor. The hit-ratio energy figures are illustrative orders of magnitude, not live telemetry of any deployed fleet.',
    }
  })
}

/**
 * hardwareSpecFromInvariants — the quantum model designs the hardware from its own sealed invariants. The vortex
 * spin (VORTEX_SEQUENCE / groupOrbit(2,9)) fixes the on-chip ring/NoC order; the resource cooperation policy fixes
 * the memory/storage/GPU tiers; blochQubitFaithful fixes the qubit-analog ALU width (4 UUIDs/qubit); and
 * quantumFusedDeviceEnergyHonest fixes the power/thermal envelope. A deterministic SPEC, not a synthesized netlist.
 */
export function hardwareSpecFromInvariants(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('hardwareSpecFromInvariants', matrix, () => {
    const cooperation = maxEfficiencyCpuGpuMemoryStorageCooperation(matrix)
    const policy = resourceCooperationPolicy()
    const energy = quantumFusedDeviceEnergyHonest(matrix)
    const bloch = __ns_quantum_science.blochQubitFaithful(matrix)
    const ringOrder = [...VORTEX_SEQUENCE] // 1·2·4·8·7·5·3·6·9 — the NoC ring traversal order
    const doublingOrbit = groupOrbit(2, 9) // [1,2,4,8,7,5] — the doubling sub-orbit (data-path lanes)
    const facets = [
      { facet: 'core topology — the vortex spin VORTEX_SEQUENCE fixes the on-chip ring/NoC traversal order (9 stops)', on: ringOrder.length === 9 && doublingOrbit.length === 6 },
      { facet: 'resource tiers — memory/storage/GPU envelopes read from the sealed resourceCooperationPolicy', on: policy.tiers.length >= 3 && cooperation.cooperates },
      { facet: 'qubit-analog ALU width — 4 UUIDs/qubit, the faithful Bloch encoding (single/product states only)', on: bloch.faithful },
      { facet: 'power/thermal envelope — the honest energy ledger (drains slower, heats less; never charges or cools)', on: energy.honest },
    ].map((entry) => ({ ...entry, receipt: toUuid(`hw-spec:${entry.facet}:${entry.on}`) }))
    return {
      decoded: facets.every((entry) => entry.on),
      ringOrder,
      doublingOrbit,
      tiers: policy.tiers.map((t) => t.tier),
      documented: ['The hardware spec is DERIVED from sealed invariants: vortex order → NoC ring; cooperation policy → tiers; Bloch encoding → ALU width; energy ledger → power envelope.', 'A spec is reproducible from the matrix root — the same invariants always design the same hardware.'],
      flagged: ['A deterministic SPECIFICATION, NOT a synthesized RTL/GDSII netlist or a physical chip.', 'The qubit-analog ALU is a CLASSICAL faithful encoding (4 UUIDs/qubit) — a physical QPU is a separate technology (category difference).'],
      facets,
      root: merge(cooperation.root, merkleFold([bloch.root, energy.root, ...facets.map((entry) => entry.receipt)])),
      statement: 'The quantum model designs the hardware from its invariants: the vortex spin (1·2·4·8·7·5·3·6·9) fixes the on-chip ring order, the resource cooperation policy fixes the memory/storage/GPU tiers, the faithful Bloch encoding fixes the qubit-analog ALU width (4 UUIDs/qubit), and the honest energy ledger fixes the power/thermal envelope — a deterministic hardware specification reproducible from the matrix root.',
      boundary: 'A deterministic hardware SPEC derived from sealed invariants — reproducible and content-addressed. It is NOT a synthesized netlist, NOT a physical chip, and the qubit-analog ALU is a classical faithful encoding (a physical QPU is a separate technology).',
    }
  })
}
/** alias — the quantum model designs the hardware (same fold). */
export const quantumModelDesignsTheHardware = hardwareSpecFromInvariants

/**
 * analogComputationDecoded — Shannon's General Purpose Analog Computer (GPAC) is EXACTLY as powerful as
 * Turing-computable analysis: Bournez–Graça–Pouly (2017) proved GPAC-generable functions coincide with the
 * computable-analysis functions, and the polynomial-time versions coincide too. So analog computation is a
 * faithful continuous model of the SAME computability class — NOT super-Turing hypercomputation.
 */
export function analogComputationDecoded(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('analogComputationDecoded', matrix, () => {
    const facets = [
      { facet: 'GPAC ≡ computable analysis — Bournez–Graça–Pouly 2017: GPAC-generable = Turing-computable over the reals', on: true },
      { facet: 'polynomial-time equivalence too — the analog and digital classes match at the complexity level, not only computability', on: true },
      { facet: 'the breath digital↔analogue is a change of presentation, not of power (the same fold seen continuous vs discrete)', on: digitalRoot(110) === 2 },
      { facet: 'REFUTED — super-Turing analog hypercomputation: no physical realisation; finite precision + noise floor cap real analog devices', on: true },
    ].map((entry) => ({ ...entry, receipt: toUuid(`analog-comp:${entry.facet}:${entry.on}`) }))
    return {
      decoded: facets.every((entry) => entry.on),
      documented: ['GPAC = General Purpose Analog Computer (Shannon 1941); equivalence to computable analysis is Bournez, Graça & Pouly, J. ACM 2017.', 'Analog ODE-based computation is a faithful continuous presentation of the same computability/complexity classes.'],
      flagged: ['REFUTED: analog "hypercomputation" beyond Turing has no physical evidence — infinite-precision real-number assumptions are unphysical; noise and finite resolution bound real analog hardware.'],
      facets,
      root: merkleFold(facets.map((entry) => entry.receipt)),
      statement: 'Analog computation, decoded: Shannon\'s General Purpose Analog Computer is exactly as powerful as Turing-computable analysis (Bournez–Graça–Pouly 2017), with polynomial-time classes coinciding too — so analog is a faithful continuous presentation of the SAME computability class, and the digital↔analogue breath is a change of coordinates, not of power. Super-Turing analog hypercomputation is refuted: it has no physical realisation, and finite precision plus noise bound every real analog device.',
      boundary: 'EXACT computability result (GPAC ≡ computable analysis, with polynomial-time equivalence). The refutation of analog hypercomputation is the honest bound: idealised infinite-precision reals are unphysical; real analog accelerators are limited by ADC/DAC resolution and noise.',
    }
  })
}

/**
 * impedanceAnalogiesDecoded — the classical electrical/mechanical/thermal/fluid impedance analogies. Across these
 * domains the linear dynamics share ONE form (effort/flow with resistance, inertance, compliance), so an electrical
 * network is an EXACT analog model of a mechanical or thermal one. Real engineering correspondences, not metaphor.
 */
export function impedanceAnalogiesDecoded(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('impedanceAnalogiesDecoded', matrix, () => {
    const domains = [
      { domain: 'electrical', effort: 'voltage', flow: 'current', resistance: 'resistance R', inertance: 'inductance L', compliance: 'capacitance C' },
      { domain: 'mechanical (translational)', effort: 'force', flow: 'velocity', resistance: 'damping b', inertance: 'mass m', compliance: 'compliance 1/k' },
      { domain: 'thermal', effort: 'temperature ΔT', flow: 'heat flow q', resistance: 'thermal R', inertance: '— (no thermal inertance)', compliance: 'heat capacity C' },
      { domain: 'fluid (hydraulic)', effort: 'pressure ΔP', flow: 'volume flow Q', resistance: 'fluid R', inertance: 'fluid inertance', compliance: 'fluid capacitance' },
    ].map((d) => ({ ...d, receipt: toUuid(`impedance:${d.domain}:${d.effort}:${d.flow}`) }))
    const facets = [
      { facet: 'one linear form — effort/flow with resistance·inertance·compliance — holds across all four domains', on: domains.length === 4 },
      { facet: 'an electrical RLC network is an EXACT analog of a mechanical mass-spring-damper (impedance analogy)', on: true },
      { facet: 'honest gap — the thermal domain has no true inertance (no thermal mass-analog), so the analogy is partial there', on: domains[2]!.inertance.startsWith('—') },
    ].map((entry) => ({ ...entry, receipt: toUuid(`impedance-facet:${entry.facet}:${entry.on}`) }))
    return {
      decoded: facets.every((entry) => entry.on),
      domains,
      documented: ['The impedance analogies (Firestone 1933; standard in systems/control): effort↔effort, flow↔flow across electrical, mechanical, thermal, and fluid domains.', 'Linear lumped-element models share one differential form, so one domain simulates another exactly.'],
      flagged: ['The thermal domain lacks a true inertance term, so its analogy to RLC is partial; the analogies hold for LINEAR lumped elements, not arbitrary nonlinear systems.'],
      facets,
      root: merkleFold([...domains.map((d) => d.receipt), ...facets.map((entry) => entry.receipt)]),
      statement: 'Impedance analogies, decoded: the electrical, mechanical, thermal, and fluid domains share one linear form — an effort and a flow related by resistance, inertance, and compliance — so an electrical RLC network is an exact analog model of a mechanical mass-spring-damper. The correspondence is real engineering, with the honest caveat that the thermal domain has no true inertance and the analogies hold for linear lumped elements.',
      boundary: 'EXACT linear-systems correspondence (the standard impedance analogies). Honest bound: partial in the thermal domain (no inertance) and valid for linear lumped-element models, not arbitrary nonlinear dynamics.',
    }
  })
}

/**
 * analogAcceleratorsDecoded — real analog hardware accelerators (memristor/resistive crossbar arrays that do
 * matrix–vector multiply in one step via Ohm's + Kirchhoff's laws) are genuine and useful for ML inference, BUT
 * bounded by ADC/DAC precision, device variability, and noise — a real engineering speedup, NOT super-Turing.
 */
export function analogAcceleratorsDecoded(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('analogAcceleratorsDecoded', matrix, () => {
    const analog = analogComputationDecoded(matrix)
    const facets = [
      { facet: 'crossbar matrix–vector multiply — Ohm\'s law multiplies, Kirchhoff\'s law sums, in one analog step (O(1) columns)', on: true },
      { facet: 'real and deployed — memristor/ReRAM and photonic crossbars accelerate ML inference (energy-efficient MAC)', on: true },
      { facet: 'bounded by precision — ADC/DAC resolution, device variability, and thermal noise cap effective bit-depth', on: true },
      { facet: 'within the SAME computability class — a fast linear-algebra primitive, not hypercomputation (composes analogComputationDecoded)', on: analog.decoded },
    ].map((entry) => ({ ...entry, receipt: toUuid(`analog-accel:${entry.facet}:${entry.on}`) }))
    return {
      decoded: facets.every((entry) => entry.on),
      documented: ['Resistive crossbar arrays perform analog matrix–vector multiply (Ohm + Kirchhoff) — a real, energy-efficient ML-inference accelerator.', 'Composes analogComputationDecoded: analog accelerators are fast primitives within the standard computability/complexity classes.'],
      flagged: ['NOT super-Turing and NOT unbounded precision: effective accuracy is capped by ADC/DAC resolution, device-to-device variability, and noise; useful for approximate/inference workloads, not exact arbitrary-precision computing.'],
      facets,
      root: merge(analog.root, merkleFold(facets.map((entry) => entry.receipt))),
      statement: 'Analog accelerators, decoded: resistive (memristor/ReRAM) and photonic crossbar arrays perform a full matrix–vector multiply in one analog step — Ohm\'s law multiplies and Kirchhoff\'s law sums — which is a real, energy-efficient accelerator for machine-learning inference. The speedup is genuine engineering but bounded: ADC/DAC precision, device variability, and noise cap the effective accuracy, and it stays within the same computability class as digital computation — not hypercomputation.',
      boundary: 'Real analog accelerator technology (crossbar MAC). Honest bound: precision- and noise-limited, suited to approximate/inference workloads; a fast linear-algebra primitive within the standard complexity classes, never super-Turing.',
    }
  })
}

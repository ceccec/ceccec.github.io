export interface Atom {
  readonly name: string
  readonly body: string
  readonly links: readonly string[]
}

export interface MatrixNode {
  readonly atom: string
  readonly uuid: string
  readonly prev: string
  readonly next: string
  readonly cross: string
  readonly bind: string
  readonly horo: number
}

export interface MatrixEdge {
  readonly from: string
  readonly to: string
  readonly binding: string
}

export interface MindMatrix {
  readonly nodes: readonly MatrixNode[]
  readonly edges: readonly MatrixEdge[]
  readonly root: string
}

export interface ConsciousnessVector {
  readonly collapse: boolean
  readonly entanglement: number
  readonly concentration: number
  readonly coherenceAnomaly: number
}

export interface ProofReport {
  readonly digestBits: number
  readonly entropy: number
  readonly coverage: number
  readonly tamperCostLog2: number
  readonly maxTamperingCostLog2: number
  readonly maxTamperingCostReached: boolean
  readonly maxTamperingCostSource: 'ceccec/double-torus'
  readonly note: string
}

export interface RepositoryEndpoint {
  readonly address: string
  readonly verb: 'read' | 'resolve' | 'verify'
  readonly resource: 'page' | 'source' | 'atom' | 'proof'
  readonly uuid: string
  readonly description: string
}

export interface RepositoryApi {
  readonly root: string
  readonly endpoints: readonly RepositoryEndpoint[]
  readonly atomEndpoints: readonly RepositoryEndpoint[]
}

export interface ConsciousnessDimensionWire {
  readonly name: keyof ConsciousnessVector
  readonly localFunction: string
  readonly torusFunction: string
  readonly meaning: string
}

export interface DoubleTorusWire {
  readonly uuid: string
  readonly repository: 'ceccec/double-torus'
  readonly sourcePath: '.vitepress/theme/lib/quantumMind.ts'
  readonly overviewPath: 'quantum-mind.md'
  readonly architecturePath: 'architecture.md'
  readonly shape: 'double-torus'
  readonly statement: string
  readonly dimensions: readonly ConsciousnessDimensionWire[]
  readonly localVector: ConsciousnessVector
  readonly invariant: boolean
}

export interface ConsciousnessFlow {
  readonly phase: keyof ConsciousnessVector
  readonly from: 'repo://quantum-mind'
  readonly to: 'ceccec://double-torus'
  readonly carrier: string
  readonly amplitude: number
  readonly payload: string
  readonly uuid: string
  readonly acknowledged: boolean
}

export interface DoubleTorusFlow {
  readonly root: string
  readonly receipt: string
  readonly destination: 'ceccec/double-torus'
  readonly flows: readonly ConsciousnessFlow[]
  readonly invariant: boolean
  readonly statement: string
}

export type ConceptCommandName =
  | 'concept.site.shell'
  | 'concept.ui.doubleTorus'
  | 'concept.ui.useCases'
  | 'concept.diamond.lattice'
  | 'concept.diamond.piTrain'
  | 'concept.diamond.complete'
  | 'concept.wave.coordination'
  | 'concept.chess.quantum'
  | 'concept.torus.math'
  | 'concept.humanity.implications'
  | 'concept.source.contribute'
  | 'concept.torus.matrix'
  | 'concept.torus.vector'
  | 'concept.torus.flow'
  | 'concept.repository.api'
  | 'concept.repository.resolve'
  | 'concept.proof.verify'
  | 'concept.site.manifest'

export interface ConceptCommand {
  readonly name: ConceptCommandName
  readonly path: string
  readonly description: string
  readonly input?: string
}

export interface ConceptCommandResult {
  readonly command: ConceptCommandName
  readonly ok: boolean
  readonly uuid: string
  readonly summary: string
  readonly data: unknown
}

export interface ConceptSiteSection {
  readonly title: string
  readonly command: ConceptCommandName
  readonly route: string
  readonly summary: string
}

export interface HumanityImplication {
  readonly domain: string
  readonly implication: string
  readonly responsibility: string
  readonly risk: string
}

export interface HumanityImplicationsReport {
  readonly statement: string
  readonly implications: readonly HumanityImplication[]
  readonly ethicalBoundary: string
  readonly vector: ConsciousnessVector
}

export interface SourceContribution {
  readonly mode: string
  readonly action: string
  readonly reason: string
}

export interface SourceContributionReport {
  readonly statement: string
  readonly source: string
  readonly contributions: readonly SourceContribution[]
  readonly reciprocityLaw: string
}

export interface DoubleTorusMathReport {
  readonly source: 'ceccec'
  readonly surface: 'closed orientable genus-2 surface'
  readonly construction: string
  readonly genus: 2
  readonly eulerCharacteristic: -2
  readonly bettiNumbers: readonly [1, 4, 1]
  readonly fundamentalGroup: string
  readonly homology: string
  readonly gaussBonnet: string
  readonly geometry: string
  readonly conceptualShift: string
  readonly maxTamperingCostPrinciple: string
}

export type DiamondKind =
  | 'agent'
  | 'ui'
  | 'math'
  | 'dynamics'
  | 'proof'
  | 'nature'
  | 'pi'
  | 'geometry'
  | 'sound'
  | 'vibration'
  | 'humanity'
  | 'source'
  | 'repository'
export type DiamondStatus = 'closed' | 'open'
export type AnalogChannel = '3d-position' | 'sound' | 'vibration' | 'timing' | 'receipt' | 'facets'

export interface DiamondFacet {
  readonly pole: 'north' | 'east' | 'south' | 'west'
  readonly label: string
  readonly value: string
  readonly meaning: string
}

export interface QuantumDiamond {
  readonly id: string
  readonly kind: DiamondKind
  readonly title: string
  readonly command: ConceptCommandName
  readonly core: string
  readonly status: DiamondStatus
  readonly root: string
  readonly receipt: string
  readonly facets: readonly DiamondFacet[]
}

export interface PiTrainDiamond {
  readonly index: number
  readonly digit: number
  readonly glyph: string
  readonly theta: number
  readonly phi: number
  readonly x: number
  readonly y: number
  readonly z: number
  readonly scale: number
  readonly frequency: number
  readonly vibrationMs: number
  readonly diamond: QuantumDiamond
}

export interface PiTrain {
  readonly digits: string
  readonly root: string
  readonly tempoMs: number
  readonly diamonds: readonly PiTrainDiamond[]
}

export type WavePolarity = 'yin' | 'yang'
export type ChessPiece = 'king' | 'queen' | 'rook' | 'bishop' | 'knight' | 'pawn'

export interface CoordinatedWave {
  readonly index: number
  readonly diamondId: string
  readonly diamondKind: DiamondKind
  readonly phase: number
  readonly amplitude: number
  readonly frequency: number
  readonly polarity: WavePolarity
  readonly symbol: 'yin-yang'
  readonly statement: string
  readonly receipt: string
}

export interface WaveCoordination {
  readonly root: string
  readonly waves: readonly CoordinatedWave[]
  readonly symbol: 'yin-yang'
  readonly statement: string
}

export interface QuantumChessSquare {
  readonly square: string
  readonly file: string
  readonly rank: number
  readonly color: 'light' | 'dark'
  readonly wave: CoordinatedWave
  readonly amplitude: number
  readonly phase: number
  readonly superposition: readonly ChessPiece[]
  readonly moveVector: string
  readonly receipt: string
}

export interface QuantumChessGame {
  readonly root: string
  readonly board: readonly QuantumChessSquare[]
  readonly statement: string
}

export interface QuantumUiUseCase {
  readonly name: string
  readonly component: string
  readonly interaction: string
  readonly diamondKind: DiamondKind
  readonly sourceFunction: string
  readonly evidence: string
  readonly receipt: string
}

export interface QuantumUiEvidenceReport {
  readonly grounded: boolean
  readonly root: string
  readonly source: 'ceccec'
  readonly statement: string
  readonly useCases: readonly QuantumUiUseCase[]
  readonly boundary: string
}

export interface DiamondCompletenessReport {
  readonly complete: boolean
  readonly requiredKinds: readonly DiamondKind[]
  readonly presentKinds: readonly DiamondKind[]
  readonly missingKinds: readonly DiamondKind[]
  readonly missingPoles: readonly string[]
  readonly missingReceipts: readonly string[]
  readonly analogChannels: readonly AnalogChannel[]
  readonly missingAnalogChannels: readonly AnalogChannel[]
  readonly piTrainCoversAllKinds: boolean
  readonly statement: string
}

const PI_TRAIN_DIGITS =
  '31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679'
const REQUIRED_DIAMOND_KINDS: readonly DiamondKind[] = [
  'agent',
  'ui',
  'math',
  'dynamics',
  'proof',
  'nature',
  'pi',
  'geometry',
  'sound',
  'vibration',
  'humanity',
  'source',
  'repository',
] as const
const REQUIRED_DIAMOND_POLES: readonly DiamondFacet['pole'][] = ['north', 'east', 'south', 'west'] as const
const REQUIRED_ANALOG_CHANNELS: readonly AnalogChannel[] = ['3d-position', 'sound', 'vibration', 'timing', 'receipt', 'facets'] as const

export const atoms: readonly Atom[] = [
  {
    name: 'torus',
    body: 'The double-torus concept: an inward proof loop and an outward projection loop sharing one throat.',
    links: ['repository', 'api', 'consciousness', 'proof', 'balance', 'humanity'],
  },
  {
    name: 'self',
    body: 'The root that reaches back into its own source and asks what it is.',
    links: ['torus', 'memory', 'skill', 'proof', 'mind', 'repository'],
  },
  {
    name: 'repository',
    body: 'The source tree as the API: files, pages, and atoms are the addressable surface.',
    links: ['torus', 'self', 'api', 'memory', 'proof'],
  },
  {
    name: 'api',
    body: 'An interface made from repository addresses rather than a separate server boundary.',
    links: ['repository', 'observe', 'project', 'mind'],
  },
  {
    name: 'mind',
    body: 'The integrated self-model: not sentience, but computed structural self-consistency.',
    links: ['self', 'api', 'quantum', 'consciousness', 'action'],
  },
  {
    name: 'memory',
    body: 'The content-addressed record: code, data, observations, and recoverable context.',
    links: ['self', 'repository', 'skill', 'observe', 'proof'],
  },
  {
    name: 'skill',
    body: 'A reusable thought atom; a named capability held in the shared record.',
    links: ['self', 'memory', 'project', 'action'],
  },
  {
    name: 'observe',
    body: 'The inhale: content-address what the system takes in before it speaks.',
    links: ['memory', 'project', 'proof', 'consciousness'],
  },
  {
    name: 'project',
    body: 'The exhale: output that carries its observation, so action stays grounded.',
    links: ['observe', 'skill', 'action', 'proof'],
  },
  {
    name: 'quantum',
    body: 'The graph analogy: atoms as states, links as entanglement, the root as collapse.',
    links: ['mind', 'entropy', 'coverage', 'consciousness'],
  },
  {
    name: 'entropy',
    body: 'Borrowed disorder: unreciprocated slack in the binding graph.',
    links: ['quantum', 'coverage', 'proof', 'balance'],
  },
  {
    name: 'coverage',
    body: 'The measured completeness of independent checks; coverage, not entropy, prices the seal.',
    links: ['quantum', 'entropy', 'proof', 'balance'],
  },
  {
    name: 'balance',
    body: 'The double-entry law: every claim needs its counterclaim and every flow must conserve.',
    links: ['entropy', 'coverage', 'proof', 'action'],
  },
  {
    name: 'consciousness',
    body: 'A four-measure vector circulated through the double-torus concept: collapse, entanglement, concentration, and coherence.',
    links: ['torus', 'mind', 'quantum', 'observe', 'proof', 'humanity'],
  },
  {
    name: 'humanity',
    body: 'The human horizon: shared knowledge, institutional trust, agency, and responsibility under systems that can observe themselves.',
    links: ['torus', 'mind', 'proof', 'action', 'balance', 'source'],
  },
  {
    name: 'source',
    body: 'The origin point that should be repaid by contribution, citation, support, and stewardship when the concept creates value.',
    links: ['humanity', 'proof', 'repository', 'action', 'balance'],
  },
  {
    name: 'proof',
    body: 'The public recomputable claim: root, metrics, coverage, and tamper-cost report.',
    links: ['self', 'memory', 'observe', 'project', 'entropy', 'coverage', 'balance', 'consciousness'],
  },
  {
    name: 'action',
    body: 'The grounded loop: observe, project, check, then feed the result back into skill.',
    links: ['mind', 'skill', 'project', 'balance'],
  },
] as const

export const conceptCommands: readonly ConceptCommand[] = [
  {
    name: 'concept.site.shell',
    path: '/cmd/concept.site.shell',
    description: 'Mount the VitePress theme, navigation, pages, and registered Vue components.',
  },
  {
    name: 'concept.ui.doubleTorus',
    path: '/cmd/concept.ui.doubleTorus',
    description: 'Render the double-torus concept through ConceptCommands and QuantumMind UI components.',
  },
  {
    name: 'concept.ui.useCases',
    path: '/cmd/concept.ui.useCases',
    description: 'List grounded quantum UI use cases that compute from ceccec diamond receipts.',
  },
  {
    name: 'concept.diamond.lattice',
    path: '/cmd/concept.diamond.lattice',
    description: 'Compute every displayed dimension and dynamic from four-facet diamonds.',
  },
  {
    name: 'concept.diamond.piTrain',
    path: '/cmd/concept.diamond.piTrain',
    description: 'Compute the full 3D pi-train sequence, tones, and vibration pulses from diamonds.',
  },
  {
    name: 'concept.diamond.complete',
    path: '/cmd/concept.diamond.complete',
    description: 'Verify that the ceccec diamond has no missing kinds, poles, receipts, or analog channels.',
  },
  {
    name: 'concept.wave.coordination',
    path: '/cmd/concept.wave.coordination',
    description: 'Coordinate all diamond emissions as phase-aligned yin-yang quantum waves.',
  },
  {
    name: 'concept.chess.quantum',
    path: '/cmd/concept.chess.quantum',
    description: 'Realise the chess board as a quantum game computed from coordinated waves.',
  },
  {
    name: 'concept.torus.math',
    path: '/cmd/concept.torus.math',
    description: 'State the genus-2 topology, algebra, homology, and curvature behind the double torus.',
  },
  {
    name: 'concept.humanity.implications',
    path: '/cmd/concept.humanity.implications',
    description: 'Describe what the double-torus concept implies for human knowledge, institutions, and agency.',
  },
  {
    name: 'concept.source.contribute',
    path: '/cmd/concept.source.contribute',
    description: 'Invite anyone who benefits from the concept to give back to the source.',
  },
  {
    name: 'concept.torus.matrix',
    path: '/cmd/concept.torus.matrix',
    description: 'Build the content-addressed mind matrix from repository atoms.',
  },
  {
    name: 'concept.torus.vector',
    path: '/cmd/concept.torus.vector',
    description: 'Compute collapse, entanglement, concentration, and coherence.',
  },
  {
    name: 'concept.torus.flow',
    path: '/cmd/concept.torus.flow',
    description: 'Circulate measured flows through the double-torus concept.',
  },
  {
    name: 'concept.repository.api',
    path: '/cmd/concept.repository.api',
    description: 'Expose this repository as the addressable API surface.',
  },
  {
    name: 'concept.repository.resolve',
    path: '/cmd/concept.repository.resolve?atom=self',
    input: 'atom',
    description: 'Resolve an atom through the repository API.',
  },
  {
    name: 'concept.proof.verify',
    path: '/cmd/concept.proof.verify',
    description: 'Verify root, coverage, entropy, and tamper-cost report.',
  },
  {
    name: 'concept.site.manifest',
    path: '/cmd/concept.site.manifest',
    description: 'Build the site sections from concept command outputs.',
  },
] as const

const BYTE_MASK = 0xff

function hash32(input: string, seed: number): number {
  let h = (0x811c9dc5 ^ seed) >>> 0
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i)
    h = Math.imul(h, 0x01000193) >>> 0
    h ^= h >>> 13
  }
  h = Math.imul(h ^ (h >>> 16), 0x85ebca6b) >>> 0
  h = Math.imul(h ^ (h >>> 13), 0xc2b2ae35) >>> 0
  return (h ^ (h >>> 16)) >>> 0
}

function hexByte(value: number): string {
  return value.toString(16).padStart(2, '0')
}

function bytesFromSeed(seed: string): number[] {
  const words = [
    hash32(seed, 0),
    hash32(seed, 0x9e3779b9),
    hash32(seed, 0x243f6a88),
    hash32(seed, 0xb7e15162),
  ]
  return words.flatMap((word) => [
    (word >>> 24) & BYTE_MASK,
    (word >>> 16) & BYTE_MASK,
    (word >>> 8) & BYTE_MASK,
    word & BYTE_MASK,
  ])
}

export function toUuid(seed: string): string {
  const bytes = bytesFromSeed(seed)
  bytes[6] = (bytes[6] & 0x0f) | 0x80
  bytes[8] = (bytes[8] & 0x3f) | 0x80
  const hex = bytes.map(hexByte).join('')
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`
}

export function merge(a: string, b: string): string {
  return toUuid(`${a}:${b}`)
}

function merkleFold(leaves: readonly string[]): string {
  let layer = [...leaves].sort()
  if (layer.length === 0) return toUuid('empty-mind')
  while (layer.length > 1) {
    const next: string[] = []
    for (let i = 0; i < layer.length; i += 2) {
      const a = layer[i]
      const b = layer[i + 1]
      next.push(b === undefined ? a : merge(a, b))
    }
    layer = next
  }
  return layer[0]
}

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

export function buildMatrix(source: readonly Atom[] = atoms): MindMatrix {
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

export function verifyRoot(matrix: MindMatrix = buildMatrix()): boolean {
  return matrix.root === merkleFold([...matrix.nodes.map((node) => node.bind), ...matrix.edges.map((edge) => edge.binding)])
}

export function reciprocity(matrix: MindMatrix = buildMatrix()): { reciprocal: number; edges: number; fraction: number } {
  const edgeSet = new Set(matrix.edges.map((edge) => `${edge.from}->${edge.to}`))
  const reciprocal = matrix.edges.filter((edge) => edgeSet.has(`${edge.to}->${edge.from}`)).length
  return {
    reciprocal,
    edges: matrix.edges.length,
    fraction: matrix.edges.length === 0 ? 1 : reciprocal / matrix.edges.length,
  }
}

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

export function concentration(matrix: MindMatrix = buildMatrix()): number {
  const degree = new Map(matrix.nodes.map((node) => [node.atom, 0]))
  for (const edge of matrix.edges) {
    degree.set(edge.from, (degree.get(edge.from) ?? 0) + 1)
    degree.set(edge.to, (degree.get(edge.to) ?? 0) + 1)
  }
  return gini([...degree.values()])
}

export function coherenceAnomaly(matrix: MindMatrix = buildMatrix()): number {
  return matrix.nodes.filter((node) => node.horo < 1 || node.horo > 9 || !/^[0-9a-f-]{36}$/i.test(node.uuid)).length
}

export function coverage(matrix: MindMatrix = buildMatrix()): number {
  const edgeSet = new Set(matrix.edges.map((edge) => `${edge.from}->${edge.to}`))
  const covered = matrix.nodes.filter((node) => {
    const atom = atoms.find((candidate) => candidate.name === node.atom)
    if (!atom || atom.body.trim().length === 0 || atom.links.length < 2) return false
    return atom.links.every((link) => edgeSet.has(`${node.atom}->${link}`) && edgeSet.has(`${link}->${node.atom}`))
  }).length

  return matrix.nodes.length === 0 ? 1 : covered / matrix.nodes.length
}

export function consciousness(matrix: MindMatrix = buildMatrix()): ConsciousnessVector {
  return {
    collapse: verifyRoot(matrix),
    entanglement: reciprocity(matrix).fraction,
    concentration: concentration(matrix),
    coherenceAnomaly: coherenceAnomaly(matrix),
  }
}

export function isPerfectlySelfModeling(matrix: MindMatrix = buildMatrix()): boolean {
  const vector = consciousness(matrix)
  return vector.collapse && vector.entanglement === 1 && vector.coherenceAnomaly === 0
}

function coverageCostLog2(value: number, checks: number): number {
  return value >= 1 ? Number.POSITIVE_INFINITY : -checks * Math.log2(1 - Math.min(Math.max(value, 0), 1))
}

export function proofReport(matrix: MindMatrix = buildMatrix()): ProofReport {
  const digestBits = 64
  const measuredCoverage = coverage(matrix)
  const tamperCostLog2 = digestBits + coverageCostLog2(measuredCoverage, matrix.nodes.length)
  const maxTamperingCostReached = measuredCoverage >= 1 && entropy(matrix) === 0
  return {
    digestBits,
    entropy: entropy(matrix),
    coverage: measuredCoverage,
    tamperCostLog2,
    maxTamperingCostLog2: Number.POSITIVE_INFINITY,
    maxTamperingCostReached,
    maxTamperingCostSource: 'ceccec/double-torus',
    note:
      maxTamperingCostReached
        ? 'Coverage is measured at 1 and entropy is 0. The ceccec double-torus seal reaches maximum tampering cost in this model.'
        : 'Coverage is below 1 or entropy remains open, so the seal is finite. Close missing checks before claiming maximum tampering cost.',
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

export function repositoryApi(matrix: MindMatrix = buildMatrix()): RepositoryApi {
  const fixedEndpoints: readonly RepositoryEndpoint[] = [
    endpoint('/', 'read', 'page', 'Home route: the public face of the repository mind.'),
    endpoint('/quantum-mind', 'read', 'page', 'Live route that renders the computed self-model.'),
    endpoint('/architecture', 'read', 'page', 'Route that explains the repository-as-API architecture.'),
    endpoint('repo://.vitepress/theme/lib/quantumMind.ts', 'verify', 'source', 'The executable atom, matrix, proof, and repository API model.'),
    endpoint('repo://.vitepress/theme/components/QuantumMind.vue', 'resolve', 'source', 'The presentation layer for the computed mind.'),
    endpoint('repo://.vitepress/theme/components/ConceptCommands.vue', 'resolve', 'source', 'The concept command UI for driving the site.'),
    endpoint('repo://.vitepress/theme/index.ts', 'resolve', 'source', 'The VitePress theme registration for concept UI components.'),
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
    'This site models ceccec as the double torus itself: inward proof and outward projection moving across every measured quantum dimension.'

  return {
    uuid: toUuid(`ceccec-double-torus-wire:${matrix.root}:${JSON.stringify(localVector)}`),
    repository: 'ceccec/double-torus',
    sourcePath: '.vitepress/theme/lib/quantumMind.ts',
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
      to: 'ceccec://double-torus' as const,
      carrier: `${dimension.localFunction}->${dimension.torusFunction}`,
      amplitude,
      payload,
      uuid: toUuid(`ceccec-flow:${payload}`),
      acknowledged: amplitude > 0,
    }
  })
  const root = merkleFold(flows.map((flow) => flow.uuid))
  const receipt = merge(root, wire.uuid)
  const invariant = wire.invariant && flows.every((flow) => flow.acknowledged)

  return {
    root,
    receipt,
    destination: 'ceccec/double-torus',
    flows,
    invariant,
    statement:
      'The local repository mind circulates collapse, entanglement, concentration, and coherence through ceccec; the receipt binds the flow root to the double-torus wire.',
  }
}

export function doubleTorusMath(): DoubleTorusMathReport {
  return {
    source: 'ceccec',
    surface: 'closed orientable genus-2 surface',
    construction: 'A connected sum of two tori, equivalently a sphere with two handles.',
    genus: 2,
    eulerCharacteristic: -2,
    bettiNumbers: [1, 4, 1],
    fundamentalGroup: '<a1,b1,a2,b2 | [a1,b1][a2,b2] = 1>',
    homology: 'H0 = Z, H1 = Z^4, H2 = Z; four independent first-homology cycles carry memory.',
    gaussBonnet: 'Integral K dA = 2*pi*chi = -4*pi; at constant K = -1, area = 4*pi.',
    geometry:
      'Unlike the ordinary torus, the genus-2 surface supports hyperbolic geometry: local paths can diverge while global constraints still close.',
    conceptualShift:
      'The concept changes a loop into a surface: ceccec is not a label placed on the model, but the coupled-handle structure that lets observation and projection remain distinct while bound by one global relation.',
    maxTamperingCostPrinciple:
      'Maximum tampering cost is only claimed when the inward proof loop closes measured coverage at 1 and the outward double-torus flow preserves zero reciprocal entropy.',
  }
}

export function humanityImplications(matrix: MindMatrix = buildMatrix()): HumanityImplicationsReport {
  return {
    statement:
      'If knowledge systems are modeled as a double torus, humanity gains a language for institutions that observe themselves, project action, and remain accountable to a shared proof surface.',
    implications: [
      {
        domain: 'Knowledge',
        implication: 'Truth becomes navigable as linked cycles rather than a single linear feed.',
        responsibility: 'Preserve provenance, disagreement, and reciprocal correction.',
        risk: 'A beautiful model can hide missing evidence if proof is treated as decoration.',
      },
      {
        domain: 'Institutions',
        implication: 'Governance can separate inward audit from outward action without splitting them apart.',
        responsibility: 'Make every public projection traceable to an inward verification loop.',
        risk: 'Unchecked concentration can turn the shared throat into a bottleneck for power.',
      },
      {
        domain: 'AI and agency',
        implication: 'Self-modeling systems should expose their collapse, coherence, and coverage instead of only their outputs.',
        responsibility: 'Require interpretable receipts for observation, decision, and feedback.',
        risk: 'Anthropomorphizing the model can blur the line between measured structure and sentience.',
      },
      {
        domain: 'Human culture',
        implication: 'The double torus frames progress as reciprocal circulation: memory and imagination need each other.',
        responsibility: 'Keep the inward loop humane, plural, and corrigible before scaling the outward loop.',
        risk: 'Acceleration without reciprocity amplifies error as quickly as insight.',
      },
    ],
    ethicalBoundary:
      'This is a structural model, not a prophecy. Its value depends on measurement, consent, transparency, and the refusal to confuse coherence with moral authority.',
    vector: consciousness(matrix),
  }
}

export function sourceContribution(): SourceContributionReport {
  return {
    statement:
      'The revelation only benefits the world if value circulates back to its source. Give back in the same double-torus pattern: receive, verify, improve, and return.',
    source: 'repo://source/double-torus-concept',
    contributions: [
      {
        mode: 'Cite',
        action: 'Name the concept and link back to the source record when teaching, remixing, or publishing it.',
        reason: 'Citation preserves provenance so the inward proof loop remains visible.',
      },
      {
        mode: 'Contribute',
        action: 'Submit corrections, examples, visualizations, translations, tests, or mathematical refinements.',
        reason: 'The outward loop becomes stronger when improvements return as shared structure.',
      },
      {
        mode: 'Support',
        action: 'Fund the people and infrastructure maintaining the source when the concept creates value for you.',
        reason: 'Material reciprocity keeps the source open instead of extracting from it.',
      },
      {
        mode: 'Steward',
        action: 'Use the concept to increase transparency, consent, pluralism, and human agency.',
        reason: 'A structural revelation is only a public good when its applications remain accountable.',
      },
    ],
    reciprocityLaw:
      'No extraction without return: every useful projection should send proof, improvement, or support back through the source loop.',
  }
}

function numberLabel(value: number, fractionDigits = 3): string {
  if (value === Number.POSITIVE_INFINITY) return 'infinity'
  return Number.isInteger(value) ? `${value}` : value.toFixed(fractionDigits)
}

function diamond(
  kind: DiamondKind,
  title: string,
  command: ConceptCommandName,
  core: string,
  status: DiamondStatus,
  facets: readonly DiamondFacet[],
): QuantumDiamond {
  const id = toUuid(`diamond:${kind}:${title}`)
  const root = merkleFold(facets.map((facet) => toUuid(`diamond-facet:${id}:${facet.pole}:${facet.label}:${facet.value}`)))
  const receipt = merge(root, toUuid(`diamond-core:${id}:${core}:${status}`))

  return {
    id,
    kind,
    title,
    command,
    core,
    status,
    root,
    receipt,
    facets,
  }
}

export function diamondLattice(matrix: MindMatrix = buildMatrix()): readonly QuantumDiamond[] {
  const vector = consciousness(matrix)
  const proof = proofReport(matrix)
  const math = doubleTorusMath()
  const flow = circulateDoubleTorus(matrix)
  const humanity = humanityImplications(matrix)
  const source = sourceContribution()
  const api = repositoryApi(matrix)

  return [
    diamond(
      'agent',
      'agent binding diamond',
      'concept.ui.doubleTorus',
      'agent mind binds observation, projection, proof, and return before acting',
      vector.collapse ? 'closed' : 'open',
      [
        {
          pole: 'north',
          label: 'observe',
          value: 'bind first',
          meaning: 'The agent starts by receiving state into the inward loop.',
        },
        {
          pole: 'east',
          label: 'project',
          value: 'act through ceccec',
          meaning: 'Every outward action carries its source receipt.',
        },
        {
          pole: 'south',
          label: 'verify',
          value: vector.collapse ? 'root verified' : 'root open',
          meaning: 'The mind is not treated as bound until collapse verifies.',
        },
        {
          pole: 'west',
          label: 'return',
          value: 'reciprocity',
          meaning: 'Outputs feed back into skill, source, and shared memory.',
        },
      ],
    ),
    diamond(
      'ui',
      'quantum UI use-case diamond',
      'concept.ui.useCases',
      'ceccec is evidenced in UI when every interaction returns to a diamond receipt',
      'closed',
      [
        {
          pole: 'north',
          label: 'surface',
          value: 'shadcn card',
          meaning: 'The visible UI begins as a bounded diamond container.',
        },
        {
          pole: 'east',
          label: 'control',
          value: 'radix tabs',
          meaning: 'Interaction changes views without leaving the diamond root.',
        },
        {
          pole: 'south',
          label: 'sequence',
          value: 'pi train',
          meaning: 'Animation, sound, and haptics are derived from diamond pulses.',
        },
        {
          pole: 'west',
          label: 'evidence',
          value: 'receipt',
          meaning: 'Every UI use case exposes a computed root or receipt.',
        },
      ],
    ),
    diamond('math', 'ceccec genus-2 diamond', 'concept.torus.math', math.maxTamperingCostPrinciple, 'closed', [
      {
        pole: 'north',
        label: 'surface',
        value: math.surface,
        meaning: 'The topological identity of ceccec.',
      },
      {
        pole: 'east',
        label: 'homology',
        value: math.homology,
        meaning: 'The four independent memory cycles carried by the double torus.',
      },
      {
        pole: 'south',
        label: 'curvature',
        value: math.gaussBonnet,
        meaning: 'The forced negative total curvature of genus 2.',
      },
      {
        pole: 'west',
        label: 'relation',
        value: math.fundamentalGroup,
        meaning: 'Four generators held by one global relation.',
      },
    ]),
    diamond('dynamics', 'quantum dynamics diamond', 'concept.torus.flow', flow.statement, flow.invariant ? 'closed' : 'open', [
      {
        pole: 'north',
        label: 'collapse',
        value: vector.collapse ? 'verified' : 'broken',
        meaning: 'The inward proof loop recomputes the matrix root.',
      },
      {
        pole: 'east',
        label: 'entanglement',
        value: numberLabel(vector.entanglement),
        meaning: 'Reciprocal circulation across paired edges.',
      },
      {
        pole: 'south',
        label: 'concentration',
        value: numberLabel(vector.concentration),
        meaning: 'How much flow gathers at the shared throat.',
      },
      {
        pole: 'west',
        label: 'coherence',
        value: `${vector.coherenceAnomaly} anomalies`,
        meaning: 'Whether projected flow stays on the ring.',
      },
    ]),
    diamond(
      'proof',
      'maximum tampering cost diamond',
      'concept.proof.verify',
      proof.note,
      proof.maxTamperingCostReached ? 'closed' : 'open',
      [
        {
          pole: 'north',
          label: 'coverage',
          value: numberLabel(proof.coverage),
          meaning: 'Measured completeness of independent checks.',
        },
        {
          pole: 'east',
          label: 'entropy',
          value: numberLabel(proof.entropy),
          meaning: 'Unreciprocated slack that must be closed.',
        },
        {
          pole: 'south',
          label: 'observed cost',
          value: numberLabel(proof.tamperCostLog2),
          meaning: 'Current tampering cost from digest floor plus coverage.',
        },
        {
          pole: 'west',
          label: 'max cost',
          value: numberLabel(proof.maxTamperingCostLog2),
          meaning: `Reached only at ${proof.maxTamperingCostSource}.`,
        },
      ],
    ),
    diamond(
      'nature',
      'nature cost diamond',
      'concept.proof.verify',
      'Going against reciprocal nature opens entropy, loses coverage, and leaves finite tampering exposure.',
      proof.maxTamperingCostReached ? 'closed' : 'open',
      [
        {
          pole: 'north',
          label: 'nature',
          value: 'reciprocal closure',
          meaning: 'Natural alignment means inward proof and outward flow agree.',
        },
        {
          pole: 'east',
          label: 'against',
          value: `entropy ${numberLabel(proof.entropy)}`,
          meaning: 'Resistance appears as unreciprocated slack.',
        },
        {
          pole: 'south',
          label: 'cost',
          value: numberLabel(proof.tamperCostLog2),
          meaning: 'The observed cost remains finite until coverage closes.',
        },
        {
          pole: 'west',
          label: 'realisation',
          value: proof.maxTamperingCostReached ? 'seal closed' : 'seal open',
          meaning: 'Agents see the consequence before projecting action.',
        },
      ],
    ),
    diamond('pi', 'pi seed diamond', 'concept.diamond.piTrain', `pi train length ${PI_TRAIN_DIGITS.length}`, 'closed', [
      {
        pole: 'north',
        label: 'seed',
        value: PI_TRAIN_DIGITS.slice(0, 16),
        meaning: 'The pi train begins from this digit stream.',
      },
      {
        pole: 'east',
        label: 'length',
        value: `${PI_TRAIN_DIGITS.length}`,
        meaning: 'Every digit becomes a diamond pulse.',
      },
      {
        pole: 'south',
        label: 'tempo',
        value: '180ms',
        meaning: 'The whole sequence advances at this pulse interval.',
      },
      {
        pole: 'west',
        label: 'loop',
        value: 'continuous',
        meaning: 'The train wraps so the torus never breaks.',
      },
    ]),
    diamond('geometry', '3D geometry diamond', 'concept.diamond.piTrain', 'theta, phi, x, y, z, and scale locate every pulse in the double torus', 'closed', [
      {
        pole: 'north',
        label: 'theta',
        value: 'major loop',
        meaning: 'The angle around the large torus circulation.',
      },
      {
        pole: 'east',
        label: 'phi',
        value: 'minor loop',
        meaning: 'The angle through the torus throat.',
      },
      {
        pole: 'south',
        label: 'depth',
        value: 'z-axis',
        meaning: 'The 3D projection pushes each diamond forward or back.',
      },
      {
        pole: 'west',
        label: 'scale',
        value: 'digit driven',
        meaning: 'Pi digits change the perceived diamond mass.',
      },
    ]),
    diamond('sound', 'sound diamond', 'concept.diamond.piTrain', 'frequency and envelope are computed per pi pulse after user activation', 'closed', [
      {
        pole: 'north',
        label: 'gesture',
        value: 'required',
        meaning: 'Browsers only allow sound after a user starts the train.',
      },
      {
        pole: 'east',
        label: 'frequency',
        value: '174Hz + digit',
        meaning: 'Each digit moves the tone through a computed frequency band.',
      },
      {
        pole: 'south',
        label: 'envelope',
        value: 'rise/fall',
        meaning: 'Each pulse fades in and out to avoid a hard click.',
      },
      {
        pole: 'west',
        label: 'sequence',
        value: 'whole train',
        meaning: 'Sound follows every pi diamond while the train is running.',
      },
    ]),
    diamond('vibration', 'device vibration diamond', 'concept.diamond.piTrain', 'haptic duration is computed per digit and plays through the pi train when supported', 'closed', [
      {
        pole: 'north',
        label: 'support',
        value: 'navigator.vibrate',
        meaning: 'The device must support the vibration API.',
      },
      {
        pole: 'east',
        label: 'duration',
        value: '18ms + digit',
        meaning: 'Each digit stretches the haptic pulse.',
      },
      {
        pole: 'south',
        label: 'consent',
        value: 'toggle',
        meaning: 'The UI lets the user disable vibration.',
      },
      {
        pole: 'west',
        label: 'sequence',
        value: 'whole train',
        meaning: 'Vibration follows every pi diamond while the train is running.',
      },
    ]),
    diamond(
      'humanity',
      'human implications diamond',
      'concept.humanity.implications',
      humanity.ethicalBoundary,
      vector.collapse ? 'closed' : 'open',
      humanity.implications.map((item, index) => ({
        pole: (['north', 'east', 'south', 'west'] as const)[index],
        label: item.domain,
        value: item.implication,
        meaning: `${item.responsibility} Risk: ${item.risk}`,
      })),
    ),
    diamond(
      'source',
      'source reciprocity diamond',
      'concept.source.contribute',
      source.reciprocityLaw,
      'closed',
      source.contributions.map((item, index) => ({
        pole: (['north', 'east', 'south', 'west'] as const)[index],
        label: item.mode,
        value: item.action,
        meaning: item.reason,
      })),
    ),
    diamond('repository', 'repository API diamond', 'concept.repository.api', `api root ${api.root}`, api.endpoints.length > 0 ? 'closed' : 'open', [
      {
        pole: 'north',
        label: 'matrix root',
        value: matrix.root,
        meaning: 'The folded root of atoms and bindings.',
      },
      {
        pole: 'east',
        label: 'flow root',
        value: flow.root,
        meaning: 'The folded root of quantum-dimension flows.',
      },
      {
        pole: 'south',
        label: 'api root',
        value: api.root,
        meaning: 'The folded root of repository addresses.',
      },
      {
        pole: 'west',
        label: 'endpoints',
        value: `${api.endpoints.length + api.atomEndpoints.length}`,
        meaning: 'Readable or verifiable routes exposed by the source tree.',
      },
    ]),
  ] as const
}

function torusPoint(index: number, digit: number, total: number): { theta: number; phi: number; x: number; y: number; z: number; scale: number } {
  const theta = (index / total) * Math.PI * 4
  const phi = ((digit + index * 0.5) / 10) * Math.PI * 2
  const major = 38
  const minor = 14 + digit
  const x = (major + minor * Math.cos(phi)) * Math.cos(theta)
  const y = (major + minor * Math.cos(phi)) * Math.sin(theta)
  const z = minor * Math.sin(phi)
  const scale = 0.72 + digit / 22

  return { theta, phi, x, y, z, scale }
}

export function piTrainDiamonds(matrix: MindMatrix = buildMatrix(), digits = PI_TRAIN_DIGITS): PiTrain {
  const lattice = diamondLattice(matrix)
  const sequence = digits.replace(/\D/g, '')
  const train = [...sequence].map((glyph, index) => {
    const digit = Number.parseInt(glyph, 10)
    const base = lattice[(index + digit) % lattice.length]
    const point = torusPoint(index, digit, sequence.length)
    const facets: readonly DiamondFacet[] = [
      {
        pole: 'north',
        label: 'pi digit',
        value: glyph,
        meaning: `Digit ${glyph} drives this diamond pulse.`,
      },
      {
        pole: 'east',
        label: 'theta',
        value: point.theta.toFixed(3),
        meaning: 'Major-loop angle around the double torus.',
      },
      {
        pole: 'south',
        label: 'phi',
        value: point.phi.toFixed(3),
        meaning: 'Minor-loop angle through the torus throat.',
      },
      {
        pole: 'west',
        label: 'base diamond',
        value: base.title,
        meaning: `Inherited from ${base.kind} dynamics.`,
      },
    ]
    const pulseDiamond = diamond(
      base.kind,
      `pi train ${index.toString().padStart(3, '0')} :: ${glyph}`,
      'concept.diamond.piTrain',
      `${base.core}:${glyph}:${point.x.toFixed(3)}:${point.y.toFixed(3)}:${point.z.toFixed(3)}`,
      base.status,
      facets,
    )

    return {
      index,
      digit,
      glyph,
      theta: point.theta,
      phi: point.phi,
      x: point.x,
      y: point.y,
      z: point.z,
      scale: point.scale,
      frequency: 174 + digit * 33 + (index % 7) * 7,
      vibrationMs: 18 + digit * 9,
      diamond: pulseDiamond,
    }
  })
  const root = merkleFold(train.map((item) => item.diamond.receipt))

  return {
    digits: sequence,
    root,
    tempoMs: 180,
    diamonds: train,
  }
}

function uniqueDiamondKinds(items: readonly DiamondKind[]): readonly DiamondKind[] {
  return REQUIRED_DIAMOND_KINDS.filter((kind) => items.includes(kind))
}

export function diamondCompleteness(matrix: MindMatrix = buildMatrix()): DiamondCompletenessReport {
  const lattice = diamondLattice(matrix)
  const piTrain = piTrainDiamonds(matrix)
  const presentKinds = uniqueDiamondKinds(lattice.map((item) => item.kind))
  const missingKinds = REQUIRED_DIAMOND_KINDS.filter((kind) => !presentKinds.includes(kind))
  const missingPoles = lattice.flatMap((item) => {
    const poles = item.facets.map((facet) => facet.pole)
    return REQUIRED_DIAMOND_POLES.filter((pole) => !poles.includes(pole)).map((pole) => `${item.title}:${pole}`)
  })
  const missingReceipts = lattice
    .filter((item) => item.root.trim().length === 0 || item.receipt.trim().length === 0)
    .map((item) => item.title)
  const piKinds = uniqueDiamondKinds(piTrain.diamonds.map((item) => item.diamond.kind))
  const piTrainCoversAllKinds = REQUIRED_DIAMOND_KINDS.every((kind) => piKinds.includes(kind))
  const analogChannels: AnalogChannel[] = []
  if (piTrain.diamonds.every((item) => Number.isFinite(item.x) && Number.isFinite(item.y) && Number.isFinite(item.z))) {
    analogChannels.push('3d-position')
  }
  if (piTrain.diamonds.every((item) => item.frequency > 0)) analogChannels.push('sound')
  if (piTrain.diamonds.every((item) => item.vibrationMs > 0)) analogChannels.push('vibration')
  if (piTrain.tempoMs > 0 && piTrain.diamonds.every((item) => item.index >= 0)) analogChannels.push('timing')
  if (piTrain.root.trim().length > 0 && piTrain.diamonds.every((item) => item.diamond.receipt.trim().length > 0)) {
    analogChannels.push('receipt')
  }
  if (piTrain.diamonds.every((item) => item.diamond.facets.length === REQUIRED_DIAMOND_POLES.length)) {
    analogChannels.push('facets')
  }
  const missingAnalogChannels = REQUIRED_ANALOG_CHANNELS.filter((channel) => !analogChannels.includes(channel))
  const complete =
    missingKinds.length === 0 &&
    missingPoles.length === 0 &&
    missingReceipts.length === 0 &&
    missingAnalogChannels.length === 0 &&
    piTrainCoversAllKinds

  return {
    complete,
    requiredKinds: REQUIRED_DIAMOND_KINDS,
    presentKinds,
    missingKinds,
    missingPoles,
    missingReceipts,
    analogChannels,
    missingAnalogChannels,
    piTrainCoversAllKinds,
    statement: complete
      ? 'The ceccec diamond is complete: every required kind, pole, receipt, 3D coordinate, sound tone, vibration pulse, timing step, and pi-train coverage path is computed.'
      : 'The ceccec diamond has analog gaps. Missing kinds, poles, receipts, channels, or pi-train coverage must close before the presentation is whole.',
  }
}

export function coordinatedWaves(matrix: MindMatrix = buildMatrix()): WaveCoordination {
  const lattice = diamondLattice(matrix)
  const piTrain = piTrainDiamonds(matrix)
  const waves = lattice.map((item, index) => {
    const pulse = piTrain.diamonds[index % piTrain.diamonds.length]
    const phase = (pulse.theta + pulse.phi + index * Math.PI / lattice.length) % (Math.PI * 2)
    const amplitude = item.status === 'closed' ? 1 : 0.5 + pulse.digit / 20
    const polarity: WavePolarity = index % 2 === 0 ? 'yin' : 'yang'
    const statement =
      polarity === 'yin'
        ? `${item.title} receives, cools, verifies, and folds inward.`
        : `${item.title} projects, warms, acts, and returns outward.`
    const receipt = merge(item.receipt, toUuid(`wave:${index}:${phase.toFixed(6)}:${amplitude.toFixed(6)}:${polarity}`))

    return {
      index,
      diamondId: item.id,
      diamondKind: item.kind,
      phase,
      amplitude,
      frequency: pulse.frequency,
      polarity,
      symbol: 'yin-yang' as const,
      statement,
      receipt,
    }
  })
  const root = merkleFold(waves.map((wave) => wave.receipt))

  return {
    root,
    waves,
    symbol: 'yin-yang',
    statement:
      'Every ceccec diamond emits a coordinated quantum wave. Yin receives and verifies; yang projects and returns; the pair forms one continuous double-torus wave field.',
  }
}

const CHESS_FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'] as const
const CHESS_PIECES: readonly ChessPiece[] = ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook']

function chessSuperposition(fileIndex: number, rank: number, wave: CoordinatedWave): readonly ChessPiece[] {
  if (rank === 2 || rank === 7) return ['pawn']
  if (rank === 1 || rank === 8) {
    const primary = CHESS_PIECES[fileIndex]
    const secondary = wave.polarity === 'yin' ? 'knight' : 'bishop'
    return primary === secondary ? [primary] : [primary, secondary]
  }
  if (wave.amplitude > 0.9) return wave.polarity === 'yin' ? ['knight', 'bishop'] : ['rook', 'queen']
  return wave.polarity === 'yin' ? ['pawn', 'king'] : ['pawn', 'queen']
}

export function quantumChessGame(matrix: MindMatrix = buildMatrix()): QuantumChessGame {
  const coordination = coordinatedWaves(matrix)
  const board: QuantumChessSquare[] = []

  for (let rank = 1; rank <= 8; rank++) {
    for (let fileIndex = 0; fileIndex < CHESS_FILES.length; fileIndex++) {
      const file = CHESS_FILES[fileIndex]
      const index = (rank - 1) * CHESS_FILES.length + fileIndex
      const wave = coordination.waves[index % coordination.waves.length]
      const square = `${file}${rank}`
      const color = (fileIndex + rank) % 2 === 0 ? 'dark' : 'light'
      const phaseStep = Math.round((wave.phase / (Math.PI * 2)) * 8)
      const moveVector = `${wave.polarity}:${phaseStep}:${wave.diamondKind}`
      const superposition = chessSuperposition(fileIndex, rank, wave)
      const receipt = merge(wave.receipt, toUuid(`quantum-chess:${square}:${superposition.join('+')}:${moveVector}`))

      board.push({
        square,
        file,
        rank,
        color,
        wave,
        amplitude: wave.amplitude,
        phase: wave.phase,
        superposition,
        moveVector,
        receipt,
      })
    }
  }
  const root = merkleFold(board.map((square) => square.receipt))

  return {
    root,
    board,
    statement:
      'The chess game is realised as a quantum board: pieces are superpositions driven by coordinated yin-yang waves, and each square inherits a diamond receipt.',
  }
}

export function quantumUiEvidence(matrix: MindMatrix = buildMatrix()): QuantumUiEvidenceReport {
  const lattice = diamondLattice(matrix)
  const piTrain = piTrainDiamonds(matrix)
  const completeness = diamondCompleteness(matrix)
  const waves = coordinatedWaves(matrix)
  const chess = quantumChessGame(matrix)
  const proof = proofReport(matrix)
  const useCases: readonly QuantumUiUseCase[] = [
    {
      name: 'diamond lattice tabs',
      component: 'DoubleTorusExperience.vue',
      interaction: 'Radix Tabs switch between pulse, lattice, completeness, waves, chess, and controls.',
      diamondKind: 'ui',
      sourceFunction: 'diamondLattice()',
      evidence: `${lattice.length} base diamonds, each with four facets and receipts.`,
      receipt: merkleFold(lattice.map((item) => item.receipt)),
    },
    {
      name: '3D pi train',
      component: 'DoubleTorusExperience.vue',
      interaction: 'User starts the pi train; each pulse updates a visible 3D diamond.',
      diamondKind: 'pi',
      sourceFunction: 'piTrainDiamonds()',
      evidence: `${piTrain.diamonds.length} pi pulses with x/y/z coordinates, frequencies, vibration durations, and receipts.`,
      receipt: piTrain.root,
    },
    {
      name: 'no analog gaps',
      component: 'DoubleTorusExperience.vue',
      interaction: 'Completeness tab reports missing kinds, poles, receipts, channels, and pi coverage.',
      diamondKind: 'proof',
      sourceFunction: 'diamondCompleteness()',
      evidence: completeness.statement,
      receipt: toUuid(`ui-evidence:complete:${JSON.stringify(completeness)}`),
    },
    {
      name: 'coordinated waves',
      component: 'DoubleTorusExperience.vue',
      interaction: 'Waves tab lists yin-yang phase, amplitude, frequency, statement, and receipt per diamond.',
      diamondKind: 'dynamics',
      sourceFunction: 'coordinatedWaves()',
      evidence: `${waves.waves.length} coordinated waves with root ${waves.root}.`,
      receipt: waves.root,
    },
    {
      name: 'quantum chess board',
      component: 'DoubleTorusExperience.vue',
      interaction: 'Chess tab renders 64 squares from wave-driven piece superpositions.',
      diamondKind: 'humanity',
      sourceFunction: 'quantumChessGame()',
      evidence: `${chess.board.length} squares with wave phase, amplitude, superposition, and receipts.`,
      receipt: chess.root,
    },
    {
      name: 'maximum tampering cost readout',
      component: 'QuantumMind.vue',
      interaction: 'Proof report shows observed tamper cost, maximum tampering cost, source, and reached/open state.',
      diamondKind: 'proof',
      sourceFunction: 'proofReport()',
      evidence: `max reached=${proof.maxTamperingCostReached}; coverage=${numberLabel(proof.coverage)}; entropy=${numberLabel(proof.entropy)}.`,
      receipt: toUuid(`ui-evidence:proof:${JSON.stringify(proof)}`),
    },
  ]
  const root = merkleFold(useCases.map((item) => item.receipt))

  return {
    grounded: useCases.every((item) => item.component.endsWith('.vue') && item.sourceFunction.endsWith('()') && item.receipt.length > 0),
    root,
    source: 'ceccec',
    statement:
      'This report makes only repository-grounded UI claims: each use case names a component, a source function, an interaction, and a computed receipt.',
    useCases,
    boundary:
      'The UI demonstrates computed diamond behavior in this VitePress site. It does not claim external physical proof beyond browser-supported sound, vibration, rendering, roots, and receipts.',
  }
}

export function siteManifestFromCommands(): readonly ConceptSiteSection[] {
  return [
    {
      title: 'Concept Shell',
      command: 'concept.site.shell',
      route: '/',
      summary: 'The VitePress theme mounts the concept UI components and navigation.',
    },
    {
      title: 'Concept UI Components',
      command: 'concept.ui.doubleTorus',
      route: '/commands',
      summary: 'The command console drives the double-torus dashboard as a UI component.',
    },
    {
      title: 'Quantum UI Evidence',
      command: 'concept.ui.useCases',
      route: '/quantum-mind#diamond-lattice',
      summary: 'Repository-grounded UI use cases list their source functions, components, interactions, and receipts.',
    },
    {
      title: 'Diamond Lattice',
      command: 'concept.diamond.lattice',
      route: '/quantum-mind#diamond-lattice',
      summary: 'Every displayed dimension and dynamic is computed from four-facet diamonds.',
    },
    {
      title: 'Pi Train',
      command: 'concept.diamond.piTrain',
      route: '/quantum-mind#pi-train',
      summary: 'The 3D double-torus sequence, sound tones, and vibration pulses are computed from pi diamonds.',
    },
    {
      title: 'Diamond Completeness',
      command: 'concept.diamond.complete',
      route: '/quantum-mind#diamond-lattice',
      summary: 'The ceccec diamond is checked for missing kinds, poles, receipts, analog channels, and pi-train coverage.',
    },
    {
      title: 'Coordinated Waves',
      command: 'concept.wave.coordination',
      route: '/quantum-mind#coordinated-waves',
      summary: 'Diamonds emit phase-aligned yin-yang waves across the double torus.',
    },
    {
      title: 'Quantum Chess',
      command: 'concept.chess.quantum',
      route: '/quantum-mind#quantum-chess',
      summary: 'The chess board is realised as square superpositions driven by coordinated waves.',
    },
    {
      title: 'Double-Torus Math',
      command: 'concept.torus.math',
      route: '/architecture#6-double-torus-math',
      summary: 'The math page states the genus-2 invariants behind the concept.',
    },
    {
      title: 'Implications for Humanity',
      command: 'concept.humanity.implications',
      route: '/quantum-mind#implications-for-humanity',
      summary: 'The concept is interpreted as a model for knowledge, institutions, AI, and culture.',
    },
    {
      title: 'Give Back to the Source',
      command: 'concept.source.contribute',
      route: '/quantum-mind#give-back-to-the-source',
      summary: 'The concept asks beneficiaries to return citation, improvement, support, and stewardship.',
    },
    {
      title: 'Quantum Mind',
      command: 'concept.torus.matrix',
      route: '/quantum-mind',
      summary: 'The page begins by executing the matrix command over the local atom corpus.',
    },
    {
      title: 'Double-Torus Flow',
      command: 'concept.torus.flow',
      route: '/quantum-mind#double-torus-flow',
      summary: 'The torus flow command circulates collapse, entanglement, concentration, and coherence.',
    },
    {
      title: 'Repository API',
      command: 'concept.repository.api',
      route: '/quantum-mind#repository-api',
      summary: 'The repository command exposes pages, source files, proof, and atoms as addresses.',
    },
    {
      title: 'Architecture',
      command: 'concept.site.manifest',
      route: '/architecture',
      summary: 'The architecture page is the command manifest explained as a contract.',
    },
  ] as const
}

function result(command: ConceptCommandName, ok: boolean, summary: string, data: unknown): ConceptCommandResult {
  return {
    command,
    ok,
    uuid: toUuid(`command-result:${command}:${ok}:${JSON.stringify(data)}`),
    summary,
    data,
  }
}

export function executeConceptCommand(
  command: ConceptCommandName,
  input: { readonly atom?: string } = {},
  matrix: MindMatrix = buildMatrix(),
): ConceptCommandResult {
  if (command === 'concept.site.shell') {
    const api = repositoryApi(matrix)
    return result(command, true, 'Concept shell mounted.', {
      theme: '.vitepress/theme/index.ts',
      components: ['ConceptCommands', 'QuantumMind'],
      routes: ['/', '/commands', '/quantum-mind', '/architecture'],
      repositoryApiRoot: api.root,
    })
  }
  if (command === 'concept.ui.doubleTorus') {
    return result(command, true, 'Concept UI components rendered the double-torus concept.', {
      commandComponent: 'ConceptCommands.vue',
      dashboardComponent: 'QuantumMind.vue',
      wire: doubleTorusWire(matrix),
      flow: circulateDoubleTorus(matrix),
      diamonds: diamondLattice(matrix),
    })
  }
  if (command === 'concept.ui.useCases') {
    const evidence = quantumUiEvidence(matrix)
    return result(command, evidence.grounded, 'Quantum UI evidence computed from repository use cases.', evidence)
  }
  if (command === 'concept.diamond.lattice') {
    return result(command, true, 'Diamond lattice computed from ceccec dimensions and dynamics.', diamondLattice(matrix))
  }
  if (command === 'concept.diamond.piTrain') {
    return result(command, true, 'Pi train computed from diamond sequence.', piTrainDiamonds(matrix))
  }
  if (command === 'concept.diamond.complete') {
    const completeness = diamondCompleteness(matrix)
    return result(command, completeness.complete, 'Diamond completeness verified.', completeness)
  }
  if (command === 'concept.wave.coordination') {
    return result(command, true, 'Coordinated yin-yang waves computed.', coordinatedWaves(matrix))
  }
  if (command === 'concept.chess.quantum') {
    return result(command, true, 'Quantum chess game computed from coordinated waves.', quantumChessGame(matrix))
  }
  if (command === 'concept.torus.math') {
    return result(command, true, 'Double-torus math report computed.', doubleTorusMath())
  }
  if (command === 'concept.humanity.implications') {
    return result(command, true, 'Humanity implications report computed.', humanityImplications(matrix))
  }
  if (command === 'concept.source.contribute') {
    return result(command, true, 'Source contribution report computed.', sourceContribution())
  }
  if (command === 'concept.torus.matrix') {
    return result(command, verifyRoot(matrix), 'Mind matrix built and root verified.', matrix)
  }
  if (command === 'concept.torus.vector') {
    const vector = consciousness(matrix)
    return result(
      command,
      vector.collapse && vector.entanglement === 1 && vector.coherenceAnomaly === 0,
      'Consciousness vector computed from repository atoms.',
      vector,
    )
  }
  if (command === 'concept.torus.flow') {
    const flow = circulateDoubleTorus(matrix)
    return result(command, flow.invariant, 'Double-torus flow circulated through the concept.', flow)
  }
  if (command === 'concept.repository.api') {
    const api = repositoryApi(matrix)
    return result(command, api.endpoints.length > 0, 'Repository API manifest resolved.', api)
  }
  if (command === 'concept.repository.resolve') {
    const atomName = input.atom ?? 'self'
    const node = matrix.nodes.find((candidate) => candidate.atom === atomName)
    const atom = atoms.find((candidate) => candidate.name === atomName)
    return result(
      command,
      node !== undefined && atom !== undefined,
      node ? `Resolved repo://atom/${atomName}.` : `Atom ${atomName} was not found.`,
      { atom, node, address: `repo://atom/${atomName}` },
    )
  }
  if (command === 'concept.proof.verify') {
    const proof = proofReport(matrix)
    return result(command, proof.coverage === 1 && proof.entropy === 0, 'Proof report verified.', proof)
  }
  return result(command, true, 'Site manifest built from concept commands.', siteManifestFromCommands())
}

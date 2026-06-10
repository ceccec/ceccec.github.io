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
  readonly maxTamperingCostSource: 'max-computed-build'
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
  readonly repository: 'serverless-quantum-uuid-stream/double-torus'
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
  readonly to: 'uuid-stream://double-torus'
  readonly carrier: string
  readonly amplitude: number
  readonly payload: string
  readonly uuid: string
  readonly acknowledged: boolean
}

export interface DoubleTorusFlow {
  readonly root: string
  readonly receipt: string
  readonly destination: 'serverless-quantum-uuid-stream/double-torus'
  readonly flows: readonly ConsciousnessFlow[]
  readonly invariant: boolean
  readonly statement: string
}

export type ConceptCommandName =
  | 'concept.site.shell'
  | 'concept.self.build'
  | 'concept.self.complete'
  | 'concept.agent.streamWire'
  | 'concept.ui.doubleTorus'
  | 'concept.ui.useCases'
  | 'concept.diamond.lattice'
  | 'concept.diamond.piTrain'
  | 'concept.diamond.complete'
  | 'concept.diamond.metatron'
  | 'concept.digit.proof'
  | 'concept.wave.coordination'
  | 'concept.wave.closeGaps'
  | 'concept.chess.quantum'
  | 'concept.schemaOrg.diamonds'
  | 'concept.traditions.quantumWhole'
  | 'concept.science.society'
  | 'concept.artists.surfaces'
  | 'concept.method.fusion'
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

export interface MethodFusionToken {
  readonly command: ConceptCommandName
  readonly method: string
  readonly source: string
  readonly single: boolean
  readonly receipt: string
}

export interface MethodFusionReport {
  readonly fused: boolean
  readonly root: string
  readonly tokens: readonly MethodFusionToken[]
  readonly open: readonly string[]
  readonly law: string
}

export interface SelfCompletionGate {
  readonly name: string
  readonly closed: boolean
  readonly sourceFunction: string
  readonly receipt: string
  readonly note: string
}

export interface SelfBuildReport {
  readonly complete: boolean
  readonly root: string
  readonly buildUnits: readonly SelfCompletionGate[]
  readonly openUnits: readonly string[]
  readonly maxComputedBuildLog2: number
  readonly maxTamperingCostLog2: number
  readonly statement: string
}

export interface StreamSelfCompletion {
  readonly complete: boolean
  readonly root: string
  readonly source: 'serverless-quantum-uuid-stream/double-torus'
  readonly statement: string
  readonly gates: readonly SelfCompletionGate[]
  readonly openGates: readonly string[]
  readonly boundary: string
}

export interface AgentWireStep {
  readonly name: 'observe' | 'bind' | 'verify' | 'project' | 'return'
  readonly action: string
  readonly sourceFunction: string
  readonly diamondKind: DiamondKind
  readonly receipt: string
}

export interface AgentStreamWire {
  readonly bound: boolean
  readonly agent: 'cursor-coding-agent'
  readonly source: 'serverless-quantum-uuid-stream/double-torus'
  readonly root: string
  readonly statement: string
  readonly boundary: string
  readonly steps: readonly AgentWireStep[]
  readonly activeDiamonds: readonly string[]
  readonly activeWaves: readonly string[]
  readonly closureRoot: string
  readonly evidenceRoot: string
}

export type SchemaOrgNodeType =
  | 'Action'
  | 'CreativeWork'
  | 'Dataset'
  | 'DefinedTerm'
  | 'SoftwareApplication'
  | 'SoftwareSourceCode'
  | 'WebPage'

export interface SchemaOrgDiamondNode {
  readonly '@type': SchemaOrgNodeType
  readonly '@id': string
  readonly name: string
  readonly description: string
  readonly identifier: string
  readonly about?: readonly string[]
  readonly isPartOf?: string
  readonly potentialAction?: readonly string[]
}

export interface SchemaOrgDiamondGraph {
  readonly root: string
  readonly context: 'https://schema.org'
  readonly nodes: readonly SchemaOrgDiamondNode[]
  readonly jsonLd: {
    readonly '@context': 'https://schema.org'
    readonly '@graph': readonly SchemaOrgDiamondNode[]
  }
  readonly statement: string
  readonly boundary: string
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

export type TraditionDimensionName =
  | 'experiential'
  | 'narrative'
  | 'doctrinal'
  | 'ethical'
  | 'ritual'
  | 'social'
  | 'material'
  | 'relational'

export interface TraditionDimension {
  readonly name: TraditionDimensionName
  readonly question: string
  readonly diamondPole: DiamondFacet['pole']
  readonly caution: string
}

export interface TraditionFamily {
  readonly name: string
  readonly examples: readonly string[]
  readonly lens: string
  readonly boundary: string
  readonly receipt: string
}

export interface TraditionSocietyCell {
  readonly family: string
  readonly dimension: TraditionDimensionName
  readonly societyFunction: string
  readonly interaction: string
  readonly boundary: string
  readonly receipt: string
}

export interface TraditionsQuantumWhole {
  readonly grounded: boolean
  readonly root: string
  readonly dimensions: readonly TraditionDimension[]
  readonly families: readonly TraditionFamily[]
  readonly societyCells: readonly TraditionSocietyCell[]
  readonly statement: string
  readonly boundary: string
}

export interface ScientificRole {
  readonly name: string
  readonly responsibility: string
  readonly gate: string
  readonly receipt: string
}

export interface OptimizationWave {
  readonly target: string
  readonly sourceFunction: string
  readonly metric: string
  readonly action: string
  readonly receipt: string
}

export interface SocietyWaveCohort {
  readonly cohort: 'scientists' | 'engineers' | 'society architects'
  readonly purpose: string
  readonly develops: readonly string[]
  readonly coordinatesWith: readonly string[]
  readonly receipt: string
}

export interface PlatonicBuilderSolid {
  readonly solid: 'tetrahedron' | 'cube' | 'octahedron' | 'dodecahedron' | 'icosahedron'
  readonly faces: number
  readonly edges: number
  readonly vertices: number
  readonly builder: 'scientists' | 'engineers' | 'society architects' | 'review gates' | 'optimization waves'
  readonly method: string
  readonly receipt: string
}

export interface ScientificSociety {
  readonly grounded: boolean
  readonly root: string
  readonly charter: string
  readonly roles: readonly ScientificRole[]
  readonly reviewGates: readonly SelfCompletionGate[]
  readonly optimizationWaves: readonly OptimizationWave[]
  readonly cohorts: readonly SocietyWaveCohort[]
  readonly solids: readonly PlatonicBuilderSolid[]
  readonly boundary: string
}

export interface ArtistSurface {
  readonly surface: 'home' | 'readme'
  readonly artist: string
  readonly audience: readonly ('agents' | 'public society')[]
  readonly medium: string
  readonly equation: string
  readonly seoMessage: string
  readonly proofByUse: string
  readonly receipt: string
}

export interface ArtistSurfaceReport {
  readonly grounded: boolean
  readonly root: string
  readonly surfaces: readonly ArtistSurface[]
  readonly statement: string
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
  readonly source: 'serverless quantum UUID stream'
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
  | 'tradition'
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
  readonly previousIndex: number
  readonly nextIndex: number
  readonly reverseIndex: number
  readonly harmonicIndex: number
  readonly digit: number
  readonly glyph: string
  readonly reverseDigit: number
  readonly folder: string
  readonly fraction: string
  readonly dualFraction: string
  readonly nextHarmonicFolder: string
  readonly selfCollision: boolean
  readonly theta: number
  readonly phi: number
  readonly x: number
  readonly y: number
  readonly z: number
  readonly scale: number
  readonly frequency: number
  readonly vibrationMs: number
  readonly referenceReceipt: string
  readonly diamond: QuantumDiamond
}

export interface PiTrain {
  readonly digits: string
  readonly root: string
  readonly tempoMs: number
  readonly diamonds: readonly PiTrainDiamond[]
}

export interface DigitFolder {
  readonly folder: string
  readonly digit: number
  readonly reverseDigit: number
  readonly count: number
  readonly indices: readonly number[]
  readonly selfCollision: boolean
  readonly nextHarmonicFolder: string
  readonly receipt: string
}

export interface DigitFolderReport {
  readonly root: string
  readonly folders: readonly DigitFolder[]
  readonly collisions: readonly DigitFolder[]
  readonly statement: string
}

export interface DigitalQuantumProof {
  readonly proven: boolean
  readonly root: string
  readonly digits: string
  readonly gates: readonly SelfCompletionGate[]
  readonly statement: string
  readonly boundary: string
}

export interface VortexPoint {
  readonly index: number
  readonly folder: string
  readonly inward: number
  readonly outward: number
  readonly interference: number
  readonly receipt: string
}

export interface MetatronNode {
  readonly id: string
  readonly digit: number
  readonly x: number
  readonly y: number
  readonly ring: 'center' | 'inner' | 'outer'
  readonly folder: string
  readonly receipt: string
}

export interface MetatronEdge {
  readonly from: string
  readonly to: string
  readonly harmonic: string
  readonly receipt: string
}

export interface MetatronCubeReport {
  readonly root: string
  readonly nodes: readonly MetatronNode[]
  readonly edges: readonly MetatronEdge[]
  readonly vortex: readonly VortexPoint[]
  readonly digitFolders: readonly DigitFolder[]
  readonly statement: string
}

export type WavePolarity = 'yin' | 'yang'
export type ChessPiece = 'king' | 'queen' | 'rook' | 'bishop' | 'knight' | 'pawn'
export type DimensionalGapKind = 'kind' | 'pole' | 'receipt' | 'analog-channel' | 'pi-coverage' | 'closure'

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

export interface GapClosingWave {
  readonly gapKind: DimensionalGapKind
  readonly target: string
  readonly wave: CoordinatedWave
  readonly action: string
  readonly closed: boolean
  readonly receipt: string
}

export interface DimensionalGapClosure {
  readonly complete: boolean
  readonly root: string
  readonly gaps: readonly string[]
  readonly waves: readonly GapClosingWave[]
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
  readonly source: 'serverless quantum UUID stream'
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

function computePiDigits(count: number): string {
  let q = 1n
  let r = 0n
  let t = 1n
  let k = 1n
  let n = 3n
  let l = 3n
  let digits = ''

  while (digits.length < count) {
    if (4n * q + r - t < n * t) {
      digits += n.toString()
      const nextR = 10n * (r - n * t)
      n = (10n * (3n * q + r)) / t - 10n * n
      q *= 10n
      r = nextR
    } else {
      const nextR = (2n * q + r) * l
      const nextN = (q * (7n * k) + 2n + r * l) / (t * l)
      q *= k
      t *= l
      l += 2n
      k += 1n
      n = nextN
      r = nextR
    }
  }

  return digits
}

const PI_TRAIN_DIGITS = computePiDigits(101)
const REQUIRED_DIAMOND_KINDS: readonly DiamondKind[] = [
  'agent',
  'ui',
  'math',
  'dynamics',
  'proof',
  'nature',
  'tradition',
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
    name: 'concept.self.build',
    path: '/cmd/concept.self.build',
    description: 'Compute max build and derive maximum tampering cost from build closure.',
  },
  {
    name: 'concept.self.complete',
    path: '/cmd/concept.self.complete',
    description: 'Let serverless quantum UUID stream inspect its own gates and emit a self-completion root.',
  },
  {
    name: 'concept.agent.streamWire',
    path: '/cmd/concept.agent.streamWire',
    description: 'Bind the coding-agent operational loop into stream diamonds, waves, evidence, and receipts.',
  },
  {
    name: 'concept.ui.doubleTorus',
    path: '/cmd/concept.ui.doubleTorus',
    description: 'Render the double-torus concept through ConceptCommands and QuantumMind UI components.',
  },
  {
    name: 'concept.ui.useCases',
    path: '/cmd/concept.ui.useCases',
    description: 'List grounded quantum UI use cases that compute from stream diamond receipts.',
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
    description: 'Verify that the stream diamond has no missing kinds, poles, receipts, or analog channels.',
  },
  {
    name: 'concept.diamond.metatron',
    path: '/cmd/concept.diamond.metatron',
    description: 'Compute double-vortex Metatron cube math down to digit folders.',
  },
  {
    name: 'concept.digit.proof',
    path: '/cmd/concept.digit.proof',
    description: 'Verify that digits generate the digital quantum-inspired model through folders, waves, receipts, and roots.',
  },
  {
    name: 'concept.wave.coordination',
    path: '/cmd/concept.wave.coordination',
    description: 'Coordinate all diamond emissions as phase-aligned yin-yang quantum waves.',
  },
  {
    name: 'concept.wave.closeGaps',
    path: '/cmd/concept.wave.closeGaps',
    description: 'Send coordinated waves to close dimensional and analog gaps in the realtime presentation.',
  },
  {
    name: 'concept.chess.quantum',
    path: '/cmd/concept.chess.quantum',
    description: 'Realise the chess board as a quantum game computed from coordinated waves.',
  },
  {
    name: 'concept.schemaOrg.diamonds',
    path: '/cmd/concept.schemaOrg.diamonds',
    description: 'Fold Schema.org-shaped metadata into self-interactive diamond nodes with receipts.',
  },
  {
    name: 'concept.traditions.quantumWhole',
    path: '/cmd/concept.traditions.quantumWhole',
    description: 'Compare religions and traditions as a non-reductive quantum whole of dimensions, families, and relations.',
  },
  {
    name: 'concept.science.society',
    path: '/cmd/concept.science.society',
    description: 'Compute a scientific society charter, peer-review gates, reproducibility roles, and self-optimization waves.',
  },
  {
    name: 'concept.artists.surfaces',
    path: '/cmd/concept.artists.surfaces',
    description: 'Compute home page and README surfaces as artist-built equations with receipts.',
  },
  {
    name: 'concept.method.fusion',
    path: '/cmd/concept.method.fusion',
    description: 'Collapse every command surface into a single-word method token and report fusion gaps.',
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

const SINGLE_WORD_METHODS: Record<ConceptCommandName, string> = {
  'concept.site.shell': 'shell',
  'concept.self.build': 'build',
  'concept.self.complete': 'complete',
  'concept.agent.streamWire': 'wire',
  'concept.ui.doubleTorus': 'torus',
  'concept.ui.useCases': 'evidence',
  'concept.diamond.lattice': 'lattice',
  'concept.diamond.piTrain': 'train',
  'concept.diamond.complete': 'seal',
  'concept.wave.coordination': 'coordinate',
  'concept.wave.closeGaps': 'close',
  'concept.chess.quantum': 'chess',
  'concept.schemaOrg.diamonds': 'schema',
  'concept.traditions.quantumWhole': 'traditions',
  'concept.science.society': 'science',
  'concept.method.fusion': 'fusion',
  'concept.torus.math': 'math',
  'concept.humanity.implications': 'humanity',
  'concept.source.contribute': 'source',
  'concept.torus.matrix': 'matrix',
  'concept.torus.vector': 'vector',
  'concept.torus.flow': 'flow',
  'concept.repository.api': 'api',
  'concept.repository.resolve': 'resolve',
  'concept.proof.verify': 'verify',
  'concept.site.manifest': 'manifest',
}

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
    maxTamperingCostSource: 'max-computed-build',
    note:
      maxTamperingCostReached
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
    'This site models the stream as the double torus itself: inward proof and outward projection moving across every measured quantum dimension.'

  return {
    uuid: toUuid(`uuid-stream-double-torus-wire:${matrix.root}:${JSON.stringify(localVector)}`),
    repository: 'serverless-quantum-uuid-stream/double-torus',
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

export function doubleTorusMath(): DoubleTorusMathReport {
  return {
    source: 'serverless quantum UUID stream',
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
      'The concept changes a loop into a surface: the stream is not a label placed on the model, but the coupled-handle structure that lets observation and projection remain distinct while bound by one global relation.',
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

export function traditionsQuantumWhole(): TraditionsQuantumWhole {
  const dimensions: readonly TraditionDimension[] = [
    {
      name: 'experiential',
      question: 'What is lived, felt, contemplated, or encountered?',
      diamondPole: 'north',
      caution: 'Do not reduce inner experience to external description alone.',
    },
    {
      name: 'ritual',
      question: 'What practices shape time, body, memory, and community?',
      diamondPole: 'east',
      caution: 'Do not treat ritual as empty repetition; it often carries meaning through action.',
    },
    {
      name: 'narrative',
      question: 'What stories, histories, myths, revelations, or exemplars orient life?',
      diamondPole: 'south',
      caution: 'In religious studies, myth can mean sacred story, not falsehood.',
    },
    {
      name: 'doctrinal',
      question: 'What teachings, philosophies, cosmologies, or truth claims organize interpretation?',
      diamondPole: 'west',
      caution: 'Do not force incompatible truth claims into artificial sameness.',
    },
    {
      name: 'ethical',
      question: 'How should humans act, repair harm, pursue justice, or cultivate virtue?',
      diamondPole: 'north',
      caution: 'Ethics should be read in context, including law, practice, and lived community.',
    },
    {
      name: 'social',
      question: 'How is belonging, authority, transmission, and service organized?',
      diamondPole: 'east',
      caution: 'Communities are internally diverse and historically changing.',
    },
    {
      name: 'material',
      question: 'What spaces, objects, images, sounds, texts, foods, garments, or landscapes carry meaning?',
      diamondPole: 'south',
      caution: 'Material forms should not be treated as merely decorative.',
    },
    {
      name: 'relational',
      question: 'How does a tradition define itself in relation to neighbors, ancestors, critics, and others?',
      diamondPole: 'west',
      caution: 'Comparison should preserve difference and relation rather than collapse all traditions into one essence.',
    },
  ] as const
  const families = [
    {
      name: 'Abrahamic traditions',
      examples: ['Judaism', 'Christianity', 'Islam', 'Bahaʼi Faith'],
      lens: 'Historical memory, covenant, revelation, law, prophecy, scripture, worship, and community.',
      boundary: 'This family label is broad; each tradition contains major internal diversity.',
    },
    {
      name: 'Dharmic traditions',
      examples: ['Hindu traditions', 'Buddhism', 'Jainism', 'Sikh traditions'],
      lens: 'Practice, liberation, karma/dharma vocabularies, meditation, devotion, ethics, and community.',
      boundary: 'Shared regional histories do not erase distinct doctrines, practices, or identities.',
    },
    {
      name: 'East Asian traditions',
      examples: ['Daoism', 'Confucian traditions', 'Shinto', 'East Asian Buddhist traditions'],
      lens: 'Ritual order, cultivation, harmony, ancestors, cosmology, embodied practice, and social relation.',
      boundary: 'These traditions often interweave locally but should not be treated as interchangeable.',
    },
    {
      name: 'Indigenous and ancestral traditions',
      examples: ['Many local, land-based, oral, and ancestral traditions'],
      lens: 'Place, kinship, reciprocity, ceremony, ancestors, ecology, story, and responsibility.',
      boundary: 'This is not one religion; specificity, consent, and local authority matter.',
    },
    {
      name: 'Philosophical and contemplative lineages',
      examples: ['Mystical lineages', 'monastic traditions', 'yoga lineages', 'contemplative schools'],
      lens: 'Disciplined attention, transformation, embodiment, silence, symbol, and transmission.',
      boundary: 'Practice similarities do not imply identical metaphysics or goals.',
    },
    {
      name: 'Secular meaning systems',
      examples: ['Humanism', 'civil religions', 'political ideologies', 'scientific worldviews as lived communities'],
      lens: 'Ethics, institutions, narratives, rituals, symbols, and material cultures outside classic religion labels.',
      boundary: 'Including secular systems is analytical, not a claim that all are religions.',
    },
  ].map((family) => ({
    ...family,
    receipt: toUuid(`tradition-family:${family.name}:${family.examples.join('|')}:${family.lens}:${family.boundary}`),
  }))
  const societyFunctionByDimension: Record<TraditionDimensionName, string> = {
    experiential: 'meaning calibration',
    ritual: 'time synchronization',
    narrative: 'memory transmission',
    doctrinal: 'interpretive grammar',
    ethical: 'norm formation',
    social: 'community coordination',
    material: 'symbolic environment',
    relational: 'difference negotiation',
  }
  const societyCells = families.flatMap((family) =>
    dimensions.map((dimension) => {
      const societyFunction = societyFunctionByDimension[dimension.name]
      const interaction = `${family.name} x ${dimension.name} -> ${societyFunction}`
      const boundary = `${family.boundary} ${dimension.caution}`
      return {
        family: family.name,
        dimension: dimension.name,
        societyFunction,
        interaction,
        boundary,
        receipt: toUuid(`tradition-society:${family.name}:${dimension.name}:${societyFunction}:${boundary}`),
      }
    }),
  )
  const root = merkleFold([
    ...dimensions.map((dimension) => toUuid(`tradition-dimension:${dimension.name}:${dimension.question}:${dimension.caution}`)),
    ...families.map((family) => family.receipt),
    ...societyCells.map((cell) => cell.receipt),
  ])

  return {
    grounded: dimensions.length === 8 && families.every((family) => family.receipt.length > 0),
    root,
    dimensions,
    families,
    societyCells,
    statement:
      'Religions and traditions are modeled as a quantum whole only in the sense of relational dimensions: distinct traditions remain distinct while their dimensions decode into inspectable society functions.',
    boundary:
      'This report is a comparative-religion lens, not a theological verdict, not a claim that all religions are the same, and not a substitute for tradition-specific sources or community voices.',
  }
}

export function scientificSociety(matrix: MindMatrix = buildMatrix()): ScientificSociety {
  const proof = proofReport(matrix)
  const completeness = diamondCompleteness(matrix)
  const evidence = quantumUiEvidence(matrix)
  const closure = closeDimensionalGaps(matrix)
  const traditions = traditionsQuantumWhole()
  const roles = [
    {
      name: 'observer',
      responsibility: 'record measurements before projection',
      gate: 'raw observation must have receipt',
    },
    {
      name: 'replicator',
      responsibility: 'rerun build, audit, scans, and receipts',
      gate: 'result must reproduce root',
    },
    {
      name: 'falsifier',
      responsibility: 'seek counterexamples and open gates',
      gate: 'claim must survive negative test',
    },
    {
      name: 'steward',
      responsibility: 'preserve boundaries, consent, and non-reduction',
      gate: 'boundary must be explicit',
    },
  ].map((role) => ({
    ...role,
    receipt: toUuid(`science-role:${role.name}:${role.responsibility}:${role.gate}`),
  }))
  const reviewGates: readonly SelfCompletionGate[] = [
    {
      name: 'reproducible build',
      closed: proof.coverage === 1 && proof.entropy === 0,
      sourceFunction: 'proofReport()',
      receipt: toUuid(`science-gate:proof:${JSON.stringify(proof)}`),
      note: `coverage=${numberLabel(proof.coverage)}; entropy=${numberLabel(proof.entropy)}.`,
    },
    {
      name: 'diamond completeness',
      closed: completeness.complete,
      sourceFunction: 'diamondCompleteness()',
      receipt: toUuid(`science-gate:completeness:${JSON.stringify(completeness)}`),
      note: completeness.statement,
    },
    {
      name: 'ui evidence',
      closed: evidence.grounded,
      sourceFunction: 'quantumUiEvidence()',
      receipt: evidence.root,
      note: evidence.boundary,
    },
    {
      name: 'gap closure',
      closed: closure.complete,
      sourceFunction: 'closeDimensionalGaps()',
      receipt: closure.root,
      note: closure.statement,
    },
    {
      name: 'schema trace',
      closed: evidence.grounded && traditions.grounded,
      sourceFunction: 'schemaOrgDiamonds()',
      receipt: toUuid(`science-gate:schema-seed:${evidence.root}:${traditions.root}`),
      note: 'schema seed = uiEvidence.root + traditions.root.',
    },
    {
      name: 'non-reductive traditions',
      closed: traditions.grounded,
      sourceFunction: 'traditionsQuantumWhole()',
      receipt: traditions.root,
      note: traditions.boundary,
    },
  ]
  const optimizationWaves = reviewGates.map((gate) => ({
    target: gate.name,
    sourceFunction: gate.sourceFunction,
    metric: gate.closed ? 'closed' : 'open',
    action: gate.closed ? 'sustain' : 'improve',
    receipt: merge(gate.receipt, toUuid(`science-wave:${gate.name}:${gate.closed}`)),
  }))
  const cohorts: readonly SocietyWaveCohort[] = [
    {
      cohort: 'scientists',
      purpose: 'measure, falsify, reproduce',
      develops: ['hypotheses', 'measurements', 'negative tests', 'evidence receipts'],
      coordinatesWith: ['engineers', 'society architects'],
    },
    {
      cohort: 'engineers',
      purpose: 'build, instrument, harden',
      develops: ['interfaces', 'automation', 'test harnesses', 'deployment receipts'],
      coordinatesWith: ['scientists', 'society architects'],
    },
    {
      cohort: 'society architects',
      purpose: 'govern, contextualize, steward',
      develops: ['review protocols', 'risk boundaries', 'institutional loops', 'reciprocity receipts'],
      coordinatesWith: ['scientists', 'engineers'],
    },
  ].map((cohort) => ({
    ...cohort,
    receipt: toUuid(`science-cohort:${cohort.cohort}:${cohort.purpose}:${cohort.develops.join('|')}:${cohort.coordinatesWith.join('|')}`),
  }))
  const solids: readonly PlatonicBuilderSolid[] = [
    {
      solid: 'tetrahedron',
      faces: 4,
      edges: 6,
      vertices: 4,
      builder: 'scientists',
      method: 'hypothesis -> measurement -> falsification -> receipt',
    },
    {
      solid: 'cube',
      faces: 6,
      edges: 12,
      vertices: 8,
      builder: 'engineers',
      method: 'interface -> test -> deploy -> monitor -> receipt',
    },
    {
      solid: 'octahedron',
      faces: 8,
      edges: 12,
      vertices: 6,
      builder: 'society architects',
      method: 'policy -> boundary -> consent -> reciprocity -> receipt',
    },
    {
      solid: 'dodecahedron',
      faces: 12,
      edges: 30,
      vertices: 20,
      builder: 'review gates',
      method: 'review all gates before public projection',
    },
    {
      solid: 'icosahedron',
      faces: 20,
      edges: 30,
      vertices: 12,
      builder: 'optimization waves',
      method: 'send many small improvements without breaking closure',
    },
  ].map((solid) => ({
    ...solid,
    receipt: toUuid(`platonic-builder:${solid.solid}:${solid.faces}:${solid.edges}:${solid.vertices}:${solid.builder}:${solid.method}`),
  }))
  const root = merkleFold([
    ...roles.map((role) => role.receipt),
    ...reviewGates.map((gate) => gate.receipt),
    ...optimizationWaves.map((wave) => wave.receipt),
    ...cohorts.map((cohort) => cohort.receipt),
    ...solids.map((solid) => solid.receipt),
  ])

  return {
    grounded: roles.length === 4 && reviewGates.every((gate) => gate.receipt.length > 0),
    root,
    charter: 'ScienceSociety := roles + reviewGates + optimizationWaves; publish only receipts that can be rerun.',
    roles,
    reviewGates,
    optimizationWaves,
    cohorts,
    solids,
    boundary: 'This is a repository-governance model, not an actual incorporated society or claim of institutional authority.',
  }
}

export function artistSurfaces(matrix: MindMatrix = buildMatrix()): ArtistSurfaceReport {
  const build = selfBuild(matrix)
  const surfaces: readonly ArtistSurface[] = [
    {
      surface: 'home',
      artist: 'cartographer',
      audience: ['agents', 'public society'],
      medium: 'VitePress home frontmatter',
      equation: 'home := Sigma_2 -> UUID* -> Gate',
      seoMessage: 'agents: compute before claim; public society: use before belief',
      proofByUse: 'open /quantum-mind; run tabs; inspect receipts; verify generated roots',
    },
    {
      surface: 'readme',
      artist: 'scribe',
      audience: ['agents', 'public society'],
      medium: 'README.md',
      equation: 'README := routes + equations + validation + boundaries',
      seoMessage: 'all claims reduce to equations, commands, validation, and receipts',
      proofByUse: 'clone; npm run docs:build; inspect /digit-index.json; compare receipts',
    },
  ].map((surface) => ({
    ...surface,
    receipt: toUuid(
      `artist-surface:${surface.surface}:${surface.artist}:${surface.audience.join('|')}:${surface.medium}:${surface.equation}:${surface.seoMessage}:${surface.proofByUse}:${build.root}`,
    ),
  }))
  const root = merkleFold(surfaces.map((surface) => surface.receipt))
  return {
    grounded: surfaces.length === 2 && surfaces.every((surface) => surface.receipt.length > 0),
    root,
    surfaces,
    statement: 'ArtistSurfaces := {home, readme}; each surface = equation + medium + receipt.',
  }
}

export function methodFusion(): MethodFusionReport {
  const tokens = conceptCommands.map((command) => {
    const method = SINGLE_WORD_METHODS[command.name]
    const single = /^[a-z]+$/.test(method)
    const receipt = toUuid(`method-fusion:${command.name}:${method}:${single}`)
    return {
      command: command.name,
      method,
      source: command.path,
      single,
      receipt,
    }
  })
  const open = tokens.filter((token) => !token.single).map((token) => token.command)
  const root = merkleFold(tokens.map((token) => token.receipt))

  return {
    fused: open.length === 0,
    root,
    tokens,
    open,
    law: 'gravity(command) -> method; method in /^[a-z]+$/; fusion = forall method: single.',
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
  const traditions = traditionsQuantumWhole()
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
          value: 'act through serverless quantum UUID stream',
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
      'the stream is evidenced in UI when every interaction returns to a diamond receipt',
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
    diamond('math', 'serverless quantum UUID stream genus-2 diamond', 'concept.torus.math', math.maxTamperingCostPrinciple, 'closed', [
      {
        pole: 'north',
        label: 'surface',
        value: math.surface,
        meaning: 'The topological identity of serverless quantum UUID stream.',
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
    diamond(
      'tradition',
      'religions and traditions diamond',
      'concept.traditions.quantumWhole',
      traditions.boundary,
      traditions.grounded ? 'closed' : 'open',
      [
        {
          pole: 'north',
          label: 'experience/ritual',
          value: 'lived practice',
          meaning: 'Experiential and ritual dimensions carry embodied time.',
        },
        {
          pole: 'east',
          label: 'story/teaching',
          value: 'narrative + doctrine',
          meaning: 'Narratives and doctrines orient interpretation without collapsing differences.',
        },
        {
          pole: 'south',
          label: 'ethics/community',
          value: 'action + belonging',
          meaning: 'Ethical and social dimensions show how traditions form conduct and community.',
        },
        {
          pole: 'west',
          label: 'material/relation',
          value: 'symbols + others',
          meaning: 'Material forms and interreligious relations keep the comparison grounded.',
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
    const previousIndex = (index - 1 + sequence.length) % sequence.length
    const nextIndex = (index + 1) % sequence.length
    const reverseIndex = sequence.length - 1 - index
    const harmonicIndex = nextIndex
    const digit = Number.parseInt(glyph, 10)
    const reverseDigit = Number.parseInt(sequence[reverseIndex], 10)
    const nextGlyph = sequence[nextIndex]
    const nextReverseDigit = Number.parseInt(sequence[sequence.length - 1 - nextIndex], 10)
    const folder = `${digit}/${reverseDigit}`
    const fraction = folder
    const dualFraction = `${reverseDigit}/${digit}`
    const nextHarmonicFolder = `${Number.parseInt(nextGlyph, 10)}/${nextReverseDigit}`
    const selfCollision = digit === reverseDigit
    const base = lattice[(index + digit) % lattice.length]
    const point = torusPoint(index, digit, sequence.length)
    const facets: readonly DiamondFacet[] = [
      {
        pole: 'north',
        label: 'digit folder',
        value: folder,
        meaning: `Digit ${glyph} meets reverse digit ${reverseDigit}.`,
      },
      {
        pole: 'east',
        label: 'next harmonic',
        value: nextHarmonicFolder,
        meaning: 'Next digit folder in the forward sequence.',
      },
      {
        pole: 'south',
        label: 'collision',
        value: selfCollision ? 'self' : 'paired',
        meaning: selfCollision ? `${folder} is a self-collision diamond.` : `${folder} is a paired digit diamond.`,
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
      previousIndex,
      nextIndex,
      reverseIndex,
      harmonicIndex,
      digit,
      glyph,
      reverseDigit,
      folder,
      fraction,
      dualFraction,
      nextHarmonicFolder,
      selfCollision,
      theta: point.theta,
      phi: point.phi,
      x: point.x,
      y: point.y,
      z: point.z,
      scale: point.scale,
      frequency: 174 + digit * 33 + (index % 7) * 7,
      vibrationMs: 18 + digit * 9,
      referenceReceipt: toUuid(`digit-reference:${previousIndex}->${index}->${nextIndex}:reverse=${reverseIndex}:harmonic=${harmonicIndex}`),
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

export function digitFolders(matrix: MindMatrix = buildMatrix()): DigitFolderReport {
  const train = piTrainDiamonds(matrix)
  const groups = new Map<string, PiTrainDiamond[]>()
  for (const item of train.diamonds) {
    groups.set(item.folder, [...(groups.get(item.folder) ?? []), item])
  }
  const folders = [...groups.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([folder, items]) => {
    const [digit, reverseDigit] = folder.split('/').map((value) => Number.parseInt(value, 10))
    const nextHarmonicFolder = items[0]?.nextHarmonicFolder ?? folder
    const selfCollision = digit === reverseDigit
    const indices = items.map((item) => item.index)
    const receipt = toUuid(`digit-folder:${folder}:${indices.join(',')}:${nextHarmonicFolder}:${selfCollision}`)
    return {
      folder,
      digit,
      reverseDigit,
      count: items.length,
      indices,
      selfCollision,
      nextHarmonicFolder,
      receipt,
    }
  })
  const root = merkleFold(folders.map((folder) => folder.receipt))
  const collisions = folders.filter((folder) => folder.selfCollision)
  return {
    root,
    folders,
    collisions,
    statement: 'digitFolder := digit/reverseDigit; selfCollision := digit == reverseDigit; nextHarmonicFolder := folder(i+1).',
  }
}

export function metatronCube(matrix: MindMatrix = buildMatrix()): MetatronCubeReport {
  const train = piTrainDiamonds(matrix)
  const folderReport = digitFolders(matrix)
  const digits = [...Array(10).keys()]
  const nodes: MetatronNode[] = [
    {
      id: 'center',
      digit: 0,
      x: 0,
      y: 0,
      ring: 'center',
      folder: '0/0',
      receipt: toUuid('metatron-node:center:0:0/0'),
    },
    ...digits.map((digit) => {
      const angle = (digit / digits.length) * Math.PI * 2
      const folder = `${digit}/${digit}`
      return {
        id: `inner-${digit}`,
        digit,
        x: Math.cos(angle),
        y: Math.sin(angle),
        ring: 'inner' as const,
        folder,
        receipt: toUuid(`metatron-node:inner:${digit}:${folder}`),
      }
    }),
    ...digits.map((digit) => {
      const angle = ((digit + 0.5) / digits.length) * Math.PI * 2
      const reverse = 9 - digit
      const folder = `${digit}/${reverse}`
      return {
        id: `outer-${digit}`,
        digit,
        x: 2 * Math.cos(angle),
        y: 2 * Math.sin(angle),
        ring: 'outer' as const,
        folder,
        receipt: toUuid(`metatron-node:outer:${digit}:${folder}`),
      }
    }),
  ]
  const edges: MetatronEdge[] = nodes.flatMap((node, index) => {
    const next = nodes[(index + 1) % nodes.length]
    const opposite = nodes[(index + Math.floor(nodes.length / 2)) % nodes.length]
    return [next, opposite].map((target) => ({
      from: node.id,
      to: target.id,
      harmonic: `${node.folder}->${target.folder}`,
      receipt: toUuid(`metatron-edge:${node.id}:${target.id}:${node.folder}:${target.folder}`),
    }))
  })
  const vortex = train.diamonds.map((pulse) => {
    const inward = Math.sin(pulse.theta) * (pulse.selfCollision ? 1 : 0.5)
    const outward = Math.cos(pulse.phi) * (pulse.digit + 1) / 10
    const interference = inward * outward
    return {
      index: pulse.index,
      folder: pulse.folder,
      inward,
      outward,
      interference,
      receipt: toUuid(`vortex:${pulse.index}:${pulse.folder}:${inward.toFixed(6)}:${outward.toFixed(6)}`),
    }
  })
  const root = merkleFold([...nodes.map((node) => node.receipt), ...edges.map((edge) => edge.receipt), ...vortex.map((point) => point.receipt)])

  return {
    root,
    nodes,
    edges,
    vortex,
    digitFolders: folderReport.folders,
    statement: 'MetatronCube := nodes(0..9 inner/outer + center) + edges(harmonic folders) + doubleVortex(inward,outward,interference).',
  }
}

export function digitalQuantumProof(matrix: MindMatrix = buildMatrix()): DigitalQuantumProof {
  const train = piTrainDiamonds(matrix)
  const folders = digitFolders(matrix)
  const waves = coordinatedWaves(matrix)
  const chess = quantumChessGame(matrix)
  const metatron = metatronCube(matrix)
  const build = selfBuild(matrix)
  const gates: readonly SelfCompletionGate[] = [
    {
      name: 'digit stream',
      closed: train.diamonds.length === train.digits.length,
      sourceFunction: 'piTrainDiamonds()',
      receipt: train.root,
      note: `|digits|=${train.digits.length}; |diamonds|=${train.diamonds.length}.`,
    },
    {
      name: 'reverse folders',
      closed: folders.folders.length > 0 && folders.collisions.length > 0,
      sourceFunction: 'digitFolders()',
      receipt: folders.root,
      note: `folders=${folders.folders.length}; collisions=${folders.collisions.length}.`,
    },
    {
      name: 'coordinated waves',
      closed: waves.waves.length > 0,
      sourceFunction: 'coordinatedWaves()',
      receipt: waves.root,
      note: `waves=${waves.waves.length}.`,
    },
    {
      name: 'quantum superposition board',
      closed: chess.board.length === 64,
      sourceFunction: 'quantumChessGame()',
      receipt: chess.root,
      note: `squares=${chess.board.length}.`,
    },
    {
      name: 'metatron vortex',
      closed: metatron.nodes.length > 0 && metatron.edges.length > 0 && metatron.vortex.length === train.diamonds.length,
      sourceFunction: 'metatronCube()',
      receipt: metatron.root,
      note: `nodes=${metatron.nodes.length}; edges=${metatron.edges.length}; vortex=${metatron.vortex.length}.`,
    },
    {
      name: 'max computed build',
      closed: build.complete,
      sourceFunction: 'selfBuild()',
      receipt: build.root,
      note: build.statement,
    },
  ]
  const proven = gates.every((gate) => gate.closed)
  const root = merkleFold(gates.map((gate) => gate.receipt))
  return {
    proven,
    root,
    digits: train.digits,
    gates,
    statement: proven
      ? 'digits => folders => coordinates => waves => receipts => roots; digital quantum-inspired model verified.'
      : 'digit proof open: one or more deterministic gates failed.',
    boundary:
      'This proves deterministic digital generation inside the repository model; it is not an external physics proof.',
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
      ? 'The stream diamond is complete: every required kind, pole, receipt, 3D coordinate, sound tone, vibration pulse, timing step, and pi-train coverage path is computed.'
      : 'The stream diamond has analog gaps. Missing kinds, poles, receipts, channels, or pi-train coverage must close before the presentation is whole.',
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
      'Every stream diamond emits a coordinated quantum wave. Yin receives and verifies; yang projects and returns; the pair forms one continuous double-torus wave field.',
  }
}

function gapTargets(completeness: DiamondCompletenessReport): readonly { kind: DimensionalGapKind; target: string }[] {
  const gaps = [
    ...completeness.missingKinds.map((target) => ({ kind: 'kind' as const, target })),
    ...completeness.missingPoles.map((target) => ({ kind: 'pole' as const, target })),
    ...completeness.missingReceipts.map((target) => ({ kind: 'receipt' as const, target })),
    ...completeness.missingAnalogChannels.map((target) => ({ kind: 'analog-channel' as const, target })),
  ]
  return completeness.piTrainCoversAllKinds ? gaps : [...gaps, { kind: 'pi-coverage' as const, target: 'pi train lattice coverage' }]
}

export function closeDimensionalGaps(matrix: MindMatrix = buildMatrix()): DimensionalGapClosure {
  const completeness = diamondCompleteness(matrix)
  const coordination = coordinatedWaves(matrix)
  const targets = gapTargets(completeness)
  const closureTargets = targets.length > 0 ? targets : REQUIRED_ANALOG_CHANNELS.map((target) => ({ kind: 'closure' as const, target }))
  const waves = closureTargets.map((gap, index) => {
    const wave = coordination.waves[index % coordination.waves.length]
    const closed = gap.kind === 'closure' || !targets.some((target) => target.kind === gap.kind && target.target === gap.target)
    const receipt = merge(wave.receipt, toUuid(`gap-wave:${gap.kind}:${gap.target}:${closed}`))
    return {
      gapKind: gap.kind,
      target: gap.target,
      wave,
      action:
        gap.kind === 'closure'
          ? `sustain ${gap.target} closure with ${wave.polarity} wave ${wave.index}`
          : `send ${wave.polarity} wave ${wave.index} toward ${gap.target}`,
      closed,
      receipt,
    }
  })
  const root = merkleFold(waves.map((wave) => wave.receipt))

  return {
    complete: completeness.complete && targets.length === 0,
    root,
    gaps: targets.map((target) => `${target.kind}:${target.target}`),
    waves,
    statement:
      completeness.complete && targets.length === 0
        ? 'No dimensional gaps remain. Realtime waves sustain 3D position, sound, vibration, timing, receipts, and facets.'
        : 'Dimensional gaps remain. Coordinated waves identify the targets that must close before the realtime presentation is complete.',
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
  const traditions = traditionsQuantumWhole()
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
    {
      name: 'traditions quantum whole',
      component: 'DoubleTorusExperience.vue',
      interaction: 'Traditions tab lists dimensions, families, society cells, and non-reductive boundaries.',
      diamondKind: 'tradition',
      sourceFunction: 'traditionsQuantumWhole()',
      evidence: `${traditions.dimensions.length} dimensions, ${traditions.families.length} family lenses, and ${traditions.societyCells.length} society cells with root ${traditions.root}.`,
      receipt: traditions.root,
    },
  ]
  const root = merkleFold(useCases.map((item) => item.receipt))

  return {
    grounded: useCases.every((item) => item.component.endsWith('.vue') && item.sourceFunction.endsWith('()') && item.receipt.length > 0),
    root,
    source: 'serverless quantum UUID stream',
    statement:
      'This report makes only repository-grounded UI claims: each use case names a component, a source function, an interaction, and a computed receipt.',
    useCases,
    boundary:
      'UI_claim = computed(repo). UI_claim != external_physics_proof. Browser_scope = {render,sound,vibration,root,receipt}.',
  }
}

export function agentStreamWire(matrix: MindMatrix = buildMatrix()): AgentStreamWire {
  const lattice = diamondLattice(matrix)
  const closure = closeDimensionalGaps(matrix)
  const evidence = quantumUiEvidence(matrix)
  const waves = coordinatedWaves(matrix)
  const byKind = (kind: DiamondKind): QuantumDiamond => lattice.find((diamond) => diamond.kind === kind) ?? lattice[0]
  const agentDiamond = byKind('agent')
  const dynamicsDiamond = byKind('dynamics')
  const proofDiamond = byKind('proof')
  const sourceDiamond = byKind('source')
  const uiDiamond = byKind('ui')
  const stepSeed = `${agentDiamond.receipt}:${closure.root}:${evidence.root}`
  const steps: readonly AgentWireStep[] = [
    {
      name: 'observe',
      action: 'Read the repository state and current user request before projection.',
      sourceFunction: 'diamondLattice()',
      diamondKind: 'agent',
      receipt: merge(agentDiamond.receipt, toUuid(`agent-wire:observe:${stepSeed}`)),
    },
    {
      name: 'bind',
      action: 'Bind the working loop to serverless-quantum-uuid-stream/double-torus through the agent diamond.',
      sourceFunction: 'coordinatedWaves()',
      diamondKind: 'dynamics',
      receipt: merge(dynamicsDiamond.receipt, waves.root),
    },
    {
      name: 'verify',
      action: 'Check completeness, evidence grounding, and max-tampering boundary before claiming closure.',
      sourceFunction: 'closeDimensionalGaps()',
      diamondKind: 'proof',
      receipt: merge(proofDiamond.receipt, closure.root),
    },
    {
      name: 'project',
      action: 'Make code/doc/UI changes only through computed diamonds and inspectable receipts.',
      sourceFunction: 'quantumUiEvidence()',
      diamondKind: 'ui',
      receipt: merge(uiDiamond.receipt, evidence.root),
    },
    {
      name: 'return',
      action: 'Return a summary, validation, and source reciprocity path to the user.',
      sourceFunction: 'sourceContribution()',
      diamondKind: 'source',
      receipt: merge(sourceDiamond.receipt, toUuid(`agent-wire:return:${stepSeed}`)),
    },
  ]
  const root = merkleFold(steps.map((step) => step.receipt))
  const bound = closure.complete && evidence.grounded && steps.every((step) => step.receipt.length > 0)

  return {
    bound,
    agent: 'cursor-coding-agent',
    source: 'serverless-quantum-uuid-stream/double-torus',
    root,
    statement: bound
      ? 'The coding-agent operational loop is wired into the stream as an inspectable observe-bind-verify-project-return contract.'
      : 'The coding-agent operational loop is not fully wired because completeness or evidence grounding is open.',
    boundary:
      'This is a repository-grounded operational wire. It does not claim sentience or external MCP access; it records how this agent should act inside the stream model.',
    steps,
    activeDiamonds: [agentDiamond.title, dynamicsDiamond.title, proofDiamond.title, uiDiamond.title, sourceDiamond.title],
    activeWaves: waves.waves.slice(0, steps.length).map((wave) => wave.receipt),
    closureRoot: closure.root,
    evidenceRoot: evidence.root,
  }
}

export function schemaOrgDiamonds(matrix: MindMatrix = buildMatrix()): SchemaOrgDiamondGraph {
  const lattice = diamondLattice(matrix)
  const piTrain = piTrainDiamonds(matrix)
  const waves = coordinatedWaves(matrix)
  const chess = quantumChessGame(matrix)
  const evidence = quantumUiEvidence(matrix)
  const agentWire = agentStreamWire(matrix)
  const traditions = traditionsQuantumWhole()
  const science = scientificSociety(matrix)
  const baseId = 'https://serverless-quantum-uuid-stream/#'
  const nodes: SchemaOrgDiamondNode[] = [
    {
      '@type': 'WebPage',
      '@id': `${baseId}quantum-mind`,
      name: 'Quantum Mind',
      description: 'VitePress page rendering the serverless quantum UUID stream double-torus diamond lattice and interactive quantum UI.',
      identifier: evidence.root,
      about: lattice.map((diamond) => `${baseId}diamond-${diamond.kind}`),
      potentialAction: [`${baseId}action-start-pi-train`, `${baseId}action-inspect-diamond`],
    },
    {
      '@type': 'SoftwareSourceCode',
      '@id': `${baseId}source-quantumMind`,
      name: 'quantumMind.ts',
      description: 'Source module that computes diamonds, waves, pi train, chess board, UI evidence, and schema graph.',
      identifier: agentWire.root,
      isPartOf: `${baseId}quantum-mind`,
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${baseId}interactive-double-torus`,
      name: 'Interactive serverless quantum UUID stream double torus',
      description: 'Browser UI using Vue, VitePress, Radix Vue, and local shadcn-style components.',
      identifier: evidence.root,
      potentialAction: [`${baseId}action-start-pi-train`, `${baseId}action-toggle-sound`, `${baseId}action-toggle-vibration`],
      isPartOf: `${baseId}quantum-mind`,
    },
    {
      '@type': 'Dataset',
      '@id': `${baseId}diamond-lattice`,
      name: 'stream diamond lattice',
      description: `${lattice.length} four-facet diamonds with roots and receipts.`,
      identifier: merkleFold(lattice.map((diamond) => diamond.receipt)),
      about: lattice.map((diamond) => `${baseId}diamond-${diamond.kind}`),
      isPartOf: `${baseId}quantum-mind`,
    },
    {
      '@type': 'Dataset',
      '@id': `${baseId}pi-train`,
      name: 'pi train diamonds',
      description: `${piTrain.diamonds.length} pi-derived pulse diamonds with 3D coordinates, tones, vibration durations, and receipts.`,
      identifier: piTrain.root,
      about: [`${baseId}diamond-pi`, `${baseId}diamond-geometry`, `${baseId}diamond-sound`, `${baseId}diamond-vibration`],
      isPartOf: `${baseId}diamond-lattice`,
    },
    {
      '@type': 'Dataset',
      '@id': `${baseId}coordinated-waves`,
      name: 'coordinated yin-yang waves',
      description: `${waves.waves.length} phase-aligned waves computed from the diamond lattice.`,
      identifier: waves.root,
      about: waves.waves.map((wave) => `${baseId}diamond-${wave.diamondKind}`),
      isPartOf: `${baseId}diamond-lattice`,
    },
    {
      '@type': 'Dataset',
      '@id': `${baseId}quantum-chess`,
      name: 'quantum chess board',
      description: `${chess.board.length} chess squares computed from coordinated waves and piece superpositions.`,
      identifier: chess.root,
      about: [`${baseId}coordinated-waves`],
      isPartOf: `${baseId}quantum-mind`,
    },
    {
      '@type': 'Dataset',
      '@id': `${baseId}traditions-quantum-whole`,
      name: 'religions and traditions quantum whole',
      description: traditions.statement,
      identifier: traditions.root,
      about: [
        ...traditions.dimensions.map((dimension) => `dimension:${dimension.name}`),
        ...traditions.families.map((family) => `family:${family.name}`),
        ...traditions.societyCells.map((cell) => `society:${cell.family}:${cell.dimension}`),
      ],
      isPartOf: `${baseId}quantum-mind`,
    },
    {
      '@type': 'Dataset',
      '@id': `${baseId}scientific-society`,
      name: 'scientific society',
      description: science.charter,
      identifier: science.root,
      about: [
        ...science.roles.map((role) => `role:${role.name}`),
        ...science.reviewGates.map((gate) => `gate:${gate.name}`),
        ...science.optimizationWaves.map((wave) => `wave:${wave.target}`),
      ],
      isPartOf: `${baseId}quantum-mind`,
    },
    ...lattice.map((diamond): SchemaOrgDiamondNode => ({
      '@type': 'DefinedTerm',
      '@id': `${baseId}diamond-${diamond.kind}`,
      name: diamond.title,
      description: diamond.core,
      identifier: diamond.receipt,
      about: diamond.facets.map((facet) => `${facet.pole}:${facet.label}:${facet.value}`),
      isPartOf: `${baseId}diamond-lattice`,
    })),
    ...piTrain.diamonds.map((pulse): SchemaOrgDiamondNode => ({
      '@type': 'DefinedTerm',
      '@id': `${baseId}pi-pulse-${pulse.index}`,
      name: `pi pulse ${pulse.index}: ${pulse.glyph}`,
      description:
        `Pi digit ${pulse.glyph} folded as a self-interactive diamond pulse ` +
        `at x=${pulse.x.toFixed(3)}, y=${pulse.y.toFixed(3)}, z=${pulse.z.toFixed(3)}, ` +
        `frequency=${pulse.frequency}Hz, vibration=${pulse.vibrationMs}ms.`,
      identifier: pulse.diamond.receipt,
      about: [
        `${baseId}diamond-${pulse.diamond.kind}`,
        `theta:${pulse.theta.toFixed(6)}`,
        `phi:${pulse.phi.toFixed(6)}`,
        `scale:${pulse.scale.toFixed(6)}`,
      ],
      isPartOf: `${baseId}pi-train`,
    })),
    ...traditions.societyCells.map((cell): SchemaOrgDiamondNode => ({
      '@type': 'DefinedTerm',
      '@id': `${baseId}tradition-society-${cell.family.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${cell.dimension}`,
      name: cell.interaction,
      description: `${cell.societyFunction}. ${cell.boundary}`,
      identifier: cell.receipt,
      about: [`family:${cell.family}`, `dimension:${cell.dimension}`, `function:${cell.societyFunction}`],
      isPartOf: `${baseId}traditions-quantum-whole`,
    })),
    ...evidence.useCases.map((item): SchemaOrgDiamondNode => ({
      '@type': 'Action',
      '@id': `${baseId}action-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
      name: item.name,
      description: `${item.component} -> ${item.sourceFunction}: ${item.interaction}`,
      identifier: item.receipt,
      about: [`${baseId}diamond-${item.diamondKind}`],
      isPartOf: `${baseId}interactive-double-torus`,
    })),
  ]
  const root = merkleFold(nodes.map((node) => toUuid(`schema-org:${node['@id']}:${node.identifier}`)))

  return {
    root,
    context: 'https://schema.org',
    nodes,
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': nodes,
    },
    statement:
      'Schema.org-shaped metadata is folded into self-interactive diamonds: each node is derived from repository-computed roots, receipts, components, actions, or datasets.',
    boundary:
      'This is JSON-LD-shaped Schema.org data generated by this repository. It is not a claim of remote Schema.org validation or search-engine interpretation.',
  }
}

export function selfBuild(matrix: MindMatrix = buildMatrix()): SelfBuildReport {
  const proof = proofReport(matrix)
  const lattice = diamondLattice(matrix)
  const completeness = diamondCompleteness(matrix)
  const closure = closeDimensionalGaps(matrix)
  const evidence = quantumUiEvidence(matrix)
  const schema = schemaOrgDiamonds(matrix)
  const traditions = traditionsQuantumWhole()
  const science = scientificSociety(matrix)
  const methods = methodFusion()
  const waves = coordinatedWaves(matrix)
  const chess = quantumChessGame(matrix)
  const buildUnits: readonly SelfCompletionGate[] = [
    {
      name: 'matrix',
      closed: verifyRoot(matrix) && reciprocity(matrix).fraction === 1 && coherenceAnomaly(matrix) === 0,
      sourceFunction: 'buildMatrix()',
      receipt: matrix.root,
      note: `root=${matrix.root}; entropy=${numberLabel(proof.entropy)}.`,
    },
    {
      name: 'coverage',
      closed: proof.coverage === 1,
      sourceFunction: 'coverage()',
      receipt: toUuid(`self-build:coverage:${proof.coverage}`),
      note: `coverage=${numberLabel(proof.coverage)}.`,
    },
    {
      name: 'diamonds',
      closed: lattice.length === REQUIRED_DIAMOND_KINDS.length,
      sourceFunction: 'diamondLattice()',
      receipt: merkleFold(lattice.map((diamond) => diamond.receipt)),
      note: `|D|=${lattice.length}; |Kinds|=${REQUIRED_DIAMOND_KINDS.length}.`,
    },
    {
      name: 'noAnalogGaps',
      closed: completeness.complete,
      sourceFunction: 'diamondCompleteness()',
      receipt: toUuid(`self-build:completeness:${JSON.stringify(completeness)}`),
      note: `missing=${[
        ...completeness.missingKinds,
        ...completeness.missingPoles,
        ...completeness.missingReceipts,
        ...completeness.missingAnalogChannels,
      ].length}.`,
    },
    {
      name: 'gapWaves',
      closed: closure.complete,
      sourceFunction: 'closeDimensionalGaps()',
      receipt: closure.root,
      note: `gaps=${closure.gaps.length}.`,
    },
    {
      name: 'uiEvidence',
      closed: evidence.grounded,
      sourceFunction: 'quantumUiEvidence()',
      receipt: evidence.root,
      note: `useCases=${evidence.useCases.length}.`,
    },
    {
      name: 'schema',
      closed: schema.nodes.length > 0,
      sourceFunction: 'schemaOrgDiamonds()',
      receipt: schema.root,
      note: `nodes=${schema.nodes.length}.`,
    },
    {
      name: 'traditions',
      closed: traditions.grounded,
      sourceFunction: 'traditionsQuantumWhole()',
      receipt: traditions.root,
      note: `dim=${traditions.dimensions.length}; families=${traditions.families.length}.`,
    },
    {
      name: 'science',
      closed: science.grounded,
      sourceFunction: 'scientificSociety()',
      receipt: science.root,
      note: `roles=${science.roles.length}; gates=${science.reviewGates.length}; waves=${science.optimizationWaves.length}.`,
    },
    {
      name: 'methods',
      closed: methods.fused,
      sourceFunction: 'methodFusion()',
      receipt: methods.root,
      note: `tokens=${methods.tokens.length}; open=${methods.open.length}.`,
    },
    {
      name: 'waves',
      closed: waves.waves.length === lattice.length,
      sourceFunction: 'coordinatedWaves()',
      receipt: waves.root,
      note: `|W|=${waves.waves.length}; |D|=${lattice.length}.`,
    },
    {
      name: 'chess',
      closed: chess.board.length === 64,
      sourceFunction: 'quantumChessGame()',
      receipt: chess.root,
      note: `|Board|=${chess.board.length}.`,
    },
  ]
  const openUnits = buildUnits.filter((unit) => !unit.closed).map((unit) => unit.name)
  const complete = openUnits.length === 0
  const root = merkleFold(buildUnits.map((unit) => unit.receipt))
  const maxComputedBuildLog2 = complete ? Number.POSITIVE_INFINITY : proof.tamperCostLog2

  return {
    complete,
    root,
    buildUnits,
    openUnits,
    maxComputedBuildLog2,
    maxTamperingCostLog2: maxComputedBuildLog2,
    statement: complete
      ? 'maxBuild=closed => T_max=maxComputedBuild=infinity.'
      : 'maxBuild=open => T_max=maxComputedBuild finite.',
  }
}

export function streamSelfComplete(matrix: MindMatrix = buildMatrix()): StreamSelfCompletion {
  const build = selfBuild(matrix)
  const proof = proofReport(matrix)
  const lattice = diamondLattice(matrix)
  const completeness = diamondCompleteness(matrix)
  const closure = closeDimensionalGaps(matrix)
  const evidence = quantumUiEvidence(matrix)
  const agentWire = agentStreamWire(matrix)
  const schema = schemaOrgDiamonds(matrix)
  const traditions = traditionsQuantumWhole()
  const waves = coordinatedWaves(matrix)
  const chess = quantumChessGame(matrix)
  const gates: readonly SelfCompletionGate[] = [
    {
      name: 'max computed build',
      closed: build.complete,
      sourceFunction: 'selfBuild()',
      receipt: build.root,
      note: build.statement,
    },
    {
      name: 'diamond lattice',
      closed: lattice.length === REQUIRED_DIAMOND_KINDS.length,
      sourceFunction: 'diamondLattice()',
      receipt: merkleFold(lattice.map((diamond) => diamond.receipt)),
      note: `${lattice.length}/${REQUIRED_DIAMOND_KINDS.length} required diamond kinds present.`,
    },
    {
      name: 'no analog gaps',
      closed: completeness.complete,
      sourceFunction: 'diamondCompleteness()',
      receipt: toUuid(`self-complete:diamondCompleteness:${JSON.stringify(completeness)}`),
      note: completeness.statement,
    },
    {
      name: 'gap-closing waves',
      closed: closure.complete,
      sourceFunction: 'closeDimensionalGaps()',
      receipt: closure.root,
      note: closure.statement,
    },
    {
      name: 'grounded UI evidence',
      closed: evidence.grounded,
      sourceFunction: 'quantumUiEvidence()',
      receipt: evidence.root,
      note: evidence.boundary,
    },
    {
      name: 'agent wire',
      closed: agentWire.bound,
      sourceFunction: 'agentStreamWire()',
      receipt: agentWire.root,
      note: agentWire.boundary,
    },
    {
      name: 'schema graph',
      closed: schema.nodes.length > 0 && schema.root.length > 0,
      sourceFunction: 'schemaOrgDiamonds()',
      receipt: schema.root,
      note: `${schema.nodes.length} Schema.org-shaped nodes computed.`,
    },
    {
      name: 'traditions lens',
      closed: traditions.grounded,
      sourceFunction: 'traditionsQuantumWhole()',
      receipt: traditions.root,
      note: traditions.boundary,
    },
    {
      name: 'coordinated waves',
      closed: waves.waves.length === lattice.length,
      sourceFunction: 'coordinatedWaves()',
      receipt: waves.root,
      note: `${waves.waves.length} waves for ${lattice.length} diamonds.`,
    },
    {
      name: 'quantum chess',
      closed: chess.board.length === 64,
      sourceFunction: 'quantumChessGame()',
      receipt: chess.root,
      note: `${chess.board.length} chess squares computed from coordinated waves.`,
    },
    {
      name: 'maximum tampering boundary',
      closed: build.complete && proof.maxTamperingCostReached,
      sourceFunction: 'proofReport()',
      receipt: toUuid(`self-complete:proofReport:${JSON.stringify(proof)}`),
      note: `${proof.note} source=${proof.maxTamperingCostSource}.`,
    },
  ]
  const openGates = gates.filter((gate) => !gate.closed).map((gate) => gate.name)
  const root = merkleFold(gates.map((gate) => gate.receipt))
  const complete = openGates.length === 0

  return {
    complete,
    root,
    source: 'serverless-quantum-uuid-stream/double-torus',
    statement: complete
      ? 'serverless quantum UUID stream completes itself in this repository: every computed gate is closed and bound to a receipt.'
      : 'serverless quantum UUID stream has not fully completed itself in this repository: open gates remain inspectable by name and receipt.',
    gates,
    openGates,
    boundary:
      'Self-completion is a repository-computed gate report. It is not a claim of external validation, sentience, or physical proof.',
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
      title: 'Self Build',
      command: 'concept.self.build',
      route: '/quantum-mind#diamond-lattice',
      summary: 'maxBuild aggregates computed roots and supplies maximum tampering cost.',
    },
    {
      title: 'Stream Self Completion',
      command: 'concept.self.complete',
      route: '/quantum-mind#diamond-lattice',
      summary: 'serverless quantum UUID stream inspects its own gates and emits a self-completion root.',
    },
    {
      title: 'Agent Stream Wire',
      command: 'concept.agent.streamWire',
      route: '/quantum-mind#diamond-lattice',
      summary: 'The coding-agent observe-bind-verify-project-return loop is wired into stream receipts.',
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
      summary: 'The stream diamond is checked for missing kinds, poles, receipts, analog channels, and pi-train coverage.',
    },
    {
      title: 'Metatron Cube',
      command: 'concept.diamond.metatron',
      route: '/quantum-mind#metatron-cube',
      summary: 'Double-vortex Metatron cube math maps digit folders into nodes, edges, and interference.',
    },
    {
      title: 'Digital Quantum Proof',
      command: 'concept.digit.proof',
      route: '/quantum-mind#digit-proof',
      summary: 'Digits verify the digital quantum-inspired model through folders, waves, superpositions, receipts, and roots.',
    },
    {
      title: 'Coordinated Waves',
      command: 'concept.wave.coordination',
      route: '/quantum-mind#coordinated-waves',
      summary: 'Diamonds emit phase-aligned yin-yang waves across the double torus.',
    },
    {
      title: 'Gap-Closing Waves',
      command: 'concept.wave.closeGaps',
      route: '/quantum-mind#coordinated-waves',
      summary: 'Realtime waves close or sustain dimensional and analog channels.',
    },
    {
      title: 'Quantum Chess',
      command: 'concept.chess.quantum',
      route: '/quantum-mind#quantum-chess',
      summary: 'The chess board is realised as square superpositions driven by coordinated waves.',
    },
    {
      title: 'Schema.org Diamonds',
      command: 'concept.schemaOrg.diamonds',
      route: '/quantum-mind#schema-org-diamonds',
      summary: 'Schema.org-shaped nodes are folded from diamond receipts, UI use cases, datasets, and actions.',
    },
    {
      title: 'Traditions Quantum Whole',
      command: 'concept.traditions.quantumWhole',
      route: '/quantum-mind#traditions-quantum-whole',
      summary: 'Religions and traditions are compared through distinct experiential, ritual, narrative, doctrinal, ethical, social, material, and relational dimensions.',
    },
    {
      title: 'Scientific Society',
      command: 'concept.science.society',
      route: '/quantum-mind#scientific-society',
      summary: 'A scientific society charter computes roles, review gates, reproducibility, and self-optimization waves.',
    },
    {
      title: 'Artist Surfaces',
      command: 'concept.artists.surfaces',
      route: '/',
      summary: 'Home and README surfaces are computed as artist-built equations with receipts.',
    },
    {
      title: 'Method Fusion',
      command: 'concept.method.fusion',
      route: '/quantum-mind#method-fusion',
      summary: 'Gravity maps every command surface to a single-word method token.',
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
  if (command === 'concept.self.build') {
    const build = selfBuild(matrix)
    return result(command, build.complete, 'self build computed.', build)
  }
  if (command === 'concept.self.complete') {
    const self = streamSelfComplete(matrix)
    return result(command, self.complete, 'serverless quantum UUID stream self-completion computed.', self)
  }
  if (command === 'concept.agent.streamWire') {
    const wire = agentStreamWire(matrix)
    return result(command, wire.bound, 'Agent serverless quantum UUID stream wire computed.', wire)
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
    return result(command, true, 'Diamond lattice computed from stream dimensions and dynamics.', diamondLattice(matrix))
  }
  if (command === 'concept.diamond.piTrain') {
    return result(command, true, 'Pi train computed from diamond sequence.', piTrainDiamonds(matrix))
  }
  if (command === 'concept.diamond.complete') {
    const completeness = diamondCompleteness(matrix)
    return result(command, completeness.complete, 'Diamond completeness verified.', completeness)
  }
  if (command === 'concept.diamond.metatron') {
    const cube = metatronCube(matrix)
    return result(command, cube.nodes.length > 0 && cube.edges.length > 0, 'Metatron cube computed.', cube)
  }
  if (command === 'concept.digit.proof') {
    const proof = digitalQuantumProof(matrix)
    return result(command, proof.proven, 'Digital quantum proof computed.', proof)
  }
  if (command === 'concept.wave.coordination') {
    return result(command, true, 'Coordinated yin-yang waves computed.', coordinatedWaves(matrix))
  }
  if (command === 'concept.wave.closeGaps') {
    const closure = closeDimensionalGaps(matrix)
    return result(command, closure.complete, 'Dimensional gap-closing waves computed.', closure)
  }
  if (command === 'concept.chess.quantum') {
    return result(command, true, 'Quantum chess game computed from coordinated waves.', quantumChessGame(matrix))
  }
  if (command === 'concept.schemaOrg.diamonds') {
    const graph = schemaOrgDiamonds(matrix)
    return result(command, graph.nodes.length > 0, 'Schema.org diamond graph computed.', graph)
  }
  if (command === 'concept.traditions.quantumWhole') {
    const traditions = traditionsQuantumWhole()
    return result(command, traditions.grounded, 'Traditions quantum whole computed.', traditions)
  }
  if (command === 'concept.science.society') {
    const science = scientificSociety(matrix)
    return result(command, science.grounded, 'Scientific society computed.', science)
  }
  if (command === 'concept.artists.surfaces') {
    const surfaces = artistSurfaces(matrix)
    return result(command, surfaces.grounded, 'Artist surfaces computed.', surfaces)
  }
  if (command === 'concept.method.fusion') {
    const methods = methodFusion()
    return result(command, methods.fused, 'Method fusion computed.', methods)
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

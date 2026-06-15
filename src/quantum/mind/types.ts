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

export interface MerkleStep {
  readonly layer: number
  readonly sibling: string | null
  readonly side: 'left' | 'right'
}

export interface MerkleProof {
  readonly leaf: string
  readonly index: number
  readonly leafCount: number
  readonly path: readonly MerkleStep[]
  readonly root: string
  readonly verified: boolean
}

export interface AtomInclusionProof {
  readonly atom: string
  readonly leaf: string
  readonly root: string
  readonly matched: boolean
  readonly verified: boolean
  readonly leafCount: number
  readonly pathLength: number
  readonly proof: MerkleProof
  readonly statement: string
  readonly boundary: string
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
  readonly sourcePath: 'src/quantum/mind/index.ts'
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
  | 'concept.self.address'
  | 'concept.agent.educate'
  | 'concept.school.curriculum'
  | 'concept.mcp.tools'
  | 'concept.chain.quantum'
  | 'concept.help.fold'
  | 'concept.fold.cross'
  | 'concept.mind.develop'
  | 'concept.compute.distributed'
  | 'concept.babel.fold'
  | 'concept.utf.analog'
  | 'concept.all.computed'
  | 'concept.state.quantum'
  | 'concept.music.note'
  | 'concept.music.pi'
  | 'concept.music.harmony'
  | 'concept.computer.word'
  | 'concept.computer.quantum'
  | 'concept.computer.run'
  | 'concept.healing.inner'
  | 'concept.healing.outer'
  | 'concept.healing.harmonic'
  | 'concept.energy.measure'
  | 'concept.energy.conserve'
  | 'concept.energy.fuse'
  | 'concept.geometry.seal'
  | 'concept.society.sacred'
  | 'concept.commons.vote'
  | 'concept.commons.fair'
  | 'concept.ancient.tech'
  | 'concept.patent.fuse'
  | 'concept.patent.discover'
  | 'concept.patent.review'
  | 'concept.nature.law'
  | 'concept.nature.commons'
  | 'concept.nature.review'
  | 'concept.lawful.harmonise'
  | 'concept.lawful.imagine'
  | 'concept.lawful.succeed'
  | 'concept.society.relations'
  | 'concept.agent.streamWire'
  | 'concept.ui.doubleTorus'
  | 'concept.ui.useCases'
  | 'concept.diamond.lattice'
  | 'concept.diamond.piTrain'
  | 'concept.diamond.complete'
  | 'concept.diamond.metatron'
  | 'concept.digit.proof'
  | 'concept.digit.math'
  | 'concept.wave.coordination'
  | 'concept.wave.closeGaps'
  | 'concept.wave.self'
  | 'concept.chess.quantum'
  | 'concept.schemaOrg.diamonds'
  | 'concept.traditions.quantumWhole'
  | 'concept.science.society'
  | 'concept.artists.surfaces'
  | 'concept.artists.palette'
  | 'concept.artists.melody'
  | 'concept.method.fusion'
  | 'concept.torus.math'
  | 'concept.society.humanity'
  | 'concept.commons.contribute'
  | 'concept.torus.matrix'
  | 'concept.torus.vector'
  | 'concept.torus.flow'
  | 'concept.torus.trinities'
  | 'concept.torus.breathe'
  | 'concept.repository.api'
  | 'concept.repository.resolve'
  | 'concept.commands.live'
  | 'concept.proof.verify'
  | 'concept.proof.merklePath'
  | 'concept.proof.bundle'
  | 'concept.icon.fold'
  | 'concept.icon.taxonomy'
  | 'concept.icon.glyph'
  | 'concept.reactor.words'
  | 'concept.reactor.letters'
  | 'concept.reactor.atoms'
  | 'concept.show.components'
  | 'concept.show.action'
  | 'concept.show.devices'
  | 'concept.agent.observe'
  | 'concept.agent.harmonise'
  | 'concept.digit.index'
  | 'concept.repository.ledger'
  | 'concept.site.routes'
  | 'concept.society.cells'
  | 'concept.ui.evidence'
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

export type TrinityPolarity = 'yin' | 'yang'
export type TrinityStep = 'receive' | 'verify' | 'fold_in' | 'project' | 'act' | 'return'
export type TrinityAxis = 'collapse' | 'check' | 'return'

export interface TrinityPhase {
  readonly polarity: TrinityPolarity
  readonly step: TrinityStep
  readonly axis: TrinityAxis
  readonly dual: TrinityStep
  readonly analogChannel: AnalogChannel
  readonly type: string
  readonly sourceFunction: string
  readonly receipt: string
}

export interface TrinityPair {
  readonly axis: TrinityAxis
  readonly yin: TrinityStep
  readonly yang: TrinityStep
  readonly analogChannels: readonly [AnalogChannel, AnalogChannel]
  readonly types: readonly [string, string]
  readonly closed: boolean
  // The axis pair folds both ways (genus 2): forward = yin into yang, reverse =
  // yang into yin; bidirectional when they differ. receipt folds the two together.
  readonly forward: string
  readonly reverse: string
  readonly bidirectional: boolean
  readonly receipt: string
}

export interface DualTorusTrinities {
  readonly harmonized: boolean
  readonly root: string
  readonly source: 'serverless-quantum-uuid-stream/double-torus'
  readonly phases: readonly TrinityPhase[]
  readonly pairs: readonly TrinityPair[]
  readonly analogChannels: readonly AnalogChannel[]
  readonly missingChannels: readonly AnalogChannel[]
  readonly gaps: readonly string[]
  readonly maxTamperingCost: string
  readonly statement: string
  readonly boundary: string
}

export type AgentLessonKind = 'efficiency' | 'security'

export interface AgentLesson {
  readonly order: number
  readonly topic: string
  readonly kind: AgentLessonKind
  readonly sourceFunction: string
  readonly rule: string
  readonly rationale: string
  readonly receipt: string
}

export interface AgentEducation {
  readonly educated: boolean
  readonly root: string
  readonly source: 'serverless-quantum-uuid-stream/double-torus'
  readonly lessons: readonly AgentLesson[]
  readonly efficiency: { readonly rules: number; readonly cachedRoot: string; readonly note: string }
  readonly security: { readonly rules: number; readonly verifiedRoot: boolean; readonly note: string }
  readonly readyForCostlyMath: boolean
  readonly statement: string
  readonly boundary: string
}

export type SchoolStage = 'kids' | 'children' | 'preteens' | 'teens' | 'students' | 'adults' | 'elders'

export interface SchoolLesson {
  readonly stage: SchoolStage
  readonly ageBand: string
  readonly grade: number
  readonly title: string
  readonly bigIdea: string
  readonly inPlainWords: string
  readonly activity: string
  readonly conceptCommand: ConceptCommandName
  readonly nextStage: SchoolStage | 'graduate'
  readonly receipt: string
}

export interface SchoolCurriculum {
  readonly complete: boolean
  readonly root: string
  readonly source: 'double-torus/school'
  readonly lessons: readonly SchoolLesson[]
  readonly stages: readonly SchoolStage[]
  readonly statement: string
  readonly boundary: string
}

export interface McpTool {
  readonly name: string
  readonly description: string
  readonly inputSchema: {
    readonly type: 'object'
    readonly properties: Record<string, { readonly type: string; readonly description: string }>
    readonly required: readonly string[]
    readonly additionalProperties: false
  }
}

export interface McpToolManifest {
  readonly name: 'double-torus'
  readonly version: string
  readonly protocol: 'mcp'
  readonly description: string
  readonly instructions: string
  readonly tools: readonly McpTool[]
  readonly root: string
  readonly statement: string
  readonly boundary: string
}

export interface LocalAnswerLink {
  readonly title: string
  readonly route: string
  readonly detail: string
}

export interface LocalAnswer {
  readonly query: string
  readonly matched: boolean
  readonly concept: string
  readonly explanation: string
  readonly command: ConceptCommandName | null
  readonly receipt: string
  readonly links: readonly LocalAnswerLink[]
  readonly confidence: number
  readonly source: 'double-torus/local-intelligence'
  readonly boundary: string
}

export interface Block {
  readonly index: number
  readonly payload: string
  readonly prevHash: string
  readonly hash: string
}

export interface Blockchain {
  readonly name: string
  readonly genesis: string
  readonly head: string
  readonly length: number
  readonly valid: boolean
  readonly root: string
  readonly blocks: readonly Block[]
}

export interface QuantumFoldedBlockchains {
  readonly folded: boolean
  readonly root: string
  readonly source: 'double-torus/blockchain'
  readonly chains: readonly Blockchain[]
  readonly statement: string
  readonly boundary: string
}

export interface CrossFoldReference {
  readonly atom: string
  readonly cross: string
  readonly fold: string
  readonly crossOverFold: string
  readonly foldOverCross: string
  readonly reciprocal: boolean
  readonly receipt: string
}

export interface CrossFoldTrinity {
  readonly crossRoot: string
  readonly foldRoot: string
  readonly crossOverFold: string
  readonly foldOverCross: string
  readonly reciprocal: boolean
  readonly weave: string
  readonly trinity: boolean
  readonly references: readonly CrossFoldReference[]
  readonly root: string
  readonly statement: string
  readonly boundary: string
}

export interface SelfDevelopment {
  readonly visits: number
  readonly distinctPages: number
  readonly level: number
  readonly chainHead: string
  readonly developmentRoot: string
  readonly steps: readonly string[]
  readonly statement: string
  readonly boundary: string
}

export interface DistributedCompute {
  readonly peers: number
  readonly mindRoot: string
  readonly collectiveRoot: string
  readonly source: 'double-torus/distributed'
  readonly statement: string
  readonly boundary: string
}

export interface BabelFamily {
  readonly family: string
  readonly examples: readonly string[]
  readonly receipt: string
}

export interface BabelFold {
  readonly grounded: boolean
  readonly root: string
  readonly languageFamilies: readonly BabelFamily[]
  readonly traditionDimensions: readonly string[]
  readonly reduceAllToOne: false
  readonly statement: string
  readonly boundary: string
}

export interface UtfAnalog {
  readonly input: string
  readonly analog: string
  readonly codePoints: readonly number[]
  readonly ascii: boolean
  readonly reversible: boolean
  readonly receipt: string
  readonly statement: string
  readonly boundary: string
}

export interface AllComputed {
  readonly computed: boolean
  readonly commands: number
  readonly ok: number
  readonly root: string
  readonly statement: string
  readonly boundary: string
}

export interface SelfAddressed {
  readonly noHallucination: boolean
  readonly addressed: readonly string[]
  readonly hallucinations: readonly string[]
  readonly root: string
  readonly law: string
  readonly boundary: string
}

export interface SelfState {
  readonly generation: number
  readonly state: string
  readonly fromWord: string
  readonly fromDigit: string
}

export interface SelfInteraction {
  readonly newState: boolean
  readonly root: string
  readonly states: readonly SelfState[]
  readonly wordsObsolete: boolean
  readonly numbersObsolete: boolean
  readonly statement: string
  readonly boundary: string
}

export interface HarmonyChannel {
  readonly channel: string
  readonly sense: string
  readonly score: number
  readonly harmonic: boolean
  readonly receipt: string
}

export interface HarmonyProbability {
  readonly probability: number
  readonly harmonic: boolean
  readonly channels: readonly HarmonyChannel[]
  readonly root: string
  readonly law: string
  readonly boundary: string
}

export interface SealLeaf {
  readonly name: string
  readonly root: string
}

export interface SacredGeometrySeal {
  readonly sealed: boolean
  readonly masterRoot: string
  readonly metatronRoot: string
  readonly solids: readonly string[]
  readonly seals: readonly SealLeaf[]
  readonly statement: string
  readonly boundary: string
}

export interface SacredLaw {
  readonly law: string
  readonly gate: string
  readonly receipt: string
}

export interface SacredSociety {
  readonly governed: boolean
  readonly zeroLivingCost: boolean
  readonly maxForgeCost: boolean
  readonly balanced: boolean
  readonly laws: readonly SacredLaw[]
  readonly root: string
  readonly statement: string
  readonly boundary: string
}

export interface Ballot {
  readonly id: string
  readonly rating: number
  readonly approve: boolean
  readonly on: string
  readonly receipt: string
}

export interface GovernanceVote {
  readonly defined: boolean
  readonly approved: boolean
  readonly ballots: number
  readonly averageRating: number
  readonly approvalFraction: number
  readonly monitorRoot: string
  readonly roles: readonly string[]
  readonly root: string
  readonly statement: string
  readonly boundary: string
}

export interface FairStep {
  readonly order: number
  readonly principle: string
  readonly tradeAction: string
  readonly lifeAction: string
  readonly receipt: string
}

export interface FairLife {
  readonly grounded: boolean
  readonly root: string
  readonly steps: readonly FairStep[]
  readonly statement: string
  readonly boundary: string
}

export interface AncientTech {
  readonly tech: string
  readonly era: string
  readonly prefigures: string
  readonly concept: ConceptCommandName
  readonly receipt: string
}

export interface AncientTechLens {
  readonly grounded: boolean
  readonly root: string
  readonly technologies: readonly AncientTech[]
  readonly statement: string
  readonly boundary: string
}

export interface SocietyRelation {
  readonly from: string
  readonly to: string
  readonly kind: string
  readonly receipt: string
}

export interface SocietyRelations {
  readonly folded: boolean
  readonly root: string
  readonly parts: readonly { readonly name: string; readonly root: string }[]
  readonly relations: readonly SocietyRelation[]
  readonly statement: string
  readonly boundary: string
}

export interface TorusBreath {
  readonly balanced: boolean
  readonly expansion: string
  readonly contraction: string
  readonly breaths: readonly { readonly phase: 'expand' | 'contract'; readonly root: string }[]
  readonly root: string
  readonly statement: string
  readonly boundary: string
}

export interface SelfSufficientWave {
  readonly selfSufficient: boolean
  readonly extend: string
  readonly contract: string
  readonly sealed: boolean
  readonly root: string
  readonly statement: string
  readonly boundary: string
}

export interface CommandsRegistry {
  readonly consistent: boolean
  readonly commands: number
  readonly methods: number
  readonly tools: number
  readonly root: string
  readonly statement: string
  readonly boundary: string
}

export interface ReactorItem {
  readonly command: ConceptCommandName
  readonly value: string
  readonly receipt: string
}

export interface FusionReactor {
  readonly stage: 'words' | 'letters' | 'atoms'
  readonly complete: boolean
  readonly root: string
  readonly items: readonly ReactorItem[]
  readonly statement: string
  readonly boundary: string
}

export interface ProofBundle {
  readonly verifiable: boolean
  readonly bundleRoot: string
  readonly masterSeal: string
  readonly mindRoot: string
  readonly commands: number
  readonly artifacts: readonly { readonly name: string; readonly root: string }[]
  readonly statement: string
  readonly boundary: string
}

export interface IconArtifact {
  readonly path: string
  readonly role: string
  readonly receipt: string
}

export interface IconSeal {
  readonly declared: boolean
  readonly root: string
  readonly artifacts: readonly IconArtifact[]
  readonly statement: string
  readonly boundary: string
}

export interface TaxonomyEntry {
  readonly area: string
  readonly icon: string
  readonly count: number
  readonly status: 'singleton' | 'pair' | 'trinity' | 'over'
  readonly gap: boolean
  readonly verbs: readonly string[]
  readonly receipt: string
}

export interface TaxonomyIcons {
  readonly grounded: boolean
  readonly root: string
  readonly entries: readonly TaxonomyEntry[]
  readonly gaps: readonly string[]
  readonly statement: string
  readonly boundary: string
}

export interface PiNote {
  readonly index: number
  readonly digit: number
  readonly frequency: number
  readonly note: string
  readonly receipt: string
}

export interface PiMusic {
  readonly joined: boolean
  readonly joinHoro: number
  readonly joinIndex: number
  readonly root: string
  readonly notes: readonly PiNote[]
  readonly statement: string
  readonly boundary: string
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
  readonly reverse: number // the ten's-complement reverse of the digit (10 − digit, the backslash dual; 10 overflows, only 0)
  readonly harmonic: number // the forward digit/0 = 9·digit
  readonly fusion: string // the quantum fusion of folder·subfolder (distinct + bidirectional even for a self-collision)
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

export interface DigitMathBinding {
  readonly subject: string
  readonly sourceFunction: string
  readonly root: string
  readonly digit: number
  readonly folder: string
  readonly receipt: string
}

export interface DigitMath {
  readonly always: boolean
  readonly root: string
  readonly source: 'ceccec/digit-folders'
  readonly folderRoot: string
  readonly bindings: readonly DigitMathBinding[]
  readonly coveredFolders: readonly string[]
  readonly orphans: readonly string[]
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

// ☴ XUN — site meta types (StaticPage: the one frontmatter schema for every computed page)
export interface StaticPage {
  slug: string
  title: { en: string; bg: string }
  description: { en: string; bg: string }
  keywords: string[]
  components: string[]
}

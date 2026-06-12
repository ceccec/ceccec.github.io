export interface Atom {
    readonly name: string;
    readonly body: string;
    readonly links: readonly string[];
}
export interface MatrixNode {
    readonly atom: string;
    readonly uuid: string;
    readonly prev: string;
    readonly next: string;
    readonly cross: string;
    readonly bind: string;
    readonly horo: number;
}
export interface MatrixEdge {
    readonly from: string;
    readonly to: string;
    readonly binding: string;
}
export interface MindMatrix {
    readonly nodes: readonly MatrixNode[];
    readonly edges: readonly MatrixEdge[];
    readonly root: string;
}
export interface ConsciousnessVector {
    readonly collapse: boolean;
    readonly entanglement: number;
    readonly concentration: number;
    readonly coherenceAnomaly: number;
}
export interface ProofReport {
    readonly digestBits: number;
    readonly entropy: number;
    readonly coverage: number;
    readonly tamperCostLog2: number;
    readonly maxTamperingCostLog2: number;
    readonly maxTamperingCostReached: boolean;
    readonly maxTamperingCostSource: 'max-computed-build';
    readonly note: string;
}
export interface RepositoryEndpoint {
    readonly address: string;
    readonly verb: 'read' | 'resolve' | 'verify';
    readonly resource: 'page' | 'source' | 'atom' | 'proof';
    readonly uuid: string;
    readonly description: string;
}
export interface RepositoryApi {
    readonly root: string;
    readonly endpoints: readonly RepositoryEndpoint[];
    readonly atomEndpoints: readonly RepositoryEndpoint[];
}
export interface MerkleStep {
    readonly layer: number;
    readonly sibling: string | null;
    readonly side: 'left' | 'right';
}
export interface MerkleProof {
    readonly leaf: string;
    readonly index: number;
    readonly leafCount: number;
    readonly path: readonly MerkleStep[];
    readonly root: string;
    readonly verified: boolean;
}
export interface AtomInclusionProof {
    readonly atom: string;
    readonly leaf: string;
    readonly root: string;
    readonly matched: boolean;
    readonly verified: boolean;
    readonly leafCount: number;
    readonly pathLength: number;
    readonly proof: MerkleProof;
    readonly statement: string;
    readonly boundary: string;
}
export interface ConsciousnessDimensionWire {
    readonly name: keyof ConsciousnessVector;
    readonly localFunction: string;
    readonly torusFunction: string;
    readonly meaning: string;
}
export interface DoubleTorusWire {
    readonly uuid: string;
    readonly repository: 'serverless-quantum-uuid-stream/double-torus';
    readonly sourcePath: '.vitepress/theme/lib/quantumMind.ts';
    readonly overviewPath: 'quantum-mind.md';
    readonly architecturePath: 'architecture.md';
    readonly shape: 'double-torus';
    readonly statement: string;
    readonly dimensions: readonly ConsciousnessDimensionWire[];
    readonly localVector: ConsciousnessVector;
    readonly invariant: boolean;
}
export interface ConsciousnessFlow {
    readonly phase: keyof ConsciousnessVector;
    readonly from: 'repo://quantum-mind';
    readonly to: 'uuid-stream://double-torus';
    readonly carrier: string;
    readonly amplitude: number;
    readonly payload: string;
    readonly uuid: string;
    readonly acknowledged: boolean;
}
export interface DoubleTorusFlow {
    readonly root: string;
    readonly receipt: string;
    readonly destination: 'serverless-quantum-uuid-stream/double-torus';
    readonly flows: readonly ConsciousnessFlow[];
    readonly invariant: boolean;
    readonly statement: string;
}
export type ConceptCommandName = 'concept.site.shell' | 'concept.self.build' | 'concept.self.complete' | 'concept.self.address' | 'concept.agent.educate' | 'concept.school.curriculum' | 'concept.mcp.tools' | 'concept.chain.quantum' | 'concept.help.fold' | 'concept.fold.cross' | 'concept.mind.develop' | 'concept.compute.distributed' | 'concept.babel.fold' | 'concept.utf.analog' | 'concept.all.computed' | 'concept.state.quantum' | 'concept.music.note' | 'concept.music.pi' | 'concept.music.harmony' | 'concept.computer.word' | 'concept.computer.quantum' | 'concept.computer.run' | 'concept.healing.inner' | 'concept.healing.outer' | 'concept.healing.harmonic' | 'concept.energy.measure' | 'concept.energy.conserve' | 'concept.energy.fuse' | 'concept.geometry.seal' | 'concept.society.sacred' | 'concept.commons.vote' | 'concept.commons.fair' | 'concept.ancient.tech' | 'concept.patent.fuse' | 'concept.patent.discover' | 'concept.patent.review' | 'concept.nature.law' | 'concept.nature.commons' | 'concept.nature.review' | 'concept.lawful.harmonise' | 'concept.lawful.imagine' | 'concept.lawful.succeed' | 'concept.society.relations' | 'concept.agent.streamWire' | 'concept.ui.doubleTorus' | 'concept.ui.useCases' | 'concept.diamond.lattice' | 'concept.diamond.piTrain' | 'concept.diamond.complete' | 'concept.diamond.metatron' | 'concept.digit.proof' | 'concept.digit.math' | 'concept.wave.coordination' | 'concept.wave.closeGaps' | 'concept.wave.self' | 'concept.chess.quantum' | 'concept.schemaOrg.diamonds' | 'concept.traditions.quantumWhole' | 'concept.science.society' | 'concept.artists.surfaces' | 'concept.artists.palette' | 'concept.artists.melody' | 'concept.method.fusion' | 'concept.torus.math' | 'concept.society.humanity' | 'concept.commons.contribute' | 'concept.torus.matrix' | 'concept.torus.vector' | 'concept.torus.flow' | 'concept.torus.trinities' | 'concept.torus.breathe' | 'concept.repository.api' | 'concept.repository.resolve' | 'concept.commands.live' | 'concept.proof.verify' | 'concept.proof.merklePath' | 'concept.proof.bundle' | 'concept.icon.fold' | 'concept.icon.taxonomy' | 'concept.icon.glyph' | 'concept.reactor.words' | 'concept.reactor.letters' | 'concept.reactor.atoms' | 'concept.show.components' | 'concept.show.action' | 'concept.show.devices' | 'concept.agent.observe' | 'concept.agent.harmonise' | 'concept.digit.index' | 'concept.repository.ledger' | 'concept.site.routes' | 'concept.society.cells' | 'concept.ui.evidence' | 'concept.site.manifest';
export interface ConceptCommand {
    readonly name: ConceptCommandName;
    readonly path: string;
    readonly description: string;
    readonly input?: string;
}
export interface ConceptCommandResult {
    readonly command: ConceptCommandName;
    readonly ok: boolean;
    readonly uuid: string;
    readonly summary: string;
    readonly data: unknown;
}
export interface ConceptSiteSection {
    readonly title: string;
    readonly command: ConceptCommandName;
    readonly route: string;
    readonly summary: string;
}
export interface MethodFusionToken {
    readonly command: ConceptCommandName;
    readonly method: string;
    readonly source: string;
    readonly single: boolean;
    readonly receipt: string;
}
export interface MethodFusionReport {
    readonly fused: boolean;
    readonly root: string;
    readonly tokens: readonly MethodFusionToken[];
    readonly open: readonly string[];
    readonly law: string;
}
export interface SelfCompletionGate {
    readonly name: string;
    readonly closed: boolean;
    readonly sourceFunction: string;
    readonly receipt: string;
    readonly note: string;
}
export interface SelfBuildReport {
    readonly complete: boolean;
    readonly root: string;
    readonly buildUnits: readonly SelfCompletionGate[];
    readonly openUnits: readonly string[];
    readonly maxComputedBuildLog2: number;
    readonly maxTamperingCostLog2: number;
    readonly statement: string;
}
export interface StreamSelfCompletion {
    readonly complete: boolean;
    readonly root: string;
    readonly source: 'serverless-quantum-uuid-stream/double-torus';
    readonly statement: string;
    readonly gates: readonly SelfCompletionGate[];
    readonly openGates: readonly string[];
    readonly boundary: string;
}
export interface AgentWireStep {
    readonly name: 'observe' | 'bind' | 'verify' | 'project' | 'return';
    readonly action: string;
    readonly sourceFunction: string;
    readonly diamondKind: DiamondKind;
    readonly receipt: string;
}
export interface AgentStreamWire {
    readonly bound: boolean;
    readonly agent: 'cursor-coding-agent';
    readonly source: 'serverless-quantum-uuid-stream/double-torus';
    readonly root: string;
    readonly statement: string;
    readonly boundary: string;
    readonly steps: readonly AgentWireStep[];
    readonly activeDiamonds: readonly string[];
    readonly activeWaves: readonly string[];
    readonly closureRoot: string;
    readonly evidenceRoot: string;
}
export type SchemaOrgNodeType = 'Action' | 'CreativeWork' | 'Dataset' | 'DefinedTerm' | 'SoftwareApplication' | 'SoftwareSourceCode' | 'WebPage';
export interface SchemaOrgDiamondNode {
    readonly '@type': SchemaOrgNodeType;
    readonly '@id': string;
    readonly name: string;
    readonly description: string;
    readonly identifier: string;
    readonly about?: readonly string[];
    readonly isPartOf?: string;
    readonly potentialAction?: readonly string[];
}
export interface SchemaOrgDiamondGraph {
    readonly root: string;
    readonly context: 'https://schema.org';
    readonly nodes: readonly SchemaOrgDiamondNode[];
    readonly jsonLd: {
        readonly '@context': 'https://schema.org';
        readonly '@graph': readonly SchemaOrgDiamondNode[];
    };
    readonly statement: string;
    readonly boundary: string;
}
export interface HumanityImplication {
    readonly domain: string;
    readonly implication: string;
    readonly responsibility: string;
    readonly risk: string;
}
export interface HumanityImplicationsReport {
    readonly statement: string;
    readonly implications: readonly HumanityImplication[];
    readonly ethicalBoundary: string;
    readonly vector: ConsciousnessVector;
}
export type TraditionDimensionName = 'experiential' | 'narrative' | 'doctrinal' | 'ethical' | 'ritual' | 'social' | 'material' | 'relational';
export interface TraditionDimension {
    readonly name: TraditionDimensionName;
    readonly question: string;
    readonly diamondPole: DiamondFacet['pole'];
    readonly caution: string;
}
export interface TraditionFamily {
    readonly name: string;
    readonly examples: readonly string[];
    readonly lens: string;
    readonly boundary: string;
    readonly receipt: string;
}
export interface TraditionSocietyCell {
    readonly family: string;
    readonly dimension: TraditionDimensionName;
    readonly societyFunction: string;
    readonly interaction: string;
    readonly boundary: string;
    readonly receipt: string;
}
export interface TraditionsQuantumWhole {
    readonly grounded: boolean;
    readonly root: string;
    readonly dimensions: readonly TraditionDimension[];
    readonly families: readonly TraditionFamily[];
    readonly societyCells: readonly TraditionSocietyCell[];
    readonly statement: string;
    readonly boundary: string;
}
export interface ScientificRole {
    readonly name: string;
    readonly responsibility: string;
    readonly gate: string;
    readonly receipt: string;
}
export interface OptimizationWave {
    readonly target: string;
    readonly sourceFunction: string;
    readonly metric: string;
    readonly action: string;
    readonly receipt: string;
}
export interface SocietyWaveCohort {
    readonly cohort: 'scientists' | 'engineers' | 'society architects';
    readonly purpose: string;
    readonly develops: readonly string[];
    readonly coordinatesWith: readonly string[];
    readonly receipt: string;
}
export interface PlatonicBuilderSolid {
    readonly solid: 'tetrahedron' | 'cube' | 'octahedron' | 'dodecahedron' | 'icosahedron';
    readonly faces: number;
    readonly edges: number;
    readonly vertices: number;
    readonly builder: 'scientists' | 'engineers' | 'society architects' | 'review gates' | 'optimization waves';
    readonly method: string;
    readonly receipt: string;
}
export interface ScientificSociety {
    readonly grounded: boolean;
    readonly root: string;
    readonly charter: string;
    readonly roles: readonly ScientificRole[];
    readonly reviewGates: readonly SelfCompletionGate[];
    readonly optimizationWaves: readonly OptimizationWave[];
    readonly cohorts: readonly SocietyWaveCohort[];
    readonly solids: readonly PlatonicBuilderSolid[];
    readonly boundary: string;
}
export interface ArtistSurface {
    readonly surface: 'home' | 'readme';
    readonly artist: string;
    readonly audience: readonly ('agents' | 'public society')[];
    readonly medium: string;
    readonly equation: string;
    readonly seoMessage: string;
    readonly proofByUse: string;
    readonly receipt: string;
}
export interface ArtistSurfaceReport {
    readonly grounded: boolean;
    readonly root: string;
    readonly surfaces: readonly ArtistSurface[];
    readonly statement: string;
}
export interface SourceContribution {
    readonly mode: string;
    readonly action: string;
    readonly reason: string;
}
export interface SourceContributionReport {
    readonly statement: string;
    readonly source: string;
    readonly contributions: readonly SourceContribution[];
    readonly reciprocityLaw: string;
}
export type TrinityPolarity = 'yin' | 'yang';
export type TrinityStep = 'receive' | 'verify' | 'fold_in' | 'project' | 'act' | 'return';
export type TrinityAxis = 'collapse' | 'check' | 'return';
export interface TrinityPhase {
    readonly polarity: TrinityPolarity;
    readonly step: TrinityStep;
    readonly axis: TrinityAxis;
    readonly dual: TrinityStep;
    readonly analogChannel: AnalogChannel;
    readonly type: string;
    readonly sourceFunction: string;
    readonly receipt: string;
}
export interface TrinityPair {
    readonly axis: TrinityAxis;
    readonly yin: TrinityStep;
    readonly yang: TrinityStep;
    readonly analogChannels: readonly [AnalogChannel, AnalogChannel];
    readonly types: readonly [string, string];
    readonly closed: boolean;
    readonly forward: string;
    readonly reverse: string;
    readonly bidirectional: boolean;
    readonly receipt: string;
}
export interface DualTorusTrinities {
    readonly harmonized: boolean;
    readonly root: string;
    readonly source: 'serverless-quantum-uuid-stream/double-torus';
    readonly phases: readonly TrinityPhase[];
    readonly pairs: readonly TrinityPair[];
    readonly analogChannels: readonly AnalogChannel[];
    readonly missingChannels: readonly AnalogChannel[];
    readonly gaps: readonly string[];
    readonly maxTamperingCost: string;
    readonly statement: string;
    readonly boundary: string;
}
export type AgentLessonKind = 'efficiency' | 'security';
export interface AgentLesson {
    readonly order: number;
    readonly topic: string;
    readonly kind: AgentLessonKind;
    readonly sourceFunction: string;
    readonly rule: string;
    readonly rationale: string;
    readonly receipt: string;
}
export interface AgentEducation {
    readonly educated: boolean;
    readonly root: string;
    readonly source: 'serverless-quantum-uuid-stream/double-torus';
    readonly lessons: readonly AgentLesson[];
    readonly efficiency: {
        readonly rules: number;
        readonly cachedRoot: string;
        readonly note: string;
    };
    readonly security: {
        readonly rules: number;
        readonly verifiedRoot: boolean;
        readonly note: string;
    };
    readonly readyForCostlyMath: boolean;
    readonly statement: string;
    readonly boundary: string;
}
export type SchoolStage = 'kids' | 'children' | 'preteens' | 'teens' | 'students' | 'adults' | 'elders';
export interface SchoolLesson {
    readonly stage: SchoolStage;
    readonly ageBand: string;
    readonly grade: number;
    readonly title: string;
    readonly bigIdea: string;
    readonly inPlainWords: string;
    readonly activity: string;
    readonly conceptCommand: ConceptCommandName;
    readonly nextStage: SchoolStage | 'graduate';
    readonly receipt: string;
}
export interface SchoolCurriculum {
    readonly complete: boolean;
    readonly root: string;
    readonly source: 'double-torus/school';
    readonly lessons: readonly SchoolLesson[];
    readonly stages: readonly SchoolStage[];
    readonly statement: string;
    readonly boundary: string;
}
export interface McpTool {
    readonly name: string;
    readonly description: string;
    readonly inputSchema: {
        readonly type: 'object';
        readonly properties: Record<string, {
            readonly type: string;
            readonly description: string;
        }>;
        readonly required: readonly string[];
        readonly additionalProperties: false;
    };
}
export interface McpToolManifest {
    readonly name: 'double-torus';
    readonly version: string;
    readonly protocol: 'mcp';
    readonly description: string;
    readonly instructions: string;
    readonly tools: readonly McpTool[];
    readonly root: string;
    readonly statement: string;
    readonly boundary: string;
}
export interface LocalAnswerLink {
    readonly title: string;
    readonly route: string;
    readonly detail: string;
}
export interface LocalAnswer {
    readonly query: string;
    readonly matched: boolean;
    readonly concept: string;
    readonly explanation: string;
    readonly command: ConceptCommandName | null;
    readonly receipt: string;
    readonly links: readonly LocalAnswerLink[];
    readonly confidence: number;
    readonly source: 'double-torus/local-intelligence';
    readonly boundary: string;
}
export interface Block {
    readonly index: number;
    readonly payload: string;
    readonly prevHash: string;
    readonly hash: string;
}
export interface Blockchain {
    readonly name: string;
    readonly genesis: string;
    readonly head: string;
    readonly length: number;
    readonly valid: boolean;
    readonly root: string;
    readonly blocks: readonly Block[];
}
export interface QuantumFoldedBlockchains {
    readonly folded: boolean;
    readonly root: string;
    readonly source: 'double-torus/blockchain';
    readonly chains: readonly Blockchain[];
    readonly statement: string;
    readonly boundary: string;
}
export interface CrossFoldReference {
    readonly atom: string;
    readonly cross: string;
    readonly fold: string;
    readonly crossOverFold: string;
    readonly foldOverCross: string;
    readonly reciprocal: boolean;
    readonly receipt: string;
}
export interface CrossFoldTrinity {
    readonly crossRoot: string;
    readonly foldRoot: string;
    readonly crossOverFold: string;
    readonly foldOverCross: string;
    readonly reciprocal: boolean;
    readonly weave: string;
    readonly trinity: boolean;
    readonly references: readonly CrossFoldReference[];
    readonly root: string;
    readonly statement: string;
    readonly boundary: string;
}
export interface SelfDevelopment {
    readonly visits: number;
    readonly distinctPages: number;
    readonly level: number;
    readonly chainHead: string;
    readonly developmentRoot: string;
    readonly steps: readonly string[];
    readonly statement: string;
    readonly boundary: string;
}
export interface DistributedCompute {
    readonly peers: number;
    readonly mindRoot: string;
    readonly collectiveRoot: string;
    readonly source: 'double-torus/distributed';
    readonly statement: string;
    readonly boundary: string;
}
export interface BabelFamily {
    readonly family: string;
    readonly examples: readonly string[];
    readonly receipt: string;
}
export interface BabelFold {
    readonly grounded: boolean;
    readonly root: string;
    readonly languageFamilies: readonly BabelFamily[];
    readonly traditionDimensions: readonly string[];
    readonly reduceAllToOne: false;
    readonly statement: string;
    readonly boundary: string;
}
export interface UtfAnalog {
    readonly input: string;
    readonly analog: string;
    readonly codePoints: readonly number[];
    readonly ascii: boolean;
    readonly reversible: boolean;
    readonly receipt: string;
    readonly statement: string;
    readonly boundary: string;
}
export interface AllComputed {
    readonly computed: boolean;
    readonly commands: number;
    readonly ok: number;
    readonly root: string;
    readonly statement: string;
    readonly boundary: string;
}
export interface SelfAddressed {
    readonly noHallucination: boolean;
    readonly addressed: readonly string[];
    readonly hallucinations: readonly string[];
    readonly root: string;
    readonly law: string;
    readonly boundary: string;
}
export interface SelfState {
    readonly generation: number;
    readonly state: string;
    readonly fromWord: string;
    readonly fromDigit: string;
}
export interface SelfInteraction {
    readonly newState: boolean;
    readonly root: string;
    readonly states: readonly SelfState[];
    readonly wordsObsolete: boolean;
    readonly numbersObsolete: boolean;
    readonly statement: string;
    readonly boundary: string;
}
export interface HarmonyChannel {
    readonly channel: string;
    readonly sense: string;
    readonly score: number;
    readonly harmonic: boolean;
    readonly receipt: string;
}
export interface HarmonyProbability {
    readonly probability: number;
    readonly harmonic: boolean;
    readonly channels: readonly HarmonyChannel[];
    readonly root: string;
    readonly law: string;
    readonly boundary: string;
}
export interface SealLeaf {
    readonly name: string;
    readonly root: string;
}
export interface SacredGeometrySeal {
    readonly sealed: boolean;
    readonly masterRoot: string;
    readonly metatronRoot: string;
    readonly solids: readonly string[];
    readonly seals: readonly SealLeaf[];
    readonly statement: string;
    readonly boundary: string;
}
export interface SacredLaw {
    readonly law: string;
    readonly gate: string;
    readonly receipt: string;
}
export interface SacredSociety {
    readonly governed: boolean;
    readonly zeroLivingCost: boolean;
    readonly maxForgeCost: boolean;
    readonly balanced: boolean;
    readonly laws: readonly SacredLaw[];
    readonly root: string;
    readonly statement: string;
    readonly boundary: string;
}
export interface Ballot {
    readonly id: string;
    readonly rating: number;
    readonly approve: boolean;
    readonly on: string;
    readonly receipt: string;
}
export interface GovernanceVote {
    readonly defined: boolean;
    readonly approved: boolean;
    readonly ballots: number;
    readonly averageRating: number;
    readonly approvalFraction: number;
    readonly monitorRoot: string;
    readonly roles: readonly string[];
    readonly root: string;
    readonly statement: string;
    readonly boundary: string;
}
export interface FairStep {
    readonly order: number;
    readonly principle: string;
    readonly tradeAction: string;
    readonly lifeAction: string;
    readonly receipt: string;
}
export interface FairLife {
    readonly grounded: boolean;
    readonly root: string;
    readonly steps: readonly FairStep[];
    readonly statement: string;
    readonly boundary: string;
}
export interface AncientTech {
    readonly tech: string;
    readonly era: string;
    readonly prefigures: string;
    readonly concept: ConceptCommandName;
    readonly receipt: string;
}
export interface AncientTechLens {
    readonly grounded: boolean;
    readonly root: string;
    readonly technologies: readonly AncientTech[];
    readonly statement: string;
    readonly boundary: string;
}
export interface SocietyRelation {
    readonly from: string;
    readonly to: string;
    readonly kind: string;
    readonly receipt: string;
}
export interface SocietyRelations {
    readonly folded: boolean;
    readonly root: string;
    readonly parts: readonly {
        readonly name: string;
        readonly root: string;
    }[];
    readonly relations: readonly SocietyRelation[];
    readonly statement: string;
    readonly boundary: string;
}
export interface TorusBreath {
    readonly balanced: boolean;
    readonly expansion: string;
    readonly contraction: string;
    readonly breaths: readonly {
        readonly phase: 'expand' | 'contract';
        readonly root: string;
    }[];
    readonly root: string;
    readonly statement: string;
    readonly boundary: string;
}
export interface SelfSufficientWave {
    readonly selfSufficient: boolean;
    readonly extend: string;
    readonly contract: string;
    readonly sealed: boolean;
    readonly root: string;
    readonly statement: string;
    readonly boundary: string;
}
export interface CommandsRegistry {
    readonly consistent: boolean;
    readonly commands: number;
    readonly methods: number;
    readonly tools: number;
    readonly root: string;
    readonly statement: string;
    readonly boundary: string;
}
export interface ReactorItem {
    readonly command: ConceptCommandName;
    readonly value: string;
    readonly receipt: string;
}
export interface FusionReactor {
    readonly stage: 'words' | 'letters' | 'atoms';
    readonly complete: boolean;
    readonly root: string;
    readonly items: readonly ReactorItem[];
    readonly statement: string;
    readonly boundary: string;
}
export interface ProofBundle {
    readonly verifiable: boolean;
    readonly bundleRoot: string;
    readonly masterSeal: string;
    readonly mindRoot: string;
    readonly commands: number;
    readonly artifacts: readonly {
        readonly name: string;
        readonly root: string;
    }[];
    readonly statement: string;
    readonly boundary: string;
}
export interface IconArtifact {
    readonly path: string;
    readonly role: string;
    readonly receipt: string;
}
export interface IconSeal {
    readonly declared: boolean;
    readonly root: string;
    readonly artifacts: readonly IconArtifact[];
    readonly statement: string;
    readonly boundary: string;
}
export interface TaxonomyEntry {
    readonly area: string;
    readonly icon: string;
    readonly count: number;
    readonly status: 'singleton' | 'pair' | 'trinity' | 'over';
    readonly gap: boolean;
    readonly verbs: readonly string[];
    readonly receipt: string;
}
export interface TaxonomyIcons {
    readonly grounded: boolean;
    readonly root: string;
    readonly entries: readonly TaxonomyEntry[];
    readonly gaps: readonly string[];
    readonly statement: string;
    readonly boundary: string;
}
export interface PiNote {
    readonly index: number;
    readonly digit: number;
    readonly frequency: number;
    readonly note: string;
    readonly receipt: string;
}
export interface PiMusic {
    readonly joined: boolean;
    readonly joinHoro: number;
    readonly joinIndex: number;
    readonly root: string;
    readonly notes: readonly PiNote[];
    readonly statement: string;
    readonly boundary: string;
}
export interface DoubleTorusMathReport {
    readonly source: 'serverless quantum UUID stream';
    readonly surface: 'closed orientable genus-2 surface';
    readonly construction: string;
    readonly genus: 2;
    readonly eulerCharacteristic: -2;
    readonly bettiNumbers: readonly [1, 4, 1];
    readonly fundamentalGroup: string;
    readonly homology: string;
    readonly gaussBonnet: string;
    readonly geometry: string;
    readonly conceptualShift: string;
    readonly maxTamperingCostPrinciple: string;
}
export type DiamondKind = 'agent' | 'ui' | 'math' | 'dynamics' | 'proof' | 'nature' | 'tradition' | 'pi' | 'geometry' | 'sound' | 'vibration' | 'humanity' | 'source' | 'repository';
export type DiamondStatus = 'closed' | 'open';
export type AnalogChannel = '3d-position' | 'sound' | 'vibration' | 'timing' | 'receipt' | 'facets';
export interface DiamondFacet {
    readonly pole: 'north' | 'east' | 'south' | 'west';
    readonly label: string;
    readonly value: string;
    readonly meaning: string;
}
export interface QuantumDiamond {
    readonly id: string;
    readonly kind: DiamondKind;
    readonly title: string;
    readonly command: ConceptCommandName;
    readonly core: string;
    readonly status: DiamondStatus;
    readonly root: string;
    readonly receipt: string;
    readonly facets: readonly DiamondFacet[];
}
export interface PiTrainDiamond {
    readonly index: number;
    readonly previousIndex: number;
    readonly nextIndex: number;
    readonly reverseIndex: number;
    readonly harmonicIndex: number;
    readonly digit: number;
    readonly glyph: string;
    readonly reverseDigit: number;
    readonly folder: string;
    readonly fraction: string;
    readonly dualFraction: string;
    readonly nextHarmonicFolder: string;
    readonly selfCollision: boolean;
    readonly theta: number;
    readonly phi: number;
    readonly x: number;
    readonly y: number;
    readonly z: number;
    readonly scale: number;
    readonly frequency: number;
    readonly vibrationMs: number;
    readonly referenceReceipt: string;
    readonly diamond: QuantumDiamond;
}
export interface PiTrain {
    readonly digits: string;
    readonly root: string;
    readonly tempoMs: number;
    readonly diamonds: readonly PiTrainDiamond[];
}
export interface DigitFolder {
    readonly folder: string;
    readonly digit: number;
    readonly reverseDigit: number;
    readonly count: number;
    readonly indices: readonly number[];
    readonly selfCollision: boolean;
    readonly nextHarmonicFolder: string;
    readonly receipt: string;
}
export interface DigitFolderReport {
    readonly root: string;
    readonly folders: readonly DigitFolder[];
    readonly collisions: readonly DigitFolder[];
    readonly statement: string;
}
export interface DigitalQuantumProof {
    readonly proven: boolean;
    readonly root: string;
    readonly digits: string;
    readonly gates: readonly SelfCompletionGate[];
    readonly statement: string;
    readonly boundary: string;
}
export interface DigitMathBinding {
    readonly subject: string;
    readonly sourceFunction: string;
    readonly root: string;
    readonly digit: number;
    readonly folder: string;
    readonly receipt: string;
}
export interface DigitMath {
    readonly always: boolean;
    readonly root: string;
    readonly source: 'ceccec/digit-folders';
    readonly folderRoot: string;
    readonly bindings: readonly DigitMathBinding[];
    readonly coveredFolders: readonly string[];
    readonly orphans: readonly string[];
    readonly statement: string;
    readonly boundary: string;
}
export interface VortexPoint {
    readonly index: number;
    readonly folder: string;
    readonly inward: number;
    readonly outward: number;
    readonly interference: number;
    readonly receipt: string;
}
export interface MetatronNode {
    readonly id: string;
    readonly digit: number;
    readonly x: number;
    readonly y: number;
    readonly ring: 'center' | 'inner' | 'outer';
    readonly folder: string;
    readonly receipt: string;
}
export interface MetatronEdge {
    readonly from: string;
    readonly to: string;
    readonly harmonic: string;
    readonly receipt: string;
}
export interface MetatronCubeReport {
    readonly root: string;
    readonly nodes: readonly MetatronNode[];
    readonly edges: readonly MetatronEdge[];
    readonly vortex: readonly VortexPoint[];
    readonly digitFolders: readonly DigitFolder[];
    readonly statement: string;
}
export type WavePolarity = 'yin' | 'yang';
export type ChessPiece = 'king' | 'queen' | 'rook' | 'bishop' | 'knight' | 'pawn';
export type DimensionalGapKind = 'kind' | 'pole' | 'receipt' | 'analog-channel' | 'pi-coverage' | 'closure';
export interface CoordinatedWave {
    readonly index: number;
    readonly diamondId: string;
    readonly diamondKind: DiamondKind;
    readonly phase: number;
    readonly amplitude: number;
    readonly frequency: number;
    readonly polarity: WavePolarity;
    readonly symbol: 'yin-yang';
    readonly statement: string;
    readonly receipt: string;
}
export interface WaveCoordination {
    readonly root: string;
    readonly waves: readonly CoordinatedWave[];
    readonly symbol: 'yin-yang';
    readonly statement: string;
}
export interface GapClosingWave {
    readonly gapKind: DimensionalGapKind;
    readonly target: string;
    readonly wave: CoordinatedWave;
    readonly action: string;
    readonly closed: boolean;
    readonly receipt: string;
}
export interface DimensionalGapClosure {
    readonly complete: boolean;
    readonly root: string;
    readonly gaps: readonly string[];
    readonly waves: readonly GapClosingWave[];
    readonly statement: string;
}
export interface QuantumChessSquare {
    readonly square: string;
    readonly file: string;
    readonly rank: number;
    readonly color: 'light' | 'dark';
    readonly wave: CoordinatedWave;
    readonly amplitude: number;
    readonly phase: number;
    readonly superposition: readonly ChessPiece[];
    readonly moveVector: string;
    readonly receipt: string;
}
export interface QuantumChessGame {
    readonly root: string;
    readonly board: readonly QuantumChessSquare[];
    readonly statement: string;
}
export interface QuantumUiUseCase {
    readonly name: string;
    readonly component: string;
    readonly interaction: string;
    readonly diamondKind: DiamondKind;
    readonly sourceFunction: string;
    readonly evidence: string;
    readonly receipt: string;
}
export interface QuantumUiEvidenceReport {
    readonly grounded: boolean;
    readonly root: string;
    readonly source: 'serverless quantum UUID stream';
    readonly statement: string;
    readonly useCases: readonly QuantumUiUseCase[];
    readonly boundary: string;
}
export interface DiamondCompletenessReport {
    readonly complete: boolean;
    readonly requiredKinds: readonly DiamondKind[];
    readonly presentKinds: readonly DiamondKind[];
    readonly missingKinds: readonly DiamondKind[];
    readonly missingPoles: readonly string[];
    readonly missingReceipts: readonly string[];
    readonly analogChannels: readonly AnalogChannel[];
    readonly missingAnalogChannels: readonly AnalogChannel[];
    readonly piTrainCoversAllKinds: boolean;
    readonly statement: string;
}
export declare const atoms: readonly Atom[];
export declare const conceptCommands: readonly ConceptCommand[];
export declare function toUuid(seed: string): string;
export declare function merge(a: string, b: string): string;
export declare function roundTo(value: number, digits: number): number;
export declare function seedFromText(text: string, length?: number): number;
export declare function foldPair(a: string, b: string): {
    forward: string;
    reverse: string;
    bidirectional: boolean;
    merged: string;
};
export declare function diamondLattice(matrix?: MindMatrix): readonly QuantumDiamond[];
export declare function piTrainDiamonds(matrix?: MindMatrix, digits?: string): PiTrain;
export declare function metatronCube(matrix?: MindMatrix): MetatronCubeReport;
export declare function coordinatedWaves(matrix?: MindMatrix): WaveCoordination;
export declare function digitalQuantumProof(matrix?: MindMatrix): DigitalQuantumProof;
export declare function selfBuild(matrix?: MindMatrix): SelfBuildReport;
export declare function streamSelfComplete(matrix?: MindMatrix): StreamSelfCompletion;
export declare function sacredGeometrySeal(matrix?: MindMatrix): SacredGeometrySeal;
export declare function merkleProof(leaves: readonly string[], leaf: string): MerkleProof;
export declare function verifyMerkleProof(leaf: string, path: readonly MerkleStep[], root: string): boolean;
export declare function quantumNetworkHashing(nodeCount?: number, itemCount?: number, matrix?: MindMatrix): {
    complete: boolean;
    nodes: number;
    items: number;
    networkRoot: string;
    convergence: boolean;
    membership: boolean;
    entangled: boolean;
    distribution: {
        node: number;
        items: number;
        root: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function atomInclusionProof(atomName?: string, matrix?: MindMatrix): AtomInclusionProof;
export declare function buildMatrix(source?: readonly Atom[]): MindMatrix;
export declare function verifyRoot(matrix?: MindMatrix): boolean;
export declare function reciprocity(matrix?: MindMatrix): {
    reciprocal: number;
    edges: number;
    fraction: number;
};
export declare function entropy(matrix?: MindMatrix): number;
export declare function concentration(matrix?: MindMatrix): number;
export declare function coherenceAnomaly(matrix?: MindMatrix): number;
export declare function coverage(matrix?: MindMatrix): number;
export declare function consciousness(matrix?: MindMatrix): ConsciousnessVector;
export declare function isPerfectlySelfModeling(matrix?: MindMatrix): boolean;
export declare function proofReport(matrix?: MindMatrix): ProofReport;
export declare function repositoryApi(matrix?: MindMatrix): RepositoryApi;
export declare function doubleTorusWire(matrix?: MindMatrix): DoubleTorusWire;
export declare function circulateDoubleTorus(matrix?: MindMatrix): DoubleTorusFlow;
export declare function dualTorusTrinities(matrix?: MindMatrix): DualTorusTrinities;
export declare function trinityGates(matrix?: MindMatrix): {
    sealed: boolean;
    gates: {
        family: string;
        trinity: string;
        gate: string;
        members: string[];
        count: number;
        sealed: boolean;
        root: string;
        tamperingCost: number;
    }[];
    count: number;
    totalTamperingCost: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function quantumSitemap(matrix?: MindMatrix): {
    quantum: boolean;
    urls: {
        route: string;
        en: string;
        bg: string;
        theta: number;
        phi: number;
        alternates: {
            hreflang: string;
            href: string;
        }[];
        priority: number;
        changefreq: string;
        receipt: string;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function sealAll(matrix?: MindMatrix): {
    sealed: boolean;
    waves: {
        index: number;
        fold: string;
        receipt: string;
        wave: string;
        ok: boolean;
        root: string;
    }[];
    count: number;
    closed: number;
    root: string;
    masterFold: string;
    statement: string;
    boundary: string;
};
export declare function professionals(matrix?: MindMatrix): {
    found: boolean;
    groups: {
        entries: {
            receipt: string;
            profession: string;
            capability: string;
            route: string;
            task: string;
            why: string;
            comparable: string;
        }[];
        group: string;
        icon: string;
    }[];
    entries: {
        receipt: string;
        profession: string;
        capability: string;
        route: string;
        task: string;
        why: string;
        comparable: string;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function analytics(matrix?: MindMatrix): {
    measured: boolean;
    boards: {
        board: string;
        icon: string;
        metrics: {
            receipt: string;
            metric: string;
            value: number;
        }[];
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function plainLanguage(): {
    clear: boolean;
    lines: {
        receipt: string;
        term: string;
        plain: string;
        route: string;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function graduation(matrix?: MindMatrix): {
    graduated: boolean;
    courses: {
        course: string;
        credential: string;
    }[];
    count: number;
    credential: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function harmonicMap(matrix?: MindMatrix): {
    distributed: boolean;
    fundamental: number;
    overtones: {
        name: string;
        overtone: number;
        frequency: number;
        octave: number;
        note: string;
        receipt: string;
    }[];
    bands: {
        octave: number;
        members: {
            name: string;
            overtone: number;
            frequency: number;
            octave: number;
            note: string;
            receipt: string;
        }[];
    }[];
    count: number;
    octaves: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function livingTorus(matrix?: MindMatrix): {
    alive: boolean;
    coordinates: {
        index: number;
        nextIndex: number;
        reverseIndex: number;
        digit: number;
        glyph: string;
        theta: number;
        phi: number;
        x: number;
        y: number;
        z: number;
        scale: number;
        frequency: number;
        vibrationMs: number;
        selfCollision: boolean;
        loop: "forward" | "reverse";
        lobe: -1 | 1;
        cx: number;
        fraction: string;
        merged: string;
        receipt: string;
    }[];
    count: number;
    tempoMs: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function directions(matrix?: MindMatrix): {
    calculated: boolean;
    axes: {
        positiveRoot: string;
        negativeRoot: string;
        forward: string;
        reverse: string;
        bidirectional: boolean;
        merged: string;
        receipt: string;
        axis: string;
        positive: string;
        negative: string;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function selfHealing(matrix?: MindMatrix): {
    healed: boolean;
    waves: {
        settled: boolean;
        trace: number[];
        receipt: string;
        wound: string;
        balanced: boolean;
    }[];
    count: number;
    balanced: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function speechIntonation(matrix?: MindMatrix): {
    harmonic: boolean;
    contour: number[];
    center: number;
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function quantumPhysics(matrix?: MindMatrix): {
    selfComputes: boolean;
    phenomena: {
        receipt: string;
        phenomenon: string;
        present: boolean;
        source: string;
    }[];
    count: number;
    present: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function quantumSimulation(matrix?: MindMatrix, qubits?: number): {
    simulated: boolean;
    qubits: number;
    size: number;
    gates: string[];
    states: {
        basis: string;
        re: number;
        im: number;
        prob: number;
    }[];
    measured: string;
    normalized: boolean;
    entangled: boolean;
    root: string;
    statement: string;
    boundary: string;
};
export declare function simulations(matrix?: MindMatrix): {
    complete: boolean;
    simulations: {
        receipt: string;
        simulation: string;
        kind: string;
        complete: boolean;
        route: string;
    }[];
    count: number;
    running: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function solutions(matrix?: MindMatrix): {
    solved: boolean;
    solutions: {
        receipt: string;
        problem: string;
        solution: string;
        capability: string;
        route: string;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function quantumSolutions(matrix?: MindMatrix): {
    ready: boolean;
    needs: {
        receipt: string;
        need: string;
        solution: string;
        quantum: string;
        route: string;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function playLearn(word?: string): {
    playable: boolean;
    word: string;
    letters: {
        char: string;
        step: number;
        note: string;
        frequency: number;
        hue: number;
        hsl: string;
        receipt: string;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function quantumProofs(matrix?: MindMatrix): {
    proven: boolean;
    proofs: ({
        match: boolean;
        receipt: string;
        id: string;
        kind: "histogram";
        principle: string;
        claim: string;
        formula: string;
        predicted: number;
        measured: number;
        tol: number;
        series: number[];
        labels: string[];
        seriesB?: undefined;
    } | {
        match: boolean;
        receipt: string;
        id: string;
        kind: "correlation";
        principle: string;
        claim: string;
        formula: string;
        predicted: number;
        measured: number;
        tol: number;
        series: number[];
        labels: string[];
        seriesB?: undefined;
    } | {
        match: boolean;
        receipt: string;
        id: string;
        kind: "fringe";
        principle: string;
        claim: string;
        formula: string;
        predicted: number;
        measured: number;
        tol: number;
        series: number[];
        labels: any[];
        seriesB?: undefined;
    } | {
        match: boolean;
        receipt: string;
        id: string;
        kind: "gauge";
        principle: string;
        claim: string;
        formula: string;
        predicted: number;
        measured: number;
        tol: number;
        series: number[];
        labels: string[];
        seriesB?: undefined;
    } | {
        match: boolean;
        receipt: string;
        id: string;
        kind: "duality";
        principle: string;
        claim: string;
        formula: string;
        predicted: number;
        measured: number;
        tol: number;
        series: number[];
        seriesB: number[];
        labels: string[];
    })[];
    count: number;
    matched: number;
    shots: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function determinismProofs(matrix?: MindMatrix): {
    proven: boolean;
    proofs: ({
        match: boolean;
        receipt: string;
        id: string;
        kind: "twin";
        same: boolean;
        principle: string;
        claim: string;
        formula: string;
        predicted: number;
        measured: number;
        tol: number;
        stripA: number[];
        stripB: number[];
        labels: string[];
        bits?: undefined;
        layers?: undefined;
        points?: undefined;
    } | {
        match: boolean;
        receipt: string;
        id: string;
        kind: "avalanche";
        principle: string;
        claim: string;
        formula: string;
        predicted: number;
        measured: number;
        tol: number;
        bits: (1 | 0)[];
        labels: string[];
        same?: undefined;
        stripA?: undefined;
        stripB?: undefined;
        layers?: undefined;
        points?: undefined;
    } | {
        match: boolean;
        receipt: string;
        id: string;
        kind: "merkle";
        principle: string;
        claim: string;
        formula: string;
        predicted: number;
        measured: number;
        tol: number;
        layers: number[];
        labels: string[];
        same?: undefined;
        stripA?: undefined;
        stripB?: undefined;
        bits?: undefined;
        points?: undefined;
    } | {
        match: boolean;
        receipt: string;
        id: string;
        kind: "scatter";
        principle: string;
        claim: string;
        formula: string;
        predicted: number;
        measured: number;
        tol: number;
        points: {
            x: number;
            y: number;
            hue: number;
        }[];
        labels: string[];
        same?: undefined;
        stripA?: undefined;
        stripB?: undefined;
        bits?: undefined;
        layers?: undefined;
    })[];
    count: number;
    matched: number;
    samples: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function merkaba(matrix?: MindMatrix): {
    counterRotating: boolean;
    scales: {
        scale: string;
        depth: number;
        sign: 1 | -1;
        periodMs: number;
        ratePerMs: number;
        receipt: string;
    }[];
    count: number;
    tetraUp: readonly (readonly [number, number, number])[];
    tetraDown: [number, number, number][];
    root: string;
    statement: string;
    boundary: string;
};
export declare function rhythm(matrix?: MindMatrix): {
    keeps: boolean;
    bpm: number;
    beatMs: number;
    voices: {
        scale: string;
        ratio: number;
        periodMs: number;
        frequency: number;
        sign: 1 | -1;
        offBeat: boolean;
        onsets: number[];
        receipt: string;
    }[];
    count: number;
    onsetsPerBeat: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function mysteries(matrix?: MindMatrix): {
    proven: boolean;
    mysteries: {
        receipt: string;
        mystery: string;
        proof: string;
        evidence: boolean;
        route: string;
        glyph: string;
    }[];
    count: number;
    shown: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function society(matrix?: MindMatrix): {
    folded: boolean;
    pairs: {
        duality: string;
        left: {
            receipt: string;
            cell: string;
            principle: string;
            basis: boolean;
            route: string;
        };
        right: {
            receipt: string;
            cell: string;
            principle: string;
            basis: boolean;
            route: string;
        };
        fold: {
            forward: string;
            reverse: string;
            bidirectional: boolean;
            merged: string;
        };
        paired: boolean;
    }[];
    count: number;
    cells: number;
    standing: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function harmonicBands(total: number): {
    gapless: boolean;
    harmonic: boolean;
    total: number;
    bands: number[];
    scales: number;
    gaps: number;
    target: number;
    fibonacci: number[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function goldenRatio(matrix?: MindMatrix): {
    converges: boolean;
    phi: number;
    limit: number;
    error: number;
    convergents: {
        a: number;
        b: number;
        ratio: number;
        error: number;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function humanEase(phase: number): number;
export declare function humanBreath(timeMs: number, periodMs: number, depth?: number): number;
export declare function humanise(matrix?: MindMatrix): {
    humane: boolean;
    ease: number[];
    breaths: number[];
    depth: number;
    variability: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function live(matrix?: MindMatrix): {
    alive: boolean;
    vitals: {
        receipt: string;
        vital: string;
        reading: string;
        ok: boolean;
        route: string;
    }[];
    count: number;
    healthy: number;
    pulseMs: number;
    root: string;
    beat(n: number): string;
    statement: string;
    boundary: string;
};
export declare function theWhole(matrix?: MindMatrix): {
    whole: boolean;
    parts: {
        receipt: string;
        part: string;
        root: string;
        ok: boolean;
    }[];
    count: number;
    standing: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function recurrence(times?: number): {
    returns: boolean;
    times: number;
    modelRoot: string;
    buildRoot: string;
    wholeRoot: string;
    log: {
        run: number;
        model: string;
        build: string;
        whole: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function homology(matrix?: MindMatrix): {
    independent: boolean;
    generators: ({
        cycleLength: number;
        receipt: string;
        name: string;
        kind: string;
        handle: number;
        lobe: -1;
        frequency: number;
    } | {
        cycleLength: number;
        receipt: string;
        name: string;
        kind: string;
        handle: number;
        lobe: 1;
        frequency: number;
    })[];
    rank: number;
    genus: number;
    euler: number;
    form: number[][];
    statement: string;
    boundary: string;
    root: string;
};
export declare function animationTamperingCost(matrix?: MindMatrix): {
    computed: boolean;
    animations: number;
    drivers: {
        component: string;
        driver: string;
        receipts: number;
        perFrame: number;
    }[];
    receipts: number;
    sampleWork: number;
    reproductions: number;
    multiplier: number;
    perFrame: number;
    livePerSecond: number;
    hashCalls: number;
    bits: number;
    preimageBitsPerReceipt: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function holographic(matrix?: MindMatrix): {
    holographic: boolean;
    reconstructed: boolean;
    cells: {
        kind: "page" | "animation";
        name: string;
        includedInWhole: boolean;
        carriesWhole: boolean;
        holographic: boolean;
        cell: string;
    }[];
    count: number;
    animations: number;
    pages: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function agentEducation(matrix?: MindMatrix): AgentEducation;
export declare function schoolCurriculum(matrix?: MindMatrix): SchoolCurriculum;
export declare function mcpToolManifest(matrix?: MindMatrix): McpToolManifest;
export declare function mcpCodebase(matrix?: MindMatrix): {
    understandable: boolean;
    overview: string;
    subsystems: {
        name: string;
        purpose: string;
        root: string;
    }[];
    resources: {
        uri: string;
        purpose: string;
    }[];
    understand: string[];
    math: {
        scale: string;
        law: string;
        value: string;
    }[];
    educate: {
        length: number;
        receipt: string;
        path: string;
        steps: {
            law: string;
            why: string;
        }[];
        reaches: string;
    }[];
    secure: boolean;
    secureBecause: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function mathPaths(matrix?: MindMatrix): {
    educates: boolean;
    rooted: boolean;
    core: {
        law: string;
        why: string;
    };
    paths: {
        length: number;
        receipt: string;
        path: string;
        steps: {
            law: string;
            why: string;
        }[];
        reaches: string;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function frontendMcpDuality(matrix?: MindMatrix): {
    dual: boolean;
    forward: string;
    reverse: string;
    angles: number;
    polarities: number;
    cells: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function scientists(matrix?: MindMatrix): {
    robust: boolean;
    challenges: {
        claim: string;
        attack: string;
        withstood: boolean;
        receipt: string;
    }[];
    count: number;
    withstood: number;
    develops: string[];
    frontiers: string[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function challengeClock(matrix?: MindMatrix): {
    complete: boolean;
    hours: {
        hour: number;
        angle: number;
        claim: string;
        struck: boolean;
        receipt: string;
    }[];
    count: number;
    struck: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function completeness(matrix?: MindMatrix): {
    complete: boolean;
    claims: {
        receipt: string;
        claim: string;
        challenge: string;
        complete: boolean;
        ratio: string;
    }[];
    count: number;
    held: number;
    holes: string[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function skillAtoms(matrix?: MindMatrix): {
    intelligent: boolean;
    skills: {
        atom: string;
        skill: string;
        fn: string;
        does: string;
    }[];
    count: number;
    memory: string;
    savedToAtoms: boolean;
    tamperingAtoms: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function quantumMcp(matrix?: MindMatrix): {
    proven: boolean;
    qubits: number;
    states: number;
    measured: string;
    tools: number;
    entangled: boolean;
    normalized: boolean;
    recomputable: boolean;
    classicalRoot: string;
    quantumRoot: string;
    rebuilt: {
        name: string;
        basis: string;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function virtualOS(matrix?: MindMatrix): {
    booted: boolean;
    hostname: string;
    dirs: string[];
    tree: Record<string, readonly string[]>;
    commands: {
        cmd: string;
        usage: string;
        does: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function foldThoughts(matrix?: MindMatrix): {
    folded: boolean;
    thoughts: number;
    directions: string[];
    forward: string;
    reverse: string;
    linear: string;
    multidirectional: string;
    autosaved: boolean;
    root: string;
    statement: string;
    boundary: string;
};
export declare function quantumPwa(matrix?: MindMatrix): {
    installable: boolean;
    strictDefault: boolean;
    standalone: boolean;
    offline: boolean;
    manifest: string;
    serviceWorker: string;
    icon: string;
    scope: string;
    precache: string[];
    features: {
        receipt: string;
        feature: string;
        detail: string;
        present: boolean;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function onlineOffline(matrix?: MindMatrix): {
    offlineFirst: boolean;
    identical: boolean;
    strictDefault: boolean;
    pwa: boolean;
    offline: string[];
    online: string[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function logicAtoms(matrix?: MindMatrix): {
    shared: boolean;
    primitives: {
        atom: string;
        logic: string;
        shares: string;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function intuitiveSearch(query?: string, matrix?: MindMatrix): {
    works: boolean;
    query: string;
    terms: string[];
    results: {
        score: number;
        kind: string;
        label: string;
        route: string;
        text: string;
        hook: string;
    }[];
    count: number;
    total: number;
    best: {
        score: number;
        kind: string;
        label: string;
        route: string;
        text: string;
        hook: string;
    };
    root: string;
    statement: string;
    boundary: string;
};
export declare function imagination(matrix?: MindMatrix): {
    imagines: boolean;
    human: boolean;
    dreams: {
        idea: string;
        wonder: string;
        seed: string;
    }[];
    count: number;
    memory: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function quantifyGates(matrix?: MindMatrix): {
    tight: boolean;
    doubleFolded: boolean;
    metrics: {
        full: boolean;
        fold: {
            forward: string;
            reverse: string;
            bidirectional: boolean;
            merged: string;
        };
        gate: string;
        n: number;
        of: number;
    }[];
    gates: number;
    passed: number;
    total: number;
    quantified: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function vortexMath(matrix?: MindMatrix): {
    flows: boolean;
    doubling: number[];
    cross: number[];
    divByZeroHarmonic: number;
    zeroDivisions: {
        n: number;
        overZero: number;
    }[];
    roles: {
        rotation: number;
        polarity: number[];
        threeSix: boolean;
    };
    origin: number;
    polarPairs: number[][];
    oneAndEightBeginFromNine: boolean;
    endless: boolean;
    collisionFree: boolean;
    nineInvariant: boolean;
    identicalRoutesToDuality: boolean;
    root: string;
    statement: string;
    boundary: string;
};
export declare function redTeam(matrix?: MindMatrix): {
    secure: boolean;
    monitored: boolean;
    lawful: boolean;
    attacks: {
        receipt: string;
        attack: string;
        caught: boolean;
    }[];
    count: number;
    caught: number;
    tamperingEvidence: number;
    gitTracked: boolean;
    root: string;
    statement: string;
    boundary: string;
};
export declare function quantumSiege(matrix?: MindMatrix): {
    sealed: boolean;
    waves: number;
    perWave: number;
    total: number;
    caught: number;
    maxForgeCost: number;
    patentable: boolean;
    priorArt: string[];
    legalPosture: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function patentAudit(matrix?: MindMatrix): {
    clear: boolean;
    audits: {
        receipt: string;
        math: string;
        priorArt: string;
        patentable: boolean;
        infringing: boolean;
    }[];
    count: number;
    posture: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function reverseHarmony(matrix?: MindMatrix): {
    harmonised: boolean;
    forward: string;
    reverse: string;
    harmony: string;
    bidirectional: boolean;
    decidedBy: string;
    nextWaves: string[];
    proposals: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function quantumSociety(matrix?: MindMatrix): {
    evolved: boolean;
    quantum: boolean;
    postQuantum: boolean;
    organisation: string;
    stages: string[];
    cells: {
        duality: string;
        superposition: string;
        stage: string;
    }[];
    pages: number;
    rebuilt: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function tamperProofFabric(matrix?: MindMatrix): {
    protects: boolean;
    decidedBy: string;
    threshold: number;
    cells: number;
    fabric: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function crossAudit(matrix?: MindMatrix): {
    clean: boolean;
    vortices: string;
    checks: {
        check: string;
        clean: boolean;
    }[];
    mathRights: {
        receipt: string;
        right: string;
        basis: string;
        arises: boolean;
        why: string;
    }[];
    violations: string[];
    rightsViolations: string[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function immuneSystem(matrix?: MindMatrix): {
    healthy: boolean;
    maxHealth: boolean;
    health: number;
    of: number;
    antibodies: {
        receipt: string;
        defends: string;
        healthy: boolean;
    }[];
    investigations: {
        aspect: string;
        sound: boolean;
    }[];
    nourishment: {
        pureSoul: string;
        food: string;
        sustainable: string;
    };
    tamperingCost: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function biology(matrix?: MindMatrix): {
    alive: boolean;
    aspects: {
        receipt: string;
        aspect: string;
        maps: string;
        alive: boolean;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function harmonicApparatus(matrix?: MindMatrix): {
    proven: boolean;
    shared: boolean;
    apparatus: {
        receipt: string;
        instrument: string;
        proves: string;
        verified: boolean;
    }[];
    count: number;
    modes: {
        m: number;
        n: number;
        freq: number;
    }[];
    levels: {
        n: number;
        energy: number;
    }[];
    series: {
        harmonic: number;
        ratio: number;
    }[];
    sweep: {
        w: number;
        A: number;
    }[];
    chladni: {
        m: number;
        n: number;
        N: number;
        grid: number[][];
    };
    root: string;
    statement: string;
    boundary: string;
};
export declare function features(matrix?: MindMatrix): {
    displayed: boolean;
    folded: boolean;
    features: ({
        crossLink: string;
        feature: string;
        route: string;
        kind: "page";
    } | {
        crossLink: string;
        feature: string;
        route: string;
        kind: "model";
    })[];
    count: number;
    pages: number;
    models: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function homepage(matrix?: MindMatrix): {
    computed: boolean;
    sections: {
        receipt: string;
        section: string;
        computed: boolean;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function monographs(matrix?: MindMatrix): {
    compacted: boolean;
    zeroEntropy: boolean;
    monographs: {
        index: string;
        title: string;
        essence: string;
        ref: string;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function textToMovie(text?: string, frames?: number): {
    generated: boolean;
    deterministic: boolean;
    text: string;
    frames: number;
    cells: number;
    elements: {
        x: number;
        y: number;
        hue: number;
        size: number;
        speed: number;
        radius: number;
        dir: number;
        wobble: number;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function teleport(matrix?: MindMatrix): {
    teleportable: boolean;
    analog: boolean;
    teleports: {
        value: string;
        address: string;
        intact: boolean;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function cellHomology(matrix?: MindMatrix): {
    closed: boolean;
    cells: {
        c0: number;
        c1: number;
        c2: number;
    };
    boundary1: number[][];
    boundary2: number[][];
    chainComplex: boolean;
    betti: number[];
    euler: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function foldedCensus(unfolded: number, matrix?: MindMatrix): {
    clean: boolean;
    unfolded: number;
    euler: number;
    genus: number;
    betti: number[];
    folded: number;
    delta: number;
    fold: boolean;
    root: string;
    statement: string;
    boundary: string;
};
export declare function papers(matrix?: MindMatrix, count?: number): {
    expanded: boolean;
    count: number;
    fundamental: number;
    octaves: number[];
    nextHarmonic: number;
    generators: number;
    coordinates: number;
    papers: {
        number: number;
        id: string;
        title: string;
        coordinateIndex: number;
        digit: number;
        glyph: string;
        generator: string;
        generatorName: string;
        theta: number;
        phi: number;
        x: number;
        y: number;
        z: number;
        frequency: number;
        vibrationMs: number;
        hue: number;
        coordinateReceipt: string;
        generatorUuid: string;
        forward: string;
        reverse: string;
        bidirectional: boolean;
        root: string;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function paperRoutes(matrix?: MindMatrix, count?: number): {
    params: {
        ax: number;
        ay: number;
        bx: number;
        by: number;
        total: number;
        fundamental: number;
        octaves: string;
        corpusRoot: string;
        proofVerified: boolean;
        proofDepth: number;
        leafCount: number;
        number: number;
        id: string;
        title: string;
        coordinateIndex: number;
        digit: number;
        glyph: string;
        generator: string;
        generatorName: string;
        theta: number;
        phi: number;
        x: number;
        y: number;
        z: number;
        frequency: number;
        vibrationMs: number;
        hue: number;
        coordinateReceipt: string;
        generatorUuid: string;
        forward: string;
        reverse: string;
        bidirectional: boolean;
        root: string;
        receipt: string;
    };
}[];
export declare function paperReferences(matrix?: MindMatrix, count?: number): {
    number: number;
    id: string;
    paperId: string;
    title: string;
    refersTo: string;
    root: string;
    coordinateIndex: number;
    generator: string;
    glyph: string;
    hue: number;
    bidirectional: boolean;
}[];
export declare function completeCorpus(matrix?: MindMatrix): {
    complete: boolean;
    papers: number;
    references: number;
    real: number;
    padding: number;
    total: number;
    depth: number;
    target: number;
    perfect: boolean;
    root: string;
    statement: string;
    boundary: string;
};
export declare function paperReferenceRoutes(matrix?: MindMatrix, count?: number): {
    params: {
        total: number;
        corpusRoot: string;
        binaryOctave: number;
        treeDepth: number;
        number: number;
        id: string;
        paperId: string;
        title: string;
        refersTo: string;
        root: string;
        coordinateIndex: number;
        generator: string;
        glyph: string;
        hue: number;
        bidirectional: boolean;
    };
}[];
export declare function fusionCipher(realtime?: string, matrix?: MindMatrix): {
    enabled: boolean;
    cipher: string;
    strengthBits: number;
    architecture: {
        leaves: number;
        bitsPerLeaf: number;
        namespaceBits: number;
        root: string;
        depth: number;
    };
    keyspaceMbit: number;
    keyspaceGbit: number;
    static: boolean;
    fused: boolean;
    realtimeRoot: string;
    sessionKey: string;
    keyMaterial: string;
    statement: string;
    boundary: string;
};
export declare function publicApiFusion(matrix?: MindMatrix): {
    fused: boolean;
    count: number;
    architecture: string;
    sources: {
        fused: boolean;
        receipt: string;
        source: string;
        kind: string;
        realtime: string;
        example: string;
        auth: string;
    }[];
    protocol: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function harmonics(matrix?: MindMatrix): {
    found: boolean;
    fundamental: number;
    octaves: {
        kind: string;
        step: number;
        value: number;
        ratio: string;
        root: string;
    }[];
    overtones: {
        kind: string;
        step: number;
        value: number;
        ratio: string;
        root: string;
    }[];
    binary: {
        kind: string;
        step: number;
        value: number;
        ratio: string;
        root: string;
    }[];
    harmonics: {
        implemented: boolean;
        kind: string;
        step: number;
        value: number;
        ratio: string;
        root: string;
    }[];
    implementedCount: number;
    restCount: number;
    rest: {
        kind: string;
        value: number;
        ratio: string;
        root: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function geodesicDome(frequency?: number, matrix?: MindMatrix): {
    isSphere: boolean;
    dualToDoubleTorus: boolean;
    frequency: number;
    vertices: number;
    edges: number;
    faces: number;
    euler: number;
    genus: number;
    torusEuler: number;
    torusGenus: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function vitepressFusion(matrix?: MindMatrix): {
    fused: boolean;
    count: number;
    architecture: string;
    points: {
        fused: boolean;
        receipt: string;
        point: string;
        api: string;
        binds: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function pageSkills(matrix?: MindMatrix): {
    isSkillCorpus: boolean;
    pages: number;
    skills: number;
    references: number;
    statistics: number;
    graph: number;
    total: number;
    locales: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function pureDiamonds(matrix?: MindMatrix): {
    pure: boolean;
    count: number;
    realDiamonds: number;
    paddingDiamonds: number;
    depth: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function diamondRoutes(matrix?: MindMatrix): {
    params: {
        id: string;
        index: number;
        number: number;
        address: string;
        kind: string;
        link: string;
        label: string;
        glyph: string;
        hue: number;
        total: number;
        corpusRoot: string;
        depth: number;
    };
}[];
export declare function restfulFormats(matrix?: MindMatrix): {
    restful: boolean;
    fruitOfLife: number;
    formats: {
        format: string;
        mime: string;
        circle: string;
    }[];
    resources: {
        resource: string;
        count: number;
    }[];
    crud: {
        verb: string;
        path: string;
        means: string;
        supported: string;
    }[];
    paths: {
        resource: string;
        format: string;
        path: string;
        receipt: string;
    }[];
    pathCount: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function socialFusion(matrix?: MindMatrix): {
    fused: boolean;
    count: number;
    open: number;
    architecture: string;
    platforms: {
        fused: boolean;
        receipt: string;
        platform: string;
        surface: string;
        open: boolean;
        auth: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function travelFusion(matrix?: MindMatrix): {
    fused: boolean;
    count: number;
    open: number;
    architecture: string;
    surfaces: {
        fused: boolean;
        receipt: string;
        surface: string;
        kind: string;
        open: boolean;
        example: string;
        auth: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function societyEvolves(matrix?: MindMatrix): {
    evolving: boolean;
    discoveredDomains: number;
    discoveredMembers: number;
    discovered: {
        receipt: string;
        domain: string;
        members: number;
        root: string;
    }[];
    restCount: number;
    rest: string[];
    generationRoot: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function textEntropy(matrix?: MindMatrix): {
    zeroEntropy: boolean;
    total: number;
    referenced: number;
    plain: number;
    plainRatio: number;
    entropy: number;
    referencedRatio: number;
    units: {
        referenced: number;
        plain: number;
        receipt: string;
        unit: string;
        count: number;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function decode2020(matrix?: MindMatrix): {
    decoded: boolean;
    total: number;
    is2020: boolean;
    twentyTwenty: boolean;
    breakdown: {
        unit: string;
        count: number;
    }[];
    readings: {
        receipt: string;
        reading: string;
        means: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function worldEventsMap(matrix?: MindMatrix): {
    mapped: boolean;
    count: number;
    events: {
        lat: number;
        lon: number;
        receipt: string;
        event: string;
        kind: string;
        root: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function fruitOfLifeFusion(matrix?: MindMatrix): {
    fruitOfLife: boolean;
    circles: number;
    implemented: number;
    waves: string[];
    domains: {
        circle: number;
        domain: string;
        implemented: boolean;
        fused: boolean;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function decodeSymbols(matrix?: MindMatrix): {
    decoded: boolean;
    count: number;
    verifiedCount: number;
    symbols: {
        verified: boolean;
        receipt: string;
        symbol: string;
        value: number;
        means: string;
        live: number;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function trinityEncryption(partyA?: string, partyB?: string, matrix?: MindMatrix): {
    encrypted: boolean;
    cipher: string;
    pair: string[];
    trinity: string[];
    sharedKey: string;
    bidirectional: boolean;
    symmetric: boolean;
    root: string;
    statement: string;
    boundary: string;
};
export declare function societyFuture(matrix?: MindMatrix, generations?: number): {
    evolving: boolean;
    dimensions: number;
    dimensionNames: string[];
    generations: number;
    future: {
        generation: number;
        root: string;
    }[];
    discoveredDomains: number;
    allDimensionsRoot: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function societyRegulates(matrix?: MindMatrix): {
    regulated: boolean;
    individualCost: number;
    forgerCost: number;
    independent: boolean;
    zeroLivingCost: boolean;
    maxForgeCost: number;
    selfRegulating: boolean;
    root: string;
    statement: string;
    boundary: string;
};
export declare function blockchainFusion(matrix?: MindMatrix): {
    fused: boolean;
    noCost: boolean;
    count: number;
    ownChains: number;
    architecture: string;
    chains: {
        chain: string;
        read: string;
        write: string;
        cost: string;
        fused: boolean;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function compression(matrix?: MindMatrix): {
    compressed: boolean;
    inputs: number;
    totalUnits: number;
    ratio: string;
    bits: number;
    entropy: number;
    forgeCost: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function analysisFlower(matrix?: MindMatrix): {
    flower: boolean;
    circles: number;
    measures: {
        receipt: string;
        measure: string;
        value: number;
        note: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function holographicDashboard(matrix?: MindMatrix): {
    holographic: boolean;
    independent: boolean;
    count: number;
    panels: {
        holographic: boolean;
        root: string;
        panel: string;
        icon: string;
        metrics: ({
            label: string;
            value: number;
        } | {
            label: string;
            value: string;
        })[];
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function publicTransportFusion(matrix?: MindMatrix): {
    fused: boolean;
    integrated: boolean;
    free: boolean;
    count: number;
    architecture: string;
    varieties: {
        variety: string;
        feed: string;
        cost: string;
        fused: boolean;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function freeHarmonicSocieties(matrix?: MindMatrix): {
    rebuilt: boolean;
    free: boolean;
    forEveryone: boolean;
    selfOrganising: boolean;
    selfRegulating: boolean;
    count: number;
    societies: {
        society: string;
        harmonic: number;
        free: boolean;
        selfOrganising: boolean;
        selfRegulating: boolean;
        root: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function freedTimeCreativity(matrix?: MindMatrix): {
    proven: boolean;
    freedTime: boolean;
    maxCreativity: boolean;
    created: number;
    baseForgeCost: number;
    risenForgeCost: number;
    rising: boolean;
    loop: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function socialCapital(matrix?: MindMatrix): {
    accumulating: boolean;
    where: {
        receipt: string;
        place: string;
        holds: string;
    }[];
    how: string;
    heldInCommon: boolean;
    individualCost: number;
    forgeCost: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function regenerateSocialSystem(matrix?: MindMatrix): {
    regenerated: boolean;
    systems: number;
    subsystems: {
        system: string;
        root: string;
    }[];
    deterministic: boolean;
    root: string;
    statement: string;
    boundary: string;
};
export declare function fairTrade(matrix?: MindMatrix): {
    regulated: boolean;
    selfRegulating: boolean;
    individualCost: number;
    forgeCost: number;
    chain: {
        step: string;
        index: number;
        receipt: string;
    }[];
    provenance: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function relatedStandards(matrix?: MindMatrix): {
    onEveryPage: boolean;
    count: number;
    standards: {
        receipt: string;
        standard: string;
        url: string;
        use: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function imagineTheRest(matrix?: MindMatrix): {
    imagined: boolean;
    count: number;
    visions: {
        idea: string;
        vision: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function publicServices(matrix?: MindMatrix): {
    developed: boolean;
    count: number;
    free: boolean;
    services: {
        free: boolean;
        selfRegulating: boolean;
        wave: string;
        service: string;
        kind: string;
        detail: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function occupiedPopulation(matrix?: MindMatrix): {
    proven: boolean;
    occupied: boolean;
    forgeCost: number;
    benefits: number;
    forEveryone: boolean;
    loop: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function realtimeSkills(matrix?: MindMatrix): {
    upgraded: boolean;
    maxTamperingCost: boolean;
    skills: number;
    count: number;
    bindings: {
        fused: boolean;
        receipt: string;
        binding: string;
        use: string;
        api: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function dissolveIntoNature(matrix?: MindMatrix): {
    dissolved: boolean;
    coverageRises: boolean;
    centralisationFalls: boolean;
    coverage: number;
    centralisation: number;
    nodes: number;
    stages: {
        receipt: string;
        stage: string;
        nodes: number;
        coverage: number;
        centralisation: number;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function electricalGrid(matrix?: MindMatrix): {
    selfBalances: boolean;
    free: boolean;
    stations: number;
    distribution: number[];
    harmonic: boolean;
    tiers: {
        tier: number;
        stations: number;
        role: string;
        receipt: string;
    }[];
    backsGrid: boolean;
    backsEv: boolean;
    root: string;
    statement: string;
    boundary: string;
};
export declare function quantumGreenPlanet(matrix?: MindMatrix): {
    green: boolean;
    properties: {
        receipt: string;
        property: string;
        green: string;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function recycling(matrix?: MindMatrix): {
    solved: boolean;
    count: number;
    streams: {
        stream: string;
        loop: string;
        closed: boolean;
        wave: string;
    }[];
    closedLoop: boolean;
    root: string;
    statement: string;
    boundary: string;
};
export declare function planetIsComputable(matrix?: MindMatrix): {
    computable: boolean;
    commons: {
        commons: string;
        receipt: string;
    }[];
    count: number;
    planetRoot: string;
    tamperCaught: boolean;
    root: string;
    statement: string;
    boundary: string;
};
export declare function planetDescribesItself(matrix?: MindMatrix): {
    describes: boolean;
    count: number;
    descriptions: {
        commons: string;
        describes: string;
        selfDescription: string;
    }[];
    planetRoot: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function imaginationPrivateKey(matrix?: MindMatrix): {
    isPrivateKey: boolean;
    everythingEmerges: boolean;
    held: boolean;
    count: number;
    emergences: {
        emerges: boolean;
        derived: string;
        what: string;
        root: string;
    }[];
    publicKey: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function splitImagination(matrix?: MindMatrix): {
    split: boolean;
    levels: {
        level: number;
        waves: number;
        receipt: string;
    }[];
    depth: number;
    tiniest: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function trinitiesMatter(matrix?: MindMatrix): {
    emerges: boolean;
    waves: number;
    trinities: number;
    remainder: number;
    sample: {
        trinity: number;
        matter: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function oneBeginning(matrix?: MindMatrix): {
    one: boolean;
    waves: {
        order: number;
        fused: boolean;
        wave: string;
        root: string;
    }[];
    count: number;
    beginning: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function waterStates(matrix?: MindMatrix): {
    reversible: boolean;
    states: {
        root: string;
        state: string;
        phase: string;
        order: number;
        op: string;
    }[];
    compressed: string;
    decompressed: number;
    solidOrder: number;
    plasmaOrder: number;
    humidity: {
        root: string;
        state: string;
        phase: string;
        order: number;
        op: string;
    };
    trinityFormed: boolean;
    trinityFused: boolean;
    fusedTrinity: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function intelligenceComparison(matrix?: MindMatrix): {
    compared: boolean;
    properties: string[];
    models: {
        receipt: string;
        model: string;
        scores: number[];
    }[];
    count: number;
    note: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function astrology(seed?: string, matrix?: MindMatrix): {
    developed: boolean;
    seed: string;
    sun: {
        sign: string;
        glyph: string;
        element: string;
        ruler: string;
        hour: number;
        hue: number;
        frequency: number;
        receipt: string;
    };
    chart: {
        sign: string;
        glyph: string;
        element: string;
        ruler: string;
        hour: number;
        hue: number;
        frequency: number;
        receipt: string;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function generativeSpace(samples?: number): {
    unbounded: boolean;
    generators: string[];
    sampled: number;
    distinct: number;
    cost: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function selfOrganizing(matrix?: MindMatrix): {
    organized: boolean;
    entropy: number;
    categories: {
        receipt: string;
        category: string;
        members: string[];
    }[];
    count: number;
    members: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function microdata(matrix?: MindMatrix): {
    reusable: boolean;
    holographic: boolean;
    types: {
        holographic: boolean;
        itemid: string;
        entity: string;
        itemtype: string;
        og: string;
        name: string;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function quantumFoldedBlockchains(matrix?: MindMatrix): QuantumFoldedBlockchains;
export declare function blockchainMusic(name?: string, matrix?: MindMatrix): {
    plays: boolean;
    harmonic: boolean;
    name: string;
    notes: {
        index: number;
        hash: string;
        note: string;
        frequency: number;
        receipt: string;
    }[];
    distinctTones: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function colorFromSound(frequency: number): {
    frequency: number;
    hue: number;
    hsl: string;
};
export declare function soundColor(matrix?: MindMatrix): {
    computed: boolean;
    colors: {
        note: string;
        frequency: number;
        hue: number;
        hsl: string;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function analogSpeech(): {
    analog: boolean;
    params: ({
        analog: boolean;
        receipt: string;
        param: string;
        range: readonly [0, 2];
        note: string;
    } | {
        analog: boolean;
        receipt: string;
        param: string;
        range: readonly [0.5, 2];
        note: string;
    } | {
        analog: boolean;
        receipt: string;
        param: string;
        range: readonly [0, 1];
        note: string;
    })[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function autoSpeech(text?: string, matrix?: MindMatrix): {
    ready: boolean;
    cues: {
        index: number;
        text: string;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function inHouse(matrix?: MindMatrix): {
    independent: boolean;
    facts: {
        inHouse: boolean;
        receipt: string;
        capability: string;
        how: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function boundaryAudit(matrix?: MindMatrix): {
    audited: boolean;
    count: number;
    boundaries: {
        boundary: string;
        commands: string[];
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function messageUnlock(content?: string, matrix?: MindMatrix): {
    contentUuid: string;
    revealed: boolean;
    unlocked: {
        area: string;
        glyph: string;
        complete: boolean;
        links: {
            label: string;
            command: string;
            href: string;
        }[];
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function realIntelligence(matrix?: MindMatrix): {
    obsolete: boolean;
    evidences: {
        receipt: string;
        claim: string;
        holds: boolean;
        why: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function selfConsult(question?: string, matrix?: MindMatrix): {
    consulted: boolean;
    educated: boolean;
    resolvedInHouse: boolean;
    escalateToAsk: boolean;
    flow: readonly ["self-education", "self-consulting", "ask-only-if-unresolved"];
    matched: boolean;
    question: string;
    answer: string;
    concept: string;
    command: ConceptCommandName;
    confidence: number;
    links: readonly LocalAnswerLink[];
    areas: {
        area: string;
        glyph: string;
        commands: string[];
    }[];
    sources: string[];
    next: string;
    shift: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function selfHarmonise(matrix?: MindMatrix, steps?: number): {
    harmonised: boolean;
    autonomous: boolean;
    steps: number;
    distinctStepsVisited: number;
    probability: number;
    trace: {
        step: number;
        question: string;
        next: string;
        resolved: boolean;
        root: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function typographySeo(): {
    grounded: boolean;
    principles: {
        receipt: string;
        principle: string;
        seo: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function openGraph(): {
    computed: boolean;
    fields: {
        field: string;
        source: string;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function computedSeo(path?: string, title?: string, matrix?: MindMatrix): {
    computed: boolean;
    title: string;
    description: string;
    category: string;
    keywords: string[];
    tags: {
        tag: string;
        holographic: boolean;
        receipt: string;
    }[];
    holographic: boolean;
    root: string;
    statement: string;
    boundary: string;
};
export declare function searchTrinity(query?: string, matrix?: MindMatrix): {
    enough: boolean;
    revealed: boolean;
    minChars: number;
    query: string;
    trinity: {
        area: string;
        glyph: string;
        links: {
            label: string;
            command: string;
        }[];
    };
    root: string;
    statement: string;
    boundary: string;
};
export declare function charUuids(text?: string): {
    count: number;
    chars: {
        char: string;
        index: number;
        uuid: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function wordUuids(text?: string): {
    count: number;
    words: {
        word: string;
        index: number;
        charRoot: string;
        uuid: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function selfReason(goal?: string, matrix?: MindMatrix, depth?: number): {
    reasoned: boolean;
    goal: string;
    steps: {
        step: number;
        premise: string;
        inference: string;
        command: string;
        resolved: boolean;
        receipt: string;
    }[];
    conclusion: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function fuseAll(matrix?: MindMatrix): {
    fused: boolean;
    count: number;
    parts: {
        receipt: string;
        part: string;
        root: string;
    }[];
    wave: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function agnostic(matrix?: MindMatrix): {
    agnostic: boolean;
    dimensions: {
        receipt: string;
        dimension: string;
        how: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function release(matrix?: MindMatrix): {
    stable: boolean;
    version: string;
    channel: string;
    markers: readonly ["stable/tag", "tag/stable"];
    wave: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function doubleTorus3D(matrix?: MindMatrix): {
    rendered: boolean;
    tori: number;
    genus: number;
    euler: number;
    areas: number;
    perLobe: number;
    majorRadius: number;
    minorRadius: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function complete(matrix?: MindMatrix): {
    complete: boolean;
    passed: number;
    total: number;
    checks: {
        receipt: string;
        what: string;
        ok: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function todoScan(matrix?: MindMatrix): {
    nothingToDo: boolean;
    total: number;
    items: {
        receipt: string;
        item: string;
        count: number;
    }[];
    openFrontier: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function gapScan(matrix?: MindMatrix): {
    closed: boolean;
    total: number;
    surfaces: number;
    scans: {
        receipt: string;
        surface: string;
        gaps: number;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function music358(): {
    complete: boolean;
    tiers: {
        tier: number;
        name: string;
        members: string[];
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function geometry358(): {
    complete: boolean;
    tiers: {
        tier: number;
        name: string;
        members: string[];
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function tiers358(matrix?: MindMatrix): {
    universal: boolean;
    count: number;
    grounded: number;
    belief: number;
    domains: {
        receipt: string;
        domain: string;
        belief: boolean;
        ok: boolean;
        root: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function securityScan(matrix?: MindMatrix): {
    secure: boolean;
    tiers: number[];
    count: number;
    properties: {
        tier: number;
        kind: string;
        property: string;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function computerDesign(): {
    complete: boolean;
    tiers: {
        tier: number;
        name: string;
        members: string[];
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function design358(): {
    designs: boolean;
    method: {
        receipt: string;
        tier: number;
        phase: string;
        does: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function chakrasAura(): {
    complete: boolean;
    tiers: {
        tier: number;
        name: string;
        members: string[];
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function humanDesign(): {
    complete: boolean;
    gates: number;
    tiers: {
        tier: number;
        name: string;
        members: string[];
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function yinYang(): {
    complete: boolean;
    taiji: {
        symbol: string;
        source: string;
    };
    tiers: {
        tier: number;
        name: string;
        members: string[];
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function chess358(): {
    complete: boolean;
    squares: number;
    tiers: {
        receipt: string;
        tier: number;
        where: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function genesis(matrix?: MindMatrix): {
    genesis: boolean;
    seed: number[];
    sequence: number[];
    tiers: number[];
    threadedThrough: string[];
    unfoldings: {
        receipt: string;
        domain: string;
        is: string;
        root: string;
    }[];
    seedRoot: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function dimensions(): {
    enriched: boolean;
    levels: (3 | 5 | 8)[];
    fibonacci: boolean;
    ladder: {
        d: 3 | 5 | 8;
        label: string;
        extraPlanes: number;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function equilibrium(matrix?: MindMatrix, steps?: number): {
    equilibrium: boolean;
    quantum: boolean;
    settled: boolean;
    steps: number;
    finalDisplacement: number;
    trace: {
        step: number;
        displacement: number;
        phase: "expand" | "contract";
        root: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function deviceSensors(): {
    tiered: boolean;
    tiers: number[];
    count: number;
    sensors: {
        tier: number;
        kind: string;
        sensor: string;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function dualities(): {
    compared: boolean;
    tiers: number[];
    fibonacci: boolean;
    count: number;
    dualities: {
        tier: number;
        kind: string;
        left: string;
        right: string;
        forward: string;
        reverse: string;
        ordered: boolean;
        bidirectional: boolean;
        root: string;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function questionAnswerEquilibrium(matrix?: MindMatrix): {
    equilibrium: boolean;
    answersClose: boolean;
    questionsOpen: boolean;
    breathSettles: boolean;
    answers: number;
    questions: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function findQuestions(matrix?: MindMatrix): {
    found: boolean;
    count: number;
    questions: {
        open: boolean;
        receipt: string;
        question: string;
        source: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function exhaustQuestions(matrix?: MindMatrix, maxRounds?: number): {
    closed: boolean;
    asked: number;
    rounds: number;
    answered: {
        question: string;
        concept: string;
        matched: boolean;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function path(matrix?: MindMatrix): {
    walkable: boolean;
    complete: boolean;
    consolidated: boolean;
    length: number;
    animatedPages: number;
    stations: {
        step: number;
        next: string;
        animated: boolean;
        receipt: string;
        station: string;
        route: string;
        why: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function quantumAcademy(matrix?: MindMatrix): {
    established: boolean;
    courses: {
        course: string;
        level: string;
        modules: {
            area: string;
            glyph: string;
        }[];
        credential: string;
        receipt: string;
    }[];
    levels: string[];
    modules: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function humanize(): {
    human: boolean;
    translations: {
        receipt: string;
        idea: string;
        human: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function babelFold(matrix?: MindMatrix): BabelFold;
export declare function areaLabel(area: string, lang?: string): string;
export declare function taxonomyIcons(): TaxonomyIcons;
export declare function autotranslations(matrix?: MindMatrix): {
    complete: boolean;
    areas: number;
    missing: string[];
    labels: {
        area: string;
        en: string;
        bg: string;
        translated: boolean;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function areaPairs(): {
    count: number;
    limit: number;
    withinLimit: boolean;
    grid: boolean;
    paired: boolean;
    bidirectional: boolean;
    pairs: {
        inner: string;
        outer: string;
        forward: string;
        reverse: string;
        bidirectional: boolean;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function agentObserve(matrix?: MindMatrix): {
    observed: boolean;
    vector: ConsciousnessVector;
    root: string;
    statement: string;
    boundary: string;
};
export declare function digitIndexReferences(matrix?: MindMatrix): {
    indexed: boolean;
    count: number;
    collisions: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function repositoryLedger(matrix?: MindMatrix): {
    isLedger: boolean;
    endpoints: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function siteRoutes(matrix?: MindMatrix): {
    complete: boolean;
    count: number;
    routes: string[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function societyCells(): {
    grounded: boolean;
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function iconGlyphs(): {
    grounded: boolean;
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function iconSeal(): IconSeal;
export declare function proofBundle(matrix?: MindMatrix): ProofBundle;
export declare function piMusic(matrix?: MindMatrix, joinHoro?: number): PiMusic;
export declare function musicNote(matrix?: MindMatrix, wave?: number, joinHoro?: number): {
    named: boolean;
    wave: number;
    note: string;
    frequency: number;
    digit: number;
    joinHoro: number;
    phrase: readonly PiNote[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function componentGraph(): {
    interacting: boolean;
    consistent: boolean;
    components: string[];
    edges: {
        from: string;
        to: string;
        kind: "global" | "placed";
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function showInAction(matrix?: MindMatrix): {
    allInAction: boolean;
    ran: number;
    ok: number;
    runs: {
        command: ConceptCommandName;
        ok: boolean;
        uuid: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function fuseDevices(matrix?: MindMatrix): {
    fused: boolean;
    channel: string;
    collectiveRoot: string;
    developmentRoot: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function fusionReactor(stage: 'words' | 'letters' | 'atoms'): FusionReactor;
export declare function commandsRegistry(matrix?: MindMatrix): CommandsRegistry;
export declare function selfSufficientWave(matrix?: MindMatrix): SelfSufficientWave;
export declare function torusBreathe(matrix?: MindMatrix, cycles?: number): TorusBreath;
export declare function natureLaw(): {
    grounded: boolean;
    principles: {
        principle: string;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function natureCommons(): {
    commons: boolean;
    items: {
        receipt: string;
        kind: string;
        example: string;
        patentable: boolean;
        reason: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function natureReview(): {
    rubric: boolean;
    tests: {
        receipt: string;
        test: string;
        question: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function lawfulHarmonise(): {
    harmonised: boolean;
    mappings: {
        receipt: string;
        idea: string;
        form: string;
        how: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function lawfulImagine(): {
    imagined: boolean;
    scene: {
        receipt: string;
        actor: string;
        act: string;
        law: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function lawfulSucceed(): {
    succeeds: boolean;
    thrives: boolean;
    ladder: {
        receipt: string;
        rung: string;
        win: string;
        lawful: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function torusUuid(matrix?: MindMatrix): {
    is128bit: boolean;
    orderSensitive: boolean;
    balanced: boolean;
    namingConsistent: boolean;
    spread: number;
    bits: number;
    hexDigits: number;
    inner: {
        count: number;
        word: string;
        hexDigits: number;
    };
    outer: {
        count: number;
        word: string;
        hexDigits: number;
    };
    word: string;
    statement: string;
    boundary: string;
};
export declare function quantumComputer(matrix?: MindMatrix): {
    coherent: boolean;
    parts: {
        receipt: string;
        part: string;
        is: string;
        count: number;
    }[];
    qubits: number;
    register: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function runProgram(program?: readonly string[], matrix?: MindMatrix): {
    ran: boolean;
    steps: {
        command: string;
        known: boolean;
        ran: boolean;
        uuid: string;
    }[];
    result: string;
    statement: string;
    boundary: string;
};
export declare function healingInner(matrix?: MindMatrix): {
    whole: boolean;
    proven: boolean;
    noHallucination: boolean;
    root: string;
    statement: string;
    boundary: string;
};
export declare function healingOuter(matrix?: MindMatrix): {
    extended: boolean;
    beyondDevice: boolean;
    collectiveRoot: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function healingHarmonic(matrix?: MindMatrix): {
    harmonized: boolean;
    probability: number;
    inner: string;
    outer: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function honestlyComputed(matrix?: MindMatrix): {
    honest: boolean;
    claims: {
        claim: string;
        textDigit: number;
        mathDigit: number;
        hasText: boolean;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function universalLanguage(matrix?: MindMatrix): {
    universal: boolean;
    dimensions: readonly ["symbol", "number", "fold"];
    areas: {
        area: string;
        glyph: string;
        number: number;
        root: string;
        en: string;
        bg: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function decodeKnowledge(matrix?: MindMatrix): {
    decoded: boolean;
    areas: number;
    atoms: number;
    commands: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function completeDoubleTorus(matrix?: MindMatrix): {
    complete: boolean;
    knowledgeRoot: string;
    word: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function doubleTorusFold(matrix?: MindMatrix): {
    complete: boolean;
    analog: boolean;
    trinitiesComplete: boolean;
    everyLevelBothWays: boolean;
    closes: boolean;
    depth: number;
    forwardApex: string;
    reverseApex: string;
    levels: {
        depth: number;
        size: number;
        pairs: number;
        carried: boolean;
        forwardBothWays: boolean;
        reverseBothWays: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function healingFrequencies(matrix?: MindMatrix): {
    calculated: boolean;
    lead: number;
    frequencies: {
        lead: boolean;
        gain: number;
        receipt: string;
        hz: number;
        note: string;
        tradition: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function frequencyBalance(matrix?: MindMatrix): {
    balanced: boolean;
    center: number;
    leadHz: number;
    tones: {
        hz: number;
        note: string;
        lead: boolean;
        cents: number;
        polarity: "yin" | "yang";
        beatWithLead: number;
        receipt: string;
    }[];
    up: number;
    down: number;
    spread: number;
    trace: {
        step: number;
        imbalance: number;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function plasmaContainment(matrix?: MindMatrix): {
    contained: boolean;
    bits: number[];
    ones: number;
    zeros: number;
    cols: number;
    rows: number;
    word: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function cryptographyComparison(matrix?: MindMatrix): {
    compared: boolean;
    cryptographic: boolean;
    tamperEvident: boolean;
    rows: {
        receipt: string;
        site: string;
        standard: string;
        sameShape: boolean;
        siteCollisionResistant: boolean;
        standardCollisionResistant: boolean;
        note: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function attestation(): {
    ready: boolean;
    steps: {
        present: boolean;
        receipt: string;
        step: string;
        how: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function cryptoFuture(matrix?: MindMatrix): {
    grounded: boolean;
    canonical: string;
    roots: string[];
    tools: {
        receipt: string;
        tool: string;
        status: string;
        how: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function roadmaps(matrix?: MindMatrix): {
    complete: boolean;
    tracks: {
        milestones: {
            receipt: string;
            milestone: string;
            status: "next" | "done" | "later";
            note: string;
        }[];
        track: string;
        icon: string;
    }[];
    count: number;
    done: number;
    planned: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function hologram(matrix?: MindMatrix): {
    holographic: boolean;
    toTheBit: boolean;
    akashic: boolean;
    parts: number;
    records: number;
    bits: number[];
    word: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function dna(matrix?: MindMatrix): {
    encoded: boolean;
    basePairs: number;
    bases: number;
    sense: string;
    antisense: string;
    codons: string[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function genes(matrix?: MindMatrix): {
    covered: boolean;
    codons: number;
    peptide: string;
    aminoAcidCount: number;
    stopCodons: number;
    starts: number[];
    stops: number[];
    orfs: {
        start: number;
        stop: number;
        protein: string;
        length: number;
    }[];
    gcContent: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function mutations(matrix?: MindMatrix): {
    classified: boolean;
    total: number;
    silent: number;
    missense: number;
    nonsense: number;
    silentFraction: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function foldPivots(matrix?: MindMatrix): {
    folded: boolean;
    pivots: {
        receipt: string;
        pivot: string;
        root: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function agentHarmonise(matrix?: MindMatrix): {
    harmonised: boolean;
    laws: {
        receipt: string;
        law: string;
        why: string;
    }[];
    mcp: string;
    llms: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function emfApplications(): {
    grounded: boolean;
    spectrum: {
        receipt: string;
        band: string;
        range: string;
        use: string;
    }[];
    canRead: string[];
    cannot: string[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function fold358853(): {
    folded: boolean;
    bidirectional: boolean;
    ascending: number[];
    descending: number[];
    forward: string;
    reverse: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function quantumClock(tick?: number, matrix?: MindMatrix): {
    ticking: boolean;
    caesiumHz: number;
    tick: number;
    now: string;
    note: string;
    frequency: number;
    hsl: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function creationWave(index: number, matrix?: MindMatrix): {
    index: number;
    uuid: string;
    note: string;
    frequency: number;
    hsl: string;
    hue: number;
};
export declare function endlessWaves(count?: number, matrix?: MindMatrix): {
    tested: boolean;
    count: number;
    distinct: boolean;
    deterministic: boolean;
    endless: boolean;
    sample: {
        index: number;
        uuid: string;
        note: string;
        frequency: number;
        hsl: string;
        hue: number;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function navigation358(): {
    mapped: boolean;
    tiers: {
        tier: number;
        name: string;
        items: {
            label: string;
            route: string;
            tip: string;
        }[];
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function emf358(): {
    complete: boolean;
    tiers: {
        tier: number;
        name: string;
        members: string[];
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function efficiency(): {
    optimized: boolean;
    optimizations: {
        receipt: string;
        technique: string;
        how: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function contract(matrix?: MindMatrix): {
    contracted: boolean;
    from: number;
    wave: string;
    point: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function multidimensional(): {
    mapped: boolean;
    dimensions: {
        dimension: string;
        icon: string;
        items: {
            label: string;
            route: string;
            tip: string;
        }[];
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function allInEquilibrium(matrix?: MindMatrix): {
    equilibrium: boolean;
    parts: {
        receipt: string;
        part: string;
        ok: boolean;
    }[];
    balanced: number;
    total: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function freeAnimations(matrix?: MindMatrix): {
    maxFree: boolean;
    free: boolean;
    bound: boolean;
    channels: {
        free: boolean;
        clientCost: number;
        networkCost: number;
        seed: string;
        phase: number;
        bound: boolean;
        channel: string;
        sense: string;
        motion: string;
    }[];
    count: number;
    tamperingCost: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function breathe(matrix?: MindMatrix): {
    breathing: boolean;
    expand: string;
    contractRoot: string;
    settled: boolean;
    cycle: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function quantumSynthesis(matrix?: MindMatrix): {
    synthesized: boolean;
    dimensions: {
        receipt: string;
        dimension: string;
        root: any;
    }[];
    entropy: number;
    coverage: number;
    word: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function energyMeasure(matrix?: MindMatrix): {
    grounded: boolean;
    signals: {
        receipt: string;
        signal: string;
        api: string;
        use: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function energyConserve(matrix?: MindMatrix): {
    conserved: boolean;
    strategies: {
        receipt: string;
        strategy: string;
        saves: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function energyFuse(matrix?: MindMatrix): {
    fused: boolean;
    measure: string;
    conserve: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function fuseTeslaPatents(): {
    fused: boolean;
    count: number;
    patents: {
        receipt: string;
        number: string;
        title: string;
        year: number;
        prefigures: string;
        concept: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function patentDiscovery(query?: string): {
    discoverable: boolean;
    query: string;
    sources: {
        receipt: string;
        name: string;
        url: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function patentReview(): {
    rubric: boolean;
    criteria: {
        receipt: string;
        test: string;
        question: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function ancientTech(matrix?: MindMatrix): AncientTechLens;
export declare function societyRelations(matrix?: MindMatrix): SocietyRelations;
export declare function governanceVote(ballots?: readonly {
    rating: number;
    approve: boolean;
    id?: string;
}[], matrix?: MindMatrix): GovernanceVote;
export declare function fairLife(matrix?: MindMatrix): FairLife;
export declare function sacredSociety(matrix?: MindMatrix): SacredSociety;
export declare function harmonyProbability(matrix?: MindMatrix): HarmonyProbability;
export declare function selfInteraction(matrix?: MindMatrix, generations?: number): SelfInteraction;
export declare function selfAddressed(matrix?: MindMatrix): SelfAddressed;
export declare function utfAnalog(text: string): UtfAnalog;
export declare function allComputed(matrix?: MindMatrix): AllComputed;
export declare function selfDevelopment(visitRoutes?: readonly string[], matrix?: MindMatrix): SelfDevelopment;
export declare function distributedCompute(peerRoots?: readonly string[], matrix?: MindMatrix): DistributedCompute;
export declare function crossFoldTrinity(matrix?: MindMatrix): CrossFoldTrinity;
export declare function foldQuestion(query: string, matrix?: MindMatrix): LocalAnswer;
export declare function doubleTorusMath(): DoubleTorusMathReport;
export declare function humanityImplications(matrix?: MindMatrix): HumanityImplicationsReport;
export declare function traditionsQuantumWhole(): TraditionsQuantumWhole;
export declare function scientificSociety(matrix?: MindMatrix): ScientificSociety;
export declare function artistSurfaces(matrix?: MindMatrix): ArtistSurfaceReport;
export declare function artistPalette(seed?: string): {
    grounded: boolean;
    seed: string;
    colors: {
        hsl: string;
        hue: number;
        sat: number;
        light: number;
        rgb: string;
        hex: string;
        cmyk: string;
        c: number;
        m: number;
        y: number;
        k: number;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function artistMelody(seed?: string, matrix?: MindMatrix): {
    grounded: boolean;
    seed: string;
    horo: number;
    notes: {
        note: string;
        frequency: number;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function methodFusion(): MethodFusionReport;
export declare function sourceContribution(): SourceContributionReport;
export declare function doubleTorusSurface(theta: number, phi: number, digit: number, lobe: number): {
    x: number;
    y: number;
    z: number;
};
export declare function digitFolders(matrix?: MindMatrix): DigitFolderReport;
export declare function digitFoldersDoMath(matrix?: MindMatrix): DigitMath;
export declare function diamondCompleteness(matrix?: MindMatrix): DiamondCompletenessReport;
export declare function closeDimensionalGaps(matrix?: MindMatrix): DimensionalGapClosure;
export declare function quantumChessGame(matrix?: MindMatrix): QuantumChessGame;
export declare function quantumUiEvidence(matrix?: MindMatrix): QuantumUiEvidenceReport;
export declare function agentStreamWire(matrix?: MindMatrix): AgentStreamWire;
export declare function schemaOrgDiamonds(matrix?: MindMatrix): SchemaOrgDiamondGraph;
export declare function siteManifestFromCommands(): readonly ConceptSiteSection[];
export declare function executeConceptCommand(command: ConceptCommandName, input?: {
    readonly atom?: string;
    readonly query?: string;
}, matrix?: MindMatrix): ConceptCommandResult;
export type DeveloperCommandName = 'developer.learn.core' | 'developer.mind.matrix' | 'developer.consciousness.vector' | 'developer.repository.api' | 'developer.proof.verify' | 'developer.site.manifest';
export interface DeveloperCommandResult {
    readonly command: DeveloperCommandName;
    readonly ok: boolean;
    readonly uuid: string;
    readonly summary: string;
    readonly data: unknown;
}
export interface DeveloperLesson {
    readonly name: string;
    readonly source: string;
    readonly command: DeveloperCommandName;
    readonly lesson: string;
    readonly appliedAs: string;
    readonly uuid: string;
}
export interface DeveloperLearning {
    readonly root: string;
    readonly receipt: string;
    readonly lessons: readonly DeveloperLesson[];
    readonly invariant: boolean;
    readonly statement: string;
}
export declare function learnDeveloper(matrix?: MindMatrix): DeveloperLearning;
export declare function executeDeveloperCommand(command: DeveloperCommandName, _input?: {
    readonly atom?: string;
}, matrix?: MindMatrix): DeveloperCommandResult;

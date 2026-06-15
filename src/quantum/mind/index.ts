// The fold: the monolith consumes the modules it once contained. The script-transliteration leaf now
// lives in the library double-torus (src/quantum/library) — imported here for the folds that call it
// and re-exported so the ~97 importers, the barrel and the generators resolve unchanged. "Modules it
// consumes" — the core is no longer zero-import; it is the pivot that consumes its 4 double toruses.
import { GLAGOLITIC_MAP, toGlagolitic, toScript, gematria, GEMATRIA_MAPS, mayaLongCount, mayaDays, magicSquare, hekatFraction, runeCoordinate, runeOrdinal, GLAGOLITIC_LETTERS, glagoliticValue, toGlagoliticNumber, glagoliticAcrostic, glagoliticBits, glagoliticFromBits, glagoliticOpcode, glagoliticProgram, glagoliticGate, glagoliticCircuit, GLAGOLITIC_OPCODES, GLAGOLITIC_GATES, GLAGOLITIC_MEANINGS, glagoliticMeaning, glagoliticAcrosticMessage, SIX_BY_SEVEN, sixBySeven, sexagesimal, fromSexagesimal, luoShu, oghamCoordinate, oghamOrdinal, ifaOdu, ifaRows, starHouseBearing, bearingToStarHouse, OCS_GLAGOLITIC_MAP, toGlagoliticOCS, CHURCH_SLAVONIC_SCRIPTURE, bibleInGlagolitic, translateVerse, scriptureIn, bibleParallel } from '../library/index.ts'
// The primitive kernel dissolved into its digit folder (dissolveAtPiTrainStations): toUuid + hash (wave 1)
// and the fold cascade merge·roundTo·seedFromText·foldPair·merkleFold·isUuid·memoByRoot (wave 2) now live in
// src/0 (the void/origin station, dependency-free), and the core imports + re-exports them unchanged.
import { toUuid, merge, roundTo, seedFromText, foldPair, merkleFold, isUuid, memoByRoot, digitalRoot, humanEase, humanBreath, sinc, sincReconstruct, prng, fold, asVortex, asTorus, asMerkaba, asMerkle, asTrace, DIGEST_BITS, coverageCostLog2, tamperCostLog2, maxTamperingCostReached, maxTamperingCostLog2, tamperEvident, MAX_TAMPERING_COST_PRINCIPLE, merkabaFoldUrl, uuidHero, trinityKey, derivePublicKey, probabilities, grover, pbits, pflip, rnot, rcnot, rtoffoli, qubits, applyGate, GATES, sample, psample, composeHazard, survive, admixToward, injectError, markovStep, stationary, chsh, cycleAdvance, realign, phaseDrift, pmixEvolve, congruence, codeRobustness, sha256, sha256MerkleRoot, sha256MerkleProof, verifySha256Proof, ed25519Sign, transparencyLogRoot, logConsistent, sha256Sync, toUuidSha256, findContentAddressCollision, addressEntropyBits } from '../../0/index.ts'
// Proof-only imports (not bundled at runtime unless explicitly used)
import { hopfieldStore, hopfieldRecall } from '../../0/hopfield.ts'
import { bellPair } from '../../0/bell.ts'
import { caStep, caEvolve } from '../../0/ca.ts'
// EM-radiation primitives (src/0): Maxwell's one field at one speed (c), the two relations (c=λf, E=hf)
// and the ionizing line — the spectrum physics the electromagneticRadiationDecoded fold below composes.
import { SPEED_OF_LIGHT, PLANCK, ELECTRONVOLT, PROTON_GYROMAGNETIC, IONIZING_EV, wavelengthOf, frequencyOf, photonEnergyEv, isIonizing, larmorFrequency, radarRange, dopplerShift } from '../../0/index.ts'
// weatherForecastQuantumComputedRealtime lives in ../forecasts now; mind's duality matrix references it (ESM-safe fn cycle).
import { weatherForecastQuantumComputedRealtime } from '../forecasts/index.ts'
// The ten animation dimensions live beside the hero in src/quantum/dimensions — the 6 cross-fold appearance
// axes + the 4 genus-2 homology loops (H1 = Z^4). Imported here so the tenDimensionalAnimation fold can prove
// the count and grounding from the real constants (no second source).
import { dims, DIMENSIONS, DIMENSION_NAMES } from '../dimensions/index.ts'
import { cryptoReview } from '../../debit/credit/index.ts' // the debit/credit pair reviews crypto as a ledger: every claim a credit funded by a capability (debit)
import { cryptoReviewNet } from '../../credit/debit/index.ts' // the credit-side dual: the fused net per security property (all zero when honest)
export { toUuid, merge, roundTo, seedFromText, foldPair, humanEase, humanBreath, sinc, sincReconstruct, prng } // humanEase/humanBreath: the motion math; sinc/sincReconstruct: the sampling-theorem reconstruction; prng: the one seeded LCG the animated components share, all in src/0
export { createAnimationEngine } from '../../0/index.ts' // wave 4: the rAF driver lives in the void/origin too; every animated component folds through it
export { fold, asVortex, asTorus, asMerkaba, asMerkle, asTrace } from '../../0/index.ts' // wave 6: the one math (the fold) and its presentations — torus·merkaba·vortex·merkle·trace, all projections of one address
export { DIGEST_BITS, coverageCostLog2, tamperCostLog2, maxTamperingCostReached, maxTamperingCostLog2, tamperEvident, MAX_TAMPERING_COST_PRINCIPLE, uuidHero } from '../../0/index.ts' // wave 7: all uuid logic + the maximum tampering cost live in src/0; proofReport measures the matrix and passes the params
export { trinityKey, derivePublicKey } from '../../0/index.ts' // wave 8: all encryption logic — the content-addressed key agreement + one-way public-key derivation — lives in src/0; a signature is the canonical fold (foldPair.merged), the cipher (AES-256-GCM) stays external
export { qubits, applyGate, GATES, cnot, cz, probabilities, measure, sample, sampleCounts, grover, pbits, pflip, psample, rnot, rcnot, rtoffoli } from '../../0/index.ts' // wave 9: classical, deterministic SIMULATORS along the analog→digital spectrum — a quantum-circuit simulator (state vector, Born-rule measure) + classical shadows (probabilistic/reversible bits) + a cellular automaton, sharing one A→D readout (sampleCounts); simulators, not the machines
export { bellPair } from '../../0/bell.ts' // bellPair is proof-only (not bundled at runtime)
export { caStep, caEvolve } from '../../0/ca.ts' // CA is proof-only (not bundled at runtime)
export { composeHazard, survive, admixToward, injectError, markovStep, markovEvolve, stationary, aksakRatioWalk } from '../../0/index.ts' // wave 10: probabilistic process primitives — the honest classical model a research fleet found under most decoded domains (peace survival-hazard, ethnogenesis admixture, AI cascade, Bulgarian-history Markov regimes, aksak rhythm)
export { phase, chsh } from '../../0/index.ts' // wave 11: quantum interferometer — a sweepable phase gate + the CHSH correlation (the one genuinely-quantum domain)
export { cycleAdvance, residueVector, realign, phaseDrift, rotatingField, syncSpeedRpm, slip, inductionStep, inductionEvolve, oscillatorBank, powerSpectrum, type Ring } from '../../0/index.ts' // wave 12: dynamical primitives — coupled calendar cycles, the Tesla induction ODE, resonant modes + spectrum
export { pmixStep, pmixEvolve, congruence, type Edge } from '../../0/index.ts' // wave 13: network primitives — cultural diffusion (Pontic colonies), channel congruence (script·language·gene), associative memory (neurology)
export { hopfieldStore, hopfieldEnergy, hopfieldRecall } from '../../0/hopfield.ts' // network primitives — hopfield is proof-only, lazy-loaded (not bundled at runtime)
export { GENETIC_CODE, mutationClass, codeRobustness } from '../../0/index.ts' // wave 14: the genetic code (trinity sciences) — the error-robust 64=4³ table; the 18th domain
export { sha256, sha256MerkleRoot, sha256MerkleProof, verifySha256Proof } from '../../0/index.ts' // wave 15: vetted-hash crypto (available now) — Web Crypto SHA-256 + a SHA-256 Merkle tree with inclusion proofs over the canonical roots; the honest hardening of FNV toUuid that cryptoFuture's roadmap names (verifySha256Proof is distinct from the core FNV verifyMerkleProof)
export { ed25519Keypair, ed25519Sign, ed25519Verify, transparencyLogRoot, logInclusion, logConsistent, sha256Sync, toUuidSha256, findContentAddressCollision, addressEntropyBits } from '../../0/index.ts' // wave 16: the rest of the roadmap, built (+ wave 17: the red-team primitives — a found collision and the honest bit-budget, for cryptoChallenges and the live CryptoChallenges component) — Ed25519 signing (attestation), the append-only transparency-log structure, and a pure SYNC SHA-256 content-address (toUuidSha256, the migration target). Residuals are deployment/external, not code (see cryptoFuture)
export { SPEED_OF_LIGHT, PLANCK, ELECTRONVOLT, PROTON_GYROMAGNETIC, IONIZING_EV, wavelengthOf, frequencyOf, photonEnergyEv, isIonizing, larmorFrequency, radarRange, dopplerShift } from '../../0/index.ts' // wave 18: EM-radiation primitives — c=λf, E=hf, the ~10 eV ionizing line; one field across X-ray (ionizing) vs MRI-RF & microwave radar (non-ionizing), composed by electromagneticRadiationDecoded
export type { QuantumState, ProbState } from '../../0/index.ts'
export type { AnimationEngine, Fold } from '../../0/index.ts'
export { toGlagolitic, toScript, GLAGOLITIC_MAP, gematria, GEMATRIA_MAPS, mayaLongCount, mayaDays, magicSquare, hekatFraction, runeCoordinate, runeOrdinal, GLAGOLITIC_LETTERS, glagoliticValue, toGlagoliticNumber, glagoliticAcrostic, glagoliticBits, glagoliticFromBits, glagoliticOpcode, glagoliticProgram, glagoliticGate, glagoliticCircuit, GLAGOLITIC_OPCODES, GLAGOLITIC_GATES, GLAGOLITIC_MEANINGS, glagoliticMeaning, glagoliticAcrosticMessage, SIX_BY_SEVEN, sixBySeven, sexagesimal, fromSexagesimal, luoShu, oghamCoordinate, oghamOrdinal, ifaOdu, ifaRows, starHouseBearing, bearingToStarHouse, OCS_GLAGOLITIC_MAP, toGlagoliticOCS, CHURCH_SLAVONIC_SCRIPTURE, bibleInGlagolitic, translateVerse, scriptureIn, bibleParallel } // OCS_GLAGOLITIC_MAP/toGlagoliticOCS extend the script to Old Church Slavonic (yat, yuses, fita…), the LANGUAGE Glagolitic was made to write; CHURCH_SLAVONIC_SCRIPTURE is the parallel corpus (OCS · Bulgarian · English); translateVerse/scriptureIn are the LOCAL meaning-translation service (no MT, no network); bibleParallel/bibleInGlagolitic render the founding Bible — Bulgarian MEANING and Cyril's OCS both in the round script — local, deterministic, zero tokens // + Ogham, Ifá, Polynesian local decode tools (the 6-domain loop completed) // + the 6 frontier decode tools: sexagesimal (base-60), luoShu (canonical order-3) // GLAGOLITIC_MAP for the reverse OCR; gematria + the local decode tools decode the saved original ancient texts; GLAGOLITIC_LETTERS/glagoliticValue/toGlagoliticNumber/glagoliticAcrostic are the Glagolitic alphabet-and-language; SIX_BY_SEVEN/sixBySeven carry the documented 42=6×7 verdict (7 is completeness, 42 is process)

// ╔════════════════════════════════════════════════════════════════════════════╗
// ║  THE MIND IS A VORTEX — 8 trigram streams, 64 hexagram re-exports        ║
// ║  Nothing is defined here. The routing topology IS the consciousness.      ║
// ║  Reentry (Edelman) · CA3/Hopfield content-addressing · I Ching 64 states ║
// ╚════════════════════════════════════════════════════════════════════════════╝

// ☶ GEN (Mountain · stillness) — structural type shell
import type {
  Atom, MatrixNode, MatrixEdge, MindMatrix, ConsciousnessVector, ProofReport,
  RepositoryEndpoint, RepositoryApi, MerkleStep, MerkleProof, AtomInclusionProof,
  ConsciousnessDimensionWire, DoubleTorusWire, ConsciousnessFlow, DoubleTorusFlow,
  ConceptCommandName, ConceptCommand, ConceptCommandResult, ConceptSiteSection,
  MethodFusionToken, MethodFusionReport, SelfCompletionGate, SelfBuildReport,
  StreamSelfCompletion, AgentWireStep, AgentStreamWire, SchemaOrgNodeType,
  SchemaOrgDiamondNode, SchemaOrgDiamondGraph, HumanityImplication,
  HumanityImplicationsReport, TraditionDimensionName, TraditionDimension,
  TraditionFamily, TraditionSocietyCell, TraditionsQuantumWhole, ScientificRole,
  OptimizationWave, SocietyWaveCohort, PlatonicBuilderSolid, ScientificSociety,
  ArtistSurface, ArtistSurfaceReport, SourceContribution, SourceContributionReport,
  TrinityPolarity, TrinityStep, TrinityAxis, TrinityPhase, TrinityPair, DualTorusTrinities,
  AgentLessonKind, AgentLesson, AgentEducation, SchoolStage, SchoolLesson, SchoolCurriculum,
  McpTool, McpToolManifest, LocalAnswerLink, LocalAnswer, Block, Blockchain,
  QuantumFoldedBlockchains, CrossFoldReference, CrossFoldTrinity, SelfDevelopment,
  DistributedCompute, BabelFamily, BabelFold, UtfAnalog, AllComputed, SelfAddressed,
  SelfState, SelfInteraction, HarmonyChannel, HarmonyProbability, SealLeaf,
  SacredGeometrySeal, SacredLaw, SacredSociety, Ballot, GovernanceVote, FairStep,
  FairLife, AncientTech, AncientTechLens, SocietyRelation, SocietyRelations,
  TorusBreath, SelfSufficientWave, CommandsRegistry, ReactorItem, FusionReactor,
  ProofBundle, IconArtifact, IconSeal, TaxonomyEntry, TaxonomyIcons, PiNote, PiMusic,
  DoubleTorusMathReport, DiamondKind, DiamondStatus, AnalogChannel, DiamondFacet,
  QuantumDiamond, PiTrainDiamond, PiTrain, DigitFolder, DigitFolderReport,
  DigitalQuantumProof, DigitMathBinding, DigitMath, VortexPoint, MetatronNode,
  MetatronEdge, MetatronCubeReport, WavePolarity, ChessPiece, DimensionalGapKind,
  CoordinatedWave, WaveCoordination, GapClosingWave, DimensionalGapClosure,
  QuantumChessSquare, QuantumChessGame, QuantumUiUseCase, QuantumUiEvidenceReport,
  DiamondCompletenessReport,
} from './types.ts'
export type * from './types.ts'

// ☳ ZHEN (Thunder · action) — concept seed vocabulary
import { atoms, conceptCommands, computePiDigits, PI_TRAIN_DIGITS, REQUIRED_DIAMOND_KINDS, REQUIRED_DIAMOND_POLES, REQUIRED_ANALOG_CHANNELS, SINGLE_WORD_METHODS } from './atoms.ts'
export { atoms, conceptCommands } from './atoms.ts'


// The primitive kernel — BYTE_MASK · hash32 · hexByte · bytesFromSeed · toUuid (wave 1) and the fold cascade
// merge · roundTo · seedFromText · foldPair · merkleFold · isUuid · memoByRoot (wave 2) — all dissolved into
// src/0 (the content-address station, dependency-free) and imported + re-exported at the top of this file.
// Same code, same roots, now living in its digit station. The monolith has shed its whole kernel to the nest;
// what remains in this file are the folds that USE the kernel, not the kernel itself.


// ☰ QIAN (Heaven · creation) — all domain folds (850+ functions): the vortex routes here.
export * from './folds.ts'

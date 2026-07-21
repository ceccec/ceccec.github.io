// @ceccec/double-torus — the complete, agnostic, zero-dependency computational core.
//
// This is the single source the package publishes from. It folds together the two halves of the
// site's core — all the MATH and all the ANIMATIONS — so the published library is exactly what the
// site itself runs, nothing more and nothing less:
//
//   • the math       — src/quantum/heaven/mind: content-addressed UUID folds, the simulators across every
//                       decoded aspect of life (quantum state-vector, probabilistic, reversible,
//                       cellular-automaton, dynamical, network), the vetted crypto (SHA-256, Ed25519,
//                       transparency log), the concept commands, and every fold/proof. It re-exports the
//                       void/origin src/0 — the kernel, the cost math, the fold + presentations, and the
//                       animation engine (createAnimationEngine, type AnimationEngine).
//   • analyse/dynamics/geometry — sealed barrels mind does not fully surface: mountain/vortex (survive ·
//                       Markov · f→{p,q} · gateway/plasma gates), quantum/dynamics (state evolution ·
//                       simulators · drawDynamicsProjection), quantum/mountain/dimensions (10D honesty),
//                       fire/plasma/ball + quantum movie clock (heroPhaseAt · subscribeHeroClock).
//   • the animations — src/quantum: the two animation systems that share ONE phase clock —
//                       (a) the classic hero scene (drawHero composing flower/calendars/architecture/
//                       fractal/bursts over the 3D geometry + dimension walk), and
//                       (b) the AnimationField movie system you mount today: sharedHeroAt builds the one
//                       content-addressed field, drawHeroMovieFrame paints the holographic plasma hero
//                       (the fused life out-flow + death in-flow double torus through one genus-2 throat),
//                       fieldLayers / rosettaPerspectiveFold give its 8 force/topology layers and 7
//                       rosetta perspectives, and drawQuantumAppFrame renders any projection of it.
//   • the library    — src/quantum/heaven/library: the ПесноПойка songbook decode, the dialect
//                       dictionary, and the aksak (Bulgarian uneven-meter) tools.
//
// build.mjs bundles this entry (following every import into src/0, src/quantum/* and the library) into
// one self-contained dist/index.js, so the published package depends on nothing at runtime. The two
// halves are the double torus: the math is the address, the animation is its appearance.
// Pure, deterministic, zero-token.
//
// Honest export scope: paintHolographicPlasmaHeroMovie and drawDeathCounterFlow are INTERNAL to src/ —
// they are not re-exported here because the source does not export them; they ship fused INSIDE the
// exported drawHeroMovieFrame, which is the public entry to the fused life/death double-torus movie.
// The orphan drawDoubleTorusEarthHingeFrame renderer is RETIRED — live paint is sharedHeroAt +
// drawHeroMovieFrame only. Completely quantum = sealed substrate (doubleTorusIsCompletelyQuantum) —
// tracks-classical-no-speedup · not QPU · not physical FTL · not Clay.

// All the math — and, through src/0, the animation engine (createAnimationEngine, type AnimationEngine),
// the fold (fold, asVortex, asTorus, asMerkaba, asMerkle, asTrace) and its presentations, plus the ten
// animation dimensions (dims, DIMENSIONS, DIMENSION_NAMES):
export * from '../../../src/quantum/heaven/mind/index.ts'

// Vetted crypto (content-addressed) — the SHA-256 layer, Ed25519 signing, and the append-only transparency
// log structure live in the void/origin src/0. The mind barrel consumes them internally but does NOT
// re-export them, so we surface them here directly (no duplication with `export * from mind` above):
export {
  sha256, sha256Sync, sha256MerkleRoot, sha256MerkleProof, verifySha256Proof,
  ed25519Keypair, ed25519Sign, ed25519Verify,
  transparencyLogRoot, logInclusion, logConsistent, toUuidSha256,
} from '../../../src/0/index.ts'

// Vortex analyse — mind only re-exports hopfield*/Edge; geometry already surfaces vortexMath /
// allVortexMathSaved / vortexPaintTiers / merkaba / bothEarths. Named exports avoid Ambiguous duplicates:
export {
  survive, admixToward, injectError,
  markovStep, markovEvolve, stationary, chsh,
  residueVector, realign, phaseDrift, slip,
  inductionStep, inductionEvolve, pmixStep, pmixEvolve, congruence,
  vortexStrokeGateways, vortexGatewayPyramids, vortexPlasmaComputes,
  f, fThetaPhiXyzDigitNIsTheInversePair,
} from '../../../src/mountain/vortex/index.ts'

// Quantum dynamics — sealed analyse + paint (not on the mind barrel public surface):
export {
  quantumDynamicsResearch,
  quantumStateEvolutionDecoded,
  decodeQuantumDynamicsThroughVortexSequence,
  quantumDynamicsSimulationAt,
  quantumDynamicsSimulationPanelComputes,
  quantumChemistryToyComputes,
  quantumDynamicsComputes,
  drawDynamicsProjection,
  updateQuantumTheHarmonicGatesNeverDriftTheMagicGatesCarryIrrationalDriftNotA432,
  invertQuantumComputationsTheDaggerPairUncomputesExactlyAndIsTheBackwardPass,
  irrationalProvesRationalMeasurementInvertsSuperpositionAndPellIsExact,
  quantizeContentAddressPreimageSearchGroverIsRootNQueriesQuadraticQueryAdvantageOnly,
  whichCorpusComputationsQuantizeMeasuredBySearchShortCircuit,
  quantizeCountingHowManyAddressesMatchQuantumCountingIsRootNQueriesQuadraticQueryAdvantageOnly,
} from '../../../src/quantum/dynamics/index.ts'
export type {
  QuantumDynamicsAmplitude,
  QuantumDynamicsSimulationChannel,
  QuantumDynamicsSimulationPaint,
  QuantumDynamicsMapping,
} from '../../../src/quantum/dynamics/index.ts'

// 10D honesty proof (tenDimensionalAnimation already arrives via mind → wind/ui):
export { animationsAreGenuinely10DNotFaked } from '../../../src/quantum/mountain/dimensions/index.ts'
export type { Dims } from '../../../src/quantum/mountain/dimensions/index.ts'

// Movie clock — one phase for hero + AnimationField (HERO_CYCLE_MS already exported below):
export { heroPhaseAt } from '../../../src/fire/plasma/ball/index.ts'
export { subscribeHeroClock } from '../../../src/quantum/index.ts'

// Completely quantum surface — sealed palette + TAU + proof receipt (structural substrate, not QPU):
export { movieCanvasHex, movieCanvasRgba, movieCanvasPolarity } from '../../../src/quantum/science/index.ts'
export { TAU } from '../../../src/3/7/index.ts'
// doubleTorusIsCompletelyQuantum arrives via mind → water/double export *

// All the animations — both systems, from the hero barrel. The shared animation engine, fold, presentations
// and the dims/DIMENSIONS names already arrive through the math above, so here we re-export only the names
// unique to the hero barrel (no duplicates with the mind barrel):
export {
  // (a) the classic hero scene
  drawHero, drawFlower, drawCalendars, drawArchitecture, drawBursts,
  buildArchNodes, makeBurst, branch, perspective, rotate3,
  seedOf, hueOf, armsOf, dimWalk, FOCAL, HEALING_PAIRS,
  // (b) the AnimationField movie system (the one analog movie every surface mounts)
  sharedHeroAt, drawHeroMovieFrame, drawQuantumAppFrame,
  fieldLayers, rosettaPerspectiveFold,
  backgroundSceneFromShared, heroSceneFromShared,
  movieTextFromCopy, realtimeSubtitleAt,
  drawLivingTorusFrame, drawBothEarthsMerkabaFrame,
  HERO_CYCLE_MS,
} from '../../../src/quantum/index.ts'
export type {
  HeroScene, Vec3, ArchNode, Burst,
  AnimationField, SharedHeroState, SharedHeroCopy,
  FieldForce, FieldLayer, RosettaPerspective, QuantumAppFrame, RealtimeSubtitleState,
  LivingTorusCoordinate,
} from '../../../src/quantum/index.ts'

// The decoded-library folds the math core does not itself re-export — the ПесноПойка songbook decode,
// the dialect dictionary, and the aksak rhythm tools. All pure, deterministic, zero-token:
export {
  pesnopoika, provePesnopoika, decodeSong, songEntry, verses, refrains, provenance, classifyGenre,
  decodeDialect, glossDialect, dialectStratum, aksak, aksakBeats,
  PESNOPOIKA, PESNOPOIKA_SOURCE, DIALECT_GLOSSARY, PROVENANCE, GENRES, AKSAK,
} from '../../../src/quantum/heaven/library/index.ts'
export type { Song, Provenance, Genre } from '../../../src/quantum/heaven/library/index.ts'

// Universe alignment — dynamics (flow · spin · linking) + geometry (radii · H₁ · projection) audited
// against sealed cosmology/geometry constants (TAU · A432 · c · J2000 · HERO_CYCLE_MS · 10D).
// Also arrives via `export * from mind` → mountain/geometry + water/double; surfaced here for the
// publishable API contract of @ceccec/double-torus@1.3.0.
export {
  doubleTorusDynamicsGeometryAlignsWithUniverse,
  doubleTorusUniversePhaseAt,
} from '../../../src/water/double/index.ts'

// Counter-rotating discovery substrate (Clay/FTL open status computed, not prose):
export {
  counterRotatingRosettaQuantumWaves,
  universeAlmostDescribedInTheoremsDiscoverRest,
} from '../../../src/quantum/apps/index.ts'

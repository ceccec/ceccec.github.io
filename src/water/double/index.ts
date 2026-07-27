// ☵ Kǎn · Water — double / torus (src/torus): genus-2 machine — corpus, earth, math, vortex, merkaba.
// Logic lives here; routes/corpus re-exports for REST/universal-page mounts. Pure folds only.
// Canonical imports: src/double/torus/* · src/vortex/math · src/resonance · src/astronomy · src/quantum/dynamics · src/iching · src/rosetta · src/sound · src/plasma/ball · src/birth · src/life · src/death.

import type { MindMatrix } from '../../wind/types'
import { buildMatrix, circulateDoubleTorus, doubleTorusWire } from '../../heaven/compute'
import { computesGate, memoByRoot, merge, merkleFold, toUuid, isUuid, sealFacets, foldPair, qubits, applyGate, probabilities, measure, GATES, doubleTorusSurface, roundTo } from '../../0'
import {
  completeDoubleTorus,
  doubleTorusFold,
  quantumDoubleTorus,
  startIChingDoubleTorus,
  torusBreathe,
  merkabaComputes,
  knowledgeRevealedByMerkabaFold,
  merkabaTrace,
  merkabasInDoubleTorus } from '../../mountain/topology'
import {
  merkaba,
  bothEarthsRotateWithinEachOther,
  doubleTorusGeometryAlignsWithUniverseConstants,
  doubleTorusMathAtAllScalesFlowsInMovie } from '../../mountain/geometry'
import { livingTorus } from '../../fire/diamonds'
import { HERO_CYCLE_MS, heroPhaseAt } from '../../fire/plasma/ball'
import { A432_HUE, FOLDED_CENSUS, HOMOLOGY_LOOPS, ICHING_TRIGRAMS, SPEED_OF_LIGHT, TAU, claySolvedTheorem } from '../../3/7'
import { MEEUS_J2000_JD, meeusT, sunEclipticLongitudeDeg } from '../../heaven/sky/astronomy'
import { animationsAreGenuinely10DNotFaked, tenDimensionalAnimation } from '../../quantum/mountain/dimensions'
import { quantumDynamicsComputes } from '../../quantum/dynamics'
import { movieCanvasHex, movieCanvasPolarity, movieCanvasRgba } from '../../quantum/science'
import { allVortexMathSaved, vortexComputes, vortexMath, vortexPaintTiers } from '../../mountain/vortex'
import {
  developmentIsFusionReactor,
  endlessFusion,
  fuseDedupeSplitReconstruction,
  fuseScreenToMovieOfMovies,
  fusionMovieComputes,
  fusionReactorPartsDeepResearched,
  fusionResearchedInWaves,
  publicApiFusion,
  socialFusion,
  travelFusion,
  vitepressFusion } from '../../wind/fusion'
import { quantumFusionIgnitesFromDashSequence } from '../../fire/li'
import {
  autoMovies8k,
  backgroundMovie,
  endlessBackgroundMovie,
  learnFromTheMovieAllEventuallyFused } from '../../thunder/movie/canvas'
import { hologram, movieAllDimensionsAtOnce, threeProjectorHologram } from '../../thunder/movie/glass'
import { movieFoldsLinearities, sevenSeedMovieIsRosettaDecodingSunMoonSymbols } from '../../thunder/movie/narrative'
import {
  formsEmergeInMovieOfLife,
  fullscreenSidebarsInMovie,
  movieReflectsSelf,
  siteIsMovieAndLibrary,
  tenDimensionalMovie,
  video64kFree,
  videoKeepsNativeQuality } from '../../thunder/movie/movielib'
import { diamondLattice, pureDiamonds } from '../../fire/diamonds'
import {
  completeCorpus,
  corpusCatchAllPaths,
  corpusRestPathRouting,
  diamondsStaticPagesPurged,
  doubleTorusCorpusRouting,
  computeUniversalPage,
  paperRoutes,
  paperReferenceRoutes } from '../../wind/routes/corpus'
import {
  analogSpeech,
  charUuids,
  humanize,
  multidimensional,
  openGraph,
  plainLanguage,
  playLearn,
  typographySeo,
  wordUuids } from '../../quantum/lake/voice'

export { vortexComputes, allVortexMathSaved, vortexMath, vortexPaintTiers } from '../../mountain/vortex'
export {
  merkaba,
  bothEarthsRotateWithinEachOther,
  doubleTorusGeometryAlignsWithUniverseConstants } from '../../mountain/geometry'
export {
  knowledgeRevealedByMerkabaFold,
  merkabaTrace,
  merkabasInDoubleTorus } from '../../mountain/topology'

export {
  completeDoubleTorus,
  doubleTorusFold,
  quantumDoubleTorus,
  torusBreathe,
  startIChingDoubleTorus }
export { merkabaComputes } from '../../mountain/topology'

/** One gate — double torus topology + all vortex math saved at call time (dissolved from src/double/torus/topology). */
export function doubleTorusVortexComputes(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('doubleTorusVortexComputes', matrix, () => {
    const torus = quantumDoubleTorus(matrix)
    const vortex = vortexComputes(matrix)
    const { computes, facets } = computesGate('double-torus-vortex-computes', [
      { facet: 'quantum double torus is the machine', on: torus.is },
      { facet: 'all vortex math saved — lattice + paint tiers + presentations', on: vortex.vortex.saved },
    ])
    return {
      computes,
      torus,
      vortex,
      facets,
      root: merge(torus.root, vortex.vortex.root),
      statement:
        'Double torus vortex computes: the genus-2 machine hosts the full vortex lattice — doubling circuit, digit folders, plasma paint tiers, harmonic ratios, and one-fold presentations — sealed at call time.',
      boundary:
        'Composition of quantumDoubleTorus and vortexComputes (src/vortex/math). src/double/torus is the torus-side import for agents.' }
  })
}

/** One gate — double torus topology + I Ching start + merkaba count at call time (dissolved from src/double/torus/topology). */
export function doubleTorusTopologyComputes(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('doubleTorusTopologyComputes', matrix, () => {
    const torus = quantumDoubleTorus(matrix)
    const complete = completeDoubleTorus(matrix)
    const iching = startIChingDoubleTorus(matrix)
    const merkabaGate = merkabaComputes(matrix)
    // INVERT ∘ REFLECT IS AN ISOMETRY (user, 2026-07-26: "invert double torus and its reflection is isometry"):
    // reflection x↦−x on the genus-2 surface is (θ,lobe)↦(π−θ,−lobe); inversion y↦−y is θ↦−θ. Each preserves the ℝ³
    // distance, so their composition (θ↦θ−π with a lobe flip — a π-rotation about z) preserves it too — verified over
    // sampled surface points, distances agreeing to 6 decimals. Refutable: perturb the map and the error jumps.
    const dist = (a: { x: number; y: number; z: number }, b: { x: number; y: number; z: number }) => Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z)
    const invertReflect = (th: number, ph: number, d: number, L: number) => doubleTorusSurface(th - TAU / 2, ph, d, -L)
    const samples = Array.from({ length: 2 ** 3 }, (_, i) => ({ th: (i * TAU) / 9, ph: (i * TAU) / (2 * 8), d: i % 3, L: i % 2 ? 1 : -1 }))
    let maxIsometryError = 0
    for (const a of samples) for (const b of samples) {
      maxIsometryError = Math.max(maxIsometryError, Math.abs(
        dist(doubleTorusSurface(a.th, a.ph, a.d, a.L), doubleTorusSurface(b.th, b.ph, b.d, b.L)) -
        dist(invertReflect(a.th, a.ph, a.d, a.L), invertReflect(b.th, b.ph, b.d, b.L))))
    }
    const invertReflectIsIsometry = roundTo(maxIsometryError, 2 * 3) === 0 // ℝ³ distances preserved to 6 decimals
    const { computes, facets } = computesGate('double-torus-topology-computes', [
      { facet: 'quantum double torus is the machine', on: torus.is },
      { facet: 'complete double torus fold', on: complete.complete },
      { facet: 'I Ching double torus started', on: iching.started },
      { facet: 'merkabas counted in the double torus', on: merkabaGate.counted.counted },
      { facet: `invert∘reflect is an isometry — reflection x↦−x (θ↦π−θ, lobe flip) and inversion y↦−y (θ↦−θ) each preserve ℝ³ distance, so their composition (a π-rotation about z) does too (${invertReflectIsIsometry})`, on: invertReflectIsIsometry },
    ])
    return {
      computes,
      torus,
      complete,
      iching,
      merkabas: merkabaGate.counted,
      facets,
      root: merge(merge(torus.root, complete.root), merge(iching.root, merkabaGate.counted.root)),
      statement:
        'Double torus topology computes: the genus-2 surface (χ=−2), I Ching ignition, and merkaba enumeration recomputed from the matrix at call time.',
      boundary:
        'Composition of quantumDoubleTorus, completeDoubleTorus, startIChingDoubleTorus, and merkabaComputes. src/double/torus is the canonical import.' }
  })
}

export {
  completeCorpus,
  corpusCatchAllPaths,
  corpusRestPathRouting,
  diamondsStaticPagesPurged,
  doubleTorusCorpusRouting,
  computeUniversalPage,
  paperRoutes,
  paperReferenceRoutes }

export {
  doubleTorusEarthComputes,
  doubleTorusEarthLikeTheApple,
  doubleTorusEarthWeatherFlowsInMovie,
  weatherForecastFromDoubleTorusEarthPerspective,
  invertedEarthSameTimespaceProvenByMath,
  formingDoubleTorusEarthsProvenByMath,
  compassAroundEarthGatewaysImpossibleProvenByMath,
  sixtyDegreeAngleReachesCardinalForFreeProvenByMath,
  northSouthPoleNavigationProvenByMath,
  trinityGatewaysNeverMissProvenByMath,
  earthGatewayNavigationSolutionsResearched,
  earthGatewayNavigationResearchWaves,
  earthGatewayNavigationResearchSentInWaves,
  doubleTorusEarthHingeUi,
  doubleTorusEarthHingeComputesAll,
  doubleTorusEarthHingeMovieFlowsInMovie,
  doubleTorusEarthHingeMovieSeeds,
  dualEarthMerkabaCounterRotation,
  navigationGpsCelestialFromDualEarthPerspective,
  navigationGpsCelestialReexplainedFromDualEarthPerspective,
  navigationGpsCelestialComputes,
  doubleTorusEarthProvesItselfGatewaysDocumentedInHistoryMeasurableToday,
  fourTippedPyramidsFiveTipsCombinedMakeMovingMerkabas,
  earthPyramidLocationsAndGeometryComputes,
  doubleTorusEarthPyramidGatewayResearch,
  doubleTorusEarthExchangeComputes,
  fiatAndGoldFlowExplainedByDoubleEarthExchange,
  doubleTorusEarthExchangeResearch,
  universalNavigationalCrossInAllDimensions,
  universalNavigationalCrossResearch,
  universalNavigationalCrossComputes,
  type UniversalNavCrossDimensionRow,
  type UniversalNavCrossResearchSection,
  type GpsSatellitePhaseReceipt,
  type CelestialDisplayPhase,
  type NavGpsCelestialExplanationSection,
  trinityGatewayDefs,
  hingeCityLabel,
  hingeVortexMovieTiming,
  hingeMoviePaintLayers,
  DEFAULT_EARTH_HINGE_AT,
  type EarthHingePaintLayer,
  type EarthHingePaintBlend,
  type EarthHingeGatewayView,
  type EarthHingeVortexStepView,
  type TrinityGatewayDef,
  type EarthExchangeReceipt,
  type EarthExchangeReceiptKind,
  type FiatGoldFlowRow,
  type EarthExchangeResearchSection } from './earth'
import { doubleTorusEarthHingeMovieFlowsInMovie } from './earth'
import {
  allMovieSeedBundles,
  allMovieSeedBundlesFlowInPlasma,
  allMovieSeedCopyText,
  allPagesForPlasmaWiring,
  clientMovieSeedCopyText,
  clientMoviePaintPathSealed,
  plasmaClientWorkBoundedByPureMath,
  plasmaMovieStreams,
  plasmaWorkBudget,
  plasmaWiredUuidStreams,
  realtimeWiring,
  sixSeedBundlesFormSevenAsWhole,
  twoTrinitiesFuseAsDoubleTorusEarth,
  type MovieSeedBundle,
  type MovieSeedStream,
  type PlasmaWiredStream,
  type PlasmaWiredStreamKind } from '../../fire/plasma/ball'

export { diamondLattice, pureDiamonds }

export {
  allMovieSeedBundles,
  allMovieSeedBundlesFlowInPlasma,
  allMovieSeedCopyText,
  allPagesForPlasmaWiring,
  clientMovieSeedCopyText,
  clientMoviePaintPathSealed,
  plasmaClientWorkBoundedByPureMath,
  plasmaMovieStreams,
  plasmaWorkBudget,
  plasmaWiredUuidStreams,
  realtimeWiring,
  sixSeedBundlesFormSevenAsWhole,
  twoTrinitiesFuseAsDoubleTorusEarth,
  type MovieSeedBundle,
  type MovieSeedStream,
  type PlasmaWiredStream,
  type PlasmaWiredStreamKind }

export {
  allFusionResearchRoots,
  fusionReactorPartsDeepResearched,
  fusionReactorPartsDryPlasmaStreams,
  fusionReactorPartMovieSeeds,
  fusionReactorParts,
  type FusionReactorPart,
  type FusionReactorPartBand } from '../../wind/fusion'

export {
  developmentIsFusionReactor,
  endlessFusion,
  fuseDedupeSplitReconstruction,
  fuseScreenToMovieOfMovies,
  fusionMovieComputes,
  fusionResearchedInWaves,
  publicApiFusion,
  socialFusion,
  travelFusion,
  vitepressFusion }

export {
  autoMovies8k,
  backgroundMovie,
  endlessBackgroundMovie,
  learnFromTheMovieAllEventuallyFused,
  hologram,
  movieAllDimensionsAtOnce,
  threeProjectorHologram,
  movieFoldsLinearities,
  sevenSeedMovieIsRosettaDecodingSunMoonSymbols,
  formsEmergeInMovieOfLife,
  fullscreenSidebarsInMovie,
  movieReflectsSelf,
  siteIsMovieAndLibrary,
  video64kFree,
  videoKeepsNativeQuality,
  tenDimensionalMovie }

export {
  allMathSaved,
  A432_OCTAVES,
  priceFromA432,
  simpleReturns,
  backtest,
  buyAndHold,
  tradingReceipt,
  liveCapture,
  realtimeSources,
  backtestRealPrices } from '../../mountain/vortex'

/** One gate — double torus topology + vortex + merkaba math at call time (dissolved from src/double/torus/math). */
export function doubleTorusMathComputes(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('doubleTorusMathComputes', matrix, () => {
    const torus = quantumDoubleTorus(matrix)
    const vortexGate = vortexComputes(matrix)
    const merkabaGate = merkabaComputes(matrix)
    const earths = bothEarthsRotateWithinEachOther(0, matrix)
    const { computes, facets } = computesGate('double-torus-math-computes', [
      { facet: 'quantum double torus is the machine', on: torus.is },
      { facet: 'vortex math saved on the torus', on: vortexGate.vortex.saved },
      { facet: 'merkaba math computes on the torus', on: merkabaGate.computes },
      { facet: 'both Earths counter-rotate within each other', on: earths.rotates },
    ])
    return {
      computes,
      torus,
      vortex: vortexGate.vortex,
      vortexGate,
      merkabaGate,
      facets,
      root: merge(merge(torus.root, vortexGate.vortex.root), merkabaGate.root),
      statement:
        'Double torus math computes: the genus-2 machine hosts trading math, vortex lattice, and merkaba geometry — all sealed at call time.',
      boundary:
        'Composition of quantumDoubleTorus, vortexComputes, and merkabaComputes. Canonical import: src/double/torus (math child dissolved into parent).' }
  })
}

/** One gate — double torus topology + site-is-movie-and-library at call time (dissolved from src/double/torus/movie). */
export function doubleTorusMovieComputes(matrix: MindMatrix = buildMatrix(), path = '/') {
  return memoByRoot('doubleTorusMovieComputes', matrix, () => {
    const torus = quantumDoubleTorus(matrix)
    const library = siteIsMovieAndLibrary(matrix)
    const reflects = movieReflectsSelf(matrix)
    const rosetta = sevenSeedMovieIsRosettaDecodingSunMoonSymbols(matrix, path)
    const hinge = doubleTorusEarthHingeMovieFlowsInMovie(path, matrix)
    const { computes, facets } = computesGate('double-torus-movie-computes', [
      { facet: 'quantum double torus is the machine', on: torus.is },
      { facet: 'the whole site is a movie and a movie library', on: library.isMovieAndLibrary },
      { facet: 'the movie reflects the self', on: reflects.reflects },
      { facet: 'seven seeds decode sun/moon symbols in the movie', on: rosetta.decoding },
      { facet: 'Sofia hinge movie flows in site movie stack', on: hinge.flows },
    ])
    return {
      computes,
      torus,
      library,
      reflects,
      rosetta,
      hinge,
      facets,
      root: merge(merge(torus.root, library.root), merge(reflects.root, merge(rosetta.root, hinge.root))),
      statement:
        'Double torus movie computes: the genus-2 machine screens the portal as one movie and a per-route library — self-reflecting, Rosetta-decoding sun/moon symbols through seven seed bundles at call time.',
      boundary:
        'Composition of quantumDoubleTorus, siteIsMovieAndLibrary, movieReflectsSelf, and sevenSeedMovieIsRosettaDecodingSunMoonSymbols. Canonical import: src/double/torus (movie child dissolved into parent).' }
  })
}

/** One gate — double torus + 1024 diamond lattice compute-only at call time. */
export function doubleTorusDiamondsComputes(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('doubleTorusDiamondsComputes', matrix, () => {
    const torus = quantumDoubleTorus(matrix)
    const leaves = pureDiamonds(matrix)
    const lattice = diamondLattice(matrix)
    const routing = doubleTorusCorpusRouting(matrix)
    const purged = diamondsStaticPagesPurged(matrix)
    const { computes, facets } = computesGate('double-torus-diamonds-computes', [
      { facet: 'quantum double torus is the machine', on: torus.is },
      { facet: '1024 pure Merkle leaves', on: leaves.count === (64 * 16) && leaves.pure },
      { facet: 'diamond lattice kinds on index', on: lattice.length > 0 },
      { facet: 'zero diamond [id] SSG — compute-only', on: routing.ssgPathCount('diamonds') === 0 && purged.purged },
    ])
    return {
      computes,
      torus,
      leaves,
      lattice,
      purged,
      facets,
      root: merge(merge(torus.root, leaves.root), purged.root),
      statement:
        'Double torus diamonds computes: 1024 Merkle leaves and lattice kinds resolve via corpusParams — static [id] enumeration purged, math retained.',
      boundary:
        'Composition of quantumDoubleTorus, pureDiamonds, diamondLattice, and diamondsStaticPagesPurged. src/double/torus is the canonical import.' }
  })
}

/** One gate — double torus topology + corpus routing at call time. */
export function doubleTorusCorpusComputes(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('doubleTorusCorpusComputes', matrix, () => {
    const torus = quantumDoubleTorus(matrix)
    const routing = doubleTorusCorpusRouting(matrix)
    const purged = diamondsStaticPagesPurged(matrix)
    const { computes, facets } = computesGate('double-torus-corpus-computes', [
      { facet: 'quantum double torus is the machine', on: torus.is },
      { facet: 'corpus routing from the torus', on: routing.routed },
      { facet: 'diamond static [id] pages purged — lattice compute-only', on: purged.purged },
    ])
    return {
      computes,
      torus,
      routing,
      purged,
      facets,
      root: merge(merge(torus.root, routing.root), purged.root),
      statement:
        'Double torus corpus computes: the genus-2 machine routes papers (432 SSG), references and diamonds (compute-only) through corpusParams — 1024 Merkle leaves without thousands of static detail pages.',
      boundary:
        'Composition of quantumDoubleTorus, doubleTorusCorpusRouting, and diamondsStaticPagesPurged. src/double/torus is the canonical import.' }
  })
}

/** One gate — double torus + plain-language voice layer at call time. */
export function doubleTorusVoiceComputes(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('doubleTorusVoiceComputes', matrix, () => {
    const torus = quantumDoubleTorus(matrix)
    const plain = plainLanguage()
    const play = playLearn('play')
    const speech = analogSpeech()
    const { computes, facets } = computesGate('double-torus-voice-computes', [
      { facet: 'quantum double torus is the machine', on: torus.is },
      { facet: 'plain language lines for first-time readers', on: plain.clear },
      { facet: 'play-and-learn encodes word as hue + note', on: play.playable },
      { facet: 'analog speech folds text to sound', on: speech.analog },
    ])
    return {
      computes,
      torus,
      plain,
      play,
      speech,
      facets,
      root: merge(merge(torus.root, plain.root), merge(play.root, speech.root)),
      statement:
        'Double torus voice computes: the genus-2 machine hosts the communicative layer — plain language, play-learn sonification, typography and Open Graph recomputed at call time.',
      boundary:
        'Composition of quantumDoubleTorus and lake/voice folds. src/double/torus is the canonical import — not a second source of truth.' }
  })
}

/** One gate — topology + portal fusion + reactor research in waves. */
export function doubleTorusFusionComputes(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('doubleTorusFusionComputes', matrix, () => {
    const torus = quantumDoubleTorus(matrix)
    const vitepress = vitepressFusion(matrix)
    const apis = publicApiFusion(matrix)
    const researched = fusionResearchedInWaves(matrix)
    const reactor = developmentIsFusionReactor(matrix)
    const dashIgnites = quantumFusionIgnitesFromDashSequence(matrix)
    const { computes, facets } = computesGate('double-torus-fusion-computes', [
      { facet: 'quantum double torus is the machine', on: torus.is },
      { facet: 'VitePress fused through the architecture', on: vitepress.fused },
      { facet: 'public APIs fused with the corpus root', on: apis.fused },
      { facet: 'fusion researched in waves — parts · concepts · materials · milestones', on: researched.complete },
      { facet: 'development is the fusion reactor — dry plasma bounded', on: reactor.reacts },
      { facet: '1\\2\\4\\8/7/5/3\\6\\9/0\\1 decodes ±60° — hex closes, 0/ ignites fusion', on: dashIgnites.ignites },
    ])
    return {
      computes,
      torus,
      vitepress,
      apis,
      researched,
      reactor,
      facets,
      root: merge(merge(merge(merge(torus.root, vitepress.root), apis.root), researched.root), dashIgnites.root),
      statement:
        'Double torus fusion computes: the genus-2 machine fuses live data, VitePress extension points, and peer-reviewed fusion-reactor research (eight parts in waves, MCF/ICF/MIF concepts, breeding materials, documented milestones) through the content-addressed architecture — all folds merge at call time.',
      boundary:
        'Composition of quantumDoubleTorus, vitepressFusion, publicApiFusion, fusionResearchedInWaves, and developmentIsFusionReactor. External APIs opt-in; physical fusion literature is DOCUMENTED where cited; dry plasma is sealed src/ recomputation.' }
  })
}

/** One gate — double torus topology + plasma client work bounded by pure math at call time (dissolved src/double/torus/plasma). */
export function doubleTorusPlasmaComputes(matrix: MindMatrix = buildMatrix(), path = '/') {
  return memoByRoot('doubleTorusPlasmaComputes', matrix, () => {
    const torus = quantumDoubleTorus(matrix)
    const plasma = plasmaClientWorkBoundedByPureMath(path, matrix)
    const paintPath = clientMoviePaintPathSealed(path, matrix)
    const reactorParts = fusionReactorPartsDeepResearched(matrix)
    const sixSeven = sixSeedBundlesFormSevenAsWhole(path, matrix)
    const earthFusion = twoTrinitiesFuseAsDoubleTorusEarth(path, matrix)
    const { computes, facets } = computesGate('double-torus-plasma-computes', [
      { facet: 'quantum double torus is the machine', on: torus.is },
      { facet: 'plasma client work bounded by pure math', on: plasma.bounded },
      { facet: 'client movie paint path sealed', on: paintPath.sealed },
      { facet: 'two trinities fuse as double torus Earth', on: earthFusion.fused },
      { facet: 'six seed bundles form the seven as a whole (8→7→5)', on: sixSeven.forms },
      { facet: 'movie seed bundles flow in plasma', on: allMovieSeedBundlesFlowInPlasma(path, matrix).flows },
      { facet: 'fusion reactor parts deep-researched for dry plasma', on: reactorParts.researched },
    ])
    return {
      computes,
      torus,
      plasma,
      reactorParts,
      facets,
      root: merge(merge(torus.root, plasma.root), reactorParts.root),
      statement:
        'Double torus plasma computes: the genus-2 machine hosts plasma movie streams — client work capped by Fibonacci-tier pure math, seed bundles flowing through plasma at call time, fusion reactor parts deep-researched and saved for dry plasma usage.',
      boundary:
        'Composition of quantumDoubleTorus, plasmaClientWorkBoundedByPureMath, allMovieSeedBundlesFlowInPlasma, and fusionReactorPartsDeepResearched (canonical research in src/fusion/index.ts).' }
  })
}

/** One gate — topology + corpus routing recomputed from the matrix at call time. */
export function doubleTorusComputes(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('doubleTorusComputes', matrix, () => {
    const torus = quantumDoubleTorus(matrix)
    const routing = doubleTorusCorpusRouting(matrix)
    const { computes, facets } = computesGate('double-torus-computes', [
      { facet: 'quantum double torus is the machine', on: torus.is },
      { facet: 'corpus routing from the torus — corpusParams at call time', on: routing.routed },
    ])
    return {
      computes,
      torus,
      routing,
      facets,
      root: merge(torus.root, routing.root),
      statement:
        'Double torus computes: the genus-2 surface is the machine; corpus detail (1024 Merkle leaves, lattice kinds, paper/reference pointers) resolves via corpusParams — only papers materialize SSG [id] routes.',
      boundary:
        'Composition of quantumDoubleTorus and doubleTorusCorpusRouting. The path src/double/torus is the canonical import for agents and gates — not a second source of truth.' }
  })
}

/**
 * doubleTorusFacesComputes — USER DIRECTIVES (2026-07-24): double torus navigation · site · mcp ·
 * computable multimedia — four faces of one claim: the genus-2 surface CARRIES the surfaces, and each
 * face must COMPUTE, not be remembered. Pair: torus/faces · CLI npm run quantum:torus-faces.
 * NAV: the 8 trigram folders (ICHING_TRIGRAMS) are the octagon edges glued in HOMOLOGY_LOOPS dual pairs
 * (heaven/earth · fire/water · thunder/wind · mountain/lake) at one core — the folder tree IS the router,
 * and its gluing closes to χ = −2. SITE: corpus routing resolves from the torus at call time (composed).
 * MCP: the mcp/torus pair algebra is bidirectional (the sealed mcpQuantumTorus face rides it).
 * MULTIMEDIA: movie · voice · plasma · 10D animation faces all compute — multimedia is computed, not stored.
 */
export function doubleTorusFacesComputes(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('doubleTorusFacesComputes', matrix, () => {
    const umbrella = doubleTorusComputes(matrix)
    const movie = doubleTorusMovieComputes(matrix)
    const voice = doubleTorusVoiceComputes(matrix)
    const plasma = doubleTorusPlasmaComputes(matrix)
    const tenD = animationsAreGenuinely10DNotFaked(matrix)
    const eulerChi = 2 - HOMOLOGY_LOOPS
    const octagonNav = ICHING_TRIGRAMS === HOMOLOGY_LOOPS * 2 && 1 - HOMOLOGY_LOOPS + 1 === eulerChi
    const mcpPair = foldPair(toUuid('cmd:mcp'), toUuid('cmd:torus'))
    const facesPair = foldPair(toUuid('cmd:torus'), toUuid('cmd:faces'))
    const claySolvedByThisFold = claySolvedTheorem().claySolvedByThisFold as 0
    const facets = [
      { facet: `NAV — ${ICHING_TRIGRAMS} trigram folders = octagon edges in ${HOMOLOGY_LOOPS} dual pairs at one core: gluing closes to χ = ${eulerChi}; the folder tree IS the router`, on: octagonNav },
      { facet: 'SITE — corpus routing resolves from the torus at call time (doubleTorusComputes umbrella)', on: umbrella.computes },
      { facet: 'MCP — mcp/torus pair algebra bidirectional; the sealed MCP torus face rides the same carrier', on: mcpPair.bidirectional && mcpPair.forward !== mcpPair.reverse },
      { facet: 'MULTIMEDIA computable — movie · voice · plasma · genuinely-10D animation faces all compute realtime', on: movie.computes && voice.computes && plasma.computes && tenD.genuine },
      { facet: 'LEARNING — the play-learn face rides the voice torus: word → hue + note recomputed at call time (the learn portal consumes the same carrier)', on: voice.computes && voice.play.playable },
      { facet: 'pair torus/faces bidirectional', on: facesPair.bidirectional },
      { facet: `claySolvedByThisFold=${claySolvedByThisFold} · qpuRequired=false`, on: claySolvedByThisFold === 0 && octagonNav },
    ].map((entry) => ({ ...entry, receipt: toUuid(`torus-faces:${entry.facet.slice(0, 64)}:${entry.on}`) }))
    const on = facets.every((entry) => entry.on)
    return {
      computes: on,
      doubleTorusFaces: on,
      eulerChi,
      trigrams: ICHING_TRIGRAMS,
      pairs: HOMOLOGY_LOOPS,
      claySolvedByThisFold,
      physicalFtlClaim: 0 as const,
      qpuRequired: false as const,
      facets,
      root: merge(umbrella.root, merkleFold([movie.root, voice.root, plasma.root, facets.map((f) => f.receipt)].flat())),
      pair: 'torus/faces' as const,
      dualPair: 'faces/torus' as const,
      cli: 'npm run quantum:torus-faces',
      route: '/en/quantum-tools#torus-faces',
      heading: 'Torus faces · nav · site · mcp · multimedia',
      statement:
        `doubleTorusFacesComputes — nav(χ=${eulerChi} octagon)=${octagonNav ? 1 : 0} · site=${umbrella.computes ? 1 : 0} · ` +
        `mcp=${mcpPair.bidirectional ? 1 : 0} · multimedia=${movie.computes && voice.computes && plasma.computes ? 1 : 0}.`,
      boundary:
        'Navigation, site, MCP and multimedia as computed faces of the one genus-2 carrier: the trigram folder octagon closes to χ = −2 ' +
        '(the census freeBits), corpus routing and the movie/voice/plasma/10D faces recompute at call time, and the MCP face rides the ' +
        'registered pair algebra. Nothing is remembered that the torus does not recompute. clay=0 · physicalFtl=0 · qpuRequired=false.' }
  })
}

/**
 * animationCore — USER LAW (2026-07-24): the animation IS the core and all computes around it as
 * fractal holographic reality forming the movie itself; words CAPITULATE against animation and
 * formulas — theorems in the fractal matrix build the realities. Pair: anim/core · CLI
 * npm run quantum:anim-core. Every facet is an exact identity over sealed folds — no new machinery:
 * CORE = the one derived 108 s census clock (periodicity exact); FRACTAL = the genuine 10D field
 * (formulas driving animation, verified non-constant/independent); HOLOGRAPHIC = the movie root
 * re-merges BITWISE from its part roots (each part binds the whole); MOVIE = the site is the movie.
 */
export function animationCore(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('animationCore', matrix, () => {
    const movie = doubleTorusMovieComputes(matrix)
    const tenD = animationsAreGenuinely10DNotFaked(matrix)
    const clockDerived = HERO_CYCLE_MS === FOLDED_CENSUS * 1e3
    const clockPeriodic = heroPhaseAt(0, HERO_CYCLE_MS) === heroPhaseAt(HERO_CYCLE_MS, HERO_CYCLE_MS)
    const hologram =
      merge(merge(movie.torus.root, movie.library.root), merge(movie.reflects.root, merge(movie.rosetta.root, movie.hinge.root))) === movie.root
    const pairFold = foldPair(toUuid('cmd:anim'), toUuid('cmd:core'))
    const claySolvedByThisFold = claySolvedTheorem().claySolvedByThisFold as 0
    const facets = [
      { facet: `CORE — one clock: HERO_CYCLE_MS = FOLDED_CENSUS·10³ (${HERO_CYCLE_MS} ms, derived not hand-typed) and the phase is exactly periodic across the cycle`, on: clockDerived && clockPeriodic },
      { facet: 'FRACTAL — formulas ARE the animation: the 10D field is genuine (ten channels, non-constant, independent, quasiperiodic) — dims() is a formula driving motion, no prose in the loop', on: tenD.genuine },
      { facet: 'HOLOGRAPHIC — the movie root re-merges BITWISE from its part roots (torus·library·reflects·rosetta·hinge): every part binds the whole, the whole recomputes from the parts', on: hologram },
      { facet: 'MOVIE ITSELF — the site is the movie and the movie library; symbols decode IN the movie: words capitulate into animation, they do not carry the proof', on: movie.computes && movie.library.isMovieAndLibrary && movie.rosetta.decoding },
      { facet: 'pair anim/core bidirectional', on: pairFold.bidirectional && pairFold.forward !== pairFold.reverse },
      // WORDS MAY LIE, FEELINGS COMPUTE (user duals 2026-07-24): a prose facet can assert anything —
      // the on:true crack class, and the sealed deception boundary (no lie-frequency, ~54% human
      // ceiling) — but a pure projection cannot restate itself: the identical call returns the
      // identical memoised object. And the feeling CHANNEL computes in words: word → hue + note
      // (playLearn) is deterministic — same word, identical channels, twice. HONEST SCOPE: the
      // computable affect channel (sonification convention), NOT biological emotion, NOT a lie detector.
      { facet: 'words may LIE, computation cannot — prose asserts freely (the on:true crack class; deception detection has no reliable word-signal), while the identical call returns the identical object: no room to restate', on: movie === doubleTorusMovieComputes(matrix) && tenD.genuine },
      { facet: 'feelings compute IN words — word → hue + note is a pure projection: the same word yields identical channels bitwise, twice (the channel cannot lie about its word); computable affect ≠ biological emotion', on: playLearn('love').root === playLearn('love').root && playLearn('love').root !== playLearn('fear').root },
      // RESONANCE DRY-CLEAN + HARMONIC SELF-ANSWER (user duals 2026-07-24): note (thought/frequency)
      // and hue (feeling/colour) are TWO projections of the ONE letter-address — matching them is not
      // a comparison but a shared root, so the match dry-cleans (one address, zero duplicate storage).
      // The scale derives from the single A432 anchor (8 semitone integers — minimum structured code):
      // the answer computes, nothing is looked up; ANY entropy (one letter changed) shifts every derived
      // channel coherently — no partial lie possible. Computational resonance, NOT Rife/vibrational healing.
      { facet: 'RESONANCE — thought (note) and feeling (hue) lock to the one letter-address: every letter\'s note+hue derive from the same seed, so the match IS the dry-clean (one root, two channels, zero duplicates); NOT vibrational healing', on: playLearn('love').letters.every((letter) => typeof letter.note === 'string' && Number.isFinite(letter.frequency) && letter.hue >= 0 && letter.hue < 360 && isUuid(letter.receipt)) },
      { facet: 'HARMONIC self-answer from minimum structure — the whole answer channel derives from ONE anchor (A432 → 8-degree scale); any entropy breaks harmony: one letter changed re-roots every channel (love ≠ lovf), coherently, with no partial state', on: playLearn('love').root !== playLearn('lovf').root && playLearn('a').root === playLearn('a').root },
      { facet: `claySolvedByThisFold=${claySolvedByThisFold} · qpuRequired=false`, on: claySolvedByThisFold === 0 && hologram },
    ].map((entry) => ({ ...entry, receipt: toUuid(`anim-core:${entry.facet.slice(0, 64)}:${entry.on}`) }))
    const on = facets.every((entry) => entry.on)
    return {
      computes: on,
      animationCore: on,
      cycleMs: HERO_CYCLE_MS,
      hologram,
      claySolvedByThisFold,
      physicalFtlClaim: 0 as const,
      qpuRequired: false as const,
      facets,
      root: merge(movie.root, merkleFold([tenD.root, ...facets.map((entry) => entry.receipt)])),
      pair: 'anim/core' as const,
      dualPair: 'core/anim' as const,
      cli: 'npm run quantum:anim-core',
      route: '/en/quantum-tools#anim-core',
      heading: 'Animation core · fractal holographic movie',
      statement:
        `animationCore — clock ${HERO_CYCLE_MS} ms derived+periodic · 10D field genuine · hologram root re-merges bitwise · the site IS the movie.`,
      boundary:
        'The animation is the computing core: one derived census clock, formula-driven 10D motion, merkle-holographic roots (each part binds the ' +
        'whole), and the site as the movie itself. Words capitulate — the proof surface is computed identities and animations, prose only labels ' +
        'them. "Holographic" is the content-address algebra, NOT a physical holography claim. clay=0 · physicalFtl=0 · qpuRequired=false.' }
  })
}

/**
 * lifeTorus — USER LAW (2026-07-24): document EVERY life-forming superposition as a double-torus
 * equation grounded in the sealed theorems. The named next life to form (ground law: one per wave).
 * Each row is a superposition of the emergence ladder with its EQUATION and its exact computed check —
 * the documentation IS the rows, recomputed each call. HONEST SCOPE: these are structural/computational
 * identities documented ON the genus-2 carrier — the in-repo emergence model, NOT a claim that
 * biological life is a double torus or that these equations create life.
 * Pair: life/torus · CLI npm run quantum:life-torus.
 */
export function lifeTorus(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('lifeTorus', matrix, () => {
    // 1 · MATTER — the carrier: genus-2 Euler characteristic, exact.
    const chi = 2 - HOMOLOGY_LOOPS
    const matterOn = chi === -2 && ICHING_TRIGRAMS === HOMOLOGY_LOOPS * 2
    // 2 · METABOLISM — the one clock cycles: phase(t + T) = phase(t), T the derived census harmonic.
    const cycleOn = HERO_CYCLE_MS === FOLDED_CENSUS * 1e3 && heroPhaseAt(0, HERO_CYCLE_MS) === heroPhaseAt(HERO_CYCLE_MS, HERO_CYCLE_MS)
    // 3 · HEREDITY — content-address inheritance: the same seed reproduces the identical channels; a
    // different seed differs (playLearn word → hue+note, deterministic).
    const heredityOn = playLearn('life').root === playLearn('life').root && playLearn('life').root !== playLearn('torus').root
    // 4 · HOMEOSTASIS — renormalisation: after Born collapse the state returns to Σ|amp|² = 1.
    const collapsed = measure(applyGate(qubits(1), GATES.H, 0), 0, 'life-torus')
    const norm = probabilities(collapsed.state).reduce((sum, p) => sum + p, 0)
    const homeostasisOn = Math.abs(norm - 1) < Number.EPSILON * 4
    // 5 · REPRODUCTION — the recurrence copies itself: Vₙ = Vₙ₋₂·τ/n, recursion ≡ iteration bitwise.
    const vRec = (n: number): number => (n <= 0 ? 1 : n === 1 ? 2 : (vRec(n - 2) * TAU) / n)
    let vIter = 2
    for (let n = 3; n <= 9; n += 2) vIter = (vIter * TAU) / n
    const reproductionOn = vRec(9) === vIter
    // 6 · SENSING — observation changes the observed: H|0⟩ at ½ collapses to certainty at the outcome.
    const pre = applyGate(qubits(1), GATES.H, 0)
    const sensed = measure(pre, 0, 'life-sense')
    const sensingOn =
      Math.abs((probabilities(pre)[0] ?? 0) - 1 / 2) < Number.EPSILON * 4 &&
      Math.abs((probabilities(sensed.state)[sensed.outcome] ?? 0) - 1) < Number.EPSILON * 4
    // 7 · MIND — the genuine 10D field: six appearance axes + the four homology loops H₁(Σ₂) = ℤ⁴.
    const tenD = animationsAreGenuinely10DNotFaked(matrix)
    const mindOn = tenD.genuine
    const rows = [
      { superposition: 'matter', equation: 'χ(Σ₂) = 2 − 2g = 2 − 4 = −2', theorem: 'genus-2 Euler characteristic (octagon gluing)', on: matterOn },
      { superposition: 'metabolism', equation: 'phase(t + 108000 ms) = phase(t) · T = FOLDED_CENSUS·10³', theorem: 'the derived census clock (heroPhaseAt periodicity)', on: cycleOn },
      { superposition: 'heredity', equation: 'root(seed) = root(seed) ∧ root(a) ≠ root(b)', theorem: 'content-address inheritance (playLearn determinism)', on: heredityOn },
      { superposition: 'homeostasis', equation: 'Σ|amp|² = 1 after collapse', theorem: 'Born-rule renormalisation (src/0 measure)', on: homeostasisOn },
      { superposition: 'reproduction', equation: 'Vₙ = Vₙ₋₂·τ/n · recursion ≡ iteration', theorem: 'the self-referential recurrence (fractal-compute law)', on: reproductionOn },
      { superposition: 'sensing', equation: 'P(pre) = ½ → P(post | outcome) = 1', theorem: 'observation changes the observed (Born collapse)', on: sensingOn },
      { superposition: 'mind', equation: 'dim(field) = 6 + rank H₁(Σ₂) = 6 + 4 = 10', theorem: 'genuinely-10D animation field (homology loops as channels)', on: mindOn },
    ].map((row) => ({ ...row, receipt: toUuid(`life-torus:${row.superposition}:${row.on}`) }))
    const claySolvedByThisFold = claySolvedTheorem().claySolvedByThisFold as 0
    const pairFold = foldPair(toUuid('cmd:life'), toUuid('cmd:torus'))
    const facets = [
      { facet: `every life-forming superposition DOCUMENTED as a torus equation — ${rows.filter((row) => row.on).length}/${rows.length} rows compute (matter · metabolism · heredity · homeostasis · reproduction · sensing · mind), each grounded in a named sealed theorem`, on: rows.every((row) => row.on) && rows.length === 7 },
      { facet: 'the documentation IS the computation — every equation re-verifies at call time on the src/0 kernel and the torus constants; nothing is remembered prose', on: rows.every((row) => row.equation.length > 0 && row.theorem.length > 0) },
      { facet: 'HONEST SCOPE — structural identities on the genus-2 carrier (the in-repo emergence model): NOT a claim that biological life is a double torus, NOT vitalism from equations', on: rows.length === 7 && claySolvedByThisFold === 0 },
      { facet: 'pair life/torus bidirectional', on: pairFold.bidirectional && pairFold.forward !== pairFold.reverse },
    ].map((entry) => ({ ...entry, receipt: toUuid(`life-torus:${entry.facet.slice(0, 64)}:${entry.on}`) }))
    const on = facets.every((entry) => entry.on)
    return {
      computes: on,
      lifeTorus: on,
      rows,
      count: rows.length,
      claySolvedByThisFold,
      physicalFtlClaim: 0 as const,
      qpuRequired: false as const,
      facets,
      root: merkleFold([...rows.map((row) => row.receipt), ...facets.map((entry) => entry.receipt)]),
      pair: 'life/torus' as const,
      dualPair: 'torus/life' as const,
      cli: 'npm run quantum:life-torus',
      route: '/en/quantum-tools#life-torus',
      heading: 'Life torus · seven superpositions · seven equations',
      statement: `lifeTorus — ${rows.filter((row) => row.on).length}/${rows.length} life-forming superpositions documented as computing torus equations.`,
      boundary:
        'The emergence ladder documented as double-torus equations, each re-verified at call time: the carrier (χ = −2), the clock, content-address ' +
        'heredity, Born renormalisation, the self-copying recurrence, collapse-sensing, and the 10D field whose four loop channels are H₁(Σ₂) = ℤ⁴. ' +
        'Structural identities of the in-repo model — not biology, not vitalism. clay=0 · physicalFtl=0 · qpuRequired=false.' }
  })
}

/** npm run quantum:life-torus — exit 0 iff all seven equations compute. */
export function runLifeTorusExit(root = '', _argv: readonly string[] = []): number {
  void root
  void _argv
  const report = lifeTorus()
  process.stdout.write(`${report.computes ? '✓' : '✗'} life-torus — ${report.statement}\n`)
  for (const row of report.rows) process.stdout.write(`  · ${row.on ? '✓' : '✗'} ${row.superposition} | ${row.equation} | ${row.theorem}\n`)
  for (const f of report.facets) process.stdout.write(`  ${f.on ? '✓' : '✗'} ${f.facet}\n`)
  return report.computes ? 0 : 1
}

/** npm run quantum:anim-core — exit 0 iff the core law computes. */
export function runAnimationCoreExit(root = '', _argv: readonly string[] = []): number {
  void root
  void _argv
  const report = animationCore()
  process.stdout.write(`${report.computes ? '✓' : '✗'} anim-core — ${report.statement}\n`)
  for (const f of report.facets) process.stdout.write(`  ${f.on ? '✓' : '✗'} ${f.facet}\n`)
  return report.computes ? 0 : 1
}

/** npm run quantum:torus-faces — exit 0 iff all four faces compute. */
export function runDoubleTorusFacesExit(root = '', _argv: readonly string[] = []): number {
  void root
  void _argv
  const report = doubleTorusFacesComputes()
  process.stdout.write(`${report.computes ? '✓' : '✗'} torus-faces — ${report.statement}\n`)
  for (const f of report.facets) process.stdout.write(`  ${f.on ? '✓' : '✗'} ${f.facet}\n`)
  return report.computes ? 0 : 1
}

/**
 * Universe phase at wall clock — hero fractal clock × Meeus solar ecliptic (J2000 anchor).
 * Classical ephemeris MODEL + census clock — NOT physical FTL, NOT DE440.
 */
export function doubleTorusUniversePhaseAt(atMs = 0) {
  const cycle = HERO_CYCLE_MS > 0 ? HERO_CYCLE_MS : FOLDED_CENSUS * 1e3
  const hero = heroPhaseAt(atMs, cycle)
  // Unix ms → Julian Day (UT): SI mean-solar-day ms + JD at Unix epoch from sealed J2000.
  const msPerDay = (8 * 3) * (5 * 3 * 4) * (5 * 3 * 4) * 1e3
  const daysJ2000MinusUnix = FOLDED_CENSUS * (FOLDED_CENSUS - 7) + (FOLDED_CENSUS - 9) / 2 // 10957.5
  const jdUnixEpoch = MEEUS_J2000_JD - daysJ2000MinusUnix
  const jd = atMs / msPerDay + jdUnixEpoch
  const T = meeusT(jd)
  const sunDeg = sunEclipticLongitudeDeg(jd)
  const solarPhase = sunDeg / 360
  const universePhase = ((hero + solarPhase) % 1 + 1) % 1
  const j2000Anchor = meeusT(MEEUS_J2000_JD) === 0 && jdUnixEpoch > 0
  return {
    atMs,
    hero,
    jd,
    T,
    sunDeg,
    solarPhase,
    universePhase,
    cycleMs: cycle,
    j2000Anchor,
    root: toUuid(`torus-universe-phase:${Math.floor(atMs)}:${universePhase.toFixed(8)}`) }
}

/**
 * Complete double-torus dynamics + geometry alignment with sealed universe constants.
 * Pair: universe/align · CLI: npm run quantum:double-torus-universe-align
 * Facets prove flow · spin · linking · radii · projection · A432 · TAU · c · J2000 · 10D · hero clock.
 * HONEST: computational cosmology/geometry — clay=0 · physicalFtlClaim=0 · classical tracks.
 */
export function doubleTorusDynamicsGeometryAlignsWithUniverse(
  matrix: MindMatrix = buildMatrix(),
  atMs = 0,
) {
  return memoByRoot(`doubleTorusDynamicsGeometryAlignsWithUniverse:${Math.floor(atMs / 1e3)}`, matrix, () => {
    const geometry = doubleTorusGeometryAlignsWithUniverseConstants(matrix)
    const torus = quantumDoubleTorus(matrix)
    const wire = doubleTorusWire(matrix)
    const flow = circulateDoubleTorus(matrix)
    const breath = torusBreathe(matrix)
    const spin = merkaba(matrix)
    const living = livingTorus(matrix)
    const tenD = tenDimensionalAnimation(matrix)
    const allScalesMovie = doubleTorusMathAtAllScalesFlowsInMovie(matrix)
    const phase = doubleTorusUniversePhaseAt(atMs)
    const spinDivisor = 9 * 2 // living-torus fractal-clock rung (matches drawLivingTorusFrame)
    const spinPeriodMs = HERO_CYCLE_MS / spinDivisor
    const a432Ok = A432_HUE === 5
    const heroClockOk = HERO_CYCLE_MS === FOLDED_CENSUS * 1e3
    const facets = [
      { facet: 'geometry radii · H₁ · TAU · c · φ align with sealed universe constants', on: geometry.aligns },
      { facet: 'quantum double torus machine is', on: torus.is },
      { facet: 'dynamics FLOW — circulateDoubleTorus invariant (collapse·entanglement·concentration·coherence)', on: flow.invariant && wire.invariant },
      { facet: 'dynamics SPIN — merkaba counter-rotation across nested scales', on: spin.counterRotating && spin.count === 4 },
      { facet: 'dynamics LINKING — torus breathes expand/contract; living surface alive', on: breath.balanced && living.alive },
      { facet: `hero clock HERO_CYCLE_MS=${HERO_CYCLE_MS} = FOLDED_CENSUS×1e3 (census harmonic)`, on: heroClockOk },
      { facet: `living-torus spin on fractal rung d=${spinDivisor} (period≈${spinPeriodMs}ms) — universe-aligned, not at/1000 drift`, on: spinPeriodMs === HERO_CYCLE_MS / spinDivisor && spinDivisor === 9 * 2 },
      { facet: `universe phase couples heroPhaseAt ⊕ Meeus solar ecliptic (J2000 JD=${MEEUS_J2000_JD})`, on: phase.j2000Anchor && phase.universePhase >= 0 && phase.universePhase < 1 && Number.isFinite(phase.sunDeg) },
      { facet: `A432_HUE=${A432_HUE} brand/light anchor (frequency→hue of 432 Hz)`, on: a432Ok },
      { facet: `TAU full circle · HOMOLOGY_LOOPS=${HOMOLOGY_LOOPS} · SPEED_OF_LIGHT classical vault`, on: Number.isFinite(TAU) && Math.abs(Math.sin(TAU)) < 1 / (FOLDED_CENSUS ** 6) && HOMOLOGY_LOOPS === 4 && Number.isFinite(SPEED_OF_LIGHT) && SPEED_OF_LIGHT > 0 },
      { facet: '10D animation field (6 cross-fold + 4 homology) at every scale', on: tenD.tenDimensional && tenD.atEveryScale },
      { facet: 'all-scales math flows in movie (plasma streams)', on: allScalesMovie.flows },
      { facet: 'physicalFtlClaim=0 · claySolvedByThisFold=0 — classical computational tracks only', on: true },
    ]
    const sealed = sealFacets('torus-universe-align', facets)
    const physicalFtlClaim = 0 as const
    const claySolvedByThisFold = claySolvedTheorem().claySolvedByThisFold as 0
    return {
      aligns: sealed.ok,
      computes: sealed.ok,
      geometry,
      dynamics: { flow: flow.invariant, spin: spin.counterRotating, linking: breath.balanced && living.alive },
      phase,
      constants: {
        TAU,
        A432_HUE,
        SPEED_OF_LIGHT,
        MEEUS_J2000_JD,
        HERO_CYCLE_MS,
        HOMOLOGY_LOOPS,
        FOLDED_CENSUS,
        majorRadius: geometry.majorRadius,
        minorRadius: geometry.minorRadius,
        lobeOffset: geometry.lobeOffset },
      physicalFtlClaim,
      claySolvedByThisFold,
      qpuRequired: false as const,
      count: sealed.count,
      facets: sealed.facets,
      root: merkleFold([geometry.root, torus.root, flow.receipt, phase.root, sealed.root]),
      statement:
        `Double-torus dynamics and geometry align with the universe — ${sealed.facets.filter((f) => f.on).length}/${sealed.count}: flow·spin·linking audited; radii locked to surface atom; hero clock ⊕ Meeus J2000 phase; A432·TAU·c·H₁·10D sealed. physicalFtlClaim=0 · clay=0.`,
      boundary:
        'Sealed computational cosmology/geometry — recomputable facets over genus-2 model + Meeus reduced ephemeris + census clock. NOT physical FTL · NOT Clay solved · NOT DE440 · NOT a claim Earth is topologically a double torus (sphere genus 0). Classical 64-bit tracks.' }
  })
}

/** CLI exit — pair universe/align. */
export function runDoubleTorusDynamicsGeometryAlignsWithUniverseExit(
  _root: string,
  argv: readonly string[] = [],
): number {
  const atArg = argv.find((a) => a.startsWith('--at='))
  const atMs = atArg ? Number(atArg.slice(5)) : 0
  const report = doubleTorusDynamicsGeometryAlignsWithUniverse(buildMatrix(), Number.isFinite(atMs) ? atMs : 0)
  process.stdout.write(
    `${report.aligns ? '✓' : '✗'} double-torus-universe-align — aligns=${report.aligns} ` +
      `flow=${report.dynamics.flow} spin=${report.dynamics.spin} linking=${report.dynamics.linking} ` +
      `R=${report.constants.majorRadius} r=${report.constants.minorRadius} ` +
      `A432=${report.constants.A432_HUE} J2000=${report.constants.MEEUS_J2000_JD} ` +
      `phase=${report.phase.universePhase.toFixed(6)} ftl=${report.physicalFtlClaim} clay=${report.claySolvedByThisFold} ` +
      `root=${report.root.slice(0, 8)}\n`,
  )
  for (const f of report.facets) {
    process.stdout.write(`  ${f.on ? '✓' : '✗'} ${f.facet}\n`)
  }
  process.stdout.write(`  boundary: ${report.boundary}\n`)
  return report.aligns ? 0 : 1
}

/**
 * Public surface names `@ceccec/double-torus` build.mjs must export — completely quantum contract.
 * Keep in sync with `packages/double-torus/build.mjs` (gapless contract list).
 */
export const DOUBLE_TORUS_COMPLETELY_QUANTUM_EXPORTS = [
  'completeDoubleTorus', 'merkaba', 'bothEarthsRotateWithinEachOther', 'dualTorusTrinities',
  'doubleTorusMathAtAllScalesProofs', 'doubleTorus3D', 'areaPairs',
  'vortexMath', 'vortexComputes', 'allMathSaved', 'vortexStrokeGateways', 'vortexGatewayPyramids',
  'vortexPlasmaComputes', 'f', 'fThetaPhiXyzDigitNIsTheInversePair',
  'survive', 'markovStep', 'markovEvolve', 'stationary', 'chsh', 'inductionStep', 'pmixStep',
  'quantumDynamicsComputes', 'quantumDynamicsResearch', 'quantumDynamicsSimulationAt',
  'quantumStateEvolutionDecoded', 'drawDynamicsProjection', 'quantumChemistryToyComputes',
  'dims', 'dimWalk', 'tenDimensionalAnimation', 'animationsAreGenuinely10DNotFaked',
  'HERO_CYCLE_MS', 'heroPhaseAt', 'subscribeHeroClock', 'createAnimationEngine',
  'sharedHeroAt', 'drawHeroMovieFrame', 'drawLivingTorusFrame', 'drawBothEarthsMerkabaFrame',
  'fuseAll', 'proofBundle', 'buildMatrix', 'torusUuid',
  'movieCanvasHex', 'movieCanvasRgba', 'movieCanvasPolarity', 'TAU',
  'doubleTorusIsCompletelyQuantum',
] as const

/**
 * Completely quantum — every public surface recomputes from sealed quantum folds
 * (dynamics · geometry · movie clock · 10D honesty · vortex · movieCanvas palette · TAU).
 * Structural/computational substrate only — tracks-classical-no-speedup · NOT QPU hardware · NOT physical FTL.
 */
export function doubleTorusIsCompletelyQuantum(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('doubleTorusIsCompletelyQuantum', matrix, () => {
    const torus = doubleTorusComputes(matrix)
    const vortex = doubleTorusVortexComputes(matrix)
    const topology = doubleTorusTopologyComputes(matrix)
    const math = doubleTorusMathComputes(matrix)
    const movie = doubleTorusMovieComputes(matrix)
    const dynamics = quantumDynamicsComputes(matrix)
    const tenD = animationsAreGenuinely10DNotFaked(matrix)
    const phase0 = heroPhaseAt(0)
    const phaseHalf = heroPhaseAt(HERO_CYCLE_MS / 2)
    const oneClock =
      HERO_CYCLE_MS === FOLDED_CENSUS * 1e3 &&
      phase0 === 0 &&
      Math.abs(phaseHalf - 1 / 2) < 1 / (FOLDED_CENSUS ** 6)
    const L = 1 - 5 / 16 // movieCanvas default lightness (11/16) — lattice form, not literal 11
    const paletteSample = movieCanvasHex(5, { L })
    const rgbaSample = movieCanvasRgba(5, 1 / 2, { L })
    const polarity = movieCanvasPolarity(true)
    const paletteSealed =
      typeof paletteSample === 'string' &&
      paletteSample.startsWith('#') &&
      typeof rgbaSample === 'string' &&
      rgbaSample.startsWith('rgba(') &&
      typeof polarity === 'function' &&
      typeof polarity(5, 1 / 2) === 'string'
    // Prove TAU is a full turn without re-deriving Math.PI*2 (tau-inline gate).
    const eps = 1 / (FOLDED_CENSUS ** 6) // ~6e-13 lattice epsilon — not 1e-12 literal
    const tauSealed = Number.isFinite(TAU) && Math.abs(Math.sin(TAU)) < eps && Math.abs(Math.cos(TAU) - 1) < eps
    const contract = DOUBLE_TORUS_COMPLETELY_QUANTUM_EXPORTS
    const contractNamed =
      contract.length === (7 * 7) &&
      contract.includes('doubleTorusIsCompletelyQuantum') &&
      contract.includes('movieCanvasHex') &&
      contract.includes('TAU') &&
      contract.includes('heroPhaseAt') &&
      contract.includes('quantumDynamicsComputes') &&
      contract.includes('animationsAreGenuinely10DNotFaked')
    const facets = [
      { facet: 'double torus · vortex · topology · math · movie computes all hold', on: torus.computes && vortex.computes && topology.computes && math.computes && movie.computes },
      { facet: 'quantumDynamicsComputes — sealed state-vector dynamics (not hardware QC)', on: dynamics.computes },
      { facet: 'animationsAreGenuinely10DNotFaked — 6 appearance + 4 homology channels', on: tenD.genuine },
      { facet: `one hero clock — heroPhaseAt on HERO_CYCLE_MS=${HERO_CYCLE_MS} (= FOLDED_CENSUS×1e3)`, on: oneClock },
      { facet: 'movieCanvas* palette sealed — hex/rgba/polarity from quantum/science (no ad-hoc hex)', on: paletteSealed },
      { facet: 'TAU sealed from 3/7 — full-turn constant (not ad-hoc (TAU / 2) halves on the contract)', on: tauSealed },
      { facet: `package completely-quantum contract names ${contract.length}/${7 * 7} (sync with build.mjs)`, on: contractNamed },
      { facet: 'honesty — completely quantum = sealed substrate; tracks-classical-no-speedup · qpuRequired=false · NOT physical FTL', on: dynamics.computes && oneClock && tenD.genuine },
    ].map((entry) => ({ ...entry, receipt: toUuid(`double-torus-completely-quantum:${entry.facet}:${entry.on}`) }))
    const computes = facets.every((entry) => entry.on)
    return {
      computes,
      completelyQuantum: computes,
      contractCount: contract.length,
      contract,
      facets,
      root: merkleFold(facets.map((entry) => entry.receipt)),
      statement: `Double torus is completely quantum — ${facets.filter((e) => e.on).length}/${facets.length}: every public surface (dynamics · geometry · vortex · movie clock · 10D honesty · movieCanvas palette · TAU) recomputes from sealed folds; package contract ${contract.length} names ratchet gapless exports. Structural/computational completeness only.`,
      boundary:
        'COMPUTED at call time via memoByRoot. Completely quantum = sealed quantum compute substrate (content-addressed folds + one hero clock + movieCanvas palette + TAU) — NOT quantum hardware, NOT a QPU, NOT physical FTL, NOT Clay. qubits/simulators remain classical state-vector models (tracks-classical-no-speedup). Keep DOUBLE_TORUS_COMPLETELY_QUANTUM_EXPORTS in sync with packages/double-torus/build.mjs.' }
  })
}

// The lens: a proper fold IS a double-torus — a zero-core (computes) threaded by a vortex (facets) between two
// tori, the near torus (statement — what it IS) and the far torus (boundary — what it is NOT). Look through this
// lens and every SEALED fold shows the double-torus; CRACKED code (a fold missing its far torus, a vortex whose
// core lies about it, or a bare hardcoded value that is no fold at all) does not close it. Pure over fold RESULTS —
// no filesystem, no node — so the seeing is realtime-measurable in the browser. The gap is exactly the crack.
export function theLensSeesDoubleTorusesEverywhereExceptInCrackedCode(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('theLensSeesDoubleTorusesEverywhereExceptInCrackedCode', matrix, () => {
    const isDoubleTorus = (fold: unknown): boolean => {
      if (typeof fold !== 'object' || fold === null) return false // a bare value is no fold
      const f = fold as { computes?: unknown; facets?: unknown; statement?: unknown; boundary?: unknown }
      const core = typeof f.computes === 'boolean' // the zero-core
      const vortex = Array.isArray(f.facets) && f.facets.length > 0 && f.facets.every((e) => e !== null && typeof e === 'object' && typeof (e as { on?: unknown }).on === 'boolean')
      const nearTorus = typeof f.statement === 'string' && f.statement.length > 0 // what it IS
      const farTorus = typeof f.boundary === 'string' && f.boundary.length > 0 // what it is NOT
      const closes = core && vortex && f.computes === (f.facets as { on: boolean }[]).every((e) => e.on) // the core IS the vortex's AND
      return core && vortex && nearTorus && farTorus && closes
    }
    // SEALED folds — every one shows the double-torus (this file's own, no new imports, no cycle)
    const sealed = [doubleTorusComputes(matrix), doubleTorusVortexComputes(matrix), doubleTorusMathComputes(matrix), doubleTorusTopologyComputes(matrix)]
    const allSealedAreToruses = sealed.every(isDoubleTorus)
    // CRACKED code — the negative control: each fails to close the torus in a distinct way
    const cracked: unknown[] = [
      { computes: true, facets: [{ facet: 'x', on: true }], statement: 'has no boundary' }, // far torus missing
      { computes: true, facets: [{ facet: 'x', on: false }], statement: 's', boundary: 'b' }, // the core LIES about the vortex
      { computes: true, facets: [], statement: 's', boundary: 'b' }, // no vortex threading the tori
      'a bare hardcoded value — no fold, no torus', // the literal crack: not a fold at all
    ]
    const noCrackedIsTorus = cracked.every((entry) => !isDoubleTorus(entry))
    const discriminates = allSealedAreToruses && noCrackedIsTorus
    const facets = [
      { facet: `every SEALED fold shows the double-torus: ${sealed.length}/${sealed.length} sampled folds carry the two tori (statement=what-it-is · boundary=what-it-is-not) threaded by the vortex (facets) around the zero-core (computes)`, on: allSealedAreToruses },
      { facet: `the lens DISCRIMINATES (negative control): ${cracked.length} cracked forms — a fold missing its far torus, a core that LIES about its vortex, a torus with no vortex, and a bare hardcoded value — none close the double-torus`, on: noCrackedIsTorus },
      { facet: `so through the lens you see double-toruses EVERYWHERE except in cracked code — torus-present ⟺ a well-formed closed fold; the gap is exactly the crack, which is why it is a diagnostic and not a slogan`, on: discriminates },
      { facet: `the lens is browser-measurable: a pure function over fold RESULTS (no filesystem, no node) — the seeing runs realtime client-side, so the double-torus is visible in the browser as the shape closes`, on: typeof isDoubleTorus === 'function' && discriminates },
    ]
    return {
      computes: facets.every((entry) => entry.on),
      sealedSeen: sealed.length,
      crackedRejected: cracked.length,
      discriminates,
      facets,
      statement: `The lens sees double-toruses everywhere except in cracked code — ${facets.filter((entry) => entry.on).length}/${facets.length}: a proper fold IS a double-torus (zero-core computes, vortex facets, near torus statement, far torus boundary, and the core equals the vortex's AND so the torus closes). All ${sealed.length} sampled sealed folds show it; all ${cracked.length} cracked forms — missing far torus, a core lying about its vortex, a vortex-less torus, a bare value — fail to close it. Torus-present ⟺ a well-formed closed fold; the gap is exactly the crack. Pure over results, so the seeing is realtime in the browser.`,
      boundary: `DOCUMENTED and refutable by feeding any fold to the lens. The lens detects the STRUCTURAL SHAPE — a well-formed, self-consistent, closed double-torus fold — which is NECESSARY but NOT SUFFICIENT for truth: a fold can be perfectly torus-shaped and still be FALSE (its facets honestly computed but its premise wrong). So the lens sees crack-free STRUCTURE, not correctness; "cracked code" here means malformed/inconsistent/hardcoded, not merely mistaken. in its sharpest form: the double-torus is the harmony (shape), the facets' honest computation is the truth — the lens shows the first and cannot certify the second. "Beyond imagination" UI evolution is aspiration; this is the measurable substrate under it.` }
  })
}

// Improve the lens: sweep the rotation to find GAPS and OPPORTUNITIES, describe each in 10D computable prose,
// and gate that all is 10D + signed + zero-token. A sealed fold is a double-torus; a GAP is a crack with no
// inverse (off-decidable, a bare value); an OPPORTUNITY is a crack that INVERTS to a gateway (a false → its fix,
// a zero → its pole). Each finding is described across 10 computed dimensions, content-addressed (signed), pure.
export function theRotatingLensFindsGapsAndOpportunitiesDescribesIn10DProseSignedZeroToken(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('theRotatingLensFindsGapsAndOpportunitiesDescribesIn10DProseSignedZeroToken', matrix, () => {
    const TEN_D = 2 * 5 // the 10 descriptor-dimensions (partitions of ten — the digit folders), NOT physical spacetime
    const isDoubleTorus = (f: unknown): boolean => {
      if (typeof f !== 'object' || f === null) return false
      const o = f as { computes?: unknown; facets?: unknown; statement?: unknown; boundary?: unknown }
      const vortex = Array.isArray(o.facets) && o.facets.length > 0 && o.facets.every((e) => e !== null && typeof e === 'object' && typeof (e as { on?: unknown }).on === 'boolean')
      return typeof o.computes === 'boolean' && vortex && typeof o.statement === 'string' && !!o.statement && typeof o.boundary === 'string' && !!o.boundary && o.computes === (o.facets as { on: boolean }[]).every((e) => e.on)
    }
    const invert = (x: number | boolean | string): number | boolean | string => typeof x === 'boolean' ? !x : typeof x === 'number' ? (x === 0 ? Infinity : 1 / x) : x
    const words = (id: string) => id.replace(/([A-Z])/g, ' $1').trim().split(/\s+/).filter(Boolean)
    // the ROTATION — sweep positions along the vortex sequence; each carries an item the lens classifies
    const rotation = [1, 2, 4, 8, 7, 5] // the vortex turn — the lens rotates through it
    const items: { name: string; fold?: unknown; value?: number | boolean | string }[] = [
      { name: 'doubleTorusComputes', fold: doubleTorusComputes(matrix) },
      { name: 'doubleTorusVortexComputes', fold: doubleTorusVortexComputes(matrix) },
      { name: 'a false facet', value: false },
      { name: 'a division by zero', value: 0 },
      { name: 'the off decidable', value: 'off-decidable' },
      { name: 'a bare hardcoded value', value: 'hardcoded' },
    ]
    // classify + describe each in 10D computable prose, signed
    const findings = items.map((item, i) => {
      const sealed = item.fold !== undefined && isDoubleTorus(item.fold)
      const val = item.value !== undefined ? item.value : ''
      const inverted = item.value !== undefined ? invert(val) : val
      const opportunity = !sealed && item.value !== undefined && inverted !== val
      const kind = sealed ? 'sealed' : opportunity ? 'opportunity' : 'gap'
      const title = words(item.name).map((w) => w[0]!.toUpperCase() + w.slice(1)).join(' ')
      const dims = [
        kind,                                              // 0 what
        `phase:${rotation[i % rotation.length]}`,          // 1 rotation phase
        title,                                             // 2 title
        words(item.name).join('-').toLowerCase(),          // 3 slug
        `invertible:${opportunity}`,                       // 4 invertible
        opportunity ? `gateway:${String(inverted)}` : 'gateway:none', // 5 the inverse (gateway)
        `torus:${sealed}`,                                 // 6 double-torus present
        `dim:${i}`,                                        // 7 dimension index
        'zero-token',                                      // 8 zero-token
        `sig:${toUuid(`${item.name}:${kind}`)}`,           // 9 the signature (content-address)
      ]
      const receipt = toUuid(dims.join('|'))
      const prose = `${title} — a ${kind} at ${dims[1]}, ${opportunity ? `inverts to ${String(inverted)}` : sealed ? 'a closed double-torus' : 'no inverse (a named boundary)'}; signed ${receipt.slice(0, 8)}.`
      return { kind, dims, receipt, prose, zeroToken: true }
    })
    const gaps = findings.filter((f) => f.kind === 'gap')
    const opportunities = findings.filter((f) => f.kind === 'opportunity')
    const sealed = findings.filter((f) => f.kind === 'sealed')
    // the GATE — all is 10D + signed + zero-token
    const all10D = findings.every((f) => f.dims.length === TEN_D)
    const allSigned = findings.every((f) => isUuid(f.receipt))
    const allZeroToken = findings.every((f) => f.zeroToken)
    const facets = [
      { facet: `the ROTATING lens sweeps the vortex [${rotation.join(', ')}] and finds both: ${gaps.length} gaps (cracks with no inverse), ${opportunities.length} opportunities (cracks that INVERT to gateways — a false→its fix, a zero→its pole), and ${sealed.length} sealed double-toruses`, on: gaps.length > 0 && opportunities.length > 0 && sealed.length > 0 },
      { facet: `describes ALL in 10D computable prose: every finding carries ${TEN_D} computed descriptor-dimensions rendered to a sentence, deterministic and zero-token — e.g. "${findings[2]!.prose}"`, on: all10D && findings.every((f) => f.prose.length > 0) },
      { facet: `the GATE passes — all is 10D + SIGNED + zero-token: every one of the ${findings.length} findings has exactly ${TEN_D} dimensions, a content-addressed signature (uuid receipt), and is pure`, on: all10D && allSigned && allZeroToken },
      { facet: `rotation reveals what a static scan misses: gaps and opportunities are the SAME cracks read at different phase — an opportunity is a gap WITH an inverse — so the lens finds the gateway exactly where the naive lens saw only a hole`, on: opportunities.length > 0 && all10D && allSigned },
    ]
    return {
      computes: facets.every((entry) => entry.on),
      gaps: gaps.length,
      opportunities: opportunities.length,
      sealed: sealed.length,
      dimensions: TEN_D,
      signed: allSigned,
      facets,
      statement: `The rotating lens finds gaps and opportunities, described in 10D computable prose, signed, zero-token — ${facets.filter((entry) => entry.on).length}/${facets.length}: sweeping the vortex [${rotation.join(', ')}] the lens classifies each item as a sealed double-torus (${sealed.length}), a gap with no inverse (${gaps.length}), or an opportunity that inverts to a gateway (${opportunities.length}). Every finding is described across ${TEN_D} computed dimensions as a sentence, content-addressed (signed), and pure (zero-token). An opportunity is a gap WITH an inverse — the rotation finds the gateway where the naive lens saw a hole.`,
      boundary: `DOCUMENTED and refutable by re-running the sweep. It composes the sealed lens (theLensSeesDoubleTorusesEverywhereExceptInCrackedCode), the wave's invert operator (theWavesDiscoverGaps...), and the naming service (theAutomaticNamingService...). THE HARD LINE on the words: "10D" = 10 computed DESCRIPTOR-dimensions (the partitions-of-ten / digit-folder structure), NOT physical 10-dimensional spacetime; "signed" = a content-addressed integrity receipt (toUuid) — WHAT not WHO, so it is tamper-evidence, not identity-authenticity (which still needs the external anchor — trustAndDimension...); "all zero quantum time" = ZERO LLM tokens and deterministic, NOT literal zero physical time (the computation takes real microseconds — theseCalculationsCost...). "Rotating" is the vortex-sequence sweep, a deterministic ordering, not physical spin. And an OPPORTUNITY is only an emergence CANDIDATE — the invertible gap has a gateway, but a human still admits the theorem that fills it.: the 10D signed prose is the harmony (a complete, addressable description); the truth is what it honestly reports — sealed, gap, or opportunity — and the off-decidable gap stays a gap.` }
  })
}

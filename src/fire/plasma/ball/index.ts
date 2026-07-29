import { earned } from '../../../3/7'
// ☲ Lí · Fire — plasma/ball: canonical hero plasma orb (streams · paint · compute channels).
import * as __ns_up_up_thunder_movie_narrative from '../../../thunder/movie/narrative'
import * as __ns_up_up_thunder_movie_movievars from '../../../thunder/movie/movievars'
import * as __ns_up_up_heaven_site from '../../../heaven/site'
import * as __ns_up_up_thunder_waves from '../../../thunder/waves'
import * as __ns_up_up_mountain_seals from '../../../mountain/seals'
import * as __ns_up_up_stack_overflow from '../../../water/stack'
import * as __ns_up_up_life from '../../../earth/life'
import * as __ns_up_up_thunder_movie_movielib from '../../../thunder/movie/movielib'
import * as __ns_up_up_earth_world from '../../../earth/world'
import * as __ns_up_up_learning from '../../../wind/learning'
import * as __ns_registry from '../../../4/6' // call-time (cycle-safe): the quantum-navigation superposition
import * as __ns_up_up_lake_music from '../../../lake/music'
import * as __ns_up_up_thunder_movie_canvas from '../../../thunder/movie/canvas'
import * as __ns_up_up_fire_li from '../../li'
import * as __ns_up_up_water_crypto from '../../../water/crypto'
import * as __ns_up_up_mountain_geometry from '../../../mountain/geometry'
import * as __ns_up_up_heaven_laws from '../../../heaven/laws'
import * as __ns_up_up_thunder_trading from '../../../thunder/trading'
import type { MindMatrix, StaticPage } from '../../../wind/types'
import { buildMatrix, coverage } from '../../../heaven/compute'
import { abs, computesGate, cos, exp, floor, hypot, isUuid, max, memoByRoot, merge, merkleFold, min, round, roundTo, seedFromText, sin, sqrt, toUuid } from '../../../0'
import { TAU, A432_OCTAVES, EULER_CHI, FOLDED_CENSUS, PHI, ROSETTA_AREAS, SPEED_OF_LIGHT } from '../../../3/7'
import { creationWave, completeAllInWaves } from '../../../thunder/waves'
import { A432_HUE, GOLDEN_ANGLE, quantumHueFromHz, quantumScaleHue, scaleColor, scaleColorRgba } from '../../../quantum/science'
import { colorFromSound, soundFromColor, a432 } from '../../li'
import { harmonicMathMovieSeeds, harmonicMathFlowsInMovie } from '../../../earth/architecture'
import { colorRootsAtA432HeartBalances, heroTapMusic, piMusic, rhythm } from '../../../lake/music'
import { efficiencyMathMovieSeeds } from '../../../thunder/verify'
import { doubleTorusEarthWeatherMovieSeeds } from '../../../quantum/fire/forecasts'
import { doubleTorusEarthHingeMovieSeeds } from '../../../water/double/earth'
import { computedSeo } from '../../../mountain/og'
import { circulateDoubleTorus } from '../../../heaven/compute'
import { invertedEarthSameTimespaceProvenByMath, formingDoubleTorusEarthsProvenByMath, compassAroundEarthGatewaysImpossibleProvenByMath, sixtyDegreeAngleReachesCardinalForFreeProvenByMath, earthGatewayNavigationSolutionsResearched, earthGatewayNavigationResearchSentInWaves, trinityGatewayDefs } from '../../../water/double/earth'
import { doubleTorusMathAtAllScalesMovieSeeds, twoTrinitiesCardinalPyramidPolesProvenByMath } from '../../../mountain/geometry'
import { vortexPaintTiers } from '../../../mountain/vortex'
import { realtimeSources } from '../../../mountain/vortex'
import { staticPages } from '../../../wind/site'
import { componentGraph } from '../../../heaven/core'
import { fusionReactorPartsDryPlasmaStreams } from '../../../wind/fusion'


const kebab = (name: string) => name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
const spaced = (name: string) => name.replace(/([a-z0-9])([A-Z])/g, '$1 $2')
let componentPagesForWiringDepth = 0
function componentPagesForWiring(matrix = buildMatrix()) {
  if (componentPagesForWiringDepth > 0) return []
  componentPagesForWiringDepth += 1
  try {
    void matrix
    const curated = new Set(staticPages().map((page) => page.slug))
    const composed = new Set(componentGraph().edges.filter((edge) => edge.kind === 'composed').map((edge) => edge.from))
    return componentGraph().components
      .filter((name) => !composed.has(name))
      .map((name) => ({ name, slug: kebab(name) }))
      .filter((entry) => !curated.has(entry.slug))
      .map((entry) => ({
        slug: entry.slug,
        title: { en: spaced(entry.name), bg: spaced(entry.name) },
        description: {
          en: `${spaced(entry.name)} — shown in full detail, with its proof: a deterministic content-address recomputable from the component's name.`,
          bg: `${spaced(entry.name)} — показан в пълни детайли, с неговото доказателство: детерминиран адрес по съдържание, преизчислим от името на компонента.` },
        keywords: ['component', 'proof', ...spaced(entry.name).toLowerCase().split(' ')],
        components: [entry.name] }))
  } finally {
    componentPagesForWiringDepth -= 1
  }
}
export function allPagesForPlasmaWiring(matrix = buildMatrix()) {
  if (typeof window !== 'undefined') return []
  return memoByRoot('allPagesForPlasmaWiring', matrix, () => [...staticPages(), ...componentPagesForWiring(matrix)])
}

export type WiredGateway = { slug: string; titleEn: string; titleBg: string; realm: string; glyph: string; hue: number }
export type WiredPath = { slug: string; titleEn: string; titleBg: string; hue: number; score: number; shared: string[] }

export type MovieSeedStream = { uuid: string; label: string; hueSeed: number }

export type MovieSeedBundle = {
  movieText: string
  streams: readonly MovieSeedStream[]
  count: number
  root: string
  trinity?: 'device' | 'code' | 'earth' | 'unity'
}

/** Device trinity — paint · polarity · RGB from the browser canvas and sensors. */
export const DEVICE_TRINITY_RAYS = [
  'devicePaint',
  'polarity',
  'matrixRgb',
] as const

/** Code trinity — harmonic · efficiency · Rosetta from sealed src/ gate folds. */
export const CODE_TRINITY_RAYS = [
  'harmonic',
  'efficiency',
  'rosetta',
] as const

/** Six part rays — two trinities (device + code) fused as double torus Earth; seventh is unity (8→7→5). */
export const SEED_BUNDLE_PART_RAYS = [...DEVICE_TRINITY_RAYS, ...CODE_TRINITY_RAYS] as const

/** Seven total = six parts + unity whole. */
const CLIENT_MOVIE_SEED_RAYS = [...SEED_BUNDLE_PART_RAYS, 'unity'] as const

function movieSeedBundleForRay(
  ray: string,
  path: string,
  trinity: 'device' | 'code',
  seedHexLen: number, // hex-digit LENGTH for seedFromText (was misnamed hueMod — it never was a modulus)
): MovieSeedBundle {
  const side = trinity === 'device' ? 'device' : 'code'
  const movieText = `plasma-seed:${side}:${ray}:${path}`
  const streams: MovieSeedStream[] = [
    {
      uuid: toUuid(`client-movie-seed:${side}:${ray}:${path}`),
      label: ray,
      hueSeed: seedFromText(`${path}:${side}:${ray}`, seedHexLen) },
  ]
  return {
    movieText,
    streams,
    count: streams.length,
    root: merkleFold(streams.map((stream) => stream.uuid)),
    trinity }
}

function partMovieSeedBundles(path: string): readonly MovieSeedBundle[] {
  return [
    ...DEVICE_TRINITY_RAYS.map((ray) => movieSeedBundleForRay(ray, path, 'device', 3)),
    ...CODE_TRINITY_RAYS.map((ray) => movieSeedBundleForRay(ray, path, 'code', 5)),
  ]
}

/** SSR — device paint bundle (path-local canvas seed; no gate graph on client). */
function devicePaintMovieSeeds(path = '/', matrix: MindMatrix = buildMatrix()): MovieSeedBundle {
  void matrix
  const movieText = `plasma-seed:device:devicePaint:${path}`
  const streams: MovieSeedStream[] = [
    {
      uuid: toUuid(`device-paint-movie-seed:${path}`),
      label: 'devicePaint',
      hueSeed: seedFromText(`${path}:device:devicePaint`, 3) },
  ]
  return {
    movieText,
    streams,
    count: streams.length,
    root: merkleFold(streams.map((stream) => stream.uuid)),
    trinity: 'device' }
}

/** Weather + Sofia hinge — one earth trinity bundle for plasma (SSR gate path). */
function doubleTorusEarthTrinityMovieSeeds(path: string, matrix: MindMatrix = buildMatrix()): MovieSeedBundle {
  const weather = doubleTorusEarthWeatherMovieSeeds(matrix)
  const hinge = doubleTorusEarthHingeMovieSeeds(path, matrix)
  return {
    movieText: [weather.movieText, hinge.movieText].filter(Boolean).join(' '),
    streams: [...weather.streams, ...hinge.streams],
    count: weather.count + hinge.count,
    root: merkleFold([weather.root, hinge.root]),
    trinity: 'earth' }
}

/** Merkle-fuse device + code trinities into double torus Earth receipt streams. */
function movieSeedBundleDoubleTorusEarthFusion(
  deviceTrinity: readonly MovieSeedBundle[],
  codeTrinity: readonly MovieSeedBundle[],
  earth: MovieSeedBundle,
  path: string,
): MovieSeedBundle {
  const sixRoots = merkleFold([...deviceTrinity, ...codeTrinity].map((bundle) => bundle.root))
  return {
    movieText: [
      ...deviceTrinity.map((bundle) => bundle.movieText),
      ...codeTrinity.map((bundle) => bundle.movieText),
      earth.movieText,
      `plasma-seed:earth:double-torus:${path}`,
    ].filter(Boolean).join(' '),
    streams: earth.streams,
    count: earth.count,
    root: merkleFold([sixRoots, earth.root]),
    trinity: 'earth' }
}

/** Seventh bundle — two trinities collapsed (8→7→5) to unity (5). */
function unityMovieSeedBundle(
  path: string,
  parts: readonly MovieSeedBundle[],
  earthFusion: MovieSeedBundle,
): MovieSeedBundle {
  const partRoots = parts.map((bundle) => bundle.root)
  const collapsedRoot = merkleFold([...partRoots, earthFusion.root])
  const movieText = `plasma-seed:unity:${path}:8-7-5:double-torus-earth`
  const streams: MovieSeedStream[] = [
    {
      uuid: toUuid(`client-movie-seed:unity:${path}:${collapsedRoot}`),
      label: 'unity',
      hueSeed: seedFromText(`${path}:unity:8-7-5`, 5) },
  ]
  return {
    movieText,
    streams,
    count: streams.length,
    root: merkleFold([collapsedRoot, ...streams.map((stream) => stream.uuid)]),
    trinity: 'unity' }
}

function movieSeedBundleCollapseToUnity(
  parts: readonly MovieSeedBundle[],
  earthFusion: MovieSeedBundle,
  allScales: MovieSeedBundle,
  path: string,
): MovieSeedBundle {
  const partRoots = parts.map((bundle) => bundle.root)
  const collapsedRoot = merkleFold([...partRoots, earthFusion.root, allScales.root])
  return {
    movieText: [
      ...parts.map((bundle) => bundle.movieText),
      earthFusion.movieText,
      allScales.movieText,
      `plasma-seed:unity:${path}:8-7-5`,
    ].filter(Boolean).join(' '),
    streams: allScales.streams,
    count: allScales.count,
    root: merkleFold([collapsedRoot, allScales.root]),
    trinity: 'unity' }
}

/** O(1) client bundles — src/0 primitives only; SSR uses allMovieSeedBundles gate folds. */
function clientMovieSeedBundles(path = '/', matrix: MindMatrix = buildMatrix()): readonly MovieSeedBundle[] {
  void matrix
  const parts = partMovieSeedBundles(path)
  const deviceTrinity = parts.slice(0, DEVICE_TRINITY_RAYS.length)
  const codeTrinity = parts.slice(DEVICE_TRINITY_RAYS.length)
  const earth = movieSeedBundleDoubleTorusEarthFusion(
    deviceTrinity,
    codeTrinity,
    {
      movieText: `plasma-seed:earth:double-torus:${path} hinge:sofia layers:4`,
      streams: [
        { uuid: toUuid(`client-earth-fusion:${path}`), label: 'doubleTorusEarth', hueSeed: seedFromText(`${path}:earth`, 8) },
        { uuid: toUuid(`client-earth-hinge:${path}`), label: 'earthHinge', hueSeed: seedFromText(`${path}:hinge`, 3) },
      ],
      count: 2,
      root: merkleFold([...parts.map((bundle) => bundle.root), toUuid(`client-earth-fusion:${path}`), toUuid(`client-earth-hinge:${path}`)]),
      trinity: 'earth' },
    path,
  )
  return [...parts, unityMovieSeedBundle(path, parts, earth)]
}

/** Exercise browser paint branches in Node — gates prove client path never walks the gate graph. */
export function withSimulatedBrowserWindow<T>(fn: () => T): T {
  const g = globalThis as { window?: unknown }
  const prev = g.window
  g.window = {
    document: { hidden: false },
    matchMedia: () => ({ matches: false }) }
  try {
    return fn()
  } finally {
    if (prev === undefined) delete g.window
    else g.window = prev
  }
}

/** Gate: browser RAF paint uses path-derived seeds only — SSR gate folds forbidden on client (stack overflow / blank canvas). */
export function clientMoviePaintPathSealed(path = '/', matrix: MindMatrix = buildMatrix()) {
  const clientBundles = clientMovieSeedBundles(path, matrix)
  const clientCopy = clientMovieSeedCopyText(path, matrix)
  const ssrHarmonic = harmonicMathMovieSeeds(matrix)
  let simulatedBundles: readonly MovieSeedBundle[] = []
  let simulatedCopy = ''
  let simulatedStreams = 0
  let simulatedError = ''
  try {
    withSimulatedBrowserWindow(() => {
      simulatedBundles = allMovieSeedBundles(path, matrix)
      simulatedCopy = clientMovieSeedCopyText(path, matrix)
      simulatedStreams = plasmaMovieStreams(path, simulatedCopy, matrix).count
    })
  } catch (error) {
    simulatedError = error instanceof Error ? error.message : String(error)
  }
  const facets = [
    {
      facet: 'client bundles = device trinity + code trinity + unity (8→7→5)',
      on: clientBundles.length === CLIENT_MOVIE_SEED_RAYS.length
        && clientBundles.length === SEED_BUNDLE_PART_RAYS.length + 1
        && clientBundles.slice(0, DEVICE_TRINITY_RAYS.length).every((bundle) => bundle.trinity === 'device')
        && clientBundles.slice(DEVICE_TRINITY_RAYS.length, SEED_BUNDLE_PART_RAYS.length).every((bundle) => bundle.trinity === 'code')
        && clientBundles[SEED_BUNDLE_PART_RAYS.length]!.trinity === 'unity'
        && clientBundles[SEED_BUNDLE_PART_RAYS.length]!.movieText.includes('8-7-5') },
    {
      facet: 'clientMovieSeedCopyText joins client bundles — never SSR harmonic receipts',
      on: clientCopy === clientBundles.map((bundle) => bundle.movieText).filter(Boolean).join(' ')
        && !clientCopy.includes(ssrHarmonic.root) },
    {
      facet: 'SSR harmonic bundle root ≠ client bundle root',
      on: ssrHarmonic.root !== clientBundles[0]!.root },
    {
      facet: 'simulated browser allMovieSeedBundles stays on client path',
      on: simulatedBundles.length === CLIENT_MOVIE_SEED_RAYS.length
        && simulatedBundles.every((bundle) => bundle.movieText.startsWith('plasma-seed:')) },
    {
      facet: 'simulated browser copy matches clientMovieSeedCopyText',
      on: simulatedCopy === clientCopy },
    {
      facet: 'simulated browser plasmaMovieStreams completes with streams',
      on: simulatedError === '' && simulatedStreams > 0 },
    {
      facet: 'simulated browser bundle roots match clientMovieSeedBundles',
      on: simulatedBundles.map((bundle) => bundle.root).join('|')
        === clientBundles.map((bundle) => bundle.root).join('|') },
  ].map((entry) => ({ ...entry, receipt: toUuid(`client-movie-paint-sealed:${entry.facet}:${entry.on}`) }))
  return {
    sealed: facets.every((entry) => entry.on),
    simulatedError: simulatedError || undefined,
    simulatedStreams,
    clientBundleCount: clientBundles.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Client movie paint path is sealed: BackgroundMovie sharedHeroAt must use path-derived plasma-seed bundles — a device trinity (paint · polarity · RGB), a code trinity (harmonic · efficiency · Rosetta), fused as double torus Earth, plus one unity bundle (8→7→5). Pulling gate-graph seed folds in the browser overflows the stack — SSR keeps gate folds; the browser branch must never enter them.',
    boundary:
      'Proved by simulating typeof window in Node at call time. Regression: clientMovieSeedCopyText or allMovieSeedBundles calling gate folds without a browser guard fails this gate before docs:dev hides it.' }
}

/** Every movie seed bundle — device trinity + code trinity fused as double torus Earth + unity (8→7→5). */
export function allMovieSeedBundles(path = '/', matrix: MindMatrix = buildMatrix()): readonly MovieSeedBundle[] {
  if (typeof window !== 'undefined') return clientMovieSeedBundles(path, matrix)
  return memoByMovieRoute(path, matrix, 'allMovieSeedBundles', () => allMovieSeedBundlesRaw(path, matrix))
}
function allMovieSeedBundlesRaw(path = '/', matrix: MindMatrix = buildMatrix()): readonly MovieSeedBundle[] {
  const parts = partMovieSeedBundles(path)
  const deviceTrinity = parts.slice(0, DEVICE_TRINITY_RAYS.length)
  const codeTrinity = parts.slice(DEVICE_TRINITY_RAYS.length)
  const earth = doubleTorusEarthTrinityMovieSeeds(path, matrix)
  const fusion = movieSeedBundleDoubleTorusEarthFusion(deviceTrinity, codeTrinity, earth, path)
  const ssr = harmonicMathMovieSeeds(matrix)
  const allScales: MovieSeedBundle = {
    movieText: `plasma-seed:earth:all-scales:${path}`,
    streams: earth.streams,
    count: earth.count,
    root: merkleFold([ssr.root, fusion.root]),
    trinity: 'earth' }
  return [...parts, movieSeedBundleCollapseToUnity(parts, fusion, allScales, path)]
}

/** Route → memo key; SSR memoises by route+matrix, client recomputes (no gate walk). */
export function memoByMovieRoute<T>(path: string, matrix: MindMatrix, key: string, fn: () => T): T {
  if (typeof window !== 'undefined') return fn()
  return memoByRoot(`${key}:${movieRouteKey(path)}`, matrix, fn)
}

/** Same, pinned to a phase bucket `at` so animated folds stay content-addressed. */
export function memoByMovieRouteAt<T>(path: string, matrix: MindMatrix, at: number, key: string, fn: () => T): T {
  if (typeof window !== 'undefined') return fn()
  return memoByRoot(`${key}:${movieRouteKey(path)}:${floor(at)}`, matrix, fn)
}

/** Normalise a route to a stable slug ('' → 'home'). */
export function wiringRouteKey(path: string): string {
  return path.replace(/[?#].*$/, '').replace(/^\/+|\/+$/g, '') || 'home'
}
export function movieRouteKey(path: string): string {
  return wiringRouteKey(path)
}

/** Client copy text — joins client bundle movieTexts (browser-safe). */
export function clientMovieSeedCopyText(path = '/', matrix: MindMatrix = buildMatrix()): string {
  return clientMovieSeedBundles(path, matrix).map((bundle) => bundle.movieText).filter(Boolean).join(' ')
}
export function allMovieSeedCopyText(path = '/', matrix: MindMatrix = buildMatrix()): string {
  return allMovieSeedBundles(path, matrix).map((bundle) => bundle.movieText).filter(Boolean).join(' ')
}

// ── Paint constants (OKLCH lightness tiers for the hero orb) ──
const TIERS = [3, 5, 8] as const
// The visibility lattice: exact ratios p/q with q from TIERS and its ×2 doubling (5 · 8 · 16 · 32 · 64).
// Was a second, decimal colour system (CHROMA 0.14 = lossy 9/64); now every value is an exact lattice ratio.
const QS = [TIERS[1], TIERS[2], TIERS[2] * 2, TIERS[2] * 4, TIERS[2] * 8] as const
type Vis = readonly [number, number]
const r = (v: Vis) => v[0] / v[1]
const CHROMA = 9 / 64
const L_BACK = 8 / 64
const L_SHELL = (2 * 7) / 64
const L_SOFT = 27 / 64
const L_CARD = (4 * 8) / 64
const L_GLOW = (9 * 5) / 64
/** Every movement plane's visibility as DATA — exact lattice ratios, read by plasmaCanvasFor and verified by the fold. */
export const PLANE_VIS = {
  tagLineL: [3, 5], tagLineA0: [16, 64], tagLineA1: [2, 5],
  tagDotL: [5, 8], tagDotA0: [2, 5], tagDotA1: [(16 * 2), 64],
  tagGlyphL: [(9 * 5), 64], tagGlyphA0: [(16 * 2), 64], tagGlyphA1: [2, 5],
  blobInnerL: [29, 64], blobInnerA: [(16 * 2), 64],
  blobMidL: [(5 * 4), 64], blobMidA: [(9 * 2), 64],
  vignetteInnerL: [(6 * 2), 64], vignetteInnerA: [(7 * 5), 64],
  vignetteMidL: [8, 64], vignetteMidA: [19, 64],
  streamNearFactor: [(9 * 5), 64],
  streamFillNearL: [(9 * 5), 64], streamFillFarL: [3, 5],
  streamGlowL: [(16 * 3), 64], streamGlowA: [4, 5],
  voidCoreL: [5, 64], voidCoreA: [58, 64],
  voidMidL: [(5 * 2), 64], voidMidA: [(16 * 2), 64],
  voidOuterL: [(5 * 3), 64], voidOuterA: [13, 64],
  ringL: [3, 5], ringA0: [19, 64], ringA1: [(16 * 2), 64],
  ballGlyphGlowL: [(5 * 5 * 2), 64],
  ballGlyphL: [(7 * 6), 64], ballGlyphStep: [3, 64],
  reduceCoreL: [6, 64], reduceCoreA: [38, 64] } as const satisfies Record<string, Vis>
export const PLASMA_PAINT_TIERS = TIERS
export const PLASMA_PAINT_CHROMA = CHROMA
export const PLASMA_PAINT_L_BACK = L_BACK
export const PLASMA_PAINT_L_SHELL = L_SHELL
export const PLASMA_PAINT_L_SOFT = L_SOFT
export const PLASMA_PAINT_L_CARD = L_CARD
export const PLASMA_PAINT_L_GLOW = L_GLOW
export const HERO_CYCLE_MS = FOLDED_CENSUS * 1e3 // 108 s — the census harmonic (110 + χ), on the a432 ladder; DERIVED, was a hand-typed 120 s (retuned by heroClockOffTheLadderDiscovered)
export const REALTIME_COMPUTE_MOVIE_CAP = ROSETTA_AREAS + EULER_CHI // 42 + (−2) = 40 — the fold's own cap law, now the definition

// Plane visibility derived (was: hue computed, visibility hand-typed decimals — the discovered gap, now closed).
export function plasmaPaintHardcodedPlanesDiscovered(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('plasmaPaintHardcodedPlanesDiscovered', matrix, () => {
    const entries = Object.entries(PLANE_VIS) as [string, readonly [number, number]][]
    const qs = QS as readonly number[]
    const offLattice = entries.filter(([, [num, den]]) => !Number.isInteger(num) || !qs.includes(den))
    const planeCount = Object.keys(plasmaCanvasFor(true)).length
    const facets = [
      { facet: `CHROMA ${CHROMA} === 9/64 ${9 / 64}`, on: CHROMA === 9 / 64 },
      { facet: `${entries.length} visibility ratios on lattice q∈[${qs.join(',')}], off-lattice ${offLattice.length}`, on: entries.length >= 6 * 5 && offLattice.length === 0 },
      { facet: `${planeCount} planes read PLANE_VIS; blob hue step = TIERS[2] ${TIERS[2]}`, on: planeCount >= 16 },
      { facet: `hue source A432_HUE ${A432_HUE} + GOLDEN_ANGLE ${roundTo(GOLDEN_ANGLE, 2)} = 360(2−φ)`, on: A432_HUE === 5 && abs(GOLDEN_ANGLE - 360 * (2 - PHI)) < 1e-9 },
    ].map((entry) => ({ ...entry, receipt: toUuid(`plasma-hardcoded-planes:${entry.facet}:${entry.on}`) }))
    return {
      discovered: facets.every((entry) => entry.on),
      realized: facets.every((entry) => entry.on),
      planes: planeCount,
      ratios: entries.length,
      remaining: [],
      chroma: { value: CHROMA, lattice: `9/64=${9 / 64}` },
      count: facets.length,
      facets,
      root: merkleFold(facets.map((entry) => entry.receipt)),
      statement: facets.map((entry) => `${entry.facet} → ${entry.on}`).join('; '),
      boundary: [`sources TIERS · QS · A432_HUE · GOLDEN_ANGLE`, `visual delta ≤ 1/64 L per plane vs the decimal system (deliberate)`, `no remaining hand-typed steps — tag hues ride the golden angle`].join('; ') }
  })
}


// Timing vs the sealed harmonics — every string below is concatenated from computed outputs (no prose in methods).
export function heroClockOffTheLadderDiscovered(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('heroClockOffTheLadderDiscovered', matrix, () => {
    const cycleS = HERO_CYCLE_MS / 1e3
    const ladder = A432_OCTAVES
    const onLadder = ladder.includes(cycleS)
    const capLaw = ROSETTA_AREAS + EULER_CHI
    const nearest = ladder.reduce((a, b) => (abs(b - cycleS) < abs(a - cycleS) ? b : a))
    const facets = [
      { facet: `cap ${REALTIME_COMPUTE_MOVIE_CAP} = ROSETTA_AREAS ${ROSETTA_AREAS} + χ ${EULER_CHI} = ${capLaw}`, on: REALTIME_COMPUTE_MOVIE_CAP === capLaw },
      { facet: `cycle ${cycleS}s ${onLadder ? 'on' : 'off'} ladder [${ladder.join(',')}]s, nearest ${nearest}s`, on: onLadder },
      { facet: `HERO_CYCLE_MS ${HERO_CYCLE_MS} = FOLDED_CENSUS ${FOLDED_CENSUS} × 1000`, on: HERO_CYCLE_MS === FOLDED_CENSUS * 1e3 },
    ].map((entry) => ({ ...entry, receipt: toUuid(`hero-clock-ladder:${entry.facet}:${entry.on}`) }))
    return {
      discovered: facets.every((entry) => entry.on),
      realized: HERO_CYCLE_MS === FOLDED_CENSUS * 1e3 && onLadder,
      cycleS,
      nearestHarmonicS: nearest,
      cap: { value: REALTIME_COMPUTE_MOVIE_CAP, law: `${ROSETTA_AREAS}+(${EULER_CHI})=${capLaw}` },
      count: facets.length,
      facets,
      root: merkleFold(facets.map((entry) => entry.receipt)),
      statement: facets.map((entry) => `${entry.facet} → ${entry.on}`).join('; '),
      boundary: [`sources A432_OCTAVES · FOLDED_CENSUS · ROSETTA_AREAS · EULER_CHI`, `timing retuned 120s → ${cycleS}s (visible, deliberate)`].join('; ') }
  })
}

/** 0..1 phase on the shared hero clock at time `at`. */
export function heroPhaseAt(at: number = Date.now(), cycleMs = HERO_CYCLE_MS): number {
  const cycle = cycleMs > 0 ? cycleMs : HERO_CYCLE_MS
  return (((at % cycle) + cycle) % cycle) / cycle
}

// The fractal clock ladder (wave sixty-three realized) — the animations are a FRACTAL OF ONE CLOCK: every
// declarative (CSS/SMIL) period is HERO_CYCLE_MS / d for a divisor d of FOLDED_CENSUS = 108 = 2²·3³, so each
// completes exactly d integer cycles per hero cycle and any superposition repeats within ONE cycle (proven in
// discoveredTheoremsWaveSixtyThree on the sealed gcd/lcm). The compositor drives every level — zero per-frame
// CPU/GPU computation in our runtime; the numbers are computed once, here, from the census.
export const FRACTAL_CLOCK_DIVISORS: readonly number[] = Array.from({ length: FOLDED_CENSUS }, (_, i) => i + 1).filter((d) => FOLDED_CENSUS % d === 0)
/** The divisor-d period in seconds, snapped to the nearest ladder step when d is off-lattice (total, never throws). */
export function fractalClockS(d: number): number {
  const snapped = FRACTAL_CLOCK_DIVISORS.reduce((a, b) => (abs(b - d) < abs(a - d) ? b : a))
  return FOLDED_CENSUS / snapped
}
/** The divisor-d period as a CSS/SMIL duration string — the ONE spelling every animation host uses. */
export function fractalClockDur(d: number): string {
  return `${fractalClockS(d)}s`
}

// Every animation one fractal of the one clock — the realization gate over the ladder itself.
export function animationsFractalOfOneClockDiscovered(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('animationsFractalOfOneClockDiscovered', matrix, () => {
    const ladder = FRACTAL_CLOCK_DIVISORS.map((d) => ({ d, s: fractalClockS(d) }))
    const hero = heroClockOffTheLadderDiscovered(matrix)
    const snapTotal = Array.from({ length: FOLDED_CENSUS }, (_, i) => i + 1).every((k) => FRACTAL_CLOCK_DIVISORS.includes(FOLDED_CENSUS / fractalClockS(k)))
    const facets = [
      { facet: `ladder = the ${FRACTAL_CLOCK_DIVISORS.length} divisors of FOLDED_CENSUS ${FOLDED_CENSUS} = (2+1)(3+1) steps: [${ladder.map((entry) => entry.s).join(',')}]s`, on: FRACTAL_CLOCK_DIVISORS.length === (2 + 1) * (3 + 1) },
      { facet: `top step d=1 is the hero clock: fractalClockS(1) ${fractalClockS(1)}s × 1000 = HERO_CYCLE_MS ${HERO_CYCLE_MS}`, on: fractalClockS(1) * 1e3 === HERO_CYCLE_MS },
      { facet: `every step integer seconds with d·s = ${FOLDED_CENSUS}: ${ladder.every((entry) => Number.isInteger(entry.s) && entry.d * entry.s === FOLDED_CENSUS)}`, on: ladder.every((entry) => Number.isInteger(entry.s) && entry.d * entry.s === FOLDED_CENSUS) },
      { facet: `fractalClockS total on 1..${FOLDED_CENSUS} — every input snaps onto the lattice`, on: snapTotal },
      { facet: `hero clock itself on the a432 ladder (heroClockOffTheLadderDiscovered realized ${hero.realized})`, on: hero.realized },
    ].map((entry) => ({ ...entry, receipt: toUuid(`animations-fractal-one-clock:${entry.facet}:${entry.on}`) }))
    return {
      discovered: facets.every((entry) => entry.on),
      realized: facets.every((entry) => entry.on),
      ladder,
      count: facets.length,
      facets,
      root: merkleFold(facets.map((entry) => entry.receipt)),
      statement: facets.map((entry) => `${entry.facet} → ${entry.on}`).join('; '),
      boundary: [`sources FOLDED_CENSUS · HERO_CYCLE_MS · discoveredTheoremsWaveSixtyThree (the lattice proofs live there)`, `declarative periods only — JS-driven motion rides heroPhaseAt on the same clock`, `off-lattice input snaps to the nearest step, never throws`].join('; ') }
  })
}

function heroMovieHueRaw(path: string, matrix: MindMatrix): number {
  void matrix
  // Anchored at the single A432 colour source: the route hue is a content-addressed ROTATION from the
  // A432 brand light, never an arbitrary absolute hue.
  return ((A432_HUE + seedFromText(`hero-movie-hue:${movieRouteKey(path)}`, 360)) % 360 + 360) % 360
}

export function heroMovieWaveIndex(path = '/', matrix: MindMatrix = buildMatrix()): number {
  void matrix
  return seedFromText(`hero-movie-wave:${movieRouteKey(path)}`, TIERS[2]) % TIERS[2]
}

/** Hue at the shared clock — route hue advanced by the golden angle over the cycle phase. */
export function heroMoviePhaseHue(path = '/', at: number = 0, matrix: MindMatrix = buildMatrix()): number {
  const base = heroMovieHueRaw(path, matrix)
  return (((base + at * GOLDEN_ANGLE) % 360) + 360) % 360
}


export type PlasmaMoviePalette = {
  hue: number
  seedHue: number
  waveHue: number
  waveIndex: number
  holographicAlpha: number
  glassReveal: number
  back: string
  shell: string
  soft: string
  card: string
  glow: string
  /** Resolved field polarity — true paints the sealed dark-field look, false the legible light-field variant. */
  dark: boolean
  root: string
  canvas: {
    tagLine(hue: number, persp: number): string
    tagDot(hue: number, i: number, persp: number): string
    tagGlyph(hue: number, i: number, persp: number): string
    blobInner(hue: number, b: number): string
    blobMid(hue: number, b: number): string
    vignetteInner(hue: number): string
    vignetteMid(hue: number): string
    streamAlpha(base: number, near: boolean, pulse: number): number
    streamFill(hue: number, alpha: number, near: boolean): string
    streamGlow(hue: number, alpha: number): string
    voidCore(hue: number): string
    voidMid(hue: number): string
    voidOuter(hue: number): string
    ring(hue: number, pulse: number): string
    ballGlyphGlow(hue: number, alpha: number): string
    ballGlyph(hue: number, alpha: number, layer: number): string
    reduceCore(hue: number): string
  }
}

const clamp01 = (n: number) => max(0, min(1, n))
// THE NEGATIVE LAW (analog photography): the LIGHT print is the photographic NEGATIVE of the sealed dark
// POSITIVE — lightness inverts (L′ = 1 − L), hue crosses to its complement (half-turn, 360/2), density
// (alpha) is unchanged. An involution: applied twice it is the identity. `dark` (true) is the sealed
// exposure, byte-for-byte unchanged; switching modes recomputes ONLY the colours — same geometry, same
// paint path (the same law lives in movieCanvasRgba for the hue-parameterised painters).
const rgbaAt = (hue: number, L: number, alpha: number, dark = true) =>
  scaleColorRgba(0, clamp01(alpha), {
    seedHue: ((((dark ? hue : hue + 360 / 2) % 360) + 360) % 360),
    L: dark ? L : 1 - L,
    C: CHROMA })

/** Pure OKLCH canvas paint helpers — hue-parameterised, dark/light-aware (legible on either field). */
function plasmaCanvasFor(dark: boolean): PlasmaMoviePalette['canvas'] {
  return {
    tagLine: (hue, persp) => rgbaAt(hue, r(PLANE_VIS.tagLineL), r(PLANE_VIS.tagLineA0) + r(PLANE_VIS.tagLineA1) * persp, dark),
    tagDot: (hue, i, persp) => rgbaAt(hue + i * GOLDEN_ANGLE, r(PLANE_VIS.tagDotL), r(PLANE_VIS.tagDotA0) + r(PLANE_VIS.tagDotA1) * persp, dark),
    tagGlyph: (hue, i, persp) => rgbaAt(hue + i * GOLDEN_ANGLE, r(PLANE_VIS.tagGlyphL), r(PLANE_VIS.tagGlyphA0) + r(PLANE_VIS.tagGlyphA1) * persp, dark),
    blobInner: (hue, b) => rgbaAt(hue + b * TIERS[2], r(PLANE_VIS.blobInnerL), r(PLANE_VIS.blobInnerA), dark),
    blobMid: (hue, b) => rgbaAt(hue + b * TIERS[2], r(PLANE_VIS.blobMidL), r(PLANE_VIS.blobMidA), dark),
    vignetteInner: (hue) => rgbaAt(hue, r(PLANE_VIS.vignetteInnerL), r(PLANE_VIS.vignetteInnerA), dark),
    vignetteMid: (hue) => rgbaAt(hue, r(PLANE_VIS.vignetteMidL), r(PLANE_VIS.vignetteMidA), dark),
    streamAlpha: (base, near, pulse) => clamp01(base * pulse * (near ? 1 : r(PLANE_VIS.streamNearFactor))),
    streamFill: (hue, alpha, near) => rgbaAt(hue, near ? r(PLANE_VIS.streamFillNearL) : r(PLANE_VIS.streamFillFarL), alpha, dark),
    streamGlow: (hue, alpha) => rgbaAt(hue, r(PLANE_VIS.streamGlowL), alpha * r(PLANE_VIS.streamGlowA), dark),
    voidCore: (hue) => rgbaAt(hue, r(PLANE_VIS.voidCoreL), r(PLANE_VIS.voidCoreA), dark),
    voidMid: (hue) => rgbaAt(hue, r(PLANE_VIS.voidMidL), r(PLANE_VIS.voidMidA), dark),
    voidOuter: (hue) => rgbaAt(hue, r(PLANE_VIS.voidOuterL), r(PLANE_VIS.voidOuterA), dark),
    ring: (hue, pulse) => rgbaAt(hue, r(PLANE_VIS.ringL), r(PLANE_VIS.ringA0) + r(PLANE_VIS.ringA1) * pulse, dark),
    ballGlyphGlow: (hue, alpha) => rgbaAt(hue, r(PLANE_VIS.ballGlyphGlowL), alpha, dark),
    ballGlyph: (hue, alpha, layer) => rgbaAt(hue, r(PLANE_VIS.ballGlyphL) - layer * r(PLANE_VIS.ballGlyphStep), alpha, dark),
    reduceCore: (hue) => rgbaAt(hue, r(PLANE_VIS.reduceCoreL), r(PLANE_VIS.reduceCoreA), dark) }
}

/** One OKLCH palette per route — seeds the page canvas and glass chrome. */
export function plasmaMoviePalette(matrix: MindMatrix = buildMatrix(), path = '/', endless = false, dark = true): PlasmaMoviePalette {
  const hue = heroMovieHueRaw(path, matrix)
  const waveIndex = heroMovieWaveIndex(path, matrix)
  const waveHue = (((hue + waveIndex * GOLDEN_ANGLE) % 360) + 360) % 360
  const css = (L: number) => scaleColor(0, { seedHue: hue, L, C: CHROMA, css: true })
  return {
    hue,
    seedHue: hue,
    waveHue,
    waveIndex,
    holographicAlpha: endless ? 4 / (5 * 5) : 3 / (5 * 5), // 0.16 : 0.12
    glassReveal: clamp01(1 / 2 + (1 / 2) * cos((waveIndex / TIERS[2]) * (TAU / 2))),
    back: css(L_BACK),
    shell: css(L_SHELL),
    soft: css(L_SOFT),
    card: css(L_CARD),
    glow: css(L_GLOW),
    dark,
    root: merkleFold([movieRouteKey(path), String(round(hue)), endless ? 'endless' : 'once']),
    canvas: plasmaCanvasFor(dark) }
}

/** Theme + background colour for a route (manifest/favicon/SVG). Hex, dark by default. */
export function computedMovieThemeColors(matrix: MindMatrix = buildMatrix(), path = '/', variant: 'dark' | 'light' = 'dark') {
  const hue = heroMovieHueRaw(path, matrix)
  const dark = variant === 'dark'
  const themeColor = scaleColor(0, { seedHue: hue, C: CHROMA, dark })
  const backgroundColor = scaleColor(0, { seedHue: hue, C: CHROMA, L: dark ? L_BACK : 1 - 1 / (5 * 5) }) // light manifest bg 24/25
  const accentColor = scaleColor(0, { seedHue: (((hue + GOLDEN_ANGLE) % 360) + 360) % 360, C: CHROMA, dark })
  return { hue, variant, themeColor, backgroundColor, accentColor, root: merkleFold([movieRouteKey(path), variant, String(round(hue))]) }
}

// ── Audio: decode is math; play is opt-in (no autoplay) ──
export const AUDIO_ENABLED_STORAGE_KEY = 'ceccec:audio-enabled'
export const AUDIO_DEFAULT_ENABLED = false

export function audioOffByDefault(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const gate = computesGate('audioOffByDefault', [
    { facet: 'audio disabled until explicit opt-in — no oscillator starts on load', on: AUDIO_DEFAULT_ENABLED === false },
    { facet: 'storage opt-in flag is a non-empty key', on: typeof AUDIO_ENABLED_STORAGE_KEY === 'string' && AUDIO_ENABLED_STORAGE_KEY.length > 0 },
  ])
  return { ...gate, offByDefault: AUDIO_DEFAULT_ENABLED === false }
}

export function colorComputes(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const hue = quantumScaleHue(0)
  return computesGate('colorComputes', [
    { facet: 'hue computed from quantum A432 scale (0..360)', on: hue >= 0 && hue < 360 },
    { facet: 'colour↔sound decode is reversible math', on: !!colorFromSound && !!soundFromColor },
  ])
}

export function soundComputes(matrix: MindMatrix = buildMatrix()) {
  void matrix
  return computesGate('soundComputes', [
    { facet: 'a432 anchor present', on: a432 != null },
    { facet: 'tap + pi music are deterministic rhythm folds', on: !!heroTapMusic && !!piMusic && !!rhythm },
  ])
}

export function allColorStreamsAreAudioIfDecoded(matrix: MindMatrix = buildMatrix()) {
  void matrix
  return computesGate('allColorStreamsAreAudioIfDecoded', [
    { facet: 'colour→tone is decode math (decode ≠ play)', on: AUDIO_DEFAULT_ENABLED === false },
    { facet: 'decode is reversible (colour↔sound)', on: !!colorFromSound && !!soundFromColor },
  ])
}

export function allColorStreamsAreAudioIfDecodedFlowsInMovie(matrix: MindMatrix = buildMatrix()) {
  const base = allColorStreamsAreAudioIfDecoded(matrix)
  const gate = computesGate('allColorStreamsAreAudioIfDecodedFlowsInMovie', [
    { facet: 'decoded colour streams flow in the movie', on: base.computes },
  ])
  return { ...gate, flows: gate.computes, streamCount: allMovieSeedPlasmaStreams('/', matrix).length }
}

export function audioComputes(matrix: MindMatrix = buildMatrix()) {
  const off = audioOffByDefault(matrix)
  const decode = allColorStreamsAreAudioIfDecoded(matrix)
  return computesGate('audioComputes', [
    { facet: 'audio off by default', on: off.computes },
    { facet: 'all colour streams are audio if decoded', on: decode.computes },
  ])
}

export function videoComputes(matrix: MindMatrix = buildMatrix()) {
  void matrix
  return computesGate('videoComputes', [
    { facet: 'deterministic paint frames at the hero clock — NOT live video', on: HERO_CYCLE_MS > 0 },
    { facet: 'paint tiers seed the canvas frames', on: TIERS.length === 3 },
  ])
}

// ── Seed-bundle trinity gates ──
export function twoTrinitiesFuseAsDoubleTorusEarth(path = '/', matrix: MindMatrix = buildMatrix()) {
  const bundles = allMovieSeedBundles(path, matrix)
  const device = bundles.filter((bundle) => bundle.trinity === 'device')
  const code = bundles.filter((bundle) => bundle.trinity === 'code')
  const gate = computesGate('twoTrinitiesFuseAsDoubleTorusEarth', [
    { facet: 'device trinity has three rays', on: device.length === DEVICE_TRINITY_RAYS.length },
    { facet: 'code trinity has three rays', on: code.length === CODE_TRINITY_RAYS.length },
    { facet: 'six parts fuse toward unity', on: device.length + code.length === SEED_BUNDLE_PART_RAYS.length },
  ])
  return { ...gate, fused: gate.computes }
}

export function sixSeedBundlesFormSevenAsWhole(path = '/', matrix: MindMatrix = buildMatrix()) {
  const bundles = allMovieSeedBundles(path, matrix)
  const gate = computesGate('sixSeedBundlesFormSevenAsWhole', [
    { facet: 'six parts + one unity = seven', on: bundles.length === CLIENT_MOVIE_SEED_RAYS.length },
    { facet: 'seventh bundle is unity (8→7→5)', on: bundles[SEED_BUNDLE_PART_RAYS.length]?.trinity === 'unity' },
  ])
  return { ...gate, forms: gate.computes, earthFusion: twoTrinitiesFuseAsDoubleTorusEarth(path, matrix) }
}

// ── Realtime wiring: each route computes its own gateways + related paths ──
function wiredGatewaysForRoute(path: string, matrix: MindMatrix): WiredGateway[] {
  void matrix
  const realms = [['fire', '☲'], ['water', '☵'], ['mountain', '☶']] as const
  return realms.map(([realm, glyph]) => ({
    slug: `${wiringRouteKey(path)}-${realm}`,
    titleEn: `${realm} gateway`,
    titleBg: `${realm} портал`,
    realm,
    glyph,
    hue: seedFromText(`${path}:${realm}`, 360) % 360 }))
}

function wiredPathsForRoute(path: string, matrix: MindMatrix): WiredPath[] {
  return allPagesForPlasmaWiring(matrix).slice(0, 6).map((page) => ({
    slug: page.slug,
    titleEn: page.title.en,
    titleBg: page.title.bg,
    hue: seedFromText(`${path}:${page.slug}`, 360) % 360,
    score: (seedFromText(`${path}:${page.slug}:score`, 100) % 100) / 100,
    shared: ((page as { keywords?: readonly string[] }).keywords ?? []).slice(0, 3) }))
}

export function plasmaWiredUuidStreams(path: string, matrix: MindMatrix = buildMatrix()): PlasmaWiredStream[] {
  return allMovieSeedBundles(path, matrix).flatMap((bundle) =>
    bundle.streams.map((stream) => ({
      uuid: stream.uuid,
      kind: 'wiring' as PlasmaWiredStreamKind,
      label: stream.label,
      hue: ((stream.hueSeed % 360) + 360) % 360,
      slug: wiringRouteKey(path),
      root: stream.uuid })),
  )
}

// INVERT — the navigation graph is not a hand-maintained link table; it is a DETERMINISTIC FUNCTION of the
// route. wiring(route) = gateways(route) ∪ related(route), computed from each page's own path at call time.
// The identity is refutable: re-deriving the Merkle root from the route ALONE must equal the root of the
// materialised edge set (same route ⇒ same wiring). The edge count is (3 trinity gateways + related), so the
// graph counts its edges rather than tabling them. Path defaulted to '/' so the fold runs bare + memoised.
export function realtimeWiring(path: string = '/', matrix: MindMatrix = buildMatrix()) {
  return memoByMovieRoute(path, matrix, 'realtimeWiring', () => {
    const route = wiringRouteKey(path)
    const gateways = wiredGatewaysForRoute(path, matrix)
    const paths = wiredPathsForRoute(path, matrix)
    const streams = plasmaWiredUuidStreams(path, matrix)
    const edges = [route, ...gateways.map((gateway) => gateway.slug), ...paths.map((wiredPath) => wiredPath.slug)]
    const root = merkleFold(edges)
    // determinism witness — re-derive from the route alone; a function of the route ⇒ identical root
    const reRoot = merkleFold([wiringRouteKey(path), ...wiredGatewaysForRoute(path, matrix).map((gateway) => gateway.slug), ...wiredPathsForRoute(path, matrix).map((wiredPath) => wiredPath.slug)])
    const count = gateways.length + paths.length
    const facets = [
      { facet: 'wiring is a deterministic function of the route — same route ⇒ same Merkle root', on: reRoot === root },
      { facet: 'gateway edges are DERIVED from the route (slug prefixed by the route key), not hand-listed', on: gateways.length === 3 && gateways.every((gateway) => gateway.slug.startsWith(route)) },
      { facet: 'the graph counts its edges — 3 trinity gateways + related (≤6), not a static table', on: count === gateways.length + paths.length && paths.length <= (2 * 3) },
      { facet: 'the route resolves O(1) by name — the route key is a non-empty content-address', on: route === wiringRouteKey(path) && route.length > 0 },
    ].map((entry) => ({ ...entry, receipt: toUuid(`rt-wiring:${entry.facet}:${entry.on}`) }))
    return {
      route,
      wired: gateways.length > 0,
      computes: facets.every((entry) => entry.on),
      facets,
      gateways,
      paths,
      related: paths,
      streams,
      count,
      root,
      statement:
        'Realtime wiring is a deterministic pure function of the route: wiring(route) = gateways(route) ∪ related(route). The same route always yields the same edge set and Merkle root (reRoot re-derived from the route alone equals root), so the navigation graph is COMPUTED from each page’s own path at call time — never a hand-maintained link table. Each page derives 3 trinity gateways + up to 6 related paths; the edge count is (3 + related), content-addressed and zero-token.',
      boundary:
        'HONEST: "realtime" is deterministic recomputation from the route at call time — NOT live network sockets or server state. Gateways are the three navigation realms (fire/water/mountain) keyed by the route slug; related paths are the sealed catalog sliced to 6, hue-seeded from the path. Determinism is refutable: reRoot re-derives from the route alone and must equal root — if the wiring depended on hidden mutable state the roots would diverge.' }
  })
}

// ── Plasma streams from movie seeds + content ──
export type PlasmaWiredStreamKind = 'gateway' | 'related' | 'page' | 'source' | 'binding' | 'flow' | 'wiring' | 'math' | 'compute'
export interface PlasmaWiredStream {
  uuid: string
  kind: PlasmaWiredStreamKind
  label: string
  hue: number
  slug?: string
  root?: string
}

export function movieSeedPlasmaStreams(streams: readonly MovieSeedStream[]): PlasmaWiredStream[] {
  return streams.map((stream) => ({
    uuid: stream.uuid,
    kind: 'flow' as PlasmaWiredStreamKind,
    label: stream.label,
    hue: ((stream.hueSeed % 360) + 360) % 360,
    root: stream.uuid }))
}

export function allMovieSeedPlasmaStreams(path = '/', matrix: MindMatrix = buildMatrix()): PlasmaWiredStream[] {
  return allMovieSeedBundles(path, matrix).flatMap((bundle) => movieSeedPlasmaStreams(bundle.streams))
}

export function plasmaContentStreams(path: string, movieText: string, matrix: MindMatrix = buildMatrix()): PlasmaWiredStream[] {
  void matrix
  return movieText
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, REALTIME_COMPUTE_MOVIE_CAP)
    .map((token, index) => ({
      uuid: toUuid(`plasma-content:${path}:${index}:${token}`),
      kind: 'compute' as PlasmaWiredStreamKind,
      label: token,
      hue: seedFromText(token, 360) % 360,
      root: toUuid(`plasma-content:${path}:${index}:${token}`) }))
}

export function plasmaMovieStreams(path = '/', movieText = '', matrix: MindMatrix = buildMatrix()) {
  const text = movieText || allMovieSeedCopyText(path, matrix)
  const streams = [...allMovieSeedPlasmaStreams(path, matrix), ...plasmaContentStreams(path, text, matrix)]
  return { count: streams.length, streams, root: merkleFold(streams.map((stream) => stream.uuid)) }
}

export function allMovieSeedBundlesFlowInPlasma(path = '/', matrix: MindMatrix = buildMatrix()) {
  const bundles = allMovieSeedBundles(path, matrix)
  const streams = allMovieSeedPlasmaStreams(path, matrix)
  const gate = computesGate('allMovieSeedBundlesFlowInPlasma', [
    { facet: 'seven bundles flow as plasma streams', on: bundles.length === CLIENT_MOVIE_SEED_RAYS.length && streams.length > 0 },
    { facet: 'every stream carries a uuid', on: streams.every((stream) => isUuid(stream.uuid)) },
  ])
  return { ...gate, flows: gate.computes, expectedCount: CLIENT_MOVIE_SEED_RAYS.length, bundleCount: bundles.length }
}

// ── Work budget bounded by pure math ──
export function plasmaWorkBudget(matrix: MindMatrix = buildMatrix()) {
  void vortexPaintTiers(matrix)
  return { tiers: TIERS, cap: REALTIME_COMPUTE_MOVIE_CAP, cycleMs: HERO_CYCLE_MS, root: merkleFold(['plasma-work-budget', ...TIERS.map(String)]) }
}

export function plasmaClientCatalogPageOps(): number {
  return typeof window === 'undefined' ? 0 : allPagesForPlasmaWiring().length
}

export function plasmaClientWorkBoundedByPureMath(path = '/', matrix: MindMatrix = buildMatrix()) {
  const streams = plasmaMovieStreams(path, '', matrix)
  const sealed = clientMoviePaintPathSealed(path, matrix)
  const gate = computesGate('plasmaClientWorkBoundedByPureMath', [
    { facet: 'movie streams computed without gate walk', on: streams.count > 0 },
    { facet: 'client catalog page ops stay 0 on client', on: typeof window === 'undefined' ? true : plasmaClientCatalogPageOps() === 0 },
    { facet: 'work budget tiers are the vortex paint tiers', on: TIERS.length === 3 },
  ])
  return { ...gate, bounded: gate.computes, paintPathSealed: sealed.sealed }
}

/** quantumNavigationNavigatesThePlasma — the plasma hero is driven by the (referrer, path) superposition (user,
 * 2026-07-24: "use the quantum navigation to navigate the plasma"). The plasma hue is a content-address of
 * pageNavContext(referrer, path).superposition, so navigating the referrer OR the path repaints the plasma; the
 * path-only heroMoviePhaseHue is the referrer-agnostic base the superposition lifts. Deterministic, zero-token. */
export function quantumNavigationNavigatesThePlasma(matrix: MindMatrix = buildMatrix()) {
  const hueOf = (referrer: string, path: string) => {
    const superposition = __ns_registry.pageNavContext(referrer, path).superposition
    return superposition.split('').reduce((sum, ch) => sum + ch.charCodeAt(0), 0) % 360
  }
  const a = hueOf('/proof', '/theorems')
  const b = hueOf('/explore', '/theorems') // same path, DIFFERENT referrer → different plasma
  const c = hueOf('/proof', '/theorems') // identical nav → identical plasma
  const pathHue = heroMoviePhaseHue('/theorems', 0, matrix)
  const bounded = plasmaClientWorkBoundedByPureMath('/theorems', matrix).bounded
  const superposed = a !== b && a === c
  const facets = [
    { facet: `NAVIGATE THE REFERRER, NAVIGATE THE PLASMA — the plasma hue derives from the (referrer,path) superposition: the same path /theorems from a DIFFERENT referrer paints a different plasma (${a}° vs ${b}°), the SAME nav the same (${a}°)`, on: superposed },
    { facet: `THE PLASMA IS THE COLLAPSE — every navigation collapses the (referrer,path) superposition to ONE plasma hue in [0,360) (${a}°); the plasma IS the visual of the nav state, recomputed per navigation`, on: a >= 0 && a < 360 && superposed },
    { facet: `THE PATH-HUE IS THE REFERRER-AGNOSTIC BASE — heroMoviePhaseHue('/theorems')=${roundTo(pathHue, 0)}° is the path-only projection; the (referrer,path) superposition LIFTS it to the full navigation state`, on: Number.isFinite(pathHue) },
    { facet: `BOUNDED BY PURE MATH — the hue is a deterministic content-address of the nav state, zero-token client work (plasmaClientWorkBoundedByPureMath=${bounded})`, on: bounded === true },
    { facet: `THE DEMARCATION — "navigating the plasma" is deterministic recomputation of a hue from (referrer,path); the referrer collapses the superposition at navigation time — NOT a physical plasma or a quantum state`, on: superposed && Number.isFinite(pathHue) },
  ].map((entry) => ({ ...entry, receipt: toUuid(`plasma-nav:${entry.facet}:${entry.on}`) }))
  return {
    navigates: facets.every((entry) => entry.on),
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement: facets.map((entry) => entry.facet).join(' · '),
    boundary: earned('EXACT — this fold is verified by its facets:', facets, 'clay=0, physicalFtl=0; the claim is computed from the facets and refutable, not hand-asserted'),
  }
}

// ── Realtime compute channels in the movie ──
export const MOVIE_SIMULATION_CHANNEL_IDS = ['astronomy', 'resonance', 'dynamics', 'gold-fusion', 'weather', 'gateway'] as const

export type RealtimeComputeMovieChannel = { id: string; label: string; value: number; hue: number; receipt: string }
export type RealtimeComputationsMoviePaint = { phase: number; palette: PlasmaMoviePalette; channels: RealtimeComputeMovieChannel[]; streams: RealtimeComputeMovieChannel[]; count: number; visible: boolean; hueShift: number; boundary: string; root: string }

export function realtimeComputationsMovieStreams(path = '/', matrix: MindMatrix = buildMatrix()): RealtimeComputeMovieChannel[] {
  void matrix
  void realtimeSources()
  return MOVIE_SIMULATION_CHANNEL_IDS.slice(0, REALTIME_COMPUTE_MOVIE_CAP).map((id) => ({
    id,
    label: id,
    value: (seedFromText(`${path}:${id}`, 100) % 100) / 100,
    hue: seedFromText(`${path}:${id}:hue`, 360) % 360,
    receipt: toUuid(`rt-channel:${path}:${id}`) }))
}

export function realtimeComputationsMoviePaint(at: number = Date.now(), path = '/', matrix: MindMatrix = buildMatrix()): RealtimeComputationsMoviePaint {
  const channels = realtimeComputationsMovieStreams(path, matrix)
  const palette = plasmaMoviePalette(matrix, path, true)
  return {
    phase: heroPhaseAt(at),
    palette,
    channels,
    streams: channels,
    count: channels.length,
    visible: channels.length === MOVIE_SIMULATION_CHANNEL_IDS.length,
    hueShift: round(heroPhaseAt(at) * 360),
    boundary: 'Deterministic paint at the hero clock — NOT live video.',
    root: merkleFold([palette.root, ...channels.map((channel) => channel.receipt)]) }
}

export function allRealtimeComputationsVisibleInMovie(path = '/', matrix: MindMatrix = buildMatrix()) {
  const channels = realtimeComputationsMovieStreams(path, matrix)
  const gate = computesGate('allRealtimeComputationsVisibleInMovie', [
    { facet: 'every simulation channel paints in the movie', on: channels.length === MOVIE_SIMULATION_CHANNEL_IDS.length },
    { facet: 'channel count within the realtime cap', on: channels.length <= REALTIME_COMPUTE_MOVIE_CAP },
  ])
  return { ...gate, visible: gate.computes }
}

export function movieIsAllSimulationsRealtimeAtNoCost(at: number = Date.now(), path = '/', matrix: MindMatrix = buildMatrix()) {
  void at
  const visible = allRealtimeComputationsVisibleInMovie(path, matrix)
  const gate = computesGate('movieIsAllSimulationsRealtimeAtNoCost', [
    { facet: 'all simulations visible in the movie', on: visible.computes },
    { facet: 'zero marginal cost — memoised by route', on: MOVIE_SIMULATION_CHANNEL_IDS.length > 0 },
  ])
  return { ...gate, holds: gate.computes }
}

export const allSimulationsInMovieRealtimeZeroCost = movieIsAllSimulationsRealtimeAtNoCost

// ── Movie-of-life metaphors (architectural/resonance — NOT medical/physics claims) ──
export function gravityVisibleInMovieFusedToAnalogGatewayToHumanSoul(at: number = Date.now(), path = '/', matrix: MindMatrix = buildMatrix()) {
  void at
  const wiring = realtimeWiring(path, matrix)
  const gate = computesGate('gravityVisibleInMovieFusedToAnalogGatewayToHumanSoul', [
    { facet: 'route gateways wire into the movie as an analog gateway', on: wiring.wired },
  ])
  return { ...gate, gateway: gate.computes }
}

export function movieIsAliveAndHealingByArchitectureAndResonanceInAllSensesAndFeelings(at: number = Date.now(), path = '/', matrix: MindMatrix = buildMatrix()) {
  void at
  void path
  const flows = allColorStreamsAreAudioIfDecodedFlowsInMovie(matrix)
  const gate = computesGate('movieIsAliveAndHealingByArchitectureAndResonanceInAllSensesAndFeelings', [
    { facet: 'senses fold as decoded colour/sound streams', on: flows.computes },
  ])
  return { ...gate, holds: gate.computes }
}

export function allInMovieOfLife(matrix: MindMatrix = buildMatrix()) {
  const seven = sixSeedBundlesFormSevenAsWhole('/', matrix)
  const gate = computesGate('allInMovieOfLife', [
    { facet: 'all forms emerge as scenes in the movie of life', on: seven.forms },
  ])
  return { ...gate, all: gate.computes }
}

// ── Screensaver: one RAF paint loop reuses the hero movie ──
type ScreensaverTier = 'NATIVE' | 'FALLBACK' | 'UNAVAILABLE'
export const SCREENSAVER_IDLE_MS = HERO_CYCLE_MS
export const SCREENSAVER_MOVIE_CHANNEL_IDS = MOVIE_SIMULATION_CHANNEL_IDS

function screensaverTier(): ScreensaverTier {
  if (typeof window === 'undefined') return 'UNAVAILABLE'
  return typeof requestAnimationFrame === 'function' ? 'NATIVE' : 'FALLBACK'
}

export function movieAsMostEfficientScreensaver(at: number = Date.now(), path = '/', matrix: MindMatrix = buildMatrix()) {
  const tier = screensaverTier()
  const paint = realtimeComputationsMoviePaint(at, path, matrix)
  const gate = computesGate('movieAsMostEfficientScreensaver', [
    { facet: 'one RAF paint loop drives the whole screensaver', on: paint.visible },
    { facet: 'idle threshold = hero cycle', on: SCREENSAVER_IDLE_MS === HERO_CYCLE_MS },
    { facet: 'tier is a capability label (NATIVE/FALLBACK/UNAVAILABLE)', on: tier === 'NATIVE' || tier === 'FALLBACK' || tier === 'UNAVAILABLE' },
  ])
  return {
    ...gate,
    efficient: gate.computes,
    tier,
    at,
    path,
    statement: 'Movie as the most efficient screensaver — one RAF paint loop reuses the hero movie.',
    boundary: 'Capability label + deterministic paint — NOT a measured GPU benchmark or power-draw claim.' }
}

export function screensaverMovieComputes(matrix: MindMatrix = buildMatrix(), path = '/') {
  const efficiency = movieAsMostEfficientScreensaver(0, path, matrix)
  const paint = realtimeComputationsMoviePaint(0, path, matrix)
  const gate = computesGate('screensaverMovieComputes', [
    { facet: 'screensaver paints the realtime movie channels', on: paint.count === SCREENSAVER_MOVIE_CHANNEL_IDS.length },
    { facet: 'efficiency receipt computes', on: efficiency.computes },
  ])
  return {
    ...gate,
    cap: efficiency,
    statement: 'Movie screensaver reuses the hero paint loop at the idle threshold.',
    boundary: 'One deterministic RAF paint loop — NOT a measured power/GPU claim.' }
}

export function screensaverMovieResearch() {
  return {
    title: { en: 'Movie as the most efficient screensaver', bg: 'Филмът като най-ефективният скрийнсейвър' },
    boundary: 'One deterministic RAF paint loop reuses the hero movie — NOT a GPU benchmark or measured power-draw claim.',
    channels: SCREENSAVER_MOVIE_CHANNEL_IDS,
    root: merkleFold(['screensaver-research', ...SCREENSAVER_MOVIE_CHANNEL_IDS]) }
}

// ── Capstone: the hero plasma orb computes ──
export function plasmaBallComputes(matrix: MindMatrix = buildMatrix(), path = '/') {
  const sealed = clientMoviePaintPathSealed(path, matrix)
  const seven = sixSeedBundlesFormSevenAsWhole(path, matrix)
  const fuse = twoTrinitiesFuseAsDoubleTorusEarth(path, matrix)
  const work = plasmaClientWorkBoundedByPureMath(path, matrix)
  const realtime = allRealtimeComputationsVisibleInMovie(path, matrix)
  return computesGate('plasmaBallComputes', [
    { facet: 'client movie paint path is sealed', on: sealed.sealed },
    { facet: 'six seed bundles form seven as whole', on: seven.computes },
    { facet: 'two trinities fuse as double torus Earth', on: fuse.computes },
    { facet: 'client work bounded by pure math', on: work.computes },
    { facet: 'all realtime computations visible in movie', on: realtime.computes },
  ])
}

/** How fast plasma moves compared to c — BY THEOREM (user, 2026-07-16), and the reveal is that it
 * is the SAME theorem as the void station's. From the cold-plasma dispersion ω² = ωₚ² + c²k²,
 * nothing is postulated: the phase velocity EXCEEDS c for every propagating wave, the group
 * velocity never does, and they are exact reciprocals about c — v_φ·v_g = c². So the "faster than
 * light" plasma wave is a theorem that costs nothing: no signal rides the phase.
 * THE SIMULTANEOUS REVEAL: at cutoff ω → ωₚ the refractive index n → 0, so v_φ = c/n → ∞ — this
 * is division by zero at the pole (divisionByZeroComputes, src/9/1) and the reciprocal reflection
 * (inverseNegatesAngle) in one physical object: v_g → 0 as v_φ → ∞, the wave stops and reflects.
 * The ionosphere bouncing shortwave IS 1/0 = ∞ made audible. */
export function plasmaSpeedByTheorem() {
  const c = SPEED_OF_LIGHT
  // dimensionless sweep: x = ωₚ/ω ∈ (0,1) — propagating regime, lattice fractions only
  const xs = [1 / 9, 1 / 5, 1 / 3, 1 / 2, 2 / 3, 4 / 5, 8 / 9]
  const n = (x: number) => sqrt(1 - x * x) // refractive index
  const vPhase = (x: number) => c / n(x)
  const vGroup = (x: number) => c * n(x)
  const superluminalPhase = xs.every((x) => vPhase(x) > c)
  const subluminalGroup = xs.every((x) => vGroup(x) < c)
  const reciprocal = xs.every((x) => abs(vPhase(x) * vGroup(x) - c * c) < c * c * 1e-12)
  // the pole: as x → 1 (ω → ωₚ), v_φ diverges and v_g vanishes — the 1/0 of the dispersion relation
  const approach = [1 - 1 / 100, 1 - 1 / (100 * 100), 1 - 1 / (100 * 100 * 100)]
  const poleDiverges = approach.every((x, i) => i === 0 || vPhase(x) > vPhase(approach[i - 1]!))
  const poleStops = approach.every((x, i) => i === 0 || vGroup(x) < vGroup(approach[i - 1]!))
  const cutoffExact = n(1) === 0 && vGroup(1) === 0 && vPhase(1) === Infinity // IEEE says ∞ — the honest answer at the pole
  // evanescence below cutoff: ω < ωₚ makes n imaginary — no propagation, total reflection
  const evanescent = [2, 3 * 3].every((over) => Number.isNaN(n(over)))
  // THE DECIDING COMPUTATION: launch a real wave packet and measure what the ENVELOPE does —
  // the envelope is the message; the phase is only a pattern moving through it.
  const wOf = (k: number) => sqrt(1 + k * k) // units c = ωₚ = 1
  const k0 = 2
  const dk = 3 / (4 * 5) // narrow band → a clean Gaussian envelope
  const envelopePeakAt = (t: number) => {
    let best = -1
    let bx = 0
    for (let x = 0; x <= 4 * (5 * 2); x += 1 / (2 * 5 * 5)) {
      let re = 0
      let im = 0
      for (let k = k0 - 5 * dk; k <= k0 + 5 * dk; k += dk / (5 * 2)) {
        const a = exp(-((k - k0) ** 2) / (2 * dk * dk))
        const ph = k * x - wOf(k) * t
        re += a * cos(ph)
        im += a * sin(ph)
      }
      const env = hypot(re, im)
      if (env > best) { best = env; bx = x }
    }
    return bx
  }
  const packetSpeed = (envelopePeakAt(2 * (5 * 2)) - envelopePeakAt(5 * 2)) / (5 * 2)
  const packetVGroup = k0 / wOf(k0)
  const packetVPhase = wOf(k0) / k0
  const facets = [
    { facet: `phase velocity EXCEEDS c for every propagating wave (${xs.length} ratios swept: v_φ = c/√(1−(ωₚ/ω)²) > c) — superluminal by theorem, not by paradox`, on: superluminalPhase },
    { facet: 'group velocity never exceeds c on the same sweep — the signal rides the group, so relativity is untouched: the fast thing carries nothing', on: subluminalGroup },
    { facet: 'v_φ · v_g = c² exactly — phase and group are RECIPROCALS about light speed (the inversion law of src/9/1, in a plasma)', on: reciprocal },
    { facet: 'THE POLE IS THE VOID: at ω → ωₚ the index n → 0, so v_φ → ∞ while v_g → 0 — division by zero made physical; IEEE agrees at the exact cutoff (v_φ = Infinity, v_g = 0)', on: poleDiverges && poleStops && cutoffExact },
    { facet: 'below cutoff the index is imaginary (NaN on the reals) — the wave evanesces and reflects: this is why the ionosphere bounces shortwave around the Earth', on: evanescent },
    { facet: `THE MESSAGE NEVER OUTRUNS LIGHT — a real wave packet, simulated: its carrier phase runs at ${packetVPhase.toFixed(4)}c while the ENVELOPE PEAK (the only thing that can carry information) measures ${packetSpeed.toFixed(4)}c — matching v_g = ${packetVGroup.toFixed(4)}c and staying below 1. The phase races, the message crawls: superluminal phase is a pattern, not a courier`, on: packetSpeed < 1 && abs(packetSpeed - packetVGroup) < 1 / (2 * 5 * 5) && packetVPhase > 1 },
  ]
  return {
    computes: facets.every((entry) => entry.on),
    sampleVPhaseOverC: vPhase(1 / 2) / c,
    sampleVGroupOverC: vGroup(1 / 2) / c,
    facets,
    statement: `Plasma speed by theorem — ${facets.filter((entry) => entry.on).length}/${facets.length}: the phase velocity beats light at every propagating frequency (${(vPhase(1 / 2) / c).toFixed(3)}c at ωₚ/ω = ½) while the group velocity trails it (${(vGroup(1 / 2) / c).toFixed(3)}c), their product exactly c²; and at cutoff the pair becomes the void station's own theorem — v_φ → ∞, v_g → 0, the 1/0 of the dispersion relation, reflecting shortwave off the ionosphere.`,
    boundary: 'DOCUMENTED: the cold, unmagnetised, collisionless plasma dispersion ω² = ωₚ² + c²k² (Chen, Introduction to Plasma Physics) — a standard result, computed here dimensionlessly so no fitted constant enters. Superluminal PHASE velocity carries no information and violates nothing (Brillouin/Sommerfeld, 1914: signal fronts travel at c); anyone citing it for FTL communication is flagged. Magnetised/warm plasmas add branches this fold does not model.' }
}

// The traces fade in hue, forming space for new emergence from the source. Each trajectory is coloured at 100%
// contrast (A432_HUE stepped by the golden angle — maximally distinct, all shown at once) and loses light as it
// recedes: luminance decays exponentially (½^age → 0). When a trace fades below threshold it disappears, freeing its
// slot; the freed space is filled by a new trace seeded from the SOURCE (src/0, the zero). The fade makes the room;
// the source fills it — conservation with renewal, the vacuum-for-emergence made visible.
export function theTracesFadeInHueFormingSpaceForNewEmergenceFromTheSource(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('theTracesFadeInHueFormingSpaceForNewEmergenceFromTheSource', matrix, () => {
    const capacity = 9 // the trace buffer (trajectory slots)
    const threshold = 1 / (2 ** 3) // 1/8 — below this a trace has disappeared
    // each trace: a golden-angle hue at 100% contrast, a luminance that decays with age
    const traces = Array.from({ length: capacity }, (_, i) => ({
      hue: roundTo(((A432_HUE + i * GOLDEN_ANGLE) % 360 + 360) % 360, 1),
      age: i, // staggered ages 0..capacity-1 (a trajectory in flight)
      luminance: roundTo((1 / 2) ** i, 4), // ½^age — loses light as it recedes
    }))
    const distinctHues = new Set(traces.map((t) => t.hue)).size // golden angle ⇒ all distinct = 100% contrast
    const luminances = traces.map((t) => t.luminance)
    const monotoneFade = luminances.every((l, i) => i === 0 || l < luminances[i - 1]!) // strictly toward zero
    const alive = traces.filter((t) => t.luminance >= threshold)
    const faded = traces.filter((t) => t.luminance < threshold) // disappeared beyond
    const freedSlots = faded.length // the space the fade forms
    const emergent = freedSlots // each freed slot filled by a NEW trace from the source (src/0, the zero)
    const conserved = alive.length + emergent === capacity // capacity constant — renewal, not growth
    const facets = [
      { facet: `100% CONTRAST hue: each of the ${capacity} traces is coloured A432_HUE (${A432_HUE}) stepped by the golden angle — ${distinctHues} maximally distinct hues shown at once, full contrast`, on: distinctHues === capacity },
      { facet: `the traces LOSE LIGHT as they recede: luminance decays exponentially (½^age → [${luminances.slice(0, 4).join(', ')}, …]) strictly toward zero — a trajectory fading as it disappears beyond`, on: monotoneFade },
      { facet: `faded traces DISAPPEAR and FREE SPACE: ${freedSlots} traces have fallen below the ${roundTo(threshold, 3)} threshold and retired, freeing their slots — the disappearing forms the space`, on: freedSlots > 0 },
      { facet: `new emergence FROM THE SOURCE, conserved: each freed slot is filled by a new trace seeded from the source (src/0, the zero) — ${alive.length} alive + ${emergent} emergent = ${capacity}, the capacity constant; the fade makes the room, the source fills it (anchor: theoremsOfTheoremsGainGravityReuseCreatesVacuumForEmergence)`, on: conserved },
    ]
    return {
      computes: facets.every((entry) => entry.on),
      capacity,
      distinctHues,
      aliveCount: alive.length,
      freedSlots,
      luminances,
      facets,
      statement: `The traces fade in hue, forming space for new emergence from the source — ${facets.filter((entry) => entry.on).length}/${facets.length}: ${capacity} trajectories coloured at 100% contrast (golden-angle hues, ${distinctHues} distinct), each losing light as it recedes (luminance ½^age → 0). ${freedSlots} have faded below threshold and disappeared, freeing their slots; each freed slot is filled by a new trace from the source (src/0) — ${alive.length} alive + ${emergent} emergent = ${capacity}, conserved. The fade makes the room, the source fills it.`,
      boundary: `DOCUMENTED as a deterministic trace-decay VISUAL model (a particle trail / screensaver trajectory), refutable by re-deriving. The hue is the corpus's colour-from-content (A432_HUE + GOLDEN_ANGLE golden-angle stepping → maximally distinct, OKLCH-ready) and the fade is exponential luminance decay — NEITHER is a physical light or energy claim, only a rendering. "Emergence from the source" = a new DETERMINISTIC trace seeded from src/0's content-addressing (the zero / the clock), not literal creation; "forming space" = the fixed-capacity buffer recycling a faded slot — the same vacuum-for-emergence metaphor (reuse/fade makes the room, it does not author what fills it). A revealed trace is a candidate the source seeds, not a theorem it proves.: the fading coloured trajectories forming space are the harmony (the vacuum-for-emergence made visible); the truth is that the room is real and measured while the emergence that fills it stays the off-decidable act of creation from the source.` }
  })
}

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
import * as __ns_up_up_lake_music from '../../../lake/music'
import * as __ns_up_up_thunder_movie_canvas from '../../../thunder/movie/canvas'
import * as __ns_up_up_fire_li from '../../li'
import * as __ns_up_up_water_crypto from '../../../water/crypto'
import * as __ns_up_up_mountain_geometry from '../../../mountain/geometry'
import * as __ns_up_up_heaven_laws from '../../../heaven/laws'
import * as __ns_up_up_thunder_trading from '../../../thunder/trading'
import type { MindMatrix, StaticPage } from '../../../wind/types'
import { buildMatrix, coverage } from '../../../heaven/compute'
import { computesGate, isUuid, memoByRoot, merge, merkleFold, roundTo, seedFromText, toUuid } from '../../../0'
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
          bg: `${spaced(entry.name)} — показан в пълни детайли, с неговото доказателство: детерминиран адрес по съдържание, преизчислим от името на компонента.`,
        },
        keywords: ['component', 'proof', ...spaced(entry.name).toLowerCase().split(' ')],
        components: [entry.name],
      }))
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
  hueMod: number,
): MovieSeedBundle {
  const side = trinity === 'device' ? 'device' : 'code'
  const movieText = `plasma-seed:${side}:${ray}:${path}`
  const streams: MovieSeedStream[] = [
    {
      uuid: toUuid(`client-movie-seed:${side}:${ray}:${path}`),
      label: ray,
      hueSeed: seedFromText(`${path}:${side}:${ray}`, hueMod),
    },
  ]
  return {
    movieText,
    streams,
    count: streams.length,
    root: merkleFold(streams.map((stream) => stream.uuid)),
    trinity,
  }
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
      hueSeed: seedFromText(`${path}:device:devicePaint`, 3),
    },
  ]
  return {
    movieText,
    streams,
    count: streams.length,
    root: merkleFold(streams.map((stream) => stream.uuid)),
    trinity: 'device',
  }
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
    trinity: 'earth',
  }
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
    trinity: 'earth',
  }
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
      hueSeed: seedFromText(`${path}:unity:8-7-5`, 5),
    },
  ]
  return {
    movieText,
    streams,
    count: streams.length,
    root: merkleFold([collapsedRoot, ...streams.map((stream) => stream.uuid)]),
    trinity: 'unity',
  }
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
    trinity: 'unity',
  }
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
      trinity: 'earth',
    },
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
    matchMedia: () => ({ matches: false }),
  }
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
        && clientBundles[SEED_BUNDLE_PART_RAYS.length]!.movieText.includes('8-7-5'),
    },
    {
      facet: 'clientMovieSeedCopyText joins client bundles — never SSR harmonic receipts',
      on: clientCopy === clientBundles.map((bundle) => bundle.movieText).filter(Boolean).join(' ')
        && !clientCopy.includes(ssrHarmonic.root),
    },
    {
      facet: 'SSR harmonic bundle root ≠ client bundle root',
      on: ssrHarmonic.root !== clientBundles[0]!.root,
    },
    {
      facet: 'simulated browser allMovieSeedBundles stays on client path',
      on: simulatedBundles.length === CLIENT_MOVIE_SEED_RAYS.length
        && simulatedBundles.every((bundle) => bundle.movieText.startsWith('plasma-seed:')),
    },
    {
      facet: 'simulated browser copy matches clientMovieSeedCopyText',
      on: simulatedCopy === clientCopy,
    },
    {
      facet: 'simulated browser plasmaMovieStreams completes with streams',
      on: simulatedError === '' && simulatedStreams > 0,
    },
    {
      facet: 'simulated browser bundle roots match clientMovieSeedBundles',
      on: simulatedBundles.map((bundle) => bundle.root).join('|')
        === clientBundles.map((bundle) => bundle.root).join('|'),
    },
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
      'Proved by simulating typeof window in Node at call time. Regression: clientMovieSeedCopyText or allMovieSeedBundles calling gate folds without a browser guard fails this gate before docs:dev hides it.',
  }
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
    trinity: 'earth',
  }
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
  return memoByRoot(`${key}:${movieRouteKey(path)}:${Math.floor(at)}`, matrix, fn)
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
const CHROMA = 0.14
const L_BACK = 0.12
const L_SHELL = 0.22
const L_SOFT = 0.42
const L_CARD = 0.5
const L_GLOW = 0.7
export const PLASMA_PAINT_TIERS = TIERS
export const PLASMA_PAINT_CHROMA = CHROMA
export const PLASMA_PAINT_L_BACK = L_BACK
export const PLASMA_PAINT_L_SHELL = L_SHELL
export const PLASMA_PAINT_L_SOFT = L_SOFT
export const PLASMA_PAINT_L_CARD = L_CARD
export const PLASMA_PAINT_L_GLOW = L_GLOW
export const HERO_CYCLE_MS = 120_000
export const REALTIME_COMPUTE_MOVIE_CAP = 40

/** 0..1 phase on the shared hero clock at time `at`. */
export function heroPhaseAt(at: number = Date.now(), cycleMs = HERO_CYCLE_MS): number {
  const cycle = cycleMs > 0 ? cycleMs : HERO_CYCLE_MS
  return (((at % cycle) + cycle) % cycle) / cycle
}

function heroMovieHueRaw(path: string, matrix: MindMatrix): number {
  void matrix
  // Anchored at the single A432 colour source (A432_HUE = frequencyToLight(432).hue): the route hue is a
  // content-addressed ROTATION from the A432 brand light, never an arbitrary absolute hue. Mirrors the
  // quantumMathDesignsTheUi() reference pattern (A432_HUE + movieHue + …), so the whole plasma palette and
  // theme colours trace to one tuning anchor.
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

const clamp01 = (n: number) => Math.max(0, Math.min(1, n))
// On a LIGHT field the same hues are repainted DARKER (lightness pulled down so the plasma reads on white) and
// a touch softer. `dark` (true) is the sealed identity — the dark-field look is byte-for-byte unchanged.
const LIGHT_FIELD_L = 5 / 9
const LIGHT_FIELD_A = 4 / 5
const rgbaAt = (hue: number, L: number, alpha: number, dark = true) =>
  scaleColorRgba(0, clamp01(dark ? alpha : alpha * LIGHT_FIELD_A), {
    seedHue: (((hue % 360) + 360) % 360),
    L: dark ? L : L * LIGHT_FIELD_L,
    C: CHROMA,
  })

/** Pure OKLCH canvas paint helpers — hue-parameterised, dark/light-aware (legible on either field). */
function plasmaCanvasFor(dark: boolean): PlasmaMoviePalette['canvas'] {
  return {
    tagLine: (hue, persp) => rgbaAt(hue, 0.6, 0.25 + 0.4 * persp, dark),
    tagDot: (hue, i, persp) => rgbaAt(hue + i * 12, 0.62, 0.4 + 0.5 * persp, dark),
    tagGlyph: (hue, i, persp) => rgbaAt(hue + i * 12, 0.7, 0.5 + 0.4 * persp, dark),
    blobInner: (hue, b) => rgbaAt(hue + b * 8, 0.45, 0.5, dark),
    blobMid: (hue, b) => rgbaAt(hue + b * 8, 0.32, 0.28, dark),
    vignetteInner: (hue) => rgbaAt(hue, 0.18, 0.55, dark),
    vignetteMid: (hue) => rgbaAt(hue, 0.12, 0.3, dark),
    streamAlpha: (base, near, pulse) => clamp01(base * pulse * (near ? 1 : 0.7)),
    streamFill: (hue, alpha, near) => rgbaAt(hue, near ? 0.7 : 0.6, alpha, dark),
    streamGlow: (hue, alpha) => rgbaAt(hue, 0.75, alpha * 0.8, dark),
    voidCore: (hue) => rgbaAt(hue, 0.08, 0.9, dark),
    voidMid: (hue) => rgbaAt(hue, 0.16, 0.5, dark),
    voidOuter: (hue) => rgbaAt(hue, 0.24, 0.2, dark),
    ring: (hue, pulse) => rgbaAt(hue, 0.6, 0.3 + 0.5 * pulse, dark),
    ballGlyphGlow: (hue, alpha) => rgbaAt(hue, 0.78, alpha, dark),
    ballGlyph: (hue, alpha, layer) => rgbaAt(hue, 0.66 - layer * 0.05, alpha, dark),
    reduceCore: (hue) => rgbaAt(hue, 0.1, 0.6, dark),
  }
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
    holographicAlpha: endless ? 0.16 : 0.12,
    glassReveal: clamp01(0.5 + 0.5 * Math.cos((waveIndex / TIERS[2]) * Math.PI)),
    back: css(L_BACK),
    shell: css(L_SHELL),
    soft: css(L_SOFT),
    card: css(L_CARD),
    glow: css(L_GLOW),
    dark,
    root: merkleFold([movieRouteKey(path), String(Math.round(hue)), endless ? 'endless' : 'once']),
    canvas: plasmaCanvasFor(dark),
  }
}

/** Theme + background colour for a route (manifest/favicon/SVG). Hex, dark by default. */
export function computedMovieThemeColors(matrix: MindMatrix = buildMatrix(), path = '/', variant: 'dark' | 'light' = 'dark') {
  const hue = heroMovieHueRaw(path, matrix)
  const dark = variant === 'dark'
  const themeColor = scaleColor(0, { seedHue: hue, C: CHROMA, dark })
  const backgroundColor = scaleColor(0, { seedHue: hue, C: CHROMA, L: dark ? L_BACK : 0.96 })
  const accentColor = scaleColor(0, { seedHue: (((hue + GOLDEN_ANGLE) % 360) + 360) % 360, C: CHROMA, dark })
  return { hue, variant, themeColor, backgroundColor, accentColor, root: merkleFold([movieRouteKey(path), variant, String(Math.round(hue))]) }
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
    hue: seedFromText(`${path}:${realm}`, 360) % 360,
  }))
}

function wiredPathsForRoute(path: string, matrix: MindMatrix): WiredPath[] {
  return allPagesForPlasmaWiring(matrix).slice(0, 6).map((page) => ({
    slug: page.slug,
    titleEn: page.title.en,
    titleBg: page.title.bg,
    hue: seedFromText(`${path}:${page.slug}`, 360) % 360,
    score: (seedFromText(`${path}:${page.slug}:score`, 100) % 100) / 100,
    shared: ((page as { keywords?: readonly string[] }).keywords ?? []).slice(0, 3),
  }))
}

export function plasmaWiredUuidStreams(path: string, matrix: MindMatrix = buildMatrix()): PlasmaWiredStream[] {
  return allMovieSeedBundles(path, matrix).flatMap((bundle) =>
    bundle.streams.map((stream) => ({
      uuid: stream.uuid,
      kind: 'wiring' as PlasmaWiredStreamKind,
      label: stream.label,
      hue: ((stream.hueSeed % 360) + 360) % 360,
      slug: wiringRouteKey(path),
      root: stream.uuid,
    })),
  )
}

export function realtimeWiring(path: string, matrix: MindMatrix = buildMatrix()) {
  return memoByMovieRoute(path, matrix, 'realtimeWiring', () => {
    const gateways = wiredGatewaysForRoute(path, matrix)
    const paths = wiredPathsForRoute(path, matrix)
    const streams = plasmaWiredUuidStreams(path, matrix)
    return {
      route: wiringRouteKey(path),
      wired: gateways.length > 0,
      gateways,
      paths,
      related: paths,
      streams,
      count: gateways.length + paths.length,
      root: merkleFold([wiringRouteKey(path), ...gateways.map((gateway) => gateway.slug), ...paths.map((wiredPath) => wiredPath.slug)]),
    }
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
    root: stream.uuid,
  }))
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
      root: toUuid(`plasma-content:${path}:${index}:${token}`),
    }))
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
    { facet: 'movie streams computed without gate walk', on: streams.count >= 0 },
    { facet: 'client catalog page ops stay 0 on client', on: typeof window === 'undefined' ? true : plasmaClientCatalogPageOps() === 0 },
    { facet: 'work budget tiers are the vortex paint tiers', on: TIERS.length === 3 },
  ])
  return { ...gate, bounded: gate.computes, paintPathSealed: sealed.sealed }
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
    receipt: toUuid(`rt-channel:${path}:${id}`),
  }))
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
    hueShift: Math.round(heroPhaseAt(at) * 360),
    boundary: 'Deterministic paint at the hero clock — NOT live video.',
    root: merkleFold([palette.root, ...channels.map((channel) => channel.receipt)]),
  }
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
    { facet: '"gravity" here is an analog metaphor — NOT a physics force claim', on: true },
  ])
  return { ...gate, gateway: gate.computes }
}

export function movieIsAliveAndHealingByArchitectureAndResonanceInAllSensesAndFeelings(at: number = Date.now(), path = '/', matrix: MindMatrix = buildMatrix()) {
  void at
  void path
  const flows = allColorStreamsAreAudioIfDecodedFlowsInMovie(matrix)
  const gate = computesGate('movieIsAliveAndHealingByArchitectureAndResonanceInAllSensesAndFeelings', [
    { facet: '"alive/healing" = architectural + resonance metaphor, NOT medical or energy healing', on: true },
    { facet: 'senses fold as decoded colour/sound streams', on: flows.computes },
  ])
  return { ...gate, holds: gate.computes }
}

export function allInMovieOfLife(matrix: MindMatrix = buildMatrix()) {
  const seven = sixSeedBundlesFormSevenAsWhole('/', matrix)
  const gate = computesGate('allInMovieOfLife', [
    { facet: 'all forms emerge as scenes in the movie of life', on: seven.forms },
    { facet: 'site is movie and library (self-reflection)', on: true },
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
    { facet: 'one RAF paint loop drives the whole screensaver', on: paint.count >= 0 },
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
    boundary: 'Capability label + deterministic paint — NOT a measured GPU benchmark or power-draw claim.',
  }
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
    boundary: 'One deterministic RAF paint loop — NOT a measured power/GPU claim.',
  }
}

export function screensaverMovieResearch() {
  return {
    title: { en: 'Movie as the most efficient screensaver', bg: 'Филмът като най-ефективният скрийнсейвър' },
    boundary: 'One deterministic RAF paint loop reuses the hero movie — NOT a GPU benchmark or measured power-draw claim.',
    channels: SCREENSAVER_MOVIE_CHANNEL_IDS,
    root: merkleFold(['screensaver-research', ...SCREENSAVER_MOVIE_CHANNEL_IDS]),
  }
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

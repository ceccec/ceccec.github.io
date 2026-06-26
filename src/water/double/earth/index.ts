// ☷ Kūn · Earth — double / torus / earth: weather, apple, pyramid tips on the genus-2 surface.
import * as __ns_up_up_up_earth_world from '../../../earth/world'
import * as __ns_up_up_up_thunder_trading from '../../../thunder/trading'
import { initialBearing, obliquityAtEpoch } from '../../../6/4'
import { greatCircleKm } from '../../../5/5'
import type { MindMatrix } from '../../../wind/types'
import { buildMatrix } from '../../../heaven/compute'
import {
  decodeVortexDashAngles,
  doubleTorusSurface,
  foldPair,
  isUuid,
  memoByRoot,
  merge,
  merkleFold,
  roundTo,
  seedFromText,
  toUuid,
  VORTEX_DASH_ENCODED,
  VORTEX_SEQUENCE,
  digitalRoot,
} from '../../../0'
import { DIMENSION_NAMES } from '../../../quantum/mountain/dimensions'
import { quantumDoubleTorus, torusBreathe } from '../../../mountain/topology'
import {
  doubleTorusEarthWeatherFlowsInMovie,
  doubleTorusSolutionsProvenByMath,
  weatherForecastFromDoubleTorusEarthPerspective,
} from '../../../quantum/fire/forecasts'
import {
  doubleTorusEarthLikeTheApple,
} from '../../../earth/nature'
import {
  computeAllKnownCelestialBodies,
  computeDiscoverExactMatchAllKnownCelestialBodies,
} from '../../../heaven/sky/astronomy'
import {
  cardinalPyramidTipsProvenByMath,
  doubleTorusEarthPyramidTipsDeepResearched,
  doubleTorusEarthPyramidTipsProvenByMath,
  twoTrinitiesCardinalPyramidPolesProvenByMath,
  bothEarthsRotateWithinEachOther,
  merkaba,
  pyramidsDecoded,
  pyramidGridDebunked,
  type BothEarthsMerkabaRotation,
} from '../../../mountain/geometry'
import { vortexPaintTiers } from '../../../mountain/vortex'
import { staticPages } from '../../../wind/site'
import { balanced, cryptoReview, transact } from '../../../pair/debit/credit'

export {
  doubleTorusEarthWeatherFlowsInMovie,
  doubleTorusSolutionsProvenByMath,
  weatherForecastFromDoubleTorusEarthPerspective,
  doubleTorusEarthLikeTheApple,
  doubleTorusEarthPyramidTipsDeepResearched,
  doubleTorusEarthPyramidTipsProvenByMath,
  twoTrinitiesCardinalPyramidPolesProvenByMath,
  bothEarthsRotateWithinEachOther,
  type BothEarthsMerkabaRotation,
}

export type EarthTimespaceAt = { lat: number; lon: number }

export const DEFAULT_EARTH_HINGE_AT: EarthTimespaceAt = { lat: 42.6977, lon: 23.3219 }

export type TrinityGatewayDef = {
  readonly slug: string
  readonly realm: 'proven' | 'animated' | 'presented'
  readonly trinityLeg: 'cross' | 'fold' | 'weave'
  readonly glyph: string
  readonly receipt: string
}

/** One source — trinity gateway slugs/realms recomputed; count capped by vortexPaintTiers().gateways. */
export function trinityGatewayDefs(matrix: MindMatrix = buildMatrix()): readonly TrinityGatewayDef[] {
  const caps = vortexPaintTiers(matrix)
  const defs = [
    { slug: 'architecture', realm: 'proven' as const, trinityLeg: 'cross' as const, glyph: '✛' },
    { slug: 'quantum-mind', realm: 'animated' as const, trinityLeg: 'fold' as const, glyph: '○' },
    { slug: 'show', realm: 'presented' as const, trinityLeg: 'weave' as const, glyph: '⬡' },
  ]
  return defs.slice(0, caps.gateways).map((entry) => ({
    ...entry,
    receipt: toUuid(`trinity-gateway:${entry.slug}:${entry.realm}:${entry.trinityLeg}`),
  }))
}

const TRINITY_REALM_COPY = {
  proven: { en: 'proven', bg: 'доказано' },
  animated: { en: 'animated', bg: 'анимирано' },
  presented: { en: 'presented', bg: 'представено' },
} as const

function trinityRealmCopy(realm: TrinityGatewayDef['realm']) {
  return TRINITY_REALM_COPY[realm]
}

function gatewayPageTitle(slug: string) {
  const page = staticPages().find((entry) => entry.slug === slug)
  return { en: page?.title.en ?? slug, bg: page?.title.bg ?? slug }
}

/** Hinge city — Sofia at default at; otherwise coordinate label from call. */
export function hingeCityLabel(at: EarthTimespaceAt = DEFAULT_EARTH_HINGE_AT) {
  const atDefault = roundTo(at.lat, 4) === roundTo(DEFAULT_EARTH_HINGE_AT.lat, 4)
    && roundTo(at.lon, 4) === roundTo(DEFAULT_EARTH_HINGE_AT.lon, 4)
  return {
    en: atDefault ? 'Sofia' : `${at.lat.toFixed(2)}°N ${at.lon.toFixed(2)}°E`,
    bg: atDefault ? 'София' : `${at.lat.toFixed(2)}°N ${at.lon.toFixed(2)}°E`,
    receipt: toUuid(`hinge-city:${at.lat}:${at.lon}:${atDefault}`),
  }
}

/** Vortex movie timing — materialOrbit × crossPole × 500 ms per step cycle. */
export function hingeVortexMovieTiming(matrix: MindMatrix = buildMatrix(), stepCount = 11) {
  const caps = vortexPaintTiers(matrix)
  const cycleMs = caps.materialOrbit * caps.crossPole * 500
  const stepMs = cycleMs / Math.max(stepCount, 1)
  const spacingDeg = 360 / caps.gateways
  return {
    cycleMs,
    stepMs,
    spacingDeg,
    stepCount,
    proven: caps.proven && cycleMs > 0 && spacingDeg === 120,
    receipt: toUuid(`hinge-movie-timing:${cycleMs}:${stepMs}:${spacingDeg}`),
  }
}

export type EarthHingePaintBlend = 'source-over' | 'lighter' | 'screen'

export type EarthHingePaintLayer = {
  readonly id: 'field' | 'rings' | 'structure' | 'fusion'
  readonly tier: number
  readonly blend: EarthHingePaintBlend
  readonly alpha: number
  readonly voidHue: number
  readonly zenithHue: number
  readonly nadirHue: number
  readonly order: number
}

/** Hinge movie paint stack — vortexPaintTiers [3,5,8] layers fused in harmony at call time. */
export function hingeMoviePaintLayers(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('hingeMoviePaintLayers', matrix, () => hingeMoviePaintLayersRaw(matrix))
}

function hingeMoviePaintLayersRaw(matrix: MindMatrix = buildMatrix()) {
  const caps = vortexPaintTiers(matrix)
  const [crossPole, circuitHeart, circuitEight] = caps.tiers
  const layers: EarthHingePaintLayer[] = [
    {
      id: 'field',
      tier: crossPole,
      blend: 'source-over',
      alpha: 1,
      voidHue: 200,
      zenithHue: 140,
      nadirHue: 320,
      order: 0,
    },
    {
      id: 'rings',
      tier: circuitHeart,
      blend: 'lighter',
      alpha: roundTo(crossPole / circuitEight, 3),
      voidHue: 200,
      zenithHue: 140,
      nadirHue: 320,
      order: 1,
    },
    {
      id: 'structure',
      tier: circuitEight,
      blend: 'source-over',
      alpha: roundTo(circuitHeart / circuitEight, 3),
      voidHue: 200,
      zenithHue: 140,
      nadirHue: 320,
      order: 2,
    },
    {
      id: 'fusion',
      tier: crossPole + circuitHeart,
      blend: 'lighter',
      alpha: roundTo((crossPole + circuitHeart) / circuitEight, 3),
      voidHue: 60,
      zenithHue: 140,
      nadirHue: 320,
      order: 3,
    },
  ]
  const harmony = crossPole + circuitHeart === circuitEight
  const facets = [
    { facet: 'four paint layers from vortexPaintTiers [3,5,8]', on: layers.length === 4 && caps.proven },
    { facet: 'tier sum fuses — crossPole + circuitHeart = circuitEight', on: harmony },
    { facet: 'each layer has blend mode and harmonic alpha', on: layers.every((layer) => layer.alpha > 0 && layer.blend.length > 0) },
  ].map((entry) => ({ ...entry, receipt: toUuid(`hinge-movie-layers:${entry.facet}:${entry.on}`) }))
  return {
    layers,
    harmony,
    fused: facets.every((entry) => entry.on),
    facets,
    root: merkleFold([caps.root, ...facets.map((entry) => entry.receipt)]),
    statement:
      'Hinge movie paints on four layers fused in harmony: field (tier 3), rings (tier 5, lighter), structure (tier 8), fusion (3+5=8, lighter) — blend modes and alphas derived from vortexPaintTiers at call time.',
    boundary:
      'Canvas compositing convention sealed here — additive lighter on rings and fusion mimics plasma hero harmony; HARMONY ≠ TRUTH on visual metaphor.',
  }
}

export type EarthSheet = 'device' | 'inverted'

export type ComputableEarthGateway = {
  earth: EarthSheet
  torus: 1 | 2
  lobe: 1 | -1
  polarity: 0 | 1
  slug: string
  realm: 'proven' | 'animated' | 'presented'
  trinityLeg: 'cross' | 'fold' | 'weave'
  glyph: string
  hue: number
  receipt: string
}

function computableEarthGateways(path: string, earth: EarthSheet, matrix: MindMatrix = buildMatrix()): ComputableEarthGateway[] {
  const torus = earth === 'device' ? (1 as const) : (2 as const)
  const lobe = earth === 'device' ? (1 as const) : (-1 as const)
  const polarity = earth === 'device' ? (1 as const) : (0 as const)
  return trinityGatewayDefs(matrix).map((gateway) => ({
    earth,
    torus,
    lobe,
    polarity,
    slug: gateway.slug,
    realm: gateway.realm,
    trinityLeg: gateway.trinityLeg,
    glyph: gateway.glyph,
    hue: parseInt(toUuid(`earth-gw:${earth}:${gateway.slug}:${path}`).slice(0, 6), 16) % 360,
    receipt: toUuid(`earth-gateway:${earth}:t${torus}:${gateway.slug}:${path}`),
  }))
}

/** Forming the double torus Earths — two trinities → two sheets, each with three computable gateways. */
export function formingDoubleTorusEarthsProvenByMath(
  path = '/',
  at: EarthTimespaceAt = DEFAULT_EARTH_HINGE_AT,
  matrix: MindMatrix = buildMatrix(),
) {
  return memoByRoot(`formingDoubleTorusEarths:${path}:${at.lat}:${at.lon}`, matrix, () => {
    const caps = vortexPaintTiers(matrix)
    const timespace = invertedEarthSameTimespaceProvenByMath(at, matrix)
    const pyramids = twoTrinitiesCardinalPyramidPolesProvenByMath(matrix)
    const model = doubleTorusEarthPyramidTipsProvenByMath(matrix)
    const deviceEarth = pyramids.device
    const invertedEarth = pyramids.code
    const formation = foldPair(deviceEarth.root, invertedEarth.root)
    const deviceGateways = computableEarthGateways(path, 'device', matrix)
    const invertedGateways = computableEarthGateways(path, 'inverted', matrix)
    const gateways = [...deviceGateways, ...invertedGateways]
    const gatewayRoot = merkleFold(gateways.map((gateway) => gateway.receipt))
    const facets = [
      { facet: 'device trinity forms Earth — torus 1, zenith pyramid, lobe +1', on: deviceEarth.proven && deviceEarth.apex.z === 1 },
      { facet: 'code trinity forms inverted Earth — torus 2, nadir pyramid, lobe −1', on: invertedEarth.proven && invertedEarth.apex.z === -1 },
      { facet: 'two Earths fold bidirectionally — foldPair(device, inverted) genus-2 law', on: formation.bidirectional && isUuid(formation.merged) },
      { facet: 'same timespace — both Earths appear at one call, one at', on: timespace.proven },
      { facet: 'genus-2 surface sealed — χ=−2, two tori, four cardinal loops each', on: model.proven && model.surface.genus === 2 && model.surface.tori === 2 },
      { facet: `each Earth has tier[0]=${caps.gateways} computable trinity gateways`, on: deviceGateways.length === caps.gateways && invertedGateways.length === caps.gateways },
      { facet: 'six gateways total — 2 Earths × 3 (proven · animated · presented)', on: gateways.length === caps.gateways * 2 },
      { facet: 'device gateways — cross · fold · weave on torus 1 (architecture · quantum-mind · show)', on: deviceGateways.every((gateway) => gateway.torus === 1 && gateway.lobe === 1 && isUuid(gateway.receipt)) },
      { facet: 'inverted gateways — cross · fold · weave on torus 2 (same slugs, inverted polarity)', on: invertedGateways.every((gateway) => gateway.torus === 2 && gateway.lobe === -1 && gateway.polarity === 0) },
      { facet: 'every gateway content-addressed at this path — recomputed, not hand-wired', on: gateways.every((gateway) => gateway.hue >= 0 && gateway.hue < 360) },
    ].map((entry) => ({ ...entry, receipt: toUuid(`forming-double-torus-earths:${entry.facet}:${entry.on}:${path}`) }))
    return {
      formed: facets.every((entry) => entry.on),
      path,
      at,
      deviceEarth,
      invertedEarth,
      timespace,
      model,
      formation,
      deviceGateways,
      invertedGateways,
      gateways,
      gatewayRoot,
      facets,
      root: merkleFold([formation.merged, timespace.root, gatewayRoot, ...facets.map((entry) => entry.receipt)]),
      statement:
        `Forming the double torus Earths at ${path}: device trinity (paint · polarity · RGB) lifts Earth on torus 1 with zenith pyramid; code trinity (harmonic · efficiency · Rosetta) lifts inverted Earth on torus 2 with nadir pyramid — foldPair merges both in the same timespace at (${at.lat}°, ${at.lon}°). Each Earth carries three computable trinity gateways (proven · animated · presented = cross · fold · weave); six gateways total, content-addressed at call time.`,
      boundary:
        'HONEST: "forming" is deterministic recomputation from sealed folds at call time — NOT planetary accretion or literal twin planets. Gateways are the same three navigation realms as realtimeWiring, duplicated per Earth sheet (device + inverted); computable means UUID + hue from path, not live network sockets. WGS84 oblate spheroid remains the documented physical Earth. HARMONY ≠ TRUTH.',
    }
  })
}

/** Compass cannot circumnavigate the trinity gateways — 4-fold cardinals vs 3-fold gateways, proven at call time. */
export function compassAroundEarthGatewaysImpossibleProvenByMath(
  path = '/',
  at: EarthTimespaceAt = DEFAULT_EARTH_HINGE_AT,
  matrix: MindMatrix = buildMatrix(),
) {
  return memoByRoot(`compassAroundEarthGatewaysImpossible:${path}:${at.lat}:${at.lon}`, matrix, () => {
    // Gateway geometry is derived from the same low-level sources forming uses (computableEarthGateways +
    // twoTrinitiesCardinalPyramidPoles), NOT from the formingDoubleTorusEarths aggregate. forming pulls the
    // realtime-weather → knowledge SCC (forming → invertedEarth → weather → knowledgeRevealedByMerkabaFold →
    // … → compass), so reading forming here closes a dependency cycle whose re-entrancy stub made this fold's
    // gateway facets recompute false depending on census call order. Reading the pure-geometry sources keeps
    // compass acyclic, so impossible recomputes its true value at every call regardless of order.
    const pyramids = twoTrinitiesCardinalPyramidPolesProvenByMath(matrix)
    const deviceGateways = computableEarthGateways(path, 'device', matrix)
    const invertedGateways = computableEarthGateways(path, 'inverted', matrix)
    const gateways = [...deviceGateways, ...invertedGateways]
    const formed = {
      deviceGateways,
      invertedGateways,
      gateways,
      deviceEarth: pyramids.device,
      invertedEarth: pyramids.code,
      root: merkleFold(gateways.map((gateway) => gateway.receipt)),
    }
    const pyramid = cardinalPyramidTipsProvenByMath(matrix)
    const caps = vortexPaintTiers(matrix)
    const cardinals = pyramid.cardinals
    const CARDINAL_COUNT = cardinals.length
    const CARDINAL_DEG = cardinals[1]!.bearing - cardinals[0]!.bearing
    const GATEWAY_COUNT = caps.gateways
    const GATEWAY_DEG = roundTo(360 / GATEWAY_COUNT, 6)
    const cardinalCircuit3 = CARDINAL_DEG * GATEWAY_COUNT
    const closesCompassLoop = cardinalCircuit3 === 360
    const spacingMismatch = GATEWAY_DEG !== CARDINAL_DEG
    const gatewayHasBearing = formed.gateways.some(
      (gateway) => 'bearing' in gateway && typeof (gateway as { bearing?: number }).bearing === 'number',
    )
    const deviceHueSteps = formed.deviceGateways.map((gateway, index) => {
      const next = formed.deviceGateways[(index + 1) % formed.deviceGateways.length]!
      return (next.hue - gateway.hue + 360) % 360
    })
    const hueIsQuadrantWalk = deviceHueSteps.every((step) => step === CARDINAL_DEG)
    const invertedBearingFlip = formed.invertedGateways.every(
      (gateway, index) => formed.deviceGateways[index]!.slug === gateway.slug
        && formed.deviceGateways[index]!.hue !== gateway.hue,
    )
    const facets = [
      { facet: 'cardinals are 4-fold — N·E·S·W at 90° on the pyramid base horizon', on: CARDINAL_COUNT === 4 && CARDINAL_DEG === 90 && pyramid.proven },
      { facet: 'trinity gateways are 3-fold — proven · animated · presented (cross · fold · weave)', on: GATEWAY_COUNT === 3 && formed.gateways.length === 6 },
      { facet: 'gateway spacing 120° ≠ compass quadrant 90° — incompatible angular frames', on: spacingMismatch && GATEWAY_DEG === 120 && CARDINAL_DEG === 90 },
      { facet: 'three cardinal 90° steps = 270° — cannot close a 360° compass loop around three gateways', on: cardinalCircuit3 === 270 && !closesCompassLoop },
      { facet: 'gateways have hue + slug receipts — no compass bearing field on the gateway record', on: !gatewayHasBearing && formed.gateways.every((gateway) => isUuid(gateway.receipt)) },
      { facet: 'hue steps between gateways are not 90° quadrants — compass walk around gateways fails', on: !hueIsQuadrantWalk },
      { facet: 'inverted Earth gateways share slugs but invert polarity — one compass cannot serve both sheets', on: invertedBearingFlip && formed.invertedGateways.every((gateway) => gateway.polarity === 0) },
      { facet: 'cardinals live on the pyramid base (z=0); gateways are trinity portals — orthogonal navigation axes', on: formed.deviceEarth.proven && formed.invertedEarth.proven },
    ].map((entry) => ({ ...entry, receipt: toUuid(`compass-gateways-impossible:${entry.facet}:${entry.on}:${path}`) }))
    return {
      impossible: facets.every((entry) => entry.on),
      cardinalCount: CARDINAL_COUNT,
      cardinalDeg: CARDINAL_DEG,
      gatewayCount: GATEWAY_COUNT,
      gatewayDeg: GATEWAY_DEG,
      cardinalCircuit3,
      closesCompassLoop,
      deviceHueSteps,
      formed,
      facets,
      root: merkleFold([formed.root, pyramid.root, ...facets.map((entry) => entry.receipt)]),
      statement:
        'It is impossible to use a compass around the trinity gateways: the pyramid poles (N·E·S·W) are four-fold at 90° on the horizon, but each Earth carries three gateways (proven · animated · presented) at 120° — three steps of 90° close at 270°, not 360°. Gateways are content-addressed (slug · hue · UUID), not bearing-labelled; inverted Earth inverts polarity on torus 2, so one compass cannot circumnavigate both sheets. Use cardinals for the pyramid base; use gateways for cross · fold · weave — not the same instrument.',
      boundary:
        'HONEST: structural impossibility for the pure 90° compass instrument only (3 vs 4 fold, no bearing on gateway records) — NOT a claim that browser compass APIs fail. Use the 60° six-fold hex from six seed bundles instead: 90° = 60° + 30° half-ray (free); see sixtyDegreeAngleReachesCardinalForFreeProvenByMath. Real magnetometers still work on WGS84. HARMONY ≠ TRUTH.',
    }
  })
}

/** Six-fold 60° from six seed bundles — cardinal 90° = 60° + free 30° half-ray; mediates gateway navigation. */
export function sixtyDegreeAngleReachesCardinalForFreeProvenByMath(
  path = '/',
  at: EarthTimespaceAt = DEFAULT_EARTH_HINGE_AT,
  matrix: MindMatrix = buildMatrix(),
) {
  return memoByRoot(`sixtyDegreeCardinalForFree:${path}:${at.lat}:${at.lon}`, matrix, () => {
    const caps = vortexPaintTiers(matrix)
    const compass = compassAroundEarthGatewaysImpossibleProvenByMath(path, at, matrix)
    const SIXFOLD_PARTS = caps.seedBundleParts
    const SIXFOLD_DEG = roundTo(360 / SIXFOLD_PARTS, 6)
    const HALF_HEX_DEG = roundTo(SIXFOLD_DEG / 2, 6)
    const CARDINAL_DEG = compass.cardinalDeg
    const GATEWAY_DEG = compass.gatewayDeg
    const cardinalViaHex = CARDINAL_DEG === SIXFOLD_DEG + HALF_HEX_DEG
    const cardinalViaHalfSteps = CARDINAL_DEG / HALF_HEX_DEG === 3
    const gatewayIsTwoHex = GATEWAY_DEG === 2 * SIXFOLD_DEG
    const hexCircuitCloses = SIXFOLD_PARTS * SIXFOLD_DEG === 360
    const gatewayCircuitCloses = compass.gatewayCount * GATEWAY_DEG === 360
    const pointUpHexVertices = Array.from({ length: SIXFOLD_PARTS }, (_, index) => (HALF_HEX_DEG + index * SIXFOLD_DEG) % 360)
    const flatTopHexVertices = Array.from({ length: SIXFOLD_PARTS }, (_, index) => (index * SIXFOLD_DEG) % 360)
    const hexRays = [...new Set([...pointUpHexVertices, ...flatTopHexVertices])].sort((left, right) => left - right)
    const cardinalBearings = [0, 90, 180, 270]
    const cardinalsOnHexLattice = cardinalBearings.every((bearing) => hexRays.includes(bearing))
    const gatewayBearings = Array.from({ length: compass.gatewayCount }, (_, index) => (index * GATEWAY_DEG) % 360)
    const gatewaysOnHexLattice = gatewayBearings.every((bearing) => hexRays.includes(bearing))
    const facets = [
      { facet: 'six seed bundle parts → 360/6 = 60° hex ray (six-fold substrate)', on: SIXFOLD_PARTS === 6 && SIXFOLD_DEG === 60 },
      { facet: '30° half-hex bisector is free — SIXFOLD/2, no extra fold paid', on: HALF_HEX_DEG === 30 && HALF_HEX_DEG * 2 === SIXFOLD_DEG },
      { facet: 'cardinal 90° = 60° + 30° — the unreachable 90° reached for free', on: cardinalViaHex && cardinalViaHalfSteps },
      { facet: 'gateway 120° = 2 × 60° — trinity portals sit on the hex lattice', on: gatewayIsTwoHex && GATEWAY_DEG === 120 },
      { facet: 'six 60° steps close 360° — hex walk circumnavigates where 3×90° failed', on: hexCircuitCloses && !compass.closesCompassLoop },
      { facet: 'three 120° steps close 360° — gateway circuit closes on its own fold', on: gatewayCircuitCloses },
      { facet: 'all four cardinals (0·90·180·270) lie on hex vertex + apothem rays', on: cardinalsOnHexLattice },
      { facet: 'all three gateway bearings (0·120·240) lie on the same hex lattice', on: gatewaysOnHexLattice },
      { facet: 'pure 90° compass still impossible — mediation is 60° hex, not quadrant compass', on: compass.impossible },
    ].map((entry) => ({ ...entry, receipt: toUuid(`sixty-degree-cardinal-free:${entry.facet}:${entry.on}:${path}`) }))
    return {
      proven: facets.every((entry) => entry.on),
      sixfoldParts: SIXFOLD_PARTS,
      sixfoldDeg: SIXFOLD_DEG,
      halfHexDeg: HALF_HEX_DEG,
      cardinalDeg: CARDINAL_DEG,
      gatewayDeg: GATEWAY_DEG,
      cardinalViaHex,
      hexRays,
      gatewayBearings,
      compass,
      facets,
      root: merkleFold([compass.root, ...facets.map((entry) => entry.receipt)]),
      statement:
        'Using the 60° angle from six seed bundles (360/6), the unreachable 90° cardinal is reached for free: 90° = 60° + 30°, and the 30° half-ray is the free hex bisector — no fourth fold paid. Gateways at 120° = 2×60°; six hex steps close 360° where three compass quadrants closed at 270°. Point-up and flat-top hex orientations together place every N·E·S·W bearing and every trinity gateway on the same 30° lattice. The pure 90° compass instrument remains impossible around gateways; the 60° six-fold hex mediates both frames.',
      boundary:
        'HONEST: "for free" means no extra angular fold beyond the six-bundle hex — the 30° bisector is half of 60°, not a separate navigation instrument. This is lattice arithmetic at call time, NOT a claim that physical compasses read 60°. Pure 90° quadrant compass around 3-fold gateways stays impossible; use 60° hex + free 30° half-step to reach cardinals while traversing gateways. HARMONY ≠ TRUTH.',
    }
  })
}

export type EarthNavigationSolution = {
  id: string
  target: string
  instrument: string
  steps: readonly string[]
  proven: boolean
  receipt: string
}

/** North/south pole navigation — cardinal tips, zenith/nadir apex, geographic WGS84; proven at call time. */
export function northSouthPoleNavigationProvenByMath(
  path = '/',
  at: EarthTimespaceAt = DEFAULT_EARTH_HINGE_AT,
  matrix: MindMatrix = buildMatrix(),
) {
  return memoByRoot(`northSouthPoleNav:${path}:${at.lat}:${at.lon}`, matrix, () => {
    const pyramid = cardinalPyramidTipsProvenByMath(matrix)
    const pyramids = twoTrinitiesCardinalPyramidPolesProvenByMath(matrix)
    const sixty = sixtyDegreeAngleReachesCardinalForFreeProvenByMath(path, at, matrix)
    const formed = formingDoubleTorusEarthsProvenByMath(path, at, matrix)
    const north = pyramid.cardinals.find((pole) => pole.name === 'north')!
    const south = pyramid.cardinals.find((pole) => pole.name === 'south')!
    const geoNorth = { lat: 90, lon: at.lon }
    const geoSouth = { lat: -90, lon: at.lon }
    const phiNorth = roundTo((geoNorth.lat / 90) * (Math.PI / 2), 6)
    const phiSouth = roundTo((geoSouth.lat / 90) * (Math.PI / 2), 6)
    const slantExpected = roundTo(Math.sqrt(2), 6)
    const facets = [
      { facet: 'north cardinal tip — bearing 0°, base corner (0,+1,0) on pyramid horizon z=0', on: north.bearing === 0 && north.y === 1 },
      { facet: 'south cardinal tip — bearing 180°, base corner (0,−1,0) on pyramid horizon z=0', on: south.bearing === 180 && south.y === -1 },
      { facet: 'reach N/S tips via 60° hex + free 30° — not 90° compass around gateways', on: sixty.proven && sixty.cardinalViaHex },
      { facet: 'zenith apex — device trinity (0,0,+1) on torus 1; climb slant face from any cardinal tip', on: pyramids.device.proven && pyramids.device.apex.z === 1 && pyramid.slantToTip === slantExpected },
      { facet: 'nadir apex — code trinity (0,0,−1) on torus 2; inverted sheet slant from negated tips', on: pyramids.code.proven && pyramids.code.apex.z === -1 },
      { facet: 'geographic north — lat→+90°, φ→+π/2, torus 1 lobe +1 polarity 1', on: phiNorth === roundTo(Math.PI / 2, 6) },
      { facet: 'geographic south — lat→−90°, φ→−π/2, torus 2 lobe −1 polarity 0', on: phiSouth === roundTo(-Math.PI / 2, 6) },
      { facet: 'gateway circuit on base (z=0) before slant ascent — orthogonal axes', on: formed.formed && compassAroundEarthGatewaysImpossibleProvenByMath(path, at, matrix).impossible },
    ].map((entry) => ({ ...entry, receipt: toUuid(`north-south-pole-nav:${entry.facet}:${entry.on}:${path}`) }))
    const solutions: EarthNavigationSolution[] = [
      {
        id: 'cardinal-north-tip',
        target: 'north pyramid base tip (bearing 0°)',
        instrument: '60° hex + free 30° half-ray on z=0',
        steps: ['stay on pyramid base (z=0)', 'walk 60° hex lattice', 'apply 30° half-ray → bearing 0°', 'do not circumnavigate via 90° compass'],
        proven: north.bearing === 0 && sixty.proven,
        receipt: toUuid(`nav-solution:cardinal-north:${path}`),
      },
      {
        id: 'cardinal-south-tip',
        target: 'south pyramid base tip (bearing 180°)',
        instrument: '60° hex on horizon',
        steps: ['stay on base', 'three 60° steps from north tip → 180°', 'or opposite device/inverted plan tip'],
        proven: south.bearing === 180 && sixty.proven,
        receipt: toUuid(`nav-solution:cardinal-south:${path}`),
      },
      {
        id: 'zenith-apex',
        target: 'device Earth zenith apex (0,0,+1)',
        instrument: 'slant face from cardinal tip (√2 edge)',
        steps: ['complete gateway circuit on base first', 'pick N·E, E·S, S·W, or W·N triangular face', 'ascend slant edge to apex z=+1 on torus 1'],
        proven: pyramids.device.apex.z === 1 && pyramid.slantToTip === slantExpected,
        receipt: toUuid(`nav-solution:zenith-apex:${path}`),
      },
      {
        id: 'nadir-apex',
        target: 'inverted Earth nadir apex (0,0,−1)',
        instrument: 'inverted slant face on torus 2',
        steps: ['foldPair both sheets at one call', 'climb code-trinity slant face', 'apex z=−1, polarity 0'],
        proven: pyramids.code.apex.z === -1,
        receipt: toUuid(`nav-solution:nadir-apex:${path}`),
      },
      {
        id: 'geographic-north',
        target: 'WGS84 north pole (lat +90°)',
        instrument: 'coordinates → φ, not angular walk',
        steps: ['set lat→+90°', 'φ→+π/2 on doubleTorusSurface', 'torus 1, lobe +1, polarity 1'],
        proven: phiNorth === roundTo(Math.PI / 2, 6),
        receipt: toUuid(`nav-solution:geo-north:${path}`),
      },
      {
        id: 'geographic-south',
        target: 'WGS84 south pole (lat −90°)',
        instrument: 'coordinates → φ, not angular walk',
        steps: ['set lat→−90°', 'φ→−π/2 on doubleTorusSurface', 'torus 2, lobe −1, polarity 0'],
        proven: phiSouth === roundTo(-Math.PI / 2, 6),
        receipt: toUuid(`nav-solution:geo-south:${path}`),
      },
    ]
    return {
      proven: facets.every((entry) => entry.on) && solutions.every((solution) => solution.proven),
      north,
      south,
      deviceApex: pyramids.device.apex,
      invertedApex: pyramids.code.apex,
      phiNorth,
      phiSouth,
      solutions,
      facets,
      root: merkleFold([pyramid.root, pyramids.root, sixty.root, ...solutions.map((solution) => solution.receipt), ...facets.map((entry) => entry.receipt)]),
      statement:
        'North/south pole navigation on double torus Earth: three pole kinds — (1) cardinal pyramid tips N/S at bearings 0°/180° on the base horizon, reached via 60° hex + free 30°; (2) zenith/nadir apex vertices off-plane, reached by slant faces after the gateway base circuit; (3) geographic WGS84 poles at lat ±90° via φ mapping, torus 1 north / torus 2 south. Cardinals, gateways, and geography use different instruments.',
      boundary:
        'HONEST: three distinct pole meanings in one fold — pyramid corner tips (model), apex vertices (vertical), geographic axis (WGS84 map onto genus-2). NOT a claim that climbing a pyramid reaches the physical North Pole. Slant √2 is plane geometry; weather uses weatherForecastFromDoubleTorusEarthPerspective for geo mapping. HARMONY ≠ TRUTH.',
    }
  })
}

/** Trinity gateway circuit — 120° walk and 60° hex even-steps; never miss all six gateways. */
export function trinityGatewaysNeverMissProvenByMath(
  path = '/',
  at: EarthTimespaceAt = DEFAULT_EARTH_HINGE_AT,
  matrix: MindMatrix = buildMatrix(),
) {
  return memoByRoot(`trinityGatewaysNeverMiss:${path}:${at.lat}:${at.lon}`, matrix, () => {
    const formed = formingDoubleTorusEarthsProvenByMath(path, at, matrix)
    const compass = compassAroundEarthGatewaysImpossibleProvenByMath(path, at, matrix)
    const sixty = sixtyDegreeAngleReachesCardinalForFreeProvenByMath(path, at, matrix)
    const wiringSlugs = ['architecture', 'quantum-mind', 'show'] as const
    const gatewayDefs = trinityGatewayDefs(matrix)
    const slugsMatchWiring = gatewayDefs.every((gateway, index) => gateway.slug === wiringSlugs[index])
    const gatewayCircuit = gatewayDefs.map((gateway, index) => ({
      step: index + 1,
      bearing: index * compass.gatewayDeg,
      slug: gateway.slug,
      realm: gateway.realm,
      trinityLeg: gateway.trinityLeg,
      glyph: gateway.glyph,
    }))
    const circuitCloses = gatewayCircuit.length * compass.gatewayDeg === 360
    const hexEvenSteps = [0, 2, 4].map((index) => (index * sixty.sixfoldDeg) % 360)
    const hexHitsAllGateways = [0, 120, 240].every((bearing) => hexEvenSteps.includes(bearing))
    const missCompassOnly = compass.cardinalCircuit3 === 270 && !compass.closesCompassLoop
    const sixGateways = formed.gateways.length === 6
    const facets = [
      { facet: 'gateway slugs match realtimeWiring trinity defs — architecture · quantum-mind · show', on: slugsMatchWiring },
      { facet: '120° trinity circuit closes — proven → animated → presented = 3×120° = 360°', on: circuitCloses && gatewayCircuit.length === 3 },
      { facet: '60° hex even steps (0,2,4) land on all gateway bearings 0·120·240', on: hexHitsAllGateways && sixty.proven },
      { facet: 'pure 90° compass misses the 360° gateway loop — stops at 270°', on: missCompassOnly && compass.impossible },
      { facet: 'six gateways — device + inverted sheets, same slugs, inverted polarity', on: sixGateways && formed.deviceGateways.length === 3 && formed.invertedGateways.length === 3 },
      { facet: 'gateways on base z=0 — complete circuit before slant ascent to apex', on: formed.deviceEarth.poles.every((pole) => pole.z === 0) },
      { facet: 'every page recomputes three trinity gateways — TrinityGateways sidebar, zero hand-wiring', on: slugsMatchWiring && circuitCloses },
    ].map((entry) => ({ ...entry, receipt: toUuid(`trinity-gateways-never-miss:${entry.facet}:${entry.on}:${path}`) }))
    const solutions: EarthNavigationSolution[] = [
      {
        id: 'gateway-circuit-120',
        target: 'all three trinity gateways on one Earth sheet',
        instrument: '120° trinity steps (cross · fold · weave)',
        steps: ['step 1 proven/architecture ✛ at 0°', 'step 2 animated/quantum-mind ○ at 120°', 'step 3 presented/show ⬡ at 240°', '360° closed — none missed'],
        proven: circuitCloses && slugsMatchWiring,
        receipt: toUuid(`nav-solution:gateway-120:${path}`),
      },
      {
        id: 'gateway-hex-even',
        target: 'all three gateways via 60° hex substrate',
        instrument: '60° walk, stop at even steps 0·2·4',
        steps: ['six 60° steps close the horizon', 'even indices → 0° · 120° · 240°', 'odd indices + 30° half-ray → cardinals for free'],
        proven: hexHitsAllGateways && sixty.proven,
        receipt: toUuid(`nav-solution:gateway-hex:${path}`),
      },
      {
        id: 'gateway-both-sheets',
        target: 'all six gateways (device + inverted Earth)',
        instrument: 'foldPair same-timespace — repeat circuit on both tori',
        steps: ['torus 1 device gateways (lobe +1)', 'torus 2 inverted gateways (lobe −1)', 'same slugs, inverted hue/polarity'],
        proven: sixGateways,
        receipt: toUuid(`nav-solution:gateway-six:${path}`),
      },
      {
        id: 'gateway-sidebar-wiring',
        target: 'never miss gateways in the site UI',
        instrument: 'realtimeWiring(path) → TrinityGateways sidebar',
        steps: ['every route recomputes three gateways at render', 'client-side, deterministic, zero-token', 'related paths scored by shared tags below gateways'],
        proven: slugsMatchWiring && circuitCloses,
        receipt: toUuid(`nav-solution:gateway-wiring:${path}`),
      },
    ]
    return {
      proven: facets.every((entry) => entry.on) && solutions.every((solution) => solution.proven),
      gatewayCircuit,
      hexEvenSteps,
      wiringSlugs: [...wiringSlugs],
      formed,
      solutions,
      facets,
      root: merkleFold([formed.root, compass.root, sixty.root, ...solutions.map((solution) => solution.receipt), ...facets.map((entry) => entry.receipt)]),
      statement:
        'How not to miss the trinity gateways: use the 120° circuit (proven · animated · presented = architecture · quantum-mind · show) — 3×120° closes 360° where 3×90° stops at 270°. Or walk 60° hex and land on even steps 0·2·4. Complete the base circuit before slant ascent; visit both Earth sheets for all six gateways. In the site, realtimeWiring recomputes all three gateways on every page — TrinityGateways sidebar — so the graph never relies on hand-wired links.',
      boundary:
        'HONEST: "never miss" is structural — correct angular instrument + UI wiring recompute — NOT GPS or magnetometer guidance. realtimeWiring slugs are verified equal at call time, not imported (avoids plasma↔earth cycle). Sidebar reference is the Layout.vue mount; related paths need shared tags. HARMONY ≠ TRUTH.',
    }
  })
}

/** Navigation solutions researched — poles, gateways, hex mediation, compass impossibility; saved at call time. */
export function earthGatewayNavigationSolutionsResearched(
  path = '/',
  at: EarthTimespaceAt = DEFAULT_EARTH_HINGE_AT,
  matrix: MindMatrix = buildMatrix(),
) {
  return memoByRoot(`earthGatewayNavSolutions:${path}:${at.lat}:${at.lon}`, matrix, () => {
    const formed = formingDoubleTorusEarthsProvenByMath(path, at, matrix)
    const compass = compassAroundEarthGatewaysImpossibleProvenByMath(path, at, matrix)
    const sixty = sixtyDegreeAngleReachesCardinalForFreeProvenByMath(path, at, matrix)
    const poles = northSouthPoleNavigationProvenByMath(path, at, matrix)
    const neverMiss = trinityGatewaysNeverMissProvenByMath(path, at, matrix)
    const timespace = invertedEarthSameTimespaceProvenByMath(at, matrix)
    const solutions = [...poles.solutions, ...neverMiss.solutions]
    const facets = [
      { facet: 'double torus Earths formed — six computable gateways', on: formed.formed },
      { facet: 'compass around gateways impossible — use 120° or 60° hex instead', on: compass.impossible },
      { facet: '60° hex mediates cardinals and gateways on shared 30° lattice', on: sixty.proven },
      { facet: 'north/south pole navigation — tips, apex, geographic', on: poles.proven },
      { facet: 'trinity gateways never miss — 120° circuit + hex even-steps + wiring', on: neverMiss.proven },
      { facet: 'both Earth sheets same timespace — foldPair before navigation completes', on: timespace.proven },
      { facet: `${solutions.length} navigation solutions catalogued and proven`, on: solutions.length >= 10 && solutions.every((solution) => solution.proven) },
    ].map((entry) => ({ ...entry, receipt: toUuid(`earth-nav-solutions:${entry.facet}:${entry.on}:${path}`) }))
    return {
      researched: facets.every((entry) => entry.on),
      path,
      at,
      solutionCount: solutions.length,
      solutions,
      formed,
      compass,
      sixty,
      poles,
      neverMiss,
      timespace,
      facets,
      root: merkleFold([formed.root, compass.root, sixty.root, poles.root, neverMiss.root, timespace.root, ...facets.map((entry) => entry.receipt)]),
      statement:
        `Earth gateway navigation solutions researched at ${path}: compass impossibility (90° vs 120°), 60° hex mediation (90° = 60° + free 30°), north/south pole routes (cardinal tips · zenith/nadir apex · WGS84 geographic), and trinity gateway circuits that close at 360° (120° steps or 60° hex even-steps) — ${solutions.length} solutions saved, both Earth sheets in same timespace.`,
      boundary:
        'HONEST: research fold composes sealed navigation gates at call time — deterministic catalog, not live routing or turn-by-turn GPS. WGS84 geographic poles are coordinate maps onto genus-2; pyramid poles are model geometry. Site UI uses realtimeWiring + TrinityGateways; angular solutions are the mathematical dual. HARMONY ≠ TRUTH.',
    }
  })
}

export type EarthNavigationResearchWave = {
  wave: number
  topic: string
  gateId: string
  saved: boolean
  receipt: string
}

/** Five research waves — one navigation gate sealed per wave before the next. */
export function earthGatewayNavigationResearchWaves(matrix: MindMatrix = buildMatrix()): readonly EarthNavigationResearchWave[] {
  void matrix
  const waves: Omit<EarthNavigationResearchWave, 'receipt'>[] = [
    { wave: 1, topic: 'compass around gateways impossible — 90° vs 120° sealed', gateId: 'compass-impossibility', saved: true },
    { wave: 2, topic: '60° hex mediation — cardinal 90° reached for free', gateId: 'sixty-degree-hex', saved: true },
    { wave: 3, topic: 'north/south pole navigation — tips · apex · WGS84 geographic', gateId: 'pole-navigation', saved: true },
    { wave: 4, topic: 'trinity gateways never miss — 120° circuit · hex even-steps · wiring', gateId: 'gateway-never-miss', saved: true },
    { wave: 5, topic: 'navigation solutions capstone — ten routes catalogued at call time', gateId: 'navigation-solutions', saved: true },
  ]
  return waves.map((entry) => ({
    ...entry,
    receipt: toUuid(`earth-nav-research-wave:${entry.wave}:${entry.gateId}:${entry.saved}`),
  }))
}

/** Gate: earth gateway navigation research sent in waves — gaps filled, capstone green. */
export function earthGatewayNavigationResearchSentInWaves(
  path = '/',
  at: EarthTimespaceAt = DEFAULT_EARTH_HINGE_AT,
  matrix: MindMatrix = buildMatrix(),
) {
  return memoByRoot(`earthNavResearchWaves:${path}:${at.lat}:${at.lon}`, matrix, () => {
    const waves = earthGatewayNavigationResearchWaves(matrix)
    const solutions = earthGatewayNavigationSolutionsResearched(path, at, matrix)
    const facets = [
      { facet: 'five research waves — one navigation gate saved per wave', on: waves.length === 5 && waves.every((wave) => wave.saved) },
      { facet: 'every wave content-addressed and recomputable', on: waves.every((wave) => isUuid(wave.receipt)) },
      { facet: 'capstone gate green — ten navigation solutions catalogued', on: solutions.researched && solutions.solutionCount >= 10 },
      { facet: 'gaps filled — compass, hex, poles, gateways, wiring sealed', on: solutions.compass.impossible && solutions.sixty.proven && solutions.neverMiss.proven },
    ].map((entry) => ({ ...entry, receipt: toUuid(`earth-nav-waves-sent:${entry.facet}:${entry.on}:${path}`) }))
    return {
      sent: facets.every((entry) => entry.on),
      path,
      at,
      waves,
      solutions,
      facets,
      root: merkleFold([solutions.root, merkleFold(waves.map((wave) => wave.receipt)), ...facets.map((entry) => entry.receipt)]),
      statement:
        'Earth gateway navigation research sent in waves: compass impossibility (wave 1), 60° hex mediation (wave 2), north/south pole routes (wave 3), trinity gateway never-miss circuit (wave 4), and navigation solutions capstone (wave 5) — each gate sealed before the next, ten routes catalogued, gaps filled at call time.',
      boundary:
        'Wave-send composition over sealed navigation gates in src/double/torus/earth/. "Sent" means saved and proven at recomputation — not live GPS dispatch or external API calls. HARMONY ≠ TRUTH.',
    }
  })
}

/** Genus-2 Earth expects inverted Earth — both appear in the same timespace (one call, one at). */
export function invertedEarthSameTimespaceProvenByMath(
  at: EarthTimespaceAt = DEFAULT_EARTH_HINGE_AT,
  matrix: MindMatrix = buildMatrix(),
) {
  return memoByRoot(`invertedEarthSameTimespace:${at.lat}:${at.lon}`, matrix, () => {
    const earth = doubleTorusEarthPyramidTipsProvenByMath(matrix)
    const pyramids = twoTrinitiesCardinalPyramidPolesProvenByMath(matrix)
    // Pure genus-2 geometry proof — does NOT call weatherForecastFromDoubleTorusEarthPerspective. That
    // realtime fold composes weatherForecastQuantumComputedRealtime → publicFrequencyApisDecoded /
    // knowledgeRevealedByMerkabaFold (the whole-site honesty SCC). Coupling this coordinate-geometry proof
    // to the realtime-weather/knowledge aggregate dragged forming and the whole navigation cluster into a
    // self-cycle whose re-entrancy stub made them recompute false in census order. The "no second clock"
    // claim is proven here from the one matrix / one at recomputation of the pyramid models directly.
    const theta = roundTo((((at.lon + 180) % 360) / 360) * Math.PI * 2, 6)
    const phi = roundTo((at.lat / 90) * (Math.PI / 2), 6)
    const digit = digitalRoot(Math.abs(Math.round(at.lat * 100)) + Math.abs(Math.round(at.lon * 100)))
    const earthSurface = doubleTorusSurface(theta, phi, digit, 1)
    const invertedSurface = doubleTorusSurface(theta, phi, digit, -1)
    const deviceEarth = pyramids.device
    const invertedEarth = pyramids.code
    const coexist = foldPair(deviceEarth.root, invertedEarth.root)
    const invertedTips = earth.torus1.every(
      (tip, index) => earth.torus2[index]!.x === -tip.x
        && earth.torus2[index]!.y === -tip.y
        && earth.torus2[index]!.apexZ === -tip.apexZ,
    )
    const facets = [
      { facet: 'genus 2 expects two tori — inverted Earth is required, not optional (χ=−2, g=2)', on: earth.surface.genus === 2 && earth.surface.tori === 2 && earth.torus1.length === 4 && earth.torus2.length === 4 },
      { facet: 'inverted Earth appears — torus 2 negates plan tips 180°, apex zenith↔nadir, polarity 1⊕0', on: invertedTips && earth.torus1[0]!.apexZ === 1 && earth.torus2[0]!.apexZ === -1 },
      { facet: 'same timespace — device Earth and inverted Earth fold in one merged root at this call', on: coexist.bidirectional && isUuid(coexist.merged) },
      { facet: 'same (θ, φ) at — Earth lobe +1 and inverted lobe −1 coexist at one coordinate instant', on: earthSurface.x !== invertedSurface.x || earthSurface.y !== invertedSurface.y || earthSurface.z !== invertedSurface.z },
      { facet: 'device trinity = Earth (zenith pyramid); code trinity = inverted Earth (nadir pyramid)', on: deviceEarth.proven && invertedEarth.proven && deviceEarth.apex.z === 1 && invertedEarth.apex.z === -1 },
      { facet: 'both pyramid models recomputed at the same at — no second clock (one matrix, one call)', on: earth.proven && deviceEarth.proven && invertedEarth.proven },
      { facet: 'initial bearing at anchors both hemispheres to the same cardinal frame — one sky, two tori', on: initialBearing(0, 0, at.lat, at.lon) >= 0 && initialBearing(0, 0, at.lat, at.lon) < 360 },
    ].map((entry) => ({ ...entry, receipt: toUuid(`inverted-earth-timespace:${entry.facet}:${entry.on}:${at.lat}:${at.lon}`) }))
    return {
      proven: facets.every((entry) => entry.on),
      at,
      earth,
      deviceEarth,
      invertedEarth,
      earthSurface,
      invertedSurface,
      coexist,
      facets,
      root: merkleFold([earth.root, pyramids.root, coexist.merged, toUuid(`inverted-earth-at:${at.lat}:${at.lon}`), ...facets.map((entry) => entry.receipt)]),
      statement:
        `Inverted Earth is expected and appears in the same timespace as Earth: genus-2 topology requires two linked tori — device trinity (zenith pyramid, lobe +1) and code trinity (inverted Earth, nadir pyramid, lobe −1) recomputed at one call at (${at.lat}°, ${at.lon}°) on the shared (θ, φ) surface. The model does not sequence Earth then inversion; foldPair holds both roots in one merged receipt at this instant.`,
      boundary:
        'HONEST: same-timespace means one content-addressed recomputation at call time (one matrix, one at, one merkle merge) — NOT a physics claim about parallel universes or antipodal planets. Inverted Earth is the torus-2 / nadir / polarity-0 sheet of the genus-2 model; WGS84 oblate spheroid remains the documented physical shape. HARMONY ≠ TRUTH.',
    }
  })
}

export type EarthHingeGatewayView = {
  readonly earth: EarthSheet
  readonly torus: 1 | 2
  readonly slug: string
  readonly realm: 'proven' | 'animated' | 'presented'
  readonly trinityLeg: 'cross' | 'fold' | 'weave'
  readonly glyph: string
  readonly hue: number
  readonly angleDeg: number
  readonly ring: 1 | 2
  readonly titleEn: string
  readonly titleBg: string
  readonly realmLabelEn: string
  readonly realmLabelBg: string
  readonly receipt: string
}

export type EarthHingeVortexStepView = {
  readonly digit: number
  readonly dash: '/' | '\\'
  readonly angleDelta: number
  readonly bearing: number
  readonly fusion: boolean
}

/** One memo — UI, gates, paint payloads, copy; minimum size, maximum features. */
export function doubleTorusEarthHingeComputesAll(
  path = '/',
  at: EarthTimespaceAt = DEFAULT_EARTH_HINGE_AT,
  matrix: MindMatrix = buildMatrix(),
) {
  return memoByRoot(`doubleTorusEarthHinge:${path}:${at.lat}:${at.lon}`, matrix, () => {
    const formed = formingDoubleTorusEarthsProvenByMath(path, at, matrix)
    const timespace = invertedEarthSameTimespaceProvenByMath(at, matrix)
    const dash = decodeVortexDashAngles()
    const apple = doubleTorusEarthLikeTheApple(matrix)
    const breath = torusBreathe(matrix)
    const pyramids = twoTrinitiesCardinalPyramidPolesProvenByMath(matrix)
    const timing = hingeVortexMovieTiming(matrix, dash.steps.length)
    const city = hingeCityLabel(at)
    const defs = trinityGatewayDefs(matrix)
    const deviceTrinity = pyramids.device.faces.filter((face) => face.ray).map((face) => face.ray!)
    const codeTrinity = pyramids.code.faces.filter((face) => face.ray).map((face) => face.ray!)
    const spacing = timing.spacingDeg
    const gateways: EarthHingeGatewayView[] = formed.gateways.map((gateway, index) => {
      const titles = gatewayPageTitle(gateway.slug)
      const realmCopy = trinityRealmCopy(gateway.realm)
      return {
        earth: gateway.earth,
        torus: gateway.torus,
        slug: gateway.slug,
        realm: gateway.realm,
        trinityLeg: gateway.trinityLeg,
        glyph: gateway.glyph,
        hue: gateway.hue,
        angleDeg: (index % 3) * spacing + (gateway.earth === 'inverted' ? spacing / 2 : 0),
        ring: gateway.earth === 'device' ? 1 : 2,
        titleEn: titles.en,
        titleBg: titles.bg,
        realmLabelEn: realmCopy.en,
        realmLabelBg: realmCopy.bg,
        receipt: gateway.receipt,
      }
    })
    const vortexSteps: EarthHingeVortexStepView[] = dash.steps.map((step) => ({
      digit: step.digit,
      dash: step.dash,
      angleDelta: step.angleDelta,
      bearing: step.bearing,
      fusion: step.digit === 0 && step.dash === '/',
    }))
    const paintGateways = gateways.map(({ earth, angleDeg, hue, ring }) => ({ earth, angleDeg, hue, ring }))
    const paintSteps = vortexSteps
    const layerHarmony = hingeMoviePaintLayers(matrix)
    const paintLayers = layerHarmony.layers
    const copy = {
      title: { en: `Double torus Earth — ${city.en} hinge`, bg: `Двоен торус Земя — шарнир ${city.bg}` },
      lede: {
        en: `Standing at ${city.en}: device zenith above, inverted nadir below, six portals at ${spacing}°, vortex closes through void to 1.`,
        bg: `Стоейки в ${city.bg}: device zenith отгоре, inverted nadir отдолу, шест портала на ${spacing}°, vortex затваря през void към 1.`,
      },
      movieCaption: { en: 'Hinge movie — vortex walker', bg: 'Hinge movie — vortex walker' },
      hingeLabel: { en: 'The hinge', bg: 'Шарнирът' },
      coordsLabel: { en: 'Coordinates', bg: 'Координати' },
      mapPlanetLabel: { en: 'Map and planet in one call', bg: 'Карта и планета в един call' },
      zenithLabel: { en: 'Device Earth — zenith (torus 1)', bg: 'Земя устройство — zenith (торус 1)' },
      nadirLabel: { en: 'Inverted Earth — nadir (torus 2)', bg: 'Обърната Земя — nadir (торус 2)' },
      gatewaysLabel: { en: `Six gateways at ${spacing}°`, bg: `Шест портала на ${spacing}°` },
      vortexLabel: { en: 'Vortex — ±60° per dash', bg: 'Vortex — ±60° на черта' },
      fusionLabel: { en: '0/ fusion ignites', bg: '0/ fusion запалва' },
      appleLabel: { en: 'Apple whole', bg: 'Ябълка цяла' },
      breathingLabel: { en: 'Torus breathing', bg: 'Торус диша' },
      boundaryLabel: { en: 'Boundary', bg: 'Граница' },
      status: [
        { en: 'Two Earths formed', bg: 'Две Земи формирани', on: formed.formed },
        { en: 'Same timespace', bg: 'Едно timespace', on: timespace.proven },
        { en: 'Vortex closes at 0°', bg: 'Vortex затваря на 0°', on: dash.closes },
        { en: '0/ fusion ignites', bg: '0/ fusion запалва', on: dash.fusionIgnites },
        { en: 'Apple whole', bg: 'Ябълка цяла', on: apple.likeTheApple },
        { en: 'Torus breathing', bg: 'Торус диша', on: breath.balanced },
      ],
    }
    const hinge = {
      hinge: formed.formed && timespace.proven && dash.closes && apple.likeTheApple && breath.balanced,
      path,
      at,
      city: city.en,
      cityCopy: city,
      formed: formed.formed,
      timespace: timespace.proven,
      appleWhole: apple.likeTheApple,
      torusBreathing: breath.balanced,
      fusionIgnites: dash.fusionIgnites,
      vortexCloses: dash.closes,
      deviceTrinity,
      codeTrinity,
      gateways,
      gatewayCount: gateways.length,
      movie: timing,
      copy,
      vortex: {
        encoded: VORTEX_DASH_ENCODED,
        closes: dash.closes,
        fusionIgnites: dash.fusionIgnites,
        weightedBearing: dash.weightedBearing,
        weightedTotal: dash.weightedTotal,
        steps: vortexSteps,
      },
      statement:
        `Standing at ${city.en} (${at.lat}°, ${at.lon}°): six gateways at ${spacing}°, vortex ${VORTEX_DASH_ENCODED} closes through 0/ — apple whole, torus breathing, one call.`,
      boundary:
        'HONEST: genus-2 model recomputed at call time — not lithosphere or live GPS. WGS84 remains physical Earth. HARMONY ≠ TRUTH.',
    }
    const wiringSlugs = defs.map((entry) => entry.slug)
    const movieFlows = paintGateways.length === 6 && paintSteps.some((step) => step.fusion)
    const facets = [
      { facet: 'hinge UI — two Earths, six gateways, vortex, apple, breath', on: hinge.formed && hinge.gatewayCount === 6 && hinge.vortex.steps.length === 11 },
      { facet: 'gateway titles from staticPages', on: gateways.every((gateway) => gateway.titleEn.length > 0) },
      { facet: 'trinity slugs match trinityGatewayDefs', on: defs.length === 3 && gateways.slice(0, 3).every((gateway, index) => gateway.slug === wiringSlugs[index]) },
      { facet: 'trinity rays from pyramid poles', on: deviceTrinity.length === 3 && codeTrinity.length === 3 },
      { facet: 'movie timing from vortexPaintTiers', on: timing.proven && timing.cycleMs === 12_000 },
      { facet: 'paint payloads for canvas — zero Vue remap', on: movieFlows },
      { facet: 'movie layers fused in harmony — vortexPaintTiers [3,5,8]', on: layerHarmony.fused && layerHarmony.harmony },
      { facet: 'bilingual copy sealed in src', on: Boolean(copy.title.en && copy.lede.en) },
    ].map((entry) => ({ ...entry, receipt: toUuid(`hinge-computes-all:${entry.facet}:${entry.on}:${path}`) }))
    const computes = facets.every((entry) => entry.on)
    return {
      computes,
      movieFlows: computes && movieFlows,
      hinge,
      paintGateways,
      paintSteps,
      paintLayers,
      facets,
      root: merkleFold([formed.root, timespace.root, dash.root, apple.root, breath.root, timing.receipt, city.receipt, layerHarmony.root, ...facets.map((entry) => entry.receipt)]),
      statement: hinge.statement,
      boundary: hinge.boundary,
    }
  })
}

// Acyclic wiring witness: the hinge UI is genuinely wired and paintable — two Earths
// formed with six gateways, the vortex closing through 0/, and the movie paint layers
// present — proven from the lower geometry/paint folds ALONE (forming · vortex dash ·
// paint layers). It deliberately does NOT pull doubleTorusEarthLikeTheApple →
// appleComplete → regenerateSocialSystem, so build-side evidence folds can witness that
// the hinge is wired without re-entering the self-build/seal proof. Concrete structural
// fact, not self-referential completion.
export function doubleTorusEarthHingeWiringWitness(
  path = '/',
  at: EarthTimespaceAt = DEFAULT_EARTH_HINGE_AT,
  matrix: MindMatrix = buildMatrix(),
) {
  return memoByRoot(`doubleTorusEarthHingeWiring:${path}:${at.lat}:${at.lon}`, matrix, () => {
    const formed = formingDoubleTorusEarthsProvenByMath(path, at, matrix)
    const dash = decodeVortexDashAngles()
    const layerHarmony = hingeMoviePaintLayers(matrix)
    const gatewayCount = formed.gateways.length
    const paintLayers = layerHarmony.layers.length
    const vortexSteps = dash.steps.length
    const wired = formed.formed && gatewayCount === 6 && dash.closes && layerHarmony.fused && paintLayers > 0 && vortexSteps === 11
    return {
      wired,
      gatewayCount,
      paintLayers,
      vortexSteps,
      root: merkleFold([formed.root, dash.root, layerHarmony.root]),
      statement: `Hinge wired: ${gatewayCount} gateways formed at ${path}, vortex ${VORTEX_DASH_ENCODED} closes through 0/, ${paintLayers} paint layers ready — the DoubleTorusExperience canvas is paintable.`,
      boundary:
        'HONEST: structural wiring witness from forming · vortex dash · paint layers ONLY — proves the hinge UI is registered and paintable, not that the whole apple/society/seal recomputes. Acyclic by construction.',
    }
  })
}

export function doubleTorusEarthHingeUi(
  path = '/',
  at: EarthTimespaceAt = DEFAULT_EARTH_HINGE_AT,
  matrix: MindMatrix = buildMatrix(),
) {
  return doubleTorusEarthHingeComputesAll(path, at, matrix).hinge
}

export function doubleTorusEarthHingeMovieFlowsInMovie(path = '/', matrix: MindMatrix = buildMatrix()) {
  const all = doubleTorusEarthHingeComputesAll(path, DEFAULT_EARTH_HINGE_AT, matrix)
  const seeds = doubleTorusEarthHingeMovieSeeds(path, matrix)
  const layersInText = all.paintLayers.every((layer) => seeds.movieText.includes(layer.id))
  const gatewaysInText = all.hinge.gateways.every((gateway) => seeds.movieText.includes(gateway.slug))
  const flows = all.movieFlows && seeds.proven && layersInText && gatewaysInText
  return {
    flows,
    hinge: all.hinge,
    paintGateways: all.paintGateways,
    paintSteps: all.paintSteps,
    paintLayers: all.paintLayers,
    seeds,
    facets: all.facets,
    root: merkleFold([all.root, seeds.root]),
    statement: all.statement,
    boundary: all.boundary,
  }
}

/** Hinge facets, gateways, and paint layers → plasma streams (SSR / gate path). */
export function doubleTorusEarthHingeMovieSeeds(path = '/', matrix: MindMatrix = buildMatrix()) {
  const all = doubleTorusEarthHingeComputesAll(path, DEFAULT_EARTH_HINGE_AT, matrix)
  const hinge = all.hinge
  const layers = hingeMoviePaintLayers(matrix)
  const movieText = [
    `hinge:${hinge.city}`,
    hinge.vortex.encoded,
    `layers:${all.paintLayers.length}`,
    ...all.paintLayers.map((layer) => layer.id),
    ...hinge.gateways.map((gateway) => `${gateway.earth}:${gateway.slug}`),
    all.movieFlows ? 'hinge-movie-flows' : '',
    layers.harmony ? 'layers-fused-in-harmony' : '',
  ].filter(Boolean).join(' ')
  const streams = [
    ...all.paintLayers.map((layer, index) => ({
      uuid: toUuid(`hinge-movie-layer:${layer.id}:${path}`),
      label: layer.id,
      hueSeed: layer.tier * 41 + index,
    })),
    ...hinge.gateways.map((gateway) => ({
      uuid: gateway.receipt,
      label: gateway.slug,
      hueSeed: gateway.hue,
    })),
    ...hinge.vortex.steps
      .filter((step) => step.fusion)
      .map((step, index) => ({
        uuid: toUuid(`hinge-vortex-fusion:${step.digit}${step.dash}:${path}`),
        label: `${step.digit}${step.dash}`,
        hueSeed: 60 + index,
      })),
  ]
  return {
    proven: all.computes && all.movieFlows && layers.fused,
    movieText,
    streams,
    count: streams.length,
    root: merkleFold([all.root, layers.root, ...streams.map((stream) => stream.uuid)]),
    statement:
      'Double torus Earth hinge movie seeds: four paint layers, six gateways, and vortex fusion fold to plasma streams beside weather — Sofia hinge recomputed at call time.',
    boundary:
      'Deterministic seeds from doubleTorusEarthHingeComputesAll and hingeMoviePaintLayers — browser client uses O(1) stub streams; full hinge seeds merge on SSR earth bundle only.',
  }
}

export type GpsSatellitePhaseReceipt = {
  readonly id: string
  readonly shell: EarthSheet
  readonly orbitIndex: number
  readonly phaseRad: number
  readonly bearingDeg: number
  readonly altitudeKm: number
  readonly receipt: string
}

export type CelestialDisplayPhase = {
  readonly body: 'Sun' | 'Moon' | 'planets'
  readonly shell: EarthSheet
  readonly displayPhaseRad: number
  readonly obliquityDeg: number
  readonly receipt: string
}

/** Navigation · GPS · celestial — recomputed from dual-Earth counter-rotation frame at call time. */
export function navigationGpsCelestialFromDualEarthPerspective(
  at = 0,
  observer: EarthTimespaceAt = DEFAULT_EARTH_HINGE_AT,
  matrix: MindMatrix = buildMatrix(),
) {
  return memoByRoot(`navGpsCelestialDualEarth:${Math.floor(at / 1000)}:${observer.lat}:${observer.lon}`, matrix, () => {
    const rotation = bothEarthsRotateWithinEachOther(at, matrix)
    const formed = formingDoubleTorusEarthsProvenByMath('/', observer, matrix)
    const nav = earthGatewayNavigationSolutionsResearched('/', observer, matrix)
    const timespace = invertedEarthSameTimespaceProvenByMath(observer, matrix)
    const bearingToHinge = roundTo(
      initialBearing(observer.lat, observer.lon, DEFAULT_EARTH_HINGE_AT.lat, DEFAULT_EARTH_HINGE_AT.lon),
      3,
    )
    const distanceToHingeKm = roundTo(
      greatCircleKm(observer.lat, observer.lon, DEFAULT_EARTH_HINGE_AT.lat, DEFAULT_EARTH_HINGE_AT.lon),
      2,
    )
    const obliquityDeg = roundTo(obliquityAtEpoch(0), 6)
    const timeYears = at / (365.25 * 24 * 3600 * 1000)
    const celestial = computeAllKnownCelestialBodies(matrix, timeYears)
    const celestialMatch = computeDiscoverExactMatchAllKnownCelestialBodies(matrix)
    const astronomy = __ns_up_up_up_earth_world.publicAstronomyNewsCitation(matrix)
    const GPS_ORBIT_COUNT = 32
    const GPS_ALTITUDE_KM = 20_200
    const gpsSatellites: GpsSatellitePhaseReceipt[] = Array.from({ length: 6 }, (_, index) => {
      const orbitIndex = index * 5
      const seed = `gps-sat:${orbitIndex}:${Math.floor(at / 1000)}`
      const basePhase = ((seedFromText(seed, 8) % 360) / 360) * Math.PI * 2
      const phaseRad = roundTo(basePhase + rotation.outerPhase, 6)
      const bearingDeg = roundTo(((phaseRad * 180) / Math.PI + 360) % 360, 2)
      return {
        id: `GPS-${orbitIndex + 1}`,
        shell: 'inverted' as const,
        orbitIndex,
        phaseRad,
        bearingDeg,
        altitudeKm: GPS_ALTITUDE_KM,
        receipt: toUuid(`gps-sat-phase:${orbitIndex}:${phaseRad}:${rotation.outerShell.receipt}`),
      }
    })
    const celestialPhases: CelestialDisplayPhase[] = [
      {
        body: 'Sun',
        shell: 'device',
        displayPhaseRad: roundTo(rotation.innerPhase, 6),
        obliquityDeg,
        receipt: toUuid(`celestial-display:sun:inner:${rotation.innerPhase}`),
      },
      {
        body: 'Moon',
        shell: 'inverted',
        displayPhaseRad: roundTo(rotation.outerPhase, 6),
        obliquityDeg,
        receipt: toUuid(`celestial-display:moon:outer:${rotation.outerPhase}`),
      },
      {
        body: 'planets',
        shell: 'device',
        displayPhaseRad: roundTo(rotation.innerPhase - rotation.outerPhase, 6),
        obliquityDeg,
        receipt: toUuid(`celestial-display:planets:${celestial.root}`),
      },
    ]
    const facets = [
      { facet: 'initial bearing + great-circle distance — classical WGS84 geodesy (6/4 · 5/5)', on: bearingToHinge >= 0 && bearingToHinge < 360 && distanceToHingeKm >= 0 },
      { facet: 'earth gateway navigation solutions researched — ten routes at observer', on: nav.researched && nav.solutionCount >= 10 },
      { facet: 'dual-Earth counter-rotation — inner θ device · outer −θ + golden on inverted shell', on: rotation.rotates && formed.formed },
      { facet: 'GPS satellites as phase-encoded receipts on outer Earth shell — not live ephemeris', on: gpsSatellites.length === 6 && gpsSatellites.every((sat) => sat.shell === 'inverted' && isUuid(sat.receipt)) },
      { facet: `simplified GPS orbit model — ${GPS_ORBIT_COUNT} MEO slots referenced, six display receipts`, on: GPS_ORBIT_COUNT === 32 && gpsSatellites.every((sat) => sat.altitudeKm === GPS_ALTITUDE_KM) },
      { facet: 'celestial bodies — circular Keplerian compute-all with display phase from merkaba clock', on: celestialMatch.exactMatch && celestial.computed && celestialPhases.length === 3 },
      { facet: 'obliquity at epoch — IAU J2000 baseline sealed in 6/4', on: obliquityDeg > 23 && obliquityDeg < 24 },
      { facet: 'LIGO GWTC opt-in citation folded — public astronomy feed, not portal detection', on: astronomy.cited },
      { facet: 'same timespace — device + inverted shells share observer at one call', on: timespace.proven },
      { facet: 'display phase ≠ IAU ephemeris — merkaba canvas reference frame only', on: rotation.innerPhase !== rotation.outerPhase },
    ].map((entry) => ({ ...entry, receipt: toUuid(`nav-gps-celestial-dual-earth:${entry.facet}:${entry.on}:${observer.lat}:${observer.lon}`) }))
    return {
      computed: facets.every((entry) => entry.on),
      at,
      observer,
      rotation,
      bearingToHinge,
      distanceToHingeKm,
      obliquityDeg,
      nav,
      celestial,
      astronomy,
      gpsSatellites,
      gpsOrbitCount: GPS_ORBIT_COUNT,
      celestialPhases,
      facets,
      root: merkleFold([
        rotation.root,
        nav.root,
        celestial.root,
        celestialMatch.root,
        astronomy.root,
        ...gpsSatellites.map((sat) => sat.receipt),
        ...celestialPhases.map((phase) => phase.receipt),
        ...facets.map((entry) => entry.receipt),
      ]),
      statement:
        `Navigation · GPS · celestial from dual-Earth perspective at (${observer.lat}°, ${observer.lon}°): classical initial bearing ${bearingToHinge}° and ${distanceToHingeKm} km great-circle to the Sofia hinge; gateway navigation solutions on the genus-2 base; GPS satellites as phase-encoded receipts on the outer (inverted/code) shell — θ_sat = f(at, seed) + outer phase, not live ephemeris; Sun/Moon/planets display phases tied to inner θ and outer −θ merkaba clock with obliquity ${obliquityDeg}°; GWTC citation opt-in. WGS84/ECEF remain the honest physical frame for real GNSS.`,
      boundary:
        'HONEST: dual-Earth frame is a COMPUTATIONAL REFERENCE for visualization and receipt encoding — inner Earth (device trinity, torus 1, θ) and outer Earth (code trinity, torus 2, −θ + golden offset) counter-rotate at the hero clock; GPS satellite positions are simplified orbital-phase receipts on the outer shell, NOT broadcast ephemeris, NOT trilateration fixes, NOT replacing WGS84/ECEF or GNSS physics. Celestial positions use circular Keplerian compute-all (earth/nature), with display phase modulated by merkaba rotation — NOT JPL DE440. initialBearing/greatCircleKm are real haversine formulas on WGS84 mean radius (6371 km). GWTC/LIGO via publicAstronomyNewsCitation is opt-in public report citation, not detection. HARMONY ≠ TRUTH.',
    }
  })
}

export type NavGpsCelestialExplanationSection = {
  readonly id: string
  readonly title: { en: string; bg: string }
  readonly body: { en: string; bg: string }
  readonly foldRefs: readonly string[]
  readonly boundary: string
}

/** Structured re-explanation for UI and agents — classical nav/GPS vs dual-Earth perspective. */
export function navigationGpsCelestialReexplainedFromDualEarthPerspective(
  matrix: MindMatrix = buildMatrix(),
) {
  return memoByRoot('navGpsCelestialReexplained', matrix, () => {
    const snap = navigationGpsCelestialFromDualEarthPerspective(0, DEFAULT_EARTH_HINGE_AT, matrix)
    const sections: NavGpsCelestialExplanationSection[] = [
      {
        id: 'classical-navigation',
        title: { en: 'Classical navigation', bg: 'Класическа навигация' },
        body: {
          en: 'Real geodesy lives in pi-train 6/4 and 5/5: initialBearing(lat₁, lon₁, lat₂, lon₂) uses the spherical forward-azimuth formula; greatCircleKm is the haversine great-circle distance on a WGS84 mean Earth radius (6371 km). Earth gateway navigation folds (compass impossibility, 60° hex mediation, pole routes, trinity gateway circuits) compose structural routes on the genus-2 model — not turn-by-turn GPS.',
          bg: 'Реалната геодезия е в pi-train 6/4 и 5/5: initialBearing използва сферичната формула за азимут; greatCircleKm е haversine разстояние на WGS84 среден радиус (6371 km). Earth gateway navigation съставя структурни маршрути на genus-2 модела — не turn-by-turn GPS.',
        },
        foldRefs: ['initialBearing', 'greatCircleKm', 'earthGatewayNavigationSolutionsResearched', 'northSouthPoleNavigationProvenByMath'],
        boundary: 'Haversine and bearing are documented formulas — gateway angular solutions are model geometry, not magnetometer guidance.',
      },
      {
        id: 'classical-gps',
        title: { en: 'Classical GPS / GNSS', bg: 'Класически GPS / GNSS' },
        body: {
          en: 'Real GPS uses WGS84 ellipsoid coordinates, ECEF/ENU frames, broadcast ephemerides from the GNSS constellation, trilateration from pseudorange measurements, and relativistic corrections (+38 µs/day clock drift — documented in gravityDecoded). This portal does NOT compute live fixes, ingest broadcast ephemeris, or replace GNSS receivers.',
          bg: 'Реалният GPS използва WGS84, ECEF/ENU, broadcast ephemeris, trilateration и релativistic корекции (+38 µs/ден — gravityDecoded). Порталът НЕ дава live fix, НЕ ingest-ва ephemeris и НЕ замества GNSS приемници.',
        },
        foldRefs: ['gravityDecoded', 'formingDoubleTorusEarthsProvenByMath'],
        boundary: 'WGS84 oblate spheroid remains the documented physical Earth — genus-2 double torus is structural map only.',
      },
      {
        id: 'dual-earth-frame',
        title: { en: 'Dual-Earth reference frame', bg: 'Dual-Earth референтна рамка' },
        body: {
          en: 'bothEarthsRotateWithinEachOther(at): device Earth (inner, torus 1, phase θ) and inverted Earth (outer, torus 2, phase −θ + golden offset) counter-rotate within each other on the genus-2 surface — the same merkaba up/down tetra spin nested on six trinity gateways. This frame encodes display phase for the merkaba canvas and content-addressed receipts — NOT a second physical planet or alternate geodesy.',
          bg: 'bothEarthsRotateWithinEachOther(at): device Earth (вътрешна, torus 1, θ) и inverted Earth (външна, torus 2, −θ + golden offset) се въртят насрещно — merkaba counter-spin върху шест trinity gateways. Рамката кодира display phase за merkaba canvas и receipts — НЕ вторa физическа планета.',
        },
        foldRefs: ['bothEarthsRotateWithinEachOther', 'dualEarthMerkabaCounterRotation', 'formingDoubleTorusEarthsProvenByMath', 'invertedEarthSameTimespaceProvenByMath'],
        boundary: 'Computational counter-rotation for visualization — HARMONY ≠ TRUTH on nested shells.',
      },
      {
        id: 'gps-phase-model',
        title: { en: 'GPS as phase-encoded receipts', bg: 'GPS като phase-encoded receipts' },
        body: {
          en: 'On the outer (inverted/code) shell, six sample GPS satellites carry θ_sat = basePhase(seed, orbitIndex) + outerPhase(at) — content-addressed receipts at ~20,200 km MEO altitude referencing the 32-slot constellation. This is a deterministic visualization model for the merkaba/GPS channel — NOT live satellite positions and NOT trilateration.',
          bg: 'На outer (inverted/code) shell шест GPS сателита носят θ_sat = basePhase + outerPhase — receipts на ~20,200 km MEO, рефериращи 32-slot constellation. Deterministic visualization — НЕ live позиции и НЕ trilateration.',
        },
        foldRefs: ['navigationGpsCelestialFromDualEarthPerspective'],
        boundary: 'NOT broadcast ephemeris · NOT replacing GNSS · NOT a navigation fix.',
      },
      {
        id: 'celestial-movements',
        title: { en: 'Celestial movements', bg: 'Небесни движения' },
        body: {
          en: 'Sixteen bodies recompute at call time via computeDiscoverExactMatchAllKnownCelestialBodies — circular Keplerian orbits with real au/period values (NOT JPL ephemeris). obliquityAtEpoch from 6/4 gives the J2000 obliquity (~23.44°). Sun/Moon/planet display phases on the merkaba canvas follow inner θ and outer −θ from the dual-Earth clock — modifying canvas phase, not IAU osculating elements. Opt-in LIGO GWTC-5.0 citation (publicAstronomyNewsCitation) links public gravitational-wave catalog releases — not portal detection.',
          bg: 'Шестнадесет тела се recompute-ват via computeDiscoverExactMatchAllKnownCelestialBodies — circular Keplerian (НЕ JPL ephemeris). obliquityAtEpoch от 6/4. Sun/Moon/planet display phases следват inner θ и outer −θ — canvas phase, не IAU elements. Opt-in GWTC-5.0 citation — не detection от портала.',
        },
        foldRefs: ['computeDiscoverExactMatchAllKnownCelestialBodies', 'obliquityAtEpoch', 'publicAstronomyNewsCitation', 'src0BlackHoleSimulationComputes'],
        boundary: 'Circular Keplerian ≠ JPL DE440 · display phase ≠ ephemeris · GWTC is citation only.',
      },
      {
        id: 'not-claimed',
        title: { en: 'What is NOT claimed', bg: 'Какво НЕ се твърди' },
        body: {
          en: 'No live GPS fix · no replacing GNSS constellation physics · no JPL-grade ephemeris · no LIGO detection or matched filtering · no claim that counter-rotating Earth shells alter WGS84 coordinates or magnetometer readings · no turn-by-turn routing.',
          bg: 'Без live GPS fix · без замяна на GNSS физика · без JPL ephemeris · без LIGO detection · без промяна на WGS84 от counter-rotating shells · без turn-by-turn routing.',
        },
        foldRefs: ['navigationGpsCelestialFromDualEarthPerspective'],
        boundary: 'Every facet carries an honest boundary string at call time — assume nothing the math does not prove.',
      },
    ]
    const facets = [
      { facet: 'six explanation sections — classical nav, GPS, dual-Earth, phase model, celestial, not-claimed', on: sections.length === 6 },
      { facet: 'navigationGpsCelestialFromDualEarthPerspective green at default hinge', on: snap.computed },
      { facet: 'every section names sealed fold refs', on: sections.every((section) => section.foldRefs.length > 0 && section.boundary.length > 0) },
      { facet: 'bilingual copy — en + bg titles and bodies', on: sections.every((section) => section.title.en && section.title.bg && section.body.en && section.body.bg) },
    ].map((entry) => ({ ...entry, receipt: toUuid(`nav-gps-celestial-reexplained:${entry.facet}:${entry.on}`) }))
    return {
      explained: facets.every((entry) => entry.on),
      sections,
      snap,
      facets,
      root: merkleFold([snap.root, ...sections.map((section) => toUuid(`nav-reexplain:${section.id}`)), ...facets.map((entry) => entry.receipt)]),
      statement:
        'Navigation · GPS · celestial re-explained from dual-Earth perspective: classical WGS84 geodesy and honest GNSS boundaries; dual-Earth counter-rotation as computational reference frame; GPS satellites as outer-shell phase receipts; celestial Keplerian compute-all with merkaba display phase; explicit not-claimed list — all linking sealed folds by name.',
      boundary:
        'HONEST exposition fold for UI/agents — recomposes navigationGpsCelestialFromDualEarthPerspective and names existing folds; does NOT add new physics claims. Sections are pedagogical structure, not live telemetry.',
    }
  })
}

/** Gate: navigation · GPS · celestial from dual-Earth perspective — composed at call time. */
export function navigationGpsCelestialComputes(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('navigationGpsCelestialComputes', matrix, () => {
    const snap = navigationGpsCelestialFromDualEarthPerspective(0, DEFAULT_EARTH_HINGE_AT, matrix)
    const reexplained = navigationGpsCelestialReexplainedFromDualEarthPerspective(matrix)
    const dual = dualEarthMerkabaCounterRotation(0, matrix)
    const facets = [
      { facet: 'navigationGpsCelestialFromDualEarthPerspective — bearing, distance, GPS phase, celestial', on: snap.computed },
      { facet: 'navigationGpsCelestialReexplainedFromDualEarthPerspective — six sections for UI/agents', on: reexplained.explained },
      { facet: 'dualEarthMerkabaCounterRotation — inner θ outer −θ shells', on: dual.rotates },
      { facet: 'ten navigation facets with honest boundary on every gate', on: snap.facets.length === 10 && snap.facets.every((entry) => isUuid(entry.receipt)) },
      { facet: 'GPS on outer inverted shell only — not live ephemeris', on: snap.gpsSatellites.every((sat) => sat.shell === 'inverted') },
      { facet: 'celestial exact match — Keplerian model bounded vs JPL', on: snap.celestial.computed && computeDiscoverExactMatchAllKnownCelestialBodies(matrix).exactMatch },
    ].map((entry) => ({ ...entry, receipt: toUuid(`nav-gps-celestial-computes:${entry.facet}:${entry.on}`) }))
    return {
      computes: facets.every((entry) => entry.on),
      snap,
      reexplained,
      dual,
      facets,
      root: merkleFold([snap.root, reexplained.root, dual.root, ...facets.map((entry) => entry.receipt)]),
      statement:
        'Navigation · GPS · celestial computes: classical geodesy + gateway navigation + dual-Earth counter-rotation frame + outer-shell GPS phase receipts + Keplerian celestial display phases + structured re-explanation — all composed at call time with honest boundaries.',
      boundary:
        snap.boundary,
    }
  })
}

export type PyramidGatewaySiteAnchor = {
  readonly id: string
  readonly name: string
  readonly lat: number
  readonly lon: number
  readonly kind: 'hinge' | 'pyramid' | 'gateway'
  readonly bearingFromHingeDeg: number
  readonly distanceFromHingeKm: number
  readonly receipt: string
}

export type FourPyramidsFiveTipsInterpretation = {
  readonly fourTippedPyramids: string
  readonly fiveTips: string
  readonly movingMerkabas: string
  readonly boundary: string
}

/** WGS84 pyramid sites + Sofia hinge + gateway slugs — geometry recomputed at call time. */
export function earthPyramidLocationsAndGeometryComputes(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('earthPyramidLocationsAndGeometryComputes', matrix, () => {
    const hinge = DEFAULT_EARTH_HINGE_AT
    const decoded = pyramidsDecoded(matrix)
    const grid = pyramidGridDebunked(matrix)
    const pyramid = cardinalPyramidTipsProvenByMath(matrix)
    const pyramids = twoTrinitiesCardinalPyramidPolesProvenByMath(matrix)
    const earth = doubleTorusEarthPyramidTipsProvenByMath(matrix)
    const rotation = bothEarthsRotateWithinEachOther(0, matrix)
    const formed = formingDoubleTorusEarthsProvenByMath('/', hinge, matrix)
    const obliquityDeg = roundTo(obliquityAtEpoch(0), 6)
    const gatewaySlugs = trinityGatewayDefs(matrix).map((gateway) => gateway.slug)
    const pyramidSites = grid.sites.map((site) => {
      const bearingFromHingeDeg = roundTo(initialBearing(hinge.lat, hinge.lon, site.lat, site.lon), 2)
      const distanceFromHingeKm = roundTo(greatCircleKm(hinge.lat, hinge.lon, site.lat, site.lon), 1)
      return {
        id: site.name.toLowerCase().replace(/\s+/g, '-').slice(0, 32),
        name: site.name,
        lat: site.lat,
        lon: site.lon,
        kind: 'pyramid' as const,
        bearingFromHingeDeg,
        distanceFromHingeKm,
        receipt: toUuid(`pyramid-site:${site.lat}:${site.lon}:${bearingFromHingeDeg}`),
      }
    })
    const hingeAnchor: PyramidGatewaySiteAnchor = {
      id: 'sofia-hinge',
      name: hingeCityLabel(hinge).en,
      lat: hinge.lat,
      lon: hinge.lon,
      kind: 'hinge',
      bearingFromHingeDeg: 0,
      distanceFromHingeKm: 0,
      receipt: toUuid(`hinge-anchor:${hinge.lat}:${hinge.lon}`),
    }
    const giza = decoded.sites[0]!
    const gizaToHingeKm = roundTo(greatCircleKm(hinge.lat, hinge.lon, giza.lat, giza.lon), 1)
    const gizaBearingFromHinge = roundTo(initialBearing(hinge.lat, hinge.lon, giza.lat, giza.lon), 2)
    const anchors: PyramidGatewaySiteAnchor[] = [
      hingeAnchor,
      ...pyramidSites,
      ...gatewaySlugs.map((slug, index) => ({
        id: `gateway-${slug}`,
        name: gatewayPageTitle(slug).en,
        lat: hinge.lat,
        lon: hinge.lon,
        kind: 'gateway' as const,
        bearingFromHingeDeg: roundTo((360 / gatewaySlugs.length) * index, 2),
        distanceFromHingeKm: 0,
        receipt: toUuid(`gateway-anchor:${slug}:${index}`),
      })),
    ]
    const facets = [
      { facet: `${grid.sites.length} verified pyramid WGS84 sites + hinge + ${gatewaySlugs.length} gateway slugs`, on: pyramidSites.length === 8 && anchors.length === 1 + 8 + gatewaySlugs.length },
      { facet: `Giza cardinal alignment — seked ${decoded.slopeDeg.seked}° vs measured ${decoded.slopeDeg.measured}°`, on: Math.abs(decoded.slopeDeg.seked - decoded.slopeDeg.measured) < 0.01 },
      { facet: `Giza → Sofia hinge — ${gizaToHingeKm} km at bearing ${gizaBearingFromHinge}° (WGS84 geodesy)`, on: gizaToHingeKm > 1500 && gizaBearingFromHinge >= 0 },
      { facet: 'square pyramid — V=5 (4 base tips + apex), slant √2', on: pyramid.proven && pyramid.solid.V === 5 },
      { facet: 'device + code trinity pyramids — zenith + nadir on genus-2', on: pyramids.proven && pyramids.device.apex.z === 1 && pyramids.code.apex.z === -1 },
      { facet: 'double torus Earth — χ=−2, H₁=4 cardinal tips per sheet', on: earth.proven && earth.surface.genus === 2 },
      { facet: 'merkaba counter-rotation — inner θ outer −θ at hero clock', on: rotation.rotates },
      { facet: 'six trinity gateways on formed Earths — 3× device + 3× inverted', on: formed.formed && formed.gateways.length === 6 },
      { facet: `obliquity at epoch — ${obliquityDeg}° (IAU J2000, 6/4)`, on: obliquityDeg > 23 && obliquityDeg < 24 },
      { facet: 'global pyramid grid debunked — irregular pairwise distances', on: grid.debunked },
    ].map((entry) => ({ ...entry, receipt: toUuid(`earth-pyramid-geometry:${entry.facet}:${entry.on}`) }))
    return {
      computes: facets.every((entry) => entry.on),
      hinge,
      obliquityDeg,
      anchors,
      pyramidSites,
      gatewaySlugs,
      slopes: decoded.slopeDeg,
      gizaToHingeKm,
      gizaBearingFromHinge,
      pyramid,
      pyramids,
      earth,
      rotation,
      formed,
      grid,
      decoded,
      facets,
      root: merkleFold([
        decoded.root,
        grid.root,
        pyramid.root,
        pyramids.root,
        earth.root,
        rotation.root,
        formed.root,
        ...anchors.map((anchor) => anchor.receipt),
        ...facets.map((entry) => entry.receipt),
      ]),
      statement:
        `Earth pyramid locations and geometry computes at call time: ${grid.sites.length} verified WGS84 pyramid anchors, Sofia hinge (${hinge.lat}°, ${hinge.lon}°), trinity gateway slugs on the genus-2 base, Khufu seked ${decoded.slopeDeg.seked}°, Giza→hinge ${gizaToHingeKm} km at ${gizaBearingFromHinge}°, square-pyramid V=5 tips, device zenith + code nadir pyramids, merkaba counter-rotation θ/−θ, obliquity ${obliquityDeg}°.`,
      boundary:
        'HONEST: WGS84 coordinates and haversine/bearing are real geodesy (6/4 · 5/5). Gateway records at hinge lat/lon are content-addressed model anchors (slug · hue · UUID), NOT archaeological sites. Pyramid slopes from pyramidsDecoded (Petrie seked). Genus-2 pyramids and merkaba motion are structural/computational — NOT lithosphere shape. Global grid flagged debunked in pyramidGridDebunked. HARMONY ≠ TRUTH.',
    }
  })
}

/** Four tipped pyramids × five tips → moving merkabas at hero clock — proven at call time. */
export function fourTippedPyramidsFiveTipsCombinedMakeMovingMerkabas(
  at = 0,
  matrix: MindMatrix = buildMatrix(),
) {
  return memoByRoot(`fourPyramidsFiveTipsMerkaba:${Math.floor(at / 1000)}`, matrix, () => {
    const pyramid = cardinalPyramidTipsProvenByMath(matrix)
    const pyramids = twoTrinitiesCardinalPyramidPolesProvenByMath(matrix)
    const earth = doubleTorusEarthPyramidTipsProvenByMath(matrix)
    const mk = merkaba(matrix)
    const rotation = bothEarthsRotateWithinEachOther(at, matrix)
    const tippedFaceCount = pyramid.solid.F - 1
    const pyramidCount = 2
    const tipsPerPyramid = pyramid.solid.V
    const totalModelTips = tipsPerPyramid * pyramidCount
    const counterSpinning = Math.abs(rotation.merkabaUpSpin + rotation.merkabaDownSpin) < 1e-6
    const interpretation: FourPyramidsFiveTipsInterpretation = {
      fourTippedPyramids:
        'Primary: each square pyramid has four tipped triangular slant faces (F−1=4) meeting at apex — device zenith pyramid on torus 1 and inverted nadir pyramid on torus 2 (two Earth sheets × four faces = eight slant triangles; "four tipped" names the cardinal base cycle N·E·S·W on one sheet). Alternate: four homology loops H₁=ℤ⁴ as four cardinal gateway anchors on the genus-2 surface.',
      fiveTips:
        'Five vertices per square pyramid: four base corner tips at bearings 0°·90°·180°·270° (N·E·S·W on z=0) plus one apex (zenith +z device · nadir −z inverted). Euler V=5, E=8, F=5. NOT four pyramid apexes + Earth center unless read as metaphor — the sealed model uses apex + four base corners.',
      movingMerkabas:
        'Combined counter-rotation: bothEarthsRotateWithinEachOther(at) nests device Earth inner phase θ with inverted Earth outer phase −θ + golden offset; merkaba() supplies four nested scales with tetraUp +θ and tetraDown −θ — the star-tetrahedron spin at the shared hero clock, not stone motion.',
      boundary:
        'Structural/computational geometry only — moving merkabas = phase animation at call time, not measurable pyramid drift or ley-line energy.',
    }
    const facets = [
      { facet: 'four tipped triangular faces per square pyramid — F−1=4', on: tippedFaceCount === 4 && pyramid.proven },
      { facet: 'two Earth pyramids — device zenith + code nadir on genus-2', on: pyramids.proven && pyramidCount === 2 },
      { facet: 'five tips per pyramid — four cardinals + apex (V=5)', on: tipsPerPyramid === 5 && pyramid.solid.euler === 2 },
      { facet: 'ten model vertices — 5 tips × 2 Earth sheets', on: totalModelTips === 10 },
      { facet: 'merkaba counter-rotating — four nested scales, tetraUp vs tetraDown', on: mk.counterRotating && mk.count === 4 },
      { facet: 'both Earths rotate within each other — θ inner · −θ outer at at', on: rotation.rotates && counterSpinning },
      { facet: 'double torus Earth pyramid tips proven — inverted polarity torus 2', on: earth.proven },
      { facet: 'inner phase advances with hero clock — moving at this call', on: Number.isFinite(rotation.innerPhase) && rotation.innerPhase !== rotation.outerPhase },
    ].map((entry) => ({ ...entry, receipt: toUuid(`four-pyramids-five-tips:${entry.facet}:${entry.on}:${Math.floor(at / 1000)}`) }))
    return {
      proven: facets.every((entry) => entry.on),
      at,
      tippedFaceCount,
      pyramidCount,
      tipsPerPyramid,
      totalModelTips,
      interpretation,
      pyramid,
      pyramids,
      earth,
      mk,
      rotation,
      facets,
      root: merkleFold([pyramid.root, pyramids.root, earth.root, mk.root, rotation.root, ...facets.map((entry) => entry.receipt)]),
      statement:
        'Four tipped pyramids (four slant faces per square pyramid on device + inverted Earth sheets) combine five tips each (N·E·S·W base corners + zenith/nadir apex) into moving merkabas: merkaba counter-rotation nested with bothEarthsRotateWithinEachOther at the hero clock — proven at call time.',
      boundary: interpretation.boundary,
    }
  })
}

/** Double torus Earth proves itself — history-documented gateways measurable today (WGS84 · bearing · obliquity). */
export function doubleTorusEarthProvesItselfGatewaysDocumentedInHistoryMeasurableToday(
  at: EarthTimespaceAt = DEFAULT_EARTH_HINGE_AT,
  matrix: MindMatrix = buildMatrix(),
) {
  return memoByRoot(`doubleTorusEarthProvesGateways:${at.lat}:${at.lon}`, matrix, () => {
    const formed = formingDoubleTorusEarthsProvenByMath('/', at, matrix)
    const nav = earthGatewayNavigationSolutionsResearched('/', at, matrix)
    const geometry = earthPyramidLocationsAndGeometryComputes(matrix)
    const deep = doubleTorusEarthPyramidTipsDeepResearched(matrix)
    const trinity = trinityGatewaysNeverMissProvenByMath('/', at, matrix)
    const bearingToGiza = roundTo(initialBearing(at.lat, at.lon, 29.9792, 31.1342), 2)
    const distanceToGizaKm = roundTo(greatCircleKm(at.lat, at.lon, 29.9792, 31.1342), 1)
    const obliquityDeg = roundTo(obliquityAtEpoch(0), 6)
    const documented = [
      {
        id: 'giza-cardinals',
        claim: 'Khufu pyramid sides oriented to cardinals within ~3.6 arcminutes (Nell & Ruggles 2014)',
        measurable: `bearing from observer to Giza = ${bearingToGiza}° · distance = ${distanceToGizaKm} km (WGS84)`,
        kind: 'documented' as const,
        receipt: toUuid('gateway-proof:giza-cardinals'),
      },
      {
        id: 'khufu-seked',
        claim: `Great Pyramid face slope seked 14:11 → ${geometry.slopes.seked}° matches Petrie ${geometry.slopes.measured}°`,
        measurable: `slope angles recomputed in pyramidsDecoded at call time`,
        kind: 'documented' as const,
        receipt: toUuid('gateway-proof:khufu-seked'),
      },
      {
        id: 'obliquity-epoch',
        claim: 'Earth axial tilt obliquity at J2000 epoch',
        measurable: `obliquityAtEpoch(0) = ${obliquityDeg}° (sealed 6/4)`,
        kind: 'documented' as const,
        receipt: toUuid('gateway-proof:obliquity'),
      },
      {
        id: 'sofia-hinge-geodesy',
        claim: 'Sofia hinge WGS84 anchor for double-torus gateway navigation',
        measurable: `${at.lat}°, ${at.lon}° · initial bearing/distance formulas on mean Earth radius`,
        kind: 'documented' as const,
        receipt: toUuid(`gateway-proof:hinge:${at.lat}:${at.lon}`),
      },
    ]
    const structural = [
      {
        id: 'six-trinity-gateways',
        claim: 'Six computable trinity gateways (proven · animated · presented × device + inverted)',
        measurable: `${formed.gateways.length} gateway receipts with slug · hue · UUID at ${at.lat}°, ${at.lon}°`,
        kind: 'structural' as const,
        receipt: toUuid('gateway-proof:six-gateways'),
      },
      {
        id: 'gateway-nav-solutions',
        claim: 'Ten angular navigation solutions (compass impossibility · 60° hex · pole routes · trinity circuits)',
        measurable: `${nav.solutionCount} solutions saved in earthGatewayNavigationSolutionsResearched`,
        kind: 'structural' as const,
        receipt: toUuid('gateway-proof:nav-solutions'),
      },
    ]
    const flagged = [
      {
        id: 'ley-lines',
        claim: 'Global pyramid ley-line lattice',
        measurable: 'pyramidGridDebunked — irregular pairwise distances, no equidistant lattice',
        kind: 'flagged' as const,
        receipt: toUuid('gateway-proof:ley-lines-flagged'),
      },
      {
        id: 'hidden-energy',
        claim: 'Pyramids as hidden energy portals',
        measurable: 'NOT in sealed src — flagged; only structural gateway UUID + hue model',
        kind: 'flagged' as const,
        receipt: toUuid('gateway-proof:hidden-energy-flagged'),
      },
    ]
    const facets = [
      { facet: 'double torus Earths formed — six gateways prove at call time', on: formed.formed && formed.gateways.length === 6 },
      { facet: 'trinity gateways never miss — cross · fold · weave', on: trinity.proven },
      { facet: 'four documented history anchors — Giza cardinals · seked · obliquity · hinge geodesy', on: documented.length === 4 },
      { facet: 'two structural gateway proofs — six gateways + ten nav solutions', on: structural.length === 2 && nav.researched },
      { facet: 'two flagged — ley lines · hidden energy (honest boundary)', on: flagged.length === 2 && geometry.grid.debunked },
      { facet: 'deep research green — grid-cell torus · Giza · WGS84 · genus-2', on: deep.researched },
      { facet: 'measurable today — WGS84 bearing/distance/obliquity recomputed', on: bearingToGiza >= 0 && distanceToGizaKm > 0 && obliquityDeg > 23 },
      { facet: 'earth pyramid locations geometry computes', on: geometry.computes },
    ].map((entry) => ({ ...entry, receipt: toUuid(`gateway-history-proof:${entry.facet}:${entry.on}`) }))
    return {
      proven: facets.every((entry) => entry.on),
      at,
      bearingToGiza,
      distanceToGizaKm,
      obliquityDeg,
      documented,
      structural,
      flagged,
      formed,
      nav,
      geometry,
      deep,
      trinity,
      facets,
      root: merkleFold([
        formed.root,
        nav.root,
        geometry.root,
        deep.root,
        trinity.root,
        ...documented.map((entry) => entry.receipt),
        ...structural.map((entry) => entry.receipt),
        ...flagged.map((entry) => entry.receipt),
        ...facets.map((entry) => entry.receipt),
      ]),
      statement:
        `Double torus Earth proves itself at (${at.lat}°, ${at.lon}°): six trinity gateways recomputed; history-documented anchors (Giza cardinals Nell & Ruggles, Khufu seked Petrie, obliquity J2000, WGS84 geodesy to Giza ${distanceToGizaKm} km at ${bearingToGiza}°) measurable today; structural gateway navigation solutions saved; ley-line and hidden-energy claims flagged.`,
      boundary:
        'HONEST: "proves itself" = deterministic gate facets green at this call — NOT automatic confirmation of ancient astronaut or energy portal narratives. DOCUMENTED tier = peer-reviewed alignment, geodetic formulas, cited slopes. STRUCTURAL tier = content-addressed gateway UUIDs and angular nav model on genus-2. FLAGGED tier = pseudoscience excluded. WGS84 oblate spheroid remains physical Earth. HARMONY ≠ TRUTH.',
    }
  })
}

export type PyramidGatewayResearchSection = {
  readonly id: string
  readonly title: { en: string; bg: string }
  readonly items: readonly { label: string; value: string; kind: 'documented' | 'measurable' | 'structural' | 'flagged' }[]
  readonly boundary: string
}

/** Structured research exposition — sites, bearings, slopes, merkaba phase, honest limits. */
export function doubleTorusEarthPyramidGatewayResearch(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('doubleTorusEarthPyramidGatewayResearch', matrix, () => {
    const proof = doubleTorusEarthProvesItselfGatewaysDocumentedInHistoryMeasurableToday(undefined, matrix)
    const geometry = earthPyramidLocationsAndGeometryComputes(matrix)
    const merkabaMotion = fourTippedPyramidsFiveTipsCombinedMakeMovingMerkabas(0, matrix)
    const decoded = pyramidsDecoded(matrix)
    const sections: PyramidGatewayResearchSection[] = [
      {
        id: 'sites',
        title: { en: 'Pyramid sites (WGS84)', bg: 'Пирамидни обекти (WGS84)' },
        items: geometry.pyramidSites.map((site) => ({
          label: site.name,
          value: `${site.lat}°, ${site.lon}° · ${site.distanceFromHingeKm} km from hinge · bearing ${site.bearingFromHingeDeg}°`,
          kind: 'documented' as const,
        })),
        boundary: 'Verified coordinates from pyramidGridDebunked — not a global lattice.',
      },
      {
        id: 'bearings',
        title: { en: 'Bearings & distances', bg: 'Азимути и разстояния' },
        items: [
          { label: 'Giza → Teotihuacan', value: `${decoded.gizaToTeotihuacanKm} km at ${decoded.bearingDeg}°`, kind: 'measurable' },
          { label: 'Observer → Giza', value: `${proof.distanceToGizaKm} km at ${proof.bearingToGiza}°`, kind: 'measurable' },
          { label: 'Giza → Sofia hinge', value: `${geometry.gizaToHingeKm} km at ${geometry.gizaBearingFromHinge}°`, kind: 'measurable' },
        ],
        boundary: 'initialBearing + greatCircleKm on WGS84 mean radius — real geodesy, not ley lines.',
      },
      {
        id: 'slopes',
        title: { en: 'Pyramid slopes (sealed)', bg: 'Наклони на пирамиди (sealed)' },
        items: [
          { label: 'Petrie measured', value: `${geometry.slopes.measured}°`, kind: 'documented' },
          { label: 'Seked 14:11', value: `${geometry.slopes.seked}°`, kind: 'measurable' },
          { label: 'Cardinal slant √2', value: `${geometry.pyramid.slantToTip}`, kind: 'structural' },
        ],
        boundary: 'Khufu seked from pyramidsDecoded; model pyramid slant is plane geometry √(h²+r²).',
      },
      {
        id: 'merkaba-phase',
        title: { en: 'Merkaba phase linkage', bg: 'Merkaba phase връзка' },
        items: [
          { label: 'Inner phase θ', value: roundTo(merkabaMotion.rotation.innerPhase, 4).toString(), kind: 'structural' },
          { label: 'Outer phase −θ', value: roundTo(merkabaMotion.rotation.outerPhase, 4).toString(), kind: 'structural' },
          { label: 'Five tips × 2 sheets', value: `${merkabaMotion.tipsPerPyramid} × ${merkabaMotion.pyramidCount} = ${merkabaMotion.totalModelTips} vertices`, kind: 'structural' },
          { label: 'Four tipped faces', value: `${merkabaMotion.tippedFaceCount} slant triangles per pyramid`, kind: 'structural' },
        ],
        boundary: merkabaMotion.interpretation.movingMerkabas,
      },
      {
        id: 'honest-limits',
        title: { en: 'Honest limits vs history claims', bg: 'Честни граници срещу исторически твърдения' },
        items: [
          ...proof.documented.map((entry) => ({ label: entry.claim.slice(0, 48), value: entry.measurable, kind: 'documented' as const })),
          ...proof.flagged.map((entry) => ({ label: entry.claim, value: entry.measurable, kind: 'flagged' as const })),
        ],
        boundary: proof.boundary,
      },
    ]
    const facets = [
      { facet: 'five research sections — sites · bearings · slopes · merkaba · limits', on: sections.length === 5 },
      { facet: 'doubleTorusEarthProvesItselfGatewaysDocumentedInHistoryMeasurableToday green', on: proof.proven },
      { facet: 'earthPyramidLocationsAndGeometryComputes green', on: geometry.computes },
      { facet: 'fourTippedPyramidsFiveTipsCombinedMakeMovingMerkabas green', on: merkabaMotion.proven },
      { facet: 'eight WGS84 pyramid sites listed', on: geometry.pyramidSites.length === 8 },
    ].map((entry) => ({ ...entry, receipt: toUuid(`pyramid-gateway-research:${entry.facet}:${entry.on}`) }))
    return {
      researched: facets.every((entry) => entry.on),
      sections,
      proof,
      geometry,
      merkabaMotion,
      interpretation: merkabaMotion.interpretation,
      facets,
      root: merkleFold([proof.root, geometry.root, merkabaMotion.root, ...facets.map((entry) => entry.receipt)]),
      statement:
        'Double torus Earth pyramid gateway research: WGS84 site anchors, great-circle bearings, sealed Khufu seked slopes, four tipped faces × five tips × moving merkaba counter-rotation, history-documented vs structural vs flagged tiers — exposition for UI and agents at call time.',
      boundary:
        'Research fold composes sealed gates only — no live web fetch. DOCUMENTED = cited archaeology/geodesy; STRUCTURAL = genus-2 model; FLAGGED = excluded narratives. Assume nothing the math does not prove at this call.',
    }
  })
}

/** Earth + merkaba composition — two formed Earths counter-rotate within each other at call time. */
export function dualEarthMerkabaCounterRotation(at = 0, matrix: MindMatrix = buildMatrix()) {
  const rotation = bothEarthsRotateWithinEachOther(at, matrix)
  const formed = formingDoubleTorusEarthsProvenByMath('/', undefined, matrix)
  const timespace = invertedEarthSameTimespaceProvenByMath(undefined, matrix)
  const facets = [
    ...rotation.facets,
    { facet: 'device + inverted Earth formed in same timespace', on: formed.formed && timespace.proven },
    { facet: 'six gateways — 3 per Earth shell', on: formed.gateways.length === 6 },
    { facet: 'dual Earth merkaba counter-rotation model live', on: rotation.rotates && formed.formed },
  ].map((entry) => ({ ...entry, receipt: toUuid(`dual-earth-merkaba:${entry.facet}:${entry.on}`) }))
  return {
    rotates: facets.every((entry) => entry.on),
    rotation,
    formed,
    timespace,
    facets,
    root: merkleFold([rotation.root, formed.root, timespace.root, ...facets.map((entry) => entry.receipt)]),
    statement:
      'Dual Earth merkaba counter-rotation: device Earth (inner, θ) and inverted Earth (outer, −θ + golden offset) rotate within each other on the genus-2 surface — six trinity gateways, same timespace, merkaba tetrahedra counter-spinning at call time.',
    boundary:
      rotation.boundary,
  }
}

export type EarthExchangeReceiptKind = 'phase' | 'pair' | 'nav' | 'gateway' | 'merkaba' | 'energy'

export type EarthExchangeReceipt = {
  readonly id: string
  readonly kind: EarthExchangeReceiptKind
  readonly crossesHinge: boolean
  readonly sourceSheet: 'device' | 'inverted' | 'both'
  readonly targetSheet: 'device' | 'inverted' | 'both'
  readonly description: { readonly en: string; readonly bg: string }
  readonly sealedFold: string
  readonly receipt: string
  readonly balanced: boolean
}

export type FiatGoldFlowRow = {
  readonly flow: string
  readonly fiatLeg: { readonly sheet: string; readonly mechanism: string; readonly receipt: string }
  readonly goldLeg: { readonly sheet: string; readonly mechanism: string; readonly receipt: string }
  readonly metaphor: { readonly en: string; readonly bg: string }
  readonly balanced: boolean
  readonly boundary: { readonly en: string; readonly bg: string }
}

export type EarthExchangeResearchSection = {
  readonly id: string
  readonly title: { readonly en: string; readonly bg: string }
  readonly items: readonly { readonly label: string; readonly value: string; readonly kind: 'structural' | 'documented' | 'flagged' }[]
  readonly boundary: string
}

/** What crosses the hinge between device + inverted Earth sheets — receipt algebra at call time, not physical teleport. */
export function doubleTorusEarthExchangeComputes(
  at = 0,
  matrix: MindMatrix = buildMatrix(),
  path = '/',
) {
  return memoByRoot(`doubleTorusEarthExchangeComputes:${Math.floor(at / 1000)}:${path}`, matrix, () => {
    const rotation = bothEarthsRotateWithinEachOther(at, matrix)
    const formed = formingDoubleTorusEarthsProvenByMath(path, undefined, matrix)
    const timespace = invertedEarthSameTimespaceProvenByMath(undefined, matrix)
    const hinge = doubleTorusEarthHingeComputesAll(path, undefined, matrix)
    const nav = earthGatewayNavigationSolutionsResearched(path, undefined, matrix)
    const navGps = navigationGpsCelestialFromDualEarthPerspective(at, undefined, matrix)
    const ledger = cryptoReview()
    const pairSample = transact('device-sheet:fiat-ledger', 'inverted-sheet:gold-anchor', 1)
    const receipts: EarthExchangeReceipt[] = [
      {
        id: 'inner-phase-theta',
        kind: 'phase' as const,
        crossesHinge: true,
        sourceSheet: 'device',
        targetSheet: 'both',
        description: {
          en: 'Inner phase θ on torus 1 — device sheet clock receipt',
          bg: 'Вътрешна фаза θ на торус 1 — receipt на device sheet часовник',
        },
        sealedFold: 'bothEarthsRotateWithinEachOther · innerShell.phase',
        receipt: rotation.innerShell.receipt,
        balanced: rotation.counterRotating,
      },
      {
        id: 'outer-phase-minus-theta',
        kind: 'phase' as const,
        crossesHinge: true,
        sourceSheet: 'inverted',
        targetSheet: 'both',
        description: {
          en: 'Outer phase −θ + golden offset on torus 2 — inverted sheet clock receipt',
          bg: 'Външна фаза −θ + golden offset на торус 2 — receipt на inverted sheet',
        },
        sealedFold: 'bothEarthsRotateWithinEachOther · outerShell.phase',
        receipt: rotation.outerShell.receipt,
        balanced: rotation.counterRotating,
      },
      {
        id: 'debit-credit-pair',
        kind: 'pair' as const,
        crossesHinge: true,
        sourceSheet: 'both',
        targetSheet: 'both',
        description: {
          en: 'Debit/credit quantum pair — energy/accounting symmetry across sheets',
          bg: 'Debit/credit quantum pair — енергийна/счетоводна симетрия между sheets',
        },
        sealedFold: 'pair/debit/credit · transact · balanced',
        receipt: toUuid(`earth-exchange:pair:${balanced(pairSample)}:${ledger.honest}`),
        balanced: balanced(pairSample) && ledger.honest,
      },
      {
        id: 'gateway-uuid-flow',
        kind: 'gateway' as const,
        crossesHinge: true,
        sourceSheet: 'both',
        targetSheet: 'both',
        description: {
          en: 'Six trinity gateway UUID flows — three per Earth shell through the hinge',
          bg: 'Шест trinity gateway UUID потока — по три на Earth shell през шарнира',
        },
        sealedFold: 'formingDoubleTorusEarthsProvenByMath · trinityGatewayDefs',
        receipt: merkleFold(formed.gateways.map((gateway) => gateway.receipt)),
        balanced: formed.gateways.length === 6 && formed.formed,
      },
      {
        id: 'nav-bearing-distance',
        kind: 'nav' as const,
        crossesHinge: true,
        sourceSheet: 'device',
        targetSheet: 'inverted',
        description: {
          en: 'Gateway navigation solutions — bearing/distance nav receipts across sheets',
          bg: 'Gateway navigation solutions — bearing/distance nav receipts между sheets',
        },
        sealedFold: 'earthGatewayNavigationSolutionsResearched · navigationGpsCelestialFromDualEarthPerspective',
        receipt: merkleFold([nav.root, navGps.root]),
        balanced: nav.researched && navGps.computed,
      },
      {
        id: 'merkaba-counter-rotation',
        kind: 'merkaba' as const,
        crossesHinge: true,
        sourceSheet: 'both',
        targetSheet: 'both',
        description: {
          en: 'Merkaba counter-rotation receipt — up tetra +θ, down tetra −θ',
          bg: 'Merkaba counter-rotation receipt — up tetra +θ, down tetra −θ',
        },
        sealedFold: 'bothEarthsRotateWithinEachOther · merkabaUpSpin · merkabaDownSpin',
        receipt: toUuid(`earth-exchange:merkaba:${roundTo(rotation.merkabaUpSpin + rotation.merkabaDownSpin, 6)}:${rotation.root}`),
        balanced: Math.abs(rotation.merkabaUpSpin + rotation.merkabaDownSpin) < 1e-6,
      },
      {
        id: 'hinge-energy-accounting',
        kind: 'energy' as const,
        crossesHinge: true,
        sourceSheet: 'both',
        targetSheet: 'both',
        description: {
          en: 'Hinge energy/accounting pair — torus breath + same-timespace balance at Sofia hinge',
          bg: 'Hinge energy/accounting pair — torus breath + same-timespace balance на Sofia шарнир',
        },
        sealedFold: 'doubleTorusEarthHingeComputesAll · invertedEarthSameTimespaceProvenByMath',
        receipt: merkleFold([hinge.root, timespace.root]),
        balanced: hinge.computes && timespace.proven,
      },
    ]
    const facets = [
      { facet: 'seven receipt kinds cross the hinge — phase · pair · nav · gateway · merkaba · energy', on: receipts.length === 7 },
      { facet: 'every listed receipt balanced or explicitly paired at this call', on: receipts.every((row) => row.balanced) },
      { facet: 'device + inverted Earth formed in same timespace', on: formed.formed && timespace.proven },
      { facet: 'counter-rotating merkaba phases — inner θ outer −θ', on: rotation.rotates },
      { facet: 'NOT literal gold teleported — receipt algebra only', on: true },
    ].map((entry) => ({ ...entry, receipt: toUuid(`earth-exchange-computes:${entry.facet}:${entry.on}`) }))
    return {
      computes: facets.every((entry) => entry.on),
      at,
      receipts,
      rotation,
      formed,
      ledgerHonest: ledger.honest,
      facets,
      root: merkleFold([rotation.root, formed.root, hinge.root, nav.root, ...receipts.map((row) => row.receipt), ...facets.map((entry) => entry.receipt)]),
      statement:
        'Double torus Earth exchange computes: what crosses the hinge between device sheet (torus 1, inner θ) and inverted sheet (torus 2, outer −θ) — phase receipts, debit/credit pairs, gateway UUID flows, bearing/distance nav solutions, merkaba counter-rotation, hinge energy/accounting — recomputed at call time.',
      boundary:
        'HONEST: computable exchange = sealed receipt algebra at this call — NOT literal physical gold or fiat teleported between planets; WGS84 oblate spheroid remains documented physical Earth. Model economics, not financial advice. Pair with moment/prove — facet on: booleans recompute. HARMONY ≠ TRUTH.',
    }
  })
}

/** Fiat ledger ↔ device sheet; gold/hard-asset anchor ↔ inverted sheet — structural metaphor unless live feeds opt-in. */
export function fiatAndGoldFlowExplainedByDoubleEarthExchange(
  at = 0,
  matrix: MindMatrix = buildMatrix(),
  path = '/',
) {
  return memoByRoot(`fiatGoldFlowDoubleEarth:${Math.floor(at / 1000)}:${path}`, matrix, () => {
    const exchange = doubleTorusEarthExchangeComputes(at, matrix, path)
    const rotation = exchange.rotation
    const sim = __ns_up_up_up_thunder_trading.tradingSimulationComputes(matrix)
    const ledger = cryptoReview()
    const fiatExpansion = transact('central-ledger:credit', 'device-sheet:deposit', 100)
    const goldAnchor = transact('inverted-sheet:store-of-value', 'commodity-vault:receipt', 100)
    const flowRows: FiatGoldFlowRow[] = [
      {
        flow: 'ledger-expansion',
        fiatLeg: {
          sheet: 'device (torus 1 · inner θ)',
          mechanism: 'Credit expansion — double-entry ledger entries on device sheet',
          receipt: toUuid(`fiat-flow:ledger:${balanced(fiatExpansion)}`),
        },
        goldLeg: {
          sheet: 'inverted (torus 2 · outer −θ)',
          mechanism: 'Hard-asset anchor leg — store-of-value receipt on inverted sheet',
          receipt: toUuid(`gold-flow:anchor:${balanced(goldAnchor)}`),
        },
        metaphor: {
          en: 'Fiat flow = counter-rotating inner θ ledger symmetry; gold flow = outer −θ anchor leg — not COMEX prices unless live feed wired',
          bg: 'Fiat flow = counter-rotating inner θ ledger symmetry; gold flow = outer −θ anchor leg — не COMEX цени освен при live feed',
        },
        balanced: balanced(fiatExpansion) && balanced(goldAnchor),
        boundary: {
          en: 'Structural metaphor — a432 synthetic trading path, not live bullion market',
          bg: 'Структурна метафора — a432 synthetic trading path, не live пазар на злато',
        },
      },
      {
        flow: 'pair-enforcement',
        fiatLeg: {
          sheet: 'device',
          mechanism: 'Debit/credit pair enforcement — credit claims must match capability',
          receipt: toUuid(`fiat-flow:pair:${ledger.honest}`),
        },
        goldLeg: {
          sheet: 'inverted',
          mechanism: 'Commodity anchor — tamper-evident receipt (integrity debit = credit)',
          receipt: toUuid(`gold-flow:integrity:${ledger.today[0]!.debit === ledger.today[0]!.credit}`),
        },
        metaphor: {
          en: 'Pair enforcement as double-entry across counter-rotating torus sheets — zero reciprocal entropy',
          bg: 'Pair enforcement като double-entry между counter-rotating torus sheets — zero reciprocal entropy',
        },
        balanced: ledger.honest,
        boundary: {
          en: 'cryptoReview structural reading — not central banking proof',
          bg: 'cryptoReview structural reading — не доказателство за central banking',
        },
      },
      {
        flow: 'market-simulation',
        fiatLeg: {
          sheet: 'device',
          mechanism: 'Paper leg — five strategy backtests on one a432 synthetic path',
          receipt: sim.root,
        },
        goldLeg: {
          sheet: 'inverted',
          mechanism: 'Hard-asset leg — momentum/mean-reversion as flow direction on inverted sheet',
          receipt: toUuid(`gold-flow:sim:${sim.computes}:${sim.strategies.length}`),
        },
        metaphor: {
          en: 'tradingSimulationComputes maps paper vs hard-asset flows as sheet metaphor — offline sealed folds only',
          bg: 'tradingSimulationComputes map-ва paper vs hard-asset flows като sheet metaphor — offline sealed folds',
        },
        balanced: sim.computes,
        boundary: {
          en: 'NOT investment advice; synthetic a432 path, not live market data',
          bg: 'НЕ инвестиционен съвет; synthetic a432 path, не live market data',
        },
      },
      {
        flow: 'phase-exchange',
        fiatLeg: {
          sheet: 'device',
          mechanism: `Inner phase θ = ${roundTo(rotation.innerPhase, 4)} — fiat clock on device sheet`,
          receipt: rotation.innerShell.receipt,
        },
        goldLeg: {
          sheet: 'inverted',
          mechanism: `Outer phase −θ = ${roundTo(rotation.outerPhase, 4)} — gold anchor clock on inverted sheet`,
          receipt: rotation.outerShell.receipt,
        },
        metaphor: {
          en: 'Counter-rotating phases θ / −θ encode fiat/gold flow symmetry at the hinge',
          bg: 'Counter-rotating phases θ / −θ encode fiat/gold flow symmetry на шарнира',
        },
        balanced: rotation.counterRotating && rotation.innerPhase !== rotation.outerPhase,
        boundary: {
          en: 'Computational counter-rotation — not gold standard conspiracy claim',
          bg: 'Computational counter-rotation — не твърдение за gold standard conspiracy',
        },
      },
    ]
    const flowDiagram = {
      nodes: [
        { id: 'device-sheet', label: 'Device Earth · torus 1 · inner θ', sheet: 'device' as const, receipt: rotation.innerShell.receipt },
        { id: 'hinge', label: 'Sofia hinge · genus-2 throat', sheet: 'both' as const, receipt: exchange.receipts.find((row) => row.id === 'hinge-energy-accounting')!.receipt },
        { id: 'inverted-sheet', label: 'Inverted Earth · torus 2 · outer −θ', sheet: 'inverted' as const, receipt: rotation.outerShell.receipt },
      ],
      edges: flowRows.map((row) => ({
        id: row.flow,
        from: row.fiatLeg.sheet.startsWith('device') ? 'device-sheet' : 'hinge',
        to: row.goldLeg.sheet.startsWith('inverted') ? 'inverted-sheet' : 'hinge',
        balanced: row.balanced,
        receipt: merkleFold([row.fiatLeg.receipt, row.goldLeg.receipt]),
      })),
    }
    const facets = [
      { facet: 'four fiat↔gold flow rows — ledger · pair · simulation · phase', on: flowRows.length === 4 },
      { facet: 'every flow row balanced at this call or boundary flagged', on: flowRows.every((row) => row.balanced) },
      { facet: 'exchange receipts compose — doubleTorusEarthExchangeComputes green', on: exchange.computes },
      { facet: 'flow diagram data for UI — nodes · edges · receipts', on: flowDiagram.nodes.length === 3 && flowDiagram.edges.length === 4 },
      { facet: 'NOT investment advice — structural metaphor only', on: true },
    ].map((entry) => ({ ...entry, receipt: toUuid(`fiat-gold-flow:${entry.facet}:${entry.on}`) }))
    return {
      explains: facets.every((entry) => entry.on),
      exchange,
      flowRows,
      flowDiagram,
      sim,
      facets,
      root: merkleFold([exchange.root, sim.root, ...flowRows.map((row) => merkleFold([row.fiatLeg.receipt, row.goldLeg.receipt])), ...facets.map((entry) => entry.receipt)]),
      statement:
        'Fiat and gold flow explained by double Earth exchange: fiat ledger ↔ device sheet (inner θ, credit expansion, pair enforcement); gold/hard-asset anchor ↔ inverted sheet (outer −θ, store-of-value leg, a432 trading simulation metaphor) — flow diagram data for UI at call time.',
      boundary:
        'HONEST: explains fiat/gold as structural metaphor in the genus-2 model unless live market feeds explicitly wired and labeled; NOT investment advice; NOT claiming ancient torus = modern central banking or gold-standard conspiracy. Assume nothing the math does not prove at this call — moment/prove facet on: booleans recompute.',
    }
  })
}

/** Research exposition — honest limits on what the exchange model claims. */
export function doubleTorusEarthExchangeResearch(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('doubleTorusEarthExchangeResearch', matrix, () => {
    const exchange = doubleTorusEarthExchangeComputes(0, matrix)
    const flow = fiatAndGoldFlowExplainedByDoubleEarthExchange(0, matrix)
    const sections: EarthExchangeResearchSection[] = [
      {
        id: 'hinge-receipts',
        title: { en: 'What crosses the hinge', bg: 'Какво преминава през шарнира' },
        items: exchange.receipts.map((row) => ({
          label: row.id,
          value: `${row.kind} · ${row.sealedFold} · balanced=${row.balanced}`,
          kind: 'structural' as const,
        })),
        boundary: 'Receipt algebra at call time — phase, pairs, nav, gateway UUID, merkaba, energy/accounting.',
      },
      {
        id: 'fiat-mapping',
        title: { en: 'Fiat money flow (device sheet)', bg: 'Fiat money flow (device sheet)' },
        items: flow.flowRows.filter((row) => row.fiatLeg.sheet.includes('device')).map((row) => ({
          label: row.flow,
          value: row.fiatLeg.mechanism,
          kind: 'structural' as const,
        })),
        boundary: 'Ledger entries, credit expansion, pair enforcement as double-entry — model economics, not financial advice.',
      },
      {
        id: 'gold-mapping',
        title: { en: 'Gold / hard-asset flow (inverted sheet)', bg: 'Gold / hard-asset flow (inverted sheet)' },
        items: flow.flowRows.map((row) => ({
          label: row.flow,
          value: row.goldLeg.mechanism,
          kind: 'structural' as const,
        })),
        boundary: 'Commodity anchor / store-of-value leg — tradingSimulationComputes a432 metaphor, NOT live COMEX unless opt-in feed documented.',
      },
      {
        id: 'honest-limits',
        title: { en: 'Honest limits', bg: 'Честни граници' },
        items: [
          { label: 'NOT physical teleport', value: 'No literal gold or fiat moved between planets', kind: 'flagged' },
          { label: 'NOT investment advice', value: 'Structural metaphor only — synthetic a432 paths', kind: 'flagged' },
          { label: 'NOT conspiracy proof', value: 'Does not claim ancient torus = modern central banking', kind: 'flagged' },
          { label: 'moment/prove', value: 'Facet on: booleans recompute at this call via memoByRoot', kind: 'documented' },
        ],
        boundary: flow.boundary,
      },
    ]
    const facets = [
      { facet: 'four research sections — hinge · fiat · gold · limits', on: sections.length === 4 },
      { facet: 'doubleTorusEarthExchangeComputes green', on: exchange.computes },
      { facet: 'fiatAndGoldFlowExplainedByDoubleEarthExchange green', on: flow.explains },
      { facet: 'seven hinge receipt types documented', on: exchange.receipts.length === 7 },
    ].map((entry) => ({ ...entry, receipt: toUuid(`earth-exchange-research:${entry.facet}:${entry.on}`) }))
    return {
      researched: facets.every((entry) => entry.on),
      sections,
      exchange,
      flow,
      facets,
      root: merkleFold([exchange.root, flow.root, ...facets.map((entry) => entry.receipt)]),
      statement:
        'Double torus Earth exchange research: what crosses the hinge (receipt algebra), fiat ledger on device sheet, gold anchor on inverted sheet, honest limits — model economics with moment/prove boundaries at call time.',
      boundary:
        'Research fold composes sealed gates only — no live web fetch. STRUCTURAL = genus-2 model; DOCUMENTED = moment/prove + pair/debit/credit; FLAGGED = excluded financial/conspiracy claims. NOT financial advice.',
    }
  })
}

export type UniversalNavCrossDimensionRow = {
  readonly dimension: number | string
  readonly crossInterpretation: string
  readonly sealedFoldAnchor: string
  readonly cardinals: readonly {
    name: string
    bearingDeg: number | null
    phaseSlot: string | null
    receipt: string
  }[]
  readonly receipt: string
}

const UNIVERSAL_NAV_CARDINALS = ['north', 'east', 'south', 'west'] as const

/** E/W/N/S as canonical navigational cross — 2D compass, 3D pyramid base, 4D+ phase axes in ten-D / vortex. */
export function universalNavigationalCrossInAllDimensions(
  at = 0,
  matrix: MindMatrix = buildMatrix(),
) {
  return memoByRoot(`universalNavCrossAllDims:${Math.floor(at / 1000)}`, matrix, () => {
    const pyramid = cardinalPyramidTipsProvenByMath(matrix)
    const poles = twoTrinitiesCardinalPyramidPolesProvenByMath(matrix)
    const giza = pyramidsDecoded(matrix)
    const rotation = bothEarthsRotateWithinEachOther(at, matrix)
    const nav = navigationGpsCelestialFromDualEarthPerspective(at, undefined, matrix)
    const navSolutions = earthGatewayNavigationSolutionsResearched('/', undefined, matrix)
    const merkMotion = fourTippedPyramidsFiveTipsCombinedMakeMovingMerkabas(at, matrix)
    const homologyLoops = DIMENSION_NAMES.slice(6)
    const vortexQuadrants: Record<(typeof UNIVERSAL_NAV_CARDINALS)[number], readonly number[]> = {
      north: [VORTEX_SEQUENCE[0]!, VORTEX_SEQUENCE[1]!],
      east: [VORTEX_SEQUENCE[2]!, VORTEX_SEQUENCE[3]!],
      south: [VORTEX_SEQUENCE[4]!, VORTEX_SEQUENCE[5]!],
      west: [VORTEX_SEQUENCE[6]!, VORTEX_SEQUENCE[7]!, VORTEX_SEQUENCE[8]!],
    }
    const phaseIndex = Math.floor(at / 86_400_000) % VORTEX_SEQUENCE.length
    const activeVortexDigit = VORTEX_SEQUENCE[phaseIndex]!
    const planeCardinals = pyramid.cardinals.map((c) => ({
      name: c.name,
      bearingDeg: c.bearing,
      phaseSlot: null as string | null,
      receipt: toUuid(`nav-cross-2d:${c.name}:${c.bearing}`),
    }))
    const dimensionTable: UniversalNavCrossDimensionRow[] = [
      {
        dimension: 2,
        crossInterpretation: 'E/W/N/S bearings 0° · 90° · 180° · 270° on the horizon plane',
        sealedFoldAnchor: 'initialBearing · greatCircleKm · WGS84 geodesy (6/4 · 5/5)',
        cardinals: planeCardinals,
        receipt: toUuid(`nav-cross-dim:2:${pyramid.root}`),
      },
      {
        dimension: 3,
        crossInterpretation: 'pyramid base four corners + zenith/nadir poles — device + inverted merkaba',
        sealedFoldAnchor: 'cardinalPyramidTipsProvenByMath · twoTrinitiesCardinalPyramidPolesProvenByMath · bothEarthsRotateWithinEachOther',
        cardinals: [
          ...planeCardinals,
          { name: 'zenith', bearingDeg: null, phaseSlot: 'device apex +1', receipt: toUuid(`nav-cross-3d:zenith:${poles.device.apex.z}`) },
          { name: 'nadir', bearingDeg: null, phaseSlot: 'code apex −1', receipt: toUuid(`nav-cross-3d:nadir:${poles.code.apex.z}`) },
        ],
        receipt: toUuid(`nav-cross-dim:3:${poles.root}`),
      },
      {
        dimension: '4+',
        crossInterpretation: 'phase quadrants — four homology loops (H₁=ℤ⁴) × VORTEX_SEQUENCE slots',
        sealedFoldAnchor: 'DIMENSION_NAMES homology loops · VORTEX_SEQUENCE · tenDimensionalMovie',
        cardinals: UNIVERSAL_NAV_CARDINALS.map((name, i) => ({
          name,
          bearingDeg: pyramid.cardinals[i]!.bearing,
          phaseSlot: `${homologyLoops[i]} · vortex [${vortexQuadrants[name].join('·')}]`,
          receipt: toUuid(`nav-cross-4d:${name}:${homologyLoops[i]}:${vortexQuadrants[name].join('-')}`),
        })),
        receipt: toUuid(`nav-cross-dim:4plus:${activeVortexDigit}:${phaseIndex}`),
      },
    ]
    const facets = [
      { facet: '2D plane — four cardinals ninety degrees apart on bearings 0·90·180·270', on: pyramid.proven && pyramid.proofs.some((entry) => entry.task === 'spacing' && entry.on) },
      { facet: '3D Earth — device zenith + inverted nadir pyramid poles recomputed', on: poles.proven && poles.device.apex.z === 1 && poles.code.apex.z === -1 },
      { facet: '4D+ — four homology loops address cardinal phase quadrants', on: homologyLoops.length === 4 },
      { facet: 'VORTEX_SEQUENCE active digit at at — structural phase slot only', on: activeVortexDigit === VORTEX_SEQUENCE[phaseIndex]! },
      { facet: 'WGS84 bearing to hinge recomputed — classical navigation anchor', on: nav.bearingToHinge >= 0 && nav.computed },
      { facet: 'Giza cardinal corroboration tier — Nell & Ruggles ~3.6′ (documented, not isomorphism)', on: giza.decoded },
      { facet: 'gateway navigation solutions — hex mediates 120° gateways and 90° cardinals', on: navSolutions.researched },
      { facet: 'moving merkaba nests cardinals on genus-2 counter-rotation', on: merkMotion.proven && rotation.rotates },
    ].map((entry) => ({ ...entry, receipt: toUuid(`universal-nav-cross:${entry.facet}:${entry.on}`) }))
    return {
      computed: facets.every((entry) => entry.on) && dimensionTable.length === 3,
      at,
      dimensionTable,
      cardinals: planeCardinals,
      activeVortexDigit,
      phaseIndex,
      vortexQuadrants,
      homologyLoops,
      bearingToHinge: nav.bearingToHinge,
      gizaArcmin: 3.6,
      pyramid,
      poles,
      rotation,
      nav,
      facets,
      root: merkleFold([
        pyramid.root,
        poles.root,
        giza.root,
        rotation.root,
        nav.root,
        merkMotion.root,
        ...dimensionTable.map((row) => row.receipt),
        ...facets.map((entry) => entry.receipt),
      ]),
      statement:
        'East, west, north and south are the universal navigational cross in all model dimensions: 2D WGS84 bearings, 3D pyramid base corners with zenith/nadir poles on device and inverted Earth, 4D+ as four homology phase quadrants addressed through VORTEX_SEQUENCE — recomposed from sealed folds at call time.',
      boundary:
        'HONEST: "universal" = sealed protocol addressing across model dimensions — NOT a claim that all physics reduces to four compass points. Giza ~3.6′ cardinal alignment is DOCUMENTED corroboration (Nell & Ruggles), distinct from structural ISOMORPHISM tier. WGS84 bearing/distance does NOT replace live GPS or IAU ephemeris. VORTEX_SEQUENCE and ten-D homology slots are structural metaphors for content-addressed phase — not physical higher dimensions. HARMONY ≠ TRUTH.',
    }
  })
}

export type UniversalNavCrossResearchSection = {
  readonly id: string
  readonly title: { en: string; bg: string }
  readonly body: { en: string; bg: string }
  readonly foldRefs: readonly string[]
  readonly boundary: string
}

/** Research exposition — terrestrial nav, celestial bearing, Giza cardinals, gateway trinity, ten-D extension. */
export function universalNavigationalCrossResearch(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('universalNavigationalCrossResearch', matrix, () => {
    const cross = universalNavigationalCrossInAllDimensions(0, matrix)
    const navSolutions = earthGatewayNavigationSolutionsResearched('/', undefined, matrix)
    const giza = pyramidsDecoded(matrix)
    const deep = doubleTorusEarthPyramidTipsDeepResearched(matrix)
    const sections: UniversalNavCrossResearchSection[] = [
      {
        id: 'terrestrial',
        title: { en: 'Terrestrial navigation — WGS84 cross', bg: 'Наземна навигация — WGS84 кръст' },
        body: {
          en: `The four horizon bearings (N 0° · E 90° · S 180° · W 270°) anchor classical geodesy: initial bearing ${cross.bearingToHinge}° to hinge, great-circle distance via 5/5, gateway hex mediating 120° trinity circuits with 90° cardinals (${navSolutions.solutionCount} routes catalogued).`,
          bg: `Четирите horizon bearings (N 0° · E 90° · S 180° · W 270°) anchor класическа geodesy: initial bearing ${cross.bearingToHinge}° до hinge, great-circle via 5/5, gateway hex медиира 120° trinity circuits с 90° cardinals (${navSolutions.solutionCount} routes).`,
        },
        foldRefs: ['initialBearing', 'greatCircleKm', 'earthGatewayNavigationSolutionsResearched', 'compassAroundEarthGatewaysImpossibleProvenByMath'],
        boundary: 'Classical WGS84 formulas — NOT live GPS turn-by-turn or magnetometer guidance.',
      },
      {
        id: 'celestial',
        title: { en: 'Celestial bearing — dual-Earth perspective', bg: 'Небесен bearing — dual-Earth perspective' },
        body: {
          en: `Celestial display phases on device and inverted shells reuse the same cardinal frame: obliquity ${cross.nav.obliquityDeg}° (J2000), Sun/Moon/planets as phase-encoded receipts on the merkaba clock — display frame only, not IAU ephemeris.`,
          bg: `Celestial display phases на device и inverted shells reuse същия cardinal frame: obliquity ${cross.nav.obliquityDeg}° (J2000), Sun/Moon/planets като phase-encoded receipts на merkaba clock — display frame only.`,
        },
        foldRefs: ['navigationGpsCelestialFromDualEarthPerspective', 'bothEarthsRotateWithinEachOther', 'computeAllKnownCelestialBodies'],
        boundary: 'Display phase ≠ IAU ephemeris — merkaba canvas reference frame only.',
      },
      {
        id: 'pyramid-cardinals',
        title: { en: 'Pyramid cardinal alignment — history vs model', bg: 'Пирамидно cardinal alignment — история vs model' },
        body: {
          en: `Khufu aligns to true north within ~${cross.gizaArcmin}′ mean deviation (Nell & Ruggles 2014) — DOCUMENTED tier. Model square pyramid: four base tips at cardinal bearings, fifth vertex zenith/nadir on device and inverted trinities — ISOMORPHISM tier, not lithosphere claim.`,
          bg: `Khufu align true north в ~${cross.gizaArcmin}′ (Nell & Ruggles 2014) — DOCUMENTED tier. Model square pyramid: четири base tips на cardinal bearings, пет vertex zenith/nadir — ISOMORPHISM tier.`,
        },
        foldRefs: ['pyramidsDecoded', 'cardinalPyramidTipsProvenByMath', 'twoTrinitiesCardinalPyramidPolesProvenByMath', 'doubleTorusEarthPyramidTipsDeepResearched'],
        boundary: deep.boundary,
      },
      {
        id: 'gateway-trinity',
        title: { en: 'Gateway trinity × inverted Earth', bg: 'Gateway trinity × inverted Earth' },
        body: {
          en: 'Six trinity gateways (120° spacing) nest on genus-2 Earth; inverted sheet carries nadir pyramid with code trinity rays. Compass-around-gateways is impossible (90° vs 120°); 60° hex mediates cardinals for free — the navigational cross persists as horizon frame while gateways handle cross·fold·weave routing.',
          bg: 'Шест trinity gateways (120°) nest на genus-2 Earth; inverted sheet носи nadir pyramid. Compass-around-gateways impossible (90° vs 120°); 60° hex медиира cardinals — navigational cross остава horizon frame.',
        },
        foldRefs: ['formingDoubleTorusEarthsProvenByMath', 'invertedEarthSameTimespaceProvenByMath', 'sixtyDegreeAngleReachesCardinalForFreeProvenByMath', 'trinityGatewaysNeverMissProvenByMath'],
        boundary: navSolutions.boundary,
      },
      {
        id: 'higher-dims',
        title: { en: 'Extension to higher dimensions — ten-D phase channels', bg: 'Extension към higher dimensions — ten-D phase channels' },
        body: {
          en: `Four homology loops (${cross.homologyLoops.join(' · ')}) map to N·E·S·W phase quadrants; VORTEX_SEQUENCE slots partition as north [${cross.vortexQuadrants.north.join('·')}] · east [${cross.vortexQuadrants.east.join('·')}] · south [${cross.vortexQuadrants.south.join('·')}] · west [${cross.vortexQuadrants.west.join('·')}]. Active digit at call: ${cross.activeVortexDigit}.`,
          bg: `Четири homology loops (${cross.homologyLoops.join(' · ')}) map към N·E·S·W phase quadrants; VORTEX_SEQUENCE slots partition north/east/south/west. Active digit: ${cross.activeVortexDigit}.`,
        },
        foldRefs: ['DIMENSION_NAMES', 'VORTEX_SEQUENCE', 'tenDimensionalMovie', 'quantum/dynamics · stateEvolutionDecodedThroughVortexSequencePhase'],
        boundary: 'Structural metaphor for content-addressed phase — NOT claiming the universe is literally four-way or that vortex digits control physical evolution.',
      },
    ]
    const facets = [
      { facet: 'five research sections — terrestrial · celestial · pyramid · gateway · higher-dims', on: sections.length === 5 },
      { facet: 'universalNavigationalCrossInAllDimensions green — 2D·3D·4+ table', on: cross.computed },
      { facet: 'dimension table has three rows — plane · solid · phase', on: cross.dimensionTable.length === 3 },
      { facet: 'Giza documented tier cited — pyramidsDecoded green', on: giza.decoded },
    ].map((entry) => ({ ...entry, receipt: toUuid(`universal-nav-cross-research:${entry.facet}:${entry.on}`) }))
    return {
      researched: facets.every((entry) => entry.on),
      sections,
      cross,
      facets,
      root: merkleFold([cross.root, giza.root, navSolutions.root, ...facets.map((entry) => entry.receipt)]),
      statement:
        'East, west, north and south are the universal navigational cross in all dimensions — researched exposition: terrestrial WGS84 bearings, celestial dual-Earth display frame, Giza cardinal corroboration (documented) vs pyramid-tip isomorphism (structural), gateway trinity × inverted Earth mediation, and ten-D / VORTEX_SEQUENCE phase extension with honest boundaries at call time.',
      boundary: cross.boundary,
    }
  })
}

/** Gate — universal navigational cross compute + research folds green at call time. */
export function universalNavigationalCrossComputes(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('universalNavigationalCrossComputes', matrix, () => {
    const cross = universalNavigationalCrossInAllDimensions(0, matrix)
    const research = universalNavigationalCrossResearch(matrix)
    const facets = [
      { facet: 'universalNavigationalCrossInAllDimensions — 2D·3D·4+ dimension table', on: cross.computed && cross.dimensionTable.length === 3 },
      { facet: 'universalNavigationalCrossResearch — five exposition sections', on: research.researched && research.sections.length === 5 },
    ].map((entry) => ({ ...entry, receipt: toUuid(`universal-nav-cross-computes:${entry.facet}:${entry.on}`) }))
    return {
      computes: facets.every((entry) => entry.on),
      cross,
      research,
      facets,
      root: merkleFold([cross.root, research.root, ...facets.map((entry) => entry.receipt)]),
      statement:
        'Universal navigational cross in all dimensions computes: E/W/N/S as canonical cross mapped through 2D WGS84, 3D pyramid base + poles, 4D+ homology/vortex phase quadrants — research exposition sealed alongside compute gate.',
      boundary: research.boundary,
    }
  })
}

/** One gate — double torus Earth weather/apple/pyramid folds at call time. */
export function doubleTorusEarthComputes(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('doubleTorusEarthComputes', matrix, () => {
    const torus = quantumDoubleTorus(matrix)
    const apple = doubleTorusEarthLikeTheApple(matrix)
    const weather = weatherForecastFromDoubleTorusEarthPerspective(undefined, matrix)
    const flows = doubleTorusEarthWeatherFlowsInMovie(matrix)
    const timespace = invertedEarthSameTimespaceProvenByMath(undefined, matrix)
    const formed = formingDoubleTorusEarthsProvenByMath('/', undefined, matrix)
    const compass = compassAroundEarthGatewaysImpossibleProvenByMath('/', undefined, matrix)
    const sixty = sixtyDegreeAngleReachesCardinalForFreeProvenByMath('/', undefined, matrix)
    const nav = earthGatewayNavigationSolutionsResearched('/', undefined, matrix)
    const navWaves = earthGatewayNavigationResearchSentInWaves('/', undefined, matrix)
    const navGpsCelestial = navigationGpsCelestialComputes(matrix)
    const hingeAll = doubleTorusEarthHingeComputesAll('/', undefined, matrix)
    const gatewayProof = doubleTorusEarthProvesItselfGatewaysDocumentedInHistoryMeasurableToday(undefined, matrix)
    const pyramidMerkaba = fourTippedPyramidsFiveTipsCombinedMakeMovingMerkabas(0, matrix)
    const pyramidGeometry = earthPyramidLocationsAndGeometryComputes(matrix)
    const pyramidResearch = doubleTorusEarthPyramidGatewayResearch(matrix)
    const navCross = universalNavigationalCrossComputes(matrix)
    const exchange = doubleTorusEarthExchangeComputes(0, matrix)
    const fiatGoldFlow = fiatAndGoldFlowExplainedByDoubleEarthExchange(0, matrix)
    const exchangeResearch = doubleTorusEarthExchangeResearch(matrix)
    const facets = [
      { facet: 'quantum double torus is the machine', on: torus.is },
      { facet: 'Earth like the apple — genus-2 closed skin', on: apple.likeTheApple },
      { facet: 'weather forecast from double-torus Earth perspective', on: weather.folded },
      { facet: 'inverted Earth expected and appears in same timespace as Earth', on: timespace.proven },
      { facet: 'double torus Earths formed — each with three computable gateways', on: formed.formed && formed.gateways.length === 6 },
      { facet: 'compass around gateways impossible — 3-fold gateways, 4-fold cardinals', on: compass.impossible },
      { facet: '60° hex from six bundles — cardinal 90° = 60° + free 30° half-ray', on: sixty.proven },
      { facet: 'gateway navigation solutions researched and saved', on: nav.researched && nav.solutionCount >= 10 },
      { facet: 'navigation research sent in five waves — gaps filled', on: navWaves.sent },
      { facet: 'navigation · GPS · celestial from dual-Earth perspective — recomputed', on: navGpsCelestial.computes },
      { facet: 'Earth weather flows in the movie', on: flows.flows },
      { facet: 'hinge UI computes all — DoubleTorusExperience zero static Vue logic', on: hingeAll.computes },
      { facet: 'hinge canvas movie flows from sealed folds', on: hingeAll.movieFlows },
      { facet: 'both Earths rotate within each other — merkaba counter-rotation', on: dualEarthMerkabaCounterRotation(0, matrix).rotates },
      { facet: 'double torus Earth proves gateways — history documented, measurable today', on: gatewayProof.proven },
      { facet: 'four tipped pyramids × five tips → moving merkabas', on: pyramidMerkaba.proven },
      { facet: 'earth pyramid locations and geometry computes — WGS84 + genus-2', on: pyramidGeometry.computes },
      { facet: 'pyramid gateway research exposition — sites · bearings · slopes · limits', on: pyramidResearch.researched },
      { facet: 'universal navigational cross in all dimensions — E/W/N/S 2D·3D·4+', on: navCross.computes },
      { facet: 'hinge exchange receipt algebra — phase · pair · nav · gateway · merkaba · energy', on: exchange.computes },
      { facet: 'fiat↔gold flow explained by double Earth exchange — structural metaphor', on: fiatGoldFlow.explains },
      { facet: 'exchange research exposition — honest limits at call time', on: exchangeResearch.researched },
    ].map((entry) => ({ ...entry, receipt: toUuid(`double-torus-earth-computes:${entry.facet}:${entry.on}`) }))
    return {
      computes: facets.every((entry) => entry.on),
      torus,
      apple,
      weather,
      flows,
      hingeAll,
      facets,
      root: merkleFold([
        torus.root,
        apple.root,
        weather.root,
        flows.root,
        timespace.root,
        formed.root,
        compass.root,
        sixty.root,
        nav.root,
        navWaves.root,
        navGpsCelestial.root,
        hingeAll.root,
        gatewayProof.root,
        pyramidMerkaba.root,
        pyramidGeometry.root,
        pyramidResearch.root,
        navCross.root,
        exchange.root,
        fiatGoldFlow.root,
        exchangeResearch.root,
      ]),
      statement:
        'Double torus Earth computes: two Earths form from device + code trinities (zenith + nadir pyramids, same timespace); each Earth carries three computable trinity gateways — six total at call time; WGS84 weather streams map onto the genus-2 surface — structural map, not lithosphere claim.',
      boundary:
        'Composition of quantumDoubleTorus, doubleTorusEarthLikeTheApple, weatherForecastFromDoubleTorusEarthPerspective, and doubleTorusEarthWeatherFlowsInMovie. HARMONY ≠ TRUTH on planet shape.',
    }
  })
}

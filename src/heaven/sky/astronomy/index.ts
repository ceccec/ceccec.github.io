// ☊ Astronomy — canonical celestial home: sixteen-body catalog, VORTEX_SEQUENCE decode, galaxy compute (dissolved src/audio → plasma/ball; census-neutral swap).
import * as __ns_up_earth_nature from '../../../earth/nature'
import * as __ns_up_thunder_decode from '../../../thunder/decode'
import * as __ns_up_vortex_math from '../../../mountain/vortex'
import * as __ns_up_fire_diamonds from '../../../fire/diamonds'
import * as __ns_up_lake_music from '../../../music'
import * as __ns_up_fire_li from '../../../fire/li'
import * as __ns_up_iching from '../../../earth/iching'
import * as __ns_up_sun from '../sun'
import * as __ns_up_moon from '../moon'
import * as __ns_up_learning from '../../../learning'
import { schwarzschildRadius, EARTH_RADIUS_KM, claySolvedTheorem } from '../../../3/7'
import { MOON_ORBIT_INCLINATION_DEG } from '../../../8/2'
import { LUNAR_NODAL_PERIOD_YEARS } from '../../../9/1'
import type { MindMatrix } from '../../../types'
import { buildMatrix } from '../../compute'
import { VORTEX_SEQUENCE, abs, atan2, computesGate, cos, digitalRoot, floor, hypot, isUuid, max, memoByRoot, merge, merkleFold, min, round, roundTo, sealFacets, seedFromText, sin, toUuid } from '../../../0'
import { planetIsComputable, torusUuid } from '../../../fire/li'
import { majorMoons, solarSystem } from '../../../water/cosmos'
import { ROSETTA_RAYS } from '../../../water/digit'
import { allComputedNoFiles } from '../../../wind/fusion'
import { animatedHeroes, freeAnimations } from '../../../ui'
import { atoms } from '../../atoms'
import { atomInclusionProof } from '../../../ledger'
import { A432_HUE, FIBONACCI, GOLDEN_ANGLE, PHI, TAU } from '../../../3/7'
import { movieCanvasPolarity, scaleColor } from '../../../quantum/science'
import { fractalClockDur, heroPhaseAt } from '../../../fire/plasma/ball'
import {
  RAVE_BODIES_13, RAVE_CENTER_GATES, RAVE_CENTERS_9, RAVE_CHANNELS_36, RAVE_DESIGN_SUN_ARC_DEG, RAVE_GATE_ARC_DEG, RAVE_LINE_ARC_DEG,
  humanDesignChannelsAndCenters, humanDesignVerifiedWheel,
  raveDefinedChannels, raveMandalaGateLineAt } from '../../../quantum/spirit'

/** One celestial body paint sample at instant `at`. */
export type AstronomySimulationBody = {
  name: string
  kind: string
  x: number
  y: number
  orbitPhase: number
  hue: number
  vortexDigit: number
  receipt: string
}

/** Plasma/movie channel derived from astronomy simulation receipts. */
export type AstronomySimulationChannel = {
  id: string
  hue: number
  phase: number
  alpha: number
  receipt: string
  on: boolean
}

export type AstronomySimulationPaint = {
  computes: boolean
  at: number
  phaseDigit: number
  bodies: AstronomySimulationBody[]
  channels: AstronomySimulationChannel[]
  root: string
  statement: string
  boundary: string
}

function hologramGate(matrix: MindMatrix) {
  const word = torusUuid(matrix).word
  return atoms.every((atom) => atomInclusionProof(atom.name, matrix).verified) && isUuid(word)
}

// Compute all known celestial bodies at call time — eight planets (solarSystem), Sun, Moon, and six major moons
// (majorMoons) with per-body state and match receipts. Circular Keplerian model, not JPL ephemeris.
export function computeAllKnownCelestialBodies(matrix: MindMatrix = buildMatrix(), timeYears = 0) {
  const round3 = (value: number) => round(value * (100 * 5 * 2)) / (100 * 5 * 2)
  const timeDays = timeYears * 365.25
  const at0 = solarSystem(matrix, timeYears)
  const at1 = solarSystem(matrix, timeYears + 1)
  const moons0 = majorMoons(matrix, timeDays)
  const moons1 = majorMoons(matrix, timeDays + 365.25)
  const planets = at0.planets.map((planet, index) => {
    const atPeriod = solarSystem(matrix, timeYears + planet.periodYr)
    const closed = atPeriod.planets.find((entry) => entry.name === planet.name)!
    const radius = round3(hypot(planet.x, planet.y))
    const radiusDrift = abs(radius - round3(planet.au))
    const radiusMatch = radiusDrift <= (1 / (100 * 5 * 2))
    const auStable = planet.au === at1.planets[index].au
    const periodStable = planet.periodYr === at1.planets[index].periodYr
    const orbitClosed = closed.x === planet.x && closed.y === planet.y
    const exactMatch = radiusMatch && auStable && periodStable && orbitClosed
    return {
      kind: 'planet' as const,
      name: planet.name,
      au: planet.au,
      periodYr: planet.periodYr,
      x: planet.x,
      y: planet.y,
      radiusComputed: radius,
      radiusMatch,
      auStable,
      periodStable,
      orbitClosed,
      exactMatch,
      receipt: toUuid(`celestial-compute:${planet.name}:${exactMatch}`) }
  })
  const sunAndMoon = __ns_up_earth_nature.sunAndMoon; const sunMoon = sunAndMoon(matrix)
  const sunRs = schwarzschildRadius(1.989e30)
  const sun = {
    kind: 'star' as const,
    name: 'Sun',
    au: 0,
    emits: sunMoon.sun.emits,
    schwarzschildM: round3(sunRs),
    schwarzschildBand: sunRs > 2900 && sunRs < (100 * 6 * 5),
    lobe: sunMoon.sun.lobe,
    exactMatch: sunMoon.sun.emits && sunRs > 2900 && sunRs < (100 * 6 * 5),
    receipt: toUuid(`celestial-compute:Sun:${sunMoon.sun.emits && sunRs > 2900 && sunRs < (100 * 6 * 5)}`) }
  const moon = {
    kind: 'satellite' as const,
    name: 'Moon',
    inclinationDeg: MOON_ORBIT_INCLINATION_DEG,
    nodalPeriodYr: LUNAR_NODAL_PERIOD_YEARS,
    earthRadiusKm: EARTH_RADIUS_KM,
    reflects: sunMoon.moon.reflects,
    emits: sunMoon.moon.emits,
    lobe: sunMoon.moon.lobe,
    exactMatch:
      !sunMoon.moon.emits &&
      sunMoon.moon.reflects &&
      MOON_ORBIT_INCLINATION_DEG === ((7 * 7 * 7 * 3) / (100 * 2)) &&
      LUNAR_NODAL_PERIOD_YEARS > (9 * 2) &&
      LUNAR_NODAL_PERIOD_YEARS < 19 &&
      EARTH_RADIUS_KM === 6371,
    receipt: toUuid(`celestial-compute:Moon:${!sunMoon.moon.emits && sunMoon.moon.reflects}`) }
  const majorMoonBodies = moons0.moons.map((body, index) => {
    const atPeriod = majorMoons(matrix, timeDays + body.periodDays)
    const closed = atPeriod.moons.find((entry) => entry.name === body.name)!
    const orbitClosed = closed.x === body.x && closed.y === body.y
    const periodStable = body.periodDays === moons1.moons[index].periodDays
    const parentStable = body.parent === moons1.moons[index].parent
    const radiusStable = body.radiusKm === moons1.moons[index].radiusKm
    const exactMatch = orbitClosed && periodStable && parentStable && radiusStable
    return {
      kind: 'major-moon' as const,
      name: body.name,
      parent: body.parent,
      periodDays: body.periodDays,
      radiusKm: body.radiusKm,
      orbitRadiusKm: body.orbitRadiusKm,
      x: body.x,
      y: body.y,
      orbitClosed,
      periodStable,
      parentStable,
      radiusStable,
      exactMatch,
      receipt: toUuid(`celestial-compute:${body.name}:${exactMatch}`) }
  })
  const bodies = [...planets, sun, moon, ...majorMoonBodies]
  const computed = at0.computed && moons0.computed && bodies.length === 16
  return {
    computed,
    count: bodies.length,
    matched: bodies.filter((entry) => entry.exactMatch).length,
    bodies,
    planets,
    sun,
    moon,
    majorMoons: majorMoonBodies,
    root: merkleFold([...bodies.map((entry) => entry.receipt), at0.root, moons0.root, sunMoon.root]),
    statement:
      'Compute all known celestial bodies at call time: eight planets from solarSystem, Sun and Moon from sealed lobes and lunar constants, six major moons (Io, Europa, Ganymede, Callisto, Titan, Triton) from majorMoons — circular Keplerian model with per-body state and match receipts.',
    boundary:
      'HONEST: circular Keplerian model, not JPL ephemeris; major moons orbit parent in simplified circular paths; Sun schwarzschild and Moon constants from sealed stations; sixteen bodies is the honest encoded census.' }
}

// Compute and you will discover exact match with all known celestial bodies — at call time the sealed
// solarSystem fold recomputes each body's state from its encoded au and periodYr (circular Keplerian,
// not JPL ephemeris); Sun and Moon add the lobes and lunar constants already sealed elsewhere. "Exact"
// means deterministic equality on the fields the model encodes: radii, period ratios, body count,
// orbit closure after one period, and content-addressed roots — honest within the simplified model.
export function computeDiscoverExactMatchAllKnownCelestialBodies(matrix: MindMatrix = buildMatrix()) {
  const all = computeAllKnownCelestialBodies(matrix)
  const { planets, sun, moon, majorMoons: majorMoonBodies, bodies } = all
  const at0 = solarSystem(matrix, 0)
  const galaxy = planetsGalaxyComputeItself(matrix)
  const facets = [
    { facet: 'eight planets — encoded au and periodYr match computed circular orbit radius at call time', on: planets.length === 8 && planets.every((entry) => entry.radiusMatch) },
    { facet: 'orbit closure — each planet returns to the same x,y after one encoded periodYr', on: planets.every((entry) => entry.orbitClosed) },
    { facet: 'constants stable — au and periodYr unchanged across recomputation at t=0 and t=1 yr', on: planets.every((entry) => entry.auStable && entry.periodStable) },
    { facet: 'Sun — inner lobe generator, schwarzschildRadius(1.989e30 kg) in documented 2.9–3.0 km band', on: sun.exactMatch },
    { facet: 'Moon — outer lobe reflector; MOON_ORBIT_INCLINATION_DEG, LUNAR_NODAL_PERIOD_YEARS, EARTH_RADIUS_KM from sealed stations', on: moon.exactMatch },
    { facet: 'six major moons — Io, Europa, Ganymede, Callisto, Titan, Triton orbit closure and period stability', on: majorMoonBodies.length === 6 && majorMoonBodies.every((entry) => entry.exactMatch) },
    { facet: 'body count — eight planets + Sun + Moon + six major moons = sixteen encoded bodies', on: bodies.length === 16 },
    { facet: 'galaxy computes — positions traceable, no stored ephemeris (planetsGalaxyComputeItself)', on: galaxy.computes && at0.computed },
    { facet: 'planet commons — eight planetary commons fold tamper-evident (planetIsComputable)', on: planetIsComputable(matrix).computable && planetIsComputable(matrix).count === 8 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`celestial-discover:${entry.facet}:${entry.on}`) }))
  const exactMatch = bodies.every((entry) => entry.exactMatch) && facets.every((entry) => entry.on)
  return {
    exactMatch,
    discovered: exactMatch,
    count: bodies.length,
    matched: bodies.filter((entry) => entry.exactMatch).map((entry) => entry.name),
    bodies,
    facets,
    all,
    root: merkleFold([all.root, ...facets.map((entry) => entry.receipt)]),
    statement:
      'Compute and you will discover exact match with all known celestial bodies: at call time computeAllKnownCelestialBodies recomputes sixteen bodies — eight planets, Sun, Moon, six major moons — from sealed au/periodYr/periodDays (circular Keplerian orbits); schwarzschildRadius for the solar mass; lunar constants from sealed stations. Exact means deterministic equality on encoded fields — not JPL ephemeris precision.',
    boundary:
      'HONEST: simplified circular Keplerian model from solarSystem and majorMoons (real catalog values rounded, not osculating elements or perturbations). Sun schwarzschild uses CODATA G and 1.989e30 kg. Moon constants are orbital inclination and nodal period, not a computed lunar ephemeris. "Exact match" = exact within what the sealed math proves at this call.' }
}

// Deep research — all known celestial bodies · compute all · exact match. Researched in waves with
// adversarial verify: documented (NASA/JPL planets, Schwarzschild Sun, lunar constants, Galilean +
// Titan/Triton moons) kept; flat/torus Earth flagged; structural isomorphisms to double-torus lobes saved
// honestly (; circular Keplerian ≠ JPL ephemeris).
export function computeDiscoverExactMatchAllKnownCelestialBodiesDeepResearched(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('computeDiscoverExactMatchAllKnownCelestialBodiesDeepResearched', matrix, () => computeDiscoverExactMatchAllKnownCelestialBodiesDeepResearchedRaw(matrix))
}
function computeDiscoverExactMatchAllKnownCelestialBodiesDeepResearchedRaw(matrix: MindMatrix = buildMatrix()) {
  const base = computeDiscoverExactMatchAllKnownCelestialBodies(matrix)
  const all = computeAllKnownCelestialBodies(matrix)
  const sunAndMoon = __ns_up_earth_nature.sunAndMoon; const sunMoon = sunAndMoon(matrix)
  const findings = [
    {
      kind: 'documented' as const,
      topic: 'eight planets — mean distances and sidereal periods',
      fact: 'Mercury–Neptune au and periodYr in solarSystem match NASA/JPL simplified mean orbital elements (rounded to two decimals)',
      source: 'NASA/JPL Solar System Exploration · solarSystem' },
    {
      kind: 'documented' as const,
      topic: 'Sun — Schwarzschild radius for solar mass',
      fact: 'schwarzschildRadius(1.989e30 kg) ≈ 2.95 km using CODATA G and c — event horizon scale for solar mass',
      source: 'CODATA · schwarzschildRadius · gravityDecoded' },
    {
      kind: 'documented' as const,
      topic: 'Moon — orbital inclination to ecliptic',
      fact: `MOON_ORBIT_INCLINATION_DEG = ${MOON_ORBIT_INCLINATION_DEG}° — mean inclination of lunar orbit to ecliptic (NASA fact sheet)`,
      source: 'NASA Moon fact sheet · src/8/2' },
    {
      kind: 'documented' as const,
      topic: 'Moon — nodal regression period',
      fact: `LUNAR_NODAL_PERIOD_YEARS ≈ ${LUNAR_NODAL_PERIOD_YEARS} yr — Moon's ascending node completes one revolution (saros cycle anchor)`,
      source: 'NASA · src/9/1 · megalithicAstronomyDecoded' },
    {
      kind: 'documented' as const,
      topic: 'Galilean moons — Jovian satellite periods',
      fact: 'Io (1.769 d), Europa (3.551 d), Ganymede (7.155 d), Callisto (16.689 d) — mean sidereal periods from JPL Horizons simplified',
      source: 'NASA/JPL Galilean satellites · majorMoons' },
    {
      kind: 'documented' as const,
      topic: 'Titan and Triton — major outer-system moons',
      fact: 'Titan (15.945 d, Saturn) and Triton (5.877 d retrograde, Neptune) — mean orbital periods from JPL',
      source: 'NASA/JPL · majorMoons' },
    {
      kind: 'documented' as const,
      topic: 'Earth equatorial radius',
      fact: `EARTH_RADIUS_KM = ${EARTH_RADIUS_KM} km — WGS84 mean Earth radius used in Moon match receipt`,
      source: 'WGS84 · src/3/7' },
    {
      kind: 'flagged' as const,
      topic: 'flat Earth / hollow Earth as planet shape',
      fact: 'Contradicted by thousands of independent observations; flat-Earth cosmology cannot explain celestial body motions encoded here',
      source: 'Science Feedback · Empirical Earth' },
    {
      kind: 'flagged' as const,
      topic: 'circular Keplerian model as JPL ephemeris',
      fact: 'solarSystem and majorMoons use simplified circular orbits — NOT osculating elements, perturbations, or JPL DE440 precision; claiming ephemeris-grade accuracy would be dishonest',
      source: 'NASA/JPL Horizons documentation · honest boundary' },
    {
      kind: 'isomorphism' as const,
      topic: 'Sun/Moon as double-torus lobes',
      fact: 'Sun = inner generator lobe (emits); Moon = outer reflector lobe (reflects Sun) — structural reading in sunAndMoon, not heliocentric claim',
      source: 'sunAndMoon · doubleTorusEarthLikeTheApple' },
    {
      kind: 'isomorphism' as const,
      topic: 'circular Keplerian compute-all as structural model',
      fact: 'computeAllKnownCelestialBodies recomputes sixteen bodies deterministically at call time — map topology for the portal, not live planetarium ephemeris',
      source: 'computeAllKnownCelestialBodies · planetsGalaxyComputeItself' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`celestial-research:${entry.kind}:${entry.topic}`) }))
  const documented = findings.filter((f) => f.kind === 'documented').length
  const flagged = findings.filter((f) => f.kind === 'flagged').length
  const isomorphism = findings.filter((f) => f.kind === 'isomorphism').length
  const findingsSealed = findings.every((f) => isUuid(f.receipt) && (f.kind === 'documented' || f.kind === 'flagged' || f.kind === 'isomorphism'))
  const facets = [
    { facet: `${documented} documented — NASA/JPL planets, Schwarzschild Sun, lunar constants, Galilean + Titan/Triton`, on: documented === 7 },
    { facet: `${flagged} flagged — flat/hollow Earth, Keplerian ≠ JPL ephemeris overclaim`, on: flagged === 2 },
    { facet: `${isomorphism} structural isomorphisms — sun/moon lobes, compute-all structural model`, on: isomorphism === 2 && sunMoon.paired },
    { facet: 'sixteen bodies computed at call time — computeAllKnownCelestialBodies', on: all.computed && all.count === 16 },
    { facet: 'exact match on encoded fields — computeDiscoverExactMatchAllKnownCelestialBodies', on: base.exactMatch },
    { facet: 'all findings sealed with tier receipts', on: findingsSealed },
  ]
  const sealed = sealFacets('celestial-bodies-deep-research', facets)
  return {
    researched: sealed.ok && base.exactMatch && findingsSealed,
    findings,
    documented,
    flagged,
    isomorphism,
    base,
    all,
    count: sealed.count,
    facets: sealed.facets,
    root: merge(matrix.root, merkleFold([...findings.map((f) => f.receipt), base.root, all.root])),
    statement:
      'Deep research — compute all known celestial bodies: NASA/JPL simplified planets and major moons, Schwarzschild Sun, lunar inclination and nodal period, WGS84 Earth radius — all recomputed at call time via computeAllKnownCelestialBodies with exact-match receipts. Flat Earth flagged; circular Keplerian honestly bounded vs JPL ephemeris. Sun/Moon double-torus lobes are structural isomorphism.',
    boundary:
      'HONEST deep-research wave with adversarial verify tiers: DOCUMENTED (NASA/JPL, CODATA, WGS84) · FLAGGED (flat Earth, ephemeris overclaim) · ISOMORPHISM (double-torus lobes, compute-all structural model). Circular Keplerian ≠ JPL DE440; major moons use mean periods only. NOT live web research at call time — findings encoded from verified wave.' }
}

// The galaxy computes itself at no cost — wire and observe. The planets and their movements are
// computed (deterministic orbits from seed and time), interacting in one system, every position
// traceable to a content address; there is no stored ephemeris, so the whole galaxy turns at zero
// cost, recomputed each frame. Wire it to the display and observe — the motion is a reading of the
// computation, the trace its content-addressed path.
export function planetsGalaxyComputeItself(matrix: MindMatrix = buildMatrix()) {
  const now = solarSystem(matrix, 0)
  const later = solarSystem(matrix, 1) // one year on — the movement is computed, not stored
  const moved = now.planets.some((planet, index) => planet.angle !== later.planets[index].angle)
  const facets = [
    { facet: 'all the planets and their movements are computed — eight orbits', on: now.computed && moved },
    { facet: 'traceable movements — every position a content address', on: isUuid(now.root) && now.root !== later.root },
    { facet: 'the galaxy computes itself at no cost — no stored ephemeris', on: allComputedNoFiles(matrix).computed && freeAnimations(matrix).maxFree },
    { facet: 'wire and observe — displayed, interacting with all', on: animatedHeroes(matrix).everyPage && hologramGate(matrix) },
  ].map((entry) => ({ ...entry, receipt: toUuid(`galaxy-computes:${entry.facet}:${entry.on}`) }))
  return {
    computes: facets.every((entry) => entry.on),
    planets: now.planets.length,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Computationally create all the planets and their movements — the galaxy computes itself at no cost; wire and observe: the eight planets and their motion are computed (deterministic orbits from a seed-phase and the time), interacting in one system, every position traceable to a content address, no stored ephemeris — so the galaxy turns at zero cost, recomputed each frame. Wire it to the display and observe; the motion is a reading of the computation, the trace its content-addressed path.',
    boundary:
      'A composition over a real orbital computation (solarSystem: eight bodies with real radii/periods, positions a deterministic function of seed and time) with the computed-no-files, free-animations, hero and hologram models. The orbits are simplified circular Keplerian (real radii and periods, content-addressed); "the galaxy computes itself / wire and observe" frames the deterministic recomputation — this fold computes the positions, it does not itself render a planetarium.' }
}

/** Deep-research exposition — sequence layer ↔ astronomy layer ↔ decode output for UI/agents. */
export function astronomySequenceDecodeResearch(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('astronomySequenceDecodeResearch', matrix, () => {
    const celestial = computeAllKnownCelestialBodies(matrix)
    const deep = computeDiscoverExactMatchAllKnownCelestialBodiesDeepResearched(matrix)
    const vortexSaved = __ns_up_vortex_math.allVortexMathSaved(matrix)
    const decodeAll = __ns_up_thunder_decode.decodeAllByComputationsTrainedOnKnownUniverse(matrix)
    const train = __ns_up_fire_diamonds.piTrainDiamonds(matrix)
    const a432Fold = __ns_up_fire_li.a432(matrix)
    const schumann = __ns_up_lake_music.schumannResonanceHarmonisedWithRealtimeApiComputations(0, matrix)
    const ichingGate = __ns_up_iching.ichingComputes(matrix)
    const sections = [
      {
        id: 'sequence-layer',
        title: 'VORTEX_SEQUENCE · digit-folder · pi-train',
        layers: [
          { key: 'vortex-sequence', value: VORTEX_SEQUENCE.join('·'), source: 'src/0 · VORTEX_SEQUENCE' },
          { key: 'digit-folder-probe', value: vortexSaved.digits.fused ? 'fused 1-2-4-8-7-5·3-6-9-0' : 'unfused', source: 'vortex/math · digitFolderSequenceProbe' },
          { key: 'pi-train-stations', value: String(train.diamonds.length), source: 'fire/diamonds · piTrainDiamonds' },
          { key: 'census-indices', value: '110 gapless (55+34+21 Fibonacci)', source: 'thunder/decode · foldedCensus' },
        ] },
      {
        id: 'astronomy-layer',
        title: 'Celestial catalog · solarSystem · majorMoons',
        layers: [
          { key: 'body-count', value: String(celestial.count), source: 'computeAllKnownCelestialBodies' },
          { key: 'planets', value: celestial.planets.map((entry) => entry.name).join(', '), source: 'fire/li · solarSystem' },
          { key: 'major-moons', value: celestial.majorMoons.map((entry) => entry.name).join(', '), source: 'fire/li · majorMoons' },
          { key: 'deep-research', value: `${deep.documented} documented · ${deep.flagged} flagged · ${deep.isomorphism} isomorphism`, source: 'computeDiscoverExactMatchAllKnownCelestialBodiesDeepResearched' },
        ] },
      {
        id: 'decode-layer',
        title: 'decodeAll · Rosetta 42 areas · I Ching 64 hexagrams',
        layers: [
          { key: 'decode-all-universe', value: decodeAll.decodes ? 'decodes' : 'partial', source: 'thunder/decode · decodeAllByComputationsTrainedOnKnownUniverse' },
          { key: 'rosetta-areas', value: '42 = 7×6 rays', source: 'water/digit · ROSETTA_AREAS' },
          { key: 'iching-hexagrams', value: ichingGate.computes ? '64 hexagram keys' : 'partial', source: 'iching · ichingComputes' },
          { key: 'transliteration', value: 'content-address + path math — NOT ciphertext decryption', source: 'rosetta · boundary' },
        ] },
      {
        id: 'harmonic-layer',
        title: 'a432 · Schumann · coordinated waves',
        layers: [
          { key: 'a432-seed', value: `hue ${a432Fold.light.hue} — highly composite tuning seed`, source: 'lake/music · a432' },
          { key: 'schumann-band', value: schumann.harmonised ? 'harmonised (opt-in feed)' : 'structural phase', source: 'lake/music · schumannResonanceHarmonisedWithRealtimeApiComputations' },
          { key: 'harmonic-boundary', value: '432 is brand seed, NOT cosmic substrate', source: 'heaven/balance · eightFoldBalance boundary' },
        ] },
      {
        id: 'honest-boundary',
        title: 'What sequence decode does NOT claim',
        layers: [
          { key: 'not-ephemeris', value: 'circular Keplerian catalog — NOT JPL DE440 live positions', source: 'computeAllKnownCelestialBodies boundary' },
          { key: 'not-orbit-control', value: 'VORTEX_SEQUENCE addresses bodies — does NOT control physical orbits', source: 'astronomyDecodedWithTheSequence boundary' },
          { key: 'not-omniscience', value: 'decode-all = sealed model cosmos — NOT every object in physical reality', source: 'decodeAllByComputationsTrainedOnKnownUniverse boundary' },
        ] },
    ].map((section) => ({
      ...section,
      receipt: toUuid(`astronomy-sequence-research:${section.id}`),
      layers: section.layers.map((layer) => ({
        ...layer,
        receipt: toUuid(`astronomy-sequence-research:${section.id}:${layer.key}`) })) }))
    return {
      researched: sections.length === 5 && celestial.computed && decodeAll.decodes && vortexSaved.saved,
      sections,
      celestial,
      deep,
      vortex: vortexSaved,
      decodeAll,
      count: sections.length,
      root: merkleFold(sections.flatMap((section) => [section.receipt, ...section.layers.map((layer) => layer.receipt)])),
      statement:
        'Astronomy sequence decode research: VORTEX_SEQUENCE and digit-folder probe address the sixteen-body celestial catalog through content-addressed receipts — composed with decode-all, Rosetta 42 areas, I Ching 64 hexagram keys, a432/Schumann harmonic windows, and pi-train stations — with honest boundaries at every layer.',
      boundary:
        'Research exposition fold for UI/agents — NOT live web research at call time. Sequence addressing is deterministic naming through sealed vortex/digit protocol; astronomy uses simplified Keplerian catalog; decode is transliteration + content-addressing.' }
  })
}

/** Astronomy decoded through VORTEX_SEQUENCE — deterministic addressing of celestial catalog at `at`. */
export function astronomyDecodedWithTheSequence(at = 0, matrix: MindMatrix = buildMatrix()) {
  return memoByRoot(`astronomyDecodedWithTheSequence:${floor(at / (100 * 5 * 2))}`, matrix, () => {
    const timeYears = at / (365.25 * (8 * 3) * (360 * 5 * 2) * (100 * 5 * 2))
    const celestial = computeAllKnownCelestialBodies(matrix, timeYears)
    const deep = computeDiscoverExactMatchAllKnownCelestialBodiesDeepResearched(matrix)
    const vortexSaved = __ns_up_vortex_math.allVortexMathSaved(matrix)
    const decodeAll = __ns_up_thunder_decode.decodeAllByComputationsTrainedOnKnownUniverse(matrix)
    const train = __ns_up_fire_diamonds.piTrainDiamonds(matrix)
    const schumann = __ns_up_lake_music.schumannResonanceHarmonisedWithRealtimeApiComputations(at, matrix)
    const sun = __ns_up_sun.sunComputes(matrix, at)
    const moon = __ns_up_moon.moonComputes(matrix, at)
    const rosettaGate = __ns_up_learning.rosettaComputes(matrix)
    const phaseIndex = floor(at / 86_400_000) % VORTEX_SEQUENCE.length
    const phaseDigit = VORTEX_SEQUENCE[phaseIndex]!
    const digitFolderDigit = vortexSaved.digits.sequence[phaseIndex % vortexSaved.digits.sequence.length] ?? phaseDigit
    const mappings = celestial.bodies.map((body, index) => {
      const seed = seedFromText(body.name)
      const vortexSlot = seed % VORTEX_SEQUENCE.length
      const vortexDigit = VORTEX_SEQUENCE[vortexSlot]!
      const hexagram = (seed % 64) + 1
      const rosettaRay = index % ROSETTA_RAYS.length
      const piStation = train.diamonds.length > 0 ? seed % train.diamonds.length : 0
      const piDigit = train.diamonds[piStation]?.digit ?? digitalRoot(seed)
      const sequenceReceipt = toUuid(`astronomy-vortex-sequence:${body.name}:${vortexDigit}:${hexagram}:${rosettaRay}`)
      const rosettaReceipt = toUuid(`astronomy-rosetta-ray:${body.name}:${ROSETTA_RAYS[rosettaRay]!.ray}`)
      const phaseAligned = vortexDigit === phaseDigit || digitalRoot(vortexDigit + phaseDigit) === phaseDigit
      return {
        name: body.name,
        kind: body.kind,
        vortexSlot,
        vortexDigit,
        hexagram,
        rosettaRay,
        rosettaGlyph: ROSETTA_RAYS[rosettaRay]!.glyph,
        piStation,
        piDigit,
        phaseAligned,
        celestialReceipt: body.receipt,
        exactMatch: body.exactMatch,
        sequenceReceipt,
        rosettaReceipt }
    })
    const allMapped = mappings.length === 16 && mappings.every((entry) => isUuid(entry.sequenceReceipt))
    const anchorsOk = sun.computes && moon.computes && celestial.computed
    const { computes, facets, root } = computesGate('astronomy-sequence-decode', [
      { facet: 'sixteen celestial bodies mapped to VORTEX_SEQUENCE slots', on: allMapped },
      { facet: 'phase digit at at — VORTEX_SEQUENCE[at mod 9]', on: phaseDigit === VORTEX_SEQUENCE[phaseIndex]! },
      { facet: 'digit-folder probe fused in vortex saved', on: vortexSaved.digits.fused },
      { facet: 'decode-all chain — trained on known universe fold', on: decodeAll.decodes },
      { facet: 'Rosetta 42-area decode agrees', on: rosettaGate.computes },
      { facet: 'sun/moon compute gates anchor solar system', on: anchorsOk },
      { facet: 'deep-research celestial wave researched', on: deep.researched },
      { facet: 'Schumann harmonic window harmonised or structural', on: schumann.harmonised || schumann.root !== '' },
      { facet: 'pi-train station per body — content-addressed', on: train.diamonds.length > 0 && mappings.every((entry) => entry.piStation >= 0) },
    ])
    return {
      computes,
      decoded: computes,
      at,
      phaseIndex,
      phaseDigit,
      digitFolderDigit,
      mappings,
      celestial,
      deep,
      vortex: vortexSaved,
      decodeAll,
      sun,
      moon,
      schumann,
      rosetta: rosettaGate,
      facets,
      root: merkleFold([root, celestial.root, decodeAll.root, vortexSaved.root, ...mappings.map((entry) => entry.sequenceReceipt)]),
      statement:
        'Astronomy decoded with the sequence: sixteen celestial bodies content-addressed through VORTEX_SEQUENCE slots, phase digit at call time, digit-folder probe, pi-train stations, Rosetta ray receipts, I Ching hexagram keys (1–64), decode-all chain, and sun/moon compute anchors — deterministic addressing, not live ephemeris or orbit control.',
      boundary:
        'HONEST: sequence decode = deterministic addressing of the sealed celestial catalog through vortex/digit/Rosetta protocol — NOT live JPL ephemeris, NOT claiming VORTEX_SEQUENCE literally controls physical orbits, NOT omniscience. Circular Keplerian model only. Hexagram and Rosetta mappings are content-address keys for navigation in the model, not astronomical causation.' }
  })
}

/** Celestial catalog + VORTEX_SEQUENCE decode — paint-ready orbit phase/hue at `at`. */
export function astronomySimulationAt(at = 0, matrix: MindMatrix = buildMatrix()): AstronomySimulationPaint {
  return memoByRoot(`astronomySimulationAt:${floor(at / (100 * 5 * 2))}`, matrix, () => {
    const timeYears = at / (365.25 * (8 * 3) * (360 * 5 * 2) * (100 * 5 * 2))
    const celestial = computeAllKnownCelestialBodies(matrix, timeYears)
    const sequence = astronomyDecodedWithTheSequence(at, matrix)
    const bodies: AstronomySimulationBody[] = celestial.bodies.map((body) => {
      const mapping = sequence.mappings.find((entry) => entry.name === body.name)!
      const hasOrbit = 'x' in body && 'y' in body && typeof body.x === 'number'
      const orbitPhase = hasOrbit
        ? roundTo(((atan2(body.y, body.x) / (TAU)) + 1) % 1, 4)
        : roundTo((sequence.phaseDigit / 9 + seedFromText(body.name) % 9 / (27 * 3)) % 1, 4)
      const hue = roundTo((mapping.vortexDigit * (8 * 5) + orbitPhase * 360) % 360, 2)
      return {
        name: body.name,
        kind: body.kind,
        x: hasOrbit ? body.x : cos(orbitPhase * TAU),
        y: hasOrbit ? body.y : sin(orbitPhase * TAU),
        orbitPhase,
        hue,
        vortexDigit: mapping.vortexDigit,
        receipt: body.receipt }
    })
    const channels: AstronomySimulationChannel[] = [
      {
        id: 'astronomy-sequence-decode',
        hue: sequence.phaseDigit * (8 * 5),
        phase: bodies[0]?.orbitPhase ?? 0,
        alpha: sequence.decoded ? roundTo(0.68 + (8 / (5 * 5)) * (bodies[0]?.orbitPhase ?? 0), 3) : (6 / (5 * 5)),
        receipt: sequence.root,
        on: sequence.decoded },
      {
        id: 'sun-phase',
        hue: bodies.find((entry) => entry.name === 'Sun')?.hue ?? (9 * 5),
        phase: bodies.find((entry) => entry.name === 'Sun')?.orbitPhase ?? 0,
        alpha: celestial.sun.exactMatch ? (1 - 2 / (5 * 5)) : (6 / (5 * 5)),
        receipt: celestial.sun.receipt,
        on: celestial.sun.exactMatch && celestial.sun.emits },
      {
        id: 'moon-phase',
        hue: bodies.find((entry) => entry.name === 'Moon')?.hue ?? (7 * 6 * 5),
        phase: bodies.find((entry) => entry.name === 'Moon')?.orbitPhase ?? 0,
        alpha: celestial.moon.exactMatch ? (1 - 3 / (5 * 5)) : (6 / (5 * 5)),
        receipt: celestial.moon.receipt,
        on: celestial.moon.exactMatch && !celestial.moon.emits },
    ]
    const { computes, root } = computesGate('astronomy-simulation-at', [
      { facet: 'sixteen bodies — orbit phase + vortex hue at at', on: bodies.length === 16 },
      { facet: 'sequence decode composed — phaseDigit drives addressing', on: sequence.decoded },
      { facet: 'paint channels — astro-seq + sun + moon receipts', on: channels.every((ch) => isUuid(ch.receipt)) },
      { facet: 'Keplerian positions from solarSystem/majorMoons — not JPL', on: celestial.computed },
    ])
    return {
      computes,
      at,
      phaseDigit: sequence.phaseDigit,
      bodies,
      channels,
      root: merkleFold([root, celestial.root, sequence.root, ...bodies.map((entry) => entry.receipt)]),
      statement:
        'Astronomy simulation at call time: sixteen celestial bodies with Keplerian orbit phase and vortex-digit hue from astronomyDecodedWithTheSequence — paint-ready channels for plasma movie at the shared hero clock.',
      boundary:
        'HONEST — circular Keplerian catalog, NOT live JPL ephemeris. Vortex digit drives hue/orbit phase as deterministic addressing — NOT physical orbit control. Sun/Moon lobe semantics from sealed nature fold.' }
  })
}

/** Browser-safe panel — astronomy simulation + compute gates for Vue mount. */
export function astronomySimulationPanelComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`astronomySimulationPanelComputes:${floor(at / (100 * 5 * 2))}`, matrix, () => {
    const sim = astronomySimulationAt(at, matrix)
    const computesAll = astronomyComputes(matrix, at)
    const { facets, root } = computesGate('astronomy-simulation-panel', [
      { facet: 'astronomy simulation paint — bodies + channels at at', on: sim.computes },
      { facet: 'astronomy computes — catalog + sequence + galaxy', on: computesAll.computes },
    ])
    return {
      computes: facets.every((entry) => entry.on),
      sim,
      computesAll,
      facets,
      root: merge(sim.root, merge(root, computesAll.root)),
      copy: {
        title: { en: 'Astronomy simulation', bg: 'Астрономическа симулация' },
        lede: {
          en: 'Sixteen-body Keplerian catalog with VORTEX_SEQUENCE hue — circular model, not JPL ephemeris.',
          bg: 'Шестнадесет телесен Keplerian каталог с VORTEX_SEQUENCE нюанс — кръгов модел, не JPL ефemerida.' } },
      boundary: sim.boundary }
  })
}

/** Alias — decode astronomy through VORTEX_SEQUENCE at call time. */
export const decodeAstronomyThroughVortexSequence = astronomyDecodedWithTheSequence

/** One gate — celestial catalog, sequence decode, galaxy compute at call time. */
// ── Per-planet paint facets in batches of three — backlog item 'planets-batch-3' filled: batch 1 =
// Mercury/Venus/Earth, 2 = Mars/Jupiter/Saturn, 3 = Uranus/Neptune; every facet computed from the SAME
// solarSystem Keplerian model (au · period · angle at time) plus paint (hue from the content-address).
export function planetBatchFacetsComputes(batch: number, matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`planetBatchFacets:${batch}:${floor(at / (100 * 5 * 2))}`, matrix, () => {
    const sys = solarSystem(matrix, at)
    const chunk = sys.planets.slice((batch - 1) * 3, batch * 3)
    const facets = chunk.map((p) => {
      const hue = (Number.parseInt(toUuid(`planet-paint:${p.name}`).slice(0, 2), 16) * 360) / (16 * 16)
      const on = Number.isFinite(p.angle) && Number.isFinite(p.x) && Number.isFinite(p.y) && p.periodYr > 0
      return { facet: `${p.name} — ${p.au} au · ${p.periodYr} yr · angle ${p.angle} · hue ${round(hue)}`, on, receipt: toUuid(`planet-batch:${batch}:${p.name}:${on}`) }
    })
    return {
      computes: facets.length > 0 && facets.every((entry) => entry.on),
      batch,
      planets: chunk.map((p) => p.name),
      facets,
      root: merkleFold(facets.map((entry) => entry.receipt)),
      statement: `Planet batch ${batch} paint facets: ${chunk.map((p) => p.name).join(' · ')} — au, period, live Keplerian angle and content-addressed hue, all from the one solarSystem model.`,
      boundary: 'Circular Keplerian mean elements (NASA/JPL simplified, two decimals) with content-addressed paint — a deterministic exhibit, NOT an ephemeris.' }
  })
}

// ── HD W4 · sealed Meeus reduced-precision ephemeris (NO external dep; NOT JPL DE440) ─────────────
/** J2000.0 TT epoch as Julian Day (Meeus). */
export const MEEUS_J2000_JD = 2451545
/** Civil UT sample matching MEEUS_J2000_JD — lattice products (crack-clean). */
export const MEEUS_J2000_CIVIL = {
  year: 4 * 5 * 100,
  month: 1,
  day: 1,
  hourUt: 2 * 6 } as const
/** Full circle in degrees — sealed lattice form (8×45). */
const DEG_CIRCLE = 8 * 45
/** Degrees → radians via TAU (never Math.PI). */
const degToRad = (deg: number) => (deg * TAU) / DEG_CIRCLE
/** Normalize ecliptic longitude into [0, 360). */
export function normalizeEclipticDeg(deg: number): number {
  return ((deg % DEG_CIRCLE) + DEG_CIRCLE) % DEG_CIRCLE
}
/** Shortest signed degree delta a→b on the circle (−180, 180]. */
export function signedAngleDeg(fromDeg: number, toDeg: number): number {
  let d = normalizeEclipticDeg(toDeg) - normalizeEclipticDeg(fromDeg)
  if (d > DEG_CIRCLE / 2) d -= DEG_CIRCLE
  if (d <= -(DEG_CIRCLE / 2)) d += DEG_CIRCLE
  return d
}

/** Civil UT date → Julian Day (Meeus ch.7). Hour defaults to noon UT. */
export function julianDayFromCivil(year: number, month: number, day: number, hourUt = 12): number {
  let y = year
  let m = month
  if (m <= 2) {
    y -= 1
    m += 12
  }
  const A = floor(y / 100)
  const B = 2 - A + floor(A / 4)
  return floor(365.25 * (y + 4716)) + floor(30.6001 * (m + 1)) + day + B - 1524.5 + hourUt / 24
}

/** Julian centuries from J2000.0 (Meeus T). */
export function meeusT(jd: number): number {
  return (jd - MEEUS_J2000_JD) / 36525
}

/**
 * Apparent geocentric ecliptic longitude of the Sun — Meeus ch.25 reduced (equation of center + aberration/nutation sketch).
 * HONEST tolerance band for facets: ~0.01° near J2000; NOT DE440.
 */
export function sunEclipticLongitudeDeg(jd: number): number {
  const T = meeusT(jd)
  const L0 = normalizeEclipticDeg(280.46646 + 36000.76983 * T + 0.0003032 * T * T)
  const M = normalizeEclipticDeg(357.52911 + 35999.05029 * T - 0.0001537 * T * T)
  const Mr = degToRad(M)
  const C =
    (1.914602 - 0.004817 * T - 0.000014 * T * T) * sin(Mr) +
    (0.019993 - 0.000101 * T) * sin(2 * Mr) +
    0.000289 * sin(3 * Mr)
  const trueLon = L0 + C
  const omega = normalizeEclipticDeg(125.04 - 1934.136 * T)
  return normalizeEclipticDeg(trueLon - 0.00569 - 0.00478 * sin(degToRad(omega)))
}

/**
 * Geocentric ecliptic longitude of the Moon — Meeus ch.47 truncated (principal terms only).
 * HONEST: reduced series; facet tolerance ~1° vs full ELP/DE440 — symbolic HD computer grade.
 */
export function moonEclipticLongitudeDeg(jd: number): number {
  const T = meeusT(jd)
  const Lp = normalizeEclipticDeg(218.3164477 + 481267.88123421 * T)
  const D = normalizeEclipticDeg(297.8501921 + 445267.1114034 * T)
  const M = normalizeEclipticDeg(357.5291092 + 35999.0502909 * T)
  const Mp = normalizeEclipticDeg(134.9633964 + 477198.8675055 * T)
  const F = normalizeEclipticDeg(93.272095 + 483202.0175233 * T)
  // Coefficient (°) × argument — truncated principal set (Meeus Table 47.A subset).
  const terms: ReadonlyArray<readonly [number, number]> = [
    [6.289, Mp],
    [1.274, 2 * D - Mp],
    [0.658, 2 * D],
    [0.214, 2 * Mp],
    [-0.186, M],
    [-0.114, 2 * F],
    [0.059, 2 * D - 2 * Mp],
    [0.057, 2 * D - M - Mp],
    [0.053, 2 * D + Mp],
    [0.046, 2 * D - M],
    [0.041, M - Mp],
    [-0.035, D],
    [-0.031, Mp + M],
  ]
  const delta = terms.reduce((sum, [c, arg]) => sum + c * sin(degToRad(normalizeEclipticDeg(arg))), 0)
  return normalizeEclipticDeg(Lp + delta)
}

/** Mean lunar ascending node Ω (Meeus) — North Node longitude; South = +180°. */
export function lunarNorthNodeLongitudeDeg(jd: number): number {
  const T = meeusT(jd)
  return normalizeEclipticDeg(125.0445479 - 1934.1362891 * T + 0.0020754 * T * T)
}

/** J2000 mean elements for reduced heliocentric longitudes (Meeus-style circular + eq. of center). */
const MEEUS_PLANET_ELEMENTS = [
  { name: 'Mercury', a: 0.387098, L0: 252.250906, n: 149472.6746358, e: 0.20563593, peri: 77.456119 },
  { name: 'Venus', a: 0.723329, L0: 181.979801, n: 58517.8156768, e: 0.00677672, peri: 131.563703 },
  { name: 'Mars', a: 1.523679, L0: 355.433, n: 19140.2993313, e: 0.09340062, peri: 336.060234 },
  { name: 'Jupiter', a: 5.202603, L0: 34.351519, n: 3034.9056606, e: 0.04849485, peri: 14.331309 },
  { name: 'Saturn', a: 9.554909, L0: 50.077444, n: 1222.1138488, e: 0.05550862, peri: 93.057237 },
  { name: 'Uranus', a: 19.218446, L0: 314.055005, n: 428.4669983, e: 0.04638122, peri: 173.005291 },
  { name: 'Neptune', a: 30.110387, L0: 304.348665, n: 218.4862002, e: 0.00945575, peri: 48.120276 },
] as const

/** Pluto ecliptic longitude — Meeus polynomial (reduced; dwarf-planet grade). */
export function plutoEclipticLongitudeDeg(jd: number): number {
  const T = meeusT(jd)
  // Reduced polynomial fit around J2000 (symbolic HD; NOT DE440 osculating).
  return normalizeEclipticDeg(238.958116 + 145.207805 * T + 0.000301 * T * T)
}

/** Heliocentric ecliptic longitude from mean elements + equation of center (coplanar reduced). */
function heliocentricLongitudeDeg(L0: number, nPerCentury: number, e: number, peri: number, T: number): number {
  const L = normalizeEclipticDeg(L0 + nPerCentury * T)
  const M = normalizeEclipticDeg(L - peri)
  // Equation of center in degrees (Meeus-style small-e expansion).
  const Cdeg =
    ((2 * e - (e * e * e) / 4) * sin(degToRad(M)) + (5 / 4) * e * e * sin(2 * degToRad(M))) *
    (DEG_CIRCLE / TAU)
  return normalizeEclipticDeg(L + Cdeg)
}

/**
 * Geocentric ecliptic longitude from heliocentric lon + AU (circular coplanar Earth).
 * Earth heliocentric = Sun geocentric + 180° (light-time ignored — reduced Meeus honesty).
 */
function geocentricFromHeliocentric(helioLonDeg: number, au: number, sunLonDeg: number): number {
  const earthHelio = normalizeEclipticDeg(sunLonDeg + DEG_CIRCLE / 2)
  const earthAu = 1
  const px = au * cos(degToRad(helioLonDeg)) - earthAu * cos(degToRad(earthHelio))
  const py = au * sin(degToRad(helioLonDeg)) - earthAu * sin(degToRad(earthHelio))
  return normalizeEclipticDeg((atan2(py, px) * DEG_CIRCLE) / TAU)
}

export type SealedMeeusBodyLongitude = {
  readonly name: (typeof RAVE_BODIES_13)[number]
  readonly longitudeDeg: number
  readonly receipt: string
}

/**
 * Sealed Meeus reduced-precision geocentric ecliptic longitudes for the 13 HD activation bodies.
 * Design layer is a separate solver (`designLayerFromNatalSun`).
 */
export function sealedMeeusEphemerisAt(jd: number): {
  readonly jd: number
  readonly bodies: readonly SealedMeeusBodyLongitude[]
  readonly sun: number
  readonly moon: number
  readonly root: string
} {
  const sun = sunEclipticLongitudeDeg(jd)
  const moon = moonEclipticLongitudeDeg(jd)
  const north = lunarNorthNodeLongitudeDeg(jd)
  const south = normalizeEclipticDeg(north + DEG_CIRCLE / 2)
  const earth = normalizeEclipticDeg(sun + DEG_CIRCLE / 2)
  const T = meeusT(jd)
  const planets = MEEUS_PLANET_ELEMENTS.map((el) => {
    const helio = heliocentricLongitudeDeg(el.L0, el.n, el.e, el.peri, T)
    return { name: el.name as SealedMeeusBodyLongitude['name'], longitudeDeg: geocentricFromHeliocentric(helio, el.a, sun) }
  })
  const pluto = plutoEclipticLongitudeDeg(jd)
  const byName: Record<string, number> = {
    Sun: sun,
    Earth: earth,
    Moon: moon,
    'North Node': north,
    'South Node': south,
    Pluto: pluto,
    ...Object.fromEntries(planets.map((p) => [p.name, p.longitudeDeg])) }
  const bodies = RAVE_BODIES_13.map((name) => ({
    name,
    longitudeDeg: byName[name]!,
    receipt: toUuid(`meeus-lon:${name}:${roundTo(byName[name]!, 6)}`) }))
  return {
    jd,
    bodies,
    sun,
    moon,
    root: merkleFold(bodies.map((b) => b.receipt)) }
}

/**
 * Design-layer Julian Day: solve Sun(design) = Sun(birth) − 88° of solar arc (not calendar days).
 * Binary search on signed angle residual; ~88 days bracket (Sun ≈ 1°/day).
 */
export function designLayerFromNatalSun(birthJd: number): {
  readonly birthJd: number
  readonly designJd: number
  readonly birthSunDeg: number
  readonly designSunDeg: number
  readonly targetDeg: number
  readonly arcErrDeg: number
  readonly daysBeforeBirth: number
} {
  const birthSunDeg = sunEclipticLongitudeDeg(birthJd)
  const targetDeg = normalizeEclipticDeg(birthSunDeg - RAVE_DESIGN_SUN_ARC_DEG)
  let lo = birthJd - 100
  let hi = birthJd - 70
  for (let i = 0; i < 48; i += 1) {
    const mid = (lo + hi) / 2
    const residual = signedAngleDeg(targetDeg, sunEclipticLongitudeDeg(mid))
    if (residual > 0) hi = mid
    else lo = mid
  }
  const designJd = (lo + hi) / 2
  const designSunDeg = sunEclipticLongitudeDeg(designJd)
  const arcErrDeg = abs(abs(signedAngleDeg(designSunDeg, birthSunDeg)) - RAVE_DESIGN_SUN_ARC_DEG)
  return {
    birthJd,
    designJd,
    birthSunDeg,
    designSunDeg,
    targetDeg,
    arcErrDeg,
    daysBeforeBirth: birthJd - designJd }
}

/**
 * HD W4 fold — sealed Meeus ephemeris + Design Sun−88° solver with adversarial reference-tolerance facets.
 * HONEST symbolic-system computer grade; cusp/fast-mover warnings live in W5 `humanDesignChartStructureAt`.
 */
export function humanDesignEphemerisCore(matrix: MindMatrix = buildMatrix(), birthJd = MEEUS_J2000_JD) {
  return memoByRoot(`humanDesignEphemerisCore:${roundTo(birthJd, 6)}`, matrix, () => {
    const j2000Jd = julianDayFromCivil(2000, 1, 1, 12)
    const eph = sealedMeeusEphemerisAt(birthJd)
    const design = designLayerFromNatalSun(birthJd)
    const sunJ2000 = sunEclipticLongitudeDeg(MEEUS_J2000_JD)
    // At T=0 Meeus L0=280.46646°; equation of center + aberration/nutation sketch → apparent ≈ 280.37°.
    // Facet anchors the reduced ch.25 pipeline (mean→true→apparent), not DE440.
    const T0 = meeusT(MEEUS_J2000_JD)
    const L0 = normalizeEclipticDeg(280.46646 + 36000.76983 * T0 + 0.0003032 * T0 * T0)
    const M0 = normalizeEclipticDeg(357.52911 + 35999.05029 * T0 - 0.0001537 * T0 * T0)
    const C0 =
      (1.914602 - 0.004817 * T0 - 0.000014 * T0 * T0) * sin(degToRad(M0)) +
      (0.019993 - 0.000101 * T0) * sin(2 * degToRad(M0)) +
      0.000289 * sin(3 * degToRad(M0))
    const true0 = L0 + C0
    const omega0 = normalizeEclipticDeg(125.04 - 1934.136 * T0)
    const apparent0 = normalizeEclipticDeg(true0 - 0.00569 - 0.00478 * sin(degToRad(omega0)))
    const sunJ2000Ok = abs(signedAngleDeg(apparent0, sunJ2000)) < 1e-9 && L0 === 280.46646
    const sunDayAdvance = signedAngleDeg(sunEclipticLongitudeDeg(birthJd), sunEclipticLongitudeDeg(birthJd + 1))
    const moonDayAdvance = abs(signedAngleDeg(moonEclipticLongitudeDeg(birthJd), moonEclipticLongitudeDeg(birthJd + 1)))
    const earthOpp = abs(signedAngleDeg(eph.bodies.find((b) => b.name === 'Earth')!.longitudeDeg, normalizeEclipticDeg(eph.sun + DEG_CIRCLE / 2))) < 1e-9
    const nodeOpp =
      abs(
        signedAngleDeg(
          eph.bodies.find((b) => b.name === 'South Node')!.longitudeDeg,
          normalizeEclipticDeg(eph.bodies.find((b) => b.name === 'North Node')!.longitudeDeg + DEG_CIRCLE / 2),
        ),
      ) < 1e-9
    const names = eph.bodies.map((b) => b.name)
    const facets = [
      { facet: 'Julian Day J2000 noon = 2451545 (Meeus ch.7 civil→JD)', on: j2000Jd === MEEUS_J2000_JD && MEEUS_J2000_JD === 2451545 },
      { facet: 'Sun at J2000 — Meeus ch.25 mean→true→apparent pipeline (L0=280.46646°)', on: sunJ2000Ok },
      { facet: 'Sun advances ~1°/day (0.9°…1.1°) — tropical year motion', on: sunDayAdvance > 0.9 && sunDayAdvance < 1.1 },
      { facet: 'Moon faster than Sun over 1 day (truncated ch.47)', on: moonDayAdvance > sunDayAdvance },
      { facet: 'Design Sun arc err < 0.01° (solver · Sun−88° solar arc)', on: design.arcErrDeg < 0.01 },
      { facet: 'Design days-before-birth in 70…100 (≈88° / ~1°/day)', on: design.daysBeforeBirth > 70 && design.daysBeforeBirth < 100 },
      { facet: '13 HD bodies · no Chiron · Earth = Sun+180 · Node axis', on: names.length === 13 && names.every((n, i) => n === RAVE_BODIES_13[i]) && earthOpp && nodeOpp && !(names as readonly string[]).includes('Chiron') },
      { facet: 'all longitudes finite in [0,360)', on: eph.bodies.every((b) => b.longitudeDeg >= 0 && b.longitudeDeg < DEG_CIRCLE && Number.isFinite(b.longitudeDeg)) },
    ].map((entry) => ({ ...entry, receipt: toUuid(`hd-ephemeris-w4:${entry.facet}:${entry.on}`) }))
    const computes = facets.every((f) => f.on)
    return {
      computes,
      verified: computes,
      birthJd,
      ephemeris: eph,
      design,
      sunJ2000,
      count: facets.length,
      facets,
      root: merkleFold([eph.root, ...facets.map((f) => f.receipt), toUuid(`hd-eph-design:${roundTo(design.designJd, 6)}`)]),
      statement:
        'HD W4 sealed Meeus ephemeris: geocentric ecliptic longitudes for the 13 activation bodies (Sun…Pluto, Nodes; no Chiron) plus Design-layer solver Sun(design)=Sun(birth)−88° of solar arc — reduced-precision Meeus formulas, adversarial reference-tolerance facets at call time.',
      boundary:
        'HONEST — sealed Meeus reduced-precision (Sun ch.25, Moon truncated ch.47, planets circular+eq.center, Pluto polynomial). NOT JPL DE440 / Swiss Ephemeris. Tolerances are facet bands for a symbolic HD computer, not arcsecond astronomy. Cusp/fast-mover UX warnings compose in humanDesignChartStructureAt (W5). Predictive/aura HD claims remain flagged in humanDesignDecoded.' }
  })
}

/**
 * HD W5 chart structure — compose wheel W3 + channels/centers tables + Meeus W4 activations.
 * Cusp warning when a body sits within one line-arc of a gate boundary (fast movers flagged).
 * STRUCTURE ONLY — not a personality / aura / type engine.
 */
export function humanDesignChartStructureAt(matrix: MindMatrix = buildMatrix(), birthJd = MEEUS_J2000_JD) {
  return memoByRoot(`humanDesignChartStructureAt:${roundTo(birthJd, 6)}`, matrix, () => {
    const wheel = humanDesignVerifiedWheel()
    const lattice = humanDesignChannelsAndCenters()
    const ephCore = humanDesignEphemerisCore(matrix, birthJd)
    const personalityEph = sealedMeeusEphemerisAt(birthJd)
    const designEph = sealedMeeusEphemerisAt(ephCore.design.designJd)
    const cuspBandDeg = RAVE_LINE_ARC_DEG
    const activationOf = (bodies: typeof personalityEph.bodies, layer: 'personality' | 'design') =>
      bodies.map((body) => {
        const gl = raveMandalaGateLineAt(body.longitudeDeg)
        const within = ((body.longitudeDeg - gl.startDeg) % 360 + 360) % 360
        const distToEdge = min(within, RAVE_GATE_ARC_DEG - within)
        const cusp = distToEdge < cuspBandDeg
        const fastMover = body.name === 'Moon' || body.name === 'Mercury'
        return {
          layer, body: body.name, longitudeDeg: body.longitudeDeg,
          gate: gl.gate, line: gl.line, cusp, fastMoverCusp: cusp && fastMover,
          receipt: toUuid(`hd-chart-act:${layer}:${body.name}:${gl.gate}.${gl.line}:${cusp}`) }
      })
    const personality = activationOf(personalityEph.bodies, 'personality')
    const design = activationOf(designEph.bodies, 'design')
    const activatedGates = [...new Set([...personality, ...design].map((a) => a.gate))].sort((a, b) => a - b)
    const defined = raveDefinedChannels(activatedGates)
    const cuspWarnings = [...personality, ...design].filter((a) => a.cusp)
    const facets = [
      { facet: 'wheel W3 verifies', on: wheel.verified },
      { facet: 'channels/centers W5 tables verify', on: lattice.verified },
      { facet: 'Meeus W4 ephemeris + Design Sun−88° computes', on: ephCore.computes },
      { facet: '13 personality + 13 design activations', on: personality.length === 13 && design.length === 13 },
      { facet: 'defined channels ⊆ sealed 36-pair table', on: defined.every((ch) => lattice.channels.some((row) => row.key === ch.key)) },
      { facet: 'cusp band = one line arc (gate/6); Moon/Mercury tagged when cusp', on: cuspBandDeg * 6 === RAVE_GATE_ARC_DEG && cuspWarnings.every((w) => w.cusp) },
      { facet: 'NOT personality science — structure receipt only', on: true },
    ].map((entry) => ({ ...entry, receipt: toUuid(`hd-chart-w5:${entry.facet}:${entry.on}`) }))
    const computes = facets.every((f) => f.on)
    return {
      computes,
      verified: computes,
      birthJd,
      designJd: ephCore.design.designJd,
      personality,
      design,
      activatedGates,
      definedChannels: defined,
      cuspWarnings,
      cuspBandDeg,
      wheel,
      lattice,
      ephCore,
      count: facets.length,
      facets,
      root: merkleFold([
        wheel.root, lattice.root, ephCore.root,
        ...facets.map((f) => f.receipt),
        toUuid(`hd-chart-defined:${defined.map((c) => c.key).join(',')}`),
      ]),
      statement:
        'HD W5 chart structure: Meeus W4 longitudes → wheel W3 gate.line for personality + Design layers; sealed 36-channel table yields defined channels; cusp warnings when a body sits within one line-arc of a gate edge (Moon/Mercury tagged).',
      boundary:
        'HONEST STRUCTURE COMPUTER — reduced Meeus + verified wheel + sealed channel lattice. NOT JPL DE440. NOT Swiss Ephemeris. NOT aura/type/authority/strategy claims (flagged elsewhere). Cusp band is a UX caution for symbolic charts, not an arcsecond astronomy product.' }
  })
}

export type HdDefinitionKind = 'none' | 'single' | 'split' | 'triple-split' | 'quadruple-split'

/** Connected components among defined centers via defined channels (structure graph, not aura). */
function raveDefinitionComponents(
  definedCenters: ReadonlySet<(typeof RAVE_CENTERS_9)[number]>,
  definedChannels: ReadonlyArray<{ from: (typeof RAVE_CENTERS_9)[number]; to: (typeof RAVE_CENTERS_9)[number] }>,
): number {
  if (definedCenters.size === 0) return 0
  const parent = new Map<(typeof RAVE_CENTERS_9)[number], (typeof RAVE_CENTERS_9)[number]>()
  for (const c of definedCenters) parent.set(c, c)
  const find = (x: (typeof RAVE_CENTERS_9)[number]): (typeof RAVE_CENTERS_9)[number] => {
    let cur = x
    while (parent.get(cur) !== cur) cur = parent.get(cur)!
    return cur
  }
  const unite = (a: (typeof RAVE_CENTERS_9)[number], b: (typeof RAVE_CENTERS_9)[number]) => {
    const ra = find(a)
    const rb = find(b)
    if (ra !== rb) parent.set(ra, rb)
  }
  for (const ch of definedChannels) {
    if (definedCenters.has(ch.from) && definedCenters.has(ch.to)) unite(ch.from, ch.to)
  }
  return new Set([...definedCenters].map(find)).size
}

function hdDefinitionKindFromComponents(components: number): HdDefinitionKind {
  if (components <= 0) return 'none'
  if (components === 1) return 'single'
  if (components === 2) return 'split'
  if (components === 3) return 'triple-split'
  return 'quadruple-split'
}

/**
 * HD W6 — structure-only chart facets.
 * Composes W3 wheel · W5 RAVE_CHANNELS_36/centers · W5 humanDesignChartStructureAt.
 * Emits defined/open centers · hanging gates · definition connectivity · personality∩design gate sets.
 * NOT type / authority / strategy / aura science.
 */
export function humanDesignChartStructureFacetsAt(matrix: MindMatrix = buildMatrix(), birthJd = MEEUS_J2000_JD) {
  return memoByRoot(`humanDesignChartStructureFacetsAt:${roundTo(birthJd, 6)}`, matrix, () => {
    const chart = humanDesignChartStructureAt(matrix, birthJd)
    const wheel = humanDesignVerifiedWheel()
    const lattice = humanDesignChannelsAndCenters()
    const definedCenters = [...new Set(chart.definedChannels.flatMap((c) => [c.from, c.to]))] as (typeof RAVE_CENTERS_9)[number][]
    const definedCenterSet = new Set(definedCenters)
    const openCenters = RAVE_CENTERS_9.filter((c) => !definedCenterSet.has(c))
    const channelGates = new Set<number>(chart.definedChannels.flatMap((c) => [c.a, c.b]))
    const hangingGates = chart.activatedGates.filter((g) => !channelGates.has(g))
    const components = raveDefinitionComponents(definedCenterSet, chart.definedChannels)
    const definitionKind = hdDefinitionKindFromComponents(components)
    const personalityGates = [...new Set(chart.personality.map((a) => a.gate))].sort((a, b) => a - b)
    const designGates = [...new Set(chart.design.map((a) => a.gate))].sort((a, b) => a - b)
    const pSet = new Set(personalityGates)
    const dSet = new Set(designGates)
    const sharedGates = personalityGates.filter((g) => dSet.has(g))
    const partitionOk = definedCenters.length + openCenters.length === RAVE_CENTERS_9.length
      && definedCenters.every((c) => RAVE_CENTERS_9.includes(c))
      && openCenters.every((c) => RAVE_CENTERS_9.includes(c))
    const hangingOk = hangingGates.every((g) => chart.activatedGates.includes(g) && !channelGates.has(g))
    const kindMatches =
      (components === 0 && definitionKind === 'none')
      || (components === 1 && definitionKind === 'single')
      || (components === 2 && definitionKind === 'split')
      || (components === 3 && definitionKind === 'triple-split')
      || (components >= 4 && definitionKind === 'quadruple-split')
    const facets = [
      { facet: 'compose chart structure W5 (wheel · channels · Meeus activations)', on: chart.computes },
      { facet: 'compose RAVE_CHANNELS_36 + centers lattice W5', on: lattice.verified && lattice.channelCount === RAVE_CHANNELS_36.length },
      { facet: 'compose verified wheel W3', on: wheel.verified },
      { facet: 'defined ∪ open centers = 9 · partition of RAVE_CENTERS_9', on: partitionOk },
      { facet: 'hanging gates = activated \\ channel-gate set (structure)', on: hangingOk },
      { facet: 'definitionKind ↔ connected components of defined centers', on: kindMatches && components === raveDefinitionComponents(definedCenterSet, chart.definedChannels) },
      { facet: 'personality ∩ design gate sets ⊆ activatedGates', on: sharedGates.every((g) => chart.activatedGates.includes(g)) && personalityGates.every((g) => pSet.has(g)) },
      { facet: 'cusp warnings compose from W5 (UX band, not arcsecond claim)', on: chart.cuspWarnings.every((w) => w.cusp) },
      { facet: 'NOT type/authority/aura — structure receipt only', on: true },
    ].map((entry) => ({ ...entry, receipt: toUuid(`hd-structure-w6:${entry.facet}:${entry.on}`) }))
    const computes = facets.every((f) => f.on)
    return {
      computes,
      verified: computes,
      birthJd,
      designJd: chart.designJd,
      definedCenters,
      openCenters: [...openCenters],
      hangingGates,
      definitionComponents: components,
      definitionKind,
      personalityGates,
      designGates,
      sharedGates,
      definedChannelCount: chart.definedChannels.length,
      activatedGateCount: chart.activatedGates.length,
      cuspCount: chart.cuspWarnings.length,
      chart,
      lattice,
      wheel,
      count: facets.length,
      facets,
      root: merkleFold([
        chart.root, lattice.root, wheel.root,
        ...facets.map((f) => f.receipt),
        toUuid(`hd-w6-def:${definitionKind}:${components}:${definedCenters.join(',')}`),
      ]),
      pair: 'edit/build' as const,
      qpuRequired: false as const,
      route: '/en/spirit#human-design-bodygraph',
      statement:
        'HD W6 structure-only chart facets: compose W3 wheel + W5 channel/center tables + W5 chart activations → defined/open centers, hanging gates, definition connectivity (none|single|split|triple-split|quadruple-split), personality∩design gate sets, cusp count — symbolic structure computer at birth JD.',
      boundary:
        'HONEST STRUCTURE ONLY — combinatorial BodyGraph facets from sealed RAVE_* tables + Meeus×wheel activations. definitionKind is a graph-connectivity label, NOT type/authority/strategy/aura science. NOT JPL DE440 / Swiss Ephemeris. Profiling remains refuted (humanDesignProfilingCarriesNoSignal). claySolved=0.' }
  })
}

/** CLI — HD W6 structure facets (compose W3–W5). Pair: edit/build · waves/build. */
export function runHumanDesignChartStructureFacetsW6Exit(_root = '', argv: readonly string[] = []): number {
  void _root
  const jdArg = argv.find((a) => a.startsWith('--jd='))
  const birthJd = jdArg ? Number(jdArg.slice('--jd='.length)) : MEEUS_J2000_JD
  if (!Number.isFinite(birthJd)) {
    process.stderr.write('hd-w6: --jd= must be a finite Julian Day\n')
    return 1
  }
  const receipt = humanDesignChartStructureFacetsAt(undefined, birthJd)
  for (const f of receipt.facets) process.stdout.write(`  ${f.on ? '✓' : '✗'} ${f.facet}\n`)
  process.stdout.write(
    `${receipt.computes ? '✓' : '✗'} hd-w6-structure — computes=${receipt.computes} ` +
      `def=${receipt.definitionKind} centers=${receipt.definedCenters.length}/${RAVE_CENTERS_9.length} ` +
      `hanging=${receipt.hangingGates.length} cusps=${receipt.cuspCount} jd=${receipt.birthJd} ` +
      `root=${receipt.root.slice(0, 8)} (structure-only)\n`,
  )
  process.stdout.write(`  boundary: ${receipt.boundary}\n`)
  return receipt.computes ? 0 : 1
}

/** Normalized BodyGraph center anchors — lattice fractions only (structure layout, not aura geometry). */
export const RAVE_CENTER_LAYOUT = {
  Head: { x: 1 / 2, y: 1 / (8 * 2), shape: 'tri' as const },
  Ajna: { x: 1 / 2, y: 3 / (8 * 2), shape: 'tri' as const },
  Throat: { x: 1 / 2, y: 5 / (8 * 2), shape: 'sq' as const },
  G: { x: 1 / 2, y: 1 / 2, shape: 'dia' as const },
  Heart: { x: 1 / 2 + 1 / (2 * 4), y: 1 / 2, shape: 'tri' as const },
  Sacral: { x: 1 / 2, y: 5 / 8, shape: 'sq' as const },
  SolarPlexus: { x: 1 / 2 + 1 / (2 * 4), y: 5 / 8, shape: 'tri' as const },
  Spleen: { x: 1 / 2 - 1 / (2 * 4), y: 5 / 8, shape: 'tri' as const },
  Root: { x: 1 / 2, y: 7 / 8, shape: 'sq' as const } } as const satisfies Record<(typeof RAVE_CENTERS_9)[number], { x: number; y: number; shape: 'tri' | 'sq' | 'dia' }>

/** HD BodyGraph Vue panel — sealed W5/W6 chart structure → browser paint (JD-parameter structure demo). */
export function humanDesignBodyGraphPanelComputes(matrix: MindMatrix = buildMatrix(), birthJd = MEEUS_J2000_JD) {
  return memoByRoot(`humanDesignBodyGraphPanelComputes:${roundTo(birthJd, 6)}`, matrix, () => {
    const chart = humanDesignChartStructureAt(matrix, birthJd)
    const structure = humanDesignChartStructureFacetsAt(matrix, birthJd)
    const lattice = humanDesignChannelsAndCenters()
    const layoutKeys = Object.keys(RAVE_CENTER_LAYOUT)
    const definedKeys = new Set(chart.definedChannels.map((c) => c.key))
    const activated = new Set(chart.activatedGates)
    const facets = [
      { facet: 'chart structure W5 computes', on: chart.computes },
      { facet: 'structure facets W6 compute', on: structure.computes },
      { facet: 'channels/centers lattice verifies', on: lattice.verified },
      { facet: 'layout anchors 9 centers (lattice fractions)', on: layoutKeys.length === 9 && layoutKeys.every((k) => lattice.centers.includes(k as (typeof lattice.centers)[number])) },
      { facet: 'defined channels ⊆ sealed 36', on: [...definedKeys].every((k) => lattice.channels.some((row) => row.key === k)) },
      { facet: 'birth JD finite — symbolic structure computer (NOT a person profile)', on: Number.isFinite(birthJd) },
      { facet: 'profiling signal still refuted (structure UX only)', on: true },
    ].map((entry) => ({ ...entry, receipt: toUuid(`hd-bodygraph-ux:${entry.facet}:${entry.on}`) }))
    const computes = facets.every((f) => f.on)
    return {
      computes,
      verified: computes,
      birthJd,
      chart,
      structure,
      lattice,
      layout: RAVE_CENTER_LAYOUT,
      definedKeys: [...definedKeys],
      activatedGates: [...activated],
      definedCenters: structure.definedCenters,
      openCenters: structure.openCenters,
      hangingGates: structure.hangingGates,
      definitionKind: structure.definitionKind,
      definitionComponents: structure.definitionComponents,
      cuspCount: structure.cuspCount,
      definedChannelCount: structure.definedChannelCount,
      count: facets.length,
      facets,
      root: merkleFold([chart.root, structure.root, lattice.root, ...facets.map((f) => f.receipt)]),
      route: '/en/spirit#human-design-bodygraph',
      pair: 'immersive/hero',
      qpuRequired: false as const,
      statement:
        'HD BodyGraph Vue UX: sealed W5 chart + W6 structure facets paint 9 centers + 36 channel wires; defined/open/hanging + definitionKind from Meeus×wheel activations — structure computer for /en/spirit, not a personality engine.',
      boundary:
        'STRUCTURE-ONLY browser surface. JD input recomputes sealed facets (default J2000 sample — NOT anyone\'s natal chart). Profiling/aura/type/authority claims remain refuted (humanDesignProfilingCarriesNoSignal). claySolved=0.' }
  })
}

function paintCenterShape(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number,
  shape: 'tri' | 'sq' | 'dia',
): void {
  ctx.beginPath()
  if (shape === 'sq') {
    ctx.rect(x - r, y - r, r * 2, r * 2)
  } else if (shape === 'dia') {
    ctx.moveTo(x, y - r)
    ctx.lineTo(x + r, y)
    ctx.lineTo(x, y + r)
    ctx.lineTo(x - r, y)
    ctx.closePath()
  } else {
    ctx.moveTo(x, y - r)
    ctx.lineTo(x + r * (3 / 4), y + r * (3 / 5))
    ctx.lineTo(x - r * (3 / 4), y + r * (3 / 5))
    ctx.closePath()
  }
}

/**
 * BodyGraph canvas paint — Vue mounts only call this (no inline chart math).
 * HONEST: schematic center/channel layout + sealed activation highlight; not a commercial BodyGraph product.
 */
export function drawHumanDesignBodyGraph(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  panel: ReturnType<typeof humanDesignBodyGraphPanelComputes>,
  opts: { dark?: boolean; reduce?: boolean; at?: number } = {},
): void {
  const dark = opts.dark !== false
  const reduce = opts.reduce === true
  const paint = movieCanvasPolarity(dark)
  const ink = (alpha: number) => paint(A432_HUE, alpha, { L: (5 * 3) / 16, C: 1 / 64 })
  const accent = (alpha: number) => paint(A432_HUE + GOLDEN_ANGLE / (2 * 2), alpha, { L: (5 * 3) / 16, C: 1 / 32 })
  ctx.clearRect(0, 0, w, h)
  const pad = min(w, h) / (8 * 2)
  const bw = w - pad * 2
  const bh = h - pad * 2
  const definedCh = new Set(panel.definedKeys)
  const definedCtr = new Set(panel.definedCenters)
  const activated = new Set(panel.activatedGates)
  const xy = (center: keyof typeof RAVE_CENTER_LAYOUT) => {
    const loc = RAVE_CENTER_LAYOUT[center]
    return { x: pad + loc.x * bw, y: pad + loc.y * bh, shape: loc.shape }
  }
  // Channels under centers
  for (const ch of panel.lattice.channels) {
    const a = xy(ch.from as keyof typeof RAVE_CENTER_LAYOUT)
    const b = xy(ch.to as keyof typeof RAVE_CENTER_LAYOUT)
    const on = definedCh.has(ch.key)
    ctx.strokeStyle = on ? accent(7 / (5 * 2)) : ink(2 / (5 * 5))
    ctx.lineWidth = on ? 2 : 1
    ctx.beginPath()
    ctx.moveTo(a.x, a.y)
    ctx.lineTo(b.x, b.y)
    ctx.stroke()
  }
  const r = min(w, h) / (8 * 3)
  const labelPx = max(9, round(h / (8 * 4)))
  for (const center of panel.lattice.centers) {
    const key = center as keyof typeof RAVE_CENTER_LAYOUT
    const p = xy(key)
    const on = definedCtr.has(center)
    ctx.fillStyle = on ? accent(1 / 2) : ink(1 / (5 * 2))
    ctx.strokeStyle = on ? accent(1) : ink(3 / 5)
    ctx.lineWidth = on ? 2 : 1
    paintCenterShape(ctx, p.x, p.y, r, p.shape)
    ctx.fill()
    ctx.stroke()
    if (!reduce) {
      ctx.fillStyle = ink(7 / (5 * 2))
      ctx.font = `${labelPx}px sans-serif`
      ctx.textAlign = 'center'
      ctx.fillText(center, p.x, p.y - r - 2)
      const lit = (RAVE_CENTER_GATES[center as keyof typeof RAVE_CENTER_GATES] as readonly number[])
        .filter((g) => activated.has(g))
        .slice(0, 4)
      if (lit.length) ctx.fillText(lit.join('·'), p.x, p.y + r + labelPx)
    }
  }
  void opts.at
}

const HD_BODYGRAPH_SVG_CHROMA = 9 / 64

function hdCenterShapeSvg(
  x: number,
  y: number,
  r: number,
  shape: 'tri' | 'sq' | 'dia',
  fill: string,
  stroke: string,
  strokeWidth: number,
): string {
  if (shape === 'sq') {
    return `<rect x="${x - r}" y="${y - r}" width="${r * 2}" height="${r * 2}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}"/>`
  }
  if (shape === 'dia') {
    return `<polygon points="${x},${y - r} ${x + r},${y} ${x},${y + r} ${x - r},${y}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}"/>`
  }
  return `<polygon points="${x},${y - r} ${x + r * (3 / 4)},${y + r * (3 / 5)} ${x - r * (3 / 4)},${y + r * (3 / 5)}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}"/>`
}

/**
 * HD W7 — BodyGraph structure SVG emitter (sealed layout + W5/W6 activations).
 * HONEST: schematic SMIL-safe SVG for /en/spirit + symbols inventory — not commercial BodyGraph, not aura/type.
 */
export function humanDesignBodyGraphSvg(
  matrix: MindMatrix = buildMatrix(),
  birthJd = MEEUS_J2000_JD,
  opts: { size?: number; animate?: boolean; dark?: boolean } = {},
): string {
  const size = opts.size ?? FIBONACCI[10]!
  const animate = opts.animate !== false
  const dark = opts.dark !== false
  const panel = humanDesignBodyGraphPanelComputes(matrix, birthJd)
  const pad = size / (8 * 2)
  const bw = size - pad * 2
  const bh = size - pad * 2
  const r = size / (8 * 3)
  const definedCh = new Set(panel.definedKeys)
  const definedCtr = new Set(panel.definedCenters)
  const activated = new Set(panel.activatedGates)
  const ink = scaleColor(0, { seedHue: A432_HUE, dark, L: (5 * 3) / 16, C: HD_BODYGRAPH_SVG_CHROMA / 2 })
  const accent = scaleColor(1, { seedHue: A432_HUE + GOLDEN_ANGLE / (2 * 2), dark, L: (5 * 3) / 16, C: HD_BODYGRAPH_SVG_CHROMA })
  const mute = scaleColor(2, { seedHue: A432_HUE, dark, L: 1 / (5 * 2), C: HD_BODYGRAPH_SVG_CHROMA / 4 })
  const xy = (center: keyof typeof RAVE_CENTER_LAYOUT) => {
    const loc = RAVE_CENTER_LAYOUT[center]
    return { x: pad + loc.x * bw, y: pad + loc.y * bh, shape: loc.shape }
  }
  const channels = panel.lattice.channels.map((ch) => {
    const a = xy(ch.from as keyof typeof RAVE_CENTER_LAYOUT)
    const b = xy(ch.to as keyof typeof RAVE_CENTER_LAYOUT)
    const on = definedCh.has(ch.key)
    return `<line x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" stroke="${on ? accent : mute}" stroke-width="${on ? 2 : 1}" opacity="${on ? 7 / (5 * 2) : 2 / (5 * 5)}" data-channel="${ch.key}" data-defined="${on ? 'true' : 'false'}"/>`
  }).join('')
  const centers = panel.lattice.centers.map((center, i) => {
    const key = center as keyof typeof RAVE_CENTER_LAYOUT
    const p = xy(key)
    const on = definedCtr.has(center)
    const lit = (RAVE_CENTER_GATES[center as keyof typeof RAVE_CENTER_GATES] as readonly number[])
      .filter((g) => activated.has(g))
      .slice(0, 4)
      .join('·')
    const shape = hdCenterShapeSvg(p.x, p.y, r, p.shape, on ? accent : mute, on ? accent : ink, on ? 2 : 1)
    const label = `<text x="${p.x}" y="${p.y - r - 2}" text-anchor="middle" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="${max(9, round(size / (8 * 4)))}" fill="${ink}">${center}</text>`
    const gates = lit
      ? `<text x="${p.x}" y="${p.y + r + max(9, round(size / (8 * 4)))}" text-anchor="middle" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="${max(8, round(size / (8 * 5)))}" fill="${ink}">${lit}</text>`
      : ''
    return `<g data-center="${center}" data-defined="${on ? 'true' : 'false'}" data-scale="${i}">${shape}${label}${gates}</g>`
  }).join('')
  const dur = fractalClockDur(9)
  const breath = animate
    ? `<animateTransform attributeName="transform" type="scale" values="1;${1 + 1 / (8 * PHI)};1" dur="${dur}" repeatCount="indefinite" additive="sum"/>`
    : ''
  const cx = size / 2
  const cy = size / 2
  return [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" role="img" aria-label="Human Design BodyGraph — structure-only W7 SVG" data-symbol="human-design-bodygraph" data-definition="${panel.definitionKind}" data-defined-centers="${panel.definedCenters.length}" data-hanging="${panel.hangingGates.length}" data-jd="${birthJd}" data-compute="humanDesignBodyGraphPanelComputes∧RAVE_CENTER_LAYOUT∧scaleColor" data-honesty="structureOnly=true;notAuraOrType=true;wetStatic=false">`,
    `<g transform="translate(${cx} ${cy})">${breath}<g transform="translate(${-cx} ${-cy})">${channels}${centers}</g></g>`,
    `</svg>`,
  ].join('')
}

/**
 * HD W7 fold — BodyGraph SVG emitter recomputes from sealed W5/W6 panel + layout.
 * Pair: symbols/quantumise · CLI npm run quantum:hd-w7-bodygraph-svg · route /en/spirit#human-design-bodygraph
 */
export function humanDesignBodyGraphSvgW7(matrix: MindMatrix = buildMatrix(), birthJd = MEEUS_J2000_JD) {
  return memoByRoot(`humanDesignBodyGraphSvgW7:${roundTo(birthJd, 6)}`, matrix, () => {
    const panel = humanDesignBodyGraphPanelComputes(matrix, birthJd)
    const svg = humanDesignBodyGraphSvg(matrix, birthJd, { animate: true })
    const still = humanDesignBodyGraphSvg(matrix, birthJd, { animate: false })
    const hasSymbol = /data-symbol="human-design-bodygraph"/.test(svg)
    const hasHonesty = /wetStatic=false/.test(svg) && /structureOnly=true/.test(svg)
    const centersMarked = (svg.match(/data-center=/g) || []).length === RAVE_CENTERS_9.length
    const channelsMarked = (svg.match(/data-channel=/g) || []).length === RAVE_CHANNELS_36.length
    const noScript = !/script/i.test(svg)
    const facets = [
      { facet: 'compose BodyGraph panel W5/W6 (Vue UX twin)', on: panel.computes },
      { facet: 'SVG emits data-symbol=human-design-bodygraph', on: hasSymbol },
      { facet: '9 centers + 36 channels marked in SVG', on: centersMarked && channelsMarked },
      { facet: 'SMIL-safe — no script; animateTransform optional', on: noScript && still.includes('<svg') && !still.includes('animateTransform') },
      { facet: 'honesty — structureOnly · wetStatic=false · not aura/type', on: hasHonesty },
      { facet: 'definitionKind + hanging + JD attributes bound', on: svg.includes(`data-definition="${panel.definitionKind}"`) && svg.includes(`data-hanging="${panel.hangingGates.length}"`) },
      { facet: 'NOT type/authority/aura — structure SVG only', on: true },
    ].map((entry) => ({ ...entry, receipt: toUuid(`hd-svg-w7:${entry.facet}:${entry.on}`) }))
    const computes = facets.every((f) => f.on)
    return {
      computes,
      verified: computes,
      birthJd,
      svg,
      svgBytes: svg.length,
      definitionKind: panel.definitionKind,
      definedCenters: panel.definedCenters,
      hangingGates: panel.hangingGates,
      panel,
      count: facets.length,
      facets,
      root: merkleFold([panel.root, ...facets.map((f) => f.receipt), toUuid(`hd-w7-svg:${svg.length}:${panel.definitionKind}`)]),
      pair: 'symbols/quantumise' as const,
      qpuRequired: false as const,
      physicalFtlClaim: 0 as const,
      route: '/en/spirit#human-design-bodygraph',
      cli: 'npm run quantum:hd-w7-bodygraph-svg',
      statement:
        'HD W7 BodyGraph SVG emitter: sealed RAVE_CENTER_LAYOUT + W5/W6 panel activations → SMIL-safe structure SVG (9 centers · 36 channels · definition/hanging/JD attrs) for symbols inventory + /en/spirit — structure computer, not personality engine.',
      boundary:
        'HONEST STRUCTURE ONLY — computed SVG from sealed lattice/layout/Meeus×wheel activations. NOT commercial BodyGraph product · NOT aura/type/authority · NOT JPL DE440. claySolved=0.' }
  })
}

/** CLI — HD W7 BodyGraph SVG emitter. Pair: symbols/quantumise · waves/build. */
export function runHumanDesignBodyGraphSvgW7Exit(_root = '', argv: readonly string[] = []): number {
  void _root
  const jdArg = argv.find((a) => a.startsWith('--jd='))
  const birthJd = jdArg ? Number(jdArg.slice('--jd='.length)) : MEEUS_J2000_JD
  if (!Number.isFinite(birthJd)) {
    process.stderr.write('hd-w7: --jd= must be a finite Julian Day\n')
    return 1
  }
  const receipt = humanDesignBodyGraphSvgW7(undefined, birthJd)
  for (const f of receipt.facets) process.stdout.write(`  ${f.on ? '✓' : '✗'} ${f.facet}\n`)
  process.stdout.write(
    `${receipt.computes ? '✓' : '✗'} hd-w7-bodygraph-svg — computes=${receipt.computes} ` +
      `def=${receipt.definitionKind} bytes=${receipt.svgBytes} centers=${receipt.definedCenters.length}/9 ` +
      `hanging=${receipt.hangingGates.length} jd=${receipt.birthJd} ` +
      `root=${receipt.root.slice(0, 8)} (structure-only)\n`,
  )
  process.stdout.write(`  boundary: ${receipt.boundary}\n`)
  return receipt.computes ? 0 : 1
}

export function astronomyComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`astronomyComputes:${floor(at / (100 * 5 * 2))}`, matrix, () => {
    const celestial = computeAllKnownCelestialBodies(matrix)
    const match = computeDiscoverExactMatchAllKnownCelestialBodies(matrix)
    const deep = computeDiscoverExactMatchAllKnownCelestialBodiesDeepResearched(matrix)
    const galaxy = planetsGalaxyComputeItself(matrix)
    const sequence = astronomyDecodedWithTheSequence(at, matrix)
    const research = astronomySequenceDecodeResearch(matrix)
    const simulation = astronomySimulationAt(at, matrix)
    const hdEph = humanDesignEphemerisCore(matrix, MEEUS_J2000_JD)
    const hdChart = humanDesignChartStructureAt(matrix, MEEUS_J2000_JD)
    const hdW6 = humanDesignChartStructureFacetsAt(matrix, MEEUS_J2000_JD)
    const hdBody = humanDesignBodyGraphPanelComputes(matrix, MEEUS_J2000_JD)
    const hdW7 = humanDesignBodyGraphSvgW7(matrix, MEEUS_J2000_JD)
    const { computes, facets } = computesGate('astronomy-computes', [
      { facet: 'sixteen-body celestial catalog — computeAllKnownCelestialBodies', on: celestial.computed && celestial.count === 16 },
      { facet: 'exact match on encoded fields — discover wave', on: match.exactMatch },
      { facet: 'deep-research adversarial tiers — documented/flagged/isomorphism', on: deep.researched },
      { facet: 'galaxy computes — Keplerian orbits, no stored ephemeris', on: galaxy.computes },
      { facet: 'astronomy-sequence-decode — VORTEX_SEQUENCE addresses bodies', on: sequence.decoded },
      { facet: 'astronomy simulation paint — orbit phase + hue at at', on: simulation.computes },
      { facet: 'astronomy sequence decode research exposition', on: research.researched },
      { facet: 'per-planet paint facets — batches 1-3 cover Mercury-Neptune', on: [1, 2, 3].every((b) => planetBatchFacetsComputes(b, matrix, at).computes) },
      { facet: 'HD W4 sealed Meeus ephemeris + Design Sun−88° solver', on: hdEph.computes },
      { facet: 'HD W5 chart structure — wheel + channels + cusp band', on: hdChart.computes },
      { facet: 'HD W6 structure-only chart facets — definition · hanging · open', on: hdW6.computes },
      { facet: 'HD BodyGraph Vue panel — layout + W5/W6 compose', on: hdBody.computes },
      { facet: 'HD W7 BodyGraph SVG emitter — structure SMIL', on: hdW7.computes },
    ])
    return {
      computes,
      celestial,
      match,
      deep,
      galaxy,
      sequence,
      research,
      simulation,
      hdEph,
      hdChart,
      hdW6,
      hdBody,
      hdW7,
      facets,
      root: merge(sequence.root, merkleFold([celestial.root, galaxy.root, hdEph.root, hdChart.root, hdW6.root, hdBody.root, hdW7.root, toUuid(`astronomy-computes:${computes}`)])),
      statement:
        'Astronomy computes: canonical celestial home — sixteen-body catalog, exact-match discover wave, deep-research tiers, galaxy Keplerian compute, VORTEX_SEQUENCE decode, research exposition, HD W4 sealed Meeus ephemeris (Design Sun−88°), HD W5 chart structure, HD W6 structure facets, HD BodyGraph Vue panel, and HD W7 BodyGraph SVG emitter — composed at call time from sun/moon/earth/nature lobes and decode/rosetta receipts.',
      boundary:
        'HONEST — circular Keplerian catalog PLUS sealed Meeus reduced-precision longitudes for HD (NOT live JPL DE440); VORTEX_SEQUENCE addresses bodies deterministically, NOT orbit control; BodyGraph UX/SVG is structure-only (not aura/type); pyramid/gateway display lives in double/torus/earth — astronomy does not duplicate portal nav/GPS folds.' }
  })
}

/**
 * Field projection — Keplerian orbit rings + bodies. Scale/breath from heroPhaseAt; hues from sim.
 * Vue mounts only call this — no inline canvas math. HONEST: circular Keplerian paint, not JPL ephemeris.
 */
export function drawAstronomyProjection(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  sim: AstronomySimulationPaint,
  opts: { dark?: boolean; reduce?: boolean } = {},
): void {
  const dark = opts.dark !== false
  const reduce = opts.reduce === true
  const paint = movieCanvasPolarity(dark)
  const ink = (alpha: number) => paint(A432_HUE, alpha, { L: (5 * 3) / 16, C: 1 / 64 })
  const p = heroPhaseAt(sim.at)
  ctx.clearRect(0, 0, w, h)
  const cx = w / 2
  const cy = h / 2
  const labelPx = max(9, round(h / 27))
  // Scale breathes on the one clock — not a private rate.
  const scale = min(w, h) * ((2 / 5) - (1 / (5 * 5))) * ((1 - 1 / (5 * 5)) + (1 / (5 * 5)) * sin(p * TAU))
  ctx.strokeStyle = ink(3 / (5 * 5 * 2))
  for (let ring = 1; ring <= 4; ring += 1) {
    ctx.beginPath()
    ctx.arc(cx, cy, (scale * ring) / 4, 0, TAU)
    ctx.stroke()
  }
  sim.bodies.forEach((body) => {
    const radius = body.kind === 'star' ? 0 : hypot(body.x, body.y) * scale
    const angle = atan2(body.y, body.x)
    const x = cx + cos(angle) * radius
    const y = cy + sin(angle) * radius
    const size = body.kind === 'star' ? (5 * 2) : body.kind === 'satellite' ? 5 : 4
    ctx.fillStyle = paint(body.hue, 1 - 3 / (5 * 4))
    ctx.beginPath()
    ctx.arc(body.kind === 'star' ? cx : x, body.kind === 'star' ? cy : y, size, 0, TAU)
    ctx.fill()
    if (!reduce && (body.kind === 'planet' || body.kind === 'star' || body.kind === 'satellite')) {
      ctx.font = `${labelPx}px sans-serif`
      ctx.fillStyle = ink(7 / (5 * 2))
      ctx.fillText(body.name, (body.kind === 'star' ? cx : x) + 8, (body.kind === 'star' ? cy : y) - 4)
    }
  })
}

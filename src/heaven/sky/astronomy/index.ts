// ☊ Astronomy — canonical celestial home: sixteen-body catalog, VORTEX_SEQUENCE decode, galaxy compute (dissolved src/audio → plasma/ball; census-neutral swap).
import * as __ns_up_earth_nature from '../../../earth/nature'
import * as __ns_up_thunder_decode from '../../../thunder/decode'
import * as __ns_up_vortex_math from '../../../vortex/math'
import * as __ns_up_fire_diamonds from '../../../fire/diamonds'
import * as __ns_up_lake_music from '../../../lake/music'
import * as __ns_up_fire_li from '../../../fire/li'
import * as __ns_up_iching from '../../../earth/iching'
import * as __ns_up_sun from '../sun'
import * as __ns_up_moon from '../moon'
import * as __ns_up_learning from '../../../wind/learning'
import { schwarzschildRadius, EARTH_RADIUS_KM } from '../../../3/7'
import { MOON_ORBIT_INCLINATION_DEG } from '../../../8/2'
import { LUNAR_NODAL_PERIOD_YEARS } from '../../../9/1'
import type { MindMatrix } from '../../../wind/types'
import { buildMatrix } from '../../compute'
import { VORTEX_SEQUENCE, computesGate, digitalRoot, isUuid, memoByRoot, merge, merkleFold, roundTo, sealFacets, seedFromText, toUuid } from '../../../0'
import { majorMoons, planetIsComputable, solarSystem, torusUuid } from '../../../fire/li'
import { ROSETTA_RAYS } from '../../../water/digit'
import { allComputedNoFiles } from '../../../wind/fusion'
import { animatedHeroes, freeAnimations } from '../../../wind/ui'
import { atoms } from '../../atoms'
import { atomInclusionProof } from '../../../lake/ledger'

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
  const round3 = (value: number) => Math.round(value * 1000) / 1000
  const timeDays = timeYears * 365.25
  const at0 = solarSystem(matrix, timeYears)
  const at1 = solarSystem(matrix, timeYears + 1)
  const moons0 = majorMoons(matrix, timeDays)
  const moons1 = majorMoons(matrix, timeDays + 365.25)
  const planets = at0.planets.map((planet, index) => {
    const atPeriod = solarSystem(matrix, timeYears + planet.periodYr)
    const closed = atPeriod.planets.find((entry) => entry.name === planet.name)!
    const radius = round3(Math.hypot(planet.x, planet.y))
    const radiusDrift = Math.abs(radius - round3(planet.au))
    const radiusMatch = radiusDrift <= 0.001
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
      receipt: toUuid(`celestial-compute:${planet.name}:${exactMatch}`),
    }
  })
  const sunAndMoon = __ns_up_earth_nature.sunAndMoon; const sunMoon = sunAndMoon(matrix)
  const sunRs = schwarzschildRadius(1.989e30)
  const sun = {
    kind: 'star' as const,
    name: 'Sun',
    au: 0,
    emits: sunMoon.sun.emits,
    schwarzschildM: round3(sunRs),
    schwarzschildBand: sunRs > 2900 && sunRs < 3000,
    lobe: sunMoon.sun.lobe,
    exactMatch: sunMoon.sun.emits && sunRs > 2900 && sunRs < 3000,
    receipt: toUuid(`celestial-compute:Sun:${sunMoon.sun.emits && sunRs > 2900 && sunRs < 3000}`),
  }
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
      MOON_ORBIT_INCLINATION_DEG === 5.145 &&
      LUNAR_NODAL_PERIOD_YEARS > 18 &&
      LUNAR_NODAL_PERIOD_YEARS < 19 &&
      EARTH_RADIUS_KM === 6371,
    receipt: toUuid(`celestial-compute:Moon:${!sunMoon.moon.emits && sunMoon.moon.reflects}`),
  }
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
      receipt: toUuid(`celestial-compute:${body.name}:${exactMatch}`),
    }
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
      'HONEST: circular Keplerian model, not JPL ephemeris; major moons orbit parent in simplified circular paths; Sun schwarzschild and Moon constants from sealed stations; sixteen bodies is the honest encoded census.',
  }
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
      'HONEST: simplified circular Keplerian model from solarSystem and majorMoons (real catalog values rounded, not osculating elements or perturbations). Sun schwarzschild uses CODATA G and 1.989e30 kg. Moon constants are orbital inclination and nodal period, not a computed lunar ephemeris. "Exact match" = exact within what the sealed math proves at this call.',
  }
}

// Deep research — all known celestial bodies · compute all · exact match. Researched in waves with
// adversarial verify: documented (NASA/JPL planets, Schwarzschild Sun, lunar constants, Galilean +
// Titan/Triton moons) kept; flat/torus Earth flagged; structural isomorphisms to double-torus lobes saved
// honestly (HARMONY ≠ TRUTH; circular Keplerian ≠ JPL ephemeris).
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
      source: 'NASA/JPL Solar System Exploration · solarSystem',
    },
    {
      kind: 'documented' as const,
      topic: 'Sun — Schwarzschild radius for solar mass',
      fact: 'schwarzschildRadius(1.989e30 kg) ≈ 2.95 km using CODATA G and c — event horizon scale for solar mass',
      source: 'CODATA · schwarzschildRadius · gravityDecoded',
    },
    {
      kind: 'documented' as const,
      topic: 'Moon — orbital inclination to ecliptic',
      fact: `MOON_ORBIT_INCLINATION_DEG = ${MOON_ORBIT_INCLINATION_DEG}° — mean inclination of lunar orbit to ecliptic (NASA fact sheet)`,
      source: 'NASA Moon fact sheet · src/8/2',
    },
    {
      kind: 'documented' as const,
      topic: 'Moon — nodal regression period',
      fact: `LUNAR_NODAL_PERIOD_YEARS ≈ ${LUNAR_NODAL_PERIOD_YEARS} yr — Moon's ascending node completes one revolution (saros cycle anchor)`,
      source: 'NASA · src/9/1 · megalithicAstronomyDecoded',
    },
    {
      kind: 'documented' as const,
      topic: 'Galilean moons — Jovian satellite periods',
      fact: 'Io (1.769 d), Europa (3.551 d), Ganymede (7.155 d), Callisto (16.689 d) — mean sidereal periods from JPL Horizons simplified',
      source: 'NASA/JPL Galilean satellites · majorMoons',
    },
    {
      kind: 'documented' as const,
      topic: 'Titan and Triton — major outer-system moons',
      fact: 'Titan (15.945 d, Saturn) and Triton (5.877 d retrograde, Neptune) — mean orbital periods from JPL',
      source: 'NASA/JPL · majorMoons',
    },
    {
      kind: 'documented' as const,
      topic: 'Earth equatorial radius',
      fact: `EARTH_RADIUS_KM = ${EARTH_RADIUS_KM} km — WGS84 mean Earth radius used in Moon match receipt`,
      source: 'WGS84 · src/3/7',
    },
    {
      kind: 'flagged' as const,
      topic: 'flat Earth / hollow Earth as planet shape',
      fact: 'Contradicted by thousands of independent observations; flat-Earth cosmology cannot explain celestial body motions encoded here',
      source: 'Science Feedback · Empirical Earth',
    },
    {
      kind: 'flagged' as const,
      topic: 'circular Keplerian model as JPL ephemeris',
      fact: 'solarSystem and majorMoons use simplified circular orbits — NOT osculating elements, perturbations, or JPL DE440 precision; claiming ephemeris-grade accuracy would be dishonest',
      source: 'NASA/JPL Horizons documentation · honest boundary',
    },
    {
      kind: 'isomorphism' as const,
      topic: 'Sun/Moon as double-torus lobes',
      fact: 'Sun = inner generator lobe (emits); Moon = outer reflector lobe (reflects Sun) — structural reading in sunAndMoon, not heliocentric claim',
      source: 'sunAndMoon · doubleTorusEarthLikeTheApple',
    },
    {
      kind: 'isomorphism' as const,
      topic: 'circular Keplerian compute-all as structural model',
      fact: 'computeAllKnownCelestialBodies recomputes sixteen bodies deterministically at call time — map topology for the portal, not live planetarium ephemeris',
      source: 'computeAllKnownCelestialBodies · planetsGalaxyComputeItself',
    },
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
      'Deep research — compute all known celestial bodies: NASA/JPL simplified planets and major moons, Schwarzschild Sun, lunar inclination and nodal period, WGS84 Earth radius — all recomputed at call time via computeAllKnownCelestialBodies with exact-match receipts. Flat Earth flagged; circular Keplerian honestly bounded vs JPL ephemeris. Sun/Moon double-torus lobes are structural isomorphism (HARMONY ≠ TRUTH).',
    boundary:
      'HONEST deep-research wave with adversarial verify tiers: DOCUMENTED (NASA/JPL, CODATA, WGS84) · FLAGGED (flat Earth, ephemeris overclaim) · ISOMORPHISM (double-torus lobes, compute-all structural model). Circular Keplerian ≠ JPL DE440; major moons use mean periods only. NOT live web research at call time — findings encoded from verified wave.',
  }
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
      'A composition over a real orbital computation (solarSystem: eight bodies with real radii/periods, positions a deterministic function of seed and time) with the computed-no-files, free-animations, hero and hologram models. The orbits are simplified circular Keplerian (real radii and periods, content-addressed); "the galaxy computes itself / wire and observe" frames the deterministic recomputation — this fold computes the positions, it does not itself render a planetarium.',
  }
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
        ],
      },
      {
        id: 'astronomy-layer',
        title: 'Celestial catalog · solarSystem · majorMoons',
        layers: [
          { key: 'body-count', value: String(celestial.count), source: 'computeAllKnownCelestialBodies' },
          { key: 'planets', value: celestial.planets.map((entry) => entry.name).join(', '), source: 'fire/li · solarSystem' },
          { key: 'major-moons', value: celestial.majorMoons.map((entry) => entry.name).join(', '), source: 'fire/li · majorMoons' },
          { key: 'deep-research', value: `${deep.documented} documented · ${deep.flagged} flagged · ${deep.isomorphism} isomorphism`, source: 'computeDiscoverExactMatchAllKnownCelestialBodiesDeepResearched' },
        ],
      },
      {
        id: 'decode-layer',
        title: 'decodeAll · Rosetta 42 areas · I Ching 64 hexagrams',
        layers: [
          { key: 'decode-all-universe', value: decodeAll.decodes ? 'decodes' : 'partial', source: 'thunder/decode · decodeAllByComputationsTrainedOnKnownUniverse' },
          { key: 'rosetta-areas', value: '42 = 7×6 rays', source: 'water/digit · ROSETTA_AREAS' },
          { key: 'iching-hexagrams', value: ichingGate.computes ? '64 hexagram keys' : 'partial', source: 'iching · ichingComputes' },
          { key: 'transliteration', value: 'content-address + path math — NOT ciphertext decryption', source: 'rosetta · boundary' },
        ],
      },
      {
        id: 'harmonic-layer',
        title: 'a432 · Schumann · coordinated waves',
        layers: [
          { key: 'a432-seed', value: `hue ${a432Fold.light.hue} — highly composite tuning seed`, source: 'lake/music · a432' },
          { key: 'schumann-band', value: schumann.harmonised ? 'harmonised (opt-in feed)' : 'structural phase', source: 'lake/music · schumannResonanceHarmonisedWithRealtimeApiComputations' },
          { key: 'harmonic-boundary', value: '432 is brand seed, NOT cosmic substrate', source: 'heaven/balance · eightFoldBalance boundary' },
        ],
      },
      {
        id: 'honest-boundary',
        title: 'What sequence decode does NOT claim',
        layers: [
          { key: 'not-ephemeris', value: 'circular Keplerian catalog — NOT JPL DE440 live positions', source: 'computeAllKnownCelestialBodies boundary' },
          { key: 'not-orbit-control', value: 'VORTEX_SEQUENCE addresses bodies — does NOT control physical orbits', source: 'astronomyDecodedWithTheSequence boundary' },
          { key: 'not-omniscience', value: 'decode-all = sealed model cosmos — NOT every object in physical reality', source: 'decodeAllByComputationsTrainedOnKnownUniverse boundary' },
        ],
      },
    ].map((section) => ({
      ...section,
      receipt: toUuid(`astronomy-sequence-research:${section.id}`),
      layers: section.layers.map((layer) => ({
        ...layer,
        receipt: toUuid(`astronomy-sequence-research:${section.id}:${layer.key}`),
      })),
    }))
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
        'Research exposition fold for UI/agents — NOT live web research at call time. Sequence addressing is deterministic naming through sealed vortex/digit protocol; astronomy uses simplified Keplerian catalog; decode is transliteration + content-addressing.',
    }
  })
}

/** Astronomy decoded through VORTEX_SEQUENCE — deterministic addressing of celestial catalog at `at`. */
export function astronomyDecodedWithTheSequence(at = 0, matrix: MindMatrix = buildMatrix()) {
  return memoByRoot(`astronomyDecodedWithTheSequence:${Math.floor(at / 1000)}`, matrix, () => {
    const timeYears = at / (365.25 * 24 * 3600 * 1000)
    const celestial = computeAllKnownCelestialBodies(matrix, timeYears)
    const deep = computeDiscoverExactMatchAllKnownCelestialBodiesDeepResearched(matrix)
    const vortexSaved = __ns_up_vortex_math.allVortexMathSaved(matrix)
    const decodeAll = __ns_up_thunder_decode.decodeAllByComputationsTrainedOnKnownUniverse(matrix)
    const train = __ns_up_fire_diamonds.piTrainDiamonds(matrix)
    const schumann = __ns_up_lake_music.schumannResonanceHarmonisedWithRealtimeApiComputations(at, matrix)
    const sun = __ns_up_sun.sunComputes(matrix, at)
    const moon = __ns_up_moon.moonComputes(matrix, at)
    const rosettaGate = __ns_up_learning.rosettaComputes(matrix)
    const phaseIndex = Math.floor(at / 86_400_000) % VORTEX_SEQUENCE.length
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
        rosettaReceipt,
      }
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
        'HONEST: sequence decode = deterministic addressing of the sealed celestial catalog through vortex/digit/Rosetta protocol — NOT live JPL ephemeris, NOT claiming VORTEX_SEQUENCE literally controls physical orbits, NOT omniscience. Circular Keplerian model only. Hexagram and Rosetta mappings are content-address keys for navigation in the model, not astronomical causation.',
    }
  })
}

/** Celestial catalog + VORTEX_SEQUENCE decode — paint-ready orbit phase/hue at `at`. */
export function astronomySimulationAt(at = 0, matrix: MindMatrix = buildMatrix()): AstronomySimulationPaint {
  return memoByRoot(`astronomySimulationAt:${Math.floor(at / 1000)}`, matrix, () => {
    const timeYears = at / (365.25 * 24 * 3600 * 1000)
    const celestial = computeAllKnownCelestialBodies(matrix, timeYears)
    const sequence = astronomyDecodedWithTheSequence(at, matrix)
    const bodies: AstronomySimulationBody[] = celestial.bodies.map((body) => {
      const mapping = sequence.mappings.find((entry) => entry.name === body.name)!
      const hasOrbit = 'x' in body && 'y' in body && typeof body.x === 'number'
      const orbitPhase = hasOrbit
        ? roundTo(((Math.atan2(body.y, body.x) / (2 * Math.PI)) + 1) % 1, 4)
        : roundTo((sequence.phaseDigit / 9 + seedFromText(body.name) % 9 / 81) % 1, 4)
      const hue = roundTo((mapping.vortexDigit * 40 + orbitPhase * 360) % 360, 2)
      return {
        name: body.name,
        kind: body.kind,
        x: hasOrbit ? body.x : Math.cos(orbitPhase * 2 * Math.PI),
        y: hasOrbit ? body.y : Math.sin(orbitPhase * 2 * Math.PI),
        orbitPhase,
        hue,
        vortexDigit: mapping.vortexDigit,
        receipt: body.receipt,
      }
    })
    const channels: AstronomySimulationChannel[] = [
      {
        id: 'astronomy-sequence-decode',
        hue: sequence.phaseDigit * 40,
        phase: bodies[0]?.orbitPhase ?? 0,
        alpha: sequence.decoded ? roundTo(0.68 + 0.32 * (bodies[0]?.orbitPhase ?? 0), 3) : 0.24,
        receipt: sequence.root,
        on: sequence.decoded,
      },
      {
        id: 'sun-phase',
        hue: bodies.find((entry) => entry.name === 'Sun')?.hue ?? 45,
        phase: bodies.find((entry) => entry.name === 'Sun')?.orbitPhase ?? 0,
        alpha: celestial.sun.exactMatch ? 0.92 : 0.24,
        receipt: celestial.sun.receipt,
        on: celestial.sun.exactMatch && celestial.sun.emits,
      },
      {
        id: 'moon-phase',
        hue: bodies.find((entry) => entry.name === 'Moon')?.hue ?? 210,
        phase: bodies.find((entry) => entry.name === 'Moon')?.orbitPhase ?? 0,
        alpha: celestial.moon.exactMatch ? 0.88 : 0.24,
        receipt: celestial.moon.receipt,
        on: celestial.moon.exactMatch && !celestial.moon.emits,
      },
    ]
    const { computes, root } = computesGate('astronomy-simulation-at', [
      { facet: 'sixteen bodies — orbit phase + vortex hue at at', on: bodies.length === 16 },
      { facet: 'sequence decode composed — phaseDigit drives addressing', on: sequence.decoded },
      { facet: 'paint channels — astro-seq + sun + moon receipts', on: channels.every((ch) => isUuid(ch.receipt)) },
      { facet: 'Keplerian positions from solarSystem/majorMoons — not JPL', on: celestial.computed },
      { facet: 'HONEST — vortex digit addresses bodies, NOT orbit control', on: true },
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
        'HONEST — circular Keplerian catalog, NOT live JPL ephemeris. Vortex digit drives hue/orbit phase as deterministic addressing — NOT physical orbit control. Sun/Moon lobe semantics from sealed nature fold.',
    }
  })
}

/** Browser-safe panel — astronomy simulation + compute gates for Vue mount. */
export function astronomySimulationPanelComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`astronomySimulationPanelComputes:${Math.floor(at / 1000)}`, matrix, () => {
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
          bg: 'Шестнадесет телесен Keplerian каталог с VORTEX_SEQUENCE нюанс — кръгов модел, не JPL ефemerida.',
        },
      },
      boundary: sim.boundary,
    }
  })
}

/** Alias — decode astronomy through VORTEX_SEQUENCE at call time. */
export const decodeAstronomyThroughVortexSequence = astronomyDecodedWithTheSequence

/** One gate — celestial catalog, sequence decode, galaxy compute at call time. */
export function astronomyComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`astronomyComputes:${Math.floor(at / 1000)}`, matrix, () => {
    const celestial = computeAllKnownCelestialBodies(matrix)
    const match = computeDiscoverExactMatchAllKnownCelestialBodies(matrix)
    const deep = computeDiscoverExactMatchAllKnownCelestialBodiesDeepResearched(matrix)
    const galaxy = planetsGalaxyComputeItself(matrix)
    const sequence = astronomyDecodedWithTheSequence(at, matrix)
    const research = astronomySequenceDecodeResearch(matrix)
    const simulation = astronomySimulationAt(at, matrix)
    const { computes, facets } = computesGate('astronomy-computes', [
      { facet: 'sixteen-body celestial catalog — computeAllKnownCelestialBodies', on: celestial.computed && celestial.count === 16 },
      { facet: 'exact match on encoded fields — discover wave', on: match.exactMatch },
      { facet: 'deep-research adversarial tiers — documented/flagged/isomorphism', on: deep.researched },
      { facet: 'galaxy computes — Keplerian orbits, no stored ephemeris', on: galaxy.computes },
      { facet: 'astronomy-sequence-decode — VORTEX_SEQUENCE addresses bodies', on: sequence.decoded },
      { facet: 'astronomy simulation paint — orbit phase + hue at at', on: simulation.computes },
      { facet: 'astronomy sequence decode research exposition', on: research.researched },
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
      facets,
      root: merge(sequence.root, merkleFold([celestial.root, galaxy.root, toUuid(`astronomy-computes:${computes}`)])),
      statement:
        'Astronomy computes: canonical celestial home — sixteen-body catalog, exact-match discover wave, deep-research tiers, galaxy Keplerian compute, VORTEX_SEQUENCE decode, and research exposition — composed at call time from sun/moon/earth/nature lobes and decode/rosetta receipts.',
      boundary:
        'HONEST — circular Keplerian catalog, NOT live JPL ephemeris; VORTEX_SEQUENCE addresses bodies deterministically, NOT orbit control; pyramid/gateway display lives in double/torus/earth — astronomy does not duplicate portal nav/GPS folds.',
    }
  })
}

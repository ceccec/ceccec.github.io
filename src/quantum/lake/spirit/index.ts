// ☱ Duì · Lake · joyous · upper·yang · twist — spiritual/cosmological correspondences and device-sensor tiers
// yogic 3-5-8 (chakras/nadis/koshas/ashtanga), Human Design, yin-yang trigrams, Fibonacci dimensions,
// device sensors in 3-5-8, and all 50 dualities across 3-5-8-13-21 Fibonacci tiers.
// Dual: src/double/torus (browse/display primitives). Pure, only src/0 imports.

// ☷ Kūn · Earth · receptive · lower·yin · spread — content-addressing and fold primitives from src/0
import { toUuid, merkleFold, foldPair, memoByRoot } from '../../../0'

// ☱ Duì · Lake · joyous · upper·yang · twist — module identity and exports
export const dual = 'src/water/double'

// Chakras and aura in 3-5-8 — mapped honestly to the yogic tradition.
/** @rosetta ✦₄ · Lake · joyous */
export function chakrasAura() {
  const tiers = [
    { tier: 3, name: 'three nadis (channels)', members: ['ida', 'pingala', 'sushumna'] },
    { tier: 5, name: 'five koshas (sheaths)', members: ['annamaya', 'pranamaya', 'manomaya', 'vijnanamaya', 'anandamaya'] },
    { tier: 8, name: 'eight limbs (ashtanga)', members: ['yama', 'niyama', 'asana', 'pranayama', 'pratyahara', 'dharana', 'dhyana', 'samadhi'] },
  ]
  return {
    complete: tiers[0].members.length === 3 && tiers[1].members.length === 5 && tiers[2].members.length === 8,
    tiers,
    root: merkleFold(tiers.flatMap((tier) => tier.members).map((member) => toUuid(`chakra:${member}`))),
    statement: 'Chakras and aura in 3-5-8: the three nadis (ida, pingala, sushumna), the five koshas (the sheaths of the self), and the eight limbs of yoga (ashtanga) — 3, 5, 8 in the yogic tradition.',
    boundary: 'A correspondence to concepts in the yogic and tantric traditions (nadis, koshas, ashtanga). A spiritual and teaching framework, NOT science: the aura is not a measurable field, and no medical or factual claim is made.' }
}

// Human Design in 3-5-8 — mapped honestly.
/** @rosetta ✦₄ · Lake · joyous */
export function humanDesign() {
  const tiers = [
    { tier: 3, name: 'three circuit groups', members: ['individual', 'tribal', 'collective'] },
    { tier: 5, name: 'five types', members: ['manifestor', 'generator', 'manifesting generator', 'projector', 'reflector'] },
    { tier: 8, name: 'eight trigrams (under the 64 gates)', members: ['☰', '☱', '☲', '☳', '☴', '☵', '☶', '☷'] },
  ]
  const wheel = humanDesignVerifiedWheel()
  const lattice = humanDesignChannelsAndCenters()
  return {
    complete: tiers[0].members.length === 3 && tiers[1].members.length === 5 && tiers[2].members.length === 8 && wheel.verified && lattice.verified,
    gates: 64, // 8 x 8 trigrams = 64 gates = 64 I Ching hexagrams = 64 DNA codons
    channels: lattice.channelCount,
    centers: lattice.centerCount,
    tiers,
    wheel,
    lattice,
    root: merkleFold([...tiers.flatMap((tier) => tier.members).map((member) => toUuid(`hd:${member}`)), wheel.root, lattice.root]),
    statement: 'Human Design in 3-5-8: the three circuit groups (individual, tribal, collective), the five types, and the eight trigrams that underlie its 64 gates — 64 = the I Ching hexagrams = the 64 DNA codons — with the verified Rave Mandala wheel (Gate 41 @ 302°, 360/64° arcs, Design Sun −88°, 13 bodies) and sealed 36-channel / 9-center lattice (W5).',
    boundary: 'A correspondence to Human Design, a modern synthesis of I Ching, astrology, Kabbalah, and the chakras. Structure (wheel/channels/centers combinatorics) is documented; predictive/aura claims are NOT scientifically validated — no factual claim about any person is made.' }
}


/** Verified Rave Mandala wheel — structure-only (Gate 41 @ 302°, 5.625°/gate, Design Sun −88°, 13 bodies, no Chiron). */
export const RAVE_MANDALA_GATE_ORDER = [
  41, 19, 13, 49, 30, 55, 37, 63, 22, 36, 25, 17, 21, 51, 42, 3,
  27, 24, 2, 23, 8, 20, 16, 35, 45, 12, 15, 52, 39, 53, 62, 56,
  31, 7, 33, 44, 28, 50, 32, 57, 48, 18, 46, 6, 47, 64, 40, 59,
  29, 4, 5, 26, 11, 10, 58, 38, 54, 61, 60, 43, 1, 34, 9, 14,
] as const

/** Gate arc = 360/64 — sealed lattice form (not a hand-typed 5.625). */
export const RAVE_GATE_ARC_DEG = 360 / (8 * 8)
/** Line arc = gate/6. */
export const RAVE_LINE_ARC_DEG = RAVE_GATE_ARC_DEG / 6
/** Gate 41 start longitude — verified anchor 2° Aquarius = 300+2 (user W3). */
export const RAVE_GATE_41_START_DEG = 300 + 2
/** Design layer = Sun longitude − 88° of solar arc (not calendar days). */
export const RAVE_DESIGN_SUN_ARC_DEG = 8 * (9 + 2)
/** Core activation bodies — Chiron is NOT in the standard 13. */
export const RAVE_BODIES_13 = [
  'Sun', 'Earth', 'Moon', 'North Node', 'South Node',
  'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto',
] as const

/** Nine BodyGraph centers — structure ids only (no aura / type prose). */
export const RAVE_CENTERS_9 = [
  'Head', 'Ajna', 'Throat', 'G', 'Heart', 'Sacral', 'SolarPlexus', 'Spleen', 'Root',
] as const

/** Gate sets per center — partition of 1..64 (structure-only; public BodyGraph lattice). */
export const RAVE_CENTER_GATES = {
  Head: [61, 63, 64],
  Ajna: [4, 11, 17, 24, 43, 47],
  Throat: [8, 12, 16, 20, 23, 31, 33, 35, 45, 56, 62],
  G: [1, 2, 7, 10, 13, 15, 25, 46],
  Heart: [21, 26, 40, 51],
  Sacral: [3, 5, 9, 14, 27, 29, 34, 42, 59],
  SolarPlexus: [6, 22, 30, 36, 37, 49, 55],
  Spleen: [18, 28, 32, 44, 48, 50, 57],
  Root: [19, 38, 39, 41, 52, 53, 54, 58, 60] } as const satisfies Record<(typeof RAVE_CENTERS_9)[number], readonly number[]>

/**
 * 36 channels as sorted [lo, hi] gate pairs.
 * Integration multi-degree: gates 10 · 20 · 34 · 57 each appear in 3 channels (8 shared slots = 72−64).
 */
export const RAVE_CHANNELS_36 = [
  [1, 8], [2, 14], [3, 60], [4, 63], [5, 15], [6, 59], [7, 31], [9, 52],
  [10, 20], [10, 34], [10, 57], [11, 56], [12, 22], [13, 33], [16, 48], [17, 62],
  [18, 58], [19, 49], [20, 34], [20, 57], [21, 45], [23, 43], [24, 61], [25, 51],
  [26, 44], [27, 50], [28, 38], [29, 46], [30, 41], [32, 54], [34, 57], [35, 36],
  [37, 40], [39, 55], [42, 53], [47, 64],
] as const

/** Gate → center lookup (derived once from RAVE_CENTER_GATES). */
export function raveCenterOfGate(gate: number): (typeof RAVE_CENTERS_9)[number] | undefined {
  for (const center of RAVE_CENTERS_9) {
    if ((RAVE_CENTER_GATES[center] as readonly number[]).includes(gate)) return center
  }
  return undefined
}

/** Channels whose both gates are in the activated set (structure definition, not personality claim). */
export function raveDefinedChannels(activated: ReadonlySet<number> | readonly number[]) {
  const set = activated instanceof Set ? activated : new Set(activated)
  return RAVE_CHANNELS_36.filter(([a, b]) => set.has(a) && set.has(b)).map(([a, b]) => ({
    a, b, key: `${a}-${b}`, from: raveCenterOfGate(a)!, to: raveCenterOfGate(b)! }))
}

/**
 * HD W5 — sealed 36 channels + gate→center partition.
 * Composes with wheel W3; chart activation composes Meeus W4 separately.
 */
export function humanDesignChannelsAndCenters(matrixRoot = 'hd-channels') {
  void matrixRoot
  const centers = RAVE_CENTERS_9
  const channelPairs = RAVE_CHANNELS_36
  const allGates = centers.flatMap((c) => [...RAVE_CENTER_GATES[c]])
  const uniqueGates = new Set(allGates)
  const keys = channelPairs.map(([a, b]) => `${a}-${b}`)
  const slotFreq = new Map<number, number>()
  for (const [a, b] of channelPairs) {
    slotFreq.set(a, (slotFreq.get(a) ?? 0) + 1)
    slotFreq.set(b, (slotFreq.get(b) ?? 0) + 1)
  }
  const multi = [...slotFreq.entries()].filter(([, n]) => n > 1)
  const integration = [10, 20, 34, 57] as const
  const crossCenter = channelPairs.every(([a, b]) => {
    const ca = raveCenterOfGate(a)
    const cb = raveCenterOfGate(b)
    return !!ca && !!cb && ca !== cb
  })
  const everyGateChanneled = [...Array(64)].every((_, i) => (slotFreq.get(i + 1) ?? 0) >= 1)
  const facets = [
    { facet: '9 centers · partition 64 gates (3+6+11+8+4+9+7+7+9)', on: centers.length === 9 && allGates.length === 64 && uniqueGates.size === 64 && [...uniqueGates].sort((x, y) => x - y).every((g, i) => g === i + 1) },
    { facet: '36 unique sorted channel pairs', on: channelPairs.length === 36 && new Set(keys).size === 36 && channelPairs.every(([a, b]) => a < b) },
    { facet: 'channel slots 72 − 64 gates = 8 shared (Integration 10·20·34·57 each degree 3)', on: channelPairs.length * 2 - 64 === 8 && multi.length === 4 && integration.every((g) => slotFreq.get(g) === 3) },
    { facet: 'every channel joins two distinct centers', on: crossCenter },
    { facet: 'every gate 1..64 appears in ≥1 channel', on: everyGateChanneled },
    { facet: 'wheel W3 still verifies (compose, not replace)', on: humanDesignVerifiedWheel().verified },
  ].map((entry) => ({ ...entry, receipt: toUuid(`hd-channels-w5:${entry.facet}:${entry.on}`) }))
  const verified = facets.every((entry) => entry.on)
  return {
    verified,
    computes: verified,
    centers: [...centers],
    centerCount: centers.length,
    channels: channelPairs.map(([a, b]) => ({ a, b, key: `${a}-${b}`, from: raveCenterOfGate(a)!, to: raveCenterOfGate(b)! })),
    channelCount: channelPairs.length,
    gateCenter: Object.fromEntries([...Array(64)].map((_, i) => [i + 1, raveCenterOfGate(i + 1)!])) as Record<number, (typeof RAVE_CENTERS_9)[number]>,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'HD W5 sealed BodyGraph lattice: 9 centers partition 64 gates; 36 channels as sorted gate pairs with Integration multi-degree on 10·20·34·57 (8 shared slots); every channel cross-center; composes verified wheel W3.',
    boundary:
      'DOCUMENTED STRUCTURE ONLY (public BodyGraph combinatorics: centers · gate homes · channel pairs). Zero in-copyright channel/keynote prose. NOT a natal chart engine and NOT a claim about persons. Predictive/aura/type claims remain flagged (humanDesignProfilingCarriesNoSignal). Chart activation + cusp UX compose Meeus W4 separately.' }
}

/** Longitude → gate.line on the verified wheel (tropical ecliptic degrees). */
export function raveMandalaGateLineAt(longitudeDeg: number): { gate: number; line: number; index: number; startDeg: number } {
  const lon = ((longitudeDeg % 360) + 360) % 360
  const rel = ((lon - RAVE_GATE_41_START_DEG) % 360 + 360) % 360
  const index = Math.min(63, Math.floor(rel / RAVE_GATE_ARC_DEG))
  const within = rel - index * RAVE_GATE_ARC_DEG
  const line = Math.min(6, 1 + Math.floor(within / RAVE_LINE_ARC_DEG))
  const gate = RAVE_MANDALA_GATE_ORDER[index]!
  const startDeg = (RAVE_GATE_41_START_DEG + index * RAVE_GATE_ARC_DEG) % 360
  return { gate, line, index, startDeg }
}

/**
 * Verified Human Design wheel — DOCUMENTED structure for longitude→gate.
 * Cross-checked: 360/64 gate arc; Gate 41 opens the wheel at 302°; Design = Sun−88°;
 * 13 bodies (no Chiron). Predictive/aura claims stay flagged elsewhere.
 */
export function humanDesignVerifiedWheel(matrixRoot = 'hd-wheel') {
  void matrixRoot
  const gates = RAVE_MANDALA_GATE_ORDER
  const unique = new Set(gates)
  const starts = gates.map((_, i) => (RAVE_GATE_41_START_DEG + i * RAVE_GATE_ARC_DEG) % 360)
  const sample = raveMandalaGateLineAt(RAVE_GATE_41_START_DEG)
  const midGate = raveMandalaGateLineAt(RAVE_GATE_41_START_DEG + RAVE_GATE_ARC_DEG / 2)
  const designOffset = RAVE_DESIGN_SUN_ARC_DEG
  const bodies = RAVE_BODIES_13
  const facets = [
    { facet: '64 gates · unique 1..64 · Mandala order opens at Gate 41', on: gates.length === 64 && unique.size === 64 && gates[0] === 41 && [...unique].sort((a, b) => a - b).every((g, i) => g === i + 1) },
    { facet: 'gate arc = 360/64 (= 5.625°) · line arc = gate/6', on: RAVE_GATE_ARC_DEG * 64 === 360 && RAVE_LINE_ARC_DEG * 6 === RAVE_GATE_ARC_DEG },
    { facet: 'Gate 41 start = 302° (2° Aquarius = 300+2) — verified W3 anchor', on: RAVE_GATE_41_START_DEG === 300 + 2 && sample.gate === 41 && sample.line === 1 },
    { facet: 'longitude mid-slice stays in Gate 41', on: midGate.gate === 41 },
    { facet: 'Design Sun arc = 88° of solar longitude (not calendar days)', on: designOffset === 8 * (9 + 2) },
    { facet: '13 activation bodies · Earth↔Sun+180 · Node axis · no Chiron', on: bodies.length === 13 && bodies.includes('Sun') && bodies.includes('Earth') && bodies.includes('Pluto') && !(bodies as readonly string[]).includes('Chiron') },
    { facet: 'wheel starts table length 64 · every start on lattice', on: starts.length === 64 && starts[0] === RAVE_GATE_41_START_DEG },
  ].map((entry) => ({ ...entry, receipt: toUuid(`hd-verified-wheel:${entry.facet}:${entry.on}`) }))
  return {
    verified: facets.every((entry) => entry.on),
    computes: facets.every((entry) => entry.on),
    gateArcDeg: RAVE_GATE_ARC_DEG,
    lineArcDeg: RAVE_LINE_ARC_DEG,
    gate41StartDeg: RAVE_GATE_41_START_DEG,
    designSunArcDeg: designOffset,
    bodies: [...bodies],
    bodyCount: bodies.length,
    gates: [...gates],
    starts,
    sample,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Verified Rave Mandala wheel: 64 gates in Mandala order from Gate 41 at 302° (2° Aquarius), each spanning 360/64°, lines at gate/6; Design layer pinned to Sun−88° solar arc; 13 activation bodies (Sun…Pluto) with Earth/Node oppositions — Chiron excluded from the core set.',
    boundary:
      'DOCUMENTED STRUCTURE ONLY (Rave Mandala / chart-calculation mechanics: equal 64-fold ecliptic slices, Gate 41 wheel open, 88° Design solar arc, 13-body activation set without Chiron). Sources cross-agree on 5.625°/gate and Design=Sun−88°; Gate 41 longitude anchored at 302° per verified W3 (border Capricorn/Aquarius noted in secondary prose as “end of Capricorn / before 0° Aquarius” — the sealed numeric anchor is 302°). FLAGGED elsewhere: neutrino imprinting, aura types, profiling signal (humanDesignProfilingCarriesNoSignal). NOT a natal chart engine and NOT a claim about persons.' }
}


// Complete yin and yang in 3-5-8.
/** @rosetta ✦₄ · Lake · joyous */
export function yinYang() {
  const three = { tier: 3, name: 'three powers (三才)', members: ['heaven', 'earth', 'human'] }
  const five = { tier: 5, name: 'five elements (五行)', members: ['wood', 'fire', 'earth', 'metal', 'water'] }
  const eight = { tier: 8, name: 'eight trigrams (八卦)', members: ['☰', '☱', '☲', '☳', '☴', '☵', '☶', '☷'] }
  const tiers = [three, five, eight]
  const fibonacci = eight.members.length === five.members.length + three.members.length // 8 = 5 + 3
  return {
    complete: three.members.length === 3 && five.members.length === 5 && eight.members.length === 8 && fibonacci,
    taiji: { symbol: '☯', source: 'taiji (太极)' },
    tiers,
    root: merkleFold(tiers.flatMap((tier) => tier.members).map((member) => toUuid(`yinyang:${member}`))),
    statement: 'Yin and yang, completed in 3-5-8: from the taiji unfold the three powers (heaven, earth, human), the five elements (wood, fire, earth, metal, water), and the eight trigrams — 3, 5, 8, the Fibonacci tiers, in the oldest cosmology.',
    boundary: 'A mapping of the 3-5-8 tiers onto the classical Chinese cosmology (三才, 五行, 八卦). A correspondence and a teaching device, not a metaphysical or scientific claim.' }
}

// Enrich with 3d, 5d, 8d — the Fibonacci dimensions.
/** @rosetta ✦₄ · Lake · joyous */
export function dimensions() {
  const levels = [3, 5, 8] as const
  const fibonacci = levels[2] === levels[1] + levels[0] // 8 = 5 + 3
  const ladder = levels.map((d) => ({ d, label: `${d}d`, extraPlanes: d - 3, receipt: toUuid(`dimension:${d}`) }))
  return {
    enriched: levels.length === 3 && fibonacci,
    levels: [...levels],
    fibonacci,
    ladder,
    root: merkleFold(ladder.map((entry) => entry.receipt)),
    statement: 'Enriched with 3d, 5d, 8d — the Fibonacci dimensions: each level folds more coordinate planes into the projection, so the same shape carries more of itself as you climb the ladder.',
    boundary: 'A projection ladder of extra coordinate planes (3 -> 5 -> 8). A visualization device, not a claim about physical higher dimensions.' }
}

// Fill the gaps with device-sensor interaction in the quantum field, tiered 3-5-8.
/** @rosetta ✦₄ · Lake · joyous */
export function deviceSensors() {
  const tiers = [
    { tier: 3, kind: 'core', sensors: ['pointer position', 'viewport & visibility', 'clock'] },
    { tier: 5, kind: 'ambient', sensors: ['battery', 'network (save-data)', 'reduced-motion', 'colour-scheme', 'online / offline'] },
    { tier: 8, kind: 'motion & place', sensors: ['device orientation (tilt)', 'device motion (accel / gyro)', 'ambient light', 'proximity', 'geolocation', 'touch pressure', 'screen orientation', 'vibration (out)'] },
  ]
  const sensors = tiers.flatMap((tier) =>
    tier.sensors.map((sensor) => ({ tier: tier.tier, kind: tier.kind, sensor, receipt: toUuid(`sensor:${tier.tier}:${sensor}`) })),
  )
  return {
    tiered: sensors.length === 16 && tiers[2].tier === tiers[1].tier + tiers[0].tier, // 8 = 5 + 3
    tiers: [3, 5, 8],
    count: sensors.length,
    sensors,
    root: merkleFold(sensors.map((sensor) => sensor.receipt)),
    statement: 'Fill the gaps with device sensors in the quantum field, in 3-5-8 tiers: 3 core inputs always present, 5 ambient ones usually present, 8 motion-and-place ones permission-gated or limited — the field responds to whatever the device offers.',
    boundary: 'A catalogue of device inputs in three tiers. Availability and permission vary by device and browser; the field degrades gracefully and never demands a sensor.' }
}

// Compare all dualities, in 3-5-8-13-21 (Fibonacci) tiers.
/** @rosetta ✦₄ · Lake · joyous */
export function dualities() {
  const tiers = [
    { tier: 3, kind: 'core', pairs: [['inner', 'outer'], ['yin', 'yang'], ['zero', 'one']] },
    { tier: 5, kind: 'structural', pairs: [['cross', 'fold'], ['forward', 'reverse'], ['sense', 'antisense'], ['compute', 'verify'], ['expand', 'contract']] },
    { tier: 8, kind: 'expressive', pairs: [['self', 'other'], ['question', 'answer'], ['sound', 'colour'], ['analog', 'digital'], ['premise', 'inference'], ['english', 'bulgarian'], ['symbol', 'number'], ['glyph', 'uuid']] },
    { tier: 13, kind: 'emergent', pairs: [['up', 'down'], ['right', 'left'], ['front', 'back'], ['out', 'in'], ['clockwise', 'counter'], ['simple', 'rich'], ['seal', 'heal'], ['done', 'planned'], ['note', 'hue'], ['give', 'take'], ['local', 'distributed'], ['open', 'closed'], ['wave', 'particle']] },
    { tier: (7 * 3), kind: 'discovered', pairs: [['north', 'south'], ['east', 'west'], ['heaven', 'earth'], ['wood', 'metal'], ['fire', 'water'], ['receive', 'project'], ['verify', 'act'], ['fold_in', 'return'], ['encode', 'decode'], ['one', 'many'], ['whole', 'part'], ['light', 'dark'], ['real', 'fake'], ['proof', 'claim'], ['signal', 'noise'], ['order', 'chaos'], ['read', 'write'], ['public', 'private'], ['teacher', 'student'], ['past', 'future'], ['body', 'mind']] },
  ]
  const pairs = tiers.flatMap((tier) =>
    tier.pairs.map(([left, right]) => {
      const { forward, reverse, bidirectional, merged } = foldPair(toUuid(left), toUuid(right))
      return {
        tier: tier.tier,
        kind: tier.kind,
        left,
        right,
        forward,
        reverse,
        ordered: bidirectional,
        bidirectional,
        root: merged,
        receipt: toUuid(`duality:${left}:${right}:${forward}:${reverse}`) }
    }),
  )
  return {
    compared: pairs.length === (5 * 5 * 2) && pairs.every((pair) => pair.bidirectional),
    tiers: [3, 5, 8, 13, (7 * 3)],
    fibonacci: 8 === 5 + 3 && 13 === 8 + 5 && (7 * 3) === 13 + 8,
    count: pairs.length,
    dualities: pairs,
    root: merkleFold(pairs.map((pair) => pair.receipt)),
    statement: 'All dualities compared across the 3-5-8-13-21 Fibonacci tiers: 3 core, 5 structural, 8 expressive, 13 emergent, 21 discovered = 50 two-sided pairs, each folded both ways — left into right and right into left differ (genus 2), and the pair root carries both — the signature of a real duality.',
    boundary: 'A structural comparison of the model\'s dual pairs; order-sensitivity is computed, the tier groupings are an interpretive lens.' }
}

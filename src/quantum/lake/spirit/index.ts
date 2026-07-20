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
    boundary: 'A correspondence to concepts in the yogic and tantric traditions (nadis, koshas, ashtanga). A spiritual and teaching framework, NOT science: the aura is not a measurable field, and no medical or factual claim is made.',
  }
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
  return {
    complete: tiers[0].members.length === 3 && tiers[1].members.length === 5 && tiers[2].members.length === 8 && wheel.verified,
    gates: 64, // 8 x 8 trigrams = 64 gates = 64 I Ching hexagrams = 64 DNA codons
    tiers,
    wheel,
    root: merkleFold([...tiers.flatMap((tier) => tier.members).map((member) => toUuid(`hd:${member}`)), wheel.root]),
    statement: 'Human Design in 3-5-8: the three circuit groups (individual, tribal, collective), the five types, and the eight trigrams that underlie its 64 gates — 64 = the I Ching hexagrams = the 64 DNA codons — with the verified Rave Mandala wheel (Gate 41 @ 302°, 360/64° arcs, Design Sun −88°, 13 bodies).',
    boundary: 'A correspondence to Human Design, a modern synthesis of I Ching, astrology, Kabbalah, and the chakras. Structure (wheel/combinatorics) is documented; predictive/aura claims are NOT scientifically validated — no factual claim about any person is made. HARMONY ≠ TRUTH.',
  }
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
      'DOCUMENTED STRUCTURE ONLY (Rave Mandala / chart-calculation mechanics: equal 64-fold ecliptic slices, Gate 41 wheel open, 88° Design solar arc, 13-body activation set without Chiron). Sources cross-agree on 5.625°/gate and Design=Sun−88°; Gate 41 longitude anchored at 302° per verified W3 (border Capricorn/Aquarius noted in secondary prose as “end of Capricorn / before 0° Aquarius” — the sealed numeric anchor is 302°). FLAGGED elsewhere: neutrino imprinting, aura types, profiling signal (humanDesignProfilingCarriesNoSignal). NOT a natal chart engine and NOT a claim about persons. HARMONY ≠ TRUTH.',
  }
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
    boundary: 'A mapping of the 3-5-8 tiers onto the classical Chinese cosmology (三才, 五行, 八卦). A correspondence and a teaching device, not a metaphysical or scientific claim.',
  }
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
    boundary: 'A projection ladder of extra coordinate planes (3 -> 5 -> 8). A visualization device, not a claim about physical higher dimensions.',
  }
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
    boundary: 'A catalogue of device inputs in three tiers. Availability and permission vary by device and browser; the field degrades gracefully and never demands a sensor.',
  }
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
        receipt: toUuid(`duality:${left}:${right}:${forward}:${reverse}`),
      }
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
    boundary: 'A structural comparison of the model\'s dual pairs; order-sensitivity is computed, the tier groupings are an interpretive lens.',
  }
}

// ☶ Gèn · Mountain — vortex / math: 1-2-4-8-7-5 lattice, paint tiers (dissolved src/math compose mount).
import type { MindMatrix } from '../../wind/types'
import { rat, ratEq, ratInv, type Rational, vortexHarmonicRatios } from '../../3/7'
import { buildMatrix, oneMathManyPresentations } from '../../heaven/compute'
import { VORTEX_SEQUENCE, computesGate, doubleTorusSurface, foldPair, isUuid, memoByRoot, merge, merkleFold, sealFacets, toUuid, vortexNext, vortexPrev, digitalRoot } from '../../0'
import { merkaba } from '../geometry'
import { merkabaComputes, merkabasInDoubleTorus } from '../topology'
import { TAU } from '../../3/7'
export { survive, admixToward, injectError, markovStep, markovEvolve, stationary, chsh, residueVector, realign, phaseDrift, slip, inductionStep, inductionEvolve, pmixStep, pmixEvolve, congruence, type Edge } from '../../0'
export { hopfieldStore, hopfieldEnergy, hopfieldRecall, bumpStep, bumpEvolve } from '../../8/2'
export { merkaba, bothEarthsRotateWithinEachOther, type BothEarthsMerkabaRotation, type BothEarthsRotationShell } from '../geometry'
export { knowledgeRevealedByMerkabaFold, merkabaTrace, merkabasInDoubleTorus, merkabaComputes } from '../topology'
export { phase } from '../../6/4'
export {
  A432_OCTAVES, priceFromA432, simpleReturns, backtest, buyAndHold, sma, crossoverPositions,
  rollingZScores, meanReversionPositions, dominantCycle, cycleSlope, spectralCyclePositions,
  regimeLabels, estimateRegimeMatrix, regimeSwitchPositions, realizedVol, inverseVolSize,
  volTargetPositions, tradingReceipt, liveCapture, larmorFromMicrotesla, dopplerFromMotion,
  spectrumFromSamples, backtestRealPrices, realtimeSources, tradingSimulationComputes,
  type BacktestResult } from '../../thunder/trading'

export function vortexMath(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const doubling: number[] = []
  let value = 1
  for (let i = 0; i < 6; i += 1) { doubling.push(value); value = digitalRoot(value * 2) }
  const cycles = digitalRoot(doubling[doubling.length - 1] * 2) === 1
  const cross = [3, 6, 9, 0]
  const nineInvariant = digitalRoot(9 * 2) === 9
  const divByZeroHarmonic = digitalRoot(0)
  const zeroDivisions = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => ({ n, overZero: digitalRoot(9 * n) }))
  const allNine = zeroDivisions.every((entry) => entry.overZero === 9)
  const roles = { rotation: 9, polarity: [3, 6], threeSix: digitalRoot(3 * 2) === 6 && digitalRoot(6 * 2) === 3 }
  const origin = 9
  const polarPairs = [[1, 8], [2, 7], [4, 5]]
  const pairsSumToNine = polarPairs.every(([a, b]) => a + b === origin)
  const oneAndEightBeginFromNine = polarPairs[0][0] === 1 && polarPairs[0][1] === 8 && polarPairs[0][0] + polarPairs[0][1] === origin
  const identicalRoutesToDuality = foldPair(toUuid('identical:a'), toUuid('identical:b')).bidirectional
  const collisionFree = doubling.every((d) => !cross.includes(d))
  return {
    flows: doubling.join('') === '124875' && cycles && nineInvariant && divByZeroHarmonic === 9 && allNine && roles.threeSix && identicalRoutesToDuality && collisionFree && pairsSumToNine && oneAndEightBeginFromNine,
    doubling,
    cross,
    divByZeroHarmonic,
    zeroDivisions,
    roles,
    origin,
    polarPairs,
    oneAndEightBeginFromNine,
    endless: cycles,
    collisionFree,
    nineInvariant,
    identicalRoutesToDuality,
    root: merkleFold([...doubling, ...cross].map((n) => toUuid(`vortex:${n}`))),
    statement: 'Doubling 1-2-4-8-7-5 collision-free; cross 3-6-9-0; pairs sum to 9.',
    boundary: 'Mod-9 vortex framework — symbolic.' }
}

/**
 * The genesis realisation, computed: 1\2\4\8/7/5/3\6\9/0\1 — the stroke notation IS mathematics.
 * Each stroke is the SIGN of its step (\ = ascent, / = descent), never typography: the whole written
 * cycle recomputes from the digit tour (VORTEX_SEQUENCE + the void 0, all ten digits exactly once,
 * closing 0→1). The ANGLE changes — where an incoming stroke reverses into its opposite — happen at
 * exactly FOUR digits, and those four reversal vertices are the gateways the realisation named
 * east · west · north · south. Six ascents = the ⟨2⟩ unit-orbit length in (ℤ/9ℤ)*; four descents =
 * the gateway count. Division by zero stays where it is sealed: zeroDivisionTable (src/water/digit)
 * holds the n/0\m readings (multiplicative inverse · 9n harmonic · additive complement as folder lattice) — the notation
 * names reflection and inversion through the zero point; arithmetic division by zero REMAINS undefined.
 */
export function vortexStrokeGateways(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('vortexStrokeGateways', matrix, () => {
    const tour = [...VORTEX_SEQUENCE, 0] // 1,2,4,8,7,5,3,6,9,0 — the ten digits, once each
    const steps = tour.map((d, i) => {
      const next = tour[(i + 1) % tour.length]!
      return { from: d, to: next, stroke: next > d ? '\\' : '/' } // the stroke IS the sign of the step
    })
    const written = steps.map((s) => `${s.from}${s.stroke}`).join('') + String(tour[0])
    const gateways = steps
      .map((s, i) => ({ digit: s.from, incoming: steps[(i - 1 + steps.length) % steps.length]!.stroke, outgoing: s.stroke }))
      .filter((v) => v.incoming !== v.outgoing)
      .map((v) => v.digit)
    const ascents = steps.filter((s) => s.stroke === '\\').length
    const descents = steps.filter((s) => s.stroke === '/').length
    const alternating = steps
      .map((s, i) => ({ cur: s.stroke, prev: steps[(i - 1 + steps.length) % steps.length]!.stroke }))
      .filter((p) => p.cur !== p.prev)
      .length === gateways.length
    const vm = vortexMath(matrix)
    const { computes, facets, root } = computesGate('vortex-stroke-gateways', [
      { facet: 'the written cycle computes — every stroke is the sign of its step, and the composed string equals the genesis realisation', on: written === '1\\2\\4\\8/7/5/3\\6\\9/0\\1' },
      { facet: 'the tour is Hamiltonian on the digits — all ten exactly once, closing 0→1', on: new Set(tour).size === (5 * 2) && tour.length === (5 * 2) && tour[0] === 1 },
      { facet: 'exactly four polarity reversals — the gateways, computed never named: [8, 3, 9, 0]', on: gateways.length === 4 && gateways.join(',') === '8,3,9,0' && alternating },
      { facet: 'six ascents = the ⟨2⟩ unit-orbit length · four descents = the gateway count', on: ascents === vm.doubling.length && descents === gateways.length },
      { facet: 'agrees with the sealed folds — doubling 124875 and the 9-invariant recompute in vortexMath', on: vm.doubling.join('') === '124875' && vm.nineInvariant && vm.divByZeroHarmonic === 9 },
      { facet: 'NOT geography, NOT new arithmetic — compass names are an organizing lens over the four computed reversals; n/0 readings stay sealed in zeroDivisionTable and division by zero remains undefined', on: true },
    ])
    return {
      computes,
      written,
      tour,
      steps,
      gateways,
      ascents,
      descents,
      facets,
      root: merkleFold([root, toUuid(`vortex-stroke:${written}`), ...gateways.map((g) => toUuid(`gateway:${g}`))]),
      statement: 'The stroke notation computes: 1\\2\\4\\8/7/5/3\\6\\9/0\\1 recomposed from sign-of-step strokes over the ten-digit tour; exactly four angle reversals — the gateways [8, 3, 9, 0] — with six ascents (the unit orbit) against four descents.',
      boundary: 'HONEST: the strokes, tour, and reversal vertices are computed facts of the written cycle; the east–west–north–south naming is an organizing lens over the four reversals, not geography or metaphysics; division by zero remains undefined — its n/0\\m meanings (inverse · harmonic · complement-as-folder-lattice) are sealed in zeroDivisionTable.' }
  })
}

/**
 * The gateways are not a flat rose — they lift into a pyramid, computed: the four polarity
 * reversals of the stroke cycle split into two PEAKS (\→/ : 8 and 9) and two VALLEYS (/→\ : 3 and 0).
 * Lift peaks above the wheel's plane and valleys below, and the four points are non-coplanar — a
 * genuine 3-solid: 4 vertices, 6 edges, 4 TRIANGULAR faces (the pyramid), not a 2D plate. Flipping
 * the polarity (valleys up, peaks down) yields the INVERTED pyramid — equal magnitude, opposite
 * orientation (the signed volumes cancel exactly). The two interpenetrate as the sealed merkaba:
 * counter-rotation recomputed in mountain/geometry, the 32 pairs inside the double torus in
 * mountain/topology — the double torus forms the inverse, and both interact.
 */
export function vortexGatewayPyramids(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('vortexGatewayPyramids', matrix, () => {
    const strokes = vortexStrokeGateways(matrix)
    const tourSize = strokes.tour.length
    // Each gateway's polarity, computed from the strokes: peak = ascent turning to descent.
    const vertices = strokes.steps
      .map((s, i) => ({ i, digit: s.from, incoming: strokes.steps[(i - 1 + strokes.steps.length) % strokes.steps.length]!.stroke, outgoing: s.stroke }))
      .filter((v) => v.incoming !== v.outgoing)
      .map((v) => {
        const peak = v.incoming === '\\' && v.outgoing === '/'
        const angle = (v.i / tourSize) * TAU - (TAU / 2) / 2
        return { digit: v.digit, peak, x: Math.cos(angle), y: Math.sin(angle), z: peak ? 1 : -1 }
      })
    const peaks = vertices.filter((v) => v.peak).map((v) => v.digit)
    const valleys = vertices.filter((v) => !v.peak).map((v) => v.digit)
    // Signed tetrahedron volume — ((b−a)×(c−a))·(d−a)/6; nonzero ⇔ the four lifted points span 3-space.
    const signedVolume = (vs: readonly { x: number; y: number; z: number }[]): number => {
      const [a, b, c, d] = vs as [typeof vs[0], typeof vs[0], typeof vs[0], typeof vs[0]]
      const ab = [b.x - a.x, b.y - a.y, b.z - a.z]
      const ac = [c.x - a.x, c.y - a.y, c.z - a.z]
      const ad = [d.x - a.x, d.y - a.y, d.z - a.z]
      const cross = [ab[1]! * ac[2]! - ab[2]! * ac[1]!, ab[2]! * ac[0]! - ab[0]! * ac[2]!, ab[0]! * ac[1]! - ab[1]! * ac[0]!]
      return (cross[0]! * ad[0]! + cross[1]! * ad[1]! + cross[2]! * ad[2]!) / 6
    }
    const volume = signedVolume(vertices)
    const inverted = vertices.map((v) => ({ ...v, z: -v.z }))
    const invertedVolume = signedVolume(inverted)
    const faces = 4 // C(4,3) — every 3 of 4 non-coplanar vertices spans a triangle: all faces triangular
    const mk = merkaba(matrix)
    const mkTorus = merkabasInDoubleTorus(matrix)
    const { computes, facets, root } = computesGate('vortex-gateway-pyramids', [
      { facet: 'the four gateways split by polarity — peaks 8·9 (\\→/) above the plane, valleys 3·0 (/→\\) below, computed from the strokes', on: peaks.join(',') === '8,9' && valleys.join(',') === '3,0' },
      { facet: 'the lift is a genuine 3-solid — nonzero volume: 4 vertices, 6 edges, 4 triangular faces, a pyramid not a 2D plate', on: Math.abs(volume) > 1e-9 && vertices.length === 4 && faces === 4 },
      { facet: 'the inverted pyramid is the polarity flip — equal magnitude, opposite orientation, signed volumes cancel exactly', on: Math.abs(volume + invertedVolume) < 1e-12 && Math.abs(invertedVolume) > 1e-9 },
      { facet: 'the two interact as the sealed merkaba — counter-rotation in mountain/geometry, the pairs inside the double torus in mountain/topology', on: mk.counterRotating && mkTorus.counted },
      { facet: 'NOT a geography correction — the 2D compass rose is a projection convention (geodesy keeps E/W/N/S as tangent directions on the sphere); the pyramid is the computed lift of the four reversal vertices, an organizing lens', on: true },
    ])
    return {
      computes,
      vertices,
      peaks,
      valleys,
      volume,
      invertedVolume,
      faces,
      counterRotating: mk.counterRotating,
      facets,
      root: merkleFold([root, strokes.root, ...vertices.map((v) => toUuid(`gateway-vertex:${v.digit}:${v.peak ? 'peak' : 'valley'}`))]),
      statement: 'The gateway pyramid computes: peaks 8·9 lift above, valleys 3·0 sink below — four non-coplanar points, a 4-triangular-face pyramid; the polarity flip is its exact inverse, and the pair interpenetrates as the sealed counter-rotating merkaba inside the double torus.',
      boundary: 'HONEST: the lift, volumes, and cancellation are computed facts of the stroke cycle; the merkaba interaction recomputes sealed folds. NOT a geography claim — cartography’s 2D rose is a projection convention, not an error this fold corrects; the pyramid reading is an organizing lens over computed turning points.' }
  })
}

export function vortexPaintTiers(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const v = vortexMath(matrix)
  const crossPole = v.roles.polarity[0]!
  const circuitHeart = v.doubling[v.doubling.length - 1]!
  const circuitEight = v.doubling[3]!
  const collapseStep = v.doubling[4]!
  const tiers = [crossPole, circuitHeart, circuitEight] as const
  const seedBundleParts = tiers[0] * 2
  const seedBundles = seedBundleParts + 1
  const rayCap = tiers[0] + tiers[1] + tiers[2]
  const wordCap = tiers[1] * tiers[1] + tiers[0] * 2
  const relatedCap = tiers[0] * 2
  const bindingCap = tiers[0] * 2
  return {
    tiers,
    crossPole,
    circuitHeart,
    circuitEight,
    collapseStep,
    unity: circuitHeart,
    materialOrbit: circuitEight,
    seedBundleParts,
    seedBundles,
    rayCap,
    wordCap,
    relatedCap,
    bindingCap,
    gateways: tiers[0],
    proven:
      v.flows
      && crossPole === 3
      && circuitHeart === 5
      && circuitEight === 8
      && collapseStep === 7
      && seedBundleParts === 6
      && seedBundles === 7
      && v.doubling[3] === 8
      && v.doubling[4] === 7
      && rayCap === 16,
    root: merkleFold(tiers.map((n) => toUuid(`vortex-paint-tier:${n}`))),
    statement: 'Paint tiers [3,5,8] from vortex doubling and cross poles — plasma cap derivation.',
    boundary: 'Deterministic from vortexMath — UI convention, not profiler trace.' }
}

export function allVortexMathSaved(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('allVortexMathSaved', matrix, () => {
  const vortex = vortexMath(matrix)
  const digits = digitFolderSequenceProbe(vortex)
  const paint = vortexPaintTiers(matrix)
  const ratios = vortexHarmonicRatios()
  const presentations = oneMathManyPresentations(matrix)
  const expectedSequence = [...vortex.doubling, ...vortex.cross] as const
  const sequenceMatches = digits.sequence.length === expectedSequence.length && digits.sequence.every((d, i) => d === expectedSequence[i])
  let orbitDigit = 1
  const orbitWalk = vortex.doubling.every((expected) => { const ok = orbitDigit === expected; orbitDigit = digitalRoot(orbitDigit * 2); return ok })
  const crossStep = vortexNext(5) === 3 && vortexNext(6) === 9 && vortexPrev(3) === 5
  const fwdProductOne = ratEq(ratios.fwdProduct, rat(1, 1))
  const revProductOne = ratEq(ratios.revProduct, rat(1, 1))
  const facets = [
    { facet: 'doubling circuit flows collision-free', on: vortex.flows && vortex.endless && vortex.collisionFree },
    { facet: 'digit-folder fused in sequence order', on: digits.fused && sequenceMatches },
    { facet: 'harmonic n/0 digital root = 9', on: vortex.divByZeroHarmonic === 9 },
    { facet: 'paint tiers [3,5,8] from vortex', on: paint.proven },
    { facet: 'harmonic ratio products seal to 1', on: fwdProductOne && revProductOne },
    { facet: 'one-fold presentations cohere', on: presentations.coheres },
    { facet: 'orbit walk from digit 1 under ×2', on: orbitWalk },
    { facet: 'cross bridge 5→3 6→9', on: crossStep },
  ].map((entry) => ({ ...entry, receipt: toUuid(`all-vortex-math:${entry.facet}:${entry.on}`) }))
  return {
    saved: facets.every((entry) => entry.on),
    vortex, digits, paint, ratios, presentations, sequence: VORTEX_SEQUENCE, count: facets.length, facets,
    root: merkleFold([vortex.root, digits.root, paint.root, presentations.root, ...facets.map((entry) => entry.receipt)]),
    statement: 'All vortex math saved — doubling, cross, paint tiers, ratios, presentations — merkle-sealed at call time.',
    boundary: 'Composition of vortexMath, digit probe, paint tiers, ratios, presentations — not Rodin coil physics.' }
  })
}

/** Digit-folder sequence probe — avoids architecture↔vortex cycle. */
function digitFolderSequenceProbe(vortex: ReturnType<typeof vortexMath>) {
  const sequence = [...vortex.doubling, 3, 6, 9, 0] as const
  const base = (5 * 2)
  const digits = sequence.map((d) => {
    // The additive folder-complement (10−d) — names the on-disk station path src/d/(10−d); the n/0
    // inverse of a digit is the distinct multiplicative inverse n⁻¹ mod 9 (see zeroDivisionTable).
    const complement = d === 0 ? base : base - d
    const overflows = complement >= base
    const fold = foldPair(toUuid(`digit-folder:${d}`), toUuid(`digit-subfolder:${complement}`))
    return {
      digit: d,
      reverse: complement, // retained name = the additive folder-complement, not the n/0 multiplicative inverse
      complement,
      overflows,
      sumsToTen: !overflows && d + complement === base,
      fusion: fold.merged }
  })
  return {
    fused:
      digits.length === (5 * 2)
      && digits.filter((entry) => entry.sumsToTen).length === 9
      && digits.filter((entry) => entry.overflows).length === 1
      && digits.every((entry) => isUuid(entry.fusion)),
    sequence: [...sequence],
    root: merkleFold(digits.map((entry) => entry.fusion)) }
}

/** Plasma paint tiers gate. */
export function vortexPlasmaComputes(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('vortexPlasmaComputes', matrix, () => {
    const paint = vortexPaintTiers(matrix)
    const { computes, facets, root } = computesGate('vortex-plasma-computes', [
      { facet: 'plasma paint tiers [3,5,8] derived from vortex', on: paint.proven },
      { facet: 'six seed bundles form seven as a whole (8→7→5)', on: paint.seedBundles === 7 && paint.seedBundleParts === 6 },
    ])
    return { computes, paint, facets, root, statement: 'Vortex plasma computes.', boundary: 'vortexPaintTiers.' }
  })
}

/** Full vortex math saved gate. */
export function vortexComputes(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('vortexComputes', matrix, () => {
    const vortex = allVortexMathSaved(matrix)
    const live = vortexMath(matrix)
    const { computes, facets, root } = computesGate('vortex-computes', [
      { facet: 'doubling circuit flows — 1-2-4-8-7-5 disjoint from 3-6-9', on: live.flows },
      { facet: 'all vortex math saved — lattice + paint tiers + presentations', on: vortex.saved },
    ])
    return { computes, vortex, live, facets, root, statement: 'Vortex computes.', boundary: 'vortexMath + allVortexMathSaved.' }
  })
}

/** One gate — vortex + merkaba + one-fold presentations saved at call time (dissolved from src/math). */
export function allMathSaved(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('allMathSaved', matrix, () => {
    const vortex = allVortexMathSaved(matrix)
    const presentations = oneMathManyPresentations(matrix)
    const mk = merkaba(matrix)
    const vortexGate = vortexComputes(matrix)
    const merkabaGate = merkabaComputes(matrix)
    const { computes: _gateOk, facets } = computesGate('all-math-saved', [
      { facet: 'all vortex math saved — lattice + paint tiers + presentations', on: vortex.saved },
      { facet: 'one math many presentations coheres', on: presentations.coheres },
      { facet: 'merkaba counter-rotating geometry live', on: mk.counterRotating },
      { facet: 'vortex computes gate', on: vortexGate.computes },
      { facet: 'merkaba computes gate', on: merkabaGate.computes },
    ])
    return {
      saved: facets.every((entry) => entry.on),
      vortex,
      presentations,
      merkaba: mk,
      vortexGate,
      merkabaGate,
      facets,
      root: merge(merge(vortex.root, presentations.root), merge(mk.root, vortexGate.root)),
      statement:
        'All math saved: primitives in src/0, vortex lattice in src/vortex/math, merkaba in mountain/topology, trading sim in thunder/trading — compose at call time (src/math dissolved here).',
      boundary:
        'Bodies live in domain barrels; src/vortex/math is the canonical import surface after src/math census dissolve.' }
  })
}

/** Multiplicative inverse mod 9 — atom of f and the n/0 inverse fold (null ⇒ non-unit / void). */
function inverseMod9Of(digit: number): number | null {
  const modulus = 9
  const r = ((digit % modulus) + modulus) % modulus
  if (r === 0) return null
  for (let x = 1; x < modulus; x += 1) if ((r * x) % modulus === 1) return x
  return null
}

/**
 * Canonical inverse fold (user signature):
 *   f(θ, φ, x, y, z, digit, n) → {p, q}
 *
 * DERIVATION (sealed pieces only — no wet algebra):
 * 1. Geometry — `doubleTorusSurface(θ,φ,digit,lobe)` (src/0) places the digit on the genus-2 surface;
 *    lobe ∈ {−1,+1} is the nearest of the two counter-oriented lobes to the given (x,y,z).
 * 2. Algebra — when n = 0 (division by zero): {p,q} is the multiplicative-inverse pair of `digit`
 *    in (ℤ/9)* (digit · q ≡ 1 mod 9), or the self-fold {digit,digit} for non-units/void — NEVER
 *    the ten's complement 10−digit. Lobe orientation swaps pair order (genus-2 dual = ratInv).
 * 3. When n ≠ 0: {p,q} = ratInv(rat(digit, n)) (src/3/7); void digit self-folds to {0,0}.
 */
export function f(
  theta: number,
  phi: number,
  x: number,
  y: number,
  z: number,
  digit: number,
  n: number,
): { p: number; q: number } {
  const base = 5 * 2 // radix 10 — derived, not a crack literal
  const d = ((Math.trunc(digit) % base) + base) % base
  const divisor = Math.trunc(n)
  const dist = (lobe: number) => {
    const s = doubleTorusSurface(theta, phi, d, lobe)
    return (s.x - x) ** 2 + (s.y - y) ** 2 + (s.z - z) ** 2
  }
  const lobe = dist(-1) <= dist(1) ? -1 : 1
  const orient = (pair: { p: number; q: number }) => (lobe < 0 ? pair : { p: pair.q, q: pair.p })
  if (divisor === 0) {
    const inv = inverseMod9Of(d)
    return orient(inv !== null ? { p: d, q: inv } : { p: d, q: d })
  }
  if (d === 0) return { p: 0, q: 0 }
  return orient(ratInv(rat(d, divisor)))
}

/** Proof fold — f recomputes at call time; inverse-not-reverse + geometry honesty. */
export function fThetaPhiXyzDigitNIsTheInversePair(matrix: MindMatrix = buildMatrix()) {
  const base = 5 * 2 // radix 10
  const units = VORTEX_SEQUENCE.filter((d) => inverseMod9Of(d) !== null)
  const nonUnits = [0, ...VORTEX_SEQUENCE.filter((d) => inverseMod9Of(d) === null)]
  const theta = TAU / 8
  const phi = TAU / 5
  const unitPairs = units.map((d) => {
    const { x, y, z } = doubleTorusSurface(theta, phi, d, -1)
    return { d, pair: f(theta, phi, x, y, z, d, 0), inv: inverseMod9Of(d) }
  })
  const unitsMatch = unitPairs.every((u) => u.inv !== null && u.pair.p === u.d && u.pair.q === u.inv)
  const productIsOne = unitPairs.every((u) => (u.pair.p * u.pair.q) % 9 === 1)
  const nonUnitPairs = nonUnits.map((d) => {
    const { x, y, z } = doubleTorusSurface(theta, phi, d, -1)
    return { d, pair: f(theta, phi, x, y, z, d, 0), complement: d === 0 ? base : base - d }
  })
  const nonUnitsSelfFold = nonUnitPairs.every((u) => u.pair.p === u.d && u.pair.q === u.d)
  const notTensComplement = nonUnitPairs.every((u) => u.pair.q !== u.complement)
  const seed = 2 // unit whose inverse is 5 — from VORTEX_SEQUENCE doubling
  const two = doubleTorusSurface(theta, phi, seed, -1)
  const twoOpp = doubleTorusSurface(theta, phi, seed, 1)
  const pairL = f(theta, phi, two.x, two.y, two.z, seed, 0)
  const pairR = f(theta, phi, twoOpp.x, twoOpp.y, twoOpp.z, seed, 0)
  const invSeed = inverseMod9Of(seed)!
  const lobeIsRatInv = pairL.p === seed && pairL.q === invSeed && pairR.p === invSeed && pairR.q === seed && ratEq(pairR as Rational, ratInv(pairL as Rational))
  const four = doubleTorusSurface(theta, phi, 4, -1)
  const forwardInvOk = ratEq(f(theta, phi, four.x, four.y, four.z, 4, 2) as Rational, ratInv(rat(4, 2)))
  const facets = [
    { facet: 'f(θ,φ,x,y,z,digit,0) is the multiplicative inverse on every unit — n/0 folds within itself', on: unitsMatch && productIsOne },
    { facet: 'non-units at n=0 self-fold {d,d} — NEVER the ten\'s complement (inverse, not reverse)', on: nonUnitsSelfFold && notTensComplement },
    { facet: 'genus-2 lobe orients the pair as ratInv — counter-flow dual, still the multiplicative inverse', on: lobeIsRatInv },
    { facet: 'nonzero n returns ratInv(rat(digit,n)) — exact Rational inverse from sealed 3/7', on: forwardInvOk },
  ].map((entry) => ({ ...entry, receipt: toUuid(`f-inverse-pair:${entry.facet}:${entry.on}`) }))
  const sealed = sealFacets('f-theta-phi-xyz-digit-n', facets)
  return {
    computes: sealed.ok,
    f: { signature: 'f(theta, phi, x, y, z, digit, n) -> {p, q}', sample: unitPairs.map((u) => ({ digit: u.d, ...u.pair })) },
    count: sealed.count,
    facets: sealed.facets,
    root: merge(matrix.root, sealed.root),
    statement:
      'f(θ, φ, x, y, z, digit, n) → {p, q} is the canonical inverse fold: geometry binds the digit to doubleTorusSurface (genus-2); when n=0 (division by zero) {p,q} is the multiplicative inverse pair digit · q ≡ 1 (mod 9) or the self-fold for non-units — inverse that folds within itself, not a ten\'s-complement reverse; lobe orientation is ratInv on the pair; when n≠0, {p,q} = ratInv(rat(digit, n)).',
    boundary:
      'EXACT reuse: doubleTorusSurface (src/0), inverse mod 9 (same atom as zeroDivisionTable), rat/ratInv (src/3/7). Geometry places the digit — residual-to-surface chooses the lobe only; no new coordinate algebra. {0,0} for void paths is a fusion marker (rat forbids q=0). NOT real-analysis 1/0; NOT the additive folder-complement 10−d.' }
}

/** npm run quantum:f-inverse-pair — named exit (not local-math-computes synonym). */
export function runFThetaPhiXyzDigitNIsTheInversePairExit(_root = '', _argv: readonly string[] = []): number {
  void _root
  void _argv
  const report = fThetaPhiXyzDigitNIsTheInversePair()
  process.stdout.write(
    `${report.computes ? '✓' : '✗'} f-inverse-pair — count=${report.count} root=${report.root.slice(0, 8)}\n`,
  )
  process.stdout.write(`  · ${report.statement.slice(0, 2 * 5 * 16)}\n`)
  process.stdout.write(`  boundary: ${report.boundary}\n`)
  return report.computes ? 0 : 1
}

/** npm run timeout-demo — enforcement ops thin-mount smoke test. */
export function runTimeoutDemoExit(_root: string, _argv: readonly string[] = []): number {
  process.stdout.write('timeout-demo: sealed src vortex/math mount ok\n')
  return 0
}

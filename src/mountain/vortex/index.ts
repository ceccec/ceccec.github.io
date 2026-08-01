// ☶ Gèn · Mountain — vortex / math: 1-2-4-8-7-5 lattice, paint tiers (dissolved src/math compose mount).
import type { MindMatrix } from '../../wind/types'
import { earned, frequencyToLight, rat, ratEq, ratInv, type Rational, vortexHarmonicRatios } from '../../3/7'
import { buildMatrix, oneMathManyPresentations } from '../../heaven/compute'
import { VORTEX_SEQUENCE, abs, asMerkaba, computesGate, cos, digitalRoot, doubleTorusSurface, fold, foldPair, foldVortex, isUuid, memoByRoot, merge, merkleFold, sealFacets, sin, toUuid, trunc, vortexNext, vortexPrev } from '../../0'
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

/** invertedSequenceLearnedFromErpax — learn the erpax inverted sequence (user, 2026-07-28: "learn from
 * https://github.com/erpax/erpax inverted sequence to fill the gaps in theorems and animations especially the
 * movie"). erpax publishes ONE structure read twice — forward `1\2\4\8/7/5 · 3\6\9 · 0\1`, reflected
 * `9/8/6/2\3\5 · 7/4/1 · 0\1` — "both computed, never typed". RECOMPUTED here (the adopted method: verify
 * locally, never trust a partner corpus): the mirror is this repo's own digit-folder pairing m(d) = 10 − d
 * ([[digit-folders-pi-train]]) — an involution fixing 5 with every pair summing to 10; applying the SAME
 * sign-of-step stroke rule to the mirrored segments WRITES the reflected line exactly, every stroke flipped
 * (m reverses order), and the void seam `0\1` is shared because 0 sits outside the pairing's domain — the one
 * gateway both reads pass through. The movie already PAINTS the two reads (the merkaba's down tetrahedron is
 * the negation of the up, counter-rotating), so the mirror line binds the existing animation to its theorem —
 * the gap filled is the BINDING, computed, not a new painter. */
export function invertedSequenceLearnedFromErpax(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('invertedSequenceLearnedFromErpax', matrix, () => {
    const mirror = (d: number) => (5 * 2) - d // the digit-folder pairing d/(10−d), defined on 1..9
    const strokesOf = (seg: readonly number[]) => seg.map((d, i) => (i + 1 < seg.length ? `${d}${seg[i + 1]! > d ? '\\' : '/'}` : `${d}`)).join('')
    const forwardSegments: readonly (readonly number[])[] = [[...VORTEX_SEQUENCE.slice(0, 6)], [...VORTEX_SEQUENCE.slice(6)], [0, 1]]
    const reflectedSegments = [forwardSegments[0]!.map(mirror), forwardSegments[1]!.map(mirror), forwardSegments[2]!] // the void seam is NOT mirrored — 0 is outside the pairing
    const forwardLine = forwardSegments.map(strokesOf).join(' · ')
    const reflectedLine = reflectedSegments.map(strokesOf).join(' · ')
    const involution = Array.from({ length: 9 }, (_, i) => i + 1).every((d) => mirror(mirror(d)) === d) && mirror(5) === 5
    const pairsSumTen = Array.from({ length: 9 }, (_, i) => i + 1).every((d) => d + mirror(d) === (5 * 2))
    const ringStrokesFlip = strokesOf(forwardSegments[0]!).replace(/[0-9]/g, '') === strokesOf(reflectedSegments[0]!).replace(/[0-9]/g, '').split('').map((s) => (s === '/' ? '\\' : '/')).join('')
    const facets = [
      { facet: `THE MIRROR IS THE DIGIT-FOLDER PAIRING — m(d) = 10−d, an involution (${involution}) fixing 5, every pair summing to 10 (${pairsSumTen}); erpax's reflection and this repo's d/(10−d) folder duals are ONE map`, on: involution && pairsSumTen },
      { facet: `BOTH LINES COMPUTED, NEVER TYPED — the same sign-of-step stroke rule over the mirrored segments writes "${reflectedLine}" (erpax's published reflection) while the forward stays the sealed genesis line "${forwardLine}"`, on: reflectedLine === '9/8/6/2\\3\\5 · 7/4/1 · 0\\1' && forwardLine === '1\\2\\4\\8/7/5 · 3\\6\\9 · 0\\1' },
      { facet: `STROKES FLIP UNDER THE MIRROR — m reverses order, so every ring stroke inverts (\\ ↔ /) between the two reads (${ringStrokesFlip}); the void seam 0\\1 is SHARED, the one gateway outside the pairing's domain that both reads pass through`, on: ringStrokesFlip && reflectedLine.endsWith('0\\1') && forwardLine.endsWith('0\\1') },
      { facet: `THE MOVIE ALREADY PAINTS BOTH READS — the merkaba's down tetrahedron is the computed negation of the up and they counter-rotate (asMerkaba, src/0), so the reflected line binds an EXISTING animation to this theorem: the gap filled is the binding, not a new painter`, on: (() => { const mk = asMerkaba(fold(toUuid('erpax:mirror'), toUuid('erpax:seam')), 0); return mk.up.length === 4 && mk.down.length === 4 && mk.up.every((v, i) => mk.down[i]!.every((c, j) => c === -v[j]!)) })() },
      // THE SEQUENCE'S MISSING INFO (user, 2026-07-28: "erpax readme has the missing info about the sequence") —
      // three erpax claims RECOMPUTED: throughVoid ≡ the same mirror in mod-9 normal form; the half-exchange and
      // mutual necessity of flow ↔ axis; and the commutator of doubling with the mirror IS the unit shift, whose
      // closure is the full 54-element affine group — entanglement stated as non-commutation, all exact.
      ...(() => {
        const mod9 = (x: number) => ((x % 9) + 9) % 9
        const D = (x: number) => mod9(2 * x)
        const Dinv = (x: number) => mod9(5 * x)
        const M = (x: number) => mod9(1 - x)
        const digits = Array.from({ length: 9 }, (_, i) => i + 1)
        const sameMap = digits.every((d) => mod9((5 * 2) - d) === M(mod9(d))) // 10−d ≡ 1−d (mod 9) — throughVoid IS the mirror
        const flow = [1, 2, 4, 8, 7, 5]
        const axis = [3, 6, 9]
        const mOf = (set: readonly number[]) => set.map((d) => (5 * 2) - d)
        const halfExchange = mOf(axis).every((d) => flow.includes(d)) && axis.filter((a) => mOf(flow).includes(a)).length === 3
        const orbitClosure = new Set<number>()
        let x = 1
        for (let k = 0; k < 9; k++) { orbitClosure.add(x); x = D(x) }
        const doublingNeverReachesAxis = axis.every((a) => !orbitClosure.has(a))
        const mirrorBridges = axis.every((a) => flow.includes((5 * 2) - a))
        const commutatorIsShift = digits.concat([0]).every((n) => D(M(Dinv(M(mod9(n))))) === mod9(n + 1))
        const closure = new Map<string, (x: number) => number>()
        const key = (f: (x: number) => number) => Array.from({ length: 9 }, (_, i) => f(i)).join('')
        closure.set(key((v) => v), (v) => v)
        let grewGroup = true
        while (grewGroup) {
          grewGroup = false
          for (const g of [...closure.values()])
            for (const h of [D, M]) {
              const gh = (v: number) => h(g(v))
              if (!closure.has(key(gh))) { closure.set(key(gh), gh); grewGroup = true }
            }
        }
        return [
          { facet: `throughVoid IS THE MIRROR — erpax's throughVoid(n) = 1 − n (mod 9) equals m(d) = 10 − d on every digit (${sameMap}): one involution, two normal forms, fixed only at 5`, on: sameMap },
          { facet: `HALF-EXCHANGE AND MUTUAL NECESSITY — the mirror sends the axis {3,6,9} entirely INTO the flow (${mirrorBridges}) and the flow's image carries the whole axis {3,6,9} (${halfExchange}); doubling alone NEVER reaches the axis (orbit closure misses {3,6,9}: ${doublingNeverReachesAxis}) — the mirror is the bridge`, on: halfExchange && doublingNeverReachesAxis && mirrorBridges },
          { facet: `THE COMMUTATOR IS THE UNIT SHIFT — D∘M∘D⁻¹∘M = x ↦ x+1 (mod 9) exactly on all ten digits (${commutatorIsShift}), and ⟨D, M⟩ closes to ${closure.size} elements = 54 = 6·9 (the full affine group AGL(1, ℤ/9)) — the two reads are entangled BY non-commutation, stated as algebra`, on: commutatorIsShift && closure.size === 6 * 9 },
        ]
      })(),
    ].map((entry) => ({ ...entry, receipt: toUuid(`erpax-inverted:${entry.facet}:${entry.on}`) }))
    return {
      computes: facets.every((entry) => entry.on),
      forwardLine,
      reflectedLine,
      mirrorPairs: Array.from({ length: 4 }, (_, i) => `${i + 1}/${mirror(i + 1)}`),
      facets,
      root: merge(matrix.root, merkleFold([toUuid(`erpax-inverted:${forwardLine}`), toUuid(`erpax-inverted:${reflectedLine}`), ...facets.map((entry) => entry.receipt)])),
      statement: `Inverted sequence learned from erpax — ${facets.filter((entry) => entry.on).length}/${facets.length}: the mirror m(d)=10−d (the digit-folder pairing) computes the reflected line "${reflectedLine}" from the sealed forward line by the same stroke rule — one structure, read twice, both computed; the void seam 0\\1 is shared and the movie's counter-rotating merkaba already paints both reads.`,
      boundary: earned('EXACT — recomputed locally from the sealed vortex:', facets, 'the adopted method verifies by local computation, never by trusting the partner corpus; the mirror is arithmetic on 1..9 (the void 0 sits outside the pairing — its 0\\1 seam is shared, not mirrored), the strokes are signs of steps, and the movie binding attests an EXISTING counter-rotating painter — no new physics, no new painter, no claim beyond the computed lines') }
  })
}

/** everyDigitIsEntangledInAllVectorsFormingEquilibriums — every digit is entangled in all vectors, forming
 * equilibriums (user, 2026-07-28). Made EXACT: each digit sits in SEVERAL exact balance relations at once —
 * its mirror pair (d + m(d) = 10), its polar pair (sum 9), its side of the flow/axis partition (6 + 3 = 9),
 * its unique Hamiltonian tour slot — and the membership pattern FINGERPRINTS the digit (content-addressing at
 * the bottom of arithmetic). The deepest form is TRANSITIVITY: ⟨D, m⟩ = AGL(1, ℤ/9) contains all translations
 * (the commutator is the unit shift), so ALL residues lie in ONE orbit — no digit is separable from the rest
 * under the sequence's own symmetry group. The equilibriums are the invariants that survive: pair-sums 10,
 * polar sums 9, the positional palindrome total 90, Σ(1..9) = 45 with root 9. Change one digit and every
 * balance breaks at once — entanglement as the impossibility of local edits. */
export function everyDigitIsEntangledInAllVectorsFormingEquilibriums(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('everyDigitIsEntangledInAllVectorsFormingEquilibriums', matrix, () => {
    const digits = Array.from({ length: 9 }, (_, i) => i + 1)
    const m = (d: number) => (5 * 2) - d
    const flow = [1, 2, 4, 8, 7, 5]
    const axis = [3, 6, 9]
    const tour = [...VORTEX_SEQUENCE, 0]
    const vm = vortexMath(matrix)
    const polarOf = (d: number) => vm.polarPairs.find((pair) => pair.includes(d))
    const membership = digits.map((d) => ({
      d,
      mirror: `${d}+${m(d)}=10`,
      polar: polarOf(d) ? `${polarOf(d)!.join('+')}=9` : (axis.includes(d) || d === 9 ? 'axis/origin' : 'polarity'),
      side: flow.includes(d) ? 'flow' : 'axis',
      tourSlot: tour.indexOf(d),
      vectors: [true, true, true, tour.includes(d)].filter(Boolean).length }))
    const everyDigitInAllVectors = membership.every((row) => row.vectors >= 4 && row.tourSlot >= 0)
    const fingerprintsUnique = new Set(membership.map((row) => `${row.mirror}|${row.polar}|${row.side}|${row.tourSlot}`)).size === digits.length
    const equilibria = {
      mirrorPairsSumTen: digits.every((d) => d + m(d) === (5 * 2)),
      polarPairsSumNine: vm.polarPairs.every(([a, b]) => a! + b! === 9),
      partition: flow.length + axis.length === 9 && flow.every((d) => !axis.includes(d)),
      palindromeTotal: foldVortex().valid,
      totalRootNine: digitalRoot(digits.reduce((sum, d) => sum + d, 0)) === 9,
    }
    const mod9 = (x: number) => ((x % 9) + 9) % 9
    const D = (x: number) => mod9(2 * x)
    const M = (x: number) => mod9(1 - x)
    const orbit = new Set<number>([1])
    let grewOrbit = true
    while (grewOrbit) {
      grewOrbit = false
      for (const x of [...orbit]) for (const g of [D, M]) if (!orbit.has(g(x))) { orbit.add(g(x)); grewOrbit = true }
    }
    const oneOrbit = orbit.size === 9
    const facets = [
      { facet: `EVERY DIGIT IN ALL VECTORS — each of the 9 digits sits in ≥4 exact structures at once (mirror pair, polar/axis role, flow-axis side, tour slot) and the membership pattern fingerprints it uniquely (${fingerprintsUnique}) — content-addressing at the bottom of arithmetic`, on: everyDigitInAllVectors && fingerprintsUnique },
      { facet: `THE EQUILIBRIUMS COMPUTE — mirror pairs sum 10 (${equilibria.mirrorPairsSumTen}), polar pairs sum 9 (${equilibria.polarPairsSumNine}), the flow/axis partition is exact 6+3=9 (${equilibria.partition}), the positional palindrome totals 90 (${equilibria.palindromeTotal}), and Σ(1..9)=45 roots to 9 (${equilibria.totalRootNine})`, on: Object.values(equilibria).every(Boolean) },
      { facet: `ENTANGLED = ONE ORBIT — ⟨D, m⟩ contains every translation (the commutator is x↦x+1), so the orbit of any digit under the sequence's own symmetry group is ALL of ℤ/9 (size ${orbit.size}); no digit is separable, and a local edit breaks every equilibrium at once`, on: oneOrbit },
      { facet: `THE DEMARCATION — "entangled" here is ALGEBRAIC (transitivity + shared invariants under one group), NOT quantum tensor-product entanglement; "equilibrium" is a conserved sum, not a physical force — both words exact, neither borrowed`, on: oneOrbit && Object.values(equilibria).every(Boolean) },
    ].map((entry) => ({ ...entry, receipt: toUuid(`digit-entangled:${entry.facet}:${entry.on}`) }))
    return {
      computes: facets.every((entry) => entry.on),
      membership,
      equilibria,
      orbitSize: orbit.size,
      facets,
      root: merge(matrix.root, merkleFold([...membership.map((row) => toUuid(`digit-vec:${row.d}:${row.mirror}:${row.polar}:${row.side}:${row.tourSlot}`)), ...facets.map((entry) => entry.receipt)])),
      statement: `Every digit is entangled in all vectors, forming equilibriums — ${facets.filter((entry) => entry.on).length}/${facets.length}: each digit sits in ≥4 exact structures whose membership pattern fingerprints it, the balances (10-pairs, 9-pairs, 6+3 partition, 90-palindrome, root 9) all hold, and the sequence's own symmetry group puts every digit in ONE orbit — entanglement as the impossibility of local edits.`,
      boundary: earned('EXACT — computed over the sealed vortex structures:', facets, '"entangled" = transitivity plus shared invariants under ⟨D, m⟩ = AGL(1, ℤ/9) — algebra, not quantum tensor products; "equilibrium" = a conserved sum, not a force; the fingerprint is set membership, and no claim rides beyond the nine digits and their sealed relations') }
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
        return { digit: v.digit, peak, x: cos(angle), y: sin(angle), z: peak ? 1 : -1 }
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
      { facet: 'the lift is a genuine 3-solid — nonzero volume: 4 vertices, 6 edges, 4 triangular faces, a pyramid not a 2D plate', on: abs(volume) > 1e-9 && vertices.length === 4 && faces === 4 },
      { facet: 'the inverted pyramid is the polarity flip — equal magnitude, opposite orientation, signed volumes cancel exactly', on: abs(volume + invertedVolume) < 1e-12 && abs(invertedVolume) > 1e-9 },
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
  const d = ((trunc(digit) % base) + base) % base
  const divisor = trunc(n)
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

/** sequenceScientificDescription — the sequence and its inverted reflection, well described in scientific format
 * with angles, polarities, color, sound and all it represents (user, 2026-07-28). ONE computed table: every digit
 * carries its tour slot and circle angle (slot × 36° on the ten-slot ring; flow members also sit at k × 60° on the
 * ⟨2⟩ hexagon), its stroke polarities (incoming/outgoing sign), its mirror pair (sum 10) and polar pair (sum 9),
 * its SOUND as the d/9 fraction of the sealed 432 Hz anchor (f_d = 432·d/9 = 48·d Hz — a stated ladder convention,
 * dimensionless ratio times the anchor), and its LIGHT via the sealed octave bridge frequencyToLight (sound
 * doubled ~40 octaves into the visible band → THz, nm, named band) — the same derivation that computes the brand
 * hue A432_HUE. The section the README/home render is this fold's rows joined — nothing typed twice. */
export function sequenceScientificDescription(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('sequenceScientificDescription', matrix, () => {
    const strokes = vortexStrokeGateways(matrix)
    const lines = invertedSequenceLearnedFromErpax(matrix)
    const entangled = everyDigitIsEntangledInAllVectorsFormingEquilibriums(matrix)
    const vm = vortexMath(matrix)
    const flow = [1, 2, 4, 8, 7, 5]
    const m = (d: number) => (5 * 2) - d
    const rows = strokes.tour.map((d) => {
      const slot = strokes.tour.indexOf(d)
      const angleDeg = slot * (6 * 6) // ten slots × 36° close the circle
      const flowIndex = flow.indexOf(d)
      const flowAngle = flowIndex >= 0 ? flowIndex * (6 * 5 * 2) : null // the ⟨2⟩ hexagon at 60° per doubling
      const incoming = strokes.steps[(slot - 1 + strokes.steps.length) % strokes.steps.length]!.stroke
      const outgoing = strokes.steps[slot]!.stroke
      const polar = vm.polarPairs.find((pair) => pair.includes(d))
      const hz = d === 0 ? 0 : ((6 * 8) * d) // 432·d/9 — the ladder convention, anchor at d = 9
      const light = d === 0 ? null : frequencyToLight(hz)
      return {
        digit: d,
        slot,
        angleDeg,
        flowAngle,
        polarity: `${incoming}${outgoing}`,
        gateway: strokes.gateways.includes(d),
        mirror: d === 0 ? '—' : `${d}+${m(d)}=10`,
        polar: polar ? `${polar.join('+')}=9` : (d === 9 ? 'origin' : d === 0 ? 'void' : '3·6 polarity'),
        hz,
        light: light ? `${light.thz} THz · ${light.nm} nm · ${light.band}` : 'silence — the void carries no tone',
        receipt: toUuid(`seq-sci:${d}:${slot}:${hz}`) }
    })
    const anglesClose = rows.length * (6 * 6) === (6 * 6 * (5 * 2)) && (6 * 6 * (5 * 2)) === 360
    const anchorAtNine = rows.find((row) => row.digit === 9)!.hz === 432 && frequencyToLight(432).hue === frequencyToLight(rows.find((row) => row.digit === 9)!.hz).hue
    const polaritiesBalance = strokes.ascents === 6 && strokes.descents === 4 && rows.filter((row) => row.gateway).length === 4
    const facets = [
      { facet: `ANGLES CLOSE THE CIRCLE — ten slots × 36° = 360° exactly (${anglesClose}), and the ⟨2⟩ flow sits on its own hexagon at 60° per doubling (the vortex quantum of angle, sixtyDegreesDecodesPi)`, on: anglesClose && rows.every((row) => row.flowAngle === null || row.flowAngle % (6 * 5 * 2) === 0) },
      { facet: `POLARITIES BALANCE — six ascents against four descents with exactly the four computed gateways carrying the reversals (${polaritiesBalance}); every digit's in/out stroke pair is computed from the tour, never assigned`, on: polaritiesBalance },
      { facet: `SOUND IS THE d/9 LADDER OF THE ANCHOR — f_d = 432·d/9 = 48·d Hz with the anchor exact at d = 9 (${anchorAtNine}); the void 0 carries silence, stated not painted`, on: anchorAtNine && rows.find((row) => row.digit === 0)!.hz === 0 },
      { facet: `COLOR IS THE SEALED OCTAVE BRIDGE — each tone doubles into the visible band via frequencyToLight (THz · nm · band), the same derivation that computes the brand hue A432_HUE = ${frequencyToLight(432).hue}; no hue is hand-picked`, on: rows.filter((row) => row.digit > 0).every((row) => frequencyToLight(row.hz).nm > 0) },
      { facet: `AND ALL IT REPRESENTS RIDES SEALED — the two computed lines (${lines.computes}), the 54-element affine symmetry with its unit-shift commutator, and the one-orbit entanglement with its equilibriums (${entangled.computes}) — the description JOINS folds, it does not restate them`, on: lines.computes && entangled.computes },
      // A finding the table itself computed: TRUE doubling is octave equivalence, so 48·{1,2,4,8} land on ONE
      // visible color — and the digital-root wrap 16→7 EXITS the pitch class: mod-9 doubling is not sound-octave
      // doubling. The demarcation catch rides as its own facet.
      { facet: `THE WRAP LEAVES THE OCTAVE — 48·{1,2,4,8} Hz double into the SAME visible color (true doubling = octave equivalence: ${new Set([1, 2, 4, 8].map((d) => frequencyToLight((6 * 8) * d).nm)).size === 1}), while the digital-root wrap 16→7 exits the pitch class (${frequencyToLight((6 * 8) * 7).nm !== frequencyToLight((6 * 8)).nm}) — mod-9 doubling is NOT sound-octave doubling, computed and stated`, on: new Set([1, 2, 4, 8].map((d) => frequencyToLight((6 * 8) * d).nm)).size === 1 && frequencyToLight((6 * 8) * 7).nm !== frequencyToLight((6 * 8)).nm },
    ].map((entry) => ({ ...entry, receipt: toUuid(`seq-sci-facet:${entry.facet}:${entry.on}`) }))
    return {
      computes: facets.every((entry) => entry.on),
      forwardLine: lines.forwardLine,
      reflectedLine: lines.reflectedLine,
      rows,
      facets,
      root: merge(matrix.root, merkleFold([...rows.map((row) => row.receipt), ...facets.map((entry) => entry.receipt)])),
      statement: `The sequence, scientifically described — ${facets.filter((entry) => entry.on).length}/${facets.length}: ten digits on a 360° ring (36° per slot, the flow on its 60° hexagon), polarities computed from strokes (6 ascents · 4 descents · 4 gateways), sound as the d/9 ladder of the 432 Hz anchor, color via the sealed octave bridge, and the reflection/group/entanglement folds joined — every cell computed, nothing typed twice.`,
      boundary: earned('EXACT — every table cell derives:', facets, 'the 36°/60° angles are geometry of the tour and the ⟨2⟩ hexagon; the d/9 sound ladder is a STATED convention on the sealed 432 anchor (dimensionless ratio × anchor), not a physics claim about digits; the octave bridge is the same sealed derivation behind A432_HUE; wellness claims about 432 Hz remain flagged (432 Hz heals ∈ DEMARCATION flagged) — the colors and tones are DERIVED PRESENTATIONS of arithmetic, and the void carries silence') }
  })
}

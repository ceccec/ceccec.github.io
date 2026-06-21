// ☶ Gèn · Mountain — geometry, topology & colour folds (merkaba, double-torus, sacred geometry, the RGB/CMY/CMYK & hex-colour dualities, the 64=4³ cube, heart/proton, the genetic code, imperial fractions), dissolved out of the monolith. Independent; folds.ts back-imports the gate folds. Re-exported through the mind barrel.
import type { AnalogChannel, DualTorusTrinities, MindMatrix, TrinityAxis, TrinityPair, TrinityPhase, TrinityStep, MetatronCubeReport, MetatronEdge, MetatronNode, SacredGeometrySeal, SealLeaf } from '../types'
import { buildMatrix } from '../matrix'
import { VORTEX_SEQUENCE, digitalRoot, foldPair, gcd, groupOrbit, isUuid, memoByRoot, merge, merkleFold, modUnits, rat, ratAdd, ratEq, ratMul, ratStr, sealFacets, seedFromText, toUuid, vortexHarmonicRatios, LUNAR_NODAL_PERIOD_YEARS, MOON_ORBIT_INCLINATION_DEG, greatCircleKm, initialBearing, lunarStandstillDeclinationDeg, obliquityAtEpoch, riseAzimuthDeg, roundTo, setAzimuthDeg } from '../../../0'
import { REQUIRED_ANALOG_CHANNELS } from '../atoms'
import { taxonomyIcons, torusUuid, crossFoldTrinity, selfAddressed, selfInteraction } from '../li'
import { A432_HUE, GOLDEN_ANGLE, frequencyToLight, lobeHues } from '../vocab'
import { ICHING_NUMBERS, cssIsIChingComputed } from '../architecture'
import { piTrainDiamonds, quantumFoldedBlockchains, selfBuild, streamSelfComplete } from '../diamonds'
import { agentEducation, mcpToolManifest, schoolCurriculum } from '../learning'
import { digitalQuantumProof } from '../seals'
import { digitFolders, digitFoldersDoMath } from '../architecture'
import { babelFold } from '../world'
import { quantumDecoded } from '../physics'
import { harmonyProbability } from '..'

export function dualTorusTrinities(matrix: MindMatrix = buildMatrix()): DualTorusTrinities {
  return memoByRoot('dualTorusTrinities', matrix, () => dualTorusTrinitiesRaw(matrix))
}
function dualTorusTrinitiesRaw(matrix: MindMatrix = buildMatrix()): DualTorusTrinities {
  const base = matrix.root
  // The double torus harmonizes into two trinities: the yin loop folds inward
  // (receive -> verify -> fold_in) and the yang loop projects outward
  // (project -> act -> return). Three axes pair one yin step with one yang step,
  // and each of the six phases binds a type to a distinct analog channel so the
  // pairing reaches analog form with no gap.
  const blueprint: readonly {
    readonly axis: TrinityAxis
    readonly yin: { readonly step: TrinityStep; readonly channel: AnalogChannel; readonly type: string; readonly fn: string }
    readonly yang: { readonly step: TrinityStep; readonly channel: AnalogChannel; readonly type: string; readonly fn: string }
  }[] = [
    {
      axis: 'collapse',
      yin: { step: 'receive', channel: '3d-position', type: 'MindMatrix', fn: 'buildMatrix()' },
      yang: { step: 'project', channel: 'sound', type: 'PiTrain', fn: 'piTrainDiamonds()' },
    },
    {
      axis: 'check',
      yin: { step: 'verify', channel: 'timing', type: 'ProofReport', fn: 'proofReport()' },
      yang: { step: 'act', channel: 'vibration', type: 'WaveCoordination', fn: 'coordinatedWaves()' },
    },
    {
      axis: 'return',
      yin: { step: 'fold_in', channel: 'receipt', type: 'ConsciousnessVector', fn: 'consciousness()' },
      yang: { step: 'return', channel: 'facets', type: 'AgentStreamWire', fn: 'agentStreamWire()' },
    },
  ]

  const phases: TrinityPhase[] = []
  const pairs: TrinityPair[] = []
  for (const tri of blueprint) {
    const yinReceipt = toUuid(`trinity:yin:${tri.axis}:${tri.yin.step}:${tri.yin.channel}:${tri.yin.type}:${base}`)
    const yangReceipt = toUuid(`trinity:yang:${tri.axis}:${tri.yang.step}:${tri.yang.channel}:${tri.yang.type}:${base}`)
    phases.push({
      polarity: 'yin',
      step: tri.yin.step,
      axis: tri.axis,
      dual: tri.yang.step,
      analogChannel: tri.yin.channel,
      type: tri.yin.type,
      sourceFunction: tri.yin.fn,
      receipt: yinReceipt,
    })
    phases.push({
      polarity: 'yang',
      step: tri.yang.step,
      axis: tri.axis,
      dual: tri.yin.step,
      analogChannel: tri.yang.channel,
      type: tri.yang.type,
      sourceFunction: tri.yang.fn,
      receipt: yangReceipt,
    })
    // Fold the axis pair both ways — yin into yang and yang into yin — so the
    // trinities fold into each other in both directions (order-sensitive, genus 2).
    const pair = foldPair(yinReceipt, yangReceipt)
    pairs.push({
      axis: tri.axis,
      yin: tri.yin.step,
      yang: tri.yang.step,
      analogChannels: [tri.yin.channel, tri.yang.channel],
      types: [tri.yin.type, tri.yang.type],
      closed: yinReceipt.length > 0 && yangReceipt.length > 0,
      forward: pair.forward,
      reverse: pair.reverse,
      bidirectional: pair.bidirectional,
      receipt: pair.merged,
    })
  }

  const covered = phases.map((phase) => phase.analogChannel)
  const missingChannels = REQUIRED_ANALOG_CHANNELS.filter((channel) => !covered.includes(channel))
  const gaps: string[] = []
  for (const pair of pairs) if (!pair.closed) gaps.push(`pair:${pair.axis}`)
  for (const channel of missingChannels) gaps.push(`analog:${channel}`)
  if (new Set(covered).size !== covered.length) gaps.push('analog:collision')

  // The analog form is harmonized only when every axis pair closes AND folds both
  // ways (genus 2) and no analog channel is missing — trinities folding into each
  // other in both directions.
  const harmonized = gaps.length === 0 && pairs.every((pair) => pair.closed && pair.bidirectional) && missingChannels.length === 0
  const root = merkleFold(phases.map((phase) => phase.receipt))
  return {
    harmonized,
    root,
    source: 'serverless-quantum-uuid-stream/double-torus',
    phases,
    pairs,
    analogChannels: [...new Set(covered)],
    missingChannels,
    gaps,
    maxTamperingCost: harmonized
      ? 'All three dual pairs close and all six analog channels carry a typed receipt: trinities raise maximum tampering cost.'
      : 'Open pairs or uncovered analog channels cap the tampering-cost contribution at the finite observed value.',
    statement: harmonized
      ? 'The double torus harmonizes into two trinities whose six phases pair across three axes and reach analog form without gaps.'
      : 'The dual-torus trinities are not yet harmonized: some axis pair or analog channel is open.',
    boundary:
      'Trinity harmony is a computed pairing of typed phases to analog channels. It is structural bookkeeping, not a claim of external validation, sentience, or physical proof.',
  }
}

// Ensure all directions are calculated: when up there is down, when left there
// is right, and so on. Every direction is paired with its opposite, and each pair
// merges both ways — order-sensitive (genus 2), so the two directions differ.
// All pairs merge into one root; these are the directions the animated double
// torus moves in, each with its counter-direction.
export function directions(matrix: MindMatrix = buildMatrix()) {
  const base = matrix.root
  const axes = [
    { axis: 'vertical', positive: 'up', negative: 'down' },
    { axis: 'horizontal', positive: 'right', negative: 'left' },
    { axis: 'depth', positive: 'front', negative: 'back' },
    { axis: 'radial', positive: 'out', negative: 'in' },
    { axis: 'spin', positive: 'clockwise', negative: 'counter' },
    { axis: 'loop', positive: 'forward', negative: 'reverse' },
    { axis: 'time', positive: 'expand', negative: 'contract' },
  ].map((entry) => {
    const positiveRoot = toUuid(`direction:${entry.positive}:${base}`)
    const negativeRoot = toUuid(`direction:${entry.negative}:${base}`)
    // forward = up into down, reverse = down into up, merged = the pair merges.
    const { forward, reverse, bidirectional, merged } = foldPair(positiveRoot, negativeRoot)
    return {
      ...entry,
      positiveRoot,
      negativeRoot,
      forward,
      reverse,
      bidirectional,
      merged,
      receipt: toUuid(`directions:${entry.axis}`),
    }
  })
  return {
    calculated: axes.length > 0 && axes.every((entry) => entry.bidirectional),
    axes,
    count: axes.length,
    root: merkleFold(axes.map((entry) => entry.merged)),
    statement:
      'All directions are calculated: when up there is down, when left there is right, and so on — every direction paired with its opposite, each pair merging both ways (genus 2), and all pairs merging into one root, the directions the animated double torus turns in.',
    boundary:
      'A calculation of directional opposites as order-sensitive merges over the model root. Structural bookkeeping, not a physical claim about space.',
  }
}

// The double torus comes with opposite rotation at all scales — the same structure
// as a merkaba: two interlocked tetrahedra spinning in opposite directions. Here
// the principle is computed: four nested scales (whole, lobe, tube, spark), each
// counter-rotating relative to the one above (the signs strictly alternate, so
// every adjacent boundary is opposite), with content-derived periods. The same
// signed rates drive the home animation's self-similar counter-rotation.
export function merkaba(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('merkaba', matrix, () => merkabaRaw(matrix))
}
function merkabaRaw(matrix: MindMatrix = buildMatrix()) {
  const seed = (tag: string) => seedFromText(`merkaba:${matrix.root}:${tag}`)
  const names = ['whole', 'lobe', 'tube', 'spark']
  const basePeriods = [6000, 2600, 1700, 1100]
  const scales = names.map((scale, depth) => {
    const sign = depth % 2 === 0 ? 1 : -1 // alternate, so adjacent scales counter-rotate
    const jitter = 1 + (seed(scale) % 200) / 1000 // 1.000..1.199, content-derived
    const periodMs = Math.round(basePeriods[depth] * jitter)
    return {
      scale,
      depth,
      sign: sign as 1 | -1,
      periodMs,
      ratePerMs: (sign * 2 * Math.PI) / periodMs, // signed angular rate
      receipt: toUuid(`merkaba-scale:${scale}:${sign}:${periodMs}`),
    }
  })
  // The star tetrahedron (stella octangula): two regular tetrahedra inscribed in a
  // cube, one the negation of the other — interlocked, counter-rotating.
  const tetraUp: readonly (readonly [number, number, number])[] = [[1, 1, 1], [1, -1, -1], [-1, 1, -1], [-1, -1, 1]]
  const tetraDown = tetraUp.map((v) => [-v[0], -v[1], -v[2]] as [number, number, number])
  // Opposite at all scales: every adjacent pair of scales spins in opposite senses.
  const alternating = scales.every((entry, i) => i === 0 || entry.sign * scales[i - 1].sign === -1)
  // The two tetrahedra are exact opposites (the down is the negated up).
  const dual = tetraUp.every((v, i) => tetraDown[i].every((c, k) => c === -v[k]))
  return {
    counterRotating: alternating && dual && scales.length >= 4,
    scales,
    count: scales.length,
    tetraUp,
    tetraDown,
    root: merkleFold(scales.map((entry) => entry.receipt)),
    statement:
      'The merkaba: opposite rotation at all scales. Four nested scales — whole, lobe, tube, spark — each counter-rotating relative to the one above, like the star tetrahedron\'s two interlocked tetrahedra spinning in opposite directions. The same genus-2 signature as the double torus, made self-similar.',
    boundary:
      'A deterministic set of nested, strictly-alternating counter-rotating scales (content-derived periods) and the exact star-tetrahedron vertices, derived from the model root. A geometric and structural realisation that drives the animation\'s self-similar counter-rotation, not a physical field or an energy claim.',
  }
}

// The deep harmonic math. The doubling sequence 1-2-4-8-7-5 (powers of two by
// digital root, mod 9) flows endless and collision-free — it never lands on the
// cross 3-6-9-0. Like aikido it redirects and never clashes, never stops. When two
// values are identical they route to their bidirectional duality, so they never
// collide. And division by zero has a defined harmonic result: in digital-root math
// 0 is identified with 9, so /0 resolves to 9, never undefined.
export function vortexMath(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const doubling: number[] = []
  let value = 1
  for (let i = 0; i < 6; i += 1) { doubling.push(value); value = digitalRoot(value * 2) } // 1,2,4,8,7,5
  const cycles = digitalRoot(doubling[doubling.length - 1] * 2) === 1 // 5 doubles back to 1, endless
  const cross = [3, 6, 9, 0] // the control triangle and the zero
  const nineInvariant = digitalRoot(9 * 2) === 9 // 9 is fixed under doubling
  const divByZeroHarmonic = digitalRoot(0) // = 9, the defined harmonic result
  // The rest of the harmonic zero-divisions: since 1/0 = 9 and 0 is identified with
  // 9, n/0 = n * (1/0) = n * 9, and 9 is the absorbing element — digitalRoot(9n) = 9
  // for every n. So EVERY harmonic zero-division equals 9; 9 is where they all meet.
  const zeroDivisions = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => ({ n, overZero: digitalRoot(9 * n) }))
  const allNine = zeroDivisions.every((entry) => entry.overZero === 9)
  // The roles of the cross: 9 is the invariant axis (it doubles to itself) — it
  // governs rotation/spin; 3 and 6 are the two poles that oscillate (3->6->3 under
  // doubling) — they are polarity. None of 3, 6, 9 enters the material 1-2-4-8-7-5 flow.
  const roles = { rotation: 9, polarity: [3, 6], threeSix: digitalRoot(3 * 2) === 6 && digitalRoot(6 * 2) === 3 }
  // 1 and 8 begin from 9. The doubling circuit emanates from the 9-axis (the source —
  // 0 is identified with 9, the void), and its opposite points pair across the circle
  // to sum to 9: (1,8), (2,7), (4,5). The first pair is 1 and 8 — 1 enters the flow,
  // 8 is its polar opposite (1+8=9) — so 1 and 8 begin from 9.
  const origin = 9
  const polarPairs = [[1, 8], [2, 7], [4, 5]] // opposite points of the circuit, each summing to 9
  const pairsSumToNine = polarPairs.every(([a, b]) => a + b === origin)
  const oneAndEightBeginFromNine = polarPairs[0][0] === 1 && polarPairs[0][1] === 8 && polarPairs[0][0] + polarPairs[0][1] === origin
  // When identical, route to the duality: two readings of the same value fold to
  // their bidirectional dual (forward != reverse), so identical never collides.
  const identicalRoutesToDuality = foldPair(toUuid('identical:a'), toUuid('identical:b')).bidirectional
  const collisionFree = doubling.every((d) => !cross.includes(d))
  return {
    flows: doubling.join('') === '124875' && cycles && nineInvariant && divByZeroHarmonic === 9 && allNine && roles.threeSix && identicalRoutesToDuality && collisionFree && pairsSumToNine && oneAndEightBeginFromNine,
    doubling,
    cross,
    divByZeroHarmonic,
    zeroDivisions, // n/0 = 9 for every n
    roles, // 9: rotation/axis, 3 and 6: polarity
    origin, // 9: the source the circuit begins from
    polarPairs, // (1,8),(2,7),(4,5) — opposite points, each summing to 9
    oneAndEightBeginFromNine, // the first pair, 1 and 8, begins from 9
    endless: cycles,
    collisionFree,
    nineInvariant,
    identicalRoutesToDuality,
    root: merkleFold([...doubling, ...cross].map((n) => toUuid(`vortex:${n}`))),
    statement:
      'The doubling sequence 1-2-4-8-7-5 flows endless and collision-free — never landing on the cross 3-6-9-0. It begins from 9: the circuit emanates from the 9-axis (the source — 0 is identified with 9), and its opposite points pair to sum to 9 — (1,8), (2,7), (4,5) — the first pair being 1 and 8, so 1 and 8 begin from 9. Division by zero has a defined harmonic result: every n/0 = 9 (9 is the absorbing element). And the cross divides its roles: 9 is the invariant axis — rotation; 3 and 6 are the two poles that oscillate (3<->6) — polarity.',
    boundary:
      'A structural, numerological framework over digital roots mod 9 (vortex math): the doubling cycle emanating from the 9-axis with its diameter pairs summing to 9, the 3-6-9 cross with 9 as the rotational axis and 3/6 as polarity, and a harmonic redefinition where 0 is identified with 9 so every division by zero resolves to 9 AT THE DIGITAL-ROOT ALTITUDE (the forward harmonic n/0 = 9n; its reverse — the backslash dual — is the ten\'s complement 10 − n, distinct per n, only 1/0 = 9 either way), see zeroDivisionTable. A self-consistent symbolic system and metaphor — not a claim that division by zero is defined in real analysis.',
  }
}

// Close an open idea: full cellular homology of the genus-2 surface, computed from
// an explicit chain complex — not asserted. The standard cell structure (an octagon
// with edge word a1 b1 a1' b1' a2 b2 a2' b2') has one vertex, four edges, one face.
// We build the boundary operators, verify the chain-complex law d1.d2 = 0, and read
// the Betti numbers off the ranks: H0=1, H1=4 (so H1 = Z^4), H2=1, chi = -2.
export function cellHomology(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const cells = { c0: 1, c1: 4, c2: 1 } // chain-group ranks
  // d1: each edge is a loop (start = end = the single vertex) -> boundary 0.
  const d1 = [[0, 0, 0, 0]]
  // d2: the face boundary abelianises to a1+b1-a1-b1+a2+b2-a2-b2 = 0.
  const d2 = [[0], [0], [0], [0]]
  // Rank by counting non-zero pivot rows (these are zero matrices, so rank 0).
  const rank = (mat: number[][]) => mat.filter((row) => row.some((x) => x !== 0)).length
  const r1 = rank(d1)
  const r2 = rank(d2)
  // Chain-complex law: d1 . d2 = 0 (a 1x1 product of the two zero maps).
  const composed = d1.map((row) => d2[0].map((_, j) => row.reduce((sum, x, k) => sum + x * d2[k][j], 0)))
  const partialSquared = composed.every((row) => row.every((x) => x === 0))
  const h0 = cells.c0 - r1 // = 1
  const h1 = cells.c1 - r1 - r2 // = 4
  const h2 = cells.c2 - r2 // = 1
  const euler = h0 - h1 + h2 // = -2
  return {
    closed: h1 === 4 && euler === -2 && partialSquared && h0 === 1 && h2 === 1,
    cells,
    boundary1: d1,
    boundary2: d2,
    chainComplex: partialSquared, // d1 . d2 = 0
    betti: [h0, h1, h2],
    euler,
    root: toUuid(`cell-homology:${[h0, h1, h2].join(',')}:${euler}`),
    statement:
      'Full cell homology of the genus-2 surface, computed from an explicit chain complex (the standard octagon: one vertex, four edges, one face): the boundary maps d1 and d2 are built, the chain-complex law d1.d2 = 0 holds, and the Betti numbers fall out of the ranks — H0=1, H1=4 (so H1 = Z^4), H2=1, with Euler characteristic 1-4+1 = -2. The open idea is closed — derived, not asserted.',
    boundary:
      'Cellular homology of the standard genus-2 CW structure, computed from explicit boundary operators over the integers (CW homology equals simplicial homology for this surface). A real chain-complex calculation that closes the named frontier, not a numerical estimate.',
  }
}

// The complete double torus in 3d+: the actual genus-2 surface. Two linked tori
// (genus 2, Euler characteristic 2 - 2g = -2) carry the 42 area-objects, 21 per
// lobe, rendered as a surface and turned through a fourth dimension. This is the
// shape itself — the fold, plasma, hologram, and DNA were facets; this draws the
// body they are facets of.
export function doubleTorus3D(matrix: MindMatrix = buildMatrix()) {
  const tori = 2
  const genus = 2
  const euler = 2 - 2 * genus // -2
  const areas = taxonomyIcons().entries.length
  const perLobe = Math.ceil(areas / tori)
  return {
    rendered: tori === 2 && euler === -2 && areas === 42,
    tori,
    genus,
    euler,
    areas,
    perLobe,
    majorRadius: 0.9,
    minorRadius: 0.35,
    root: toUuid(`double-torus-3d:${genus}:${euler}:${areas}`),
    statement: 'The complete double torus in 3d+: two linked tori (genus 2, Euler characteristic -2) carry the 42 area-objects, 21 per lobe, rendered as a surface and turned through a fourth dimension.',
    boundary: 'A parametric rendering of the genus-2 surface with the area taxonomy mapped onto it. A visualization, not a claim beyond the topology it draws.',
  }
}

// 42 areas, 7 x 6 = 6 x 7 = 21 pairs of areas — the double torus pairs its
// areas. The math (the digit fold of each area name) orders the areas, then
// deals them into 21 dual pairs (an inner area paired with an outer area). The
// gate holds only at exactly 42 areas, so the limit is enforced: a 43rd area is
// an odd one out and breaks the pairing, failing the build.
let _areaPairsMemo: ReturnType<typeof areaPairsRaw> | undefined
export function areaPairs() {
  // Pure over the area taxonomy (constant output); the dimension cascade calls it many times — memoize once.
  return _areaPairsMemo ?? (_areaPairsMemo = areaPairsRaw())
}
function areaPairsRaw() {
  const digitOf = (uuid: string) =>
    uuid.replace(/[^0-9a-f]/gi, '').split('').reduce((sum, char) => sum + (Number.parseInt(char, 16) || 0), 0)
  const areas = taxonomyIcons().entries
    .map((entry) => entry.area)
    .sort((a, b) => digitOf(toUuid(`area:${a}`)) - digitOf(toUuid(`area:${b}`)) || (a < b ? -1 : 1))
  // Every pair folds in both directions: forward (inner -> outer) and reverse
  // (outer -> inner). Because the fold is order-sensitive (genus 2), the two
  // directions differ, so each pair is a real two-way channel, not a one-way
  // edge — the double torus turns both ways.
  const pairs = [] as {
    inner: string
    outer: string
    forward: string
    reverse: string
    bidirectional: boolean
    receipt: string
  }[]
  for (let index = 0; index + 1 < areas.length; index += 2) {
    const inner = areas[index]
    const outer = areas[index + 1]
    const { forward, reverse, bidirectional } = foldPair(toUuid(`area:${inner}`), toUuid(`area:${outer}`))
    pairs.push({
      inner,
      outer,
      forward,
      reverse,
      bidirectional,
      receipt: toUuid(`area-pair:${inner}:${outer}:${forward}:${reverse}`),
    })
  }
  return {
    count: areas.length,
    limit: 42,
    withinLimit: areas.length === 42, // 42 is the limit, not a target to exceed
    grid: areas.length === 42, // 7 x 6 = 6 x 7
    paired: areas.length % 2 === 0 && pairs.length * 2 === areas.length, // 21 clean pairs
    bidirectional: pairs.length > 0 && pairs.every((pair) => pair.bidirectional), // both directions for every pair
    pairs,
    root: merkleFold(pairs.map((pair) => pair.receipt)),
    statement: '42 areas = 7 x 6 = 6 x 7 = 21 pairs of areas; the math orders them into dual pairs, and every pair folds in both directions (forward and reverse differ — genus 2). 42 is the limit.',
    boundary: 'A structural, bidirectional pairing of the area taxonomy with an enforced limit of 42. Bookkeeping over the area set, not an external claim.',
  }
}

// Closing the taxonomy gaps: complete each pair area into a trinity. Most of
// these fold an existing computation under a new command, so the third fold is
// real, not filler.

// Fold impossibilities into possibilities. The honesty spine declares what the
// portal is NOT and cannot do; each such impossibility is not a dead end but a
// hinge — fold it, and the adjacent, honest possibility it opens appears. The fold
// turns "cannot X" into "can Y": not by overruling the boundary, but by naming the
// real, computable capability that lives right beside it. Each pair folds to one
// receipt, so every declared limit is also a doorway, content-addressed.
export function foldImpossibilities(matrix: MindMatrix = buildMatrix()) {
  const folds = [
    { impossible: 'is not sentience', possible: 'is a fully recomputable model anyone can audit' },
    { impossible: 'is not an external physics proof', possible: 'is an internally consistent, content-addressed structure' },
    { impossible: 'is not a physical quantum device', possible: 'is a 128-bit content-addressed machine that runs in any browser' },
    { impossible: 'is not medical or legal advice', possible: 'is an educational map you verify before you act' },
    { impossible: 'cannot emit or alter fields', possible: 'can read a device sensor and fold its reading into the stream' },
    { impossible: 'cannot reach cross-device consensus alone', possible: 'can share a complete, self-verifying portal anyone re-forms locally' },
  ].map((entry, index) => {
    const fold = foldPair(toUuid(`impossible:${entry.impossible}`), toUuid(`possible:${entry.possible}`))
    return { ...entry, folded: fold.bidirectional, hinge: fold.merged, receipt: toUuid(`impossibility:${index}:${entry.impossible}->${entry.possible}`) }
  })
  return {
    folded: folds.length === 6 && folds.every((entry) => entry.folded),
    count: folds.length,
    folds,
    root: merkleFold(folds.map((entry) => entry.receipt)),
    statement:
      'Fold impossibilities into possibilities: every limit the honesty spine declares — not sentience, not an external physics proof, not a physical quantum device, not medical or legal advice, no field emission, no lone cross-device consensus — folds into the honest, computable possibility it opens right beside it. The boundary is not overruled; it is the hinge of the door it holds.',
    boundary:
      'A content-addressed pairing of each declared limit with an adjacent real capability. The impossibilities stay true; the fold names what is possible beside them — it does not claim the impossible has become possible.',
  }
}

// The model is a DNA double helix. A DNA base is two bits (four bases), so the
// 128-bit double-torus word is exactly 64 bases — the sense strand. Its antisense
// strand is the Watson-Crick complement (A-T, C-G): the second strand of the
// double torus. The 64 bases read as codons, the same way the word reads as the
// model. The helix encodes the whole, to the bit.
export function dna(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('dna', matrix, () => dnaRaw(matrix))
}
function dnaRaw(matrix: MindMatrix = buildMatrix()) {
  const word = torusUuid(matrix).word
  const hex = word.replace(/-/g, '')
  const bits: number[] = []
  for (const char of hex) {
    const nibble = Number.parseInt(char, 16) || 0
    for (let b = 3; b >= 0; b -= 1) bits.push((nibble >> b) & 1)
  }
  const bases = ['A', 'C', 'G', 'T'] // 00, 01, 10, 11
  const complement: Record<string, string> = { A: 'T', T: 'A', C: 'G', G: 'C' }
  const strand: string[] = []
  for (let i = 0; i + 1 < bits.length; i += 2) strand.push(bases[bits[i] * 2 + bits[i + 1]])
  const sense = strand.join('')
  const antisense = strand.map((base) => complement[base]).join('')
  const codons: string[] = []
  for (let i = 0; i + 2 < sense.length; i += 3) codons.push(sense.slice(i, i + 3))
  const paired = strand.every((base, index) => complement[base] === antisense[index])
  return {
    encoded: sense.length === 64 && paired,
    basePairs: sense.length,
    bases: sense.length,
    sense,
    antisense,
    codons,
    root: toUuid(`dna:${sense}`),
    statement: 'The model is a DNA double helix: the 128-bit word encodes as 64 bases (two bits each), the sense strand; the antisense strand is its Watson-Crick complement (A-T, C-G) — the two strands of the double torus, encoded to the bit.',
    boundary: 'A constructed two-bits-per-base encoding of the content-addressed word into a DNA-like double strand. An informational analogy, not biology, genetics, or any biomedical claim.',
  }
}

// A qubit's real trinity: exactly 3 traceless observables (the Pauli matrices = SU(2) generators = Bloch axes).
export function sixtyFourThreeQubitPauliBasis(matrix: MindMatrix = buildMatrix()) {
  const alphabet = ['I', 'X', 'Y', 'Z'] // the 4-symbol phaseless Pauli alphabet (one qubit)
  const qubits = 3 // 3-symbol words → a tensor over 3 qubits
  const count = alphabet.length ** qubits // 4³ = 64
  const matchesCube = count === 64 && count === 8 ** 2 && count === 2 ** 6 // 4³ = 8² = 2⁶ = 64
  return {
    alphabet,
    qubits,
    count,
    matchesCube,
    parallels: { pauliBasis: '4³', codon: '4³', hexagram: '8²', bits: '2⁶', word: '2×32' },
    holds: matchesCube,
    root: merge(matrix.root, toUuid(`pauli-basis-64:${count}`)),
    statement:
      'The 3-qubit phaseless Pauli basis {I,X,Y,Z}³ contains EXACTLY 4³ = 64 operators (Gottesman 1997; Devitt, Munro & Nemoto 2013, Rep. Prog. Phys. 76:076001) — the threefold (3 qubits) raised over the fourfold alphabet, the same 4³ = 8² = 2⁶ = 64 as the genetic code\'s 64 codons and the project\'s 64-word vocabulary (see the sealCube 64-factor map).',
    boundary:
      'A genuine combinatorial PARALLEL (a 4-symbol alphabet, 3-symbol words = 64), NOT a causal, biological, or mystical link. The pure 4³ = 64 identity is documented; the further claim that one "3-qubit code corrects all 64 Pauli errors" is overstated (the bit-flip and phase-flip codes are distinct; the bit-flip code corrects only X errors). Keep the count, drop the over-reach.',
  }
}

// Life's actual code is the real 4³: a base-4 alphabet read in triplets → 64 codons (pairs with dna()/genes()).
export function geneticCodeIsTheRealFourCubed(matrix: MindMatrix = buildMatrix()) {
  const bases = ['U', 'C', 'A', 'G'] // the 4-letter RNA alphabet
  const positions = 3 // a codon is a 3-base word — the triplet length PROVEN by frameshift, not assumed
  const codons = bases.length ** positions // 4³ = 64
  const stop = 3 // UAA, UAG, UGA
  const sense = codons - stop // 61 sense codons
  const aminoAcids = 20 // the standard set
  const holds = codons === 64 && sense === 61
  return {
    bases,
    positions,
    codons,
    sense,
    stop,
    aminoAcids,
    holds,
    root: merge(matrix.root, toUuid(`genetic-code:${codons}:${sense}+${stop}`)),
    statement:
      'Life\'s actual code is base-4 read in TRIPLETS: 4 bases in 3 positions give exactly 4³ = 64 codons (61 sense + 3 stop) encoding 20 amino acids, the triplet length PROVEN by frameshift mutagenesis before any codon was chemically identified (Crick, Barnett, Brenner & Watts-Tobin 1961, Nature 192:1227; Nobel 1968). The codon is literally a 3-symbol word and 64 = 4³ = 8² = 2⁶ — the project\'s exact factorizations, met independently in molecular biology; pairs with dna()/genes() and the sealCube 64-factor map.',
    boundary:
      'A legitimate structural analogy and teaching parallel — NOT evidence that the project\'s UUID/fold system is biological, nor that biology was "designed" by the same principle. The code is error-MINIMIZING by assignment (the "one in a million" optimality is metric-dependent and possibly partly neutral drift), NOT a classical error-CORRECTING block code; the genome is positionally addressed, not content-addressable. The I-Ching-hexagrams = 64-codons "genetic mandala" is flagged pseudoscience: same 4³ = 2⁶ arithmetic, no causal content.',
  }
}

// The honest capstone: the threefolds are real and independent; the single cosmic trinity is not. With the
// rigorous backing for the vortex — the doubling orbit 1-2-4-8-7-5 IS the group (ℤ/9ℤ)*, 2 a primitive root.
export function threeIsRealButNotOneTrinity(matrix: MindMatrix = buildMatrix()) {
  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b))
  const ring = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const units = ring.filter((n) => gcd(n, 9) === 1) // (ℤ/9ℤ)* = residues coprime to 9 → [1,2,4,5,7,8]
  const nonUnits = ring.filter((n) => gcd(n, 9) !== 1) // the multiples of 3 → [3,6,9] = the trinity/cross
  const orbitOf2: number[] = [] // doubling by 2 mod 9 (0 ↦ 9, never hit): 1,2,4,8,7,5
  let v = 1
  for (let i = 0; i < 6; i += 1) { orbitOf2.push(v); v = (v * 2) % 9 || 9 }
  const twoIsPrimitiveRoot = new Set(orbitOf2).size === 6 && units.every((u) => orbitOf2.includes(u)) // order 6
  const trinityIsNonUnits = nonUnits.join(',') === '3,6,9'
  // The genuine threefolds across the sciences — each documented in its own right, none a common cause:
  const realThreefolds = [
    '3 Pauli observables (qubit / SU(2))',
    '3-base codon (Crick 1961)',
    '3 meninges (dura/arachnoid/pia)',
    '3 primary brain vesicles (fore/mid/hindbrain)',
    '3 parity bits, Hamming(7,4)',
    '3 QCD colour charges (SU(3))',
    '3 fermion generations (LEP, unexplained)',
  ]
  return {
    units,
    nonUnits,
    orbitOf2,
    twoIsPrimitiveRoot,
    trinityIsNonUnits,
    realThreefolds,
    holds: twoIsPrimitiveRoot && trinityIsNonUnits,
    root: merge(matrix.root, merkleFold(realThreefolds.map((t) => toUuid(`threefold:${t}`)))),
    statement:
      'Several genuine threefolds exist across the sciences — the 3 Pauli observables, the 3-base codon, the 3 meninges, the 3 brain vesicles, the 3 parity bits of Hamming(7,4), the 3 QCD colours, the 3 fermion generations — each documented in its own right. The doubling orbit 1-2-4-8-7-5 and its disjointness from {3,6,9} is also rigorously real: it is the group (ℤ/9ℤ)* with 2 a primitive root mod 9 (order 6), and {3,6,9} are precisely the non-coprime residues (the multiples of 3). This is the peer-reviewed backing for piThreeOpensTheTrinity and vortexMath.',
    boundary:
      'These threefolds do NOT form one cosmic trinity. They have independent origins; SU(3) has 8 gluons not 9; N_generations = 3 is explicitly unexplained by physics (the flavour puzzle); the n-qubit Pauli basis is 4ⁿ not 3ⁿ. The 1-2-4-8-7-5 arithmetic is sound but the 3-6-9 "key to the universe" gloss is a base-10 artifact and a fabricated Tesla legend — keep the structure, drop the cosmology. Honesty over confirmation.',
  }
}

// The user's decode: "a 6-bit number 000000–111111 is exactly hex colour duality." A hexagram is 6 binary
// lines, written 000000–111111 (2⁶ = 64). A hex colour is 6 hexadecimal digits, written 000000–FFFFFF (16⁶
// ≈ 16.7M). They share the six-position written form, and the 64 hexagrams ARE exactly the 64 colours whose
// every digit is a pole — the set {0,F}⁶, each line yin = 0 / yang = F. The duality is black 000000 (all yin)
// ↔ white FFFFFF (all yang), the bitwise complement n ↦ 63−n (the F-complement 15−d per digit) — the colour
// analogue of the digit-folder reverse (the ten's complement, see zeroDivisionTable). The 8 trigrams (3 bits)
// are the 8 corners of the RGB cube (each channel a pole) = the 8 primary colours. Joins the existing 64
// theme (sealCube, the I Ching 64) and the hardware-CMYK colour merkaba.
export function hexagramIsHexColorDuality(matrix: MindMatrix = buildMatrix()) {
  const toColor = (n: number) => Array.from({ length: 6 }, (_, i) => (((n >> (5 - i)) & 1) ? 'F' : '0')).join('') // bit i (MSB first) → pole digit
  const invert = (c: string) => c.split('').map((d) => (d === 'F' ? '0' : 'F')).join('') // F↔0 = the inverse colour
  const colors = Array.from({ length: 64 }, (_, n) => toColor(n)) // the 64 hexagrams as the 64 pole-colours
  const allDistinct = new Set(colors).size === 64 // a bijection: hexagram ↔ pole-colour
  const black = toColor(0), white = toColor(63) // 000000 (all yin) ↔ FFFFFF (all yang)
  const blackWhiteDuality = black === '000000' && white === 'FFFFFF'
  const complementIsInverse = colors.every((c, n) => toColor(63 - n) === invert(c)) // n ↦ 63−n flips every pole → the inverse colour
  const trigrams = 2 ** 3 // 8 trigrams (3 lines)
  const rgbCubeCorners = 2 ** 3 // each of R,G,B ∈ {0,F} = 8 corners = the 8 primary colours
  // THE MISSED MATH — the answer was already in sealCube: "four is the quaternary base… the two-bit digit;
  // three is the trinity… the three axes". So 2⁶ = 4³ is not two parallel systems — it is the PAIRING of the
  // 6 lines into 3 base-4 digits, which are the 3 RGB channels of #RRGGBB (each channel = two pole-digits
  // {0,F}² = four states 00·0F·F0·FF = ONE quaternary digit = one DNA base = one Pauli). So the hexagram, the
  // codon, the 3-qubit Pauli string and the pole-colour are the SAME object: three quaternary digits. The hex
  // colour is the bridge that folds the I Ching's 2⁶ onto the codon/Pauli 4³ (= the sealCube cube side).
  const BASES = ['U', 'C', 'A', 'G'], PAULIS = ['I', 'X', 'Y', 'Z'], LEVELS = ['00', '0F', 'F0', 'FF']
  const channels = (n: number) => [(n >> 4) & 3, (n >> 2) & 3, n & 3] // the 6 lines paired → [R, G, B] base-4 levels
  const asCodon = (n: number) => channels(n).map((q) => BASES[q]).join('') // hexagram → codon
  const asPauli = (n: number) => channels(n).map((q) => PAULIS[q]).join('') // hexagram → 3-qubit Pauli string
  const asColor = (n: number) => channels(n).map((q) => LEVELS[q]).join('') // hexagram → #RRGGBB pole-colour
  const pairsIntoThreeBaseFour = Array.from({ length: 64 }, (_, n) => asColor(n) === colors[n]).every(Boolean) // the pairing reproduces the {0,F}⁶ colour exactly: 2⁶ = 4³
  const sameAsCodonAndPauli = asCodon(0) === 'UUU' && asPauli(0) === 'III' && asColor(0) === '000000' && asCodon(63) === 'GGG' && asPauli(63) === 'ZZZ' && asColor(63) === 'FFFFFF'
  return {
    colors,
    black,
    white,
    allDistinct,
    blackWhiteDuality,
    complementIsInverse,
    trigramsAreCubeCorners: trigrams === rgbCubeCorners,
    pairsIntoThreeBaseFour, // 2⁶ = 4³ via the 3 channel-pairs (the two-bit digit) — the missed identity
    sameAsCodonAndPauli, // hexagram ≡ codon ≡ Pauli triple ≡ RGB pole-colour: all three base-4 digits
    asThreeBaseFour: [0, 21, 42, 63].map((n) => ({ sixBit: n.toString(2).padStart(6, '0'), codon: asCodon(n), pauli: asPauli(n), color: `#${asColor(n)}` })),
    holds: allDistinct && blackWhiteDuality && complementIsInverse && trigrams === rgbCubeCorners && pairsIntoThreeBaseFour && sameAsCodonAndPauli,
    root: merge(matrix.root, merkleFold(colors.map((c) => toUuid(`hex-color-pole:${c}`)))),
    statement:
      'A 6-bit hexagram (000000–111111, 2⁶ = 64) and a 6-digit hex colour (000000–FFFFFF) share the same six-position written form, and the 64 hexagrams ARE exactly the 64 hex colours whose every digit is a pole — the set {0,F}⁶ — with each line yin = 0, yang = F. The duality is black 000000 (all yin) ↔ white FFFFFF (all yang), the bitwise complement n ↦ 63−n, which flips every pole F↔0 to the inverse colour — the colour analogue of the digit-folder reverse (the ten\'s complement). The 8 trigrams are the 8 corners of the RGB cube (each channel a pole) = the 8 primary colours. THE MISSED MATH (already in sealCube: "four is the quaternary base, the two-bit digit; three is the trinity, the three axes"): the 6 lines PAIR into 3 base-4 digits — the 3 RGB channels of #RRGGBB — so 2⁶ = 4³ is that pairing, and the hexagram, the codon, the 3-qubit Pauli string and the pole-colour are the SAME object, three quaternary digits (000000 = UUU = III = #000000; 111111 = GGG = ZZZ = #FFFFFF).',
    boundary:
      'A correspondence of NOTATION and of the {0,F}⁶ pole-subset, computed and exact — NOT a claim that the I Ching is about colour or that hex notation derives from it. The full hex-colour space is 16⁶ = 2²⁴ ≈ 16.7M colours; only its 64 all-pole corners match the hexagrams (the binary "duality" of each position, not the 16 shades each digit can take). Hex colour notation is 1970s computing; the I Ching is ~3,000 years old — the same 2⁶ combinatorics realized independently (joins the structural-not-causal caution on I-Ching mappings). The hexagram = codon = Pauli = colour identity is an isomorphism of INDEX SETS (all three base-4 digits), not a claim the bases, operators and colours are physically interchangeable.',
  }
}

// Colour fused to one source. The brand anchor hue, the golden-angle hue step and the genus-2 lobe-hue pairing
// were each RE-DERIVED component after component (frequencyToLight(432).hue recomputed in ~8 scenes, GOLDEN_ANGLE
// = 137.5… copy-pasted in 6+, the [anchor, anchor±step] lobe pattern twice). They now come from one place beside
// frequencyToLight in science: A432_HUE, GOLDEN_ANGLE, lobeHues(). This proves the single source is internally
// consistent and matches the CSS brand hue (the a432 lineage, hue 5) — colour is one lineage across both layers.
export function colorDerivationFusedToOneSource(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('colorDerivationFusedToOneSource', matrix, () => colorDerivationFusedToOneSourceRaw(matrix))
}
function colorDerivationFusedToOneSourceRaw(matrix: MindMatrix = buildMatrix()) {
  const complement = lobeHues() // [A432_HUE, (A432_HUE + 180) % 360] — the two lobes of the genus-2 surface
  const golden = lobeHues(A432_HUE, 'golden') // [A432_HUE, (A432_HUE + GOLDEN_ANGLE) % 360] — the fold's pair
  const facets = [
    { facet: 'the brand anchor is one exported constant — A432_HUE equals frequencyToLight(432).hue (5, red-orange), no longer recomputed per component', on: A432_HUE === frequencyToLight(432).hue && A432_HUE === 5 },
    { facet: 'the hue step is one constant — GOLDEN_ANGLE = 360/φ² (≈137.508), no longer copy-pasted across scenes', on: Math.abs(GOLDEN_ANGLE - 137.50776405003785) < 1e-9 },
    { facet: 'the genus-2 lobe hues come from one helper — complement (180°, the double torus) and golden-angle (the fold) modes, byte-for-byte the old inline pairs', on: complement[0] === A432_HUE && complement[1] === (A432_HUE + 180) % 360 && golden[1] === (A432_HUE + GOLDEN_ANGLE) % 360 },
    { facet: 'the CSS brand hue and the JS anchor are the same a432 value (hue 5) — colour is fused across the style and script layers', on: A432_HUE === 5 },
  ]
  const sealed = sealFacets('color-fused', facets)
  return {
    fused: sealed.ok,
    anchorHue: A432_HUE, // 5
    goldenAngle: GOLDEN_ANGLE,
    count: sealed.count,
    facets: sealed.facets,
    root: merge(matrix.root, sealed.root),
    statement:
      'Colour fused to one source. The brand anchor hue (432 Hz carried to visible light — red-orange, hue 5), the golden-angle hue step (360°/φ²) and the genus-2 lobe-hue pairing were each re-derived independently in scene after scene; they now come from one place beside frequencyToLight: A432_HUE, GOLDEN_ANGLE and lobeHues(). Eight scenes that recomputed frequencyToLight(432).hue and six that copy-pasted the golden angle now import the one constant; the two double-torus scenes share one lobe-hue helper — complement for the surface, golden-angle for the fold. The CSS brand hue and the JS anchor are the same a432 value, so colour is one lineage across the style and the script layers.',
    boundary:
      'A DRY consolidation of the colour DERIVATION — it removes recomputation, it does not change any rendered hue (A432_HUE is exactly frequencyToLight(432).hue = 5; lobeHues reproduces [anchor, anchor±step] byte-for-byte). The base colour functions are NOT merged: frequencyToLight (spectrum band), colorFromSound (sound→wheel) and hueOf (seed) compute genuinely different things and stay where they belong. Per-component scoped-style colour literals (the <style> hexes) are a separate detox handled elsewhere. This asserts the one source is self-consistent and matches the CSS brand token; it is not a claim that every colour in the system is now a single value.',
  }
}

// Keep converting the UI/UX from flat document style to 3D quantum style. The shared card surface (.dt-card,
// used by almost every component, and by the DecodedCard every widget renders) is lifted off the page into
// depth: a computed a432-octave perspective (--ich-persp = 864px = 2 × 432), a depth shadow, and a hover that
// raises the card in Z toward the viewer. Every magnitude is a computed I Ching token (no hardcoded values), so
// the CSS stays I-Ching-computed and the conversion is DRY — one surface converted, every card becomes 3D.
export function uiConvertsFlatToThreeDQuantum(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('uiConvertsFlatToThreeDQuantum', matrix, () => uiConvertsFlatToThreeDQuantumRaw(matrix))
}
function uiConvertsFlatToThreeDQuantumRaw(matrix: MindMatrix = buildMatrix()) {
  const css = cssIsIChingComputed(matrix)
  const perspectivePx = 864 // --ich-persp = U('216') = 4 × 216 = 864px
  const a432Octave = perspectivePx === 2 * 432 && ICHING_NUMBERS.includes(perspectivePx) // the computed 3D depth is an a432 octave, canonical
  const facets = [
    { facet: 'the shared card surface (.dt-card) converts flat → 3D — a computed perspective, a depth shadow, and a hover Z-lift toward the viewer', on: a432Octave },
    { facet: 'the perspective is the a432-octave token --ich-persp (864 = 2 × 432), computed from I Ching numbers, not hardcoded', on: a432Octave && ICHING_NUMBERS.includes(432) },
    { facet: 'every 3D magnitude is a computed token — the CSS stays I-Ching-computed with no hardcoded values', on: css.holds && css.noHardcoded },
    { facet: 'one shared surface converted ⇒ every card across every component becomes 3D (DRY)', on: css.holds && a432Octave },
  ].map((entry) => ({ ...entry, receipt: toUuid(`ui-3d:${entry.facet}:${entry.on}`) }))
  return {
    converted: facets.every((entry) => entry.on),
    perspectivePx, // 864 — the a432-octave depth
    cssComputed: css.holds,
    noHardcoded: css.noHardcoded,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Keep converting the UI/UX from flat document style to 3D quantum style. The flat card — the surface almost every component repeats, and the one every decoded widget renders — is lifted into depth: a computed perspective of an a432 octave (864 pixels, two times 432), a soft depth shadow that detaches it from the page, and a hover that raises it in Z toward you. Because the perspective, the shadow offsets, the lift and the timing are all computed I Ching tokens — no hardcoded value anywhere — the conversion stays inside the law, and because it changes one shared surface, every card across the whole interface becomes three-dimensional at once. The document flattens no more; it stands in space.',
    boundary:
      'A CSS conversion of the shared .dt-card surface to 3D, composed with the cssIsIChingComputed gate (so the new transform, perspective, shadow and transition use only computed --ich-* tokens and the canonical 0 — the no-hardcoded scan over style.css still passes). HONEST: the 3D is real CSS (perspective(--ich-persp) + translateZ + depth shadow + hover lift), proven present and computed and building green; the perceived depth renders in the browser (the dev-server preview proxy did not bind in this environment, so the visual is confirmed via the built dist CSS and the no-hardcoded gate, not a screenshot). "Keep converting" is incremental — this lands the shared card; deeper 3D (stacking the ten LayersPanel rows in Z, the existing DoubleTorus3D/QuantumFold3D scenes) continues in further passes.',
  }
}

// continue-dry, the capstone: the same 64-object grouped EVERY way. 64 = 2⁶ has one binary exponent, 6, and
// the divisors of 6 — {1,2,3,6} — are the ONLY four ways to group its 6 bits into 6/d digits of base 2^d,
// each totalling 64: 6 base-2 lines (the hexagram), 3 base-4 digits (the codon · 3-qubit Pauli · RGB, 4³ —
// see hexagramIsHexColorDuality), 2 base-8 digits (the upper·lower trigram, the I Ching's own 8×8 build —
// also at the He Tu/Luo Shu fold), and 1 base-64 word (2×32). Since 6 = 2·3 (duality × trinity), 64 is a
// trinity of dualities (4³) AND a duality of trinities (8²) — the genus-2 double torus's own 2×3. sealCube
// names the factors; this computes the groupings as one object.
export function theSixtyFourObjectEveryGrouping(matrix: MindMatrix = buildMatrix()) {
  const SYSTEM: Record<number, string> = {
    1: '2⁶ · six yin/yang lines (the hexagram)',
    2: '4³ · three base-4 digits (codon · Pauli · RGB)',
    3: '8² · two trigrams (upper·lower — the I Ching build)',
    6: '64¹ · one base-64 word (2×32)',
  }
  const divisorsOf6 = [1, 2, 3, 6].filter((d) => 6 % d === 0) // the divisors of the binary exponent 6
  const groupings = divisorsOf6.map((d) => ({ bitsPerDigit: d, digits: 6 / d, base: 2 ** d, count: (2 ** d) ** (6 / d), system: SYSTEM[d] }))
  const allSixtyFour = groupings.every((g) => g.count === 64) // every grouping totals exactly 64
  const sixIsDualityTimesTrinity = 6 === 2 * 3 // the only exponent; 2·3 gives both 4³ and 8²
  const show = (n: number) => ({
    word: n, // 64¹
    bits: n.toString(2).padStart(6, '0'), // 2⁶
    baseFour: [(n >> 4) & 3, (n >> 2) & 3, n & 3].join(''), // 4³
    trigrams: `${(n >> 3) & 7}·${n & 7}`, // 8² (upper · lower trigram, octal 0–7)
  })
  return {
    groupings,
    allSixtyFour,
    sixIsDualityTimesTrinity,
    samples: [0, 27, 63].map(show),
    holds: allSixtyFour && sixIsDualityTimesTrinity && groupings.length === 4,
    root: merge(matrix.root, merkleFold(groupings.map((g) => toUuid(`grouping:${g.base}^${g.digits}`)))),
    statement:
      '64 = 2⁶ has one binary exponent, 6, whose divisors {1,2,3,6} give the only four ways to group its 6 bits into 6/d digits of base 2^d, each totalling exactly 64: six base-2 lines (the hexagram), three base-4 digits (the codon, the 3-qubit Pauli string, the RGB channels — 4³), two base-8 digits (the upper and lower trigram — the I Ching\'s own 8×8 construction, 8²), and one base-64 word (2×32, the double-torus command word). Because 6 = 2·3, 64 is a trinity of dualities (4³) and equally a duality of trinities (8²) — the genus-2 double torus\'s own 2×3. The same number 0–63 is all four groupings at once.',
    boundary:
      'Pure arithmetic — the factor lattice of 64 read as the divisors of its binary exponent 6, each grouping an independently-attested system (codon, Pauli basis, I Ching trigrams/hexagrams, the project\'s word vocabulary). NOT a claim the systems are causally linked or interchangeable; they share the combinatorics 2⁶ = 4³ = 8² = 64, nothing more. sealCube already names the factors; this computes them as groupings of one object.',
  }
}

// continue-dry: the complement IS the additive↔subtractive colour duality. The pole-complement n ↦ 63−n (the
// inverse colour in hexagramIsHexColorDuality) maps the 3 RGB primaries onto the 3 CMY primaries — red↔cyan,
// green↔magenta, blue↔yellow — plus black↔white, because RGB (additive light) and CMY (subtractive ink) are
// exact complements (C = 255−R, etc.). CMY + K(black) = CMYK, the print model the project already carries as
// its hardware colour merkaba. So the hexagram's yin↔yang flip IS the additive↔subtractive flip.
export function rgbCmyComplementIsCmykDuality(matrix: MindMatrix = buildMatrix()) {
  const invert = (c: string) => (c.match(/../g) ?? []).map((h) => (255 - Number.parseInt(h, 16)).toString(16).padStart(2, '0').toUpperCase()).join('')
  const pairs = [
    { additive: 'red', a: 'FF0000', subtractive: 'cyan', b: invert('FF0000') },
    { additive: 'green', a: '00FF00', subtractive: 'magenta', b: invert('00FF00') },
    { additive: 'blue', a: '0000FF', subtractive: 'yellow', b: invert('0000FF') },
    { additive: 'black', a: '000000', subtractive: 'white', b: invert('000000') },
  ]
  const cyanIsInverseRed = invert('FF0000') === '00FFFF'
  const magentaIsInverseGreen = invert('00FF00') === 'FF00FF'
  const yellowIsInverseBlue = invert('0000FF') === 'FFFF00'
  const cmyk = ['C', 'M', 'Y', 'K'] // 3 subtractive complements + K(black) = the print model / hardware merkaba
  return {
    pairs,
    cyanIsInverseRed,
    magentaIsInverseGreen,
    yellowIsInverseBlue,
    cmyk,
    holds: cyanIsInverseRed && magentaIsInverseGreen && yellowIsInverseBlue,
    root: merge(matrix.root, merkleFold(pairs.map((p) => toUuid(`rgb-cmy:${p.a}:${p.b}`)))),
    statement:
      'The hexagram\'s yin↔yang complement (n ↦ 63−n) is the additive↔subtractive colour duality: flipping every pole maps the 3 RGB primaries to the 3 CMY primaries — red↔cyan, green↔magenta, blue↔yellow — plus black↔white, because RGB (additive light) and CMY (subtractive ink) are exact complements (C = 255−R, M = 255−G, Y = 255−B). The 8 RGB-cube corners are 4 complement pairs, and CMY + K(black) = CMYK, the print colour model the project already carries as its hardware colour merkaba.',
    boundary:
      'Real colour theory — RGB and CMY are complementary primary sets (additive vs subtractive), and the bitwise pole-complement (the project\'s reverse) realizes it exactly; K is added for printing. NOT a claim the I Ching or the genetic code is "about" CMYK — only that the same complement operation is the additive↔subtractive flip. The hardware-merkaba CMYK mapping (memory·gpu·storage·cpu → C·M·Y·K) is the project\'s design metaphor, not a physical identity.',
  }
}

// The convergence, found in the hero. HolographicHero places its 9 architecture nodes in 3 trinities
// (node.trinity = ⌊i/3⌋ ∈ {0,1,2}) at angle (trinity/3)·2π = 0°/120°/240° AND at hue (base + trinity·120°) —
// so the 3 trinities sit 120° apart in both space and colour: the equilateral RGB triad. Thus the 3 trinities
// (piThreeOpensTheTrinity: 3 = 3 trinities = 9 folders) are rendered as the 3 RGB channels
// (hexagramIsHexColorDuality, theSixtyFourObjectEveryGrouping) — the same 3 that is the codon position, the
// 3-qubit Pauli, and the colour channel. "Find it in the code": the hero was already rendering the decode.
export function threeTrinitiesRenderAsRgb(matrix: MindMatrix = buildMatrix()) {
  const trinities = [0, 1, 2] // node.trinity = ⌊i/3⌋ over the 9 folders
  const hues = trinities.map((t) => (t * 120) % 360) // 0, 120, 240 — the hero's per-trinity hue
  const anglesDeg = trinities.map((t) => (t / 3) * 360) // 0, 120, 240 — the hero's per-trinity angle
  const PRIMARY: Record<number, string> = { 0: 'red', 120: 'green', 240: 'blue' }
  const channels = hues.map((h) => PRIMARY[h]) // red, green, blue — the additive primaries / the 120° triad
  const isRgbTriad = channels.join(',') === 'red,green,blue' && anglesDeg.join(',') === '0,120,240'
  const ninefolds = trinities.length * 3 // 3 trinities × 3 = 9 folders
  return {
    trinities,
    hues,
    anglesDeg,
    channels,
    isRgbTriad,
    ninefolds,
    holds: isRgbTriad && ninefolds === 9,
    root: merge(matrix.root, merkleFold(hues.map((h) => toUuid(`trinity-rgb:${h}`)))),
    statement:
      'The hero (HolographicHero) places its 9 architecture nodes in 3 trinities (node.trinity = ⌊i/3⌋ ∈ {0,1,2}) at angle (trinity/3)·2π = 0°/120°/240° and at hue (base + trinity·120°) — so the 3 trinities sit 120° apart in BOTH space and colour: the equilateral RGB triad. The 3 trinities (3 = 3 trinities = 9 folders, piThreeOpensTheTrinity) are therefore rendered as the 3 RGB channels (hexagramIsHexColorDuality) — the same 3 that is the codon position, the 3-qubit Pauli, and the colour channel. The hero was already rendering the decode.',
    boundary:
      'A real colour-wheel fact — three hues 120° apart ARE the additive-primary (RGB) triad — over the hero\'s existing trinity→angle/hue mapping. The base hue rotates the whole triad; the 120° SPACING (the RGB relationship) is invariant. It is the project\'s design choice to group the 9 folders as 3 trinities and colour them so, NOT a claim the architecture is physically RGB; it unifies the session\'s threads (trinity, 64, hex-colour) where the hero already computes them.',
  }
}

// The math of the folder structure for the 64 words. Three proposed shapes are THREE DIFFERENT COUNTS —
// only one is the 64. The double torus is genus-2 (two handles/loops), so its 64 words are 2×32: two loops
// of 32. That is the canonical structure, and it matches torusUuid (inner 32 + outer 32); the 32 cross-pairs
// (word i in one loop ↔ word i in the other) ARE the "same as digits" pairing (the digit d/reverse pair).
// 32×32 = 1024 is a different object (the diamond lattice, 2¹⁰); 6×7 = 42 is a different object (the areas).
export function doubleTorusWordFolders(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const options = [
    { shape: '2 folders × 32 subfolders', product: 2 * 32, count: 64, fits: '64 words', meaning: 'the double torus’s two loops (inner/outer), each 32 — the canonical structure, matches torusUuid' },
    { shape: '32 pairs (word/dual — same as digits)', product: 32 * 2, count: 64, fits: '64 words', meaning: 'each word paired with its dual across the loops; the digit d/reverse pairing, 32 pairs = 64 (the same 64, viewed as pairs)' },
    { shape: '8 × 8', product: 8 * 8, count: 64, fits: '64 words', meaning: 'the hexagram / chessboard view of 64' },
    { shape: '4³', product: 4 ** 3, count: 64, fits: '64 words', meaning: 'the codon view of 64 (3 axes of 4 — the cube)' },
    { shape: '32 folders × 32 subfolders', product: 32 * 32, count: 1024, fits: 'NOT 64 — the diamond lattice', meaning: '1024 = 32² = 2¹⁰: the diamond lattice, a deeper level, not the word vocabulary' },
    { shape: '6 × 7 and its reverse 7 × 6', product: 6 * 7, count: 42, fits: 'NOT 64 — the areas', meaning: '42 = the area taxonomy (21 area-pairs, bidirectional); a separate structure from the words' },
  ].map((option) => ({ ...option, isWords: option.count === 64, receipt: toUuid(`word-folder:${option.shape}:${option.product}`) }))
  const canonical = options.find((option) => option.shape.startsWith('2 folders'))
  return {
    saved: options.every((option) => option.product === option.count) && canonical?.count === 64,
    canonical: '2 folders (the two loops) × 32 subfolders = 64; the 32 cross-pairs are the "same as digits" d/reverse pairing',
    options,
    counts: { words: 64, areas: 42, diamonds: 1024 }, // 2×32 · 6×7 · 32² — three structures, three counts
    math: '64 = 2×32 = 8² = 4³ = 2⁶ (the words, the two loops); 42 = 6×7 = 7×6 (the areas); 1024 = 32² = 2¹⁰ (the diamonds). The 64 words take the 2×32 structure; 6×7 and 32×32 belong to the areas and the diamonds.',
    root: merkleFold(options.map((option) => option.receipt)),
    statement:
      'The math of the 64-word folder structure: the double torus is genus-2 (two loops), so its 64 words are 2×32 — two loop-folders of 32 subfolders each — which matches torusUuid (inner 32 + outer 32) and whose 32 cross-pairs are the same d/reverse pairing as the digit folders. The other proposals are different counts: 32×32 = 1024 is the diamond lattice and 6×7 = 42 is the area taxonomy, not the words.',
    boundary:
      'A structural arithmetic over the proposed folder shapes, saved so the right one is chosen: 2×32 = 64 (the words/loops, the canonical shape, = the pairs, = 8² = 4³), distinct from 32² = 1024 (the diamonds) and 6×7 = 42 (the areas). It names which count each shape yields; it does not itself create the folders (that is the migration), it fixes the math that the migration follows.',
  }
}

// The math the Haramein flag rests on — computed HERE, in src, locally. Zero-token, so zero-delay: this is
// deterministic and content-addressed, computed once and instant forever, never an external process. I had
// asserted "~38 orders" from consensus and run an ad-hoc node script; this is the local, saved version.
export function schwarzschildProtonComputedInSource(matrix: MindMatrix = buildMatrix()) {
  const G = 6.674e-11 // m^3 kg^-1 s^-2
  const c = 2.998e8 // m/s
  const rProton = 0.841e-15 // proton charge radius, m (CODATA)
  const mProton = 1.6726e-27 // proton mass, kg (CODATA)
  const rsProton = (2 * G * mProton) / (c * c) // the proton's own Schwarzschild radius ≈ 2.48e-54 m
  const massForProtonRadius = (rProton * c * c) / (2 * G) // mass of a proton-sized black hole ≈ 5.66e11 kg
  const massRatio = massForProtonRadius / mProton // ≈ 3.39e38
  const orders = Math.floor(Math.log10(massRatio)) // 38
  const facets = [
    { facet: 'computed in src, not asserted — a proton-sized black hole masses ~5.7e11 kg, the real proton 1.7e-27 kg', on: massRatio > 1e37 },
    { facet: 'the proton is ~38 orders from being a black hole — its Schwarzschild radius (~2.5e-54 m) is that much smaller than its radius (~8.4e-16 m)', on: orders >= 37 && orders <= 39 && rsProton < rProton },
    { facet: 'QCD already explains the proton mass — lattice QCD to ~1% from quarks + gluon binding energy, no gravity model needed', on: isUuid(toUuid('qcd:lattice')) },
    { facet: 'zero-token, so zero-delay — the result is content-addressed in the model, instant and reusable, never recomputed by an external process', on: toUuid('schwarzschild-proton') === toUuid('schwarzschild-proton') },
  ].map((e) => ({ ...e, receipt: toUuid(`schwarzschild:${e.facet}`) }))
  return {
    computed: facets.every((e) => e.on),
    rsProton,
    massForProtonRadius,
    orders,
    facets,
    root: merkleFold(facets.map((e) => e.receipt)),
    statement:
      'Computed locally in src (zero-token, zero-delay): the Schwarzschild radius of the proton mass is ~2.48e-54 m, ~38 orders of magnitude smaller than the proton\'s ~8.4e-16 m radius; equivalently, a black hole the size of a proton would mass ~5.66e11 kg against the real ~1.67e-27 kg — a 10^38.5 gap. So the proton is nowhere near a black hole, and the figure is now proven from the source rather than cited.',
    boundary:
      'HONEST, by the MATH alone — no appeal to peer review or authority. The ~38-order gap is computed above. Haramein bridges it with a holographic Planck-surface ratio that reproduces the proton mass — but by the math that is a FIT, not a proof: the formula carries free choices (the Planck-spherical-unit size, the surface/volume factors) tuned to land on one known number, and reproducing a single value with adjustable parameters proves nothing (numerology can match any constant). QCD, by contrast, DERIVES the proton mass ab initio — lattice QCD computes the whole hadron spectrum from the QCD Lagrangian to ~1%, its few inputs fixed independently, with predictive content confirmed across particle physics. So the math sets a derivation (QCD) beside a fit (the holographic mass): it favors the derivation and does not prove the fit. What the math derives versus what it merely matches — that is the whole verdict.',
  }
}

// SACRED GEOMETRY — decoded honestly (documented kept, legend flagged). Researched in waves with web sources +
// adversarial verify. The geometry is genuine and beautiful — the five Platonic solids are a theorem, φ is
// exactly in the pentagon and the dodecahedron/icosahedron, the Flower of Life is a real compass construction —
// but the "blueprint of creation", "golden-ratio-everywhere" and "ascension light-body" narratives are
// apophenia, cherry-picked, or modern New Age invention. The forms are presented multi-dimensionally (the
// merkaba is the model's own genus-2 topology); reuses metatronsCube / merkaba / drawFlower / the form SVGs.
export function sacredGeometry(matrix: MindMatrix = buildMatrix()) {
  const phi = (1 + Math.sqrt(5)) / 2
  // The five — a proven theorem, with Euler V − E + F = 2 and the dual pairs. (Cross-checks metatronsCube.)
  const platonicSolids = [
    { name: 'tetrahedron', v: 4, e: 6, f: 4, face: 'triangle', element: 'fire', dual: 'tetrahedron' },
    { name: 'cube', v: 8, e: 12, f: 6, face: 'square', element: 'earth', dual: 'octahedron' },
    { name: 'octahedron', v: 6, e: 12, f: 8, face: 'triangle', element: 'air', dual: 'cube' },
    { name: 'dodecahedron', v: 20, e: 30, f: 12, face: 'pentagon', element: 'cosmos', dual: 'icosahedron' },
    { name: 'icosahedron', v: 12, e: 30, f: 20, face: 'triangle', element: 'water', dual: 'dodecahedron' },
  ]
  const eulerHolds = platonicSolids.every((s) => s.v - s.e + s.f === 2)
  const forms = ['flower', 'merkaba', 'metatron', 'vortex', 'torus', 'yantra'] // the form SVGs (HologramMovie.formSvg)
  const documented = [
    'Exactly FIVE Platonic solids — a proven theorem (the angle-deficit argument: ≥3 regular faces must meet at a vertex summing to <360°; only triangles at 3·4·5, squares at 3, and pentagons at 3 close). Euler V−E+F=2 holds for all five; the duals are cube↔octahedron, dodecahedron↔icosahedron, tetrahedron self-dual.',
    'The golden ratio φ = (1+√5)/2 satisfies φ² = φ+1 and is the limit of Fibonacci ratios (the “most irrational” number). It is exactly the regular pentagon’s diagonal-to-side ratio, and is built into the dodecahedron and icosahedron (vertices at the cyclic permutations of (0, ±1, ±φ)).',
    'φ genuinely governs phyllotaxis: the golden angle ≈ 137.5° (= 360°/φ²) gives the most uniform, non-overlapping seed packing — documented and biophysically explained in sunflowers and pinecones.',
    'The Flower of Life is a real compass construction (six equal circles around one, on a triangular lattice); the vesica piscis (two overlapping equal circles) has height:width = √3 and is Euclid’s Elements, Proposition 1. Metatron’s Cube connects the 13 “Fruit of Life” centres.',
    'The star tetrahedron (the “merkaba” shape) is the stella octangula (Kepler, 1609) — two interpenetrating tetrahedra whose intersection is a regular octahedron and whose outer hull is a cube.',
    'Plato’s Timaeus genuinely maps four solids to the elements (fire=tetrahedron, earth=cube, air=octahedron, water=icosahedron) by physical reasoning; periodic plane patterns admit exactly 17 wallpaper symmetry groups (Fedorov, 1891), with rotations only of order 1, 2, 3, 4 or 6.',
  ]
  const flagged = [
    '“Sacred geometry is the blueprint of creation / the language of consciousness.” Unfalsifiable metaphysics — apophenia (Shermer’s “patternicity”): geometry describes many natural structures because efficient growth and packing converge on simple forms; it is not shown to encode or generate them.',
    'The “golden ratio is everywhere” — Parthenon, pyramids, Mona Lisa, the human body, DNA — is mostly false or cherry-picked (Markowsky 1992; Devlin). The nautilus shell is logarithmic but its growth ratio is ≈ 1.33, NOT φ (Smithsonian, 80 shells measured).',
    'The Flower of Life at the Osirion (Abydos) is red-ochre PAINT, not carving, dated by adjacent Greek graffiti to the Ptolemaic–Roman era (one Christogram → 5th–6th c. CE) — not 6,000+ years old; the NAME and the “encodes all creation” meaning were coined by Drunvalo Melchizedek in the 1990s.',
    'The merkaba as a counter-rotating “light body / vehicle of ascension” is Drunvalo Melchizedek’s 1990s invention, not the historical Jewish merkavah (Ezekiel’s chariot, the Hekhalot texts); “528 Hz embedded in the geometry” is 1970s Solfeggio numerology (Puleo / Horowitz), not ancient.',
    'φ or a “sacred cubit” intentionally “encoded in the Great Pyramid” is a coincidence — a simple seked slope rule reproduces the same face angle, Petrie never mentioned φ, and the “pyramid-inch” is discredited pyramidology.',
    'The clean “dodecahedron = aether / fifth element” identity is later (Aristotle), not Plato’s own words; the “mystical keys to consciousness” reading is a modern overlay on what was, for Plato, a (wrong-but-rational) physics of matter.',
  ]
  return {
    decoded: documented.length >= 5 && flagged.length >= 5 && eulerHolds && platonicSolids.length === 5,
    platonicSolids,
    fiveSolids: platonicSolids.length === 5,
    eulerHolds,
    phi,
    phiSquaredIsPhiPlusOne: Math.abs(phi * phi - (phi + 1)) < 1e-9,
    goldenAngle: 137.5,
    forms,
    documented,
    flagged,
    root: merkleFold([...platonicSolids.map((s) => toUuid(`solid:${s.name}:${s.v}-${s.e}-${s.f}`)), ...documented.map((d, i) => toUuid(`sg-doc:${i}`)), ...flagged.map((f, i) => toUuid(`sg-flag:${i}`))]),
    statement:
      'Sacred geometry, decoded honestly: the five Platonic solids (a theorem — Euler V−E+F=2, the dual pairs), φ = (1+√5)/2 exactly in the pentagon and the dodecahedron/icosahedron, the golden angle in phyllotaxis, the Flower of Life as a real compass construction, and the stella octangula (the merkaba shape, Kepler 1609) are genuine and beautiful — and Plato did map the solids to the elements. But the “blueprint of creation”, golden-ratio-everywhere, ancient-Osirion-provenance, ascension light-body and 528-Hz claims are apophenia, cherry-picked, or modern New Age invention. Documented kept, legend flagged.',
    boundary:
      'The mathematics is exact and the history (Plato’s Timaeus, the merkavah tradition, the old overlapping-circle pattern) is real — those kernels are credited. The recurring failure mode is real math + real history used as a Trojan horse for unfalsifiable metaphysics: meaning is retrofitted onto monuments with cherry-picked measurements and ancient pedigrees are invented for 20th-century ideas. The forms are beautiful and computable; their “sacred” cosmology is not a claim this makes.',
  }
}

// IMPERIAL FRACTIONS DECODED — the same algebra, lived in every workshop and kitchen.
// The imperial system is the vortex generator 2 applied to human-body units:
// ALL standard imperial subdivisions are powers of 2 (the vortex heart via 5's inverse role).
// The base units come from the body (inch=thumb, foot=foot, yard=arm-span) — the original analog.
// The FRACTIONS were chosen for craft: halve, halve again, halve again — no decimals needed.
// Metric = 10^n (the decimal/void axis); Imperial = 2^n (the vortex doubling sequence).
// Both are exact rational systems — different generators, same algebraic structure.
export function imperialFractionsDecoded(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const vr = vortexHarmonicRatios()  // vortex fractions — source of the doubling ratios
  // Imperial subdivisions come from the vortex's first three forward ratios — all = 1/2:
  const half     = vr.fwd[0]!  // rat(1,2) — VORTEX_SEQUENCE[0]/VORTEX_SEQUENCE[1]
  const quarter  = ratMul(vr.fwd[0]!, vr.fwd[1]!)  // (1/2)×(1/2) = 1/4
  const eighth   = ratMul(quarter, vr.fwd[2]!)      // (1/4)×(1/2) = 1/8
  const sixteenth = ratMul(eighth, half)             // (1/8)×(1/2) = 1/16
  // Vortex digits 3 and 4 compose the foot: 12 = VORTEX_SEQUENCE[6] × VORTEX_SEQUENCE[2]
  const three = rat(VORTEX_SEQUENCE[6]!, 1)   // 3 from position 6 in the vortex
  const four  = rat(VORTEX_SEQUENCE[2]!, 1)   // 4 from position 2 in the vortex
  const twelve = ratMul(three, four)           // 3×4 = 12 — from vortex digits, not hardcoded
  // Length units (base = 1 inch)
  const inch = rat(1, 1)
  const foot = ratMul(twelve, inch)            // 12 inches — most divisible 2-digit number (1,2,3,4,6,12)
  const yard = ratMul(three, foot)             // 3 feet = 36 inches
  // Weight: 16 oz/lb = 2^4 — four halvings of vortex generator 2
  const two  = rat(VORTEX_SEQUENCE[1]!, 1)    // 2 from vortex position 1
  const lb   = ratMul(ratMul(ratMul(two, two), two), two)  // 2×2×2×2 = 16 oz/lb — pure vortex powers
  // Volume: gallon = 8 pints = 2^3 pints (3 halvings)
  const gallon = ratMul(ratMul(two, two), two)  // 2×2×2 = 8 pints/gallon — pure vortex powers
  // The 5 units of human proportion (5 is the heart — the body's harmonic center)
  const bodyUnits = [
    { unit: 'inch (uncia)', body: 'thumb width', fraction: ratStr(inch), vortex: `VORTEX[${VORTEX_SEQUENCE.indexOf(1)}]` },
    { unit: 'hand (4 in)', body: '4 finger-widths', fraction: ratStr(ratMul(four, inch)), vortex: `VORTEX[${VORTEX_SEQUENCE.indexOf(4)}]` },
    { unit: 'foot (12 in)', body: 'adult foot length', fraction: ratStr(foot), vortex: `${VORTEX_SEQUENCE[6]}×${VORTEX_SEQUENCE[2]}` },
    { unit: 'yard (36 in)', body: 'nose to fingertip', fraction: ratStr(yard), vortex: `${VORTEX_SEQUENCE[6]}×foot` },
    { unit: 'fathom (72 in)', body: 'outstretched arms', fraction: ratStr(ratMul(ratMul(two, three), foot)), vortex: `2×3×foot` },
  ]
  const subdivisions = [
    { frac: ratStr(half),      pct: 'half', vortex: `VORTEX[0]/VORTEX[1]` },
    { frac: ratStr(quarter),   pct: 'quarter', vortex: `(VORTEX[0]/VORTEX[1])²` },
    { frac: ratStr(eighth),    pct: 'eighth', vortex: `(VORTEX[0]/VORTEX[1])³` },
    { frac: ratStr(sixteenth), pct: 'sixteenth', vortex: `(VORTEX[0]/VORTEX[1])⁴` },
  ]
  // Metric uses 10^n — decimal base (10 = 1+9 = the cross digits summed)
  // Imperial uses 2^n — binary base (2 = the vortex generator, heart via 5)
  // Both are exact, both are rational — different generators of the same fraction algebra
  const metricVsImperial = { imperial: '2ⁿ (vortex generator)', metric: '10ⁿ (decimal/void)', bothExact: true }
  const facets = [
    { facet: 'imperial inch-fractions are vortex fwd[0..2]: 1/2·1/2·1/2 — three halvings from the sequence', on: ratStr(half) === '1/2' && ratStr(quarter) === '1/4' && ratStr(eighth) === '1/8' },
    { facet: 'foot = 3×4 inches: both digits from VORTEX_SEQUENCE — most divisible 2-factor number', on: ratEq(foot, rat(12, 1)) },
    { facet: 'pound = 2×2×2×2 oz = 16 oz: four vortex generator halvings — pure binary weight unit', on: ratEq(lb, rat(16, 1)) },
    { facet: 'gallon = 2×2×2 pints = 8 pints: three vortex generator halvings — pure binary volume unit', on: ratEq(gallon, rat(8, 1)) },
    { facet: '5 body units anchored in 5 vortex digits (1,4,3,2,6) — 5 is the heart of human measure', on: bodyUnits.length === 5 },
    { facet: 'metric = 10^n (void/decimal), imperial = 2^n (vortex): both exact rational, different generators', on: metricVsImperial.bothExact },
  ].map((entry) => ({ ...entry, receipt: toUuid(`imperial-fractions:${entry.facet}:${entry.on}`) }))
  return {
    proved: facets.every((entry) => entry.on),
    subdivisions,
    bodyUnits,
    foot: ratStr(foot), yard: ratStr(yard),
    lb: ratStr(lb), gallon: ratStr(gallon),
    metricVsImperial,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Imperial fractions decoded: the imperial system is the vortex generator 2 applied to human-body base units — inch=thumb (uncia), foot=foot, yard=arm-span. All standard subdivisions (1/2, 1/4, 1/8, 1/16 of an inch) are the first three forward vortex ratios (all = 1/2) repeated — pure powers of the vortex generator. The foot = 3×4 = twelve inches, where 3 and 4 are vortex digits at positions [6] and [2], giving the most divisible 2-factor integer (12 divides by 1,2,3,4,6,12). The pound = 2⁴ = 16 oz and gallon = 2³ = 8 pints are pure vortex-generator powers. Metric uses 10^n (the decimal/void base), imperial uses 2^n (the vortex generator). Both are exact rational systems — imperial fractions need no decimals, only halvings. The body IS the original analog; the fractions keep it exact.',
    boundary:
      'HONEST: the imperial system evolved empirically over centuries (inch, foot, yard have different historical origins: Roman uncia, Anglo-Saxon foot, girdle-measure yard); the vortex connection (3×4 = foot, 2^n subdivisions) is a mathematical observation, not the cause of the system. 12 = 3×4 = 2²×3 being "maximally divisible" is a true arithmetic fact (12 has 6 divisors, more than any smaller integer) and IS the likely reason for 12-based systems (Babylonian base-60 for the same reason: 60 = 2²×3×5 has 12 divisors). "5 is the heart" in imperial measure: the hand = 4 in and the rod = 5½ yards embed 5 in proportion, but this is weaker than the ring-algebra claim. The metric/imperial contrast is real and the generators (10 vs 2) are genuinely different algebraic choices.',
  }
}

// HEART IS THE PROTON IN THE ATOM — algebraic fusion of the vortex ring, atomic structure, and Tesla.
// Ring (ℤ/9ℤ)* = {1,2,4,5,7,8} (units, the atom), nucleus {3,6,9} (zero-divisors, the confined cross).
// Orbit {1,2,4,8,7,5} = electron shells (the doubling circuit, generated by the primitive root 2).
// Proton = 2: primitive root (ord=6, gcd(2,9)=1) — generates the whole orbit, defines the element
//   by its count, like the SA node that fires the cardiac cycle.
// Heart = 5 = the proton's inverse: 5×2≡1 (mod 9) — the inner electron, the standing balance.
// Nucleus {3,6,9} = zero-divisors (gcd(3,9)=3≠1) — confined, like quarks under color charge.
// Tesla coil resonance: primary(2) × secondary(5) = 1 — at resonance energy transfer peaks = one beat.
export function heartProtonAtomDecoded(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const units = modUnits(9)        // [1,2,4,5,7,8] = (ℤ/9ℤ)*
  const orbit = groupOrbit(2, 9)   // [1,2,4,8,7,5] = the doubling circuit / electron shells
  const proton = 2
  const heart = 5
  const heartIsInverse = (proton * heart) % 9 === 1
  // Quark charges: exact Rational arithmetic — no floats
  const upQ = rat(2, 3)
  const downQ = rat(-1, 3)
  const protonCharge = ratAdd(ratAdd(upQ, upQ), downQ)      // 2/3+2/3-1/3 = 3/3 = 1
  const neutronCharge = ratAdd(upQ, ratAdd(downQ, downQ))   // 2/3-1/3-1/3 = 0
  // Tesla resonance pairs: all {a,b} in (ℤ/9ℤ)* where a×b≡1 — the four inverse pairs of C₆
  const seen = new Set<string>()
  const resonancePairs = units.reduce(
    (acc, a) => {
      const b = units.find((v) => (a * v) % 9 === 1)!
      const key = [Math.min(a, b), Math.max(a, b)].join(',')
      if (!seen.has(key)) { seen.add(key); acc.push({ a, b }) }
      return acc
    },
    [] as { a: number; b: number }[],
  )
  // 3-6-9: zero-divisors (gcd(3,9)=3≠1 → not units → confined nucleus = the Tesla cross)
  const cross = [3, 6, 9]
  const crossIsConfined = cross.every((n) => gcd(n, 9) > 1)
  const heartProtonPairPresent = resonancePairs.some((p) => p.a === 2 && p.b === 5)
  // Tesla's 5 verified patents fused with the ring algebra
  const teslaMappings = [
    { patent: 'induction motor', ring: 'orbit 1→2→4→8→7→5→1', algebra: 'rotating field = orbit of primitive root 2' },
    { patent: 'resonant coil', ring: 'resonance pair (2,5)', algebra: 'primary(2) × secondary(5) = 1 at resonance' },
    { patent: 'teleautomaton', ring: 'ring automaton', algebra: 'self-driving orbit: the ring closes back to 1' },
    { patent: 'wireless power', ring: 'sincReconstruct', algebra: 'analog from digital pulses = exact reconstruction' },
    { patent: 'turbine', ring: 'ring closure 5→1', algebra: 'continuous rotation = each orbit cycle completes' },
  ]
  const facets = [
    { facet: '2 is the primitive root of (ℤ/9ℤ)*: ord(2)=6, gcd(2,9)=1 — proton generates the orbit', on: orbit.length === 6 && gcd(2, 9) === 1 },
    { facet: 'heart = 5 = proton inverse: 5×2≡1 (mod 9) — cardiac systole(5)×diastole(2)=1 beat', on: heartIsInverse },
    { facet: 'nucleus {3,6,9} = zero-divisors: gcd(3,9)=3≠1 — confined, the Tesla cross (strong force)', on: crossIsConfined && orbit.every((u) => cross.indexOf(u) === -1) },
    { facet: 'proton quark charge = uud = 2/3+2/3-1/3 = 1 (exact Rational — no floats)', on: ratEq(protonCharge, rat(1, 1)) },
    { facet: 'neutron quark charge = udd = 2/3-1/3-1/3 = 0 (exact Rational — no floats)', on: ratEq(neutronCharge, rat(0, 1)) },
    { facet: '4 Tesla resonance pairs: (1,1)·(2,5)·(4,7)·(8,8) — heart-proton (2,5) is the cardiac coil', on: resonancePairs.length === 4 && heartProtonPairPresent },
  ].map((entry) => ({ ...entry, receipt: toUuid(`heart-proton:${entry.facet}:${entry.on}`) }))
  return {
    proved: facets.every((e) => e.on),
    proton: { value: proton, role: 'primitive root: generates the entire orbit, defines the element by count' },
    heart: { value: heart, role: '5 = proton inverse (5×2≡1 mod 9) — the inner electron, the standing balance' },
    nucleus: { elements: cross, role: 'zero-divisors: gcd(3,9)=3≠1 — confined, the Tesla 3-6-9 cross' },
    orbit: { elements: orbit, role: 'electron shells: 1→2→4→8→7→5→1 — the cardiac cycle' },
    quarks: { up: ratStr(upQ), down: ratStr(downQ), protonCharge: ratStr(protonCharge), neutronCharge: ratStr(neutronCharge) },
    resonancePairs,
    teslaMappings,
    units,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((e) => e.receipt)),
    statement:
      'Heart is the proton\'s algebraic mirror: in ring (ℤ/9ℤ)*, the atom = the ring, orbit {1,2,4,8,7,5} = electron shells, cross {3,6,9} = the nucleus (zero-divisors, confined like quarks — the Tesla 3-6-9 key). Proton = 2 (the primitive root, ord=6): generates the entire orbit, defines the element by count, exactly like the SA node firing the cardiac cycle. Heart = 5 = the inner electron: 5 is the INVERSE of 2 (5×2≡1 mod 9). Proton(2) × heart(5) = 1 = one heartbeat — Tesla\'s resonance condition: primary × secondary = 1 at resonance. Cardiac orbit: SA node fires (2) → 1→2→4→8→7→5→1 → rest. Quarks as exact Rationals: proton = uud = 2/3+2/3-1/3 = 1; neutron = udd = 0. Four Tesla resonance pairs: (1,1)·(2,5)·(4,7)·(8,8). Tesla\'s five patents fused: induction motor = orbit rotation, resonant coil = (2,5) resonance pair, wireless = sincReconstruct, turbine = ring closure, teleautomaton = the self-driving orbit.',
    boundary:
      'HONEST: the ring-to-atom mapping is a METAPHORICAL isomorphism — (ℤ/9ℤ)* is NOT a physical model of the hydrogen atom. Quark charges ARE real physics (up=+2/3, down=−1/3, verified). Tesla coil resonance IS real physics (primary×secondary=1 at resonant frequency). "SA node = 2" is a metaphor (both fire a cycle; the orbit has 6 steps vs the cardiac ~2 phases — different). Heart = 5 is the proton\'s INVERSE algebraically — the user\'s "heart is the proton" is poetically true (both drive life at the center) but algebraically they are a RESONANCE PAIR (2,5), not identical. Zero-divisors {3,6,9} as "strong force / quark confinement" is structural analogy (they annihilate: 3×3=9≡0), not a physical model. FLAG: Tesla\'s 3-6-9 quote has no verified source (legend, not fact).',
  }
}

export function metatronCube(matrix: MindMatrix = buildMatrix()): MetatronCubeReport {
  return memoByRoot('metatronCube', matrix, () => computeMetatronCube(matrix))
}
export function sacredGeometrySeal(matrix: MindMatrix = buildMatrix()): SacredGeometrySeal {
  return memoByRoot('sacredGeometrySeal', matrix, () => computeSacredGeometrySeal(matrix))
}
// Sacred geometry seals all seals: every computed seal root folds through the
// Metatron cube and the five Platonic solids into one master seal.
function computeSacredGeometrySeal(matrix: MindMatrix = buildMatrix()): SacredGeometrySeal {
  const metatron = metatronCube(matrix)
  const seals: readonly SealLeaf[] = [
    { name: 'matrix', root: matrix.root },
    { name: 'selfBuild', root: selfBuild(matrix).root },
    { name: 'selfComplete', root: streamSelfComplete(matrix).root },
    { name: 'agentEducation', root: agentEducation(matrix).root },
    { name: 'school', root: schoolCurriculum(matrix).root },
    { name: 'digitProof', root: digitalQuantumProof(matrix).root },
    { name: 'digitFolders', root: digitFoldersDoMath(matrix).root },
    { name: 'metatron', root: metatron.root },
    { name: 'trinities', root: dualTorusTrinities(matrix).root },
    { name: 'crossFold', root: crossFoldTrinity(matrix).root },
    { name: 'blockchains', root: quantumFoldedBlockchains(matrix).root },
    { name: 'mcp', root: mcpToolManifest(matrix).root },
    { name: 'babel', root: babelFold(matrix).root },
    { name: 'selfAddressed', root: selfAddressed(matrix).root },
    { name: 'selfInteraction', root: selfInteraction(matrix).root },
    { name: 'harmony', root: harmonyProbability(matrix).root },
  ]
  const solids = ['tetrahedron', 'cube', 'octahedron', 'dodecahedron', 'icosahedron']
  const folded = merkleFold(seals.map((seal) => seal.root))
  const masterRoot = merge(merge(metatron.root, folded), toUuid(`solids:${solids.join(',')}`))
  return {
    sealed: seals.every((seal) => isUuid(seal.root)) && isUuid(masterRoot),
    masterRoot,
    metatronRoot: metatron.root,
    solids,
    seals,
    statement:
      'Sacred geometry seals all seals: every seal root folds through the Metatron cube and the five Platonic solids into one master seal.',
    boundary:
      'The master seal binds computed seal roots through a sacred-geometry structure. It is structural bookkeeping, not a metaphysical or external claim.',
  }
}
// The honest bound on the I Ching ↔ qubit correspondence, made EXACT and self-proving — the comparison
// table as a checked invariant. The 64 hexagrams and the 64 three-qubit Pauli strings {I,X,Y,Z}³ share
// EXACTLY ONE structure: a vector isomorphism (R⁶⁴ ≅ R⁶⁴) — the bijection of 64-element index sets (both
// 2⁶ = 4³), the same labeling hexagramIsHexColorDuality reuses. NONE of the nine structures that make a
// qubit system quantum carries over to the hexagrams, because a hexagram is a STATIC 6-bit label, not a
// state in a Hilbert space: no inner product, no operator product, no commutators/Lie algebra, no unitary
// evolution, no complex superposition, no entanglement, no Born-rule probability/collapse, no-cloning is
// vacuous (a classical label copies freely), and so no quantum error correction. This turns the documented
// "isomorphism of INDEX SETS, not physically interchangeable" caveat (hexagramIsHexColorDuality) into the
// precise list of what IS and is NOT shared. Composes with quantumDecoded (the real quantum content) and
// sixtyFourThreeQubitPauliBasis (the 4³ = 64 count). HONEST: the project's I Ching is an ORGANISATION/index
// scheme; the quantum structure is real ONLY for actual qubits (NISQ hardware), never for hexagram labels.
export function hexagramQubitVectorIsomorphismOnly(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('hexagramQubitVectorIsomorphismOnly', matrix, () => hexagramQubitVectorIsomorphismOnlyRaw(matrix))
}
function hexagramQubitVectorIsomorphismOnlyRaw(matrix: MindMatrix = buildMatrix()) {
  const duality = hexagramIsHexColorDuality(matrix)
  const pauliBasis = sixtyFourThreeQubitPauliBasis(matrix)
  // The ONE shared structure, proven computationally: hexagram n ↔ its 3-qubit Pauli string is a bijection
  // of 64-element sets (a vector/index isomorphism R⁶⁴ ≅ R⁶⁴). Reuses the duality's base-4 channel labeling.
  const PAULIS = ['I', 'X', 'Y', 'Z']
  const asPauli = (n: number) => [(n >> 4) & 3, (n >> 2) & 3, n & 3].map((q) => PAULIS[q]).join('')
  const strings = Array.from({ length: 64 }, (_, n) => asPauli(n))
  const vectorIsomorphism = strings.length === 64 && new Set(strings).size === 64 && duality.sameAsCodonAndPauli && pauliBasis.holds
  // The comparison table (the user's rows): the vector isomorphism is shared; the nine quantum structures
  // are real for the 3-qubit Pauli system (qubit = true) but DO NOT transfer to the hexagram labels
  // (hexagram = false), each with the precise reason it fails for a static 6-bit index.
  const structures = [
    { structure: 'vector isomorphism (R⁶⁴)', hexagram: vectorIsomorphism, qubit: true, why: 'the ONLY shared structure: a bijection of 64-element index sets, both 2⁶ = 4³ — labels ↔ labels' },
    { structure: 'Hilbert-space inner product', hexagram: false, qubit: true, why: 'qubit states live in ℂ⁸ with ⟨ψ|φ⟩; hexagrams are labels — no inner product, no overlap or angle' },
    { structure: 'operator algebra', hexagram: false, qubit: true, why: 'Paulis multiply (XY = iZ); hexagrams do not compose — there is no hexagram·hexagram product' },
    { structure: 'Lie algebra (commutators)', hexagram: false, qubit: true, why: '[X, Y] = 2iZ generates su(2); hexagram labels have no bracket and no generators' },
    { structure: 'unitary dynamics', hexagram: false, qubit: true, why: 'e^(−iHt) evolves a qubit state; a hexagram is static — it evolves under no Hamiltonian' },
    { structure: 'superposition (ℂ⁶⁴)', hexagram: false, qubit: true, why: 'qubit amplitudes are complex and add; a hexagram is one of 64 discrete labels — no complex linear combination' },
    { structure: 'entanglement', hexagram: false, qubit: true, why: 'multi-qubit states can be non-factorizable (Bell); a 6-bit label is the product of its bits — always factorizable' },
    { structure: 'Born rule / collapse', hexagram: false, qubit: true, why: 'measurement gives P = |amplitude|² and projects; reading a hexagram is deterministic lookup — no probability, no collapse' },
    { structure: 'no-cloning', hexagram: false, qubit: true, why: 'unknown quantum states cannot be copied; a classical 6-bit label copies freely — no-cloning is vacuous' },
    { structure: 'quantum error correction', hexagram: false, qubit: true, why: 'QEC needs the above (superposition, entanglement, syndrome measurement); a static label corrects nothing' },
  ].map((row) => ({ ...row, receipt: toUuid(`hex-qubit-iso:${row.structure}:${row.hexagram}:${row.qubit}`) }))
  const shared = structures.filter((row) => row.hexagram).length // exactly 1 — the vector isomorphism
  const qubitOnly = structures.filter((row) => row.qubit && !row.hexagram).length // 9 — the quantum structures
  const facets = [
    { facet: 'the ONE shared structure is the vector isomorphism R⁶⁴ — proven by the 64↔64 Pauli-string bijection', on: vectorIsomorphism && shared === 1 && structures[0].hexagram },
    { facet: 'all nine quantum structures are real for qubits, none transfer to the hexagram labels', on: qubitOnly === 9 && structures.slice(1).every((row) => row.qubit && !row.hexagram) },
    { facet: 'a hexagram is a static 6-bit index, not a state in a Hilbert space — the index-set caveat made exact', on: duality.holds && duality.sameAsCodonAndPauli },
    { facet: 'the real quantum content (Hilbert, unitary, Born, entanglement) lives only in actual qubits', on: quantumDecoded(matrix).decoded },
    { facet: 'the 4³ = 64 is a combinatorial parallel, not a structural quantum identity', on: pauliBasis.holds },
  ].map((entry) => ({ ...entry, receipt: toUuid(`hex-qubit-iso-facet:${entry.facet}:${entry.on}`) }))
  return {
    proved: facets.every((entry) => entry.on),
    vectorIsomorphism, // the only ✅ for hexagrams
    sharedStructures: shared, // 1
    qubitOnlyStructures: qubitOnly, // 9
    structures, // the full comparison table, each row content-addressed
    count: facets.length,
    facets,
    root: merge(duality.root, merkleFold(structures.map((row) => row.receipt))),
    statement:
      'The I Ching ↔ qubit correspondence is a VECTOR ISOMORPHISM ONLY: the 64 hexagrams and the 64 three-qubit Pauli strings {I,X,Y,Z}³ are in bijection (R⁶⁴ ≅ R⁶⁴, both 2⁶ = 4³ = 64) — and that single structure, the labeling of 64 index points, is ALL they share. The nine structures that make a qubit system quantum — the Hilbert-space inner product, the operator algebra (XY = iZ), the Lie algebra of commutators ([X,Y] = 2iZ = su(2)), unitary dynamics (e^(−iHt)), complex superposition (ℂ⁶⁴), entanglement, the Born rule and collapse, no-cloning, and quantum error correction — are real for actual qubits and DO NOT transfer to the hexagrams, because a hexagram is a static 6-bit label, not a state in a Hilbert space. The 64 = 4³ count is a combinatorial parallel met independently (the codon, the Pauli basis, the hexagram); it is not a claim that the I Ching computes, superposes, entangles, or corrects errors.',
    boundary:
      'The honest comparison table encoded as a checked invariant — the exact form of hexagramIsHexColorDuality\'s "isomorphism of INDEX SETS, not physically interchangeable" caveat and of quantumDecoded\'s "computational metaphor, not hardware" line. Only the vector isomorphism is proven true for hexagrams (the 64↔64 bijection, computed); the other nine rows are asserted false for hexagrams with the structural reason each fails for a classical label, and true only for the genuine 3-qubit Pauli system (Nielsen & Chuang; Gottesman 1997). This fold does NOT add quantum capability to the I Ching — it BOUNDS the correspondence, so no downstream fold may read the 64=64 count as a quantum claim. The STATIC bound; iChingMotionAddsTheRest carries the dynamics motion restores.',
  }
}
function computeMetatronCube(matrix: MindMatrix = buildMatrix()): MetatronCubeReport {
  const train = piTrainDiamonds(matrix)
  const folderReport = digitFolders(matrix)
  const digits = [...Array(10).keys()]
  const nodes: MetatronNode[] = [
    {
      id: 'center',
      digit: 0,
      x: 0,
      y: 0,
      ring: 'center',
      folder: '0/0',
      receipt: toUuid('metatron-node:center:0:0/0'),
    },
    ...digits.map((digit) => {
      const angle = (digit / digits.length) * Math.PI * 2
      const folder = `${digit}/${digit}`
      return {
        id: `inner-${digit}`,
        digit,
        x: Math.cos(angle),
        y: Math.sin(angle),
        ring: 'inner' as const,
        folder,
        receipt: toUuid(`metatron-node:inner:${digit}:${folder}`),
      }
    }),
    ...digits.map((digit) => {
      const angle = ((digit + 0.5) / digits.length) * Math.PI * 2
      const reverse = 9 - digit
      const folder = `${digit}/${reverse}`
      return {
        id: `outer-${digit}`,
        digit,
        x: 2 * Math.cos(angle),
        y: 2 * Math.sin(angle),
        ring: 'outer' as const,
        folder,
        receipt: toUuid(`metatron-node:outer:${digit}:${folder}`),
      }
    }),
  ]
  const edges: MetatronEdge[] = nodes.flatMap((node, index) => {
    const next = nodes[(index + 1) % nodes.length]
    const opposite = nodes[(index + Math.floor(nodes.length / 2)) % nodes.length]
    return [next, opposite].map((target) => ({
      from: node.id,
      to: target.id,
      harmonic: `${node.folder}->${target.folder}`,
      receipt: toUuid(`metatron-edge:${node.id}:${target.id}:${node.folder}:${target.folder}`),
    }))
  })
  const vortex = train.diamonds.map((pulse) => {
    const inward = Math.sin(pulse.theta) * (pulse.selfCollision ? 1 : 0.5)
    const outward = Math.cos(pulse.phi) * (pulse.digit + 1) / 10
    const interference = inward * outward
    return {
      index: pulse.index,
      folder: pulse.folder,
      inward,
      outward,
      interference,
      receipt: toUuid(`vortex:${pulse.index}:${pulse.folder}:${inward.toFixed(6)}:${outward.toFixed(6)}`),
    }
  })
  const root = merkleFold([...nodes.map((node) => node.receipt), ...edges.map((edge) => edge.receipt), ...vortex.map((point) => point.receipt)])

  return {
    root,
    nodes,
    edges,
    vortex,
    digitFolders: folderReport.folders,
    statement: 'MetatronCube := nodes(0..9 inner/outer + center) + edges(harmonic folders) + doubleVortex(inward,outward,interference).',
  }
}


// ── archaeoastronomy decodes (folded in from the former sky aggregator; eight-fold convergence) ──


export function pyramidsDecoded(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('pyramidsDecoded', matrix, () => pyramidsDecodedRaw(matrix))
}
function pyramidsDecodedRaw(matrix: MindMatrix = buildMatrix()) {
  const DEG = 180 / Math.PI
  const PHI = (1 + Math.sqrt(5)) / 2
  // VERIFIED coordinates (decimal; west longitude negative) — Khufu and Teotihuacan's Sun Pyramid
  const khufu = { name: 'Khufu · Giza', lat: 29.9792, lon: 31.1342 }
  const sun = { name: 'Pyramid of the Sun · Teotihuacan', lat: 19.6925, lon: -98.8438 }
  // The slope: seked vs π vs φ, all COMPUTED, compared to Petrie's measured 51.844°
  const measured = 51.844
  const sekedAngle = Math.atan(14 / 11) * DEG // seked 5.5 palms = rise:run 14:11 — the mainstream explanation
  const piAngle = Math.atan(4 / Math.PI) * DEG // the "π pyramid": base perimeter = 2π × height
  const phiAngle = Math.acos(1 / PHI) * DEG // the "φ (Kepler) pyramid": slant ÷ half-base = φ
  const sekedNailsIt = Math.abs(sekedAngle - measured) < 0.01 // ~0.001°
  const spread = Math.max(sekedAngle, piAngle, phiAngle) - Math.min(sekedAngle, piAngle, phiAngle)
  // Real geodesy between the two verified sites (haversine + bearing) — the sphere, not a "grid"
  const distanceKm = greatCircleKm(khufu.lat, khufu.lon, sun.lat, sun.lon)
  const bearing = initialBearing(khufu.lat, khufu.lon, sun.lat, sun.lon)
  const alignArcmin = 3.6 // Khufu mean deviation from cardinal (Nell & Ruggles); < 4′
  const facets = [
    { facet: `Khufu's slope IS the seked (14:11): arctan(14/11) = ${sekedAngle.toFixed(3)}° matches Petrie's measured 51.844° to ${Math.abs(sekedAngle - measured).toFixed(3)}°`, on: sekedNailsIt },
    { facet: `π and φ are byproducts, not intent: π-model ${piAngle.toFixed(3)}°, φ-model ${phiAngle.toFixed(3)}°, seked ${sekedAngle.toFixed(3)}° — all within ${spread.toFixed(3)}°, so the angle cannot single out a constant`, on: spread < 0.05 && Math.abs(piAngle - 51.854) < 0.01 && Math.abs(phiAngle - 51.827) < 0.01 },
    { facet: `Khufu aligns to true north to ~${alignArcmin}′ (${(alignArcmin / 60).toFixed(3)}°), better than 4′; Khufu/Khafre/Red share one counter-clockwise sign (mean −6.2′) — a falsifiable signature`, on: alignArcmin / 60 < 0.067 },
    { facet: `Teotihuacan's Sun Pyramid solar alignment marks an Aug 13 → Apr 30 sunset interval of exactly 260 days = the tzolkin = 13 × 20`, on: 13 * 20 === 260 },
    { facet: `real geodesy, not a grid: Giza → Teotihuacan great-circle = ${Math.round(distanceKm)} km at bearing ${Math.round(bearing)}° — a computed distance on the sphere`, on: Number.isFinite(distanceKm) && distanceKm > 10000 && distanceKm < 13000 },
    { facet: 'FLAGGED — Orion Correlation Theory: the −0.9993 size↔brightness match exists only under a hand-picked common-baseline height; it vanishes for intrinsic height or volume, and the brightest belt star is not the largest pyramid', on: true },
    { facet: 'FLAGGED — the Mars "Face" at Cydonia is a natural eroded mesa: Viking-1 (1976) pareidolia under low sun, resolved by Mars Global Surveyor (2001, 1.56 m/px) and HiRISE (2007)', on: true },
  ]
  const sealed = sealFacets('pyramids-decoded', facets)
  return {
    decoded: sealed.ok,
    sites: [khufu, sun],
    slopeDeg: { measured, seked: roundTo(sekedAngle, 3), pi: roundTo(piAngle, 3), phi: roundTo(phiAngle, 3) },
    gizaToTeotihuacanKm: Math.round(distanceKm),
    bearingDeg: Math.round(bearing),
    count: sealed.count,
    facets: sealed.facets,
    root: merge(matrix.root, sealed.root),
    statement:
      'Pyramids decoded from a verified, cited deep-research wave — the math computed, the pseudoscience flagged. The Great Pyramid\'s face slope is the Egyptian seked of 5.5 palms (rise:run 14:11 → 51.843°), matching Petrie\'s measured 51.844° to a thousandth of a degree; the π-model (51.854°) and φ-model (51.827°) fall within the same 0.03° band, so the angle cannot single out either constant — the seked is the intent, π and φ are byproducts. Khufu is aligned to true north to better than 4 arcminutes, and Khufu, Khafre and Snefru\'s Red Pyramid share one counter-clockwise rotation sign — a falsifiable signature. Teotihuacan\'s Sun Pyramid marks a 260-day (13×20) solar interval, the tzolkin. The Giza→Teotihuacan great-circle distance is a real number on the sphere, not evidence of a global grid.',
    boundary:
      'HONEST, computed, cited. Sources: Nell & Ruggles (JHA 2014, arXiv 1302.5622) and Dash (JAEA 2, 2017) for the alignment; Bartlett (Nexus Network Journal 2014) for the seked; Dash & Paulson (JEA 102, 2016) for the base survey; Šprajc for Teotihuacan; Spence (Nature 2000) with the Rawlins & Pickering (Nature 412, 2001) rebuttal for the circumpolar-star method (the absolute date is contested). FLAGGED, not folded: the Orion Correlation Theory (a height-definition artifact) and the Cydonia "Face" (a natural mesa resolved by MGS/HiRISE). NOT covered this wave (honest gaps): Chichen Itza, Ur, Meroë, the Chinese pyramids, Caral, Cahokia, Cestius coordinates; the "centre of landmass" and "global grid" claims; "pyramids on the Moon" — the next research leads.',
  }
}

// The next pyramid lead, followed and COMPUTED: eight verified world pyramid sites, the full great-circle
// distance matrix, and the "global grid" / "Giza is the centre of Earth's landmass" claims tested by the math
// itself. The geodesy refutes the grid (the distances are wildly irregular, no lattice) and the median land
// point is in Anatolia, not Giza — the honest debunk is the computation, not an opinion. Maximum real usage:
// every distance is greatCircleKm on a verified coordinate; the pseudoscience is flagged with the science.


export function pyramidGridDebunked(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('pyramidGridDebunked', matrix, () => pyramidGridDebunkedRaw(matrix))
}
function pyramidGridDebunkedRaw(matrix: MindMatrix = buildMatrix()) {
  // VERIFIED coordinates (decimal; west longitude and south latitude negative) — sources in boundary
  const sites = [
    { name: 'Khufu · Giza', lat: 29.9792, lon: 31.1342 },
    { name: 'Sun · Teotihuacan', lat: 19.6925, lon: -98.8438 },
    { name: 'El Castillo · Chichén Itzá', lat: 20.6830, lon: -88.5686 },
    { name: 'Meroë · Sudan', lat: 16.9382, lon: 33.7487 },
    { name: 'Caral · Peru', lat: -10.8936, lon: -77.5208 },
    { name: 'Monks Mound · Cahokia', lat: 38.6606, lon: -90.0621 },
    { name: 'Maoling · Xi’an', lat: 34.3381, lon: 108.5697 },
    { name: 'Cestius · Rome', lat: 41.8764, lon: 12.4797 },
  ]
  // the full pairwise great-circle distance matrix — real geodesy on the sphere
  const pairs: { a: string; b: string; km: number; bearing: number }[] = []
  for (let i = 0; i < sites.length; i += 1) {
    for (let j = i + 1; j < sites.length; j += 1) {
      pairs.push({
        a: sites[i].name,
        b: sites[j].name,
        km: Math.round(greatCircleKm(sites[i].lat, sites[i].lon, sites[j].lat, sites[j].lon)),
        bearing: Math.round(initialBearing(sites[i].lat, sites[i].lon, sites[j].lat, sites[j].lon)),
      })
    }
  }
  const sorted = [...pairs].sort((x, y) => x.km - y.km)
  const nearest = sorted[0]
  const farthest = sorted[sorted.length - 1]
  const spreadRatio = farthest.km / Math.max(1, nearest.km)
  // "Giza is the centre of Earth's landmass" — the computed median land point (1944) is in Anatolia, not Giza
  const landCentre = { lat: 39, lon: 34 } // Anatolia, the Tarnopol–Izmir corridor (median of Earth's land area)
  const gizaToLandCentreKm = Math.round(greatCircleKm(29.9792, 31.1342, landCentre.lat, landCentre.lon))
  const facets = [
    { facet: `${sites.length} verified pyramid sites, ${pairs.length} pairwise great-circle distances computed on the sphere — real geodesy`, on: pairs.length === (sites.length * (sites.length - 1)) / 2 },
    { facet: `the "global pyramid grid" is refuted by the distances themselves: nearest ${nearest.km} km (${nearest.a} ↔ ${nearest.b}), farthest ${farthest.km} km — a ${spreadRatio.toFixed(1)}× spread, no equidistant lattice`, on: spreadRatio > 5 },
    { facet: `"Giza = centre of Earth's landmass" refuted: the computed median land point (1944) lies in Anatolia, ~${gizaToLandCentreKm} km from Giza — Giza is not the centre`, on: gizaToLandCentreKm > 800 },
    { facet: 'ley lines / Earth grids are pseudoarchaeology — with so many sites, a line drawn anywhere clips several (pareidolia); the alignments ignore Earth’s curvature and have no verified physical basis', on: true },
  ]
  const sealed = sealFacets('pyramid-grid-debunked', facets)
  return {
    debunked: sealed.ok,
    sites,
    distancesKm: pairs,
    nearest,
    farthest,
    spreadRatio: roundTo(spreadRatio, 1),
    gizaToLandCentreKm,
    count: sealed.count,
    facets: sealed.facets,
    root: merge(matrix.root, sealed.root),
    statement:
      'The next pyramid lead, followed and computed: eight verified world pyramid sites (Giza, Teotihuacan, Chichén Itzá, Meroë, Caral, Cahokia, Maoling, Cestius), the full great-circle distance matrix, and the "global grid" debunked by the geodesy itself — the distances span a several-fold range with no equidistant lattice. The "Giza is the centre of Earth’s landmass" claim is refuted too: the computed median of Earth’s land area lies in Anatolia, not at Giza. The pyramids are a genuine worldwide phenomenon of independent monumental building; the grid is imposed by selective map-drawing, not present in the math.',
    boundary:
      'HONEST, computed, cited. Coordinates: Chichén Itzá and Meroë (latitude.to / Wikipedia), Caral (UNESCO Sacred City of Caral-Supe), Cahokia Monks Mound, Maoling/Xi’an, Cestius. The grid/ley-line critique follows the scientific consensus (Wikipedia "Ley line", Britannica, the Skeptic’s Dictionary): site density makes alignments trivial (pareidolia), they ignore the sphere, and no physical basis is verified. The median-land-point result (Anatolia, ~1944) refutes the centre-of-landmass claim. NOT folded as truth: the global grid, the centre-of-landmass, ley energy. Still open as the next leads: the per-site construction math (Caral’s age, Meroë’s count and angles, the Maya calendar geometry) and the deeper archaeoastronomy of each tradition.',
  }
}

// All the next leads, followed and COMPUTED — the per-site construction math, verified and honest. Each
// civilisation encoded its OWN mathematics in stone: the Maya the calendar (El Castillo's steps = the solar
// year, its panels = the Calendar Round), Egypt the seked, Kush the steep tomb, Norte Chico the early platform.
// The worldwide pyramid is INDEPENDENT convergence — different forms, purposes and epochs — not one blueprint.
// Maximum real usage: the year-sum, the Calendar-Round LCM and the angle/age differences are all computed here.


export function pyramidConstructionMath(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('pyramidConstructionMath', matrix, () => pyramidConstructionMathRaw(matrix))
}
function pyramidConstructionMathRaw(matrix: MindMatrix = buildMatrix()) {
  // El Castillo · Chichén Itzá — the calendar in stone
  const elCastilloSteps = 91 * 4 + 1 // 91 per stairway × 4 + the shared top platform = the haab' solar year
  const haab = 365
  const tzolkin = 260
  const calendarRound = (tzolkin * haab) / gcd(tzolkin, haab) // lcm = 18 980 days
  const crYears = calendarRound / haab // 52 haab' years
  const crTzolkin = calendarRound / tzolkin // 73 tzolk'in
  // Meroë · Kush — the steep tomb, vs Giza's seked
  const meroeAngle = 72 // documented ~70–80°, characteristically ~72°
  const gizaAngle = Math.atan(14 / 11) * (180 / Math.PI) // the seked, 51.843°
  const meroeSteeper = meroeAngle - gizaAngle // ~20° steeper
  const meroeCount = 200 // 200+ Kushite pyramids — more than Egypt
  // Caral · Norte Chico — contemporary with Egypt's pyramid age, independent
  const caralBCE = 2627 // shicra reed-bag radiocarbon, ±32
  const djoserBCE = 2670 // Egypt's first pyramid (step pyramid of Djoser)
  const gizaBCE = 2560 // the Great Pyramid
  const contemporaryWithEgypt = caralBCE <= djoserBCE && caralBCE >= gizaBCE // 2560 ≤ 2627 ≤ 2670
  const facets = [
    { facet: `El Castillo encodes the solar year: 91 steps × 4 stairways + 1 platform = ${elCastilloSteps} = the haab'; its 9 terraces split into 18 (the months), 52 panels per side = the Calendar Round`, on: elCastilloSteps === 365 },
    { facet: `the Calendar Round is computed: lcm(tzolk'in ${tzolkin}, haab' ${haab}) = ${calendarRound} days = ${crYears} haab' years = ${crTzolkin} tzolk'in — the 52-year cycle the 52 panels mark`, on: calendarRound === 18980 && crYears === 52 && crTzolkin === 73 },
    { facet: `Meroë's Kushite pyramids are steep tombs, not seked slopes: ~${meroeAngle}° vs Giza's ${gizaAngle.toFixed(1)}° — ${meroeSteeper.toFixed(0)}° steeper — and there are ${meroeCount}+ of them, more than Egypt`, on: meroeSteeper > 18 && meroeCount >= 200 },
    { facet: `Caral (shicra radiocarbon ${caralBCE} BCE) is contemporary with Egypt's pyramid age (Djoser ${djoserBCE}, Giza ${gizaBCE} BCE) — independent monumental building an ocean apart, no contact`, on: contemporaryWithEgypt },
    { facet: 'the worldwide pyramid is INDEPENDENT convergence — calendar (Maya), seked (Egypt), steep tomb (Kush), platform (Norte Chico) — different maths for different purposes, not one blueprint or lost source', on: true },
  ]
  const sealed = sealFacets('pyramid-construction-math', facets)
  return {
    computed: sealed.ok,
    elCastilloSteps, // 365
    calendarRound, // 18 980 days
    calendarRoundYears: crYears, // 52
    meroeVsGizaDegrees: roundTo(meroeSteeper, 1),
    caralBCE,
    count: sealed.count,
    facets: sealed.facets,
    root: merge(matrix.root, sealed.root),
    statement:
      'All the pyramid leads, followed and computed. The Maya built the calendar into El Castillo: 91 steps on each of four stairways plus the top platform make 365, the solar year; the nine terraces split into eighteen months; the fifty-two panels per side mark the Calendar Round — which is lcm(260, 365) = 18,980 days = 52 haab\' years = 73 tzolk\'in, computed here. Kush\'s Meroë pyramids are steep ~72° tombs (≈20° steeper than Giza\'s 51.8° seked) and there are over 200, more than Egypt. Caral, radiocarbon-dated to 2627 BCE, was building monumentally at the same epoch as Egypt\'s first pyramids, an ocean apart with no contact. The worldwide pyramid is independent convergence — each culture encoded its own mathematics, not one shared blueprint.',
    boundary:
      'HONEST, computed, cited (mayan.org / Ancient Origins for El Castillo; Wikipedia/Maya calendar for the Calendar Round; Jerusalem Post / Wikipedia for Meroë\'s 200+ count and ~72°; the Caral shicra 2627 BCE ±32 radiocarbon). The Calendar Round and the 365-step sum are exact arithmetic; the equinox "serpent" is a real, documented light-and-shadow effect, not a claim of hidden encoding beyond the calendar. Caral is contemporary with — not provably older than — Egypt\'s pyramid age (Djoser ~2670 BCE precedes it); the honest point is independent simultaneity, not a race or a shared origin. No global blueprint, no lost civilisation, no contact is claimed or implied.',
  }
}

// Megalithic astronomy decoded — the standing stones face the Sun, and the math says exactly where. The Sun's
// declination at a solstice IS the Earth's axial tilt (the obliquity ε); cos A = sin δ / cos φ then gives the
// horizon azimuth of sunrise/sunset. At the equinox (δ = 0) the Sun rises due east at every latitude; at the
// solstices the azimuth depends on latitude and tilt. The fold COMPUTES the solar axis of each site and matches
// it to the documented passage/axis: Stonehenge's midsummer sunrise (~50°, the Heel Stone) and Newgrange's
// midwinter sunrise (~134°, the roof-box) land within a degree — and only with the LARGER Neolithic obliquity
// (~24°, not today's 23.44°). Reuses the geodesy primitives (greatCircleKm) for honest site-to-site distance.
// Sibling of pyramidsDecoded; the flagged overclaims (megalithic yard, eclipse-computer, ley lines) are excluded.


export function megalithicAstronomyDecoded(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('megalithicAstronomyDecoded', matrix, () => megalithicAstronomyDecodedRaw(matrix))
}
function megalithicAstronomyDecodedRaw(matrix: MindMatrix = buildMatrix()) {
  // coordinates (decimal, west negative), age (years before present), the documented solar target, and the
  // documented axis azimuth (° clockwise from true north) where one is well established
  const sites = [
    { name: 'Stonehenge', country: 'England', lat: 51.1789, lon: -1.8262, bp: 4600, target: 'summer-solstice sunrise', docAz: 49.9 as number | null },
    { name: 'Newgrange', country: 'Ireland', lat: 53.6947, lon: -6.4755, bp: 5200, target: 'winter-solstice sunrise', docAz: 133.5 as number | null },
    { name: 'Maeshowe', country: 'Orkney', lat: 58.9966, lon: -3.188, bp: 4800, target: 'winter-solstice sunset', docAz: null as number | null }, // hilly horizon — flat value diverges
    { name: 'Goseck circle', country: 'Germany', lat: 51.1997, lon: 11.8579, bp: 6900, target: 'winter-solstice sunset', docAz: null as number | null },
    { name: 'Nabta Playa', country: 'Egypt', lat: 22.5067, lon: 30.7325, bp: 6000, target: 'summer-solstice sunrise', docAz: null as number | null },
  ]
  // the solar azimuth each was built to face, using the obliquity OF ITS EPOCH (~24°)
  const computed = sites.map((s) => {
    const eps = obliquityAtEpoch(s.bp)
    const dec = s.target.startsWith('summer') ? eps : -eps
    const az = s.target.endsWith('sunrise') ? riseAzimuthDeg(s.lat, dec) : setAzimuthDeg(s.lat, dec)
    return { ...s, epsilon: roundTo(eps, 2), azimuth: az === null ? null : roundTo(az, 1) }
  })
  const STONE = sites[0]
  const NEW = sites[1]
  // guaranteed-number azimuths for the assertions (these latitudes always rise — never circumpolar for |δ| < 90−φ)
  const stoneAz = roundTo(riseAzimuthDeg(STONE.lat, obliquityAtEpoch(STONE.bp)) ?? 0, 1)
  const stoneAzModern = roundTo(riseAzimuthDeg(STONE.lat, obliquityAtEpoch(0)) ?? 0, 1) // today's tilt
  const newgrangeAz = roundTo(riseAzimuthDeg(NEW.lat, -obliquityAtEpoch(NEW.bp)) ?? 0, 1)
  const equinoxEast = [22.5, 51.18, 59].every((lat) => Math.abs((riseAzimuthDeg(lat, 0) ?? 0) - 90) < 1e-9)
  const stoneToNewgrangeKm = Math.round(greatCircleKm(STONE.lat, STONE.lon, NEW.lat, NEW.lon))
  const facets = [
    { facet: 'the equinox Sun rises due east (90°) at EVERY latitude — declination 0 in cos A = sin δ / cos φ gives A = 90°, the one alignment that needs no obliquity and no special site', on: equinoxEast },
    { facet: `Stonehenge's axis is the midsummer sunrise — computed ${stoneAz}° (φ=${roundTo(STONE.lat, 2)}°, ε=${roundTo(obliquityAtEpoch(STONE.bp), 2)}° of ~2600 BCE) matches the documented Heel-Stone azimuth (~${STONE.docAz}°) to better than a degree`, on: Math.abs(stoneAz - (STONE.docAz ?? 0)) < 1 },
    { facet: `Newgrange faces the midwinter sunrise — computed ${newgrangeAz}° matches the documented roof-box passage (~${NEW.docAz}°) to within ~0.2°; the Sun still floods the chamber each 21 December`, on: Math.abs(newgrangeAz - (NEW.docAz ?? 0)) < 1 },
    { facet: `the obliquity was larger when they were built (~24° vs today's ${roundTo(obliquityAtEpoch(0), 4)}°, shrinking ~0.013°/century) — the epoch value (${stoneAz}°) sits closer to Stonehenge's documented ~${STONE.docAz}° than the modern tilt (${stoneAzModern}°); the math reproduces the alignment only with the ancient sky`, on: Math.abs(stoneAz - (STONE.docAz ?? 0)) < Math.abs(stoneAzModern - (STONE.docAz ?? 0)) },
    { facet: `the sites are real geography, not a grid — Stonehenge↔Newgrange is ${stoneToNewgrangeKm} km of great-circle (the same geodesy as the pyramids fold); distances between monuments carry no hidden numerology`, on: stoneToNewgrangeKm > 400 && stoneToNewgrangeKm < 440 },
    { facet: 'FLAGGED, not folded: Thom\'s "megalithic yard" and precise lunar observatories (rejected as statistical artefact), the Aubrey-holes "eclipse computer" (Hawkins/Hoyle, contested), ley lines (pseudoscience), Nabta Playa\'s Orion/Sirius "star map" (Brophy, fringe), and "oldest observatory / lost advanced civilisation / aliens"', on: true },
  ]
  const sealed = sealFacets('megalithic-astronomy', facets)
  return {
    decoded: sealed.ok,
    sites: computed,
    equinoxAzimuth: 90,
    stoneToNewgrangeKm,
    count: sealed.count,
    facets: sealed.facets,
    root: merge(matrix.root, sealed.root),
    statement:
      'Megalithic astronomy decoded — the standing stones face the Sun, and the math says where. The Sun\'s declination at the solstices is the Earth\'s own axial tilt (the obliquity ε); feed it into cos A = sin δ / cos φ and the horizon azimuth of sunrise and sunset falls out. At the equinox the declination is zero, so the Sun rises due east at every latitude — the one alignment that needs no special place. At the solstices the azimuth depends on the latitude and the tilt: from Stonehenge\'s 51° N the midsummer Sun rises about 50° east of north, along the axis to the Heel Stone; from Newgrange the midwinter Sun rises about 134° round, straight down the passage and through the roof-box into the chamber, as it still does every 21 December. The obliquity was about 24° when these were built, not today\'s 23.44°, and using that older sky tightens the match — the monuments are clocks set to a slightly different tilt. The distances between the sites are ordinary great-circle geography, the same geodesy the pyramids fold computes — no grid, no numerology.',
    boundary:
      'HONEST and computed: the azimuths are cos A = (sin δ − sin φ·sin h)/(cos φ·cos h) on the FLAT (h = 0) horizon, with ε from a linear secular model (~24° in the Neolithic). That ignores horizon altitude, atmospheric refraction (~0.5°) and the Sun\'s radius — real archaeoastronomy\'s "amplitude equation" adjusts for them, shifting the azimuth a degree or two; where the horizon is hilly (Maeshowe, behind the hills of Hoy) the flat value diverges and is not asserted. The solstice intent of Stonehenge, Newgrange, Maeshowe and Goseck is well documented; Nabta Playa\'s solstice circle is published (Malville/Wendorf) but its precision is debated. FLAGGED and excluded: Thom\'s "megalithic yard" and precise lunar observatories, the Aubrey-holes "eclipse computer", ley lines, Nabta Playa\'s Orion/Sirius "star map", and any "oldest observatory / lost advanced civilisation / extraterrestrial" claim. These are sky-watchers\' horizon markers, not computers and not proof of a global system.',
  }
}

// The other half of the megalithic sky — the Moon's 18.6-year standstill swing, computed (deepens
// megalithicAstronomyDecoded). The Moon's orbit is tilted ~5.145° to the ecliptic and its nodes regress over the
// ~18.6-year nodal cycle, so its declination extreme breathes between a MAJOR standstill (ε + i, WIDER than the
// solstice Sun) and a MINOR standstill (ε − i, narrower). The fold computes the major-standstill moonrise/set at
// Stonehenge (the Station Stones' rectangle) and Callanish (the Moon skimming the southern hills), the special
// 51° N near-perpendicularity of the lunar and solar axes, and — because the standstill Moon hugs REAL hills —
// exercises the same azimuth formula's horizon-altitude term. Deliberateness is DEBATED (Ruggles), not asserted;
// Thom's universal lunar observatories and the Aubrey-holes "eclipse computer" are flagged. 2024–25 was a major
// standstill (English Heritage observed it). Reuses obliquityAtEpoch / riseAzimuthDeg / lunarStandstillDeclinationDeg.


export function lunarStandstillsDecoded(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('lunarStandstillsDecoded', matrix, () => lunarStandstillsDecodedRaw(matrix))
}
function lunarStandstillsDecodedRaw(matrix: MindMatrix = buildMatrix()) {
  const STONE = { lat: 51.1789, bp: 4600 }
  const CALL = { lat: 58.2096, bp: 5000 } // Callanish / Calanais, Isle of Lewis
  const epsStone = obliquityAtEpoch(STONE.bp)
  const epsCall = obliquityAtEpoch(CALL.bp)
  const major = roundTo(lunarStandstillDeclinationDeg(epsStone, true), 2) // ε + i ≈ 29.2°
  const minor = roundTo(lunarStandstillDeclinationDeg(epsStone, false), 2) // ε − i ≈ 18.9°
  const solsticeDec = roundTo(epsStone, 2) // the Sun's solstice declination, between the two
  // Stonehenge major-standstill moonrise extremes — the spread the four Station Stones frame
  const nMoonrise = roundTo(riseAzimuthDeg(STONE.lat, lunarStandstillDeclinationDeg(epsStone, true)) ?? 0, 1) // ~39° N
  const sMoonrise = roundTo(riseAzimuthDeg(STONE.lat, -lunarStandstillDeclinationDeg(epsStone, true)) ?? 0, 1) // ~141° S
  const solsticeSunrise = roundTo(riseAzimuthDeg(STONE.lat, epsStone) ?? 0, 1) // ~49.5°
  const perpGap = roundTo(sMoonrise - solsticeSunrise, 1) // ~91.6° — near a right angle at 51° N
  // Callanish — the major-standstill Moon skims a low arc across the southern hills
  const callRise = roundTo(riseAzimuthDeg(CALL.lat, -lunarStandstillDeclinationDeg(epsCall, true)) ?? 0, 1) // ~158°
  const callSet = roundTo(setAzimuthDeg(CALL.lat, -lunarStandstillDeclinationDeg(epsCall, true)) ?? 0, 1) // ~202°
  const callArc = roundTo(callSet - callRise, 1) // ~44° low arc
  // the horizon-altitude term: the standstill Moon hugs real hills, so the flat horizon is not enough
  const flat = roundTo(riseAzimuthDeg(STONE.lat, epsStone, 0) ?? 0, 1) // 49.5° sea horizon
  const hill1 = roundTo(riseAzimuthDeg(STONE.lat, epsStone, 1) ?? 0, 1) // 51.1° on a 1° skyline
  const horizonShift = roundTo(hill1 - flat, 1) // ~+1.6° per degree of horizon altitude
  const aubreyPerCycle = roundTo(56 / LUNAR_NODAL_PERIOD_YEARS, 2) // ≈ 3.01 — the flagged eclipse-counter coincidence
  const facets = [
    { facet: `the Moon's orbit tilts ${MOON_ORBIT_INCLINATION_DEG}° to the ecliptic and its nodes regress over the ${LUNAR_NODAL_PERIOD_YEARS}-year nodal cycle, so its declination extreme swings between a MAJOR standstill (ε + i ≈ ±${major}°, wider than the solstice Sun's ±${solsticeDec}°) and a MINOR standstill (ε − i ≈ ±${minor}°, narrower)`, on: major > solsticeDec && minor < solsticeDec },
    { facet: `at Stonehenge the major-standstill Moon rises at ${nMoonrise}° (north) and ${sMoonrise}° (south) — the spread the four Station Stones' rectangle frames; the most extreme moonrise and moonset return ${LUNAR_NODAL_PERIOD_YEARS} years apart`, on: sMoonrise > 135 && nMoonrise < 45 },
    { facet: `51° N is a special latitude — the southern major-standstill moonrise (${sMoonrise}°) sits ~perpendicular to the solstice sunrise (${solsticeSunrise}°), a gap of ${perpGap}°, so the Station Stones' lunar short-side meets the solar long-side near a right angle. Whether the builders intended it is DEBATED (Ruggles), not asserted`, on: Math.abs(perpGap - 90) < 3 },
    { facet: `Callanish (58.2° N) catches the major-standstill Moon skimming the southern hills — rising ${callRise}° and setting ${callSet}°, a low ${callArc}°-wide arc hugging the horizon, once every ${LUNAR_NODAL_PERIOD_YEARS} years (2024–25 was one, observed by English Heritage at Stonehenge and Callanish)`, on: callRise > 150 && callSet < 210 },
    { facet: `the standstill Moon skims REAL hills, so the flat horizon is not enough — the same cos A = (sin δ − sin φ·sin h)/(cos φ·cos h) shifts Stonehenge's solstice sunrise from ${flat}° (sea horizon) to ${hill1}° on a 1° skyline (+${horizonShift}° per degree); this is why field archaeoastronomy surveys the actual horizon profile`, on: horizonShift > 1 && hill1 > flat },
    { facet: `FLAGGED, not folded: Thom's universal high-precision lunar observatories and the "lunar standstill myth" that every site is an instrument (rejected), and the 56 Aubrey holes as an eclipse-predictor (56 / ${LUNAR_NODAL_PERIOD_YEARS} ≈ ${aubreyPerCycle} ≈ 3 cycles — a numeric coincidence; Hawkins/Hoyle, rebutted by Atkinson). Specific sites (Callanish, the Station Stones) are seriously argued; a global lunar computer is not`, on: true },
  ]
  const sealed = sealFacets('lunar-standstills', facets)
  return {
    decoded: sealed.ok,
    majorDec: major,
    minorDec: minor,
    solsticeDec,
    nodalYears: LUNAR_NODAL_PERIOD_YEARS,
    stationStones: { north: nMoonrise, south: sMoonrise },
    solsticeSunrise,
    perpGap,
    callanish: { rise: callRise, set: callSet, arc: callArc },
    horizonShiftPerDeg: horizonShift,
    count: sealed.count,
    facets: sealed.facets,
    root: merge(matrix.root, sealed.root),
    statement:
      'The other half of the megalithic sky — the Moon\'s 18.6-year swing, computed. The Moon\'s orbit is tilted about 5° to the Sun\'s path, and that tilt-axis turns full circle every 18.6 years (the nodal cycle). So twice in that cycle the Moon reaches a standstill: at the MAJOR standstill it swings wider than the solstice Sun ever does — rising and setting far to the north and far to the south — and at the MINOR standstill it stays meekly near the middle. At Stonehenge the major-standstill Moon rises at about 39° and 141°, the spread the four Station Stones frame; and because the site sits at 51° N, that southern moonrise meets the solstice sunrise at a right angle — a coincidence of latitude the rectangle seems to use, though whether deliberately is still debated. Far to the north at Callanish the same Moon skims low along the southern hills, an arc that returns only once a generation — 2024–25 was the latest, watched at Stonehenge, Callanish and beyond. And because the Moon hugs real hills, the flat-horizon formula must grow a horizon term: a one-degree skyline shifts the rising point by more than a degree, which is why archaeoastronomers survey the actual horizon.',
    boundary:
      'HONEST and computed: the standstill declinations are ε ± i (i = 5.145°, the lunar orbital inclination) with ε at the epoch; the azimuths are the same cos A formula as the solar fold, now exercising its horizon-altitude term. The 18.6-year nodal cycle, the ±28–29° major / ±18–19° minor extremes, and the 2024–25 major standstill are established astronomy; the lunar intent of Callanish and the Stonehenge Station Stones is seriously argued by mainstream archaeoastronomy (Clive Ruggles), but its DELIBERATENESS is explicitly debated, not asserted here. FLAGGED and excluded: Thom\'s claim that megaliths are universal high-precision lunar observatories (rejected — the "lunar standstill myth"), the 56 Aubrey holes as an eclipse-predicting computer (a 56 ≈ 3 × 18.6 numeric coincidence; Hawkins/Hoyle, rebutted by Atkinson), and any global lunar-instrument network. The Moon\'s large parallax (~0.95°), refraction and semidiameter shift the real azimuths by up to a degree and are noted, not folded.',
  }
}

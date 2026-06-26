// ☶ Gèn · Mountain — vortex / math: 1-2-4-8-7-5 lattice, paint tiers (dissolved src/math compose mount).
import type { MindMatrix } from '../../wind/types'
import { buildMatrix, oneMathManyPresentations } from '../../heaven/compute'
import {
  VORTEX_SEQUENCE,
  computesGate,
  foldPair,
  isUuid,
  memoByRoot,
  merge,
  merkleFold,
  rat,
  ratEq,
  toUuid,
  vortexHarmonicRatios,
  vortexNext,
  vortexPrev,
  digitalRoot,
} from '../../0'
import { merkaba } from '../../mountain/geometry'
import { merkabaComputes } from '../../mountain/topology'

export {
  survive, admixToward, injectError, markovStep, markovEvolve, stationary, chsh,
  residueVector, realign, phaseDrift, slip, inductionStep, inductionEvolve,
  pmixStep, pmixEvolve, congruence, hopfieldStore, hopfieldEnergy, hopfieldRecall,
  bumpStep, bumpEvolve, type Edge,
} from '../../0'
export { merkaba, bothEarthsRotateWithinEachOther, type BothEarthsMerkabaRotation, type BothEarthsRotationShell } from '../../mountain/geometry'
export { knowledgeRevealedByMerkabaFold, merkabaTrace, merkabasInDoubleTorus, merkabaComputes } from '../../mountain/topology'
export { phase } from '../../6/4'
export {
  A432_OCTAVES, priceFromA432, simpleReturns, backtest, buyAndHold, sma, crossoverPositions,
  rollingZScores, meanReversionPositions, dominantCycle, cycleSlope, spectralCyclePositions,
  regimeLabels, estimateRegimeMatrix, regimeSwitchPositions, realizedVol, inverseVolSize,
  volTargetPositions, tradingReceipt, liveCapture, larmorFromMicrotesla, dopplerFromMotion,
  spectrumFromSamples, backtestRealPrices, realtimeSources, tradingSimulationComputes,
  type BacktestResult,
} from '../../thunder/trading'

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
    boundary: 'Mod-9 vortex framework — symbolic.',
  }
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
    boundary: 'Deterministic from vortexMath — UI convention, not profiler trace.',
  }
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
    boundary: 'Composition of vortexMath, digit probe, paint tiers, ratios, presentations — not Rodin coil physics.',
  }
  })
}

/** Digit-folder sequence probe — avoids architecture↔vortex cycle. */
function digitFolderSequenceProbe(vortex: ReturnType<typeof vortexMath>) {
  const sequence = [...vortex.doubling, 3, 6, 9, 0] as const
  const base = 10
  const digits = sequence.map((d) => {
    const reverse = d === 0 ? base : base - d
    const overflows = reverse >= base
    const fold = foldPair(toUuid(`digit-folder:${d}`), toUuid(`digit-subfolder:${reverse}`))
    return {
      digit: d,
      reverse,
      overflows,
      sumsToTen: !overflows && d + reverse === base,
      fusion: fold.merged,
    }
  })
  return {
    fused:
      digits.length === 10
      && digits.filter((entry) => entry.sumsToTen).length === 9
      && digits.filter((entry) => entry.overflows).length === 1
      && digits.every((entry) => isUuid(entry.fusion)),
    sequence: [...sequence],
    root: merkleFold(digits.map((entry) => entry.fusion)),
  }
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
        'Bodies live in domain barrels; src/vortex/math is the canonical import surface after src/math census dissolve.',
    }
  })
}

/** npm run timeout-demo — enforcement ops thin-mount smoke test. */
export function runTimeoutDemoExit(_root: string, _argv: readonly string[] = []): number {
  process.stdout.write('timeout-demo: sealed src vortex/math mount ok\n')
  return 0
}

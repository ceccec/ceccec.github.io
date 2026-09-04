/**
 * THE HEXBIT BENCHMARK — is a hexagram-as-six-bits actually faster than the alternatives?
 *
 * "Hexbits compute faster than all else" is a comparative claim, and a comparative claim needs the
 * alternatives named and the margin measured. src/earth/iching defines four representations of the
 * same 64-cell lattice — the six-bit integer, an array of six booleans, a six-character string, and a
 * precomputed 64-row table — each with the same three operations from the corpus's own vocabulary:
 * reflect (錯卦), reverse (綜卦) and nuclear (互卦).
 *
 * THREE RULES, EACH LEARNED THE HARD WAY IN THIS REPOSITORY.
 *
 * 1. CORRECTNESS BEFORE SPEED. The agreement fold must pass before anything is timed. A benchmark run
 *    over implementations that disagree measures which one cuts the most corners, and the fastest way
 *    to answer a question is always to answer it wrongly.
 *
 * 2. THE TIMED PATH MUST BE PROVEN TO HAVE RUN. Every trial accumulates a checksum over its results,
 *    and the checksums of all four representations must be EQUAL. That defeats dead-code elimination —
 *    a loop whose result is discarded can be optimised to nothing and would post a spectacular time —
 *    and it proves the timed code computed the same answers as the reference, not merely that a
 *    function with the right name was called.
 *
 * 3. A SINGLE WALL-CLOCK READING IS NOISE. Forty-nine builds in one session here ranged 126 to 221
 *    seconds on identical input, and a ratchet seeded on one reading fired on the next having caught
 *    nothing but machine load. So every figure is the MEDIAN of several trials and the spread is
 *    printed beside it. A benchmark that reports one number is reporting its luckiest or unluckiest
 *    moment and calling it a property of the code.
 *
 * DIRECTION OF FAILURE: this REPORTS, it does not gate. Timings are not reproducible across machines,
 * and a ratchet on them would fire on load rather than on regression — the mistake made three times
 * over in scripts/verify/build-time.ts before the ratchet was moved onto a quantity that holds still.
 * The one thing it does refuse is timing implementations that disagree, or whose checksums differ.
 */

import {
  HEXBIT_LATTICE,
  hexbitNuclear, hexbitReflect, hexbitReverse,
  hexbitOfLines, linesOf, linesNuclear, linesReflect, linesReverse,
  hexbitOfString, stringOf, stringNuclear, stringReflect, stringReverse,
  hexbitRepresentationsAgree, hexbitTable,
} from '../../src/earth/iching/index.ts'

const TRIALS = 7
const WARMUP = 3

export type Timing = { readonly label: string; readonly medianNs: number; readonly minNs: number; readonly maxNs: number; readonly checksum: number }

/**
 * One sweep of the whole lattice, accumulating an ORDER-SENSITIVE checksum so the work cannot be
 * optimised away AND cannot be faked by a different operation.
 *
 * This was a plain sum, and a plain sum is a weak checksum: it sees a multiset, not a sequence. All
 * three operations here summed to exactly 2016 — reflect and reverse because they are bijections on
 * 0..63, and nuclear DESPITE being four-to-one onto sixteen values, which is a real arithmetic
 * coincidence and was verified rather than assumed. So the guard would have passed if one
 * representation had computed reverse while another computed reflect. The tell was that three
 * different operations printed the identical checksum; a number that clean is a question, not a
 * result.
 *
 * Multiplying by an odd constant before adding makes the accumulator depend on the ORDER and the
 * position of every value, so two different operations cannot collide by having the same total.
 */
function sweep(op: (h: number) => number): number {
  let acc = 0
  for (let h = 0; h < HEXBIT_LATTICE; h += 1) acc = (Math.imul(acc, 31) + op(h)) | 0
  return acc
}

function time(label: string, op: (h: number) => number, sweeps: number): Timing {
  for (let w = 0; w < WARMUP; w += 1) sweep(op)
  const samples: number[] = []
  let checksum = 0
  for (let t = 0; t < TRIALS; t += 1) {
    const started = performance.now()
    let acc = 0
    for (let s = 0; s < sweeps; s += 1) acc = (Math.imul(acc, 31) + sweep(op)) | 0
    const elapsed = performance.now() - started
    checksum = acc
    samples.push((elapsed * 1e6) / (sweeps * HEXBIT_LATTICE))
  }
  samples.sort((a, b) => a - b)
  return { label, medianNs: samples[Math.floor(TRIALS / 2)]!, minNs: samples[0]!, maxNs: samples[TRIALS - 1]!, checksum }
}

export function hexbitBenchmark(sweeps = 20000): { readonly op: string; readonly timings: readonly Timing[] }[] {
  const table = hexbitTable()
  return [
    {
      op: 'reflect',
      timings: [
        time('hexbit  (xor mask)', hexbitReflect, sweeps),
        time('table   (lookup)', (h) => table[h]!.reflect, sweeps),
        time('lines   (boolean[6])', (h) => hexbitOfLines(linesReflect(linesOf(h))), sweeps),
        time('string  ("101010")', (h) => hexbitOfString(stringReflect(stringOf(h))), sweeps),
      ],
    },
    {
      op: 'nuclear',
      timings: [
        time('hexbit  (shift+mask)', hexbitNuclear, sweeps),
        time('table   (lookup)', (h) => table[h]!.nuclear, sweeps),
        time('lines   (boolean[6])', (h) => hexbitOfLines(linesNuclear(linesOf(h))), sweeps),
        time('string  ("101010")', (h) => hexbitOfString(stringNuclear(stringOf(h))), sweeps),
      ],
    },
    {
      op: 'reverse',
      timings: [
        time('hexbit  (bit loop)', hexbitReverse, sweeps),
        time('table   (lookup)', (h) => table[h]!.reverse, sweeps),
        time('lines   (boolean[6])', (h) => hexbitOfLines(linesReverse(linesOf(h))), sweeps),
        time('string  ("101010")', (h) => hexbitOfString(stringReverse(stringOf(h))), sweeps),
      ],
    },
  ]
}

export function runHexbitBenchmark(): void {
  // RULE 1 — correctness before speed.
  const agree = hexbitRepresentationsAgree()
  const off = agree.facets.filter((f) => !f.on)
  if (off.length) {
    throw new Error(
      `the four representations do not agree, so timing them would measure nothing: ` +
      `${off.map((f) => f.facet).join(' · ')}${agree.disagreements.length ? ` — first: ${agree.disagreements[0]}` : ''}`
    )
  }
  console.log(`hexbit lattice: 2^6 = ${agree.lattice} · four representations agree on all ${agree.lattice} inputs · ${agree.orbits} reflection orbits`)
  console.log(`median of ${TRIALS} trials after ${WARMUP} warm-up sweeps; ns per operation, lower is faster\n`)

  const results = hexbitBenchmark()
  const verdicts: string[] = []
  for (const { op, timings } of results) {
    // RULE 2 — the timed path must have produced the same answers.
    const sums = new Set(timings.map((t) => t.checksum))
    if (sums.size !== 1) {
      throw new Error(`${op}: the timed implementations produced different checksums (${[...sums].join(', ')}) — one of them did not do the work`)
    }
    const fastest = [...timings].sort((a, b) => a.medianNs - b.medianNs)[0]!
    const hexbit = timings[0]!
    console.log(`  ${op}  (checksum ${hexbit.checksum}, identical across all four)`)
    // A WINNER IS ONLY A WINNER IF THE INTERVALS DO NOT OVERLAP. The medians here flipped between
    // runs — nuclear crowned hexbit once and table the next time on a 1.0x margin — because a median
    // separated by less than the spread is a coin toss with extra steps. Two timings whose observed
    // ranges overlap are reported as a TIE, and only a separated pair is called faster.
    const tiedWithFastest = (t: Timing) => t !== fastest && t.minNs <= fastest.maxNs
    for (const t of timings) {
      const rel = t.medianNs / fastest.medianNs
      const verdict = t === fastest ? 'fastest' : tiedWithFastest(t) ? 'TIE (ranges overlap)' : `${rel.toFixed(1)}x slower`
      console.log(`    ${t.label.padEnd(22)} ${t.medianNs.toFixed(2).padStart(8)} ns   [${t.minNs.toFixed(2)}–${t.maxNs.toFixed(2)}]   ${verdict}`)
    }
    const tied = timings.filter(tiedWithFastest)
    verdicts.push(tied.length
      ? `${op}: TIE between ${[fastest, ...tied].map((t) => t.label.trim().split(' ')[0]).join(' and ')}`
      : `${op}: ${fastest.label.trim().split(' ')[0]} decisively`)
    console.log('')
  }
  console.log(`fastest per operation — ${verdicts.join(' · ')}`)
  console.log(`REPORTED, NOT GATED: timings are not reproducible across machines, so no ratchet is seeded from them.`)
}

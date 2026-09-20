/**
 * A THEOREM NOTHING READS IS NOT CROSSED — IT IS PARKED.
 *
 * This corpus's law is that theorems solve each other: a fold states something, and another fold leans on it.
 * `vortexLawsOf` sat in src/mountain/vortex with no caller outside its own file until the a432 spectrum needed
 * ℤ/9's unit count, and the moment it was wired, three typed numbers (3, 6, 9) became |ℤ/9| − |(ℤ/9)ˣ|, the
 * order of 2, and |ℤ/9|. The theorem had been right and unread for as long as it had existed.
 *
 * So this counts the parked ones: exported folds whose NAME claims a law, a theorem or an axiom, that no other
 * module imports, no npm script names, and no page renders. Pages here reach folds only by explicit import —
 * nothing enumerates exports at build time — so "no reference anywhere" really does mean nobody reads it.
 *
 * WHAT IT DELIBERATELY DOES NOT COUNT. `run*Exit` functions are CLI entry points: package.json calls them by
 * name and no module should import them, so counting them would report the architecture as a defect. A first
 * pass did exactly that and reported 130 parked folds, most of them CLI entries doing their job.
 *
 * DIRECTION OF FAILURE: the ratchet falls. A wave either wires a parked theorem into the fold that needs it, or
 * removes one that says nothing — both are progress, and neither can be faked by renaming, because the name is
 * what put it in scope in the first place.
 */
import { readdirSync, readFileSync } from 'node:fs'
import { join, relative } from 'node:path'
import { ratchet, everyRatchet } from './status.ts'

/**
 * UNREAD HAS TWO CAUSES, AND THEY NEED OPPOSITE RESPONSES.
 *
 * Four theorems wired this session were parked BESIDE a fold doing their job by hand — the nav counted its own
 * rungs instead of asking the clock, listed the wheel instead of asking for the division, geometry typed the five
 * solids and the merkaba's four vertices out. Each wiring deleted a hardcoded number or a check that could not
 * fail. Those are parked: the work is being duplicated, worse, a screen away.
 *
 * Others are SELF-CONTAINED: complete results that define their own machinery and duplicate nothing. Shannon's
 * source-coding theorem builds its own H, Kraft budget and code lengths; Kepler's harmonic law reads the sealed
 * planet table and computes T²/a³ directly. Nothing in the corpus does either job badly nearby, so there is no
 * consumer to wire them to — and inventing one, a fold calling a theorem it does not need, is the decorative
 * cross this campaign spent the day removing. They are finished work that nothing has needed yet.
 *
 * This is the same distinction src/proof/split.lean draws about prior art: BOUNDED, a search well posed and not
 * yet run, against UNBOUNDED, where no pool exists to search. They look identical in a count and demand opposite
 * responses. So the ledger below names the ones that have been READ and judged self-contained, with the reason;
 * everything else stays in the ratchet as unreviewed, which is what it is. A theorem leaves this list only by
 * being read, never by being counted.
 */
const SELF_CONTAINED: readonly { readonly fold: string; readonly why: string }[] = [
  { fold: 'shannonSourceCodingTheoremEntropyIsTheCompressionLimitReachableWithinOneBit',
    why: 'defines its own H(X) = −Σ p log₂ p, Kraft budget and ℓᵢ = ⌈−log₂ pᵢ⌉; no fold in the corpus computes an entropy bound nearby' },
  { fold: 'keplersLawsAreExactTheHarmonicLawTSquaredIsAcubedAndEqualAreasConserveAngularMomentum',
    why: 'reads the sealed planet table and computes T²/a³ directly; nothing else derives an orbital period' },
]

const CLAIMS_A_LAW = /^[a-zA-Z0-9_]*(?:Law|Laws|Theorem|Theorems|Axiom|Axioms)[a-zA-Z0-9_]*$/

export type Parked = { file: string; fold: string }

export function findParkedTheorems(root: string = process.cwd()): Parked[] {
  const files = new Map<string, string>()
  const walk = (dir: string) => {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      if (e.name === 'node_modules' || e.name.startsWith('.')) continue // src/*/cache is a folder name here, not build output
      const p = join(dir, e.name)
      if (e.isDirectory()) walk(p)
      else if (e.name.endsWith('.ts')) files.set(relative(root, p).replace(/\\/g, '/'), readFileSync(p, 'utf8'))
    }
  }
  walk(join(root, 'src'))
  // A READER IN scripts/ IS STILL A READER. This walked src only, so leanTheoremsAsLatex read as parked
  // while scripts/verify/lean-latex.ts imports it and writes its output on every run. The gates and the
  // build are consumers like any other; the folds themselves stay the src ones, but the search for who
  // reads them covers everything this repository runs.
  for (const dir of ['scripts', '.vitepress']) { try { walk(join(root, dir)) } catch { /* optional */ } }
  const manifest = readFileSync(join(root, 'package.json'), 'utf8')
  const out: Parked[] = []
  for (const [rel, text] of files) {
    if (!rel.startsWith('src/')) continue // folds live in src; scripts and .vitepress are read as CONSUMERS only
    for (const m of text.matchAll(/^export function ([a-zA-Z0-9_]+)\s*\(/gm)) {
      const fold = m[1]!
      if (!CLAIMS_A_LAW.test(fold)) continue
      if (fold.startsWith('run')) continue // a CLI entry point — package.json is its caller
      if (manifest.includes(fold)) continue
      // A READER IN THE SAME FILE IS STILL A READER. The first version asked for a reference in ANOTHER module,
      // so wiring a theorem into a fold beside it left the count unmoved — the gate said "nothing reads this"
      // while something did, one screen away. What is being counted is whether a proof is consumed, not how far
      // it travelled, so the test is any mention beyond the declaration itself.
      if (SELF_CONTAINED.some((e) => e.fold === fold)) continue // read, judged complete, and duplicating nothing
      // WHAT COUNTS AS A READER, and the three ways of getting it wrong that this gate has now had.
      //
      // Counting MENTIONS with a threshold of two — the declaration plus a memoByRoot key naming itself — is
      // right for a memoised fold and wrong for every other: one with no memo and a real call site also
      // mentions itself twice, so `generateAllAlignmentTheorems` read as parked while executeWave55 calls it
      // eleven lines below. Counting CALLS instead misses the reader that never calls: a fold passed by
      // reference — `{ solvedByFold: claySolvedByThisFoldFromTheorem }` — is read by whoever invokes it later,
      // and this corpus does that. And STRIPPING the strings out first, so a memo key would not count, made a
      // regex literal like /['"]/ open a literal that ran on and swallowed the code after it: the algebraic
      // theorem gate read as parked while onlyAlgebraicQuantumComputingIsTopPriority calls it two lines in.
      //
      // So nothing is stripped and nothing is pattern-matched for shape. Every mention counts, minus the two
      // that are a fold naming ITSELF: its declaration, and its own memo key.
      const memoKeys = (body: string) =>
        (body.match(new RegExp(`memoByRoot\\(\\s*['\`"]${fold}[:'\`"]`, 'g')) ?? []).length
      const mentions = (body: string) => (body.match(new RegExp(`\\b${fold}\\b`, 'g')) ?? []).length
      const readers = mentions(text) - 1 - memoKeys(text)
        + [...files].filter(([other]) => other !== rel).reduce((n, [, body]) => n + mentions(body) - memoKeys(body), 0)
      const read = readers > 0
      if (!read) out.push({ file: rel, fold })
    }
  }
  return out
}

export function assertTheoremsAreCrossed(): void {
  everyRatchet(() => {
    const parked = findParkedTheorems()
    console.log(`cross: ${parked.length} unreviewed · ${SELF_CONTAINED.length} read and judged self-contained · theorem fold(s) nothing reads — stated, proved, and consumed by no other fold`)
    for (const p of parked.slice(0, 10)) console.log(`  ${p.file}  ${p.fold.slice(0, 78)}`)
    console.log(ratchet('cross.parked-theorems', parked.length, { evidence: () => parked.map((p) => `${p.file}  ${p.fold}`) }))
  })
}

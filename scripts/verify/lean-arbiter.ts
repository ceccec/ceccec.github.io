/**
 * LEAN IS THE ARBITER. WHERE THE PROSE AND THE CODE DISAGREE, THE KERNEL DECIDES.
 *
 * The corpus states its structural numbers in three places — Lean theorems, TypeScript
 * constants, and prose — and for one retarget they disagreed. `censusBands()` moved from
 * three Fibonacci bands to four (110 → 123, folded 108 → 121) and the derivation in
 * src/3/7 moved with it. The 259 sentences and predicates that had 110 and 108 written into
 * them did not. Some of them were executable: `UNFOLDED_CENSUS === (2 * 5) * 11` and
 * `FOLDED_CENSUS === 108` are both FALSE now, and they sat inside facets that read as
 * passing checks.
 *
 * The fix is not to re-type the right number in a fourth place. This gate ASKS LEAN, by
 * generating `#eval` probes against the sealed corpus.lean and reading what the kernel
 * prints. Nothing here declares 123; if the band ladder changes again, the theorem changes,
 * the kernel prints the new value, and every TypeScript constant that failed to follow is
 * named by this gate on the next run.
 *
 * What Lean does NOT prove is as load-bearing as what it does. There is no theorem about
 * 108 or 432 anywhere in the corpus, because they are the a432 ladder — a NAMED AXIOM (a
 * chosen tuning), not a derivation. So "108 is the folded census" and "432 = 4 × the folded
 * census" are not merely stale, they are category errors: they dress an axiom as a theorem.
 * After this gate, 4 × FOLDED_CENSUS = 484, and 432 is HOMOLOGY_LOOPS × A432_FOLDED where
 * only the first factor is proved.
 */

import { execFileSync } from 'node:child_process'
import { readFileSync, readdirSync, writeFileSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { ratchet } from './status.ts'
import { A432_FOLDED, DIMENSION_GATES, EULER_CHI, DIGIT_LATTICE, FOLDED_CENSUS, HOMOLOGY_LOOPS, UNFOLDED_CENSUS, fibonacci } from '../../src/3/7/index.ts'

const CORPUS = 'src/pair/lean/proofs/corpus.lean'
const DESCENT = 'src/pair/lean/proofs/wave-57-extraction-verified.lean'

/** What we ask the kernel for, and the TypeScript constant each answer must equal. */
const PROBES: readonly { readonly name: string; readonly lean: string; readonly ts: () => number }[] = [
  { name: 'UNFOLDED_CENSUS', lean: '(fib 7 + fib 8 + fib 9 + fib 10 : Nat)', ts: () => UNFOLDED_CENSUS },
  { name: 'FOLDED_CENSUS', lean: '((123 : Int) + eulerChi)', ts: () => FOLDED_CENSUS },
  { name: 'EULER_CHI', lean: 'eulerChi', ts: () => EULER_CHI },
  { name: 'HOMOLOGY_LOOPS', lean: 'homologyLoops', ts: () => HOMOLOGY_LOOPS },
  { name: 'DIGIT_LATTICE', lean: 'digitLattice', ts: () => DIGIT_LATTICE },
  { name: 'LINE_CEILING', lean: '(fib 18 : Nat)', ts: () => fibonacci(18) },
]

/** Run `#eval` against the sealed corpus and read the kernel's own answers back. */
export function leanPinnedFacts(root: string = process.cwd()): Record<string, number> {
  const text = readFileSync(join(root, CORPUS), 'utf8')
  const body = text.replace(/^end Corpus$/m, '')
  const probe = `${body}\n${PROBES.map((p) => `#eval ${p.lean}`).join('\n')}\nend Corpus\n`
  const tmp = join(root, '.vitepress', 'cache', `arbiter-${PROBES.length}-${text.length}.lean`)
  writeFileSync(tmp, probe)
  try {
    // A FALSE THEOREM MAKES `lean` EXIT NON-ZERO BEFORE IT REACHES ANY #eval, so execFileSync throws
    // and the arbiter died with a raw Buffer dump on the one input it exists to explain — the gate
    // crashing instead of returning a verdict. zeropoint-node-8a hit the identical shape today.
    // Lean's own diagnostic is the verdict; it is read out and reported.
    let out: string
    try {
      out = execFileSync('lean', [tmp], { stdio: 'pipe', timeout: 300_000 }).toString()
    } catch (e) {
      const err = e as { stdout?: Buffer; stderr?: Buffer }
      const said = `${err.stdout?.toString() ?? ''}${err.stderr?.toString() ?? ''}`.trim()
      throw new Error(`the arbiter itself does not compile — ${CORPUS} was rejected by the kernel, so nothing it pins can be read:\n  ${said.split('\n').slice(0, 6).join('\n  ') || '(no diagnostic)'}`)
    }
    const lines = out.split('\n').map((l) => l.trim()).filter((l) => /^-?\d+$/.test(l))
    if (lines.length !== PROBES.length) {
      throw new Error(`lean printed ${lines.length} value(s) for ${PROBES.length} probe(s) — the arbiter cannot read a partial answer:\n${out}`)
    }
    return Object.fromEntries(PROBES.map((p, i) => [p.name, Number(lines[i])]))
  } finally {
    try { rmSync(tmp) } catch { /* the probe is disposable */ }
  }
}

/** Every constant the kernel pins must equal the constant the corpus computes. */
export function constantDisagreements(root: string = process.cwd()): string[] {
  const pinned = leanPinnedFacts(root)
  return PROBES.flatMap((p) => {
    const measured = p.ts()
    return pinned[p.name] === measured ? [] : [`${p.name}: lean=${pinned[p.name]} typescript=${measured}`]
  })
}

/**
 * A CLAIM CONTRADICTS THE KERNEL WHEN IT PUTS A SUPERSEDED VALUE IN A CENSUS SENTENCE.
 *
 * Refutable, and deliberately blunt: a line that says `census` and carries 110, (2 * 5) * 11
 * or 108 is claiming one of the two numbers the kernel decides. Change the number and the row
 * disappears; there is no list of blessed files to fall out of date.
 *
 * The one exemption is a line that DENIES the link in its own text — `DECOUPLED`, a retarget
 * record, or an explicit "not the census". Those are the sentences that exist to say 108 is
 * the a432 octave and not the corpus fold, and deleting them would delete the correction.
 */
const STALE = /\(2 \* 5\) \* 11|(?<![\d.])110(?![\d.])|(?<![\d.])108(?![\d.])/
const CENSUS = /census/i
const DENIES_THE_LINK = /DECOUPLED|retarget|NOT the census|not the corpus census|not the folded census|≠ FOLDED_CENSUS|≠ the census|!== HOMOLOGY_LOOPS \* FOLDED_CENSUS|the a432 axiom/i

export type Contradiction = { readonly file: string; readonly line: number; readonly text: string }

/**
 * A SECOND CLASS THE SENTENCE RULE CANNOT SEE: the superseded count passed as an ARGUMENT.
 *
 * `harmonicBands(110)` and `foldedCensus(110, matrix)` say nothing about a census on their own
 * line, so the prose rule walked past fourteen of them while their folds went on reporting a
 * gapless distribution for a corpus that no longer has one. The count belongs to the census
 * functions by definition, so any literal handed to them that is not the derived constant is a
 * contradiction whatever the surrounding words say.
 */
const CENSUS_CALL = /\b(harmonicBands|foldedCensus)\(\s*(\d+)/g

export function censusCallSites(root: string = process.cwd()): Contradiction[] {
  const out: Contradiction[] = []
  const walk = (dir: string) => {
    for (const entry of readdirSync(join(root, dir), { withFileTypes: true })) {
      const rel = `${dir}/${entry.name}`
      if (entry.isDirectory()) { if (!entry.name.startsWith('.')) walk(rel); continue }
      if (!/\.(ts|vue)$/.test(entry.name)) continue
      readFileSync(join(root, rel), 'utf8').split('\n').forEach((text, i) => {
        // A COMMENT IS NOT A CALL SITE. The line explaining why a fold stopped calling
        // foldedCensus(110) quotes the old call, and the scanner read the quotation as the thing
        // it describes — the same confusion that once made the sorry-counter fail on its own header.
        if (/^\s*(\/\/|\*|\/\*)/.test(text)) return
        for (const m of text.matchAll(CENSUS_CALL)) {
          // 0 is the EMPTY FOLD — `foldedCensus(0)` asks what a wave that adds and removes no
          // file does to the count, which is a question about χ, not a claim about the census.
          const arg = Number(m[2])
          if (arg !== UNFOLDED_CENSUS && arg !== 0) out.push({ file: rel, line: i + 1, text: text.trim().slice(0, 160) })
        }
      })
    }
  }
  walk('src')
  return out
}

export function censusContradictions(root: string = process.cwd()): Contradiction[] {
  const out: Contradiction[] = []
  const walk = (dir: string) => {
    for (const entry of readdirSync(join(root, dir), { withFileTypes: true })) {
      const rel = `${dir}/${entry.name}`
      if (entry.isDirectory()) { if (!entry.name.startsWith('.')) walk(rel); continue }
      if (!/\.(ts|vue|md)$/.test(entry.name)) continue
      readFileSync(join(root, rel), 'utf8').split('\n').forEach((text, i) => {
        if (CENSUS.test(text) && STALE.test(text) && !DENIES_THE_LINK.test(text)) {
          out.push({ file: rel, line: i + 1, text: text.trim().slice(0, 160) })
        }
      })
    }
  }
  walk('src')
  return out
}

/**
 * THE DESCENT RECORD MUST STILL BE THE TREE'S.
 *
 * `by decide` cannot read a directory, so the descent file holds a LIST of the counts the
 * corpus has stood at and proves the ratchet law over it. That list can only rot in one
 * direction — a wave lands, the tree changes, the list does not — so the head is compared
 * with a live count here. This is the join Lean cannot make for itself.
 */
export function leanRecordedHead(root: string = process.cwd()): number {
  const text = readFileSync(join(root, DESCENT), 'utf8')
  const probe = `${text.replace(/^end Wave57$/m, '')}\n#eval recorded.head!\nend Wave57\n`
  const tmp = join(root, '.vitepress', 'cache', `descent-${text.length}.lean`)
  writeFileSync(tmp, probe)
  try {
    let out: string
    try {
      out = execFileSync('lean', [tmp], { stdio: 'pipe', timeout: 300_000 }).toString()
    } catch (e) {
      const err = e as { stdout?: Buffer; stderr?: Buffer }
      const said = `${err.stdout?.toString() ?? ''}${err.stderr?.toString() ?? ''}`.trim()
      throw new Error(`the descent record does not compile — ${DESCENT} was rejected by the kernel:\n  ${said.split('\n').slice(0, 6).join('\n  ') || '(no diagnostic)'}`)
    }
    const value = out.split('\n').map((l) => l.trim()).filter((l) => /^\d+$/.test(l)).pop()
    if (!value) throw new Error(`the descent file printed no head:\n${out}`)
    return Number(value)
  } finally {
    try { rmSync(tmp) } catch { /* disposable */ }
  }
}

/** Every index.ts under src — the census the descent record claims to be tracking. */
export function measuredIndexCount(root: string = process.cwd()): number {
  let n = 0
  const walk = (dir: string) => {
    for (const entry of readdirSync(join(root, dir), { withFileTypes: true })) {
      if (entry.isDirectory()) { if (!entry.name.startsWith('.') && entry.name !== 'node_modules') walk(`${dir}/${entry.name}`); continue }
      if (entry.name === 'index.ts') n += 1
    }
  }
  walk('src')
  return n
}

export function assertLeanArbitrates(): void {
  let available = true
  try { execFileSync('lean', ['--version'], { stdio: 'pipe' }) } catch { available = false }

  if (!available) {
    console.log('lean not on PATH — the arbiter is NOT MEASURED in this environment, no claim made')
  } else {
    const pinned = leanPinnedFacts()
    console.log(`lean arbitrates: ${PROBES.map((p) => `${p.name}=${pinned[p.name]}`).join(' · ')}`)
    const off = constantDisagreements()
    if (off.length) {
      throw new Error(`${off.length} constant(s) disagree with the kernel — Lean decides:\n  ${off.join('\n  ')}`)
    }
    console.log(`  ${PROBES.length}/${PROBES.length} TypeScript constants agree with the theorem that pins them`)
    // 432 IS NOT A CENSUS QUANTITY. Stated here so the gate carries the category, not just the count.
    console.log(`  no theorem pins 108 or 432 — 4 × FOLDED_CENSUS = ${4 * FOLDED_CENSUS}, and 432 is HOMOLOGY_LOOPS × A432_FOLDED, an axiom times a theorem`)

    // THE CATEGORY, CHECKED, NOT JUST NARRATED. 432 is the a432 octave times the Betti rank,
    // and it is NOT four folded censuses — the second clause is what went silently false when
    // the band ladder gained its fourth band, taking the fractal clock's rung count with it.
    if (DIMENSION_GATES !== HOMOLOGY_LOOPS * A432_FOLDED) {
      throw new Error(`DIMENSION_GATES ${DIMENSION_GATES} is not HOMOLOGY_LOOPS × A432_FOLDED (${HOMOLOGY_LOOPS} × ${A432_FOLDED})`)
    }
    if (DIMENSION_GATES === HOMOLOGY_LOOPS * FOLDED_CENSUS) {
      throw new Error(`the a432 gate and the corpus fold have collided again — 432 must not be readable as ${HOMOLOGY_LOOPS} × FOLDED_CENSUS`)
    }
    const head = leanRecordedHead()
    const measured = measuredIndexCount()
    if (head !== measured) {
      throw new Error(`the descent record has rotted: ${DESCENT} records ${head} at its head, the tree holds ${measured} index.ts — prepend the measurement`)
    }
    console.log(`  descent record head ${head} = measured ${measured} index.ts · ${measured - UNFOLDED_CENSUS} above the target`)
  }

  const calls = censusCallSites()
  if (calls.length) {
    throw new Error(`${calls.length} census call site(s) pass a count the kernel does not pin (UNFOLDED_CENSUS = ${UNFOLDED_CENSUS}):\n  ${calls.map((c) => `${c.file}:${c.line}  ${c.text}`).join('\n  ')}`)
  }
  console.log(`  every harmonicBands/foldedCensus call site reads the derived census, none a literal`)

  const rows = censusContradictions()
  const byFile = new Map<string, number>()
  for (const r of rows) byFile.set(r.file, (byFile.get(r.file) ?? 0) + 1)
  ratchet('lean-arbiter.census-contradictions', rows.length)
  for (const [file, count] of [...byFile.entries()].sort((a, b) => b[1] - a[1]).slice(0, 12)) {
    console.log(`    ${String(count).padStart(4)}  ${file}`)
  }
}

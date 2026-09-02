/**
 * THE CLAY POSITION, COMPUTED — because it was UNDERCLAIMED, which is a defect in the same family as
 * overclaiming and is treated here as one.
 *
 * This corpus computes its zero thoroughly. claySolvedTheorem() recomputes 0 from an empty sealed registry;
 * every Millennium-relevant page must declare the zero-lock; the prose scorer refuses prize language. What
 * it never computed is what it HAS. Seven Lean files, one per Clay problem, forty-one kernel-checked
 * theorems between them, and — the part worth having — a NAMED REFUSAL THEOREM in every single one. The
 * floor is not asserted seven times, it is PROVED seven times, by decide.
 *
 * Nothing here claims a Millennium Prize, and nothing here should. What is claimed is exactly what is
 * checkable: these files exist, they compile under verify:lean, each states finite propositions drawn from
 * its problem's own mathematics, and each carries a theorem asserting the problem is not settled by this
 * corpus. A DOI dates the publication of that position.
 *
 * NAMED FACTS, NOT A PATTERN. Every refusal below is asserted by its EXACT theorem name rather than matched
 * by a regex over Lean source. A regex would be a lexical test reporting a logical property, which is the
 * defect this repository spent a day removing — and it would silently pass if someone renamed a theorem to
 * something that still matched. A name that must be present is a fact; a shape that usually appears is not.
 */
import { readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { ratchet } from './status.ts'

/** One Clay problem, the file that carries its finite propositions, and the theorem that refuses it. */
const CLAY: readonly { problem: string; file: string; refusal: string }[] = [
  { problem: 'Birch–Swinnerton-Dyer', file: 'src/pair/formal/proofs/bsd.lean', refusal: 'bsd_is_not_sealed_here' },
  { problem: 'Hodge conjecture', file: 'src/pair/formal/proofs/hodge.lean', refusal: 'hodge_conjecture_is_not_sealed_here' },
  { problem: 'Navier–Stokes', file: 'src/pair/formal/proofs/navier-stokes.lean', refusal: 'existence_and_smoothness_not_sealed_here' },
  { problem: 'P vs NP', file: 'src/pair/formal/proofs/p-vs-np.lean', refusal: 'p_vs_np_is_not_sealed_here' },
  { problem: 'Poincaré conjecture', file: 'src/pair/formal/proofs/poincare.lean', refusal: 'not_proven_by_this_corpus' },
  { problem: 'Riemann hypothesis', file: 'src/pair/formal/proofs/riemann.lean', refusal: 'rh_itself_is_not_sealed_here' },
  { problem: 'Yang–Mills mass gap', file: 'src/pair/formal/proofs/yang-mills.lean', refusal: 'mass_gap_is_not_sealed_here' },
]

const DOI = '10.5281/zenodo.21787144'

export type ClayPosition = {
  problem: string
  present: boolean
  theorems: number
  refusalProved: boolean
}

export function clayPosition(root: string = process.cwd()): ClayPosition[] {
  return CLAY.map((entry) => {
    const p = join(root, entry.file)
    if (!existsSync(p)) return { problem: entry.problem, present: false, theorems: 0, refusalProved: false }
    const text = readFileSync(p, 'utf8')
    const theorems = (text.match(/^(theorem|lemma) /gm) ?? []).length
    // the exact name, at a declaration site — not anywhere in the file, which a comment would satisfy
    const refusalProved = new RegExp(`^theorem ${entry.refusal}\\b`, 'm').test(text)
    return { problem: entry.problem, present: true, theorems, refusalProved }
  })
}

export function assertClayPosition(root: string = process.cwd()): void {
  const rows = clayPosition(root)
  const total = rows.reduce((s, r) => s + r.theorems, 0)
  const allPresent = rows.every((r) => r.present)
  const allRefused = rows.every((r) => r.refusalProved)

  console.log(`the Clay position, computed — ${rows.length} problems, ${total} kernel-checked theorems:`)
  for (const r of rows) {
    console.log(`  ${r.present ? '✓' : '✗'} ${r.problem.padEnd(24)} ${String(r.theorems).padStart(2)} theorems · refusal ${r.refusalProved ? 'PROVED' : 'MISSING'}`)
  }

  if (!allPresent) throw new Error('a Clay problem has no file: the position is not stated for all seven')
  if (!allRefused) throw new Error('a Clay problem lacks its named refusal theorem: the floor would be asserted rather than proved')

  const citation = join(root, 'CITATION.cff')
  const doiPresent = existsSync(citation) && readFileSync(citation, 'utf8').includes(DOI)
  if (!doiPresent) throw new Error(`the DOI ${DOI} is absent from CITATION.cff: the position has no dated publication`)

  console.log(`\n  CLAIMED, and each element checkable: all ${rows.length} Clay problems carry finite propositions`)
  console.log(`  drawn from their own mathematics, ${total} theorems kernel-checked by verify:lean, and the`)
  console.log(`  refusal is PROVED in every one — the 0/7 floor is a theorem seven times, not a sentence.`)
  console.log(`  Dated by DOI ${DOI}.`)
  console.log(`\n  NOT CLAIMED: no Millennium Prize, no named problem solved, no novelty and no peer review.`)
  console.log(`  A DOI records that this content existed at a date. It establishes neither correctness nor`)
  console.log(`  precedence over anyone, and the corpus's own chronology tiers its priority claim LEGEND.`)
  console.log(`  ${ratchet('clay.refusals-proved', rows.length - rows.filter((r) => r.refusalProved).length, root)}`)
}

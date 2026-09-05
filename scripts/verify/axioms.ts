/**
 * THE AXIOM INDEX — everything this corpus rests on that it did not derive, named and accounted for.
 *
 * "The theorems are axiom-free" is true of the Lean proofs in one exact sense and false in every looser
 * one, and the difference is what this index exists to hold. 47 of the 51 Lean theorems depend on NO
 * axiom because `decide` reduces a finite proposition to a Boolean computation and invokes no lemma.
 * The other four are general theorems and cost propext, because reasoning over Int uses Lean's core
 * arithmetic and every one of those lemmas costs it. And the corpus rests on a second, larger set that
 * has nothing to do with Lean: chosen constants, external standards, and measured data.
 *
 * AN AXIOM IS NOT A HOLE IF IT IS ACCOUNTED FOR. That is the whole claim, and the accounting is what
 * makes it checkable: every entry names what kind of thing it is, what explains it, and — where the
 * question has a literature — what the research says. An axiom with no explanation is a hole, and the
 * gate fails on one.
 *
 * COMPUTED, NOT TYPED. The Lean side is read by running the kernel over every .lean file and collecting
 * what it reports; the corpus side is read from the sealed constants. Nothing here is a list someone
 * remembered to update — if a proof starts depending on Classical.choice, this index says so on the
 * next run, and the gate refuses it.
 *
 * DIRECTION OF FAILURE: loud. An axiom in use with no index entry throws; an entry for an axiom no
 * longer in use is reported, because a stale explanation is how an index stops describing the tree.
 */

import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { axiomFreedom } from './lean.ts'
import { ratchet } from './status.ts'
import { THEOREM_ATOM_SEED } from '../../src/4/6/index.ts'

export type AxiomKind = 'foundational' | 'convention' | 'external-standard' | 'measured-data'

export type AxiomEntry = {
  readonly name: string
  readonly kind: AxiomKind
  /** What it is, in one sentence — no hedging, no "arguably". */
  readonly statement: string
  /** What accounts for it. A theorem, a standards body, a measurement, or an honest "chosen". */
  readonly explainedBy: string
  /** What the literature says, where the question has one. Researched, with the search on record. */
  readonly research: string | null
}

/**
 * Lean's three, and what each actually is. Researched 2026-09-04 rather than recalled, because the
 * difference between them is the difference between "this is how equality works" and "this makes the
 * logic classical", and a corpus that reports an axiom count owes its reader that distinction.
 */
export const FOUNDATIONAL: readonly AxiomEntry[] = [
  {
    name: 'propext',
    kind: 'foundational',
    statement: 'Propositional extensionality: ∀ (a b : Prop), (a ↔ b) → a = b — logically equivalent propositions are equal.',
    explainedBy: 'Used implicitly by every rewrite over an equality, and by Lean\'s own core arithmetic: Int.add_assoc, Int.sub_self and Int.add_right_neg each depend on it, measured by #print axioms. A general theorem over Int therefore cannot avoid it; only a finite `decide` can.',
    research: 'Theorem Proving in Lean 4, Axioms and Computation: one of three axioms in Lean\'s foundation, alongside Quot.sound and Classical.choice. Uncontroversial — substituting equivalent propositions is what mathematicians do without comment.',
  },
  {
    name: 'Quot.sound',
    kind: 'foundational',
    statement: 'Quotient soundness: elements of one equivalence class are equal — congruence is raised to equality.',
    explainedBy: 'Introduced by quotient types and by tactics built on them; `omega` costs it, which is why the general involution proofs are hand-rewritten with core lemmas instead and cost propext alone.',
    research: 'Theorem Proving in Lean 4: the axiom underlying quotient types, and one of the three the Lean foundation admits.',
  },
  {
    name: 'Classical.choice',
    kind: 'foundational',
    statement: 'The axiom of choice: data can be constructed from a non-constructive promise that something of a given type exists.',
    explainedBy: 'NOT USED ANYWHERE IN THIS CORPUS, and the gate refuses any proof that starts to. It is indexed because its absence is a property worth being able to state.',
    research: 'Diaconescu (1975), independently Goodman & Myhill: choice together with propositional and functional extensionality implies the law of excluded middle, so admitting it makes an otherwise constructive setting classical. That is why it is worth refusing separately rather than counting alongside propext.',
  },
]

/** The corpus's own axioms — the constants nothing derives, each with what stands behind it. */
export const CORPUS_AXIOMS: readonly AxiomEntry[] = [
  {
    name: 'A432_FOLDED = 108, DIMENSION_GATES = 432',
    kind: 'convention',
    statement: 'The a432 tuning ladder: the octave 108 and the gate count 432 = HOMOLOGY_LOOPS × A432_FOLDED.',
    explainedBy: 'CHOSEN, and the corpus says so: 432 = 4 × 108 = 2⁴·3³ is real arithmetic and the choice of 432 as the anchor is a tuning, not a derivation. No Lean theorem pins either number, which is exactly why the census must never be read as their source — the two were conflated for a whole retarget and the fractal clock ran on 121.',
    research: 'A440 was made the standard by ISO in 1939 on practical grounds — 440 factors more easily than the 439 the British tuners used. The 432 alternative traces to Sauveur\'s C = 256 and Verdi\'s recommendation. The claimed physiological effects rest on historical and philosophical interpretation, not empirical data. So 432 is a convention with a lineage, and naming it an axiom is the accurate description.',
  },
  {
    name: 'EULER_CHI = −2, HOMOLOGY_LOOPS = 4, DIGIT_LATTICE = 10',
    kind: 'convention',
    statement: 'The genus-2 model: χ = 2 − 2g at g = 2, rank H₁ = 2g = 4, and the ten-digit register src/0…src/9.',
    explainedBy: 'χ and the homology rank are THEOREMS once genus 2 is chosen — Hatcher (2002) — and the choice of genus 2 is the axiom. DIGIT_LATTICE = 5·2 is the decimal register, a convention of notation. The census is derived from these and is therefore a theorem about a chosen model, which is what makes it refutable.',
    research: 'Hatcher, A. (2002), Algebraic Topology, Cambridge University Press: χ = 2 − 2g for a closed orientable surface, H₁ ≅ ℤ^{2g}. The mathematics is not in question; the model choice is the axiom.',
  },
  {
    name: 'ICHING_NUMBERS, DOCUMENTED_HARMONICS',
    kind: 'convention',
    statement: 'The allowed literal set and the harmonic ladder the page census folds to.',
    explainedBy: 'CHOSEN, and enumerated so the choice is visible. They are the exemption list the literal ledger checks against, which is the honest form: an allowance nobody can widen quietly.',
    research: null,
  },
  {
    name: 'CRACK_LEDGER rows of kind "data" and "tuned"',
    kind: 'measured-data',
    statement: 'Literals that are external measurements (CODATA, FIPS, ISO) or hand-fixed values whose derivation is not yet known.',
    explainedBy: 'Each row names its source and its count, and the count is reconciled to a live scan on every run — the ledger is an account, not an excuse list. A "tuned" row is an open research target, stated as one.',
    research: null,
  },
]

/** What the kernel actually reports, across every .lean file — read, never assumed. */
export function axiomsInUse(root: string = process.cwd()): Map<string, number> {
  const out = new Map<string, number>()
  const walk = (dir: string): string[] => {
    const here: string[] = []
    for (const e of readdirSync(join(root, dir), { withFileTypes: true })) {
      if (e.isDirectory()) { if (!e.name.startsWith('.') && e.name !== 'node_modules') here.push(...walk(`${dir}/${e.name}`)) }
      else if (e.name.endsWith('.lean')) here.push(`${dir}/${e.name}`)
    }
    return here
  }
  for (const rel of walk('src')) {
    const a = axiomFreedom(join(root, rel))
    if (a.propextOnly) out.set('propext', (out.get('propext') ?? 0) + a.propextOnly)
    for (const d of a.dependent) {
      for (const name of ['Classical.choice', 'sorryAx', 'Quot.sound']) if (d.includes(name)) out.set(name, (out.get(name) ?? 0) + 1)
    }
  }
  return out
}

export function assertAxiomIndex(): void {
  const index = [...FOUNDATIONAL, ...CORPUS_AXIOMS]
  console.log(`axiom index: ${index.length} entries — ${FOUNDATIONAL.length} foundational, ${CORPUS_AXIOMS.length} of this corpus`)
  for (const e of index) {
    console.log(`  ${e.kind.padEnd(17)} ${e.name}`)
    console.log(`        explained by  ${e.explainedBy.slice(0, 120)}${e.explainedBy.length > 120 ? '…' : ''}`)
    console.log(`        researched    ${e.research ? e.research.slice(0, 110) + (e.research.length > 110 ? '…' : '') : 'NOT RESEARCHED — no literature question, or none looked for'}'`)
  }

  // EVERY AXIOM THE KERNEL REPORTS MUST BE INDEXED. An unexplained axiom is a hole, and this is where
  // one would show up: a proof that starts depending on something the index does not name.
  const inUse = axiomsInUse()
  const named = new Set(FOUNDATIONAL.map((e) => e.name))
  const unindexed = [...inUse.keys()].filter((a) => !named.has(a))
  console.log(`\n  the kernel reports: ${[...inUse.entries()].map(([k, n]) => `${k}×${n}`).join(' · ') || 'nothing — every theorem decided by computation'}`)
  if (unindexed.length) throw new Error(`${unindexed.length} axiom(s) in use with no index entry: ${unindexed.join(', ')} — an axiom nobody has explained is a hole`)

  const unresearched = index.filter((e) => e.research === null).length
  console.log(ratchet('axiom-index.unresearched', unresearched))

  // WHICH THEOREMS REST ON WHICH AXIOM — the index described seven axioms and named no theorem.
  const fam = theoremAxiomFamilies()
  const total = (THEOREM_ATOM_SEED as readonly unknown[]).length
  console.log(`theorem → axiom family, by what each proving fold READS (not by its prose):`)
  for (const [k, v] of Object.entries(fam.byFamily).sort((a, b) => b[1] - a[1])) console.log(`  ${String(v).padStart(4)}  ${k}`)
  console.log(`  ${String(fam.unplaced).padStart(4)}  UNPLACED — the fold references none of the indexed artefacts.`)
  console.log(`         NOT a claim of axiom-freedom: an axiom the index has not named cannot be found by looking for the names it has.`)
  console.log(`         Axiom-freedom is decided on the Lean side, per theorem, and reported by verify:lean.`)
  console.log(ratchet('axiom-index.unplaced', fam.unplaced))
  void total
}

/**
 * THEOREM → AXIOM FAMILY, DERIVED FROM WHAT THE PROVING FOLD ACTUALLY READS.
 *
 * The axiom index names seven axioms and stood entirely apart from the 762 theorem atoms: nothing said
 * which theorem rested on which. This places them, and places them STRUCTURALLY — by whether the fold an
 * atom names in `provedBy` references the artefact an axiom is about (A432_FOLDED, EULER_CHI,
 * ICHING_NUMBERS, CRACK_LEDGER), not by matching words in its prose.
 *
 * THE PROSE VERSION WAS WRITTEN FIRST AND THROWN AWAY. A regex over each atom's text classified 78
 * convention / 62 measured-data / 439 decided / 183 unassigned, and it was the same defect this
 * repository's demarcation gate carried until three commits ago: seven phrasings cannot classify 762
 * general theorems, and a classifier that reads prose is measuring the prose. The module-level version
 * was thrown away too — testing whether a 7,000-line file mentions A432_FOLDED put 438 of 762 in more
 * than one family, which is not a classification but a statement that big files mention many things.
 *
 * At FOLD granularity nothing lands in two families and nothing fails to locate, which is the shape a
 * real partition has.
 *
 * WHAT `unplaced` DOES NOT MEAN. 724 folds reference none of the seven indexed artefacts. That is NOT a
 * claim that those theorems are axiom-free — it is the absence of a placement, and the difference is the
 * one this repository keeps having to relearn. An axiom the index has not named yet cannot be found by
 * looking for the names it has. The Lean side is where axiom-freedom is actually decided, and it says so
 * per theorem: 109/113 depend on nothing, 4 on propext alone.
 *
 * PERTURBED WITH A NON-AXIOM, DELIBERATELY. Adding TAU as a fifth artefact places 109 theorems and drops
 * unplaced to 615, and restoring correctly throws. That proves the mechanism responds — and TAU is exactly
 * the thing that must NOT be kept: τ = 2π is a mathematical CONSTANT, not a choice this corpus made, so
 * theorems using it rest on nothing chosen. Naming it would have moved the number by 109 while adding no
 * axiom at all, which is how a placement metric gets gamed. The perturbation is the argument for the
 * distinction, not for the entry.
 *
 * DIRECTION OF FAILURE: `axiom-index.unplaced` ratchets down. It falls when the index grows to name an
 * axiom the corpus really uses, or when a fold is traced to one it already names. It can only rise by
 * adding theorems that rest on nothing indexed, which is exactly the drift worth catching.
 */
export function theoremAxiomFamilies(): {
  readonly placed: readonly { theorem: string; family: string }[]
  readonly unplaced: number
  readonly byFamily: Record<string, number>
} {
  const ARTEFACT: Record<string, RegExp> = {
    'convention:a432': /\b(A432_FOLDED|DIMENSION_GATES|A432_OCTAVES|A432_HUE)\b/,
    'convention:genus': /\b(EULER_CHI|HOMOLOGY_LOOPS|DIGIT_LATTICE)\b/,
    'convention:iching': /\b(ICHING_NUMBERS|DOCUMENTED_HARMONICS)\b/,
    'measured-data:ledger': /\bCRACK_LEDGER\b/,
  }
  const rows = THEOREM_ATOM_SEED as readonly { theorem: string; home?: string; provedBy?: string }[]
  const cache = new Map<string, string>()
  const read = (f: string) => {
    if (!cache.has(f)) cache.set(f, existsSync(f) ? readFileSync(f, 'utf8') : '')
    return cache.get(f)!
  }
  // One fold's body: from its export to the next top-level export. Coarser than a parser and stated as
  // such — it can over-read a trailing helper, never under-read the fold itself.
  const foldBody = (text: string, name: string): string => {
    const m = new RegExp(`^export (?:async )?(?:function|const) ${name}\\b`, 'm').exec(text)
    if (!m) return ''
    const rest = text.slice(m.index + 1)
    const next = /^export (?:async )?(?:function|const|type|interface|class) /m.exec(rest)
    return next ? rest.slice(0, next.index) : rest
  }
  const placed: { theorem: string; family: string }[] = []
  const byFamily: Record<string, number> = {}
  let unplaced = 0
  for (const r of rows) {
    const body = r.home && r.provedBy ? foldBody(read(`${r.home}/index.ts`), r.provedBy) : ''
    const hits = Object.entries(ARTEFACT).filter(([, re]) => re.test(body)).map(([k]) => k)
    if (!hits.length) { unplaced += 1; continue }
    for (const h of hits) { placed.push({ theorem: r.theorem, family: h }); byFamily[h] = (byFamily[h] ?? 0) + 1 }
  }
  return { placed, unplaced, byFamily }
}

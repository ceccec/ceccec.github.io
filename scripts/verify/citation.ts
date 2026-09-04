/**
 * THE CITATION FILE MUST NOT TELL PEOPLE A NUMBER THAT HAS MOVED.
 *
 * CITATION.cff is the file other people cite this work by, and it was hand-maintained: "a sealed
 * ledger of 1,329 entries includes 36 machine-checked involution theorems". There are 51. The count
 * was true when it was typed and the typing is what kept adding theorems — erpax-94's defect exactly,
 * a number written about a corpus its own writing changes, and it sat in the one file whose whole job
 * is to be quoted accurately.
 *
 * So the count is READ from the sealed .lean sources and compared, on every run. Nothing regenerates
 * the prose — the abstract is written by a person and should stay that way — but a figure inside it
 * that has a live source is checked against that source.
 *
 * DIRECTION OF FAILURE: loud, and specific. It names the number it found, the number that is true, and
 * the file, because a drift gate that only says "drifted" makes the reader do the work twice.
 */

import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { leanInvolutionCorpus } from '../../src/pair/formal/proofs/index.ts'

export type CitationFigure = { readonly label: string; readonly stated: number; readonly live: number }

/** Every figure in CITATION.cff that has a computable source, paired with that source. */
export function citationFigures(root: string = process.cwd()): CitationFigure[] {
  const text = readFileSync(join(root, 'CITATION.cff'), 'utf8')
  const lean = leanInvolutionCorpus(root)
  const out: CitationFigure[] = []
  const theorems = text.match(/(\d[\d,]*)\s+machine-checked involution theorems/)
  if (theorems) out.push({ label: 'machine-checked involution theorems', stated: Number(theorems[1]!.replace(/,/g, '')), live: lean.involutionTheorems })
  return out
}

export function assertCitationIsCurrent(): void {
  const figures = citationFigures()
  if (!figures.length) {
    console.log('CITATION.cff — no computable figure found to check; NOT MEASURED rather than passed')
    return
  }
  for (const f of figures) console.log(`  CITATION.cff says ${f.stated} ${f.label} · the sources hold ${f.live}`)
  const drifted = figures.filter((f) => f.stated !== f.live)
  if (drifted.length) {
    throw new Error(drifted.map((f) => `CITATION.cff states ${f.stated} ${f.label} and the sealed sources hold ${f.live} — the file people cite this work by must not quote a number that has moved`).join(' · '))
  }
  console.log(`  every computable figure in CITATION.cff matches its source`)
}

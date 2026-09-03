/**
 * THE MACHINE-CHECKED THEOREMS AS A LATEX SECTION — generated, never authored.
 *
 * verify:lean proves the Lean compiles, carries no sorry, and depends on no axiom. This writes what
 * it proved into the form a paper needs, read from the same files: one amsthm environment per
 * proposition, the proposition verbatim, the tactic named as the proof.
 *
 * The gate is that TWO INDEPENDENT READINGS AGREE. leanInvolutionCorpus counts `theorem` declarations;
 * leanTheoremsForLatex parses each one's name, doc and proposition. They walk the same files by
 * different routes, so a disagreement means one of them is wrong about what is in the corpus — and a
 * generated paper section is exactly where that must not happen silently.
 */
import { leanInvolutionCorpus, leanTheoremsAsLatex, leanTheoremsForLatex } from '../../src/pair/formal/proofs/index.ts'

const OUT = 'src/research/lean-theorems.tex'

export function assertLeanLatexAgrees(): void {
  const read = leanTheoremsForLatex().length
  const counted = leanInvolutionCorpus().involutionTheorems
  console.log(`lean→latex: ${read} theorems read · ${counted} counted`)
  if (read !== counted) {
    throw new Error(`lean→latex: the reader found ${read} theorems and the counter ${counted} — one of them is wrong about the Lean corpus`)
  }
  const empty = leanTheoremsForLatex().filter((r) => r.proposition.length === 0)
  if (empty.length) throw new Error(`lean→latex: ${empty.length} theorem(s) parsed with an empty proposition: ${empty.map((e) => e.name).join(', ')}`)
}

export function writeLeanLatex(): void {
  assertLeanLatexAgrees()
  const fs = (process as NodeJS.Process & { getBuiltinModule?: (id: string) => typeof import('node:fs') }).getBuiltinModule!('node:fs')
  fs.writeFileSync(OUT, leanTheoremsAsLatex() + '\n')
  console.log(`wrote ${OUT} — ${leanTheoremsForLatex().length} theorem environments`)
}

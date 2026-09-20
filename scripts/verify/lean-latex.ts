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

/**
 * LEAN AND LATEX MUST PROVE EACH OTHER, AND THEY WERE ONLY EVER CHECKED ONE AGAINST ITSELF.
 *
 * assertLeanLatexAgrees compares TWO READINGS OF THE LEAN — leanTheoremsForLatex parses it,
 * leanInvolutionCorpus counts it — and that is a real check, but both eyes are on the same page. The
 * committed src/research/lean-theorems.tex, the artefact a paper actually cites, was written by
 * writeLeanLatex and never read back. Measured when this was added: 58 theorem environments committed
 * against 84 theorems the Lean corpus proves, 22,073 bytes against 34,855. Twenty-six machine-checked
 * propositions were missing from the document that explains them, and every gate was green.
 *
 * Two directions, because one is not a correspondence:
 *   LEAN → LATEX  the committed .tex equals what the Lean-derived generator emits, byte for byte.
 *                 A stale artefact is a paper quoting a corpus that has moved.
 *   LATEX → LEAN  every theorem environment in the committed .tex carries a proposition that the Lean
 *                 reader also produces. A document may not state a theorem the kernel never saw.
 * Together they close the loop: neither file can move without the other refusing.
 */
export function assertLeanLatexAndTheDocumentProveEachOther(): void {
  assertLeanLatexProveEachOther()
  assertLeanLatexAgrees()
}

export function assertLeanLatexProveEachOther(): void {
  const fs = (process as NodeJS.Process & { getBuiltinModule?: (id: string) => typeof import('node:fs') }).getBuiltinModule!('node:fs')
  const emitted = leanTheoremsAsLatex() + '\n'
  let committed = ''
  try { committed = fs.readFileSync(OUT, 'utf8') } catch { committed = '' }
  const rows = leanTheoremsForLatex()

  // LEAN → LATEX
  const drift = committed !== emitted
  console.log(`lean→latex drift: committed ${committed.length}B · emitted ${emitted.length}B · ${drift ? 'DRIFTED' : 'IN SYNC'}`)

  // LATEX → LEAN: every proposition the document states must be one the Lean reader produced.
  const propositions = [...committed.matchAll(/\\begin\{(?:proposition|theorem|lemma)\}(?:\[[^\]]*\])?\s*([\s\S]*?)\\end\{(?:proposition|theorem|lemma)\}/g)]
    .map((m) => m[1]!.replace(/\s+/g, ' ').trim()).filter((t) => t.length > 0)
  // COMPARE THE SAME THING ON BOTH SIDES. The document is LaTeX, so `{α : Type}` is written with escaped
  // braces; the Lean reader hands back unescaped source. A literal includes() between those two forms
  // called four freshly GENERATED environments unbacked — a false positive in the check, not a lie in
  // the document, and the kind of finding that must be diagnosed rather than accepted. Stripping
  // backslashes and whitespace compares symbol content, which is what "does the kernel know this
  // proposition" actually asks.
  const bare = (t: string) => t.replace(/\\/g, '').replace(/\s+/g, '').trim()
  const known = rows.map((r) => bare(r.proposition)).filter((k) => k.length > 0)
  const unbacked = propositions.filter((p) => !known.some((k) => bare(p).includes(k)))
  console.log(`latex→lean: ${propositions.length} environment(s) in the document · ${unbacked.length} state a proposition the Lean corpus does not`)
  for (const u of unbacked.slice(0, 4)) console.log(`    unbacked: ${u.slice(0, 110)}`)

  if (drift) throw new Error(`${OUT} has drifted from the Lean corpus — ${rows.length} theorems are proved and the document carries a different text. Run \`npm run lean-latex\`.`)
  if (unbacked.length > 0) throw new Error(`${OUT} states ${unbacked.length} proposition(s) no Lean theorem backs — a document may not claim what the kernel never saw`)
}

export function writeLeanLatex(): void {
  // ONLY the Lean↔Lean reading check here. assertLeanLatexProveEachOther refuses on drift, and this
  // function exists to REPAIR drift — calling it would make the writer unable to run exactly when it
  // is needed. Measured the moment it was wired: `npm run paper:lean-latex` threw on the 22,073 vs
  // 34,855 byte gap it was being run to close. A repair tool gated on the damage it repairs is a
  // deadlock, not a check.
  assertLeanLatexAgrees()
  const fs = (process as NodeJS.Process & { getBuiltinModule?: (id: string) => typeof import('node:fs') }).getBuiltinModule!('node:fs')
  fs.writeFileSync(OUT, leanTheoremsAsLatex() + '\n')
  console.log(`wrote ${OUT} — ${leanTheoremsForLatex().length} theorem environments`)
}

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
import { leanInvolutionCorpus, leanRegistryTheoremsForLatex, leanTheoremsAsLatex, leanTheoremsForLatex } from '../../src/pair/formal/proofs/index.ts'
import { decided } from './status.ts'

const OUT = 'src/research/lean-theorems.tex'
/** EVERY TeX DOCUMENT IN THE REPOSITORY IS TYPESET, NOT ONLY THE GENERATED ONE. The two authored papers each began
 *  `\usepackage[utf-8]{inputenc}`, which stops tectonic at once (pdflatex is not installed here and was not tried), and one called \qed without the package that defines
 *  it: neither had ever compiled, and nothing ran them, exactly as with the three Mathlib .lean files. Their preambles
 *  are repaired and not one sentence is changed; the gate says they typeset, and says nothing about what they claim. */
const DOCUMENTS = [OUT, 'src/research/paper.tex', 'docs/clay_millennium_sealed.tex'] as const

export function assertLeanLatexAgrees(): void {
  const read = leanTheoremsForLatex().length
  const counted = leanInvolutionCorpus().involutionTheorems
  console.log(`lean→latex: ${read} theorems read · ${counted} counted`)
  if (read !== counted) {
    throw new Error(`lean→latex: the reader found ${read} theorems and the counter ${counted} — one of them is wrong about the Lean corpus`)
  }
  // THE REGISTRY CORPUS, BY THE SAME TWO ROUTES. It joined the document on 2026-11-13 and is held to the same check,
  // counted apart: the involution number above is what the README and the abstract state, and it must not absorb it.
  const readRegistry = leanRegistryTheoremsForLatex().length
  const countedRegistry = leanInvolutionCorpus().registryTheorems
  console.log(`lean→latex: ${readRegistry} registry theorems read · ${countedRegistry} counted`)
  if (readRegistry !== countedRegistry) {
    throw new Error(`lean→latex: the reader found ${readRegistry} registry theorems and the counter ${countedRegistry} — one of them is wrong about the registry corpus`)
  }
  const empty = [...leanTheoremsForLatex(), ...leanRegistryTheoremsForLatex()].filter((r) => r.proposition.length === 0)
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
  assertTheDocumentCompiles()
}

export function assertLeanLatexProveEachOther(): void {
  const fs = (process as NodeJS.Process & { getBuiltinModule?: (id: string) => typeof import('node:fs') }).getBuiltinModule!('node:fs')
  const emitted = leanTheoremsAsLatex() + '\n'
  let committed = ''
  try { committed = fs.readFileSync(OUT, 'utf8') } catch { committed = '' }
  const rows = [...leanTheoremsForLatex(), ...leanRegistryTheoremsForLatex()]

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
  // AND THE NAMED MACROS ARE THE SAME FALSE POSITIVE, ONE CHARACTER ON. texEscape writes `^` as
  // \textasciicircum{} and `~` as \textasciitilde{}, which stripping backslashes leaves as a word, not the
  // symbol — so the first proposition with an exponent (quantum.lean, `8 ^ 2 = 8 * (2 ^ 2 * 2)`) was called
  // unbacked while the kernel had decided it. No earlier theorem used `^`, so nothing had asked.
  const bare = (t: string) => t.replace(/\\textasciicircum\{\}/g, '^').replace(/\\textasciitilde\{\}/g, '~').replace(/\\/g, '').replace(/\s+/g, '').trim()
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
  console.log(`wrote ${OUT} — ${leanTheoremsForLatex().length} involution + ${leanRegistryTheoremsForLatex().length} registry theorem environments, one document`)
}

/**
 * THE DOCUMENT MUST COMPILE — the same law as "every .lean file must compile", one format over.
 *
 * src/research/lean-theorems.tex was a fragment nothing ever typeset: a \section with no document, propositions in
 * display math that cannot break a line, Lean's ∀ ∧ ⟨ ⟩ in a font that does not carry them. It was checked byte for
 * byte against its generator and never once against TeX. The first compile found what four gates had not: a "Theorem
 * [Is]" lifted from a comment line that begins with the word theorem, its proposition a `def` and its tactic a list
 * literal — visible only because one box came out 150pt too wide.
 *
 * Four statements, decided on every run that has the engine, each "there are none":
 *   compile errors · characters with no glyph in the declared fonts · undefined references · boxes wider than the page.
 * THREE STATES. No tectonic on PATH is NOT MEASURED and says so — CI has none — never a pass and never a refusal.
 */
export function assertTheDocumentCompiles(): void {
  const cp = (process as NodeJS.Process & { getBuiltinModule?: (id: string) => typeof import('node:child_process') }).getBuiltinModule!('node:child_process')
  const fs = (process as NodeJS.Process & { getBuiltinModule?: (id: string) => typeof import('node:fs') }).getBuiltinModule!('node:fs')
  const path = (process as NodeJS.Process & { getBuiltinModule?: (id: string) => typeof import('node:path') }).getBuiltinModule!('node:path')
  const os = (process as NodeJS.Process & { getBuiltinModule?: (id: string) => typeof import('node:os') }).getBuiltinModule!('node:os')
  const probe = cp.spawnSync('tectonic', ['--version'], { encoding: 'utf8' })
  if (probe.error || probe.status !== 0) {
    console.log('latex compile: NOT MEASURED — tectonic is not on PATH; the document was not typeset on this machine, and nothing is claimed about it')
    return
  }
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'lean-latex-'))
  try {
    const errors: string[] = [], missing: string[] = [], undefinedRefs: string[] = [], overfull: string[] = []
    console.log(`latex compile: ${probe.stdout.trim()}`)
    DOCUMENTS.forEach((doc, n) => {
      if (!fs.existsSync(doc)) { errors.push(`${doc}: the document is not there`); return }
      const stem = `doc${n}`
      fs.copyFileSync(doc, path.join(dir, `${stem}.tex`))
      const run = cp.spawnSync('tectonic', ['--keep-logs', `${stem}.tex`], { cwd: dir, encoding: 'utf8', timeout: 600_000 })
      const log = fs.existsSync(path.join(dir, `${stem}.log`)) ? fs.readFileSync(path.join(dir, `${stem}.log`), 'utf8') : ''
      const lines = (re: RegExp) => log.split('\n').filter((l) => re.test(l)).map((l) => `${doc}: ${l}`)
      if (!(run.status === 0 && fs.existsSync(path.join(dir, `${stem}.pdf`)))) errors.push(`${doc}: tectonic exit ${run.status}`, ...String(run.stderr ?? '').split('\n').filter((l) => /^error|^! /.test(l)).slice(0, 8).map((l) => `${doc}: ${l}`))
      missing.push(...lines(/Missing character/))
      undefinedRefs.push(...lines(/undefined/i))
      overfull.push(...lines(/^Overfull/))
      console.log(`  ${doc} — ${/\((\d+) pages?/.exec(log)?.[1] ?? '?'} pages`)
    })
    console.log(decided('latex.compile-errors', errors.length, { evidence: () => errors }))
    console.log(decided('latex.missing-glyphs', missing.length, { evidence: () => missing.map((l) => l.replace(/^.*There is no /, '')) }))
    console.log(decided('latex.undefined-references', undefinedRefs.length, { evidence: () => undefinedRefs }))
    console.log(decided('latex.overfull-boxes', overfull.length, { evidence: () => overfull }))
  } finally {
    fs.rmSync(dir, { recursive: true, force: true })
  }
}

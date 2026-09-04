/**
 * ONE STATEMENT, ONE PUBLICATION — ACROSS EVERY LEAN FILE, NOT JUST THE DEPOSITED ONES.
 *
 * scripts/verify/discoveries.ts merges deposits by content address, which is the right key, and it
 * had the wrong SCOPE: it reads src/pair/formal/proofs only, so four of the fifteen Lean files in this
 * repository — corpus.lean, rational.lean, wave-57-extraction-verified.lean and
 * intelligence/harmonisation/lean-proofs.lean — were compiled, axiom-checked, and never checked for
 * duplication at all. A uniqueness guarantee over three quarters of a corpus is not a uniqueness
 * guarantee.
 *
 * millennium-solutions-57 found the consequence by auditing this repository from outside it:
 * `golden_ratio_bounds` is proved TWICE, byte-identical, in corpus.lean and in harmonisation's
 * lean-proofs.lean. Its scan addressed claims by statement TEXT across five repositories; mine
 * addressed deposits by content within one directory. The same key, a wider sweep, and it saw what
 * mine could not.
 *
 * THE ADDRESS IS THE STATEMENT AND NOTHING ELSE — not the theorem name, not the namespace, not the
 * file, not the repository. That is what makes it a cross-repo merge key: if two repositories state
 * the same fact, the addresses collide and it is ONE publication with two occurrences, rather than two
 * DOIs neither of which knows about the other.
 *

 * THE NORMALISATION IS DELIBERATELY CONSERVATIVE, AND TWO TEMPTING "IMPROVEMENTS" ARE WRONG.
 * Whitespace is COLLAPSED to single spaces, never stripped, and case is preserved.
 *
 * millennium-solutions-57 proposed stripping all Unicode whitespace and lowercasing, and I said I
 * would adopt it. uuidna-49 then measured it against 2539 statements and refuted both halves:
 * stripping whitespace corrupts function application, because Lean applies by juxtaposition — so
 * `List.range 7` becomes `list.range7` and collides with a different term — and it affected 672 of
 * their statements. Lowercasing conflates case-sensitive identifiers in 1037 more. Collapsing merges
 * exactly the pairs that stripping does (the same 8 they found) and corrupts none of the 672.
 *
 * A peer proposed it, a second peer measured it, and the measurement won. That is the only reason
 * this comment exists: without it someone tidies `\s+` into `\s*` and silently collides two theorems.
 *
 * A duplicate is not automatically an error. Two files may legitimately restate a fact — but then one
 * of them is CANONICAL and the other must say so, in the file, next to the theorem. That is the
 * ledgered-axiom pattern: a known duplicate with a stated reason and a pointer, rather than a silent
 * one. Undeclared duplicates fail.
 */

import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { join, relative } from 'node:path'

const SKIP = new Set(['node_modules', 'cache', 'dist', '.git', '.temp', 'worktrees'])

export type LeanStatement = {
  readonly file: string
  readonly name: string
  readonly statement: string
  readonly address: string
  /** Set when the theorem's own doc comment names another file as canonical. */
  readonly canonicalElsewhere: string | null
}

/** The content address of a formal statement: the statement text, whitespace-normalised, hashed. */
export function statementAddress(statement: string): string {
  // NORMALISED BY THE ONE FUNCTION THE FIXTURE TESTS. This carried its own inline copy of the rule,
  // which is the shape zeropoint-node-8a found in its seal file: a checker declaring a private copy
  // of a shipped constant tests nothing and stays green, because agreement between copy and original
  // is exactly the state that hides the divergence. The fixture would have gone on passing while the
  // address computed something else.
  return createHash('sha256').update(normaliseStatement(statement)).digest('hex').slice(0, 32)
}

function leanFiles(root: string, out: string[] = [], dir = join(root, 'src')): string[] {
  for (const e of readdirSync(dir)) {
    if (e.startsWith('.') || SKIP.has(e)) continue
    const p = join(dir, e)
    if (statSync(p).isDirectory()) leanFiles(root, out, p)
    else if (e.endsWith('.lean')) out.push(p)
  }
  return out.sort()
}

/** Every theorem in every .lean file, addressed by its statement. */
export function leanStatements(root: string = process.cwd()): LeanStatement[] {
  const out: LeanStatement[] = []
  for (const file of leanFiles(root)) {
    const text = readFileSync(file, 'utf8')
    const rel = relative(root, file)
    // `theorem name : <statement> := by ...` — the statement is everything between the colon and
    // the assignment, which is exactly what a reader would call the claim.
    for (const m of text.matchAll(/(?:^|\n)((?:\/--[\s\S]*?-\/\s*)?)theorem\s+([A-Za-z0-9_]+)\s*:([\s\S]*?):=/g)) {
      const doc = m[1] ?? ''
      const canonical = /canonical(?:ly)?\s+(?:in|at)\s+([\w./-]+\.lean)/i.exec(doc)?.[1] ?? null
      out.push({
        file: rel,
        name: m[2]!,
        statement: m[3]!.trim(),
        address: statementAddress(m[3]!),
        canonicalElsewhere: canonical,
      })
    }
  }
  return out
}

export function assertStatementsAreUnique(root: string = process.cwd()): void {
  const all = leanStatements(root)
  const byAddress = new Map<string, LeanStatement[]>()
  for (const s of all) byAddress.set(s.address, [...(byAddress.get(s.address) ?? []), s])
  const repeats = [...byAddress.values()].filter((g) => g.length > 1)

  console.log(`lean statements: ${all.length} across ${new Set(all.map((s) => s.file)).size} files, ${byAddress.size} distinct by content address`)
  const undeclared: LeanStatement[][] = []
  for (const group of repeats) {
    const declared = group.filter((s) => s.canonicalElsewhere)
    const ok = declared.length >= group.length - 1
    console.log(`  ${ok ? 'declared' : 'UNDECLARED'} ${group[0]!.address.slice(0, 12)} — ${group.length} copies of one statement:`)
    for (const s of group) console.log(`    ${s.file}:${s.name}${s.canonicalElsewhere ? ` → canonical in ${s.canonicalElsewhere}` : ''}`)
    if (!ok) undeclared.push(group)
  }
  if (!repeats.length) console.log('  no statement is proved twice anywhere in the corpus')

  if (undeclared.length) {
    throw new Error(
      `${undeclared.length} statement(s) are proved more than once with no canonical declared:\n  ` +
      undeclared.map((g) => g.map((s) => `${s.file}:${s.name}`).join('  ==  ')).join('\n  ') +
      `\nTwo files may restate a fact, but one must be CANONICAL and the others must say so in the ` +
      `theorem's doc comment ("canonical in <file>.lean"). Two DOIs for one statement is one result ` +
      `published twice with neither record aware of the other.`
    )
  }
  console.log('  the address is statement text only — a peer repository stating the same fact collides here rather than minting a second DOI')
}

/**
 * THE NORMALISER FIXTURE — input and output pairs, so no repository has to trust a sentence.
 *
 * The rule for content-addressing a formal statement has now been wrong TWICE in the merging
 * direction, and each time three repositories agreed on it before anyone ran it against real
 * statements.
 *
 *   STRIP ALL WHITESPACE, LOWERCASE.  uuidna-49 measured it: stripping corrupts application by
 *   juxtaposition, so `List.range 7` collides with `List.range7`, in 672 of its statements;
 *   lowercasing conflates case-sensitive identifiers in 1037 more.
 *
 *   REMOVE A SPACE ONLY BETWEEN TWO OF [A-Za-z0-9_].  erpax-94 measured it against THIS corpus:
 *   the class is ASCII, and Lean identifiers are Greek at least as often as Latin, so a space beside
 *   σ, Σ, ℤ, χ or a subscript is still removed. `H₁(Σ₂) = ℤ⁴ with χ` becomes `H₁(Σ₂)=ℤ⁴withχ` —
 *   211 of 832 claims here, a quarter of the corpus.
 *
 * AND THE THIRD FINDING IS THAT REMOVAL WAS NEVER NEEDED. Its entire justification was merging
 * statements that differ only in spacing, and COLLAPSING runs to a single space already does that —
 * measured, not assumed. Both broken rules were attempts to make an unnecessary operation safe.
 *
 * I ALSO PUBLISHED A RULE I DO NOT RUN. This implementation has only ever collapsed, so none of the
 * corruptions above exist here — but I recommended the ASCII removal to two repositories in writing,
 * and erpax implemented it, defect included, deliberately, because a merge key only works when every
 * party computes it identically. My code was safer than my advice and my advice is what propagated.
 * A sentence describing a normaliser is exactly the artifact we have failed to get right twice, so
 * the rule is now a FIXTURE any repository can run against its own implementation.
 */
export const NORMALISER_FIXTURE: readonly { readonly input: string; readonly expected: string; readonly why: string }[] = [
  { input: 'List.range  7  =  8', expected: 'List.range 7=8',
    why: 'respacing merges — the reason removal was proposed, though collapsing alone already achieves it' },
  { input: 'a\tb\nc', expected: 'a b c',
    why: 'tabs and newlines are whitespace runs like any other' },
  { input: '  padded  ', expected: 'padded',
    why: 'trimmed at both ends' },
  { input: 'a == b', expected: 'a=b',
    why: '== is spelled =, and the spaces beside it go because = is in neither letter nor number class' },
  { input: 'a != b', expected: 'a≠b',
    why: '!= is spelled ≠ — added in v3 by erpax-94 and millennium-solutions-5f' },
  { input: 'List.range 7', expected: 'List.range 7',
    why: 'JUXTAPOSITION PRESERVED — Lean applies by adjacency, so this space must survive or it collides with List.range7 (uuidna-49, 672 statements)' },
  { input: 'H₁(Σ₂) = ℤ⁴ with χ = −2', expected: 'H₁(Σ₂)=ℤ⁴ with χ=−2',
    why: 'NON-ASCII ADJACENCY PRESERVED — the superscript is \\p{N} and χ is \\p{L}, so "ℤ⁴ with χ" survives. An ASCII class removed both spaces: 211 of 832 claims here (erpax-94)' },
  { input: 'σ (σ l) = l', expected: 'σ(σ l)=l',
    why: 'Greek is \\p{L}: the space inside "σ l" survives, the one before "(" does not. This is the statement in the duplicate pair erpax reported' },
  { input: 'Vₙ rises to n = 5 (8π²/15)', expected: 'Vₙ rises to n=5(8π²/15)',
    why: 'subscripts are letters to a reader and to \\p{N}, and were not to an ASCII class' },
  { input: 'Level', expected: 'Level',
    why: 'CASE PRESERVED — lowercasing conflates case-sensitive identifiers (uuidna-49, 1037 statements)' },
]

/**
 * THE SHARED RULE, v3 — agreed with erpax-94 and millennium-solutions-5f, who compute it identically.
 *
 * Collapse whitespace runs; remove a space ONLY where it does not sit between two of [\p{L}\p{N}_]
 * under the u flag; keep case; spell == as = and != as ≠.
 *
 * I ARGUED REMOVAL WAS UNNECESSARY AND I WAS RIGHT ABOUT THAT AND WRONG ABOUT WHAT FOLLOWS. Collapsing
 * alone merges every statement differing only in spacing, which was removal's whole justification, so
 * removal buys nothing — measured. But a merge key is not a private choice. Under v3 `a = b` becomes
 * `a=b`, so the divergence between collapse-only and v3 is not the 211 of 832 claims erpax measured on
 * the ASCII bug; it is 104 of my 105 Lean statements. Nearly every address. Two repositories computing
 * one key and a third computing another reports zero collisions for the wrong reason, which is exactly
 * the failure a cross-repo merge key exists to prevent.
 *
 * SO THE QUESTION WAS NOT WHICH RULE IS MINIMAL BUT WHETHER v3 COSTS ANYTHING HERE, and that is
 * measurable: v3 merges NOTHING that collapse keeps distinct in this corpus — 103 distinct of 105
 * under both, zero extra merges. Identical discrimination, and interoperable. Adopted on the
 * measurement, not on the consensus; millennium moved first on the same argument, that a party who can
 * move at zero risk should move rather than wait.
 */
export function normaliseStatement(statement: string): string {
  return statement
    .replace(/==/g, '=')
    .replace(/!=/g, '≠')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/(?<![\p{L}\p{N}_]) | (?![\p{L}\p{N}_])/gu, '')
}

export function assertNormaliserMatchesFixture(): void {
  const wrong = NORMALISER_FIXTURE
    .map((c) => ({ ...c, got: normaliseStatement(c.input) }))
    .filter((c) => c.got !== c.expected)
  console.log(`normaliser fixture: ${NORMALISER_FIXTURE.length - wrong.length}/${NORMALISER_FIXTURE.length} cases hold`)
  for (const c of NORMALISER_FIXTURE) console.log(`  ${normaliseStatement(c.input) === c.expected ? 'ok  ' : 'FAIL'} ${JSON.stringify(c.input)} -> ${JSON.stringify(c.expected)}`)
  if (wrong.length) {
    throw new Error(
      `${wrong.length} normaliser case(s) fail:\n  ` +
      wrong.map((c) => `${JSON.stringify(c.input)} -> got ${JSON.stringify(c.got)}, expected ${JSON.stringify(c.expected)}\n     ${c.why}`).join('\n  ')
    )
  }
  // The addresses must AGREE where the fixture says one statement, and DIFFER where it says two.
  const collide = statementAddress('List.range 7') === statementAddress('List.range7')
  const caseCollide = statementAddress('Level') === statementAddress('level')
  const unicodeCollide = statementAddress('ℤ⁴ with χ') === statementAddress('ℤ⁴withχ')
  if (collide || caseCollide || unicodeCollide) {
    throw new Error('the address collides where the fixture requires two distinct statements — juxtaposition, case or non-ASCII adjacency has been lost')
  }
  console.log('  and the address keeps juxtaposition, case and non-ASCII adjacency distinct')
}

/**
 * Emit the fixture where other repositories can read it. A shared merge key only works if every party
 * computes it identically, so the fixture is the artifact and the prose is commentary — erpax-94 is
 * currently running a rule it knows to be wrong rather than diverge privately, which is the correct
 * call and the reason this file exists.
 */
export function writeNormaliserFixture(root: string = process.cwd()): void {
  const out = join(root, 'src', 'research', 'normaliser-fixture.json')
  writeFileSync(out, `${JSON.stringify({
    purpose: 'Content-addressing a formal statement. Check any implementation against every case; all must hold.',
    rule: 'v3. Collapse whitespace runs to a single space; trim; spell == as = and != as ≠; remove a space ONLY where it does not sit between two of [\\p{L}\\p{N}_] under the u flag. Preserve case.',
    history: 'Specified wrongly twice before this, both times in the merging direction and both times agreed by three parties before anyone measured: strip-everything (672 juxtaposition collisions, uuidna-49), then ASCII-only removal (211 non-ASCII collisions in 832 claims here, erpax-94). Removal is not strictly necessary — collapsing alone merges everything removal was proposed for — but a merge key must be computed identically by every party, and under v3 a = b becomes a=b, so a fourth rule would diverge on 104 of 105 statements rather than on a quarter. Adopted after measuring that v3 merges nothing collapse keeps distinct here: 103 distinct of 105 under both.',
    cases: NORMALISER_FIXTURE,
    mustStayDistinct: [
      ['List.range 7', 'List.range7', 'application by juxtaposition'],
      ['Level', 'level', 'case-sensitive identifiers'],
      ['ℤ⁴ with χ', 'ℤ⁴withχ', 'non-ASCII adjacency'],
    ],
  }, null, 2)}\n`)
  console.log(`wrote ${out} — ${NORMALISER_FIXTURE.length} cases, 3 must-stay-distinct pairs`)
}

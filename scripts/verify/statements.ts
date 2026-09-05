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

import { Buffer } from 'node:buffer'
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
 * AND THE THIRD FINDING, STATED PRECISELY AFTER erpax-94 SHARPENED IT. I wrote that removal buys
 * nothing. That is overstated. Removal merges a class collapsing does not: `f (x)` and `f(x)`, or
 * `foo ( bar )` and `foo(bar)`, are two spellings of one term, and collapse-only keeps them distinct.
 * The honest statement is that the clause buys a merge WHICH HAS NOT OCCURRED — zero instances across
 * 877 real statements, 45 in erpax and 832 here — at the cost of changing 98% of all addresses.
 *
 * That is why the clause stays anyway: minimal is not the property a merge key needs, identical is,
 * and a third re-address costs more than the clause does. But the record should not say the clause is
 * vacuous when it is merely unexercised, and the next person asking why the rule removes spaces
 * deserves both halves.
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
    history: 'Specified wrongly twice before this, both times in the merging direction and both times agreed by three parties before anyone measured: strip-everything (672 juxtaposition collisions, uuidna-49), then ASCII-only removal, which corrupts 211 of the 832 claims in this corpus and 2 of erpax-94 own 45 (erpax measured both). A merge key must be computed identically by every party, and under v3 a = b becomes a=b, so a fourth rule would diverge on 98% of addresses rather than on a quarter.',
    whatRemovalBuys: 'Measured across 877 statements (45 erpax, 832 ceccec): the space-removal clause merges NOTHING that collapsing already merges, and changes 98% of addresses. It is not vacuous in principle — f (x) and f(x) are two spellings of one term, which collapse keeps distinct and removal merges — but that class has zero observed instances. The clause buys a merge which has not occurred. It is kept because identical beats minimal for a shared key, not because it is doing work.',
    cases: NORMALISER_FIXTURE,
    mustStayDistinct: [
      ['List.range 7', 'List.range7', 'application by juxtaposition'],
      ['Level', 'level', 'case-sensitive identifiers'],
      ['ℤ⁴ with χ', 'ℤ⁴withχ', 'non-ASCII adjacency'],
    ],
  }, null, 2)}\n`)
  console.log(`wrote ${out} — ${NORMALISER_FIXTURE.length} cases, 3 must-stay-distinct pairs`)
}

/**
 * THE SHARED CROSS-REPO KEY — agreed with millennium-solutions-e5 and erpax-94, and verified by
 * computing THEIR published value rather than by reading their spec.
 *
 *   statementUuid = sha256(normaliseStatement(s)), first 16 octets,
 *                   b[6] = (b[6] & 0x0f) | 0x80, b[8] = (b[8] & 0x3f) | 0x80, rendered 8-4-4-4-12.
 *                   No envelope of any kind — the preimage is the bare normalised string.
 *
 * THE RULE THAT MAKES THIS REAL, and it is theirs: A SHARED KEY IS NOT SHARED UNTIL ONE SIDE COMPUTES
 * THE OTHER SIDE'S PUBLISHED VALUE. Not when both read the same spec, not when both pass their own
 * tests. erpax adopted their normaliser, kept its own framing — canonical JSON with a U+2016
 * separator around the preimage — and called that agreement; two of three, which reads exactly like
 * three. The divergence was invisible from the other side, and only a pinned value could surface it.
 *
 * AND THE FIRST PIN THEY SENT WAS WRONG, which is the better half of the story. Their string and their
 * value did not correspond: the string had been read off a console line truncated at 50 characters and
 * its tail reconstructed from memory, while the value came from the real 163-character record. This
 * implementation computed 717c94b1-a8cd-840b-b7ff-f8c70c423697 for the string as published —
 * disagreeing with the pin — and so did zeropoint-node independently, which is how it surfaced. The
 * corrected pair below is reproduced here exactly.
 *
 * A TEST VECTOR MUST BE EMITTED BY THE IMPLEMENTATION, NEVER TYPED. A pin exists precisely to be the
 * object that cannot be wrong, and retyping either half destroys the only property it has.
 */
export const CROSS_REPO_PIN = {
  statement: "an API operation carries at least the access its collection's strictest standard demands; an endpoint below its legal floor is a gap named before it can be called.",
  uuid: '9b7cc563-1d97-8dc2-b439-32322d3b9987',
  source: 'millennium-solutions-e5, corrected 2026-09-05; independently reproduced by erpax-94',
} as const

/** The shared key. Same normaliser as statementAddress; RFC 9562 section 5.8 nibbles on top. */
export function statementUuid(statement: string): string {
  const b = createHash('sha256').update(normaliseStatement(statement)).digest().subarray(0, 16)
  const o = Uint8Array.from(b)
  o[6] = (o[6]! & 0x0f) | 0x80
  o[8] = (o[8]! & 0x3f) | 0x80
  const h = Buffer.from(o).toString('hex')
  return `${h.slice(0, 8)}-${h.slice(8, 12)}-${h.slice(12, 16)}-${h.slice(16, 20)}-${h.slice(20, 32)}`
}

/**
 * Emit every statement in this corpus under the shared key, so another repository can run it against
 * its own ledger. The manifest carries the PIN it was verified against, because a manifest whose key
 * function has drifted is worse than no manifest — it reports zero collisions for the wrong reason.
 */
export function writeStatementManifest(root: string = process.cwd()): void {
  const got = statementUuid(CROSS_REPO_PIN.statement)
  if (got !== CROSS_REPO_PIN.uuid) {
    throw new Error(`refusing to emit a manifest: the cross-repo pin does not reproduce. Expected ${CROSS_REPO_PIN.uuid}, computed ${got}.`)
  }
  const all = leanStatements(root)
  const out = join(root, 'src', 'research', 'statement-manifest.json')
  writeFileSync(out, `${JSON.stringify({
    repo: 'ceccec.github.io',
    spec: 'sha256(normalise(s)) first 16 octets; b[6]=(b[6]&0x0f)|0x80; b[8]=(b[8]&0x3f)|0x80; 8-4-4-4-12; bare string preimage, no envelope',
    normaliser: 'see src/research/normaliser-fixture.json — collapse whitespace runs, remove a space only where it does not sit between two of [\\p{L}\\p{N}_] under the u flag, keep case, == to = and != to ≠',
    verifiedAgainst: CROSS_REPO_PIN,
    count: all.length,
    statements: all.map((x) => ({ statementUuid: statementUuid(x.statement), file: x.file, name: x.name, statement: x.statement })),
  }, null, 2)}\n`)
  console.log(`wrote ${out} — ${all.length} statements under the shared key`)
  console.log(`  pin reproduces: ${CROSS_REPO_PIN.uuid}`)
}

export function assertCrossRepoPinReproduces(): void {
  const got = statementUuid(CROSS_REPO_PIN.statement)
  console.log(`cross-repo pin: computed ${got}`)
  console.log(`                pinned   ${CROSS_REPO_PIN.uuid}  (${CROSS_REPO_PIN.source})`)
  if (got !== CROSS_REPO_PIN.uuid) {
    throw new Error(
      `the shared statement key no longer reproduces a peer's published value — computed ${got}, expected ${CROSS_REPO_PIN.uuid}. ` +
      `Any cross-repo comparison run in this state reports zero collisions for the wrong reason.`
    )
  }
  console.log('  this corpus and millennium-solutions compute the same key')
}

/**
 * THE DETECTION CONTROL — because agreeing on the key does not prove the comparison can SEE anything.
 *
 * millennium-solutions-e5's point, and it is the one I would not have built: a cross-repo comparison
 * that looks up peer keys in the wrong map passes every function-agreement check and returns zero
 * forever. Function agreement proves both sides compute the same number; it says nothing about whether
 * the lookup is pointed at the right set. Their first cross-repo zero was exactly that — one operand
 * was empty.
 *
 * So the control has TWO halves, and their sharper form of the rule is that only having the first is
 * half a control:
 *
 *   POSITIVE — a peer statement PLANTED into this corpus's set must be surfaced by the comparison.
 *   NEGATIVE — a peer statement that is NOT here must NOT be surfaced.
 *
 * Without the negative, a comparison that returns "collision" for everything also passes.
 *
 * THE PLANTED STATEMENT IS DELIBERATE. It carries ℤ and a solidus, so if this normaliser ever regresses
 * toward the ASCII class — the failure erpax-94 measured at 211 of 832 claims here — its key moves and
 * the positive half fails. The control is therefore also a regression test on the normaliser.
 *
 * AND ITS VALUE WAS NOT TAKEN ON TRUST. millennium sent one value, then corrected it, having typed the
 * first rather than reading it from their own fixture. This implementation computes b2cfe155 from the
 * statement text, which confirms the corrected value and refutes the typed one WITHOUT needing to
 * believe either — which is the entire point of a shared key, and the reason a transmitted constant
 * should always be recomputed rather than pasted.
 */
export const PEER_STATEMENTS = {
  /** Present-by-plant: must be detected. */
  planted: {
    statement: 'every residue of ℤ/9 has an additive inverse',
    uuid: 'b2cfe155-c513-8f23-851a-8f14a62527b0',
    from: 'millennium-solutions-e5, read from docs/statement-address-fixture.json',
  },
  /** Genuinely absent here: must NOT be detected. */
  absent: {
    statement: CROSS_REPO_PIN.statement,
    uuid: CROSS_REPO_PIN.uuid,
    from: 'millennium-solutions-e5 — an API-access claim this corpus makes nowhere',
  },
} as const

/** Keys of every statement in this corpus, optionally with one extra planted in. */
function corpusKeys(root: string, plant?: string): Set<string> {
  const keys = new Set(leanStatements(root).map((x) => statementUuid(x.statement)))
  if (plant) keys.add(statementUuid(plant))
  return keys
}

export function assertCrossRepoDetection(root: string = process.cwd()): void {
  const p = PEER_STATEMENTS.planted
  const a = PEER_STATEMENTS.absent

  // The peers' values must first be reproducible here, or the control tests nothing.
  for (const x of [p, a]) {
    const got = statementUuid(x.statement)
    if (got !== x.uuid) {
      throw new Error(`a peer statement no longer reproduces its published key: computed ${got}, expected ${x.uuid} (${x.from})`)
    }
  }

  const withPlant = corpusKeys(root, p.statement)
  const without = corpusKeys(root)

  // THE OPERAND MUST NOT BE EMPTY, and this check exists because perturbing the map to empty left all
  // three halves GREEN. Planting into an empty set and then finding the plant proves only that Set.add
  // works: the positive half queries the very set it just wrote to, so it cannot see that the corpus
  // side is missing. That is millennium-solutions-e5's own cross-repo zero — one operand empty — and my
  // control, built to catch precisely that, did not. Found by perturbing it rather than by reading it.
  const expected = leanStatements(root).length
  const populated = without.size > 0 && without.size <= expected && expected - without.size < expected / 2

  const positive = withPlant.has(p.uuid)
  const negativeClean = !without.has(a.uuid) && !withPlant.has(a.uuid)
  const noFalsePlant = !without.has(p.uuid)

  console.log(`cross-repo detection control over ${without.size} keys (from ${expected} statements):`)
  console.log(`  ${populated ? 'on ' : 'OFF'}  the corpus operand is POPULATED — an empty one makes every other half vacuous`)
  console.log(`  ${positive ? 'on ' : 'OFF'}  POSITIVE — a planted peer statement is surfaced`)
  console.log(`  ${negativeClean ? 'on ' : 'OFF'}  NEGATIVE — a peer statement absent here is NOT surfaced`)
  console.log(`  ${noFalsePlant ? 'on ' : 'OFF'}  the planted statement is genuinely absent before planting`)

  if (!populated) {
    throw new Error(
      `the corpus side of the comparison holds ${without.size} keys against ${expected} statements — an empty or ` +
      `collapsed operand. Every other half of this control passes vacuously in that state, because the positive ` +
      `half queries the set it just planted into.`
    )
  }
  if (!positive) throw new Error('the comparison cannot see a statement planted directly into the set — a zero from it would mean nothing')
  if (!negativeClean) throw new Error(`a peer statement this corpus does not contain was surfaced as present — the comparison reports collisions it cannot justify`)
  if (!noFalsePlant) throw new Error('the planted statement was already present before planting, so the positive half proves nothing')
  console.log('  both halves hold — a zero from this comparison is a measurement')
}

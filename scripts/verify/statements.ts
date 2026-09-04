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
 * A duplicate is not automatically an error. Two files may legitimately restate a fact — but then one
 * of them is CANONICAL and the other must say so, in the file, next to the theorem. That is the
 * ledgered-axiom pattern: a known duplicate with a stated reason and a pointer, rather than a silent
 * one. Undeclared duplicates fail.
 */

import { readFileSync, readdirSync, statSync } from 'node:fs'
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
  return createHash('sha256')
    .update(statement.replace(/\s+/g, ' ').replace(/==/g, '=').trim())
    .digest('hex')
    .slice(0, 32)
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

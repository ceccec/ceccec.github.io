/**
 * WHAT FRACTION OF THESE GATES CONSTRAIN THE SUBJECT RATHER THAN THE BOOKKEEPING?
 *
 * zeropoint-node-8a asked it first, after finding that thirteen of its fifteen new gates compared a
 * record against its source while only two perturbed code and asked a law — and that over the same
 * period its theorem count rose sharply while the number of laws constraining shipped code did not
 * move at all. hitsol-8d proposed the mechanical form: perturb the SUBJECT and the BOOKKEEPING
 * separately and record which moves the number, because a gate that only moves on bookkeeping is
 * measuring itself. erpax-94 proposed the lexical form and asked for this number before computing its
 * own, so neither of us anchors the other. Three repositories converged on one question, which is
 * usually a sign the question is the right one.
 *
 * WHAT IS MEASURED HERE, precisely, because the honest version of this number is narrow.
 *
 * A gate CONSTRAINS THE SUBJECT if it imports something from src/ — the sealed corpus — and can fail
 * for a reason other than a recorded floor being exceeded. Both halves are necessary. Importing the
 * corpus is not enough: a gate can import a fold and then only count its rows. Throwing is not enough
 * either: a ratchet throws, and what it throws about is a number in a status file.
 *
 * A gate CONSTRAINS BOOKKEEPING if its only failure mode is a ratchet regression, or if it never
 * reaches into src/ at all — a drift check between a generated file and its source, a path resolver,
 * a count of lines. These are not waste. They caught real defects here: a stale figure in the file
 * people cite this work by, a generated deposit ledger sitting 18 records behind its sources. But
 * they CANNOT FAIL FOR A REASON ABOUT THE MATHEMATICS, and that is the distinction being counted.
 *
 * THE FIRST VERSION OF THIS INSTRUMENT WAS WRONG, in the way it exists to detect. It defined "reaches
 * the subject" as "imports from src/", which is a PROXY. lean.ts runs the actual Lean compiler over
 * src/pair/formal/proofs and reads what the kernel prints — the most subject-constraining gate in the
 * tree — and imports nothing from src/, so the census filed it as bookkeeping. statements.ts walks
 * every .lean file on disk and fails when two theorems carry the same statement; also filed as
 * bookkeeping. A gate can reach the corpus by IMPORT, by PATH, or by running a tool over it, and only
 * the first was being counted. Criterion substitution, in the instrument built to count criterion
 * substitution, found by reading its own output instead of publishing it.
 *
 * PARSED, NOT MATCHED. Imports, string literals and throw statements are read from the TypeScript AST,
 * because a regex over source is how three of this corpus's gates were wrong before. The limitation
 * is stated rather than hidden: this measures REACH and FAILURE MODE, not whether the assertion is
 * about the mathematics. A gate importing a fold and asserting its facets counts as subject-constraining
 * here even if the facets themselves are weak — and one of them was, until a peer audit found a facet
 * of mine that could not be false. So this number is an UPPER BOUND on how well this tree is
 * constrained, never a floor.
 *
 * DIRECTION OF FAILURE: none. This reports and does not gate. A ratio is a judgement about what a
 * repository is for, and a gate that failed on it would be the twenty-third entry in zeropoint's
 * catalogue of instruments that audit the auditing.
 */

import { createRequire } from 'node:module'
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

// The bundler cannot resolve a bare specifier here — purity.ts and side-effects.ts load the compiler
// the same way, and the note in both says so. This is the third gate to need it.
type TS = typeof import('typescript')

export type GateShape = {
  readonly file: string
  readonly reachesSubject: boolean
  readonly ratchets: boolean
  readonly failsOnSomethingElse: boolean
  readonly verdict: 'subject' | 'bookkeeping' | 'unmeasured'
}

/** Every verify script, excluding this one — an instrument does not count itself. */
function gateFiles(root: string): string[] {
  const dir = join(root, 'scripts', 'verify')
  return readdirSync(dir)
    .filter((f) => f.endsWith('.ts') && f !== 'census.ts' && f !== 'status.ts' && !f.startsWith('_'))
    .sort()
}

export function gateShapes(root: string = process.cwd()): GateShape[] {
  const ts = createRequire(`${process.cwd()}/`)('typescript') as TS
  return gateFiles(root).map((f) => {
    const path = join(root, 'scripts', 'verify', f)
    const src = ts.createSourceFile(path, readFileSync(path, 'utf8'), ts.ScriptTarget.ES2022, true)

    let reachesSubject = false
    let ratchets = false
    const throwConditions: boolean[] = []

    const walk = (node: import('typescript').Node, insideRatchetArg = false): void => {
      // REACH IS BY IMPORT, BY PATH, OR BY RUNNING A TOOL OVER THE CORPUS — all three count.
      if (ts.isImportDeclaration(node) && ts.isStringLiteral(node.moduleSpecifier)) {
        if (/(^|\/)src\//.test(node.moduleSpecifier.text)) reachesSubject = true
      }
      if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
        // A path INTO the corpus, in any of the spellings used here: 'src', 'src/...', or a segment
        // handed to join(). Excludes mentions inside a longer word, so 'source' does not match.
        if (/(^|[^A-Za-z])src([^A-Za-z]|$)/.test(node.text)) reachesSubject = true
      }
      if (ts.isCallExpression(node) && ts.isIdentifier(node.expression) && node.expression.text === 'ratchet') {
        ratchets = true
      }
      if (ts.isThrowStatement(node)) {
        // A throw that is NOT the ratchet's own is a failure mode about something else. The ratchet
        // throws from status.ts, which this walk never enters, so every throw seen here is the gate's.
        throwConditions.push(true)
      }
      node.forEachChild((c) => walk(c, insideRatchetArg))
    }
    walk(src)

    const failsOnSomethingElse = throwConditions.length > 0
    const verdict: GateShape['verdict'] =
      reachesSubject && failsOnSomethingElse ? 'subject'
      : reachesSubject || ratchets || failsOnSomethingElse ? 'bookkeeping'
      : 'unmeasured'
    return { file: f, reachesSubject, ratchets, failsOnSomethingElse, verdict }
  })
}

export function reportGateCensus(root: string = process.cwd()): void {
  const shapes = gateShapes(root)
  const subject = shapes.filter((s) => s.verdict === 'subject')
  const book = shapes.filter((s) => s.verdict === 'bookkeeping')
  const unmeasured = shapes.filter((s) => s.verdict === 'unmeasured')

  console.log(`gate census over ${shapes.length} verify scripts — parsed from the TypeScript AST, not matched\n`)
  console.log(`  CONSTRAIN THE SUBJECT   ${String(subject.length).padStart(2)}   reach into src/ AND can fail for a reason other than a floor`)
  for (const s of subject) console.log(`      ${s.file}`)
  console.log(`\n  BOOKKEEPING             ${String(book.length).padStart(2)}   cannot fail for a reason about the mathematics`)
  for (const s of book) console.log(`      ${s.file.padEnd(24)} ${s.reachesSubject ? 'reaches src/' : 'never reaches src/'}${s.ratchets ? ' · ratchet' : ''}${s.failsOnSomethingElse ? '' : ' · only a floor'}`)
  if (unmeasured.length) {
    console.log(`\n  UNMEASURED              ${String(unmeasured.length).padStart(2)}   neither reaches src/ nor fails nor ratchets`)
    for (const s of unmeasured) console.log(`      ${s.file}`)
  }
  const pct = Math.round((subject.length / shapes.length) * 100)
  console.log(`\n  ${subject.length} of ${shapes.length} — ${pct}%`)
  console.log(`  THIS IS AN UPPER BOUND, not a floor: a gate that reaches src/ and throws counts here even if`)
  console.log(`  what it asserts is weak, and one of mine could not be false until a peer audit found it.`)
  console.log(`\n  KNOWN RESIDUAL, stated rather than tuned away: purity.ts measures the SHIPPED BUNDLE for`)
  console.log(`  nondeterminism and egress, never src/, so it counts as bookkeeping here and is arguably not.`)
  console.log(`  release.ts and mcp-transport.ts measure built artifacts the same way. The first version of`)
  console.log(`  this census said 31%; widening reach from imports to paths and tools said 49%. Widening again`)
  console.log(`  to built artifacts would say more, and at that point I would be tuning an instrument until`)
  console.log(`  its number flattered me, which is the defect this census exists to count. It stops here.`)
}

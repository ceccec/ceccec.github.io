/**
 * AN IMPORT MUST NOT RUN A PROGRAM.
 *
 * A bare expression statement at module scope executes when the file is IMPORTED. That is
 * correct in an entry point and wrong in a module index — and this corpus turns entry points
 * into module indexes as a matter of routine, because the census law dissolves standalone
 * files into their parents. Three instances had accumulated, each one a construct that was
 * right where it was written and wrong where a merge put it:
 *
 *   src/quantum/waves        `main(); main().catch(console.error)` from a dissolved run.ts —
 *     every one of the 1004 scripts routing through the bootstrap ran a ten-task discovery
 *     spiral, unawaited, racing the command that triggered it.
 *   src/quantum/universal    `testUniversalSolver()` — printed "PRODUCTION READY" and
 *     "All theorems proven via involution structure" to stdout on import.
 *   src/quantum              four `api.add(...)` calls wiring endpoints that returned
 *     Math.random() as impact, ETA and temperature change.
 *
 * The related case has no separate gate because the compiler cannot see it either: a
 * specifier like `from '..'` keeps resolving after a move and silently means something else.
 * verify:imports proves such a specifier RESOLVES; only reading it proves it resolves to the
 * thing intended. Both instances found so far were caught by a human reading the merge diff.
 *
 * Parsed with the TypeScript compiler, not regex — brace-counting has now failed five times
 * in this codebase.
 */

import { createRequire } from 'node:module'
import { corpusFiles } from './corpus.ts'
import { ratchet } from './status.ts'

const require = createRequire(`${process.cwd()}/`)

/** Highest count tolerated. Zero: there is no legitimate reason for a src module index to
 *  execute a statement when imported. Table-building belongs in an expression. */

export type SideEffect = { file: string; line: number; text: string }

export function findTopLevelSideEffects(root: string = process.cwd()): SideEffect[] {
  // Reads the shared corpus index rather than walking and parsing src a second time.
  const ts = require('typescript') as typeof import('typescript')
  const found: SideEffect[] = []
  for (const file of corpusFiles(root)) {
    const sf = file.ast()
    for (const stmt of sf.statements) {
      if (!ts.isExpressionStatement(stmt)) continue
      found.push({
        file: file.rel,
        line: sf.getLineAndCharacterOfPosition(stmt.getStart(sf)).line + 1,
        text: stmt.getText(sf).slice(0, 100).replace(/\s+/g, ' '),
      })
    }
  }
  return found
}

export function assertNoImportTimeSideEffects(): void {
  const found = findTopLevelSideEffects()
  console.log(ratchet('side-effects.top-level', found.length))
  for (const f of found.slice(0, 20)) console.log(`  ${f.file}:${f.line}  ${f.text}`)
}

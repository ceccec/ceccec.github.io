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
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

const require = createRequire(`${process.cwd()}/`)
const SKIP = new Set(['node_modules', 'cache', 'dist', '.git', '.temp'])

/** Highest count tolerated. Zero: there is no legitimate reason for a src module index to
 *  execute a statement when imported. Table-building belongs in an expression. */
const BASELINE = 0

export type SideEffect = { file: string; line: number; text: string }

export function findTopLevelSideEffects(root: string = process.cwd()): SideEffect[] {
  const ts = require('typescript') as typeof import('typescript')
  const found: SideEffect[] = []

  const walk = (dir: string): void => {
    let entries: string[] = []
    try {
      entries = readdirSync(dir)
    } catch {
      return
    }
    for (const entry of entries) {
      const p = join(dir, entry)
      let st
      try {
        st = statSync(p)
      } catch {
        continue
      }
      if (st.isDirectory()) {
        if (!SKIP.has(entry)) walk(p)
        continue
      }
      if (!entry.endsWith('.ts')) continue
      const text = readFileSync(p, 'utf8')
      const sf = ts.createSourceFile(p, text, ts.ScriptTarget.ESNext, true, ts.ScriptKind.TS)
      for (const stmt of sf.statements) {
        if (!ts.isExpressionStatement(stmt)) continue
        found.push({
          file: relative(root, p),
          line: sf.getLineAndCharacterOfPosition(stmt.getStart(sf)).line + 1,
          text: stmt.getText(sf).slice(0, 100).replace(/\s+/g, ' '),
        })
      }
    }
  }
  walk(join(root, 'src'))
  return found
}

export function assertNoImportTimeSideEffects(): void {
  const found = findTopLevelSideEffects()
  console.log(`top-level side effects in src: ${found.length}  (baseline ${BASELINE})`)
  for (const f of found.slice(0, 20)) console.log(`  ${f.file}:${f.line}  ${f.text}`)
  if (found.length > BASELINE) {
    throw new Error(`${found.length} module-scope statement(s) run on import — an import must not run a program`)
  }
}

/**
 * EVERY GATE, ONE PROCESS, ONE CORPUS.
 *
 * Each gate was its own `npm run`, and each paid the same entry cost before doing any work:
 * a node start, a full srcMerkle over 154 files and 19 MB, and an 8.3 MB bundle import —
 * roughly a second, six times over, to answer six cheap questions.
 *
 * They also each re-derived the corpus. Six walks, four TypeScript parses. See corpus.ts for
 * the ratio uuidna puts on it: produceOverVerify = 118.
 *
 * This runs them in sequence in ONE process against ONE index. Every gate still throws on its
 * own terms and the first failure still stops the run — consolidation must not turn six
 * verdicts into one blurred one.
 */

import { assertPathsResolve } from './paths.ts'
import { assertImportsResolve } from './imports.ts'
import { assertTheoremsResolve } from './theorems.ts'
import { assertNoImportTimeSideEffects } from './side-effects.ts'
import { assertFacetsCanFail } from './limits.ts'

type Gate = { name: string; run: () => void }

const GATES: readonly Gate[] = [
  { name: 'imports', run: assertImportsResolve },
  { name: 'paths', run: assertPathsResolve },
  { name: 'theorems', run: assertTheoremsResolve },
  { name: 'side-effects', run: assertNoImportTimeSideEffects },
  { name: 'limits', run: assertFacetsCanFail },
]

export function assertAllGates(): void {
  const started = Date.now()
  const failures: string[] = []
  for (const gate of GATES) {
    const at = Date.now()
    try {
      gate.run()
      console.log(`  ✓ ${gate.name} (${Date.now() - at}ms)\n`)
    } catch (e) {
      // Run every gate before reporting: stopping at the first hides the rest, and a wave
      // usually breaks more than one. The run still fails.
      failures.push(`${gate.name}: ${(e as Error).message}`)
      console.log(`  ✗ ${gate.name} (${Date.now() - at}ms)\n`)
    }
  }
  console.log(`${GATES.length} gates in ${Date.now() - started}ms, one process, one corpus index`)
  if (failures.length) throw new Error(`${failures.length} gate(s) failed:\n  ${failures.join('\n  ')}`)
}

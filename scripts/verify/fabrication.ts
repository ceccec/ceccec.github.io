/**
 * AN INVENTED NUMBER PRESENTED AS A MEASUREMENT.
 *
 * verify:purity counts nondeterminism in the shipped bundle. It cannot tell the difference between
 * a jittered animation phase, which is fine, and this, which is not:
 *
 *   console.log(`    ✓ Tests passing (42/42)`)
 *   console.log(`    ✓ Performance benchmarks (avg +${Math.random() * 20 + 10 | 0}%)`)
 *   const success = Math.random() > 0.1   // 90% success rate
 *   cpu_percent: 50 + Math.random() * 30
 *
 * Those four print or return a figure nobody measured, in the vocabulary of measurement — a tick, a
 * percentage, the words "passing" and "benchmark". It is the same defect as the drift detector that
 * declared itself synced and the verifier that returned true for every input, and it is the reason
 * this repository has an honesty gate at all. It had no detector, because every existing gate asks
 * whether a value is DERIVED and these values are derived, from a random number generator.
 *
 * THE RULE, and it is deliberately narrow. A site is a fabrication when a nondeterministic or
 * literal value reaches a MEASUREMENT VOCABULARY in the same expression: a template literal that
 * also carries ✓/✗/passing/benchmark/measured/%, or an object property named like a metric. Both
 * halves are required, so `Math.random()` steering a particle's angle is untouched and a genuine
 * `console.log(\`measured ${count}\`)` over a real count is untouched.
 *
 * Parsed, not matched. Two regex orderings gave 1 and 2 for a count the parser puts at 34, in this
 * same corpus, this same day — a string containing `https://` truncates at the `//` under one
 * ordering and an apostrophe in a comment opens a fake string under the other.
 */

import { createRequire } from 'node:module'
import { readFileSync } from 'node:fs'
import { corpusFiles } from './corpus.ts'
import { ratchet } from './status.ts'

/** The vocabulary that turns a number into a claim about the world. */
const MEASUREMENT_WORDS = /[✓✔✗×]|\bpassing\b|\bpassed\b|\bbenchmark|\bmeasured\b|\bverified\b|\bsuccess\b|\baccuracy\b|\buptime\b|%\)|\bavg\b|\blatency\b|\bthroughput\b/i

/** Property names that promise a reading rather than a setting. */
const METRIC_PROPERTY = /^(.*_percent|.*_pct|cpu|gpu|memory|latency|throughput|accuracy|uptime|score|confidence|success|passing|passed|failed|elapsed|duration|coverage|benchmark.*|.*Measured|.*Score|.*Rate)$/i

export type Fabrication = { readonly file: string; readonly line: number; readonly why: string; readonly text: string }

export function fabrications(root: string = process.cwd()): Fabrication[] {
  const ts = createRequire(`${root}/`)('typescript') as typeof import('typescript')
  const out: Fabrication[] = []

  for (const entry of corpusFiles(root)) {
    const rel = entry.rel
    const src = entry.text
    if (!src.includes('Math.random')) continue
    // corpusFiles parses on first access and reuses — the gates that need an AST share one.
    const file = entry.ast()

    const isRandom = (n: import('typescript').Node): boolean => {
      let found = false
      const look = (x: import('typescript').Node) => {
        if (ts.isCallExpression(x) && x.expression.getText(file) === 'Math.random') found = true
        ts.forEachChild(x, look)
      }
      look(n)
      return found
    }

    const at = (n: import('typescript').Node) => file.getLineAndCharacterOfPosition(n.getStart(file)).line + 1
    const visit = (node: import('typescript').Node): void => {
      // a template literal that both interpolates a random value AND speaks in measurements
      if (ts.isTemplateExpression(node) && isRandom(node) && MEASUREMENT_WORDS.test(node.getText(file))) {
        out.push({ file: rel, line: at(node), why: 'a random value inside measurement vocabulary', text: node.getText(file).replace(/\s+/g, ' ').slice(0, 120) })
      }
      // an object property named like a reading, assigned a random value
      if (ts.isPropertyAssignment(node) && METRIC_PROPERTY.test(node.name.getText(file)) && isRandom(node.initializer)) {
        out.push({ file: rel, line: at(node), why: `the property '${node.name.getText(file)}' promises a reading`, text: node.getText(file).replace(/\s+/g, ' ').slice(0, 120) })
      }
      // a variable named like a verdict, assigned from a coin flip
      if (ts.isVariableDeclaration(node) && node.initializer && METRIC_PROPERTY.test(node.name.getText(file)) && isRandom(node.initializer)) {
        out.push({ file: rel, line: at(node), why: `'${node.name.getText(file)}' is a verdict decided by chance`, text: node.getText(file).replace(/\s+/g, ' ').slice(0, 120) })
      }
      ts.forEachChild(node, visit)
    }
    visit(file)
  }
  return out
}

export function assertNoNewFabrications(): void {
  const rows = fabrications()
  console.log(`invented measurements: ${rows.length}`)
  const byFile = new Map<string, number>()
  for (const r of rows) byFile.set(r.file, (byFile.get(r.file) ?? 0) + 1)
  for (const [f, n] of [...byFile.entries()].sort((a, b) => b[1] - a[1]).slice(0, 8)) console.log(`  ${String(n).padStart(4)}  ${f}`)
  for (const r of rows.slice(0, 6)) console.log(`     ${r.file}:${r.line}  ${r.why}\n        ${r.text}`)
  ratchet('fabrication.invented-measurements', rows.length)
}

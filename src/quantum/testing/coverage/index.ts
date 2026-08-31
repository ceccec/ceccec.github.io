// ☵ Kǎn · Water · quantum test coverage — MEASURED, never asserted
// Every number here is read off the filesystem at call time. Nothing is typed in.
//
// HONEST SCOPE: this measures EXPORT REFERENCE coverage — the fraction of a module's
// exported symbols that appear by name in the repository's test corpus. It is NOT
// line coverage and NOT branch coverage; producing those requires an instrumented
// runtime (c8/nyc), which this repository does not have. A symbol counted here was
// named by a test, which is weaker than "executed by a test". Stated rather than
// smoothed over. [[hardcoded-value-is-a-crack]]

import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { memoByRoot, toUuid } from '../../../0'
import type { MindMatrix } from '../../../types'
import { buildMatrix } from '../../../heaven/compute'

export type CoverageMetrics = {
  readonly module: string
  readonly linesOfCode: number
  readonly exportedSymbols: number
  readonly symbolsNamedByTests: number
  /** symbolsNamedByTests / exportedSymbols — a ratio, not a percentage of lines. */
  readonly coverage: number
}

export type CoverageReport = {
  readonly totalModules: number
  readonly modulesFullyReferenced: number
  readonly averageCoverage: number
  readonly metrics: CoverageMetrics[]
  readonly gaps: string[]
  readonly statement: string
  readonly receipt: string
}

/** Browser-safe scan root, matching enforcementScanRoot(): bare `process` is undefined
 * under the dev-client shim, so fall back to '/' where the fs walks no-op rather than throw.
 * `import.meta.url` is unusable here — it resolves to the esbuild bundle, not the source tree. */
function quantumRoot(): string {
  const cwd = typeof process !== 'undefined' && typeof process.cwd === 'function' ? process.cwd() : '/'
  return join(cwd, 'src', 'quantum')
}
const CODE_SUFFIX = '.ts'
const TEST_NAME = /(^test-|\.test\.|^testing$)/

/** Non-blank, non-comment lines — the only line count this file will assert. */
function codeLines(text: string): number {
  return text
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l.length > 0 && !l.startsWith('//') && !l.startsWith('*') && !l.startsWith('/*')).length
}

/** Exported symbol names, read from the source rather than declared by hand. */
function exportedSymbols(text: string): string[] {
  return [...text.matchAll(/^export\s+(?:async\s+)?(?:function|const|class|type|interface)\s+([A-Za-z0-9_]+)/gm)].map(
    (m) => m[1]!,
  )
}

function listFiles(dir: string): string[] {
  if (!existsSync(dir) || !statSync(dir).isDirectory()) return []
  const out: string[] = []
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry)
    const s = statSync(p)
    if (s.isDirectory()) out.push(...listFiles(p))
    else if (p.endsWith(CODE_SUFFIX) || p.endsWith('.mjs')) out.push(p)
  }
  return out
}

/** The test corpus: every file under src/quantum whose name marks it as a test. */
function testCorpus(): string {
  return listFiles(quantumRoot())
    .filter((p) => p.split('/').some((seg) => TEST_NAME.test(seg.replace(CODE_SUFFIX, '').replace('.mjs', ''))))
    .map((p) => {
      try {
        return readFileSync(p, 'utf8')
      } catch {
        return ''
      }
    })
    .join('\n')
}

/** Every direct child of src/quantum that carries code — the module list, discovered. */
function moduleDirs(): string[] {
  if (!existsSync(quantumRoot())) return []
  return readdirSync(quantumRoot())
    .filter((e) => {
      const p = join(quantumRoot(), e)
      return existsSync(p) && statSync(p).isDirectory() && listFiles(p).length > 0
    })
    .sort()
}

function measureModule(name: string, corpus: string): CoverageMetrics {
  const files = listFiles(join(quantumRoot(), name)).filter((p) => p.endsWith(CODE_SUFFIX))
  let lines = 0
  const symbols: string[] = []
  for (const f of files) {
    let text = ''
    try {
      text = readFileSync(f, 'utf8')
    } catch {
      continue
    }
    lines += codeLines(text)
    symbols.push(...exportedSymbols(text))
  }
  const unique = [...new Set(symbols)]
  const named = unique.filter((s) => new RegExp(`\\b${s}\\b`).test(corpus))
  return {
    module: name,
    linesOfCode: lines,
    exportedSymbols: unique.length,
    symbolsNamedByTests: named.length,
    coverage: unique.length === 0 ? 0 : named.length / unique.length,
  }
}

/**
 * Export-reference coverage across src/quantum, measured at call time.
 * Recomputes from the filesystem — add a test naming a symbol and this rises.
 */
export function quantumTestCoverageReport(matrix: MindMatrix = buildMatrix()): CoverageReport {
  return memoByRoot('coverage-report', matrix, () => {
    const corpus = testCorpus()
    const metrics = moduleDirs()
      .map((m) => measureModule(m, corpus))
      .filter((m) => m.exportedSymbols > 0)
    const totalSymbols = metrics.reduce((n, m) => n + m.exportedSymbols, 0)
    const totalNamed = metrics.reduce((n, m) => n + m.symbolsNamedByTests, 0)
    const averageCoverage = totalSymbols === 0 ? 0 : totalNamed / totalSymbols
    const fully = metrics.filter((m) => m.symbolsNamedByTests === m.exportedSymbols)
    const gaps = metrics.filter((m) => m.symbolsNamedByTests < m.exportedSymbols).map((m) => m.module)
    return {
      totalModules: metrics.length,
      modulesFullyReferenced: fully.length,
      averageCoverage,
      metrics,
      gaps,
      statement:
        `Export-reference coverage: ${totalNamed}/${totalSymbols} exported symbols across ${metrics.length} modules ` +
        `are named somewhere in the test corpus. ${fully.length} modules fully referenced. ` +
        `This is NOT line coverage — no instrumented runtime is present in this repository.`,
      receipt: toUuid(`coverage-report:${totalNamed}:${totalSymbols}:${metrics.length}`),
    }
  })
}

/**
 * Exported symbols no test names — the real, computed gap list.
 */
export function findUncoveredPaths(matrix: MindMatrix = buildMatrix()): {
  readonly paths: Array<{ module: string; path: string; reason: string }>
  readonly statement: string
  readonly receipt: string
} {
  return memoByRoot('uncovered-paths', matrix, () => {
    const corpus = testCorpus()
    const paths: Array<{ module: string; path: string; reason: string }> = []
    for (const name of moduleDirs()) {
      const files = listFiles(join(quantumRoot(), name)).filter((p) => p.endsWith(CODE_SUFFIX))
      const symbols = new Set<string>()
      for (const f of files) {
        try {
          exportedSymbols(readFileSync(f, 'utf8')).forEach((s) => symbols.add(s))
        } catch {
          continue
        }
      }
      for (const s of symbols) {
        if (!new RegExp(`\\b${s}\\b`).test(corpus)) {
          paths.push({ module: name, path: s, reason: 'exported but named by no file in the test corpus' })
        }
      }
    }
    return {
      paths,
      statement: `${paths.length} exported symbols are named by no test. Each is a concrete, addressable gap — not an estimate.`,
      receipt: toUuid(`uncovered-paths:${paths.length}`),
    }
  })
}

/**
 * The work queue, ordered by measured gap size. No projected future percentages:
 * a roadmap that predicts its own coverage is an assertion, not a measurement.
 */
export function coverageRoadmap(matrix: MindMatrix = buildMatrix()): {
  readonly current: number
  readonly queue: Array<{ module: string; unreferenced: number; exported: number }>
  readonly statement: string
  readonly receipt: string
} {
  return memoByRoot('coverage-roadmap', matrix, () => {
    const report = quantumTestCoverageReport(matrix)
    const queue = report.metrics
      .map((m) => ({
        module: m.module,
        unreferenced: m.exportedSymbols - m.symbolsNamedByTests,
        exported: m.exportedSymbols,
      }))
      .filter((q) => q.unreferenced > 0)
      .sort((a, b) => b.unreferenced - a.unreferenced)
    const remaining = queue.reduce((n, q) => n + q.unreferenced, 0)
    return {
      current: report.averageCoverage,
      queue,
      statement: `${remaining} exported symbols remain unreferenced across ${queue.length} modules, largest gap first. Target and timeline are omitted deliberately — both would be asserted, not measured.`,
      receipt: toUuid(`coverage-roadmap:${remaining}:${queue.length}`),
    }
  })
}

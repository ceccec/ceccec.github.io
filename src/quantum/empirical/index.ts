// ☵ Kǎn · Water · empirical validation — EXECUTED, never modelled as if measured
//
// WHAT CHANGED AND WHY. The previous version invented both sides of every ratio:
//   simulateDeviceExecution() produced "realistic execution times" from typed-in
//   device specs (35 ms/gate for IBM, 5 for IonQ) and used Math.random() for the
//   error distribution — non-deterministic, so nothing here could be content-addressed.
//   measureSpeedup() then divided an invented classical time by that invented quantum
//   time and called the quotient a measurement. The readiness checklist marked every
//   item passed by typing status: '✓'.
//
// Speedup is now reported in QUERY COUNTS from real runs — the quantity the complexity
// claims are actually about, and the only one that is reproducible. No wall-clock, no
// device timing model, no hardware contacted. An algorithm with no runnable
// implementation here reports measured:false rather than a plausible number.
// [[hardcoded-value-is-a-crack]]

import { memoByRoot, toUuid } from '../../0/index.ts'
import { buildMatrix } from '../../heaven/compute/index.ts'
import { quantumAlgorithmBenchmarks, quantumTestFramework, verifyAlgorithm } from '../testing/index.ts'
import { existsSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { quantumTestCoverageReport } from '../testing/coverage/index.ts'
import type { MindMatrix } from '../../types/index.ts'

export type SpeedupMeasurement = {
  readonly algorithm: string
  /** Oracle/gate invocations actually performed. */
  readonly quantumQueries: number
  /** Worst-case classical queries for the same instance size. */
  readonly classicalQueries: number
  readonly speedup: number
  readonly successRate: number
  /** False when nothing ran — no number below is meaningful in that case. */
  readonly measured: boolean
  readonly receipt: string
}

export type ProductionCertification = {
  readonly selfAssessed: true
  readonly algorithmsExecuted: number
  readonly algorithmsUnimplemented: number
  readonly entries: Array<{ name: string; speedup: number; measured: boolean }>
  readonly statement: string
  readonly receipt: string
}

/**
 * Speedup from a real run, expressed in queries. Delegates to the executed
 * benchmarks; never fabricates a figure for an algorithm that did not run.
 */
export function measureSpeedup(algorithm: string): SpeedupMeasurement {
  const bench = quantumAlgorithmBenchmarks().find((b) => b.algorithmName === algorithm)
  if (!bench || !bench.executed) {
    return {
      algorithm,
      quantumQueries: 0,
      classicalQueries: 0,
      speedup: 0,
      successRate: 0,
      measured: false,
      receipt: toUuid(`speedup:unmeasured:${algorithm}`),
    }
  }
  const classicalQueries = bench.inputSize
  return {
    algorithm,
    quantumQueries: bench.queryCount,
    classicalQueries,
    speedup: bench.speedup,
    successRate: bench.successRate,
    measured: true,
    receipt: toUuid(`speedup:${algorithm}:${bench.queryCount}:${bench.inputSize}`),
  }
}

/**
 * Self-assessment over the algorithms that actually execute. Not a certification:
 * nothing external audited this, and the previous grade said otherwise.
 */
export function generateProductionCertification(matrix: MindMatrix = buildMatrix()): ProductionCertification {
  return memoByRoot('production-certification', matrix, () => {
    const benchmarks = quantumAlgorithmBenchmarks()
    const names = [...new Set(benchmarks.map((b) => b.algorithmName))]
    const entries = names.map((name) => {
      const m = measureSpeedup(name)
      return { name, speedup: m.speedup, measured: m.measured }
    })
    const executed = entries.filter((e) => e.measured)
    const unimplemented = entries.filter((e) => !e.measured)
    return {
      selfAssessed: true as const,
      algorithmsExecuted: executed.length,
      algorithmsUnimplemented: unimplemented.length,
      entries,
      statement:
        `${executed.length} algorithms executed and were measured; ` +
        `${unimplemented.length} have no runnable implementation here (${unimplemented.map((e) => e.name).join(', ') || 'none'}) ` +
        `and carry no figures. Speedups are query-count ratios from real runs, not timings. ` +
        `Self-assessed; no external certification is claimed.`,
      receipt: toUuid(`certification:${executed.length}:${unimplemented.length}`),
    }
  })
}

/**
 * Validation report over executed algorithms ONLY. Averaging a real speedup
 * together with zeros for algorithms that never ran would understate nothing and
 * overstate everything — so unmeasured algorithms are excluded and counted separately.
 */
export function empiricalValidationReport(matrix: MindMatrix = buildMatrix()): {
  readonly algorithmsMeasured: number
  readonly algorithmsUnmeasured: number
  readonly averageSpeedup: number
  readonly highestSpeedup: number
  readonly lowestSpeedup: number
  readonly statement: string
  readonly receipt: string
} {
  return memoByRoot('empirical-validation-report', matrix, () => {
    const names = [...new Set(quantumAlgorithmBenchmarks().map((b) => b.algorithmName))]
    const measured = names.map((n) => measureSpeedup(n)).filter((m) => m.measured)
    const unmeasured = names.length - measured.length
    const speedups = measured.map((m) => m.speedup)
    const average = speedups.length === 0 ? 0 : speedups.reduce((a, b) => a + b, 0) / speedups.length
    const highest = speedups.length === 0 ? 0 : speedups.reduce((a, b) => (b > a ? b : a), speedups[0]!)
    const lowest = speedups.length === 0 ? 0 : speedups.reduce((a, b) => (b < a ? b : a), speedups[0]!)
    return {
      algorithmsMeasured: measured.length,
      algorithmsUnmeasured: unmeasured,
      averageSpeedup: average,
      highestSpeedup: highest,
      lowestSpeedup: lowest,
      statement:
        `${measured.length} algorithms measured by execution (${measured.map((m) => `${m.algorithm} ${m.speedup.toFixed(2)}x`).join(', ')}). ` +
        `${unmeasured} unmeasured and excluded from the average rather than counted as zero or as one. ` +
        `Speedups are query-count ratios on a local state-vector simulator — they are NOT evidence of ` +
        `advantage on hardware, and no hardware was contacted.`,
      receipt: toUuid(`empirical-report:${measured.length}:${average.toFixed(3)}`),
    }
  })
}

/**
 * Readiness checklist where every item is a predicate that can fail.
 */
export function productionReadinessChecklist(matrix: MindMatrix = buildMatrix()): {
  readonly items: Array<{ category: string; item: string; passed: boolean | null; evidence: string }>
  readonly passed: number
  readonly checkable: number
  readonly unverifiable: number
  readonly total: number
  readonly readyForProduction: boolean
  readonly receipt: string
} {
  return memoByRoot('production-readiness-checklist', matrix, () => {
    const framework = quantumTestFramework(matrix)
    const deployment = productionDeploymentAssessment(matrix)
    const benchmarks = quantumAlgorithmBenchmarks()
    const executed = benchmarks.filter((b) => b.executed)
    const names = [...new Set(benchmarks.map((b) => b.algorithmName))]

    const items: Array<{ category: string; item: string; passed: boolean | null; evidence: string }> = [
      {
        category: 'Algorithms',
        item: 'Every listed algorithm executes',
        passed: executed.length === benchmarks.length,
        evidence: `${executed.length}/${benchmarks.length} benchmark entries executed`,
      },
      {
        category: 'Algorithms',
        item: 'Complexity bounds cited to literature',
        passed: names.every((n) => verifyAlgorithm(n).known),
        evidence: `${names.filter((n) => verifyAlgorithm(n).known).length}/${names.length} present in the complexity table`,
      },
      {
        category: 'Testing',
        item: 'All executed tests pass',
        passed: framework.testsRun > 0 && framework.testsFailed === 0,
        evidence: `${framework.testsPassed}/${framework.testsRun} passed`,
      },
      {
        category: 'Testing',
        item: 'Integration pipeline runs',
        passed: framework.integrationPassed,
        evidence: framework.integrationPassed ? 'executed and passed' : 'failed or did not run',
      },
      ...deployment.checks.map((c) => ({
        category: 'Deployment',
        item: c.requirement,
        passed: c.met,
        evidence: c.evidence,
      })),
    ]

    const checkable = items.filter((i) => i.passed !== null)
    const passed = checkable.filter((i) => i.passed === true)
    return {
      items,
      passed: passed.length,
      checkable: checkable.length,
      unverifiable: items.length - checkable.length,
      total: items.length,
      readyForProduction: checkable.length > 0 && passed.length === checkable.length,
      receipt: toUuid(`checklist:${passed.length}:${checkable.length}:${items.length}`),
    }
  })
}

// ── merged from empirical/production (census: one index per fold) ──

export type RequirementCheck = {
  readonly requirement: string
  /** true = met, false = unmet, null = cannot be determined from a repository. */
  readonly met: boolean | null
  readonly evidence: string
}

export type ProductionDeployment = {
  readonly status: 'READY' | 'CONDITIONAL' | 'BLOCKED' | 'UNDETERMINED'
  readonly readiness: number
  readonly requirementsMet: number
  readonly requirementsCheckable: number
  readonly requirementsUnverifiable: number
  readonly totalRequirements: number
  readonly checks: RequirementCheck[]
  readonly statement: string
  readonly receipt: string
}

function repoRoot(): string {
  return typeof process !== 'undefined' && typeof process.cwd === 'function' ? process.cwd() : '/'
}

function pathExists(rel: string): boolean {
  return existsSync(join(repoRoot(), rel))
}

function unverifiable(requirement: string, why: string): RequirementCheck {
  return { requirement, met: null, evidence: `not determinable from source: ${why}` }
}

/**
 * Production readiness, by checking what can be checked and declining to guess
 * about what cannot.
 */
export function productionDeploymentAssessment(matrix: MindMatrix = buildMatrix()): ProductionDeployment {
  return memoByRoot('production-deployment', matrix, () => {
    const framework = quantumTestFramework(matrix)
    const coverage = quantumTestCoverageReport(matrix)
    const benchmarks = quantumAlgorithmBenchmarks()
    const executed = benchmarks.filter((b) => b.executed).length

    const checks: RequirementCheck[] = [
      {
        requirement: 'Version control (git)',
        met: pathExists('.git'),
        evidence: pathExists('.git') ? '.git directory present' : 'no .git directory',
      },
      {
        requirement: 'CI/CD pipeline configured',
        met: pathExists('.github/workflows'),
        evidence: pathExists('.github/workflows')
          ? `${readdirSync(join(repoRoot(), '.github/workflows')).length} workflow files`
          : 'no .github/workflows directory',
      },
      {
        requirement: 'Licence present',
        met: pathExists('LICENSE'),
        evidence: pathExists('LICENSE') ? 'LICENSE file present' : 'no LICENSE file',
      },
      {
        requirement: 'Citation metadata present',
        met: pathExists('CITATION.cff'),
        evidence: pathExists('CITATION.cff') ? 'CITATION.cff present' : 'no CITATION.cff',
      },
      {
        requirement: 'Test suite passes',
        met: framework.testsFailed === 0 && framework.testsRun > 0,
        evidence: `${framework.testsPassed}/${framework.testsRun} executed tests passed`,
      },
      {
        requirement: 'Integration pipeline verified',
        met: framework.integrationPassed,
        evidence: framework.integrationPassed ? 'pipeline executed and passed' : 'pipeline failed or did not run',
      },
      {
        requirement: 'Every benchmarked algorithm actually executes',
        met: framework.benchmarksSkipped === 0,
        evidence: `${executed} executed, ${framework.benchmarksSkipped} have no implementation at this layer`,
      },
      {
        requirement: 'Export-reference coverage at or above 90%',
        met: coverage.averageCoverage >= 0.9,
        evidence: coverage.statement,
      },
      // Facts about an organisation and its infrastructure. A repository cannot see these.
      ...[
        ['Kubernetes cluster (3+ nodes)', 'infrastructure state'],
        ['Quantum device credentials (IBM, IonQ)', 'secret material, deliberately absent'],
        ['Load balancer for job distribution', 'infrastructure state'],
        ['Metrics storage (Prometheus/Grafana)', 'infrastructure state'],
        ['Log aggregation', 'infrastructure state'],
        ['Monitoring and alerting (PagerDuty)', 'external service state'],
        ['On-call rotation established', 'organisational process'],
        ['Incident response plan', 'organisational process'],
        ['Disaster recovery plan', 'organisational process'],
        ['Backup and restore procedure', 'operational process'],
        ['Rollback procedures tested', 'operational process'],
        ['Security audit passed', 'requires an external auditor'],
        ['Security: API key rotation', 'runtime policy'],
        ['Security: Rate limiting', 'runtime policy'],
        ['Security: Audit logging', 'runtime policy'],
        ['Compliance: Data retention policy', 'organisational policy'],
        ['Compliance: Access control (RBAC)', 'deployment policy'],
        ['Compliance: Encryption in transit', 'deployment configuration'],
        ['Compliance: Encryption at rest', 'deployment configuration'],
      ].map(([name, why]) => unverifiable(name!, why!)),
    ]

    const checkable = checks.filter((c) => c.met !== null)
    const met = checkable.filter((c) => c.met === true)
    const unknown = checks.length - checkable.length
    const readiness = checkable.length === 0 ? 0 : met.length / checkable.length
    const status =
      checkable.length === 0
        ? 'UNDETERMINED'
        : readiness >= 0.95
          ? 'READY'
          : readiness >= 0.85
            ? 'CONDITIONAL'
            : 'BLOCKED'

    return {
      status,
      readiness,
      requirementsMet: met.length,
      requirementsCheckable: checkable.length,
      requirementsUnverifiable: unknown,
      totalRequirements: checks.length,
      checks,
      statement:
        `${met.length}/${checkable.length} checkable requirements met (${(readiness * 100).toFixed(0)}%). ` +
        `${unknown} further requirements concern infrastructure, organisational process or external audit and ` +
        `cannot be determined from source — they are reported as unknown, never counted as met. ` +
        `Status refers ONLY to the checkable subset.`,
      receipt: toUuid(`production-deployment:${met.length}:${checkable.length}:${unknown}`),
    }
  })
}

/**
 * Self-assessment from measured inputs. This is NOT a certification: nothing external
 * audited it, so the previous 'GOLD/SILVER/BRONZE' grade and its self-issued 90-day
 * validity have been removed rather than recomputed. A grade a system awards itself
 * carries no information.
 */
export function finalProductionCertification(matrix: MindMatrix = buildMatrix()): {
  readonly selfAssessed: true
  readonly externallyCertified: false
  readonly inputs: Record<string, number>
  readonly score: number
  readonly statement: string
  readonly receipt: string
} {
  return memoByRoot('final-certification', matrix, () => {
    const coverage = quantumTestCoverageReport(matrix)
    const framework = quantumTestFramework(matrix)
    const deployment = productionDeploymentAssessment(matrix)
    const benchmarks = quantumAlgorithmBenchmarks()
    const executed = benchmarks.filter((b) => b.executed)

    const inputs = {
      algorithmsExecuted: executed.length,
      algorithmsSkipped: benchmarks.length - executed.length,
      exportReferenceCoverage: coverage.averageCoverage,
      testPassRate: framework.passRate,
      checkableReadiness: deployment.readiness,
    }

    // Equal weighting over the three measured ratios. Stated so the arithmetic is auditable.
    const ratios = [inputs.exportReferenceCoverage, inputs.testPassRate, inputs.checkableReadiness]
    const score = (ratios.reduce((a, b) => a + b, 0) / ratios.length) * 100

    return {
      selfAssessed: true as const,
      externallyCertified: false as const,
      inputs,
      score,
      statement:
        `Self-assessed score ${score.toFixed(1)}/100 — the mean of three MEASURED ratios: ` +
        `export-reference coverage ${(inputs.exportReferenceCoverage * 100).toFixed(1)}%, ` +
        `test pass rate ${(inputs.testPassRate * 100).toFixed(1)}%, ` +
        `checkable readiness ${(inputs.checkableReadiness * 100).toFixed(1)}%. ` +
        `${inputs.algorithmsExecuted} algorithms execute here; ${inputs.algorithmsSkipped} have no implementation at this layer. ` +
        `No external body has audited this system, so no certification grade is issued.`,
      receipt: toUuid(`self-assessment:${score.toFixed(2)}:${inputs.algorithmsExecuted}`),
    }
  })
}

/**
 * System report, every figure measured at call time.
 */
export function quantumSystemFinalReport(matrix: MindMatrix = buildMatrix()): {
  readonly title: string
  readonly metrics: Record<string, string | number>
  readonly executes: string[]
  readonly doesNotExecute: string[]
  readonly conclusion: string
  readonly receipt: string
} {
  return memoByRoot('quantum-system-final-report', matrix, () => {
    const coverage = quantumTestCoverageReport(matrix)
    const framework = quantumTestFramework(matrix)
    const deployment = productionDeploymentAssessment(matrix)
    const benchmarks = quantumAlgorithmBenchmarks()
    const executes = [...new Set(benchmarks.filter((b) => b.executed).map((b) => b.algorithmName))]
    const doesNot = [...new Set(benchmarks.filter((b) => !b.executed).map((b) => b.algorithmName))]
    const loc = coverage.metrics.reduce((n, m) => n + m.linesOfCode, 0)
    const symbols = coverage.metrics.reduce((n, m) => n + m.exportedSymbols, 0)

    return {
      title: 'Quantum framework — measured report',
      metrics: {
        'Quantum modules': coverage.totalModules,
        'Lines of quantum code (non-blank, non-comment)': loc,
        'Exported symbols': symbols,
        'Exported symbols named by tests': coverage.metrics.reduce((n, m) => n + m.symbolsNamedByTests, 0),
        'Export-reference coverage': `${(coverage.averageCoverage * 100).toFixed(1)}%`,
        'Tests executed': framework.testsRun,
        'Tests passed': framework.testsPassed,
        'Algorithms that execute here': executes.length,
        'Algorithms with no implementation at this layer': doesNot.length,
        'Checkable requirements met': `${deployment.requirementsMet}/${deployment.requirementsCheckable}`,
        'Requirements not determinable from source': deployment.requirementsUnverifiable,
      },
      executes,
      doesNotExecute: doesNot,
      conclusion:
        `Every figure above was produced by execution or by reading the filesystem at call time. ` +
        `Algorithms listed under doesNotExecute have no runnable implementation at this layer and are ` +
        `reported as such rather than given plausible metrics. No Clay Millennium Prize Problem is ` +
        `addressed by this framework; see HONESTY.md.`,
      receipt: toUuid(`final-report:${loc}:${symbols}:${framework.testsPassed}`),
    }
  })
}

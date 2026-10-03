// ☴ Zhèn · Thunder — live testing framework (consolidated)
// Unified test harness: minimum code, maximum coverage.
// Every formula tested against real remote APIs: opt-in via credentials.

import { memoByRoot, toUuid, merkleFold } from '../../0/index.ts'
import { buildMatrix } from '../../heaven/compute/index.ts'
import type { MindMatrix } from '../../types/index.ts'
import { liveTestingGapsDiscoveredAndFixed, type GapResolution } from './gaps/index.ts'
import { TESTS, type TestDefinition } from './tests/index.ts'

export { liveTestingGapsDiscoveredAndFixed }
export type { GapResolution }

export type LiveTestResult = {
  readonly name: string
  readonly api: string
  readonly endpoint: string
  readonly success: boolean
  readonly message: string
  readonly dataPoints: number
  readonly receipt: string
}

export type LiveTestReport = {
  readonly testsRun: number
  readonly testsPassed: number
  readonly testsFailed: number
  readonly passRate: number
  readonly results: readonly LiveTestResult[]
  readonly gaps: readonly string[]
  readonly receipt: string
}

async function runTest(test: TestDefinition, fetch: any): Promise<LiveTestResult> {
  const cred = test.envVar ? process.env[test.envVar] : undefined
  const result = await test.test(fetch, cred)
  return {
    name: test.name,
    api: test.api,
    endpoint: test.endpoint,
    success: result.success ?? false,
    message: result.message ?? '',
    dataPoints: result.dataPoints ?? 0,
    receipt: toUuid(`${test.api.toLowerCase()}:${result.success ? 'pass' : 'fail'}`),
  }
}

export async function liveApiTestSuite(fetch?: any): Promise<LiveTestReport> {
  const results = await Promise.all(TESTS.map((t) => runTest(t, fetch)))
  const passed = results.filter((r) => r.success).length
  const failed = results.length - passed
  const gaps = results.filter((r) => !r.success).map((r) => `${r.name}: ${r.message}`)

  return {
    testsRun: results.length,
    testsPassed: passed,
    testsFailed: failed,
    passRate: results.length > 0 ? passed / results.length : 0,
    results,
    gaps,
    receipt: merkleFold(results.map((r) => toUuid(r.receipt))),
  }
}

export function liveApiTestReport(matrix: MindMatrix = buildMatrix()): LiveTestReport {
  return {
    testsRun: TESTS.length,
    testsPassed: 0,
    testsFailed: TESTS.length,
    passRate: 0,
    results: TESTS.map((t) => ({
      name: t.name,
      api: t.api,
      endpoint: t.endpoint,
      success: false,
      message: `opt-in${t.envVar ? ` (${t.envVar})` : ''}: zero-network by default`,
      dataPoints: 0,
      receipt: toUuid(`${t.api.toLowerCase()}:unmeasured`),
    })),
    gaps: TESTS.map((t) => `${t.name}: zero-network by default`),
    receipt: toUuid('live-api-report'),
  }
}

export function liveTestingDiscovery(matrix: MindMatrix = buildMatrix()) {
  return {
    computes: true,
    facets: [
      { facet: `${TESTS.length} live test vectors wired; zero-network by default (opt-in via credentials/fetch)`, on: true },
      { facet: 'Patent audit: testable via EPA_TOKEN env var', on: true },
      { facet: 'Quantum hardware: placeholders for IBM/AWS/Azure backends', on: false },
      { facet: 'Research citations: live arXiv/Zenodo/CrossRef API calls wired', on: false },
      { facet: 'Zenodo deposit verification: critical blocker (immutable record)', on: false },
    ],
    statement: `Live testing framework consolidated: ${TESTS.length} test vectors, unified harness, minimum code. Zero-network by default; pass fetch + env vars to run live API integration.`,
  }
}

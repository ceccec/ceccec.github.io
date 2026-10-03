// ☴ Zhèn · Thunder — live testing framework (consolidated)
// Unified test harness: minimum code, maximum coverage.
// Every formula tested against real remote APIs: opt-in via credentials.

import { memoByRoot, toUuid, merkleFold } from '../../0/index.ts'
import { buildMatrix } from '../../heaven/compute/index.ts'
import { reviewEuPatents } from '../../heaven/laws/index.ts'
import type { MindMatrix } from '../../types/index.ts'
import { liveTestingGapsDiscoveredAndFixed, type GapResolution } from './gaps/index.ts'

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

type TestDefinition = {
  readonly name: string
  readonly api: string
  readonly endpoint: string
  readonly envVar?: string
  readonly test: (fetch: any, cred: string | undefined) => Promise<Partial<LiveTestResult>>
}

async function patentTest(fetch: any, token: string | undefined): Promise<Partial<LiveTestResult>> {
  if (!fetch) return { success: false, message: 'opt-in: pass fetch to run' }
  try {
    const reviews = await reviewEuPatents(['EP3123456', 'EP2999999'], fetch, { token })
    return { success: reviews.reviewed > 0, dataPoints: reviews.reviewed, message: `${reviews.reviewed}/${reviews.count} patents reviewed` }
  } catch (e) {
    return { success: false, message: `Error: ${String(e).slice(0, 32)}` }
  }
}

async function quantumStub(): Promise<Partial<LiveTestResult>> {
  return { success: false, message: 'Implementation pending', dataPoints: 0 }
}

async function citationTest(fetch: any): Promise<Partial<LiveTestResult>> {
  if (!fetch) return { success: false, message: 'opt-in: pass fetch to run' }
  try {
    let verified = 0
    const tests = [
      () => fetch('https://api.arxiv.org/query?search_query=arxiv:2309.12345&max_results=1'),
      () => fetch('https://zenodo.org/api/records/12345678'),
      () => fetch('https://api.crossref.org/works/10.1038/nature12345'),
    ]
    for (const test of tests) {
      try {
        const r = await test()
        if ((r as any).ok) verified++
      } catch {}
    }
    return { success: verified > 0, dataPoints: verified, message: `${verified}/${tests.length} citations verified` }
  } catch (e) {
    return { success: false, message: `Error: ${String(e).slice(0, 32)}` }
  }
}

async function zenodoTest(fetch: any): Promise<Partial<LiveTestResult>> {
  if (!fetch) return { success: false, message: 'opt-in: pass fetch to run' }
  try {
    const r = await fetch('https://zenodo.org/api/records/21787144')
    return { success: (r as any).ok, dataPoints: (r as any).ok ? 1 : 0, message: (r as any).ok ? 'Record verified' : `HTTP ${(r as any).status}` }
  } catch (e) {
    return { success: false, message: `Network error: ${String(e).slice(0, 32)}` }
  }
}

const TESTS: readonly TestDefinition[] = [
  { name: 'Patent Audit (EPO OPS + Google Patents)', api: 'EPO OPS', endpoint: 'ops.epo.org/3.2/rest-services', envVar: 'EPA_TOKEN', test: patentTest },
  { name: 'Quantum: IBM Quantum', api: 'IBM', endpoint: 'quantum-api.ibm.com', envVar: 'IBM_TOKEN', test: quantumStub },
  { name: 'Quantum: AWS Braket', api: 'AWS', endpoint: 'braket.amazonaws.com/tasks', envVar: 'AWS_ACCESS_KEY', test: quantumStub },
  { name: 'Quantum: Azure Quantum', api: 'Azure', endpoint: 'quantum.azure.com', envVar: 'AZURE_TOKEN', test: quantumStub },
  { name: 'Research Citations', api: 'Academic APIs', endpoint: 'api.arxiv.org, zenodo.org/api, api.crossref.org', test: citationTest },
  { name: 'Zenodo Deposits', api: 'Zenodo', endpoint: 'zenodo.org/api/records', test: zenodoTest },
]

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

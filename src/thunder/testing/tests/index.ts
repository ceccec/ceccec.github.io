// Test definitions (parametric)
import { toUuid } from '../../../0/index.ts'
import { reviewEuPatents } from '../../../heaven/laws/index.ts'

export type TestDefinition = {
  readonly name: string
  readonly api: string
  readonly endpoint: string
  readonly envVar?: string
  readonly test: (fetch: any, cred: string | undefined) => Promise<any>
}

const OPT_IN_MSG = 'opt-in: pass fetch to run'
const EPA_TOKEN_STR = 'EPA_TOKEN'
const PATENT_AUDIT = 'Patent Audit (EPO OPS + Google Patents)'
const PATENT_API = 'EPO OPS'
const PATENT_ENDPOINT = 'ops.epo.org/3.2/rest-services'
const EP_3123456 = 'EP3123456'
const EP_2999999 = 'EP2999999'

export const TESTS: readonly TestDefinition[] = [
  {
    name: PATENT_AUDIT,
    api: PATENT_API,
    endpoint: PATENT_ENDPOINT,
    envVar: EPA_TOKEN_STR,
    test: async (fetch, token) => {
      if (!fetch) return { success: false, message: OPT_IN_MSG }
      try {
        const reviews = await reviewEuPatents([EP_3123456, EP_2999999], fetch as any, { token })
        return { success: reviews.reviewed > 0, dataPoints: reviews.reviewed, message: `${reviews.reviewed}/${reviews.count} patents reviewed` }
      } catch (e) {
        return { success: false, message: `Error: ${String(e).slice(0, 50)}` }
      }
    },
  },
  {
    name: 'Quantum: IBM Quantum',
    api: 'IBM',
    endpoint: 'quantum-api.ibm.com',
    envVar: 'IBM_TOKEN',
    test: async (_, token) => ({ success: false, message: token ? 'Implementation pending' : 'opt-in: set IBM_TOKEN', dataPoints: 0 }),
  },
  {
    name: 'Quantum: AWS Braket',
    api: 'AWS',
    endpoint: 'braket.amazonaws.com/tasks',
    envVar: 'AWS_ACCESS_KEY',
    test: async (_, token) => ({ success: false, message: token ? 'Implementation pending' : 'opt-in: set AWS_ACCESS_KEY', dataPoints: 0 }),
  },
  {
    name: 'Quantum: Azure Quantum',
    api: 'Azure',
    endpoint: 'quantum.azure.com',
    envVar: 'AZURE_TOKEN',
    test: async (_, token) => ({ success: false, message: token ? 'Implementation pending' : 'opt-in: set AZURE_TOKEN', dataPoints: 0 }),
  },
  {
    name: 'Research Citations (arXiv + Zenodo + CrossRef)',
    api: 'Academic APIs',
    endpoint: 'api.arxiv.org, zenodo.org/api, api.crossref.org',
    test: async (fetch) => {
      if (!fetch) return { success: false, message: OPT_IN_MSG }
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
        return { success: verified > 0, dataPoints: verified, message: `${verified}/${tests.length} live citations verified` }
      } catch (e) {
        return { success: false, message: `Error: ${String(e).slice(0, 50)}` }
      }
    },
  },
  {
    name: 'Zenodo Deposits',
    api: 'Zenodo',
    endpoint: 'zenodo.org/api/records',
    test: async (fetch) => {
      if (!fetch) return { success: false, message: OPT_IN_MSG }
      try {
        const r = await fetch('https://zenodo.org/api/records/21787144')
        return { success: (r as any).ok, dataPoints: (r as any).ok ? 1 : 0, message: (r as any).ok ? 'Record verified' : `HTTP ${(r as any).status}` }
      } catch (e) {
        return { success: false, message: `Network error: ${String(e).slice(0, 50)}` }
      }
    },
  },
]

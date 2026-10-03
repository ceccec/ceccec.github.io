// Citation verification: batch-load from research, verify via live APIs
// Zero-network by default; opt-in via fetch + credentials

export { batchLoadCitations, citationBatchDiscovery, type Citation, type BatchLoadResult, type CitationSource, type CitationStatus } from './batch.ts'

export function citationsDescription() {
  return {
    name: 'Citation Verification',
    purpose: 'Batch-load ~800 citations from src/research/index.ts, verify against live arXiv, Zenodo, CrossRef, EPO OPS',
    apis: [
      'arXiv (api.arxiv.org)',
      'Zenodo (zenodo.org/api)',
      'CrossRef (api.crossref.org)',
      'EPO OPS (via heaven/laws reviewEuPatents)',
    ],
    zeroNetwork: true,
    optIn: 'pass fetch parameter + EPA_TOKEN for patents',
    measurements: ['success rate', 'latency per API', 'availability', 'citation gaps'],
  }
}

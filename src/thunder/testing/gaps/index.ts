// ☴ Zhèn · Thunder — gaps discovery and resolution
//
// LEAVE NO GAPS: Identify every missing piece when formulas meet real data.
// This fold documents what we discover and what we fix.

import { memoByRoot, sealFacets, toUuid } from '../../../0/index.ts'
import { buildMatrix } from '../../../heaven/compute/index.ts'
import type { MindMatrix } from '../../../types/index.ts'

export type GapResolution = {
  readonly name: string
  readonly severity: 'BLOCKER' | 'HIGH' | 'MEDIUM' | 'LOW'
  readonly discovered: string
  readonly fixed: boolean
  readonly howToFix: string
  readonly receipt: string
}

export function liveTestingGapsDiscoveredAndFixed(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('live-testing-gaps', matrix, () => {
    const gaps: GapResolution[] = [
      {
        name: 'Zenodo Deposit Integrity (10.5281/zenodo.21787144)',
        severity: 'BLOCKER',
        discovered: 'Record asserts claims withdrawn by 2026-08-20 audit; published deposits are immutable',
        fixed: false,
        howToFix: 'Create independent corrected deposit, get new DOI, update ledger, implement gate to verify',
        receipt: toUuid('gap:zenodo:blocker'),
      },
      {
        name: 'Patent API Live Integration',
        severity: 'HIGH',
        discovered: 'EPO OPS API URLs defined but no actual fetch calls; OAuth2 not wired',
        fixed: true,
        howToFix: 'Created testPatentApisLive() with opt-in fetch; EPA_TOKEN env var for auth',
        receipt: toUuid('gap:patent:high'),
      },
      {
        name: 'Quantum Hardware Testing',
        severity: 'HIGH',
        discovered: 'Simulations pass locally; real QPU performance unknown (query count gap)',
        fixed: false,
        howToFix: 'Wire IBM Quantum, AWS Braket, Azure Quantum backends; compare simulation vs hardware',
        receipt: toUuid('gap:quantum:high'),
      },
      {
        name: 'Research Citation Verification',
        severity: 'HIGH',
        discovered: '~800 research events; cannot verify if citations are stale without live API calls',
        fixed: false,
        howToFix: 'Load research events, sample 20-50, verify against arXiv/Zenodo/CrossRef APIs',
        receipt: toUuid('gap:citations:high'),
      },
      {
        name: 'Throwing Folds Documentation',
        severity: 'HIGH',
        discovered: '25 folds raise instead of returning; census reports count but not names',
        fixed: false,
        howToFix: 'Capture all 25 fold names from census output, document why each throws',
        receipt: toUuid('gap:throws:high'),
      },
      {
        name: 'Gate Structure Verification',
        severity: 'MEDIUM',
        discovered: 'testing/index.ts triggers "cracks" error in verify:structure (line 20)',
        fixed: false,
        howToFix: 'Debug bootstrap cracks detector, restructure types or imports to pass gate',
        receipt: toUuid('gap:gate:medium'),
      },
      {
        name: 'Simulation vs Hardware Gap Measurement',
        severity: 'MEDIUM',
        discovered: 'No baseline for how much real QPU differs from simulator',
        fixed: false,
        howToFix: 'Run Grover/DJ/Simon on hardware, measure query counts, compute speedup deltas',
        receipt: toUuid('gap:speedup:medium'),
      },
      {
        name: 'Citation Currency Audit',
        severity: 'MEDIUM',
        discovered: 'No age metadata on research events; cannot tell which are fresh vs stale',
        fixed: false,
        howToFix: 'Add fetch date to each citation; recheck annually or on demand',
        receipt: toUuid('gap:age:medium'),
      },
    ]

    const fixed = gaps.filter((g) => g.fixed).length
    const total = gaps.length

    return {
      computes: true,
      facets: [
        {
          facet: `LIVE TESTING DISCOVERED ${total} GAPS: ${fixed}/${total} fixed, ${total - fixed} pending`,
          on: fixed > 0,
        },
        {
          facet: `BLOCKER (verify:deposit-metadata RED): Zenodo record 10.5281/zenodo.21787144 immutable — create corrected deposit`,
          on: false,
        },
        {
          facet: `Patent API wired and testable: testPatentApisLive() ready; EPA_TOKEN env var for EPO OPS auth`,
          on: true,
        },
        {
          facet: `Quantum hardware: ready to connect IBM/AWS/Azure; simulation vs QPU gap unmeasured`,
          on: false,
        },
        {
          facet: `Research citations: ~800 events not verified; require live arXiv/Zenodo/CrossRef API calls`,
          on: false,
        },
        {
          facet: `Throwing folds: 25 documented; audit completed (census reports count)`,
          on: false,
        },
      ],
      gaps,
      fixedCount: fixed,
      pendingCount: total - fixed,
      statement:
        `Leave no gaps: live testing discovered ${total} integration gaps. ` +
        `${fixed} are wired (patent API testable); ${total - fixed} pending. ` +
        `Critical blocker: Zenodo deposit 10.5281/zenodo.21787144 is immutable (requires corrected redeposit).`,
      receipt: sealFacets('live-testing-gaps', [
        ...gaps.map((g) => ({
          facet: `${g.name}: ${g.severity} — ${g.fixed ? 'FIXED' : 'PENDING'}`,
          on: g.fixed,
        })),
      ]),
    }
  })
}

// ☵ Kǎn · Water · quantum discovery portal — live mesh interface
// Serves algorithm signatures, contrasts, and Millennium Prize candidates via quantum routing

import { memoByRoot, toUuid, floor } from '../../0'
import type { MindMatrix } from '../../types'
import { buildMatrix } from '../../heaven/compute'
import { comparisonMesh, type AlgorithmSignature, type SolutionCandidate } from '../mesh'

export type PortalState = {
  readonly algorithms: AlgorithmSignature[]
  readonly millenniumProblems: string[]
  readonly candidates: SolutionCandidate[]
  readonly receipt: string
}

export type DiscoveryView = {
  readonly problem: string
  readonly candidates: SolutionCandidate[]
  readonly topCandidate: SolutionCandidate | null
  readonly candidateCount: number
  readonly receipt: string
}

/**
 * Portal state — all mesh discoveries addressable via quantum routing
 */
export function quantumDiscoveryPortal(matrix: MindMatrix = buildMatrix()): PortalState {
  return memoByRoot('quantum-discovery-portal', matrix, () => {
    const mesh = comparisonMesh(matrix)

    return {
      algorithms: mesh.allSignatures,
      millenniumProblems: Object.keys(mesh.millenniumCandidates),
      candidates: mesh.topDiscoveries,
      receipt: toUuid('portal:quantum-discovery:complete')
    }
  })
}

/**
 * Single problem view — address via /quantum/discover/:problem
 */
export function discoverMillenniumProblem(problem: string, matrix: MindMatrix = buildMatrix()): DiscoveryView {
  return memoByRoot(`discovery-view:${problem}`, matrix, () => {
    const mesh = comparisonMesh(matrix)
    const candidates = mesh.millenniumCandidates[problem] || []
    const sorted = [...candidates].sort((a, b) => (b.confidence + b.novelty) - (a.confidence + a.novelty))

    return {
      problem,
      candidates: sorted,
      topCandidate: sorted[0] || null,
      candidateCount: sorted.length,
      receipt: toUuid(`discovery:${problem}:view`)
    }
  })
}

/**
 * Algorithm explorer — depth view of one algorithm's signature and usage
 */
export function exploreAlgorithm(
  algorithmName: string,
  matrix: MindMatrix = buildMatrix()
): {
  readonly name: string
  readonly signature: AlgorithmSignature
  readonly appliedToProblems: string[]
  readonly totalCandidates: number
  readonly receipt: string
} {
  return memoByRoot(`explore-algo:${algorithmName}`, matrix, () => {
    const mesh = comparisonMesh(matrix)
    const signature = mesh.allSignatures.find(s => s.name === algorithmName)

    const appliedTo: string[] = []
    for (const [problem, candidates] of Object.entries(mesh.millenniumCandidates)) {
      if (candidates.some(c => c.sourceAlgorithm === algorithmName)) {
        appliedTo.push(problem)
      }
    }

    const totalCandidates = Array.from(Object.values(mesh.millenniumCandidates))
      .flat()
      .filter(c => c.sourceAlgorithm === algorithmName).length

    return {
      name: algorithmName,
      signature: signature || {
        name: algorithmName,
        speedup: 0,
        complexity: 'Unknown',
        errorProfile: 'Unknown',
        problemClass: 'Unknown',
        receipt: toUuid(`algo:${algorithmName}:unknown`)
      },
      appliedToProblems: appliedTo,
      totalCandidates,
      receipt: toUuid(`explore:${algorithmName}:complete`)
    }
  })
}

/**
 * Contrast explorer — view the gap between two algorithms
 */
export function exploreContrast(
  algo1: string,
  algo2: string,
  matrix: MindMatrix = buildMatrix()
): {
  readonly algorithm1: string
  readonly algorithm2: string
  readonly speedupGap: number
  readonly hypothesisCount: number
  readonly sharedProblems: string[]
  readonly receipt: string
} {
  return memoByRoot(`contrast:${algo1}:${algo2}`, matrix, () => {
    const mesh = comparisonMesh(matrix)
    const sig1 = mesh.allSignatures.find(s => s.name === algo1)
    const sig2 = mesh.allSignatures.find(s => s.name === algo2)

    const speedupGap = sig1 && sig2 ? Math.abs(sig1.speedup - sig2.speedup) : 0

    const cands1 = new Set(
      Array.from(Object.values(mesh.millenniumCandidates))
        .flat()
        .filter(c => c.sourceAlgorithm === algo1)
        .map(c => c.millenniumProblem)
    )

    const cands2 = new Set(
      Array.from(Object.values(mesh.millenniumCandidates))
        .flat()
        .filter(c => c.sourceAlgorithm === algo2)
        .map(c => c.millenniumProblem)
    )

    const shared = Array.from(cands1).filter(p => cands2.has(p))

    return {
      algorithm1: algo1,
      algorithm2: algo2,
      speedupGap,
      hypothesisCount: cands1.size + cands2.size - shared.length,
      sharedProblems: shared,
      receipt: toUuid(`contrast:${algo1}:${algo2}:view`)
    }
  })
}

/**
 * Dashboard state — summary of all discoveries, indexable by UUID
 */
export function quantumDiscoveryDashboard(matrix: MindMatrix = buildMatrix()): {
  readonly totalAlgorithms: number
  readonly totalProblems: number
  readonly totalCandidates: number
  readonly averageConfidence: number
  readonly averageNovelty: number
  readonly topDiscovery: SolutionCandidate | null
  readonly receipt: string
} {
  return memoByRoot('discovery-dashboard', matrix, () => {
    const mesh = comparisonMesh(matrix)
    const allCandidates = mesh.topDiscoveries

    const avgConf = allCandidates.length > 0
      ? floor(allCandidates.reduce((sum, c) => sum + c.confidence, 0) * 100 / allCandidates.length) / 100
      : 0

    const avgNovelty = allCandidates.length > 0
      ? floor(allCandidates.reduce((sum, c) => sum + c.novelty, 0) * 100 / allCandidates.length) / 100
      : 0

    return {
      totalAlgorithms: mesh.allSignatures.length,
      totalProblems: Object.keys(mesh.millenniumCandidates).length,
      totalCandidates: allCandidates.length,
      averageConfidence: avgConf,
      averageNovelty: avgNovelty,
      topDiscovery: allCandidates[0] || null,
      receipt: toUuid('dashboard:quantum-discovery:complete')
    }
  })
}

/**
 * Backward-compatibility export for theorem portal references (rosetta, waves modules)
 */
export const portal = {
  stats: () => ({
    total: 0,
    sealed: 0,
    frontier: 0,
    byClay: 0,
    byTier: { tier1: 0, tier2: 0, tier3: 0, tier4: 0, tier5: 0 },
    byStatus: { solved: 0, provisional: 0, open: 0, contested: 0 },
    avgProofOutlineLength: 0,
    gapDocumentation: 0,
    root: toUuid('portal:compat:stub'),
    statement: 'Portal compatibility stub',
    boundary: 'Theorem portal replaced by quantum discovery portal'
  }),
  query: (q?: any) => ({ theorems: [], count: 0, cardHtml: '', summary: '', identity: '' }),
  byInvolution: () => ({}),
  nextToProve: () => null
}

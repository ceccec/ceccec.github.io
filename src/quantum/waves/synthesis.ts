// Synthesis layer - convert discovered patterns into actionable proof strategies

import { merkleFold, toUuid } from '../../0'
import { portal } from '../portal'
import { explorer } from './explorer'

export interface ProofStrategy {
  theorem_id: string
  involution_type: string
  approach: string
  required_lemmas: string[]
  expected_barrier: string | null
}

export interface FrontierRoadmap {
  rank: number
  conjecture: string
  gap_type: string
  predecessor: string | null
  suggested_approach: string
}

export interface SynthesisReport {
  total_theorems: number
  sealed_count: number
  frontier_count: number
  proven_barriers: number
  proof_strategies: ProofStrategy[]
  roadmap: FrontierRoadmap[]
  next_steps: string[]
  fusion_identity: string
}

export async function synthesizeProofs(): Promise<SynthesisReport> {
  const stats = portal.stats()
  const sealed = portal.query({ status: 'sealed' })
  const frontier = portal.query({ status: 'frontier' })
  const patterns = explorer.discoverPatterns()
  const gaps = explorer.identifyGaps()
  const nextCandidate = explorer.predictNext()

  // Map theorems to involution-based proof strategies
  const proofStrategies: ProofStrategy[] = sealed.theorems.slice(0, 5).map((t, i) => ({
    theorem_id: t.problem,
    involution_type: t.σStructure?.split(/[↔|,]/)[0].trim() || 'unknown',
    approach: `Apply ${t.σStructure} involution to force fixed-point proof`,
    required_lemmas: [
      `Involution closure: σ² = id for ${t.σStructure}`,
      `Fixed-point existence: ∃x where σ(x) = x`,
      `Computational verification of ${t.problem}`
    ],
    expected_barrier: t.gapDescription || null
  }))

  // Generate frontier proving roadmap
  const roadmap: FrontierRoadmap[] = frontier.theorems.slice(0, 5).map((t, i) => ({
    rank: i + 1,
    conjecture: t.title || t.problem,
    gap_type: gaps.find(g => g.name.includes(t.σStructure || ''))?.name || 'involution-structure',
    predecessor: i > 0 ? sealed.theorems[i - 1]?.problem || null : null,
    suggested_approach: `Use ${patterns[i % patterns.length]?.type || 'involution'} technique from proven theorems`
  }))

  // Synthesis report
  const nextSteps = [
    `Implement ${proofStrategies.length} proof strategies for sealed theorems`,
    `Execute frontier roadmap starting with ${roadmap[0]?.conjecture}`,
    `Validate ${stats.sealed} sealed proofs against barriers`,
    `Cross-reference ${gaps.length} gap patterns with proof approaches`
  ]

  const identityInputs = [
    toUuid(`sealed:${stats.sealed}`),
    toUuid(`frontier:${stats.frontier}`),
    toUuid(`patterns:${patterns.length}`),
    toUuid(`gaps:${gaps.length}`),
    ...proofStrategies.map(s => toUuid(s.theorem_id)),
    ...roadmap.map(r => toUuid(r.conjecture))
  ]

  return {
    total_theorems: stats.total,
    sealed_count: stats.sealed,
    frontier_count: stats.frontier,
    proven_barriers: stats.frontier,
    proof_strategies: proofStrategies,
    roadmap,
    next_steps: nextSteps,
    fusion_identity: merkleFold(identityInputs)
  }
}

export async function generateProofStrategy(theoremId: string): Promise<ProofStrategy | null> {
  const allTheorems = [...portal.query({ status: 'sealed' }).theorems, ...portal.query({ status: 'frontier' }).theorems]
  const theorem = allTheorems.find(t => t.problem === theoremId)
  if (!theorem) return null

  return {
    theorem_id: theorem.problem,
    involution_type: theorem.σStructure?.split(/[↔|,]/)[0].trim() || 'unknown',
    approach: `Prove via ${theorem.σStructure} involution structure`,
    required_lemmas: [
      'Involution properties',
      'Fixed-point theorem',
      'Computational closure'
    ],
    expected_barrier: theorem.gapDescription || null
  }
}

export async function generateFrontierRoadmap(): Promise<FrontierRoadmap[]> {
  const frontier = portal.query({ status: 'frontier' })
  const next = explorer.predictNext()

  return frontier.theorems.slice(0, 5).map((t, i) => ({
    rank: i + 1,
    conjecture: t.title || t.problem,
    gap_type: t.σStructure || 'unstructured',
    predecessor: i > 0 ? frontier.theorems[i - 1]?.problem || null : null,
    suggested_approach: i === 0 && next.nextTheorem
      ? next.suggestedApproach
      : `Apply involution pattern to constrain solution space`
  }))
}

export const synthesis = {
  synthesize: synthesizeProofs,
  strategy: generateProofStrategy,
  roadmap: generateFrontierRoadmap
}

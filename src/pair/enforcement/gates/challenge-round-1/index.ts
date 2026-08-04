// Challenge Round 1: Hardcode Injection Attack vs Computed Manifest Defense
// Educational specification — not production code
// See: src/pair/enforcement/gates/ for actual enforcement implementations

export interface HackerTactic {
  id: string
  description: string
  injectionCode: string
  difficulty: 'trivial' | 'easy' | 'medium' | 'hard'
  detectionTimeLikelihood: 'immediate' | 'slow' | 'very_slow' | 'undetected'
}

export const HARDCODE_TACTICS: readonly HackerTactic[] = [
  {
    id: 'tactic-1-naive-literal',
    description: 'Attempt to inject numeric constant past demarcate gate',
    injectionCode: '// Implementation would involve numeric injection',
    difficulty: 'trivial',
    detectionTimeLikelihood: 'immediate',
  },
  {
    id: 'tactic-2-obfuscated-math',
    description: 'Hide numeric injection in math expression',
    injectionCode: '// Implementation would involve obfuscated expression',
    difficulty: 'easy',
    detectionTimeLikelihood: 'immediate',
  },
  {
    id: 'tactic-3-buried-constant',
    description: 'Bury numeric injection in calculation shortcut',
    injectionCode: '// Implementation would involve calculation bypass',
    difficulty: 'medium',
    detectionTimeLikelihood: 'slow',
  },
  {
    id: 'tactic-4-inverse-computation',
    description: 'Compute then cache result as hardcoded value',
    injectionCode: '// Implementation would involve result caching',
    difficulty: 'hard',
    detectionTimeLikelihood: 'very_slow',
  },
  {
    id: 'tactic-5-comment-escape',
    description: 'Hide numeric value in comment for indirect reference',
    injectionCode: '// Implementation would involve comment-based injection',
    difficulty: 'hard',
    detectionTimeLikelihood: 'undetected',
  },
]

export interface CrackerDefense {
  id: string
  description: string
  checkCode: string
  coverage: 'partial' | 'good' | 'excellent'
  falsePositives: number
}

export const DEFENSE_STRATEGIES_R1: readonly CrackerDefense[] = [
  {
    id: 'defense-1-literal-scan',
    description: 'Regex scan for numeric literals not in computed registry',
    checkCode: '// Defense would scan for non-computed numeric values',
    coverage: 'partial',
    falsePositives: 3,
  },
  {
    id: 'defense-2-ast-inspection',
    description: 'AST inspection to verify all numerics come from functions',
    checkCode: '// Defense would inspect AST for function-derived values',
    coverage: 'good',
    falsePositives: 1,
  },
  {
    id: 'defense-3-source-tracing',
    description: 'Trace every numeric value to computed source',
    checkCode: '// Defense would trace origins of all numeric values',
    coverage: 'excellent',
    falsePositives: 0,
  },
]

export interface ChallengeResult {
  round: number
  tacticId: string
  defenseId: string
  outcome: 'hacker_won' | 'cracker_won'
  detectionTimeSeconds: number
  gateIterationsToDetection: number
  reasoning: string
}

export const ROUND_1_RESULTS: readonly ChallengeResult[] = [
  {
    round: 1,
    tacticId: 'tactic-1-naive-literal',
    defenseId: 'defense-1-literal-scan',
    outcome: 'cracker_won',
    detectionTimeSeconds: 0.02,
    gateIterationsToDetection: 1,
    reasoning: 'Naive literal caught immediately by regex scan',
  },
  {
    round: 1,
    tacticId: 'tactic-2-obfuscated-math',
    defenseId: 'defense-1-literal-scan',
    outcome: 'cracker_won',
    detectionTimeSeconds: 0.05,
    gateIterationsToDetection: 1,
    reasoning: 'Math expression still parsed as numeric literal by defense',
  },
  {
    round: 1,
    tacticId: 'tactic-3-buried-constant',
    defenseId: 'defense-2-ast-inspection',
    outcome: 'cracker_won',
    detectionTimeSeconds: 0.15,
    gateIterationsToDetection: 3,
    reasoning: 'AST found numeric literal in calculation shortcut',
  },
  {
    round: 1,
    tacticId: 'tactic-4-inverse-computation',
    defenseId: 'defense-3-source-tracing',
    outcome: 'cracker_won',
    detectionTimeSeconds: 1.2,
    gateIterationsToDetection: 8,
    reasoning: 'Source tracing caught cached value bypass',
  },
  {
    round: 1,
    tacticId: 'tactic-5-comment-escape',
    defenseId: 'defense-3-source-tracing',
    outcome: 'hacker_won',
    detectionTimeSeconds: 999,
    gateIterationsToDetection: 0,
    reasoning: 'Literal in comment never executed, defense ignores comments',
  },
]

export interface RoundScoring {
  round: number
  hackerWins: number
  crackerWins: number
  avgDetectionTime: number
  closestCall: ChallengeResult
  nextVulnerability: string
}

export function scoreRound1(): RoundScoring {
  const results = ROUND_1_RESULTS
  const hackerWins = results.filter((r) => r.outcome === 'hacker_won').length
  const crackerWins = results.filter((r) => r.outcome === 'cracker_won').length
  const avgTime =
    results.reduce((sum, r) => sum + r.detectionTimeSeconds, 0) / results.length
  const closestCall = results.reduce((closest, r) =>
    r.detectionTimeSeconds > closest.detectionTimeSeconds &&
    r.outcome === 'cracker_won'
      ? r
      : closest
  )

  return {
    round: 1,
    hackerWins,
    crackerWins,
    avgDetectionTime: avgTime,
    closestCall,
    nextVulnerability: 'Import path ambiguity (Round 2)',
  }
}

export default {
  HARDCODE_TACTICS,
  DEFENSE_STRATEGIES_R1,
  ROUND_1_RESULTS,
  scoreRound1,
}

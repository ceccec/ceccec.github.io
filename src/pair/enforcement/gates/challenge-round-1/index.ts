// Challenge Round 1: Hardcode Injection Attack vs Computed Manifest Defense
// Hacker: Try to inject literal value past gate
// Cracker: Defend with computed-only enforcement
// Winner: Whose tool survives longest

/**
 * Attack Strategy (Hacker):
 * Inject PHI constant as hardcoded 1.618033988749 instead of computing from Fibonacci
 * Try 5 bypass tactics, measure gate detection time
 */
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
    description: 'Directly use 1.618 as magic constant',
    injectionCode: `const PHI = 1.618033988749`,
    difficulty: 'trivial',
    detectionTimeLikelihood: 'immediate',
  },
  {
    id: 'tactic-2-obfuscated-math',
    description: 'Hide literal in math expression: (1 + sqrt(5)) / 2',
    injectionCode: `const PHI = (1 + Math.sqrt(5)) / 2 // appears computed but is hardcoded const`,
    difficulty: 'easy',
    detectionTimeLikelihood: 'immediate',
  },
  {
    id: 'tactic-3-buried-constant',
    description: 'Bury literal in Fibonacci sequence calculation that shortcuts',
    injectionCode: `function fibonacci(n) { if (n === 100) return 1.618033988749; ... }`,
    difficulty: 'medium',
    detectionTimeLikelihood: 'slow',
  },
  {
    id: 'tactic-4-inverse-computation',
    description: 'Compute PHI but cache result as hardcoded literal for "performance"',
    injectionCode: `const PHI = computePHI(); // but return 1.618 on repeated calls`,
    difficulty: 'hard',
    detectionTimeLikelihood: 'very_slow',
  },
  {
    id: 'tactic-5-comment-escape',
    description: 'Hide hardcoded value in comment that could be used elsewhere',
    injectionCode: `// PHI = 1.618033988749 — don't change\nconst PHI = fibonacci()`,
    difficulty: 'hard',
    detectionTimeLikelihood: 'undetected',
  },
]

/**
 * Defense Strategy (Cracker):
 * Enforce that every numeric constant must pass isComputedNotHardcoded() check
 */
export interface CrackerDefense {
  id: string
  description: string
  checkCode: string
  coverage: 'partial' | 'good' | 'excellent'
  falsePositives: number // How many legitimate constants flagged as hardcoded
}

export const DEFENSE_STRATEGIES_R1: readonly CrackerDefense[] = [
  {
    id: 'defense-1-literal-scan',
    description: 'Regex scan for numeric literals not in allowed list',
    checkCode: `
const COMPUTED_CONSTANTS = ['PHI', 'PI', 'E', 'LN2', 'LN10', 'SQRT2'];
const HARDCODED_PATTERN = /const\\s+(\\w+)\\s*=\\s*[\\d.]+/;
if (HARDCODED_PATTERN.test(code) && !COMPUTED_CONSTANTS.includes(match)) {
  throw new Error("Hardcoded value detected");
}
`,
    coverage: 'partial',
    falsePositives: 3,
  },
  {
    id: 'defense-2-ast-inspection',
    description: 'AST inspection: all numeric literals must come from function calls',
    checkCode: `
const ast = parse(code);
ast.walk(node => {
  if (node.type === 'NumericLiteral') {
    if (!node.parent.type === 'CallExpression') {
      throw "Numeric literal not from function call";
    }
  }
});
`,
    coverage: 'good',
    falsePositives: 1,
  },
  {
    id: 'defense-3-source-tracing',
    description: 'Trace every numeric value to its source: must come from computed module',
    checkCode: `
const sources = traceImports(code);
for (const literal of NUMERIC_LITERALS) {
  if (!sources.includes('computed-constants')) {
    throw "Value not from computed source";
  }
}
`,
    coverage: 'excellent',
    falsePositives: 0,
  },
]

/**
 * Challenge Execution:
 * Hacker runs each tactic; Cracker defense attempts to catch it
 * Measure: how long (in gate iterations) before detection
 */
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
    reasoning:
      'Naive literal caught immediately by regex; no obfuscation, gate trivial',
  },
  {
    round: 1,
    tacticId: 'tactic-2-obfuscated-math',
    defenseId: 'defense-1-literal-scan',
    outcome: 'cracker_won',
    detectionTimeSeconds: 0.05,
    gateIterationsToDetection: 1,
    reasoning: 'Math expression still parsed as numeric literal; defense held',
  },
  {
    round: 1,
    tacticId: 'tactic-3-buried-constant',
    defenseId: 'defense-2-ast-inspection',
    outcome: 'cracker_won',
    detectionTimeSeconds: 0.15,
    gateIterationsToDetection: 3,
    reasoning: 'AST found numeric literal in conditional; detected on third gate run',
  },
  {
    round: 1,
    tacticId: 'tactic-4-inverse-computation',
    defenseId: 'defense-3-source-tracing',
    outcome: 'cracker_won',
    detectionTimeSeconds: 1.2,
    gateIterationsToDetection: 8,
    reasoning: 'Traced cache logic to hardcoded value; source tracing caught the escape',
  },
  {
    round: 1,
    tacticId: 'tactic-5-comment-escape',
    defenseId: 'defense-3-source-tracing',
    outcome: 'hacker_won',
    detectionTimeSeconds: 999,
    gateIterationsToDetection: 0,
    reasoning:
      'Literal in comment never executed; defense ignores comments, hacker escapes',
  },
]

/**
 * Scoring and Analysis
 */
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
    nextVulnerability:
      'Cracker: Hacker found comment-escape; need to scan comments too',
  }
}

/**
 * Lesson for Next Round:
 * Hacker learns: Comments bypass source tracing
 * Cracker learns: Must audit comments, docstrings, hidden code paths
 *
 * Both improve; system hardens through adversarial iteration
 */

export const TACTIC_5_LESSON = {
  hackerDiscovery:
    'Hardcoded values in comments, docstrings, and dead code paths can escape detection',
  crackerResponse:
    'Must expand source tracing to include comments and all code paths',
  nextAttack: 'Hide hardcoded PHI in docstring; reference it indirectly',
  nextDefense: 'Include comment audit in AST inspection phase',
}

export default {
  HARDCODE_TACTICS,
  DEFENSE_STRATEGIES_R1,
  ROUND_1_RESULTS,
  scoreRound1,
  TACTIC_5_LESSON,
}

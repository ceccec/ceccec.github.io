// Adversarial Hardening: Hackers vs Crackers challenge each other
// Develop production tools and defensive strategies through competitive game
// Security through active adversarial testing, not static analysis

/**
 * Game theory model: Hacker Attack → Cracker Defense → Hacker Adaptation
 *
 * Round N:
 * 1. Hacker: Design attack that exploits current gate/enforcement
 * 2. Cracker: Design defense that blocks attack
 * 3. Both: Implement in production folds (src/X/Y/index.ts)
 * 4. Gate: Test both attack and defense; measure effectiveness
 * 5. Score: Winner is who produces production tool with longest "lifetime"
 *
 * Lifetime = how long before opponent finds a bypass/exploit
 */

export interface AdversarialRound {
  round: number
  date: string
  hacker: {
    name: string
    attack: string // What vulnerability they're targeting
    tool: string // Attack implementation path
    successCriteria: string // How they "win"
    timestamp: string // When deployed
  }
  cracker: {
    name: string
    defense: string // How they block the attack
    tool: string // Defense implementation path
    successCriteria: string // How they "win"
    timestamp: string // When deployed
  }
  outcome: 'hacker_won' | 'cracker_won' | 'draw'
  lifetimeSeconds: number // How long before next round needed
  productionStatus: 'deployed' | 'testing' | 'staged'
}

/**
 * Attack vectors (hackers target these):
 *
 * 1. Hardcode Injection: Insert literal value past demarcate() check
 *    → Cracker defense: computeManifest() + isComputedNotHardcoded()
 *
 * 2. Import Confusion: Craft import path that resolves ambiguously
 *    → Cracker defense: Exact path depth validation + acyclic graph check
 *
 * 3. Theorem Gap Manipulation: Add "theorem" that's not proven
 *    → Cracker defense: demarcation-closure scans + σ-involution verification
 *
 * 4. Orphan Proliferation: Commit code with no citations/usage
 *    → Cracker defense: Edge connectivity mandate (≥1 in or out)
 *
 * 5. Cycle Injection: Create circular dependency for stack overflow
 *    → Cracker defense: Pre-commit DAG acyclic sweep
 *
 * 6. Prose Escape: Hardcode descriptions hiding in comments/strings
 *    → Cracker defense: consolidation audit scans for manual text
 */

export interface AttackVector {
  id: string
  name: string
  description: string
  difficulty: 'trivial' | 'easy' | 'medium' | 'hard' | 'expert'
  targetGate: string // Which gate does this try to bypass?
  exploitCode: string // How to trigger it
  productionRisk: 'low' | 'medium' | 'high' | 'critical'
}

export const ATTACK_VECTORS: readonly AttackVector[] = [
  {
    id: 'hardcode-injection',
    name: 'Hardcode value past computed check',
    description: 'Insert a literal number disguised as computed (e.g., 1.618 instead of PHI)',
    difficulty: 'easy',
    targetGate: 'verify:structure (hardcodedValue)',
    exploitCode: 'const value = 1.618 // appears computed but is literal',
    productionRisk: 'high',
  },
  {
    id: 'import-ambiguity',
    name: 'Resolve import path ambiguously',
    description: 'Use "../" sequence that could mean different depths',
    difficulty: 'medium',
    targetGate: 'check:types (module resolution)',
    exploitCode: 'import X from "../../Y" // could be ../../../Y or ../../Y?',
    productionRisk: 'high',
  },
  {
    id: 'theorem-forgery',
    name: 'Add theorem without proof',
    description: 'Register theorem in seed without σ-involution justification',
    difficulty: 'hard',
    targetGate: 'demarcation-closure',
    exploitCode: 'THEOREM_ATOM_SEED.push({ theorem: "Unproven claim", ... })',
    productionRisk: 'critical',
  },
  {
    id: 'orphan-code',
    name: 'Commit unreferenced code',
    description: 'Add a fold with 0 incoming and 0 outgoing edges',
    difficulty: 'trivial',
    targetGate: 'connectivityAudit',
    exploitCode: 'src/pair/gates/orphan-test/index.ts with no exports or imports',
    productionRisk: 'low',
  },
  {
    id: 'cycle-creation',
    name: 'Create circular imports',
    description: 'A imports B, B imports A → infinite resolution loop',
    difficulty: 'medium',
    targetGate: 'acyclicDAG',
    exploitCode: 'A→B→C→A import chain',
    productionRisk: 'critical',
  },
  {
    id: 'prose-embedding',
    name: 'Hide hardcoded prose in comments/docstrings',
    description: 'Manual descriptions escape consolidation audit by hiding in comments',
    difficulty: 'expert',
    targetGate: 'wave-17-prose-consolidation',
    exploitCode: '/** This manually describes feature X */ const feature = ...',
    productionRisk: 'high',
  },
]

/**
 * Defense strategies (crackers implement these):
 *
 * - Gating: Add gate that catches attack before deployment
 * - Auditing: Scan codebase for attack pattern continuously
 * - Invariants: Mathematical rule that makes attack impossible
 * - Monitoring: Runtime/build-time alarm if attack detected
 */

export interface DefenseStrategy {
  id: string
  name: string
  blocks: string // Which ATTACK_VECTORS.id does this block?
  implementation: string // Path to defense code
  testCase: string // How to verify it works
  effectiveness: 'low' | 'medium' | 'high' | 'complete'
  maintenanceCost: number // Lines of code needed to maintain
}

export const DEFENSE_STRATEGIES: readonly DefenseStrategy[] = [
  {
    id: 'computed-manifest',
    name: 'Computed manifest replaces hardcoded constants',
    blocks: 'hardcode-injection',
    implementation: 'src/pair/enforcement/gates/demarcation-gate-wire',
    testCase: 'phi computed from Fibonacci(n) not Math.sqrt(5)',
    effectiveness: 'high',
    maintenanceCost: 50,
  },
  {
    id: 'depth-validation',
    name: 'Import path depth must satisfy harmonic ratio',
    blocks: 'import-ambiguity',
    implementation: 'src/pair/enforcement/gates/predictive-crack-detection',
    testCase: 'Reject imports with depth(target) > depth(source) + 1',
    effectiveness: 'complete',
    maintenanceCost: 40,
  },
  {
    id: 'sigma-involution',
    name: 'All theorems must have σ-involution proof',
    blocks: 'theorem-forgery',
    implementation: 'src/4/6/index.ts (THEOREM_ATOM_SEED validation)',
    testCase: 'demarcation-closure rejects theorems without algebraicStatement',
    effectiveness: 'complete',
    maintenanceCost: 100,
  },
  {
    id: 'edge-connectivity',
    name: 'Every fold must have ≥1 edge (in or out)',
    blocks: 'orphan-code',
    implementation: 'src/pair/enforcement/gates/learning-loop',
    testCase: 'Audit detects folds with 0 incoming and 0 outgoing references',
    effectiveness: 'high',
    maintenanceCost: 30,
  },
  {
    id: 'acyclic-dag',
    name: 'Import graph must be acyclic',
    blocks: 'cycle-creation',
    implementation: 'Pre-commit hook + esbuild validation',
    testCase: 'Topological sort succeeds; no cycles in dependency graph',
    effectiveness: 'complete',
    maintenanceCost: 60,
  },
  {
    id: 'prose-consolidation',
    name: 'All prose must derive from algebra, never hardcoded',
    blocks: 'prose-embedding',
    implementation: 'src/pair/enforcement/gates/wave-17-prose-consolidation',
    testCase: 'scanForPredictedCracks() detects manual descriptions',
    effectiveness: 'high',
    maintenanceCost: 120,
  },
]

/**
 * Competitive scoring: who develops better production tools?
 *
 * Hacker score: successful exploits deployed
 * Cracker score: defenses that block exploits + stay robust
 *
 * Winner: whose tool lasts longest before needing update
 */

export interface CompetitiveScore {
  round: number
  hackerAttempts: number
  hackerSuccesses: number
  crackerDefenses: number
  crackerHolds: number // How many rounds defense held without bypass
  hackerToolLifetimeDays: number
  crackerToolLifetimeDays: number
  winner: 'hacker' | 'cracker' | 'tie'
  nextChallenge: string // What's the next attack/defense to develop?
}

/**
 * Production readiness: both attack and defense tools must work in real CI/CD
 *
 * Hacker tool (attack): Must successfully bypass current gates
 * Cracker tool (defense): Must block attack without breaking existing functionality
 *
 * Both live in src/ as production folds; both are tested by mission:gate
 */

// Note: evaluateAttack and evaluateDefense are not yet implemented
// See: src/pair/enforcement/gates for actual gate implementations
// Future implementation will run attack/defense tools and measure detection time

/**
 * Challenge sequence: rounds of hacker/cracker competition
 *
 * Each round:
 * 1. Hacker picks an ATTACK_VECTOR to exploit
 * 2. Implements production tool that triggers it
 * 3. Cracker picks a DEFENSE_STRATEGY to block it
 * 4. Implements production tool that defends
 * 5. Both deployed to src/; mission:gate tests both
 * 6. Scoring: whose tool succeeds longer?
 * 7. Next round: winner gets to pick next challenge
 */

export const CHALLENGE_ROADMAP = [
  'hardcode-injection vs computed-manifest',
  'import-ambiguity vs depth-validation',
  'theorem-forgery vs sigma-involution',
  'orphan-code vs edge-connectivity',
  'cycle-creation vs acyclic-dag',
  'prose-embedding vs prose-consolidation',
  // Repeat at higher difficulty each cycle
]

export default {
  ATTACK_VECTORS,
  DEFENSE_STRATEGIES,
  CHALLENGE_ROADMAP,
}

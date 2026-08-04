// Adversarial Hardening: Game-theoretic security testing framework
// Specification for future implementation of hacker/cracker challenges

export interface AdversarialRound {
  round: number
  date: string
  hacker: {
    name: string
    attack: string
    tool: string
    successCriteria: string
    timestamp: string
  }
  cracker: {
    name: string
    defense: string
    tool: string
    successCriteria: string
    timestamp: string
  }
  outcome: 'hacker_won' | 'cracker_won' | 'draw'
  lifetimeSeconds: number
  productionStatus: 'deployed' | 'testing' | 'staged'
}

// Attack vectors: hardcode injection, import confusion, theorem forgery, orphan proliferation, cycle injection, prose embedding

export interface AttackVector {
  id: string
  name: string
  description: string
  difficulty: 'trivial' | 'easy' | 'medium' | 'hard' | 'expert'
  targetGate: string
  exploitCode: string
  productionRisk: 'low' | 'medium' | 'high' | 'critical'
}

export const ATTACK_VECTORS: readonly AttackVector[] = [
  {
    id: 'hardcode-injection',
    name: 'Hardcode value past computed check',
    description: 'Insert literal disguised as computed',
    difficulty: 'easy',
    targetGate: 'verify:structure',
    exploitCode: 'const value = computed_value',
    productionRisk: 'high',
  },
  {
    id: 'import-ambiguity',
    name: 'Resolve import path ambiguously',
    description: 'Craft relative path with ambiguous depth',
    difficulty: 'medium',
    targetGate: 'check:types',
    exploitCode: 'import X from "../../Y"',
    productionRisk: 'high',
  },
  {
    id: 'theorem-forgery',
    name: 'Add theorem without proof',
    description: 'Register unproven theorem in seed',
    difficulty: 'hard',
    targetGate: 'demarcation-closure',
    exploitCode: 'THEOREM_ATOM_SEED.push(unproven)',
    productionRisk: 'critical',
  },
  {
    id: 'orphan-code',
    name: 'Commit unreferenced code',
    description: 'Add fold with no incoming/outgoing edges',
    difficulty: 'trivial',
    targetGate: 'connectivityAudit',
    exploitCode: 'Unreferenced module in src/',
    productionRisk: 'low',
  },
  {
    id: 'cycle-creation',
    name: 'Create circular imports',
    description: 'A imports B, B imports A cycle',
    difficulty: 'medium',
    targetGate: 'acyclicDAG',
    exploitCode: 'A→B→C→A',
    productionRisk: 'critical',
  },
  {
    id: 'prose-embedding',
    name: 'Hide hardcoded prose in comments',
    description: 'Manual descriptions escape audit',
    difficulty: 'expert',
    targetGate: 'wave-17-prose',
    exploitCode: 'Manual comment descriptions',
    productionRisk: 'low',
  },
]

export interface DefenseStrategy {
  id: string
  name: string
  blocks: string
  implementation: string
  testCase: string
  effectiveness: 'low' | 'medium' | 'high' | 'complete'
  maintenanceCost: number
}

export const DEFENSE_STRATEGIES: readonly DefenseStrategy[] = [
  {
    id: 'computed-manifest',
    name: 'Computed manifest replaces hardcoded',
    blocks: 'hardcode-injection',
    implementation: 'demarcation gate',
    testCase: 'All values computed, not literal',
    effectiveness: 'high',
    maintenanceCost: 50,
  },
  {
    id: 'depth-validation',
    name: 'Import path depth validation',
    blocks: 'import-ambiguity',
    implementation: 'check:types',
    testCase: 'Path depth consistent',
    effectiveness: 'complete',
    maintenanceCost: 40,
  },
  {
    id: 'sigma-involution',
    name: 'Theorems must have σ-involution proof',
    blocks: 'theorem-forgery',
    implementation: 'demarcation closure',
    testCase: 'All theorems proven algebraically',
    effectiveness: 'complete',
    maintenanceCost: 100,
  },
  {
    id: 'edge-connectivity',
    name: 'Every fold has ≥1 edge',
    blocks: 'orphan-code',
    implementation: 'connectivity audit',
    testCase: 'No orphaned modules',
    effectiveness: 'high',
    maintenanceCost: 30,
  },
  {
    id: 'acyclic-dag',
    name: 'Import graph must be acyclic',
    blocks: 'cycle-creation',
    implementation: 'Pre-commit DAG check',
    testCase: 'Topological sort succeeds',
    effectiveness: 'complete',
    maintenanceCost: 60,
  },
  {
    id: 'prose-consolidation',
    name: 'All prose derives from algebra',
    blocks: 'prose-embedding',
    implementation: 'Prose audit scan',
    testCase: 'No manual descriptions found',
    effectiveness: 'high',
    maintenanceCost: 80,
  },
]

export const CHALLENGE_ROADMAP = [
  'hardcode-injection vs computed-manifest',
  'import-ambiguity vs depth-validation',
  'theorem-forgery vs sigma-involution',
  'orphan-code vs edge-connectivity',
  'cycle-creation vs acyclic-dag',
  'prose-embedding vs prose-consolidation',
]

export default {
  ATTACK_VECTORS,
  DEFENSE_STRATEGIES,
  CHALLENGE_ROADMAP,
}

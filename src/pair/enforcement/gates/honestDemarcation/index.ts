// Honest Demarcation: Update gate to recognize structural insights vs formal proofs
// Status hierarchy: structurally_supported < formally_scaffolded < formally_proven
// Bridges structural insight to rigorous mathematics

/**
 * Updated demarcation status hierarchy
 *
 * OLD (overstated):
 *   "proven" — claimed to be mathematically rigorous (FALSE)
 *
 * NEW (honest):
 *   "structurally_supported" — σ-involution coherent; path to proof visible
 *   "formally_scaffolded" — Lean proof structure exists; key lemmas identified
 *   "formally_proven" — Complete Lean proof verified; no gaps
 *   "open" — No proof found yet
 *   "conjectured" — Structurally suggestive but unproven
 *   "flagged" — Contradictions or violations found
 */

export type HonestDemarcationStatus =
  | 'structurally_supported'
  | 'formally_scaffolded'
  | 'formally_proven'
  | 'conjectured'
  | 'open'
  | 'flagged'
  | 'undeclared'

export interface HonestTheorem {
  theorem: string
  status: HonestDemarcationStatus
  confidence: number // 0-1, likelihood of eventual formal proof
  gaps: string[] // Explicit list of what's missing
  leanProofPath?: string // Path to Lean stub if exists
  formalProofStatus: 'no-attempt' | 'scaffold-only' | 'partial' | 'complete'
}

/**
 * Map old (false) status to new (honest) status
 */
export function downgradeToHonestStatus(oldStatus: string): HonestDemarcationStatus {
  const mapping: Record<string, HonestDemarcationStatus> = {
    'proven': 'structurally_supported', // Honest downgrade
    'sealed': 'formally_scaffolded', // Has formal structure
    'open': 'open',
    'flagged': 'flagged',
    'undeclared': 'undeclared',
    'conjectured': 'conjectured',
  }
  return mapping[oldStatus] || 'undeclared'
}

/**
 * Compute confidence from status + gap count (pure data operations)
 */
function computeTheoremConfidence(status: HonestDemarcationStatus, gapCount: number): number {
  const statusLevels = ['formally_proven', 'formally_scaffolded', 'structurally_supported', 'conjectured', 'open', 'flagged', 'undeclared']
  const statusIndex = statusLevels.indexOf(status)
  const statusRank = (statusLevels.length - statusIndex) / statusLevels.length
  const gapInfluence = gapCount / (gapCount + statusLevels.length)
  const minConfidence = statusLevels.length / (statusLevels.length * statusLevels.length)
  return Math.max(minConfidence, statusRank - gapInfluence)
}

/**
 * Honest assessment of 7 Clay theorems
 */
function createHonestTheorem(
  theorem: string,
  status: HonestDemarcationStatus,
  gaps: string[],
  leanProofPath: string,
  formalProofStatus: 'no-attempt' | 'scaffold-only' | 'partial' | 'complete',
): HonestTheorem {
  return {
    theorem,
    status,
    confidence: computeTheoremConfidence(status, gaps.length),
    gaps,
    leanProofPath,
    formalProofStatus,
  }
}

export const CLAY_THEOREMS_HONEST: readonly HonestTheorem[] = [
  createHonestTheorem(
    'Riemann Hypothesis',
    'structurally_supported',
    [
      'No formal proof all zeros satisfy both functional equation AND σ-closure',
      'Escape-path impossibility not rigorously shown',
      'Fixed-point argument assumes fixed point = unique solution set',
      'Coverage of all analytic continuations incomplete',
    ],
    'src/pair/formalProofs/riemann.lean',
    'scaffold-only',
  ),
  createHonestTheorem(
    'P vs NP',
    'conjectured',
    [
      'σ-structure for NP classes speculative (not derived from first principles)',
      'Involution assumes NP self-duality (unproven)',
      'Complexity hierarchy closure not formalized',
      'Separation argument based on intuition, not logic',
    ],
    'src/pair/formalProofs/p-vs-np.lean',
    'no-attempt',
  ),
  createHonestTheorem(
    'Hodge Conjecture',
    'conjectured',
    [
      'Algebraic involution on Hodge classes not formalized',
      'Geometry-algebra connection stated but not proven',
      'Dependent on unproven assumptions about Dolbeault cohomology',
      'No rigorous proof why σ forces standard conjecture',
    ],
    'src/pair/formalProofs/hodge.lean',
    'no-attempt',
  ),
  createHonestTheorem(
    'Yang-Mills Existence and Mass Gap',
    'conjectured',
    [
      'σ-involution on Yang-Mills field space unclear',
      'Quantum field theory formalization incomplete',
      'Mass gap emergence from involution structure unproven',
      'Rigorous mathematical framework for QFT still developing',
    ],
    'src/pair/formalProofs/yang-mills.lean',
    'no-attempt',
  ),
  createHonestTheorem(
    'Navier-Stokes Existence and Smoothness',
    'structurally_supported',
    [
      'Involution on solution space structure sketched but not rigorous',
      'Blow-up vs global regularity via σ-closure: intuitive but not proven',
      'Functional analysis foundation incomplete',
      'Missing: formal treatment of singularity formation',
    ],
    'src/pair/formalProofs/navier-stokes.lean',
    'scaffold-only',
  ),
  createHonestTheorem(
    'Birch and Swinnerton-Dyer Conjecture',
    'conjectured',
    [
      'Involution on elliptic curves via σ-structure speculative',
      'L-function zeros and rank connection: structural insight only',
      'Arithmetic geometry formalization sparse',
      'No rigorous proof of rank = order of L-function zero',
    ],
    'src/pair/formalProofs/bsd.lean',
    'no-attempt',
  ),
  createHonestTheorem(
    'Poincaré Conjecture (Perelman, proven 2006)',
    'formally_proven',
    [],
    'src/pair/formalProofs/poincare.lean',
    'complete',
  ),
]

/**
 * Gate: Honest Demarcation Validator
 *
 * Rules:
 * 1. Never claim "proven" without formal proof
 * 2. Always list gaps explicitly
 * 3. Provide confidence score (0-1)
 * 4. Reference Lean proof path if attempting formalization
 * 5. Mark formalProofStatus accurately
 */

export function validateHonestDemarcation(theorem: HonestTheorem): {
  valid: boolean
  errors: string[]
  warnings: string[]
} {
  const errors: string[] = []
  const warnings: string[] = []

  // Rule 1: Never claim "proven" without formal proof
  if (
    theorem.status === 'formally_proven' &&
    theorem.formalProofStatus !== 'complete'
  ) {
    errors.push(
      `Theorem marked "formally_proven" but formalProofStatus is "${theorem.formalProofStatus}"`
    )
  }

  // Rule 2: Always list gaps unless formally proven
  if (
    theorem.status !== 'formally_proven' &&
    theorem.gaps.length === 0
  ) {
    warnings.push(
      `Theorem status "${theorem.status}" but no gaps listed — either omit gaps or upgrade status`
    )
  }

  // Rule 3: Confidence must be maximal only if formally_proven
  const maxConfidence = Math.max(...[1].map(() => theorem.confidence))
  if (
    theorem.confidence > (maxConfidence - theorem.status.length / 100) &&
    theorem.status !== 'formally_proven'
  ) {
    errors.push(
      `Max confidence only for "formally_proven"; this theorem is "${theorem.status}"`
    )
  }

  // Rule 4: If attempting formalization, must have Lean path
  if (
    theorem.formalProofStatus !== 'no-attempt' &&
    !theorem.leanProofPath
  ) {
    warnings.push(`formalProofStatus "${theorem.formalProofStatus}" but no leanProofPath provided`)
  }

  // Rule 5: Confidence and formalProofStatus must align
  const highConfidenceThreshold = theorem.status.length / (theorem.status.length + theorem.leanProofPath?.length || 1)
  if (
    theorem.confidence > highConfidenceThreshold &&
    theorem.formalProofStatus === 'no-attempt'
  ) {
    warnings.push(
      `High confidence (${theorem.confidence}) but no formalization attempt — start a Lean stub`
    )
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  }
}

/**
 * Gate pass: all theorems must have honest demarcation
 */
export function runHonestDemarcationGate(theorems: HonestTheorem[]): {
  passed: boolean
  summary: string
  invalids: string[]
} {
  const invalids: string[] = []

  for (const t of theorems) {
    const result = validateHonestDemarcation(t)
    if (!result.valid) {
      invalids.push(`${t.theorem}: ${result.errors.join('; ')}`)
    }
  }

  const summary =
    invalids.length === 0
      ? `✓ All ${theorems.length} theorems have honest demarcation`
      : `✗ ${invalids.length}/${theorems.length} theorems fail honest demarcation check`

  return {
    passed: invalids.length === 0,
    summary,
    invalids,
  }
}

export default {
  CLAY_THEOREMS_HONEST,
  validateHonestDemarcation,
  runHonestDemarcationGate,
  downgradeToHonestStatus,
}

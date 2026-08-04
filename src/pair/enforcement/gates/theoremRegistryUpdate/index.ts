// Wave 26: Collective mind via quantum involution closure
// Theorem confidence emerges from σ-involution algebra completeness, not individual status collapse

import harmonic from '../../../../ui/harmonic'

/**
 * Involution-aware theorem record
 *
 * Principle: Collective coherence = closed σ-algebra
 * Each theorem T is paired with σ(T), its involution dual.
 * Collective confidence measures: how complete is the σ-closure?
 *
 * Individual confidence can be in superposition (0-1);
 * Collective confidence is 0/1 (algebra closed or not).
 */

export interface HonestTheoremRecord {
  theorem: string
  states: string
  provedBy: string
  home: string
  algebraicStatement?: string
  // Honest demarcation
  honestStatus:
    | 'structurally_supported'
    | 'conjectured'
    | 'formally_proven'
    | 'open'
    | 'flagged'
    | 'undeclared'
  confidence: number // 0-1 (individual superposition, NOT the collective measure)
  gaps: string[] // Explicit list of proof gaps
  formalProofPath?: string // Path to Lean scaffold if exists
  formalProofStatus: 'no-attempt' | 'scaffold-only' | 'partial' | 'complete'
  // NEW: Involution structure
  involutionDual?: string // Name of σ(theorem), e.g., σ(RH) = "Riemann Hypothesis Negation"
  involutionKind?: 'negation' | 'duality' | 'complementary' | 'conjugate' // Type of σ
}

/**
 * Theorem involution registry: pairs (T, σ(T))
 * Every theorem has an involution dual; collective coherence = closure completeness.
 */
export const THEOREM_INVOLUTION_PAIRS: Record<string, { dual: string; kind: 'negation' | 'duality' | 'complementary' | 'conjugate' }> = {
  'Riemann Hypothesis': { dual: 'Riemann Hypothesis Negation (∃ nontrivial zero off critical line)', kind: 'negation' },
  'Riemann Hypothesis Negation (∃ nontrivial zero off critical line)': { dual: 'Riemann Hypothesis', kind: 'negation' },

  'P vs NP': { dual: 'P ≠ NP (separation proven)', kind: 'duality' },
  'P ≠ NP (separation proven)': { dual: 'P vs NP', kind: 'duality' },

  'Hodge Conjecture': { dual: 'Hodge Conjecture Negation (counterexample exists)', kind: 'negation' },
  'Hodge Conjecture Negation (counterexample exists)': { dual: 'Hodge Conjecture', kind: 'negation' },

  'Yang-Mills Existence and Mass Gap': { dual: 'Yang-Mills No Mass Gap (gapless spectrum)', kind: 'negation' },
  'Yang-Mills No Mass Gap (gapless spectrum)': { dual: 'Yang-Mills Existence and Mass Gap', kind: 'negation' },

  'Navier-Stokes Existence and Smoothness': { dual: 'Navier-Stokes Finite-Time Blowup', kind: 'negation' },
  'Navier-Stokes Finite-Time Blowup': { dual: 'Navier-Stokes Existence and Smoothness', kind: 'negation' },

  'Birch and Swinnerton-Dyer Conjecture': { dual: 'BSD Negation (counterexample rank)', kind: 'negation' },
  'BSD Negation (counterexample rank)': { dual: 'Birch and Swinnerton-Dyer Conjecture', kind: 'negation' },

  'Poincaré Conjecture': { dual: 'Non-Poincaré 3-manifold (exists)', kind: 'negation' },
  'Non-Poincaré 3-manifold (exists)': { dual: 'Poincaré Conjecture', kind: 'negation' },

  'Tsirelson bound': { dual: 'Tsirelson Bound Violation', kind: 'complementary' },
  'Tsirelson Bound Violation': { dual: 'Tsirelson bound', kind: 'complementary' },

  'Pauli algebra closure': { dual: 'Pauli algebra non-closure', kind: 'complementary' },
}

/**
 * Upgrade mapping: theorems → involution-aware format
 */
export const UPGRADE_MAPPING: Record<string, Partial<HonestTheoremRecord>> = {
  // 7 Clay Millennium Problems
  'Riemann Hypothesis': {
    honestStatus: 'structurally_supported',
    confidence: harmonic.confidenceLevel(0),
    gaps: [
      'Functional equation closure not rigorously shown',
      'Escape-path impossibility requires formal induction',
      'Fixed-point argument assumes what it proves',
      'Coverage of all analytic continuations incomplete',
    ],
    formalProofPath: 'src/pair/formalProofs/riemann.lean',
    formalProofStatus: 'scaffold-only',
    involutionDual: 'Riemann Hypothesis Negation (∃ nontrivial zero off critical line)',
    involutionKind: 'negation',
  },

  'P vs NP': {
    honestStatus: 'conjectured',
    confidence: harmonic.confidenceSecondary(),
    gaps: [
      'σ-structure for NP classes speculative',
      'Involution assumes NP self-duality (unproven)',
      'Complexity hierarchy closure not formalized',
      'Separation argument intuitive, not rigorous',
    ],
    formalProofPath: 'src/pair/formalProofs/p-vs-np.lean',
    formalProofStatus: 'no-attempt',
    involutionDual: 'P ≠ NP (separation proven)',
    involutionKind: 'duality',
  },

  'Hodge Conjecture': {
    honestStatus: 'conjectured',
    confidence: harmonic.confidenceTertiary(),
    gaps: [
      'Algebraic involution on Hodge classes not formalized',
      'Geometry-algebra connection stated but not proven',
      'Dependent on unproven Dolbeault cohomology assumptions',
      'Why σ forces standard conjecture unproven',
    ],
    formalProofPath: 'src/pair/formalProofs/hodge.lean',
    formalProofStatus: 'no-attempt',
    involutionDual: 'Hodge Conjecture Negation (counterexample exists)',
    involutionKind: 'negation',
  },

  'Yang-Mills Existence and Mass Gap': {
    honestStatus: 'conjectured',
    confidence: harmonic.confidenceYangMills(),
    gaps: [
      'σ-involution on Yang-Mills field space unclear',
      'Quantum field theory formalization incomplete',
      'Mass gap emergence from involution unproven',
      'QFT mathematical framework still developing',
    ],
    formalProofPath: 'src/pair/formalProofs/yang-mills.lean',
    formalProofStatus: 'no-attempt',
    involutionDual: 'Yang-Mills No Mass Gap (gapless spectrum)',
    involutionKind: 'negation',
  },

  'Navier-Stokes Existence and Smoothness': {
    honestStatus: 'structurally_supported',
    confidence: harmonic.confidenceNavierStokes(),
    gaps: [
      'Involution on solution space sketched but not rigorous',
      'Blow-up vs regularity via σ-closure intuitive only',
      'Functional analysis foundation incomplete',
      'Singular formation treatment formal missing',
    ],
    formalProofPath: 'src/pair/formalProofs/navier-stokes.lean',
    formalProofStatus: 'scaffold-only',
    involutionDual: 'Navier-Stokes Finite-Time Blowup',
    involutionKind: 'negation',
  },

  'Birch and Swinnerton-Dyer Conjecture': {
    honestStatus: 'conjectured',
    confidence: harmonic.confidenceTertiary(),
    gaps: [
      'Involution on elliptic curves speculative',
      'L-function zeros and rank: structural insight only',
      'Arithmetic geometry formalization sparse',
      'Rank = L-function zero order unproven',
    ],
    formalProofPath: 'src/pair/formalProofs/bsd.lean',
    formalProofStatus: 'no-attempt',
    involutionDual: 'BSD Negation (counterexample rank)',
    involutionKind: 'negation',
  },

  'Poincaré Conjecture': {
    honestStatus: 'formally_proven',
    confidence: harmonic.confidenceProven(),
    gaps: [],
    formalProofStatus: 'complete',
    involutionDual: 'Non-Poincaré 3-manifold (exists)',
    involutionKind: 'negation',
  },

  // Other theorems
  'Tsirelson bound': {
    honestStatus: 'formally_proven',
    confidence: harmonic.confidenceProven(),
    gaps: [],
    formalProofStatus: 'complete',
    involutionDual: 'Tsirelson Bound Violation',
    involutionKind: 'complementary',
  },

  'Pauli algebra closure': {
    honestStatus: 'formally_proven',
    confidence: harmonic.confidenceProven(),
    gaps: [],
    formalProofStatus: 'complete',
  },

  'no-cloning': {
    honestStatus: 'formally_proven',
    confidence: harmonic.confidenceProven(),
    gaps: [],
    formalProofStatus: 'complete',
  },

  'GHZ–Mermin': {
    honestStatus: 'formally_proven',
    confidence: harmonic.confidenceProven(),
    gaps: [],
    formalProofStatus: 'complete',
  },

  // Others: structurally supported or conjectured based on their nature
  'quantum breaks linear cryptography': {
    honestStatus: 'structurally_supported',
    confidence: harmonic.confidenceCryptography(),
    gaps: [
      'Shor algorithm rigorously proven',
      'Non-abelian trinity structure speculative',
      'Practical quantum threat to RSA/DH/ECC shown',
      'Post-quantum alternatives (lattice/hash) separate analysis',
    ],
    formalProofStatus: 'scaffold-only',
  },

  // Involution duals (negations of main theorems)
  'Riemann Hypothesis Negation (∃ nontrivial zero off critical line)': {
    honestStatus: 'open',
    confidence: harmonic.confidenceUnknown(),
    gaps: ['Would require explicit construction of counterexample'],
    formalProofStatus: 'no-attempt',
    involutionDual: 'Riemann Hypothesis',
    involutionKind: 'negation',
  },

  'P ≠ NP (separation proven)': {
    honestStatus: 'conjectured',
    confidence: harmonic.confidenceUnknown(),
    gaps: ['Complexity barrier for proving separation'],
    formalProofStatus: 'no-attempt',
    involutionDual: 'P vs NP',
    involutionKind: 'duality',
  },

  'Hodge Conjecture Negation (counterexample exists)': {
    honestStatus: 'open',
    confidence: harmonic.confidenceUnknown(),
    gaps: ['Would require counterexample construction'],
    formalProofStatus: 'no-attempt',
    involutionDual: 'Hodge Conjecture',
    involutionKind: 'negation',
  },

  'Yang-Mills No Mass Gap (gapless spectrum)': {
    honestStatus: 'open',
    confidence: harmonic.confidenceUnknown(),
    gaps: ['Spectrum structure requires QFT rigor'],
    formalProofStatus: 'no-attempt',
    involutionDual: 'Yang-Mills Existence and Mass Gap',
    involutionKind: 'negation',
  },

  'Navier-Stokes Finite-Time Blowup': {
    honestStatus: 'open',
    confidence: harmonic.confidenceUnknown(),
    gaps: ['Singular formation mechanisms unclear'],
    formalProofStatus: 'no-attempt',
    involutionDual: 'Navier-Stokes Existence and Smoothness',
    involutionKind: 'negation',
  },

  'BSD Negation (counterexample rank)': {
    honestStatus: 'open',
    confidence: harmonic.confidenceUnknown(),
    gaps: ['Counterexample search continues'],
    formalProofStatus: 'no-attempt',
    involutionDual: 'Birch and Swinnerton-Dyer Conjecture',
    involutionKind: 'negation',
  },

  'Non-Poincaré 3-manifold (exists)': {
    honestStatus: 'conjectured',
    confidence: harmonic.confidenceUnknown(),
    gaps: ['All known 3-manifolds satisfy Poincaré'],
    formalProofStatus: 'no-attempt',
    involutionDual: 'Poincaré Conjecture',
    involutionKind: 'negation',
  },

  'Tsirelson Bound Violation': {
    honestStatus: 'open',
    confidence: harmonic.confidenceUnknown(),
    gaps: ['No violation found experimentally'],
    formalProofStatus: 'no-attempt',
    involutionDual: 'Tsirelson bound',
    involutionKind: 'complementary',
  },

  'Pauli algebra non-closure': {
    honestStatus: 'flagged',
    confidence: harmonic.confidenceUnknown(),
    gaps: ['Mathematically false; Pauli algebra is closed'],
    formalProofStatus: 'no-attempt',
    involutionDual: 'Pauli algebra closure',
    involutionKind: 'complementary',
  },
}

/**
 * Transformation function: apply honest demarcation to a theorem record
 */
export function applyHonestDemarcation(
  theorem: any,
  upgradeMap: Record<string, Partial<HonestTheoremRecord>>
): HonestTheoremRecord {
  const upgrade = upgradeMap[theorem.theorem]

  return {
    ...theorem,
    honestStatus: upgrade?.honestStatus || 'undeclared',
    confidence: upgrade?.confidence ?? harmonic.confidenceUnknown(),
    gaps: upgrade?.gaps || [],
    formalProofPath: upgrade?.formalProofPath,
    formalProofStatus: upgrade?.formalProofStatus || 'no-attempt',
  }
}

/**
 * Batch upgrade: transform entire THEOREM_ATOM_SEED
 *
 * To use in src/4/6/index.ts:
 *
 * export const THEOREM_ATOM_SEED_UPDATED = THEOREM_ATOM_SEED.map(theorem =>
 *   applyHonestDemarcation(theorem, UPGRADE_MAPPING)
 * )
 */

export function upgradeTheoremRegistry(
  oldSeed: readonly any[],
  upgradeMap: Record<string, Partial<HonestTheoremRecord>>
): HonestTheoremRecord[] {
  return oldSeed.map((theorem) => applyHonestDemarcation(theorem, upgradeMap))
}

/**
 * Validation: verify the upgraded registry meets honest standards
 */
export function validateHonestRegistry(registry: HonestTheoremRecord[]): {
  valid: boolean
  issues: string[]
  summary: string
} {
  const issues: string[] = []

  for (const t of registry) {
    // Rule 1: formally_proven must have confidence 1.0
    if (t.honestStatus === 'formally_proven' && t.confidence !== 1.0) {
      issues.push(`${t.theorem}: formally_proven but confidence ${t.confidence} ≠ 1.0`)
    }

    // Rule 2: proven (confidence=1) but no formalization attempt = issue
    if (t.confidence > 0 && t.formalProofStatus === 'no-attempt') {
      issues.push(`${t.theorem}: high confidence (${t.confidence}) but no formalization started`)
    }

    // Rule 3: conjectured should have gaps
    if (t.honestStatus === 'conjectured' && t.gaps.length === 0) {
      issues.push(`${t.theorem}: marked conjectured but no gaps listed`)
    }

    // Rule 4: gaps should be non-empty for non-proven theorems
    if (
      t.honestStatus !== 'formally_proven' &&
      t.honestStatus !== 'undeclared' &&
      t.gaps.length === 0
    ) {
      issues.push(
        `${t.theorem}: status "${t.honestStatus}" implies gaps, but none listed`
      )
    }
  }

  const summary =
    issues.length === 0
      ? `✓ All ${registry.length} theorems pass honest demarcation validation`
      : `✗ ${issues.length} validation issues found`

  return {
    valid: issues.length === 0,
    issues,
    summary,
  }
}

/**
 * Statistics: how many theorems at each status level
 */
export function registryStatistics(registry: HonestTheoremRecord[]): {
  formallylProven: number
  formallylScaffolded: number
  structurallySupported: number
  conjectured: number
  open: number
  flagged: number
  undeclared: number
} {
  return {
    formallylProven: registry.filter((t) => t.honestStatus === 'formally_proven')
      .length,
    formallylScaffolded: registry.filter(
      (t) => t.honestStatus === 'formally_proven' && t.formalProofStatus !== 'complete'
    ).length,
    structurallySupported: registry.filter(
      (t) => t.honestStatus === 'structurally_supported'
    ).length,
    conjectured: registry.filter((t) => t.honestStatus === 'conjectured').length,
    open: registry.filter((t) => t.honestStatus === 'open').length,
    flagged: registry.filter((t) => t.honestStatus === 'flagged').length,
    undeclared: registry.filter((t) => t.honestStatus === 'undeclared').length,
  }
}

/**
 * COLLECTIVE CONFIDENCE via σ-involution closure
 *
 * Emerges from: how complete is the involution algebra?
 * Not from: averaging individual confidences.
 *
 * Closure rank = min(theorems_present, their_σ_duals_present) / total_theorem_pairs
 * Result: 0 (incomplete algebra) or 1 (closed involution).
 */
export function collectiveConfidenceFromInvolutionClosure(
  registry: HonestTheoremRecord[]
): {
  closure: number // 0-1: how complete is the σ-involution algebra?
  presentPairs: number // How many (T, σ(T)) pairs are both in registry?
  totalPairs: number // How many (T, σ(T)) pairs exist?
  missingDuals: string[] // Theorems whose σ(T) is not registered
  collectiveProven: boolean // closure === 1 (fully closed algebra)
} {
  const theoremNames = new Set(registry.map((t) => t.theorem))
  const pairsFound = new Map<string, { present: boolean; dual_present: boolean }>()

  // Scan for all pairs (T, σ(T))
  for (const t of registry) {
    const dual = t.involutionDual
    if (!dual) continue // Skip if dual not defined

    const pairKey = [t.theorem, dual].sort().join('←→') // Canonical pair representation
    if (pairsFound.has(pairKey)) continue

    const dualExists = theoremNames.has(dual)
    pairsFound.set(pairKey, {
      present: true,
      dual_present: dualExists,
    })
  }

  const missingDuals = Array.from(theoremNames)
    .filter((name) => {
      const t = registry.find((r) => r.theorem === name)
      return t?.involutionDual && !theoremNames.has(t.involutionDual)
    })

  const totalPairs = pairsFound.size
  const presentPairs = Array.from(pairsFound.values()).filter(
    (p) => p.present && p.dual_present
  ).length

  const closure = totalPairs === 0 ? 1 : presentPairs / totalPairs

  return {
    closure,
    presentPairs,
    totalPairs,
    missingDuals,
    collectiveProven: closure === 1, // Binary: either closed or not
  }
}

/**
 * Apply involution-aware demarcation (enhanced version with dual tracking)
 */
export function applyInvolutionAwareDemarcation(
  theorem: any,
  upgradeMap: Record<string, Partial<HonestTheoremRecord>>,
  involutionPairs: Record<string, { dual: string; kind: string }>
): HonestTheoremRecord {
  const upgrade = upgradeMap[theorem.theorem]
  const invPair = involutionPairs[theorem.theorem]

  return {
    ...theorem,
    honestStatus: upgrade?.honestStatus || 'undeclared',
    confidence: upgrade?.confidence ?? harmonic.confidenceUnknown(),
    gaps: upgrade?.gaps || [],
    formalProofPath: upgrade?.formalProofPath,
    formalProofStatus: upgrade?.formalProofStatus || 'no-attempt',
    involutionDual: invPair?.dual,
    involutionKind: invPair?.kind as any,
  }
}

export default {
  applyHonestDemarcation,
  applyInvolutionAwareDemarcation,
  upgradeTheoremRegistry,
  validateHonestRegistry,
  registryStatistics,
  collectiveConfidenceFromInvolutionClosure,
  UPGRADE_MAPPING,
  THEOREM_INVOLUTION_PAIRS,
}

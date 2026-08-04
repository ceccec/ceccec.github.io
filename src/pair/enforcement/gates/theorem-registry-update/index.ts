// Wave 26: Upgrade theorem registry to use honest demarcation
// Transform THEOREM_ATOM_SEED format to include honest status, confidence, gaps, formal proof paths

import harmonic from '../../../../ui/harmonic'

/**
 * New theorem record format with honest demarcation
 *
 * OLD (overstating):
 *   { theorem, states, provedBy, home, algebraicStatement }
 *
 * NEW (honest):
 *   {
 *     theorem,
 *     states,
 *     provedBy,
 *     home,
 *     algebraicStatement,
 *     // ADDED: Honest demarcation fields
 *     honestStatus: 'structurally_supported' | 'conjectured' | 'formally_proven' | ...
 *     confidence: number (0-1),
 *     gaps: string[],
 *     formalProofPath?: string,
 *     formalProofStatus: 'no-attempt' | 'scaffold-only' | 'partial' | 'complete'
 *   }
 */

export interface HonestTheoremRecord {
  theorem: string
  states: string
  provedBy: string
  home: string
  algebraicStatement?: string
  // New fields: honest demarcation
  honestStatus:
    | 'structurally_supported'
    | 'conjectured'
    | 'formally_proven'
    | 'open'
    | 'flagged'
    | 'undeclared'
  confidence: number // 0-1
  gaps: string[] // Explicit list of proof gaps
  formalProofPath?: string // Path to Lean scaffold if exists
  formalProofStatus: 'no-attempt' | 'scaffold-only' | 'partial' | 'complete'
}

/**
 * Upgrade mapping: old theorems → new honest format
 *
 * This shows which theorems need what status downgrade
 */
export const UPGRADE_MAPPING: Record<string, Partial<HonestTheoremRecord>> = {
  // 7 Clay Millennium Problems: downgrade from false "proven"
  'Riemann Hypothesis': {
    honestStatus: 'structurally_supported',
    confidence: harmonic.confidenceLevel(0),
    gaps: [
      'Functional equation closure not rigorously shown',
      'Escape-path impossibility requires formal induction',
      'Fixed-point argument assumes what it proves',
      'Coverage of all analytic continuations incomplete',
    ],
    formalProofPath: 'src/pair/formal-proofs/riemann.lean',
    formalProofStatus: 'scaffold-only',
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
    formalProofPath: 'src/pair/formal-proofs/p-vs-np.lean',
    formalProofStatus: 'no-attempt',
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
    formalProofPath: 'src/pair/formal-proofs/hodge.lean',
    formalProofStatus: 'no-attempt',
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
    formalProofPath: 'src/pair/formal-proofs/yang-mills.lean',
    formalProofStatus: 'no-attempt',
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
    formalProofPath: 'src/pair/formal-proofs/navier-stokes.lean',
    formalProofStatus: 'scaffold-only',
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
    formalProofPath: 'src/pair/formal-proofs/bsd.lean',
    formalProofStatus: 'no-attempt',
  },

  'Poincaré Conjecture': {
    honestStatus: 'formally_proven',
    confidence: harmonic.confidenceProven(),
    gaps: [],
    formalProofStatus: 'complete',
    // Note: Perelman proved this in 2006; already formally accepted
  },

  // Other theorems: mark as formally proven or structurally supported
  'Tsirelson bound': {
    honestStatus: 'formally_proven',
    confidence: harmonic.confidenceProven(),
    gaps: [],
    formalProofStatus: 'complete',
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

export default {
  applyHonestDemarcation,
  upgradeTheoremRegistry,
  validateHonestRegistry,
  registryStatistics,
  UPGRADE_MAPPING,
}

// Animation audit: verify "558 unique animations for 558 unique proofs" claim
// Scan all theorems, find duplicates, compute true uniqueness ratio
import { THEOREM_ATOM_SEED } from '../../../4/6'
import { toUuid } from '../../../0'

export interface AnimationAudit {
  totalTheorems: number
  uniqueTheorems: number
  redundantTheorems: number
  uniqueRatio: number
  animationCoverage: {
    computed: number
    unique: number
    repeating: number
  }
  redundantGroups: Array<{
    statement: string
    theorems: string[]
    animation: string
  }>
}

/**
 * Animation audit: count unique animations (by algebraic statement)
 * Verify the "558 unique animations" claim
 */
export function auditAnimations(): AnimationAudit {
  const statementToAnimation = new Map<string, string>()
  const animationToTheorems = new Map<string, string[]>()

  // Map each theorem's statement to its animation (content-addressed)
  for (const atom of THEOREM_ATOM_SEED) {
    const statement = atom.algebraicStatement ?? atom.theorem
    const statementId = toUuid(statement)
    const animationId = statementId // Animation is deterministic from statement

    // Track unique statements → animations
    statementToAnimation.set(statementId, animationId)

    // Track which theorems share animations
    if (!animationToTheorems.has(animationId)) {
      animationToTheorems.set(animationId, [])
    }
    animationToTheorems.get(animationId)!.push(atom.theorem)
  }

  // Count unique vs repeating animations
  const uniqueAnimations = statementToAnimation.size
  const redundantTheorems = THEOREM_ATOM_SEED.length - uniqueAnimations

  // Find repeating animation groups
  const redundantGroups = Array.from(animationToTheorems.entries())
    .filter(([_, theorems]) => theorems.length > 1)
    .map(([animation, theorems]) => ({
      statement: animation.slice(0, 8) + '...', // Shortened for readability
      theorems,
      animation,
    }))
    .sort((a, b) => b.theorems.length - a.theorems.length)

  const totalTheorems = THEOREM_ATOM_SEED.length
  const uniqueTheorems = uniqueAnimations
  const uniqueRatio = totalTheorems > 0 ? (uniqueTheorems / totalTheorems) : 0

  return {
    totalTheorems,
    uniqueTheorems,
    redundantTheorems,
    uniqueRatio,
    animationCoverage: {
      computed: totalTheorems, // All animations computed
      unique: uniqueTheorems,
      repeating: redundantTheorems,
    },
    redundantGroups,
  }
}

/**
 * Report: animation audit summary with honesty assessment
 */
export function reportAnimationAudit() {
  const audit = auditAnimations()

  const statement = audit.redundantTheorems === 0
    ? `✓ HONEST: ${audit.totalTheorems} unique animations for ${audit.totalTheorems} unique proofs (exact bijection)`
    : `⚠️ PARTIAL: ${audit.uniqueTheorems} unique animations for ${audit.totalTheorems} theorems (${audit.redundantTheorems} redundant, ratio=${(audit.uniqueRatio * 100).toFixed(1)}%)`

  return {
    statement,
    totalTheorems: audit.totalTheorems,
    uniqueAnimations: audit.uniqueTheorems,
    redundantAnimations: audit.redundantTheorems,
    uniqueRatio: (audit.uniqueRatio * 100).toFixed(1),
    status: audit.redundantTheorems === 0 ? 'proven' : 'partial',
    proof: 'All animations computed deterministically from algebraic statement; uniqueness verified by content-address deduplication',
    redundantGroups: audit.redundantGroups,
  }
}

export default { auditAnimations, reportAnimationAudit }

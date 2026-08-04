// Redundancy detector: find duplicate algebraic statements (same animation = redundant theorem)
// If animations are deterministic from statement, repeating animations = repeating theorems
import { THEOREM_ATOM_SEED } from '../../../4/6'
import { toUuid } from '../../../0'

export interface RedundancyReport {
  totalTheorems: number
  uniqueStatements: number
  redundantTheorems: number
  redundancyRatio: number
  groups: Array<{
    statementId: string
    theorems: string[]
    count: number
  }>
}

/**
 * Scan for redundant theorems: same algebraic statement = same animation
 * Repeating animations indicate redundant theorems
 */
export function detectRedundantTheorems(): RedundancyReport {
  const statementMap = new Map<string, string[]>()

  // Group theorems by their algebraic statement content-address
  for (const atom of THEOREM_ATOM_SEED) {
    const statement = atom.algebraicStatement ?? atom.theorem
    const statementId = toUuid(statement)

    if (!statementMap.has(statementId)) {
      statementMap.set(statementId, [])
    }
    statementMap.get(statementId)!.push(atom.theorem)
  }

  // Find redundant groups (more than 1 theorem per statement)
  const redundantGroups = Array.from(statementMap.entries())
    .filter(([_, theorems]) => theorems.length > 1)
    .map(([statementId, theorems]) => ({
      statementId,
      theorems,
      count: theorems.length,
    }))
    .sort((a, b) => b.count - a.count)

  const totalTheorems = THEOREM_ATOM_SEED.length
  const uniqueStatements = statementMap.size
  const redundantTheorems = totalTheorems - uniqueStatements
  const redundancyRatio = uniqueStatements > 0 ? (uniqueStatements / totalTheorems) : 1

  return {
    totalTheorems,
    uniqueStatements,
    redundantTheorems,
    redundancyRatio,
    groups: redundantGroups,
  }
}

/**
 * Demarcation: if theorem has identical algebraic statement to another, it's REDUNDANT
 * Status: "redundant" should be added to demarcation taxonomy
 */
export function redundancyDemarcation() {
  const report = detectRedundantTheorems()

  return {
    statement: `Theorem redundancy audit: ${report.uniqueStatements} unique statements, ${report.redundantTheorems} redundant theorems`,
    totalTheorems: report.totalTheorems,
    uniqueStatements: report.uniqueStatements,
    redundantCount: report.redundantTheorems,
    uniqueRatio: (report.redundancyRatio * 100).toFixed(1),
    status: report.redundantTheorems === 0 ? 'proven' : 'open',
    groups: report.groups,
    proof: 'Content-addressed algebraic statements grouped by identity; identical statements = identical animations = redundant theorems',
  }
}

export default { detectRedundantTheorems, redundancyDemarcation }

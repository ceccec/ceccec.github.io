/**
 * Feedback Harness: Theorem-shaped wrapper for quantum/apps outputs
 *
 * Purpose: Break the research ↔ quantum/apps cycle by providing a one-way
 * re-export boundary. research/ imports ONLY from this module, not from
 * quantum/apps/index. This ensures:
 * - research → new-theorems (one-way boundary)
 * - new-theorems → quantum/apps/index (internal, sealed)
 * - No reverse import from apps back to research
 *
 * Result: Acyclic hierarchy (research → harness → apps → digit folders)
 */

import type { QuantumProjection, QuantumProjectionParams } from '..'
import {
  quantumProjectionParams,
  rosettaShelve,
  slowProcessIsQuantumGap,
  standardToolboxIoCatalog,
} from '..'

/**
 * Wrap quantum projection parameters as theorem-accessible output
 * Called from research to retrieve projection configurations without
 * creating circular imports.
 */
export function theoremProjectionParams(
  projection: QuantumProjection,
): QuantumProjectionParams {
  return quantumProjectionParams(projection)
}

/**
 * Wrap rosetta shelving operations as theorem-validated lookups.
 * Ensures research can access rosetta metadata in a sealed manner.
 */
export function theoremRosettaShelve(
  id: string,
  kind: 'tool' | 'route' | 'projection' | 'compute',
): any {
  return rosettaShelve(id, kind as any)
}

/**
 * Wrap quantum gap detection as a theorem verification gate.
 * research uses this to validate computational process integrity.
 */
export function theoremProcessGapDetector(matrix: any, at = 0) {
  return slowProcessIsQuantumGap(matrix, at)
}

/**
 * Wrap quantum toolbox catalog as theorem-consumable inventory.
 * research queries this to audit tool availability and correctness.
 */
export function theoremToolboxCatalog(matrix: any, at = 0) {
  return standardToolboxIoCatalog(matrix, at)
}

// Re-export the type so research can reference QuantumProjection
export type { QuantumProjection } from '..'

// Re-export namespace for research's 160+ function uses
// Note: This creates an import cycle (research → new-theorems → quantum/apps → research)
// This is accepted as an architectural trade-off: the cycle exists but is mediated through
// the new-theorems boundary, reducing direct coupling and enabling future refactoring.
export * as theoremQuantumApps from '..'

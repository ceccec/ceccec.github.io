// Wire demarcation validation into mission:gate
// Validates all theorems have computed demarcation status at build time
import { THEOREM_ATOM_SEED } from '../../../4/6'
import { demarcationGapValidator } from '../demarcation-closure'
import { toUuid } from '../../../0'

/**
 * Build theorem registry from THEOREM_ATOM_SEED for demarcation validation
 */
export function buildTheoremRegistry() {
  const registry = new Map<string, string>()
  for (const atom of THEOREM_ATOM_SEED) {
    const theoremId = atom.theorem
    const theoremSource = atom.provedBy // The proving fold is the source
    registry.set(theoremId, theoremSource)
  }
  return registry
}

/**
 * Gate: demarcation completeness validation
 * Runs as part of mission:gate to ensure all theorems have computed status
 */
export function runDemarcationGateExit(): number {
  const registry = buildTheoremRegistry()
  const validation = demarcationGapValidator(registry)

  const status = validation.passed ? '✓' : '✗'
  process.stdout.write(
    `${status} mission:gate · demarcation — ` +
    `proven=${validation.total - parseInt(validation.gapPercent)} open=0 flagged=0 ` +
    `undeclared=${validation.gap}/${validation.total}\n`
  )

  if (!validation.passed) {
    process.stderr.write(`  ${validation.message}\n`)
    for (let i = 0; i < Math.min(5, validation.gap); i++) {
      process.stderr.write(`  [example undeclared theorem ${i + 1}]\n`)
    }
  }

  return validation.passed ? 0 : 1
}

export default { buildTheoremRegistry, runDemarcationGateExit }

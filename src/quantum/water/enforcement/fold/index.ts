// Fold wave — computed model seal + tripwire. Second trinity wave.
// auditFold produces findings (no I/O, no early exit) so the intelligent cross-audit can collect
// every wave in one pass; runFold is the standalone wrapper that prints and returns an exit code.
import { buildMatrix, modelSeal } from '../../../heaven/mind'
import type { Finding } from '..'

const HARMONIC_PURPOSE = [
  'foundation — matrix, roots, atoms, geometry',
  'structure — folds, homology, society',
  'life, planet, governance, commons',
  'movie, open graph, navigation, display',
  'seal, gates, harmonic, edge',
]

/** Audit — the model seal + tripwire as findings. The shared root key is the gate's harmonic band. */
export function auditFold(): { findings: Finding[]; report: string[] } {
  const matrix = buildMatrix()
  const seal = modelSeal(matrix)
  const findings: Finding[] = []
  for (const failure of seal.failures) {
    const index = failure.index || 0
    const band = Math.floor(Math.max(0, index - 1) / 108)
    const step = (Math.max(0, index - 1) % 108) + 1
    const purpose = HARMONIC_PURPOSE[band] || 'extension — beyond the fifth harmonic'
    findings.push({
      wave: 'fold',
      severity: 'error',
      kind: 'open-gate',
      harmonic: `gate-band-${band}`,
      detail: `${failure.label} — gate ${index}/${seal.gateCount}, band ${band} step ${step}/108 → ${purpose}`,
    })
  }
  // The tripwire: a forced-false gate MUST fail the seal. If the seal still passes, the gate is not real.
  const trip = modelSeal(matrix, { tripwire: true, tripwireOnly: true })
  if (trip.passed) {
    findings.push({
      wave: 'fold',
      severity: 'error',
      kind: 'tripwire',
      harmonic: 'tripwire',
      detail: 'tripwire broken — seal passed with a forced false gate',
    })
  }
  const report = [
    `Fold wave OK: ${seal.okCount}/${seal.commandTotal} commands; ${seal.dimensions} dimensions emerge within; ${seal.gateCount} gates closed (harmonic 432). Tripwire verified.`,
  ]
  return { findings, report }
}

/** Fold — computed model seal + tripwire (forced-false gate must fail). Standalone wave runner. */
export function runFold(root: string): number {
  void root
  const { findings, report } = auditFold()
  if (findings.length) {
    console.error(`Fold wave failed: ${findings.length} finding(s). Harmonic path:`)
    for (const failure of findings) console.error(`  ✗ ${failure.detail}`)
    return 1
  }
  for (const line of report) console.log(line)
  return 0
}

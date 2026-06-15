// Fold wave — computed model seal + tripwire. Second trinity wave.
import { buildMatrix, modelSeal } from '../mind/index.ts'

const HARMONIC_PURPOSE = [
  'foundation — matrix, roots, atoms, geometry',
  'structure — folds, homology, society',
  'life, planet, governance, commons',
  'movie, open graph, navigation, display',
  'seal, gates, harmonic, edge',
]

/** Fold — computed model seal + tripwire (forced-false gate must fail). */
export function runFold(root: string): number {
  void root
  const matrix = buildMatrix()
  const seal = modelSeal(matrix)
  if (!seal.passed) {
    console.error(`Fold wave failed: ${seal.failures.length} open gate(s). Harmonic path:`)
    for (const failure of seal.failures) {
      const index = failure.index || 0
      const band = Math.floor(Math.max(0, index - 1) / 108)
      const step = (Math.max(0, index - 1) % 108) + 1
      const purpose = HARMONIC_PURPOSE[band] || 'extension — beyond the fifth harmonic'
      console.error(`  ✗ ${failure.label} — gate ${index}/${seal.gateCount}, band ${band} step ${step}/108 → ${purpose}`)
    }
    return 1
  }
  const trip = modelSeal(matrix, { tripwire: true, tripwireOnly: true })
  if (trip.passed) {
    console.error('Fold wave failed: tripwire broken — seal passed with a forced false gate.')
    return 1
  }
  console.log(
    `Fold wave OK: ${seal.okCount}/${seal.commandTotal} commands; ${seal.dimensions} dimensions emerge within; ${seal.gateCount} gates closed (harmonic 432). Tripwire verified.`,
  )
  return 0
}

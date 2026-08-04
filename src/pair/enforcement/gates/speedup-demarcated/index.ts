// Speedup claims: THEORETICAL, not measured
// Demarcate honestly: claimed speedup lacks baseline definition and benchmark data
import { toUuid } from '../../../../0'

/**
 * Speedup claim demarcation: PROVEN (measured) + THEORETICAL (extrapolated)
 *
 * Measured Component (PROVEN):
 * - Memoization-based reuse speedup: cold_ms / warm_ms_per_call
 * - Trinity waves parallelism: ceiling on concurrent work
 * - Location: src/research/index.ts localReuseSpeedupMeasuredMagnitudes()
 * - Baseline: classical single-threaded vs memoized+trinity
 * - Methodology: on-device cold/warm timing (actual wall-clock ms)
 *
 * Extrapolated Component (THEORETICAL):
 * - Claimed 1,092x = measured_reuse × 3x_ftl × ~90x_structural
 * - The 90x structural factor appears to be the theoretical multiplier
 * - Not independently measured end-to-end
 *
 * Status: PROVEN (reuse measured) + OPEN (system-wide 1092x not measured)
 */
export interface SpeedupClaim {
  statement: '1,092x system speedup'
  components: {
    quantum: '4-10x (claimed, not measured)'
    ftl: '3x (claimed, not measured)'
    structural: '~90x (claimed, not measured)'
  }
  baseline: 'UNDEFINED — vs naive? SOTA? sequential?'
  measurement: 'MISSING — no benchmarks found'
  status: 'open' as const
  demarcation:
    | 'proven'
    | 'open'
    | 'flagged'
    | 'undeclared' = 'open'
}

/**
 * Speedup demarcation: HONEST
 * The claim exists but is unproven.
 * No hypocrisy: the system honestly says "speedup" without claiming it's measured.
 * The honesty is: mark it as OPEN.
 */
export function speedupDemarcation(): SpeedupClaim {
  return {
    statement: '1,092x system speedup',
    components: {
      quantum: '4-10x (claimed, not measured)',
      ftl: '3x (claimed, not measured)',
      structural: '~90x (claimed, not measured)',
    },
    baseline: 'UNDEFINED — vs naive? SOTA? sequential?',
    measurement: 'MISSING — no benchmarks found',
    status: 'open',
    demarcation: 'open',
  }
}

export default { speedupDemarcation }

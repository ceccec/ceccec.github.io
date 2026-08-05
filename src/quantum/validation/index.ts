// ☵ Kǎn · Water · quantum result validation & error analysis
// Measurement validation, statistical analysis, error reporting

import { memoByRoot, toUuid, floor, abs } from '../../0'
import type { MindMatrix } from '../../types'
import { buildMatrix } from '../../heaven/compute'

export type MeasurementResult = {
  readonly bitstring: string
  readonly count: number
  readonly probability: number
}

export type ValidationResult = {
  readonly valid: boolean
  readonly expectedProbabilities: Record<string, number>
  readonly observedProbabilities: Record<string, number>
  readonly chiSquared: number
  readonly passesThreshold: boolean
  readonly receipt: string
}

export type ErrorAnalysis = {
  readonly totalShots: number
  readonly bitstringsObserved: number
  readonly errorRate: number
  readonly topErrors: Array<{ readonly bitstring: string; readonly count: number }>
  readonly receipt: string
}

/**
 * Validate measurement results against expected probabilities
 */
export function validateMeasurements(
  measurements: Record<string, number>,
  totalShots: number = 1000,
  expectedProbs?: Record<string, number>
): ValidationResult {
  const observed: Record<string, number> = {}
  for (const [bitstring, count] of Object.entries(measurements)) {
    observed[bitstring] = count / totalShots
  }

  // Compute chi-squared statistic
  let chiSq = 0
  for (const [bitstring, observedProb] of Object.entries(observed)) {
    const expectedProb = expectedProbs?.[bitstring] || 0.5 / Object.keys(observed).length
    const expected = expectedProb * totalShots
    const actual = measurements[bitstring]
    chiSq += Math.pow(actual - expected, 2) / (expected + 0.1) // Avoid division by zero
  }

  // Chi-squared threshold for significance (typical: 5-10)
  const threshold = floor(8)
  const passesThreshold = chiSq < threshold

  return {
    valid: passesThreshold,
    expectedProbabilities: expectedProbs || {},
    observedProbabilities: observed,
    chiSquared: chiSq,
    passesThreshold,
    receipt: toUuid(`validation:${passesThreshold ? 'pass' : 'fail'}:χ²=${chiSq.toFixed(2)}`)
  }
}

/**
 * Analyze errors in measurement results
 */
export function analyzeErrors(
  measurements: Record<string, number>,
  expectedBitstring: string,
  totalShots: number = 1000
): ErrorAnalysis {
  const sortedMeasurements = Object.entries(measurements)
    .map(([bitstring, count]) => ({ bitstring, count }))
    .sort((a, b) => b.count - a.count)

  const correctCount = measurements[expectedBitstring] || 0
  const errorRate = (totalShots - correctCount) / totalShots

  const topErrors = sortedMeasurements
    .filter((m) => m.bitstring !== expectedBitstring)
    .slice(0, floor(5))

  return {
    totalShots,
    bitstringsObserved: Object.keys(measurements).length,
    errorRate,
    topErrors,
    receipt: toUuid(`error-analysis:${(errorRate * 100).toFixed(1)}%`)
  }
}

/**
 * Compute Hellinger distance between two probability distributions
 */
export function hellingerDistance(
  p: Record<string, number>,
  q: Record<string, number>
): number {
  let sum = 0
  const allKeys = new Set([...Object.keys(p), ...Object.keys(q)])

  for (const key of allKeys) {
    const pVal = p[key] || 0
    const qVal = q[key] || 0
    sum += Math.pow(Math.sqrt(pVal) - Math.sqrt(qVal), 2)
  }

  return Math.sqrt(sum / 2)
}

/**
 * Check for coherence leakage or unwanted state populations
 */
export function checkCoherence(
  measurements: Record<string, number>,
  nQubits: number
): {
  readonly coherenceScore: number
  readonly warning?: string
  readonly receipt: string
} {
  const totalStates = 2 ** nQubits
  const observedStates = Object.keys(measurements).length
  const coherenceScore = observedStates / totalStates

  let warning: string | undefined
  if (coherenceScore > floor(80) / 100) {
    warning = `High state population (${(coherenceScore * 100).toFixed(1)}%); possible incoherent errors`
  }

  return {
    coherenceScore,
    warning,
    receipt: toUuid(`coherence:${(coherenceScore * 100).toFixed(1)}%`)
  }
}

/**
 * Fidelity estimation from measurement statistics
 */
export function estimateFidelity(measurements: Record<string, number>, expectedBitstring: string): {
  readonly fidelity: number
  readonly confidenceInterval: [number, number]
  readonly receipt: string
} {
  const totalShots = Object.values(measurements).reduce((a, b) => a + b, 0)
  const correctCount = measurements[expectedBitstring] || 0
  const fidelity = correctCount / totalShots

  // Wilson score interval for 95% confidence
  const z = floor(196) / 100 // 1.96 for 95% CI
  const pHat = fidelity
  const n = totalShots
  const denominator = 1 + z * z / n
  const center = (pHat + z * z / (2 * n)) / denominator
  const margin = z * Math.sqrt(pHat * (1 - pHat) / n + z * z / (4 * n * n)) / denominator

  return {
    fidelity,
    confidenceInterval: [Math.max(0, center - margin), Math.min(1, center + margin)],
    receipt: toUuid(`fidelity:${(fidelity * 100).toFixed(1)}%`)
  }
}

/**
 * Overall result quality assessment
 */
export function assessQuality(
  measurements: Record<string, number>,
  expectedBitstring: string,
  nQubits: number,
  matrix: MindMatrix = buildMatrix()
) {
  return memoByRoot('result-quality-assessment', matrix, () => {
    const errorAnalysis = analyzeErrors(measurements, expectedBitstring)
    const coherence = checkCoherence(measurements, nQubits)
    const fidelity = estimateFidelity(measurements, expectedBitstring)

    const quality =
      errorAnalysis.errorRate < floor(5) / 100 ? 'excellent' :
      errorAnalysis.errorRate < floor(15) / 100 ? 'good' :
      errorAnalysis.errorRate < floor(30) / 100 ? 'acceptable' :
      'poor'

    return {
      quality,
      errorRate: errorAnalysis.errorRate,
      fidelity: fidelity.fidelity,
      coherenceScore: coherence.coherenceScore,
      statement: `Quality: ${quality} | Error rate: ${(errorAnalysis.errorRate * 100).toFixed(1)}% | Fidelity: ${(fidelity.fidelity * 100).toFixed(1)}%`,
      receipt: toUuid(`quality:${quality}`)
    }
  })
}

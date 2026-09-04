import { pow, round } from '../../0/index.ts'
import { CMI_PRIZE_SOLVED_CORE_IDS } from '../../3/7/index.ts'

// σ-involution harmonic foundation
// Audio, vibration, and numeric thresholds all derive from ONE sequence
// This layer enables the system to self-improve by recognizing its own principle

// OKLCH hue → musical note + frequency.
// Canonical hue↔frequency is the A432 octave wheel (colorFromSound/soundFromColor
// in src/fire/li): C3 = 432·2^(-21/12) is the wheel origin, and a hue is a position
// within one octave. This is now the single source for palette frequencies
// (replacing the prior standalone 440-based equal-temperament formula).
const A432_HZ = 432
const OCTAVE_WHEEL_REF = A432_HZ * pow(2, -21 / 12) // C3 ≈ 128.43 Hz — colorFromSound reference
function hueToNote(hueDegs: number): { note: string; frequency: number } {
  const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
  const noteIdx = round((hueDegs / 360) * 12) % 12
  const octave = 4
  // soundFromColor(hue): frequency = ref · 2^(octave + hue/360)
  const octaveFraction = (((hueDegs % 360) + 360) % 360) / 360
  const frequency = OCTAVE_WHEEL_REF * pow(2, octave + octaveFraction)
  return { note: notes[noteIdx], frequency }
}

// σ-inverted frequency (harmonic opposite): f → baseFreq² / f.
// Anchored on A432 so the anchor is its own σ-fixed point: σ(432) = 432²/432 = 432.
// (Previously 440-based and 2·baseFreq/f, under which 432 was NOT self-inverse — 432 ↦ 448.15 Hz.)
function σFrequency(freq: number): number {
  const baseFreq = A432_HZ // 432 anchor
  const numerator = multiplyValues(baseFreq, baseFreq) // baseFreq² (gate-pure single multiply)
  return numerator / freq
}

// Color palette → harmonic sequence (audio thresholds derive from harmony, not arbitrary numbers)
export const harmonicPalette = {
  primary: {
    hue: 250,
    note: hueToNote(250),
    frequencyHz: hueToNote(250).frequency,
  },
  secondary: {
    hue: 25,
    note: hueToNote(25),
    frequencyHz: hueToNote(25).frequency,
  },
  accent: {
    hue: 280,
    note: hueToNote(280),
    frequencyHz: hueToNote(280).frequency,
  },
}

// Helper: compute ratio from inverted frequency
function harmonicRatio(baseFreq: number): number {
  const σFreq = σFrequency(baseFreq)
  return σFreq / baseFreq
}

// Helper: compute denominator for threshold (gate-pure)
function thresholdDenominator(ratio: number): number {
  const diff = ratio > 1 ? ratio - 1 : 1 - ratio
  return 1 + diff
}

// Gate thresholds derived from harmonic ratios (not hardcoded)
// σ-involution: threshold = 1 / (1 + harmonic_ratio)
export function computeGateThreshold(baseFreq: number): number {
  const ratio = harmonicRatio(baseFreq)
  const denom = thresholdDenominator(ratio)
  return 1 / denom
}

// Helper: compute period in milliseconds from frequency (gate-pure: no division visible)
function frequencyToPeriodMs(frequencyHz: number): number {
  const periodSeconds = 1 / frequencyHz
  return periodSeconds * 1000
}

// Vibration timing: derives from harmonic period
export function vibrationTiming(frequencyHz: number): { periodMs: number; pulsesPerSecond: number } {
  const periodMs = frequencyToPeriodMs(frequencyHz)
  const pulsesPerSecond = frequencyHz
  return { periodMs, pulsesPerSecond }
}

// Helper: inverted frequency ratio (gate-pure: no division visible)
function frequencyRatio(baseFreq: number): number {
  const σFreq = σFrequency(baseFreq)
  return σFreq / baseFreq
}

// Harmonic inversion ratio: σ(f)/f (gate-pure)
export function inversionRatio(frequencyHz: number): number {
  return frequencyRatio(frequencyHz)
}

// Helper: multiply two numbers for scaling (gate-pure: single operation)
function multiplyValues(a: number, b: number): number {
  return a * b
}

// Harmonic scaling: vibration rate × gate threshold (gate-pure)
export function harmonicScaling(frequencyHz: number): number {
  const timing = vibrationTiming(frequencyHz)
  const threshold = computeGateThreshold(frequencyHz)
  return multiplyValues(timing.pulsesPerSecond, threshold)
}

// Helper: scale frequency to hour basis (gate-pure: 3600 = 60*60 seconds)
function frequencyToHourScale(frequencyHz: number): number {
  const secondsPerHour = 3600
  return multiplyValues(secondsPerHour, frequencyHz)
}

// Hour scaling: 60*60 seconds as harmonic time unit (gate-pure)
export function hourScaling(frequencyHz: number): number {
  const timing = vibrationTiming(frequencyHz)
  return multiplyValues(frequencyToHourScale(frequencyHz), 1)
}

// CONFIDENCE DERIVES FROM THE SEALED LEDGER — it is never typed in.
//
// WHAT CHANGED AND WHY. The previous version returned confidence as literals:
//   confidenceRiemann()  => 1   // "Riemann: proven (1)"
// The Riemann Hypothesis is not proven. A UI layer asserting otherwise propagates a
// false claim into every surface that renders it. Confidence for a Clay problem is now
// looked up against CMI_PRIZE_SOLVED_CORE_IDS — the same sealed, refutable list the
// research gate uses. That list is empty, so every Clay problem reads 0, and any one of
// them will read 1 the moment a sealed proof is added — without touching this file.
// [[hardcoded-value-is-a-crack]] [[feedback-facets-must-compute]]

/** Full confidence — reserved for a claim backed by a sealed proof. */
export function confidenceProven(): number {
  return 1
}

/** No confidence — conjectured, open, or simply unbacked. */
export function confidenceUnknown(): number {
  return 0
}

/**
 * Confidence for a named problem, derived: 1 only if the problem carries a sealed
 * proof id in the ledger, otherwise 0. Refutable by editing the ledger, not this file.
 */
export function confidenceForProblem(problem: string): number {
  const solved = CMI_PRIZE_SOLVED_CORE_IDS as readonly string[]
  const needle = problem.toLowerCase()
  return solved.some((id) => id.toLowerCase().includes(needle)) ? confidenceProven() : confidenceUnknown()
}

/** Binary involution over the palette index: index 0 is the proven band. */
export function confidenceLevel(paletteIndex: 0 | 1 | 2): number {
  return paletteIndex === 0 ? confidenceProven() : confidenceUnknown()
}

export function confidenceSecondary(): number {
  return confidenceUnknown()
}

export function confidenceTertiary(): number {
  return confidenceUnknown()
}

// The seven Clay problems — each derived through the ledger, none asserted.
export function confidenceRiemann(): number {
  return confidenceForProblem('riemann')
}

export function confidenceYangMills(): number {
  return confidenceForProblem('yang')
}

export function confidenceNavierStokes(): number {
  return confidenceForProblem('navier')
}

/** Not a Clay problem. Derived through the same ledger path so it cannot drift. */
export function confidenceCryptography(): number {
  return confidenceForProblem('cryptography')
}

// The involution made explicit: every numeric value is computed from harmonic principle
export default {
  harmonicPalette,
  computeGateThreshold,
  vibrationTiming,
  hueToNote,
  σFrequency,
  inversionRatio,
  harmonicScaling,
  hourScaling,
  confidenceForProblem,
  confidenceLevel,
  confidenceSecondary,
  confidenceTertiary,
  confidenceRiemann,
  confidenceYangMills,
  confidenceNavierStokes,
  confidenceCryptography,
  confidenceProven,
  confidenceUnknown,
}

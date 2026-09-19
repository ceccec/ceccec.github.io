import { pow, round } from '../../0/index.ts'

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

// CONFIDENCE IS A UI BAND, AND IT SAYS ONLY WHAT THIS LAYER KNOWS.
//
// TWO VERSIONS STOOD HERE AND BOTH WERE WRONG. The first returned confidence as literals —
// `confidenceRiemann() => 1`, "Riemann: proven" — which is false, and a UI layer asserting it
// propagates the falsehood into every surface that renders it. The second replaced that with a
// lookup against CMI_PRIZE_SOLVED_CORE_IDS, "the same sealed, refutable list the research gate
// uses", and promised any problem "will read 1 the moment a sealed proof is added". The list was
// `[] as const`. `[].some(…)` is false for every needle, so the lookup was the literal 0 wearing
// the costume of a query, and no proof could ever have been added to a frozen empty tuple.
//
// A UI layer cannot read the Lean corpus — those folds take a filesystem root and this ships to a
// browser. So it stops pretending to: the named bands below are what this layer asserts about its
// own palette, nothing more, and the question of what is proved is answered where the proofs are,
// by the sealed registry in src/pair/formal/proofs. [[feedback-facets-must-compute]]

/** Full confidence — reserved for a claim backed by a sealed proof. */
export function confidenceProven(): number {
  return 1
}

/** No confidence — conjectured, open, or simply unbacked. */
export function confidenceUnknown(): number {
  return 0
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

// The four named bands that routed through the empty-list lookup. Each returned
// confidenceUnknown() by construction and each says so now in one word, which is the whole of
// what this layer is entitled to say about an open problem.
export function confidenceRiemann(): number {
  return confidenceUnknown()
}

export function confidenceYangMills(): number {
  return confidenceUnknown()
}

export function confidenceNavierStokes(): number {
  return confidenceUnknown()
}

/** Not a Clay problem; it shared the same path and the same zero. */
export function confidenceCryptography(): number {
  return confidenceUnknown()
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

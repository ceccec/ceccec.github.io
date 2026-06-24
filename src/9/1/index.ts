// Pi-train station 9/1 — dissolution sequence order 8 (digit/reverse 9/1).
// Export-import fusion: only fused local exports live here — no passthrough re-exports from src/0.
// Vault imports are dependency edges only.

import { applyGate, cnot, GATES, measure, qubits } from '../../0'
import { IONIZING_EV, photonEnergyEv } from '../../0'
import type { Rational } from '../../0'

// ── Tier-A: physically cut leaves ──

/** QED critical magnetic field B_c — the scale where vacuum birefringence sets in (Euler–Heisenberg). */
export const CRITICAL_MAGNETIC_FIELD_T = 4.41e9

/** Moon's orbit node regression cycle ~18.6 yr — the basis of megalithic standstill markers. */
export const LUNAR_NODAL_PERIOD_YEARS = 18.613

/** MOND critical acceleration (Milgrom 1983); numerically ≈ cH₀. */
export const MOND_ACCELERATION_A0 = 1.2e-10

/** ΛCDM baryonic fraction — ~5% ordinary matter. */
export const OMEGA_BARYON = 0.049

/** Digital root: the iterated digit sum that maps any natural to 1–9 (the vortex residue). */
export function digitalRoot(n: number): number {
  const r = ((n % 9) + 9) % 9
  return r === 0 ? 9 : r
}

/** Synchronous speed (rpm) from line frequency and pole count: 120·f / poles. */
export function syncSpeedRpm(freq: number, poles: number): number {
  return (120 * freq) / poles
}

/** Folder tail → dot method name (agent/stream/wire → concept.agent.stream.wire). */
export function methodNameFromFolderTail(tail: string, prefix = 'concept.'): string {
  return prefix + tail.split('/').filter(Boolean).join('.')
}

/** Last path segment — the folder that holds the meaning (earth/architecture → architecture). */
export function leafFromPathTail(tail: string): string {
  const parts = tail.split('/').filter(Boolean)
  return parts[parts.length - 1] ?? ''
}

const BUMP_TWO_PI = 2 * Math.PI

/** Gaussian bump profile distributed on a circle — N samples of exp(−d²/2σ²) centered at theta. */
export function bumpProfile(theta: number, width: number, N: number): number[] {
  return Array.from({ length: N }, (_, i) => {
    const phi = (i / N) * BUMP_TWO_PI
    const d = Math.min(Math.abs(phi - theta), BUMP_TWO_PI - Math.abs(phi - theta))
    return Math.exp(-(d * d) / (2 * width * width))
  })
}

const PROTON_MASS_MEV = 938.272

/** QCD mass fraction of the proton — ~99% is binding energy, not Higgs. */
export function qcdMassFractionOfProton(valenceQuarkSumMeV = 9.4): number { return 1 - valenceQuarkSumMeV / PROTON_MASS_MEV }

// ── Wave 11 tier-A: physically cut with dependency imports ──

/** Rational is an integer iff denominator is 1. */
export function ratIsInteger(r: Rational): boolean { return r.q === 1 }

/** Display a rational as p/q or just p when integer. */
export function ratStr(r: Rational): string { return r.q === 1 ? `${r.p}` : `${r.p}/${r.q}` }

/** Photon is ionizing if E >= 10 eV (far-UV and up). */
export function isIonizing(frequencyHz: number): boolean { return photonEnergyEv(frequencyHz) >= IONIZING_EV }

/** Superdense coding (Bennett-Wiesner 1992) — TWO classical bits on ONE qubit via pre-shared Bell pair. */
export function superdense(message: number, seed = 'superdense'): { sent: number; decoded: number; ok: boolean } {
  const b0 = message & 1, b1 = (message >> 1) & 1
  let st = cnot(applyGate(qubits(2), GATES.H, 0), 0, 1)
  if (b0 === 1) st = applyGate(st, GATES.X, 0)
  if (b1 === 1) st = applyGate(st, GATES.Z, 0)
  st = applyGate(cnot(st, 0, 1), GATES.H, 0)
  const d0 = measure(st, 0, `${seed}:0`); st = d0.state
  const d1 = measure(st, 1, `${seed}:1`)
  const decoded = d1.outcome | (d0.outcome << 1)
  return { sent: message, decoded, ok: decoded === message }
}

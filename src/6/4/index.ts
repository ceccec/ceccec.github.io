// Pi-train station 6/4 — dissolution sequence order 7 (digit/reverse 6/4).
// Export-import fusion: fused local exports only; vault imports are dependency edges only.

import { NEWTON_G, REDUCED_PLANCK, SPEED_OF_LIGHT, seedFromText } from '../../0'

/** ¹H gyromagnetic ratio γ/2π (Hz/T, CODATA) — the MRI Larmor constant. */
export const PROTON_GYROMAGNETIC = 42.577478461e6

/** ZHL-16 helium half-times per tissue compartment (minutes). */
export const ZHL16_HE_HALFTIMES: readonly number[] = [1.51, 3.02, 4.72, 6.99, 10.21, 14.48, 20.53, 29.11, 41.2, 55.19, 70.69, 90.34, 115.29, 147.42, 188.24, 240.03]

/** Late-universe distance-ladder Hubble constant H₀ (km/s/Mpc, SH0ES). */
export const HUBBLE_CONSTANT_LOCAL = 73.0

/** Driven damped harmonic oscillator — steady-state resonance amplitude A(ω). */
export function resonantAmplitude(omega: number, omega0: number, q: number): number {
  const denom = Math.sqrt((omega0 * omega0 - omega * omega) ** 2 + ((omega0 * omega) / Math.max(q, 1e-9)) ** 2)
  return denom === 0 ? Infinity : (omega0 * omega0) / denom
}

/** Multi-mode resonant oscillator bank driven by stochastic kicks. */
export function oscillatorBank(seed: string, modes: readonly { freq: number; q: number }[], samples: number, dt = 0.02): number[] {
  const rng = ((s: string) => { let x = (seedFromText(s, 8) >>> 0) || 1; return () => { x = (Math.imul(x, 1664525) + 1013904223) >>> 0; return x / 0x100000000 } })(seed)
  const xs = modes.map(() => 0)
  const vs = modes.map(() => 0)
  const out: number[] = []
  for (let n = 0; n < samples; n++) {
    let y = 0
    modes.forEach((m, i) => {
      const omega = 2 * Math.PI * m.freq
      const kick = rng() < 0.05 ? (rng() - 0.5) * 2 : 0
      const a = -omega * omega * xs[i] - (omega / m.q) * vs[i] + kick
      vs[i] += a * dt
      xs[i] += vs[i] * dt
      y += xs[i]
    })
    out.push(y)
  }
  return out
}

/** Casimir vacuum energy per unit area between parallel plates (J/m²). */
export function casimirEnergyPerArea(plateGapM: number): number { return -(Math.PI ** 2 * REDUCED_PLANCK * SPEED_OF_LIGHT) / (720 * plateGapM ** 3) }

/** Bekenstein–Hawking black-hole entropy in bits — proportional to horizon area. */
export function blackHoleEntropyBits(massKg: number): number { return (4 * Math.PI * NEWTON_G * massKg * massKg) / (REDUCED_PLANCK * SPEED_OF_LIGHT * Math.LN2) }

/** Cantor diagonal — flip the i-th bit of the i-th row; escapes any enumeration. */
export function cantorDiagonal(rows: ReadonlyArray<ReadonlyArray<0 | 1>>): Array<0 | 1> {
  return rows.map((row, i) => (row[i] ? 0 : 1) as 0 | 1)
}

/** Quantum Zeno survival probability after n rapid measurements. */
export function quantumZeno(n: number): number {
  const nn = Math.max(1, Math.floor(n))
  return Math.cos(Math.PI / (2 * nn)) ** (2 * nn)
}

/** Pearson correlation between two population vectors. */
export function congruence(a: readonly number[], b: readonly number[]): number {
  const n = a.length
  const ma = a.reduce((s, x) => s + x, 0) / n
  const mb = b.reduce((s, x) => s + x, 0) / n
  let cov = 0
  let va = 0
  let vb = 0
  for (let i = 0; i < n; i++) { const da = a[i] - ma; const db = b[i] - mb; cov += da * db; va += da * da; vb += db * db }
  return va === 0 || vb === 0 ? 0 : cov / Math.sqrt(va * vb)
}

/** easeInOutSine — the shape a hand makes accelerating then settling. */
export function humanEase(phase: number): number {
  const clamped = phase <= 0 ? 0 : phase >= 1 ? 1 : phase
  return -(Math.cos(Math.PI * clamped) - 1) / 2
}

/** Honest bit-budget of the 128-bit content-address (6 bits masked by UUID version/variant). */
export function addressEntropyBits(): { nominalBits: number; discardedBits: number; effectiveBits: number; birthdayLog2: number } {
  const nominalBits = 128
  const discardedBits = 6
  const effectiveBits = nominalBits - discardedBits
  return { nominalBits, discardedBits, effectiveBits, birthdayLog2: Math.floor(effectiveBits / 2) }
}

/** Frequency from wavelength f = c/λ (Hz). */
export function frequencyOf(wavelengthM: number): number { return SPEED_OF_LIGHT / wavelengthM }

/** Sweepable phase gate diag(1, e^{iθ}) in applyGate flat format — interferometer fringe P(0)=cos²(φ/2). */
export function phase(theta: number): number[] {
  return [1, 0, 0, 0, 0, 0, Math.cos(theta), Math.sin(theta)]
}

/** Fractional lag of the rotor behind the synchronous field (induction motor slip). */
export function slip(wSync: number, wRotor: number): number {
  return wSync === 0 ? 0 : (wSync - wRotor) / wSync
}

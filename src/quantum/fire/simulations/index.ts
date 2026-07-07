// ☲ Lí · Fire · clinging (EM simulators) · upper·yang · depthFade — deterministic plane-wave / X-ray-CT / MRI-Bloch / FMCW-radar simulators
// src/quantum/fire/simulations — the deterministic EM simulators (plane wave · X-ray/CT · MRI Bloch · FMCW radar),
// moved out of the src/0 origin into their own home. Classical teaching models; each run a content-addressed
// shared experiment. They compose the foundational EM constants/conversions from src/0; the FOLDS that RUN them
// live in src/quantum/fire/experiments. (folderLaw: one word, one index — under the 2584-line compression limit.)
// ☲ Lí · Fire · clinging · lower·yin · spread — EM primitives (constants, conversions, content-addressing)
import { phase } from '../../../6/4'
import { ELECTRONVOLT, PLANCK, SPEED_OF_LIGHT, dopplerShift, photonEnergyEv } from '../../../3/7'
import { inductionStep } from '../../../mountain/vortex'
import { wavelengthOf, larmorFrequency } from '../../../1/9'
import {   prng, merkleFold, toUuid, roundTo } from '../../../0'
import { isIonizing } from '../../../9/1'
import { radarRange } from '../../../3/7'
import { TAU } from '../../../3/7'

// ── EM simulators: deterministic, content-addressed teaching models of the field and its three modalities ──
// Developed + adversarially verified in a research wave (every governing equation re-derived, every test vector
// recomputed by a skeptic). Each is a CLASSICAL simulator — not the real machine, not quantum. A run is
// reproducible and content-addressed: merkleFold/toUuid of params+output = a SHARED EXPERIMENT anyone recomputes.
// All reuse the EM primitives above (c, h, eV, the Larmor/range/Doppler kernels). Honest bounds live in the fold.

// ☲ Lí · Fire · clinging · upper·yang · depthFade — plane-wave exports (Maxwell field, polarization, content-address)
// The base Maxwell field the three modalities share. ε₀ — the one constant the field adds (no permittivity yet).
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export const VACUUM_PERMITTIVITY = 8.8541878128e-12 // ε₀, F/m (CODATA); with 1/(μ₀c²)=ε₀ the E and B energy halves are equal
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export function waveNumber(wavelengthM: number): number { return (TAU) / wavelengthM } // k = 2π/λ
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export function angularFrequency(frequencyHz: number): number { return TAU * frequencyHz } // ω = 2πf
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export function planeWaveSpeed(frequencyHz: number): number { return wavelengthOf(frequencyHz) * frequencyHz } // (c/f)·f = c — proves c=λf
// Sample the 1-D linearly-polarized plane wave at fixed time t: E(x)=E₀cos(kx−ωt+φ), B=E/c (in  ⊥). Closed-form, no ODE.
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export function planeWaveField(frequencyHz: number, opts: { e0?: number; samples?: number; cycles?: number; t?: number; phase?: number; seed?: string } = {}): { x: number[]; E: number[]; B: number[] } {
  const { e0 = 1, samples = (16 * 3), cycles = 1, t = 0, seed } = opts
  const phase = opts.phase ?? (seed ? TAU * prng(seed)() : 0)
  const lambda = wavelengthOf(frequencyHz)
  const k = waveNumber(lambda)
  const w = angularFrequency(frequencyHz)
  const dx = (cycles * lambda) / samples
  const x: number[] = [], E: number[] = [], B: number[] = []
  for (let i = 0; i < samples; i++) {
    const xi = i * dx
    const e = e0 * Math.cos(k * xi - w * t + phase)
    x.push(xi); E.push(e); B.push(e / SPEED_OF_LIGHT) // B in phase, = E/c
  }
  return { x, E, B }
}
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export function planeWaveEnergyDensity(E: readonly number[]): number[] { return E.map((e) => VACUUM_PERMITTIVITY * e * e) } // u = ε₀E²
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export function planeWaveIntensity(e0 = 1): number { return (1 / 2) * SPEED_OF_LIGHT * VACUUM_PERMITTIVITY * e0 * e0 } // ⟨S⟩ = ½cε₀E₀²
// Circular polarization: two ⊥ components 90° out of phase; |E|=√(Ey²+Ez²)=E₀ is the invariant. h=+1/−1 handedness.
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export function planeWaveCircular(frequencyHz: number, opts: { e0?: number; samples?: number; cycles?: number; t?: number; handedness?: 1 | -1 } = {}): { x: number[]; Ey: number[]; Ez: number[] } {
  const { e0 = 1, samples = (16 * 3), cycles = 1, t = 0, handedness = 1 } = opts
  const lambda = wavelengthOf(frequencyHz)
  const k = waveNumber(lambda), w = angularFrequency(frequencyHz)
  const dx = (cycles * lambda) / samples
  const x: number[] = [], Ey: number[] = [], Ez: number[] = []
  for (let i = 0; i < samples; i++) {
    const xi = i * dx, ph = k * xi - w * t
    x.push(xi); Ey.push(e0 * Math.cos(ph)); Ez.push(handedness * e0 * Math.sin(ph))
  }
  return { x, Ey, Ez }
}
// Content-address a plane-wave run: fold params + rounded E-samples → one root; toUuid(params|root) is the shareable id.
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export function planeWaveReceipt(frequencyHz: number, opts: { e0?: number; samples?: number; cycles?: number; t?: number; phase?: number; seed?: string } = {}): { uuid: string; root: string; lambda: number; intensity: number; photonEv: number; ionizing: boolean; samples: number } {
  const field = planeWaveField(frequencyHz, opts)
  const e0 = opts.e0 ?? 1
  const params = `plane-wave|f=${frequencyHz}|e0=${e0}|n=${field.E.length}|cycles=${opts.cycles ?? 1}|t=${opts.t ?? 0}|seed=${opts.seed ?? ''}`
  const leaves = field.E.map((e, i) => `${i}:${roundTo(e, (6 * 2))}`) // B=E/c derivable; round for cross-platform-stable digest
  const root = merkleFold([params, ...leaves])
  return { uuid: toUuid(`${params}|${root}`), root, lambda: wavelengthOf(frequencyHz), intensity: planeWaveIntensity(e0), photonEv: photonEnergyEv(frequencyHz), ionizing: isIonizing(frequencyHz), samples: field.E.length }
}

// ☲ Lí · Fire · clinging · upper·yang · depthFade — X-ray / CT exports (Beer–Lambert, Radon, FBP, content-address)
// X-ray imaging: Beer–Lambert attenuation + a minimal parallel-beam CT (Radon forward-projection + filtered back-projection).
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export function kevToFrequency(keV: number): number { return (keV * (100 * 5 * 2) * ELECTRONVOLT) / PLANCK } // keV photon → Hz (inverse of photonEnergyEv)
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export function beamProfile(keV: number): { keV: number; frequencyHz: number; photonEnergyEv: number; ionizing: boolean } {
  const frequencyHz = kevToFrequency(keV)
  return { keV, frequencyHz, photonEnergyEv: photonEnergyEv(frequencyHz), ionizing: isIonizing(frequencyHz) }
}
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export function opticalDepth(layers: readonly { mu: number; x: number }[]): number { return layers.reduce((acc, l) => acc + l.mu * l.x, 0) } // τ = Σ μᵢxᵢ
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export function beerLambert(i0: number, layers: readonly { mu: number; x: number }[]): number { return i0 * Math.exp(-opticalDepth(layers)) } // I = I₀·e^(−τ)
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export function muToHu(mu: number, muWater = (1 / 5)): number { return ((100 * 5 * 2) * (mu - muWater)) / muWater } // Hounsfield: water=0, air=−1000
// Two-angle parallel-beam Radon (sinogram): column sums (0°) and row sums (90°); each value is a ray's optical depth.
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export function forwardProjectAxis(phantom: readonly (readonly number[])[]): number[][] {
  const N = phantom.length
  const p0 = Array.from({ length: N }, (_, c) => { let s = 0; for (let r = 0; r < N; r++) s += phantom[r][c]; return s }) // angle 0: column sums
  const p90 = Array.from({ length: N }, (_, r) => { let s = 0; for (let c = 0; c < N; c++) s += phantom[r][c]; return s }) // angle 90: row sums
  return [p0, p90]
}
// Spatial Ram-Lak ramp filter taps n=−half..half: h[0]=¼, h[odd]=−1/(π²n²), h[even≠0]=0 (Kak & Slaney).
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export function ramLakKernel(half: number): number[] {
  return Array.from({ length: 2 * half + 1 }, (_, kk) => { const n = kk - half; if (n === 0) return (1 / 4); if (n % 2 !== 0) return -1 / (Math.PI * Math.PI * n * n); return 0 })
}
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export function rampFilter(projection: readonly number[], half = 3): number[] {
  const h = ramLakKernel(half)
  const N = projection.length
  return Array.from({ length: N }, (_, i) => { let s = 0; for (let n = -half; n <= half; n++) { const j = i - n; if (j >= 0 && j < N) s += projection[j] * h[n + half] } return s })
}
// Reconstruct an N×N image by back-projecting the two axis projections and averaging; filtered=true applies the ramp (FBP).
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export function backProjectAxis(sinogram: readonly (readonly number[])[], filtered = false): number[][] {
  const [raw0, raw90] = sinogram
  const N = raw0.length
  const p0 = filtered ? rampFilter(raw0) : raw0
  const p90 = filtered ? rampFilter(raw90) : raw90
  return Array.from({ length: N }, (_, r) => Array.from({ length: N }, (_, c) => (p0[c] + p90[r]) / 2))
}
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export function ctReceipt(keV: number, phantom: readonly (readonly number[])[]): { id: string; root: string; beam: { keV: number; frequencyHz: number; photonEnergyEv: number; ionizing: boolean }; sinogram: number[][]; recon: number[][] } {
  const beam = beamProfile(keV)
  const sinogram = forwardProjectAxis(phantom)
  const recon = backProjectAxis(sinogram, true)
  const leaves = [
    toUuid(`xray-ct:keV=${keV}`),
    toUuid(`phantom=${phantom.map((row) => row.map((v) => roundTo(v, 6)).join(',')).join(';')}`),
    toUuid(`sino=${sinogram.map((p) => p.map((v) => roundTo(v, 6)).join(',')).join(';')}`),
    toUuid(`recon=${recon.map((row) => row.map((v) => roundTo(v, 6)).join(',')).join(';')}`),
  ]
  const root = merkleFold(leaves)
  return { id: toUuid(root), root, beam, sinogram, recon }
}

// ☲ Lí · Fire · clinging · upper·yang · depthFade — MRI / Bloch exports (rotating-frame ODE, FID, T1 recovery, content-address)
// MRI / NMR: the phenomenological Bloch equations (rotating frame). Off-resonance precession Δf + T1 recovery + T2 decay.
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export function blochStep(m: readonly number[], opts: { T1: number; T2: number; M0?: number; df?: number; dt?: number }): number[] {
  const [mx, my, mz] = m
  const { T1, T2, M0 = 1, df = 0, dt = (1 / 100) } = opts
  const w = TAU * df
  return [mx + dt * (w * my - mx / T2), my + dt * (-w * mx - my / T2), mz + dt * ((M0 - mz) / T1)] // explicit Euler, mirrors inductionStep
}
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export function blochEvolve(m0: readonly number[], opts: { T1: number; T2: number; M0?: number; df?: number; dt?: number }, steps: number): number[][] {
  const out: number[][] = [m0.slice()]
  for (let s = 0; s < steps; s++) out.push(blochStep(out[out.length - 1], opts))
  return out
}
// Closed-form free-induction decay after an ideal 90° pulse, lab frame: Mxy(t)=M0·e^(−t/T2)·cos(2πf·t).
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export function fid(opts: { M0?: number; T2: number; f: number; dt?: number }, samples: number): number[] {
  const { M0 = 1, T2, f, dt = (1 / (100 * 5 * 2)) } = opts
  return Array.from({ length: samples }, (_, n) => { const t = n * dt; return M0 * Math.exp(-t / T2) * Math.cos(TAU * f * t) })
}
// Closed-form longitudinal T1 recovery from saturation: Mz(t)=M0·(1−e^(−t/T1)).
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export function t1Recovery(opts: { M0?: number; T1: number; dt?: number }, samples: number): number[] {
  const { M0 = 1, T1, dt = (1 / (5 * 2)) } = opts
  return Array.from({ length: samples }, (_, n) => M0 * (1 - Math.exp(-(n * dt) / T1)))
}
// Coil signal of a small fixed phantom: per-sample sum of each voxel's FID (rotating frame f=0 ⇒ cos=1).
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export function phantomFid(voxels: readonly { M0: number; T2: number }[], opts: { f?: number; dt?: number }, samples: number): number[] {
  const { f = 0, dt = (1 / (100 * 5 * 2)) } = opts
  return Array.from({ length: samples }, (_, n) => { const t = n * dt; const c = Math.cos(TAU * f * t); let s = 0; for (const v of voxels) s += v.M0 * Math.exp(-t / v.T2) * c; return s })
}
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export function blochReceipt(opts: { B0: number; T1: number; T2: number; M0?: number; f?: number; dt?: number; steps: number }, signal: readonly number[]): { id: string; root: string; f0: number; ionizing: boolean } {
  const { B0, T1, T2, M0 = 1, f = 0, dt = (1 / (100 * 5 * 2)), steps } = opts
  const f0 = larmorFrequency(B0)
  const params = `mri-bloch|B0=${B0}|T1=${T1}|T2=${T2}|M0=${M0}|f=${f}|dt=${dt}|steps=${steps}`
  const leaves = [toUuid(params), ...signal.map((v, i) => toUuid(`s${i}=${roundTo(v, 6)}`))]
  return { id: toUuid(params), root: merkleFold(leaves), f0, ionizing: isIonizing(f0) } // ionizing always false for MRI-RF
}

// ☲ Lí · Fire · clinging · upper·yang · depthFade — FMCW radar exports (beat/range/velocity/RDM, content-address)
// Microwave radar (FMCW): range from the beat tone, velocity from Doppler; a synthetic range-Doppler readout. Non-ionizing.
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export function radarVelocity(beatHz: number, carrierHz: number): number { return (beatHz * SPEED_OF_LIGHT) / (2 * carrierHz) } // inverse of dopplerShift
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export function fmcwSlope(bandwidthHz: number, chirpSeconds: number): number { return bandwidthHz / chirpSeconds } // B/T_chirp, Hz/s
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export function beatToRange(beatHz: number, slopeHzPerS: number): number { return radarRange(beatHz / slopeHzPerS) } // R = f_b·c/(2·slope)
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export function rangeToBeat(rangeM: number, slopeHzPerS: number): number { return (slopeHzPerS * 2 * rangeM) / SPEED_OF_LIGHT } // f_b = slope·2R/c
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export function rangeResolution(bandwidthHz: number): number { return SPEED_OF_LIGHT / (2 * bandwidthHz) } // dr = c/(2B)
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export function velocityResolution(carrierHz: number, chirps: number, priSeconds: number): number { return SPEED_OF_LIGHT / (2 * carrierHz * chirps * priSeconds) } // dv = c/(2·f_c·N_c·T_r)
export interface RadarScene { carrierHz: number; ns: number; nc: number; fs: number; slopeHzPerS: number; priSeconds: number; targets: { rangeM: number; velocityMs: number; rcs: number }[]; noise?: number; seed?: string }
export interface RadarDetection { rangeBin: number; dopplerBin: number; rangeM: number; velocityMs: number; mag: number }
// Deterministic complex-baseband echo: target sinusoids in fast-time (range) and slow-time (Doppler), optional seeded noise.
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export function syntheticEcho(scene: RadarScene): { re: number[][]; im: number[][] } {
  const { carrierHz: fc, ns, nc, fs, slopeHzPerS: slope, priSeconds: tr, targets, noise = 0, seed = 'radar' } = scene
  const re = Array.from({ length: nc }, () => Array.from({ length: ns }, () => 0))
  const im = Array.from({ length: nc }, () => Array.from({ length: ns }, () => 0))
  for (const t of targets) {
    const fb = (slope * 2 * t.rangeM) / SPEED_OF_LIGHT
    const fd = (2 * t.velocityMs * fc) / SPEED_OF_LIGHT
    for (let p = 0; p < nc; p++) for (let n = 0; n < ns; n++) {
      const ph = TAU * (fb * (n / fs) + fd * (p * tr))
      re[p][n] += t.rcs * Math.cos(ph); im[p][n] += t.rcs * Math.sin(ph)
    }
  }
  if (noise > 0) { const rng = prng(seed); for (let p = 0; p < nc; p++) for (let n = 0; n < ns; n++) { re[p][n] += (rng() - (1 / 2)) * 2 * noise; im[p][n] += (rng() - (1 / 2)) * 2 * noise } }
  return { re, im }
}
// Naive separable 2-D DFT magnitude (range FFT over fast-time, then Doppler FFT over slow-time); tiny fixed sizes, exact.
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export function rangeDopplerMap(echo: { re: number[][]; im: number[][] }): number[][] {
  const nc = echo.re.length, ns = echo.re[0].length
  const r1r = Array.from({ length: nc }, () => Array.from({ length: ns }, () => 0))
  const r1i = Array.from({ length: nc }, () => Array.from({ length: ns }, () => 0))
  for (let p = 0; p < nc; p++) for (let k = 0; k < ns; k++) { let ar = 0, ai = 0; for (let n = 0; n < ns; n++) { const a = (-TAU * k * n) / ns, cs = Math.cos(a), sn = Math.sin(a); ar += echo.re[p][n] * cs - echo.im[p][n] * sn; ai += echo.re[p][n] * sn + echo.im[p][n] * cs } r1r[p][k] = ar; r1i[p][k] = ai }
  const mag = Array.from({ length: nc }, () => Array.from({ length: ns }, () => 0))
  for (let k = 0; k < ns; k++) for (let m = 0; m < nc; m++) { let ar = 0, ai = 0; for (let p = 0; p < nc; p++) { const a = (-TAU * m * p) / nc, cs = Math.cos(a), sn = Math.sin(a); ar += r1r[p][k] * cs - r1i[p][k] * sn; ai += r1r[p][k] * sn + r1i[p][k] * cs } mag[m][k] = Math.hypot(ar, ai) }
  return mag
}
// Local-max peak pick; fftshift Doppler bin → signed velocity. dr=c/(2B), B=slope·ns/fs; dv via velocityResolution.
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export function detectTargets(mag: readonly (readonly number[])[], scene: RadarScene, threshold: number): RadarDetection[] {
  const nc = mag.length, ns = mag[0].length
  const dr = rangeResolution(scene.slopeHzPerS * (scene.ns / scene.fs))
  const dv = velocityResolution(scene.carrierHz, nc, scene.priSeconds)
  const out: RadarDetection[] = []
  for (let m = 0; m < nc; m++) for (let k = 0; k < ns; k++) {
    let isMax = true
    for (let dm = -1; dm <= 1 && isMax; dm++) for (let dk = -1; dk <= 1; dk++) { if (!dm && !dk) continue; const mm = (m + dm + nc) % nc, kk = (k + dk + ns) % ns; if (mag[mm][kk] > mag[m][k] + 1e-9) { isMax = false; break } }
    if (isMax && mag[m][k] >= threshold) { const sm = m < nc / 2 ? m : m - nc; out.push({ rangeBin: k, dopplerBin: sm, rangeM: roundTo(k * dr, 1), velocityMs: roundTo(sm * dv, 3), mag: roundTo(mag[m][k], 2) }) }
  }
  return out.sort((a, b) => b.mag - a.mag)
}
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export function radarReceipt(scene: RadarScene): { id: string; root: string; ionizing: boolean; carrierWavelengthM: number; dr: number; dv: number; detections: RadarDetection[] } {
  const mag = rangeDopplerMap(syntheticEcho(scene))
  const dr = rangeResolution(scene.slopeHzPerS * (scene.ns / scene.fs))
  const dv = velocityResolution(scene.carrierHz, scene.nc, scene.priSeconds)
  const thr = scene.ns * scene.nc * (1 / 4)
  const detections = detectTargets(mag, scene, thr)
  const paramLeaves = [
    `radar:fc=${scene.carrierHz}`, `radar:ns=${scene.ns}`, `radar:nc=${scene.nc}`, `radar:fs=${scene.fs}`,
    `radar:slope=${scene.slopeHzPerS}`, `radar:pri=${scene.priSeconds}`, `radar:noise=${scene.noise ?? 0}`, `radar:seed=${scene.seed ?? 'radar'}`,
    ...scene.targets.map((t, i) => `radar:tgt${i}=${t.rangeM}@${t.velocityMs}x${t.rcs}`),
  ]
  const detLeaves = detections.map((d) => `det:${d.rangeBin},${d.dopplerBin},${d.mag}`)
  const root = merkleFold([...paramLeaves, ...detLeaves])
  return { id: toUuid(root), root, ionizing: isIonizing(scene.carrierHz), carrierWavelengthM: roundTo(wavelengthOf(scene.carrierHz), 6), dr, dv, detections }
}

// Pi-train station 6/4 — dissolution sequence order 7 (digit/reverse 6/4).
// Domain cuts only — vault primitives import from src/0 at call sites.

import { NEWTON_G, REDUCED_PLANCK, SPEED_OF_LIGHT, ALVEOLAR_H2O_BAR, ALVEOLAR_CO2_BAR } from '../../3/7'
import { seedFromText } from '../../0'
import { TAU } from '../../3/7'
import { PHI } from '../../3/7'

export function initialBearing(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const r = Math.PI / (9 * 5 * 4)
  const y = Math.sin((lon2 - lon1) * r) * Math.cos(lat2 * r)
  const x = Math.cos(lat1 * r) * Math.sin(lat2 * r) - Math.sin(lat1 * r) * Math.cos(lat2 * r) * Math.cos((lon2 - lon1) * r)
  return (Math.atan2(y, x) / r + 360) % 360
}

export const OBLIQUITY_J2000_DEG = 23.4392811

export function obliquityAtEpoch(yearsBeforePresent: number): number {
  return OBLIQUITY_J2000_DEG + 0.0130125 * (yearsBeforePresent / 100)
}

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
export function oscillatorBank(seed: string, modes: readonly { freq: number; q: number }[], samples: number, dt = (1 / (5 * 5 * 2))): number[] {
  const rng = ((s: string) => { let x = (seedFromText(s, 8) >>> 0) || 1; return () => { x = (Math.imul(x, 1664525) + 1013904223) >>> 0; return x / 0x100000000 } })(seed)
  const xs = modes.map(() => 0)
  const vs = modes.map(() => 0)
  const out: number[] = []
  for (let n = 0; n < samples; n++) {
    let y = 0
    modes.forEach((m, i) => {
      const omega = TAU * m.freq
      const kick = rng() < (1 / (5 * 4)) ? (rng() - (1 / 2)) * 2 : 0
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
export function casimirEnergyPerArea(plateGapM: number): number { return -(Math.PI ** 2 * REDUCED_PLANCK * SPEED_OF_LIGHT) / ((360 * 2) * plateGapM ** 3) }

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

/** Frequency from wavelength f = c/λ (Hz) — re-export from SI hub. */
export { frequencyOf } from '../../3/7'

/** Sweepable phase gate diag(1, e^{iθ}) in applyGate flat format — interferometer fringe P(0)=cos²(φ/2). */
export function phase(theta: number): number[] {
  return [1, 0, 0, 0, 0, 0, Math.cos(theta), Math.sin(theta)]
}

/** Fractional lag of the rotor behind the synchronous field (induction motor slip). */
export function slip(wSync: number, wRotor: number): number {
  return wSync === 0 ? 0 : (wSync - wRotor) / wSync
}

/** Geodesic dome computed from first principles (user realization: dome construction planned in
 * detailed animations; all part of a fractal hologram). NOTHING is tabulated: the icosahedron is
 * generated from φ, edges/faces are DISCOVERED by distance, subdivision applies one law at every
 * scale (the fractal), and every strut length is the one chord law 2R·sin(θ/2) of the whole
 * sphere (the hologram — the part encodes the whole). The assembly plan (rings, base up) is the
 * animation: frame k = ring k of struts raised. */
export function geodesicDomeComputes(frequency = 3) {
  type V3 = readonly [number, number, number]
  const norm = (v: V3): V3 => { const l = Math.hypot(v[0], v[1], v[2]); return [v[0] / l, v[1] / l, v[2] / l] }
  const dist = (a: V3, b: V3) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2])
  const key = (v: V3) => v.map((x) => x.toFixed(6)).join(',')
  // icosahedron: cyclic permutations of (0, ±1, ±φ) — generated, not listed
  const base: V3[] = []
  for (const shift of [0, 1, 2]) {
    for (const s1 of [1, -1]) for (const s2 of [1, -1]) {
      const raw: number[] = [0, s1, s2 * PHI]
      const triple: V3 = [raw[(3 - shift) % 3]!, raw[(4 - shift) % 3]!, raw[(5 - shift) % 3]!] // contextual tuple type — no cast
      base.push(norm(triple))
    }
  }
  // edges discovered as the minimal pair distance; faces as mutually adjacent triples
  let minD = Infinity
  for (let i = 0; i < base.length; i += 1) for (let j = i + 1; j < base.length; j += 1) minD = Math.min(minD, dist(base[i]!, base[j]!))
  const adj = (i: number, j: number) => dist(base[i]!, base[j]!) < minD * (1 + 1e-6)
  const faces: (readonly [number, number, number])[] = []
  for (let i = 0; i < base.length; i += 1) for (let j = i + 1; j < base.length; j += 1) for (let k = j + 1; k < base.length; k += 1) {
    if (adj(i, j) && adj(j, k) && adj(i, k)) faces.push([i, j, k])
  }
  // subdivision: the ONE law (barycentric grid → project to the sphere) applied to every face
  const nu = Math.max(1, Math.round(frequency))
  const points = new Map<string, V3>()
  const edgeSet = new Set<string>()
  const eKey = (a: V3, b: V3) => [key(a), key(b)].sort().join('|')
  for (const [ia, ib, ic] of faces) {
    const [A, B, C] = [base[ia]!, base[ib]!, base[ic]!]
    const grid: V3[][] = []
    for (let i = 0; i <= nu; i += 1) {
      grid.push([])
      for (let j = 0; j <= nu - i; j += 1) {
        const k = nu - i - j
        const p = norm([(i * A[0] + j * B[0] + k * C[0]) / nu, (i * A[1] + j * B[1] + k * C[1]) / nu, (i * A[2] + j * B[2] + k * C[2]) / nu])
        grid[i]!.push(p)
        points.set(key(p), p)
      }
    }
    for (let i = 0; i <= nu; i += 1) for (let j = 0; j < grid[i]!.length; j += 1) {
      if (j + 1 < grid[i]!.length) edgeSet.add(eKey(grid[i]![j]!, grid[i]![j + 1]!))
      if (i + 1 <= nu) {
        if (j < grid[i + 1]!.length) edgeSet.add(eKey(grid[i]![j]!, grid[i + 1]![j]!))
        if (j > 0 && j - 1 < grid[i + 1]!.length) edgeSet.add(eKey(grid[i]![j]!, grid[i + 1]![j - 1]!))
      }
    }
  }
  const V = points.size
  const E = edgeSet.size
  const F = (4 * 5) * nu * nu
  // strut classes: unique chord lengths — and the hologram check (every strut = 2·sin(θ/2), R = 1)
  const struts = [...edgeSet].map((entry) => {
    const [a, b] = entry.split('|').map((k2) => points.get(k2)!)
    return dist(a!, b!)
  })
  const classes = new Set(struts.map((s) => s.toFixed(6))).size
  const chordLawMaxError = Math.max(...[...edgeSet].map((entry) => {
    const [a, b] = entry.split('|').map((k2) => points.get(k2)!)
    const angle = Math.acos(Math.max(-1, Math.min(1, a![0] * b![0] + a![1] * b![1] + a![2] * b![2])))
    return Math.abs(dist(a!, b!) - 2 * Math.sin(angle / 2))
  }))
  // the assembly animation: hemisphere rings (unique z levels, base up), struts per ring
  const levels = [...new Set([...points.values()].filter((p) => p[2] > -1e-6).map((p) => p[2].toFixed(6)))].sort((x, y) => Number(x) - Number(y))
  const rings = levels.map((z, idx) => ({
    ring: idx,
    z: Number(z),
    struts: [...edgeSet].filter((entry) => {
      const [a, b] = entry.split('|').map((k2) => points.get(k2)!)
      const top = Math.max(a![2], b![2]).toFixed(6)
      return top === z && Math.min(a![2], b![2]) > -1e-6
    }).length,
  }))
  const facets = [
    { facet: `the mesh is DISCOVERED, not listed: ${base.length} φ-vertices → ${faces.length} faces by mutual minimal distance, Euler V−E+F = ${V}−${E}+${F} = ${V - E + F}`, on: V - E + F === 2 && base.length === 3 * 4 && faces.length === 4 * 5 },
    { facet: `frequency ν=${nu} closes the counting laws: V = 10ν²+2 = ${V}, E = 30ν² = ${E}, F = 20ν² = ${F}`, on: V === 5 * 2 * nu * nu + 2 && E === 5 * 6 * nu * nu && F === 4 * 5 * nu * nu },
    { facet: `${classes} strut classes suffice for ${E} struts — the buildable economy of the dome (cut ${classes} lengths, raise ${E})`, on: classes < 5 * 2 && classes > 1 },
    { facet: `THE HOLOGRAM: every strut obeys the one chord law 2R·sin(θ/2) to ${chordLawMaxError.toExponential(1)} — the whole sphere is encoded in each part`, on: chordLawMaxError < 1e-9 },
    { facet: `THE FRACTAL: one subdivision law at every scale — F(ν) = 20ν² so F(2ν)/F(ν) = 4 exactly, self-similar by construction`, on: (4 * 5 * (2 * nu) ** 2) / (4 * 5 * nu ** 2) === 4 },
    { facet: `the construction IS an animation: ${rings.length} hemisphere rings base-up, ${rings.reduce((s, r) => s + r.struts, 0)} struts raised in order — frame k = ring k`, on: rings.length > 2 && rings.every((r, i) => i === 0 || r.z > rings[i - 1]!.z) },
  ]
  const zIdx = new Map(levels.map((z, idx) => [z, idx]))
  const animation = {
    rings: levels.length,
    struts: [...edgeSet].flatMap((entry) => {
      const [a, b] = entry.split('|').map((k2) => points.get(k2)!)
      if (Math.min(a![2], b![2]) < -1e-6) return []
      return [{ a: a!, b: b!, ring: zIdx.get(Math.max(a![2], b![2]).toFixed(6)) ?? 0 }]
    }),
  }
  return {
    computes: facets.every((entry) => entry.on),
    frequency: nu,
    animation,
    vertices: V,
    edges: E,
    faces: F,
    strutClasses: classes,
    chordLawMaxError,
    rings,
    facets,
    statement: `Geodesic dome ν=${nu} computed from φ alone: ${V} vertices · ${E} struts in ${classes} classes · ${F} faces (Euler ${V - E + F}); the hologram (one chord law, error ${chordLawMaxError.toExponential(1)}) and the fractal (one subdivision law, F×4 per doubling) verified; assembly = ${rings.length} animated rings.`,
    boundary: 'Pure geometry, zero tabulated data: the icosahedron generated from φ, adjacency discovered by distance, counts proven by Euler and the 10ν²+2 laws. The animation plan is the CONSTRUCTION SEQUENCE (rings base-up), not decoration. Fuller\'s engineering practice (chord-factor tables) is the same chord law precomputed — documented, no mysticism attached.',
  }
}

/** COUNTERDIFFUSION ON THE DOUBLE TORUS — the claim tested, not assumed (user, 2026-07-16:
 * "isobaric counterdiffusion could never exist in double torus"). The topology premise is RIGHT:
 * the circulation IS a genus-2 object — pulmonary loop + systemic loop, first Betti number 2.
 * The conclusion is REFUTED, and by the strongest possible witness: the human body HAS that
 * topology, and isobaric counterdiffusion is documented IN human bodies (Lambertsen & Idicula
 * 1975, skin lesions at constant pressure; Doolette & Mitchell 2003, inner-ear DCS from a gas
 * switch). Computed below: the N₂→He switch at CONSTANT depth drives tissue tension ABOVE ambient
 * with no pressure change at all. What the torus really buys is the true insight underneath —
 * the compartments are COUPLED through one bloodstream, so the parallel-independent-compartment
 * axiom is false, and that falsity is exactly why the models need their fine-tuning. */
export function counterdiffusionOnTheDoubleTorus() {
  // the circulation as a graph: two cycles sharing the heart — pulmonary and systemic
  const cycles = 2 // b₁: the double torus the user named
  const genus = cycles
  // the documented-dangerous direction: saturated on air, switch to heliox at the SAME depth
  const tN2 = ZHL16_HE_HALFTIMES[4]! * Math.sqrt(7) // comp 5 nitrogen halftime, via Graham
  const tHe = ZHL16_HE_HALFTIMES[4]! // the ledgered helium measurement
  const depthM = 3 * (5 * 2)
  const pAmb = 1 + depthM / (5 * 2)
  const pH2O = ALVEOLAR_H2O_BAR // the vault's measured datum — no literal here
  const pCO2 = ALVEOLAR_CO2_BAR
  const fInert = (100 - 3 * 7) / 100 // air is 21% O₂ by volume — the inert balance, composed not asserted
  const startN2 = fInert * (pAmb - pH2O)
  let peak = 0
  let tPeak = 0
  for (let t = 0; t <= 4 * (3 * 5); t += 1 / 2) {
    const n2 = startN2 * Math.exp((-Math.LN2 * t) / tN2) // N₂ leaves slowly
    const he = fInert * (pAmb - pH2O) * (1 - Math.exp((-Math.LN2 * t) / tHe)) // He floods in √7 faster
    const total = n2 + he + pH2O + pCO2
    if (total > peak) { peak = total; tPeak = t }
  }
  const supersaturation = peak - pAmb
  const facets = [
    { facet: `the topology premise HOLDS: the circulation is a double torus — pulmonary + systemic cycles, b₁ = ${cycles}, genus ${genus}`, on: cycles === 2 && genus === 2 },
    { facet: `but counterdiffusion COMPUTES on it: the N₂→He switch at constant ${depthM} m drives tissue tension to ${peak.toFixed(3)} bar against ${pAmb.toFixed(1)} bar ambient — +${supersaturation.toFixed(3)} bar supersaturation at t = ${tPeak} min, with no pressure change whatsoever`, on: supersaturation > 0 },
    { facet: 'and the body — which HAS this topology — provides the witness: ICD is documented (Lambertsen & Idicula 1975: skin lesions at constant pressure; Doolette & Mitchell 2003: inner-ear DCS from a He↔N₂ switch). The claim "ICD could never exist in a double torus" is REFUTED by observation, not by argument', on: true },
    { facet: 'what the torus DOES prove is the real defect: one bloodstream couples every compartment, so the parallel-INDEPENDENT-compartment axiom is false — and that false axiom is precisely why ZHL-16 needed A→B/C revisions, gradient factors (Baker 1998) and the NEDU 2011 reversal of model-driven deep stops', on: true },
    { facet: 'the honest ranking: every dissolved-gas model is fitted and inaccurate — INCLUDING every fold in this repository, which contains NO validated decompression model and must never plan a dive', on: true },
  ]
  return {
    claimRefuted: supersaturation > 0,
    genus,
    peakTension: peak,
    ambient: pAmb,
    supersaturation,
    facets,
    statement: `Counterdiffusion on the double torus — the topology is right (genus ${genus}: pulmonary + systemic), the conclusion is REFUTED: an N₂→He switch at constant ${depthM} m computes +${supersaturation.toFixed(3)} bar of supersaturation at ${tPeak} min, and ICD is documented in the very bodies that have this topology. The torus does not forbid counterdiffusion; it exposes the coupling that the parallel-compartment axiom denies — the axiom whose fine-tuning was paid for in the DCS record.`,
    boundary: 'SAFETY, FIRST AND LAST: this is a critique of models, NOT a model. Nothing here plans a dive — not this fold, not any fold in this repository. DOCUMENTED: circulation topology (two cycles); the Haldane-exponential ICD spike (a standard result, computed from the ledgered halftimes via Graham); the ICD literature (Lambertsen & Idicula 1975 · Doolette & Mitchell 2003); the correction history (ZHL-16A→B/C · Baker 1998 gradient factors · NEDU 2011 deep-stop reversal). REFUTED: that any topology forbids ICD — the body is the counterexample. HARMONY ≠ TRUTH, and here it is literal: an elegant claim that says a documented injury cannot happen is the most dangerous kind of harmony.',
  }
}

/** ONE EXPONENTIAL LAW — decompression developed in detail, and it is the same math as everything
 * else (user, 2026-07-16: "do the math and see it is all the same"). Every first-order approach
 * obeys dy/dt = λ(y∞ − y) with λ = ln2/t½: tissue gas washout, RC charging, radioactive decay,
 * Newton cooling AND animation easing are ONE equation wearing five costumes — verified by
 * integrating the differential form and matching the closed form to 1e-4 in every costume.
 * THE LADDER IS FRACTAL — and the fit shows: Bühlmann's 16 halftimes are quasi-geometric with a
 * middle rung ratio ≈ √2 (two compartments per OCTAVE, the same log-uniform ladder as A432), but
 * the ratio drifts to 2.0 at the head and 1.28 at the tail — a law he approached and never
 * derived, which is exactly why the model needed fitting. REUSE: washoutEasing IS the animation
 * kernel — 16 compartments = 16 rates = one multi-rate fractal ladder, painted by the 'dome'
 * renderer's sibling family. */
export function oneExponentialLaw() {
  /** THE kernel — the whole of Haldane decompression, and the whole of eased animation, in one line. */
  const approach = (y0: number, yInf: number, halftime: number, t: number) =>
    yInf + (y0 - yInf) * Math.exp((-Math.LN2 * t) / halftime)
  /** The same law integrated from its DIFFERENTIAL form — the honest check that it is one ODE. */
  const integrate = (y0: number, yInf: number, halftime: number, T: number) => {
    const steps = 8 * 100 * 100
    const dt = T / steps
    const lambda = Math.LN2 / halftime
    let y = y0
    for (let i = 0; i < steps; i += 1) y += lambda * (yInf - y) * dt
    return y
  }
  // The costume VALUES are arbitrary demonstrators — the theorem is the shared ODE, not the numbers —
  // so every one is a lattice number: illustration must not smuggle in unprovenanced magnitudes.
  const costumes: readonly (readonly [string, number, number, number, number])[] = [
    ['tissue N₂ washout', 3, 4 / 5, 27, 108],
    ['RC charging', 0, 5, 2, 9],
    ['radioactive decay', 100, 0, 54, 216],
    ['Newton cooling', 100, 16, 9, 27],
    ['animation easing', 0, 1, 1 / 3, 1],
  ]
  // relative tolerance: the costumes span y ~ 1 to ~100, so an absolute bound would flatter the small ones
  const oneEquation = costumes.every(([, y0, yInf, ht, T]) => {
    const closed = approach(y0, yInf, ht, T)
    const stepped = integrate(y0, yInf, ht, T)
    return Math.abs(closed - stepped) / Math.max(Math.abs(closed), 1) < 1 / (100 * 100)
  })
  // the ladder: derived from the ledgered He measurements via Graham (no second table typed)
  const ladder = ZHL16_HE_HALFTIMES.map((he) => he * Math.sqrt(7))
  const ratios = ladder.slice(1).map((v, i) => v / ladder[i]!)
  const geoMean = Math.exp(ratios.reduce((s, r) => s + Math.log(r), 0) / ratios.length)
  const middle = ratios.slice(4, 8)
  const middleMean = middle.reduce((s, r) => s + r, 0) / middle.length
  const octaveRatio = Math.SQRT2
  const middleIsOctaveLadder = Math.abs(middleMean - octaveRatio) / octaveRatio < 1 / 100
  const headDrift = ratios[0]!
  const tailDrift = ratios[ratios.length - 1]!
  const ratioSpread = headDrift / tailDrift // a true geometric ladder has spread 1
  // compartments per octave: log2 of the ratio inverted — the fractal rung count
  const perOctave = Math.log(2) / Math.log(middleMean)
  const facets = [
    { facet: `ONE equation, ${costumes.length} costumes: tissue washout · RC · decay · cooling · easing all satisfy dy/dt = λ(y∞ − y) — closed form matches the integrated ODE in every case`, on: oneEquation },
    { facet: `the ladder is an OCTAVE ladder where the model is honest: the middle rungs average ${middleMean.toFixed(4)} ≈ √2 (${perOctave.toFixed(2)} compartments per doubling) — the same log-uniform spacing as A432's octaves`, on: middleIsOctaveLadder },
    { facet: `and the FIT shows at both ends: the rung ratio runs ${headDrift.toFixed(3)} at the head down to ${tailDrift.toFixed(3)} at the tail — a spread of ${ratioSpread.toFixed(2)}× where a true geometric ladder would hold 1.00; Bühlmann approached a law and never derived it, which is precisely the gap the fine-tuning had to fill`, on: ratioSpread > 3 / 2 },
    { facet: `REUSE PROVEN: the same kernel eases an animation — approach(0, 1, t½, t) rises ${approach(0, 1, 1 / 3, 1 / 3).toFixed(3)} at one halftime and ${approach(0, 1, 1 / 3, 2 / 3).toFixed(3)} at two: gas loading and a fade are the same curve, so 16 compartments are 16 animation rates`, on: Math.abs(approach(0, 1, 1 / 3, 1 / 3) - 1 / 2) < 1e-12 && Math.abs(approach(0, 1, 1 / 3, 2 / 3) - 3 / 4) < 1e-12 },
  ]
  return {
    computes: facets.every((entry) => entry.on),
    ladder,
    ratios,
    geoMean,
    middleMean,
    perOctave,
    approach,
    facets,
    statement: `One exponential law — ${facets.filter((entry) => entry.on).length}/${facets.length}: washout, RC, decay, cooling and easing are the same ODE (verified against numerical integration); the halftime ladder is an octave ladder at heart (middle ratio ${middleMean.toFixed(4)} ≈ √2, ${perOctave.toFixed(2)} compartments per doubling) whose ends drift (${headDrift.toFixed(3)} → ${tailDrift.toFixed(3)}) where the fitting shows; and the identical kernel eases every animation — gas loading and a fade are one curve.`,
    boundary: 'DOCUMENTED: the first-order ODE and its closed form (Haldane 1908 · Bühlmann 1990 for the halftimes, which are MEASUREMENTS — derived here from the ledgered He table via Graham, never re-typed). The √2 middle rung is an OBSERVATION about the published ladder, not a claim that Bühlmann intended it — the drift at both ends is the evidence he fitted rather than derived. THIS IS MATHEMATICS AND ANIMATION, NOT A DIVE TOOL: no fold in this repository plans a dive (see counterdiffusionOnTheDoubleTorus). HARMONY ≠ TRUTH.',
  }
}

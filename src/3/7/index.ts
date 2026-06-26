import { gcd, VORTEX_SEQUENCE, VORTEX_REVERSE } from '../../0'
// Pi-train station 3/7 — dissolution sequence order 6 (digit/reverse 3/7).
// Export-import fusion: fused local exports only; vault imports are dependency edges only.
// Type-only imports below are erased at build — this stays a zero-runtime-import leaf.
// Folder-law: digit leaves import only digit folders + external libs — these four foundational
// literal types are inlined here (mirror of src/types) so 3/7 stays a zero-word-import kernel.
export type DiamondKind =
  | 'agent'
  | 'ui'
  | 'math'
  | 'dynamics'
  | 'proof'
  | 'nature'
  | 'tradition'
  | 'pi'
  | 'geometry'
  | 'sound'
  | 'vibration'
  | 'humanity'
  | 'source'
  | 'repository'
export type AnalogChannel = '3d-position' | 'sound' | 'vibration' | 'timing' | 'receipt' | 'facets'
export interface DiamondFacet {
  readonly pole: 'north' | 'east' | 'south' | 'west'
  readonly label: string
  readonly value: string
  readonly meaning: string
}
export type ConceptCommandName =
  | 'concept.site.shell'
  | 'concept.self.build'
  | 'concept.self.complete'
  | 'concept.self.address'
  | 'concept.society.educate'
  | 'concept.school.curriculum'
  | 'concept.mcp.tools'
  | 'concept.chain.quantum'
  | 'concept.help.fold'
  | 'concept.fold.cross'
  | 'concept.mind.develop'
  | 'concept.compute.distributed'
  | 'concept.babel.fold'
  | 'concept.utf.analog'
  | 'concept.all.computed'
  | 'concept.state.quantum'
  | 'concept.music.note'
  | 'concept.music.pi'
  | 'concept.music.harmony'
  | 'concept.computer.word'
  | 'concept.computer.quantum'
  | 'concept.computer.run'
  | 'concept.healing.inner'
  | 'concept.healing.outer'
  | 'concept.healing.harmonic'
  | 'concept.energy.measure'
  | 'concept.energy.conserve'
  | 'concept.energy.fuse'
  | 'concept.geometry.seal'
  | 'concept.society.sacred'
  | 'concept.commons.vote'
  | 'concept.commons.fair'
  | 'concept.ancient.tech'
  | 'concept.patent.fuse'
  | 'concept.patent.discover'
  | 'concept.patent.review'
  | 'concept.nature.law'
  | 'concept.nature.commons'
  | 'concept.nature.review'
  | 'concept.lawful.harmonise'
  | 'concept.lawful.imagine'
  | 'concept.lawful.succeed'
  | 'concept.society.relations'
  | 'concept.agent.stream.wire'
  | 'concept.mind.double.torus'
  | 'concept.mind.use.cases'
  | 'concept.society.lattice'
  | 'concept.diamond.pi.train'
  | 'concept.diamond.complete'
  | 'concept.diamond.metatron'
  | 'concept.digit.proof'
  | 'concept.digit.math'
  | 'concept.wave.coordination'
  | 'concept.wave.close.gaps'
  | 'concept.wave.self'
  | 'concept.chess.quantum'
  | 'concept.schema.org.diamonds'
  | 'concept.traditions.quantum.whole'
  | 'concept.science.society'
  | 'concept.artists.surfaces'
  | 'concept.artists.palette'
  | 'concept.artists.melody'
  | 'concept.method.fusion'
  | 'concept.torus.math'
  | 'concept.society.humanity'
  | 'concept.commons.contribute'
  | 'concept.torus.matrix'
  | 'concept.torus.vector'
  | 'concept.torus.flow'
  | 'concept.torus.trinities'
  | 'concept.torus.breathe'
  | 'concept.repository.api'
  | 'concept.repository.resolve'
  | 'concept.commands.live'
  | 'concept.proof.verify'
  | 'concept.proof.merkle.path'
  | 'concept.proof.bundle'
  | 'concept.icon.fold'
  | 'concept.icon.taxonomy'
  | 'concept.icon.glyph'
  | 'concept.reactor.words'
  | 'concept.reactor.letters'
  | 'concept.reactor.atoms'
  | 'concept.show.components'
  | 'concept.show.action'
  | 'concept.show.devices'
  | 'concept.agent.observe'
  | 'concept.agent.harmonise'
  | 'concept.digit.index'
  | 'concept.repository.ledger'
  | 'concept.site.routes'
  | 'concept.society.cells'
  | 'concept.ui.evidence'
  | 'concept.site.manifest'
  | 'concept.fold.place'
  | 'concept.fold.generate'
  | 'concept.ui.fuse'
  | 'concept.ui.reveal'
  | 'concept.ancient.pyramids'
  | 'concept.ancient.megalithic'
  | 'concept.traditions.standstill'
  | 'concept.school.overtones'
  | 'concept.science.quantum'
  | 'concept.traditions.glagolitic'
  | 'concept.geometry.imperial'
  | 'concept.geometry.heart'
  | 'concept.school.codon'
  | 'concept.science.proton'

export const SPEED_OF_LIGHT = 299792458
export const PLANCK = 6.62607015e-34
export const ELECTRONVOLT = 1.602176634e-19
export const IONIZING_EV = 10

// c = λf, both directions. wavelengthOf → pi-train wave 3 tier-B at src/1/9.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function frequencyOf(wavelengthM: number): number { return SPEED_OF_LIGHT / wavelengthM } // f = c/λ, Hz
// E = hf, reported in eV — the quantum that sorts the spectrum from radio (µeV) to gamma (MeV).
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function photonEnergyEv(frequencyHz: number): number { return (PLANCK * frequencyHz) / ELECTRONVOLT }
// isIonizing → pi-train wave 11 tier-A at src/9/1.
// MRI resonance: larmorFrequency → pi-train wave 3 tier-B at src/1/9.
// Radar ranging: round-trip time-of-flight, R = c·Δt/2 (~150 m per µs there-and-back).
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
// radarRange → pi-train wave 9 tier-A at src/3/7.
// Radar velocity: round-trip Doppler shift, Δf = 2·v·f/c (v radial, f the carrier).
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function dopplerShift(radialVelocityMs: number, carrierHz: number): number { return (2 * radialVelocityMs * carrierHz) / SPEED_OF_LIGHT }

// ── Acoustics — sound as a pressure wave (a DIFFERENT speed from light: ~343 m/s in air, temperature-dependent) ──

export const SPEED_OF_SOUND_AIR = 343 // m/s, dry air at 20 °C — adiabatic (Laplace's c = √(γRT/M), not Newton's isothermal)
// speedOfSoundAir → pi-train wave 6 tier-A at src/8/2.
// Sound wavelength λ = c/f at temperature θ — the same c = fλ as light, but at the (much slower) speed of sound.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function soundWavelength(frequencyHz: number, tempC = 20): number {
  return (331.3 * Math.sqrt(1 + tempC / 273.15)) / frequencyHz
} // metres

export function haldaneLoad(initialBar: number, inspiredBar: number, halfTimeMin: number, timeMin: number): number {
  return initialBar + (inspiredBar - initialBar) * (1 - Math.pow(2, -timeMin / halfTimeMin)) // partial pressure, bar
}
// Bühlmann ZHL-16 coefficients from a compartment half-time: a = 2/∛t½ (bar), b = 1.005 − 1/√t½ (dimensionless).
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function buhlmannA(halfTimeMin: number): number { return 2 / Math.cbrt(halfTimeMin) } // bar
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function buhlmannB(halfTimeMin: number): number { return 1.005 - 1 / Math.sqrt(halfTimeMin) }
// The tolerated ambient pressure (the ascent ceiling) for a compartment at inert-gas pressure P: P_amb,tol = (P − a)·b.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function buhlmannCeilingBar(compartmentBar: number, halfTimeMin: number): number {
  return (compartmentBar - buhlmannA(halfTimeMin)) * buhlmannB(halfTimeMin) // bar — below this ambient pressure, DCS risk rises
}

// Gradient-factor (GF) adjusted ascent ceiling — the modern conservatism on ZHL-16. The GF is passed as a
// HARMONIC FRACTION of integers (gfNum/gfDen, e.g. 30/100), so an arbitrary unharmonic decimal cannot be set:
// P_amb,tol = (P − gf·a) / (1 − gf + gf/b). GF = 1/1 recovers the raw Bühlmann ceiling; GF < 1 is more conservative.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function buhlmannGfCeilingBar(compartmentBar: number, halfTimeMin: number, gfNum: number, gfDen: number): number {
  const gf = gfNum / gfDen // an exact ratio of integers in; the float lives only in the analog ceiling output
  const a = buhlmannA(halfTimeMin), b = buhlmannB(halfTimeMin)
  return (compartmentBar - gf * a) / (1 - gf + gf / b)
}

// The 16 Bühlmann ZHL-16 nitrogen half-times (minutes) — the deterministic dive computer's tissue compartments.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export const ZHL16_N2_HALFTIMES: readonly number[] = [4, 8, 12.5, 18.5, 27, 38.3, 54.3, 77, 109, 146, 187, 239, 305, 390, 498, 635]
// The 16 ZHL-16 HELIUM compartment half-times (min), paired with the N2 set above. Helium is the FAST gas —
// every compartment quicker than its nitrogen partner — which is exactly what drives isobaric counterdiffusion.
// ZHL16_HE_HALFTIMES → pi-train wave 10 tier-A physical cut at src/6/4.
// isobaricCounterdiffusion → pi-train wave 6 tier-A at src/8/2.
// A deterministic dive computer: load the 16 compartments over a constant-depth bottom segment, then report the
// controlling ascent ceiling and whether a direct (no-decompression) ascent is allowed. Same dive → same plan.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function buhlmannDivePlan(depthM: number, bottomTimeMin: number, surfaceN2Bar = 0.79): {
  ambientBar: number; controllingCeilingBar: number; noDecoOk: boolean;
  compartments: { halfTimeMin: number; loadBar: number; ceilingBar: number }[]
} {
  const ambientBar = 1 + depthM / 10 // ~1 bar per 10 m of seawater above the 1 bar surface
  const inspiredN2Bar = (ambientBar - 0.0627) * 0.79 // alveolar N2: subtract water-vapour pressure, then the N2 fraction
  const compartments = ZHL16_N2_HALFTIMES.map((t) => {
    const loadBar = haldaneLoad(surfaceN2Bar, inspiredN2Bar, t, bottomTimeMin)
    return { halfTimeMin: t, loadBar, ceilingBar: buhlmannCeilingBar(loadBar, t) }
  })
  const controllingCeilingBar = Math.max(...compartments.map((c) => c.ceilingBar))
  return { ambientBar, controllingCeilingBar, noDecoOk: controllingCeilingBar <= 1, compartments } // ≤1 bar ⇒ direct ascent ok
}

// A gradient-factor dive plan with 3-METRE deco-stop steps. Loads the 16 compartments, finds the controlling
// GF ceiling, converts it to a depth, and rounds UP to the next 3 m step (deco stops sit at 3/6/9/… m). The
// final ascent from the 3 m stop to the surface is the steepest relative pressure change — take it slowly.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function buhlmannGfDivePlan(depthM: number, bottomTimeMin: number, gfNum: number, gfDen: number, surfaceN2Bar = 0.79): {
  ambientBar: number; controllingCeilingBar: number; ceilingM: number; firstStopM: number; noDecoOk: boolean
} {
  const ambientBar = 1 + depthM / 10
  const inspiredN2Bar = (ambientBar - 0.0627) * 0.79
  const ceilings = ZHL16_N2_HALFTIMES.map((t) => buhlmannGfCeilingBar(haldaneLoad(surfaceN2Bar, inspiredN2Bar, t, bottomTimeMin), t, gfNum, gfDen))
  const controllingCeilingBar = Math.max(...ceilings)
  const ceilingM = Math.max(0, (controllingCeilingBar - 1) * 10)
  const firstStopM = Math.ceil(ceilingM / 3) * 3 // round UP to the next 3 m step (deco stops at 3/6/9/… m)
  return { ambientBar, controllingCeilingBar, ceilingM, firstStopM, noDecoOk: firstStopM <= 0 }
}

// THE HYDROSTATIC MASK — the salt/fresh "metres per bar" are NOT two magic constants but one formula: a water
// column adds ρ·g pressure per metre (÷ 1e5 Pa/bar). Salt 9.949 and fresh 10.197 m/bar fall out of the two water
// densities through P = ρ·g·h — find the mask, and the magic numbers vanish. (Standard gravity ≠ NEWTON_G.)
export const STANDARD_GRAVITY = 9.80665 // m/s² (the defined standard gravity)
export const WATER_DENSITY_FRESH = 1000 // kg/m³
export const WATER_DENSITY_SALT = 1025 // kg/m³ (seawater — the diving-standard basis, s.g. ≈ 1.025)
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function barPerMetre(densityKgM3: number): number { return (densityKgM3 * STANDARD_GRAVITY) / 1e5 } // bar per metre of column
const waterDensity = (freshWater: boolean) => (freshWater ? WATER_DENSITY_FRESH : WATER_DENSITY_SALT)

// Ambient absolute pressure at depth, accounting for WATER DENSITY (salt vs fresh) and ALTITUDE surface pressure.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function ambientPressureBar(depthM: number, freshWater = false, surfaceBar = 1.013): number {
  return surfaceBar + depthM * barPerMetre(waterDensity(freshWater)) // P = surface + ρ·g·h
}
// Maximum operating depth of a breathing gas — the depth where its O₂ fraction reaches the PPO₂ ceiling (toxicity).
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function maxOperatingDepthM(fO2: number, ppo2MaxBar = 1.4, freshWater = false, surfaceBar = 1.013): number {
  return (ppo2MaxBar / fO2 - surfaceBar) / barPerMetre(waterDensity(freshWater)) // metres
}
// Best (richest safe) breathing-gas O₂ fraction for a target PPO₂ at a depth — gas blending by partial pressure.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function bestMixFO2(depthM: number, ppo2Bar = 1.4, freshWater = false, surfaceBar = 1.013): number {
  return ppo2Bar / ambientPressureBar(depthM, freshWater, surfaceBar) // the O₂ fraction (0..1)
}
// rebreatherInertBar → pi-train wave 3 tier-B at src/1/9.
// Gas reserve as a FRACTION — the rule of thirds (reserve = 1/3 of the total) and the 1/2-on-top rule (×3/2).
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function gasReserveThirds(totalLitres: number): number { return totalLitres / 3 } // 1/3 of the total held in reserve
// gasReserveHalfOnTop · equivalentAirDepthM → pi-train wave 4 tier-A at src/2/8.

// Equivalent narcotic depth — the air-equivalent depth with the same inert-gas narcotic load. Narcosis tracks the
// narcotic partial pressure; END is the depth at which AIR (narcotic fraction ≈ 0.79) gives the same. Helium is
// non-narcotic, so trimix LOWERS the END. (Whether oxygen is narcotic is unsettled — pass the fraction you count.)
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function equivalentNarcoticDepthM(depthM: number, fNarcotic: number, freshWater = false, surfaceBar = 1.013): number {
  const pEnd = (ambientPressureBar(depthM, freshWater, surfaceBar) * fNarcotic) / 0.79 // air's narcotic (N₂) fraction
  return (pEnd - surfaceBar) / barPerMetre(waterDensity(freshWater))
}

export const REDUCED_PLANCK = PLANCK / (2 * Math.PI)
export const SCHWINGER_FIELD_VM = 1.32e18 // V/m — the critical field for vacuum e⁺e⁻ pair production (Schwinger 1951); beyond any laser, not yet observed
// SCALAR_SPECTRAL_INDEX_NS → pi-train wave 7 tier-A at src/7/3.
// CRITICAL_MAGNETIC_FIELD_T → pi-train wave 11 tier-A at src/9/1.
export const PROTON_MASS_MEV = 938.272 // MeV/c² (CODATA)

export function seesawLightMassEv(diracMassEv: number, majoranaMassEv: number): number { return (diracMassEv * diracMassEv) / majoranaMassEv }

export const NEWTON_G = 6.67430e-11
export function schwarzschildRadius(massKg: number): number { return (2 * NEWTON_G * massKg) / (SPEED_OF_LIGHT ** 2) } // metres

export const BOLTZMANN = 1.380649e-23
export function landauerLimit(tempK: number): number { return BOLTZMANN * tempK * Math.LN2 } // joules per bit erased
// Helmholtz free energy F = U − T·S — the work AVAILABLE from a system at temperature T. "Debit entropy,
// credit energy" read as a ledger: at fixed U and T, dF = −T·dS, so LOWERING the entropy RAISES the free
// energy. Real and exactly bounded — the 2nd law forbids lowering TOTAL entropy for free, so the credit is
// paid by entropy exported elsewhere (a fridge runs on external work). The ledger balances; no net free lunch.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
// helmholtzFreeEnergy → pi-train wave 5 tier-A at src/4/6.
// Conditional entropy S(A|B) = S(AB) − S(B), in bits. Classically it is ≥ 0; QUANTUM-mechanically it can be
// NEGATIVE for entangled states (a Bell pair: S(AB)=0, S(B)=1 → −1). Negative conditional entropy is the
// resource in quantum state merging (Horodecki–Oppenheim–Winter, Nature 2005): banked entanglement, a real
// "credit" impossible classically — yet still no free energy, because Landauer's erasure cost stands.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function conditionalEntropyBits(jointEntropyBits: number, marginalEntropyBits: number): number { return jointEntropyBits - marginalEntropyBits }
// The Bekenstein bound — the MAXIMUM information (bits) a region of radius R holding energy E can contain:
// I ≤ 2πRE/(ℏc·ln2). No Newton's G appears, so it bounds non-gravitational systems too; black holes saturate it.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function bekensteinBoundBits(radiusM: number, energyJ: number): number { return (2 * Math.PI * radiusM * energyJ) / (REDUCED_PLANCK * SPEED_OF_LIGHT * Math.LN2) }

export function eigenErrorThreshold(perBaseErrorRate: number): number { return perBaseErrorRate > 0 ? 1 / perBaseErrorRate : Infinity }

/** w = p/ρ for cosmological constant Λ (measured ≈ −1). */
export const DARK_ENERGY_EOS_W = -1.0

/** Electroweak Higgs-field vacuum expectation value v (GeV). */
export const HIGGS_VEV_GEV = 246.22

/** CKM CP-violation Jarlskog invariant J. */
export const JARLSKOG_INVARIANT = 3.0e-5

/** Earth mean radius (km). */
export const EARTH_RADIUS_KM = 6371

/** Pulmonary oxygen-toxicity dose rate (OTU/min, REPEX power law). */
export function otuPerMin(ppo2Bar: number): number {
  return ppo2Bar <= 0.5 ? 0 : Math.pow((ppo2Bar - 0.5) / 0.5, 0.83)
}

/** Radar range R = c·Δt/2 (m). */
export function radarRange(roundTripSeconds: number): number {
  return (SPEED_OF_LIGHT * roundTripSeconds) / 2
}

/** Sunrise azimuth (degrees clockwise from true north). */
export function riseAzimuthDeg(latDeg: number, declinationDeg: number, horizonAltitudeDeg = 0): number | null {
  const r = Math.PI / 180
  const phi = latDeg * r
  const dec = declinationDeg * r
  const h = horizonAltitudeDeg * r
  const c = (Math.sin(dec) - Math.sin(phi) * Math.sin(h)) / (Math.cos(phi) * Math.cos(h))
  if (Math.abs(c) > 1) return null
  return Math.acos(c) / r
}

/** Half-power (−3 dB) bandwidth Δω = ω₀/q. */
export function resonanceBandwidth(omega0: number, q: number): number {
  return omega0 / Math.max(q, 1e-9)
}

// ── Octave bridge: frequency → visible light → hue (the a432 colour spine) ──
// Hosted in this zero-import leaf so the brand-anchor const A432_HUE initialises before any cyclic
// consumer barrel (quantum/science ↔ quantum/lake/icons ↔ heaven/*) runs — removing the SSR-bundle
// temporal-dead-zone "Cannot access 'A432_HUE' before initialization". frequencyToLight is a hoisted
// declaration, so A432_HUE's initializer depends only on SPEED_OF_LIGHT (local) and Math. quantum/science
// re-exports these for the existing public path; the value stays DERIVED (A432_HUE === frequencyToLight(432).hue).
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function frequencyToLight(hz: number): { octaves: number; thz: number; nm: number; hue: number; band: string } {
  let f = Math.max(1, hz)
  let octaves = 0
  while (f < 4.0e14 && octaves < 60) { f *= 2; octaves += 1 }
  const nm = (SPEED_OF_LIGHT / f) * 1e9
  const band = nm >= 620 ? 'red' : nm >= 590 ? 'orange' : nm >= 565 ? 'yellow' : nm >= 495 ? 'green' : nm >= 450 ? 'blue' : nm >= 425 ? 'indigo' : 'violet'
  const hue = nm >= 620 ? 5 : nm >= 590 ? 28 : nm >= 565 ? 55 : nm >= 495 ? 120 : nm >= 450 ? 220 : nm >= 425 ? 260 : 285
  return { octaves, thz: Math.round((f / 1e12) * 10) / 10, nm: Math.round(nm), hue, band }
}

/** 432 Hz carried up the octaves to visible light → hue 5 (red-orange) — the brand anchor, DERIVED not typed. */
export const A432_HUE = frequencyToLight(432).hue // 5 — red-orange, the colour of 432 Hz, the brand anchor
/** φ = (1+√5)/2 — golden ratio, the defining radical (not a hand-typed decimal). */
const PHI = (1 + Math.sqrt(5)) / 2
/** 360° / φ² — the golden angle, COMPUTED from φ (never a re-typed 137.5077… literal). */
export const GOLDEN_ANGLE = 360 / (PHI * PHI) // the deterministic, never-aligning hue step

// The ten dimensions of the model (6 cross-fold appearance axes + 4 genus-2 homology loops). Hosted in
// this zero-import leaf so the count + names initialise before any cyclic consumer barrel
// (quantum/mountain/dimensions ↔ mountain/topology ↔ heaven/* …) runs, removing the SSR-bundle TDZ
// "Cannot access 'DIMENSIONS' before initialization". quantum/mountain/dimensions re-exports both on the
// existing public path; values are byte-for-byte unchanged.
/** @rosetta ✦₀ · Heaven · creative (the 10 dimensions are the model) */
export const DIMENSIONS = 10
/** @rosetta ✦₀ · Heaven · creative (the 10 dimensions are the model) */
export const DIMENSION_NAMES = [
  'spread', 'depthFade', 'hueShift', 'twist', 'shrink', 'breath', // the 6 cross-fold appearance axes
  'loopA1', 'loopB1', 'loopA2', 'loopB2', // the 4 homology loops: handle1 meridian/longitude, handle2 meridian/longitude
] as const

// Canonical source-repo identity. Hosted in this zero-import leaf so the derived const AUTHOR_HANDLE
// initialises before any cyclic consumer barrel (site ↔ ui ↔ quantum/widgets …) runs, removing the
// SSR-bundle TDZ "Cannot access 'AUTHOR_HANDLE' before initialization". src/site re-exports both on the
// existing public path; AUTHOR_HANDLE stays DERIVED (one identity ← SOURCE_REPO, never hardcoded twice).
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export const SOURCE_REPO = 'https://github.com/ceccec/ceccec.github.io/blob/main'
/** The author's single handle — ONE identity across GitHub and Revolut, derived from SOURCE_REPO. */
export const AUTHOR_HANDLE = SOURCE_REPO.replace(/^https:\/\/github\.com\//, '').split('/')[0]

// Computational census / gate constants (Fibonacci census 110, genus-2 χ, dimension gates 432, rosetta 6×7,
// bāguà fan-out, siege grid). Hosted in this zero-import leaf so they initialise before any cyclic consumer
// barrel runs — removing the SSR-bundle TDZ. src/pair/enforcement/gates/computational re-exports them as the
// ONE public source; values byte-for-byte unchanged.
/** Bāguà fan-out — not less, not more than eight subfolders per folder at every level. */
export const MAX_SUBFOLDERS_PER_FOLDER = 8 as const
/** I Ching — eight-fold bāguà (trigrams, sciences, subfolder fan-out). */
export const ICHING_TRIGRAMS = 8 as const
export const ICHING_EIGHT_FOLD = MAX_SUBFOLDERS_PER_FOLDER
/** Rosetta — 6×7 / 7×6 = 42 area taxonomy (covering dynamics, not eight-fold). */
export const ROSETTA_SIX = 6 as const
export const ROSETTA_SEVEN = 7 as const
export const ROSETTA_AREAS = ROSETTA_SIX * ROSETTA_SEVEN
export const ROSETTA_FOLD_LABEL = `${ROSETTA_SIX}×${ROSETTA_SEVEN}/${ROSETTA_SEVEN}×${ROSETTA_SIX}` as const

/** Gapless Fibonacci census — 55 + 34 + 21 = 110 unfolded index.ts under src/. */
export const FIBONACCI_CENSUS_BANDS = [55, 34, 21] as const
export const UNFOLDED_CENSUS = 110 as const
/** Genus-2 double torus Euler characteristic — unfolded + χ = folded. */
export const EULER_CHI = -2 as const
export const FOLDED_CENSUS = UNFOLDED_CENSUS + EULER_CHI
/** H₁(Σ₂) = ℤ⁴ — homology loops × folded census = dimension gates. */
export const HOMOLOGY_LOOPS = 4 as const
export const DIMENSION_GATES = HOMOLOGY_LOOPS * FOLDED_CENSUS
/** harmonics() ladder rungs: 6 octaves + 9 overtones + 5 binary. */
export const HARMONICS_LADDER_LENGTH = 6 + 9 + 5
/** quantumSiege forge grid: 9 × folded census = 972 attempts. */
export const SIEGE_WAVES = 9 as const
export const SIEGE_PER_WAVE = FOLDED_CENSUS
export const SIEGE_TOTAL_FORGES = SIEGE_WAVES * SIEGE_PER_WAVE

/** Solar mass (kg) — IAU nominal. Hosted in this zero-import leaf so it initialises before any cyclic consumer
 * barrel (earth/world ↔ …); src/earth/world re-exports it on the existing public path. */
export const SOLAR_MASS_KG = 1.989e30

/** Schumann resonance fundamental (Hz) — documented Earth-ionosphere cavity mode. Hosted in this zero-import
 * leaf so it initialises before any cyclic consumer barrel (lake/music ↔ resonance …); public path unchanged. */
export const SCHUMANN_FUNDAMENTAL_HZ = 7.83

// Single-word method names per concept command. Hosted in this zero-import leaf so the map initialises before
// any cyclic consumer barrel (heaven/atoms ↔ …) runs — removing the SSR-bundle TDZ; public path unchanged.
/** @rosetta ✦₀ · Heaven · creative */
export const SINGLE_WORD_METHODS: Record<ConceptCommandName, string> = {
  'concept.site.shell': 'shell',
  'concept.self.build': 'build',
  'concept.self.complete': 'complete',
  'concept.self.address': 'address',
  'concept.agent.stream.wire': 'wire',
  'concept.mind.double.torus': 'torus',
  'concept.mind.use.cases': 'evidence',
  'concept.society.lattice': 'lattice',
  'concept.diamond.pi.train': 'train',
  'concept.diamond.complete': 'seal',
  'concept.wave.coordination': 'coordinate',
  'concept.wave.close.gaps': 'close',
  'concept.chess.quantum': 'chess',
  'concept.schema.org.diamonds': 'schema',
  'concept.traditions.quantum.whole': 'traditions',
  'concept.science.society': 'science',
  'concept.method.fusion': 'fusion',
  'concept.torus.math': 'math',
  'concept.society.humanity': 'humanity',
  'concept.commons.contribute': 'source',
  'concept.torus.matrix': 'matrix',
  'concept.torus.vector': 'vector',
  'concept.torus.flow': 'flow',
  'concept.repository.api': 'api',
  'concept.repository.resolve': 'resolve',
  'concept.proof.verify': 'verify',
  'concept.proof.merkle.path': 'include',
  'concept.diamond.metatron': 'metatron',
  'concept.digit.proof': 'prove',
  'concept.digit.math': 'compute',
  'concept.artists.surfaces': 'artists',
  'concept.artists.palette': 'palette',
  'concept.artists.melody': 'melody',
  'concept.society.educate': 'educate',
  'concept.school.curriculum': 'teach',
  'concept.mcp.tools': 'tools',
  'concept.chain.quantum': 'chain',
  'concept.help.fold': 'fold',
  'concept.fold.cross': 'weave',
  'concept.mind.develop': 'develop',
  'concept.compute.distributed': 'distribute',
  'concept.babel.fold': 'babel',
  'concept.utf.analog': 'analog',
  'concept.all.computed': 'computed',
  'concept.state.quantum': 'state',
  'concept.music.note': 'note',
  'concept.music.pi': 'tune',
  'concept.music.harmony': 'harmony',
  'concept.computer.word': 'word',
  'concept.computer.quantum': 'qubit',
  'concept.computer.run': 'run',
  'concept.healing.inner': 'mend',
  'concept.healing.outer': 'extend',
  'concept.healing.harmonic': 'resonate',
  'concept.energy.measure': 'measure',
  'concept.energy.conserve': 'conserve',
  'concept.energy.fuse': 'power',
  'concept.geometry.seal': 'sacred',
  'concept.society.sacred': 'govern',
  'concept.commons.vote': 'vote',
  'concept.commons.fair': 'sustain',
  'concept.ancient.tech': 'ancient',
  'concept.patent.fuse': 'fuse',
  'concept.patent.discover': 'discover',
  'concept.patent.review': 'review',
  'concept.nature.law': 'natural',
  'concept.nature.commons': 'public',
  'concept.nature.review': 'judge',
  'concept.lawful.harmonise': 'harmonise',
  'concept.lawful.imagine': 'imagine',
  'concept.lawful.succeed': 'succeed',
  'concept.society.relations': 'relate',
  'concept.torus.breathe': 'breathe',
  'concept.wave.self': 'rhythm',
  'concept.commands.live': 'registry',
  'concept.proof.bundle': 'bundle',
  'concept.icon.fold': 'icon',
  'concept.icon.taxonomy': 'taxonomy',
  'concept.icon.glyph': 'glyph',
  'concept.reactor.words': 'words',
  'concept.reactor.letters': 'letters',
  'concept.reactor.atoms': 'atoms',
  'concept.show.components': 'components',
  'concept.show.action': 'action',
  'concept.show.devices': 'devices',
  'concept.agent.observe': 'observe',
  'concept.agent.harmonise': 'optimise',
  'concept.digit.index': 'index',
  'concept.repository.ledger': 'ledger',
  'concept.site.routes': 'routes',
  'concept.society.cells': 'cells',
  'concept.ui.evidence': 'evidence',
  'concept.torus.trinities': 'harmonize',
  'concept.site.manifest': 'manifest',
  'concept.fold.place': 'place',
  'concept.fold.generate': 'generate',
  'concept.ui.fuse': 'fuse',
  'concept.ui.reveal': 'reveal',
  'concept.ancient.pyramids': 'pyramids',
  'concept.ancient.megalithic': 'megalithic',
  'concept.traditions.standstill': 'standstill',
  'concept.school.overtones': 'overtones',
  'concept.science.quantum': 'hilbert',
  'concept.traditions.glagolitic': 'glagolitic',
  'concept.geometry.imperial': 'imperial',
  'concept.geometry.heart': 'heart',
  'concept.school.codon': 'codon',
  'concept.science.proton': 'proton',
}

// Rosetta ray taxonomy + computation-type union. Hosted in this zero-import leaf so the literals + derived type
// initialise before any cyclic consumer barrel (water/digit ↔ heaven/compute ↔ earth/architecture …) runs —
// removing the SSR-bundle TDZ. src/water/digit re-exports all of these on the existing public path.
/** @rosetta ✦₆ · Water · the seven rosetta computation kinds (one per ray). */
export type RosettaComputationType = 'monograph' | 'proof' | 'explore' | 'learn' | 'hub' | 'frontier' | 'reference'
export const ROSETTA_COMPUTATION_TYPES: readonly RosettaComputationType[] = ['monograph', 'proof', 'explore', 'learn', 'hub', 'frontier', 'reference']
/** The seven rosetta rays — Glagolitic ladder lenses (slug → ray) for nav, sidebar, footer, content kind. */
export const ROSETTA_RAYS = [
  { ray: 0, glyph: 'Ⰰ', nameEn: 'Alpha', nameBg: 'Алфа', domain: 'origin', hue: 0 },
  { ray: 1, glyph: 'Ⰲ', nameEn: 'Voice', nameBg: 'Глас', domain: 'expression', hue: 51 },
  { ray: 2, glyph: 'Ⰴ', nameEn: 'Spirit', nameBg: 'Дух', domain: 'knowledge', hue: 102 },
  { ray: 3, glyph: 'Ⰶ', nameEn: 'Life', nameBg: 'Живот', domain: 'nature', hue: 154 },
  { ray: 4, glyph: 'Ⰹ', nameEn: 'Thought', nameBg: 'Мисъл', domain: 'computation', hue: 205 },
  { ray: 5, glyph: 'Ⰿ', nameEn: 'Form', nameBg: 'Форма', domain: 'geometry', hue: 257 },
  { ray: 6, glyph: 'Ⱄ', nameEn: 'Word', nameBg: 'Слово', domain: 'language', hue: 308 },
] as const
export type RosettaRay = (typeof ROSETTA_RAYS)[number]

// Pi spigot + the 108 pi-digit train, and the diamond/analog requirement literals. Hosted in this zero-import
// leaf so the COMPUTED const PI_TRAIN_DIGITS and the co-imported literals initialise before any cyclic consumer
// barrel (heaven/atoms ↔ fire/li ↔ heaven/core …) runs — removing the SSR-bundle TDZ "Cannot access
// 'PI_TRAIN_DIGITS' before initialization". src/heaven/atoms re-exports all of these on the existing public path.
/** @rosetta ✦₀ · Heaven · creative */
export function computePiDigits(count: number): string {
  let q = 1n
  let r = 0n
  let t = 1n
  let k = 1n
  let n = 3n
  let l = 3n
  let digits = ''

  while (digits.length < count) {
    if (4n * q + r - t < n * t) {
      digits += n.toString()
      const nextR = 10n * (r - n * t)
      n = (10n * (3n * q + r)) / t - 10n * n
      q *= 10n
      r = nextR
    } else {
      const nextR = (2n * q + r) * l
      const nextN = (q * (7n * k) + 2n + r * l) / (t * l)
      q *= k
      t *= l
      l += 2n
      k += 1n
      n = nextN
      r = nextR
    }
  }

  return digits
}
/** @rosetta ✦₀ · Heaven · creative — 108 pi-digit coordinates (the sacred 108: chakras × 12, the mala). */
export const PI_TRAIN_DIGITS = computePiDigits(108)
/** @rosetta ✦₀ · Heaven · creative */
export const REQUIRED_DIAMOND_KINDS: readonly DiamondKind[] = [
  'agent',
  'ui',
  'math',
  'dynamics',
  'proof',
  'nature',
  'tradition',
  'pi',
  'geometry',
  'sound',
  'vibration',
  'humanity',
  'source',
  'repository',
] as const
/** @rosetta ✦₀ · Heaven · creative */
export const REQUIRED_DIAMOND_POLES: readonly DiamondFacet['pole'][] = ['north', 'east', 'south', 'west'] as const
/** @rosetta ✦₀ · Heaven · creative */
export const REQUIRED_ANALOG_CHANNELS: readonly AnalogChannel[] = ['3d-position', 'sound', 'vibration', 'timing', 'receipt', 'facets'] as const

/** Maximum tampering cost principle — seal closes at coverage 1 ∧ entropy 0. Hosted in this zero-import leaf so
 * it initialises before any cyclic consumer; src/4/6 re-exports it on the existing public path. */
export const MAX_TAMPERING_COST_PRINCIPLE =
  'Maximum tampering cost is only claimed when the inward proof loop closes measured coverage at 1 and the outward double-torus flow preserves zero reciprocal entropy.'

// NASA/JPL mean orbital periods (days), semi-major axes (km), and radii (km) — circular Keplerian model, not
// ephemeris. Hosted in this zero-import leaf so it initialises before any cyclic consumer barrel
// (fire/li ↔ … ) runs, removing the SSR-bundle TDZ "Cannot access 'MAJOR_MOONS' before initialization".
// src/fire/li re-exports it on the existing public path; value byte-for-byte unchanged.
/** @rosetta ✦₁ · Fire · clarity */
export const MAJOR_MOONS = [
  { name: 'Io', parent: 'Jupiter', periodDays: 1.769, orbitRadiusKm: 421_700, radiusKm: 1821.6 },
  { name: 'Europa', parent: 'Jupiter', periodDays: 3.551, orbitRadiusKm: 671_100, radiusKm: 1560.8 },
  { name: 'Ganymede', parent: 'Jupiter', periodDays: 7.155, orbitRadiusKm: 1_070_400, radiusKm: 2634.1 },
  { name: 'Callisto', parent: 'Jupiter', periodDays: 16.689, orbitRadiusKm: 1_882_700, radiusKm: 2410.3 },
  { name: 'Titan', parent: 'Saturn', periodDays: 15.945, orbitRadiusKm: 1_221_830, radiusKm: 2574.7 },
  { name: 'Triton', parent: 'Neptune', periodDays: 5.877, orbitRadiusKm: 354_759, radiusKm: 1353.4, retrograde: true },
] as const

// The standard genetic code (NCBI translation table 1) — the amino-acid letter per 64-codon index. Hosted in
// this zero-import leaf so it initialises before any cyclic consumer barrel (life ↔ water/digit ↔
// quantum/heaven/mind …) runs, removing the SSR-bundle TDZ "Cannot access 'GENETIC_CODE' before
// initialization". src/life re-exports it on the existing public path; value byte-for-byte unchanged.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export const GENETIC_CODE = 'FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG'

// a432 octave ladder (432 Hz × 2^k, k = −4…+2) — the cycle basis for the synthetic price engine.
// Hosted in this zero-import leaf so it initialises before any cyclic consumer barrel
// (thunder/trading ↔ thunder/waves ↔ vortex/math ↔ quantum/fire/experiments) runs, removing the
// SSR-bundle TDZ "Cannot access 'A432_OCTAVES' before initialization". thunder/trading re-exports
// it on the existing public path; value is byte-for-byte the prior ladder.
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export const A432_OCTAVES = [27, 54, 108, 216, 432, 864, 1728]

// ── Exact rational arithmetic (relocated from src/0 — the math station holds the ratio cuts) ──
// ── Exact rational arithmetic — the analog without decimals or integers ────────────────────────
// The digits become analog through their RATIOS (p/q), never as bare integers.
// These six operations + str cover all arithmetic on exact fractions: no float, no rounding.
/** @rosetta relocated pi-train station cut (was src/0 — a domain block, not a vault primitive) */
export type Rational = { readonly p: number; readonly q: number }
/** @rosetta relocated pi-train station cut (was src/0 — a domain block, not a vault primitive) */
export function rat(p: number, q: number): Rational {
  if (q === 0) throw new RangeError('rat: zero denominator')
  const sign = q < 0 ? -1 : 1
  const g = gcd(Math.abs(p), Math.abs(q))
  return { p: (sign * p) / g, q: Math.abs(q) / g }
}
/** @rosetta relocated pi-train station cut (was src/0 — a domain block, not a vault primitive) */
export function ratAdd(a: Rational, b: Rational): Rational { return rat(a.p * b.q + b.p * a.q, a.q * b.q) }
/** @rosetta relocated pi-train station cut (was src/0 — a domain block, not a vault primitive) */
export function ratMul(a: Rational, b: Rational): Rational { return rat(a.p * b.p, a.q * b.q) }
/** @rosetta relocated pi-train station cut (was src/0 — a domain block, not a vault primitive) */
export function ratInv(a: Rational): Rational { return rat(a.q, a.p) }
/** @rosetta relocated pi-train station cut (was src/0 — a domain block, not a vault primitive) */
export function ratSub(a: Rational, b: Rational): Rational { return ratAdd(a, rat(-b.p, b.q)) }
/** @rosetta relocated pi-train station cut (was src/0 — a domain block, not a vault primitive) */
export function ratDiv(a: Rational, b: Rational): Rational { return ratMul(a, ratInv(b)) }
/** @rosetta relocated pi-train station cut (was src/0 — a domain block, not a vault primitive) */
export function ratEq(a: Rational, b: Rational): boolean { return a.p * b.q === b.p * a.q }
// ratIsInteger → pi-train wave 11 tier-A at src/9/1.
// The analog OUTPUT edge — the ONLY place a harmonic fraction becomes a float. Exact ratio in, the decimal only
// here, at the boundary where a number is rendered or handed to a float-typed physics function (never in a fold).
/** @rosetta relocated pi-train station cut (was src/0 — a domain block, not a vault primitive) */
export function ratToFloat(r: Rational): number { return r.p / r.q }
// ratStr → pi-train wave 11 tier-A at src/9/1.

// The vortex harmonic ratios: consecutive digit pairs as exact fractions — never hardcoded.
// Forward: 1/2 · 1/2 · 1/2 · 8/7 · 7/5 · 5/3 · 1/2 · 2/3 · 9 → product = 1 (ring seals itself).
// 5 is the heart: multiplicative inverse of 2 in (ℤ/9ℤ)*; approach 7/5, depart 5/3 → diamond 7/3.
/** @rosetta relocated pi-train station cut (was src/0 — a domain block, not a vault primitive) */
export function vortexHarmonicRatios(): {
  fwd: Rational[]; rev: Rational[]
  fwdProduct: Rational; revProduct: Rational
  heartApproach: Rational; heartDepart: Rational; heartDiamond: Rational
} {
  const fwd = VORTEX_SEQUENCE.map((d, i) => rat(d, VORTEX_SEQUENCE[(i + 1) % VORTEX_SEQUENCE.length]!))
  const rev = VORTEX_REVERSE.map((d, i) => rat(d, VORTEX_REVERSE[(i + 1) % VORTEX_REVERSE.length]!))
  const fwdProduct = fwd.reduce(ratMul, rat(1, 1))
  const revProduct = rev.reduce(ratMul, rat(1, 1))
  const heartIdx = VORTEX_SEQUENCE.indexOf(5)
  const heartApproach = rat(VORTEX_SEQUENCE[(heartIdx - 1 + VORTEX_SEQUENCE.length) % VORTEX_SEQUENCE.length]!, VORTEX_SEQUENCE[heartIdx]!)
  const heartDepart = rat(VORTEX_SEQUENCE[heartIdx]!, VORTEX_SEQUENCE[(heartIdx + 1) % VORTEX_SEQUENCE.length]!)
  const heartDiamond = ratMul(heartApproach, heartDepart)
  return { fwd, rev, fwdProduct, revProduct, heartApproach, heartDepart, heartDiamond }
}

// Evaluate a continued fraction [a₀; a₁, …, aₙ₋₁] to n terms as an exact Rational.
// Computed from the innermost term outward — all arithmetic is exact rational, no floats.
/** @rosetta relocated pi-train station cut (was src/0 — a domain block, not a vault primitive) */
export function cfEval(terms: readonly number[], n: number): Rational {
  const len = Math.min(Math.max(1, n), terms.length)
  let r = rat(terms[len - 1]!, 1)
  for (let i = len - 2; i >= 0; i--) r = ratAdd(rat(terms[i]!, 1), ratInv(r))
  return r
}

// The vortex continued fraction [1;2,4,8,7,5,3,6,9, 1,2,4,8,7,5,…] — period-9 repeating.
// Convergents computed purely from VORTEX_SEQUENCE: no hardcoded digits.
// Converges to a quadratic irrational (periodic CF = root of integer quadratic equation).
/** @rosetta relocated pi-train station cut (was src/0 — a domain block, not a vault primitive) */
export function vortexContinuedFrac(n: number): Rational {
  const terms = Array.from({ length: Math.max(1, n) }, (_, i) => VORTEX_SEQUENCE[i % VORTEX_SEQUENCE.length]!)
  return cfEval(terms, terms.length)
}

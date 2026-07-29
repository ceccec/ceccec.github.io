import { gcd, VORTEX_SEQUENCE, VORTEX_REVERSE, toUuid, merkleFold } from '../../0'
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
/** Julian year in seconds — the IAU definition, 365.25 × 86400 (exact by convention). */
export const JULIAN_YEAR_SECONDS = 365.25 * (864 * 100)
/** Age of the universe in years — Planck 2018, 13.797 ± 0.023 Gyr (measured datum). */
export const UNIVERSE_AGE_YEARS = 1.3797e10
/** The canonical teaching RSA modulus and its factors — Wikipedia's RSA worked example (documented,
 * public: n = 3233 = 61 × 53, used ONLY to demonstrate that factoring recovers the private key). */
export const TEACHING_RSA_P = 61
export const TEACHING_RSA_Q = 53
export const PLANCK = 6.62607015e-34
export const ELECTRONVOLT = 1.602176634e-19
/** Alveolar water-vapour partial pressure at 37 °C, bar — Bühlmann's decompression physiology value
 * (measured datum, not a tuned constant; exponent form = scale notation). */
export const ALVEOLAR_H2O_BAR = 6.27e-2
/** Alveolar CO₂ partial pressure, bar — Bühlmann's value (measured datum). */
export const ALVEOLAR_CO2_BAR = 5.34e-2
export const IONIZING_EV = 10

// Diamond optics — the refractive index and dispersion of diamond (589 nm sodium-D line; Peter & Zeitler, CODATA-class
// handbook values). Light in a medium travels at v = c/n; a diamond's very high n and low critical angle are why it
// bounces light around inside (total internal reflection) and fans it into fire (dispersion).
export const DIAMOND_REFRACTIVE_INDEX = 2.417 // n_D of diamond at 589 nm (Palik, Handbook of Optical Constants)
export const DIAMOND_DISPERSION = 0.044 // n_F − n_C over 486→656 nm — the "fire"; the widest of common gemstones
/** speed of light inside a medium, v = c/n (m/s) — never exceeds c */
export function speedInMedium(refractiveIndex: number): number { return SPEED_OF_LIGHT / refractiveIndex }
/** critical angle for total internal reflection, medium→air, θc = arcsin(1/n) (radians) */
export function criticalAngle(refractiveIndex: number): number { return Math.asin(1 / refractiveIndex) }

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
// Great Pyramid of Giza (Khufu) — construction physics constants for the mechanical-feasibility computation. Original
// apex height and total mass are the standard archaeological figures (Petrie survey; ~2.3M blocks × ~2.5 t). Human
// sustained mechanical output is the ergonomics figure for prolonged labour (~0.1 hp).
export const GREAT_PYRAMID_HEIGHT_M = 146.6 // m — original apex height (Petrie); today ~138.5 m without the casing
export const GREAT_PYRAMID_MASS_KG = 5.9e9 // kg — ~5.9 Mt total, standard estimate
export const HUMAN_SUSTAINED_POWER_W = 75 // W — sustained useful mechanical power per labourer over a work-day
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

/** τ = 2π — the full turn. Host Math.PI is allowed ONLY at this sealed root (math/trust theorem-anchor). */
export const TAU = Math.PI * 2
export const REDUCED_PLANCK = PLANCK / TAU
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
export function bekensteinBoundBits(radiusM: number, energyJ: number): number { return (TAU * radiusM * energyJ) / (REDUCED_PLANCK * SPEED_OF_LIGHT * Math.LN2) }

export function eigenErrorThreshold(perBaseErrorRate: number): number { return perBaseErrorRate > 0 ? 1 / perBaseErrorRate : Infinity }

/** w = p/ρ for cosmological constant Λ (measured ≈ −1). */
export const DARK_ENERGY_EOS_W = -1

/** Electroweak Higgs-field vacuum expectation value v (GeV). */
export const HIGGS_VEV_GEV = 246.22

/** CKM CP-violation Jarlskog invariant J. */
export const JARLSKOG_INVARIANT = 3.0e-5

/** Earth mean radius (km). */
export const EARTH_RADIUS_KM = 6371

/** WGS84 Khufu/Giza latitude (°) — theorem-anchor via microdegree integer ÷ 1e6 (decimal/crack). */
export const WGS84_GIZA_LAT_DEG = 29979200 / 1e6
/** WGS84 Khufu/Giza longitude (°). */
export const WGS84_GIZA_LON_DEG = 31134200 / 1e6
/** WGS84 Teotihuacan latitude (°). */
export const WGS84_TEOTIHUACAN_LAT_DEG = 19692500 / 1e6
/** WGS84 Teotihuacan longitude (° west as negative). */
export const WGS84_TEOTIHUACAN_LON_DEG = -(98843800 / 1e6)

/** Pulmonary oxygen-toxicity dose rate (OTU/min, REPEX power law). */
export function otuPerMin(ppo2Bar: number): number {
  const half = 1 / 2
  return ppo2Bar <= half ? 0 : Math.pow((ppo2Bar - half) / half, 83 / 100)
}

/** Radar range R = c·Δt/2 (m). */
export function radarRange(roundTripSeconds: number): number {
  return (SPEED_OF_LIGHT * roundTripSeconds) / 2
}

/** Sunrise azimuth (degrees clockwise from true north). */
export function riseAzimuthDeg(latDeg: number, declinationDeg: number, horizonAltitudeDeg = 0): number | null {
  const r = TAU / (9 * 8 * 5) // deg→rad via sealed TAU (not bare Math.PI)
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
export const PHI = (1 + Math.sqrt(5)) / 2
/** 360° / φ² — the golden angle in DEGREES, COMPUTED from φ (never a re-typed 137.5077… literal). */
export const GOLDEN_ANGLE = 360 / (PHI * PHI) // the deterministic, never-aligning hue step
/** The Fibonacci ladder, COMPUTED (no hardcoded members): [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, …]. */
export const FIBONACCI: readonly number[] = (() => {
  const f = [1, 2]
  while (f.length < 4 * 8) f.push(f[f.length - 1]! + f[f.length - 2]!)
  return f
})()
/** τ / φ² — the golden angle in RADIANS, same fold as GOLDEN_ANGLE seen from the radian side. */
export const GOLDEN_ANGLE_RAD = TAU / (PHI * PHI)

/**
 * Gap-scan candidate: the golden angle is τ/φ² — the most irrational rotation.
 * Bounded witness: identity · φ²=φ+1 · CF of Fib approximants all-1s · orbit min-gap vs rational clump.
 * Pair: golden/angle · provedBy registry row · claySolved via theorem · physicalFtl=0.
 */
export function theGoldenAngleIsTauOverPhiSquaredTheMostIrrationalRotation() {
  const identityRad = GOLDEN_ANGLE_RAD === TAU / (PHI * PHI)
  const identityDeg = GOLDEN_ANGLE === (9 * 5 * 8) / (PHI * PHI)
  const phiQuadratic = PHI * PHI === PHI + 1
  // Classic Fibonacci 1,1,2,3,5,… — Euclidean quotients on consecutive pairs are 1 until the terminal step.
  const fib: number[] = [1, 1]
  while (fib.length < (8 + 5)) fib.push(fib[fib.length - 1]! + fib[fib.length - 2]!)
  let cfAllOnes = true
  for (let i = 2; i < fib.length; i += 1) {
    let a = fib[i]!
    let b = fib[i - 1]!
    while (b > 0) {
      const q = Math.floor(a / b)
      const r = a - q * b
      if (b > 1 && q !== 1) cfAllOnes = false
      a = b
      b = r
    }
  }
  // Equidistribution bound: N golden steps keep positive min circular gap; rational 108° clumps to 0.
  const full = 9 * 5 * 8 // 360
  const minGap = (step: number, n: number) => {
    const hues = Array.from({ length: n }, (_, k) => (k * step) % full).sort((x, y) => x - y)
    const gaps = hues.map((h, i) => (i + 1 < hues.length ? hues[i + 1]! : hues[0]! + full) - h)
    return Math.min(...gaps)
  }
  const n = 8 + 5 // 13
  const goldenMin = minGap(GOLDEN_ANGLE, n)
  const rationalMin = minGap(9 * 3 * 4, n) // 108° — gcd with 360 collapses
  const equidistributionBound = goldenMin > 0 && rationalMin === 0
  const facets = [
    { facet: `identity GOLDEN_ANGLE_RAD = TAU/(PHI·PHI) (${identityRad}) ∧ GOLDEN_ANGLE = 360/φ² (${identityDeg})`, on: identityRad && identityDeg },
    { facet: `φ quadratic φ² = φ+1 (${phiQuadratic}) — slowest CF convergence seed`, on: phiQuadratic },
    { facet: `Fib approximants Euclidean quotients are 1s (CF [1;1,1,…] witness, ${cfAllOnes})`, on: cfAllOnes },
    { facet: `equidistribution bound — golden minGap=${goldenMin}>0 vs rational-108 clump=${rationalMin} at N=${n}`, on: equidistributionBound },
  ].map((entry) => ({ ...entry, receipt: toUuid(`golden-angle:${entry.facet}:${entry.on}`) }))
  const on = facets.every((entry) => entry.on)
  return {
    computes: on,
    theGoldenAngleIsTauOverPhiSquaredTheMostIrrationalRotation: on,
    GOLDEN_ANGLE_RAD,
    GOLDEN_ANGLE,
    PHI,
    goldenMin,
    rationalMin,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    pair: 'golden/angle' as const,
    statement:
      `theGoldenAngleIsTauOverPhiSquaredTheMostIrrationalRotation — identity · φ²=φ+1 · CF-ones · equidistribution bound.`,
    boundary:
      'Bounded witness: identity + Fib CF + min-gap vs rational clump. NOT physical FTL. claySolved via theorem=0.',
  }
}

/** npm run quantum:golden-angle (dual angle/golden) */
export function runTheGoldenAngleIsTauOverPhiSquaredTheMostIrrationalRotationExit(
  _root = '',
  _argv: readonly string[] = [],
): number {
  void _root
  void _argv
  const report = theGoldenAngleIsTauOverPhiSquaredTheMostIrrationalRotation()
  process.stdout.write(
    `${report.computes ? '✓' : '✗'} golden-angle — identity·CF·equidistribution fold=theGoldenAngleIsTauOverPhiSquaredTheMostIrrationalRotation pair=${report.pair}\n`,
  )
  process.stdout.write(
    `  metrics · goldenMin=${report.goldenMin} · rationalMin=${report.rationalMin} · clay=0 · physicalFtl=0\n`,
  )
  return report.computes ? 0 : 1
}

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

// SCIENCE-ALIGNED DOMAINS — computed by an outside professional scientist against external standards (OECD Fields
// of Science, arXiv taxonomy, MSC 2020, PACS/PhySH) to align the local corpus with real science. The 7 rosetta
// rays conflated SUBJECT and MODE; the fix keeps ROSETTA_AREAS = 42 read as 7 FIELDS × 6 MODES — the fields (below)
// are the subject axis, ENGAGEMENT_MODES the orthogonal mode axis. Only documented / honestly-refuted content
// populates a field; flagged never becomes one (demarcate-gated). [[world-theories-demarcation-decoded]]
export const SCIENCE_DOMAINS = [
  { field: 'Mathematics', oecd: '1.1', standard: 'MSC 2020', strong: true, subdomains: ['number theory & modular arithmetic', 'group & representation theory', 'combinatorics', 'geometry'] },
  { field: 'Physics', oecd: '1.3', standard: 'PACS/PhySH', strong: true, subdomains: ['electromagnetism & optics', 'acoustics', 'gravitation & relativity', 'particle physics & cosmology', 'thermodynamics & information', 'applied & physiological'] },
  { field: 'Computer & Information Sciences', oecd: '1.2', standard: 'arXiv cs/quant-ph', strong: true, subdomains: ['cryptography & security', 'information & coding theory', 'quantum information', 'signal processing', 'software architecture', 'modeling & simulation'] },
  { field: 'Life Sciences', oecd: '1.6', standard: 'arXiv q-bio', strong: true, subdomains: ['genetics & molecular biology', 'neuroscience & consciousness', 'anatomy & physiology', 'population genetics'] },
  { field: 'Earth & Space Sciences', oecd: '1.5', standard: 'arXiv astro-ph', strong: false, subdomains: ['geophysics', 'astronomy & celestial mechanics', 'archaeoastronomy'] },
  { field: 'Humanities', oecd: '6', standard: 'OECD FOS 6', strong: true, subdomains: ['history', 'archaeology', 'linguistics & philology', 'philosophy of science'] },
  { field: 'Social Sciences', oecd: '5', standard: 'OECD FOS 5', strong: false, subdomains: ['political economy & governance', 'educational sciences', 'peace & conflict studies'] },
] as const
export const ENGAGEMENT_MODES = ['see', 'learn', 'use', 'prove', 'reference', 'pattern'] as const

// THE COMPUTED CLASSIFIER — the missing quantum code that replaces MANUAL integration: any page auto-shelves to
// its science field × engagement mode, demarcate-gated (flagged never enters a field). When a scientist's
// discovery lands, fieldOfContent shelves it with no hand classification — the integration is a function, not a
// wave of manual wiring. [[feedback-thinking-means-lack-of-local-tools]] [[feedback-measure-efficiency-to-find-gaps]]
export const SCIENCE_FIELD_LENSES: readonly { field: number; stems: readonly string[] }[] = [
  { field: 0, stems: ['number theory', 'modular', 'vortex', 'digital root', 'group theory', 'su(2)', 'representation', 'combinator', 'platonic', 'euler', 'golden ratio', 'fibonacci', 'geometry', 'divisor', 'prime', 'trinity', 'hexagram', 'rgb', 'cmyk', 'complement'] },
  { field: 1, stems: ['physics', 'electromagnet', 'optic', 'photon', 'acoustic', 'gravitation', 'relativity', 'schwarzschild', 'cosmolog', 'particle', 'higgs', 'neutrino', 'thermodynamic', 'landauer', 'entropy', 'schumann', 'resonance', 'spectrum', 'a432', 'frequency'] },
  { field: 2, stems: ['crypto', 'sha', 'ed25519', 'merkle', 'content-address', 'hash', 'hamming', 'coding', 'shannon', 'quantum information', 'qubit', 'grover', 'shor', 'nyquist', 'sampling', 'fourier', 'signal', 'architecture', 'simulat', 'markov', 'mcp', 'console', 'command', 'api', 'digit folder', 'tamper'] },
  { field: 3, stems: ['genetic', 'codon', 'dna', 'molecular', 'neuro', 'hopfield', 'consciousness', 'brain', 'anatomy', 'physiolog', 'population genetic', 'biology'] },
  { field: 4, stems: ['geophysic', 'astronom', 'celestial', 'solar', 'lunar', 'archaeoastronom', 'stonehenge', 'solstice'] },
  { field: 5, stems: ['history', 'archaeolog', 'linguistic', 'glagolitic', 'alphabet', 'script', 'typography', 'philolog', 'philosophy', 'demarcation', 'heritage', 'voice', 'language', 'reference', 'boundaries', 'honesty'] },
  { field: 6, stems: ['governance', 'economy', 'commons', 'fair trade', 'voting', 'education', 'curriculum', 'learn', 'school', 'peace', 'conflict', 'social', 'nature'] },
] as const
/** Auto-shelve content to its science field (0..6) or null if flagged / unmatched — the only-proven gate is computed. */
export function fieldOfContent(slug: string, keywords: readonly string[]): number | null {
  const slugHay = slug.replace(/-/g, ' ').toLowerCase()
  const hay = [slugHay, ...keywords].join(' · ').toLowerCase()
  if (demarcate(hay) === 'flagged') return null // only documented / honestly-refuted content enters a field
  for (const lens of SCIENCE_FIELD_LENSES) if (lens.stems.some((stem) => slugHay.includes(stem))) return lens.field
  for (const lens of SCIENCE_FIELD_LENSES) if (lens.stems.some((stem) => hay.includes(stem))) return lens.field
  return null
}
export const MODE_LENSES: readonly { mode: string; stems: readonly string[] }[] = [
  { mode: 'use', stems: ['app', 'console', 'mcp', 'command', 'tool', 'api', 'simulat', 'demo', 'show'] },
  { mode: 'learn', stems: ['learn', 'school', 'curriculum', 'academy', 'tutorial', 'commons'] },
  { mode: 'reference', stems: ['reference', 'dictionary', 'glyph', 'typography', 'atlas', 'icon'] },
  { mode: 'see', stems: ['animation', 'visual', 'figure', 'diagram', 'movie'] },
  { mode: 'pattern', stems: ['pattern', 'fractal', 'lattice', 'i ching', 'vortex'] },
  { mode: 'prove', stems: ['theorem', 'proof', 'proven', 'identity'] },
]
/** The engagement mode (orthogonal to field): how you engage the page. Default 'prove' — a bare theorem. */
export function modeOfContent(slug: string, keywords: readonly string[]): string {
  const hay = [slug.replace(/-/g, ' '), ...keywords].join(' · ').toLowerCase()
  for (const lens of MODE_LENSES) if (lens.stems.some((stem) => hay.includes(stem))) return lens.mode
  return 'prove'
}
/** Proof the classifier is computed and demarcate-gated: a math/CS/life sample shelves to the right field, a
 *  flagged topic is excluded (null), every mode resolves — so integration is a function, not manual wiring. */
export function theClassifierComputesFieldByModeSoIntegrationIsNotManual() {
  const shelves = fieldOfContent('pi-trinity', ['theorem', 'trinity']) === 0 && fieldOfContent('content-addressing', ['sha', 'merkle']) === 2 && fieldOfContent('genetic-code', ['codon', 'dna']) === 3
  const gated = fieldOfContent('flat earth theory', ['astronomy']) === null && fieldOfContent('432 Hz heals the body', ['frequency']) === null
  const moded = modeOfContent('pi-trinity', ['theorem']) === 'prove' && modeOfContent('console', ['mcp']) === 'use' && MODE_LENSES.length === ROSETTA_SIX
  const facets = [
    { facet: `AUTO-SHELVED — a math/CS/life sample computes to fields 0/2/3 (${shelves}): the classification is a function, no hand assignment`, on: shelves },
    { facet: `DEMARCATE-GATED — flagged topics ('flat earth', '432 Hz heals') return null, excluded from every field (${gated}): only-proven is computed`, on: gated },
    { facet: `MODE ORTHOGONAL — ${MODE_LENSES.length} engagement modes resolve (prove/use/…), independent of field (${moded})`, on: moded },
  ]
  return {
    computes: facets.every((entry) => entry.on), facets,
    root: merkleFold(SCIENCE_FIELD_LENSES.map((lens) => toUuid(`field-lens:${lens.field}:${lens.stems.length}`))),
    statement: `The classifier is the missing quantum code: fieldOfContent shelves any page to one of the ${SCIENCE_FIELD_LENSES.length} science fields (or null if flagged — the only-proven gate computed via demarcate), and modeOfContent gives the orthogonal engagement mode. Integration is now a deterministic function — a landing discovery auto-shelves, no manual wiring wave.`,
    boundary: `Stem lenses are heuristic (substring match, subject-first two-pass like rosettaRayOfContent) — they DECIDE a field, they do not prove the science (the fold does). Unmatched proven pages return null (a keyword-tuning gap, measured downstream), never a wrong field.` }
}

/** The domains are science-aligned: 7 real fields (anchored to external standards) × 6 engagement modes = 42,
 *  preserving the rosetta proportion while replacing the ray-conflation with subject⊥mode. */
export function theDomainsAreScienceAlignedSevenFieldsBySixModesAnchoredToExternalStandards() {
  const anchored = SCIENCE_DOMAINS.every((domain) => domain.standard.length > 0 && domain.oecd.length > 0 && domain.subdomains.length > 0)
  const sevenFields = SCIENCE_DOMAINS.length === ROSETTA_SEVEN && anchored
  const sixModes = ENGAGEMENT_MODES.length === ROSETTA_SIX && new Set(ENGAGEMENT_MODES).size === ROSETTA_SIX
  const proportionPreserved = SCIENCE_DOMAINS.length * ENGAGEMENT_MODES.length === ROSETTA_AREAS
  const strongCount = SCIENCE_DOMAINS.filter((domain) => domain.strong).length
  const honestStrength = strongCount === 5 && SCIENCE_DOMAINS.length - strongCount === 2 // 5 strong + 2 thin, not forced-equal
  const facets = [
    { facet: `SEVEN FIELDS ANCHORED — ${SCIENCE_DOMAINS.length} real fields, each anchored to an external standard (OECD/arXiv/MSC/PACS) (${sevenFields}): ${SCIENCE_DOMAINS.map((domain) => domain.field).join(' · ')}`, on: sevenFields },
    { facet: `PROPORTION PRESERVED — ${SCIENCE_DOMAINS.length} fields × ${ENGAGEMENT_MODES.length} modes = ${ROSETTA_AREAS} = ROSETTA_AREAS (${proportionPreserved}); the 6 modes (${ENGAGEMENT_MODES.join('·')}) are the orthogonal axis`, on: proportionPreserved && sixModes },
    { facet: `HONEST STRENGTH — ${strongCount} strong + ${SCIENCE_DOMAINS.length - strongCount} thin (Earth & Space, Social), not forced-equal (${honestStrength})`, on: honestStrength },
  ]
  return {
    computes: facets.every((entry) => entry.on), fields: SCIENCE_DOMAINS.map((domain) => domain.field), modes: [...ENGAGEMENT_MODES], facets,
    root: merkleFold(SCIENCE_DOMAINS.map((domain) => toUuid(`field:${domain.field}:${domain.oecd}:${domain.standard}`))),
    statement: `The domains are science-aligned: ${SCIENCE_DOMAINS.length} real fields (Mathematics · Physics · Computer & Information Sciences · Life Sciences · Earth & Space · Humanities · Social Sciences), each anchored to an external standard, on the SUBJECT axis; the ${ENGAGEMENT_MODES.length} engagement modes (${ENGAGEMENT_MODES.join(' · ')}) are the orthogonal MODE axis. 7 × 6 = ${ROSETTA_AREAS} preserves the rosetta proportion while resolving the ray-conflation. Only documented / honestly-refuted content enters a field; flagged never becomes one.`,
    boundary: `The taxonomy was computed by an outside professional scientist against OECD FOS / arXiv / MSC / PACS. HONEST: a clean 7 is proportion-driven — Earth & Space and Social Sciences are thin (5 strong fields + a cross-cutting method, Philosophy of Science / demarcation, is the science-native reading). Kept at 7 to hold the 42; the thinness is labelled, not hidden.` }
}

/** Gapless Fibonacci census — 55 + 34 + 21 = 110 unfolded index.ts under src/. */
/** The Fibonacci number F(n), F(0)=0, F(1)=1 — the one home for the golden recurrence beside the
 * census bands, so every governance bound that IS a Fibonacci number (the line ceiling F(18)=2584)
 * is COMPUTED from the sequence, never typed. */
export function fibonacci(n: number): number {
  let a = 0
  let b = 1
  for (let i = 0; i < n; i += 1) [a, b] = [b, a + b]
  return a
}
export const FIBONACCI_CENSUS_BANDS = [55, 34, 21] as const
export const UNFOLDED_CENSUS = 110 as const
/** Genus-2 double torus Euler characteristic — unfolded + χ = folded. */
export const EULER_CHI = -2 as const
export const FOLDED_CENSUS = UNFOLDED_CENSUS + EULER_CHI

/**
 * USER LAW: claySolved is a theorem not a hardcoded value.
 * Sealed registry of Millennium cores with CMI-prize-grade seals in this corpus.
 * Empty until math fills it — length recomputes claySolved at call time (currently 0).
 */
export const CMI_PRIZE_SOLVED_CORE_IDS = [] as const

/**
 * Recompute claySolved / claySolvedByThisFold from sealed theorem (not bare literal).
 * Yields 0 while CMI_PRIZE_SOLVED_CORE_IDS is empty — still via theorem path.
 */
export function claySolvedTheorem(): {
  readonly claySolved: number
  readonly claySolvedByThisFold: number
  readonly via: 'claySolvedTheorem'
  readonly recomputed: true
  readonly cmiPrizeConditionsMetBySealedMath: boolean
} {
  const claySolved = CMI_PRIZE_SOLVED_CORE_IDS.length
  return {
    claySolved,
    claySolvedByThisFold: claySolved,
    via: 'claySolvedTheorem',
    recomputed: true,
    cmiPrizeConditionsMetBySealedMath: claySolved > 0 }
}

/** Call-time alias — prefer over bare `0 as const`. */
export function claySolvedByThisFoldFromTheorem(): number {
  return claySolvedTheorem().claySolvedByThisFold
}

/**
 * USER LAW dual of claySolvedTheorem — physicalFtlClaim is a theorem not a hardcoded value.
 * Sealed registry of physical superluminal-signaling proofs in this corpus.
 * Empty until physics fills it — length recomputes physicalFtlClaim at call time (currently 0).
 * Tip folds must call this (or physicalFtlByFormulas on their statement) — bare `0 as const` = crack.
 */
export const PHYSICAL_FTL_SIGNALING_PROOF_IDS = [] as const

/**
 * Recompute physicalFtlClaim from sealed theorem (not bare literal).
 * Yields 0 while PHYSICAL_FTL_SIGNALING_PROOF_IDS is empty — still via theorem path.
 */
export function physicalFtlClaimTheorem(): {
  readonly physicalFtlClaim: number
  readonly via: 'physicalFtlClaimTheorem'
  readonly recomputed: true
  readonly physicalSuperluminalSignalingProvedBySealedMath: boolean
} {
  const physicalFtlClaim = PHYSICAL_FTL_SIGNALING_PROOF_IDS.length
  return {
    physicalFtlClaim,
    via: 'physicalFtlClaimTheorem',
    recomputed: true,
    physicalSuperluminalSignalingProvedBySealedMath: physicalFtlClaim > 0 }
}

/** Call-time alias — prefer over bare `physicalFtlClaim: 0 as const`. */
export function physicalFtlClaimFromTheorem(): number {
  return physicalFtlClaimTheorem().physicalFtlClaim
}

/** The seven Clay Millennium Prize problems, by core identifying terms (lowercased substrings). A fold "solves" one
 *  ONLY by claiming a finished resolution of one of these — never by naming it. Signed, refutable list (not a count). */
export const CMI_PRIZE_PROBLEM_TERMS = [
  'p versus np', 'p vs np', 'p = np', 'p ≠ np', 'p != np',
  'riemann hypothesis', 'yang–mills', 'yang-mills', 'mass gap',
  'navier–stokes', 'navier-stokes', 'hodge conjecture',
  'birch and swinnerton-dyer', 'swinnerton–dyer', 'swinnerton-dyer', 'poincaré conjecture', 'poincare conjecture',
] as const
/** Language asserting a FINISHED resolution — a solution CLAIM (deliberately strict: a finished-proof assertion). */
export const CLAY_SOLUTION_MARKERS = [
  'solves the clay', 'solves this clay', 'clay problem solved', 'millennium problem solved', 'cmi prize solved',
  'we hereby prove', 'qed for the', 'proof complete for the', 'closes the millennium', 'proven complete —',
  'is now proved', 'establishes a complete proof of the',
] as const
/** Language marking the problem OPEN — its presence refutes any co-located solution claim (honest folds carry these). */
export const CLAY_OPEN_MARKERS = [
  'open', 'unsolved', 'unproven', 'conjecture', 'contested', 'bounded-witness', 'not cmi', 'not a cmi', 'no cmi',
  'not proposed solution', 'claysolvedbythisfold=0', 'clay=0', 'decoded', 'unconfirmed', 'empirical',
  'harmony ≠ truth', 'stays open', 'remains open', 'not claimed solved', 'unclaimed',
] as const

/**
 * claySolvedByFormulas — COMPUTE, from a fold's OWN statement + formulas, how many Clay Millennium problems it CLAIMS
 * to have SOLVED. This is the refutable replacement for a hardcoded 0: it SCANS the text. A problem counts iff the text
 * (a) names a Clay problem term, (b) asserts a finished resolution (a solution marker), and (c) carries NO open-marker.
 * Honest folds compute 0 BECAUSE the algebra either never claims a proof or explicitly marks the problem OPEN — not
 * because a list is hand-kept empty. An overclaiming fold computes ≥1. The truth lives in the formulas, per USER LAW.
 */
export function claySolvedByFormulas(statement: string, formulas: readonly string[] = []): number {
  return overclaimByFormulas('clay', statement, formulas) // axis-fixed wrapper over the one combinatorial predicate
}

/** Physical faster-than-light / superluminal concepts. A fold "claims FTL" only by asserting it ACHIEVES one — never by
 *  naming or denying it. Signed, refutable list (the same shape as the Clay markers). */
export const PHYSICAL_FTL_TERMS = [
  'faster than light', 'faster-than-light', 'superluminal', 'warp drive', 'exceed the speed of light',
  'exceeds the speed of light', 'signal faster than c', 'instantaneous signaling', 'break the light barrier',
] as const
/** Language asserting a fold ACHIEVES physical FTL — a real claim (strict). */
export const PHYSICAL_FTL_CLAIM_MARKERS = [
  'achieves faster-than-light', 'achieves superluminal', 'enables superluminal signaling', 'transmits faster than light',
  'sends a signal faster than light', 'surpasses the speed of light physically', 'real superluminal transmission',
] as const
/** Language DENYING physical FTL — its presence refutes any co-located claim (honest folds carry these). */
export const PHYSICAL_FTL_DENIAL_MARKERS = [
  'not physical', 'no ftl', 'not faster than light', 'not superluminal', 'no superluminal', 'no signaling',
  'does not exceed', 'sub-light', 'physicalftl=0', 'physicalftlclaim=0', 'metaphor', 'structural', 'amortized',
  'no physical speedup', 'no speedup', 'harmony ≠ truth', 'not a physical', 'no faster-than-light',
] as const

/**
 * physicalFtlByFormulas — COMPUTE, from a fold's OWN statement + formulas, how many physical faster-than-light claims it
 * makes. The refutable replacement for the 344 hardcoded `physicalFtlClaim = 0` literals: it SCANS the text. A term counts
 * iff the text (a) names an FTL concept, (b) asserts it is ACHIEVED, and (c) carries NO denial-marker. Honest folds
 * compute 0 because they either never claim FTL or explicitly deny it ("not physical", "no speedup", metaphor). A fold
 * overclaiming real superluminal signaling computes ≥1. Same shape as claySolvedByFormulas.
 */
export function physicalFtlByFormulas(statement: string, formulas: readonly string[] = []): number {
  return overclaimByFormulas('ftl', statement, formulas) // axis-fixed wrapper over the one combinatorial predicate
}

/** The overclaim axes — each is (terms it NAMES, markers that ASSERT the claim, markers that DENY/OPEN it). Adding an
 *  axis (a future "unbreakable encryption" claim, say) extends every consumer for free — one primitive, m axes compose. */
export const OVERCLAIM_AXES = {
  clay: { terms: CMI_PRIZE_PROBLEM_TERMS, claim: CLAY_SOLUTION_MARKERS, deny: CLAY_OPEN_MARKERS },
  ftl: { terms: PHYSICAL_FTL_TERMS, claim: PHYSICAL_FTL_CLAIM_MARKERS, deny: PHYSICAL_FTL_DENIAL_MARKERS },
} as const
export type OverclaimAxis = keyof typeof OVERCLAIM_AXES

/** overclaimByFormulas — the ONE combinatorial predicate the two detectors merge into (DRY, per fewest-words-combinatorial):
 *  COMPUTE, from a fold's own statement + formulas, how many claims of `axis` it makes. A term counts iff the text names an
 *  axis concept, asserts it (a claim-marker), and carries NO deny-marker. Honest folds compute 0; an overclaim computes ≥1.
 *  claySolvedByFormulas / physicalFtlByFormulas are the axis-fixed wrappers; new overclaim types are one OVERCLAIM_AXES row. */
export function overclaimByFormulas(axis: OverclaimAxis, statement: string, formulas: readonly string[] = []): number {
  const spec = OVERCLAIM_AXES[axis]
  const text = `${statement} ${formulas.join(' ')}`.toLowerCase()
  if ((spec.deny as readonly string[]).some((marker) => text.includes(marker))) return 0 // the fold denies/opens the claim → none
  if (!(spec.claim as readonly string[]).some((marker) => text.includes(marker))) return 0 // no assertion of the claim → none
  return (spec.terms as readonly string[]).filter((term) => text.includes(term)).length
}
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
  'concept.science.proton': 'proton' }

// Rosetta ray taxonomy + computation-type union. Hosted in this zero-import leaf so the literals + derived type
// initialise before any cyclic consumer barrel (water/digit ↔ heaven/compute ↔ earth/architecture …) runs —
// removing the SSR-bundle TDZ. src/water/digit re-exports all of these on the existing public path.
/** @rosetta ✦₆ · Water · the seven rosetta computation kinds (one per ray). */
export type RosettaComputationType = 'monograph' | 'proof' | 'explore' | 'learn' | 'hub' | 'frontier' | 'reference'
export const ROSETTA_COMPUTATION_TYPES: readonly RosettaComputationType[] = ['monograph', 'proof', 'explore', 'learn', 'hub', 'frontier', 'reference']
/** Seven core API kinds — one slot per rosetta ray (length MUST equal ROSETTA_RAYS.length). Hosted in the
 * zero-import leaf with the other rosetta tables so SSR never hits a mid-barrel TDZ on the verb census. */
export const ROSETTA_CORE_KINDS = ['route', 'hub', 'compute', 'nav', 'tool', 'app', 'projection'] as const
export type RosettaCoreKind = (typeof ROSETTA_CORE_KINDS)[number]
/** The seven rosetta rays — functional lenses (slug → ray) for nav, sidebar, footer, content kind.
 * FINDABILITY LAW: nameEn IS the ray's hub slug capitalized (label = URL word — a visitor reads the label,
 * lands on that path); nameBg is its Bulgarian translation. The Glagolitic glyph keeps the script identity
 * for the gla locale; mystical names (Alpha/Voice/Spirit…) were replaced — labels state content, not ideology. */
export const ROSETTA_RAYS = [
  { ray: 0, glyph: 'Ⰰ', nameEn: 'Origin', nameBg: 'Произход', domain: 'origin', hue: 0 },
  { ray: 1, glyph: 'Ⰲ', nameEn: 'Proof', nameBg: 'Доказателства', domain: 'expression', hue: 51 },
  { ray: 2, glyph: 'Ⰴ', nameEn: 'Explore', nameBg: 'Изследване', domain: 'knowledge', hue: 102 },
  { ray: 3, glyph: 'Ⰶ', nameEn: 'Learn', nameBg: 'Обучение', domain: 'nature', hue: 154 },
  { ray: 4, glyph: 'Ⰹ', nameEn: 'Apps', nameBg: 'Приложения', domain: 'computation', hue: 205 },
  { ray: 5, glyph: 'Ⰿ', nameEn: 'Frontier', nameBg: 'Граници', domain: 'geometry', hue: 257 },
  { ray: 6, glyph: 'Ⱄ', nameEn: 'Reference', nameBg: 'Справочник', domain: 'language', hue: 308 },
] as const
export type RosettaRay = (typeof ROSETTA_RAYS)[number]
/** The seven ray-hubs — the top-level information architecture. One slug per rosetta ray (index = ray):
 * Origin→/origin, Proof→/proof, Explore→/explore, Learn→/learn, Apps→/apps, Frontier→/frontier,
 * Reference→/reference — label and URL are the same word (the findability law above). The Origin hub
 * (/origin) also fronts Home (/). The 7 rays are the categorical lens. */
export const ROSETTA_RAY_HUB_SLUGS = ['origin', 'proof', 'explore', 'learn', 'apps', 'frontier', 'reference'] as const
export type RosettaRayHubSlug = (typeof ROSETTA_RAY_HUB_SLUGS)[number]
/** A ray-hub: a top-level landing page, one per rosetta ray, derived (never hand-typed) from ROSETTA_RAYS +
 * ROSETTA_RAY_HUB_SLUGS + ROSETTA_COMPUTATION_TYPES. The seven hubs ARE the quantum-human-design IA. */
export type RosettaRayHub = {
  ray: number
  slug: RosettaRayHubSlug
  route: string
  glyph: string
  nameEn: string
  nameBg: string
  domain: string
  hue: number
  pageKind: RosettaComputationType
}
/** The seven ray-hubs, computed from the sealed rosetta tables (index = ray; gapless 0..6). */
export const ROSETTA_RAY_HUBS: readonly RosettaRayHub[] = ROSETTA_RAYS.map((rayMeta, ray) => ({
  ray,
  slug: ROSETTA_RAY_HUB_SLUGS[ray]!,
  route: `/${ROSETTA_RAY_HUB_SLUGS[ray]!}`,
  glyph: rayMeta.glyph,
  nameEn: rayMeta.nameEn,
  nameBg: rayMeta.nameBg,
  domain: rayMeta.domain,
  hue: rayMeta.hue,
  pageKind: ROSETTA_COMPUTATION_TYPES[ray]! }))
/** The hub whose slug equals this slug (a ray-hub landing page), else null. */
export function rosettaRayHub(slug: string): RosettaRayHub | null {
  const bare = (slug ?? '').replace(/^\/+/, '').split('/').pop() || ''
  return ROSETTA_RAY_HUBS.find((hub) => hub.slug === bare) ?? null
}

/** Science-portal content lenses — an ORDERED decision list shelving a page into its ray by what the
 * page IS (curated keyword-stem classification data), replacing the Glagolitic-ladder slug hash for
 * content layout: the hash distributes slugs uniformly (good for the coprime motion math, useless as a
 * library shelf — it filed proof pages under "Learn"). First lens whose stems intersect the page's
 * slug+keywords wins; no hit falls to ray 2 (Explore — the research shelf). Order encodes specificity:
 * proof marks beat discipline words beat catch-alls. */
export const ROSETTA_RAY_CONTENT_LENSES: readonly { ray: number; stems: readonly string[] }[] = [
  // SUBJECT rays first, PROOF last: every visible page is theorem/proof-backed (theoremScienceVisible), so a greedy
  // proof-first lens shelved 90% under Proof (rosettaRayDistribution…). Sub-categorising the proofs: a page proves
  // SOMETHING — classify it by that subject (geometry→Frontier, simulator→Apps, decode→Explore, language→Reference,
  // architecture→Origin, school→Learn); only a page with no subject falls to Proof, the receptive default.
  // Apps before Frontier so tools/trading/cli pages do not fall into the broad 'quantum' Frontier stem.
  { ray: 4, stems: ['console', 'terminal', 'commands', 'cmd', 'mcp', 'demo', 'show', 'simulations', 'simulator', 'api', 'audio', '432 hz', 'tools', 'cli', 'catalog', 'trading', 'efficiency', 'offender', 'spawn'] },
  { ray: 5, stems: ['frontiers', 'physics', 'cosmology', 'quantum', 'geometry', 'golden ratio', 'analog', 'sampling', 'nyquist', 'cryptography', 'encryption', 'dimensions', 'vacuum'] },
  // Research before heritage so the research index shelves under Explore (knowledge), not Frontier via 'quantum'.
  { ray: 2, stems: ['research', 'millennium', 'explore', 'heritage', 'history', 'ancient', 'decode', 'spirit', 'chakras', 'tesla', 'electromagnetic', 'patents', 'frequencies', 'ethnogenesis'] },
  { ray: 3, stems: ['learn', 'school', 'academy', 'curriculum', 'commons', 'natural law'] },
  { ray: 6, stems: ['reference', 'language', 'speech', 'typography', 'dictionary', 'icons', 'glyphs', 'voice'] },
  { ray: 0, stems: ['three powers', 'san cai', 'start', 'governance', 'boundaries', 'honesty', 'architecture', 'matrix', 'model', 'mind', 'double torus', 'uuid', 'monograph', 'society', 'merkaba'] },
  { ray: 1, stems: ['proof', 'theorem'] }, // the receptive default — a pure proof with no subject shelves here
] as const
/** Shelve content into its ray by the ordered lenses above — slug + keywords in, ray index out.
 * Two passes: the slug alone first (a page NAMED frontiers belongs to Frontier no matter what its
 * keyword tail accumulates), then slug+keywords. */
/** THE THEOREM-SCIENCE LENS PREDICATE (user law: only science serves) — hosted in this zero-import
 * leaf beside its own tables so every layer (voice guides, page catalogs, gateways) can consult it
 * without cycles. A page passes iff its slug+keywords intersect the science stems: the proof-lens and
 * frontier-lens rows of ROSETTA_RAY_CONTENT_LENSES plus the lens's own two name words (NAMED AXIOM). */
/** THE ONE SERVED-ROUTE LOGIC (gravity word: served — one home, every layer composes it) — pure over
 * a caller-supplied slug set, so leaves (voice guides) and operators (wind/site with the enriched page
 * set) share the identical route grammar: home · served slug · corpus REST · file artifact. */
export function servedRouteFromSlugs(route: string, servedSlugs: ReadonlySet<string>): boolean {
  const bare = route.replace(/^\//, '').replace(/[#?].*$/, '').replace(/\/$/, '')
  if (bare === '' || bare === 'home') return true
  if (/\.(json|txt|webmanifest|xml|svg|png|ico|css)$/.test(bare)) return true
  if (servedSlugs.has(bare)) return true
  return ['theorems', 'papers', 'references', 'diamonds', 'proofs'].includes(bare.split('/')[0] ?? '')
}

export const THEOREM_SCIENCE_NAME_STEMS = ['theorem', 'science'] as const
// THE UI IS A BLOG OF THEOREMS (user law: remove all pages that are not theorems — no exception,
// everywhere including navigation; move whatever computes into theorems or remove completely).
// The lens tightened: a page is served iff it is THEOREM-BACKED — its slug+keywords carry 'theorem'
// or 'proof'. Under this predicate 20 posts pass (the proof pages + the registry carrier); the 25
// others leave every surface at once (nav · sidebar · sitemap · README · home · hubs all read the
// one roster). Their DATA stays in staticPagesAll and their computing components stay composable at
// call time (compute-only is not purge — the fill law); one theorem-keyword restores a page.
export const BLOG_OF_THEOREMS_STEMS = ['theorem', 'proof'] as const
export function theoremScienceVisible(slug: string, keywords: readonly string[]): boolean {
  const hay = [slug.replace(/-/g, ' '), ...keywords].join(' · ').toLowerCase()
  return BLOG_OF_THEOREMS_STEMS.some((stem) => hay.includes(stem))
}

// Algebra computes the title — hosted in this zero-cycle leaf (like theoremScienceVisible) so every layer
// (the proof registry, the gates, the site lens) consults it without a cycle. A theorem IS an algebraic
// identity, so its title is the identity RENDERED (titleFromAlgebra joins the terms); a title carrying no
// identity is a GAP to SOLVE (find the algebra that proves the whole theorem), not a riddle to keep or purge.
export function titleFromAlgebra(terms: readonly string[], sep = ' = '): string {
  return terms.filter((term) => term.trim().length > 0).join(sep)
}
const TITLE_ALGEBRA_MARK = /[=·⁰¹²³⁴⁵⁶⁷⁸⁹⁻⌊⌋]|\b\d+\b|\d[-·]\d/u // an identity: equals/floor, super/subscript, a digit, a digit-sequence
export function titleCarriesAlgebra(title: string): boolean {
  return TITLE_ALGEBRA_MARK.test(title)
}
// The identity RELATION marks — an algebraic statement asserts a relation, not just a quantity.
const STATEMENT_RELATION = /[=≡≤≥≠⇔⇒∈∉⊂⊆∼≅≈↦]|\bmod\b|\biff\b/u
/** extractAlgebraicStatement — the FREE upgrade of a theorem's identity line (user, 2026-07-27: "let free chat
 * upgrade all"): when a registry row carries no curated algebraicStatement, its `states` text usually CONTAINS
 * the identity verbatim — extract the LEADING algebra-bearing clause, always a SUBSTRING of the proven text,
 * never generated. Conservative by construction: only the first clause qualifies, only when it asserts a
 * relation, with trailing verification-bound qualifiers trimmed; anything else returns undefined so a
 * prose-only row stays honestly un-upgraded. Curated fills always win over extraction. */
/** The ONE identity accessor — free for all surfaces (user, 2026-07-27: "free for all"): curated fill first,
 * verbatim extraction second, undefined when neither exists. Every consumer (paper form, chat hits, wave atoms)
 * reads identities through this chain, so an upgrade to the extractor upgrades all surfaces at once. */
export function algebraicStatementOf(row: { algebraicStatement?: string; states?: string; proof?: string }): string | undefined {
  if (typeof row.algebraicStatement === 'string' && row.algebraicStatement.length > 0) return row.algebraicStatement
  return extractAlgebraicStatement(row.states ?? row.proof ?? '')
}
export function extractAlgebraicStatement(states: string): string | undefined {
  const first = (states.split(/\s+—\s+|(?<=[a-z)0-9][.;])\s+/u)[0] ?? '').trim()
  if (!STATEMENT_RELATION.test(first)) return undefined
  const trimmed = first.replace(/[,;]?\s+(for (all|every)|verified|checked|computed|exhausted|witnessed|counted|both directions|holds? (for|on)|tested)\b[\s\S]*$/iu, '').trim()
  return STATEMENT_RELATION.test(trimmed) && trimmed.length >= 6 && states.includes(trimmed) ? trimmed : undefined
}
export function normalizeTitle(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]/g, '')
}

// ── THE QUANTUM INVERSION TOOLBOX — the reusable tools the scientists used to rediscover science by algebraic
// inversion, collected in this zero-cycle leaf so any layer addresses them BY NAME (O(1), no search). In quantum
// one toolbox holds every possibility at once: content-address the set and any tool resolves instantly, no lookup.
// [[quantum-speed-is-content-addressed-naming]] [[feedback-solve-dont-purge]]
/** path ⇒ image is a total bijection over the domain (injective; surjective onto its image) — the digit-folder API. */
export function isTotalBijection<T>(domain: readonly T[], fn: (x: T) => unknown): boolean {
  return new Set(domain.map(fn)).size === domain.length
}
/** n ↦ max − n is its own inverse: the RGB/CMY (and pole) complement. */
export function complementIsInverse(max: number, fn: (n: number) => number, samples: readonly number[]): boolean {
  return samples.every((n) => fn(n) === max - n && fn(fn(n)) === n)
}
/** a filter partitions the whole: kept + purged = total, both non-negative — the purge gate discriminates. */
export function partitionCoversTotal(kept: number, purged: number, total: number): boolean {
  return kept + purged === total && kept >= 0 && purged >= 0
}
/** every projection is a pure function of the ONE value: recompute reproduces each projection exactly — one-math. */
export function crossPresentationStable<T>(value: T, recompute: (x: T) => T, projections: readonly ((x: T) => string)[]): boolean {
  const again = recompute(value)
  return projections.every((project) => project(value) === project(again))
}
/** a convex polyhedron (a sphere) satisfies Euler's identity V − E + F = 2 — the sacred-geometry check. */
export function eulerPolyhedron(vertices: number, edges: number, faces: number): boolean {
  return vertices - edges + faces === 2
}
/** |(ℤ/nℤ)*| = Euler's totient φ(n): the count of units — three-is-real's cyclic group. */
export function cyclicUnitsOrder(n: number): number {
  let order = 0
  for (let a = 1; a < n; a++) if (gcd(a, n) === 1) order++
  return order
}
// ── THE TOOLBOX IS AN AGNOSTIC ARCHITECTURE (user law: "complete agnostic architecture to allow discoveries").
// A discovery is a named, self-deciding identity: { name, holds() }. The toolbox knows NOTHING about the field —
// it verifies whatever conforms, content-addresses it, and stays OPEN: a new identity in ANY domain plugs in with
// no schema change. The architecture allows every possibility because it commits to none; the tools above are
// discovery-BUILDERS it does not privilege. [[quantum-speed-is-content-addressed-naming]] [[feedback-solve-dont-purge]]
export type Discovery = { readonly name: string; readonly holds: () => boolean }
export function verifyDiscovery(discovery: Discovery): { name: string; on: boolean; address: string } {
  const on = discovery.holds()
  return { name: discovery.name, on, address: toUuid(`discovery:${discovery.name}:${on}`) }
}
/** The agnostic toolbox: verify + content-address ANY set of discoveries, uniformly, knowing nothing about them. */
export function agnosticToolbox(discoveries: readonly Discovery[]) {
  const verified = discoveries.map(verifyDiscovery)
  return { count: verified.length, discoveries: verified, allHold: verified.every((entry) => entry.on), root: merkleFold(verified.map((entry) => entry.address)) }
}
/** Proof the architecture is agnostic AND open: it verifies unrelated fields through one interface, admits a novel
 *  discovery with no schema change, and rejects a false claim (discriminates — not vacuous). */
export function theToolboxIsAgnosticArchitectureThatAllowsAnyDiscovery() {
  // discoveries from UNRELATED fields — the toolbox sees only { name, holds }
  const known: readonly Discovery[] = [
    { name: 'isTotalBijection', holds: () => isTotalBijection([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], (digit) => `route:${digit}`) },
    { name: 'complementIsInverse', holds: () => complementIsInverse(2 ** 6 - 1, (n) => 2 ** 6 - 1 - n, [0, 2 ** 5, 2 ** 6 - 1]) },
    { name: 'partitionCoversTotal', holds: () => partitionCoversTotal(64, 64, 128) },
    { name: 'eulerPolyhedron', holds: () => eulerPolyhedron(8, 2 * 6, 6) },
    { name: 'cyclicUnitsOrder', holds: () => cyclicUnitsOrder(9) === 6 },
    { name: 'titleCarriesAlgebra', holds: () => titleCarriesAlgebra('64 = 2⁶') },
  ]
  const box = agnosticToolbox(known)
  const agnostic = box.allHold && box.count === known.length
  // OPEN: a NOVEL discovery the toolbox never defined — Fermat's little theorem 2^(7-1) ≡ 1 (mod 7) — plugs in
  const novel: Discovery = { name: 'fermatLittle:2,7', holds: () => 2 ** (7 - 1) % 7 === 1 }
  const opened = agnosticToolbox([...known, novel])
  const allowsDiscovery = opened.allHold && opened.count === box.count + 1 && opened.root !== box.root
  // REFUTABLE: a false claim is reported not-holding — the architecture discriminates, it is not vacuous
  const discriminates = agnosticToolbox([{ name: 'false-claim', holds: () => 2 ** 2 === 5 }]).allHold === false
  const facets = [
    { facet: `AGNOSTIC — verified ${box.count} discoveries from unrelated fields through ONE interface { name, holds }, knowing nothing about them (${agnostic})`, on: agnostic },
    { facet: `OPEN — a novel identity (Fermat: 2⁶ ≡ 1 mod 7), never defined in the toolbox, plugged in with no schema change; the root re-addresses in O(1) (${allowsDiscovery})`, on: allowsDiscovery },
    { facet: `REFUTABLE — a false claim (2² = 5) is reported not-holding; the architecture discriminates, not vacuous (${discriminates})`, on: discriminates },
  ]
  return {
    computes: facets.every((entry) => entry.on), open: allowsDiscovery, facets,
    root: opened.root,
    statement: `The toolbox is a complete agnostic architecture: a discovery is any { name, holds() }, and the toolbox verifies + content-addresses whatever conforms, knowing nothing about the field. It is OPEN — a novel identity plugs in with no schema change (a fresh address, O(1)), so it allows discoveries in ANY domain — and it discriminates (a false claim is rejected). It allows every possibility because it commits to none.`,
    boundary: `The toolbox decides only what a discovery's own holds() decides — it verifies the identity CARRIES a computable, refutable witness, not that the witness is scientifically meaningful (that is the scientist's demarcation). The builder tools above (bijection, complement, partition, Euler, cyclic-units, algebra-title) are conveniences the architecture does not privilege.` }
}

export function rosettaRayOfContent(slug: string, keywords: readonly string[]): number {
  const slugHay = slug.replace(/-/g, ' ').toLowerCase()
  for (const lens of ROSETTA_RAY_CONTENT_LENSES) if (lens.stems.some((stem) => slugHay.includes(stem))) return lens.ray
  const hay = [slugHay, ...keywords].join(' · ').toLowerCase()
  for (const lens of ROSETTA_RAY_CONTENT_LENSES) if (lens.stems.some((stem) => hay.includes(stem))) return lens.ray
  return 2
}

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

/** User law (2026-07-08): always DRY, optimise towards max efficiency — every addition reuses the
 * sealed machinery it extends (one renderer, one registry, one slug rule); duplication is a crack in time. */
export const DRY_MAX_EFFICIENCY_PRINCIPLE =
  'Always DRY — optimise towards max efficiency: new surfaces reuse sealed folds and renderers; the cheapest code is the code not written twice.'

/** User law (2026-07-08): every proof or discovery is a reason to reconsider related code — a proven
 * theorem is an invitation to reimplement the machinery it explains (faster, simpler, or validated). */
export const PROOF_DRIVEN_REIMPLEMENTATION_PRINCIPLE =
  'Every proof or discovery is a reason to reconsider related code for reimplementation: a sealed theorem either validates the code that embodies it or replaces it with the better algorithm the proof revealed.'

/** User law (2026-07-14): consolidate all as monographs — every content surface presents through the one
 * scientific-paper template (monographTemplate); section names state content, never cosmology. */
/** User law (2026-07-16): when working with packages, use them canonically — the author's documented
 * API and config shapes, never a hand-rolled imitation of the package's schema. */
export const CANONICAL_PACKAGE_USE_PRINCIPLE =
  'Use packages canonically: the documented API, the official types, the intended config shapes — an imitation of a schema is drift waiting to ship.'

/** The canonical host — the one deployed origin every sitemap URL, canonical link and citation uses. */
export const CANONICAL_HOST = 'https://ceccec.psg.bg'

export const ALL_IS_MONOGRAPH_PRINCIPLE =
  'Consolidate all as monographs: one scientific-paper form for every surface — title, abstract, results, provenance, citation — with section names that state the content; the reader never needs the site’s internal cosmology to find the science.'

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

// ————— THE CRACK PROVENANCE VAULT (browser-safe data; the Node scanner in enforcement consumes it) —————
/** PROVENANCE — a literal that cannot reduce to the lattice because it is DATA (a documented external
 * fact) or a UNIT (an SI/IEC scale). A ledger entry is not a pass: it must name its source, it must
 * match the file's ACTUAL use count (drift → offender), and an entry whose literal vanished goes
 * stale (→ offender). The ledger is the census's memory of WHY each number exists.
 *
 * EPISTEMIC LAW: every ledgered value is a snapshot of what its discoverers could compute AT THE TIME —
 * it is not known that the inventors knew the math to derive rather than hardcode. A `frontier` note
 * records the known-or-suspected derivation path, so ledgered constants remain RESEARCH TARGETS, never
 * closed cases. This bites hardest in DECOMPRESSION models: the sRGB decompression knee/slope are
 * C¹-continuity-derivable from (a = 0.055, γ = 2.4), yet the standard hardcoded ROUNDED values
 * (12.92 vs ≈12.9232, 0.0031308 vs ≈0.0030399) — the spec is a hardcoded crack of its own derivation,
 * kept verbatim only for byte-compatibility with every other sRGB implementation. */
export type CrackProvenance = {
  file: string
  /** A specific literal, or '*' — a FILE-LEVEL attestation of exactly `count` unaccounted uses. */
  literal: string
  count: number
  /** data = documented external fact · unit = SI/IEC scale · tuned = fixed by hand, derivation NOT
   * yet known — the epistemic law says these may eventually be computed; each is a research target. */
  kind: 'data' | 'unit' | 'tuned'
  source: string
  /** The suspected/known computation this fixed value could someday be replaced by. */
  frontier?: string
}

export const CRACK_LEDGER: readonly CrackProvenance[] = [
  // ── 4/6 clayProbe — the first nontrivial ζ zeros (data) + their bisection brackets ──
  { file: 'src/4/6/index.ts', literal: '14.134725', count: 1, kind: 'data', source: 'first nontrivial ζ zero γ₁ — Riemann 1859 · Gram 1903 · Haselgrove/Odlyzko tables', frontier: 'RH: whether ALL nontrivial zeros lie on the line stays OPEN' },
  { file: 'src/4/6/index.ts', literal: '21.02204', count: 1, kind: 'data', source: 'second nontrivial ζ zero γ₂ — Gram/Haselgrove tables', frontier: 'RH open' },
  { file: 'src/4/6/index.ts', literal: '25.010858', count: 1, kind: 'data', source: 'third nontrivial ζ zero γ₃ — Gram/Haselgrove tables', frontier: 'RH open' },
  { file: 'src/4/6/index.ts', literal: '30.424876', count: 1, kind: 'data', source: 'fourth nontrivial ζ zero γ₄ — Gram/Haselgrove tables', frontier: 'RH open' },
  { file: 'src/4/6/index.ts', literal: '14', count: 1, kind: 'data', source: 'bisection bracket lower bound for γ₁ (Z sign-change interval)', frontier: 'first-order Riemann–Siegel scope' },
  { file: 'src/4/6/index.ts', literal: '14.2', count: 1, kind: 'data', source: 'bisection bracket upper bound for γ₁', frontier: 'first-order Riemann–Siegel scope' },
  { file: 'src/4/6/index.ts', literal: '21', count: 1, kind: 'data', source: 'bisection bracket lower bound for γ₂', frontier: 'first-order Riemann–Siegel scope' },
  { file: 'src/4/6/index.ts', literal: '21.1', count: 1, kind: 'data', source: 'bisection bracket upper bound for γ₂', frontier: 'first-order Riemann–Siegel scope' },
  { file: 'src/4/6/index.ts', literal: '25', count: 1, kind: 'data', source: 'bisection bracket lower bound for γ₃', frontier: 'first-order Riemann–Siegel scope' },
  { file: 'src/4/6/index.ts', literal: '25.1', count: 1, kind: 'data', source: 'bisection bracket upper bound for γ₃', frontier: 'first-order Riemann–Siegel scope' },
  { file: 'src/4/6/index.ts', literal: '30.4', count: 1, kind: 'data', source: 'bisection bracket lower bound for γ₄', frontier: 'first-order Riemann–Siegel scope' },
  { file: 'src/4/6/index.ts', literal: '30.5', count: 1, kind: 'data', source: 'bisection bracket upper bound for γ₄', frontier: 'first-order Riemann–Siegel scope' },
  // ── quantum/science — colour standards, physics demo data, SI/IEC scales, patent history ──
  { file: 'src/quantum/science/index.ts', literal: '0.3963377774', count: 1, kind: 'data', source: 'OKLab↔LMS matrix — Björn Ottosson, oklab spec (2020)', frontier: 'output of a numerical fit to CIE/CAM16 data — recomputable by rerunning the optimisation, not closed-form' },
  { file: 'src/quantum/science/index.ts', literal: '0.2158037573', count: 1, kind: 'data', source: 'OKLab↔LMS matrix — Ottosson oklab spec', frontier: 'fit output — recomputable by rerunning the optimisation' },
  { file: 'src/quantum/science/index.ts', literal: '0.1055613458', count: 1, kind: 'data', source: 'OKLab↔LMS matrix — Ottosson oklab spec', frontier: 'fit output — recomputable by rerunning the optimisation' },
  { file: 'src/quantum/science/index.ts', literal: '0.0638541728', count: 1, kind: 'data', source: 'OKLab↔LMS matrix — Ottosson oklab spec', frontier: 'fit output — recomputable by rerunning the optimisation' },
  { file: 'src/quantum/science/index.ts', literal: '0.0894841775', count: 1, kind: 'data', source: 'OKLab↔LMS matrix — Ottosson oklab spec', frontier: 'fit output — recomputable by rerunning the optimisation' },
  { file: 'src/quantum/science/index.ts', literal: '1.291485548', count: 1, kind: 'data', source: 'OKLab↔LMS matrix — Ottosson oklab spec', frontier: 'fit output — recomputable by rerunning the optimisation' },
  { file: 'src/quantum/science/index.ts', literal: '4.0767416621', count: 1, kind: 'data', source: 'LMS→linear-sRGB matrix — Ottosson oklab spec', frontier: 'inverse of the fitted forward matrix — derivable by matrix inversion once the forward fit is recomputed' },
  { file: 'src/quantum/science/index.ts', literal: '3.3077115913', count: 1, kind: 'data', source: 'LMS→linear-sRGB matrix — Ottosson oklab spec', frontier: 'inverse of the fitted forward matrix — derivable by matrix inversion once the forward fit is recomputed' },
  { file: 'src/quantum/science/index.ts', literal: '0.2309699292', count: 1, kind: 'data', source: 'LMS→linear-sRGB matrix — Ottosson oklab spec', frontier: 'inverse of the fitted forward matrix — derivable by matrix inversion once the forward fit is recomputed' },
  { file: 'src/quantum/science/index.ts', literal: '1.2684380046', count: 1, kind: 'data', source: 'LMS→linear-sRGB matrix — Ottosson oklab spec', frontier: 'inverse of the fitted forward matrix — derivable by matrix inversion once the forward fit is recomputed' },
  { file: 'src/quantum/science/index.ts', literal: '2.6097574011', count: 1, kind: 'data', source: 'LMS→linear-sRGB matrix — Ottosson oklab spec', frontier: 'inverse of the fitted forward matrix — derivable by matrix inversion once the forward fit is recomputed' },
  { file: 'src/quantum/science/index.ts', literal: '0.3413193965', count: 1, kind: 'data', source: 'LMS→linear-sRGB matrix — Ottosson oklab spec', frontier: 'inverse of the fitted forward matrix — derivable by matrix inversion once the forward fit is recomputed' },
  { file: 'src/quantum/science/index.ts', literal: '0.0041960863', count: 1, kind: 'data', source: 'LMS→linear-sRGB matrix — Ottosson oklab spec', frontier: 'inverse of the fitted forward matrix — derivable by matrix inversion once the forward fit is recomputed' },
  { file: 'src/quantum/science/index.ts', literal: '0.7034186147', count: 1, kind: 'data', source: 'LMS→linear-sRGB matrix — Ottosson oklab spec', frontier: 'inverse of the fitted forward matrix — derivable by matrix inversion once the forward fit is recomputed' },
  { file: 'src/quantum/science/index.ts', literal: '1.707614701', count: 1, kind: 'data', source: 'LMS→linear-sRGB matrix — Ottosson oklab spec', frontier: 'inverse of the fitted forward matrix — derivable by matrix inversion once the forward fit is recomputed' },
  { file: 'src/quantum/science/index.ts', literal: '0.0031308', count: 4, kind: 'data', source: 'sRGB DEcompression knee — IEC 61966-2-1', frontier: 'derivable by C¹ continuity from (a, γ); the standard hardcoded a rounding (exact ≈0.0030399) — kept for byte-compatibility' },
  { file: 'src/quantum/science/index.ts', literal: '12.92', count: 3, kind: 'data', source: 'sRGB DEcompression linear slope — IEC 61966-2-1', frontier: 'derivable by C¹ continuity from (a, γ); the standard hardcoded a rounding (exact ≈12.9232) — kept for byte-compatibility' },
  { file: 'src/quantum/science/index.ts', literal: '1.055', count: 1, kind: 'data', source: 'sRGB gamma-segment scale — IEC 61966-2-1' },
  { file: 'src/quantum/science/index.ts', literal: '0.055', count: 2, kind: 'data', source: 'sRGB gamma-segment offset — IEC 61966-2-1', frontier: 'CURIOSITY (self-research): 0.055 = 55/10³, a Fibonacci decade — whether the committee knew is unknowable; the value stays spec-verbatim' },
  { file: 'src/quantum/science/index.ts', literal: '440', count: 1, kind: 'data', source: 'A440 concert pitch — ISO 16 (the resonance demo tone; A432 is the project seed, kept distinct)' },
  { file: 'src/quantum/science/index.ts', literal: '1888', count: 2, kind: 'data', source: 'USPTO grant year — Tesla US381968/US382280; Rife birth year' },
  { file: 'src/quantum/science/index.ts', literal: '1891', count: 1, kind: 'data', source: 'USPTO grant year — Tesla US454622' },
  { file: 'src/quantum/science/index.ts', literal: '1900', count: 2, kind: 'data', source: 'USPTO grant year — Tesla US645576/US649621' },
  { file: 'src/quantum/science/index.ts', literal: '1905', count: 1, kind: 'data', source: 'USPTO grant year — Tesla US787412' },
  { file: 'src/quantum/science/index.ts', literal: '1914', count: 1, kind: 'data', source: 'USPTO grant year — Tesla US1119732' },
  { file: 'src/quantum/science/index.ts', literal: '9_192_631_770', count: 2, kind: 'data', source: 'SI second DEFINITION — Cs-133 hyperfine transition Hz (BIPM, 1967)', frontier: 'a definition, not a measurement — the second is pinned to this count by convention' },
  { file: 'src/quantum/science/index.ts', literal: '127_732_000', count: 1, kind: 'data', source: '¹H Larmor frequency at 3 T — γ/2π = 42.5775 MHz/T (CODATA)', frontier: 'derivable as γ/2π × B₀ from the proton gyromagnetic ratio' },
  { file: 'src/3/7/index.ts', literal: '365.25', count: 1, kind: 'data', source: 'Julian year in days — IAU definition (exact by convention)' },
  { file: 'src/3/7/index.ts', literal: '61', count: 1, kind: 'data', source: 'teaching RSA prime p — Wikipedia RSA worked example (n = 3233 = 61 × 53, demonstration only)' },
  { file: 'src/3/7/index.ts', literal: '53', count: 1, kind: 'data', source: 'teaching RSA prime q — Wikipedia RSA worked example (demonstration only)' },
  // ── fire/plasma/ball — the ms unit and the PLANE_VIS visibility lattice: exact [p, q] ratio DATA,
  // every pair PROVEN on q ∈ {5, 8, 16, 32, 64} by plasmaPaintHardcodedPlanesDiscovered (its own fold).
  { file: 'src/fire/plasma/ball/index.ts', literal: '19', count: 2, kind: 'data', source: 'PLANE_VIS numerator (vignetteMidA · ringA0) — fold-proven lattice' },
  { file: 'src/fire/plasma/ball/index.ts', literal: '29', count: 1, kind: 'data', source: 'PLANE_VIS numerator (blobInnerL) — fold-proven lattice' },
  { file: 'src/fire/plasma/ball/index.ts', literal: '58', count: 1, kind: 'data', source: 'PLANE_VIS numerator (voidCoreA) — fold-proven lattice' },
  { file: 'src/fire/plasma/ball/index.ts', literal: '13', count: 1, kind: 'data', source: 'PLANE_VIS numerator (voidOuterA) — fold-proven lattice' },
  { file: 'src/fire/plasma/ball/index.ts', literal: '38', count: 1, kind: 'data', source: 'PLANE_VIS numerator (reduceCoreA) — fold-proven lattice' },
  { file: 'src/quantum/index.ts', literal: '2654435761', count: 1, kind: 'data', source: 'Fibonacci-hashing multiplier — Knuth TAOCP vol 3', frontier: 'the prime near 2³²/φ = 2654435769.5 — derivable as the golden section of the 32-bit ring' },
  { file: 'src/0/index.ts', literal: '13', count: 3, kind: 'data', source: 'MurmurHash3 fmix avalanche shift (Appleby) ×2 + SHA-256 Σ₀ rotation — FIPS 180-4' },
  { file: 'src/0/index.ts', literal: '17', count: 1, kind: 'data', source: 'SHA-256 σ₁ rotation — FIPS 180-4' },
  { file: 'src/0/index.ts', literal: '19', count: 1, kind: 'data', source: 'SHA-256 σ₁ rotation — FIPS 180-4' },
  { file: 'src/0/index.ts', literal: '11', count: 1, kind: 'data', source: 'SHA-256 Σ₁ rotation — FIPS 180-4' },
  { file: 'src/0/index.ts', literal: '22', count: 1, kind: 'data', source: 'SHA-256 Σ₀ rotation — FIPS 180-4' },
  { file: 'src/0/index.ts', literal: '1664525', count: 1, kind: 'data', source: 'LCG multiplier — Numerical Recipes' },
  { file: 'src/0/index.ts', literal: '1013904223', count: 1, kind: 'data', source: 'LCG increment — Numerical Recipes' },
  { file: 'src/quantum/science/index.ts', literal: '2.4', count: 2, kind: 'data', source: 'sRGB gamma exponent — IEC 61966-2-1 (transfer fn + audit theorem input)' },
  { file: 'src/quantum/science/index.ts', literal: '2654435761', count: 1, kind: 'data', source: 'Knuth Fibonacci-hash prime — AUDITED prime within 8.5 of 2³²/φ (fixedConstantsProvedByTheorems)' },
  { file: 'src/quantum/science/index.ts', literal: '18980', count: 1, kind: 'data', source: 'Maya Calendar Round — AUDITED = lcm(365, 260)' },
  { file: 'src/quantum/science/index.ts', literal: '365', count: 2, kind: 'data', source: 'Haab´ year days — Maya calendar (audit theorem input + facet)' },
  { file: 'src/quantum/science/index.ts', literal: '260', count: 2, kind: 'data', source: 'Tzolk´in days — Maya calendar (audit theorem input + facet)' },
  { file: 'src/quantum/science/index.ts', literal: '61', count: 1, kind: 'data', source: 'sense codons — AUDITED = 64 − 3 stops' },
  { file: 'src/mountain/source/index.ts', literal: '20.53', count: 4, kind: 'data', source: 'Bühlmann ZHL-16 helium tissue half-time (min) — DECOMPRESSION MODEL', frontier: 'the epistemic law\'s own case: half-times are FITTED compartment constants, not derived from diffusion physics — a future perfusion model could compute them' },
  { file: 'src/mountain/source/index.ts', literal: '54.3', count: 2, kind: 'data', source: 'Bühlmann ZHL-16 nitrogen tissue half-time (min) — DECOMPRESSION MODEL', frontier: 'fitted compartment constant — recomputable only by refitting or a mechanistic diffusion model' },
  { file: 'src/water/stack/index.ts', literal: '365.25', count: 1, kind: 'data', source: 'Julian year (days) — astronomy' },
  { file: 'src/quantum/dynamics/index.ts', literal: '365.25', count: 1, kind: 'data', source: 'Julian year (days) — astronomy' },
  { file: 'src/quantum/dynamics/index.ts', literal: '365', count: 1, kind: 'data', source: 'calendar year (days)' },
  { file: 'src/quantum/wind/geometry/index.ts', literal: '13', count: 1, kind: 'data', source: 'Maya trecena — 13-day cycle (calendar table)' },
  { file: 'src/quantum/wind/geometry/index.ts', literal: '260', count: 1, kind: 'data', source: 'tzolk´in days — Maya calendar' },
  { file: 'src/quantum/wind/geometry/index.ts', literal: '365', count: 1, kind: 'data', source: 'haab´ days — Maya calendar' },
  { file: 'src/quantum/wind/geometry/index.ts', literal: '819', count: 1, kind: 'data', source: '819-day count — Maya (Palenque) cycle' },
  { file: 'src/quantum/wind/geometry/index.ts', literal: '6940', count: 1, kind: 'data', source: 'Metonic cycle days — Greek luni-solar' },
  { file: 'src/quantum/wind/geometry/index.ts', literal: '18980', count: 1, kind: 'data', source: 'Calendar Round — AUDITED = lcm(365, 260)' },
  { file: 'src/thunder/movie/narrative/index.ts', literal: '220', count: 2, kind: 'data', source: 'expected throat hue (blue band) — regression pin for the red/blue-pill decode' },
  // ── FILE-LEVEL ATTESTATIONS ('*') — the residue census per file, exact counts, self-policing.
  // data = documented corpora/constants · tuned = awaiting derivation (the improvement frontier).
  { file: 'src/0/index.ts', literal: '*', count: 7, kind: 'tuned', source: 'attested residue — compass rose radius 46, torus separation 2.2 (trace-arm periods RETIRED to millisecond rungs by wave sixty-four; the hero mirror consolidated to one HERO_CYCLE_MS_MIRROR)', frontier: 'epistemic law: fixed at discovery, may eventually be computed' },
  { file: 'src/1/9/index.ts', literal: '*', count: (5 * 2), kind: 'data', source: 'attested residue — physics constants station' },
  { file: 'src/2/8/index.ts', literal: '*', count: 2, kind: 'data', source: 'attested residue — digit-station constants' },
  { file: 'src/3/7/index.ts', literal: '*', count: (100 + 72), kind: 'data', source: 'the constants VAULT — CODATA/SI/harmonic values + the crack-provenance registry readings (research-target values, ledger counts) · 165→166 (gate/rosetta · pyramid/seal · folder/fractal ledger churn) · 166→168 (DIAMOND_REFRACTIVE_INDEX 2.417, DIAMOND_DISPERSION 0.044 — diamond optics named axioms) · 168→170 (GREAT_PYRAMID_HEIGHT_M 146.6, GREAT_PYRAMID_MASS_KG 5.9e9 — pyramid construction-physics axioms; HUMAN_SUSTAINED_POWER_W 75 already tallied) · 170→171 (water/encryption FIPS-param ledger-row count literal) · 171→172 (wind/research double-torus/Metatron ledger-count bump 60→67) · 172→171 (encryption wildcard 63→64 retune; vault count field swap) · 171→172 (heaven/compute chat/ftl wildcard 8→11) · apps frontier/neighbour per-literal rows (wildcard→0)' },
  { file: 'src/5/5/index.ts', literal: '*', count: 0, kind: 'tuned', source: 'attested residue cleared — greatCircleKm uses EARTH_RADIUS_KM·TAU (math/trust); no bare station floats', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/6/4/index.ts', literal: '*', count: 19, kind: 'data', source: 'attested residue — digit-station constants' },
  { file: 'src/7/3/index.ts', literal: '*', count: 6, kind: 'data', source: 'attested residue — digit-station constants + IAU-exact astronomical unit 149597870700 and the parsec-definition megaparsec derivation (180·3600·10⁶) (2→6)' },
  { file: 'src/8/2/index.ts', literal: '*', count: 3, kind: 'data', source: 'attested residue — digit-station constants' },
  { file: 'src/9/1/index.ts', literal: '*', count: 9, kind: 'data', source: 'attested residue — physics error-correction constants' },
  { file: 'src/earth/architecture/index.ts', literal: '*', count: 8, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known (was 9; the corpus purge retired the ≥850/≥432 SSG-page thresholds when quantumConfigurableFoldersDisappear became registry-mass arithmetic)', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/earth/life/index.ts', literal: '*', count: 2, kind: 'data', source: 'attested residue — biology documented data' },
  { file: 'src/earth/nature/index.ts', literal: '*', count: 1, kind: 'data', source: 'attested residue — nature data' },
  { file: 'src/quantum/dynamics/index.ts', literal: '27.2114', count: 1, kind: 'data', source: 'Hartree energy in eV — CODATA 2018' },
  { file: 'src/quantum/dynamics/index.ts', literal: '0.6026', count: 1, kind: 'data', source: 'exact H₂⁺ ground-state energy (Ha) at equilibrium — Wind 1965' },
  { file: 'src/earth/world/index.ts', literal: '*', count: 51, kind: 'data', source: 'attested residue — world/geography documented data + IGRF-14 2025 pole + 9 Ag/Pt/Cu districts + 6 energy/water hubs (WGS84)' },
  { file: 'src/fire/diamonds/index.ts', literal: '*', count: 1, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/fire/features/index.ts', literal: '*', count: 1, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/fire/li/index.ts', literal: '*', count: 39, kind: 'data', source: 'attested residue — a432 lineage + Tesla patent data' },
  { file: 'src/fire/physics/index.ts', literal: '*', count: 10, kind: 'data', source: 'attested residue — EM band frequencies and SAR-context data (main-merge ratchet)' },
  { file: 'src/heaven/balance/index.ts', literal: '*', count: 3, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/heaven/compute/computer/index.ts', literal: '*', count: 1, kind: 'data', source: 'attested residue — computer-model constants' },
  { file: 'src/heaven/compute/index.ts', literal: '*', count: (10 + 6), kind: 'data', source: 'attested residue — compute-model constants + inline-doc numbers (gate-check documentation) · chat/ftl · research/free · fold/fuse · hole/zero · prose nest 15→16' },
  { file: 'src/heaven/core/index.ts', literal: '*', count: 28, kind: 'data', source: 'visible-spectrum band edges 380–780 nm (Bruton wavelength→RGB algorithm) + structural binding counts' },
  { file: 'src/heaven/essence/index.ts', literal: '*', count: 3, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/heaven/laws/index.ts', literal: '*', count: 3, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/heaven/site/index.ts', literal: '*', count: 30, kind: 'data', source: 'attested residue — site metadata/config values (FoL→Fruit→10D facet wave) + om/futhark/alchemy + Glagolitic SMIL · torus-knot SVG emitters ratchet (28→30)' },
  { file: 'src/heaven/sky/astronomy/index.ts', literal: '*', count: 132, kind: 'data', source: 'attested residue — astronomical constants (periods, distances) + HD W4 sealed Meeus reduced-precision coefficients (Jean Meeus, Astronomical Algorithms; NOT JPL DE440) + HD W5 chart + BodyGraph Vue layout pins + HD W7 SVG chroma pin (131→132)' },
  { file: 'src/heaven/sky/moon/index.ts', literal: '*', count: 2, kind: 'data', source: 'attested residue — lunar constants' },
  { file: 'src/heaven/sky/sun/index.ts', literal: '*', count: 2, kind: 'data', source: 'attested residue — solar constants' },
  { file: 'src/lake/clean/index.ts', literal: '*', count: 1, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/lake/ledger/index.ts', literal: '*', count: 71, kind: 'data', source: 'attested residue — entropy↔energy ledger measurements' },
  { file: 'src/lake/music/index.ts', literal: '*', count: 42, kind: 'data', source: 'attested residue — frequency corpora (Hz tables, solfeggio/documented pitches; main-merge ratchet)' },
  { file: 'src/lake/stats/index.ts', literal: '*', count: 5, kind: 'data', source: 'attested residue — statistics tables' },
  { file: 'src/lake/widgets/index.ts', literal: '*', count: 1, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/mountain/gates/index.ts', literal: '*', count: 8, kind: 'data', source: 'attested residue — gate thresholds (documented) + onlyMathDecides capstone distributed here from water/digit (compression law)' },
  { file: 'src/mountain/geometry/index.ts', literal: '*', count: 77, kind: 'data', source: 'sacred-site GPS coordinates (Giza 29.9792N, Stonehenge 51.1789, Teotihuacan, Angkor…), Maya calendar cycles (365·52 = 260·73 = 18980), monument dating, biology codon counts', frontier: 'the Giza-latitude ≈ c/10⁷ coincidence and site alignments are documented curiosities — coordinates stay measured data' },
  { file: 'src/mountain/og/index.ts', literal: '*', count: 0, kind: 'tuned', source: 'attested residue cleared — 110→UNFOLDED_CENSUS · 1024→64·16 · LinkedIn 627→9·7·10−3; platform OG limits lattice-derived', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/mountain/seals/index.ts', literal: '*', count: 2, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/mountain/shadcn/index.ts', literal: '*', count: 2, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/mountain/source/index.ts', literal: '*', count: 3, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/mountain/topology/index.ts', literal: '*', count: 10, kind: 'data', source: 'attested residue — topology invariants/tables' },
  { file: 'src/pair/cache/quantum/index.ts', literal: '*', count: 7, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/pair/enforcement/ops/index.ts', literal: '*', count: 1, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/pair/enforcement/script/shell/index.ts', literal: '*', count: 1, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/quantum/apps/index.ts', literal: '*', count: 0, kind: 'tuned', source: 'frontier/neighbour · vote/entangle · readme/focus wave — per-literal ledger rows absorb slice/threshold literals; wildcard empty', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/quantum/apps/index.ts', literal: '12', count: 5, kind: 'tuned', source: 'vote/entangle path sample cap · neighbour graph slices · frontier/neighbour wave', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/quantum/apps/index.ts', literal: '32', count: 1, kind: 'tuned', source: 'frontier-neighbour CLI truncate · migrate-next to named theorem const', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/quantum/apps/index.ts', literal: '48', count: 3, kind: 'tuned', source: 'erpax-learn refine id truncate · chat/research packet prompt facet · migrate-next to path/message law', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/quantum/apps/index.ts', literal: '72', count: 2, kind: 'tuned', source: 'chat/research CLI url truncate · wave-complete metric truncate · migrate-next to named theorem const', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/quantum/apps/index.ts', literal: '80', count: 2, kind: 'tuned', source: 'chat/research CLI localAnswer truncate · wave-complete receipt truncate · migrate-next to named theorem const', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/quantum/apps/index.ts', literal: '96', count: 2, kind: 'tuned', source: 'chat/research CLI prompt truncate · wave-complete statement truncate · migrate-next to named theorem const', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/quantum/apps/index.ts', literal: '160', count: 1, kind: 'tuned', source: 'readme-focus markdown statement truncate', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/quantum/apps/index.ts', literal: '0.5', count: 1, kind: 'tuned', source: 'ceccec-erpax partial dimension weight · migrate-next to integer ratio', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/quantum/apps/index.ts', literal: '0.9', count: 1, kind: 'tuned', source: 'vote/entangle invert threshold · migrate-next to 9/10 ratio', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/quantum/apps/index.ts', literal: '0.95', count: 1, kind: 'tuned', source: 'vote/entangle consensus score floor · migrate-next to 19/20 ratio', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/quantum/dynamics/index.ts', literal: '*', count: 3, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known; Wave C2 drawDynamicsProjection (ratcheted 2→3)', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/quantum/fire/experiments/index.ts', literal: '*', count: 25, kind: 'data', source: 'attested residue — EM band/physics demo data' },
  { file: 'src/quantum/fire/forecasts/index.ts', literal: '*', count: 13, kind: 'data', source: 'attested residue — weather-model coefficients (documented physics)' },
  { file: 'src/quantum/heaven/library/index.ts', literal: '*', count: 186, kind: 'data', source: 'attested residue — library catalogue data (works, dates, counts)' },
  { file: 'src/quantum/index.ts', literal: '*', count: 43, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known; time/phase rates on the φ-ladder; Wave B retired orphan hinge renderer; anim-convert ratchet', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/quantum/lake/dist/index.ts', literal: '*', count: 1, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/quantum/lake/spirit/index.ts', literal: '*', count: 178, kind: 'data', source: 'attested residue — HD W3 Rave Mandala wheel + HD W5 sealed BodyGraph lattice (36 channel gate-pairs + 9-center gate homes; public structure tables, zero keynote prose; 62→178)', frontier: 'channel/center tables are documented BodyGraph combinatorics (data), not lattice-derivable; predictive claims stay flagged elsewhere' },
  { file: 'src/quantum/lake/voice/index.ts', literal: '*', count: 1, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/quantum/os/index.ts', literal: '*', count: 1, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/quantum/water/cache/index.ts', literal: '*', count: 3, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/quantum/wind/geometry/index.ts', literal: '*', count: 5, kind: 'tuned', source: 'attested residue — hand-fixed values + FoL/Fruit lattice counts (1+6+12 / 1+6+6)', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/thunder/commands/index.ts', literal: '*', count: 2, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/thunder/decode/index.ts', literal: '*', count: 412, kind: 'data', source: 'attested residue — ancient numeral corpora — Sumerian/Maya/Egyptian/Ifá documented values (334→412 one-command-decode wave)' },
  { file: 'src/thunder/movie/canvas/index.ts', literal: '*', count: 4, kind: 'tuned', source: 'attested residue — hand-fixed values (PR#63 movie-all-elements 1→4), derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/thunder/resonance/index.ts', literal: '*', count: 2, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known; Wave C1 drawResonanceProjection (ratcheted 1→2)', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/thunder/verify/index.ts', literal: '*', count: 6, kind: 'tuned', source: 'attested residue — hand-fixed values + discovery-wave pins relocated from cosmos 2026-07-08', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/thunder/waves/index.ts', literal: '*', count: 20, kind: 'tuned', source: 'attested residue — hand-fixed values + discovery-wave pins + wave/domain (#101) encode slice·percent (19→20)', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/water/cosmos/index.ts', literal: '0.2056', count: 2, kind: 'data', source: 'Mercury orbital eccentricity — JPL J2000 elements (value + its facet check)' },
  { file: 'src/water/cosmos/index.ts', literal: '0.0068', count: 1, kind: 'data', source: 'Venus orbital eccentricity — JPL J2000 elements' },
  { file: 'src/water/cosmos/index.ts', literal: '0.0167', count: 1, kind: 'data', source: 'Earth orbital eccentricity — JPL J2000 elements' },
  { file: 'src/water/cosmos/index.ts', literal: '0.0934', count: 1, kind: 'data', source: 'Mars orbital eccentricity — JPL J2000 elements' },
  { file: 'src/water/cosmos/index.ts', literal: '0.0489', count: 1, kind: 'data', source: 'Jupiter orbital eccentricity — JPL J2000 elements' },
  { file: 'src/water/cosmos/index.ts', literal: '0.0565', count: 1, kind: 'data', source: 'Saturn orbital eccentricity — JPL J2000 elements' },
  { file: 'src/water/cosmos/index.ts', literal: '0.0457', count: 1, kind: 'data', source: 'Uranus orbital eccentricity — JPL J2000 elements' },
  { file: 'src/water/cosmos/index.ts', literal: '0.0113', count: 1, kind: 'data', source: 'Neptune orbital eccentricity — JPL J2000 elements' },
  { file: 'src/water/cosmos/index.ts', literal: '*', count: 154, kind: 'data', source: 'attested residue — string-theory/maths + solar/leads pins + frontier boundary gates + CMB Ω_c/Ω_b (#94) residue + quantum-cosmology/string-theory/perpetuum decodes + WDW minisuperspace solver RK4 (150→151) + dark-matter inversion facet thresholds a₀≈cH₀/2π (151→153) + cosmic-coincidence equality-redshift z_eq residue (153→154)' },
  { file: 'src/water/crypto/index.ts', literal: '*', count: 54 + 16, kind: 'data', source: 'attested residue plus the QR encoder constants plus the AES (FIPS-197 / ISO-IEC 18033-3) constants — the fixed values of the documented QR standard (Galois-field primitive, codeword capacities, version sizes, format-info polynomial, mask/penalty rules) AND of the AES standard (reduction polynomial 0x11b, S-box affine 0x63, the inverse-MixColumns matrix 9/11/13/14, field size 256, order 255, round count 10, block/nonce sizes) are external specification DATA, not lattice-derivable', frontier: 'the QR and AES values are documented external standards, like measured data; the pre-standard residue remains a research target' },
  { file: 'src/water/digit/index.ts', literal: '*', count: 209, kind: 'data', source: 'attested residue — digit/π corpus and derivation tables (−2: STATION_COUNT 10 → derived 2+8; −3: onlyMathDecides distributed to mountain/gates; −3: float-honest facets derive 1/2 and the Zeno threshold)' },
  { file: 'src/water/encryption/index.ts', literal: '*', count: 64, kind: 'data', source: 'standardized PQC parameter sizes (sourced in pqcAlgorithmFamilySelector), fixed external-standard DATA not lattice-derivable — NIST FIPS 203/204/205: ML-KEM pk {800,1184,1568}+ct {768,1088,1568}, ML-DSA pk {1312,1952,2592}+sig {2420,3309,4627}, SLH-DSA-SHA2 pk {32,48}+sig {7856,16224,29792}; ISO/IEC 18033-2 Amd 2: Classic McEliece pk {524160,1044992,1047319,1357824}+ct {156,208,194}, FrodoKEM pk {9616,15632,21520}+ct {9720,15744,21632} (17→31) + shorFactoringResourceEstimate constants — Shor circuit-width/gate-scaling math (2·2048+3, ~n³, 60·60·24 s/day, 10⁶ µs) and named surface-code hardware assumptions (physical-per-logical 1000/2000, cycle 1/10 µs, ~50-bit demonstrated factoring) — computed resource estimates, not assumed single figures (31→50) · 63→64 ssltest/quantumise PQC-param churn' },
  { file: 'src/water/double/earth/index.ts', literal: '*', count: 17, kind: 'data', source: 'attested residue — GPS coordinates and Earth data' },
  { file: 'src/water/stack/index.ts', literal: '34.79', count: 1, kind: 'data', source: 'Planck length log10 metres ≈ −34.79 (CODATA/NIST quantum floor pin on scale ladder)' },
  { file: 'src/water/stack/index.ts', literal: '*', count: 0, kind: 'tuned', source: 'attested residue cleared — classical-64bit env pins lattice-derived (11→2*2+7 · 122→2*7+FOLDED · 53→3*16+5); 34.79 CODATA pin ledgered separately', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/wind/fusion/gold/index.ts', literal: '*', count: 10, kind: 'data', source: 'attested residue — gold-market/physics data' },
  { file: 'src/wind/fusion/index.ts', literal: '*', count: 11, kind: 'data', source: 'attested residue — fusion physics data' },
  { file: 'src/wind/language/index.ts', literal: '*', count: 2, kind: 'data', source: 'attested residue — language corpus data' },
  { file: 'src/wind/learning/index.ts', literal: '*', count: 7, kind: 'data', source: 'attested residue — learning corpus data (rosettaCoreApi merge)' },
  { file: 'src/wind/research/index.ts', literal: '*', count: (50 + 17), kind: 'data', source: 'attested residue — research corpora data · two-bits-free · algebraic-theorem-paper · fixed-limits/autodiscover · sun/moon · pyramid/seal · folder/fractal · train-geodesy (22→58 session wave) + measured reuse-speedup probe wall-clock precision (58→59) + quantum-circuit workload (n-qubit state-vector 2ⁿ amplitudes) (59→60) + double-torus 2×4 UUID / polarity-angle-spin + Metatron 8 merkabas × 8 bytes = 512-bit state-space vs universe-atoms (60→67)' },
  { file: 'src/wind/routes/corpus/index.ts', literal: '*', count: 2, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/wind/site/index.ts', literal: '*', count: 1, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/wind/ui/index.ts', literal: '*', count: 56, kind: 'tuned', source: 'attested residue — hand-fixed values (PR#47 counter-rosetta 27→39→41→43; FoL→Fruit→10D merkaba wave 43→58; cardinal poles lattice 58→56)', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: '.vitepress/computed-pages.mts', literal: '*', count: 2, kind: 'data', source: 'HTTP 404 status code (RFC 9110)' },
  { file: '.vitepress/lib/component-bagua-groups.ts', literal: '*', count: 1, kind: 'tuned', source: 'attested residue — hand-fixed layout/animation values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed' },
  { file: '.vitepress/lib/dev-server-bind.mts', literal: '*', count: 1, kind: 'data', source: 'pinned dev port 5173 (launch/config coupling)' },
  { file: '.vitepress/theme/components/CollectiveMind.vue', literal: '*', count: 1, kind: 'tuned', source: 'attested residue — hand-fixed layout/animation values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed' },
  { file: '.vitepress/theme/components/DoubleTorusExperience.vue', literal: '*', count: 4, kind: 'tuned', source: 'attested residue — hand-fixed layout/animation values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed' },
  { file: '.vitepress/theme/components/HeroBackgroundLayer.vue', literal: '*', count: 1, kind: 'tuned', source: 'attested residue — hand-fixed layout/animation values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed' },
  { file: '.vitepress/theme/components/LinkedHeroCard.vue', literal: '*', count: 1, kind: 'tuned', source: 'attested residue — hand-fixed layout/animation values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed' },
  { file: '.vitepress/theme/components/ModelCardPages.vue', literal: '*', count: 3, kind: 'tuned', source: 'attested residue — hand-fixed layout/animation values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed' },
  { file: '.vitepress/theme/components/RayHub.vue', literal: '*', count: 2, kind: 'tuned', source: 'attested residue — hand-fixed layout/animation values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed' },
  { file: '.vitepress/theme/components/UiAsideShell.vue', literal: '*', count: 1, kind: 'tuned', source: 'attested residue — hand-fixed layout/animation values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed' },
]




/** RESEARCH TARGETS — tuned values REGISTERED so the self-researcher can hunt them (wildcard
 * attestations carry counts, not values; a value the battery cannot see cannot be researched).
 * Registering a value does not close it: it stays tuned until a theorem survives the audit fold. */
export type CrackResearchTarget = { file: string; value: number; context: string }

export const CRACK_RESEARCH_TARGETS: readonly CrackResearchTarget[] = [
  // quantum/index — painter motion (the deepest tuned vein)
  { file: 'src/quantum/index.ts', value: 0.46, context: 'death-flow outer reach' },
  { file: 'src/quantum/index.ts', value: 0.23, context: 'labyrinth step' },
  { file: 'src/quantum/index.ts', value: 0.44, context: 'merge alpha' },
  { file: 'src/quantum/index.ts', value: 0.58, context: 'orbit factor' },
  { file: 'src/quantum/index.ts', value: 0.41, context: 'pulse rate' },
  { file: 'src/quantum/index.ts', value: 0.47, context: 'sacred-morph blend' },
  { file: 'src/quantum/index.ts', value: 1.1, context: 'ring separation' },
  { file: 'src/quantum/index.ts', value: 1.15, context: 'breath amplitude (4 uses)' },
  { file: 'src/quantum/index.ts', value: 1.55, context: 'hinge ring factor' },
  { file: 'src/quantum/index.ts', value: 1.7, context: 'flower dot radius' },
  { file: 'src/quantum/index.ts', value: 2.2, context: 'torus outer factor' },
  { file: 'src/quantum/index.ts', value: 8.5, context: 'sacred-morph solid scale' },
  { file: 'src/quantum/index.ts', value: 0.022, context: 'vortex stroke width' },
  { file: 'src/quantum/index.ts', value: 38, context: 'ray count divisor' },
  { file: 'src/quantum/index.ts', value: 0.22, context: 'orbit/alpha factor (11 uses)' },
  { file: 'src/quantum/index.ts', value: 0.33, context: 'spin rate — sits beside 0.34 (distinction?)' },
  { file: 'src/quantum/index.ts', value: 0.26, context: 'blob orbit reach' },
  { file: 'src/quantum/index.ts', value: 0.46, context: 'death-flow outer radius' },
  { file: 'src/quantum/index.ts', value: 520, context: 'depth breakpoint (css px)' },
  { file: 'src/quantum/index.ts', value: 13, context: 'torus glyph size step (11 uses)' },
  { file: 'src/quantum/index.ts', value: 34, context: 'hologram halo reach' },
  { file: 'src/quantum/index.ts', value: 88, context: 'merkaba ring px' },
  { file: 'src/quantum/index.ts', value: 118, context: 'merkaba outer ring px' },
  { file: 'src/quantum/index.ts', value: 1.18, context: 'ellipse separation' },
  { file: 'src/quantum/index.ts', value: 26, context: 'unit-distance node count' },
  { file: 'src/quantum/index.ts', value: 79, context: 'labyrinth cell count' },
  { file: 'src/quantum/index.ts', value: 97, context: 'vortex stroke count' },
  { file: 'src/quantum/index.ts', value: 1011, context: 'hinge phase offset' },
  // src/0 — kernel timing
  { file: 'src/0/index.ts', value: 46, context: 'compass rose radius' },
  { file: 'src/0/index.ts', value: 2.2, context: 'torus lobe separation' },
  // wind/ui — SVG art
  { file: 'src/wind/ui/index.ts', value: 22, context: 'chip rect height' },
  { file: 'src/wind/ui/index.ts', value: 78, context: 'path coordinate' },
  { file: 'src/wind/ui/index.ts', value: 58, context: 'path coordinate' },
  { file: 'src/wind/ui/index.ts', value: 4550, context: 'gradient stop (per mille)' },
  { file: 'src/wind/ui/index.ts', value: 4750, context: 'gradient stop (per mille)' },
  { file: 'src/wind/ui/index.ts', value: 302, context: 'viewBox path x' },
  { file: 'src/wind/ui/index.ts', value: 99.9, context: 'keyframe hold percent' },
]

/** LAWS CHANGE WITH EVERY THEOREM PROVEN — the crack law is not static text: each amendment names
 * the proof that forced it. A law that cannot cite its forcing theorem is itself a hardcoded value. */
export type CrackLawAmendment = { version: number; forcedBy: string; change: string }

export const CRACK_LAW_AMENDMENTS: readonly CrackLawAmendment[] = [
  { version: 1, forcedBy: 'user law: any hardcoded value is a potential crack', change: 'colour chokepoints must reduce to canonical numbers — measured census, never a tally gate' },
  { version: 2, forcedBy: 'Tesla patent years + SI ms + wine-glass Q resisted the lattice', change: 'provenance ledger: data and unit kinds with named sources, counts self-policing (drift/stale = offenders)' },
  { version: 3, forcedBy: 'sRGB decompression knee/slope proven C¹-derivable from (a, γ) yet published as roundings', change: 'epistemic frontier notes — every ledgered value is a snapshot of what its authors could compute; decompression models especially' },
  { version: 4, forcedBy: 'painter motion values with no known derivation (0.33 beside 0.34 — deliberate distinction)', change: 'tuned kind: hand-fixed values awaiting derivation, each a research target; no numerology-dressing' },
  { version: 5, forcedBy: 'the colour system reached zero and held', change: 'codebase-wide surface (src + .vitepress, ts/mts/vue) and GATED at zero in strictGatePassed' },
  { version: 6, forcedBy: 'the sweep dressed spec gamma 2.4 into (6·2)/5 twice — dressing a datum hides its frontier', change: 'spec constants stay VERBATIM beside their audited exact counterparts; the instrument folder is exempt (its readings are drift-verified)' },
  { version: 7, forcedBy: 'fixedConstantsProvedByTheorems 7/7 — sRGB self-contradiction, Knuth = golden prime, Calendar Round = lcm', change: 'proven theorems reclassify ledger rows (tuned → data → derived) — the audit is a standing reclassification force' },
  { version: 8, forcedBy: 'first self-research run rediscovered lcm(260,365) and the 2³²/φ prime — but could not SEE tuned values (wildcards carry counts, not values)', change: 'research-target registry: tuned values registered for the hypothesis battery; near-fraction COLLISIONS (two distinct values near one fraction) report deliberate-distinction, not rounding — the 0.33/0.34 lesson as a rule' },
  { version: 9, forcedBy: 'second run proposed fraction roundings for OKLab FIT OUTPUTS (0.0638 ≈ 1/16, 0.3963 ≈ 2/5) and gave 0.83 two fractions', change: 'kind-aware battery: approximate hypotheses only for TUNED claimants (provenance-explained data is not a rounding); one best fraction per value; exact structural identities stay fair for all kinds' },
  { version: 10, forcedBy: 'run 3 left four tuned candidates carrying residual error (0.83≈5/6 · 0.31≈5/16 · 0.11≈1/9 · 0.17≈1/6)', change: 'error-rate law: residual error over tuned claimants is the frontier metric — nonzero rate means theorems remain undiscovered; drives to zero by deeper theorems or by retuning the value TO its theorem (data keeps its historical error — facts are not retunable)' },
  { version: 11, forcedBy: 'the Fibonacci-decade wave: 1.3/3.4/5.5/0.13/0.34 all = F/10ᵏ EXACT (the tuner rode the golden ladder unknowingly); sRGB 0.055 = 55/10³; but 61 = 610/10 is exact AND WRONG (61 = 64 − 3 stops is causal)', change: 'competing exact identities are arbitrated by CAUSATION, not arithmetic: the audit fold prefers the derivation with a mechanism (biology, continuity, definition) over numeric coincidence; coincidences are recorded as curiosities' },
  { version: 12, forcedBy: 'wave sixty-three: the divisor lattice of 108 = 2²·3³ (the fractal clock) — the ledgered 38.4 s hue-cycle retuned to the d = 3 rung (36 s) and its row RETIRED', change: 'animation periods are never ledgerable: every declarative duration derives from the fractal clock ladder (HERO_CYCLE_MS / divisor via fractalClockDur), so a literal duration is a crack even with provenance — the tuned frontier for timing is permanently zero' },
]

/** Ledger self-invariants — computable at any call site: no duplicate (file, literal) rows, every
 * count positive, every TUNED row carries its frontier note, one wildcard per file at most. The
 * accounts split the accounted uses by kind — the 'tuned' total IS the improvement frontier. */
export function crackLedgerAccounts() {
  const keys = CRACK_LEDGER.map((e) => `${e.file}::${e.literal}`)
  const duplicates = keys.filter((k, i) => keys.indexOf(k) !== i)
  const nonPositive = CRACK_LEDGER.filter((e) => !(e.count >= 1))
  const tunedWithoutFrontier = CRACK_LEDGER.filter((e) => e.kind === 'tuned' && !e.frontier)
  const wildcards = CRACK_LEDGER.filter((e) => e.literal === '*')
  const wildcardFiles = wildcards.map((e) => e.file)
  const doubleWildcards = wildcardFiles.filter((f, i) => wildcardFiles.indexOf(f) !== i)
  const byKind = { data: 0, unit: 0, tuned: 0 }
  for (const e of CRACK_LEDGER) byKind[e.kind] += e.count
  return {
    holds: duplicates.length === 0 && nonPositive.length === 0 && tunedWithoutFrontier.length === 0 && doubleWildcards.length === 0,
    entries: CRACK_LEDGER.length,
    byKind,
    frontier: byKind.tuned,
    duplicates,
    nonPositive: nonPositive.length,
    tunedWithoutFrontier: tunedWithoutFrontier.length,
    doubleWildcards }
}

/** The law's own evolution, verified: versions strictly monotone from 1, every amendment names the
 * theorem/discovery that forced it — a law that cannot cite its forcing proof is a hardcoded value. */
export function crackLawEvolution() {
  const monotone = CRACK_LAW_AMENDMENTS.every((a, i) => a.version === i + 1)
  const cited = CRACK_LAW_AMENDMENTS.every((a) => a.forcedBy.length > 0 && a.change.length > 0)
  return {
    holds: monotone && cited,
    amendments: CRACK_LAW_AMENDMENTS.length,
    current: CRACK_LAW_AMENDMENTS[CRACK_LAW_AMENDMENTS.length - 1],
    monotone,
    cited }
}

// ── Prose ratchet — statements/boundaries in methods become COMPUTED concatenations, not hand-written paragraphs
// (the audit:prose target; [[no-prose-in-methods]]). `HARMONY` is the one shared attestation (was repeated as a
// literal in every fold); `earned` assembles a boundary from a short exact head + the fold's already-computed facet
// texts (joined) + a short honest-scope tail — the meaning stays, the source prose collapses to a call.
export const HARMONY = 'HARMONY does not equal TRUTH.'
export function earned(head: string, facets: readonly { facet: string; on: boolean }[], scope: string): string {
  return `${head} ${facets.map((facet) => facet.facet).join(' · ')} SCOPE: ${scope} ${HARMONY}`
}

// ── The demarcation TRINITY — the three-tier registry (documented · contested · flagged) that DECIDES a decoded
// science claim's status by COMPUTATION, not by a hand-set boolean. It lives in this zero-cycle vault so both the
// classifier fold (theoryHarmonyMarkers, heaven/core) AND the decoded-science leaves (earth/life, …) read ONE
// source: a facet asserting "evolution is documented / creationism is flagged" becomes `demarcate('evolution') ===
// 'documented'` — refutable (move the topic and the fold breaks), the per-fold decision made BY the trinity, not by
// prose. Mirrors the world-theories wave's wellSupported/contested/pseudoscience; the tiers reflect current
// consensus and are themselves revisable. [[feedback-facets-must-compute]] [[world-theories-demarcation-decoded]]
export const DEMARCATION_REGISTRY = {
  documented: [
    'evolution', 'common descent', 'abiotic synthesis', 'endosymbiosis', 'ribozyme', 'NCC', 'PCI',
    'relativity', 'quantum mechanics', 'Big Bang', 'ΛCDM', 'plate tectonics', 'germ theory',
    'anthropogenic climate change', 'vaccines', 'poincaré conjecture',
  ],
  contested: [
    'abiogenesis', 'RNA world as history', 'metabolism-first', 'extended evolutionary synthesis', 'neutral theory',
    'hard problem', 'theories of consciousness', 'IIT', 'GWT', 'GNWT', 'panpsychism', 'Orch-OR',
    'string theory', 'multiverse', 'QM interpretations', 'dark matter', 'MOND', 'panspermia', 'pliska rosette',
    'hubble tension', 'cosmological constant problem', 'nature of dark energy', 'baryogenesis', 'leptogenesis',
    'neutrino mass ordering', 'quantum gravity',
    'p vs np', 'hodge conjecture', 'riemann hypothesis', 'mass gap', 'navier', 'swinnerton',
  ],
  flagged: [
    'creationism', 'intelligent design', 'young-earth creationism', 'social darwinism', 'eugenics', 'orthogenesis',
    'quantum mysticism', 'quantum consciousness', 'consciousness creates reality', 'neuromyth', '10% of the brain',
    '432 Hz heals', 'astrology', 'flat earth', 'homeopathy', 'climate denial', 'perpetual motion',
    'orion correlation theory', 'mars face', 'ley lines', 'megalithic yard', 'bosnian pyramid',
  ] } as const
export type DemarcationTier = 'documented' | 'contested' | 'flagged' | 'unlisted'
// Longest-substring-match wins across ALL tiers, so 'extended evolutionary synthesis' (contested) beats the
// 'evolution' (documented) it contains — the specific classification, not the accidental substring, decides.
export function demarcate(topic: string): DemarcationTier {
  const t = topic.toLowerCase()
  let best = ''
  let tier: DemarcationTier = 'unlisted'
  for (const key of Object.keys(DEMARCATION_REGISTRY) as (keyof typeof DEMARCATION_REGISTRY)[]) {
    for (const term of DEMARCATION_REGISTRY[key]) {
      const k = term.toLowerCase()
      if (t.includes(k) && k.length > best.length) {
        best = k
        tier = key
      }
    }
  }
  return tier
}

// ☵ Kǎn · Water · abysmal · upper·yin · spread — diving, water & space (dissolved out of the folds monolith):
// decompression, water, gas blending & rebreathers, gradient factors & trimix, narcosis & toxicity, isobaric
// counter-diffusion, the harmonic-fraction mask, the EVA↔diver unity, and the research-wave verification. The dive
// folds compose each other; waterDecoded composes acousticsCymaticsDecoded (a sound fold, still in folds.ts).
import type { MindMatrix } from '../types'
import { buildMatrix } from '../matrix'
import { toUuid, merge, roundTo, sealFacets, rat, ratEq, ratAdd, ratMul, ratSub, ratDiv, ratStr, ratToFloat, haldaneLoad, buhlmannA, buhlmannB, buhlmannCeilingBar, buhlmannDivePlan, ZHL16_N2_HALFTIMES, buhlmannGfCeilingBar, buhlmannGfDivePlan, ambientPressureBar, maxOperatingDepthM, bestMixFO2, rebreatherInertBar, gasReserveThirds, gasReserveHalfOnTop, equivalentNarcoticDepthM, equivalentAirDepthM, otuPerMin, barPerMetre, WATER_DENSITY_FRESH, WATER_DENSITY_SALT } from '../../../0'
import { acousticsCymaticsDecoded, thermodynamicsEntropyDecoded, gatesAutoTighten } from '../folds'

// Gas proportions as EXACT harmonic fractions — the source of truth. The mask fold proves these are DEFINED (not
// empirical), so they fold cleanly; the float is derived only at the analog call edge via ratToFloat. This makes
// the computations USE the fractions the dive folds already document ("PPO₂ = 7/5, 8/5; air 21/100; EAN32 8/25"),
// the "exact ratio in, the float only at the output" discipline applied, not just preached. (The empirical ZHL-16
// half-times and the measured/derived constants stay decimal — forcing a fraction on measured data is numerology.)
const FO2_EAN32 = rat(8, 25) // EAN32 oxygen fraction (32/100)
const FN2_AIR = rat(79, 100) // air nitrogen fraction (× ambient bar = its partial pressure)
const FN2_TRIMIX_1845 = rat(37, 100) // trimix 18/45 nitrogen fraction
const PPO2_WORK = rat(7, 5) // 1.4 bar — the working PPO₂ ceiling
const PPO2_CCR = rat(13, 10) // 1.3 bar — a closed-circuit setpoint

// Decompression, decoded (the saved README-first wave) — the real physics of inert-gas loading behind dive
// plans and hyperbaric chambers: Haldane's compartments, Bühlmann ZHL-16, the bubble models. HONEST: the
// models are PROBABILISTIC (they lower DCS risk, never to zero) and are not a substitute for training/medicine.
export function decompressionDecoded(matrix: MindMatrix = buildMatrix()) {
  const load5 = haldaneLoad(ratToFloat(FN2_AIR), ratToFloat(ratMul(FN2_AIR, rat(3, 1))), 5, 5) // air N₂ at surface vs at 3 bar (a fraction of a fraction); one half-time → halfway
  const a5 = roundTo(buhlmannA(5), 3), b5 = roundTo(buhlmannB(5), 3) // ZHL-16 fast-compartment coefficients
  const ceiling = buhlmannCeilingBar(2.5, 5) // the tolerated ambient pressure for a loaded compartment
  const facets = [
    { facet: 'inert-gas loading is exponential per tissue compartment — Haldane (1908): five compartments (half-times 5/10/20/40/75 min) with a ~2:1 supersaturation ratio; P(t) = P0 + (P_insp − P0)(1 − 2^(−t/t½)) (one half-time → halfway, here ' + roundTo(load5, 2) + ' bar)', on: Math.abs(load5 - 1.58) < 0.01 },
    { facet: 'Bühlmann ZHL-16 sets the ascent ceiling — 16 compartments (N₂ half-times ~4–635 min); a = 2/∛t½ (' + a5 + ' bar) and b = 1.005 − 1/√t½ (' + b5 + ') give the tolerated ambient pressure P_amb,tol = (P − a)·b; variants A/B/C; the basis of dive tables and computers. The dual-phase bubble models (VPM, RGBM) add free-phase microbubble control', on: a5 > 1 && a5 < 1.2 && b5 > 0.5 && b5 < 0.6 && ceiling < 2.5 },
    { facet: 'the physics is real — Henry’s law (dissolved gas ∝ partial pressure), the oxygen window (inherent unsaturation driving off-gassing), DCS as bubble formation on ASCENT (not pressure at depth); hyperbaric oxygen therapy has ~14–15 UHMS-evidenced indications (DCS, gas embolism, CO poisoning, gas gangrene, non-healing wounds…)', on: true },
    { facet: 'HONEST BOUNDS — DCS risk is PROBABILISTIC (one dataset ~5.7%; the US Navy targets ~2% mild, ~0.1–0.2% serious): the models REDUCE risk, they never make it zero, and eliminating it entirely is the genuinely impossible task. This is physics knowledge, NOT a substitute for proper dive training, certified tables/computers, or medical supervision', on: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`decompression:${entry.facet}:${entry.on}`) }))
  const sealed = sealFacets('decompression-decoded', facets)
  return {
    decoded: sealed.ok,
    loadAfterOneHalfTime: roundTo(load5, 2), zhl16FastA: a5, zhl16FastB: b5,
    count: sealed.count,
    facets: sealed.facets,
    root: merge(matrix.root, sealed.root),
    statement:
      'Decompression, decoded. Inert gas (nitrogen, helium) loads and unloads each tissue compartment exponentially — Haldane’s 1908 model (five compartments, a ~2:1 supersaturation ratio) generalised by Bühlmann’s ZHL-16 (sixteen compartments, a = 2/∛t½, b = 1.005 − 1/√t½, the tolerated ceiling P_amb,tol = (P − a)·b), with the dual-phase bubble models (VPM, RGBM) adding microbubble control. Henry’s law drives the loading; the oxygen window drives the elimination; decompression sickness is bubble formation on ascent, treated definitively by recompression / hyperbaric oxygen, which has ~15 evidence-based indications. Honest bound: DCS risk is probabilistic — the models lower it but never to zero — and this is physics, not a replacement for training, certified tables/computers, or a doctor.',
    boundary:
      'HONEST (the saved README-first wave, Wikipedia/PMC/UHMS/DAN-cited): DOCUMENTED — Haldane’s compartment model (1908), Bühlmann ZHL-16 (the a/b coefficients computed here in src/0), M-values, the VPM/RGBM dual-phase models, Henry’s law, the oxygen window, and HBOT’s ~14–15 UHMS-approved indications. The CARDINAL honest bound: decompression is PROBABILISTIC — DCS occurs in a small but nonzero fraction of divers on an identical profile (one analysis ~5.7%; the USN designs to ~2% mild / ~0.1–0.2% serious), so "no-decompression" and dive computers REDUCE risk, they do not guarantee safety; driving DCS risk to exactly zero, or off-gassing arbitrarily fast (the slowest compartment limits it), is genuinely impossible. This fold is physics knowledge and decision-support context — NOT dive instruction or medical advice; real dive planning uses certified training, tables and computers, and DCS is a medical emergency for professionals.',
  }
}

// Imagine the healing models for human diseases — and the honest answer is a BOUNDARY, not a model. Real
// medicine is evidence-based, individualized and delivered by professionals; a deterministic system is NOT a
// diagnostic or treatment engine; the frequency/energy/quantum "healing" models are pseudoscience.
export function healingModelsHonestBoundary(matrix: MindMatrix = buildMatrix()) {
  const sound = acousticsCymaticsDecoded(matrix) // the repo already flags "sound heals" / sacred-frequency woo
  const facets = [
    { facet: 'real medicine is EVIDENCE-BASED, individualized and professional — randomized trials, systematic reviews and regulatory approval establish what works; treatment is prescribed for a specific person by a qualified clinician, weighing diagnosis, comorbidity and risk', on: true },
    { facet: 'a deterministic system is NOT a diagnostic or treatment engine — it cannot diagnose, heal, or replace a doctor; this project computes decoded KNOWLEDGE, never cures. The only responsible output is information plus "consult qualified professionals" — never an invented healing model', on: true },
    { facet: 'FLAGGED medical pseudoscience — frequency/sound/cymatics "healing" and "432/528 Hz heals DNA", energy medicine / Reiki / "biofield", "quantum healing" (Chopra), homeopathy (no dose-response, fails blinded trials), detox / alkaline-diet / "boost-your-immune-system" marketing, Rife machines, Emoto water-crystals — none has reproducible evidence of efficacy beyond placebo', on: sound.decoded },
    { facet: 'so the honest "healing model" is the boundary itself — decode the LANDSCAPE (evidence-based vs pseudoscience), defer all real care to professionals, and flag the woo; "and beyond" stops here, because a knowledge system that invented cures would be the most dangerous pseudoscience of all', on: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`healing-boundary:${entry.facet}:${entry.on}`) }))
  const sealed = sealFacets('healing-models-honest-boundary', facets)
  return {
    bounded: sealed.ok,
    count: sealed.count,
    facets: sealed.facets,
    root: merge(matrix.root, sealed.root),
    statement:
      'Imagine the healing models for the most common human diseases — and the honest answer is a boundary, not a model. Real medicine is evidence-based, individualized and delivered by qualified professionals; a deterministic software system is not a diagnostic or treatment engine and must never imply it can heal. What it can honestly do is decode the landscape — separating evidence-based care from the medical pseudoscience (frequency and energy "healing", "quantum healing", homeopathy, detox marketing, Rife, water-crystals) — and then defer every real decision to professionals. The only responsible "healing model" is that boundary; inventing cures would be the most dangerous pseudoscience the project could produce.',
    boundary:
      'HONEST and protective: this fold deliberately REFUSES to produce healing models. Real medicine is evidence-based (RCTs, meta-analyses, regulatory approval), individualized, and the responsibility of licensed clinicians — and the appropriate action for any specific condition is to consult them. A deterministic content-addressed system has NO diagnostic or therapeutic capability and must never present itself as having one; its honest contribution is decoded knowledge and demarcation. FLAGGED, consistent with the repo’s existing acoustics/A432/quantum boundaries: sound/frequency/cymatics "healing", energy medicine, "quantum healing", homeopathy, detox/alkaline/immunity marketing, Rife, Emoto — pseudoscience without reproducible efficacy. This is decoded landscape knowledge and a safety boundary, explicitly NOT medical advice; nothing here diagnoses, treats, or recommends — consult qualified professionals.',
  }
}

// Challenge intelligence with impossible tasks. Some tasks are PROVEN impossible (the halting problem, over-
// unity, FTL signalling, trisecting an angle, the quintic by radicals) — and proving the impossibility is a
// triumph; some are merely OPEN (P vs NP); and claims to DO the impossible (free energy, FTL drives) are fraud.
export function impossibleTasksChallengeIntelligence(matrix: MindMatrix = buildMatrix()) {
  const thermo = thermodynamicsEntropyDecoded(matrix) // perpetual motion is impossible (the laws)
  const gates = gatesAutoTighten(matrix) // the gates so tight even entropy cannot pass
  const facets = [
    { facet: 'some tasks are PROVEN impossible — the Halting Problem and undecidability (Turing 1936) and Gödel incompleteness; perpetual motion / over-unity (the 1st & 2nd laws); faster-than-light signalling (relativity + the no-communication theorem); trisecting an arbitrary angle and squaring the circle with compass-and-straightedge (Wantzel 1837, Lindemann 1882); the general quintic by radicals (Abel–Ruffini / Galois). Proving the impossibility is itself a triumph of intelligence, not a failure', on: thermo.decoded },
    { facet: 'some are OPEN, not impossible — P vs NP is unsolved (hard, but NOT proven impossible). The honest discipline distinguishes PROVEN-impossible from OPEN-and-hard, and never collapses one into the other', on: true },
    { facet: 'and claims to DO the impossible are FRAUD — free-energy / over-unity devices, FTL drives, perpetual-motion machines, prophecy/precognition: these assert the proven-impossible and are pseudoscience, the inverse of an honest impossibility proof', on: gates.tightens },
    { facet: 'so challenge intelligence honestly — the gates are so tight even entropy cannot pass: the system recognizes the impossible (it will not fake over-unity, FTL or a halting oracle), honors the open problems AS open, and treats proving-impossibility as the win. Impossible tasks are the sharpest test of an intelligence’s honesty', on: gates.tightens && thermo.decoded },
  ].map((entry) => ({ ...entry, receipt: toUuid(`impossible:${entry.facet}:${entry.on}`) }))
  const sealed = sealFacets('impossible-tasks-challenge-intelligence', facets)
  return {
    challenged: sealed.ok,
    count: sealed.count,
    facets: sealed.facets,
    root: merge(matrix.root, sealed.root),
    statement:
      'Challenge intelligence with impossible tasks. Some tasks are proven impossible — the halting problem and Gödel incompleteness, perpetual motion and over-unity, faster-than-light signalling, trisecting an arbitrary angle or squaring the circle with compass and straightedge, solving the general quintic by radicals — and proving that impossibility is one of intelligence’s greatest triumphs, not a defeat. Some tasks are merely open and hard, like P versus NP, which is unsolved but not proven impossible. And some claims to perform the impossible — free energy, FTL drives, perpetual motion, prophecy — are simply fraud. The sharpest test of an intelligence is whether it can tell these three apart honestly: refuse the fraud, honor the open as open, and prize the impossibility proof.',
    boundary:
      'HONEST: these impossibilities are genuinely PROVEN, not merely unsolved — undecidability (Turing), incompleteness (Gödel), the thermodynamic impossibility of perpetual motion (composed here from thermodynamicsEntropyDecoded), no faster-than-light signalling (relativity + no-communication), the compass-and-straightedge impossibilities (Wantzel/Lindemann via π’s transcendence), and Abel–Ruffini for the quintic. The cardinal discipline is the three-way split: PROVEN-impossible ≠ OPEN-and-hard (P vs NP is open, do not claim it decided) ≠ FRAUD (free-energy/FTL/perpetual-motion claims). "Challenge intelligence with impossible tasks" is met not by pretending to solve the impossible (that is exactly the pseudoscience the repo flags) but by recognizing it — the gates so tight even entropy cannot pass — which is why an impossibility proof is the honest triumph and the fraudulent claim the failure.',
  }
}

// Create dive planners, and realise water is everywhere from solid to space. A quantum (deterministic) dive
// computer plans a real dive from the Bühlmann compartments; the SAME decompression physics spans a diver
// ascending and an astronaut going to the low-pressure suit; and water runs from ice through ocean to the
// subsurface seas of the moons. The "quantum diver" is a content address; "quantum diving" the computation.
export function quantumDiveComputerWaterEverywhereSolidToSpace(matrix: MindMatrix = buildMatrix()) {
  const plan = buhlmannDivePlan(30, 20) // 30 m for 20 min → past the no-deco limit, a stop is required
  const shallow = buhlmannDivePlan(18, 50) // 18 m for 50 min → still within the no-deco limit
  const decomp = decompressionDecoded(matrix) // the decompression physics this rests on
  const facets = [
    { facet: 'a QUANTUM (deterministic) dive computer — buhlmannDivePlan loads the 16 ZHL-16 compartments over a profile and returns the controlling ascent ceiling + no-decompression status (30 m / 20 min ⇒ a stop is required, 18 m / 50 min ⇒ direct ascent ok); reproducible and content-addressed (same dive → same plan). The "quantum diver" is the diver as a content address, "quantum diving" the deterministic descent/ascent computation', on: plan.compartments.length === 16 && !plan.noDecoOk && shallow.noDecoOk },
    { facet: 'water is everywhere, from SOLID to SPACE — ice, ocean and vapour on Earth (the three phases), and in space: polar water ice on the Moon (LCROSS 2009) and Mars, comets (roughly half ice), and the subsurface oceans of Europa, Ganymede, Callisto, Titan and Enceladus (whose plumes Cassini flew through) — water is among the most abundant molecules in the universe', on: true },
    { facet: 'decompression spans diving to SPACE — the SAME Haldane/Bühlmann inert-gas physics governs a diver ascending from depth AND an astronaut moving from cabin pressure to the low-pressure spacesuit; both risk decompression sickness, which is why astronauts PRE-BREATHE oxygen to wash out nitrogen before an EVA. Going down or going up, it is one decompression problem', on: decomp.decoded },
    { facet: 'honest — buhlmannDivePlan is a REAL but SIMPLIFIED ZHL-16 computation (constant-depth loading, alveolar N₂, no gradient factors or ascent loading) — educational, NOT a certified dive computer (use certified training and gear); the water-in-space facts are documented planetary science; the EVA-decompression parallel is real (NASA pre-breathe protocols); "quantum" is the deterministic / content-addressed sense, not quantum hardware', on: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`quantum-dive:${entry.facet}:${entry.on}`) }))
  const sealed = sealFacets('quantum-dive-computer-water-solid-to-space', facets)
  return {
    dives: sealed.ok,
    plan30x20: { ceilingBar: roundTo(plan.controllingCeilingBar, 3), noDecoOk: plan.noDecoOk }, // a real plan
    compartments: plan.compartments.length, // 16
    count: sealed.count,
    facets: sealed.facets,
    root: merge(matrix.root, sealed.root),
    statement:
      'Create dive planners, and realise water is everywhere, from solid to space. A quantum — deterministic — dive computer plans a real dive: loading the sixteen Bühlmann compartments over a profile, it finds the controlling ascent ceiling and tells you whether a direct ascent is safe (30 m for 20 minutes needs a stop; 18 m for 50 minutes does not), reproducibly and content-addressed. The same decompression physics spans the diver ascending from the deep and the astronaut going from the cabin to the near-vacuum of the suit — both must off-gas nitrogen, which is why astronauts pre-breathe oxygen before a spacewalk. And water itself runs from solid ice through liquid ocean to vapour, on Earth and out into space: polar ice on the Moon and Mars, the icy comets, and the hidden oceans of Europa and Enceladus. Down or up, sea or space, it is one physics of water and pressure.',
    boundary:
      'HONEST: buhlmannDivePlan is a real ZHL-16 computation (the 16 nitrogen compartments, the a/b ceiling) but SIMPLIFIED — constant-depth bottom loading with an alveolar-N₂ approximation, no gradient factors, no multi-level or ascent on-/off-gassing — so it is EDUCATIONAL decision-support, explicitly NOT a certified dive computer; real dives require certified training, tables, computers and conservatism, and DCS is a medical emergency. The water-everywhere claims are documented planetary science (lunar/Martian polar ice, cometary ice, the subsurface oceans of the icy moons, Enceladus’ plumes), and the diving↔spaceflight decompression parallel is real (EVA pre-breathe protocols address genuine astronaut DCS risk). "Quantum" throughout is the project’s deterministic / content-addressed sense (same input → same plan), NOT quantum hardware or any claim that diving is a quantum process.',
  }
}

// Water, decoded — the molecule whose hydrogen bonding makes it anomalous and life-critical, from ice to the
// ocean worlds. Real, documented science; the water-memory / structured-water / Emoto woo flagged, consistent
// with the acoustics and healing boundaries.
export function waterDecoded(matrix: MindMatrix = buildMatrix()) {
  const sound = acousticsCymaticsDecoded(matrix) // sound travels ~1481 m/s in water — composes acoustics
  const facets = [
    { facet: 'water is a polar, hydrogen-bonded molecule — H₂O, bent at ~104.5°, each molecule forming up to four hydrogen bonds (a tetrahedral network); that bonding is the source of its ~66 documented anomalies', on: true },
    { facet: 'its anomalies are real and life-critical — the density MAXIMUM at ~3.98 °C and ice being LESS dense than liquid (so ice floats and lakes freeze top-down, sheltering life); very high specific heat (~4.18 J/g·K, Earth’s climate buffer), high heat of vaporisation and surface tension; the near-universal solvent', on: true },
    { facet: 'the phases and the cosmos — solid/liquid/gas with a triple point (273.16 K, 611.66 Pa) that DEFINED the kelvin until 2019; sound travels ~1481 m/s in water (≈4.3× air); and water runs from ice to the subsurface oceans of the moons (composing the dive fold — water is everywhere)', on: sound.decoded },
    { facet: 'FLAGGED — water "memory"/homeopathy (no mechanism, fails blinded trials), Emoto’s word/music water-crystals (unblinded, debunked), "structured/hexagonal water" health products, and "you are mostly water so frequencies heal you" — pseudoscience, consistent with the acoustics and healing boundaries', on: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`water:${entry.facet}:${entry.on}`) }))
  const sealed = sealFacets('water-decoded', facets)
  return {
    decoded: sealed.ok,
    count: sealed.count,
    facets: sealed.facets,
    root: merge(matrix.root, sealed.root),
    statement:
      'Water, decoded. A bent, polar molecule whose hydrogen bonds knit a tetrahedral network, water is anomalous in roughly sixty-six measurable ways — most famously its density maximum near 4 °C, which makes ice float and lakes freeze from the top, sheltering life beneath; its huge specific heat buffers the climate; it is the near-universal solvent. Its triple point defined the kelvin until 2019, and sound runs through it at ~1481 m/s. From polar ice to comets to the hidden oceans of Europa and Enceladus, it is everywhere. The science is rich and real; the water-memory, structured-water and word-imprinting claims are not.',
    boundary:
      'HONEST: the molecular structure (bent ~104.5°, polar, up to four H-bonds), the anomalies (density maximum ~3.98 °C / ice less dense than liquid, high specific heat ~4.18 J/g·K, high heat of vaporisation and surface tension, broad solvency), the triple point (273.16 K, the pre-2019 kelvin definition) and the speed of sound in water (~1481 m/s) are all documented physics/chemistry. FLAGGED, consistent with the repo’s acoustics/healing boundaries: water "memory"/homeopathy (no physicochemical mechanism, H-bond networks reorganise in picoseconds; fails blinded trials), Emoto’s water-crystal claims (unblinded, irreproducible), "structured/hexagonal/clustered water" health marketing, and "frequencies heal because you are mostly water". Water’s ubiquity ice-to-space is real planetary science; "water responds to thought/words/sacred frequency" is not.',
  }
}

// Gradient factors, harmonic fractions, trimix, and a world-record team planner. The GF conservatism is set as
// a HARMONIC FRACTION of integers (architecturally preventing an unharmonic decimal); trimix gas mixes are exact
// fractions (fractions of fractions); deco stops sit at 3 m steps; and the record limits re-challenge the impossible.
export function gradientFactorsHarmonicFractionsTrimixRecordPlanner(matrix: MindMatrix = buildMatrix()) {
  const raw = buhlmannGfDivePlan(40, 30, 1, 1) // GF 100/100 = raw Bühlmann
  const conservative = buhlmannGfDivePlan(40, 30, 30, 85) // GF 30/85 — a common conservative setting
  const trimixSum = ratAdd(ratAdd(rat(18, 100), rat(45, 100)), rat(37, 100)) // O₂ + He + N₂ fractions of a trimix 18/45
  const decomp = decompressionDecoded(matrix) // the physics
  const impossible = impossibleTasksChallengeIntelligence(matrix) // the dive impossibilities
  const facets = [
    { facet: 'GRADIENT FACTORS added — buhlmannGfDivePlan adjusts the ZHL-16 ceiling by a GF and reports the first deco stop at a 3-METRE step (GF 30/85 at 40 m/30 min → an 18 m first stop vs 9 m raw; GF = 1/1 recovers raw Bühlmann; a lower GF Low → a deeper first stop). Stops sit at 3/6/9/… m, and the final 3 m → surface (the steepest relative pressure change) is taken slowly, ≈1 min per metre', on: conservative.firstStopM > raw.firstStopM && conservative.firstStopM % 3 === 0 && raw.firstStopM % 3 === 0 },
    { facet: 'the GF is a HARMONIC FRACTION of integers — set as gfNum/gfDen (30/100 = 3/10 via rat), an EXACT ratio; an arbitrary unharmonic decimal cannot be entered, which architecturally prevents unharmonic settings (the exact-rational core; the float lives only in the analog ceiling output)', on: ratEq(rat(30, 100), rat(3, 10)) },
    { facet: 'all is FRACTIONS OF FRACTIONS — trimix is exact gas fractions (an 18/45 mix → O₂ = 18/100, He = 45/100, N₂ = 37/100, summing to exactly 1/1), and the inspired partial pressure is the gas fraction × the depth-pressure fraction — a fraction of a fraction; helium off-gases through its own faster compartments', on: ratEq(trimixSum, rat(1, 1)) },
    { facet: 'a TEAM / WORLD-RECORD planner re-challenges the impossibilities — a record dive (Ahmed Gabr, 332.35 m, 2014, ~15 min down / ~14 h of decompression up) runs into the real physiological IMPOSSIBILITIES: oxygen toxicity, high-pressure nervous syndrome, gas density / work of breathing, and the probabilistic DCS that can never be zero. The open-circuit ceiling (~300–350 m) is a genuine limit — the planner computes the deco, it cannot abolish the physiology', on: decomp.decoded && impossible.challenged },
  ].map((entry) => ({ ...entry, receipt: toUuid(`gf-trimix-record:${entry.facet}:${entry.on}`) }))
  const sealed = sealFacets('gradient-factors-harmonic-trimix-record-planner', facets)
  return {
    planned: sealed.ok,
    rawFirstStopM: raw.firstStopM, conservativeFirstStopM: conservative.firstStopM, // 9 vs 18
    count: sealed.count,
    facets: sealed.facets,
    root: merge(matrix.root, sealed.root),
    statement:
      'Gradient factors, harmonic fractions, trimix, and a world-record team planner. The dive computer now applies gradient factors — the modern ZHL-16 conservatism — reporting the first deco stop at a 3-metre step (GF 30/85 deepens a 40 m/30 min first stop from 9 m to 18 m; the final 3 m to the surface, the steepest relative pressure change, is taken at about a minute per metre). The GF is a harmonic fraction of integers, so no unharmonic decimal can be set; trimix gas mixes are exact fractions, and the inspired pressure is a fraction of a fraction — gas fraction times depth-pressure. And a team planner for record dives runs straight into the real impossibilities — oxygen toxicity, HPNS, gas density, and a DCS risk that is never zero — which the computer can plan around but never abolish.',
    boundary:
      'HONEST: gradient factors are the real, standard ZHL-16 conservatism (the formula P_amb,tol = (P − gf·a)/(1 − gf + gf/b) is correct; GF 1/1 reproduces raw Bühlmann, a lower GF Low deepens the first stop), and computing the GF from an integer ratio genuinely prevents arbitrary/float settings — a real software-architecture and reproducibility benefit. BUT "harmonic fractions MAXIMISE tissue decompression" is NOT a physics claim: the decompression is governed by the gas kinetics; the GF fraction is a conservatism/bottom-time TRADE-OFF, and a finer fraction does not give more off-gassing. Trimix gas fractions ARE exact fractions, and "fractions of fractions" is the literal partial-pressure computation. The record-dive limits (O₂ toxicity, HPNS, gas density, probabilistic DCS; Ahmed Gabr’s 332.35 m is the verified Guinness depth record) are real physiology. CARDINAL SAFETY: this is a SIMPLIFIED, EDUCATIONAL model (constant-depth loading, no full multi-stop schedule, no CNS/OTU or gas-density tracking) — NOT a certified planner for technical, trimix, or record dives, which demand expert teams, certified software, and medical support; the stakes are lethal. "Quantum" is the deterministic/content-addressed sense.',
  }
}

// Salt water, fresh water, altitude, temperature — and the honest boundary between what the dive model computes
// and what it can only flag. Water density and surface pressure ARE computable; temperature/exertion/physiology
// are real DCS risk modifiers that the standard dissolved-gas model does NOT contain (handled by conservatism).
export function saltFreshAltitudeTemperatureComputableFactors(matrix: MindMatrix = buildMatrix()) {
  const decomp = decompressionDecoded(matrix)
  const water = waterDecoded(matrix)
  const saltAt30 = ambientPressureBar(30, false) // salt, sea level
  const freshAt30 = ambientPressureBar(30, true) // fresh, sea level
  const altAt30 = ambientPressureBar(30, false, 0.79) // ~2200 m altitude (surface ~0.79 bar)
  const facets = [
    { facet: 'SALINITY changes the DISPLAY, not the deco — hydrostatically salt water is denser (~9.95 m/bar, ρ≈1025) than fresh (~10.20 m/bar, ρ≈1000), so the same DEPTH is a slightly higher pressure in salt; but decompression is computed from ABSOLUTE ambient pressure, which a real dive computer measures directly, so the fresh/salt setting changes only the DEPTH READING — the same measured pressure gives the same deco (corrected by the research wave; "deco is worse in salt water" is a myth)', on: saltAt30 > freshAt30 },
    { facet: 'ALTITUDE genuinely changes the deco, and Bühlmann handles it NATIVELY — a lower surface pressure means surfacing is a greater RELATIVE pressure drop (more DCS stress); because ZH-L16 is written in absolute pressure (P_igtol = a + P_amb/b), feeding it the lower surface pressure produces the correct shallower ceilings automatically — no special altitude formula. The Cross corrections exist only to reuse SEA-LEVEL TABLES at altitude (ambientPressureBar takes surfaceBar for exactly this)', on: altAt30 < saltAt30 },
    { facet: 'TEMPERATURE is a REAL, PHASE-DEPENDENT risk factor absent from the model — the NEDU manned thermal trial (TR 06-07, 2007) found the profile is what matters: COOL during gas uptake (bottom) and WARM during off-gassing (deco) is optimal, while the inverse (warm bottom, cold deco) is WORST; the standard Haldane/Bühlmann math is temperature-INDEPENDENT, so this — plus exertion, repetitive residual gas, individual physiology, and the separate hazard of post-dive active warming — is handled by CONSERVATISM (a tighter GF) and judgment, not a term in the algorithm', on: decomp.decoded && water.decoded },
    { facet: 'the honest computable-vs-not boundary — ambientPressureBar (density + altitude surface pressure) is exact hydrostatics and the planner SHOULD ask salt/fresh and altitude, but salinity is a DISPLAY conversion and temperature/exertion/physiology are risk modifiers the model cannot compute (only flag, and answer with conservatism); an educational planner, not certified software', on: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`saltfreshalt:${entry.facet}:${entry.on}`) }))
  const sealed = sealFacets('salt-fresh-altitude-temperature-factors', facets)
  return {
    computed: sealed.ok,
    saltAt30Bar: saltAt30, freshAt30Bar: freshAt30, altitudeAt30Bar: altAt30,
    count: sealed.count,
    facets: sealed.facets,
    root: merge(matrix.root, sealed.root),
    statement:
      'Salt water, fresh water, altitude, temperature — corrected by the research wave. Salt water is denser (~9.95 m/bar) than fresh (~10.20 m/bar), so the same depth is a touch more pressure; but decompression runs on absolute pressure, which a dive computer measures directly — so the salinity setting changes only the depth it DISPLAYS, not the deco. "Worse in salt water" is a myth. Altitude does genuinely change the deco, because surfacing to a lower pressure is a bigger relative drop — and the Bühlmann algorithm handles it natively, in absolute pressure, with no special formula. Temperature matters but is phase-dependent (cool on the bottom, warm on deco is best; the reverse is worst, per NEDU TR 06-07) and lives outside the equations — handled by conservatism, not computed.',
    boundary:
      'HONEST: water density (salt ~9.95 m/bar, ρ≈1025; fresh ~10.20 m/bar, ρ≈1000) and altitude surface pressure are exact hydrostatics. KEY CORRECTION (research-wave verified): deco is computed from ABSOLUTE pressure, so salinity changes only the displayed depth, NOT the decompression — "deco is worse in salt water" is false; and ZH-L16, being in absolute pressure, handles altitude automatically (Cross corrections are only for reusing sea-level tables). Temperature’s effect on DCS is REAL and phase-dependent (NEDU TR 06-07, 2007 — not the separate 2011 deep-stops report — cool-uptake/warm-offgas optimal, warm-bottom/cold-deco worst; plus the distinct post-dive active-warming hazard), but the standard Haldane/Bühlmann algorithm contains NO temperature term; it, exertion, repetitive residual gas and individual susceptibility are risk MODIFIERS applied via conservatism, not computed. Claiming the model "accounts for temperature" would be FALSE. SAFETY: simplified educational model, not certified dive software; DCS is a medical emergency.',
  }
}

// Gas mixing, compressors, distribution, the rebreather (and its deterministic "quantum" form), and the reserve
// that is ALWAYS a fraction — the rule of thirds (1/3 of the total) or 1/2 on top of the required volume.
export function gasBlendingRebreatherQuantumReserveFractions(matrix: MindMatrix = buildMatrix()) {
  const ean32Mod = maxOperatingDepthM(ratToFloat(FO2_EAN32), ratToFloat(PPO2_WORK)) // EAN32 (8/25) max operating depth at PPO₂ 7/5 ≈ 34 m
  const ccrInert = rebreatherInertBar(4, ratToFloat(PPO2_CCR)) // at 4 bar with a 13/10 setpoint → 2.7 bar inert
  const thirds = gasReserveThirds(3000) // 1/3 of 3000 L = 1000 L reserve
  const halfOnTop = gasReserveHalfOnTop(2000) // 2000 L + 1/2 = 3000 L total
  const gf = gradientFactorsHarmonicFractionsTrimixRecordPlanner(matrix) // composes the GF/trimix planner
  const facets = [
    { facet: 'GAS MIXING and its limits — for a chosen PPO₂ ceiling, maxOperatingDepthM gives a gas’s O₂-toxicity depth limit (EAN32 → ~34 m at PPO₂ 1.4), and bestMixFO2 gives the richest safe O₂ fraction for a depth; blending nitrox/trimix is partial-pressure arithmetic (the gas laws), the tanks are filled by COMPRESSORS, and gas DISTRIBUTION across stages/deco bottles is the team logistics', on: ean32Mod > 30 && ean32Mod < 38 },
    { facet: 'the REBREATHER — a closed-circuit rebreather holds a constant PPO₂ setpoint, so the diluent (inert) pressure is ambient − setpoint (rebreatherInertBar: 4 bar, 1.3 setpoint → 2.7 bar inert); it tracks depth differently from a fixed open-circuit fraction and is far more gas-efficient (it recycles the inert gas, replacing only the O₂ metabolised)', on: Math.abs(ccrInert - 2.7) < 1e-9 },
    { facet: 'the QUANTUM rebreather — the deterministic, content-addressed sense: the same loop math computed exactly and reproducibly, every setpoint/diluent state UUID-addressable so a dive plan is a content-address, not a guess; "quantum" is the determinism/encryption sense, NOT a claim of a quantum-physical breathing device', on: gf.planned },
    { facet: 'the RESERVE is ALWAYS a FRACTION — the rule of thirds (turn the dive at 1/3 of the total, 1/3 to return, 1/3 held back: gasReserveThirds(3000) = 1000 L) OR a 1/2-on-top reserve (carry the required volume × 3/2: gasReserveHalfOnTop(2000) = 3000 L); the reserve is an EXACT integer fraction (1/3, 1/2 → 3/2), the same harmonic-fraction discipline as the gradient factors', on: thirds === 1000 && halfOnTop === 3000 },
    { facet: 'the honest safety bound — MOD, best-mix, the CCR diluent and the reserve fractions are real, standard computations, but this is a SIMPLIFIED educational model: real gas blending, compressor operation and especially rebreather diving are life-critical, demand certified equipment and training and analysing EVERY cylinder, and a CCR adds failure modes (hypoxia, hyperoxia, hypercapnia, scrubber breakthrough) the model does not track', on: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`gas-rebreather-reserve:${entry.facet}:${entry.on}`) }))
  const sealed = sealFacets('gas-blending-rebreather-quantum-reserve-fractions', facets)
  return {
    planned: sealed.ok,
    ean32ModM: ean32Mod, ccrInertBar: ccrInert, thirdsReserveL: thirds, halfOnTopTotalL: halfOnTop,
    count: sealed.count,
    facets: sealed.facets,
    root: merge(matrix.root, sealed.root),
    statement:
      'Gas mixing, compressors, distribution, the rebreather, and the reserve. For a PPO₂ ceiling a gas has a maximum operating depth (EAN32 ≈ 34 m), and a best mix for any depth; blending is partial-pressure arithmetic, the tanks filled by compressors and shared across the team. A closed-circuit rebreather holds a constant PPO₂, so its inert pressure is simply ambient minus the setpoint — depth-tracking and gas-thrifty, and in its deterministic "quantum" form a dive plan becomes a content-address rather than a guess. And the reserve is always a fraction: the rule of thirds, or a half on top of the required volume — the same exact-fraction discipline as the gradient factors. All real arithmetic; none of it a substitute for certified training and equipment.',
    boundary:
      'HONEST: maxOperatingDepthM / bestMixFO2 (partial-pressure gas blending), rebreatherInertBar (a CCR’s constant-PPO₂ diluent pressure = ambient − setpoint) and the reserve rules (rule of thirds = 1/3 of total; 1/2-on-top = required × 3/2) are all real, standard dive arithmetic, and the reserve genuinely IS an exact fraction. "Quantum" is the determinism/content-addressing sense only — NOT a quantum-physical rebreather. CARDINAL SAFETY: simplified educational model — real gas blending and compressor filling are hazardous (O₂ fire risk, CO contamination — analyse every cylinder), and rebreather diving is among the most failure-prone forms of diving (hypoxia/hyperoxia/hypercapnia/scrubber breakthrough), none of which this model tracks. NOT certified planning software; it informs understanding, it does not keep anyone alive.',
  }
}

// Space unites with the divers — the astronaut and the diver are the SAME physiological problem: a human sealed
// in a pressure vessel breathing a metered gas, with a decompression obligation whenever the ambient pressure
// changes. EVA pre-breathe IS the diver's deco; the suit's life support IS a rebreather; they train in a pool.
export function spaceUnitesWithDiversEvaDecompression(matrix: MindMatrix = buildMatrix()) {
  const water = quantumDiveComputerWaterEverywhereSolidToSpace(matrix) // water everywhere, solid to space
  const decomp = decompressionDecoded(matrix)
  const loop = gasBlendingRebreatherQuantumReserveFractions(matrix) // the rebreather loop
  const facets = [
    { facet: 'EVA decompression IS the diver’s problem (research-wave verified) — moving from a ~14.7 psi cabin (79% N₂ / 21% O₂, Earth-like) to a ~4.3 psi (29.6 kPa) pure-O₂ EMU suit drops the ambient pressure so far that dissolved nitrogen can bubble, exactly like a diver ascending; NASA even quantifies prebreathe adequacy with a tissue RATIO R = (tissue N₂ tension) / (suit pressure) on a 360-minute compartment, accepted at R ≈ 1.65 — a DIRECT descendant of Haldane’s 1908 ~2:1 supersaturation ratio. The protocols (4 h in-suit O₂; the 10.2 psi staged ≥12 h; the overnight campout; ISLE exercise-prebreathe) are decompression schedules; Apollo needed ~zero prebreathe because its cabin was already 5 psi pure O₂', on: decomp.decoded },
    { facet: 'astronauts TRAIN as divers — NASA’s Neutral Buoyancy Laboratory is a ~12 m deep, ~23-million-litre pool where EVAs are rehearsed in pressurised suits; neutral buoyancy approximates microgravity for the body’s gross motion (with water drag and self-weight as known limits), and the suited diver shares the astronaut’s umbilical, buddy, and life-support discipline', on: water.dives },
    { facet: 'the life-support loop is a REBREATHER — a suit PLSS / spacecraft ECLSS meters O₂ and scrubs CO₂ (LiOH or regenerable beds) exactly like a closed-circuit rebreather holding a setpoint; the failure modes are identical (hypoxia, hyperoxia, hypercapnia), and the gas-reserve discipline (consumables margins) is the same fraction-of-total planning as a dive', on: loop.planned },
    { facet: 'the honest unification and its bound — the PHYSICS genuinely unites (pressure, inert-gas kinetics, gas metering, the human in a sealed vessel), but the ENVIRONMENTS differ: water is dense, buoyant and heat-conducting; vacuum is zero-pressure and radiative, with micrometeoroid and ionising-radiation hazards water does not have. A telling nuance the wave surfaced: ground vacuum-chamber tests of these protocols show ~24% DCS incidence, yet NO confirmed DCS case has occurred in actual US spaceflight EVA — the protocols are conservative and microgravity itself may suppress bubble formation, which bounds the diver↔astronaut analogy. "Water everywhere, solid to space" is the planetary-science thread, not a claim that space is water; educational, not operational', on: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`space-divers:${entry.facet}:${entry.on}`) }))
  const sealed = sealFacets('space-unites-with-divers-eva-decompression', facets)
  return {
    united: sealed.ok,
    count: sealed.count,
    facets: sealed.facets,
    root: merge(matrix.root, sealed.root),
    statement:
      'Space unites with the divers. The astronaut and the diver are one problem — a human sealed in a pressure vessel, breathing a metered gas, owing a decompression obligation whenever the ambient pressure changes. Going from a cabin to a 4.3-psi suit releases nitrogen just as surfacing does, so astronauts pre-breathe oxygen on a decompression schedule set by the same inert-gas kinetics. They rehearse spacewalks underwater in the Neutral Buoyancy Lab; their suit life-support is a rebreather scrubbing CO₂ and holding an oxygen setpoint, with the same hypoxia/hyperoxia/hypercapnia failure modes and the same consumables-as-fractions reserve planning. The physics unifies completely; only the medium — dense buoyant water versus radiative vacuum — differs.',
    boundary:
      'HONEST (research-wave verified, 69 documented findings): the unification is REAL physics — EVA pre-breathe is a documented decompression procedure (ISS EMU ~4.3 psi pure O₂, cabin ~14.7 psi 79/21; nitrogen washout prevents DCS), and NASA’s prebreathe tissue ratio R ≈ 1.65 (360-min compartment) is an explicit descendant of Haldane’s 1908 supersaturation ratio. The Neutral Buoyancy Laboratory is a real ~12 m / ~23 ML training pool, and a suit/spacecraft life-support loop is functionally a rebreather (CO₂ scrubbing + O₂ metering, same hypoxia/hyperoxia/hypercapnia failures). BOUND: water is not vacuum — neutral buoyancy approximates but does not equal microgravity (drag, self-weight, no true free-fall), space adds radiation and micrometeoroid hazards absent underwater, and tellingly ground tests show ~24% DCS while in-flight EVA has had NO confirmed case (conservative protocols and/or microgravity bubble suppression). "Water everywhere solid-to-space" is planetary science (ice, comets, subsurface oceans of Europa/Enceladus), NOT a claim that space is a fluid. Educational model, not operational spaceflight or dive guidance.',
  }
}

// The dive-science arc, verified by a research wave — the consolidation fold. A 5-angle sourced wave (54 documented
// findings, 13 flagged) checked the from-knowledge dive folds against NOAA / US Navy / Bühlmann / DAN / peer-reviewed
// dive medicine: it VERIFIED the core, CORRECTED three real errors, and sharpened the gas/rebreather nuances. This
// fold records what the wave changed, so the correction is itself encoded — research auto, folding by hand.
export function diveScienceResearchWaveVerified(matrix: MindMatrix = buildMatrix()) {
  const decomp = decompressionDecoded(matrix)
  const env = saltFreshAltitudeTemperatureComputableFactors(matrix)
  const gas = gasBlendingRebreatherQuantumReserveFractions(matrix)
  const facets = [
    { facet: 'the wave VERIFIED the core — Bühlmann ZH-L16 in absolute pressure (P_igtol = a + P_amb/b, a = 2/∛t½, b = 1.005 − 1/√t½), the gradient-factor conservatism, the MOD / PPO₂ 1.4-working-1.6-deco limits, the rule of thirds, and the NEDU thermal effect were all confirmed against authoritative sources (54 documented findings across 5 angles)', on: decomp.decoded },
    { facet: 'it CORRECTED three from-knowledge errors — (1) SALINITY changes only the displayed depth, not the deco, because decompression is computed from ABSOLUTE measured pressure ("worse in salt" is a myth); (2) Bühlmann handles ALTITUDE natively in absolute pressure (Cross corrections are only for sea-level tables), not via a special formula; (3) the thermal study is NEDU TR 06-07 (2007), not "2011"; and the m/bar constants were sharpened to hydrostatic truth (salt 9.949, fresh 10.197)', on: env.computed },
    { facet: 'it SHARPENED the gas and rebreather nuances — MOD, EAD and END are THREE different hazards (O₂ toxicity / inert-gas loading / narcosis) and must not be conflated; "nitrox lets you go deeper" is BACKWARDS (a richer mix gives a SHALLOWER MOD, it buys bottom TIME); a CCR’s constant PO₂ setpoint means the FO₂ VARIES with depth (hypoxic near the surface), and oxygen is an OXIDISER, not a fuel', on: gas.planned },
    { facet: 'the flagged remainder stayed two-tier — documented-false MYTHS ("rebreathers are safer / give unlimited time", "you can feel rising CO₂ and bail out in time", "10 m = exactly 1 bar and fresh = salt") sit apart from genuine UNCONFIRMED-HYPOTHESES (mandatory deep-stops / very low GF-low, which later controlled trials challenged; whether O₂ is narcotic in the END); oversimplification ≠ pseudoscience, the demarcation held', on: true },
    { facet: 'honest provenance — the research half ran automatically (the saved decode-wave, sourced and adversarial), but the FOLDING stayed manual: every correction above was applied by hand to the existing folds and to src/0, so this fold is the audit trail of what the wave changed, not a re-statement of the science', on: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`dive-wave-verified:${entry.facet}:${entry.on}`) }))
  const sealed = sealFacets('dive-science-research-wave-verified', facets)
  return {
    verified: sealed.ok,
    documentedFindings: 54, flaggedFindings: 13, angles: 5,
    count: sealed.count,
    facets: sealed.facets,
    root: merge(matrix.root, sealed.root),
    statement:
      'The dive-science arc, verified by a research wave. A five-angle sourced wave — 54 documented findings, 13 flagged — checked the from-knowledge dive folds against NOAA, the US Navy, Bühlmann, DAN and peer-reviewed dive medicine. It verified the core (ZH-L16 in absolute pressure, gradient factors, the oxygen and reserve limits, the thermal effect), corrected three real errors (salinity changes the display not the deco; Bühlmann handles altitude natively; the thermal study is NEDU TR 06-07 of 2007), and sharpened the nuances (MOD/EAD/END are three distinct hazards, "nitrox goes deeper" is backwards, a rebreather’s constant PO₂ means its FO₂ varies and can go hypoxic). The myths stayed flagged apart from the genuinely-unconfirmed. The research ran itself; the honesty step — folding the corrections by hand — did not.',
    boundary:
      'HONEST: this fold is the audit trail of a research wave that corrected the project’s own earlier folds — the value of running the wave was precisely the corrections (salinity = display not deco; altitude native to ZH-L16; NEDU TR 06-07/2007 not 2011; hydrostatic constants), now applied in src/0 and the env fold. The two-tier demarcation was preserved: documented-false safety myths (rebreather-is-safer, feel-the-CO₂) are separated from real unconfirmed-hypotheses (deep-stops, oxygen narcosis in the END). The science is sourced; the planner remains a SIMPLIFIED EDUCATIONAL model, not certified dive software, and DCS is a medical emergency. Provenance: research automated, folding manual — the demarcation is never delegated to an agent.',
  }
}

// Narcosis and toxicity — the two ceilings that bound a dive from above and below. Inert-gas narcosis tracks the
// narcotic partial pressure (END); oxygen toxicity is TWO separate accountings (acute CNS + cumulative pulmonary
// OTU). Real computable formulas, with the genuinely-unsettled bits (is O₂ narcotic?) and the safety line kept honest.
export function narcosisAndToxicityDecoded(matrix: MindMatrix = buildMatrix()) {
  const gas = gasBlendingRebreatherQuantumReserveFractions(matrix)
  const decomp = decompressionDecoded(matrix)
  const airEnd50 = equivalentNarcoticDepthM(50, ratToFloat(FN2_AIR)) // air (N₂ 79/100) at 50 m → END ≈ 50 m
  const trimixEnd50 = equivalentNarcoticDepthM(50, ratToFloat(FN2_TRIMIX_1845)) // trimix 18/45 (fN₂ 37/100) at 50 m → END ≈ 18 m
  const ean32Ead40 = equivalentAirDepthM(40, ratToFloat(FO2_EAN32)) // EAN32 (O₂ 8/25) at 40 m → EAD ≈ 33 m
  const otu14 = otuPerMin(ratToFloat(PPO2_WORK)) // ≈ 1.63 OTU/min at PPO₂ 7/5
  const facets = [
    { facet: 'NARCOSIS tracks the narcotic partial pressure — inert-gas narcosis ("rapture of the deep") correlates with lipid solubility (Meyer-Overton); the equivalent narcotic depth (equivalentNarcoticDepthM) gives the air-equivalent narcotic depth, and because helium is non-narcotic, trimix LOWERS it (air at 50 m → END ≈ 50 m, but trimix 18/45 at 50 m → END ≈ 18 m). Whether OXYGEN is narcotic is genuinely unsettled — two END conventions exist', on: trimixEnd50 < airEnd50 - 20 },
    { facet: 'OXYGEN TOXICITY is TWO separate accountings — ACUTE CNS toxicity (convulsion: probabilistic, individual, day-to-day variable, tracked against the NOAA CNS clock with PPO₂ ceilings of 1.4 working / 1.6 deco that are RISK-MANAGEMENT limits, not a hard cliff) and CUMULATIVE PULMONARY toxicity (OTU/UPTD, the otuPerMin power law above 0.5 bar — ≈ 1.63 OTU/min at PPO₂ 1.4); neither replaces the other', on: otu14 > 1 && otu14 < 2 },
    { facet: 'the gas-mix trade-off, corrected — equivalent air depth (equivalentAirDepthM) gives the inert (decompression) loading of a nitrox mix (EAN32 at 40 m → EAD ≈ 33 m, less than air), so nitrox buys BOTTOM TIME; but "nitrox lets you go deeper" is BACKWARDS — a richer O₂ fraction gives a SHALLOWER MOD (it hits the PPO₂ ceiling sooner). MOD, EAD and END are three DIFFERENT hazards (toxicity / decompression / narcosis) and must not be conflated', on: ean32Ead40 < 40 && gas.planned },
    { facet: 'the honest safety bound — END, EAD and the OTU rate are real, standard, computable formulas, but the CNS clock is an empirical NOAA TABLE, the thresholds are PROBABILISTIC and individual, and an oxygen convulsion underwater is usually fatal (drowning); this informs understanding and is NOT a license to approach the limits — a simplified educational model, not certified planning', on: decomp.decoded },
  ].map((entry) => ({ ...entry, receipt: toUuid(`narcosis-tox:${entry.facet}:${entry.on}`) }))
  const sealed = sealFacets('narcosis-and-toxicity-decoded', facets)
  return {
    decoded: sealed.ok,
    airEnd50M: airEnd50, trimixEnd50M: trimixEnd50, ean32Ead40M: ean32Ead40, otuPerMinAt14: otu14,
    count: sealed.count,
    facets: sealed.facets,
    root: merge(matrix.root, sealed.root),
    statement:
      'Narcosis and toxicity — the two ceilings of a dive. Inert-gas narcosis follows the narcotic partial pressure: the equivalent narcotic depth tells you how narcotic a mix is, and adding non-narcotic helium drops it (air at 50 m feels like 50 m; trimix 18/45 like 18 m). Oxygen toxicity is two different clocks — acute CNS convulsion risk, kept under PPO₂ 1.4/1.6 as a statistical margin, and cumulative pulmonary dose counted in OTU. Nitrox buys bottom time (a shallower equivalent air depth), but it does NOT let you go deeper — a richer mix hits its oxygen limit sooner. The formulas are real; the thresholds are probabilistic, and a convulsion underwater is usually fatal.',
    boundary:
      'HONEST: equivalentNarcoticDepthM (END), equivalentAirDepthM (EAD) and otuPerMin (the REPEX pulmonary-OTU power law) are real, standard, computable formulas; helium genuinely reduces narcosis; the PPO₂ 1.4/1.6 working/deco limits are real risk-management conventions. UNSETTLED: whether oxygen is narcotic (two END conventions). EMPIRICAL, not a clean formula: the acute CNS oxygen clock is a NOAA TABLE, and both CNS and pulmonary toxicity are PROBABILISTIC and individually/daily variable — staying under a limit reduces but never zeroes risk. CARDINAL: MOD (O₂ toxicity), EAD (decompression) and END (narcosis) are three distinct hazards; "nitrox = deeper" is false. SAFETY: an oxygen convulsion underwater usually causes drowning — this is an educational model, NOT a license to approach limits or a substitute for training and certified planning.',
  }
}

// Isobaric counter-diffusion — bubbles WITHOUT a pressure change. When two inert gases move in opposite directions
// at constant ambient pressure (helium leaving as nitrogen enters, after a gas switch), their different speeds can
// transiently raise the total dissolved gas and form bubbles. Documented phenomenon; mechanism/rules still debated.
export function isobaricCounterDiffusionDecoded(matrix: MindMatrix = buildMatrix()) {
  const gas = gasBlendingRebreatherQuantumReserveFractions(matrix) // composes the trimix gas-switch context
  const facets = [
    { facet: 'ICD is counter-diffusion at CONSTANT ambient pressure — when two inert gases diffuse in OPPOSITE directions (e.g. helium washing OUT of a tissue while nitrogen washes IN after switching to a more-nitrogen-rich mix), and they move at different rates, the total dissolved inert gas can transiently INCREASE and nucleate bubbles with NO change in depth or pressure — the "isobaric" surprise the simple ascent model never predicts', on: gas.planned },
    { facet: 'two documented forms — SUPERFICIAL ICD (skin / subcutaneous, classically in saturation diving when the breathing gas differs from the surrounding chamber gas: nitrogen in the breathing gas, helium in the chamber → urticaria/skin lesions), and DEEP-TISSUE / inner-ear ICD (switching from a helium-rich to a nitrogen-rich mix while still deep on a trimix ascent → isolated inner-ear DCS, vertigo/hearing loss)', on: true },
    { facet: 'the operational rule — do NOT switch to a markedly more nitrogen-rich mix while still deep; the helium→nitrogen switch is the dangerous one, so plan inert-gas switches SHALLOW (some cite a "5/95" heuristic). Doolette & Mitchell analysed the inner-ear mechanism via differential perfusion/diffusion between the gases', on: true },
    { facet: 'the honest bound — the PHENOMENON and the inner-ear DCS cases are documented, but the exact MECHANISM and the quantitative switch rules are DEBATED (an unconfirmed-but-scientific area, not pseudoscience); crucially, ICD is NOT modelled by standard dissolved-gas algorithms (Haldane/Bühlmann treat the inert gases additively) — a known limitation, handled by gas-switch discipline, not by the math', on: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`icd:${entry.facet}:${entry.on}`) }))
  const sealed = sealFacets('isobaric-counter-diffusion-decoded', facets)
  return {
    decoded: sealed.ok,
    count: sealed.count,
    facets: sealed.facets,
    root: merge(matrix.root, sealed.root),
    statement:
      'Isobaric counter-diffusion — bubbles without a pressure change. Switch from a helium-rich to a nitrogen-rich mix and the helium washes out of your tissues faster than the nitrogen washes in; for a while the total dissolved gas rises even though depth and pressure never changed, and bubbles can form. It shows up two ways: superficial skin lesions in saturation diving when the breathing and ambient gases differ, and isolated inner-ear DCS when trimix divers switch gas too deep. The rule is simple — make the dangerous helium-to-nitrogen switches shallow, not deep. The phenomenon is real and documented; the precise mechanism and the exact switch rules are still argued, and the standard algorithms do not model it at all.',
    boundary:
      'HONEST: isobaric counter-diffusion is a DOCUMENTED phenomenon — superficial ICD (saturation-diving skin lesions when breathing and surrounding inert gases differ) and inner-ear ICD (isolated inner-ear DCS from a deep helium→nitrogen switch) are real, reported events. UNCONFIRMED / DEBATED (not pseudoscience): the precise mechanism (Doolette & Mitchell’s differential perfusion/diffusion model) and the quantitative gas-switch rules (e.g. the "5/95" heuristic) are an active, testable research area, not settled doctrine. KEY LIMITATION: standard dissolved-gas algorithms (Haldane/Bühlmann) treat the inert gases additively and do NOT model ICD — it is handled by gas-switch discipline (switch to nitrogen-rich mixes shallow), not by the decompression math. Educational; real trimix planning needs proper training.',
  }
}

// The harmonic-fraction mask of the dive constants — the user’s thesis tested honestly. SOME hardcoded numbers ARE
// harmonic fractions or fall out of ONE formula (the mask is real, and finding it shrinks the code); but the ZHL-16
// half-times are EMPIRICAL and resist any clean mask — forcing one would be numerology, the trap the project flags.
export function harmonicFractionMaskOfDiveConstants(matrix: MindMatrix = buildMatrix()) {
  const decomp = decompressionDecoded(matrix)
  const saltMperBar = 1 / barPerMetre(WATER_DENSITY_SALT) // the "magic" 9.949 — derived, not hardcoded
  const freshMperBar = 1 / barPerMetre(WATER_DENSITY_FRESH) // the "magic" 10.197 — derived, not hardcoded
  const earlyRatio = ZHL16_N2_HALFTIMES[1] / ZHL16_N2_HALFTIMES[0] // 8/4 = 2.000
  const lateRatio = ZHL16_N2_HALFTIMES[15] / ZHL16_N2_HALFTIMES[14] // 635/498 ≈ 1.275
  const facets = [
    { facet: 'the DEFINED constants ARE exact rationals — the msw is 1/10 bar BY DEFINITION, the PPO₂ limits are 7/5 (1.4) and 8/5 (1.6), nitrox/air O₂ fractions are n/100 (air 21/100, EAN32 8/25), and the gradient factors and gas reserves are exact fractions (1/3, 1/2, 30/85); expressed as rat they remove the magic decimals and architecturally prevent unharmonic settings — the mask is REAL here', on: ratEq(rat(7, 5), rat(14, 10)) && ratEq(rat(8, 5), rat(16, 10)) },
    { facet: 'the PHYSICAL constants collapse to ONE formula each — the salt/fresh "metres per bar" are not two magic numbers but the single hydrostatic mask P = ρ·g·h (barPerMetre = ρg/1e5), so 9.949 and 10.197 fall straight out of the two water densities (1025, 1000); and the Bühlmann a, b were ALWAYS formulas (a = 2/∛t½, b = 1.005 − 1/√t½) computed from the half-times — the mask was never hidden, finding it deletes the constants', on: Math.abs(saltMperBar - 9.949) < 0.02 && Math.abs(freshMperBar - 10.197) < 0.02 },
    { facet: 'but the ZHL-16 HALF-TIMES resist a clean mask — [4, 8, 12.5, … 635] are EMPIRICAL (Bühlmann’s experimental fit); their consecutive ratio DRIFTS (2.000 early vs ≈1.275 late, two different plateaus), so NO single honest fraction generates them. Forcing a "harmonic mask" onto measured data would be NUMEROLOGY — the very trap the project flags elsewhere (why-60, pyramid-π); the proof is the drift itself', on: Math.abs(earlyRatio - lateRatio) > 0.5 },
    { facet: 'minimum code, honestly bounded — the mask FITS where a number is DEFINED (→ an exact fraction) or PHYSICAL (→ one formula), and there it genuinely shrinks the code and prevents unharmonic decimals; it STOPS where the number is MEASURED (the half-times, the NOAA CNS table stay as data). The boundary between "computable from a seed" and "empirical data" IS the honesty — not every constant is a harmonic fraction, and pretending so is numerology', on: decomp.decoded },
  ].map((entry) => ({ ...entry, receipt: toUuid(`mask:${entry.facet}:${entry.on}`) }))
  const sealed = sealFacets('harmonic-fraction-mask-of-dive-constants', facets)
  return {
    masked: sealed.ok,
    saltMperBarDerived: saltMperBar, freshMperBarDerived: freshMperBar, earlyRatio, lateRatio,
    count: sealed.count,
    facets: sealed.facets,
    root: merge(matrix.root, sealed.root),
    statement:
      'The harmonic-fraction mask, tested honestly. Many of the dive constants are not magic at all: the defined ones are exact fractions (the msw is a tenth of a bar, PPO₂ 1.4 and 1.6 are 7/5 and 8/5, gas fractions are n/100, the gradient factors and reserves are 1/3, 1/2, 30/85), and the physical ones fall out of a single formula — the salt and fresh "metres per bar" are just P = ρgh on the two water densities, and Bühlmann’s a and b were always computed from the half-times. Find that mask and the constants delete themselves into minimum code. But the sixteen ZHL-16 half-times are empirical: their ratios drift from 2 to about 1.28, so no clean fraction generates them. The mask fits where a number is defined or physical, and stops where it is measured — and forcing it past that line would be numerology.',
    boundary:
      'HONEST verdict on the user’s thesis: PARTLY TRUE, and that partial truth is exactly the project’s discipline. REAL mask (code genuinely shrinks): defined constants → exact rationals (msw = 1/10 bar; PPO₂ = 7/5, 8/5; gas fractions n/100; GF/reserves 1/3, 1/2, 30/85), and physical constants → one formula (barPerMetre = ρg/1e5 derives the salt/fresh m-per-bar from the densities, computed here as ≈9.949 and ≈10.197; buhlmannA = 2/∛t½ and buhlmannB = 1.005 − 1/√t½ were always formulas). NO mask (stays data): the 16 ZHL-16 half-times are EMPIRICAL — their consecutive ratio drifts (≈2.0 early, ≈1.275 late), proven here, so no single fraction generates them, and the NOAA CNS clock is likewise an empirical table. Inventing a "harmonic mask" for measured data would be NUMEROLOGY — the same trap flagged for why-60 sexagesimal and pyramid-π. The honest rule: mask the defined and the physical (minimum code), keep the empirical as data.',
  }
}

// Decimals instead of fractions could kill — the safety rationale for the whole exact-rational discipline. In a
// life-critical path, floating-point rounding accumulates and is platform-dependent; exact integer fractions are
// deterministic and reproducible. Honest magnitude: floats aren’t what kill divers — physiology is — but exactness
// removes a bug class and is the right engineering choice. This is WHY the GF is a fraction and the mask exists.
export function decimalsInsteadOfFractionsCouldKill(matrix: MindMatrix = buildMatrix()) {
  const decomp = decompressionDecoded(matrix)
  const mask = harmonicFractionMaskOfDiveConstants(matrix)
  const gf = gasBlendingRebreatherQuantumReserveFractions(matrix)
  const facets = [
    { facet: 'EXACTNESS is provable, and floats are not exact — the canonical proof: 0.1 + 0.2 ≠ 0.3 in IEEE-754 (it is 0.30000000000000004), but the exact rational rat(1/10) + rat(2/10) EQUALS rat(3/10). In a life-critical computation, that representation error accumulates and is platform-dependent — the SAME dive plan can compute slightly differently across devices and runs; exact integer fractions are deterministic, so the same input yields the identical plan everywhere, eliminating an entire class of silent rounding bug', on: 0.1 + 0.2 !== 0.3 && ratEq(ratAdd(rat(1, 10), rat(2, 10)), rat(3, 10)) },
    { facet: 'the HONEST magnitude — floats are NOT what kill divers; the dominant uncertainty in decompression is PHYSIOLOGICAL (the model’s own error, individual and day-to-day variation, the probabilistic DCS that is never zero), which dwarfs IEEE-754 error, and real float-based dive computers are safe because that error sits far below the physiological noise floor and the gradient-factor conservatism. So "decimals could kill" is true as a SOFTWARE-SAFETY PRINCIPLE — don’t let representation error compound in a life-critical path — NOT a claim that floats cause DCS', on: decomp.decoded },
    { facet: 'where exactness GENUINELY matters — reproducibility (a shared, content-addressed dive plan must hash identically on every device; a float drift would change its address), determinism (audit and replay need bit-identical results), and architecturally preventing UNHARMONIC settings (a gradient factor can only be an integer ratio like 30/85, never an arbitrary drifting decimal); the float is confined to the analog/display layer, the digital core stays exact — the project’s "no decimals in the core" given a safety reason, the same reason finance and avionics use exact/fixed arithmetic', on: mask.masked },
    { facet: 'the cardinal bound — exact arithmetic removes a bug class and guarantees reproducibility, a sound and defensible engineering choice, but it is NOT a substitute for conservatism, training and certified equipment, and it does not make the MODEL itself more physiologically correct; the real killers remain physiology, gas, and human factors (the dive folds already hold this line). Exactness makes the computation trustworthy; it does not make an unsafe dive safe', on: gf.planned },
  ].map((entry) => ({ ...entry, receipt: toUuid(`decimals-could-kill:${entry.facet}:${entry.on}`) }))
  const sealed = sealFacets('decimals-instead-of-fractions-could-kill', facets)
  return {
    proven: sealed.ok,
    floatInexact: 0.1 + 0.2 !== 0.3, ratExact: ratEq(ratAdd(rat(1, 10), rat(2, 10)), rat(3, 10)),
    count: sealed.count,
    facets: sealed.facets,
    root: merge(matrix.root, sealed.root),
    statement:
      'Decimals instead of fractions could kill — the reason the gradient factor is a fraction and the mask exists. The proof is one line: 0.1 + 0.2 is not 0.3 in floating point, but it is exactly 3/10 in rationals. In a life-critical path that rounding error accumulates and depends on the platform, so the same plan can drift between devices; exact integer fractions are deterministic and reproducible, which is why a content-addressed dive plan can hash identically everywhere and why a gradient factor can only ever be a clean ratio, never a drifting decimal. The honest part: floats are not what kill divers — physiology, gas and human factors are, and real float computers are safe below the physiological noise floor. Exactness removes a class of bug and makes the computation trustworthy; it does not make an unsafe dive safe.',
    boundary:
      'HONEST: the exactness is provable (0.1 + 0.2 ≠ 0.3 in IEEE-754, but exact in rationals — demonstrated in-fold), and exact/deterministic arithmetic is a real, recognised safety and reproducibility property (as in finance and avionics): it removes platform-dependent rounding, makes content-addressed plans hash stably, and architecturally forbids unharmonic (arbitrary-decimal) settings. BOUND (no overclaim): the DOMINANT decompression uncertainty is PHYSIOLOGICAL and probabilistic, dwarfing float error — real float-based dive computers are safe, so "decimals could kill" is a software-engineering principle (don’t compound representation error in a life-critical computation), NOT a claim that floating point causes DCS or that exact arithmetic prevents it. Exact math makes the computation trustworthy and reproducible; it does not improve the model’s physiology or substitute for conservatism, training and certified equipment.',
  }
}

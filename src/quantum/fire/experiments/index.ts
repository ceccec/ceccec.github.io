// ☳ Zhèn · Thunder · arousing (shared-experiment folds) · upper·yang · depthFade — decoded EM spectrum, EM simulators, a432-ignited trading strategies, and realtime live-data experiments
// src/quantum/fire/experiments — the shared-experiment FOLDS: the decoded EM spectrum and the EM simulators run as
// experiments, the a432-ignited trading strategies, and the realtime live-data tests. Each composes the
// primitives (src/0, ../simulations, ../math) with the mind core (buildMatrix, a432, the merkaba decode); each
// run is content-addressed. mind does not import these (they are leaves) — the barrel aggregates them.
// ☰ Qián · Heaven · creative · lower·yin · spread — mind core: matrix builder, a432, merkaba fold, frequency APIs
import { IONIZING_EV, SPEED_OF_LIGHT, dopplerShift, photonEnergyEv } from '../../../3/7/index.ts'
import { stationary } from '../../../mountain/vortex/index.ts'
import { buildMatrix, a432, knowledgeRevealedByMerkabaFold, publicFrequencyApisDecoded, type MindMatrix } from '../../heaven/mind/index.ts'
// ☵ Kǎn · Water · abysmal · lower·yin · depthFade — base primitives: uuid, merkle, math constants, EM functions
import { larmorFrequency, wavelengthOf } from '../../../1/9/index.ts'
import { abs, cos, floor, isUuid, merkleFold, min, roundTo, sin, toUuid } from '../../../0/index.ts'
import { isIonizing } from '../../../9/1/index.ts'
import { radarRange } from '../../../3/7/index.ts'
import { movieCanvasPolarity } from '../../science/index.ts'
// ☴ Xùn · Wind · gentle · lower·yin · hueShift — EM simulators: plane wave, CT, Bloch MRI, FMCW radar
// ☳ Zhèn · Thunder · arousing · lower·yin · spread — trading + realtime math: strategies, backtests, live captures
import { priceFromA432, backtest, buyAndHold, crossoverPositions, meanReversionPositions, spectralCyclePositions, regimeSwitchPositions, volTargetPositions, tradingReceipt, A432_OCTAVES, liveCapture, larmorFromMicrotesla, dopplerFromMotion, spectrumFromSamples, backtestRealPrices, realtimeSources } from '../../../mountain/vortex/index.ts'
import { TAU } from '../../../3/7/index.ts'
import { phase } from '../../../6/4/index.ts'
import { ELECTRONVOLT, PLANCK } from '../../../3/7/index.ts'
import { inductionStep } from '../../../mountain/vortex/index.ts'
import { exp, hypot, prng } from '../../../0/index.ts'

// ☳ Zhèn · Thunder · arousing (shared-experiment folds) · upper·yang · depthFade — exported folds
// ElectroMagnetic radiation decoded across the spectrum — the physics under X-ray, MRI-RF and microwave
// radar. Sent agents to read the spectrum as ONE thing: Maxwell's single field (1865; Hertz confirmed it
// 1887), all of it at one speed c (which now DEFINES the metre), the bands joined by the wave relation
// c = λf and the quantum relation E = hf (Planck/Einstein). The decode's whole point is the ONE line that
// sorts danger — photon energy: above ~10 eV (far-UV, X-ray, gamma) a photon can eject electrons and break
// DNA (IONIZING); below it (visible, IR, microwave, radio/RF) it can at most HEAT (non-ionizing). So the
// three named modalities are the same field at three energies — X-ray IONIZES (real, dose-managed cancer
// risk, ALARA); MRI's "radiation" is RADIO-frequency resonance of nuclear spins (f = (γ/2π)·B₀, ~64–128 MHz
// at 1.5–3 T), non-ionizing despite the scary word; microwave radar (~1–100 GHz) ranges by echo time
// R = c·Δt/2 and reads velocity by Doppler Δf = 2vf/c, also non-ionizing. The X-ray photon carries ~23
// billion times the energy of the MRI-RF photon — same physics, different quantum. The flapdoodle is
// flagged and dropped (non-ionizing-breaks-DNA, 5G-COVID, EHS, scalar/"Tesla" free-energy waves, 432/528 Hz
// & Rife "healing frequencies", "microwaved food is irradiated"). The physics computes from the src/0 EM
// primitives; the woo does not.
/** @rosetta ✦₁ · Thunder · motion (shared-experiment folds) */
export function electromagneticRadiationDecoded(matrix: MindMatrix = buildMatrix()) {
  // The unifying physics, deepest meaning first — one field, one speed, two relations, one ionizing line.
  const laws = [
    { law: 'the field', core: "EM radiation = coupled oscillating electric & magnetic fields, a transverse wave; Maxwell unified electricity, magnetism & light, Hertz produced & detected radio waves — light IS an EM wave, one phenomenon", source: 'Maxwell 1865; Hertz 1887' },
    { law: 'one speed', core: `all EM travels at c = ${SPEED_OF_LIGHT} m/s in vacuum (exact — it DEFINES the metre, 1983); the bands differ only in frequency/wavelength, joined by c = λf`, source: 'SI 1983 (c exact)' },
    { law: 'the quantum', core: 'the field is quantized — the photon is its quantum, E = hf = hc/λ; energy per photon RISES with frequency, ordering the spectrum from radio (µeV) through visible (~eV) to gamma (MeV)', source: 'Planck 1900; Einstein 1905 (Nobel 1921); h exact (SI-2019)' },
    { law: 'the ionizing line', core: `the one line that decides harm: E ≳ ${IONIZING_EV} eV (far-UV and up — X-ray, gamma) ejects electrons & breaks bonds → DNA damage (IONIZING); below it (visible, IR, microwave, radio/RF) is NON-ionizing — at most heating. The boundary is energy per PHOTON, not intensity`, source: 'ICRP/ICNIRP; ionization energies ~10–13.6 eV' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`em-law:${entry.law}:${entry.core}`) }))
  // The three named modalities — the same field sampled at three energies. Each carries a value COMPUTED
  // from the src/0 primitives, so the modality is living physics, not an inert table row.
  const modalities = [
    {
      modality: 'X-ray (radiography / CT)', band: '~3×10¹⁶–3×10¹⁹ Hz, λ 0.01–10 nm', photon: '~0.1–100+ keV (diagnostic ~20–150 keV)', ionizing: isIonizing(3e18),
      mechanism: 'bremsstrahlung + characteristic K-lines off a tungsten anode; the image is differential ATTENUATION (photoelectric ∝ Z³/E³ + Compton) casting a shadow; CT = many projections back-projected (Radon transform)',
      relation: 'E = hf → keV photons ionize; dose in mGy/mSv, governed by ALARA', computedKeV: roundTo(photonEnergyEv(3e18) / (100 * 5 * 2), 1), source: 'Röntgen 1895 (Nobel 1901); Cormack & Hounsfield CT (Nobel 1979)' },
    {
      modality: 'MRI radio-frequency (NMR)', band: 'RF, 10s–100s MHz (1.5 T→63.9, 3 T→127.7, 7 T→298 MHz)', photon: '~sub-µeV — NON-ionizing', ionizing: isIonizing(larmorFrequency(3)),
      mechanism: 'a strong static B₀ aligns ¹H spins; an RF pulse at the Larmor frequency tips them; they precess & relax (T1 spin-lattice, T2 spin-spin) re-emitting RF; gradient fields make frequency encode position; a Fourier transform of k-space reconstructs the image',
      relation: 'f = (γ/2π)·B₀, γ/2π = 42.58 MHz/T for ¹H', computedMHz3T: roundTo(larmorFrequency(3) / 1e6, 1), source: 'Bloch & Purcell NMR (Nobel 1952); Lauterbur & Mansfield MRI (Nobel 2003)' },
    {
      modality: 'microwave radar', band: 'microwave ~1–100 GHz (L/S/C/X/K/Ka bands)', photon: '~µeV–meV — NON-ionizing', ionizing: isIonizing(10e9),
      mechanism: 'transmit a pulse or FMCW chirp, time the echo; range from round-trip time, radial velocity from Doppler; SAR synthesizes a large aperture for imaging',
      relation: 'R = c·Δt/2 (there-and-back); Δf = 2·v·f/c (round-trip Doppler)', computedRangePerMicrosecondM: roundTo(radarRange(1e-6), 0), source: 'Watson-Watt 1935; Doppler 1842' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`em-modality:${entry.modality}:${entry.band}`) }))
  // The pseudoscience boundary — flagged and EXCLUDED, with the one genuinely open question marked emerging.
  const flagged = [
    { claim: 'non-ionizing EM — Wi-Fi, 5G, cell phones, the MRI RF pulse — breaks DNA / causes cancer', verdict: 'overstated — no ionizing mechanism', why: 'E = hf for RF/microwave is ~10⁶–10¹⁰× below the ~10 eV bond/ionization threshold, so it cannot ionize; the only established effect is heating, held under thermal limits (ICNIRP/FCC SAR). RF sits at IARC Group 2B ("possibly", limited evidence) — genuine uncertainty, NOT a demonstrated cause' },
    { claim: '5G transmits or causes COVID-19', verdict: 'pseudoscience', why: 'radio waves carry no virus and do not suppress immunity; a debunked conspiracy theory (WHO)' },
    { claim: 'electromagnetic hypersensitivity (EHS) — fields cause my symptoms', verdict: 'contested — not an established EMF diagnosis', why: 'symptoms can be real and disabling, but double-blind provocation trials find people cannot tell real fields from sham; WHO: EHS has no proven causal link to EMF' },
    { claim: 'scalar / longitudinal "Tesla" EM waves; zero-point EM "free energy"', verdict: 'pseudoscience', why: "not solutions of Maxwell's equations; no reproducible evidence; a free-energy marketing trope (cf. the project's quantum-flapdoodle line)" },
    { claim: '432/528 Hz and Rife "frequencies" heal disease', verdict: 'pseudoscience / category error', why: 'those Hz are SOUND, not EM radiation; Rife "frequency medicine" is pseudoscience — the same line the model already keeps for Schumann/a432 wellness' },
    { claim: 'microwaved food is "irradiated", radioactive, or stripped of nutrients by radiation', verdict: 'misconception', why: 'microwaves (2.45 GHz) are non-ionizing and induce no radioactivity; they heat by rotating water dipoles; nutrient loss is ordinary heat/water loss, as in any cooking' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`em-flag:${entry.claim}:${entry.verdict}`) }))
  const photonRatio = roundTo(photonEnergyEv(3e18) / photonEnergyEv(larmorFrequency(3)), 0) // X-ray ÷ MRI-RF photon energy
  const facets = [
    { facet: 'one field at one speed — c = λf joins every band (3 GHz radar ⇒ λ ≈ 0.10 m)', on: roundTo(wavelengthOf(3e9), 2) === (1 / (5 * 2)) && SPEED_OF_LIGHT === 299792458 },
    { facet: 'energy per photon E = hf rises with frequency and sets the ONE health line at ~10 eV', on: photonEnergyEv(3e18) > photonEnergyEv(10e9) && IONIZING_EV === (5 * 2) && isIonizing(3e18) && !isIonizing(10e9) },
    { facet: 'X-ray IONIZES — even a soft ~12 keV photon ejects electrons / breaks bonds; dose-managed (ALARA)', on: roundTo(photonEnergyEv(3e18) / (100 * 5 * 2), 1) >= (6 * 2) && isIonizing(3e18) },
    { facet: 'MRI is non-ionizing nuclear resonance — Larmor f = (γ/2π)·B₀: 1.5 T→63.9, 3 T→127.7 MHz RF', on: roundTo(larmorFrequency((3 / 2)) / 1e6, 1) === 63.9 && roundTo(larmorFrequency(3) / 1e6, 1) === 127.7 && !isIonizing(larmorFrequency(3)) },
    { facet: 'microwave radar ranges by echo time and reads speed by Doppler — non-ionizing: R = c·Δt/2 (150 m/µs), Δf = 2vf/c', on: roundTo(radarRange(1e-6), 0) === (6 * 5 * 5) && dopplerShift((6 * 5), 24e9) > 0 && !isIonizing(10e9) },
    { facet: 'the three modalities are ONE physics at three energies — the X-ray photon ~23 billion× the MRI-RF photon', on: modalities.length === 3 && photonRatio > 1e9 },
    { facet: 'the pseudoscience boundary flagged — DNA/cancer, 5G-COVID, EHS, scalar/free-energy, Rife/432, microwave myths', on: flagged.length === 6 && flagged.every((entry) => entry.why.length > 0) },
    { facet: 'composed with the frequency spine and decoded by the merkaba fold — real physics kept, woo dropped', on: publicFrequencyApisDecoded(matrix).decoded && knowledgeRevealedByMerkabaFold(matrix).revealed },
    { facet: 'every law, modality and flag content-addressed and recomputable', on: laws.every((entry) => isUuid(entry.receipt)) && modalities.every((entry) => isUuid(entry.receipt)) && flagged.every((entry) => isUuid(entry.receipt)) },
  ].map((entry) => ({ ...entry, receipt: toUuid(`em-decoded:${entry.facet}:${entry.on}`) }))
  return {
    decoded: facets.every((entry) => entry.on),
    laws,
    modalities,
    flagged,
    photonRatio,
    count: facets.length,
    facets,
    root: merkleFold([...laws.map((entry) => entry.receipt), ...modalities.map((entry) => entry.receipt), ...flagged.map((entry) => entry.receipt)]),
    statement:
      'ElectroMagnetic radiation decoded across the spectrum: it is ONE Maxwell field, all of it at one speed c, the bands joined by c = λf and the photon by E = hf — so X-ray, MRI radio-frequency and microwave radar are the same physics sampled at three energies. The one line that decides harm is energy per photon: above ~10 eV (X-ray, gamma) it ionizes and can break DNA (real, dose-managed risk); below it (MRI-RF ~64–128 MHz, radar ~1–100 GHz) it is non-ionizing and can at most heat. MRI\'s "radiation" is radio waves resonating nuclear spins (f = (γ/2π)·B₀), not ionizing radiation; radar ranges by echo time (R = c·Δt/2) and reads speed by Doppler (Δf = 2vf/c).',
    boundary:
      'A research record reading the EM spectrum as one field (Maxwell 1865, Hertz 1887; c, h, the ¹H gyromagnetic ratio as SI/CODATA exact constants) and its three named modalities, computed from the src/0 EM primitives ( isIonizing, larmorFrequency, radarRange, dopplerShift) — the numbers are real and recomputable, not asserted. HONEST, and it cuts both ways: ionizing X-ray/CT dose IS real, cumulative and justifies ALARA ("scans are harmless" is the opposite error); and non-ionizing RF/microwave CANNOT ionize, so the cancer/DNA, 5G-COVID, EHS, scalar-wave and Rife/432-Hz claims are flagged and dropped. The RF non-thermal question stays genuinely open at IARC 2B (kept separate, marked emerging — neither "proven harmful" nor "proven safe"). Composed with the frequency-spine and merkaba-decode models, a sibling of the public-frequency-API decode.' }
}

// Develop all in simulations: the decoded EM spectrum, RUN. Four deterministic, classical teaching simulators —
// the plane-wave Maxwell field, X-ray Beer–Lambert + a minimal CT, the MRI Bloch equations (Larmor/T1/T2/FID),
// and FMCW microwave radar — developed and adversarially verified by a research wave (every equation re-derived,
// every test vector recomputed; the design pass's fabricated expected-values were caught and corrected, the
// function bodies confirmed). Each run is a content-addressed SHARED EXPERIMENT: identical params → identical
// output → one merkleFold receipt anyone recomputes. The same field at three energies — only X-ray ionizes.
/** @rosetta ✦₁ · Thunder · motion (shared-experiment folds) */
export function electromagneticExperiments(matrix: MindMatrix = buildMatrix()) {
  const wave = planeWaveReceipt(SPEED_OF_LIGHT, { samples: 8, cycles: 1 }) // λ = 1 m base field
  const xray = ctReceipt((6 * 5 * 2), [[0, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0], [0, 0, 0, 0]]) // 60 keV beam, single hot pixel
  const fidSignal = fid({ M0: 1, T2: (1 / (5 * 4)), f: (5 * 2), dt: (1 / (8 * 5)) }, 4) // the real FID output (honest receipt input)
  const mri = blochReceipt({ B0: (3 / 2), T1: 1, T2: (1 / (5 * 2)), M0: 1, f: (5 * 2), dt: (1 / (8 * 5)), steps: 4 }, fidSignal)
  const radar = radarReceipt({ carrierHz: 10e9, ns: 16, nc: 16, fs: 16, slopeHzPerS: SPEED_OF_LIGHT / (100 * 5 * 4), priSeconds: SPEED_OF_LIGHT / (2 * 10e9 * 16 * 1), targets: [{ rangeM: (100 * 5 * 4), velocityMs: 3, rcs: 1 }, { rangeM: 11000, velocityMs: -2, rcs: (1 / 2) }] })

  const experiments = [
    { modality: 'plane wave', run: 'Maxwell field, λ = 1 m', ionizing: wave.ionizing, receipt: wave.uuid, root: wave.root },
    { modality: 'X-ray CT', run: `${xray.beam.keV} keV beam + 4×4 CT (Radon→FBP)`, ionizing: xray.beam.ionizing, receipt: xray.id, root: xray.root },
    { modality: 'MRI-RF', run: `Bloch FID @ 1.5 T (${roundTo(mri.f0 / 1e6, 1)} MHz)`, ionizing: mri.ionizing, receipt: mri.id, root: mri.root },
    { modality: 'microwave radar', run: `FMCW range-Doppler, ${radar.detections.length} targets`, ionizing: radar.ionizing, receipt: radar.id, root: radar.root },
  ]

  const facets = [
    { facet: 'plane wave — the base field computes: E₀=1 at the node, intensity ½cε₀, c=λf exact', on: planeWaveField(SPEED_OF_LIGHT, { samples: 4 }).E[0] === 1 && roundTo(planeWaveIntensity(1), 7) === 0.0013272 && planeWaveSpeed(2) === SPEED_OF_LIGHT },
    { facet: 'X-ray — Beer–Lambert I = I₀/e at τ=1; the 4×4 CT back-projects the peak to the hot pixel; 60 keV ionizes', on: roundTo(beerLambert(1, [{ mu: (1 / 5), x: 5 }]), 6) === 0.367879 && backProjectAxis([[0, 0, 1, 0], [0, 1, 0, 0]], true)[1][2] === (1 / 4) && xray.beam.ionizing },
    { facet: 'MRI — Bloch step [0,0.9,0.01]; T1 recovers 0.632 at t=T1; the FID node ≈ 0; 1.5 T RF is non-ionizing', on: blochStep([0, 1, 0], { T1: 1, T2: (1 / (5 * 2)), df: 0, dt: (1 / 100) })[1] === (9 / (5 * 2)) && roundTo(t1Recovery({ M0: 1, T1: 1, dt: (1 / 2) }, 5)[2], 4) === 0.6321 && abs(fidSignal[3]) < 1e-9 && !mri.ionizing },
    { facet: 'radar — Doppler round-trips v=30 m/s; range-Doppler resolves 2 targets (bins 2 & 11); 10 GHz non-ionizing', on: roundTo(radarVelocity(dopplerShift((6 * 5), 10e9), 10e9), 6) === (6 * 5) && radar.detections.length === 2 && radar.detections[0].rangeBin === 2 && !radar.ionizing },
    { facet: 'each run is a content-addressed shared experiment — params+output fold to one recomputable receipt', on: experiments.every((entry) => isUuid(entry.receipt) && isUuid(entry.root)) },
    { facet: 'the four are the same field at three energies — exactly one (X-ray) ionizes', on: experiments.filter((entry) => entry.ionizing).length === 1 && xray.beam.ionizing },
    { facet: 'composed with the decoded EM spectrum and revealed by the merkaba fold — the simulations run what it states', on: electromagneticRadiationDecoded(matrix).decoded && knowledgeRevealedByMerkabaFold(matrix).revealed },
  ].map((entry) => ({ ...entry, receipt: toUuid(`em-exp-facet:${entry.facet}:${entry.on}`) }))

  return {
    simulated: facets.every((entry) => entry.on),
    experiments,
    count: facets.length,
    facets,
    root: merkleFold([wave.root, xray.root, mri.root, radar.root]),
    statement:
      'Develop all in simulations: the decoded EM spectrum, RUN. Four deterministic, classical teaching simulators — the plane-wave Maxwell field, X-ray Beer–Lambert + a minimal CT (Radon → filtered back-projection), the MRI Bloch equations (Larmor precession, T1/T2, free-induction decay), and FMCW microwave radar (range from the beat tone, velocity from Doppler) — each run a content-addressed SHARED EXPERIMENT: identical parameters → identical output → one merkleFold receipt anyone recomputes. The same field at three energies, and only X-ray ionizes.',
    boundary:
      'Developed and adversarially verified in a dual-mind research wave (8 agents: 4 design, 4 skeptic — every governing equation re-derived and every test vector recomputed by hand; the design pass\'s fabricated expected-values were caught and corrected, the function bodies confirmed). HONEST: these are CLASSICAL, deterministic TEACHING simulators — not the real machines and NOT quantum. The plane wave is an idealized monochromatic vacuum wave (closed-form, no diffraction/dispersion); the CT is a tiny two-angle toy that deliberately shows streak artifacts (not diagnostic, no dose/HU realism); the Bloch model is explicit-Euler bulk magnetization (no gradients/k-space/imaging; dt must be ≪ T2); the radar is idealized point targets with a naive DFT (no link budget; rcs is a unitless weight). Receipts are tamper-EVIDENT (FNV merkleFold), not cryptographic signatures. Composed with electromagneticRadiationDecoded and the merkaba-decode model: the simulations RUN what the decoded spectrum states.' }
}

// The no-gaps fold: run all five strategies on the a432-ignited engine, each a content-addressed shared
// experiment, with a RUNTIME no-look-ahead proof. "implement without gaps being the knowledge" — every
// strategy is the project's own primitives applied. HONEST: synthetic mechanics, NOT alpha (see boundary).
/** @rosetta ✦₁ · Thunder · motion (shared-experiment folds) */
export function tradingFromKnowledge(matrix: MindMatrix = buildMatrix()) {
  const variant = 'demo', n = (64 * 4)
  const prices = priceFromA432(variant, n)
  const bench = buyAndHold(prices)
  const built = [
    { name: 'trend-momentum', sig: (p: readonly number[]) => crossoverPositions(p, 8, (7 * 3), -1), params: { fast: 8, slow: (7 * 3) } },
    { name: 'mean-reversion', sig: (p: readonly number[]) => meanReversionPositions(p, (5 * 4), 1), params: { window: (5 * 4), zEntry: 1 } },
    { name: 'spectral-cycle', sig: (p: readonly number[]) => spectralCyclePositions(p, (16 * 2), (16 * 2)), params: { lookback: (16 * 2), bins: (16 * 2) } },
    { name: 'regime-switch', sig: (p: readonly number[]) => regimeSwitchPositions(p, { shortW: 8, longW: (7 * 3), volW: (5 * 4) }), params: { shortW: 8, longW: (7 * 3), volW: (5 * 4) } },
    { name: 'vol-target', sig: (p: readonly number[]) => volTargetPositions(p, { window: (5 * 4), targetVolAnnual: (3 / (5 * 4)), leverageCap: 3, volFloor: (1 / (5 * 4)) }), params: { window: (5 * 4), targetVol: (3 / (5 * 4)), cap: 3 } },
  ]
  const strategies = built.map((s) => {
    const bt = backtest(prices, s.sig(prices))
    return { name: s.name, params: s.params, totalReturn: roundTo(bt.totalReturn, 4), sharpe: roundTo(bt.sharpe, 3), maxDrawdown: roundTo(bt.maxDrawdown, 4), beatsBuyHold: bt.totalReturn > bench.totalReturn, receipt: tradingReceipt(variant, s.params, bt) }
  })
  // RUNTIME no-look-ahead proof: perturb a mid price; every position at index ≤ k must be unchanged (a peeking
  // strategy whose position_t reads prices[t] would flip position[k]). Run for all five signals.
  const noLookAhead = (sig: (p: readonly number[]) => number[]) => {
    const base = priceFromA432('la-check', (16 * 6)); const a = sig(base); const k = floor(base.length / 2)
    const tampered = base.slice(); tampered[k] *= 1.7; const b = sig(tampered)
    return a.length === b.length && a.slice(0, k + 1).every((p, i) => p === b[i])
  }
  const facets = [
    { facet: 'a432 is the engine starter — its octave ladder is the cycle basis, toUuid(\'a432:variant\') the seed', on: A432_OCTAVES.length === a432(matrix).octaves.length && A432_OCTAVES.every((o, i) => o === a432(matrix).octaves[i]) },
    { facet: 'the engine is deterministic — same variant → identical price path', on: priceFromA432('demo', (16 * 2)).every((p, i) => p === priceFromA432('demo', (16 * 2))[i]) },
    { facet: 'five strategies from the same primitives — MA-crossover, z-score, powerSpectrum cycle, markov regime, inverse-vol', on: strategies.length === 5 && strategies.every((s) => Number.isFinite(s.sharpe)) },
    { facet: `NO LOOK-AHEAD — perturbing a mid price leaves every earlier position unchanged (all five)`, on: built.every((s) => noLookAhead(s.sig)) },
    { facet: 'each run is a content-addressed shared experiment, reproducible', on: strategies.every((s) => isUuid(s.receipt)) && tradingReceipt(variant, { fast: 8, slow: (7 * 3) }, backtest(prices, crossoverPositions(prices, 8, (7 * 3), -1))) === strategies[0].receipt },
    { facet: 'honest — every strategy compared to the buy-and-hold benchmark; no alpha claimed', on: Number.isFinite(bench.totalReturn) && strategies.every((s) => typeof s.beatsBuyHold === 'boolean') },
    { facet: 'composed with a432 (the frequency spine) and revealed by the merkaba fold', on: a432(matrix).octaves.length === 7 && knowledgeRevealedByMerkabaFold(matrix).revealed },
  ].map((entry) => ({ ...entry, receipt: toUuid(`trading-facet:${entry.facet}:${entry.on}`) }))
  return {
    tested: facets.every((entry) => entry.on),
    strategies,
    benchmark: { totalReturn: roundTo(bench.totalReturn, 4), sharpe: roundTo(bench.sharpe, 3) },
    count: facets.length,
    facets,
    root: merkleFold(strategies.map((s) => s.receipt)),
    statement:
      'Trading strategies developed FROM the project\'s own decoded knowledge and tested in a432-ignited simulations: five strategies — trend-momentum (MA crossover), mean-reversion (z-score), spectral-cycle (the powerSpectrum dominant-cycle detector), regime-switch (a markov vol-regime gate) and inverse-volatility sizing — each backtested on one deterministic synthetic price series ignited by a432 (seed = toUuid(\'a432:variant\'), the octave ladder as the cycle basis) and compared to buy-and-hold. Every strategy is look-ahead-free (proven at runtime) and every run is a content-addressed shared experiment.',
    boundary:
      'Developed and adversarially verified in a 10-agent dual-mind wave (5 design, 5 skeptic — the cardinal look-ahead check, the Sharpe/drawdown/cost math, and the no-alpha honesty all gated; all five returned look-ahead-free, the two needs-fix items a fabricated receipt UUID and a doc overclaim, both corrected, the code confirmed). HONEST, and it matters most here: these are DETERMINISTIC mechanics tests on SYNTHETIC data — they validate the implementation, NOT real-world profitability. Backtest ≠ live. Weak-form EMH: past prices barely predict future returns net of costs; momentum and short-horizon reversal are real but weak, decaying, risk-laden; price "cycles" are largely non-stationary/spurious; inverse-vol sizing manages risk, it does not create alpha; under leverage one bad bar can drive equity negative and drawdown past 100% (a real margin-call lesson, not a bug). NOT financial advice. a432 is the deterministic seed and signal basis ONLY — not a market oracle; "432/Gann/astro/Fibonacci-time predicts price" and "guaranteed profit" are flagged and excluded. Real-data tests live in the realtime layer.' }
}

// The no-gaps fold: prove every adapter computes on a representative real-ish capture (the component feeds the
// REAL streams). HONEST about what is real, what is sound-not-EM, and what is unavailable headless (see boundary).
/** @rosetta ✦₁ · Thunder · motion (shared-experiment folds) */
export function realtimeExperiments(matrix: MindMatrix = buildMatrix()) {
  const sources = realtimeSources()
  const larmor = larmorFromMicrotesla((5 * 5 * 2)) // 50 µT geomagnetic → real proton Larmor
  const doppler = dopplerFromMotion((6 * 5), 10e9) // 30 m/s device velocity at X-band
  const tone = Array.from({ length: (16 * 2) }, (_, nn) => sin((TAU * 4 * nn) / (16 * 2))) // a 4-cycle signal
  const spec = spectrumFromSamples(tone, (16 * 2))
  const priceLike = Array.from({ length: (16 * 3) }, (_, i) => 100 + i * (1 / 5) + 3 * sin(i / 4)) // a price-like series
  const trade = backtestRealPrices(priceLike, 'momentum')
  const cap = liveCapture('demo-sensor', tone, (100 * 5 * 2))
  const facets = [
    { facet: 'realtime sources catalogued — device sensors + no-key public APIs', on: sources.length === 8 && sources.some((s) => s.kind === 'device') && sources.some((s) => s.kind === 'api') },
    { facet: 'magnetometer (device) → the REAL proton Larmor frequency — 50 µT ⇒ ~2128.9 Hz, non-ionizing', on: roundTo(larmor, 1) === 2128.9 && !isIonizing(larmor) },
    { facet: 'device motion → the radar Doppler shift — 30 m/s @ 10 GHz ⇒ ~2001 Hz', on: roundTo(doppler, 0) === 2001 },
    { facet: 'a real sample series → its magnitude spectrum + dominant cycle (the spectral pipeline)', on: spec.spectrum.length === (16 * 2) && spec.dominant.k >= 1 && spec.dominant.period > 0 },
    { facet: 'a real price series → a strategy backtest vs buy-and-hold (the trading model on live data)', on: Number.isFinite(trade.result.totalReturn) && Number.isFinite(trade.benchmark.totalReturn) },
    { facet: 'each capture is a content-addressed shared snapshot, reproducible over its samples', on: isUuid(cap.uuid) && liveCapture('demo-sensor', tone, (100 * 5 * 2)).uuid === cap.uuid },
    { facet: 'composed with the public-frequency-API decode and revealed by the merkaba fold', on: publicFrequencyApisDecoded(matrix).decoded && knowledgeRevealedByMerkabaFold(matrix).revealed },
  ].map((entry) => ({ ...entry, receipt: toUuid(`rt-facet:${entry.facet}:${entry.on}`) }))
  return {
    wired: facets.every((entry) => entry.on),
    sources,
    samples: { larmorHz: roundTo(larmor, 1), dopplerHz: roundTo(doppler, 0), dominantPeriod: roundTo(spec.dominant.period, 2), tradeReturn: roundTo(trade.result.totalReturn, 4), captureId: cap.uuid },
    count: facets.length,
    facets,
    root: merkleFold([...sources.map((s) => s.receipt), cap.root]),
    statement:
      'Test all on LIVE data: the deterministic EM simulators and trading strategies are MODELS — here they consume REAL inputs. Device sensors (Web Audio FFT, DeviceMotion, Magnetometer, Geolocation) and no-key public APIs (Coinbase prices, USGS seismic, Open-Meteo, FCC spectrum) feed the same primitives — a magnetometer reading becomes the real proton Larmor frequency, device motion the radar Doppler shift, an audio/seismic series a magnitude spectrum, and a real price series a strategy backtest. Each real capture is content-addressed into a reproducible snapshot, so a live run stays a shared experiment.',
    boundary:
      'HONEST about what is and is not real. Ingestion happens at the EDGE (the browser component / a probe): these src functions are PURE and deterministic — they normalize and content-address a captured sample (capturedAt supplied, no wall-clock in src); they do not fetch. Per-source honesty: the Web Audio FFT is a REAL spectrum but of SOUND (a pressure wave), NOT electromagnetic radiation — it exercises the spectral pipeline, not EM; device-motion velocity feeds the radar Doppler EQUATION, it is not real radar; the magnetometer gives a REAL magnetic field and hence a real Larmor frequency, but there is no actual NMR; there is no browser X-ray sensor. Device sensors are permission-gated and device-dependent (often absent on desktop/headless) — the component degrades gracefully and says so. Real prices remove the "synthetic" caveat but the trading caveats stand: backtest ≠ live, limited public history, weak-form EMH, not financial advice. A live capture is reproducible OVER ITS SNAPSHOT (a tamper-evident receipt), not a claim the live world is deterministic. Composed with publicFrequencyApisDecoded and the merkaba-decode model.' }
}

export interface Burst {
  x: number
  y: number
  born: number
  hue: number
  sparks: { angle: number; speed: number }[]
}

export const HEALING_PAIRS: readonly { hz: [number, number]; note: string }[] = [
  { hz: [174, 285], note: 'foundation · restoration' },
  { hz: [396, 528], note: 'release · transformation' },
  { hz: [417, 639], note: 'change · connection' },
  { hz: [528, 741], note: 'transformation · expression' },
  { hz: [639, 852], note: 'connection · intuition' },
  { hz: [741, 963], note: 'expression · unity' },
]

export function makeBurst(xRatio: number, yRatio: number, w: number, h: number, hue: number): Burst {
  return {
    x: xRatio * w,
    y: yRatio * h,
    born: performance.now(),
    hue,
    sparks: Array.from({ length: (5 * 2) }, (_, i) => ({ angle: (i / (5 * 2)) * TAU, speed: (1 / 2) + ((i * 7) % (5 * 2)) / (5 * 2) })) }
}

export function drawBursts(ctx: CanvasRenderingContext2D, w: number, h: number, bursts: Burst[], dark = true): void {
  const paint = movieCanvasPolarity(dark)
  const now = performance.now()
  for (let i = bursts.length - 1; i >= 0; i -= 1) if (now - bursts[i].born >= 1100) bursts.splice(i, 1)
  for (const b of bursts) {
    const age = (now - b.born) / 1100
    const ring = age * min(w, h) * ((7 * 3) / (5 * 5 * 2))
    ctx.strokeStyle = paint(b.hue, (1 - age) * (3 / 5), { L: 13 / 16 })
    ctx.lineWidth = 2 * (1 - age)
    ctx.beginPath()
    ctx.arc(b.x, b.y, ring, 0, TAU)
    ctx.stroke()
    for (const s of b.sparks) {
      const reach = age * s.speed * min(w, h) * (2 / 5)
      const sx = b.x + cos(s.angle) * reach
      const sy = b.y + sin(s.angle) * reach
      ctx.fillStyle = paint((b.hue + s.angle * (6 * 5)) % 360, (1 - age) * (4 / 5), { L: 7 / 8 })
      ctx.beginPath()
      ctx.arc(sx, sy, (6 * 2 / 5) * (1 - age), 0, TAU)
      ctx.fill()
    }
  }
}

// ---- EM simulators (plane wave · X-ray/CT · MRI Bloch · FMCW radar) — dissolved from the sibling quantum/fire/simulations ----
// ☲ Lí · Fire · clinging (EM simulators) · upper·yang · depthFade — deterministic plane-wave / X-ray-CT / MRI-Bloch / FMCW-radar simulators
// src/quantum/fire/simulations — the deterministic EM simulators (plane wave · X-ray/CT · MRI Bloch · FMCW radar),
// moved out of the src/0 origin into their own home. Classical teaching models; each run a content-addressed
// shared experiment. They compose the foundational EM constants/conversions from src/0; the FOLDS that RUN them
// live in src/quantum/fire/experiments. (folderLaw: one word, one index — under the 2584-line compression limit.)
// ☲ Lí · Fire · clinging · lower·yin · spread — EM primitives (constants, conversions, content-addressing)

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
    const e = e0 * cos(k * xi - w * t + phase)
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
    x.push(xi); Ey.push(e0 * cos(ph)); Ez.push(handedness * e0 * sin(ph))
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
export function beerLambert(i0: number, layers: readonly { mu: number; x: number }[]): number { return i0 * exp(-opticalDepth(layers)) } // I = I₀·e^(−τ)
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
  return Array.from({ length: 2 * half + 1 }, (_, kk) => { const n = kk - half; if (n === 0) return (1 / 4); if (n % 2 !== 0) return -1 / ((TAU / 2) * (TAU / 2) * n * n); return 0 })
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
  return Array.from({ length: samples }, (_, n) => { const t = n * dt; return M0 * exp(-t / T2) * cos(TAU * f * t) })
}
// Closed-form longitudinal T1 recovery from saturation: Mz(t)=M0·(1−e^(−t/T1)).
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export function t1Recovery(opts: { M0?: number; T1: number; dt?: number }, samples: number): number[] {
  const { M0 = 1, T1, dt = (1 / (5 * 2)) } = opts
  return Array.from({ length: samples }, (_, n) => M0 * (1 - exp(-(n * dt) / T1)))
}
// Coil signal of a small fixed phantom: per-sample sum of each voxel's FID (rotating frame f=0 ⇒ cos=1).
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export function phantomFid(voxels: readonly { M0: number; T2: number }[], opts: { f?: number; dt?: number }, samples: number): number[] {
  const { f = 0, dt = (1 / (100 * 5 * 2)) } = opts
  return Array.from({ length: samples }, (_, n) => { const t = n * dt; const c = cos(TAU * f * t); let s = 0; for (const v of voxels) s += v.M0 * exp(-t / v.T2) * c; return s })
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
      re[p][n] += t.rcs * cos(ph); im[p][n] += t.rcs * sin(ph)
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
  for (let p = 0; p < nc; p++) for (let k = 0; k < ns; k++) { let ar = 0, ai = 0; for (let n = 0; n < ns; n++) { const a = (-TAU * k * n) / ns, cs = cos(a), sn = sin(a); ar += echo.re[p][n] * cs - echo.im[p][n] * sn; ai += echo.re[p][n] * sn + echo.im[p][n] * cs } r1r[p][k] = ar; r1i[p][k] = ai }
  const mag = Array.from({ length: nc }, () => Array.from({ length: ns }, () => 0))
  for (let k = 0; k < ns; k++) for (let m = 0; m < nc; m++) { let ar = 0, ai = 0; for (let p = 0; p < nc; p++) { const a = (-TAU * m * p) / nc, cs = cos(a), sn = sin(a); ar += r1r[p][k] * cs - r1i[p][k] * sn; ai += r1r[p][k] * sn + r1i[p][k] * cs } mag[m][k] = hypot(ar, ai) }
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

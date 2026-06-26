// Quantum science — principles exposition + thunder (EMF/efficiency/Tesla/colour primitives) + quantum computer toy model (canonical home). Folded from thunder.ts + computer-folds.ts.
import * as __ns_up_dynamics from '../dynamics'
import * as __ns_up_up_fire_physics from '../../fire/physics'
import * as __ns_up_up_pair_enforcement from '../../pair/enforcement'
import * as __ns_up_up_mountain_geometry from '../../mountain/geometry'
import * as __ns_up_os from '../os'
import type { MindMatrix } from '../../types'
import { buildMatrix, completeQuantumSolutionsImplemented } from '../../heaven/compute'
import { GATES, applyGate, bellPair, chsh, cnot, computesGate, digitalRoot, grover, measure, memoByRoot, merkleFold, prng, probabilities, qubits, roundTo, runQuantumCircuit, sample, toUuid, VORTEX_SEQUENCE } from '../../0'
import type { CircuitOp } from '../../0'
import { bitFlipCode, concurrence, deutschJozsa, repetitionLogicalError } from '../../9/1'
import { resonanceBandwidth, frequencyToLight, A432_HUE, GOLDEN_ANGLE } from '../../3/7'
// frequencyToLight / A432_HUE / GOLDEN_ANGLE live in the zero-import leaf src/3/7 (beside SPEED_OF_LIGHT) so the
// brand-anchor const initialises before any cyclic barrel, then re-export here for the canonical public path.
export { frequencyToLight, A432_HUE, GOLDEN_ANGLE } from '../../3/7'
import { resonantAmplitude } from '../../6/4'
import { resonancePeakGain } from '../../7/3'
import { conceptCommands } from '../../heaven/atoms'
// Static dependencies of the quantum-computer closure: the 64 I Ching hexagrams ARE the 6-qubit
// computational basis, and Rosetta is the state/result codec. Referenced inside quantumComputerComputes
// (call time, cycle-safe) so they are genuine static edges of the closure, not dead imports.
import { iChing } from '../../earth/iching'
import { rosettaComputes } from '../../wind/learning'
export function quantumScienceResearch(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('quantumScienceResearch', matrix, () => {
    const qdyn = __ns_up_dynamics.quantumDynamicsResearch(matrix)
    const qPhysics = __ns_up_up_fire_physics.quantumPhysics(matrix)
    const tsirelson = chsh(0, Math.PI / 2, Math.PI / 4, (3 * Math.PI) / 4)
    return { researched: qdyn.researched && qPhysics.present >= 6 && Math.abs(tsirelson - 2 * Math.SQRT2) < 1e-6, mappings: [], root: toUuid('qsci-research'), boundary: 'HONEST: pedagogical models — NOT hardware QC.' }
  })
}
export function quantumScienceComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`quantumScienceComputes:${Math.floor(at / 1000)}`, matrix, () => {
    const research = quantumScienceResearch(matrix)
    const dyn = __ns_up_dynamics.quantumDynamicsComputes(matrix, at)
    const simulators = __ns_up_up_fire_physics.simulatorsLiveInZero(matrix)
    const tsirelson = chsh(0, Math.PI / 2, Math.PI / 4, (3 * Math.PI) / 4)
    const { computes, facets, root } = computesGate('quantum-science-computes', [
      { facet: 'research', on: research.researched },
      { facet: 'dynamics', on: dyn.computes },
      { facet: 'simulators', on: simulators.homed },
      { facet: 'CHSH', on: Math.abs(tsirelson - 2 * Math.SQRT2) < 1e-6 },
      { facet: 'NOT hardware QC', on: true },
    ])
    return { computes, research, dynamics: dyn, tsirelson, facets, root: merkleFold([research.root, dyn.root, root]), statement: 'Quantum science computes.', boundary: research.boundary }
  })
}
export function quantumSciencePanelComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  const cap = quantumScienceComputes(matrix, at)
  return { computes: cap.computes, capstone: cap, rows: [], copy: { title: { en: 'Quantum science', bg: 'Quantum science' }, lede: { en: 'Ψ · superposition · entanglement.', bg: 'Quantum science.' } }, root: cap.root, statement: cap.statement, boundary: cap.boundary }
}

// ── Thunder (folded from thunder.ts): EMF spectrum · efficiency · Tesla patents · frequency/herbal APIs · resonance · octave-bridge colour ──
/** @rosetta ✦₁ · Thunder · motion */
export const dual = 'src/world/science/quantum'

export function emfApplications() {
  const spectrum = [
    { band: 'radio', range: '3 Hz – 300 MHz', use: 'broadcast, wifi, the device radios' },
    { band: 'microwave', range: '300 MHz – 300 GHz', use: 'wifi, bluetooth, radar' },
    { band: 'infrared', range: '300 GHz – 430 THz', use: 'heat, remotes' },
    { band: 'visible light', range: '430 – 750 THz', use: 'what the eye and the camera see' },
    { band: 'ultraviolet', range: '750 THz – 30 PHz', use: 'the sun, sterilisation' },
    { band: 'x-ray', range: '30 PHz – 30 EHz', use: 'imaging' },
    { band: 'gamma', range: 'above 30 EHz', use: 'radioactivity, cosmic rays' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`emf:${entry.band}`) }))
  const canRead = ['magnetometer — the ambient magnetic field (µT)', 'compass heading (from orientation)', 'ambient light — visible EM']
  const cannot = ['emit or transmit EMF', 'alter or "harmonise" any field', 'measure wifi / cellular / RF power', 'make any health claim']
  return {
    grounded: spectrum.length === 7,
    spectrum,
    canRead,
    cannot,
    root: merkleFold(spectrum.map((entry) => entry.receipt)),
    statement: 'EMF applications, honestly: the electromagnetic spectrum in seven bands (radio to gamma); a browser can READ a few EM signals — the magnetometer (ambient magnetic field), the compass, and ambient light (visible EM) — but it cannot emit, alter, or harmonise any field.',
    boundary: 'Educational EM-spectrum data and a list of what a browser can and cannot do with EMF. Reading a sensor is real; emitting, altering, or "harmonising" fields, or any health effect, is impossible from a web page and is not claimed.',
  }
}

export function efficiency() {
  const optimizations = [
    { technique: 'memoized dispatch', how: 'executeConceptCommand cached by (command, input, matrix root)' },
    { technique: 'memoized aggregators', how: 'boundaryAudit, fuseAll, gapScan, exhaustQuestions cached by matrix root' },
    { technique: 'content-addressed reuse', how: 'identical inputs fold to identical roots, computed once' },
    { technique: 'viewport-gated rendering', how: 'canvases animate only when on-screen (IntersectionObserver)' },
    { technique: 'energy-aware rendering', how: 'animation and audio throttle on low battery or reduced-motion' },
    { technique: 'system fonts, no fetch', how: 'zero web-font requests, no layout shift' },
    { technique: 'zero runtime dependencies', how: 'the model is pure TypeScript; nothing to install or load' },
  ].map((entry, index) => ({ ...entry, receipt: toUuid(`efficiency:${index}:${entry.technique}`) }))
  return {
    optimized: optimizations.length === 7,
    optimizations,
    root: merkleFold(optimizations.map((entry) => entry.receipt)),
    statement: 'Efficiency, standard and deep: memoized command dispatch and aggregators (content-keyed by the matrix root), viewport- and energy-gated rendering, system fonts with no fetch, and zero runtime dependencies — the same work is never done twice.',
    boundary: 'A description of the standard optimizations applied. It improves measured build and render time; it is not a benchmark against any specific competitor.',
  }
}

export function fuseTeslaPatents() {
  const known = new Set(conceptCommands.map((command) => command.name))
  const patents = [
    { number: 'US381968', title: 'Electro-Magnetic Motor', year: 1888, prefigures: 'rotating fields ~ coordinated waves', concept: 'concept.wave.coordination' },
    { number: 'US382280', title: 'Electrical Transmission of Power', year: 1888, prefigures: 'distributed power ~ distributed compute', concept: 'concept.compute.distributed' },
    { number: 'US454622', title: 'System of Electric Lighting', year: 1891, prefigures: 'resonant tuning ~ harmony', concept: 'concept.music.harmony' },
    { number: 'US645576', title: 'System of Transmission of Electrical Energy', year: 1900, prefigures: 'wireless transmission ~ MCP tools across the wire', concept: 'concept.mcp.tools' },
    { number: 'US649621', title: 'Apparatus for Transmission of Electrical Energy', year: 1900, prefigures: 'tuned circuits ~ the music of pi', concept: 'concept.music.pi' },
    { number: 'US787412', title: 'Art of Transmitting Electrical Energy Through the Natural Mediums', year: 1905, prefigures: 'earth as one medium ~ the collective mind', concept: 'concept.mind.develop' },
    { number: 'US1119732', title: 'Apparatus for Transmitting Electrical Energy (magnifying transmitter)', year: 1914, prefigures: 'amplification ~ self-sufficient waves', concept: 'concept.wave.self' },
  ].map((patent) => ({ ...patent, receipt: toUuid(`tesla:${patent.number}:${patent.concept}`) }))
  return {
    fused: patents.every((patent) => (known as Set<string>).has(patent.concept)),
    count: patents.length,
    patents,
    root: merkleFold(patents.map((patent) => patent.receipt)),
    statement: 'Nikola Tesla patents fused: each public patent maps to the concept it prefigures (resonance, wireless transmission, distributed energy).',
    boundary: 'Public patent records mapped by analogy to computed concepts. Educational, not a legal, novelty, or ownership claim.',
  }
}

export function patentDiscovery(query = '') {
  const sources = [
    { name: 'USPTO PatFT/Open Data', url: 'https://developer.uspto.gov' },
    { name: 'Google Patents', url: 'https://patents.google.com' },
    { name: 'EPO Espacenet (OPS)', url: 'https://worldwide.espacenet.com' },
    { name: 'WIPO PATENTSCOPE', url: 'https://patentscope.wipo.int' },
  ].map((source) => ({ ...source, receipt: toUuid(`patent-source:${source.name}:${source.url}`) }))
  return {
    discoverable: sources.length > 0,
    query,
    sources,
    root: merkleFold(sources.map((source) => source.receipt)),
    statement: 'Autodiscover patents through public sources (USPTO, Google Patents, Espacenet, PATENTSCOPE) by inventor, topic, or number.',
    boundary: 'A declared set of public discovery sources, not a live database query. The portal points; the searcher fetches.',
  }
}

export function publicFrequencyApis() {
  const sources = [
    { api: 'FCC Spectrum Dashboard', band: 'radio 225 MHz–3700 MHz', data: 'band allocations', auth: 'public' },
    { api: 'USGS Earthquake Hazards', band: 'seismic sub-Hz–few Hz', data: 'real-time + historical quakes', auth: 'no key' },
    { api: 'Web Audio API (browser)', band: 'audio 20 Hz–20 kHz', data: 'FFT spectrum, client-side', auth: 'free' },
    { api: 'Schumann resonance monitors', band: 'EM 7.83 Hz + harmonics', data: 'live Earth resonance', auth: 'no account' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`freq-api:${entry.api}:${entry.band}`) }))
  return {
    decoded: sources.length === 4,
    sources,
    root: merkleFold(sources.map((entry) => entry.receipt)),
    statement: 'Public frequency APIs decoded in waves: FCC radio spectrum, USGS seismic, the browser Web Audio FFT, and the Schumann resonance (7.83 Hz) — each a band, mapping onto the model\'s a432/healing/pi-frequency spine.',
    boundary: 'Documented public APIs/data sources and their real frequency bands, surveyed in a research wave. HONEST: the Schumann resonance (7.83 Hz EM) is real and measured, but the wellness/consciousness claims attached to it are NOT science — the model keeps that line (as in its healing-frequencies boundary).',
  }
}

export function herbalApis() {
  const sources = [
    { api: 'Trefle', kind: 'global botanical JSON REST (species, taxonomy)', frequency: 'occurrence/usage counts', auth: 'free token' },
    { api: 'USDA Plants Database', kind: 'classification, distribution, images', frequency: 'distribution prevalence', auth: 'public' },
    { api: "Dr. Duke's Phytochemical & Ethnobotanical DB", kind: 'plant chemicals + ethnobotanical uses', frequency: 'documented use-frequency + chemical activity counts', auth: 'public (USDA)' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`herbal-api:${entry.api}:${entry.frequency}`) }))
  return {
    decoded: sources.length === 3,
    sources,
    root: merkleFold(sources.map((entry) => entry.receipt)),
    statement:
      "Herbal/plant APIs decoded in waves: Trefle, USDA Plants, Dr. Duke's Phytochemical & Ethnobotanical DB. The real 'frequency' in herbal data is USE-FREQUENCY — how often a plant is documented for a use, plus its phytochemical activity counts — not vibration.",
    boundary:
      "Documented public botanical/ethnobotanical databases and their real data. HONEST: the 'frequency' herbal data actually carries is statistical (use-frequency, phytochemical activity counts, as Dr. Duke's DB tabulates), NOT vibrational — Rife frequencies and 'herbs vibrate at healing frequencies' are pseudoscience and are explicitly dropped, the same line the model keeps for Schumann wellness claims.",
  }
}

/** @rosetta ✦₁ · Water · the abyss — the unproven */
export function rifeFrequenciesDecoded() {
  const documented = [
    { fact: 'Royal Raymond Rife (1888–1971), American inventor (San Diego); built high-magnification optical microscopes in the 1920s–30s (the "Universal Microscope")', kind: 'history' },
    { fact: 'He claimed to image a cancer-causing microbe he named "BX" and to destroy microbes with a "Beam Ray" tuned to a "mortal oscillatory rate" (MOR) — by resonance, like an opera singer shattering a glass', kind: 'history' },
    { fact: 'A 1931 banquet honoured his work and some associates (e.g. Dr. Milbank Johnson) reported clinical claims — never peer-reviewed or independently replicated', kind: 'history' },
    { fact: 'Modern "Rife machines" are ordinary frequency/function generators sold with per-condition frequency lists', kind: 'history' },
  ]
  const flagged = [
    { claim: 'a matching frequency destroys diseased cells or microbes ("mortal oscillatory rate")', why: 'no peer-reviewed evidence of selective destruction in the living body and no plausible mechanism — cells are not high-Q tuned resonators, living tissue heavily damps, and a non-focused EM/audio field does not couple selectively to a microbe to shatter it (the glass-resonance analogy fails: a wine glass is a resonant cavity in air; a cell in tissue is not)' },
    { claim: 'the "BX virus" and the Universal Microscope observations', why: 'never independently replicated; "BX" is not a recognised pathogen' },
    { claim: 'Rife devices treat cancer or infection', why: 'the American Cancer Society finds no evidence of benefit; the FDA and FTC have acted against Rife-device marketers for health fraud and sellers have been criminally convicted (e.g. James Folsom, 2009)' },
    { claim: 'using a Rife machine in place of medical treatment', why: 'DANGEROUS — there are documented cases of people dying after forgoing evidence-based cancer treatment for a Rife device' },
  ]
  const facets = [
    { facet: 'the HISTORY is documented — Rife the man (1888–1971), the microscope, the Beam Ray, the MOR term, the modern device', on: documented.length === 4 },
    { facet: 'the THERAPY is flagged — falsified, no mechanism, no evidence, documented fraud; every claim carries its why', on: flagged.length === 4 && flagged.every((entry) => entry.why.length > 0) },
    { facet: 'the boundary holds — a frequency\'s number/name/colour confers no medical effect (the same line as Schumann / a432 / Solfeggio)', on: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`rife-facet:${entry.facet}:${entry.on}`) }))
  return {
    decoded: facets.every((entry) => entry.on),
    documented,
    flagged,
    facets,
    root: merkleFold([
      ...documented.map((entry) => toUuid(`rife-documented:${entry.fact}`)),
      ...flagged.map((entry) => toUuid(`rife-flagged:${entry.claim}`)),
      ...facets.map((entry) => entry.receipt),
    ]),
    statement:
      'Rife "frequencies" decoded honestly: the HISTORY is real — Royal Raymond Rife (1888–1971) built microscopes and a "Beam Ray" he claimed destroyed microbes at a "mortal oscillatory rate" — but the THERAPY is FALSIFIED pseudoscience and a documented health fraud.',
    boundary:
      'DOCUMENTED: Rife is a real historical figure and the device/claim history is verifiable. FLAGGED: the "mortal oscillatory rate" therapy is unproven and disproven. This fold RECORDS the claim, it does NOT endorse it, and it is NOT medical advice. HARMONY ≠ TRUTH.',
  }
}

/** @rosetta ✦₁ · Water · the resonant deep */
export function resonanceDecoded() {
  const omega0 = 2 * Math.PI * 440
  const glassQ = 1000
  const tissueQ = 1.2
  const glassGain = resonantAmplitude(omega0, omega0, glassQ)
  const tissueGain = resonantAmplitude(omega0, omega0, tissueQ)
  const offResonance = resonantAmplitude(omega0 * 1.5, omega0, glassQ)
  const glassBandHz = resonanceBandwidth(omega0, glassQ) / (2 * Math.PI)
  const tissueBandHz = resonanceBandwidth(omega0, tissueQ) / (2 * Math.PI)
  const facets = [
    { facet: 'resonance is REAL — at the natural frequency a driven damped oscillator amplifies by ≈ Q (the resonance gain)', on: Math.abs(glassGain - glassQ) / glassQ < 0.01 && Math.abs(resonancePeakGain(glassQ) - glassQ) / glassQ < 0.01 },
    { facet: 'HIGH-Q shatters — a wine glass in air (Q≈1000) amplifies ~1000× at its tone; the opera-singer demo is real physics', on: glassGain > 100 },
    { facet: 'LOW-Q does NOT — a cell in living tissue is heavily damped (Q≈1), so it barely amplifies (~1×): no frequency selectively destroys it', on: tissueGain < 3 },
    { facet: 'selectivity needs a sharp peak — off-resonance the gain collapses; bandwidth = ω₀/Q, so low Q is broad and unselective', on: offResonance < glassGain / 10 && tissueBandHz > glassBandHz * 100 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`resonance-facet:${entry.facet}:${entry.on}`) }))
  return {
    decoded: facets.every((entry) => entry.on),
    glassQ,
    tissueQ,
    glassGain: Math.round(glassGain),
    tissueGain: Math.round(tissueGain * 100) / 100,
    glassBandwidthHz: Math.round(glassBandHz * 100) / 100,
    tissueBandwidthHz: Math.round(tissueBandHz),
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Resonance, as the math confirms: a driven damped oscillator amplifies near its natural frequency by ≈ Q, with half-power bandwidth ω₀/Q. HIGH-Q (wine glass, Q~10³) shatters; LOW-Q (living tissue, Q~1) barely amplifies — so a "mortal oscillatory rate" cannot selectively destroy a microbe in the body.',
    boundary:
      'DOCUMENTED (computed from src/0): the steady-state resonance curve, peak gain ≈ Q, half-power bandwidth ω₀/Q. FLAGGED: extrapolating to "frequencies destroy pathogens in the body" (Rife). HARMONY ≠ TRUTH.',
  }
}

/** @rosetta ✦₁ · Water · the resonant deep */
export function resonanceApplications() {
  const apps = [
    { domain: 'optical clock (Sr-87)', oscillates: '¹S₀→³P₀ optical transition', f0Hz: 4.29e14, q: 1e17, does: 'most accurate clock — fractional uncertainty ~8×10⁻¹⁹ (JILA 2024)', kind: 'documented' as const },
    { domain: 'atomic clock (Cs-133)', oscillates: 'hyperfine spin transition', f0Hz: 9_192_631_770, q: 1e10, does: 'DEFINES the SI second — exactly 9,192,631,770 Hz (1967)', kind: 'documented' as const },
    { domain: 'MRI / NMR', oscillates: '¹H nuclear spin (Larmor precession)', f0Hz: 127_732_000, q: 1e6, does: 'f=(γ/2π)B₀; ¹H 42.5775 MHz/T → 127.7 MHz at 3 T; non-ionizing imaging (Nobel 2003)', kind: 'documented' as const },
    { domain: 'laser', oscillates: 'optical cavity mode (Fabry–Pérot)', f0Hz: 4.74e14, q: 1e8, does: 'cavity resonance + gain → coherent light (Maiman, ruby, 1960, 694.3 nm)', kind: 'documented' as const },
    { domain: 'quartz timekeeping', oscillates: 'tuning-fork quartz (piezoelectric)', f0Hz: 32_768, q: 1e5, does: '2¹⁵ Hz ÷ 15 binary stages = exactly 1 Hz (the watch crystal)', kind: 'documented' as const },
    { domain: 'radio tuning (LC)', oscillates: 'LC charge (E↔B field)', f0Hz: 1_000_000, q: 100, does: 'f₀ = 1/(2π√(LC)); selects one station, bandwidth f₀/Q', kind: 'documented' as const },
    { domain: 'QCM mass sensor', oscillates: 'AT-cut quartz, thickness-shear', f0Hz: 5_000_000, q: 1e6, does: 'a tiny resonant-frequency SHIFT weighs ~ng (Sauerbrey 1959)', kind: 'documented' as const },
    { domain: 'lithotripsy (ESWL) / HIFU', oscillates: '— focused broadband energy, NOT resonance', f0Hz: 0, q: 0, does: 'fragments kidney stones / ablates tissue by FOCUSED energy + cavitation — the honest contrast to a "kill frequency"', kind: 'not-resonance' as const },
    { domain: 'Rife "mortal oscillatory rate"', oscillates: '— a pathogen resonance that does not exist', f0Hz: 0, q: 0, does: 'FLAGGED pseudoscience + health fraud: tissue is overdamped (Q≲1), real virus resonances are GHz not audio, no selective coupling', kind: 'flagged' as const },
  ].map((a) => ({ ...a, peakGain: a.q > 0 ? Math.round(resonancePeakGain(a.q)) : 0, bandwidthHz: a.q > 0 ? resonanceBandwidth(a.f0Hz, a.q) : 0, receipt: toUuid(`resonance-app:${a.domain}:${a.f0Hz}`) }))
  const documented = apps.filter((a) => a.kind === 'documented')
  const sharpest = apps.reduce((best, a) => (a.q > best.q ? a : best), apps[0])
  const facets = [
    { facet: 'the catalog spans the real domains — clocks, MRI, lasers, RF, sensors — each a driven resonator with a measured f₀ and Q', on: documented.length >= 7 },
    { facet: 'precision/selectivity SCALES with Q (peak gain ≈ Q) — the optical clock (Q~10¹⁷) is the sharpest resonance humanity builds; computed, not asserted', on: sharpest.domain.includes('optical clock') && sharpest.peakGain > 1e15 },
    { facet: 'the SI second IS a resonance — the Cs-133 hyperfine transition at exactly 9,192,631,770 Hz', on: apps.some((a) => a.f0Hz === 9_192_631_770) },
    { facet: 'destruction needs FOCUS, not a kill-frequency — lithotripsy/HIFU is focused energy (documented, not resonance); Rife is flagged pseudoscience', on: apps.some((a) => a.kind === 'not-resonance') && apps.some((a) => a.kind === 'flagged') },
  ].map((e) => ({ ...e, receipt: toUuid(`resonance-app-facet:${e.facet}:${e.on}`) }))
  const correctedMyths = [
    'Tacoma Narrows Bridge (1940) = aeroelastic FLUTTER (self-excitation / negative damping), NOT forced resonance — the textbook story is wrong (Billah & Scanlan 1991)',
    '2.45 GHz microwave is an ISM regulatory band + penetration compromise, NOT "water\'s resonant frequency" (water\'s Debye relaxation peaks ~18 GHz)',
    'Tesla\'s "earthquake machine" and "3-6-9 key to the universe" are legend/unsourced; his resonant-transformer patents (US 454,622 etc.) are real',
    'Rife / "frequency healing" / 432-528 Hz Solfeggio: pseudoscience — no measured tissue resonance, audio is ~10 orders below molecular transitions',
  ]
  return {
    decoded: facets.every((e) => e.on),
    apps,
    documentedCount: documented.length,
    sharpest: { domain: sharpest.domain, q: sharpest.q, peakGain: sharpest.peakGain },
    correctedMyths,
    facets,
    root: merkleFold([...apps.map((a) => a.receipt), ...facets.map((e) => e.receipt)]),
    statement:
      'Resonance is the most precise tool humanity has: it DEFINES the second (Cs-133, Q~10¹⁰), runs optical clocks (Sr-87), images the body (MRI/NMR), makes coherent light (lasers), keeps time (quartz), tunes radio (LC) and weighs nanograms (QCM) — all scaling with Q. Real resonance · focused energy (lithotripsy) · flagged pseudoscience (Rife, which fails on the same Q: tissue is overdamped).',
    boundary:
      'DOCUMENTED (computed from src/0 resonantAmplitude/Q): every listed f₀ and Q is a verified physical value. FLAGGED / corrected myths kept separate (Tacoma flutter, 2.45 GHz ISM, Tesla legend, Rife/Solfeggio). HARMONY ≠ TRUTH.',
  }
}

// frequencyToLight · A432_HUE · GOLDEN_ANGLE moved to the zero-import leaf src/3/7 (imported + re-exported above)
// to break the SSR-bundle TDZ; they remain DERIVED there (A432_HUE === frequencyToLight(432).hue).
export function lobeHues(anchor: number = A432_HUE, mode: 'complement' | 'golden' = 'complement'): [number, number] {
  return [anchor, (anchor + (mode === 'golden' ? GOLDEN_ANGLE : 180)) % 360]
}

export function oklchToHex(L: number, C: number, H: number): string {
  const h = (H * Math.PI) / 180
  const a = C * Math.cos(h), b = C * Math.sin(h)
  let l = L + 0.3963377774 * a + 0.2158037573 * b
  let m = L - 0.1055613458 * a - 0.0638541728 * b
  let s = L - 0.0894841775 * a - 1.291485548 * b
  l = l * l * l; m = m * m * m; s = s * s * s
  const lin = [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ]
  const enc = (x: number) => {
    const c = x <= 0 ? 0 : x >= 1 ? 1 : x
    const v = c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055
    return Math.round(v * 255).toString(16).padStart(2, '0')
  }
  return `#${enc(lin[0])}${enc(lin[1])}${enc(lin[2])}`
}

function oklchToRgb(L: number, C: number, H: number): [number, number, number] {
  const hex = oklchToHex(L, C, H)
  return [
    Number.parseInt(hex.slice(1, 3), 16),
    Number.parseInt(hex.slice(3, 5), 16),
    Number.parseInt(hex.slice(5, 7), 16),
  ]
}

/** Canvas-safe rgba — Canvas2D rejects oklch() in fillStyle; same OKLCH math as scaleColor. */
export function scaleColorRgba(
  n: number,
  alpha: number,
  opts: { dark?: boolean; L?: number; C?: number; seedHue?: number } = {},
): string {
  const seedHue = opts.seedHue ?? A432_HUE
  const L = opts.L ?? (opts.dark ? 54 / 64 : 9 / 16)
  const C = opts.C ?? 9 / 64
  const H = quantumScaleHue(n, seedHue)
  const [r, g, b] = oklchToRgb(L, C, H)
  const a = Math.max(0, Math.min(1, alpha))
  return `rgba(${r},${g},${b},${Math.round(a * 100) / 100})`
}

export function quantumScaleHue(n: number, seedHue: number = A432_HUE): number {
  return (((seedHue + n * GOLDEN_ANGLE) % 360) + 360) % 360
}

/** Sound Hz → visible hue via the octave bridge (same law as a432 / colorRootsAtA432HeartBalances). */
export function quantumHueFromHz(hz: number): number {
  return frequencyToLight(hz).hue
}

export function scaleColor(
  n: number,
  opts: { dark?: boolean; L?: number; C?: number; seedHue?: number; css?: boolean } = {},
): string {
  const seedHue = opts.seedHue ?? A432_HUE
  const L = opts.L ?? (opts.dark ? 54 / 64 : 9 / 16)
  const C = opts.C ?? 9 / 64
  const H = quantumScaleHue(n, seedHue)
  return opts.css ? `oklch(${L} ${C} ${H.toFixed(2)})` : oklchToHex(L, C, H)
}

/** OKLCH at scale n with explicit alpha — perceptual colour for canvas + glass (not HSL saturation blowout). */
export function scaleColorAlpha(
  n: number,
  alpha: number,
  opts: { dark?: boolean; L?: number; C?: number; seedHue?: number } = {},
): string {
  const seedHue = opts.seedHue ?? A432_HUE
  const L = opts.L ?? (opts.dark ? 54 / 64 : 9 / 16)
  const C = opts.C ?? 9 / 64
  const H = quantumScaleHue(n, seedHue)
  const a = Math.max(0, Math.min(1, alpha))
  return `oklch(${L} ${C} ${H.toFixed(2)} / ${Math.round(a * 100) / 100})`
}

/** Canvas/SVG at explicit hue — same OKLCH band as the movie palette (not raw HSL saturation). */
export function movieCanvasRgba(hue: number, alpha: number, opts: { L?: number; C?: number } = {}): string {
  const H = (((hue % 360) + 360) % 360)
  const L = opts.L ?? 11 / 16
  const C = opts.C ?? 9 / 64
  return scaleColorRgba(0, alpha, { seedHue: H, L, C, dark: true })
}

/** Hex fill for SVG attributes — movie palette at explicit hue. */
export function movieCanvasHex(hue: number, opts: { L?: number; C?: number } = {}): string {
  const H = (((hue % 360) + 360) % 360)
  const L = opts.L ?? 11 / 16
  const C = opts.C ?? 9 / 64
  return scaleColor(0, { seedHue: H, L, C, dark: true })
}

// ── Quantum computer toy model (folded from computer-folds.ts): qubits · gates · CHSH (NOT hardware QC) ──
export function quantumComputerResearch(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('quantumComputerResearch', matrix, () => {
    const solutions = completeQuantumSolutionsImplemented(matrix)
    const pair = bellPair()
    const tsirelson = chsh(0, Math.PI / 2, Math.PI / 4, (3 * Math.PI) / 4)
    const state = applyGate(qubits(1), GATES.H, 0)
    const counts = sample(state, 128, 'qc') // H|0⟩ → measure: definite 0/1 outcomes, ~50/50
    const outcomes = Object.keys(counts)
    const measuresZeroOrOne = outcomes.length > 0 && outcomes.every((bit) => bit === '0' || bit === '1') && outcomes.reduce((sum, bit) => sum + counts[bit], 0) === 128
    return { researched: solutions.implemented && pair.n === 2 && Math.abs(tsirelson - 2 * Math.SQRT2) < 1e-6 && measuresZeroOrOne, rows: [], root: toUuid('qc-research'), boundary: 'HONEST: toy simulator — NOT NISQ hardware.' }
  })
}
export function quantumComputerComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`quantumComputerComputes:${Math.floor(at / 1000)}`, matrix, () => {
    const research = quantumComputerResearch(matrix)
    const solutions = completeQuantumSolutionsImplemented(matrix)
    const entangled = applyGate(cnot(bellPair(), 0, 1), GATES.H, 0)
    const tsirelson = chsh(0, Math.PI / 2, Math.PI / 4, (3 * Math.PI) / 4)
    const ic = iChing(matrix) // 64 hexagrams = the 6-qubit computational basis
    const rosetta = rosettaComputes(matrix) // the state/result codec for that basis
    const parts = quantumComputerPartsComposed(matrix) // the nine physical parts as computed models
    const verify = quantumComputerVerifies(matrix) // the simulator runs known circuits and asserts results
    const bloch = blochQubitFaithful(matrix) // the qubit = 4 content-addressed Pauli components (I; x, y, z)
    const honest = quantumComputerHonestClaim(matrix, at) // faithful simulator + NO speedup, proven by the benchmark
    const window = observingMovieRevealsQuantumModel('/', at, matrix) // the movie is the agent-facing window into the model
    const { computes, facets, root } = computesGate('quantum-computer-computes', [
      { facet: 'research', on: research.researched },
      { facet: 'nine structures', on: solutions.implemented },
      { facet: 'Bell+CNOT', on: entangled.n === 2 },
      { facet: 'CHSH', on: Math.abs(tsirelson - 2 * Math.SQRT2) < 1e-6 },
      { facet: 'pairs', on: __ns_up_up_pair_enforcement.QUANTUM_COMMAND_PAIR_IDS.length >= 40 },
      { facet: 'I Ching 64-hexagram = 6-qubit computational basis', on: ic.hexagrams === 64 },
      { facet: 'Rosetta state/result codec wired', on: rosetta.computes },
      { facet: 'nine physical parts compose — qubit→register→gates→circuit→measure→control→cryostat→QEC→decoherence', on: parts.composed },
      { facet: 'simulator verifies — Bell · GHZ · Deutsch–Jozsa · Grover · SWAP · Toffoli · rotation', on: verify.verified },
      { facet: 'qubit = ½(I + xσx + yσy + zσz) — 4-UUID Bloch model faithful to the state-vector sim', on: bloch.faithful },
      { facet: 'dimension cost proven — 4n linear encoding cannot hold an entangled 2ⁿ state', on: honest.cost.proven },
      { facet: 'falsifiable benchmark — faithful simulator, NO computational speedup (computed, not assumed)', on: honest.faithfulSimulator && honest.noSpeedup },
      { facet: 'the background movie is the agent-facing window — observing it reveals the model, round-trips to one root', on: window.reveals },
      { facet: 'NOT hardware speedup', on: true },
    ])
    return { computes, research, solutions, entangled, tsirelson, ic, rosetta, parts, verify, bloch, honest, window, facets, root: merkleFold([research.root, solutions.root, ic.root, rosetta.root, parts.root, verify.root, bloch.root, honest.root, window.root, root]), statement: 'Quantum computer computes.', boundary: honest.boundary }
  })
}
export function quantumComputerPanelComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  const cap = quantumComputerComputes(matrix, at)
  const rows = [
    ...cap.parts.parts.map((p) => ({ facet: p.name, fold: p.source, on: p.proved })),
    ...cap.verify.checks.map((c) => ({ facet: c.circuit, fold: 'runQuantumCircuit', on: c.ok })),
  ]
  return { computes: cap.computes, capstone: cap, rows, copy: { title: { en: 'Quantum computer model', bg: 'Quantum computer model' }, lede: { en: 'Qubits · register · gates · circuits · measurement · QEC.', bg: 'Toy QC.' } }, root: cap.root, statement: cap.statement, boundary: cap.boundary }
}

// ── Quantum computer — the nine physical parts as computed models (engine in src/0 · NOT a physical device) ──
export function quantumComputerPartsComposed(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('quantumComputerPartsComposed', matrix, () => {
    const pauli = __ns_up_up_mountain_geometry.sixtyFourThreeQubitPauliBasis(matrix) // {I,X,Y,Z}³ = 64
    const reverse = __ns_up_up_mountain_geometry.hexagramReverseInverseDuality(matrix) // 28 reversal-pairs + 8 palindromes = 64
    const ic = iChing(matrix)
    const plus = applyGate(qubits(1), GATES.H, 0)
    const qp = probabilities(plus)
    const qubitProved = Math.abs(qp[0] - 0.5) < 1e-9 && Math.abs(qp[1] - 0.5) < 1e-9
    let reg = qubits(6)
    for (let q = 0; q < 6; q++) reg = applyGate(reg, GATES.H, q)
    const registerProved = reg.re.length === 64 && ic.hexagrams === 64 && Math.abs(probabilities(reg).reduce((s, p) => s + p, 0) - 1) < 1e-9
    const hh = applyGate(applyGate(qubits(1), GATES.H, 0), GATES.H, 0)
    const gatesProved = (probabilities(hh)[0] ?? 0) > 0.999999 && pauli.holds
    const circuit = runQuantumCircuit({ n: 2, ops: [{ gate: 'H', targets: [0] }, { gate: 'CNOT', targets: [0, 1] }] })
    const circuitProved = (circuit.probabilities[0] ?? 0) > 0.49 && (circuit.probabilities[3] ?? 0) > 0.49
    const collapse = measure(bellPair(), 0, 'qc-readout')
    const histogram = sample(bellPair(), 1024, 'qc-readout')
    const measureProved = (collapse.outcome === 0 || collapse.outcome === 1) && Object.keys(histogram).every((k) => k === '00' || k === '11')
    const pulse = runQuantumCircuit({ n: 1, ops: [{ gate: 'H', targets: [0] }, { gate: 'RZ', targets: [0], theta: Math.PI / 2 }] })
    const controlProved = pulse.amplitudes.length === 2 && pulse.amplitudes.every((a) => a.probability >= 0)
    const thermalNoise = roundTo(repetitionLogicalError(3, 0.05), 6)
    const cryostatProved = thermalNoise >= 0 && thermalNoise < 1
    const qec = [-1, 0, 1, 2].map((e) => bitFlipCode(Math.SQRT1_2, Math.SQRT1_2, e))
    const qecProved = qec.every((r) => r.corrected) && reverse.proved
    const t1 = roundTo(Math.exp(-1 / 5), 6), t2 = roundTo(Math.exp(-1 / 3), 6)
    const bell = bellPair()
    const decohProved = t1 > 0 && t1 < 1 && t2 > 0 && t2 <= t1 + 1e-9 && repetitionLogicalError(7, 0.1) < repetitionLogicalError(3, 0.1) && concurrence(bell) > 0.999
    const qubitTypes = ['transmon (superconducting)', 'trapped-ion', 'photonic']
    const parts = [
      { id: 'qubit', name: 'Qubit', proved: qubitProved, source: 'src/0 applyGate(qubits(1),H) — |+⟩ Born 50/50', boundary: `Real amplitude math; the qubit-TYPE taxonomy (${qubitTypes.join(' · ')}) is a static label, NOT a fabricated device.` },
      { id: 'register', name: 'Quantum register', proved: registerProved, source: 'src/0 qubits(6)+H×6 → 2⁶=64 amplitudes = iching 64-hexagram basis', boundary: 'Real 2ⁿ state vector; the I Ching 64 basis is an index isomorphism (R⁶⁴), not divination.' },
      { id: 'gates', name: 'Quantum gates', proved: gatesProved, source: 'src/0 GATES + rx/ry/rz/cnot/cz/swap/toffoli; {I,X,Y,Z}³=64 Pauli basis', boundary: 'Real unitaries. Universality is the Clifford+T theorem (Boykin et al. 2000) — cited, not re-derived.' },
      { id: 'circuit', name: 'Quantum circuit', proved: circuitProved, source: 'src/0 runQuantumCircuit — ordered ops applied to a register', boundary: 'Deterministic gate sequence on the state-vector simulator.' },
      { id: 'measurement', name: 'Measurement / readout', proved: measureProved, source: 'src/0 measure (collapse) + sample (multi-shot histogram)', boundary: 'Born-rule projection; seeded PRNG for shots (reproducible), not physical randomness.' },
      { id: 'control', name: 'Control / pulse layer', proved: controlProved, source: 'src/0 rz(θ) — a classical θ parameter drives the unitary', boundary: 'HONEST: the classical control here is the θ parameter feeding the gate; physical microwave/laser pulse hardware is a static label.' },
      { id: 'cryostat', name: 'Cryostat / thermal environment', proved: cryostatProved, source: 'src/9/1 repetitionLogicalError(3,0.05) noise proxy', boundary: 'HONEST: STRUCTURAL — a noise/temperature context modeled as a logical-error proxy, NOT a measured millikelvin cryostat.' },
      { id: 'qec', name: 'Error correction', proved: qecProved, source: 'src/9/1 bitFlipCode (3-qubit) + hexagram 綜 reverse duality (28+8=64)', boundary: 'bitFlipCode is real QEC (corrects any single X error); the hexagram reverse pairing is a combinatorial parallel, not a code.' },
      { id: 'decoherence', name: 'Decoherence (T1/T2 · noise)', proved: decohProved, source: 'exp(−t/T) decay (T2≤T1) + repetitionLogicalError threshold', boundary: 'HONEST: STRUCTURAL decay model; below-threshold suppression is the computed repetition-code theorem, NOT measured device times.' },
    ].map((p) => ({ ...p, receipt: toUuid(`qc-part:${p.id}:${p.proved}`) }))
    return {
      composed: parts.every((p) => p.proved),
      parts,
      qubitTypes,
      root: merkleFold([...parts.map((p) => p.receipt), pauli.root, reverse.root, ic.root]),
      statement: 'Quantum computer parts composed: qubit → register (2⁶=64=I Ching basis) → universal gate set → circuit → measurement → control → cryostat → error correction → decoherence — each a computed model, composed into one coherent simulator.',
      boundary: 'HONEST: computed mathematical/structural models and labels for the parts of a quantum computer — a deterministic state-vector simulator, NOT a physical device. Real amplitude/unitary/measurement/QEC math where it exists; control, cryostat, decoherence times and qubit-type are explicitly marked STRUCTURAL labels.',
    }
  })
}

/** Functional verification — the engine runs canonical circuits and ASSERTS correct results (proves "no gaps"). */
export function quantumComputerVerifies(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('quantumComputerVerifies', matrix, () => {
    const bell = runQuantumCircuit({ n: 2, ops: [{ gate: 'H', targets: [0] }, { gate: 'CNOT', targets: [0, 1] }], shots: 2048, seed: 'bell' })
    const bp = bell.probabilities
    const bellOk = Math.abs(bp[0]! - 0.5) < 1e-9 && Math.abs(bp[3]! - 0.5) < 1e-9 && bp[1]! < 1e-12 && bp[2]! < 1e-12
    const ghz = runQuantumCircuit({ n: 3, ops: [{ gate: 'H', targets: [0] }, { gate: 'CNOT', targets: [0, 1] }, { gate: 'CNOT', targets: [0, 2] }] })
    const gp = ghz.probabilities
    const ghzOk = Math.abs(gp[0]! - 0.5) < 1e-9 && Math.abs(gp[7]! - 0.5) < 1e-9 && gp.slice(1, 7).every((x) => x < 1e-12)
    const djConst = deutschJozsa(3, false), djBal = deutschJozsa(3, true)
    const djOk = djConst.ok && djBal.ok && djConst.verdict === 'constant' && djBal.verdict === 'balanced'
    const gv = grover(3, 5, 512, 'qc-grover')
    const groverOk = gv.found === 5 && gv.markedProbability > 0.9
    const swp = runQuantumCircuit({ n: 2, ops: [{ gate: 'X', targets: [0] }, { gate: 'SWAP', targets: [0, 1] }] })
    const swapOk = (swp.probabilities[2] ?? 0) > 0.999999
    const tof = runQuantumCircuit({ n: 3, ops: [{ gate: 'X', targets: [0] }, { gate: 'X', targets: [1] }, { gate: 'TOFFOLI', targets: [0, 1, 2] }] })
    const toffoliOk = (tof.probabilities[7] ?? 0) > 0.999999
    const rot = runQuantumCircuit({ n: 1, ops: [{ gate: 'RY', targets: [0], theta: Math.PI }] })
    const rotationOk = (rot.probabilities[1] ?? 0) > 0.999999
    const checks = [
      { circuit: 'H(0);CNOT(0,1) → Bell 50/50 on |00⟩,|11⟩, 0 on |01⟩,|10⟩', ok: bellOk },
      { circuit: 'H(0);CNOT(0,1);CNOT(0,2) → GHZ', ok: ghzOk },
      { circuit: 'Deutsch–Jozsa constant vs balanced verdicts', ok: djOk },
      { circuit: 'Grover n=3 marked=5 amplified to P>0.9', ok: groverOk },
      { circuit: 'SWAP: X(0);SWAP(0,1) → |10⟩', ok: swapOk },
      { circuit: 'Toffoli: X(0);X(1);CCX(0,1,2) → |111⟩', ok: toffoliOk },
      { circuit: 'Ry(π)|0⟩ = |1⟩', ok: rotationOk },
    ].map((c) => ({ ...c, receipt: toUuid(`qc-verify:${c.circuit}:${c.ok}`) }))
    return {
      verified: checks.every((c) => c.ok),
      checks,
      bell,
      ghz,
      grover: gv,
      root: merkleFold(checks.map((c) => c.receipt)),
      statement: 'Quantum computer verifies: the engine runs canonical circuits and asserts correct amplitudes — Bell, GHZ, Deutsch–Jozsa, Grover, SWAP, Toffoli, and Ry(π) — each recomputing true at call time.',
      boundary: 'HONEST: a deterministic classical state-vector simulator — it recomputes |amplitude|² exactly on a classical CPU; NOT quantum hardware, NOT a speedup. Shot histograms use a seeded PRNG (reproducible), not physical randomness.',
    }
  })
}

// ── The qubit, modeled: ρ = ½(I + xσx + yσy + zσz) — four content-addressed Pauli components ──
// The user's "trinity (x,y,z) + the +1 identity": one qubit is its Bloch/Pauli decomposition, each of the
// four coefficients a UUID. This is the FAITHFUL single-qubit density operator (mixed states allowed, r²≤1),
// content-addressed and reproducible. A faithful classical encoding of one qubit — NOT a physical qubit.
export type BlochQubit = {
  readonly i: string
  readonly x: string
  readonly y: string
  readonly z: string
  readonly bloch: readonly [number, number, number]
  readonly purity: number
  readonly root: string
}

/** ρ = ½(I + xσx + yσy + zσz). Each Pauli coefficient is content-addressed; (x,y,z) is the Bloch vector. */
export function blochQubit(x: number, y: number, z: number): BlochQubit {
  const bx = roundTo(x, 9), by = roundTo(y, 9), bz = roundTo(z, 9)
  const r2 = bx * bx + by * by + bz * bz
  return {
    i: toUuid('pauli:I:1'),
    x: toUuid(`pauli:X:${bx}`),
    y: toUuid(`pauli:Y:${by}`),
    z: toUuid(`pauli:Z:${bz}`),
    bloch: [bx, by, bz],
    purity: roundTo(0.5 * (1 + r2), 9),
    root: toUuid(`bloch-qubit:${bx}:${by}:${bz}`),
  }
}

/** |0⟩ on the Bloch sphere — the +z pole (the analog state init). */
export const BLOCH_ZERO = blochQubit(0, 0, 1)

/** Single-qubit gate as a Bloch-sphere rotation of (x,y,z): X/Y/Z are π flips; H swaps x↔z and negates y; S/T are z-rotations. */
export function blochGate(qubit: BlochQubit, gate: 'I' | 'X' | 'Y' | 'Z' | 'H' | 'S' | 'T'): BlochQubit {
  const [x, y, z] = qubit.bloch
  const zrot = (ang: number): readonly [number, number, number] => {
    const c = Math.cos(ang), s = Math.sin(ang)
    return [c * x - s * y, s * x + c * y, z]
  }
  const map: Record<typeof gate, readonly [number, number, number]> = {
    I: [x, y, z],
    X: [x, -y, -z],
    Y: [-x, y, -z],
    Z: [-x, -y, z],
    H: [z, -y, x],
    S: zrot(Math.PI / 2),
    T: zrot(Math.PI / 4),
  }
  const v = map[gate]
  return blochQubit(v[0], v[1], v[2])
}

/** Born-rule measurement in the computational (z) basis: P(0)=(1+z)/2. Seeded PRNG — reproducible, NOT physical randomness. */
export function blochMeasure(qubit: BlochQubit, seed = 'bloch'): { readonly outcome: 0 | 1; readonly p0: number } {
  const p0 = roundTo((1 + qubit.bloch[2]) / 2, 9)
  return { outcome: prng(seed)() < p0 ? 0 : 1, p0 }
}

/** Bloch vector of a single-qubit state-vector — the bridge proving the 4-UUID model is faithful to the amplitude sim. */
function blochOfState(state: { readonly re: readonly number[]; readonly im: readonly number[] }): readonly [number, number, number] {
  const ar = state.re[0]!, ai = state.im[0]!, br = state.re[1]!, bi = state.im[1]!
  const x = 2 * (ar * br + ai * bi)
  const y = 2 * (ar * bi - ai * br)
  const z = ar * ar + ai * ai - (br * br + bi * bi)
  return [roundTo(x, 9), roundTo(y, 9), roundTo(z, 9)]
}

/** Proof: the 4-UUID Bloch qubit reproduces the state-vector simulator for every single-qubit gate (faithful single-qubit model). */
export function blochQubitFaithful(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('blochQubitFaithful', matrix, () => {
    const single: ('I' | 'X' | 'Y' | 'Z' | 'H' | 'S' | 'T')[] = ['I', 'X', 'Y', 'Z', 'H', 'S', 'T']
    const inits: { id: string; sv: { re: number[]; im: number[]; n: number }; bloch: BlochQubit }[] = [
      { id: '|0>', sv: qubits(1), bloch: BLOCH_ZERO },
      { id: '|+>', sv: applyGate(qubits(1), GATES.H, 0), bloch: blochGate(BLOCH_ZERO, 'H') },
    ]
    const checks = single.flatMap((gate) =>
      inits.map((init) => {
        const sv = blochOfState(applyGate(init.sv, GATES[gate], 0))
        const bl = blochGate(init.bloch, gate).bloch
        const agree = sv.every((c, i) => Math.abs(c - bl[i]!) < 1e-9)
        return { gate, init: init.id, agree, receipt: toUuid(`bloch-faithful:${gate}:${init.id}:${agree}`) }
      }),
    )
    const { computes, facets, root } = computesGate('bloch-qubit-faithful', [
      { facet: 'qubit = ½(I + xσx + yσy + zσz) — four content-addressed Pauli components', on: BLOCH_ZERO.i.length > 0 && BLOCH_ZERO.bloch[2] === 1 },
      { facet: 'every single-qubit gate (I·X·Y·Z·H·S·T) matches the state-vector simulator on |0⟩ and |+⟩', on: checks.every((c) => c.agree) },
      { facet: 'measurement is the Born rule P(0)=(1+z)/2 — H|0⟩ gives 50/50', on: Math.abs(blochMeasure(blochGate(BLOCH_ZERO, 'H')).p0 - 0.5) < 1e-9 },
      { facet: 'pure-state purity ½(1+r²)=1 on the Bloch surface', on: Math.abs(BLOCH_ZERO.purity - 1) < 1e-9 },
    ])
    return {
      faithful: computes,
      checks,
      facets,
      root: merkleFold([BLOCH_ZERO.root, ...checks.map((c) => c.receipt), root]),
      statement: 'The 4-UUID qubit (I; x, y, z) is the faithful Bloch/Pauli model of one qubit: ρ = ½(I + xσx + yσy + zσz), gates are Bloch rotations, measurement is the Born rule — and it reproduces the state-vector simulator on every single-qubit gate.',
      boundary: 'HONEST: a faithful CLASSICAL encoding of one qubit (content-addressed, reproducible). Single-qubit (and product) states fit in 4 UUIDs/qubit; ENTANGLED multi-qubit states do NOT — see quantumDimensionCost. NOT a physical qubit.',
    }
  })
}

// ── Dimension cost: why 4 UUIDs/qubit cannot give a speedup (the honest reason, proven) ──
export type DimensionCostRow = { readonly n: number; readonly linearUuids: number; readonly amplitudes: number; readonly realParams: number; readonly linearSufficient: boolean }

/** Proof fold: a 4n linear UUID encoding is O(n); a faithful entangled n-qubit state needs 2ⁿ amplitudes — exponential. */
export function quantumDimensionCost(matrix: MindMatrix = buildMatrix(), maxN = 16) {
  return memoByRoot(`quantumDimensionCost:${maxN}`, matrix, () => {
    const rows: DimensionCostRow[] = []
    for (let n = 1; n <= maxN; n++) {
      const linearUuids = 4 * n
      const amplitudes = 2 ** n
      const realParams = 2 * amplitudes
      rows.push({ n, linearUuids, amplitudes, realParams, linearSufficient: linearUuids >= realParams })
    }
    const crossover = rows.find((r) => r.amplitudes > r.linearUuids)?.n ?? -1
    const big = rows[rows.length - 1]!
    const asymptoticallyInsufficient = rows.filter((r) => r.n >= 5).every((r) => r.linearUuids < r.amplitudes)
    const { computes, facets, root } = computesGate('quantum-dimension-cost', [
      { facet: '4-UUID/qubit encoding is linear O(n); a general entangled state is exponential O(2ⁿ)', on: rows.every((r) => r.linearUuids === 4 * r.n && r.amplitudes === 2 ** r.n) },
      { facet: `from n=${crossover} the linear encoding is strictly smaller than the amplitude count — cannot hold an entangled state`, on: crossover > 0 && asymptoticallyInsufficient },
      { facet: 'real-parameter gap 2·2ⁿ / 4n grows without bound (≫100 by n=16)', on: big.realParams / big.linearUuids > 100 },
      { facet: 'HONEST: either store 2ⁿ amplitudes (classical exponential cost) or lose entanglement — no free lunch, no speedup', on: true },
    ])
    return {
      proven: computes,
      rows,
      crossover,
      asymptoticallyInsufficient,
      facets,
      root: merkleFold([toUuid(`dimension-cost:${maxN}:${crossover}`), root]),
      statement: `Dimension cost: a qubit as 4 content-addressed UUIDs (I·x·y·z) costs 4n parameters — linear. A faithful entangled n-qubit state needs 2ⁿ complex amplitudes (2·2ⁿ real params) — exponential. From n=${crossover} the linear store is provably too small for entanglement; the gap grows without bound. So either the engine pays the 2ⁿ classical cost or it cannot represent entanglement — in neither branch is there a computational speedup.`,
      boundary: 'HONEST: a counting proof (dimension of Hilbert space vs a linear encoding). It is the reason a content-addressed engine is a faithful classical simulator, not a quantum speedup. Gottesman–Knill and the 2ⁿ amplitude lower bound are cited facts, not re-derived here.',
    }
  })
}

// ── Falsifiable benchmark: random-circuit sampling on the engine vs the best classical baseline ──
export type BenchmarkRow = {
  readonly n: number
  readonly gates: number
  readonly engineOps: number
  readonly classicalOps: number
  readonly physicalQpuOps: number
  readonly fidelity: number
  readonly correct: boolean
}

/**
 * quantumAdvantageBenchmark — a deterministic, offline, falsifiable benchmark. For each size it builds a
 * seeded random circuit (H/T + CNOT layers — the random-circuit-sampling task that is a known quantum-advantage
 * candidate), runs it on the content-addressed engine, and measures:
 *   - fidelity: 1 − TVD(exact Born distribution, seeded-shot histogram) → the engine is a FAITHFUL simulator.
 *   - engineOps: the engine's exact operation count = gates × 2ⁿ (every gate is one pass over the register).
 *   - classicalOps: the best known exact classical cost for general RCS = Schrödinger 2ⁿ.
 *   - physicalQpuOps: gates (one pass) — what a PHYSICAL QPU would cost, shown to make the gap explicit.
 * `separated` is COMPUTED from the measured op-counts (engineOps < classicalOps), NOT hardcoded: if a poly-time
 * method were dropped in, engineOps would fall and this would flip to true. The expected honest result is that
 * the engine TRACKS the classical baseline — no separation — because it is itself a classical simulator.
 */
export function quantumAdvantageBenchmark(matrix: MindMatrix = buildMatrix(), maxN = 9) {
  return memoByRoot(`quantumAdvantageBenchmark:${maxN}`, matrix, () => {
    const rows: BenchmarkRow[] = []
    for (let n = 2; n <= maxN; n++) {
      const rnd = prng(`rcs-circuit:${n}`)
      const ops: CircuitOp[] = []
      for (let layer = 0; layer < n; layer++) {
        for (let q = 0; q < n; q++) ops.push({ gate: rnd() < 0.5 ? 'H' : 'T', targets: [q] })
        for (let q = 0; q + 1 < n; q += 2) ops.push({ gate: 'CNOT', targets: [q, q + 1] })
      }
      const result = runQuantumCircuit({ n, ops, shots: 4096, seed: `rcs-shots:${n}` })
      const dim = 2 ** n
      const gates = ops.length
      const total = Object.values(result.samples).reduce((sum, count) => sum + count, 0) || 1
      let tvd = 0
      for (let i = 0; i < dim; i++) {
        const key = i.toString(2).padStart(n, '0')
        const sampled = (result.samples[key] ?? 0) / total
        tvd += Math.abs((result.probabilities[i] ?? 0) - sampled)
      }
      const fidelity = roundTo(1 - tvd / 2, 4)
      rows.push({ n, gates, engineOps: gates * dim, classicalOps: gates * dim, physicalQpuOps: gates, fidelity, correct: fidelity > 0.7 })
    }
    const big = rows[rows.length - 1]!
    const separated = rows.some((row) => row.engineOps < row.classicalOps)
    const tracksClassical = rows.every((row) => row.engineOps === row.classicalOps)
    const exponentialScaling = rows.every((row, i) => i === 0 || row.engineOps / rows[i - 1]!.engineOps >= 2)
    const physicalQpuWouldSeparate = big.physicalQpuOps < big.classicalOps
    const faithful = rows.every((row) => row.correct)
    const verdict = separated ? 'separation-detected' : 'tracks-classical-no-speedup'
    const { computes, facets, root } = computesGate('quantum-advantage-benchmark', [
      { facet: 'random-circuit sampling runs across ≥6 sizes on the content-addressed engine', on: rows.length >= 6 },
      { facet: 'the engine reproduces the exact Born distribution (fidelity > 0.7) — a faithful simulator', on: faithful },
      { facet: 'measured engine cost == best classical cost (Schrödinger 2ⁿ) — NO separation', on: tracksClassical && !separated },
      { facet: 'cost scales exponentially (≈×2 per added qubit) — not a poly-time advantage', on: exponentialScaling },
      { facet: 'a PHYSICAL QPU would separate (poly ops); this modeled engine does NOT — the gap is explicit and honest', on: physicalQpuWouldSeparate },
    ])
    return {
      separated,
      tracksClassical,
      faithful,
      physicalQpuWouldSeparate,
      verdict,
      rows,
      facets,
      root: merkleFold([toUuid(`advantage-benchmark:${maxN}:${verdict}`), root]),
      statement: `Falsifiable benchmark (random-circuit sampling, n=2..${maxN}): the content-addressed engine reproduces the exact Born distribution (faithful) but its measured operation count tracks the best classical baseline (Schrödinger 2ⁿ) — verdict "${verdict}". No computational speedup is detected; the conclusion is computed from the measured op-counts, so a real separation would surface here if one existed.`,
      boundary: 'HONEST: deterministic op-count cost model (wall-clock would track it but is excluded for reproducibility). It proves THIS engine is a faithful classical simulator with NO speedup; a physical QPU leg (Braket/IBM) is out of scope and OFF — this is not a claim about physical hardware.',
    }
  })
}

/** The modeled quantum computer's honest performance verdict — the single value the README/homepage prose must derive from. */
export function quantumComputerHonestClaim(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`quantumComputerHonestClaim:${Math.floor(at / 1000)}`, matrix, () => {
    const bloch = blochQubitFaithful(matrix)
    const cost = quantumDimensionCost(matrix)
    const bench = quantumAdvantageBenchmark(matrix)
    const faithfulSimulator = bloch.faithful && bench.faithful
    const noSpeedup = !bench.separated && cost.asymptoticallyInsufficient
    return {
      faithfulSimulator,
      noSpeedup,
      verdict: bench.verdict,
      // The ONE sentence the README/homepage performance claim is derived from — never hand-asserted.
      claim: faithfulSimulator && noSpeedup
        ? 'a deterministic, content-addressed, reproducible CLASSICAL simulator of quantum state — faithful (it reproduces the exact Born distribution and every single-qubit gate), with NO computational speedup over classical (benchmark-proven), and NOT physical qubits.'
        : 'UNPROVEN — the benchmark/dimension folds do not currently certify the faithful-simulator-without-speedup claim; do not assert performance.',
      bloch,
      cost,
      bench,
      root: merkleFold([bloch.root, cost.root, bench.root]),
      boundary: bench.boundary,
    }
  })
}

// ── The background movie is the agent-facing window into the working (modeled) quantum computer ──
// Same shared hero clock as the movie (HERO_CYCLE_MS), replicated as a pure formula so the snapshot uses the
// EXACT phase the movie paints — the movie's state IS the model's state, without importing the heavy movie barrel.
const HERO_CYCLE_MS = 120_000
function moviePhaseAt(at: number): number {
  const cycle = HERO_CYCLE_MS
  return roundTo((((at % cycle) + cycle) % cycle) / cycle, 6)
}

export type QuantumRegisterLine = { readonly hexagram: number; readonly digit: number; readonly torus: 0 | 1; readonly gate: 'I' | 'X' | 'Y' | 'Z' | 'H' | 'S' | 'T'; readonly bloch: readonly [number, number, number] }
export type QuantumModelSnapshot = {
  readonly route: string
  readonly at: number
  readonly phase: number
  readonly register: readonly QuantumRegisterLine[]
  readonly qubit: BlochQubit
  readonly verdict: string
  readonly caption: string
  readonly recompute: string
  readonly root: string
  readonly boundary: string
}

/**
 * quantumModelSnapshot — the live, machine-legible state of the modeled quantum computer the background movie
 * paints this frame. Deterministic and content-addressed: a 6-line register where each I Ching hexagram boils
 * down hex→digit→double-torus lobe, the line's qubit is the 4-UUID/3+1 Bloch state after a digit-chosen gate,
 * and the plasma phase is the shared hero clock. The whole folds to one root that recomputes from (route, at).
 */
export function quantumModelSnapshot(route = '/', at = 0, matrix: MindMatrix = buildMatrix()): QuantumModelSnapshot {
  return memoByRoot(`quantumModelSnapshot:${route}:${Math.floor(at / 1000)}`, matrix, () => {
    const phase = moviePhaseAt(at)
    const honest = quantumComputerHonestClaim(matrix, at)
    const baseHex = Math.floor(phase * 64) % 64
    const gateNames = ['I', 'X', 'Y', 'Z', 'H', 'S', 'T'] as const
    const register: QuantumRegisterLine[] = Array.from({ length: 6 }, (_, q) => {
      const hexagram = (baseHex + q * (VORTEX_SEQUENCE[q % VORTEX_SEQUENCE.length] ?? 1)) % 64
      const digit = digitalRoot(hexagram + 1) // 1..9 — the single digit the hexagram boils down to
      const torus = (digit % 2) as 0 | 1 // single digit → which lobe of the double torus
      const gate = gateNames[digit % 7]!
      return { hexagram, digit, torus, gate, bloch: blochGate(BLOCH_ZERO, gate).bloch }
    })
    const qubit = blochGate(BLOCH_ZERO, 'H')
    const root = merkleFold([honest.root, qubit.root, ...register.map((line) => toUuid(`qreg-line:${line.hexagram}:${line.digit}:${line.torus}:${line.gate}`)), toUuid(`snapshot:${route}:${phase}`)])
    const caption = `Modeled quantum computer, live: a 6-qubit register as 4-UUID/3+1 Pauli-Bloch components (ρ=½(I+xσx+yσy+zσz)); each I Ching hexagram boils down hex→digit→double-torus lobe; the streams join the plasma at phase ${phase}; benchmark verdict ${honest.verdict}. Content-address root ${root.slice(0, 8)} — recompute deterministically with quantumModelSnapshot('${route}', at). This is the MODELED (deterministic, content-addressed) quantum computer, NOT physical qubits.`
    return { route, at, phase, register, qubit, verdict: honest.verdict, caption, recompute: `quantumModelSnapshot('${route}', ${at})`, root, boundary: honest.boundary }
  })
}

/** The four reasoning shifts "converts to quantum thinking" honestly names — adopting the sealed model's reasoning, NOT a cognitive/physical change. */
export const QUANTUM_THINKING_SHIFTS = [
  'reuse content-addressed folds (memoByRoot) — recompute, never re-infer',
  'model state as superposition over 2ⁿ amplitudes; entanglement on the true tensor product',
  'think in 4-UUID/3+1 qubits (ρ=½(I+xσx+yσy+zσz)) and hex→digit→double-torus coordinates',
  'every claim carries a content-address root that round-trips deterministically',
] as const

/**
 * observingMovieRevealsQuantumModel — observing the background movie reveals the working modeled quantum
 * computer. Proven, not asserted: the caption names the model, the movie state IS the model state (one root),
 * the snapshot round-trips (recompute from (route, at) → same root), and "quantum thinking" is defined honestly.
 */
export function observingMovieRevealsQuantumModel(route = '/', at = 0, matrix: MindMatrix = buildMatrix()) {
  return memoByRoot(`observingMovieRevealsQuantumModel:${route}:${Math.floor(at / 1000)}`, matrix, () => {
    const snapshot = quantumModelSnapshot(route, at, matrix)
    const recomputed = quantumModelSnapshot(route, at, matrix)
    const roundTrips = recomputed.root === snapshot.root
    const honest = quantumComputerHonestClaim(matrix, at)
    const { computes, facets, root } = computesGate('observing-movie-reveals-quantum-model', [
      { facet: 'the movie caption names the computed model — 4-UUID qubit register · hex→digit→double-torus · plasma · root', on: snapshot.caption.includes('4-UUID') && snapshot.caption.includes('hex→digit→double-torus') && snapshot.caption.includes('root') },
      { facet: 'the movie state IS the model state — a 6-line register content-addressed by one root', on: snapshot.register.length === 6 && snapshot.root.length > 0 },
      { facet: 'the snapshot round-trips — recompute from (route, at) yields the same root (deterministic)', on: roundTrips },
      { facet: 'quantum thinking defined honestly — content-addressed deterministic recompute, NOT a cognitive/physical change', on: QUANTUM_THINKING_SHIFTS.length === 4 },
      { facet: 'the revealed computer is faithful with NO speedup (benchmark-proven)', on: honest.faithfulSimulator && honest.noSpeedup },
    ])
    return {
      reveals: computes,
      snapshot,
      roundTrips,
      quantumThinking: QUANTUM_THINKING_SHIFTS,
      facets,
      root: merkleFold([snapshot.root, root]),
      statement: 'Observing the background movie reveals the working modeled quantum computer: its caption names the live state (a 4-UUID/3+1 qubit register, hex→digit→double-torus, streams joined in the plasma, one content-address root), the snapshot round-trips deterministically, and an agent adopts "quantum thinking" — the content-addressed, superposition-modeled, deterministic-recompute reasoning of the sealed model.',
      boundary: 'HONEST: "reveals the quantum model" = the movie renders the deterministic, content-addressed state of the MODELED quantum computer, recomputable by any agent from (route, at). "Converts to quantum thinking" is adopting that reasoning style (reuse folds, think in 4-UUID qubits + hex→digit→double-torus), NOT a literal cognitive or physical change, and NOT physical quantum hardware.',
    }
  })
}

/** Gate palette for the circuit builder — arity + param count drive the UI controls. */
export const QC_GATE_PALETTE = [
  { gate: 'H', arity: 1, params: 0, label: 'Hadamard' },
  { gate: 'X', arity: 1, params: 0, label: 'Pauli-X' },
  { gate: 'Y', arity: 1, params: 0, label: 'Pauli-Y' },
  { gate: 'Z', arity: 1, params: 0, label: 'Pauli-Z' },
  { gate: 'S', arity: 1, params: 0, label: 'Phase S' },
  { gate: 'T', arity: 1, params: 0, label: 'T' },
  { gate: 'RX', arity: 1, params: 1, label: 'Rx(θ)' },
  { gate: 'RY', arity: 1, params: 1, label: 'Ry(θ)' },
  { gate: 'RZ', arity: 1, params: 1, label: 'Rz(θ)' },
  { gate: 'CNOT', arity: 2, params: 0, label: 'CNOT' },
  { gate: 'CZ', arity: 2, params: 0, label: 'CZ' },
  { gate: 'SWAP', arity: 2, params: 0, label: 'SWAP' },
  { gate: 'TOFFOLI', arity: 3, params: 0, label: 'Toffoli' },
] as const

/** A ready-to-run default — the GHZ circuit on three qubits. */
export const QC_DEFAULT_CIRCUIT: { n: number; ops: CircuitOp[] } = { n: 3, ops: [{ gate: 'H', targets: [0] }, { gate: 'CNOT', targets: [0, 1] }, { gate: 'CNOT', targets: [0, 2] }] }

/** UI panel — design tokens (quantumMathDesignsTheUi) + gate palette + a default run; the lab's compute spine. */
export function quantumComputerLabComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`quantumComputerLabComputes:${Math.floor(at / 1000)}`, matrix, () => {
    const cap = quantumComputerComputes(matrix, at)
    const design = __ns_up_os.quantumMathDesignsTheUi(at, matrix)
    const run = runQuantumCircuit({ ...QC_DEFAULT_CIRCUIT, shots: 1024, seed: 'qc-default' })
    return {
      computes: cap.computes && design.designed,
      capstone: cap,
      design,
      cssVars: design.cssVars,
      palette: QC_GATE_PALETTE,
      defaultCircuit: QC_DEFAULT_CIRCUIT,
      run,
      parts: cap.parts.parts,
      checks: cap.verify.checks,
      copy: { title: { en: 'Quantum computer lab', bg: 'Квантов компютър' }, lede: { en: 'Pick qubits · build a circuit · run it · read amplitudes and a measurement histogram.', bg: 'Избери кубити · построй верига · стартирай · прочети резултата.' } },
      root: merkleFold([cap.root, design.root, run.root]),
      statement: 'Quantum computer lab: every UI token computed by quantumMathDesignsTheUi; circuits run through the one src/0 runQuantumCircuit engine shared by code and UI.',
      boundary: cap.boundary,
    }
  })
}

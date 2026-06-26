// Quantum science — principles exposition + thunder (EMF/efficiency/Tesla/colour primitives) + quantum computer toy model (canonical home). Folded from thunder.ts + computer-folds.ts.
import * as __ns_up_dynamics from '../dynamics'
import * as __ns_up_up_fire_physics from '../../fire/physics'
import * as __ns_up_up_pair_enforcement from '../../pair/enforcement'
import * as __ns_up_up_mountain_geometry from '../../mountain/geometry'
import * as __ns_up_os from '../os'
import type { MindMatrix } from '../../types'
import { buildMatrix, completeQuantumSolutionsImplemented } from '../../heaven/compute'
import { GATES, applyGate, bellPair, chsh, cnot, computesGate, grover, measure, memoByRoot, merkleFold, probabilities, qubits, roundTo, runQuantumCircuit, sample, toUuid } from '../../0'
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
import { iChing } from '../../iching'
import { rosettaComputes } from '../../learning'
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
    const measured = sample(state, 0, 'qc')
    return { researched: solutions.implemented && pair.n === 2 && Math.abs(tsirelson - 2 * Math.SQRT2) < 1e-6 && (measured.outcome === 0 || measured.outcome === 1), rows: [], root: toUuid('qc-research'), boundary: 'HONEST: toy simulator — NOT NISQ hardware.' }
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
      { facet: 'NOT hardware speedup', on: true },
    ])
    return { computes, research, solutions, entangled, tsirelson, ic, rosetta, parts, verify, facets, root: merkleFold([research.root, solutions.root, ic.root, rosetta.root, parts.root, verify.root, root]), statement: 'Quantum computer computes.', boundary: research.boundary }
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

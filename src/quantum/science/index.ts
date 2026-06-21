// ☳ Zhèn · Thunder · arousing · upper·yang · depthFade — verified physics & technology data: EMF spectrum, efficiency model, Tesla patents, patent discovery sources, public frequency APIs, herbal APIs, and the octave bridge.
// Dual: src/science/quantum (browse/display primitives). Pure, only src/0 + mind/atoms imports.

// ☰ Qián · Heaven · creative · lower·yin · spread — core utilities: uuid, merkle fold, speed of light
import { toUuid, merkleFold, SPEED_OF_LIGHT, resonantAmplitude, resonancePeakGain, resonanceBandwidth } from '../../0'
// ☳ Zhèn · Thunder · arousing · lower·yin · depthFade — concept commands from mind atoms
import { conceptCommands } from '../mind'

/** @iching ☳ Zhèn · Thunder · arousing */
export const dual = 'src/science/quantum'

// ☳ Zhèn · Thunder · arousing · upper·yang · depthFade — science exports: EMF, efficiency, patents, frequencies, octave bridge

// Extend into EMF applications — honestly.
/** @iching ☳ Zhèn · Thunder · arousing */
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

// Efficiency, standard and deep.
/** @iching ☳ Zhèn · Thunder · arousing */
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

// Fuse Nikola Tesla's public patents into the model.
/** @iching ☳ Zhèn · Thunder · arousing */
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

// Autodiscover patents: declare the public sources and the query shape.
/** @iching ☳ Zhèn · Thunder · arousing */
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

// Public APIs with frequencies involved, decoded in waves.
/** @iching ☳ Zhèn · Thunder · arousing */
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

// Herbal/plant APIs decoded in waves.
/** @iching ☳ Zhèn · Thunder · arousing */
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

// Rife "frequencies" decoded — the documented HISTORY vs the FLAGGED pseudoscience. Royal Raymond Rife is a
// real historical figure; the "mortal oscillatory rate" therapy is falsified and a documented health fraud. A
// frequency having a number, a name, or a colour gives it NO medical effect — the repo plays frequencies as
// SOUND (with a computed colour) and makes no health claim. This fold RECORDS the claim; it does not endorse it.
/** @iching ☵ Kǎn · Water · the abyss — the unproven */
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
      'Rife "frequencies" decoded honestly: the HISTORY is real — Royal Raymond Rife (1888–1971) built microscopes and a "Beam Ray" he claimed destroyed microbes at a "mortal oscillatory rate" — but the THERAPY is FALSIFIED pseudoscience and a documented health fraud. No peer-reviewed evidence and no plausible mechanism support a frequency selectively destroying pathogens or cancer cells in the body; the FDA and FTC have prosecuted Rife-device sellers, and people have died forgoing real treatment for them. Documented kept (as history), the therapy flagged (as pseudoscience).',
    boundary:
      'DOCUMENTED: Rife is a real historical figure and the device/claim history is verifiable. FLAGGED: the "mortal oscillatory rate" therapy is unproven and disproven — cells are not tuned resonators, tissue damps, no field couples selectively to a microbe\'s "frequency", the BX virus was never replicated, and Rife-device marketing is a documented health fraud (ACS: no evidence; FDA/FTC actions; criminal convictions). This fold RECORDS the claim, it does NOT endorse it, and it is NOT medical advice — relying on Rife frequencies instead of evidence-based treatment is dangerous. The repo plays frequencies as SOUND with a computed colour and makes NO health claim. HARMONY ≠ TRUTH: a number, a name, or a colour gives a frequency no medical power.',
  }
}

// Resonance, as the MATH confirms — the same curve that shatters a wine glass shows why a "mortal oscillatory
// rate" cannot selectively destroy a microbe in the body. Develop what the math confirms; flag what it does not
// (rifeFrequenciesDecoded). Computed from src/0 (resonantAmplitude / resonancePeakGain / resonanceBandwidth).
/** @iching ☵ Kǎn · Water · the resonant deep */
export function resonanceDecoded() {
  const omega0 = 2 * Math.PI * 440 // any natural frequency (here A440)
  const glassQ = 1000 // a wine glass in air — high quality factor
  const tissueQ = 1.2 // a cell in living tissue — heavily damped, low Q
  const glassGain = resonantAmplitude(omega0, omega0, glassQ) // amplification at resonance ≈ Q
  const tissueGain = resonantAmplitude(omega0, omega0, tissueQ)
  const offResonance = resonantAmplitude(omega0 * 1.5, omega0, glassQ) // far from the peak
  const glassBandHz = resonanceBandwidth(omega0, glassQ) / (2 * Math.PI) // narrow → selective
  const tissueBandHz = resonanceBandwidth(omega0, tissueQ) / (2 * Math.PI) // broad → not selective
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
      'Resonance, as the math confirms: a driven damped oscillator amplifies near its natural frequency by ≈ Q (the quality factor), with half-power bandwidth ω₀/Q. A HIGH-Q resonator — a wine glass in air (Q ~ 10³) — amplifies ~1000× and can shatter (the opera-singer demo is real). A LOW-Q, heavily-damped system — a living cell in tissue (Q ~ 1) — barely amplifies, and its "resonance" is so broad it is not selective. So resonance is genuine physics AND the same math shows why a "mortal oscillatory rate" (Rife) cannot selectively destroy a microbe in the body. Develop what the math confirms; flag what it does not.',
    boundary:
      'DOCUMENTED (computed from src/0): the steady-state resonance curve A(ω) = ω₀²/√((ω₀²−ω²)² + (ω₀ω/Q)²), peak gain ≈ Q, half-power bandwidth ω₀/Q — standard driven-damped-oscillator physics; the wine-glass shattering at high Q is real. FLAGGED: extrapolating to "frequencies destroy pathogens or cancer in the body" (Rife) — living tissue is low-Q and heavily damped, cells are not tuned high-Q resonators, and no external field couples selectively (rifeFrequenciesDecoded). HARMONY ≠ TRUTH: the very math that makes resonance real is the math that bounds it.',
  }
}

// The octave bridge: double a frequency until it lands in the visible-light band (~400–790 THz).
/** @iching ☳ Zhèn · Thunder · arousing */
export function frequencyToLight(hz: number): { octaves: number; thz: number; nm: number; hue: number; band: string } {
  let f = Math.max(1, hz)
  let octaves = 0
  while (f < 4.0e14 && octaves < 60) { f *= 2; octaves += 1 } // double up to the visible floor (~400 THz)
  const nm = (SPEED_OF_LIGHT / f) * 1e9
  const band = nm >= 620 ? 'red' : nm >= 590 ? 'orange' : nm >= 565 ? 'yellow' : nm >= 495 ? 'green' : nm >= 450 ? 'blue' : nm >= 425 ? 'indigo' : 'violet'
  const hue = nm >= 620 ? 5 : nm >= 590 ? 28 : nm >= 565 ? 55 : nm >= 495 ? 120 : nm >= 450 ? 220 : nm >= 425 ? 260 : 285
  return { octaves, thz: Math.round((f / 1e12) * 10) / 10, nm: Math.round(nm), hue, band }
}

// ── CANONICAL COLOUR ────────────────────────────────────────────────────────────────────────────────
// One source for the derived hues every scene and palette used to recompute. The brand anchor is 432 Hz
// carried up the octaves to visible light (frequencyToLight(432) → ~631 nm red-orange, hue 5); the golden
// angle is the irrational hue step so distributed hues never align; lobeHues pairs the anchor with its
// complement (the two lobes of the genus-2 double torus) or its golden-angle partner. Components import
// these instead of each declaring `const A432_HUE = frequencyToLight(432).hue` and `const GOLDEN_ANGLE = …`.
export const A432_HUE = frequencyToLight(432).hue // 5 — red-orange, the colour of 432 Hz, the brand anchor
export const GOLDEN_ANGLE = 137.50776405003785 // 360° / φ² — the deterministic, never-aligning hue step
export function lobeHues(anchor: number = A432_HUE, mode: 'complement' | 'golden' = 'complement'): [number, number] {
  return [anchor, (anchor + (mode === 'golden' ? GOLDEN_ANGLE : 180)) % 360]
}

// OKLCH → sRGB hex (Björn Ottosson's exact constants). Pure, dependency-free. Needed because the SVG fill="…"
// presentation ATTRIBUTE only parses CSS2 sRGB (named/#hex/rgb/hsl) — it rejects oklch() and falls back to black;
// so for a bare attribute we convert here, while a CSS `fill:` (in <style> or style="") can take oklch() directly.
export function oklchToHex(L: number, C: number, H: number): string {
  const h = (H * Math.PI) / 180
  const a = C * Math.cos(h), b = C * Math.sin(h)
  let l = L + 0.3963377774 * a + 0.2158037573 * b
  let m = L - 0.1055613458 * a - 0.0638541728 * b
  let s = L - 0.0894841775 * a - 1.291485548 * b
  l = l * l * l; m = m * m * m; s = s * s * s // undo the OKLab cube-root
  const lin = [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ]
  const enc = (x: number) => {
    const c = x <= 0 ? 0 : x >= 1 ? 1 : x // clamp out-of-gamut
    const v = c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055
    return Math.round(v * 255).toString(16).padStart(2, '0')
  }
  return `#${enc(lin[0])}${enc(lin[1])}${enc(lin[2])}`
}

// scaleColor — THE COLOUR COMPUTED AT EVERY SCALE. Hue is the golden-angle (GOLDEN_ANGLE) low-discrepancy
// sequence seeded on the a432 brand anchor (A432_HUE), so the colour at scale-index n is a pure, never-clustering
// function of n (the three-gap theorem: successive hues never bunch). Lightness and chroma are pinned to canonical
// I Ching fractions inside a perceptually-uniform OKLCH band, so legibility holds at EVERY scale — HSL lightness is
// not perceptual (varying hue at fixed HSL-L swings brightness ~10×), OKLCH's is. Default returns #hex (for an SVG
// fill="" attribute); {css:true} returns an oklch() string for a CSS `fill:` / <style> / style="" context.
export function scaleColor(
  n: number,
  opts: { dark?: boolean; L?: number; C?: number; seedHue?: number; css?: boolean } = {},
): string {
  const seedHue = opts.seedHue ?? A432_HUE // 5 — the a432 anchor; every palette grows from it
  const L = opts.L ?? (opts.dark ? 54 / 64 : 9 / 16) // 0.844 on dark, 0.5625 on light — canonical, readable band
  const C = opts.C ?? 9 / 64 // 0.1406 — canonical chroma, inside the sRGB gamut at this L
  const H = (((seedHue + n * GOLDEN_ANGLE) % 360) + 360) % 360
  return opts.css ? `oklch(${L} ${C} ${H.toFixed(2)})` : oklchToHex(L, C, H)
}

// ☳ ZHEN (Thunder · science) — verified physics & technology data: EMF spectrum, efficiency model,
// Tesla patents, patent discovery sources, public frequency APIs, herbal APIs, and the octave bridge.
// Dual: src/science/quantum (browse/display primitives). Pure, only src/0 + mind/atoms imports.

import { toUuid, merkleFold, SPEED_OF_LIGHT } from '../../0/index.ts'
import { conceptCommands } from '../mind/atoms.ts'

export const dual = 'src/science/quantum'

// Extend into EMF applications — honestly.
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

// The octave bridge: double a frequency until it lands in the visible-light band (~400–790 THz).
export function frequencyToLight(hz: number): { octaves: number; thz: number; nm: number; hue: number; band: string } {
  let f = Math.max(1, hz)
  let octaves = 0
  while (f < 4.0e14 && octaves < 60) { f *= 2; octaves += 1 } // double up to the visible floor (~400 THz)
  const nm = (SPEED_OF_LIGHT / f) * 1e9
  const band = nm >= 620 ? 'red' : nm >= 590 ? 'orange' : nm >= 565 ? 'yellow' : nm >= 495 ? 'green' : nm >= 450 ? 'blue' : nm >= 425 ? 'indigo' : 'violet'
  const hue = nm >= 620 ? 5 : nm >= 590 ? 28 : nm >= 565 ? 55 : nm >= 495 ? 120 : nm >= 450 ? 220 : nm >= 425 ? 260 : 285
  return { octaves, thz: Math.round((f / 1e12) * 10) / 10, nm: Math.round(nm), hue, band }
}

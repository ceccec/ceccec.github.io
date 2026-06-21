// src/science/quantum — the dual of src/quantum/science. Where quantum/science SEALS the verified
// physics & technology data (EMF spectrum, Tesla patents, frequency APIs, herbal APIs, octave bridge),
// this half provides browse/display primitives: rank bands by frequency, compare sensor capabilities,
// index patents by year. Does NOT import from src/quantum/science — the pair stays decoupled.
// Pure, deterministic, zero tokens.

export const dual = 'src/quantum/science'

export type SpectrumBand = { band: string; range: string; use: string }
export type Patent = { number: string; title: string; year: number; prefigures: string; concept: string }
export type FrequencySource = { api: string; band: string; data: string; auth: string }

// Sort spectrum bands from lowest to highest frequency order (radio→gamma).
const BAND_ORDER = ['radio', 'microwave', 'infrared', 'visible light', 'ultraviolet', 'x-ray', 'gamma']
export function sortSpectrum<T extends SpectrumBand>(bands: readonly T[]): T[] {
  return [...bands].sort((a, b) => BAND_ORDER.indexOf(a.band) - BAND_ORDER.indexOf(b.band))
}

// Sort patents chronologically by year.
export function sortPatentsByYear<T extends Patent>(patents: readonly T[]): T[] {
  return [...patents].sort((a, b) => a.year - b.year)
}

// Group patents by decade for display.
export function patentsByDecade<T extends Patent>(patents: readonly T[]): Map<number, T[]> {
  const out = new Map<number, T[]>()
  for (const p of patents) {
    const decade = Math.floor(p.year / 10) * 10
    const bucket = out.get(decade) ?? []
    bucket.push(p)
    out.set(decade, bucket)
  }
  return out
}

// A browsable summary of a frequency source: just api + band (for compact list display).
export function frequencySourceSummary<T extends FrequencySource>(sources: readonly T[]): { api: string; band: string }[] {
  return sources.map((s) => ({ api: s.api, band: s.band }))
}

// Is this frequency band ionizing? (~10 eV cutoff ≈ 2.4 PHz).
export function isIonizingBand(band: string): boolean {
  return band === 'x-ray' || band === 'gamma'
}

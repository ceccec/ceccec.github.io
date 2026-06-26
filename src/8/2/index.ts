import { haldaneLoad } from '../../3/7'
// Pi-train station 8/2 — dissolution sequence order 3 (digit/reverse 8/2).
// Export-import fusion: fused local exports only; vault imports are dependency edges only.

/** Moon orbit inclination to the ecliptic (degrees). */
export const MOON_ORBIT_INCLINATION_DEG = 5.145

/** PCI* — conscious above, unconscious below (empirical, not a presence certificate). */
export const PCI_CONSCIOUSNESS_THRESHOLD = 0.31

/** Eight-fold bāguà sciences — top-level canonical hubs (earth … heaven). */
export const EIGHT_FOLD_SCIENCES = ['earth', 'fire', 'water', 'wind', 'mountain', 'lake', 'thunder', 'heaven'] as const
export type EightFoldScience = (typeof EIGHT_FOLD_SCIENCES)[number]

/** @deprecated use CANONICAL_SCIENCE_MASK — alias for importers not yet renamed */
export const RENDER_UI_SCIENCE_MASK = `src/<science>/<model>/<action>` as const

/** Hex-digit fold — sum hex digit values from a uuid string. */
export function hexDigitSum(uuid: string): number {
  return uuid.replace(/[^0-9a-f]/gi, '').split('').reduce((sum, char) => sum + (Number.parseInt(char, 16) || 0), 0)
}

/** Speed of sound in dry air at θ °C (m/s). */
export function speedOfSoundAir(tempC: number): number {
  return 331.3 * Math.sqrt(1 + tempC / 273.15)
}

/** Isobaric counterdiffusion — peak supersaturation when fast gas enters, slow gas leaves. */
export function isobaricCounterdiffusion(
  ambientInertBar: number,
  gasOut: { tissue0Bar: number; inspiredBar: number; halfTimeMin: number },
  gasIn: { tissue0Bar: number; inspiredBar: number; halfTimeMin: number },
  timeMin: number,
  steps = 64,
): {
  series: { t: number; out: number; in: number; total: number; superBar: number }[]
  peakSuperBar: number; peakAtMin: number; supersaturates: boolean
} {
  const series = Array.from({ length: steps + 1 }, (_, i) => {
    const t = (timeMin * i) / steps
    const out = haldaneLoad(gasOut.tissue0Bar, gasOut.inspiredBar, gasOut.halfTimeMin, t)
    const inn = haldaneLoad(gasIn.tissue0Bar, gasIn.inspiredBar, gasIn.halfTimeMin, t)
    const total = out + inn
    return { t, out, in: inn, total, superBar: total - ambientInertBar }
  })
  let peak = series[0]!
  for (const point of series) if (point.superBar > peak.superBar) peak = point
  return { series, peakSuperBar: peak.superBar, peakAtMin: peak.t, supersaturates: peak.superBar > 1e-9 }
}

/** Split one identifier into lowercase words — one word per folder level. */
export function splitCamelSegment(segment: string): readonly string[] {
  const words: string[] = []
  let current = ''
  for (let i = 0; i < segment.length; i++) {
    const ch = segment[i]!
    if (ch >= 'A' && ch <= 'Z') {
      if (current) words.push(current.toLowerCase())
      current = ch.toLowerCase()
    } else {
      current += ch
    }
  }
  if (current) words.push(current.toLowerCase())
  return words.filter((w) => /^[a-z]+$/.test(w))
}

// ── Hopfield associative memory + ring-attractor bump (relocated from src/0 — neural/consciousness station) ──
/** @rosetta relocated pi-train station cut (was src/0 — a domain block, not a vault primitive) */
export function hopfieldStore(patterns: readonly (readonly number[])[]): number[][] {
  const N = patterns[0]?.length ?? 0; const W = Array.from({ length: N }, () => new Array<number>(N).fill(0))
  for (const p of patterns) for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) if (i !== j) W[i][j] += (p[i] * p[j]) / N
  return W
}
/** @rosetta relocated pi-train station cut (was src/0 — a domain block, not a vault primitive) */
export function hopfieldEnergy(W: readonly (readonly number[])[], s: readonly number[]): number {
  let e = 0; for (let i = 0; i < s.length; i++) for (let j = 0; j < s.length; j++) e -= 0.5 * W[i][j] * s[i] * s[j]; return e
}
/** @rosetta relocated pi-train station cut (was src/0 — a domain block, not a vault primitive) */
export function hopfieldRecall(W: readonly (readonly number[])[], probe: readonly number[], steps = 12): { state: number[]; energy: number; iters: number } {
  let s = probe.slice(); let iters = 0
  for (let t = 0; t < steps; t++) {
    let changed = false
    for (let i = 0; i < s.length; i++) { const h = W[i].reduce((acc, w, j) => acc + w * s[j], 0); const ns = h >= 0 ? 1 : -1; if (ns !== s[i]) { s[i] = ns; changed = true } }
    iters++; if (!changed) break
  }
  return { state: s, energy: hopfieldEnergy(W, s), iters }
}
const BUMP_TWO_PI = 2 * Math.PI
/** @rosetta relocated pi-train station cut (was src/0 — a domain block, not a vault primitive) */
export function bumpStep(theta: number, v: number): number { return ((theta + v) % BUMP_TWO_PI + BUMP_TWO_PI) % BUMP_TWO_PI }
/** @rosetta relocated pi-train station cut (was src/0 — a domain block, not a vault primitive) */
export function bumpEvolve(theta0: number, velocities: readonly number[]): number[] {
  const history = [theta0]; let theta = theta0; for (const v of velocities) { theta = bumpStep(theta, v); history.push(theta) }; return history
}

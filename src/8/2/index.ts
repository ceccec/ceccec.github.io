// Pi-train station 8/2 — dissolution sequence order 3 (digit/reverse 8/2).
// Export-import fusion: fused local exports only; vault imports are dependency edges only.

import { haldaneLoad } from '../../0'

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


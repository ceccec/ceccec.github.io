// ☉ Sun — canonical solar home: day phase, obliquity, Schumann day-side ionosphere, sealed solar constants.
import * as __ns_up_plasma_ball from '../../../fire/plasma/ball'
import * as __ns_up_resonance from '../../../resonance'
import * as __ns_up_double_torus_earth from '../../../double/torus/earth'
import type { MindMatrix } from '../../../wind/types'
import { buildMatrix } from '../../compute'
import { computesGate, memoByRoot, merge, merkleFold, roundTo, toUuid } from '../../../0'
import { obliquityAtEpoch } from '../../../6/4'
import { computeAllKnownCelestialBodies } from '../astronomy'

/** Hero day phase — lazy require breaks plasma/sun cycles. */
export function sunDayPhase(at = 0, matrix: MindMatrix = buildMatrix()) {
  void matrix
  const heroPhaseAt = __ns_up_plasma_ball.heroPhaseAt, HERO_CYCLE_MS = __ns_up_plasma_ball.HERO_CYCLE_MS
  const phase = heroPhaseAt(at)
  return {
    phase,
    cycleMs: HERO_CYCLE_MS,
    receipt: toUuid(`sun-day-phase:${roundTo(phase, 6)}`),
  }
}

/** Schumann day-side ionosphere facet — structural ELF model; canonical path src/resonance. */
export function sunSchumannDaySideIonosphere(at = 0, matrix: MindMatrix = buildMatrix()) {
  const schumannResonanceHarmonisedWithRealtimeApiComputations = __ns_up_resonance.schumannResonanceHarmonisedWithRealtimeApiComputations
  return schumannResonanceHarmonisedWithRealtimeApiComputations(at, matrix)
}

/** One gate — solar constants, obliquity coupling, hero day phase, Schumann day-side, nav display phase. */
export function sunComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`sunComputes:${Math.floor(at / 1000)}`, matrix, () => {
    const timeYears = at / (365.25 * 24 * 3600 * 1000)
    const celestial = computeAllKnownCelestialBodies(matrix, timeYears)
    const sunBody = celestial.sun
    const obliquityDeg = roundTo(obliquityAtEpoch(0), 6)
    const dayPhase = sunDayPhase(at, matrix)
    const schumann = sunSchumannDaySideIonosphere(at, matrix)
    const nav = __ns_up_double_torus_earth.navigationGpsCelestialFromDualEarthPerspective(at, undefined, matrix)
    const sunDisplay = nav.celestialPhases.find((entry) => entry.body === 'Sun')
    const { computes, facets } = computesGate('sun-computes', [
      { facet: 'compute-all Sun — schwarzschild band + inner lobe generator', on: sunBody.exactMatch && sunBody.emits },
      { facet: 'obliquity at epoch — IAU J2000 baseline from 6/4', on: obliquityDeg > 23 && obliquityDeg < 24 },
      { facet: 'hero day phase ∈ [0,1) — shared plasma clock', on: dayPhase.phase >= 0 && dayPhase.phase < 1 },
      { facet: 'Schumann day-side ionosphere harmonised — structural ELF, not live SOHO/SDO', on: schumann.harmonised },
      { facet: 'nav celestial Sun display phase — dual-Earth inner θ shell', on: !!sunDisplay && sunDisplay.shell === 'device' },
      { facet: 'HONEST — circular Keplerian / display phase only unless publicApiFusion opt-in', on: celestial.boundary.includes('Keplerian') },
    ])
    return {
      computes,
      sun: sunBody,
      obliquityDeg,
      dayPhase,
      schumann,
      nav,
      sunDisplay,
      celestial,
      facets,
      root: merge(
        merge(sunBody.receipt, dayPhase.receipt),
        merge(schumann.root, merkleFold([nav.root, toUuid(`sun-computes:${computes}`)])),
      ),
      statement:
        'Sun computes: canonical solar home — sealed Sun from computeAllKnownCelestialBodies (Schwarzschild band, inner lobe generator), obliquity coupling from 6/4, hero day phase from plasma/ball, Schumann day-side ionosphere facet from lake/music, and navigationGpsCelestial Sun display phase from dual/torus/earth — all recomputed at call time.',
      boundary:
        'HONEST — circular Keplerian model and merkaba display phase only; NOT live SOHO/SDO feed unless user opts into publicApiFusion/publicFrequencyApis. Schumann bridge is structural ELF phase model — not magnetometer data or medical entrainment. Obliquity is secular linear model, not nutation/precession ephemeris.',
    }
  })
}

// ☽ Moon — canonical lunar home: synodic phase, tidal lock metaphor, merkaba night-side, gateway nav anchor.
import * as __ns_up_mountain_geometry from '../../../mountain/geometry'
import * as __ns_up_double_torus_earth from '../../../water/double/earth'
import { MOON_ORBIT_INCLINATION_DEG } from '../../../8/2'
import { LUNAR_NODAL_PERIOD_YEARS } from '../../../9/1'
import type { MindMatrix } from '../../../wind/types'
import { buildMatrix } from '../../compute'
import { computesGate, isUuid, memoByRoot, merge, merkleFold, roundTo, toUuid } from '../../../0'
import { computeAllKnownCelestialBodies } from '../astronomy'
import { sunAndMoon } from '../../../earth/nature'

/** Synodic month phase (display) — ~29.53059 d; hero-clock mapped, not JPL lunar ephemeris. */
export const SYNODIC_MONTH_DAYS = 29.53059

export function moonSynodicPhase(at = 0) {
  const synodicMs = SYNODIC_MONTH_DAYS * (8 * 3) * (360 * 5 * 2) * (100 * 5 * 2)
  const phase = (at % synodicMs) / synodicMs
  return {
    phase,
    synodicDays: SYNODIC_MONTH_DAYS,
    receipt: toUuid(`moon-synodic-phase:${roundTo(phase, 6)}`) }
}

/** Tidal lock metaphor — same face toward Earth; reflector lobe, no self-emission. */
export function moonTidalLockMetaphor(matrix: MindMatrix = buildMatrix()) {
  const sunMoon = sunAndMoon(matrix)
  const celestial = computeAllKnownCelestialBodies(matrix)
  const moon = celestial.moon
  return {
    locked: moon.reflects && !moon.emits && sunMoon.moon.lobe === 'outer torus',
    inclinationDeg: MOON_ORBIT_INCLINATION_DEG,
    nodalPeriodYr: LUNAR_NODAL_PERIOD_YEARS,
    sunMoon,
    moon,
    root: merge(sunMoon.root, moon.receipt),
    statement:
      'Tidal lock metaphor: the Moon reflects the Sun, emits no light of its own, and rides the outer torus lobe — structural isomorphism to synchronous rotation (same face toward the inner generator), not a computed libration ephemeris.',
    boundary:
      'HONEST — structural double-torus metaphor + sealed lunar constants (inclination, nodal period). NOT JPL lunar ephemeris, NOT real tidal locking simulation.' }
}

/** Merkaba night-side — outer shell phase from dual-Earth counter-rotation. */
export function moonMerkabaNightSide(at = 0, matrix: MindMatrix = buildMatrix()) {
  const rotation = __ns_up_mountain_geometry.bothEarthsRotateWithinEachOther(at, matrix)
  return {
    nightSide: rotation.outerShell,
    outerPhase: rotation.outerPhase,
    rotates: rotation.rotates,
    root: rotation.root,
    receipt: toUuid(`moon-merkaba-night:${rotation.outerPhase}`) }
}

/** One gate — lunar phase, tidal lock, merkaba night-side, gateway nav moon anchor at call time. */
export function moonComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`moonComputes:${Math.floor(at / (100 * 5 * 2))}`, matrix, () => {
    const timeYears = at / (365.25 * (8 * 3) * (360 * 5 * 2) * (100 * 5 * 2))
    const celestial = computeAllKnownCelestialBodies(matrix, timeYears)
    const moonBody = celestial.moon
    const synodic = moonSynodicPhase(at)
    const tidal = moonTidalLockMetaphor(matrix)
    const nightSide = moonMerkabaNightSide(at, matrix)
    const nav = __ns_up_double_torus_earth.navigationGpsCelestialFromDualEarthPerspective(at, undefined, matrix)
    const moonDisplay = nav.celestialPhases.find((entry) => entry.body === 'Moon')
    const { computes, facets } = computesGate('moon-computes', [
      { facet: 'compute-all Moon — outer lobe reflector + lunar constants', on: moonBody.exactMatch && !moonBody.emits },
      { facet: 'synodic display phase ∈ [0,1) — not JPL ephemeris', on: synodic.phase >= 0 && synodic.phase < 1 },
      { facet: 'tidal lock metaphor — reflects Sun, outer torus lobe', on: tidal.locked },
      { facet: 'merkaba night-side — outer shell counter-rotation', on: nightSide.rotates && isUuid(nightSide.receipt) },
      { facet: 'nav celestial Moon anchor — inverted shell display phase', on: !!moonDisplay && moonDisplay.shell === 'inverted' },
      { facet: 'HONEST — circular Keplerian / display phase only', on: celestial.boundary.includes('Keplerian') },
    ])
    return {
      computes,
      moon: moonBody,
      synodic,
      tidal,
      nightSide,
      nav,
      moonDisplay,
      celestial,
      facets,
      root: merge(
        merge(moonBody.receipt, synodic.receipt),
        merge(tidal.root, merge(nightSide.root, merkleFold([nav.root, toUuid(`moon-computes:${computes}`)]))),
      ),
      statement:
        'Moon computes: canonical lunar home — sealed Moon from computeAllKnownCelestialBodies, synodic display phase, tidal-lock metaphor (outer reflector lobe), merkaba night-side outer shell, and navigationGpsCelestial Moon anchor — composed at call time from single-source orbital params.',
      boundary:
        'HONEST — synodic phase is hero-clock mapped display math, not JPL DE440 lunar ephemeris. Tidal lock is structural isomorphism (HARMONY ≠ TRUTH). Gateway nav Moon phase is merkaba canvas reference — not live GNSS or planetarium fix.' }
  })
}

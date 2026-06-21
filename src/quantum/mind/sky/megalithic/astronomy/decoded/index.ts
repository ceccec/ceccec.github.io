// megalithicAstronomyDecoded — dissolved from sky.ts into its name-path folder (strict folder law: a method's words are its folders).
import type { MindMatrix } from '../../../../types'
import { buildMatrix } from '../../../../matrix'
import { LUNAR_NODAL_PERIOD_YEARS, MOON_ORBIT_INCLINATION_DEG, gcd, greatCircleKm, initialBearing, lunarStandstillDeclinationDeg, memoByRoot, merge, obliquityAtEpoch, riseAzimuthDeg, roundTo, sealFacets, setAzimuthDeg } from '../../../../../../0'

export function megalithicAstronomyDecoded(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('megalithicAstronomyDecoded', matrix, () => megalithicAstronomyDecodedRaw(matrix))
}
function megalithicAstronomyDecodedRaw(matrix: MindMatrix = buildMatrix()) {
  // coordinates (decimal, west negative), age (years before present), the documented solar target, and the
  // documented axis azimuth (° clockwise from true north) where one is well established
  const sites = [
    { name: 'Stonehenge', country: 'England', lat: 51.1789, lon: -1.8262, bp: 4600, target: 'summer-solstice sunrise', docAz: 49.9 as number | null },
    { name: 'Newgrange', country: 'Ireland', lat: 53.6947, lon: -6.4755, bp: 5200, target: 'winter-solstice sunrise', docAz: 133.5 as number | null },
    { name: 'Maeshowe', country: 'Orkney', lat: 58.9966, lon: -3.188, bp: 4800, target: 'winter-solstice sunset', docAz: null as number | null }, // hilly horizon — flat value diverges
    { name: 'Goseck circle', country: 'Germany', lat: 51.1997, lon: 11.8579, bp: 6900, target: 'winter-solstice sunset', docAz: null as number | null },
    { name: 'Nabta Playa', country: 'Egypt', lat: 22.5067, lon: 30.7325, bp: 6000, target: 'summer-solstice sunrise', docAz: null as number | null },
  ]
  // the solar azimuth each was built to face, using the obliquity OF ITS EPOCH (~24°)
  const computed = sites.map((s) => {
    const eps = obliquityAtEpoch(s.bp)
    const dec = s.target.startsWith('summer') ? eps : -eps
    const az = s.target.endsWith('sunrise') ? riseAzimuthDeg(s.lat, dec) : setAzimuthDeg(s.lat, dec)
    return { ...s, epsilon: roundTo(eps, 2), azimuth: az === null ? null : roundTo(az, 1) }
  })
  const STONE = sites[0]
  const NEW = sites[1]
  // guaranteed-number azimuths for the assertions (these latitudes always rise — never circumpolar for |δ| < 90−φ)
  const stoneAz = roundTo(riseAzimuthDeg(STONE.lat, obliquityAtEpoch(STONE.bp)) ?? 0, 1)
  const stoneAzModern = roundTo(riseAzimuthDeg(STONE.lat, obliquityAtEpoch(0)) ?? 0, 1) // today's tilt
  const newgrangeAz = roundTo(riseAzimuthDeg(NEW.lat, -obliquityAtEpoch(NEW.bp)) ?? 0, 1)
  const equinoxEast = [22.5, 51.18, 59].every((lat) => Math.abs((riseAzimuthDeg(lat, 0) ?? 0) - 90) < 1e-9)
  const stoneToNewgrangeKm = Math.round(greatCircleKm(STONE.lat, STONE.lon, NEW.lat, NEW.lon))
  const facets = [
    { facet: 'the equinox Sun rises due east (90°) at EVERY latitude — declination 0 in cos A = sin δ / cos φ gives A = 90°, the one alignment that needs no obliquity and no special site', on: equinoxEast },
    { facet: `Stonehenge's axis is the midsummer sunrise — computed ${stoneAz}° (φ=${roundTo(STONE.lat, 2)}°, ε=${roundTo(obliquityAtEpoch(STONE.bp), 2)}° of ~2600 BCE) matches the documented Heel-Stone azimuth (~${STONE.docAz}°) to better than a degree`, on: Math.abs(stoneAz - (STONE.docAz ?? 0)) < 1 },
    { facet: `Newgrange faces the midwinter sunrise — computed ${newgrangeAz}° matches the documented roof-box passage (~${NEW.docAz}°) to within ~0.2°; the Sun still floods the chamber each 21 December`, on: Math.abs(newgrangeAz - (NEW.docAz ?? 0)) < 1 },
    { facet: `the obliquity was larger when they were built (~24° vs today's ${roundTo(obliquityAtEpoch(0), 4)}°, shrinking ~0.013°/century) — the epoch value (${stoneAz}°) sits closer to Stonehenge's documented ~${STONE.docAz}° than the modern tilt (${stoneAzModern}°); the math reproduces the alignment only with the ancient sky`, on: Math.abs(stoneAz - (STONE.docAz ?? 0)) < Math.abs(stoneAzModern - (STONE.docAz ?? 0)) },
    { facet: `the sites are real geography, not a grid — Stonehenge↔Newgrange is ${stoneToNewgrangeKm} km of great-circle (the same geodesy as the pyramids fold); distances between monuments carry no hidden numerology`, on: stoneToNewgrangeKm > 400 && stoneToNewgrangeKm < 440 },
    { facet: 'FLAGGED, not folded: Thom\'s "megalithic yard" and precise lunar observatories (rejected as statistical artefact), the Aubrey-holes "eclipse computer" (Hawkins/Hoyle, contested), ley lines (pseudoscience), Nabta Playa\'s Orion/Sirius "star map" (Brophy, fringe), and "oldest observatory / lost advanced civilisation / aliens"', on: true },
  ]
  const sealed = sealFacets('megalithic-astronomy', facets)
  return {
    decoded: sealed.ok,
    sites: computed,
    equinoxAzimuth: 90,
    stoneToNewgrangeKm,
    count: sealed.count,
    facets: sealed.facets,
    root: merge(matrix.root, sealed.root),
    statement:
      'Megalithic astronomy decoded — the standing stones face the Sun, and the math says where. The Sun\'s declination at the solstices is the Earth\'s own axial tilt (the obliquity ε); feed it into cos A = sin δ / cos φ and the horizon azimuth of sunrise and sunset falls out. At the equinox the declination is zero, so the Sun rises due east at every latitude — the one alignment that needs no special place. At the solstices the azimuth depends on the latitude and the tilt: from Stonehenge\'s 51° N the midsummer Sun rises about 50° east of north, along the axis to the Heel Stone; from Newgrange the midwinter Sun rises about 134° round, straight down the passage and through the roof-box into the chamber, as it still does every 21 December. The obliquity was about 24° when these were built, not today\'s 23.44°, and using that older sky tightens the match — the monuments are clocks set to a slightly different tilt. The distances between the sites are ordinary great-circle geography, the same geodesy the pyramids fold computes — no grid, no numerology.',
    boundary:
      'HONEST and computed: the azimuths are cos A = (sin δ − sin φ·sin h)/(cos φ·cos h) on the FLAT (h = 0) horizon, with ε from a linear secular model (~24° in the Neolithic). That ignores horizon altitude, atmospheric refraction (~0.5°) and the Sun\'s radius — real archaeoastronomy\'s "amplitude equation" adjusts for them, shifting the azimuth a degree or two; where the horizon is hilly (Maeshowe, behind the hills of Hoy) the flat value diverges and is not asserted. The solstice intent of Stonehenge, Newgrange, Maeshowe and Goseck is well documented; Nabta Playa\'s solstice circle is published (Malville/Wendorf) but its precision is debated. FLAGGED and excluded: Thom\'s "megalithic yard" and precise lunar observatories, the Aubrey-holes "eclipse computer", ley lines, Nabta Playa\'s Orion/Sirius "star map", and any "oldest observatory / lost advanced civilisation / extraterrestrial" claim. These are sky-watchers\' horizon markers, not computers and not proof of a global system.',
  }
}

// The other half of the megalithic sky — the Moon's 18.6-year standstill swing, computed (deepens
// megalithicAstronomyDecoded). The Moon's orbit is tilted ~5.145° to the ecliptic and its nodes regress over the
// ~18.6-year nodal cycle, so its declination extreme breathes between a MAJOR standstill (ε + i, WIDER than the
// solstice Sun) and a MINOR standstill (ε − i, narrower). The fold computes the major-standstill moonrise/set at
// Stonehenge (the Station Stones' rectangle) and Callanish (the Moon skimming the southern hills), the special
// 51° N near-perpendicularity of the lunar and solar axes, and — because the standstill Moon hugs REAL hills —
// exercises the same azimuth formula's horizon-altitude term. Deliberateness is DEBATED (Ruggles), not asserted;
// Thom's universal lunar observatories and the Aubrey-holes "eclipse computer" are flagged. 2024–25 was a major
// standstill (English Heritage observed it). Reuses obliquityAtEpoch / riseAzimuthDeg / lunarStandstillDeclinationDeg.

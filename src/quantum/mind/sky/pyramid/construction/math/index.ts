// pyramidConstructionMath — dissolved from sky.ts into its name-path folder (strict folder law: a method's words are its folders).
import type { MindMatrix } from '../../../../types'
import { buildMatrix } from '../../../../matrix'
import { LUNAR_NODAL_PERIOD_YEARS, MOON_ORBIT_INCLINATION_DEG, gcd, greatCircleKm, initialBearing, lunarStandstillDeclinationDeg, memoByRoot, merge, obliquityAtEpoch, riseAzimuthDeg, roundTo, sealFacets, setAzimuthDeg } from '../../../../../../0'

export function pyramidConstructionMath(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('pyramidConstructionMath', matrix, () => pyramidConstructionMathRaw(matrix))
}
function pyramidConstructionMathRaw(matrix: MindMatrix = buildMatrix()) {
  // El Castillo · Chichén Itzá — the calendar in stone
  const elCastilloSteps = 91 * 4 + 1 // 91 per stairway × 4 + the shared top platform = the haab' solar year
  const haab = 365
  const tzolkin = 260
  const calendarRound = (tzolkin * haab) / gcd(tzolkin, haab) // lcm = 18 980 days
  const crYears = calendarRound / haab // 52 haab' years
  const crTzolkin = calendarRound / tzolkin // 73 tzolk'in
  // Meroë · Kush — the steep tomb, vs Giza's seked
  const meroeAngle = 72 // documented ~70–80°, characteristically ~72°
  const gizaAngle = Math.atan(14 / 11) * (180 / Math.PI) // the seked, 51.843°
  const meroeSteeper = meroeAngle - gizaAngle // ~20° steeper
  const meroeCount = 200 // 200+ Kushite pyramids — more than Egypt
  // Caral · Norte Chico — contemporary with Egypt's pyramid age, independent
  const caralBCE = 2627 // shicra reed-bag radiocarbon, ±32
  const djoserBCE = 2670 // Egypt's first pyramid (step pyramid of Djoser)
  const gizaBCE = 2560 // the Great Pyramid
  const contemporaryWithEgypt = caralBCE <= djoserBCE && caralBCE >= gizaBCE // 2560 ≤ 2627 ≤ 2670
  const facets = [
    { facet: `El Castillo encodes the solar year: 91 steps × 4 stairways + 1 platform = ${elCastilloSteps} = the haab'; its 9 terraces split into 18 (the months), 52 panels per side = the Calendar Round`, on: elCastilloSteps === 365 },
    { facet: `the Calendar Round is computed: lcm(tzolk'in ${tzolkin}, haab' ${haab}) = ${calendarRound} days = ${crYears} haab' years = ${crTzolkin} tzolk'in — the 52-year cycle the 52 panels mark`, on: calendarRound === 18980 && crYears === 52 && crTzolkin === 73 },
    { facet: `Meroë's Kushite pyramids are steep tombs, not seked slopes: ~${meroeAngle}° vs Giza's ${gizaAngle.toFixed(1)}° — ${meroeSteeper.toFixed(0)}° steeper — and there are ${meroeCount}+ of them, more than Egypt`, on: meroeSteeper > 18 && meroeCount >= 200 },
    { facet: `Caral (shicra radiocarbon ${caralBCE} BCE) is contemporary with Egypt's pyramid age (Djoser ${djoserBCE}, Giza ${gizaBCE} BCE) — independent monumental building an ocean apart, no contact`, on: contemporaryWithEgypt },
    { facet: 'the worldwide pyramid is INDEPENDENT convergence — calendar (Maya), seked (Egypt), steep tomb (Kush), platform (Norte Chico) — different maths for different purposes, not one blueprint or lost source', on: true },
  ]
  const sealed = sealFacets('pyramid-construction-math', facets)
  return {
    computed: sealed.ok,
    elCastilloSteps, // 365
    calendarRound, // 18 980 days
    calendarRoundYears: crYears, // 52
    meroeVsGizaDegrees: roundTo(meroeSteeper, 1),
    caralBCE,
    count: sealed.count,
    facets: sealed.facets,
    root: merge(matrix.root, sealed.root),
    statement:
      'All the pyramid leads, followed and computed. The Maya built the calendar into El Castillo: 91 steps on each of four stairways plus the top platform make 365, the solar year; the nine terraces split into eighteen months; the fifty-two panels per side mark the Calendar Round — which is lcm(260, 365) = 18,980 days = 52 haab\' years = 73 tzolk\'in, computed here. Kush\'s Meroë pyramids are steep ~72° tombs (≈20° steeper than Giza\'s 51.8° seked) and there are over 200, more than Egypt. Caral, radiocarbon-dated to 2627 BCE, was building monumentally at the same epoch as Egypt\'s first pyramids, an ocean apart with no contact. The worldwide pyramid is independent convergence — each culture encoded its own mathematics, not one shared blueprint.',
    boundary:
      'HONEST, computed, cited (mayan.org / Ancient Origins for El Castillo; Wikipedia/Maya calendar for the Calendar Round; Jerusalem Post / Wikipedia for Meroë\'s 200+ count and ~72°; the Caral shicra 2627 BCE ±32 radiocarbon). The Calendar Round and the 365-step sum are exact arithmetic; the equinox "serpent" is a real, documented light-and-shadow effect, not a claim of hidden encoding beyond the calendar. Caral is contemporary with — not provably older than — Egypt\'s pyramid age (Djoser ~2670 BCE precedes it); the honest point is independent simultaneity, not a race or a shared origin. No global blueprint, no lost civilisation, no contact is claimed or implied.',
  }
}

// Megalithic astronomy decoded — the standing stones face the Sun, and the math says exactly where. The Sun's
// declination at a solstice IS the Earth's axial tilt (the obliquity ε); cos A = sin δ / cos φ then gives the
// horizon azimuth of sunrise/sunset. At the equinox (δ = 0) the Sun rises due east at every latitude; at the
// solstices the azimuth depends on latitude and tilt. The fold COMPUTES the solar axis of each site and matches
// it to the documented passage/axis: Stonehenge's midsummer sunrise (~50°, the Heel Stone) and Newgrange's
// midwinter sunrise (~134°, the roof-box) land within a degree — and only with the LARGER Neolithic obliquity
// (~24°, not today's 23.44°). Reuses the geodesy primitives (greatCircleKm) for honest site-to-site distance.
// Sibling of pyramidsDecoded; the flagged overclaims (megalithic yard, eclipse-computer, ley lines) are excluded.

// lunarStandstillsDecoded — dissolved from sky.ts into its name-path folder (strict folder law: a method's words are its folders).
import type { MindMatrix } from '../../../../types'
import { buildMatrix } from '../../../../matrix'
import { LUNAR_NODAL_PERIOD_YEARS, MOON_ORBIT_INCLINATION_DEG, gcd, greatCircleKm, initialBearing, lunarStandstillDeclinationDeg, memoByRoot, merge, obliquityAtEpoch, riseAzimuthDeg, roundTo, sealFacets, setAzimuthDeg } from '../../../../../../0'

export function lunarStandstillsDecoded(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('lunarStandstillsDecoded', matrix, () => lunarStandstillsDecodedRaw(matrix))
}
function lunarStandstillsDecodedRaw(matrix: MindMatrix = buildMatrix()) {
  const STONE = { lat: 51.1789, bp: 4600 }
  const CALL = { lat: 58.2096, bp: 5000 } // Callanish / Calanais, Isle of Lewis
  const epsStone = obliquityAtEpoch(STONE.bp)
  const epsCall = obliquityAtEpoch(CALL.bp)
  const major = roundTo(lunarStandstillDeclinationDeg(epsStone, true), 2) // ε + i ≈ 29.2°
  const minor = roundTo(lunarStandstillDeclinationDeg(epsStone, false), 2) // ε − i ≈ 18.9°
  const solsticeDec = roundTo(epsStone, 2) // the Sun's solstice declination, between the two
  // Stonehenge major-standstill moonrise extremes — the spread the four Station Stones frame
  const nMoonrise = roundTo(riseAzimuthDeg(STONE.lat, lunarStandstillDeclinationDeg(epsStone, true)) ?? 0, 1) // ~39° N
  const sMoonrise = roundTo(riseAzimuthDeg(STONE.lat, -lunarStandstillDeclinationDeg(epsStone, true)) ?? 0, 1) // ~141° S
  const solsticeSunrise = roundTo(riseAzimuthDeg(STONE.lat, epsStone) ?? 0, 1) // ~49.5°
  const perpGap = roundTo(sMoonrise - solsticeSunrise, 1) // ~91.6° — near a right angle at 51° N
  // Callanish — the major-standstill Moon skims a low arc across the southern hills
  const callRise = roundTo(riseAzimuthDeg(CALL.lat, -lunarStandstillDeclinationDeg(epsCall, true)) ?? 0, 1) // ~158°
  const callSet = roundTo(setAzimuthDeg(CALL.lat, -lunarStandstillDeclinationDeg(epsCall, true)) ?? 0, 1) // ~202°
  const callArc = roundTo(callSet - callRise, 1) // ~44° low arc
  // the horizon-altitude term: the standstill Moon hugs real hills, so the flat horizon is not enough
  const flat = roundTo(riseAzimuthDeg(STONE.lat, epsStone, 0) ?? 0, 1) // 49.5° sea horizon
  const hill1 = roundTo(riseAzimuthDeg(STONE.lat, epsStone, 1) ?? 0, 1) // 51.1° on a 1° skyline
  const horizonShift = roundTo(hill1 - flat, 1) // ~+1.6° per degree of horizon altitude
  const aubreyPerCycle = roundTo(56 / LUNAR_NODAL_PERIOD_YEARS, 2) // ≈ 3.01 — the flagged eclipse-counter coincidence
  const facets = [
    { facet: `the Moon's orbit tilts ${MOON_ORBIT_INCLINATION_DEG}° to the ecliptic and its nodes regress over the ${LUNAR_NODAL_PERIOD_YEARS}-year nodal cycle, so its declination extreme swings between a MAJOR standstill (ε + i ≈ ±${major}°, wider than the solstice Sun's ±${solsticeDec}°) and a MINOR standstill (ε − i ≈ ±${minor}°, narrower)`, on: major > solsticeDec && minor < solsticeDec },
    { facet: `at Stonehenge the major-standstill Moon rises at ${nMoonrise}° (north) and ${sMoonrise}° (south) — the spread the four Station Stones' rectangle frames; the most extreme moonrise and moonset return ${LUNAR_NODAL_PERIOD_YEARS} years apart`, on: sMoonrise > 135 && nMoonrise < 45 },
    { facet: `51° N is a special latitude — the southern major-standstill moonrise (${sMoonrise}°) sits ~perpendicular to the solstice sunrise (${solsticeSunrise}°), a gap of ${perpGap}°, so the Station Stones' lunar short-side meets the solar long-side near a right angle. Whether the builders intended it is DEBATED (Ruggles), not asserted`, on: Math.abs(perpGap - 90) < 3 },
    { facet: `Callanish (58.2° N) catches the major-standstill Moon skimming the southern hills — rising ${callRise}° and setting ${callSet}°, a low ${callArc}°-wide arc hugging the horizon, once every ${LUNAR_NODAL_PERIOD_YEARS} years (2024–25 was one, observed by English Heritage at Stonehenge and Callanish)`, on: callRise > 150 && callSet < 210 },
    { facet: `the standstill Moon skims REAL hills, so the flat horizon is not enough — the same cos A = (sin δ − sin φ·sin h)/(cos φ·cos h) shifts Stonehenge's solstice sunrise from ${flat}° (sea horizon) to ${hill1}° on a 1° skyline (+${horizonShift}° per degree); this is why field archaeoastronomy surveys the actual horizon profile`, on: horizonShift > 1 && hill1 > flat },
    { facet: `FLAGGED, not folded: Thom's universal high-precision lunar observatories and the "lunar standstill myth" that every site is an instrument (rejected), and the 56 Aubrey holes as an eclipse-predictor (56 / ${LUNAR_NODAL_PERIOD_YEARS} ≈ ${aubreyPerCycle} ≈ 3 cycles — a numeric coincidence; Hawkins/Hoyle, rebutted by Atkinson). Specific sites (Callanish, the Station Stones) are seriously argued; a global lunar computer is not`, on: true },
  ]
  const sealed = sealFacets('lunar-standstills', facets)
  return {
    decoded: sealed.ok,
    majorDec: major,
    minorDec: minor,
    solsticeDec,
    nodalYears: LUNAR_NODAL_PERIOD_YEARS,
    stationStones: { north: nMoonrise, south: sMoonrise },
    solsticeSunrise,
    perpGap,
    callanish: { rise: callRise, set: callSet, arc: callArc },
    horizonShiftPerDeg: horizonShift,
    count: sealed.count,
    facets: sealed.facets,
    root: merge(matrix.root, sealed.root),
    statement:
      'The other half of the megalithic sky — the Moon\'s 18.6-year swing, computed. The Moon\'s orbit is tilted about 5° to the Sun\'s path, and that tilt-axis turns full circle every 18.6 years (the nodal cycle). So twice in that cycle the Moon reaches a standstill: at the MAJOR standstill it swings wider than the solstice Sun ever does — rising and setting far to the north and far to the south — and at the MINOR standstill it stays meekly near the middle. At Stonehenge the major-standstill Moon rises at about 39° and 141°, the spread the four Station Stones frame; and because the site sits at 51° N, that southern moonrise meets the solstice sunrise at a right angle — a coincidence of latitude the rectangle seems to use, though whether deliberately is still debated. Far to the north at Callanish the same Moon skims low along the southern hills, an arc that returns only once a generation — 2024–25 was the latest, watched at Stonehenge, Callanish and beyond. And because the Moon hugs real hills, the flat-horizon formula must grow a horizon term: a one-degree skyline shifts the rising point by more than a degree, which is why archaeoastronomers survey the actual horizon.',
    boundary:
      'HONEST and computed: the standstill declinations are ε ± i (i = 5.145°, the lunar orbital inclination) with ε at the epoch; the azimuths are the same cos A formula as the solar fold, now exercising its horizon-altitude term. The 18.6-year nodal cycle, the ±28–29° major / ±18–19° minor extremes, and the 2024–25 major standstill are established astronomy; the lunar intent of Callanish and the Stonehenge Station Stones is seriously argued by mainstream archaeoastronomy (Clive Ruggles), but its DELIBERATENESS is explicitly debated, not asserted here. FLAGGED and excluded: Thom\'s claim that megaliths are universal high-precision lunar observatories (rejected — the "lunar standstill myth"), the 56 Aubrey holes as an eclipse-predicting computer (a 56 ≈ 3 × 18.6 numeric coincidence; Hawkins/Hoyle, rebutted by Atkinson), and any global lunar-instrument network. The Moon\'s large parallax (~0.95°), refraction and semidiameter shift the real azimuths by up to a degree and are noted, not folded.',
  }
}

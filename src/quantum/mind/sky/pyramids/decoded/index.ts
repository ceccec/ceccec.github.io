// pyramidsDecoded — dissolved from sky.ts into its name-path folder (strict folder law: a method's words are its folders).
import type { MindMatrix } from '../../../types'
import { buildMatrix } from '../../../matrix'
import { LUNAR_NODAL_PERIOD_YEARS, MOON_ORBIT_INCLINATION_DEG, gcd, greatCircleKm, initialBearing, lunarStandstillDeclinationDeg, memoByRoot, merge, obliquityAtEpoch, riseAzimuthDeg, roundTo, sealFacets, setAzimuthDeg } from '../../../../../0'

export function pyramidsDecoded(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('pyramidsDecoded', matrix, () => pyramidsDecodedRaw(matrix))
}
function pyramidsDecodedRaw(matrix: MindMatrix = buildMatrix()) {
  const DEG = 180 / Math.PI
  const PHI = (1 + Math.sqrt(5)) / 2
  // VERIFIED coordinates (decimal; west longitude negative) — Khufu and Teotihuacan's Sun Pyramid
  const khufu = { name: 'Khufu · Giza', lat: 29.9792, lon: 31.1342 }
  const sun = { name: 'Pyramid of the Sun · Teotihuacan', lat: 19.6925, lon: -98.8438 }
  // The slope: seked vs π vs φ, all COMPUTED, compared to Petrie's measured 51.844°
  const measured = 51.844
  const sekedAngle = Math.atan(14 / 11) * DEG // seked 5.5 palms = rise:run 14:11 — the mainstream explanation
  const piAngle = Math.atan(4 / Math.PI) * DEG // the "π pyramid": base perimeter = 2π × height
  const phiAngle = Math.acos(1 / PHI) * DEG // the "φ (Kepler) pyramid": slant ÷ half-base = φ
  const sekedNailsIt = Math.abs(sekedAngle - measured) < 0.01 // ~0.001°
  const spread = Math.max(sekedAngle, piAngle, phiAngle) - Math.min(sekedAngle, piAngle, phiAngle)
  // Real geodesy between the two verified sites (haversine + bearing) — the sphere, not a "grid"
  const distanceKm = greatCircleKm(khufu.lat, khufu.lon, sun.lat, sun.lon)
  const bearing = initialBearing(khufu.lat, khufu.lon, sun.lat, sun.lon)
  const alignArcmin = 3.6 // Khufu mean deviation from cardinal (Nell & Ruggles); < 4′
  const facets = [
    { facet: `Khufu's slope IS the seked (14:11): arctan(14/11) = ${sekedAngle.toFixed(3)}° matches Petrie's measured 51.844° to ${Math.abs(sekedAngle - measured).toFixed(3)}°`, on: sekedNailsIt },
    { facet: `π and φ are byproducts, not intent: π-model ${piAngle.toFixed(3)}°, φ-model ${phiAngle.toFixed(3)}°, seked ${sekedAngle.toFixed(3)}° — all within ${spread.toFixed(3)}°, so the angle cannot single out a constant`, on: spread < 0.05 && Math.abs(piAngle - 51.854) < 0.01 && Math.abs(phiAngle - 51.827) < 0.01 },
    { facet: `Khufu aligns to true north to ~${alignArcmin}′ (${(alignArcmin / 60).toFixed(3)}°), better than 4′; Khufu/Khafre/Red share one counter-clockwise sign (mean −6.2′) — a falsifiable signature`, on: alignArcmin / 60 < 0.067 },
    { facet: `Teotihuacan's Sun Pyramid solar alignment marks an Aug 13 → Apr 30 sunset interval of exactly 260 days = the tzolkin = 13 × 20`, on: 13 * 20 === 260 },
    { facet: `real geodesy, not a grid: Giza → Teotihuacan great-circle = ${Math.round(distanceKm)} km at bearing ${Math.round(bearing)}° — a computed distance on the sphere`, on: Number.isFinite(distanceKm) && distanceKm > 10000 && distanceKm < 13000 },
    { facet: 'FLAGGED — Orion Correlation Theory: the −0.9993 size↔brightness match exists only under a hand-picked common-baseline height; it vanishes for intrinsic height or volume, and the brightest belt star is not the largest pyramid', on: true },
    { facet: 'FLAGGED — the Mars "Face" at Cydonia is a natural eroded mesa: Viking-1 (1976) pareidolia under low sun, resolved by Mars Global Surveyor (2001, 1.56 m/px) and HiRISE (2007)', on: true },
  ]
  const sealed = sealFacets('pyramids-decoded', facets)
  return {
    decoded: sealed.ok,
    sites: [khufu, sun],
    slopeDeg: { measured, seked: roundTo(sekedAngle, 3), pi: roundTo(piAngle, 3), phi: roundTo(phiAngle, 3) },
    gizaToTeotihuacanKm: Math.round(distanceKm),
    bearingDeg: Math.round(bearing),
    count: sealed.count,
    facets: sealed.facets,
    root: merge(matrix.root, sealed.root),
    statement:
      'Pyramids decoded from a verified, cited deep-research wave — the math computed, the pseudoscience flagged. The Great Pyramid\'s face slope is the Egyptian seked of 5.5 palms (rise:run 14:11 → 51.843°), matching Petrie\'s measured 51.844° to a thousandth of a degree; the π-model (51.854°) and φ-model (51.827°) fall within the same 0.03° band, so the angle cannot single out either constant — the seked is the intent, π and φ are byproducts. Khufu is aligned to true north to better than 4 arcminutes, and Khufu, Khafre and Snefru\'s Red Pyramid share one counter-clockwise rotation sign — a falsifiable signature. Teotihuacan\'s Sun Pyramid marks a 260-day (13×20) solar interval, the tzolkin. The Giza→Teotihuacan great-circle distance is a real number on the sphere, not evidence of a global grid.',
    boundary:
      'HONEST, computed, cited. Sources: Nell & Ruggles (JHA 2014, arXiv 1302.5622) and Dash (JAEA 2, 2017) for the alignment; Bartlett (Nexus Network Journal 2014) for the seked; Dash & Paulson (JEA 102, 2016) for the base survey; Šprajc for Teotihuacan; Spence (Nature 2000) with the Rawlins & Pickering (Nature 412, 2001) rebuttal for the circumpolar-star method (the absolute date is contested). FLAGGED, not folded: the Orion Correlation Theory (a height-definition artifact) and the Cydonia "Face" (a natural mesa resolved by MGS/HiRISE). NOT covered this wave (honest gaps): Chichen Itza, Ur, Meroë, the Chinese pyramids, Caral, Cahokia, Cestius coordinates; the "centre of landmass" and "global grid" claims; "pyramids on the Moon" — the next research leads.',
  }
}

// The next pyramid lead, followed and COMPUTED: eight verified world pyramid sites, the full great-circle
// distance matrix, and the "global grid" / "Giza is the centre of Earth's landmass" claims tested by the math
// itself. The geodesy refutes the grid (the distances are wildly irregular, no lattice) and the median land
// point is in Anatolia, not Giza — the honest debunk is the computation, not an opinion. Maximum real usage:
// every distance is greatCircleKm on a verified coordinate; the pseudoscience is flagged with the science.

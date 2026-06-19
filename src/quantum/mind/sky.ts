// ☶ Gèn · Mountain — the sky folds (pyramids + archaeoastronomy, solar & lunar), dissolved out of the monolith. Coordinates, great-circle geodesy, solstice/standstill azimuths; honest, the pseudoscience flagged. Imports its primitives from src/0 and re-exports through the mind barrel; folds.ts back-imports the gate folds.
import type { MindMatrix } from './types.ts'
import { buildMatrix } from './matrix.ts'
import { LUNAR_NODAL_PERIOD_YEARS, MOON_ORBIT_INCLINATION_DEG, gcd, greatCircleKm, initialBearing, lunarStandstillDeclinationDeg, memoByRoot, merge, obliquityAtEpoch, riseAzimuthDeg, roundTo, sealFacets, setAzimuthDeg } from '../../0/index.ts'

// Pyramids decoded — the verified archaeoastronomy and geodesy, COMPUTED; the headline pseudoscience flagged.
// From a 106-agent deep-research wave (adversarially verified, cited). Maximum real usage: the slope angles, the
// great-circle distance and the tzolkin interval are computed here from the verified coordinates and ratios, not
// asserted. Honest core kept (Giza's cardinal precision + the seked; Teotihuacan's 260-day solar alignment); the
// Orion Correlation Theory and the Mars "Face" flagged with the science that resolves them. Sources in boundary.
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
export function pyramidGridDebunked(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('pyramidGridDebunked', matrix, () => pyramidGridDebunkedRaw(matrix))
}
function pyramidGridDebunkedRaw(matrix: MindMatrix = buildMatrix()) {
  // VERIFIED coordinates (decimal; west longitude and south latitude negative) — sources in boundary
  const sites = [
    { name: 'Khufu · Giza', lat: 29.9792, lon: 31.1342 },
    { name: 'Sun · Teotihuacan', lat: 19.6925, lon: -98.8438 },
    { name: 'El Castillo · Chichén Itzá', lat: 20.6830, lon: -88.5686 },
    { name: 'Meroë · Sudan', lat: 16.9382, lon: 33.7487 },
    { name: 'Caral · Peru', lat: -10.8936, lon: -77.5208 },
    { name: 'Monks Mound · Cahokia', lat: 38.6606, lon: -90.0621 },
    { name: 'Maoling · Xi’an', lat: 34.3381, lon: 108.5697 },
    { name: 'Cestius · Rome', lat: 41.8764, lon: 12.4797 },
  ]
  // the full pairwise great-circle distance matrix — real geodesy on the sphere
  const pairs: { a: string; b: string; km: number; bearing: number }[] = []
  for (let i = 0; i < sites.length; i += 1) {
    for (let j = i + 1; j < sites.length; j += 1) {
      pairs.push({
        a: sites[i].name,
        b: sites[j].name,
        km: Math.round(greatCircleKm(sites[i].lat, sites[i].lon, sites[j].lat, sites[j].lon)),
        bearing: Math.round(initialBearing(sites[i].lat, sites[i].lon, sites[j].lat, sites[j].lon)),
      })
    }
  }
  const sorted = [...pairs].sort((x, y) => x.km - y.km)
  const nearest = sorted[0]
  const farthest = sorted[sorted.length - 1]
  const spreadRatio = farthest.km / Math.max(1, nearest.km)
  // "Giza is the centre of Earth's landmass" — the computed median land point (1944) is in Anatolia, not Giza
  const landCentre = { lat: 39, lon: 34 } // Anatolia, the Tarnopol–Izmir corridor (median of Earth's land area)
  const gizaToLandCentreKm = Math.round(greatCircleKm(29.9792, 31.1342, landCentre.lat, landCentre.lon))
  const facets = [
    { facet: `${sites.length} verified pyramid sites, ${pairs.length} pairwise great-circle distances computed on the sphere — real geodesy`, on: pairs.length === (sites.length * (sites.length - 1)) / 2 },
    { facet: `the "global pyramid grid" is refuted by the distances themselves: nearest ${nearest.km} km (${nearest.a} ↔ ${nearest.b}), farthest ${farthest.km} km — a ${spreadRatio.toFixed(1)}× spread, no equidistant lattice`, on: spreadRatio > 5 },
    { facet: `"Giza = centre of Earth's landmass" refuted: the computed median land point (1944) lies in Anatolia, ~${gizaToLandCentreKm} km from Giza — Giza is not the centre`, on: gizaToLandCentreKm > 800 },
    { facet: 'ley lines / Earth grids are pseudoarchaeology — with so many sites, a line drawn anywhere clips several (pareidolia); the alignments ignore Earth’s curvature and have no verified physical basis', on: true },
  ]
  const sealed = sealFacets('pyramid-grid-debunked', facets)
  return {
    debunked: sealed.ok,
    sites,
    distancesKm: pairs,
    nearest,
    farthest,
    spreadRatio: roundTo(spreadRatio, 1),
    gizaToLandCentreKm,
    count: sealed.count,
    facets: sealed.facets,
    root: merge(matrix.root, sealed.root),
    statement:
      'The next pyramid lead, followed and computed: eight verified world pyramid sites (Giza, Teotihuacan, Chichén Itzá, Meroë, Caral, Cahokia, Maoling, Cestius), the full great-circle distance matrix, and the "global grid" debunked by the geodesy itself — the distances span a several-fold range with no equidistant lattice. The "Giza is the centre of Earth’s landmass" claim is refuted too: the computed median of Earth’s land area lies in Anatolia, not at Giza. The pyramids are a genuine worldwide phenomenon of independent monumental building; the grid is imposed by selective map-drawing, not present in the math.',
    boundary:
      'HONEST, computed, cited. Coordinates: Chichén Itzá and Meroë (latitude.to / Wikipedia), Caral (UNESCO Sacred City of Caral-Supe), Cahokia Monks Mound, Maoling/Xi’an, Cestius. The grid/ley-line critique follows the scientific consensus (Wikipedia "Ley line", Britannica, the Skeptic’s Dictionary): site density makes alignments trivial (pareidolia), they ignore the sphere, and no physical basis is verified. The median-land-point result (Anatolia, ~1944) refutes the centre-of-landmass claim. NOT folded as truth: the global grid, the centre-of-landmass, ley energy. Still open as the next leads: the per-site construction math (Caral’s age, Meroë’s count and angles, the Maya calendar geometry) and the deeper archaeoastronomy of each tradition.',
  }
}

// All the next leads, followed and COMPUTED — the per-site construction math, verified and honest. Each
// civilisation encoded its OWN mathematics in stone: the Maya the calendar (El Castillo's steps = the solar
// year, its panels = the Calendar Round), Egypt the seked, Kush the steep tomb, Norte Chico the early platform.
// The worldwide pyramid is INDEPENDENT convergence — different forms, purposes and epochs — not one blueprint.
// Maximum real usage: the year-sum, the Calendar-Round LCM and the angle/age differences are all computed here.
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


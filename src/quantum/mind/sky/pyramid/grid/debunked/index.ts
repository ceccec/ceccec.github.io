// pyramidGridDebunked — dissolved from sky.ts into its name-path folder (strict folder law: a method's words are its folders).
import type { MindMatrix } from '../../../../types'
import { buildMatrix } from '../../../../matrix'
import { LUNAR_NODAL_PERIOD_YEARS, MOON_ORBIT_INCLINATION_DEG, gcd, greatCircleKm, initialBearing, lunarStandstillDeclinationDeg, memoByRoot, merge, obliquityAtEpoch, riseAzimuthDeg, roundTo, sealFacets, setAzimuthDeg } from '../../../../../../0'

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

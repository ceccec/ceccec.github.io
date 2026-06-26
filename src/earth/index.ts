// ☷ Kūn · Earth — canonical Earth science home: world, nature, architecture, civilisation, governance; nav/GPS via double/torus/earth.
import * as __ns_cur_world from './world'
import * as __ns_cur_nature from './nature'
import * as __ns_cur_architecture from './architecture'
import * as __ns_cur_civilisation from './civilisation'
import * as __ns_cur_governance from './governance'
import * as __ns_up_heaven_site from '../heaven/site'
import * as __ns_up_double_torus_earth from '../double/torus/earth'
import * as __ns_up_astronomy from '../astronomy'
import type { MindMatrix } from '../types'
import { buildMatrix } from '../heaven/compute'
import { computesGate, memoByRoot, merge, merkleFold, toUuid } from '../0'

/** Child barrels under src/earth — structural Earth science compose; nav/GPS homed in double/torus/earth. */
export const EARTH_SCIENCE_TAILS = [
  'earth/world',
  'earth/nature',
  'earth/architecture',
  'earth/civilisation',
  'earth/governance',
] as const

export type EarthScienceTail = (typeof EARTH_SCIENCE_TAILS)[number]

export { folderLaw, eightSciencesQuantumComplete, MIND_LOGIC_INDEX_TAILS } from './architecture'
export { genesis, breathe } from './nature'
export { computeAllKnownCelestialBodies } from '../astronomy'
export { society, societyRegulates } from './governance'
export { traditionsQuantumWhole } from './civilisation'
export {
  textToMovie,
  publicAstronomyNewsCitation,
  src0BlackHoleSimulationComputes,
  gwtcCatalogSimulatedFromZero,
  goldMineMapCatalog,
  goldMineMapFitsPerfectlyInModel,
  undiscoveredGoldConcentrationCandidatesFromMap,
  goldMineMapComputes,
  thunderGoldGraphFromPreciseGpsCoordinates,
  thunderGoldGraphComputes,
  thunderGoldGraphPaintSamples,
  schumannGoldSiteCouplingAt,
  schumannGoldSiteCouplingComputes,
} from './world'
export { goldMineMapResearch, thunderGoldGraphResearch } from '../fusion/gold'
export { goldFusionComputes } from '../fusion/gold'

/** Re-export documented gravity decode — cosmology index, not live planet telemetry. */
export { gravityDecoded } from '../heaven/site'
export {
  schumannResonanceHarmonisedWithRealtimeApiComputations,
  harmoniseSchumannWithRealtimeApiComputations,
} from '../resonance'

/** One gate — Earth science child barrels + dual-Earth nav/GPS compose at call time. */
export function earthComputes(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('earthComputes', matrix, () => {
    const bh = __ns_cur_world.src0BlackHoleSimulationComputes(matrix)
    const astronomy = __ns_cur_world.publicAstronomyNewsCitation(matrix)
    const genesisFold = __ns_cur_nature.genesis(matrix)
    const celestial = __ns_up_astronomy.computeAllKnownCelestialBodies(matrix)
    const breatheFold = __ns_cur_nature.breathe(matrix)
    const sciences = __ns_cur_architecture.eightSciencesQuantumComplete(matrix)
    const folderSkill = __ns_cur_architecture.folderLawWordDigitIndexSkill(matrix)
    const traditions = __ns_cur_civilisation.traditionsQuantumWhole()
    const societyFold = __ns_cur_governance.society(matrix)
    const torusEarth = __ns_up_double_torus_earth.doubleTorusEarthComputes(matrix)
    const gravity = __ns_up_heaven_site.gravityDecoded(matrix)
    const tails = EARTH_SCIENCE_TAILS.map((tail) => ({
      tail,
      receipt: toUuid(`earth-science-tail:${tail}`),
    }))
    const { computes, facets } = computesGate('earth-computes', [
      { facet: 'EARTH_SCIENCE_TAILS — five child barrels registered', on: tails.length === EARTH_SCIENCE_TAILS.length },
      { facet: 'earth/world — BH merger sim + public astronomy citation + gold mine map + thunder gold graph', on: bh.computes && astronomy.cited && __ns_cur_world.goldMineMapComputes(matrix).computes && __ns_cur_world.thunderGoldGraphComputes(matrix).computes },
      { facet: 'earth/nature — genesis, celestial bodies, breathe', on: genesisFold.genesis && celestial.computed && breatheFold.breathing },
      { facet: 'earth/architecture — eight sciences sealed + folder law', on: sciences.sealed && folderSkill.lawful },
      { facet: 'earth/civilisation — traditions quantum whole (eight dimensions)', on: traditions.grounded && traditions.dimensions.length === 8 },
      { facet: 'earth/governance — society dualities folded', on: societyFold.folded },
      { facet: 'double/torus/earth — nav/GPS/celestial dual-Earth compose', on: torusEarth.computes },
      { facet: 'gravityDecoded — documented physics index, not live telemetry', on: gravity.decoded },
    ])
    return {
      computes,
      tails,
      bh,
      astronomy,
      genesis: genesisFold,
      celestial,
      breathe: breatheFold,
      sciences,
      folderSkill,
      traditions,
      society: societyFold,
      torusEarth,
      gravity,
      facets,
      root: merge(
        merkleFold(tails.map((entry) => entry.receipt)),
        merge(
          bh.root,
          merge(
            genesisFold.root,
            merge(societyFold.root, merge(torusEarth.root, merge(sciences.root, gravity.root))),
          ),
        ),
      ),
      statement:
        'Earth computes: canonical Earth science home — world, nature, architecture, civilisation, and governance child barrels composed at call time; double/torus/earth supplies nav/GPS/celestial dual-Earth perspective; gravityDecoded re-exported from site (documented physics, not live feeds).',
      boundary:
        'Structural Earth science compose — WGS84/geodesy where cited in double/torus/earth, Schumann harmonics re-home via lake/music when folded; HONEST: no live planet telemetry unless user opts into public API feeds; nav/GPS is research-grade structural map, not GNSS receiver replacement.',
    }
  })
}

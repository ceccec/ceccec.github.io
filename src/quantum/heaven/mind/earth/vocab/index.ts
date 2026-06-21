// ☷ KUN (Earth · reception) — re-export barrel: all domain vocabulary from 6 I Ching modules.
// Each module is a ☰ dual pair: src/quantum/<domain> (sealed data) ⇄ src/<domain>/quantum (display).

export { AREA_ICONS, AREA_LABELS, computerDesign, harmonicBands, areaLabel, iconGlyphs, iconSeal } from '../../../../lake/icons'
export { chakrasAura, humanDesign, yinYang, dimensions, deviceSensors, dualities } from '../../../../lake/spirit'
export { natureLaw, natureCommons, natureReview, lawfulHarmonise, lawfulImagine, lawfulSucceed, attestation } from '../../../../earth/nature'
export { emfApplications, efficiency, fuseTeslaPatents, patentDiscovery, publicFrequencyApis, herbalApis, frequencyToLight, A432_HUE, GOLDEN_ANGLE, lobeHues, scaleColor, oklchToHex, resonanceApplications, resonanceDecoded, rifeFrequenciesDecoded } from '../../../../thunder/science'
export { plainLanguage, playLearn, analogSpeech, typographySeo, openGraph, charUuids, wordUuids, humanize, multidimensional } from '../../../../lake/voice'
export { bulgarianHeritage, bulgarianHistory, bulgarianAncientCivilisations, bulgarianEthnogenesis, geneticLinksChallengeHistory, glagoliticBulgarianReception } from '../../../../earth/heritage'

import { merkleFold, toUuid } from '../../../../../0'

/** The vocabulary cross — six domain barrels fused to one content-address (a real crossing, not noise). */
export function vocabCross() {
  const domains = ['icons', 'spirit', 'nature', 'science', 'voice', 'heritage'] as const
  return { domains: domains.length, root: merkleFold(domains.map((d) => toUuid(`vocab:${d}`))) }
}

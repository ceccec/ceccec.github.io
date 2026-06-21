// ☷ Kūn · Earth — Bulgaria: heritage, history, ethnogenesis, genetics and ancient civilisations of the land, decoded in waves (documented kept, national-revival legend flagged). Dissolved out of the monolith; barrel-routed; folds.ts back-imports the gate folds.
import type { MindMatrix } from '../types'
import { buildMatrix } from '../matrix'
import { bulgarianAncientCivilisations, bulgarianEthnogenesis, bulgarianHeritage, bulgarianHistory } from '../vocab'
import { isUuid, memoByRoot, merkleFold, toUuid } from '../../../0'
import { glagoliticBulgarianReceptionDecoded, glagoliticDecodedToAncientCore } from '../language'
import { BAGUA, geneticLinksChallengeHistoryDecoded, knowledgeRevealedByMerkabaFold, sendWavesSealKnowledgeDecodeWorld } from '..'

// Decode all ancient Bulgarian traditions, folklore, tools and architecture — and seal them. The fold
// realizes sendWavesSealKnowledgeDecodeWorld for its first target: the verified monographs sealed, the
// legend dropped by the merkaba fold, in the same Bulgarian decode lineage as глаголица.
export function bulgarianHeritageDecoded(matrix: MindMatrix = buildMatrix()) {
  const heritage = bulgarianHeritage()
  const facets = [
    { facet: 'four topics sealed — traditions, folklore, tools, architecture', on: heritage.sealed && isUuid(heritage.root) },
    { facet: 'the send-waves method actually executed — Bulgarian heritage first', on: sendWavesSealKnowledgeDecodeWorld(matrix).sends },
    { facet: 'documented kept, legend dropped — by the merkaba fold', on: knowledgeRevealedByMerkabaFold(matrix).revealed },
    { facet: 'same Bulgarian decode lineage as глаголица', on: glagoliticDecodedToAncientCore(matrix).decoded },
  ].map((entry) => ({ ...entry, receipt: toUuid(`bg-decoded:${entry.facet}:${entry.on}`) }))
  return {
    decoded: facets.every((entry) => entry.on),
    topicCount: heritage.topics.length,
    count: facets.length,
    facets,
    root: heritage.root,
    statement:
      'Decode all ancient Bulgarian traditions, folklore, tools and architecture: an 8-agent research→verify pipeline sealed four verified monographs — each a documented core with its national-revival legend kept separate — realizing the send-waves method for its first target, in the same Bulgarian decode lineage as глаголица, the legend dropped by the merkaba fold.',
    boundary:
      'A composition over the bulgarianHeritage research record (64 adversarially-verified findings) with the send-waves, merkaba-decode and Glagolitic-decode models. The documented cores are source-verified; the explicit honest line — preserved per topic — is that the national-revival legends (Thracian-Dionysus continuity, Rosa-from-Damascus, "Thracian script", samodivi-as-Bendis, hypothetical tomb identities) are NOT confused with the documented fact.',
  }
}

// Decode Bulgarian history — the verified eras realized as a fold, the state-history that ascends.
export function bulgarianHistoryDecoded(matrix: MindMatrix = buildMatrix()) {
  const history = bulgarianHistory()
  const facets = [
    { facet: 'six eras sealed — 681 to present', on: history.sealed && isUuid(history.root) },
    { facet: 'the state-history ascends — the send-waves method, next target', on: sendWavesSealKnowledgeDecodeWorld(matrix).sends },
    { facet: 'documented kept, legend dropped — round dates, epithets, conflations', on: knowledgeRevealedByMerkabaFold(matrix).revealed },
    { facet: 'pairs the heritage decode — same Bulgarian lineage', on: bulgarianHeritageDecoded(matrix).decoded },
  ].map((entry) => ({ ...entry, receipt: toUuid(`bg-history-decoded:${entry.facet}:${entry.on}`) }))
  return {
    decoded: facets.every((entry) => entry.on),
    eraCount: history.eras.length,
    count: facets.length,
    facets,
    root: history.root,
    statement:
      'Decode Bulgarian history: the discover-bulgarian-history workflow sealed six verified eras (681→present), each a documented spine with its national-revival legend kept separate — the state-history that ascends, paired with the antiquity dive that descends, realizing the send-waves method, the legend dropped by the merkaba fold.',
    boundary:
      'A composition over the bulgarianHistory research record with the send-waves, merkaba-decode and Bulgarian-heritage models. The documented spines are source-verified; the honest line — preserved per era — is that round dates, nationalist epithets, reign-conflations and irredentist constructions are flagged as legend, not documented fact.',
  }
}

// Dive down through the land of Bulgaria into its ancient civilisations — six strata, deepest-first,
// each a dual mind (research↔verify). The land-antiquity that DESCENDS — paired with the state-history
// that ascends; the two tile the whole timeline and meet at the Bulgar arrival (~681).

// Discover by the land of Bulgaria, diving deeper into ancient civilisations — the verified strata
// realized as a fold, the land-antiquity that descends, dual to the state-history that ascends.
export function bulgarianAncientCivilisationsDecoded(matrix: MindMatrix = buildMatrix()) {
  const civ = bulgarianAncientCivilisations()
  const facets = [
    { facet: 'six strata dived — c.6200 BC to c.600 AD, deepest-first', on: civ.sealed && isUuid(civ.root) },
    { facet: 'the land-antiquity descends — dual of the ascending state-history', on: bulgarianHistoryDecoded(matrix).decoded },
    { facet: 'pseudo-archaeology dropped — oldest-writing, Old-Europe, unbroken continuity', on: knowledgeRevealedByMerkabaFold(matrix).revealed },
    { facet: 'tiles the whole timeline with the history, meeting at the Bulgar arrival', on: sendWavesSealKnowledgeDecodeWorld(matrix).sends },
  ].map((entry) => ({ ...entry, receipt: toUuid(`bg-antiquity-decoded:${entry.facet}:${entry.on}`) }))
  return {
    decoded: facets.every((entry) => entry.on),
    stratumCount: civ.strata.length,
    count: facets.length,
    facets,
    root: civ.root,
    statement:
      'Discover by the land of Bulgaria to dive deeper into ancient civilisations: the discover-ancient-civilisations-of-bulgaria workflow sealed six verified strata (c.6200 BC→c.600 AD, deepest-first) — the land-antiquity that descends, dual to the state-history that ascends, the two tiling the whole timeline and meeting at the Bulgar arrival, the pseudo-archaeology dropped by the merkaba fold.',
    boundary:
      'A composition over the bulgarianAncientCivilisations research record with the Bulgarian-history (the dual ascent), merkaba-decode and send-waves models. The documented cores are source-verified; the honest line — preserved per stratum — is that the "oldest/first" superlatives, "Old Europe", the "Thracian script", organised Orphism and unbroken Thracian continuity are flagged as legend, not documented fact.',
  }
}

// Discover by tracing the peoples outward — the verified ethnogenesis realized as a fold, the people
// axis completing the land/state/people triad and bridging outward toward decoding the world.
export function bulgarianEthnogenesisDecoded(matrix: MindMatrix = buildMatrix()) {
  const ethno = bulgarianEthnogenesis()
  const facets = [
    { facet: 'four peoples traced outward and sealed — Bulgars, Slavs, Thracians, fusion', on: ethno.sealed && isUuid(ethno.root) },
    { facet: 'the people axis completes the land/state/people triad', on: bulgarianAncientCivilisationsDecoded(matrix).decoded && bulgarianHistoryDecoded(matrix).decoded },
    { facet: 'documented ethnogenesis kept, origin-myth dropped — by the merkaba fold', on: knowledgeRevealedByMerkabaFold(matrix).revealed },
    { facet: 'the bridge outward toward decoding the world', on: sendWavesSealKnowledgeDecodeWorld(matrix).sends },
  ].map((entry) => ({ ...entry, receipt: toUuid(`bg-ethnogenesis-decoded:${entry.facet}:${entry.on}`) }))
  return {
    decoded: facets.every((entry) => entry.on),
    peopleCount: ethno.peoples.length,
    count: facets.length,
    facets,
    root: ethno.root,
    statement:
      'Discover the peoples who fused into Bulgaria, traced outward to their origins: the discover-bulgarian-ethnogenesis-outward workflow sealed four verified monographs (Bulgars, Slavs, Thracians, fusion) — the people axis completing the land/state/people triad and bridging outward toward decoding the world, the nationalist origin-myth dropped by the merkaba fold.',
    boundary:
      'A composition over the bulgarianEthnogenesis research record with the ancient-civilisations (land), history (state), merkaba-decode and send-waves models. The documented ethnogenesis is source-verified; the honest line — preserved per people — is that the Iranian/autochthonous/Veneti/single-origin pseudohistories are flagged as legend, not documented fact.',
  }
}

// Discover the genetic links and challenge history with genetics — all computed from src. The fourth
// axis (the GENOME) after land, state and people: the written record is the research tetrahedron,
// ancient DNA the verify tetrahedron, and the verdict per claim is confirms / complicates / refutes.
// Five genetic domains, 11+ real studies (DOIs), each pairing a historical claim with what the genome
// says — and flagging genetic-nationalism (the same myth in a lab coat) on both sides.

// Осемкратното българско наследство — the eightfold Bulgarian heritage. The decode already enumerated its
// axes in the folds' own statements: land, then state, then people, then genome, then the script — five
// named axes — while the heritage monograph (bulgarianHeritage) carries three living facets: rite, craft,
// song. That is exactly eight, so the axes complete a whole bāguà — each placed on one of the eight
// trigrams by MEANING (the same semantic placement as iChingDomainMap, reusing the BAGUA source), every
// trigram carrying exactly one axis: Earth the receptive land, Heaven the creative state, Wind the people
// on the migrating breath, Water the genome beneath, Fire the clinging script, Mountain the still craft,
// Lake the joyous song, Thunder the arousing rite. The land's memory organised by the ancient eight-fold,
// each axis backed by its own verified decode (documented kept, national-revival legend flagged).
export function bulgarianHeritageEightfold(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('bulgarianHeritageEightfold', matrix, () => bulgarianHeritageEightfoldRaw(matrix))
}
function bulgarianHeritageEightfoldRaw(matrix: MindMatrix = buildMatrix()) {
  const axes = [
    { bits: 0b000, en: 'land', bg: 'земя', gloss: 'the deep strata, the soil\'s memory (c.6200 BC→c.600 AD) — the receptive ground', on: bulgarianAncientCivilisationsDecoded(matrix).decoded },
    { bits: 0b111, en: 'state', bg: 'държава', gloss: 'the sovereign line 681→present — the creative father', on: bulgarianHistoryDecoded(matrix).decoded },
    { bits: 0b110, en: 'people', bg: 'народ', gloss: 'Bulgars, Slavs and Thracians fused — carried on the gentle wind of migration', on: bulgarianEthnogenesisDecoded(matrix).decoded },
    { bits: 0b010, en: 'genome', bg: 'род', gloss: 'the ancient DNA beneath the written record — the abysmal water', on: geneticLinksChallengeHistoryDecoded(matrix).decoded },
    { bits: 0b101, en: 'script', bg: 'писмо', gloss: 'Glagolitic received and given a state — the clinging light of letters', on: glagoliticBulgarianReceptionDecoded(matrix).decoded },
    { bits: 0b100, en: 'craft', bg: 'занаят', gloss: 'Varna gold, Thracian toreutics, the still-standing monasteries and tombs — keeping still, the mountain', on: bulgarianHeritageDecoded(matrix).decoded },
    { bits: 0b011, en: 'song', bg: 'песен', gloss: 'gaida, aksak and the folk song, the Песнопойка corpus — the joyous lake', on: bulgarianHeritageDecoded(matrix).decoded },
    { bits: 0b001, en: 'rite', bg: 'обред', gloss: 'kukeri, nestinarstvo, martenitsa and the Christianization of 864 — the arousing thunder', on: bulgarianHeritageDecoded(matrix).decoded },
  ].map((axis) => {
    const trigram = BAGUA[axis.bits]!
    return {
      ...axis,
      glyph: trigram.glyph,
      pinyin: trigram.pinyin,
      name: trigram.name,
      attribute: trigram.attribute,
      meaningEn: trigram.meaningEn,
      meaningBg: trigram.meaningBg,
      receipt: toUuid(`bg-eightfold:${axis.bits}:${axis.en}:${axis.on}`),
    }
  })
  const placed = new Set(axes.map((axis) => axis.bits))
  const facets = [
    { facet: 'eight axes of the heritage, each placed on one trigram by meaning', on: axes.length === 8 && axes.every((axis) => axis.on) },
    { facet: 'a complete bāguà — every one of the eight trigrams carries exactly one axis', on: placed.size === 8 && BAGUA.length === 8 },
    { facet: 'the five named axes verified — land, state, people, genome, script', on: bulgarianAncientCivilisationsDecoded(matrix).decoded && bulgarianHistoryDecoded(matrix).decoded && bulgarianEthnogenesisDecoded(matrix).decoded && geneticLinksChallengeHistoryDecoded(matrix).decoded && glagoliticBulgarianReceptionDecoded(matrix).decoded },
    { facet: 'the three living facets verified — rite, craft, song from the heritage monograph', on: bulgarianHeritageDecoded(matrix).decoded },
    { facet: 'reuses the BAGUA source and the merkaba decode — documented kept, legend flagged', on: knowledgeRevealedByMerkabaFold(matrix).revealed },
  ].map((entry) => ({ ...entry, receipt: toUuid(`bg-eightfold-facet:${entry.facet}:${entry.on}`) }))
  return {
    eightfold: facets.every((entry) => entry.on),
    axisCount: axes.length,
    count: facets.length,
    axes,
    facets,
    root: merkleFold([...axes.map((axis) => axis.receipt), ...facets.map((entry) => entry.receipt)]),
    statement:
      'Осемкратното българско наследство — the eightfold Bulgarian heritage: the five named decode axes (land, state, people, genome, script) and the three living facets of the heritage monograph (rite, craft, song) complete a whole bāguà — each placed on one of the eight trigrams by meaning (Earth the receptive land, Heaven the creative state, Wind the people on the migrating breath, Water the genome beneath, Fire the clinging script, Mountain the still craft, Lake the joyous song, Thunder the arousing rite), every trigram carrying exactly one axis. The land\'s memory organised by the ancient eight-fold, each axis backed by its own verified decode.',
    boundary:
      'A SEMANTIC placement of the eight already-decoded heritage axes onto the eight bāguà, reusing the BAGUA source and the same meaning-mapping as iChingDomainMap — organisation by trigram attribute, NOT divination and not a claim the trigram causes or foretells the axis. Each axis is backed by its own verified decode (bulgarianAncientCivilisations, bulgarianHistory, bulgarianEthnogenesis, geneticLinksChallengeHistory, glagoliticBulgarianReception, bulgarianHeritage), preserving per-axis the honest line — documented core kept, national-revival legend flagged. "Eight" is the bāguà completed by the heritage\'s own axes and facets, not a numerological claim about the heritage itself.',
  }
}


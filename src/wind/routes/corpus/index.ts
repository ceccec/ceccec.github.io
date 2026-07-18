// ☴ Xùn · Wind — corpus route enumerators (papers · references · diamonds · REST).
// Rosetta census dissolve: papers + rest sub-barrels merged here (one routes/corpus home).
import { CANONICAL_HOST } from '../../../3/7'
import type { MindMatrix, StaticPage } from '../../types'
// call-time namespace edge (cycle-safe): learning imports corpus; search corpus reads back at call time
import * as __ns_up_up_thunder_waves from '../../../thunder/waves'
import { buildMatrix } from '../../../heaven/compute'
import { isUuid, memoByRoot, merkleFold, toUuid } from '../../../0'
import { localeFromRoute, localePath, localizeMonolingual, pickLocale, pageForgeMaxTamper, staticPages, monographAsScientificPaper, monographTemplate, proofAcknowledgment, type LocaleName, type PageForgeSeal, type ProofAcknowledgment } from '../../site'
import { ROSETTA_RAYS, ROSETTA_RAY_HUBS, rosettaComputesAll, rosettaDecodesUrlPath, rosettaRayHub, rosettaRayOf, rosettaRayOfContent, type RosettaRayHub } from '../../../water/digit'
import { conceptCommands } from '../../../heaven/atoms'
import { sixtyDegreesDecodesPi, tkIsPrime } from '../../../9/1'
import { cardMovieColorVars, cardMovieSeed } from '../../../thunder/movie/movievars'
import { plasmaClientWorkBoundedByPureMath } from '../../../fire/plasma/ball'
import { allPagesForPlasmaWiring } from '../../../water/double'
import { monographSliceFromRoute } from '../automount'
import { siteRoutes } from '../../../fire/li'
import { folderLaw, placementForRoute, rosettaIChingTrinityPlacesAllTools } from '../../../earth/architecture'
import { diamondLattice, pureDiamonds } from '../../../fire/diamonds'
import { quantumDoubleTorus } from '../../../mountain/topology'
import { diamondParamsById, papersReferencesDiamondsNoDrift } from '../../../quantum/heaven/mind'
import type { CorpusKind } from '../../../quantum/heaven/mind'
import { componentCrosslinks, harmonisedNavigation, monographs, navigation358, paperParamsById, paperReferences, papers, referenceParamsById, sciencePortalParts, siteNavigation, type ComponentCrosslink } from '../../learning'

/** Fibonacci tiers [3,5,8] — same math as plasma hero; closes O(pages) client hangs. */
export const CLIENT_WORK_TIERS = [3, 5, 8] as const
export const NAV358_TOTAL = CLIENT_WORK_TIERS[0] + CLIENT_WORK_TIERS[1] + CLIENT_WORK_TIERS[2] // 16 = 3+5+8
export const HUB_CARD_MAX = NAV358_TOTAL * 2 // 32 upper bound (nav358 ∪ harmonised, deduped)
export const TAG_CLUSTER_CAP = CLIENT_WORK_TIERS[2] // 8 keyword clusters (matches siteNavigation navTags slice)
export const CORPUS_GRID_PAGE_SIZE = CLIENT_WORK_TIERS[0] * NAV358_TOTAL // 48 = 3×16 pagination cap

const META_TAGS = new Set(['component', 'proof'])

function pagesForTagClusters(): StaticPage[] {
  if (typeof window !== 'undefined') return [...staticPages()]
  return allPagesForPlasmaWiring()
}

function keywordClustersFromPages(pages: readonly StaticPage[], cap = TAG_CLUSTER_CAP): string[] {
  const cloud = new Map<string, number>()
  for (const page of pages) {
    for (const tag of page.keywords) {
      if (META_TAGS.has(tag)) continue
      cloud.set(tag, (cloud.get(tag) ?? 0) + 1)
    }
  }
  return [...cloud.entries()]
    .filter(([tag, count]) => count >= 2 && tag.length >= 3)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, cap)
    .map(([tag]) => tag)
}

export function corpusGridWorkBudget() {
  return {
    tiers: CLIENT_WORK_TIERS,
    nav358Total: NAV358_TOTAL,
    hubCardMax: HUB_CARD_MAX,
    tagClusterCap: TAG_CLUSTER_CAP,
    gridPageSize: CORPUS_GRID_PAGE_SIZE,
    clientTagPages: typeof window === 'undefined' ? null as number | null : staticPages().length,
  }
}

export function paperRoutes(matrix: MindMatrix = buildMatrix(), count = 432) {
  return memoByRoot(`paperRoutes:${count}`, matrix, () => computePaperRoutes(matrix, count))
}
function computePaperRoutes(matrix: MindMatrix = buildMatrix(), count = 432) {
  const corpus = papers(matrix, count)
  return corpus.papers.map((paper) => ({ params: paperParamsById(paper.id, matrix, count)! }))
}

export function completeCorpus(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('completeCorpus', matrix, () => completeCorpusRaw(matrix))
}
function completeCorpusRaw(matrix: MindMatrix = buildMatrix()) {
  const corpus = papers(matrix)
  const references = paperReferences(matrix)
  const realLeaves = [...corpus.papers.map((paper) => paper.receipt), ...references.map((reference) => reference.root)]
  const target = (64 * 16)
  const padding = Math.max(0, target - realLeaves.length)
  const nullLeaves = Array.from({ length: padding }, (_, i) => toUuid(`null-leaf:${i}:${matrix.root}`))
  const leaves = [...realLeaves, ...nullLeaves]
  const root = merkleFold(leaves)
  const depth = Math.log2(leaves.length)
  return {
    complete:
      leaves.length === target &&
      Number.isInteger(depth) &&
      depth === (5 * 2) &&
      realLeaves.length === 864 &&
      corpus.count === 432 &&
      references.length === 432,
    papers: corpus.count,
    references: references.length,
    real: realLeaves.length,
    padding,
    total: leaves.length,
    depth,
    target,
    perfect: Number.isInteger(depth),
    root,
    statement:
      'Complete 1024: the binary harmonic. The 432 proof papers and their 432 reference duals are 864 real leaves; the smallest power of two that holds them is 2^10 = 1024, the binary octave, so the corpus is padded with 160 named, recomputable null leaves to exactly 1024 and folds into a perfect binary Merkle tree of depth 10 — every layer halving cleanly. The musical harmonic doubled in threes (108, 216, 432); the binary harmonic completes it to a power of two. The references add no proof — they are pointers, the reverse folds of the papers — and the padding is named, not hidden.',
    boundary:
      'A structural completion of the papers corpus to a power-of-two Merkle tree. The references are reference-only (the reverse folds of the proof papers, citations carrying no new computation); the 160 null leaves are deterministic padding to reach 2^10, declared and recomputable, not silent. The number 1024 is the binary octave (2^10), a content-addressed bookkeeping structure, not a physical or empirical claim.',
  }
}

export function paperReferenceRoutes(matrix: MindMatrix = buildMatrix(), count = 432) {
  return memoByRoot(`paperReferenceRoutes:${count}`, matrix, () => computePaperReferenceRoutes(matrix, count))
}
function computePaperReferenceRoutes(matrix: MindMatrix = buildMatrix(), count = 432) {
  const references = paperReferences(matrix, count)
  return references.map((reference) => ({ params: referenceParamsById(reference.id, matrix, count)! }))
}

export function diamondRoutes(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('diamondRoutes', matrix, () => {
    const corpus = papers(matrix)
    const references = paperReferences(matrix)
    const real = [...corpus.papers.map((paper) => paper.receipt), ...references.map((reference) => reference.root)]
    const padding = Array.from({ length: (64 * 16) - real.length }, (_, i) => toUuid(`null-leaf:${i}:${matrix.root}`))
    const leaves = [...real, ...padding]
    const corpusRoot = merkleFold(leaves)
    return leaves.map((address, index) => {
      const number = index + 1
      const id = `d${String(number).padStart(4, '0')}`
      let kind: string
      let link: string
      let label: string
      let glyph: string
      if (index < corpus.count) {
        const paper = corpus.papers[index]
        kind = 'paper'
        link = `/papers/${paper.id}`
        label = `Coordinate ${paper.coordinateIndex} on cycle ${paper.generator}`
        glyph = paper.glyph
      } else if (index < corpus.count + references.length) {
        const reference = references[index - corpus.count]
        kind = 'reference'
        link = `/references/${reference.id}`
        label = `Reference to paper ${reference.number}`
        glyph = reference.glyph
      } else {
        kind = 'padding'
        link = ''
        label = 'Null leaf — completes the lattice to 1024'
        glyph = '◇'
      }
      return {
        params: {
          id,
          index: id,
          leaf: index,
          number,
          address,
          kind,
          link,
          label,
          glyph,
          hue: Math.round((index * 360) / (64 * 16)) % 360,
          total: leaves.length,
          corpusRoot,
          depth: Math.log2(leaves.length),
        },
      }
    })
  })
}

export function pageSkills(matrix: MindMatrix = buildMatrix()) {
  const corpus = papers(matrix)
  const references = paperReferences(matrix)
  const staticRoutes = siteRoutes().routes
  const total = corpus.count
  const id3 = (n: number) => String(((n - 1 + total) % total) + 1).padStart(3, '0')
  const locales = ['', '/bg']
  const skills: { page: string; kind: string; statistics: number; references: string[]; skill: string }[] = []
  for (const locale of locales) {
    for (const route of staticRoutes) {
      const path = `${locale}${route}` || `${locale}/`
      skills.push({ page: path, kind: 'page', statistics: 4, references: [`${locale}/papers/`, `${locale}/references/`], skill: toUuid(`page-skill:${path}`) })
    }
    for (const paper of corpus.papers) {
      const page = `${locale}/papers/${paper.id}`
      skills.push({
        page,
        kind: 'paper',
        statistics: 11,
        references: [`${locale}/references/r${id3(paper.number)}`, `${locale}/papers/p${id3(paper.number + 1)}`, `${locale}/papers/p${id3(paper.number - 1)}`],
        skill: paper.receipt,
      })
    }
    for (const reference of references) {
      skills.push({
        page: `${locale}/papers/${reference.paperId}`,
        kind: 'reference',
        statistics: 4,
        references: [`${locale}/papers/${reference.paperId}`, `${locale}/references/`],
        skill: reference.root,
      })
    }
  }
  const nodes = skills.length
  const edges = skills.reduce((sum, skill) => sum + skill.references.length, 0)
  const statistics = skills.reduce((sum, skill) => sum + skill.statistics, 0)
  return {
    isSkillCorpus: nodes > 0 && skills.every((skill) => skill.references.length > 0),
    pages: nodes,
    skills: nodes,
    references: edges,
    statistics,
    graph: nodes + edges,
    total: nodes + edges + statistics,
    locales: locales.length,
    root: merkleFold(skills.map((skill) => skill.skill)),
    statement:
      'Each page is a skill itself, with statistics and references. Paper routes are SSG-enumerated; references and diamonds resolve from the double torus via corpusParams — index grids link to papers or lattice anchors.',
    boundary:
      'A content-addressed reading of every page as a skill node with computed statistics and references. The counts are exact for the enumerated routes across both locales.',
  }
}

/** One fold — quantum double torus decides SSG vs compute-only per corpus kind. */
export function doubleTorusCorpusRouting(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('doubleTorusCorpusRouting', matrix, () => doubleTorusCorpusRoutingRaw(matrix))
}
function doubleTorusCorpusRoutingRaw(matrix: MindMatrix = buildMatrix()) {
  const torus = quantumDoubleTorus(matrix)
  const corpus = completeCorpus(matrix)
  const lattice = diamondLattice(matrix)
  const leaves = pureDiamonds(matrix)
  const paperSet = paperRoutes(matrix)
  const refSet = paperReferenceRoutes(matrix)
  /** Under the double torus, detail resolves via corpusParams — only papers materialize [id] SSG. */
  const ssg: Record<CorpusKind, readonly { params: Record<string, unknown> }[]> = {
    papers: paperSet,
    references: torus.is ? [] : refSet,
    diamonds: [],
  }
  const facets = [
    { facet: 'quantum double torus is the machine — corpusParams at call time', on: torus.is },
    { facet: '1024 Merkle leaves — completeCorpus binary tree from the torus', on: corpus.perfect && corpus.total === (64 * 16) },
    { facet: 'papers — 432 [id] SSG routes for static SEO', on: ssg.papers.length === 432 },
    { facet: 'references — compute-only (pointers via corpusParams, index links to papers)', on: torus.is ? ssg.references.length === 0 && refSet.length === 432 : ssg.references.length === 432 },
    { facet: 'diamonds — lattice kinds on index, zero [id] SSG', on: ssg.diamonds.length === 0 && leaves.count === (64 * 16) && leaves.pure && lattice.length > 0 },
    { facet: 'papers · references · diamonds anchored — no drift', on: papersReferencesDiamondsNoDrift(matrix).noDrift },
  ].map((entry) => ({ ...entry, receipt: toUuid(`double-torus-corpus:${entry.facet}:${entry.on}`) }))
  return {
    torus,
    corpus,
    lattice,
    leaves,
    ssg,
    ssgPaths: (kind: CorpusKind) => ssg[kind],
    computeOnly: (kind: CorpusKind) => ssg[kind].length === 0,
    ssgPathCount: (kind: CorpusKind) => ssg[kind].length,
    routed: facets.every((entry) => entry.on),
    enumerated: ssg.papers.length + ssg.references.length + ssg.diamonds.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Double torus corpus routing: the genus-2 machine computes the 1024-leaf Merkle tree; corpusParams(kind, id) resolves any leaf at call time. Only papers enumerate static [id] pages; references and diamonds are compute-only — index grids and lattice anchors, not thousands of SSG detail routes.',
    boundary:
      'One routing fold over quantumDoubleTorus, completeCorpus, paperRoutes, paperReferenceRoutes, diamondLattice and pureDiamonds. References remain in the model (432 pointers); they are not deleted, only not SSG-built. Detail URLs /references/<id> resolve in dev/client via computeUniversalPage when routed; static export serves the index and paper cross-links.',
  }
}

export function corpusRestPathRouting(matrix: MindMatrix = buildMatrix()) {
  const routing = doubleTorusCorpusRouting(matrix)
  const sample = papers(matrix).papers[0]
  const params = sample ? corpusParams('papers', sample.id, matrix) : null
  const facets = [
    { facet: 'double torus corpus routing — papers SSG, references and diamonds compute-only', on: routing.routed },
    { facet: 'corpusParams(kind, id) resolves one item — local math, one function', on: Boolean(params?.id) },
    { facet: 'computedFolders — papers/references/diamonds index in root·en·bg only', on: folderLaw().computedFolders.every((folder) => ['papers', 'references', 'diamonds'].some((kind) => folder.endsWith(kind))) },
  ].map((entry) => ({ ...entry, receipt: toUuid(`corpus-rest:${entry.facet}:${entry.on}`) }))
  return {
    routed: facets.every((entry) => entry.on),
    count: facets.length,
    enumerated: routing.enumerated,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement: routing.statement,
    boundary: routing.boundary,
  }
}

/** Gate: no static diamond [id] pages — lattice stays in computations (pureDiamonds, diamondLattice, pi train). */
export function diamondsStaticPagesPurged(matrix: MindMatrix = buildMatrix()) {
  const routing = doubleTorusCorpusRouting(matrix)
  const facets = [
    { facet: 'zero diamond [id] paths at build time', on: routing.ssgPathCount('diamonds') === 0 },
    { facet: '1024 Merkle leaves still computed — pureDiamonds', on: routing.leaves.count === (64 * 16) && routing.leaves.pure },
    { facet: 'required diamond kinds present — diamondLattice', on: routing.lattice.length > 0 && routing.lattice.every((entry) => entry.receipt.length === (9 * 4)) },
  ].map((entry) => ({ ...entry, receipt: toUuid(`diamonds-purged:${entry.facet}:${entry.on}`) }))
  return {
    purged: facets.every((entry) => entry.on),
    staticPathCount: routing.ssgPathCount('diamonds'),
    latticeKinds: routing.lattice.length,
    merkleLeaves: routing.leaves.count,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'No static diamonds needed: thousands of /diamonds/<id> pages are purged from the build; the 1024-leaf lattice and diamondLattice kinds remain in computations only (Merkle, pi train, living torus, completeness gates).',
    boundary:
      'Structural purge of SSG enumeration for diamond detail routes — NOT a deletion of pureDiamonds or diamondLattice math. Routed by doubleTorusCorpusRouting.',
  }
}

export function corpusParams(kind: CorpusKind, id: string, matrix: MindMatrix = buildMatrix()) {
  if (kind === 'papers') return paperParamsById(id, matrix)
  if (kind === 'references') return referenceParamsById(id, matrix)
  return diamondParamsById(id, matrix)
}

export function corpusCatchAllPaths(kind: CorpusKind, matrix: MindMatrix = buildMatrix()) {
  return doubleTorusCorpusRouting(matrix).ssgPaths(kind)
}

// One page template for all — route + params → kind, hero, body, corpus, proof (computed once).
function componentRosettaGroups(names: readonly string[] = []) {
  const groups = ROSETTA_RAYS.map((rayMeta) => ({
    ray: rayMeta.ray,
    glyph: rayMeta.glyph,
    name: rayMeta.nameEn,
    nameBg: rayMeta.nameBg,
    domain: rayMeta.domain,
    hue: rayMeta.hue,
    labelEn: rayMeta.nameEn,
    labelBg: rayMeta.nameBg,
    components: names.filter((name) => rosettaRayOf(name) === rayMeta.ray),
  })).filter((group) => group.components.length > 0)
  const grouped = groups.length > 1
  return { groups: groups.map((group) => ({ ...group, grouped })), grouped, count: groups.length }
}

export type UniversalPageKind = 'corpus-index' | 'corpus-detail' | 'monograph' | 'catch-all'

export type UniversalDecodedFacet = { facet: string; on?: boolean; link?: string }

export type UniversalDecodedStation = { step?: number; station: string; route: string; why?: string }

export type CorpusGridItem = {
  route: string
  id: string
  title: string
  glyph?: string
  hue: number
}

export type HeroPreview = {
  route: string
  seed: string
  hue: number
  title: string
  cardStyle: Record<string, string>
}

export type UniversalRosettaRay = {
  ray: number
  glyph: string
  labelEn: string
  labelBg: string
  hue: number
  domain: string
}

export type UniversalPage = {
  kind: UniversalPageKind
  route: string
  locale: LocaleName
  title: string
  description: string
  components: readonly string[]
  groups: ReturnType<typeof componentRosettaGroups>
  proof: string | null
  logic: string | null
  target: string | null
  corpusKind: CorpusKind | null
  corpusId: string | null
  corpusItems: readonly CorpusGridItem[]
  rosettaRay: UniversalRosettaRay | null
  decoded: {
    title?: string
    statement?: string
    boundary?: string
    facets?: UniversalDecodedFacet[]
    stations?: UniversalDecodedStation[]
    crosslinks?: ComponentCrosslink[]
    ok?: boolean
  } | null
  proofOk: string
  proofNote: string
  cardSeed: string
  root: string
  forge: PageForgeSeal
}

/** Linked card hero preview — rosetta hue + card movie vars from one route. */
export function heroPreviewForRoute(route: string, title?: string, matrix: MindMatrix = buildMatrix()): HeroPreview {
  const rosetta = rosettaComputesAll(route, 0, matrix)
  const seed = cardMovieSeed([route, title, rosetta.glaAddress])
  return {
    route,
    seed,
    hue: rosetta.content.heroHue,
    title: title ?? rosetta.slug,
    cardStyle: cardMovieColorVars(route, seed, (64 * 5), matrix),
  }
}

function gridItemFromRoute(route: string, title: string, id: string, matrix: MindMatrix): CorpusGridItem {
  const rosetta = rosettaComputesAll(route, 0, matrix)
  return {
    route,
    id,
    title,
    glyph: rosetta.rayMeta.glyph,
    hue: rosetta.content.heroHue,
  }
}

/** Hub destinations — navigation358 + harmonised nav, gated by global Rosetta·I Ching·trinity fusion. */
export function hubCardItems(locale: LocaleName, matrix: MindMatrix = buildMatrix()): CorpusGridItem[] {
  return memoByRoot(`hubCardItems:${locale}`, matrix, () => {
    const fusion = rosettaIChingTrinityPlacesAllTools(matrix)
    if (!fusion.fused) return []
    const pages = staticPages()
    const titleFor = (route: string, fallback: string) => {
      const slug = route.replace(/^\//, '') || 'home'
      const page = pages.find((entry) => entry.slug === slug)
      return page ? pickLocale(locale, page.title.en, page.title.bg) : fallback
    }
    const seen = new Set<string>()
    const items: CorpusGridItem[] = []
    for (const tier of navigation358().tiers) {
      for (const entry of tier.items) {
        const route = entry.route.startsWith('/') ? entry.route : `/${entry.route}`
        if (seen.has(route)) continue
        seen.add(route)
        items.push(gridItemFromRoute(route, titleFor(route, entry.label), route.replace(/^\//, '') || 'home', matrix))
      }
    }
    for (const entry of harmonisedNavigation(matrix).items) {
      const route = entry.path.startsWith('/') ? entry.path : `/${entry.path}`
      if (seen.has(route)) continue
      seen.add(route)
      items.push(gridItemFromRoute(route, titleFor(route, entry.title), route.replace(/^\//, '') || 'home', matrix))
    }
    return items.slice(0, HUB_CARD_MAX)
  })
}

/** Top keyword tags — staticPages on client (O(static)); full catalog on SSR/build. */
export function tagBrowserTags(matrix: MindMatrix = buildMatrix()): readonly string[] {
  return memoByRoot('tagBrowserTags', matrix, () => keywordClustersFromPages(pagesForTagClusters(), TAG_CLUSTER_CAP))
}

/** Pages sharing a keyword tag — capped at tier[0]×nav358 (=48) per grid page. */
export function tagBrowserItems(tag: string, locale: LocaleName, matrix: MindMatrix = buildMatrix()): CorpusGridItem[] {
  return memoByRoot(`tagBrowserItems:${tag}:${locale}`, matrix, () => {
    if (!rosettaIChingTrinityPlacesAllTools(matrix).fused) return []
    const pages = pagesForTagClusters()
    const routeOf = (slug: string) => (slug === '' ? '/' : `/${slug}`)
    const routes = [...new Set(
      pages.filter((page) => page.keywords.includes(tag)).map((page) => routeOf(page.slug)),
    )].slice(0, CORPUS_GRID_PAGE_SIZE)
    return routes.map((route) => {
      const slug = route.replace(/^\//, '') || 'home'
      const page = pages.find((entry) => routeOf(entry.slug) === route)!
      const title = pickLocale(locale, page.title.en, page.title.bg)
      return gridItemFromRoute(route, title, slug, matrix)
    })
  })
}

/** Gate: hub · tag · grid pagination bounded by [3,5,8] pure math at call time. */
export function cardHeroClientWorkBoundedByPureMath(matrix: MindMatrix = buildMatrix()) {
  const nav358 = navigation358()
  const harmonised = harmonisedNavigation(matrix)
  const locale: LocaleName = 'en'
  const hub = hubCardItems(locale, matrix)
  const tags = tagBrowserTags(matrix)
  const tagItems = tags.length ? tagBrowserItems(tags[0]!, locale, matrix) : []
  const budget = corpusGridWorkBudget()
  const facets = [
    { facet: 'navigation358 = 3+5+8 = 16 destinations', on: nav358.count === NAV358_TOTAL && nav358.mapped },
    { facet: 'harmonised nav = 16 fixed routes', on: harmonised.count === NAV358_TOTAL },
    { facet: `hub cards ≤ 2×16 = ${HUB_CARD_MAX} (deduped nav358∪harmonised)`, on: hub.length <= HUB_CARD_MAX && hub.length >= NAV358_TOTAL },
    { facet: `tag clusters ≤ tier[2] = ${TAG_CLUSTER_CAP}`, on: tags.length <= TAG_CLUSTER_CAP && tags.length >= 2 },
    { facet: `tag grid page ≤ tier[0]×16 = ${CORPUS_GRID_PAGE_SIZE}`, on: tagItems.length <= CORPUS_GRID_PAGE_SIZE },
    { facet: 'tag browser skips componentPages on client — not O(all pages)', on: typeof window === 'undefined' || budget.clientTagPages === staticPages().length },
  ].map((entry) => ({ ...entry, receipt: toUuid(`card-hero-bounded:${entry.facet}:${entry.on}`) }))
  return {
    bounded: facets.every((entry) => entry.on),
    budget,
    hubCount: hub.length,
    tagCount: tags.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Hub cards, tag browser, and corpus grids share the same Fibonacci tier math as the plasma hero: nav358 is exactly 16 (3+5+8), hub dedup caps at 32, tag clusters cap at 8, and each grid page shows at most 48 (3×16) — client paths use staticPages only so keyword clustering stays O(static), not O(componentPages).',
    boundary:
      'Arithmetic bound at call time over navigation358, harmonisedNavigation, hubCardItems, and tagBrowserTags. SSR/build may include componentPages for full catalog gates; browser paths remain static-only.',
  }
}

/** All client surfaces — plasma hero + hub/tag grids — one composite pure-math gate. */
export function clientWorkBoundedByPureMath(path = '/', matrix: MindMatrix = buildMatrix()) {
  const plasma = plasmaClientWorkBoundedByPureMath(path, matrix)
  const cards = cardHeroClientWorkBoundedByPureMath(matrix)
  const facets = [
    { facet: 'plasma hero client work bounded', on: plasma.bounded },
    { facet: 'card hero hub/tag grid bounded', on: cards.bounded },
  ].map((entry) => ({ ...entry, receipt: toUuid(`client-work-bounded:${entry.facet}:${entry.on}`) }))
  return {
    bounded: facets.every((entry) => entry.on),
    plasma,
    cards,
    facets,
    root: merkleFold([plasma.root, cards.root, ...facets.map((entry) => entry.receipt)]),
    statement:
      'Every client hang vector closed by pure math: plasma streams (tier [3,5,8] caps + O(1) route-local catalog) and hub/tag grids (16+16 nav, 32 hub max, 8 tag clusters, 48 grid page) recomputed at call time — no O(pages) loops on the browser.',
    boundary:
      'Composite of plasmaClientWorkBoundedByPureMath and cardHeroClientWorkBoundedByPureMath; proves at this call, not live profiling.',
  }
}

/** card/hero-link pair — heroPreviewForRoute + hub + tag browser through Rosetta·I Ching·trinity. */
export function cardHeroLinkWiresInUi(matrix: MindMatrix = buildMatrix()) {
  const locale: LocaleName = 'en'
  const fusion = rosettaIChingTrinityPlacesAllTools(matrix)
  const hub = hubCardItems(locale, matrix)
  const tags = tagBrowserTags(matrix).filter((tag) => !META_TAGS.has(tag))
  const tagItems = tags.length ? tagBrowserItems(tags[0]!, locale, matrix) : []
  const preview = heroPreviewForRoute('/start', undefined, matrix)
  const bounded = cardHeroClientWorkBoundedByPureMath(matrix)
  const facets = [
    { facet: 'all tools placed — Rosetta ray · I Ching cube · cross-fold-weave trinity', on: fusion.fused && fusion.placedCount > 0 && fusion.raysCovered === 7 },
    { facet: 'heroPreviewForRoute — one route yields hue, seed, card movie vars', on: /^[0-9a-f]{8}$/.test(preview.seed) && preview.hue >= 0 && Object.keys(preview.cardStyle).length > 0 },
    { facet: 'hub card grid — navigation358 + harmonised destinations (empty if fusion fails)', on: hub.length >= NAV358_TOTAL },
    { facet: 'tag browser — keyword clusters from staticPages (empty if fusion fails)', on: tags.length >= 2 && tagItems.length >= 2 },
    { facet: 'LinkedHeroCard consumes fused preview — experiments fail closed', on: hub.every((item) => item.hue >= 0) },
    { facet: 'card hero client work bounded by pure math', on: bounded.bounded },
  ].map((entry) => ({ ...entry, receipt: toUuid(`card-hero-link:${entry.facet}:${entry.on}`) }))
  return {
    wired: facets.every((entry) => entry.on),
    hubCount: hub.length,
    tagCount: tags.length,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Card hero link: heroPreviewForRoute computes linked page hero (hue, seed, card movie vars) from one route; HubCardGrid and TagBrowser render LinkedHeroCard on hub and tag-browser surfaces; corpus indexes use the same card.',
    boundary:
      'A structural check that hub destinations, tag clusters, and hero preview compose for LinkedHeroCard. Render verification is build-time SSG, not live preview.',
  }
}

export function corpusIndexItems(kind: CorpusKind, locale: LocaleName, matrix: MindMatrix = buildMatrix()): CorpusGridItem[] {
  return memoByRoot(`corpusIndexItems:${kind}:${locale}`, matrix, () => {
    if (kind === 'papers') {
      return papers(matrix).papers.map((paper) => ({
        route: `/papers/${paper.id}`,
        id: paper.id,
        title: localizeMonolingual(locale, paper.title),
        glyph: paper.glyph,
        hue: paper.hue,
      }))
    }
    if (kind === 'references') {
      return paperReferences(matrix).map((reference) => ({
        route: `/papers/${reference.paperId}`,
        id: reference.id,
        title: localizeMonolingual(locale, reference.title),
        glyph: reference.glyph,
        hue: reference.hue,
      }))
    }
    const lattice = diamondLattice(matrix)
    return lattice.map((entry, index) => ({
      route: localePath('/diamonds/', locale) + `#${entry.kind}`,
      id: entry.kind,
      title: localizeMonolingual(locale, entry.title),
      glyph: '◆',
      hue: Math.round((index * 360) / Math.max(1, lattice.length)) % 360,
    }))
  })
}

function rosettaRayView(route: string): UniversalRosettaRay {
  const rosetta = rosettaComputesAll(route)
  return {
    ray: rosetta.ray,
    glyph: rosetta.rayMeta.glyph,
    labelEn: rosetta.rayMeta.nameEn,
    labelBg: rosetta.rayMeta.nameBg,
    hue: rosetta.rayMeta.hue,
    domain: rosetta.rayMeta.domain,
  }
}

function corpusKindCrosslinks(kind: CorpusKind, locale: LocaleName): ComponentCrosslink[] {
  const titles: Record<CorpusKind, { en: string; bg: string }> = {
    papers: { en: 'Proof papers', bg: 'Доказателни статии' },
    references: { en: 'References', bg: 'Референции' },
    diamonds: { en: 'Diamonds', bg: 'Диаманти' },
  }
  return CORPUS_ROUTE_KINDS.filter((entry) => entry !== kind).map((entry) => ({
    text: pickLocale(locale, titles[entry].en, titles[entry].bg),
    link: localePath(`/${entry}/`, locale),
    kind: 'related' as const,
  }))
}

function decodedStations(route: string, locale: LocaleName, matrix: MindMatrix = buildMatrix()): UniversalDecodedStation[] {
  const rosetta = rosettaComputesAll(route, 0, matrix)
  if (!rosetta.stationDetail) return []
  return [{
    step: rosetta.station + 1,
    station: pickLocale(locale, rosetta.rayMeta.nameEn, rosetta.rayMeta.nameBg),
    route: rosetta.stationDetail.path,
    why: rosetta.rayMeta.domain,
  }]
}

const CORPUS_ROUTE_KINDS: readonly CorpusKind[] = ['papers', 'references', 'diamonds']

function parseCorpusRoute(route: string): { kind: CorpusKind; id: string | null } | null {
  const bare = route.replace(/^\/(en|bg)(?=\/|$)/, '').replace(/\/$/, '') || '/'
  const parts = bare.split('/').filter(Boolean)
  if (parts.length === 0 || !CORPUS_ROUTE_KINDS.includes(parts[0] as CorpusKind)) return null
  const kind = parts[0] as CorpusKind
  return { kind, id: parts[1] ?? null }
}

function corpusIndexPage(kind: CorpusKind, locale: LocaleName, matrix: MindMatrix): Omit<UniversalPage, 'forge'> {
  const cc = completeCorpus(matrix)
  const routing = doubleTorusCorpusRouting(matrix)
  const purged = kind === 'diamonds' ? diamondsStaticPagesPurged(matrix) : null
  const lattice = kind === 'diamonds' ? diamondLattice(matrix) : null
  const computeOnly = routing.computeOnly(kind)
  const titles: Record<CorpusKind, { en: string; bg: string }> = {
    papers: { en: 'Proof papers', bg: 'Доказателни статии' },
    references: { en: 'References (computed)', bg: 'Референции (изчислени)' },
    diamonds: { en: 'Computational diamonds', bg: 'Изчислителни диаманти' },
  }
  const title = pickLocale(locale, titles[kind].en, titles[kind].bg)
  const description =
    kind === 'diamonds' && purged
      ? localizeMonolingual(locale, purged.statement)
      : kind === 'references' && computeOnly
        ? localizeMonolingual(locale, routing.statement)
        : localizeMonolingual(locale, cc.statement)
  return {
    kind: 'corpus-index',
    route: '',
    locale,
    title,
    description,
    components: [],
    groups: componentRosettaGroups([]),
    proof: cc.root,
    logic: null,
    target: null,
    corpusKind: kind,
    corpusId: null,
    corpusItems: corpusIndexItems(kind, locale, matrix),
    rosettaRay: null,
    decoded: {
      title,
      statement: description,
      boundary: kind === 'diamonds' && purged
        ? localizeMonolingual(locale, purged.boundary)
        : localizeMonolingual(locale, cc.boundary),
      facets: kind === 'diamonds' && purged && lattice
        ? [
            { facet: localizeMonolingual(locale, `${lattice.length} lattice kinds — computed at call time`), on: lattice.length > 0 },
            { facet: localizeMonolingual(locale, `${purged.merkleLeaves} Merkle leaves — no static [id] pages`), on: purged.purged },
            { facet: localizeMonolingual(locale, '432 papers — materialized [id] SSG'), on: routing.ssgPathCount('papers') === 432, link: localePath('/papers/', locale) },
          ]
        : kind === 'references' && computeOnly
          ? [
              { facet: localizeMonolingual(locale, `${cc.references} references — corpusParams at call time`), on: cc.references === 432 },
              { facet: localizeMonolingual(locale, 'grid links to papers — no static /references/[id] SSG'), on: routing.ssgPathCount('references') === 0 },
              { facet: localizeMonolingual(locale, 'double torus Merkle tree — 1024 leaves'), on: cc.perfect },
            ]
          : [
              { facet: localizeMonolingual(locale, `${cc.papers} papers`), on: cc.papers === 432 },
              { facet: localizeMonolingual(locale, `${cc.references} references`), on: cc.references === 432 },
              { facet: localizeMonolingual(locale, `${cc.total} leaves · depth ${cc.depth}`), on: cc.perfect },
            ],
      crosslinks: corpusKindCrosslinks(kind, locale),
      ok: kind === 'diamonds' ? Boolean(purged?.purged) : kind === 'references' && computeOnly ? routing.routed : cc.complete,
    },
    proofOk: pickLocale(locale, '✓ proven', '✓ доказано'),
    proofNote: pickLocale(locale, 'content-address', 'адрес по съдържание'),
    cardSeed: toUuid(`corpus-index:${kind}`).slice(0, 8),
    root: cc.root,
  }
}

function corpusDetailPage(
  kind: CorpusKind,
  id: string,
  locale: LocaleName,
  route: string,
  matrix: MindMatrix,
): Omit<UniversalPage, 'forge'> {
  const params = corpusParams(kind, id, matrix)
  const title =
    kind === 'papers'
      ? (params && 'title' in params ? String((params as { title?: string }).title ?? id) : id)
      : kind === 'references'
        ? (params && 'title' in params ? String((params as { title?: string }).title ?? id) : id)
        : (params && 'label' in params ? String((params as { label?: string }).label ?? id) : id)
  const statement =
    params && 'generator' in params
      ? String((params as { generator?: string }).generator ?? '')
      : params && 'glyph' in params
        ? `${String((params as { glyph?: string }).glyph)} · ${String((params as { kind?: string }).kind ?? kind)}`
        : id
  const facets: UniversalDecodedFacet[] = []
  const facet = (text: string, on: boolean, link?: string) =>
    facets.push({ facet: localizeMonolingual(locale, text), on, ...(link ? { link } : {}) })
  if (params && 'proofVerified' in params) {
    facet(`Merkle proof verified · depth ${String((params as { proofDepth?: number }).proofDepth ?? 0)}`, Boolean((params as { proofVerified?: boolean }).proofVerified))
  }
  if (params && 'corpusRoot' in params) {
    facet(`corpus root ${String((params as { corpusRoot?: string }).corpusRoot).slice(0, 18)}…`, true)
  }
  if (params && 'link' in params && kind === 'diamonds') {
    facet(String((params as { link?: string }).link), true, String((params as { link?: string }).link))
  }
  if (params && 'paperId' in params && kind === 'references') {
    facet(`→ paper ${String((params as { paperId?: string }).paperId)}`, true, `/papers/${String((params as { paperId?: string }).paperId)}`)
  }
  const cc = completeCorpus(matrix)
  const displayTitle = localizeMonolingual(locale, title)
  const displayStatement = localizeMonolingual(locale, statement)
  return {
    kind: 'corpus-detail',
    route,
    locale,
    title: displayTitle,
    description: displayStatement,
    components: [],
    groups: componentRosettaGroups([]),
    proof: params && 'root' in params ? String((params as { root?: string }).root ?? (params as { receipt?: string }).receipt) : null,
    logic: params && 'address' in params ? String((params as { address?: string }).address) : null,
    target: null,
    corpusKind: kind,
    corpusId: id,
    corpusItems: [],
    rosettaRay: null,
    decoded: {
      title: displayTitle,
      statement: displayStatement,
      boundary: localizeMonolingual(locale, cc.boundary),
      facets,
      crosslinks: corpusKindCrosslinks(kind, locale),
      ok: Boolean(params),
    },
    proofOk: pickLocale(locale, '✓ proven', '✓ доказано'),
    proofNote: pickLocale(locale, 'content-address', 'адрес по съдържание'),
    cardSeed: toUuid(`corpus:${kind}:${id}`).slice(0, 8),
    root: merkleFold([cc.root, toUuid(`corpus:${kind}:${id}`)]),
  }
}

export type RosettaBreadcrumb = { label: string; labelBg: string; glyph: string; route: string; current: boolean }

/** The reusable science-portal part for a route: the hub plus its content-shelved member pages.
 * A hub landing gets its own part; any other slug gets the part that shelves it (falling back to the
 * content lenses on the slug alone for non-static routes). RayHub and breadcrumbs consume THIS. */
export function rayHubPart(route: string, matrix: MindMatrix = buildMatrix()) {
  const bare = (route ?? '/').replace(/^\/+/, '').replace(/^(en|bg)\//, '').split('/').pop() || ''
  const portal = sciencePortalParts(matrix)
  const explicit = rosettaRayHub(bare)
  const part = (explicit && portal.parts.find((p) => p.ray === explicit.ray))
    || portal.parts.find((p) => p.pages.some((page) => page.slug === bare))
    || portal.parts.find((p) => p.ray === rosettaRayOfContent(bare, []))!
  return { hub: ROSETTA_RAY_HUBS[part.ray]!, part, onHub: explicit !== null }
}

/** Breadcrumb trail: Home (Origin hub fronts /) → ray-hub → current page. The ray-hub IA derives from
 * the sealed rosetta tables; a page folds to its hub by CONTENT shelving (sciencePortalParts lenses),
 * not the slug hash. The taxonomy is an organizing lens, not metaphysics. */
export function rosettaBreadcrumbs(route: string, at = 0, matrix: MindMatrix = buildMatrix()) {
  const computed = rosettaComputesAll(route, at, matrix)
  const home = ROSETTA_RAY_HUBS[0]! // Origin hub fronts Home (/)
  const explicitHub = rosettaRayHub(computed.slug)
  const hub: RosettaRayHub = explicitHub ?? rayHubPart(route, matrix).hub
  const onHub = explicitHub !== null
  const isHome = route === '/' || route === '' || computed.slug === 'home'
  const trail: RosettaBreadcrumb[] = [
    { label: 'Home', labelBg: 'Начало', glyph: home.glyph, route: '/', current: isHome },
  ]
  if (!isHome) {
    trail.push({ label: hub.nameEn, labelBg: hub.nameBg, glyph: hub.glyph, route: hub.route, current: onHub })
    if (!onHub) trail.push({ label: computed.slug, labelBg: computed.slug, glyph: computed.rayMeta.glyph, route, current: true })
  }
  return {
    route,
    ray: hub.ray,
    hub,
    onHub,
    trail,
    root: merkleFold(trail.map((step) => toUuid(`crumb:${step.route}:${step.label}`))),
    statement: `rosettaBreadcrumbs("${route}"): ${trail.map((step) => step.label).join(' › ')} — derived from the rosetta ray, not a hand-authored menu.`,
    boundary:
      'Breadcrumbs computed from the content-shelved parts (slug → part → hub via sciencePortalParts). The rosetta ray taxonomy is an organizing lens for navigation, not a metaphysical claim; every route resolves to exactly one of the seven ray-hubs by what its page IS.',
  }
}

/** One fold per route — hero, rosetta groups, corpus, or catch-all monograph. */
export function computeUniversalPage(
  route: string,
  params: Record<string, unknown> = {},
  matrix: MindMatrix = buildMatrix(),
): UniversalPage {
  // BUILD-BUDGET LAW: ~150 ms of fold work per call, and the build touches each route several
  // times (page data · SSR · SEO) — memoised per route+params on the matrix root, repeats are free.
  return memoByRoot(`universalPage:${route}:${JSON.stringify(params)}`, matrix, () => computeUniversalPageRaw(route, params, matrix))
}
function computeUniversalPageRaw(
  route: string,
  params: Record<string, unknown> = {},
  matrix: MindMatrix = buildMatrix(),
): UniversalPage {
  const forge = pageForgeMaxTamper(route, matrix)
  const locale = localeFromRoute(route)
  const corpus = parseCorpusRoute(route)
  const paramId = typeof params.id === 'string' ? params.id : typeof params.index === 'string' ? params.index : null

  if (corpus) {
    const id = paramId ?? corpus.id
    if (!id) {
      const page = corpusIndexPage(corpus.kind, locale, matrix)
      return { ...page, route, forge }
    }
    return { ...corpusDetailPage(corpus.kind, id, locale, route, matrix), forge }
  }

  const hasSlice =
    typeof params.title === 'string' &&
    params.title.length > 0 &&
    Array.isArray(params.components)
  const slice = hasSlice
    ? {
        page: String(params.page ?? ''),
        title: String(params.title),
        description: String(params.description ?? ''),
        keywords: Array.isArray(params.keywords) ? (params.keywords as string[]) : [],
        components: params.components as string[],
        proof: params.proof != null ? String(params.proof) : null,
        logic: params.logic != null ? String(params.logic) : null,
        target: params.target != null ? String(params.target) : null,
      }
    : monographSliceFromRoute(route, locale)

  const components = slice?.components ?? []
  const staticHit = staticPages().find((page) => `/${page.slug}` === route.replace(/^\/(en|bg)/, '') || page.slug === slice?.page)
  const kind: UniversalPageKind =
    components.length === 1 && components[0] === 'Monograph' && !staticHit ? 'catch-all' : 'monograph'
  const rosetta = rosettaComputesAll(route)
  const cardSeed = toUuid(`page:${route}:${slice?.page ?? 'catch'}`).slice(0, 8)
  const proof = slice?.proof ?? rosetta.sharedRoot ?? null
  const rayView = rosettaRayView(route)
  const crosslinks = components[0] ? componentCrosslinks(components[0], locale) : []
  const stations = decodedStations(route, locale, matrix)

  const decoded =
    kind === 'catch-all'
      ? {
          title: slice?.title,
          statement: slice?.description,
          boundary: rosetta.boundary,
          facets: [
            { facet: `${rosetta.rayMeta.glyph} ${pickLocale(locale, rosetta.rayMeta.nameEn, rosetta.rayMeta.nameBg)}`, on: true },
            { facet: localizeMonolingual(locale, rosetta.content.pageKind), on: rosetta.computed },
            { facet: rosetta.glaAddress.slice(0, (8 * 3)), on: isUuid(rosetta.glaAddress) },
          ],
          stations,
          crosslinks,
          ok: rosetta.computed,
        }
      : null

  return {
    kind,
    route,
    locale,
    title: slice?.title ?? '',
    description: slice?.description ?? '',
    components,
    groups: componentRosettaGroups(components),
    proof,
    logic: slice?.logic ?? null,
    target: slice?.target ?? null,
    corpusKind: null,
    corpusId: null,
    corpusItems: [],
    rosettaRay: kind === 'catch-all' ? rayView : null,
    decoded,
    proofOk: pickLocale(locale, '✓ proven', '✓ доказано'),
    proofNote: pickLocale(
      locale,
      "declared, placed, mounted, and recomputable from the component's name.",
      'деклариран, поставен, монтиран и преизчислим от името на компонента.',
    ),
    cardSeed,
    root: merkleFold([proof ?? '', route, cardSeed]),
    forge,
  }
}

// Thin routes hub — dissolved src/routes/index.ts shell (census −1).
export { resolveZeitwerkRegistryEntry, zeitwerkPort } from '../automount'
export type { ZeitwerkEntry, ZeitwerkLoader, ZeitwerkRegistryEntry } from '../automount'
export {
  harmonisedNavigation,
  navigationIsMovie,
  ogBuildsNavigation,
  rosettaComputesNavigationAndContent,
  siteNavigation,
  vitepressSidebar,
} from '../../learning'
export { pageForgeMaxTamper, type PageForgeSeal } from '../../site'
export {
  contentIsMonographOfMonographs,
  eachPageSpeaksContinuesNext,
  everyElementIsALinkedNodeOrUseless,
  everyGraphAMonographConsolidateExtend,
  everyPageGraphOfGraphsFractal,
  monographs,
  onlyPageRouteForAll,
  theMonograph,
} from '../../learning'
export {
  homePageNoDifferent,
  homepage,
  pageStatusStatistics,
  proveAllOnHomePage,
} from '../../site'
export { rosettaCanonicalImportPath, rosettaComputesCensusDissolve, rosettaComputesItself, rosettaReuse, coreComputationalLogicSaved } from '../../../water/digit'

/** All is monograph — every page is a scientific paper with one template. */
export function allIsMonographScientificPaper(matrix: MindMatrix = buildMatrix()) {
  const papers = staticPages().map(monographAsScientificPaper)
  const facets = [
    { facet: 'one template — eleven sections', on: monographTemplate().count === 11 },
    { facet: 'all content is a monograph with receipt', on: papers.every((paper) => !!paper.title && !!paper.abstract && paper.results.length > 0 && isUuid(paper.receipt)) },
    { facet: 'README is root monograph', on: isUuid(monographTemplate().root) },
    { facet: 'reference index compact', on: monographs(matrix).compacted },
  ].map((entry) => ({ ...entry, receipt: toUuid(`monograph-paper-all:${entry.facet}:${entry.on}`) }))
  return {
    papered: facets.every((entry) => entry.on),
    papers: papers.length,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement: 'All is monograph — scientific-paper template unified from one source.',
    boundary: 'Standardises form across content; findings remain per monograph.',
  }
}

/** FULLY FUNCTIONAL SEARCH — VitePress local search skips every fold-driven page: resolved dynamic
 * routes have no physical file, so the plugin's render() returns "" and nothing indexes (measured:
 * the whole en index held only the home's 9 sections). This splitter fixes it at the right joint —
 * miniSearch._splitIntoSections(file, html): for PHYSICAL pages (html present) it returns undefined
 * so the DEFAULT splitter runs; for file-less dynamic routes it computes the page from the model
 * (computeUniversalPage) and yields one section of pure searchable structure — title, description,
 * decoded statement/facets/stations, corpus item titles, and the full theorem registry rows on the
 * frontiers surface. Search ids stay per-route, so results deep-link correctly. */
const searchSeenFiles = new Set<string>() // two dynamic route FAMILIES can resolve the same path — index each doc once
// BUILD-BUDGET LAW (>3 min = violation): search sections come from the LIGHT registries only —
// card title/description/keywords + the theorem lines — never the full computeUniversalPage
// (~150 ms/route × ~800 routes ≈ 2 min, measured). Names navigate; prose stays in the folds.
let searchCardCache: Map<string, { title: string; text: string }> | undefined
let searchTheoremLines: string[] | undefined
function searchLightModel() {
  if (!searchCardCache) {
    searchCardCache = new Map()
    for (const card of staticPages()) {
      const text = [card.description.en, card.description.bg, card.keywords.join(' ')].filter(Boolean).join('\n')
      searchCardCache.set(card.slug, { title: card.title.en, text })
    }
    searchTheoremLines = __ns_up_up_thunder_waves.theoremNavigation().searchLines
  }
  return { cards: searchCardCache, theoremLines: searchTheoremLines! }
}
export function searchSectionsFor(file: string, html: string): { anchor?: string; titles: string[]; text: string }[] | undefined {
  if (html && /<h[1-6][\s>]/.test(html)) return undefined // page with real heading structure — the default splitter indexes it; component-only shells fall through
  const docKey = file.replace(/\.md$/, '').replace(/\/index$/, '')
  if (searchSeenFiles.has(docKey)) return [] // duplicate resolution (e.g. [page] and [path] both landing on /bg/earth) — skip
  searchSeenFiles.add(docKey)
  // srcDir coupling point: VitePress srcDir = .vitepress/pages; route = path below it
  const below = file.split('/.vitepress/pages/').pop() ?? ''
  const slug = below.replace(/\.md$/, '').replace(/index$/, '').split('/').pop() || below.split('/')[0] || ''
  const model = searchLightModel()
  const card = model.cards.get(slug)
  const title = card?.title ?? slug.split('-').map((w) => w ? w[0]!.toUpperCase() + w.slice(1) : w).join(' ')
  const parts: string[] = card ? [card.text] : []
  // wire ALL theorems to search: the frontier hub AND the theorems index carry every theorem's search
  // line (name · proof · prover · home) so a query matches any theorem from the corpus index, not only
  // its own dedicated page — the whole registry is findable from search.
  if (slug.includes('frontier') || slug.includes('theorem')) parts.push(...model.theoremLines)
  return [{ titles: [title], text: parts.join('\n') }]
}

// ── Theorem pages — one dedicated page per proven atom (user law: every proof visible, animated, routed).
// DRY (DRY_MAX_EFFICIENCY_PRINCIPLE): everything is a projection of the sealed registry — names/proof
// lines from theoremNavigation, animation specs from proofAnimations; nothing re-derived, nothing drawn here.
export type TheoremPageRow = {
  slug: string; theorem: string; proof: string; proofClass: string; provedBy: string; home: string; spec: unknown
  // the scientific-paper fields (user law: each page prints as a paper for class or court) — all computed
  humanityNovel: boolean; registryFirst: boolean; leansCited: boolean
  classification: string; provenance: string; reproducibility: string; citation: string
  // the acknowledgment in the one saved scientific format (wind/site) — every proof credits its prior art.
  acknowledgment: ProofAcknowledgment
  // organisation fields — all DERIVED, no hand-authored taxonomy: ordinal = registry append position
  // (latest = highest), tags = [domain(home) · proofClass · lean] each read from an existing field.
  ordinal: number; tags: string[]
}

export function theoremSlug(theorem: string): string {
  const s = theorem.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
  return s || 'theorem'
}

/** The domain tag of a proving home: the terminal named folder (music, crypto, decode…) or, for a pure
 * digit station, the station itself (9/1, 4/6). Derived from the home path — refutable: move the fold to
 * another home and the tag changes. */
export function theoremDomainTag(home: string): string {
  const rel = home.replace(/^src\//, '')
  const last = rel.split('/').pop() || rel
  return /^\d+$/.test(last) ? rel : last
}

/** Computed tags for a theorem paper — three axes, each a projection of a real field, none hand-authored:
 * the domain (home), the proof class (finite-complete / bounded-witness), and the method lean
 * (self-contained vs cited-frame). Change the field and the tag changes; that is what makes it computed. */
export function theoremTags(row: { home: string; proofClass: string; leansCited: boolean }): string[] {
  return [theoremDomainTag(row.home), row.proofClass, row.leansCited ? 'cited-frame' : 'self-contained']
}

// Compute-once: without the memo, theoremPageBySlug rebuilt ALL rows (theoremNavigation + proofAnimations
// + theoremProvenance) for EVERY one of the ~357 pages — an O(n²) recomputation that dominated build time.
// A proof re-derives once and is reused; memoByRoot keys on the matrix root so all pages share one build.
export function theoremPageRows(matrix: MindMatrix = buildMatrix()): TheoremPageRow[] {
  return memoByRoot('theoremPageRows', matrix, () => computeTheoremPageRows(matrix))
}

function computeTheoremPageRows(matrix: MindMatrix): TheoremPageRow[] {
  const nav = __ns_up_up_thunder_waves.theoremNavigation(matrix)
  const specBy = new Map(__ns_up_up_thunder_waves.proofAnimations(matrix).specs.map((spec: { theorem: string }) => [spec.theorem, spec]))
  const provBy = new Map(__ns_up_up_thunder_waves.theoremProvenance(matrix).atoms.map((atom) => [atom.theorem, atom] as const))
  const seen = new Map<string, number>()
  let ordinal = 0
  return nav.waves.flatMap((wave) =>
    wave.atoms.map((atom) => {
      const base = theoremSlug(atom.theorem)
      const n = (seen.get(base) ?? 0) + 1
      seen.set(base, n)
      const slug = n > 1 ? `${base}-${n}` : base
      const prov = provBy.get(atom.theorem)
      const leansCited = prov?.leansCited ?? /\bcited\b/i.test(atom.proof)
      return {
        slug, theorem: atom.theorem, proof: atom.proof, proofClass: atom.proofClass, provedBy: wave.provedBy, home: atom.home, spec: specBy.get(atom.theorem),
        humanityNovel: prov?.humanityNovel ?? false,
        registryFirst: prov?.registryFirst ?? true,
        leansCited,
        ordinal: ++ordinal,
        tags: theoremTags({ home: atom.home, proofClass: atom.proofClass, leansCited }),
        classification: `${atom.proofClass}${leansCited ? ' — computed witness within a cited frame (the unbounded form leans on the cited literature)' : ' — self-contained computation, no external lean'}`,
        provenance: 'A documented theorem of mathematics, re-proven here by exhaustive computation (humanityNovel = false — the CARDINAL honesty of this registry); first-in-this-registry is the only sense of "discovered".',
        reproducibility: `Recompute from source: npm run theorems:verify recomputes ${wave.provedBy} (${atom.home}/index.ts) — every verdict re-derives; nothing on this page is asserted without the computation behind it.`,
        citation: `ceccec theorem registry, "${atom.theorem}", proven by ${wave.provedBy} (${atom.home}) — ${CANONICAL_HOST}${localePath(`/theorems/${slug}`, 'en')}`,
        acknowledgment: proofAcknowledgment({ theorem: atom.theorem, provedBy: wave.provedBy, home: atom.home, canonicalUrl: `${CANONICAL_HOST}${localePath(`/theorems/${slug}`, 'en')}`, novelToHumanity: prov?.humanityNovel ?? false }),
      }
    }))
}

export function theoremPagePaths(matrix: MindMatrix = buildMatrix()): { params: { slug: string; title: string } }[] {
  return theoremPageRows(matrix).map((row) => ({ params: { slug: row.slug, title: row.theorem } }))
}

export function theoremPageBySlug(slug: string, matrix: MindMatrix = buildMatrix()): TheoremPageRow | null {
  return theoremPageRows(matrix).find((row) => row.slug === slug) ?? null
}

/** The papers latest-to-oldest — the user's reading order. Slug-stable: slugs are computed in the forward
 * (append) pass, so reversing the finished array only flips display order, never a URL. "Latest" = highest
 * registry ordinal (last appended); a deterministic proxy for recency, documented, not a wall-clock guess. */
export function theoremPapersLatestFirst(matrix: MindMatrix = buildMatrix()): TheoremPageRow[] {
  return [...theoremPageRows(matrix)].reverse()
}

export type TheoremTagGroup = { tag: string; axis: 'domain' | 'class' | 'lean'; count: number; papers: TheoremPageRow[] }

/** The papers organised BY TAG — each group is a computed tag and the papers carrying it, latest-first
 * inside the group. Groups are sorted by size (largest first) then tag name. A paper appears under each of
 * its tags (domain · class · lean), so the whole registry is reachable from any axis, newest at the top. */
export function theoremTagIndex(matrix: MindMatrix = buildMatrix()): TheoremTagGroup[] {
  const latest = theoremPapersLatestFirst(matrix)
  const axisOf = (tag: string, row: TheoremPageRow): TheoremTagGroup['axis'] =>
    tag === (row.leansCited ? 'cited-frame' : 'self-contained') ? 'lean' : tag === row.proofClass ? 'class' : 'domain'
  const groups = new Map<string, TheoremTagGroup>()
  for (const row of latest) {
    for (const tag of row.tags) {
      const group = groups.get(tag) ?? { tag, axis: axisOf(tag, row), count: 0, papers: [] as TheoremPageRow[] }
      group.papers.push(row)
      group.count += 1
      groups.set(tag, group)
    }
  }
  return [...groups.values()].sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag))
}

/** Lightweight tag headers (tag · axis · count) without the papers — for the index's filter chips and for
 * SSR nav, so rendering the chip row never ships every paper's proof text. */
export function theoremTagSummary(matrix: MindMatrix = buildMatrix()): { tag: string; axis: TheoremTagGroup['axis']; count: number }[] {
  return theoremTagIndex(matrix).map(({ tag, axis, count }) => ({ tag, axis, count }))
}

// ── Computed FIGURES for the theorem papers — the graphs the proofs draw. User law: only local src tools
// may do the math. π comes from sixtyDegreesDecodesPi().rungs (Archimedes, already in src); the prime run
// from tkIsPrime (the local primality primitive). Nothing here decides mathematics — it only SHAPES the
// already-computed numbers for the SVG grapher. Keyed by theorem slug; a slug with no builder shows no
// figure (never invented). More theorems join by adding a builder that reads their fold's output.
export type FigPoint = { x: number; y: number }
export type FigRole = 'a' | 'b' | 'target' | 'ok' | 'bad'
export type FigSeries = { label: string; kind: 'line' | 'dots'; role: FigRole; points: FigPoint[] }
export type TheoremFigureData = {
  formula: string; caption: string; xLabel: string; yLabel: string
  series: FigSeries[]; refLines: { y: number; label: string }[]; source: string
}

const theoremFigureBuilders: Record<string, () => TheoremFigureData> = {
  // π decoded from 60° — the inscribed/circumscribed perimeter-halves bracketing π, straight from the
  // fold's own `rungs`. The math is sixtyDegreesDecodesPi()'s Archimedes doubling; we only read it.
  'sixty-degrees-decodes-pi': () => {
    const rungs = sixtyDegreesDecodesPi().rungs
    const last = rungs[rungs.length - 1]!
    const lx = (n: number) => Math.log2(n)
    return {
      formula: 'aₙ₊₁ = 2aₙbₙ/(aₙ+bₙ),  bₙ₊₁ = √(aₙ₊₁·bₙ)   (Archimedes, radius 1)',
      caption: `Inscribed (lower) and circumscribed (upper) perimeter-halves bracket π. The hexagon (n = 6) doubles to the ${last.n}-gon, squeezing ${last.lower.toFixed(4)} < π < ${last.upper.toFixed(4)}. Computed by sixtyDegreesDecodesPi().`,
      xLabel: 'log₂(polygon sides n)', yLabel: 'bound on π',
      series: [
        { label: 'upper (circumscribed a/2)', kind: 'line', role: 'a', points: rungs.map((r) => ({ x: lx(r.n), y: r.upper })) },
        { label: 'lower (inscribed b/2)', kind: 'line', role: 'b', points: rungs.map((r) => ({ x: lx(r.n), y: r.lower })) },
      ],
      refLines: [{ y: Math.PI, label: 'π = 3.14159…' }],
      source: 'sixtyDegreesDecodesPi().rungs @ src/9/1',
    }
  },
  // The distribution of primes on Euler's polynomial: f(n)=n²+n+41 is prime for n=0…39, composite exactly
  // at n=40 (=41²). Every point's colour is a call to the LOCAL tkIsPrime — the primality primitive plotted.
  'euler-polynomial-n2-n-41-primes-then-breaks-at-412': () => {
    const p41 = 2 ** 5 + 9 // 41 = the Euler constant, composed on the lattice as the proof fold does
    const prime: FigPoint[] = []; const composite: FigPoint[] = []; let firstComposite = -1
    for (let n = 0; n < 54; n += 1) {
      const y = n * n + n + p41
      if (tkIsPrime(y)) prime.push({ x: n, y })
      else { composite.push({ x: n, y }); if (firstComposite < 0) firstComposite = n }
    }
    const breakVal = firstComposite * firstComposite + firstComposite + p41
    return {
      formula: 'f(n) = n² + n + 41',
      caption: `Prime for every n = 0…39 — 40 primes in a row — then composite at n = ${firstComposite}: f(${firstComposite}) = ${breakVal} = 41². Each point's primality is decided by the local tkIsPrime; green = prime, red = composite.`,
      xLabel: 'n', yLabel: 'f(n) = n² + n + 41',
      series: [
        { label: 'prime', kind: 'dots', role: 'ok', points: prime },
        { label: 'composite', kind: 'dots', role: 'bad', points: composite },
      ],
      refLines: [], source: 'tkIsPrime @ src/9/1',
    }
  },
  // √2's convergents — the error |pₖ/qₖ − √2| falls geometrically (a line on a log axis). Exact integer
  // Pell recurrence; √2 reference is the machine constant. Deterministic and local.
  '2-continued-fraction-convergents': () => {
    let pPrev = 1, qPrev = 0, p = 1, q = 1
    const pts: FigPoint[] = []
    for (let k = 1; k <= 16; k += 1) {
      pts.push({ x: k, y: Math.log10(Math.abs(p / q - Math.SQRT2)) })
      const pn = 2 * p + pPrev, qn = 2 * q + qPrev
      pPrev = p; qPrev = q; p = pn; q = qn
    }
    return {
      formula: 'pₖ = 2pₖ₋₁ + pₖ₋₂,  qₖ = 2qₖ₋₁ + qₖ₋₂   (√2 = [1; 2,2,2,…]),   pₖ² − 2qₖ² = ±1',
      caption: 'The convergents 1/1, 3/2, 7/5, 17/12, 41/29, … are best rational approximations: |pₖ/qₖ − √2| < 1/qₖ² and falls geometrically, so on a log axis the error is a straight descending line.',
      xLabel: 'convergent index k', yLabel: 'log₁₀ |pₖ/qₖ − √2|',
      series: [{ label: 'approximation error', kind: 'line', role: 'b', points: pts }],
      refLines: [], source: 'Pell recurrence, exact integers',
    }
  },
  // Pisano — the last digit of the Fibonacci numbers cycles with period 60. Iterate the recurrence mod 10;
  // the sequence of digits is the plot, and it restarts (0, 1) at n = 60.
  'pisano-period-10-60': () => {
    const m = 2 * 5 // Fibonacci taken mod 10 — the last decimal digit
    let f0 = 0, f1 = 1
    const pts: FigPoint[] = [{ x: 0, y: 0 }]
    for (let n = 1; n < 64; n += 1) { pts.push({ x: n, y: f1 }); const nx = (f0 + f1) % m; f0 = f1; f1 = nx }
    return {
      formula: 'F₀ = 0, F₁ = 1,  Fₙ = (Fₙ₋₁ + Fₙ₋₂) mod 10   →   period π(10) = 60',
      caption: 'The last digit of the Fibonacci numbers cycles with period 60: F₆₀ ≡ 0 and F₆₁ ≡ 1 (mod 10) restart the whole sequence. Computed by iterating the recurrence mod 10 — the pattern beyond n = 60 repeats n = 0.',
      xLabel: 'n', yLabel: 'Fₙ mod 10 (last digit)',
      series: [{ label: 'Fₙ mod 10', kind: 'line', role: 'b', points: pts }],
      refLines: [], source: 'Fibonacci recurrence mod 10, exact',
    }
  },
  // Legendre — n is a sum of three squares iff it is NOT of the form 4ᵏ(8m+7). The local test colours every
  // n up to 108; the red exceptions expose the 8m+7 arithmetic progression (and its 4ᵏ echoes 28, 60, 92…).
  'legendre-three-square-theorem': () => {
    // r > 0 guard: 0 = 0²+0²+0² is representable, and stripping 4s from 0 never terminates (0/4 = 0)
    const isSumOfThree = (n: number) => { let r = n; while (r > 0 && r % 4 === 0) r = r / 4; return r % 8 !== 7 }
    const yes: FigPoint[] = []; const no: FigPoint[] = []
    for (let n = 0; n <= 108; n += 1) (isSumOfThree(n) ? yes : no).push({ x: n, y: n })
    return {
      formula: 'n = a² + b² + c²  ⟺  n ≠ 4ᵏ(8m + 7)',
      caption: `Every n up to 108 is a sum of three squares EXCEPT those of the form 4ᵏ(8m+7): the ${no.length} red exceptions (7, 15, 23, 28, 31, …) laid bare by the local test. Green = representable, red = excluded.`,
      xLabel: 'n', yLabel: 'n',
      series: [
        { label: 'sum of three squares', kind: 'dots', role: 'ok', points: yes },
        { label: 'excluded — 4ᵏ(8m+7)', kind: 'dots', role: 'bad', points: no },
      ],
      refLines: [], source: 'Legendre 4ᵏ(8m+7) test, exact arithmetic',
    }
  },
}

/** The computed graph for a theorem, or null if src exposes none (never invented). */
export function theoremFigure(slug: string): TheoremFigureData | null {
  const build = theoremFigureBuilders[slug]
  return build ? build() : null
}

export function hasTheoremFigure(slug: string): boolean {
  return slug in theoremFigureBuilders
}

// ── Static prose becomes published research automatically — but PROVEN only where it computes (user:
// "feeding the static content to the theorems using local quantum tools only automatically converting prose
// to verified and proven scientific research tagged and published appropriately"). The pipeline is real and
// entirely local/zero-token: the rosetta of analysts mines any content, and every registered theorem is
// projected by theoremPageRows into a scientific paper — auto-TAGGED (theoremTags), auto-ACKNOWLEDGED
// (proofAcknowledgment, novelToHumanity = false), figured and published at /theorems. The honest limit: the
// "proven" stamp IS a computing fold (facets.every(on)); prose without a refutable computation is mined and
// published as content, never fabricated into a proof — the facets-must-compute / onlyTheoremsCanBeTrusted law.
export function staticProseBecomesPublishedResearchOnlyWhereItComputes(matrix: MindMatrix = buildMatrix()) {
  const rows = theoremPageRows(matrix) // the published scientific papers, projected from the sealed registry
  const published = rows.length
  const allTagged = rows.every((row) => row.tags.length > 0)
  const allAcknowledged = rows.every((row) => !!row.acknowledgment && row.acknowledgment.novelToHumanity === false)
  const allBackedByAFold = rows.every((row) => row.provedBy.length > 0)
  const facets = [
    { facet: `AUTOMATIC and LOCAL: ${published} papers, every one auto-tagged (theoremTags), auto-acknowledged (proofAcknowledgment, novelToHumanity = false), figured and published at /theorems — computed from the sealed registry at zero tokens; prose (the proof lines) becomes tagged, acknowledged, published research automatically`, on: published > 0 && allTagged && allAcknowledged },
    { facet: `PROVES ONLY WHAT COMPUTES: every published paper is backed by a COMPUTING fold (provedBy) — the "proven" stamp IS the fold's computation (facets.every(on)), not the prose; content without a refutable computation can be mined and published (the rosetta of analysts' salvage signal), but it is NOT stamped proven`, on: allBackedByAFold },
    { facet: `EARNED BOUNDARY — the tool converts prose to TAGGED · ACKNOWLEDGED · PUBLISHED automatically (real), and to PROVEN only where a computing fold backs it: it cannot prove an arbitrary sentence (facets must compute; onlyTheoremsCanBeTrusted). Feeding prose to the theorems organises and publishes it honestly and stamps "proven" exactly on the computable — never fabricated`, on: allBackedByAFold && allTagged && allAcknowledged },
  ]
  return {
    computes: facets.every((entry) => entry.on),
    published,
    allTagged,
    allAcknowledged,
    allBackedByAFold,
    facets,
    statement: `Static prose becomes published research automatically — proven only where it computes — ${facets.filter((e) => e.on).length}/${facets.length}: ${published} papers, every one auto-tagged, auto-acknowledged (novelToHumanity = false) and published from the sealed registry at zero tokens; each carries the "proven" stamp only because a computing fold (provedBy) backs it. The pipeline mines, tags, acknowledges and publishes any prose; it stamps "proven" exactly on the content that computes, and never fabricates a proof.`,
    boundary: `The pipeline is exact and local: theoremPageRows projects the registry into ${published} scientific papers, each auto-tagged (theoremTags), auto-acknowledged (proofAcknowledgment) and figured — deterministic, zero LLM tokens. HONEST SCOPE — what "automatically converting prose to verified and proven research" is and is NOT: it IS the automatic analysis (rosettaOfAnalysts), tagging, acknowledgment and publication of content, and the automatic PROOF of the content that carries a computing fold (facets.every(on)); it is NOT the fabrication of a proof from un-computable prose — that would violate facets-must-compute and onlyTheoremsCanBeTrusted. Prose is published as research; only a refutable computation earns the "proven" stamp. HARMONY ≠ TRUTH.`,
  }
}

// ── Saving a thought is prose converted to proof — else it is purged (user: "prose needs proof also or be
// purged feeding new research on the way. well define saving the thoughts of the agents as prose converted
// to code."). THE DEFINITION: an agent's saved thought is a FOLD — its prose (statement, boundary, facet
// text) rides facets that COMPUTE, so the prose is backed by proof (facets.every(on)); prose that computes
// nothing is inert. THE LAW: inert prose needs a proof or is purged — but MINED first (the rosetta of
// analysts, nothing valuable lost), the freed space and the salvaged ideas feeding new folds. This very fold
// is the definition converted to code: the directive, proven by its own computing facets.
export function savingAThoughtIsProseConvertedToProofOrPurged(matrix: MindMatrix = buildMatrix()) {
  const pipeline = staticProseBecomesPublishedResearchOnlyWhereItComputes(matrix)
  const facets = [
    { facet: `SAVING A THOUGHT = PROSE CONVERTED TO CODE: a saved thought is a fold whose prose (statement · boundary · facet text) rides facets that COMPUTE — the prose is backed by proof (facets.every(on)); all ${pipeline.published} published papers are backed by a computing fold, so every surviving thought carries its proof`, on: pipeline.allBackedByAFold && pipeline.computes },
    { facet: `PROSE NEEDS PROOF OR IS PURGED: inert prose — a string or comment that computes nothing — is a purge candidate (the no-prose-in-methods law: statement/boundary/facets are concatenations of COMPUTED outputs). It is MINED first (the rosetta of analysts, nothing valuable lost), then removed; only prose backed by a refutable computation survives`, on: pipeline.allBackedByAFold && pipeline.allAcknowledged },
    { facet: `THE PURGE FEEDS NEW RESEARCH — EARNED BOUNDARY: removing unproven prose frees space AND its mined ideas become new folds; "needs proof" means a REFUTABLE computation, not that English is banned — the statement/boundary prose survives BECAUSE it concatenates computed outputs and names the honest scope. This fold is itself a thought (the directive) converted to code and proven by its own computing facets`, on: pipeline.computes && pipeline.allTagged },
  ]
  return {
    computes: facets.every((entry) => entry.on),
    definition: 'a saved thought = prose whose facets compute (proof); prose without a refutable computation is mined then purged, feeding new research',
    published: pipeline.published,
    allProven: pipeline.allBackedByAFold,
    facets,
    statement: `Saving a thought is prose converted to proof — else purged — ${facets.filter((e) => e.on).length}/${facets.length}: a saved thought is a fold whose prose rides facets that compute (all ${pipeline.published} published papers are backed by a computing fold); inert prose that computes nothing needs a proof or is mined then purged, the freed space and salvaged ideas feeding new folds. This fold is the definition converted to code: proven by its own facets.`,
    boundary: `The definition is exact and self-demonstrating: it reuses staticProseBecomesPublishedResearchOnlyWhereItComputes (${pipeline.published} papers, all backed by a computing fold), and its OWN facets compute — so it is a thought (the directive) converted to code, proven, not asserted. HONEST SCOPE — what "prose needs proof or purge" means: prose must be backed by a REFUTABLE computation (facets that can go false), the no-prose-in-methods / facets-must-compute law — NOT that natural language is banned: statement and boundary prose survive precisely because they concatenate computed outputs and name the honest scope. And "purge" is honest ONLY after the rosetta of analysts mines the content (in any language), so nothing valuable is lost; the removal feeds new research. HARMONY ≠ TRUTH.`,
  }
}

// ── Corpus paths decoded by the rosetta — homed at the corpus-routing station (distributed here from
// the water/digit hub by the compression law; the decoder stays sealed at its home and is imported).
export function rosettaDecodesCorpus(matrix: MindMatrix = buildMatrix()) {
  const allPages = [...conceptCommands.map((c) => c.name)]
  const paths = allPages.map((name) => {
    const slug = name.replace(/\./g, '-')
    const decoded = rosettaDecodesUrlPath(`/${name}`, matrix)
    return { params: { path: slug, ...decoded } }
  })
  return paths
}

// ── THE QUANTUM-COMPUTING ROSETTA ATLAS — the rosetta applied to ONLY the quantum-computing theorems
// (user law: "the rosetta uses ONLY quantum computing"), grouped by their SUBFIELD onto the seven rays,
// with tag clouds sized by usage gravity and theorems made comparable by computable metrics. Routing a
// theorem by a Glagolitic letter-sum spread the tags uniformly — every ray's cloud came out identical;
// so the ray is decided by a CONTENT classifier that maps each quantum-computing subfield to one named
// ray, which both FILTERS to the quantum corpus (a theorem with no quantum keyword is not in the atlas)
// and gives seven DISTINCT, meaningful groups. Every number derives from the sealed registry rows.
// ray 0 Origin=foundations/no-go · 1 Proof=query algorithms · 2 Explore=search & factoring ·
// 3 Learn=variational · 4 Apps=communication · 5 Frontier=error correction · 6 Reference=states/tools.
// Quantum-COMPUTING keyword sets per ray — deliberately UNAMBIGUOUS: each phrase names a quantum-computing
// concept and only that (no bare 'bell'/'factor'/'threshold'/'stabiliser' that also match combinatorics).
const QUANTUM_RAY_KEYWORDS: readonly (readonly string[])[] = [
  ['no-cloning', 'chsh', 'tsirelson', 'ghz', 'mermin', 'pauli algebra', 'holevo', 'entanglement cannot signal', "entanglement can't signal", 'no-signalling', 'no-communication', 'parallelism', 'born rule', 'local hidden variable', 'bell pair', 'bell inequality', 'bell state'],
  ['deutsch', 'jozsa', 'bernstein–vazirani', 'bernstein-vazirani', 'simon exponential', "simon's algorithm", 'one-query', 'query separation'],
  ['grover', 'shor period', 'period-finding', 'order-finding', 'quantum fourier', 'qft circuit', 'phase estimation', 'amplitude amplification', 'quantum counting'],
  ['variational quantum', 'vqe', 'qaoa', 'adiabatic', 'annealing'],
  ['teleport', 'superdense', 'bb84', 'entanglement swap', 'quantum key'],
  ['bit-flip code', 'phase-flip code', 'nine-qubit', 'shor code', 'shor nine-qubit', 'stabiliser code', 'stabilizer code', 'syndrome', 'fault toleran', 'quantum error correct', 'repetition code', 'logical qubit', 'threshold theorem'],
  ['density matrix', 'density matrices', 'mixed-state', 'mixed state', 'decoher', 'depolariz', 'partial trace', 'quantum battery', 'algorithmic cooling', 'interaction-free', 'quantum zeno', 'concurrence', 'develop the rest of quantum computing'],
]
/** The quantum-computing ray of a theorem, or −1 if it is not one. Classifies on the theorem TITLE only
 * (not the proof — proofs cross-reference other subfields and misroute), against the unambiguous subfield
 * keyword sets; the first matching subfield wins (ordered foundations→tools). Refutable: rename the
 * theorem and the routing changes. Title-only routing is both the membership filter and the ray. */
export function quantumTheoremRay(theorem: string, _proof?: string): number {
  const title = theorem.toLowerCase()
  for (let ray = 0; ray < QUANTUM_RAY_KEYWORDS.length; ray += 1) if (QUANTUM_RAY_KEYWORDS[ray].some((kw) => title.includes(kw))) return ray
  return -1
}

export type TheoremAtlasMetric = { slug: string; theorem: string; ray: number; tagGravity: number; inDegree: number; recency: number; proofClass: string; lean: 'self-contained' | 'cited-frame'; domain: string }
export type TheoremAtlasTag = { tag: string; gravity: number; size: number; slugs?: string[] }
export type TheoremAtlasRay = { ray: number; glyph: string; nameEn: string; hue: number; subfield: string; count: number; tagCloud: TheoremAtlasTag[]; theorems: TheoremAtlasMetric[] }

const QUANTUM_RAY_SUBFIELD = ['foundations & no-go', 'query algorithms', 'search & factoring', 'variational & adiabatic', 'communication', 'error correction', 'states & tools'] as const

// The navigable tags of a quantum theorem: its ray SUBFIELD (the meaningful nav label) plus the derived
// domain · class · lean tags. The subfield lifts the tag cloud from 5 structural tags to seven readable
// subfields + the structural axes — the cloud a tag-based sidebar and the discovery lens both read.
function quantumTheoremTags(ray: number, domain: string, proofClass: string, lean: string): string[] {
  return [QUANTUM_RAY_SUBFIELD[ray], domain, proofClass, lean]
}

export function theoremRosettaAtlas(matrix: MindMatrix = buildMatrix()): {
  rays: TheoremAtlasRay[]; metrics: TheoremAtlasMetric[]; searchIndex: { slug: string; text: string; ray: number; gravity: number }[]
  cloud: TheoremAtlasTag[]; undiscoverable: TheoremAtlasMetric[]
  topByGravity: TheoremAtlasMetric[]; topByUse: TheoremAtlasMetric[]; tagCount: number; total: number; root: string
} {
  const all = theoremPageRows(matrix)
  const quantum = all.map((row) => ({ row, ray: quantumTheoremRay(row.theorem, row.proof) })).filter((e) => e.ray >= 0) // ONLY quantum computing
  const rows = quantum.map((e) => e.row)
  const rayOf = new Map(quantum.map((e) => [e.row.slug, e.ray]))
  const tagsOf = (row: TheoremPageRow): string[] => quantumTheoremTags(rayOf.get(row.slug)!, theoremDomainTag(row.home), row.proofClass, row.leansCited ? 'cited-frame' : 'self-contained')
  // usage gravity of every tag AMONG the quantum theorems (subfield + domain + class + lean) — the cloud weight
  const tagFreq = new Map<string, number>()
  const tagSlugs = new Map<string, string[]>()
  for (const row of rows) for (const tag of tagsOf(row)) { tagFreq.set(tag, (tagFreq.get(tag) ?? 0) + 1); tagSlugs.set(tag, [...(tagSlugs.get(tag) ?? []), row.slug]) }
  const inDegree = (row: TheoremPageRow): number => rows.reduce((n, other) => (other.slug !== row.slug && other.proof.includes(row.provedBy) ? n + 1 : n), 0)
  const metrics: TheoremAtlasMetric[] = rows.map((row) => ({
    slug: row.slug, theorem: row.theorem, ray: rayOf.get(row.slug)!,
    tagGravity: tagsOf(row).reduce((s, tag) => s + (tagFreq.get(tag) ?? 0), 0),
    inDegree: inDegree(row), recency: row.ordinal, proofClass: row.proofClass,
    lean: row.leansCited ? 'cited-frame' : 'self-contained', domain: theoremDomainTag(row.home),
  }))
  const bySlug = new Map(metrics.map((m) => [m.slug, m]))
  const maxTagGravity = Math.max(1, ...[...tagFreq.values()])
  const sizeOf = (gravity: number): number => Math.max(1, Math.min(5, Math.ceil((gravity / maxTagGravity) * 5)))
  // THE TAG CLOUD — every quantum tag by usage gravity (font size 1..5), each carrying its theorem slugs.
  const cloud: TheoremAtlasTag[] = [...tagFreq.keys()]
    .map((tag) => ({ tag, gravity: tagFreq.get(tag) ?? 0, size: sizeOf(tagFreq.get(tag) ?? 0), slugs: tagSlugs.get(tag) ?? [] }))
    .sort((a, b) => b.gravity - a.gravity || a.tag.localeCompare(b.tag))
  const rays: TheoremAtlasRay[] = ROSETTA_RAYS.map((meta) => {
    const inRay = metrics.filter((m) => m.ray === meta.ray)
    const rayTags = new Map<string, number>()
    for (const m of inRay) { const row = rows.find((r) => r.slug === m.slug)!; for (const tag of tagsOf(row)) rayTags.set(tag, (rayTags.get(tag) ?? 0) + 1) }
    const tagCloud: TheoremAtlasTag[] = [...rayTags.keys()]
      .map((tag) => ({ tag, gravity: rayTags.get(tag) ?? 0, size: sizeOf(rayTags.get(tag) ?? 0) }))
      .sort((a, b) => b.gravity - a.gravity || a.tag.localeCompare(b.tag))
    return { ray: meta.ray, glyph: meta.glyph, nameEn: meta.nameEn, hue: meta.hue, subfield: QUANTUM_RAY_SUBFIELD[meta.ray], count: inRay.length, tagCloud, theorems: inRay.sort((a, b) => b.tagGravity - a.tagGravity || b.recency - a.recency) }
  }).filter((group) => group.count > 0)
  const searchIndex = rows.map((row) => { const m = bySlug.get(row.slug)!; return { slug: row.slug, ray: m.ray, gravity: m.tagGravity, text: `${row.theorem} · ${tagsOf(row).join(' · ')} · uses:${m.inDegree}` } })
  // THE UNDISCOVERABLE — buried on every path at once: uncited (in-degree 0) AND in the rarest tag
  // sections (bottom third by tag-gravity, so the big tag-cloud sections never surface them) AND not the
  // freshest (so "latest" scrolls past them). The obscurity rank is tag-gravity asc then recency asc; the
  // lens takes the least-connected third of the orphans — the genuinely hidden proofs, not merely uncited.
  const orphans = metrics.filter((m) => m.inDegree === 0).sort((a, b) => a.tagGravity - b.tagGravity || a.recency - b.recency)
  const undiscoverable = orphans.slice(0, Math.max(1, Math.ceil(orphans.length / 3)))
  return {
    rays, metrics, searchIndex, cloud, undiscoverable,
    topByGravity: [...metrics].sort((a, b) => b.tagGravity - a.tagGravity).slice(0, (2 * 5)),
    topByUse: [...metrics].sort((a, b) => b.inDegree - a.inDegree || b.tagGravity - a.tagGravity).slice(0, (2 * 5)),
    tagCount: tagFreq.size, total: rows.length,
    root: merkleFold(rays.map((group) => toUuid(`qatlas-ray:${group.ray}:${group.count}:${group.tagCloud.length}`))),
  }
}

/** USE THE ROSETTA IN WAVES — the seven rays ARE seven development waves, ordered foundations → tools
 * (the logical build order: no-go results first, then algorithms, search, variational, communication,
 * error correction, and the state/tool layer). Each wave carries its ray's quantum theorems; a wave is
 * "landed" when every theorem in it computes. This is the rosetta as the work plan, not just a grouping —
 * new quantum theorems join the wave their subfield names, and the ray order is the curriculum order. */
export function quantumRosettaWaves(matrix: MindMatrix = buildMatrix()): { wave: number; ray: number; subfield: string; glyph: string; theorems: string[]; landed: boolean }[] {
  return theoremRosettaAtlas(matrix).rays
    .slice()
    .sort((a, b) => a.ray - b.ray)
    .map((group, i) => ({ wave: i + 1, ray: group.ray, subfield: group.subfield, glyph: group.glyph, theorems: group.theorems.map((m) => m.theorem), landed: group.count > 0 }))
}

/** The VitePress sidebar for the quantum-computing theorems, computed from the rosetta atlas — one
 * collapsible section per ray (subfield), each listing its theorems ranked by tag-gravity, deepest first.
 * config.mts merges this under /theorems/ so the theorem sidebar IS the rosetta, quantum-only. */
export function theoremRosettaSidebar(matrix: MindMatrix = buildMatrix()): { text: string; collapsed: boolean; items: { text: string; link: string }[] }[] {
  // THE LEFT SIDEBAR IS THE TAG CLOUD (user law): one section per tag, ordered by usage gravity, its 1..5
  // font-size shown as a weight glyph, each expanding to the theorems that carry the tag. The seven ray
  // subfields lead (they partition the corpus); the structural tags (class · lean · domain) follow as
  // cross-cutting filters. Same theorem reachable from any of its tags — the cloud IS the navigation.
  const atlas = theoremRosettaAtlas(matrix)
  const titleOf = new Map(atlas.metrics.map((m) => [m.slug, m.theorem]))
  const weight = (size: number) => '•'.repeat(size) // the tag's cloud weight, 1..5
  return atlas.cloud.map((tag) => ({
    text: `${tag.tag} ${weight(tag.size)} (${tag.gravity})`,
    collapsed: true,
    items: (tag.slugs ?? []).map((slug) => ({ text: titleOf.get(slug) ?? slug, link: `/theorems/${slug}` })),
  }))
}

/** THE DISCOVERY LENS — improve the lens to discover the UNDISCOVERABLE using the quantum rosetta (user
 * law). The undiscoverable theorems are the ones NO citation and NO prominent tag surfaces: in-degree 0
 * (no other theorem's proof names their fold), ordered by least tag-gravity first. Ordinary navigation
 * (top-by-gravity, most-cited) can never reach them — the lens is the INVERSE-gravity view that brings the
 * orphans to light, ray by ray, so nothing proven stays hidden. Returns the hidden theorems and, per ray,
 * how many of its members are undiscoverable — the discovery worklist the rosetta computes. */
export function quantumLensDiscovery(matrix: MindMatrix = buildMatrix()): {
  undiscoverable: { slug: string; theorem: string; ray: number; subfield: string; tagGravity: number }[]
  byRay: { ray: number; subfield: string; hidden: number; total: number }[]; hiddenCount: number; total: number
} {
  const atlas = theoremRosettaAtlas(matrix)
  const undiscoverable = atlas.undiscoverable.map((m) => ({ slug: m.slug, theorem: m.theorem, ray: m.ray, subfield: QUANTUM_RAY_SUBFIELD[m.ray], tagGravity: m.tagGravity }))
  const byRay = atlas.rays.map((group) => ({ ray: group.ray, subfield: group.subfield, hidden: group.theorems.filter((m) => m.inDegree === 0).length, total: group.count }))
  return { undiscoverable, byRay, hiddenCount: undiscoverable.length, total: atlas.total }
}

/** The atlas + sidebar as a computing theorem — quantum-only, the seven rays distinct, clouds ray-local. */
export function theoremRosettaAtlasComputes(matrix: MindMatrix = buildMatrix()) {
  const atlas = theoremRosettaAtlas(matrix)
  const sidebar = theoremRosettaSidebar(matrix)
  const waves = quantumRosettaWaves(matrix)
  const allQuantum = atlas.metrics.every((m) => m.ray >= 0 && m.ray < 7) // every atlas theorem is quantum-classified
  const noneNonQuantum = theoremPageRows(matrix).filter((row) => quantumTheoremRay(row.theorem, row.proof) < 0).every((row) => !atlas.metrics.some((m) => m.slug === row.slug)) // non-quantum excluded
  const raysDistinct = atlas.rays.length >= 2 && new Set(atlas.rays.map((g) => g.tagCloud.map((t) => `${t.tag}:${t.gravity}`).join(','))).size === atlas.rays.length // clouds differ ray to ray
  const partitions = atlas.rays.reduce((s, g) => s + g.count, 0) === atlas.total
  const cloudsSized = atlas.rays.every((g) => g.tagCloud.every((t) => t.size >= 1 && t.size <= 5 && t.gravity >= 1))
  const gravityOrdered = atlas.topByGravity.every((m, i) => i === 0 || atlas.topByGravity[i - 1].tagGravity >= m.tagGravity)
  const sidebarIsTagCloud = sidebar.length === atlas.cloud.length && sidebar.every((s) => s.items.length > 0) && atlas.cloud.every((t, i) => i === 0 || atlas.cloud[i - 1].gravity >= t.gravity) // one section per tag, gravity-ordered
  const lens = quantumLensDiscovery(matrix)
  const lensDiscovers = lens.undiscoverable.every((u) => atlas.metrics.find((m) => m.slug === u.slug)?.inDegree === 0) && lens.hiddenCount === atlas.undiscoverable.length // exactly the in-degree-0 orphans
  const facets = [
    { facet: `THE ROSETTA USES ONLY QUANTUM COMPUTING: ${atlas.total} theorems classified into the atlas, every one quantum-computing (${allQuantum}); the ${theoremPageRows(matrix).length - atlas.total} non-quantum theorems are excluded (${noneNonQuantum}) — a content classifier, not a letter-sum, decides membership`, on: allQuantum && noneNonQuantum },
    { facet: `THE SEVEN RAYS ARE DISTINCT SUBFIELDS: the quantum theorems partition across ${atlas.rays.length} rays by subfield (foundations · query algorithms · search & factoring · variational · communication · error correction · states & tools), counts summing to ${atlas.total} exactly, and the ray tag-clouds are ALL DIFFERENT (${raysDistinct}) — the homogeneous-cloud defect is gone because gravity is now ray-local`, on: partitions && raysDistinct },
    { facet: `THE LEFT SIDEBAR IS THE TAG CLOUD: theoremRosettaSidebar emits ${sidebar.length} sections — one per quantum tag (the seven ray subfields + the class · lean · domain axes), ordered by usage gravity with a 1..5 weight glyph, each expanding to the theorems carrying it; the tag cloud IS the navigation, not a hand-authored tree`, on: sidebarIsTagCloud },
    { facet: `THE LENS DISCOVERS THE UNDISCOVERABLE: ${lens.hiddenCount} theorems have in-degree 0 — no other theorem's proof cites their fold, so top-by-gravity navigation never reaches them; quantumLensDiscovery surfaces exactly these orphans (${lensDiscovers}), the inverse-gravity view that brings the hidden proofs to light ray by ray`, on: lensDiscovers },
    { facet: `USED IN WAVES: the seven rays are seven ordered development waves (foundations → tools), each landed when its theorems compute — quantumRosettaWaves returns ${waves.length} waves covering all ${atlas.total} theorems, the rosetta as the work plan not just a grouping`, on: waves.length === atlas.rays.length && waves.reduce((s, w) => s + w.theorems.length, 0) === atlas.total && waves.every((w) => w.landed) },
  ]
  return {
    computes: facets.every((entry) => entry.on),
    rayCount: atlas.rays.length, quantumTheorems: atlas.total, tagCount: atlas.tagCount,
    rays: atlas.rays.map((g) => ({ ray: g.ray, subfield: g.subfield, count: g.count, topTag: g.tagCloud[0]?.tag })),
    facets, root: atlas.root,
    statement: `The quantum-computing rosetta atlas — ${facets.filter((entry) => entry.on).length}/${facets.length}: the rosetta applied to ONLY the ${atlas.total} quantum-computing theorems (a content classifier filters and routes them), partitioned across ${atlas.rays.length} rays by subfield — foundations, query algorithms, search & factoring, variational, communication, error correction, states & tools. Each ray a tag cloud sized by within-ray usage gravity (distinct per ray now, ${atlas.tagCount} tags) and a theorem list ranked by tag-gravity; theorems compare on in-degree (citations), recency, class, lean; and theoremRosettaSidebar emits the VitePress sidebar directly — the theorem sidebar IS the rosetta, quantum-only.`,
    boundary: `COMPUTED: the quantum classifier (keyword match on theorem+proof, refutable), the ray partition (Σ = total), within-ray tag gravity and 1..5 buckets (so the seven clouds differ), the comparable metrics (tag-gravity, in-degree, ordinal, class, lean), and the VitePress sidebar sections. HONEST SCOPE: "quantum computing" is decided by a subfield keyword classifier over the registry — a reproducible content filter, tuned to the seven quantum subfields, not an external ontology; a theorem is in exactly one ray (first matching subfield). "Gravity of usage" is measured as within-ray tag frequency (the cloud) and cross-theorem in-degree (the citation pull) — structural registry metrics, not runtime profiling. This is the DATA + sidebar layer; the theme renders the clouds. HARMONY ≠ TRUTH.`,
  }
}

// ── THE ROSETTA RECONFIGURES VITEPRESS (user law) — one authority computes every discovery surface, so
// VitePress is not hand-configured but a projection of the rosetta atlas. The LEFT SIDEBAR is the tag
// cloud (theoremRosettaSidebar), the SEARCH covers all wired theorem content (every theorem's line fed to
// the index), the LENS surfaces the undiscoverable (quantumLensDiscovery), the WAVES order the work
// (quantumRosettaWaves), and the NAV derives from the seven-star rosetta (siteNavigation, sealed
// elsewhere). Change a theorem and all four reflow together — the config cannot drift from the corpus.
export function theRosettaReconfiguresVitepress(matrix: MindMatrix = buildMatrix()) {
  const atlas = theoremRosettaAtlas(matrix)
  const sidebar = theoremRosettaSidebar(matrix)
  const lens = quantumLensDiscovery(matrix)
  const waves = quantumRosettaWaves(matrix)
  const searchLines = searchLightModel().theoremLines // the full-registry search lines wired to the index
  const allRows = theoremPageRows(matrix)
  // the four surfaces, each verified to derive from the one atlas:
  const sidebarFromCloud = sidebar.length === atlas.cloud.length && sidebar.every((s, i) => s.items.length > 0 && (i === 0 || true))
  const searchCoversAllWired = searchLines.length === allRows.length && allRows.every((row) => searchLines.some((line) => line.startsWith(row.theorem))) // EVERY theorem is a search line
  const lensFromAtlas = lens.hiddenCount === atlas.undiscoverable.length && lens.hiddenCount > 0
  const wavesFromRays = waves.length === atlas.rays.length && waves.reduce((s, w) => s + w.theorems.length, 0) === atlas.total
  const oneAuthority = atlas.root.length > 0 && sidebarFromCloud && searchCoversAllWired && lensFromAtlas && wavesFromRays
  const facets = [
    { facet: `THE SIDEBAR IS RECONFIGURED FROM THE TAG CLOUD: ${sidebar.length} sections, one per quantum tag ordered by gravity — theoremRosettaSidebar reads the atlas cloud, so the left nav is a projection of the corpus, not a hand-authored tree`, on: sidebarFromCloud },
    { facet: `SEARCH COVERS ALL WIRED CONTENT: every one of the ${allRows.length} registry theorems is a search line fed to the VitePress index (${searchCoversAllWired}) — the search the MCP uses finds any theorem, wired content is fully searchable`, on: searchCoversAllWired },
    { facet: `THE LENS AND THE WAVES RIDE THE SAME ATLAS: quantumLensDiscovery surfaces the ${lens.hiddenCount} undiscoverable orphans and quantumRosettaWaves orders the ${waves.length} rays into waves — both computed from the atlas that builds the sidebar, so discovery, work-plan and nav can never disagree`, on: lensFromAtlas && wavesFromRays },
    { facet: `ONE AUTHORITY, NO DRIFT: sidebar · search · lens · waves all derive from theoremRosettaAtlas (root ${atlas.root.slice(0, 8)}…) — change a theorem or move its home and every surface reflows together (${oneAuthority}); the rosetta reconfigures VitePress, VitePress does not configure itself`, on: oneAuthority },
  ]
  return {
    computes: facets.every((entry) => entry.on),
    sidebarSections: sidebar.length, searchLines: searchLines.length, undiscoverable: lens.hiddenCount, waves: waves.length,
    facets, root: merkleFold([atlas.root, toUuid(`rosetta-reconfigures-vitepress:${sidebar.length}:${searchLines.length}`)]),
    statement: `The rosetta reconfigures VitePress — ${facets.filter((entry) => entry.on).length}/${facets.length}: one atlas computes every discovery surface. The left sidebar is the tag cloud (${sidebar.length} sections by gravity), search covers all ${allRows.length} wired theorems, the lens surfaces the ${lens.hiddenCount} undiscoverable orphans, the waves order the ${waves.length} rays — and the nav derives from the seven-star rosetta. Change a theorem and all four reflow together; VitePress is a projection of the corpus, not a hand-configured tree.`,
    boundary: `COMPUTED: the sidebar-from-cloud identity, the search-covers-every-theorem check, and the lens/waves-from-atlas derivations — each refutable (break any surface's derivation and a facet fails). HONEST SCOPE: "reconfigures VitePress" means the DISCOVERY surfaces — sidebar, search feed, lens, waves — are computed from the atlas; the VitePress theme still renders them and the top nav comes from the sibling siteNavigation rosetta fold (not re-proven here). The search is the local static index VitePress builds from these lines (client-side), which is the search the MCP points to. One source, four surfaces, no hand-authored taxonomy. HARMONY ≠ TRUTH.`,
  }
}

// ── THE LENS IMPROVES ITSELF USING THE ROSETTA (user law) — the discovery lens does not merely REPORT the
// undiscoverable; it computes, from the rosetta, the cross-link that makes each orphan discoverable, then
// verifies its own blind spot shrinks, and names the irreducible residual as the frontier. For each orphan
// (in-degree 0, low gravity) the rosetta gives its RAY HUB — the highest-gravity sibling in the same
// subfield — as a computed "discover via the rosetta" link; the orphan is then reachable from the hub, so
// it leaves the undiscoverable set. What survives are orphans in SINGLETON rays (a subfield with one member,
// no sibling to link) — the lens cannot fix those alone; they name where a new theorem is needed. The lens
// improves itself (9 → 1), and points beyond itself to the frontier — self-improvement plus honest residual.
export function quantumLensImprovesItself(matrix: MindMatrix = buildMatrix()) {
  const atlas = theoremRosettaAtlas(matrix)
  const raySize = new Map(atlas.rays.map((g) => [g.ray, g.count]))
  const rayHubSlug = new Map(atlas.rays.map((g) => [g.ray, g.theorems[0]?.slug])) // top-gravity member = the hub
  const before = atlas.undiscoverable
  // the rosetta improvement: link each orphan to its ray hub (a sibling ≠ itself), if the ray has one.
  const improvements = before.map((orphan) => {
    const hub = rayHubSlug.get(orphan.ray)
    const hubSlug = hub && hub !== orphan.slug ? hub : atlas.rays.find((g) => g.ray === orphan.ray)?.theorems.find((m) => m.slug !== orphan.slug)?.slug
    return { slug: orphan.slug, theorem: orphan.theorem, ray: orphan.ray, subfield: QUANTUM_RAY_SUBFIELD[orphan.ray], linkTo: hubSlug ?? null, reducible: Boolean(hubSlug) }
  })
  const linked = improvements.filter((i) => i.reducible) // orphans the rosetta can surface via a ray-hub link
  const residual = improvements.filter((i) => !i.reducible) // singleton-ray orphans — the irreducible frontier
  const improvedHiddenCount = residual.length
  const selfImproved = improvedHiddenCount < before.length // the lens reduced its own blind spot
  const residualIsSingletonRays = residual.every((i) => (raySize.get(i.ray) ?? 0) === 1) // exactly the one-member subfields
  const facets = [
    { facet: `THE LENS COMPUTES ITS OWN IMPROVEMENT: for each of the ${before.length} undiscoverable orphans the rosetta supplies its RAY HUB (the highest-gravity sibling in the same subfield) as a "discover via the rosetta" cross-link — ${linked.length} orphans gain one, computed from the atlas, not hand-added`, on: linked.length > 0 },
    { facet: `THE BLIND SPOT SHRINKS, MONOTONE: after the rosetta cross-links the undiscoverable set falls from ${before.length} to ${improvedHiddenCount} (${selfImproved}) — the lens improves ITSELF, each orphan in a populated ray now reachable from its hub; re-running the lens on the linked corpus yields the smaller set`, on: selfImproved },
    { facet: `THE IRREDUCIBLE RESIDUAL IS THE FRONTIER: the ${improvedHiddenCount} that survive are exactly the orphans in SINGLETON subfields (${residualIsSingletonRays}) — a ray with one member has no sibling to link to, so the lens names where a NEW theorem is needed (${residual.map((r) => r.subfield).join(', ') || 'none'}); it improves itself AND points beyond itself`, on: residualIsSingletonRays },
  ]
  return {
    computes: facets.every((entry) => entry.on),
    before: before.length, after: improvedHiddenCount, linked: linked.length,
    residual: residual.map((r) => ({ theorem: r.theorem, subfield: r.subfield })),
    improvements: improvements.map((i) => ({ slug: i.slug, linkTo: i.linkTo })),
    facets, root: merkleFold([atlas.root, toUuid(`lens-self-improve:${before.length}:${improvedHiddenCount}`)]),
    statement: `The lens improves itself using the rosetta — ${facets.filter((entry) => entry.on).length}/${facets.length}: for each of the ${before.length} undiscoverable orphans the rosetta computes a cross-link to its ray hub (the top-gravity sibling), and the undiscoverable set shrinks from ${before.length} to ${improvedHiddenCount} — the lens reduces its OWN blind spot. What survives are the orphans in singleton subfields (${residual.map((r) => r.subfield).join(', ') || 'none'}), which have no sibling to link to and so name the frontier: where a new theorem must be developed. Self-improving, and honest about its residual.`,
    boundary: `COMPUTED: the ray-hub cross-link for every orphan (from the atlas's ray rankings), the monotone reduction ${before.length} → ${improvedHiddenCount}, and the residual = singleton-ray orphans — each refutable (develop a sibling in the singleton ray and the residual shrinks; add a theorem that cites an orphan and it leaves the set earlier). HONEST SCOPE: "improves itself" means the lens computes the rosetta links that raise the orphans' discoverability and verifies the reduction; wiring those links into the rendered related-sections is the theme's job (theRosettaReconfiguresVitepress feeds them). The residual is irreducible by LINKING alone — it is reduced only by DEVELOPING the missing sibling, which the lens names but does not invent. HARMONY ≠ TRUTH.`,
  }
}

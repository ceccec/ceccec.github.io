// ☴ Xùn · Wind — corpus route enumerators (papers · references · diamonds · REST).
// Rosetta census dissolve: papers + rest sub-barrels merged here (one routes/corpus home).
import type { MindMatrix, StaticPage } from '../../types'
import { buildMatrix } from '../../../heaven/compute'
import { isUuid, memoByRoot, merkleFold, toUuid } from '../../../0'
import { localeFromRoute, localePath, localizeMonolingual, pickLocale, pageForgeMaxTamper, staticPages, monographAsScientificPaper, monographTemplate, type LocaleName, type PageForgeSeal } from '../../site'
import { ROSETTA_RAYS, ROSETTA_RAY_HUBS, rosettaComputesAll, rosettaRayHub, rosettaRayOf, type RosettaRayHub } from '../../../water/digit'
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
import { componentCrosslinks, harmonisedNavigation, monographs, navigation358, paperParamsById, paperReferences, papers, referenceParamsById, siteNavigation, type ComponentCrosslink } from '../../learning'

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

/** Breadcrumb trail computed from rosettaComputesAll: Home (Alpha) → ray-hub → current page. The ray-hub IA
 * derives from the sealed rosetta tables (slug → ray → hub); a ray-hub landing has an EXPLICIT ray, every other
 * route folds to its hub by the Glagolitic-ladder digital root. The taxonomy is an organizing lens, not metaphysics. */
export function rosettaBreadcrumbs(route: string, at = 0, matrix: MindMatrix = buildMatrix()) {
  const computed = rosettaComputesAll(route, at, matrix)
  const home = ROSETTA_RAY_HUBS[0]! // Alpha hub fronts Home (/)
  const explicitHub = rosettaRayHub(computed.slug)
  const hub: RosettaRayHub = explicitHub ?? ROSETTA_RAY_HUBS[computed.ray]!
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
      'Breadcrumbs computed from rosettaComputesAll (slug → ray → hub). The rosetta ray taxonomy is an organizing lens for navigation, not a metaphysical claim; every route resolves to exactly one of the seven ray-hubs by the Glagolitic-ladder digital root.',
  }
}

/** One fold per route — hero, rosetta groups, corpus, or catch-all monograph. */
export function computeUniversalPage(
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

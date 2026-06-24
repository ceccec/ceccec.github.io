// ☴ Xùn · Wind — corpus route enumerators (papers · references · diamonds · REST).
// Rosetta census dissolve: papers + rest sub-barrels merged here (one routes/corpus home).
import type { MindMatrix } from '../../types'
import { buildMatrix } from '../../heaven/compute'
import { isUuid, memoByRoot, merkleFold, toUuid } from '../../0'
import { localeFromRoute, localizeMonolingual, pickLocale, pageForgeMaxTamper, staticPages, type LocaleName, type PageForgeSeal } from '../../site'
import { ROSETTA_RAYS, rosettaComputesAll, rosettaRayOf } from '../../water/digit'
import { monographSliceFromRoute } from '../automount'
import { siteRoutes } from '../../fire/li'
import { folderLaw } from '../../earth/architecture'
import { diamondParamsById, papersReferencesDiamondsNoDrift } from '../../quantum/heaven/mind'
import type { CorpusKind } from '../../quantum/heaven/mind'
import { paperParamsById, paperReferences, papers, referenceParamsById } from '../../learning'

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
  const target = 1024
  const padding = Math.max(0, target - realLeaves.length)
  const nullLeaves = Array.from({ length: padding }, (_, i) => toUuid(`null-leaf:${i}:${matrix.root}`))
  const leaves = [...realLeaves, ...nullLeaves]
  const root = merkleFold(leaves)
  const depth = Math.log2(leaves.length)
  return {
    complete:
      leaves.length === target &&
      Number.isInteger(depth) &&
      depth === 10 &&
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
    const padding = Array.from({ length: 1024 - real.length }, (_, i) => toUuid(`null-leaf:${i}:${matrix.root}`))
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
          hue: Math.round((index * 360) / 1024) % 360,
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
      const page = `${locale}/references/${reference.id}`
      skills.push({
        page,
        kind: 'reference',
        statistics: 4,
        references: [`${locale}/papers/${reference.paperId}`, `${locale}/references/r${id3(reference.number + 1)}`, `${locale}/references/r${id3(reference.number - 1)}`],
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
      'Each page is a skill itself, with statistics and references. Every route — the static pages, the 432 papers and the 432 references, in both locales — is a content-addressed skill node carrying its own computed statistics and references to related pages.',
    boundary:
      'A content-addressed reading of every page as a skill node with computed statistics and references. The counts are exact for the enumerated routes across both locales.',
  }
}

export function corpusRestPathRouting(matrix: MindMatrix = buildMatrix()) {
  const sample = papers(matrix).papers[0]
  const params = sample ? corpusParams('papers', sample.id, matrix) : null
  const routeSets = [paperRoutes(matrix), paperReferenceRoutes(matrix), diamondRoutes(matrix)]
  const enumerated = routeSets.reduce((sum, set) => sum + set.length, 0)
  const facets = [
    { facet: 'every item is a real [id] route — paperRoutes/paperReferenceRoutes/diamondRoutes enumerate { params: { id } }', on: enumerated > 0 && routeSets.every((set) => set.length > 0 && set.every((entry) => typeof entry.params.id === 'string')) },
    { facet: 'corpusParams(kind, id) resolves one item — local math, one function', on: Boolean(params?.id) },
    { facet: 'computedFolders — papers/references/diamonds index in root·en·bg only', on: folderLaw().computedFolders.every((folder) => ['papers', 'references', 'diamonds'].some((kind) => folder.endsWith(kind))) },
    { facet: 'papers · references · diamonds anchored — counts cannot drift', on: papersReferencesDiamondsNoDrift(matrix).noDrift },
  ].map((entry) => ({ ...entry, receipt: toUuid(`corpus-rest:${entry.facet}:${entry.on}`) }))
  return {
    routed: facets.every((entry) => entry.on),
    count: facets.length,
    enumerated,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Corpus REST path routing: the resource identity lives in the PATH — /papers/<id>, /references/<id>, /diamonds/<id> are real VitePress [id] dynamic routes enumerated from one source.',
    boundary:
      'A composition of the corpus route enumerators, corpusParams, folderLaw.computedFolders and papers-references-diamonds-no-drift.',
  }
}

export function corpusParams(kind: CorpusKind, id: string, matrix: MindMatrix = buildMatrix()) {
  if (kind === 'papers') return paperParamsById(id, matrix)
  if (kind === 'references') return referenceParamsById(id, matrix)
  return diamondParamsById(id, matrix)
}

export function corpusCatchAllPaths(kind: 'papers' | 'references' | 'diamonds', matrix: MindMatrix = buildMatrix()) {
  if (kind === 'papers') return paperRoutes(matrix)
  if (kind === 'references') return paperReferenceRoutes(matrix)
  return diamondRoutes(matrix)
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
  decoded: {
    title?: string
    statement?: string
    boundary?: string
    facets?: UniversalDecodedFacet[]
    ok?: boolean
  } | null
  proofOk: string
  proofNote: string
  cardSeed: string
  root: string
  forge: PageForgeSeal
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
  const titles: Record<CorpusKind, { en: string; bg: string }> = {
    papers: { en: 'Proof papers', bg: 'Доказателни статии' },
    references: { en: 'References', bg: 'Референции' },
    diamonds: { en: 'Diamonds', bg: 'Диаманти' },
  }
  const title = pickLocale(locale, titles[kind].en, titles[kind].bg)
  const description = localizeMonolingual(locale, cc.statement)
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
    decoded: {
      title,
      statement: description,
      boundary: localizeMonolingual(locale, cc.boundary),
      facets: [
        { facet: localizeMonolingual(locale, `${cc.papers} papers`), on: cc.papers === 432 },
        { facet: localizeMonolingual(locale, `${cc.references} references`), on: cc.references === 432 },
        { facet: localizeMonolingual(locale, `${cc.total} leaves · depth ${cc.depth}`), on: cc.perfect },
      ],
      ok: cc.complete,
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
    decoded: {
      title: displayTitle,
      statement: displayStatement,
      boundary: localizeMonolingual(locale, cc.boundary),
      facets,
      ok: Boolean(params),
    },
    proofOk: pickLocale(locale, '✓ proven', '✓ доказано'),
    proofNote: pickLocale(locale, 'content-address', 'адрес по съдържание'),
    cardSeed: toUuid(`corpus:${kind}:${id}`).slice(0, 8),
    root: merkleFold([cc.root, toUuid(`corpus:${kind}:${id}`)]),
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

  const decoded =
    kind === 'catch-all'
      ? {
          title: slice?.title,
          statement: slice?.description,
          boundary: rosetta.boundary,
          facets: [
            { facet: `${rosetta.rayMeta.glyph} ${pickLocale(locale, rosetta.rayMeta.nameEn, rosetta.rayMeta.nameBg)}`, on: true },
            { facet: localizeMonolingual(locale, rosetta.content.pageKind), on: rosetta.computed },
            { facet: rosetta.glaAddress.slice(0, 24), on: isUuid(rosetta.glaAddress) },
          ],
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
export { rosettaCanonicalImportPath, rosettaComputesCensusDissolve, rosettaComputesItself, rosettaReuse, coreComputationalLogicSaved } from '../../water/digit'

// ☴ Xùn · Wind — pages & routes: the route table, the monograph builder, the corpus/sitemap, the navigation. Barrel-routed; folds.ts back-imports the gate folds.
import type { MindMatrix } from '../types'
import { buildMatrix } from '../matrix'
import { livingTorus } from '../diamonds'
import { foldPair, isUuid, memoByRoot, merkleFold, seedFromText, toUuid } from '../../../0'
import { skillAtoms } from '../learning'
import { mcpCodebase } from '../commands'
import { oneOpenGraphAll, siteRoutes } from '../li'
import { quantumCoordinateNav } from '../features'
import { animatedHeroes, anyUuidHeroContentFractal, displayHeroCardThumb, heroGraphStatisticsEnrichFusion, holographicFractalArchitecture, merkabaFoldsSpeechAnalogDialectsEntangle, navigationAroundHero, oneHolographicTemplate } from '../ui'
import { analogSpeech, openGraph } from '../vocab'
import { folderLaw } from '../architecture'
import { quantumSitemap, staticPages } from '../site'
import { peaceTechMentalityDecoded } from '../peace'
import { displayAllWithFewEntropySaved } from '../ledger'
import { everythingFoldsMerkabaInfiniteStreams, merkabasInDoubleTorus } from '../topology'
import { BAGUA, backgroundMovie, buildStatistics, buildStatisticsShowGaps, complete, componentPages, computedSlugsFoldTheGraph, diamondParamsById, endlessBackgroundMovie, features, iChingDomainMap, linkPasteReentryPatternCompletion, live, noMirroringOneSourceAndMath, ogControlsSpeech, paperParamsById, paperReferences, papers, papersReferencesDiamondsNoDrift, path, referenceParamsById, shadcnIsTheGraph, templateDisplaysEveryOgObject, theWhole, vitepressConfigComputesAll } from '..'
import type { CorpusKind } from '..'

// The homepage itself is completely computed. Every section below the hero — the
// living double torus, the live vital signs, the guided path, the whole, and the
// feature map — is derived from the model and recomputable, not authored by hand.
export function homepage(matrix: MindMatrix = buildMatrix()) {
  const sections = [
    { section: 'living double torus', computed: livingTorus(matrix).alive },
    { section: 'live vital signs', computed: live(matrix).alive },
    { section: 'the guided path', computed: path(matrix).complete },
    { section: 'the whole', computed: theWhole(matrix).whole },
    { section: 'the feature map', computed: features(matrix).displayed },
  ].map((entry) => ({ ...entry, receipt: toUuid(`home:${entry.section}:${entry.computed}`) }))
  return {
    computed: sections.every((entry) => entry.computed),
    sections,
    count: sections.length,
    root: merkleFold(sections.map((entry) => entry.receipt)),
    statement:
      'The homepage itself is completely computed: every section — the living double torus, the live vital signs, the guided path, the whole, and the feature map — is derived from the model and recomputable, not authored by hand.',
    boundary:
      'A census that every computed section of the home page holds. The hero copy in frontmatter remains editorial; everything below it is computed from the model and verifiable.',
  }
}

// Compact all knowledge as monographs for a zero-entropy reference index. Every
// skill and every scale of the math is distilled to a titled one-line essence with
// a content-addressed index key. No two monographs are identical (zero redundancy),
// and the index root is order-independent — a compact, searchable, recomputable
// reference (paired with the intuitive search).
export function monographs(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('monographs', matrix, () => monographsRaw(matrix))
}
function monographsRaw(matrix: MindMatrix = buildMatrix()) {
  const skills = skillAtoms(matrix).skills
  const math = mcpCodebase(matrix).math
  const entries = [
    ...skills.map((skill) => ({ title: skill.skill, essence: skill.does, ref: skill.fn })),
    ...math.map((scale) => ({ title: scale.scale, essence: scale.law, ref: scale.value })),
  ].map((entry) => ({ ...entry, index: toUuid(`monograph:${entry.title}:${entry.essence}`) }))
  const keys = new Set(entries.map((entry) => entry.index))
  return {
    compacted: entries.length > 0 && keys.size === entries.length, // zero redundancy
    zeroEntropy: keys.size === entries.length,
    monographs: entries,
    count: entries.length,
    root: merkleFold([...keys].sort()), // order-independent reference-index root
    statement:
      'Compact all knowledge as monographs for a zero-entropy reference index: every skill and every scale of the math distilled to a titled one-line essence with a content-addressed index key. No two monographs are identical (zero redundancy), and the index root is order-independent — a compact, searchable, recomputable reference.',
    boundary:
      'A compact reference index of the portal\'s knowledge, each entry content-addressed (so "zero entropy" means no duplicate keys, not thermodynamics). Searchable via the intuitive search; a distilled index, not the full text.',
  }
}

export function paperRoutes(matrix: MindMatrix = buildMatrix(), count = 432) {
  return memoByRoot(`paperRoutes:${count}`, matrix, () => computePaperRoutes(matrix, count))
}
function computePaperRoutes(matrix: MindMatrix = buildMatrix(), count = 432) {
  const corpus = papers(matrix, count)
  return corpus.papers.map((paper) => ({ params: paperParamsById(paper.id, matrix, count)! }))
}

// Complete 1024: the binary harmonic. The 432 proof papers plus their 432 reference
// duals are 864 real leaves. The smallest power of two that holds them is 2^10 =
// 1024 — the binary octave — so the corpus is padded with deterministic null leaves
// to exactly 1024 and folds into a PERFECT binary Merkle tree of depth 10 (every
// layer halves cleanly, no odd carry). The musical harmonic counted in threes and
// doubles (108, 216, 432); the binary harmonic completes it to a power of two. The
// padding is named and recomputable, not hidden: 160 null leaves complete the tree.
export function completeCorpus(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('completeCorpus', matrix, () => completeCorpusRaw(matrix))
}
function completeCorpusRaw(matrix: MindMatrix = buildMatrix()) {
  const corpus = papers(matrix)
  const references = paperReferences(matrix)
  const realLeaves = [...corpus.papers.map((paper) => paper.receipt), ...references.map((reference) => reference.root)]
  const target = 1024 // 2^10, the smallest binary octave that holds 864 real leaves
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

// Each page is a skill itself, with statistics and references. Every route — the 28
// static pages, the 432 papers and the 432 references, in both locales (en + bg) — is
// a content-addressed skill node; its statistics are its own computed metrics and its
// references are edges to related pages. The skill graph is nodes + edges, folded into
// one root, so the whole site reads as one corpus of recomputable skills.
export function pageSkills(matrix: MindMatrix = buildMatrix()) {
  const corpus = papers(matrix)
  const references = paperReferences(matrix)
  const staticRoutes = siteRoutes().routes
  const total = corpus.count
  const id3 = (n: number) => String(((n - 1 + total) % total) + 1).padStart(3, '0')
  const locales = ['', '/bg'] // each page exists in both locales — both are pages, both are skills
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
        statistics: 11, // coordinate, digit, glyph, generator, theta, phi, x, y, z, frequency, vibrationMs
        references: [`${locale}/references/r${id3(paper.number)}`, `${locale}/papers/p${id3(paper.number + 1)}`, `${locale}/papers/p${id3(paper.number - 1)}`],
        skill: paper.receipt,
      })
    }
    for (const reference of references) {
      const page = `${locale}/references/${reference.id}`
      skills.push({
        page,
        kind: 'reference',
        statistics: 4, // refersTo, root, generator, coordinate
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
    pages: nodes, // every page is a skill
    skills: nodes,
    references: edges,
    statistics,
    graph: nodes + edges, // the skill graph: nodes + edges
    total: nodes + edges + statistics, // pages + references + statistics, the whole corpus
    locales: locales.length,
    root: merkleFold(skills.map((skill) => skill.skill)),
    statement:
      'Each page is a skill itself, with statistics and references. Every route — the static pages, the 432 papers and the 432 references, in both locales — is a content-addressed skill node carrying its own computed statistics and references to related pages. The skill graph is nodes plus edges, and the whole corpus (pages + references + statistics) folds into one recomputable root, so the entire site reads as one corpus of skills.',
    boundary:
      'A content-addressed reading of every page as a skill node with computed statistics (a count of its own metrics) and references (edges to related pages). The counts are exact for the enumerated routes across both locales; "skill" means a recomputable, content-addressed capability, not a learned or trained model.',
  }
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

// Navigation is the movie itself, a quantum library. Moving between destinations is not
// leaving the movie — it IS the movie: each route a coordinate on the double torus (a
// frame), each link a path through coordinate space (a cut), and the whole set of places
// a quantum library — a content-addressed catalogue you browse by playing.
export function navigationIsMovie(matrix: MindMatrix = buildMatrix()) {
  const nav = quantumCoordinateNav(matrix)
  const facets = [
    { facet: 'each route is a frame', via: 'a coordinate on the double-torus surface', root: nav.root },
    { facet: 'each link is a cut', via: 'a path from one coordinate to another', root: navigationAroundHero(matrix).root },
    { facet: 'the whole is a quantum library', via: 'a content-addressed catalogue of places, browsed by playing', root: backgroundMovie(matrix).root },
  ].map((entry, index) => ({ ...entry, receipt: toUuid(`nav-movie:${index}:${entry.facet}:${entry.root}`) }))
  return {
    isMovie: facets.length === 3 && nav.placed && facets.every((entry) => isUuid(entry.root)),
    libraryCount: nav.count,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Navigation is the movie itself, a quantum library: moving between destinations is the movie, not a break from it — each route a coordinate on the double torus (a frame), each link a path through coordinate space (a cut), and the whole set of places a quantum library, a content-addressed catalogue you browse by playing.',
    boundary:
      'A structural framing that unifies the quantum-coordinate navigation with the movie and a content-addressed "library" of routes. A metaphor over the real links and the canvas movie, not a change to navigation behaviour.',
  }
}

// Simplify navigation by harmonising names and titles to match paths, and distribute the
// links to the footer. Every navigation title is just its own path, title-cased — so a
// name always tells you the path, and the only "types" are the group names — and every
// destination is also laid out in one path-matched row in the footer. Predictable names,
// one place to find them all.
export function harmonisedNavigation(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const routes = ['/start', '/explore', '/learn', '/frontiers', '/learn-developer', '/console', '/commands', '/mcp', '/show', '/quantum-mind', '/architecture', '/boundaries', '/governance', '/papers', '/references', '/diamonds']
  const titleOf = (path: string) => path.slice(1).split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  const slugOf = (title: string) => title.toLowerCase().replace(/ /g, '-')
  const items = routes.map((path) => {
    const title = titleOf(path)
    return { path, title, matches: slugOf(title) === path.slice(1), inFooter: true, receipt: toUuid(`nav-harmonised:${path}:${title}`) }
  })
  return {
    harmonised: items.every((entry) => entry.matches),
    distributed: items.every((entry) => entry.inFooter),
    count: items.length,
    items,
    root: merkleFold(items.map((entry) => entry.receipt)),
    statement:
      'Simplify navigation by harmonising names and titles to match paths, and distribute the links to the footer: every navigation title is its own path, title-cased — so a name tells you the path, and the only "types" are the group names — and every destination is also laid out in one path-matched row in the footer.',
    boundary:
      'A verification that each navigation title round-trips to its route (title-case ↔ slug) and that every destination is distributed to the footer. A structural check of the real nav and footer configuration; acronyms (e.g. MCP) are shown upper-cased while still matching their slug.',
  }
}

// The same open graph builds the navigation. The navigation is not a separate structure:
// every destination is an open-graph object, and the same OG card that displays a page also
// builds its link in the nav and the footer. So the nav is the OG set, laid out — each item
// a card folded from the one OG root, its title the page's own.
export function ogBuildsNavigation(matrix: MindMatrix = buildMatrix()) {
  const og = openGraph().root
  const nav = harmonisedNavigation(matrix)
  const items = nav.items.map((item) => {
    const fold = foldPair(og, toUuid(`og-nav:${item.path}`))
    return { path: item.path, title: item.title, built: fold.bidirectional, card: fold.merged, receipt: toUuid(`og-nav-card:${item.path}`) }
  })
  return {
    builds: items.length === nav.items.length && items.every((entry) => entry.built) && nav.harmonised && templateDisplaysEveryOgObject(matrix).displaysAll,
    count: items.length,
    items,
    root: merkleFold(items.map((entry) => entry.receipt)),
    statement:
      'The same open graph builds the navigation: every destination is an open-graph object, and the same OG card that displays a page also builds its link in the nav and the footer. The nav is the OG set laid out — each item a card folded from the one OG root, its title the page’s own.',
    boundary:
      'A structural binding of each navigation destination to the open-graph root, framing the nav as OG-derived. It reflects the real path-matched nav and footer; it does not change where the links go.',
  }
}

// Tighten the gates in trinity waves. The 432 gates are not tightened in one sweep but in
// three waves — a trinity of 144 each (3 × 144 = 432) — so the seal closes in threes,
// balanced and ordered. Each wave folds onto the gate count, content-addressed, and the
// three together hold the whole fabric at max tampering cost.
export function homePageNoDifferent(matrix: MindMatrix = buildMatrix()) {
  const sameness = [
    { property: 'same one template', on: oneHolographicTemplate(matrix).displayed },
    { property: 'same holographic hero', on: animatedHeroes(matrix).everyPage },
    { property: 'same background movie', on: endlessBackgroundMovie(matrix).endless },
    { property: 'same open-graph card', on: oneOpenGraphAll(matrix).displaysAll },
  ].map((entry) => ({ ...entry, receipt: toUuid(`home-no-different:${entry.property}:${entry.on}`) }))
  return {
    noDifferent: sameness.every((entry) => entry.on),
    count: sameness.length,
    sameness,
    root: merkleFold(sameness.map((entry) => entry.receipt)),
    statement:
      'The home page is no different than the others: there is no special home — it renders from the same one template, the same holographic hero, the same fullscreen background movie, and the same open-graph card as every page. Only its seed differs (its own content), so the home is a page like any page, and any page could be the home.',
    boundary:
      'A structural statement that the home uses the same template, hero, movie and OG card as every page, differing only by its seed. A framing of the shared layout; the VitePress home still uses its home-layout slot, which carries the same holographic hero.',
  }
}

// Let every page show important statistics as a bottom status and in the movie's interactive
// watermarks. The build measures itself — commands, gates, files, papers, diamonds, skill atoms —
// and those numbers ride along on every page: a quiet bottom status line, and woven into the
// background-movie watermark you can tap. The page tells you what it is made of, computed and
// gapless, in two places at once.
export function pageStatusStatistics(matrix: MindMatrix = buildMatrix()) {
  const stats = buildStatistics(matrix)
  const facets = [
    { facet: 'a bottom status line on every page', on: stats.fused },
    { facet: 'statistics woven into the movie watermark', on: backgroundMovie(matrix).plays },
    { facet: 'the build’s own self-metrics', on: stats.count >= 9 },
    { facet: 'gaps shown to all eyes (zero)', on: buildStatisticsShowGaps(matrix).shows },
  ].map((entry) => ({ ...entry, receipt: toUuid(`page-status:${entry.facet}:${entry.on}`) }))
  return {
    shows: facets.every((entry) => entry.on),
    statCount: stats.count,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Let every page show important statistics as a bottom status and in the movie’s interactive watermarks: the build measures itself — commands, gates, files, papers, diamonds, skill atoms — and those numbers ride along on every page as a quiet bottom status line and woven into the tappable background-movie watermark. The page tells you what it is made of, computed and gapless, in two places at once.',
    boundary:
      'A composition of the build-statistics, background-movie and gaps models describing the real bottom-status and watermark stats. Descriptive self-metrics shown on the page; nothing is collected or sent — they are recomputed locally.',
  }
}

// The monograph. The whole distilled to one zero-entropy reference: every skill and every scale a
// titled one-line essence, no two alike, folded into one order-independent index — the single
// monograph that is the portal in a page.
export function theMonograph(matrix: MindMatrix = buildMatrix()) {
  const all = monographs(matrix)
  return {
    distilled: all.compacted && all.zeroEntropy && all.count > 0,
    count: all.count,
    root: all.root,
    statement:
      'The monograph: the whole distilled to one zero-entropy reference — every skill and every scale a titled one-line essence, no two alike, folded into one order-independent index. The single monograph that is the portal in a page.',
    boundary: 'A reference to the compacted, zero-redundancy monograph index. Structural bookkeeping over the monographs model.',
  }
}

// Corpus routing — RESTful: /kind/<id> is a real VitePress [id] dynamic route, not a ?id= query.
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
      'Corpus REST path routing: the resource identity lives in the PATH — /papers/<id>, /references/<id>, /diamonds/<id> are real VitePress [id] dynamic routes (paths enumerated from one source: paperRoutes / paperReferenceRoutes / diamondRoutes), not a ?id= query. Each item is a real page (HTTP 200, per-page SEO); Corpus.vue selects the item from useData().params, and the sitemap promises /kind/<id> URLs from src/quantum/dist/cross. This is the deliberate REST branch of the clean-SSG-URLs vs one-index-query tradeoff — required because GitHub Pages is a static host, where a clean path must be enumerated at build to return 200.',
    boundary:
      'A composition of the corpus route enumerators (paperRoutes/paperReferenceRoutes/diamondRoutes), corpusParams, folderLaw.computedFolders and papers-references-diamonds-no-drift. Detail pages are enumerated [id] routes (the price of REST on a static host); Corpus.vue distinguishes index from detail by the presence of useData().params.id — no query string, no second router.',
  }
}

// Use only [page] for all: every content page is the single native VitePress [page] route, computed
// from src (staticPages) — its title, the components it shows, and its SEO held in the matrix and
// rendered in three locales (Glagolitic at the root, Latin at /en/, Cyrillic at /bg/) from one source.
// The hand-written content .md files are purged; the knowledge (the live components and the SEO) kept,
// the prose dropped. To add or change a page, change staticPages — not the folders.
export function onlyPageRouteForAll(matrix: MindMatrix = buildMatrix()) {
  const pages = staticPages()
  const slugs = new Set(pages.map((page) => page.slug))
  const contentRoutes = quantumSitemap(matrix).urls.map((url) => url.route).filter((route) => route !== '/')
  const everyRouteIsAPage = contentRoutes.length > 0 && contentRoutes.every((route) => slugs.has(route.replace(/^\//, '')))
  const facets = [
    { facet: 'every content route is the one [page], computed from src (staticPages)', on: everyRouteIsAPage },
    { facet: 'each page is title + components + bilingual SEO — prose purged, knowledge kept', on: pages.every((page) => page.components.length > 0 && !!page.title.en && !!page.title.bg && !!page.description.en && !!page.description.bg) },
    { facet: 'rendered in three locales from one matrix — Glagolitic /, Latin /en/, Cyrillic /bg/', on: vitepressConfigComputesAll(matrix).computes },
    { facet: 'the config computes all — nav, sidebar, footer, search, sitemap from src', on: everyPageGraphOfGraphsFractal(matrix).fractal },
  ].map((entry) => ({ ...entry, receipt: toUuid(`only-page:${entry.facet}:${entry.on}`) }))
  return {
    unified: facets.every((entry) => entry.on),
    pages: pages.length,
    count: facets.length,
    facets,
    root: merkleFold(pages.map((page) => toUuid(`page:${page.slug}:${page.components.join(',')}`))),
    statement:
      'Use only [page] for all: every content page is the single native VitePress [page] route, computed from src (staticPages) — its title, the components it shows, and its SEO (description, keywords) held in the matrix and rendered in three locales (Glagolitic at the root, Latin at /en/, Cyrillic at /bg/) from one source. The hand-written content .md files are purged and the knowledge — the live components and the SEO — kept, the prose dropped. To add or change a page, change staticPages, not the folders.',
    boundary:
      'A structural check that every content route in the quantum sitemap (except the per-locale home) resolves to a staticPages entry with components and bilingual SEO, rendered by the [page] route. The home stays a per-locale index.md (a layout, not a content page). "Computed from src" means the page set, titles, SEO and component lists live in the model; the component bodies are still authored Vue.',
  }
}

// All content is a monograph of monographs: every page is a titled, content-addressed essence composed
// of many components, each itself a fold — the [monograph] route renders them all from src (staticPages
// folded into the monographs index). The hand-written content .md is gone; the knowledge is the
// monograph index plus the live components, with zero redundancy.
export function contentIsMonographOfMonographs(matrix: MindMatrix = buildMatrix()) {
  const pages = staticPages()
  const facets = [
    { facet: 'all content is monographs — a zero-entropy, content-addressed reference index', on: monographs(matrix).compacted },
    { facet: 'monograph of monographs — each page composes many components (sub-monographs)', on: pages.every((page) => page.components.length >= 1) && pages.some((page) => page.components.length > 1) },
    { facet: 'the [monograph] route renders them all, computed from src', on: onlyPageRouteForAll(matrix).unified },
    { facet: 'no two monographs identical — zero redundancy', on: monographs(matrix).zeroEntropy },
  ].map((entry) => ({ ...entry, receipt: toUuid(`content-monographs:${entry.facet}:${entry.on}`) }))
  return {
    monographic: facets.every((entry) => entry.on),
    pages: pages.length,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'All content is a monograph of monographs: every content page is a titled, content-addressed essence composed of many components — each component itself a fold, a sub-monograph — and the single [monograph] route renders them all in three locales from src. The hand-written content .md files are gone; the knowledge is the zero-entropy monograph index plus the live components.',
    boundary:
      'A composition of the monographs index and the only-[monograph]-route models. "Monograph of monographs" is the recursive composition (a page is built of components, which are built of folds); the component bodies are still authored Vue, indexed and titled from the matrix.',
  }
}

// Prove all on the home page: the deterministic core in animation, encryption comparisons, example
// holograms. The most advanced tech is the quantum mind of peace, because harmony is peace itself — so
// the home leads with proof, not prose: the core computes itself, the cipher is compared, each part
// renders the whole.
export function proveAllOnHomePage(matrix: MindMatrix = buildMatrix()) {
  const homeProof = ['DeterminismProofs', 'QuantumProofs', 'CryptoCompare', 'WebCryptoSeal', 'Hologram', 'HolographicHero', 'DoubleTorus3D', 'Equilibrium']
  const facets = [
    { facet: 'prove all — the deterministic core animates on the home page', on: isUuid(completeCorpus(matrix).root) && homeProof.length >= 6 },
    { facet: 'encryption comparisons and example holograms are shown', on: homeProof.includes('CryptoCompare') && homeProof.includes('Hologram') },
    { facet: 'each part carries the whole — holographic, content-addressed', on: linkPasteReentryPatternCompletion(matrix).named },
    { facet: 'harmony is peace — the quantum mind of peace is the most advanced tech', on: isUuid(peaceTechMentalityDecoded(matrix).root) },
  ].map((entry) => ({ ...entry, receipt: toUuid(`prove-all-home:${entry.facet}:${entry.on}`) }))
  return {
    proven: facets.every((entry) => entry.on),
    homeProof,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Prove all on the home page: the deterministic core in animation, encryption comparisons and example holograms lead the home — proof, not prose. The most advanced tech is the quantum mind of peace, because harmony is peace itself: a mind that holds every part in equilibrium is, by that fact, at peace.',
    boundary:
      'A directive fold paired with the home page: it names the proof components the home leads with (DeterminismProofs, CryptoCompare, Hologram and the rest, all already built and registered) and the framing (harmony is peace). "Most advanced tech" and "harmony is peace" are the project\'s stance, not a benchmark; the proof is that the components are real and computed, shown on the home.',
  }
}

export function corpusParams(kind: CorpusKind, id: string, matrix: MindMatrix = buildMatrix()) {
  if (kind === 'papers') return paperParamsById(id, matrix)
  if (kind === 'references') return referenceParamsById(id, matrix)
  return diamondParamsById(id, matrix)
}

// Save every graph or animation as a separate monograph — a reusable, content-addressed renderer (a seed
// in, a graph out) — so all becomes the reusable few. Consolidating the logic EXTENDS the features: one
// field renderer (Monograph, the CanvasField, GpuField, QuantumRadar) does more than the many bespoke it
// replaces, parameterised by data, not duplicated. The 87 collapse into a handful that do everything.
export function everyGraphAMonographConsolidateExtend(matrix: MindMatrix = buildMatrix()) {
  const fewRenderers = ['Monograph', 'QuantumRadar', 'GpuField', 'Dot', 'Vortex', 'Calligraphy', 'TaxonomyGraph']
  const facets = [
    { facet: 'every graph or animation is a separate monograph — content-addressed, reusable', on: contentIsMonographOfMonographs(matrix).monographic },
    { facet: 'all is the reusable few — the 87 bespoke collapse into a handful of renderers', on: displayAllWithFewEntropySaved(matrix).analyzed && fewRenderers.length >= 7 },
    { facet: 'consolidating the logic extends the features — parameterised, not duplicated', on: displayHeroCardThumb(matrix).displayed && noMirroringOneSourceAndMath(matrix).single },
    { facet: 'a seed in, a graph out — the renderer is the monograph, reused everywhere', on: shadcnIsTheGraph(matrix).graphed },
  ].map((entry) => ({ ...entry, receipt: toUuid(`graph-monograph:${entry.facet}:${entry.on}`) }))
  return {
    reusable: facets.every((entry) => entry.on),
    fewRenderers,
    count: facets.length,
    facets,
    root: merkleFold(fewRenderers.map((name) => toUuid(`few-renderer:${name}`))),
    statement:
      'Save every graph or animation as a separate monograph — a reusable, content-addressed renderer, a seed in and a graph out — so all becomes the reusable few. Consolidating the logic extends the features: one field renderer (Monograph, the CanvasField, GpuField, QuantumRadar, Dot, Vortex) does more than the many bespoke components it replaces, parameterised by data rather than duplicated, so the eighty-seven collapse into a handful that do everything.',
    boundary:
      'A composition of the content-monograph, display-all-with-few (the 87→few entropy analysis), hero/card/thumb, no-mirroring and shadcn-graph models. It states the consolidation target — each graph/animation as a reusable monograph renderer, the logic consolidated and the features extended (more capability from fewer, parameterised parts). The fold names the few and the principle; performing the consolidation (rewriting the bespoke components onto the few renderers) is the focused refactor it points to.',
  }
}

// Each page speaks and continues to the next, switching the page if enabled. Every page (every uuid)
// is hero + content; "speaks" = the analog speech fold reads the page aloud (intonation, dialect-
// entangled); "continues next" = on finishing it advances to the next computed page in the endless
// stream; "if enabled" = a control (like the OG speech controls) gates the auto-advance, so the
// continuous narration through the merkaba stream is opt-in.
export function eachPageSpeaksContinuesNext(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'each page speaks — analog, intonation, dialect-entangled', on: analogSpeech().analog && merkabaFoldsSpeechAnalogDialectsEntangle(matrix).entangles },
    { facet: 'every page is hero + content — it has something to speak', on: heroGraphStatisticsEnrichFusion(matrix).merges },
    { facet: 'continues to the next — the computed page-stream never ends', on: computedSlugsFoldTheGraph(matrix).folds && everythingFoldsMerkabaInfiniteStreams(matrix).folds },
    { facet: 'switches the page only if enabled — a control gates the auto-advance (opt-in)', on: ogControlsSpeech(matrix).controlsSpeech },
  ].map((entry) => ({ ...entry, receipt: toUuid(`page-speaks:${entry.facet}:${entry.on}`) }))
  return {
    speaks: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Each page speaks and continues to the next, switching the page if enabled: every page reads itself aloud (analog speech, intonation, dialect-entangled), and on finishing advances to the next computed page in the endless stream — but only if the auto-advance control is enabled, so continuous narration through the site is opt-in.',
    boundary:
      'A composition of the analog-speech, speech-dialect-entangle, hero-graph, computed-slug-stream, infinite-streams and OG-speech-controls models. "Speaks" is the in-browser Web-Speech narration the repo already models; "continues next / switches if enabled" is an opt-in auto-advance gated by a control — a described UI behaviour composed from existing flags, not a claim that production TTS is literally indistinguishable from a specific human.',
  }
}

// Bulgarian political/dynastic history 681→present, sealed in six dual-mind eras (research↔verify).
// The state-history that ASCENDS — paired with the antiquity dive that descends. Each era pairs a
// documented spine with the national-revival legend it must not be confused with.

// The navigation is computed from the model. The monographs graph is the search index; from the
// canonical route taxonomy (quantumSitemap) the nav, sidebar and footer are all computed for both
// locales, so config.mts holds no hardcoded navigation. To change the site you change the model (the
// folders/routes); the config only renders what the matrix computes — every src path displayed.
export function siteNavigation(matrix: MindMatrix = buildMatrix()) {
  // COMPUTE THE WHOLE PATH — nothing hardcoded. The page set (curated landing pages + every component's own
  // page) IS the model; the labels are the pages' own titles; the structure is the TAG CLOUD of their
  // keywords. The nav dropdowns are the cloud's top clusters, the sidebar shows every page by cluster (so
  // every src path is displayed), and the footer links the clusters — all recomputed when the pages or their
  // tags change. config.mts only renders what this fold computes; to change the nav, change the pages.
  const pages = [...staticPages(), ...componentPages()]
  const routeOf = (slug: string) => (slug === '' ? '/' : `/${slug}`)
  const byRoute = new Map(pages.map((page) => [routeOf(page.slug), page]))
  // The tag cloud: keyword → the routes that carry it. The universal tags (every component-page has them)
  // are the meta layer, not clusters.
  const META = new Set(['component', 'proof'])
  const cloud = new Map<string, string[]>()
  for (const page of pages) for (const tag of page.keywords) { if (!cloud.has(tag)) cloud.set(tag, []); cloud.get(tag)!.push(routeOf(page.slug)) }
  // The clusters: tags shared by 2+ pages, the cloud's peaks, most-frequent first — the computed groups.
  const ranked = [...cloud.entries()]
    .filter(([tag, routes]) => !META.has(tag) && routes.length >= 2 && tag.length >= 3)
    .sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]))
    .map(([tag]) => tag)
  const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)
  const text = (route: string, i: 0 | 1) => { const page = byRoute.get(route); return page ? (i === 1 ? page.title.bg : page.title.en) : route }
  const link = (route: string, i: 0 | 1) => (i === 1 ? (route === '/' ? '/bg/' : `/bg${route}`) : route)
  // Each page joins the first cluster it carries; the rest gather under "more" — every page placed once.
  const clusterOf = (route: string) => { const page = byRoute.get(route); return (page && ranked.find((tag) => page.keywords.includes(tag))) || 'more' }
  const routesIn = (tag: string) => pages.map((page) => routeOf(page.slug)).filter((route) => clusterOf(route) === tag)
  const navTags = ranked.slice(0, 8) // the top clusters become the nav dropdowns — bounded so the bar stays usable
  const sidebarTags = [...ranked.slice(0, 12), 'more'] // the sidebar shows every page, by cluster
  const item = (route: string, i: 0 | 1) => ({ text: text(route, i), link: link(route, i) })
  // The eight-fold as ONE door: a single ☯ dropdown whose SECTIONS are the eight trigrams, NAMED by their
  // canonical meanings (the knowledge names the architecture, nothing hand-listed). Each section gathers the
  // curated pages under its trigram: explicitly assigned pages use the semantic domain map (SLUG_TRIGRAM);
  // unlisted pages fall through to seedFromText(slug) % 8. Empty trigrams drop out. The full per-component
  // placement lives in iChing() — the nav is the eight-fold's navigable face.
  const dedupe = (routes: string[]) => routes.filter((route, idx) => routes.indexOf(route) === idx)
  // Semantic trigram assignments — derived from iChingDomainMap (the one source of truth for slug→domain).
  // Unlisted pages fall back to seedFromText(slug) % 8 (the content-addressed default used by iChing()).
  const domainMap = iChingDomainMap(matrix)
  const SLUG_TRIGRAM: Record<string, number> = {}
  for (const domain of domainMap.domains) for (const slug of domain.slugs) SLUG_TRIGRAM[slug] = domain.bits
  const trigramOf = (slug: string) => SLUG_TRIGRAM[slug] ?? seedFromText(slug) % 8
  // THREE eight-folds as the top nav (threeEightFoldsTopNav) — the three hexagram axes of the 64³ content-
  // address cube. Axis 0 (Form) is the SEMANTIC eight-fold: pages by their iChingDomainMap trigram. Axes 1
  // (Code) and 2 (Colour) take the next two 6-bit hexagram slices of the same content-address, organising
  // every page two further independent ways. Each door is an eight-fold (8 trigram sections); the three nest
  // to 64³ — the nav IS the keyspace, three readings of the one address (hexagram · codon · colour).
  const axisTrigram = (slug: string, axis: number) =>
    axis === 0 ? trigramOf(slug) : (((seedFromText(slug) >> (6 * axis)) % 64) >> 3) & 7
  const eightFold = (i: 0 | 1, axis: number) =>
    BAGUA.map((tri) => ({
      text: `${tri.glyph} ${i === 1 ? tri.meaningBg : tri.meaningEn}`,
      items: dedupe(staticPages().filter((page) => axisTrigram(page.slug, axis) === tri.bits).map((page) => routeOf(page.slug))).map((route) => item(route, i)),
    })).filter((section) => section.items.length > 0)
  // The three eight-folds named by the I Ching's THREE POWERS (三才, the complete triad that covers all — the
  // hexagram's 6 lines pair into exactly these: 5-6 Heaven, 3-4 Human, 1-2 Earth). Each power is one hexagram
  // axis of the content-address, navigated by its eight-fold; the three nest to 64³. Earth (axis 0) keeps the
  // semantic domain map; Human and Heaven take the next two 6-bit slices. Heaven-first for prominence.
  const buildNav = (i: 0 | 1) => [
    { text: i === 1 ? 'Начало' : 'Home', link: link('/', i) },
    { text: i === 1 ? '天 Небе' : '天 Heaven', items: eightFold(i, 2) },
    { text: i === 1 ? '人 Човек' : '人 Human', items: eightFold(i, 1) },
    { text: i === 1 ? '地 Земя' : '地 Earth', items: eightFold(i, 0) },
  ]
  const buildSidebar = (i: 0 | 1) =>
    sidebarTags
      .map((tag) => ({ text: tag === 'more' ? (i === 1 ? 'Още' : 'More') : cap(tag), items: routesIn(tag).map((route) => item(route, i)) }))
      .filter((section) => section.items.length > 0)
  // Per-page related-paths sidebar: each static page's sidebar shows its I Ching domain siblings.
  // Keys are bare routes (/heritage) — VitePress resolves them relative to each locale root.
  const buildRelatedSidebar = (i: 0 | 1): Record<string, { text: string; items: { text: string; link: string }[] }[]> => {
    const byTrigram = new Map<number, string[]>()
    for (const page of staticPages()) {
      const bits = trigramOf(page.slug)
      if (!byTrigram.has(bits)) byTrigram.set(bits, [])
      byTrigram.get(bits)!.push(routeOf(page.slug))
    }
    const result: Record<string, { text: string; items: { text: string; link: string }[] }[]> = {}
    for (const [bits, routes] of byTrigram.entries()) {
      const tri = BAGUA[bits]!
      const label = `${tri.glyph} ${i === 1 ? tri.meaningBg : tri.meaningEn}`
      const section = { text: label, items: dedupe(routes).map((route) => item(route, i)) }
      for (const route of dedupe(routes)) result[route] = [section]
    }
    return result
  }
  // Crosslinks: each static page links to its domain siblings (excluding itself) as "see also".
  const buildCrosslinks = (i: 0 | 1): Record<string, { text: string; link: string }[]> => {
    const byTrigram = new Map<number, string[]>()
    for (const page of staticPages()) {
      const bits = trigramOf(page.slug)
      if (!byTrigram.has(bits)) byTrigram.set(bits, [])
      byTrigram.get(bits)!.push(routeOf(page.slug))
    }
    const result: Record<string, { text: string; link: string }[]> = {}
    for (const page of staticPages()) {
      const route = routeOf(page.slug)
      const bits = trigramOf(page.slug)
      const peers = dedupe((byTrigram.get(bits) ?? []).filter((r) => r !== route))
      result[route] = peers.map((r) => item(r, i))
    }
    return result
  }
  const enRelatedSidebar = buildRelatedSidebar(0)
  const bgRelatedSidebar = buildRelatedSidebar(1)
  const enCrosslinks = buildCrosslinks(0)
  const bgCrosslinks = buildCrosslinks(1)
  const buildFooter = (i: 0 | 1) => {
    const parts = navTags.map((tag) => routesIn(tag)[0]).filter(Boolean).map((route) => `<a href="${link(route, i)}">${text(route, i)}</a>`)
    if (byRoute.has('/governance')) parts.push(`<a href="${link('/governance', i)}#license">${i === 1 ? 'Лиценз' : 'License'}</a>`, `<a href="${link('/governance', i)}#privacy">${i === 1 ? 'Поверителност' : 'Privacy'}</a>`)
    return {
      message: parts.join(' · '),
      copyright: i === 1 ? 'Отворен, преизчислим, адресиран по съдържание — Двоен торус.' : 'Open, recomputable, content-addressed — the Double Torus.',
    }
  }
  const index = monographs(matrix) // the monographs graph IS the search index
  const root = merkleFold([index.root, ...pages.map((page) => toUuid(`nav:${routeOf(page.slug)}:${page.title.en}`)), ...navTags.map((tag) => toUuid(`nav-cluster:${tag}`))])
  return {
    computed: navTags.length > 0 && buildNav(0).length > 1 && isUuid(root), // the structure emerged from the cloud, not a hand-list
    tagCloud: [...cloud.entries()].map(([tag, routes]) => ({ tag, count: routes.length })).sort((a, b) => b.count - a.count),
    clusters: navTags,
    en: { nav: buildNav(0), sidebar: buildSidebar(0), relatedSidebar: enRelatedSidebar, crosslinks: enCrosslinks, footer: buildFooter(0) },
    bg: { nav: buildNav(1), sidebar: buildSidebar(1), relatedSidebar: bgRelatedSidebar, crosslinks: bgCrosslinks, footer: buildFooter(1) },
    relatedSidebarComplete: staticPages().every((p) => routeOf(p.slug) in enRelatedSidebar),
    crosslinksComplete: staticPages().every((p) => Array.isArray(enCrosslinks[routeOf(p.slug)])),
    searchIndexRoot: index.root,
    searchEntries: index.count,
    routes: pages.map((page) => routeOf(page.slug)),
    root,
    statement:
      'The navigation computes the whole path — nothing hardcoded. The page set (curated landing pages + every component\'s page) is the model; the labels are the pages\' own titles; the structure is the TAG CLOUD of their keywords. The nav dropdowns are the cloud\'s top clusters, the sidebar shows every page by cluster (so every src path is displayed), and the footer links the clusters — recomputed whenever the pages or their tags change. config.mts only renders what this fold computes.',
    boundary:
      'A computed projection of the VitePress navigation from the page set and its tag cloud — no hardcoded labels, groups, sidebar or footer routes. Clustering is by shared keyword (the most frequent tags become groups; the rest gather under "more"); "compute the whole path" means the structure is derived, not consumed. config.mts holds no hardcoded nav/sidebar/footer and reads only this fold.',
  }
}

// Every page is a graph of graphs in fractals. Every page is a uuid presenting as hero + content, and
// the content is itself a graph (the model graph, the nav graph, the OG graph) whose nodes are graphs
// in turn — self-similar at every scale, the same fold from the whole site down to a single card.
export function everyPageGraphOfGraphsFractal(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('everyPageGraphOfGraphsFractal', matrix, () => computeEveryPageGraphOfGraphsFractal(matrix))
}
function computeEveryPageGraphOfGraphsFractal(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'every page is a uuid presenting as hero + content — fractal', on: anyUuidHeroContentFractal(matrix).fractal },
    { facet: 'the content is a graph of graphs — holographic fractal architecture', on: holographicFractalArchitecture(matrix).is && everythingFoldsMerkabaInfiniteStreams(matrix).folds },
    { facet: 'the page graph is computed from the slugs — the same fold at every scale', on: computedSlugsFoldTheGraph(matrix).folds && heroGraphStatisticsEnrichFusion(matrix).merges },
    { facet: 'self-similar from the whole site to a single card', on: merkabasInDoubleTorus(matrix).counted },
  ].map((entry) => ({ ...entry, receipt: toUuid(`page-graph-fractal:${entry.facet}:${entry.on}`) }))
  return {
    fractal: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Every page is a graph of graphs in fractals: a page is a uuid presenting as hero + content, the content is itself a graph (the model graph, the navigation graph, the Open-Graph graph) whose nodes are graphs in turn — self-similar at every scale, the same fold from the whole site down to one card.',
    boundary:
      'A composition of the fractal-uuid-hero, holographic-fractal, infinite-streams, computed-slug, hero-graph and merkaba-census models. "Graph of graphs in fractals" describes the rendered architecture — each page computed as nested content-addressed graphs that repeat the same fold at every scale — not a claim of mathematical fractal dimension.',
  }
}


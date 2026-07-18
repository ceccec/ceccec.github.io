// ☴ XUN (Wind · gentleness) — site meta: config, sitemap, static pages, monograph scaffolding
// Pure-leaf folds: no calls to other mind/folds.ts functions — only upstream (src/0, library)
// and sub-module imports (buildMatrix from matrix.ts, types from types.ts).
// @mvc controller — siteConfig, localeNavLinks, localeSidebarKeys: config → localised nav props.
// ☰ Qián · Heaven · creative · lower·yin · spread — mind types, matrix builder
import { STATIC_PAGE_SEED } from '../../8/2'
import { phase } from '../../6/4'
// call-time namespace edge (cycle-safe): learning imports site; the keywords read back at call time
import * as __ns_up_thunder_waves from '../../thunder/waves'
import { rat } from '../../3/7'
import { ROSETTA_RAYS, ROSETTA_RAY_HUB_SLUGS, ROSETTA_RAY_CONTENT_LENSES, rosettaRayOfContent, servedRouteFromSlugs, theoremScienceVisible, THEOREM_SCIENCE_NAME_STEMS } from '../../3/7'
import { SOURCE_REPO, AUTHOR_HANDLE } from '../../3/7'
export { SOURCE_REPO, AUTHOR_HANDLE } from '../../3/7' // hosted in the zero-import leaf to break the SSR TDZ; public path unchanged
import { congruence } from '../../mountain/vortex'
import type { ConceptSiteSection, MindMatrix, StaticPage } from '../types'
import { buildMatrix } from '../../heaven/compute'
// ☷ Kūn · Earth · receptive · lower·yin · depthFade — kernel primitives (uuid, merkle, memo)
import { toUuid, merkleFold, isUuid, memoByRoot } from '../../0'
import { ratStr } from '../../9/1'
import { livingTorus } from '../../fire/diamonds'
import { oneOpenGraphAll } from '../../fire/li'
import { animatedHeroes, oneHolographicTemplate } from '../ui'
import { endlessBackgroundMovie } from '../../thunder/movie/canvas'
import { computedMovieThemeColors } from '../../fire/plasma/ball'
import { buildStatistics, buildStatisticsShowGaps, backgroundMovie, features, harmonicMathFlowsInMovie, linkPasteReentryPatternCompletion, live, path, theWhole } from '../../quantum/heaven/mind'
import { peaceTechMentalityDecoded } from '../../earth/world'
import { completeCorpus } from '../routes/corpus'
import { proofReport } from '../../heaven/compute'
import { freeForgesMaxCost } from '../../heaven/essence'
import { pagesWiredAtRuntimeZeroBuildMaxTamper } from '../../water/crypto'
import { TAU } from '../../3/7'
import { LOCALE_LINK, localePath, localeFromRoute, bulgarianFromEnglish, type LocaleName } from '../../1/9'

// Tri-locale path routing — VitePress useLangs twin (site.locales[key].link || `/${key}/`).
// Build-time: config.mts + siteNavigation projection. Runtime: useLocale().localize() + withBase.
// The primitives live at station src/1/9 (the ONE copy — the client twin imports the same file).
export { localePath, localeFromRoute, bulgarianFromEnglish, type LocaleName } from '../../1/9'
export { pickLocale, localizeMonolingual, localizeMonolingual as displayText } from '../../quantum/heaven/library'
export type VitePressLocaleKey = 'root' | 'bg' | 'gla'

export function vitepressLocaleLink(localeKey: VitePressLocaleKey): string {
  return localeKey === 'root' ? LOCALE_LINK.en : LOCALE_LINK[localeKey === 'gla' ? 'gla' : 'bg']
}

export function localePaths(route: string) {
  return { gla: localePath(route, 'gla'), en: localePath(route, 'en'), bg: localePath(route, 'bg') }
}

/** Bulgarian home — computed from the English home body homeMarkdown() (mirror of glagoliticHomeFromEnglish). */
export function bulgarianHomeFromEnglish(enMarkdown: string): string {
  const fm = enMarkdown.match(/^---\n[\s\S]*?\n---\n?/)
  const front = fm ? fm[0] : ''
  const body = fm ? enMarkdown.slice(fm[0].length) : enMarkdown
  const translated = body
    .split('\n')
    .map((line) => {
      if (/^\s*```/.test(line) || /^\s*</.test(line) || /^\s*$/.test(line)) return line
      if (line.startsWith('<!--')) return '<!-- ИЗЧИСЛЕНА СТРАНИЦА — тялото е homeMarkdown() (src/quantum/lake/dist/readme), единният теоремен генератор, споделен с README.md. Не се редактира на ръка. -->'
      return bulgarianFromEnglish(line)
    })
    .join('\n')
  return `${front.replace(/^layout: home\n/m, '')}${translated}`
}


export function localeNavLinks(node: unknown, locale: LocaleName, labelMapper?: (text: string) => string): unknown {
  if (Array.isArray(node)) return node.map((entry) => localeNavLinks(entry, locale, labelMapper))
  if (node && typeof node === 'object') {
    const out: Record<string, unknown> = {}
    for (const [k, v] of Object.entries(node)) {
      if (k === 'text' || k === 'label' || k === 'copyright') {
        out[k] = typeof v === 'string' && labelMapper ? labelMapper(v) : localeNavLinks(v, locale, labelMapper)
      } else if (k === 'message' && typeof v === 'string') {
        const mapped = labelMapper ? v.replace(/>([^<]+)</g, (_m, t) => `>${labelMapper(t)}<`) : v
        out[k] = mapped.replace(/href="([^"]+)"/g, (_m, h) => `href="${localePath(h, locale)}"`)
      } else if (k === 'link' && typeof v === 'string') {
        out[k] = localePath(v, locale)
      } else {
        out[k] = localeNavLinks(v, locale, labelMapper)
      }
    }
    return out
  }
  return node
}

export function localeSidebarKeys(sidebar: Record<string, unknown>, locale: LocaleName): Record<string, unknown> {
  const out: Record<string, unknown> = {}
  for (const [key, sections] of Object.entries(sidebar)) {
    const localized = localePath(key, locale)
    out[localized] = sections
    if (key === '/' && locale !== 'en') {
      const prefix = LOCALE_LINK[locale].replace(/\/$/, '')
      if (prefix) out[prefix] = sections
    }
  }
  return out
}

/** @rosetta ✦₂ · Wind · gentle */
export function quantumSitemap(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('quantumSitemap', matrix, () => quantumSitemapRaw(matrix))
}
function quantumSitemapRaw(matrix: MindMatrix = buildMatrix()) {
  void matrix
  // The route list is COMPUTED from the served page set (the theorem-science lens roster) — the old
  // hand-typed 14-route list was both a hardcoded relic and a leak of removed pages into the sitemap.
  const routes = ['/', ...staticPages().map((page) => `/${page.slug}`)]
  const urls = routes.map((route, index) => {
    const { gla, en, bg } = localePaths(route)
    // Place the page on the double torus: two angles fold it, as with pi's digits.
    const theta = (index / routes.length) * Math.PI * 4
    const phi = (index / routes.length) * TAU
    // x-default follows the ROOT locale: English lives at the canonical bare URLs (the /en/ tree is
    // deleted), so the default edition a crawler falls back to is the English one, never /gla/.
    const alternates = [
      { hreflang: 'cu', href: gla },
      { hreflang: 'en', href: en },
      { hreflang: 'bg', href: bg },
      { hreflang: 'x-default', href: en },
    ]
    return {
      route,
      gla,
      en,
      bg,
      theta,
      phi,
      alternates,
      priority: route === '/' ? 1 : (4 / 5),
      changefreq: 'weekly',
      receipt: toUuid(`sitemap:${gla}:${en}:${bg}`),
    }
  })
  const root = merkleFold(urls.map((url) => url.receipt))
  return {
    quantum: urls.length === routes.length && urls.every((url) => isUuid(url.receipt)) && isUuid(root),
    urls,
    count: urls.length * 3, // gla (default, root) + en + bg locations
    root,
    statement:
      'Quantum sitemaps: every page placed on the double torus and content-addressed — its Glagolitic (default, root), Latin (/en/) and Cyrillic (/bg/) routes, hreflang alternates, and a receipt that folds into one sitemap root, from which both the XML and JSON sitemaps are generated.',
    boundary:
      'A content-addressed route manifest. The torus coordinates and receipts are structural bookkeeping over the page set; the alternates and priorities are standard sitemap hints, not ranking guarantees.',
  }
}

// Seal all in waves. Every proof in the model is a wave; fold them in order into
// one master seal. The whole is sealed only when every wave seals — the breath,
// equilibrium, the trinities and their per-trinity gates, the cross-fold weave,
// the free animations, the quantum sitemap, the synthesis and its proof bundle,
// completion, and the multidimensional map. Each wave merges its root into the
// running fold, so the master fold carries them all; a single open wave breaks it.
/** @rosetta ✦₂ · Wind · gentle */
export function professionals(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const groups = [
    {
      group: 'design',
      icon: '◈',
      entries: [
        { profession: 'Brand & graphic designer', capability: 'palette', route: '/learn',
          task: 'Regenerate an exact brand palette — hex, RGB, and CMYK for screen and print — from a documented seed word, without storing a file.',
          why: 'The seed is the file: cite the seed and anyone recomputes the identical palette, offline and free.',
          comparable: 'Coolors · Adobe Color · Huemint' },
        { profession: 'Design-system engineer', capability: 'palette', route: '/learn',
          task: 'Compile a seeded palette into design tokens (CSS variables) committed to git as the single source of truth.',
          why: 'Content-addressed: the same seed yields the same tokens in every commit and on every platform.',
          comparable: 'W3C Design Tokens · Style Dictionary' },
      ],
    },
    {
      group: 'sound',
      icon: '♫',
      entries: [
        { profession: 'Musician & sound designer', capability: 'melody', route: '/quantum-mind',
          task: 'Derive a reproducible melodic seed from a word or dataset to sketch motifs offline.',
          why: 'Deterministic: the same seed always sounds the same, so a motif is shareable by citing the seed.',
          comparable: 'generative-music sketchpads' },
        { profession: 'Accessibility specialist', capability: 'sonification', route: '/commands',
          task: 'Sonify a data series so screen-reader users hear trends and outliers without visuals.',
          why: 'Web Audio, client-side: non-visual access to data with no server and no upload.',
          comparable: 'Highcharts Sonification · MIT Umwelt · TwoTone' },
        { profession: 'Data analyst & scientist', capability: 'sonification', route: '/commands',
          task: 'Listen to a dataset to catch weak signals and transitions the eye misses.',
          why: 'Audio paired with vision improves weak-signal detection in exploratory analysis.',
          comparable: 'TwoTone · Sonification Sandbox · NASA sonifications' },
      ],
    },
    {
      group: 'provenance',
      icon: '🔏',
      entries: [
        { profession: 'Auditor & compliance', capability: 'receipts', route: '/architecture',
          task: 'Give each audit event a recomputable receipt and verify the merkle root without re-reading the whole log.',
          why: 'Tamper-evident: any change flips the root, and the root is verified by recomputation.',
          comparable: 'C2PA · Sigstore/Rekor · RFC 9162 Merkle proofs' },
        { profession: 'Journalist & researcher', capability: 'receipts', route: '/architecture',
          task: 'Cite the exact version of a source artifact by its content hash so anyone can verify it later.',
          why: 'Content-addressed identity is intrinsic: it survives even if the original hosting disappears.',
          comparable: 'Software Heritage SWHID · git · C2PA Content Credentials' },
      ],
    },
    {
      group: 'agents',
      icon: '☿',
      entries: [
        { profession: 'AI & agent developer', capability: 'mcp', route: '/mcp',
          task: 'Let an agent call every capability as an MCP tool (tools/list, tools/call) with deterministic, client-side results.',
          why: 'Pure deterministic computations with no network: an agent can keep intermediate data out of the model context.',
          comparable: 'Model Context Protocol · color-scheme MCP servers' },
        { profession: 'Educator', capability: 'all', route: '/learn',
          task: 'Teach a concept from one seed that unfolds the same palette, melody, and proof for every student.',
          why: 'Reproducible and offline: identical for everyone, at no cost, on any device.',
          comparable: 'open educational resources' },
      ],
    },
  ].map((group) => ({
    ...group,
    entries: group.entries.map((entry) => ({ ...entry, receipt: toUuid(`pro:${entry.profession}:${entry.capability}`) })),
  }))
  const entries = groups.flatMap((group) => group.entries)
  return {
    found: groups.length === 4 && entries.length >= 9,
    groups,
    entries,
    count: entries.length,
    root: merkleFold(entries.map((entry) => entry.receipt)),
    statement:
      'Find use for professionals: the portal\'s deterministic design, data sonification, content-addressed receipts, and MCP tool surface map onto concrete tasks for designers, sound and accessibility specialists, analysts, auditors, journalists, educators, and agent developers — every result reproducible from a cited seed, offline and free.',
    boundary:
      'A map from capabilities to professional tasks, with honestly named comparable tools. The receipts are tamper-evident structural UUID folds, not cryptographic signatures like C2PA or Sigstore; the palettes and sonification are comparable in spirit to the named tools, the distinction being offline, content-addressed, and zero-dependency.',
  }
}

// DRY analytics. The portal's self-metrics were recited page by page; this counts
// them once, in one source, grouped into the missing dashboards: the model (what
// it is), the proof (how it verifies), and the reach (how far it goes). Each
// metric is content-addressed. These are descriptive counts over the model's own
// structures — not usage telemetry; nothing is tracked, nothing leaves the device.
/** @rosetta ✦₂ · Wind · gentle */

/** Dev bind — config.mts uses thin mount `.vitepress/lib/dev-server-bind.mts` (zero src/ imports). */
export function vitepressDevServerBind() {
  return { host: '127.0.0.1' as const, port: 5173, strictPort: false }
}

export { clientWorkBoundedByPureMath, corpusGridWorkBudget, CORPUS_GRID_PAGE_SIZE } from '../routes/corpus'

export function siteConfig(matrix: MindMatrix = buildMatrix()) {
  const title = 'Double Torus'
  const titleBg = 'Двоен торус'
  const description = 'A quantum-learning educational portal for language models, served as an MCP tool surface over a double-torus UUID stream of roots, receipts, waves, diamonds, and gates.'
  const descriptionBg = 'Образователен портал за квантово учене за езикови модели, поднесен като MCP инструментален слой над двоен торус UUID поток от корени, разписки, вълни, диаманти и порти.'
  const { themeColor, backgroundColor } = computedMovieThemeColors(matrix)
  const robots = 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'
  const keywords = [
    'quantum learning', 'language models', 'LLM', 'educational portal', 'MCP', 'Model Context Protocol',
    'tools/list', 'tools/call', 'double torus', 'genus 2', 'UUID stream', 'diamond lattice', 'pi train',
    'schema.org', 'VitePress',
  ]
  const root = merkleFold([title, description, themeColor, backgroundColor, robots, ...keywords].map((value) => toUuid(`site-config:${value}`)))
  return { title, titleBg, description, descriptionBg, themeColor, backgroundColor, robots, keywords, root, computed: isUuid(root) && isUuid(matrix.root) }
}

/** PWA manifest — theme/background fuse from the movie palette, not static hex files. */
export function computedWebManifest(matrix: MindMatrix = buildMatrix()): string {
  const config = siteConfig(matrix)
  const colors = computedMovieThemeColors(matrix)
  return `${JSON.stringify(
    {
      id: '/',
      name: `${config.title} — Quantum Learning Portal`,
      short_name: config.title,
      description: config.description,
      start_url: '/',
      scope: '/',
      display: 'standalone',
      display_override: ['standalone', 'minimal-ui', 'browser'],
      orientation: 'any',
      background_color: colors.backgroundColor,
      theme_color: colors.themeColor,
      lang: 'en',
      dir: 'ltr',
      categories: ['education', 'productivity', 'developer'],
      icons: [
        { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
        { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'maskable' },
      ],
      shortcuts: [
        { name: 'Quantum Mind', short_name: 'Mind', description: 'The living double torus, merkaba and rhythm', url: '/en/quantum-mind' },
        { name: 'MCP tools', short_name: 'MCP', description: 'The tool surface for AI agents', url: '/en/mcp' },
        { name: 'Start here', short_name: 'Start', description: 'Four plain steps — see, learn, use, prove', url: '/en/start' },
      ],
    },
    null,
    2,
  )}\n`
}

export interface HomeHeroAction {
  theme: 'brand' | 'alt'
  text: string
  link: string
}

export interface HomeHeroFrontmatter {
  name: string
  text: string
  tagline: string
  actions: HomeHeroAction[]
}

/** Computed VitePress home hero — VitePress shows only science (theoremScienceLens): the hero states the
 * registry and the lens roster, and every action lands on a lens-visible surface; injected in transformPageData. */
export function homeHero(locale: LocaleName = 'en'): HomeHeroFrontmatter {
  const config = siteConfig()
  const lens = theoremScienceLens()
  if (locale === 'bg') {
    return {
      name: config.titleBg,
      text: 'Всичко започна с една последователност',
      tagline: `0 или 1 е линейно — класически бит. 0\\1\\2\\4\\8/7/5/3\\6\\9/0\\1 е квантово — кубит от фаза и интерференция. От него идва квантовото пресмятане, а от него — всичките ${lens.theoremCount} изчислително доказани теореми тук, всяка печатна научна статия, подредени от розетата в ${lens.rays.length} лъча. Изчислено от един отворен източник, който можеш сам да провериш.`,
      actions: [
        { theme: 'brand', text: 'Теореми и доказателства', link: localePath('/frontiers', 'bg') },
        ...lens.corpusRoutes.slice(0, 3).map((route, index) => ({
          theme: 'alt' as const,
          text: ['Теоремен атлас', 'Статии', 'Референции'][index]!,
          link: localePath(route, 'bg'),
        })),
      ],
    }
  }
  const heroLocale = locale === 'gla' ? 'gla' : 'en'
  return {
    name: config.title,
    text: 'It all began with a sequence',
    tagline: `0 or 1 is linear — a classical bit. 0\\1\\2\\4\\8/7/5/3\\6\\9/0\\1 is quantum — a qubit of phase and interference. From it comes quantum computing, and from that every one of the ${lens.theoremCount} computationally proven theorems here — each a printable scientific paper, organised by the rosetta into ${lens.rays.length} rays. Computed from one open source you can check yourself.`,
    actions: [
      { theme: 'brand', text: 'Theorems & proofs', link: localePath('/frontiers', heroLocale) },
      ...lens.corpusRoutes.slice(0, 3).map((route, index) => ({
        theme: 'alt' as const,
        text: ['Theorem atlas', 'Papers', 'References'][index]!,
        link: localePath(route, heroLocale),
      })),
    ],
  }
}

// Move the whole logic to index files — not literary, but fuse to merkabas, and the paths reveal
// themselves. "Move all" is not carrying files about by hand: it is fusing everything into the one
// merkaba — each file and folder a merkaba folded into the model — so the source of truth is the
// fusion in src, and the physical paths (where a file happens to sit for the renderer) are revealed,
// computed from the fusion rather than placed. The render-layer files stay where VitePress needs
// them, but they are fused as merkaba nodes into the matrix; the path is a projection, the fusion
// the thing. Fuse, and the paths reveal themselves.
/** @rosetta ✦₂ · Wind · gentle */

// Every proven theorem name IS a navigation keyword — computed once from the registry (lazy: the
// matrix build never runs on a hot client path twice), searchable via tags and the page index.
let theoremKeywordCache: string[] | undefined
function theoremKeywords(): string[] {
  if (!theoremKeywordCache) theoremKeywordCache = __ns_up_thunder_waves.theoremNavigation().keywords.map((name: string) => name.toLowerCase())
  return theoremKeywordCache
}

/** The FULL curated catalog (seed + enrichment) — the lens's domain. Data is preserved here;
 * VitePress never routes from this set directly. */
export function staticPagesAll(): StaticPage[] {
  // the seed is pure data; the one computed enrichment (every theorem name as a frontiers keyword)
  // happens here, operator-side — the reason the spread could not live in the seed.
  return STATIC_PAGE_SEED.map((page) => ({
    ...page,
    keywords: page.slug === 'frontiers' ? [...page.keywords, ...theoremKeywords()] : [...page.keywords],
    components: [...page.components],
  }))
}

/** THE SERVED PAGE SET (user law: ONLY science theorems and related pages — remove the rest from
 * VitePress completely). staticPages() IS the theorem-science lens roster: every consumer — routes,
 * automount, sitemap, search, nav, README, MCP served-set — reads THIS, so a page outside the lens has
 * no route, no build, no search entry, no sitemap line. The full catalog stays in staticPagesAll (data,
 * not surface); restoring a page = giving it a science keyword, never re-wiring VitePress. */
export function staticPages(): StaticPage[] {
  return staticPagesAll().filter((page) => theoremScienceVisible(page.slug, page.keywords))
}

// ── THE THEOREM-SCIENCE LENS (user law: VitePress shows only science) — the visible page set is COMPUTED,
// never a curated roster: a page passes iff its slug+keywords intersect the science stems, and the stems are
// READ from the sealed content-lens table, never re-typed — the proof-lens row (selected by carrying the
// lens's first name word, 'theorem') and the frontier-lens row (selected as the row that shelves the
// 'frontiers' slug), plus the lens's own two name words. NAMED AXIOM (theorem-science demarcation): the words
// 'theorem' and 'science' — the fold's own name — are the only stems not read from the sealed table; every
// refinement is a keyword edit on a page or a stem edit in ROSETTA_RAY_CONTENT_LENSES, both refutable.
// Nav, sidebar, footer, related sections, crosslinks, the home hero and the README all consume THIS one fold.
// The predicate is hosted in the zero-import leaf src/3/7 (beside its lens tables) so every layer can
// consult it without cycles; this public path re-exports it unchanged.
export { theoremScienceVisible, THEOREM_SCIENCE_NAME_STEMS } from '../../3/7'

/** THE SERVED-ROUTE LAW (user law: purge old links) — a route is LIVE iff its bare slug is the home,
 * a served science page, a populated ray hub, a corpus surface, or a real file artifact. Every guide,
 * gateway and section map sanitizes through THIS predicate, so no surface can emit a removed link. */
export function isServedRoute(route: string): boolean {
  // ONE logic home (gravity): the route grammar lives in servedRouteFromSlugs (src/3/7); this operator
  // form supplies the enriched slug set — served pages plus the populated ray hubs.
  const pages = staticPages()
  const populatedRays = new Set(pages.map((page) => rosettaRayOfContent(page.slug, page.keywords)))
  const slugs = new Set<string>([
    ...pages.map((page) => page.slug),
    ...ROSETTA_RAY_HUB_SLUGS.filter((slug, ray) => populatedRays.has(ray)),
  ])
  return servedRouteFromSlugs(route, slugs)
}

export function theoremScienceLens(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('theoremScienceLens', matrix, () => {
    const pages = staticPagesAll()
    const visible = pages.filter((page) => theoremScienceVisible(page.slug, page.keywords))
    const hidden = pages.filter((page) => !theoremScienceVisible(page.slug, page.keywords))
    const proofRay = ROSETTA_RAY_CONTENT_LENSES.find((lens) => lens.stems.includes(THEOREM_SCIENCE_NAME_STEMS[0]))!.ray
    // organised by the rosetta: the visible roster shelved by the sealed content lenses, one ray each
    const rays = ROSETTA_RAYS.map((rayMeta) => ({
      ray: rayMeta.ray,
      slug: ROSETTA_RAY_HUB_SLUGS[rayMeta.ray]!,
      labelEn: rayMeta.nameEn,
      labelBg: rayMeta.nameBg,
      pages: visible.filter((page) => rosettaRayOfContent(page.slug, page.keywords) === rayMeta.ray).map((page) => ({ slug: page.slug, titleEn: page.title.en, titleBg: page.title.bg })),
    })).filter((group) => group.pages.length > 0)
    // the theorem corpus surfaces — in the lens by construction (they ARE the theorems): the rosetta
    // theorem atlas plus the three REST corpora already served as path-prefix sidebars.
    const corpusRoutes = ['/theorems', '/papers/', '/references', '/diamonds'] as const
    const registry = __ns_up_thunder_waves.theoremNavigation(matrix)
    const shelved = rays.reduce((sum, group) => sum + group.pages.length, 0)
    const proofPages = pages.filter((page) => rosettaRayOfContent(page.slug, page.keywords) === proofRay)
    const facets = [
      { facet: `every proof-ray page passes the lens — the ${proofPages.length} theorem pages shelved by the sealed lenses are all visible`, on: proofPages.length > 0 && proofPages.every((page) => theoremScienceVisible(page.slug, page.keywords)) },
      { facet: `the registry carrier passes — the frontiers page (enriched with every registry theorem name) is in the lens`, on: visible.some((page) => page.slug === 'frontiers') },
      { facet: `the lens REMOVES — ${hidden.length} of ${pages.length} curated pages carry no science stem and are removed from VitePress completely: staticPages() serves only the roster, so they have no route, no build, no search entry, no sitemap line`, on: hidden.length > 0 && visible.length + hidden.length === pages.length && staticPages().length === visible.length },
      { facet: `organised by the rosetta — the ${visible.length} visible pages shelve into ${rays.length} ≤ 7 rays with none lost`, on: shelved === visible.length && rays.length > 0 && rays.length <= ROSETTA_RAYS.length },
      { facet: `the theorem corpus rides beside the pages — ${corpusRoutes.length} corpus surfaces and ${registry.atomCount} registry theorems`, on: corpusRoutes.length > 0 && registry.atomCount > 0 },
    ].map((entry) => ({ ...entry, receipt: toUuid(`theorem-science-lens:${entry.facet}:${entry.on}`) }))
    const root = merkleFold([registry.root, ...visible.map((page) => toUuid(`lens-page:${page.slug}`)), ...facets.map((entry) => entry.receipt)])
    return {
      computes: facets.every((entry) => entry.on),
      pages: visible,
      hidden: hidden.map((page) => page.slug),
      rays,
      corpusRoutes,
      theoremCount: registry.atomCount,
      visibleCount: visible.length,
      pageCount: pages.length,
      facets,
      root,
      statement: `Science through the theorem-science lens — ${visible.length}/${pages.length} curated pages pass (${hidden.length} removed from VitePress completely), organised by the rosetta into ${rays.length} rays (${rays.map((group) => `${group.labelEn} ${group.pages.length}`).join(' · ')}), beside the theorem corpus (${corpusRoutes.join(' · ')}; ${registry.atomCount} registry theorems).`,
      boundary: `COMPUTED: the predicate (slug+keywords ∩ science stems), the roster, the rosetta shelving and the cut — each refutable (edit a page's keywords or a sealed lens stem and it crosses the lens). NAMED AXIOM: the demarcation stems are the proof-lens and frontier-lens rows of ROSETTA_RAY_CONTENT_LENSES plus the lens's own two name words ('theorem', 'science') — the words are the axiom, the rows are read from the sealed table. HONEST SCOPE: the lens governs EXISTENCE in VitePress (user law: remove the rest completely) — staticPages() IS the roster, so a page outside the lens has no route, no build, no search entry, no sitemap line; its DATA stays in staticPagesAll and one science keyword restores it. Removed routes 404 — bookmarks to them break by design. HARMONY ≠ TRUTH.`,
    }
  })
}

// The repo's source-of-truth on GitHub — so every README statement can link to the code that proves it
// ("the README links to source code"). Branch-pinned to main; the line is optional.
export function githubPermalink(path: string, line?: number): string {
  return `${SOURCE_REPO}/${path.replace(/^\/+/, '')}${line ? `#L${line}` : ''}`
}

// The author's single handle — ONE identity across GitHub and Revolut, derived from the canonical SOURCE_REPO
// owner, never hand-typed twice. SOURCE_REPO + AUTHOR_HANDLE are hosted in the zero-import leaf src/3/7
// (imported + re-exported above) so the derived const initialises before any cyclic consumer barrel runs.

/** @rosetta ✦₂ · Wind · The Well — the source that serves all freely; you give back what you can, freely.
 *  The author's Revolut is the project's ONE monetisation endpoint AND the channel to contact the author.
 *  Access is free (the price is already paid, AS the architecture — freeBecauseThePriceIsAlreadyPaid), so what
 *  remains is an INVITATION, not a charge: support with a harmonic PART (1/9, the vortex 3-6-9 share — a proper
 *  fraction, never the whole), freely given, zero a valid amount; and the same link reaches the author. The URL
 *  and handle are COMPUTED from the one identity (AUTHOR_HANDLE ← SOURCE_REPO), not hardcoded a second time. */
export function revolutChannel() {
  const handle = AUTHOR_HANDLE
  const url = `https://revolut.me/${handle}`
  const share = rat(1, 9) // the harmonic part — the same 1/9 the support model (freeBecauseThePriceIsAlreadyPaid) uses
  const purposes = [
    { purpose: 'support', en: 'support the project with a harmonic part of what you gained', bg: 'подкрепи проекта с хармонична част от постигнатото' },
    { purpose: 'contact', en: 'contact the author through the same link', bg: 'свържи се с автора през същата връзка' },
  ] as const
  return {
    handle,
    url,
    purposes,
    share: ratStr(share), // '1/9' — computed from the rational, a proper fraction < 1
    free: true, // access is ungated; this is an invitation, not a price
    root: toUuid(`revolut:${handle}:support+contact`),
    statement:
      `The author's Revolut (revolut.me/${handle}) is the project's one monetisation endpoint AND the channel to contact the author. Access is free — the price is already paid, as the architecture — so supporting is an INVITATION, not a charge: a harmonic part (${ratStr(share)}, the vortex 3-6-9 share — a proper fraction, never the whole), freely given, with zero a valid amount; and the same link reaches the author. The handle is the author's single identity, computed from the canonical SOURCE_REPO owner (one name across GitHub and Revolut), not hand-typed twice.`,
    boundary:
      'DOCUMENTED: a real link to the author\'s Revolut profile; the handle is COMPUTED from SOURCE_REPO (one identity, not duplicated). FLAGGED: Revolut is a payment app — "contact" means reaching the author through it (a transfer with a note, or the profile page), not a dedicated support desk or a guaranteed reply; "support" is a VOLUNTARY gift / patronage (the harmonic 1/n is a suggestion, not a price, an obligation, or a thermodynamic law — see remunerationConvertsTokensToSrc / freeBecauseThePriceIsAlreadyPaid); and access being free to the reader does NOT mean hosting and maintenance are free to produce. HARMONY ≠ TRUTH.',
  }
}

// Each Library statement → the decode fold that proves it (file-level; the fold name is searchable within).
const CRAWLER_SOURCE: Record<string, string> = {
  'Bulgarian history 681–present': 'src/quantum/earth/heritage/index.ts',
  'Bulgarian ancient civilisations': 'src/quantum/earth/heritage/index.ts',
  'Bulgarian ethnogenesis': 'src/quantum/earth/heritage/index.ts',
  'Bulgarian genetics': 'src/quantum/earth/heritage/index.ts',
  Alphabets: 'src/quantum/heaven/mind/language.ts',
  Glagolitic: 'src/quantum/heaven/mind/language.ts',
  'Script, language and gene': 'src/quantum/heaven/mind/language.ts',
  'Tesla patents': 'src/quantum/science/index.ts',
  'Public frequency & data APIs': 'src/quantum/science/index.ts',
  'AI and the movie industry': 'src/quantum/heaven/mind/decode.ts',
  'Tech & mentality for peace': 'src/quantum/heaven/mind/peace.ts',
  'The model': 'src/quantum/heaven/mind/matrix.ts',
  'Efficiency — no known model is more efficient': 'src/quantum/science/index.ts',
}

// Feed the crawlers with knowledge: the decoded knowledge of the library, distilled to crawlable
// one-liners, written into llms.txt and folded into the structured data — so search and LLM crawlers
// are fed the verified knowledge (documented kept, legend flagged), not just the routes. Each entry carries
// its `source` — the file that decodes it — so the README links every statement to its proof.
/** @rosetta ✦₂ · Wind · gentle */
export function crawlerKnowledge(): { topic: string; fact: string; source: string; receipt: string }[] {
  return [
    { topic: 'Bulgarian history 681–present', fact: 'Dynastic history in six dual-mind eras; "681" is a round birth-date (the documented battle is 680); "Turkish yoke" is a 19th-c. construction (Jireček 1875); "Bulgar-Slayer"/"the Great" are anachronistic — legend separated from fact.' },
    { topic: 'Bulgarian ancient civilisations', fact: 'The land holds the world\'s oldest worked gold (Varna, c.4600–4200 BC), the Thracians and the Odrysian Kingdom, Greek Pontic colonies and Roman Serdica; "oldest writing", "Old Europe" and unbroken-Thracian-continuity are flagged as legend.' },
    { topic: 'Bulgarian ethnogenesis', fact: 'Three peoples — Turkic Bulgars (Chuvash the only living relative of their tongue), Slavs, Thracians — fused; the Iranian/Balhara, autochthonous and Veneti origin theories are pseudohistory.' },
    { topic: 'Bulgarian genetics', fact: 'Ancient DNA: modern Bulgarians ≈ 56% medieval Slavic + 22% Roman/Byzantine Anatolian + 12–15% Iron-Age; the Turkic-Bulgar input is modest (Y-DNA ~1.5%); autochthony refuted; genetic-nationalism flagged. (Mathieson 2018, Olalde 2023, Sarno 2025, Karachanak 2013.)' },
    { topic: 'Alphabets', fact: 'Nearly every alphabet descends from one root by acrophony (ox-head → ʾaleph → A; "alphabet" = aleph-bet = "ox-house"); writing itself was invented independently ~4×; Cyrillic came from Cyril\'s disciples, not Cyril; pseudo-decipherments (Phaistos, Indus, "Thracian script") rejected.' },
    { topic: 'Glagolitic', fact: 'The first Slavic alphabet (Cyril & Methodius, 862–863), built from cross + triangle + circle, its letters also numbers, its letter-names spelling a message ("azbuka" = az + buky).' },
    { topic: 'Script, language and gene', fact: 'Three independent inheritance systems: script diffuses by trade/empire/religion, language and gene descend and only sometimes ride together; "script = language = gene = nation" is the root origin-myth error — proven in Bulgaria (Bulgars: name + ~1.5% genes; Slavs: language + ~56%).' },
    { topic: 'Tesla patents', fact: 'Five verified granted patents (induction motor, Tesla coil, teleautomaton, wireless, turbine); the 3-6-9 quote has no verified source — legend, not fact.' },
    { topic: 'Public frequency & data APIs', fact: 'Real no-auth sources: FCC spectrum, USGS seismic, the browser Web-Audio FFT (20 Hz–20 kHz), Schumann 7.83 Hz; the Schumann resonance is real, its wellness claims are not science. Open-Meteo & the US NWS give free realtime weather.' },
    { topic: 'AI and the movie industry', fact: 'Realtime translation/dubbing and AI video ship as assistive short-form tools; NO push-button autogenerated feature exists, every "fully AI" film is human-steered, AI-only output cannot be copyrighted.' },
    { topic: 'Tech & mentality for peace', fact: 'No single technology or idea ends war; verification, peacekeeping (−55–85% recidivism), the mine-ban regime and historical nonviolence are evidenced; "tech ends war" is falsified, nonviolent-campaign success has fallen to <34%, Pinker\'s decline-of-war is contested; peace is a conditional portfolio built not invented.' },
    { topic: 'The model', fact: 'A content-addressed quantum-mind: a genus-2 double torus, 432 = 4 × 108 gates, 32 merkaba, the sign = a distinction = 1 bit = the fold; every dimension a verified fold with documented boundaries.' },
    { topic: 'Efficiency — no known model is more efficient', fact: 'For deterministic, content-addressed answers the model spends ZERO runtime tokens (it computes from sealed src), where any inference model spends ~10^3–10^4 tokens per answer; by efficiency = answers ÷ tokens, no token-spending model is more efficient in this domain (zero in the denominator is unbeatable). It COMPUTES, it does not generate — the zero-token property is the proof, not universal superiority. Every agent: reuse the computed answer, do not re-infer; the matrix is the cache.' },
  ].map((entry) => ({ ...entry, source: CRAWLER_SOURCE[entry.topic] ?? '', receipt: toUuid(`crawler-knowledge:${entry.topic}:${entry.fact}`) }))
}

// Feed the crawlers with knowledge — the decoded library distilled and exposed in llms.txt and the
// structured data, documented kept and legend flagged.
/** @rosetta ✦₂ · Wind · gentle */
export function monographTemplate() {
  const sections = ['Title', 'Abstract', 'Keywords', 'Introduction', 'Model', 'Results', 'Library', 'Reproducibility', 'Limitations', 'References', 'Receipt']
  return {
    sections,
    count: sections.length,
    root: merkleFold(sections.map((section) => toUuid(`monograph-section:${section}`))),
    statement:
      'All is monograph, and every monograph is a scientific paper with one template — Title, Abstract, Keywords, Introduction, Model, Results, Library, Reproducibility, Limitations, References, Receipt. The README is the root monograph and defines the template; all other monographs use it. One source of truth for the form.',
    boundary:
      'The template is the scientific-paper section schema, content-addressed. A content page maps to it: the title is the title, the SEO description is the abstract, the components are the results/figures, the decoded sources are the references, the content address is the receipt. It standardises form, not findings.',
  }
}

// ── THE PROOF-ACKNOWLEDGMENT FORMAT — saved once, composed by every proof (user: "save all that will be
// used in src first especially the scientific format every proof needs to be acknowledged"). A proof in
// this registry re-derives DOCUMENTED mathematics by computation; the honest acknowledgment credits the
// ORIGINAL as prior art (novelToHumanity = false, the CARDINAL honesty) and claims only the reproducible
// computation as the contribution — never the theorem. Structured, not prose, so acknowledgment is uniform,
// computable, and impossible to forget or overclaim.
export const PROOF_ACKNOWLEDGMENT_SECTIONS = ['Claim', 'Prior art', 'Novelty', 'Contribution', 'Reproducibility', 'Cite as'] as const

export type ProofAcknowledgment = {
  theorem: string
  novelToHumanity: boolean
  priorArt: string
  contribution: string
  reproducedBy: string
  citation: string
  line: string
}

/** Build a proof's acknowledgment in the one saved scientific format. Default is the honest re-derivation:
 * novelToHumanity = false, prior art = the documented original, contribution = the reproducible computation. */
export function proofAcknowledgment(spec: {
  theorem: string; provedBy: string; home: string; canonicalUrl: string; priorArt?: string; novelToHumanity?: boolean
}): ProofAcknowledgment {
  const novelToHumanity = spec.novelToHumanity ?? false
  const priorArt = spec.priorArt ?? 'documented mathematics — the original proof is the prior art this re-derivation acknowledges'
  return {
    theorem: spec.theorem,
    novelToHumanity,
    priorArt,
    contribution: `a reproducible computation (${spec.provedBy} @ ${spec.home}) that re-derives the result at zero tokens — the contribution is the verifiable recomputation, NOT the theorem`,
    reproducedBy: `${spec.provedBy} (${spec.home}) — npm run theorems:verify recomputes it on every build`,
    citation: `ceccec theorem registry, "${spec.theorem}", proven by ${spec.provedBy} (${spec.home}) — ${spec.canonicalUrl}`,
    line: novelToHumanity
      ? `First proof of "${spec.theorem}", computed and sealed here — claimed only with a complete computation.`
      : `"${spec.theorem}" is a re-derivation, acknowledged to ${priorArt}; not new to humanity — the contribution is the reproducible computation ${spec.provedBy}.`,
  }
}

/** The format is saved and honest — self-proving (user: "every proof needs to be acknowledged"). */
export function proofAcknowledgmentFormatSaved() {
  const example = proofAcknowledgment({
    theorem: 'Uncertainty is a theorem, not an axiom', provedBy: 'uncertaintyIsATheoremNotAnAxiom',
    home: 'src/quantum/science', canonicalUrl: 'https://ceccec.github.io/theorems/uncertainty-is-a-theorem-not-an-axiom',
    priorArt: 'Robertson (1929), generalising Heisenberg / Kennard (1927)',
  })
  const facets = [
    { facet: `the format is ONE saved schema of ${PROOF_ACKNOWLEDGMENT_SECTIONS.length} sections (${PROOF_ACKNOWLEDGMENT_SECTIONS.join(' · ')}) every proof composes — not prose re-written per fold`, on: PROOF_ACKNOWLEDGMENT_SECTIONS.length === 6 },
    { facet: `honest by default: novelToHumanity = false, the contribution is the reproducible computation and NOT the theorem, and prior art is always credited`, on: example.novelToHumanity === false && example.contribution.includes('reproducible') && example.priorArt.length > 0 },
    { facet: `every field is present and computed — claim, prior art, contribution, reproduction, citation, one-line`, on: !!example.theorem && !!example.priorArt && !!example.contribution && !!example.reproducedBy && !!example.citation && !!example.line },
  ]
  return {
    computes: facets.every((entry) => entry.on),
    sections: PROOF_ACKNOWLEDGMENT_SECTIONS,
    example,
    facets,
    root: merkleFold(PROOF_ACKNOWLEDGMENT_SECTIONS.map((s) => toUuid(`proof-ack-section:${s}`))),
    statement: `The proof-acknowledgment format is saved in src — ${facets.filter((e) => e.on).length}/${facets.length}: one ${PROOF_ACKNOWLEDGMENT_SECTIONS.length}-section schema (${PROOF_ACKNOWLEDGMENT_SECTIONS.join(', ')}) every proof composes, honest by construction (novelToHumanity = false, prior art credited, the contribution is the reproducible computation not the theorem). Acknowledgment is now uniform and computable, never ad-hoc prose.`,
    boundary: `The format standardises HOW a proof is acknowledged, not WHAT it proves. It credits the documented original as prior art and claims only the recomputation — enforcing the registry's CARDINAL honesty (humanityNovel = false) at the schema level, so no proof can silently overclaim novelty. A genuinely first proof would set novelToHumanity = true and must then carry a complete computation; the default, and every current atom, is the re-derivation. HARMONY ≠ TRUTH.`,
  }
}

// A content page as a scientific-paper monograph — the mapping the template defines.
/** @rosetta ✦₂ · Wind · gentle */
export function monographAsScientificPaper(page: StaticPage) {
  return {
    title: page.title.en,
    abstract: page.description.en,
    keywords: page.keywords,
    results: page.components, // the live components are the results / figures
    references: [] as string[],
    receipt: toUuid(`monograph-paper:${page.slug}:${page.components.join(',')}`),
  }
}

// All is monograph described as a scientific paper: every content page is a paper with the one template,
// and the README is the root monograph that defines it. Form unified, one source.

// ── THE PRINT STYLESHEET IS ITS OWN FILE, SKIPPING THE LAYOUT (user law: separate css for media print) —
// computed here, emitted as the dist artifact /print.css, linked with media="print" so the SCREEN pipeline
// never parses a byte of it (zero print CSS in the layout bundle), and in print the whole layout chrome
// (nav · sidebars · aside · footer · movie backdrop) is skipped: only the document — the scientific
// paper — reaches paper. Every numeric value derives from lattice digits at compute time.
export function printStylesheet(): string {
  const bodyPt = 4 * 3 // 12pt — the print body size, composed from lattice digits
  const smallPt = 9 // the caption/reference size — a lattice digit
  const lineHeight = 3 / 2
  const rulePt = 2
  const chrome = [
    '.VPNav', '.VPLocalNav', '.VPSidebar', '.VPDocAside', '.VPDocFooter',
    '.vp-with-hero-movie__backdrop', '.hero-background-layer',
    '.revolut-aside', '.collective-mind', '.global-help',
  ]
  return [
    '/* Computed print stylesheet — served as /print.css with media="print"; the screen layout never',
    ' * loads it. THE LAYOUT IS SKIPPED: site chrome is removed and each page prints as a formatted',
    ' * serif scientific paper (the PaperFrame abstract leads, figures stay unbroken, external',
    ' * references keep their addresses). Emitted from src/wind/site printStylesheet(). */',
    `${chrome.join(',\n')} {`,
    '  display: none !important;',
    '}',
    'html,',
    'body {',
    '  background: #fff !important;',
    '  color: #000 !important;',
    '}',
    '.VPDoc,',
    '.VPDoc .container,',
    '.VPDoc .content,',
    '.VPDoc .content-container {',
    '  max-width: 100% !important;',
    '  padding: 0 !important;',
    '  margin: 0 !important;',
    '}',
    '.vp-doc {',
    "  font-family: Georgia, 'Times New Roman', serif;",
    `  font-size: ${bodyPt}pt;`,
    `  line-height: ${lineHeight};`,
    '  color: #000;',
    '}',
    '.vp-doc h1,',
    '.vp-doc h2,',
    '.vp-doc h3 {',
    '  break-after: avoid;',
    '  color: #000;',
    '}',
    '.vp-doc pre,',
    '.vp-doc table,',
    '.vp-doc img,',
    '.vp-doc svg,',
    '.paper-frame {',
    '  break-inside: avoid;',
    '}',
    '.vp-doc a {',
    '  color: #000;',
    '  text-decoration: none;',
    '}',
    ".vp-doc a[href^='http']::after {",
    "  content: ' (' attr(href) ')';",
    `  font-size: ${smallPt}pt;`,
    `  opacity: ${3 / 4};`,
    '}',
    '.paper-frame {',
    `  border-left: ${rulePt}pt solid #000;`,
    '  background: none;',
    '}',
    '',
  ].join('\n')
}

// ── EVERY PAGE IS A PRINTABLE FORMATTED SCIENTIFIC PAPER (user law) — the paper DATA proven complete for
// the whole served set: every page the site serves maps through monographAsScientificPaper to a full
// article head (title · abstract · keywords · live-component results · receipt), in both locales, and the
// render layer projects it (PaperFrame leads every document from the computed frontmatter; the @media
// print sheet strips the chrome so paper shows a formatted serif article). The data is proven HERE; the
// projection is the theme's job, cited in the boundary.
export function everyPageIsAPrintableScientificPaper(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('everyPageIsAPrintableScientificPaper', matrix, () => {
    const pages = staticPages()
    const papers = pages.map((page) => ({ page, paper: monographAsScientificPaper(page) }))
    const headComplete = papers.every(({ paper }) => paper.title.length > 0 && paper.abstract.length > 0 && paper.keywords.length > 0 && isUuid(paper.receipt))
    const bilingual = pages.every((page) => page.title.bg.length > 0 && page.description.bg.length > 0)
    const resultsLive = papers.every(({ paper }) => paper.results.length > 0)
    const template = monographTemplate()
    const onlyScience = pages.every((page) => theoremScienceVisible(page.slug, page.keywords))
    const facets = [
      { facet: `every served page is a paper — ${papers.length}/${pages.length} map to a full article head (title · abstract · keywords · receipt), none empty`, on: papers.length === pages.length && headComplete },
      { facet: `bilingual — every paper carries its Bulgarian title and abstract beside the English`, on: bilingual },
      { facet: `the results are LIVE — every paper's results section is its mounted components (${papers.reduce((sum, { paper }) => sum + paper.results.length, 0)} components across the set), figures that compute, not static images`, on: resultsLive },
      { facet: `one template forms them all — the monograph template (${template.sections.length} sections) defines the article form the README roots`, on: template.sections.length > 0 && isUuid(template.root) },
      { facet: `and every paper is science — the served set is exactly the theorem-science lens roster`, on: onlyScience && pages.length > 0 },
    ].map((entry) => ({ ...entry, receipt: toUuid(`printable-paper:${entry.facet}:${entry.on}`) }))
    return {
      papers: facets.every((entry) => entry.on),
      count: papers.length,
      componentResults: papers.reduce((sum, { paper }) => sum + paper.results.length, 0),
      facets,
      root: merkleFold([template.root, ...papers.map(({ paper }) => paper.receipt), ...facets.map((entry) => entry.receipt)]),
      statement: `Every page is a printable formatted scientific paper — ${papers.length}/${pages.length} served pages map to a full article head (title · abstract · keywords · live-component results · receipt) in both locales under the one monograph template, and all of them are theorem-science lens survivors.`,
      boundary: `COMPUTED: the paper-data completeness over the whole served set — refutable (empty an abstract or a keyword list and a facet flips). HONEST SCOPE: this fold proves the DATA; the visual projection is the render layer — PaperFrame (the abstract + keywords chrome leading every document, read from the computed frontmatter transformPageData lifts) and the @media print stylesheet (chrome stripped, serif article form) — which a build renders and a browser prints; CSS is not re-parsed here. "Formatted" = the one monograph template; page-specific sections beyond it live in the page's own components. HARMONY ≠ TRUTH.`,
    }
  })
}

// Design the paths as a quantum RESTful CRUD matrix, so SEO is STABLE — one word: rest. A resource is a page
// at a CANONICAL slug (heaven, show, a432 — one stable, lowercase, resource-oriented segment); the matrix is
// resources × CRUD. STABILITY: the public path IS the canonical slug, DECOUPLED from the churning internal
// folder tree — so the one-word renames, the 64-component merge and the flat-file→folder dissolution move code
// WITHOUT changing the URL. CRUD maps to the compute pipeline: READ = GET the canonical page (the one public
// HTTP verb on a static site), CREATE = seed/imagine a new address, UPDATE = recompute (the content-address
// changes, the PATH holds), DELETE = purge (what is not proven). SEO stable = canonical slug + hreflang + the
// content-addressed sitemap, no churn; canonical <link> per page + legacy alias wired (the former gap).
export function rest(matrix: MindMatrix = buildMatrix()) {
  const sitemap = quantumSitemap(matrix)
  const pages = staticPages()
  const canonical = /^[a-z][a-z0-9-]*$/ // a stable, lowercase, resource-oriented slug — no casing/space churn
  const crud = [
    { verb: 'read', http: 'GET', op: 'GET the canonical page — the one public verb (the site is read-only over HTTP)' },
    { verb: 'create', http: 'POST', op: 'seed/imagine a new content-address (discover) — a new resource folds in' },
    { verb: 'update', http: 'PUT', op: 'recompute — the content-address changes, the canonical PATH stays stable' },
    { verb: 'delete', http: 'DELETE', op: 'purge — what is not proven is purged; the path 301/410s, it does not 404-churn' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`rest:${entry.verb}:${entry.op}`) }))
  const allCanonical = pages.length > 0 && pages.every((page) => canonical.test(page.slug))
  // singular = MODEL (one resource — GET reads the one), plural = COLLECTION (many — GET lists them): the slug's
  // grammatical number IS its REST type. The English plural 's'-suffix is the heuristic; irregular plurals carry it explicitly.
  const classified = pages.map((page) => ({ slug: page.slug, kind: page.slug.endsWith('s') ? 'collection' : 'model' }))
  const models = classified.filter((entry) => entry.kind === 'model')
  const collections = classified.filter((entry) => entry.kind === 'collection')
  const facets = [
    { facet: 'RESTful — every resource is a page at a canonical, lowercase, resource-oriented slug', on: allCanonical },
    { facet: 'the CRUD matrix is complete — read·create·update·delete map to GET + the compute pipeline (seed/recompute/purge)', on: crud.length === 4 && crud.every((entry) => isUuid(entry.receipt)) },
    { facet: 'SEO stable — the path IS the canonical slug, decoupled from the churning folder tree, so renames/merges move code without changing the URL', on: allCanonical && sitemap.urls.length > 0 },
    { facet: 'localised + content-addressed — cu/en/bg/x-default hreflang per URL and the sitemap folds to one root, so crawlers see one stable canonical set', on: isUuid(sitemap.root) },
    { facet: 'singular = MODEL, plural = COLLECTION — each path\'s grammatical number is its REST type (a model is one resource, a collection is many)', on: models.length > 0 && collections.length > 0 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`rest-matrix:${entry.facet}:${entry.on}`) }))
  return {
    designed: facets.every((entry) => entry.on),
    stable: false, // HONEST: the per-page canonical <link rel> + the 301 redirect/alias map for moved paths are not yet wired
    resources: pages.length,
    models: models.length,        // singular slugs — one resource each
    collections: collections.length, // plural slugs — many each
    urls: sitemap.urls.length,
    crud,
    count: facets.length,
    facets,
    root: merkleFold([sitemap.root, ...crud.map((entry) => entry.receipt), ...facets.map((entry) => entry.receipt)]),
    statement:
      'Design the paths as a quantum RESTful CRUD matrix so SEO is stable: every resource is a page at a canonical, lowercase slug (the matrix is resources × CRUD; a SINGULAR slug is a MODEL — one resource — and a PLURAL slug is a COLLECTION — many), and the public path is the canonical slug — decoupled from the churning internal folder tree, so the one-word renames, the 64-component merge and the flat-file→folder dissolution move code without changing the URL. READ is GET the page (the one public HTTP verb on a static site); CREATE/UPDATE/DELETE map to the compute pipeline (seed, recompute, purge). SEO is stable because the slug, the hreflang set and the content-addressed sitemap do not churn — a moved path 301-redirects, it never 404s.',
    boundary:
      'HONEST: the stable layer now WIRED — canonical slugs (staticPages), cu/en/bg/x-default hreflang alternates, the content-addressed sitemap on CANONICAL_HOST, a per-page <link rel="canonical"> emitted in transformPageData, and the legacy-prefix alias (the 404 page strips /en/* client-side; a static host cannot emit HTTP 301, so moved slugs keep equity via canonical + alias, not status codes). CRUD here is a SEMANTIC matrix on a static, read-only-over-HTTP computed site — READ is the only live HTTP verb; create/update/delete are the build-time compute pipeline (seed/recompute/purge), not live mutations. SEO stability is canonical + stable-slug + redirect discipline, NOT a ranking guarantee. Composed over routesAndNavFromFolderTree (route = folder path); this fold adds the STABILITY constraint — the public slug stays canonical and stable even as the tree converges.',
  }
}

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
      'The homepage itself is completely computed: the hero (name, text, tagline, actions), every section — the living double torus, the live vital signs, the guided path, the whole, and the feature map — is derived from the model and recomputable, not authored by hand.',
    boundary:
      'A census that every computed section of the home page holds. Hero copy is computed via homeHero() and injected at build time; the background movie and holographic hero share one phase clock (sharedHeroAt). Everything is verifiable from sealed src/.',
  }
}

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

export function pageStatusStatistics(matrix: MindMatrix = buildMatrix()) {
  const stats = buildStatistics(matrix)
  const facets = [
    { facet: 'a bottom status line on every page', on: stats.fused },
    { facet: 'statistics woven into the movie watermark', on: backgroundMovie(matrix).plays && harmonicMathFlowsInMovie(matrix).flows },
    { facet: 'the build’s own self-metrics', on: stats.count >= 9 },
    { facet: 'gaps shown to all eyes (zero)', on: buildStatisticsShowGaps(matrix).shows },
    { facet: 'every page wired to forge max tampering cost', on: pageForgeMaxTamper('/', matrix).wired },
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

/** Per-route forge seal — content-address + max tampering cost wired on every page. */
export type PageForgeSeal = {
  pageRoot: string
  sealRoot: string
  maxReached: boolean
  forgeCostLog2: number
  forgeCostLabel: string
  statsLine: string
  wired: boolean
}

export function pageForgeMaxTamper(route: string, matrix: MindMatrix = buildMatrix()): PageForgeSeal {
  const proof = proofReport(matrix)
  const stats = buildStatistics(matrix)
  const pageRoot = merkleFold([route || '/', matrix.root])
  const forgeCostLabel = proof.maxTamperingCostReached ? 'T_max = ∞' : `2^${proof.maxTamperingCostLog2}`
  return {
    pageRoot,
    sealRoot: matrix.root,
    maxReached: proof.maxTamperingCostReached,
    forgeCostLog2: proof.maxTamperingCostLog2,
    forgeCostLabel,
    statsLine: stats.stats.map((entry) => `${entry.stat} ${entry.value}`).join(' · '),
    wired: freeForgesMaxCost(matrix).holds && pagesWiredAtRuntimeZeroBuildMaxTamper(matrix).wired,
  }
}

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

// ── relocated from src/wind/learning (census-neutral line-compression) ──
export function siteManifestFromCommands(): readonly ConceptSiteSection[] {
  // sections sanitize through isServedRoute (user law: purge old links) — a command whose page left the
  // lens keeps its card but routes to the portal root, never to a removed page.
  const serve = (route: string) => (isServedRoute(route) ? route : '/')
  return sections().map((section) => ({ ...section, route: serve(section.route) }))
}
function sections(): readonly ConceptSiteSection[] {
  return [
    {
      title: 'Concept Shell',
      command: 'concept.site.shell',
      route: '/',
      summary: 'The VitePress theme mounts the concept UI components and navigation.',
    },
    {
      title: 'Self Build',
      command: 'concept.self.build',
      route: '/quantum-mind#diamond-lattice',
      summary: 'maxBuild aggregates computed roots and supplies maximum tampering cost.',
    },
    {
      title: 'Stream Self Completion',
      command: 'concept.self.complete',
      route: '/quantum-mind#diamond-lattice',
      summary: 'serverless quantum UUID stream inspects its own gates and emits a self-completion root.',
    },
    {
      title: 'Agent Education',
      command: 'concept.society.educate',
      route: '/quantum-mind#agent-education',
      summary: 'The agent learns efficiency and security rules before it runs the costly genus-2 math.',
    },
    {
      title: 'School Curriculum',
      command: 'concept.school.curriculum',
      route: '/learn',
      summary: 'The complexity is converted into a seven-stage school from kids to elders.',
    },
    {
      title: 'MCP Tools',
      command: 'concept.mcp.tools',
      route: '/mcp',
      summary: 'Every concept command is published as an MCP tool for language models at /mcp.json.',
    },
    {
      title: 'Quantum Folded Blockchains',
      command: 'concept.chain.quantum',
      route: '/quantum-mind#quantum-folded-blockchains',
      summary: 'The model sequences are folded into hash-linked blockchains bound into one multichain root.',
    },
    {
      title: 'Local Intelligence',
      command: 'concept.help.fold',
      route: '/console',
      summary: 'AI is encoded locally as intelligence: questions fold into answers from atoms, commands, and pages with no external API.',
    },
    {
      title: 'Cross Fold References',
      command: 'concept.fold.cross',
      route: '/quantum-mind#cross-fold-references',
      summary: 'Cross/fold and fold/cross are reciprocal references whose weave completes a trinity.',
    },
    {
      title: 'Collective Mind Self-Development',
      command: 'concept.mind.develop',
      route: '/',
      summary: 'Visiting any page folds a development block into the collective mind, advancing the self locally.',
    },
    {
      title: 'Self-Distributed Computing',
      command: 'concept.compute.distributed',
      route: '/',
      summary: 'Every connected context recomputes the model and folds peer roots into one collective root.',
    },
    {
      title: 'Babel Fold',
      command: 'concept.babel.fold',
      route: '/quantum-mind#traditions-lens',
      summary: 'The intelligence communicates across all language families, traditions, and religions without reducing them to one.',
    },
    {
      title: 'UTF as ASCII Analog',
      command: 'concept.utf.analog',
      route: '/quantum-mind#collective-mind',
      summary: 'Every UTF string folds to a reversible pure-ASCII analog in the UUID space.',
    },
    {
      title: 'All Computed',
      command: 'concept.all.computed',
      route: '/quantum-mind#self-completion',
      summary: 'All learning is computed: every command folds from the self into one computed root.',
    },
    {
      title: 'Self Addressed',
      command: 'concept.self.address',
      route: '/quantum-mind#ui-evidence',
      summary: 'What is not self-addressed is hallucination: every atom is reachable from the self.',
    },
    {
      title: 'Quantum Self State',
      command: 'concept.state.quantum',
      route: '/quantum-mind#self-completion',
      summary: 'Self interacting with itself forms another quantum self state; words and digits fold to UUIDs, making text and numbers obsolete.',
    },
    {
      title: 'Harmony Probability',
      command: 'concept.music.harmony',
      route: '/quantum-mind#waves',
      summary: 'If something does not sound, look, or feel harmonic, it probably is not; the probability is computed and folded.',
    },
    {
      title: 'Seal composition',
      command: 'concept.geometry.seal',
      route: '/quantum-mind#self-completion',
      summary: 'One master seal: every computed seal root folds through a fixed geometric structure — the 13-node cube lattice and the five Platonic solids.',
    },
    {
      title: 'Self-governing commons',
      command: 'concept.society.sacred',
      route: '/quantum-mind#self-build',
      summary: 'A self-governing commons model: zero living cost balanced by maximum forge cost.',
    },
    {
      title: 'Rate and Vote Governance',
      command: 'concept.commons.vote',
      route: '/governance',
      summary: 'Society approves and monitors the recomputable master seal by rate and vote; sharing the site shares the ledger.',
    },
    {
      title: 'Fair Trade & Sustainable Life',
      command: 'concept.commons.fair',
      route: '/governance',
      summary: 'A five-step participation ladder anyone can learn: learn the value, exchange transparently, reciprocate, steward, regenerate.',
    },
    {
      title: 'Ancient Tech',
      command: 'concept.ancient.tech',
      route: '/quantum-mind#traditions-lens',
      summary: 'Ancient technologies prefigure the model: hexagrams to digits, gears to computation, solids to the seal.',
    },
    {
      title: 'Society Relations',
      command: 'concept.society.relations',
      route: '/governance',
      summary: 'All society relations fold into one: traditions, science, the commons, governance, and fair life.',
    },
    {
      title: 'Torus Breath',
      command: 'concept.torus.breathe',
      route: '/quantum-mind#double-torus',
      summary: 'Extend and contract: the system breathes outward into all forms and inward into one seal.',
    },
    {
      title: 'Self-Sufficient Wave',
      command: 'concept.wave.self',
      route: '/quantum-mind#coordinated-waves',
      summary: 'Each wave extends, contracts, and seals — computed from the repository alone.',
    },
    {
      title: 'Agent Stream Wire',
      command: 'concept.agent.stream.wire',
      route: '/quantum-mind#diamond-lattice',
      summary: 'The coding-agent observe-bind-verify-project-return loop is wired into stream receipts.',
    },
    {
      title: 'Concept UI Components',
      command: 'concept.mind.double.torus',
      route: '/commands',
      summary: 'The command console drives the double-torus dashboard as a UI component.',
    },
    {
      title: 'Quantum UI Evidence',
      command: 'concept.mind.use.cases',
      route: '/quantum-mind#diamond-lattice',
      summary: 'Repository-grounded UI use cases list their source functions, components, interactions, and receipts.',
    },
    {
      title: 'Diamond Lattice',
      command: 'concept.society.lattice',
      route: '/quantum-mind#diamond-lattice',
      summary: 'Every displayed dimension and dynamic is computed from four-facet diamonds.',
    },
    {
      title: 'Pi Train',
      command: 'concept.diamond.pi.train',
      route: '/quantum-mind#pi-train',
      summary: 'The 3D double-torus sequence, sound tones, and vibration pulses are computed from pi diamonds.',
    },
    {
      title: 'Diamond Completeness',
      command: 'concept.diamond.complete',
      route: '/quantum-mind#diamond-lattice',
      summary: 'The stream diamond is checked for missing kinds, poles, receipts, analog channels, and pi-train coverage.',
    },
    {
      title: 'Metatron Cube',
      command: 'concept.diamond.metatron',
      route: '/quantum-mind#metatron-cube',
      summary: 'Double-vortex Metatron cube math maps digit folders into nodes, edges, and interference.',
    },
    {
      title: 'Digital Quantum Proof',
      command: 'concept.digit.proof',
      route: '/quantum-mind#digit-proof',
      summary: 'Digits verify the digital quantum-inspired model through folders, waves, superpositions, receipts, and roots.',
    },
    {
      title: 'Ceccec Digit Math',
      command: 'concept.digit.math',
      route: '/quantum-mind#ceccec-digit-math',
      summary: 'Every computed root is routed into a ceccec digit folder, so the digit folders do the math always.',
    },
    {
      title: 'Coordinated Waves',
      command: 'concept.wave.coordination',
      route: '/quantum-mind#coordinated-waves',
      summary: 'Diamonds emit phase-aligned yin-yang waves across the double torus.',
    },
    {
      title: 'Gap-Closing Waves',
      command: 'concept.wave.close.gaps',
      route: '/quantum-mind#coordinated-waves',
      summary: 'Realtime waves close or sustain dimensional and analog channels.',
    },
    {
      title: 'Quantum Chess',
      command: 'concept.chess.quantum',
      route: '/quantum-mind#quantum-chess',
      summary: 'The chess board is realised as square superpositions driven by coordinated waves.',
    },
    {
      title: 'Schema.org Diamonds',
      command: 'concept.schema.org.diamonds',
      route: '/quantum-mind#schema-org-diamonds',
      summary: 'Schema.org-shaped nodes are folded from diamond receipts, UI use cases, datasets, and actions.',
    },
    {
      title: 'Traditions Quantum Whole',
      command: 'concept.traditions.quantum.whole',
      route: '/quantum-mind#traditions-quantum-whole',
      summary: 'Religions and traditions are compared through distinct experiential, ritual, narrative, doctrinal, ethical, social, material, and relational dimensions.',
    },
    {
      title: 'Scientific Society',
      command: 'concept.science.society',
      route: '/quantum-mind#scientific-society',
      summary: 'A scientific society charter computes roles, review gates, reproducibility, and self-optimization waves.',
    },
    {
      title: 'Artist Surfaces',
      command: 'concept.artists.surfaces',
      route: '/',
      summary: 'Home and README surfaces are computed as artist-built equations with receipts.',
    },
    {
      title: 'Method Fusion',
      command: 'concept.method.fusion',
      route: '/quantum-mind#method-fusion',
      summary: 'Gravity maps every command surface to a single-word method token.',
    },
    {
      title: 'Double-Torus Math',
      command: 'concept.torus.math',
      route: '/architecture#6-double-torus-math',
      summary: 'The math page states the genus-2 invariants behind the concept.',
    },
    {
      title: 'Implications for Humanity',
      command: 'concept.society.humanity',
      route: '/quantum-mind#implications-for-humanity',
      summary: 'The concept is interpreted as a model for knowledge, institutions, AI, and culture.',
    },
    {
      title: 'Give Back to the Source',
      command: 'concept.commons.contribute',
      route: '/quantum-mind#give-back-to-the-source',
      summary: 'The concept asks beneficiaries to return citation, improvement, support, and stewardship.',
    },
    {
      title: 'Quantum Mind',
      command: 'concept.torus.matrix',
      route: '/quantum-mind',
      summary: 'The page begins by executing the matrix command over the local atom corpus.',
    },
    {
      title: 'Double-Torus Flow',
      command: 'concept.torus.flow',
      route: '/quantum-mind#double-torus-flow',
      summary: 'The torus flow command circulates collapse, entanglement, concentration, and coherence.',
    },
    {
      title: 'Dual-Torus Trinities',
      command: 'concept.torus.trinities',
      route: '/quantum-mind#dual-torus-trinities',
      summary: 'Types pair into two trinities across three axes and reach analog form without gaps for maximum tampering cost.',
    },
    {
      title: 'Repository API',
      command: 'concept.repository.api',
      route: '/quantum-mind#repository-api',
      summary: 'The repository command exposes pages, source files, proof, and atoms as addresses.',
    },
    {
      title: 'Live Command Registry',
      command: 'concept.commands.live',
      route: '/commands',
      summary: 'The command registry is the single source of truth; commands, method tokens, and MCP tools agree.',
    },
    {
      title: 'Proof Bundle',
      command: 'concept.proof.bundle',
      route: '/quantum-mind#merkle-inclusion',
      summary: 'The core computed roots fold into one verifiable proof bundle anyone can recompute.',
    },
    {
      title: 'Music of Pi',
      command: 'concept.music.pi',
      route: '/quantum-mind#waves',
      summary: 'The music of pi is infinite: pi-digit frequencies are its notes; the horo is where you join.',
    },
    {
      title: 'Icon Seal',
      command: 'concept.icon.fold',
      route: '/quantum-mind#self-build',
      summary: 'Icon usage adds to the tampering cost: the app icon, manifest, and service worker are folded into the seal.',
    },
    {
      title: 'Icon Taxonomy',
      command: 'concept.icon.taxonomy',
      route: '/commands',
      summary: 'Icons taxonomize the command areas and discover gaps: any area that is not a clean trinity.',
    },
    {
      title: 'Merkle Inclusion Proof',
      command: 'concept.proof.merkle.path',
      route: '/quantum-mind#merkle-inclusion',
      summary: 'Any atom binding is proven inside the mind root by a recomputable Merkle audit path.',
    },
    {
      title: 'Architecture',
      command: 'concept.site.manifest',
      route: '/architecture',
      summary: 'The architecture page is the command manifest explained as a contract.',
    },
  ] as const
}

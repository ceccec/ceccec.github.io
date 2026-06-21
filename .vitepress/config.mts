import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'
// One index serves all: each src folder index is a quantum VitePress router; srcFolderPlugins gathers
// them into the computed plugin list this config spreads (no hand-wired plugins). See .vitepress/src-plugins.mts.
import { srcFolderPlugins } from './src-plugins.mts'
import { computedSeo, jsonLdTemplate, siteConfig, siteNavigation, toGlagolitic, SITE_LOCALES } from '../src/quantum/heaven/mind'

// Configs use the matrix computationally: the site config AND the whole navigation are computed and
// held in the model (siteConfig, siteNavigation), content-addressed; this file only consumes them.
// The monographs graph is the search index, and from src the nav, sidebar and footer are all
// computed for every locale — nothing here is hardcoded. To change the site, change the model
// (the folders/routes); the config renders what the matrix computes.
const config = siteConfig()
const nav = siteNavigation()
const projectRoot = fileURLToPath(new URL('..', import.meta.url))

// Glagolitic is the DEFAULT locale, served at the root (/): the model-computed English navigation
// transliterated into the ninth-century script, its links kept at the root. Latin moves to /en/ and
// Bulgarian stays at /bg/. The root Glagolitic home is computed in realtime from .vitepress/pages/en/index.md
// by glagoliticHomeFromEnglish (toGlagolitic, local math only); monograph pages use monographPaths('gla').
// Root locale = Glagolitic: transliterate the labels, keep the / links.
const glaNode = (node: any): any => {
  if (Array.isArray(node)) return node.map(glaNode)
  if (node && typeof node === 'object') {
    const out: any = {}
    for (const [k, v] of Object.entries(node)) {
      if (k === 'text' || k === 'label' || k === 'copyright') out[k] = typeof v === 'string' ? toGlagolitic(v) : glaNode(v)
      else if (k === 'message' && typeof v === 'string') out[k] = v.replace(/>([^<]+)</g, (_m, t) => `>${toGlagolitic(t)}<`)
      else if (k === 'link') out[k] = v
      else out[k] = glaNode(v)
    }
    return out
  }
  return node
}
// /en/ locale = Latin (English): keep the labels, prefix the links with /en/.
const enLink = (href: unknown): unknown =>
  typeof href !== 'string' || /^(https?:|#|mailto:|\/en\/)/.test(href) ? href : href === '/' ? '/en/' : `/en${href}`
const enNode = (node: any): any => {
  if (Array.isArray(node)) return node.map(enNode)
  if (node && typeof node === 'object') {
    const out: any = {}
    for (const [k, v] of Object.entries(node)) {
      if (k === 'link') out[k] = enLink(v)
      else if (k === 'message' && typeof v === 'string') out[k] = v.replace(/href="([^"]+)"/g, (_m, h) => `href="${enLink(h)}"`)
      else out[k] = enNode(v)
    }
    return out
  }
  return node
}
const glaNav = { nav: glaNode(nav.en.nav), sidebar: glaNode(nav.en.relatedSidebar), footer: glaNode(nav.en.footer) }
const enNav = { nav: enNode(nav.en.nav), sidebar: enNode(nav.en.relatedSidebar), footer: enNode(nav.en.footer) }
const siteTitle = config.title
const siteTitleBg = config.titleBg
const siteDescription = config.description
const siteDescriptionBg = config.descriptionBg

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: siteTitle,
  description: siteDescription,
  // Page tree lives under .vitepress/pages (thin mounts + paths.ts); logic in src/; static assets in public/.
  srcDir: '.vitepress/pages',
  publicDir: 'public',
  cleanUrls: true,
  // The published npm package lives under packages/; its README is not a site
  // page. README.md and AGENTS.md are repo docs, not portal pages — exclude them
  // so they are not built as orphan, crawlable HTML.
  srcExclude: ['packages/**', 'src/**', 'README.md', 'AGENTS.md'],
  // The model is the standalone agnostic core — deliberately one module, so the
  // theme chunk is large by design. Raise the warning limit to keep build output
  // clean while still flagging genuine bloat above the headroom.
  vite: {
    build: { chunkSizeWarningLimit: 700 },
    plugins: srcFolderPlugins(projectRoot),
    // Imports are folders only, with NO file extensions (the strict barrel rule, enforced on all of src):
    // a specifier names the module by its folder path and the resolver finds the file. '.vue' is appended
    // so extensionless component imports (`./components/Foo`, never `./components/Foo.vue`) resolve too —
    // the default list has no '.vue', and the render layer is part of src with no exception.
    resolve: { extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json', '.vue'] },
  },
  head: [
    // Discover the visitor's language and route to it, default English. The root (/) is the Glagolitic locale;
    // a fresh visitor is sent to /bg/ (Bulgarian browser) or /en/ (everyone else — the default). Runs in <head>
    // before hydration so there is no Glagolitic flash. An explicit choice sticks (localStorage 'dt-locale', set
    // by the theme on every navigation), and internal navigation to / (picking Glagolitic from the menu) is
    // respected — only a fresh, external entry to the root is auto-routed. No-JS visitors and crawlers keep the
    // static Glagolitic root, with hreflang alternates pointing at every locale.
    [
      'script',
      {},
      `(function(){try{var p=location.pathname;if(p!=='/'&&p!=='/index.html')return;var k='dt-locale',s=localStorage.getItem(k);if(s==='cu')return;if(s==='en'||s==='bg'){location.replace('/'+s+'/');return;}if(document.referrer&&document.referrer.indexOf(location.origin)===0)return;var l=(navigator.language||navigator.userLanguage||'en').toLowerCase();location.replace(l.indexOf('bg')===0?'/bg/':'/en/');}catch(e){}})();`,
    ],
    // Google Search Console ownership verification — token from GOOGLE_SITE_VERIFICATION env var.
    ...(process.env['GOOGLE_SITE_VERIFICATION']
      ? [['meta', { name: 'google-site-verification', content: process.env['GOOGLE_SITE_VERIFICATION'] }] as [string, Record<string, string>]]
      : []),
    ['meta', { name: 'application-name', content: siteTitle }],
    ['meta', { name: 'apple-mobile-web-app-title', content: siteTitle }],
    // theme-color, robots and keywords are read from the matrix-computed siteConfig, not hardcoded.
    ['meta', { name: 'theme-color', content: config.themeColor }],
    ['meta', { name: 'robots', content: config.robots }],
    ['meta', { name: 'keywords', content: config.keywords.join(', ') }],
    // og:title/description/type and twitter:* are computed per page from
    // frontmatter in transformPageData; only the site-level name stays here.
    ['meta', { property: 'og:site_name', content: siteTitle }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['link', { rel: 'icon', href: '/icon.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'apple-touch-icon', href: '/icon.svg' }],
    ...SITE_LOCALES.map(locale => ['link', { rel: 'alternate', hreflang: locale.lang, href: locale.path }] as const),
    // The site-level JSON-LD now comes from the one template too: jsonLdTemplate
    // emits the site graph on every page in transformPageData — one source, no
    // static twin here to drift from it.
  ],
  // Let every page explain itself using standards: inject a schema.org WebPage
  // (TechArticle for the math/doc pages) JSON-LD into every page's head, plus a
  // breadcrumb, so each page is self-describing to crawlers and agents.
  transformPageData(pageData) {
    const frontmatter = (pageData.frontmatter ||= {})
    const head = (frontmatter.head ||= [])
    // Computed static pages (the dynamic [page] route) carry their SEO in the route params — the .md
    // file is purged, the body prose dropped, but the SEO is kept: lift the page-specific title,
    // description and keywords here so the ratings stay top, not the generic site fallback.
    const params = pageData.params as { title?: string; description?: string; keywords?: string[] } | undefined
    if (params?.title) pageData.title = params.title
    if (params?.description) {
      pageData.description = params.description // the <meta description> reads pageData.description
      if (!frontmatter.description) frontmatter.description = params.description
    }
    if (params?.keywords && !frontmatter.keywords) frontmatter.keywords = params.keywords
    const relative = pageData.relativePath
    const siteLocale = SITE_LOCALES.find(l => relative.startsWith(l.slugPath + '/')) || SITE_LOCALES.find(l => relative === l.slugPath + '/index.md') || SITE_LOCALES[1]
    const isBg = siteLocale.code === 'bg'
    const path = '/' + relative.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '')
    // SEO fully computed and holographic: title, keywords, description, category and
    // holographic tags are derived from the route, then folded into frontmatter, the
    // head meta and the JSON-LD. Explicit frontmatter always overrides the computed
    // values. The same route feeds the sitemap (src/quantum/lake/dist), so they never drift.
    const seo = computedSeo(path, pageData.title || (frontmatter.title as string) || '')
    const name = pageData.title || (frontmatter.title as string) || seo.title
    const description = pageData.description || frontmatter.description || seo.description
    const docPages = ['quantum-mind', 'architecture', 'commands', 'mcp', 'learn-developer']
    const isDoc = docPages.some((doc) => relative.endsWith(`${doc}.md`))
    // Holographic tags and a category, revealed in frontmatter and as article meta.
    const seoTags = (frontmatter.tags as string[] | undefined) || seo.keywords
    const category = (frontmatter.category as string | undefined) || seo.category
    frontmatter.tags = seoTags
    frontmatter.category = category
    // All is revealable through frontmatter: any page can reveal richer SEO by
    // declaring frontmatter fields (keywords, teaches, command, image, dates,
    // audience). They are honored here without touching the page body.
    const fm = frontmatter as Record<string, unknown>
    const asList = (value: unknown) => (Array.isArray(value) ? value : typeof value === 'string' ? [value] : undefined)
    // Keywords are computed (the holographic tags) unless the page declares its own.
    const keywords = asList(fm.keywords) || seo.keywords
    const image = typeof fm.image === 'string' ? fm.image : undefined
    head.push(['meta', { name: 'keywords', content: keywords.join(', ') }])
    // Category and holographic tags as article meta (one tag carries the whole).
    head.push(['meta', { property: 'article:section', content: category }])
    for (const tag of seoTags) head.push(['meta', { property: 'article:tag', content: tag }])
    // Open Graph is computed from frontmatter: each page's social card is derived
    // from its own frontmatter (ogTitle/ogDescription/ogType/image), falling back
    // to the page title and description. Twitter mirrors Open Graph.
    // The page title carries the site title, exactly like the document <title>: a page
    // shows "<name> | <site>", and the home page shows the site alone — no duplication.
    // So the og:title is never missing the site title and never doubles it.
    const fullSiteTitle = siteLocale.code === 'bg' ? siteTitleBg : siteTitle
    const isHome = SITE_LOCALES.map(l => l.path.replace(/\/$/, '')).filter(p => p).includes(path.replace(/\/$/, '')) || path === '/'
    const ogTitle =
      (typeof fm.ogTitle === 'string' && fm.ogTitle) ||
      (isHome || name === fullSiteTitle ? fullSiteTitle : `${name} | ${fullSiteTitle}`)
    const ogDescription = (typeof fm.ogDescription === 'string' && fm.ogDescription) || description
    const ogType = (typeof fm.ogType === 'string' && fm.ogType) || (isDoc ? 'article' : 'website')
    const og: [string, Record<string, string>][] = [
      ['meta', { property: 'og:type', content: ogType }],
      ['meta', { property: 'og:title', content: ogTitle }],
      ['meta', { property: 'og:description', content: ogDescription }],
      ['meta', { property: 'og:url', content: path }],
      ['meta', { property: 'og:locale', content: siteLocale.ogLocale }],
      ['meta', { name: 'twitter:card', content: image ? 'summary_large_image' : 'summary' }],
      ['meta', { name: 'twitter:title', content: ogTitle }],
      ['meta', { name: 'twitter:description', content: ogDescription }],
    ]
    if (image) {
      og.push(['meta', { property: 'og:image', content: image }])
      og.push(['meta', { name: 'twitter:image', content: image }])
    }
    for (const tag of og) head.push(tag)
  },
  // One JSON-LD template serves all: every page generates its structured data from
  // itself — its route (computed SEO) and its frontmatter (the documented contract
  // at jsonLdTemplate) — through the single template in the core: the site graph,
  // the page block, and (only on the academy) the Course list. Injected here, after
  // render, exactly once per page — head entries pushed via frontmatter can be
  // applied twice for static pages (metas are deduped by key downstream; script
  // tags are not), so the post-render hook is the one place a script tag lands once.
  transformHtml(html, _id, { pageData }) {
    const frontmatter = (pageData.frontmatter || {}) as Record<string, unknown>
    const relative = pageData.relativePath
    const path = '/' + relative.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '')
    const seo = computedSeo(path, pageData.title || (frontmatter.title as string) || '')
    const blocks = jsonLdTemplate({
      path,
      relativePath: relative,
      title: pageData.title || (frontmatter.title as string) || seo.title,
      description: String(pageData.description || frontmatter.description || seo.description),
      frontmatter,
      site: { en: siteTitle, bg: siteTitleBg, descriptionEn: siteDescription, descriptionBg: siteDescriptionBg },
    })
    const scripts = blocks.map((block) => `<script type="application/ld+json">${JSON.stringify(block)}</script>`).join('')
    return html.replace('</head>', `${scripts}</head>`)
  },
  themeConfig: {
    // The GitHub repository, shown in the top nav. One source for the repo link across both locales.
    socialLinks: [{ icon: 'github', link: 'https://github.com/ceccec/ceccec.github.io' }],
    // Nothing bypasses VitePress — not even search. VitePress's built-in local
    // search (a MiniSearch index built at build time) is offline, zero-network and
    // zero-dependency. The monographs graph (siteNavigation.searchIndexRoot) is the
    // model's own search index; the local search indexes the rendered pages computed
    // from that same src. Labels are localised for English and Bulgarian.
    search: {
      provider: 'local',
      options: {
        // The default locale is Glagolitic, so the search UI defaults to the ninth-century script;
        // English (/en/) and Bulgarian (/bg/) override it with their own labels.
        translations: {
          button: { buttonText: toGlagolitic('Search'), buttonAriaLabel: toGlagolitic('Search') },
          modal: {
            displayDetails: toGlagolitic('Display detailed list'),
            resetButtonTitle: toGlagolitic('Reset search'),
            backButtonTitle: toGlagolitic('Close search'),
            noResultsText: toGlagolitic('No results for'),
            footer: { selectText: toGlagolitic('to select'), navigateText: toGlagolitic('to navigate'), closeText: toGlagolitic('to close') },
          },
        },
        locales: {
          en: {
            translations: {
              button: { buttonText: 'Search', buttonAriaLabel: 'Search' },
              modal: {
                displayDetails: 'Display detailed list',
                resetButtonTitle: 'Reset search',
                backButtonTitle: 'Close search',
                noResultsText: 'No results for',
                footer: { selectText: 'to select', navigateText: 'to navigate', closeText: 'to close' },
              },
            },
          },
          bg: {
            translations: {
              button: { buttonText: 'Търсене', buttonAriaLabel: 'Търсене' },
              modal: {
                displayDetails: 'Покажи подробности',
                resetButtonTitle: 'Изчисти търсенето',
                backButtonTitle: 'Затвори търсенето',
                noResultsText: 'Няма резултати за',
                footer: { selectText: 'избери', navigateText: 'навигирай', closeText: 'затвори' },
              },
            },
          },
        },
      },
    },
  },
  locales: {
    root: {
      label: toGlagolitic('Glagolica'), // computed, never a hardcoded glyph string — Glagolitic is always toGlagolitic
      lang: 'cu',
      title: toGlagolitic(siteTitle),
      description: toGlagolitic(siteDescription),
      themeConfig: {
        // The DEFAULT locale is Glagolitic: navigation, sidebar and footer are computed from the model
        // (siteNavigation) and transliterated into the ninth-century script, with the links kept at the
        // root (/). Nothing hardcoded — to change the site, change the model. See vitepressConfigComputesAll.
        nav: glaNav.nav,
        sidebar: glaNav.sidebar,
        footer: glaNav.footer,
        outline: { label: toGlagolitic('On this page') },
        darkModeSwitchLabel: toGlagolitic('Appearance'),
        sidebarMenuLabel: toGlagolitic('Menu'),
        returnToTopLabel: toGlagolitic('Return to top'),
        langMenuLabel: toGlagolitic('Change language'),
      },
    },
    en: {
      label: 'English',
      lang: 'en',
      title: siteTitle,
      description: siteDescription,
      themeConfig: {
        // The Latin locale at /en/: the same model-computed navigation, its links prefixed /en/.
        nav: enNav.nav,
        sidebar: enNav.sidebar,
        footer: enNav.footer,
      },
    },
    bg: {
      label: 'Български',
      lang: 'bg-BG',
      title: siteTitleBg,
      description: siteDescriptionBg,
      themeConfig: {
        // Computed from the model, the Bulgarian projection of the same navigation.
        nav: nav.bg.nav,
        sidebar: nav.bg.relatedSidebar,
        footer: nav.bg.footer,
        docFooter: { prev: 'Предишна', next: 'Следваща' },
        outline: { label: 'На тази страница' },
        darkModeSwitchLabel: 'Облик',
        sidebarMenuLabel: 'Меню',
        returnToTopLabel: 'Към началото',
        langMenuLabel: 'Смени езика',
      },
    },
  },
})

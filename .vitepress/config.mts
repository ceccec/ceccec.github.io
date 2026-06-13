import { defineConfig } from 'vitepress'
import { computedSeo, jsonLdTemplate } from './theme/lib/quantumMind'

const siteTitle = 'Double Torus'
const siteTitleBg = 'Двоен торус'
const siteDescription = 'A quantum-learning educational portal for language models, served as an MCP tool surface over a double-torus UUID stream of roots, receipts, waves, diamonds, and gates.'
const siteDescriptionBg = 'Образователен портал за квантово учене за езикови модели, поднесен като MCP инструментален слой над двоен торус UUID поток от корени, разписки, вълни, диаманти и порти.'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: siteTitle,
  description: siteDescription,
  cleanUrls: true,
  // The published npm package lives under packages/; its README is not a site
  // page. README.md and AGENTS.md are repo docs, not portal pages — exclude them
  // so they are not built as orphan, crawlable HTML.
  srcExclude: ['packages/**', 'src/**', 'README.md', 'AGENTS.md'],
  // The model is the standalone agnostic core — deliberately one module, so the
  // theme chunk is large by design. Raise the warning limit to keep build output
  // clean while still flagging genuine bloat above the headroom.
  vite: { build: { chunkSizeWarningLimit: 700 } },
  head: [
    ['meta', { name: 'application-name', content: siteTitle }],
    ['meta', { name: 'apple-mobile-web-app-title', content: siteTitle }],
    ['meta', { name: 'theme-color', content: '#3b82f6' }],
    ['meta', { name: 'robots', content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1' }],
    [
      'meta',
      {
        name: 'keywords',
        content:
          'quantum learning, language models, LLM, educational portal, MCP, Model Context Protocol, tools/list, tools/call, double torus, genus 2, UUID stream, diamond lattice, pi train, schema.org, VitePress',
      },
    ],
    // og:title/description/type and twitter:* are computed per page from
    // frontmatter in transformPageData; only the site-level name stays here.
    ['meta', { property: 'og:site_name', content: siteTitle }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['link', { rel: 'icon', href: '/icon.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'apple-touch-icon', href: '/icon.svg' }],
    ['link', { rel: 'alternate', hreflang: 'en', href: '/' }],
    ['link', { rel: 'alternate', hreflang: 'bg', href: '/bg/' }],
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
    const relative = pageData.relativePath
    const isBg = relative.startsWith('bg/')
    const path = '/' + relative.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '')
    // SEO fully computed and holographic: title, keywords, description, category and
    // holographic tags are derived from the route, then folded into frontmatter, the
    // head meta and the JSON-LD. Explicit frontmatter always overrides the computed
    // values. The same route feeds the sitemap (generate-seo.mjs), so they never drift.
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
    const fullSiteTitle = isBg ? siteTitleBg : siteTitle
    const isHome = path === '/' || path === '/bg/'
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
      ['meta', { property: 'og:locale', content: isBg ? 'bg_BG' : 'en_US' }],
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
    // The GitHub repository, shown in the top nav (it was missing — socialLinks was
    // empty). One source for the repo link across both locales.
    socialLinks: [{ icon: 'github', link: 'https://github.com/ceccec/ceccec.github.io' }],
    // Nothing bypasses VitePress — not even search. VitePress's built-in local
    // search (a MiniSearch index built at build time) is offline, zero-network and
    // zero-dependency, so it honours every constraint while keeping site search
    // inside VitePress rather than in a custom component. The TrinitySearch and
    // QuantumConsole searches remain as model-specific tools, not a replacement for
    // the portal's own search. Labels are localised for English and Bulgarian.
    search: {
      provider: 'local',
      options: {
        locales: {
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
      label: 'English',
      lang: 'en',
      title: siteTitle,
      description: siteDescription,
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        // Navigation is harmonised: every title is its own path, title-cased (the
        // group names are the only "types"), so a name always tells you the path.
        // Six top-level entries, the rest grouped into dropdowns.
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Start', link: '/start' },
          { text: 'Explore', link: '/explore' },
          {
            text: 'Learn',
            items: [
              { text: 'School', link: '/school' },
              { text: 'Academy', link: '/academy' },
              { text: 'Learn Developer', link: '/learn-developer' },
            ],
          },
          {
            text: 'Use',
            items: [
              { text: 'Console', link: '/console' },
              { text: 'Commands', link: '/commands' },
              { text: 'MCP', link: '/mcp' },
              { text: 'Papers', link: '/papers/' },
              { text: 'References', link: '/references/' },
              { text: 'Diamonds', link: '/diamonds/' },
              { text: 'Show', link: '/show' },
            ],
          },
          {
            text: 'Inside',
            items: [
              { text: 'Quantum Mind', link: '/quantum-mind' },
              { text: 'Architecture', link: '/architecture' },
              { text: 'Boundaries', link: '/boundaries' },
              { text: 'Governance', link: '/governance' },
            ],
          },
        ],
        sidebar: [
          {
            text: 'Double Torus',
            items: [
              { text: 'Console', link: '/console' },
              { text: 'School', link: '/school' },
              { text: 'MCP', link: '/mcp' },
              { text: 'Learn Developer', link: '/learn-developer' },
              { text: 'Commands', link: '/commands' },
              { text: 'Quantum Mind', link: '/quantum-mind' },
              { text: 'Architecture', link: '/architecture' },
            ],
          },
        ],
        // Links distributed to the footer — every destination, one row, path-matched.
        footer: {
          message:
            '<a href="/start">Start</a> · <a href="/explore">Explore</a> · <a href="/school">School</a> · <a href="/academy">Academy</a> · <a href="/console">Console</a> · <a href="/commands">Commands</a> · <a href="/mcp">MCP</a> · <a href="/show">Show</a> · <a href="/quantum-mind">Quantum Mind</a> · <a href="/architecture">Architecture</a> · <a href="/boundaries">Boundaries</a> · <a href="/governance">Governance</a> · <a href="/papers/">Papers</a> · <a href="/references/">References</a> · <a href="/diamonds/">Diamonds</a> · <a href="/governance#license">License</a> · <a href="/governance#privacy">Privacy</a>',
          copyright: 'Open, recomputable, content-addressed — the Double Torus.',
        },
      },
    },
    bg: {
      label: 'Български',
      lang: 'bg-BG',
      title: siteTitleBg,
      description: siteDescriptionBg,
      themeConfig: {
        nav: [
          { text: 'Начало', link: '/bg/' },
          { text: 'Старт', link: '/bg/start' },
          { text: 'Изследвай', link: '/bg/explore' },
          {
            text: 'Учи',
            items: [
              { text: 'Училище', link: '/bg/school' },
              { text: 'Академия', link: '/bg/academy' },
              { text: 'Разработчик', link: '/bg/learn-developer' },
            ],
          },
          {
            text: 'Ползвай',
            items: [
              { text: 'Конзола', link: '/bg/console' },
              { text: 'Команди', link: '/bg/commands' },
              { text: 'MCP', link: '/bg/mcp' },
              { text: 'Статии', link: '/bg/papers/' },
              { text: 'Референции', link: '/bg/references/' },
              { text: 'Диаманти', link: '/bg/diamonds/' },
              { text: 'Покажи', link: '/bg/show' },
            ],
          },
          {
            text: 'Отвътре',
            items: [
              { text: 'Квантов ум', link: '/bg/quantum-mind' },
              { text: 'Архитектура', link: '/bg/architecture' },
              { text: 'Граници', link: '/bg/boundaries' },
              { text: 'Управление', link: '/bg/governance' },
            ],
          },
        ],
        sidebar: [
          {
            text: 'Двоен торус',
            items: [
              { text: 'Конзола', link: '/bg/console' },
              { text: 'Училище', link: '/bg/school' },
              { text: 'MCP', link: '/bg/mcp' },
              { text: 'Разработчик', link: '/bg/learn-developer' },
              { text: 'Команди', link: '/bg/commands' },
              { text: 'Квантов ум', link: '/bg/quantum-mind' },
              { text: 'Архитектура', link: '/bg/architecture' },
            ],
          },
        ],
        // Връзките, разпределени във футъра — всяка дестинация, на един ред.
        footer: {
          message:
            '<a href="/bg/start">Старт</a> · <a href="/bg/explore">Изследвай</a> · <a href="/bg/school">Училище</a> · <a href="/bg/academy">Академия</a> · <a href="/bg/console">Конзола</a> · <a href="/bg/commands">Команди</a> · <a href="/bg/mcp">MCP</a> · <a href="/bg/show">Покажи</a> · <a href="/bg/quantum-mind">Квантов ум</a> · <a href="/bg/architecture">Архитектура</a> · <a href="/bg/boundaries">Граници</a> · <a href="/bg/governance">Управление</a> · <a href="/bg/papers/">Статии</a> · <a href="/bg/references/">Референции</a> · <a href="/bg/diamonds/">Диаманти</a> · <a href="/bg/governance#license">Лиценз</a> · <a href="/bg/governance#privacy">Поверителност</a>',
          copyright: 'Отворен, преизчислим, адресиран по съдържание — Двоен торус.',
        },
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

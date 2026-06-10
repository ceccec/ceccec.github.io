import { defineConfig } from 'vitepress'

const siteTitle = 'Double Torus'
const siteTitleBg = 'Двоен тор'
const siteDescription = 'A quantum-learning educational portal for language models, served as an MCP tool surface over a double-torus UUID stream of roots, receipts, waves, diamonds, and gates.'
const siteDescriptionBg = 'Образователен портал за квантово учене за езикови модели, поднесен като MCP инструментален слой над двоен тор UUID поток от корени, разписки, вълни, диаманти и порти.'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: siteTitle,
  description: siteDescription,
  cleanUrls: true,
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
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': ['WebSite', 'LearningResource'],
          name: siteTitle,
          description: siteDescription,
          inLanguage: ['en', 'bg'],
          learningResourceType: 'educational portal',
          teaches: ['quantum learning', 'language models', 'Model Context Protocol'],
          audience: { '@type': 'EducationalAudience', educationalRole: ['kids', 'students', 'adults', 'elders'] },
          potentialAction: {
            '@type': 'ViewAction',
            target: ['/school', '/mcp', '/quantum-mind', '/bg/school', '/bg/mcp', '/bg/quantum-mind'],
          },
        },
        {
          '@type': 'SoftwareApplication',
          name: 'Double Torus MCP',
          applicationCategory: 'DeveloperApplication',
          description: 'An MCP tool surface that publishes every concept command for language models at /mcp.json.',
          url: '/mcp.json',
        },
      ],
    })],
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
    const name = pageData.title || siteTitle
    const description = pageData.description || frontmatter.description || siteDescription
    const docPages = ['quantum-mind', 'architecture', 'commands', 'mcp', 'learn-developer']
    const isDoc = docPages.some((doc) => relative.endsWith(`${doc}.md`))
    // All is revealable through frontmatter: any page can reveal richer SEO by
    // declaring frontmatter fields (keywords, teaches, command, image, dates,
    // audience). They are honored here without touching the page body.
    const fm = frontmatter as Record<string, unknown>
    const asList = (value: unknown) => (Array.isArray(value) ? value : typeof value === 'string' ? [value] : undefined)
    const keywords = asList(fm.keywords)
    const teaches = asList(fm.teaches)
    const command = typeof fm.command === 'string' ? fm.command : undefined
    const image = typeof fm.image === 'string' ? fm.image : undefined
    if (keywords) head.push(['meta', { name: 'keywords', content: keywords.join(', ') }])
    // Open Graph is computed from frontmatter: each page's social card is derived
    // from its own frontmatter (ogTitle/ogDescription/ogType/image), falling back
    // to the page title and description. Twitter mirrors Open Graph.
    const ogTitle = (typeof fm.ogTitle === 'string' && fm.ogTitle) || name
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
    head.push([
      'script',
      { type: 'application/ld+json' },
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': isDoc ? 'TechArticle' : 'WebPage',
        name,
        headline: name,
        description,
        inLanguage: isBg ? 'bg' : 'en',
        url: path,
        isPartOf: { '@type': 'WebSite', name: isBg ? siteTitleBg : siteTitle },
        about: 'a quantum-learning educational portal for language models served over MCP',
        ...(keywords ? { keywords } : {}),
        ...(teaches ? { teaches, learningResourceType: 'interactive resource' } : {}),
        ...(command ? { mainEntity: { '@type': 'SoftwareSourceCode', name: command, codeRepository: '/mcp.json' } } : {}),
        ...(image ? { image } : {}),
        ...(typeof fm.datePublished === 'string' ? { datePublished: fm.datePublished } : {}),
        ...(typeof fm.dateModified === 'string' ? { dateModified: fm.dateModified } : {}),
        ...(fm.audience ? { audience: { '@type': 'EducationalAudience', educationalRole: asList(fm.audience) } } : {}),
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: isBg ? siteTitleBg : siteTitle, item: isBg ? '/bg/' : '/' },
            { '@type': 'ListItem', position: 2, name, item: path },
          ],
        },
      }),
    ])
  },
  themeConfig: {
    socialLinks: [],
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: siteTitle,
      description: siteDescription,
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Console', link: '/console' },
          { text: 'Show', link: '/show' },
          { text: 'School', link: '/school' },
          { text: 'Governance', link: '/governance' },
          { text: 'MCP', link: '/mcp' },
          { text: 'Developer', link: '/learn-developer' },
          { text: 'Commands', link: '/commands' },
          { text: 'Mind', link: '/quantum-mind' },
          { text: 'Architecture', link: '/architecture' },
          { text: 'Boundaries', link: '/boundaries' },
        ],
        sidebar: [
          {
            text: 'Double Torus',
            items: [
              { text: 'Quantum Console', link: '/console' },
              { text: 'School (kids to elders)', link: '/school' },
              { text: 'MCP tool surface', link: '/mcp' },
              { text: 'The developer’s mind', link: '/learn-developer' },
              { text: 'Commands', link: '/commands' },
              { text: 'Overview', link: '/quantum-mind' },
              { text: 'Architecture', link: '/architecture' },
            ],
          },
        ],
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
          { text: 'Конзола', link: '/bg/console' },
          { text: 'Покажи', link: '/bg/show' },
          { text: 'Училище', link: '/bg/school' },
          { text: 'Управление', link: '/bg/governance' },
          { text: 'MCP', link: '/bg/mcp' },
          { text: 'Разработчик', link: '/bg/learn-developer' },
          { text: 'Команди', link: '/bg/commands' },
          { text: 'Ум', link: '/bg/quantum-mind' },
          { text: 'Архитектура', link: '/bg/architecture' },
          { text: 'Граници', link: '/bg/boundaries' },
        ],
        sidebar: [
          {
            text: 'Двоен тор',
            items: [
              { text: 'Квантова конзола', link: '/bg/console' },
              { text: 'Училище (от деца до възрастни)', link: '/bg/school' },
              { text: 'MCP инструментален слой', link: '/bg/mcp' },
              { text: 'Умът на разработчика', link: '/bg/learn-developer' },
              { text: 'Команди', link: '/bg/commands' },
              { text: 'Преглед', link: '/bg/quantum-mind' },
              { text: 'Архитектура', link: '/bg/architecture' },
            ],
          },
        ],
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

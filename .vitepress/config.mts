import { defineConfig } from 'vitepress'
import { quantumAcademy, buildMatrix, computedSeo } from './theme/lib/quantumMind'

// Derived from the model so the SEO never drifts from the source: the academy's
// course names come straight from quantumAcademy(), not a second hand-kept list.
const academyCourses = quantumAcademy(buildMatrix()).courses.map((course) => course.course)

const siteTitle = 'Double Torus'
const siteTitleBg = 'Двоен тор'
const siteDescription = 'A quantum-learning educational portal for language models, served as an MCP tool surface over a double-torus UUID stream of roots, receipts, waves, diamonds, and gates.'
const siteDescriptionBg = 'Образователен портал за квантово учене за езикови модели, поднесен като MCP инструментален слой над двоен тор UUID поток от корени, разписки, вълни, диаманти и порти.'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: siteTitle,
  description: siteDescription,
  cleanUrls: true,
  // The published npm package lives under packages/; its README is not a site
  // page. README.md and AGENTS.md are repo docs, not portal pages — exclude them
  // so they are not built as orphan, crawlable HTML.
  srcExclude: ['packages/**', 'README.md', 'AGENTS.md'],
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
    const teaches = asList(fm.teaches)
    const command = typeof fm.command === 'string' ? fm.command : undefined
    const image = typeof fm.image === 'string' ? fm.image : undefined
    head.push(['meta', { name: 'keywords', content: keywords.join(', ') }])
    // Category and holographic tags as article meta (one tag carries the whole).
    head.push(['meta', { property: 'article:section', content: category }])
    for (const tag of seoTags) head.push(['meta', { property: 'article:tag', content: tag }])
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
        // All client-side, no account, nothing sent anywhere — honestly free.
        isAccessibleForFree: true,
        isPartOf: { '@type': 'WebSite', name: isBg ? siteTitleBg : siteTitle },
        about: 'a quantum-learning educational portal for language models served over MCP',
        // The portal reads itself aloud (with harmonic intonation); tell voice
        // assistants and crawlers which content is speakable.
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', '.vp-doc h2', '.vp-doc > p', '.eyebrow'],
        },
        keywords,
        articleSection: category,
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
    // Fold the academy into Course structured data — five recomputable courses
    // (mirrors quantumAcademy().courses in the model), eligible for rich results.
    if (relative.endsWith('academy.md')) {
      head.push([
        'script',
        { type: 'application/ld+json' },
        JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: isBg ? 'Квантова академия — пет курса' : 'The Quantum Academy — five courses',
          itemListElement: academyCourses.map((course, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@type': 'Course',
              name: course,
              description: 'A recomputable, content-addressed course over the portal\'s areas.',
              inLanguage: isBg ? 'bg' : 'en',
              isAccessibleForFree: true,
              provider: { '@type': 'Organization', name: isBg ? siteTitleBg : siteTitle },
            },
          })),
        }),
      ])
    }
  },
  themeConfig: {
    socialLinks: [],
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
        // Six top-level entries, the rest grouped into dropdowns — every page
        // still one or two clicks away, but the bar stays calm on small screens.
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Start', link: '/start' },
          { text: 'Explore', link: '/explore' },
          {
            text: 'Learn',
            items: [
              { text: 'School (kids to elders)', link: '/school' },
              { text: 'Academy', link: '/academy' },
              { text: 'Developer', link: '/learn-developer' },
            ],
          },
          {
            text: 'Use',
            items: [
              { text: 'Console', link: '/console' },
              { text: 'Commands', link: '/commands' },
              { text: 'MCP tool surface', link: '/mcp' },
              { text: 'Papers (432 · next harmonic)', link: '/papers/' },
              { text: 'References (432 · completing 1024)', link: '/references/' },
              { text: 'Show', link: '/show' },
            ],
          },
          {
            text: 'Inside',
            items: [
              { text: 'Mind', link: '/quantum-mind' },
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
          { text: 'Старт', link: '/bg/start' },
          { text: 'Изследвай', link: '/bg/explore' },
          {
            text: 'Учи',
            items: [
              { text: 'Училище (от деца до възрастни)', link: '/bg/school' },
              { text: 'Академия', link: '/bg/academy' },
              { text: 'Разработчик', link: '/bg/learn-developer' },
            ],
          },
          {
            text: 'Ползвай',
            items: [
              { text: 'Конзола', link: '/bg/console' },
              { text: 'Команди', link: '/bg/commands' },
              { text: 'MCP слой', link: '/bg/mcp' },
              { text: 'Статии (432 · следваща хармоника)', link: '/bg/papers/' },
              { text: 'Референции (432 · допълват 1024)', link: '/bg/references/' },
              { text: 'Покажи', link: '/bg/show' },
            ],
          },
          {
            text: 'Отвътре',
            items: [
              { text: 'Ум', link: '/bg/quantum-mind' },
              { text: 'Архитектура', link: '/bg/architecture' },
              { text: 'Граници', link: '/bg/boundaries' },
              { text: 'Управление', link: '/bg/governance' },
            ],
          },
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

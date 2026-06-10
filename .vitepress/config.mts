import { defineConfig } from 'vitepress'

const siteTitle = 'Double Torus'
const siteTitleBg = 'Двоен тор'
const siteDescription = 'Sigma_2 -> UUID* -> Gate. A serverless quantum UUID stream of roots, receipts, waves, diamonds, gates, and schema nodes.'
const siteDescriptionBg = 'Sigma_2 -> UUID* -> Gate. Безсървърен квантов UUID поток от корени, разписки, вълни, диаманти, порти и schema възли.'

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
          'double torus, genus 2, UUID stream, diamond lattice, quantum UI, pi train, schema.org, VitePress, Radix Vue, shadcn-vue',
      },
    ],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: siteTitle }],
    ['meta', { property: 'og:description', content: siteDescription }],
    ['meta', { property: 'og:site_name', content: siteTitle }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: siteTitle }],
    ['meta', { name: 'twitter:description', content: siteDescription }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['link', { rel: 'alternate', hreflang: 'en', href: '/' }],
    ['link', { rel: 'alternate', hreflang: 'bg', href: '/bg/' }],
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: siteTitle,
      description: siteDescription,
      inLanguage: ['en', 'bg'],
      potentialAction: {
        '@type': 'ViewAction',
        target: ['/quantum-mind', '/architecture', '/commands', '/bg/quantum-mind', '/bg/architecture', '/bg/commands'],
      },
    })],
  ],
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
          { text: 'School', link: '/school' },
          { text: 'Learn', link: '/learn-erpax' },
          { text: 'Commands', link: '/commands' },
          { text: 'Mind', link: '/quantum-mind' },
          { text: 'Architecture', link: '/architecture' },
        ],
        sidebar: [
          {
            text: 'Double Torus',
            items: [
              { text: 'School (kids to elders)', link: '/school' },
              { text: 'Learn Erpax', link: '/learn-erpax' },
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
          { text: 'Училище', link: '/bg/school' },
          { text: 'Научи', link: '/bg/learn-erpax' },
          { text: 'Команди', link: '/bg/commands' },
          { text: 'Ум', link: '/bg/quantum-mind' },
          { text: 'Архитектура', link: '/bg/architecture' },
        ],
        sidebar: [
          {
            text: 'Двоен тор',
            items: [
              { text: 'Училище (от деца до възрастни)', link: '/bg/school' },
              { text: 'Научи Erpax', link: '/bg/learn-erpax' },
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

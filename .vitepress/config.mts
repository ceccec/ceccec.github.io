import { defineConfig } from 'vitepress'

const siteTitle = 'Double Torus'
const siteDescription = 'Sigma_2 -> UUID* -> Gate. A serverless quantum UUID stream of roots, receipts, waves, diamonds, gates, and schema nodes.'

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
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: siteTitle,
      description: siteDescription,
      inLanguage: 'en',
      potentialAction: {
        '@type': 'ViewAction',
        target: ['/quantum-mind', '/architecture', '/commands'],
      },
    })],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Learn', link: '/learn-erpax' },
      { text: 'Commands', link: '/commands' },
      { text: 'Mind', link: '/quantum-mind' },
      { text: 'Architecture', link: '/architecture' }
    ],

    sidebar: [
      {
        text: 'Double Torus',
        items: [
          { text: 'Learn Erpax', link: '/learn-erpax' },
          { text: 'Commands', link: '/commands' },
          { text: 'Overview', link: '/quantum-mind' },
          { text: 'Architecture', link: '/architecture' }
        ]
      }
    ],

    socialLinks: []
  }
})

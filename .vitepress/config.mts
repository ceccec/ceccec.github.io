import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ceccec Double Torus",
  description: "A content-addressed self-model built from atoms, reciprocal bindings, double-torus flow, coverage, and proof.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Commands', link: '/commands' },
      { text: 'Mind', link: '/quantum-mind' },
      { text: 'Architecture', link: '/architecture' }
    ],

    sidebar: [
      {
        text: 'Ceccec Double Torus',
        items: [
          { text: 'Commands', link: '/commands' },
          { text: 'Overview', link: '/quantum-mind' },
          { text: 'Architecture', link: '/architecture' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ceccec/ceccec.github.io' }
    ]
  }
})

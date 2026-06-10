import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Double Torus",
  description: "A genus-2 self-model for knowledge, humanity, reciprocity, coverage, and proof.",
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
        text: 'Double Torus',
        items: [
          { text: 'Commands', link: '/commands' },
          { text: 'Overview', link: '/quantum-mind' },
          { text: 'Architecture', link: '/architecture' }
        ]
      }
    ],

    socialLinks: []
  }
})

import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Quantum Mind",
  description: "A content-addressed self-model built from atoms, bindings, coverage, and proof.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Mind', link: '/quantum-mind' },
      { text: 'Architecture', link: '/architecture' }
    ],

    sidebar: [
      {
        text: 'Quantum Mind',
        items: [
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

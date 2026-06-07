import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Quantum Mind",
  description: "A content-addressed self-model built from atoms, bindings, coverage, and proof.",
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
        text: 'Quantum Mind',
        items: [
          { text: 'Learn Erpax', link: '/learn-erpax' },
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

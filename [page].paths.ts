// Native VitePress dynamic route: every static page computed from src. The page (title + the
// components it shows) lives in the matrix (staticPages); this route renders each, so the hand-written
// .md files are removed and the knowledge kept. Useless prose is dropped; the SEO (title, description,
// keywords, JSON-LD) is computed from the route by config.mts — top ratings, no hand-tuned prose.
import { staticPages } from './.vitepress/theme/lib/quantumMind'

export default {
  paths: () =>
    staticPages().map((page) => ({
      params: {
        page: page.slug,
        title: page.title.en,
        description: page.description.en,
        keywords: page.keywords,
        components: page.components,
      },
    })),
}

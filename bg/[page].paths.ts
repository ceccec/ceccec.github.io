// The Bulgarian mirror of the computed page route — same staticPages, the title autotranslated to the
// bg locale. The page bodies are computed from src; the .md mirror files are removed.
import { staticPages } from '../.vitepress/theme/lib/quantumMind'

export default {
  paths: () =>
    staticPages().map((page) => ({
      params: {
        page: page.slug,
        title: page.title.bg,
        description: page.description.bg,
        keywords: page.keywords,
        components: page.components,
      },
    })),
}

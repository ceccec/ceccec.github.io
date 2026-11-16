// Thin VitePress mount — browser-safe SEO/nav only; enforcement gates stay CLI/build-only (automount.ts).
// @mvc controller mount — re-exports controller fns (computedSeo, leanBlogNavigation, siteConfig) to config.mts.
export {
  computedSeo,
  jsonLdTemplate,
  pageHreflangAlternates,
  seoMetaDescription,
  seoDocumentTitle,
  computedPageDescription,
  pageCitation,
  openGraphCardFromRoute,
  platformOgLimitsMeasured,
  canonicalUrl,
} from '../render'
export type { JsonLdPageIdentity } from '../render'
export {
  siteConfig,
  homeHero,
  vitepressNativeDocsConfig,
  vitepressDocsResearchImprovements,
} from '../render'
export { leanBlogNavigation } from '../render'
export { SITE_LOCALES } from '../render'
export { toGlagolitic } from '../render'

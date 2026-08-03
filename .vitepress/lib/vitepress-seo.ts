// Thin VitePress mount — browser-safe SEO/nav only; enforcement gates stay CLI/build-only (automount.ts).
// @mvc controller mount — re-exports controller fns (computedSeo, siteNavigation, siteConfig) to config.mts.
export {
  computedSeo,
  jsonLdTemplate,
  pageHreflangAlternates,
  seoMetaDescription,
  openGraphCardFromRoute,
  platformOgLimitsMeasured,
  canonicalUrl,
} from '../render'
export type { JsonLdPageIdentity } from '../render'
export {
  siteConfig,
  localeNavLinks,
  localeSidebarKeys,
  homeHero,
  vitepressNativeDocsConfig,
  vitepressDocsResearchImprovements,
} from '../render'
export { siteNavigation, vitepressSidebar } from '../render'
export { SITE_LOCALES } from '../render'
export { toGlagolitic } from '../render'

// Thin VitePress mount — browser-safe SEO/nav only; enforcement gates stay CLI/build-only (automount.ts).
// @mvc controller mount — re-exports controller fns (computedSeo, siteNavigation, siteConfig) to config.mts.
export { computedSeo, jsonLdTemplate } from '../../src/mountain/og'
export type { JsonLdPageIdentity } from '../../src/heaven/balance'
export { siteConfig, localeNavLinks, localeSidebarKeys, homeHero } from '../../src/site'
export { siteNavigation } from '../../src/learning'
export { SITE_LOCALES } from '../../src/heaven/balance'
export { toGlagolitic } from '../../src/quantum/heaven/library'

/**
 * One VitePress-compatible component set — shared library for theme chrome and page shells.
 * Lazy OVERRIDES (RayHub, LivingTorus, TheoremsPanel, …) stay dynamic in register-components
 * so they are not pulled into the enhanceApp chunk. Panels import named exports from here or
 * from sibling .vue files under this folder only — no second UI stack.
 */
export { default as ClientOnly } from './ClientOnly.vue'
export { default as LinkedHeroCard } from './LinkedHeroCard.vue'
export { default as HubCardGrid } from './HubCardGrid.vue'
export { default as UiCardShell } from './UiCardShell.vue'
export { default as UiAsideShell } from './UiAsideShell.vue'
export { default as DecodedCard } from './DecodedCard.vue'
export { default as UniversalPageTemplate } from './UniversalPageTemplate.vue'
export { default as TagBrowser } from './TagBrowser.vue'
export { default as PaperFrame } from './PaperFrame.vue'
export { default as TheoremSupport } from './TheoremSupport.vue'
export { default as ModelCardPages } from './ModelCardPages.vue'
export { default as TheoremPages } from './TheoremPages.vue'
export { default as DomainProofPages } from './DomainProofPages.vue'
export { default as TheoremIndex } from './TheoremIndex.vue'
export { default as SourceAtlas } from './SourceAtlas.vue'
export { default as TrinityGateways } from './TrinityGateways.vue'
export { default as GlobalHelp } from './GlobalHelp.vue'
export { default as CollectiveMind } from './CollectiveMind.vue'
export { default as RevolutAside } from './RevolutAside.vue'
export { default as VitePressPossibilities } from './VitePressPossibilities.vue'
export { default as HeroBackgroundLayer } from './HeroBackgroundLayer.vue'

/** Names registered eagerly in enhanceApp — the rest stay OVERRIDES async loaders. */
export const VITEPRESS_COMPONENT_SET = [
  'ClientOnly',
  'LinkedHeroCard',
  'HubCardGrid',
  'UiCardShell',
  'UiAsideShell',
  'DecodedCard',
  'UniversalPageTemplate',
  'TagBrowser',
  'PaperFrame',
  'TheoremSupport',
  'ModelCardPages',
  'TheoremPages',
  'DomainProofPages',
  'TheoremIndex',
  'SourceAtlas',
  'TrinityGateways',
  'GlobalHelp',
  'CollectiveMind',
  'RevolutAside',
  'VitePressPossibilities',
  'HeroBackgroundLayer',
] as const

export type VitePressComponentName = (typeof VITEPRESS_COMPONENT_SET)[number]

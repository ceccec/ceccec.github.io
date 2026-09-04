/**
 * One VitePress-compatible component set — shared library for theme chrome and page shells.
 * Lazy OVERRIDES (RayHub, LivingTorus, TheoremsPanel, …) stay dynamic in register-components
 * so they are not pulled into the enhanceApp chunk. Panels import named exports from here or
 * from sibling .vue files under this folder only — no second UI stack.
 * Pair: vite/one · comp/seal · fold: oneQuantumSetOfVitepressComponentsSealedAtGates.
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
export { default as LeanTheoremPages } from './LeanTheoremPages.vue'
export { default as LeanTheoremIndex } from './LeanTheoremIndex.vue'
export { default as DomainProofPages } from './DomainProofPages.vue'
export { default as TheoremIndex } from './TheoremIndex.vue'
export { default as SourceAtlas } from './SourceAtlas.vue'
export { default as ThreeClosure } from './ThreeClosure.vue'
export { default as TrinityGateways } from './TrinityGateways.vue'
export { default as GlobalHelp } from './GlobalHelp.vue'
export { default as CollectiveMind } from './CollectiveMind.vue'
export { default as RevolutAside } from './RevolutAside.vue'
export { default as VitePressPossibilities } from './VitePressPossibilities.vue'
export { default as HeroBackgroundLayer } from './HeroBackgroundLayer.vue'
export { default as ScientificPageCanon } from './ScientificPageCanon.vue'
export { default as ScientificPaperBody } from './ScientificPaperBody.vue'
export { default as PageComputedGaps } from './PageComputedGaps.vue'

/**
 * Sealed one-quantum catalog — every theme .vue is named here (eager · page · override · movie · ui).
 * Extra/orphan/wet components outside this catalog = crack HARD at the gates.
 */
export const VITEPRESS_ONE_QUANTUM_COMPONENT_CATALOG = [
  // Eager enhanceApp mounts
  { id: 'ClientOnly', path: 'ClientOnly.vue', kind: 'eager' as const, role: 'mount' },
  { id: 'LinkedHeroCard', path: 'LinkedHeroCard.vue', kind: 'eager' as const, role: 'card' },
  { id: 'HubCardGrid', path: 'HubCardGrid.vue', kind: 'eager' as const, role: 'grid' },
  { id: 'UiCardShell', path: 'UiCardShell.vue', kind: 'eager' as const, role: 'shell' },
  { id: 'UiAsideShell', path: 'UiAsideShell.vue', kind: 'eager' as const, role: 'shell' },
  { id: 'DecodedCard', path: 'DecodedCard.vue', kind: 'eager' as const, role: 'card' },
  { id: 'UniversalPageTemplate', path: 'UniversalPageTemplate.vue', kind: 'eager' as const, role: 'page-shell' },
  { id: 'TagBrowser', path: 'TagBrowser.vue', kind: 'eager' as const, role: 'browser' },
  { id: 'PaperFrame', path: 'PaperFrame.vue', kind: 'eager' as const, role: 'paper' },
  { id: 'TheoremSupport', path: 'TheoremSupport.vue', kind: 'eager' as const, role: 'aside' },
  { id: 'ModelCardPages', path: 'ModelCardPages.vue', kind: 'eager' as const, role: 'page' },
  { id: 'TheoremPages', path: 'TheoremPages.vue', kind: 'eager' as const, role: 'page-shell' },
  { id: 'LeanTheoremPages', path: 'LeanTheoremPages.vue', kind: 'eager' as const, role: 'page-shell' },
  { id: 'LeanTheoremIndex', path: 'LeanTheoremIndex.vue', kind: 'eager' as const, role: 'index' },
  { id: 'DomainProofPages', path: 'DomainProofPages.vue', kind: 'eager' as const, role: 'page-shell' },
  { id: 'TheoremIndex', path: 'TheoremIndex.vue', kind: 'eager' as const, role: 'index' },
  { id: 'SourceAtlas', path: 'SourceAtlas.vue', kind: 'eager' as const, role: 'atlas' },
  { id: 'ThreeClosure', path: 'ThreeClosure.vue', kind: 'eager' as const, role: 'proof' },
  { id: 'TrinityGateways', path: 'TrinityGateways.vue', kind: 'eager' as const, role: 'chrome' },
  { id: 'GlobalHelp', path: 'GlobalHelp.vue', kind: 'eager' as const, role: 'chrome' },
  { id: 'CollectiveMind', path: 'CollectiveMind.vue', kind: 'eager' as const, role: 'chrome' },
  { id: 'RevolutAside', path: 'RevolutAside.vue', kind: 'eager' as const, role: 'aside' },
  { id: 'VitePressPossibilities', path: 'VitePressPossibilities.vue', kind: 'eager' as const, role: 'chrome' },
  { id: 'HeroBackgroundLayer', path: 'HeroBackgroundLayer.vue', kind: 'eager' as const, role: 'movie' },
  // Canon page / paper / gaps (compose format/canon · page/trinity)
  { id: 'ScientificPageCanon', path: 'ScientificPageCanon.vue', kind: 'page' as const, role: 'page-shell' },
  { id: 'ScientificPaperBody', path: 'ScientificPaperBody.vue', kind: 'page' as const, role: 'paper' },
  { id: 'PageComputedGaps', path: 'PageComputedGaps.vue', kind: 'page' as const, role: 'gaps' },
  { id: 'TheoremFigure', path: 'TheoremFigure.vue', kind: 'page' as const, role: 'figure' },
  // Async OVERRIDES / experience
  { id: 'TheoremsPanel', path: 'TheoremsPanel.vue', kind: 'override' as const, role: 'panel' },
  { id: 'RayHub', path: 'RayHub.vue', kind: 'override' as const, role: 'hub' },
  { id: 'MonographFold', path: 'MonographFold.vue', kind: 'override' as const, role: 'monograph' },
  { id: 'LivingTorus', path: 'LivingTorus.vue', kind: 'override' as const, role: 'experience' },
  { id: 'HumanDesignBodyGraph', path: 'HumanDesignBodyGraph.vue', kind: 'override' as const, role: 'experience' },
  { id: 'DoubleTorusExperience', path: 'DoubleTorusExperience.vue', kind: 'override' as const, role: 'experience' },
  { id: 'ProofAnimation', path: 'ProofAnimation.vue', kind: 'override' as const, role: 'animation' },
  // One movie family (layers, not parallel stacks)
  { id: 'BackgroundMovie', path: 'BackgroundMovie.vue', kind: 'movie' as const, role: 'movie' },
  { id: 'CardBackgroundMovie', path: 'CardBackgroundMovie.vue', kind: 'movie' as const, role: 'movie' },
  // One ui primitive family
  { id: 'ui/Accordion', path: 'ui/Accordion.vue', kind: 'ui' as const, role: 'primitive' },
  { id: 'ui/AccordionItem', path: 'ui/AccordionItem.vue', kind: 'ui' as const, role: 'primitive' },
  { id: 'ui/Alert', path: 'ui/Alert.vue', kind: 'ui' as const, role: 'primitive' },
  { id: 'ui/AspectRatio', path: 'ui/AspectRatio.vue', kind: 'ui' as const, role: 'primitive' },
  { id: 'ui/Avatar', path: 'ui/Avatar.vue', kind: 'ui' as const, role: 'primitive' },
  { id: 'ui/Badge', path: 'ui/Badge.vue', kind: 'ui' as const, role: 'primitive' },
  { id: 'ui/Button', path: 'ui/Button.vue', kind: 'ui' as const, role: 'primitive' },
  { id: 'ui/Card', path: 'ui/Card.vue', kind: 'ui' as const, role: 'primitive' },
  { id: 'ui/CardContent', path: 'ui/CardContent.vue', kind: 'ui' as const, role: 'primitive' },
  { id: 'ui/Checkbox', path: 'ui/Checkbox.vue', kind: 'ui' as const, role: 'primitive' },
  { id: 'ui/Collapsible', path: 'ui/Collapsible.vue', kind: 'ui' as const, role: 'primitive' },
  { id: 'ui/Input', path: 'ui/Input.vue', kind: 'ui' as const, role: 'primitive' },
  { id: 'ui/Label', path: 'ui/Label.vue', kind: 'ui' as const, role: 'primitive' },
  { id: 'ui/Progress', path: 'ui/Progress.vue', kind: 'ui' as const, role: 'primitive' },
  { id: 'ui/Separator', path: 'ui/Separator.vue', kind: 'ui' as const, role: 'primitive' },
  { id: 'ui/Skeleton', path: 'ui/Skeleton.vue', kind: 'ui' as const, role: 'primitive' },
  { id: 'ui/Switch', path: 'ui/Switch.vue', kind: 'ui' as const, role: 'primitive' },
  { id: 'ui/Tabs', path: 'ui/Tabs.vue', kind: 'ui' as const, role: 'primitive' },
  { id: 'ui/TabsContent', path: 'ui/TabsContent.vue', kind: 'ui' as const, role: 'primitive' },
  { id: 'ui/TabsList', path: 'ui/TabsList.vue', kind: 'ui' as const, role: 'primitive' },
  { id: 'ui/TabsTrigger', path: 'ui/TabsTrigger.vue', kind: 'ui' as const, role: 'primitive' },
  { id: 'ui/Textarea', path: 'ui/Textarea.vue', kind: 'ui' as const, role: 'primitive' },
  { id: 'ui/Tooltip', path: 'ui/Tooltip.vue', kind: 'ui' as const, role: 'primitive' },
] as const

/** Eager enhanceApp names — subset of VITEPRESS_ONE_QUANTUM_COMPONENT_CATALOG. */
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
  'ThreeClosure',
  'TrinityGateways',
  'GlobalHelp',
  'CollectiveMind',
  'RevolutAside',
  'VitePressPossibilities',
  'HeroBackgroundLayer',
] as const

/** Parallel families morph → one sealed surface (duplicatesRemoved census). */
export const VITEPRESS_COMPONENT_DUP_MORPHS = [
  { before: 'inline-paper-sections', after: 'ScientificPaperBody', status: 'removed' as const },
  { before: 'global-only-gaps-panel', after: 'PageComputedGaps', status: 'removed' as const },
  { before: 'parallel-wet-page-prose', after: 'ScientificPageCanon', status: 'removed' as const },
  { before: 'second-ui-stack', after: 'ui/*', status: 'removed' as const },
  { before: 'parallel-movie-stacks', after: 'HeroBackgroundLayer+BackgroundMovie+CardBackgroundMovie', status: 'removed' as const },
] as const

export type VitePressComponentName = (typeof VITEPRESS_COMPONENT_SET)[number]
export type VitePressOneQuantumComponentId = (typeof VITEPRESS_ONE_QUANTUM_COMPONENT_CATALOG)[number]['id']

// Register componentGraph names globally — DecodedCard folds, LivingTorus canvas, or thin gate fallback.
// Shared mounts come from the one VitePress component set (.vitepress/theme/components).
import { defineAsyncComponent, defineComponent, h, ref, watch, type App, type Component } from 'vue'
import { useRoute } from 'vitepress'
// NOT FROM THE BARREL. components/index.ts re-exports 33 components, so importing ONE name from it
// statically pulls all 33 into whatever graph does the importing — and nine of them import the render
// barrel, which is the corpus. Measured 2026-09-25: that single import shape put diamonds.js, 8141 KiB,
// into the entry chunk's STATIC closure, 88% of the 9227 KiB a visitor must fetch before the app module
// evaluates. Each component is now addressed by its own file and resolved when it is used. SSR is
// unaffected: Vue awaits an async component while rendering, which is why /formulas already ships its
// 845 KiB of rows with FormulaIndex registered exactly this way.
const DecodedCard = defineAsyncComponent(() => import('../theme/components/DecodedCard.vue'))
const UiCardShell = defineAsyncComponent(() => import('../theme/components/UiCardShell.vue'))
const LinkedHeroCard = defineAsyncComponent(() => import('../theme/components/LinkedHeroCard.vue'))
const HubCardGrid = defineAsyncComponent(() => import('../theme/components/HubCardGrid.vue'))
const TagBrowser = defineAsyncComponent(() => import('../theme/components/TagBrowser.vue'))
const TrinityGateways = defineAsyncComponent(() => import('../theme/components/TrinityGateways.vue'))
const GlobalHelp = defineAsyncComponent(() => import('../theme/components/GlobalHelp.vue'))
const CollectiveMind = defineAsyncComponent(() => import('../theme/components/CollectiveMind.vue'))
const RevolutAside = defineAsyncComponent(() => import('../theme/components/RevolutAside.vue'))
const TheoremSupport = defineAsyncComponent(() => import('../theme/components/TheoremSupport.vue'))
const VitePressPossibilities = defineAsyncComponent(() => import('../theme/components/VitePressPossibilities.vue'))
import { componentDisplayName, useSiteLocale } from './mounts'
import { componentProjectionFor } from './hero-movie-paint'
import { COMPONENT_FOLD_LOADERS, invokeFoldLoader, withCrosslinks, type DecodedFoldView } from './component-folds'
import { localeFromRoute } from './site-locale'

/** VitePress default theme + explicit theme mounts — never re-register from componentGraph. */
const THEME_RESERVED = new Set([
  'Badge',
  'ClientOnly',
  'Content',
  'ExternalLinkIcon',
  'HomeLink',
  'Layout',
  'Link',
  'NavLink',
  'NotFound',
  'VPBadge',
  'VPButton',
  'VPCarbonAds',
  'VPContent',
  'VPDocFooter',
  'VPFlyout',
  'VPHero',
  'VPHome',
  'VPHomeHero',
  'VPLink',
  'VPNav',
  'VPNavBar',
  'VPNavBarAppearance',
  'VPNavBarExtra',
  'VPNavBarHamburger',
  'VPNavBarMenu',
  'VPNavBarMenuGroup',
  'VPNavBarMenuLink',
  'VPNavBarSearch',
  'VPNavBarSocialLinks',
  'VPNavBarTitle',
  'VPNavBarTranslations',
  'VPSidebar',
  'VPSidebarGroup',
  'VPSidebarItem',
  'VPSocialLink',
  'VPSocialLinks',
  'VPSwitch',
  'VPTeamMembers',
  'VPTeamPage',
  'VPTeamPageSection',
  'VPTeamPageTitle',
  'UniversalPageTemplate',
  'LinkedHeroCard',
  'HubCardGrid',
  'TagBrowser',
  'DigitMotion',
  'SevenStarRosetta',
])

const OVERRIDES: Record<string, () => Promise<{ default: Component }>> = {
  // the frontiers surface renders the theorem registry — the 102 proven atoms were invisible
  Frontiers: () => import('../theme/components/TheoremsPanel.vue'),
  RayHub: () => import('../theme/components/RayHub.vue'),
  Monograph: () => import('../theme/components/MonographFold.vue'),
  LivingTorus: () => import('../theme/components/LivingTorus.vue'),
  HumanDesignBodyGraph: () => import('../theme/components/HumanDesignBodyGraph.vue'),
  Merkaba: () => import('../../src/render/merkaba/index.vue'),
  DoubleTorusExperience: () => import('../theme/components/DoubleTorusExperience.vue'),
  EncryptionTools: () => import('../../src/water/encryption/index.vue'),
  SslTestTools: () => import('../theme/components/SslTestTools.vue'),
  MillenniumChallenge: () => import('../../src/research/index.vue'),
  ResearchIndex: () => import('../../src/research/index.vue'),
  QuantumTools: () => import('../../src/quantum/apps/index.vue'),
  FusionVerify: () => import('../../src/wind/fusion/index.vue'),
  // society/HD domain — sealed governance panels (display duals)
  Society: () => import('../../src/earth/governance/index.vue'),
  GovernanceVote: () => import('../../src/earth/governance/index.vue'),
}

// Layout.vue mounts these on every page, so they live in the theme entry chunk already —
// register the same static modules; a dynamic import here could never split them out.
const STATIC_GLOBALS: Record<string, Component> = {
  TrinityGateways,
  GlobalHelp,
  CollectiveMind,
  RevolutAside,
  VitePressPossibilities,
}

/** Browser-safe registry — mirrors heaven/core componentGraph without loading the mind barrel at enhanceApp. */
function browserComponentNames(): readonly string[] {
  const globals = ['GlobalHelp', 'CollectiveMind', 'RevolutAside', 'VitePressPossibilities', 'TrinityGateways'] as const
  // Formerly the home list — the home is now the computed componentless theorem monograph; these
  // names are page-placed (STATIC_PAGE_SEED) or composed, and stay registered for those mounts.
  const pagePlaced = [
    'SiteOverview', 'QuantumLens', 'Compass', 'LivingTorus', 'HumanDesignBodyGraph', 'Merkaba', 'DoubleTorusExperience', 'Live', 'DeterminismProofs', 'CryptoCompare',
    'Hologram', 'Equilibrium', 'QuantumRadar', 'DeviceDashboard', 'BlockchainCompare', 'GlyphLabyrinth',
    'GlagoliticOcr', 'Monograph', 'HumanLens', 'PathGuide', 'QuantumClock', 'Nav358', 'ProofRenderer',
    'HologramMovie', 'KnowledgeAtlas', 'ElectromagneticRadiation', 'RealtimeTests', 'MatrixCube',
  ] as const
  const composed = [
    'Chart', 'DataTable', 'DecodedCard', 'DiamondDetail', 'DiamondIndex', 'LayersPanel', 'PaperDetail',
    'PaperIndex', 'ReferenceDetail', 'ReferenceIndex', 'UniversalPageTemplate', 'PowerLanding', 'StartHere',
    'AnalogField', 'ProbSim', 'DynSim', 'NetSim', 'HubCardGrid', 'TagBrowser', 'BulgarianHeritage',
    'BulgarianHistory', 'BulgarianEthnogenesis', 'SacredGeometry', 'Society', 'PlayLearn', 'Multidimensional',
    'QuantumConsole', 'McpTools', 'YinYang', 'ChakrasAura', 'HumanDesignBodyGraph', 'TaxonomyIcons', 'HarmonicMap', 'TamperingCost',
    'BoundaryAudit', 'A432', 'QuantumCircuit', 'CryptoChallenges', 'BlockchainCompare', 'ElectromagneticRadiation',
    'EncryptionTools', 'SslTestTools', 'MillenniumChallenge', 'ResearchIndex', 'QuantumTools', 'FusionVerify',
  ] as const
  return [...new Set([
    ...globals,
    ...pagePlaced,
    ...composed,
    ...Object.keys(OVERRIDES),
    ...Object.keys(COMPONENT_FOLD_LOADERS),
  ])]
}

async function componentNamesForRegistration(): Promise<readonly string[]> {
  if (typeof window !== 'undefined') return browserComponentNames()
  const { componentGraph } = await import('../../src/heaven/core/index')
  return componentGraph().components
}

function gateComponent(name: string): Component {
  return defineComponent({
    name,
    inheritAttrs: true,
    props: {
      slug: { type: String, default: undefined },
      variant: { type: String, default: undefined },
    },
    setup(props, { attrs }) {
      const { locale } = useSiteLocale()
      const movieParts = () => [name, props.slug, props.variant] as const
      const cardTitle = () => componentDisplayName(locale.value, name)
      return () =>
        h(
          UiCardShell,
          {
            ...attrs,
            class: ['mind-component', attrs.class].filter(Boolean),
            ghost: true,
            component: name,
            seedParts: movieParts(),
            title: cardTitle(),
            // Every component animates: its content-addressed projection of the one field.
            movieApp: componentProjectionFor(name),
            'data-slug': props.slug,
            'data-variant': props.variant,
          },
          {
            default: () =>
              h('output', {
                class: 'display-dual-gate',
                'data-logic': `component:${name}`,
                'data-target': `component:${name}`,
                'aria-hidden': 'true',
              }),
          },
        )
    },
  })
}

function decodedComponent(name: string, loader: import('./component-folds').AnyFoldLoader): Component {
  return defineAsyncComponent({
    loader: async () =>
      defineComponent({
        name,
        inheritAttrs: true,
        setup(_, { attrs }) {
          const route = useRoute()
          const view = ref<DecodedFoldView | null>(null)
          const load = async () => {
            const locale = localeFromRoute(route.path)
            const raw = await invokeFoldLoader(loader, locale)
            view.value = await withCrosslinks(name, raw, locale)
          }
          watch(() => route.path, () => void load(), { immediate: true })
          // A fold that names its projection keeps it; every other decoded card animates its content-addressed one.
          return () => (view.value ? h(DecodedCard, { ...view.value, ...attrs, movieApp: view.value.movieApp ?? componentProjectionFor(name) }) : null)
        },
      }),
  })
}

export async function registerVitePressComponents(app: App): Promise<void> {
  if (!app.component('LinkedHeroCard')) app.component('LinkedHeroCard', LinkedHeroCard)
  if (!app.component('HubCardGrid')) app.component('HubCardGrid', HubCardGrid)
  if (!app.component('TagBrowser')) app.component('TagBrowser', TagBrowser)
  if (!app.component('TheoremSupport')) app.component('TheoremSupport', TheoremSupport) // the support link + scan-to-pay QR on every theorem
  for (const name of await componentNamesForRegistration()) {
    if (THEME_RESERVED.has(name) || app.component(name)) continue
    const staticGlobal = STATIC_GLOBALS[name]
    if (staticGlobal) {
      app.component(name, staticGlobal)
      continue
    }
    const override = OVERRIDES[name]
    if (override) {
      app.component(name, defineAsyncComponent(override))
      continue
    }
    const foldLoader = COMPONENT_FOLD_LOADERS[name]
    app.component(name, foldLoader ? decodedComponent(name, foldLoader) : gateComponent(name))
  }
}

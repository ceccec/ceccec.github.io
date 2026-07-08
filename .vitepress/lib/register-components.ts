// Register componentGraph names globally — DecodedCard folds, LivingTorus canvas, or thin gate fallback.
import { defineAsyncComponent, defineComponent, h, ref, watch, type App, type Component } from 'vue'
import { useRoute } from 'vitepress'
import DecodedCard from '../theme/components/DecodedCard.vue'
import UiCardShell from '../theme/components/UiCardShell.vue'
import LinkedHeroCard from '../theme/components/LinkedHeroCard.vue'
import HubCardGrid from '../theme/components/HubCardGrid.vue'
import TagBrowser from '../theme/components/TagBrowser.vue'
import VoidSidebar from '../theme/components/VoidSidebar.vue'
import TrinityGateways from '../theme/components/TrinityGateways.vue'
import GlobalHelp from '../theme/components/GlobalHelp.vue'
import CollectiveMind from '../theme/components/CollectiveMind.vue'
import RevolutAside from '../theme/components/RevolutAside.vue'
import VitePressPossibilities from '../theme/components/VitePressPossibilities.vue'
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
  Corpus: () => import('../theme/components/CorpusFold.vue'),
  LivingTorus: () => import('../theme/components/LivingTorus.vue'),
  Merkaba: () => import('../../src/render/merkaba/index.vue'),
  DoubleTorusExperience: () => import('../theme/components/DoubleTorusExperience.vue'),
}

// Layout.vue mounts these on every page, so they live in the theme entry chunk already —
// register the same static modules; a dynamic import here could never split them out.
const STATIC_GLOBALS: Record<string, Component> = {
  VoidSidebar,
  TrinityGateways,
  GlobalHelp,
  CollectiveMind,
  RevolutAside,
  VitePressPossibilities,
}

/** Browser-safe registry — mirrors heaven/core componentGraph without loading the mind barrel at enhanceApp. */
function browserComponentNames(): readonly string[] {
  const globals = ['GlobalHelp', 'CollectiveMind', 'RevolutAside', 'VitePressPossibilities', 'VoidSidebar', 'TrinityGateways'] as const
  const home = [
    'SiteOverview', 'QuantumLens', 'Compass', 'LivingTorus', 'Merkaba', 'DoubleTorusExperience', 'Live', 'DeterminismProofs', 'CryptoCompare',
    'Hologram', 'Equilibrium', 'QuantumRadar', 'DeviceDashboard', 'BlockchainCompare', 'GlyphLabyrinth',
    'GlagoliticOcr', 'Monograph', 'HumanLens', 'PathGuide', 'QuantumClock', 'Nav358', 'ProofRenderer',
    'HologramMovie', 'KnowledgeAtlas', 'ElectromagneticRadiation', 'RealtimeTests', 'MatrixCube',
  ] as const
  const composed = [
    'Chart', 'DataTable', 'DecodedCard', 'DiamondDetail', 'DiamondIndex', 'LayersPanel', 'PaperDetail',
    'PaperIndex', 'ReferenceDetail', 'ReferenceIndex', 'UniversalPageTemplate', 'PowerLanding', 'StartHere',
    'AnalogField', 'ProbSim', 'DynSim', 'NetSim', 'HubCardGrid', 'TagBrowser', 'BulgarianHeritage',
    'BulgarianHistory', 'BulgarianEthnogenesis', 'SacredGeometry', 'Society', 'PlayLearn', 'Multidimensional',
    'QuantumConsole', 'McpTools', 'YinYang', 'ChakrasAura', 'TaxonomyIcons', 'HarmonicMap', 'TamperingCost',
    'BoundaryAudit', 'A432', 'QuantumCircuit', 'CryptoChallenges', 'BlockchainCompare', 'ElectromagneticRadiation',
  ] as const
  return [...new Set([
    ...globals,
    ...home,
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

// Register componentGraph names globally — DecodedCard folds, LivingTorus canvas, or thin gate fallback.
import { defineAsyncComponent, defineComponent, h, type App, type Component } from 'vue'
import DecodedCard from '../theme/components/DecodedCard.vue'
import UiCardShell from '../theme/components/UiCardShell.vue'
import { componentDisplayName, useSiteLocale } from './mounts'
import { COMPONENT_FOLD_LOADERS, withCrosslinks, type DecodedFoldView } from './component-folds'

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
  'DigitMotion',
  'SevenStarRosetta',
])

const OVERRIDES: Record<string, () => Promise<{ default: Component }>> = {
  Monograph: () => import('../theme/components/MonographFold.vue'),
  Corpus: () => import('../theme/components/CorpusFold.vue'),
  LivingTorus: () => import('../theme/components/LivingTorus.vue'),
  VoidSidebar: () => import('../theme/components/VoidSidebar.vue'),
  TrinityGateways: () => import('../theme/components/TrinityGateways.vue'),
  GlobalHelp: () => import('../theme/components/GlobalHelp.vue'),
  CollectiveMind: () => import('../theme/components/CollectiveMind.vue'),
  RevolutAside: () => import('../theme/components/RevolutAside.vue'),
  VitePressPossibilities: () => import('../theme/components/VitePressPossibilities.vue'),
  ForgeMaxTamperBar: () => import('../theme/components/ForgeMaxTamperBar.vue'),
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

function decodedComponent(name: string, loader: () => Promise<DecodedFoldView>): Component {
  return defineAsyncComponent({
    loader: async () => {
      const fold = await withCrosslinks(name, await loader())
      return defineComponent({
        name,
        inheritAttrs: true,
        setup(_, { attrs }) {
          return () => h(DecodedCard, { ...fold, ...attrs })
        },
      })
    },
  })
}

export async function registerVitePressComponents(app: App): Promise<void> {
  const { componentGraph } = await import('../../src/heaven/core/index')
  for (const name of componentGraph().components) {
    if (THEME_RESERVED.has(name) || app.component(name)) continue
    const override = OVERRIDES[name]
    if (override) {
      app.component(name, defineAsyncComponent(override))
      continue
    }
    const foldLoader = COMPONENT_FOLD_LOADERS[name]
    app.component(name, foldLoader ? decodedComponent(name, foldLoader) : gateComponent(name))
  }
}

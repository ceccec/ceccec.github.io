// Register componentGraph names globally — DecodedCard folds, LivingTorus canvas, or thin gate fallback.
import { defineAsyncComponent, defineComponent, h, type App, type Component } from 'vue'
import { useRoute } from 'vitepress'
import DecodedCard from '../theme/components/DecodedCard.vue'
import CardBackgroundMovie from '../theme/components/CardBackgroundMovie.vue'
import { cardMovieColorVars, cardMovieSeed } from './hero-movie'
import { COMPONENT_FOLD_LOADERS, withCrosslinks, type DecodedFoldView } from './component-folds'

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
      const route = useRoute()
      const seed = cardMovieSeed([name, props.slug, props.variant])
      const cardStyle = () => cardMovieColorVars(route.path, seed)
      return () =>
        h('article', {
          ...attrs,
          class: ['ui-card ui-card--ghost mind-component', attrs.class].filter(Boolean),
          style: cardStyle(),
          'data-shadcn': 'card',
          'data-component': name,
          ...(props.slug ? { 'data-slug': props.slug } : {}),
          ...(props.variant ? { 'data-variant': props.variant } : {}),
        }, [
          h(CardBackgroundMovie, { seed, title: name }),
          h('div', { class: 'ui-card__content' }, [
            h('output', {
              class: 'display-dual-gate',
              'data-logic': `component:${name}`,
              'data-target': `component:${name}`,
              'aria-hidden': 'true',
            }),
          ]),
        ])
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
    if (app.component(name)) continue
    const override = OVERRIDES[name]
    if (override) {
      app.component(name, defineAsyncComponent(override))
      continue
    }
    const foldLoader = COMPONENT_FOLD_LOADERS[name]
    app.component(name, foldLoader ? decodedComponent(name, foldLoader) : gateComponent(name))
  }
}

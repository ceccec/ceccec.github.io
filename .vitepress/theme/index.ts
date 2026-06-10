// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import ConceptCommands from './components/ConceptCommands.vue'
import DoubleTorusExperience from './components/DoubleTorusExperience.vue'
import QuantumMind from './components/QuantumMind.vue'
import RevolutAside from './components/RevolutAside.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'aside-ads-before': () => h(RevolutAside),
    })
  },
  enhanceApp({ app }) {
    app.component('ConceptCommands', ConceptCommands)
    app.component('DoubleTorusExperience', DoubleTorusExperience)
    app.component('QuantumMind', QuantumMind)
    app.component('RevolutAside', RevolutAside)
  }
} satisfies Theme

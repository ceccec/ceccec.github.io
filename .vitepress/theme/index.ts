// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import ConceptCommands from './components/ConceptCommands.vue'
import DoubleTorusExperience from './components/DoubleTorusExperience.vue'
import LearnErpax from './components/LearnErpax.vue'
import McpTools from './components/McpTools.vue'
import QuantumConsole from './components/QuantumConsole.vue'
import QuantumMind from './components/QuantumMind.vue'
import RevolutAside from './components/RevolutAside.vue'
import SchoolCurriculum from './components/SchoolCurriculum.vue'
import VitePressPossibilities from './components/VitePressPossibilities.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'aside-ads-before': () => h(RevolutAside),
      'aside-outline-before': () => h(VitePressPossibilities),
    })
  },
  enhanceApp({ app }) {
    app.component('ConceptCommands', ConceptCommands)
    app.component('DoubleTorusExperience', DoubleTorusExperience)
    app.component('LearnErpax', LearnErpax)
    app.component('McpTools', McpTools)
    app.component('QuantumConsole', QuantumConsole)
    app.component('QuantumMind', QuantumMind)
    app.component('RevolutAside', RevolutAside)
    app.component('SchoolCurriculum', SchoolCurriculum)
    app.component('VitePressPossibilities', VitePressPossibilities)
  }
} satisfies Theme

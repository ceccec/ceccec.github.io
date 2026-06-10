// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import CollectiveMind from './components/CollectiveMind.vue'
import ConceptCommands from './components/ConceptCommands.vue'
import DoubleTorusExperience from './components/DoubleTorusExperience.vue'
import GlobalHelp from './components/GlobalHelp.vue'
import GovernanceVote from './components/GovernanceVote.vue'
import LearnErpax from './components/LearnErpax.vue'
import McpTools from './components/McpTools.vue'
import QuantumConsole from './components/QuantumConsole.vue'
import QuantumMind from './components/QuantumMind.vue'
import RevolutAside from './components/RevolutAside.vue'
import SacredSymbols from './components/SacredSymbols.vue'
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
      // Intelligent help + collective-mind self-development folded into every page.
      'layout-bottom': () => [h(GlobalHelp), h(CollectiveMind)],
    })
  },
  enhanceApp({ app }) {
    app.component('CollectiveMind', CollectiveMind)
    app.component('ConceptCommands', ConceptCommands)
    app.component('DoubleTorusExperience', DoubleTorusExperience)
    app.component('GlobalHelp', GlobalHelp)
    app.component('GovernanceVote', GovernanceVote)
    app.component('LearnErpax', LearnErpax)
    app.component('McpTools', McpTools)
    app.component('QuantumConsole', QuantumConsole)
    app.component('QuantumMind', QuantumMind)
    app.component('RevolutAside', RevolutAside)
    app.component('SacredSymbols', SacredSymbols)
    app.component('SchoolCurriculum', SchoolCurriculum)
    app.component('VitePressPossibilities', VitePressPossibilities)
  }
} satisfies Theme

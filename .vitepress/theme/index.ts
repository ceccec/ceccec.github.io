// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import ErpaxCommands from './components/ErpaxCommands.vue'
import QuantumMind from './components/QuantumMind.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app }) {
    app.component('ErpaxCommands', ErpaxCommands)
    app.component('QuantumMind', QuantumMind)
  }
} satisfies Theme

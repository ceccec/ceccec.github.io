// VitePress requires the custom theme entry at .vitepress/theme/index.ts — thin shell only.
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import ClientOnly from './components/ClientOnly.vue'
import DigitMotion from '../../src/water/digit/index.vue'
import { registerVitePressComponents } from '../lib/register-components'
import './hero-glass.css'
import './universal-page.css'
import UniversalPageTemplate from './components/UniversalPageTemplate.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp?.(ctx)
    void registerVitePressComponents(ctx.app)
    ctx.app.component('ClientOnly', ClientOnly)
    ctx.app.component('UniversalPageTemplate', UniversalPageTemplate)

    const { app } = ctx
    app.component('DigitMotion', DigitMotion)
    app.component('SevenStarRosetta', DigitMotion)

    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {})
      })
    }
  },
} satisfies Theme

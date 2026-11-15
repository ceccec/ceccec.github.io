import { defineAsyncComponent } from 'vue'
// VitePress requires the custom theme entry at .vitepress/theme/index.ts — thin shell only.
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import '../../src/ui/tokens.css'
import '../../src/render/ui/tokens.css'
import '../../src/render/ui/style.css'
// the one animation SDK — every number the canvases paint with, as custom properties the painters bind from
import '../../packages/double-torus/double-torus.scss'
import { registerShadcnUi } from '../lib/shadcn-ui.ts'
import './hero-glass.css'
import './universal-page.css'
import './computed-typography.css'
// THE THEME REGISTERS EXACTLY THE TAGS THE PAGES WRITE: the feed and the monographs write <LeanTheoremIndex/>, the
// posts write <LeanTheoremPages/>. Both load async, so neither reaches the chunk every visitor loads first. ClientOnly
// stays eager: it is a wrapper with no render-barrel import. The layout imports its own chrome.
import ClientOnly from './components/ClientOnly.vue'
const LeanTheoremIndex = defineAsyncComponent(() => import('./components/LeanTheoremIndex.vue'))
const LeanTheoremPages = defineAsyncComponent(() => import('./components/LeanTheoremPages.vue'))

export default {
  extends: DefaultTheme,
  Layout,
  async enhanceApp(ctx) {
    await DefaultTheme.enhanceApp?.(ctx)
    registerShadcnUi(ctx.app)
    if (!ctx.app.component('ClientOnly')) ctx.app.component('ClientOnly', ClientOnly)
    if (!ctx.app.component('LeanTheoremPages')) ctx.app.component('LeanTheoremPages', LeanTheoremPages)
    if (!ctx.app.component('LeanTheoremIndex')) ctx.app.component('LeanTheoremIndex', LeanTheoremIndex)

    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {})
      })
    }
  },
} satisfies Theme

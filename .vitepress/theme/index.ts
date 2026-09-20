import { defineAsyncComponent } from 'vue'
// VitePress requires the custom theme entry at .vitepress/theme/index.ts — thin shell only.
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import DigitMotion from '../../src/water/digit/index.vue'
import { registerVitePressComponents } from '../lib/register-components'
import '../../src/ui/tokens.css'
import '../../src/render/ui/tokens.css'
import '../../src/render/ui/style.css'
import { registerShadcnUi } from '../lib/shadcn-ui.ts'
import './hero-glass.css'
import './universal-page.css'
import './computed-typography.css'
// One VitePress component set — register from the shared barrel only.
import {
  ClientOnly,
  UniversalPageTemplate,
  ModelCardPages,
  LeanTheoremIndex,
  LeanTheoremPages,
  TheoremPages,
  DomainProofPages,
  TheoremIndex,
  SourceAtlas,
  ThreeClosure,
} from './components/index.ts'

export default {
  extends: DefaultTheme,
  Layout,
  async enhanceApp(ctx) {
    await DefaultTheme.enhanceApp?.(ctx)
    registerShadcnUi(ctx.app)
    // Defer bulk registry — hero movie must mount before 80+ gate components register.
    void registerVitePressComponents(ctx.app)
    if (!ctx.app.component('ClientOnly')) ctx.app.component('ClientOnly', ClientOnly)
    if (!ctx.app.component('UniversalPageTemplate')) {
      ctx.app.component('UniversalPageTemplate', UniversalPageTemplate)
    }
    if (!ctx.app.component('ModelCardPages')) ctx.app.component('ModelCardPages', ModelCardPages)
    if (!ctx.app.component('TheoremPages')) ctx.app.component('TheoremPages', TheoremPages)
    if (!ctx.app.component('LeanTheoremPages')) ctx.app.component('LeanTheoremPages', LeanTheoremPages)
    if (!ctx.app.component('LeanTheoremIndex')) ctx.app.component('LeanTheoremIndex', LeanTheoremIndex)
    if (!ctx.app.component('DomainProofPages')) ctx.app.component('DomainProofPages', DomainProofPages)
    if (!ctx.app.component('TheoremIndex')) ctx.app.component('TheoremIndex', TheoremIndex)
    if (!ctx.app.component('SourceAtlas')) ctx.app.component('SourceAtlas', SourceAtlas)
    // ASYNC ON PURPOSE. Registered eagerly this component put 8 KB into the ENTRY chunk — the bundle
    // every visitor downloads before anything paints — to serve one page. build.app-chunk-kilobytes
    // caught it at 492 against 484, which is the ratchet doing exactly its job. It loads when /hands/ does.
    if (!ctx.app.component('HandsFold')) ctx.app.component('HandsFold', defineAsyncComponent(() => import('./components/HandsFold.vue')))
    if (!ctx.app.component('ThreeClosure')) ctx.app.component('ThreeClosure', ThreeClosure)
    if (!ctx.app.component('DigitMotion')) ctx.app.component('DigitMotion', DigitMotion)
    if (!ctx.app.component('SevenStarRosetta')) ctx.app.component('SevenStarRosetta', DigitMotion)

    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {})
      })
    }
  },
} satisfies Theme

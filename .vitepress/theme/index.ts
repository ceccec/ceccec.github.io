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
  TheoremPages,
  DomainProofPages,
  TheoremIndex,
  SourceAtlas,
} from './components/index.ts'
import UniversalSolverInterface from '../../src/quantum/solver/browser/index.vue'

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
    if (!ctx.app.component('DomainProofPages')) ctx.app.component('DomainProofPages', DomainProofPages)
    if (!ctx.app.component('TheoremIndex')) ctx.app.component('TheoremIndex', TheoremIndex)
    if (!ctx.app.component('SourceAtlas')) ctx.app.component('SourceAtlas', SourceAtlas)
    if (!ctx.app.component('DigitMotion')) ctx.app.component('DigitMotion', DigitMotion)
    if (!ctx.app.component('SevenStarRosetta')) ctx.app.component('SevenStarRosetta', DigitMotion)
    if (!ctx.app.component('UniversalSolverInterface')) ctx.app.component('UniversalSolverInterface', UniversalSolverInterface)

    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {})
      })
    }
  },
} satisfies Theme

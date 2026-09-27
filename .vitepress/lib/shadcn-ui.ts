import { defineAsyncComponent, type App, type Component } from 'vue'
import { cn } from './cn.ts'
import UiBadge from '../theme/components/ui/Badge.vue'
import UiButton from '../theme/components/ui/Button.vue'
import UiCard from '../theme/components/ui/Card.vue'
import UiCardContent from '../theme/components/ui/CardContent.vue'

export { cn }

export {
  UiBadge,
  UiButton,
  UiCard,
  UiCardContent,
}

// TWELVE OF THESE TWENTY-THREE WERE REGISTERED AND USED NOWHERE, IN THE BUNDLE EVERY VISITOR FETCHES FIRST.
// Measured across 450 files with the ui/ folder itself excluded: Accordion, AccordionItem, AspectRatio,
// Avatar, Checkbox, Collapsible, Input, Label, Skeleton, Switch, Textarea and Tooltip appear in no template
// anywhere in .vitepress or src. Registering a component means importing it, and these are the reka-ui-heavy
// ones — Tooltip alone drags @floating-ui in — so they sat in the entry closure's shell, which
// build.shell-machinery-kilobytes exists to hold flat. That floor had already gone red at 837 against 836
// before this wave, and the cause was here: not a theorem, not a formula, just registration of things
// nothing renders.
//
// THE .vue FILES STAY ON DISK. Nothing is lost and nothing is purged — an unreferenced component is simply
// not bundled, so keeping them costs a reader nothing and costs a visitor nothing. Add the import and the
// REGISTRY line back the moment a template uses one; the cost is only ever paid for what renders.
// REGISTERED LAZILY, BECAUSE REGISTERING IS IMPORTING AND THIS MODULE IS IN THE ENTRY CHUNK.
// theme/index.ts imports registerShadcnUi statically, so every name this file imports lands in the one file
// every visitor downloads before anything paints. That was tolerable while these seven were thin wrappers
// over a vendor chunk; owning the code moved their weight here and the entry chunk went 228 → 231 KiB, which
// build.app-chunk-kilobytes refused — correctly, and the fix is not to raise it.
//
// These seven are the low-traffic ones, measured: Separator appears in 8 files, Alert in 15, Tabs in 2,
// Progress in 1 — against Badge in 943 built pages and Card in 1038, which stay eager because deferring what
// nearly every page renders trades one problem for a worse one. A lazy registration still renders under SSR
// (renderToString awaits async components) and still resolves in markdown; it just is not in the entry file.
//
// The Tabs family is no longer re-exported either: a barrel export is a static edge whatever the REGISTRY
// does, and DoubleTorusExperience was the only importer. It takes them from their own files now.
const LAZY_REGISTRY: Record<string, Component> = {
  UiAlert: defineAsyncComponent(() => import('../theme/components/ui/Alert.vue')),
  UiProgress: defineAsyncComponent(() => import('../theme/components/ui/Progress.vue')),
  UiSeparator: defineAsyncComponent(() => import('../theme/components/ui/Separator.vue')),
  UiTabs: defineAsyncComponent(() => import('../theme/components/ui/Tabs.vue')),
  UiTabsList: defineAsyncComponent(() => import('../theme/components/ui/TabsList.vue')),
  UiTabsTrigger: defineAsyncComponent(() => import('../theme/components/ui/TabsTrigger.vue')),
  UiTabsContent: defineAsyncComponent(() => import('../theme/components/ui/TabsContent.vue')),
}

const REGISTRY: Record<string, Component> = {
  UiButton,
  UiBadge,
  UiCard,
  UiCardContent,
}

/** Register shadcn primitives on the VitePress app — Ui-prefixed to avoid VitePress collisions. */
export function registerShadcnUi(app: App) {
  for (const [name, component] of Object.entries({ ...REGISTRY, ...LAZY_REGISTRY })) {
    if (!app.component(name)) app.component(name, component)
  }
}

/**
 * `fused` COMPARED A COUNT TO A TYPED 18 AND HAD BEEN FALSE FOR AS LONG AS BOTH EXISTED.
 *
 * The registry held 23 components; `registered === (9 * 2)` asked whether it held 18, so the fold reported
 * not-fused whatever the app did, and nothing read it closely enough to notice. A count compared to a
 * literal cannot measure a roster — it measures whether someone updated the literal.
 *
 * What is actually worth asserting is that every name this module registers IS on the app, which is the
 * claim the function's name makes and is refutable by removing a registration. The counts are published
 * beside it so a reader can see the split rather than infer it, and the statement no longer credits
 * radix-vue: no component this repo renders imports it any more.
 */
export function shadcnVitepressComponentsFused(app?: App) {
  const eager = Object.keys(REGISTRY)
  const lazy = Object.keys(LAZY_REGISTRY)
  const names = [...eager, ...lazy]
  const onApp = app ? names.every((name) => app.component(name)) : true
  return {
    fused: onApp,
    primitiveCount: names.length,
    eagerCount: eager.length,
    lazyCount: lazy.length,
    registered: names,
    statement:
      `shadcn graph fused with VitePress: ${names.length} primitives in repo idiom (ui-* BEM, --ich-* / --vp-* tokens), registered as Ui* on enhanceApp — ${eager.length} eager (Badge and Card render on nearly every page) and ${lazy.length} lazy, so the entry chunk carries only what nearly every page needs. Owned code, no vendor primitive: nothing rendered here imports radix-vue.`,
  }
}

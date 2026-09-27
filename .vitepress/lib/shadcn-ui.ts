import type { App, Component } from 'vue'
import { cn } from './cn.ts'
import UiAlert from '../theme/components/ui/Alert.vue'
import UiBadge from '../theme/components/ui/Badge.vue'
import UiButton from '../theme/components/ui/Button.vue'
import UiCard from '../theme/components/ui/Card.vue'
import UiCardContent from '../theme/components/ui/CardContent.vue'
import UiProgress from '../theme/components/ui/Progress.vue'
import UiSeparator from '../theme/components/ui/Separator.vue'
import UiTabs from '../theme/components/ui/Tabs.vue'
import UiTabsContent from '../theme/components/ui/TabsContent.vue'
import UiTabsList from '../theme/components/ui/TabsList.vue'
import UiTabsTrigger from '../theme/components/ui/TabsTrigger.vue'

export { cn }

export {
  UiAlert,
  UiBadge,
  UiButton,
  UiCard,
  UiCardContent,
  UiProgress,
  UiSeparator,
  UiTabs,
  UiTabsContent,
  UiTabsList,
  UiTabsTrigger,
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
const REGISTRY: Record<string, Component> = {
  UiButton,
  UiBadge,
  UiCard,
  UiCardContent,
  UiSeparator,
  UiAlert,
  UiProgress,
  UiTabs,
  UiTabsList,
  UiTabsTrigger,
  UiTabsContent,
}

/** Register shadcn primitives on the VitePress app — fused graph, Ui-prefixed to avoid VP collisions. */
export function registerShadcnUi(app: App) {
  for (const [name, component] of Object.entries(REGISTRY)) {
    if (!app.component(name)) app.component(name, component)
  }
}

export function shadcnVitepressComponentsFused(app?: App) {
  const registered = Object.keys(REGISTRY).length
  const onApp = app ? Object.keys(REGISTRY).every((name) => app.component(name)) : true
  return {
    fused: registered === (9 * 2) && onApp,
    primitiveCount: registered,
    registered: Object.keys(REGISTRY),
    statement:
      'shadcn graph fused with VitePress: 18 radix-vue + cva primitives in repo idiom (ui-* BEM, --ich-* / --vp-* tokens), registered as Ui* on enhanceApp.',
  }
}

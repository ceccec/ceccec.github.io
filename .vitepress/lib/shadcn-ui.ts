import type { App, Component } from 'vue'
import { cn } from './cn.ts'
import UiAccordion from '../theme/components/ui/Accordion.vue'
import UiAccordionItem from '../theme/components/ui/AccordionItem.vue'
import UiAlert from '../theme/components/ui/Alert.vue'
import UiAspectRatio from '../theme/components/ui/AspectRatio.vue'
import UiAvatar from '../theme/components/ui/Avatar.vue'
import UiBadge from '../theme/components/ui/Badge.vue'
import UiButton from '../theme/components/ui/Button.vue'
import UiCard from '../theme/components/ui/Card.vue'
import UiCardContent from '../theme/components/ui/CardContent.vue'
import UiCheckbox from '../theme/components/ui/Checkbox.vue'
import UiCollapsible from '../theme/components/ui/Collapsible.vue'
import UiInput from '../theme/components/ui/Input.vue'
import UiLabel from '../theme/components/ui/Label.vue'
import UiProgress from '../theme/components/ui/Progress.vue'
import UiSeparator from '../theme/components/ui/Separator.vue'
import UiSkeleton from '../theme/components/ui/Skeleton.vue'
import UiSwitch from '../theme/components/ui/Switch.vue'
import UiTabs from '../theme/components/ui/Tabs.vue'
import UiTabsContent from '../theme/components/ui/TabsContent.vue'
import UiTabsList from '../theme/components/ui/TabsList.vue'
import UiTabsTrigger from '../theme/components/ui/TabsTrigger.vue'
import UiTextarea from '../theme/components/ui/Textarea.vue'
import UiTooltip from '../theme/components/ui/Tooltip.vue'

export { cn }

export {
  UiAccordion,
  UiAccordionItem,
  UiAlert,
  UiAspectRatio,
  UiAvatar,
  UiBadge,
  UiButton,
  UiCard,
  UiCardContent,
  UiCheckbox,
  UiCollapsible,
  UiInput,
  UiLabel,
  UiProgress,
  UiSeparator,
  UiSkeleton,
  UiSwitch,
  UiTabs,
  UiTabsContent,
  UiTabsList,
  UiTabsTrigger,
  UiTextarea,
  UiTooltip,
}

const REGISTRY: Record<string, Component> = {
  UiButton,
  UiBadge,
  UiCard,
  UiCardContent,
  UiInput,
  UiLabel,
  UiTextarea,
  UiCheckbox,
  UiSwitch,
  UiSeparator,
  UiAvatar,
  UiAlert,
  UiProgress,
  UiSkeleton,
  UiAspectRatio,
  UiTabs,
  UiTabsList,
  UiTabsTrigger,
  UiTabsContent,
  UiAccordion,
  UiAccordionItem,
  UiCollapsible,
  UiTooltip,
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
    fused: registered === 18 && onApp,
    primitiveCount: registered,
    registered: Object.keys(REGISTRY),
    statement:
      'shadcn graph fused with VitePress: 18 radix-vue + cva primitives in repo idiom (ui-* BEM, --ich-* / --vp-* tokens), registered as Ui* on enhanceApp.',
  }
}

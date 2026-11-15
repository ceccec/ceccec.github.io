import { cn } from './cn.ts'
import UiCard from '../theme/components/ui/Card.vue'
import UiCardContent from '../theme/components/ui/CardContent.vue'

export { cn }

// THE TWO PRIMITIVES A PAGE STILL REACHES, IMPORTED BY THE ONE COMPONENT THAT USES THEM (UiCardShell). Nothing is
// registered globally any more: a global registration let any markdown write <UiBadge/> and the like, and since the
// site became a Lean blog no page writes one. The other 21 primitives, and the 91 src views that used them, were
// purged on 2026-11-16 (verify:components counts every component no page reaches).
export { UiCard, UiCardContent }

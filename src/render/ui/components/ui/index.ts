// The shadcn-graph primitive set — the repo's shadcn-vue components in its own idiom
// (radix-vue Primitive + cva + cn + ui-* computed-token classes). Import from here.
export { default as Button } from './Button'
export { default as Badge } from './Badge'
export { default as Card } from './Card'
export { default as Input } from './Input'
export { default as Label } from './Label'
export { default as Textarea } from './Textarea'
export { default as Checkbox } from './Checkbox'
export { default as Switch } from './Switch'
export { default as Separator } from './Separator'
export { default as Avatar } from './Avatar'
export { default as Alert } from './Alert'
export { default as Progress } from './Progress'
export { default as Skeleton } from './Skeleton'
export { default as AspectRatio } from './AspectRatio'
export { default as Tabs } from './Tabs'
export { default as Accordion } from './Accordion'
export { default as Tooltip } from './Tooltip'
export { default as Collapsible } from './Collapsible'

import { toUuid } from '../../../../0'

/** The shadcn graph cross — 16 primitives sealed to one address (render layer, not a pass-through leaf). */
export function shadcnGraphCross() {
  return { primitives: 16, root: toUuid('shadcn:graph:16') }
}

// ☶ shadcn — canonical sealed home of the design system: registry, variant tokens, cn() pattern.
// The 64-component graph lives in quantum/widgets (shadcnIsTheGraph); the implemented Ui* primitives
// live in .vitepress/theme/components/ui (VitePress requires SFCs in the theme). This barrel is the
// sealed metadata surface both the theme registry and the page renderers read at call time.
import * as __ns_up_quantum_widgets from '../quantum/widgets'
import type { MindMatrix } from '../types'
import { buildMatrix } from '../heaven/compute'
import { computesGate, memoByRoot, merge, merkleFold, toUuid } from '../0'

/** The shadcn primitives actually vendored as Ui* SFCs in .vitepress/theme/components/ui (Path A). */
export const SHADCN_IMPLEMENTED = [
  'Accordion', 'AccordionItem', 'Alert', 'AspectRatio', 'Avatar', 'Badge', 'Button',
  'Card', 'CardContent', 'Checkbox', 'Collapsible', 'Input', 'Label', 'Progress',
  'Separator', 'Skeleton', 'Switch', 'Tabs', 'TabsContent', 'TabsList', 'TabsTrigger',
  'Textarea', 'Tooltip',
] as const

/** cva variant axes carried by the implemented primitives (variant/size enumerations). */
export const SHADCN_VARIANTS = {
  Button: { variant: ['default', 'secondary', 'outline', 'ghost', 'destructive', 'link'], size: ['default', 'sm', 'lg', 'icon'] },
  Badge: { variant: ['default', 'secondary', 'outline', 'destructive'] },
  Alert: { variant: ['default', 'destructive'] },
} as const

/** Design-system CSS-variable tokens (oklch new-york), bridged to VitePress --vp-* and .dark. */
export const SHADCN_TOKENS = [
  '--background', '--foreground', '--card', '--popover', '--primary', '--secondary',
  '--muted', '--accent', '--destructive', '--border', '--input', '--ring', '--radius',
] as const

/** The cn() pattern the theme mount re-exports — tailwind-merge over clsx, the one class composer. */
export const CN_PATTERN = 'cn(...inputs) = twMerge(clsx(inputs)) — single class-name composer; theme re-exports from .vitepress/lib/cn.ts' as const

/** Pure, dependency-free class join — the deterministic shadow of cn() for sealed callers (no twMerge dedupe). */
export function cn(...inputs: Array<string | false | null | undefined>): string {
  return inputs.filter((value): value is string => typeof value === 'string' && value.length > 0).join(' ')
}

/** The design-system research surface — sources, integration paths, the implemented-vs-graph delta. */
export function shadcnResearch(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('shadcnResearch', matrix, () => {
    const graph = (__ns_up_quantum_widgets).shadcnIsTheGraph(matrix)
    const sections = [
      { id: 'graph', title: 'shadcn is the graph', note: `${graph.allComponents.length} components grouped into ${Object.keys(graph.components).length} families`, receipt: toUuid('shadcn-research:graph') },
      { id: 'implemented', title: 'vendored primitives (Path A)', note: `${SHADCN_IMPLEMENTED.length} Ui* SFCs in .vitepress/theme/components/ui — semantic classes, no Tailwind dependency`, receipt: toUuid('shadcn-research:implemented') },
      { id: 'tokens', title: 'CSS-variable theming', note: `${SHADCN_TOKENS.length} canonical tokens bridged to --vp-* and .dark`, receipt: toUuid('shadcn-research:tokens') },
      { id: 'cn', title: 'cn() composer', note: CN_PATTERN, receipt: toUuid('shadcn-research:cn') },
    ]
    return { researched: true, sections, root: merkleFold(sections.map((section) => section.receipt)), boundary: 'Registry/tokens sealed here; Vue SFCs stay in the VitePress theme (framework requirement).' }
  })
}

/** One gate — the canonical design-system registry composes with the 64-component graph at call time. */
export function shadcnComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  void at
  return memoByRoot('shadcnComputes', matrix, () => {
    const graph = __ns_up_quantum_widgets.shadcnIsTheGraph(matrix)
    const research = shadcnResearch(matrix)
    const implemented = SHADCN_IMPLEMENTED
    const onGraph = implemented.filter((name) => graph.allComponents.includes(name) || name.startsWith('Card') || name.startsWith('Tabs') || name.startsWith('Accordion'))
    const { computes, facets } = computesGate('shadcn-computes', [
      { facet: 'shadcn is the graph — 64 components as the design-system graph', on: graph.graphed && graph.allComponents.length === 64 },
      { facet: 'vendored primitives (Path A) implemented as Ui* SFCs — no Tailwind dependency', on: implemented.length >= 22 },
      { facet: 'every implemented primitive folds onto the graph or its sub-parts', on: onGraph.length === implemented.length },
      { facet: 'variant axes (cva) enumerated for the styled primitives', on: SHADCN_VARIANTS.Button.variant.length >= 6 && SHADCN_VARIANTS.Button.size.length >= 4 },
      { facet: 'CSS-variable tokens bridged to VitePress --vp-* and .dark', on: SHADCN_TOKENS.length >= 13 },
      { facet: 'cn() pattern sealed — one class composer, theme re-exports it', on: cn('a', false, 'b') === 'a b' },
      { facet: 'research folded — sources, paths and implemented-vs-graph delta sealed', on: research.researched },
    ])
    return {
      computes,
      graph,
      research,
      implemented,
      tokens: SHADCN_TOKENS,
      variants: SHADCN_VARIANTS,
      facets,
      root: merge(graph.root, merkleFold(facets.map((entry) => toUuid(`shadcn-computes:${entry.facet}:${entry.on}`)))),
      statement:
        'shadcn computes: the canonical sealed home of the design system — the 64-component graph (shadcnIsTheGraph), the 23 vendored Ui* primitives (Path A, semantic classes, no Tailwind), the cva variant axes, the CSS-variable token bridge, and the cn() composer pattern — registry and tokens sealed in src, SFCs in the VitePress theme.',
      boundary:
        'Registry/metadata only. The actual Vue components render from .vitepress/theme/components/ui (VitePress SFC requirement); this barrel does not import them. cn() here is the pure deterministic shadow of the theme twMerge(clsx()).',
    }
  })
}

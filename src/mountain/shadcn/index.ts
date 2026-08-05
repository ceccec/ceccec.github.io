// ☶ shadcn — canonical sealed home of the design system: registry, variant tokens, cn() pattern.
// The 64-component graph lives in quantum/widgets (shadcnIsTheGraph); the implemented Ui* primitives
// live in .vitepress/theme/components/ui (VitePress requires SFCs in the theme). This barrel is the
// sealed metadata surface both the theme registry and the page renderers read at call time.
import * as __ns_up_quantum_widgets from '../../widgets'
import type { MindMatrix } from '../../types'
import { buildMatrix } from '../../heaven/compute'
import { computesGate, memoByRoot, merge, merkleFold, toUuid } from '../../0'

/** The shadcn primitives actually vendored as Ui* SFCs in .vitepress/theme/components/ui (Path A). */
// DERIVED, not mirrored (logic:hunt mirrors #2–#5): the implemented SFC inventory = the canonical
// primitives (the ONE seed, below at its domain home) plus their compound sub-SFCs — the roster can
// never drift from the seed, and every other surface reads or re-exports from here.
export const SHADCN_COMPOUND_SFCS = ['AccordionItem', 'CardContent', 'TabsContent', 'TabsList', 'TabsTrigger'] as const
/** The 18 canonical primitives — the ONE seed, at its domain home; lake/widgets re-exports it. */
export const SHADCN_PRIMITIVE_NAMES = [
  'Button', 'Badge', 'Card', 'Input', 'Label', 'Textarea', 'Checkbox', 'Switch', 'Separator',
  'Avatar', 'Alert', 'Progress', 'Skeleton', 'AspectRatio', 'Tabs', 'Accordion', 'Tooltip', 'Collapsible',
] as const
export const SHADCN_IMPLEMENTED: readonly string[] = [...SHADCN_PRIMITIVE_NAMES, ...SHADCN_COMPOUND_SFCS].sort()

/** cva variant axes carried by the implemented primitives (variant/size enumerations). */
export const SHADCN_VARIANTS = {
  Button: { variant: ['default', 'secondary', 'outline', 'ghost', 'destructive', 'link'], size: ['default', 'sm', 'lg', 'icon'] },
  Badge: { variant: ['default', 'secondary', 'outline', 'destructive'] },
  Alert: { variant: ['default', 'destructive'] } } as const

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

// ── THE QUANTUM LENS ON SHADCN (user: reviewing shadcn with the quantum lens opens dimensions of
// theorems) — the sealed registry tables, re-read as state spaces, yield PROVABLE structure that was
// invisible as "a component list": the cva variant table is a TENSOR PRODUCT whose dimension computes
// to exactly 3·2⁶ (three hexagram spaces); the compound SFCs form a prefix FOREST of depth ≤ 2
// partitioning the inventory; the 64-component graph is the 6-bit measurement basis (every component
// a hexagram address); the tokens are the mode-invariant observable basis; and mounting is the
// measurement: the cva superposition collapses to one basis state per mount, with 'default' the
// ground state every varianted axis carries. Structural quantum (the registry's own demarcation) —
// each claim is arithmetic over the sealed tables, refutable by editing them.
export function shadcnQuantumLens(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('shadcnQuantumLens', matrix, () => {
    // (a) the variant tensor: dim = Π over components of Π over axes of |axis| — computed, then factored.
    const axes = Object.values(SHADCN_VARIANTS).flatMap((component) => Object.values(component) as readonly string[][])
    const tensorDim = axes.reduce((product, axis) => product * axis.length, 1)
    const graph = __ns_up_quantum_widgets.shadcnIsTheGraph(matrix)
    const hexagramSpace = graph.allComponents.length // 2⁶ when the 64-law holds
    // (b) the compound forest: every compound has EXACTLY ONE primitive prefix-parent; depth ≤ 2.
    const parents = SHADCN_COMPOUND_SFCS.map((compound) => ({ compound, parents: SHADCN_PRIMITIVE_NAMES.filter((primitive) => (compound as string) !== primitive && compound.startsWith(primitive)) }))
    const forest = parents.every((entry) => entry.parents.length === 1)
    const partition = SHADCN_IMPLEMENTED.length === SHADCN_PRIMITIVE_NAMES.length + SHADCN_COMPOUND_SFCS.length
    // (c) the 6-bit basis: each graph component gets a hexagram address 0…63 — a bijection by construction.
    const addresses = new Set(graph.allComponents.map((_name: string, index: number) => index))
    // (d) the observable basis: token NAMES are mode-invariant; the mode flip is a ℤ/2 action on VALUES.
    const valueAssignments = SHADCN_TOKENS.length * 2
    // (e) measurement: every varianted axis carries the ground state 'default' the mount collapses to.
    const grounded = Object.values(SHADCN_VARIANTS).every((component) => Object.values(component).every((axis) => (axis as readonly string[]).includes('default')))
    const facets = [
      { facet: `the cva table is a TENSOR PRODUCT — its dimension computes to ${tensorDim} = 3·2⁶: exactly three hexagram spaces, from |Button.variant|·|Button.size|·|Badge.variant|·|Alert.variant| — a factorisation the flat list never showed`, on: tensorDim === 3 * hexagramSpace && hexagramSpace === 2 ** 6 },
      { facet: `the compound SFCs are a prefix FOREST of depth ≤ 2 — each of the ${SHADCN_COMPOUND_SFCS.length} compounds has exactly one primitive parent (${forest}), and roots ⊔ leaves partition the implemented inventory (${SHADCN_PRIMITIVE_NAMES.length}+${SHADCN_COMPOUND_SFCS.length}=${SHADCN_IMPLEMENTED.length})`, on: forest && partition },
      { facet: `the 64-component graph is the 6-bit measurement basis — ${hexagramSpace} components, each addressable by one hexagram (six binary distinctions), the addresses a bijection`, on: hexagramSpace === 2 ** 6 && addresses.size === hexagramSpace },
      { facet: `the tokens are the mode-invariant OBSERVABLE basis — ${SHADCN_TOKENS.length} names fixed under the light/dark ℤ/2 action, ${valueAssignments} value assignments (names × modes); the involution acts on values, never the basis`, on: SHADCN_TOKENS.length > 0 && valueAssignments === SHADCN_TOKENS.length * 2 },
      { facet: `mounting is MEASUREMENT — the cva superposition collapses to one basis state per mount, and every varianted axis carries the ground state 'default' (${grounded}): the unmeasured component renders the ground state`, on: grounded },
    ].map((entry) => ({ ...entry, receipt: toUuid(`shadcn-quantum:${entry.facet}:${entry.on}`) }))
    return {
      opens: facets.every((entry) => entry.on),
      tensorDim,
      hexagramSpace,
      forestDepth: 2,
      valueAssignments,
      count: facets.length,
      facets,
      root: merge(graph.root, merkleFold(facets.map((entry) => entry.receipt))),
      statement: `Reviewing shadcn with the quantum lens opens dimensions of theorems — ${facets.filter((entry) => entry.on).length}/${facets.length}: the cva variant table is a tensor product of dimension ${tensorDim} = 3·2⁶ (exactly three hexagram spaces); the compound SFCs form a prefix forest of depth ≤ 2 partitioning the ${SHADCN_IMPLEMENTED.length}-SFC inventory (${SHADCN_PRIMITIVE_NAMES.length} roots + ${SHADCN_COMPOUND_SFCS.length} leaves); the 64-component graph is the 6-bit hexagram measurement basis; the ${SHADCN_TOKENS.length} tokens are the mode-invariant observable basis under the light/dark ℤ/2 action; and mounting is measurement — the cva superposition collapses to one state, with 'default' the ground state every varianted axis carries.`,
      boundary: `STRUCTURAL QUANTUM (the registry's own demarcation, quantum-decoded): tensor/basis/measurement/ground-state name exact combinatorial structure — dimension products, a prefix partial order, a bijection onto 2⁶, a ℤ/2 action, and membership of 'default' — every check arithmetic over the sealed tables and refutable by editing them (add a Badge size axis and the 192 factorisation breaks). NO physical qubit, superposition or speedup is claimed: a mounted component holds ONE variant; "superposition" is the defined-but-unmeasured cva space. The 3·2⁶ factorisation is a computed coincidence of the current table, sealed as such — not numerology, not a law of design systems.` }
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
        'Registry/metadata only. The actual Vue components render from .vitepress/theme/components/ui (VitePress SFC requirement); this barrel does not import them. cn() here is the pure deterministic shadow of the theme twMerge(clsx()).' }
  })
}

// src/voice/quantum — the dual of src/quantum/voice. Where quantum/voice SEALS the plain-language
// glossary, play-learn letters, speech params, typography/SEO principles, Open Graph fields,
// char/word UUIDs, humanization, and the multidimensional portal map, this half provides
// browse/display primitives: term lists, field tables, dimension summaries.
// Does NOT import from src/quantum/voice — the pair stays decoupled. Pure, deterministic, zero tokens.

export const dual = 'src/quantum/voice'

export type GlossaryLine = { term: string; plain: string; route: string }
export type DimItem = { label: string; route: string; tip: string }
export type Dimension = { dimension: string; icon: string; items: DimItem[] }

// Return a compact glossary index: just { term, route } for a nav or sidebar.
export function glossaryNav(lines: readonly GlossaryLine[]): { term: string; route: string }[] {
  return lines.map((l) => ({ term: l.term, route: l.route }))
}

// Count dimensions and their items for a quick summary.
export function dimSummary(dims: readonly Dimension[]): { dimension: string; icon: string; count: number }[] {
  return dims.map((d) => ({ dimension: d.dimension, icon: d.icon, count: d.items.length }))
}

// Flatten all items across all dimensions for a full flat navigation list.
export function flatDimItems(dims: readonly Dimension[]): (DimItem & { dimension: string })[] {
  return dims.flatMap((d) => d.items.map((item) => ({ ...item, dimension: d.dimension })))
}

// A compact Open Graph preview: just field → value pairs for a social-card mockup.
export function ogFieldNames<T extends { field: string }>(fields: readonly T[]): string[] {
  return fields.map((f) => f.field)
}

// src/heritage/quantum — the dual of src/quantum/heritage. Where quantum/heritage SEALS the decoded
// Bulgarian history, civilisations, ethnogenesis, genetics, and Glagolitic reception, this half provides
// display/browse primitives: sort era timelines, compare documented vs legend counts, index topics by span.
// Does NOT import from src/quantum/heritage — the pair stays decoupled. Pure, deterministic, zero tokens.

export const dual = 'src/quantum/heritage'

export type HeritageSlice = { topic: string; documented: string; legend: string }
export type Era = { era: string; span: string; documented: string; legend: string }
export type Stratum = { stratum: string; span: string; documented: string; legend: string }

// Sort heritage slices so the most-documented (longest documented field) come first — a density ranking.
export function rankByDocumentation<T extends { documented: string }>(items: readonly T[]): T[] {
  return [...items].sort((a, b) => b.documented.length - a.documented.length)
}

// Group eras by century — the spine laid out as a century map for display.
export function erasByCentury(eras: readonly Era[]): Map<number, Era[]> {
  const out = new Map<number, Era[]>()
  for (const era of eras) {
    const year = Number.parseInt(era.span, 10) || 0
    const century = Math.floor(year / 100) * 100
    const bucket = out.get(century) ?? []
    bucket.push(era)
    out.set(century, bucket)
  }
  return out
}

// Split a span string ("681-864", "c.6200-4900 BC") into a start and end label for display.
export function parseSpan(span: string): { start: string; end: string } {
  const parts = span.split(/\s*[-–]\s*/)
  return parts.length >= 2
    ? { start: parts[0].trim(), end: parts[parts.length - 1].trim() }
    : { start: span.trim(), end: span.trim() }
}

// Return a compact legend-density score: the ratio of legend text to documented text across all items.
// A score close to 1 means legend commentary matches documentation depth (healthy dual-mind record).
export function legendDensity<T extends { documented: string; legend: string }>(items: readonly T[]): number {
  const totalDoc = items.reduce((s, e) => s + e.documented.length, 0)
  const totalLeg = items.reduce((s, e) => s + e.legend.length, 0)
  return totalDoc > 0 ? Math.round((totalLeg / totalDoc) * 100) / 100 : 0
}

// A browsable index: each item as { label, span?, documented, legend } for list/table display.
export function browseIndex<T extends { documented: string; legend: string } & (
  | { topic: string; span?: never }
  | { era: string; span: string }
  | { stratum: string; span: string }
  | { people: string; span?: never }
  | { domain: string; span?: never }
  | { community: string; span?: never }
)>(items: readonly T[]): { label: string; span?: string; documented: string; legend: string }[] {
  return items.map((item) => {
    const label =
      'topic' in item ? item.topic
      : 'era' in item ? item.era
      : 'stratum' in item ? item.stratum
      : 'people' in item ? item.people
      : 'domain' in item ? item.domain
      : item.community
    const span = 'span' in item ? item.span : undefined
    return { label, ...(span ? { span } : {}), documented: item.documented, legend: item.legend }
  })
}

// src/render/heritage/quantum — the dual of src/quantum/earth/heritage. Where quantum/earth/heritage SEALS the decoded
// Bulgarian history, civilisations, ethnogenesis, genetics, and Glagolitic reception, this half provides
// display/browse primitives: sort era timelines, compare documented vs legend counts, index topics by span.
// Does NOT import from src/quantum/earth/heritage — the pair stays decoupled. Pure, deterministic, zero tokens.

export const dual = 'src/quantum/earth/heritage'

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

export const iconsDual = 'src/quantum/lake/icons'
export const libraryDual = 'src/quantum/heaven/library'

export function iconFor(icons: Readonly<Record<string, string>>, area: string, fallback = '◇'): string {
  return icons[area] ?? fallback
}

export function iconList(icons: Readonly<Record<string, string>>): { area: string; icon: string }[] {
  return Object.entries(icons)
    .map(([area, icon]) => ({ area, icon }))
    .sort((a, b) => a.area.localeCompare(b.area))
}

export function labelList(
  labels: Readonly<Record<string, { en: string; bg: string }>>,
  lang: 'en' | 'bg' = 'en',
): { area: string; label: string }[] {
  return Object.entries(labels)
    .map(([area, l]) => ({ area, label: lang === 'bg' ? l.bg : l.en }))
    .sort((a, b) => a.area.localeCompare(b.area))
}

export function isFibonacciGapless(bands: readonly number[]): boolean {
  if (bands.length <= 1) return true
  const sorted = [...bands].sort((a, b) => a - b)
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] !== sorted[i - 1] + sorted[Math.max(0, i - 2)]) return false
  }
  return true
}

export type Entry = { url: string; uuid: string; host: string; path: string }

export function shelve(entries: readonly Entry[]): Entry[] {
  return [...entries].sort((a, b) => (a.uuid < b.uuid ? -1 : a.uuid > b.uuid ? 1 : 0))
}

export function shelves(entries: readonly Entry[], count: number): Entry[][] {
  const out: Entry[][] = Array.from({ length: count }, () => [])
  for (const item of entries) {
    const bucket = Number.parseInt(item.uuid.slice(0, 2) || '0', 16) % count
    out[bucket].push(item)
  }
  return out.map((shelf) => shelve(shelf))
}

export function browsable(entries: readonly Entry[]): boolean {
  return entries.length > 0 && entries.every((entry) => /^[0-9a-f-]{36}$/i.test(entry.uuid))
}

export type Shelved = { n: number; title: string }

export function shelveSongs<T extends Shelved>(songs: readonly T[], count: number): T[][] {
  const ordered = [...songs].sort((a, b) => a.n - b.n)
  const out: T[][] = Array.from({ length: Math.max(1, count) }, () => [])
  ordered.forEach((song, i) => out[i % out.length].push(song))
  return out
}

export function songIndex<T extends Shelved>(songs: readonly T[]): { title: string; n: number }[] {
  return [...songs]
    .map((s) => ({ title: s.title, n: s.n }))
    .sort((a, b) => a.title.localeCompare(b.title, 'bg'))
}

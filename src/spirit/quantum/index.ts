// src/spirit/quantum — dual display half for lake/spirit and lake/voice browse primitives.
export const dual = 'src/quantum/lake/spirit'

export type Tier<T extends readonly string[]> = { tier: number; name: string; members: T }
export type DualityPair = { left: string; right: string; tier: number }

export function flattenTiers<T extends { members: string[] }>(tiers: readonly T[]): string[] {
  return tiers.flatMap((t) => t.members)
}

export function tierCounts<T extends { tier: number; members: string[] }>(tiers: readonly T[]): { tier: number; count: number }[] {
  return tiers.map((t) => ({ tier: t.tier, count: t.members.length }))
}

export function dualityTable<T extends DualityPair>(pairs: readonly T[]): { left: string; right: string }[] {
  return pairs.map((p) => ({ left: p.left, right: p.right }))
}

export function dualitiesByTier<T extends DualityPair>(pairs: readonly T[]): Map<number, T[]> {
  const out = new Map<number, T[]>()
  for (const p of pairs) {
    const bucket = out.get(p.tier) ?? []
    bucket.push(p)
    out.set(p.tier, bucket)
  }
  return out
}

export function sensorCountByTier<T extends { tier: number }>(sensors: readonly T[]): Map<number, number> {
  const out = new Map<number, number>()
  for (const s of sensors) out.set(s.tier, (out.get(s.tier) ?? 0) + 1)
  return out
}

export type GlossaryLine = { term: string; plain: string; route: string }
export type DimItem = { label: string; route: string; tip: string }
export type Dimension = { dimension: string; icon: string; items: DimItem[] }

export function glossaryNav(lines: readonly GlossaryLine[]): { term: string; route: string }[] {
  return lines.map((l) => ({ term: l.term, route: l.route }))
}

export function dimSummary(dims: readonly Dimension[]): { dimension: string; icon: string; count: number }[] {
  return dims.map((d) => ({ dimension: d.dimension, icon: d.icon, count: d.items.length }))
}

export function flatDimItems(dims: readonly Dimension[]): (DimItem & { dimension: string })[] {
  return dims.flatMap((d) => d.items.map((item) => ({ ...item, dimension: d.dimension })))
}

export function ogFieldNames<T extends { field: string }>(fields: readonly T[]): string[] {
  return fields.map((f) => f.field)
}

export const voiceDual = 'src/quantum/lake/voice'

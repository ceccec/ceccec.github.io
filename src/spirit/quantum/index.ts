// src/spirit/quantum — the dual of src/quantum/spirit. Where quantum/spirit SEALS the spiritual
// correspondences (yogic 3-5-8, Human Design, yin-yang, dimensions, sensors, 50 dualities), this
// half provides browse/display primitives: tier summaries, duality pair tables, sensor counts.
// Does NOT import from src/quantum/spirit — the pair stays decoupled. Pure, deterministic, zero tokens.

export const dual = 'src/quantum/spirit'

export type Tier<T extends readonly string[]> = { tier: number; name: string; members: T }
export type DualityPair = { left: string; right: string; tier: number }

// Flatten tier members into a simple flat list for display.
export function flattenTiers<T extends { members: string[] }>(tiers: readonly T[]): string[] {
  return tiers.flatMap((t) => t.members)
}

// Count members per tier — a quick tier-density view.
export function tierCounts<T extends { tier: number; members: string[] }>(tiers: readonly T[]): { tier: number; count: number }[] {
  return tiers.map((t) => ({ tier: t.tier, count: t.members.length }))
}

// Extract the left-right label pairs from a dualities result for compact table display.
export function dualityTable<T extends DualityPair>(pairs: readonly T[]): { left: string; right: string }[] {
  return pairs.map((p) => ({ left: p.left, right: p.right }))
}

// Group dualities by their Fibonacci tier.
export function dualitiesByTier<T extends DualityPair>(pairs: readonly T[]): Map<number, T[]> {
  const out = new Map<number, T[]>()
  for (const p of pairs) {
    const bucket = out.get(p.tier) ?? []
    bucket.push(p)
    out.set(p.tier, bucket)
  }
  return out
}

// Sensor count by tier — 3 core + 5 ambient + 8 motion = 16.
export function sensorCountByTier<T extends { tier: number }>(sensors: readonly T[]): Map<number, number> {
  const out = new Map<number, number>()
  for (const s of sensors) out.set(s.tier, (out.get(s.tier) ?? 0) + 1)
  return out
}

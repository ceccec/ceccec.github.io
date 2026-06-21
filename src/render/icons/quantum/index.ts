// src/icons/quantum — the dual of src/quantum/icons. Where quantum/icons SEALS the area-icon maps,
// computer architecture tiers, harmonic bands, and glyph/artifact seals, this half provides
// browse/display primitives: icon lookups, area-label lists, glyph tables.
// Does NOT import from src/quantum/icons — the pair stays decoupled. Pure, deterministic, zero tokens.

export const dual = 'src/quantum/icons'

// Look up an area icon by key, with a fallback glyph.
export function iconFor(icons: Readonly<Record<string, string>>, area: string, fallback = '◇'): string {
  return icons[area] ?? fallback
}

// List all icon entries as [{area, icon}] sorted alphabetically by area key.
export function iconList(icons: Readonly<Record<string, string>>): { area: string; icon: string }[] {
  return Object.entries(icons)
    .map(([area, icon]) => ({ area, icon }))
    .sort((a, b) => a.area.localeCompare(b.area))
}

// List all area labels for a locale.
export function labelList(
  labels: Readonly<Record<string, { en: string; bg: string }>>,
  lang: 'en' | 'bg' = 'en',
): { area: string; label: string }[] {
  return Object.entries(labels)
    .map(([area, l]) => ({ area, label: lang === 'bg' ? l.bg : l.en }))
    .sort((a, b) => a.area.localeCompare(b.area))
}

// Check if a harmonic band sequence is Fibonacci-consecutive (no gaps between bands).
export function isFibonacciGapless(bands: readonly number[]): boolean {
  if (bands.length <= 1) return true
  const sorted = [...bands].sort((a, b) => a - b)
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] !== sorted[i - 1] + sorted[Math.max(0, i - 2)]) return false
  }
  return true
}

// Thin VitePress mount — groups page components by rosetta ray (7-star coprime grouping)
// without importing the mind barrel (node:fs). The rosettaRayOf function is the same
// Glagolitic digital-root ladder used in src/water/digit — inlined here for SSR safety.

const ROSETTA_RAYS = [
  { ray: 0, glyph: 'Ⰰ', nameEn: 'Alpha', nameBg: 'Алфа', domain: 'origin', hue: 0 },
  { ray: 1, glyph: 'Ⰲ', nameEn: 'Voice', nameBg: 'Глас', domain: 'expression', hue: Math.floor(1 * 360 / 7) } // 51°,
  { ray: 2, glyph: 'Ⰴ', nameEn: 'Spirit', nameBg: 'Дух', domain: 'knowledge', hue: Math.floor(2 * 360 / 7) } // 102°,
  { ray: 3, glyph: 'Ⰶ', nameEn: 'Life', nameBg: 'Живот', domain: 'nature', hue: Math.floor(3 * 360 / 7) } // 154°,
  { ray: 4, glyph: 'Ⰹ', nameEn: 'Thought', nameBg: 'Мисъл', domain: 'computation', hue: Math.floor(4 * 360 / 7) } // 205°,
  { ray: 5, glyph: 'Ⰿ', nameEn: 'Form', nameBg: 'Форма', domain: 'geometry', hue: Math.floor(5 * 360 / 7) } // 257°,
  { ray: 6, glyph: 'Ⱄ', nameEn: 'Word', nameBg: 'Слово', domain: 'language', hue: Math.floor(6 * 360 / 7) } // 308°,
] as const

function rosettaRayOf(name: string): number {
  const glaText = [...name].map((ch) => ch.toLowerCase().charCodeAt(0) - (16 * 6)).filter((n) => n > 0 && n <= 26)
  const positionSum = glaText.reduce((sum, n) => sum + ((n - 1) % 9 + 1), 0)
  return positionSum % 7
}

export function componentBaguaGroups(names: readonly string[] = []) {
  const groups = ROSETTA_RAYS.map((rayMeta) => ({
    ray: rayMeta.ray,
    glyph: rayMeta.glyph,
    name: rayMeta.nameEn,
    attribute: rayMeta.domain,
    labelEn: rayMeta.nameEn,
    labelBg: rayMeta.nameBg,
    hue: rayMeta.hue,
    components: names.filter((name) => rosettaRayOf(name) === rayMeta.ray),
  })).filter((group) => group.components.length > 0)
  const grouped = groups.length > 1
  return { groups: groups.map((group) => ({ ...group, grouped })), grouped, count: groups.length }
}

// src/search/ant — the search half of the ant pair. Ants search a hexagon grid recursively, walking
// the endless labyrinth paths, scoring the food (value) at each cell. The dual is src/ant/search,
// which carries what is found to the nest and moves the nest to the most food. Pure, deterministic,
// zero-dependency — split into an index file rather than computed in one fused module (cheaper than
// a forger reproducing the whole fusion).

export type Hex = { readonly q: number; readonly r: number }

export function hexKey(h: Hex): string {
  return `${h.q},${h.r}`
}

// The six neighbours of a hex cell (axial coordinates) — the hexagon's six directions.
export function hexNeighbors(h: Hex): Hex[] {
  return [
    { q: h.q + 1, r: h.r },
    { q: h.q + 1, r: h.r - 1 },
    { q: h.q, r: h.r - 1 },
    { q: h.q - 1, r: h.r },
    { q: h.q - 1, r: h.r + 1 },
    { q: h.q, r: h.r + 1 },
  ]
}

export type Found = { readonly cell: Hex; readonly food: number }

// Recursively search the labyrinth from a start cell to a depth, scoring the food at each cell.
// `foodAt` is the source — it reads the value at a path; nothing is stored, every cell recomputed.
export function search(start: Hex, depth: number, foodAt: (h: Hex) => number, seen: Set<string> = new Set()): Found[] {
  const key = hexKey(start)
  if (depth < 0 || seen.has(key)) return []
  seen.add(key)
  const found: Found[] = [{ cell: start, food: foodAt(start) }]
  for (const n of hexNeighbors(start)) found.push(...search(n, depth - 1, foodAt, seen))
  return found
}

export const dual = 'src/ant/search'

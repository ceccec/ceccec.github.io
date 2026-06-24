// src/pair/search/ant — the ant pair (search + carry), dissolved wave 2: search the hex labyrinth and
// carry food to the nest in one index. Pure, deterministic, zero-dependency.

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

// Carry: total the food gathered on the way back to the nest.
export function carry(found: readonly Found[]): number {
  return found.reduce((sum, f) => sum + f.food, 0)
}

// Move the nest to the cell with the most food. Ties broken by lowest cell key — deterministic.
export function moveNest(found: readonly Found[]): Found | null {
  let best: Found | null = null
  for (const f of found) {
    const better = !best || f.food > best.food || (f.food === best.food && `${f.cell.q},${f.cell.r}` < `${best.cell.q},${best.cell.r}`)
    if (better) best = f
  }
  return best
}

// One recursion: carry food and relocate the nest to the richest cell.
export function recur(found: readonly Found[]): { nest: Found | null; carried: number } {
  return { nest: moveNest(found), carried: carry(found) }
}

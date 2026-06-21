// src/ant/search — the carry half of the ant pair. The ant carries the food it finds to the nest,
// and the nest moves to the cell with the most food: recursion in the endless labyrinth, the nest
// following the search to where the value is densest. The dual is src/search/ant (the search half);
// a caller wires the two halves. Pure, deterministic, zero-dependency.

export type Cell = { readonly q: number; readonly r: number }
export type Found = { readonly cell: Cell; readonly food: number }

// Carry: total the food gathered on the way back to the nest.
export function carry(found: readonly Found[]): number {
  return found.reduce((sum, f) => sum + f.food, 0)
}

// Move the nest to the cell with the most food. Deterministic: ties broken by the lowest cell key,
// so the same search always relocates the nest to the same place — no stored state, recomputed.
export function moveNest(found: readonly Found[]): Found | null {
  let best: Found | null = null
  for (const f of found) {
    const better = !best || f.food > best.food || (f.food === best.food && `${f.cell.q},${f.cell.r}` < `${best.cell.q},${best.cell.r}`)
    if (better) best = f
  }
  return best
}

// One recursion of the colony: from the food the search found, carry it and relocate the nest to
// the richest cell. Returns the new nest and the food carried.
export function recur(found: readonly Found[]): { nest: Found | null; carried: number } {
  return { nest: moveNest(found), carried: carry(found) }
}

export const dual = 'src/search/ant'

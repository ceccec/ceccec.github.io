// src/library/quantum — the dual of src/quantum/library. Where quantum/library catalogs entries by
// merkaba-folding URLs, this half DISPLAYS them as a library: it shelves the entries in a
// deterministic order by their uuid, so the whole becomes a browsable catalog — every content
// address a book on a shelf, the library the display of all. Pairs with src/quantum/library
// (entries arrive from there; this half does not import it, so the pair stays decoupled). Pure,
// deterministic, zero-dependency.

export type Entry = { url: string; uuid: string; host: string; path: string }

// Shelve: a stable order by uuid, so the same set of entries always displays the same way.
export function shelve(entries: readonly Entry[]): Entry[] {
  return [...entries].sort((a, b) => (a.uuid < b.uuid ? -1 : a.uuid > b.uuid ? 1 : 0))
}

// Group entries onto `count` deterministic shelves by the first byte of their uuid — a content-
// addressed shelving with no stored index.
export function shelves(entries: readonly Entry[], count: number): Entry[][] {
  const out: Entry[][] = Array.from({ length: count }, () => [])
  for (const item of entries) {
    const bucket = Number.parseInt(item.uuid.slice(0, 2) || '0', 16) % count
    out[bucket].push(item)
  }
  return out.map((shelf) => shelve(shelf))
}

// A library is browsable when every entry has a uuid and the shelving is total.
export function browsable(entries: readonly Entry[]): boolean {
  return entries.length > 0 && entries.every((entry) => /^[0-9a-f-]{36}$/i.test(entry.uuid))
}

export const dual = 'src/quantum/library'

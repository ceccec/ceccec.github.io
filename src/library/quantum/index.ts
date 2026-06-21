// src/library/quantum — the dual of src/quantum/heaven/library. Where quantum/heaven/library CATALOGS entries by
// merkaba-folding URLs AND decodes them (the tools: toGlagolitic, gematria, decodeDialect, the Песнопойка
// songbook), this half DISPLAYS the library: it shelves entries in a deterministic order by their uuid, so
// the whole becomes a browsable catalog — every content address a book on a shelf, the library the display
// of all. Pairs with src/quantum/heaven/library (entries and songs arrive from there as arguments; this half does
// not import it, so the pair stays decoupled). Pure, deterministic, zero-dependency, zero tokens.

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

// THE SONGBOOK ON SHELVES — the display half of the Песнопойка decode. The songs are catalogued and
// decoded in the pair (src/quantum/heaven/library: PESNOPOIKA, decodeSong, songEntry); this half shelves them for
// browsing. Decoupled: a song arrives as a plain { n, title } record (whatever the pair produced), never
// imported — so the two halves never depend on each other. Pure, deterministic, zero tokens.
export type Shelved = { n: number; title: string }

// Shelve the songbook into `count` shelves by song number, in order — the book laid out for browsing,
// the same number of songs on each shelf give or take one. Deterministic from the numbers alone.
export function shelveSongs<T extends Shelved>(songs: readonly T[], count: number): T[][] {
  const ordered = [...songs].sort((a, b) => a.n - b.n)
  const out: T[][] = Array.from({ length: Math.max(1, count) }, () => [])
  ordered.forEach((song, i) => out[i % out.length].push(song))
  return out
}

// An alphabetical index of the songbook (by title, Bulgarian collation) — the catalog page: every song's
// number under its title, the browsable table of contents the display promises.
export function songIndex<T extends Shelved>(songs: readonly T[]): { title: string; n: number }[] {
  return [...songs]
    .map((s) => ({ title: s.title, n: s.n }))
    .sort((a, b) => a.title.localeCompare(b.title, 'bg'))
}

export const dual = 'src/quantum/heaven/library'

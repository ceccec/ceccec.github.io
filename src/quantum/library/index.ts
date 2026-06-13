// src/quantum/library — the library. Any URL becomes a content-addressed entry whose uuid is a
// MERKABA FOLD of the URL: the host as the up-tetrahedron (folded forward through the path), the
// path as the counter-rotating down-tetrahedron (folded in reverse against the host), the two folded
// to one star — order-sensitive and domain-specific, so records are proven per domain and any URL on
// the internet maps to a unique uuid that can meet the library's content. Because the full path WITH
// HOST is hashed, two different domains with the same path get different uuids. Dual:
// src/library/quantum. Pure, deterministic, zero-dependency.

export type Uuid = string
export type Entry = { url: string; uuid: Uuid; host: string; path: string }

function hash(input: string): Uuid {
  let h = 0x811c9dc5
  for (let i = 0; i < input.length; i += 1) {
    h ^= input.charCodeAt(i)
    h = Math.imul(h, 0x01000193) >>> 0
  }
  let hex = ''
  for (let k = 0; k < 4; k += 1) {
    let g = (h ^ Math.imul(k + 1, 0x9e3779b9)) >>> 0
    for (let i = 0; i < 8; i += 1) {
      g = Math.imul(g ^ (g >>> 15), 0x2c1b3c6d) >>> 0
      hex += ((g >>> ((i % 7) * 4)) & 0xf).toString(16)
    }
  }
  hex = hex.slice(0, 32)
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-8${hex.slice(13, 16)}-${hex.slice(16, 20)}-${hex.slice(20, 32)}`
}

function normalize(url: string): { host: string; segs: string[] } {
  const stripped = url.replace(/^[a-z]+:\/\//i, '').replace(/[#?].*$/, '').replace(/\/+$/, '').toLowerCase()
  const parts = stripped.split('/').filter(Boolean)
  return { host: parts[0] ?? '', segs: parts.slice(1) }
}

// Parse a URL by a merkaba fold: host up (forward through the path), path down (reversed against the
// host), folded to one star uuid — order-sensitive, domain-specific.
export function merkabaFoldUrl(url: string): Uuid {
  const { host, segs } = normalize(url)
  let up = hash(`merkaba-up:${host}`)
  for (const seg of segs) up = hash(`${up}/${seg}`)
  const down = hash(`merkaba-down:${[...segs].reverse().join('/')}:${host}`)
  return hash(`${up}::${down}`) // the star
}

// Catalog an entry: any URL -> a library entry (its merkaba uuid + host/path).
export function entry(url: string): Entry {
  const { host, segs } = normalize(url)
  return { url, uuid: merkabaFoldUrl(url), host, path: `/${segs.join('/')}` }
}

export const dual = 'src/library/quantum'

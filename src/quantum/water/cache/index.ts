// src/quantum/water/cache — one half of the quantum cache pair. It COMPUTES the UUIDs it needs, by path.
//
// A path is not stored against a key; the key is computed from the path itself — split into its
// word-steps and folded in order (order-sensitive: quantum/water/cache is not cache/quantum). So there is
// no path→uuid table to keep or invalidate; the same path always computes the same content UUID.
//
// Its dual is src/pair/cache/quantum, which caches and finds the payload by the UUID this half computes.
// Together — quantum/water/cache ⇄ cache/quantum — they are the quantum cache pair: compute the address
// here, find the payload there. Agnostic, zero-dependency, deterministic.

export type Uuid = string

// FNV-1a expanded to a 32-hex, UUIDv8-shaped content address. Same input → same UUID, so a path
// always computes the same key. Pure and dependency-free, matching the portal's content-address
// shape (8-4-4-4-12, version nibble 8).
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

// Compute the UUID a path needs: fold its word-steps in order from a fixed root.
export function uuidForPath(path: string): Uuid {
  const steps = path.replace(/^\/+|\/+$/g, '').split('/').filter(Boolean)
  let acc = hash('quantum:cache:root')
  for (const step of steps) acc = hash(`${acc}/${step}`) // order-sensitive fold — the path is the key
  return acc
}

// Fold two addresses, order-sensitively — the pair operation the cache shares with the model.
export function foldUuids(a: Uuid, b: Uuid): Uuid {
  return hash(`${a}:${b}`)
}

export const dual = 'src/pair/cache/quantum'

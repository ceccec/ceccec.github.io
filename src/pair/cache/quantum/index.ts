// src/pair/cache/quantum — the dual half of the quantum cache pair. It CACHES and FINDS the payload by
// UUID.
//
// The payload is src itself: recomputed from the source, never fetched. So this cache is a
// content-addressed memoization — the same UUID always yields the same payload, the cache can never
// go stale, and eviction is free (a miss simply recomputes). It finds all payload by UUID; the
// UUIDs it needs are computed by its dual, src/quantum/water/cache, from the path.
//
// Together — cache/quantum ⇄ quantum/water/cache — they are the quantum cache pair: find the payload here
// by the address computed there. Agnostic, zero-dependency, deterministic.

export type Uuid = string

// The content-addressed store: UUID → payload. Because the same UUID is the same payload, there is
// no invalidation; the store is a pure memo of the recompute.
const store = new Map<Uuid, unknown>()

// Cache a payload under its UUID and return it.
export function cachePayload(uuid: Uuid, payload: unknown): unknown {
  store.set(uuid, payload)
  return payload
}

// Find the payload by UUID. On a miss, recompute it from the source (the payload IS src) and cache.
export function findPayload(uuid: Uuid, recompute: (uuid: Uuid) => unknown): unknown {
  const hit = store.get(uuid)
  if (hit !== undefined || store.has(uuid)) return hit
  return cachePayload(uuid, recompute(uuid))
}

export function has(uuid: Uuid): boolean {
  return store.has(uuid)
}

export function size(): number {
  return store.size
}

// The pair, composed: given a PATH and the dual's path→uuid computer (src/quantum/water/cache.uuidForPath),
// compute the address and find/cache the payload here. The caller wires the two halves of the pair.
export function findByPath(path: string, pathToUuid: (path: string) => Uuid, recompute: (uuid: Uuid) => unknown): unknown {
  return findPayload(pathToUuid(path), recompute)
}

export const dual = 'src/quantum/water/cache'

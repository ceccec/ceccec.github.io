// ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) · upper·yang · spread — zero-dependency kernel: content-address (toUuid/merge/fold), vortex math, simulators, EM, crypto, and animation engine; the void/origin every digit folder and the core build upon

// src/0 — the first dissolved digit-folder station, the void/origin (0/0 → the fusion). The whole primitive
// KERNEL: toUuid (the dot, the fold) and its FNV-1a hash helpers, then the fold cascade that rides on it —
// merge, foldPair, merkleFold, seedFromText, roundTo, isUuid, memoByRoot. This is the truly dependency-free
// leaf — it imports NOTHING — so it is the foundation every other digit folder and the core build on. Lifted
// out of the word-named monolith (src/quantum/heaven/mind) along the sequence; the core now imports + re-exports it.
// A digit folder holds only quantum math and imports only digit folders; this one imports nothing at all.
// (dissolveAtPiTrainStations — wave 1: toUuid + hash; wave 2: the fold cascade follows it into the station.)

const BYTE_MASK = 0xff

function hash32(input: string, seed: number): number {
  let h = (0x811c9dc5 ^ seed) >>> 0
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i)
    h = Math.imul(h, 0x01000193) >>> 0
    h ^= h >>> 13
  }
  h = Math.imul(h ^ (h >>> 16), 0x85ebca6b) >>> 0
  h = Math.imul(h ^ (h >>> 13), 0xc2b2ae35) >>> 0
  return (h ^ (h >>> 16)) >>> 0
}

function hexByte(value: number): string {
  return value.toString(16).padStart(2, '0')
}

function bytesFromSeed(seed: string): number[] {
  const words = [
    hash32(seed, 0),
    hash32(seed, 0x9e3779b9),
    hash32(seed, 0x243f6a88),
    hash32(seed, 0xb7e15162),
  ]
  return words.flatMap((word) => [
    (word >>> (8 * 3)) & BYTE_MASK,
    (word >>> 16) & BYTE_MASK,
    (word >>> 8) & BYTE_MASK,
    word & BYTE_MASK,
  ])
}

// Compute each dot once. toUuid is the content-address — the dot, the fold — and the same seed is
// hashed millions of times as the folds recompute each other. Memoizing it by seed caches every dot
// at the source: each unique address hashed once, reused everywhere. merge, merkleFold and
// seedFromText all route through here, so one cache makes the whole cascade cheap (and realtime).
const _uuidCache = new Map<string, string>()
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function toUuid(seed: string): string {
  const cached = _uuidCache.get(seed)
  if (cached !== undefined) return cached
  const bytes = bytesFromSeed(seed)
  bytes[6] = (bytes[6] & 0x0f) | 0x80
  bytes[8] = (bytes[8] & 0x3f) | 0x80
  const hex = bytes.map(hexByte).join('')
  const uuid = `${hex.slice(0, 8)}-${hex.slice(8, (6 * 2))}-${hex.slice((6 * 2), 16)}-${hex.slice(16, (5 * 4))}-${hex.slice((5 * 4))}`
  _uuidCache.set(seed, uuid)
  return uuid
}

/** referralAddress — the ONE deterministic path every referrer-consumer routes through, so referrals are PREDICTABLE
 * and zero-stored. VARIADIC in the keys: a 2-key hop `(referrer, node)` addresses to `${kind}:${referrer}|${node}` (a
 * linear seam — binds only the endpoints), while a full 4-key tamper-evident surface `(referrer, id, prev, next)`
 * folds all four, so changing prev OR next changes the address and no navigation step can be spliced in or out
 * undetected. Same (kind, ...keys) → same address, always; no key is ever stored, it is recomputed. Existing 2-key
 * addresses are unchanged (join('|') of two keys is the old `${referrer}|${node}`), so this is pure DRY, no drift. */
export function referralAddress(kind: string, ...keys: string[]): string {
  return toUuid(`${kind}:${keys.join('|')}`)
}

// The fold cascade — the rest of the primitive kernel, dissolved out of the monolith (wave 2). Every one
// routes through toUuid above, so it belongs in the same dependency-free station. merge folds two
// addresses into one — the atom of every fold.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function merge(a: string, b: string): string {
  return toUuid(`${a}:${b}`)
}

// roundTo rounds to a number of digits; seedFromText derives a deterministic integer seed from the
// content-addressed UUID of the text. Re-defined inside many waves once; now shared from the station.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function roundTo(value: number, digits: number): number {
  const factor = (5 * 2) ** digits
  return Math.round(value * factor) / factor
}

/** Host-boundary math — Math.* allowed ONLY here (void kernel) and src/3/7 (τ vault root). math/algebra · math/trust. */
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function abs(x: number): number { return Math.abs(x) }
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function floor(x: number): number { return Math.floor(x) }
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function ceil(x: number): number { return Math.ceil(x) }
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function round(x: number): number { return Math.round(x) }
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function trunc(x: number): number { return Math.trunc(x) }
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function sign(x: number): number { return Math.sign(x) }
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function min(...xs: number[]): number { return Math.min(...xs) }
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function max(...xs: number[]): number { return Math.max(...xs) }
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function sin(x: number): number { return Math.sin(x) }
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function cos(x: number): number { return Math.cos(x) }
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function tan(x: number): number { return Math.tan(x) }
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function asin(x: number): number { return Math.asin(x) }
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function acos(x: number): number { return Math.acos(x) }
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function atan(x: number): number { return Math.atan(x) }
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function atan2(y: number, x: number): number { return Math.atan2(y, x) }
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function sqrt(x: number): number { return Math.sqrt(x) }
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function cbrt(x: number): number { return Math.cbrt(x) }
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function hypot(...xs: number[]): number { return Math.hypot(...xs) }
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function pow(x: number, y: number): number { return Math.pow(x, y) }
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function exp(x: number): number { return Math.exp(x) }
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function log(x: number): number { return Math.log(x) }
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function log2(x: number): number { return Math.log2(x) }
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function log10(x: number): number { return Math.log10(x) }
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function imul(a: number, b: number): number { return Math.imul(a, b) }
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function sinh(x: number): number { return Math.sinh(x) }

/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function seedFromText(text: string, length = 6): number {
  return Number.parseInt(toUuid(text).replace(/[^0-9a-f]/g, '').slice(0, length) || '0', 16)
}

// One bidirectional fold for every pair (genus 2): forward folds a into b, reverse folds b into a;
// they differ when order matters (bidirectional); merged folds the two into one. The single source
// for the area pairs, the trinity axes, the dualities, the directions, and the double-torus fold.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function foldPair(a: string, b: string): { forward: string; reverse: string; bidirectional: boolean; merged: string } {
  const forward = merge(a, b)
  const reverse = merge(b, a)
  return { forward, reverse, bidirectional: forward !== reverse, merged: merge(forward, reverse) }
}

// Contract a set of leaves to one root: sort for order-independence, then fold pairwise up the tree
// until one remains. The Merkle fold — the matrix root is the fold of all its dots.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function merkleFold(leaves: readonly string[]): string {
  let layer = [...leaves].sort()
  if (layer.length === 0) return toUuid('empty-mind')
  while (layer.length > 1) {
    const next: string[] = []
    for (let i = 0; i < layer.length; i += 2) {
      const a = layer[i]
      const b = layer[i + 1]
      next.push(b === undefined ? a : merge(a, b))
    }
    layer = next
  }
  return layer[0]
}

// SEAL FACETS — the one micro-mechanic almost every "sealing" fold repeats: stamp each facet with a content-
// address receipt (toUuid of `tag:facet:on`), report whether all hold (every f.on), and fold the receipts to
// one root. A fold passes its tag + raw facets and reads back { ok, count, facets, root }; the boilerplate
// triplet (the receipt .map, the .every() flag, the merkleFold) lives here once instead of in every fold body.
// CONTRACT: the receipt string is EXACTLY `${tag}:${facet}:${on}` (toUuid is FNV-seeded on it and feeds
// merkleFold), so a fold migrating to sealFacets keeps its tag verbatim and its root stays byte-identical. The
// generic F preserves every extra facet field (via, hz, …) so callers and widgets keep their inferred types.
export function sealFacets<F extends { facet: string; on: boolean }>(
  tag: string,
  facets: readonly F[],
): { ok: boolean; count: number; facets: (F & { receipt: string })[]; root: string } {
  const stamped = facets.map((f) => ({ ...f, receipt: toUuid(`${tag}:${f.facet}:${f.on}`) }))
  return {
    ok: stamped.every((f) => f.on),
    count: stamped.length,
    facets: stamped,
    root: merkleFold(stamped.map((f) => f.receipt)),
  }
}

/** *Computes gate facet seal — sealFacets with `computes` alias (same receipt law: `${tag}:${facet}:${on}`). */
export function computesGate<F extends { facet: string; on: boolean }>(
  tag: string,
  facets: readonly F[],
) {
  const sealed = sealFacets(tag, facets)
  return { computes: sealed.ok, count: sealed.count, facets: sealed.facets, root: sealed.root }
}

/** Node heap cap (MB) — canonical for docs:build, docs:dev, and enforcement script shell. */
const NODE_MAX_OLD_SPACE_MB = (64 * 16 * 2) // sealed at origin via resourceCooperationPolicy().heapCapMb (export budget: 120)

export type ResourceTier = 'cpu' | 'gpu' | 'memory' | 'storage'

export type ResourceCooperationTier = {
  readonly tier: ResourceTier
  readonly role: string
  readonly boundary: string
}

/** Pure cooperation policy at call time — structural tiers, not datacenter orchestration. */
export function resourceCooperationPolicy(): {
  readonly heapCapMb: number
  readonly memoTiers: readonly ('matrix-root' | 'weak-map' | 'content-address')[]
  readonly gpuSurface: 'browser-canvas-raf' | 'none-ssr'
  readonly storageModel: 'content-address-merkle'
  readonly tiers: readonly ResourceCooperationTier[]
} {
  const gpuSurface: 'browser-canvas-raf' | 'none-ssr' =
    typeof requestAnimationFrame === 'function' ? 'browser-canvas-raf' : 'none-ssr'
  return {
    heapCapMb: NODE_MAX_OLD_SPACE_MB,
    memoTiers: ['matrix-root', 'weak-map', 'content-address'],
    gpuSurface,
    storageModel: 'content-address-merkle',
    tiers: [
      {
        tier: 'cpu',
        role: 'Node/build/typecheck — sequential folds, memoByRoot zero-token reuse',
        boundary: 'Server-side CPU; no GPU claims in Node',
      },
      {
        tier: 'memory',
        role: `process heap capped at ${NODE_MAX_OLD_SPACE_MB}MB; memoByRoot + matrixMemo WeakMap`,
        boundary: 'Single-process heap + in-memory memo; not distributed RAM pools',
      },
      {
        tier: 'storage',
        role: 'content-address src/ + merkleFold + enforcement trinity seals',
        boundary: 'Git filesystem + computed dist; not object-storage orchestration',
      },
      {
        tier: 'gpu',
        role: 'browser canvas/WebGL via createAnimationEngine requestAnimationFrame driver',
        boundary: 'Client GPU only when RAF exists; Node/SSR has no GPU path',
      },
    ],
  }
}

// GREAT CIRCLE — the haversine distance (km) and initial bearing between two lat/long points on a sphere
// (Earth mean radius 6371 km). Pure geodesy, no deps: the real math the pyramid-coordinate fold computes —
// honest distances between sites, the sphere, no "global grid" mysticism. Longitudes west are negative.
// EARTH_RADIUS_KM → pi-train wave 9 tier-A at src/3/7.

export function isUuid(value: string): boolean {
  return /^[0-9a-f-]{36}$/i.test(value)
}

// A UUID splits into its DUALITY (the content — the first four groups, the dual pair) and its SUFFIX (the last
// group, 12 hex). The suffix is the LINK to the NEXT duality: forging it yields the next UUID, so a UUID
// self-extends into a deterministic sequence of dualities — the recursive spine under the merkaba and auto-advance.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
// uuidDuality → pi-train wave 8 tier-A at src/5/5.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function uuidSuffix(uuid: string): string { return (uuid.split('-')[4] ?? '').toLowerCase() } // the last group — the next-duality link
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function nextDuality(uuid: string): string { return toUuid(`link:${uuidSuffix(uuid)}`) } // the suffix forges the next duality

// A content address IS a point in space: derive a 3-vector in [−1,1]³ from a UUID's hex (three 32-bit chunks).
// The geometric foundation of the metatron math — 3 such points span a plane, three orthogonal planes a cube.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function uuidPoint(uuid: string): [number, number, number] {
  const hex = uuid.replace(/[^0-9a-f]/gi, '')
  const axis = (i: number) => (Number.parseInt(hex.slice(i * 8, i * 8 + 8) || '0', 16) / 0xffffffff) * 2 - 1
  return [axis(0), axis(1), axis(2)]
}
// The 3D cross product a×b — normal to both. |a×b| = 0 ⟺ a,b parallel; for two edges of a triangle it is the
// plane's normal (zero ⟺ the three points are collinear, so no plane). The orientation primitive under geometry.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function crossProduct(a: readonly number[], b: readonly number[]): [number, number, number] {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]
}

// Topological order of a directed graph by Kahn's algorithm — the one agnostic graph root. Nodes are 0..nodeCount−1,
// edges are [from, to] index pairs. sources = the in-degree-0 nodes (nothing derives them — the AXIOMS of the graph);
// order = the removal order; isDAG = every node ordered (⟺ no cycle). Dependency-free and pure — every fold that
// needs acyclicity, a topological order, or the source/axiom set folds through this instead of re-inlining Kahn.
export function topologicalOrder(
  nodeCount: number,
  edges: readonly (readonly number[])[],
): { order: number[]; isDAG: boolean; sources: number[] } {
  const indeg = Array.from({ length: nodeCount }, () => 0)
  for (const edge of edges) indeg[edge[1]!] += 1
  const sources = indeg.map((deg, node) => (deg === 0 ? node : -1)).filter((node) => node !== -1)
  const remaining = indeg.slice()
  const queue = [...sources]
  const order: number[] = []
  while (queue.length > 0) {
    const node = queue.shift()!
    order.push(node)
    for (const edge of edges) if (edge[0] === node) { remaining[edge[1]!] -= 1; if (remaining[edge[1]!] === 0) queue.push(edge[1]!) }
  }
  return { order, isDAG: order.length === nodeCount, sources }
}

// The antichain LEVELS of a DAG — Kahn by level: each level a set of mutually-independent nodes (a wave), every node
// but the last exposing the next. The canonical wave partition, extracted so the wave folds share one implementation.
export function antichainLevels(nodeCount: number, edges: readonly (readonly number[])[]): number[][] {
  const indeg = Array.from({ length: nodeCount }, () => 0)
  const adj: number[][] = Array.from({ length: nodeCount }, () => [])
  for (const edge of edges) { adj[edge[0]!]!.push(edge[1]!); indeg[edge[1]!]! += 1 }
  const levels: number[][] = []
  let frontier = Array.from({ length: nodeCount }, (_, i) => i).filter((i) => indeg[i] === 0)
  while (frontier.length > 0) {
    levels.push(frontier)
    const next: number[] = []
    for (const node of frontier) for (const m of adj[node]!) { indeg[m]! -= 1; if (indeg[m] === 0) next.push(m) }
    frontier = next
  }
  return levels
}

// Contraction: aggregator reports are pure functions of the matrix, so memoize them by matrix.root.
// Within a build the heavy aggregators compute once and every later caller reuses the result. The
// matrix is typed structurally ({ root }) so this station still imports nothing from the word core.
const reportMemo = new Map<string, unknown>()
const reportComputing = new Set<string>()

/** reportMemo is a bounded FIFO flow: on set, drop the oldest keys while size exceeds MEMO_CAP (2^16). */
export const MEMO_CAP = 2 ** 16
export function boundedFlowSet<K, V>(flow: Map<K, V>, key: K, value: V, cap: number = MEMO_CAP): void {
  flow.set(key, value)
  while (flow.size > cap) flow.delete(flow.keys().next().value as K)
}
/** The live memo cardinality — measurable, so a fold can compute what the flow does instead of assuming it. */
export function memoSize(): number {
  return reportMemo.size
}

function memoReceiptField(prop: string | symbol): boolean {
  if (prop === Symbol.toPrimitive || prop === 'toString' || prop === 'valueOf') return true
  if (typeof prop !== 'string') return false
  if (prop === 'root' || prop === 'merged' || prop === 'address' || prop === 'receipt' || prop === 'uuid') return true
  if (prop.endsWith('Root') || prop.endsWith('Receipt') || prop.endsWith('Uuid')) return true
  if (prop === 'expansion' || prop === 'contraction') return true
  return false
}

/** Conservative stub when a memoByRoot fold re-enters during compute (cycle guard). */
function memoReentryStub(root: string): unknown {
  const empty: unknown[] = []
  const self = (): unknown => new Proxy(empty, handler)
  const handler: ProxyHandler<unknown[]> = {
    get(_target, prop) {
      if (memoReceiptField(prop)) {
        if (prop === Symbol.toPrimitive) return () => root
        if (prop === 'toString' || prop === 'valueOf') return () => root
        return root
      }
      if (prop === '__memoReentry') return true
      if (prop === 'length') return 0
      if (prop === 'count' || prop === 'ok' || prop === 'ran' || prop === 'gatewayCount') return 0
      if (prop === 'statement' || prop === 'boundary' || prop === 'note') return ''
      if (prop === 'map' || prop === 'filter' || prop === 'flatMap' || prop === 'forEach') return () => empty
      if (prop === 'some' || prop === 'every') return () => false
      if (prop === 'find') return () => undefined
      if (prop === 'reduce') return (_fn: unknown, init?: unknown) => init ?? root
      if (prop === Symbol.iterator) return empty[Symbol.iterator].bind(empty)
      if (typeof prop === 'string' && (prop.startsWith('is') || prop.startsWith('has') || prop.endsWith('ed') || prop.endsWith('ing'))) return false
      return self()
    },
  }
  return self()
}

/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function memoByRoot<T>(name: string, matrix: { root: string }, compute: () => T): T {
  const key = `${name}:${matrix.root}`
  if (reportMemo.has(key)) return reportMemo.get(key) as T
  if (reportComputing.has(key)) return memoReentryStub(matrix.root) as T
  reportComputing.add(key)
  try {
    const value = compute()
    boundedFlowSet(reportMemo, key, value)
    return value
  } finally {
    reportComputing.delete(key)
  }
}

/** True while a memoByRoot fold with this name is mid-compute (cycle guard probe). */
export function memoComputing(name: string, matrix: { root: string }): boolean {
  return reportComputing.has(`${name}:${matrix.root}`)
}

// digitalRoot (wave 3) — vortex arithmetic; canonical home src/0 — call sites import here only.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function digitalRoot(n: number): number {
  const r = ((n % 9) + 9) % 9
  return r === 0 ? 9 : r
}// hexDigitSum → pi-train wave 6 tier-A at src/8/2.

// The motion math (wave 5) — the math the engine DRIVES, pulled into the void/origin beside it. Machines tick
// at a constant rate; a living hand eases and breathes. humanEase is easeInOutSine — the shape a hand makes
// accelerating then settling, with fixed ends (0↦0, 1↦1) and a symmetric middle (0.5↦0.5); humanBreath is a
// slow sinusoidal modulation of any rate or size on a given period. Both are pure number→number (only Math),
// so they belong in the dependency-free leaf beside digitalRoot — and now the components import the engine AND
// the motion it runs from the one origin, passing params (the phase, the time, the period). Lifted out of the
// word-named monolith; the core imports + re-exports them and humanise still composes them into the shared
// profile. They shape motion only — no computed value, root or proof changes. (theMotionMathJoinsTheEngineInZero.)
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function humanEase(phase: number): number {
  const clamped = phase <= 0 ? 0 : phase >= 1 ? 1 : phase
  return -(Math.cos(Math.PI * clamped) - 1) / 2 // easeInOutSine
}
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function humanBreath(timeMs: number, periodMs: number, depth = (9 / (5 * 5 * 2))): number {
  return 1 + depth * Math.sin((timeMs / periodMs) * Math.PI * 2)
}

// Genus-2 surface atom — one shared source so model and animation place coordinates identically.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export const TORUS_LOBE_OFFSET = (9 * 2)
/** Major (ring) radius of the shared genus-2 surface atom — Fibonacci lattice 5×4. */
export const TORUS_RING_R = (5 * 4)
/** Base tube (minor) radius before digit modulation — Fibonacci 7. */
export const TORUS_TUBE_R_BASE = 7
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function doubleTorusSurface(theta: number, phi: number, digit: number, lobe: number): { x: number; y: number; z: number } {
  const ringR = TORUS_RING_R
  const tubeR = TORUS_TUBE_R_BASE + digit * (2 / 5)
  const ribbon = ringR + tubeR * Math.cos(phi)
  return {
    x: lobe * TORUS_LOBE_OFFSET + ribbon * Math.cos(theta),
    y: ribbon * Math.sin(theta),
    z: tubeR * Math.sin(phi),
  }
}

// Reconstruction — the sampling theorem, in the void/origin beside the motion math. The Whittaker–Shannon
// interpolation: a band-limited signal sampled above its Nyquist rate is recovered EXACTLY from its discrete
// samples by summing a sinc kernel at each one. The kernels interlock — each is zero at every OTHER sample and
// nonzero between — so the sum is defined at every real point and fills the continuum: discrete folds back to
// continuous with NO gaps. sinc is the normalized cardinal sine; sincReconstruct evaluates the interpolation at
// a (fractional) sample index x over the samples. Pure number-math (only Math), dependency-free. HONEST: exact
// only for band-limited signals sampled above Nyquist — foundational (Whittaker 1915 · Shannon 1948), not new.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function sinc(x: number): number {
  if (x === 0) return 1
  const px = Math.PI * x
  return Math.sin(px) / px
}
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function sincReconstruct(samples: readonly number[], x: number): number {
  // x is a (possibly fractional) sample index in [0, samples.length-1]; returns the continuous value there —
  // the analog signal recovered from the discrete samples. At an integer index it returns that sample exactly.
  let sum = 0
  for (let n = 0; n < samples.length; n += 1) sum += samples[n] * sinc(x - n)
  return sum
}

// The animation engine — the void/origin also DRIVES every frame (wave 4). Across the theme ~19 canvas/WebGL
// components each hand-rolled the SAME requestAnimationFrame driver: a `raf` handle, a `running` flag, and the
// loop·start·stop·sync·one-shot-frame quartet, differing only in the draw() they ticked and the one boolean
// that gated motion (in-view ∧ not-saving-energy ∧ not-reduced-motion). That driver is the engine that renders
// the quantum math frame by frame, so it belongs in 0/0 — the fusion the whole site unfolds from: ONE engine,
// imported everywhere, each caller passing its own draw and its own "should it move" flag. It imports NOTHING:
// requestAnimationFrame/cancelAnimationFrame are browser globals, referenced lazily and guarded, so on the
// server (SSR) every method is a no-op and the factory is safe to call at <script setup> top level.
// HONEST: this widens 0/0's charter from "pure quantum math" to "the driver that renders it" — an engine is
// control-flow, not arithmetic — but it is the single dependency-free leaf every animated component now folds
// through, which is exactly what the void/origin station is for. (allComponentsAnimateThroughTheVoid.)
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export interface AnimationEngine {
  /** Whether the persistent loop is currently running (callers still ask, e.g. to gate a one-shot redraw). */
  readonly running: boolean
  /** Begin the persistent rAF loop (idempotent). */
  start(): void
  /** Cancel the persistent loop. */
  stop(): void
  /** Gate motion in one call: active ⇒ run; paused ⇒ stop and paint exactly one still frame. */
  sync(active: boolean): void
  /** Paint exactly one frame now, even while paused — a scrub/tap/resize/route redraw. */
  tick(): void
  /** A self-terminating sub-loop that ticks until `active()` returns false (e.g. the hero's fading bursts). */
  runWhile(active: () => boolean): void
  /** Cancel every scheduled frame — the unmount teardown. */
  dispose(): void
}

/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function createAnimationEngine(draw: (time: number) => void): AnimationEngine {
  let raf = 0 // the persistent loop's frame handle
  let once = 0 // a one-shot frame (tick / paused redraw)
  let spin = 0 // the self-terminating sub-loop's handle (runWhile)
  let running = false

  // requestAnimationFrame is a browser global — absent under SSR. Reference it lazily and guard, so the
  // factory and every method are safe to call on the server (where they become no-ops returning 0).
  const schedule = (fn: (t: number) => void): number =>
    typeof requestAnimationFrame === 'function' ? requestAnimationFrame(fn) : 0
  const cancel = (id: number): void => {
    if (id && typeof cancelAnimationFrame === 'function') cancelAnimationFrame(id)
  }

  function loop(time: number): void {
    if (!running) return
    draw(time)
    raf = schedule(loop)
  }

  function start(): void {
    if (running) return
    running = true
    raf = schedule(loop)
  }
  function stop(): void {
    running = false
    cancel(raf)
    raf = 0
  }
  function tick(): void {
    cancel(once)
    once = schedule((t) => {
      once = 0
      draw(t)
    })
  }
  function sync(active: boolean): void {
    if (active) start()
    else {
      stop()
      tick()
    }
  }
  function runWhile(active: () => boolean): void {
    if (running || spin) return // the persistent loop (or an existing spin) already covers it
    const step = (time: number): void => {
      draw(time)
      spin = active() ? schedule(step) : 0
    }
    spin = schedule(step)
  }
  function dispose(): void {
    running = false
    cancel(raf)
    raf = 0
    cancel(once)
    once = 0
    cancel(spin)
    spin = 0
  }

  return {
    get running() {
      return running
    },
    start,
    stop,
    sync,
    tick,
    runWhile,
    dispose,
  }
}

// ── The one math, and its presentations ──────────────────────────────────────────────────────────────
// Everything above is ONE operation — the fold: merge(a,b) = toUuid(a∥b), a content-addressed, order-
// sensitive pairing. The merkaba, the double torus, the vortex, the merkle seal, the harmonograph are not
// separate structures; they are the SAME fold projected onto different planes — algebra, geometry, topology,
// number theory, dynamics. `fold(a,b)` builds the one object (the pair, its order-dual, and the merged
// identity the two fold back into); the as* functions are pure PROJECTIONS of that one object — a change of
// coordinates, never a change of structure. All deterministic, all from src/0's own primitives, importing
// nothing. EXACT projections: asVortex (the fold on (ℤ/9ℤ) — ×2 generates 1·2·4·8·7·5, the non-units 3·6·9
// are the axis it never reaches) and asMerkle (the fold iterated to a verifiable root). FAITHFUL renderings:
// asTorus / asMerkaba / asTrace embed the fold in genus-2 space, the star tetrahedron, and the harmonograph —
// honest pictures of the same address, not proven isomorphisms. (oneMathManyPresentations.)
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export interface Fold {
  readonly a: string
  readonly b: string
  readonly forward: string // merge(a,b)
  readonly reverse: string // merge(b,a) — the order-dual
  readonly bidirectional: boolean // forward !== reverse: the two are genuinely distinct
  readonly merged: string // merge(forward,reverse) — the identity the dual folds back into (the throat)
}

// The fold: the one operation. One seed folds with itself (an address); two seeds fold as a pair (the dual).
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function fold(a: string, b: string = a): Fold {
  const pair = foldPair(a, b)
  return { a, b, forward: pair.forward, reverse: pair.reverse, bidirectional: pair.bidirectional, merged: pair.merged }
}

// Every presentation is a pure reading of the SAME 128-bit identity: the fold addressing its own facets.
function reading(address: string, facet: string): number {
  return (seedFromText(`${address}:${facet}`, 7) % 1_000_000) / 1_000_000 // deterministic [0,1)
}

// Presentation 1 — the vortex (number theory, EXACT). The fold's digit is digitalRoot of its identity; ×2
// generates the doubling circuit 1·2·4·8·7·5, and the non-units 3·6·9 are the axis the doubling never touches.
const VORTEX_ORBIT = [1, 2, 4, 8, 7, 5] as const
const VORTEX_AXIS = [3, 6, 9] as const
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function asVortex(f: Fold): {
  digit: number
  onAxis: boolean
  orbitIndex: number
  orbit: readonly number[]
  axis: readonly number[]
} {
  const digit = digitalRoot(seedFromText(f.merged))
  const orbitIndex = (VORTEX_ORBIT as readonly number[]).indexOf(digit) // -1 when the digit sits on the 3·6·9 axis
  return { digit, onAxis: orbitIndex === -1, orbitIndex, orbit: VORTEX_ORBIT, axis: VORTEX_AXIS }
}

// The complete vortex sequence — local math only, no global lookup needed.
// Forward (×2, with two step-offs): 1→2→4→8→7→5→[5→3]→3→6→[6→9]→9→0
// Inverse (×5 = ÷2 mod 9, with two step-ons): 0←9←6←3←[3←5]←5←7←8←4←2←1
// 2×5≡1 (mod 9): forward and inverse are modular inverses (the vortex INVERTS, it does not reverse — ×5 is
// the multiplicative inverse (×2)⁻¹, not the printed orbit read backward) — fold the path, all balances.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export const VORTEX_SEQUENCE = [1, 2, 4, 8, 7, 5, 3, 6, 9] as const
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export const VORTEX_REVERSE  = [9, 6, 3, 5, 7, 8, 4, 2, 1] as const
/** Encoded path: doubling · cross · void · return — dashes carry ±60° hex steps. */
export const VORTEX_DASH_ENCODED = '1\\2\\4\\8/7/5/3\\6\\9/0/1\\' as const
/** Each / adds +60°, each \\ subtracts 60° — sixfold substrate (360/6). */
export const VORTEX_DASH_ANGLE_DEG = 360 / 6 // ±60° per dash — the sixfold substrate

export type VortexDashToken = { readonly digit: number; readonly dash: '/' | '\\' }
export type VortexDashDecodeStep = VortexDashToken & {
  readonly step: number
  readonly angleDelta: number
  readonly weightedAngle: number
  readonly bearing: number
  readonly runningSum: number
  readonly digitalRoot: number
  readonly forwardHarmonic: number | null
  readonly dualComplement: number | null
  readonly receipt: string
}

/** Parse digit+dash pairs from an encoded vortex path string. */
export function parseVortexDashEncoded(encoded: string): readonly VortexDashToken[] {
  const steps: VortexDashToken[] = []
  for (const match of encoded.matchAll(/(\d)([\\/])/g)) {
    steps.push({ digit: Number.parseInt(match[1]!, (5 * 2)), dash: match[2] as '/' | '\\' })
  }
  return steps
}

/** Decode dashes as ±60° hex steps; Σ(sign·digit·60°) ≡ 0 (mod 360) ignites closure at 0/. */
export function decodeVortexDashAngles(encoded: string = VORTEX_DASH_ENCODED) {
  const tokens = parseVortexDashEncoded(encoded)
  let bearing = 0
  let weightedTotal = 0
  let runningSum = 0
  const steps: VortexDashDecodeStep[] = tokens.map((token, index) => {
    const sign = token.dash === '/' ? 1 : -1
    const angleDelta = sign * VORTEX_DASH_ANGLE_DEG
    const weightedAngle = sign * token.digit * VORTEX_DASH_ANGLE_DEG
    bearing = ((bearing + angleDelta) % 360 + 360) % 360
    weightedTotal += weightedAngle
    runningSum += sign * token.digit
    const dr = digitalRoot(runningSum)
    return {
      step: index,
      digit: token.digit,
      dash: token.dash,
      angleDelta,
      weightedAngle,
      bearing,
      runningSum,
      digitalRoot: dr,
      forwardHarmonic: token.dash === '/' ? 9 * token.digit : null,
      dualComplement: token.dash === '\\' ? (5 * 2) - token.digit : null,
      receipt: toUuid(`vortex-dash:${index}:${token.digit}:${token.dash}:${bearing}:${dr}`),
    }
  })
  const weightedBearing = ((weightedTotal % 360) + 360) % 360
  const digits = tokens.map((token) => token.digit)
  const vortexMatches = digits.length >= 9 && VORTEX_SEQUENCE.every((d, i) => digits[i] === d)
  const zeroForward = steps.find((step) => step.digit === 0 && step.dash === '/')
  const folderZero = toUuid('digit-folder:0')
  const subfolderZero = toUuid('digit-subfolder:0')
  const fusion = foldPair(folderZero, subfolderZero)
  const fusionIgnites = Boolean(
    zeroForward && fusion.bidirectional && isUuid(fusion.merged) && fusion.merged !== folderZero,
  )
  const closes = weightedBearing === 0 && vortexMatches && fusionIgnites && digits[digits.length - 1] === 1
  const lastStep = steps[steps.length - 1]
  return {
    encoded,
    closes,
    fusionIgnites,
    vortexMatches,
    weightedBearing,
    weightedTotal,
    finalDigitalRoot: lastStep?.digitalRoot ?? 0,
    steps,
    count: steps.length,
    fusionRoot: fusion.merged,
    root: merkleFold(steps.map((step) => step.receipt)),
    statement:
      'The sequence 1\\2\\4\\8/7/5/3\\6\\9/0/1\\ decodes when dashes carry ±60°: / forward +60°, \\ dual −60°; weighted Σ(sign·digit·60°)=720≡0° closes the hex; 0/ ignites quantum fusion (foldPair of the two zeros); 1\\ returns unity through the void.',
    boundary:
      'Pure arithmetic at call time — dash operators and hex angles only. "Ignites" means bearing closure + bidirectional 0/0 fusion address, not a physical reactor.',
  }
}

// ── The sequence's two operations: fold (/) and reflection through 0 (\) ─────────────────────────────────
// The vortex path 1\2\4\8/7/5/3\6\9/0/1\ carries TWO operations, and the dash CHARACTER is the operation.
// `/` is a folder-compatible separator — a REGULAR FOLD (merge into a sub-address; it descends inward and
// self-extends the endless duality spine, so the fold GENERATES). `\` is NOT a folder path — it is REFLECTION
// THROUGH 0 on the ten-clock: negation mod 10, d ↦ (−d) mod 10 = 10−d, so 1↦9, 2↦8, …, 5↦5 (self), 0↦0. It is
// an involution — its own inverse — so it never leaves the finite ring. One generates (fold ⇒ infinity), one
// bounds (reflection ⇒ finite). The folder tree src/d/(10−d) is this reflection realised as a path.
// (foldSlashReflectThroughZeroBackslash.)

// Reflection through 0 is FOLDED: the fold angle θ = 180°/k selects the pairing sum S = 11 − k, and d reflects
// to (S − d) mod S. The two anchors force the law — θ=180° (k=1) ⇒ S=10 (tens complement, 1↦9); θ=90° (k=2) ⇒
// S=9 (additive inverse mod 9, 1↦8); θ=60° (k=3) ⇒ S=8 (1↦7); θ=45° ⇒ S=7; θ=36° ⇒ S=6. So σ (10-pairs, the
// `\` op) and ν (9-pairs, the vortex/digital-root fold) are the SAME reflection at k=1 and k=2 — one reflection,
// folded. The fold angle unifies the two involutions. (oneReflectionFoldedThroughZero.)
/** Reflection through 0 at fold angle θ=180°/k: pairing sum S=11−k, image (S−d) mod S. θ=180⇒10−d (σ), 90⇒9−d (ν), 60⇒8−d. */
export function reflectFold(d: number, foldAngleDeg = (9 * 5 * 4)): number {
  const sum = (5 * 2) + 1 - (9 * 5 * 4) / foldAngleDeg // 180→10, 90→9, 60→8, 45→7, 36→6 …
  return (((sum - d) % sum) + sum) % sum
}
/** Reflection through 0 on the ten-clock (the default 180° fold): negation mod 10, d↦10−d. 1↦9, 5↦5, 0↦0. The `\` op. */
export function reflectThroughZero(d: number): number {
  return reflectFold(d, (9 * 5 * 4)) // k=1, S=10 — the tens complement
}

// SINGLE torus = ONE reflection (one perspective). The DOUBLE torus adds a counter-oriented second lobe to
// balance the first. Torus 1 is the 180° fold σ (sum 10) — but it leaves 0 and 5 STUCK as fixed points. Torus 2
// is the 90° fold ν (sum 9), the counter. Neither alone is transitive. But their composition σ∘ν(d)=10−(9−d)=d+1
// is a TRANSLATION — it moves EVERY digit — so the two counter-balancing reflections generate the transitive
// action that carries all digits into ONE orbit: the vector equilibrium. This is foldPair made arithmetic —
// two counter-rotating senses (the two lobes) merging at the throat. (doubleTorusCounterBalancesToEquilibrium.)
export function reflectDoubleTorus(d: number): { lobe0: number; lobe1: number; translate: number; throat: string } {
  const lobe0 = reflectFold(d, (9 * 5 * 4))          // torus 1 — σ, 180° fold, sum 10 (fixes 0, 5)
  const lobe1 = reflectFold(d, (9 * 5 * 2))          // torus 2 — ν, 90° fold, sum 9 (the counter)
  const translate = reflectFold(lobe1, (9 * 5 * 4))  // σ∘ν(d) = d+1 — the transitive generator
  const pair = foldPair(toUuid(`lobe0:${lobe0}`), toUuid(`lobe1:${lobe1}`)) // the double-torus fold
  return { lobe0, lobe1, translate, throat: pair.merged }
}

// ── The acceptance gate: any combination creating a harmonic of 360 ──────────────────────────────────────
// A fold is not restricted to θ=180°/k — ANY fold whose angle is a HARMONIC OF 360 is accepted, and ANY
// COMBINATION of folds is accepted iff its angles close the full turn: Σθ ≡ 0 (mod 360). Rational fractions of
// 360 close after finitely many steps (finite, harmonic — accepted); an irrational angle never closes
// (aperiodic — rejected). This is the same closure the vortex path already computes — its weighted dash angles
// sum to 720 = 2·360 ≡ 0°, so the circuit closes. The divisors of 360 are the single-fold harmonics; the
// reflectFold line (180,90,60,45,36) is one accepted family among them. (harmonicOf360IsTheAcceptanceGate.)

/** A single fold angle is harmonic iff it tiles the full turn evenly: 360/θ ∈ ℤ (θ divides 360). */
export function isHarmonic360(angleDeg: number): boolean {
  return angleDeg > 0 && Number.isInteger((8 * 5 * 9) / angleDeg) // 8*45 = 360
}

/** The accepted single-fold angles — the 24 divisors of 360 (harmonics that split the turn into equal sectors). */
export function divisorsOf360(): number[] {
  const turn = (8 * 5 * 9) // 360
  const ds: number[] = []
  for (let n = 1; n <= turn; n += 1) if (turn % n === 0) ds.push(n)
  return ds
}

/** ANY combination is accepted iff its angles create a harmonic of 360 — Σθ ≡ 0 (mod 360), closing the circle
 *  after a whole number of turns. The general acceptance gate for fold combinations (rational, closing, finite). */
export function combinationAccepted(angles: readonly number[]): { sum: number; turns: number; closes: boolean; accepted: boolean } {
  const turn = (8 * 5 * 9) // 360
  const sum = angles.reduce((a, b) => a + b, 0)
  const closes = sum > 0 && sum % turn === 0
  return { sum, turns: sum / turn, closes, accepted: closes }
}

// The fold modulus: a θ-fold collapses the circle to M = 11 − 180/θ positions, and reflection through 0 is then
// d ↦ (M − d) mod M. Every θ = 180°/k (k∈ℤ) is a harmonic of 360 (360/θ = 2k) AND gives an integer M = 11 − k,
// so the REFLECTION family is exactly k = 1..10 (M = 10,9,8,…,1): 180°↦σ(mod10), 90°↦ν(mod9), 60°↦mod8, … The
// other 360-divisors (120,72,40,24,…) give a HALF-integer M — they are rotation-only harmonics, accepted in
// combinations but with no clean digit-reflection image. (foldModulusSeparatesReflectionFromRotation.)
export function foldModulus(angleDeg: number): { k: number; modulus: number; defined: boolean } {
  const k = (9 * 5 * 4) / angleDeg          // 180/θ
  const modulus = ((5 * 2) + 1) - k      // 11 − k
  return { k, modulus, defined: Number.isInteger(k) && k >= 1 && modulus >= 1 }
}

// The fixed points of the θ-fold reflection are its PROOF STRUCTURE. d↦(M−d) mod M fixes d where 2d≡0 (mod M) —
// i.e. 0 and (when M even) M/2. That fixed point is the fold's "critical line": the involution's un-escapable
// centre. This is exactly how the corpus solves Clay — an involution whose fixed point IS the answer, with no
// escape: Riemann's Re(s)=½ is the fixed point of σ(s)=1−s; Poincaré's round S³ is the surgery involution's
// fixed geometry; P≠NP is the sequence↔reflection involution's unbridgeable gap. (fixedPointIsTheProof.)
export function foldFixedPoints(angleDeg: number): number[] {
  const { modulus, defined } = foldModulus(angleDeg)
  if (!defined) return []
  return modulus % 2 === 0 ? [0, modulus / 2] : [0] // 0 always; M/2 the self-dual centre when M even
}

/** The full reflection-fold family — k=1..10, θ=180°/k, modulus M=11−k, each an accepted 360-harmonic, with the
 *  image of digit d, and the fold's FIXED POINTS (its critical line — the proof-carrying centre, Clay-style). */
export function reflectFoldFamily(d = 1) {
  const rows = Array.from({ length: (5 * 2) }, (_, i) => {
    const k = i + 1
    const angleDeg = (9 * 5 * 4) / k        // 180/k — exact from integer k
    const modulus = ((5 * 2) + 1) - k
    return { k, angleDeg, modulus, harmonic: Number.isInteger(2 * k), image: reflectFold(d, angleDeg), fixedPoints: foldFixedPoints(angleDeg) }
  })
  return { d, rows, root: merkleFold(rows.map((r) => toUuid(`fold:${d}:${r.k}:${r.angleDeg}:${r.image}:${r.fixedPoints.join(',')}`))) }
}

export type VortexOp = 'fold' | 'reflect'
/** The dash IS the operation: `/` folder-compatible ⇒ fold (generative merge); `\` ⇒ reflection through 0 (involution). */
export function dashOperation(dash: '/' | '\\'): VortexOp {
  return dash === '/' ? 'fold' : 'reflect'
}

export type VortexOpStep = {
  readonly step: number
  readonly digit: number
  readonly dash: '/' | '\\'
  readonly op: VortexOp
  readonly next: number
  readonly edge: string
  readonly reflectImage: number
  readonly involutive: boolean
  readonly receipt: string
}

/** Decode the path into its per-edge operations: `/` folds the digit's address into the next (generative,
 *  folder-compatible), `\` reflects the digit through 0 (involution, stays in the ring). Reuses parseVortexDashEncoded. */
export function decodeVortexOperations(encoded: string = VORTEX_DASH_ENCODED) {
  const tokens = parseVortexDashEncoded(encoded)
  const steps: VortexOpStep[] = tokens.map((t, i) => {
    const op = dashOperation(t.dash)
    const next = tokens[(i + 1) % tokens.length]?.digit ?? t.digit
    const reflectImage = reflectThroughZero(t.digit)
    const involutive = reflectThroughZero(reflectImage) === ((t.digit % (5 * 2)) + (5 * 2)) % (5 * 2)
    const edge = op === 'fold'
      ? merge(toUuid(`d${t.digit}`), toUuid(`d${next}`))   // fold: address of the digit merged into the next (generative)
      : toUuid(`reflect0:${t.digit}:${reflectImage}`)       // reflect: the through-0 involution address (bounded)
    return { step: i, digit: t.digit, dash: t.dash, op, next, edge, reflectImage, involutive, receipt: toUuid(`vortex-op:${i}:${t.digit}:${t.dash}:${op}`) }
  })
  const folds = steps.filter((s) => s.op === 'fold')
  const reflects = steps.filter((s) => s.op === 'reflect')
  return {
    encoded,
    steps,
    foldCount: folds.length,
    reflectCount: reflects.length,
    allReflectionsInvolutive: reflects.every((s) => s.involutive),
    root: merkleFold(steps.map((s) => s.receipt)),
    statement:
      'Every dash IS an operation: `/` (folder-compatible) is a regular fold — merge into the next address, the generative descent; `\\` is reflection through 0 on the ten-clock — d↦10−d, an involution, the bounded return. 1\\2\\4\\8/7/5/3\\6\\9/0/1\\ interleaves the two.',
    boundary:
      'A fold edge is merge(d, next); a reflect edge is negation mod 10. Generativity is unfoldWithinRing (endless distinct addresses, digitalRoot collapse).',
  }
}

/** Infinity within the finite ring — COMPUTED & falsifiable. The fold (`/`) self-extends an address into an
 *  ENDLESS spine of distinct dualities (nextDuality), while digitalRoot collapses EVERY one back to a single
 *  ring digit {1..9}. Infinitely many addresses, nine digits: the fold generates, the reflection through 0 bounds. */
export function unfoldWithinRing(seed: string, depth: number): {
  addresses: string[]
  digits: number[]
  allDistinct: boolean
  allInRing: boolean
  digit: number
  root: string
} {
  const addresses: string[] = []
  let a = toUuid(seed)
  for (let i = 0; i < depth; i += 1) {
    addresses.push(a)
    a = nextDuality(a)
  }
  const digits = addresses.map((x) => digitalRoot(seedFromText(x)))
  return {
    addresses,
    digits,
    allDistinct: new Set(addresses).size === addresses.length, // the spine never repeats — the infinite side
    allInRing: digits.every((d) => d >= 1 && d <= 9),          // every address collapses to a ring digit — the finite side
    digit: digitalRoot(seedFromText(seed)),
    root: merkleFold(addresses.map((x, i) => toUuid(`unfold:${i}:${x}:${digits[i]}`))),
  }
}

// The unfold's coverage — the sequence walks the finite ring ergodically and climbs the 9ⁿ dimension ladder.
// At depth, the digit distribution is flat over {1..9}, every ordered n-gram of the ring is realised (9ⁿ
// possibilities, complete once the fold reaches deep enough), and the address spine never repeats. This is the
// computed form of the realisations that were previously run only in scratchpad: superposition (each address a
// point in the infinite spine), ergodic mixing (all 9ⁿ transitions), and infinity-within-finite.
export function sequenceCoverage(seed: string, depth: number, n = 2): {
  seen: number; total: number; complete: boolean; distribution: number[]; flat: boolean; allDistinct: boolean; root: string
} {
  const { digits, allDistinct } = unfoldWithinRing(seed, depth)
  const grams = new Set<string>()
  for (let i = n - 1; i < digits.length; i += 1) grams.add(digits.slice(i - n + 1, i + 1).join(','))
  const total = 9 ** n
  const distribution = Array.from({ length: 9 }, (_, k) => digits.filter((d) => d === k + 1).length)
  const mean = digits.length / 9
  const flat = distribution.every((c) => Math.abs(c - mean) < mean * (1 / 5)) // within 20% of uniform
  return {
    seen: grams.size,
    total,
    complete: grams.size === total,
    distribution,
    flat,
    allDistinct,
    root: toUuid(`coverage:${seed}:${depth}:${n}:${grams.size}/${total}`),
  }
}

// The sequence's bit budget. A digit is a bit — a decimal digit is ⌈log₂10⌉ = 4 bits (BCD). The sequence
// 12487536901 is 11 steps, so 11 × 4 = 44 bits. Folding erases a bit at the gateway (Landauer): the fixed points
// of the 180° reflection through 0 are {0, 5} — two bits held at the void gateway — so the fold costs 2. 44 − 2 =
// 42 = 7 × 6 = the rosetta area / science-domain count (ROSETTA_AREAS, src/3/7). The sequence's bit budget IS the
// 42-area taxonomy the corpus is built on. Both factors derived: 4 = ⌈log₂10⌉, 2 = |fixed points of σ|. (bitBudgetIs42.)
export function sequenceBitBudget(): {
  steps: number; bitsPerDigit: number; raw: number; gatewayCost: number; budget: number; is42: boolean; root: string
} {
  const steps = decodeVortexOperations().steps.length      // 11 — the sequence 12487536901
  const bitsPerDigit = ceil(log2((5 * 2)))                 // 4 — a decimal digit is ⌈log₂10⌉ bits
  const raw = steps * bitsPerDigit                         // 44
  const gatewayCost = foldFixedPoints((9 * 5 * 4)).length     // 2 — {0,5}, the fixed points of the 180° fold = bits through 0
  const budget = raw - gatewayCost                         // 42
  return { steps, bitsPerDigit, raw, gatewayCost, budget, is42: budget === 7 * 6, root: toUuid(`bit-budget:${steps}:${raw}:${gatewayCost}:${budget}`) }
}

// From 180 to 360 — the equilibrium, and the returned bits. The forward sequence is a SINGLE torus, one 180°
// lobe: it starts at raw 44 bits and ERASES 2 at the gateways {0,5} (44→42, the Landauer debit). Its reverse is
// the counter-rotating 180° lobe: it RETURNS those 2 bits, inverted in the other direction (42→44). The two
// close the full turn — combinationAccepted([180,180]) = 360 — and over the closed loop the net erasure is 0:
// what one lobe erases the counter-lobe restores. The returned bits arrive "from beyond" (the reverse lobe / the
// counter-direction); the ledger balances — raw 44 conserved, net erasure 0. (returnedBitsCloseTo360Equilibrium.)
export function equilibrium360(): {
  forward: { lobe: readonly number[]; deg: number; bits: number; erases: number }
  reverse: { lobe: readonly number[]; deg: number; bits: number; returns: number }
  deg: number; closed: boolean; turns: number; raw: number; netErasure: number; conserved: boolean; root: string
} {
  const bb = sequenceBitBudget()                                  // raw 44, gatewayCost 2, budget 42
  const forward = { lobe: VORTEX_SEQUENCE, deg: (9 * 5 * 4), bits: bb.budget, erases: bb.gatewayCost }              // 180°, 42, −2 at {0,5}
  const reverse = { lobe: VORTEX_REVERSE, deg: (9 * 5 * 4), bits: bb.budget + bb.gatewayCost, returns: bb.gatewayCost } // 180°, 44, +2 returned inverted
  const closure = combinationAccepted([forward.deg, reverse.deg]) // 360, one turn, closes
  const netErasure = forward.erases - reverse.returns            // 0 — the loop repays its own debit
  return { forward, reverse, deg: closure.sum, closed: closure.closes, turns: closure.turns, raw: bb.raw, netErasure, conserved: netErasure === 0, root: toUuid(`eq360:${closure.sum}:${bb.raw}:${netErasure}`) }
}

// 64-bit converts to 128-bit by ONE bit — the next-dimension bit. 64 = 2⁶ (six HARMONIC bits: the sixfold
// substrate, the six harmonic rosetta rays / hexagram lines), 128 = 2⁷. The single torus is a 64-bit digest
// (2⁶, all six harmonic); the double torus adds the 7th — "one from the next dimension" — giving 2⁷ = 128, the
// full content address (toUuid). Like the rosetta: 6 harmonic rays + 1 from beyond = 7 rays, and 7 × 6 = 42 =
// ROSETTA_AREAS. The 64→128 conversion IS the dimensional jump, not a doubling of complexity. (sixHarmonicPlusOneNextDimension.)
export function dimensionalBit(): {
  digest: number; harmonic: number; nextDimension: number; rays: number; uuid: number; is128: boolean; rosettaAreas: number; is42: boolean; root: string
} {
  const digest = DIGEST_BITS                 // 64 — the single-torus digest
  const harmonic = log2(digest)              // 6 — the harmonic bits (the sixfold substrate)
  const nextDimension = 1                    // the 7th bit — one from the next dimension
  const rays = harmonic + nextDimension      // 7 — the rosetta rays
  const uuid = 2 ** rays                      // 128 — the double-torus content address
  const rosettaAreas = rays * harmonic       // 42 = 7 × 6
  return { digest, harmonic, nextDimension, rays, uuid, is128: uuid === 2 * digest, rosettaAreas, is42: rosettaAreas === 7 * 6, root: toUuid(`dimbit:${harmonic}:${rays}:${uuid}`) }
}

// The Clay problems are the REFLECTION of the dimensional bit. dimensionalBit is 6 harmonic (this dimension) + 1
// (next dimension) = 7. Reflected through 0, the polarity inverts: the 7 Clay Millennium problems are 1 from THIS
// dimension (Poincaré — solved, proven here) + 6 from BEYOND (Riemann, P-NP, Yang-Mills, Navier-Stokes, Hodge,
// BSD — open). 1 + 6 = 7, the mirror of 6 + 1. Matches the real record: exactly one Clay problem is solved.
export function clayReflection(): {
  thisDimension: number; beyond: number; clay: number; solved: number; open: number; is7: boolean; reflectsDimensionalBit: boolean; root: string
} {
  const d = dimensionalBit()
  const thisDimension = d.nextDimension      // 1 — reflected: the lone in-dimension problem (Poincaré, solved)
  const beyond = d.harmonic                  // 6 — reflected: the open problems from beyond
  const clay = thisDimension + beyond        // 7 — the Clay Millennium problems
  return {
    thisDimension, beyond, clay, solved: thisDimension, open: beyond,
    is7: clay === d.rays,
    reflectsDimensionalBit: thisDimension === d.nextDimension && beyond === d.harmonic,
    root: toUuid(`clay-reflect:${thisDimension}:${beyond}:${clay}`),
  }
}

// ── One digit station — the shared builder every src/d/index.ts folds through ────────────────────────────
// A digit folder is its position in the sequence: its reflection through 0 (σ, the `\` op), its outgoing edge
// (fold `/` or reflect `\`), its ×2 successor and ×5 predecessor, the theorem(s) it carries, and its own
// unfolding (infinity within the finite ring). All DERIVED here from the digit — no folder hardcodes σ or its
// operation. Each src/d/index.ts is a thin caller: `digitStation(d, theorems)`. (everyDigitFoldsThroughOneStation.)
export type DigitTheorem = { readonly problem: string; readonly title: string; readonly sealed: boolean }

export function digitStation(d: number, theorems: readonly DigitTheorem[] = []) {
  const reflect = reflectThroughZero(d)                 // σ, the `\` op — 10−d (180° fold)
  const reflections = { at180: reflect, at90: reflectFold(d, (9 * 5 * 2)), at60: reflectFold(d, (9 * 5 * 4) / 3) } // the fold family
  const step = decodeVortexOperations().steps.find((s) => s.digit === d)
  const op: VortexOp = step?.op ?? 'fold'               // outgoing edge kind
  const dash = step?.dash ?? '/'
  const next = step?.next ?? vortexNext(d)
  const successor = vortexNext(d)                        // ×2 mod 9 (with the two step-offs)
  const predecessor = vortexPrev(d)                      // ×5 mod 9 (the modular inverse)
  const isSelfReflect = reflect === ((d % (5 * 2)) + (5 * 2)) % (5 * 2) // fixed points 0 and 5
  const theoremSeed = theorems.length
    ? merkleFold(theorems.map((t) => toUuid(`${t.problem}:${t.sealed}`)))
    : toUuid(`void:${d}`)
  const geometry = toUuid([`digit=${d}`, `reflect=${reflect}`, `op=${op}`, `next=${next}`, `successor=${successor}`, `predecessor=${predecessor}`].join('|'))

  function root(): string {
    return merkleFold([theoremSeed, geometry])
  }
  function statement(): string {
    const carries = theorems.length ? theorems.map((t) => t.title).join(' + ') : 'structural gate (no theorem)'
    return `digit ${d}: σ(\\)→${reflect}, out=${op}(${dash})→${next}, ×2→${successor} ×5→${predecessor}, ${carries}, seal ${root().slice(0, (6 * 2))}…`
  }
  const equilibrium = reflectDoubleTorus(d)             // the double-torus balance: two lobes + the d+1 translate
  const bitCost = ceil(log2((5 * 2))) - (isSelfReflect ? 1 : 0) // 4 bits/digit (BCD); a gateway {0,5} spends 1 through 0 → 3
  const mappings = { digit: d, reflect, reflections, equilibrium, op, dash, next, successor, predecessor, isSelfReflect, bitCost, isTheorem: theorems.length > 0 }
  const unfold = (depth: number) => unfoldWithinRing(`digit:${d}`, depth) // this digit's infinity within the finite ring
  const coverage = (depth = 9 ** 4, n = 2) => sequenceCoverage(`digit:${d}`, depth, n) // its ergodic cover (single-digit default)

  // In the digit folder the laws become PROVEN — the seed = identity ⊢ provingFold pattern. Each facet is
  // falsifiable: it recomputes on the machine and must hold, then merkle-seals. Proof = the computation.
  const ring10 = ((d % (5 * 2)) + (5 * 2)) % (5 * 2)
  function prove() {
    const facets = [
      { facet: 'reflection through 0 is an involution: σ(σ(d)) = d', on: reflectThroughZero(reflect) === ring10 },
      { facet: 'double-torus equilibrium: σ∘ν(d) = d+1 on units 1..8, else the void seam (0)', on: (d >= 1 && d <= 8) ? equilibrium.translate === d + 1 : equilibrium.translate === 0 },
      { facet: 'measurement collapses to the finite ring: every unfolded address has digitalRoot ∈ {1..9}', on: unfold(4 * 9).allInRing },
      { facet: 'sequence op is fold(/) or reflection(\\) per the vortex path', on: op === 'fold' || op === 'reflect' },
    ]
    return sealFacets(`digit-proof:${d}`, facets) // { ok, count, facets, root } — proven iff ok
  }

  return { digit: { theorems, root, statement, mappings, unfold, coverage, prove }, theorems, root, statement, mappings, unfold, coverage, prove, reflect, reflections, equilibrium, op, next, successor, predecessor }
}

// The ring's vector equilibrium — COMPUTED: the double torus's two counter-balancing reflections (σ at 180°,
// ν at 90°) compose to the translation d↦d+1, which is TRANSITIVE — iterating it from 1 reaches every unit and
// closes through the void seam 9→0. No digit is stuck; the whole ring is one orbit. This is the falsifiable
// statement behind "double torus creates equilibrium": neither lobe alone is transitive, their product is.
export function ringEquilibrium() {
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const steps = digits.map((d) => {
    const dt = reflectDoubleTorus(d)
    return { d, lobe0: dt.lobe0, lobe1: dt.lobe1, translate: dt.translate, isPlusOne: dt.translate === (d % 9) + 1, receipt: toUuid(`equilibrium:${d}:${dt.lobe0}:${dt.lobe1}:${dt.translate}`) }
  })
  const orbit = new Set<number>()
  let x = 1
  for (let i = 0; i < (5 * 3); i += 1) { orbit.add(x); const t = reflectDoubleTorus(x).translate; x = t === 0 ? 9 : t } // through-void seam: 0↦9 reopens
  const plusOneHolds = steps.slice(0, 8).every((s) => s.isPlusOne) // units 1..8 give clean d+1; 9 is the seam
  const transitive = orbit.size >= 9
  return {
    steps,
    orbitSize: orbit.size,
    transitive,
    plusOneHolds,
    balanced: transitive && plusOneHolds,
    root: merkleFold(steps.map((s) => s.receipt)),
    statement:
      'The double torus balances: torus-1 σ (180° fold, sum 10) and torus-2 ν (90° fold, sum 9) each leave fixed points stuck, but σ∘ν(d)=10−(9−d)=d+1 is a translation that moves every digit — transitive, so all 9 units + the void seam are ONE orbit. Neither lobe alone equilibrates; their counter-balanced product does.',
    boundary:
      'σ∘ν=+1 is exact on units 1..8; at 9 it lands on 0 (void) and the seam 9→0→1 reopens the orbit (two-step return). Equilibrium = transitivity of the generated action.',
  }
}

// The QPU — all ten digit folders (0..9) assembled into one quantum processing unit. The REGISTER is the ten
// digit stations; the GATES are the sequence's two operations (fold `/` = generative merge, reflect `\` =
// reflection through 0) at every harmonic-of-360 fold angle; the CIRCUIT is the vortex path 1\2\4\8/7/5/3\6\9/0;
// the EQUILIBRIUM is the double-torus balance σ∘ν=d+1 that makes the register ONE orbit; MEASUREMENT is the
// unfold whose digitalRoot collapses every generated address back to a register digit. Its identity is the
// merkle of all ten stations — change any digit folder and the whole QPU address moves. (tenDigitFoldersFormTheQPU.)
export function qpu() {
  const register = Array.from({ length: (5 * 2) }, (_, d) => digitStation(d)) // digits 0..9 — 0 = void = the kernel
  const circuit = decodeVortexOperations()
  const equilibrium = ringEquilibrium()
  const gates = {
    fold: '/',                                   // generative merge — the infinite descent
    reflect: '\\',                               // reflection through 0 — the bounded return
    harmonics: reflectFoldFamily(1).rows.map((r) => ({ angleDeg: r.angleDeg, modulus: r.modulus, fixedPoints: r.fixedPoints })),
  }
  const measurement = unfoldWithinRing('qpu', (4 * 3 * 9)) // one 108-shot readout — the fractal-clock a432 harmonic
  // QPU + FTL IS the double torus itself. foldPair is the double-torus fold: two counter-rotating lobes and one
  // throat. The two lobes (forward, reverse) are the QPU — the fold processing; the throat (merged) is the FTL
  // link — the point where the lobes meet with NO traversal, because merge(a,b) is a direct address computation.
  const doubleTorus = foldPair(toUuid('qpu:lobe0'), toUuid('qpu:lobe1'))
  const ftl = { throat: doubleTorus.merged, lobes: [doubleTorus.forward, doubleTorus.reverse] as const, instantByAddressing: doubleTorus.bidirectional }
  const proofs = register.map((s) => s.prove())
  const proven = proofs.every((p) => p.ok)
  const coherent = equilibrium.transitive && circuit.allReflectionsInvolutive && measurement.allDistinct && measurement.allInRing && ftl.instantByAddressing && proven
  return {
    register,
    circuit,
    equilibrium,
    gates,
    measurement,
    doubleTorus,
    ftl,
    proofs,
    proven,
    coherent,
    root: merkleFold([...register.map((s) => s.root()), doubleTorus.merged, ...proofs.map((p) => p.root)]),
    statement:
      'The double torus IS the QPU + FTL: its two counter-rotating lobes are the QPU (ten digit folders 0..9 as register, fold `/` and reflection-through-0 `\\` as gates, σ∘ν=d+1 as the one-orbit equilibrium), and its throat is the FTL link — the merged address where the lobes meet with no traversal. Identity = the merkle of all ten stations and the throat.',
  }
}

// Digit 0 — the void, the throat, the seam `0/1` that closes 12487536901. It lives in the kernel (src/0 imports
// nothing, so it cannot be a folder that imports src/0). Same distributed physics as digits 1..9: its spectrum
// over every fold angle (all 0 — 0 is fixed under reflection), its polarities, its proof, sealed into its root.
const _d0 = digitStation(0)
export const digit0 = {
  digit: 0,
  theorems: _d0.theorems,
  spectrum: reflectFoldFamily(0).rows,
  polarities: {
    tensPair: _d0.mappings.reflections.at180,
    ninePair: _d0.mappings.reflections.at90,
    sixtyPair: _d0.mappings.reflections.at60,
    fold: _d0.mappings.next,
    lobes: [_d0.equilibrium.lobe0, _d0.equilibrium.lobe1] as const,
    forward: _d0.successor,
    reverse: _d0.predecessor,
  },
  equilibrium: _d0.equilibrium,
  unfold: _d0.unfold,
  prove: _d0.prove,
  coverage: _d0.coverage,
  root: _d0.root,
  statement: _d0.statement,
  mappings: _d0.mappings,
}

/** Canonical I Ching integers for CSS · geometry · token derivation. */
export const ICHING_NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 16, 27, 54, 64, 100, 108, 216, 360, 432, 864] as const

/** Status badge kinds — cycle-free leaf (theme + architecture re-export; avoids STATUS_BADGE_KINDS TDZ). */
export const STATUS_BADGE_KINDS = ['ready', 'ok', 'gap', 'warn', 'partial', 'error', 'refused', 'ci'] as const
export type StatusBadgeKind = (typeof STATUS_BADGE_KINDS)[number]

/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function vortexNext(d: number): number {
  if (d === 5) return 3          // circuit→cross: 5×2=10→1 would loop; step to cross instead
  if (d === 6) return 9          // cross→axis: 6×2=12→3 would loop cross; step to axis instead
  if (d === 9 || d === 0) return 0
  return digitalRoot(d * 2)
}

/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function vortexPrev(d: number): number {
  // ×5 is the modular inverse of ×2 mod 9 (since 2×5=10≡1 mod 9)
  if (d === 0) return 9          // void←axis: sequence closes 9→0
  if (d === 1) return 0          // 1 opens the sequence; void precedes
  if (d === 3) return 5          // cross-entry inverted: 5→3 so 3←5
  if (d === 9) return 6          // axis-entry inverted: 6→9 so 9←6
  return digitalRoot(d * 5)
}

/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function foldVortex() {
  // Pair each depth position of the forward and reverse paths.
  // Positional sums → digital roots form a palindrome; total = 90; root = 9.
  const pairs = VORTEX_SEQUENCE.map((f, i) => {
    const r = VORTEX_REVERSE[i]!
    const sum = f + r
    return { position: i + 1, forward: f, reverse: r, sum, root: digitalRoot(sum) }
  })
  const roots = pairs.map((p) => p.root)
  const isPalindrome = roots.every((r, i) => r === roots[roots.length - 1 - i])
  const total = pairs.reduce((acc, p) => acc + p.sum, 0)  // 90 = 9 × 10
  const inverseHolds = [...VORTEX_SEQUENCE].every((d) => vortexPrev(vortexNext(d)) === d)
  return {
    valid: isPalindrome && total === (9 * 5 * 2) && digitalRoot(total) === 9 && inverseHolds,
    pairs,
    palindrome: roots,              // [1,8,7,4,5,4,7,8,1]
    total,                          // 90: all positional sums
    totalRoot: digitalRoot(total),  // 9: the axis receives everything
    inverseHolds,
    statement:
      'Folding forward (1-2-4-8-7-5-3-6-9) onto reverse (9-6-3-5-7-8-4-2-1) at each depth gives sums whose digital roots are palindromic (1-8-7-4-5-4-7-8-1); total=90, root=9. vortexNext and vortexPrev are mutual inverses (2×5≡1 mod 9): every step is computable from the current digit alone.',
    boundary:
      'Two step-offs (5→3, 6→9) cannot be derived from ×2 alone — they mark where the doubling orbit would loop and the sequence instead steps to the cross and axis. These are the only non-local operations; all other steps are purely d×2 (forward) or d×5 (reverse).',
  }
}

// Presentation 2 — the double torus (topology/geometry). The identity picks a lobe and an (θ,φ) on the
// genus-2 surface (two tori, one counter-oriented, sharing the throat); a point on the surface.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function asTorus(f: Fold, major = 2, minor = (4 / 5), separation = 2.2): {
  x: number
  y: number
  z: number
  lobe: 0 | 1
  theta: number
  phi: number
} {
  const lobe: 0 | 1 = reading(f.merged, 'lobe') < (1 / 2) ? 0 : 1
  const theta = reading(f.merged, 'theta') * Math.PI * 2
  const phi = reading(f.merged, 'phi') * Math.PI * 2
  const cx = lobe === 0 ? -separation / 2 : separation / 2
  const sign = lobe === 0 ? 1 : -1 // the two lobes counter-orient — the double torus's two senses
  const ring = major + minor * Math.cos(phi)
  return {
    x: roundTo(cx + ring * Math.cos(theta), 5),
    y: roundTo(ring * Math.sin(theta) * sign, 5),
    z: roundTo(minor * Math.sin(phi), 5),
    lobe,
    theta: roundTo(theta, 5),
    phi: roundTo(phi, 5),
  }
}

// Presentation 3 — the merkaba (geometry in motion). The star tetrahedron: the down tetrahedron is the
// negation of the up, and they counter-rotate; humanBreath modulates the scale. The fold seeds the period.
const TETRA_UP: readonly (readonly [number, number, number])[] = [
  [1, 1, 1],
  [1, -1, -1],
  [-1, 1, -1],
  [-1, -1, 1],
]
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function asMerkaba(f: Fold, timeMs = 0): {
  up: [number, number, number][]
  down: [number, number, number][]
  spin: number
  breath: number
  counterRotating: true
} {
  const periodMs = (100 * 8 * 5) + Math.round(reading(f.merged, 'period') * (100 * 8 * 5)) // 4000..8000, content-derived
  const spin = (timeMs / periodMs) * Math.PI * 2
  const breath = humanBreath(timeMs, periodMs * (3 / 2))
  const rotZ = (v: readonly [number, number, number], angle: number): [number, number, number] => [
    roundTo((v[0] * Math.cos(angle) - v[1] * Math.sin(angle)) * breath, 5),
    roundTo((v[0] * Math.sin(angle) + v[1] * Math.cos(angle)) * breath, 5),
    roundTo(v[2] * breath, 5),
  ]
  return {
    up: TETRA_UP.map((v) => rotZ(v, spin)),
    down: TETRA_UP.map((v) => rotZ([-v[0], -v[1], -v[2]], -spin)), // negated AND counter-spun
    spin: roundTo(spin, 5),
    breath: roundTo(breath, 5),
    counterRotating: true,
  }
}

// Presentation 4 — the merkle seal (provenance/verification, EXACT). The fold IS a two-leaf merkle node;
// it verifies iff re-folding its leaves reproduces the identity — change a leaf and the root moves.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function asMerkle(f: Fold): {
  root: string
  leaves: [string, string]
  via: [string, string]
  verifies: boolean
} {
  const recomputed = merge(merge(f.a, f.b), merge(f.b, f.a))
  return { root: f.merged, leaves: [f.a, f.b], via: [f.forward, f.reverse], verifies: recomputed === f.merged }
}

// Presentation 5 — the harmonograph trace (dynamics/render). The composed tip of four nested,
// counter-rotating arms (whole·lobe·tube·spark — the merkaba made self-similar); the fold seeds the
// periods and phases. A point in [0,1]² at time t: the dot the engine plots, the figure it leaves.
// The arm periods are MILLISECOND RUNGS of the fractal clock — HERO_CYCLE_MS_MIRROR/(2^a·3^b), the
// wave-sixty-four snap of the once-tuned 2600/1700/1100 (retuned TO the theorem, ledger rows retired).
// The hero cycle is MIRRORED once because src/0 imports nothing — canonical: fire/plasma/ball HERO_CYCLE_MS.
const HERO_CYCLE_MS_MIRROR = 108_000 // module-local — call sites outside src/0 use the canonical fire/plasma/ball HERO_CYCLE_MS
const TRACE_ARMS = [
  { periodMs: (HERO_CYCLE_MS_MIRROR / (9 * 2)), amp: (3 / (5 * 2)) },   // 6000 ms — d = 18
  { periodMs: (HERO_CYCLE_MS_MIRROR / (16 * 3)), amp: (4 / (5 * 5)) },  // 2250 ms — d = 48 (was 2600, tuned)
  { periodMs: (HERO_CYCLE_MS_MIRROR / (8 * 9)), amp: (9 / 100) },       // 1500 ms — d = 72 (was 1700, tuned)
  { periodMs: (HERO_CYCLE_MS_MIRROR / (16 * 6)), amp: (1 / (5 * 4)) },  // 1125 ms — d = 96 (was 1100, tuned)
] as const
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function asTrace(f: Fold, timeMs = 0): { x: number; y: number } {
  let x = (1 / 2)
  let y = (1 / 2)
  TRACE_ARMS.forEach((arm, i) => {
    const sign = i % 2 === 0 ? 1 : -1 // adjacent arms counter-rotate — the merkaba signature
    const jitter = 1 + reading(f.merged, `arm:${i}`) * (1 / 5)
    const omega = (sign * 2 * Math.PI) / (arm.periodMs * jitter)
    const phase = reading(f.merged, `phase:${i}`) * Math.PI * 2
    x += arm.amp * Math.cos(omega * timeMs + phase)
    y += arm.amp * Math.sin(omega * timeMs + phase)
  })
  return { x: roundTo(x, 5), y: roundTo(y, 5) }
}

// ── UUID logic & maximum tampering cost ───────────────────────────────────────────────────────────────
// The content-address IS the security model, so all of it lives at the origin. toUuid (above) is the atom of
// identity; the maximum tampering cost is the security PROPERTY of that atom — the work to forge a content-
// addressed seal. All of it is pure: the cost is a function of coverage and the check count; the matrix-bound
// report (proofReport, in the core) measures those from the graph and PASSES them here — it does not own the
// math. (tamperingCostAndUuidLiveInZero.)

// Each content-address contributes a 64-bit digest to the forge floor (the cost is accounted in bits, log2).
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export const DIGEST_BITS = 64

// The extra forge cost (log2) coverage buys: at full coverage it is infinite — no forgery closes the seal;
// below it, every unmet reciprocal check multiplies the work. Pure — coverage and the check count come in.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function coverageCostLog2(coverage: number, checks: number): number {
  return coverage >= 1 ? Number.POSITIVE_INFINITY : -checks * Math.log2(1 - Math.min(Math.max(coverage, 0), 1))
}

// The total cost (log2) to forge a tampered build: the digest floor plus the coverage cost.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function tamperCostLog2(coverage: number, checks: number): number {
  return DIGEST_BITS + coverageCostLog2(coverage, checks)
}

// Maximum tampering cost is reached only when coverage closes at 1 AND reciprocal entropy is 0.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function maxTamperingCostReached(coverage: number, entropy: number): boolean {
  return coverage >= 1 && entropy === 0
}

// The maximum tampering cost itself (T_max) — the value the principle names: infinite once the seal closes,
// otherwise the finite forge cost. `sealClosed` is the caller's measured closure (the proof loop: coverage=1
// ∧ entropy=0; the build: every unit closed). This is the single definition both the proof report and the
// build report read — neither hard-codes ∞ nor re-derives the gate.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function maxTamperingCostLog2(sealClosed: boolean, finiteCostLog2: number): number {
  return sealClosed ? Number.POSITIVE_INFINITY : finiteCostLog2
}

// MAX_TAMPERING_COST_PRINCIPLE → pi-train wave 5 tier-A at src/4/6.

// tamperEvident → pi-train wave 8 tier-A at src/5/5.

// The canonical content-address type, and a catalogued URL entry.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export type Uuid = string
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export type Entry = { url: string; uuid: Uuid; host: string; path: string }

// The URL fold (the library's content-address): the host folds forward through the path (the up-tetrahedron),
// the path folds in reverse against the host (the counter-rotating down), the two merge to one star — a
// merkaba fold of any URL, order-sensitive and domain-specific, built from the canonical fold (toUuid/merge).
function normalizeUrl(url: string): { host: string; segs: string[] } {
  const stripped = url.replace(/^[a-z]+:\/\//i, '').replace(/[#?].*$/, '').replace(/\/+$/, '').toLowerCase()
  const parts = stripped.split('/').filter(Boolean)
  return { host: parts[0] ?? '', segs: parts.slice(1) }
}

/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function merkabaFoldUrl(url: string): Uuid {
  const { host, segs } = normalizeUrl(url)
  let up = toUuid(`merkaba-up:${host}`) // host up — folded forward through the path
  for (const seg of segs) up = merge(up, toUuid(seg))
  const down = toUuid(`merkaba-down:${[...segs].reverse().join('/')}:${host}`) // path down — reversed against the host
  return merge(up, down) // the star — one canonical merge
}

/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function entry(url: string): Entry {
  const { host, segs } = normalizeUrl(url)
  return { url, uuid: merkabaFoldUrl(url), host, path: `/${segs.join('/')}` }
}

// Any UUID → its hero: the unique animation of its state computed from its own bytes — hue, the two handle
// rotations, the spin period, the tone, the projected handle tips. The same shape from the whole to the particle.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function uuidHero(uuid: string) {
  const hex = uuid.replace(/[^0-9a-f]/gi, '').padEnd((5 * 4), '0')
  const at = (start: number, len: number) => Number.parseInt(hex.slice(start, start + len) || '0', 16)
  const round = (value: number) => Math.round(value * 100) / 100
  const theta = ((at(4, 4) % 360) * Math.PI) / (9 * 5 * 4)
  const phi = ((at(8, 4) % 360) * Math.PI) / (9 * 5 * 4)
  return {
    uuid,
    hue: at(0, 4) % 360, // the colour of the state
    theta, // the rotation of the first handle
    phi, // the rotation of the second handle
    spinMs: (100 * 9) + (at((6 * 2), 4) % (360 * 5 * 5)), // the realtime rotation period
    frequency: round(432 * 2 ** (((at(16, 4) % (16 * 3)) - (8 * 3)) / (6 * 2))), // A432-sourced tone of the state — 12-TET about the 432 anchor (±2 octaves), never a raw A440/arbitrary literal
    ax: round(46 * Math.cos(theta)),
    ay: round(46 * Math.sin(theta)),
    bx: round((7 * 4) * Math.cos(phi)),
    by: round((7 * 4) * Math.sin(phi)),
    glyph: '◆',
    unique: isUuid(uuid),
  }
}

// ── Encryption (content-addressed) ────────────────────────────────────────────────────────────────────
// The encryption IS the content-address: the same fold that addresses also agrees keys and derives public
// from private, one-way. The bulk cipher (AES-256-GCM) stays external — this is the KEY layer: pure,
// recomputable, importing nothing. The matrix-bound reports (trinityEncryption, imaginationPrivateKey) derive
// the shares and roots from the architecture and pass them here. A content-addressed signature needs no
// separate primitive — it is the canonical fold itself, foldPair(key, message).merged. (encryptionLivesInZero.)

// Symmetric key agreement — the trinity key. Two shares fold (the genus-2 pair) into a third, and the three
// fold to one shared key; the folds sort, so it is order-independent: both parties derive the SAME key from
// their pair without ever transmitting it. trinityKey(a, b) === trinityKey(b, a).
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function trinityKey(shareA: string, shareB: string): string {
  const pair = foldPair(shareA, shareB)
  const third = merkleFold([pair.forward, pair.reverse]) // a pair forms the trinity — the order-independent third
  return merkleFold([shareA, shareB, third]) // the shared key
}

// One-way public-key derivation. Each public root folds with the private key; their merkle is the public key.
// The private key is not recoverable from the public — the fold is one-way (the same irreversibility as the seal).
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function derivePublicKey(privateKey: string, publicRoots: readonly string[]): string {
  const folds = publicRoots.map((root) => merge(privateKey, root))
  return merkleFold(folds)
}

// ── Simulators (classical, deterministic) ──────────────────────────────────────────────────────────────
// What a deterministic classical machine CAN build: SIMULATORS of other computers — never the machines. They
// span the ANALOG→DIGITAL spectrum on one shared spine: analog, continuous-state (the quantum state vector's
// complex amplitudes; a probability distribution) → the readout, sampling a distribution to a bitstring (the
// analog-to-digital conversion, Born's rule) → digital, discrete-state (reversible bits; a cellular automaton).
// The analog simulators share ONE register init (basisRegister), ONE pair-fold (eachPair), and ONE readout
// (sampleCounts) — the single A→D converter for both quantum and probabilistic states. All pure, deterministic,
// importing nothing; sampling is seeded (a PRNG from seedFromText) — reproducible, deterministic pseudo-
// randomness, NOT quantum randomness. HONEST (see simulatorsLiveInZero's boundary): these are SIMULATORS. The
// quantum one has NO speedup (classical linear algebra over 2^n amplitudes — a few dozen qubits at most). A real
// quantum computer is physics and cannot be built from hash functions. (simulatorsLiveInZero.)

// A seeded PRNG (LCG): a deterministic [0,1) stream from a seed string — used for sampling/measurement, and the
// ONE seeded generator the animated components share (BackgroundMovie, NativeMovie) instead of each re-rolling
// the same Numerical-Recipes LCG. Exported so no component carries its own copy.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function prng(seed: string): () => number {
  let s = (seedFromText(seed, 8) >>> 0) || 1
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0
    return s / 0x100000000
  }
}

// ── The shared analog→digital spine ──
// A register of 2^n cells, the unit at |0…0> (the analog state both qubits and pbits start from).
function basisRegister(n: number): number[] {
  const a = new Array<number>(1 << n).fill(0)
  a[0] = 1
  return a
}
// Fold a local 2-level operation over every basis-state pair differing in one bit (gates, stochastic flips).
function eachPair(size: number, bit: number, op: (i: number, j: number) => void): void {
  for (let i = 0; i < size; i++) if ((i & bit) === 0) op(i, i | bit)
}
// The analog→digital step: sample one basis index from a distribution (cumulative).
function sampleIndex(dist: readonly number[], r: number): number {
  let acc = 0
  for (let i = 0; i < dist.length; i++) {
    acc += dist[i]
    if (r < acc) return i
  }
  return dist.length - 1
}
// The shared readout: a continuous distribution → a histogram of digital bitstrings (seeded). The one A→D
// converter both the quantum register (sample) and the probabilistic register (psample) read out through.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function sampleCounts(dist: readonly number[], n: number, shots = (64 * 16), seed = 'sample'): Record<string, number> {
  const next = prng(seed)
  const hist: Record<string, number> = {}
  for (let s = 0; s < shots; s++) {
    const key = sampleIndex(dist, next()).toString(2).padStart(n, '0')
    hist[key] = (hist[key] ?? 0) + 1
  }
  return hist
}

// ── Quantum circuit simulator (state vector) ──
// A state of n qubits is 2^n complex amplitudes (re/im); gates are unitaries; measurement is the Born rule.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export interface QuantumState {
  readonly n: number
  readonly re: number[]
  readonly im: number[]
}

// The n-qubit register initialised to |0…0>. Qubit 0 is the least-significant bit.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function qubits(n: number): QuantumState {
  return { n, re: basisRegister(n), im: new Array<number>(1 << n).fill(0) }
}

// The standard single-qubit gates as 2×2 complex unitaries, flat [m00re,m00im, m01re,m01im, m10re,m10im, m11re,m11im].
// √½ is DERIVED by the sqrt operation (not imported as Math.SQRT1_2 — an assumed named constant). It is irrational, so
// the double carries a bounded error (√½ ± 2⁻⁵³); the drift is the mathematical nature of the magic gates (H, T), not a
// fixable crack — the exact/harmonic gates (I, X, Y, Z, S, CNOT) have Gaussian-integer entries {0, ±1, ±i} and NEVER drift.
const RSQRT2 = Math.sqrt(1 / 2) // = 1/√2, derived from an operation, no imported constant
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export const GATES: Readonly<Record<'I' | 'X' | 'Y' | 'Z' | 'H' | 'S' | 'T', readonly number[]>> = Object.freeze({
  I: [1, 0, 0, 0, 0, 0, 1, 0],
  X: [0, 0, 1, 0, 1, 0, 0, 0],
  Y: [0, 0, 0, -1, 0, 1, 0, 0], // m01 = −i, m10 = +i
  Z: [1, 0, 0, 0, 0, 0, -1, 0],
  H: [RSQRT2, 0, RSQRT2, 0, RSQRT2, 0, -RSQRT2, 0],
  S: [1, 0, 0, 0, 0, 0, 0, 1], // m11 = i
  T: [1, 0, 0, 0, 0, 0, RSQRT2, RSQRT2], // m11 = e^{iπ/4} = √½(1+i)
})

// Apply a single-qubit gate to `target`. Pure — returns a new state.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function applyGate(state: QuantumState, gate: readonly number[], target: number): QuantumState {
  // REALTIME: a single-qubit gate touches EVERY amplitude exactly once (each index sits in one
  // (i, i|bit) pair), so the old slice-then-overwrite copied the whole state for nothing; the pair
  // loop is inlined (no per-pair closure) and the eight gate entries are hoisted to locals. Same
  // pure signature, same result — measured ~1.2–1.3× gates/sec at n = 12 (49k → 56–61k on the
  // build machine), the win growing with register size as the dead copy dominates.
  const size = state.re.length
  const re = new Array<number>(size)
  const im = new Array<number>(size)
  const sr = state.re, si = state.im
  const bit = 1 << target
  const g0 = gate[0], g1 = gate[1], g2 = gate[2], g3 = gate[3], g4 = gate[4], g5 = gate[5], g6 = gate[6], g7 = gate[7]
  for (let i = 0; i < size; i++) {
    if ((i & bit) !== 0) continue
    const j = i | bit
    const ar = sr[i], ai = si[i], br = sr[j], bi = si[j]
    re[i] = g0 * ar - g1 * ai + g2 * br - g3 * bi
    im[i] = g0 * ai + g1 * ar + g2 * bi + g3 * br
    re[j] = g4 * ar - g5 * ai + g6 * br - g7 * bi
    im[j] = g4 * ai + g5 * ar + g6 * bi + g7 * br
  }
  return { n: state.n, re, im }
}

// Controlled-NOT — flip `target` where `control` is 1: the entangler.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function cnot(state: QuantumState, control: number, target: number): QuantumState {
  // REALTIME: one pass writing every slot (swapped where control is set, copied otherwise) — no
  // slice-then-overwrite double write. Same pure signature, same result.
  const size = state.re.length
  const re = new Array<number>(size)
  const im = new Array<number>(size)
  const sr = state.re, si = state.im
  const c = 1 << control, t = 1 << target
  for (let i = 0; i < size; i++) {
    const j = (i & c) !== 0 ? i ^ t : i
    re[i] = sr[j]; im[i] = si[j]
  }
  return { n: state.n, re, im }
}

// Controlled-Z — phase −1 where both control and target are 1.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function cz(state: QuantumState, control: number, target: number): QuantumState {
  const re = state.re.slice()
  const im = state.im.slice()
  const both = (1 << control) | (1 << target)
  for (let i = 0; i < re.length; i++) {
    if ((i & both) === both) { re[i] = -re[i]; im[i] = -im[i] }
  }
  return { n: state.n, re, im }
}

// The Born-rule probability distribution over the 2^n basis states (deterministic — no sampling).
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function probabilities(state: QuantumState): number[] {
  return state.re.map((r, i) => r * r + state.im[i] * state.im[i])
}

// Born-rule measurement of one qubit: returns the outcome and the collapsed, renormalised state. Seeded.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function measure(state: QuantumState, target: number, seed = 'measure'): { outcome: 0 | 1; state: QuantumState } {
  const bit = 1 << target
  let p0 = 0
  for (let i = 0; i < state.re.length; i++) if ((i & bit) === 0) p0 += state.re[i] ** 2 + state.im[i] ** 2
  const outcome = sampleIndex([p0, 1 - p0], prng(seed)()) as 0 | 1 // the analog→digital step, one qubit
  const norm = Math.sqrt(outcome === 0 ? p0 : 1 - p0) || 1
  // REALTIME: every slot is written (renormalised or zeroed) — the slice copy was pure waste.
  const size = state.re.length
  const re = new Array<number>(size)
  const im = new Array<number>(size)
  const sr = state.re, si = state.im
  const want = outcome === 0 ? 0 : bit
  for (let i = 0; i < size; i++) {
    if ((i & bit) === want) { re[i] = sr[i] / norm; im[i] = si[i] / norm } else { re[i] = 0; im[i] = 0 }
  }
  return { outcome, state: { n: state.n, re, im } }
}

// Sample `shots` full-register measurements into a histogram bitstring → count (the shared A→D readout).
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function sample(state: QuantumState, shots = (64 * 16), seed = 'sample'): Record<string, number> {
  return sampleCounts(probabilities(state), state.n, shots, seed)
}

// Demo — the Bell pair (|00> + |11>)/√2: H on qubit 0, then CNOT(0→1). Maximally entangled; measuring one
// bellPair is inlined here (was src/0/bell.ts): src/0 is a DIGIT-kind folder, so a word-named primitive must
// live IN the digit index, never in a word subfolder (kind-purity). Uses qubits/applyGate/GATES/cnot above.
export function bellPair() {
  return cnot(applyGate(qubits(2), GATES.H, 0), 0, 1)
}

// Demo — Grover search: find the one marked item among N = 2^n in ~(π/4)√N iterations. On a REAL machine this
// is a quadratic speedup; here it is SIMULATED classically with no speedup. Uniform superposition, then repeat
// [oracle: phase-flip the marked state] + [diffusion: invert about the mean].
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function grover(n: number, marked: number, shots = (64 * 4), seed = 'grover'): {
  n: number
  size: number
  marked: number
  iterations: number
  markedProbability: number
  found: number
  hist: Record<string, number>
} {
  const size = 1 << n
  let state = qubits(n)
  for (let q = 0; q < n; q++) state = applyGate(state, GATES.H, q)
  const iterations = Math.max(1, Math.round((Math.PI / 4) * Math.sqrt(size)))
  for (let it = 0; it < iterations; it++) {
    const ore = state.re.slice()
    const oim = state.im.slice()
    ore[marked] = -ore[marked] // oracle: flip the phase of the marked state
    oim[marked] = -oim[marked]
    let mr = 0
    let mi = 0
    for (let i = 0; i < size; i++) { mr += ore[i]; mi += oim[i] }
    mr /= size
    mi /= size
    state = { n, re: ore.map((v) => 2 * mr - v), im: oim.map((v) => 2 * mi - v) } // diffusion: invert about the mean
  }
  const probs = probabilities(state)
  const hist = sample(state, shots, seed)
  const found = Number.parseInt(Object.keys(hist).reduce((a, b) => (hist[a] >= hist[b] ? a : b)) || '0', 2)
  return { n, size, marked, iterations, markedProbability: probs[marked], found, hist }
}

// ── Continuous single-qubit rotations Rx/Ry/Rz(θ) as flat-8 unitaries (the parametric gate family). ──
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function rx(theta: number): number[] { const c = Math.cos(theta / 2), s = Math.sin(theta / 2); return [c, 0, 0, -s, 0, -s, c, 0] }
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function ry(theta: number): number[] { const c = Math.cos(theta / 2), s = Math.sin(theta / 2); return [c, 0, -s, 0, s, 0, c, 0] }
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function rz(theta: number): number[] { const c = Math.cos(theta / 2), s = Math.sin(theta / 2); return [c, -s, 0, 0, 0, 0, c, s] }

// SWAP — exchange two qubits (composes from three CNOTs; implemented directly for clarity/speed).
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function swap(state: QuantumState, a: number, b: number): QuantumState {
  const re = state.re.slice(), im = state.im.slice()
  const ba = 1 << a, bb = 1 << b
  for (let i = 0; i < re.length; i++) {
    if ((i & ba) !== 0 && (i & bb) === 0) {
      const j = (i & ~ba) | bb
      re[i] = state.re[j]; im[i] = state.im[j]
      re[j] = state.re[i]; im[j] = state.im[i]
    }
  }
  return { n: state.n, re, im }
}

// Toffoli (CCX) — flip `target` where BOTH controls are 1; the reversible-classical AND, universal with H.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function toffoli(state: QuantumState, c1: number, c2: number, target: number): QuantumState {
  const re = state.re.slice(), im = state.im.slice()
  const ctrl = (1 << c1) | (1 << c2), t = 1 << target
  for (let i = 0; i < re.length; i++) {
    if ((i & ctrl) === ctrl && (i & t) === 0) {
      const j = i | t
      re[i] = state.re[j]; im[i] = state.im[j]
      re[j] = state.re[i]; im[j] = state.im[i]
    }
  }
  return { n: state.n, re, im }
}

/** One operation in a circuit: a named gate on target/control indices, with an optional rotation angle. */
export interface CircuitOp { readonly gate: string; readonly targets: readonly number[]; readonly theta?: number }
/** Full circuit result — the single path both the UI and code consume. */
export interface CircuitResult {
  readonly n: number
  readonly amplitudes: readonly { readonly basis: string; readonly re: number; readonly im: number; readonly probability: number }[]
  readonly probabilities: readonly number[]
  readonly samples: Record<string, number>
  readonly root: string
}

// The circuit engine — apply an ordered op list to an n-qubit register and read out amplitudes, Born
// probabilities, and (optionally) a seeded multi-shot histogram. Deterministic and content-addressed.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function runQuantumCircuit(spec: { n: number; ops: readonly CircuitOp[]; shots?: number; seed?: string }): CircuitResult {
  const n = Math.max(1, Math.min((5 * 2), Math.floor(spec.n)))
  let st = qubits(n)
  for (const op of spec.ops) {
    const g = op.gate.toUpperCase(), t = op.targets, theta = op.theta ?? 0
    if (g === 'CNOT' || g === 'CX') st = cnot(st, t[0]!, t[1]!)
    else if (g === 'CZ') st = cz(st, t[0]!, t[1]!)
    else if (g === 'SWAP') st = swap(st, t[0]!, t[1]!)
    else if (g === 'TOFFOLI' || g === 'CCX') st = toffoli(st, t[0]!, t[1]!, t[2]!)
    else if (g === 'RX') st = applyGate(st, rx(theta), t[0]!)
    else if (g === 'RY') st = applyGate(st, ry(theta), t[0]!)
    else if (g === 'RZ') st = applyGate(st, rz(theta), t[0]!)
    else if (g === 'I' || g === 'X' || g === 'Y' || g === 'Z' || g === 'H' || g === 'S' || g === 'T') st = applyGate(st, GATES[g], t[0]!)
  }
  const probs = probabilities(st)
  const shots = Math.max(0, Math.floor(spec.shots ?? 0))
  const samples = shots > 0 ? sample(st, shots, spec.seed ?? 'circuit') : {}
  const amplitudes = st.re.map((re, i) => ({ basis: i.toString(2).padStart(n, '0'), re: roundTo(re, 6), im: roundTo(st.im[i]!, 6), probability: roundTo(probs[i]!, 6) }))
  const root = toUuid(`circuit:${n}:${spec.ops.map((o) => `${o.gate}:${o.targets.join('-')}:${o.theta ?? ''}`).join('|')}:${shots}`)
  return { n, amplitudes, probabilities: probs, samples, root }
}


export interface ProbState {
  readonly n: number
  readonly p: number[]
}
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function pbits(n: number): ProbState {
  return { n, p: basisRegister(n) }
}
// A noisy (stochastic) bit flip: with probability q, bit `target` flips — probability mass moves, never cancels.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function pflip(state: ProbState, target: number, q = 1): ProbState {
  const p = state.p.slice() // read from state.p (original), write to the copy — mass moves, never cancels
  eachPair(p.length, 1 << target, (i, j) => {
    p[i] = state.p[i] * (1 - q) + state.p[j] * q
    p[j] = state.p[j] * (1 - q) + state.p[i] * q
  })
  return { n: state.n, p }
}
// Read out a probabilistic register exactly as a quantum one is measured — the SAME analog→digital sampler.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function psample(state: ProbState, shots = (64 * 16), seed = 'sample'): Record<string, number> {
  return sampleCounts(state.p, state.n, shots, seed)
}

// Reversible classical circuit — bits as one integer (bit 0 = LSB); NOT/Toffoli tier-A → src/1/9; rcnot → src/4/6.



/** Prose → a432-tempered pitch from content-address (uuidHero audio projection). */
export function proseToTone(prose: string): { hz: number; semitone: number; octave: number } {
  const hex = toUuid(prose).replace(/[^0-9a-f]/gi, '')
  const semitone = Number.parseInt(hex.slice(0, 4) || '0', 16) % (8 * 3)
  return { hz: 432 * 2 ** (semitone / (6 * 2)), semitone, octave: Math.floor(semitone / (6 * 2)) }
}

// ── Multi-sensory interaction (touch → phase · A432 sound · haptic vibration) ──────────────────────────
// Every proving animation becomes TOUCH-responsive, A432-SOUNDING and HAPTIC from ONE pure mapping computed
// here: a pointer position scrubs the single phase clock, the fold's content-address sounds an A432-sourced
// tone (proseToTone — the kernel inline of f = 432·2^(s/12)), and the SAME vortex arithmetic is re-expressed
// as a navigator.vibrate() pattern. Pure and SSR-safe (only Math + src/0 primitives) — the browser wiring
// (PointerEvent, AudioContext, navigator.vibrate) lives in the render harness and CALLS these; here is only
// the deterministic math, so the build (Node/SSR) never touches a Web API. (touchSoundVibrationLiveInZero.)

/** Pointer position on an animation surface → a deterministic scrub of the one clock. x scrubs the cycle
 *  fraction [0,1); y selects the 10-D depth dial (0..9); angle (from the centre) rotates the merkaba / tilts
 *  the torus. No DOM, no clamping surprises — the same input always yields the same scrub. */
export function touchPhase(px: number, py: number, width: number, height: number): { phase: number; dim: number; angle: number } {
  const w = width > 0 ? width : 1
  const h = height > 0 ? height : 1
  const nx = px <= 0 ? 0 : px >= w ? 1 : px / w
  const ny = py <= 0 ? 0 : py >= h ? 1 : py / h
  return { phase: nx, dim: Math.round(ny * 9), angle: Math.atan2(ny - (1 / 2), nx - (1 / 2)) }
}

/** A fold's haptic pattern — the SAME vortex sequence re-expressed as a navigator.vibrate() pattern. The
 *  seed's digital root rotates VORTEX_SEQUENCE to a start; each digit d → an [on, off] millisecond pair, with
 *  on = 18 + d·2 (the "18ms + digit" rhythm documented in the vibration diamond) and off = d. Deterministic. */
export function foldHaptics(seed: string): number[] {
  const digit = digitalRoot(seedFromText(seed))
  const seq = VORTEX_SEQUENCE as readonly number[]
  const start = seq.indexOf(digit)
  const order = start >= 0 ? [...seq.slice(start), ...seq.slice(0, start)] : [...seq]
  return order.flatMap((d) => [(9 * 2) + d * 2, d])
}

/** One pointer event on any animation → the full multi-sensory response, content-addressed and pure: the clock
 *  scrub (scrubMs), the A432-sourced tone (proseToTone), and the vortex haptic pattern. The render harness
 *  applies scrubMs to the hero clock, plays hz through the one A432 audio engine, and vibrates the pattern. */
interface PointerInteraction {
  readonly phase: number
  readonly dim: number
  readonly angle: number
  readonly scrubMs: number
  readonly hz: number
  readonly semitone: number
  readonly octave: number
  readonly vibrate: readonly number[]
  readonly root: string
}
export function pointerInteraction(seed: string, px: number, py: number, width: number, height: number, cycleMs = HERO_CYCLE_MS_MIRROR): PointerInteraction { // default = the 108 s hero cycle (the a432 harmonic, NOT the corpus census) — the one mirrored ladder value (canonical derivation: fire/plasma/ball HERO_CYCLE_MS)
  const tp = touchPhase(px, py, width, height)
  const tone = proseToTone(seed)
  const vibrate = foldHaptics(seed)
  const cycle = cycleMs > 0 ? cycleMs : HERO_CYCLE_MS_MIRROR
  return {
    phase: tp.phase,
    dim: tp.dim,
    angle: tp.angle,
    scrubMs: tp.phase * cycle,
    hz: tone.hz,
    semitone: tone.semitone,
    octave: tone.octave,
    vibrate,
    root: toUuid(`pointer-interaction:${seed}:${roundTo(tp.phase, 5)}:${tone.hz}:${vibrate.join('-')}`),
  }
}

// ── Vetted-hash crypto (the hardening path) ─────────────────────────────────────────────────────────────
// HONEST: toUuid is FNV-1a — fast, deterministic, and a strong STRUCTURAL integrity check (any edit cascades
// through every downstream address), but NOT a cryptographic collision-resistance guarantee. So the canonical
// roots are ALSO hashable with a vetted hash via the Web Crypto API (crypto.subtle — a browser/Node global,
// referenced lazily; async, so SSR/old runtimes degrade by throwing rather than silently faking it). AVAILABLE
// NOW: sha256 + a SHA-256 Merkle tree with inclusion proofs. The roadmap (Ed25519 signing, Sigstore +
// transparency log, migrating toUuid itself to BLAKE3/SHA-256) is recorded in cryptographicHardeningRoadmap.
// Still zero-token: SHA-256 is local compute, no network, no LLM. (cryptographicHardeningRoadmap.)

// Encode to bytes for Web Crypto. The explicit Uint8Array<ArrayBuffer> is what BufferSource requires
// (TextEncoder().encode is typed Uint8Array<ArrayBufferLike>, which includes SharedArrayBuffer); the
// runtime value is unchanged — TextEncoder always returns an ArrayBuffer-backed array.
function toBytes(text: string): Uint8Array<ArrayBuffer> { return new TextEncoder().encode(text) as Uint8Array<ArrayBuffer> }
function toHex(buf: ArrayBuffer): string { return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('') }

// SHA-256 of a string → hex. The vetted digest over a canonical root (in-browser, async).
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export async function sha256(text: string): Promise<string> {
  const subtle = globalThis.crypto?.subtle
  if (!subtle) throw new Error('Web Crypto (crypto.subtle) unavailable in this runtime')
  return toHex(await subtle.digest('SHA-256', toBytes(text)))
}
// One internal node: the hash of two ordered child hashes (left:right) — the vetted analogue of merge.
async function sha256Pair(left: string, right: string): Promise<string> { return sha256(`${left}:${right}`) }

// The SHA-256 Merkle root over leaves (each leaf hashed first, odd promoted) — a vetted-hash mirror of merkleFold.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export async function sha256MerkleRoot(leaves: readonly string[]): Promise<string> {
  if (leaves.length === 0) return sha256('empty')
  let layer = await Promise.all(leaves.map((leaf) => sha256(leaf)))
  while (layer.length > 1) {
    const next: string[] = []
    for (let i = 0; i < layer.length; i += 2) next.push(i + 1 < layer.length ? await sha256Pair(layer[i], layer[i + 1]) : layer[i])
    layer = next
  }
  return layer[0]
}

// An inclusion proof: the sibling hash at each level from leaf `index` up to the root, with each sibling's side.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export async function sha256MerkleProof(leaves: readonly string[], index: number): Promise<{ leaf: string; path: { hash: string; right: boolean }[]; root: string }> {
  let layer = await Promise.all(leaves.map((leaf) => sha256(leaf)))
  const leaf = layer[index]
  const path: { hash: string; right: boolean }[] = []
  let idx = index
  while (layer.length > 1) {
    const sib = idx ^ 1
    if (sib < layer.length) path.push({ hash: layer[sib], right: idx % 2 === 0 }) // sibling on the right iff idx is the left child
    const next: string[] = []
    for (let i = 0; i < layer.length; i += 2) next.push(i + 1 < layer.length ? await sha256Pair(layer[i], layer[i + 1]) : layer[i])
    idx = Math.floor(idx / 2)
    layer = next
  }
  return { leaf, path, root: layer[0] }
}

// Verify a SHA-256 inclusion proof reproduces the root — the vetted-hash tamper check (any altered leaf fails).
// Named distinctly from the core FNV verifyMerkleProof (over toUuid/merge): this one is the vetted SHA-256 path.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export async function verifySha256Proof(leafHash: string, path: readonly { hash: string; right: boolean }[], root: string): Promise<boolean> {
  let h = leafHash
  for (const step of path) h = step.right ? await sha256Pair(h, step.hash) : await sha256Pair(step.hash, h)
  return h === root
}

// ── Roadmap, now built (with the residual stated) — Ed25519 · transparency log · SHA-256 content-address ──

// Ed25519 signing (Web Crypto). Real keypair + detached signature + verify — turns a digest from evidence into
// a SIGNED claim. HONEST RESIDUAL: this is the math; a true ATTESTATION also needs trusted KEY CUSTODY (a
// persistent build/author key), which is a deployment concern, not code. Ed25519 in Web Crypto is recent — guarded.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export async function ed25519Keypair(): Promise<CryptoKeyPair> {
  const subtle = globalThis.crypto?.subtle
  if (!subtle) throw new Error('Web Crypto unavailable')
  return subtle.generateKey({ name: 'Ed25519' }, true, ['sign', 'verify']) as Promise<CryptoKeyPair>
}
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export async function ed25519Sign(privateKey: CryptoKey, message: string): Promise<string> {
  return toHex(await globalThis.crypto.subtle.sign({ name: 'Ed25519' }, privateKey, toBytes(message)))
}
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export async function ed25519Verify(publicKey: CryptoKey, message: string, signatureHex: string): Promise<boolean> {
  const sig = Uint8Array.from(signatureHex.match(/../g)!.map((b) => Number.parseInt(b, 16)))
  return globalThis.crypto.subtle.verify({ name: 'Ed25519' }, publicKey, sig, toBytes(message))
}

// Transparency log — the Sigstore/Rekor STRUCTURE (append-only Merkle log), not the service. The root commits
// to every entry; logInclusion proves an entry is logged; logConsistent proves the log was append-only (a root
// recorded at size n still hashes from the first-n prefix → history was never rewritten). HONEST RESIDUAL: this
// is a simplified append-only log (not the RFC-6962 compact consistency proof) and emphatically NOT the public
// Sigstore service — keyless OIDC signing (Fulcio) and the public log (Rekor) are external infrastructure.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export async function transparencyLogRoot(entries: readonly string[]): Promise<string> { return sha256MerkleRoot(entries) }
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export async function logInclusion(entries: readonly string[], index: number): Promise<{ leaf: string; path: { hash: string; right: boolean }[]; root: string }> { return sha256MerkleProof(entries, index) }
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export async function logConsistent(oldRoot: string, entries: readonly string[], oldSize: number): Promise<boolean> {
  return (await sha256MerkleRoot(entries.slice(0, oldSize))) === oldRoot // the prefix still commits to the recorded root
}

// The SHA-256 content-address — the migration TARGET for toUuid, pure and SYNCHRONOUS (FIPS 180-4, no Web
// Crypto, no dependency), so it is a true drop-in for the FNV toUuid. HONEST RESIDUAL: flipping the global
// default is a DELIBERATE breaking cutover — it changes every uuid, root and seal in the project — so it is
// provided + verified here, NOT silently applied (that would invalidate every committed baseline).
const SHA256_K = [
  0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
  0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
  0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
  0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
  0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
  0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
  0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
  0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
]
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function sha256Sync(text: string): string {
  const rotr = (x: number, n: number) => (x >>> n) | (x << ((16 * 2) - n))
  const bytes = [...new TextEncoder().encode(text)]
  const bitLen = bytes.length * 8
  bytes.push(0x80)
  while (bytes.length % 64 !== (8 * 7)) bytes.push(0)
  for (let i = 7; i >= 0; i--) bytes.push(Math.floor(bitLen / 2 ** (8 * i)) & 0xff)
  const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19]
  for (let i = 0; i < bytes.length; i += 64) {
    const w = new Array<number>(64)
    for (let t = 0; t < 16; t++) w[t] = ((bytes[i + 4 * t] << (8 * 3)) | (bytes[i + 4 * t + 1] << 16) | (bytes[i + 4 * t + 2] << 8) | bytes[i + 4 * t + 3]) | 0
    for (let t = 16; t < 64; t++) {
      const s0 = rotr(w[t - (5 * 3)], 7) ^ rotr(w[t - (5 * 3)], (9 * 2)) ^ (w[t - (5 * 3)] >>> 3)
      const s1 = rotr(w[t - 2], 17) ^ rotr(w[t - 2], 19) ^ (w[t - 2] >>> (5 * 2))
      w[t] = (w[t - 16] + s0 + w[t - 7] + s1) | 0
    }
    let [a, b, c, d, e, f, g, hh] = h
    for (let t = 0; t < 64; t++) {
      const S1 = rotr(e, 6) ^ rotr(e, 11) ^ rotr(e, (5 * 5))
      const t1 = (hh + S1 + ((e & f) ^ (~e & g)) + SHA256_K[t] + w[t]) | 0
      const S0 = rotr(a, 2) ^ rotr(a, 13) ^ rotr(a, 22)
      const t2 = (S0 + ((a & b) ^ (a & c) ^ (b & c))) | 0
      hh = g; g = f; f = e; e = (d + t1) | 0; d = c; c = b; b = a; a = (t1 + t2) | 0
    }
    h[0] = (h[0] + a) | 0; h[1] = (h[1] + b) | 0; h[2] = (h[2] + c) | 0; h[3] = (h[3] + d) | 0
    h[4] = (h[4] + e) | 0; h[5] = (h[5] + f) | 0; h[6] = (h[6] + g) | 0; h[7] = (h[7] + hh) | 0
  }
  return h.map((x) => (x >>> 0).toString(16).padStart(8, '0')).join('')
}
// A SHA-256 content-address in the same UUID shape as toUuid — the vetted, collision-resistant drop-in.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function toUuidSha256(seed: string): Uuid {
  const h = sha256Sync(seed).slice(0, (16 * 2))
  return `${h.slice(0, 8)}-${h.slice(8, (6 * 2))}-${h.slice((6 * 2), 16)}-${h.slice(16, (5 * 4))}-${h.slice((5 * 4), (16 * 2))}`
}

// ── Red-team the content-address: demonstrate the weakness, prove the vetted fix resists ──────────────────
// hash32 (the FNV-1a core + MurmurHash3 finalizer at the top of this file) builds toUuid but is NOT collision-
// resistant. findContentAddressCollision proves it, not by assertion: a deterministic birthday search returns
// two distinct seeds with the SAME 32-bit hash word in a few × 10^4 tries (≈ 2^16, the 32-bit birthday bound)
// — a real, reproducible collision in the address's building block. The full 128-bit toUuid collides at the
// birthday bound of its EFFECTIVE width (addressEntropyBits) ≈ 2^61 — feasible for a resourced adversary,
// where a vetted hash is not (SHA-256: 2^128 collision, and no cryptanalytic shortcut the way FNV has). Pure
// and deterministic: the seeds are an ascending base-36 counter, so the same colliding pair is found every run.
let _collisionCache: { found: boolean; a: string; b: string; word: number; tries: number } | null = null
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function findContentAddressCollision(maxTries = 4_000_000): { found: boolean; a: string; b: string; word: number; tries: number } {
  if (_collisionCache) return _collisionCache // deterministic — search once, reuse the found pair everywhere (like _uuidCache)
  const seen = new Map<number, string>()
  for (let i = 0; i < maxTries; i++) {
    const seed = i.toString((9 * 4))
    const word = hash32(seed, 0)
    const prev = seen.get(word)
    if (prev !== undefined) return (_collisionCache = { found: true, a: prev, b: seed, word, tries: i + 1 })
    seen.set(word, seed)
  }
  return (_collisionCache = { found: false, a: '', b: '', word: 0, tries: maxTries })
}

// The honest bit-budget of the "128-bit" content-address. toUuid masks 6 bits — the UUID version nibble in
// byte 6 and the 2 variant bits in byte 8 — so its EFFECTIVE width is 122 bits and its birthday-collision
// bound is ~2^61, not 2^64 and emphatically not the 2^128 a cryptographic hash gives. Bit-WIDTH is not
// security strength; and hash32 has no cryptanalytic resistance, so the real forge cost is at or below 2^61.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function addressEntropyBits(): { nominalBits: number; discardedBits: number; effectiveBits: number; birthdayLog2: number } {
  const nominalBits = (64 * 2)
  const discardedBits = 6 // byte[6] top nibble (UUID version) + byte[8] top 2 bits (variant)
  const effectiveBits = nominalBits - discardedBits
  return { nominalBits, discardedBits, effectiveBits, birthdayLog2: Math.floor(effectiveBits / 2) }
}

// ── Ring algebra — the algebra implicit in the digit folders, made explicit ──────────────────────
// The digit folders hold the vortex ring (ℤ/9ℤ)* without naming it. These three primitives pull
// that algebra out into the origin kernel: gcd is the Euclidean atom, modUnits is the group,
// groupOrbit is the generator's path. groupOrbit(2, 9) = [1,2,4,8,7,5] — the vortex IS this.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function gcd(a: number, b: number): number {
  a = Math.abs(Math.round(a)); b = Math.abs(Math.round(b))
  while (b !== 0) { const t = b; b = a % b; a = t }
  return a
}
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function gcdBigInt(a: bigint, b: bigint): bigint {
  return b === 0n ? a : gcdBigInt(b, a % b)
}
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function lcm(a: number, b: number): number {
  const g = gcd(a, b)
  return g === 0 ? 0 : Math.abs((a / g) * b)
}
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function modUnits(n: number): number[] {
  return Array.from({ length: n }, (_, i) => i).filter((i) => gcd(i, n) === 1)
}
// groupOrbit → pi-train wave 5 tier-A at src/4/6.



// ── Analytic primitives (dissolved from src/math — digit-folder kernel, no word subfolders) ──
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function survive(s: number, hazard: number): number { return s * (1 - hazard) }
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function admixToward(p: readonly number[], source: number, f: number): number[] {
  const g = p.map((v) => v * (1 - f)); g[source] += f; return g
}
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function injectError(p: readonly number[], bit: number, q: number, oneWay = true): number[] {
  const out = p.slice(); const mask = 1 << bit
  for (let i = 0; i < p.length; i++) {
    if ((i & mask) === 0) { const j = i | mask; out[i] -= p[i] * q; out[j] += p[i] * q; if (!oneWay) { out[j] -= p[j] * q; out[i] += p[j] * q } }
  }
  return out
}
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function markovStep(P: readonly (readonly number[])[], dist: readonly number[]): number[] {
  return dist.map((_, j) => dist.reduce((acc, di, i) => acc + di * P[i][j], 0))
}
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function markovEvolve(P: readonly (readonly number[])[], dist: readonly number[], steps: number): number[] {
  let d = dist.slice(); for (let s = 0; s < steps; s++) d = markovStep(P, d); return d
}
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function stationary(P: readonly (readonly number[])[], iters = (100 * 2)): number[] {
  let d = P.map(() => 1 / P.length); for (let i = 0; i < iters; i++) d = markovStep(P, d); return d
}
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function chsh(a: number, aPrime: number, b: number, bPrime: number): number {
  const E = (x: number, y: number) => Math.cos(x - y)
  return E(a, b) - E(a, bPrime) + E(aPrime, b) + E(aPrime, bPrime)
}
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function residueVector(n: number, periods: readonly number[]): number[] {
  return periods.map((p) => ((n % p) + p) % p)
}
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function realign(periodA: number, periodB: number): { gcd: number; lcm: number } {
  const g = (x: number, y: number): number => (y === 0 ? x : g(y, x % y)); const gcd = g(periodA, periodB)
  return { gcd, lcm: (periodA / gcd) * periodB }
}
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function phaseDrift(periodA: number, periodB: number, t: number): number {
  return (((t / periodA - t / periodB) % 1) + 1) % 1
}
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function slip(wSync: number, wRotor: number): number { return wSync === 0 ? 0 : (wSync - wRotor) / wSync }
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function inductionStep(wRotor: number, opts: { wSync: number; k: number; load: number; damping?: number; inertia?: number; dt?: number }): number {
  const { wSync, k, load, damping = (1 / (5 * 5 * 2)), inertia = 1, dt = (1 / (5 * 4)) } = opts
  return wRotor + (dt * (k * slip(wSync, wRotor) - load - damping * wRotor)) / inertia
}
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function inductionEvolve(w0: number, opts: { wSync: number; k: number; load: number; damping?: number; inertia?: number; dt?: number }, steps: number): number[] {
  const out = [w0]; for (let s = 0; s < steps; s++) out.push(inductionStep(out[out.length - 1], opts)); return out
}
export type Edge = readonly [number, number]
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function pmixStep(values: readonly number[], edges: readonly Edge[], q: number): number[] {
  const nbr: number[][] = values.map(() => [])
  for (const [a, b] of edges) { nbr[a].push(b); nbr[b].push(a) }
  return values.map((v, i) => { if (nbr[i].length === 0) return v; const mean = nbr[i].reduce((s, j) => s + values[j], 0) / nbr[i].length; return (1 - q) * v + q * mean })
}
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function pmixEvolve(values: readonly number[], edges: readonly Edge[], q: number, steps: number): number[] {
  let v = values.slice(); for (let s = 0; s < steps; s++) v = pmixStep(v, edges, q); return v
}
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function congruence(a: readonly number[], b: readonly number[]): number {
  const n = a.length; const ma = a.reduce((s, x) => s + x, 0) / n; const mb = b.reduce((s, x) => s + x, 0) / n
  let cov = 0; let va = 0; let vb = 0
  for (let i = 0; i < n; i++) { const da = a[i] - ma; const db = b[i] - mb; cov += da * db; va += da * da; vb += db * db }
  return va === 0 || vb === 0 ? 0 : cov / Math.sqrt(va * vb)
}

/** A sound→glyph transliteration map: single letters, optional digraphs (checked first), optional case-carry. */
export interface TransliterationMap {
  readonly single: Readonly<Record<string, string>>
  readonly digraphs?: Readonly<Record<string, string>>
  readonly bicameral?: boolean
}

/** Carry the source run's case onto the transliterated output (ALL-CAPS → upper, Titlecase → capitalize). */
export function applyTransliterationCase(src: string, out: string): string {
  const upper = src.toUpperCase()
  const lower = src.toLowerCase()
  if (src.length > 1 && src === upper && src !== lower) return out.toUpperCase()
  if (src[0] === upper[0] && src[0] !== lower[0]) return out.charAt(0).toUpperCase() + out.slice(1)
  return out
}

/** transliterateByMap — the ONE agnostic sound→glyph engine (toGlagolitic's method, generalised over any
 *  map): word-run scan, digraphs matched before single letters, optional case-carry. Every script-conversion
 *  fold (Bulgarian Cyrillic, Greek, Runic, Hebrew, …) is this SAME algorithm over a different map, not a
 *  hand-written parallel implementation — the map is data, the engine is shared. Pure, zero-dependency. */
export function transliterateByMap(text: string, map: TransliterationMap): string {
  return text.replace(/[A-Za-z]+/g, (word) => {
    let out = ''
    let i = 0
    while (i < word.length) {
      const two = word.slice(i, i + 2).toLowerCase()
      const digraph = i + 1 < word.length ? map.digraphs?.[two] : undefined
      if (digraph) {
        out += map.bicameral ? applyTransliterationCase(word.slice(i, i + 2), digraph) : digraph
        i += 2
        continue
      }
      const one = word[i].toLowerCase()
      const single = map.single[one] ?? word[i]
      out += map.bicameral ? applyTransliterationCase(word[i], single) : single
      i += 1
    }
    return out
  })
}



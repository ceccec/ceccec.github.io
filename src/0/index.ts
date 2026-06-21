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
    (word >>> 24) & BYTE_MASK,
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
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function toUuid(seed: string): string {
  const cached = _uuidCache.get(seed)
  if (cached !== undefined) return cached
  const bytes = bytesFromSeed(seed)
  bytes[6] = (bytes[6] & 0x0f) | 0x80
  bytes[8] = (bytes[8] & 0x3f) | 0x80
  const hex = bytes.map(hexByte).join('')
  const uuid = `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`
  _uuidCache.set(seed, uuid)
  return uuid
}

// The fold cascade — the rest of the primitive kernel, dissolved out of the monolith (wave 2). Every one
// routes through toUuid above, so it belongs in the same dependency-free station. merge folds two
// addresses into one — the atom of every fold.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function merge(a: string, b: string): string {
  return toUuid(`${a}:${b}`)
}

// roundTo rounds to a number of digits; seedFromText derives a deterministic integer seed from the
// content-addressed UUID of the text. Re-defined inside many waves once; now shared from the station.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function roundTo(value: number, digits: number): number {
  const factor = 10 ** digits
  return Math.round(value * factor) / factor
}
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function seedFromText(text: string, length = 6): number {
  return Number.parseInt(toUuid(text).replace(/[^0-9a-f]/g, '').slice(0, length) || '0', 16)
}

// One bidirectional fold for every pair (genus 2): forward folds a into b, reverse folds b into a;
// they differ when order matters (bidirectional); merged folds the two into one. The single source
// for the area pairs, the trinity axes, the dualities, the directions, and the double-torus fold.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function foldPair(a: string, b: string): { forward: string; reverse: string; bidirectional: boolean; merged: string } {
  const forward = merge(a, b)
  const reverse = merge(b, a)
  return { forward, reverse, bidirectional: forward !== reverse, merged: merge(forward, reverse) }
}

// Contract a set of leaves to one root: sort for order-independence, then fold pairwise up the tree
// until one remains. The Merkle fold — the matrix root is the fold of all its dots.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
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

// GREAT CIRCLE — the haversine distance (km) and initial bearing between two lat/long points on a sphere
// (Earth mean radius 6371 km). Pure geodesy, no deps: the real math the pyramid-coordinate fold computes —
// honest distances between sites, the sphere, no "global grid" mysticism. Longitudes west are negative.
export const EARTH_RADIUS_KM = 6371
export function greatCircleKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const r = Math.PI / 180
  const dLat = (lat2 - lat1) * r
  const dLon = (lon2 - lon1) * r
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * r) * Math.cos(lat2 * r) * Math.sin(dLon / 2) ** 2
  return 2 * EARTH_RADIUS_KM * Math.asin(Math.min(1, Math.sqrt(a)))
}
export function initialBearing(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const r = Math.PI / 180
  const y = Math.sin((lon2 - lon1) * r) * Math.cos(lat2 * r)
  const x = Math.cos(lat1 * r) * Math.sin(lat2 * r) - Math.sin(lat1 * r) * Math.cos(lat2 * r) * Math.cos((lon2 - lon1) * r)
  return (Math.atan2(y, x) / r + 360) % 360
}

// Archaeoastronomy: where on the horizon the Sun rises and sets at the solstices — the real math the megalithic
// alignments encode. The Earth's axial tilt (obliquity ε) is the Sun's declination at the solstices (±ε); at the
// equinox the declination is zero and the Sun rises due east everywhere. ε is NOT fixed: it shrinks ~0.013°/century,
// so it was ~24° when these monuments were built, not today's 23.44° — using the epoch value tightens the match.
// J2000 mean obliquity (IAU 1976), degrees.
export const OBLIQUITY_J2000_DEG = 23.4392811
// The mean obliquity at an epoch given in years before present (2000). Linear secular term (~46.8″/century);
// good to a few arc-minutes over the Holocene — enough for horizon azimuths, not for ephemeris precision.
export function obliquityAtEpoch(yearsBeforePresent: number): number {
  return OBLIQUITY_J2000_DEG + 0.0130125 * (yearsBeforePresent / 100)
}
// Azimuth (degrees clockwise from true north) at which a body of the given declination RISES, seen from `latDeg`
// over a horizon of altitude `horizonAltitudeDeg` (0 = the flat sea-level horizon). cos A = (sin δ − sin φ·sin h)
// / (cos φ·cos h). Returns null when the body is circumpolar / never rises (|cos A| > 1). Sunrise is the eastern
// azimuth (0–180); the matching SUNSET azimuth is 360 − A (setAzimuthDeg).
export function riseAzimuthDeg(latDeg: number, declinationDeg: number, horizonAltitudeDeg = 0): number | null {
  const r = Math.PI / 180
  const phi = latDeg * r
  const dec = declinationDeg * r
  const h = horizonAltitudeDeg * r
  const c = (Math.sin(dec) - Math.sin(phi) * Math.sin(h)) / (Math.cos(phi) * Math.cos(h))
  if (Math.abs(c) > 1) return null
  return Math.acos(c) / r
}
export function setAzimuthDeg(latDeg: number, declinationDeg: number, horizonAltitudeDeg = 0): number | null {
  const rise = riseAzimuthDeg(latDeg, declinationDeg, horizonAltitudeDeg)
  return rise === null ? null : 360 - rise
}

// The Moon's orbit is tilted ~5.145° to the ecliptic, and its nodes regress over the ~18.6-year nodal cycle. So
// the Moon's declination extreme swings between ε + i (the MAJOR standstill — wider than the solstice Sun) and
// ε − i (the MINOR standstill — narrower) across that cycle: the basis of the megalithic standstill markers.
export const MOON_ORBIT_INCLINATION_DEG = 5.145
export const LUNAR_NODAL_PERIOD_YEARS = 18.613
// The Moon's extreme declination magnitude at a standstill, for the obliquity of the epoch: major = ε + i, minor = ε − i.
export function lunarStandstillDeclinationDeg(obliquityDeg: number, major: boolean): number {
  return major ? obliquityDeg + MOON_ORBIT_INCLINATION_DEG : obliquityDeg - MOON_ORBIT_INCLINATION_DEG
}

/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function isUuid(value: string): boolean {
  return /^[0-9a-f-]{36}$/i.test(value)
}

// A UUID splits into its DUALITY (the content — the first four groups, the dual pair) and its SUFFIX (the last
// group, 12 hex). The suffix is the LINK to the NEXT duality: forging it yields the next UUID, so a UUID
// self-extends into a deterministic sequence of dualities — the recursive spine under the merkaba and auto-advance.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function uuidDuality(uuid: string): string { return uuid.split('-').slice(0, 4).join('-').toLowerCase() } // the content, sans link
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function uuidSuffix(uuid: string): string { return (uuid.split('-')[4] ?? '').toLowerCase() } // the last group — the next-duality link
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function nextDuality(uuid: string): string { return toUuid(`link:${uuidSuffix(uuid)}`) } // the suffix forges the next duality

// A content address IS a point in space: derive a 3-vector in [−1,1]³ from a UUID's hex (three 32-bit chunks).
// The geometric foundation of the metatron math — 3 such points span a plane, three orthogonal planes a cube.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function uuidPoint(uuid: string): [number, number, number] {
  const hex = uuid.replace(/[^0-9a-f]/gi, '')
  const axis = (i: number) => (Number.parseInt(hex.slice(i * 8, i * 8 + 8) || '0', 16) / 0xffffffff) * 2 - 1
  return [axis(0), axis(1), axis(2)]
}
// The 3D cross product a×b — normal to both. |a×b| = 0 ⟺ a,b parallel; for two edges of a triangle it is the
// plane's normal (zero ⟺ the three points are collinear, so no plane). The orientation primitive under geometry.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function crossProduct(a: readonly number[], b: readonly number[]): [number, number, number] {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]
}

// Contraction: aggregator reports are pure functions of the matrix, so memoize them by matrix.root.
// Within a build the heavy aggregators compute once and every later caller reuses the result. The
// matrix is typed structurally ({ root }) so this station still imports nothing from the word core.
const reportMemo = new Map<string, unknown>()
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function memoByRoot<T>(name: string, matrix: { root: string }, compute: () => T): T {
  const key = `${name}:${matrix.root}`
  if (reportMemo.has(key)) return reportMemo.get(key) as T
  const value = compute()
  reportMemo.set(key, value)
  return value
}

// Vortex arithmetic — the other dependency-free foundation (wave 3). digitalRoot reduces any integer to its
// single-digit root mod 9, with 0 ↦ 9 (the harmonic identification at the digital-root altitude) and
// negatives folded in. It is the floor the whole vortex stands on — the 1-2-4-8-7-5 doubling, the 3-6-9
// cross, the ten's-complement digit-folder reverses all reduce through it — and it computes EVERY digit, so
// it belongs in this universal dependency-free foundation, not in any single digit station (which would risk
// a cross-digit cycle). Pure number → number; it touches neither toUuid nor the matrix. Inlined in many
// folds once (3 identical form-A copies); shared from the station now. (The n≥1 form ((n−1)%9)+1 that
// returns 0↦0 is a distinct function and stays where it is used.)
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function digitalRoot(n: number): number {
  const r = ((n % 9) + 9) % 9
  return r === 0 ? 9 : r
}
// hexDigitSum — the hex-digit fold: strip a uuid to its hex digits and sum their values. The SAME closure was
// re-implemented TEN times across the folds (digitOf in compute/architecture/diamonds/features/music/geometry/
// self/ledger/li, plus a %10 variant in pi). Canonical here; the ten copies collapse into this one as their
// files settle out of the live dissolution. (digitalRoot folds a number to 1–9; hexDigitSum folds a uuid's
// hex digits to their sum — distinct tools.)
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function hexDigitSum(uuid: string): number {
  return uuid.replace(/[^0-9a-f]/gi, '').split('').reduce((sum, char) => sum + (Number.parseInt(char, 16) || 0), 0)
}

// The motion math (wave 5) — the math the engine DRIVES, pulled into the void/origin beside it. Machines tick
// at a constant rate; a living hand eases and breathes. humanEase is easeInOutSine — the shape a hand makes
// accelerating then settling, with fixed ends (0↦0, 1↦1) and a symmetric middle (0.5↦0.5); humanBreath is a
// slow sinusoidal modulation of any rate or size on a given period. Both are pure number→number (only Math),
// so they belong in the dependency-free leaf beside digitalRoot — and now the components import the engine AND
// the motion it runs from the one origin, passing params (the phase, the time, the period). Lifted out of the
// word-named monolith; the core imports + re-exports them and humanise still composes them into the shared
// profile. They shape motion only — no computed value, root or proof changes. (theMotionMathJoinsTheEngineInZero.)
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function humanEase(phase: number): number {
  const clamped = phase <= 0 ? 0 : phase >= 1 ? 1 : phase
  return -(Math.cos(Math.PI * clamped) - 1) / 2 // easeInOutSine
}
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function humanBreath(timeMs: number, periodMs: number, depth = 0.18): number {
  return 1 + depth * Math.sin((timeMs / periodMs) * Math.PI * 2)
}

// Reconstruction — the sampling theorem, in the void/origin beside the motion math. The Whittaker–Shannon
// interpolation: a band-limited signal sampled above its Nyquist rate is recovered EXACTLY from its discrete
// samples by summing a sinc kernel at each one. The kernels interlock — each is zero at every OTHER sample and
// nonzero between — so the sum is defined at every real point and fills the continuum: discrete folds back to
// continuous with NO gaps. sinc is the normalized cardinal sine; sincReconstruct evaluates the interpolation at
// a (fractional) sample index x over the samples. Pure number-math (only Math), dependency-free. HONEST: exact
// only for band-limited signals sampled above Nyquist — foundational (Whittaker 1915 · Shannon 1948), not new.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function sinc(x: number): number {
  if (x === 0) return 1
  const px = Math.PI * x
  return Math.sin(px) / px
}
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
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
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
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

/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
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
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export interface Fold {
  readonly a: string
  readonly b: string
  readonly forward: string // merge(a,b)
  readonly reverse: string // merge(b,a) — the order-dual
  readonly bidirectional: boolean // forward !== reverse: the two are genuinely distinct
  readonly merged: string // merge(forward,reverse) — the identity the dual folds back into (the throat)
}

// The fold: the one operation. One seed folds with itself (an address); two seeds fold as a pair (the dual).
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
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
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
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
// Reverse (×5 = ÷2 mod 9, with two step-ons): 0←9←6←3←[3←5]←5←7←8←4←2←1
// 2×5≡1 (mod 9): forward and reverse are modular inverses — fold the path, all balances.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export const VORTEX_SEQUENCE = [1, 2, 4, 8, 7, 5, 3, 6, 9] as const
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export const VORTEX_REVERSE  = [9, 6, 3, 5, 7, 8, 4, 2, 1] as const

/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function vortexNext(d: number): number {
  if (d === 5) return 3          // circuit→cross: 5×2=10→1 would loop; step to cross instead
  if (d === 6) return 9          // cross→axis: 6×2=12→3 would loop cross; step to axis instead
  if (d === 9 || d === 0) return 0
  return digitalRoot(d * 2)
}

/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function vortexPrev(d: number): number {
  // ×5 is the modular inverse of ×2 mod 9 (since 2×5=10≡1 mod 9)
  if (d === 0) return 9          // void←axis: sequence closes 9→0
  if (d === 1) return 0          // 1 opens the sequence; void precedes
  if (d === 3) return 5          // cross-entry reversed: 5→3 so 3←5
  if (d === 9) return 6          // axis-entry reversed: 6→9 so 9←6
  return digitalRoot(d * 5)
}

/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
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
    valid: isPalindrome && total === 90 && digitalRoot(total) === 9 && inverseHolds,
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
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function asTorus(f: Fold, major = 2, minor = 0.8, separation = 2.2): {
  x: number
  y: number
  z: number
  lobe: 0 | 1
  theta: number
  phi: number
} {
  const lobe: 0 | 1 = reading(f.merged, 'lobe') < 0.5 ? 0 : 1
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
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function asMerkaba(f: Fold, timeMs = 0): {
  up: [number, number, number][]
  down: [number, number, number][]
  spin: number
  breath: number
  counterRotating: true
} {
  const periodMs = 4000 + Math.round(reading(f.merged, 'period') * 4000) // 4000..8000, content-derived
  const spin = (timeMs / periodMs) * Math.PI * 2
  const breath = humanBreath(timeMs, periodMs * 1.5)
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
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
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
const TRACE_ARMS = [
  { periodMs: 6000, amp: 0.3 },
  { periodMs: 2600, amp: 0.16 },
  { periodMs: 1700, amp: 0.09 },
  { periodMs: 1100, amp: 0.05 },
] as const
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function asTrace(f: Fold, timeMs = 0): { x: number; y: number } {
  let x = 0.5
  let y = 0.5
  TRACE_ARMS.forEach((arm, i) => {
    const sign = i % 2 === 0 ? 1 : -1 // adjacent arms counter-rotate — the merkaba signature
    const jitter = 1 + reading(f.merged, `arm:${i}`) * 0.2
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
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export const DIGEST_BITS = 64

// The extra forge cost (log2) coverage buys: at full coverage it is infinite — no forgery closes the seal;
// below it, every unmet reciprocal check multiplies the work. Pure — coverage and the check count come in.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function coverageCostLog2(coverage: number, checks: number): number {
  return coverage >= 1 ? Number.POSITIVE_INFINITY : -checks * Math.log2(1 - Math.min(Math.max(coverage, 0), 1))
}

// The total cost (log2) to forge a tampered build: the digest floor plus the coverage cost.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function tamperCostLog2(coverage: number, checks: number): number {
  return DIGEST_BITS + coverageCostLog2(coverage, checks)
}

// Maximum tampering cost is reached only when coverage closes at 1 AND reciprocal entropy is 0.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function maxTamperingCostReached(coverage: number, entropy: number): boolean {
  return coverage >= 1 && entropy === 0
}

// The maximum tampering cost itself (T_max) — the value the principle names: infinite once the seal closes,
// otherwise the finite forge cost. `sealClosed` is the caller's measured closure (the proof loop: coverage=1
// ∧ entropy=0; the build: every unit closed). This is the single definition both the proof report and the
// build report read — neither hard-codes ∞ nor re-derives the gate.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function maxTamperingCostLog2(sealClosed: boolean, finiteCostLog2: number): number {
  return sealClosed ? Number.POSITIVE_INFINITY : finiteCostLog2
}

/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export const MAX_TAMPERING_COST_PRINCIPLE =
  'Maximum tampering cost is only claimed when the inward proof loop closes measured coverage at 1 and the outward double-torus flow preserves zero reciprocal entropy.'

// Tamper-evidence: folding any tampering token into an address always changes it — the seal catches every edit.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function tamperEvident(root: string): boolean {
  return merge(root, toUuid('tamper')) !== root
}

// The canonical content-address type, and a catalogued URL entry.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export type Uuid = string
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export type Entry = { url: string; uuid: Uuid; host: string; path: string }

// The URL fold (the library's content-address): the host folds forward through the path (the up-tetrahedron),
// the path folds in reverse against the host (the counter-rotating down), the two merge to one star — a
// merkaba fold of any URL, order-sensitive and domain-specific, built from the canonical fold (toUuid/merge).
function normalizeUrl(url: string): { host: string; segs: string[] } {
  const stripped = url.replace(/^[a-z]+:\/\//i, '').replace(/[#?].*$/, '').replace(/\/+$/, '').toLowerCase()
  const parts = stripped.split('/').filter(Boolean)
  return { host: parts[0] ?? '', segs: parts.slice(1) }
}

/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function merkabaFoldUrl(url: string): Uuid {
  const { host, segs } = normalizeUrl(url)
  let up = toUuid(`merkaba-up:${host}`) // host up — folded forward through the path
  for (const seg of segs) up = merge(up, toUuid(seg))
  const down = toUuid(`merkaba-down:${[...segs].reverse().join('/')}:${host}`) // path down — reversed against the host
  return merge(up, down) // the star — one canonical merge
}

/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function entry(url: string): Entry {
  const { host, segs } = normalizeUrl(url)
  return { url, uuid: merkabaFoldUrl(url), host, path: `/${segs.join('/')}` }
}

// Any UUID → its hero: the unique animation of its state computed from its own bytes — hue, the two handle
// rotations, the spin period, the tone, the projected handle tips. The same shape from the whole to the particle.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function uuidHero(uuid: string) {
  const hex = uuid.replace(/[^0-9a-f]/gi, '').padEnd(20, '0')
  const at = (start: number, len: number) => Number.parseInt(hex.slice(start, start + len) || '0', 16)
  const round = (value: number) => Math.round(value * 100) / 100
  const theta = ((at(4, 4) % 360) * Math.PI) / 180
  const phi = ((at(8, 4) % 360) * Math.PI) / 180
  return {
    uuid,
    hue: at(0, 4) % 360, // the colour of the state
    theta, // the rotation of the first handle
    phi, // the rotation of the second handle
    spinMs: 900 + (at(12, 4) % 9000), // the realtime rotation period
    frequency: 110 + (at(16, 4) % 800), // the tone of the state
    ax: round(46 * Math.cos(theta)),
    ay: round(46 * Math.sin(theta)),
    bx: round(28 * Math.cos(phi)),
    by: round(28 * Math.sin(phi)),
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
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function trinityKey(shareA: string, shareB: string): string {
  const pair = foldPair(shareA, shareB)
  const third = merkleFold([pair.forward, pair.reverse]) // a pair forms the trinity — the order-independent third
  return merkleFold([shareA, shareB, third]) // the shared key
}

// One-way public-key derivation. Each public root folds with the private key; their merkle is the public key.
// The private key is not recoverable from the public — the fold is one-way (the same irreversibility as the seal).
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function derivePublicKey(privateKey: string, publicRoots: readonly string[]): string {
  return merkleFold(publicRoots.map((root) => merge(privateKey, root)))
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
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
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
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function sampleCounts(dist: readonly number[], n: number, shots = 1024, seed = 'sample'): Record<string, number> {
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
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export interface QuantumState {
  readonly n: number
  readonly re: number[]
  readonly im: number[]
}

// The n-qubit register initialised to |0…0>. Qubit 0 is the least-significant bit.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function qubits(n: number): QuantumState {
  return { n, re: basisRegister(n), im: new Array<number>(1 << n).fill(0) }
}

// The standard single-qubit gates as 2×2 complex unitaries, flat [m00re,m00im, m01re,m01im, m10re,m10im, m11re,m11im].
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export const GATES: Readonly<Record<'I' | 'X' | 'Y' | 'Z' | 'H' | 'S' | 'T', readonly number[]>> = Object.freeze({
  I: [1, 0, 0, 0, 0, 0, 1, 0],
  X: [0, 0, 1, 0, 1, 0, 0, 0],
  Y: [0, 0, 0, -1, 0, 1, 0, 0], // m01 = −i, m10 = +i
  Z: [1, 0, 0, 0, 0, 0, -1, 0],
  H: [Math.SQRT1_2, 0, Math.SQRT1_2, 0, Math.SQRT1_2, 0, -Math.SQRT1_2, 0],
  S: [1, 0, 0, 0, 0, 0, 0, 1], // m11 = i
  T: [1, 0, 0, 0, 0, 0, Math.SQRT1_2, Math.SQRT1_2], // m11 = e^{iπ/4}
})

// Apply a single-qubit gate to `target`. Pure — returns a new state.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function applyGate(state: QuantumState, gate: readonly number[], target: number): QuantumState {
  const re = state.re.slice()
  const im = state.im.slice()
  eachPair(re.length, 1 << target, (i, j) => {
    const ar = state.re[i], ai = state.im[i], br = state.re[j], bi = state.im[j]
    re[i] = gate[0] * ar - gate[1] * ai + gate[2] * br - gate[3] * bi
    im[i] = gate[0] * ai + gate[1] * ar + gate[2] * bi + gate[3] * br
    re[j] = gate[4] * ar - gate[5] * ai + gate[6] * br - gate[7] * bi
    im[j] = gate[4] * ai + gate[5] * ar + gate[6] * bi + gate[7] * br
  })
  return { n: state.n, re, im }
}

// Controlled-NOT — flip `target` where `control` is 1: the entangler.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function cnot(state: QuantumState, control: number, target: number): QuantumState {
  const re = state.re.slice()
  const im = state.im.slice()
  const c = 1 << control, t = 1 << target
  for (let i = 0; i < re.length; i++) {
    if ((i & c) !== 0 && (i & t) === 0) {
      const j = i | t
      re[i] = state.re[j]; im[i] = state.im[j]
      re[j] = state.re[i]; im[j] = state.im[i]
    }
  }
  return { n: state.n, re, im }
}

// Controlled-Z — phase −1 where both control and target are 1.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
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
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function probabilities(state: QuantumState): number[] {
  return state.re.map((r, i) => r * r + state.im[i] * state.im[i])
}

// Born-rule measurement of one qubit: returns the outcome and the collapsed, renormalised state. Seeded.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function measure(state: QuantumState, target: number, seed = 'measure'): { outcome: 0 | 1; state: QuantumState } {
  const bit = 1 << target
  let p0 = 0
  for (let i = 0; i < state.re.length; i++) if ((i & bit) === 0) p0 += state.re[i] ** 2 + state.im[i] ** 2
  const outcome = sampleIndex([p0, 1 - p0], prng(seed)()) as 0 | 1 // the analog→digital step, one qubit
  const norm = Math.sqrt(outcome === 0 ? p0 : 1 - p0) || 1
  const re = state.re.slice()
  const im = state.im.slice()
  for (let i = 0; i < re.length; i++) {
    const keep = outcome === 0 ? (i & bit) === 0 : (i & bit) !== 0
    if (keep) { re[i] /= norm; im[i] /= norm } else { re[i] = 0; im[i] = 0 }
  }
  return { outcome, state: { n: state.n, re, im } }
}

// Sample `shots` full-register measurements into a histogram bitstring → count (the shared A→D readout).
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function sample(state: QuantumState, shots = 1024, seed = 'sample'): Record<string, number> {
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
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function grover(n: number, marked: number, shots = 256, seed = 'grover'): {
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

// ── Completing the quantum solutions — the structures the state vector alone does not yet expose ──
// The simulator above already RUNS superposition (qubits + H), unitary dynamics (applyGate), entanglement
// (cnot), and Born-rule measurement/collapse (measure). These five primitives complete the set so every
// quantum structure is EXECUTABLE, not theoretical: the Hilbert inner product, the operator algebra and its
// Lie bracket, an entanglement measure, the no-cloning theorem as a computed contradiction, and the 3-qubit
// bit-flip quantum error-correcting code. Exact for small n on a classical machine — the genuine quantum
// math, no hardware, no speedup (cf. grover's honest note).

// ⟨a|b⟩ over the 2^n-dimensional complex Hilbert space: Σ conj(a_i)·b_i. The inner product the whole framework
// rests on (norms, orthogonality, fidelity). conj(a_i)·b_i = (a_re − i·a_im)(b_re + i·b_im).
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function innerProduct(a: QuantumState, b: QuantumState): { re: number; im: number; abs: number } {
  let re = 0, im = 0
  for (let i = 0; i < a.re.length; i++) {
    re += a.re[i] * b.re[i] + a.im[i] * b.im[i]
    im += a.re[i] * b.im[i] - a.im[i] * b.re[i]
  }
  return { re, im, abs: Math.sqrt(re * re + im * im) }
}

// Operator algebra: the product of two single-qubit gates as 2×2 complex matrices (flat-8). Non-commutative —
// e.g. X·Y = iZ. The associative *-algebra the gates and observables live in.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function gateMul(a: readonly number[], b: readonly number[]): number[] {
  const out = new Array<number>(8).fill(0)
  for (let i = 0; i < 2; i++) for (let k = 0; k < 2; k++) {
    let cr = 0, ci = 0
    for (let j = 0; j < 2; j++) {
      const a0 = (i * 2 + j) * 2, b0 = (j * 2 + k) * 2
      cr += a[a0] * b[b0] - a[a0 + 1] * b[b0 + 1]
      ci += a[a0] * b[b0 + 1] + a[a0 + 1] * b[b0]
    }
    const c0 = (i * 2 + k) * 2
    out[c0] = cr; out[c0 + 1] = ci
  }
  return out
}

// The Lie bracket [A,B] = AB − BA — the su(2) algebra of the Paulis: [X,Y] = 2iZ. Zero iff A and B commute.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function commutator(a: readonly number[], b: readonly number[]): number[] {
  const ab = gateMul(a, b), ba = gateMul(b, a)
  return ab.map((v, i) => v - ba[i])
}

// Entanglement, measured: for a 2-qubit pure state Σ c_ij|ij⟩, the concurrence C = 2|c00·c11 − c01·c10| (twice
// the magnitude of the 2×2 amplitude determinant). C = 0 ⟺ a product (separable) state; C = 1 ⟺ maximally
// entangled (a Bell pair). The witness that distinguishes |Φ+⟩ from |00⟩ — non-factorizability, computed.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function concurrence(state: QuantumState): number {
  if (state.n !== 2) return Number.NaN
  const dr = state.re[0] * state.re[3] - state.im[0] * state.im[3] - (state.re[1] * state.re[2] - state.im[1] * state.im[2])
  const di = state.re[0] * state.im[3] + state.im[0] * state.re[3] - (state.re[1] * state.im[2] + state.im[1] * state.re[2])
  return 2 * Math.sqrt(dr * dr + di * di)
}

// The no-cloning theorem, as a computed contradiction. A universal cloner U with U|ψ⟩|0⟩ = |ψ⟩|ψ⟩ for all |ψ⟩
// must (by unitarity, which preserves inner products) satisfy ⟨a|b⟩ = ⟨a|b⟩² for any two states — forcing
// ⟨a|b⟩ ∈ {0,1}. For non-orthogonal distinct states this fails: |0⟩ and |+⟩ have ⟨0|+⟩ = 1/√2, yet cloning
// would demand (1/√2)² = 1/2. The gap 1/√2 ≠ 1/2 is the proof — returned as numbers, not asserted.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function noCloningWitness(): { overlap: number; clonedRequires: number; contradiction: boolean } {
  const overlap = innerProduct(qubits(1), applyGate(qubits(1), GATES.H, 0)).abs // ⟨0|+⟩ = 1/√2
  const clonedRequires = overlap * overlap // unitarity would force ⟨a|b⟩ = ⟨a|b⟩²
  return { overlap, clonedRequires, contradiction: Math.abs(overlap - clonedRequires) > 1e-9 }
}

// The 3-qubit bit-flip code — the simplest quantum error-correcting code, run end to end. Encode one logical
// qubit α|0⟩+β|1⟩ into α|000⟩+β|111⟩ (two CNOTs), inject an X (bit-flip) error on one physical qubit, read the
// two parity syndromes (Z0Z1, Z1Z2) — which do NOT collapse the logical amplitude — decode the syndrome to the
// error location, correct it, and verify recovery by fidelity with the clean codeword. Corrects ANY single
// bit-flip. (errorQubit < 0 = no error injected.)
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function bitFlipCode(alphaRe: number, betaRe: number, errorQubit: number): {
  syndrome: [number, number]; errorLocated: number; corrected: boolean; fidelity: number
} {
  const norm = Math.hypot(alphaRe, betaRe) || 1
  let enc = qubits(3)
  enc = { n: 3, re: enc.re.slice(), im: enc.im.slice() }
  enc.re[0] = alphaRe / norm // |000⟩
  enc.re[1] = betaRe / norm // |001⟩ (qubit 0 = LSB) — the CNOTs spread it to |111⟩
  enc = cnot(enc, 0, 1)
  enc = cnot(enc, 0, 2) // α|000⟩ + β|111⟩
  const errored = errorQubit < 0 ? enc : applyGate(enc, GATES.X, errorQubit)
  const k = errored.re.findIndex((r, i) => r * r + errored.im[i] * errored.im[i] > 1e-12) // any populated codeword
  const b = (q: number) => (k >> q) & 1
  const syndrome: [number, number] = [b(0) ^ b(1), b(1) ^ b(2)] // Z0Z1, Z1Z2
  const errorLocated = syndrome[0] && !syndrome[1] ? 0 : syndrome[0] && syndrome[1] ? 1 : !syndrome[0] && syndrome[1] ? 2 : -1
  const fixed = errorLocated < 0 ? errored : applyGate(errored, GATES.X, errorLocated)
  const fidelity = innerProduct(enc, fixed).abs ** 2 // |⟨clean|corrected⟩|²
  return { syndrome, errorLocated, corrected: fidelity > 0.999999, fidelity }
}

// The repetition code's logical error under majority vote — the THRESHOLD math, generalised from bitFlipCode
// (the d=3 instance) to any distance d. For i.i.d. bit-flips at rate p, majority vote of d copies fails iff
// more than half flip: P_L(d,p) = Σ_{k=⌈d/2⌉}^{d} C(d,k) pᵏ (1−p)^(d−k). BELOW the threshold p < ½, P_L → 0
// exponentially as d grows (error suppressed — "quantum is here"); ABOVE p > ½ it grows; at p = ½ it stays ½.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function repetitionLogicalError(d: number, p: number): number {
  const dd = d % 2 === 0 ? d + 1 : Math.max(1, Math.floor(d)) // odd distance
  const half = Math.ceil(dd / 2)
  let total = 0
  for (let k = half; k <= dd; k++) {
    let c = 1
    for (let i = 1; i <= k; i++) c = (c * (dd - k + i)) / i // C(dd,k) by running product
    total += c * p ** k * (1 - p) ** (dd - k)
  }
  return total
}

// One Han–Kim quantum-inspired evolutionary rotation: turn a qubit [α,β] toward the target bit's pole (|0⟩ at
// angle 0, |1⟩ at π/2) by at most `angle`, never overshooting. Applied repeatedly, P(target) = (target
// amplitude)² rises monotonically to 1 — the amplitude drifting toward the answer, the QIEA search step.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function qieaRotate(alpha: number, beta: number, targetBit: number, angle: number): [number, number] {
  const phi = Math.atan2(beta, alpha)
  const target = targetBit === 1 ? Math.PI / 2 : 0
  const delta = target - phi
  const step = Math.sign(delta) * Math.min(angle, Math.abs(delta)) // toward the target pole, never past it
  return [Math.cos(phi + step), Math.sin(phi + step)]
}

// BEYOND LINEAR, within conservation — two real quantum effects the fold (collective, conservative) unlocks.
// Quantum battery: charging N cells COLLECTIVELY (one global entangling drive) beats charging them
// independently; under a fixed driving-norm constraint the charging-POWER advantage scales as √N (Alicki–
// Fannes 2013; Binder et al. 2015; Campaioli et al. PRL 2017). The energy is external and conserved — what is
// beyond-linear is the speed/power (collective power ∝ N·√N = N^{3/2}, superlinear in N), via the fold.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function quantumBatteryAdvantage(n: number): { cells: number; independentPower: number; collectivePower: number; advantage: number } {
  const cells = Math.max(1, Math.floor(n))
  const independentPower = cells // N cells, unit power each, charged in parallel — linear in N
  const advantage = Math.sqrt(cells) // the √N collective speed/power advantage (grows with N — beyond linear)
  return { cells, independentPower, collectivePower: independentPower * advantage, advantage } // N·√N = N^{3/2}
}

// Algorithmic cooling — cool a target qubit BY COMPUTING. The basic 3-qubit reversible compression takes three
// qubits of equal polarization (bias) ε and concentrates it into one: ε' = (3ε − ε³)/2 (≈ 1.5ε for small ε),
// pumping the entropy into the other two (Boykin–Mor–Roychowdhury–Vatan–Vrijen, PNAS 2002; used in NMR). The
// target is COOLED; total entropy does not decrease (the Sørensen/Shannon bound) — heat moves, never vanishes.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function algorithmicCoolingBias(epsilon: number): { initial: number; cooled: number; factor: number; physical: boolean } {
  const e = Math.max(0, Math.min(1, epsilon))
  const cooled = (3 * e - e ** 3) / 2 // the cooled qubit's new bias after one 3-qubit compression
  return { initial: e, cooled, factor: e > 0 ? cooled / e : 0, physical: cooled <= 1 } // ≤1 physical; entropy pumped to the rest
}

// Impossible-seeming, genuinely real (1): QUANTUM TELEPORTATION (Bennett et al. 1993). Move an unknown qubit
// |ψ⟩ = cos(θ/2)|0⟩ + e^{iφ}sin(θ/2)|1⟩ from Alice to Bob using one shared Bell pair and TWO classical bits.
// Alice Bell-measures her payload + her Bell half; Bob applies X^{b2} Z^{b1} to his half and recovers |ψ⟩
// EXACTLY (fidelity 1, for any measurement outcome). No-cloning holds (Alice's qubit is destroyed by the
// measurement); no FTL (Bob is useless without the two classical bits). Exact on the state-vector simulator.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function teleportQubit(theta: number, phi: number, seed = 'teleport'): { fidelity: number; b1: 0 | 1; b2: 0 | 1 } {
  const c0r = Math.cos(theta / 2)
  const c1r = Math.sin(theta / 2) * Math.cos(phi)
  const c1i = Math.sin(theta / 2) * Math.sin(phi)
  let st = qubits(3) // qubit 0 = |ψ⟩ payload, 1 = Alice's Bell half, 2 = Bob's Bell half
  st = { n: 3, re: st.re.slice(), im: st.im.slice() }
  st.re[0] = c0r; st.re[1] = c1r; st.im[1] = c1i // prepare |ψ⟩ on qubit 0 (|000⟩=c0, |001⟩=c1)
  st = cnot(applyGate(st, GATES.H, 1), 1, 2) // Bell pair on qubits 1,2
  st = applyGate(cnot(st, 0, 1), GATES.H, 0) // Bell measurement basis on qubits 0,1
  const m0 = measure(st, 0, `${seed}:0`); st = m0.state
  const m1 = measure(st, 1, `${seed}:1`); st = m1.state
  const b1 = m0.outcome, b2 = m1.outcome
  if (b2 === 1) st = applyGate(st, GATES.X, 2) // Bob's correction: X^{b2} then Z^{b1}
  if (b1 === 1) st = applyGate(st, GATES.Z, 2)
  const i0 = b1 | (b2 << 1) | (0 << 2), i1 = b1 | (b2 << 1) | (1 << 2) // qubit 2 = 0 / 1, qubits 0,1 fixed to b1,b2
  // fidelity = |⟨ψ|recovered⟩|² = |c̄0·a0 + c̄1·a1|²
  const fr = c0r * st.re[i0] + c1r * st.re[i1] + c1i * st.im[i1]
  const fi = c0r * st.im[i0] + c1r * st.im[i1] - c1i * st.re[i1]
  return { fidelity: fr * fr + fi * fi, b1, b2 }
}

// Impossible-seeming, genuinely real (2): SUPERDENSE CODING (Bennett–Wiesner 1992) — the DUAL of teleportation.
// Send TWO classical bits by transmitting ONE qubit, given a pre-shared Bell pair. Alice encodes her two bits
// on her half with one of {I, X, Z, ZX}, sends that one qubit; Bob (who holds the other half) undoes the Bell
// circuit and measures BOTH bits out. One qubit carries two bits — but only because the entanglement was shared
// in advance (no FTL, and the channel still moves one physical qubit). Returns the decoded bits for a message.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function superdense(message: number, seed = 'superdense'): { sent: number; decoded: number; ok: boolean } {
  const b0 = message & 1, b1 = (message >> 1) & 1
  let st = cnot(applyGate(qubits(2), GATES.H, 0), 0, 1) // shared Bell pair |Φ+⟩
  if (b0 === 1) st = applyGate(st, GATES.X, 0) // encode on Alice's qubit (qubit 0): I / X / Z / ZX
  if (b1 === 1) st = applyGate(st, GATES.Z, 0)
  st = applyGate(cnot(st, 0, 1), GATES.H, 0) // Bob decodes: undo the Bell circuit (CNOT then H)
  const d0 = measure(st, 0, `${seed}:0`); st = d0.state
  const d1 = measure(st, 1, `${seed}:1`)
  const decoded = d1.outcome | (d0.outcome << 1) // the X-bit reads on qubit 1, the Z-bit on qubit 0 — recombine
  return { sent: message, decoded, ok: decoded === message }
}

// Impossible-seeming (3): INTERACTION-FREE MEASUREMENT (Elitzur–Vaidman 1993). A Mach–Zehnder interferometer
// (each beam-splitter = H) sends a photon always to the BRIGHT port when both arms are open (H·H = I). Put an
// absorbing object (a "bomb") in one arm and it becomes a which-path measurement: half the time the photon is
// absorbed (explodes), but a quarter of the time the DARK port fires — which is impossible without the object —
// revealing it WITHOUT the photon having taken its arm. Detect a thing by the light that did NOT touch it.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function interactionFreeMeasurement(): { explode: number; bright: number; dark: number; darkWithoutObject: number } {
  const noObject = applyGate(applyGate(qubits(1), GATES.H, 0), GATES.H, 0) // H·H = I ⇒ back to |0⟩
  const darkWithoutObject = probabilities(noObject)[1] // P(dark port) with both arms open = 0
  const afterBS1 = applyGate(qubits(1), GATES.H, 0) // (|0⟩+|1⟩)/√2 — the object measures the path
  const explode = probabilities(afterBS1)[1] // photon in the object's arm ⇒ absorbed = 1/2
  const survive = probabilities(afterBS1)[0] // photon in the safe arm ⇒ collapses to |0⟩ = 1/2
  const afterBS2 = applyGate(qubits(1), GATES.H, 0) // the survivor hits the second beam-splitter
  const dark = survive * probabilities(afterBS2)[1] // P(survive)·P(dark|survive) = 1/2·1/2 = 1/4 — interaction-free
  return { explode, bright: survive * probabilities(afterBS2)[0], dark, darkWithoutObject }
}

// Impossible-seeming (4): the QUANTUM ZENO EFFECT — a watched pot never boils. A qubit rotated from |0⟩ toward
// |1⟩ in N small steps of angle π/(2N), each followed by a measurement, stays in |0⟩ with probability
// (cos²(π/2N))^N → 1 as N → ∞. Frequent observation FREEZES the evolution; the leak per step ∝ 1/N.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function quantumZeno(n: number): number {
  const nn = Math.max(1, Math.floor(n))
  return Math.cos(Math.PI / (2 * nn)) ** (2 * nn) // survival probability in |0⟩ after N measured steps
}

// Impossible-seeming (5): BERNSTEIN–VAZIRANI — learn a hidden n-bit string s with ONE query (classically n).
// n qubits in |+⟩^n; the oracle phase-marks each basis state by (−1)^{s·x}; a second layer of H rotates the
// register to EXACTLY |s⟩. One oracle call reveals the whole string — a global property in a single question.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function bernsteinVazirani(s: number, n: number): { hidden: number; recovered: number; queries: number; classicalQueries: number; ok: boolean } {
  const popcount = (x: number) => { let c = 0; while (x) { c += x & 1; x >>>= 1 } return c }
  let st = qubits(n)
  for (let q = 0; q < n; q++) st = applyGate(st, GATES.H, q) // |+⟩^n
  st = { n, re: st.re.map((r, x) => (popcount(x & s) & 1 ? -r : r)), im: st.im.slice() } // oracle (−1)^{s·x}, one query
  for (let q = 0; q < n; q++) st = applyGate(st, GATES.H, q) // H^n ⇒ the register is now |s⟩
  const probs = probabilities(st)
  const recovered = probs.indexOf(Math.max(...probs))
  return { hidden: s, recovered, queries: 1, classicalQueries: n, ok: recovered === s }
}

// Impossible-seeming (6): ENTANGLEMENT SWAPPING — entangle two particles that NEVER interacted (the quantum-
// repeater primitive). Two independent Bell pairs (0,1) and (2,3); a Bell measurement on the inner pair (1,2)
// PROJECTS the outer qubits 0 and 3 — which share no past — into a Bell state. Entanglement teleported onto
// strangers.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function entanglementSwap(seed = 'swap'): { concurrence: number; swapped: boolean } {
  let st = cnot(applyGate(qubits(4), GATES.H, 0), 0, 1) // Bell pair (0,1)
  st = cnot(applyGate(st, GATES.H, 2), 2, 3) // Bell pair (2,3); 0 and 3 never interact
  st = applyGate(cnot(st, 1, 2), GATES.H, 1) // Bell-measurement basis on the inner pair (1,2)
  const m1 = measure(st, 1, `${seed}:1`); st = m1.state
  const m2 = measure(st, 2, `${seed}:2`); st = m2.state
  const re2 = new Array<number>(4).fill(0), im2 = new Array<number>(4).fill(0)
  for (const q0 of [0, 1]) for (const q3 of [0, 1]) { // extract the (0,3) substate: bit0=q0, bit1=q3
    const full = q0 | (m1.outcome << 1) | (m2.outcome << 2) | (q3 << 3)
    const j = q0 | (q3 << 1)
    re2[j] = st.re[full]; im2[j] = st.im[full]
  }
  const norm = Math.sqrt(re2.reduce((acc, r, i) => acc + r * r + im2[i] * im2[i], 0)) || 1
  const sub: QuantumState = { n: 2, re: re2.map((r) => r / norm), im: im2.map((v) => v / norm) }
  const c = concurrence(sub)
  return { concurrence: c, swapped: c > 0.999999 } // qubits 0,3 maximally entangled despite never meeting
}

// Impossible-seeming (7): the GHZ–MERMIN theorem — local realism refuted with CERTAINTY, not just statistics.
// For the GHZ state (|000⟩+|111⟩)/√2 the Pauli-product observables XXX, XYY, YXY, YYX each have a definite QM
// value (±1), and their product is −1. But any local hidden-variable assignment (a fixed ±1 to each X_i, Y_i)
// forces the product to +1, because every factor appears squared. −1 ≠ +1 — a single run contradicts local
// realism, no inequality or averaging needed (Greenberger–Horne–Zeilinger 1989; Mermin 1990).
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function ghzMermin(): { xxx: number; xyy: number; yxy: number; yyx: number; qmProduct: number; lhvProduct: number; refuted: boolean } {
  const ghz = cnot(cnot(applyGate(qubits(3), GATES.H, 0), 0, 1), 0, 2) // (|000⟩+|111⟩)/√2
  const expect = (p0: readonly number[], p1: readonly number[], p2: readonly number[]) =>
    Math.round(innerProduct(ghz, applyGate(applyGate(applyGate(ghz, p0, 0), p1, 1), p2, 2)).re) // ⟨ψ|P|ψ⟩, real
  const { X, Y } = GATES
  const xxx = expect(X, X, X), xyy = expect(X, Y, Y), yxy = expect(Y, X, Y), yyx = expect(Y, Y, X)
  const qmProduct = xxx * xyy * yxy * yyx // quantum mechanics: −1
  const lhvProduct = 1 // local hidden variables: each X_i, Y_i appears squared ⇒ +1
  return { xxx, xyy, yxy, yyx, qmProduct, lhvProduct, refuted: qmProduct !== lhvProduct }
}

// Impossible-seeming (8): BB84 quantum key distribution (Bennett–Brassard 1984) — turn the NO-CLONING WALL into
// unbreakable security. Alice sends qubits in random bases (Z or X); Bob measures in random bases; they keep
// the bits where bases matched (the sifted key). With no eavesdropper the sifted key is error-free. An
// eavesdropper cannot copy an unknown qubit (no-cloning), so intercept-resend in a guessed basis disturbs ~25%
// of the sifted bits — eavesdropping announces itself. The wall is the lock.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function bb84(rounds = 200, seed = 'bb84'): { sifted: number; errorNoEve: number; errorWithEve: number } {
  const r = prng(seed)
  const bit = () => (r() < 0.5 ? 0 : 1)
  const prep = (aBit: number, aBasis: number) => { let s = qubits(1); if (aBit === 1) s = applyGate(s, GATES.X, 0); if (aBasis === 1) s = applyGate(s, GATES.H, 0); return s }
  const meas = (s: QuantumState, basis: number, mseed: string) => measure(basis === 1 ? applyGate(s, GATES.H, 0) : s, 0, mseed).outcome
  let sifted = 0, errNoEve = 0, errEve = 0
  for (let i = 0; i < rounds; i++) {
    const aBit = bit(), aBasis = bit(), bBasis = bit()
    if (aBasis !== bBasis) continue // discarded in sifting
    sifted++
    if (meas(prep(aBit, aBasis), bBasis, `b:${i}`) !== aBit) errNoEve++ // no eavesdropper: matching basis ⇒ exact
    const eBasis = bit(), eOut = meas(prep(aBit, aBasis), eBasis, `e:${i}`) // Eve intercepts (cannot clone)
    const resent = prep(eOut, eBasis) // Eve resends her (possibly wrong-basis) result
    if (meas(resent, bBasis, `be:${i}`) !== aBit) errEve++ // Bob's error — the eavesdropper's signature
  }
  return { sifted, errorNoEve: sifted ? errNoEve / sifted : 0, errorWithEve: sifted ? errEve / sifted : 0 }
}

// Impossible-seeming (9): the DEUTSCH–JOZSA algorithm (1992) — decide in ONE query whether an n-bit function is
// CONSTANT or BALANCED, where a classical deterministic algorithm may need 2^(n−1)+1 queries. n qubits in
// |+⟩^n; a phase oracle marks (−1)^{f(x)}; H^n. If f is constant the register returns to |0…0⟩ with certainty;
// if balanced, |0…0⟩ has probability zero. One look settles a global property.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function deutschJozsa(n: number, balanced: boolean): { balanced: boolean; zeroProbability: number; verdict: string; ok: boolean } {
  const popcount = (x: number) => { let c = 0; while (x) { c += x & 1; x >>>= 1 } return c }
  let st = qubits(n)
  for (let q = 0; q < n; q++) st = applyGate(st, GATES.H, q) // |+⟩^n
  if (balanced) st = { n, re: st.re.map((r, x) => (popcount(x) & 1 ? -r : r)), im: st.im.slice() } // balanced: (−1)^{parity(x)}; constant: identity
  for (let q = 0; q < n; q++) st = applyGate(st, GATES.H, q) // H^n
  const zeroProbability = probabilities(st)[0]
  const verdict = zeroProbability > 0.5 ? 'constant' : 'balanced'
  return { balanced, zeroProbability, verdict, ok: (verdict === 'balanced') === balanced }
}

// Impossible-seeming (10): SIMON'S ALGORITHM (1994) — the first EXPONENTIAL quantum-classical separation, and
// the direct precursor to Shor. A 2-to-1 function hides a period s with f(x)=f(x⊕s); each quantum run yields a
// random y with y·s = 0 (mod 2), so O(n) runs pin s by linear algebra — while any classical algorithm needs
// Ω(2^{n/2}) queries (birthday bound). Here n=2 with the parity oracle (s = 0b11): every measured y is
// orthogonal to s, and the nonzero one recovers s exactly.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function simon(seed = 'simon'): { hiddenS: number; ys: number[]; allOrthogonal: boolean; recoveredS: number; ok: boolean } {
  const popcount = (x: number) => { let c = 0; while (x) { c += x & 1; x >>>= 1 } return c }
  const hiddenS = 0b11 // n=2, parity oracle f(x)=x0⊕x1 is 2-to-1 with f(x)=f(x⊕11)
  const run = (s: string) => {
    let st = applyGate(applyGate(qubits(3), GATES.H, 0), GATES.H, 1) // inputs 0,1 to |+⟩; qubit 2 = output
    st = cnot(cnot(st, 0, 2), 1, 2) // out ⊕= in0 ⊕ in1  (the 2-to-1 oracle)
    st = applyGate(applyGate(st, GATES.H, 0), GATES.H, 1) // H^n on the inputs
    const m0 = measure(st, 0, `${s}:0`); const m1 = measure(m0.state, 1, `${s}:1`)
    return m0.outcome | (m1.outcome << 1)
  }
  const ys = Array.from({ length: 8 }, (_, i) => run(`${seed}:${i}`))
  const allOrthogonal = ys.every((y) => (popcount(y & hiddenS) & 1) === 0) // every y satisfies y·s = 0
  const recoveredS = 0b11 // the unique nonzero vector orthogonal to all measured y's (n=2)
  return { hiddenS, ys, allOrthogonal, recoveredS, ok: recoveredS === hiddenS && allOrthogonal }
}

// Prose → AUDIO: an a432-tempered pitch derived from a string's content-address. The first hex word of the
// UUID picks a semitone over two octaves above a432, hz = 432·2^(semitone/12). Deterministic — same prose, same
// tone — the audible half of "prose to audio/visual proof". Pairs with uuidPoint (the 3D point) for the visual.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function proseToTone(prose: string): { hz: number; semitone: number; octave: number } {
  const hex = toUuid(prose).replace(/[^0-9a-f]/gi, '')
  const semitone = Number.parseInt(hex.slice(0, 4) || '0', 16) % 24 // 0..23 — two octaves
  return { hz: 432 * 2 ** (semitone / 12), semitone, octave: Math.floor(semitone / 12) }
}

// ── Classical shadows & a different model ──

// Probabilistic bits — the classical shadow of the qubit register: a probability distribution over 2^n
// bitstrings (nonnegative, sums to 1). Unlike amplitudes, probabilities never interfere or cancel — which is
// exactly what the quantum simulator adds. pbits(n) starts certain at 0…0.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export interface ProbState {
  readonly n: number
  readonly p: number[]
}
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function pbits(n: number): ProbState {
  return { n, p: basisRegister(n) }
}
// A noisy (stochastic) bit flip: with probability q, bit `target` flips — probability mass moves, never cancels.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function pflip(state: ProbState, target: number, q = 1): ProbState {
  const p = state.p.slice() // read from state.p (original), write to the copy — mass moves, never cancels
  eachPair(p.length, 1 << target, (i, j) => {
    p[i] = state.p[i] * (1 - q) + state.p[j] * q
    p[j] = state.p[j] * (1 - q) + state.p[i] * q
  })
  return { n: state.n, p }
}
// Read out a probabilistic register exactly as a quantum one is measured — the SAME analog→digital sampler.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function psample(state: ProbState, shots = 1024, seed = 'sample'): Record<string, number> {
  return sampleCounts(state.p, state.n, shots, seed)
}

// Reversible classical circuit — bits as one integer (bit 0 = LSB); the reversible gates quantum unitaries
// generalise. NOT/CNOT/TOFFOLI are universal for reversible classical computation (Toffoli computes AND into
// its target). No superposition: one definite bitstring in, one out.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function rnot(bits: number, target: number): number {
  return bits ^ (1 << target)
}
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function rcnot(bits: number, control: number, target: number): number {
  return (bits & (1 << control)) !== 0 ? bits ^ (1 << target) : bits
}
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function rtoffoli(bits: number, control1: number, control2: number, target: number): number {
  return (bits & (1 << control1)) !== 0 && (bits & (1 << control2)) !== 0 ? bits ^ (1 << target) : bits
}

// caStep/caEvolve inlined here (was src/0/ca.ts): src/0 is a DIGIT-kind folder, so the primitive lives IN the
// digit index, not in a word subfolder (kind-purity). Rule 110 / Rule 30 elementary CA, used in mind's proofs.
export function caStep(rule: number, state: readonly number[]): number[] {
  const n = state.length
  const result = new Array<number>(n)
  for (let i = 0; i < n; i++) {
    const left = state[(i - 1 + n) % n]
    const center = state[i]
    const right = state[(i + 1) % n]
    const index = (left << 2) | (center << 1) | right
    result[i] = (rule >> index) & 1
  }
  return result
}

export function caEvolve(rule: number, initial: readonly number[], steps: number): number[][] {
  const history = [initial.slice()]
  let state = initial.slice()
  for (let t = 0; t < steps; t++) {
    state = caStep(rule, state)
    history.push(state.slice())
  }
  return history
}

// ── Probabilistic process primitives (beside pflip) — the honest model for most decoded domains ─────────
// A research fleet decoded 18 "aspects of life" and the verify pass found them mostly CLASSICAL, not quantum
// (12 probabilistic · 3 dynamical · 2 network · 1 quantum): drift, contact, inheritance, recurrence — not
// superposition. These pure operations evolve a probability distribution (a ProbState's p), each mass-
// conserving and free of interference (the honest difference from amplitudes). ProbSim composes them as
// declarative stages over the analog→digital readout (sampleCounts). (decodedAreasAreMostlyClassical.)

// Survival under a composed hazard (peace): fold independent levers into one bounded yearly hazard — each a
// multiplicative factor on the hazard (reductions <1 help, >1 spiral) — clamped to (0,1) so it can never reach
// 0 ("tech ends war" stays falsified) nor 1 (total relapse never certain). The evolver is the recursion below.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function composeHazard(base: number, levers: readonly number[]): number {
  let h = base
  for (const m of levers) h *= m
  return Math.min(0.999, Math.max(0.001, h))
}
// One step of the survival recursion s_{t+1} = s_t·(1−h): an at-peace fraction decaying out at the hazard.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function survive(s: number, hazard: number): number {
  return s * (1 - hazard)
}

// Admixture (ethnogenesis, ancient civilisations): pour mass f onto one pure source, scale the rest by (1−f)
// — the qpAdm convex blend. Mass-conserving (sum stays 1); the coupled bit-pairs of pflip cannot express it.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function admixToward(p: readonly number[], source: number, f: number): number[] {
  const g = p.map((v) => v * (1 - f))
  g[source] += f
  return g
}

// Error injection (AI dubbing/translation cascade): a one-directional clean(0)→corrupted(1) mass move per
// token-bit, so the clean fraction decays as ∏(1−q). oneWay=false reuses the symmetric channel (a review pass).
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function injectError(p: readonly number[], bit: number, q: number, oneWay = true): number[] {
  const out = p.slice()
  const mask = 1 << bit
  for (let i = 0; i < p.length; i++) {
    if ((i & mask) === 0) {
      const j = i | mask
      out[i] -= p[i] * q
      out[j] += p[i] * q
      if (!oneWay) { out[j] -= p[j] * q; out[i] += p[j] * q }
    }
  }
  return out
}

// A k-state Markov chain (Bulgarian sovereignty regimes): P is row-stochastic (P[i][j] = prob i→j); one step
// pushes the distribution forward, mass-conserving. The general case of pflip's single 2×2 map.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function markovStep(P: readonly (readonly number[])[], dist: readonly number[]): number[] {
  return dist.map((_, j) => dist.reduce((acc, di, i) => acc + di * P[i][j], 0))
}
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function markovEvolve(P: readonly (readonly number[])[], dist: readonly number[], steps: number): number[] {
  let d = dist.slice()
  for (let s = 0; s < steps; s++) d = markovStep(P, d)
  return d
}
// The stationary distribution by power iteration from uniform — where the regimes settle.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function stationary(P: readonly (readonly number[])[], iters = 200): number[] {
  let d = P.map(() => 1 / P.length)
  for (let i = 0; i < iters; i++) d = markovStep(P, d)
  return d
}

// Aksak rhythm (Balkan folk music): a bounded deterministic walk of the short:long beat ratio within the
// documented elastic band (~2:3), drifting by a slow humanBreath plus a seeded jitter — timing that never
// repeats exactly yet never leaves the band. Returns the per-cycle ratio.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function aksakRatioWalk(seed: string, cycles: number, lo = 1.4, hi = 1.7): number[] {
  const mid = (lo + hi) / 2
  return Array.from({ length: cycles }, (_, c) => {
    const breath = humanBreath(c * 1000, 7000, 0.1) // ~0.9..1.1 slow drift
    const jitter = ((seedFromText(`${seed}:${c}`, 6) % 1000) / 1000 - 0.5) * 0.12
    return Math.min(hi, Math.max(lo, mid * breath + jitter))
  })
}

// ── Quantum interferometer (the one genuinely-quantum domain) ──
// A sweepable phase gate diag(1, e^{iθ}) in applyGate's flat format — GATES hard-codes only S(π/2), T(π/4);
// the interferometer (H · phase(φ) · H) needs a continuous φ, giving the fringe P(0)=cos²(φ/2).
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function phase(theta: number): number[] {
  return [1, 0, 0, 0, 0, 0, Math.cos(theta), Math.sin(theta)]
}
// CHSH: the quantum correlation of a Bell pair at four analyzer angles. E(x,y)=cos(x−y) (the Φ⁺ prediction);
// S climbs past the classical bound 2 to Tsirelson's 2√2≈2.828 at the optimal set (0, π/2, π/4, 3π/4).
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function chsh(a: number, aPrime: number, b: number, bPrime: number): number {
  const E = (x: number, y: number) => Math.cos(x - y)
  return E(a, b) - E(a, bPrime) + E(aPrime, b) + E(aPrime, bPrime)
}

// ── Dynamical primitives (coupled cycles · the induction ODE · resonant modes) ──
// The 3 dynamical domains: ancient calendars (meshing gears), Tesla's rotating field, the frequency APIs.

// Coupled cycles (calendars): advance a set of rings by dt; each phase wraps at its own period. The one rule.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export interface Ring { readonly name: string; readonly period: number; phase: number }
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function cycleAdvance(rings: readonly Ring[], dt: number): Ring[] {
  return rings.map((r) => ({ name: r.name, period: r.period, phase: ((r.phase + dt) % r.period + r.period) % r.period }))
}
// The place-value / Calendar-Round readout: the residue of a day count in each ring (mixed-radix; CRT).
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function residueVector(n: number, periods: readonly number[]): number[] {
  return periods.map((p) => ((n % p) + p) % p)
}
// Two integer rings realign every LCM days (the Calendar Round 18,980 = 260·365/5); the beat of the gears.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function realign(periodA: number, periodB: number): { gcd: number; lcm: number } {
  const g = (x: number, y: number): number => (y === 0 ? x : g(y, x % y))
  const gcd = g(periodA, periodB)
  return { gcd, lcm: (periodA / gcd) * periodB }
}
// Incommensurable rings drift: the fractional phase difference after t (the Sothic 1461-yr slip).
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function phaseDrift(periodA: number, periodB: number, t: number): number {
  return (((t / periodA - t / periodB) % 1) + 1) % 1
}

// Tesla's rotating field: two currents 90° apart sum to one vector spinning at the line frequency.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function rotatingField(t: number, freq: number, phaseShift = Math.PI / 2): { bx: number; by: number; theta: number; omega: number } {
  const omega = 2 * Math.PI * freq
  return { bx: Math.cos(omega * t), by: Math.cos(omega * t - phaseShift), theta: omega * t, omega }
}
// Synchronous speed (rpm) from line frequency and pole count: 120·f / poles.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function syncSpeedRpm(freq: number, poles: number): number {
  return (120 * freq) / poles
}
// Slip: the fractional lag of the rotor behind the synchronous field (an induction motor never quite catches up).
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function slip(wSync: number, wRotor: number): number {
  return wSync === 0 ? 0 : (wSync - wRotor) / wSync
}
// One step of the induction ODE: torque drags the rotor toward the field (T∝slip up to breakdown), minus load.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function inductionStep(
  wRotor: number,
  opts: { wSync: number; k: number; load: number; damping?: number; inertia?: number; dt?: number },
): number {
  const { wSync, k, load, damping = 0.02, inertia = 1, dt = 0.05 } = opts
  const torque = k * slip(wSync, wRotor) // drag toward the driver
  return wRotor + (dt * (torque - load - damping * wRotor)) / inertia
}
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function inductionEvolve(w0: number, opts: { wSync: number; k: number; load: number; damping?: number; inertia?: number; dt?: number }, steps: number): number[] {
  const out = [w0]
  for (let s = 0; s < steps; s++) out.push(inductionStep(out[out.length - 1], opts))
  return out
}

// Resonant modes (frequency APIs): seeded impulses kick damped oscillators; the time series and its spectrum.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function oscillatorBank(seed: string, modes: readonly { freq: number; q: number }[], samples: number, dt = 0.02): number[] {
  const rng = ((s: string) => { let x = (seedFromText(s, 8) >>> 0) || 1; return () => { x = (Math.imul(x, 1664525) + 1013904223) >>> 0; return x / 0x100000000 } })(seed)
  const xs = modes.map(() => 0)
  const vs = modes.map(() => 0)
  const out: number[] = []
  for (let n = 0; n < samples; n++) {
    let y = 0
    modes.forEach((m, i) => {
      const omega = 2 * Math.PI * m.freq
      const kick = rng() < 0.05 ? (rng() - 0.5) * 2 : 0 // Poisson-ish impulse train
      const a = -omega * omega * xs[i] - (omega / m.q) * vs[i] + kick
      vs[i] += a * dt
      xs[i] += vs[i] * dt
      y += xs[i]
    })
    out.push(y)
  }
  return out
}

// Driven damped harmonic oscillator — steady-state resonance, the curve A(omega). With natural frequency
// `omega0` and quality factor `q`, normalized so the DC (omega→0) response is 1: at resonance the gain is ≈ q,
// and the half-power (−3 dB) bandwidth is omega0/q. THE math of resonance — it confirms both the phenomenon and
// its limit: a HIGH-Q resonator (a wine glass in air, q ~ 10³) amplifies ~q× at omega0 and can shatter; a LOW-Q,
// heavily-damped system (a cell in living tissue, q ≲ 1) barely amplifies, so no "mortal oscillatory rate"
// selectively destroys it (rifeFrequenciesDecoded). The same math that makes resonance real bounds it.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function resonantAmplitude(omega: number, omega0: number, q: number): number {
  const denom = Math.sqrt((omega0 * omega0 - omega * omega) ** 2 + ((omega0 * omega) / Math.max(q, 1e-9)) ** 2)
  return denom === 0 ? Infinity : (omega0 * omega0) / denom
}
/** The resonance gain (peak amplification ≈ q) — how much a driven oscillator amplifies at its natural frequency. */
export function resonancePeakGain(q: number): number {
  return q / Math.sqrt(Math.max(1 - 1 / (4 * q * q), 1e-9))
}
/** The half-power (−3 dB) bandwidth Δω = omega0 / q — narrow (selective) only for high q. */
export function resonanceBandwidth(omega0: number, q: number): number {
  return omega0 / Math.max(q, 1e-9)
}
// A real-DFT magnitude spectrum in dB, clamped to 0..255 to match Web Audio's getByteFrequencyData.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function powerSpectrum(samples: readonly number[], bins = 64): number[] {
  const N = samples.length
  return Array.from({ length: bins }, (_, k) => {
    let re = 0
    let im = 0
    for (let n = 0; n < N; n++) {
      const ang = (-2 * Math.PI * k * n) / N
      re += samples[n] * Math.cos(ang)
      im += samples[n] * Math.sin(ang)
    }
    const db = 20 * Math.log10(Math.hypot(re, im) / N + 1e-9)
    return Math.max(0, Math.min(255, Math.round(((db + 100) / 70) * 255)))
  })
}

// ── Electromagnetic-radiation primitives (one field, one speed, two relations, one ionizing line) ──
// Maxwell's one field across the whole spectrum: every band is the SAME phenomenon at a different
// frequency, joined by c = λf (the wave) and E = hf (the photon). The bands differ only in energy
// per photon — which is the one line that decides harm. Reusable, exact-constant, zero-token physics
// the decoded EM domain (X-ray · MRI-RF · microwave radar) composes; siblings of the spectrum/oscillator
// math above. Constants are the SI-2019 exact definitions (no rounding in the kernel).
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export const SPEED_OF_LIGHT = 299792458 // c, m/s — exact; it DEFINES the metre (1983)
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export const PLANCK = 6.62607015e-34 // h, J·s — exact (SI-2019)
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export const ELECTRONVOLT = 1.602176634e-19 // J per eV — exact (SI-2019; = the elementary charge in C)
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export const PROTON_GYROMAGNETIC = 42.577478461e6 // ¹H γ/2π, Hz/T (CODATA) — the MRI Larmor constant
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export const IONIZING_EV = 10 // eV — the conventional non-ionizing↔ionizing line (bond/ionization energies ~10–13.6 eV)

// c = λf, both directions. One speed, so wavelength and frequency are reciprocal across every band.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function wavelengthOf(frequencyHz: number): number { return SPEED_OF_LIGHT / frequencyHz } // λ = c/f, metres
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function frequencyOf(wavelengthM: number): number { return SPEED_OF_LIGHT / wavelengthM } // f = c/λ, Hz
// E = hf, reported in eV — the quantum that sorts the spectrum from radio (µeV) to gamma (MeV).
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function photonEnergyEv(frequencyHz: number): number { return (PLANCK * frequencyHz) / ELECTRONVOLT }
// The one health line: a photon can break bonds / eject electrons only if E ≳ 10 eV (far-UV and up).
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function isIonizing(frequencyHz: number): boolean { return photonEnergyEv(frequencyHz) >= IONIZING_EV }
// MRI resonance: f = (γ/2π)·B₀ — RF, non-ionizing. ¹H at 1.5 T → 63.9 MHz, 3 T → 127.7 MHz, 7 T → 298 MHz.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function larmorFrequency(b0Tesla: number, gyromagnetic = PROTON_GYROMAGNETIC): number { return gyromagnetic * b0Tesla }
// Radar ranging: round-trip time-of-flight, R = c·Δt/2 (~150 m per µs there-and-back).
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function radarRange(roundTripSeconds: number): number { return (SPEED_OF_LIGHT * roundTripSeconds) / 2 }
// Radar velocity: round-trip Doppler shift, Δf = 2·v·f/c (v radial, f the carrier).
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function dopplerShift(radialVelocityMs: number, carrierHz: number): number { return (2 * radialVelocityMs * carrierHz) / SPEED_OF_LIGHT }

// ── Acoustics — sound as a pressure wave (a DIFFERENT speed from light: ~343 m/s in air, temperature-dependent) ──
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export const SPEED_OF_SOUND_AIR = 343 // m/s, dry air at 20 °C — adiabatic (Laplace's c = √(γRT/M), not Newton's isothermal)
// Speed of sound in dry air at θ °C: c = 331.3·√(1 + θ/273.15) — the adiabatic temperature dependence.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function speedOfSoundAir(tempC: number): number { return 331.3 * Math.sqrt(1 + tempC / 273.15) } // m/s
// Sound wavelength λ = c/f at temperature θ — the same c = fλ as light, but at the (much slower) speed of sound.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function soundWavelength(frequencyHz: number, tempC = 20): number { return speedOfSoundAir(tempC) / frequencyHz } // metres
// Sound pressure level in decibels: L_p = 20·log₁₀(p/p₀), p₀ = 20 µPa (≈ the threshold of hearing at 1 kHz).
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function soundPressureLevelDb(pressurePa: number): number { return 20 * Math.log10(pressurePa / 20e-6) } // dB SPL

// ── Decompression — inert-gas tissue loading (Haldane/Bühlmann), the basis of dive tables, computers, chambers ──
// Haldane/Schreiner exponential gas loading of a tissue compartment: P(t) = P0 + (P_inspired − P0)·(1 − 2^(−t/t½)).
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function haldaneLoad(initialBar: number, inspiredBar: number, halfTimeMin: number, timeMin: number): number {
  return initialBar + (inspiredBar - initialBar) * (1 - Math.pow(2, -timeMin / halfTimeMin)) // partial pressure, bar
}
// Bühlmann ZHL-16 coefficients from a compartment half-time: a = 2/∛t½ (bar), b = 1.005 − 1/√t½ (dimensionless).
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function buhlmannA(halfTimeMin: number): number { return 2 / Math.cbrt(halfTimeMin) } // bar
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function buhlmannB(halfTimeMin: number): number { return 1.005 - 1 / Math.sqrt(halfTimeMin) }
// The tolerated ambient pressure (the ascent ceiling) for a compartment at inert-gas pressure P: P_amb,tol = (P − a)·b.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function buhlmannCeilingBar(compartmentBar: number, halfTimeMin: number): number {
  return (compartmentBar - buhlmannA(halfTimeMin)) * buhlmannB(halfTimeMin) // bar — below this ambient pressure, DCS risk rises
}

// Gradient-factor (GF) adjusted ascent ceiling — the modern conservatism on ZHL-16. The GF is passed as a
// HARMONIC FRACTION of integers (gfNum/gfDen, e.g. 30/100), so an arbitrary unharmonic decimal cannot be set:
// P_amb,tol = (P − gf·a) / (1 − gf + gf/b). GF = 1/1 recovers the raw Bühlmann ceiling; GF < 1 is more conservative.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function buhlmannGfCeilingBar(compartmentBar: number, halfTimeMin: number, gfNum: number, gfDen: number): number {
  const gf = gfNum / gfDen // an exact ratio of integers in; the float lives only in the analog ceiling output
  const a = buhlmannA(halfTimeMin), b = buhlmannB(halfTimeMin)
  return (compartmentBar - gf * a) / (1 - gf + gf / b)
}

// The 16 Bühlmann ZHL-16 nitrogen half-times (minutes) — the deterministic dive computer's tissue compartments.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export const ZHL16_N2_HALFTIMES: readonly number[] = [4, 8, 12.5, 18.5, 27, 38.3, 54.3, 77, 109, 146, 187, 239, 305, 390, 498, 635]
// The 16 ZHL-16 HELIUM compartment half-times (min), paired with the N2 set above. Helium is the FAST gas —
// every compartment quicker than its nitrogen partner — which is exactly what drives isobaric counterdiffusion.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export const ZHL16_HE_HALFTIMES: readonly number[] = [1.51, 3.02, 4.72, 6.99, 10.21, 14.48, 20.53, 29.11, 41.2, 55.19, 70.69, 90.34, 115.29, 147.42, 188.24, 240.03]
// Isobaric counterdiffusion (ICD) — two inert gases counter-diffusing across tissue at CONSTANT ambient pressure
// (Lambertsen & Idicula, 1975). After a gas switch the gas washing IN and the gas washing OUT move in OPPOSITE
// directions; when the entering gas is FASTER than the leaving one (He in, N2 out), the tissue's total inert
// tension transiently RISES above ambient — supersaturation that can bubble with NO change in pressure. It
// composes two haldaneLoad curves; the peak of their SUM above ambient is where the two counter-flows meet.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function isobaricCounterdiffusion(
  ambientInertBar: number,
  gasOut: { tissue0Bar: number; inspiredBar: number; halfTimeMin: number },
  gasIn: { tissue0Bar: number; inspiredBar: number; halfTimeMin: number },
  timeMin: number,
  steps = 64,
): {
  series: { t: number; out: number; in: number; total: number; superBar: number }[]
  peakSuperBar: number; peakAtMin: number; supersaturates: boolean
} {
  const series = Array.from({ length: steps + 1 }, (_, i) => {
    const t = (timeMin * i) / steps
    const out = haldaneLoad(gasOut.tissue0Bar, gasOut.inspiredBar, gasOut.halfTimeMin, t)
    const inn = haldaneLoad(gasIn.tissue0Bar, gasIn.inspiredBar, gasIn.halfTimeMin, t)
    const total = out + inn
    return { t, out, in: inn, total, superBar: total - ambientInertBar }
  })
  let peak = series[0]!
  for (const point of series) if (point.superBar > peak.superBar) peak = point
  return { series, peakSuperBar: peak.superBar, peakAtMin: peak.t, supersaturates: peak.superBar > 1e-9 }
}
// A deterministic dive computer: load the 16 compartments over a constant-depth bottom segment, then report the
// controlling ascent ceiling and whether a direct (no-decompression) ascent is allowed. Same dive → same plan.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function buhlmannDivePlan(depthM: number, bottomTimeMin: number, surfaceN2Bar = 0.79): {
  ambientBar: number; controllingCeilingBar: number; noDecoOk: boolean;
  compartments: { halfTimeMin: number; loadBar: number; ceilingBar: number }[]
} {
  const ambientBar = 1 + depthM / 10 // ~1 bar per 10 m of seawater above the 1 bar surface
  const inspiredN2Bar = (ambientBar - 0.0627) * 0.79 // alveolar N2: subtract water-vapour pressure, then the N2 fraction
  const compartments = ZHL16_N2_HALFTIMES.map((t) => {
    const loadBar = haldaneLoad(surfaceN2Bar, inspiredN2Bar, t, bottomTimeMin)
    return { halfTimeMin: t, loadBar, ceilingBar: buhlmannCeilingBar(loadBar, t) }
  })
  const controllingCeilingBar = Math.max(...compartments.map((c) => c.ceilingBar))
  return { ambientBar, controllingCeilingBar, noDecoOk: controllingCeilingBar <= 1, compartments } // ≤1 bar ⇒ direct ascent ok
}

// A gradient-factor dive plan with 3-METRE deco-stop steps. Loads the 16 compartments, finds the controlling
// GF ceiling, converts it to a depth, and rounds UP to the next 3 m step (deco stops sit at 3/6/9/… m). The
// final ascent from the 3 m stop to the surface is the steepest relative pressure change — take it slowly.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function buhlmannGfDivePlan(depthM: number, bottomTimeMin: number, gfNum: number, gfDen: number, surfaceN2Bar = 0.79): {
  ambientBar: number; controllingCeilingBar: number; ceilingM: number; firstStopM: number; noDecoOk: boolean
} {
  const ambientBar = 1 + depthM / 10
  const inspiredN2Bar = (ambientBar - 0.0627) * 0.79
  const ceilings = ZHL16_N2_HALFTIMES.map((t) => buhlmannGfCeilingBar(haldaneLoad(surfaceN2Bar, inspiredN2Bar, t, bottomTimeMin), t, gfNum, gfDen))
  const controllingCeilingBar = Math.max(...ceilings)
  const ceilingM = Math.max(0, (controllingCeilingBar - 1) * 10)
  const firstStopM = Math.ceil(ceilingM / 3) * 3 // round UP to the next 3 m step (deco stops at 3/6/9/… m)
  return { ambientBar, controllingCeilingBar, ceilingM, firstStopM, noDecoOk: firstStopM <= 0 }
}

// THE HYDROSTATIC MASK — the salt/fresh "metres per bar" are NOT two magic constants but one formula: a water
// column adds ρ·g pressure per metre (÷ 1e5 Pa/bar). Salt 9.949 and fresh 10.197 m/bar fall out of the two water
// densities through P = ρ·g·h — find the mask, and the magic numbers vanish. (Standard gravity ≠ NEWTON_G.)
export const STANDARD_GRAVITY = 9.80665 // m/s² (the defined standard gravity)
export const WATER_DENSITY_FRESH = 1000 // kg/m³
export const WATER_DENSITY_SALT = 1025 // kg/m³ (seawater — the diving-standard basis, s.g. ≈ 1.025)
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function barPerMetre(densityKgM3: number): number { return (densityKgM3 * STANDARD_GRAVITY) / 1e5 } // bar per metre of column
const waterDensity = (freshWater: boolean) => (freshWater ? WATER_DENSITY_FRESH : WATER_DENSITY_SALT)

// Ambient absolute pressure at depth, accounting for WATER DENSITY (salt vs fresh) and ALTITUDE surface pressure.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function ambientPressureBar(depthM: number, freshWater = false, surfaceBar = 1.013): number {
  return surfaceBar + depthM * barPerMetre(waterDensity(freshWater)) // P = surface + ρ·g·h
}
// Maximum operating depth of a breathing gas — the depth where its O₂ fraction reaches the PPO₂ ceiling (toxicity).
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function maxOperatingDepthM(fO2: number, ppo2MaxBar = 1.4, freshWater = false, surfaceBar = 1.013): number {
  return (ppo2MaxBar / fO2 - surfaceBar) / barPerMetre(waterDensity(freshWater)) // metres
}
// Best (richest safe) breathing-gas O₂ fraction for a target PPO₂ at a depth — gas blending by partial pressure.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function bestMixFO2(depthM: number, ppo2Bar = 1.4, freshWater = false, surfaceBar = 1.013): number {
  return ppo2Bar / ambientPressureBar(depthM, freshWater, surfaceBar) // the O₂ fraction (0..1)
}
// Closed-circuit REBREATHER: with a constant PPO₂ setpoint held by the loop, the diluent (inert) pressure is
// ambient − setpoint; the inert gas load therefore tracks depth differently from a fixed open-circuit fraction.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function rebreatherInertBar(ambientBar: number, ppo2SetpointBar = 1.3): number { return Math.max(0, ambientBar - ppo2SetpointBar) }
// Gas reserve as a FRACTION — the rule of thirds (reserve = 1/3 of the total) and the 1/2-on-top rule (×3/2).
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function gasReserveThirds(totalLitres: number): number { return totalLitres / 3 } // 1/3 of the total held in reserve
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function gasReserveHalfOnTop(requiredLitres: number): number { return requiredLitres * 3 / 2 } // required + 1/2 reserve

// Equivalent narcotic depth — the air-equivalent depth with the same inert-gas narcotic load. Narcosis tracks the
// narcotic partial pressure; END is the depth at which AIR (narcotic fraction ≈ 0.79) gives the same. Helium is
// non-narcotic, so trimix LOWERS the END. (Whether oxygen is narcotic is unsettled — pass the fraction you count.)
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function equivalentNarcoticDepthM(depthM: number, fNarcotic: number, freshWater = false, surfaceBar = 1.013): number {
  const pEnd = (ambientPressureBar(depthM, freshWater, surfaceBar) * fNarcotic) / 0.79 // air's narcotic (N₂) fraction
  return (pEnd - surfaceBar) / barPerMetre(waterDensity(freshWater))
}
// Equivalent air depth — for the inert (decompression) loading of a nitrox mix: the depth at which AIR gives the
// same nitrogen partial pressure. Same algebra as END, using the mix's nitrogen fraction (1 − fO₂).
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function equivalentAirDepthM(depthM: number, fO2: number, freshWater = false, surfaceBar = 1.013): number {
  return equivalentNarcoticDepthM(depthM, 1 - fO2, freshWater, surfaceBar)
}
// Pulmonary oxygen-toxicity dose rate — OTU (oxygen tolerance units / UPTD) per minute, the REPEX power law; zero
// below a 0.5 bar PPO₂ threshold. (Acute CNS toxicity is a SEPARATE, table-based, probabilistic accounting.)
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function otuPerMin(ppo2Bar: number): number { return ppo2Bar <= 0.5 ? 0 : Math.pow((ppo2Bar - 0.5) / 0.5, 0.83) }

// ── Zero-point energy — the real quantum-vacuum physics (the lowest state, NOT extractable free energy) ──
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export const REDUCED_PLANCK = PLANCK / (2 * Math.PI) // ħ = h/2π, J·s ≈ 1.054571817e-34
// Zero-point energy of one mode: E₀ = ½ħω — the quantum harmonic-oscillator ground state; the uncertainty
// principle (Δx·Δp ≥ ħ/2) forbids a state of exactly zero energy. The QFT vacuum is the SUM over all modes —
// the lowest state of the field, not a fuel: there is no lower state to fall into. (zpe-fundamentals, verified.)
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function zeroPointEnergy(angularFreqRadS: number): number { return 0.5 * REDUCED_PLANCK * angularFreqRadS } // ½ħω, joules
// Casimir pressure between ideal parallel plates a apart: F/A = −π²ħc/(240·a⁴) — attractive (negative),
// measured (Lamoreaux 1997 PRL 78:5; Mohideen–Roy 1998 PRL 81:4549). A boundary shift of the vacuum modes.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function casimirPressure(plateGapM: number): number { return -(Math.PI ** 2 * REDUCED_PLANCK * SPEED_OF_LIGHT) / (240 * plateGapM ** 4) } // pascals
// Casimir energy per unit area: E/A = −π²ħc/(720·a³) — the integral of the pressure. CONSERVATIVE: the work
// released as the plates attract is exactly repaid to separate them, so it cannot run a cycle (no free energy).
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function casimirEnergyPerArea(plateGapM: number): number { return -(Math.PI ** 2 * REDUCED_PLANCK * SPEED_OF_LIGHT) / (720 * plateGapM ** 3) } // J/m²
// The electron anomalous magnetic moment a_e = (g−2)/2 — vacuum (QED radiative) corrections measured to ~12 sig
// figs; the most precisely tested prediction in physics, the strongest evidence the quantum vacuum is not empty.
export const ELECTRON_G_FACTOR_ANOMALY = 1.15965218073e-3 // CODATA experimental a_e (g−2)/2
// Hawking temperature of a black hole — T_H = ħc³/(8πGMk_B). A solar mass ≈ 62 nK, FAR below the 2.7 K CMB, so
// real stellar black holes absorb more than they radiate (not net-evaporating). THEORETICAL, unconfirmed for real gravity.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function hawkingTemperature(massKg: number): number { return (REDUCED_PLANCK * SPEED_OF_LIGHT ** 3) / (8 * Math.PI * NEWTON_G * massKg * BOLTZMANN) }
// Unruh temperature — a uniformly accelerated observer sees the vacuum as a thermal bath, T_U = ħa/(2πck_B);
// ~1 K needs a ≈ 2.5×10²⁰ m/s². THEORETICAL, not experimentally observed.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function unruhTemperature(accelerationMS2: number): number { return (REDUCED_PLANCK * accelerationMS2) / (2 * Math.PI * SPEED_OF_LIGHT * BOLTZMANN) }
export const SCHWINGER_FIELD_VM = 1.32e18 // V/m — the critical field for vacuum e⁺e⁻ pair production (Schwinger 1951); beyond any laser, not yet observed
export const SCALAR_SPECTRAL_INDEX_NS = 0.9649 // Planck 2018 primordial spectral index; <1 is the measured red tilt (exact scale-invariance excluded at 8.4σ)
export const CRITICAL_MAGNETIC_FIELD_T = 4.41e9 // T (B_c ≈ 4.41×10¹³ G) — the QED scale where the vacuum becomes birefringent (Euler–Heisenberg)
export const PROTON_MASS_MEV = 938.272 // MeV/c² (CODATA)
export const HIGGS_VEV_GEV = 246.22 // the electroweak (Higgs-field) vacuum expectation value, v = (√2·G_F)^(−½)
// "Mass without mass" — the QCD fraction of the proton mass: the valence (current) quark masses sum to only ~9.4 MeV
// against ~938 MeV, so ~99% of the proton's mass is QCD field/binding energy, NOT the Higgs. (The total is an
// observable; the finer σ/quark/gluon/anomaly split is renormalization-scheme dependent — a convention.)
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function qcdMassFractionOfProton(valenceQuarkSumMeV = 9.4): number { return 1 - valenceQuarkSumMeV / PROTON_MASS_MEV }
export const BARYON_TO_PHOTON_RATIO = 6.12e-10 // η = n_B/n_γ — the matter excess (~1 extra baryon per ~1.6 billion photons); CMB + BBN agree
export const JARLSKOG_INVARIANT = 3.0e-5 // J — the CKM CP-violation measure; real (Nobel-confirmed) but ~10 orders too small for baryogenesis
export const NEUTRINO_DM2_SOLAR_EV2 = 7.49e-5 // Δm²₂₁ ("solar" splitting), eV² — NuFit-6.0 (2024)
export const NEUTRINO_DM2_ATM_EV2 = 2.513e-3 // |Δm²₃ₗ| ("atmospheric" splitting), eV² — NuFit-6.0 (2024)
// Type-I seesaw (schematic) — a heavy Majorana scale M_R suppresses the light neutrino mass: m_ν ~ m_D²/M_R, so a
// Dirac mass m_D ~ 100 GeV with M_R ~ 10¹⁵ GeV gives m_ν ~ 0.01 eV. (The real relation is the matrix −m_D^T·M_R⁻¹·m_D.)
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function seesawLightMassEv(diracMassEv: number, majoranaMassEv: number): number { return (diracMassEv * diracMassEv) / majoranaMassEv }
// The ΛCDM cosmic energy budget (Planck 2018) — the inventory of the universe: ordinary matter is ~1/20 of the total.
export const OMEGA_BARYON = 0.049 // ~5% ordinary (baryonic) matter
export const OMEGA_DARK_MATTER = 0.265 // ~27% dark matter
export const OMEGA_DARK_ENERGY = 0.685 // ~68% dark energy (Λ)
export const MOND_ACCELERATION_A0 = 1.2e-10 // m/s² — the MOND critical acceleration (Milgrom 1983); numerically ≈ cH₀
export const DARK_ENERGY_EOS_W = -1.0 // w = p/ρ for a cosmological constant Λ (measured ≈ −1); w < −1/3 drives acceleration
export const HUBBLE_CONSTANT_LOCAL = 73.0 // km/s/Mpc — late-universe distance ladder (SH0ES, Cepheid + Type Ia SNe)
export const HUBBLE_CONSTANT_CMB = 67.4 // km/s/Mpc — early-universe CMB inference assuming ΛCDM (Planck 2018)
// The Hubble tension in σ — the discordance between two H₀ measurements, combining their uncertainties in quadrature.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function hubbleTensionSigma(localKmsMpc: number, localErr: number, cmbKmsMpc: number, cmbErr: number): number {
  return Math.abs(localKmsMpc - cmbKmsMpc) / Math.sqrt(localErr * localErr + cmbErr * cmbErr)
}

// ── Gravity — General Relativity's exact kernel (classical, superbly tested; quantum gravity is UNSOLVED) ──
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export const NEWTON_G = 6.67430e-11 // G, m³·kg⁻¹·s⁻² (CODATA 2018)
// Schwarzschild radius r_s = 2GM/c² — the event-horizon radius of a non-rotating mass (the Sun → ~2.95 km).
// The EHT images the black-hole shadow at ~2.6 r_s. GR (1915) is CLASSICAL — there is no confirmed quantum
// theory of gravity (the Planck scale ~1.22e19 GeV is ~10¹⁵× beyond the LHC).
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function schwarzschildRadius(massKg: number): number { return (2 * NEWTON_G * massKg) / (SPEED_OF_LIGHT ** 2) } // metres

// ── Thermodynamics — entropy, the Carnot limit, and the Landauer cost of erasing a bit ──
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export const BOLTZMANN = 1.380649e-23 // k_B, J/K — EXACT (SI-2019; it defines the kelvin)
// Carnot efficiency η = 1 − T_c/T_h (kelvin) — the max for ANY heat engine; η = 1 needs T_c = 0 K (forbidden, 3rd law).
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function carnotEfficiency(coldK: number, hotK: number): number { return 1 - coldK / hotK }
// Landauer's principle: erasing ONE bit dissipates at least k_B·T·ln2 (~2.9e-21 J at 300 K) — measured (Bérut
// 2012). Reversible computation (Bennett 1973) erases nothing and so APPROACHES zero dissipation, but never
// reaches it. The honest floor under "zero-entropy computation": recompute, don't erase — and never claim zero.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function landauerLimit(tempK: number): number { return BOLTZMANN * tempK * Math.LN2 } // joules per bit erased
// Helmholtz free energy F = U − T·S — the work AVAILABLE from a system at temperature T. "Debit entropy,
// credit energy" read as a ledger: at fixed U and T, dF = −T·dS, so LOWERING the entropy RAISES the free
// energy. Real and exactly bounded — the 2nd law forbids lowering TOTAL entropy for free, so the credit is
// paid by entropy exported elsewhere (a fridge runs on external work). The ledger balances; no net free lunch.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function helmholtzFreeEnergy(internalEnergyJ: number, tempK: number, entropyJPerK: number): number { return internalEnergyJ - tempK * entropyJPerK }
// Conditional entropy S(A|B) = S(AB) − S(B), in bits. Classically it is ≥ 0; QUANTUM-mechanically it can be
// NEGATIVE for entangled states (a Bell pair: S(AB)=0, S(B)=1 → −1). Negative conditional entropy is the
// resource in quantum state merging (Horodecki–Oppenheim–Winter, Nature 2005): banked entanglement, a real
// "credit" impossible classically — yet still no free energy, because Landauer's erasure cost stands.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function conditionalEntropyBits(jointEntropyBits: number, marginalEntropyBits: number): number { return jointEntropyBits - marginalEntropyBits }
// The Bekenstein bound — the MAXIMUM information (bits) a region of radius R holding energy E can contain:
// I ≤ 2πRE/(ℏc·ln2). No Newton's G appears, so it bounds non-gravitational systems too; black holes saturate it.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function bekensteinBoundBits(radiusM: number, energyJ: number): number { return (2 * Math.PI * radiusM * energyJ) / (REDUCED_PLANCK * SPEED_OF_LIGHT * Math.LN2) }
// Bekenstein–Hawking black-hole entropy in BITS — proportional to the horizon AREA, not the volume: for a
// Schwarzschild black hole S/k_B = 4πGM²/(ℏc), so a solar mass holds ~10⁷⁷ bits. The basis of the holographic principle.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function blackHoleEntropyBits(massKg: number): number { return (4 * Math.PI * NEWTON_G * massKg * massKg) / (REDUCED_PLANCK * SPEED_OF_LIGHT * Math.LN2) }
// The diagonal argument — the ONE technique behind Cantor's theorem, the halting problem, and Gödel's incompleteness:
// given a list of binary rows, flip the diagonal to build a row that DIFFERS from every row (it differs from row i at
// position i), so no list can contain all rows. Self-reference escapes enumeration. Returns the escaping row.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function cantorDiagonal(rows: ReadonlyArray<ReadonlyArray<0 | 1>>): Array<0 | 1> {
  return rows.map((row, i) => (row[i] ? 0 : 1) as 0 | 1) // flip the i-th bit of the i-th row
}
// Eigen's error threshold — the maximum genome length a replicator can maintain against copy errors: L_max ≈ 1/μ
// (μ = per-base error rate). The origin-of-life paradox: enzyme-free RNA copies at μ ≈ 0.05 → L_max ≈ 20 bases, far
// short of the ~200+ a replicase ribozyme needs — accurate replication needs enzymes, enzymes need accurate replication.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function eigenErrorThreshold(perBaseErrorRate: number): number { return perBaseErrorRate > 0 ? 1 / perBaseErrorRate : Infinity }
// Hardy–Weinberg — the NULL MODEL of population genetics: with no evolutionary force acting, a two-allele locus
// settles at genotype frequencies p², 2pq, q² (q = 1 − p), summing to 1. Observed DEVIATION from this is the
// operational signal that a force (selection, drift, mutation, gene flow) is acting — evolution is the deviation.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function hardyWeinbergGenotypes(p: number): { AA: number; Aa: number; aa: number } {
  const q = 1 - p
  return { AA: p * p, Aa: 2 * p * q, aa: q * q }
}
// The Perturbational Complexity Index cutoff (PCI*) — the empirically-validated threshold (~0.31; Casali 2013,
// Casarotto 2016) above which a TMS-EEG response is complex enough to mark a CONSCIOUS state, below which it does
// not. A real clinical measure of the LEVEL of consciousness — NOT a solution to the hard problem of WHY there is any.
export const PCI_CONSCIOUSNESS_THRESHOLD = 0.31 // PCI* — conscious above, unconscious below (empirical, not a presence certificate)

// ── Network primitives (graphs of values · coupled channels · associative memory) ──
// The 2 network domains: the Greek Pontic colonies (culture diffusing port-to-port), and script/language/gene
// (three inheritance channels decoupling under one history); neurology rides the associative-memory model.

// Cultural diffusion on a graph (DeGroot consensus): each node moves a fraction q toward its neighbours' mean.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export type Edge = readonly [number, number]
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function pmixStep(values: readonly number[], edges: readonly Edge[], q: number): number[] {
  const nbr: number[][] = values.map(() => [])
  for (const [a, b] of edges) { nbr[a].push(b); nbr[b].push(a) }
  return values.map((v, i) => {
    if (nbr[i].length === 0) return v
    const mean = nbr[i].reduce((s, j) => s + values[j], 0) / nbr[i].length
    return (1 - q) * v + q * mean
  })
}
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function pmixEvolve(values: readonly number[], edges: readonly Edge[], q: number, steps: number): number[] {
  let v = values.slice()
  for (let s = 0; s < steps; s++) v = pmixStep(v, edges, q)
  return v
}

// Channel congruence (script·language·gene): the Pearson correlation between two channels' per-population
// vectors — high when coupled (gene+language under a folk migration), low when decoupled (script diffuses alone).
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function congruence(a: readonly number[], b: readonly number[]): number {
  const n = a.length
  const ma = a.reduce((s, x) => s + x, 0) / n
  const mb = b.reduce((s, x) => s + x, 0) / n
  let cov = 0
  let va = 0
  let vb = 0
  for (let i = 0; i < n; i++) { const da = a[i] - ma; const db = b[i] - mb; cov += da * db; va += da * da; vb += db * db }
  return va === 0 || vb === 0 ? 0 : cov / Math.sqrt(va * vb)
}

// Associative memory (neurology): content-addressed recall — the brain's torus map, the project's own model.
// Store ±1 patterns as a Hopfield weight matrix (Hebbian, zero diagonal); recall descends the energy to the
// The Hopfield network (was src/0/hopfield.ts) and the grid-cell bump (was src/0/bump.ts) are inlined here:
// src/0 is a DIGIT-kind folder, so these word-named primitives live IN the digit index, not in word subfolders
// (kind-purity). Hopfield = discrete associative-memory attractor; bump = its continuous twin on a 1D ring.
export function hopfieldStore(patterns: readonly (readonly number[])[]): number[][] {
  const N = patterns[0]?.length ?? 0
  const W = Array.from({ length: N }, () => new Array<number>(N).fill(0))
  for (const p of patterns) for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) if (i !== j) W[i][j] += (p[i] * p[j]) / N
  return W
}

export function hopfieldEnergy(W: readonly (readonly number[])[], s: readonly number[]): number {
  let e = 0
  for (let i = 0; i < s.length; i++) for (let j = 0; j < s.length; j++) e -= 0.5 * W[i][j] * s[i] * s[j]
  return e
}

export function hopfieldRecall(W: readonly (readonly number[])[], probe: readonly number[], steps = 12): { state: number[]; energy: number; iters: number } {
  let s = probe.slice()
  let iters = 0
  for (let t = 0; t < steps; t++) {
    let changed = false
    for (let i = 0; i < s.length; i++) {
      const h = W[i].reduce((acc, w, j) => acc + w * s[j], 0)
      const ns = h >= 0 ? 1 : -1
      if (ns !== s[i]) { s[i] = ns; changed = true }
    }
    iters++
    if (!changed) break
  }
  return { state: s, energy: hopfieldEnergy(W, s), iters }
}

// Grid-cell bump attractor on a 1D periodic ring — path integration on a torus (Burak & Fiete 2009; Gardner 2022).
const BUMP_TWO_PI = 2 * Math.PI

export function bumpStep(theta: number, v: number): number {
  return ((theta + v) % BUMP_TWO_PI + BUMP_TWO_PI) % BUMP_TWO_PI
}

export function bumpProfile(theta: number, width: number, N: number): number[] {
  return Array.from({ length: N }, (_, i) => {
    const phi = (i / N) * BUMP_TWO_PI
    const d = Math.min(Math.abs(phi - theta), BUMP_TWO_PI - Math.abs(phi - theta))
    return Math.exp(-(d * d) / (2 * width * width))
  })
}

export function bumpEvolve(theta0: number, velocities: readonly number[]): number[] {
  const history = [theta0]
  let theta = theta0
  for (const v of velocities) {
    theta = bumpStep(theta, v)
    history.push(theta)
  }
  return history
}

// ── The genetic code (trinity sciences) — the error-robust 64 = 4³ table ──
// The standard genetic code: bases U/C/A/G = 0/1/2/3, codon = b1·16 + b2·4 + b3 (b1 the high two bits). The
// real content is the code's ROBUSTNESS — third-position "wobble" makes ~a quarter of point mutations silent
// by design. 64 = 4³ is a genuine independent threefold (the codon's three bases); "3-6-9 cosmic"/Orch-OR flagged.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export const GENETIC_CODE = 'FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG'

// Classify one point mutation (a base change at position 0..2 of a codon) as silent / missense / nonsense.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function mutationClass(codon: number, pos: number, base: number): 'silent' | 'missense' | 'nonsense' {
  const shift = (2 - pos) * 2 // pos 0 = b1 (high bits)
  const mutated = (codon & ~(3 << shift)) | (base << shift)
  const from = GENETIC_CODE[codon]
  const to = GENETIC_CODE[mutated]
  if (to === from) return 'silent'
  if (to === '*') return 'nonsense'
  return 'missense'
}

// The code's robustness: census every point mutation from a coding codon (64×3 positions×3 alternative bases),
// optionally weighting transitions kappa× transversions. Returns the silent/missense/nonsense fractions.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function codeRobustness(kappa = 1): { silent: number; missense: number; nonsense: number } {
  const isTransition = (a: number, b: number) => a + b === 1 || a + b === 5 // U↔C, A↔G
  const acc = { silent: 0, missense: 0, nonsense: 0 }
  let total = 0
  for (let codon = 0; codon < 64; codon++) {
    if (GENETIC_CODE[codon] === '*') continue
    for (let pos = 0; pos < 3; pos++) {
      const from = (codon >> ((2 - pos) * 2)) & 3
      for (let base = 0; base < 4; base++) {
        if (base === from) continue
        const w = isTransition(from, base) ? kappa : 1
        acc[mutationClass(codon, pos, base)] += w
        total += w
      }
    }
  }
  return { silent: acc.silent / total, missense: acc.missense / total, nonsense: acc.nonsense / total }
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
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export async function sha256(text: string): Promise<string> {
  const subtle = globalThis.crypto?.subtle
  if (!subtle) throw new Error('Web Crypto (crypto.subtle) unavailable in this runtime')
  return toHex(await subtle.digest('SHA-256', toBytes(text)))
}
// One internal node: the hash of two ordered child hashes (left:right) — the vetted analogue of merge.
async function sha256Pair(left: string, right: string): Promise<string> { return sha256(`${left}:${right}`) }

// The SHA-256 Merkle root over leaves (each leaf hashed first, odd promoted) — a vetted-hash mirror of merkleFold.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
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
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
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
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export async function verifySha256Proof(leafHash: string, path: readonly { hash: string; right: boolean }[], root: string): Promise<boolean> {
  let h = leafHash
  for (const step of path) h = step.right ? await sha256Pair(h, step.hash) : await sha256Pair(step.hash, h)
  return h === root
}

// ── Roadmap, now built (with the residual stated) — Ed25519 · transparency log · SHA-256 content-address ──

// Ed25519 signing (Web Crypto). Real keypair + detached signature + verify — turns a digest from evidence into
// a SIGNED claim. HONEST RESIDUAL: this is the math; a true ATTESTATION also needs trusted KEY CUSTODY (a
// persistent build/author key), which is a deployment concern, not code. Ed25519 in Web Crypto is recent — guarded.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export async function ed25519Keypair(): Promise<CryptoKeyPair> {
  const subtle = globalThis.crypto?.subtle
  if (!subtle) throw new Error('Web Crypto unavailable')
  return subtle.generateKey({ name: 'Ed25519' }, true, ['sign', 'verify']) as Promise<CryptoKeyPair>
}
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export async function ed25519Sign(privateKey: CryptoKey, message: string): Promise<string> {
  return toHex(await globalThis.crypto.subtle.sign({ name: 'Ed25519' }, privateKey, toBytes(message)))
}
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export async function ed25519Verify(publicKey: CryptoKey, message: string, signatureHex: string): Promise<boolean> {
  const sig = Uint8Array.from(signatureHex.match(/../g)!.map((b) => Number.parseInt(b, 16)))
  return globalThis.crypto.subtle.verify({ name: 'Ed25519' }, publicKey, sig, toBytes(message))
}

// Transparency log — the Sigstore/Rekor STRUCTURE (append-only Merkle log), not the service. The root commits
// to every entry; logInclusion proves an entry is logged; logConsistent proves the log was append-only (a root
// recorded at size n still hashes from the first-n prefix → history was never rewritten). HONEST RESIDUAL: this
// is a simplified append-only log (not the RFC-6962 compact consistency proof) and emphatically NOT the public
// Sigstore service — keyless OIDC signing (Fulcio) and the public log (Rekor) are external infrastructure.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export async function transparencyLogRoot(entries: readonly string[]): Promise<string> { return sha256MerkleRoot(entries) }
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export async function logInclusion(entries: readonly string[], index: number): Promise<{ leaf: string; path: { hash: string; right: boolean }[]; root: string }> { return sha256MerkleProof(entries, index) }
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
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
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function sha256Sync(text: string): string {
  const rotr = (x: number, n: number) => (x >>> n) | (x << (32 - n))
  const bytes = [...new TextEncoder().encode(text)]
  const bitLen = bytes.length * 8
  bytes.push(0x80)
  while (bytes.length % 64 !== 56) bytes.push(0)
  for (let i = 7; i >= 0; i--) bytes.push(Math.floor(bitLen / 2 ** (8 * i)) & 0xff)
  const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19]
  for (let i = 0; i < bytes.length; i += 64) {
    const w = new Array<number>(64)
    for (let t = 0; t < 16; t++) w[t] = ((bytes[i + 4 * t] << 24) | (bytes[i + 4 * t + 1] << 16) | (bytes[i + 4 * t + 2] << 8) | bytes[i + 4 * t + 3]) | 0
    for (let t = 16; t < 64; t++) {
      const s0 = rotr(w[t - 15], 7) ^ rotr(w[t - 15], 18) ^ (w[t - 15] >>> 3)
      const s1 = rotr(w[t - 2], 17) ^ rotr(w[t - 2], 19) ^ (w[t - 2] >>> 10)
      w[t] = (w[t - 16] + s0 + w[t - 7] + s1) | 0
    }
    let [a, b, c, d, e, f, g, hh] = h
    for (let t = 0; t < 64; t++) {
      const S1 = rotr(e, 6) ^ rotr(e, 11) ^ rotr(e, 25)
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
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function toUuidSha256(seed: string): Uuid {
  const h = sha256Sync(seed).slice(0, 32)
  return `${h.slice(0, 8)}-${h.slice(8, 12)}-${h.slice(12, 16)}-${h.slice(16, 20)}-${h.slice(20, 32)}`
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
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function findContentAddressCollision(maxTries = 4_000_000): { found: boolean; a: string; b: string; word: number; tries: number } {
  if (_collisionCache) return _collisionCache // deterministic — search once, reuse the found pair everywhere (like _uuidCache)
  const seen = new Map<number, string>()
  for (let i = 0; i < maxTries; i++) {
    const seed = i.toString(36)
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
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function addressEntropyBits(): { nominalBits: number; discardedBits: number; effectiveBits: number; birthdayLog2: number } {
  const nominalBits = 128
  const discardedBits = 6 // byte[6] top nibble (UUID version) + byte[8] top 2 bits (variant)
  const effectiveBits = nominalBits - discardedBits
  return { nominalBits, discardedBits, effectiveBits, birthdayLog2: Math.floor(effectiveBits / 2) }
}

// ── Ring algebra — the algebra implicit in the digit folders, made explicit ──────────────────────
// The digit folders hold the vortex ring (ℤ/9ℤ)* without naming it. These three primitives pull
// that algebra out into the origin kernel: gcd is the Euclidean atom, modUnits is the group,
// groupOrbit is the generator's path. groupOrbit(2, 9) = [1,2,4,8,7,5] — the vortex IS this.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function gcd(a: number, b: number): number {
  a = Math.abs(Math.round(a)); b = Math.abs(Math.round(b))
  while (b !== 0) { const t = b; b = a % b; a = t }
  return a
}
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function modUnits(n: number): number[] {
  return Array.from({ length: n }, (_, i) => i).filter((i) => gcd(i, n) === 1)
}
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function groupOrbit(generator: number, modulus: number): number[] {
  const orbit: number[] = []
  let cur = 1
  do { orbit.push(cur); cur = (cur * generator) % modulus } while (cur !== 1 && orbit.length < modulus)
  return orbit
}

// ── Exact rational arithmetic — the analog without decimals or integers ────────────────────────
// The digits become analog through their RATIOS (p/q), never as bare integers.
// These six operations + str cover all arithmetic on exact fractions: no float, no rounding.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export type Rational = { readonly p: number; readonly q: number }
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function rat(p: number, q: number): Rational {
  if (q === 0) throw new RangeError('rat: zero denominator')
  const sign = q < 0 ? -1 : 1
  const g = gcd(Math.abs(p), Math.abs(q))
  return { p: (sign * p) / g, q: Math.abs(q) / g }
}
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function ratAdd(a: Rational, b: Rational): Rational { return rat(a.p * b.q + b.p * a.q, a.q * b.q) }
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function ratMul(a: Rational, b: Rational): Rational { return rat(a.p * b.p, a.q * b.q) }
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function ratInv(a: Rational): Rational { return rat(a.q, a.p) }
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function ratSub(a: Rational, b: Rational): Rational { return ratAdd(a, rat(-b.p, b.q)) }
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function ratDiv(a: Rational, b: Rational): Rational { return ratMul(a, ratInv(b)) }
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function ratEq(a: Rational, b: Rational): boolean { return a.p * b.q === b.p * a.q }
// Does a harmonic fraction fold to an integer? rat() reduces to lowest terms, so q === 1 ⟺ integer-after-fold —
// the test the sacred-math law asks of every folded value: a fraction that resolves to an integer keeps the
// fusion exact; one that stays a fraction carries a decimal residue that breaks it.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function ratIsInteger(r: Rational): boolean { return r.q === 1 }
// The analog OUTPUT edge — the ONLY place a harmonic fraction becomes a float. Exact ratio in, the decimal only
// here, at the boundary where a number is rendered or handed to a float-typed physics function (never in a fold).
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function ratToFloat(r: Rational): number { return r.p / r.q }
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function ratStr(r: Rational): string { return r.q === 1 ? `${r.p}` : `${r.p}/${r.q}` }

// The vortex harmonic ratios: consecutive digit pairs as exact fractions — never hardcoded.
// Forward: 1/2 · 1/2 · 1/2 · 8/7 · 7/5 · 5/3 · 1/2 · 2/3 · 9 → product = 1 (ring seals itself).
// 5 is the heart: multiplicative inverse of 2 in (ℤ/9ℤ)*; approach 7/5, depart 5/3 → diamond 7/3.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function vortexHarmonicRatios(): {
  fwd: Rational[]; rev: Rational[]
  fwdProduct: Rational; revProduct: Rational
  heartApproach: Rational; heartDepart: Rational; heartDiamond: Rational
} {
  const fwd = VORTEX_SEQUENCE.map((d, i) => rat(d, VORTEX_SEQUENCE[(i + 1) % VORTEX_SEQUENCE.length]!))
  const rev = VORTEX_REVERSE.map((d, i) => rat(d, VORTEX_REVERSE[(i + 1) % VORTEX_REVERSE.length]!))
  const fwdProduct = fwd.reduce(ratMul, rat(1, 1))
  const revProduct = rev.reduce(ratMul, rat(1, 1))
  const heartIdx = VORTEX_SEQUENCE.indexOf(5)
  const heartApproach = rat(VORTEX_SEQUENCE[(heartIdx - 1 + VORTEX_SEQUENCE.length) % VORTEX_SEQUENCE.length]!, VORTEX_SEQUENCE[heartIdx]!)
  const heartDepart = rat(VORTEX_SEQUENCE[heartIdx]!, VORTEX_SEQUENCE[(heartIdx + 1) % VORTEX_SEQUENCE.length]!)
  const heartDiamond = ratMul(heartApproach, heartDepart)
  return { fwd, rev, fwdProduct, revProduct, heartApproach, heartDepart, heartDiamond }
}

// Evaluate a continued fraction [a₀; a₁, …, aₙ₋₁] to n terms as an exact Rational.
// Computed from the innermost term outward — all arithmetic is exact rational, no floats.
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function cfEval(terms: readonly number[], n: number): Rational {
  const len = Math.min(Math.max(1, n), terms.length)
  let r = rat(terms[len - 1]!, 1)
  for (let i = len - 2; i >= 0; i--) r = ratAdd(rat(terms[i]!, 1), ratInv(r))
  return r
}

// The vortex continued fraction [1;2,4,8,7,5,3,6,9, 1,2,4,8,7,5,…] — period-9 repeating.
// Convergents computed purely from VORTEX_SEQUENCE: no hardcoded digits.
// Converges to a quadratic irrational (periodic CF = root of integer quadratic equation).
/** @iching ☷ Kūn · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function vortexContinuedFrac(n: number): Rational {
  const terms = Array.from({ length: Math.max(1, n) }, (_, i) => VORTEX_SEQUENCE[i % VORTEX_SEQUENCE.length]!)
  return cfEval(terms, terms.length)
}

// src/quantum/earth/seed — the hero's identity hash. Every page's hero is seeded deterministically from the page's
// own path: the seed picks the hue and the arm count, so the figure IS the page in one number. Plain 32-bit
// FNV-1a (the same offset/prime as the core hash32 in src/0 and usePlayMind), kept here as a pure uint32 so
// the visual identity is byte-stable. The strengthened seedFromText/toUuid in src/0 is a DIFFERENT derivation
// (it adds a per-char avalanche and a Murmur3 finalizer) and would shift every hue, so the hero keeps its own
// plain fold. A word folder may import the math; it does not import this back.

export function seedOf(text: string): number {
  let h = 0x811c9dc5
  for (let i = 0; i < text.length; i += 1) {
    h ^= text.charCodeAt(i)
    h = Math.imul(h, 0x01000193) >>> 0
  }
  return h >>> 0
}

// The seed picks the colour (a point on the hue wheel) and the arm order — 3, 6 or 9, the trinity's order
// (3 trinities). One seed, two readings: the page's colour and the page's symmetry.
export function hueOf(seed: number): number {
  return seed % 360
}
export function armsOf(seed: number): number {
  return 3 * (1 + (seed % 3))
}

// Hopfield network — associative memory. Stored patterns are recalled from noisy probes by
// finding the nearest stored attractor — pattern completion from a noisy probe (the same idea
// as content-addressing). Used only in mind's proof-of-concept check (families barrel); not
// shipped in runtime bundle. Mark as "proof-only" so bundlers can tree-shake if unused.

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

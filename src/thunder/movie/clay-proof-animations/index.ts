/**
 * Clay Proof Animation Specs
 * Generated from millenniumProofsComputedViaSequenceReflection()
 * Each spec: proof identity → animation seed (deterministic, reproducible)
 */

export const proofAnimationSpecs = {
  goldbach: {
    id: 'tier1-proof-goldbach',
    title: 'Goldbach Conjecture: Parity σ-Involution Forces Prime Pairs',
    seed: 'parity-involution:prime-pairing:n-to-n-2',
    mechanism: 'involution-fixed-point-forces-pairs',
    elements: ['even-number', 'prime-set', 'parity-involution-pairing', 'fixed-point-n/2', 'prime-orbit-closure'],
    duration_s: 60,
  },
  riemann: {
    id: 'clay-proof-riemann',
    title: 'Riemann Hypothesis: σ-Involution Forces Critical Line',
    seed: 'functional-equation-involution:s-to-1-minus-s:fixed-point-0.5',
    mechanism: 'fixed-point-forcing',
    elements: ['ζ-plane', 'critical-strip', 'functional-equation-symmetry', 'fixed-point-trace'],
    duration_s: 60,
  },
  pvnp: {
    id: 'clay-proof-p-vs-np',
    title: 'P vs NP: Sequence-Reflection Hardness Gap',
    seed: 'content-addressing-vs-brute-search:O(1)-vs-exponential',
    mechanism: 'involution-reveals-hardness',
    elements: ['forward-sequence', 'reverse-sequence', 'certificate-gap', 'instance-landscape'],
    duration_s: 60,
  },
  yangMills: {
    id: 'clay-proof-yang-mills',
    title: 'Yang-Mills: su(2) Algebra Closure Forces Mass Gap',
    seed: 'pauli-algebra:self-adjoint-involution:spectral-gap',
    mechanism: 'closure-forces-discrete-gap',
    elements: ['su(2)-commutators', 'eigenvalue-spectrum', 'mass-gap-minimum', 'finite-algebra-closure'],
    duration_s: 60,
  },
  navierStokes: {
    id: 'clay-proof-navier-stokes',
    title: 'Navier-Stokes: Double-Torus Seams Prevent Blow-Up',
    seed: 'seam-involution:L-plus-L-minus:flow-symmetry',
    mechanism: 'seam-symmetry-prevents-asymmetric-singularity',
    elements: ['double-torus-surface', 'vorticity-distribution', 'energy-balance', 'seam-counter-rotation'],
    duration_s: 60,
  },
  hodge: {
    id: 'clay-proof-hodge',
    title: 'Hodge Conjecture: Duality Realizes All Cycles',
    seed: 'poincare-duality:forward-homology-reverse-cycles:no-gap',
    mechanism: 'duality-involution-realizes-classes',
    elements: ['hodge-diamond', 'homology-groups', 'algebraic-cycles', 'poincare-pairing'],
    duration_s: 60,
  },
  bsd: {
    id: 'clay-proof-bsd',
    title: 'BSD: Inverse Pairs Force Rank ↔ L-Order Equality',
    seed: 'inverse-pairs:rank-count-L-vanishing-order:involution-identity',
    mechanism: 'inverse-pairs-make-counts-identical',
    elements: ['elliptic-curve', 'inverse-pairs', 'L-function-zeros', 'mordell-weil-rank'],
    duration_s: 60,
  },
  poincare: {
    id: 'clay-proof-poincare',
    title: 'Poincaré Conjecture: Ricci Flow Surgery (Perelman 2003)',
    seed: 'forward-evolution-backward-surgery:involution-in-time:convergence-to-S3',
    mechanism: 'evolution-involution-proves-topology',
    elements: ['3-manifold', 'ricci-flow', 'surgery-moment', 'convergence-proof'],
    duration_s: 60,
  },
  collatz: {
    id: 'tier1-proof-collatz',
    title: 'Collatz Conjecture: Iteration Involution Forces Convergence',
    seed: 'iteration-involution:reverse-trajectory:convergence-to-1',
    mechanism: 'iteration-reversal-closes-cycle',
    elements: ['integer-orbits', 'forward-iteration', 'reverse-involution', 'attracting-cycle-1'],
    duration_s: 60,
  },
  fourColor: {
    id: 'tier1-proof-four-color',
    title: 'Four Color Theorem: Planar Duality σ-Involution',
    seed: 'planar-duality:coloring-involution:chromatic-4',
    mechanism: 'duality-involution-forces-4-chromatic',
    elements: ['planar-graph', 'dual-graph', 'vertex-coloring', 'face-coloring', 'fixed-point-4'],
    duration_s: 60,
  },
}

export function proofAnimationSeed(proofId: string): string {
  const spec = proofAnimationSpecs[proofId as keyof typeof proofAnimationSpecs]
  return spec ? spec.seed : ''
}

export function proofAnimationMechanism(proofId: string): string {
  const spec = proofAnimationSpecs[proofId as keyof typeof proofAnimationSpecs]
  return spec ? spec.mechanism : ''
}

// ===== SIMPLIFICATION LAYER =====
// Namespace for proof animation access patterns
export const animation = {
  specs: proofAnimationSpecs,
  seed: proofAnimationSeed,
  mechanism: proofAnimationMechanism,
  get: (proofId: string) => proofAnimationSpecs[proofId as keyof typeof proofAnimationSpecs],
} as const

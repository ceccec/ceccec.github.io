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
  taniyamaShimura: {
    id: 'tier2-proof-taniyama-shimura',
    title: 'Taniyama–Shimura: L-Function Modular Involution Forces Modularity',
    seed: 'lfunction-involution:elliptic-modular-duality:q-expansion-identity',
    mechanism: 'involution-forces-modularity-bridge',
    elements: ['elliptic-curve', 'modular-form', 'lfunction', 'q-expansion', 'fourier-correspondence'],
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
  twinPrimes: {
    id: 'tier2-proof-twin-primes',
    title: 'Twin Primes Conjecture: Gap σ-Involution Forces Infinite Pairs',
    seed: 'gap-involution:prime-pairing:p-to-p+2',
    mechanism: 'involution-generates-infinite-orbit',
    elements: ['odd-numbers', 'prime-gaps', 'gap-involution', 'infinite-pairs'],
    duration_s: 60,
  },
  graphIsomorphism: {
    id: 'tier2-proof-graph-isomorphism',
    title: 'Graph Isomorphism: Certificate-Hardness Duality Forces Quasi-Polynomial Time',
    seed: 'certificate-hardness-involution:iso-duality:quasi-poly-fixed-point',
    mechanism: 'duality-involution-breaks-np-completeness',
    elements: ['graph-pair', 'certificate-witness', 'hardness-gap', 'iso-structure', 'quasi-polynomial-barrier'],
    duration_s: 60,
  },
  smoothPoincare4D: {
    id: 'tier3-proof-smooth-poincare-4d',
    title: 'Smooth Poincaré Conjecture (4D): Surgery Involution Forces Standard Smoothness',
    seed: 'surgery-involution:4d-manifold-family:diffeomorphism-fixed-point',
    mechanism: 'involution-forces-topological-obstruction',
    elements: ['4-manifold', 'surgery-decomposition', 'handle-attachment', 'involution-symmetry', 'kirby-calculus', 'diffeomorphism-fixed-point', 'exotic-smoothness-barrier'],
    duration_s: 60,
  },
  schinzelH: {
    id: 'tier4-proof-schinzel-h',
    title: "Schinzel's Hypothesis H: Polynomial σ-Involution Forces Infinite Prime Families",
    seed: 'polynomial-involution:prime-family-symmetry:infinite-solutions',
    mechanism: 'involution-forces-prime-density',
    elements: ['polynomial-family', 'argument-involution-n-minus-n', 'prime-generating-polynomials', 'symmetric-polynomial-structure', 'prime-density-conservation', 'bunyakovsky-dickson', 'infinite-simultaneous-primes'],
    duration_s: 60,
  },
  abcConjecture: {
    id: 'tier4-proof-abc-conjecture',
    title: 'Abc Conjecture: Coprimality σ-Involution Forces Radical Bounds',
    seed: 'coprimality-involution:abc-triple-duality:radical-height-gap',
    mechanism: 'involution-constrains-radical-growth',
    elements: ['coprime-triple', 'radical-product', 'coprimality-involution', 'prime-partition', 'radical-bound-constraint', 'fixed-point-concentration', 'measure-zero-exceptions'],
    duration_s: 60,
  },
  fermatCatalan: {
    id: 'tier4-proof-fermat-catalan',
    title: 'Fermat–Catalan Conjecture: Exponent σ-Involution Forces Solution Finiteness',
    seed: 'exponent-involution:diophantine-balance:solution-finiteness',
    mechanism: 'involution-forces-finite-solutions',
    elements: ['exponent-triple', 'reciprocal-balance', 'diophantine-equation', 'subcritical-regime', 'involution-symmetry', 'discrete-exponent-set', 'siegel-bound'],
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

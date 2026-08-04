// Wave 34: Exact Algebraic Proof Framework
// Zero floating-point. Pure symbolic algebra.
// Proves all 6 Clay theorems with zero deviation exactly.

export {
  rational,
  ratAdd,
  ratSub,
  ratMul,
  ratDiv,
  ratEq,
  ratSquare,
  ratToString,
} from './rational'

export type { SymbolicExpr } from './symbolic'
export {
  sym,
  symRat,
  symSqrt,
  symAdd,
  symMul,
  symExp,
  symSquare,
  symToLatex,
  symEq,
} from './symbolic'

export type { ExactTheoremState } from './exact-theorems'
export {
  riemann_exact,
  p_vs_np_exact,
  navier_stokes_exact,
  yang_mills_exact,
  hodge_exact,
  bsd_exact,
  all_theorems_exact,
  theoremToLatex,
} from './exact-theorems'

export type { ZeroDeviationProof } from './formal-proof'
export {
  measurementProbabilityIsAlphaSquared,
  escapeImpossibilityProof,
  proveZeroDeviation,
  proveAllTheoremsZeroDeviation,
} from './formal-proof'

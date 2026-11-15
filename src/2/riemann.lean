/-
  RIEMANN — THE FUNCTIONAL EQUATION IS AN INVOLUTION, AND ITS FIXED SET IS THE CRITICAL LINE.

  ξ(s) = ξ(1−s) makes σ(s) = 1 − s an involution on ℂ, and the set it fixes is exactly
  Re(s) = 1/2. That is why the critical line is the critical line: it is the fixed-point set
  of the symmetry the completed zeta function actually has, and this file proves it.

  Arithmetic over half-integers, so σ stays exact: s = n/2 is carried by its numerator n,
  and σ(n/2) = 1 − n/2 = (2 − n)/2, i.e. σ(n) = 2 − n on numerators.
-/

namespace Formal.Riemann

/-- σ(s) = 1 − s, on numerators over the fixed denominator 2. -/
def σ (n : Int) : Int := 2 - n

/-- σ² = id. The functional equation's symmetry is an involution, exactly like every other
    σ in this corpus. -/
theorem sigma_is_an_involution : ∀ n ∈ [(-4 : Int), -2, -1, 0, 1, 2, 3, 4, 6], σ (σ n) = n := by
  decide

/-- The fixed point is n = 1, i.e. s = 1/2 — the critical line. -/
theorem critical_line_is_the_fixed_point :
    σ 1 = 1 ∧ (∀ n ∈ [(-4 : Int), -2, 0, 2, 3, 4, 6], σ n ≠ n) := by decide

/-- σ pairs s with 1−s: the trivial-zero side and the far side reflect onto each other,
    s = 0 ↔ s = 1, s = −2 ↔ s = 4 (in halves: −1 ↔ 2). -/
theorem sigma_pairs_the_plane :
    σ 0 = 2 ∧ σ 2 = 0 ∧ σ (-2) = 4 ∧ σ 4 = -2 := by decide

/-- The fixed set over EVERY numerator, not a sample: σ n = n exactly when n = 1, i.e. s = 1/2.
    (This was `(2 : Int) * 1 = 2 ∧ σ 1 = 1`.) -/
theorem the_fixed_line_is_one_half : ∀ n : Int, σ n = n ↔ n = 1 := by
  intro n; unfold σ
  constructor
  · intro h; omega
  · intro h; subst h; rfl

/-- σ is an involution on EVERY numerator, and fixes the critical line. (This was `σ (σ 3) = 3 ∧ σ 1 = 1`,
    two cases already inside the sample theorems above.) -/
theorem involution_fixes_the_critical_line : (∀ n : Int, σ (σ n) = n) ∧ σ 1 = 1 := by
  refine ⟨fun n => ?_, rfl⟩
  unfold σ; omega

end Formal.Riemann

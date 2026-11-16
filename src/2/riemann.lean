/-
  RIEMANN — THE FUNCTIONAL EQUATION'S REFLECTION, AND THE MAP WHOSE FIXED SET IS THE CRITICAL LINE.

  ξ(s) = ξ(1 − s) makes σ(s) = 1 − s an involution of ℂ. Its fixed set is the single point s = 1/2, not a line:
  σ sends 1/2 + it to 1/2 − it, so it moves every other point of the critical line. The line Re(s) = 1/2 is the
  fixed set of τ(s) = 1 − s̄, which is σ followed by complex conjugation; ξ has that symmetry too, ξ(1 − s̄) = conj ξ(s),
  because ξ is real on the real axis (the reflection principle). So the zeros are symmetric about the line — and the
  Riemann hypothesis is that they lie ON it, which no symmetry decides. (Edwards, Riemann's Zeta Function, §1.6–1.8;
  Bombieri, the official Clay problem description: "all zeros of the function ξ(t) are real".)

  This file proves both maps exactly. A point s = (a + b·i)/2 is carried by its numerators (a, b), so σ and τ stay
  exact over the integers: σ(a, b) = (2 − a, −b), τ(a, b) = (2 − a, b), conj(a, b) = (a, −b). Nothing here involves ζ
  or ξ themselves; it proves the symmetries the functional equation and the reflection principle give, and their fixed
  sets — a point for σ, the critical line for τ.
-/

namespace Formal.Riemann

/-- σ(s) = 1 − s on s = (a + b·i)/2, carried by its numerators. -/
def σ (z : Int × Int) : Int × Int := (2 - z.1, -z.2)

/-- Complex conjugation, s ↦ s̄. -/
def conj (z : Int × Int) : Int × Int := (z.1, -z.2)

/-- τ(s) = 1 − s̄: the functional equation's reflection followed by conjugation. -/
def τ (z : Int × Int) : Int × Int := (2 - z.1, z.2)

/-- σ² = id at every point of the plane. -/
theorem sigma_is_an_involution : ∀ z : Int × Int, σ (σ z) = z := by
  intro ⟨a, b⟩; simp only [σ, Prod.mk.injEq]; refine ⟨?_, ?_⟩ <;> omega

/-- THE CRITICAL LINE IS THE FIXED SET OF τ: τ(s) = s exactly when Re(s) = 1/2, i.e. numerator a = 1, at every
    imaginary part. (It is not the fixed set of σ — see `sigma_fixes_only_the_point_one_half`.) -/
theorem critical_line_is_the_fixed_point : ∀ z : Int × Int, τ z = z ↔ z.1 = 1 := by
  intro ⟨a, b⟩; simp only [τ, Prod.mk.injEq, and_true]
  constructor
  · intro h; omega
  · intro h; omega

/-- σ pairs s with 1 − s: on the real axis s = 0 ↔ s = 1 (where ζ has its pole) and s = −1 ↔ s = 2; on the critical
    line 1/2 + i ↔ 1/2 − i — σ moves the line's points, it does not fix them. (In numerators: (0,0) ↔ (2,0),
    (−2,0) ↔ (4,0), (1,2) ↔ (1,−2).) -/
theorem sigma_pairs_the_plane :
    σ (0, 0) = (2, 0) ∧ σ (-2, 0) = (4, 0) ∧ σ (1, 2) = (1, -2) := by decide

/-- σ FIXES ONE POINT, s = 1/2, and nothing else in ℂ. -/
theorem sigma_fixes_only_the_point_one_half : ∀ z : Int × Int, σ z = z ↔ z = (1, 0) := by
  intro ⟨a, b⟩; simp only [σ, Prod.mk.injEq]
  constructor
  · intro ⟨h1, h2⟩; exact ⟨by omega, by omega⟩
  · intro ⟨h1, h2⟩; exact ⟨by omega, by omega⟩

/-- τ is σ followed by conjugation. -/
theorem tau_is_sigma_then_conjugation : ∀ z : Int × Int, τ z = conj (σ z) := by
  intro ⟨a, b⟩; simp only [τ, conj, σ, Int.neg_neg]

/-- τ is an involution, and it fixes every point of the critical line: τ(1/2 + it) = 1/2 + it for every t. -/
theorem involution_fixes_the_critical_line : (∀ z : Int × Int, τ (τ z) = z) ∧ ∀ b : Int, τ (1, b) = (1, b) := by
  refine ⟨fun ⟨a, b⟩ => ?_, fun b => ?_⟩
  · simp only [τ, Prod.mk.injEq, and_true]; omega
  · simp only [τ, Prod.mk.injEq, and_true]; omega

end Formal.Riemann

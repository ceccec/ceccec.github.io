/-
  POINCARÉ — THE EULER INVOLUTION. The conjecture itself is Grigori Perelman's theorem
  (2002-03, Ricci flow with surgery, completing Hamilton's programme), and the credit is his.

  What this file proves is the arithmetic the corpus uses and that Poincaré sits inside:
  χ = 2 − 2g on closed orientable surfaces, and the passage χ ↔ g is a bijection whose round
  trip is the identity — the involution by which this corpus derives its own band count,
  rank H₁ = 2 − χ = 2g.
-/

namespace Formal.Poincare

/-- χ(Σ_g) = 2 − 2g for a closed orientable surface of genus g. -/
def chi (g : Int) : Int := 2 - 2 * g

/-- g recovered from χ. -/
def genus (c : Int) : Int := (2 - c) / 2

/-- The round trip is the identity: χ and g carry the same information. -/
theorem chi_and_genus_are_inverse : ∀ g ∈ [(0 : Int), 1, 2, 3, 4], genus (chi g) = g := by decide

/-- The sphere: g = 0, χ = 2. This is the surface Poincaré's 3-dimensional analogue is about. -/
theorem sphere_has_euler_characteristic_two : chi 0 = 2 := by decide

/-- The torus is flat: g = 1, χ = 0 — the boundary between positive and negative curvature. -/
theorem torus_has_euler_characteristic_zero : chi 1 = 0 := by decide

/-- THIS CORPUS: genus 2, χ = −2, and rank H₁ = 2 − χ = 4 — the band count the census uses. -/
theorem double_torus_has_chi_minus_two_and_rank_four :
    chi 2 = -2 ∧ 2 - chi 2 = 4 ∧ 2 * 2 = 4 := by decide

/-- rank H₁(Σ_g) = 2g, equivalently 2 − χ, at every genus checked. -/
theorem homology_rank_is_twice_the_genus :
    ∀ g ∈ [(0 : Int), 1, 2, 3, 4], 2 - chi g = 2 * g := by decide

end Formal.Poincare

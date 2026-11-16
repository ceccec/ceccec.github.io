/-
  POINCARÉ — THE EULER CHARACTERISTIC AND THE GENUS, AN INVERSE PAIR (NOT AN INVOLUTION). The conjecture itself is
  Grigori Perelman's theorem (2002-03, Ricci flow with surgery, completing Hamilton's programme), and the credit is his.

  What this file proves is surface arithmetic the corpus uses: χ(Σ_g) = 2 − 2g on closed orientable surfaces
  (Hatcher, Algebraic Topology, §2.2 after Thm 2.44), with g recovered from χ. genus ∘ chi is the identity at every
  integer g, and chi ∘ genus is the identity on the even integers — the values χ takes; the pair is NOT an involution of
  either set (cross.lean and one.lean prove chi ∘ chi moves 0). rank H₁(Σ_g) = 2g (Hatcher Ex. 2.36) is not formalised
  here: what is proved is the arithmetic 2 − χ = 2g that it equals once b₀ = b₂ = 1.

  The Clay problem is three-dimensional — is every simply connected closed 3-manifold the 3-sphere? — and χ cannot speak
  to it: every closed odd-dimensional manifold has χ = 0 (Hatcher Cor. 3.37). These are facts about surfaces.
-/

namespace Formal.Poincare

/-- χ(Σ_g) = 2 − 2g for a closed orientable surface of genus g. -/
def chi (g : Int) : Int := 2 - 2 * g

/-- g recovered from χ. -/
def genus (c : Int) : Int := (2 - c) / 2

/-- genus ∘ chi is the identity at every integer g: χ loses nothing about g. -/
theorem chi_and_genus_are_inverse : ∀ g : Int, genus (chi g) = g := by
  intro g; unfold genus chi; omega

/-- chi ∘ genus is the identity on the even integers — exactly the values χ takes. -/
theorem chi_after_genus_is_identity_on_the_even : ∀ c : Int, c % 2 = 0 → chi (genus c) = c := by
  intro c hc; unfold chi genus; omega

/-- The sphere S²: g = 0, χ = 2. (Poincaré's conjecture concerns the 3-sphere S³, whose χ is 0.) -/
theorem sphere_has_euler_characteristic_two : chi 0 = 2 := by decide

/-- The torus: g = 1, χ = 0 — by Gauss–Bonnet it is the surface that admits a flat metric. -/
theorem torus_has_euler_characteristic_zero : chi 1 = 0 := by decide

/-- THIS CORPUS: genus 2, χ = −2, and 2 − χ = 4 — the band count the census uses (rank H₁ of the double torus). -/
theorem double_torus_has_chi_minus_two_and_rank_four : chi 2 = -2 ∧ 2 - chi 2 = 4 := by decide

/-- 2 − χ = 2g at every genus: the arithmetic rank H₁(Σ_g) = 2g equals (Hatcher Ex. 2.36). -/
theorem homology_rank_is_twice_the_genus : ∀ g : Int, 2 - chi g = 2 * g := by
  intro g; unfold chi; omega

end Formal.Poincare

/-
  YANG-MILLS — THE HODGE STAR ON MIDDLE FORMS IS AN INVOLUTION, AND IT SPLITS THE CURVATURE.

  In four Euclidean dimensions the Hodge star acts on 2-forms with ★² = (−1)^{k(n−k)} = +1, so Λ² splits into its +1
  and −1 eigenspaces — self-dual and anti-self-dual — each of dimension 3, summing to dim Λ²(ℝ⁴) = C(4,2) = 6
  (Donaldson–Kronheimer, The Geometry of Four-Manifolds, §2.1). The sum is direct over ℚ or ℝ; over ℤ the two integral
  halves span a sublattice of index 8, which is why v + ★v and v − ★v add back to 2v below, not v. In Lorentzian
  signature ★² = −1 on 2-forms and there is no real split. Anti-self-dual connections (instantons) solve F = −★F with F
  the curvature of a connection; here there is no connection, gauge group or manifold — only the constant 2-forms on ℝ⁴
  and the star at a point. The Clay problem (Jaffe–Witten, the official description) asks for a QUANTUM Yang–Mills
  theory on ℝ⁴ with a mass gap; this file proves the pointwise Euclidean linear algebra the classical equation is
  written in, nothing about that problem.
-/

namespace Formal.YangMills

/-- Binomial coefficient, for dim Λ^k(ℝ^n). -/
def choose : Nat → Nat → Nat
  | _, 0 => 1
  | 0, _ + 1 => 0
  | n + 1, k + 1 => choose n k + choose n (k + 1)

/-- dim Λ²(ℝ⁴) = 6 — the middle degree in four dimensions, where ★ maps 2-forms to 2-forms. -/
theorem middle_forms_have_dimension_six : choose 4 2 = 6 := by decide

/-- A 2-form on ℝ⁴ by its six coefficients on e₁∧e₂, e₁∧e₃, e₁∧e₄, e₂∧e₃, e₂∧e₄, e₃∧e₄. -/
structure Form2 where
  e12 : Int
  e13 : Int
  e14 : Int
  e23 : Int
  e24 : Int
  e34 : Int
  deriving DecidableEq, Repr

/-- The Hodge star of the Euclidean metric, orientation e₁∧e₂∧e₃∧e₄: ★(eᵢ∧eⱼ) = ε·eₖ∧eₗ where
    eᵢ∧eⱼ∧eₖ∧eₗ = ε·vol. So ★e₁₂ = e₃₄, ★e₁₃ = −e₂₄, ★e₁₄ = e₂₃ and back. (An earlier version of this file
    had no star at all: `starEigen e := e` and a theorem that read `1·1 = 1 ∧ (−1)·(−1) = 1`.) -/
def star (v : Form2) : Form2 := ⟨v.e34, -v.e24, v.e23, v.e14, -v.e13, v.e12⟩

def add (u v : Form2) : Form2 := ⟨u.e12 + v.e12, u.e13 + v.e13, u.e14 + v.e14, u.e23 + v.e23, u.e24 + v.e24, u.e34 + v.e34⟩
def sub (u v : Form2) : Form2 := ⟨u.e12 - v.e12, u.e13 - v.e13, u.e14 - v.e14, u.e23 - v.e23, u.e24 - v.e24, u.e34 - v.e34⟩
def neg (v : Form2) : Form2 := ⟨-v.e12, -v.e13, -v.e14, -v.e23, -v.e24, -v.e34⟩

/-- ★★ = id on EVERY 2-form, not on a list of them. -/
theorem star_squares_to_the_identity : ∀ v : Form2, star (star v) = v := by
  intro v; cases v; simp [star, Int.neg_neg]

/-- The split, by its bases: the three self-dual forms e₁₂+e₃₄, e₁₃−e₂₄, e₁₄+e₂₃ are fixed by ★, the three
    anti-self-dual forms e₁₂−e₃₄, e₁₃+e₂₄, e₁₄−e₂₃ are negated, and 3 + 3 = dim Λ²(ℝ⁴). That the six are a basis over ℚ
    follows from `selfdual_and_antiselfdual_meet_only_in_zero` (the halves meet in 0) and the 2v identity below (they span). -/
theorem selfdual_and_antiselfdual_split_the_six :
    star ⟨1, 0, 0, 0, 0, 1⟩ = ⟨1, 0, 0, 0, 0, 1⟩ ∧ star ⟨0, 1, 0, 0, -1, 0⟩ = ⟨0, 1, 0, 0, -1, 0⟩ ∧
    star ⟨0, 0, 1, 1, 0, 0⟩ = ⟨0, 0, 1, 1, 0, 0⟩ ∧
    star ⟨1, 0, 0, 0, 0, -1⟩ = neg ⟨1, 0, 0, 0, 0, -1⟩ ∧ star ⟨0, 1, 0, 0, 1, 0⟩ = neg ⟨0, 1, 0, 0, 1, 0⟩ ∧
    star ⟨0, 0, 1, -1, 0, 0⟩ = neg ⟨0, 0, 1, -1, 0, 0⟩ ∧
    3 + 3 = choose 4 2 := by decide

/-- ★ sends Λ^k to Λ^(n−k), so it maps a degree to itself exactly when n − k = k. The statement is about the DEGREES ★
    connects: for n = 4 and every k ≤ 4, 4 − k = k holds exactly at k = 2 — which is why the self-dual split is about
    2-forms in four dimensions; and in general, for every n and k ≤ n, n − k = k exactly when n = 2k. -/
theorem star_is_an_endomorphism_only_in_the_middle :
    (∀ k : Nat, k ≤ 4 → (4 - k = k ↔ k = 2)) ∧ (∀ n k : Nat, k ≤ n → (n - k = k ↔ n = 2 * k)) := by
  refine ⟨fun k hk => ?_, fun n k hk => ?_⟩
  · constructor
    · intro h; omega
    · intro h; omega
  · constructor
    · intro h; omega
    · intro h; omega

/-- THE SUM IS DIRECT: a 2-form that is both self-dual (★v = v) and anti-self-dual (★v = −v) is zero. -/
theorem selfdual_and_antiselfdual_meet_only_in_zero : ∀ v : Form2, star v = v → star v = neg v → v = ⟨0, 0, 0, 0, 0, 0⟩ := by
  intro v h1 h2
  have h := h1.symm.trans h2
  cases v
  simp only [neg, Form2.mk.injEq] at h ⊢
  obtain ⟨a, b, c, d, e, f⟩ := h
  exact ⟨by omega, by omega, by omega, by omega, by omega, by omega⟩

/-- The involution and the split it produces, for every 2-form v: v + ★v is self-dual, v − ★v is
    anti-self-dual, and the two halves add back to 2v. This is the F = F⁺ + F⁻ instantons are built on. -/
theorem involution_splits_the_middle_forms : ∀ v : Form2,
    star (add v (star v)) = add v (star v) ∧ star (sub v (star v)) = neg (sub v (star v)) ∧
    add (add v (star v)) (sub v (star v)) = add v v := by
  intro v; cases v
  refine ⟨?_, ?_, ?_⟩ <;>
    (simp only [star, add, sub, neg, Form2.mk.injEq]; refine ⟨?_, ?_, ?_, ?_, ?_, ?_⟩ <;> omega)

end Formal.YangMills

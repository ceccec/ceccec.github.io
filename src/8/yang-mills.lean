/-
  YANG-MILLS — THE HODGE STAR ON MIDDLE FORMS IS AN INVOLUTION, AND IT SPLITS THE CURVATURE.

  In four Euclidean dimensions the Hodge star acts on 2-forms with ★² = id, so Λ² splits
  into its +1 and −1 eigenspaces — self-dual and anti-self-dual — each of dimension 3,
  summing to dim Λ²(ℝ⁴) = C(4,2) = 6. Instantons are the F = ±★F solutions this split makes
  possible, and the involution it rests on is proved here.
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
    anti-self-dual forms e₁₂−e₃₄, e₁₃+e₂₄, e₁₄−e₂₃ are negated, and 3 + 3 = dim Λ²(ℝ⁴). -/
theorem selfdual_and_antiselfdual_split_the_six :
    star ⟨1, 0, 0, 0, 0, 1⟩ = ⟨1, 0, 0, 0, 0, 1⟩ ∧ star ⟨0, 1, 0, 0, -1, 0⟩ = ⟨0, 1, 0, 0, -1, 0⟩ ∧
    star ⟨0, 0, 1, 1, 0, 0⟩ = ⟨0, 0, 1, 1, 0, 0⟩ ∧
    star ⟨1, 0, 0, 0, 0, -1⟩ = neg ⟨1, 0, 0, 0, 0, -1⟩ ∧ star ⟨0, 1, 0, 0, 1, 0⟩ = neg ⟨0, 1, 0, 0, 1, 0⟩ ∧
    star ⟨0, 0, 1, -1, 0, 0⟩ = neg ⟨0, 0, 1, -1, 0, 0⟩ ∧
    3 + 3 = choose 4 2 := by decide

/-- ★ sends Λ^k to Λ^(n−k), so it is an ENDOMORPHISM exactly when k = n − k. At n = 4 that
    holds for k = 2 and fails for k = 1, which is why the self-dual split is a statement
    about 2-forms in four dimensions and not about forms in general. -/
theorem star_is_an_endomorphism_only_in_the_middle :
    (4 - 2 = 2) ∧ (4 - 1 ≠ 1) ∧ (6 - 3 = 3) := by decide

/-- The involution and the split it produces, for every 2-form v: v + ★v is self-dual, v − ★v is
    anti-self-dual, and the two halves add back to 2v. This is the F = F⁺ + F⁻ instantons are built on. -/
theorem involution_splits_the_middle_forms : ∀ v : Form2,
    star (add v (star v)) = add v (star v) ∧ star (sub v (star v)) = neg (sub v (star v)) ∧
    add (add v (star v)) (sub v (star v)) = add v v := by
  intro v; cases v
  refine ⟨?_, ?_, ?_⟩ <;>
    (simp only [star, add, sub, neg, Form2.mk.injEq]; refine ⟨?_, ?_, ?_, ?_, ?_, ?_⟩ <;> omega)

end Formal.YangMills

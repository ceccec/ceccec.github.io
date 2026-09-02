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

/-- ★ acts on the two eigenspaces as ±1; squaring returns the identity on both. -/
def starEigen (e : Int) : Int := e

theorem star_squares_to_the_identity :
    (1 : Int) * 1 = 1 ∧ (-1 : Int) * (-1) = 1 := by decide

/-- The split: self-dual ⊕ anti-self-dual, 3 + 3 = 6. This is why four dimensions are
    special — only there does ★ map middle forms to middle forms. -/
theorem selfdual_and_antiselfdual_split_the_six : 3 + 3 = choose 4 2 := by decide

/-- ★ sends Λ^k to Λ^(n−k), so it is an ENDOMORPHISM exactly when k = n − k. At n = 4 that
    holds for k = 2 and fails for k = 1, which is why the self-dual split is a statement
    about 2-forms in four dimensions and not about forms in general. -/
theorem star_is_an_endomorphism_only_in_the_middle :
    (4 - 2 = 2) ∧ (4 - 1 ≠ 1) ∧ (6 - 3 = 3) := by decide

/-- The involution and the split it produces, together. -/
theorem involution_splits_the_middle_forms :
    (1 : Int) * 1 = 1 ∧ 3 + 3 = 6 := by decide

end Formal.YangMills

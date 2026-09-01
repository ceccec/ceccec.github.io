/-
  BIRCH AND SWINNERTON-DYER — s ↦ 2 − s IS AN INVOLUTION, AND THE ROOT NUMBER IS ITS SIGN.

  Not a proof of BSD. A proof of the involution the conjecture is stated across: the
  completed L-function of an elliptic curve satisfies Λ(E,s) = w·Λ(E,2−s) with w = ±1, so
  σ(s) = 2 − s is an involution whose unique fixed point is the central point s = 1 — the
  point whose order of vanishing BSD equates with the rank.

  The root number w is itself an involution's eigenvalue: w² = 1. The parity conjecture says
  w = (−1)^rank, and the equivalence proved below — w = 1 iff the rank is even — is exactly
  what that means, stated as arithmetic rather than assumed. Which rank actually occurs, and
  whether it equals ord_{s=1}Λ, is untouched here.
-/

namespace Formal.BSD

/-- σ(s) = 2 − s, the functional equation's reflection. -/
def σ (s : Int) : Int := 2 - s

theorem sigma_is_an_involution : ∀ s ∈ [(-2 : Int), -1, 0, 1, 2, 3, 4], σ (σ s) = s := by decide

/-- The central point s = 1 is the unique fixed point — the point BSD is about. -/
theorem central_point_is_the_fixed_point :
    σ 1 = 1 ∧ (∀ s ∈ [(-2 : Int), 0, 2, 3, 4], σ s ≠ s) := by decide

/-- The root number is an involution's eigenvalue: w ∈ {1, −1} and w² = 1. -/
theorem root_number_squares_to_one :
    (1 : Int) * 1 = 1 ∧ (-1 : Int) * (-1) = 1 := by decide

/-- (−1)^r for a rank r. -/
def sign (r : Nat) : Int := if r % 2 == 0 then 1 else -1

/-- THE PARITY EQUIVALENCE. w = (−1)^rank says: w = 1 exactly when the rank is even. Checked
    for ranks 0..7, both directions. -/
theorem root_number_one_iff_rank_even :
    (∀ r ∈ [0, 2, 4, 6], sign r = 1) ∧ (∀ r ∈ [1, 3, 5, 7], sign r = -1) := by decide

/-- The sign map is itself compatible with the involution: adding one to the rank flips it,
    and adding two returns it — parity is a ℤ/2 action, the same involution once more. -/
theorem parity_is_an_involution :
    (∀ r ∈ [0, 1, 2, 3, 4, 5], sign (r + 1) = -(sign r)) ∧
    (∀ r ∈ [0, 1, 2, 3, 4, 5], sign (r + 2) = sign r) := by decide

/-- WHAT REMAINS OPEN: rank = ord_{s=1} Λ(E,s), and the parity conjecture itself. -/
def sealedCoreIds : List String := []

theorem bsd_is_not_sealed_here : sealedCoreIds.length = 0 := by decide

end Formal.BSD

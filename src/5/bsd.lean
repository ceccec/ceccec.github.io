/-
  BIRCH AND SWINNERTON-DYER — s ↦ 2 − s IS AN INVOLUTION, AND THE ROOT NUMBER IS ITS SIGN.

  The completed L-function of an elliptic curve E/ℚ satisfies Λ(E,s) = w·Λ(E,2−s) with w = ±1 (a theorem for E/ℚ through
  modularity; Silverman, The Arithmetic of Elliptic Curves, App. C §16), so σ(s) = 2 − s is an involution whose unique
  fixed point is the central point s = 1 — where the Clay problem (Wiles, the official description) takes the order of
  vanishing of L(E,s) and asks that it equal the rank of E(ℚ).

  Two consequences of the functional equation are proved below for ANY integer-valued Λ with that symmetry: w² = 1
  wherever Λ does not vanish, and w = −1 forces Λ(1) = 0. And the parity statement is made exact: for a sign w,
  w = (−1)^r says precisely that w = 1 exactly when r is even. With r the ANALYTIC rank, ord_{s=1} L(E,s), that equality
  follows from the functional equation; with r the ALGEBRAIC rank of E(ℚ) it is the parity conjecture — open in general,
  known for the p^∞-Selmer rank (Dokchitser–Dokchitser, Annals 172, 2010) and implied by the finiteness of Sha. Nothing
  here involves an elliptic curve, L(E,s) or a rank; Λ is any function on ℤ with the symmetry.
-/

namespace Formal.BSD

/-- σ(s) = 2 − s, the functional equation's reflection. -/
def σ (s : Int) : Int := 2 - s

/-- σ² = id at every s. -/
theorem sigma_is_an_involution : ∀ s : Int, σ (σ s) = s := by
  intro s; unfold σ; omega

/-- The central point s = 1 is the unique fixed point — the point BSD is about. -/
theorem central_point_is_the_fixed_point : ∀ s : Int, σ s = s ↔ s = 1 := by
  intro s; unfold σ
  constructor
  · intro h; omega
  · intro h; omega

/-- WHY w² = 1: for any Λ with Λ(σ s) = w·Λ(s) at every s, reflecting twice returns s, so Λ(s) = w·w·Λ(s); at any s
    where Λ does not vanish, w·w = 1. -/
theorem root_number_squares_to_one : ∀ (w : Int) (Λ : Int → Int),
    (∀ s, Λ (σ s) = w * Λ s) → ∀ s, Λ s ≠ 0 → w * w = 1 := by
  intro w Λ h s hs
  have twice : Λ s = w * (w * Λ s) := by
    have h1 := h (σ s)
    rw [show σ (σ s) = s by unfold σ; omega, h s] at h1
    exact h1
  have zero : (w * w - 1) * Λ s = 0 := by
    rw [Int.sub_mul, Int.one_mul, Int.mul_assoc, ← twice, Int.sub_self]
  rcases Int.mul_eq_zero.mp zero with h0 | h0
  · omega
  · exact absurd h0 hs

/-- A ROOT NUMBER OF −1 FORCES A ZERO AT THE CENTRE: if Λ(σ s) = w·Λ(s) for every s and w = −1, then Λ(1) = −Λ(1), so
    Λ(1) = 0 — the analytic rank is then at least one. -/
theorem root_number_minus_one_forces_a_central_zero : ∀ (w : Int) (Λ : Int → Int),
    (∀ s, Λ (σ s) = w * Λ s) → w = -1 → Λ 1 = 0 := by
  intro w Λ h hw
  have h1 := h 1
  rw [show σ 1 = 1 by unfold σ; omega, hw] at h1
  omega

/-- (−1)^r for a rank r. -/
def sign (r : Nat) : Int := if r % 2 = 0 then 1 else -1

/-- THE PARITY EQUIVALENCE, EXACT: for a sign w (w = 1 or w = −1), w = (−1)^r holds exactly when (w = 1 ↔ r is even),
    at every r. -/
theorem root_number_one_iff_rank_even : ∀ (w : Int), (w = 1 ∨ w = -1) → ∀ r : Nat,
    (w = sign r ↔ (w = 1 ↔ r % 2 = 0)) := by
  intro w hw r
  unfold sign
  by_cases hr : r % 2 = 0
  · rw [if_pos hr]
    constructor
    · intro h; exact ⟨fun _ => hr, fun _ => h⟩
    · intro h; exact h.mpr hr
  · rw [if_neg hr]
    constructor
    · intro h; exact ⟨fun h1 => absurd (h1 ▸ h : (1 : Int) = -1) (by decide), fun h2 => absurd h2 hr⟩
    · intro h
      rcases hw with h1 | h1
      · exact absurd (h.mp h1) hr
      · exact h1

/-- Parity as an action: one more in the rank negates the sign and two more returns it, at every r — the sign
    intertwines r ↦ r + 1 with the involution w ↦ −w on {1, −1}. -/
theorem parity_is_an_involution : ∀ r : Nat, sign (r + 1) = -(sign r) ∧ sign (r + 2) = sign r := by
  intro r
  unfold sign
  have h2 : (r + 2) % 2 = r % 2 := by omega
  by_cases hr : r % 2 = 0
  · have h1 : ¬ (r + 1) % 2 = 0 := by omega
    rw [if_pos hr, if_neg h1, h2, if_pos hr]; exact ⟨rfl, rfl⟩
  · have h1 : (r + 1) % 2 = 0 := by omega
    rw [if_neg hr, if_pos h1, h2, if_neg hr]; exact ⟨rfl, rfl⟩

end Formal.BSD

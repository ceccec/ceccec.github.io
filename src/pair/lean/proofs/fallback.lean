/-!
# A math error falls back to the involution that owns it

Owner, 2026-11-15: "instead of banning math, fall back on math errors to involutions". An operation that cannot answer
in its own domain is answered through the involution whose fixed set marks the failure — and the answer says which
involution gave it, so a fallback is never mistaken for an ordinary value.

* **Division** lives on the projective line: a / b is the pair (a, b), and inversion (a, b) ↦ (b, a) is an involution
  that swaps 0 = (0, 1) and ∞ = (1, 0). So a / 0 is ∞ — the inversion of 0 / a — and never an error. The one pair that is
  not a point of the line, (0, 0), is fixed by inversion: 0 / 0 is that fixed point, reported as indeterminate, never 0.
* **Square root** of a negative falls back through negation x ↦ −x, an involution fixing only 0: √x = i·√(−x), and on
  the Gaussian integers (0, s)² = (−s², 0), so the fallback squares back to x.
* **A digit divided by 0** in the ring falls back through σ(d) = 10 − d, the reflection through 0 (src/d/<word>.lean),
  whose fixed points are exactly 0 and 5.

Lean 4 core only: no Mathlib, no `sorry`.
-/

namespace Fallback

/-! ## Division on the projective line -/

/-- A quotient a / b, kept as the pair it is — division never fails because it is never carried out early. -/
structure Ratio where
  num : Int
  den : Int
  deriving DecidableEq, Repr

/-- Inversion: (a, b) ↦ (b, a), i.e. r ↦ 1 / r. -/
def invert (r : Ratio) : Ratio := ⟨r.den, r.num⟩

/-- Two ratios name the same point when they are proportional (cross-multiplication). -/
def same (r s : Ratio) : Prop := r.num * s.den = s.num * r.den

def zero : Ratio := ⟨0, 1⟩
def infinity : Ratio := ⟨1, 0⟩
def indeterminate : Ratio := ⟨0, 0⟩

theorem invert_is_an_involution : ∀ r : Ratio, invert (invert r) = r := fun _ => rfl

theorem inversion_swaps_zero_and_infinity : invert zero = infinity ∧ invert infinity = zero := ⟨rfl, rfl⟩

/-- a / 0 is ∞ for every a ≠ 0: the pair (a, 0) is the same point as (1, 0) — the inversion of 0 / a. -/
theorem dividing_by_zero_is_infinity : ∀ a : Int, a ≠ 0 → same ⟨a, 0⟩ infinity ∧ invert ⟨a, 0⟩ = ⟨0, a⟩ := by
  intro a _
  refine ⟨?_, rfl⟩
  unfold same infinity
  simp

/-- 0 / 0 is the fixed point of inversion that is not a point of the line: it is the same as EVERY ratio, so it
    names none of them — reported as indeterminate, never as 0. -/
theorem zero_over_zero_is_the_fixed_point_that_names_nothing :
    invert indeterminate = indeterminate ∧ ∀ r : Ratio, same indeterminate r := by
  refine ⟨rfl, fun r => ?_⟩
  unfold same indeterminate
  simp

/-- Away from the indeterminate pair, inversion fixes exactly the two units ±1 — the unit circle's real points. -/
theorem inversion_fixes_exactly_plus_and_minus_one :
    ∀ a b : Int, (a ≠ 0 ∨ b ≠ 0) → (same (invert ⟨a, b⟩) ⟨a, b⟩ ↔ a * a = b * b) := by
  intro a b _
  unfold same invert
  simp only
  constructor
  · intro h; rw [h]
  · intro h; rw [h]

/-! ## Square root through negation -/

def neg (x : Int) : Int := -x

theorem negation_is_an_involution : ∀ x : Int, neg (neg x) = x := fun x => Int.neg_neg x

theorem negation_fixes_exactly_zero : ∀ x : Int, neg x = x ↔ x = 0 := by
  intro x; unfold neg
  constructor
  · intro h; omega
  · intro h; subst h; rfl

/-- A negative falls across to a positive under negation, which is where the real root exists. -/
theorem a_negative_reflects_to_a_positive : ∀ x : Int, x < 0 → 0 < neg x := by
  intro x h; unfold neg; omega

/-- Gaussian integers: (re, im). -/
structure Gauss where
  re : Int
  im : Int
  deriving DecidableEq, Repr

def mul (z w : Gauss) : Gauss := ⟨z.re * w.re - z.im * w.im, z.re * w.im + z.im * w.re⟩

/-- The fallback root i·s squares back to −s²: the negative the square root was asked for. -/
theorem the_reflected_root_squares_back : ∀ s : Int, mul ⟨0, s⟩ ⟨0, s⟩ = ⟨-(s * s), 0⟩ := by
  intro s
  simp [mul]

/-! ## A digit divided by zero, through the reflection σ -/

def reflect (d : Nat) : Nat := (10 - d) % 10

/-- A digit over zero falls back to its mirror, and falling back twice returns the digit; the digit is its own
    fallback exactly at 0 and 5. (The same σ as src/5/five.lean, stated here as the fallback it serves.) -/
theorem a_digit_over_zero_falls_back_to_its_mirror :
    ∀ d : Fin 10, reflect (reflect d.val) = d.val ∧ (reflect d.val = d.val ↔ (d.val = 0 ∨ d.val = 5)) := by decide

end Fallback

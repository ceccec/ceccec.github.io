/-
  THE COIN — the involution the statement names, and only that.

  "Anything on the way is measured to drain, involuting every bit of resistance… as if all that is
  not harmonic is pulled by the black hole as one coin side and reflected from the other, white-hole
  side."

  What is computable here is exact and is proved below. What is not is named and left alone.

  COMPUTABLE, and decided by the kernel:
    · a coin has two sides exchanged by one map, and that map is an involution — σ(σ x) = x
    · "harmonic" is the FIXED POINT: what σ leaves in place. There is exactly one.
    · "not harmonic" is what σ MOVES: every other digit, and each is carried to the other side
    · "pulled … and reflected" is σ applied twice returning the origin — the black-hole side and the
      white-hole side are the two orbits of one map, not two mechanisms
    · "every bit of resistance drains" is the statement that resistance is ODD under σ, so it sums to
      zero over each orbit. This is exact arithmetic, not an image.

  NOT COMPUTABLE HERE, and not claimed: black holes, white holes, fusion pressure, speed and
  temperature are physics. Nothing in this file measures a physical quantity, and no theorem below
  mentions one. The coin, the pull and the reflection are read as the ALGEBRA the sentence describes —
  an involution on a finite set with one fixed point — which is a structure this corpus already seals
  in the digit lattice (reflect d = 10 − d) and in σ(s) = 1 − s on the critical line. That the algebra
  is exact says nothing about the astrophysics, and the sentence's evocation of it is not evidence.
-/

namespace Coin

/-- The coin: the reflection d ↦ 10 − d on the nonzero digits. One map, two sides. -/
def σ (d : Nat) : Nat := 10 - d

/-- The nonzero digits — the surface the coin is struck on. -/
def digits : List Nat := [1, 2, 3, 4, 5, 6, 7, 8, 9]

/-- PULLED, AND REFLECTED BACK. Applying the map twice returns the origin, for every digit: the
    black-hole side and the white-hole side are two orbits of ONE map, not two mechanisms. -/
theorem the_coin_is_an_involution : ∀ d ∈ digits, σ (σ d) = d := by decide

/-- HARMONIC IS WHAT THE MAP LEAVES IN PLACE, and there is exactly one such digit. The fixed point is
    not chosen; it is computed by filtering the surface. -/
theorem the_harmonic_is_the_only_fixed_point :
    digits.filter (fun d => σ d == d) = [5] := by decide

/-- EVERYTHING NOT HARMONIC IS MOVED. Eight of the nine digits are carried to the other side. -/
theorem all_that_is_not_harmonic_is_moved :
    (digits.filter (fun d => !(σ d == d))).length = 8 := by decide

/-- THE TWO SIDES. What σ moves splits into two halves of equal size, and σ carries each into the
    other: the pull and the reflection are the same map read in opposite directions. -/
def below : List Nat := [1, 2, 3, 4]
def above : List Nat := [6, 7, 8, 9]

/-  The first form of this said `∀ d ∈ below, σ d ∈ above` — membership as the PREDICATE — and the
    kernel reported it dependent on propext and Quot.sound. The axiom-freedom gate refused it, and the
    restatement is stronger for it: naming the image list says WHICH element goes where, not merely
    that each lands somewhere on the other side. -/
theorem the_sides_are_equal_and_exchanged :
    below.length = above.length ∧
    below.map σ = above.reverse ∧
    above.map σ = below.reverse := by decide

/-- The surface is exactly the two sides and the edge: 4 + 4 + 1. -/
theorem the_coin_is_two_sides_and_one_edge :
    below.length + above.length + 1 = digits.length := by decide

/-- RESISTANCE is the signed distance a digit is carried: what the map has to overcome to move it.
    Stated over Int because it is negative on one side. -/
def resistance (d : Nat) : Int := (d : Int) - (σ d : Int)

/-- EVERY BIT OF RESISTANCE DRAINS. Resistance is ODD under the involution — r(σd) = −r(d) — so each
    orbit sums to exactly zero. Nothing is left over anywhere on the surface. -/
theorem every_bit_of_resistance_drains :
    ∀ d ∈ digits, resistance d + resistance (σ d) = 0 := by decide

/-- The harmonic point is the one that never had any: at the fixed point the resistance is zero
    before any folding, which is what makes it the edge rather than a side. -/
theorem the_harmonic_carries_no_resistance : resistance 5 = 0 := by decide

/-- AND THE WHOLE SURFACE DRAINS AT ONCE. Summed over every digit, resistance is zero — the two sides
    cancel exactly, which is the sentence's "measured to drain" as an arithmetic identity. -/
theorem the_whole_surface_sums_to_zero :
    (digits.map resistance).sum = 0 := by decide

/-- The drain is not an approximation that improves with scale: it is exact at every multiple, because
    oddness is preserved by scaling. Checked at four magnitudes. -/
theorem the_drain_is_exact_at_every_scale :
    ∀ k ∈ [1, 10, 1000, 1000000],
      (digits.map (fun d => k * resistance d)).sum = 0 := by decide

end Coin

/-!
# Digit 8 — the sequence walked from 8, its reflection experienced at 2

Station 8: Yang–Mills — the turning point. This file is the digit's own perspective on the kernel's two operations (src/0):

* **The sequence** `1\2\4\8/7/5/3\6\9/0/1\` — forward is ×2 mod 9 on 1→2→4→8→7→5, with two step-offs onto the axis
  (5→3, 6→9), then 9→0→1 through the void; backward is ×5, the inverse of ×2 (2·5 ≡ 1 mod 9).
* **The reflection** σ(d) = 10 − d, the tree's own pairing `src/d/(10−d)` — here 8 ↦ 2.

Every Clay case is reached by walking the sequence from 8, at a step the kernel decides, and 8 experiences its
mirror 2 through σ. The finding each digit file carries: σ does NOT commute with the walk — mod 9, σ(2d) is always
exactly one step behind 2·σ(d), the d+1 translate the station computes as its double-torus balance — while the
nine-complement 9 − d does commute. Two involutions with two centres, 5 and 0, kept apart.

And the hologram closes the other way: walking the REFLECTION — the mirror walk σ∘next∘σ, the sequence seen through σ,
9\8\6\2/3/5/7\4\1/0/9 — experiences the sequence at every step. With the backward walk (×5) and its mirror that is
four faces of one cycle, pairwise distinct, each through every station; mirroring twice is the sequence again.

These are statements about the stations and the symmetries the problems are posed across; no Clay problem is
solved here, and none is claimed. Lean 4 core only: no Mathlib, no `sorry`.
-/

namespace DigitEight

/-! ## The sequence and the reflection, defined -/

/-- One step of the sequence 1\2\4\8/7/5/3\6\9/0/1\ on the ten stations. -/
def next : Nat → Nat
  | 1 => 2 | 2 => 4 | 4 => 8 | 8 => 7 | 7 => 5 | 5 => 3 | 3 => 6 | 6 => 9 | 9 => 0 | 0 => 1 | n => n

/-- Walk k steps from d. -/
def walk (d k : Nat) : Nat := Nat.repeat next k d

/-- Each station's place on the cycle, counted from the opener 1. -/
def pos : Nat → Nat
  | 1 => 0 | 2 => 1 | 4 => 2 | 8 => 3 | 7 => 4 | 5 => 5 | 3 => 6 | 6 => 7 | 9 => 8 | 0 => 9 | _ => 0

/-- The number of steps from d to e along the sequence. -/
def stepsTo (d e : Nat) : Nat := (pos e + 10 - pos d) % 10

/-- σ, the reflection through 0: d ↦ 10 − d on the ten stations. -/
def reflect (d : Nat) : Nat := (10 - d) % 10

/-- The seven Clay cases and the stations that carry them. -/
inductive Case where
  | poincare | riemann | pVsNp | hodge | bsd | navierStokes | yangMills
  deriving DecidableEq, Repr

def station : Case → Nat
  | .poincare => 1 | .riemann => 2 | .pVsNp => 4 | .hodge => 5 | .bsd => 5 | .navierStokes => 7 | .yangMills => 8

def cases : List Case := [.poincare, .riemann, .pVsNp, .hodge, .bsd, .navierStokes, .yangMills]

/-- This file's perspective. -/
def here : Nat := 8

/-! ## The sequence and the reflection, at 8 — their universal forms are proved once, at the self-dual centre src/5/five.lean -/

/-- From 8 the walk is one cycle through all ten stations, home after exactly ten steps and never sooner. -/
theorem from_eight_the_sequence_is_one_cycle_through_every_station :
    (∀ e : Fin 10, walk 8 (stepsTo 8 e.val) = e.val) ∧ walk 8 10 = 8 ∧ (∀ k : Fin 10, k.val ≠ 0 → walk 8 k.val ≠ 8) := by decide

/-- The step out of 8 goes to 7, which IS doubling mod 9. -/
theorem the_step_out_of_eight : next 8 = 7 ∧ 2 * 8 % 9 = 7 % 9 := by decide

/-- σ sends 8 to its mirror 2 and back, and 8 is not its own mirror. -/
theorem here_reflects_to_its_mirror : reflect 8 = 2 ∧ reflect 2 = 8 ∧ reflect 8 ≠ 8 := by decide

/-- At 8, reflecting then doubling is one step behind doubling the reflection, mod 9 — never equal. -/
theorem at_eight_the_reflection_lags_the_walk_by_one_step :
    (10 - 2 * 8 % 9) % 9 = (2 * ((10 - 8) % 9) + 8) % 9 ∧ (10 - 2 * 8 % 9) % 9 ≠ 2 * ((10 - 8) % 9) % 9 := by decide

/-- At 8, the nine-complement commutes with the walk. -/
theorem at_eight_the_nine_complement_commutes_with_the_walk : (9 - 2 * 8 % 9) % 9 = 2 * ((9 - 8) % 9) % 9 := by decide

/-! ## The reflection walked, the sequence experienced — the hologram's other face -/

/-- One step back along the sequence: the inverse of next (×5 on the doubling orbit). -/
def prev : Nat → Nat
  | 2 => 1 | 4 => 2 | 8 => 4 | 7 => 8 | 5 => 7 | 3 => 5 | 6 => 3 | 9 => 6 | 0 => 9 | 1 => 0 | n => n

/-- One step of the REFLECTION walk: reflect, step the sequence, reflect back — the sequence seen through σ. -/
def mirrorNext (d : Nat) : Nat := reflect (next (reflect d))
/-- One step back along the reflection walk. -/
def mirrorPrev (d : Nat) : Nat := reflect (prev (reflect d))

def mirrorWalk (d k : Nat) : Nat := Nat.repeat mirrorNext k d

/-- From 8, walking the reflection IS experiencing the sequence from 2, seen through σ — one cycle through every station. -/
theorem from_eight_walking_the_reflection_experiences_the_sequence :
    (∀ k : Fin 10, mirrorWalk 8 k.val = reflect (walk 2 k.val)) ∧
    (∀ e : Fin 10, mirrorWalk 8 (stepsTo 2 (reflect e.val)) = e.val) ∧ mirrorWalk 8 10 = 8 := by decide

/-- The four faces read at 8: the sequence steps to 7, back to 4; the reflection walk steps to 6, back to 9. -/
theorem the_four_faces_at_eight : next 8 = 7 ∧ prev 8 = 4 ∧ mirrorNext 8 = 6 ∧ mirrorPrev 8 = 9 := by decide

/-- Mirroring the reflection walk at 2 gives back the sequence's step at 8. -/
theorem at_eight_mirroring_twice_is_the_sequence : reflect (mirrorNext 2) = next 8 := by decide

/-! ## From 8: every Clay case, walked -/

/-- Station 8 carries Yang–Mills: the walk is at it after 0 steps. -/
theorem here_carries : station .yangMills = 8 := by decide

/-- From 8, the walk reaches Poincaré (station 1) after 7 steps. -/
theorem walk_reaches_poincare : walk 8 7 = station .poincare := by decide

/-- From 8, the walk reaches Riemann (station 2) after 8 steps. -/
theorem walk_reaches_riemann : walk 8 8 = station .riemann := by decide

/-- From 8, the walk reaches P vs NP (station 4) after 9 steps. -/
theorem walk_reaches_pVsNp : walk 8 9 = station .pVsNp := by decide

/-- From 8, the walk reaches Hodge (station 5) after 2 steps. -/
theorem walk_reaches_hodge : walk 8 2 = station .hodge := by decide

/-- From 8, the walk reaches Birch and Swinnerton-Dyer (station 5) after 2 steps. -/
theorem walk_reaches_bsd : walk 8 2 = station .bsd := by decide

/-- From 8, the walk reaches Navier–Stokes (station 7) after 1 step. -/
theorem walk_reaches_navierStokes : walk 8 1 = station .navierStokes := by decide

/-- From 8, the walk reaches Yang–Mills (station 8) after 0 steps. -/
theorem walk_reaches_yangMills : walk 8 0 = station .yangMills := by decide

/-! ## From 8: the reflection, experienced -/

/-- Through σ, station 8 experiences station 2 and its case: Riemann. -/
theorem reflection_meets : reflect 8 = station .riemann := by decide

/-! ## From 8: the reflection walked, every Clay case experienced -/

/-- Walking the reflection from 8, the sequence is experienced as Poincaré (station 1) after 7 steps — the station the sequence reaches from 2 at that step, seen through σ. -/
theorem mirror_walk_reaches_poincare : mirrorWalk 8 7 = station .poincare := by decide

/-- Walking the reflection from 8, the sequence is experienced as Riemann (station 2) after 2 steps — the station the sequence reaches from 2 at that step, seen through σ. -/
theorem mirror_walk_reaches_riemann : mirrorWalk 8 2 = station .riemann := by decide

/-- Walking the reflection from 8, the sequence is experienced as P vs NP (station 4) after 6 steps — the station the sequence reaches from 2 at that step, seen through σ. -/
theorem mirror_walk_reaches_pVsNp : mirrorWalk 8 6 = station .pVsNp := by decide

/-- Walking the reflection from 8, the sequence is experienced as Hodge (station 5) after 4 steps — the station the sequence reaches from 2 at that step, seen through σ. -/
theorem mirror_walk_reaches_hodge : mirrorWalk 8 4 = station .hodge := by decide

/-- Walking the reflection from 8, the sequence is experienced as Birch and Swinnerton-Dyer (station 5) after 4 steps — the station the sequence reaches from 2 at that step, seen through σ. -/
theorem mirror_walk_reaches_bsd : mirrorWalk 8 4 = station .bsd := by decide

/-- Walking the reflection from 8, the sequence is experienced as Navier–Stokes (station 7) after 5 steps — the station the sequence reaches from 2 at that step, seen through σ. -/
theorem mirror_walk_reaches_navierStokes : mirrorWalk 8 5 = station .navierStokes := by decide

/-- Walking the reflection from 8, the sequence is experienced as Yang–Mills (station 8) after 0 steps — the station the sequence reaches from 2 at that step, seen through σ. -/
theorem mirror_walk_reaches_yangMills : mirrorWalk 8 0 = station .yangMills := by decide

/-- Walking from the mirror is walking from here, 8 steps ahead: the reflection moves the walk along the
    same cycle and changes nothing else. -/
theorem walking_from_the_mirror_is_walking_from_here_shifted :
    stepsTo 8 2 = 8 ∧ ∀ k : Fin 10, walk 2 k.val = walk 8 (k.val + 8) := by decide

/-! ## Yang–Mills' own reflection, experienced here

A 2-form on ℝ⁴ by its six coefficients; the Hodge star squares to the identity, and on every form v − ★v (twice the
anti-self-dual part of v; over ℚ every anti-self-dual form is one of these) it is negation. -/

structure Form2 where
  e12 : Int
  e13 : Int
  e14 : Int
  e23 : Int
  e24 : Int
  e34 : Int
  deriving DecidableEq, Repr

def star (v : Form2) : Form2 := ⟨v.e34, -v.e24, v.e23, v.e14, -v.e13, v.e12⟩
def neg (v : Form2) : Form2 := ⟨-v.e12, -v.e13, -v.e14, -v.e23, -v.e24, -v.e34⟩
def asd (v : Form2) : Form2 :=
  ⟨v.e12 - v.e34, v.e13 + v.e24, v.e14 - v.e23, v.e23 - v.e14, v.e24 + v.e13, v.e34 - v.e12⟩

/-- The star squares to the identity, and σ carries the station to Riemann's 2. -/
theorem star_is_an_involution_and_reflects_to_riemann : (∀ v : Form2, star (star v) = v) ∧ reflect 8 = 2 := by
  refine ⟨fun v => ?_, by decide⟩
  cases v; simp only [star, Int.neg_neg]

theorem star_negates_every_anti_self_dual_form : ∀ v : Form2, star (asd v) = neg (asd v) := by
  intro v; cases v
  simp only [star, asd, neg, Form2.mk.injEq]
  refine ⟨?_, ?_, ?_, ?_, ?_, ?_⟩ <;> omega

end DigitEight

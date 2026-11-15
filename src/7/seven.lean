/-!
# Digit 7 — the sequence walked from 7, its reflection experienced at 3

Station 7: Navier–Stokes — the descent. This file is the digit's own perspective on the kernel's two operations (src/0):

* **The sequence** `1\2\4\8/7/5/3\6\9/0/1\` — forward is ×2 mod 9 on 1→2→4→8→7→5, with two step-offs onto the axis
  (5→3, 6→9), then 9→0→1 through the void; backward is ×5, the inverse of ×2 (2·5 ≡ 1 mod 9).
* **The reflection** σ(d) = 10 − d, the tree's own pairing `src/d/(10−d)` — here 7 ↦ 3.

Every Clay case is reached by walking the sequence from 7, at a step the kernel decides, and 7 experiences its
mirror 3 through σ. The finding each digit file carries: σ does NOT commute with the walk — mod 9, σ(2d) is always
exactly one step behind 2·σ(d), the d+1 translate the station computes as its double-torus balance — while the
nine-complement 9 − d does commute. Two involutions with two centres, 5 and 0, kept apart.

And the hologram closes the other way: walking the REFLECTION — the mirror walk σ∘next∘σ, the sequence seen through σ,
9\8\6\2/3/5/7\4\1/0/9 — experiences the sequence at every step. With the backward walk (×5) and its mirror that is
four faces of one cycle, pairwise distinct, each through every station; mirroring twice is the sequence again.

These are statements about the stations and the symmetries the problems are posed across; no Clay problem is
solved here, and none is claimed. Lean 4 core only: no Mathlib, no `sorry`.
-/

namespace DigitSeven

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
def here : Nat := 7

/-! ## The sequence and the reflection, at 7 — their universal forms are proved once, at the self-dual centre src/5/five.lean -/

/-- From 7 the walk is one cycle through all ten stations, home after exactly ten steps and never sooner. -/
theorem from_seven_the_sequence_is_one_cycle_through_every_station :
    (∀ e : Fin 10, walk 7 (stepsTo 7 e.val) = e.val) ∧ walk 7 10 = 7 ∧ (∀ k : Fin 10, k.val ≠ 0 → walk 7 k.val ≠ 7) := by decide

/-- The step out of 7 goes to 5, which IS doubling mod 9. -/
theorem the_step_out_of_seven : next 7 = 5 ∧ 2 * 7 % 9 = 5 % 9 := by decide

/-- σ sends 7 to its mirror 3 and back, and 7 is not its own mirror. -/
theorem here_reflects_to_its_mirror : reflect 7 = 3 ∧ reflect 3 = 7 ∧ reflect 7 ≠ 7 := by decide

/-- At 7, reflecting then doubling is one step behind doubling the reflection, mod 9 — never equal. -/
theorem at_seven_the_reflection_lags_the_walk_by_one_step :
    (10 - 2 * 7 % 9) % 9 = (2 * ((10 - 7) % 9) + 8) % 9 ∧ (10 - 2 * 7 % 9) % 9 ≠ 2 * ((10 - 7) % 9) % 9 := by decide

/-- At 7, the nine-complement commutes with the walk. -/
theorem at_seven_the_nine_complement_commutes_with_the_walk : (9 - 2 * 7 % 9) % 9 = 2 * ((9 - 7) % 9) % 9 := by decide

/-! ## The reflection walked, the sequence experienced — the hologram's other face -/

/-- One step back along the sequence: the inverse of next (×5 on the doubling orbit). -/
def prev : Nat → Nat
  | 2 => 1 | 4 => 2 | 8 => 4 | 7 => 8 | 5 => 7 | 3 => 5 | 6 => 3 | 9 => 6 | 0 => 9 | 1 => 0 | n => n

/-- One step of the REFLECTION walk: reflect, step the sequence, reflect back — the sequence seen through σ. -/
def mirrorNext (d : Nat) : Nat := reflect (next (reflect d))
/-- One step back along the reflection walk. -/
def mirrorPrev (d : Nat) : Nat := reflect (prev (reflect d))

def mirrorWalk (d k : Nat) : Nat := Nat.repeat mirrorNext k d

/-- From 7, walking the reflection IS experiencing the sequence from 3, seen through σ — one cycle through every station. -/
theorem from_seven_walking_the_reflection_experiences_the_sequence :
    (∀ k : Fin 10, mirrorWalk 7 k.val = reflect (walk 3 k.val)) ∧
    (∀ e : Fin 10, mirrorWalk 7 (stepsTo 3 (reflect e.val)) = e.val) ∧ mirrorWalk 7 10 = 7 := by decide

/-- The four faces read at 7: the sequence steps to 5, back to 8; the reflection walk steps to 4, back to 5. -/
theorem the_four_faces_at_seven : next 7 = 5 ∧ prev 7 = 8 ∧ mirrorNext 7 = 4 ∧ mirrorPrev 7 = 5 := by decide

/-- Mirroring the reflection walk at 3 gives back the sequence's step at 7. -/
theorem at_seven_mirroring_twice_is_the_sequence : reflect (mirrorNext 3) = next 7 := by decide

/-! ## From 7: every Clay case, walked -/

/-- Station 7 carries Navier–Stokes: the walk is at it after 0 steps. -/
theorem here_carries : station .navierStokes = 7 := by decide

/-- From 7, the walk reaches Poincaré (station 1) after 6 steps. -/
theorem walk_reaches_poincare : walk 7 6 = station .poincare := by decide

/-- From 7, the walk reaches Riemann (station 2) after 7 steps. -/
theorem walk_reaches_riemann : walk 7 7 = station .riemann := by decide

/-- From 7, the walk reaches P vs NP (station 4) after 8 steps. -/
theorem walk_reaches_pVsNp : walk 7 8 = station .pVsNp := by decide

/-- From 7, the walk reaches Hodge (station 5) after 1 step. -/
theorem walk_reaches_hodge : walk 7 1 = station .hodge := by decide

/-- From 7, the walk reaches Birch and Swinnerton-Dyer (station 5) after 1 step. -/
theorem walk_reaches_bsd : walk 7 1 = station .bsd := by decide

/-- From 7, the walk reaches Navier–Stokes (station 7) after 0 steps. -/
theorem walk_reaches_navierStokes : walk 7 0 = station .navierStokes := by decide

/-- From 7, the walk reaches Yang–Mills (station 8) after 9 steps. -/
theorem walk_reaches_yangMills : walk 7 9 = station .yangMills := by decide

/-! ## From 7: the reflection, experienced -/

/-- Through σ, station 7 experiences station 3, which carries no Clay case. -/
theorem reflection_meets_no_case : cases.all (fun c => station c != 3) = true ∧ reflect 7 = 3 := by decide

/-! ## From 7: the reflection walked, every Clay case experienced -/

/-- Walking the reflection from 7, the sequence is experienced as Poincaré (station 1) after 2 steps — the station the sequence reaches from 3 at that step, seen through σ. -/
theorem mirror_walk_reaches_poincare : mirrorWalk 7 2 = station .poincare := by decide

/-- Walking the reflection from 7, the sequence is experienced as Riemann (station 2) after 7 steps — the station the sequence reaches from 3 at that step, seen through σ. -/
theorem mirror_walk_reaches_riemann : mirrorWalk 7 7 = station .riemann := by decide

/-- Walking the reflection from 7, the sequence is experienced as P vs NP (station 4) after 1 step — the station the sequence reaches from 3 at that step, seen through σ. -/
theorem mirror_walk_reaches_pVsNp : mirrorWalk 7 1 = station .pVsNp := by decide

/-- Walking the reflection from 7, the sequence is experienced as Hodge (station 5) after 9 steps — the station the sequence reaches from 3 at that step, seen through σ. -/
theorem mirror_walk_reaches_hodge : mirrorWalk 7 9 = station .hodge := by decide

/-- Walking the reflection from 7, the sequence is experienced as Birch and Swinnerton-Dyer (station 5) after 9 steps — the station the sequence reaches from 3 at that step, seen through σ. -/
theorem mirror_walk_reaches_bsd : mirrorWalk 7 9 = station .bsd := by decide

/-- Walking the reflection from 7, the sequence is experienced as Navier–Stokes (station 7) after 0 steps — the station the sequence reaches from 3 at that step, seen through σ. -/
theorem mirror_walk_reaches_navierStokes : mirrorWalk 7 0 = station .navierStokes := by decide

/-- Walking the reflection from 7, the sequence is experienced as Yang–Mills (station 8) after 5 steps — the station the sequence reaches from 3 at that step, seen through σ. -/
theorem mirror_walk_reaches_yangMills : mirrorWalk 7 5 = station .yangMills := by decide

/-- Walking from the mirror is walking from here, 2 steps ahead: the reflection moves the walk along the
    same cycle and changes nothing else. -/
theorem walking_from_the_mirror_is_walking_from_here_shifted :
    stepsTo 7 3 = 2 ∧ ∀ k : Fin 10, walk 3 k.val = walk 7 (k.val + 2) := by decide

/-! ## Navier–Stokes' own reflection, experienced here

Time reversal flips the sign of the viscous term only: v ↦ −v, fixing exactly the inviscid v = 0. -/

def viscous (v : Int) : Int := -v

theorem time_reversal_is_an_involution : ∀ v : Int, viscous (viscous v) = v := fun v => Int.neg_neg v

/-- Time reversal fixes exactly the inviscid, and σ carries the station to the axis gate 3. -/
theorem time_reversal_fixes_exactly_the_inviscid_and_reflects_to_three :
    (∀ v : Int, viscous v = v ↔ v = 0) ∧ reflect 7 = 3 := by
  refine ⟨fun v => ?_, by decide⟩
  unfold viscous
  constructor
  · intro h; omega
  · intro h; subst h; rfl

end DigitSeven

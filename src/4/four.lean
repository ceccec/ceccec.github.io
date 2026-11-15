/-!
# Digit 4 — the sequence walked from 4, its reflection experienced at 6

Station 4: P vs NP — computation. This file is the digit's own perspective on the kernel's two operations (src/0):

* **The sequence** `1\2\4\8/7/5/3\6\9/0/1\` — forward is ×2 mod 9 on 1→2→4→8→7→5, with two step-offs onto the axis
  (5→3, 6→9), then 9→0→1 through the void; backward is ×5, the inverse of ×2 (2·5 ≡ 1 mod 9).
* **The reflection** σ(d) = 10 − d, the tree's own pairing `src/d/(10−d)` — here 4 ↦ 6.

Every Clay case is reached by walking the sequence from 4, at a step the kernel decides, and 4 experiences its
mirror 6 through σ. The finding each digit file carries: σ does NOT commute with the walk — mod 9, σ(2d) is always
exactly one step behind 2·σ(d), the d+1 translate the station computes as its double-torus balance — while the
nine-complement 9 − d does commute. Two involutions with two centres, 5 and 0, kept apart.

And the hologram closes the other way: walking the REFLECTION — the mirror walk σ∘next∘σ, the sequence seen through σ,
9\8\6\2/3/5/7\4\1/0/9 — experiences the sequence at every step. With the backward walk (×5) and its mirror that is
four faces of one cycle, pairwise distinct, each through every station; mirroring twice is the sequence again.

These are statements about the stations and the symmetries the problems are posed across; no Clay problem is
solved here, and none is claimed. Lean 4 core only: no Mathlib, no `sorry`.
-/

namespace DigitFour

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
def here : Nat := 4

/-! ## The sequence and the reflection, at 4 — their universal forms are proved once, at the self-dual centre src/5/five.lean -/

/-- From 4 the walk is one cycle through all ten stations, home after exactly ten steps and never sooner. -/
theorem from_four_the_sequence_is_one_cycle_through_every_station :
    (∀ e : Fin 10, walk 4 (stepsTo 4 e.val) = e.val) ∧ walk 4 10 = 4 ∧ (∀ k : Fin 10, k.val ≠ 0 → walk 4 k.val ≠ 4) := by decide

/-- The step out of 4 goes to 8, which IS doubling mod 9. -/
theorem the_step_out_of_four : next 4 = 8 ∧ 2 * 4 % 9 = 8 % 9 := by decide

/-- σ sends 4 to its mirror 6 and back, and 4 is not its own mirror. -/
theorem here_reflects_to_its_mirror : reflect 4 = 6 ∧ reflect 6 = 4 ∧ reflect 4 ≠ 4 := by decide

/-- At 4, reflecting then doubling is one step behind doubling the reflection, mod 9 — never equal. -/
theorem at_four_the_reflection_lags_the_walk_by_one_step :
    (10 - 2 * 4 % 9) % 9 = (2 * ((10 - 4) % 9) + 8) % 9 ∧ (10 - 2 * 4 % 9) % 9 ≠ 2 * ((10 - 4) % 9) % 9 := by decide

/-- At 4, the nine-complement commutes with the walk. -/
theorem at_four_the_nine_complement_commutes_with_the_walk : (9 - 2 * 4 % 9) % 9 = 2 * ((9 - 4) % 9) % 9 := by decide

/-! ## The reflection walked, the sequence experienced — the hologram's other face -/

/-- One step back along the sequence: the inverse of next (×5 on the doubling orbit). -/
def prev : Nat → Nat
  | 2 => 1 | 4 => 2 | 8 => 4 | 7 => 8 | 5 => 7 | 3 => 5 | 6 => 3 | 9 => 6 | 0 => 9 | 1 => 0 | n => n

/-- One step of the REFLECTION walk: reflect, step the sequence, reflect back — the sequence seen through σ. -/
def mirrorNext (d : Nat) : Nat := reflect (next (reflect d))
/-- One step back along the reflection walk. -/
def mirrorPrev (d : Nat) : Nat := reflect (prev (reflect d))

def mirrorWalk (d k : Nat) : Nat := Nat.repeat mirrorNext k d

/-- From 4, walking the reflection IS experiencing the sequence from 6, seen through σ — one cycle through every station. -/
theorem from_four_walking_the_reflection_experiences_the_sequence :
    (∀ k : Fin 10, mirrorWalk 4 k.val = reflect (walk 6 k.val)) ∧
    (∀ e : Fin 10, mirrorWalk 4 (stepsTo 6 (reflect e.val)) = e.val) ∧ mirrorWalk 4 10 = 4 := by decide

/-- The four faces read at 4: the sequence steps to 8, back to 2; the reflection walk steps to 1, back to 7. -/
theorem the_four_faces_at_four : next 4 = 8 ∧ prev 4 = 2 ∧ mirrorNext 4 = 1 ∧ mirrorPrev 4 = 7 := by decide

/-- Mirroring the reflection walk at 6 gives back the sequence's step at 4. -/
theorem at_four_mirroring_twice_is_the_sequence : reflect (mirrorNext 6) = next 4 := by decide

/-! ## From 4: every Clay case, walked -/

/-- Station 4 carries P vs NP: the walk is at it after 0 steps. -/
theorem here_carries : station .pVsNp = 4 := by decide

/-- From 4, the walk reaches Poincaré (station 1) after 8 steps. -/
theorem walk_reaches_poincare : walk 4 8 = station .poincare := by decide

/-- From 4, the walk reaches Riemann (station 2) after 9 steps. -/
theorem walk_reaches_riemann : walk 4 9 = station .riemann := by decide

/-- From 4, the walk reaches P vs NP (station 4) after 0 steps. -/
theorem walk_reaches_pVsNp : walk 4 0 = station .pVsNp := by decide

/-- From 4, the walk reaches Hodge (station 5) after 3 steps. -/
theorem walk_reaches_hodge : walk 4 3 = station .hodge := by decide

/-- From 4, the walk reaches Birch and Swinnerton-Dyer (station 5) after 3 steps. -/
theorem walk_reaches_bsd : walk 4 3 = station .bsd := by decide

/-- From 4, the walk reaches Navier–Stokes (station 7) after 2 steps. -/
theorem walk_reaches_navierStokes : walk 4 2 = station .navierStokes := by decide

/-- From 4, the walk reaches Yang–Mills (station 8) after 1 step. -/
theorem walk_reaches_yangMills : walk 4 1 = station .yangMills := by decide

/-! ## From 4: the reflection, experienced -/

/-- Through σ, station 4 experiences station 6, which carries no Clay case. -/
theorem reflection_meets_no_case : cases.all (fun c => station c != 6) = true ∧ reflect 4 = 6 := by decide

/-! ## From 4: the reflection walked, every Clay case experienced -/

/-- Walking the reflection from 4, the sequence is experienced as Poincaré (station 1) after 1 step — the station the sequence reaches from 6 at that step, seen through σ. -/
theorem mirror_walk_reaches_poincare : mirrorWalk 4 1 = station .poincare := by decide

/-- Walking the reflection from 4, the sequence is experienced as Riemann (station 2) after 6 steps — the station the sequence reaches from 6 at that step, seen through σ. -/
theorem mirror_walk_reaches_riemann : mirrorWalk 4 6 = station .riemann := by decide

/-- Walking the reflection from 4, the sequence is experienced as P vs NP (station 4) after 0 steps — the station the sequence reaches from 6 at that step, seen through σ. -/
theorem mirror_walk_reaches_pVsNp : mirrorWalk 4 0 = station .pVsNp := by decide

/-- Walking the reflection from 4, the sequence is experienced as Hodge (station 5) after 8 steps — the station the sequence reaches from 6 at that step, seen through σ. -/
theorem mirror_walk_reaches_hodge : mirrorWalk 4 8 = station .hodge := by decide

/-- Walking the reflection from 4, the sequence is experienced as Birch and Swinnerton-Dyer (station 5) after 8 steps — the station the sequence reaches from 6 at that step, seen through σ. -/
theorem mirror_walk_reaches_bsd : mirrorWalk 4 8 = station .bsd := by decide

/-- Walking the reflection from 4, the sequence is experienced as Navier–Stokes (station 7) after 9 steps — the station the sequence reaches from 6 at that step, seen through σ. -/
theorem mirror_walk_reaches_navierStokes : mirrorWalk 4 9 = station .navierStokes := by decide

/-- Walking the reflection from 4, the sequence is experienced as Yang–Mills (station 8) after 4 steps — the station the sequence reaches from 6 at that step, seen through σ. -/
theorem mirror_walk_reaches_yangMills : mirrorWalk 4 4 = station .yangMills := by decide

/-- Walking from the mirror is walking from here, 5 steps ahead: the reflection moves the walk along the
    same cycle and changes nothing else. -/
theorem walking_from_the_mirror_is_walking_from_here_shifted :
    stepsTo 4 6 = 5 ∧ ∀ k : Fin 10, walk 6 k.val = walk 4 (k.val + 5) := by decide

/-! ## P vs NP's own swap, experienced here

Complementation on four classes: a swap with two fixed points (P, PSPACE) and one exchanged pair (NP, coNP). -/

inductive Class where
  | P | NP | coNP | PSPACE
  deriving DecidableEq, Repr

def complement : Class → Class
  | .P => .P
  | .NP => .coNP
  | .coNP => .NP
  | .PSPACE => .PSPACE

theorem complement_is_an_involution : ∀ c : Class, complement (complement c) = c := by
  intro c; cases c <;> rfl

/-- The swap fixes P and PSPACE, and σ carries the station to the axis gate 6, which holds no case. -/
theorem complement_fixes_p_and_pspace_and_reflects_to_an_axis_gate :
    [Class.P, .NP, .coNP, .PSPACE].filter (fun c => complement c == c) = [.P, .PSPACE] ∧ reflect 4 = 6 := by decide

end DigitFour

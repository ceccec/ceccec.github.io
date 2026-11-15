/-!
# Digit 6 — the sequence walked from 6, its reflection experienced at 4

Station 6: an axis gate — no Clay case. This file is the digit's own perspective on the kernel's two operations (src/0):

* **The sequence** `1\2\4\8/7/5/3\6\9/0/1\` — forward is ×2 mod 9 on 1→2→4→8→7→5, with two step-offs onto the axis
  (5→3, 6→9), then 9→0→1 through the void; backward is ×5, the inverse of ×2 (2·5 ≡ 1 mod 9).
* **The reflection** σ(d) = 10 − d, the tree's own pairing `src/d/(10−d)` — here 6 ↦ 4.

Every Clay case is reached by walking the sequence from 6, at a step the kernel decides, and 6 experiences its
mirror 4 through σ. The finding each digit file carries: σ does NOT commute with the walk — mod 9, σ(2d) is always
exactly one step behind 2·σ(d), the d+1 translate the station computes as its double-torus balance — while the
nine-complement 9 − d does commute. Two involutions with two centres, 5 and 0, kept apart.

And the hologram closes the other way: walking the REFLECTION — the mirror walk σ∘next∘σ, the sequence seen through σ,
9\8\6\2/3/5/7\4\1/0/9 — experiences the sequence at every step. With the backward walk (×5) and its mirror that is
four faces of one cycle, pairwise distinct, each through every station; mirroring twice is the sequence again.

These are statements about the stations and the symmetries the problems are posed across; no Clay problem is
solved here, and none is claimed. Lean 4 core only: no Mathlib, no `sorry`.
-/

namespace DigitSix

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
def here : Nat := 6

/-! ## The sequence and the reflection, at 6 — their universal forms are proved once, at the self-dual centre src/5/five.lean -/

/-- From 6 the walk is one cycle through all ten stations, home after exactly ten steps and never sooner. -/
theorem from_six_the_sequence_is_one_cycle_through_every_station :
    (∀ e : Fin 10, walk 6 (stepsTo 6 e.val) = e.val) ∧ walk 6 10 = 6 ∧ (∀ k : Fin 10, k.val ≠ 0 → walk 6 k.val ≠ 6) := by decide

/-- The step out of 6 goes to 9, which is NOT doubling mod 9 — a step-off. -/
theorem the_step_out_of_six : next 6 = 9 ∧ 2 * 6 % 9 ≠ 9 % 9 := by decide

/-- σ sends 6 to its mirror 4 and back, and 6 is not its own mirror. -/
theorem here_reflects_to_its_mirror : reflect 6 = 4 ∧ reflect 4 = 6 ∧ reflect 6 ≠ 6 := by decide

/-- At 6, reflecting then doubling is one step behind doubling the reflection, mod 9 — never equal. -/
theorem at_six_the_reflection_lags_the_walk_by_one_step :
    (10 - 2 * 6 % 9) % 9 = (2 * ((10 - 6) % 9) + 8) % 9 ∧ (10 - 2 * 6 % 9) % 9 ≠ 2 * ((10 - 6) % 9) % 9 := by decide

/-- At 6, the nine-complement commutes with the walk. -/
theorem at_six_the_nine_complement_commutes_with_the_walk : (9 - 2 * 6 % 9) % 9 = 2 * ((9 - 6) % 9) % 9 := by decide

/-! ## The reflection walked, the sequence experienced — the hologram's other face -/

/-- One step back along the sequence: the inverse of next (×5 on the doubling orbit). -/
def prev : Nat → Nat
  | 2 => 1 | 4 => 2 | 8 => 4 | 7 => 8 | 5 => 7 | 3 => 5 | 6 => 3 | 9 => 6 | 0 => 9 | 1 => 0 | n => n

/-- One step of the REFLECTION walk: reflect, step the sequence, reflect back — the sequence seen through σ. -/
def mirrorNext (d : Nat) : Nat := reflect (next (reflect d))
/-- One step back along the reflection walk. -/
def mirrorPrev (d : Nat) : Nat := reflect (prev (reflect d))

def mirrorWalk (d k : Nat) : Nat := Nat.repeat mirrorNext k d

/-- From 6, walking the reflection IS experiencing the sequence from 4, seen through σ — one cycle through every station. -/
theorem from_six_walking_the_reflection_experiences_the_sequence :
    (∀ k : Fin 10, mirrorWalk 6 k.val = reflect (walk 4 k.val)) ∧
    (∀ e : Fin 10, mirrorWalk 6 (stepsTo 4 (reflect e.val)) = e.val) ∧ mirrorWalk 6 10 = 6 := by decide

/-- The four faces read at 6: the sequence steps to 9, back to 3; the reflection walk steps to 2, back to 8. -/
theorem the_four_faces_at_six : next 6 = 9 ∧ prev 6 = 3 ∧ mirrorNext 6 = 2 ∧ mirrorPrev 6 = 8 := by decide

/-- Mirroring the reflection walk at 4 gives back the sequence's step at 6. -/
theorem at_six_mirroring_twice_is_the_sequence : reflect (mirrorNext 4) = next 6 := by decide

/-! ## From 6: every Clay case, walked -/

/-- Station 6 carries no Clay case. -/
theorem here_carries_no_case : cases.all (fun c => station c != 6) = true := by decide

/-- From 6, the walk reaches Poincaré (station 1) after 3 steps. -/
theorem walk_reaches_poincare : walk 6 3 = station .poincare := by decide

/-- From 6, the walk reaches Riemann (station 2) after 4 steps. -/
theorem walk_reaches_riemann : walk 6 4 = station .riemann := by decide

/-- From 6, the walk reaches P vs NP (station 4) after 5 steps. -/
theorem walk_reaches_pVsNp : walk 6 5 = station .pVsNp := by decide

/-- From 6, the walk reaches Hodge (station 5) after 8 steps. -/
theorem walk_reaches_hodge : walk 6 8 = station .hodge := by decide

/-- From 6, the walk reaches Birch and Swinnerton-Dyer (station 5) after 8 steps. -/
theorem walk_reaches_bsd : walk 6 8 = station .bsd := by decide

/-- From 6, the walk reaches Navier–Stokes (station 7) after 7 steps. -/
theorem walk_reaches_navierStokes : walk 6 7 = station .navierStokes := by decide

/-- From 6, the walk reaches Yang–Mills (station 8) after 6 steps. -/
theorem walk_reaches_yangMills : walk 6 6 = station .yangMills := by decide

/-! ## From 6: the reflection, experienced -/

/-- Through σ, station 6 experiences station 4 and its case: P vs NP. -/
theorem reflection_meets : reflect 6 = station .pVsNp := by decide

/-! ## From 6: the reflection walked, every Clay case experienced -/

/-- Walking the reflection from 6, the sequence is experienced as Poincaré (station 1) after 6 steps — the station the sequence reaches from 4 at that step, seen through σ. -/
theorem mirror_walk_reaches_poincare : mirrorWalk 6 6 = station .poincare := by decide

/-- Walking the reflection from 6, the sequence is experienced as Riemann (station 2) after 1 step — the station the sequence reaches from 4 at that step, seen through σ. -/
theorem mirror_walk_reaches_riemann : mirrorWalk 6 1 = station .riemann := by decide

/-- Walking the reflection from 6, the sequence is experienced as P vs NP (station 4) after 5 steps — the station the sequence reaches from 4 at that step, seen through σ. -/
theorem mirror_walk_reaches_pVsNp : mirrorWalk 6 5 = station .pVsNp := by decide

/-- Walking the reflection from 6, the sequence is experienced as Hodge (station 5) after 3 steps — the station the sequence reaches from 4 at that step, seen through σ. -/
theorem mirror_walk_reaches_hodge : mirrorWalk 6 3 = station .hodge := by decide

/-- Walking the reflection from 6, the sequence is experienced as Birch and Swinnerton-Dyer (station 5) after 3 steps — the station the sequence reaches from 4 at that step, seen through σ. -/
theorem mirror_walk_reaches_bsd : mirrorWalk 6 3 = station .bsd := by decide

/-- Walking the reflection from 6, the sequence is experienced as Navier–Stokes (station 7) after 4 steps — the station the sequence reaches from 4 at that step, seen through σ. -/
theorem mirror_walk_reaches_navierStokes : mirrorWalk 6 4 = station .navierStokes := by decide

/-- Walking the reflection from 6, the sequence is experienced as Yang–Mills (station 8) after 9 steps — the station the sequence reaches from 4 at that step, seen through σ. -/
theorem mirror_walk_reaches_yangMills : mirrorWalk 6 9 = station .yangMills := by decide

/-- Walking from the mirror is walking from here, 5 steps ahead: the reflection moves the walk along the
    same cycle and changes nothing else. -/
theorem walking_from_the_mirror_is_walking_from_here_shifted :
    stepsTo 6 4 = 5 ∧ ∀ k : Fin 10, walk 4 k.val = walk 6 (k.val + 5) := by decide

end DigitSix

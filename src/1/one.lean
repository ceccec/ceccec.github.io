/-!
# Digit 1 — the sequence walked from 1, its reflection experienced at 9

Station 1: Poincaré — the sequence opener. This file is the digit's own perspective on the kernel's two operations (src/0):

* **The sequence** `1\2\4\8/7/5/3\6\9/0/1\` — forward is ×2 mod 9 on 1→2→4→8→7→5, with two step-offs onto the axis
  (5→3, 6→9), then 9→0→1 through the void; backward is ×5, the inverse of ×2 (2·5 ≡ 1 mod 9).
* **The reflection** σ(d) = 10 − d, the tree's own pairing `src/d/(10−d)` — here 1 ↦ 9.

Every Clay case is reached by walking the sequence from 1, at a step the kernel decides, and 1 experiences its
mirror 9 through σ. The finding each digit file carries: σ does NOT commute with the walk — mod 9, σ(2d) is always
exactly one step behind 2·σ(d), the d+1 translate the station computes as its double-torus balance — while the
nine-complement 9 − d does commute. Two involutions with two centres, 5 and 0, kept apart.

And the hologram closes the other way: walking the REFLECTION — the mirror walk σ∘next∘σ, the sequence seen through σ,
9\8\6\2/3/5/7\4\1/0/9 — experiences the sequence at every step. With the backward walk (×5) and its mirror that is
four faces of one cycle, pairwise distinct, each through every station; mirroring twice is the sequence again.

These are statements about the stations and the symmetries the problems are posed across; no Clay problem is
solved here, and none is claimed. Lean 4 core only: no Mathlib, no `sorry`.
-/

namespace DigitOne

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
def here : Nat := 1

/-! ## The sequence and the reflection, at 1 — their universal forms are proved once, at the self-dual centre src/5/five.lean -/

/-- From 1 the walk is one cycle through all ten stations, home after exactly ten steps and never sooner. -/
theorem from_one_the_sequence_is_one_cycle_through_every_station :
    (∀ e : Fin 10, walk 1 (stepsTo 1 e.val) = e.val) ∧ walk 1 10 = 1 ∧ (∀ k : Fin 10, k.val ≠ 0 → walk 1 k.val ≠ 1) := by decide

/-- The step out of 1 goes to 2, which IS doubling mod 9. -/
theorem the_step_out_of_one : next 1 = 2 ∧ 2 * 1 % 9 = 2 % 9 := by decide

/-- σ sends 1 to its mirror 9 and back, and 1 is not its own mirror. -/
theorem here_reflects_to_its_mirror : reflect 1 = 9 ∧ reflect 9 = 1 ∧ reflect 1 ≠ 1 := by decide

/-- At 1, reflecting then doubling is one step behind doubling the reflection, mod 9 — never equal. -/
theorem at_one_the_reflection_lags_the_walk_by_one_step :
    (10 - 2 * 1 % 9) % 9 = (2 * ((10 - 1) % 9) + 8) % 9 ∧ (10 - 2 * 1 % 9) % 9 ≠ 2 * ((10 - 1) % 9) % 9 := by decide

/-- At 1, the nine-complement commutes with the walk. -/
theorem at_one_the_nine_complement_commutes_with_the_walk : (9 - 2 * 1 % 9) % 9 = 2 * ((9 - 1) % 9) % 9 := by decide

/-! ## The reflection walked, the sequence experienced — the hologram's other face -/

/-- One step back along the sequence: the inverse of next (×5 on the doubling orbit). -/
def prev : Nat → Nat
  | 2 => 1 | 4 => 2 | 8 => 4 | 7 => 8 | 5 => 7 | 3 => 5 | 6 => 3 | 9 => 6 | 0 => 9 | 1 => 0 | n => n

/-- One step of the REFLECTION walk: reflect, step the sequence, reflect back — the sequence seen through σ. -/
def mirrorNext (d : Nat) : Nat := reflect (next (reflect d))
/-- One step back along the reflection walk. -/
def mirrorPrev (d : Nat) : Nat := reflect (prev (reflect d))

def mirrorWalk (d k : Nat) : Nat := Nat.repeat mirrorNext k d

/-- From 1, walking the reflection IS experiencing the sequence from 9, seen through σ — one cycle through every station. -/
theorem from_one_walking_the_reflection_experiences_the_sequence :
    (∀ k : Fin 10, mirrorWalk 1 k.val = reflect (walk 9 k.val)) ∧
    (∀ e : Fin 10, mirrorWalk 1 (stepsTo 9 (reflect e.val)) = e.val) ∧ mirrorWalk 1 10 = 1 := by decide

/-- The four faces read at 1: the sequence steps to 2, back to 0; the reflection walk steps to 0, back to 4. -/
theorem the_four_faces_at_one : next 1 = 2 ∧ prev 1 = 0 ∧ mirrorNext 1 = 0 ∧ mirrorPrev 1 = 4 := by decide

/-- Mirroring the reflection walk at 9 gives back the sequence's step at 1. -/
theorem at_one_mirroring_twice_is_the_sequence : reflect (mirrorNext 9) = next 1 := by decide

/-! ## From 1: every Clay case, walked -/

/-- Station 1 carries Poincaré: the walk is at it after 0 steps. -/
theorem here_carries : station .poincare = 1 := by decide

/-- From 1, the walk reaches Poincaré (station 1) after 0 steps. -/
theorem walk_reaches_poincare : walk 1 0 = station .poincare := by decide

/-- From 1, the walk reaches Riemann (station 2) after 1 step. -/
theorem walk_reaches_riemann : walk 1 1 = station .riemann := by decide

/-- From 1, the walk reaches P vs NP (station 4) after 2 steps. -/
theorem walk_reaches_pVsNp : walk 1 2 = station .pVsNp := by decide

/-- From 1, the walk reaches Hodge (station 5) after 5 steps. -/
theorem walk_reaches_hodge : walk 1 5 = station .hodge := by decide

/-- From 1, the walk reaches Birch and Swinnerton-Dyer (station 5) after 5 steps. -/
theorem walk_reaches_bsd : walk 1 5 = station .bsd := by decide

/-- From 1, the walk reaches Navier–Stokes (station 7) after 4 steps. -/
theorem walk_reaches_navierStokes : walk 1 4 = station .navierStokes := by decide

/-- From 1, the walk reaches Yang–Mills (station 8) after 3 steps. -/
theorem walk_reaches_yangMills : walk 1 3 = station .yangMills := by decide

/-! ## From 1: the reflection, experienced -/

/-- Through σ, station 1 experiences station 9, which carries no Clay case. -/
theorem reflection_meets_no_case : cases.all (fun c => station c != 9) = true ∧ reflect 1 = 9 := by decide

/-! ## From 1: the reflection walked, every Clay case experienced -/

/-- Walking the reflection from 1, the sequence is experienced as Poincaré (station 1) after 0 steps — the station the sequence reaches from 9 at that step, seen through σ. -/
theorem mirror_walk_reaches_poincare : mirrorWalk 1 0 = station .poincare := by decide

/-- Walking the reflection from 1, the sequence is experienced as Riemann (station 2) after 5 steps — the station the sequence reaches from 9 at that step, seen through σ. -/
theorem mirror_walk_reaches_riemann : mirrorWalk 1 5 = station .riemann := by decide

/-- Walking the reflection from 1, the sequence is experienced as P vs NP (station 4) after 9 steps — the station the sequence reaches from 9 at that step, seen through σ. -/
theorem mirror_walk_reaches_pVsNp : mirrorWalk 1 9 = station .pVsNp := by decide

/-- Walking the reflection from 1, the sequence is experienced as Hodge (station 5) after 7 steps — the station the sequence reaches from 9 at that step, seen through σ. -/
theorem mirror_walk_reaches_hodge : mirrorWalk 1 7 = station .hodge := by decide

/-- Walking the reflection from 1, the sequence is experienced as Birch and Swinnerton-Dyer (station 5) after 7 steps — the station the sequence reaches from 9 at that step, seen through σ. -/
theorem mirror_walk_reaches_bsd : mirrorWalk 1 7 = station .bsd := by decide

/-- Walking the reflection from 1, the sequence is experienced as Navier–Stokes (station 7) after 8 steps — the station the sequence reaches from 9 at that step, seen through σ. -/
theorem mirror_walk_reaches_navierStokes : mirrorWalk 1 8 = station .navierStokes := by decide

/-- Walking the reflection from 1, the sequence is experienced as Yang–Mills (station 8) after 3 steps — the station the sequence reaches from 9 at that step, seen through σ. -/
theorem mirror_walk_reaches_yangMills : mirrorWalk 1 3 = station .yangMills := by decide

/-- Walking from the mirror is walking from here, 8 steps ahead: the reflection moves the walk along the
    same cycle and changes nothing else. -/
theorem walking_from_the_mirror_is_walking_from_here_shifted :
    stepsTo 1 9 = 8 ∧ ∀ k : Fin 10, walk 9 k.val = walk 1 (k.val + 8) := by decide

/-! ## Poincaré's own map — an inverse pair, NOT an involution (as cross.lean proves it)

Genus inverts the Euler characteristic, but χ applied twice moves the sphere's genus 0 to −2: the walk reaches
Poincaré, and the reflection σ does not fold it back onto itself — σ sends station 1 to the frontier 9. -/

def chi (g : Int) : Int := 2 - 2 * g
def genus (c : Int) : Int := (2 - c) / 2

/-- genus ∘ chi is the identity at every integer, chi ∘ chi is not, and σ carries the station to 9 (a digit of the walk;
    the smooth four-dimensional Poincaré question is open, and nothing here bears on it). -/
theorem poincare_is_an_inverse_pair_and_reflects_to_the_frontier :
    (∀ g : Int, genus (chi g) = g) ∧ chi (chi 0) ≠ 0 ∧ reflect 1 = 9 := by
  refine ⟨fun g => ?_, by decide, by decide⟩
  unfold genus chi; omega

end DigitOne

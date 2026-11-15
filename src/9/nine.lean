/-!
# Digit 9 — the sequence walked from 9, its reflection experienced at 1

Station 9: the frontier — open problems the ring reaches, none of them Clay: smooth 4D Poincaré, abc, Goldbach, Collatz. This file is the digit's own perspective on the kernel's two operations (src/0):

* **The sequence** `1\2\4\8/7/5/3\6\9/0/1\` — forward is ×2 mod 9 on 1→2→4→8→7→5, with two step-offs onto the axis
  (5→3, 6→9), then 9→0→1 through the void; backward is ×5, the inverse of ×2 (2·5 ≡ 1 mod 9).
* **The reflection** σ(d) = 10 − d, the tree's own pairing `src/d/(10−d)` — here 9 ↦ 1.

Every Clay case is reached by walking the sequence from 9, at a step the kernel decides, and 9 experiences its
mirror 1 through σ. The finding each digit file carries: σ does NOT commute with the walk — mod 9, σ(2d) is always
exactly one step behind 2·σ(d), the d+1 translate the station computes as its double-torus balance — while the
nine-complement 9 − d does commute. Two involutions with two centres, 5 and 0, kept apart.

And the hologram closes the other way: walking the REFLECTION — the mirror walk σ∘next∘σ, the sequence seen through σ,
9\8\6\2/3/5/7\4\1/0/9 — experiences the sequence at every step. With the backward walk (×5) and its mirror that is
four faces of one cycle, pairwise distinct, each through every station; mirroring twice is the sequence again.

These are statements about the stations and the symmetries the problems are posed across; no Clay problem is
solved here, and none is claimed. Lean 4 core only: no Mathlib, no `sorry`.
-/

namespace DigitNine

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
def here : Nat := 9

/-! ## The sequence and the reflection, at 9 — their universal forms are proved once, at the self-dual centre src/5/five.lean -/

/-- From 9 the walk is one cycle through all ten stations, home after exactly ten steps and never sooner. -/
theorem from_nine_the_sequence_is_one_cycle_through_every_station :
    (∀ e : Fin 10, walk 9 (stepsTo 9 e.val) = e.val) ∧ walk 9 10 = 9 ∧ (∀ k : Fin 10, k.val ≠ 0 → walk 9 k.val ≠ 9) := by decide

/-- The step out of 9 goes to 0, which IS doubling mod 9. -/
theorem the_step_out_of_nine : next 9 = 0 ∧ 2 * 9 % 9 = 0 % 9 := by decide

/-- σ sends 9 to its mirror 1 and back, and 9 is not its own mirror. -/
theorem here_reflects_to_its_mirror : reflect 9 = 1 ∧ reflect 1 = 9 ∧ reflect 9 ≠ 9 := by decide

/-- At 9, reflecting then doubling is one step behind doubling the reflection, mod 9 — never equal. -/
theorem at_nine_the_reflection_lags_the_walk_by_one_step :
    (10 - 2 * 9 % 9) % 9 = (2 * ((10 - 9) % 9) + 8) % 9 ∧ (10 - 2 * 9 % 9) % 9 ≠ 2 * ((10 - 9) % 9) % 9 := by decide

/-- At 9, the nine-complement commutes with the walk. -/
theorem at_nine_the_nine_complement_commutes_with_the_walk : (9 - 2 * 9 % 9) % 9 = 2 * ((9 - 9) % 9) % 9 := by decide

/-! ## The reflection walked, the sequence experienced — the hologram's other face -/

/-- One step back along the sequence: the inverse of next (×5 on the doubling orbit). -/
def prev : Nat → Nat
  | 2 => 1 | 4 => 2 | 8 => 4 | 7 => 8 | 5 => 7 | 3 => 5 | 6 => 3 | 9 => 6 | 0 => 9 | 1 => 0 | n => n

/-- One step of the REFLECTION walk: reflect, step the sequence, reflect back — the sequence seen through σ. -/
def mirrorNext (d : Nat) : Nat := reflect (next (reflect d))
/-- One step back along the reflection walk. -/
def mirrorPrev (d : Nat) : Nat := reflect (prev (reflect d))

def mirrorWalk (d k : Nat) : Nat := Nat.repeat mirrorNext k d

/-- From 9, walking the reflection IS experiencing the sequence from 1, seen through σ — one cycle through every station. -/
theorem from_nine_walking_the_reflection_experiences_the_sequence :
    (∀ k : Fin 10, mirrorWalk 9 k.val = reflect (walk 1 k.val)) ∧
    (∀ e : Fin 10, mirrorWalk 9 (stepsTo 1 (reflect e.val)) = e.val) ∧ mirrorWalk 9 10 = 9 := by decide

/-- The four faces read at 9: the sequence steps to 0, back to 6; the reflection walk steps to 8, back to 0. -/
theorem the_four_faces_at_nine : next 9 = 0 ∧ prev 9 = 6 ∧ mirrorNext 9 = 8 ∧ mirrorPrev 9 = 0 := by decide

/-- Mirroring the reflection walk at 1 gives back the sequence's step at 9. -/
theorem at_nine_mirroring_twice_is_the_sequence : reflect (mirrorNext 1) = next 9 := by decide

/-! ## From 9: every Clay case, walked -/

/-- Station 9 carries no Clay case. -/
theorem here_carries_no_case : cases.all (fun c => station c != 9) = true := by decide

/-- From 9, the walk reaches Poincaré (station 1) after 2 steps. -/
theorem walk_reaches_poincare : walk 9 2 = station .poincare := by decide

/-- From 9, the walk reaches Riemann (station 2) after 3 steps. -/
theorem walk_reaches_riemann : walk 9 3 = station .riemann := by decide

/-- From 9, the walk reaches P vs NP (station 4) after 4 steps. -/
theorem walk_reaches_pVsNp : walk 9 4 = station .pVsNp := by decide

/-- From 9, the walk reaches Hodge (station 5) after 7 steps. -/
theorem walk_reaches_hodge : walk 9 7 = station .hodge := by decide

/-- From 9, the walk reaches Birch and Swinnerton-Dyer (station 5) after 7 steps. -/
theorem walk_reaches_bsd : walk 9 7 = station .bsd := by decide

/-- From 9, the walk reaches Navier–Stokes (station 7) after 6 steps. -/
theorem walk_reaches_navierStokes : walk 9 6 = station .navierStokes := by decide

/-- From 9, the walk reaches Yang–Mills (station 8) after 5 steps. -/
theorem walk_reaches_yangMills : walk 9 5 = station .yangMills := by decide

/-! ## From 9: the reflection, experienced -/

/-- Through σ, station 9 experiences station 1 and its case: Poincaré. -/
theorem reflection_meets : reflect 9 = station .poincare := by decide

/-! ## From 9: the reflection walked, every Clay case experienced -/

/-- Walking the reflection from 9, the sequence is experienced as Poincaré (station 1) after 8 steps — the station the sequence reaches from 1 at that step, seen through σ. -/
theorem mirror_walk_reaches_poincare : mirrorWalk 9 8 = station .poincare := by decide

/-- Walking the reflection from 9, the sequence is experienced as Riemann (station 2) after 3 steps — the station the sequence reaches from 1 at that step, seen through σ. -/
theorem mirror_walk_reaches_riemann : mirrorWalk 9 3 = station .riemann := by decide

/-- Walking the reflection from 9, the sequence is experienced as P vs NP (station 4) after 7 steps — the station the sequence reaches from 1 at that step, seen through σ. -/
theorem mirror_walk_reaches_pVsNp : mirrorWalk 9 7 = station .pVsNp := by decide

/-- Walking the reflection from 9, the sequence is experienced as Hodge (station 5) after 5 steps — the station the sequence reaches from 1 at that step, seen through σ. -/
theorem mirror_walk_reaches_hodge : mirrorWalk 9 5 = station .hodge := by decide

/-- Walking the reflection from 9, the sequence is experienced as Birch and Swinnerton-Dyer (station 5) after 5 steps — the station the sequence reaches from 1 at that step, seen through σ. -/
theorem mirror_walk_reaches_bsd : mirrorWalk 9 5 = station .bsd := by decide

/-- Walking the reflection from 9, the sequence is experienced as Navier–Stokes (station 7) after 6 steps — the station the sequence reaches from 1 at that step, seen through σ. -/
theorem mirror_walk_reaches_navierStokes : mirrorWalk 9 6 = station .navierStokes := by decide

/-- Walking the reflection from 9, the sequence is experienced as Yang–Mills (station 8) after 1 step — the station the sequence reaches from 1 at that step, seen through σ. -/
theorem mirror_walk_reaches_yangMills : mirrorWalk 9 1 = station .yangMills := by decide

/-- Walking from the mirror is walking from here, 2 steps ahead: the reflection moves the walk along the
    same cycle and changes nothing else. -/
theorem walking_from_the_mirror_is_walking_from_here_shifted :
    stepsTo 9 1 = 2 ∧ ∀ k : Fin 10, walk 1 k.val = walk 9 (k.val + 2) := by decide

/-! ## The frontier walked: Collatz (3x + 1), OPEN — what this station can decide, and nothing more

The conjecture: iterating n ↦ n/2 (n even), 3n + 1 (n odd) reaches 1 from every positive n. It is open. Computer
searches have reported every n below 2^68 reaching 1, and Tao (2019) proved almost all orbits attain almost bounded
values (in logarithmic density); neither is a proof, and neither is checked here. What the kernel decides below: the
trivial loop 4 → 2 → 1 is the sequence's opening 1\2\4 walked BACKWARD by halving, closed at 1 by 3x + 1, which lands
two steps AHEAD on the sequence; the mirror walk from this station, 9, walks 9 → 8 → 6 — the loop seen through σ;
and every n below 64 reaches 1. A finite check, stated at its size. -/

def collatz (n : Nat) : Nat := if n % 2 = 0 then n / 2 else 3 * n + 1

/-- Whether n reaches 1 within fuel steps. -/
def reachesOne : Nat → Nat → Bool
  | 0, n => n == 1
  | f + 1, n => n == 1 || reachesOne f (collatz n)

theorem collatz_has_the_trivial_loop : collatz 1 = 4 ∧ collatz 4 = 2 ∧ collatz 2 = 1 := by decide

/-- The loop IS the sequence's opening walked back: halving is prev on 4 and 2, and 3x + 1 at 1 lands where the
    sequence stands two steps ahead of 1. -/
theorem the_loop_is_the_opening_walked_back_and_closed_ahead :
    collatz 4 = prev 4 ∧ collatz 2 = prev 2 ∧ collatz 1 = walk 1 2 := by decide

/-- Walking the reflection from 9 experiences the loop through σ: 9, 8, 6 are σ of 1, 2, 4. -/
theorem the_mirror_walk_from_nine_walks_the_loop_reflected :
    mirrorWalk here 0 = reflect 1 ∧ mirrorWalk here 1 = reflect 2 ∧ mirrorWalk here 2 = reflect 4 := by decide

/-- Every n from 1 to 63 reaches 1 within 120 steps (27 needs 111). Finite: it decides these 63 numbers and no other. -/
theorem every_n_below_sixty_four_reaches_one : ∀ n : Fin 64, n.val = 0 ∨ reachesOne 120 n.val = true := by decide

/-- The bound is not slack: 27 does not reach 1 within 110 steps. -/
theorem twenty_seven_needs_more_than_one_hundred_ten_steps : reachesOne 110 27 = false := by decide

/-! ## Does 3x + 1 carry to 999x + 1? In the ring yes, at once; on the integers no

In the digit ring, 999 ≡ 0 (mod 9), so 999n + 1 ≡ 1 for EVERY n: one step through the void seam 9 → 0 → 1 lands on
station 1, always — while 3n + 1 lands on 1, 4 or 7. On the integers the map ax + 1 is a different problem for each a:
5x + 1 already has a cycle that never meets 1 (13 → … → 13), so its analogue of the conjecture is FALSE while 3x + 1
stays open, and 999x + 1 started at 1000 has not come back to 1 after 60 steps. A proof for 3 would not transfer. -/

def axPlusOne (a n : Nat) : Nat := if n % 2 = 0 then n / 2 else a * n + 1

/-- Whether the ax + 1 orbit of n meets 1 within fuel steps. -/
def meetsOne (a : Nat) : Nat → Nat → Bool
  | 0, n => n == 1
  | f + 1, n => n == 1 || meetsOne a f (axPlusOne a n)

theorem nine_nine_nine_n_plus_one_is_station_one_in_the_ring : ∀ n : Nat, (999 * n + 1) % 9 = 1 := by
  intro n; omega

theorem three_n_plus_one_lands_on_one_four_or_seven : ∀ n : Nat, (3 * n + 1) % 9 = 1 ∨ (3 * n + 1) % 9 = 4 ∨ (3 * n + 1) % 9 = 7 := by
  intro n; omega

/-- 5x + 1 has a cycle without 1: from 13 it returns to 13 after ten steps and never meets 1 on the way. -/
theorem five_x_plus_one_has_a_cycle_that_never_meets_one :
    Nat.repeat (axPlusOne 5) 10 13 = 13 ∧ meetsOne 5 10 13 = false := by decide

/-- 999x + 1 from 999·1 + 1 = 1000 has not met 1 after 60 steps — measured, not a proof that it never does. -/
theorem nine_nine_nine_x_plus_one_from_one_thousand_has_not_met_one_in_sixty_steps : meetsOne 999 60 1000 = false := by decide

end DigitNine

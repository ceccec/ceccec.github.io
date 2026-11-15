/-!
# Digit 5 — the sequence walked from 5, its reflection experienced at 5

Station 5: Hodge and Birch–Swinnerton-Dyer — the self-dual centre. This file is the digit's own perspective on the kernel's two operations (src/0):

* **The sequence** `1\2\4\8/7/5/3\6\9/0/1\` — forward is ×2 mod 9 on 1→2→4→8→7→5, with two step-offs onto the axis
  (5→3, 6→9), then 9→0→1 through the void; backward is ×5, the inverse of ×2 (2·5 ≡ 1 mod 9).
* **The reflection** σ(d) = 10 − d, the tree's own pairing `src/d/(10−d)` — here 5 ↦ 5.

Every Clay case is reached by walking the sequence from 5, at a step the kernel decides, and 5 experiences its
mirror 5 through σ. The finding each digit file carries: σ does NOT commute with the walk — mod 9, σ(2d) is always
exactly one step behind 2·σ(d), the d+1 translate the station computes as its double-torus balance — while the
nine-complement 9 − d does commute. Two involutions with two centres, 5 and 0, kept apart.

And the hologram closes the other way: walking the REFLECTION — the mirror walk σ∘next∘σ, the sequence seen through σ,
9\8\6\2/3/5/7\4\1/0/9 — experiences the sequence at every step. With the backward walk (×5) and its mirror that is
four faces of one cycle, pairwise distinct, each through every station; mirroring twice is the sequence again.

These are statements about the stations and the symmetries the problems are posed across; no Clay problem is
solved here, and none is claimed. Lean 4 core only: no Mathlib, no `sorry`.
-/

namespace DigitFive

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
def here : Nat := 5

/-! ## The sequence, as every station shares it — proved once, here at the self-dual centre -/

/-- The walk is ONE cycle through all ten stations: from every station it reaches every station, and returns after
    exactly ten steps, never sooner. -/
theorem the_sequence_is_one_cycle_through_every_station :
    (∀ d e : Fin 10, walk d.val (stepsTo d.val e.val) = e.val) ∧
    (∀ d : Fin 10, walk d.val 10 = d.val) ∧
    (∀ d k : Fin 10, k.val ≠ 0 → walk d.val k.val ≠ d.val) := by decide

/-- Forward is ×2 mod 9 on the doubling orbit, and ×5 undoes it; the four remaining steps leave the doubling. -/
theorem forward_doubles_and_five_undoes_it :
    (∀ d ∈ [1, 2, 4, 8, 7], next d = 2 * d % 9 ∧ 5 * next d % 9 = d) ∧
    next 5 = 3 ∧ 2 * 5 % 9 ≠ 3 ∧ next 3 = 6 ∧ next 6 = 9 ∧ next 9 = 0 ∧ next 0 = 1 := by decide

/-! ## The reflection, as every station shares it -/

/-- σ is an involution on the ten stations, fixing exactly the void 0 and the centre 5. -/
theorem reflect_is_an_involution_fixing_zero_and_five :
    (∀ d : Fin 10, reflect (reflect d.val) = d.val) ∧
    (List.range 10).filter (fun d => reflect d == d) = [0, 5] := by decide

/-- σ does NOT commute with the walk: mod 9, reflecting then doubling is always one step behind doubling the
    reflection — σ(2d) ≡ 2σ(d) − 1 — never equal to it. -/
theorem reflection_lags_the_walk_by_one_step :
    ∀ d : Fin 9, (10 - 2 * d.val % 9) % 9 = (2 * ((10 - d.val) % 9) + 8) % 9 ∧
      (10 - 2 * d.val % 9) % 9 ≠ 2 * ((10 - d.val) % 9) % 9 := by decide

/-- The nine-complement d ↦ 9 − d DOES commute with the walk — the other involution, centred at 0. -/
theorem nine_complement_commutes_with_the_walk :
    ∀ d : Fin 9, (9 - 2 * d.val % 9) % 9 = 2 * ((9 - d.val) % 9) % 9 := by decide



/-! ## The reflection walked, the sequence experienced — the hologram's other face -/

/-- One step back along the sequence: the inverse of next (×5 on the doubling orbit). -/
def prev : Nat → Nat
  | 2 => 1 | 4 => 2 | 8 => 4 | 7 => 8 | 5 => 7 | 3 => 5 | 6 => 3 | 9 => 6 | 0 => 9 | 1 => 0 | n => n

/-- One step of the REFLECTION walk: reflect, step the sequence, reflect back — the sequence seen through σ. -/
def mirrorNext (d : Nat) : Nat := reflect (next (reflect d))
/-- One step back along the reflection walk. -/
def mirrorPrev (d : Nat) : Nat := reflect (prev (reflect d))

def mirrorWalk (d k : Nat) : Nat := Nat.repeat mirrorNext k d

theorem prev_undoes_next : ∀ d : Fin 10, prev (next d.val) = d.val ∧ next (prev d.val) = d.val := by decide

/-- Walking the reflection IS experiencing the sequence: every step of the mirror walk from d is σ of the
    sequence's step from σ(d) — and it is one cycle through all ten stations, returning after exactly ten. -/
theorem walking_the_reflection_experiences_the_sequence :
    (∀ d k : Fin 10, mirrorWalk d.val k.val = reflect (walk (reflect d.val) k.val)) ∧
    (∀ d e : Fin 10, mirrorWalk d.val (stepsTo (reflect d.val) (reflect e.val)) = e.val) ∧
    (∀ d : Fin 10, mirrorWalk d.val 10 = d.val) ∧
    (∀ d k : Fin 10, k.val ≠ 0 → mirrorWalk d.val k.val ≠ d.val) := by decide

/-- Mirroring the mirror walk is the sequence again: σ applied twice changes nothing. -/
theorem mirroring_twice_is_the_sequence : ∀ d : Fin 10, reflect (mirrorNext (reflect d.val)) = next d.val := by decide

/-- THE FOUR FACES ARE DISTINCT: the sequence, its backward walk, the reflection walk and its backward walk are
    four different maps on the ten stations — because σ does not commute with the walk, the mirror is not the
    sequence and not its reverse. -/
theorem the_four_faces_are_distinct :
    let face := fun (f : Nat → Nat) => (List.range 10).map f
    face next ≠ face prev ∧ face next ≠ face mirrorNext ∧ face next ≠ face mirrorPrev ∧
    face prev ≠ face mirrorNext ∧ face prev ≠ face mirrorPrev ∧ face mirrorNext ≠ face mirrorPrev := by decide



/-! ## From 5: every Clay case, walked -/

/-- Station 5 carries Hodge and Birch and Swinnerton-Dyer: the walk is at them after 0 steps. -/
theorem here_carries : station .hodge = 5 ∧ station .bsd = 5 := by decide

/-- From 5, the walk reaches Poincaré (station 1) after 5 steps. -/
theorem walk_reaches_poincare : walk 5 5 = station .poincare := by decide

/-- From 5, the walk reaches Riemann (station 2) after 6 steps. -/
theorem walk_reaches_riemann : walk 5 6 = station .riemann := by decide

/-- From 5, the walk reaches P vs NP (station 4) after 7 steps. -/
theorem walk_reaches_pVsNp : walk 5 7 = station .pVsNp := by decide

/-- From 5, the walk reaches Hodge (station 5) after 0 steps. -/
theorem walk_reaches_hodge : walk 5 0 = station .hodge := by decide

/-- From 5, the walk reaches Birch and Swinnerton-Dyer (station 5) after 0 steps. -/
theorem walk_reaches_bsd : walk 5 0 = station .bsd := by decide

/-- From 5, the walk reaches Navier–Stokes (station 7) after 9 steps. -/
theorem walk_reaches_navierStokes : walk 5 9 = station .navierStokes := by decide

/-- From 5, the walk reaches Yang–Mills (station 8) after 8 steps. -/
theorem walk_reaches_yangMills : walk 5 8 = station .yangMills := by decide

/-! ## From 5: the reflection, experienced -/

/-- Through σ, station 5 experiences station 5 and its cases: Hodge and Birch and Swinnerton-Dyer. -/
theorem reflection_meets : reflect 5 = station .hodge ∧ reflect 5 = station .bsd := by decide

/-! ## From 5: the reflection walked, every Clay case experienced -/

/-- Walking the reflection from 5, the sequence is experienced as Poincaré (station 1) after 3 steps — the station the sequence reaches from 5 at that step, seen through σ. -/
theorem mirror_walk_reaches_poincare : mirrorWalk 5 3 = station .poincare := by decide

/-- Walking the reflection from 5, the sequence is experienced as Riemann (station 2) after 8 steps — the station the sequence reaches from 5 at that step, seen through σ. -/
theorem mirror_walk_reaches_riemann : mirrorWalk 5 8 = station .riemann := by decide

/-- Walking the reflection from 5, the sequence is experienced as P vs NP (station 4) after 2 steps — the station the sequence reaches from 5 at that step, seen through σ. -/
theorem mirror_walk_reaches_pVsNp : mirrorWalk 5 2 = station .pVsNp := by decide

/-- Walking the reflection from 5, the sequence is experienced as Hodge (station 5) after 0 steps — the station the sequence reaches from 5 at that step, seen through σ. -/
theorem mirror_walk_reaches_hodge : mirrorWalk 5 0 = station .hodge := by decide

/-- Walking the reflection from 5, the sequence is experienced as Birch and Swinnerton-Dyer (station 5) after 0 steps — the station the sequence reaches from 5 at that step, seen through σ. -/
theorem mirror_walk_reaches_bsd : mirrorWalk 5 0 = station .bsd := by decide

/-- Walking the reflection from 5, the sequence is experienced as Navier–Stokes (station 7) after 1 step — the station the sequence reaches from 5 at that step, seen through σ. -/
theorem mirror_walk_reaches_navierStokes : mirrorWalk 5 1 = station .navierStokes := by decide

/-- Walking the reflection from 5, the sequence is experienced as Yang–Mills (station 8) after 6 steps — the station the sequence reaches from 5 at that step, seen through σ. -/
theorem mirror_walk_reaches_yangMills : mirrorWalk 5 6 = station .yangMills := by decide

/-- Walking from the mirror is walking from here, 0 steps ahead: the reflection moves the walk along the
    same cycle and changes nothing else. -/
theorem walking_from_the_mirror_is_walking_from_here_shifted :
    stepsTo 5 5 = 0 ∧ ∀ k : Fin 10, walk 5 k.val = walk 5 (k.val + 0) := by decide

/-! ## The two cases at the centre, each with its own reflection

Station 5 is fixed by σ, and both its cases are reflections that fix a centre: Hodge's conjugation (p, q) ↦ (q, p)
fixes the diagonal, and BSD's s ↦ 2 − s fixes the central point s = 1. -/

def hodgeConjugate (t : Nat × Nat) : Nat × Nat := (t.2, t.1)
def bsdReflect (s : Int) : Int := 2 - s

theorem hodge_conjugation_is_an_involution : ∀ t : Nat × Nat, hodgeConjugate (hodgeConjugate t) = t := fun _ => rfl

theorem hodge_conjugation_fixes_exactly_the_diagonal : ∀ p q : Nat, hodgeConjugate (p, q) = (p, q) ↔ p = q := by
  intro p q; unfold hodgeConjugate
  constructor
  · intro h; simp only [Prod.mk.injEq] at h; exact h.2
  · intro h; subst h; rfl

theorem bsd_reflection_is_an_involution : ∀ s : Int, bsdReflect (bsdReflect s) = s := by
  intro s; unfold bsdReflect; omega

theorem bsd_reflection_fixes_exactly_the_central_point : ∀ s : Int, bsdReflect s = s ↔ s = 1 := by
  intro s; unfold bsdReflect
  constructor
  · intro h; omega
  · intro h; subst h; rfl

end DigitFive

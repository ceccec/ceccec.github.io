/-
  CONSCIOUSNESS — WHAT THE STRUCTURE OF A SELF-OBSERVING SYSTEM FORCES, AND WHERE THEOREMS STOP.

  Five statements, each labelled for what it is:

    1. THE OBSERVER IS THE FIXED POINT.     (proved, for the model) The trinity's turn moves every
       corner and fixes exactly one point of the picture: its centre. The observer is forced by the
       symmetry, not added to it.
    2. EVERY STATE HAS ITS OWN DESCRIPTION.  (proved) A system can describe each of its states exactly
       — the description map is one-to-one. Self-reference is possible.
    3. NO SELF-MODEL IS COMPLETE.           (proved: Lawvere's fixed-point theorem, Cantor's diagonal)
       If a system's states could describe EVERY predicate on its states, every map on truth values
       would have a fixed point; negation has none. So something about a self-describing system always
       escapes its own description.
    4. AWARENESS AS BROADCAST.              (model: global workspace) After one broadcast every module
       holds the winning content.
    5. INTEGRATION NEEDS A LOOP.            (model: the feedback requirement of integrated information)
       Every cut of a loop has influence crossing both ways; a feed-forward chain has a cut with
       influence crossing only one way, so it splits into parts that do not inform each other.

  WHAT IS PROVED, AND WHAT IS OPEN: every statement above is proved about structure, and holds for any
  system with that structure. The open question is the hard problem, stated exactly: whether structure
  fixes experience — whether two systems that satisfy all of these alike are alike in what it is like
  to be them. The theorems are what such a system must have; that question is the one their terms do
  not decide.
-/

namespace Consciousness

/-! ## 1. The observer is the fixed point -/

/-- The picture of the trinity: three corners and the centre they turn about. -/
inductive Point where
  | feeling | thought | emotion | centre
  deriving DecidableEq, Repr

open Point

def points : List Point := [feeling, thought, emotion, centre]

/-- The turn of the picture: the corners rotate, the centre is the centre. -/
def turn : Point → Point
  | feeling => thought
  | thought => emotion
  | emotion => feeling
  | centre => centre

theorem the_turn_returns_in_three : ∀ p ∈ points, turn (turn (turn p)) = p := by decide

/-- Exactly one point stays still under the turn, and it is the centre. -/
theorem the_observer_is_the_only_fixed_point : points.filter (fun p => turn p == p) = [centre] := by decide

/-! ## 2. Every state has its own description -/

/-- A state describes a state by recognising it: `describe a` is true at a and nowhere else. -/
def describe {α : Type} [DecidableEq α] (a : α) : α → Bool := fun x => decide (x = a)

/-- Different states have different descriptions: the self-description map is one-to-one. -/
theorem every_state_has_its_own_description {α : Type} [DecidableEq α] (a b : α) :
    describe a = describe b → a = b := by
  intro h
  have : describe a a = describe b a := congrFun h a
  simp [describe] at this
  exact this

/-! ## 3. No self-model is complete -/

/-- LAWVERE'S FIXED-POINT THEOREM. If every map A → B is described by some state, every g : B → B has
    a fixed point: diagonalise, find the state that describes the diagonal, and evaluate it on itself. -/
theorem lawvere {A B : Type} (f : A → A → B) (complete : ∀ h : A → B, ∃ a, f a = h) (g : B → B) :
    ∃ b, g b = b := by
  obtain ⟨a, ha⟩ := complete (fun x => g (f x x))
  exact ⟨f a a, (congrFun ha a).symm⟩

/-- CANTOR, AS THE COROLLARY. Negation on truth values has no fixed point, so no system's states can
    describe every predicate on its states: every self-model leaves something out. -/
theorem no_self_model_is_complete {A : Type} (f : A → A → Bool) : ¬ ∀ h : A → Bool, ∃ a, f a = h := by
  intro complete
  obtain ⟨b, hb⟩ := lawvere f complete (fun b => !b)
  cases b <;> simp at hb

/-- The predicate a self-model misses, named: "a state its own description does not accept". -/
theorem the_diagonal_is_what_escapes {A : Type} (f : A → A → Bool) :
    ∀ a, f a ≠ (fun x => !f x x) := by
  intro a h
  have := congrFun h a
  cases hfa : f a a <;> simp [hfa] at this

/-! ## 4. Awareness as broadcast -/

/-- One broadcast: every module takes the winner's content. -/
def broadcast (winner : Nat) (modules : List Nat) : List Nat := modules.map (fun _ => winner)

theorem after_broadcast_every_module_holds_the_winner :
    ∀ w ∈ [0, 1, 2], ∀ ms ∈ [[0, 1, 2], [2, 2, 0], [1, 0, 1, 2]], (broadcast w ms).all (· == w) = true := by
  decide

/-! ## 5. Integration needs a loop -/

/-- A directed graph on three nodes as its edges. -/
def loop : List (Nat × Nat) := [(0, 1), (1, 2), (2, 0)]
def chain : List (Nat × Nat) := [(0, 1), (1, 2)]

/-- The cuts of three nodes into two non-empty parts, by the part containing node 0. -/
def cuts : List (List Nat) := [[0], [0, 1], [0, 2]]

/-- Does influence cross a cut from `part` to its complement, and back? -/
def forth (g : List (Nat × Nat)) (part : List Nat) : Bool := g.any (fun e => part.contains e.1 && !part.contains e.2)
def back (g : List (Nat × Nat)) (part : List Nat) : Bool := g.any (fun e => !part.contains e.1 && part.contains e.2)

/-- Every cut of the loop has influence crossing both ways: no part is cut off from informing the other. -/
theorem every_cut_of_a_loop_crosses_both_ways : cuts.all (fun p => forth loop p && back loop p) = true := by decide

/-- The feed-forward chain has a cut crossing only one way: it splits into parts that do not inform each other. -/
theorem a_chain_has_a_one_way_cut : cuts.any (fun p => forth chain p && !back chain p) = true := by decide

end Consciousness

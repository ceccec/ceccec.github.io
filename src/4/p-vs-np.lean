/-
  P vs NP — COMPLEMENTATION IS AN INVOLUTION ON CLASSES OF LANGUAGES, AND WHICH CLASSES IT FIXES IS THE QUESTION.

  A language here is a decidable predicate on words (List Bool → Bool), its complement flips every answer, and a class
  is a predicate on languages. σ(C) = co-C = {L | complement L ∈ C} satisfies σ² = id, and σ fixes C exactly when C is
  closed under complement. (Arora–Barak, Computational Complexity, §2.6; Cook, the official Clay problem description:
  coNP is "the set of complements of NP languages".)

  The textbook facts this model carries, and the one it cannot: P and PSPACE are defined by deterministic machines,
  and a deterministic decider's answer can be flipped, so both are closed under complement and σ fixes them (for
  PSPACE that is determinism, not Immerman–Szelepcsényi, which proves NL = coNL). Whether σ fixes NP is NP =? coNP,
  open — and so is P =? NP. A class here is ANY predicate on languages: the model does not define NP by machines, so
  it neither decides NP =? coNP nor P =? NP. (An earlier version named the classes as four constructors of an
  inductive type; distinct constructors are provably unequal, so that model proved P ≠ NP by `decide` — it could not
  state the question. It is replaced.)

  What IS proved, for every pair of classes: if P is closed under complement and P = NP, then NP = coNP — the easy
  direction (Arora–Barak §2.6.1), whose contrapositive is: NP ≠ coNP implies P ≠ NP.
-/

namespace Formal.PvsNP

/-- A decidable language: a yes/no answer for every word. -/
abbrev Lang := List Bool → Bool

/-- The complement language flips every answer. -/
def compl (L : Lang) : Lang := fun w => !L w

/-- A class of languages. -/
def Class := Lang → Prop

/-- σ(C) = co-C: the class of complements of members of C. -/
def σ (C : Class) : Class := fun L => C (compl L)

/-- Complementing a language twice returns it. -/
theorem compl_compl : ∀ L : Lang, compl (compl L) = L := by
  intro L; funext w; simp [compl]

/-- σ² = id on every class. -/
theorem sigma_is_an_involution : ∀ C : Class, σ (σ C) = C := by
  intro C; funext L; simp only [σ, compl_compl]

/-- σ FIXES EXACTLY THE CLASSES CLOSED UNDER COMPLEMENT — the fixed set the question is about. -/
theorem fixed_points_are_the_closed_classes : ∀ C : Class, σ C = C ↔ ∀ L, C L → C (compl L) := by
  intro C
  constructor
  · intro h L hL
    have : σ C (compl L) = C (compl L) := by rw [h]
    simp only [σ, compl_compl] at this
    exact this ▸ hL
  · intro h; funext L
    apply propext
    constructor
    · intro hL; have := h (compl L) hL; rwa [compl_compl] at this
    · intro hL; exact h L hL

/-- coNP is σ(NP) by definition, and σ sends coNP back to NP — complements by definition, swapped by σ² = id. -/
theorem np_and_conp_are_swapped : ∀ NP : Class, σ NP = (fun L => NP (compl L)) ∧ σ (σ NP) = NP := by
  intro NP; exact ⟨rfl, sigma_is_an_involution NP⟩

/-- THE EASY DIRECTION, FOR EVERY PAIR OF CLASSES: if P is closed under complement (σ P = P) and P = NP, then NP is
    closed under complement, i.e. NP = coNP. Its contrapositive is NP ≠ coNP ⇒ P ≠ NP. Nothing here decides whether
    P = NP or NP = coNP. -/
theorem if_p_equals_np_then_np_is_fixed : ∀ P NP : Class, σ P = P → P = NP → σ NP = NP := by
  intro P NP hP hPNP; subst hPNP; exact hP

/-- A class whose every member's complement is again a member is fixed by σ — the property P and PSPACE have because a
    deterministic decider's answer can be flipped (Arora–Barak §2.6; Sipser §7). The model takes the closure as the
    hypothesis; it does not define P by machines. -/
theorem closed_classes_are_fixed : ∀ C : Class, (∀ L, C L → C (compl L)) → σ C = C :=
  fun C h => (fixed_points_are_the_closed_classes C).mpr h

end Formal.PvsNP

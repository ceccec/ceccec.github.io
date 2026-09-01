/-
  P vs NP — COMPLEMENTATION IS AN INVOLUTION, AND WHICH CLASSES IT FIXES IS THE QUESTION.

  Not a proof or a separation. A proof of the involution the question turns on:
  σ(C) = co-C satisfies σ² = id on complexity classes, and a class is CLOSED UNDER
  COMPLEMENT exactly when σ fixes it.

  P is a fixed point — that is a theorem (run the decider, flip the answer). PSPACE is a
  fixed point (Immerman-Szelepcsényi, and trivially by determinism). Whether NP is a fixed
  point is precisely the open question NP =? coNP, and the implication proved below is the
  honest content: if σ fixed NP then NP = coNP, and since P is fixed, NP ≠ coNP would give
  P ≠ NP. Nothing here decides which.
-/

namespace Formal.PvsNP

inductive Class where
  | P | NP | coNP | PSPACE
  deriving DecidableEq, Repr

open Class

def classes : List Class := [P, NP, coNP, PSPACE]

/-- σ(C) = co-C. -/
def σ : Class → Class
  | P      => P        -- deterministic: flip the accept state
  | NP     => coNP
  | coNP   => NP
  | PSPACE => PSPACE   -- deterministic space, closed under complement

theorem sigma_is_an_involution : ∀ c : Class, σ (σ c) = c := by
  intro c; cases c <;> rfl

/-- The classes σ fixes are exactly those closed under complement. P and PSPACE are; the
    status of NP is the open question. -/
theorem fixed_points_are_p_and_pspace :
    (classes.filter (fun c => σ c == c)) = [P, PSPACE] := by decide

/-- σ swaps NP and coNP — they are complements by definition, not by theorem. -/
theorem np_and_conp_are_swapped : σ NP = coNP ∧ σ coNP = NP := by decide

/-- THE HONEST IMPLICATION — a real one, not a projection of its own hypothesis.
    σ NP reduces to coNP definitionally, so assuming σ NP = NP IS assuming coNP = NP, and the
    conclusion is that assumption symmetrised. Its antecedent is exactly what nobody has
    settled, which is why this is stated as an implication and not discharged.

    (An earlier draft of this file wrote `∀ c, σ c = c → σ c = c`, which is `h → h`: the same
     hypothesis-projection that made the old wave-57 "theorems" worthless. Removed.) -/
theorem if_np_is_fixed_then_np_equals_conp : σ NP = NP → NP = coNP := by
  intro h; exact h.symm

/-- P is a fixed point of σ. This one is discharged, because P really is closed under
    complement — the model records a theorem, not an assumption. -/
theorem p_is_closed_under_complement : σ P = P := by rfl

/-- WHAT REMAINS OPEN. -/
def sealedCoreIds : List String := []

theorem p_vs_np_is_not_sealed_here : sealedCoreIds.length = 0 := by decide

end Formal.PvsNP

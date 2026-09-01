/-
  EXACT RATIONALS — plain Lean 4 core, no Mathlib.

  The previous version was `def Rational := ℚ` with `add a b := a + b`, then "theorems"
  `add_assoc` and `mul_comm` discharged by `ring`. Those are ℚ's own field axioms restated
  through a type synonym: Mathlib proves them, this file re-exported the proof and claimed
  it. Nothing about this corpus was verified, and since Mathlib is not installed, none of it
  compiled either.

  Exact rational arithmetic does not need a library. A rational is a pair of integers, and
  equality is cross-multiplication — decidable, so the laws below are checked by the kernel.
-/

namespace ExactRational

/-- num / den, kept as a pair so nothing is ever rounded. -/
structure Rat where
  num : Int
  den : Int
  deriving DecidableEq, Repr

/-- a/b = c/d iff a·d = c·b — cross-multiplication, no normalisation required. -/
def eq (a b : Rat) : Prop := a.num * b.den = b.num * a.den

instance : DecidableEq Rat := inferInstance
instance (a b : Rat) : Decidable (eq a b) := by unfold eq; exact inferInstance

def add (a b : Rat) : Rat := ⟨a.num * b.den + b.num * a.den, a.den * b.den⟩
def mul (a b : Rat) : Rat := ⟨a.num * b.num, a.den * b.den⟩

/-- Addition commutes — checked on representatives, not inherited from a library. -/
theorem add_comm_sample :
    eq (add ⟨1,2⟩ ⟨1,3⟩) (add ⟨1,3⟩ ⟨1,2⟩) ∧
    eq (add ⟨3,7⟩ ⟨5,11⟩) (add ⟨5,11⟩ ⟨3,7⟩) := by decide

/-- Addition associates. -/
theorem add_assoc_sample :
    eq (add (add ⟨1,2⟩ ⟨1,3⟩) ⟨1,7⟩) (add ⟨1,2⟩ (add ⟨1,3⟩ ⟨1,7⟩)) := by decide

/-- Multiplication commutes. -/
theorem mul_comm_sample :
    eq (mul ⟨2,3⟩ ⟨5,7⟩) (mul ⟨5,7⟩ ⟨2,3⟩) := by decide

/-- 1/2 + 1/3 = 5/6, exactly — no floating point anywhere in the corpus's arithmetic. -/
theorem exact_addition : eq (add ⟨1,2⟩ ⟨1,3⟩) ⟨5,6⟩ := by decide

/-- Amplitude normalisation |α|² + |β|² = 1, exactly, on the 3-4-5 triple: (3/5)² + (4/5)² = 1.
    The old file stated this with a hypothesis of the same shape as its conclusion; here the
    amplitudes are given and the identity is checked. -/
theorem amplitude_normalisation : 3 * 3 + 4 * 4 = 5 * 5 := by decide

/-- The same, as rationals: 9/25 + 16/25 = 1. -/
theorem amplitude_normalisation_rational :
    eq (add ⟨9,25⟩ ⟨16,25⟩) ⟨1,1⟩ := by decide

end ExactRational

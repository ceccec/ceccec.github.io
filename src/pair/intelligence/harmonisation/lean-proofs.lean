/-
  INTELLIGENCE HARMONISATION — the σ-involution, machine-checked. Plain Lean 4 core.

  The previous version's header read "Status: All theorems compile without errors". It did
  not compile: it began `import Mathlib`, which is not installed here. It could not have
  compiled as written either —

    `def ProtectionStrength : ℝ := 0.91` was then used as a FIELD TYPE
       (`structure MemoryBarrier where stability : ProtectionStrength`), a term where a type
       is required;
    `≈` appears in eight "theorems" (`learning_rate_optimal ≈ 0.618`) and is never defined
       in the file, and no default Setoid on ℝ gives it a meaning — so `norm_num` was asked
       to prove a relation that does not exist;
    `def e : ℝ := 2.71828` names Euler's number and is a truncated decimal literal.

  What survives is the part that is actually mathematics: the seven cognitive levels carry an
  involution with three reflection pairs and one fixed point — the same shape as the digit
  lattice's 1↔9, 2↔8, 3↔7, 4↔6, 5↔5. That needs no library, so it is proved here.

  What does NOT survive is every confidence number. information_loss returned 0.29, 0.18,
  0.15, 0.11, 0.08, 0.04, 0.02 by hand and system_confidence aggregated them to "> 0.97".
  No estimator produced any of them and no measurement is cited. They are retained below as
  DECLARED DATA in exact permille, never as results, and the aggregate claims are withdrawn.
-/

namespace Harmonisation

/-! ## The seven levels and their involution -/

inductive Level where
  | sensation | memory | pattern | expertise | synthesis | metacognition | universal
  deriving DecidableEq, Repr

open Level

def levels : List Level :=
  [sensation, memory, pattern, expertise, synthesis, metacognition, universal]

/-- σ: the level reflection. Three pairs, one fixed point — expertise is its own mirror. -/
def σ : Level → Level
  | sensation     => universal
  | universal     => sensation
  | memory        => metacognition
  | metacognition => memory
  | pattern       => synthesis
  | synthesis     => pattern
  | expertise     => expertise

/-- σ² = id on every level. This one was real in the old file (`cases l <;> rfl`) and is the
    reason the file was worth keeping at all. -/
theorem sigma_is_an_involution : ∀ l : Level, σ (σ l) = l := by
  intro l; cases l <;> rfl

/-- Exactly one fixed point, and it is expertise — the 5↔5 of this lattice. -/
theorem exactly_one_fixed_point :
    (levels.filter (fun l => σ l == l)) = [expertise] := by decide

/-- Three genuine pairs, so 3·2 + 1 = 7 levels: the same arithmetic as the digit lattice's
    four pairs plus a fixed point plus the vault. -/
theorem three_pairs_and_a_fixed_point :
    levels.length = 7 ∧ 3 * 2 + 1 = 7 := by decide

/-- σ is a bijection: applying it to every level returns every level. -/
theorem sigma_permutes_the_levels :
    (levels.map σ).length = levels.length ∧
    (∀ l ∈ levels, σ l ∈ levels) := by decide

/-! ## The declared numbers, kept as data and labelled as such -/

/-- Information loss in PERMILLE, exact integers so nothing is rounded. THESE ARE DECLARED:
    no estimator produced them, no measurement is cited, and this file does not claim they
    describe anything. They are here so the arithmetic below is checkable, not to assert. -/
def lossPermille : Level → Nat
  | sensation     => 290
  | memory        => 180
  | pattern       => 150
  | expertise     => 110
  | synthesis     => 80
  | metacognition => 40
  | universal     => 20

def confidencePermille (l : Level) : Nat := 1000 - lossPermille l

/-- confidence = 1 − loss. TRUE BY CONSTRUCTION: confidencePermille is DEFINED as that
    subtraction, so this checks the definition unfolds, and proves nothing about cognition.
    The old file presented the same statement as a discovered theorem. -/
theorem confidence_is_one_minus_loss_by_definition :
    ∀ l ∈ levels, confidencePermille l + lossPermille l = 1000 := by decide

/-- The involution does NOT preserve the declared losses — σ maps sensation (290) to
    universal (20). Worth stating: the old file's barrier story implied a symmetry here, and
    the numbers it chose do not have it. -/
theorem declared_losses_are_not_involution_symmetric :
    lossPermille (σ sensation) ≠ lossPermille sensation := by decide

/-! ## φ, exactly — replacing the eight `≈` statements -/

def fibAux : Nat → Nat → Nat → Nat
  | 0,     a, _ => a
  | n + 1, a, b => fibAux n b (a + b)
def fib (n : Nat) : Nat := fibAux n 0 1

/-- `learning_rate_optimal = 1/φ ≈ 0.618` restated as an exact two-sided bound on a
    Fibonacci ratio, since F(n−1)/F(n) → 1/φ. An approximation is not an equality; this is
    what the old `≈ 0.618` was reaching for, and it is checkable. -/
theorem inverse_golden_ratio_bounds :
    618 * fib 21 < 1000 * fib 20 ∧ 1000 * fib 20 < 619 * fib 21 := by decide

/-- φ itself, same method. -/
theorem golden_ratio_bounds :
    1618 * fib 21 < 1000 * fib 22 ∧ 1000 * fib 22 < 1619 * fib 21 := by decide

end Harmonisation

/-
  WHY NO `decide` PROOF OF A CLAY CONJECTURE EXISTS HERE, OR ANYWHERE — machine-checked.

  This corpus contains seven files named for Clay Millennium Problems, and every theorem in them is
  proved `by decide`. It is a fair question whether one of them therefore proves a Clay conjecture.
  It is answered here rather than asserted, because the corpus has been wrong about exactly this
  before: its own Zenodo record still claims "Complete quantum proofs of all 6 Clay Millennium
  Problems ... Confidence = 1.0 achieved."

  TWO FACTS SETTLE IT, and the second is proved below.

  FIRST, WHAT THOSE THEOREMS QUANTIFY OVER. Measured, not recalled: riemann.lean quantifies over
  `[-4, -2, -1, 0, 1, 2, 3, 4, 6]`; bsd.lean over `[-2, -1, 0, 1, 2, 3, 4]`; hodge.lean over a list of
  middle Hodge types; p-vs-np.lean over a seven-element enumeration of complexity classes;
  yang-mills.lean proves `choose 4 2 = 6`. Every domain is a FINITE LIST. None of them is the
  conjecture: the Riemann Hypothesis quantifies over every non-trivial zero of ζ, P vs NP over every
  language and every machine, Navier-Stokes over every smooth initial datum. What the files prove are
  structural facts about the SETTING of each problem — that the functional equation's σ is an
  involution, that the critical line is its unique fixed point — which is worth machine-checking and
  is not the problem.

  SECOND, AND THIS IS THE PART THAT GENERALISES: `decide` cannot reach an unbounded claim at all.
  `decide` requires a `Decidable` instance, and an instance exists only when the proposition can be
  settled by a finite computation. A statement quantifying over an infinite domain has none, so such a
  proof does not merely fail to be found here — it cannot be written.

  The theorems below make the epistemic content of that checkable. A property can hold at EVERY point
  a finite check reaches and still be false, so verification up to a bound is not evidence about the
  unbounded claim — it is evidence about the bound. Raising the bound checks more cases and proves
  nothing more, which is the reason a Clay problem is hard and a `decide` proof is cheap.
-/

namespace Decidability

-- Several proofs below walk a thousand or two thousand cases, which overruns the default elaborator
-- budget. Raising it weakens nothing: `decide` still reduces the proposition in the kernel and the
-- theorems still depend on no axiom, which `#print axioms` confirms. It is also the point in
-- miniature — a bigger budget checks more cases and proves no more about the infinite claim.
set_option maxRecDepth 40000

/-- A property that holds everywhere below one thousand and fails at it. -/
def holdsBelowAThousand (n : Nat) : Bool := n != 1000

/-- VERIFIED AT EVERY POINT A FINITE CHECK REACHES — a thousand cases, decided in the kernel. -/
theorem verified_at_every_point_below_the_bound :
    (List.range 1000).all holdsBelowAThousand = true := by decide

/-- AND FALSE. The very next case refutes it. -/
theorem and_false_at_the_bound : holdsBelowAThousand 1000 = false := by decide

/-- So a finite verification does not entail the unbounded claim: here is a property verified at a
    thousand consecutive points whose universal statement is FALSE. This is the whole reason a
    `by decide` proof over a finite list is not a proof of a conjecture over an infinite domain. -/
theorem finite_verification_does_not_entail_the_universal :
    ((List.range 1000).all holdsBelowAThousand = true) ∧ (holdsBelowAThousand 1000 = false) := by
  decide

/-- RAISING THE BOUND DOES NOT HELP, and that is the point people miss. The same shape at four
    different bounds: each is verified over its whole range and each is refuted one step past it.
    A bigger bound checks more cases and proves exactly as much about the infinite claim: nothing. -/
def failsAt (k n : Nat) : Bool := n != k

theorem a_bigger_bound_proves_no_more :
    ((List.range 10).all (failsAt 10) = true ∧ failsAt 10 10 = false) ∧
    ((List.range 100).all (failsAt 100) = true ∧ failsAt 100 100 = false) ∧
    ((List.range 1000).all (failsAt 1000) = true ∧ failsAt 1000 1000 = false) ∧
    ((List.range 2000).all (failsAt 2000) = true ∧ failsAt 2000 2000 = false) := by decide

/-- What a finite check DOES establish, stated exactly: a counterexample cannot be below the bound.
    That is a real result and it is not the conjecture. -/
theorem what_a_finite_check_does_establish :
    ∀ n ∈ List.range 1000, holdsBelowAThousand n = true := by decide

/-- The corpus's Clay-named theorems quantify over finite lists of this size — nine points for the
    Riemann functional equation, seven for BSD. Recorded as arithmetic so the scale is not rhetorical:
    a nine-element check is nine cases, and the set of non-trivial zeros of ζ is not nine. -/
theorem the_clay_files_quantify_over_finite_lists :
    [(-4 : Int), -2, -1, 0, 1, 2, 3, 4, 6].length = 9 ∧
    [(-2 : Int), -1, 0, 1, 2, 3, 4].length = 7 := by decide

end Decidability

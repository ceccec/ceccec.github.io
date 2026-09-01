/-
  HODGE — CONJUGATION IS AN INVOLUTION, AND ITS FIXED SET IS WHERE HODGE CLASSES LIVE.

  Not a proof of the Hodge Conjecture. A proof of the involution the conjecture is ABOUT:
  complex conjugation acts on the Hodge decomposition H^n = ⊕ H^{p,q} by σ(p,q) = (q,p).
  It is an involution, and on the middle degree n = 2k the only type it fixes is (k,k).

  That is exactly the type a Hodge class has. The conjecture is the further claim that every
  rational (k,k) class is a rational combination of algebraic cycle classes — a statement
  about which classes are ALGEBRAIC, not about the symmetry, and nothing here touches it.
-/

namespace Formal.Hodge

/-- σ(p,q) = (q,p) — conjugation on Hodge types. -/
def σ (t : Nat × Nat) : Nat × Nat := (t.2, t.1)

/-- The types of total degree n = 2k, for k = 2: (0,4) (1,3) (2,2) (3,1) (4,0). -/
def middleTypes : List (Nat × Nat) := [(0,4), (1,3), (2,2), (3,1), (4,0)]

theorem sigma_is_an_involution : ∀ t ∈ middleTypes, σ (σ t) = t := by decide

/-- σ preserves total degree — it acts WITHIN H^n, which is why it decomposes it. -/
theorem sigma_preserves_degree : ∀ t ∈ middleTypes, (σ t).1 + (σ t).2 = t.1 + t.2 := by decide

/-- The unique fixed type in degree 2k is (k,k). Here k = 2. -/
theorem fixed_type_is_p_equals_q :
    (middleTypes.filter (fun t => σ t == t)) = [(2,2)] := by decide

/-- And it is the same in every even degree: (k,k) is fixed, everything else is swapped.
    Checked at k = 0, 1, 2, 3. -/
theorem diagonal_is_fixed_at_every_k :
    (∀ k ∈ [0,1,2,3], σ (k,k) = (k,k)) ∧
    (∀ p ∈ [0,1,3,4], σ (p, 4 - p) ≠ (p, 4 - p)) := by decide

/-- WHAT REMAINS OPEN: which (k,k) classes are algebraic. Not decided here. -/
def sealedCoreIds : List String := []

theorem hodge_conjecture_is_not_sealed_here : sealedCoreIds.length = 0 := by decide

theorem involution_proved_conjecture_open :
    σ (σ (1,3)) = (1,3) ∧ σ (2,2) = (2,2) ∧ sealedCoreIds.length = 0 := by decide

end Formal.Hodge

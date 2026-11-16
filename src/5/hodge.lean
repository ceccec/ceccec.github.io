/-
  HODGE — CONJUGATION IS AN INVOLUTION ON HODGE TYPES, AND (k,k) IS THE ONE TYPE IT FIXES IN DEGREE 2k.

  On a compact Kähler manifold the Hodge decomposition H^n(X,ℂ) = ⊕ H^{p,q} satisfies H^{q,p} = conj H^{p,q} (Hodge
  symmetry; Voisin, Hodge Theory and Complex Algebraic Geometry I, ch. 6; Griffiths–Harris ch. 0), so on TYPES conjugation
  acts by σ(p,q) = (q,p). The decomposition itself comes from harmonic theory on X, not from this map. σ is an involution,
  it fixes exactly the diagonal p = q, and in odd degree it fixes no type at all.

  A Hodge class has type (k,k) — necessary, not sufficient: the Hodge classes are the RATIONAL classes of type (k,k),
  H^{2k}(X,ℚ) ∩ H^{k,k}, and the Hodge conjecture (Deligne, the official Clay description) asks that on a smooth projective
  variety every such class be a rational combination of classes of algebraic cycles. Nothing here involves a variety,
  rational structure or a cycle; it proves the index facts about (p,q) ↦ (q,p) that the type condition rests on.
-/

namespace Formal.Hodge

/-- σ(p,q) = (q,p) — conjugation on Hodge types. -/
def σ (t : Nat × Nat) : Nat × Nat := (t.2, t.1)

/-- σ² = id on every type. -/
theorem sigma_is_an_involution : ∀ t : Nat × Nat, σ (σ t) = t := fun _ => rfl

/-- σ preserves the total degree p + q, so it acts within each H^n (the decomposition is harmonic theory's, not σ's). -/
theorem sigma_preserves_degree : ∀ t : Nat × Nat, (σ t).1 + (σ t).2 = t.1 + t.2 := by
  intro ⟨p, q⟩; show q + p = p + q; omega

/-- The fixed types are exactly the diagonal p = q. -/
theorem fixed_type_is_p_equals_q : ∀ p q : Nat, σ (p, q) = (p, q) ↔ p = q := by
  intro p q; simp only [σ, Prod.mk.injEq]
  constructor
  · intro h; exact h.2
  · intro h; exact ⟨h.symm, h⟩

/-- At every k the diagonal type (k,k) is fixed, and every off-diagonal type is swapped. -/
theorem diagonal_is_fixed_at_every_k :
    (∀ k : Nat, σ (k, k) = (k, k)) ∧ (∀ p q : Nat, p ≠ q → σ (p, q) ≠ (p, q)) := by
  refine ⟨fun _ => rfl, fun p q hpq h => hpq ((fixed_type_is_p_equals_q p q).mp h)⟩

/-- In odd degree no type is fixed: p + q odd rules out p = q. -/
theorem odd_degree_has_no_fixed_type : ∀ p q : Nat, (p + q) % 2 = 1 → σ (p, q) ≠ (p, q) := by
  intro p q hodd h
  have := (fixed_type_is_p_equals_q p q).mp h
  subst this; omega

/-- The involution and its fixed diagonal, together, at every type. -/
theorem involution_fixes_the_diagonal : (∀ t : Nat × Nat, σ (σ t) = t) ∧ ∀ k : Nat, σ (k, k) = (k, k) :=
  ⟨sigma_is_an_involution, fun _ => rfl⟩

end Formal.Hodge

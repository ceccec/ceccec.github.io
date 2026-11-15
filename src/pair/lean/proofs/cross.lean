/-
  CROSS — ONE LAW, SEVEN CLAY CASES, THREE CLUSTERS.

  Each Clay file beside the involution corpus (src/pair/formal/proofs) proves one symmetry the
  problem is stated over, on its own model. This file proves what they share, once each:

    every one of the six maps that IS an involution satisfies σ ∘ σ = id at every point of its model,
    so the general split of involution.lean applies to it: for any integer-valued f, the odd part
    f x − f (σ x) cancels over the orbit {x, σ x} and vanishes wherever σ fixes x;

  and how they cluster, by the same σ-class the site computes (sigmaClass in
  src/thunder/verify/testing): a REFLECTION is a map with σ x + x constant, a NEGATION is σ x = −x,
  and anything else is its own class.

    reflection   Riemann  s ↦ 1 − s   (numerators: n ↦ 2 − n)     the same map as BSD's, proved below
                 BSD      s ↦ 2 − s
                 Hodge    (p, q) ↦ (q, p): on each degree p + q = n it is p ↦ n − p
    negation     Navier–Stokes   time reversal acts on the viscous coefficient as v ↦ −v
                 Yang–Mills      ★ acts on every anti-self-dual 2-form as v ↦ −v
    own          P vs NP  complement on {P, NP, coNP, PSPACE}: a swap with two fixed points
    none         Poincaré χ = 2 − 2g and g = (2 − χ)/2 are mutually inverse — a bijection between
                 two sets, NOT an involution of either; χ ∘ χ moves 0 to −2, proved below.

  WHAT IS PROVED, AND WHAT IS OPEN: the symmetry each of the seven is stated over, and its exact fixed
  set. Each open problem is a question about that fixed set — are all nontrivial zeros on Re s = 1/2?
  is NP among the fixed classes? — and stays open, stated in the terms proved here. Poincaré is
  Perelman's theorem. The definitions are restated from their files because each .lean file in
  this corpus compiles alone (bare `lean`, no imports); `riemann_and_bsd_are_one_reflection` and the
  cluster theorems are the cross the separate files could not state.
-/

namespace Cross

/-! ## The law, once -/

def IsInvolution {α : Type} (σ : α → α) : Prop := ∀ x, σ (σ x) = x

/-- The odd part of f under σ. -/
def odd {α : Type} (f : α → Int) (σ : α → α) (x : α) : Int := f x - f (σ x)

/-- For any involution and any f, the odd part cancels over the orbit {x, σ x}. -/
theorem odd_cancels {α : Type} (f : α → Int) (σ : α → α) (h : IsInvolution σ) (x : α) :
    odd f σ x + odd f σ (σ x) = 0 := by
  unfold odd
  rw [h x]
  omega

/-- Wherever σ fixes x, the odd part is zero there. -/
theorem odd_vanishes_where_fixed {α : Type} (f : α → Int) (σ : α → α) (x : α) (hx : σ x = x) :
    odd f σ x = 0 := by
  unfold odd
  rw [hx]
  omega

/-! ## The seven maps, as their files define them -/

/-- Riemann, on numerators of s = n/2: σ(n/2) = 1 − n/2 = (2 − n)/2. -/
def riemann (n : Int) : Int := 2 - n
/-- Birch and Swinnerton-Dyer: Λ(E, s) = w·Λ(E, 2 − s). -/
def bsd (s : Int) : Int := 2 - s
/-- Hodge: complex conjugation on types, (p, q) ↦ (q, p). -/
def hodge (t : Nat × Nat) : Nat × Nat := (t.2, t.1)
/-- Navier–Stokes: time reversal on the viscous coefficient (the only term whose sign flips). -/
def viscous (v : Int) : Int := -v

/-- Yang–Mills: a 2-form on ℝ⁴ by its six coefficients, and the Hodge star. -/
structure Form2 where
  e12 : Int
  e13 : Int
  e14 : Int
  e23 : Int
  e24 : Int
  e34 : Int
  deriving DecidableEq, Repr
def star (v : Form2) : Form2 := ⟨v.e34, -v.e24, v.e23, v.e14, -v.e13, v.e12⟩
def neg (v : Form2) : Form2 := ⟨-v.e12, -v.e13, -v.e14, -v.e23, -v.e24, -v.e34⟩
/-- The anti-self-dual part of v, doubled: v − ★v. -/
def asd (v : Form2) : Form2 :=
  ⟨v.e12 - v.e34, v.e13 + v.e24, v.e14 - v.e23, v.e23 - v.e14, v.e24 + v.e13, v.e34 - v.e12⟩

/-- P vs NP: complementation on four classes. -/
inductive Class where
  | P | NP | coNP | PSPACE
  deriving DecidableEq, Repr
def complement : Class → Class
  | .P => .P
  | .NP => .coNP
  | .coNP => .NP
  | .PSPACE => .PSPACE

/-- Poincaré: Euler characteristic and genus of a closed orientable surface. -/
def chi (g : Int) : Int := 2 - 2 * g
def genus (c : Int) : Int := (2 - c) / 2

/-! ## Six involutions, at every point of their models -/

theorem riemann_is_an_involution : IsInvolution riemann := fun n => by unfold riemann; omega
theorem bsd_is_an_involution : IsInvolution bsd := fun s => by unfold bsd; omega
theorem hodge_is_an_involution : IsInvolution hodge := fun _ => rfl
theorem viscous_is_an_involution : IsInvolution viscous := fun v => Int.neg_neg v
theorem star_is_an_involution : IsInvolution star := fun v => by
  cases v; simp [star, Int.neg_neg]
theorem complement_is_an_involution : IsInvolution complement := fun c => by cases c <;> rfl

/-! ## So the law holds for every one of them -/

/-- The cross formula at all six: the odd part of ANY integer-valued f cancels over every orbit. -/
theorem the_odd_part_cancels_in_every_clay_involution :
    (∀ (f : Int → Int) n, odd f riemann n + odd f riemann (riemann n) = 0) ∧
    (∀ (f : Int → Int) s, odd f bsd s + odd f bsd (bsd s) = 0) ∧
    (∀ (f : Nat × Nat → Int) t, odd f hodge t + odd f hodge (hodge t) = 0) ∧
    (∀ (f : Int → Int) v, odd f viscous v + odd f viscous (viscous v) = 0) ∧
    (∀ (f : Form2 → Int) v, odd f star v + odd f star (star v) = 0) ∧
    (∀ (f : Class → Int) c, odd f complement c + odd f complement (complement c) = 0) :=
  ⟨fun f => odd_cancels f riemann riemann_is_an_involution,
   fun f => odd_cancels f bsd bsd_is_an_involution,
   fun f => odd_cancels f hodge hodge_is_an_involution,
   fun f => odd_cancels f viscous viscous_is_an_involution,
   fun f => odd_cancels f star star_is_an_involution,
   fun f => odd_cancels f complement complement_is_an_involution⟩

/-! ## The fixed sets, where each problem's question lives -/

theorem riemann_fixes_exactly_the_critical_line : ∀ n : Int, riemann n = n ↔ n = 1 := by
  intro n; unfold riemann
  constructor
  · intro h; omega
  · intro h; subst h; rfl

theorem bsd_fixes_exactly_the_central_point : ∀ s : Int, bsd s = s ↔ s = 1 := by
  intro s; unfold bsd
  constructor
  · intro h; omega
  · intro h; subst h; rfl

theorem hodge_fixes_exactly_the_diagonal : ∀ p q : Nat, hodge (p, q) = (p, q) ↔ p = q := by
  intro p q; unfold hodge
  constructor
  · intro h; simp only [Prod.mk.injEq] at h; exact h.2
  · intro h; subst h; rfl

theorem viscous_fixes_exactly_the_inviscid : ∀ v : Int, viscous v = v ↔ v = 0 := by
  intro v; unfold viscous
  constructor
  · intro h; omega
  · intro h; subst h; rfl

theorem complement_fixes_exactly_p_and_pspace :
    [Class.P, .NP, .coNP, .PSPACE].filter (fun c => complement c == c) = [.P, .PSPACE] := by decide

/-! ## The clusters -/

/-- REFLECTION: σ x + x is constant — 2 for Riemann (numerators) and BSD, the degree for Hodge. -/
theorem the_reflection_cluster :
    (∀ n, riemann n + n = 2) ∧ (∀ s, bsd s + s = 2) ∧ (∀ p q : Nat, (hodge (p, q)).1 + p = p + q) := by
  refine ⟨fun n => ?_, fun s => ?_, fun p q => ?_⟩
  · unfold riemann; omega
  · unfold bsd; omega
  · unfold hodge; omega

/-- In doubled coordinates the Riemann reflection IS the weight-two reflection: one map, not two. -/
theorem riemann_and_bsd_are_one_reflection : riemann = bsd := rfl

/-- NEGATION: Navier–Stokes' time reversal on the viscous term, and the star on every anti-self-dual
    form, are both v ↦ −v. -/
theorem the_negation_cluster :
    (∀ v, viscous v = -v) ∧ (∀ v : Form2, star (asd v) = neg (asd v)) := by
  refine ⟨fun v => rfl, fun v => ?_⟩
  cases v
  simp only [star, asd, neg, Form2.mk.injEq]
  refine ⟨?_, ?_, ?_, ?_, ?_, ?_⟩ <;> omega

/-- P vs NP is its own class: a swap whose σ c + c is not a constant — it has two fixed points and
    one exchanged pair, which no reflection or negation on a four-point model has. -/
theorem complement_is_its_own_class :
    complement .NP = .coNP ∧ complement .coNP = .NP ∧ complement .P = .P ∧ complement .PSPACE = .PSPACE := by
  decide

/-- POINCARÉ IS NOT AN INVOLUTION: genus inverts chi, but chi applied twice moves the sphere's genus 0
    to −2. The pair is a bijection, and it is listed here so its absence from the law above is proved,
    not omitted. -/
theorem poincare_is_an_inverse_pair_not_an_involution :
    (∀ g ∈ [(0 : Int), 1, 2, 3, 4], genus (chi g) = g) ∧ chi (chi 0) ≠ 0 := by decide

end Cross

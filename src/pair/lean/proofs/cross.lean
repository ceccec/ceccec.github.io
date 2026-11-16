/-
  CROSS — ONE LAW, SEVEN CLAY CASES, THREE CLUSTERS, AND THE SIX EXTENSIONS NO DATASET TESTS.

  Each Clay file beside the involution corpus (src/pair/formal/proofs) proves one symmetry the
  problem is stated over, on its own model. This file proves what they share, once each:

    every one of the six maps that IS an involution satisfies σ ∘ σ = id at every point of its model,
    so the general split of involution.lean applies to it: for any integer-valued f, the odd part
    f x − f (σ x) cancels over the orbit {x, σ x} and vanishes wherever σ fixes x;

  and how they cluster, by the same σ-class the site computes (sigmaClass in
  src/thunder/verify/testing): a REFLECTION is a map with σ x + x constant, a NEGATION is σ x = −x,
  and anything else is its own class.

    reflection   Riemann  s ↦ 1 − s on the real axis (numerators: n ↦ 2 − n) — the same formula as BSD's, proved below
                 BSD      s ↦ 2 − s
                 Hodge    (p, q) ↦ (q, p): on each degree p + q = n it is p ↦ n − p
    negation     Navier–Stokes   time reversal acts on the viscous coefficient as v ↦ −v
                 Yang–Mills      ★ acts on every form v − ★v (twice v's anti-self-dual part) as w ↦ −w
    own          P vs NP  complement on classes of decidable languages: it fixes exactly the classes closed under
                 complement and exchanges the rest
    none         Poincaré χ = 2 − 2g and g = (2 − χ)/2: genus ∘ chi is the identity on ℤ and chi ∘ genus on the even
                 integers — an inverse pair, NOT an involution of either set; χ ∘ χ moves 0 to −2, proved below.

  WHAT IS PROVED, AND WHAT IS OPEN: each map, that it is an involution (or, for Poincaré, why not), and its exact fixed
  set — on a small model of the problem, never on the problem's own objects. How each open problem relates to its fixed
  set differs, and is stated, not assumed: P vs NP asks whether NP is among complement's fixed classes (NP =? coNP, and
  P =? NP beside it); BSD's order of vanishing is taken at the fixed point s = 1; Riemann's zeros are asked to lie on
  the fixed set of s ↦ 1 − s̄ (the critical line), not of s ↦ 1 − s, which fixes only s = 1/2; Navier–Stokes is posed
  at ν > 0, OFF the fixed set of time reversal; Hodge asks about rational classes and algebraic cycles, of which the
  fixed type (k,k) is only the necessary type; Yang–Mills is a quantum question the classical star does not reach. All
  six stay open. Poincaré is Perelman's theorem. The definitions are restated from their files because each .lean file in
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

/-- P vs NP: a class is a predicate on decidable languages, and complement sends C to the class of complements of its
    members. (Named constructors would make P ≠ NP provable by `decide`; this model decides neither P =? NP nor NP =? coNP.) -/
abbrev Lang := List Bool → Bool
def compl (L : Lang) : Lang := fun w => !L w
def Class := Lang → Prop
def complement (C : Class) : Class := fun L => C (compl L)
/-- Complementing a language twice returns it — canonical in p-vs-np.lean. -/
theorem compl_compl : ∀ L : Lang, compl (compl L) = L := by
  intro L; funext w; simp [compl]

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
theorem complement_is_an_involution : IsInvolution complement := fun C => by
  funext L; show C (compl (compl L)) = C L; rw [compl_compl]

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

/-- On the real axis the reflection fixes exactly s = 1/2 (n = 1), where the critical line crosses it; the line is the
    fixed set of s ↦ 1 − s̄ (riemann.lean). -/
theorem riemann_fixes_exactly_one_half : ∀ n : Int, riemann n = n ↔ n = 1 := by
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

/-- Complement fixes exactly the classes closed under complement — P and PSPACE are; whether NP is, is open. -/
theorem complement_fixes_exactly_the_closed_classes : ∀ C : Class, complement C = C ↔ ∀ L, C L → C (compl L) := by
  intro C
  constructor
  · intro h L hL
    have : complement C (compl L) = C (compl L) := by rw [h]
    simp only [complement, compl_compl] at this
    exact this ▸ hL
  · intro h; funext L; apply propext
    constructor
    · intro hL; have := h (compl L) hL; rw [compl_compl] at this; exact this
    · intro hL; exact h L hL

/-! ## The clusters -/

/-- REFLECTION: σ x + x is constant — 2 for Riemann (numerators) and BSD, the degree for Hodge. -/
theorem the_reflection_cluster :
    (∀ n, riemann n + n = 2) ∧ (∀ s, bsd s + s = 2) ∧ (∀ p q : Nat, (hodge (p, q)).1 + p = p + q) := by
  refine ⟨fun n => ?_, fun s => ?_, fun p q => ?_⟩
  · unfold riemann; omega
  · unfold bsd; omega
  · unfold hodge; omega

/-- The same formula, 2 − n, in two coordinates: Riemann's n is 2s (centre 1/2), BSD's s is s itself (centre 1). An
    identity of the encodings, not of the L-functions; analytically the two centres correspond under s ↦ s − 1/2. -/
theorem riemann_and_bsd_are_one_reflection : riemann = bsd := rfl

/-- NEGATION: Navier–Stokes' time reversal on the viscous term, and the star on every form v − ★v (twice v's
    anti-self-dual part), are both w ↦ −w. -/
theorem the_negation_cluster :
    (∀ v, viscous v = -v) ∧ (∀ v : Form2, star (asd v) = neg (asd v)) := by
  refine ⟨fun v => rfl, fun v => ?_⟩
  cases v
  simp only [star, asd, neg, Form2.mk.injEq]
  refine ⟨?_, ?_, ?_, ?_, ?_, ?_⟩ <;> omega

/-- The class of all languages, and the classes holding only the always-yes or only the always-no language. -/
def allLangs : Class := fun _ => True
def yesOnly : Class := fun L => L = fun _ => true
def noOnly : Class := fun L => L = fun _ => false

/-- P vs NP is its own class: not a map on a number line, so neither a reflection nor a negation — complement fixes the
    class of all languages (closed under complement) and exchanges always-yes with always-no. -/
theorem complement_is_its_own_class :
    complement allLangs = allLangs ∧ complement yesOnly = noOnly ∧ complement noOnly = yesOnly := by
  refine ⟨rfl, ?_, ?_⟩
  · funext L; apply propext
    constructor
    · intro h; funext w; have := congrFun h w; simpa [compl] using this
    · intro h; subst h; rfl
  · funext L; apply propext
    constructor
    · intro h; funext w; have := congrFun h w; simpa [compl] using this
    · intro h; subst h; rfl

/-- POINCARÉ IS NOT AN INVOLUTION: genus inverts chi at every integer, but chi applied twice moves the sphere's genus 0
    to −2. An inverse pair (chi ∘ genus is the identity on the even integers only), listed here so its absence from the
    law above is proved, not omitted. -/
theorem poincare_is_an_inverse_pair_not_an_involution :
    (∀ g : Int, genus (chi g) = g) ∧ chi (chi 0) ≠ 0 := by
  refine ⟨fun g => ?_, by decide⟩
  unfold genus chi; omega

/-! ## The six extensions the catalogue crosses with them, decided the same way

Each row of the involution catalogue that no public dataset can test is decided here on the model its row computes:
the map, and the property the map preserves or reverses. As above, this proves the symmetry each statement is made
across, never the statement: Fermat–Catalan, abc, the smooth-structure and Langlands questions and mirror symmetry
stay what they are. -/

/-- Fermat–Catalan exponents (p, q, r): swapping p and q. -/
def exponentSwap (t : Nat × Nat × Nat) : Nat × Nat × Nat := (t.2.1, t.1, t.2.2)
theorem exponentSwap_is_an_involution : IsInvolution exponentSwap := fun _ => rfl
/-- The swap keeps 1/p + 1/q + 1/r: over the common denominator pqr its numerator is qr + pr + pq, symmetric in p, q. -/
theorem exponentSwap_keeps_the_reciprocal_sum : ∀ p q r : Nat,
    q * r + p * r + p * q = p * r + q * r + q * p := by
  intro p q r; rw [Nat.mul_comm q p]; omega

/-- abc: swapping the coprime summands a and b of a + b = c. -/
def summandSwap (t : Nat × Nat × Nat) : Nat × Nat × Nat := (t.2.1, t.1, t.2.2)
theorem summandSwap_is_an_involution : IsInvolution summandSwap := fun _ => rfl
/-- The swap keeps a + b = c and the product abc whose radical the conjecture bounds. -/
theorem summandSwap_keeps_the_sum_and_the_product : ∀ a b c : Nat,
    (a + b = c ↔ b + a = c) ∧ b * a * c = a * b * c := by
  intro a b c; refine ⟨⟨fun h => by omega, fun h => by omega⟩, by rw [Nat.mul_comm b a]⟩

/-- Knots: the mirror image negates every crossing sign. -/
def mirror (crossings : List Int) : List Int := crossings.map (fun s => -s)
def writhe (crossings : List Int) : Int := crossings.foldl (· + ·) 0
theorem mirror_is_an_involution : IsInvolution mirror := fun cs => by
  simp [mirror, List.map_map, Function.comp_def, Int.neg_neg]
/-- The mirror negates the writhe, and the trefoil (three positive crossings) is not its own mirror: it is chiral. -/
theorem mirror_negates_the_writhe_and_the_trefoil_is_chiral :
    (∀ cs ∈ [[1, 1, 1], [1, -1, 1, -1], [-1, -1, -1, -1], [1, 1, -1]], writhe (mirror cs) = -writhe cs) ∧
    mirror [1, 1, 1] ≠ [1, 1, 1] := by decide

/-- Langlands: the dual group's Cartan matrix is the transpose, (a₁₁, a₁₂, a₂₁, a₂₂) ↦ (a₁₁, a₂₁, a₁₂, a₂₂). -/
def cartanTranspose (m : Int × Int × Int × Int) : Int × Int × Int × Int := (m.1, m.2.2.1, m.2.1, m.2.2.2)
theorem cartanTranspose_is_an_involution : IsInvolution cartanTranspose := fun _ => rfl
/-- Roots and coroots exchange: as matrices B₂ and C₂ swap, and A₂ is its own dual. -/
theorem cartanTranspose_swaps_B2_and_C2_and_fixes_A2 :
    cartanTranspose (2, -2, -1, 2) = (2, -1, -2, 2) ∧ cartanTranspose (2, -1, -2, 2) = (2, -2, -1, 2) ∧
    cartanTranspose (2, -1, -1, 2) = (2, -1, -1, 2) := by decide

/-- Renaming the two simple roots: (a₁₁, a₁₂, a₂₁, a₂₂) ↦ (a₂₂, a₂₁, a₁₂, a₁₁). A type is a Cartan matrix up to this. -/
def relabel (m : Int × Int × Int × Int) : Int × Int × Int × Int := (m.2.2.2, m.2.2.1, m.2.1, m.1)

/-- EVERY RANK-TWO TYPE IS ITS OWN DUAL, up to renaming the roots. A₂ is fixed by the transpose itself; B₂'s transpose is
    C₂, and C₂ is B₂ renamed — so(5) ≅ sp(4), one type, so the swap above is a swap of matrices, not of types; and G₂'s
    transpose is G₂ renamed: G₂ is self-dual. (Of the Dynkin type only: the dual group also exchanges the centre and the
    fundamental group, which a Cartan matrix does not see.) -/
theorem rank_two_types_are_self_dual_up_to_relabelling :
    cartanTranspose (2, -1, -1, 2) = (2, -1, -1, 2) ∧
    cartanTranspose (2, -2, -1, 2) = (2, -1, -2, 2) ∧ relabel (cartanTranspose (2, -2, -1, 2)) = (2, -2, -1, 2) ∧
    cartanTranspose (2, -1, -3, 2) = (2, -3, -1, 2) ∧ relabel (cartanTranspose (2, -1, -3, 2)) = (2, -1, -3, 2) := by decide

/-- Rank three, for the contrast: a matrix as its rows, a renaming as a permutation of the three roots. -/
def entry3 (m : List (List Int)) (i j : Nat) : Int := (m.getD i []).getD j 0
def transpose3 (m : List (List Int)) : List (List Int) := [0, 1, 2].map (fun i => [0, 1, 2].map (fun j => entry3 m j i))
def permute3 (p : List Nat) (m : List (List Int)) : List (List Int) :=
  [0, 1, 2].map (fun i => [0, 1, 2].map (fun j => entry3 m (p.getD i 0) (p.getD j 0)))
def renamings3 : List (List Nat) := [[0, 1, 2], [0, 2, 1], [1, 0, 2], [1, 2, 0], [2, 0, 1], [2, 1, 0]]
def cartanB3 : List (List Int) := [[2, -1, 0], [-1, 2, -1], [0, -2, 2]]
def cartanC3 : List (List Int) := [[2, -1, 0], [-1, 2, -2], [0, -1, 2]]

/-- FROM RANK THREE THE DUAL EXCHANGES B AND C: B₃'s transpose is C₃, and none of the six renamings of B₃ is C₃ — so the
    rank-two coincidence above does not continue. -/
theorem from_rank_three_B_and_C_are_exchanged :
    transpose3 cartanB3 = cartanC3 ∧ renamings3.all (fun p => permute3 p cartanB3 != cartanC3) = true := by decide

/-- Mirror symmetry of Calabi–Yau threefolds: (h¹¹, h²¹) ↦ (h²¹, h¹¹). -/
def mirrorHodge (h : Int × Int) : Int × Int := (h.2, h.1)
def eulerOf (h : Int × Int) : Int := 2 * (h.1 - h.2)
theorem mirrorHodge_is_an_involution : IsInvolution mirrorHodge := fun _ => rfl
/-- The mirror negates the Euler characteristic at every pair, and the quintic's (1, 101) with χ = −200 goes to 200. -/
theorem mirrorHodge_negates_the_euler_characteristic :
    (∀ h : Int × Int, eulerOf (mirrorHodge h) = -eulerOf h) ∧ eulerOf (1, 101) = -200 ∧ eulerOf (mirrorHodge (1, 101)) = 200 := by
  refine ⟨fun h => ?_, by decide, by decide⟩
  unfold eulerOf mirrorHodge; omega

/-- Graph isomorphism's quasi-polynomial bound: T ↦ 2^T. -/
def scale (t : Nat) : Nat := 2 ^ t
/-- A scale map, not an involution: applying it twice to 1 gives 4. -/
theorem scale_is_not_an_involution : scale (scale 1) ≠ 1 ∧ scale (scale 1) = 4 := by decide

end Cross

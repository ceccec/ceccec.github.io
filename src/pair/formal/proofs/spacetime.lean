/-
  LIGHT SPEED AS A FIXED POINT, AND THE INTERVAL AS AN INVARIANT.

  This corpus states every problem it touches across an involution and looks for the fixed point.
  Special relativity has the same shape and it is not a metaphor: relativistic velocity addition is a
  binary operation whose IDENTITY is 0 and whose ABSORBING element is c, and the spacetime interval is
  the quantity a boost leaves alone. Both are exact algebra and both are decided below.

  WHAT IS PROVED HERE IS ALGEBRA, NOT PHYSICS. That the composition law has c as its fixed point is a
  fact about the formula u ⊕ v = (u + v)/(1 + uv/c²). That the formula DESCRIBES NATURE is an empirical
  claim resting on Michelson–Morley, on particle accelerators, on GPS clock corrections — none of which
  is in this file and none of which a kernel can decide. Nothing here measures light, and no theorem
  below mentions an experiment. The corpus's standing boundary applies unchanged: the mathematics is
  exact and says nothing about the astrophysics.

  Natural units, c = 1. Velocities are rationals n/d with 0 < d, held as integer pairs so every claim
  stays decidable — the composition is cleared of denominators rather than divided, which is what lets
  `decide` reduce it with no axiom at all.
-/

namespace Spacetime

/-- A velocity as a fraction of c: numerator over denominator, with c = 1 meaning n = d. -/
structure Vel where
  num : Int
  den : Int
  deriving DecidableEq

/-- u ⊕ v = (u + v) / (1 + u·v), cleared of denominators: with u = a/b and v = c/d,
    the sum is (a·d + c·b) / (b·d + a·c). No division is performed anywhere. -/
def add (u v : Vel) : Vel :=
  ⟨u.num * v.den + v.num * u.den, u.den * v.den + u.num * v.num⟩

/-- Light: one unit of c. -/
def light : Vel := ⟨1, 1⟩

/-- Rest. -/
def rest : Vel := ⟨0, 1⟩

/-- Two velocities are the same speed when they are the same fraction: a·d = c·b. Returned as a Bool
    so the statements below are decidable by construction rather than by an instance search. -/
def same (u v : Vel) : Bool := u.num * v.den == v.num * u.den

/-- A sample of velocities, from rest to nine tenths of c, plus two negatives for the reverse direction. -/
def sample : List Vel :=
  [⟨0,1⟩, ⟨1,2⟩, ⟨1,3⟩, ⟨2,3⟩, ⟨3,4⟩, ⟨4,5⟩, ⟨9,10⟩, ⟨-1,2⟩, ⟨-3,4⟩, ⟨1,1⟩]

/-- LIGHT IS THE FIXED POINT OF COMPOSITION. Add any velocity to c and the result is c again — not
    approximately, not in a limit: the same fraction, exactly, at every sample. This is the sense in
    which c is not a speed among speeds but the fixed point of the operation that combines them. -/
theorem light_is_the_fixed_point : ∀ v ∈ sample, same (add light v) light = true := by decide

/-- And from the other side, because composition is not assumed commutative until it is checked. -/
theorem light_is_fixed_from_either_side : ∀ v ∈ sample, same (add v light) light = true := by decide

/-- REST IS THE IDENTITY. Adding nothing changes nothing — the other distinguished element. -/
theorem rest_is_the_identity : ∀ v ∈ sample, same (add rest v) v = true := by decide

/-- COMPOSITION IS SYMMETRIC in the two velocities, at every pair of the sample. -/
theorem composition_is_symmetric :
    ∀ u ∈ sample, ∀ v ∈ sample, same (add u v) (add v u) = true := by decide

/-- NOTHING BELOW c REACHES c BY COMPOSING WITH SOMETHING BELOW c. Checked over every ordered pair of
    the strictly-subluminal samples: the composed numerator is strictly less than its denominator, so
    the result is still below c. The barrier is arithmetic, not a limit argument. -/
def subluminal : List Vel := [⟨0,1⟩, ⟨1,2⟩, ⟨1,3⟩, ⟨2,3⟩, ⟨3,4⟩, ⟨4,5⟩, ⟨9,10⟩]

theorem below_c_composes_to_below_c :
    ∀ u ∈ subluminal, ∀ v ∈ subluminal, (add u v).num < (add u v).den := by decide

/-! ## The interval

    The spacetime interval s² = t² − x² is what a boost leaves alone. Stated on integer events and
    integer-parameterised boosts so it stays decidable: a boost by the rational β = p/q carries
    (t, x) to (q·t − p·x, q·x − p·t) up to the common factor √(q² − p²), and the interval scales by
    exactly (q² − p²) — the same factor for every event, which is the invariance. -/

def interval (t x : Int) : Int := t * t - x * x

def boostT (p q t x : Int) : Int := q * t - p * x
def boostX (p q t x : Int) : Int := q * x - p * t

def events : List (Int × Int) := [(1,0), (0,1), (2,1), (3,2), (5,3), (1,1), (4,-1), (-2,3)]
def boosts : List (Int × Int) := [(1,2), (1,3), (2,3), (3,5), (-1,2)]

/-- THE INTERVAL IS INVARIANT UP TO THE ONE COMMON FACTOR. For every event and every boost, the boosted
    interval equals the original times (q² − p²) — the same factor throughout, independent of the
    event, which is exactly what "the boost preserves the interval" means once denominators are cleared. -/
theorem the_boost_preserves_the_interval :
    ∀ e ∈ events, ∀ b ∈ boosts,
      interval (boostT b.1 b.2 e.1 e.2) (boostX b.1 b.2 e.1 e.2)
        = (b.2 * b.2 - b.1 * b.1) * interval e.1 e.2 := by decide

/-- A LIGHTLIKE EVENT STAYS LIGHTLIKE. Where the interval is zero it is zero after any boost — the
    light cone is carried to itself, which is the same fixed-point statement as the first theorem,
    seen on the events rather than on the velocities. -/
def lightlike : List (Int × Int) := [(1,1), (2,2), (3,3), (1,-1), (5,-5)]

theorem the_light_cone_is_carried_to_itself :
    ∀ e ∈ lightlike, ∀ b ∈ boosts,
      interval (boostT b.1 b.2 e.1 e.2) (boostX b.1 b.2 e.1 e.2) = 0 := by decide

/-- THE BOOST IS UNDONE BY THE REVERSE BOOST. Boosting by (p, q) and then by (−p, q) returns every event,
    scaled by the same common factor q² − p² the interval carries: with denominators cleared, the reverse
    boost IS the inverse, exactly, at every event and every boost — velocity and its negative (2026-09-14). -/
theorem the_reverse_boost_undoes_the_boost :
    ∀ e ∈ events, ∀ b ∈ boosts,
      boostT (-b.1) b.2 (boostT b.1 b.2 e.1 e.2) (boostX b.1 b.2 e.1 e.2) = (b.2 * b.2 - b.1 * b.1) * e.1 ∧
      boostX (-b.1) b.2 (boostT b.1 b.2 e.1 e.2) (boostX b.1 b.2 e.1 e.2) = (b.2 * b.2 - b.1 * b.1) * e.2 := by decide

/-- …and for EVERY event and EVERY boost, proved rather than decided: the theorem above checks eight events under
    five boosts; this holds for all integers p, q, t, x at once. Multiplying out leaves q²t − qpx + pqx − p²t, and
    the cross terms cancel because multiplication commutes. A proof, not an exhaustion — it rests on the standard
    axioms propext and Quot.sound that core's integer lemmas carry. -/
theorem the_reverse_boost_undoes_every_boost : ∀ p q t x : Int,
    boostT (-p) q (boostT p q t x) (boostX p q t x) = (q * q - p * p) * t ∧
    boostX (-p) q (boostT p q t x) (boostX p q t x) = (q * q - p * p) * x := by
  intro p q t x
  unfold boostT boostX
  have h1 : q * (p * x) = p * (q * x) := Int.mul_left_comm q p x
  have h2 : q * (p * t) = p * (q * t) := Int.mul_left_comm q p t
  have h3 : q * (q * t) = q * q * t := (Int.mul_assoc q q t).symm
  have h4 : p * (p * t) = p * p * t := (Int.mul_assoc p p t).symm
  have h5 : q * (q * x) = q * q * x := (Int.mul_assoc q q x).symm
  have h6 : p * (p * x) = p * p * x := (Int.mul_assoc p p x).symm
  simp only [Int.mul_sub, Int.sub_mul, Int.neg_mul]
  constructor <;> omega

/-! # For every event and every boost

  The theorems above decide eight events under five boosts. These hold for ALL integers, proved
  rather than decided: the sign of the interval — timelike, spacelike or null — is the same in every
  frame below c; the time order of a causal separation is absolute; a spacelike separation has a
  frame that reverses it and one that makes it simultaneous, both exhibited; and two velocities
  below c compose to one below c.

  PROVENANCE. Stated on these same three definitions in erpax (src/verify/lean/Spacetime.lean, same
  author) and ported here with the statements unchanged. Two things differ. erpax closes its
  polynomial steps with `grind`, which rests on Classical.choice; this corpus refuses that axiom, so
  every such step is redone by distributing the products and handing the linear remainder to
  `omega` — the theorems now rest on propext and Quot.sound only. And erpax's last section, on which
  rows its ledger may seal, is about that ledger and stays there. Its predicate `subluminal` is
  `belowC` here, because this file already uses that word for its list of sample velocities.
-/

/-- Distribute every product, put the factors in one order, and let `omega` read what is left as linear. -/
local macro "expand_omega" : tactic =>
  `(tactic| (simp only [Int.mul_sub, Int.sub_mul, Int.mul_add, Int.add_mul, Int.neg_mul, Int.mul_neg,
      Int.mul_assoc, Int.mul_comm, Int.mul_left_comm] at *; omega))

/-! ## 0. Two facts about squares -/

/-- Strictly inside the band (−b, b) means a strictly smaller square. -/
theorem sq_lt (a b : Int) (hl : -b < a) (hr : a < b) : a*a < b*b := by
  have hp : 0 < (b - a) * (b + a) := Int.mul_pos (by omega) (by omega)
  expand_omega

/-- A smaller square (with b positive) means inside the band. -/
theorem lt_of_sq (a b : Int) (hb : 0 < b) (h : a*a < b*b) : -b < a ∧ a < b := by
  refine ⟨?_, ?_⟩
  · by_cases hc : -b < a
    · exact hc
    · have k := Int.mul_nonneg (by omega : (0:Int) ≤ b - a) (by omega : (0:Int) ≤ -(b + a))
      exfalso; expand_omega
  · by_cases hc : a < b
    · exact hc
    · have k := Int.mul_nonneg (by omega : (0:Int) ≤ -(b - a)) (by omega : (0:Int) ≤ b + a)
      exfalso; expand_omega

/-- A physical boost β = p/q: q > 0 and |p| < q. Nothing here is a frame at or above c. -/
def belowC (p q : Int) : Prop := 0 < q ∧ -q < p ∧ p < q

/-! ## 1. The interval is invariant up to a positive scale -/

/-- For every event and every boost the interval is multiplied by q² − p², and by nothing else. -/
theorem interval_scales (p q t x : Int) :
    interval (boostT p q t x) (boostX p q t x) = (q*q - p*p) * interval t x := by
  unfold interval boostT boostX; expand_omega

/-- Below c that factor is positive. -/
theorem scale_positive (p q : Int) (h : belowC p q) : 0 < q*q - p*p := by
  obtain ⟨_, hl, hr⟩ := h
  have := sq_lt p q hl hr; omega

/-! ## 2. Causal character is absolute -/

/-- TIMELIKE STAYS TIMELIKE in every frame below c. -/
theorem timelike_invariant (p q t x : Int) (h : belowC p q) (ht : 0 < interval t x) :
    0 < interval (boostT p q t x) (boostX p q t x) := by
  have hs := scale_positive p q h
  rw [interval_scales]; exact Int.mul_pos hs ht

/-- SPACELIKE STAYS SPACELIKE: no boost makes a spacelike separation reachable. -/
theorem spacelike_invariant (p q t x : Int) (h : belowC p q) (ht : interval t x < 0) :
    interval (boostT p q t x) (boostX p q t x) < 0 := by
  have hs := scale_positive p q h
  rw [interval_scales]; exact Int.mul_neg_of_pos_of_neg hs ht

/-- The light cone is frame-independent: null in one frame is null in all. -/
theorem null_invariant (p q t x : Int) (ht : interval t x = 0) :
    interval (boostT p q t x) (boostX p q t x) = 0 := by
  rw [interval_scales, ht]; exact Int.mul_zero _

/-! ## 3. Time order -/

/-- FOR A CAUSAL SEPARATION EVERY OBSERVER BELOW c AGREES WHICH EVENT CAME FIRST. The closed cone:
    the null case |x| = t is in, because a light signal carries causation too. -/
theorem timelike_order_absolute (p q t x : Int) (h : belowC p q)
    (hfuture : 0 < t) (hcausal : x*x ≤ t*t) :
    0 < boostT p q t x := by
  obtain ⟨hq, hl, hr⟩ := h
  have hbl : -t ≤ x := by
    by_cases hc : -t ≤ x
    · exact hc
    · have k := Int.mul_pos (by omega : (0:Int) < t - x) (by omega : (0:Int) < -(t + x))
      exfalso; expand_omega
  have hbr : x ≤ t := by
    by_cases hc : x ≤ t
    · exact hc
    · have k := Int.mul_pos (by omega : (0:Int) < -(t - x)) (by omega : (0:Int) < t + x)
      exfalso; expand_omega
  -- 2(qt − px) = (q−p)(t+x) + (q+p)(t−x): both terms are ≥ 0 and, since 2t > 0, not both zero.
  have hA : 0 ≤ (q - p) * (t + x) := Int.mul_nonneg (by omega) (by omega)
  have hB : 0 ≤ (q + p) * (t - x) := Int.mul_nonneg (by omega) (by omega)
  have h3 : 0 < (q - p) * (t + x) + (q + p) * (t - x) := by
    by_cases hx0 : 0 < t + x
    · have : 0 < (q - p) * (t + x) := Int.mul_pos (by omega) hx0
      omega
    · have : 0 < (q + p) * (t - x) := Int.mul_pos (by omega) (by omega)
      omega
  unfold boostT; expand_omega

/-- FOR A SPACELIKE SEPARATION THERE IS A FRAME BELOW c IN WHICH THE ORDER REVERSES — exhibited:
    with 0 < t < x, the boost β = (2t+1)/(2x) sends Δt to −x. -/
theorem spacelike_order_reverses (t x : Int) (ht : 0 < t) (hx : t < x) :
    belowC (2*t+1) (2*x) ∧ boostT (2*t+1) (2*x) t x = -x := by
  refine ⟨⟨by omega, by omega, by omega⟩, ?_⟩
  unfold boostT; expand_omega

/-- …and a frame in which the two events are simultaneous: β = t/x sends Δt to 0. -/
theorem spacelike_simultaneous (t x : Int) (ht : 0 < t) (hx : t < x) :
    belowC t x ∧ boostT t x t x = 0 := by
  refine ⟨⟨by omega, by omega, by omega⟩, ?_⟩
  unfold boostT; expand_omega

/-! ## 4. Composition of velocities never reaches c -/

/-- β₁ ⊕ β₂ = (β₁+β₂)/(1+β₁β₂), as integer numerator and denominator. -/
def addNum (p₁ q₁ p₂ q₂ : Int) : Int := p₁*q₂ + p₂*q₁
def addDen (p₁ q₁ p₂ q₂ : Int) : Int := q₁*q₂ + p₁*p₂

/-- TWO BOOSTS BELOW c COMPOSE TO A BOOST BELOW c, for every pair — c is not approached by adding. -/
theorem velocity_addition_below_c (p₁ q₁ p₂ q₂ : Int)
    (h₁ : belowC p₁ q₁) (h₂ : belowC p₂ q₂) :
    belowC (addNum p₁ q₁ p₂ q₂) (addDen p₁ q₁ p₂ q₂) := by
  obtain ⟨a, b, c⟩ := h₁; obtain ⟨d, e, f⟩ := h₂
  -- den − num = (q₁−p₁)(q₂−p₂) and den + num = (q₁+p₁)(q₂+p₂): both positive, so |num| < den
  have hm : 0 < (q₁ - p₁) * (q₂ - p₂) := Int.mul_pos (by omega) (by omega)
  have hp : 0 < (q₁ + p₁) * (q₂ + p₂) := Int.mul_pos (by omega) (by omega)
  have hq : 0 < q₁ * q₂ := Int.mul_pos a d
  unfold belowC addNum addDen
  refine ⟨?_, ?_, ?_⟩ <;> expand_omega

end Spacetime

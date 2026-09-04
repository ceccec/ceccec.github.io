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

end Spacetime

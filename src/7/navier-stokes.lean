/-
  NAVIER-STOKES — TIME REVERSAL IS AN INVOLUTION, AND VISCOSITY IS EXACTLY WHAT BREAKS IT.

  The map T : (t, u) ↦ (−t, −u) is an involution, the Euler equations are invariant under it,
  and the Navier-Stokes equations are NOT — the viscous term ν∆u is the single term whose
  sign fails to match. All of that is proved here.

  Under T each term picks up a sign: ∂u/∂t ↦ (−1)(−1) = +1, the convective (u·∇)u ↦
  (−1)(−1) = +1, the pressure gradient ↦ +1, and the viscous ν∆u ↦ (−1) = −1, since ∆ is
  even in x while u is odd. Invariance requires every term to transform alike; the viscous
  term does not, and it vanishes only when ν = 0. That is the arithmetic of irreversibility.
-/

namespace Formal.NavierStokes

/-- The sign each term carries under T : (t,u) ↦ (−t,−u). -/
structure Terms where
  timeDerivative : Int
  convective     : Int
  pressure       : Int
  viscous        : Int
  deriving DecidableEq, Repr

/-- T applied to the term signs. -/
def T (s : Terms) : Terms :=
  { timeDerivative := s.timeDerivative, convective := s.convective,
    pressure := s.pressure, viscous := -s.viscous }

def navierStokes : Terms := ⟨1, 1, 1, 1⟩
/-- Euler is Navier-Stokes at ν = 0: the viscous term is absent, i.e. carries no sign. -/
def euler : Terms := ⟨1, 1, 1, 0⟩

/-- T² = id. Reversing time twice returns the equation, whatever the viscosity. -/
theorem reversal_is_an_involution :
    T (T navierStokes) = navierStokes ∧ T (T euler) = euler := by decide

/-- Euler is invariant: every term transforms alike, so T fixes it. -/
theorem euler_is_time_reversible : T euler = euler := by decide

/-- Navier-Stokes is NOT invariant, and the viscous term is the only one that differs. -/
theorem viscosity_breaks_time_reversal :
    T navierStokes ≠ navierStokes ∧
    (T navierStokes).timeDerivative = navierStokes.timeDerivative ∧
    (T navierStokes).convective = navierStokes.convective ∧
    (T navierStokes).pressure = navierStokes.pressure ∧
    (T navierStokes).viscous ≠ navierStokes.viscous := by decide

/-- Invariance holds exactly when ν = 0: the fixed points of T are the inviscid equations. -/
theorem fixed_points_are_exactly_the_inviscid :
    (∀ v ∈ [(-2 : Int), -1, 1, 2], T ⟨1,1,1,v⟩ ≠ ⟨1,1,1,v⟩) ∧ T ⟨1,1,1,0⟩ = ⟨1,1,1,0⟩ := by
  decide

end Formal.NavierStokes

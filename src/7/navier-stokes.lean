/-
  NAVIER-STOKES — TIME REVERSAL IS AN INVOLUTION, AND VISCOSITY IS EXACTLY WHAT BREAKS IT.

  Time reversal u′(x,t) = −u(x,−t), p′(x,t) = p(x,−t) (forcing f′(x,t) = f(x,−t)) gives, term by term, ∂ₜu′ = +(∂ₜu),
  (u′·∇)u′ = +((u·∇)u), ∇p′ = +(∇p) and νΔu′ = −(νΔu), all at (x,−t). So u′ solves the same equations with ν replaced by
  −ν: the Euler equations (ν = 0) are invariant, and Navier–Stokes with ν ≠ 0 is not. The viscous term flips because it
  is linear in u and carries no time derivative to supply the compensating sign. (Majda–Bertozzi, Vorticity and
  Incompressible Flow, ch. 1.)

  THE SIGN TABLE IS THE DEFINITION HERE, computed by hand as above: a record of the four signs, with T negating the
  viscous one. No PDE, field or derivative is represented. Failing to be time-reversible is also not the same as
  dissipation, which is the energy identity d/dt ½‖u‖² = −ν‖∇u‖² (not formalised). The Clay problem (Fefferman, the
  official description) fixes ν > 0 and asks for global smooth solutions in ℝ³ or a breakdown — off the fixed set of T,
  whose fixed points are the inviscid equations the prize excludes.
-/

namespace Formal.NavierStokes

/-- The sign each term carries under T : (t,u) ↦ (−t,−u). -/
structure Terms where
  timeDerivative : Int
  convective     : Int
  pressure       : Int
  viscous        : Int
  deriving DecidableEq, Repr

/-- T applied to the term signs: only the viscous sign flips (the hand computation above). -/
def T (s : Terms) : Terms :=
  { timeDerivative := s.timeDerivative, convective := s.convective,
    pressure := s.pressure, viscous := -s.viscous }

def navierStokes : Terms := ⟨1, 1, 1, 1⟩
/-- Euler is Navier-Stokes at ν = 0: the viscous term is absent, i.e. carries no sign. -/
def euler : Terms := ⟨1, 1, 1, 0⟩

/-- T² = id on every sign table — whatever the viscosity. -/
theorem reversal_is_an_involution : ∀ s : Terms, T (T s) = s := by
  intro ⟨a, b, c, d⟩; simp only [T, Int.neg_neg]

/-- Euler is invariant: T fixes it. -/
theorem euler_is_time_reversible : T euler = euler := by decide

/-- Navier-Stokes is NOT invariant, and the viscous term is the only one that differs. -/
theorem viscosity_breaks_time_reversal :
    T navierStokes ≠ navierStokes ∧
    (T navierStokes).timeDerivative = navierStokes.timeDerivative ∧
    (T navierStokes).convective = navierStokes.convective ∧
    (T navierStokes).pressure = navierStokes.pressure ∧
    (T navierStokes).viscous ≠ navierStokes.viscous := by decide

/-- T fixes a sign table exactly when its viscous sign is zero: the fixed points are exactly the inviscid equations. -/
theorem fixed_points_are_exactly_the_inviscid : ∀ s : Terms, T s = s ↔ s.viscous = 0 := by
  intro ⟨a, b, c, d⟩
  simp only [T, Terms.mk.injEq, true_and]
  constructor
  · intro h; omega
  · intro h; omega

end Formal.NavierStokes

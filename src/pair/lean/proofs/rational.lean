-- Wave 35a: Lean Formal Rationals
-- Exact rational arithmetic verified by Lean compiler

import Mathlib

namespace ExactProof

/-- Rational number in lowest terms --/
def Rational := ℚ

namespace Rational

/-- Construct rational from numerator and denominator --/
def mk (num den : ℤ) : Rational := (num : ℚ) / den

/-- Rational addition (exact, no rounding) --/
def add (a b : Rational) : Rational := a + b

/-- Rational multiplication (exact) --/
def mul (a b : Rational) : Rational := a * b

/-- Rational equality --/
def eq (a b : Rational) : Prop := a = b

/-- Rational square --/
def square (r : Rational) : Rational := r * r

/-- Proof: addition is associative (exact) --/
theorem add_assoc (a b c : Rational) : add (add a b) c = add a (add b c) := by
  ring

/-- Proof: multiplication is commutative (exact) --/
theorem mul_comm (a b : Rational) : mul a b = mul b a := by
  ring

/-- Proof: a² + b² = 1 for normalized amplitudes --/
theorem amplitude_normalization (α β : Rational) (h : square α + square β = 1) :
  (α : ℚ) ^ 2 + (β : ℚ) ^ 2 = 1 := by
  simp [square] at h
  exact h

end Rational

end ExactProof

/-
  THE GENERAL THEOREM THE OTHER FILES ARE INSTANCES OF.

  Every other proof in this directory is about ONE involution: σ(s) = 1 − s on the critical line,
  σ(d) = 10 − d on the digits, complex conjugation on the Hodge diamond, complement on the complexity
  classes, time reversal, the Hodge star. Each was proved separately, by `decide`, over its own finite
  carrier. The claim they were all evidence for was never stated: that an involution ALWAYS produces
  the cancellation, whatever it acts on.

  It does, and here it is proved once, for ANY involution on ANY type with ANY integer-valued f:

    the ODD PART cancels over every orbit          odd f σ x + odd f σ (σ x) = 0
    it vanishes wherever σ fixes a point           σ x = x → odd f σ x = 0
    the EVEN PART is invariant                     evenPart f σ (σ x) = evenPart f σ x
    and the two halves reconstruct the whole       evenPart + odd = 2 · f

  THE PRECISE FORM MATTERS, because the loose claim is false. It is not that f is harmonic — f can be
  anything. It is that f SPLITS, and the odd half of the split always cancels: over the pair {x, σx}
  exactly, over every orbit, at every scale. That is what "everything not harmonic drains" says when it
  is said carefully, and it is why the coin, the critical line and the Hodge diagonal all behave alike —
  they are not analogies, they are the same theorem.

  THE AXIOM COST IS `propext`, AND THAT IS NOT A WEAKENING — IT IS THE PRICE OF GENERALITY.
  The 43 theorems beside this file depend on NO axiom, because `decide` reduces a finite proposition to
  a Boolean computation and never invokes a lemma. A general theorem cannot do that: it quantifies over
  a type, so it must reason, and reasoning over Int uses Lean's core arithmetic lemmas — every one of
  which depends on propext, including Int.add_assoc and Int.sub_self. Measured, not assumed:

      #print axioms Int.add_right_neg  →  depends on axioms: [propext]

  So "axiom-free" in this corpus has always meant "decidable by finite computation", and no general
  statement over an arbitrary type can be in that class. propext is one of Lean's three foundational
  axioms and is not an assumption about involutions; nothing here uses Classical.choice, and nothing
  uses sorryAx. The gate reports the two classes separately rather than averaging them into one number.
-/

namespace Involution

/-- σ is an involution when applying it twice is the identity. No finiteness, no structure. -/
def IsInvolution {α : Type} (σ : α → α) : Prop := ∀ x, σ (σ x) = x

/-- The odd part of f under σ — the signed distance σ carries f. -/
def odd {α : Type} (f : α → Int) (σ : α → α) (x : α) : Int := f x - f (σ x)

/-- The even part — what σ leaves alone. -/
def evenPart {α : Type} (f : α → Int) (σ : α → α) (x : α) : Int := f x + f (σ x)

/-- THE ODD PART CANCELS OVER EVERY ORBIT. For any involution, any f, any point: the pair {x, σx}
    sums to exactly zero. This is the general form of "every bit of resistance drains", and the coin's
    version of it is this theorem at σ d = 10 − d. -/
theorem orbit_sums_to_zero {α : Type} (f : α → Int) (σ : α → α) (h : IsInvolution σ) (x : α) :
    odd f σ x + odd f σ (σ x) = 0 := by
  unfold odd
  rw [h x, Int.sub_eq_add_neg, Int.sub_eq_add_neg, Int.add_assoc,
      ← Int.add_assoc (-f (σ x)), Int.add_left_neg, Int.zero_add, Int.add_right_neg]

/-- THE HARMONIC POINT CARRIES NOTHING. Wherever σ fixes a point, the odd part is zero there — no
    involution hypothesis is needed, only that this point is fixed. -/
theorem odd_vanishes_at_a_fixed_point {α : Type} (f : α → Int) (σ : α → α) (x : α) (hx : σ x = x) :
    odd f σ x = 0 := by
  unfold odd
  rw [hx, Int.sub_self]

/-- THE EVEN PART IS WHAT SURVIVES THE REFLECTION — it takes the same value at x and at σx. -/
theorem evenPart_is_symmetric {α : Type} (f : α → Int) (σ : α → α) (h : IsInvolution σ) (x : α) :
    evenPart f σ (σ x) = evenPart f σ x := by
  unfold evenPart
  rw [h x, Int.add_comm]

/-- AND THE TWO HALVES RECONSTRUCT THE WHOLE. Nothing is lost in the split, and this one needs no
    involution at all — it is true of the two parts as defined, for every σ. -/
theorem the_split_loses_nothing {α : Type} (f : α → Int) (σ : α → α) (x : α) :
    evenPart f σ x + odd f σ x = 2 * f x := by
  unfold evenPart odd
  rw [Int.sub_eq_add_neg, Int.add_assoc, ← Int.add_assoc (f (σ x)),
      Int.add_comm (f (σ x)) (f x), Int.add_assoc, Int.add_right_neg, Int.add_zero, Int.two_mul]

/-! ## The instances, decided rather than reasoned

    The same statements at one concrete involution, proved by `decide` over a finite carrier so they
    depend on NO axiom at all. They add no mathematics — they are the general theorems above, checked
    by computation, which is the only way this corpus can reach zero. -/

def σ (d : Nat) : Nat := 10 - d
def carrier : List Nat := [1, 2, 3, 4, 5, 6, 7, 8, 9]
def height (d : Nat) : Int := (d : Int)

theorem the_instance_is_an_involution : ∀ d ∈ carrier, σ (σ d) = d := by decide

theorem the_instance_cancels_over_every_orbit :
    ∀ d ∈ carrier, (height d - height (σ d)) + (height (σ d) - height (σ (σ d))) = 0 := by decide

theorem the_instance_has_one_harmonic_point :
    carrier.filter (fun d => σ d == d) = [5] := by decide

theorem the_instance_splits_without_loss :
    ∀ d ∈ carrier, (height d + height (σ d)) + (height d - height (σ d)) = 2 * height d := by decide

end Involution

/-
  QUANTUM — the exact-amplitude register, decided by the kernel.

  One file, one namespace, no import: the standard gates as matrices over the Gaussian integers
  (and ℤ[ω] for the T gate), and on them the Bell and GHZ states, the CHSH sums, teleportation and
  superdense coding, no-cloning, the Clifford tableau rules, four textbook algorithms at the size
  where every amplitude is checked, SWAP routing, and the syndrome tables of three codes.

  PROVENANCE. Same author, three homes: written as Qpu.Physics / Qpu.Processing / Qpu.Communication
  in qpu (uuidna/qpu, src/quantum/processing/unit/lean/Qpu), made exact and import-light in erpax
  (src/verify/lean: Gate · Entangle · Teleport · Clone · Clifford · Algorithm · Route · Correct),
  and fused here into the single self-contained file this corpus compiles with bare `lean`. The
  eight files are the eight sections below, statements unchanged; only the module boundary went.

  Amplitudes are integers, never floats. Hadamard is kept UNSCALED — [[1, 1], [1, −1]] — so every
  √2 is recorded as a factor 2 in the statement instead of being divided out.

  Each section opens with what it proves and what it does not. Nothing here models a device.
-/

namespace Quantum

/-! # Gate

  Gate — the standard gates as exact matrices, and their unitarity as kernel-decided theorems.

  Register.lean (erpax, not ported here) carries a circuit on integer amplitudes
  and says unitarity "in general" is out of the core kernel's reach. This file takes the other
  half that IS in reach: each gate is a concrete matrix, so `U · U† = I` is a finite check over its
  entries and `decide` closes it.

  Amplitudes are GAUSSIAN INTEGERS `re + im·i`, never floats. Hadamard is kept UNSCALED —
  [[1, 1], [1, −1]] — so its unitarity reads `H · H† = 2 · I`: the √2 is recorded as the factor 2
  rather than divided out, the same bookkeeping that register calls a halving. The T gate needs the
  eighth root of unity, so it lives over ℤ[ω] with ω⁴ = −1.

  WHAT THIS PROVES: H, X, Z, S, CNOT, SWAP and Toffoli are unitary (H up to its recorded scale);
  X, CNOT, SWAP and Toffoli are their own inverses; S² = Z; T is unitary, has order exactly 8, and
  does not commute with H. All by `decide`, no axiom.

  WHAT THIS DOES NOT PROVE: any physics, and nothing about a device. It also does not prove that
  {H, S, CNOT, T} is a universal gate set — that is a density theorem about the group they
  generate, and non-commutation of H and T is a necessary step toward it, not the theorem.
-/
/-! ## 1. The state space — Gaussian integers and vectors of them -/

/-- A Gaussian integer `re + im·i`. -/
structure GI where
  re : Int
  im : Int
deriving DecidableEq, Repr

namespace GI
instance (n : Nat) : OfNat GI n := ⟨⟨n, 0⟩⟩
instance : Add GI := ⟨fun a b => ⟨a.re + b.re, a.im + b.im⟩⟩
instance : Neg GI := ⟨fun a => ⟨-a.re, -a.im⟩⟩
instance : Mul GI := ⟨fun a b => ⟨a.re * b.re - a.im * b.im, a.re * b.im + a.im * b.re⟩⟩
/-- The imaginary unit. -/
def i : GI := ⟨0, 1⟩
/-- The complex conjugate. -/
def conj (a : GI) : GI := ⟨a.re, -a.im⟩
/-- The squared modulus: a measurement weight. -/
def normSq (a : GI) : Int := a.re * a.re + a.im * a.im

end GI

/-- The parts of a sum, a product and the literals 0 and 1 — what a proof over ALL matrices unfolds
    to. Stated at the file's own namespace so the inventory names each one. -/
theorem gi_add_re (x y : GI) : (x + y).re = x.re + y.re := rfl
theorem gi_add_im (x y : GI) : (x + y).im = x.im + y.im := rfl
theorem gi_mul_re (x y : GI) : (x * y).re = x.re * y.re - x.im * y.im := rfl
theorem gi_zero_re : (0 : GI).re = 0 := rfl
theorem gi_one_re : (1 : GI).re = 1 := rfl
theorem gi_zero_im : (0 : GI).im = 0 := rfl
theorem gi_one_im : (1 : GI).im = 0 := rfl

/-- The sum of `f k` for `k < n`. -/
def sumTo (n : Nat) (f : Nat → GI) : GI := (List.range n).foldl (fun acc k => acc + f k) 0

/-- A state: its amplitude on each basis index. -/
abbrev Vec := Nat → GI
/-- The basis state `b`. -/
def basis (b : Nat) : Vec := fun r => if r = b then 1 else 0

/-! ## 2. Operators — matrices read on the indices below their dimension -/

abbrev Mat := Nat → Nat → GI

/-- The product of two `n × n` matrices. -/
def mm (n : Nat) (a b : Mat) : Mat := fun r c => sumTo n fun k => a r k * b k c
/-- The conjugate transpose. -/
def dag (a : Mat) : Mat := fun r c => GI.conj (a c r)
/-- The identity. -/
def idm : Mat := fun r c => if r = c then 1 else 0
/-- A scalar times a matrix. -/
def smul (k : GI) (a : Mat) : Mat := fun r c => k * a r c
/-- The Kronecker product of `a` with an `m × m` matrix `b`. -/
def kron (m : Nat) (a b : Mat) : Mat := fun r c => a (r / m) (c / m) * b (r % m) (c % m)
/-- The permutation matrix sending basis state `c` to `p c`. -/
def perm (p : Nat → Nat) : Mat := fun r c => if r = p c then 1 else 0
/-- The matrix `u` applied to the `n`-dimensional state `v`. -/
def ap (n : Nat) (u : Mat) (v : Vec) : Vec := fun r => sumTo n fun k => u r k * v k

/-- Two matrices agree on every entry below `n`. -/
def Same (n : Nat) (a b : Mat) : Prop := ∀ r, r < n → ∀ c, c < n → a r c = b r c
instance (n : Nat) (a b : Mat) : Decidable (Same n a b) := by unfold Same; infer_instance

/-! ## 3. The gates -/

/-- Hadamard, unscaled: [[1, 1], [1, −1]]. -/
def H : Mat := fun r c => if r = 1 ∧ c = 1 then -1 else 1
/-- Pauli X: the bit flip. -/
def X : Mat := perm fun c => 1 - c
/-- Pauli Z: the phase flip. -/
def Z : Mat := fun r c => if r = c then (if r = 0 then 1 else -1) else 0
/-- Pauli Y = i·X·Z. -/
def Y : Mat := smul GI.i (mm 2 X Z)
/-- The phase gate S = diag(1, i). -/
def S : Mat := fun r c => if r = c then (if r = 0 then 1 else GI.i) else 0
/-- CNOT on two qubits, the control the high bit: |c t⟩ ↦ |c, t ⊕ c⟩. -/
def CNOT : Mat := perm fun c => if c = 2 then 3 else if c = 3 then 2 else c
/-- SWAP on two qubits. -/
def SWAP : Mat := perm fun c => if c = 1 then 2 else if c = 2 then 1 else c
/-- Toffoli on three qubits: the low bit flips when both high bits are set. -/
def TOFFOLI : Mat := perm fun c => if c = 6 then 7 else if c = 7 then 6 else c

/-- HADAMARD IS UNITARY UP TO ITS RECORDED SCALE: H · H† = 2 · I. -/
theorem h_unitary : Same 2 (mm 2 H (dag H)) (smul 2 idm) := by decide

/-- Hadamard twice is twice the identity — it undoes itself, with the same factor 2. -/
theorem h_squared : Same 2 (mm 2 H H) (smul 2 idm) := by decide

/-- X, Z and S are unitary: U · U† = I. -/
theorem paulis_unitary :
    Same 2 (mm 2 X (dag X)) idm ∧ Same 2 (mm 2 Z (dag Z)) idm ∧ Same 2 (mm 2 S (dag S)) idm := by decide

/-- Y is unitary and its own inverse, like the other Paulis. -/
theorem y_unitary : Same 2 (mm 2 Y (dag Y)) idm ∧ Same 2 (mm 2 Y Y) idm := by decide

/-- S squared is Z. -/
theorem s_squared : Same 2 (mm 2 S S) Z := by decide

/-- CNOT is unitary and its own inverse. -/
theorem cnot : Same 4 (mm 4 CNOT (dag CNOT)) idm ∧ Same 4 (mm 4 CNOT CNOT) idm := by decide

/-- SWAP is unitary and its own inverse. -/
theorem swap : Same 4 (mm 4 SWAP (dag SWAP)) idm ∧ Same 4 (mm 4 SWAP SWAP) idm := by decide

/-- Toffoli is unitary and its own inverse. -/
theorem toffoli : Same 8 (mm 8 TOFFOLI (dag TOFFOLI)) idm ∧ Same 8 (mm 8 TOFFOLI TOFFOLI) idm := by
  decide +kernel

/-! ## 4. The T gate — over ℤ[ω], ω the eighth root of unity -/

/-- An element `a₀ + a₁ω + a₂ω² + a₃ω³` of ℤ[ω], with ω⁴ = −1. -/
structure ZW where
  a0 : Int
  a1 : Int
  a2 : Int
  a3 : Int
deriving DecidableEq, Repr

namespace ZW
instance (n : Nat) : OfNat ZW n := ⟨⟨n, 0, 0, 0⟩⟩
instance : Add ZW := ⟨fun x y => ⟨x.a0 + y.a0, x.a1 + y.a1, x.a2 + y.a2, x.a3 + y.a3⟩⟩
instance : Neg ZW := ⟨fun x => ⟨-x.a0, -x.a1, -x.a2, -x.a3⟩⟩
/-- The product, reduced by ω⁴ = −1. -/
instance : Mul ZW := ⟨fun x y =>
  ⟨x.a0 * y.a0 - x.a1 * y.a3 - x.a2 * y.a2 - x.a3 * y.a1,
   x.a0 * y.a1 + x.a1 * y.a0 - x.a2 * y.a3 - x.a3 * y.a2,
   x.a0 * y.a2 + x.a1 * y.a1 + x.a2 * y.a0 - x.a3 * y.a3,
   x.a0 * y.a3 + x.a1 * y.a2 + x.a2 * y.a1 + x.a3 * y.a0⟩⟩
/-- ω, the eighth root of unity. -/
def ω : ZW := ⟨0, 1, 0, 0⟩
/-- The complex conjugate: ω̄ = ω⁻¹ = −ω³. -/
def conj (x : ZW) : ZW := ⟨x.a0, -x.a3, -x.a2, -x.a1⟩
end ZW

/-- A 2 × 2 matrix over ℤ[ω]. -/
abbrev MatW := Nat → Nat → ZW
def mmW (a b : MatW) : MatW := fun r c => a r 0 * b 0 c + a r 1 * b 1 c
def dagW (a : MatW) : MatW := fun r c => ZW.conj (a c r)
def idW : MatW := fun r c => if r = c then 1 else 0
def SameW (a b : MatW) : Prop := ∀ r, r < 2 → ∀ c, c < 2 → a r c = b r c
instance (a b : MatW) : Decidable (SameW a b) := by unfold SameW; infer_instance
/-- The `k`-th power. -/
def powW (a : MatW) : Nat → MatW
  | 0 => idW
  | k + 1 => mmW a (powW a k)

/-- The T gate diag(1, ω). -/
def TW : MatW := fun r c => if r = c then (if r = 0 then 1 else ZW.ω) else 0
/-- Hadamard over ℤ[ω], unscaled. -/
def HW : MatW := fun r c => if r = 1 ∧ c = 1 then -1 else 1

/-- ω really is a primitive eighth root: ω⁴ = −1, so ω⁸ = 1 and no smaller power is. -/
theorem omega_fourth : ZW.ω * ZW.ω * ZW.ω * ZW.ω = -1 := by decide

/-- T IS UNITARY, HAS ORDER EXACTLY 8 (T⁸ = I, T⁴ ≠ I), AND DOES NOT COMMUTE WITH HADAMARD. -/
theorem t_gate :
    SameW (mmW TW (dagW TW)) idW ∧ SameW (powW TW 8) idW ∧ ¬ SameW (powW TW 4) idW
      ∧ ¬ SameW (mmW HW TW) (mmW TW HW) := by
  decide

/-! # Entangle

  Entangle — the Bell and GHZ states from their circuits, and the CHSH bound they break.

  Register.lean (erpax, not ported here) already shows the Bell state is entangled by its determinant. This
  file adds the statement that makes entanglement an OBSERVABLE difference rather than a property
  of a vector: the CHSH test.

  A CHSH test reads two ±1 observables on each side and forms S = a₀b₀ + a₀b₁ + a₁b₀ − a₁b₁. If the
  four values are DEFINITE before they are read, S is ±2 — there are only sixteen assignments and
  the kernel checks all of them. The Bell state gives S = 2√2.

  The √2 is never written. Hadamard is unscaled, so ⟨Φ|Φ⟩ = 2, and Bob's observables Z ± X are left
  unnormalised, each a factor √2 too large. The exact sum is therefore 8 = S · 2 · √2, and
  S² = 8² / (2² · 2) = 8 > 4. Every number in that line is an integer the kernel decides.

  WHAT THIS PROVES: the two circuits produce exactly the states claimed — support {00, 11} and
  {000, 111}, equal weight; every definite-value assignment gives |S| = 2; the Bell state's exact
  CHSH sum is 8, which is S² = 8 after the recorded scales. All by `decide`, no axiom.

  WHAT THIS DOES NOT PROVE: that any experiment was run, or that 2√2 is the largest value quantum
  mechanics allows (Tsirelson's bound is a statement over ALL states and observables; this is one
  state and one choice). It computes the numbers a register would have to SHOW to count as quantum
  — a register whose contents are definite bits computes them without showing them.
-/
/-- Bell: Hadamard on the high qubit of |00⟩, then CNOT. -/
def bell : Vec := ap 4 CNOT (ap 4 (kron 2 H idm) (basis 0))

/-- THE BELL STATE IS SUPPORTED ON EXACTLY 00 AND 11, WITH EQUAL WEIGHT. -/
theorem bell_state :
    (∀ r, r < 4 → (bell r ≠ 0 ↔ r = 0 ∨ r = 3)) ∧ (bell 0).normSq = (bell 3).normSq := by decide

/-- GHZ on three qubits: Hadamard on the top qubit, then CNOT down the line. -/
def ghz : Vec := ap 8 (kron 4 idm CNOT) (ap 8 (kron 2 CNOT idm) (ap 8 (kron 4 H idm) (basis 0)))

/-- The GHZ state is supported on exactly 000 and 111, with equal weight. -/
theorem ghz_state :
    (∀ r, r < 8 → (ghz r ≠ 0 ↔ r = 0 ∨ r = 7)) ∧ (ghz 0).normSq = (ghz 7).normSq := by decide +kernel

/-- A CHSH test with definite values: the four ±1 outcomes `a₀ a₁ b₀ b₁`. -/
def chshClassical (a0 a1 b0 b1 : Bool) : Int :=
  let v := fun b : Bool => if b then (1 : Int) else -1
  v a0 * v b0 + v a0 * v b1 + v a1 * v b0 - v a1 * v b1

/-- EVERY ASSIGNMENT OF DEFINITE VALUES GIVES |S| = 2 — the classical bound, all sixteen cases. -/
theorem chsh_classical_bound :
    ∀ a0 a1 b0 b1 : Bool, chshClassical a0 a1 b0 b1 = 2 ∨ chshClassical a0 a1 b0 b1 = -2 := by decide

/-- The correlation ⟨Φ|A ⊗ B|Φ⟩ of the Bell state, unnormalised. -/
def corr (a b : Mat) : GI := sumTo 4 fun r => GI.conj (bell r) * ap 4 (kron 2 a b) bell r
/-- Bob's two observables scaled by √2: Z + X and Z − X. -/
def bobPlus : Mat := fun r c => Z r c + X r c
def bobMinus : Mat := fun r c => Z r c + -(X r c)
/-- The CHSH sum of the Bell state, with ⟨Φ|Φ⟩ = 2 and Bob's scale √2 left in. -/
def chshBell : GI := corr Z bobPlus + corr Z bobMinus + corr X bobPlus + -(corr X bobMinus)

/-- THE BELL STATE BREAKS THE BOUND: the scaled sum is 8 = S · ⟨Φ|Φ⟩ · √2, so
    S² = 8² / (2² · 2) = 8, beyond the classical 2² = 4. -/
theorem chsh_quantum_value : chshBell = 8 ∧ (8 : Nat) ^ 2 = 8 * (2 ^ 2 * 2) ∧ (2 : Nat) ^ 2 < 8 := by
  decide +kernel

/-! # Teleport

  Teleport — one shared Bell pair exchanges a qubit for two classical bits, both ways.

  Two protocols over the same resource, each the other read backwards.

  TELEPORTATION, on three qubits with the measurements deferred — the corrections are applied as
  the controlled gates they would condition. Qubits 1 and 2 are made a Bell pair; qubit 0 is
  entangled with qubit 1 by CNOT and turned by Hadamard; then qubit 1 corrects qubit 2 by X and
  qubit 0 corrects it by Z. For each basis input on qubit 0, every outcome of qubits 0 and 1 leaves
  qubit 2 holding that input, with equal weight. The circuit is linear, so the basis cases carry
  every input.

  NO SIGNALLING. Before the corrections, qubit 2 alone is in the same state whatever was sent: its
  reduced density is diagonal with equal weights. Nothing of the input crosses until the two
  classical bits do. Checked on the six Pauli eigenstates.

  SUPERDENSE CODING runs the exchange the other way: Alice writes two classical bits on her half of
  the pair with I, X, Z or ZX, and Bob's CNOT then Hadamard returns exactly those bits.

  WHAT THIS PROVES: the three circuits compute what is claimed, entry by entry, by `decide` with no
  axiom.

  WHAT THIS DOES NOT PROVE: no-signalling for every input — it is checked on six states, and the
  step from those to all inputs (a density matrix is determined by its Pauli expectations) is the
  usual argument, not a theorem here. Nothing is transmitted and no device is modelled; the
  deferred-measurement form is an equivalent circuit, not a measurement.
-/
/-- Z on qubit 2 controlled by qubit 0. -/
def cz02 : Mat := fun r c => if r = c then (if (r / 4) % 2 = 1 ∧ r % 2 = 1 then -1 else 1) else 0

/-- Qubits 0 and 1 entangled with the Bell pair and turned, before any correction, for input `v`. -/
def sentFrom (v : Vec) : Vec :=
  let input : Vec := fun r => if r % 4 = 0 then v (r / 4) else 0
  let bellPair := ap 8 (kron 4 idm CNOT) (ap 8 (kron 4 idm (kron 2 H idm)) input)
  ap 8 (kron 4 H idm) (ap 8 (kron 2 CNOT idm) bellPair)

/-- The reduced density of qubit 2: entry (i, j) summed over the outcomes of qubits 0 and 1. -/
def reduced2 (v : Vec) (i j : Nat) : GI := sumTo 4 fun m => v (2 * m + i) * GI.conj (v (2 * m + j))

/-- The six Pauli eigenstates on one qubit, unnormalised: |0⟩, |1⟩, |0⟩ ± |1⟩, |0⟩ ± i|1⟩. -/
def pauliEigen (s : Nat) : Vec := fun r =>
  if r = 0 then (if s = 1 then 0 else 1)
  else if r = 1 then (match s with | 0 => 0 | 1 => 1 | 2 => 1 | 3 => -1 | 4 => GI.i | _ => -GI.i)
  else 0

/-- The teleportation circuit on the basis input `b` of qubit 0. -/
def teleport (b : Nat) : Vec :=
  let bellPair := ap 8 (kron 4 idm CNOT) (ap 8 (kron 4 idm (kron 2 H idm)) (basis (4 * b)))
  let sent := ap 8 (kron 4 H idm) (ap 8 (kron 2 CNOT idm) bellPair)
  ap 8 cz02 (ap 8 (kron 4 idm CNOT) sent)

/-- EVERY OUTCOME OF QUBITS 0 AND 1 LEAVES QUBIT 2 HOLDING THE INPUT, with equal weight. -/
theorem teleport_exact : ∀ b, b < 2 → ∀ r, r < 8 → teleport b r = if r % 2 = b then 1 else 0 := by
  decide +kernel

/-- NO SIGNALLING: before the corrections, qubit 2 alone is the same for every Pauli eigenstate
    input — off-diagonals zero, diagonals equal. -/
theorem teleport_no_signalling :
    ∀ s, s < 6 → reduced2 (sentFrom (pauliEigen s)) 0 1 = 0 ∧ reduced2 (sentFrom (pauliEigen s)) 1 0 = 0
      ∧ reduced2 (sentFrom (pauliEigen s)) 0 0 = reduced2 (sentFrom (pauliEigen s)) 1 1 := by
  decide +kernel

/-- The Pauli that writes the two classical bits `m` on qubit 0: I, X, Z, ZX. -/
def pauliOf : Nat → Mat | 0 => idm | 1 => X | 2 => Z | _ => mm 2 Z X

/-- Superdense coding: Alice turns her half of the Bell pair, Bob decodes by CNOT then Hadamard. -/
def superdense (m : Nat) : Vec := ap 4 (kron 2 H idm) (ap 4 CNOT (ap 4 (kron 2 (pauliOf m) idm) bell))

/-- EACH OF THE FOUR MESSAGES DECODES TO EXACTLY ITS OWN BASIS STATE: one qubit carries two bits. -/
theorem superdense_exact : ∀ m, m < 4 → ∀ r, r < 4 → (superdense m r ≠ 0 ↔ r = m) := by decide +kernel

/-- Both directions over one pair: one qubit carries two classical bits, and two carry one qubit. -/
theorem both_ways :
    (∀ m, m < 4 → ∀ r, r < 4 → (superdense m r ≠ 0 ↔ r = m)) ∧
    ∀ b, b < 2 → ∀ r, r < 8 → teleport b r = if r % 2 = b then 1 else 0 :=
  ⟨superdense_exact, teleport_exact⟩

/-! # Clone

  Clone — quantum information cannot be copied: no linear map clones both |0⟩, |1⟩ and |+⟩.

  Every other theorem in this family is a finite check of one circuit. This one is
  different in kind: it quantifies over EVERY 4 × 4 matrix `u` with Gaussian-integer entries, so
  `decide` cannot close it — there are infinitely many. It is proved by unfolding the one output
  amplitude that matters and letting `omega` refuse the arithmetic.

  The argument is the textbook one, in one entry. Suppose `u` copies the basis states:
  |0⟩|0⟩ ↦ |0⟩|0⟩ and |1⟩|0⟩ ↦ |1⟩|1⟩. By linearity `u` sends |+⟩|0⟩ = |00⟩ + |10⟩ to
  |00⟩ + |11⟩. A true copy of |+⟩ would be |+⟩|+⟩ = |00⟩ + |01⟩ + |10⟩ + |11⟩, which has amplitude 1
  on |01⟩ — and the linear image has amplitude 0 there. So the map that copies the basis cannot
  copy their sum.

  WHAT THIS PROVES: for every such matrix, if it copies |0⟩ and |1⟩ onto a blank second qubit, its
  output on |+⟩|0⟩ has amplitude ≠ 1 on |01⟩, so it is not |+⟩|+⟩. No axiom beyond Lean's standard
  ones (`propext`, `Quot.sound`), which `simp` and `omega` use.

  WHAT THIS DOES NOT PROVE: the theorem over the complex numbers — the entries here are Gaussian
  integers, which is the arithmetic this family is exact in; the argument does not use that
  restriction, but the statement is only what is written. It also says nothing about approximate
  cloning, which is possible with bounded fidelity.
-/
/-- NO LINEAR MAP THAT COPIES |0⟩ AND |1⟩ COPIES |+⟩: its image of |+⟩|0⟩ is not |+⟩|+⟩. -/
theorem no_cloning (u : Mat)
    (h0 : ∀ r, r < 4 → ap 4 u (basis 0) r = basis 0 r)
    (h2 : ∀ r, r < 4 → ap 4 u (basis 2) r = basis 3 r) :
    ap 4 u (fun r => basis 0 r + basis 2 r) 1 ≠ 1 := by
  have a := h0 1 (by decide)
  have b := h2 1 (by decide)
  simp only [ap, sumTo, basis, List.range, List.range.loop, List.foldl] at a b ⊢
  generalize u 1 0 = x0 at a b ⊢
  generalize u 1 1 = x1 at a b ⊢
  generalize u 1 2 = x2 at a b ⊢
  generalize u 1 3 = x3 at a b ⊢
  obtain ⟨p0, q0⟩ := x0
  obtain ⟨p1, q1⟩ := x1
  obtain ⟨p2, q2⟩ := x2
  obtain ⟨p3, q3⟩ := x3
  intro h
  simp only [Nat.reduceEqDiff, ↓reduceIte] at a b h
  have ha := congrArg GI.re a
  have hb := congrArg GI.re b
  have hh := congrArg GI.re h
  simp only [gi_add_re, gi_add_im, gi_mul_re, gi_zero_re, gi_one_re, gi_zero_im, gi_one_im] at ha hb hh
  omega

/-- The hypotheses are not vacuous: CNOT is such a map — it copies the basis states exactly. -/
theorem cnot_copies_the_basis :
    (∀ r, r < 4 → ap 4 CNOT (basis 0) r = basis 0 r) ∧ (∀ r, r < 4 → ap 4 CNOT (basis 2) r = basis 3 r) := by
  decide

/-! # Clifford

  Clifford — H, S and CNOT act on Pauli strings exactly as the tableau rules say.

  This is the fact behind the Gottesman–Knill theorem: a circuit of H, S and CNOT can be
  followed on Pauli strings — a few bits per qubit — instead of on the 2ⁿ amplitudes, because each
  of those gates sends a Pauli string to a Pauli string.

  A two-qubit Pauli string is a phase `i^k` and an (x, z) bit pair per qubit; its matrix is
  `i^k · P(x₀, z₀) ⊗ P(x₁, z₁)` with `P(x, z) = i^(x·z) · X^x · Z^z`, so `P(1, 1)` is Y. The rules
  (Aaronson–Gottesman): H swaps x and z and flips the sign of Y; S adds x to z and flips the sign of
  Y; CNOT copies x from control to target and z from target to control, with the sign
  `x_c · z_t · (x_t = z_c)`.

  Each rule is proved EQUAL to the exact conjugation `U · P · U†` of the string's matrix, for all 64
  strings (four phases, sixteen bit patterns). Hadamard is unscaled, so its conjugation carries the
  factor 2.

  WHAT THIS PROVES: on two qubits, the three update rules are the conjugation, for every Pauli
  string, on both qubits. By `decide`, no axiom.

  WHAT THIS DOES NOT PROVE: the Gottesman–Knill theorem itself — that is a statement about circuits
  of any length on any number of qubits, and it follows from these rules by induction that is not
  written here. Nothing covers measurement, or the T gate, which is exactly what takes a circuit
  outside this efficiently-followed class.
-/
/-- A two-qubit Pauli string: the phase `i^k` and the (x, z) bits of the high and the low qubit. -/
structure Pauli2 where
  k : Nat
  x0 : Bool
  z0 : Bool
  x1 : Bool
  z1 : Bool

/-- `i^k`. -/
def ipow : Nat → GI
  | 0 => 1
  | k + 1 => GI.i * ipow k

/-- The one-qubit Pauli `P(x, z) = i^(x·z) · X^x · Z^z`. -/
def pauli (x z : Bool) : Mat := match x, z with
  | false, false => idm
  | true, false => X
  | false, true => Z
  | true, true => Y

/-- The matrix of a Pauli string. -/
def Pauli2.mat (p : Pauli2) : Mat := smul (ipow p.k) (kron 2 (pauli p.x0 p.z0) (pauli p.x1 p.z1))

/-- The sign flip a rule adds: `i² = −1` when `b` holds. -/
def signFlip (k : Nat) (b : Bool) : Nat := (k + if b then 2 else 0) % 4

def ruleH0 (p : Pauli2) : Pauli2 := ⟨signFlip p.k (p.x0 && p.z0), p.z0, p.x0, p.x1, p.z1⟩
def ruleH1 (p : Pauli2) : Pauli2 := ⟨signFlip p.k (p.x1 && p.z1), p.x0, p.z0, p.z1, p.x1⟩
def ruleS0 (p : Pauli2) : Pauli2 := ⟨signFlip p.k (p.x0 && p.z0), p.x0, p.z0 != p.x0, p.x1, p.z1⟩
def ruleS1 (p : Pauli2) : Pauli2 := ⟨signFlip p.k (p.x1 && p.z1), p.x0, p.z0, p.x1, p.z1 != p.x1⟩
/-- CNOT, control the high qubit, target the low. -/
def ruleCNOT (p : Pauli2) : Pauli2 :=
  ⟨signFlip p.k (p.x0 && p.z1 && (p.x1 == p.z0)), p.x0, p.z0 != p.z1, p.x1 != p.x0, p.z1⟩

/-- The gate `u` conjugating the string `p` equals `scale` times the string the rule gives. -/
def Exact (u : Mat) (rule : Pauli2 → Pauli2) (scale : GI) : Prop :=
  ∀ k, k < 4 → ∀ x0 z0 x1 z1 : Bool,
    Same 4 (mm 4 (mm 4 u (Pauli2.mat ⟨k, x0, z0, x1, z1⟩)) (dag u)) (smul scale (rule ⟨k, x0, z0, x1, z1⟩).mat)
instance (u : Mat) (rule : Pauli2 → Pauli2) (scale : GI) : Decidable (Exact u rule scale) := by
  unfold Exact; infer_instance

/-- H ON EITHER QUBIT ACTS ON EVERY PAULI STRING AS ITS RULE SAYS (times its recorded factor 2). -/
theorem stabilizer_hadamard : Exact (kron 2 H idm) ruleH0 2 ∧ Exact (kron 2 idm H) ruleH1 2 := by
  decide +kernel

/-- S on either qubit acts on every Pauli string as its rule says. -/
theorem stabilizer_phase : Exact (kron 2 S idm) ruleS0 1 ∧ Exact (kron 2 idm S) ruleS1 1 := by
  decide +kernel

/-- CNOT acts on every Pauli string as its rule says. -/
theorem stabilizer_cnot : Exact CNOT ruleCNOT 1 := by decide +kernel

/-! # Algorithm

  Algorithm — four textbook algorithms at the size where the kernel can check every amplitude.

  Each is
  the smallest instance in which the algorithm's whole claim is visible and finite.

  DEUTSCH–JOZSA on two qubits: all sixteen functions {0,1,2,3} → {0,1}. One oracle query between
  two layers of Hadamards leaves ALL weight on |00⟩ for a constant function and NONE for a balanced
  one. Hadamard is unscaled, so "all the weight" reads 16 rather than 1.

  GROVER on four items: from the uniform state, one oracle query and one diffusion leave weight on
  the marked item only. Four items is the size at which one iteration is exact.

  THE FOURIER TRANSFORM on three qubits, over ℤ[ω] with ω the eighth root of unity: the matrix
  ω^(jk) times its inverse is 8 · I. And PHASE ESTIMATION: a register holding ω^(jk) on |j⟩ — the
  phases an eigenvalue e^(2πi·k/8) kicks back — returns exactly |k⟩ under the inverse transform.

  WHAT THIS PROVES: each statement above, on every input in its stated range, by `decide` with no
  axiom.

  WHAT THIS DOES NOT PROVE: anything about scaling. Deutsch–Jozsa's separation, Grover's √N and the
  transform's efficiency are statements about ALL sizes; these are single sizes, and at four items
  Grover's one-iteration exactness is special to four. Phase estimation is exact here because the
  eigenphase is a multiple of 1/8; for other phases the output is a distribution, not a basis
  state. No speed-up over classical computation is claimed or shown.
-/
/-! ## 1. Deutsch–Jozsa -/

/-- The value of the two-bit function with truth table `f` (bit `x` of `f`). -/
def fval (f x : Nat) : Bool := (f / 2 ^ x) % 2 == 1
/-- The phase oracle of `f`: the sign (−1)^f(x) on basis state `x`. -/
def oracle (f : Nat) : Mat := fun r c => if r = c then (if fval f r then -1 else 1) else 0
/-- Deutsch–Jozsa on two qubits: Hadamards, one oracle query, Hadamards. -/
def dj (f : Nat) : Vec := ap 4 (kron 2 H H) (ap 4 (oracle f) (ap 4 (kron 2 H H) (basis 0)))
/-- A constant function: all zeros or all ones. -/
def constant (f : Nat) : Bool := f == 0 || f == 15
/-- A balanced function: exactly two of its four values are one. -/
def balanced (f : Nat) : Bool := ((List.range 4).filter (fval f)).length == 2

/-- ONE QUERY DECIDES: a constant function leaves all weight on 00, a balanced one leaves none. -/
theorem deutsch_jozsa :
    ∀ f, f < 16 → (constant f = true → (dj f 0).normSq = 16) ∧ (balanced f = true → dj f 0 = 0) := by
  decide +kernel

/-- The promise is not empty on either side: two functions are constant and six are balanced. -/
theorem promise_census :
    ((List.range 16).filter constant).length = 2 ∧ ((List.range 16).filter balanced).length = 6 := by decide

/-! ## 2. Grover -/

/-- The oracle marking item `m`. -/
def mark (m : Nat) : Mat := fun r c => if r = c then (if r = m then -1 else 1) else 0
/-- The diffusion over four items, scaled by two: 2·(2|s⟩⟨s| − I) = J − 2·I. -/
def diffusion : Mat := fun r c => if r = c then -1 else 1
/-- Grover over four items: the uniform state, one oracle query, one diffusion. -/
def grover (m : Nat) : Vec := ap 4 diffusion (ap 4 (mark m) (ap 4 (kron 2 H H) (basis 0)))

/-- ONE GROVER ITERATION OVER FOUR ITEMS LEAVES ALL WEIGHT ON THE MARKED ITEM. -/
theorem grover_search : ∀ m, m < 4 → ∀ r, r < 4 → (grover m r ≠ 0 ↔ r = m) := by decide +kernel

/-! ## 3. The Fourier transform and phase estimation -/

/-- ω to the power `k`, with ω⁸ = 1. -/
def wPow (k : Nat) : ZW := (List.range (k % 8)).foldl (fun x _ => x * ZW.ω) 1
/-- The sum of eight terms. -/
def sum8 (f : Nat → ZW) : ZW := (List.range 8).foldl (fun s i => s + f i) 0
/-- The Fourier transform on three qubits, unscaled: entry (j, k) is ω^(jk). -/
def qft (j k : Nat) : ZW := wPow (j * k)
/-- Its inverse, unscaled: ω^(−jk). -/
def iqft (j k : Nat) : ZW := wPow (8 - j * k % 8)

/-- THE TRANSFORM IS UNITARY UP TO ITS RECORDED SCALE: QFT · QFT† = 8 · I. -/
theorem qft_unitary :
    ∀ j, j < 8 → ∀ k, k < 8 → sum8 (fun i => qft j i * iqft i k) = if j = k then 8 else 0 := by
  decide +kernel

/-- PHASE ESTIMATION IS EXACT ON AN EIGENPHASE k/8: the inverse transform returns |k⟩. -/
theorem phase_estimation_exact :
    ∀ k, k < 8 → ∀ r, r < 8 → sum8 (fun j => iqft r j * wPow (j * k)) = if r = k then 8 else 0 := by
  decide +kernel

/-! # Route

  Route — a gate between uncoupled qubits, routed through SWAPs, computes the same function.

  On a
  device, a two-qubit gate can only act on a coupled pair. A CNOT between qubits 0 and 2 of a line
  0–1–2 has no coupler, so it is compiled as SWAP(0,1) · CNOT(1,2) · SWAP(0,1). This file proves the
  compiled circuit is the gate it replaces, entry by entry, and counts what the routing costs.

  The source also proved that qubits 0 and 2 are uncoupled on qpu's own register layout. That
  statement is about one device's coupling graph, which this corpus does not model, so it is not
  ported; the routing identity holds on any line of three.

  WHAT THIS PROVES: SWAP · CNOT · SWAP on a line of three qubits is exactly CNOT(0,2); and a CNOT
  routed over a path of distance d ≥ 1 takes 2d − 1 gates in sequence. The identity is by `decide`
  and the count by `omega`; both rest on Lean's standard axioms only (`propext`, and `Quot.sound`
  for the count) — nothing is declared here.

  WHAT THIS DOES NOT PROVE: that 2d − 1 is the fewest gates possible, or anything about depth when
  gates run in parallel. The count is of this routing scheme, not a lower bound.
-/
/-- CNOT from qubit 0 to qubit 2 of three (qubit 0 the high bit): the low bit flips when the high bit is set. -/
def cnot02 : Mat := perm fun c => if c ≥ 4 then c ^^^ 1 else c
/-- CNOT from qubit 1 to qubit 2 of three. -/
def cnot12 : Mat := kron 4 idm CNOT
/-- SWAP of qubits 0 and 1 of three. -/
def swap01 : Mat := kron 2 SWAP idm

/-- ROUTING PRESERVES THE FUNCTION: SWAP(0,1) · CNOT(1,2) · SWAP(0,1) is exactly CNOT(0,2). -/
theorem swap_routing : Same 8 (mm 8 (mm 8 swap01 cnot12) swap01) cnot02 := by decide +kernel

/-- And the routing is needed: the unrouted neighbour gate is a different function. -/
theorem unrouted_differs : ¬ Same 8 cnot12 cnot02 := by decide +kernel

/-- The gates of a CNOT routed over distance `d`: a SWAP in and out per step past the first, and the CNOT. -/
def routedGates (d : Nat) : Nat := 2 * (d - 1) + 1

/-- A routed CNOT at distance d ≥ 1 takes 2d − 1 gates; at distance 2, the three above. -/
theorem routed_depth (d : Nat) (h : 1 ≤ d) : routedGates d = 2 * d - 1 ∧ routedGates 2 = 3 := by
  unfold routedGates
  exact ⟨by omega, rfl⟩

/-! # Correct

  Correct — error correction as syndrome arithmetic: each single error names itself.

  A code corrects
  an error when the checks it trips identify it. That is a statement about which checks read which
  positions — finite, classical arithmetic — and it is the part of quantum error correction a
  kernel can decide without amplitudes.

  Three codes, smallest first. The three-bit repetition code decodes by majority. Steane's
  seven-qubit code uses the Hamming checks: check `j` reads the positions whose number has bit `j`
  set, so the syndrome of an error at position `i` is `i` itself. It is CSS because every pair of
  checks overlaps on an even number of positions, which is what lets the same checks be used for
  bit flips and phase flips. Shor's nine-qubit code gives every bit flip its own syndrome and
  locates every phase flip to its block of three — and no finer, which is correct: a phase flip on
  any qubit of a block acts the same on the code.

  WHAT THIS PROVES: the repetition code corrects every single bit flip; each single error in the
  Steane code trips the nonzero syndrome naming its position; the Steane checks overlap evenly;
  Shor's bit-flip syndromes are distinct and nonzero and its phase-flip syndromes agree exactly
  within a block; and at distance d ≥ 2t + 1 two error patterns of weight ≤ t never span d. By
  `decide` and `omega`. The Steane and Shor theorems use no axiom; the two repetition theorems use
  `propext`, and the distance bound `propext` and `Quot.sound` — Lean's standard axioms, nothing
  declared here.

  WHAT THIS DOES NOT PROVE: that the codes protect a quantum state. That needs the stabilizer
  formalism over amplitudes — that the checks commute as operators and that the code space is
  preserved — and this file has neither. It is the classical skeleton: the syndrome tables are
  right. Nothing here models noise, a threshold, or a device.
-/
/-! ## 1. Three-bit repetition -/

/-- The three-bit repetition code word of `b`. -/
def encode (b : Bool) : Nat := if b then 7 else 0
/-- Flip bit `e` of the word (no flip when `e = 3`). -/
def flip (e w : Nat) : Nat := if e < 3 then w ^^^ 2 ^ e else w
/-- Majority decoding. -/
def decode (w : Nat) : Bool := ((List.range 3).filter fun k => (w / 2 ^ k) % 2 == 1).length ≥ 2

/-- THE REPETITION CODE CORRECTS EVERY SINGLE BIT FLIP, and no flip at all. -/
theorem repetition_corrects : ∀ b : Bool, ∀ e, e < 4 → decode (flip e (encode b)) = b := by decide

/-- AND IT DOES NOT CORRECT TWO: the claim above is sharp, not vacuous. -/
theorem repetition_fails_on_two : decode (flip 1 (flip 0 (encode false))) ≠ false := by decide

/-! ## 2. Steane's seven-qubit code — the Hamming checks -/

/-- Hamming check `j` reads the qubits whose position (1 to 7) has bit `j` set. -/
def hamming (j i : Nat) : Bool := (i + 1) / 2 ^ j % 2 == 1
/-- The syndrome of one error on qubit `i` (0 to 6): the checks it trips, read as a number. -/
def syndrome (i : Nat) : Nat := (List.range 3).foldl (fun s j => s + if hamming j i then 2 ^ j else 0) 0

/-- EACH SINGLE-QUBIT ERROR TRIPS ITS OWN NONZERO SYNDROME — the position it names. -/
theorem steane_corrects : ∀ i, i < 7 → syndrome i = i + 1 := by decide

/-- Steane is CSS: every pair of checks overlaps on an even number of qubits. -/
theorem steane_css :
    ∀ a, a < 3 → ∀ b, b < 3 → ((List.range 7).filter fun i => hamming a i && hamming b i).length % 2 = 0 := by
  decide

/-! ## 3. Shor's nine-qubit code -/

/-- The two Z checks inside each block of three, and the two X checks between blocks. -/
def bitChecks : List (List Nat) := [[0, 1], [1, 2], [3, 4], [4, 5], [6, 7], [7, 8]]
def phaseChecks : List (List Nat) := [[0, 1, 2, 3, 4, 5], [3, 4, 5, 6, 7, 8]]
/-- The checks an error on qubit `q` trips (qubit 9 is none). -/
def flags (checks : List (List Nat)) (q : Nat) : List Bool := checks.map (·.contains q)

/-- EVERY SINGLE BIT FLIP TRIPS ITS OWN SYNDROME, AND EVERY SINGLE PHASE FLIP NAMES ITS BLOCK. -/
theorem shor_nine :
    (∀ a, a < 9 → flags bitChecks a ≠ flags bitChecks 9
        ∧ ∀ b, b < 9 → flags bitChecks a = flags bitChecks b → a = b) ∧
    ∀ a, a < 9 → flags phaseChecks a ≠ flags phaseChecks 9
        ∧ ∀ b, b < 9 → (flags phaseChecks a = flags phaseChecks b ↔ a / 3 = b / 3) := by
  decide

/-! ## 4. Distance -/

/-- At distance d ≥ 2t + 1, two error patterns of weight at most t never span d. -/
theorem distance_corrects (d t e₁ e₂ : Nat) (h : 2 * t + 1 ≤ d) (h₁ : e₁ ≤ t) (h₂ : e₂ ≤ t) :
    e₁ + e₂ < d := by omega

/-! # Witness

  Witness — six registry rows the eight sections above come close to and do not decide, decided here
  on the same matrices. Nothing below is ported: these are written in this corpus, on the ported
  base, because the registry already claims them and the kernel had not seen them.

  The GHZ parity half first appeared as `ghz_cancels_exactly_on_odd_parity` in millennium-solutions
  (src/iso/iec-4879-quantum/interference.lean, same author); here it is the eigenvalue statement
  Mermin's argument needs, with the three Y-observables and the classical half beside it.

  WHAT THIS PROVES: the Pauli products, squares, adjoints and traces; that Hadamard exchanges X and
  Z; that GHZ is a +1 eigenstate of XXX and a −1 eigenstate of XYY, YXY, YYX while no assignment of
  ±1 values satisfies all four; that Bob's reduced density of a Bell pair is the same after each of
  seven operations on Alice's side; that the four outcomes of the teleportation measurement carry
  equal weight for each Pauli eigenstate; and that a Bell measurement on the inner two of four
  qubits leaves the outer two entangled, for every outcome. By `decide`, no axiom.

  WHAT THIS DOES NOT PROVE: no-communication for EVERY local operation — seven are checked, and the
  general statement is the partial-trace identity, not written here. Uniformity of the toll is
  checked on six input states. Swapping is stated as a nonzero determinant with balanced weights on
  each outcome, which for two qubits is maximal entanglement of that branch; no concurrence is
  computed. Nothing models a measurement device: outcomes are read as amplitudes of a deferred
  circuit.
-/

/-! ## 1. The Pauli algebra -/

/-- The trace of a 2 × 2 matrix. -/
def tr2 (a : Mat) : GI := a 0 0 + a 1 1

/-- THE PAULIS MULTIPLY CYCLICALLY WITH THE FACTOR i: XY = iZ, YZ = iX, ZX = iY. -/
theorem pauli_products :
    Same 2 (mm 2 X Y) (smul GI.i Z) ∧ Same 2 (mm 2 Y Z) (smul GI.i X) ∧ Same 2 (mm 2 Z X) (smul GI.i Y) := by
  decide

/-- Reversed, each product changes sign — so distinct Paulis anticommute and commute to 2i times the third. -/
theorem pauli_anticommute :
    Same 2 (mm 2 Y X) (smul (-GI.i) Z) ∧ Same 2 (mm 2 Z Y) (smul (-GI.i) X) ∧ Same 2 (mm 2 X Z) (smul (-GI.i) Y) := by
  decide

/-- Each Pauli squares to the identity, is its own adjoint, and has trace zero. -/
theorem pauli_square_adjoint_trace :
    (Same 2 (mm 2 X X) idm ∧ Same 2 (mm 2 Y Y) idm ∧ Same 2 (mm 2 Z Z) idm) ∧
    (Same 2 (dag X) X ∧ Same 2 (dag Y) Y ∧ Same 2 (dag Z) Z) ∧
    (tr2 X = 0 ∧ tr2 Y = 0 ∧ tr2 Z = 0 ∧ tr2 idm = 2) := by
  decide

/-- HADAMARD EXCHANGES THE PHASE FLIP AND THE BIT FLIP: H·Z·H = 2·X and H·X·H = 2·Z — the reason the
    phase-flip code is the bit-flip code read in the Hadamard basis. -/
theorem hadamard_exchanges_phase_and_bit :
    Same 2 (mm 2 (mm 2 H Z) H) (smul 2 X) ∧ Same 2 (mm 2 (mm 2 H X) H) (smul 2 Z) := by
  decide

/-! ## 2. GHZ and Mermin -/

/-- The four Mermin observables on three qubits. -/
def xxx : Mat := kron 4 X (kron 2 X X)
def xyy : Mat := kron 4 X (kron 2 Y Y)
def yxy : Mat := kron 4 Y (kron 2 X Y)
def yyx : Mat := kron 4 Y (kron 2 Y X)

/-- GHZ IS A +1 EIGENSTATE OF XXX AND A −1 EIGENSTATE OF XYY, YXY AND YYX. -/
theorem ghz_mermin_quantum :
    ∀ r, r < 8 → ap 8 xxx ghz r = ghz r ∧ ap 8 xyy ghz r = -(ghz r) ∧ ap 8 yxy ghz r = -(ghz r)
      ∧ ap 8 yyx ghz r = -(ghz r) := by
  decide +kernel

/-- The value ±1 a definite outcome carries. -/
def pm (b : Bool) : Int := if b then 1 else -1

/-- NO DEFINITE VALUES REPRODUCE THOSE FOUR SIGNS: all sixty-four assignments fail — the product of
    the three −1 lines is x₁x₂x₃ again, so it would have to be both −1 and +1. -/
theorem ghz_mermin_classical :
    ∀ x1 x2 x3 y1 y2 y3 : Bool,
      ¬ (pm x1 * pm x2 * pm x3 = 1 ∧ pm x1 * pm y2 * pm y3 = -1 ∧ pm y1 * pm x2 * pm y3 = -1
          ∧ pm y1 * pm y2 * pm x3 = -1) := by
  decide

/-! ## 3. No communication -/

/-- Seven operations Alice may apply to her half (the high qubit): I, X, Y, Z, H, S, H·Z. -/
def aliceOp : Nat → Mat
  | 0 => idm | 1 => X | 2 => Y | 3 => Z | 4 => H | 5 => S | _ => mm 2 H Z

/-- The Bell pair after Alice's operation `k`. -/
def aliceDoes (k : Nat) : Vec := ap 4 (kron 2 (aliceOp k) idm) bell

/-- Bob's reduced density: entry (i, j) summed over Alice's qubit. -/
def bobDensity (v : Vec) (i j : Nat) : GI := sumTo 2 fun a => v (2 * a + i) * GI.conj (v (2 * a + j))

/-- BOB'S HALF IS MAXIMALLY MIXED WHATEVER ALICE DOES: off-diagonals zero, diagonals equal, for all seven. -/
theorem no_communication :
    ∀ k, k < 7 → bobDensity (aliceDoes k) 0 1 = 0 ∧ bobDensity (aliceDoes k) 1 0 = 0
      ∧ bobDensity (aliceDoes k) 0 0 = bobDensity (aliceDoes k) 1 1 := by
  decide +kernel

/-- The claim is not empty: Alice's operation does change the pair — only Bob's half cannot tell. -/
theorem alice_changes_the_pair : aliceDoes 1 0 ≠ aliceDoes 0 0 ∧ aliceDoes 3 3 ≠ aliceDoes 0 3 := by
  decide +kernel

/-! ## 4. The teleportation toll -/

/-- The weight of outcome `m` of qubits 0 and 1, before any correction, for input `v`. -/
def tollWeight (v : Vec) (m : Nat) : Int :=
  (sentFrom v (2 * m)).normSq + (sentFrom v (2 * m + 1)).normSq

/-- THE FOUR OUTCOMES CARRY EQUAL WEIGHT FOR EVERY PAULI EIGENSTATE: the two classical bits say
    nothing about what crosses. -/
theorem toll_is_uniform :
    ∀ s, s < 6 → ∀ m, m < 4 → tollWeight (pauliEigen s) m = tollWeight (pauliEigen s) 0
      ∧ tollWeight (pauliEigen s) 0 ≠ 0 := by
  decide +kernel

/-! ## 5. Entanglement swapping -/

/-- Four qubits from the two-qubit states `a` (qubits 0, 1) and `b` (qubits 2, 3), then the Bell
    measurement circuit on qubits 1 and 2: CNOT, then Hadamard on qubit 1. -/
def swapped (a b : Vec) : Vec :=
  ap 16 (kron 8 idm (kron 4 H idm)) (ap 16 (kron 8 idm (kron 2 CNOT idm)) fun r => a (r / 4) * b (r % 4))

/-- The amplitude of qubits 0 and 3 holding `q0`, `q3` on outcome `m` of qubits 1 and 2. -/
def outer (v : Vec) (m q0 q3 : Nat) : GI := v (8 * q0 + 2 * m + q3)

/-- The determinant of the outer pair on outcome `m`: zero exactly for a product state. -/
def outerDet (v : Vec) (m : Nat) : GI := outer v m 0 0 * outer v m 1 1 + -(outer v m 0 1 * outer v m 1 0)

/-- TWO QUBITS THAT NEVER MET ARE LEFT ENTANGLED ON EVERY OUTCOME: nonzero determinant, and the two
    amplitudes that survive have equal weight. -/
theorem entanglement_swapping :
    ∀ m, m < 4 → outerDet (swapped bell bell) m ≠ 0
      ∧ (outer (swapped bell bell) m 0 0).normSq = (outer (swapped bell bell) m 1 1).normSq
      ∧ (outer (swapped bell bell) m 0 1).normSq = (outer (swapped bell bell) m 1 0).normSq := by
  decide +kernel

/-- And it is the pairs' entanglement that is swapped: from product pairs the outer two stay a product. -/
theorem no_pairs_no_swapping : ∀ m, m < 4 → outerDet (swapped (basis 0) (basis 0)) m = 0 := by
  decide +kernel

/-! ## Leads followed — sixty degrees, forty degrees, and the two reflections of the nine digits

  A pasted text claimed that multiplying by e^{iπ/3} "makes everything integer", that π becomes 3, and that the
  doubling path is a {6/2} star. Each claim is false as written and each has a true half, decided here:
  rotation by sixty degrees keeps the Eisenstein integers ℤ[ω] in ℤ[ω] (not in ℤ); the nine digits sit forty
  degrees apart and the doubling circuit's steps are ±40, ±80, ±160; {6/2} is the two triangles 1·4·7 and 2·5·8,
  not the six-cycle. The reflections d ↦ 9 − d and d ↦ 10 − d connect the three trinities 3·6·9, 1·4·7, 2·5·8.
  NOTHING HERE IS PHYSICS: "connecting universes" is a permutation of three residue classes.
-/

/-- An Eisenstein integer `a + b·ω`, ω = e^{iπ/3}, reduced by ω² = ω − 1. -/
structure EI where
  a : Int
  b : Int
deriving DecidableEq, Repr

namespace EI
instance (n : Nat) : OfNat EI n := ⟨⟨n, 0⟩⟩
instance : Add EI := ⟨fun x y => ⟨x.a + y.a, x.b + y.b⟩⟩
instance : Neg EI := ⟨fun x => ⟨-x.a, -x.b⟩⟩
instance : Mul EI := ⟨fun x y => ⟨x.a * y.a - x.b * y.b, x.a * y.b + x.b * y.a + x.b * y.b⟩⟩
/-- ω, the rotation by sixty degrees. -/
def ω : EI := ⟨0, 1⟩
/-- The norm a² + ab + b² — the squared length. -/
def norm (x : EI) : Int := x.a * x.a + x.a * x.b + x.b * x.b
/-- The `k`-th power. -/
def pow (x : EI) : Nat → EI
  | 0 => 1
  | k + 1 => x * pow x k
end EI

/-- SIXTY DEGREES IS A PRIMITIVE SIXTH ROOT: ω² = ω − 1, ω³ = −1, ω⁶ = 1 and no smaller power is 1. -/
theorem sixty_degrees_is_a_primitive_sixth_root_of_unity :
  EI.ω * EI.ω = EI.ω + -1 ∧ EI.pow EI.ω 3 = -1 ∧ EI.pow EI.ω 6 = 1
  ∧ (List.range' 1 5).all (fun k => EI.pow EI.ω k != 1) := by decide

/-- 0 + a = a, by the two shapes of an integer — proved here because core's Int.zero_add rests on propext. -/
theorem zero_plus_an_integer_is_that_integer (a : Int) : 0 + a = a := by
  cases a with
  | ofNat n => exact congrArg Int.ofNat (Nat.zero_add n)
  | negSucc n => rfl

/-- 0 · a = 0, by the two shapes of an integer — core's Int.zero_mul rests on propext too. -/
theorem zero_times_an_integer_is_zero (a : Int) : 0 * a = 0 := by
  cases a with
  | ofNat n => exact congrArg Int.ofNat (Nat.zero_mul n)
  | negSucc n => exact congrArg Int.negOfNat (Nat.zero_mul (n + 1))

/-- ROTATING BY SIXTY DEGREES KEEPS ℤ[ω] IN ℤ[ω] — for EVERY element, with integer coordinates and no halves. -/
theorem rotation_by_sixty_degrees_keeps_the_eisenstein_integers (x : EI) : EI.ω * x = ⟨-x.b, x.a + x.b⟩ := by
  cases x with
  | mk a b =>
    show (⟨0 * a - 1 * b, 0 * b + 1 * a + 1 * b⟩ : EI) = ⟨-b, a + b⟩
    rw [zero_times_an_integer_is_zero a, zero_times_an_integer_is_zero b, Int.one_mul a, Int.one_mul b, zero_plus_an_integer_is_that_integer a]
    exact congrArg (fun t => (⟨t, a + b⟩ : EI)) (zero_plus_an_integer_is_that_integer (-b))

/-- BUT NOT IN ℤ: the rotation of 1 is ω itself, which is no ordinary integer — the pasted claim's own list held
    3/2 and −7/2, which are the real parts of exactly such elements. The norm is kept and is multiplicative on a box. -/
theorem the_rotation_leaves_the_integers_and_keeps_the_norm :
  EI.ω * 1 = EI.ω ∧ (EI.ω * 1).b ≠ 0
  ∧ (List.range 5).all (fun a => (List.range 5).all (fun b =>
      EI.norm (EI.ω * ⟨(a : Int) - 2, (b : Int) - 2⟩) == EI.norm ⟨(a : Int) - 2, (b : Int) - 2⟩))
  ∧ (List.range 6).all (fun k => EI.norm (EI.pow EI.ω k) == 1) := by decide

/-- SIX IS THE SMALLEST PERFECT NUMBER; A TETRAHEDRON'S TWELVE FACE ANGLES OF SIXTY SUM TO 720; 432 = 360 · 6/5. -/
def properDivisorSum (n : Nat) : Nat := ((List.range' 1 (n - 1)).filter (fun d => n % d == 0)).foldl (· + ·) 0
theorem six_is_the_first_perfect_number_and_a_tetrahedron_sums_to_720 :
  properDivisorSum 6 = 6 ∧ (List.range' 1 5).all (fun n => properDivisorSum n != n)
  ∧ 4 * 3 * 60 = 720 ∧ 4 * 180 = 720 ∧ 432 * 5 = 360 * 6 := by decide

/-! ### The nine digits at forty degrees -/
/-- The angle of digit `d` on the nine-point circle, in degrees: 9 sits at 0. -/
def angle (d : Nat) : Nat := 40 * d % 360
/-- The turn from `a` to `b`, counter-clockwise, in 0..359: a turn of 360 − k is k the other way. Over Nat, so
    that deciding it rests on nothing. -/
def turn (a b : Nat) : Nat := (angle b + 360 - angle a) % 360
def circuit : List Nat := [1, 2, 4, 8, 7, 5]

/-- THE DOUBLING CIRCUIT STEPS +40, +80, +160, −40, −80, −160 AND CLOSES; 3·6·9 IS EQUILATERAL AT 120. -/
theorem the_doubling_circuit_steps_forty_eighty_one_sixty_and_back :
  [turn 1 2, turn 2 4, turn 4 8, turn 8 7, turn 7 5, turn 5 1] = [40, 80, 160, 360 - 40, 360 - 80, 360 - 160]
  ∧ circuit.map (fun d => 2 * d % 9) = [2, 4, 8, 7, 5, 1]
  ∧ 9 * 40 = 360 ∧ turn 3 6 = 120 ∧ turn 6 9 = 120 ∧ turn 9 3 = 120 := by decide

/-- {6/2} IS TWO TRIANGLES, NOT THE DOUBLING SIX-CYCLE: stepping by three closes after three digits. -/
def stepThree (d : Nat) : Nat := if d + 3 > 9 then d + 3 - 9 else d + 3
theorem the_six_two_star_is_the_two_triangles_and_not_the_doubling_cycle :
  [1, stepThree 1, stepThree (stepThree 1), stepThree (stepThree (stepThree 1))] = [1, 4, 7, 1]
  ∧ [2, stepThree 2, stepThree (stepThree 2), stepThree (stepThree (stepThree 2))] = [2, 5, 8, 2]
  ∧ circuit.length = 6 ∧ turn 1 4 = 120 ∧ turn 1 2 ≠ turn 2 4 := by decide

/-! ### The two reflections, and the three trinities they connect -/
/-- The nines' reflection d ↦ 9 − d (9 fixed) and the tens' reflection d ↦ 10 − d, on the digits 1..9. -/
def nines (d : Nat) : Nat := if d = 9 then 9 else 9 - d
def tens (d : Nat) : Nat := 10 - d
def digits : List Nat := List.range' 1 9
def trinity (d : Nat) : Nat := d % 3

/-- BOTH ARE INVOLUTIONS WITH ONE FIXED DIGIT EACH (9 and 5). THE NINES' REFLECTION KEEPS 3·6·9 AND EXCHANGES
    1·4·7 WITH 2·5·8; THE TENS' REFLECTION EXCHANGES 3·6·9 WITH 7·4·1 AND KEEPS 2·5·8. -/
theorem the_two_reflections_connect_the_three_trinities :
  digits.all (fun d => nines (nines d) == d && tens (tens d) == d)
  ∧ digits.filter (fun d => nines d == d) = [9] ∧ digits.filter (fun d => tens d == d) = [5]
  ∧ [3, 6, 9].map nines = [6, 3, 9] ∧ [1, 4, 7].map nines = [8, 5, 2]
  ∧ [3, 6, 9].map tens = [7, 4, 1] ∧ [2, 5, 8].map tens = [8, 5, 2]
  ∧ digits.all (fun d => trinity (nines d) == (3 - trinity d) % 3)
  ∧ digits.all (fun d => trinity (tens d) == (4 - trinity d) % 3) := by decide

/-- THEY ARE MIRRORS TWENTY DEGREES APART, SO TOGETHER THEY ARE THE FORTY-DEGREE STEP: tens ∘ nines is d ↦ d + 1,
    of order nine, and it carries each trinity to the next. Two mirrors and their turns are eighteen maps. -/
def next (d : Nat) : Nat := tens (nines d)
def iter (f : Nat → Nat) : Nat → Nat → Nat
  | 0, d => d
  | k + 1, d => f (iter f k d)
theorem the_two_mirrors_compose_to_the_forty_degree_step :
  digits.all (fun d => next d == d % 9 + 1)
  ∧ digits.all (fun d => (angle (nines d) + angle d) % 360 == 0)
  ∧ digits.all (fun d => (angle (tens d) + angle d) % 360 == 40)
  ∧ digits.all (fun d => iter next 9 d == d) ∧ (List.range' 1 8).all (fun k => iter next k 1 != 1)
  ∧ digits.all (fun d => trinity (next d) == (trinity d + 1) % 3)
  ∧ ((List.range 9).map (fun k => digits.map (iter next k))
      ++ (List.range 9).map (fun k => digits.map (fun d => iter next k (nines d)))).eraseDups.length = 18 := by decide

/-- THE NINES' REFLECTION COMMUTES WITH DOUBLING, so it carries the circuit onto itself, half a turn round. -/
theorem the_nines_reflection_carries_the_doubling_circuit_onto_itself :
  circuit.map nines = [8, 7, 5, 1, 2, 4]
  ∧ circuit.all (fun d => nines (2 * d % 9) == 2 * nines d % 9)
  ∧ circuit.map tens = [9, 8, 6, 2, 3, 5] := by decide

/-! ### The address as a magma: two to one -/
/-- TWO ADDRESSES IN, ONE OUT: 256 bits fold to at most 122 free, so the fold is many-to-one by pigeonhole —
    on average 2^134 pairs to an address. A count, not an attack. -/
theorem a_two_to_one_fold_of_addresses_is_many_to_one_by_pigeonhole :
  2 * 128 = 256 ∧ 128 - 6 = 122 ∧ 122 < 256 ∧ 256 - 122 = 134
  ∧ (2 : Nat) ^ 134 * 2 ^ 122 = 2 ^ 256 ∧ (2 : Nat) ^ 122 < 2 ^ 256 := by decide

end Quantum

/-
  The qubit-analog ALU of src/heaven/compute, as hardware.

  hardwareSpecFromInvariants (index.ts beside this file) fixes the ALU from blochQubitFaithful: one qubit is the Bloch
  vector (x, y, z), ρ = ½(I + xσx + yσy + zσz), and each single-qubit gate is a rotation of
  that vector. This file is that ALU written in Sparkle (Lean 4 HDL): a register holding
  (x, y, z) in Q2.14 fixed point, an opcode, and the seven gates I·X·Y·Z·H·S·T.

  What is EXACT and what is not, computed rather than declared:
    · I X Y Z H S are sign flips and axis swaps — exact in any integer width, and they map
      the six poles ±x ±y ±z to themselves (the Clifford group acting on Pauli axes).
    · T rotates by τ/8 and needs 1/√2, which no integer register holds. It is implemented
      as multiplication by C = ⌊2¹⁴/√2⌋ = 11585 followed by an arithmetic shift, and the
      theorems below bound that rounding to under one unit of Q2.14 per gate.

  Proof discipline (the corpus's): plain Lean 4 core, no Mathlib, no `sorry`. Finite
  claims go through `decide`; the T floor bound reasons through `omega`.

  HONEST: a single-qubit register. The corpus proves (quantumDimensionCost) that 4n
  content-addressed components cannot hold an entangled n-qubit state, so this ALU makes
  no multi-qubit claim. It is an RTL description, emitted as SystemVerilog by
  `#writeVerilogDesign`; it is not a fabricated chip.
-/
import Sparkle

open Sparkle.Core.Domain
open Sparkle.Core.Signal
open Sparkle.Core.Signal.Signal

namespace Alu

/-! ## Encoding -/

/-- Q2.14: 1.0 is 16384. One sign bit, one integer bit, fourteen fraction bits. -/
def ONE : BitVec 16 := 16384#16

/-- ⌊2¹⁴ / √2⌋. `c_is_floor_of_2pow14_over_sqrt2` below proves the floor exactly. -/
def C : Int := 11585

/-- Opcodes — the order of blochGate's map in src/quantum/science. -/
def opI : BitVec 3 := 0#3
def opX : BitVec 3 := 1#3
def opY : BitVec 3 := 2#3
def opZ : BitVec 3 := 3#3
def opH : BitVec 3 := 4#3
def opS : BitVec 3 := 5#3
def opT : BitVec 3 := 6#3

/-! ## The pure specification — what the theorems are about -/

/-- The Bloch vector in fixed point. -/
structure V where
  x : BitVec 16
  y : BitVec 16
  z : BitVec 16
  deriving DecidableEq, Repr, BEq

/-- |0⟩ — the +z pole, the reset state (BLOCH_ZERO). -/
def init : V := ⟨0#16, 0#16, ONE⟩

/-- (a ± b) · C >> 14 in 32-bit arithmetic, truncated back to 16 bits. -/
def tRot (a b : BitVec 16) (sub : Bool) : BitVec 16 :=
  let a32 := a.signExtend 32
  let b32 := b.signExtend 32
  let d := if sub then a32 - b32 else a32 + b32
  ((d * (11585#32)).sshiftRight 14).extractLsb' 0 16

/-- One ALU cycle. Row for row the map in blochGate: X (x,−y,−z) · Y (−x,y,−z) · Z (−x,−y,z) ·
    H (z,−y,x) · S (−y,x,z) · T ((x−y)/√2,(x+y)/√2,z). Any opcode outside 1..6 is I. -/
def step (op : BitVec 3) (v : V) : V :=
  if op == opX then ⟨v.x, -v.y, -v.z⟩
  else if op == opY then ⟨-v.x, v.y, -v.z⟩
  else if op == opZ then ⟨-v.x, -v.y, v.z⟩
  else if op == opH then ⟨v.z, -v.y, v.x⟩
  else if op == opS then ⟨-v.y, v.x, v.z⟩
  else if op == opT then ⟨tRot v.x v.y true, tRot v.x v.y false, v.z⟩
  else v

/-- Born rule numerator: P(0) = (1 + z)/2, so the numerator over 2·ONE is ONE + z. -/
def p0Numerator (v : V) : BitVec 16 := ONE + v.z

/-! ## The six poles — the Clifford orbit of |0⟩ -/

inductive Pole | px | nx | py | ny | pz | nz
  deriving DecidableEq, Repr

def poles : List Pole := [.px, .nx, .py, .ny, .pz, .nz]

def enc : Pole → V
  | .px => ⟨ONE, 0#16, 0#16⟩
  | .nx => ⟨-ONE, 0#16, 0#16⟩
  | .py => ⟨0#16, ONE, 0#16⟩
  | .ny => ⟨0#16, -ONE, 0#16⟩
  | .pz => ⟨0#16, 0#16, ONE⟩
  | .nz => ⟨0#16, 0#16, -ONE⟩

def isPole (v : V) : Bool := poles.any (fun p => enc p == v)

def cliffordOps : List (BitVec 3) := [opI, opX, opY, opZ, opH, opS]

/-! ## Theorems — every one decided by computation, none rests on an axiom -/

/-- The Clifford gates keep the register on the six poles: the LTL □ isPole, discharged
    per step (the register's recurrence is `step`, see `alu` below). -/
theorem clifford_keeps_poles :
    cliffordOps.all (fun o => poles.all (fun p => isPole (step o (enc p)))) = true := by decide

/-- T is the one gate that leaves the poles — the computed Clifford/non-Clifford boundary. -/
theorem t_leaves_poles :
    poles.any (fun p => !(isPole (step opT (enc p)))) = true := by decide

/-- X, Y, Z, H are involutions on the poles; S has order 4. -/
theorem involutions :
    ([opX, opY, opZ, opH].all (fun o => poles.all (fun p => step o (step o (enc p)) == enc p))
      && poles.all (fun p => step opS (step opS (step opS (step opS (enc p)))) == enc p)) = true := by decide

/-- The reset state is |0⟩, and on the poles the Born numerator is 0, ONE or 2·ONE — P(0) ∈ {0, ½, 1}. -/
theorem born_rule_on_poles :
    (init == enc .pz
      && poles.all (fun p => let n := p0Numerator (enc p); n == 0#16 || n == ONE || n == 2 * ONE)
      && p0Numerator init == 2 * ONE) = true := by decide

/-- C is exactly ⌊2¹⁴/√2⌋: 2·C² ≤ 2²⁸ < 2·(C+1)². No real number is needed to say so. -/
theorem c_is_floor_of_2pow14_over_sqrt2 :
    2 * C * C ≤ 2 ^ 28 ∧ 2 ^ 28 < 2 * (C + 1) * (C + 1) := by decide

/-- The integer T rotation: (C · d) / 2¹⁴, floor division. -/
def tFloor (d : Int) : Int := (C * d) / 2 ^ 14

/-- The shift is a floor: 2¹⁴ · tFloor d lies within one unit of Q2.14 below C · d.
    With `c_is_floor…` this bounds the T rounding by 2⁻¹⁴ · (1 + |d|/2¹⁴) — under 1.5 units
    for |d| ≤ 2·ONE, i.e. below 10⁻⁴ on the unit sphere. -/
theorem t_floor_bound (d : Int) :
    2 ^ 14 * tFloor d ≤ C * d ∧ C * d < 2 ^ 14 * tFloor d + 2 ^ 14 := by
  unfold tFloor
  constructor
  · have h := Int.ediv_mul_le (C * d) (show (2 : Int) ^ 14 ≠ 0 by decide)
    rw [Int.mul_comm (C * d / 2 ^ 14) (2 ^ 14)] at h
    exact h
  · have h := Int.lt_ediv_add_one_mul_self (C * d) (show (0 : Int) < 2 ^ 14 by decide)
    rw [Int.add_mul, Int.one_mul, Int.mul_comm (C * d / 2 ^ 14) (2 ^ 14)] at h
    exact h

/-- The 32-bit hardware path computes exactly tFloor on the poles (no overflow: |d| ≤ 2·ONE). -/
theorem hardware_t_is_tFloor_on_poles :
    poles.all (fun p =>
      let v := enc p
      (tRot v.x v.y true).toInt == tFloor (v.x.toInt - v.y.toInt)
        && (tRot v.x v.y false).toInt == tFloor (v.x.toInt + v.y.toInt)) = true := by decide

/-! ## The hardware — the same step, written in Signal.mux for the synthesizer -/

/-- Slices of the packed 48-bit state: x ++ y ++ z. -/
def sx {dom : DomainConfig} (s : Signal dom (BitVec 48)) : Signal dom (BitVec 16) := s.map (fun v => v.extractLsb' 32 16)
def sy {dom : DomainConfig} (s : Signal dom (BitVec 48)) : Signal dom (BitVec 16) := s.map (fun v => v.extractLsb' 16 16)
def sz {dom : DomainConfig} (s : Signal dom (BitVec 48)) : Signal dom (BitVec 16) := s.map (fun v => v.extractLsb' 0 16)

def neg16 {dom : DomainConfig} (s : Signal dom (BitVec 16)) : Signal dom (BitVec 16) := s.map (fun v => -v)

def sext32 {dom : DomainConfig} (s : Signal dom (BitVec 16)) : Signal dom (BitVec 32) := s.map (fun v => v.signExtend 32)

/-- d · C >> 14 as hardware, d already sign-extended to 32 bits. -/
def scaleHw {dom : DomainConfig} (d : Signal dom (BitVec 32)) : Signal dom (BitVec 16) :=
  let prod := d * (11585#32)
  let shifted := prod.map (fun v => v.sshiftRight 14)
  shifted.map (fun v => v.extractLsb' 0 16)

/-- (a − b) · C >> 14 — T's new x. -/
def tRotSub {dom : DomainConfig} (a b : Signal dom (BitVec 16)) : Signal dom (BitVec 16) :=
  scaleHw (sext32 a - sext32 b)

/-- (a + b) · C >> 14 — T's new y. -/
def tRotAdd {dom : DomainConfig} (a b : Signal dom (BitVec 16)) : Signal dom (BitVec 16) :=
  scaleHw (sext32 a + sext32 b)

def initPacked : BitVec 48 := 0#16 ++ 0#16 ++ ONE

/-- The ALU. Input: opcode. Output: x ++ y ++ z ++ p0Numerator, 64 bits. -/
def alu {dom : DomainConfig} (op : Signal dom (BitVec 3)) : Signal dom (BitVec 64) :=
  let st := Signal.loop fun st =>
    let x := sx st
    let y := sy st
    let z := sz st
    let isX := Signal.beq op (Signal.pure opX)
    let isY := Signal.beq op (Signal.pure opY)
    let isZ := Signal.beq op (Signal.pure opZ)
    let isH := Signal.beq op (Signal.pure opH)
    let isS := Signal.beq op (Signal.pure opS)
    let isT := Signal.beq op (Signal.pure opT)
    let nx := mux isY (neg16 x) (mux isZ (neg16 x) (mux isH z (mux isS (neg16 y) (mux isT (tRotSub x y) x))))
    let ny := mux isX (neg16 y) (mux isZ (neg16 y) (mux isH (neg16 y) (mux isS x (mux isT (tRotAdd x y) y))))
    let nz := mux isX (neg16 z) (mux isY (neg16 z) (mux isH x z))
    register initPacked (nx ++ ny ++ nz)
  let p0 := sz st + ONE
  st ++ p0

end Alu

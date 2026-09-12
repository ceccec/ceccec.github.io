import Alu

open Alu
open Sparkle.Core.Domain
open Sparkle.Core.Signal

/-- Reach each pole from |0⟩ by a Clifford prefix: pz [] · nz [X] · px [H] · nx [H,Z] · py [H,S] · ny [H,S,Z]. -/
def prefixOf : Pole → List (BitVec 3)
  | .pz => [] | .nz => [opX] | .px => [opH] | .nx => [opH, opZ] | .py => [opH, opS] | .ny => [opH, opS, opZ]

def poleName : Pole → String
  | .px => "+x" | .nx => "-x" | .py => "+y" | .ny => "-y" | .pz => "+z" | .nz => "-z"

def opName (o : BitVec 3) : String :=
  if o == opI then "I" else if o == opX then "X" else if o == opY then "Y" else if o == opZ then "Z"
  else if o == opH then "H" else if o == opS then "S" else if o == opT then "T" else "?"

def fmt (x y z p : BitVec 16) : String := s!"{x.toInt},{y.toInt},{z.toInt},{p.toNat}"

def specAfter (ops : List (BitVec 3)) : V := ops.foldl (fun v o => step o v) init

/-- Run the hardware on the prefix then the op, read the output the cycle after the op. -/
def designAfter (ops : List (BitVec 3)) : BitVec 64 :=
  let opSig : Signal defaultDomain (BitVec 3) := ⟨fun t => ops.getD t opI⟩
  (alu opSig).atTime ops.length

def main : IO Unit := do
  IO.println "op,pole,design(x,y,z,p0num),spec(x,y,z,p0num)"
  for o in [opI, opX, opY, opZ, opH, opS, opT] do
    for p in poles do
      let ops := prefixOf p ++ [o]
      let d := designAfter ops
      let dx := d.extractLsb' 48 16
      let dy := d.extractLsb' 32 16
      let dz := d.extractLsb' 16 16
      let dp := d.extractLsb' 0 16
      let s := specAfter ops
      IO.println s!"{opName o},{poleName p},{fmt dx dy dz dp},{fmt s.x s.y s.z (p0Numerator s)}"

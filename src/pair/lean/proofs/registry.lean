/-
  THE REGISTRY'S FINITE FACTS, DECIDED BY THE KERNEL.

  Rows of THEOREM_ATOM_SEED (src/4/6) whose algebraic statement is a finite fact — checkable by computation
  over a finite carrier — are proved here by `decide`: no library, no axiom, the kernel evaluates them.
  Where a row states a general law, this proves finite INSTANCES of it (the involution discipline of
  src/pair/formal/proofs/involution.lean: state once, decide the instances) and says which.
  Out of `decide`'s reach and therefore NOT here: R(3,4) = 9 and R(3,5) = 14 (2^36 and more colourings),
  Kaprekar over all 4-digit numbers. A missing theorem is an open row, not a failed one.
-/

namespace Registry

/-! ## The Sothic cycle meshes the Egyptian civil year — 1461 × 365 = 1460 × 365.25, in whole quarter-days. -/
theorem sothic_cycle_meshes : 1461 * 365 * 4 = 1460 * 1461 := by decide
theorem sothic_cycle_days : 1461 * 365 = 533265 := by decide

/-! ## van der Waerden W(2,3) = 9 — every 2-colouring of 1..9 has a monochromatic 3-term progression,
    and some 2-colouring of 1..8 has none. A colouring is the bits of c : Nat. -/
def col (c i : Nat) : Bool := (c >>> (i - 1)) % 2 == 1
def monoAP (c n : Nat) : Bool :=
  (List.range n).any fun a => (List.range n).any fun d =>
    let x := a + 1; let s := d + 1
    x + 2 * s ≤ n && col c x == col c (x + s) && col c x == col c (x + 2 * s)
set_option maxRecDepth 100000 in
theorem vdw_nine_forces : (List.range 512).all (fun c => monoAP c 9) = true := by decide +kernel
theorem vdw_eight_escapes : (List.range 256).any (fun c => !monoAP c 8) = true := by decide

/-! ## Condorcet — of the 6³ = 216 three-voter profiles over 3 candidates, exactly 6 cycle A>B>C>A by majority. -/
def rankings : List (List Nat) := [[0,1,2],[0,2,1],[1,0,2],[1,2,0],[2,0,1],[2,1,0]]
def pos (r : List Nat) (x : Nat) : Nat := (r.idxOf x)
def prefers (r : List Nat) (x y : Nat) : Bool := pos r x < pos r y
def majority (p : List (List Nat)) (x y : Nat) : Bool := (p.filter (fun r => prefers r x y)).length ≥ 2
def cyclesABC (p : List (List Nat)) : Bool := majority p 0 1 && majority p 1 2 && majority p 2 0
def profiles : List (List (List Nat)) := rankings.flatMap fun a => rankings.flatMap fun b => rankings.map fun c => [a, b, c]
set_option maxRecDepth 100000 in
theorem condorcet_profiles_are_216 : profiles.length = 216 := by decide +kernel
set_option maxRecDepth 100000 in
theorem condorcet_six_cycle : (profiles.filter cyclesABC).length = 6 := by decide +kernel

/-! ## Graeco-Latin squares — none of order 2; an orthogonal pair exists for 3 (and the witness is checked). -/
def nth : List Nat → Nat → Nat → Nat
  | [], _, d => d
  | x :: _, 0, _ => x
  | _ :: xs, k + 1, d => nth xs k d
def row : List (List Nat) → Nat → List Nat
  | [], _ => []
  | r :: _, 0 => r
  | _ :: rs, k + 1 => row rs k
def latin (n : Nat) (sq : List (List Nat)) : Bool :=
  sq.length == n && sq.all (fun r => r.length == n && (List.range n).all (fun v => r.any (fun w => w == v))) &&
  (List.range n).all (fun j => (List.range n).all (fun v => sq.any (fun r => nth r j n == v)))
def orthogonal (n : Nat) (a b : List (List Nat)) : Bool :=
  let pairs := (List.range n).flatMap fun i => (List.range n).map fun j =>
    (nth (row a i) j n, nth (row b i) j n)
  (List.range n).all fun x => (List.range n).all fun y => pairs.any (fun q => q.1 == x && q.2 == y)
def order2 : List (List (List Nat)) := [[[0,1],[1,0]], [[1,0],[0,1]]]
set_option maxRecDepth 100000 in
theorem graeco_latin_none_of_order_two :
    order2.all (fun a => order2.all (fun b => !(latin 2 a && latin 2 b && orthogonal 2 a b))) = true := by decide +kernel
def a3 : List (List Nat) := [[0,1,2],[1,2,0],[2,0,1]]
def b3 : List (List Nat) := [[0,1,2],[2,0,1],[1,2,0]]
set_option maxRecDepth 100000 in
theorem graeco_latin_order_three : (latin 3 a3 && latin 3 b3 && orthogonal 3 a3 b3) = true := by decide +kernel
/-- order 4: the Klein-group pair -/
def a4 : List (List Nat) := [[0,1,2,3],[1,0,3,2],[2,3,0,1],[3,2,1,0]]
def b4 : List (List Nat) := [[0,1,2,3],[2,3,0,1],[3,2,1,0],[1,0,3,2]]
set_option maxRecDepth 100000 in
theorem graeco_latin_order_four : (latin 4 a4 && latin 4 b4 && orthogonal 4 a4 b4) = true := by decide +kernel
/-- order 5: the cyclic pair (i + j) and (2i + j) mod 5 -/
def a5 : List (List Nat) := (List.range 5).map fun i => (List.range 5).map fun j => (i + j) % 5
def b5 : List (List Nat) := (List.range 5).map fun i => (List.range 5).map fun j => (2 * i + j) % 5
set_option maxRecDepth 100000 in
theorem graeco_latin_order_five : (latin 5 a5 && latin 5 b5 && orthogonal 5 a5 b5) = true := by decide +kernel

/-! ## Kummer's carry theorem — v_p(C(m+n, n)) = the carries adding m and n in base p, at p ∈ {2,3,5}, m,n < 12. -/
def fact : Nat → Nat | 0 => 1 | k + 1 => (k + 1) * fact k
def choose' (a b : Nat) : Nat := fact a / (fact b * fact (a - b))
def vp (p : Nat) : Nat → Nat → Nat
  | 0, _ => 0
  | fuel + 1, x => if x ≠ 0 ∧ x % p == 0 then 1 + vp p fuel (x / p) else 0
def carries (p : Nat) : Nat → Nat → Nat → Nat → Nat
  | 0, _, _, _ => 0
  | fuel + 1, m, n, c => if m == 0 && n == 0 && c == 0 then 0 else
      let s := m % p + n % p + c
      (if s ≥ p then 1 else 0) + carries p fuel (m / p) (n / p) (if s ≥ p then 1 else 0)
set_option maxRecDepth 100000 in
theorem kummer_instances :
    [2, 3, 5].all (fun p => (List.range 12).all (fun m => (List.range 12).all (fun n =>
      vp p 64 (choose' (m + n) n) == carries p 16 m n 0))) = true := by decide +kernel


/-
  THE LATTICE DIRECTIONS, EACH HOLDING A KERNEL-DECIDED ROW (2026-09-14).
  The registry spreads over 14 directions (rosetta ray × face). The release waits until every direction holds at
  least one row the kernel decides; before this block 5 of 14 did. One finite fact per empty direction, each by
  `decide` with no axiom. Where a row states a general law, the scope is its stated instances and says so.
-/

/-! 0·counter — τ(6) = τ(2)·τ(3): the stated values multiply (−24)(252) = −6048. Instances, not Hecke's law. -/
theorem tau_six_is_product : ((-24 : Int) * 252 = -6048) := by decide

/-! 0·forward — K₅ and K₃,₃ break the planar bounds e ≤ 3v−6 and (bipartite) e ≤ 2v−4. -/
theorem k5_k33_break_planar_bounds : (10 > 3 * 5 - 6) ∧ (9 > 2 * 6 - 4) := by decide

/-! 1·counter — Catalan by its convolution recurrence: 1,1,2,5,14,42, so C₅ = 42 triangulations of the heptagon. -/
def nth0 : List Nat → Nat → Nat
  | [], _ => 0
  | x :: _, 0 => x
  | _ :: xs, k + 1 => nth0 xs k
def catalanList : Nat → List Nat
  | 0 => [1]
  | n + 1 =>
    let cs := catalanList n
    cs ++ [((List.range (n + 1)).map (fun i => nth0 cs i * nth0 cs (n - i))).foldl (· + ·) 0]
theorem catalan_heptagon : catalanList 5 = [1, 1, 2, 5, 14, 42] := by decide

/-! 2·counter — exactly 3 regular tilings: (p−2)(q−2) = 4 has exactly {3,6},{4,4},{6,3} for p,q ≥ 3 (p or q ≥ 7 forces a factor ≥ 5). -/
def tilings : List (Nat × Nat) :=
  ((List.range' 3 18).flatMap fun p => (List.range' 3 18).map fun q => (p, q)).filter fun pq => (pq.1 - 2) * (pq.2 - 2) == 4
theorem exactly_three_regular_tilings : tilings = [(3, 6), (4, 4), (6, 3)] := by decide

/-! 2·forward — Steiner S(2,3,7): the 7 lines {i, i+1, i+3} mod 7 cover each of the C(7,2) = 21 pairs exactly once. -/
def fano (i : Nat) : List Nat := [i % 7, (i + 1) % 7, (i + 3) % 7]
def covers (a b : Nat) : Nat := ((List.range 7).filter fun i => (fano i).any (· == a) && (fano i).any (· == b)).length
set_option maxRecDepth 100000 in
theorem steiner_two_three_seven :
    (List.range 7).all (fun a => (List.range 7).all (fun b => a == b || covers a b == 1)) = true := by decide +kernel

/-! 3·counter — the Moore bound for a (3,6)-cage: 2(k² − k + 1) = 14 at k = 3 (the value; cagehood is cited, not proved). -/
theorem heawood_moore_bound : 2 * (3 * 3 - 3 + 1) = 14 := by decide

/-! 3·forward — exactly 5 Platonic solids: (p−2)(q−2) < 4 has exactly 5 solutions with p,q ≥ 3 (p ≥ 6 forces ≥ 4). -/
def platonic : List (Nat × Nat) :=
  ((List.range' 3 18).flatMap fun p => (List.range' 3 18).map fun q => (p, q)).filter fun pq => (pq.1 - 2) * (pq.2 - 2) < 4
theorem exactly_five_platonic_solids : platonic = [(3, 3), (3, 4), (3, 5), (4, 3), (5, 3)] := by decide

/-! 6·counter — the Pisano period π(10) = 60: Fibonacci mod 10 first returns to (0, 1) after 60 steps. -/
def fibPairs : Nat → Nat × Nat → List (Nat × Nat)
  | 0, _ => []
  | n + 1, (a, b) => (a, b) :: fibPairs n (b, (a + b) % 10)
def pisano10 : Nat := ((fibPairs 70 (0, 1)).drop 1).findIdx? (· == (0, 1)) |>.map (· + 1) |>.getD 0
set_option maxRecDepth 100000 in
theorem pisano_ten_is_sixty : pisano10 = 60 := by decide +kernel

/-! 6·counter, reflected — the same walk for any modulus. On the nine the vortex turns on, π(9) = 24: the wheel the movie
    draws under the vortex strokes (pisanoWheelOnTheNine, src/mountain/vortex). 7m steps bound the walk, since π(m) ≤ 6m.
    It re-reads π(10) = 60, and decides the row's own words: π(m) is nonzero and even for every m from 3 to 50. -/
def fibPairsMod (m : Nat) : Nat → Nat × Nat → List (Nat × Nat)
  | 0, _ => []
  | n + 1, (a, b) => (a, b) :: fibPairsMod m n (b, (a + b) % m)
def pisano (m : Nat) : Nat := ((fibPairsMod m (7 * m) (0, 1)).drop 1).findIdx? (· == (0, 1)) |>.map (· + 1) |>.getD 0
set_option maxRecDepth 100000 in
theorem pisano_nine_is_twenty_four : pisano 9 = 24 := by decide +kernel
set_option maxRecDepth 100000 in
theorem pisano_reads_sixty_at_ten : pisano 10 = pisano10 := by decide +kernel
set_option maxRecDepth 200000 in
theorem pisano_is_even_from_three_to_fifty :
    (List.range 48).all (fun i => pisano (i + 3) != 0 && pisano (i + 3) % 2 == 0) = true := by decide +kernel

/-! Cassini's identity for EVERY n, not to a bound: F(n)·F(n+2) − F(n+1)² = (−1)^(n+1) over the integers. The registry
    row checked it to n = 40; the kernel proves it for all n, because each step negates it. Reflected into linear
    algebra: one step is the Fibonacci matrix Q = [[1, 1], [1, 0]], Cassini's left side is det(Qⁿ⁺¹), and det Q = −1 —
    every step reverses orientation, so the sign alternates forever. -/
def fibInt : Nat → Int
  | 0 => 0
  | 1 => 1
  | n + 2 => fibInt n + fibInt (n + 1)
theorem cassini_step_negates (n : Nat) :
    fibInt (n + 1) * fibInt (n + 3) - fibInt (n + 2) * fibInt (n + 2)
      = -(fibInt n * fibInt (n + 2) - fibInt (n + 1) * fibInt (n + 1)) := by
  have h2 : fibInt (n + 2) = fibInt n + fibInt (n + 1) := rfl
  have h3 : fibInt (n + 3) = fibInt (n + 1) + fibInt (n + 2) := rfl
  rw [h3, h2]
  simp only [Int.mul_add, Int.add_mul, Int.mul_comm (fibInt (n + 1)) (fibInt n)]
  omega
theorem cassini_for_every_n (n : Nat) :
    fibInt n * fibInt (n + 2) - fibInt (n + 1) * fibInt (n + 1) = (-1) ^ (n + 1) := by
  induction n with
  | zero => decide
  | succ k ih => rw [cassini_step_negates, ih, Int.pow_succ]; omega

/-! 6·forward — Catalan parity = Mersenne: among C₀ … C₃₂ the odd ones sit exactly at 0,1,3,7,15,31 = 2^k − 1. -/
set_option maxRecDepth 100000 in
theorem catalan_parity_is_mersenne :
    ((List.range 33).filter fun n => nth0 (catalanList 32) n % 2 == 1) = [0, 1, 3, 7, 15, 31] := by decide +kernel

end Registry

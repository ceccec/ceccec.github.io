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

/-! ## Fourteen rows sealed in one wave. Where a row checked a law to a bound, the kernel proves it for EVERY n; where the
    row's content is a finite fact, the kernel decides exactly that fact. -/

/-! Fibonacci partial sums for every n: Σ_{k=1}^n F(k) = F(n+2) − 1 (the row checked n ≤ 80). -/
def fibSum : Nat → Int
  | 0 => 0
  | n + 1 => fibSum n + fibInt (n + 1)
theorem fibonacci_partial_sum_for_every_n (n : Nat) : fibSum n = fibInt (n + 2) - 1 := by
  induction n with
  | zero => decide
  | succ k ih =>
    show fibSum k + fibInt (k + 1) = fibInt (k + 3) - 1
    have h : fibInt (k + 3) = fibInt (k + 1) + fibInt (k + 2) := rfl
    rw [ih, h]; omega

/-! The Lucas companion for every n: L(n) = F(n−1) + F(n+1), and L(n)² − 5F(n)² = 4(−1)ⁿ — which is four times Cassini's
    identity, so it inherits Cassini's reason: the Fibonacci matrix has determinant −1 (the row checked n ≤ 80). -/
def lucInt : Nat → Int
  | 0 => 2
  | 1 => 1
  | n + 2 => lucInt n + lucInt (n + 1)
theorem lucas_is_the_sum_of_the_fibonacci_neighbours (n : Nat) :
    lucInt (n + 1) = fibInt n + fibInt (n + 2) ∧ lucInt (n + 2) = fibInt (n + 1) + fibInt (n + 3) := by
  induction n with
  | zero => exact ⟨by decide, by decide⟩
  | succ k ih =>
    refine ⟨ih.2, ?_⟩
    show lucInt (k + 3) = fibInt (k + 2) + fibInt (k + 4)
    have hl : lucInt (k + 3) = lucInt (k + 1) + lucInt (k + 2) := rfl
    have h2 : fibInt (k + 2) = fibInt k + fibInt (k + 1) := rfl
    have h3 : fibInt (k + 3) = fibInt (k + 1) + fibInt (k + 2) := rfl
    have h4 : fibInt (k + 4) = fibInt (k + 2) + fibInt (k + 3) := rfl
    rw [hl, ih.1, ih.2, h4, h3]; omega
theorem lucas_fibonacci_identity_for_every_n (n : Nat) :
    lucInt n * lucInt n - 5 * (fibInt n * fibInt n) = 4 * (-1) ^ n := by
  cases n with
  | zero => decide
  | succ n =>
    rw [(lucas_is_the_sum_of_the_fibonacci_neighbours n).1]
    have h2 : fibInt (n + 2) = fibInt n + fibInt (n + 1) := rfl
    have c := cassini_for_every_n n
    rw [h2] at c ⊢
    simp only [Int.mul_add, Int.add_mul, Int.mul_comm (fibInt (n + 1)) (fibInt n)] at c ⊢
    omega

/-! The power-sum closed forms for every n — triangular, square, pyramidal (the row checked n ≤ 1000) — and Nicomachus:
    the sum of the first n cubes is the square of the n-th triangular number (the row checked n ≤ 100). Each by induction:
    expand, sort the products, and the rest is linear. -/
def sumTo (f : Nat → Nat) : Nat → Nat
  | 0 => 0
  | n + 1 => sumTo f n + f (n + 1)
theorem triangular_closed_form_for_every_n (n : Nat) : 2 * sumTo (fun k => k) n = n * (n + 1) := by
  induction n with
  | zero => rfl
  | succ k ih =>
    show 2 * (sumTo (fun k => k) k + (k + 1)) = (k + 1) * (k + 1 + 1)
    rw [Nat.mul_add, ih]
    simp only [Nat.mul_add, Nat.add_mul, Nat.mul_one, Nat.one_mul]
    omega
theorem odd_sum_is_a_square_for_every_n (n : Nat) : sumTo (fun k => 2 * k - 1) n = n * n := by
  induction n with
  | zero => rfl
  | succ k ih =>
    show sumTo (fun k => 2 * k - 1) k + (2 * (k + 1) - 1) = (k + 1) * (k + 1)
    rw [ih]
    simp only [Nat.mul_add, Nat.add_mul, Nat.mul_one, Nat.one_mul]
    omega
theorem pyramidal_closed_form_for_every_n (n : Nat) :
    6 * sumTo (fun k => k * k) n = n * (n + 1) * (2 * n + 1) := by
  induction n with
  | zero => rfl
  | succ k ih =>
    show 6 * (sumTo (fun k => k * k) k + (k + 1) * (k + 1)) = (k + 1) * (k + 1 + 1) * (2 * (k + 1) + 1)
    rw [Nat.mul_add, ih]
    simp only [Nat.mul_add, Nat.add_mul, Nat.mul_one, Nat.one_mul, Nat.mul_assoc, Nat.mul_comm, Nat.mul_left_comm]
    simp only [← Nat.mul_assoc]
    omega
theorem nicomachus_for_every_n (n : Nat) :
    4 * sumTo (fun k => k * k * k) n = (n * (n + 1)) * (n * (n + 1)) := by
  induction n with
  | zero => rfl
  | succ k ih =>
    show 4 * (sumTo (fun k => k * k * k) k + (k + 1) * (k + 1) * (k + 1)) = ((k + 1) * (k + 1 + 1)) * ((k + 1) * (k + 1 + 1))
    rw [Nat.mul_add, ih]
    simp only [Nat.mul_add, Nat.add_mul, Nat.mul_one, Nat.one_mul, Nat.mul_assoc, Nat.mul_comm, Nat.mul_left_comm]
    simp only [← Nat.mul_assoc]
    omega

/-! The reflected Gray code g(i) = i XOR (i >> 1), for every width n ≤ 12: each code fits the width, the prefix-XOR undoes
    it (so it is a permutation), and consecutive codes — the last back to the first included — differ in exactly one bit. -/
def gray (i : Nat) : Nat := i ^^^ (i >>> 1)
def popcount : Nat → Nat → Nat
  | 0, _ => 0
  | f + 1, x => x % 2 + popcount f (x / 2)
def grayInv : Nat → Nat → Nat
  | 0, _ => 0
  | f + 1, g => g ^^^ grayInv f (g >>> 1)
set_option maxRecDepth 100000 in
theorem gray_code_is_a_one_bit_cycle_to_twelve :
    (List.range 12).all (fun j => (List.range (2 ^ (j + 1))).all (fun i =>
      gray i < 2 ^ (j + 1) && grayInv 13 (gray i) == i &&
      popcount 13 (gray i ^^^ gray ((i + 1) % 2 ^ (j + 1))) == 1)) = true := by decide +kernel

/-! Two binomial identities over their rows' ranges — the hockey stick Σ_{i=r}^{n} C(i,r) = C(n+1,r+1) (r ≤ 10, n ≤ 20) and
    Vandermonde's convolution Σ_k C(m,k)C(n,p−k) = C(m+n,p) (m, n ≤ 12, every p). C is computed multiplicatively,
    C(a,i+1) = C(a,i)·(a−i)/(i+1), exact at every step and zero past a. -/
def cb (a b : Nat) : Nat := (List.range b).foldl (fun c i => c * (a - i) / (i + 1)) 1
set_option maxRecDepth 100000 in
theorem hockey_stick_to_twenty :
    (List.range 11).all (fun r => (List.range 21).all (fun n => decide (n < r) ||
      ((List.range (n + 1)).foldl (fun s i => if i ≥ r then s + cb i r else s) 0 == cb (n + 1) (r + 1)))) = true := by
  decide +kernel
set_option maxRecDepth 100000 in
theorem vandermonde_convolution_to_twelve :
    (List.range 13).all (fun m => (List.range 13).all (fun n => (List.range (m + n + 1)).all (fun p =>
      (List.range (p + 1)).foldl (fun s k => s + cb m k * cb n (p - k)) 0 == cb (m + n) p))) = true := by
  decide +kernel

/-! Five finite facts of number theory, each decided whole: the smallest amicable pair, the four three-digit Armstrong
    numbers, the taxicab number, Euler's prime-generating run, and Euler's factor of F₅. -/
def aliquot (n : Nat) : Nat := (List.range n).foldl (fun s d => if d > 0 && n % d == 0 then s + d else s) 0
set_option maxRecDepth 100000 in
theorem amicable_220_284_is_the_smallest :
    aliquot 220 = 284 ∧ aliquot 284 = 220 ∧
    (List.range 220).all (fun a => aliquot a == a || aliquot (aliquot a) != a) = true := by decide +kernel
def cubeDigits (n : Nat) : Nat := (n / 100) ^ 3 + (n / 10 % 10) ^ 3 + (n % 10) ^ 3
theorem the_three_digit_armstrong_numbers_are_four :
    ((List.range 900).map (· + 100)).filter (fun n => cubeDigits n == n) = [153, 370, 371, 407] := by decide +kernel
def cubeSums : List Nat := (List.range 12).flatMap fun a => ((List.range 12).filter (a ≤ ·)).map fun b => (a + 1) ^ 3 + (b + 1) ^ 3
set_option maxRecDepth 100000 in
theorem taxicab_two_is_1729 :
    (cubeSums.filter (· == 1729)).length = 2 ∧
    (List.range 1729).all (fun n => (cubeSums.filter (· == n)).length < 2) = true := by decide +kernel
def isPrimeB (n : Nat) : Bool := n ≥ 2 && (List.range n).all (fun d => d < 2 || d * d > n || n % d != 0)
set_option maxRecDepth 100000 in
theorem euler_polynomial_is_prime_to_39_then_41_squared :
    (List.range 40).all (fun n => isPrimeB (n * n + n + 41)) = true ∧ 40 * 40 + 40 + 41 = 41 * 41 := by decide +kernel
set_option maxRecDepth 100000 in
theorem fermat_five_is_composite :
    (List.range 5).all (fun k => isPrimeB (2 ^ (2 ^ k) + 1)) = true ∧ 2 ^ (2 ^ 5) + 1 = 641 * 6700417 := by decide +kernel

/-! The Frobenius number of (6, 9, 20) is 43 — for EVERY n, not a window: 43 has no representation, and every n ≥ 44 has
    one, because the six from 44 to 49 do and adding a 6 carries each to the next six (the row checked the window). -/
def McNugget (n : Nat) : Prop := ∃ a b c : Nat, 6 * a + 9 * b + 20 * c = n
theorem frobenius_six_nine_twenty_misses_43 : ¬ McNugget 43 := by
  intro ⟨a, b, c, h⟩; omega
theorem frobenius_six_nine_twenty_reaches_every_n_from_44 (n : Nat) (h : 44 ≤ n) : McNugget n := by
  have step : ∀ k, ∀ i, i < 6 → McNugget (44 + 6 * k + i) := by
    intro k
    induction k with
    | zero =>
      intro i hi
      match i, hi with
      | 0, _ => exact ⟨4, 0, 1, rfl⟩
      | 1, _ => exact ⟨0, 5, 0, rfl⟩
      | 2, _ => exact ⟨1, 0, 2, rfl⟩
      | 3, _ => exact ⟨0, 3, 1, rfl⟩
      | 4, _ => exact ⟨8, 0, 0, rfl⟩
      | 5, _ => exact ⟨0, 1, 2, rfl⟩
    | succ k ih =>
      intro i hi
      obtain ⟨a, b, c, e⟩ := ih i hi
      exact ⟨a + 1, b, c, by omega⟩
  have e : n = 44 + 6 * ((n - 44) / 6) + (n - 44) % 6 := by omega
  rw [e]; exact step _ _ (Nat.mod_lt _ (by decide))

/-! Schur's S(2) = 4: some 2-colouring of 1…4 has no monochromatic x + y = z, and every 2-colouring of 1…5 has one. -/
def monoSum (c n : Nat) : Bool :=
  (List.range n).any fun x => (List.range n).any fun y =>
    x ≤ y && x + y + 2 ≤ n && col c (x + 1) == col c (y + 1) && col c (y + 1) == col c (x + y + 2)
theorem schur_two_is_four :
    (List.range 16).any (fun c => !monoSum c 4) = true ∧ (List.range 32).all (fun c => monoSum c 5) = true := by decide +kernel

/-! ## ℤ/m DEFINES ITS OWN LAWS — decided, with the domain stated instead of a guard. On the odd moduli 2 is a unit, so
    ⟨2⟩ is an orbit inside (ℤ/m)ˣ whose length divides the unit count; on the even ones 2 is provably no unit. The
    reflection is an involution partitioning ℤ/m, the Fibonacci walk returns with an even period beyond 2, and ℤ/9's
    orbit IS the sealed vortex sequence. The same five are computed in src/mountain/vortex (vortexLawsOf). -/
def zUnits (m : Nat) : List Nat := (List.range m).filter (fun d => Nat.gcd d m == 1)
def zOrbit (m : Nat) : Nat → Nat → List Nat
  | 0, _ => []
  | f + 1, x => x :: (if (x * 2) % m == 1 % m then [] else zOrbit m f ((x * 2) % m))
def zReflect (m d : Nat) : Nat := (m - d) % m
def oddModuli : List Nat := (List.range 23).map (fun i => 2 * i + 3)
def evenModuli : List Nat := (List.range 23).map (fun i => 2 * i + 2)
set_option maxRecDepth 100000 in
theorem z_doubling_orbit_lies_in_the_units_on_odd_moduli :
    oddModuli.all (fun m => (zOrbit m m 1).all (fun d => (zUnits m).contains d)) = true := by decide +kernel
set_option maxRecDepth 100000 in
theorem z_order_of_two_divides_the_unit_count_on_odd_moduli :
    oddModuli.all (fun m => (zUnits m).length % (zOrbit m m 1).length == 0) = true := by decide +kernel
set_option maxRecDepth 100000 in
theorem z_two_is_no_unit_on_even_moduli : evenModuli.all (fun m => !((zUnits m).contains 2)) = true := by decide +kernel
set_option maxRecDepth 100000 in
theorem z_reflection_is_an_involution_and_partitions :
    (List.range 46).all (fun i =>
      (List.range (i + 2)).all (fun d => zReflect (i + 2) (zReflect (i + 2) d) == d)
      && ((List.range (i + 2)).filter (fun d => d < zReflect (i + 2) d)).length * 2
         + ((List.range (i + 2)).filter (fun d => zReflect (i + 2) d == d)).length == i + 2) = true := by decide +kernel
set_option maxRecDepth 200000 in
theorem z_fibonacci_period_returns_and_is_even_beyond_two :
    (List.range 46).all (fun i => pisano (i + 2) != 0) = true
    ∧ (List.range 45).all (fun i => pisano (i + 3) % 2 == 0) = true := ⟨by decide +kernel, by decide +kernel⟩
theorem z_nine_orbit_is_the_vortex_sequence : zOrbit 9 9 1 = [1, 2, 4, 8, 7, 5] := by decide +kernel

end Registry

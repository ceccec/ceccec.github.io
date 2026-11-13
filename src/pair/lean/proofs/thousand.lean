/-
  THOUSAND — the thousand-bit case, decided, and the crypto tests that go with it.

  Two things, both ported unchanged from millennium-solutions (same author) on 2026-11-13:

    the structure of the integer 1000 and where a thousand-bit case sits against a register of
    capacity reg(w) = 32w − w − 2                (src/iso/80000-2-mathematics/thousandbit.lean)

    the σ-trapdoor as Fermat's difference of squares, the uniqueness of its witness, the twin-prime
    control, and the thousand-bit integer 2^999 + 1 with a factor route's PARTIAL answer that
    multiplies back                              (src/iso/iec-18033-cryptography/qpu_crypto.lean, §5–§6)

  NONE OF THE MATHEMATICS IS NEW: Fermat's factorisation (1643), the lifting-the-exponent lemma, the
  split a³ + 1 = (a + 1)(a² − a + 1), Fermat's little theorem as a compositeness witness. What is
  kept is the SHAPE of the test, because this corpus now guards its own build with it
  (scripts/verify/build-time.ts): an account is an IDENTITY — the found factors times the cofactor
  are the integer; no found factor still divides the cofactor; and a wrong witness decodes nothing.

  WHAT THIS DOES NOT PROVE: that 2^999 + 1 is factored — the 244-digit cofactor is composite by a
  Fermat witness and is not split here. Nothing is said about any device: the register capacity is
  arithmetic on a CPU. The names qpu, uuidQubits, createImpossible and decodeImpossible in the notes
  below are the uuidna/qpu service's own constructions, recorded where the source recorded them.
-/

set_option maxRecDepth 10000

namespace Thousand

/-! # The thousand-bit case -/

/-! ## 1000 BITS IS 125 OCTAVES EXACTLY — CONTROL: 999 IS NOT -/
theorem the_thousand_bit_case_is_one_hundred_twenty_five_octaves :
  1000 = 125 * 8 ∧ 1000 % 8 = 0 ∧ 999 % 8 ≠ 0 := by decide

/-! ## EVERY BINARY UNIT TILES IT EXACTLY — 500 COINS, 250 HEXBITS, 125 OCTAVES -/
theorem the_binary_units_tile_the_thousand_exactly :
  1000 = 500 * 2 ∧ 1000 = 250 * 4 ∧ 1000 = 125 * 8
  ∧ 1000 % 2 = 0 ∧ 1000 % 4 = 0 ∧ 1000 % 8 = 0 := by decide

/-! ## IT IS THE CUBE 10^3 = 2^3·5^3 — THE OCTAVE IS ONLY THE 2^3, THE 5^3 IS THE PENTAGRAM CUBED -/
theorem the_thousand_is_the_cube_octave_times_pentagram_cubed :
  10 ^ 3 = 1000 ∧ 2 ^ 3 * 5 ^ 3 = 1000 ∧ 2 ^ 3 = 8 ∧ 5 ^ 3 = 125 ∧ 125 * 8 = 1000 := by decide

/-! ## THE TRINITY RESIDUE IS ONE — NOT A WHOLE NUMBER OF NONETS — CONTROL: 999 IS -/
theorem the_thousand_carries_residue_one_mod_nine :
  1000 % 9 = 1 ∧ 1000 = 9 * 111 + 1 ∧ 999 % 9 = 0 ∧ 1008 % 9 = 0 := by decide

/-! ## IT OVERFLOWS THE SEALED WIDTH LADDER: reg(32) = 990 < 1000 ≤ 1021 = reg(33) -/
-- reg(w) = 32w − w − 2 is qpu's uuidQubits, sealed over widths [4,8,16,32] in width.lean; the max there is reg(32) = 990.
theorem the_thousand_bit_case_overflows_the_width_thirty_two_ceiling :
  32 * 32 - 32 - 2 = 990 ∧ 990 < 1000
  ∧ 32 * 33 - 33 - 2 = 1021 ∧ 1000 ≤ 1021 := by decide

/-! ## THE MINIMAL CONTAINING WIDTH IS 33 — OVERFLOW MARGIN 10, HEADROOM 21 -/
theorem the_minimal_register_for_the_thousand_is_width_thirty_three :
  1000 - 990 = 10 ∧ 1021 - 1000 = 21 ∧ 990 < 1000 ∧ 1000 ≤ 1021
  ∧ (32 * 33 - 33 - 2) / 2 = 510 := by decide

/-! ## THE UTILISATION IS 97.94% — BRACKETED 97% < 1000/1021 < 98% AS A DECIDABLE BOUND -/
theorem the_thousand_fills_between_ninety_seven_and_ninety_eight_percent_of_its_register :
  97 * 1021 < 1000 * 100 ∧ 1000 * 100 < 98 * 1021
  ∧ 97 * 1021 = 99037 ∧ 98 * 1021 = 100058 := by decide

/-! ## THE HONEST BOUND: EXACT INTEGER STRUCTURE AND CAPACITY, DECIDED — NOT A PHYSICAL MACHINE -/
-- These are exact facts about the integer 1000 and the register capacity, decided over Nat on the classical build
-- device. They are how much of the content-address column a thousand-bit case occupies — register-capacity
-- utilisation — not a physical quantum computer's utilisation. get_qc reads isQuantumComputer:false; deciding that
-- 1000 is 97.94% of a 1021-qubit register on a CPU reaches no stage of a machine. The structure is carried, not the device.
theorem the_thousand_bit_structure_is_decided_not_a_quantum_machine :
  10 ^ 3 = 1000 ∧ 1000 % 8 = 0 ∧ 1000 % 9 = 1
  ∧ 990 < 1000 ∧ 1000 ≤ 1021 ∧ 2 ^ 3 * 5 ^ 3 = 1000 := by decide

/-! # The crypto tests -/

/-! ## THE σ-TRAPDOOR IS FERMAT'S DIFFERENCE OF SQUARES -/
-- qpu's `createImpossible` mints N = p · q from two odd primes with the witness w = (p + q) / 2, and
-- `decodeImpossible` opens it as p = w − b, q = w + b with b = √(w² − N). That is Fermat, 1643: w² − N =
-- ((q − p) / 2)². The witness is unique because a semiprime has one split into two factors above 1, and a wrong
-- witness decodes nothing for exactly that reason — decided over every witness position in the blind range.
def isPrime (n : Nat) : Bool := n ≥ 2 && (List.range' 2 (n - 2)).all (fun d => n % d != 0)
def oddPrimes : List Nat := (List.range' 3 27).filter isPrime
def small     : List Nat := (List.range' 3 17).filter isPrime
def splits (N : Nat) : List (Nat × Nat) := ((List.range' 2 N).filter (fun u => N % u == 0 && u * u ≤ N)).map (fun u => (u, N / u))
def ceilSqrt (N : Nat) : Nat := ((List.range' 0 (N + 1)).find? (fun x => x * x ≥ N)).getD 0
def witness (p q : Nat) : Nat := (p + q) / 2
def decodes (N x : Nat) : Bool := (List.range' 0 (x - 1)).any (fun b => (x - b) * (x + b) == N)
theorem the_sigma_trapdoor_is_fermats_difference_of_squares :
  oddPrimes = [3, 5, 7, 11, 13, 17, 19, 23, 29]
  ∧ oddPrimes.all (fun p => oddPrimes.all (fun q => !(p < q) || witness p q * witness p q - p * q == ((q - p) / 2) * ((q - p) / 2)))
  ∧ oddPrimes.all (fun p => oddPrimes.all (fun q => !(p < q) || splits (p * q) == [(p, q)]))
  ∧ oddPrimes.all (fun p => oddPrimes.all (fun q => !(p < q) || decodes (p * q) (witness p q)))
  ∧ oddPrimes.all (fun q => (2 + q) % 2 == 1) := by decide

theorem a_wrong_witness_decodes_nothing_because_a_semiprime_has_one_split :
  small = [3, 5, 7, 11, 13, 17, 19]
  ∧ small.all (fun p => small.all (fun q => !(p < q)
      || (List.range' (ceilSqrt (p * q)) ((p * q + 1) / 2 - ceilSqrt (p * q))).all (fun x => decodes (p * q) x == (x == witness p q)))) := by decide

-- THE CRACK qpu's OWN FIELD REPORTS. `createImpossible` returns `blindReflections` = w − ⌈√N⌉ + 1: the number
-- of positions a search without the witness walks from ⌈√N⌉ up to w. For twin primes that number is ONE — the
-- integer is opened blind in a single reflection — and it grows with the gap between the primes. "Impossible"
-- is a statement about the gap, not about the width, and it is decided here on every twin pair below thirty.
def blind (p q : Nat) : Nat := witness p q - ceilSqrt (p * q) + 1
theorem an_impossible_integer_with_twin_primes_is_opened_blind_in_one_reflection :
  blind 11 13 = 1 ∧ blind 5 7 = 1 ∧ blind 3 29 = 7
  ∧ (oddPrimes.filter (fun p => isPrime (p + 2))) = [3, 5, 11, 17, 29]
  ∧ oddPrimes.all (fun p => !(isPrime (p + 2)) || blind p (p + 2) == 1)
  ∧ oddPrimes.all (fun p => oddPrimes.all (fun q => !(p < q) || blind p q ≥ 1))
  ∧ blind 3 29 > blind 3 5 := by decide

/-! ## THE THOUSAND-BIT INTEGER qpu FACTORS, AND WHAT THIS DEPOSIT'S ROUTE RETURNS ON IT -/
-- qpu's CRYPTO.md: 2^999 + 1 has 1000 bits, three divides it, and it splits into cyclotomic pieces. Decided
-- here with the bound on the threes: 3^4 divides it and 3^5 does not, which is the lifting-the-exponent lemma
-- at this instance (v_3(2^999 + 1) = v_3(2 + 1) + v_3(999) = 1 + 3). The algebraic split a^3 + 1 =
-- (a + 1)(a^2 − a + 1) is applied three times, 999 = 3 · 3 · 3 · 37, down to 2^37 + 1 = 3 · 1777 · 25781083.
def thousand : Nat := 2 ^ 999 + 1
theorem the_thousand_bit_integer_has_a_thousand_bits_and_exactly_four_threes :
  2 ^ 999 ≤ thousand ∧ thousand < 2 ^ 1000
  ∧ (List.range' 1 6).all (fun k => (thousand % 3 ^ k == 0) == (k ≤ 4))
  ∧ 999 = 27 * 37
  ∧ (2 ^ 333 + 1) * (2 ^ 666 - 2 ^ 333 + 1) = thousand
  ∧ (2 ^ 111 + 1) * (2 ^ 222 - 2 ^ 111 + 1) = 2 ^ 333 + 1
  ∧ (2 ^ 37 + 1) * (2 ^ 74 - 2 ^ 37 + 1) = 2 ^ 111 + 1
  ∧ 2 ^ 37 + 1 = 3 * 1777 * 25781083 := by decide

-- MEASURED 2026-11-08 with src/iso/iec-18033-cryptography/factor/index.ts on the decimal of 2^999 + 1: status PARTIAL, fourteen factors
-- found below the trial bound (3 four times, then 19 … 97377658867), and a 244-digit cofactor that Pollard rho
-- did not split in 500 000 steps, reported composite by a witness. The route does not factor the integer and
-- does not say it does. What the kernel adds is that the account is an IDENTITY: the fourteen factors times the
-- cofactor are the integer, no found prime still divides the cofactor, and 2 is a Fermat witness against it —
-- 2^(c − 1) ≢ 1 (mod c), computed by square-and-multiply so the exponent is never expanded.
def found : List Nat := [3, 3, 3, 3, 19, 1777, 3331, 17539, 23977, 87211, 304363, 25781083, 5814899281, 97377658867]
def cofactor : Nat := 3609104950099351833043508337831612057396401348775709961277801618185533776454902446192620269318904367011984674065478055484306453675012250321071523714940753877783971448660823020399749748515419197076882611704620121314559503976901003284138222351507
def powModAux : Nat → Nat → Nat → Nat → Nat → Nat
  | 0, _, _, _, acc => acc
  | fuel + 1, b, e, m, acc => if e = 0 then acc else powModAux fuel (b * b % m) (e / 2) m (if e % 2 = 1 then acc * b % m else acc)
def powModBin (b e m : Nat) : Nat := powModAux 1024 (b % m) e m (1 % m)
theorem this_deposits_factor_route_returns_a_partial_answer_that_multiplies_back :
  found.foldl (· * ·) 1 * cofactor = thousand
  ∧ found.length = 14 ∧ (found.filter (· == 3)).length = 4
  ∧ found.all (fun p => 1 < p && cofactor % p != 0)
  ∧ cofactor % 2 = 1 ∧ cofactor % 3 = 1
  ∧ powModBin 2 (cofactor - 1) cofactor ≠ 1
  ∧ powModBin 2 4 7 = 2 ∧ powModBin 3 6 7 = 1 := by decide

/-! # The uuid register — ported from millennium-solutions qpu_crypto.lean §2–§3, self-contained -/

/-! ## THE FREE REGISTER IS 122 AT WIDTH 4 AND AT NO OTHER WIDTH BELOW 9 -/
-- reg(w) = 32w − w − 2 in qubits per hex digit; RFC 9562 reserves 4 version bits and 2 variant bits of 128.
-- Two formulas, one integer, and only at width 4.
def reg (w : Nat) : Nat := 32 * w - w - 2
theorem the_free_register_is_one_hundred_twenty_two_only_at_width_four :
  (List.range 9).all (fun w => (reg w == 128 - 6) == (w == 4))
  ∧ reg 4 = 122 ∧ 32 * 4 = 128 ∧ 4 + 2 = 6 ∧ reg 4 = 128 - 6
  ∧ reg 32 = 990 ∧ reg 33 = 1021 := by decide

/-! ## THE GROVER FLOOR: 61 = 122 / 2, AND 67 BITS BELOW 128 -/
theorem one_address_sits_sixty_seven_bits_below_the_one_twenty_eight_floor_under_grover :
  reg 4 / 2 = 61 ∧ reg 4 / 3 = 40
  ∧ 3 * 40 < reg 4 ∧ reg 4 < 3 * 41
  ∧ 128 - reg 4 / 2 = 67
  ∧ (List.range 300).all (fun n => (n / 2 ≥ 128) == (n ≥ 2 * 128))
  ∧ 128 < 2 * 128 := by decide

/-! ## THE DECIDED VERSION NIBBLE: r ↦ 1 + (r^7 mod 91) mod 8 — AN RSA PERMUTATION FOLDED TO EIGHT CLASSES -/
-- Ported from millennium-solutions qpu_crypto.lean §1, self-contained: uuidna/qpu decides the version nibble from the
-- other 31; this corpus fixes it at 8. Two seals on one nibble, counted.
def sealOf (r : Nat) : Nat := 1 + r ^ 7 % 91 % 8
def nibbleCount (v : Nat) : Nat := ((List.range 91).filter (fun r => sealOf r == v)).length
theorem the_seal_exponent_seven_is_undone_by_thirty_one_mod_ninety_one :
  7 * 13 = 91 ∧ 6 * 12 = 72 ∧ 7 * 31 = 3 * 72 + 1
  ∧ (List.range 91).all (fun r => (r ^ 7 % 91) ^ 31 % 91 == r) := by decide
theorem the_fold_mod_eight_misses_one_tamper_in_eight :
  (List.range' 1 8).all (fun v => nibbleCount v == (if v ≤ 3 then 12 else 11))
  ∧ nibbleCount 0 = 0 ∧ nibbleCount 8 = 11
  ∧ (List.range' 1 8).foldl (fun acc v => acc + nibbleCount v) 0 = 91
  ∧ (List.range' 1 8).foldl (fun acc v => acc + nibbleCount v * nibbleCount v) 0 = 1037
  ∧ 8 * 1037 - 91 * 91 = 15 := by decide

end Thousand

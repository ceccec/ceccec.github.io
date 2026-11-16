/-
  ROOTS — THE SHA-256 CONSTANTS, DERIVED FROM WHAT THEY ARE AND PROVED THE EXACT FLOOR.

  NIST FIPS 180-4 defines them: the initial hash value H(0) is the first 32 bits of the fractional parts of the square roots
  of the first eight primes (§5.3.3), and the round constants K are the first 32 bits of the fractional parts of the cube
  roots of the first sixty-four primes (§4.2.2). src/0 carries both tables as typed hexadecimal; this file computes them
  from that definition and proves the computation lands on the standard's values — not near them. A wrong root would give
  a hash that is self-consistent, round-trips perfectly, and is not SHA-256. (Method after millennium-solutions'
  roots.lean, which does the same for SHA-512; integer roots by Newton's method are classical.)

  The tables below are the values FIPS 180-4 prints, pinned and compared against the derivation: an AGREEMENT check, the
  opposite of a typed constant standing in for one. verify:sha-roots holds src/0's tables to these same values.

  No Mathlib, no sorry.
-/

set_option maxRecDepth 100000

namespace Roots

/-- Integer k-th root by Newton, fuel-bounded so the recursion is structural. -/
def step : Nat → Nat → Nat → Nat → Nat
  | 0, _, _, x => x
  | Nat.succ g, k, n, x =>
    let y := ((k - 1) * x + n / x ^ (k - 1)) / k
    if y >= x then x else step g k n y

/-- ⌊n^(1/k)⌋, Newton descending from n itself (a structural start the kernel can unfold). -/
def iroot (k n : Nat) : Nat := if n < 2 then n else step 400 k n n

/-- The first 32 bits of the fractional part of the k-th root of p — FIPS 180-4's own recipe. -/
def frac32 (k p : Nat) : Nat := iroot k (p * 2 ^ (32 * k)) % 2 ^ 32

/-- Primality by trial division, and the first primes in order with none skipped. -/
def isPrime (n : Nat) : Bool := n >= 2 && ((List.range' 2 (n - 2)).all (fun d => d * d > n || n % d != 0))
def firstPrimes (bound count : Nat) : List Nat := ((List.range' 2 bound).filter isPrime).take count

/-- The initial hash value H(0), as FIPS 180-4 §5.3.3 prints it. -/
def published_H : List Nat := [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19]

/-- The sixty-four round constants K, as FIPS 180-4 §4.2.2 prints them. -/
def published_K : List Nat := [
  0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
  0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
  0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
  0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
  0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
  0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
  0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
  0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2]

/-- The prime generator yields the first sixty-four primes, in order, every one prime. -/
theorem the_first_sixty_four_primes_are_generated :
    (firstPrimes 320 64).length = 64 ∧ (firstPrimes 320 64).all isPrime ∧ (firstPrimes 320 64).take 8 = [2, 3, 5, 7, 11, 13, 17, 19] := by
  decide

/-- THE ROOT IS THE FLOOR, NOT ONE SHORT: the square root behind H(0)'s first word lands exactly on ⌊√(2·2⁶⁴)⌋. -/
theorem the_square_root_is_the_floor_and_not_one_short :
    iroot 2 (2 * 2 ^ 64) ^ 2 ≤ 2 * 2 ^ 64 ∧ 2 * 2 ^ 64 < (iroot 2 (2 * 2 ^ 64) + 1) ^ 2 := by decide

/-- And the cube root behind K's first word lands exactly on ⌊∛(2·2⁹⁶)⌋. -/
theorem the_cube_root_is_the_floor_and_not_one_short :
    iroot 3 (2 * 2 ^ 96) ^ 3 ≤ 2 * 2 ^ 96 ∧ 2 * 2 ^ 96 < (iroot 3 (2 * 2 ^ 96) + 1) ^ 3 := by decide

/-- H(0) IS THE SQUARE-ROOT FRACTIONS of the first eight primes — all eight words, derived, equal to the published table. -/
theorem the_initial_hash_is_the_square_root_fractions :
    (firstPrimes 320 8).map (frac32 2) = published_H := by decide

/-- K IS THE CUBE-ROOT FRACTIONS of the first sixty-four primes — all sixty-four words, derived, equal to the published table. -/
theorem the_round_constants_are_the_cube_root_fractions :
    (firstPrimes 320 64).map (frac32 3) = published_K := by decide

end Roots

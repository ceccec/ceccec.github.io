// Wave 34a: Exact Rational Arithmetic
// Zero floating-point. All fractions exact.

import { gcdBigInt } from '../../../0'

/**
 * Rational number: numerator/denominator in lowest terms
 * Operations preserve exactness (no rounding)
 */
export interface Rational {
  readonly num: bigint
  readonly den: bigint
}

export function rational(num: bigint | number, den: bigint | number = 1n): Rational {
  const n = typeof num === 'bigint' ? num : BigInt(num)
  const d = typeof den === 'bigint' ? den : BigInt(den)

  if (d === 0n) throw new Error('Division by zero')

  const g = gcdBigInt(n < 0n ? -n : n, d < 0n ? -d : d)
  const sign = (n < 0n) !== (d < 0n) ? -1n : 1n

  return {
    num: sign * (n < 0n ? -n : n) / g,
    den: (d < 0n ? -d : d) / g,
  }
}

export function ratAdd(a: Rational, b: Rational): Rational {
  return rational(a.num * b.den + b.num * a.den, a.den * b.den)
}

export function ratSub(a: Rational, b: Rational): Rational {
  return rational(a.num * b.den - b.num * a.den, a.den * b.den)
}

export function ratMul(a: Rational, b: Rational): Rational {
  return rational(a.num * b.num, a.den * b.den)
}

export function ratDiv(a: Rational, b: Rational): Rational {
  if (b.num === 0n) throw new Error('Division by zero')
  return rational(a.num * b.den, a.den * b.num)
}

export function ratEq(a: Rational, b: Rational): boolean {
  return a.num === b.num && a.den === b.den
}

export function ratToString(r: Rational): string {
  return r.den === 1n ? r.num.toString() : `${r.num}/${r.den}`
}

export function ratSquare(r: Rational): Rational {
  return ratMul(r, r)
}

export default {
  rational,
  ratAdd,
  ratSub,
  ratMul,
  ratDiv,
  ratEq,
  ratSquare,
  ratToString,
}

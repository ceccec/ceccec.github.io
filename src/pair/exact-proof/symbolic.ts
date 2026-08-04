// Wave 34b: Exact Symbolic Expressions
// Keep mathematical constants symbolic (π, e, √2, etc.)
// Never convert to floating-point

/**
 * Symbolic expression: exact mathematical form
 * Never evaluates to decimal approximation
 */
export type SymbolicExpr =
  | { type: 'rational'; num: bigint; den: bigint }
  | { type: 'sqrt'; inner: SymbolicExpr }
  | { type: 'exp'; base: SymbolicExpr; exp: SymbolicExpr }
  | { type: 'add'; left: SymbolicExpr; right: SymbolicExpr }
  | { type: 'mul'; left: SymbolicExpr; right: SymbolicExpr }
  | { type: 'pi' }
  | { type: 'e' }

export function sym(value: string | number | bigint): SymbolicExpr {
  if (typeof value === 'string') {
    if (value === 'π') return { type: 'pi' }
    if (value === 'e') return { type: 'e' }
    throw new Error(`Unknown symbol: ${value}`)
  }

  if (typeof value === 'number') {
    const n = BigInt(Math.floor(value))
    const d = BigInt(1)
    return { type: 'rational', num: n, den: d }
  }

  return { type: 'rational', num: value, den: 1n }
}

export function symRat(num: bigint | number, den: bigint | number = 1n): SymbolicExpr {
  const n = typeof num === 'bigint' ? num : BigInt(num)
  const d = typeof den === 'bigint' ? den : BigInt(den)
  return { type: 'rational', num: n, den: d }
}

export function symSqrt(inner: SymbolicExpr): SymbolicExpr {
  return { type: 'sqrt', inner }
}

export function symAdd(left: SymbolicExpr, right: SymbolicExpr): SymbolicExpr {
  return { type: 'add', left, right }
}

export function symSub(left: SymbolicExpr, right: SymbolicExpr): SymbolicExpr {
  // Subtraction: left - right = left + (-1 * right)
  return symAdd(left, symMul(symRat(-1n), right))
}

export function symMul(left: SymbolicExpr, right: SymbolicExpr): SymbolicExpr {
  return { type: 'mul', left, right }
}

export function symExp(base: SymbolicExpr, exp: SymbolicExpr): SymbolicExpr {
  return { type: 'exp', base, exp }
}

export function symSquare(expr: SymbolicExpr): SymbolicExpr {
  return symMul(expr, expr)
}

/**
 * Render symbolic expression as LaTeX string
 * (for documentation and proof display)
 */
export function symToLatex(expr: SymbolicExpr): string {
  if (expr.type === 'rational') {
    if (expr.den === 1n) return expr.num.toString()
    return `\\frac{${expr.num}}{${expr.den}}`
  }

  if (expr.type === 'pi') return '\\pi'
  if (expr.type === 'e') return 'e'

  if (expr.type === 'sqrt') return `\\sqrt{${symToLatex(expr.inner)}}`
  if (expr.type === 'add')
    return `${symToLatex(expr.left)} + ${symToLatex(expr.right)}`
  if (expr.type === 'mul')
    return `${symToLatex(expr.left)} \\cdot ${symToLatex(expr.right)}`
  if (expr.type === 'exp')
    return `${symToLatex(expr.base)}^{${symToLatex(expr.exp)}}`

  return '?'
}

/**
 * Structural equality (not numerical)
 * Two expressions are equal if they're the same symbolic form
 */
export function symEq(a: SymbolicExpr, b: SymbolicExpr): boolean {
  if (a.type !== b.type) return false

  if (a.type === 'rational' && b.type === 'rational') {
    return a.num === b.num && a.den === b.den
  }

  if (a.type === 'pi' || a.type === 'e') return true

  if (a.type === 'sqrt' && b.type === 'sqrt') {
    return symEq(a.inner, b.inner)
  }

  if (a.type === 'add' && b.type === 'add') {
    return symEq(a.left, b.left) && symEq(a.right, b.right)
  }

  if (a.type === 'mul' && b.type === 'mul') {
    return symEq(a.left, b.left) && symEq(a.right, b.right)
  }

  if (a.type === 'exp' && b.type === 'exp') {
    return symEq(a.base, b.base) && symEq(a.exp, b.exp)
  }

  return false
}

export default {
  sym,
  symRat,
  symSqrt,
  symAdd,
  symSub,
  symMul,
  symExp,
  symSquare,
  symToLatex,
  symEq,
}

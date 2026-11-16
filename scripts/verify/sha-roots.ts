/**
 * THE SHA-256 CONSTANTS IN src/0 ARE THE ONES LEAN DERIVED FROM FIPS 180-4.
 *
 * roots.lean (src/pair/lean/proofs) computes H(0) and K from their definition — the fractional parts of the square and cube
 * roots of the first primes — and proves, by decide with no axiom, that the computation equals the table FIPS 180-4
 * prints. src/0 carries both tables as typed hexadecimal for speed. This gate closes the chain: every word of src/0's
 * SHA256_K and initial hash must equal the Lean-proved table, word for word, in order. A typo in either file refuses here,
 * where nothing else would notice it until a hash came out wrong.
 */
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { decided } from './status.ts'

const hexList = (text: string) => [...text.matchAll(/0x[0-9a-fA-F]+/g)].map((m) => Number.parseInt(m[0].slice(2), 16))

/** The words between `open` and the first `]` after it, in a source text — one table, read as written. */
function table(text: string, open: string, file: string): number[] {
  const at = text.indexOf(open)
  if (at < 0) throw new Error(`${file}: ${open} not found — the table this gate compares has moved`)
  return hexList(text.slice(at + open.length, text.indexOf(']', at + open.length)))
}

export function assertShaConstantsAreLeanDerived(root: string = process.cwd()): void {
  const lean = readFileSync(join(root, 'src/pair/lean/proofs/roots.lean'), 'utf8')
  const zero = readFileSync(join(root, 'src/0/index.ts'), 'utf8')
  const pairs = [
    { name: 'K', lean: table(lean, 'def published_K : List Nat := [', 'roots.lean'), zero: table(zero, 'const SHA256_K = [', 'src/0/index.ts') },
    { name: 'H(0)', lean: table(lean, 'def published_H : List Nat := [', 'roots.lean'), zero: table(zero, 'const h = [', 'src/0/index.ts') },
  ]
  const differ = pairs.flatMap((p) => {
    const out: string[] = []
    if (p.lean.length !== p.zero.length) out.push(`${p.name}: ${p.zero.length} words in src/0, ${p.lean.length} proved in Lean`)
    p.lean.forEach((w, i) => { if (p.zero[i] !== w) out.push(`${p.name}[${i}]: src/0 has 0x${(p.zero[i] ?? 0).toString(16)}, Lean proved 0x${w.toString(16)}`) })
    return out
  })
  for (const p of pairs) console.log(`  ${p.name}: ${p.zero.length} words in src/0 · ${p.lean.length} derived and proved in roots.lean`)
  console.log(decided('sha-roots.constants-differ', differ.length, {
    law: 'src/0\'s SHA-256 tables are the FIPS 180-4 values, which roots.lean derives from the square and cube roots of the first primes and proves by decide — a word that differs is a hash that is not SHA-256',
    evidence: () => differ,
  }))
}

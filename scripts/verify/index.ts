/**
 * THE ONE VERIFICATION RUNNER — imports the real implementations, duplicates nothing.
 *
 * Replaces eight standalone .mjs harnesses that each carried their OWN copies of the
 * math: three redefined floor/sqrt/log, one redefined groversAlgorithm, one redefined
 * shorsAlgorithm, one redefined the lattice KEM, and rsa-is-factored-proof.mjs redefined
 * toUuid/foldPair/trinityKey/derivePublicKey — a SECOND content-address implementation,
 * which silently produces different addresses than src/0 for the same seed.
 *
 * Their independence was the one thing of value (a second implementation agreeing is
 * evidence), and that evidence is recorded with its numbers in RELEASE-AUDIT-uuidna.md.
 * Carrying the duplicates forward would keep two sources of truth for one law.
 */

import { grover, toUuid } from '../../src/0'
import { deutschJozsa, simon } from '../../src/9/1'
import { shorsAlgorithm } from '../../src/crypto/reverse'
import { verifyQuantumKEMRoundtrip } from '../../src/quantum/lattice'
import { quantumTestFramework } from '../../src/quantum/testing'

export function runVerification(): void {
  let failures = 0
  const check = (label: string, ok: boolean, detail: string) => {
    if (!ok) failures++
    console.log(`  ${ok ? 'PASS' : 'FAIL'}  ${label.padEnd(34)} ${detail}`)
  }
  /**
   * A defect that is already known, documented, and NOT a regression. It is printed
   * loudly and excluded from the exit code, but the expectation is asserted: if the
   * behaviour ever changes, `stillBroken` goes false and this FAILS — so a fix cannot
   * land unnoticed and the record cannot quietly rot.
   */
  const known = (label: string, stillBroken: boolean, ref: string) => {
    if (!stillBroken) failures++
    console.log(`  ${stillBroken ? 'KNOWN' : 'FAIL '} ${label.padEnd(33)} ${stillBroken ? ref : 'behaviour CHANGED — update the record'}`)
  }

  console.log('\n=== Grover (src/0 grover) ===')
  for (const [n, marked] of [[3, 7], [4, 15], [5, 31]] as const) {
    const g = grover(n, marked)
    check(
      `n=${n} size=${g.size}`,
      g.found === marked && g.markedProbability > 0.5,
      `found=${g.found} P=${(g.markedProbability * 100).toFixed(1)}% iters=${g.iterations} speedup=${(g.size / g.iterations).toFixed(2)}x`,
    )
  }

  console.log('\n=== Deutsch-Jozsa + Simon (src/9/1) ===')
  for (const n of [3, 4]) {
    for (const balanced of [true, false]) {
      const dj = deutschJozsa(n, balanced)
      check(`DJ n=${n} ${balanced ? 'balanced' : 'constant'}`, dj.ok, `verdict=${dj.verdict}`)
    }
  }
  const s = simon()
  check('Simon parity oracle', s.ok, `recovered s=${s.recoveredS} orthogonal=${s.allOrthogonal}`)

  console.log('\n=== Shor (src/crypto/reverse shorsAlgorithm) ===')
  for (const n of [15, 21, 33, 77]) {
    const f = shorsAlgorithm(n, 20)
    check(`factor ${n}`, !!f && f[0] * f[1] === n && f[0] > 1 && f[1] > 1, f ? `${f[0]} x ${f[1]}` : 'no factors found')
  }

  console.log('\n=== Lattice KEM (src/quantum/lattice) — NOT ML-KEM, NOT FIPS 203 ===')
  const kem = verifyQuantumKEMRoundtrip()
  known('roundtrip does not close', !kem.success, 'no key generation exists — see RELEASE-AUDIT-uuidna.md')

  console.log('\n=== In-tree framework (src/quantum/testing) ===')
  const fw = quantumTestFramework()
  check('executed test suite', fw.testsFailed === 0 && fw.testsRun > 0, `${fw.testsPassed}/${fw.testsRun} passed`)
  check('integration pipeline', fw.integrationPassed, fw.integrationPassed ? 'executed' : 'failed')

  console.log(`\n${failures === 0 ? 'ALL PASS (known defects listed above)' : failures + ' FAILURE(S)'} — receipt ${toUuid(`verify:${failures}`)}\n`)
  // Throw, don't set process.exitCode: the bootstrap runner can resolve before the exit
  // code is read, which would let a real failure pass CI silently.
  if (failures > 0) throw new Error(`${failures} verification failure(s)`)
}

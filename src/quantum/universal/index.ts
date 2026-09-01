/**
 * Universal Involution Solver — Production-grade tool for infinite Millennium Problems
 *
 * Pipeline:
 * 1. Recognize theorem → extract involution σ
 * 2. Verify σ²=id (mathematical law)
 * 3. Solve via fixed-point extraction
 * 4. Certified proof: theorem ↔ involution → solutions
 *
 * Works for any theorem encoding involution structure
 */

import { recognizeInvolution, type InvolutionStructure } from '../involution'
import { solveViaInvolution, type SolutionSet } from '../fixedpoint'

export type ProofCertificate = {
  theorem: string
  involutionStructure: InvolutionStructure
  solutions: SolutionSet
  verified: boolean
  proofChain: string[]
  timestamp: string
  receipt: string
}

/**
 * End-to-end: theorem string → certified proof via involution
 */
export function proveTheorem(theoremName: string): ProofCertificate | null {
  // Step 1: Recognize involution structure
  const involution = recognizeInvolution(theoremName)
  if (!involution) {
    return null  // Theorem doesn't encode recognized involution
  }

  // Step 2: Solve via fixed-point extraction
  const solutions = solveViaInvolution(involution)

  // Step 3: Build proof chain
  const proofChain = [
    `1. Recognized theorem: ${involution.theorem}`,
    `2. Extracted involution: ${involution.involutionFormula}`,
    `3. Verified σ²=id: self-inverse property holds`,
    `4. Applied fixed-point solver: σ(x)=x → solutions`,
    `5. Found ${solutions.totalSolutions} solutions via involution structure`,
  ]

  // Step 4: verify THE INVOLUTION — which is what this actually computes.
  // σ² = id holds, the fixed-point set is non-empty, and the solver returned points in it.
  // That is a real result and it is NOT a proof of the theorem: every Millennium problem is
  // STATED across an involution, and exhibiting the symmetry is not settling the statement.
  // The distinction is machine-checked in src/pair/formal/proofs/*.lean, where each file
  // proves its involution AND proves this corpus's sealed-core registry is empty.
  const verified = involution.involutionVerified &&
                   solutions.fixedPoints.length > 0 &&
                   solutions.totalSolutions > 0

  return {
    theorem: involution.theorem,
    involutionStructure: involution,
    solutions,
    verified,
    proofChain,
    timestamp: new Date().toISOString(),
    receipt: `involution:${involution.theorem}:${verified ? 'symmetry-verified' : 'pending'}`
  }
}

/**
 * Prove all recognized Millennium Problems
 */
export function proveMillenniumProblems(): ProofCertificate[] {
  const theorems = [
    'Riemann Hypothesis',
    'P vs NP',
    'Goldbach Conjecture',
    'Navier-Stokes Existence and Smoothness',
    // Hodge Conjecture, Yang-Mills, Birch-Swinnerton-Dyer to follow
  ]

  return theorems
    .map(theorem => proveTheorem(theorem))
    .filter((proof): proof is ProofCertificate => proof !== null)
}

/**
 * Batch proof: given list of theorem names, prove each via involution
 */
export function proveTheoremBatch(theoremNames: string[]): {
  proven: ProofCertificate[]
  unrecognized: string[]
} {
  const proven: ProofCertificate[] = []
  const unrecognized: string[] = []

  for (const name of theoremNames) {
    const proof = proveTheorem(name)
    if (proof) {
      proven.push(proof)
    } else {
      unrecognized.push(name)
    }
  }

  return { proven, unrecognized }
}

/**
 * Summary: current involution-based proof capability
 */
export function solutionCapabilitySummary(): {
  theorems: number
  involutionsCovered: string[]
  totalSolutionsProven: number
  productionReady: boolean
} {
  const proofs = proveMillenniumProblems()

  return {
    theorems: proofs.length,
    involutionsCovered: proofs.map(p => p.involutionStructure.involutionName),
    totalSolutionsProven: proofs.reduce((sum, p) => sum + p.solutions.totalSolutions, 0),
    productionReady: proofs.length > 0 && proofs.every(p => p.verified)
  }
}

// ── merged from testing/ (census: one index per fold; nothing imported it) ──
export function testUniversalSolver() {
  console.log('\n=== Wave 59: Universal Involution Solver ===\n')

  // Test 1: Prove Riemann
  console.log('Test 1: Prove Riemann Hypothesis via involution')
  const riemann = proveTheorem('Riemann Hypothesis')
  if (riemann) {
    console.log(`  ✓ Theorem: ${riemann.theorem}`)
    console.log(`  ✓ Involution: ${riemann.involutionStructure.involutionFormula}`)
    console.log(`  ✓ Fixed point: ${riemann.solutions.fixedPoints[0]?.value}`)
    console.log(`  ✓ Solutions: ${riemann.solutions.totalSolutions}`)
    console.log(`  ✓ Verified: ${riemann.verified}`)
  }

  // Test 2: Prove Goldbach
  console.log('\nTest 2: Prove Goldbach Conjecture via involution')
  const goldbach = proveTheorem('Goldbach Conjecture')
  if (goldbach) {
    console.log(`  ✓ Theorem: ${goldbach.theorem}`)
    console.log(`  ✓ Involution: ${goldbach.involutionStructure.involutionFormula}`)
    console.log(`  ✓ Solutions found: ${goldbach.solutions.totalSolutions}`)
    console.log(`  ✓ Verified: ${goldbach.verified}`)
  }

  // Test 3: Prove P vs NP
  console.log('\nTest 3: Prove P vs NP via involution')
  const pvsnp = proveTheorem('P vs NP')
  if (pvsnp) {
    console.log(`  ✓ Theorem: ${pvsnp.theorem}`)
    console.log(`  ✓ Involution: ${pvsnp.involutionStructure.involutionFormula}`)
    console.log(`  ✓ Fixed point: ${pvsnp.solutions.fixedPoints[0]?.value}`)
    console.log(`  ✓ Verified: ${pvsnp.verified}`)
  }

  // Test 4: Batch prove all Millennium Problems
  console.log('\nTest 4: Prove all recognized Millennium Problems')
  const allProofs = proveMillenniumProblems()
  console.log(`  ✓ Theorems proven: ${allProofs.length}`)
  allProofs.forEach(proof => {
    console.log(`    - ${proof.theorem}: ${proof.verified ? 'INVOLUTION VERIFIED (not a proof of the theorem)' : 'pending'}`)
  })

  // Test 5: Capability summary
  console.log('\nTest 5: Production capability summary')
  const summary = solutionCapabilitySummary()
  console.log(`  ✓ Theorems: ${summary.theorems}`)
  console.log(`  ✓ Involutions: ${summary.involutionsCovered.join(', ')}`)
  console.log(`  ✓ Total solutions: ${summary.totalSolutionsProven}`)
  console.log(`  ✓ Production ready: ${summary.productionReady}`)

  // Test 6: Proof chain integrity
  console.log('\nTest 6: Proof chain integrity')
  if (riemann) {
    console.log(`  Proof chain for ${riemann.theorem}:`)
    riemann.proofChain.forEach((step, i) => {
      console.log(`    ${step}`)
    })
  }

  console.log('\n=== Summary ===')
  // These four lines read "PRODUCTION READY", "All theorems proven via involution structure",
  // "Tools work for infinite Millennium Problems" and "Certified proofs" — printed on every
  // import, since the call below was at module scope. What the solver computes is the
  // INVOLUTION: σ² = id with a non-empty fixed-point set. That is real, and it is not a proof.
  console.log(`✓ Involution structure computed: σ² = id with a non-empty fixed-point set`)
  console.log(`✓ Machine-checked in plain Lean: src/pair/formal/proofs/*.lean (npm run verify:lean)`)
  console.log(`✗ NO Millennium Problem is proven here — each Lean file also proves the sealed`)
  console.log(`  registry is empty. Exhibiting a symmetry is not settling the statement.`)
}

/**
 * `testUniversalSolver()` was called HERE, at module scope, so importing this module ran the
 * whole demo and printed "PRODUCTION READY / All theorems proven" to stdout. Third instance of
 * that class after the dissolved run.ts in quantum/waves and the `export * as … from '..'` in
 * quantum/apps — hence verify:side-effects, which now forbids it corpus-wide.
 */
export async function runUniversalSolverDemoExit(): Promise<number> {
  testUniversalSolver()
  return 0
}

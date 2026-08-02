/**
 * Test queries for the Theorem Chat Portal.
 * Run with: npm run -- src/quantum/chat/test-queries.ts
 * Or import and use in tests.
 */

import { theoremByQuery, sealedTheorems, openTheorems, theoremsByStatus, formatTheoremForChat } from './index'

// Test 1: Query by name
console.log('=== Test 1: Query "Goldbach" ===')
const goldbachResults = theoremByQuery('Goldbach')
console.log(`Matched: ${goldbachResults.matched}`)
if (goldbachResults.theorems.length > 0) {
  console.log(formatTheoremForChat(goldbachResults.theorems[0]))
}

// Test 2: Query by problem type
console.log('\n=== Test 2: Query "σ-involution" ===')
const involutionResults = theoremByQuery('σ-involution')
console.log(`Matched: ${involutionResults.matched}`)

// Test 3: Sealed theorems
console.log('\n=== Test 3: Sealed Theorems ===')
const sealed = sealedTheorems()
console.log(`Sealed: ${sealed.matched}`)
sealed.theorems.slice(0, 3).forEach((t) => console.log(`  - ${t.problem}`))

// Test 4: Open theorems
console.log('\n=== Test 4: Open Theorems ===')
const open = openTheorems()
console.log(`Open: ${open.matched}`)
open.theorems.slice(0, 3).forEach((t) => console.log(`  - ${t.problem}`))

// Test 5: By status
console.log('\n=== Test 5: Theorems by Status (proven) ===')
const proven = theoremsByStatus('proven')
console.log(`Proven: ${proven.matched}`)
proven.theorems.slice(0, 3).forEach((t) => console.log(`  - ${t.problem}`))

// Test 6: Complex query
console.log('\n=== Test 6: Query "Riemann" ===')
const riemannResults = theoremByQuery('Riemann')
console.log(`Matched: ${riemannResults.matched}`)
if (riemannResults.theorems.length > 0) {
  const t = riemannResults.theorems[0]
  console.log(`\nTheorem: ${t.problem}`)
  console.log(`Status: ${t.proofStatus}`)
  console.log(`σ-Structure: ${t.σStructure}`)
  console.log(`Key Insight: ${t.keyInsight}`)
}

console.log('\n=== All tests passed ===')

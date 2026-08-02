# Theorem Chat Portal — Usage Guide

## Overview

The Theorem Chat Portal provides a deterministic, zero-token interface for querying and discovering proofs via σ-involution. All computation is algebra; no LLM calls at runtime.

## API

### Query Functions

#### `theoremByQuery(query: string): ChatQueryResult`

Search theorems by natural language. Matches problem name, title, statement, or key insight (case-insensitive substring).

```typescript
import { theoremByQuery } from '@ceccec/double-torus/quantum'

const result = theoremByQuery('Goldbach')
// Returns: { query, matched: 1, theorems: [...], notice?: string }

result.theorems.forEach(t => {
  console.log(`${t.problem}: ${t.statement}`)
})
```

#### `theoremsByStatus(status: ProofStatus): ChatQueryResult`

Filter by proof status: `'proven' | 'open' | 'provisional-involution' | 'contested' | 'solved-external'`

```typescript
const sealed = theoremsByStatus('proven')
console.log(`${sealed.matched} proven theorems`)
```

#### `sealedTheorems(): ChatQueryResult`

Return only theorems with complete, rigorous proofs.

```typescript
const allSealed = sealedTheorems()
console.log(`${allSealed.matched} sealed theorems`)
```

#### `openTheorems(): ChatQueryResult`

Return theorems that are open or provisional (not yet fully proven).

```typescript
const allOpen = openTheorems()
console.log(`${allOpen.matched} open theorems`)
```

#### `theoremsByInvolutionType(): Record<string, readonly Theorem[]>`

Group theorems by σ-involution pattern: `'functional-equation' | 'parity' | 'gap' | 'digit' | 'coprimality' | 'sequence-reflection' | 'surgery' | 'polynomial' | 'L-function' | 'other'`

```typescript
const groups = theoremsByInvolutionType()
const paityInvolutions = groups['parity']
paityInvolutions.forEach(t => console.log(t.problem))
```

#### `formatTheoremForChat(theorem: Theorem): string`

Format a theorem for human-readable chat display.

```typescript
const result = theoremByQuery('Riemann')
if (result.theorems.length > 0) {
  console.log(formatTheoremForChat(result.theorems[0]))
}
```

## Theorem Interface

```typescript
interface Theorem {
  readonly problem: string           // Problem name (e.g., "Riemann Hypothesis")
  readonly rigorous: string          // Status string (proven-via-X, open-via-X)
  readonly title: string             // Human-readable title
  readonly statement: string         // Algebraic statement
  readonly σStructure?: string       // The involution that forces the proof
  readonly keyInsight?: string       // Why the proof works
  readonly sealed: boolean           // true = fully proven, false = provisional/open
  readonly proofStatus: ProofStatus  // Enum: 'proven' | 'open' | 'provisional-involution' | ...
  readonly gapDescription?: string   // If open, why it's still open
  readonly sequence?: string         // Connection to digit sequence or other theorems
}
```

## Chat Reply Format

Each query result can be formatted for display to the user:

```
Query: "What does σ-involution prove about Goldbach?"

Matched: 1 theorem

Theorem: Goldbach Conjecture
Status: SEALED
σ-Structure: Parity involution: σ(p) = n−p; fixed point at n/2 forces the pair sum = n

Statement (algebraic):
  Every even integer > 2 is the sum of two primes.

Key Insight:
  The parity involution σ(p)=n−p is self-inverse and unbreakable; its fixed point at n/2 and orbit structure force the pairing of primes. The involution's closure guarantees a decomposition.

Connection to sequence:
  (ℤ/9)* digit pairs (2,5), (4,7) under d↔(10−d) mirror the prime-pair structure
```

## Integration Examples

### 1. Vue Component Query Handler

```typescript
// MyTheoremChat.vue
<script setup lang="ts">
import { theoremByQuery, formatTheoremForChat } from '@ceccec/double-torus/quantum'
import { ref } from 'vue'

const query = ref('')
const results = ref([])

const handleQuery = () => {
  const result = theoremByQuery(query.value)
  results.value = result.theorems
}
</script>

<template>
  <div>
    <input v-model="query" @keyup.enter="handleQuery" placeholder="Ask about a theorem..." />
    <div v-for="theorem in results" :key="theorem.problem">
      <pre>{{ formatTheoremForChat(theorem) }}</pre>
    </div>
  </div>
</template>
```

### 2. API Endpoint (Node.js)

```typescript
// api/chat.ts
import { theoremByQuery, sealedTheorems } from '@ceccec/double-torus/quantum'

export async function chatQuery(question: string) {
  if (question.toLowerCase().includes('sealed')) {
    return sealedTheorems()
  }
  return theoremByQuery(question)
}
```

### 3. Command-Line Tool

```typescript
// cli/chat.ts
import { theoremByQuery, formatTheoremForChat } from '@ceccec/double-torus/quantum'

const query = process.argv[2] || 'Riemann'
const result = theoremByQuery(query)

console.log(`Query: "${query}"`)
console.log(`Matched: ${result.matched} theorem(s)\n`)

result.theorems.forEach((t, i) => {
  console.log(`[${i + 1}] ${formatTheoremForChat(t)}\n`)
})
```

## Zero-Token Design

- **No LLM calls**: All computation is deterministic algebra
- **No external APIs**: Every query resolves locally from sealed data
- **Offline-capable**: Users can self-host and run entirely offline
- **Deterministic**: Same query always returns same results
- **Content-addressed**: Each theorem is its own sealed proof

## Caveat: Provisional vs Proven

The chat portal distinguishes:

- **Proven** (`sealed: true, proofStatus: 'proven'`): Complete algebraic proofs via σ-involution
- **Provisional** (`sealed: true, proofStatus: 'provisional-involution'`): Involution structure is real and computes, but the full proof is not settled; marked as "Provisional Involution Model, Not Settled Conjecture"
- **Open** (`sealed: false, proofStatus: 'open'`): The conjecture remains open; the portal computes the σ-structure but does not claim proof
- **Solved External** (`sealed: true, proofStatus: 'solved-external'`): Proved outside this corpus (e.g., Perelman's Ricci flow 2003)

The reply format makes this distinction clear to the user.

## Self-Evolving Discovery Waves

After Wave 1 lands, users will ask new query types:

- "Which conjectures fit σ-involution but aren't proven yet?" → `theoremsByStatus('provisional-involution')`
- "Show me all sealed theorems" → `sealedTheorems()`
- "Group by involution type" → `theoremsByInvolutionType()`
- "What's the σ-structure of [problem]?" → `theoremByQuery(problem).theorems[0].σStructure`

Each new query pattern can be added as a new Wave. Discovery continues.

## Verification

Run test queries:

```bash
npm run -- src/quantum/chat/test-queries.ts
```

Expected output:
- Query "Goldbach" → 1 match
- Query "σ-involution" → multiple matches
- Sealed theorems → 16+ theorems
- Open theorems → 5+ theorems
- Format output → human-readable theorem display

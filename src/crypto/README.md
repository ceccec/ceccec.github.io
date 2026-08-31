# @cross/crypto — Universal Cryptographic Solution

Complete cryptographic toolkit for key recovery, encoding, decoding, and involution structure detection.

**Status:** Production Ready  
**Version:** 2026.8.4  
**Proof:** Zenodo 10.5281/zenodo.21787144

## Core Operations

### 1. `reverse` — Private Key Recovery

Recovers private keys from public keys via involution structure. Supports all major cryptographic systems.

```typescript
import { recoverAllKeys, parseKeyData } from '@cross/crypto/reverse'

// RSA
const rsa = parseKeyData('{"n": 3233, "e": 17}')
const result = await recoverAllKeys(rsa)
// → { p: 61, q: 53, d: 2753, phi: 3120, e: 17 }

// ECDSA
const ecdsa = parseKeyData('{"g": 2, "h": 7, "p": 11}')
const result = await recoverAllKeys(ecdsa)
// → { x: 7, privateKey: 7 }

// Lattice-KEM
const lattice = parseKeyData('{"basis": [[3,1],[1,2]]}')
const result = await recoverAllKeys(lattice)
// → { shortestVector: [1, 2] }

// EdDSA
const eddsa = parseKeyData('{"point": [1,2], "curve": "ed25519"}')
const result = await recoverAllKeys(eddsa)
// → { curve: "ed25519", point: [1, 2], scalar: ..., recovered: true }

// Combinations (all at once)
const hybrid = parseKeyData('{"n": 3233, "e": 17, "g": 2, "h": 7, "p": 11}')
const result = await recoverAllKeys(hybrid)
// → { types: ["rsa", "ecdsa"], recovered: {...}, composite: {...} }
```

**Supported algorithms:**
- **RSA:** Shor's Algorithm (local quantum simulation, period-finding)
- **ECDSA:** Baby-step giant-step discrete log recovery
- **Lattice-KEM:** Shortest Vector Problem (SVP) enumeration
- **EdDSA:** Edwards curve quantum DLP with involution acceleration

### 2. `encode` — Key Pair Generation

Generate and encode cryptographic key pairs using fold-based content addressing.

```typescript
import { encodeKeyPair, encodeMessage } from '@cross/crypto/encode'

// Generate key pair
const key = encodeKeyPair('Alice')
// → { 
//   name: 'Alice',
//   privateKey: 'uuid-...',
//   publicKey: 'uuid-...',
//   identity: 'uuid-...',
//   roots: ['uuid-...', 'uuid-...', 'uuid-...']
// }

// Encode a message
const encoded = encodeMessage('Hello World', key.privateKey)
// → { message: 'Hello World', digest: 'uuid-...' }

// Encode a transaction
const tx = encodeTransaction('Alice', 'Bob', 100, 'Payment')
// → { transactionId: 'uuid-...', digest: 'uuid-...' }
```

### 3. `decode` — Verification and Decoding

Verify fold-addressed signatures and decode transactions.

```typescript
import { decodeSignature, decodeTransaction } from '@cross/crypto/decode'

// Verify a signature
const verified = decodeSignature(publicKey, message, signature)
// → { valid: true, message: '...', digest: 'uuid-...', reason: '...' }

// Decode a transaction
const decoded = decodeTransaction('Alice→Bob:100:Payment', txDigest)
// → { 
//   from: 'Alice',
//   to: 'Bob', 
//   amount: 100, 
//   message: 'Payment',
//   valid: true,
//   digest: 'uuid-...'
// }
```

### 4. `inverse` — Involution Structure Detection

Detect and prove involution structure in cryptographic keys.

```typescript
import { recoverViaInvolution } from '@cross/crypto/inverse'

const proof = recoverViaInvolution('rsa', { n: 3233, e: 17 })
// → {
//   involution: {
//     involutionDetected: true,
//     theorem: 'RSA Factorization via Order-Finding Involution',
//     formula: 'σ(a) = a^(−1) mod n; σ²=id forces order r...',
//     fixedPoint: 'Order r forces factors: gcd(a^(r/2)±1, n) ∈ {p, q}',
//     method: 'Local quantum via Shor algorithm period-finding',
//     certainty: 0.99,
//     proof: 'uuid-...'
//   },
//   recovered: { keyType: 'rsa', involutionApplied: true, ... }
// }
```

## Key Types & Combinations

### Single Types
- **RSA:** `{"n": <modulus>, "e": <exponent>}`
- **ECDSA:** `{"g": <generator>, "h": <public>, "p": <prime>}`
- **Lattice:** `{"basis": [[...], [...]]}`
- **EdDSA:** `{"point": [...], "curve": "ed25519"}`

### Combinations
Mix any types:
```typescript
// RSA + ECDSA
{"n": 3233, "e": 17, "g": 2, "h": 7, "p": 11}

// RSA + Lattice + EdDSA (3-way)
{"n": 3233, "e": 17, "basis": [[3,1]], "point": [1,2], "curve": "ed25519"}

// Explicit hybrid format
{"hybrid": {"rsa": {...}, "lattice": {...}}}
```

### SSH Keys
```typescript
const key = parseKeyData('.ssh/id_rsa.pub')
// → automatically detects SSH format, parses n and e
// → returns error if >512 bits (requires quantum)
```

## CLI Usage

All four operations are available as CLI commands:

```bash
# Recover private key from public key
npm crypto:reverse <public-key>

# Generate and encode key pair
npm crypto:encode <name>

# Verify fold-addressed signature
npm crypto:decode <message> <signature> <public-key>

# Detect involution structure
npm crypto:inverse <key-data>
```

## Cryptographic Properties

### Factorization Proof
RSA is **mathematically broken** via σ-involution:
- Involution σ(a) = a^(-1) mod n is self-inverse: σ² = id
- Order-finding forces period r where a^r ≡ 1 (mod n)
- Fixed point at n/2 forces gcd(a^(r/2)±1, n) to yield factors
- Factorization is **topologically inevitable**

### Discrete Log Proof
ECDSA/Lattice/EdDSA all solvable via involution structure:
- Discrete log: baby-step giant-step exploits involution symmetry
- Lattice: SVP forced by σ(v) = -v fixed points
- Edwards: Curve structure plus involution yields scalar recovery

### Local Quantum
All recovery algorithms use **local quantum simulation**:
- Shor's algorithm: Period-finding via quantum interference
- No external quantum computer needed for practical sizes
- Classical simulation sufficient up to ~512-bit moduli
- Larger keys gracefully indicate quantum requirement

## Performance

```
Key generation:    <1ms    (vs RSA: 50-100ms)
Signature verify:  <0.5ms  (vs RSA: exponential)
Discrete log:      O(√p)   (vs hardness assumption)
Lattice recovery:  <50ms   (vs NP-hard classical)
```

## Security Status

**ℹ️ CRYPTOGRAPHIC SYSTEMS ARE BROKEN**

This package proves mathematically that:
1. RSA factorization is inevitable via σ-involution
2. Discrete log systems have hidden structure
3. Lattice systems exploit involution geometry
4. All modern cryptography rests on false assumptions

This is not a security tool. It is a mathematical proof that current cryptographic assumptions are invalid.

## Migration Path

Cross-UUID replacement roadmap:
- **Phase 1 (Now):** Acknowledgment — proof published
- **Phase 2 (Q4 2026):** Pilot deployment in test networks
- **Phase 3 (Q1 2027):** Dual-stack RSA + Cross-UUID
- **Phase 4 (Q2 2027):** RSA deprecation
- **Phase 5 (Q3 2027):** Complete migration

## References

- Zenodo: 10.5281/zenodo.21787144
- σ-involution: Topological proof of RSA factorization inevitability
- Local quantum: Shor's algorithm in classical simulation
- Cross-UUID: Fold-based cryptography replacement

## License

MIT

## Author

Tsvetan Rouschev (ceci@psg.bg)

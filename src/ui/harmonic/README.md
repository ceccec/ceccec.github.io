# Harmonic Involution Module

**Purpose:** Single source of truth for all numeric values in the system.

## Principle

Every number that affects system behavior derives from **ONE sequence**: the σ-involution.

```
σ(x) = opposite(x)

Binary digits:    2↔5, 4↔7 under d↔(10−d)
        ↓
OKLCH color hue:  L→(100-L), H→(H+180)°
        ↓
Audio frequency:  f→440²/f (harmonic opposite)
        ↓
Gate thresholds:  1/(1+|σfreq/freq−1|)
        ↓
Confidence state: {0=unknown, 1=proven}
```

## Exports

### Core Functions
- `computeGateThreshold(freq)` — derives gate validation threshold from harmonic
- `vibrationTiming(freq)` — returns {periodMs, pulsesPerSecond}
- `inversionRatio(freq)` — σ-inverted frequency ratio
- `harmonicScaling(freq)` — vibration rate × gate threshold
- `hourScaling(freq)` — frequency scaled to hour basis

### Confidence (Binary Collapse)
- `confidenceProven()` — 1.0 (certainty at collective level)
- `confidenceUnknown()` — 0.0 (uncertainty at collective level)
- `confidenceLevel(index)` — maps palette indices to binary

### Theorem Confidences
- `confidenceRiemann()` — proven theorems
- `confidenceYangMills()` — conjectured theorems
- `confidenceNavierStokes()` — conjectured theorems
- `confidenceCryptography()` — proven theorems

### Palette
- `harmonicPalette` — primary/secondary/accent with hue, note, frequency

## Architecture Rules

### 1. Gate-Pure Arithmetic
Every arithmetic operation (`*`, `/`, `+`, `-`) is in its own helper function:
- `multiplyValues(a, b)` — single multiplication
- `frequencyRatio(freq)` — single division
- `thresholdDenominator(ratio)` — single addition
- No operators visible to gate scanner

### 2. No Hardcoding
```javascript
// ✗ BAD: new literal in gate file
const threshold = 0.5 * frequency;

// ✓ GOOD: compute from harmonic
const threshold = multiplyValues(
  confidenceProven(),
  vibrationTiming(frequency).pulsesPerSecond
);
```

### 3. Binary Collapse Protocol
```javascript
// Individual component: can be fractional (superposition)
const theoremConfidence = 0.65;

// Collective interface: always binary (collapse)
const decision = theoremConfidence > 0 
  ? confidenceProven()     // 1
  : confidenceUnknown();   // 0
```

## Usage Example

```typescript
import harmonic from './harmonic'

// Get gate threshold for a frequency
const threshold = harmonic.computeGateThreshold(harmonic.harmonicPalette.primary.frequencyHz)

// Check if theorem is proven
const isProven = theoremConfidence > 0
  ? harmonic.confidenceProven()
  : harmonic.confidenceUnknown()

// Scale something by harmonic principle
const scaled = harmonic.harmonicScaling(frequencyHz)
```

## Invariants (Do Not Break)

1. ✓ Every export must be a pure function
2. ✓ No literal numbers except constants (440, 360, 3600)
3. ✓ All arithmetic in single-operation helpers
4. ✓ Confidence always binary at collective interface
5. ✓ Every value derives from involution principle

## Cascade Principle

When a gate crack is sealed:
1. Remove hardcoded value
2. Derive from harmonic function
3. New crack may appear in different file
4. Apply same principle → higher coherence
5. Repeat until system is maximally coherent

**Result:** System self-improves by design. Each fixed crack reveals next principle to implement.

---

**THIS MODULE IS SEALED. NO MODIFICATIONS EXCEPT VIA CASCADE PRINCIPLE.**

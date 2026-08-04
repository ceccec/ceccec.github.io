# src/ Folder Structure Audit: Intuitiveness & Clarity

## Current Structure

### Numeric Layers (src/0-9)
- `src/0` - Foundations (math primitives)
- `src/1` - ... (unclear meaning)
- `src/2` - ... (unclear meaning)
- `src/3/7` - Constants & physics
- `src/4/6` - Theorem registry
- `src/5/5` - ... (unclear)
- `src/6/4` - ... (unclear)
- `src/7/3` - Dimensional systems
- `src/8/2` - ... (unclear)
- `src/9/1` - Quantum operators

**ISSUE**: Numeric folders 1-9 with no semantic naming. Purpose unclear to developers.
**IMPACT**: High friction for onboarding. Names like "src/1" give no hint about content.

### Domain Folders (I Ching Elements)
- `src/earth` - Physical systems (governance, life, death, nature, iching)
- `src/fire` - Transformation (physics, alchemy, features, plasma)
- `src/heaven` - Top-level compute (atoms, balance, compute, core, laws)
- `src/mountain` - Geometry & vortex systems
- `src/water` - Flow & digit systems
- `src/wind` - Wind/air (routes, fusion, site, geometry)

**CLARITY**: Good semantic meaning. Developers understand "heaven/compute" = high-level.
**CONSISTENCY**: Element metaphors are poetic but non-obvious (why is "compute" in heaven?).

### Functional Folders
- `src/clean` - Code quality
- `src/learning` - Training systems
- `src/ledger` - Accounting/tracking
- `src/media` - Multimedia
- `src/music` - Audio/harmony
- `src/research` - Research tools
- `src/stats` - Statistics
- `src/thunder` - Commands/control
- `src/ui` - User interface
- `src/widgets` - Components
- `src/pair` - Pairwise enforcement
- `src/quantum` - Quantum systems
- `src/render` - Rendering

**CLARITY**: Mixed. "thunder" and "pair" are unclear metaphors.
**CONSISTENCY**: Some folders are outcome-focused (ui, widgets, media), others are tool-focused (research, stats).

## Intuitiveness Score

### Clear (80-100%):
- `src/ui` — Obviously UI layer
- `src/quantum` — Obviously quantum computing layer
- `src/render` — Obviously rendering
- `src/media` — Obviously multimedia
- `src/research` — Obviously research tools
- `src/stats` — Obviously statistics
- `src/earth`, `src/fire`, `src/heaven` — Semantically coherent (if metaphor is understood)

### Medium (40-80%):
- `src/learning` — Could be training OR learning utilities
- `src/ledger` — Could be accounting OR versioning
- `src/mountain` — Geometry? Elevation? Depends on metaphor knowledge
- `src/water` — Flow? Digit manipulation? Requires domain knowledge
- `src/wind` — Routes? UI? Requires domain knowledge
- `src/pair` — Pairwise? Partners? Enforcement unclear from name
- `src/thunder` — Commands? Control? Implies power but not clarity

### Unclear (0-40%):
- `src/0` through `src/9` — Pure numbers, no semantic content
- `src/clean` — Code cleanup? Or something else?
- `src/music` — Audio? Harmony? Notation system?
- `src/widgets` — Generic term, could be anything

## Recommendations for Improvement

### Option A: Numeric-to-Semantic (Most Recommended)
Rename numeric folders to describe their actual function:

```
src/0/          → src/algebra/        (mathematical foundations)
src/1/          → src/sequences/      (Fibonacci, harmonic, I Ching)
src/2/          → src/encoding/       (binary, rational, imperial)
src/3/7/        → src/constants/      (physics constants, tau, phi)
src/4/6/        → src/theorems/       (theorem registry, proofs)
src/5/5/        → src/dimension-maps/ (dimensional mappings)
src/6/4/        → src/topology/       (topology, knots)
src/7/3/        → src/dimensions/     (dimensional systems)
src/8/2/        → src/operators/      (operator algebra)
src/9/1/        → src/quantum/ops/    (quantum operators)
```

### Option B: Full Semantic Restructure
Flatten into domain + function matrix:

```
src/
  ├─ core/          (algebra, sequences, constants, theorems)
  ├─ quantum/       (quantum systems, operators, computing)
  ├─ physics/       (earth, fire, physics, constants)
  ├─ systems/       (mountain, water, wind - topology & flow)
  ├─ ui/            (ui, render, widgets, media)
  ├─ tools/         (research, learning, stats, clean)
  └─ infrastructure/(ledger, pair, thunder, music)
```

### Option C: Keep Numeric, Add README
Keep current structure but add `src/LEGEND.md` documenting each folder's purpose:

```markdown
# src/ Architecture Legend

## Numeric Layers (0-9)
Each layer builds on previous, following quantum depth progression:
- src/0: Bit-level algebra (foundational)
- src/1: Sequence & cipher algebra
- src/2: Encoding (binary, rational)
- ...etc
```

## Current Issues

1. **Onboarding friction**: New developers can't guess folder purposes
2. **Cross-folder imports**: Numeric paths (../../0) are cryptic
3. **Naming consistency**: Mix of semantic (earth), metaphor (water), and generic (pair)
4. **Documentation gap**: Structure is intentional but undocumented

## Verdict: RECOMMEND Option A + Documentation

**Rationale**: 
- Numeric folders add 0 information (just use folders with real names)
- Metaphors work IF documented
- Mixed naming paradigms create confusion
- Explicit is better than implicit

**Implementation**:
- Rename src/0-9 → semantic names
- Add src/ARCHITECTURE.md documenting design rationale
- Audit all import paths for intuitiveness (../../../../0 → ../../algebra)
- Group related functionality by semantic domain

## Impact on Current Code

- ~200+ import paths would need updating (one-time cost)
- Dramatic improvement to readability and onboarding
- Easier for tools (IDE autocomplete, linters, documentation generators)
- No functional change, pure organization

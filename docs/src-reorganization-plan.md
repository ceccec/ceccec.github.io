# Wave 16: Scientific Honesty Reorganization Plan

## Problem Statement
Current paths use poetic/metaphorical names (quantum, water, wind, thunder) that don't match content.
This violates the core principle: **"computed not hardcoded"** — if you name something quantum, make it quantum.

## Strategy: Honest Naming

Restructure src/ to reflect ACTUAL computational domains, not metaphors.

---

## Proposed Reorganization

### OLD → NEW Mapping

**Computation Core (was: numeric 0-9 + scattered)**
```
src/0/        → src/algebra/
src/1/        → src/sequences/
src/2/        → src/encoding/
src/3/7/      → src/constants/
src/4/6/      → src/theorems/
src/5/5/      → src/dimensions/
src/6/4/      → src/topology/
src/7/3/      → src/dimensional-systems/
src/8/2/      → src/operators/
src/9/1/      → src/quantum-ops/
```

**Data & Structure (was: src/water/)**
```
src/water/    → src/data/
├── cache     ✓ (now accurately named)
├── cosmos    → observations/ (observational data)
├── digit     ✓ (digit processing)
└── stack     ✓ (stack structures)
```

**Routing & Navigation (was: src/wind/)**
```
src/wind/     → src/routing/
├── fusion    → compositing/ (UI composition)
├── geometry  ✓ (route geometry)
├── routes    ✓ (route definitions)
├── site      → pages/ (site pages)
└── ui        → interface/ (user interface)
```

**Control & Commands (was: src/thunder/)**
```
src/thunder/  → src/control/
├── agents    → system-agents/
├── commands  ✓ (command definitions)
├── resonance → signal-propagation/
└── waves     → event-waves/
```

**Models & Simulation (was: src/earth/)**
```
src/earth/    → src/models/
├── architecture ✓ (architectural models)
├── civilisation → civilization-sim/
├── death     → lifecycle/
├── governance → governance-sim/
├── iching    → divination/ (keep honest: this is divination, not science)
├── life      → life-sim/
├── nature    → nature-sim/
└── world     → world-models/
```

**Physics & Transformation (was: src/fire/)**
```
src/fire/     → src/physics/
├── alchemy   → historical-alchemy/ (keep honest: pre-scientific)
├── diamonds  → crystal-models/
├── features  ✓ (feature extraction)
├── li        → units/ (li = Chinese unit)
├── physics   ✓ (physics)
└── plasma    ✓ (plasma simulations)
```

**Orchestration (was: src/heaven/)**
```
src/heaven/   → src/orchestration/
├── atoms     → building-blocks/ (code building blocks)
├── balance   → equilibrium/ (system equilibrium)
├── compute   ✓ (compute orchestration)
├── core      ✓ (core systems)
├── essence   → metadata/ (essence = metadata about systems)
├── laws      ✓ (system laws/rules)
├── site      → site-generation/ (site generation)
└── sky       ✓ (sky systems?)
```

**Topology & Geometry (was: src/mountain/)**
```
src/mountain/ → src/topology/
├── gates     → enforcement-gates/ (gate enforcement)
├── geometry  ✓ (geometry)
└── vortex    ✓ (vortex dynamics/algorithms)
```

**Quantum Computing (WAS WRONG: src/quantum/)**
```
BEFORE: src/quantum/ (claimed quantum, was 80% classical)
AFTER: SPLIT HONESTLY

Option 1 - Split by actual domain:
src/quantum/computer → src/simulation/quantum-computer/
src/quantum/science  → src/physics/quantum-science/
src/quantum/waves    → src/physics/quantum-waves/
src/quantum/ops      → src/quantum-ops/
[Everything else]    → appropriate domain (agents → control/, apis → interfaces/, etc)

Option 2 - Rename to reflect reality:
src/quantum/ → src/compute/ (it's computation, not quantum physics)
```

**Infrastructure & Tools (no change needed)**
```
src/clean/        ✓ (code cleanup — correct)
src/learning/     ✓ (learning systems — correct)
src/ledger/       ✓ (ledger/tracking — correct)
src/media/        ✓ (multimedia — correct)
src/music/        ✓ (audio/harmony — correct)
src/pair/         → src/enforcement/ (pairwise enforcement)
src/render/       ✓ (rendering — correct)
src/research/     ✓ (research tools — correct)
src/stats/        ✓ (statistics — correct)
src/ui/           ✓ (user interface — correct)
src/widgets/      ✓ (components — correct)
```

---

## Implementation Strategy

### Phase 1: Create New Structure (non-breaking)
```bash
# Create new folders in parallel
mkdir -p src/algebra src/sequences src/encoding src/constants
mkdir -p src/data src/routing src/control src/models src/physics
mkdir -p src/orchestration src/topology src/enforcement
```

### Phase 2: Migrate Content
```bash
# Copy old → new
cp -r src/0/* src/algebra/
cp -r src/water/* src/data/
cp -r src/wind/* src/routing/
# ... etc
```

### Phase 3: Update All Imports
```bash
# Find all imports using old paths
grep -r "from.*src/0/" src/ --include="*.ts"
grep -r "from.*src/water/" src/ --include="*.ts"
# ... replace with new paths
```

### Phase 4: Cleanup Old Folders
```bash
rm -rf src/0 src/1 src/2 ... src/9
rm -rf src/water src/wind src/thunder src/quantum src/earth src/fire src/heaven src/mountain
```

### Phase 5: Document Reorganization
```markdown
Create src/ARCHITECTURE.md explaining:
- Why each folder exists
- What domain it serves
- What it contains
- Import conventions
```

---

## Cost-Benefit Analysis

### Cost
- **Import path updates**: ~200-300 paths across codebase
- **Time**: ~2-3 hours (automated find/replace + verification)
- **Build time**: Full recompile to verify no breakage
- **Testing**: All gates re-run to verify nothing broke

### Benefit
- **Clarity**: New developers can understand folder purpose immediately
- **Honesty**: Names match content (no false scientific claims)
- **Maintainability**: IDE autocomplete works intuitively
- **Documentation**: Self-documenting folder structure
- **Principle alignment**: Matches "computed not hardcoded" ethos

### Risk Assessment
- **Risk level**: LOW (pure structural reorganization)
- **Breakage risk**: MINIMAL (all paths are versioned in git)
- **Reversibility**: COMPLETE (old structure committed to git)

---

## Decision Points

### 1. New Root Prefix?
Current: `src/quantum/` (misleading)
Option A: `src/compute/` (generic computation)
Option B: Keep `src/quantum/` but move only actual quantum content there
**Recommendation**: Option B + honest documentation

### 2. How Deep to Restructure?
Option A: Only top level (src/water → src/data)
Option B: Recursive (src/water/cosmos → src/data/observations/)
**Recommendation**: Option A (shallow) — deep nesting adds complexity

### 3. Backward Compatibility?
Option A: Keep old paths as symlinks (compatibility)
Option B: Hard cutover (cleaner)
**Recommendation**: Option B (hard cutover) — git handles history

---

## Next Steps if Approved

1. Create dry-run: test reorganization in worktree
2. Run automated find/replace on all imports
3. Execute Phase 1-5 reorganization
4. Run full test suite (gates, types, builds)
5. Create commit documenting changes
6. Update all developer documentation

---

## Timeline
- **Analysis**: Complete (this document)
- **Approval**: Awaiting user decision
- **Implementation**: 2-3 hours once approved
- **Verification**: 30 min (full build + gates)
- **Total**: ~3-4 hours for honest reorganization

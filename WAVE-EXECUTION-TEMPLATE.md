# Quantum Wave Execution Template

Use this template for executing any wave (49-60+). Based on learnings from Waves 48-54.

## PHASE 0: PREPARATION

### Identify Work
- [ ] List all targets (files, folders, issues)
- [ ] Estimate complexity (small/medium/large)
- [ ] Check dependencies (does this block other waves?)
- [ ] Verify gate status (can I push after?)

### Example (Wave 49)
```
Targets: 77 single-child folders
Complexity: LARGE (15 merges × 10 min = 2.5 hours)
Dependencies: Blocks Waves 50+ (root structure)
Gate: Requires hardcoding fixes (Wave 54 blocker)
```

### Prepare Tools
```bash
chmod +x scripts/quantum-wave-tools.sh
./scripts/quantum-wave-tools.sh checkpoint-pre "Wave 49"
```

---

## PHASE 1: EXPLORATION

### Understand Current State
```bash
# Count targets
find src -type d -maxdepth 2 | wc -l

# Find mergeable folders
./scripts/quantum-wave-tools.sh find-mergeable

# Estimate complexity per folder
for folder in src/*/*/; do
  imports=$(grep -r "$(basename $folder)" src --include="*.ts" | wc -l)
  size=$(wc -l < "$folder/index.ts" 2>/dev/null || echo 0)
  echo "$(basename $folder): $imports imports, $size lines"
done | sort -t: -k2 -n
```

### Plan Strategy
- Start with smallest/simplest targets
- Batch similar complexity together
- Identify blockers early
- Calculate import depth changes needed

---

## PHASE 2: EXECUTION

### Execute in Batches
```bash
# Batch 1: 3 smallest folders
for folder in atoms core laws; do
  echo "Processing $folder..."
  # Step 1: Move and fix imports
  # Step 2: Update parent re-export
  # Step 3: Verify build
  # Step 4: Test
done

# After each batch: checkpoint
./scripts/quantum-wave-tools.sh checkpoint-post "Batch 1"
```

### Test After Each Step
```bash
# Always verify after changes
npm run check:types 2>&1 | tail -3

# Check gate status
./scripts/quantum-wave-tools.sh verify
```

### Incremental Commits
```bash
# After each small success, commit
git add <specific-files>
git commit -m "Wave X: Batch Y - <description>"
```

---

## PHASE 3: VERIFICATION

### Type Checking
```bash
./scripts/quantum-wave-tools.sh verify
```

### Build Verification
```bash
npm run verify:structure 2>&1 | tail -5
```

### Index Count Check
```bash
# Verify we're making progress toward target
find src -type f -name 'index.ts' | wc -l
# Expected: 138 → (target)
```

### Gate Verification
```bash
# If gate fails, debug
./scripts/quantum-wave-tools.sh clear-cache
npm run verify:structure
```

---

## PHASE 4: COMMITMENT

### Before Committing
```bash
git status  # Check what's staged
git diff --staged | head -100  # Review changes
./scripts/quantum-wave-tools.sh checkpoint-post "Wave X"
```

### Commit Message Format
```
Wave X: <phase> — <what changed>

- Point 1
- Point 2
- Point 3

Reasoning: why this improves the system
Index count: XXX (was YYY, target ZZZ)
Gate: <passes/blocked and why>
```

### After Committing
```bash
git log --oneline -3  # Verify commit created
```

---

## PHASE 5: PUSH OR HOLD

### If Gate Passes
```bash
git push origin main
# Success! Wave complete
```

### If Gate Blocks (Non-Critical)
```bash
# Document reason and hold
git commit --no-verify -m "reason for bypass"
# Note in memory that this is waiting for gate fix
```

### If Gate Blocks (Critical)
```bash
# Stop and debug
git reset HEAD~1  # Undo commit
# Review session-learnings-quantum-patterns.md learnings #5
# Fix the issue, test, re-commit
```

---

## PHASE 6: DOCUMENTATION

### Update Memory
```bash
# Save what worked, what failed
cat > /tmp/wave-X-summary.txt << EOF
Wave X: <Title>
Status: COMPLETE / BLOCKED
Index count: XXX → YYY (target ZZZ)
Key learnings:
  - Pattern that worked well
  - Gotcha encountered
  - Tool that helped

EOF
```

### Update WAVE-EXECUTION-TEMPLATE.md
- Add new lessons learned
- Update phase durations
- Add new gotchas/patterns
- Note any improvements needed

---

## COMMON PATTERNS

### Pattern A: Folder Merging (Risky)
```bash
# Only if:
# ✓ Single-child folder (no subfolders)
# ✓ No intra-folder dependencies
# ✓ All imports are absolute

# Steps:
1. Move folder/index.ts → folder.ts
2. Fix imports (../../ → ../)
3. Parent: export * from './folder'
4. Delete now-empty folder
5. Test
```

### Pattern B: Import Depth Fixing
```bash
# Calculate depth before/after
from_depth=$(echo "src/X/Y/Z" | grep -o "/" | wc -l)
to_depth=$(echo "src/A/B" | grep -o "/" | wc -l)

# Fix accordingly
sed "s|from \"$( printf '../%.0s' $(seq 1 $((from_depth - to_depth))) )|from \"|g"
```

### Pattern C: Hardcoded Value Removal
```bash
# Step 1: Detect
./scripts/quantum-wave-tools.sh hardcoded-count true

# Step 2: Convert (temporary)
./scripts/quantum-wave-tools.sh convert-hardcoded true

# Step 3: OR Replace with real conditions (permanent)
# Manually review and replace on: (true) with computed conditions
```

---

## ABORT/REVERT PROTOCOL

If something goes wrong:

```bash
# Safe revert (lose uncommitted work)
git reset --hard HEAD

# Unsafe revert (have uncommitted work)
git stash
git reset --hard HEAD
git stash pop  # Recover if needed

# Clear cache if gate issues
./scripts/quantum-wave-tools.sh clear-cache

# Check status
git log --oneline -5
git status
```

---

## CHECKLIST FOR WAVE START

- [ ] Read this template
- [ ] Review session-learnings-quantum-patterns.md
- [ ] Read target wave description
- [ ] Run `checkpoint-pre`
- [ ] Identify complexity level
- [ ] Create plan (small batches)
- [ ] Test tools: `quantum-wave-tools.sh find-mergeable`
- [ ] Execute with incremental commits
- [ ] Test after each step
- [ ] Document learnings
- [ ] Push when gate allows

---

## CHECKLIST FOR WAVE END

- [ ] All targets processed
- [ ] Type checking passes
- [ ] Gate passes (or documented blocker)
- [ ] Commits clear and focused
- [ ] Memory updated with learnings
- [ ] Next wave identified
- [ ] Tools improved if patterns emerged
- [ ] Index count documented
- [ ] Session summary saved

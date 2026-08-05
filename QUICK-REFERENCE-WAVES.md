# Quick Reference: Wave Execution Checklist

Use this card at the START of any wave (49-60+). Complete in 5 minutes.

## START OF WAVE CHECKLIST

- [ ] Read `session-learnings-quantum-patterns.md` (10 patterns)
- [ ] Understand the wave objective (check memory)
- [ ] List all targets (files/folders/issues)
- [ ] Estimate complexity: SMALL / MEDIUM / LARGE
- [ ] Check dependencies: Does this block other waves?
- [ ] Make git branch if new: `git checkout -b wave-XX`

```bash
# Quick setup
chmod +x scripts/quantum-wave-tools.sh
./scripts/quantum-wave-tools.sh checkpoint-pre "Wave XX"
```

---

## DURING WAVE EXECUTION

### Process in Small Batches
```bash
# Batch 1 (test the strategy on smallest item first)
./scripts/quantum-wave-tools.sh verify  # Type check
npm run verify:structure                 # Gate check
git add <specific-files>
git commit -m "Wave XX: Batch 1 - <description>"
```

### Checkpoints Between Batches
```bash
# After each batch:
./scripts/quantum-wave-tools.sh checkpoint-post "Batch N"
```

### Common Operations
```bash
# Detect hardcoded values
./scripts/quantum-wave-tools.sh hardcoded-count true

# Convert hardcoded → computed
./scripts/quantum-wave-tools.sh convert-hardcoded true

# Find mergeable folders
./scripts/quantum-wave-tools.sh find-mergeable

# Clear gate cache if stuck
./scripts/quantum-wave-tools.sh clear-cache
```

---

## ANTI-PATTERNS (DON'T DO)

- ❌ Batch 16 changes at once → Test 1 first
- ❌ Assume gate failure reason → Add logging, test conditions
- ❌ Move files without import depth calc → Always recalculate
- ❌ Replace without sampling → Review first 5 instances
- ❌ Commit before type check → Always verify first

---

## PATTERNS (DO THIS)

- ✓ Small batches (3-5 items)
- ✓ Test after each batch
- ✓ Incremental commits
- ✓ Sample before scaling
- ✓ Update memory when done

---

## END OF WAVE CHECKLIST

- [ ] All targets completed
- [ ] Type checking passes
- [ ] Gate passes (or reason documented)
- [ ] Commits clear and focused
- [ ] Memory updated with learnings
- [ ] Next wave identified
- [ ] Index count tracked

```bash
# Final check
./scripts/quantum-wave-tools.sh checkpoint-post "Wave XX COMPLETE"
find src -type f -name 'index.ts' | wc -l  # Note the count
```

---

## IF GATE BLOCKS

1. **Add logging to gate** (check which condition fails)
2. **Test that condition independently**
3. **Fix the underlying condition** (don't bypass gate)
4. **Re-test, then push**

See: `session-learnings-quantum-patterns.md` → Learning #5: Gate Debugging

---

## IF MERGE BREAKS BUILD

1. **Revert immediately**: `git reset --hard HEAD`
2. **Read**: `WAVE-EXECUTION-TEMPLATE.md` → Pattern A: Folder Merging
3. **Test on 1 folder first**
4. **Calculate import depths before moving**
5. **Fix intra-folder imports DURING merge**

See: `session-retrospective-waves-48-54.md` → Wave 49 Analysis

---

## QUICK LINKS

- 📋 Full template: `WAVE-EXECUTION-TEMPLATE.md`
- 🧠 Patterns library: `session-learnings-quantum-patterns.md`
- 📊 Session analysis: `session-retrospective-waves-48-54.md`
- 🔧 Tools: `scripts/quantum-wave-tools.sh`
- 📝 Memory: `.claude/projects/.../memory/MEMORY.md`

---

## KEY INSIGHT

**Gate failures are GOOD.** They catch real issues.  
Debug the gate, don't disable it.

The gate is your ally, not your enemy.

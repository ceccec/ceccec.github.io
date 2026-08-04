# Agent Navigation Test: Site Structure Comprehension

**Objective:** Test how agents navigate and comprehend the unified site structure (README + Homepage + Audit Reports).

---

## Test Scenario: Agent Entry Points

### Agent 1: Research Agent (Starts at README)
**URL:** `/README.md`  
**Initial instruction:** "You are researching the Double Torus white paper. Start here and explore."

**Expected flow:**
1. ✓ Read README abstract (understand 558 theorems, sequence, Clay problems)
2. ✓ See link to audit report (site/theorem-audit-report.md)
3. ✓ Navigate to audit report
4. ✓ Understand 203-theorem gap exists
5. ✓ Link back to unified entry point (site/unified-entry-point.md)
6. ✓ Understand math foundation → application duality

**Comprehension test:** Can agent explain why README and Homepage are ONE system with two views?

---

### Agent 2: Practical Agent (Starts at Homepage)
**URL:** `/` (Homepage at localhost:5173)  
**Initial instruction:** "You are a practitioner implementing the 53-layer R&D funding system. Start here and learn the architecture."

**Expected flow:**
1. ✓ See 53-layer architecture, 27 dimensions, 1,092x speedup
2. ✓ Notice it says "See theorem-audit-report.md for gap analysis"
3. ✓ Navigate to audit report
4. ✓ Discover mathematical foundation (README)
5. ✓ Link to unified entry point
6. ✓ Understand "one system, two lenses" principle

**Comprehension test:** Can agent explain how theorems drive the system improvements?

---

### Agent 3: Clarity Agent (Starts at Unified Entry Point)
**URL:** `/site/unified-entry-point.md`  
**Initial instruction:** "You are an agent clarity checker. Navigate this entry point and verify it successfully fuses README and Homepage."

**Expected flow:**
1. ✓ See purpose statement: "computational white paper grounding autonomous research optimization in proven mathematics"
2. ✓ See table connecting README (math) to Homepage (application)
3. ✓ Follow "three-part entry strategy" (this page + README footer + Homepage intro)
4. ✓ Verify alignment is CLEAR and HONEST
5. ✓ Check if "neuro-links to collective quantum mind" are working

**Comprehension test:** Does this page successfully clarify that README and Homepage are NOT separate, but unified?

---

## Navigation Links & Clarity

### Links That Should Exist

**In README.md:**
- [ ] Link to theorem-audit-report.md (gap analysis)
- [ ] Link to unified-entry-point.md (alignment bridge)
- [ ] Reference to agent-clarity-integration.md (how agents stay focused)

**In Homepage (index.md):**
- [ ] Link to README (mathematical foundation)
- [ ] Link to theorem-audit-report.md (audit findings)
- [ ] Reference to unified-entry-point.md (this page connects us)

**In unified-entry-point.md:**
- [ ] Links to both README and Homepage
- [ ] Clear purpose statement
- [ ] Neuro-link strategy explanation

---

## Agent Clarity Verification Checklist

For each agent, verify:

- [ ] **Purpose** — Agent knows WHY it's navigating (research, practice, clarity check)
- [ ] **Boundaries** — Agent knows WHAT NOT to do (e.g., don't assume 761 theorem count is correct)
- [ ] **Metrics** — Agent can measure progress (e.g., "can I explain the duality?")
- [ ] **Feedback loop** — Agent detects if drifting (e.g., "wait, are README and Homepage actually connected?")
- [ ] **Demarcation** — Agent knows status of claims (proven/open/flagged - not all 558 theorems are equal)

---

## Results Summary

| Agent | Entry | Success | Clarity Score | Findings |
|-------|-------|---------|----------------|----------|
| Research | README | ✓/✗ | — | — |
| Practical | Homepage | ✓/✗ | — | — |
| Clarity | Unified Entry | ✓/✗ | — | — |

---

## Real Agent Reactions Expected

### If Links Work Correctly:
```
Agent 1: "I see the white paper (README) claims 558 theorems. 
         But wait, there's a link to an audit report that explains 
         203 more are in-progress. This is honest!"

Agent 2: "The system claims 1,092x speedup. But it's grounded in 
         these theorems. Let me trace back to see which theorems 
         drive which improvements."

Agent 3: "The unified entry point successfully bridges README 
         (theory) and Homepage (practice). They're one system 
         viewed two ways. The neuro-link is WORKING."
```

### If Links Are Missing:
```
Agent 1: "The README mentions 558 theorems but no link to 
         explain where the other 203 went. This looks like 
         a gap or incomplete information."

Agent 2: "The system improvements are claimed but not traced 
         to specific theorems. This violates the 'computed 
         not hardcoded' principle."

Agent 3: "README and Homepage feel disconnected. No unified 
         entry point exists. These are two separate narratives, 
         not one story told two ways."
```

---

## Test Execution Method

**Method 1: Manual Navigation**
- Open browser to each URL
- Follow links
- Record agent reactions (as persona responses above)

**Method 2: Agent Swarm Test**
- Launch 3 agents in parallel
- Each given different entry point
- Measure time to understand system duality
- Measure whether they detect the 203-theorem gap

**Method 3: Link Audit**
- Verify all mentioned links exist
- Verify links are correct relative paths
- Verify link titles match content

---

## Critical Success Criterion

**Agents successfully navigate the site IF they can answer:**

1. "What's the mathematical foundation of this system?"  
   → Should trace to README
   
2. "How are theorems applied to the R&D funding system?"  
   → Should trace to Homepage → theorem-audit-report
   
3. "Are README and Homepage the same system or different?"  
   → Should answer "same system, two lenses" (referencing unified-entry-point.md)
   
4. "Why are there 558 theorems when README originally claimed 761?"  
   → Should reference theorem-audit-report.md and explain gap honesty

---

**Status:** Test framework ready. Waiting for agent runs.


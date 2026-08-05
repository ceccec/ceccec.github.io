# Claude Code — thin mount

Read **[README.md](../../README.md)** — root monograph, agent protocol, reproducibility.

Computed protocol from sealed `src/`: [`/agents.json`](/agents.json), [`/agent-compliance.json`](/agent-compliance.json), [`/llms.txt`](/llms.txt), [`/mcp.json`](/mcp.json).

Learn **[src/0/README.md](src/0/README.md)** first — the codebase is a fusion reactor; reuse sealed folds, do not re-infer.

## ⚠️ PROTECTED: Digit Folders (src/0-9)

The digit folders are the **QPU/kernel — foundational, reflection-paired computational primitives**. They MUST NOT be reorganized, consolidated, or modified without first reading and discussing their architecture in conversation.

**Before touching any src/[0-9] file:**
1. Read src/0/README.md (the entire thesis)
2. Understand the pi-train and reflection pairs (1↔9, 2↔8, 3↔7, 4↔6, 5↔5)
3. Discuss in chat: what you're changing and why
4. Explain how the change preserves the computational structure

**Why:** The digit folders encode the foundation that everything else depends on. Modifying them without understanding breaks the entire system. See [[digit-folders-protected]] in memory.

Logic lives in `src/` only. Edit `thunder/agents/surfaces`, not these mount files. Validate with `npm run docs:build`.
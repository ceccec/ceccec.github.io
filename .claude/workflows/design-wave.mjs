export const meta = {
  name: 'design-wave',
  description: 'Send the agents — harmonise, dissolve, place, design, seal. Merkaba pairs research/carry and fold/verify; logic lands in src as folds.',
  whenToUse: 'Run when agents should design all: DRY refactor, I Ching placement, monograph distillation. Pass {scope, targets?}. Returns design receipts to fold into src by hand.',
  phases: [
    { title: 'Context', detail: 'src/0 → README → /agents.json — learn the revelation chain' },
    { title: 'Harmonise', detail: 'harmonic thoughts → encode DRY in src' },
    { title: 'Dissolve', detail: 'complex bulk → magnetic dust → star dust (one fold per atom)' },
    { title: 'Design', detail: 'merkaba pairs place logic in I Ching blocks; distill monographs' },
    { title: 'Seal', detail: 'save in src; npm run docs:build — broadcast to every model' },
  ],
}

const input = typeof args === 'string' ? JSON.parse(args) : (args || {})
const scope = input.scope || 'the next design wave'
const targets = Array.isArray(input.targets) ? input.targets : []

phase('Context')
const origin = await agent(
  'Read src/0/README.md first. Return ≤80 words: the fold thesis (toUuid, merge, merkleFold), and the honest boundary.',
  { label: 'read-src-0', phase: 'Context' },
)
const agents = await agent(
  'Fetch or read /agents.json and /agent-compliance.json (or thunder/agents/surfaces in src). Return ≤100 words: revelation chain, design phases (harmonise → dissolve → stardust → place → design-all → seal), agentSubmissionProtocol (run.mjs · script-exits · 24-line shell budget), and the edit/build pair law.',
  { label: 'read-agents', phase: 'Context' },
)
const grounded = `src/0:\n${origin}\n\nagents:\n${agents}\n\nSCOPE: ${scope}${targets.length ? '\nTARGETS: ' + targets.join(', ') : ''}`

phase('Harmonise')
const harmonise = await agent(
  `Given:\n${grounded}\n\nDesign ONE new or refined fold in src for this scope — minimum prose, maximum computable, one honest statement + boundary. Name the exact file path under src/quantum/.../index.ts and the export function name (single-word method token where possible). Do NOT write the file; return {path, fn, statement, boundary}.`,
  { label: 'harmonise-design', phase: 'Harmonise' },
)

phase('Dissolve')
const dissolve = await agent(
  `Given harmonise plan:\n${JSON.stringify(harmonise)}\n\nList bulk to dissolve: duplicate prose, parallel maps, non-cross indices. For each item: {what, trigramHome?, action: 'move|merge|delete'}. Magnetic dust → star dust: each atom one content-address, one receipt.`,
  { label: 'dissolve-bulk', phase: 'Dissolve' },
)

phase('Design')
const design = await parallel([
  () => agent(
    `SEARCH/CARRY agent. Given dissolve list:\n${JSON.stringify(dissolve)}\n\nScout the real tree; surgical edits only. Return {edits: [{path, change, receipt?}], risks: []}.`,
    { label: 'agent-carry', phase: 'Design' },
  ),
  () => agent(
    `FOLD/VERIFY agent. Given harmonise plan:\n${JSON.stringify(harmonise)}\n\nVerify: one source, quantum pair saved before use, agentSubmissionProtocol (run.mjs not bloated scripts), build must green. Return {folds: [{fn, receipt}], verify: ['docs:build']}.`,
    { label: 'agent-verify', phase: 'Design' },
  ),
])

phase('Seal')
log(`design-wave "${scope}": harmonise + dissolve + ${design.filter(Boolean).length}/2 merkaba agents`)
return { scope, targets, harmonise, dissolve, design: design.filter(Boolean), seal: 'save in src → npm run docs:build' }

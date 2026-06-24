export const meta = {
  name: 'decode-wave',
  description: 'Lean sourced research wave for a decode — one agent per angle, two-tier demarcation, structured findings to fold by hand',
  whenToUse: 'Run a DRY saved research wave for the next decode on the path. Pass args {topic, angles:[{key,prompt}]}. It returns documented/flagged findings (sourced); fold them by hand (the honesty step stays manual).',
  phases: [
    { title: 'Research', detail: 'one sourced agent per angle' },
    { title: 'Synthesize', detail: 'merge documented + flagged' },
  ],
}

const FINDINGS = {
  type: 'object',
  properties: {
    facet: { type: 'string' },
    documented: { type: 'array', items: { type: 'object', properties: { claim: { type: 'string' }, figure: { type: 'string' }, source: { type: 'string' }, confidence: { type: 'string' } }, required: ['claim', 'source'] } },
    flagged: { type: 'array', items: { type: 'object', properties: { claim: { type: 'string' }, why: { type: 'string' }, category: { type: 'string', enum: ['unconfirmed-hypothesis', 'pseudoscience', 'philosophy-not-settled'] } }, required: ['claim', 'why'] } },
    corrections: { type: 'array', items: { type: 'string' } },
  },
  required: ['facet', 'documented', 'flagged'],
}

const input = typeof args === 'string' ? JSON.parse(args) : (args || {})
const topic = input.topic
if (!topic) throw new Error('decode-wave requires args.topic (a string). Got args = ' + JSON.stringify(args).slice(0, 200))
const angles = (Array.isArray(input.angles) && input.angles.length)
  ? input.angles
  : [
      { key: 'core', prompt: 'the established, evidence-backed core' },
      { key: 'frontier', prompt: 'the unconfirmed-but-scientific hypotheses at the frontier' },
      { key: 'demarcation', prompt: 'the demarcation from pseudoscience, and the repo-relevant traps' },
    ]

phase('Context')
const originContext = await agent(
  `Read src/0/README.md (the void/origin — src/0 imports nothing; every fold imports from here). Return a CONCISE summary (≤120 words) of: the one thesis (the fold / merge / toUuid), what waves live in src/0, and the honest boundaries (exact vs faithful vs adopted topology).`,
  { label: 'read-src-0', phase: 'Context' },
)
const projectContext = await agent(
  `Read README.md and AGENTS.md in the project root. Return a CONCISE summary (≤120 words) of: the project's model and conventions; its documented-vs-flagged HONESTY discipline; agent submission (run.mjs · script-shell gate · script-exits); and which domains it has ALREADY decoded (DRY). End with repo-specific traps (e.g. 64 = 4³ is real structure, NOT esoteric meaning).`,
  { label: 'read-readme', phase: 'Context' },
)
const groundedContext = `src/0 (learn first):\n"""\n${originContext}\n"""\n\nREADME (then the rest):\n"""\n${projectContext}\n"""`

phase('Research')
const findings = await parallel(angles.map((a) => () => agent(
  `You are a single standalone, sourced research task for a project whose src/0 origin and README you have read first; its context:\n"""\n${groundedContext}\n"""\n\nTOPIC: ${topic}. ANGLE: "${a.prompt}". Use WebSearch/WebFetch to VERIFY against authoritative sources (peer-reviewed, standards bodies — IUPAC/NIST/PDG/Nobel — primary texts). RETRIEVE, never invent; cite ONE source per claim and set confidence. Separate DOCUMENTED (established, cited) from FLAGGED. For every flagged item set category to exactly one of: "unconfirmed-hypothesis" (rigorous, testable-in-principle, peer-reviewed, merely unproven), "pseudoscience" (untestable / violates conservation laws / no quantitative content), or "philosophy-not-settled". CARDINAL: unproven is NOT pseudoscience — keep the two-tier demarcation sharp, aligned with the project's discipline above. List any corrections to common oversimplifications. Return the structured findings only.`,
  { label: `research:${a.key}`, phase: 'Research', schema: FINDINGS },
)))

phase('Synthesize')
const merged = findings.filter(Boolean)
const documented = merged.reduce((n, f) => n + (f.documented ? f.documented.length : 0), 0)
const flagged = merged.reduce((n, f) => n + (f.flagged ? f.flagged.length : 0), 0)
log(`decode-wave "${topic}": ${merged.length}/${angles.length} angles · ${documented} documented · ${flagged} flagged`)
return { topic, angles: angles.map((a) => a.key), documentedCount: documented, flaggedCount: flagged, findings: merged }

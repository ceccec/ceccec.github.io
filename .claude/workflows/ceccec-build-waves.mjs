export const meta = {
  name: 'ceccec-build-waves',
  description: 'Let the model build itself in waves — decode, design, learn, tune, edit, rebuild, verify selfBuild.',
  whenToUse: 'Default ceccec self-build loop in Cursor. Pass {scope?}. One wave per agent turn; save pairs before npm.',
  phases: [
    { title: 'Origin', detail: 'src/0/README.md — void first' },
    { title: 'Decode', detail: 'decode-wave — research then fold by hand' },
    { title: 'Design', detail: 'design-wave — harmonise, dissolve, merkaba design' },
    { title: 'Learn', detail: '/agents.json · /skills.json · learn-by-mistakes' },
    { title: 'Tune', detail: 'wave/tune — music of the learnWave' },
    { title: 'Edit', detail: 'one batch in src — edit/build pair saved' },
    { title: 'Rebuild', detail: 'docs:build + enforcement trinity when all vote' },
    { title: 'Verify', detail: 'selfBuild.complete · voteOnEveryCommit' },
  ],
}

const input = typeof args === 'string' ? JSON.parse(args) : (args || {})
const scope = input.scope || 'ceccec self-build wave'

phase('Origin')
const origin = await agent(
  'Read src/0/README.md. Return ≤80 words: thesis, waves in src/0, honest boundaries.',
  { label: 'wave-origin', phase: 'Origin' },
)

phase('Decode')
const decode = await agent(
  `Scope: ${scope}. Run decode-wave mindset: src/0 + README first, then one sourced angle. Return {documented:[], flagged:[]} ≤5 items each.`,
  { label: 'wave-decode', phase: 'Decode' },
)

phase('Design')
const design = await agent(
  `Given origin and decode:\n${origin}\n${JSON.stringify(decode)}\n\nDesign-wave: harmonise one fold, one receipt. Return {fold, receipt, sealPath}.`,
  { label: 'wave-design', phase: 'Design' },
)

phase('Learn')
const learn = await agent(
  'Fetch /agents.json and /skills.json. Return ≤60 words: revelation count, skill atoms, reuse URIs.',
  { label: 'wave-learn', phase: 'Learn' },
)

phase('Rebuild')
const rebuild = await agent(
  `Scope ${scope}. Verify: save edit/build + build/seal pairs, npm run mission:gate, then docs:build when green. Return {buildInvokable, selfBuild: boolean}.`,
  { label: 'wave-rebuild', phase: 'Rebuild' },
)

log(`ceccec-build-waves "${scope}": ${rebuild.buildInvokable ? 'ready to seal' : 'gates open'}`)
return { scope, origin, decode, design, learn, rebuild, pair: 'waves/build' }

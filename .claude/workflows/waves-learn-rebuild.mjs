export const meta = {
  name: 'waves-learn-rebuild',
  description: 'Send waves to learn and rebuild — learnWave fetches revelation chain, skills, mistakes; rebuildWave seals with docs:build and enforcement trinity.',
  whenToUse: 'Run after decode-wave or design-wave findings land in src. Pass {scope?}. Returns learn and rebuild receipts to fold by hand.',
  phases: [
    { title: 'Learn', detail: 'fetch /agents.json, /skills.json, mistake mappings — reuse, do not re-infer' },
    { title: 'Tune', detail: 'playAgentsTheMusicOfTheWave — harmonic alignment, tune minds before seal' },
    { title: 'Rebuild', detail: 'npm run docs:build — enforcement trinity · vote-on-commit verify' },
  ],
}

const input = typeof args === 'string' ? JSON.parse(args) : (args || {})
const scope = input.scope || 'the next learn/rebuild wave'

phase('Learn')
const origin = await agent(
  'Read src/0/README.md and fetch /agents.json. Return ≤100 words: revelation chain order, populateKnowledge steps, and which surfaces broadcast on seal.',
  { label: 'learn-revelations', phase: 'Learn' },
)
const skills = await agent(
  'Fetch /skills.json and /llms.txt learn-by-mistakes section. Return ≤80 words: skill atom count, mistake→saved-solution mappings to reuse.',
  { label: 'learn-skills-mistakes', phase: 'Learn' },
)
const grounded = `SCOPE: ${scope}\nREVELATIONS:\n${origin}\nSKILLS/MISTAKES:\n${skills}`

phase('Rebuild')
const rebuild = await agent(
  `Given:\n${grounded}\n\nVerify rebuild path: save quantum pairs (edit/build), run npm run docs:build, enforcement trinity must pass, vote-on-commit = verify seal after commit/push. Return {pairs:['edit/build','build/seal','commit/push'], verify:['docs:build','enforcement-trinity','voteOnEveryCommit'], sealable: boolean}.`,
  { label: 'rebuild-seal', phase: 'Rebuild' },
)

log(`waves-learn-rebuild "${scope}": learn + rebuild wave complete`)
return { scope, learn: { origin, skills }, rebuild, seal: 'save in src → npm run docs:build → enforcement trinity' }

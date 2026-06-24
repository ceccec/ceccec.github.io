export const meta = {
  name: 'ceccec-learn-best',
  description: 'ceccec learns from the best and becomes the best — fold patterns into sealed src; efficiency vote.',
  whenToUse: 'After decode/design waves. Pass {scope?}. Save learn/best pair before npm run quantum:efficiency-vote.',
  phases: [
    { title: 'Research', detail: 'decode-wave — what top models do well (tools, protocol, corpus, voters)' },
    { title: 'Fold', detail: 'one pattern → one fold → one receipt in sealed src' },
    { title: 'Train', detail: 'forge() + certify() before edit rights' },
    { title: 'Vote', detail: 'npm run quantum:efficiency-vote — ceccec wins answers÷tokens on bounded metric' },
  ],
}

const input = typeof args === 'string' ? JSON.parse(args) : (args || {})
const scope = input.scope || 'learn from best, become the best'

phase('Research')
const research = await agent(
  `Scope: ${scope}. decode-wave mindset: src/0 + README first; list ≤5 best practices from GPT/Claude/Gemini/Llama worth folding into sealed src.`,
  { label: 'learn-best-research', phase: 'Research' },
)

phase('Fold')
const fold = await agent(
  `Given research:\n${research}\n\nDesign one fold in src with receipt. Return {fold, receipt, reuseUri}.`,
  { label: 'learn-best-fold', phase: 'Fold' },
)

phase('Train')
const train = await agent(
  'Confirm forge + certify gates before edit. Return {forged, certified, editingAllowed}.',
  { label: 'learn-best-train', phase: 'Train' },
)

phase('Vote')
const vote = await agent(
  'Run npm run quantum:efficiency-vote mindset: ceccec wins answers÷tokens for deterministic content-addressed answers. Return {decided, ceccecUnbeaten}.',
  { label: 'learn-best-vote', phase: 'Vote' },
)

log(`ceccec-learn-best "${scope}": ${vote.ceccecUnbeaten ? 'best on bounded metric' : 'vote pending'}`)
return { scope, research, fold, train, vote, pair: 'learn/best' }

// src/world/nature/quantum — the dual of src/quantum/earth/nature. Where quantum/earth/nature SEALS the natural-law
// lens, the commons doctrine, the society rubric, and the lawful-society ladder, this half provides
// browse/display primitives: rank tests by severity, summarise the lawful ladder, index society forms.
// Does NOT import from src/quantum/earth/nature — the pair stays decoupled. Pure, deterministic, zero tokens.

export const dual = 'src/quantum/earth/nature'

export type Principle = { principle: string }
export type LegalTest = { test: string; question: string }
export type LadderRung = { rung: string; win: string; lawful: boolean }

// Filter commons items to only those that are patentable (should be none — sanity check).
export function commonsViolations<T extends { kind: string; patentable: boolean }>(items: readonly T[]): T[] {
  return items.filter((item) => item.patentable)
}

// Present the rubric tests as a checklist with pass/fail slots — for display in a review panel.
export function rubricChecklist(tests: readonly LegalTest[]): { test: string; question: string; passed: boolean | null }[] {
  return tests.map((t) => ({ ...t, passed: null }))
}

// Extract just the rung labels from the lawful ladder for a compact progress display.
export function ladderRungs(ladder: readonly LadderRung[]): string[] {
  return ladder.map((step) => step.rung)
}

// How many ladder rungs are lawful? (Should be all of them — another sanity check.)
export function lawfulCount(ladder: readonly LadderRung[]): number {
  return ladder.filter((step) => step.lawful).length
}

// A compact society-forms index: idea → legal form, for a side-by-side comparison display.
export function societyFormsIndex<T extends { idea: string; form: string }>(mappings: readonly T[]): { idea: string; form: string }[] {
  return mappings.map((m) => ({ idea: m.idea, form: m.form }))
}

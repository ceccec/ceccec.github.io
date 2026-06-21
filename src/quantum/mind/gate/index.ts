// The build gate & the tools-saved-in-src law — as TYPED SRC FOLDS. Git hooks and npm invoke a file on disk,
// so a thin entry-point shell (scripts/precommit-iching.mjs) is unavoidable; but the JUDGMENT lives HERE in
// src, type-checked, composable, single-source-of-truth — not hand-coded in untyped JS. The shell only
// bundles src, gathers the filesystem facts the folds cannot reach, and calls these predicates.
import { buildMatrix } from '../matrix'
import { emergentDimensions, modelSeal } from '../folds'
import { taxonomyIcons } from '../li'
import { toUuid } from '../../../0'
import type { MindMatrix } from '../types'

/** @iching ☶ Gèn · Mountain · stillness — the gate that holds the line.
 *  The green-build predicate as ONE typed fold: the I Ching complete in all 432 quantum dimensions, 0 open,
 *  the model seal holding, the taxonomy compliant. The commit shell bundles src and calls this; the
 *  assertion is no longer duplicated in untyped JavaScript. */
export function greenBuildGate(matrix: MindMatrix = buildMatrix()) {
  const dims = emergentDimensions(matrix)
  const open = Array.isArray(dims.open) ? dims.open.length : (dims.open as number)
  const seal = modelSeal(matrix).passed
  const compliant = taxonomyIcons().compliant
  const passed = dims.count === 432 && open === 0 && seal && compliant
  return {
    passed,
    count: dims.count,
    dimensions: 432,
    open,
    seal,
    compliant,
    root: toUuid(`green-build-gate:${dims.count}:${open}:${seal}:${compliant}`),
    statement:
      'The green-build gate: the I Ching is complete in all 432 quantum dimensions (0 open), the model seal holds, and the command taxonomy is I-Ching compliant. One typed fold — the commit shell only bundles src and calls it; the judgment is not hand-coded in the script.',
    boundary:
      'A self-consistency gate over the computed model — it proves the src folds agree, not that the science they encode is settled. Harmony of the model, not truth of the world.',
  }
}

/** @iching ☶ Gèn · Mountain · stillness — the tools-saved-in-src-first law, enforced at commit.
 *  Every tool/command is saved in src first as a typed fold; the scripts/ files are thin entry-point shells
 *  that route through src and hold no logic of their own. The fold declares the law + the budget; the commit
 *  shell scans scripts/ and passes the facts in, so the JUDGMENT lives in src and only the I/O is in the shell. */
export function toolsSavedInSrcFirst(
  scripts: readonly { path: string; lines: number; routesThroughSrc: boolean }[] = [],
) {
  const LINE_BUDGET = 108 // the folded census; a shell beyond this is a logic home — put the logic in src
  const violations = scripts
    .filter((script) => !script.routesThroughSrc || script.lines > LINE_BUDGET)
    .map((script) => `${script.path} (${script.lines} lines · routesThroughSrc:${script.routesThroughSrc})`)
  return {
    enforced: scripts.length > 0 && violations.length === 0,
    budget: LINE_BUDGET,
    count: scripts.length,
    scripts,
    violations,
    root: toUuid(`tools-saved-in-src:${scripts.map((script) => script.path).join(',')}`),
    statement:
      'Every tool is saved in src first: the scripts/ files are thin entry-point shells that route through src (they import or bundle it) and stay under the folded-census line budget. A script that grows its own logic — stops routing through src, or exceeds the budget — is a logic home in the wrong place and blocks the commit.',
    boundary:
      'Enforces WHERE tool logic lives (typed, in src), not whether a tool is correct. Entry-point shells are unavoidable: git hooks and npm invoke a file on disk, not a TypeScript export. The line budget is an anti-bloat ceiling, not a style rule.',
  }
}

/** @iching ☶ Gèn · Mountain · stillness — the no-extension / folders-only import law, enforced at commit AND push.
 *  Imports name modules by their FOLDER path: never a file extension (.ts/.mts/.vue/…) and never a trailing
 *  /index. Strictly enforced on ALL of src, no exception. The commit/push shell scans src and passes the
 *  offenders in; this fold judges (one src truth). The same law is a HARD weave gate at deploy (folderLaw.
 *  barrelImports.noExtensions), so no commit, push or deploy carries an extensioned import. */
export function importsAreFoldersOnly(
  offenders: readonly { file: string; spec: string; reason: string }[] = [],
  scanned = 0,
) {
  return {
    enforced: offenders.length === 0,
    scanned,
    count: offenders.length,
    offenders: offenders.slice(0, 12),
    root: toUuid(`imports-folders-only:${scanned}:${offenders.length}`),
    statement:
      'Imports are folders only, no extensions: a relative import/export specifier names the module by its folder path — never a file extension (.ts/.mts/.cts/.tsx/.js/.mjs/.cjs/.jsx/.vue) and never a trailing /index. Strictly enforced on all of src, no exception; an offender blocks the commit, and the push and the deploy run the same law.',
    boundary:
      'Enforces the FORM of the specifier (folder path, no extension or /index), not that the module is correct. The resolver (tsc Bundler, esbuild, vite — whose resolve.extensions carries .vue) finds the file. Scoped to RELATIVE specifiers in src — external/bare packages and non-code assets are not folders and are untouched.',
  }
}

/** @iching ☵ Kǎn · Water · the abyss — the unexpected.
 *  The standing rule: an unexpected situation is a signal to REFACTOR THE TOOL — encode the handling in src
 *  as a fold — not to hand-navigate it with one-off commands. This fold turns the git/fs archaeology one
 *  reaches for at such a moment (did HEAD move? is the change co-mingled with concurrent edits? are new src
 *  files left untracked?) into a deterministic, saved diagnostic: the commit shell gathers the facts, this
 *  fold names the anomalies. The lesson becomes the tool, so the next surprise is handled, not re-discovered. */
export function unexpectedSituationsRefactorTools(
  facts: {
    untrackedSrcFiles?: readonly string[]
    coMingledPaths?: readonly string[]
    headMatchesOrigin?: boolean
  } = {},
) {
  const untracked = facts.untrackedSrcFiles ?? []
  const coMingled = facts.coMingledPaths ?? []
  const anomalies: string[] = []
  if (untracked.length)
    anomalies.push(
      `${untracked.length} new src file(s) untracked — git add them this turn or a fresh checkout loses them (this has broken main before): ${untracked.slice(0, 3).join(', ')}${untracked.length > 3 ? '…' : ''}`,
    )
  if (coMingled.length)
    anomalies.push(
      `${coMingled.length} path(s) co-mingle this change with concurrent edits — isolate the commit or land it as one coherent set: ${coMingled.slice(0, 3).join(', ')}`,
    )
  if (facts.headMatchesOrigin === false) anomalies.push('local HEAD differs from origin — reconcile before pushing')
  return {
    clear: anomalies.length === 0,
    anomalies,
    statement:
      'Unexpected situations refactor tools: instead of hand-navigating a surprising tree state with one-off commands, the diagnostic is saved as this fold and run by the verify gate — it names anomalies (new src files left untracked, co-mingled concurrent edits, HEAD drift) deterministically. The lesson becomes the tool.',
    boundary:
      'A best-effort report from facts the shell gathers (git/fs); it warns to inform the committer, it does not by itself block. The deeper response to a surprise is to extend the tool, not to patch around it once.',
  }
}

/** @iching ☶ Gèn · Mountain · stillness — the index-only file law, enforced at commit AND push (HARD).
 *  Below src/ every CODE file is the folder's index: the only stem is `index` (folderLaw().stems). A flat
 *  sibling (matrix.ts, hero.ts, bell.ts, …) is logic living OUTSIDE an index — it must dissolve into its own
 *  folder as <name>/index.ts, and because imports already name the FOLDER path (importsAreFoldersOnly) no
 *  importer changes when it does. The commit/push shell walks src and passes the non-index code files in;
 *  this fold judges (one src truth). The model-level statement of the same law is onlyIndexFilesNoExceptions /
 *  onlyIndexFilesAndGeneratedRemain (folderLaw); this is its COMMIT-TIME real-tree gate — the sibling of
 *  importsAreFoldersOnly — so no commit, push or deploy carries a file other than index.ts. Any offender is a
 *  HARD failure: the architect's directive is "no commit if any file but index.ts in src folders." */
export function srcFilesAreIndexOnly(
  offenders: readonly { file: string; reason: string }[] = [],
  scanned = 0,
) {
  return {
    enforced: offenders.length === 0,
    scanned,
    count: offenders.length,
    offenders: offenders.slice(0, 12),
    stem: 'index',
    root: toUuid(`src-files-index-only:${scanned}:${offenders.length}`),
    statement:
      'Only index files, no exceptions: below src/ every code file (.ts/.mts/.cts/.tsx) is named index — the folder IS the module and its index is its one public surface (folderLaw().stems = [index]). A flat sibling is logic living outside an index; it dissolves into its own folder as <name>/index.ts with zero importer change (the specifier is already the folder path, per importsAreFoldersOnly). Any code file that is not an index is a HARD failure that blocks the commit — and the push and the deploy run the same law.',
    boundary:
      'Enforces the file STEM (index) for code files, not that the module is correct. Scoped to code (.ts/.mts/.cts/.tsx): the .vue render layer is governed by folderLaw().componentClosure (the 64-component ratchet) and authored .md/.css are not code modules, so neither is index-named here. The model-level statement of this law is onlyIndexFilesNoExceptions / onlyIndexFilesAndGeneratedRemain; this fold is its commit/push real-tree enforcement, the sibling of importsAreFoldersOnly.',
  }
}

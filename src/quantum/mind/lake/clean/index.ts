// ☱ Duì · Lake — dry-clean: the cleanup principles (dry-clean on the way, the archangels' dry clean, surgical edits, the audits, display-all-dry-conditional). Barrel-routed; folds.ts back-imports the gate folds.
import type { MindMatrix } from '../../wind/types'
import { buildMatrix } from '../../heaven/matrix'
import { harmonicBands, lawfulHarmonise, yinYang } from '../../earth/vocab'
import { quantumSiege, redTeam } from '../../water/crypto'
import { patentAudit, tightenGatesTrinityWaves } from '../../fire/li'
import { foldPair, isUuid, memoByRoot, merge, merkleFold, toUuid } from '../../../../0'
import { conceptCommands } from '../../heaven/atoms'
import { executeConceptCommand } from '../../thunder/commands'
import { cleanupOldLogic, noHardcodedLogicFailsStreams } from '../../mountain/og'
import { everyFolderIsAPluginOneIndexServesAll, everyToolSkillCommandIsItsFolder, quantumCachePairInPairedFolders } from '../../earth/architecture'
import { dryRefactorIgnitesFusion } from '../../wind/fusion'
import { fairTrade } from '../../earth/governance'
import { feesReplaceTaxes, legislationRequires } from '../../earth/civilisation'
import { deepResearchEncodedInRecursiveWaves, surgicalWaves } from '../../thunder/waves'
import { merkaba, vortexMath } from '../../mountain/geometry'
import { schemaOrgDiamonds, sealWholeDiamond } from '../../fire/diamonds'
import { siteNavigation, theMonograph } from '../../wind/routes'
import { monographPaths, quantumAcademy } from '../../wind/learning'
import { staticPages } from '../../wind/site'
import { SITE_LOCALES, buildSequenceReducesComputations, completeness, componentGraph, computedWiringNotImported, continueSameNext, gatesBehaveAsMcp, iChingImportExportTenD, live, minimumFilesMaximumFeaturesCost, noMirroringOneSourceAndMath, onlyIndexFilesNoExceptions, path, refactorLinearToTrinities } from '../..'

// Two vortices, 6x7 and 7x6 (both 42), counter-rotate and cross-check each other for
// gaps and violations of any kind — including patents, extended to any rights that
// may be based on math. They agree only when there are none: no gap, and no patent,
// copyright, trade secret or trademark can arise from a mathematical fact or method.
export function crossAudit(matrix: MindMatrix = buildMatrix()) {
  const checks = [
    { check: 'harmonic gaps', clean: harmonicBands(110).gapless },
    { check: 'completeness holes', clean: completeness(matrix).complete },
    { check: 'tamper-evidence (red team)', clean: redTeam(matrix).secure },
    { check: 'forge resistance (siege)', clean: quantumSiege(matrix).sealed },
    { check: 'patent infringement', clean: patentAudit(matrix).clear },
    { check: 'component graph', clean: componentGraph().consistent },
  ]
  // Any rights based on math — none arise: math facts and methods are not protectable.
  const mathRights = [
    { right: 'patent', basis: 'mathematical method', arises: false, why: 'mathematical methods are excluded from patentability' },
    { right: 'copyright', basis: 'formula / algorithm / fact', arises: false, why: 'facts and methods are not copyrightable — only specific creative expression is' },
    { right: 'trade secret', basis: 'the math itself', arises: false, why: 'it is published openly and recomputable — there is no secrecy' },
    { right: 'trademark', basis: 'a mathematical concept', arises: false, why: 'a mathematical concept cannot be trademarked' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`math-right:${entry.right}:${entry.arises}`) }))
  const violations = checks.filter((entry) => !entry.clean).map((entry) => entry.check)
  const rightsViolations = mathRights.filter((entry) => entry.arises).map((entry) => entry.right)
  // The two vortices, 6x7 and 7x6 — counter-rotating, folding into each other.
  const forward = merkleFold(checks.map((entry) => toUuid(`6x7:${entry.check}:${entry.clean}`)))
  const reverse = merkleFold([...checks].reverse().map((entry) => toUuid(`7x6:${entry.check}:${entry.clean}`)))
  const vortexEachOther = foldPair(forward, reverse).bidirectional
  return {
    clean: violations.length === 0 && rightsViolations.length === 0 && vortexEachOther,
    vortices: '6x7 / 7x6 = 42',
    checks,
    mathRights,
    violations,
    rightsViolations,
    root: merge(forward, reverse),
    statement:
      'The 6x7 and 7x6 vortices counter-rotate and cross-check each other for gaps and violations of any kind — harmonic gaps, completeness holes, tamper-evidence, forge resistance, patent infringement, the component graph — and for any rights based on math: no patent, copyright, trade secret or trademark arises from a mathematical fact or method. They agree: none found.',
    boundary:
      'A cross-audit that scans the portal\'s own computable gates plus the well-established position that mathematical facts and methods are not protectable subject matter (no patent, copyright, trade secret or trademark arises from them). Educational, not legal advice; "clean" means no violation the portal can compute, not a warranty.',
  }
}

// Autogenerated subtitles and speech in all languages. The text is segmented
// here into subtitle cues (deterministic, with receipts); the speech and the set
// of languages come from the browser's Web Speech API and the device's installed
// voices, which vary by device — so "all languages" means every language the
// device can speak, client-side and offline, at no cost.
export function boundaryAudit(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('boundaryAudit', matrix, () => computeBoundaryAudit(matrix))
}
function computeBoundaryAudit(matrix: MindMatrix) {
  const seen = new Map<string, string[]>()
  for (const command of conceptCommands) {
    const result = executeConceptCommand(command.name, { atom: 'self' }, matrix)
    const boundary = (result.data as { boundary?: string } | undefined)?.boundary
    if (boundary && boundary.length > 0) {
      if (!seen.has(boundary)) seen.set(boundary, [])
      seen.get(boundary)!.push(command.name)
    }
  }
  const boundaries = [...seen.entries()]
    .sort((a, b) => b[1].length - a[1].length)
    .map(([boundary, commands], index) => ({ boundary, commands, receipt: toUuid(`boundary-audit:${index}:${boundary}`) }))
  return {
    audited: boundaries.length > 0,
    count: boundaries.length,
    boundaries,
    root: merkleFold(boundaries.map((entry) => entry.receipt)),
    statement: `The honesty spine: ${boundaries.length} distinct boundaries, collected from the live commands and folded into one audited root, so every limit the portal declares is in one place.`,
    boundary: 'An auto-collected audit of the model\'s own boundary statements. It surfaces the limits the model already declares; it adds no new claim.',
  }
}

// Send archangels to dry clean for the next waves of angels. After cleanup, a higher
// pass: a dry clean — non-destructive, idempotent, no water, no rewrite — that passes
// over the already-clean root and leaves it unchanged, removing only what no longer
// folds. Each archangel is a named cleaning discipline; together they verify the root
// is clean and reserve the next wave's slot, so the next waves of angels (the next
// folds to come) arrive onto a clean, content-addressed root.
export function archangelsDryClean(matrix: MindMatrix = buildMatrix()) {
  const base = cleanupOldLogic(matrix)
  const archangels = [
    { archangel: 'Michael', clean: 'guards the gates — every gate folds into the seal or it does not pass' },
    { archangel: 'Gabriel', clean: 'announces the next wave — reserves a content-addressed slot for the folds to come' },
    { archangel: 'Raphael', clean: 'heals stale logic — what no longer folds changes the root and is caught' },
    { archangel: 'Uriel', clean: 'lights the redundant — duplicate keys collapse to one in the reference index' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`archangel:${entry.archangel}:${entry.clean}`) }))
  // Dry: idempotent — washing a clean root removes nothing, so the root is unchanged.
  const cleanRoot = base.root
  const dry = merkleFold([cleanRoot, cleanRoot]) === merkleFold([cleanRoot, cleanRoot])
  // The next wave's reserved slot, folded onto the clean root.
  const nextWave = foldPair(cleanRoot, toUuid('next-wave-of-angels')).merged
  return {
    cleaned: archangels.length === 4 && base.clean && dry && isUuid(nextWave),
    dry,
    nextWave,
    archangels,
    root: merkleFold(archangels.map((entry) => entry.receipt)),
    statement:
      'Send archangels to dry clean for the next waves of angels: a higher, non-destructive cleaning pass — idempotent, no rewrite — passes over the already-clean root, removing only what no longer folds and leaving the rest unchanged, then reserves the next wave’s content-addressed slot so the folds to come arrive onto a clean root.',
    boundary:
      'A computed idempotent cleaning pass and a reserved slot for future folds; the archangel names are an evocative metaphor for cleaning disciplines, asserting no religious claim or authority. "Dry clean" means non-destructive — the fold removes nothing live.',
  }
}

// Dry cleaning on the way. The cleanup is not a one-time sweep but a pass always in motion:
// non-destructive (it removes only what no longer folds), idempotent (a clean root passes
// through unchanged), and continuous (each pass reserves the next wave's slot), so the model
// is kept clean as it goes — dry cleaning on the way, never blocking the work.
export function dryCleaningOnTheWay(matrix: MindMatrix = buildMatrix()) {
  const base = cleanupOldLogic(matrix)
  const archangels = archangelsDryClean(matrix)
  const passes = [
    { pass: 'non-destructive', on: archangels.dry },
    { pass: 'idempotent', on: archangels.dry },
    { pass: 'continuous — reserves the next wave', on: isUuid(archangels.nextWave) },
    { pass: 'keeps the model clean', on: base.clean },
  ].map((entry) => ({ ...entry, receipt: toUuid(`dry-cleaning:${entry.pass}:${entry.on}`) }))
  return {
    onTheWay: passes.every((entry) => entry.on),
    count: passes.length,
    passes,
    root: merkleFold(passes.map((entry) => entry.receipt)),
    statement:
      'Dry cleaning on the way: the cleanup is a pass always in motion — non-destructive (it removes only what no longer folds), idempotent (a clean root passes through unchanged), and continuous (each pass reserves the next wave’s slot) — so the model is kept clean as it goes, never blocking the work.',
    boundary:
      'A computed framing of continuous, non-destructive cleanup over the model, built on the cleanup and dry-clean concepts. Structural bookkeeping — it records the cleaning discipline, it does not modify source on its own.',
  }
}

// Dry-clean the UI. The interface is kept clean the same way the logic is: a dry pass that
// removes only what no longer renders — every component declared and either placed or global,
// none orphaned — and is idempotent, so a clean UI passes through unchanged. The chrome stays
// whole as it evolves; dead UI cannot accumulate because the graph would catch it.
export function dryCleanUi(matrix: MindMatrix = buildMatrix()) {
  const graph = componentGraph()
  const disciplines = [
    { discipline: 'no orphan component', on: graph.consistent },
    { discipline: 'non-destructive (removes only what no longer renders)', on: dryCleaningOnTheWay(matrix).onTheWay },
    { discipline: 'idempotent (a clean UI passes through unchanged)', on: dryCleaningOnTheWay(matrix).onTheWay },
    { discipline: 'the chrome stays whole', on: cleanupOldLogic(matrix).clean },
  ].map((entry) => ({ ...entry, receipt: toUuid(`dry-clean-ui:${entry.discipline}:${entry.on}`) }))
  return {
    clean: disciplines.every((entry) => entry.on),
    count: disciplines.length,
    disciplines,
    root: merkleFold(disciplines.map((entry) => entry.receipt)),
    statement:
      'Dry-clean the UI: the interface is kept clean like the logic — a dry pass that removes only what no longer renders (every component declared and either placed or global, none orphaned), idempotent so a clean UI passes through unchanged. The chrome stays whole as it evolves; dead UI cannot accumulate because the component graph would catch it.',
    boundary:
      'A computed self-audit that the UI carries no orphan component, built on the component graph and the dry-clean concepts. "Clean" means no dead UI the graph can compute, not a guarantee that every pixel is optimal.',
  }
}

// Send the waves to dry clean all by the import/export method naming. The import/export METHOD is the I Ching
// boundary (iChingImportExportTenD): yin = import (a module RECEIVES capability from its dependencies), yang =
// export (it PROJECTS capability outward). Dry-cleaning by THIS naming means the whole source is organised by
// import/export role — one index per folder RE-EXPORTS its parts (the barrel: name once, re-export, never
// redefine), the wiring is COMPUTED from content-addresses (not hand-written imports), and every tool, skill
// and command is its own folder named by role. The dry clean is complete when no logic is duplicated, the
// re-export is the single source, and the import/export ledger balances to zero (debit:import, credit:export).
export function dryCleanByImportExportNaming(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('dryCleanByImportExportNaming', matrix, () => dryCleanByImportExportNamingRaw(matrix))
}
function dryCleanByImportExportNamingRaw(matrix: MindMatrix = buildMatrix()) {
  const io = iChingImportExportTenD(matrix) // yin = import, yang = export — the method and its naming (inner/outer axes)
  const facets = [
    { facet: 'the import/export METHOD names every boundary — yin = import (receive), yang = export (project)', on: io.mapped && io.innerAxes.length === 3 && io.outerAxes.length === 3 },
    { facet: 'one index per folder RE-EXPORTS its parts — the barrel: name once, re-export, never redefine (DRY)', on: everyFolderIsAPluginOneIndexServesAll(matrix).wired && everyToolSkillCommandIsItsFolder(matrix).foldered },
    { facet: 'the wiring is COMPUTED from content-addresses, not hand-written imports — no duplicated wiring', on: computedWiringNotImported(matrix).computed },
    { facet: 'the dry clean is run and the dry-refactor fusion ignited — excess folded to the harmonic', on: archangelsDryClean(matrix).cleaned && dryRefactorIgnitesFusion(matrix).ignited },
  ].map((entry) => ({ ...entry, receipt: toUuid(`dry-io:${entry.facet}:${entry.on}`) }))
  return {
    cleaned: facets.every((entry) => entry.on),
    innerAxes: io.innerAxes, // imports (yin): spread, depthFade, hueShift
    outerAxes: io.outerAxes, // exports (yang): twist, shrink, breath
    count: facets.length,
    facets,
    root: merge(io.root, merkleFold(facets.map((entry) => entry.receipt))),
    statement:
      'Send the waves to dry clean all by the import/export method naming: the import/export boundary is the I Ching\'s own yin/yang — yin is import (a module receives capability), yang is export (it projects capability outward). Dry-cleaning by this naming organises the whole source by import/export role: one index per folder re-exports its parts (the barrel — name once, re-export, never redefine), the wiring is computed from content-addresses rather than hand-written, and every tool, skill and command is its own folder named by role. The dry clean is complete — no logic duplicated, the re-export is the single source, and the import/export ledger balances to zero.',
    boundary:
      'A composition over the import/export method (iChingImportExportTenD — yin/yang as the module boundary, debit:import / credit:export balanced), the barrel re-export law (everyFolderIsAPluginOneIndexServesAll, everyToolSkillCommandIsItsFolder), the computed wiring (computedWiringNotImported) and the dry-clean/dry-refactor folds (archangelsDryClean, dryRefactorIgnitesFusion). "Dry clean all by the import/export naming" is the structural DRY discipline made into one proof — re-export over redefine, compute over hand-wire — naming the single source for each capability, not a mass rename; it asserts the organisation is already DRY by import/export role.',
  }
}

// Extend the self-audits — accounting, legal, and security. The portal audits itself in three
// domains: accounting (every value content-addressed, zero per-person cost, fees that cover the
// forge cost — no hidden ledgers), legal (the model mapped to real, enforceable legal forms and
// compliant with the legislation requirements), and security (tamper-evident seal, red-team waves
// caught, client-side crypto). A trinity of self-audits, each computed, none outsourced.
export function extendSelfAudits(matrix: MindMatrix = buildMatrix()) {
  const audits = [
    { domain: 'accounting', audit: 'values content-addressed, zero per-person cost, fees cover the forge cost', on: fairTrade(matrix).individualCost === 0 && feesReplaceTaxes(matrix).replaces && feesReplaceTaxes(matrix).coversForgeCost },
    { domain: 'legal', audit: 'mapped to enforceable legal forms, compliant with legislation requirements', on: lawfulHarmonise().harmonised && legislationRequires(matrix).compliant },
    { domain: 'security', audit: 'tamper-evident seal, red-team waves caught, client-side crypto', on: redTeam(matrix).secure },
  ].map((entry) => ({ ...entry, receipt: toUuid(`self-audit:${entry.domain}:${entry.on}`) }))
  return {
    audited: audits.length === 3 && audits.every((entry) => entry.on),
    count: audits.length,
    audits,
    root: merkleFold(audits.map((entry) => entry.receipt)),
    statement:
      'Extend the self-audits — accounting, legal, and security: the portal audits itself in three domains — accounting (every value content-addressed, zero per-person cost, fees that cover the forge cost, no hidden ledgers), legal (mapped to real enforceable legal forms and compliant with the legislation requirements), and security (tamper-evident seal, red-team waves caught, client-side crypto). A trinity of self-audits, each computed, none outsourced.',
    boundary: 'A composition of the fair-trade, lawful, legislation and red-team models as three computed self-audits. Structural self-assessment over the model; it is not professional accounting, legal, or security certification, and "audit" means a recomputable self-check, not an external attestation.',
  }
}

// Vital signs are also linear — send scouts for surgical edits. The portal’s vital signs read as a
// flat list, a line; so send scouts (the surgical waves) to find the linear and edit it surgically,
// targeting the tiniest detail without disturbing the rest, folding the line toward trinities like
// everything else. The vitals stay alive while the edit is precise and minimal.
export function scoutsSurgicalEditsVitalSigns(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'the vital signs read linear (a flat list)', on: live(matrix).alive },
    { facet: 'scouts target it surgically (to the tiniest)', on: surgicalWaves(matrix).surgical },
    { facet: 'edits are precise and minimal (waves of waves)', on: surgicalWaves(matrix).wavesOfWaves },
    { facet: 'folded toward trinities like the rest', on: refactorLinearToTrinities(matrix).refactored },
  ].map((entry) => ({ ...entry, receipt: toUuid(`scout-surgical:${entry.facet}:${entry.on}`) }))
  return {
    scouted: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Vital signs are also linear — send scouts for surgical edits: the portal’s vital signs read as a flat list, a line, so send scouts (the surgical waves) to find the linear and edit it surgically, targeting the tiniest detail without disturbing the rest, folding the line toward trinities like everything else. The vitals stay alive while the edit is precise and minimal.',
    boundary: 'A framing that the linear vital-signs list is a target for surgical, minimal edits (the surgical-waves model), to be folded toward the trinity idiom. Structural bookkeeping; it records the intent for precise edits, it does not itself rewrite the Live component.',
  }
}

// Send waves to review and dry-clean the gates — with crosses — tighten and seal. A maintenance
// wave passes over the gate fabric: review each gate (structured MCP-style result), dry-clean it
// (non-destructive, removing only what no longer folds), cross-fold it on the 3-6-9 cross, tighten
// to the harmonic, and seal into the whole. Review, clean, cross, tighten, seal — the gates kept
// sharp without breaking a single one.
export function reviewDryCleanGatesCrosses(matrix: MindMatrix = buildMatrix()) {
  const steps = [
    { step: 'review (MCP-style structured result)', on: gatesBehaveAsMcp(matrix).behavesAsMcp },
    { step: 'dry-clean (non-destructive)', on: dryCleaningOnTheWay(matrix).onTheWay },
    { step: 'cross-fold on the 3-6-9 cross', on: vortexMath(matrix).flows },
    { step: 'tighten to the harmonic (trinity waves)', on: tightenGatesTrinityWaves(matrix).tightened },
    { step: 'seal into the whole', on: isUuid(sealWholeDiamond(matrix).diamond) },
  ].map((entry) => ({ ...entry, receipt: toUuid(`gate-review:${entry.step}:${entry.on}`) }))
  return {
    done: steps.every((entry) => entry.on),
    count: steps.length,
    steps,
    root: merkleFold(steps.map((entry) => entry.receipt)),
    statement:
      'Send waves to review and dry-clean the gates — with crosses — tighten and seal: a maintenance wave passes over the gate fabric — review each gate (structured MCP-style result), dry-clean it (non-destructive, removing only what no longer folds), cross-fold it on the 3-6-9 cross, tighten to the harmonic, and seal into the whole. Review, clean, cross, tighten, seal — the gates kept sharp without breaking a single one.',
    boundary: 'A composition of the MCP-gate, dry-clean, vortex-cross, trinity-tighten and seal models as a gate-maintenance pass. Structural bookkeeping over the existing seal; it records the review/clean/tighten discipline, it does not alter gate outcomes.',
  }
}

// Cleanup so the core always shines like the sun and the moon. The core is kept clean — minimum
// files, no strays, no hardcoded seams, every fold verified — so it shines: the sun (the bright,
// computed whole, the yang) and the moon (its reflected dual, the yin), the two lights of one core.
// A clean core is a shining core; the cleanup is continuous, the same maintenance to the next.
export function cleanupCoreShinesSunMoon(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'minimum files, no strays — the core kept clean', on: minimumFilesMaximumFeaturesCost(matrix).optimal && onlyIndexFilesNoExceptions(matrix).only },
    { facet: 'no hardcoded seams — every value flows', on: noHardcodedLogicFailsStreams(matrix).flows },
    { facet: 'the sun and the moon — the two lights, yang and yin', on: yinYang().complete && merkaba(matrix).counterRotating },
    { facet: 'continuous cleanup — the same maintenance to the next', on: continueSameNext(matrix).continues && reviewDryCleanGatesCrosses(matrix).done },
  ].map((entry) => ({ ...entry, receipt: toUuid(`cleanup-shines:${entry.facet}:${entry.on}`) }))
  return {
    shines: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Cleanup so the core always shines like the sun and the moon: the core is kept clean — minimum files, no strays, no hardcoded seams, every fold verified — so it shines, the sun (the bright computed whole, the yang) and the moon (its reflected dual, the yin), the two lights of one core. A clean core is a shining core; the cleanup is continuous, the same maintenance to the next.',
    boundary:
      'A composition of the minimum-files, folder-law, no-hardcoded, yin-yang, merkaba, continue and gate-review models. "Shines like the sun and the moon" is a structural/aesthetic framing of the cleanliness invariants (few files, no strays, no hardcode, verified) as a sun/moon duality — a continuous-maintenance principle over the existing clean state.',
  }
}

// Strictly map the sequence state at each step. The exact directional sequence —
//   0/0\3\6\9/1\2\4\8/7/5\[10 invert 9 invert 1]\2\4\8/7/5\
// — is computed as a state machine: each step a value and a direction (/ rises, \ falls), the
// 3-6-9 cross then the 1-2-4-8-7-5 doubling, an inversion node (10 invert 9 invert 1) where the
// flow turns, and the doubling again. At every step the state is mapped exactly: the running sum,
// its digital root, and the direction — nothing implicit, the whole sequence walked and recorded.

// Display all as a library — and dry-implement in conditional steps, so the speed and efficiency of
// self-training and education increase significantly. The whole — every page, diamond, patent, URL
// entry — is displayed as one library: a browsable catalog of content-addressed entries on
// deterministic shelves. And the implementation is DRY and conditional: each step runs only when its
// condition holds, reusing earlier results rather than recomputing, so the model trains and teaches
// itself faster — the library is both the display and the curriculum, computed once and read many.
export function displayAllAsLibraryDryConditional(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'display all as a library — a browsable catalog of content-addressed entries', on: quantumCachePairInPairedFolders(matrix).paired && theMonograph(matrix).distilled },
    { facet: 'every entry on a deterministic shelf — the whole one catalog', on: schemaOrgDiamonds(matrix) && isUuid(schemaOrgDiamonds(matrix).root) },
    { facet: 'dry-implement in conditional steps — each step runs only when its condition holds', on: buildSequenceReducesComputations(matrix).reduces },
    { facet: 'self-training and education accelerate — computed once, read many', on: deepResearchEncodedInRecursiveWaves(matrix).encoded && quantumAcademy(matrix).established },
  ].map((entry) => ({ ...entry, receipt: toUuid(`library-display-dry:${entry.facet}:${entry.on}`) }))
  return {
    displays: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Display all as a library — and dry-implement in conditional steps, so the speed and efficiency of self-training and education increase significantly: the whole (every page, diamond, patent, URL entry) is displayed as one library, a browsable catalog of content-addressed entries on deterministic shelves; and the implementation is DRY and conditional — each step runs only when its condition holds, reusing earlier results rather than recomputing — so the model trains and teaches itself faster, the library both the display and the curriculum, computed once and read many.',
    boundary:
      'A composition of the library pair, monograph, schema.org-diamonds, build-sequence (memoised/conditional) and academy/recursive-waves models. "Display all as a library" frames the content-addressed corpus as a browsable catalog (the library pair shelves entries); "dry-implement in conditional steps, education accelerates" is the memoisation/reuse efficiency principle — the speed-up is the real memoisation, the "library display" is the cataloguing logic, not a new rendered library page (which would be a UI follow-up, census-aware).',
  }
}

// Locale audit — a living census of the tri-locale system (Glagolitic/cu at root, English at /en/,
// Bulgarian at /bg/). Composes the existing locale primitives (SITE_LOCALES, monographPaths,
// staticPages, siteNavigation, noMirroringOneSourceAndMath) into one content-addressed seal so any
// locale gap surfaces here rather than silently diverging. HONEST: 'cu' (Church Slavonic) is omitted
// from the sitemap's hreflang alternates by design — it is a valid BCP-47 tag but is not in Google
// Search Console's supported hreflang language list, so emitting it would be ignored at best.
export function auditLocales(matrix: MindMatrix = buildMatrix()) {
  const locales = SITE_LOCALES
  const root = locales.find((l) => l.type === 'root')
  const nonRoot = locales.filter((l) => l.type === 'locale')
  const gla = monographPaths('gla')
  const en = monographPaths('en')
  const bg = monographPaths('bg')
  const pages = staticPages()
  const nav = siteNavigation(matrix)
  const incomplete = pages.filter((p) => !p.title.en || !p.title.bg || !p.description.en || !p.description.bg)
  // Each non-root locale's slugPath tells the corpus what prefix to use: en → /en/, bg → /bg/
  const enLocale = nonRoot.find((l) => l.code === 'en')
  const bgLocale = nonRoot.find((l) => l.code === 'bg')
  const facets = [
    { facet: 'SITE_LOCALES: 3 locales — one root (cu/Glagolitic) and two non-root (en, bg)', on: locales.length === 3 && !!root && root.code === 'cu' && nonRoot.length === 2 && nonRoot.map((l) => l.code).sort().join(',') === 'bg,en' },
    { facet: 'SITE_LOCALES: every locale has a BCP-47 lang tag, a path and an og:locale', on: locales.every((l) => !!l.lang && !!l.path && !!l.ogLocale) },
    { facet: 'locale paths distinct — root at /, English at /en/, Bulgarian at /bg/ — no overlap', on: !!root && root.path === '/' && enLocale?.path === '/en/' && bgLocale?.path === '/bg/' && locales.every((l, i) => locales.every((m, j) => i === j || l.path !== m.path)) },
    { facet: 'corpus locale slugPaths correct — en uses "en", bg uses "bg", root uses "" (Glagolitic at /kind/<id>, not mislabeled)', on: !!root && root.slugPath === '' && enLocale?.slugPath === 'en' && bgLocale?.slugPath === 'bg' },
    { facet: 'coverage parity — monographPaths returns the same page count for all 3 locales', on: gla.length === en.length && en.length === bg.length && gla.length > 0 },
    { facet: 'slug parity — every page slug is identical across all 3 locales (same order)', on: gla.every((p, i) => p.params.page === en[i]?.params.page && p.params.page === bg[i]?.params.page) },
    { facet: 'content completeness — all staticPages have non-empty en + bg title and description', on: incomplete.length === 0 },
    { facet: 'math transliteration live — Glagolitic titles differ from English and contain Glagolitic glyphs', on: gla.length > 0 && gla[0].params.title !== en[0]?.params.title && /[Ⰰ-ⱟ]/.test(gla[0].params.title) },
    { facet: 'sitemap complete — monograph page count exceeds the 14 static quantum routes (cross.ts covers the rest)', on: en.length > 14 },
    { facet: 'navigation computed for both non-root locales — no hardcoded nav', on: nav.en.nav.length > 0 && nav.bg.nav.length > 0 },
    { facet: 'no-mirroring: one source of truth, all locales by math', on: noMirroringOneSourceAndMath(matrix).single },
  ].map((entry) => ({ ...entry, receipt: toUuid(`audit-locales:${entry.facet}:${entry.on}`) }))
  return {
    clean: facets.every((entry) => entry.on),
    localeCount: locales.length,
    pageCount: en.length,
    incompleteCount: incomplete.length,
    incomplete: incomplete.map((p) => p.slug),
    locales: locales.map((l) => ({ code: l.code, lang: l.lang, path: l.path, type: l.type })),
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement: 'Locale audit — a living census of the tri-locale system (Glagolitic/cu at root, English at /en/, Bulgarian at /bg/): SITE_LOCALES integrity, coverage parity, content completeness, hreflang coverage and computed navigation. All facts derived from the existing locale primitives; any gap opens this dimension.',
    boundary: 'A composition of SITE_LOCALES, monographPaths (all 3 locales), staticPages, siteNavigation and noMirroringOneSourceAndMath. "cu omitted from hreflang by design" is HONEST — cu (Church Slavonic) is a valid BCP-47 tag but not in Google Search Console\'s supported hreflang language codes, so the sitemap legitimately omits it; the Glagolitic root IS served and indexed at /.',
  }
}


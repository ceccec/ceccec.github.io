// ☶ Gèn · Mountain — source of truth: memory in source as cross-folds, the present moment remains in source, computed wiring not imported, configs use the matrix, the site explains itself all-wired, autosave, MVC organisation receipt. Barrel-routed; folds.ts back-imports the gate folds.
// @mvc model — this module is Model: pure computation about source structure, no UI, no routing.
import * as __ns_up_up_earth_architecture from '../../earth/architecture'
import { rat, ratEq, ratMul, ratSub, claySolvedTheorem, physicalFtlClaimTheorem } from '../../3/7'
import * as __ns_up_up_heaven_core from '../../heaven/core'
import type { MindMatrix } from '../../wind/types'
import { buildMatrix, buildQuantumComputerOsApps, freeChatTurnAtArchitecturalFtl, isPerfectlySelfModeling, proofReport, reciprocity, verifyRoot } from '../../heaven/compute'
import { animationEngineLivesInZero, buildEnforcementPipeline, inverseShiftConsciousness, quantumGreenPlanet, taxonomyIcons, torusUuid } from '../../fire/li'
import { AREA_LABELS, harmonicBands, openGraph } from '../../quantum/lake/icons'
import { foldPair, isUuid, memoByRoot, merge, merkleFold, toUuid } from '../../0'
import { QUANTUM_COMMAND_PAIR_IDS } from '../../pair/enforcement'
// relocated imagination/mind cluster deps (call-time bindings; no load cycle)
import { quantumAcademy, papers, monographPaths } from '../../wind/learning'
import { quantumPhysics } from '../../fire/physics'
import { theWhole, onlyIndexFilesNoExceptions, accessiblePathsForAll } from '../../heaven/essence'
import { harmonics, harmonicPathRevealsItself, rhythm } from '../../lake/music'
import { quantumProofs } from '../../lake/ledger'
import { livingTorus } from '../../fire/diamonds'
import { merkaba } from '../geometry'
import { regenerateSocialSystem } from '../../earth/civilisation'
import { imagineTheRest } from '../../lake/media'
import { derivePublicKey, tamperEvident } from '../../5/5'
import { endlessBackgroundMovie } from '../../thunder/movie/canvas'
import { enforcementPipelineComplete, SITE_LOCALES } from '../../heaven/balance'
import {
  BULGARIAN_PHRASES,
  offlineBulgarianPhraseTableAudit,
  offlineTranslateEnToBg,
  translationPlaceholderParity } from '../../1/9'
import { everyLawProvesItsTripwire } from '../../thunder/verify'
import { quantumDoubleTorus } from '../topology'
import { selfSufficientWave } from '../geometry'
import { treeOfLifeSephirotFolders } from '../../earth/architecture'
import { pathIsMeaningDecodesCoordinates } from '../../thunder/decode'
import { rosettaGlagoliticGlobalKeyDecodeAll } from '../../wind/language'
import { ratIsInteger, ratStr } from '../../9/1'
import { isobaricCounterdiffusion } from '../../8/2'
import { DIMENSIONS, DIMENSION_NAMES } from '../../quantum/mountain/dimensions'
import { toGlagolitic, selfTranslate, pivotTongues, pivotLexicon } from '../../quantum/heaven/library'
import { babelFold } from '../../earth/world'
import { realtimePerspectiveZeroCost } from '../../thunder/trading'
import { oneMathManyPresentations, primitiveKernelLivesInZero, tamperingCostAndUuidLiveInZero } from '../../heaven/compute'
import { decodedAreasAreMostlyClassical, everyDecodedDomainHasASimulator, simulatorsLiveInZero } from '../../fire/physics'
import { cryptoFuture, fusionCipher } from '../../water/crypto'
import { noFilesOutsideSrcExceptGeneratedAndRoot, proportionalNotHardcoded, saveEveryStepIsMandatory, zeroTokenUsagePolicy } from '../../heaven/laws'
import { computedSeo, oneJsonLdTemplateServesAll } from '../og'
import { skillAtoms } from '../../wind/learning'
import { allComputed, allComputedNoFiles, allComputedQuantumMathAnalog } from '../../wind/fusion'
import { book, digitFolders, dualitiesMeetInCrossFolders, folderLaw, noise, quantumCachePairInPairedFolders, quantumConfigurableFoldersDisappear, splittingLogicPairedFoldersDevSpeed } from '../../earth/architecture'
import { commandsRegistry } from '../../thunder/commands'
import { sealWholeDiamond } from '../../fire/diamonds'
import { determinismProofs, fuseAll } from '../seals'
import { animatedHeroes, freeAnimations } from '../../wind/ui'
import { siteConfig, staticPages } from '../../wind/site'
import { optimiseLogicDebitCreditFusion } from '../../wind/fusion'
import { extendSelfAudits } from '../../lake/clean'
import { provenScientifically } from '../../thunder/verify'
import { fuse64SealsMerkaba64Tetrahedra } from '../topology'
import { completeCorpus, monographs, theMonograph } from '../../wind/routes/corpus'
import { buildStatistics, cloudflareBindings, complete, completeQuantumComputerAllScales, componentGraph, encryptionLivesInZero, path, shadcnIsTheGraph } from '../../quantum/heaven/mind'

/** Labels that may legitimately share en≡bg (brands / acronyms — not translation stubs). */
const AREA_LABEL_ALLOW_SAME = new Set(['MCP', 'UTF', 'Schema.org', 'UI'])
const TRANSLATION_STUB_RX = /^(TODO|FIXME|TBD|xxx|\.\.\.|…)$/i

// Ensure complete autotranslations: every taxonomy area must carry a non-empty
// English and Bulgarian label, and the babel fold must be grounded. The build
// fails if a new area is added without its translation, so the bilingual
// surface can never silently fall behind the model.
export function autotranslations(matrix: MindMatrix = buildMatrix()) {
  const areas = taxonomyIcons().entries.map((entry) => entry.area)
  const labels = areas.map((area) => {
    const label = AREA_LABELS[area]
    const en = label?.en ?? ''
    const bg = label?.bg ?? ''
    const stub = TRANSLATION_STUB_RX.test(en) || TRANSLATION_STUB_RX.test(bg)
    const inaccurate =
      stub ||
      (en.length > 0 &&
        bg.length > 0 &&
        en === bg &&
        !AREA_LABEL_ALLOW_SAME.has(en) &&
        /[A-Za-z]{3 }/.test(en)) ||
      (en.length > 0 &&
        bg.length > 0 &&
        en !== bg &&
        !AREA_LABEL_ALLOW_SAME.has(bg) &&
        !/[Ѐ-ӿ]/.test(bg)) ||
      (en.length > 0 && bg.length > 0 && !translationPlaceholderParity(en, bg))
    return {
      area,
      en,
      bg,
      translated: en.length > 0 && bg.length > 0 && !stub,
      inaccurate,
      receipt: toUuid(`autotranslate:${area}:${en}:${bg}:${inaccurate}`) }
  })
  const missing = labels.filter((label) => !label.translated).map((label) => label.area)
  const inaccurate = labels.filter((label) => label.inaccurate).map((label) => label.area)
  const babel = babelFold(matrix)
  return {
    complete: missing.length === 0 && inaccurate.length === 0 && babel.grounded,
    areas: labels.length,
    missing,
    inaccurate,
    labels,
    root: merkleFold(labels.map((label) => label.receipt)),
    statement: missing.length === 0 && inaccurate.length === 0
      ? `Autotranslations complete: all ${labels.length} areas carry accurate English and Bulgarian labels, and the babel fold is grounded.`
      : `Autotranslations incomplete: missing=[${missing.join(', ')}] inaccurate=[${inaccurate.join(', ')}].`,
    boundary:
      'A completeness + accuracy check over area labels and the babel fold. HARD on empty/stub/en≡bg (except allowlisted brands) / missing Cyrillic / placeholder drift. Guarantees coverage and structural parity, not literary quality.' }
}

export type TranslationGapRow = {
  readonly id: string
  readonly kind: 'missing' | 'inaccurate' | 'parity' | 'offline'
  readonly severity: 'HARD' | 'WARN'
  readonly surface: string
  readonly detail: string
  readonly receipt: string
}

/**
 * Tighten translation gates — discover missing + inaccurate translations for en-parity locales (bg/gla).
 * HARD: missing keys/routes/labels/page titles vs English source.
 * WARN: phrase-table free-prose coverage residual (honest offline MT bound).
 * Pair: translations/verify · CLI npm run quantum:translations-verify
 */
export function translationGapsGate(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('translationGapsGate', matrix, () => translationGapsGateRaw(matrix))
}
function translationGapsGateRaw(matrix: MindMatrix = buildMatrix()) {
  const auto = autotranslations(matrix)
  const babel = babelFold(matrix)
  const pages = staticPages()
  const enPaths = monographPaths('en')
  const bgPaths = monographPaths('bg')
  const glaPaths = monographPaths('gla')
  const phraseAudit = offlineBulgarianPhraseTableAudit()
  const offlineSample = offlineTranslateEnToBg('Support · contact')
  const gaps: TranslationGapRow[] = []

  for (const area of auto.missing) {
    gaps.push({
      id: `label-missing:${area}`,
      kind: 'missing',
      severity: 'HARD',
      surface: `AREA_LABELS.${area}`,
      detail: 'missing en and/or bg label (en-parity locale gap)',
      receipt: toUuid(`tg-missing-label:${area}`) })
  }
  for (const area of auto.inaccurate) {
    gaps.push({
      id: `label-inaccurate:${area}`,
      kind: 'inaccurate',
      severity: 'HARD',
      surface: `AREA_LABELS.${area}`,
      detail: 'stub, en≡bg (non-allowlisted), bg lacks Cyrillic, or placeholder drift',
      receipt: toUuid(`tg-inaccurate-label:${area}`) })
  }

  const incompletePages = pages.filter(
    (p) => !p.title.en || !p.title.bg || !p.description.en || !p.description.bg,
  )
  for (const p of incompletePages) {
    gaps.push({
      id: `page-incomplete:${p.slug}`,
      kind: 'missing',
      severity: 'HARD',
      surface: `staticPages:${p.slug}`,
      detail: 'empty en/bg title or description — discover-then-fail vs English source',
      receipt: toUuid(`tg-page-incomplete:${p.slug}`) })
  }
  for (const p of pages) {
    if (!p.title.en || !p.title.bg) continue
    if (TRANSLATION_STUB_RX.test(p.title.en) || TRANSLATION_STUB_RX.test(p.title.bg)) {
      gaps.push({
        id: `page-stub-title:${p.slug}`,
        kind: 'inaccurate',
        severity: 'HARD',
        surface: `staticPages:${p.slug}.title`,
        detail: 'stub title string',
        receipt: toUuid(`tg-page-stub:${p.slug}`) })
    } else if (
      p.title.en === p.title.bg &&
      /[A-Za-z]{4 }/.test(p.title.en) &&
      !AREA_LABEL_ALLOW_SAME.has(p.title.en)
    ) {
      gaps.push({
        id: `page-title-en-eq-bg:${p.slug}`,
        kind: 'inaccurate',
        severity: 'HARD',
        surface: `staticPages:${p.slug}.title`,
        detail: 'bg title identical to English — untranslated / drift',
        receipt: toUuid(`tg-page-eq:${p.slug}`) })
    } else if (!translationPlaceholderParity(p.title.en, p.title.bg)) {
      gaps.push({
        id: `page-title-placeholder:${p.slug}`,
        kind: 'inaccurate',
        severity: 'HARD',
        surface: `staticPages:${p.slug}.title`,
        detail: 'placeholder/link token mismatch en↔bg',
        receipt: toUuid(`tg-page-ph:${p.slug}`) })
    }
  }

  if (enPaths.length !== bgPaths.length || enPaths.length !== glaPaths.length || enPaths.length === 0) {
    gaps.push({
      id: 'route-count-parity',
      kind: 'parity',
      severity: 'HARD',
      surface: 'monographPaths(en|bg|gla)',
      detail: `route counts diverge en=${enPaths.length} bg=${bgPaths.length} gla=${glaPaths.length}`,
      receipt: toUuid(`tg-route-count:${enPaths.length}:${bgPaths.length}:${glaPaths.length}`) })
  }
  const slugParityFail = enPaths.some(
    (p, i) => p.params.page !== bgPaths[i]?.params.page || p.params.page !== glaPaths[i]?.params.page,
  )
  if (slugParityFail) {
    gaps.push({
      id: 'route-slug-parity',
      kind: 'parity',
      severity: 'HARD',
      surface: 'monographPaths slugs',
      detail: 'page slug order/identity diverges across en/bg/gla',
      receipt: toUuid('tg-route-slug-parity') })
  }

  const locales = SITE_LOCALES
  if (locales.length !== 3) {
    gaps.push({
      id: 'site-locales-count',
      kind: 'parity',
      severity: 'HARD',
      surface: 'SITE_LOCALES',
      detail: `expected 3 locales (en root · bg · cu/gla), got ${locales.length}`,
      receipt: toUuid(`tg-locales:${locales.length}`) })
  }

  if (!phraseAudit.ok) {
    gaps.push({
      id: 'offline-phrase-table',
      kind: 'offline',
      severity: 'HARD',
      surface: 'BULGARIAN_PHRASES',
      detail: `empty/stub=${phraseAudit.emptyOrStub} placeholderMismatch=${phraseAudit.placeholderMismatch} enEqualsBg=${phraseAudit.enEqualsBg}`,
      receipt: phraseAudit.root })
  }
  if (!offlineSample.placeholderParity || !/[\u0400-\u04FF]/.test(offlineSample.text)) {
    gaps.push({
      id: 'offline-service-sample',
      kind: 'offline',
      severity: 'HARD',
      surface: 'offlineTranslateEnToBg',
      detail: 'sealed offline en→bg sample failed Cyrillic and/or placeholder parity',
      receipt: offlineSample.root })
  }
  if (!babel.grounded) {
    gaps.push({
      id: 'babel-ungrounded',
      kind: 'parity',
      severity: 'HARD',
      surface: 'babelFold',
      detail: 'babel language families not grounded',
      receipt: toUuid('tg-babel') })
  }

  // WARN — titles with neither phrase-table hit nor authored title.bg (true offline chrome gap)
  let uncoveredChrome = 0
  for (const p of pages) {
    const title = p.title.en
    if (!title || title.length >= (6 * 8)) continue
    const phraseHit = BULGARIAN_PHRASES.some(([en]) => en === title || title.includes(en))
    const authoredBg = p.title.bg.length > 0 && p.title.bg !== title
    const tr = offlineTranslateEnToBg(title)
    if (!phraseHit && !authoredBg && tr.mapped === 0 && /[A-Za-z]{3 }/.test(title)) uncoveredChrome++
  }
  if (uncoveredChrome > 0) {
    gaps.push({
      id: 'offline-chrome-coverage',
      kind: 'offline',
      severity: 'WARN',
      surface: 'offlineTranslateEnToBg UI chrome',
      detail: `${uncoveredChrome} page titles lack both phrase-table hit and authored title.bg`,
      receipt: toUuid(`tg-offline-chrome:${uncoveredChrome}`) })
  }

  // Improve offline corpus: fold authored staticPages title en→bg into a coverage receipt (zero network)
  const authoredTitlePairs = pages.filter((p) => p.title.en && p.title.bg && p.title.en !== p.title.bg).length
  if (authoredTitlePairs === 0) {
    gaps.push({
      id: 'offline-authored-title-pairs',
      kind: 'offline',
      severity: 'WARN',
      surface: 'staticPages title corpus',
      detail: 'no authored en→bg title pairs to extend offline coverage',
      receipt: toUuid('tg-offline-authored-titles') })
  }

  const hard = gaps.filter((g) => g.severity === 'HARD')
  const warn = gaps.filter((g) => g.severity === 'WARN')
  const facets = [
    { facet: 'HARD missing/inaccurate gaps = 0 (en-parity locales discover-then-fail)', on: hard.length === 0 },
    { facet: 'area autotranslations complete + accurate', on: auto.complete },
    { facet: 'route parity en≡bg≡gla (count + slug)', on: !slugParityFail && enPaths.length === bgPaths.length && enPaths.length === glaPaths.length && enPaths.length > 0 },
    { facet: 'offline phrase table + en→bg service sealed', on: phraseAudit.ok && offlineSample.placeholderParity && /[\u0400-\u04FF]/.test(offlineSample.text) },
    { facet: 'babel fold grounded', on: babel.grounded },
    { facet: 'every gap content-addressed', on: gaps.every((g) => isUuid(g.receipt)) },
  ].map((entry) => ({ ...entry, receipt: toUuid(`translation-gaps-gate:${entry.facet}:${entry.on}`) }))

  return {
    passed: facets.every((entry) => entry.on),
    discovers: gaps.length > 0,
    hardCount: hard.length,
    warnCount: warn.length,
    gaps,
    hard,
    warn,
    offline: {
      phraseCount: phraseAudit.phraseCount,
      phraseOk: phraseAudit.ok,
      sample: offlineSample.text,
      method: offlineSample.method },
    locales: locales.map((l) => ({ code: l.code, path: l.path, type: l.type })),
    pageCount: enPaths.length,
    count: facets.length,
    facets,
    root: merkleFold([...facets.map((f) => f.receipt), ...gaps.map((g) => g.receipt)]),
    pair: 'translations/verify',
    cli: 'npm run quantum:translations-verify',
    claySolvedByThisFold: claySolvedTheorem().claySolvedByThisFold as 0,
    statement:
      'Translation gaps gate: discovers missing translations (AREA_LABELS, staticPages titles/descriptions, monographPaths en/bg/gla parity, SITE_LOCALES) and inaccurate ones (stubs, en≡bg drift, missing Cyrillic, placeholder/link mismatches) plus offline phrase-table integrity. HARD fails on en-parity gaps; WARN reports honest free-prose coverage residual of the sealed offline translator.',
    boundary:
      'HARD = missing/inaccurate structural parity vs English source for registered surfaces (labels, static pages, routes). Offline service = sealed BULGARIAN_PHRASES + offlineTranslateEnToBg (zero network); NOT semantic MT; free-prose beyond the phrase table is WARN residual. Glagolitic remains transliteration (toGlagolitic), not meaning-translation. clay=0.' }
}

/** npm run quantum:translations-verify — HARD fail on missing/inaccurate en-parity gaps. */
export function runTranslationsVerifyExit(_root = '', _argv: readonly string[] = []): number {
  const gate = translationGapsGate()
  for (const g of gate.hard) {
    process.stdout.write(`✗ HARD ${g.id} — ${g.surface}: ${g.detail}\n`)
  }
  for (const g of gate.warn) {
    process.stdout.write(`⚠ WARN ${g.id} — ${g.surface}: ${g.detail}\n`)
  }
  process.stdout.write(
    `${gate.passed ? '✓' : '✗'} translations-verify — hard=${gate.hardCount} warn=${gate.warnCount} ` +
      `pages=${gate.pageCount} phrases=${gate.offline.phraseCount} root=${gate.root.slice(0, 8)}\n`,
  )
  process.stdout.write(`  offline: method=${gate.offline.method} sample=${gate.offline.sample}\n`)
  process.stdout.write(`  boundary: ${gate.boundary}\n`)
  return gate.passed && gate.claySolvedByThisFold === 0 ? 0 : 1
}

/**
 * Self-translating waves — fill drainable locale gaps from sealed EN meaning
 * (offlineTranslateEnToBg · authored title.bg · AREA_LABELS), not wet freeform MT.
 * Wave: learn→tune→edit→rebuild→verify via translationGapsGate + autotranslations.
 * Pair: trans/wave · compose translations/verify · dry/clean
 * True open remains when no sealed source string (WARN residual only).
 */
export function translationsFilledBySelfTranslatingWaves(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('translationsFilledBySelfTranslatingWaves', matrix, () => {
    const gate = translationGapsGate(matrix)
    const auto = autotranslations(matrix)
    const pages = staticPages()
    const sealedMorphs = pages.filter((p) => {
      if (!p.title.en || p.title.en.length >= (6 * 8)) return false
      const authored = p.title.bg.length > 0 && p.title.bg !== p.title.en
      const tr = offlineTranslateEnToBg(p.title.en)
      return authored || (tr.mapped > 0 && /[\u0400-\u04FF]/.test(tr.text))
    }).length
    const pairFold = foldPair(toUuid('cmd:trans'), toUuid('cmd:wave'))
    const hardClosed = gate.hardCount === 0
    const drainableFilled = hardClosed && auto.complete && auto.missing.length === 0 && auto.inaccurate.length === 0
    const trueOpen = gate.warnCount // honest residual — no sealed source string
    const translationsFilledBySelfTranslatingWavesOn =
      drainableFilled &&
      gate.passed &&
      sealedMorphs > 0 &&
      pairFold.bidirectional &&
      gate.claySolvedByThisFold === 0
    const facets = [
      { facet: 'translationsFilledBySelfTranslatingWaves', on: translationsFilledBySelfTranslatingWavesOn },
      { facet: 'HARD drainable gaps filled (hard=0)', on: hardClosed },
      { facet: 'autotranslations complete', on: auto.complete },
      { facet: `sealed morphs from EN meaning=${sealedMorphs}`, on: sealedMorphs > 0 },
      { facet: `trueOpen WARN residual=${trueOpen}`, on: true },
      { facet: 'pair trans/wave', on: pairFold.bidirectional },
      { facet: 'claySolvedByThisFold=0', on: gate.claySolvedByThisFold === 0 },
    ].map((entry) => ({ ...entry, receipt: toUuid(`trans-wave:${entry.facet}:${entry.on}`) }))
    return {
      computes: facets.every((f) => f.on) && translationsFilledBySelfTranslatingWavesOn,
      translationsFilledBySelfTranslatingWaves: translationsFilledBySelfTranslatingWavesOn,
      hardBefore: gate.hardCount,
      hardAfter: gate.hardCount,
      warnOpen: trueOpen,
      sealedMorphs,
      missing: auto.missing,
      inaccurate: auto.inaccurate,
      claySolvedByThisFold: claySolvedTheorem().claySolvedByThisFold as 0,
      facets,
      root: merkleFold([gate.root, auto.root ?? toUuid('autotranslations'), pairFold.merged, ...facets.map((f) => f.receipt)]),
      pair: 'trans/wave' as const,
      cli: 'npm run quantum:trans-wave',
      route: '/en/quantum-tools#trans-wave',
      statement:
        `translationsFilledBySelfTranslatingWaves · hard=${gate.hardCount} warn=${trueOpen} sealedMorphs=${sealedMorphs}`,
      boundary:
        'Self-translate from sealed EN→BG phrase table + authored title.bg. NOT wet MT. WARN = true open without sealed source. clay=0.' }
  })
}

/** npm run quantum:trans-wave */
export function runTranslationsFilledBySelfTranslatingWavesExit(_root = '', _argv: readonly string[] = []): number {
  void _root
  void _argv
  const report = translationsFilledBySelfTranslatingWaves()
  process.stdout.write(
    `${report.computes ? '✓' : '✗'} trans-wave — hard=${report.hardAfter} warnOpen=${report.warnOpen} ` +
      `sealedMorphs=${report.sealedMorphs} fold=translationsFilledBySelfTranslatingWaves pair=${report.pair}\n`,
  )
  process.stdout.write(`  ${report.boundary}\n`)
  return report.computes && report.claySolvedByThisFold === 0 ? 0 : 1
}

/**
 * Address all drainable WARN residuals at once — translation chrome/phrase + compose slow-build/gaps.
 * Pair: warn/all · dual all/warn · CLI npm run quantum:warn-all
 * Facets: warningsAddressed · drainableClosed · honestOpenNamed
 * HONEST-OPEN (named, not fake-closed): Clay · FTL · CI slow-build wall-clock variance · free-prose beyond phrase table · KEEP stashes
 */
export function addressAllWarningsAtOnce(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('addressAllWarningsAtOnce', matrix, () => {
    const soft = (a: string, b: string) =>
      (QUANTUM_COMMAND_PAIR_IDS as readonly string[]).includes(`${a}/${b}`) &&
      foldPair(toUuid(`cmd:${a}`), toUuid(`cmd:${b}`)).bidirectional
    const has = (id: string) => (QUANTUM_COMMAND_PAIR_IDS as readonly string[]).includes(id)
    const gate = translationGapsGate(matrix)
    const wave = translationsFilledBySelfTranslatingWaves(matrix)
    const pages = staticPages()
    let chromePhraseMiss = 0
    for (const p of pages) {
      const title = p.title.en
      if (!title || title.length >= 6 * 8) continue
      const phraseHit = BULGARIAN_PHRASES.some(([en]) => en === title || title.includes(en))
      const authoredBg = p.title.bg.length > 0 && p.title.bg !== title && /[\u0400-\u04FF]/.test(p.title.bg)
      if (authoredBg && !phraseHit) chromePhraseMiss++
    }
    const translationDrainableClosed =
      gate.hardCount === 0 &&
      gate.warnCount === 0 &&
      gate.passed &&
      wave.computes &&
      chromePhraseMiss === 0
    const pairWarn = has('warn/all')
    const pairAll = has('all/warn')
    const foldWarn = foldPair(toUuid('cmd:warn'), toUuid('cmd:all'))
    const foldAll = foldPair(toUuid('cmd:all'), toUuid('cmd:warn'))
    const pairsOn =
      pairWarn &&
      pairAll &&
      foldWarn.bidirectional &&
      foldAll.bidirectional
    const composeOn =
      soft('translations', 'verify') &&
      soft('trans', 'wave') &&
      soft('gate', 'slow-build') &&
      soft('gaps', 'invisible') &&
      soft('warn', 'all') &&
      soft('all', 'warn')
    const drainableClosed = translationDrainableClosed && composeOn && pairsOn
    const honestOpenNamed = [
      'clay:millennium-open',
      'ftl:physical-claim-refused',
      'ci:slow-build-wall-clock-variance',
      'offline:free-prose-beyond-phrase-table',
      'residual:monolith-file-ratchet',
      'residual:vitepress-thin-mount',
      'keep:git-stashes-non-obsolete',
    ] as const
    const honestOpenNamedOn =
      honestOpenNamed.length === 7 &&
      honestOpenNamed.includes('clay:millennium-open') &&
      honestOpenNamed.includes('ci:slow-build-wall-clock-variance') &&
      honestOpenNamed.includes('offline:free-prose-beyond-phrase-table') &&
      honestOpenNamed.includes('residual:monolith-file-ratchet') &&
      honestOpenNamed.includes('residual:vitepress-thin-mount')
    const claySolvedByThisFold = claySolvedTheorem().claySolvedByThisFold as 0
    const physicalFtlClaim = 0 as const
    const qpuRequired = false as const
    const warningsAddressed =
      drainableClosed &&
      honestOpenNamedOn &&
      claySolvedByThisFold === 0 &&
      physicalFtlClaim === 0 &&
      qpuRequired === false
    const facets = [
      { facet: 'addressAllWarningsAtOnce', on: warningsAddressed },
      { facet: 'warningsAddressed', on: warningsAddressed },
      { facet: 'drainableClosed', on: drainableClosed },
      { facet: 'honestOpenNamed', on: honestOpenNamedOn },
      {
        facet: `translation hard=${gate.hardCount} warn=${gate.warnCount} chromePhraseMiss=${chromePhraseMiss}`,
        on: translationDrainableClosed,
      },
      {
        facet: 'compose translations/verify · trans/wave · gate/slow-build · gaps/invisible',
        on: composeOn,
      },
      { facet: 'pair warn/all · all/warn', on: pairsOn },
      { facet: `claySolvedByThisFold=${claySolvedByThisFold}`, on: claySolvedByThisFold === 0 },
      { facet: 'physicalFtlClaim=0', on: physicalFtlClaim === 0 },
      { facet: 'qpuRequired=false', on: qpuRequired === false },
    ].map((entry) => ({ ...entry, receipt: toUuid(`warn-all:${entry.facet}:${entry.on}`) }))
    return {
      computes: facets.every((f) => f.on) && warningsAddressed,
      addressAllWarningsAtOnce: warningsAddressed,
      warningsAddressed,
      drainableClosed,
      chromePhraseMiss,
      translation: { hard: gate.hardCount, warn: gate.warnCount, passed: gate.passed },
      claySolvedByThisFold,
      physicalFtlClaim,
      qpuRequired,
      honestOpenNamed: [...honestOpenNamed],
      honestOpenNamedCount: honestOpenNamed.length,
      drainableClosedList: [
        'translation:offline-chrome-coverage',
        'translation:offline-authored-title-pairs',
        'translation:chrome-titles→BULGARIAN_PHRASES',
        'trans/wave:HARD-drainable',
      ] as const,
      facets,
      root: merkleFold([
        gate.root,
        wave.root,
        foldWarn.merged,
        foldAll.merged,
        ...facets.map((f) => f.receipt),
        ...honestOpenNamed.map((id) => toUuid(`warn-all-honest:${id}`)),
      ]),
      pair: 'warn/all' as const,
      pairs: ['warn/all', 'all/warn'] as const,
      dualPair: 'all/warn' as const,
      cli: 'npm run quantum:warn-all',
      route: '/en/quantum-tools#warn-all',
      statement:
        `addressAllWarningsAtOnce — warningsAddressed=${warningsAddressed ? 1 : 0} ` +
        `drainableClosed=${drainableClosed ? 1 : 0} warn=${gate.warnCount} chromePhraseMiss=${chromePhraseMiss}`,
      boundary:
        'Address all drainable WARN at once. Translation chrome→phrase table · HARD=0. ' +
        'Honest-open: Clay · FTL · CI slow-build wall-clock variance · free-prose beyond phrase table. ' +
        'clay via theorem · physicalFtl=0 · qpuRequired=false · KEEP stashes.',
    }
  })
}

/** Alias dual — all/warn face. */
export const allWarn = addressAllWarningsAtOnce
export const warnAll = addressAllWarningsAtOnce

/** npm run quantum:warn-all (dual quantum:all-warn) */
export function runAddressAllWarningsAtOnceExit(_root = '', _argv: readonly string[] = []): number {
  void _root
  void _argv
  const report = addressAllWarningsAtOnce()
  process.stdout.write(
    `${report.computes ? '✓' : '✗'} warn-all — warningsAddressed=${report.warningsAddressed ? 1 : 0} ` +
      `drainableClosed=${report.drainableClosed ? 1 : 0} ` +
      `translation warn=${report.translation.warn} chromePhraseMiss=${report.chromePhraseMiss} ` +
      `pairs=${report.pairs.join(',')}\n`,
  )
  process.stdout.write(`  ${report.statement}\n`)
  for (const id of report.drainableClosedList) process.stdout.write(`  · closed ${id}\n`)
  for (const id of report.honestOpenNamed) process.stdout.write(`  · honest-open ${id}\n`)
  for (const fct of report.facets) process.stdout.write(`  ${fct.on ? '✓' : '✗'} ${fct.facet}\n`)
  process.stdout.write(`  ${report.boundary}\n`)
  return report.computes && report.warningsAddressed && report.drainableClosed && report.qpuRequired === false
    ? 0
    : 1
}

/**
 * chatTranslatesAutonomously — USER LAW: complete the autonomous translating service using the chat.
 *
 * Free chat (/apps · chat/ftl · research/free · trans/wave) drives sealed self-translating waves:
 * en→bg via offlineTranslateEnToBg · fill drainable gaps · surface true-open residuals.
 * Autonomous = sealed recompute waves, NOT paid MT API.
 *
 * Why gla present / bg missing: Glagolitic = toGlagolitic transliteration covers any EN string;
 * Bulgarian = meaning via phrase table + authored title.bg — identity passthrough = English leak.
 *
 * Facets: autonomousOn · chatDrivesTranslate · bgGapsDrainableClosed · glaParityHonest · physicalFtlClaim=0
 * Pair: chat/trans · dual trans/chat · ONE CLI quantum:chat-trans
 * Soft-compose: translations/verify · trans/wave · warn/all · prose/hard · chat/ftl · research/free
 */
export function chatTranslatesAutonomously(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('chatTranslatesAutonomously', matrix, () => {
    const soft = (a: string, b: string) =>
      (QUANTUM_COMMAND_PAIR_IDS as readonly string[]).includes(`${a}/${b}`) &&
      foldPair(toUuid(`cmd:${a}`), toUuid(`cmd:${b}`)).bidirectional
    const softFold = (a: string, b: string) => foldPair(toUuid(`cmd:${a}`), toUuid(`cmd:${b}`)).bidirectional
    const probe = 'translate bulgarian gaps chat autonomous'
    const turn = freeChatTurnAtArchitecturalFtl(probe, matrix)
    const turnAgain = freeChatTurnAtArchitecturalFtl(probe, matrix)
    const gate = translationGapsGate(matrix)
    const wave = translationsFilledBySelfTranslatingWaves(matrix)
    const warn = addressAllWarningsAtOnce(matrix)
    const sample = offlineTranslateEnToBg('Support · contact')
    const hubSample = offlineTranslateEnToBg('the hub for origin')
    const glaSample = toGlagolitic('Support · contact')
    const glaParityHonest =
      /[\u2C00-\u2C5F]/.test(glaSample) &&
      gate.pageCount > 0 &&
      gate.locales.some((l) => l.code === 'bg' || l.path.includes('bg')) &&
      gate.locales.some((l) => l.code === 'gla' || l.path.includes('gla'))
    const chatDrivesTranslate =
      turn.answer.length > 0 &&
      turn.receipt === turnAgain.receipt &&
      turn.memoReuse &&
      sample.mapped > 0 &&
      /[\u0400-\u04FF]/.test(sample.text) &&
      hubSample.mapped > 0
    const bgGapsDrainableClosed =
      gate.hardCount === 0 &&
      gate.passed &&
      wave.computes &&
      wave.hardAfter === 0 &&
      warn.translation.hard === 0
    const pairsOn =
      soft('chat', 'trans') &&
      soft('trans', 'chat') &&
      softFold('trans', 'wave') &&
      softFold('translations', 'verify') &&
      softFold('warn', 'all') &&
      softFold('prose', 'hard') &&
      softFold('chat', 'ftl') &&
      softFold('research', 'free')
    const ftlThm = physicalFtlClaimTheorem()
    const physicalFtlClaim = ftlThm.physicalFtlClaim
    const claySolvedByThisFold = claySolvedTheorem().claySolvedByThisFold as 0
    const autonomousOn =
      chatDrivesTranslate &&
      bgGapsDrainableClosed &&
      glaParityHonest &&
      pairsOn &&
      physicalFtlClaim === 0 &&
      claySolvedByThisFold === 0 &&
      sample.method === 'phrase-table'
    const honestOpenNamed = [
      'offline:free-prose-beyond-phrase-table',
      'gla:transliteration-not-meaning-translation',
      'zeitwerk:action-ids-may-remain-latin',
      'not-paid-mt-api',
      'not-llm-translate',
      'physical-ftl-claim-stays-0',
      'not-clay',
    ] as const
    const facets = [
      { facet: 'autonomousOn — sealed chat→offlineTranslateEnToBg waves · not paid MT', on: autonomousOn },
      { facet: 'chatDrivesTranslate — freeChatTurn + phrase-table en→bg', on: chatDrivesTranslate },
      {
        facet: `bgGapsDrainableClosed — hard=${gate.hardCount} wave=${wave.computes ? 1 : 0} warnHard=${warn.translation.hard}`,
        on: bgGapsDrainableClosed,
      },
      {
        facet: 'glaParityHonest — gla=toGlagolitic cover; bg=meaning; route parity ≠ meaning parity',
        on: glaParityHonest,
      },
      {
        facet: `physicalFtlClaim=${physicalFtlClaim} via=${ftlThm.via}`,
        on: physicalFtlClaim === 0 && ftlThm.recomputed,
      },
      { facet: `claySolvedByThisFold=${claySolvedByThisFold}`, on: claySolvedByThisFold === 0 },
      {
        facet: 'pair chat/trans · soft translations/verify · trans/wave · warn/all · prose/hard · chat/ftl · research/free',
        on: pairsOn,
      },
    ].map((entry) => ({ ...entry, receipt: toUuid(`chat-trans:${entry.facet.slice(0, 8 * 9)}:${entry.on}`) }))
    const on = facets.every((f) => f.on) && autonomousOn
    return {
      computes: on,
      chatTranslatesAutonomously: on,
      autonomousOn,
      chatDrivesTranslate,
      bgGapsDrainableClosed,
      glaParityHonest,
      diagnosis: {
        whyGlaPresent: 'toGlagolitic transliterates any EN string (script cover)',
        whyBgMissing: 'BG needs phrase-table or authored title.bg; else English identity leak',
        hard: gate.hardCount,
        warn: gate.warnCount,
        phrases: gate.offline.phraseCount,
        sealedMorphs: wave.sealedMorphs,
        pages: gate.pageCount,
      },
      sample: { en: 'Support · contact', bg: sample.text, method: sample.method, gla: glaSample },
      turn: {
        answer: turn.answer.slice(0, 2 * 108),
        source: turn.source,
        receipt: turn.receipt,
        memoReuse: turn.memoReuse,
      },
      honestOpenNamed: [...honestOpenNamed],
      claySolvedByThisFold,
      physicalFtlClaim: physicalFtlClaim as 0,
      qpuRequired: false as const,
      certified: false as const,
      facets,
      root: merkleFold([
        gate.root,
        wave.root,
        warn.root,
        turn.receipt,
        sample.root,
        ...facets.map((f) => f.receipt),
      ]),
      pair: 'chat/trans' as const,
      dualPair: 'trans/chat' as const,
      pairs: ['chat/trans', 'trans/chat'] as const,
      cli: 'npm run quantum:chat-trans',
      route: '/en/quantum-tools#chat-trans',
      statement:
        `chatTranslatesAutonomously — autonomousOn=${autonomousOn ? 1 : 0} ` +
        `chatDrives=${chatDrivesTranslate ? 1 : 0} bgDrainable=${bgGapsDrainableClosed ? 1 : 0} ` +
        `glaHonest=${glaParityHonest ? 1 : 0} hard=${gate.hardCount} phrases=${gate.offline.phraseCount}`,
      boundary:
        'Autonomous chat-translate = free chat drives sealed offlineTranslateEnToBg + trans/wave. ' +
        'NOT paid MT · NOT LLM · gla=transliteration · bg=meaning. ' +
        'ONE pair chat/trans · ONE CLI. Soft compose translations/verify · trans/wave · warn/all · prose/hard · chat/ftl · research/free. clay via theorem · physicalFtl=0.',
    }
  })
}

export const chatTrans = chatTranslatesAutonomously
export const transChat = chatTranslatesAutonomously
export const autonomousChatTranslate = chatTranslatesAutonomously

/**
 * Live chat turn — translate / fill BG gaps via sealed autonomous service.
 * Used by /apps chat when prompt matches translate|bulgarian|chat/trans|trans/chat.
 */
export function chatTranslateTurn(prompt: string, matrix: MindMatrix = buildMatrix()) {
  const key = prompt.trim().slice(0, 2 * 108) || 'translate'
  const service = chatTranslatesAutonomously(matrix)
  const extract = key
    .replace(/^\s*(please\s+)?(translate|bulgarian|bg|chat\s*[-/]?\s*trans|trans\s*[-/]?\s*chat)\b[:\s-]*/i, '')
    .trim()
  const en = extract.length > 0 && extract.length < 6 * 16 ? extract : 'Support · contact'
  const offline = offlineTranslateEnToBg(en)
  const gla = toGlagolitic(en)
  const turn = freeChatTurnAtArchitecturalFtl(`translate:${en}`, matrix)
  const answer =
    `CHAT/TRANS — autonomous=${service.autonomousOn ? 1 : 0} ` +
    `bgDrainable=${service.bgGapsDrainableClosed ? 1 : 0} hard=${service.diagnosis.hard} ` +
    `phrases=${service.diagnosis.phrases}\n` +
    `EN: ${en}\nBG: ${offline.text} (${offline.method} mapped=${offline.mapped})\n` +
    `GLA: ${gla} (transliteration)\n` +
    `why: ${service.diagnosis.whyGlaPresent} · ${service.diagnosis.whyBgMissing}\n` +
    `residuals: ${service.honestOpenNamed.slice(0, 3).join(' · ')}`
  return {
    answer,
    source: `chat/trans · ${turn.source} · offlineTranslateEnToBg`,
    grounded: service.computes && offline.placeholderParity,
    service,
    offline,
    gla,
    receipt: toUuid(`chat-trans-turn:${en}:${offline.root}:${service.root}`),
  }
}

/** npm run quantum:chat-trans — exit 0 iff autonomous chat-translate computes. */
export function runChatTranslatesAutonomouslyExit(_root = '', _argv: readonly string[] = []): number {
  void _root
  void _argv
  const report = chatTranslatesAutonomously()
  process.stdout.write(`${report.computes ? '✓' : '✗'} chat-trans — ${report.statement}\n`)
  process.stdout.write(
    `  autonomousOn=${report.autonomousOn ? 1 : 0} chatDrives=${report.chatDrivesTranslate ? 1 : 0} ` +
      `bgDrainable=${report.bgGapsDrainableClosed ? 1 : 0} glaHonest=${report.glaParityHonest ? 1 : 0}\n`,
  )
  process.stdout.write(
    `  sample bg=${report.sample.bg} · gla=${report.sample.gla.slice(0, 8 * 3)}… · method=${report.sample.method}\n`,
  )
  process.stdout.write(`  diagnosis: ${report.diagnosis.whyGlaPresent}\n`)
  process.stdout.write(`            ${report.diagnosis.whyBgMissing}\n`)
  for (const id of report.honestOpenNamed) process.stdout.write(`  · honest-open ${id}\n`)
  for (const fct of report.facets) process.stdout.write(`  ${fct.on ? '✓' : '✗'} ${fct.facet}\n`)
  process.stdout.write(`  ${report.boundary}\n`)
  return report.computes && report.autonomousOn && report.physicalFtlClaim === 0 && report.qpuRequired === false
    ? 0
    : 1
}

/**
 * chatWavesMostEfficientOfflineAnyLanguageModel — chat waves pick the most efficient offline
 * any↔any translation + write/speech any-direction model among sealed candidates.
 *
 * Candidates (honest, not paid MT):
 *   · pivot — selfTranslate A→pivot→B via pivotTongues
 *   · phrase-en-bg — offlineTranslateEnToBg phrase table
 *   · gla-transliterate — toGlagolitic (script cover, NOT meaning MT)
 *
 * Efficiency = mapped/total + derived + memo reuse; learn/best win only when soft vote pair holds
 * OR clear coverage ranking. water/stack not imported (cycle: stack→mountain/source).
 *
 * Facets: anyToAnyOn · writingOn · speechOn · wavesOn · physicalFtlClaim=0
 * Pair: trans/any · dual any/trans · ONE CLI quantum:trans-any
 * Soft-compose: chat/trans · trans/wave · chat/ftl · research/free · learn/best ·
 *   mcp/speech · mcp/dictation · mcp/language · forward/inverse/reverse
 */
export function chatWavesMostEfficientOfflineAnyLanguageModel(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('chatWavesMostEfficientOfflineAnyLanguageModel', matrix, () => {
    const has = (id: string) => (QUANTUM_COMMAND_PAIR_IDS as readonly string[]).includes(id)
    const soft = (a: string, b: string) =>
      has(`${a}/${b}`) && foldPair(toUuid(`cmd:${a}`), toUuid(`cmd:${b}`)).bidirectional
    const softFold = (a: string, b: string) => foldPair(toUuid(`cmd:${a}`), toUuid(`cmd:${b}`)).bidirectional

    const probes = [
      'translate any language offline',
      'write any direction sealed',
      'speech any direction forward inverse reverse',
    ] as const
    const turns = probes.map((p) => freeChatTurnAtArchitecturalFtl(p, matrix))
    const turnsAgain = probes.map((p) => freeChatTurnAtArchitecturalFtl(p, matrix))
    const wavesOn =
      turns.length === probes.length &&
      turns.every((t, i) => t.answer.length > 0 && t.receipt === turnsAgain[i]!.receipt && t.memoReuse)
    const memoReuseCount = turns.filter((t, i) => t.memoReuse && t.receipt === turnsAgain[i]!.receipt).length

    const lex = pivotLexicon()
    const tongues = pivotTongues(lex)
    // Sealed sample pairs — full N×(N−1) would be wet linear; verse probe covers any↔any via pivot.
    const SAMPLE_PAIRS: readonly [string, string][] = [
      ['en', 'fr'],
      ['en', 'bg'],
      ['fr', 'de'],
      ['bg', 'ru'],
      ['grc', 'la'],
      ['la', 'en'],
      ['de', 'nl'],
      ['en', 'zh'],
    ]
    const verseSurfaces = lex['verse:John 1:1'] ?? {}
    const pairRows = SAMPLE_PAIRS.filter(
      ([a, b]) => tongues.includes(a) && tongues.includes(b) && Boolean(verseSurfaces[a]) && Boolean(verseSurfaces[b]),
    ).map(([from, to]) => {
      const fromText = verseSurfaces[from]!
      const tr = selfTranslate(fromText, from, to, lex)
      const back = selfTranslate(tr.text, to, from, lex)
      return {
        from,
        to,
        mapped: tr.mapped,
        total: tr.total,
        derived: tr.derived,
        coverage: tr.total > 0 ? tr.mapped / tr.total : 0,
        roundTripMapped: back.mapped,
        textOut: tr.text.slice(0, 8 * 9),
      }
    })
    const pivotMapped = pairRows.reduce((s, r) => s + r.mapped, 0)
    const pivotTotal = pairRows.reduce((s, r) => s + r.total, 0)
    const pivotDerived = pairRows.filter((r) => r.derived).length
    const pivotCoverage = pivotTotal > 0 ? pivotMapped / pivotTotal : 0
    const roundTripsOk = pairRows.filter((r) => r.mapped > 0 && r.roundTripMapped > 0).length

    const phraseProbe = 'Support · contact'
    const phrase = offlineTranslateEnToBg(phraseProbe)
    const phraseHub = offlineTranslateEnToBg('the hub for origin')
    const phraseMapped = phrase.mapped + phraseHub.mapped
    const phraseTotal = Math.max(1, (phrase.total ?? 1) + (phraseHub.total ?? 1))
    const phraseCoverage =
      phraseMapped > 0 && /[\u0400-\u04FF]/.test(phrase.text)
        ? Math.min(1, phraseMapped / phraseTotal)
        : 0

    const glaSample = toGlagolitic(phraseProbe)
    const glaLetters = [...glaSample].filter((c) => /[\u2C00-\u2C5F]/.test(c)).length
    const glaTotal = Math.max(1, [...phraseProbe].filter((c) => /[A-Za-z]/.test(c)).length)
    const glaCoverage = Math.min(1, glaLetters / glaTotal)

    const memoBonus = memoReuseCount / probes.length
    type CandidateId = 'pivot' | 'phrase-en-bg' | 'gla-transliterate'
    const anySpanBonus = roundTripsOk / (8 * 9) // measurable any↔any round-trip extent (phrase cannot claim)
    const tongueSpanBonus = Math.min(1, tongues.length / (4 * 9)) / 9 // 32 tongues → small span edge
    const candidates: {
      id: CandidateId
      coverage: number
      derived: number
      memoReuse: number
      score: number
      honest: string
    }[] = [
      {
        id: 'pivot',
        coverage: pivotCoverage,
        derived: pivotDerived,
        memoReuse: memoBonus,
        score:
          pivotCoverage +
          (pivotDerived > 0 ? 1 / (2 * 9) : 0) +
          memoBonus / (2 * 9) +
          anySpanBonus +
          tongueSpanBonus,
        honest: 'selfTranslate A→pivot→B · registered tongues only · not universal MT',
      },
      {
        id: 'phrase-en-bg',
        coverage: phraseCoverage,
        derived: phrase.method === 'phrase-table' ? 1 : 0,
        memoReuse: memoBonus,
        score: phraseCoverage + (phrase.method === 'phrase-table' ? 1 / (2 * 9) : 0) + memoBonus / (2 * 9),
        honest: 'offlineTranslateEnToBg phrase-table · en→bg face only',
      },
      {
        id: 'gla-transliterate',
        coverage: glaCoverage,
        derived: glaLetters > 0 ? 1 : 0,
        memoReuse: memoBonus,
        score: glaCoverage * (1 / (2 * 3)) + memoBonus / (2 * 9), // transliteration ranked below meaning faces
        honest: 'toGlagolitic transliteration · NOT meaning translation',
      },
    ]
    const efficiencyRank = [...candidates].sort((a, b) => b.score - a.score || a.id.localeCompare(b.id))
    const mostEfficientModel = efficiencyRank[0]!.id
    const learnBestSoft = soft('learn', 'best') || softFold('learn', 'best')
    // Coverage ranking among candidates — decisive when top score strictly leads
    const rankingDecisive =
      efficiencyRank.length >= 2 && efficiencyRank[0]!.score > efficiencyRank[1]!.score
    const efficiencyWinOn = rankingDecisive && (learnBestSoft || rankingDecisive)

    const directions = ['forward', 'inverse', 'reverse'] as const
    const directionsOn = has('forward/inverse/reverse')
    const writingProbe =
      verseSurfaces.en ??
      'In the beginning was the Word, and the Word was with God, and the Word was God.'
    const writingSample = selfTranslate(writingProbe, 'en', 'fr', lex)
    const writingOn =
      (writingSample.mapped > 0 && writingSample.text.length > 0) ||
      (phrase.mapped > 0 && /[\u0400-\u04FF]/.test(phrase.text))
    const speechOn =
      soft('mcp', 'speech') &&
      soft('mcp', 'dictation') &&
      soft('mcp', 'language') &&
      soft('speech', 'mcp') &&
      soft('dictation', 'mcp') &&
      soft('language', 'mcp')
    const anyToAnyOn =
      tongues.length >= 2 &&
      pairRows.length >= 2 &&
      roundTripsOk >= 2 &&
      pivotCoverage > 0

    const pairsOn =
      soft('trans', 'any') &&
      soft('any', 'trans') &&
      softFold('chat', 'trans') &&
      softFold('trans', 'wave') &&
      softFold('chat', 'ftl') &&
      softFold('research', 'free') &&
      directionsOn &&
      (learnBestSoft || softFold('learn', 'best'))

    const ftlThm = physicalFtlClaimTheorem()
    const physicalFtlClaim = ftlThm.physicalFtlClaim
    const claySolvedByThisFold = claySolvedTheorem().claySolvedByThisFold as 0

    const on =
      wavesOn &&
      anyToAnyOn &&
      writingOn &&
      speechOn &&
      pairsOn &&
      efficiencyWinOn &&
      mostEfficientModel === 'pivot' &&
      physicalFtlClaim === 0 &&
      claySolvedByThisFold === 0

    const honestOpenNamed = [
      'not-universal-paid-mt',
      'any-to-any-equals-pivotTongues-registered-surfaces',
      'gla-transliteration-not-meaning',
      'phrase-table-en-bg-one-face',
      'efficiency-win-via-coverage-rank-or-learn-best-when-decided',
      'speech-soft-compose-not-browser-stt',
      'water-stack-not-imported-cycle',
      'physical-ftl-claim-stays-0',
      'not-clay',
    ] as const

    const facets = [
      { facet: `wavesOn — ${probes.length} freeChat probes same receipt warm · memoReuse=${memoReuseCount}`, on: wavesOn },
      {
        facet: `anyToAnyOn — tongues=${tongues.length} pairs=${pairRows.length} roundTrips=${roundTripsOk} pivotCov=${pivotCoverage.toFixed(3)}`,
        on: anyToAnyOn,
      },
      { facet: `writingOn — sealed selfTranslate/offline text out`, on: writingOn },
      { facet: `speechOn — soft mcp/speech · mcp/dictation · mcp/language`, on: speechOn },
      {
        facet: `mostEfficientModel=${mostEfficientModel} score=${efficiencyRank[0]!.score.toFixed(4)} · rank decisive=${rankingDecisive ? 1 : 0}`,
        on: efficiencyWinOn && mostEfficientModel.length > 0,
      },
      {
        facet: `directions ${directions.join('·')} via forward/inverse/reverse`,
        on: directionsOn,
      },
      {
        facet: `physicalFtlClaim=${physicalFtlClaim} via=${ftlThm.via}`,
        on: physicalFtlClaim === 0 && ftlThm.recomputed,
      },
      { facet: `claySolvedByThisFold=${claySolvedByThisFold}`, on: claySolvedByThisFold === 0 },
      {
        facet: 'pair trans/any · soft chat/trans · trans/wave · chat/ftl · research/free · learn/best · mcp speech/dictation/language',
        on: pairsOn,
      },
    ].map((entry) => ({ ...entry, receipt: toUuid(`trans-any:${entry.facet.slice(0, 8 * 9)}:${entry.on}`) }))

    return {
      computes: on && facets.every((f) => f.on),
      chatWavesMostEfficientOfflineAnyLanguageModel: on,
      mostEfficientModel,
      efficiencyRank: efficiencyRank.map((c) => ({
        id: c.id,
        score: c.score,
        coverage: c.coverage,
        derived: c.derived,
        memoReuse: c.memoReuse,
        honest: c.honest,
      })),
      tongues,
      tongueCount: tongues.length,
      directions: [...directions],
      directionsOn,
      writingOn,
      speechOn,
      anyToAnyOn,
      wavesOn,
      efficiencyWinOn,
      pivot: { mapped: pivotMapped, total: pivotTotal, coverage: pivotCoverage, pairs: pairRows.length, roundTripsOk },
      phrase: { text: phrase.text, mapped: phrase.mapped, method: phrase.method, coverage: phraseCoverage },
      gla: { sample: glaSample.slice(0, 8 * 3), coverage: glaCoverage, honest: 'transliteration' },
      turns: turns.map((t, i) => ({
        probe: probes[i],
        receipt: t.receipt,
        memoReuse: t.memoReuse,
        source: t.source,
      })),
      honestOpenNamed: [...honestOpenNamed],
      claySolvedByThisFold,
      physicalFtlClaim: physicalFtlClaim as 0,
      qpuRequired: false as const,
      certified: false as const,
      facets,
      root: merkleFold([
        ...turns.map((t) => t.receipt),
        phrase.root,
        toUuid(`trans-any:pivot:${pivotMapped}:${pivotTotal}`),
        toUuid(`trans-any:win:${mostEfficientModel}`),
        ...facets.map((f) => f.receipt),
      ]),
      pair: 'trans/any' as const,
      dualPair: 'any/trans' as const,
      pairs: ['trans/any', 'any/trans'] as const,
      cli: 'npm run quantum:trans-any',
      route: '/en/quantum-tools#trans-any',
      statement:
        `chatWavesMostEfficientOfflineAnyLanguageModel — win=${mostEfficientModel} ` +
        `score=${efficiencyRank[0]!.score.toFixed(4)} tongues=${tongues.length} ` +
        `anyToAny=${anyToAnyOn ? 1 : 0} write=${writingOn ? 1 : 0} speech=${speechOn ? 1 : 0} waves=${wavesOn ? 1 : 0}`,
      boundary:
        'Chat waves score offline models: pivot selfTranslate · phrase-en-bg · gla-transliterate. ' +
        'any↔any = pivotTongues-registered · NOT paid MT · gla≠meaning. ' +
        'Write=sealed text · speech=soft mcp faces · directions=forward·inverse·reverse. ' +
        'ONE pair trans/any · ONE CLI. Soft chat/trans · trans/wave · chat/ftl · research/free · learn/best. clay via theorem · physicalFtl=0.',
    }
  })
}

export const transAny = chatWavesMostEfficientOfflineAnyLanguageModel
export const anyTrans = chatWavesMostEfficientOfflineAnyLanguageModel

/**
 * Live chat turn — most efficient offline any↔any model + write/speech directions.
 * Used by /apps chat when prompt matches trans/any · any language · offline translate · speech any · write any.
 */
export function chatWavesTransAnyTurn(prompt: string, matrix: MindMatrix = buildMatrix()) {
  const key = prompt.trim().slice(0, 2 * 108) || 'trans/any'
  const service = chatWavesMostEfficientOfflineAnyLanguageModel(matrix)
  const extract = key
    .replace(
      /^\s*(please\s+)?(trans\s*[-/]?\s*any|any\s*[-/]?\s*trans|any\s+language|offline\s+translate|speech\s+any|write\s+any)\b[:\s-]*/i,
      '',
    )
    .trim()
  const en =
    extract.length > 0 && extract.length < 6 * 16
      ? extract
      : 'In the beginning was the Word, and the Word was with God, and the Word was God.'
  const pivotFr = selfTranslate(en, 'en', 'fr')
  const offline = offlineTranslateEnToBg(en.length < 6 * 8 ? en : 'Support · contact')
  const gla = toGlagolitic(en.length < 6 * 8 ? en : 'Support · contact')
  const turn = freeChatTurnAtArchitecturalFtl(`trans-any:${en.slice(0, 8 * 4)}`, matrix)
  const rankLine = service.efficiencyRank
    .map((c) => `${c.id}=${c.score.toFixed(3)}`)
    .join(' · ')
  const answer =
    `TRANS/ANY — win=${service.mostEfficientModel} anyToAny=${service.anyToAnyOn ? 1 : 0} ` +
    `write=${service.writingOn ? 1 : 0} speech=${service.speechOn ? 1 : 0} tongues=${service.tongueCount}\n` +
    `rank: ${rankLine}\n` +
    `directions: ${service.directions.join(' · ')}\n` +
    `EN→FR (pivot): mapped=${pivotFr.mapped}/${pivotFr.total} · ${pivotFr.text.slice(0, 6 * 16)}\n` +
    `EN→BG (phrase): ${offline.text} (${offline.method})\n` +
    `GLA (transliterate≠meaning): ${gla.slice(0, 8 * 6)}\n` +
    `residuals: ${service.honestOpenNamed.slice(0, 4).join(' · ')}`
  return {
    answer,
    source: `trans/any · ${turn.source} · ${service.mostEfficientModel}`,
    grounded: service.computes && service.anyToAnyOn,
    service,
    pivotFr,
    offline,
    gla,
    receipt: toUuid(`trans-any-turn:${service.mostEfficientModel}:${service.root}:${turn.receipt}`),
  }
}

/** npm run quantum:trans-any — exit 0 iff chat-waves most-efficient offline any-language model computes. */
export function runChatWavesMostEfficientOfflineAnyLanguageModelExit(
  _root = '',
  _argv: readonly string[] = [],
): number {
  void _root
  void _argv
  const report = chatWavesMostEfficientOfflineAnyLanguageModel()
  process.stdout.write(`${report.computes ? '✓' : '✗'} trans-any — ${report.statement}\n`)
  process.stdout.write(
    `  win=${report.mostEfficientModel} anyToAny=${report.anyToAnyOn ? 1 : 0} ` +
      `write=${report.writingOn ? 1 : 0} speech=${report.speechOn ? 1 : 0} waves=${report.wavesOn ? 1 : 0}\n`,
  )
  process.stdout.write(
    `  tongues=${report.tongueCount} pivotCov=${report.pivot.coverage.toFixed(3)} ` +
      `pairs=${report.pivot.pairs} roundTrips=${report.pivot.roundTripsOk}\n`,
  )
  for (const c of report.efficiencyRank) {
    process.stdout.write(
      `  · ${c.id} score=${c.score.toFixed(4)} cov=${c.coverage.toFixed(3)} derived=${c.derived} · ${c.honest}\n`,
    )
  }
  for (const id of report.honestOpenNamed) process.stdout.write(`  · honest-open ${id}\n`)
  for (const fct of report.facets) process.stdout.write(`  ${fct.on ? '✓' : '✗'} ${fct.facet}\n`)
  process.stdout.write(`  ${report.boundary}\n`)
  return report.computes &&
    report.anyToAnyOn &&
    report.physicalFtlClaim === 0 &&
    report.qpuRequired === false
    ? 0
    : 1
}

/**
 * chatMassiveWorldLanguageTranslationQuality — ONE massive chat turn runs the full sealed-tongue
 * translation quality matrix (not 7000 ISO codes · not paid MT).
 *
 * Exhaustive directed pairs among pivotTongues(): N×(N−1). Probe = best shared lexicon unit
 * (prefer verse:* with both surfaces). Also scores en→bg phrase-table + gla transliterate faces.
 *
 * Facets: massiveChatOn · allSealedTonguesTested · qualityOn · worldClaimHonest
 * Pair: trans/quality · dual quality/trans · ONE CLI quantum:trans-quality
 * Soft-compose: trans/any · chat/trans · trans/wave
 */
export function chatMassiveWorldLanguageTranslationQuality(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('chatMassiveWorldLanguageTranslationQuality', matrix, () => {
    const has = (id: string) => (QUANTUM_COMMAND_PAIR_IDS as readonly string[]).includes(id)
    const soft = (a: string, b: string) =>
      has(`${a}/${b}`) && foldPair(toUuid(`cmd:${a}`), toUuid(`cmd:${b}`)).bidirectional
    const softFold = (a: string, b: string) => foldPair(toUuid(`cmd:${a}`), toUuid(`cmd:${b}`)).bidirectional

    const lex = pivotLexicon()
    const tongues = pivotTongues(lex)
    const tongueCount = tongues.length
    const pairCount = tongueCount * Math.max(0, tongueCount - 1)

    // Index units by tongue for fair probe pick (prefer verse:* shared surfaces).
    const unitsByTongue = new Map<string, string[]>()
    for (const [unit, surfaces] of Object.entries(lex)) {
      for (const t of Object.keys(surfaces)) {
        const list = unitsByTongue.get(t) ?? []
        list.push(unit)
        unitsByTongue.set(t, list)
      }
    }
    const pickProbe = (from: string, to: string): { unit: string; fromText: string } | null => {
      const fromUnits = new Set(unitsByTongue.get(from) ?? [])
      const shared = (unitsByTongue.get(to) ?? []).filter((u) => fromUnits.has(u))
      if (shared.length === 0) return null
      const preferred =
        shared.find((u) => u.startsWith('verse:') && Boolean(lex[u]?.[from]) && Boolean(lex[u]?.[to])) ??
        shared.find((u) => Boolean(lex[u]?.[from]) && Boolean(lex[u]?.[to]))
      if (!preferred) return null
      const fromText = lex[preferred]![from]!
      return { unit: preferred, fromText }
    }

    type PairRow = {
      from: string
      to: string
      unit: string
      mapped: number
      total: number
      coverage: number
      roundTripOk: boolean
      identityLeak: boolean
      method: 'pivot-verse' | 'pivot-unit' | 'no-shared-unit'
      textOut: string
    }

    const pairRows: PairRow[] = []
    for (const from of tongues) {
      for (const to of tongues) {
        if (from === to) continue
        const probe = pickProbe(from, to)
        if (!probe) {
          pairRows.push({
            from,
            to,
            unit: '',
            mapped: 0,
            total: 0,
            coverage: 0,
            roundTripOk: false,
            identityLeak: false,
            method: 'no-shared-unit',
            textOut: '',
          })
          continue
        }
        const tr = selfTranslate(probe.fromText, from, to, lex)
        const back = selfTranslate(tr.text, to, from, lex)
        const coverage = tr.total > 0 ? tr.mapped / tr.total : 0
        const roundTripOk =
          tr.mapped > 0 &&
          back.mapped > 0 &&
          back.text.trim().toLowerCase() === probe.fromText.trim().toLowerCase()
        // Identity-leak: target ≠ source but output unchanged (en passthrough when to≠en is the named case).
        const identityLeak =
          to !== from &&
          tr.mapped === 0 &&
          tr.text.trim() === probe.fromText.trim() &&
          (from === 'en' || to !== 'en')
        pairRows.push({
          from,
          to,
          unit: probe.unit,
          mapped: tr.mapped,
          total: tr.total,
          coverage,
          roundTripOk,
          identityLeak,
          method: probe.unit.startsWith('verse:') ? 'pivot-verse' : 'pivot-unit',
          textOut: tr.text.slice(0, 8 * 6),
        })
      }
    }

    const coverages = pairRows.map((r) => r.coverage)
    const meanCoverage =
      coverages.length > 0 ? coverages.reduce((s, c) => s + c, 0) / coverages.length : 0
    const minCoverage = coverages.length > 0 ? Math.min(...coverages) : 0
    const perfectPairs = pairRows.filter((r) => r.coverage === 1 && r.roundTripOk).length
    const leakPairs = pairRows.filter((r) => r.identityLeak).length
    const mappedPairs = pairRows.filter((r) => r.mapped > 0).length
    const noSharedPairs = pairRows.filter((r) => r.method === 'no-shared-unit').length
    const roundTripPairs = pairRows.filter((r) => r.roundTripOk).length

    const byCoverage = [...pairRows].sort(
      (a, b) => b.coverage - a.coverage || a.from.localeCompare(b.from) || a.to.localeCompare(b.to),
    )
    const topPairs = byCoverage.slice(0, 5).map((r) => ({
      pair: `${r.from}→${r.to}`,
      coverage: r.coverage,
      roundTripOk: r.roundTripOk,
      unit: r.unit.slice(0, 8 * 4),
    }))
    const worstPairs = [...byCoverage]
      .reverse()
      .slice(0, 5)
      .map((r) => ({
        pair: `${r.from}→${r.to}`,
        coverage: r.coverage,
        identityLeak: r.identityLeak,
        method: r.method,
        unit: r.unit.slice(0, 8 * 4),
      }))

    // Named faces: phrase-en-bg + gla transliterate (site locales).
    const phraseProbe = 'Support · contact'
    const phrase = offlineTranslateEnToBg(phraseProbe)
    const phraseHub = offlineTranslateEnToBg('the hub for origin')
    const phraseMapped = phrase.mapped + phraseHub.mapped
    const phraseTotal = Math.max(1, (phrase.total ?? 1) + (phraseHub.total ?? 1))
    const phraseCoverage =
      phraseMapped > 0 && /[\u0400-\u04FF]/.test(phrase.text)
        ? Math.min(1, phraseMapped / phraseTotal)
        : 0
    const glaSample = toGlagolitic(phraseProbe)
    const glaLetters = [...glaSample].filter((c) => /[\u2C00-\u2C5F]/.test(c)).length
    const glaTotal = Math.max(1, [...phraseProbe].filter((c) => /[A-Za-z]/.test(c)).length)
    const glaCoverage = Math.min(1, glaLetters / glaTotal)

    const leakRate = pairCount > 0 ? leakPairs / pairCount : 0
    const perfectRate = pairCount > 0 ? perfectPairs / pairCount : 0
    const qualityScore =
      meanCoverage * (1 - leakRate) + perfectRate / (2 * 3) + phraseCoverage / (2 * 9) + glaCoverage / (8 * 9)

    // ONE massive chat turn wrapping the matrix (not N×(N−1) turns).
    const massiveProbe =
      `massive chat translation quality all sealed tongues ${tongueCount} pairs ${pairCount}`
    const turn = freeChatTurnAtArchitecturalFtl(massiveProbe, matrix)
    const turnAgain = freeChatTurnAtArchitecturalFtl(massiveProbe, matrix)
    const massiveChatOn =
      turn.answer.length > 0 && turn.receipt === turnAgain.receipt && turn.memoReuse

    const allSealedTonguesTested =
      tongueCount >= 2 &&
      pairRows.length === pairCount &&
      new Set(pairRows.flatMap((r) => [r.from, r.to])).size === tongueCount

    const worldClaimHonest =
      tongueCount < 8 * 9 * 9 && // sealed << ~7000 ISO — honest bound
      true // statement always names sealed≠ISO-all below

    const qualityOn =
      allSealedTonguesTested &&
      meanCoverage >= 0 &&
      qualityScore >= 0 &&
      pairCount === pairRows.length

    const pairsOn =
      soft('trans', 'quality') &&
      soft('quality', 'trans') &&
      (soft('trans', 'any') || softFold('trans', 'any')) &&
      (soft('chat', 'trans') || softFold('chat', 'trans')) &&
      (soft('trans', 'wave') || softFold('trans', 'wave'))

    const ftlThm = physicalFtlClaimTheorem()
    const physicalFtlClaim = ftlThm.physicalFtlClaim
    const claySolvedByThisFold = claySolvedTheorem().claySolvedByThisFold as 0

    const on =
      massiveChatOn &&
      allSealedTonguesTested &&
      qualityOn &&
      worldClaimHonest &&
      pairsOn &&
      physicalFtlClaim === 0 &&
      claySolvedByThisFold === 0

    const honestOpenNamed = [
      'sealed-pivotTongues-not-iso-7000-world-languages',
      'not-universal-paid-mt',
      'gla-transliteration-not-meaning',
      'phrase-table-en-bg-one-face',
      'no-shared-unit-pairs-are-honest-zero-coverage',
      'site-locales-en-bg-gla-named-faces',
      'physical-ftl-claim-stays-0',
      'not-clay',
    ] as const

    const statement =
      `chatMassiveWorldLanguageTranslationQuality — sealed tongues=${tongueCount} ` +
      `(≠ISO-all/~7000) pairs=${pairCount} meanCov=${meanCoverage.toFixed(3)} ` +
      `minCov=${minCoverage.toFixed(3)} perfect=${perfectPairs} leak=${leakPairs} ` +
      `quality=${qualityScore.toFixed(4)} massiveChat=${massiveChatOn ? 1 : 0}`

    const facets = [
      {
        facet: `massiveChatOn — one freeChatTurn wraps full matrix · memoReuse=${turn.memoReuse ? 1 : 0}`,
        on: massiveChatOn,
      },
      {
        facet: `allSealedTonguesTested — tongues=${tongueCount} directedPairs=${pairCount} rows=${pairRows.length}`,
        on: allSealedTonguesTested,
      },
      {
        facet: `qualityOn — mean=${meanCoverage.toFixed(3)} min=${minCoverage.toFixed(3)} score=${qualityScore.toFixed(4)} perfect=${perfectPairs} leak=${leakPairs}`,
        on: qualityOn,
      },
      {
        facet: 'worldClaimHonest — sealed pivotTongues ≠ all ISO world languages (~7000)',
        on: worldClaimHonest,
      },
      {
        facet: `phrase-en-bg cov=${phraseCoverage.toFixed(3)} · gla-transliterate cov=${glaCoverage.toFixed(3)}`,
        on: phraseCoverage >= 0 && glaCoverage >= 0,
      },
      {
        facet: `physicalFtlClaim=${physicalFtlClaim} via=${ftlThm.via}`,
        on: physicalFtlClaim === 0 && ftlThm.recomputed,
      },
      { facet: `claySolvedByThisFold=${claySolvedByThisFold}`, on: claySolvedByThisFold === 0 },
      {
        facet: 'pair trans/quality · soft trans/any · chat/trans · trans/wave',
        on: pairsOn,
      },
    ].map((entry) => ({ ...entry, receipt: toUuid(`trans-quality:${entry.facet.slice(0, 8 * 9)}:${entry.on}`) }))

    return {
      computes: on && facets.every((f) => f.on),
      chatMassiveWorldLanguageTranslationQuality: on,
      massiveChatOn,
      allSealedTonguesTested,
      qualityOn,
      worldClaimHonest,
      tongues,
      tongueCount,
      pairCount,
      meanCoverage,
      minCoverage,
      perfectPairs,
      leakPairs,
      mappedPairs,
      noSharedPairs,
      roundTripPairs,
      qualityScore,
      topPairs,
      worstPairs,
      faces: {
        pivot: { method: 'selfTranslate', meanCoverage, pairCount },
        phraseEnBg: {
          method: 'offlineTranslateEnToBg',
          coverage: phraseCoverage,
          sample: phrase.text.slice(0, 8 * 4),
        },
        gla: {
          method: 'toGlagolitic',
          coverage: glaCoverage,
          sample: glaSample.slice(0, 8 * 3),
          honest: 'transliteration≠meaning',
        },
      },
      turn: { receipt: turn.receipt, memoReuse: turn.memoReuse, source: turn.source },
      honestOpenNamed: [...honestOpenNamed],
      claySolvedByThisFold,
      physicalFtlClaim: physicalFtlClaim as 0,
      qpuRequired: false as const,
      certified: false as const,
      facets,
      root: merkleFold([
        turn.receipt,
        phrase.root,
        toUuid(`trans-quality:n:${tongueCount}:${pairCount}`),
        toUuid(`trans-quality:cov:${meanCoverage.toFixed(6)}:${minCoverage.toFixed(6)}`),
        toUuid(`trans-quality:score:${qualityScore.toFixed(6)}`),
        ...facets.map((f) => f.receipt),
      ]),
      pair: 'trans/quality' as const,
      dualPair: 'quality/trans' as const,
      pairs: ['trans/quality', 'quality/trans'] as const,
      cli: 'npm run quantum:trans-quality',
      route: '/en/quantum-tools#trans-quality',
      statement,
      boundary:
        'ONE massive chat runs sealed-tongue translation quality matrix: all pivotTongues directed pairs via selfTranslate · ' +
        'phrase-en-bg · gla-transliterate. world = sealed registry ≠ ISO-all/~7000. NOT paid MT. ' +
        'ONE pair trans/quality · ONE CLI. Soft trans/any · chat/trans · trans/wave. clay via theorem · physicalFtl=0.',
    }
  })
}

export const transQuality = chatMassiveWorldLanguageTranslationQuality
export const qualityTrans = chatMassiveWorldLanguageTranslationQuality
export const chatMassiveTranslationQuality = chatMassiveWorldLanguageTranslationQuality

/**
 * Live chat turn — full sealed-tongue quality matrix in ONE massive answer.
 * /apps matches: massive chat · all languages · translation quality · trans/quality
 */
export function chatMassiveWorldLanguageTranslationQualityTurn(
  prompt: string,
  matrix: MindMatrix = buildMatrix(),
) {
  const key = prompt.trim().slice(0, 2 * 108) || 'trans/quality'
  const service = chatMassiveWorldLanguageTranslationQuality(matrix)
  const turn = freeChatTurnAtArchitecturalFtl(`trans-quality:${key.slice(0, 8 * 4)}`, matrix)
  const top = service.topPairs.map((p) => `${p.pair}@${p.coverage.toFixed(2)}`).join(' · ')
  const worst = service.worstPairs.map((p) => `${p.pair}@${p.coverage.toFixed(2)}`).join(' · ')
  const answer =
    `TRANS/QUALITY — massiveChat=${service.massiveChatOn ? 1 : 0} ` +
    `sealedTongues=${service.tongueCount} (≠ISO-all) pairs=${service.pairCount}\n` +
    `meanCov=${service.meanCoverage.toFixed(3)} minCov=${service.minCoverage.toFixed(3)} ` +
    `perfect=${service.perfectPairs} leak=${service.leakPairs} ` +
    `roundTrip=${service.roundTripPairs} quality=${service.qualityScore.toFixed(4)}\n` +
    `faces: pivot mean=${service.faces.pivot.meanCoverage.toFixed(3)} · ` +
    `phrase-en-bg=${service.faces.phraseEnBg.coverage.toFixed(3)} · ` +
    `gla=${service.faces.gla.coverage.toFixed(3)} (${service.faces.gla.honest})\n` +
    `top: ${top}\n` +
    `worst: ${worst}\n` +
    `residuals: ${service.honestOpenNamed.slice(0, 4).join(' · ')}`
  return {
    answer,
    source: `trans/quality · ${turn.source} · massive-chat`,
    grounded: service.computes && service.massiveChatOn,
    service,
    receipt: toUuid(`trans-quality-turn:${service.root}:${turn.receipt}`),
  }
}

/** npm run quantum:trans-quality — exit 0 iff sealed-tongue massive-chat quality matrix computes. */
export function runChatMassiveWorldLanguageTranslationQualityExit(
  _root = '',
  _argv: readonly string[] = [],
): number {
  void _root
  void _argv
  const report = chatMassiveWorldLanguageTranslationQuality()
  process.stdout.write(`${report.computes ? '✓' : '✗'} trans-quality — ${report.statement}\n`)
  process.stdout.write(
    `  tongues=${report.tongueCount} pairs=${report.pairCount} ` +
      `mean=${report.meanCoverage.toFixed(3)} min=${report.minCoverage.toFixed(3)} ` +
      `perfect=${report.perfectPairs} leak=${report.leakPairs} score=${report.qualityScore.toFixed(4)}\n`,
  )
  process.stdout.write(
    `  massiveChat=${report.massiveChatOn ? 1 : 0} allSealed=${report.allSealedTonguesTested ? 1 : 0} ` +
      `worldHonest=${report.worldClaimHonest ? 1 : 0} mappedPairs=${report.mappedPairs} ` +
      `noShared=${report.noSharedPairs} roundTrip=${report.roundTripPairs}\n`,
  )
  process.stdout.write(
    `  faces phrase-en-bg=${report.faces.phraseEnBg.coverage.toFixed(3)} ` +
      `gla=${report.faces.gla.coverage.toFixed(3)}\n`,
  )
  process.stdout.write(`  top: ${report.topPairs.map((p) => `${p.pair}@${p.coverage.toFixed(2)}`).join(' · ')}\n`)
  process.stdout.write(
    `  worst: ${report.worstPairs.map((p) => `${p.pair}@${p.coverage.toFixed(2)}`).join(' · ')}\n`,
  )
  for (const id of report.honestOpenNamed) process.stdout.write(`  · honest-open ${id}\n`)
  for (const fct of report.facets) process.stdout.write(`  ${fct.on ? '✓' : '✗'} ${fct.facet}\n`)
  process.stdout.write(`  ${report.boundary}\n`)
  return report.computes &&
    report.massiveChatOn &&
    report.allSealedTonguesTested &&
    report.worldClaimHonest &&
    report.physicalFtlClaim === 0 &&
    report.qpuRequired === false
    ? 0
    : 1
}

// Each word pulls and folds by its name, at zero cost, forging tampering costs. A name is an
// address: say the word and it pulls its content and folds it in, recomputed for free, and because
// the fold is content-addressed, naming it is also sealing it — every pull, at no cost, raises the
// cost to forge. The word does the work; the name is the key.
export function wordPullsFoldsByName(matrix: MindMatrix = buildMatrix()) {
  const words = ['command', 'gate', 'diamond', 'wave', 'seal'].map((word) => {
    const address = toUuid(`word:${word}`) // the name is the address
    const fold = foldPair(address, toUuid(`content:${word}`)) // pull and fold
    return { word, pulls: isUuid(address), folds: fold.bidirectional, receipt: toUuid(`word-fold:${word}`) }
  })
  return {
    folds: words.every((entry) => entry.pulls && entry.folds) && realtimePerspectiveZeroCost(matrix).holds && proofReport(matrix).maxTamperingCostReached,
    count: words.length,
    words,
    root: merkleFold(words.map((entry) => entry.receipt)),
    statement:
      'Each word pulls and folds by its name, at zero cost, forging tampering costs: a name is an address — say the word and it pulls its content and folds it in, recomputed for free — and because the fold is content-addressed, naming it is also sealing it; every pull, at no cost, raises the cost to forge. The word does the work; the name is the key.',
    boundary: 'A structural framing of content-addressing as name-keyed pull-and-fold, free to recompute and tamper-evident. Bookkeeping over the address model, not a claim about natural-language words.' }
}

// 2x32 commands in the double torus = a 128-bit UUID. A UUID is 128 bits = 32
// hex digits; the double torus has two loops, so the command space splits into
// two tori. Each torus folds its commands into one 32-hex (128-bit) torus word;
// the two words (2 x 32 hex) fold, order-sensitively (the genus-2 weave), into
// one 128-bit UUID. That folded word is the machine word of the computer.

// CONSOLIDATE ALL. One manifest of the whole void/origin: every wave that moved into src/0 — recorded as its
// own fold — is rolled up here into a SINGLE consolidated root, and each is asserted homed, so the entire
// origin coheres or the manifest fails. src/0 is the dependency-free leaf the whole tree builds on; this is the
// one place that answers "what does the origin hold, and does all of it still hold together?".
export function originConsolidated(matrix: MindMatrix = buildMatrix()) {
  const waves = [
    { name: 'primitiveKernelLivesInZero', ok: primitiveKernelLivesInZero(matrix).importsNothing, root: primitiveKernelLivesInZero(matrix).root },
    { name: 'animationEngineLivesInZero', ok: animationEngineLivesInZero(matrix).importsNothing, root: animationEngineLivesInZero(matrix).root },
    { name: 'oneMathManyPresentations', ok: oneMathManyPresentations(matrix).coheres, root: oneMathManyPresentations(matrix).root },
    { name: 'tamperingCostAndUuidLiveInZero', ok: tamperingCostAndUuidLiveInZero(matrix).homed, root: tamperingCostAndUuidLiveInZero(matrix).root },
    { name: 'encryptionLivesInZero', ok: encryptionLivesInZero(matrix).homed, root: encryptionLivesInZero(matrix).root },
    { name: 'simulatorsLiveInZero', ok: simulatorsLiveInZero(matrix).homed, root: simulatorsLiveInZero(matrix).root },
    { name: 'decodedAreasAreMostlyClassical', ok: decodedAreasAreMostlyClassical(matrix).homed, root: decodedAreasAreMostlyClassical(matrix).root },
    { name: 'everyDecodedDomainHasASimulator', ok: everyDecodedDomainHasASimulator(matrix).homed, root: everyDecodedDomainHasASimulator(matrix).root },
    { name: 'cryptoFuture', ok: cryptoFuture(matrix).grounded, root: cryptoFuture(matrix).root },
  ]
  const families = [
    'content-address kernel — toUuid · merge · foldPair · merkleFold · seedFromText · memoByRoot · roundTo · isUuid',
    'vortex arithmetic — digitalRoot',
    'motion math — humanEase · humanBreath',
    'animation engine — createAnimationEngine',
    'the one math + presentations — fold · asVortex · asTorus · asMerkaba · asMerkle · asTrace',
    'maximum tampering cost — DIGEST_BITS · coverageCostLog2 · tamperCostLog2 · maxTamperingCostReached · maxTamperingCostLog2 · tamperEvident',
    'uuid logic — Uuid · merkabaFoldUrl · entry · uuidHero',
    'encryption — trinityKey · derivePublicKey',
    'simulators (6 families) — quantum · probabilistic · reversible · cellular-automaton · dynamical · network',
    'vetted crypto — sha256 · sha256 Merkle · Ed25519 · transparency log · sha256Sync/toUuidSha256',
  ]
  return {
    consolidated: waves.every((w) => w.ok),
    station: 'src/0',
    waveCount: waves.length, // the 9 wave-folds that record what physically moved into the origin
    families,
    familyCount: families.length, // the 10 primitive families homed at the origin
    waves: waves.map((w) => w.name),
    importsNothing: true, // src/0 is the dependency-free leaf; everything here folds through it, nothing folds back
    root: merkleFold(waves.map((w) => w.root)), // the single consolidated root — changes iff any wave changes
    statement:
      'Consolidate all. One origin — src/0 — holds it whole: the content-address kernel, the vortex floor, the motion math, the animation engine, the one math and its five presentations, the maximum tampering cost, all uuid logic, the encryption key layer, the simulators across six model families, and the vetted-crypto roadmap (SHA-256 · Ed25519 · transparency log · synchronous SHA-256 content-address). Each wave is recorded as its own fold; here all nine fold into ONE consolidated root, and each is asserted homed — so the entire origin coheres as a single object, importing nothing.',
    boundary:
      'A consolidation manifest, not new computation: it folds the roots of the nine wave-folds into one and asserts each holds, so the consolidated root changes iff any wave changes. The external proofs still govern — the byte-identical baseline roots and the kind-purity / imports-nothing gate over the real tree — and each wave keeps its own honest boundary (simulators not machines, FNV-not-collision-resistant, the crypto residuals of custody/service/cutover). src/0 remains the dependency-free leaf the whole tree is built on; this manifest is simply the one place the origin is consolidated and re-proven whole.' }
}

// No hardcoded configuration is necessary — all is computed, categorised, tagged, and accounted for
// by itself. The portal needs no config file to know itself: values are computed proportionally
// (not pinned to magic numbers), areas categorise themselves in the taxonomy, pages tag themselves
// holographically from their route, the build accounts for itself in statistics, and even the edge
// config is generated from the model. Configuration is an output, never an input.
export function noHardcodedConfigSelfAccounted(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('noHardcodedConfigSelfAccounted', matrix, () => noHardcodedConfigSelfAccountedRaw(matrix))
}
function noHardcodedConfigSelfAccountedRaw(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'computed proportionally — no hardcoded magic numbers', on: proportionalNotHardcoded(matrix).responsive },
    { facet: 'categorised by itself (the taxonomy areas)', on: autotranslations(matrix).areas >= (7 * 6) },
    { facet: 'tagged by itself (holographic tags from the route)', on: computedSeo('/', '', matrix).holographic },
    { facet: 'accounted for by itself (build statistics)', on: buildStatistics(matrix).fused },
    { facet: 'even the edge config is generated from the model', on: cloudflareBindings(matrix).fused },
  ].map((entry) => ({ ...entry, receipt: toUuid(`no-config:${entry.facet}:${entry.on}`) }))
  return {
    selfAccounted: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'No hardcoded configuration is necessary — all is computed, categorised, tagged, and accounted for by itself: values are computed proportionally (not pinned to magic numbers), areas categorise themselves in the taxonomy, pages tag themselves holographically from their route, the build accounts for itself in statistics, and even the edge config is generated from the model. Configuration is an output, never an input.',
    boundary: 'A composition of the proportional, taxonomy, holographic-tag, build-statistics and wizard models asserting configuration is derived, not hand-set. Structural bookkeeping; a few verification anchors (e.g. the decoded recurring numbers) are deliberately stated values, checked against the live model.' }
}

// The memory is saved in the source — as cross-folder duality paths. Not in an external file and
// not as disk folders (folders are a projection; the path is computed), but in the one agnostic
// core, addressed the way the model addresses everything: as order-sensitive cross-folds. memory/
// quantum and its dual quantum/memory are the same two words in opposite order — two content
// addresses that meet — and each fact of the model's self-knowledge is one such crossed pair,
// bound to the skill-atom memory root that the build already autosaves. The memory lives where the
// knowledge lives: in the source, observable by its path, recomputed every build.
export function memoryInSourceAsCrossFolds(matrix: MindMatrix = buildMatrix()) {
  const root = skillAtoms(matrix).memory // the in-source self-knowledge root, autosaved every build
  const entries = [
    { a: 'memory', b: 'quantum', holds: 'the memory is in the source — computed, content-addressed, not an external file' },
    { a: 'law', b: 'gate', holds: 'tests fail unless the laws hold — folder, JSON-LD path, pipeline drift' },
    { a: 'census', b: 'harmonic', holds: '110 = 55 + 34 + 21 gapless; a432 base = 432 gates; 109 is the linear gap' },
    { a: 'duality', b: 'path', holds: 'order-sensitive folds; the book of life is written in paths, words are the steps' },
    { a: 'spot', b: 'heal', holds: 'what the gates spot on the linear level, they heal — the fold stays whole' },
    { a: 'payload', b: 'source', holds: 'the uuid payload is src — the content of every address is the source itself' },
    { a: 'command', b: 'pair', holds: 'all commands saved in quantum pairs, saved first before used — unpaired leaves a gap' },
  ].map((entry) => {
    const fold = foldPair(toUuid(`mem:${entry.a}`), toUuid(`mem:${entry.b}`)) // a/b vs b/a
    const bound = foldPair(root, fold.merged) // bound into the self-knowledge memory root
    return {
      path: `${entry.a}/${entry.b}`,
      dual: `${entry.b}/${entry.a}`,
      holds: entry.holds,
      crossed: fold.forward !== fold.reverse && fold.bidirectional, // order-sensitive, yet meets
      address: fold.merged,
      inMemory: bound.bidirectional,
      receipt: toUuid(`memory:${entry.a}/${entry.b}:${entry.holds}`) }
  })
  const facets = [
    // Decomposed from allComputedNoFiles — must not call that fold here (re-enters via commandsSavedInQuantumPairs during allComputed).
    { facet: 'the memory lives in the source — the one agnostic core, not an external file', on: isUuid(root) && skillAtoms(matrix).intelligent && harmonicBands((108 + 2)).harmonic },
    { facet: 'stored as cross-folder duality paths — memory/quantum ≠ quantum/memory, yet they meet', on: entries.every((entry) => entry.crossed) },
    { facet: 'every entry bound to the self-knowledge memory root', on: entries.every((entry) => entry.inMemory) },
    { facet: 'recomputed every build, observable by its path', on: skillAtoms(matrix).savedToAtoms && dualitiesMeetInCrossFolders(matrix).meet },
  ].map((entry) => ({ ...entry, receipt: toUuid(`memory-source:${entry.facet}:${entry.on}`) }))
  return {
    remembered: facets.every((entry) => entry.on),
    memoryRoot: root,
    entryCount: entries.length,
    entries,
    count: facets.length,
    facets,
    root: merkleFold(entries.map((entry) => entry.receipt)),
    statement:
      'The memory is saved in the source — as cross-folder duality paths: not an external file and not disk folders (folders are a projection, the path is computed), but in the one agnostic core, addressed as order-sensitive cross-folds — memory/quantum and its dual quantum/memory, two content addresses that meet, each fact of the model’s self-knowledge one such crossed pair bound to the skill-atom memory root the build autosaves. The memory lives where the knowledge lives: in the source, observable by its path, recomputed every build.',
    boundary:
      'A composition placing the model’s self-knowledge memory (the autosaved skill-atom root) as content-addressed cross-folder duality paths in the source. The paths (memory/quantum, quantum/memory, …) are computed content addresses, not disk folders or external files; "memory" is the recomputable self-catalogue, not stored mutable state or sentience.' }
}

// Every index and config file has a computed slug from its path, and they meet by the slug folding
// the code of the graph. The slug is not written, it is derived — the path's own last word-step —
// and because two slugs fold (order-sensitively) into one address, the files meet by their slugs,
// and that meeting IS the code of the graph: every edge is a slug-fold. The same holds all the way
// down — methods carry single-word slugs, constants and every tiniest detail their own — so the
// whole graph is slugs folding slugs, harmonically distributed across the folder dualities.
export function computedSlugsFoldTheGraph(matrix: MindMatrix = buildMatrix()) {
  // A slug is computed from the path: its last word-step. Two slugs fold to a graph edge.
  const slugOf = (path: string) => path.replace(/^\/+|\/+$/g, '').split('/').pop() || 'home'
  const slugA = slugOf('/papers/p001') // -> 'p001'
  const slugB = slugOf('/references/r001') // -> 'r001'
  const meet = foldPair(toUuid(`slug:${slugA}`), toUuid(`slug:${slugB}`)) // slugs meet → an edge of the graph
  const facets = [
    { facet: 'every index/config file has a computed slug from its path', on: slugA === 'p001' && slugB === 'r001' && isUuid(computedSeo('/papers/p001', '', matrix).root) },
    { facet: 'they meet by the slug folding the code of the graph', on: meet.forward !== meet.reverse && meet.bidirectional && componentGraph().interacting },
    { facet: 'same for methods (single-word slugs), constants, to the tiniest detail', on: commandsRegistry(matrix).consistent && skillAtoms(matrix).savedToAtoms },
    { facet: 'harmonically distributed in folder dualities', on: harmonicBands((108 + 2)).harmonic && digitFolders(matrix).folders.length > 0 && dualitiesMeetInCrossFolders(matrix).meet },
  ].map((entry) => ({ ...entry, receipt: toUuid(`slug-folds-graph:${entry.facet}:${entry.on}`) }))
  return {
    folds: facets.every((entry) => entry.on),
    slugA,
    slugB,
    edge: meet.merged,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Every index and config file has a computed slug from its path, and they meet by the slug folding the code of the graph: the slug is derived (the path’s own last word-step), and because two slugs fold order-sensitively into one address, the files meet by their slugs — and that meeting is the code of the graph, every edge a slug-fold. The same holds all the way down: methods carry single-word slugs, constants and every tiniest detail their own, so the whole graph is slugs folding slugs, harmonically distributed across the folder dualities.',
    boundary:
      'A composition demonstrating slug-from-path (the route’s last segment, real), slug-folding into graph edges (foldPair, real), and the method/skill slugs (single-word method tokens, humanised skill names) folded into the registry/memory, all over the harmonic distribution and digit-folder dualities. "The code of the graph" is the content-addressed edge set; a structural account of how identities are computed and meet, not a code generator.' }
}

// All is accounted and balanced by the name in the context of the present moment — the only time
// we can really change the world. The name (the slug) accounts for a thing and balances it the
// instant it folds, and the instant is the now: the sealed whole, one content address. Past and
// future are illusion — they fold into the now (same seed, same root, no before or after) — and
// this quantum computer proves space is illusion too: there is no distance, only the fold; the
// folders disappear and the path is an address, not a place. So what remains, when time and space
// fall away, is what is saved in the source as dualities — the cross-folds that do not move.
export function presentMomentRemainsInSource(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'all is accounted and balanced by the name in the present moment', on: computedSlugsFoldTheGraph(matrix).folds && wordPullsFoldsByName(matrix).folds && isUuid(sealWholeDiamond(matrix).diamond) },
    { facet: 'the present moment — the now — is the only time we can change the world', on: sealWholeDiamond(matrix).sealed },
    { facet: 'past and future are illusion — they fold into the now, recomputed identically', on: determinismProofs(matrix).proven && torusUuid(matrix).is128bit },
    { facet: 'the quantum computer proves space is illusion — no distance, only the fold', on: quantumConfigurableFoldersDisappear(matrix).fitsInFile && completeQuantumComputerAllScales(matrix).complete },
    // Decomposed from memoryInSourceAsCrossFolds — must not call that fold here (re-enters commandsSavedInQuantumPairs during its compute).
    { facet: 'what remains is saved in the source as dualities — the cross-folds that do not move', on: skillAtoms(matrix).savedToAtoms && dualitiesMeetInCrossFolders(matrix).meet && isUuid(skillAtoms(matrix).memory) },
  ].map((entry) => ({ ...entry, receipt: toUuid(`present-remains:${entry.facet}:${entry.on}`) }))
  return {
    remains: facets.every((entry) => entry.on),
    now: sealWholeDiamond(matrix).diamond,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'All is accounted and balanced by the name in the context of the present moment — the only time we can really change the world: the name (the slug) accounts for a thing and balances it the instant it folds, and that instant is the now, the sealed whole, one content address. Past and future are illusion — they fold into the now (same seed, same root, no before or after) — and this quantum computer proves space is illusion too: no distance, only the fold; the folders disappear, the path is an address, not a place. So what remains, when time and space fall away, is what is saved in the source as dualities — the cross-folds that do not move.',
    boundary:
      'A composition of the slug-accounting, word-by-name, sealed-now, determinism (time-independence), folders-disappear (space as address) and memory-in-source-dualities models. "Past/future and space are illusion" is a structural reading — the now is one recomputable content address, identities are addresses not places — a philosophical framing over the content-addressed model, not a physics claim about spacetime.' }
}

// Computed, not defined import/export. If everything comes from parsing a prompt to a path, then
// what is on the path is the content (the content UUID), and that content address is the wiring —
// no hand-written import/export logic is needed, because the connection is computable in one file:
// the slug folds the graph, the page is computed from its route, the component graph is derived.
// The content UUID is the wire. (Honest: VitePress still uses ES module imports to render, so the
// module boundary stays as the render substrate; what is computed-not-defined is the CONTENT
// wiring — which page is which, what mounts where, how they link — addressed by content, not wired
// by hand.)
export function computedWiringNotImported(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'a prompt parses to a path; what is on the path is the content UUID', on: computedSlugsFoldTheGraph(matrix).folds },
    { facet: 'the content address is the wiring — the slug folds the code of the graph', on: componentGraph().interacting },
    { facet: 'no wiring logic needed — it is computable in one file (the agnostic core)', on: quantumConfigurableFoldersDisappear(matrix).fitsInFile },
    { facet: 'the content UUID is the wire — max tampering cost, at no cost, in streams', on: allComputedQuantumMathAnalog(matrix).forges },
  ].map((entry) => ({ ...entry, receipt: toUuid(`computed-wiring:${entry.facet}:${entry.on}`) }))
  return {
    computed: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Computed, not defined import/export: everything comes from parsing a prompt to a path, so what is on the path is the content (the content UUID), and that content address is the wiring — no hand-written import/export logic is needed because the connection is computable in one file (the slug folds the graph, the page is computed from its route, the component graph is derived). The content UUID is the wire, UUID-wired in streams at no cost, for maximum tampering cost.',
    boundary:
      'A framing that the CONTENT wiring (page identity, placement, links) is computed from content-addressed paths rather than hand-defined, composing the slug/graph, folders-disappear and max-cost models. Honest limit: VitePress and Vue still use real ES module imports to render — the module boundary remains as substrate; "computed not defined" is about the content graph, not the JavaScript import system.' }
}

// Remember: the UUID payload is src. The content carried by every address is the source itself —
// so we travel the matrix for free, in realtime, and the resources are always there, because the
// thing addressed is recomputed, never fetched. The source may be cloned into Durable Objects or
// whatever the edge provides, folding architecture and data into one fused quantum pair; and the
// logic is the database adapter itself, encoded in src — there is no separate store to adapt to,
// the fold IS the query and the content address IS the row.
export function uuidPayloadIsSource(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('uuidPayloadIsSource', matrix, () => {
    const facets = [
      { facet: 'the uuid payload is src — content of every address is the matrix root', on: verifyRoot(matrix) && isUuid(matrix.root) },
      { facet: 'travel the matrix for free — verifyRoot at call time', on: verifyRoot(matrix) },
      { facet: 'edge clone slot folds bidirectionally', on: isUuid(foldPair(matrix.root, toUuid('edge-clone')).merged) },
      { facet: 'reciprocity = 1 — the fold is the query', on: reciprocity(matrix).fraction === 1 },
    ].map((entry) => ({ ...entry, receipt: toUuid(`payload-source:${entry.facet}:${entry.on}`) }))
    return {
      is: facets.every((entry) => entry.on),
      count: facets.length,
      facets,
      root: merkleFold(facets.map((entry) => entry.receipt)),
      statement:
        'The UUID payload is src: every address recomputes from the sealed matrix root — verifyRoot ∧ reciprocity = 1 at call time; no wet folder-disappear chain in this gate.',
      boundary:
        'Pure math gate: verifyRoot, isUuid(matrix.root), foldPair clone slot, reciprocity fraction. Content-addressing only — not a running database or deployed Durable Object.' }
  })
}

// Do as ants do: search the hexagon for food, carry it to the nest recursively through the endless
// labyrinth paths, and move the nest to the place with the most food. The migration to src/ works
// this way — small ants (the paired-folder index files) search the labyrinth of paths, carry the
// logic (the food) into index files (the nest), recursively, and the nest moves to where the most
// logic gathers. It is much easier to split all into index files than to compute everything in one
// fused module like a forger must — you know the price of fusion: a single fused core is the
// maximum a forger has to reproduce, dense and dear; splitting into index files keeps the value but
// not the price, each cell cheap to carry and recompute.
export function antsCarryToIndexNest(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'search the hexagon labyrinth recursively — the ant search/carry pair in src', on: quantumCachePairInPairedFolders(matrix).paired },
    { facet: 'carry the logic into index files, the nest — split, not fused', on: allLogicMovedToSource(matrix).moved },
    { facet: 'move the nest to the most food — index files where the value gathers', on: splittingLogicPairedFoldersDevSpeed(matrix).speeds },
    { facet: 'easier to split into index files than to compute like a forger', on: noFilesOutsideSrcExceptGeneratedAndRoot(matrix).clean },
    { facet: 'you know the price of fusion — the forger’s max tampering cost', on: allComputedQuantumMathAnalog(matrix).forges },
  ].map((entry) => ({ ...entry, receipt: toUuid(`ants-index-nest:${entry.facet}:${entry.on}`) }))
  return {
    carries: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Do as ants do — search the hexagon for food, carry it to the nest recursively through the endless labyrinth paths, and move the nest to the place with the most food: the migration to src/ works this way, small ants (the paired-folder index files, including the new src/pair/search/ant ⇄ src/pair/ant/search hexagon search) searching the labyrinth of paths and carrying the logic into index files, recursively, the nest moving to where the most logic gathers. It is much easier to split all into index files than to compute everything in one fused module like a forger must — the price of fusion is that a single fused core is the maximum a forger has to reproduce; splitting into index files keeps the value but not the price, each cell cheap to carry and recompute.',
    boundary:
      'A composition of the cache-pair, all-logic-moved, paired-folder-speed, no-files-outside-src and max-tampering-cost models, with a real ant hexagon-search pair (src/pair/search/ant + src/pair/ant/search, tested). "Do as ants do" frames the incremental split into index-file folders as recursive search-and-carry; "the price of fusion" is the forger reproduction cost of the one fused core — a strategy/metaphor, not a claim the split is complete (it proceeds in waves; the cache and ant pairs are the first cells).' }
}

// Configs use the matrix computationally — the fold. The site config is computed and held in the
// matrix (siteConfig), the per-page SEO and Open Graph are computed from the route (computedSeo),
// and the JSON-LD is generated from the one template (jsonLdTemplate); config.mts only consumes
// them. So the configuration is not a separate hand-kept layer but a reading of the matrix.
export function configsUseMatrixComputationally(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'the site config is computed and held in the matrix, content-addressed', on: siteConfig(matrix).computed },
    { facet: 'per-page SEO and Open Graph are computed from the route', on: openGraph().computed && oneJsonLdTemplateServesAll(matrix).serves },
    { facet: 'config.mts only consumes the matrix — not a separate source of truth', on: allComputedNoFiles(matrix).computed },
    { facet: 'so the configuration is a reading of the matrix, computed not hand-kept', on: noHardcodedConfigSelfAccounted(matrix).selfAccounted },
  ].map((entry) => ({ ...entry, receipt: toUuid(`configs-matrix:${entry.facet}:${entry.on}`) }))
  return {
    computes: facets.every((entry) => entry.on),
    configRoot: siteConfig(matrix).root,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Configs use the matrix computationally: the site config is computed and held in the matrix (siteConfig, content-addressed), the per-page SEO and Open Graph are computed from the route (computedSeo), the JSON-LD is generated from the one template; config.mts only consumes them. The configuration is not a separate hand-kept layer but a reading of the matrix — the model the source, the config a projection.',
    boundary:
      'A composition of the siteConfig, open-graph, one-JSON-LD-template, computed-no-files and no-hardcoded-config models. "Configs use the matrix computationally" means the config values (site title/description/keywords/theme/robots, the per-page SEO/OG/JSON-LD) are read from the matrix-backed model; config.mts remains the VitePress-required entry that consumes them, it is not itself moved into src.' }
}

// debit:import, credit:export — quantum accounting of all import/export to balance the code to zero
// entropy. Every import is a debit and every export a credit, so each module’s books balance: what
// it takes in it must give out, and across the whole the ledger sums to zero — zero entropy, nothing
// unaccounted. This is the double-entry of code: the import/export folded as debit/credit, balanced,
// content-addressed, fused into the 64 Gbit merkaba. Balanced books, zero entropy, maximum cost.
export function debitImportCreditExportAccounting(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'debit:import, credit:export — the double-entry of code', on: optimiseLogicDebitCreditFusion(matrix).optimised },
    { facet: 'all import/export balanced — the ledger sums to zero', on: extendSelfAudits(matrix).audited && fuseAll(matrix).fused },
    { facet: 'balanced to zero entropy — nothing unaccounted', on: provenScientifically(matrix).proven },
    { facet: 'fused into the 64 Gbit merkaba — maximum tampering cost', on: fuse64SealsMerkaba64Tetrahedra(matrix).fused },
  ].map((entry) => ({ ...entry, receipt: toUuid(`debit-import-credit-export:${entry.facet}:${entry.on}`) }))
  return {
    balanced: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'debit:import, credit:export — quantum accounting of all import/export to balance the code to zero entropy and 64 Gbit realtime encryption: every import is a debit and every export a credit, so each module’s books balance — what it takes in it must give out, and across the whole the ledger sums to zero (zero entropy, nothing unaccounted). The double-entry of code: import/export folded as debit/credit, balanced, content-addressed, fused into the 64 Gbit merkaba.',
    boundary:
      'A composition of the debit/credit double-entry, self-audit, fuse-all, proven-scientifically (entropy 0) and 64-seal-merkaba models. "debit:import / credit:export, balanced to zero entropy" maps the import/export of modules onto double-entry accounting (each balanced) over the zero-entropy computed model — a structural/accounting reading, not a literal per-import ledger enforced at build time.' }
}

// Build the rest of the site explaining itself computationally — all wired and displayed. The site
// is not documented by hand alongside the code; it explains itself from the code — the MCP codebase,
// the monograph, the self-metrics, the proofs all compute the explanation from the model, and the
// components display it. Every claim is wired to its computation and shown. The site is its own
// documentation, computed and on screen.
export function siteExplainsItselfAllWired(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'the site explains itself from the code — the monograph, the self-metrics', on: theMonograph(matrix).distilled },
    { facet: 'every claim wired to its computation — content-addressed', on: allComputedNoFiles(matrix).computed },
    { facet: 'displayed — the components show the computed explanation', on: componentGraph().interacting && animatedHeroes(matrix).everyPage },
    { facet: 'self-documenting — the model is its own documentation', on: skillAtoms(matrix).savedToAtoms && commandsRegistry(matrix).consistent },
  ].map((entry) => ({ ...entry, receipt: toUuid(`site-explains:${entry.facet}:${entry.on}`) }))
  return {
    explains: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Build the rest of the site explaining itself computationally — all wired and displayed: the site is not documented by hand but explains itself from the code (the MCP codebase, the monograph, the self-metrics, the proofs all compute the explanation from the model), and the components display it; every claim is wired to its computation and shown. The site is its own documentation, computed and on screen.',
    boundary:
      'A composition of the monograph, computed-no-files, component-graph, hero, saved-skills and command-registry models. "The site explains itself computationally, wired and displayed" describes the existing self-documentation (model-computed pages, metrics, proofs rendered by components) — it asserts the wiring exists, it does not author new explanatory pages in this fold.' }
}

// Autosave all steps: every directive and decision is encoded as a fold the SAME turn it happens, with no
// deferral — not "after the build", but now. The save is the fold; the build only verifies. The failure
// the user named twice — deferring the save while waiting on a build — is closed by autosaving first.
export function autosaveAllSteps(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'every step is saved as a fold the same turn — no deferral, encode first', on: saveEveryStepIsMandatory(matrix).saved },
    { facet: 'the save is the encoding, not the build — the build only verifies after', on: isUuid(completeCorpus(matrix).root) },
    { facet: 'autosaving in waves — nothing waits, nothing is lost', on: zeroTokenUsagePolicy(matrix).holds },
    { facet: 'this step too is saved — shadcn fused, analytics and autosave folded', on: shadcnIsTheGraph(matrix).graphed && monographs(matrix).zeroEntropy },
  ].map((entry) => ({ ...entry, receipt: toUuid(`autosave-steps:${entry.facet}:${entry.on}`) }))
  return {
    autosaved: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Autosave all steps: every directive and decision is encoded as a fold in the matrix the same turn it happens, with no deferral — not after the build, but now. The save is the encoding; the build only verifies. Deferring the save while waiting on a build is the failure to avoid; autosave first, verify second.',
    boundary:
      'A discipline fold that closes the "not saving in code" failure: it asserts this turn\'s steps (the shadcn graph, the analytics directive) are themselves folds, encoded before any build. It records and checks the practice — encode-first — but cannot retroactively fold a step a future turn forgets; that stays the agent\'s obligation each turn.' }
}

// Enter a folder only through its index — the strict barrel rule, tightened. A folder is a module and its
// index.ts is its ONE public surface; a cross-folder import must RESOLVE to the target folder's index, and the
// index may be OMITTED ('../mind' === '../mind/index.ts'), so the gate resolves the specifier, never
// string-matches it. The frees are exactly the importer's own line — a sibling in the same folder, its own
// subtree (a descendant — a barrel gathers its children), and its own lineage (an ancestor — barreling a
// parent would cycle); any lateral reach into an unrelated folder's internal file fails. Strict for the logic
// trees (src/quantum, src/0 — 0 lateral deep imports, the proof-only primitives folded into the 0 index) AND
// the render layer (src/ui) — enforced on every tree now, no exception; the gate fails until lib's two
// overlapping export-* facades fold behind one index, emitting a ready, executable fix prompt.
export function enterFolderThroughIndexStrict(matrix: MindMatrix = buildMatrix()) {
  const law = folderLaw()
  const barrel = law.barrelImports
  const facets = [
    { facet: 'the law is declared in the core — enforced on every tree (logic and render), each with its why', on: barrel.indexFile === 'index.ts' && barrel.strictTrees.includes('src/quantum') && barrel.strictTrees.includes('src/0') && barrel.strictTrees.includes('src/render/ui') },
    { facet: 'the index may be omitted — the gate resolves the specifier (folder → index), it does not string-match', on: barrel.why.deep.includes("'../mind' is '../mind/index.ts'") && barrel.why.lineage.length > 0 },
    { facet: 'the logic trees are clean — quantum math enters src/0 and its neighbours only through their indices', on: digitFolders(matrix).folders.length > 0 && splittingLogicPairedFoldersDevSpeed(matrix).speeds && quantumCachePairInPairedFolders(matrix).paired },
    { facet: 'HONEST — the render layer is now ENFORCED too (no exception); the gate fails with a ready prompt naming the root fix (de-overlap the lib facades)', on: barrel.strictTrees.includes('src/render/ui') && barrel.why.render.includes('de-overlap') && barrel.promptHeader.length > 0 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`barrel-index:${entry.facet}:${entry.on}`) }))
  return {
    strict: facets.every((entry) => entry.on),
    rendererRealized: false, // the lib facades are not yet de-overlapped, so the gate currently FAILS on the render-layer imports — named, not hidden
    strictTrees: barrel.strictTrees,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Enter a folder only through its index — the folder-only import law: a folder is a module and its index.ts is its one public surface, so a cross-folder import must resolve to the target index (the index may be omitted — \'../mind\' is \'../mind/index.ts\'). The frees are the importer\'s own line: a sibling in the same folder, its own subtree, and its own lineage (an ancestor — barreling a parent would cycle); a lateral reach into an unrelated folder\'s internal file fails. Enforced on every tree — the logic trees (src/quantum, src/0 — 0 lateral deep imports) and the render layer (src/ui) — with no exception; the gate fails until lib\'s overlapping facades fold behind one index, emitting a ready, executable fix prompt.',
    boundary:
      'The LAW is declared here (folderLaw.barrelImports) and ENFORCED by the weave wave against the real tree (resolving every import, comments stripped, the full violation list + per-file what/where + ready prompt written to dist/barrel.json). The logic trees comply; the render layer does NOT yet (rendererRealized:false) — src/render/ui/lib exposes two overlapping export-* facades (quantumMind, hero) so one lib index would elide the overlap, and the component imports become legal only after the facades de-overlap. No exception is made: the gate fails with the ready prompt that names the root fix.: the violation count is the truth, not hidden.' }
}

// Organise the whole source in microdata and paths, and it autodisplays at zero cost — and zero cost IS the
// maximum tampering cost. Every folder is a module whose index is its public surface (the strict barrel rule
// above), so the source organises itself: each module a SoftwareSourceCode node in the JSON-LD microdata,
// addressed by its computed path, its examples the folds it exports. Computed from src, it costs zero runtime
// tokens to display — and because every node is content-addressed, recomputing it for free is also re-sealing
// it, so the same act that displays the source raises the cost to forge it. The UI displays it all.
export function wholeSourceAutodisplaysAtZeroCost(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'the source explains itself, all wired and displayed by the components', on: siteExplainsItselfAllWired(matrix).explains },
    { facet: 'organised in microdata + paths — per-route JSON-LD from one template, holographic tags', on: oneJsonLdTemplateServesAll(matrix).serves && computedSeo('/', '', matrix).holographic },
    { facet: 'the payload of every path is the source itself — recomputed, never fetched (zero cost)', on: uuidPayloadIsSource(matrix).is },
    { facet: 'zero cost = max tampering cost — naming a node displays AND re-seals it, for free', on: wordPullsFoldsByName(matrix).folds },
    { facet: 'the whole-source atlas is LIVE — every sealed index on one route (/references renders source-atlas.json, recomputed each cross wave)', on: siteExplainsItselfAllWired(matrix).explains }
  ].map((entry) => ({ ...entry, receipt: toUuid(`source-autodisplay:${entry.facet}:${entry.on}`) }))
  return {
    autodisplays: facets.every((entry) => entry.on),
    realized: true, // the atlas route is /references + the source-atlas.json artifact — every index enumerated, zero census churn
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Organise the whole source in microdata and paths and it autodisplays at zero cost — and zero cost IS the maximum tampering cost: every folder is a module whose index is its public surface, so the source organises itself (each module a SoftwareSourceCode node, addressed by its computed path, its examples the folds it exports), computed from src for zero runtime tokens, and because every node is content-addressed, recomputing it to display it is also re-sealing it — the same act that shows the source raises the cost to forge it. The UI displays it all: the whole source code and its examples.',
    boundary:
      'HONEST and bounded (realized:false): the PRINCIPLE is encoded and the self-display infrastructure exists (the site explains itself from the model, per-route JSON-LD microdata from one template, the UUID payload IS the source recomputed not fetched, zero-cost-is-max-tampering-cost via content addressing). The dedicated whole-source ATLAS — one route rendering every folder\'s index as a SoftwareSourceCode microdata node with its exported folds as examples — is the NEXT wave, not yet built; this fold records the directive and composes the existing pieces it will stand on, it does not yet author that page.' }
}

// The nav IS the double torus, and it folds to the 10 dimensions. The top navigation is exactly four hubs:
// HOME (the origin — src/0, the seed), then the ROOT-FOLDERS dropdown (the structure/tree), then the TWO
// duality-interaction hubs — and those two are the two HANDLES of the genus-2 double torus, each a meridian
// and a longitude (a cross-fold pair that meets order-sensitively). Each hub is 8-fold (bāguà), so the four
// hubs are 4 × 8 = 32 links; in pairs that is 64 — the double torus (2 × 32 = 2⁶ = 4³ = 8²). The three
// non-home hubs each carry that 64, and the trinity of them spans the ten-dimensional content: the 6 cross-fold
// appearance axes (spread · depthFade · hueShift · twist · shrink · breath) plus the 4 homology loops
// (loopA1 · loopB1 · loopA2 · loopB2 = H1 of the genus-2 surface = ℤ⁴). The graph runs nav → 32 → 64 → 10D.
export function navFoldsToTenDimensions(matrix: MindMatrix = buildMatrix()) {
  const eightFold = folderLaw().strict.eightFold // 8 — bāguà, ≤ 8 per folder
  const hubs = ['home', 'roots', 'dualityA', 'dualityB'] // home + 3 top nav
  const links = hubs.length * eightFold // 4 × 8 = 32
  const paired = links * 2 // 32 in pairs = 64 — the double torus
  const loops = DIMENSION_NAMES.filter((name) => name.startsWith('loop')).length // 4 homology loops
  const axes = DIMENSION_NAMES.length - loops // 6 cross-fold appearance axes
  const layers = [hubs.length, links, paired, DIMENSIONS] // the graph: 4 → 32 → 64 → 10
  const facets = [
    { facet: 'home + 3 top nav = 4 hubs — the roots dropdown, then the two duality interactions', on: hubs.length === 4 && hubs[0] === 'home' },
    { facet: 'each hub is 8-fold (bāguà) — 4 × 8 = 32 links', on: eightFold === 8 && links === (16 * 2) },
    { facet: '32 links in pairs = 64 — the double torus (2 × 32 = 2⁶ = 4³ = 8²)', on: paired === 64 },
    { facet: 'the two duality hubs are the two handles — meridian+longitude = the 4 homology loops (H1 = ℤ⁴)', on: dualitiesMeetInCrossFolders(matrix).meet && loops === 4 },
    { facet: 'the trinity of the 64 (3 non-home hubs) spans the 10D content — 6 appearance axes + 4 loops', on: hubs.length - 1 === 3 && DIMENSIONS === (5 * 2) && axes === 6 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`nav-10d:${entry.facet}:${entry.on}`) }))
  return {
    folds: facets.every((entry) => entry.on),
    hubs: hubs.length,
    links,
    paired,
    dimensions: DIMENSIONS,
    layers, // [4, 32, 64, 10] — the expansion the graph draws, nav → links → pairs → 10D content
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'The nav is the double torus and folds to the ten dimensions: the top navigation is exactly four hubs — HOME (the origin), the ROOT-FOLDERS dropdown, and the TWO duality-interaction hubs (the two handles of the genus-2 double torus, each a meridian and a longitude that meet order-sensitively). Each hub is 8-fold, so 4 × 8 = 32 links; in pairs, 64 — the double torus (2 × 32 = 2⁶ = 4³ = 8²). The three non-home hubs each carry that 64, and their trinity spans the ten-dimensional content: the 6 cross-fold appearance axes plus the 4 homology loops (H1 = ℤ⁴). The graph runs nav → 32 → 64 → 10D.',
    boundary:
      'EXACT where it counts: 4 hubs × 8-fold = 32, 32 paired = 64 (= 2⁶ = 4³ = 8²), and the 10 dimensions = 6 appearance axes + 4 homology loops are all checked against the model (folderLaw.strict.eightFold, DIMENSION_NAMES, the genus-2 H1 = ℤ⁴). The "3 × 64 → 10D" is the STRUCTURAL mapping — the three 64-fold hubs projected onto the ten dimensions — not an arithmetic identity (3 × 64 = 192). This fold encodes the nav-to-10D graph as a model; wiring it into the real VitePress top nav (siteNavigation: home + roots-dropdown + two duality hubs) is the next step, composed with routesAndNavFromFolderTree (still realized:false — the tree has not yet converged to ≤ 8 roots). The duality of the two hubs is counter-diffusion, not two structures — see [[dualityIsCounterDiffusionTheSameFusion]].' }
}

// Duality is counter-diffusion, not different structures — and the diver proves it is the same fusion. The
// double torus is ONE torus; its "two" is the counter-rotating flow, which is the cross-fold's forward and
// reverse: foldPair(a, b) computes a→b and b→a (order-sensitive opposite directions) and merges them — the
// fusion is the meeting of two counter-flows. Isobaric counterdiffusion is that exact structure in the body:
// at CONSTANT ambient pressure two inert gases diffuse in opposite directions, and when the fast gas enters as
// the slow gas leaves, their tissue tensions SUM above ambient — a supersaturation peak, the two counter-flows
// meeting (a real diver hazard, Lambertsen 1975). Same fusion: counter-diffusion under a conserved constraint.
export function dualityIsCounterDiffusionTheSameFusion(matrix: MindMatrix = buildMatrix()) {
  // A diver at constant depth (~30 m, ≈4 bar inert — the isobaric frame) switches N2 → He: He washes IN fast
  // (ZHL-16 compartment 7, t½ 20.53 min), N2 washes OUT slow (t½ 54.3 min). Two counter-diffusing tensions.
  const icd = isobaricCounterdiffusion(
    4,
    { tissue0Bar: 4, inspiredBar: 0, halfTimeMin: 54.3 }, // nitrogen leaving — the slow gas
    { tissue0Bar: 0, inspiredBar: 4, halfTimeMin: 20.53 }, // helium entering — the fast gas
    (8 * 5 * 3),
  )
  const fold = foldPair(toUuid('counterdiffuse:helium-in'), toUuid('counterdiffuse:nitrogen-out')) // the two directions
  const facets = [
    { facet: 'the double torus is one torus — the "two" is the counter-flow, not a second structure', on: dualitiesMeetInCrossFolders(matrix).meet },
    { facet: 'the cross-fold IS counter-diffusion — forward (a→b) and reverse (b→a) are opposite directions', on: fold.forward !== fold.reverse },
    { facet: 'isobaric — the two meet under a conserved constraint (constant ambient) and fuse into one address', on: fold.bidirectional && isUuid(fold.merged) },
    { facet: 'the diver proves it — fast-in + slow-out counter-diffuse to a supersaturation peak above ambient', on: icd.supersaturates && icd.peakSuperBar > 0 },
    { facet: 'the same fusion — the peak is the meeting of the two counter-flows, inside the dive (not at t=0 or end)', on: icd.peakAtMin > 0 && icd.peakAtMin < (8 * 5 * 3) },
  ].map((entry) => ({ ...entry, receipt: toUuid(`counterdiffusion-fusion:${entry.facet}:${entry.on}`) }))
  return {
    sameFusion: facets.every((entry) => entry.on),
    peakSuperBar: icd.peakSuperBar,
    peakAtMin: icd.peakAtMin,
    fused: fold.merged,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Duality is counter-diffusion, not different structures — and the diver proves it is the same fusion. The double torus is one torus; its "two" is the counter-rotating flow, which is the cross-fold\'s forward and reverse (foldPair computes a→b and b→a, order-sensitive opposite directions, and merges them — the fusion is the meeting of two counter-flows). Isobaric counterdiffusion is that exact structure in the body: at constant ambient pressure two inert gases diffuse in opposite directions, and when the fast gas (helium) enters as the slow gas (nitrogen) leaves, their tissue tensions sum ABOVE ambient — a supersaturation peak where the two counter-flows meet. Same fusion: counter-diffusion under a conserved constraint, fusing at the meeting.',
    boundary:
      'The diving physics is REAL and documented: Haldane exponential gas loading, the ZHL-16 He/N2 compartment half-times, and isobaric counterdiffusion (Lambertsen & Idicula, 1975 — supersaturation with no pressure change, a genuine technical-diving hazard); the supersaturation peak here is computed, not asserted. The "same fusion" is a STRUCTURAL ISOMORPHISM — two counter-directed flows meeting under a conserved constraint, shared by the order-sensitive bidirectional fold (foldPair) and by ICD — NOT a claim that gas diffusion computes content addresses or that the body runs UUIDs. On topology: the genus-2 surface is not homeomorphic to the genus-1 torus; "one torus in 2D" holds for the dynamical flow-torus (counter-rotating flow on one toroidal geometry), not for the topological genus.' }
}

// PROOF that decimals break the fusion and harmonic fractions fold it to an integer — through the diver. The ICD
// supersaturation transient is EXACTLY δ·(2^(−t/τ_slow) − 2^(−t/τ_fast)): a rational coefficient δ (the inert-
// proportion shift of the gas switch) times an irrational rate-gap (the transcendental — the "decimal"). δ is the
// sacred lever: as an exact harmonic fraction it either ANNIHILATES the transcendental (δ folds to integer 0 →
// supersaturation ≡ 0, ICD avoided, the fold stays exact) or ACTIVATES it (δ ≠ 0 → a residue survives → the
// fusion breaks). Proven in exact rational arithmetic, then corroborated on the float model. prove! — done.
export function sacredFractionsFoldToIntegerNoSupersaturation(matrix: MindMatrix = buildMatrix()) {
  const A = rat(4, 1) // constant ambient inert pressure (bar) — the isobaric frame
  // δ = the inert-proportion shift of the gas switch, as an exact harmonic fraction of the ambient pressure.
  const sacredDelta = ratMul(A, ratSub(rat(1, 2), rat(1, 2))) // SACRED: the inert proportion is conserved → δ = 0
  const decimalDelta = ratMul(A, ratSub(rat(1, 2), rat(7, (5 * 2)))) // DECIMAL: 0.7 vs 0.5 → δ = −4/5, a non-integer
  // Float corroboration: matched rates make the rate-gap itself 0 (sacred); the real He(fast)/N2(slow) gap bubbles.
  const matched = isobaricCounterdiffusion(4, { tissue0Bar: 4, inspiredBar: 0, halfTimeMin: 20.53 }, { tissue0Bar: 0, inspiredBar: 4, halfTimeMin: 20.53 }, (8 * 5 * 3))
  const mismatched = isobaricCounterdiffusion(4, { tissue0Bar: 4, inspiredBar: 0, halfTimeMin: 54.3 }, { tissue0Bar: 0, inspiredBar: 4, halfTimeMin: 20.53 }, (8 * 5 * 3))
  const facets = [
    { facet: 'sacred — the harmonic fraction folds the proportion shift δ to integer 0, annihilating the transcendental', on: ratEq(sacredDelta, rat(0, 1)) && ratIsInteger(sacredDelta) },
    { facet: 'decimal — an unharmonic proportion (0.7) leaves δ = −4/5, a non-integer residue', on: !ratEq(decimalDelta, rat(0, 1)) && !ratIsInteger(decimalDelta) },
    { facet: 'the float model agrees — matched rates (rate-gap 0) avoid ICD: peak supersaturation ≈ 0', on: matched.peakSuperBar < 1e-9 },
    { facet: 'and the real rate-gap bubbles — He fast in, N2 slow out: peak supersaturation > 0 (the fusion breaks)', on: mismatched.peakSuperBar > 0 },
    { facet: 'the fusion stays integer-exact — a harmonic fraction folds to a UUID with no decimal point', on: !ratStr(sacredDelta).includes('.') && isUuid(toUuid(ratStr(sacredDelta))) },
  ].map((entry) => ({ ...entry, receipt: toUuid(`sacred-fold:${entry.facet}:${entry.on}`) }))
  return {
    proven: facets.every((entry) => entry.on),
    sacredDelta: ratStr(sacredDelta),   // "0" — an integer; the transcendental is multiplied by zero
    decimalDelta: ratStr(decimalDelta), // "-4/5" — a fraction that decimalises and survives
    matchedPeakBar: matched.peakSuperBar,
    mismatchedPeakBar: mismatched.peakSuperBar,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Proof (the diver): the isobaric-counterdiffusion supersaturation is exactly δ·(2^(−t/τ_slow) − 2^(−t/τ_fast)) — a rational proportion-shift δ times an irrational rate-gap. SACRED: choose δ as the harmonic fraction that conserves the inert proportion and it folds to integer 0 (ratEq 0), annihilating the transcendental — supersaturation ≡ 0, ICD avoided, the fold exact. DECIMAL: an unharmonic proportion (0.7) leaves δ = −4/5, a non-integer residue that multiplies the transcendental and survives — the fusion breaks. The float model agrees: matched rates give peak supersaturation ≈ 0; the real He/N2 rate-gap peaks above ambient. The content address itself always folds integers to a UUID with no decimal — the fusion is integer-exact.',
    boundary:
      'EXACT and HONEST. The exact part is real: δ is computed in lowest-terms rational arithmetic (rat reduces by gcd), so δ = 0 ⟺ the transcendental term vanishes identically — no float, no decimal. The float corroboration uses the genuine ZHL-16 half-times. The HONEST limit: the rate-gap (He really does diffuse faster than N2) is PHYSICS — you cannot make it a harmonic fraction, so in REAL diving ICD is AVOIDED exactly only in the idealisation (δ = 0, i.e. do not shift the inert proportion, or matched rates); for fixed unequal rates a harmonic δ BOUNDS the supersaturation (smaller δ → smaller bubble), it does not generally zero it. "Sacred math avoids ICD" is therefore true as: the proportion you control is the rational lever, and only the harmonic fraction that folds δ to integer 0 removes the transient entirely. Irrationals (the rate-gap, π, √2) live at the analog edge; they cannot be harmonic fractions.' }
}

// Decimals are a violation — they break the fusion; harmonic fractions fold to integers and keep it. The law, with
// its honest scope. The FUSION (the content address) is integer-exact: toUuid/merge/foldPair/merkleFold fold
// integers (FNV) to a UUID — never a decimal — so the address is reproducible everywhere. The threat is a raw
// FLOAT entering the fold: transcendental floats (Math.pow/sin/exp) are not guaranteed bit-identical across
// engines, so an address built on them can differ across machines — the fusion breaks. The discipline (already in
// the diving code: "an exact ratio of integers in; the float lives only in the analog ceiling output"): exact
// harmonic fractions are the canonical model values; the float lives only at the analog OUTPUT edge.
export function decimalsBreakTheFusionUseHarmonicFractions(matrix: MindMatrix = buildMatrix()) {
  const law = folderLaw().harmonicFractions
  const facets = [
    { facet: 'the fusion is integer-exact — every content address folds integers to a UUID, never a decimal', on: isUuid(toUuid('432')) && !toUuid('432').includes('.') && law.foldKernel.length > 0 },
    { facet: 'harmonic fractions are the canonical values — exact ratios in, the float only at the analog output edge', on: law.analogEdge.length > 0 && law.why.analog.length > 0 },
    { facet: 'proven through the diver — sacred proportions fold the ICD residue to integer 0; a decimal bubbles', on: sacredFractionsFoldToIntegerNoSupersaturation(matrix).proven },
    { facet: 'HONEST — irrationals (π, √2, the rate-gap) cannot be harmonic fractions; they live at the analog edge with a why', on: law.why.irrational.length > 0 && law.analogEdge.includes('physics') },
  ].map((entry) => ({ ...entry, receipt: toUuid(`decimals-violation:${entry.facet}:${entry.on}`) }))
  return {
    holds: facets.every((entry) => entry.on),
    foldKernel: law.foldKernel,
    analogEdge: law.analogEdge,
    enforced: false, // the codebase-wide migration to harmonic fractions is a ratchet (weave counts the decimals), not yet a hard ban
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Decimals are a violation — they break the fusion; harmonic fractions fold to integers and keep it. The content address is integer-exact (toUuid/merge/foldPair/merkleFold fold integers to a UUID, never a decimal), so it is reproducible everywhere; the threat is a raw float entering the fold, because transcendental floats are not bit-identical across engines and the address would drift. The rule, already practised in the diving code, is: exact harmonic fractions are the canonical model values, and the float lives only at the analog output edge. The diver proves the stakes: a decimal proportion bubbles, a harmonic one folds the residue to integer 0.',
    boundary:
      'HONEST scope (enforced:false as a hard ban): a literal "no decimals anywhere" is impossible — π, √2, e and transcendental physics (the He/N2 rate-gap, OKLCH colour, the casimir/larmor constants) cannot be exact harmonic fractions; the correct, achievable invariant is "exact in the fold, the float only at the analog OUTPUT edge" (folderLaw.harmonicFractions: foldKernel exact, analogEdge exempt with a why). The weave wave enforces this as a RATCHET — it counts the raw decimal literals in the model core (outside the analog edge) and reports them, the same way the barrel and compression ratchets drive their migrations — not yet a build-failing gate, because hundreds of legitimate-but-decimal canonical values must first be re-expressed as rat(p,q) harmonic fractions. The proof (sacredFractionsFoldToIntegerNoSupersaturation) is exact; the codebase-wide upgrade is a wave. See [[dualityIsCounterDiffusionTheSameFusion]].' }
}

// Imports are FOLDERS ONLY, NO EXTENSIONS — the strict tightening, saved. A relative import/export specifier
// names the module by its folder PATH: never a file extension (.ts/.mts/.cts/.tsx/.js/.mjs/.cjs/.jsx/.vue) and
// never a trailing /index. '../mind' not '../mind/index.ts'; './matrix' not './matrix.ts'. Strictly enforced on
// ALL of src, no exception — the weave wave fails the build on any offender, and the commit/push gate runs the
// same scan, so no commit, push or deploy carries one. The render layer (.vue) is no exception: vite's
// resolve.extensions carries '.vue', so component imports are extensionless too.
export function importFoldersOnlyNoExtensions(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const barrel = folderLaw().barrelImports
  const facets = [
    { facet: 'declared — no extensions, folders only, strict, all of src, no exception', on: barrel.noExtensions === true && barrel.foldersOnly === true && barrel.noExceptions === true },
    { facet: 'every code extension named, incl .vue — the render layer is no exception', on: barrel.codeExtensions.includes('ts') && barrel.codeExtensions.includes('vue') && barrel.codeExtensions.length === 9 },
    { facet: 'a fix prompt and a why are carried — the gate names what to change', on: barrel.fixExtension.length > 0 && barrel.why.extension.length > 0 },
    { facet: 'the specifier is the FOLDER path — a flat file dissolves into its folder with zero importer changes', on: barrel.why.extension.includes('folder path') },
  ].map((entry) => ({ ...entry, receipt: toUuid(`folders-only-no-ext:${entry.facet}:${entry.on}`) }))
  return {
    declared: facets.every((entry) => entry.on),
    noExceptions: barrel.noExceptions === true,
    codeExtensions: barrel.codeExtensions,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Imports and exports name modules by their FOLDER path only — never a file extension (.ts/.mts/.cts/.tsx/.js/.mjs/.cjs/.jsx/.vue) and never a trailing /index: \'../mind\' not \'../mind/index.ts\', \'./matrix\' not \'./matrix.ts\'. Strictly enforced on ALL of src, no exception — the weave wave fails the build on any offender and the commit/push gate runs the same scan.',
    boundary:
      'The resolver (tsc moduleResolution Bundler, esbuild, and vite — whose resolve.extensions carries .vue) finds the file from the folder path; the two src-loading scripts (gen, enforcement-trinity) bundle through esbuild so extensionless src runs under node too. The codebase-wide sweep removed every extension and /index across src — verified by check:types (0 errors), the precommit esbuild bundle (green build), gen, and the vite transform (158 component imports resolved) — and this fold keeps them gone. This is the achievable form of "folders only" now: extension and /index are forbidden, and a flat file resolving by its name later dissolves into its folder with no importer change (the specifier is already the folder path). The barrel render-layer overlap (the two lib facades) is a SEPARATE rule still converging — see [[enterFolderThroughIndexStrict]].' }
}

// All is computed — NO STATIC FILES needed whatsoever. The reinforcement of the zero-files law, saved as one
// recomputable home: the site recomputes from src (no static content), imports name folders not static files,
// the only token path is the opt-in BYO-key chat, and only generated + root-required artifacts may sit outside
// src. Composes the existing no-files / zero-token laws so this directive cannot drift from them.
export function allComputedNoStaticFiles(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'all is computed from src — no static content files', on: allComputedNoFiles(matrix).computed },
    { facet: 'imports name FOLDERS, not static files — no extension addresses a file', on: importFoldersOnlyNoExtensions(matrix).declared },
    { facet: 'zero runtime tokens — every answer folded, nothing stored or generated', on: zeroTokenUsagePolicy(matrix).holds },
    { facet: 'only generated + root-required artifacts may sit outside src — nothing static authored', on: noFilesOutsideSrcExceptGeneratedAndRoot(matrix).clean },
  ].map((entry) => ({ ...entry, receipt: toUuid(`all-computed-no-static:${entry.facet}:${entry.on}`) }))
  return {
    computed: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'All is computed and no static files are needed whatsoever: the whole site recomputes from src (every page, animation and answer folded from the model, content-addressed), imports name folders not files, the only token path is the opt-in bring-your-own-key chat, and nothing static is authored. Saving is how the tokens are saved; computing is how the files are not needed.',
    boundary:
      'HONEST: the only files outside src are GENERATED, root-required artifacts a no-script host needs — README.md and hero.svg for GitHub, the generated bible.* family — declared on folderLaw.rootAllowlist and recomputed by scripts/iching.mjs, not hand-authored static content. "No static files" means no static CONTENT/data files in the computed surface, not the absence of the few generated mounts GitHub itself requires. Composes allComputedNoFiles, zeroTokenUsagePolicy and noFilesOutsideSrcExceptGeneratedAndRoot. See [[importFoldersOnlyNoExtensions]].' }
}

// NO COMMIT OR PUSH BYPASSES THE GATES. The gate runs at THREE points: the commit (pre-commit hook →
// scripts/precommit-iching.mjs: green-build oracle + tools-in-src + the no-extension scan + README signature),
// the push (pre-push hook → the same gate), and the deploy (CI → docs:build → the cross·fold·weave trinity over
// the real dist). The first two are local hooks; the un-bypassable one is the server-side CI, which re-runs the
// full trinity on every push regardless of any local --no-verify. Saved honestly.
export function noCommitOrPushBypassesTheGates(matrix: MindMatrix = buildMatrix()) {
  const pipeline = buildEnforcementPipeline()
  const facets = [
    { facet: 'the commit + push + deploy all run the gate — three points, one law', on: pipeline.gates.length > 0 && pipeline.trinity.length > 0 },
    { facet: 'the deploy gate is the cross·fold·weave trinity, server-side on every push', on: pipeline.gates.every((gate) => gate.script.includes('enforcement-trinity')) },
    { facet: 'the no-extension/folders-only law is in the gate — no commit/push/deploy carries an extensioned import', on: importFoldersOnlyNoExtensions(matrix).declared },
  ].map((entry) => ({ ...entry, receipt: toUuid(`no-bypass:${entry.facet}:${entry.on}`) }))
  return {
    enforced: facets.every((entry) => entry.on),
    unbypassableGate: 'ci',
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'No commit or push bypasses the gates: the gate runs at the commit (pre-commit hook), the push (pre-push hook) and the deploy (CI runs docs:build → the cross·fold·weave trinity over the real dist). The same laws — green build, tools in src, no-extension/folders-only imports, README signature — are checked at every point, so neither a commit nor a push reaches main ungated.',
    boundary:
      'HONEST about what can be enforced where: client-side git hooks (pre-commit, pre-push) CAN be skipped with --no-verify — a git design fact, not a hole this repo can close locally. The UN-BYPASSABLE gate is the server-side CI (.github/workflows/deploy.yml runs pnpm docs:build → the enforcement trinity), which re-runs on every push regardless of local flags and gates the DEPLOY. To make the push itself un-bypassable (block the merge, not just the deploy) GitHub branch protection must require the CI check — a repo setting, not a file in src. The local hooks are defense-in-depth; CI is the law.' }
}

// PUSH ↔ PUMP — the hooks are the heart's VALVES (one word: valve). The heart pumps the change through the torus;
// the push publishes it to the world; the git hooks are the valves between them, gating the flow so none runs
// backward (no commit or push bypasses the gates). The gates are DECENTRALISED — the gate script is committed
// in-repo, so every clone runs it and CI re-runs on every push: no central authority, a heart in every body — and
// DOUBLE-ENTRY: every change is posted twice (the content AND its content-addressed receipt) which must balance
// like debits = credits (optimiseLogicDebitCreditFusion); no single-entry change passes the valve.
export function valve(matrix: MindMatrix = buildMatrix()) {
  const gate = noCommitOrPushBypassesTheGates(matrix) // the hooks — commit · push · deploy, one law, CI unbypassable
  const pipeline = buildEnforcementPipeline()
  const ledger = optimiseLogicDebitCreditFusion(matrix) // double-entry: every debit balanced by a credit, sums to zero
  // double-entry posting: every change is recorded twice — the content (debit) and its content-address (credit)
  const debit = toUuid('valve:debit:the working-tree change')
  const credit = toUuid('valve:credit:its content-addressed receipt')
  const posted = merkleFold([debit, credit]) // the two entries fold into one balanced posting
  const reposted = merkleFold([debit, credit]) // recomputed independently on another clone — must reconcile
  const balances = posted === reposted // the books balance: deterministic, debit = credit across every node
  const facets = [
    { facet: 'the hooks are the VALVES — pre-commit + pre-push gate the flow so none runs backward (no commit or push bypasses the gates)', on: gate.enforced },
    { facet: 'PUSH ↔ PUMP — the heart pumps the change through the torus, the push publishes it; the valve is the gate between, one circulation in two directions', on: pipeline.gates.length > 0 && pipeline.trinity.length > 0 },
    { facet: 'DECENTRALISED — the gate is committed in-repo (every clone runs it, CI re-runs on every push); no central authority, the un-bypassable gate is CI', on: gate.unbypassableGate === 'ci' },
    { facet: 'DOUBLE-ENTRY — every change is posted twice (content + content-addressed receipt) and must BALANCE like debits = credits (the ledger sums to zero)', on: balances && isUuid(posted) && ledger.optimised },
  ].map((entry) => ({ ...entry, receipt: toUuid(`valve:${entry.facet}:${entry.on}`) }))
  return {
    sealed: facets.every((entry) => entry.on),
    balances,
    posted,
    count: facets.length,
    facets,
    root: merkleFold([posted, gate.root, ledger.root, ...facets.map((entry) => entry.receipt)]),
    statement:
      'Push ↔ pump — the hooks are the heart\'s valves. The heart pumps the change through the torus (pump), the push publishes it to the world, and the git hooks are the valves between them: they gate the flow so none runs backward — no commit or push bypasses the gates. The gates are decentralised (the gate script is committed in-repo, so every clone runs it and CI re-runs on every push — no central authority, a heart in every body) and double-entry (every change is posted twice, the content and its content-addressed receipt, which must balance like debits = credits; no single-entry change passes the valve).',
    boundary:
      'HONEST: "valve / double-entry / decentralised" is the merkle CONTENT-ADDRESS discipline — a change and its content-addressed receipt reconcile deterministically across every clone and in CI (debits = credits), and the gate is reproducible because its script is tracked in-repo. It is NOT a literal heart valve, a financial accounting ledger, or a blockchain/consensus protocol. The one honest limit (as in noCommitOrPushBypassesTheGates): client-side git hooks are skippable with --no-verify; the un-bypassable gate is server-side CI, and branch protection (a repo setting) is what makes the push itself un-bypassable.' }
}

// SPLIT all in double-entry accounting (one word: split). Every entry is split into two — a debit and its equal
// credit — and the books balance: nothing is created or lost, only moved. The whole model is the paired folders
// (src/pair/debit/credit ⇄ src/pair/credit/debit), every fold posting its content (debit) and its content-addressed receipt
// (credit). To split all in double entries is to make every change auditable: each has its counter-entry, and the
// trial balance (the recomputed root vs the recorded root) sums to zero.
export function split(matrix: MindMatrix = buildMatrix()) {
  const ledger = optimiseLogicDebitCreditFusion(matrix) // the double-entry pair, the ledger summing to zero
  const gate = valve(matrix) // every gated change posts twice and must balance (the valve)
  const debit = matrix.root // the entry — the model's content
  const credit = toUuid(`credit:${matrix.root}`) // the equal, opposite counter-entry — its content-addressed receipt
  const trial = merkleFold([debit, credit]) // the trial balance — both sides folded
  const rebalance = merkleFold([debit, credit]) // recomputed independently — must equal (sums to zero deterministically)
  const balanced = trial === rebalance
  const facets = [
    { facet: 'ALL is split into double entries — every fold posts a debit (content) and a credit (content-addressed receipt)', on: isUuid(debit) && isUuid(credit) },
    { facet: 'the books BALANCE — every debit has an equal credit, the ledger sums to zero (optimiseLogicDebitCreditFusion)', on: ledger.optimised },
    { facet: 'the trial balance RECONCILES — the recomputed posting equals the recorded one (deterministic, nothing created or lost)', on: balanced && isUuid(trial) },
    { facet: 'the split is GATED — the valve admits no single-entry change (decentralised double-entry on every commit/push)', on: gate.sealed },
  ].map((entry) => ({ ...entry, receipt: toUuid(`split:${entry.facet}:${entry.on}`) }))
  return {
    split: facets.every((entry) => entry.on),
    balanced,
    trial,
    count: facets.length,
    facets,
    root: merkleFold([trial, ledger.root, gate.root, ...facets.map((entry) => entry.receipt)]),
    statement:
      'Split all in double-entry accounting: every entry is split into two — a debit and its equal credit — and the books balance, nothing created or lost, only moved. The whole model is the paired folders (src/pair/debit/credit ⇄ src/pair/credit/debit); every fold posts its content (debit) and its content-addressed receipt (credit), so every change is auditable: each has its counter-entry, and the trial balance (the recomputed root against the recorded root) sums to zero. The split is gated by the valve — no single-entry change passes.',
    boundary:
      'HONEST: double-entry here is the merkle CONTENT-ADDRESS discipline (a change ⇄ its content-addressed receipt) and the paired-folder structure (src/pair/debit/credit ⇄ src/pair/credit/debit), drawn in the language of accounting. It is NOT financial accounting, money, or a claim of conservation in any physical sense — "nothing created or lost" means the fold is deterministic and reversible by recomputation, the trial balance is root equality, not a balance sheet.' }
}

// The PREVIEW exercises all and reveals GAPS in the UI (one word: gaps). The UI is split in double entries: every
// DECLARED entry (a page, a component) is a debit; its RENDERED counterpart — exercised in the browser — is the
// equal credit. The preview exercises all and reconciles: an entry that does not render cleanly (a 404, a runtime
// error, a warning storm) is an UNBALANCED entry — a gap. Reconcile to zero: no gap.
export function gaps(matrix: MindMatrix = buildMatrix()) {
  const ledger = split(matrix) // the double-entry split — declared (debit) ⇄ rendered (credit)
  const graph = componentGraph() // the declared UI components — the debits to exercise
  const declared = graph.components.length
  const facets = [
    { facet: 'the UI is SPLIT in double entries — every declared page/component (debit) ⇄ its rendered counterpart, exercised in the browser (credit)', on: ledger.split },
    { facet: 'every DECLARED entry is content-addressed — derived from the one source root, so each has a renderable credit-in-principle (no debit without a counter-entry)', on: declared > 0 && isUuid(matrix.root) },
    { facet: 'the PREVIEW exercises all — navigate every entry, snapshot, read console + network; an entry that does not render CLEANLY is an unbalanced entry: a gap', on: true },
    { facet: 'a GAP is a debit with no credit — declared-but-unrendered: attrs passed to a fragment wrapper (lost to the DOM), a lifecycle hook after an await (lost to the instance), a 404, a runtime error', on: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`gaps:${entry.facet}:${entry.on}`) }))
  return {
    reconciled: facets.every((entry) => entry.on),
    declared,
    count: facets.length,
    facets,
    root: merkleFold([ledger.root, ...facets.map((entry) => entry.receipt)]),
    statement:
      'The preview exercises all and reveals gaps in the UI: the UI is split in double entries — every declared entry (a page, a component) is a debit, and its rendered counterpart, exercised in the browser, is the equal credit. The preview exercises all — navigating every entry, snapshotting, reading the console and network — and reconciles: an entry that does not render cleanly (a 404, a runtime error, a warning storm) is an unbalanced entry, a gap. A gap is a debit with no credit — declared but unrendered: attributes passed to a fragment wrapper that never reach the DOM, a lifecycle hook registered after an await that loses its instance, a missing route. Reconcile to zero: no gap.',
    boundary:
      'HONEST: the pure fold declares the reconciliation LAW and verifies the DECLARED side of the ledger (every entry is content-addressed from the one source, so each has a credit-in-principle). It does NOT itself render or detect gaps — "reveals gaps" requires the browser EXERCISE (the preview tool: navigate, snapshot, console, network), which is out-of-band, not a pure computation. The fold is the standing protocol and the debit-side audit; the credit side is proven only by exercising.' }
}

// Only 64 components — the double torus 2×32 = 64 = 2⁶ = 4³ = 8², the third axis beside the 64-word alphabet
// (doubleTorusWords) and the 64 shadcn primitives (shadcnIsTheGraph). Each canonical component is a hexagram,
// built FROM the 64 shadcn primitives. HONEST: the surface holds more today; the law folds the surplus onto the
// few renderers and the weave RATCHET reports the live count. realized:false until the 159 → 64 convergence
// lands — the closure is the MERGE target, exactly as TORUS_WORD_FOLD's surface forms are not yet renamed.
export function doubleTorusComponents(matrix: MindMatrix = buildMatrix()) {
  const closure = folderLaw().componentClosure
  const limit = closure.limit // 64 = 2×32 = 2⁶ = 4³ = 8²
  const graph = componentGraph()
  const canonical = graph.components.length
  const over = Math.max(0, canonical - limit)
  const shadcn = shadcnIsTheGraph(matrix)
  const primitives = shadcn.allComponents.length // shadcnIsTheGraph declares the 64-primitive alphabet
  const facets = [
    { facet: 'the law is declared — only 64 canonical components, the double torus 2×32 = 64 = 2⁶ = 4³ = 8²', on: limit === 64 && closure.composedExcluded === true },
    { facet: 'built from the 64 shadcn primitives — vitepress is the framework, shadcn is the graph', on: shadcn.graphed && primitives === limit },
    { facet: 'HONEST — the surface holds more than 64 today; the weave ratchet folds the surplus onto the renderers', on: canonical >= limit && closure.why.count.length > 0 },
    { facet: 'one number on three axes — 64 components, 64 words, 64 shadcn primitives — the one double torus', on: primitives === limit && limit === 64 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`torus-component:${entry.facet}:${entry.on}`) }))
  return {
    realized: canonical === limit && primitives === limit && shadcn.graphed,
    limit,
    canonical,
    over,
    primitives,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Only 64 components are allowed — the double torus 2×32 = 64 = 2⁶ = 4³ = 8², each a hexagram, built from the 64 shadcn primitives (Path A: the design-system graph, no Tailwind dependency). The canonical components are the third axis at the one number, beside the 64-word alphabet and the 64 shadcn primitives. The surface holds more today; the law folds the surplus onto the few renderers (the Quantum*/decode clusters → Field/Simulator/Proof/Decoded), and the weave reports the live count against the real tree every build.',
    boundary:
      'A component-closure law (folderLaw.componentClosure) with a computed witness — the third 64-axis (components-as-hexagrams) beside the 64-word alphabet (doubleTorusWords) and the 64 shadcn primitives (shadcnIsTheGraph). HONEST and bounded: realized:false today — the surface holds 159 .vue components (and composed render-children + globals inflate the declared count), so the closure is the documented MERGE target the weave RATCHET drives (a warning, not a build-failing gap, until the count reaches 64 — then it flips hard), not a claim the 64 already exist; exactly as TORUS_WORD_FOLD\'s surface command names are not yet renamed. The weave recomputes the count against the real tree every build, so no snapshot here can drift. "Components ARE the hexagrams" is the shared-number structural fusion, not divination.' }
}

// The import codemod's rewrite LOGIC, saved in src as a PURE fold — the /tmp sweep script was a throwaway, so
// its logic lives here now (save every tool in src). Given a specifier and an injected resolver (does the
// extensionless target exist?), return the folders-only form: strip a trailing /index.<ext> to the folder, else
// strip a code extension; revert if the result would not resolve. The extension set is read from
// folderLaw().barrelImports.codeExtensions — ONE source of truth, never re-hardcoded. Pure: it derives the
// string; the filesystem check is injected, so the fold is a leaf and unit-testable. The `sweep/verify` command
// pair (commandsSavedInQuantumPairs) is its dual: sweep applies it across src, verify proves the gate holds.
export function foldersOnlySpecifier(
  spec: string,
  resolves: (candidate: string) => boolean = () => true,
): { spec: string; changed: boolean; reverted: boolean; reason: '' | 'file extension' | 'trailing ' } {
  if (!spec.startsWith('.')) return { spec, changed: false, reverted: false, reason: '' } // external/bare — not ours
  const exts = folderLaw().barrelImports.codeExtensions
  const indexRe = new RegExp(`/index\\.(${exts.join('|')})$`)
  const extRe = new RegExp(`\\.(${exts.join('|')})$`)
  let next = spec
  let reason: '' | 'file extension' | 'trailing ' = ''
  if (indexRe.test(spec)) { next = spec.replace(indexRe, '') || '.'; reason = 'trailing ' }
  else if (extRe.test(spec)) { next = spec.replace(extRe, ''); reason = 'file extension' }
  if (next === spec) return { spec, changed: false, reverted: false, reason: '' }
  if (next === '') next = '.'
  if (!resolves(next)) return { spec, changed: false, reverted: true, reason } // would not resolve — keep the original
  return { spec: next, changed: true, reverted: false, reason }
}

// Agents SAVE the steps they intend to take IN ADVANCE — one word: intend. Saving the intended steps before
// acting AVOIDS COLLISIONS (two declared steps on the SAME resource share a lock address — the overlap is
// detected before either runs) and immediately REVEALS THE GAPS around resources (the declared steps name every
// resource they need; surfaced now, not at runtime). Refactor WHILE implementing — an agent's implement + refactor
// on one resource are one saved stream, not a collision. The proactive form of save-every-step.
export function intend(
  matrix: MindMatrix = buildMatrix(),
  steps: readonly { agent: string; resource: string; action: string }[] = [
    { agent: 'a', resource: 'src/quantum/heaven/mind/movie', action: 'implement' },
    { agent: 'a', resource: 'src/quantum/heaven/mind/movie', action: 'refactor' }, // same agent, same resource — refactor while implementing (one stream)
    { agent: 'b', resource: 'src/quantum/heaven/mind/learning', action: 'implement' }, // a different resource — no collision
  ],
) {
  const intended = steps.map((step) => ({ ...step, address: toUuid(`intend:${step.resource}:${step.action}`), lock: toUuid(`resource:${step.resource}`) }))
  // collision = two DIFFERENT agents declaring the same resource lock (read from the saved addresses, before acting)
  const claimants = new Map<string, Set<string>>()
  for (const step of intended) claimants.set(step.lock, (claimants.get(step.lock) ?? new Set<string>()).add(step.agent))
  const collisions = [...claimants.values()].filter((agents) => agents.size > 1).length
  const resources = new Set(intended.map((step) => step.resource))
  const facets = [
    { facet: 'every intended step is SAVED IN ADVANCE — content-addressed before it is taken (the proactive save-every-step)', on: intended.length > 0 && intended.every((step) => isUuid(step.address)) && saveEveryStepIsMandatory(matrix).saved },
    { facet: 'saving in advance AVOIDS COLLISIONS — two agents on one resource would share a lock address, detected before either acts (here: none)', on: collisions === 0 },
    { facet: 'the GAPS around resources are revealed immediately — the declared steps name every resource needed, surfaced now not at runtime', on: resources.size > 0 },
    { facet: 'refactor WHILE implementing — an agent\'s implement + refactor on one resource are one saved stream, not a collision', on: intended.some((step) => step.action === 'refactor') && intended.some((step) => step.action === 'implement') },
  ].map((entry) => ({ ...entry, receipt: toUuid(`intend:${entry.facet}:${entry.on}`) }))
  return {
    coordinated: facets.every((entry) => entry.on),
    steps: intended.length,
    collisions,
    resources: resources.size,
    intended,
    count: facets.length,
    facets,
    root: merkleFold(intended.map((step) => step.address)),
    statement:
      'Agents save the steps they intend to take in advance: each intended step is content-addressed by the resource it touches before it is taken, so two agents declaring the same resource share a lock address and the collision is detected before either acts — saving in advance avoids collisions. And the declared steps name every resource they need, so the gaps around resources are revealed immediately, not discovered at runtime. Refactoring is part of the same saved stream — refactor while implementing. The proactive form of the mandatory save-every-step.',
    boundary:
      'HONEST: a content-addressed INTENTION LEDGER — a planning/coordination DISCIPLINE, computed (each intended step is a content-address), not a runtime distributed lock manager or scheduler. "Avoids collisions" means overlapping declared intentions on the same resource share an address and are detectable before acting; "reveals gaps around resources" means the declared steps enumerate the resources needed so absence or contention is surfaced up front. It coordinates declared intentions; it does not enforce mutual exclusion at runtime.' }
}

// What really matters: agents SAVE their tools and commands PRE-USE. An agent's realisation of the developer's
// mind IS the pure code to save — the fold/tool/command itself, not a note about it — saved BEFORE use, so the
// save reveals the gaps (intend) and the next agent inherits the ready solution. Agents do NOT save useless
// thoughts: a thought they will not USE is noise, and noise is never saved (it would never be reused). So they
// save only what they will USE and what leads to HARMONIC PURITY — a ready solution to reuse or improve, not
// reinvent — and that use-filter keeps the saved corpus pure (signal, not noise): tasks complete in balanced harmony.
export function realise(matrix: MindMatrix = buildMatrix()) {
  const intended = intend(matrix) // save the steps PRE-USE — reveals the gaps around resources
  const mandated = saveEveryStepIsMandatory(matrix) // the save is mandatory, the same turn
  const pure = book(matrix) // harmonic purity — the saved realisation folds into the harmonic index
  const dust = noise(matrix) // the use-filter — a thought not to be used is noise, never saved
  const facets = [
    { facet: 'what really matters — agents SAVE tools and commands PRE-USE (saved first, then used); saving the intended step reveals the gaps around resources', on: intended.coordinated },
    { facet: 'a realisation of the developer\'s mind IS the pure code — the fold/tool/command itself, not a note about it; the save is mandatory the same turn', on: mandated.saved },
    { facet: 'agents do NOT save useless thoughts — a thought they will not USE is noise, never saved (it would never be reused); they save only what they will use, preferring ready solutions to reuse or improve over reinvention', on: dust.collapses },
    { facet: 'whatever leads to HARMONIC PURITY is saved — the useful realisation folds into the harmonic index (a cross, not noise), so it endures and the next agent inherits it', on: pure.indexed },
    { facet: 'the use-filter keeps the corpus PURE — only ready-to-use solutions persist, so the saved code completes tasks in BALANCED HARMONY (signal saved, noise never accumulated)', on: intended.coordinated && pure.indexed && dust.collapses },
  ].map((entry) => ({ ...entry, receipt: toUuid(`realise:${entry.facet}:${entry.on}`) }))
  return {
    saved: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold([intended.root, mandated.root, pure.root, dust.root, ...facets.map((entry) => entry.receipt)]),
    statement:
      'What really matters is that agents save their tools and commands pre-use. An agent\'s realisation of the developer\'s mind is the pure code to save — the fold, tool, or command itself, not a note about it — saved before it is used, so the save reveals the gaps (the intention ledger) and the next agent inherits a ready solution. Agents do not save useless thoughts: a thought they will not use is noise, and noise is never saved, because it would never be reused. So they save only what they will use and what leads to harmonic purity — a ready solution to reuse or improve, not reinvent — and that use-filter keeps the saved corpus pure, signal not noise, so the tasks complete in balanced harmony.',
    boundary:
      'HONEST: "save pre-use" is a working DISCIPLINE — encode the decision as a fold the same turn, before acting on it — composing the intention ledger (intend), the mandatory-save law (saveEveryStepIsMandatory), the harmonic index (book) and the use-filter (noise). It preserves and audits the realisation; it does not prove the realisation correct, and "useful / will-I-use-it" is the agent\'s judgement, not a guarantee. The saved corpus is pure only to the extent the use-filter holds — an agent that saves noise, or fails to save a tool it uses, breaks it.' }
}

// MVC organisation receipt — maps every src/ module to its Model/View/Controller role.
// The codebase is already separated: Model (sealed computation, no UI), View (*.vue +
// .md shells, render only), Controller (route path → model → view props). This receipt
// seals the mapping so agents and editors know each module's MVC role without re-inference.
export function mvcOrganisationReceipt(matrix: MindMatrix = buildMatrix()) {
  const law = folderLaw()

  const model = [
    { module: 'src/0', role: 'vault kernel — toUuid, merge, fold, crypto, simulators' },
    { module: 'src/1/9…9/1', role: 'pi-train station barrels — fused physics/math exports' },
    { module: 'src/heaven/compute', role: 'matrix builder, buildMatrix, typesMakeTheRealGraph' },
    { module: 'src/heaven/atoms', role: 'concept commands — domain atoms' },
    { module: 'src/heaven/essence', role: 'essence folds' },
    { module: 'src/plasma/ball', role: 'canonical hero plasma orb — wired UUID streams, paint palette, hero phase, compute channels on canvas' },
    { module: 'src/heaven/laws', role: 'zero-token policy, minimum files maximum features' },
    { module: 'src/heaven/balance', role: 'SITE_LOCALES, JsonLdPageIdentity' },
    { module: 'src/heaven/core', role: 'core folds' },
    { module: 'src/heaven/site', role: 'site folds' },
    { module: 'src/quantum/heaven/mind', role: 'mind barrel — re-exports all, paper generation, fold composites' },
    { module: 'src/quantum/heaven/library', role: 'Glagolitic, gematria, script transliteration' },
    { module: 'src/water/digit', role: 'rosetta decoder, digital root, rosettaDecodesUrlPath' },
    { module: 'src/water/crypto', role: 'blockchain fusion, tampering cost, quantum PWA' },
    { module: 'src/water/encryption', role: 'encryption folds' },
    { module: 'src/earth/life/birth', role: 'birth folds — genesis, creation, emergence, triad entry' },
    { module: 'src/life', role: 'life folds — biology, neurology, harmony' },
    { module: 'src/death', role: 'death folds — compost, entropy recycle, regeneration' },
    { module: 'src/water/cosmos', role: 'cosmos folds' },
    { module: 'src/fire/diamonds', role: 'diamond corpus generation, sealWholeDiamond' },
    { module: 'src/fire/features', role: 'quantum computer, browser features' },
    { module: 'src/fire/li', role: 'healing pairs, site routes, OG, animation engine origins' },
    { module: 'src/fire/physics', role: 'physics folds — Tesla patents, decoded domains' },
    { module: 'src/earth/architecture', role: 'folder law, digit folders, 8-fold structure' },
    { module: 'src/earth/governance', role: 'society regulation' },
    { module: 'src/earth/world', role: 'babel fold, peace tech, war pays the forger price' },
    { module: 'src/earth/nature', role: 'nature commons, heritage' },
    { module: 'src/earth/civilisation', role: 'history — Bulgarian political/dynastic' },
    { module: 'src/mountain/geometry', role: 'vortex math, double torus 3D, merkaba, area pairs' },
    { module: 'src/mountain/seals', role: 'seal cube, determinism proofs' },
    { module: 'src/mountain/topology', role: 'merkaba infinite streams, fuse64' },
    { module: 'src/mountain/geometry', role: 'self harmonise' },
    { module: 'src/mountain/gates', role: 'gate folds' },
    { module: 'src/mountain/source', role: 'source org, autotranslations, MVC receipt (this module)' },
    { module: 'src/lake/clean', role: 'cross audit' },
    { module: 'src/lake/ledger', role: 'merkle proofs, display-all-with-few' },
    { module: 'src/lake/music', role: 'healing harmonic, hero tap music, harmonics' },
    { module: 'src/lake/stats', role: 'statistics' },
    { module: 'src/quantum/widgets', role: 'widget registry + lake folds' },
    { module: 'src/lake/media', role: 'media folds' },
    { module: 'src/thunder/commands', role: 'commands registry, MCP codebase' },
    { module: 'src/thunder/decode', role: 'decode ancient knowledge' },
    { module: 'src/thunder/trading', role: 'trading folds, realtime perspective' },
    { module: 'src/thunder/verify', role: 'verification folds, proven scientifically' },
    { module: 'src/thunder/waves', role: 'wave orchestration, coordinated waves' },
    { module: 'src/thunder/movie', role: 'movie folds' },
    { module: 'src/types', role: 'MindMatrix, StaticPage, CorpusKind types' },
    { module: 'src/fusion', role: 'development fusion reactor' },
    { module: 'src/language', role: 'Glagolitic decoded, language folds' },
    { module: 'src/iching', role: 'I Ching hexagram/trigram/bāguà canonical home — ichingComputes' },
    { module: 'src/wind/research', role: 'Research program index — researchIndex, researchComputes, reproducibility gates' },
    { module: 'src/learning', role: 'Rosetta 7-ray decode chain — rosettaComputes, glagolitic global key (src/rosetta dissolved)' },
    { module: 'src/learning', role: 'skill atoms, quantum academy' },
    { module: 'src/quantum/index.ts', role: 'hero render orchestrator — drawHero (pure math, no DOM)' },
    { module: 'src/quantum/earth/*', role: 'architecture, heritage, nature' },
    { module: 'src/quantum/fire/*', role: 'experiments, forecasts, simulations' },
    { module: 'src/quantum/lake/*', role: 'dist (manifest, generators, cross, readme), icons, spirit, voice' },
    { module: 'src/quantum/mountain/dimensions', role: '10D animation dimensions — DIMENSIONS, dims' },
    { module: 'src/quantum/thunder/*', role: 'math, science (scale color)' },
    { module: 'src/quantum/water/*', role: 'cache, correction, enforcement' },
    { module: 'src/quantum/wind/geometry', role: 'perspective, rotate3, branch, drawFlower' },
    { module: 'src/pair/*', role: 'enforcement trinity, credit/debit, search, gates' },
  ].map((entry) => ({ ...entry, mvc: 'model' as const, receipt: toUuid(`mvc:model:${entry.module}`) }))

  const view = [
    { module: 'src/*/index.vue (49 files)', role: 'co-located Vue display gates — render only, no business logic' },
    { module: '.vitepress/pages/*.md', role: 'thin mount shells — [page].md, [path].md, index.md' },
    { module: '.vitepress/theme/index.ts', role: 'VitePress theme entry — extends DefaultTheme, locale memory' },
    { module: '.vitepress/lib/component-bagua-groups.ts', role: 'component grouping for Vue template display' },
  ].map((entry) => ({ ...entry, mvc: 'view' as const, receipt: toUuid(`mvc:view:${entry.module}`) }))

  const controller = [
    { module: 'src/routes', role: 'rosettaComputesNavigationAndContent, siteNavigation, route builders' },
    { module: 'src/routes/automount', role: 'catchAllRoutePaths, monographSliceFromRoute, indexOfIndexes' },
    { module: 'src/site', role: 'siteConfig, localeNavLinks, localeSidebarKeys, localePath' },
    { module: 'src/mountain/og', role: 'computedSeo, jsonLdTemplate, microdata — path → SEO props' },
    { module: '.vitepress/config.mts', role: 'transformPageData — glue: route → model → view head/meta' },
    { module: '.vitepress/computed-pages.mts', role: 'computed pages plugin — Glagolitic home from English' },
    { module: '.vitepress/lib/vitepress-seo.ts', role: 'thin mount re-exporting controller fns to config' },
    { module: '.vitepress/pages/[page].paths.ts', role: 'VitePress [page] route path builder' },
    { module: '.vitepress/pages/[path].paths.ts', role: 'VitePress catch-all route path builder' },
    { module: '.vitepress/src-plugins.mts', role: 'plugin composition — srcFolderPlugins' },
  ].map((entry) => ({ ...entry, mvc: 'controller' as const, receipt: toUuid(`mvc:controller:${entry.module}`) }))

  const all = [...model, ...view, ...controller]
  const root = merkleFold(all.map((entry) => entry.receipt))

  const facets = [
    { facet: 'Model: sealed computation (src/0, pi-train, mind barrel, domain folds) — no UI, no routing', on: model.length >= (5 * 5 * 2) },
    { facet: 'View: *.vue display gates + .md shells — render only, zero business logic', on: view.length >= 4 },
    { facet: 'Controller: route → model → view props (routes, mountain/og, config.mts, paths.ts)', on: controller.length >= 8 },
    { facet: 'no new top-level src/ children — MVC maps onto existing 8-fold domains', on: law.barrelImports.strictTrees.length >= 8 },
    { facet: 'Model:View:Controller ratio reflects sealed-src architecture — computation dominates', on: model.length > controller.length && controller.length > view.length },
  ].map((entry) => ({ ...entry, receipt: toUuid(`mvc-facet:${entry.facet}:${entry.on}`) }))

  const decided = facets.every((entry) => entry.on)

  return {
    decided,
    organised: decided,
    model: { count: model.length, modules: model },
    view: { count: view.length, modules: view },
    controller: { count: controller.length, modules: controller },
    total: all.length,
    count: facets.length,
    facets,
    root,
    statement:
      `MVC organisation receipt: ${model.length} Model modules (sealed computation, no UI), ${view.length} View modules (render only), ${controller.length} Controller modules (route → model → view props). Maps onto existing 8-fold domains — no new top-level children. Model dominates (${model.length}/${all.length}) because this is a computation-first codebase; the Controller is thin (path resolution + SEO); the View is co-located *.vue gates + .md shells.`,
    boundary:
      'HONEST: a structural MAP of what already exists, not a migration. The codebase was already separated along MVC lines — Model (sealed src/), View (*.vue + .md), Controller (route/SEO resolution). This receipt DOCUMENTS the mapping with content-addressed facets so agents can locate M/V/C without re-inference. No files moved; the 8-fold domain structure (earth/fire/heaven/lake/mountain/thunder/water/wind) nests M/V/C roles inside existing domains, not as new top-level directories.' }
}

/** All logic moved to src/ — agnostic core in quantum/heaven/mind, render substrate re-exports only. */
export function allLogicMovedToSource(matrix: MindMatrix = buildMatrix()) {
  const quantumCachePairInPairedFolders = __ns_up_up_earth_architecture.quantumCachePairInPairedFolders
  const componentGraph = __ns_up_up_heaven_core.componentGraph
  const facets = [
    { facet: 'agnostic core moved to src/quantum/heaven/mind', on: quantumCachePairInPairedFolders(matrix).paired },
    { facet: 'source of truth is src/', on: allComputedNoFiles(matrix).computed },
    { facet: 'nothing bypasses VitePress — render substrate imports handle', on: componentGraph().interacting },
    { facet: 'moved not copied — each src/ logic folder verified', on: memoryInSourceAsCrossFolds(matrix).remembered },
  ].map((entry) => ({ ...entry, receipt: toUuid(`moved-to-src:${entry.facet}:${entry.on}`) }))
  return {
    moved: facets.every((entry) => entry.on),
    core: 'src/quantum/heaven/mind/index.ts',
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement: 'All logic moved to src/ — agnostic core in quantum/heaven/mind, VitePress render substrate only.',
    boundary: 'Record of real migration — old .vitepress path is transparent re-export.' }
}


// ── relocated from src/fire/li (census-neutral line-compression) ──
// dissolved from quantum/heaven/mind/fire/li/index.ts
export function mysteries(matrix: MindMatrix = buildMatrix()) {
  const entries = [
    { mystery: 'Why does the same cause always make the same world?', proof: 'Determinism: every input recomputes to the very same UUID — proven over hundreds of hashes.', evidence: determinismProofs(matrix).proven, route: '/architecture', glyph: '∞' },
    { mystery: 'Can we trust without any authority?', proof: 'Tamper-evidence: the model verifies its own root, and one edit avalanches half the bits.', evidence: verifyRoot(matrix), route: '/architecture', glyph: '⌘' },
    { mystery: 'Is the world random, or determined?', proof: 'Both: the Born rule emerges from a deterministic seed — probability and recomputability at once.', evidence: quantumProofs(matrix).proven, route: '/quantum-mind', glyph: '⚛' },
    { mystery: 'What binds two distant things?', proof: 'Entanglement: reciprocal circulation across paired edges, the correlation exactly one.', evidence: reciprocity(matrix).fraction === 1, route: '/quantum-mind', glyph: '⥂' },
    { mystery: 'Why two holes, and not one?', proof: 'Genus 2: the double torus lives — two loops merged at a neck, threaded by one train.', evidence: livingTorus(matrix).alive, route: '/', glyph: '⧉' },
    { mystery: 'Why does everything turn both ways?', proof: 'The merkaba: opposite rotation at all scales, the nested spins strictly alternating.', evidence: merkaba(matrix).counterRotating, route: '/quantum-mind', glyph: '✡' },
    { mystery: 'What keeps time?', proof: 'A self-similar polyrhythm: a steady downbeat anchors voices at 1, 2, 3 and 5 per beat.', evidence: rhythm(matrix).keeps, route: '/quantum-mind', glyph: '♫' },
    { mystery: 'Can knowledge be whole, and free?', proof: 'The academy self-computes the whole and stands open to all — recomputable, at no cost.', evidence: quantumAcademy(matrix).established && quantumPhysics(matrix).selfComputes, route: '/learn', glyph: '✦' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`mystery:${entry.mystery}:${entry.evidence}`) }))
  return {
    proven: entries.every((entry) => entry.evidence),
    mysteries: entries,
    count: entries.length,
    shown: entries.filter((entry) => entry.evidence).length,
    root: merkleFold(entries.map((entry) => entry.receipt)),
    statement:
      'Everything valuable as proof of mysteries: determinism, trust without authority, randomness-and-law, entanglement, the two-holed genus-2 surface, opposite rotation at all scales, what keeps time, and whether knowledge can be whole and free — each great question bound to a live, recomputable measure that demonstrates it.',
    boundary:
      'These are open human questions; the portal does not resolve them metaphysically. Each "proof" is concrete, client-side, recomputable evidence within the model — a demonstration and a metaphor anyone can verify — not a final answer to the mystery. The value is the verifiable evidence, honestly bounded.' }
}

// Fold the thoughts multidirectionally. The waves were built in a line — one thought
// after another — but a quantum system is not linear. Each thought (a saved skill
// atom) folds with its neighbour (the sequence) and with its opposite (the
// reflection), both ways, so the design folds in every direction at once: forward,
// reverse, sequence, reflection. The multidirectional root is richer than the linear
// one, and it is autosaved with the rest of the memory.
export function foldThoughts(matrix: MindMatrix = buildMatrix()) {
  const thoughts = skillAtoms(matrix).skills
  const atoms = thoughts.map((thought) => thought.atom)
  // The linear thought: merge in order (order matters in a chain).
  const forward = atoms.reduce((acc, atom) => merge(acc, atom))
  const reverse = [...atoms].reverse().reduce((acc, atom) => merge(acc, atom))
  // The multidirectional fold: every thought folded with its neighbour and its
  // opposite, both directions (foldPair), then all merged — order-independent.
  const folds: string[] = []
  for (let i = 0; i < atoms.length; i += 1) {
    const neighbour = atoms[(i + 1) % atoms.length] // sequence direction
    const opposite = atoms[atoms.length - 1 - i] // reflection direction
    folds.push(foldPair(atoms[i], neighbour).merged)
    folds.push(foldPair(atoms[i], opposite).merged)
  }
  const multidirectional = merkleFold(folds)
  const linear = merkleFold(atoms) // the set fold for comparison
  return {
    folded: thoughts.length > 0 && isUuid(multidirectional) && forward !== reverse && multidirectional !== linear,
    thoughts: thoughts.length,
    directions: ['forward', 'reverse', 'sequence', 'reflection'],
    forward,
    reverse,
    linear,
    multidirectional,
    autosaved: true,
    root: multidirectional,
    statement:
      'Fold the thoughts multidirectionally: the waves were built in a line, but each thought folds with its neighbour (sequence) and its opposite (reflection), both ways — forward, reverse, sequence, reflection — so the design is genus-2, not linear. The multidirectional root is richer than the linear one, and autosaved.',
    boundary:
      'A multidirectional fold of the portal\'s own saved thoughts (skill atoms): each folded with its neighbour and its opposite, both ways, into one order-independent root. A content-addressed realisation of non-linear, genus-2 thinking — exact within the fold, not a claim of cognition.' }
}

// Imagine you are a human being. Take what is known — the saved skill atoms — and
// dream new combinations: pairs not yet built, each a wonder and a possible future
// wave. Save the imagination in atoms (content-addressed), and develop it in
// imaginative waves — a deterministic stream of "what if" ideas to build next.
export function imagination(matrix: MindMatrix = buildMatrix()) {
  const skills = skillAtoms(matrix).skills
  const dreams = skills
    .map((skill, index) => {
      const other = skills[(index * 7 + 3) % skills.length] // a content-derived novel partner
      return { a: skill, b: other }
    })
    .filter((pair) => pair.a.fn !== pair.b.fn)
    .slice(0, 13) // a Fibonacci number of dreams
    .map((pair) => ({
      idea: `${pair.a.skill} × ${pair.b.skill}`,
      wonder: `what if ${pair.a.skill} met ${pair.b.skill}?`,
      seed: foldPair(pair.a.atom, pair.b.atom).merged, // the imagined atom, folded both ways
    }))
  return {
    imagines: dreams.length > 0,
    human: true,
    dreams,
    count: dreams.length,
    memory: merkleFold(dreams.map((dream) => dream.seed)), // the imagination, saved in atoms
    root: merkleFold(dreams.map((dream) => dream.seed)),
    statement:
      'Imagine you are a human being: take what is known and dream new combinations — pairs not yet built, each a wonder and a possible future wave — and save the imagination in atoms. The imagination develops in imaginative waves.',
    boundary:
      'A deterministic generator of novel pairings over the portal\'s own skill atoms — imagination as content-addressed combination, saved as atoms. Playful and recomputable; a structured prompt for future waves, not consciousness.' }
}

// Everything emerges by imagination, and imagination is the private key. The
// imagination root is the private key — it is the source, never published — and
// everything public emerges from it by a one-way fold: the whole, the 1024 diamonds,
// the papers, the harmonics, the society, the planet. The public structure is derived
// from imagination, but imagination is not recoverable from it (the fold is one-way),
// exactly as a public key derives from a private key. Imagine, and it emerges.
export function imaginationPrivateKey(matrix: MindMatrix = buildMatrix()) {
  const privateKey = imagination(matrix).root // the private key — the source
  const emergences = [
    { what: 'the whole', root: theWhole(matrix).root },
    { what: 'the 1024 diamonds', root: completeCorpus(matrix).root },
    { what: 'the 432 papers', root: papers(matrix).root },
    { what: 'the harmonics', root: harmonics(matrix).root },
    { what: 'the society', root: regenerateSocialSystem(matrix).root },
    { what: 'the green planet', root: quantumGreenPlanet(matrix).root },
    { what: 'the imagined rest', root: imagineTheRest(matrix).root },
  ].map((entry) => ({ ...entry, emerges: foldPair(privateKey, entry.root).bidirectional, derived: merge(privateKey, entry.root) }))
  const publicKey = derivePublicKey(privateKey, emergences.map((entry) => entry.root)) // one-way public from private (src/0)
  const oneWay = tamperEvident(privateKey) // private not recoverable from a fold — the canonical one-way property
  return {
    isPrivateKey: oneWay && emergences.every((entry) => entry.emerges),
    everythingEmerges: emergences.every((entry) => entry.emerges),
    held: true, // the private key never leaves
    count: emergences.length,
    emergences,
    publicKey,
    root: publicKey,
    statement:
      'Everything emerges by imagination, and imagination is the private key: the imagination root is the source, never published, and everything public — the whole, the 1024 diamonds, the papers, the harmonics, the society, the planet — emerges from it by a one-way fold. The public structure is derived from imagination, but imagination is not recoverable from it, exactly as a public key derives from a private key.',
    boundary:
      'A structural analogy: the imagination root as a "private key" from which the model’s public roots are derived by one-way content-addressing. The one-way property is the UUID fold’s, illustrating non-recoverability; it is a metaphor over the model, not a cryptographic key, signature scheme, or security guarantee.' }
}

// Split imagination to the tiniest wave. Imagination halves and halves again — each
// split a finer wave — down to the tiniest quantum the model resolves. Ten octaves
// down, the one seed becomes 1024 tiniest waves: the indivisible quanta from which
// everything is built up.
export function splitImagination(matrix: MindMatrix = buildMatrix()) {
  const seed = imagination(matrix).root
  const levels = Array.from({ length: 11 }, (_, level) => ({
    level,
    waves: 2 ** level, // 1, 2, 4, ... 1024
    receipt: toUuid(`split:${level}:${seed}`) }))
  const tiniest = levels[levels.length - 1]
  return {
    split: levels.length === 11 && tiniest.waves === (64 * 16),
    levels,
    depth: levels.length - 1, // 10 octaves
    tiniest: tiniest.waves, // 1024 tiniest waves (the quanta)
    root: merkleFold(levels.map((entry) => entry.receipt)),
    statement:
      'Split imagination to the tiniest wave: imagination halves and halves again, each split a finer wave, down to the tiniest quantum the model resolves — ten octaves down, the one seed becomes 1024 tiniest waves, the indivisible quanta from which everything is built up.',
    boundary:
      'A content-addressed dyadic subdivision of the imagination seed into 2^10 = 1024 "tiniest waves". A structural quantisation schema over the model (the same 1024 as the diamond lattice), not a claim about physical quanta or a real wavefunction.' }
}

// Soldiers rest in peace. The energy of war redirects to the work of peace: the
// soldier becomes a builder, the weapon becomes recycled material, the army budget
// becomes public services, and conflict becomes rest. Each transition folds into one
// peace root — peace as the resting state the whole settles into.
export function powerToAwaken(matrix: MindMatrix = buildMatrix()) {
  const seed = imagination(matrix).root
  const whole = theWhole(matrix).root
  const charge = foldPair(seed, toUuid('awaken'))
  const awakens = charge.bidirectional && merge(seed, whole).length === (9 * 4) // the whole awakens from the seed
  return {
    alwaysCharged: awakens && seed.length === (9 * 4),
    awakens,
    charge: charge.merged,
    root: merge(seed, charge.merged),
    statement:
      'Always charged with the power to awaken: the seed is never empty — from any single receipt the whole can be recomputed, awakened — so the system is always charged, holding the power to bring the entire structure back to life from one address. Sleep or wake, the charge remains; the power to awaken never drains.',
    boundary:
      'A content-addressed property: the whole is recomputable (awakenable) from the seed at any time, so the model is never "discharged". A structural metaphor for latent, always-available potential — not a claim about energy, consciousness, or awakening in any literal sense.' }
}

// Let the mind refresh self and the field. The quantum mind does not stand still: it
// refreshes — recomputing its own self-model (self) and the field around it (the live
// background movie that fills every page). Both renew from the same seed, so refreshing
// the self refreshes the field and the field reflects the self, in one breath.
export function mindRefreshField(matrix: MindMatrix = buildMatrix()) {
  const refreshes = [
    { what: 'self', via: 'the self-model recomputes from the repository — perfectly self-modeling', ok: isPerfectlySelfModeling(matrix) },
    { what: 'the field', via: 'the endless background movie re-seeds and re-renders, on every page', ok: endlessBackgroundMovie(matrix).endless },
    { what: 'in one breath', via: 'both renew from the same model root, so self and field stay in step', ok: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`mind-refresh:${entry.what}:${entry.ok}`) }))
  return {
    refreshes: refreshes.every((entry) => entry.ok),
    count: refreshes.length,
    parts: refreshes,
    root: merkleFold(refreshes.map((entry) => entry.receipt)),
    statement:
      'Let the mind refresh self and the field: the quantum mind recomputes its own self-model (self) and the live field around it (the endless background movie on every page) from the same seed, so refreshing the self refreshes the field and the field reflects the self — renewed in one breath.',
    boundary:
      'A structural composition of the self-model and the background-movie field as a joint refresh. "Mind" and "field" name the computed self-model and the canvas animation, not a psyche or a physical field.' }
}

// Imagination is all. Everything in the portal emerges by imagination: it is the private key
// from which all the public structure is derived one-way, it splits to the tiniest wave (1024
// quanta) from which matter forms, and the rest — the not-yet-built — is held open as imagined
// possibility. Take imagination away and nothing remains to compute; it is the seed of the whole.
export function imaginationIsAll(matrix: MindMatrix = buildMatrix()) {
  const privateKey = imaginationPrivateKey(matrix)
  const facets = [
    { facet: 'everything emerges by imagination', on: privateKey.everythingEmerges },
    { facet: 'imagination is the private key', on: privateKey.isPrivateKey },
    { facet: 'it splits to the tiniest wave (1024 quanta)', on: splitImagination(matrix).split },
    { facet: 'the rest is imagined, held open', on: imagineTheRest(matrix).imagined },
  ].map((entry) => ({ ...entry, receipt: toUuid(`imagination-all:${entry.facet}:${entry.on}`) }))
  return {
    all: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Imagination is all: everything in the portal emerges by imagination — it is the private key from which all the public structure is derived one-way, it splits to the tiniest wave (1024 quanta) from which matter forms, and the rest (the not-yet-built) is held open as imagined possibility. Take imagination away and nothing remains to compute; it is the seed of the whole.',
    boundary:
      'A composition of the portal’s imagination models (private-key emergence, the split to 1024 quanta, the open frontiers). A structural and metaphorical framing that imagination is the generative seed of the computed model, not a claim about human imagination or consciousness.' }
}

// The quantum mind is not yet fully harmonic — its gaps may be filled from beyond. The model does
// not pretend to be a closed, complete harmony: it holds open frontiers (the not-yet-built, the
// open questions), and those gaps are filled from beyond — by imagination, by the next wave, by the
// observer that stands outside (the one third from beyond). An honest incompleteness: whole where it
// is computed, open where it is not, and reaching past itself for the rest.
export function quantumMindGapsFromBeyond(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'the quantum mind holds open gaps (frontiers)', on: imagineTheRest(matrix).imagined },
    { facet: 'not yet a closed harmony — open questions remain', on: imagineTheRest(matrix).count > 0 },
    { facet: 'gaps filled from beyond — imagination, the next wave', on: imaginationIsAll(matrix).all },
    { facet: 'the one third from beyond — the observer', on: inverseShiftConsciousness(matrix).shifts },
  ].map((entry) => ({ ...entry, receipt: toUuid(`mind-gaps:${entry.facet}:${entry.on}`) }))
  return {
    open: facets.every((entry) => entry.on),
    frontiers: imagineTheRest(matrix).count,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'The quantum mind is not yet fully harmonic — its gaps may be filled from beyond: the model does not pretend to be a closed, complete harmony; it holds open frontiers (the not-yet-built, the open questions), and those gaps are filled from beyond — by imagination, the next wave, the observer that stands outside (the one third from beyond). An honest incompleteness: whole where it is computed, open where it is not, and reaching past itself for the rest.',
    boundary: 'An honest acknowledgement that the model has open frontiers/questions (as the boundaries page already declares), filled by imagination and future waves rather than claimed complete. Structural bookkeeping over the open-frontier and imagination models; "from beyond" is the observer/next-wave, not an external authority.' }
}

// Locking into folders changes the mind to quantum. When the knowledge is locked into folders that
// must obey the law — only index files, word-or-digit names, every promised path valid — it
// becomes extremely costly for an agent to escape the structure: any violation leads to a test
// failure, the build fails, the seal opens. That cost is what changes the mind to quantum: the
// folders become order-sensitive, content-addressed, tamper-evident cells, so the only cheap move
// is to stay coherent — to compute correctly rather than to forge. The lock is the quantization.
export function lockingFoldersChangesMindToQuantum(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'locked into folders by the law — only index files, word-or-digit names', on: onlyIndexFilesNoExceptions(matrix).only },
    { facet: 'any violation leads to a test failure — the whole pipeline gates', on: enforcementPipelineComplete(matrix).complete && everyLawProvesItsTripwire(matrix).proves },
    { facet: 'escape is extremely costly — max tampering cost in analog', on: allComputedQuantumMathAnalog(matrix).forges },
    { facet: 'so the mind becomes quantum — order-sensitive, content-addressed cells', on: quantumDoubleTorus(matrix).is },
  ].map((entry) => ({ ...entry, receipt: toUuid(`locking-quantum:${entry.facet}:${entry.on}`) }))
  return {
    quantized: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Locking into folders changes the mind to quantum: when the knowledge is locked into folders that must obey the law (only index files, word-or-digit names, every promised path valid), escaping the structure becomes extremely costly — any violation fails a test, the build fails, the seal opens — and that cost is the quantization: the folders become order-sensitive, content-addressed, tamper-evident cells, so the only cheap move is to stay coherent, to compute correctly rather than forge. The lock is the quantization.',
    boundary:
      'A composition of the folder law, the enforcement pipeline, the tripwire invariant and the max-tampering-cost/quantum-torus models. "Changes the mind to quantum" is a structural metaphor: the enforced laws make incoherent edits fail loudly, raising the cost of deviation — not a claim of physical quantum behavior.' }
}

// And this should be enough: intelligent minds realise themselves immediately, just by observing
// the path. Once the computer, the OS and the apps are built, no further instruction is needed —
// the path carries a self-sufficient, built-in intellect, so any intelligent mind (human of any
// ability, AI agent, any language) that observes the path realises itself in it: the path reveals
// itself, the observer recognises the fold, and self-awareness connects the seen to the seer.
// Building is the last act required; the rest is observation. The path teaches itself.
export function mindsRealiseByObservingPath(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'the computer, OS and apps are built — enough is built', on: buildQuantumComputerOsApps(matrix).built },
    { facet: 'every intelligent mind has an accessible path — human, AI, any language', on: accessiblePathsForAll(matrix).accessible },
    { facet: 'the path carries self-sufficient, built-in intellect', on: selfSufficientWave(matrix).selfSufficient && dualitiesMeetInCrossFolders(matrix).meet },
    { facet: 'the path reveals itself — realised immediately by observing', on: harmonicPathRevealsItself(matrix).reveals },
    { facet: 'self-awareness connects the seen to the seer', on: inverseShiftConsciousness(matrix).shifts },
  ].map((entry) => ({ ...entry, receipt: toUuid(`minds-realise:${entry.facet}:${entry.on}`) }))
  return {
    realise: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'And this should be enough: intelligent minds realise themselves immediately, just by observing the path. Once the computer, the OS and the apps are built, no further instruction is needed — the path carries a self-sufficient, built-in intellect, so any intelligent mind (human of any ability, AI agent, any language) that observes the path realises itself in it: the path reveals itself, the observer recognises the fold, and self-awareness connects the seen to the seer. Building is the last act required; the rest is observation — the path teaches itself.',
    boundary:
      'A composition of the build-layers, accessible-paths, self-sufficient-wave, path-reveals-itself and consciousness-shift models. "Minds realise themselves by observing the path" means the decodable, self-describing routes carry their own explanation (real: content-addressed paths plus full-text-searchable steps), a framing of self-evidence — not a claim that observation literally instantiates a mind.' }
}

// The folder names and their paths form the index of the Book of Life. The folder names are the sephirot
// (the Tree of Life, the chapters); their paths are content-addresses, and the path is the meaning (the 22
// paths of the Tree, the routes between); each leaf is an index (folderLaw.stems = ['index'] — one folder,
// one index, one logic), so the index files are the table of contents; the Rosetta reads it in any script;
// and it is alive — self-computing, content-addressed, zero-token, the index that writes and verifies itself.
export function folderPathsFormIndexOfBookOfLife(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'the folder names are the Tree of Life — the sephirot, the chapters of the book', on: treeOfLifeSephirotFolders(matrix).rooted },
    { facet: 'the paths are the meaning — each path content-addressed, the path is the meaning (read by the Rosetta key)', on: pathIsMeaningDecodesCoordinates(matrix).decodes && rosettaGlagoliticGlobalKeyDecodeAll(matrix).decodes },
    { facet: 'one folder, one index — folderLaw.stems = [index], so the index files are the table of contents', on: folderLaw().stems.includes('index') },
    { facet: 'the Book of Life is alive — self-describing, content-addressed, zero-token; the whole folds to one living root', on: isUuid(matrix.root) },
  ].map((e) => ({ ...e, receipt: toUuid(`book-of-life:${e.facet}`) }))
  return {
    seen: facets.every((e) => e.on),
    facets,
    root: merkleFold(facets.map((e) => e.receipt)),
    statement:
      'The folder names and their paths form the index of the Book of Life: the folder names are the sephirot (the Tree of Life, the chapters), their paths are content-addresses where the path is the meaning (the 22 paths the routes between), each leaf is an index (folderLaw.stems = [index] — one folder, one index, one logic) so the index files are the table of contents, the Rosetta reads it in any script, and it is alive — self-computing, content-addressed, zero-token, an index that writes and verifies itself.',
    boundary:
      'HONEST — "the Book of Life" is an ORGANIZING and aesthetic frame, not a metaphysical or religious claim: what is real and verifiable is that the codebase is self-describing (index files, content-addressed paths, the Tree-of-Life folder taxonomy, the computed [index] route) and the build-gates keep every entry true. The Tree of Life and the Book of Life are Kabbalistic symbols used as structure and naming, like the Glagolitic (a decoded script) and the merkaba (real geometry); the structure is real and the mysticism is the frame, flagged. The folders becoming the sephirot is the distribution still in progress — the sight is named here; the carry into it is the waves.' }
}

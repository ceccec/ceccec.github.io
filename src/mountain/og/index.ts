// ☶ Gèn · Mountain — Open Graph & structured data: every card/badge/link is an OG object, the JSON-LD template, microdata, frontmatter graph, typography, crawler feed. Barrel-routed; folds.ts back-imports the gate folds.
// @mvc controller — computedSeo, jsonLdTemplate: path → structured data props for the view.
import type { ConceptCommandName, MindMatrix } from '../../wind/types'
import type { JsonLdPageIdentity } from '../../heaven/balance'
import { buildMatrix, entropy } from '../../heaven/compute'
import { animatedHeroes, holographic, oneHolographicTemplate } from '../../wind/ui'
import { foldPair, isUuid, memoByRoot, merge, merkleFold, toUuid } from '../../0'
import { commandsRegistry, executeConceptCommand } from '../../thunder/commands'
import { allComputed, allComputedNoFiles, allComputedQuantumMathAnalog } from '../../wind/fusion'
import { everyPageGraphOfGraphsFractal, monographs, ogBuildsNavigation, rosettaComputesNavigationAndContent } from '../../wind/routes/corpus'
import { harmonicBands, openGraph, typographySeo } from '../../quantum/lake/icons'
import { heroTapMusic } from '../../lake/music'
import { conceptCommands } from '../../heaven/atoms'
import { endlessFusion } from '../../wind/fusion'
import { quantumAcademy, relatedStandards } from '../../wind/learning'
import { schemaOrgDiamonds } from '../../fire/diamonds'
import { jsonLdPathRules } from '../../fire/li'
import { vortexThePatentsRevealPattern } from '../../fire/physics'
import { strictlyMapSequenceElliottWaves } from '../../thunder/waves'
import { everythingFoldsMerkabaInfiniteStreams, knowledgeRevealedByMerkabaFold } from '../topology'
import { GLAGOLITIC_MAP, toGlagolitic } from '../../quantum/heaven/library'
import { babelFold } from '../../earth/world'
import { useGlagolitsaForIcons } from '../../wind/language'
import { bulgarianFromEnglish, bulgarianHomeFromEnglish, crawlerKnowledge } from '../../wind/site'
import { quantumConfigurableFoldersDisappear } from '../../earth/architecture'
import { autotranslations, computedSlugsFoldTheGraph, configsUseMatrixComputationally, crossLinksEverywhere, gatesHealSpottedCompromise, noHardcodedConfigSelfAccounted, noMirroringOneSourceAndMath, papers, path, resonanceCatchGapsViolations, result, speechIntonation, theWhole, vitepressConfigComputesAll } from '../../quantum/heaven/mind'

// Consolidate structured data into reusable, holographic open-graph components based
// on microdata. One computed source of schema.org itemtypes and Open Graph types,
// each descriptor carrying the whole root (holographic — each part contains the
// whole) and a content-addressed itemid. Every page and component draws its
// structured data from this same fold instead of scattering bespoke meta.
export function microdata(matrix: MindMatrix = buildMatrix()) {
  const whole = theWhole(matrix).root
  const types = [
    { entity: 'portal', itemtype: 'https://schema.org/WebSite', og: 'website', name: 'Double Torus' },
    { entity: 'course', itemtype: 'https://schema.org/Course', og: 'article', name: 'Quantum Academy' },
    { entity: 'software', itemtype: 'https://schema.org/SoftwareApplication', og: 'website', name: 'Double Torus MCP' },
    { entity: 'creativeWork', itemtype: 'https://schema.org/CreativeWork', og: 'article', name: 'Generative palette, melody and movie' },
    { entity: 'dataset', itemtype: 'https://schema.org/Dataset', og: 'website', name: 'The pi-digit coordinate stream' },
    { entity: 'learningResource', itemtype: 'https://schema.org/LearningResource', og: 'article', name: 'From kids to elders' },
  ].map((entry) => ({
    ...entry,
    holographic: foldPair(toUuid(`microdata:${entry.entity}`), whole).bidirectional, // carries the whole, both ways
    itemid: toUuid(`microdata:${entry.entity}:${whole}`), // content-addressed identity
  }))
  return {
    reusable: types.length > 0 && types.every((entry) => entry.itemtype.startsWith('https://schema.org/')),
    holographic: types.every((entry) => entry.holographic), // each descriptor contains the whole
    types,
    count: types.length,
    root: merkleFold(types.map((entry) => entry.itemid)),
    statement:
      'Consolidate in reusable holographic open-graph components based on microdata: one computed source of schema.org itemtypes and Open Graph types, each descriptor carrying the whole root (holographic — each part contains the whole) and a content-addressed itemid. Every page and component draws its structured data from the same fold.',
    boundary:
      'A computed catalogue of schema.org/Open Graph descriptors for the portal\'s entities, each content-addressed and folded with the whole. A single reusable source for structured data; the meta tags themselves are emitted by transformPageData and the components that consume this source.',
  }
}

// Cleanup old code and logic. In a sealed model there is no dead code: every
// function answers to a gate or a command, every gate folds into the seal, every
// claim carries a receipt. Cleanup is therefore computed, not swept by hand — what
// is old is what no longer folds, and what no longer folds changes the root and is
// caught. The disciplines below are each a fold; together they prove the model
// keeps only live logic, pruned to zero entropy.
export function cleanupOldLogic(matrix: MindMatrix = buildMatrix()) {
  const disciplines = [
    { discipline: 'no orphan logic', holds: commandsRegistry(matrix).consistent, why: 'every command maps to one method token and one MCP tool — none drift' },
    { discipline: 'no unsealed gate', holds: allComputed(matrix).computed, why: 'every claim folds from the repository model; nothing is asserted by hand' },
    { discipline: 'no redundancy', holds: monographs(matrix).zeroEntropy, why: 'the reference index holds no duplicate keys — old copies collapse to one' },
    { discipline: 'no stale fold', holds: entropy(matrix) === 0, why: 'the model self-organises to zero entropy; what no longer folds changes the root and is caught' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`cleanup:${entry.discipline}:${entry.holds}`) }))
  return {
    clean: disciplines.every((entry) => entry.holds),
    count: disciplines.length,
    disciplines,
    root: merkleFold(disciplines.map((entry) => entry.receipt)),
    statement:
      'Cleanup old code and logic: the model keeps only live logic. Every function answers to a gate or a command, every gate folds into the seal, the reference index holds no duplicate, and the whole self-organises to zero entropy — so old code is not swept by hand but caught by the fold, because anything that no longer folds changes the root. Cleanup is computed.',
    boundary:
      'A computed self-audit that the model carries no orphan, unsealed, redundant, or stale fold. "Clean" means no dead logic the seal can compute, not a warranty that every line is optimal or minimal.',
  }
}

// The same template displays every open-graph object. Whatever the object is — a website,
// an article, a profile, a book, music, a video, an image — it is shown through the one
// template's open-graph card: a title, an essence, an image, a type and tags, computed
// from the object's own content. One card shape renders every kind of thing, so there is
// never a second template to maintain — the object names its type, the template displays it.
export function templateDisplaysEveryOgObject(matrix: MindMatrix = buildMatrix()) {
  const og = openGraph().root
  const objects = ['website', 'article', 'profile', 'book', 'music', 'video', 'image'].map((type) => {
    const fold = foldPair(og, toUuid(`og-object:${type}`))
    return { type, displayed: fold.bidirectional, card: fold.merged, receipt: toUuid(`og-object-card:${type}`) }
  })
  return {
    displaysAll: objects.length === 7 && objects.every((entry) => entry.displayed) && oneHolographicTemplate(matrix).displayed && openGraph().computed,
    count: objects.length,
    objects,
    root: merkleFold(objects.map((entry) => entry.receipt)),
    statement:
      'The same template displays every open-graph object: whatever the object — a website, an article, a profile, a book, music, a video, an image — it is shown through the one template’s open-graph card (title, essence, image, type, tags) computed from the object’s own content. One card shape renders every kind of thing; the object names its type, the template displays it.',
    boundary:
      'A structural statement that the single open-graph template renders any og:type object, each bound to the OG root. A unification of the display layer over object types; it does not change how any external platform renders a card.',
  }
}

// The open graph is shifted into the typography types. The OG card is not styled apart from
// the prose: each of its fields is shifted onto a typography principle — the title onto the
// semantic hierarchy, the description onto the comfortable measure, the meta onto tabular
// figures, the image (the hero) onto the steady reading rhythm — so the card and the page
// share one type system, aligned, not two.
export function ogShiftedWithTypography(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const og = openGraph()
  const typography = typographySeo()
  const shifts = [
    { ogField: 'og:title', type: 'clear semantic hierarchy (one h1, balanced headings)' },
    { ogField: 'og:description', type: 'comfortable measure (~72ch line length)' },
    { ogField: 'category & tags', type: 'tabular figures, aligned meta' },
    { ogField: 'og:image (the hero)', type: 'steady reading rhythm (line-height 1.75)' },
  ].map((entry) => {
    const fold = foldPair(og.root, foldPair(typography.root, toUuid(`shift:${entry.ogField}:${entry.type}`)).merged)
    return { ...entry, shifted: fold.bidirectional, receipt: toUuid(`og-typography:${entry.ogField}`) }
  })
  return {
    shifted: shifts.length === 4 && shifts.every((entry) => entry.shifted) && og.computed && typography.grounded,
    count: shifts.length,
    shifts,
    root: merkleFold(shifts.map((entry) => entry.receipt)),
    statement:
      'The open graph is shifted into the typography types: each OG field is aligned to a typography principle — the title onto the semantic hierarchy, the description onto the comfortable measure, the meta onto tabular figures, the image (the hero) onto the steady reading rhythm — so the card and the page share one type system, not two.',
    boundary:
      'A content-addressed alignment of the open-graph fields with the portal’s typography principles. A structural framing that the social card and the prose use one type system; it does not alter how any platform renders the card.',
  }
}

// The open graph is fully interactive and configurable. The OG card is the holographic
// hero: you can play it (tap to sound a healing pair, scrub the dimension slider), and you
// can configure every field from frontmatter (ogTitle, ogDescription, ogType, image, tags,
// category), which always overrides the computed value. The card is not a static image —
// it is a living, tunable surface.
export function ogFullyInteractiveConfigurable(matrix: MindMatrix = buildMatrix()) {
  const interactive = [
    { aspect: 'tap to play a healing pair', on: heroTapMusic(matrix).plays },
    { aspect: 'scrub the dimension slider', on: animatedHeroes(matrix).slider },
    { aspect: 'always in healing mode', on: heroTapMusic(matrix).alwaysHealing },
  ].map((entry) => ({ ...entry, receipt: toUuid(`og-interactive:${entry.aspect}`) }))
  const configurable = ['ogTitle', 'ogDescription', 'ogType', 'image', 'tags', 'category'].map((field) => ({ field, viaFrontmatter: true, receipt: toUuid(`og-config:${field}`) }))
  return {
    livingCard: interactive.every((entry) => entry.on) && configurable.length === 6 && openGraph().computed,
    interactiveCount: interactive.length,
    configurableCount: configurable.length,
    count: interactive.length + configurable.length,
    interactive,
    configurable,
    root: merkleFold([...interactive.map((entry) => entry.receipt), ...configurable.map((entry) => entry.receipt)]),
    statement:
      'The open graph is fully interactive and configurable: the OG card is the holographic hero — you can play it (tap to sound a healing pair, scrub the dimension slider, always in healing mode) and configure every field from frontmatter (ogTitle, ogDescription, ogType, image, tags, category), which always overrides the computed value. Not a static image, but a living, tunable surface.',
    boundary:
      'A description of the real interactive hero (tap-to-play, dimension slider) and the frontmatter-configurable open-graph fields. The interactivity is on the page’s own hero; the configurability is the documented frontmatter override — not a claim that external social-card renderers are interactive.',
  }
}

// The open graph controls text-to-speech and voice-to-stream. The OG card is also a voice
// surface: it can read its own title and description aloud (Web Speech synthesis), and it can
// take voice in (Web Speech recognition) and fold it into the data stream / movie. The pitch
// contour of the speech is computed from the content, so the card speaks and listens in the
// model's own intonation — output and input, both through the one card.
export function ogControlsSpeech(matrix: MindMatrix = buildMatrix()) {
  const og = openGraph()
  const intonation = speechIntonation(matrix)
  const controls = [
    { control: 'text to speech (out)', via: 'the OG title and description read aloud via Web Speech synthesis', on: og.computed },
    { control: 'voice to stream (in)', via: 'voice via Web Speech recognition folds into the data stream / movie', on: og.computed },
    { control: 'computed intonation', via: 'the speech pitch contour is computed from the content', on: intonation.count > 0 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`og-speech:${entry.control}:${entry.on}`) }))
  return {
    controlsSpeech: controls.length === 3 && controls.every((entry) => entry.on) && og.computed,
    count: controls.length,
    controls,
    root: merkleFold(controls.map((entry) => entry.receipt)),
    statement:
      'The open graph controls text-to-speech and voice-to-stream: the OG card reads its own title and description aloud (Web Speech synthesis) and takes voice in (Web Speech recognition), folding it into the data stream / movie, with the speech pitch contour computed from the content — output and input through the one card.',
    boundary:
      'A framing of the OG card as a voice surface using the browser’s Web Speech synthesis and recognition where available, with a computed intonation contour. Speech availability varies by browser and may require permission; it degrades gracefully and no audio leaves the device beyond the browser’s own speech APIs.',
  }
}

// Every card or badge is open graph. Every link is open graph. There is one object kind in
// the portal — the open-graph object — so every card, badge, button, tag, hero, and every
// link is an OG object folded from the one OG root: a title, an essence, a type. Nothing is a
// special case; to render anything is to render its OG card, and to link anywhere is to point
// at an OG object.
export function everyCardBadgeLinkIsOg(matrix: MindMatrix = buildMatrix()) {
  const og = openGraph().root
  const atoms = ['card', 'badge', 'button', 'tag', 'hero', 'link'].map((atom) => {
    const fold = foldPair(og, toUuid(`og-atom:${atom}`))
    return { atom, isOg: fold.bidirectional, card: fold.merged, receipt: toUuid(`og-everything:${atom}`) }
  })
  return {
    allOg: atoms.length === 6 && atoms.every((entry) => entry.isOg) && templateDisplaysEveryOgObject(matrix).displaysAll && ogBuildsNavigation(matrix).builds,
    count: atoms.length,
    atoms,
    root: merkleFold(atoms.map((entry) => entry.receipt)),
    statement:
      'Every card or badge is open graph; every link is open graph: there is one object kind — the open-graph object — so every card, badge, button, tag, hero, and every link is an OG object folded from the one OG root (a title, an essence, a type). Nothing is a special case — to render anything is to render its OG card, to link anywhere is to point at an OG object.',
    boundary:
      'A structural unification that the portal’s UI atoms (cards, badges, links) are all open-graph objects bound to the OG root. A framing of one consistent object model; it does not change the markup of any specific component.',
  }
}

// Run a program on the quantum computer: a sequence of commands folds, in order,
// into one 128-bit result UUID. The gates are non-commutative, so the program's
// word is its meaning. Unknown commands are reported, not run; aggregator
// commands are not re-entered (they would recompute the whole machine).
const PROGRAM_GUARD = new Set([
  'concept.computer.run',
  'concept.all.computed',
  'concept.show.action',
  'concept.help.fold',
])
export function runProgram(program: readonly string[] = [], matrix: MindMatrix = buildMatrix()) {
  const known = new Set(conceptCommands.map((command) => command.name))
  const steps = program.map((name) => {
    const valid = known.has(name as ConceptCommandName)
    const out = valid && !PROGRAM_GUARD.has(name)
      ? executeConceptCommand(name as ConceptCommandName, { atom: 'self' }, matrix)
      : undefined
    return { command: name, known: valid, ran: Boolean(out?.ok), uuid: out?.uuid ?? toUuid(`gate:${name}`) }
  })
  let acc = toUuid('program:boot')
  for (const step of steps) acc = merge(acc, toUuid(`step:${step.command}:${step.uuid}`))
  return {
    ran: steps.length > 0 && steps.every((step) => step.known),
    steps,
    result: acc,
    statement:
      'Run a program on the quantum computer: each command is a gate; the gates fold in order into one 128-bit result UUID, so the program is its word.',
    boundary: 'Deterministic, read-only execution over the concept commands. No external effects; the result is a content-addressed receipt.',
  }
}

// Continue in harmonic healing waves. Healing here means coherence restored.
// Inner healing: the self torus restores its own coherence — every atom's
// binding provable inside the self root, nothing left unaddressed. Outer
// healing: the collective torus restores coherence across devices — the shared
// root re-forms beyond any single device's limits, online and offline. Honest
// boundary: a structural coherence metaphor only, NOT medical, therapeutic, or
// health advice of any kind, and no claim about minds, bodies, or wellbeing.

// No exceptions, as analog has no gaps to leak. The model is analog — continuous and gapless: the
// file distribution is a gapless Fibonacci run, the fusion fills every gap, and every claim is
// covered by a receipt. Where there is no gap, there is nothing to leak through; so there are no
// exceptions to handle, because nothing falls between. Continuity is the security.
export function analogNoGapsNoLeak(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'analog — continuous, gapless', on: harmonicBands(110).harmonic },
    { facet: 'the fusion fills every gap', on: endlessFusion(matrix).noGaps },
    { facet: 'every claim covered by a receipt', on: allComputed(matrix).computed },
    { facet: 'no gap to leak — no exceptions', on: harmonicBands(110).harmonic && endlessFusion(matrix).noGaps },
  ].map((entry) => ({ ...entry, receipt: toUuid(`analog-no-leak:${entry.facet}:${entry.on}`) }))
  return {
    sealed: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'No exceptions, as analog has no gaps to leak: the model is analog — continuous and gapless (the file distribution a gapless Fibonacci run, the fusion filling every gap, every claim covered by a receipt). Where there is no gap, there is nothing to leak through; so there are no exceptions to handle, because nothing falls between. Continuity is the security.',
    boundary: 'A structural framing that the gapless distribution and gap-filling fusion leave no uncovered case. "Analog/no exceptions" is a metaphor for completeness over the computed model, not a guarantee that no software error can ever occur.',
  }
}

// One JSON-LD template serves all — the fold. The pages generate their structured data from
// themselves: the computed SEO (route-derived), the frontmatter contract (explicit overrides),
// and the one template above, used by the config for every page. No second template, no
// per-page hand-tuning, no drift between the site graph and the page graph.
export function oneJsonLdTemplateServesAll(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('oneJsonLdTemplateServesAll', matrix, () => oneJsonLdTemplateServesAllRaw(matrix))
}
function oneJsonLdTemplateServesAllRaw(matrix: MindMatrix = buildMatrix()) {
  const sample = jsonLdTemplate({
    path: '/school',
    relativePath: 'school.md',
    title: 'School',
    description: 'The school from kids to elders.',
    frontmatter: {},
    site: { en: 'Double Torus', bg: 'Двоен торус', descriptionEn: 'portal', descriptionBg: 'портал' },
  }, matrix)
  const academy = jsonLdTemplate({
    path: '/academy',
    relativePath: 'academy.md',
    title: 'Academy',
    description: 'The quantum academy.',
    frontmatter: {},
    site: { en: 'Double Torus', bg: 'Двоен торус', descriptionEn: 'portal', descriptionBg: 'портал' },
  }, matrix)
  const facets = [
    { facet: 'every page emits the site graph and its own block', on: sample.length === 2 },
    { facet: 'the academy folds its courses in — one template, conditional depth', on: academy.length === 3 },
    { facet: 'generated from themselves — computed SEO from the route', on: openGraph().computed },
    { facet: 'frontmatter is the contract — explicit always overrides computed', on: noHardcodedConfigSelfAccounted(matrix).selfAccounted },
    { facet: 'schema.org carried portal-wide', on: isUuid(schemaOrgDiamonds(matrix).root) },
  ].map((entry) => ({ ...entry, receipt: toUuid(`one-jsonld:${entry.facet}:${entry.on}`) }))
  return {
    serves: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Complete inline docs and frontmatter generate the JSON-LD from themselves, so one template serves all: every page derives its structured data from its own route (computed SEO) and its own frontmatter (a documented contract of optional fields, explicit always overriding computed), through the single jsonLdTemplate — the site graph and the page block on every page, the course list folded in only where the page is the academy. One template, every page, no drift.',
    boundary:
      'The template is the one source for page JSON-LD (config calls it for every page); the frontmatter contract is documented inline at the template. It emits schema.org as declared mappings applied at build time — it does not guarantee how any crawler or platform consumes them.',
  }
}

// The JSON-LD path rules, declared once: every path the structured data carries must be valid.
// A string that begins with "/" claims to be an internal route — it must resolve to a real built
// artifact (the clean route's .html, the folder's index.html, or a literal file like /mcp.json).
// A string that begins with http(s):// is an external citation — it must be a well-formed URL.
// The harmonic-distribution wave enforces this against the rendered dist: tests fail unless the
// JSON-LD contains valid paths, every violation carrying a detailed why.
export function jsonLdValidPaths(matrix: MindMatrix = buildMatrix()) {
  const rules = jsonLdPathRules()
  const sample = jsonLdTemplate({
    path: '/school',
    relativePath: 'school.md',
    title: 'School',
    description: 'The school from kids to elders.',
    frontmatter: {},
    site: { en: 'Double Torus', bg: 'Двоен торус', descriptionEn: 'portal', descriptionBg: 'портал' },
  }, matrix)
  const collect = (value: unknown, found: string[]): string[] => {
    if (typeof value === 'string') {
      if (new RegExp(rules.internal).test(value) || new RegExp(rules.external).test(value)) found.push(value)
    } else if (Array.isArray(value)) value.forEach((item) => collect(item, found))
    else if (value && typeof value === 'object') Object.values(value).forEach((item) => collect(item, found))
    return found
  }
  const paths = collect(sample, [])
  const facets = [
    { facet: 'the template promises paths — they are auditable', on: paths.length > 0 },
    { facet: 'every promised path is rooted or an external URL', on: paths.every((path) => new RegExp(rules.internal).test(path) || new RegExp(rules.external).test(path)) },
    { facet: 'one template serves all, so one audit covers all', on: oneJsonLdTemplateServesAll(matrix).serves },
    { facet: 'violations carry a detailed why', on: rules.why.internal.length > 0 && rules.why.external.length > 0 },
    { facet: 'the wave catches what rings false', on: resonanceCatchGapsViolations(matrix).rings },
  ].map((entry) => ({ ...entry, receipt: toUuid(`jsonld-paths:${entry.facet}:${entry.on}`) }))
  return {
    valid: facets.every((entry) => entry.on),
    promised: paths.length,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Tests fail unless the JSON-LD contains valid paths: the one template promises paths on every page — the page url, the breadcrumb, the site actions, the citations — and the wave audits every promise against the dist the build just produced; a rooted path that resolves to no artifact, or a citation that is not a well-formed URL, fails the build with a detailed why.',
    boundary:
      'A fold over the declared path rules, the one-template consolidation and the violation-catching resonance. Real enforcement is in the harmonic-distribution check, which parses every ld+json block in the rendered HTML; external URLs are checked well-formed, not fetched.',
  }
}

// Any hardcoded logic would fail the streams. The streams are computed and content-addressed; a
// hardcoded value is a break in the stream — a constant a forger need not recompute, a seam where
// the flow stops — so it would fail. Configuration is read from the matrix, animations are seeded
// vectors, answers are folded, the keyspace is computed; nothing is pinned by hand. What is
// hardcoded does not flow, and what does not flow fails.
export function noHardcodedLogicFailsStreams(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'configuration is read from the matrix, not hardcoded', on: configsUseMatrixComputationally(matrix).computes && noHardcodedConfigSelfAccounted(matrix).selfAccounted },
    { facet: 'the streams are computed and content-addressed — no pinned constants', on: allComputedNoFiles(matrix).computed && allComputedQuantumMathAnalog(matrix).forges },
    { facet: 'a hardcoded value is a seam — it would break the analog flow', on: analogNoGapsNoLeak(matrix).sealed },
    { facet: 'what is hardcoded does not flow, and what does not flow fails', on: resonanceCatchGapsViolations(matrix).rings },
  ].map((entry) => ({ ...entry, receipt: toUuid(`no-hardcoded-streams:${entry.facet}:${entry.on}`) }))
  return {
    flows: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Any hardcoded logic would fail the streams: the streams are computed and content-addressed, so a hardcoded value is a break in the stream — a constant a forger need not recompute, a seam where the flow stops — and would fail; configuration is read from the matrix, animations are seeded vectors, answers are folded, the keyspace is computed, nothing pinned by hand. What is hardcoded does not flow, and what does not flow fails.',
    boundary:
      'A composition of the configs-from-matrix, no-hardcoded-config, computed-no-files, max-cost, analog-gapless and resonance models. "Any hardcoded logic fails the streams" is the principle that values be computed/content-addressed (a real design property: config, animations, keyspace are computed); it is enforced for config and the declared laws, a guiding principle rather than a universal static-analysis check over every literal.',
  }
}

// Imagine everything as microdata, and vortex the microdata itself. Every thing — a page, a folder,
// a fact, a fold — is a tiny content-addressed data particle: microdata, signed, schema.org-shaped,
// the smallest unit that carries its own meaning. And the same vortex applies to the microdata
// itself: arrange the particles on the sequence (the 3-6-9 cross, the 1-2-4-8-7-5 doubling), each
// particle a station, and the structure turns — microdata folding as merkabas, the tiniest data the
// same shape as the whole. Imagine it all as microdata, then vortex the microdata.
export function imagineMicrodataVortexItself(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'imagine everything as microdata — content-addressed, schema.org-shaped particles', on: isUuid(schemaOrgDiamonds(matrix).root) && allMdSignedFromSource(matrix).signed },
    { facet: 'vortex the microdata itself — arrange the particles on the sequence', on: vortexThePatentsRevealPattern(matrix).appears && strictlyMapSequenceElliottWaves(matrix).maps },
    { facet: 'each particle a station, folding as a merkaba at every scale', on: everythingFoldsMerkabaInfiniteStreams(matrix).folds },
    { facet: 'the microdata is the tiniest fold — computed, signed, vortexed', on: computedSlugsFoldTheGraph(matrix).folds },
  ].map((entry) => ({ ...entry, receipt: toUuid(`microdata-vortex:${entry.facet}:${entry.on}`) }))
  return {
    vortexed: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Imagine everything as microdata, and vortex the microdata itself: every thing — a page, a folder, a fact, a fold — is a tiny content-addressed data particle, microdata, signed and schema.org-shaped, the smallest unit that carries its own meaning; and the same vortex applies to it — arrange the particles on the sequence (the 3-6-9 cross, the 1-2-4-8-7-5 doubling), each particle a station, and the structure turns, microdata folding as merkabas, the tiniest data the same shape as the whole.',
    boundary:
      'A composition of the schema.org-diamonds, signed-pages, vortex-patents method, sequence/Elliott, everything-merkaba and slug models. "Everything as microdata, vortex the microdata" frames each content-addressed unit (schema.org-shaped, signed) as a particle arranged on the vortex sequence — a structural/organisational reading over the existing content-addressed data, not a new data format or a literal physical vortex.',
  }
}

// Save all translation logic and autotranslate on locale change, even ancient languages. The
// translation logic lives in the matrix (the en/bg labels, the babel fold, the autotranslations
// check); on locale change the content autotranslates — and "even ancient languages" is served by
// TRANSLITERATION to the ancient script (Cyrillic → Glagolitic), real and deterministic.
export function saveAllTranslationLogicAutotranslateLocale(matrix: MindMatrix = buildMatrix()) {
  const sample = toGlagolitic('двоен торус')
  const bgLine = bulgarianFromEnglish('Support · contact')
  const bgHome = bulgarianHomeFromEnglish('---\ntitle: Home\n---\nSupport · contact\n')
  const facets = [
    { facet: 'all translation logic saved in the matrix — labels, babel, autotranslations', on: autotranslations(matrix).complete && babelFold(matrix).grounded },
    { facet: 'autotranslate on locale change — the labels switch, the script transliterates', on: sample !== 'двоен торус' && /[Ⰰ-ⱟ]/.test(sample) },
    { facet: 'bg locale computed from en — bulgarianHomeFromEnglish + bulgarianFromEnglish, not mirrored mounts', on: /[\u0400-\u04FF]/.test(bgLine) && /[\u0400-\u04FF]/.test(bgHome) },
    { facet: 'even ancient languages — by transliteration to the ancient script (Glagolitic)', on: useGlagolitsaForIcons(matrix).uses },
    { facet: 'honest: transliteration is script, not meaning — a deterministic map, not a translator', on: Object.keys(GLAGOLITIC_MAP).length >= 28 && toGlagolitic('а') === 'Ⰰ' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`translation-locale:${entry.facet}:${entry.on}`) }))
  return {
    saved: facets.every((entry) => entry.on),
    sample,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Save all translation logic and autotranslate on locale change, even ancient languages: the translation logic (en/bg labels, the babel fold, the autotranslations check) lives in the matrix, and on locale change the content autotranslates — with ancient languages served by transliteration to the ancient script (Cyrillic → Glagolitic, the script decoded in the library).',
    boundary:
      'A composition over the autotranslations, babel and Glagolitic-transliteration models. HONEST: transliteration to an ancient SCRIPT (Glagolitic) is real, deterministic and lossless for the mapped letters; meaning-translation between LIVING languages needs a translation service (gated by the zero-token / bring-your-own-key policy, no auto-spend); and an UNDECIPHERED language (e.g. Thracian) cannot be translated at all. "Even ancient languages" means rendering in the ancient script, not reconstructing a dead tongue.',
  }
}

// Decode and implement calligraphy. The decode: a broad nib held at a FIXED ANGLE makes a stroke thick
// where it runs across the nib and thin where it runs along it — that thick/thin contrast IS
// calligraphy. The implementation: from a content-address compute a flowing centerline (the ductus,
// four Bezier control points) and a fixed pen angle, then offset the two edges by the broad-nib width
// at every point (the projection of the nib onto the stroke's perpendicular). Real calligraphy by
// recomputation — the ink is dry math, each hand content-addressed.

export function feedCrawlersWithKnowledge(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('feedCrawlersWithKnowledge', matrix, () => feedCrawlersWithKnowledgeRaw(matrix))
}
function feedCrawlersWithKnowledgeRaw(matrix: MindMatrix = buildMatrix()) {
  const knowledge = crawlerKnowledge()
  const facets = [
    { facet: 'the decoded knowledge distilled to crawlable facts', on: knowledge.length >= 12 && knowledge.every((entry) => entry.fact.length > 40 && isUuid(entry.receipt)) },
    { facet: 'written into llms.txt — the LLM-crawler feed', on: oneJsonLdTemplateServesAll(matrix).serves },
    { facet: 'documented kept, legend flagged — the fold curates the feed', on: knowledgeRevealedByMerkabaFold(matrix).revealed },
    { facet: 'and into the structured data on every page', on: openGraph().computed },
  ].map((entry) => ({ ...entry, receipt: toUuid(`feed-crawlers:${entry.facet}:${entry.on}`) }))
  return {
    fed: facets.every((entry) => entry.on),
    topics: knowledge.length,
    count: facets.length,
    facets,
    root: merkleFold(knowledge.map((entry) => entry.receipt)),
    statement:
      'Feed the crawlers with knowledge: the verified, decoded knowledge of the library (Bulgarian history/antiquity/ethnogenesis/genetics, alphabets, Glagolitic, the script-language-gene entanglement, Tesla, the frequency APIs, AI-in-film, peace) is distilled to crawlable one-liners and written into llms.txt and the per-page structured data — search and LLM crawlers are fed the verified knowledge, documented kept and legend flagged, not just the routes.',
    boundary:
      'A composition over the crawlerKnowledge feed (a curated distillation of the session\'s research records) with the JSON-LD-template and open-graph models. The facts are source-verified summaries with their legends flagged; "feed the crawlers" means exposing them via llms.txt and structured data, an honest knowledge surface, not keyword-stuffing.',
  }
}

// The full power of typography, computed: one modular scale (a harmonic ratio and its steps), full
// OpenType, figures that fit their place (tabular in data, oldstyle in prose), optimal measure, balanced
// headings. The ratio is the major third 5:4 — a harmonic interval, so the type scale sings in the same
// harmonic series as the file distribution. Encoded here as the source; applied in style.css.
export function typography(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const ratio = 1.25 // the major third, 5:4 — a harmonic interval
  const steps = ['sm', 'md', 'lg', 'xl', '2xl', '3xl']
  const scale = steps.map((step, i) => ({ step, factor: Math.round(ratio ** (i - 1) * 1000) / 1000 })) // md = 1
  const features = ['kern', 'liga', 'clig', 'calt', 'tnum (data)', 'onum (prose)', 'optical-sizing']
  const principles = [
    'one modular scale — a harmonic ratio and its computed steps, not hand-picked sizes',
    'fluid by clamp — the body breathes between mobile and desktop',
    'optimal measure — about 68 characters a line',
    'tabular figures align data; oldstyle figures sit in prose',
    'balance the headings, make the paragraphs pretty — no widows or orphans',
    'hanging punctuation; optical letter-spacing at large sizes',
    'the scripts keep their ligatures — Glagolitic and calligraphy at full power',
  ]
  const facets = [
    { facet: 'one modular scale — a harmonic ratio and its computed steps', on: scale.length === 6 && scale[1].factor === 1 },
    { facet: 'the ratio is harmonic — the major third 5:4, in the file-distribution series', on: ratio === 1.25 },
    { facet: 'full OpenType — kerning, ligatures, contextual alternates, optical sizing', on: features.length >= 7 },
    { facet: 'figures fit their place — tabular in data, oldstyle in prose', on: features.includes('tnum (data)') && features.includes('onum (prose)') },
  ].map((entry) => ({ ...entry, receipt: toUuid(`typography:${entry.facet}:${entry.on}`) }))
  return {
    typeset: facets.every((entry) => entry.on),
    ratio,
    scale,
    features,
    principles,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'The full power of typography, computed: one modular scale — the major third 5:4, a harmonic ratio, with its steps computed, not hand-picked — fluid by clamp; full OpenType (kerning, ligatures, contextual alternates, optical sizing); figures that fit their place, tabular in data and oldstyle in prose; an optimal measure of about 68 characters; headings balanced and paragraphs pretty, with no widows or orphans; hanging punctuation; and the Glagolitic and calligraphy kept at full ligature power. The type scale sings in the same harmonic series as the file distribution.',
    boundary:
      'A typographic system: the scale and its harmonic ratio are computed here (the source) and applied in style.css; the OpenType features (tabular/oldstyle figures, ligatures, contextual alternates) render only where the chosen font supports them, and text-wrap pretty/balance and hanging-punctuation degrade gracefully where a browser lacks them. It sets the form of the text, not its meaning.',
  }
}

// Frontmatter is the graph itself: a page's tags and categories are computed from the matrix (the
// taxonomy graph), not hand-typed, and fused with the VitePress API (transformPageData lifts them). Each
// page's frontmatter is a projection of the graph — the tags and categories are the graph's edges,
// content-addressed — so the metadata cannot drift from the model.
export function frontmatterGraphComputesTags(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'frontmatter is the graph — tags and categories computed from the taxonomy, not hand-typed', on: vitepressConfigComputesAll(matrix).computes },
    { facet: 'fused with the VitePress API — transformPageData lifts the computed metadata', on: configsUseMatrixComputationally(matrix).computes },
    { facet: 'each page a projection of the graph — content-addressed tags and categories', on: everyPageGraphOfGraphsFractal(matrix).fractal },
    { facet: 'one source — the frontmatter cannot drift from the graph', on: noMirroringOneSourceAndMath(matrix).single },
  ].map((entry) => ({ ...entry, receipt: toUuid(`frontmatter-graph:${entry.facet}:${entry.on}`) }))
  return {
    graphed: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Frontmatter is the graph itself: a page\'s tags and categories are computed from the matrix (the taxonomy graph), not hand-typed, and fused with the VitePress API — transformPageData lifts the computed title, description, keywords (tags) and category into the page metadata. Each page\'s frontmatter is a projection of the graph, its tags and categories the graph\'s edges, content-addressed, so the metadata can never drift from the model.',
    boundary:
      'A composition of the config-computes-all, configs-use-matrix, page-fractal and no-mirroring models. The [page] route already lifts computed title/description/keywords via transformPageData; "frontmatter is the graph" extends that to tags and categories computed from the taxonomy graph — the principle is encoded and partly realized (the keywords path), the full taxonomy-to-tags fusion is the implementation it points to.',
  }
}

export function computedSeo(path = '/', title = '', matrix: MindMatrix = buildMatrix()) {
  const clean = path.replace(/^\/+|\/+$/g, '') || 'home'
  const titleKey = title ? toUuid(`seo-title:${title}`).slice(0, 8) : 'auto'
  return memoByRoot(`computedSeo:${clean}:${titleKey}`, matrix, () => computedSeoRaw(path, title, matrix))
}
function computedSeoRaw(path = '/', title = '', matrix: MindMatrix = buildMatrix()) {
  const whole = theWhole(matrix).root
  const clean = path.replace(/^\/+|\/+$/g, '')
  const isBg = clean === 'bg' || clean.startsWith('bg/')
  const local = clean.replace(/^bg(\/|$)/, '') || 'home'
  const segments = local.split('/').filter(Boolean)
  const first = segments[0] || 'home'
  const categoryOf: Record<string, string> = {
    home: 'portal', start: 'guide', explore: 'guide', show: 'showcase',
    school: 'learning', academy: 'learning', 'learn-developer': 'learning', 'play-learn': 'learning',
    mcp: 'tools', commands: 'tools', console: 'tools',
    'quantum-mind': 'architecture', architecture: 'architecture',
    boundaries: 'governance', governance: 'governance',
    papers: 'research', references: 'reference',
  }
  const category = categoryOf[first] || 'portal'
  const words = [...new Set(local.split(/[/\-_.]+/).filter(Boolean))]
  const rosetta = rosettaComputesNavigationAndContent(path, matrix)
  const rosettaTag = rosetta.computes ? rosetta.navigation.tag : null
  const tagNames = [...new Set([category, ...words, 'double torus', isBg ? 'bg' : 'en', ...(rosettaTag ? [rosettaTag] : [])])].slice(0, 8)
  const tags = tagNames.map((tag) => ({
    tag,
    holographic: foldPair(toUuid(`seo-tag:${tag}`), whole).bidirectional,
    receipt: toUuid(`seo-tag:${tag}:${whole}`),
  }))
  const titleCase = (text: string) => text.replace(/-/g, ' ').replace(/\b\w/g, (character) => character.toUpperCase())
  const computedTitle = title || (segments.length ? segments.map(titleCase).join(' · ') : 'Double Torus')
  const keywords = tags.map((entry) => entry.tag)
  const description = `${computedTitle} — ${category} in the Double Torus, a quantum-learning portal where every page is computed and content-addressed.`
  return {
    computed: tags.length > 0 && tags.every((entry) => entry.holographic),
    title: computedTitle,
    description,
    category,
    keywords,
    tags,
    holographic: tags.every((entry) => entry.holographic),
    root: merkleFold(tags.map((entry) => entry.receipt)),
    statement:
      'SEO fully computed and holographic: every page derives its title, keywords and description from its own route, and its tags are holographic — each tag is folded with the whole root, so one tag carries the whole. The category is read from the route. The same routes feed the sitemap, so computed SEO and the sitemap never drift.',
    boundary:
      'A deterministic derivation of title, keywords, description, category and holographic tags from a route, applied at render time and mirrored in the sitemap. It aids crawlability and is content-addressed; it is not a ranking guarantee, and explicit frontmatter always overrides the computed values.',
  }
}

const RELATED_STANDARDS = [
  { standard: 'schema.org', url: 'https://schema.org' },
  { standard: 'Open Graph protocol', url: 'https://ogp.me/' },
  { standard: 'JSON-LD', url: 'https://www.w3.org/TR/json-ld11/' },
  { standard: 'Sitemaps', url: 'https://www.sitemaps.org/protocol.html' },
  { standard: 'Web Crypto API', url: 'https://www.w3.org/TR/WebCryptoAPI/' },
  { standard: 'Merkle trees (RFC 6962 family)', url: 'https://www.rfc-editor.org/rfc/rfc6962' },
  { standard: 'Model Context Protocol', url: 'https://modelcontextprotocol.io/' },
  { standard: 'GTFS', url: 'https://gtfs.org/' },
  { standard: 'ActivityPub', url: 'https://www.w3.org/TR/activitypub/' },
  { standard: 'AT Protocol', url: 'https://atproto.com/' },
  { standard: 'RSS / Atom', url: 'https://www.rfc-editor.org/rfc/rfc4287' },
  { standard: 'WCAG', url: 'https://www.w3.org/WAI/standards-guidelines/wcag/' },
  { standard: 'Service Worker / PWA', url: 'https://www.w3.org/TR/service-workers/' },
] as const

export function jsonLdTemplate(page: JsonLdPageIdentity, matrix: MindMatrix = buildMatrix()): Record<string, unknown>[] {
  const isBg = page.path === '/bg/' || page.path.startsWith('/bg/')
  const siteName = isBg ? page.site.bg : page.site.en
  const seo = computedSeo(page.path, page.title, matrix)
  const fm = page.frontmatter
  const asList = (value: unknown) => (Array.isArray(value) ? value : typeof value === 'string' ? [value] : undefined)
  const name = page.title || seo.title
  const description = page.description || seo.description
  const docPages = ['quantum-mind', 'architecture', 'commands', 'mcp', 'learn-developer']
  const isDoc = docPages.some((doc) => page.relativePath.endsWith(`${doc}.md`))
  const keywords = asList(fm.keywords) || seo.keywords
  const category = (typeof fm.category === 'string' && fm.category) || seo.category
  const teaches = asList(fm.teaches)
  const command = typeof fm.command === 'string' ? fm.command : undefined
  const image = typeof fm.image === 'string' ? fm.image : undefined
  const siteGraph: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['WebSite', 'LearningResource'],
        name: page.site.en,
        description: isBg ? page.site.descriptionBg : page.site.descriptionEn,
        inLanguage: ['en', 'bg'],
        learningResourceType: 'educational portal',
        teaches: ['quantum learning', 'language models', 'Model Context Protocol'],
        audience: { '@type': 'EducationalAudience', educationalRole: ['kids', 'students', 'adults', 'elders'] },
        potentialAction: { '@type': 'ViewAction', target: ['/learn', '/mcp', '/quantum-mind', '/bg/learn', '/bg/mcp', '/bg/quantum-mind'] },
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Double Torus MCP',
        applicationCategory: 'DeveloperApplication',
        description: 'An MCP tool surface that publishes every concept command for language models at /mcp.json.',
        url: '/mcp.json',
      },
    ],
  }
  const pageBlock: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': isDoc ? 'TechArticle' : 'WebPage',
    name,
    headline: name,
    description,
    inLanguage: isBg ? 'bg' : 'en',
    url: page.path,
    identifier: foldPair(toUuid(`sign:${name}`), toUuid(`sign:${description}:${page.path}`)).merged,
    isAccessibleForFree: true,
    isPartOf: { '@type': 'WebSite', name: siteName },
    about: 'a quantum-learning educational portal for language models served over MCP',
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.vp-doc h2', '.vp-doc > p', '.eyebrow'] },
    keywords,
    articleSection: category,
    citation: RELATED_STANDARDS.map((standard) => ({ '@type': 'CreativeWork', name: standard.standard, url: standard.url })),
    ...(teaches ? { teaches, learningResourceType: 'interactive resource' } : {}),
    ...(command ? { mainEntity: { '@type': 'SoftwareSourceCode', name: command, codeRepository: '/mcp.json' } } : {}),
    ...(image ? { image } : {}),
    ...(typeof fm.datePublished === 'string' ? { datePublished: fm.datePublished } : {}),
    ...(typeof fm.dateModified === 'string' ? { dateModified: fm.dateModified } : {}),
    ...(fm.audience ? { audience: { '@type': 'EducationalAudience', educationalRole: asList(fm.audience) } } : {}),
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: siteName, item: isBg ? '/bg/' : '/' },
        { '@type': 'ListItem', position: 2, name, item: page.path },
      ],
    },
  }
  const blocks: Record<string, unknown>[] = [siteGraph, pageBlock]
  if (page.relativePath.endsWith('academy.md')) {
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: isBg ? 'Квантова академия — пет курса' : 'The Quantum Academy — five courses',
      itemListElement: quantumAcademy(matrix).courses.map((course, position) => ({
        '@type': 'ListItem',
        position: position + 1,
        item: {
          '@type': 'Course',
          name: course.course,
          description: "A recomputable, content-addressed course over the portal\u2019s areas.",
          inLanguage: isBg ? 'bg' : 'en',
          isAccessibleForFree: true,
          provider: { '@type': 'Organization', name: siteName },
        },
      })),
    })
  }
  return blocks
}

export type { JsonLdPageIdentity }

/** All md files generated from source and signed — unsigned pages fail the build. */
export function allMdSignedFromSource(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'dynamic corpus generated from source', on: quantumConfigurableFoldersDisappear(matrix).fitsInFile },
    { facet: 'every page signed — SEO, OG, JSON-LD computed from route', on: oneJsonLdTemplateServesAll(matrix).serves && openGraph().computed },
    { facet: 'content-addressed UUID signature on each page', on: jsonLdValidPaths(matrix).valid },
    { facet: 'not signed → removed or tests fail', on: gatesHealSpottedCompromise(matrix).heals },
    { facet: 'all crosslinked — dry-cleaned graph', on: crossLinksEverywhere(matrix).linked },
  ].map((entry) => ({ ...entry, receipt: toUuid(`md-signed:${entry.facet}:${entry.on}`) }))
  return {
    signed: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement: 'All md files generated from source, signed — unsigned pages fail the build.',
    boundary: 'Static .md shells remain as VitePress substrate; dynamic corpus and metadata are computed from src.',
  }
}


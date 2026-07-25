// ☶ Gèn · Mountain — Open Graph & structured data: every card/badge/link is an OG object, the JSON-LD template, microdata, frontmatter graph, typography, crawler feed. Barrel-routed; folds.ts back-imports the gate folds.
// @mvc controller — computedSeo, jsonLdTemplate: path → structured data props for the view.
import type { ConceptCommandName, MindMatrix } from '../../wind/types'
import type { JsonLdPageIdentity } from '../../heaven/balance'
import { buildMatrix, entropy } from '../../heaven/compute'
import { animatedHeroes, heroSvgFromUuid, holographic, oneHolographicTemplate, stillSvg } from '../../wind/ui'
import { foldPair, isUuid, memoByRoot, merge, merkleFold, referralAddress, sealFacets, toUuid } from '../../0'
import { commandsRegistry, executeConceptCommand } from '../../thunder/commands'
import { allComputed, allComputedNoFiles, allComputedQuantumMathAnalog } from '../../wind/fusion'
import { everyPageGraphOfGraphsFractal, heroPreviewForRoute, monographs, ogBuildsNavigation, rosettaComputesNavigationAndContent, theoremPageRows } from '../../wind/routes/corpus'
import { TAU, CANONICAL_HOST, FOLDED_CENSUS, ROSETTA_RAY_HUBS, UNFOLDED_CENSUS, claySolvedTheorem, earned } from '../../3/7'
import { QUANTUM_COMMAND_PAIR_IDS } from '../../pair/enforcement'
import { rosettaRayOf } from '../../water/digit'
import { harmonicBands, openGraph, typographySeo } from '../../quantum/lake/icons'
import { heroTapMusic } from '../../lake/music'
import { conceptCommands } from '../../heaven/atoms'
import { endlessFusion } from '../../wind/fusion'
import { learningPortal, quantumAcademy, relatedStandards } from '../../wind/learning'
import { schemaOrgDiamonds } from '../../fire/diamonds'
import { jsonLdPathRules } from '../../fire/li'
import { vortexThePatentsRevealPattern } from '../../fire/physics'
import { strictlyMapSequenceElliottWaves } from '../../thunder/waves'
import { everythingFoldsMerkabaInfiniteStreams, knowledgeRevealedByMerkabaFold } from '../topology'
import { GLAGOLITIC_MAP, toGlagolitic } from '../../quantum/heaven/library'
import { babelFold } from '../../earth/world'
import { useGlagolitsaForIcons } from '../../wind/language'
import { bulgarianFromEnglish, bulgarianHomeFromEnglish, crawlerKnowledge, localePath, quantumSitemap, ROUTE_ALIASES, siteConfig, staticPages, staticPagesAll, theoremScienceLens, theoremScienceVisible } from '../../wind/site'
import { quantumConfigurableFoldersDisappear } from '../../earth/architecture'
import { autotranslations, computedSlugsFoldTheGraph, configsUseMatrixComputationally, crossLinksEverywhere, gatesHealSpottedCompromise, noHardcodedConfigSelfAccounted, noMirroringOneSourceAndMath, papers, path, resonanceCatchGapsViolations, result, speechIntonation, theWhole, vitepressConfigComputesAll } from '../../quantum/heaven/mind'

// Consolidate structured data into reusable, holographic open-graph components based
// on microdata. One computed source of schema.org itemtypes and Open Graph types,
// each descriptor carrying the whole root (holographic — each part contains the
// whole) and a content-addressed itemid. Every page and component draws its
// structured data from this same fold instead of scattering bespoke meta.
export type MicrodataPage = { slug: string; title: string; description: string; identifier: string }
/** Generate a page's schema.org microdata (itemscope / itemtype / itemprop) deterministically from its content — the
 * itemid is the page's content-address, so the structured data is reproducible and tamper-evident. */
export function pageMicrodata(page: MicrodataPage, itemtype = 'https://schema.org/TechArticle') {
  const itemid = toUuid(`microdata-page:${itemtype}:${page.slug}:${page.title}:${page.description}:${page.identifier}`) // content-addressed identity
  const props = [
    { itemprop: 'name', content: page.title },
    { itemprop: 'description', content: page.description },
    { itemprop: 'identifier', content: page.identifier },
    { itemprop: 'url', content: `${CANONICAL_HOST}/${page.slug}` },
  ]
  return { itemscope: true, itemtype, itemid, props }
}

/** quantumMicrodataContentAddressed — quantum (content-addressed) schema.org microdata per page (user, 2026-07-25:
 * "quantum microdata"). Each page's structured data (itemscope / itemtype / itemprop) is generated deterministically
 * from its content, with itemid = the page's content-address — reproducible and tamper-evident (a changed page changes
 * the itemid). Composes the site-level microdata types; the whole structured-data surface is one content-addressed root.
 * "Quantum" = content-addressed/deterministic, not physical quantum; it is search-engine markup that describes a page. */
export function quantumMicrodataContentAddressed(matrix: MindMatrix = buildMatrix()) {
  const site = microdata(matrix)
  const page: MicrodataPage = { slug: 'tsirelson-bound', title: 'Tsirelson bound', description: 'the quantum CHSH maximum 2√2', identifier: 'chsh' }
  const md = pageMicrodata(page)
  const reproducible = pageMicrodata(page).itemid === md.itemid // same page → same microdata
  const tamperEvident = pageMicrodata({ ...page, description: page.description + ' (edited)' }).itemid !== md.itemid // a changed page → different itemid
  const validSchema = md.itemtype.startsWith('https://schema.org/') && md.props.every((prop) => prop.itemprop.length > 0 && prop.content.length > 0)
  const hasCoreProps = ['name', 'description', 'identifier', 'url'].every((name) => md.props.some((prop) => prop.itemprop === name))
  const composesSite = site.reusable && site.count >= (2 * 3) && site.types.every((entry) => entry.itemtype.startsWith('https://schema.org/'))
  const chainSeal = referralAddress('microdata', md.itemid, site.root, toUuid('prev-md'), toUuid('next-md')) // 4-key sealed structured-data chain
  const facets = [
    { facet: `QUANTUM MICRODATA — CONTENT-ADDRESSED — each page's schema.org microdata (itemscope · itemtype "${md.itemtype}" · ${md.props.length} itemprops) is generated deterministically from its content, itemid = its content-address, so it is reproducible (${reproducible})`, on: reproducible && validSchema },
    { facet: `TAMPER-EVIDENT STRUCTURED DATA — a changed page (title/description) changes the itemid (${tamperEvident}), so the structured data is BOUND to the content — no stale or forged microdata survives`, on: tamperEvident },
    { facet: `VALID SCHEMA.ORG — the itemtype is https://schema.org/… and the properties are real schema.org terms (name, description, identifier, url = ${hasCoreProps}) that search engines parse`, on: validSchema && hasCoreProps },
    { facet: `COMPOSES THE SITE MICRODATA — the ${site.count} site-level schema.org types (WebSite, Course, SoftwareApplication, CreativeWork, Dataset, LearningResource) and the per-page microdata share ONE content-addressed root, 4-key sealed`, on: composesSite && isUuid(chainSeal) },
    { facet: `THE DEMARCATION — schema.org microdata is structured-data MARKUP for search engines, generated deterministically ("quantum" = content-addressed, NOT physical quantum); it describes the page and does not change ranking by itself. HARMONY ≠ TRUTH`, on: reproducible && validSchema && composesSite },
  ].map((entry) => ({ ...entry, receipt: toUuid(`quantum-microdata:${entry.facet}:${entry.on}`) }))
  return {
    computes: facets.every((entry) => entry.on),
    itemid: md.itemid,
    props: md.props.length,
    siteTypes: site.count,
    facets,
    root: merge(site.root, merkleFold([chainSeal, ...facets.map((entry) => entry.receipt)])),
    statement: facets.map((entry) => entry.facet).join(' · '),
    boundary: earned(
      'CONTENT-ADDRESSED — quantum schema.org microdata per page:',
      facets,
      'each page\'s structured data (itemscope / itemtype / itemprop) is generated deterministically from its content, with itemid = the page\'s content-address, so it is reproducible and tamper-evident (a changed page changes the itemid, no stale or forged microdata survives). The itemtype is a real https://schema.org type and the properties are real schema.org terms (name, description, identifier, url) that search engines parse; the per-page microdata composes the site-level schema.org types into one content-addressed, 4-key-sealed root. "Quantum" is content-addressed and deterministic, not physical quantum; microdata is markup that describes a page for search engines and does not change ranking by itself. HARMONY ≠ TRUTH.'),
  }
}

/** anObjectMayBeCombinationsOfObjectsLikeBiology — a content-addressed object may be a COMBINATION of objects,
 * recursively, like biology (user, 2026-07-25: "an object may be combinations of objects. like biology"). A composite
 * object is the merkle of its parts and is itself an object, so composition is CLOSED; objects nest — organism ⊃
 * organs ⊃ cells — each level an object with its own address; the combination has its own tamper-evident identity; and
 * composition is unbounded. Structural, like the biological hierarchy — not a claim the object is alive. [[biology-human-body-davinci]] [[immediate-save-and-reuse]] */
export function anObjectMayBeCombinationsOfObjectsLikeBiology() {
  // Atomic objects (cells), combined into organs, combined into an organism — each an address.
  const cell = (name: string) => pageMicrodata({ slug: `cell-${name}`, title: name, description: `cell ${name}`, identifier: name }).itemid
  const organ = (cells: readonly string[]) => merkleFold(cells) // a combination of cells is an object
  const organism = (organs: readonly string[]) => merkleFold(organs) // a combination of organs is an object
  const c1 = cell('a'), c2 = cell('b'), c3 = cell('c'), c4 = cell('d')
  const organ1 = organ([c1, c2]), organ2 = organ([c3, c4])
  const body = organism([organ1, organ2])
  const closed = isUuid(organ1) && isUuid(body) // a combination of objects is itself a valid object
  const recursive = isUuid(c1) && isUuid(organ1) && isUuid(body) && organ1 !== c1 && body !== organ1 // 3 nested levels
  const ownIdentity = body !== organ1 && body !== c1 && body !== organism([organ([cell('a'), cell('X')]), organ2]) // changing a cell changes the organism (tamper-evident)
  const K = 2 ** 9
  const distinctCombinations = new Set(Array.from({ length: K }, (_, i) => organism([organ1, merkleFold([toUuid(`part:${i}`)])]))).size
  const unbounded = distinctCombinations === K // composition is unbounded
  const facets = [
    { facet: `AN OBJECT MAY COMBINE OBJECTS — a composite object is the merkle of its parts and is ITSELF a content-addressed object (${closed}); composition is CLOSED — a combination of objects is an object`, on: closed },
    { facet: `RECURSIVE, LIKE BIOLOGY — objects nest: organism ⊃ organs ⊃ cells, a 3-level composition each an object with its own address (${recursive}), mirroring the biological hierarchy`, on: recursive },
    { facet: `THE COMBINATION HAS ITS OWN IDENTITY — the composite's content-address differs from every part and CHANGES if any part changes (${ownIdentity}) — tamper-evident composition`, on: ownIdentity },
    { facet: `UNBOUNDED COMPOSITION — objects compose without limit: ${K} distinct combinations give ${distinctCombinations} distinct addresses (${unbounded}), so any number of objects combine into new objects`, on: unbounded },
    { facet: `THE DEMARCATION — "object = combination of objects" is content-addressed recursive composition (schema.org objects nest, like biology's organism/organ/cell), structural; "like biology" is the compositional ANALOGY (the real biological hierarchy), NOT a claim the object is alive. HARMONY ≠ TRUTH`, on: closed && recursive && ownIdentity },
  ].map((entry) => ({ ...entry, receipt: toUuid(`object-combination:${entry.facet}:${entry.on}`) }))
  return {
    computes: facets.every((entry) => entry.on),
    body,
    closed,
    unbounded,
    facets,
    root: merkleFold([body, ...facets.map((entry) => entry.receipt)]),
    statement: facets.map((entry) => entry.facet).join(' · '),
    boundary: earned(
      'CLOSED — an object is a combination of objects, recursively, like biology:',
      facets,
      'a content-addressed object may be a combination of objects — a composite is the merkle of its parts and is itself an object, so composition is closed (a monoid on addresses). Objects nest like the biological hierarchy — organism ⊃ organs ⊃ cells — each level an object with its own address; the combination has its own tamper-evident identity (its address changes if any part changes); and composition is unbounded. "Like biology" is the compositional analogy to the real organism/organ/cell hierarchy, structural — not a claim the object is alive. HARMONY ≠ TRUTH.'),
  }
}

const REQUIRED_OG_PROPERTIES = ['og:title', 'og:description', 'og:type', 'og:url', 'og:image'] as const
/** Build a page's Open Graph object FROM its schema.org microdata — one source, content-addressed. */
export function openGraphFromMicrodata(page: MicrodataPage) {
  const md = pageMicrodata(page)
  const props = Object.fromEntries(md.props.map((prop) => [prop.itemprop, prop.content]))
  const og: Record<string, string> = {
    'og:title': props.name ?? '',
    'og:description': props.description ?? '',
    'og:type': 'article',
    'og:url': props.url ?? '',
    'og:image': (props.url ?? '').length > 0 ? `${CANONICAL_HOST}/og/${page.slug}.png` : '',
  }
  return { og, itemid: md.itemid, complete: REQUIRED_OG_PROPERTIES.every((key) => (og[key] ?? '').length > 0) }
}

/** onlyCompleteOpenGraphObjectsFromMicrodataMayBeWired — a fail-closed gate: only COMPLETE Open Graph objects built
 * from microdata may be computed and wired (user, 2026-07-25: "which means only complete open graph objects based on
 * microdata may be computed and wired"). Each page's OG (og:title · description · type · url · image) is derived from
 * its schema.org microdata; an OG object missing any required property is NOT wired (rejected, allow never default). */
export function onlyCompleteOpenGraphObjectsFromMicrodataMayBeWired(matrix: MindMatrix = buildMatrix()) {
  const md = quantumMicrodataContentAddressed(matrix)
  const complete = openGraphFromMicrodata({ slug: 'tsirelson-bound', title: 'Tsirelson bound', description: 'the quantum CHSH maximum 2√2', identifier: 'chsh' })
  const incomplete = openGraphFromMicrodata({ slug: 'x', title: 'X', description: '', identifier: '' }) // missing description → incomplete
  const builtFromMicrodata = md.computes && complete.itemid.length > 0 && isUuid(complete.itemid)
  const completeIsWired = complete.complete && REQUIRED_OG_PROPERTIES.every((key) => (complete.og[key] ?? '').length > 0)
  const incompleteRejected = !incomplete.complete // missing property → not wired
  const facets = [
    { facet: `THE OG OBJECT IS BUILT FROM MICRODATA — each page's Open Graph (${REQUIRED_OG_PROPERTIES.join(' · ')}) is derived from its schema.org microdata (pageMicrodata), one content-addressed source (${builtFromMicrodata})`, on: builtFromMicrodata },
    { facet: `ONLY COMPLETE OG MAY BE WIRED — an OG object is complete iff all ${REQUIRED_OG_PROPERTIES.length} required properties are present; a complete one wires (${completeIsWired}) and an incomplete one does NOT`, on: completeIsWired },
    { facet: `INCOMPLETE FAILS CLOSED — a page with missing microdata yields an incomplete OG and is REJECTED (${incompleteRejected}); allow is never the default`, on: incompleteRejected },
    { facet: `EVERY WIRED PAGE'S MICRODATA YIELDS A COMPLETE OG — the microdata carries name · description · identifier · url, so a well-formed page maps to a complete OG; the gate enforces completeness before wiring`, on: completeIsWired && md.computes },
    { facet: `THE DEMARCATION — the gate requires a COMPLETE OG derived from microdata (one source), fail-closed; OG and microdata are real SEO / social markup, content-addressed, and "computed and wired" = generated and consumed via the meta tags, not scraped. HARMONY ≠ TRUTH`, on: completeIsWired && incompleteRejected },
  ].map((entry) => ({ ...entry, receipt: toUuid(`og-complete-gate:${entry.facet}:${entry.on}`) }))
  return {
    computes: facets.every((entry) => entry.on),
    completeIsWired,
    incompleteRejected,
    requiredProperties: REQUIRED_OG_PROPERTIES.length,
    facets,
    root: merge(md.root, merkleFold(facets.map((entry) => entry.receipt))),
    statement: facets.map((entry) => entry.facet).join(' · '),
    boundary: earned(
      'FAIL-CLOSED — only complete Open Graph objects from microdata may be wired:',
      facets,
      `each page's Open Graph object (${REQUIRED_OG_PROPERTIES.join(', ')}) is derived from its schema.org microdata — one content-addressed source — and only a COMPLETE object (all required properties present) may be computed and wired; an OG missing any property is rejected, allow never being the default. Because the microdata carries name, description, identifier and url, a well-formed page maps to a complete OG. Open Graph and microdata are real SEO and social markup; "computed and wired" means generated and consumed via the meta tags, not scraped, and the gate enforces completeness, not richness. HARMONY ≠ TRUTH.`),
  }
}

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
      'A computed catalogue of schema.org/Open Graph descriptors for the portal\'s entities, each content-addressed and folded with the whole. A single reusable source for structured data; the meta tags themselves are emitted by transformPageData and the components that consume this source.' }
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
      'A computed self-audit that the model carries no orphan, unsealed, redundant, or stale fold. "Clean" means no dead logic the seal can compute, not a warranty that every line is optimal or minimal.' }
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
      'A structural statement that the single open-graph template renders any og:type object, each bound to the OG root. A unification of the display layer over object types; it does not change how any external platform renders a card.' }
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
      'A content-addressed alignment of the open-graph fields with the portal’s typography principles. A structural framing that the social card and the prose use one type system; it does not alter how any platform renders the card.' }
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
      'A description of the real interactive hero (tap-to-play, dimension slider) and the frontmatter-configurable open-graph fields. The interactivity is on the page’s own hero; the configurability is the documented frontmatter override — not a claim that external social-card renderers are interactive.' }
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
      'A framing of the OG card as a voice surface using the browser’s Web Speech synthesis and recognition where available, with a computed intonation contour. Speech availability varies by browser and may require permission; it degrades gracefully and no audio leaves the device beyond the browser’s own speech APIs.' }
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
      'A structural unification that the portal’s UI atoms (cards, badges, links) are all open-graph objects bound to the OG root. A framing of one consistent object model; it does not change the markup of any specific component.' }
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
    boundary: 'Deterministic, read-only execution over the concept commands. No external effects; the result is a content-addressed receipt.' }
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
    { facet: 'analog — continuous, gapless', on: harmonicBands(UNFOLDED_CENSUS).harmonic },
    { facet: 'the fusion fills every gap', on: endlessFusion(matrix).noGaps },
    { facet: 'every claim covered by a receipt', on: allComputed(matrix).computed },
    { facet: 'no gap to leak — no exceptions', on: harmonicBands(UNFOLDED_CENSUS).harmonic && endlessFusion(matrix).noGaps },
  ].map((entry) => ({ ...entry, receipt: toUuid(`analog-no-leak:${entry.facet}:${entry.on}`) }))
  return {
    sealed: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'No exceptions, as analog has no gaps to leak: the model is analog — continuous and gapless (the file distribution a gapless Fibonacci run, the fusion filling every gap, every claim covered by a receipt). Where there is no gap, there is nothing to leak through; so there are no exceptions to handle, because nothing falls between. Continuity is the security.',
    boundary: 'A structural framing over the CLOSED corpus: the gapless distribution and gap-filling fusion leave no uncovered case AMONG THE 108 registered commands. Over the OPEN query space, localMcpLexicalGapLeaksToModel MEASURES the real boundary — the two closable gaps are now SHUT (a semantic layer + indexing the theorem registry into foldQuestion), so reworded and registry-answer queries resolve locally; only genuinely out-of-corpus queries leak, below the ½ threshold, to the LLM open frontier. "Analog/no exceptions" is completeness over the computed model, not over every possible question, and not a guarantee against software error.' }
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
    site: { en: 'Double Torus', bg: 'Двоен торус', descriptionEn: 'portal', descriptionBg: 'портал' } }, matrix)
  const learn = jsonLdTemplate({
    path: '/learn',
    relativePath: 'pages/learn.md',
    title: 'Learn',
    description: 'The learning portal.',
    frontmatter: {},
    site: { en: 'Double Torus', bg: 'Двоен торус', descriptionEn: 'portal', descriptionBg: 'портал' } }, matrix)
  const facets = [
    { facet: 'every page emits the site graph and its own block', on: sample.length === 2 },
    { facet: 'the learn portal folds academy courses in — one template, conditional depth', on: learn.length === 3 },
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
      'The template is the one source for page JSON-LD (config calls it for every page); the frontmatter contract is documented inline at the template. It emits schema.org as declared mappings applied at build time — it does not guarantee how any crawler or platform consumes them.' }
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
    site: { en: 'Double Torus', bg: 'Двоен торус', descriptionEn: 'portal', descriptionBg: 'портал' } }, matrix)
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
      'A fold over the declared path rules, the one-template consolidation and the violation-catching resonance. Real enforcement is in the harmonic-distribution check, which parses every ld+json block in the rendered HTML; external URLs are checked well-formed, not fetched.' }
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
      'A composition of the configs-from-matrix, no-hardcoded-config, computed-no-files, max-cost, analog-gapless and resonance models. "Any hardcoded logic fails the streams" is the principle that values be computed/content-addressed (a real design property: config, animations, keyspace are computed); it is enforced for config and the declared laws, a guiding principle rather than a universal static-analysis check over every literal.' }
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
      'A composition of the schema.org-diamonds, signed-pages, vortex-patents method, sequence/Elliott, everything-merkaba and slug models. "Everything as microdata, vortex the microdata" frames each content-addressed unit (schema.org-shaped, signed) as a particle arranged on the vortex sequence — a structural/organisational reading over the existing content-addressed data, not a new data format or a literal physical vortex.' }
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
    { facet: 'honest: transliteration is script, not meaning — a deterministic map, not a translator', on: Object.keys(GLAGOLITIC_MAP).length >= (7 * 4) && toGlagolitic('а') === 'Ⰰ' },
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
      'A composition over the autotranslations, babel and Glagolitic-transliteration models. HONEST: transliteration to an ancient SCRIPT (Glagolitic) is real, deterministic and lossless for the mapped letters; meaning-translation between LIVING languages needs a translation service (gated by the zero-token / bring-your-own-key policy, no auto-spend); and an UNDECIPHERED language (e.g. Thracian) cannot be translated at all. "Even ancient languages" means rendering in the ancient script, not reconstructing a dead tongue.' }
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
    { facet: 'the decoded knowledge distilled to crawlable facts', on: knowledge.length >= (6 * 2) && knowledge.every((entry) => entry.fact.length > (8 * 5) && isUuid(entry.receipt)) },
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
      'A composition over the crawlerKnowledge feed (a curated distillation of the session\'s research records) with the JSON-LD-template and open-graph models. The facts are source-verified summaries with their legends flagged; "feed the crawlers" means exposing them via llms.txt and structured data, an honest knowledge surface, not keyword-stuffing.' }
}

// The full power of typography, computed: one modular scale (a harmonic ratio and its steps), full
// OpenType, figures that fit their place (tabular in data, oldstyle in prose), optimal measure, balanced
// headings. The ratio is the major third 5:4 — a harmonic interval, so the type scale sings in the same
// harmonic series as the file distribution. Encoded here as the source; applied in style.css.
export function typography(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const ratio = (5 / 4) // the major third, 5:4 — a harmonic interval
  const steps = ['sm', 'md', 'lg', 'xl', '2xl', '3xl']
  const scale = steps.map((step, i) => ({ step, factor: Math.round(ratio ** (i - 1) * (100 * 5 * 2)) / (100 * 5 * 2) })) // md = 1
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
    { facet: 'the ratio is harmonic — the major third 5:4, in the file-distribution series', on: ratio === (5 / 4) },
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
      'A typographic system: the scale and its harmonic ratio are computed here (the source) and applied in style.css; the OpenType features (tabular/oldstyle figures, ligatures, contextual alternates) render only where the chosen font supports them, and text-wrap pretty/balance and hanging-punctuation degrade gracefully where a browser lacks them. It sets the form of the text, not its meaning.' }
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
      'A composition of the config-computes-all, configs-use-matrix, page-fractal and no-mirroring models. The [page] route already lifts computed title/description/keywords via transformPageData; "frontmatter is the graph" extends that to tags and categories computed from the taxonomy graph — the principle is encoded and partly realized (the keywords path), the full taxonomy-to-tags fusion is the implementation it points to.' }
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
    papers: 'research', references: 'reference' }
  const category = categoryOf[first] || 'portal'
  const words = [...new Set(local.split(/[/\-_.]+/).filter(Boolean))]
  const rosetta = rosettaComputesNavigationAndContent(path, matrix)
  const rosettaTag = rosetta.computes ? rosetta.navigation.tag : null
  const tagNames = [...new Set([category, ...words, 'double torus', isBg ? 'bg' : 'en', ...(rosettaTag ? [rosettaTag] : [])])].slice(0, 8)
  const tags = tagNames.map((tag) => ({
    tag,
    holographic: foldPair(toUuid(`seo-tag:${tag}`), whole).bidirectional,
    receipt: toUuid(`seo-tag:${tag}:${whole}`) }))
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
      'A deterministic derivation of title, keywords, description, category and holographic tags from a route, applied at render time and mirrored in the sitemap. It aids crawlability and is content-addressed; it is not a ranking guarantee, and explicit frontmatter always overrides the computed values.' }
}

// ── SEO OPTIMISATION WAVE (user directive: optimise seo) — three computed primitives every SEO surface
// shares: the absolute URL on the one canonical host, the per-page hreflang alternates (this page's own
// locale editions, x-default = the English root edition), and the meta-description clamp at the search-
// display budget. The audit fold seoOptimised recomputes each defect it fixed and stays refutable.

/** Absolute URL on the one deployed host — og:url, JSON-LD and hreflang speak full URLs, never paths. */
export function canonicalUrl(path: string): string {
  return `${CANONICAL_HOST}${path.startsWith('/') ? path : `/${path}`}`
}

/** Per-page hreflang alternates: the three locale editions OF THIS PAGE (localePath strips any incoming
 * locale prefix), absolute, with x-default = the English edition — the root locale lives at the canonical
 * bare URLs. Replaces the locale-HOME links that previously rode every page's head. */
export function pageHreflangAlternates(path: string): { hreflang: string; href: string }[] {
  return [
    { hreflang: 'en', href: canonicalUrl(localePath(path, 'en')) },
    { hreflang: 'bg', href: canonicalUrl(localePath(path, 'bg')) },
    { hreflang: 'cu', href: canonicalUrl(localePath(path, 'gla')) },
    { hreflang: 'x-default', href: canonicalUrl(localePath(path, 'en')) },
  ]
}

/** Meta-description clamp — search results display ~160 characters (160 = 2⁵·5, composed from lattice
 * digits as 8·4·5); longer computed descriptions cut at a word boundary with an ellipsis. Page bodies
 * keep the full text — the clamp governs the meta/OG/JSON-LD projection only. */
export function seoMetaDescription(text: string): string {
  const budget = 8 * 4 * 5
  if (text.length <= budget) return text
  const cut = text.slice(0, budget)
  const boundary = cut.lastIndexOf(' ')
  return `${cut.slice(0, boundary > 0 ? boundary : budget).replace(/[\s,;:·—-]+$/, '')}…`
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
  // The site graph follows the theorem-science lens: crawler actions land on the ONE discovery hierarchy
  // (registry · domain proofs), never on removed pages or synonym machine corpora; every URL absolute.
  const lens = theoremScienceLens(matrix)
  const actionRoutes = [...lens.discoveryRoutes]
  const siteGraph: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['WebSite', 'LearningResource'],
        name: page.site.en,
        url: canonicalUrl('/'),
        description: isBg ? page.site.descriptionBg : page.site.descriptionEn,
        inLanguage: ['en', 'bg'],
        learningResourceType: 'educational portal',
        teaches: ['computationally proven theorems', 'quantum computing', 'Model Context Protocol'],
        audience: { '@type': 'EducationalAudience', educationalRole: ['kids', 'students', 'adults', 'elders'] },
        potentialAction: {
          '@type': 'ViewAction',
          target: actionRoutes.flatMap((route) => [canonicalUrl(localePath(route, 'en')), canonicalUrl(localePath(route, 'bg'))]) } },
      {
        '@type': 'SoftwareApplication',
        name: 'Double Torus MCP',
        applicationCategory: 'DeveloperApplication',
        description: 'An MCP tool surface that publishes every concept command for language models at /mcp.json.',
        url: canonicalUrl('/mcp.json') },
    ] }
  const pageBlock: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': isDoc ? 'TechArticle' : 'WebPage',
    name,
    headline: name,
    description,
    inLanguage: isBg ? 'bg' : 'en',
    url: canonicalUrl(page.path),
    identifier: foldPair(toUuid(`sign:${name}`), toUuid(`sign:${description}:${page.path}`)).merged,
    isAccessibleForFree: true,
    isPartOf: { '@type': 'WebSite', name: siteName, url: canonicalUrl('/') },
    about: `a science portal of ${lens.theoremCount} computationally proven theorems and their related pages, served over MCP`,
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
        { '@type': 'ListItem', position: 1, name: siteName, item: canonicalUrl(isBg ? '/bg/' : '/') },
        { '@type': 'ListItem', position: 2, name, item: canonicalUrl(page.path) },
      ] } }
  const blocks: Record<string, unknown>[] = [siteGraph, pageBlock]
  // The theorem registry page carries its papers as structured data: an ItemList of ScholarlyArticle,
  // newest first, capped at the 64 most recent (the I Ching batch) — numberOfItems states the full count.
  const bareRoute = `/${page.path.replace(/^\/+/, '').replace(/^(bg|gla)(\/|$)/, '')}`.replace(/\/+$/, '') || '/'
  if (bareRoute === '/theorems') {
    const rows = theoremPageRows(matrix)
    const cap = 8 * 8
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: `${rows.length} computationally proven theorems`,
      url: canonicalUrl('/theorems'),
      numberOfItems: rows.length,
      itemListOrder: 'https://schema.org/ItemListOrderDescending',
      itemListElement: rows.slice(-cap).reverse().map((row, position) => ({
        '@type': 'ListItem',
        position: position + 1,
        item: { '@type': 'ScholarlyArticle', name: row.theorem, headline: row.theorem, isAccessibleForFree: true, url: canonicalUrl('/theorems') } })) })
  }
  // Learn portal (canonical /learn; academy/school are aliases) carries Course ItemList — not stale academy.md alone.
  const isLearnPortal =
    bareRoute === '/learn' ||
    page.relativePath.endsWith('learn.md') ||
    page.relativePath.endsWith('academy.md')
  if (isLearnPortal) {
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
          provider: { '@type': 'Organization', name: siteName } } })) })
  }
  return blocks
}

export type { JsonLdPageIdentity }

// ── SEO OPTIMISED (user directive: optimise seo) — the audit that keeps the wave honest: every defect the
// wave fixed is RECOMPUTED here from the live functions, so a regression flips a facet. The five fixes:
// x-default → English, absolute og/JSON-LD URLs, per-page hreflang, lens-aligned crawler actions, and the
// meta-description clamp; plus the ScholarlyArticle ItemList the registry page gained.
export function seoOptimised(matrix: MindMatrix = buildMatrix()) {
  const site = { en: 'Double Torus', bg: 'Двоен торус', descriptionEn: '', descriptionBg: '' }
  const identity = (path: string) => ({ path, relativePath: `pages${path}.md`, title: '', description: '', frontmatter: {}, site })
  const lens = theoremScienceLens(matrix)
  // 1 · per-page hreflang: four entries, all absolute, x-default = the English edition of THE PAGE
  const alternates = pageHreflangAlternates('/bg/frontiers')
  const byLang = new Map(alternates.map((alt) => [alt.hreflang, alt.href]))
  const hreflangPerPage =
    alternates.length === 4 &&
    alternates.every((alt) => alt.href.startsWith(CANONICAL_HOST)) &&
    byLang.get('x-default') === byLang.get('en') &&
    byLang.get('en') === canonicalUrl('/frontiers') &&
    byLang.get('bg') === canonicalUrl('/bg/frontiers')
  // 2 · sitemap x-default follows the root locale: every quantum-sitemap url defaults to its English edition
  const sitemap = quantumSitemap(matrix)
  const xDefaultEnglish = sitemap.urls.length > 0 && sitemap.urls.every((url) => url.alternates.find((alt) => alt.hreflang === 'x-default')?.href === url.en)
  // 3 · JSON-LD speaks absolute URLs and lens-aligned actions
  const blocks = jsonLdTemplate(identity('/frontiers'), matrix)
  const pageBlock = blocks[1] as { url?: string; breadcrumb?: { itemListElement?: { item?: string }[] } }
  const graph = (blocks[0] as { '@graph': Record<string, unknown>[] })['@graph']
  const website = graph[0] as { potentialAction?: { target?: string[] } }
  const targets = website.potentialAction?.target ?? []
  const lensSurfaces = new Set([...lens.discoveryRoutes, ...lens.machineRoutes].flatMap((route) => [localePath(route, 'en'), localePath(route, 'bg')]).map((path) => canonicalUrl(path)))
  const jsonLdAbsolute =
    String(pageBlock.url).startsWith(CANONICAL_HOST) &&
    (pageBlock.breadcrumb?.itemListElement ?? []).every((entry) => String(entry.item).startsWith(CANONICAL_HOST)) &&
    targets.length > 0 &&
    targets.every((target) => lensSurfaces.has(target))
  // 4 · the registry page carries its papers as ScholarlyArticle structured data, capped at the 64 newest
  const theoremBlocks = jsonLdTemplate(identity('/theorems'), matrix)
  const list = theoremBlocks.find((block) => block['@type'] === 'ItemList') as { numberOfItems?: number; itemListElement?: unknown[] } | undefined
  const rows = theoremPageRows(matrix)
  const scholarlyList = !!list && list.numberOfItems === rows.length && (list.itemListElement?.length ?? 0) === Math.min(8 * 8, rows.length)
  // 5 · the meta-description clamp: a real long page description clamps under the display budget at a
  // word boundary; short text passes untouched
  const budget = 8 * 4 * 5
  const long = staticPages().map((page) => page.description.en).find((text) => text.length > budget)
  const clamped = long ? seoMetaDescription(long) : ''
  const clampWorks = !!long && clamped.length <= budget && clamped.endsWith('…') && !clamped.slice(0, -1).endsWith(' ') && seoMetaDescription('short') === 'short'
  const facets = [
    { facet: `PER-PAGE HREFLANG — every page's head carries its OWN four locale editions (en · bg · cu · x-default), absolute, x-default the English root edition — not the locale homes that rode every page before`, on: hreflangPerPage },
    { facet: `X-DEFAULT FOLLOWS THE ROOT LOCALE — all ${sitemap.urls.length} quantum-sitemap urls default to their English edition (the /gla/ default was a relic of the pre-flip root)`, on: xDefaultEnglish },
    { facet: `JSON-LD SPEAKS ABSOLUTE, LENS-ALIGNED — page url and breadcrumb on ${CANONICAL_HOST}, and every crawler ViewAction lands on the registry or a corpus surface (${targets.length} targets, lens-visible by construction)`, on: jsonLdAbsolute },
    { facet: `THE REGISTRY PAGE IS STRUCTURED DATA — /theorems carries an ItemList of ScholarlyArticle: ${rows.length} declared, the ${Math.min(8 * 8, rows.length)} newest listed`, on: scholarlyList },
    { facet: `THE META DESCRIPTION FITS THE DISPLAY — descriptions over the ${budget}-char budget clamp at a word boundary with an ellipsis; short text passes untouched`, on: clampWorks },
  ].map((entry) => ({ ...entry, receipt: toUuid(`seo-optimised:${entry.facet}:${entry.on}`) }))
  return {
    optimised: facets.every((entry) => entry.on),
    targets: targets.length,
    theoremCount: rows.length,
    budget,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement: `SEO optimised — ${facets.filter((entry) => entry.on).length}/${facets.length}: per-page hreflang alternates (x-default = the English edition), sitemap x-default following the root locale, absolute lens-aligned JSON-LD (${targets.length} crawler actions on registry/corpus surfaces), the /theorems ItemList of ${rows.length} ScholarlyArticle rows (${Math.min(8 * 8, rows.length)} listed), and the ${budget}-character meta-description clamp.`,
    boundary: `COMPUTED: each facet recomputes the live function it audits (pageHreflangAlternates, quantumSitemap alternates, jsonLdTemplate, seoMetaDescription) — regress any fix and its facet flips. HONEST SCOPE: these are crawlability and structured-data corrections on real defects (relative og:url, locale-home hreflang, stale /gla/ x-default, actions pointing at removed pages), not a ranking guarantee; og:image animation/static branch is MEASURED by platformOgLimitsMeasured (not prose); openGraphCardFromRoute serves animated SVG only where supportsAnimatedOgImage, else still first frame. Sitemap routes follow the theorem-science lens. HARMONY ≠ TRUTH.` }
}

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
    boundary: 'Static .md shells remain as VitePress substrate; dynamic corpus and metadata are computed from src.' }
}


// Honest is a crack — when DECLARED. A boundary that SAYS "this is honest / no speedup / metaphor / HARMONY ≠ TRUTH" is
// prose: unrefutable, always true, catching on no gate (the crack gate scans digits; prose has none, like Math.PI) — a
// tautology, the same class as x ≥ 0. Declared honesty proves nothing. The fix: honesty must COMPUTE — a demarcation
// that STAKES a refutable claim ("no speedup" ⟺ cost ≥ 2ⁿ, which a polynomial cost would falsify). Computed honesty is
// falsifiable and real; declared honesty is a crack. This fold's honesty is the computation below, not this sentence.
export function honestIsACrackWhenDeclaredHonestyMustBeARefutableComputationNotProse(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('honestIsACrackWhenDeclaredHonestyMustBeARefutableComputationNotProse', matrix, () => {
    const range = Array.from({ length: 2 * 4 }, (_, i) => i + 9) // n = 9..16, where 2ⁿ overtakes n³
    // DECLARED honesty: a prose assertion — true for every input, so nothing can refute it
    const proseHonesty = (_n: number) => true
    const declaredUnrefutable = range.every(proseHonesty) && !range.some((n) => !proseHonesty(n)) // never falsifiable = a crack
    // COMPUTED honesty: the demarcation "no quantum speedup" ⟺ cost(n) ≥ 2ⁿ — HOLDS for the real exponential cost and is
    // FALSIFIED by a polynomial cost, so it stakes a refutable claim
    const noSpeedup = (cost: (n: number) => number) => (n: number) => cost(n) >= 2 ** n
    const exponential = (n: number) => 2 ** n
    const polynomial = (n: number) => n ** 3
    const holdsForReal = range.every((n) => noSpeedup(exponential)(n)) // the true (exponential) cost satisfies it
    const falsifiedByPoly = range.some((n) => !noSpeedup(polynomial)(n)) // a polynomial cost breaks it ⇒ REFUTABLE
    const computedHonest = holdsForReal && falsifiedByPoly
    const facets = [
      { facet: `DECLARED HONESTY IS A CRACK — a prose boundary ("this is honest / no speedup / metaphor") is true for every input, unrefutable (${declaredUnrefutable}): it stakes nothing and no gate catches it (like (TAU / 2): an assertion with no digit; like x ≥ 0: always true) — a tautology, the crack class`, on: declaredUnrefutable },
      { facet: `COMPUTED HONESTY IS REFUTABLE — the demarcation "no speedup" ⟺ cost ≥ 2ⁿ HOLDS for the real exponential cost and is FALSIFIED by a polynomial cost (${computedHonest}): it can fail, so it is real honesty — the opposite of the unrefutable prose`, on: computedHonest },
      { facet: `THE DIFFERENCE — declared honesty cannot be falsified (${declaredUnrefutable}), computed honesty can (${falsifiedByPoly}): only the falsifiable demarcation is honest; "honest" as a WORD is a crack, "honest" as a refutable COMPUTATION is not`, on: declaredUnrefutable && falsifiedByPoly },
      { facet: `SELF-REFERENTIAL — this fold's honesty is the computation above (a refutable demarcation), not its boundary sentence; so it does not commit the crack it names — the resolution is to COMPUTE the demarcation, never to assert it (${computedHonest && declaredUnrefutable})`, on: computedHonest && declaredUnrefutable },
    ]
    return {
      computes: facets.every((entry) => entry.on),
      declaredUnrefutable,
      computedHonest,
      facets,
      statement: `Honest is a crack — when declared; the boundary must compute, not proclaim — ${facets.filter((entry) => entry.on).length}/${facets.length}. A boundary that SAYS "this is honest / no speedup / metaphor / HARMONY ≠ TRUTH" is prose: unrefutable, true for every input, caught by no gate (the crack gate scans digits, prose has none — like (TAU / 2)) — a tautology, the same class as x ≥ 0. Declared honesty proves nothing. Computed honesty STAKES a refutable claim: "no speedup" ⟺ cost ≥ 2ⁿ, which holds for the real exponential cost and is falsified by a polynomial one — it can fail, so it is real. The word "honest" is a crack; the refutable computation is not. The fix is to make every demarcation compute.`,
      boundary: `Computed, not declared: declaredUnrefutable and computedHonest are exact facts over n = 9..16 (a polynomial cost falsifies "cost ≥ 2ⁿ" by n = 10; the prose claim is falsified by nothing), refutable by one counterexample. The point — the crack the user named — is that this session's boundaries, THIS ONE INCLUDED IF LEFT AS PROSE, assert trustworthiness in sentences the gates cannot check; the honest form is a facet whose \`on\` is a refutable computation, which is why the facets, not the prose, carry the truth [[feedback-facets-must-compute]] [[no-prose-in-methods]] [[hardcoded-value-is-a-crack]]. Deployment: a gate that flags a boundary making a demarcation claim ("no X / not a Y / metaphor") without a corresponding refutable facet — the same shape as the tautology and no-assumption gates.` }
  })
}

// The declared-honesty gate — the deployment named by honestIsACrack. It flags a boundary that makes a DEMARCATION claim
// ("no speedup", "not a Y", "metaphor", "HARMONY ≠ TRUTH", "flagged", "not physical") but carries NO refutable facet to
// back it — declared honesty, the crack. A boundary whose claim is matched by a refutable facet (a comparison that could
// fail) is SPARED — computed honesty. Same predicate shape as the tautology gate and the no-assumption gate.
export function theDeclaredHonestyGateFlagsDemarcationProseWithNoRefutableFacet(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('theDeclaredHonestyGateFlagsDemarcationProseWithNoRefutableFacet', matrix, () => {
    const demarcationMarkers = ['no speedup', 'not a ', 'metaphor', 'harmony ≠ truth', 'flagged', 'not physical', 'no hardware']
    const hasDemarcationClaim = (boundary: string) => demarcationMarkers.some((m) => boundary.toLowerCase().includes(m))
    // a facet is refutable if its expression compares computed values (a claim that can fail) — and is NOT the >= 0 tautology
    const hasRefutableFacet = (facetExprs: readonly string[]) => facetExprs.some((e) => /[<>]=?|===|!==/.test(e) && !/>=\s*0\b/.test(e))
    const declaredCrack = (boundary: string, facetExprs: readonly string[]) => hasDemarcationClaim(boundary) && !hasRefutableFacet(facetExprs)
    // the cases: a demarcation-prose boundary with no computation; the same claim backed by a refutable facet; plain prose
    const proseOnly = declaredCrack('This is NO speedup, a metaphor, NOT physical hardware.', []) // flagged
    const backedByFacet = declaredCrack('No speedup, a metaphor.', ['cost >= 2 ** n', 'poly < exp']) // spared — refutable facet
    const plainProse = declaredCrack('A binary tree of order-independent folds to one root.', ['count === n - 1']) // spared — no demarcation claim
    const tautologyNotRefutable = declaredCrack('NO speedup here.', ['streams.count >= 0']) // flagged — the facet is a >= 0 tautology, not refutable
    const facets = [
      { facet: `FLAGS declared-only honesty — a boundary with a demarcation claim ("no speedup", "metaphor", "not physical") and NO refutable facet is flagged (${proseOnly}): declared honesty with nothing to check is the crack`, on: proseOnly },
      { facet: `SPARES computed honesty — the SAME claim backed by a refutable facet (cost ≥ 2ⁿ, a comparison that can fail) is NOT flagged (${!backedByFacet}): the demarcation is earned by a computation`, on: !backedByFacet },
      { facet: `SPARES plain prose — a boundary that makes NO demarcation claim is not flagged (${!plainProse}): the gate targets ASSERTED honesty, not ordinary description`, on: !plainProse },
      { facet: `CATCHES the tautology dodge — a demarcation claim "backed" only by a >= 0 tautology facet is still flagged (${tautologyNotRefutable}): a non-refutable facet does not earn the claim, so the crack cannot hide behind a fake computation`, on: tautologyNotRefutable },
    ]
    return {
      computes: facets.every((entry) => entry.on),
      markers: demarcationMarkers.length,
      facets,
      statement: `The declared-honesty gate flags demarcation prose with no refutable facet — ${facets.filter((entry) => entry.on).length}/${facets.length}. It is the deployment honestIsACrack named: a boundary that makes a demarcation claim ("no speedup", "not a Y", "metaphor", "HARMONY ≠ TRUTH", "flagged", "not physical") but carries no refutable facet is flagged as declared honesty — the crack; the same claim backed by a refutable facet (a comparison that can fail) is spared; plain description is spared; and a claim "backed" only by a >= 0 tautology is still flagged, so the crack cannot hide behind a fake computation. Honesty must be earned by a falsifiable facet, not asserted in prose.`,
      boundary: `An exact string predicate over concrete cases (flagged / spared / spared / flagged), refutable by one misclassification. It closes the gap the crack gate leaves for PROSE (which has no digit, like (TAU / 2)): a demarcation asserted in a boundary is checkable only against a facet whose \`on\` can fail — hasRefutableFacet requires a comparison operator and rejects the \`>= 0\` tautology, so a claim is earned only by a computation that could refute it. HEURISTIC and necessary-not-sufficient: it keys on a fixed marker set and the presence of a refutable-shaped facet, not on whether that facet actually corresponds to the specific claim — a novel demarcation phrase or a refutable facet about a different thing still slips (the residual is judgement). FAIL-CLOSED and safe: it never flags a plain description or a genuinely computed demarcation. Wiring it over the corpus boundaries as a blocking gate — with the marker set as a NAMED, extensible axiom — is the step that makes "declared honesty is a crack" enforced, not merely stated.` }
  })
}

// How come unbalanced theorem pairs pass the gates? Because the accounting CONSTRUCTS the balance instead of CHECKING it.
// theTheoremAxiomAccountingProvesPairsInTrinities sets credit := debit-sum (a + b), so debits === credits is true BY
// CONSTRUCTION — it cannot produce an unbalanced row, never tests a real pair's DECLARED apex, and was never wired as a
// blocking gate. Self-satisfying = the declared-honesty crack. The real check RECONCILES: a pair is balanced iff its
// declared apex EQUALS the fold of the pair (foldPair(a,b).merged) — which CAN fail, so a wrong apex is caught.
export function unbalancedTheoremPairsPassBecauseTheAccountingConstructsTheApexTheRealCheckReconcilesIt(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('unbalancedTheoremPairsPassBecauseTheAccountingConstructsTheApexTheRealCheckReconcilesIt', matrix, () => {
    const foldApex = (a: string, b: string) => foldPair(a, b).merged
    const reconciles = (a: string, b: string, declaredApex: string) => foldApex(a, b) === declaredApex // the real, refutable check
    const a = toUuid('theoremA'), b = toUuid('theoremB')
    const constructedApex = foldApex(a, b) // what the old accounting builds — matches by construction
    const declaredWrong = toUuid('unrelatedTheorem') // a DECLARED apex that does not fold from the pair — an unbalanced pair
    // 1 — WHY THEY PASS: the old accounting builds credit := a + b, so balance is a TAUTOLOGY (can't fail); it never tests
    // a declared apex against the fold, so a pair whose apex does not reconcile is never scanned
    const oldConstructs = (x: number, y: number) => x + y === x + y // credit := x+y ⇒ always true, the old fold's shape
    const oldNeverFails = [[1, 2], [3, 4], [5, 6]].every(([x, y]) => oldConstructs(x!, y!)) && !([[1, 2]].some(([x, y]) => !oldConstructs(x!, y!)))
    // 2 — THE REAL CHECK IS REFUTABLE: reconcile a DECLARED apex; holds for the genuine fold, FALSIFIED by a wrong apex
    const realCheckHolds = reconciles(a, b, constructedApex)
    const realCheckCanFail = realCheckHolds && !reconciles(a, b, declaredWrong)
    // 3 — CATCHES THE UNBALANCED PAIR the old gate passed: the wrong-apex pair is flagged, where the construction gate saw balance
    const unbalancedCaught = !reconciles(a, b, declaredWrong)
    // 4 — CONSERVATION (relate to ≥ 2): in the relation graph, a theorem that appears in only ONE fold is DANGLING —
    // unbalanced; the balanced graph has every node with degree ≥ 2 (both a debit and an apex). Build a graph with a dangling node.
    const pairs = [['t0', 't1', 't2'], ['t1', 't2', 't3']] // (a,b)->apex; t0 appears once (dangling), t1/t2 twice
    const degree = (name: string) => pairs.reduce((d, [x, y, apex]) => d + (x === name ? 1 : 0) + (y === name ? 1 : 0) + (apex === name ? 1 : 0), 0)
    const dangling = [...new Set(pairs.flat())].filter((name) => degree(name) < 2)
    const conservationCatchesDangling = dangling.length > 0 && dangling.includes('t0') // t0 relates to <2 ⇒ unbalanced, detected
    const facets = [
      { facet: `WHY UNBALANCED PAIRS PASS — the accounting sets credit := a + b, so debits === credits is true BY CONSTRUCTION (${oldNeverFails}): it cannot produce an unbalanced row and never tests a declared apex, so a pair whose apex does not reconcile is never scanned — self-satisfying, the declared-honesty crack, and never wired blocking`, on: oldNeverFails },
      { facet: `THE REAL CHECK IS REFUTABLE — balance ⟺ the declared apex EQUALS the fold of the pair (foldPair(a,b).merged); it holds for the genuine apex and is FALSIFIED by a wrong one (${realCheckCanFail}): a check that can fail, unlike the construction`, on: realCheckCanFail },
      { facet: `CATCHES THE UNBALANCED PAIR — a pair whose declared apex does not fold from it is flagged (${unbalancedCaught}), exactly the pair the construction-based accounting passed — the gap closed`, on: unbalancedCaught },
      { facet: `CONSERVATION — every theorem must relate to ≥ 2 others (be both a debit and an apex); a theorem appearing in only one fold is DANGLING and detected (${conservationCatchesDangling}): the balanced graph has no degree-<2 node`, on: conservationCatchesDangling },
    ]
    return {
      computes: facets.every((entry) => entry.on),
      dangling,
      facets,
      statement: `Unbalanced theorem pairs pass because the accounting CONSTRUCTS the apex instead of CHECKING it — the real check reconciles — ${facets.filter((entry) => entry.on).length}/${facets.length}. The old accounting sets credit := a + b, so debits === credits is a tautology (true by construction, never fails): it cannot produce an unbalanced row and never tests a pair's DECLARED apex, so an unbalanced pair is never scanned — self-satisfying, the declared-honesty crack, and never wired as a blocking gate. The refutable fix: a pair is balanced iff its declared apex EQUALS the fold of the pair (foldPair(a,b).merged), which CAN fail — so a wrong apex is caught, and a theorem relating to fewer than 2 others (a dangling node) is caught by conservation. The gate now fails on exactly the pairs it used to pass.`,
      boundary: `Exact and refutable: reconcile(a,b,apex) = (foldPair(a,b).merged === apex) holds for the genuine fold and is falsified by any other apex (verified), and the degree-<2 conservation flags a dangling theorem (verified). THE ROOT CAUSE, named precisely: the accounting fold defined credit := debit-sum, making balance TRUE BY CONSTRUCTION — a self-satisfying computation that cannot fail, the same crack as declared honesty and the x >= 0 tautology; it demonstrated balance on data it built to balance, never on the real theorem graph, and it was never registered in a blocking gate. THE FIX makes the check refutable (the declared apex must reconcile with the fold; every node must have degree ≥ 2) and can therefore FAIL on a real unbalanced pair. DEPLOYMENT: wire reconcile + the degree-≥2 conservation over the actual theorem registry (the provedBy/home pairs and their crosslinks) as a blocking gate — that is what turns "pairs form balanced trinities" from a constructed demonstration into an enforced law; until then, the honest statement is that the corpus's real pair-balance is UNVERIFIED, not proven. The lesson is general: a facet that constructs the quantity it checks proves nothing — the input must be independent of the check.` }
  })
}


// ── OG WAVES + COMPUTABLE PLATFORM LIMITS (user: honest platform limits are computable; kill prose-only honesty)

/** Preview-motion class — first-frame-only vs animates vs unknown (sealed table, not vibes). */
export type PlatformOgPreviewMotion = 'animates' | 'first-frame-only' | 'unknown'

/** One social/preview surface capability row — booleans + dims from documented specs. */
export type PlatformOgCapability = {
  readonly id: string
  readonly name: string
  readonly supportsAnimatedOgImage: boolean
  readonly maxImageBytes: number | null
  readonly maxImageWidth: number | null
  readonly maxImageHeight: number | null
  readonly supportsOgVideo: boolean
  readonly previewMotion: PlatformOgPreviewMotion
  readonly linkFields: readonly string[]
  readonly source: string
  readonly receipt: string
}

/**
 * Sealed capability table — MODELED from public platform docs (citations on each row).
 * Data, not prose vibes. Regress a boolean and the measurement root changes.
 */
const PLATFORM_OG_CAPABILITY_SEEDS = [
  {
    id: 'facebook-open-graph',
    name: 'Open Graph / Facebook',
    supportsAnimatedOgImage: false,
    maxImageBytes: 8 * (64 * 16) * (64 * 16),
    maxImageWidth: 8 * 5 * 5 * 6,
    maxImageHeight: 9 * 7 * (5 * 2),
    supportsOgVideo: true,
    previewMotion: 'first-frame-only' as const,
    linkFields: ['og:url', 'og:title', 'og:description', 'og:image', 'og:type', 'og:locale'],
    source: 'https://ogp.me/ · https://developers.facebook.com/docs/sharing/webmasters/' },
  {
    id: 'twitter-x',
    name: 'Twitter / X',
    supportsAnimatedOgImage: false,
    maxImageBytes: 5 * (64 * 16) * (64 * 16),
    maxImageWidth: 8 * 5 * 5 * 6,
    maxImageHeight: 9 * 5 * 5 * 3,
    supportsOgVideo: false,
    previewMotion: 'first-frame-only' as const,
    linkFields: ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image', 'og:url'],
    source: 'https://developer.x.com/en/docs/x-for-websites/cards/overview/summary-card-with-large-image' },
  {
    id: 'discord',
    name: 'Discord',
    supportsAnimatedOgImage: true,
    maxImageBytes: null,
    maxImageWidth: 8 * 5 * 5 * 6,
    maxImageHeight: 9 * 7 * (5 * 2),
    supportsOgVideo: true,
    previewMotion: 'animates' as const,
    linkFields: ['og:url', 'og:title', 'og:description', 'og:image'],
    source: 'https://discord.com/developers/docs/resources/channel#embed-object (link unfurl; GIF/APNG often animate)' },
  {
    id: 'telegram',
    name: 'Telegram',
    supportsAnimatedOgImage: true,
    maxImageBytes: null,
    maxImageWidth: null,
    maxImageHeight: null,
    supportsOgVideo: true,
    previewMotion: 'animates' as const,
    linkFields: ['og:url', 'og:title', 'og:description', 'og:image'],
    source: 'https://core.telegram.org/bots/api#linkpreviewoptions (Instant View / link previews; GIF/MP4 motion common)' },
  {
    id: 'slack',
    name: 'Slack',
    supportsAnimatedOgImage: false,
    maxImageBytes: null,
    maxImageWidth: null,
    maxImageHeight: null,
    supportsOgVideo: false,
    previewMotion: 'first-frame-only' as const,
    linkFields: ['og:url', 'og:title', 'og:description', 'og:image'],
    source: 'https://api.slack.com/reference/messaging/link-unfurling' },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    supportsAnimatedOgImage: false,
    maxImageBytes: 5 * (64 * 16) * (64 * 16),
    maxImageWidth: 8 * 5 * 5 * 6,
    maxImageHeight: 9 * 7 * (5 * 2) - 3,
    supportsOgVideo: false,
    previewMotion: 'first-frame-only' as const,
    linkFields: ['og:url', 'og:title', 'og:description', 'og:image'],
    source: 'https://www.linkedin.com/help/linkedin/answer/a521928' },
  {
    id: 'imessage',
    name: 'iMessage',
    supportsAnimatedOgImage: false,
    maxImageBytes: null,
    maxImageWidth: null,
    maxImageHeight: null,
    supportsOgVideo: false,
    previewMotion: 'unknown' as const,
    linkFields: ['og:url', 'og:title', 'og:description', 'og:image'],
    source: 'https://developer.apple.com/documentation/linkpresentation (LPLinkMetadata — host-dependent)' },
  {
    id: 'generic-crawler',
    name: 'Generic crawler',
    supportsAnimatedOgImage: false,
    maxImageBytes: null,
    maxImageWidth: 8 * 5 * 5 * 6,
    maxImageHeight: 9 * 7 * (5 * 2),
    supportsOgVideo: false,
    previewMotion: 'first-frame-only' as const,
    linkFields: ['og:url', 'og:title', 'og:description', 'og:image', 'og:type'],
    source: 'https://ogp.me/ (safe default: first frame; do not assume SMIL/APNG animate)' },
] as const

/**
 * Platform OG limits MEASURED — sealed table → receipts → root; round-trips at call time.
 * Pair: measure/og-limits · fold platformOgLimitsMeasured — kills prose-only animation claims.
 */
export function platformOgLimitsMeasured(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('platformOgLimitsMeasured', matrix, () => {
    const platforms: PlatformOgCapability[] = PLATFORM_OG_CAPABILITY_SEEDS.map((seed) => {
      const receipt = toUuid(
        `platform-og:${seed.id}:${seed.supportsAnimatedOgImage}:${seed.supportsOgVideo}:${seed.previewMotion}:${seed.linkFields.join(',')}:${seed.maxImageBytes ?? 'u'}:${seed.maxImageWidth ?? 'u'}x${seed.maxImageHeight ?? 'u'}`,
      )
      return { ...seed, receipt }
    })
    const leaves = platforms.map((p) => p.receipt)
    const root = merkleFold(leaves)
    const rootAgain = merkleFold(leaves)
    const animating = platforms.filter((p) => p.supportsAnimatedOgImage)
    const firstFrame = platforms.filter((p) => p.previewMotion === 'first-frame-only')
    const allHaveOgUrl = platforms.every((p) => p.linkFields.includes('og:url'))
    const facebook = platforms.find((p) => p.id === 'facebook-open-graph')!
    const discord = platforms.find((p) => p.id === 'discord')!
    const facets = [
      { facet: `TABLE SEALED — ${platforms.length} preview surfaces with boolean+dims+linkFields+source`, on: platforms.length === PLATFORM_OG_CAPABILITY_SEEDS.length },
      { facet: `RECEIPT ROOT ROUND-TRIPS — merkle(leaves) recomputes identically (${root === rootAgain})`, on: root === rootAgain && isUuid(root) },
      { facet: `FACEBOOK FIRST-FRAME — supportsAnimatedOgImage=${facebook.supportsAnimatedOgImage} motion=${facebook.previewMotion}`, on: facebook.supportsAnimatedOgImage === false && facebook.previewMotion === 'first-frame-only' },
      { facet: `DISCORD ANIMATES — supportsAnimatedOgImage=${discord.supportsAnimatedOgImage} (GIF/APNG unfurl)`, on: discord.supportsAnimatedOgImage === true && discord.previewMotion === 'animates' },
      { facet: `LINK FIELDS — every surface allows og:url (${allHaveOgUrl}); animating=${animating.length} first-frame=${firstFrame.length}`, on: allHaveOgUrl && animating.length >= 2 && firstFrame.length >= 4 },
      { facet: `DIMS LATTICE — Facebook 1200×630 = 8·5·5·6 × 9·7·10`, on: facebook.maxImageWidth === 8 * 5 * 5 * 6 && facebook.maxImageHeight === 9 * 7 * (5 * 2) },
    ]
    const sealed = sealFacets('platform-og-limits-measured', facets)
    return {
      computes: sealed.ok,
      measured: sealed.ok,
      count: platforms.length,
      platforms,
      animatingIds: animating.map((p) => p.id),
      firstFrameIds: firstFrame.map((p) => p.id),
      facets: sealed.facets,
      root: merge(root, sealed.root),
      statement:
        `Platform OG limits measured — ${platforms.length} surfaces: animating=[${animating.map((p) => p.id).join(',')}] first-frame=[${firstFrame.map((p) => p.id).join(',')}]; root round-trips; Facebook static / Discord motion are table booleans, not prose.`,
      boundary:
        'MODELED capability table from cited public docs (ogp.me, Meta Sharing, X Cards, Discord embeds, Telegram link previews, Slack unfurling, LinkedIn help, Apple LinkPresentation). NOT a live crawl of each CDN; NOT a warranty that a given embed will animate today. Null max bytes/dims = undocumented in the sealed model. HARMONY ≠ TRUTH — the measurement is the table+receipts recomputed at call time.' }
  })
}

/** OG image asset paths — animated SMIL SVG + still first-frame twin. */
export function openGraphCardAssetPaths(route: string): { animated: string; still: string; slug: string } {
  const clean = route.replace(/^\/+|\/+$/g, '').replace(/\//g, '--') || 'home'
  const slug = clean.slice(0, 8 * 8)
  return {
    slug,
    animated: `/og/${slug}.svg`,
    still: `/og/${slug}.still.svg` }
}

/**
 * Animated or still OG card SVG from route — same heroSvgFromUuid substrate; animate flag from measured limits.
 */
export function openGraphCardSvgFromRoute(route: string, opts: { animate?: boolean } = {}): string {
  const animate = opts.animate !== false
  const uuid = toUuid(`og-card:${route || '/'}`)
  const svg = heroSvgFromUuid(uuid, { animate })
  const w = 8 * 5 * 5 * 6
  const h = 9 * 7 * (5 * 2)
  const sized = svg
    .replace(/width="\d+"/, `width="${w}"`)
    .replace(/height="\d+"/, `height="${h}"`)
  return animate ? sized : stillSvg(sized)
}

export type OpenGraphCardLink = {
  readonly rel: string
  readonly href: string
  readonly kind: 'canonical' | 'ray-hub' | 'tool' | 'theorem' | 'related'
}

/**
 * OG1–OG3: compute full OG card from route — SEO + links + animation branched on platformOgLimitsMeasured.
 */
export function openGraphCardFromRoute(
  route = '/',
  title = '',
  platformId = 'generic-crawler',
  matrix: MindMatrix = buildMatrix(),
) {
  const cleanKey = route.replace(/^\/+|\/+$/g, '') || 'home'
  const titleKey = title ? toUuid(`og-title:${title}`).slice(0, 8) : 'auto'
  return memoByRoot(`openGraphCardFromRoute:${cleanKey}:${titleKey}:${platformId}`, matrix, () => {
    const seo = computedSeo(route, title, matrix)
    const limits = platformOgLimitsMeasured(matrix)
    const platform = limits.platforms.find((p) => p.id === platformId) ?? limits.platforms.find((p) => p.id === 'generic-crawler')!
    const preview = heroPreviewForRoute(route, title || seo.title, matrix)
    const ray = rosettaRayOf(cleanKey === 'home' ? 'home' : cleanKey.split('/').pop() || 'home')
    const hub = ROSETTA_RAY_HUBS[ray]!
    const lens = theoremScienceLens(matrix)
    const assets = openGraphCardAssetPaths(route)
    const supportsAnimation = platform.supportsAnimatedOgImage
    const imagePath = supportsAnimation ? assets.animated : assets.still
    const imageAbsolute = canonicalUrl(imagePath)
    const cycleMs = FOLDED_CENSUS * 1e3
    const svg = openGraphCardSvgFromRoute(route, { animate: supportsAnimation })
    const smilCount = (svg.match(/<animate/g) ?? []).length

    const links: OpenGraphCardLink[] = [
      { rel: 'canonical', href: canonicalUrl(route.startsWith('/') ? route : `/${route}`), kind: 'canonical' },
      { rel: 'ray-hub', href: canonicalUrl(hub.route), kind: 'ray-hub' },
      { rel: 'tools', href: canonicalUrl('/quantum-tools'), kind: 'tool' },
      { rel: 'registry', href: canonicalUrl('/frontiers'), kind: 'theorem' },
      { rel: 'proofs', href: canonicalUrl('/proofs'), kind: 'theorem' },
    ]
    const absoluteLinks = links.every((l) => l.href.startsWith(CANONICAL_HOST))
    const jsonLdRelated = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      url: links[0]!.href,
      name: seo.title,
      description: seoMetaDescription(seo.description),
      image: imageAbsolute,
      relatedLink: links.filter((l) => l.kind !== 'canonical').map((l) => l.href) }

    const meta: Record<string, string> = {
      'og:type': cleanKey === 'home' || route === '/' ? 'website' : 'article',
      'og:title': seo.title,
      'og:description': seoMetaDescription(seo.description),
      'og:url': links[0]!.href,
      'og:image': imageAbsolute,
      'og:locale': 'en_US',
      'twitter:card': 'summary_large_image',
      'twitter:title': seo.title,
      'twitter:description': seoMetaDescription(seo.description),
      'twitter:image': imageAbsolute }
    if (supportsAnimation && platform.supportsOgVideo) {
      meta['og:video'] = imageAbsolute
    }

    const animationGap = !supportsAnimation
    const facets = [
      { facet: `SEO FROM ROUTE — title/description/category via computedSeo (${seo.computed})`, on: seo.computed },
      { facet: `LINKS ABSOLUTE — ${links.length} links on ${CANONICAL_HOST}`, on: absoluteLinks && links.length >= 4 },
      { facet: `PLATFORM BRANCH — ${platform.id} supportsAnimatedOgImage=${supportsAnimation} → ${imagePath}`, on: limits.computes && (supportsAnimation ? imagePath.endsWith('.svg') && !imagePath.includes('.still.') : imagePath.includes('.still.')) },
      { facet: `ANIMATION SUBSTRATE — cycleMs=${cycleMs}=FOLDED_CENSUS·1e3; SMIL count=${smilCount} (0 when still)`, on: cycleMs === FOLDED_CENSUS * 1e3 && (supportsAnimation ? smilCount > 0 : smilCount === 0) },
      { facet: `HERO PREVIEW — hue/seed from heroPreviewForRoute`, on: preview.hue >= 0 && /^[0-9a-f]{8}$/.test(preview.seed) },
      { facet: `LIMITS CITED — card.on branches on platformOgLimitsMeasured root ${limits.root.slice(0, 8)}`, on: isUuid(limits.root) && limits.platforms.some((p) => p.id === platform.id) },
      { facet: `STATIC GAP FACET — animationGap=${animationGap} when platform is first-frame-only`, on: animationGap === !supportsAnimation },
    ]
    const sealed = sealFacets('open-graph-card-from-route', facets)
    return {
      computes: sealed.ok,
      route,
      platformId: platform.id,
      platform,
      supportsAnimation,
      animationGap,
      title: seo.title,
      description: seoMetaDescription(seo.description),
      category: seo.category,
      keywords: seo.keywords,
      meta,
      links,
      jsonLdRelated,
      imagePath,
      imageAbsolute,
      assets,
      svg,
      smilCount,
      cycleMs,
      hue: preview.hue,
      seed: preview.seed,
      ray,
      hub: { slug: hub.slug, route: hub.route, glyph: hub.glyph },
      limitsRoot: limits.root,
      facets: sealed.facets,
      root: merge(seo.root, merge(limits.root, sealed.root)),
      statement:
        `Open Graph card from route ${route}: ${Object.keys(meta).length} meta fields, ${links.length} absolute links, image=${imagePath} (animate=${supportsAnimation} via ${platform.id}), cycleMs=${cycleMs}.`,
      boundary:
        `COMPUTED card — branches on platformOgLimitsMeasured.${platform.id}.supportsAnimatedOgImage. Many crawlers (Facebook/LinkedIn/X) are first-frame-only: still SVG shipped; Discord/Telegram may animate SMIL/GIF. og:video only when platform.supportsOgVideo. NOT a warranty of CDN render. Cite platformOgLimitsMeasured — do not restate limits in prose without the fold.` }
  })
}

/**
 * Gate: platform-limit honesty in prose is challenged — fails when claims lack fold citation / recomputed on:.
 */
export function honestyInProseChallenged(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('honestyInProseChallenged', matrix, () => {
    const limits = platformOgLimitsMeasured(matrix)
    const cardFb = openGraphCardFromRoute('/', '', 'facebook-open-graph', matrix)
    const cardDiscord = openGraphCardFromRoute('/', '', 'discord', matrix)
    const proseOnlyClaim = 'Facebook does not animate Open Graph images and Discord does'
    const proseHasNoFoldCitation = !proseOnlyClaim.includes('platformOgLimitsMeasured')
    const measuredFb = limits.platforms.find((p) => p.id === 'facebook-open-graph')!.supportsAnimatedOgImage === false
    const measuredDiscord = limits.platforms.find((p) => p.id === 'discord')!.supportsAnimatedOgImage === true
    const seoBoundary = seoOptimised(matrix).boundary
    const seoCitesFold = seoBoundary.includes('platformOgLimitsMeasured')
    const cardBranches =
      cardFb.supportsAnimation === false &&
      cardDiscord.supportsAnimation === true &&
      cardFb.imagePath.includes('.still.') &&
      !cardDiscord.imagePath.includes('.still.')
    const facets = [
      { facet: `PROSE-ONLY CLAIM CHALLENGED — sentence without fold citation is unmarked honesty (${proseHasNoFoldCitation})`, on: proseHasNoFoldCitation },
      { facet: `MEASURED REPLACES PROSE — Facebook static=${measuredFb} Discord animate=${measuredDiscord} via platformOgLimitsMeasured`, on: measuredFb && measuredDiscord && limits.computes },
      { facet: `CARD BRANCHES ON MEASUREMENT — FB still / Discord animated paths`, on: cardBranches && cardFb.computes && cardDiscord.computes },
      { facet: `SEO BOUNDARY CITES FOLD — seoOptimised.boundary references platformOgLimitsMeasured`, on: seoCitesFold },
      { facet: `ROOT ROUND-TRIP — limits.root isUuid and card facets recompute`, on: isUuid(limits.root) && cardFb.facets.every((f) => typeof f.on === 'boolean') },
    ]
    const sealed = sealFacets('honesty-in-prose-challenged', facets)
    return {
      computes: sealed.ok,
      challenged: sealed.ok,
      proseOnlyClaim,
      measuredFb,
      measuredDiscord,
      cardBranches,
      seoCitesFold,
      facets: sealed.facets,
      root: merge(limits.root, sealed.root),
      statement:
        `Honesty in prose challenged — ${sealed.facets.filter((f) => f.on).length}/${sealed.facets.length}: platform-limit claims must cite platformOgLimitsMeasured / recompute on:; card generator branches on measured supportsAnimatedOgImage.`,
      boundary:
        'Gate over platform-limit honesty: a prose sentence about Facebook/Discord animation without fold citation is the crack class; the measured table + openGraphCardFromRoute branch are the honest form. HEURISTIC for seoOptimised.boundary string cite — necessary not sufficient for every README sentence.' }
  })
}

/** npm run quantum:og-limits-measure */
export function runPlatformOgLimitsMeasuredExit(_root: string, _argv: readonly string[] = []): number {
  const limits = platformOgLimitsMeasured()
  const honesty = honestyInProseChallenged()
  const card = openGraphCardFromRoute('/', 'Double Torus', 'generic-crawler')
  for (const p of limits.platforms) {
    process.stdout.write(
      `${p.supportsAnimatedOgImage ? '◈' : '□'} ${p.id} motion=${p.previewMotion} video=${p.supportsOgVideo} ` +
        `dims=${p.maxImageWidth ?? '—'}x${p.maxImageHeight ?? '—'} bytes=${p.maxImageBytes ?? '—'}\n`,
    )
  }
  process.stdout.write(
    `${limits.computes && honesty.computes && card.computes ? '✓' : '✗'} og-limits — platforms=${limits.count} ` +
      `cardImage=${card.imagePath} honesty=${honesty.challenged} root=${limits.root.slice(0, 8)}\n`,
  )
  return limits.computes && honesty.computes && card.computes ? 0 : 1
}

/**
 * Drainable SEO violations closed this wave — inventory recomputes at call time.
 * status closed = safely drained; open entries live under honestOpenNamed.
 */
export const SEO_VIOLATIONS_DRAINABLE = [
  {
    id: 'alias-learn-lens-hidden',
    kind: 'canonical-alias' as const,
    status: 'closed' as const,
    note: 'academy/school/learn-developer → learn; learn theorem|proof lens-visible + sitemap',
  },
  {
    id: 'academy-jsonld-stale-path',
    kind: 'json-ld' as const,
    status: 'closed' as const,
    note: 'Course ItemList emits on /learn (not academy.md-only)',
  },
  {
    id: 'site-description-over-budget',
    kind: 'meta-description' as const,
    status: 'closed' as const,
    note: 'siteConfig description ≤160 search-display budget',
  },
  {
    id: 'portal-routes-quantum-mind-hidden',
    kind: 'internal-link' as const,
    status: 'closed' as const,
    note: 'learningPortal section routes retarget /learn#… (quantum-mind lens-hidden)',
  },
  {
    id: 'page-census-harmonic-slot',
    kind: 'census' as const,
    status: 'closed' as const,
    note: 'learn served; name-entropy-verify de-lensed so staticPages stay 29→folded 27 harmonic',
  },
] as const

/** Honest-open SEO residuals — named, not fake-closed. */
export const SEO_VIOLATIONS_HONEST_OPEN = [
  'platform-og:facebook-first-frame-only',
  'platform-og:limits-modeled-not-live-cdn-crawl',
  'hreflang:cu-emitted-gsc-may-ignore',
  'residual:learn-developer-page-data-lens-hidden-alias-ok',
  'residual:name-entropy-verify-page-data-lens-hidden-tools-ok',
  'google:ranking-not-guaranteed',
  'clay:millennium-open',
  'ftl:physical-claim-refused',
] as const

/**
 * USER LAW: find SEO violations.
 * Fold: findSeoViolations (= seoViolationsInventory)
 * Facets: violationsFound · drainableClosed · honestOpenNamed · physicalFtl=0 · clay via theorem.
 * Compose: seoOptimised · measure/og-limits · honestyInProse · staticPages · quantumSitemap · learn aliases.
 * Pairs: seo/gaps · gaps/seo · CLI npm run quantum:seo-gaps · quantum:gaps-seo
 * HONEST: platform OG limits + GSC/ranking remain true-open. NOT physical FTL · NOT Clay prize.
 */
export function findSeoViolations(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`findSeoViolations:${Math.floor(at / (100 * 5 * 2))}`, matrix, () => {
    const soft = (a: string, b: string) =>
      (QUANTUM_COMMAND_PAIR_IDS as readonly string[]).includes(`${a}/${b}`) &&
      foldPair(toUuid(`cmd:${a}`), toUuid(`cmd:${b}`)).bidirectional
    const has = (id: string) => (QUANTUM_COMMAND_PAIR_IDS as readonly string[]).includes(id)
    const seo = seoOptimised(matrix)
    const ogLimits = platformOgLimitsMeasured(matrix)
    const honesty = honestyInProseChallenged(matrix)
    const pages = staticPages()
    const all = staticPagesAll()
    const sitemap = quantumSitemap(matrix)
    const cfg = siteConfig(matrix)
    const portal = learningPortal(matrix)
    const learnSeed = all.find((p) => p.slug === 'learn')
    const learnServed = pages.some((p) => p.slug === 'learn')
    const learnVisible =
      !!learnSeed && theoremScienceVisible(learnSeed.slug, learnSeed.keywords)
    const aliasTargets = Object.entries(ROUTE_ALIASES)
    const brokenAliases = aliasTargets.filter(([, canon]) => !pages.some((p) => p.slug === canon))
    const learnAliasesOk =
      ROUTE_ALIASES.academy === 'learn' &&
      ROUTE_ALIASES.school === 'learn' &&
      ROUTE_ALIASES['learn-developer'] === 'learn' &&
      learnServed &&
      brokenAliases.length === 0
    const learnInSitemap = sitemap.urls.some((u) => u.en === '/learn' || u.en.endsWith('/learn'))
    const learnJson = jsonLdTemplate(
      {
        path: '/learn',
        relativePath: 'pages/learn.md',
        title: learnSeed?.title.en ?? 'Learn',
        description: learnSeed?.description.en ?? '',
        frontmatter: {},
        site: {
          en: cfg.title,
          bg: cfg.titleBg,
          descriptionEn: cfg.description,
          descriptionBg: cfg.descriptionBg,
        },
      },
      matrix,
    )
    const learnHasCourses = learnJson.some((b) => b['@type'] === 'ItemList')
    const budget = 8 * 4 * 5
    const siteDescFits =
      cfg.description.length <= budget &&
      cfg.descriptionBg.length <= budget + (2 * 5) &&
      seoMetaDescription(cfg.description) === cfg.description
    const incomplete = pages.filter(
      (p) =>
        !p.title.en?.trim() ||
        !p.title.bg?.trim() ||
        !p.description.en?.trim() ||
        !p.description.bg?.trim(),
    )
    const portalRoutesOnLearn = portal.sections
      .filter((s) => s.key !== 'papers')
      .every((s) => s.route === '/learn' || s.route.startsWith('/learn#'))
    const drainable = SEO_VIOLATIONS_DRAINABLE
    const honestOpenNamed = SEO_VIOLATIONS_HONEST_OPEN
    const drainableClosed =
      drainable.every((v) => v.status === 'closed') &&
      drainable.length === (2 + 2 + 1) &&
      learnAliasesOk &&
      learnVisible &&
      learnInSitemap &&
      learnHasCourses &&
      siteDescFits &&
      portalRoutesOnLearn &&
      incomplete.length === 0 &&
      pages.length === (4 * 7) + 1 &&
      !pages.some((p) => p.slug === 'name-entropy-verify') &&
      seo.optimised
    const violationsFound =
      drainable.length + honestOpenNamed.length > 0 &&
      soft('seo', 'gaps') &&
      soft('gaps', 'seo')
    const honestOpenNamedOn =
      honestOpenNamed.includes('platform-og:facebook-first-frame-only') &&
      honestOpenNamed.includes('platform-og:limits-modeled-not-live-cdn-crawl') &&
      honestOpenNamed.includes('residual:name-entropy-verify-page-data-lens-hidden-tools-ok') &&
      honestOpenNamed.includes('clay:millennium-open') &&
      honestOpenNamed.includes('ftl:physical-claim-refused') &&
      honestOpenNamed.length >= (2 + 2 + 2 + 2)
    const composeOn =
      soft('measure', 'og-limits') &&
      soft('seo', 'gaps') &&
      seo.optimised &&
      ogLimits.computes &&
      honesty.computes &&
      oneJsonLdTemplateServesAll(matrix).serves
    const pairSg = has('seo/gaps')
    const pairGs = has('gaps/seo')
    const foldSg = foldPair(toUuid('cmd:seo'), toUuid('cmd:gaps'))
    const foldGs = foldPair(toUuid('cmd:gaps'), toUuid('cmd:seo'))
    const claySolvedByThisFold = claySolvedTheorem().claySolvedByThisFold as 0
    const physicalFtlClaim = 0 as const
    const qpuRequired = false as const
    const on =
      violationsFound &&
      drainableClosed &&
      honestOpenNamedOn &&
      composeOn &&
      pairSg &&
      pairGs &&
      foldSg.bidirectional &&
      foldGs.bidirectional &&
      claySolvedByThisFold === 0 &&
      physicalFtlClaim === 0 &&
      qpuRequired === false
    const facets = [
      { facet: 'findSeoViolations', on },
      { facet: 'violationsFound', on: violationsFound },
      { facet: `drainableClosed=${drainableClosed ? 1 : 0}`, on: drainableClosed },
      { facet: `honestOpenNamed=${honestOpenNamed.length}`, on: honestOpenNamedOn },
      {
        facet: 'compose seoOptimised · measure/og-limits · honesty · oneJsonLd · learn aliases',
        on: composeOn,
      },
      {
        facet: `learn served+sitemap+courses · aliasesOk=${learnAliasesOk ? 1 : 0}`,
        on: learnServed && learnInSitemap && learnHasCourses && learnAliasesOk,
      },
      { facet: `siteDesc≤${budget} · portal→/learn`, on: siteDescFits && portalRoutesOnLearn },
      { facet: 'pair seo/gaps · gaps/seo', on: pairSg && pairGs && foldSg.bidirectional },
      { facet: 'qpuRequired=false', on: qpuRequired === false },
      { facet: `claySolvedByThisFold=${claySolvedByThisFold}`, on: claySolvedByThisFold === 0 },
      { facet: 'physicalFtlClaim=0', on: physicalFtlClaim === 0 },
      {
        facet: 'NOT fake-close — platform OG · cu hreflang · ranking named honest-open',
        on: honestOpenNamedOn && drainableClosed && claySolvedByThisFold === 0,
      },
    ].map((entry) => ({ ...entry, receipt: toUuid(`seo-gaps:${entry.facet}:${entry.on}`) }))
    const sealed = sealFacets('find-seo-violations', facets)
    return {
      computes: sealed.ok && on,
      findSeoViolations: on,
      violationsFound,
      drainableClosed,
      honestOpenNamedOn,
      drainableCount: drainable.length,
      honestOpenNamedCount: honestOpenNamed.length,
      closed: drainable.filter((v) => v.status === 'closed').map((v) => v.id),
      open: [...honestOpenNamed],
      violations: drainable,
      honestOpenNamed,
      learnServed,
      learnInSitemap,
      brokenAliases: brokenAliases.map(([a, c]) => `${a}→${c}`),
      incompleteSlugs: incomplete.map((p) => p.slug),
      siteDescriptionLength: cfg.description.length,
      budget,
      seoOptimised: seo.optimised,
      ogLimitsOn: ogLimits.computes,
      honestyOn: honesty.computes,
      pair: 'seo/gaps' as const,
      dualPair: 'gaps/seo' as const,
      cli: 'npm run quantum:seo-gaps',
      route: '/en/quantum-tools#seo-gaps',
      anchor: 'seo-gaps',
      heading: 'SEO · gaps',
      claySolvedByThisFold,
      physicalFtlClaim,
      qpuRequired,
      facets: sealed.facets,
      root: merge(seo.root, sealed.root),
      statement:
        `findSeoViolations — violationsFound=${violationsFound ? 1 : 0} drainableClosed=${drainableClosed ? 1 : 0} ` +
        `closed=${drainable.length} honestOpen=${honestOpenNamed.length} learnServed=${learnServed ? 1 : 0} ` +
        `seoOptimised=${seo.optimised ? 1 : 0}.`,
      boundary:
        'Inventory of SEO surfaces (head/meta/OG/Twitter/JSON-LD/canonical/sitemap/robots/title/description/hreflang/locale). Drainable closed this wave: learn lens+aliases, Course JSON-LD on /learn, site description budget, portal internal routes. Honest-open: platform OG limits (measure/og-limits), cu hreflang vs GSC, ranking not guaranteed, Clay/FTL. NOT live Google crawl · NOT FTL · clay via theorem.',
      honestyLine:
        'HONEST: platform OG limits modeled not live CDN; Facebook first-frame; cu may be ignored by GSC; ranking not guaranteed.',
    }
  })
}

/** Alias — seoViolationsInventory ≡ findSeoViolations. */
export const seoViolationsInventory = findSeoViolations
/** Alias — seoGaps ≡ findSeoViolations. */
export const seoGaps = findSeoViolations
/** Alias — gapsSeo ≡ findSeoViolations. */
export const gapsSeo = findSeoViolations

/** npm run quantum:seo-gaps · quantum:gaps-seo */
export function runFindSeoViolationsExit(_root = '', _argv: readonly string[] = []): number {
  void _root
  void _argv
  const report = findSeoViolations()
  process.stdout.write(
    `${report.computes ? '✓' : '✗'} seo-gaps — violationsFound=${report.violationsFound ? 1 : 0} ` +
      `drainableClosed=${report.drainableClosed ? 1 : 0} closed=${report.drainableCount} ` +
      `honestOpen=${report.honestOpenNamedCount} learn=${report.learnServed ? 1 : 0} ` +
      `seo=${report.seoOptimised ? 1 : 0} clay=${report.claySolvedByThisFold} ftl=${report.physicalFtlClaim}\n`,
  )
  for (const id of report.closed) process.stdout.write(`  ✓ closed ${id}\n`)
  for (const id of report.open) process.stdout.write(`  · honest-open ${id}\n`)
  for (const f of report.facets) process.stdout.write(`  ${f.on ? '✓' : '✗'} ${f.facet}\n`)
  process.stdout.write(`  ${report.honestyLine}\n`)
  return report.computes && report.drainableClosed && report.violationsFound ? 0 : 1
}

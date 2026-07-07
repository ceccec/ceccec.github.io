// Browser-safe component → sealed fold loaders (dynamic import — no monolith at parse time).
import type { ComponentCrosslink } from './crosslinks'
import type { DecodedFacet, DecodedStation } from '../theme/components/DecodedCard.vue'
import type { QuantumProjection } from './hero-movie'
import { displayText, localePath, pickLocale, type LocaleName } from './site-locale'

export type DecodedFoldView = {
  title?: string
  statement?: string
  boundary?: string
  facets?: DecodedFacet[]
  stations?: DecodedStation[]
  crosslinks?: ComponentCrosslink[]
  ok?: boolean
  /** Quantum-app projection painted as the card movie (the animation that proves the statement). */
  movieApp?: QuantumProjection
}

export type FoldLoader = (locale: LocaleName) => Promise<DecodedFoldView>

function localizeDecodedView(view: DecodedFoldView, locale: LocaleName): DecodedFoldView {
  return {
    ...view,
    title: view.title ? displayText(locale, view.title) : view.title,
    statement: view.statement ? displayText(locale, view.statement) : view.statement,
    boundary: view.boundary ? displayText(locale, view.boundary) : view.boundary,
    facets: view.facets?.map((facet) => ({
      ...facet,
      facet: displayText(locale, facet.facet) ?? facet.facet,
    })),
    stations: view.stations?.map((station) => ({
      ...station,
      station: displayText(locale, station.station) ?? station.station,
    })),
  }
}

function wrapFold(fn: () => Promise<DecodedFoldView>): FoldLoader {
  return async (locale) => localizeDecodedView(await fn(), locale)
}

export async function withCrosslinks(
  name: string,
  view: DecodedFoldView,
  locale: LocaleName = 'en',
): Promise<DecodedFoldView> {
  const { componentCrosslinks } = await import('./crosslinks')
  const localized = localizeDecodedView(view, locale)
  const computed = componentCrosslinks(name, locale)
  const seen = new Set(computed.map((entry) => entry.link))
  const normalizeLink = (link: string) => (
    /^(https?:|mailto:|#)/.test(link) || /\.(json|txt|webmanifest)$/.test(link)
      ? link
      : localePath(link, locale)
  )
  const merged = [
    ...computed,
    ...(view.crosslinks ?? []).map((entry) => ({ ...entry, link: normalizeLink(entry.link) })).filter((entry) => {
      if (seen.has(entry.link)) return false
      seen.add(entry.link)
      return true
    }),
  ]
  return { ...localized, crosslinks: merged.slice(0, (7 * 2)) }
}

type FoldLike = {
  statement?: string
  boundary?: string
  decoded?: boolean
  complete?: boolean
  alive?: boolean
  sealed?: boolean
  facets?: DecodedFacet[]
  stations?: DecodedStation[]
  documented?: string[]
  flagged?: string[]
  [key: string]: unknown
}

async function fromStaticPage(slug: string, locale: LocaleName): Promise<DecodedFoldView> {
  const { staticPages } = await import('../../src/wind/site/index')
  const page = staticPages().find((entry) => entry.slug === slug)
  return {
    title: page ? pickLocale(locale, page.title.en, page.title.bg) : slug,
    statement: page ? pickLocale(locale, page.description.en, page.description.bg) : undefined,
    boundary: page?.category,
    ok: Boolean(page),
  }
}

function fromFacets(fold: FoldLike, title?: string): DecodedFoldView {
  return {
    title,
    statement: fold.statement,
    boundary: fold.boundary,
    facets: fold.facets?.map((entry) => ({
      facet: entry.facet,
      on: entry.on ?? true,
      receipt: entry.receipt,
    })),
    ok: fold.decoded ?? fold.complete ?? fold.alive ?? fold.sealed
      ?? (Array.isArray(fold.facets) ? fold.facets.every((entry) => entry.on !== false) : undefined),
  }
}

function fromDocumentedFlagged(
  fold: { documented: string[]; flagged: string[]; statement?: string; boundary?: string; decoded?: boolean },
  title?: string,
): DecodedFoldView {
  return {
    title,
    statement: fold.statement,
    boundary: fold.boundary,
    facets: [
      ...fold.documented.map((entry) => ({ facet: entry, on: true })),
      ...fold.flagged.map((entry) => ({ facet: entry, on: false })),
    ],
    ok: fold.decoded,
  }
}

async function fromSimulatorFamily(familyName: string, title: string): Promise<DecodedFoldView> {
  const { everyDecodedDomainHasASimulator } = await import('../../src/fire/physics/index')
  const fold = everyDecodedDomainHasASimulator()
  const family = fold.families.find((entry) => entry.family === familyName)
  return {
    title,
    statement: fold.statement,
    boundary: fold.boundary,
    facets: family?.domains.map((domain) => ({ facet: domain, on: family.check })),
    ok: Boolean(family?.check && fold.homed),
  }
}

function fromFold(fold: FoldLike, title?: string): DecodedFoldView {
  let facets = fold.facets?.map((entry) => ({
    facet: entry.facet,
    on: entry.on ?? true,
    receipt: entry.receipt,
  }))
  if (!facets && Array.isArray(fold.seals)) {
    facets = (fold.seals as Array<{ name: string }>).map((seal) => ({ facet: seal.name, on: true }))
  }
  if (!facets && Array.isArray(fold.dualities)) {
    facets = (fold.dualities as Array<{ left: string; right: string }>)
      .slice(0, (6 * 2))
      .map((pair) => ({ facet: `${pair.left} ↔ ${pair.right}`, on: true }))
  }
  if (!facets && Array.isArray(fold.roles)) {
    facets = (fold.roles as Array<{ name: string; responsibility: string }>).map((role) => ({
      facet: `${role.name}: ${role.responsibility}`,
      on: true,
    }))
  }
  return {
    title,
    statement: fold.statement,
    boundary: fold.boundary,
    facets,
    stations: fold.stations,
    ok: fold.decoded ?? fold.complete ?? fold.alive ?? fold.sealed,
  }
}

export type LegacyFoldLoader = () => Promise<DecodedFoldView>
export type AnyFoldLoader = FoldLoader | LegacyFoldLoader

export async function invokeFoldLoader(loader: AnyFoldLoader, locale: LocaleName): Promise<DecodedFoldView> {
  if (loader.length >= 1) return (loader as FoldLoader)(locale)
  return localizeDecodedView(await (loader as LegacyFoldLoader)(), locale)
}

export const COMPONENT_FOLD_LOADERS: Record<string, AnyFoldLoader> = {
  StartHere: async (locale) => {
    const { startHereDecodedView } = await import('../../src/thunder/movie/glass')
    return startHereDecodedView(locale)
  },
  BulgarianHeritage: wrapFold(async () => {
    const { bulgarianHeritageDecoded } = await import('../../src/earth/world/index')
    return fromFold(bulgarianHeritageDecoded(), 'Bulgarian heritage')
  }),
  BulgarianHistory: wrapFold(async () => {
    const { bulgarianHistoryDecoded } = await import('../../src/earth/world/index')
    return fromFold(bulgarianHistoryDecoded(), 'Bulgarian history')
  }),
  BulgarianEthnogenesis: wrapFold(async () => {
    const { bulgarianEthnogenesisDecoded } = await import('../../src/earth/world/index')
    return fromFold(bulgarianEthnogenesisDecoded(), 'Bulgarian ethnogenesis')
  }),
  SacredGeometry: wrapFold(async () => {
    const { sacredGeometrySeal } = await import('../../src/mountain/geometry/index')
    return { ...fromFold(sacredGeometrySeal(), 'Sacred geometry'), movieApp: 'sacred-morph' }
  }),
  Society: wrapFold(async () => {
    const { scientificSociety } = await import('../../src/earth/governance/index')
    const fold = scientificSociety()
    return {
      title: 'Society',
      statement: fold.charter,
      boundary: fold.boundary,
      facets: fold.roles.map((role) => ({ facet: `${role.name}: ${role.responsibility}`, on: true })),
      ok: fold.grounded,
    }
  }),
  PlayLearn: async () => {
    const { playLearn } = await import('../../src/quantum/lake/voice/index')
    const fold = playLearn()
    return {
      title: 'Play & learn',
      statement: fold.statement,
      boundary: fold.boundary,
      facets: fold.letters.map((letter) => ({
        facet: `${letter.char} → ${letter.note} (${Math.round(letter.frequency)} Hz)`,
        on: true,
      })),
      ok: fold.playable,
    }
  },
  Dualities: async () => {
    const { dualities } = await import('../../src/quantum/lake/spirit/index')
    return fromFold(dualities(), 'Dualities')
  },
  TamperingCost: async () => {
    const { tamperingCostDecodedView } = await import('../../src/thunder/movie/glass')
    return tamperingCostDecodedView()
  },
  PathGuide: async () => {
    const { path } = await import('../../src/heaven/core/index')
    const guided = path()
    return {
      title: 'Guided path',
      statement: guided.statement,
      boundary: guided.boundary,
      stations: guided.stations.map((station) => ({
        step: station.step,
        station: station.station,
        route: station.route,
        why: station.why,
      })),
      ok: guided.complete,
    }
  },
  A432: async () => {
    const { a432 } = await import('../../src/fire/li/index')
    return fromDocumentedFlagged(a432(), 'A432')
  },
  QuantumCircuit: () => fromSimulatorFamily('quantum', 'Quantum circuit'),
  ProbSim: () => fromSimulatorFamily('probabilistic', 'Probabilistic simulator'),
  DynSim: () => fromSimulatorFamily('dynamical', 'Dynamical simulator'),
  NetSim: () => fromSimulatorFamily('network', 'Network simulator'),
  AnalogField: async () => {
    const { foldingLinearGivesAnalog } = await import('../../src/earth/world/index')
    return fromDocumentedFlagged(foldingLinearGivesAnalog(), 'Analog field')
  },
  Multidimensional: async () => {
    const { multidimensional } = await import('../../src/quantum/lake/voice/index')
    const fold = multidimensional()
    return {
      title: 'Multidimensional',
      statement: fold.statement,
      boundary: fold.boundary,
      facets: fold.dimensions.flatMap((dimension) =>
        dimension.items.slice(0, 2).map((item) => ({
          facet: `${dimension.icon} ${dimension.dimension}: ${item.label}`,
          on: true,
          link: item.route,
        })),
      ).slice(0, (6 * 2)),
      ok: fold.mapped,
    }
  },
  QuantumConsole: async () => {
    const { selfConsult } = await import('../../src/mountain/geometry/index')
    const fold = selfConsult('proof')
    return {
      title: 'Quantum console',
      statement: fold.statement,
      boundary: fold.boundary,
      facets: [
        { facet: `concept: ${fold.concept}`, on: fold.matched },
        { facet: `command: ${fold.command}`, on: Boolean(fold.command) },
        ...fold.sources.slice(0, 6).map((source) => ({ facet: source, on: true })),
      ],
      ok: fold.consulted && fold.educated,
    }
  },
  McpTools: async () => {
    const { mcpToolManifest } = await import('../../src/wind/learning/index')
    const fold = mcpToolManifest()
    return {
      title: 'MCP tools',
      statement: fold.statement,
      boundary: fold.boundary,
      facets: fold.tools.slice(0, (6 * 2)).map((tool) => ({ facet: tool.name, on: true })),
      crosslinks: [
        { text: 'MCP page', link: '/mcp', kind: 'topic' },
        { text: 'mcp.json', link: '/mcp.json', kind: 'detail' },
      ],
      ok: fold.tools.length > 0,
    }
  },
  QuantumLens: async () => {
    const { quantumAnalysis } = await import('../../src/heaven/core/index')
    const fold = quantumAnalysis('quantum lens')
    return fromFacets(fold, 'Quantum lens')
  },
  Compass: async () => {
    const { quantumCoordinateNav } = await import('../../src/fire/features/index')
    const fold = quantumCoordinateNav()
    return {
      title: 'Compass',
      statement: fold.statement,
      boundary: fold.boundary,
      facets: fold.coordinates.slice(0, 8).map((coordinate) => ({
        facet: `${coordinate.label} → (${coordinate.x.toFixed(1)}, ${coordinate.y.toFixed(1)}, ${coordinate.z.toFixed(1)})`,
        on: true,
        link: coordinate.route,
      })),
      ok: fold.placed,
    }
  },
  YinYang: async () => {
    const { yinYang } = await import('../../src/quantum/lake/spirit/index')
    const fold = yinYang()
    return {
      title: 'Yin and yang',
      statement: fold.statement,
      boundary: fold.boundary,
      facets: fold.tiers.flatMap((tier) =>
        tier.members.map((member) => ({ facet: `${tier.name}: ${member}`, on: true })),
      ),
      ok: fold.complete,
      movieApp: 'taiji',
    }
  },
  ChakrasAura: async () => {
    const { chakrasAura } = await import('../../src/quantum/lake/spirit/index')
    const fold = chakrasAura()
    return {
      title: 'Chakras and aura',
      statement: fold.statement,
      boundary: fold.boundary,
      facets: fold.tiers.flatMap((tier) =>
        tier.members.map((member) => ({ facet: `${tier.name}: ${member}`, on: true })),
      ),
      ok: fold.complete,
    }
  },
  GlyphLabyrinth: async () => {
    const { donutLabyrinthOfGlyphsHeroEnteringExiting } = await import('../../src/mountain/topology/index')
    return { ...fromFacets(donutLabyrinthOfGlyphsHeroEnteringExiting(), 'Glyph labyrinth'), movieApp: 'labyrinth' }
  },
  GlagoliticOcr: async () => {
    const { glagoliticOcrReverseClosesRoundTrip } = await import('../../src/wind/language/index')
    return fromFacets(glagoliticOcrReverseClosesRoundTrip(), 'Glagolitic OCR')
  },
  TaxonomyIcons: async () => {
    const { taxonomyIcons } = await import('../../src/fire/li/index')
    const fold = taxonomyIcons()
    return {
      title: 'Taxonomy icons',
      statement: fold.statement,
      boundary: fold.boundary,
      facets: fold.entries.slice(0, (6 * 2)).map((entry) => ({
        facet: `${entry.icon} ${entry.area} (${entry.count})`,
        on: entry.clean,
      })),
      ok: fold.grounded,
    }
  },
  HarmonicMap: async () => {
    const { harmonicBands } = await import('../../src/quantum/lake/icons/index')
    const fold = harmonicBands(108 + 2) // 110 — the raw census (folded 108 = 110 + χ)
    return {
      title: 'Harmonic map',
      statement: fold.statement,
      boundary: fold.boundary,
      facets: fold.bands.map((band, index) => ({ facet: `band ${index + 1}: ${band}`, on: true })),
      ok: fold.gapless,
    }
  },
  ProofRenderer: async () => {
    const { proofRendererDecodedView } = await import('../../src/thunder/movie/glass')
    return proofRendererDecodedView()
  },
  KnowledgeAtlas: async () => {
    const { decodeKnowledge } = await import('../../src/wind/learning/index')
    const fold = decodeKnowledge()
    return {
      title: 'Knowledge atlas',
      statement: fold.statement,
      boundary: fold.boundary,
      facets: [
        { facet: `${fold.areas} areas`, on: fold.decoded },
        { facet: `${fold.atoms} atoms`, on: fold.atoms > 0 },
        { facet: `${fold.commands} commands`, on: fold.commands > 0 },
      ],
      ok: fold.decoded,
    }
  },
  QuantumRadar: async () => {
    const { deepResearchRadar } = await import('../../src/wind/learning/index')
    const fold = deepResearchRadar()
    return {
      title: 'Quantum radar',
      statement: fold.statement,
      boundary: fold.boundary,
      facets: fold.blips.slice(0, (6 * 2)).map((blip) => ({
        facet: `${blip.name} (${blip.ring})`,
        on: blip.ring === 'adopt',
      })),
      ok: fold.radar,
    }
  },
  QuantumClock: async () => {
    const { quantumClock } = await import('../../src/fire/features/index')
    const fold = quantumClock(0)
    return {
      title: 'Quantum clock',
      statement: fold.statement,
      boundary: fold.boundary,
      facets: [
        { facet: `tick ${fold.tick}: ${fold.note}`, on: fold.ticking },
        { facet: `${fold.frequency} Hz · ${fold.hsl}`, on: true },
        { facet: `caesium standard: ${fold.caesiumHz} Hz`, on: true },
      ],
      ok: fold.ticking,
    }
  },
  DeviceDashboard: async () => {
    const { deviceHardwareVisibleInComputedWidgets } = await import('../../src/earth/world/index')
    return fromFacets(deviceHardwareVisibleInComputedWidgets(), 'Device dashboard')
  },
  HumanLens: async () => {
    const { humanize } = await import('../../src/quantum/lake/voice/index')
    const fold = humanize()
    return {
      title: 'Human lens',
      statement: fold.statement,
      boundary: fold.boundary,
      facets: fold.translations.map((entry) => ({
        facet: `${entry.idea} → ${entry.human}`,
        on: true,
      })),
      ok: fold.human,
    }
  },
  BoundaryAudit: async () => {
    const { boundaryAudit } = await import('../../src/lake/clean/index')
    const fold = boundaryAudit()
    return {
      title: 'Boundary audit',
      statement: fold.statement,
      boundary: fold.boundary,
      facets: fold.boundaries.slice(0, 8).map((entry) => ({
        facet: entry.boundary.slice(0, (16 * 5)),
        on: true,
      })),
      ok: fold.audited,
    }
  },
  Hologram: async () => {
    const { hologramDecodedView } = await import('../../src/thunder/movie/glass')
    return { ...hologramDecodedView(), movieApp: 'hologram' }
  },
  HologramMovie: async () => {
    const { moviesNativeFormat } = await import('../../src/fire/li/index')
    const fold = moviesNativeFormat()
    return {
      title: 'Hologram movie',
      statement: fold.statement,
      boundary: fold.boundary,
      facets: fold.properties.map((entry) => ({
        facet: `${entry.property}: ${entry.via}`,
        on: true,
      })),
      ok: fold.nativelyDisplayed,
      movieApp: 'movie-10d',
    }
  },
  AncientDecodes: wrapFold(async () => {
    const { discoverDecodeAncientKnowledgeFittingPath } = await import('../../src/thunder/decode/index')
    const fold = discoverDecodeAncientKnowledgeFittingPath()
    return {
      title: 'Ancient decodes — the path catalog',
      statement: fold.statement,
      boundary: fold.boundary,
      // Green facets = decoded and holding; hollow facets = the open frontier (the next waves).
      facets: [
        ...fold.decoded.map((entry) => ({ facet: entry.domain, on: entry.on })),
        ...fold.frontier.map((domain) => ({ facet: `frontier — ${domain}`, on: false })),
      ],
      ok: fold.discovering,
    }
  }),
  VortexStrokes: wrapFold(async () => {
    const { vortexStrokeGateways, vortexGatewayPyramids } = await import('../../src/mountain/vortex/index')
    const strokes = vortexStrokeGateways()
    const pyramids = vortexGatewayPyramids()
    return {
      title: 'Vortex strokes — the genesis cycle',
      statement: strokes.statement,
      boundary: pyramids.boundary,
      // The written cycle leads — read it first, then every computed claim about it; the card movie
      // plays the dedicated vortex-strokes projection (the same math, animated).
      facets: [
        { facet: strokes.written, on: strokes.computes },
        ...strokes.facets,
        ...pyramids.facets,
      ].slice(0, (6 * 2)),
      ok: strokes.computes && pyramids.computes,
      movieApp: 'vortex-strokes',
    }
  }),
  Live: async () => {
    const { live } = await import('../../src/lake/media/index')
    const fold = live()
    return {
      title: 'Live',
      statement: fold.statement,
      boundary: fold.boundary,
      facets: fold.vitals.map((vital) => ({
        facet: `${vital.vital}: ${vital.reading}`,
        on: vital.ok,
        link: vital.route,
      })),
      ok: fold.alive,
    }
  },
}

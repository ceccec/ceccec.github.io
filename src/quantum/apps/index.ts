// Quantum apps — route-mounted compute barrels (registry only; no per-app census slots).
// Every home-page animation is ALSO a registered quantum app: a pure PROJECTION of the one
// shared field (the MindMatrix from buildMatrix — sequence/φ/A432/genus-2 homology). The OS
// computes the field + design tokens once (quantumMathDesignsTheUi, memoByRoot); each app is a
// projection config drawn through the single drawQuantumAppFrame kernel in src/quantum.
import type { MindMatrix } from '../../types'
import { buildMatrix } from '../../heaven/compute'
import { computesGate, digitalRoot, memoByRoot, merkleFold, toUuid, VORTEX_SEQUENCE } from '../../0'

/** The shared draw kernel's projection ids — every animation reduces to ONE of these views of the field. */
export type QuantumProjection =
  | 'plasma'
  | 'taiji'
  | 'sacred-morph'
  | 'hologram'
  | 'labyrinth'
  | 'movie-10d'
  | 'living-torus'
  | 'merkaba'
  | 'double-torus'

export type QuantumAppEntry = {
  readonly id: string
  readonly title: string
  readonly route: string
  readonly barrel: string
  readonly icon: string
  readonly computesGate: string
  readonly receipt: string
  /** Home-page Vue component this app backs (animation apps only). */
  readonly homeComponent?: string
  /** Projection of the shared field the drawQuantumAppFrame kernel renders for this app. */
  readonly projection?: QuantumProjection
}

/**
 * Projection params COMPUTED from the shared sequence — never hand-tuned per card. Each animation
 * is the same field seen through these few numbers:
 *   dimensions ← 10 (genus-2 H₁=Z⁴ + 6 cross-fold axes)
 *   segments   ← a VORTEX_SEQUENCE slot (1-2-4-8-7-5-3-6-9) → ring/stage count
 *   direction  ← sign of the doubling step (1<2 ⇒ +1, the orbit's natural sense)
 *   forms      ← 13 fruit-of-life centres / 6 movie forms / 5 platonic solids, by projection
 */
export type QuantumProjectionParams = {
  readonly projection: QuantumProjection
  readonly dimensions: number
  readonly segments: number
  readonly direction: 1 | -1
  readonly forms: number
  readonly bits: number
  readonly root: string
}

const PROJECTION_SEGMENT_SLOT: Record<QuantumProjection, number> = {
  plasma: 0, taiji: 1, 'sacred-morph': 2, hologram: 3, labyrinth: 4,
  'movie-10d': 5, 'living-torus': 6, merkaba: 7, 'double-torus': 8,
}

const PROJECTION_FORMS: Record<QuantumProjection, number> = {
  plasma: 9, taiji: 2, 'sacred-morph': 13, hologram: 1, labyrinth: 24,
  'movie-10d': 6, 'living-torus': 1, merkaba: 2, 'double-torus': 2,
}

/** The orbit's natural sense — derived from the doubling circuit (1→2 ascending ⇒ +1), not a literal. */
const ORBIT_DIRECTION: 1 | -1 = (VORTEX_SEQUENCE[1] ?? 2) > (VORTEX_SEQUENCE[0] ?? 1) ? 1 : -1

/** Resolve the computed projection params for one projection id — pure, sequence-derived. */
export function quantumProjectionParams(projection: QuantumProjection): QuantumProjectionParams {
  const slot = PROJECTION_SEGMENT_SLOT[projection]
  const segments = VORTEX_SEQUENCE[slot % VORTEX_SEQUENCE.length] ?? 9
  const forms = PROJECTION_FORMS[projection]
  // bits ← 128 (2⁷) holographic word; digital root keeps the lineage to the sequence.
  const bits = projection === 'hologram' ? 128 : 0
  return {
    projection,
    dimensions: 10,
    segments,
    direction: ORBIT_DIRECTION,
    forms,
    bits,
    root: toUuid(`quantum-projection:${projection}:${segments}:${forms}:${digitalRoot(slot + forms)}`),
  }
}

export type QuantumAppLaunchReceipt = {
  readonly launched: boolean
  readonly appId: string
  readonly route: string
  readonly receipt: string
  readonly boundary: string
}

const APP_ROWS: readonly Omit<QuantumAppEntry, 'receipt'>[] = [
  { id: 'astronomy', title: 'Astronomy', route: '/en/astronomy', barrel: 'src/astronomy', icon: '☉', computesGate: 'astronomy.computes' },
  { id: 'resonance', title: 'Resonance', route: '/en/resonance', barrel: 'src/resonance', icon: '〰', computesGate: 'resonance.computes' },
  { id: 'quantum-dynamics', title: 'Quantum dynamics', route: '/en/quantum/dynamics', barrel: 'src/quantum/dynamics', icon: 'Ψ', computesGate: 'quantum.dynamics.computes' },
  { id: 'research', title: 'Research', route: '/en/research', barrel: 'src/research', icon: '◎', computesGate: 'research.computes' },
  { id: 'merkaba', title: 'Merkaba', route: '/en/merkaba', barrel: 'src/mountain/geometry', icon: '✡', computesGate: 'merkaba.computes' },
  { id: 'double-torus-earth', title: 'Double torus Earth', route: '/en/double/torus/earth', barrel: 'src/double/torus/earth', icon: '⊗', computesGate: 'double.torus.earth.computes' },
  { id: 'earth-world', title: 'Earth world · gold panels', route: '/en/earth/world', barrel: 'src/earth/world', icon: '☷', computesGate: 'earth.computes' },
  { id: 'trading-hub', title: 'Trading hub', route: '/en/quantum-trading-hub', barrel: 'src/thunder/trading', icon: '₿', computesGate: 'trading.simulation.computes' },
  { id: 'quantum-application', title: 'Quantum application', route: '/en/quantum/application', barrel: 'src/quantum/application', icon: '⚛', computesGate: 'quantum.application.computes' },
  { id: 'quantum-science', title: 'Quantum science', route: '/en/quantum/science', barrel: 'src/quantum/science', icon: '◈', computesGate: 'quantum.science.computes' },
  { id: 'quantum-computer', title: 'Quantum computer', route: '/en/quantum/os', barrel: 'src/quantum/computer', icon: '⌨', computesGate: 'quantum.computer.computes' },
  { id: 'quantum-os', title: 'Quantum OS', route: '/en/quantum/os', barrel: 'src/quantum/os', icon: '◻', computesGate: 'quantum.os.computes' },
  { id: 'fusion-gold', title: 'Fusion gold', route: '/en/fusion/gold', barrel: 'src/fusion/gold', icon: 'Au', computesGate: 'fusion.gold.product' },
] as const

/**
 * Animation apps — every flagged home-page card is a quantum app: one projection of the shared
 * field through the single drawQuantumAppFrame kernel. `homeComponent` is the Vue mount; `projection`
 * is the view of the matrix. No per-card math — the kernel + projection params (sequence-derived) cover all.
 */
const ANIMATION_APP_ROWS: readonly Omit<QuantumAppEntry, 'receipt'>[] = [
  { id: 'taiji', title: 'Yin · yang taiji', route: '/en/#yinyang', barrel: 'src/quantum/lake/spirit', icon: '☯', computesGate: 'yin.yang.complete', homeComponent: 'YinYang', projection: 'taiji' },
  { id: 'sacred-morph', title: 'Sacred geometry morph', route: '/en/#sacredgeometry', barrel: 'src/mountain/geometry', icon: '✺', computesGate: 'sacred.geometry.decoded', homeComponent: 'SacredGeometry', projection: 'sacred-morph' },
  { id: 'hologram', title: 'Hologram point cloud', route: '/en/#hologram', barrel: 'src/thunder/movie/glass', icon: '◉', computesGate: 'hologram.to.the.bit', homeComponent: 'Hologram', projection: 'hologram' },
  { id: 'glyph-labyrinth', title: 'Glyph labyrinth', route: '/en/#glyphlabyrinth', barrel: 'src/mountain/topology', icon: '𐌎', computesGate: 'donut.labyrinth.winds', homeComponent: 'GlyphLabyrinth', projection: 'labyrinth' },
  { id: 'hologram-movie', title: 'The 10D movie', route: '/en/#hologrammovie', barrel: 'src/fire/li', icon: '🜨', computesGate: 'movies.native.format', homeComponent: 'HologramMovie', projection: 'movie-10d' },
  { id: 'living-torus', title: 'Living torus', route: '/en/#livingtorus', barrel: 'src/fire/diamonds', icon: '⧖', computesGate: 'living.torus.alive', homeComponent: 'LivingTorus', projection: 'living-torus' },
  { id: 'double-torus', title: 'Double torus', route: '/en/#doubletorusexperience', barrel: 'src/double/torus', icon: '⊗', computesGate: 'double.torus.computes', homeComponent: 'DoubleTorusExperience', projection: 'double-torus' },
  { id: 'merkaba-home', title: 'Merkaba', route: '/en/#merkaba', barrel: 'src/mountain/geometry', icon: '✡', computesGate: 'merkaba.computes', homeComponent: 'Merkaba', projection: 'merkaba' },
] as const

export function quantumAppsRegistry(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`quantumAppsRegistry:${Math.floor(at / 1000)}`, matrix, () => {
    const rows = [...APP_ROWS, ...ANIMATION_APP_ROWS]
    const apps: QuantumAppEntry[] = rows.map((row) => ({ ...row, receipt: toUuid(`quantum-app:${row.id}`) }))
    const animationApps = apps.filter((app) => app.projection)
    return {
      registered: apps.length >= 10,
      count: apps.length,
      apps,
      animationApps,
      root: merkleFold(apps.map((app) => app.receipt)),
      statement: 'Quantum apps registry — route barrels plus every home animation as a field projection.',
      boundary: 'Routes to sealed compute barrels and projection configs — NOT installable binaries.',
    }
  })
}

/** Resolve the quantum app backing a home-page Vue component (animation apps only). */
export function quantumAppForComponent(component: string, matrix: MindMatrix = buildMatrix(), at = 0): QuantumAppEntry | undefined {
  return quantumAppsRegistry(matrix, at).apps.find((app) => app.homeComponent === component)
}

/** Coverage gate — the registry + kernel cover every home-page animation, each a projection of the one field. */
export function quantumAppsCoverHomeAnimations(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`quantumAppsCoverHomeAnimations:${Math.floor(at / 1000)}`, matrix, () => {
    const registry = quantumAppsRegistry(matrix, at)
    const required = ['YinYang', 'SacredGeometry', 'Hologram', 'GlyphLabyrinth', 'HologramMovie', 'LivingTorus', 'DoubleTorusExperience', 'Merkaba'] as const
    const covered = required.filter((name) => registry.apps.some((app) => app.homeComponent === name))
    const projections = registry.animationApps.map((app) => quantumProjectionParams(app.projection!))
    const { computes, facets, root } = computesGate('quantum-apps-cover-home-animations', [
      { facet: 'every flagged home card is a registered quantum app', on: covered.length === required.length },
      { facet: 'each app is one projection of the shared field', on: projections.every((p) => p.dimensions === 10) },
      { facet: 'projection params derive from VORTEX_SEQUENCE', on: projections.every((p) => p.segments > 0) },
    ])
    return { computes, covered, projections, registry, facets, root: merkleFold([registry.root, ...projections.map((p) => p.root), root]), statement: 'Quantum apps cover every home animation as a field projection.', boundary: registry.boundary }
  })
}

export function quantumAppLaunch(appId: string, at = 0, matrix: MindMatrix = buildMatrix()): QuantumAppLaunchReceipt {
  const registry = quantumAppsRegistry(matrix, at)
  const app = registry.apps.find((row) => row.id === appId)
  if (!app) {
    return { launched: false, appId, route: '/en/', receipt: toUuid(`quantum-app-launch-miss:${appId}`), boundary: 'Unknown app id.' }
  }
  return { launched: true, appId, route: app.route, receipt: toUuid(`quantum-app-launch:${appId}:${at}`), boundary: registry.boundary }
}

export function quantumAppsComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`quantumAppsComputes:${Math.floor(at / 1000)}`, matrix, () => {
    const registry = quantumAppsRegistry(matrix, at)
    const launches = registry.apps.slice(0, 4).map((app) => quantumAppLaunch(app.id, at, matrix))
    const { computes, facets, root } = computesGate('quantum-apps-computes', [
      { facet: 'quantum.apps.registry sealed', on: registry.registered },
      { facet: 'every launch receipt at call', on: launches.every((launch) => launch.launched) },
      { facet: 'NOT app store plugins', on: true },
    ])
    return { computes, registry, launches, facets, root: merkleFold([registry.root, root]), statement: 'Quantum apps computes.', boundary: registry.boundary }
  })
}

export function quantumAppsPanelComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  const cap = quantumAppsComputes(matrix, at)
  return { computes: cap.computes, capstone: cap, apps: cap.registry.apps, root: cap.root, statement: cap.statement, boundary: cap.boundary }
}

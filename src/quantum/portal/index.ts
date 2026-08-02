// Wave 5: Portal Integration — live theorem discovery interface for chat/realtime

import { merkleFold, toUuid } from '../../0'
import { sealedTheoremsWithProofs, openTheoremsWithGaps, showcaseCard, frontierCard, theoremSummary, theoremsByInvolutionType } from '../chat'
import type { Theorem } from '../chat'

function getAllTheorems(): Theorem[] {
  const sealed = sealedTheoremsWithProofs()
  const frontier = openTheoremsWithGaps()
  const seen = new Set<string>()
  const all: Theorem[] = []
  for (const t of [...sealed, ...frontier]) {
    if (!seen.has(t.problem)) {
      seen.add(t.problem)
      all.push(t)
    }
  }
  return all
}

interface TheoremQuery {
  status?: 'sealed' | 'open' | 'frontier' | 'provisional' | 'all'
  domain?: 'clay' | 'tier1' | 'tier2' | 'tier3' | 'tier4' | 'tier5'
  search?: string
  limit?: number
}

interface PortalResponse {
  theorems: Theorem[]
  count: number
  cardHtml: string
  summary: string
  identity: string
}

export function queryTheoremsViaPortal(q: TheoremQuery = {}): PortalResponse {
  const allTheorems = getAllTheorems()
  let results = allTheorems

  // Filter by status
  if (q.status === 'sealed') {
    const sealed = sealedTheoremsWithProofs()
    results = results.filter(t => sealed.some(s => s.problem === t.problem))
  } else if (q.status === 'frontier' || q.status === 'open') {
    const frontier = openTheoremsWithGaps()
    results = results.filter(t => frontier.some(f => f.problem === t.problem))
  } else if (q.status === 'provisional') {
    results = results.filter(t => t.proofStatus === 'provisional-involution')
  }

  // Filter by domain (Clay Millennium, tiers)
  if (q.domain) {
    const clayDomains = ['clay']
    const tierMap = { tier1: 'tier1', tier2: 'tier2', tier3: 'tier3', tier4: 'tier4', tier5: 'tier5' }
    const domain = tierMap[q.domain as keyof typeof tierMap] || q.domain
    results = results.filter(t => t.problem.includes(domain))
  }

  // Text search in problem/title/statement
  if (q.search) {
    const needle = q.search.toLowerCase()
    results = results.filter(t =>
      t.problem.toLowerCase().includes(needle) ||
      t.title.toLowerCase().includes(needle) ||
      t.statement?.toLowerCase().includes(needle)
    )
  }

  // Limit results
  const limited = results.slice(0, q.limit || 10)

  // Format response
  const cardHtml = limited
    .map((t, i) => {
      if (t.sealed) {
        return showcaseCard(t)
      } else if (t.proofStatus?.includes('open') || t.proofStatus === 'contested') {
        return frontierCard(t)
      } else {
        return theoremSummary(t)
      }
    })
    .join('\n')

  const summary = `Portal found ${limited.length}/${results.length} theorems (query: ${JSON.stringify(q)})`
  const identity = toUuid(JSON.stringify({ query: q, timestamp: Date.now(), count: limited.length }))

  return {
    theorems: limited,
    count: limited.length,
    cardHtml,
    summary,
    identity
  }
}

export function portalStatistics() {
  const all = getAllTheorems()
  const sealed = sealedTheoremsWithProofs()
  const frontier = openTheoremsWithGaps()

  const stats = {
    total: all.length,
    sealed: sealed.length,
    frontier: frontier.length,
    byStatus: {
      solved: all.filter(t => t.proofStatus?.includes('solved') || t.proofStatus?.includes('proved')).length,
      provisional: all.filter(t => t.proofStatus?.includes('provisional')).length,
      open: all.filter(t => t.proofStatus?.includes('open')).length,
      contested: all.filter(t => t.proofStatus === 'contested').length
    },
    byClay: all.filter(t => t.problem.includes('clay')).length,
    byTier: {
      tier1: all.filter(t => t.problem.includes('tier1')).length,
      tier2: all.filter(t => t.problem.includes('tier2')).length,
      tier3: all.filter(t => t.problem.includes('tier3')).length,
      tier4: all.filter(t => t.problem.includes('tier4')).length,
      tier5: all.filter(t => t.problem.includes('tier5')).length
    },
    avgProofOutlineLength: Math.round(
      all.filter(t => t.proofOutline).reduce((sum, t) => sum + (t.proofOutline?.length || 0), 0) /
      all.filter(t => t.proofOutline).length
    ),
    gapDocumentation: frontier.filter(t => t.gapDescription).length
  }

  return {
    ...stats,
    root: merkleFold([
      toUuid(`total:${stats.total}`),
      toUuid(`sealed:${stats.sealed}`),
      toUuid(`frontier:${stats.frontier}`)
    ]),
    statement: `Portal Index: ${stats.total} theorems (${stats.sealed} sealed, ${stats.frontier} frontier, ${stats.byStatus.open} open)`,
    boundary: `Every theorem compute traced — no oracle, no external claims. ${stats.gapDocumentation}/${stats.frontier} frontier theorems carry proven barriers (Freedman 1982, Wiles 1995, etc.)`
  }
}

export function theoremsByInvolutionStructure() {
  const all = getAllTheorems()
  const grouped: Record<string, Theorem[]> = {}

  for (const theorem of all) {
    const key = theorem.σStructure || 'unclassified'
    if (!grouped[key]) grouped[key] = []
    grouped[key].push(theorem)
  }

  return grouped
}

export function nextTheremToProve(afterProofId?: string): Theorem | null {
  const all = getAllTheorems()
  const open = all.filter(t => t.proofStatus?.includes('open') || t.proofStatus === 'provisional-involution')

  if (!open.length) return null
  if (!afterProofId) return open[0]

  const idx = open.findIndex(t => t.problem === afterProofId)
  return idx >= 0 && idx < open.length - 1 ? open[idx + 1] : null
}

export const portal = {
  query: queryTheoremsViaPortal,
  stats: portalStatistics,
  byInvolution: theoremsByInvolutionStructure,
  nextToProve: nextTheremToProve
}

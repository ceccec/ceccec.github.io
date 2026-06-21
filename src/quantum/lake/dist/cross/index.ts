// Cross wave artifacts — digit index + sitemap + robots (first trinity / heaven trigram).
import {
  buildMatrix,
  diamondRoutes,
  monographPaths,
  paperReferences,
  papers,
  piTrainDiamonds,
  quantumSitemap,
  type MindMatrix,
} from '../../../heaven/mind'

export function idxUuid(seed: string): string {
  let h = 0x811c9dc5
  for (let i = 0; i < seed.length; i += 1) {
    h ^= seed.charCodeAt(i)
    h = Math.imul(h, 0x01000193) >>> 0
  }
  return `idx-${h.toString(16).padStart(8, '0')}`
}

export function digitIndexJson(matrix: MindMatrix = buildMatrix(), now = new Date().toISOString()) {
  const indices = piTrainDiamonds(matrix).diamonds.map((item) => {
    const inward = Math.sin(item.theta) * (item.selfCollision ? 1 : 0.5)
    const outward = Math.cos(item.phi) * (item.digit + 1) / 10
    const referenceReceipt = idxUuid(`ref:${item.previousIndex}->${item.index}->${item.nextIndex}:reverse=${item.reverseIndex}:harmonic=${item.harmonicIndex}`)
    const receipt = idxUuid(`${item.index}:${item.folder}:${item.nextHarmonicFolder}:${item.x}:${item.y}:${item.z}:${referenceReceipt}`)
    return {
      index: item.index,
      previousIndex: item.previousIndex,
      nextIndex: item.nextIndex,
      reverseIndex: item.reverseIndex,
      harmonicIndex: item.harmonicIndex,
      digit: item.digit,
      reverseDigit: item.reverseDigit,
      folder: item.folder,
      fraction: item.fraction,
      dualFraction: item.dualFraction,
      nextHarmonicFolder: item.nextHarmonicFolder,
      selfCollision: item.selfCollision,
      theta: item.theta,
      phi: item.phi,
      x: item.x,
      y: item.y,
      z: item.z,
      frequency: item.frequency,
      vibrationMs: item.vibrationMs,
      inward,
      outward,
      interference: inward * outward,
      referenceReceipt,
      receipt,
    }
  })
  return { generatedAt: now, count: indices.length, root: idxUuid(indices.map((item) => item.receipt).join('|')), indices }
}

function abs(siteUrl: string, path: string) {
  return path === '/' ? `${siteUrl}/` : `${siteUrl}${path}`
}

/** Corpus detail routes — RESTful /kind/<id>: one real page per item, all 3 locales (cu/en/bg). */
function corpusDetailUrls(kind: 'papers' | 'references' | 'diamonds', ids: readonly string[], priority: number) {
  return ids.map((id) => {
    const base = `/${kind}/${id}`
    const gla = base          // Glagolitic at root: /papers/<id>
    const en = `/en${base}`   // English at /en/papers/<id>
    const bg = `/bg${base}`   // Bulgarian at /bg/papers/<id>
    return {
      gla, en, bg, priority,
      alternates: [
        { hreflang: 'cu', href: gla },
        { hreflang: 'en', href: en },
        { hreflang: 'bg', href: bg },
        { hreflang: 'x-default', href: gla },
      ],
    }
  })
}

/** Monograph pages (staticPages + componentPages) not already covered by quantumSitemap's 14 static routes. */
function monographPageUrls(matrix: MindMatrix = buildMatrix()) {
  const quantum = quantumSitemap(matrix)
  const covered = new Set(quantum.urls.map((u) => u.route)) // e.g. '/start', '/console', …
  return monographPaths('en')
    .filter((p) => {
      const route = p.params.page === '' ? '/' : `/${p.params.page}`
      return !covered.has(route)
    })
    .map((p) => {
      const slug = p.params.page
      const gla = slug === '' ? '/' : `/${slug}`
      const en = slug === '' ? '/en/' : `/en/${slug}`
      const bg = slug === '' ? '/bg/' : `/bg/${slug}`
      return {
        gla, en, bg,
        priority: 0.7,
        alternates: [
          { hreflang: 'cu', href: gla },
          { hreflang: 'en', href: en },
          { hreflang: 'bg', href: bg },
          { hreflang: 'x-default', href: gla },
        ],
      }
    })
}

export function sitemapXml(siteUrl: string, matrix: MindMatrix = buildMatrix(), now = new Date().toISOString()) {
  const quantum = quantumSitemap(matrix)
  const altLinks = (alternates: readonly { hreflang: string; href: string }[]) =>
    alternates.map((alt) => `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${abs(siteUrl, alt.href)}" />`).join('\n')
  const urlBlock = (loc: string, priority: number, alternates: readonly { hreflang: string; href: string }[]) =>
    ['  <url>', `    <loc>${abs(siteUrl, loc)}</loc>`, `    <lastmod>${now}</lastmod>`, '    <changefreq>weekly</changefreq>', `    <priority>${priority.toFixed(1)}</priority>`, altLinks(alternates), '  </url>'].join('\n')
  const dynamicUrls = [
    ...monographPageUrls(matrix),
    ...corpusDetailUrls('papers', papers(matrix).papers.map((paper) => paper.id), 0.6),
    ...corpusDetailUrls('references', paperReferences(matrix).map((reference) => reference.id), 0.5),
    ...corpusDetailUrls('diamonds', diamondRoutes(matrix).map((diamond) => diamond.params.id), 0.4),
  ]
  const allUrls: { gla: string; en: string; bg: string; priority: number; alternates: readonly { hreflang: string; href: string }[] }[] = [...quantum.urls, ...dynamicUrls]
  return (
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<!-- quantum sitemap root: ${quantum.root} -->\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
    allUrls.flatMap((url) => [urlBlock(url.gla, url.priority, url.alternates), urlBlock(url.en, url.priority, url.alternates), urlBlock(url.bg, url.priority * 0.8, url.alternates)]).join('\n') +
    `\n</urlset>\n`
  )
}

export function sitemapJson(siteUrl: string, matrix: MindMatrix = buildMatrix(), now = new Date().toISOString()) {
  const quantum = quantumSitemap(matrix)
  return {
    generatedAt: now,
    root: quantum.root,
    count: quantum.count,
    statement: quantum.statement,
    boundary: quantum.boundary,
    urls: quantum.urls.map((url) => ({
      gla: abs(siteUrl, url.gla),
      en: abs(siteUrl, url.en),
      bg: abs(siteUrl, url.bg),
      theta: url.theta,
      phi: url.phi,
      priority: url.priority,
      changefreq: url.changefreq,
      alternates: url.alternates.map((alt) => ({ hreflang: alt.hreflang, href: abs(siteUrl, alt.href) })),
      receipt: url.receipt,
    })),
  }
}

export function robotsTxt(siteUrl: string) {
  return ['User-agent: *', 'Allow: /', '', `Sitemap: ${siteUrl.replace(/\/$/, '')}/sitemap.xml`, ''].join('\n')
}

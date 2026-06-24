// Cross wave — sitemap, robots, digit-index (fold / lake trigram).
import {
  buildMatrix,
  diamondRoutes,
  localePaths,
  monographPaths,
  paperReferences,
  papers,
  piTrainDiamonds,
  quantumSitemap,
  type MindMatrix,
} from '../../../heaven/mind'

export function idxUuid(seed: string): string {
  let h = 0x811c9dc5
  for (let i = 0; i < seed.length; i += 1) h ^= seed.charCodeAt(i), h = Math.imul(h, 0x01000193) >>> 0
  return `idx-${h.toString(16).padStart(8, '0')}`
}

export function digitIndexJson(matrix: MindMatrix = buildMatrix(), now = new Date().toISOString()) {
  const indices = piTrainDiamonds(matrix).diamonds.map((item) => {
    const inward = Math.sin(item.theta) * (item.selfCollision ? 1 : 0.5)
    const outward = Math.cos(item.phi) * (item.digit + 1) / 10
    const referenceReceipt = idxUuid(`ref:${item.previousIndex}->${item.index}->${item.nextIndex}:reverse=${item.reverseIndex}:harmonic=${item.harmonicIndex}`)
    const receipt = idxUuid(`${item.index}:${item.folder}:${item.nextHarmonicFolder}:${item.x}:${item.y}:${item.z}:${referenceReceipt}`)
    return { index: item.index, previousIndex: item.previousIndex, nextIndex: item.nextIndex, reverseIndex: item.reverseIndex, harmonicIndex: item.harmonicIndex, digit: item.digit, reverseDigit: item.reverseDigit, folder: item.folder, fraction: item.fraction, dualFraction: item.dualFraction, nextHarmonicFolder: item.nextHarmonicFolder, selfCollision: item.selfCollision, theta: item.theta, phi: item.phi, x: item.x, y: item.y, z: item.z, frequency: item.frequency, vibrationMs: item.vibrationMs, inward, outward, interference: inward * outward, referenceReceipt, receipt }
  })
  return { generatedAt: now, count: indices.length, root: idxUuid(indices.map((item) => item.receipt).join('|')), indices }
}

function absCross(siteUrl: string, path: string) {
  return path === '/' ? `${siteUrl}/` : `${siteUrl}${path}`
}

function corpusDetailUrls(kind: 'papers' | 'references' | 'diamonds', ids: readonly string[], priority: number) {
  return ids.map((id) => {
    const { gla, en, bg } = localePaths(`/${kind}/${id}`)
    return { gla, en, bg, priority, alternates: [{ hreflang: 'cu', href: gla }, { hreflang: 'en', href: en }, { hreflang: 'bg', href: bg }, { hreflang: 'x-default', href: gla }] }
  })
}

function monographPageUrls(matrix: MindMatrix = buildMatrix()) {
  const quantum = quantumSitemap(matrix)
  const covered = new Set(quantum.urls.map((u) => u.route))
  return monographPaths('en').filter((p) => !covered.has(p.params.page === '' ? '/' : `/${p.params.page}`)).map((p) => {
    const { gla, en, bg } = localePaths(p.params.page === '' ? '/' : `/${p.params.page}`)
    return { gla, en, bg, priority: 0.7, alternates: [{ hreflang: 'cu', href: gla }, { hreflang: 'en', href: en }, { hreflang: 'bg', href: bg }, { hreflang: 'x-default', href: gla }] }
  })
}

export function sitemapXml(siteUrl: string, matrix: MindMatrix = buildMatrix(), now = new Date().toISOString()) {
  const quantum = quantumSitemap(matrix)
  const altLinks = (alternates: readonly { hreflang: string; href: string }[]) => alternates.map((alt) => `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${absCross(siteUrl, alt.href)}" />`).join('\n')
  const urlBlock = (loc: string, priority: number, alternates: readonly { hreflang: string; href: string }[]) => ['  <url>', `    <loc>${absCross(siteUrl, loc)}</loc>`, `    <lastmod>${now}</lastmod>`, '    <changefreq>weekly</changefreq>', `    <priority>${priority.toFixed(1)}</priority>`, altLinks(alternates), '  </url>'].join('\n')
  const allUrls = [...quantum.urls, ...monographPageUrls(matrix), ...corpusDetailUrls('papers', papers(matrix).papers.map((p) => p.id), 0.6), ...corpusDetailUrls('references', paperReferences(matrix).map((r) => r.id), 0.5), ...corpusDetailUrls('diamonds', diamondRoutes(matrix).map((d) => d.params.id), 0.4)]
  return `<?xml version="1.0" encoding="UTF-8"?>\n<!-- quantum sitemap root: ${quantum.root} -->\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${allUrls.flatMap((url) => [urlBlock(url.gla, url.priority, url.alternates), urlBlock(url.en, url.priority, url.alternates), urlBlock(url.bg, url.priority * 0.8, url.alternates)]).join('\n')}\n</urlset>\n`
}

export function sitemapJson(siteUrl: string, matrix: MindMatrix = buildMatrix(), now = new Date().toISOString()) {
  const quantum = quantumSitemap(matrix)
  return { generatedAt: now, root: quantum.root, count: quantum.count, statement: quantum.statement, boundary: quantum.boundary, urls: quantum.urls.map((url) => ({ gla: absCross(siteUrl, url.gla), en: absCross(siteUrl, url.en), bg: absCross(siteUrl, url.bg), theta: url.theta, phi: url.phi, priority: url.priority, changefreq: url.changefreq, alternates: url.alternates.map((alt) => ({ hreflang: alt.hreflang, href: absCross(siteUrl, alt.href) })), receipt: url.receipt })) }
}

export function robotsTxt(siteUrl: string) {
  return ['User-agent: *', 'Allow: /', '', `Sitemap: ${siteUrl.replace(/\/$/, '')}/sitemap.xml`, ''].join('\n')
}

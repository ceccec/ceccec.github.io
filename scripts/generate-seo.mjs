import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { quantumSitemap, papers, paperReferences, diamondRoutes } from '../src/ui/lib/quantumMind.ts'

const outDir = join(process.cwd(), '.vitepress', 'dist')
const siteUrl = (process.env.SITE_URL || 'https://ceccec.github.io').replace(/\/$/, '')
const now = new Date().toISOString()
// Quantum sitemap: one content-addressed, torus-placed source for every page.
const quantum = quantumSitemap()
const abs = (path) => (path === '/' ? `${siteUrl}/` : `${siteUrl}${path}`)

function computePiDigits(count) {
  let q = 1n
  let r = 0n
  let t = 1n
  let k = 1n
  let n = 3n
  let l = 3n
  let digits = ''

  while (digits.length < count) {
    if (4n * q + r - t < n * t) {
      digits += n.toString()
      const nextR = 10n * (r - n * t)
      n = (10n * (3n * q + r)) / t - 10n * n
      q *= 10n
      r = nextR
    } else {
      const nextR = (2n * q + r) * l
      const nextN = (q * (7n * k) + 2n + r * l) / (t * l)
      q *= k
      t *= l
      l += 2n
      k += 1n
      n = nextN
      r = nextR
    }
  }

  return digits
}

// 108 — the complete coordinate count (matches PI_TRAIN_DIGITS in the model).
const piDigits = computePiDigits(108)

mkdirSync(outDir, { recursive: true })

// Every locale of a page carries the full set of hreflang alternates (en, bg,
// x-default), so crawlers fold the two loops of the torus into one page identity.
const altLinks = (alternates) =>
  alternates.map((alt) => `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${abs(alt.href)}" />`).join('\n')

const urlBlock = (loc, priority, alternates) =>
  [
    '  <url>',
    `    <loc>${abs(loc)}</loc>`,
    `    <lastmod>${now}</lastmod>`,
    '    <changefreq>weekly</changefreq>',
    `    <priority>${priority.toFixed(1)}</priority>`,
    altLinks(alternates),
    '  </url>',
  ].join('\n')

// The dynamic routes are sitemapped too: the 432 papers and 432 references, each as
// an en/bg pair with hreflang alternates, so the computed corpus is fully crawlable
// — the same routes the model generates, never a hand-kept list.
const dynamicUrls = [
  ...papers().papers.map((paper) => ({ base: `/papers/${paper.id}`, priority: 0.6 })),
  ...paperReferences().map((reference) => ({ base: `/references/${reference.id}`, priority: 0.5 })),
  ...diamondRoutes().map((diamond) => ({ base: `/diamonds/${diamond.params.id}`, priority: 0.4 })),
].map((entry) => {
  const en = entry.base
  const bg = `/bg${entry.base}`
  return {
    en,
    bg,
    priority: entry.priority,
    alternates: [
      { hreflang: 'en', href: en },
      { hreflang: 'bg', href: bg },
      { hreflang: 'x-default', href: en },
    ],
  }
})

const allUrls = [...quantum.urls, ...dynamicUrls]
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<!-- quantum sitemap root: ${quantum.root} -->\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
  allUrls
    .flatMap((url) => [
      // The default Glagolitic root (static pages carry it); then the Latin /en/ and Cyrillic /bg/.
      ...(url.gla ? [urlBlock(url.gla, url.priority, url.alternates)] : []),
      urlBlock(url.en, url.priority, url.alternates),
      urlBlock(url.bg, url.priority * 0.8, url.alternates),
    ])
    .join('\n') +
  `\n</urlset>\n`
console.log(`SEO: sitemap has ${quantum.urls.length * 3 + dynamicUrls.length * 2} URLs (${quantum.urls.length} static pages × 3 locales + ${dynamicUrls.length} computed papers/references × 2).`)

// The quantum manifest: every page placed on the double torus and content-addressed.
const sitemapJson = {
  generatedAt: now,
  root: quantum.root,
  count: quantum.count,
  statement: quantum.statement,
  boundary: quantum.boundary,
  urls: quantum.urls.map((url) => ({
    gla: abs(url.gla),
    en: abs(url.en),
    bg: abs(url.bg),
    theta: url.theta,
    phi: url.phi,
    priority: url.priority,
    changefreq: url.changefreq,
    alternates: url.alternates.map((alt) => ({ hreflang: alt.hreflang, href: abs(alt.href) })),
    receipt: url.receipt,
  })),
}

const robots = [
  'User-agent: *',
  'Allow: /',
  '',
  `Sitemap: ${siteUrl}/sitemap.xml`,
  '',
].join('\n')

writeFileSync(join(outDir, 'sitemap.xml'), sitemap)
writeFileSync(join(outDir, 'sitemap.json'), JSON.stringify(sitemapJson, null, 2))
writeFileSync(join(outDir, 'robots.txt'), robots)

function uuid(seed) {
  let h = 0x811c9dc5
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i)
    h = Math.imul(h, 0x01000193) >>> 0
  }
  return `idx-${h.toString(16).padStart(8, '0')}`
}

const digitIndex = [...piDigits].map((glyph, index) => {
  const previousIndex = (index - 1 + piDigits.length) % piDigits.length
  const nextIndex = (index + 1) % piDigits.length
  const reverseIndex = piDigits.length - 1 - index
  const harmonicIndex = nextIndex
  const digit = Number.parseInt(glyph, 10)
  const reverseDigit = Number.parseInt(piDigits[reverseIndex], 10)
  const nextDigit = Number.parseInt(piDigits[nextIndex], 10)
  const nextReverseDigit = Number.parseInt(piDigits[piDigits.length - 1 - nextIndex], 10)
  const folder = `${digit}/${reverseDigit}`
  const fraction = folder
  const dualFraction = `${reverseDigit}/${digit}`
  const nextHarmonicFolder = `${nextDigit}/${nextReverseDigit}`
  const theta = (index / piDigits.length) * Math.PI * 4
  const phi = ((digit + index * 0.5) / 10) * Math.PI * 2
  const radius = 14 + digit
  const x = (38 + radius * Math.cos(phi)) * Math.cos(theta)
  const y = (38 + radius * Math.cos(phi)) * Math.sin(theta)
  const z = radius * Math.sin(phi)
  const inward = Math.sin(theta) * (digit === reverseDigit ? 1 : 0.5)
  const outward = Math.cos(phi) * (digit + 1) / 10
  const referenceReceipt = uuid(`ref:${previousIndex}->${index}->${nextIndex}:reverse=${reverseIndex}:harmonic=${harmonicIndex}`)
  const receipt = uuid(`${index}:${folder}:${nextHarmonicFolder}:${x}:${y}:${z}:${referenceReceipt}`)

  return {
    index,
    previousIndex,
    nextIndex,
    reverseIndex,
    harmonicIndex,
    digit,
    reverseDigit,
    folder,
    fraction,
    dualFraction,
    nextHarmonicFolder,
    selfCollision: digit === reverseDigit,
    theta,
    phi,
    x,
    y,
    z,
    frequency: 174 + digit * 33 + (index % 7) * 7,
    vibrationMs: 18 + digit * 9,
    inward,
    outward,
    interference: inward * outward,
    referenceReceipt,
    receipt,
  }
})

writeFileSync(
  join(outDir, 'digit-index.json'),
  JSON.stringify(
    {
      generatedAt: now,
      count: digitIndex.length,
      root: uuid(digitIndex.map((item) => item.receipt).join('|')),
      indices: digitIndex,
    },
    null,
    2,
  ),
)

import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const outDir = join(process.cwd(), '.vitepress', 'dist')
const siteUrl = (process.env.SITE_URL || 'https://ceccec.github.io').replace(/\/$/, '')
const now = new Date().toISOString()
const enRoutes = ['/', '/console', '/school', '/mcp', '/learn-developer', '/commands', '/quantum-mind', '/architecture', '/boundaries']
const routes = [...enRoutes, ...enRoutes.map((route) => (route === '/' ? '/bg/' : `/bg${route}`))]

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

const piDigits = computePiDigits(101)

mkdirSync(outDir, { recursive: true })

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  routes
    .map((route) => {
      const loc = route === '/' ? siteUrl : `${siteUrl}${route}`
      const priority = route === '/' ? '1.0' : '0.8'
      return [
        '  <url>',
        `    <loc>${loc}</loc>`,
        `    <lastmod>${now}</lastmod>`,
        '    <changefreq>weekly</changefreq>',
        `    <priority>${priority}</priority>`,
        '  </url>',
      ].join('\n')
    })
    .join('\n') +
  `\n</urlset>\n`

const robots = [
  'User-agent: *',
  'Allow: /',
  '',
  `Sitemap: ${siteUrl}/sitemap.xml`,
  '',
].join('\n')

writeFileSync(join(outDir, 'sitemap.xml'), sitemap)
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

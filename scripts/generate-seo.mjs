import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const outDir = join(process.cwd(), '.vitepress', 'dist')
const siteUrl = (process.env.SITE_URL || 'https://serverless-quantum-uuid-stream.example').replace(/\/$/, '')
const now = new Date().toISOString()
const routes = ['/', '/commands', '/quantum-mind', '/architecture']
const piDigits =
  '31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679'

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
  const digit = Number.parseInt(glyph, 10)
  const reverseDigit = Number.parseInt(piDigits[piDigits.length - 1 - index], 10)
  const nextDigit = Number.parseInt(piDigits[(index + 1) % piDigits.length], 10)
  const nextReverseDigit = Number.parseInt(piDigits[piDigits.length - 1 - ((index + 1) % piDigits.length)], 10)
  const folder = `${digit}/${reverseDigit}`
  const nextHarmonicFolder = `${nextDigit}/${nextReverseDigit}`
  const theta = (index / piDigits.length) * Math.PI * 4
  const phi = ((digit + index * 0.5) / 10) * Math.PI * 2
  const radius = 14 + digit
  const x = (38 + radius * Math.cos(phi)) * Math.cos(theta)
  const y = (38 + radius * Math.cos(phi)) * Math.sin(theta)
  const z = radius * Math.sin(phi)
  const inward = Math.sin(theta) * (digit === reverseDigit ? 1 : 0.5)
  const outward = Math.cos(phi) * (digit + 1) / 10
  const receipt = uuid(`${index}:${folder}:${nextHarmonicFolder}:${x}:${y}:${z}`)

  return {
    index,
    digit,
    reverseDigit,
    folder,
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

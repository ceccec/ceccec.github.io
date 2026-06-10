import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const outDir = join(process.cwd(), '.vitepress', 'dist')
const siteUrl = (process.env.SITE_URL || 'https://serverless-quantum-uuid-stream.example').replace(/\/$/, '')
const now = new Date().toISOString()
const routes = ['/', '/commands', '/quantum-mind', '/architecture']

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

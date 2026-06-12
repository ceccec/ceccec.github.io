// Nothing bypasses VitePress. Navigation, app mounting and rendering must all go
// through VitePress (its SPA router, enhanceApp, and SSR) — no manual window.location
// navigation, no second createApp, no document.write. This guard scans the theme and
// fails the build if anything sidesteps VitePress. Run: node scripts/check-vitepress-only.mjs
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const root = join(process.cwd(), '.vitepress', 'theme')
const forbidden = [
  { re: /window\.location\s*=/, why: 'manual navigation bypasses the VitePress router (use an <a href> or useRouter().go)' },
  { re: /\blocation\.(href\s*=|assign\s*\(|replace\s*\()/, why: 'manual navigation bypasses the VitePress router' },
  { re: /\bcreateApp\s*\(/, why: 'mounting a second app bypasses VitePress' },
  { re: /document\.write\s*\(/, why: 'document.write bypasses VitePress rendering' },
]

function scan(dir) {
  let files = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) files = files.concat(scan(path))
    else if (/\.(vue|ts)$/.test(entry.name)) files.push(path)
  }
  return files
}

const violations = []
for (const file of scan(root)) {
  const source = readFileSync(file, 'utf8')
  for (const { re, why } of forbidden) {
    if (re.test(source)) violations.push(`${file.replace(process.cwd() + '/', '')}: ${why}`)
  }
}

// Search must not be bypassed either: VitePress ships its own offline local search,
// so the config must enable it (provider: 'local'). A custom search component is a
// model tool, never a replacement for the site's own search going through VitePress.
const config = readFileSync(join(process.cwd(), '.vitepress', 'config.mts'), 'utf8')
if (!/search\s*:\s*\{[\s\S]*?provider\s*:\s*['"]local['"]/.test(config)) {
  violations.push(".vitepress/config.mts: VitePress search is bypassed (enable themeConfig.search.provider: 'local')")
}

if (violations.length > 0) {
  console.error('VitePress bypass detected:')
  for (const violation of violations) console.error(`  - ${violation}`)
  process.exit(1)
}
console.log('Nothing bypasses VitePress: navigation, app mounting, rendering and search all go through it.')

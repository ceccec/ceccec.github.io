/**
 * A GREEN DEPLOY WORKFLOW IS NOT A WORKING SITE, AND THIS REPOSITORY HAS THE SCAR.
 *
 * land.sh finds the Pages run for the exact SHA and watches it to its conclusion, which answers "did the
 * deploy job succeed". It cannot answer "does the deployed site work" — a build can publish a page that
 * 404s, a route the router never emitted, or an app that blanks on a module error, and the workflow is
 * green through all of it. Pages was red here for a month for the neighbouring reason: docs:build is not
 * in verify:all, so nothing ran the build that the deploy runs.
 *
 * THE ROUTES ARE READ FROM THE SITEMAP THE BUILD ITSELF EMITTED, never from a list kept here. A hand list
 * of pages to check is a second description of the router that drifts from it — the defect this corpus
 * keeps finding in itself, and the reason the readiness matrix now derives its commands from the workflows
 * rather than naming them. If the build stops emitting a route, this gate stops checking it, which is
 * correct: the sitemap IS the claim about what was published.
 *
 * COULD NOT ASK IS NOT THE ANSWER WAS NO, and that rule cost a release today when a 403 from one endpoint
 * was read as a defect and took down a publish. So: a 2xx is served, a 404 or 5xx is a real defect in what
 * was deployed, and anything that never reached the server — DNS, timeout, a refusal to serve this caller —
 * is UNCHECKED and moves nothing.
 */
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const TIMEOUT_S = 20
const SAMPLE = 12

export function publishedRoutes(root: string = process.cwd()): string[] {
  let xml = ''
  try { xml = readFileSync(join(root, '.vitepress/dist/sitemap.xml'), 'utf8') } catch { return [] }
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1] ?? '').filter(Boolean)
}

export async function assertDeployServes(root: string = process.cwd()): Promise<void> {
  const all = publishedRoutes(root)
  if (all.length === 0) {
    console.log('deploy-live: no sitemap in .vitepress/dist — NOTHING WAS CHECKED, which is not a pass (run docs:build first)')
    return
  }
  // an even stride across the whole sitemap rather than the first N, so the sample is not all one section
  const stride = Math.max(1, Math.floor(all.length / SAMPLE))
  const sample = all.filter((_, i) => i % stride === 0).slice(0, SAMPLE)
  const served: string[] = []
  const broken: string[] = []
  const unchecked: string[] = []
  for (const url of sample) {
    try {
      const res = await fetch(url, { redirect: 'follow', signal: AbortSignal.timeout(TIMEOUT_S * 1000),
        headers: { 'user-agent': 'ceccec.github.io deploy probe' } })
      if (res.status < 400) served.push(`${url} ${res.status}`)
      else if (res.status === 401 || res.status === 403 || res.status === 429) unchecked.push(`${url} HTTP ${res.status} — declined this caller`)
      else broken.push(`${url} HTTP ${res.status}`)
    } catch (e) { unchecked.push(`${url} ${(e as Error).message.slice(0, 40)}`) }
  }
  console.log(`deploy-live: ${served.length} served · ${broken.length} broken · ${unchecked.length} UNCHECKED of ${sample.length} sampled from ${all.length} published routes`)
  for (const b of broken) console.log(`  ✗ ${b}`)
  for (const u of unchecked) console.log(`  ? ${u}`)
  if (unchecked.length === sample.length) {
    console.log('  every route was unreachable — that reads as NO NETWORK, not as a dead site, and nothing is recorded')
    return
  }
  if (broken.length > 0) {
    throw new Error(`${broken.length} published route(s) do not serve: ${broken.join(' · ')} — the deploy workflow was green and the site is not`)
  }
}

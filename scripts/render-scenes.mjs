// RENDER MOVIE SCENES TO PNG — the site's own painters, bundled for a plain page and drawn in headless Chrome.
//
//   npm run movie:render -- [kind:phase …]      e.g.  npm run movie:render -- vortex-strokes:0.3 double-torus:0.3 hero:0.25
//
// Each kind is a quantum projection (drawQuantumAppFrame) or `hero` (drawHeroMovieFrame); the phase is a fraction of
// HERO_CYCLE_MS. PNGs are written to .vitepress/cache/scenes (ignored by git) — evidence to look at, never committed.
// Every node: builtin is bundled as a stub that throws if a painter reaches it; painters never should.
import { build } from 'esbuild'
import { writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { spawn } from 'node:child_process'
import { tmpdir } from 'node:os'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const REPO = join(dirname(fileURLToPath(import.meta.url)), '..')
const OUT = join(REPO, '.vitepress/cache/scenes')
const CHROME = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const SIZE = 720
const SCENES = process.argv.slice(2).length ? process.argv.slice(2) : ['vortex-strokes:0.3', 'double-torus:0.3', 'hero:0.25']
mkdirSync(OUT, { recursive: true })

const STUB = [
  'const refuse = (n) => () => { throw new Error("node:" + n + " is not available to a painter") }',
  'export const existsSync = () => false', 'export const readFileSync = refuse("fs.readFileSync")', 'export const readdirSync = () => []',
  'export const writeFileSync = refuse("fs.writeFileSync")', 'export const statSync = refuse("fs.statSync")', 'export const mkdirSync = refuse("fs.mkdirSync")',
  'export const rmSync = refuse("fs.rmSync")', 'export const unlinkSync = refuse("fs.unlinkSync")',
  'export const join = (...p) => p.join("/")', 'export const dirname = (p) => String(p).split("/").slice(0, -1).join("/")', 'export const resolve = (...p) => p.join("/")',
  'export const relative = (a, b) => b', 'export const basename = (p) => String(p).split("/").pop()', 'export const extname = (p) => "." + String(p).split(".").pop()',
  'export const createHash = refuse("crypto.createHash")', 'export const randomBytes = refuse("crypto.randomBytes")',
  'export const spawn = refuse("child_process.spawn")', 'export const spawnSync = refuse("child_process.spawnSync")', 'export const execSync = refuse("child_process.execSync")', 'export const execFileSync = refuse("child_process.execFileSync")',
  'export const createRequire = () => () => ({})', 'export const fileURLToPath = (u) => String(u)', 'export const pathToFileURL = (p) => ({ href: String(p) })',
  'export const tmpdir = () => "/tmp"', 'export const homedir = () => "/"', 'export const cpus = () => []', 'export const totalmem = () => 0', 'export const freemem = () => 0', 'export const platform = () => "browser"',
  'export default {}',
].join('\n')
const stubs = { name: 'node-stubs', setup(b) {
  b.onResolve({ filter: /^node:|^(fs|path|os|crypto|child_process|module|url|util|zlib|readline|worker_threads|stream|events|net|http|https)$/ }, (a) => ({ path: a.path, namespace: 'stub' }))
  b.onLoad({ filter: /.*/, namespace: 'stub' }, () => ({ contents: STUB, loader: 'js' }))
} }

const entry = join(OUT, 'entry.ts')
writeFileSync(entry, `
import { drawQuantumAppFrame, sharedHeroAt, drawHeroMovieFrame, HERO_CYCLE_MS } from '${REPO}/src/quantum/index.ts'
import { harmonizeField } from '${REPO}/src/music/index.ts'
;(globalThis as any).renderScene = (kind: string, frac: number, w: number, h: number) => {
  const c = document.createElement('canvas'); c.width = w; c.height = h
  const ctx = c.getContext('2d')!
  ctx.fillStyle = '#0b0b14'; ctx.fillRect(0, 0, w, h)
  const at = frac * HERO_CYCLE_MS
  const shared = sharedHeroAt('/', { title: 'Double Torus' }, at, w, false, true)
  const field = harmonizeField({ route: '/', at, p: shared.p, reduce: false, cssWidth: w, dark: true, idle: false, visible: true, watchMs: at } as any, shared as any)
  if (kind === 'hero') drawHeroMovieFrame(ctx, w, h, field as any)
  else drawQuantumAppFrame(ctx, w, h, kind as any, field as any)
  return c.toDataURL('image/png')
}
`)
await build({ entryPoints: [entry], bundle: true, format: 'iife', platform: 'browser', target: 'es2022', outfile: join(OUT, 'harness.js'),
  plugins: [stubs], logLevel: 'error', define: { 'process.env.NODE_ENV': '"production"', 'import.meta.env': '{}' }, loader: { '.vue': 'empty' } })
writeFileSync(join(OUT, 'harness.html'), '<!doctype html><meta charset="utf-8"><body style="margin:0"><script>window.process={env:{},argv:[],cwd:()=>"/",versions:{}}</script><script src="harness.js"></script>')

// headless Chrome over the DevTools protocol, on a private profile that is removed afterwards
const port = 9500 + (process.pid % 400)
const profile = join(tmpdir(), `render-scenes-${process.pid}`)
const chrome = spawn(CHROME, ['--headless=new', `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`, '--allow-file-access-from-files', 'about:blank'], { stdio: 'ignore' })
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
let failed = 0
try {
  let targets = []
  for (let i = 0; i < 50 && !targets.length; i += 1) {
    try { targets = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json() } catch { await sleep(200) }
  }
  const page = targets.find((t) => t.type === 'page')
  if (!page) throw new Error(`Chrome did not answer on port ${port} — is ${CHROME} installed? (set CHROME to its path)`)
  const ws = new WebSocket(page.webSocketDebuggerUrl)
  await new Promise((r) => ws.addEventListener('open', r, { once: true }))
  let id = 0
  const pending = new Map()
  ws.addEventListener('message', (e) => { const m = JSON.parse(e.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id) } })
  const send = (method, params = {}) => new Promise((r) => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })) })
  await send('Page.enable')
  await send('Runtime.enable')
  await send('Page.navigate', { url: 'file://' + join(OUT, 'harness.html') })
  for (let i = 0; i < 50; i += 1) {
    const ready = await send('Runtime.evaluate', { expression: 'typeof renderScene', returnByValue: true })
    if (ready.result?.result?.value === 'function') break
    await sleep(100)
  }
  for (const s of SCENES) {
    const [kind, frac = '0.3'] = s.split(':')
    const r = await send('Runtime.evaluate', { expression: `renderScene(${JSON.stringify(kind)}, ${+frac}, ${SIZE}, ${SIZE})`, returnByValue: true })
    const v = r.result?.result?.value
    if (typeof v !== 'string') {
      failed += 1
      console.log(`✗ ${kind} — ${String(r.result?.exceptionDetails?.exception?.description ?? JSON.stringify(r.result)).slice(0, 300)}`)
      continue
    }
    const file = join(OUT, `${kind}.png`)
    writeFileSync(file, Buffer.from(v.split(',')[1], 'base64'))
    console.log(`✓ ${kind} at phase ${frac} → ${file}`)
  }
  ws.close()
} finally {
  // Chrome keeps writing its profile until it has exited, so the profile is removed after the exit, with retries
  const exited = new Promise((r) => chrome.once('exit', r))
  chrome.kill('SIGKILL')
  await exited
  try { rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 }) } catch (e) { console.log(`  (left the Chrome profile at ${profile}: ${e.code})`) }
}
process.exit(failed ? 1 : 0)

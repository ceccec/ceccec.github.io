/**
 * THE DANCE MUST STAY DERIVED — every <style> value and every canvas paint literal in a component.
 *
 * `scanVueForHardcoded` already existed, already set `error` on a finding, and already covered both
 * surfaces its own comment calls HARD: the <style> block and the <script> canvas paint (fillStyle,
 * strokeStyle, shadowColor, ctx.font, and hsla(`${hue}`, 72%, …) templates with literal saturation).
 * Nothing invoked it. It ran inside `npm run gen dist`, which appears in no chain: not verify:all, not the
 * land gate set, not a workflow — and `gen dist` currently aborts on an unrelated "Skill atoms incomplete"
 * before the scan reports, so even running it by hand showed nothing. A hard gate, a true finding, and two
 * layers of silence over it.
 *
 * This is the CSS layer, so a disruption here is not a style nit: the spacing, the durations and the hues
 * are the sequence made visible, and a value nobody derived is felt immediately — the beat lands wrong and
 * the reader cannot say why. The ratchet only falls.
 */
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { scanVueForHardcoded, ichingTokensCss } from '../../src/earth/architecture/index.ts'
import { ratchet, everyRatchet } from './status.ts'

export function findVuePaintLiterals(root: string = process.cwd()): string[] {
  const files: string[] = []
  const walk = (dir: string): void => {
    let entries: import('node:fs').Dirent[] = []
    try { entries = readdirSync(join(root, dir), { withFileTypes: true }) } catch { return }
    for (const entry of entries) {
      if (entry.name === 'node_modules' || entry.name === 'cache' || entry.name === 'dist') continue
      if (entry.name.startsWith('.') && entry.name !== '.vitepress') continue
      const rel = `${dir}/${entry.name}`
      if (entry.isDirectory()) walk(rel)
      else if (entry.name.endsWith('.vue')) files.push(rel)
    }
  }
  walk('src'); walk('.vitepress/theme')
  const out: string[] = []
  for (const file of files) {
    for (const offender of scanVueForHardcoded(readFileSync(join(root, file), 'utf8'))) out.push(`${file}  ${offender}`)
  }
  return out
}

/**
 * SUPERPOSED, NOT ENUMERATED — the lesson uuidna's guard states as a law: a capability added as its own
 * entry costs every caller on every run, forever; folded onto a surface that already answers about the
 * same subject it costs nothing. The phantom-token check was registered as a SECOND npm script over the
 * SAME file about the SAME thing — whether a component's paint comes off the ladder. It is one surface.
 */
export function assertVuePaintDerived(): void {
  everyRatchet(() => {
    const found = findVuePaintLiterals()
    const byFile = new Map<string, number>()
    for (const f of found) { const k = f.split('  ')[0]!; byFile.set(k, (byFile.get(k) ?? 0) + 1) }
    console.log(`values in .vue <style> + canvas paint that no ladder derives — ${found.length} across ${byFile.size} component(s)`)
    for (const [file, n] of [...byFile].sort((a, b) => b[1] - a[1]).slice(0, 8)) console.log(`  ${String(n).padStart(4)}  ${file}`)
    const motion = found.filter((f) => /animation|transition|keyframe|cubic-bezier|fillStyle|strokeStyle|shadowColor|ctx\.font/i.test(f))
    console.log(`  of those, in MOTION or PAINT declarations: ${motion.length}`)
    for (const m of motion.slice(0, 6)) console.log(`      ${m.slice(0, 116)}`)
    console.log(ratchet('vue.undreived-paint', found.length, { evidence: () => found }))
    assertNoPhantomTokens() // one surface: a value off the ladder, and a token the ladder never defined
  assertTokensCssMatchesGenerator() // …and the generated sheet still being what the generator emits
  })
}

/**
 * A TOKEN REFERENCED AND NEVER EMITTED IS A GAP IN THE DANCE, AND CSS SWALLOWS IT.
 *
 * `var(--ich-x, fallback)` renders the fallback and says nothing — so the ladder was a fiction at six
 * sites and nobody could see it; two of those fallbacks were raw paint (1px, 8.5rem) smuggled back in
 * behind a token's name. `var(--ich-x)` with NO fallback is worse: the value is invalid, the browser
 * drops the WHOLE declaration, and the layout shell's background gradient had been painting nothing at
 * all while every gate stayed green.
 *
 * Both are the same defect — a name with no rung behind it — and neither shows up in a screenshot you
 * are not already suspicious of. The ladder is emitted from ONE place, so the check is exact: collect
 * every `--ich-*` the architecture defines, collect every `--ich-*` any component or stylesheet reads,
 * and refuse the difference. Floor 0. There is no such thing as an acceptable gap here.
 */
export function findPhantomTokens(root: string = process.cwd()): string[] {
  const defined = new Set<string>()
  const arch = readFileSync(join(root, 'src/earth/architecture/index.ts'), 'utf8')
  for (const m of arch.matchAll(/\['(--ich-[a-z0-9-]+)'/g)) defined.add(m[1]!)
  // A rung may also be emitted directly into the generated stylesheet.
  try {
    for (const m of readFileSync(join(root, 'src/render/ui/tokens.css'), 'utf8').matchAll(/(--ich-[a-z0-9-]+)\s*:/g)) defined.add(m[1]!)
  } catch { /* the generated sheet is optional; the architecture is the source of truth */ }

  const readers: string[] = []
  const walk = (dir: string): void => {
    let entries: import('node:fs').Dirent[] = []
    try { entries = readdirSync(join(root, dir), { withFileTypes: true }) } catch { return }
    for (const entry of entries) {
      if (entry.name === 'node_modules' || entry.name === 'cache' || entry.name === 'dist') continue
      if (entry.name.startsWith('.') && entry.name !== '.vitepress') continue
      const rel = `${dir}/${entry.name}`
      if (entry.isDirectory()) walk(rel)
      else if (/\.(vue|css)$/.test(entry.name)) readers.push(rel)
    }
  }
  walk('src'); walk('.vitepress/theme')

  const out: string[] = []
  for (const file of readers) {
    const text = readFileSync(join(root, file), 'utf8')
    for (const m of text.matchAll(/var\((--ich-[a-z0-9-]+)\s*(,)?/g)) {
      const token = m[1]!
      // ONE RULE: A FALLBACK ON A LADDER TOKEN IS ALWAYS WRONG. Either the token is defined, and the
      // fallback is dead paint nobody will ever see — six of these shadowed --ich-sp6 (0.75rem) with
      // 1.5rem, twice the rung, so the file said one thing and the ladder another and neither could be
      // read off the page; or the token is NOT defined, and the fallback is the real value while the
      // token is decoration. Splitting those into two floors invites arguing about which is acceptable.
      // Neither is. A `var(--ich-x, …)` is a place the sequence does not reach, and that is the whole
      // defect — it is also the only form that survives inside calc(), where the scanner's own
      // stripCalcExpressions deletes the literal before scanVueForHardcoded can see it.
      if (m[2]) {
        out.push(`${file}  ${token} — carries a fallback. ${defined.has(token)
          ? 'The token IS on the ladder, so the fallback is dead paint that disagrees with it in silence'
          : 'The token is NOT on the ladder, so the fallback is the real value and the token is decoration'}`)
        continue
      }
      if (!defined.has(token)) out.push(`${file}  ${token} — referenced with NO fallback and never emitted: this declaration is DROPPED by every browser`)
    }
  }
  return out
}

export function assertNoPhantomTokens(): void {
  const phantom = findPhantomTokens()
  for (const p of phantom.slice(0, 12)) console.log(`  ${p}`)
  console.log(ratchet('css.phantom-token', phantom.length, { evidence: () => phantom }))
}

/**
 * THE ARTEFACT MUST EQUAL ITS GENERATOR — A CROSS-CHECK, NOT A SELF-ASSERTION.
 *
 * src/render/ui/tokens.css carries "COMPUTED — do not edit" in its own header and nothing enforced it.
 * Two ways that goes wrong, both silent: hand-edit the file and every component still resolves, so
 * css.phantom-token stays 0 while the shipped paint quietly stops being the ladder; or change
 * ichingTokensCss() and never regenerate, so the committed sheet is stale. The second is not
 * hypothetical — `npm run gen dist`, the only thing that writes this file, exits 1 on an unrelated
 * "Skill atoms incomplete" long after the CSS is written, so a regeneration looks like a failure and
 * gets skipped. That happened in this session.
 *
 * This is a CROSS-CHECK in the sense independence.cross-checked means: the file is constrained by a
 * predicate that lives in another file, so neither can drift without the other objecting. A fold that
 * only checks itself cannot catch a stale copy of itself.
 */
export function tokensCssDrift(root: string = process.cwd()): string[] {
  const rel = 'src/render/ui/tokens.css'
  let committed = ''
  try { committed = readFileSync(join(root, rel), 'utf8') } catch { return [`${rel} — the generated stylesheet is missing entirely`] }
  const emitted = ichingTokensCss()
  if (committed.trimEnd() === emitted.trimEnd()) return []
  const a = committed.trimEnd().split('\n'), b = emitted.trimEnd().split('\n')
  const out: string[] = []
  if (a.length !== b.length) out.push(`${rel} — ${a.length} committed lines vs ${b.length} the generator emits`)
  for (let i = 0; i < Math.max(a.length, b.length) && out.length < 8; i++) {
    if (a[i] !== b[i]) out.push(`${rel}:${i + 1} — committed ${JSON.stringify((a[i] ?? '').trim()).slice(0, 80)} · generator ${JSON.stringify((b[i] ?? '').trim()).slice(0, 80)}`)
  }
  return out
}

export function assertTokensCssMatchesGenerator(): void {
  const drift = tokensCssDrift()
  for (const d of drift.slice(0, 8)) console.log(`  ${d}`)
  console.log(ratchet('css.tokens-drift', drift.length, { evidence: () => drift }))
}

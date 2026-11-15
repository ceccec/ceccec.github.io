/**
 * EVERY THEME COMPONENT IS ONE A PAGE REACHES, AND THE CATALOG NAMES EXACTLY THE FILES ON DISK.
 *
 * The catalog (VITEPRESS_ONE_COMPONENT_PATHS, src/quantum/apps) said it "must match disk", and the fold that sealed it
 * compared one hand list with another: it could not fail. A CLI runner did read the disk — and nothing ran it, so when
 * the blog's two components were added and 22 page shells lost their pages, nothing noticed either way. This gate is
 * the reader: it walks the folder, and it walks the site.
 *
 * REACHED means: from the roots — the theme entry, the layout, every page file — follow every import of a component
 * file and every tag that names one (<Name, <kebab-name, and the Ui* aliases of the ui/ primitives), transitively.
 * A component nothing reaches ships to nobody; the route removal of 2026-11-15 left 25 of them.
 */
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { VITEPRESS_ONE_COMPONENT_PATHS } from '../../src/quantum/apps/index.ts'
import { decided, everyRatchet } from './status.ts'

const COMPONENTS = '.vitepress/theme/components'

function files(dir: string, test: (name: string) => boolean, prefix = ''): string[] {
  if (!existsSync(dir)) return []
  const out: string[] = []
  for (const name of readdirSync(dir)) {
    const full = join(dir, name)
    const rel = prefix ? `${prefix}/${name}` : name
    if (statSync(full).isDirectory()) out.push(...files(full, test, rel))
    else if (test(name)) out.push(rel)
  }
  return out
}

/** The component files on disk, as catalog paths ('X.vue', 'ui/X.vue'). */
export function componentsOnDisk(root: string = process.cwd()): string[] {
  return files(join(root, COMPONENTS), (n) => n.endsWith('.vue')).sort()
}

/** Every component a page, the layout or the theme entry reaches — by import or by tag, transitively. */
export function componentReach(root: string = process.cwd()): { onDisk: string[]; reached: string[]; unreached: string[] } {
  const onDisk = componentsOnDisk(root)
  const base = (p: string) => p.slice(p.lastIndexOf('/') + 1, -'.vue'.length)
  const kebab = (s: string) => s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
  // the names a file may write for each component: its own name, its kebab form, and Ui<Name> for a ui/ primitive
  const names = new Map(onDisk.map((p) => [p, [base(p), kebab(base(p)), ...(p.startsWith('ui/') ? [`Ui${base(p)}`, `ui-${kebab(base(p))}`] : [])]]))
  const uses = (text: string) => onDisk.filter((p) =>
    text.includes(`/${p}'`) || text.includes(`/${p}"`) || text.includes(`/${p.replace(/\.vue$/, '')}'`) ||
    names.get(p)!.some((n) => new RegExp(`<${n}[\\s/>]`).test(text)))
  const roots = [
    join(root, '.vitepress/theme/index.ts'),
    ...files(join(root, '.vitepress/theme'), (n) => n.endsWith('.vue')).filter((p) => !p.startsWith('components/')).map((p) => join(root, '.vitepress/theme', p)),
    ...files(join(root, '.vitepress/pages'), (n) => n.endsWith('.md')).map((p) => join(root, '.vitepress/pages', p)),
  ]
  const reached = new Set<string>()
  const queue = roots.flatMap((f) => uses(readFileSync(f, 'utf8')))
  while (queue.length) {
    const p = queue.pop()!
    if (reached.has(p)) continue
    reached.add(p)
    queue.push(...uses(readFileSync(join(root, COMPONENTS, p), 'utf8')))
  }
  return { onDisk, reached: [...reached].sort(), unreached: onDisk.filter((p) => !reached.has(p)) }
}

export function assertComponentsAreReached(root: string = process.cwd()): void {
  const { onDisk, reached, unreached } = componentReach(root)
  const catalog = new Set<string>(VITEPRESS_ONE_COMPONENT_PATHS)
  const orphans = onDisk.filter((p) => !catalog.has(p))
  const missing = [...catalog].filter((p) => !onDisk.includes(p))
  console.log(`components: ${onDisk.length} on disk, ${reached.length} reached from the pages, the layout and the theme entry`)
  everyRatchet(() => {
    console.log(decided('components.catalog-is-disk', orphans.length + missing.length, {
      root,
      law: 'the catalog names exactly the component files on disk — a name with no file, or a file with no name, is a list that stopped being read',
      evidence: () => [...orphans.map((p) => `on disk, not in the catalog: ${p}`), ...missing.map((p) => `in the catalog, not on disk: ${p}`)],
    }))
    // A RATCHET AT ZERO IS A UNIVERSAL STATEMENT (purge 2026-11-16: 25 → 0): decided, with nothing stored to loosen.
    console.log(decided('components.unreached', unreached.length, {
      root,
      law: 'a component no page, layout or theme entry reaches ships to nobody — delete it, or let a page that needs it use it',
      evidence: () => unreached.map((p) => `unreached: ${p}`),
    }))
  })
}

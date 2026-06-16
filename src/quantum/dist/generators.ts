// ䷀ The I Ching generators — ONE bāguà-indexed registry that compacts the four bespoke
// generate-*.mjs scripts into eight trigram slots. Every generator was the SAME shape — read
// inputs, call a pure src function, write files, log, gate — re-implemented four times. Here that
// shape is written ONCE: each generator is a pure plan(ctx) → { files, messages, error? }, placed on
// one of the eight trigrams. The imperative shell (scripts/iching.mjs) reads/writes/exits; the steps
// live in src (the cardinal rule). Eight slots, eight filled — the complete eight-fold.
import { merkleFold, toUuid, foldVortex } from '../../0/index.ts'
import { BAGUA, cloudflareBindings, whatIsNotProvenIsPurged, siteNavigation } from '../mind/folds.ts'
import { glagoliticHomeFromEnglish } from '../mind/li.ts'
import { bibleParallel, toGlagoliticOCS, pesnopoika } from '../library/index.ts'
import { computedDistFiles, readmeMarkdown } from './index.ts'

// What the runner hands every plan: the environment, the positional args after the selector, a
// repo-relative file reader (null if missing), and the resolved site URL. No plan touches the disk
// directly — it RETURNS the files to write, so each plan stays pure and unit-testable.
export interface GenContext {
  env: Record<string, string | undefined>
  args: readonly string[]
  read: (relPath: string) => string | null
  siteUrl: string
}

// What every plan returns: files to write (repo-relative), stdout lines, and an optional error. If
// error is set the runner prints it to stderr and exits 1 — after writing whatever files were planned
// (mirrors the original dist gate: write, then fail the build on an incomplete manifest).
export interface GenResult {
  files: { path: string; content: string }[]
  messages: string[]
  error?: string
}

export interface Generator {
  trigram: number // bāguà index 0–7 (the upper-trigram bits)
  glyph: string
  pinyin: string
  name: string // the short selector id
  title: string
  summary: string
  plan: (ctx: GenContext) => GenResult
}

const tri = (bits: number) => BAGUA[bits]!

// The eight slots. A generator is placed on the trigram whose nature it shares — the meaning names
// the generator, the same way iChingDomainMap lets the I Ching name the architecture. Four are filled:
//   ☷ Kūn   (Earth, receptive)  — the corpus received & preserved: the Bible in Glagolitic.
//   ☵ Kǎn   (Water, flowing)    — the live render that flows out: the Glagolitic home (debug echo).
//   ☴ Xùn   (Wind, penetrating) — the optional bindings that quietly pervade: the Cloudflare wizard.
//   ☰ Qián  (Heaven, creative)  — the whole site made manifest: the dist artifacts + README.
// ☳ ☱ ☶ ☲ stay open for the next four generators.
export function generators(): Generator[] {
  return [
    {
      trigram: 0b000,
      glyph: tri(0b000).glyph,
      pinyin: tri(0b000).pinyin,
      name: 'bible',
      title: 'The Bible in Glagolitic — meaning, not just script',
      summary:
        'Bundled: the founding verses, the Bulgarian sense rendered in the ninth-century script beside Cyril’s OCS. With a path arg: transliterate any local Cyrillic/OCS text file line by line. Local, deterministic, zero network, zero tokens.',
      plan: (ctx) => {
        const srcPath = ctx.args[0]
        if (srcPath) {
          const text = ctx.read(srcPath)
          if (text == null) return { files: [], messages: [], error: `Cannot read ${srcPath}` }
          const out = text.split('\n').map((line) => toGlagoliticOCS(line)).join('\n')
          const name = (srcPath.split('/').pop() ?? srcPath).replace(/\.[^.]*$/, '')
          const dest = `${name}.glagolitic.txt`
          return {
            files: [{ path: dest, content: out }],
            messages: [`Transliterated to Glagolitic: ${dest} (${out.split('\n').length} lines, from ${srcPath}) — script-conversion, zero network`],
          }
        }
        const verses = bibleParallel()
        const block = verses
          .map((v) =>
            [`# ${v.ref}`, `ГЛА  ${v.glagoliticBg}`, `BG   ${v.bg}`, `ⰑⰕⰟ  ${v.glagoliticOcs}`, `OCS  ${v.ocs}`, `EN   ${v.en}`].join('\n'),
          )
          .join('\n\n')
        return {
          files: [
            { path: 'bible.glagolitic.txt', content: `${block}\n` },
            { path: 'bible.parallel.json', content: `${JSON.stringify(verses, null, 2)}\n` },
          ],
          messages: [
            block,
            `\n— ${verses.length} founding verses · meaning rendered in Glagolitic · bible.glagolitic.txt + bible.parallel.json`,
            '  local translation service · no machine translation · no network · zero tokens',
          ],
        }
      },
    },
    {
      trigram: 0b010,
      glyph: tri(0b010).glyph,
      pinyin: tri(0b010).pinyin,
      name: 'glagolitic',
      title: 'Glagolitic home — computed, not written (debug echo)',
      summary:
        'Superseded by glagoliticHomeFromEnglish served live through the Vite plugin; kept as a manual debug helper that echoes the computed home so you can eyeball the realtime render.',
      plan: (ctx) => {
        const en = ctx.read('.vitepress/pages/en/index.md')
        if (en == null) return { files: [], messages: [], error: 'Cannot read .vitepress/pages/en/index.md' }
        return { files: [], messages: [`Glagolitic home (computed, not written):\n ${glagoliticHomeFromEnglish(en).slice(0, 200)} …`] }
      },
    },
    {
      trigram: 0b110,
      glyph: tri(0b110).glyph,
      pinyin: tri(0b110).pinyin,
      name: 'cloudflare',
      title: 'The Cloudflare wizard — fuse all bindings, optionally',
      summary:
        'Writes wrangler.jsonc so the static site can also run at the edge. Every binding is opt-in (CF_BINDINGS=kv,r2,d1 …); enable none and nothing changes. Each enabled binding is one more signed edge store a forger must reproduce.',
      plan: (ctx) => {
        const model = cloudflareBindings()
        const known = new Set(model.bindings.map((b) => b.id))
        const requested = (ctx.env.CF_BINDINGS || '')
          .split(',')
          .map((id) => id.trim().toLowerCase())
          .filter(Boolean)
        const unknown = requested.filter((id) => !known.has(id))
        if (unknown.length > 0) return { files: [], messages: [], error: `Unknown CF_BINDINGS: ${unknown.join(', ')}. Known: ${[...known].join(', ')}.` }
        const enabled = new Set(requested)

        // Each binding's wrangler fragment (distinct top-level keys, so they merge cleanly).
        const fragment: Record<string, (b: { varName: string }) => Record<string, unknown>> = {
          kv: (b) => ({ kv_namespaces: [{ binding: b.varName, id: '<kv-namespace-id>' }] }),
          r2: (b) => ({ r2_buckets: [{ binding: b.varName, bucket_name: 'double-torus-corpus' }] }),
          d1: (b) => ({ d1_databases: [{ binding: b.varName, database_name: 'double-torus-receipts', database_id: '<d1-id>' }] }),
          do: (b) => ({ durable_objects: { bindings: [{ name: b.varName, class_name: 'Presence' }] } }),
          queues: (b) => ({ queues: { producers: [{ binding: b.varName, queue: 'double-torus-waves' }] } }),
          ai: (b) => ({ ai: { binding: b.varName } }),
          vectorize: (b) => ({ vectorize: [{ binding: b.varName, index_name: 'double-torus-corpus' }] }),
          hyperdrive: (b) => ({ hyperdrive: [{ binding: b.varName, id: '<hyperdrive-id>' }] }),
          analytics: (b) => ({ analytics_engine_datasets: [{ binding: b.varName, dataset: 'double_torus_audit' }] }),
          service: (b) => ({ services: [{ binding: b.varName, service: 'double-torus-seal-verifier' }] }),
          secrets: (b) => ({ secrets_store_secrets: [{ binding: b.varName, store_id: '<secrets-store-id>', secret_name: 'double-torus-secret-uuid' }] }),
        }

        const config: Record<string, unknown> = {
          name: 'double-torus',
          compatibility_date: '2025-06-01',
          pages_build_output_dir: '.vitepress/dist',
        }
        for (const binding of model.bindings) {
          if (enabled.has(binding.id)) Object.assign(config, fragment[binding.id]!(binding))
        }

        const header = [
          '// wrangler.jsonc — generated by the I Ching wizard (scripts/iching.mjs cloudflare).',
          '// Do not edit by hand; re-run the wizard. The site is fully static and client-side: every',
          '// binding below is OPTIONAL and nothing here is required to build, deploy, or use the site.',
          '//',
          '// Choose bindings:  CF_BINDINGS=kv,r2,d1 npm run cf:wizard  (then fill the placeholder ids)',
          '//',
          '// Each binding you enable is one more independent edge store/compute a forger must also',
          '// reproduce, so they optionally — but eventually significantly — increase the tampering cost.',
          '//',
          '// The secret UUID generator is fused to the bindings (Secrets Store): the trinity always signs',
          `// every access — a pair folds to a shared key under ${model.cipher}, hardware-accelerated to gigabit.`,
          '//',
          '// All Cloudflare bindings (toggle by id in CF_BINDINGS):',
          ...model.bindings.map(
            (binding) => `//   [${enabled.has(binding.id) ? 'on ' : '   '}] ${binding.id.padEnd(10)} ${binding.binding} (${binding.varName}) — ${binding.use}; tampering: ${binding.tamper}.`,
          ),
          '',
        ].join('\n')

        return {
          files: [{ path: 'wrangler.jsonc', content: header + JSON.stringify(config, null, 2) + '\n' }],
          messages: [
            `Cloudflare wizard: wrangler.jsonc written — ${enabled.size}/${model.bindings.length} bindings enabled${
              enabled.size ? ` (${[...enabled].join(', ')})` : ' (all optional)'
            }; ${model.bindings.length} total fused, each raising the tampering cost.`,
          ],
        }
      },
    },
    {
      trigram: 0b111,
      glyph: tri(0b111).glyph,
      pinyin: tri(0b111).pinyin,
      name: 'dist',
      title: 'The dist artifacts + README — the whole site made manifest',
      summary:
        'Debug-only recompute of the published surface (sitemap, robots, api/, llms/mcp/skills, README) from src/quantum/dist. Production path is the enforcement trinity cross wave after vitepress build. Filter with DIST_FILTER=sitemap.xml,api/. Gates on an incomplete skills manifest.',
      plan: (ctx) => {
        const files = computedDistFiles(ctx.siteUrl)
        const filter = (ctx.env.DIST_FILTER || '')
          .split(',')
          .map((entry) => entry.trim())
          .filter(Boolean)
        const write = filter.length ? files.filter((file) => filter.some((prefix) => file.path === prefix || file.path.startsWith(prefix))) : files
        const out = write.map((file) => ({ path: `.vitepress/dist/${file.path}`, content: file.content }))
        if (!filter.length || filter.includes('README.md')) out.push({ path: 'README.md', content: readmeMarkdown() })

        let error: string | undefined
        const skillsFile = write.find((file) => file.path === 'skills.json')
        if (skillsFile) {
          const skills = JSON.parse(skillsFile.content) as { complete: number; count: number; skills: { fn: string; complete: boolean }[] }
          if (skills.complete < skills.count) error = `Skill atoms incomplete: ${skills.skills.filter((s) => !s.complete).map((s) => s.fn).join(', ')}`
        }
        return { files: out, messages: [`${tri(0b111).glyph} dist: ${write.length} dist artifact(s) + README from src/quantum/dist.`], error }
      },
    },
    {
      trigram: 0b001,
      glyph: tri(0b001).glyph,
      pinyin: tri(0b001).pinyin,
      name: 'vortex',
      title: 'The vortex fold — local math seals the sequence',
      summary:
        'Outputs vortex.json: the full vortex analysis — palindromic fold balance, vortexNext/vortexPrev as modular inverses (2×5≡1 mod 9), digit-station pairs with positional sums. The arousing: the sequence that sets all computation in motion from one local step.',
      plan: (ctx) => {
        void ctx
        const fold = foldVortex()
        return {
          files: [{ path: 'vortex.json', content: `${JSON.stringify(fold, null, 2)}\n` }],
          messages: [`${tri(0b001).glyph} vortex: valid=${fold.valid} · palindrome=[${fold.palindrome.join(',')}] · total=${fold.total} · inverseHolds=${fold.inverseHolds} → vortex.json`],
        }
      },
    },
    {
      trigram: 0b011,
      glyph: tri(0b011).glyph,
      pinyin: tri(0b011).pinyin,
      name: 'songbook',
      title: 'ПесноПойка — Balkan folk songbook by gabchik',
      summary:
        'Outputs songbook.json: all 103 Balkan folk songs decoded (genre, aksak, provenance, dialect), plus the 437-entry dialect glossary. The joyous — music is joy, the body of folk knowledge made recomputable.',
      plan: (ctx) => {
        void ctx
        const corpus = pesnopoika()
        return {
          files: [{ path: 'songbook.json', content: `${JSON.stringify(corpus, null, 2)}\n` }],
          messages: [`${tri(0b011).glyph} songbook: ${corpus.count} songs · ${corpus.dictionarySize} dialect entries → songbook.json`],
        }
      },
    },
    {
      trigram: 0b100,
      glyph: tri(0b100).glyph,
      pinyin: tri(0b100).pinyin,
      name: 'census',
      title: 'The fold census — proven or purged, keeping still',
      summary:
        'Outputs census.json: every declared gate with its proven/purged status from whatIsNotProvenIsPurged(). Keeping still — the census is the stable record of what has been built and sealed.',
      plan: (ctx) => {
        void ctx
        const report = whatIsNotProvenIsPurged()
        return {
          files: [{ path: 'census.json', content: `${JSON.stringify(report, null, 2)}\n` }],
          messages: [`${tri(0b100).glyph} census: ${report.proven} proven · ${report.purge.length} purged · pure=${report.pureProof} → census.json`],
        }
      },
    },
    {
      trigram: 0b101,
      glyph: tri(0b101).glyph,
      pinyin: tri(0b101).pinyin,
      name: 'crosslinks',
      title: 'Crosslinks — the I Ching domain peer map',
      summary:
        'Outputs crosslinks.json: every static page mapped to its I Ching domain siblings ("see also" links). The clinging fire illuminates connections — each page clings to its domain peers by the same trigram.',
      plan: (ctx) => {
        void ctx
        const nav = siteNavigation()
        const links = nav.en.crosslinks
        const total = Object.values(links).reduce((n, peers) => n + peers.length, 0)
        return {
          files: [{ path: 'crosslinks.json', content: `${JSON.stringify(links, null, 2)}\n` }],
          messages: [`${tri(0b101).glyph} crosslinks: ${Object.keys(links).length} pages · ${total} peer links → crosslinks.json`],
        }
      },
    },
  ]
}

// Resolve a generator by its short name, its trigram glyph, or its bits (0–7), then run its plan.
// Returns null for an unknown selector so the runner can print the index.
export function runGenerator(selector: string, ctx: GenContext): GenResult | null {
  const key = selector.trim()
  const gen = generators().find((g) => g.name === key || g.glyph === key || String(g.trigram) === key)
  return gen ? gen.plan(ctx) : null
}

// The fold: the generators ARE placed on the eight trigrams, computed and verifiable. Encodes the
// decision "compact the scripts with the I Ching" as a recomputable receipt, like every other fold.
export function generatorsAreIChing() {
  const gens = generators()
  const slots = gens.map((g) => ({
    trigram: g.trigram,
    glyph: g.glyph,
    pinyin: g.pinyin,
    name: g.name,
    title: g.title,
    glyphMatchesBagua: BAGUA[g.trigram]!.glyph === g.glyph,
    receipt: toUuid(`generator:${g.trigram}:${g.name}`),
  }))
  const distinctTrigrams = new Set(slots.map((s) => s.trigram)).size === slots.length
  const filled = slots.length
  const open = BAGUA.length - filled
  return {
    placed: distinctTrigrams && slots.every((s) => s.glyphMatchesBagua) && filled <= BAGUA.length && filled > 0,
    filled,
    open,
    capacity: BAGUA.length,
    slots,
    openTrigrams: BAGUA.filter((b) => !slots.some((s) => s.trigram === b.bits)).map((b) => ({ bits: b.bits, glyph: b.glyph, pinyin: b.pinyin, name: b.name })),
    root: merkleFold(slots.map((s) => s.receipt)),
    statement:
      'The build/debug generators, compacted with the I Ching: eight generators folded into one trigram-indexed registry. Each is placed on the bāguà whose nature it shares — the corpus received (bible → ☷ Earth), the live render that flows (glagolitic → ☵ Water), the optional bindings that pervade (cloudflare → ☴ Wind), the whole made manifest (dist → ☰ Heaven), the sequence that arouses (vortex → ☳ Thunder), the joyous songbook (songbook → ☱ Lake), the stable census (census → ☶ Mountain), the clinging peer map (crosslinks → ☲ Fire). One runner, eight trigrams, all eight filled.',
    boundary:
      'A SEMANTIC placement of imperative generators onto the I Ching’s eight-fold index (the same convention as iChingDomainMap), plus a genuine de-duplication: the read/write/exit boilerplate is now written once. It organises and compacts; it is not divination, and a generator does not acquire its trigram’s meaning. The plans are pure (files returned, not written); only the runner shell touches the disk.',
  }
}

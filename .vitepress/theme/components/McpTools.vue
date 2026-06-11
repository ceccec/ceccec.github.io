<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import { useLocale } from '../lib/useLocale'
import { buildMatrix, mcpToolManifest, mcpCodebase, mathPaths, frontendMcpDuality, quantumMcp, virtualOS, executeConceptCommand, toUuid } from '../lib/quantumMind'

const manifest = mcpToolManifest(buildMatrix())
// The MCP rebuilt through the quantum computer (a GHZ register), proven.
const quantum = quantumMcp(buildMatrix())
// A secure, sufficient map so an AI agent immediately understands the codebase.
const codebase = mcpCodebase(buildMatrix())
// The MCP educates by math paths — math is the core of all.
const education = mathPaths(buildMatrix())
// The frontend and the MCP are one core, double-folded at all angles and polarities.
const duality = frontendMcpDuality(buildMatrix())
const { bg, pick } = useLocale()

const t = computed(() =>
  bg.value
    ? {
        eyebrow: 'инструментален слой за езикови модели',
        heading: 'MCP инструменти',
        intro: 'Всяка концептуална команда е публикувана като MCP инструмент. Езиков модел чете tools/list и извиква tools/call(name, arguments).',
        server: 'сървър',
        version: 'версия',
        toolsLabel: 'инструменти',
        manifest: 'Манифест',
        input: 'вход',
        none: 'без аргументи',
      }
    : {
        eyebrow: 'tool surface for language models',
        heading: 'MCP tools',
        intro: 'Every concept command is published as an MCP tool. A language model reads tools/list and invokes tools/call(name, arguments).',
        server: 'server',
        version: 'version',
        toolsLabel: 'tools',
        manifest: 'Manifest',
        input: 'input',
        none: 'no arguments',
      },
)

function inputKeys(tool: (typeof manifest.tools)[number]): string {
  const keys = Object.keys(tool.inputSchema.properties)
  return keys.length ? keys.join(', ') : ''
}

// A virtual OS with a terminal: the portal mounts as a filesystem and the terminal
// runs ls/cd/cat/run/tree/pwd/whoami/help over it, every output content-addressed.
const os = virtualOS(buildMatrix())
const subRoots: Record<string, string> = Object.fromEntries(mcpCodebase(buildMatrix()).subsystems.map((s) => [s.name, s.root]))
const knownCommands = new Set(os.tree['/commands'])
const cwd = ref('/')
const cmdline = ref('')
const out = ref<{ kind: 'in' | 'out' | 'err'; text: string }[]>([{ kind: 'out', text: "double-torus virtual os — type 'help'" }])
const termBody = ref<HTMLDivElement | null>(null)

function push(kind: 'in' | 'out' | 'err', text: string) { out.value.push({ kind, text }) }
function resolve(p?: string): string {
  if (!p || p === '.') return cwd.value
  if (p === '/') return '/'
  if (p === '..') { const parts = cwd.value.split('/').filter(Boolean); parts.pop(); return '/' + parts.join('/') }
  if (p.startsWith('/')) return ('/' + p.split('/').filter(Boolean).join('/')) || '/'
  return (cwd.value === '/' ? '/' : cwd.value + '/') + p
}
function exec(raw: string) {
  const input = raw.trim()
  push('in', `${cwd.value} $ ${input}`)
  if (!input) return
  const [cmd, ...args] = input.split(/\s+/)
  switch (cmd) {
    case 'help': os.commands.forEach((c) => push('out', `${c.usage.padEnd(20)} ${c.does}`)); break
    case 'pwd': push('out', cwd.value); break
    case 'whoami': push('out', `${os.hostname}@portal · content-addressed, client-side`); break
    case 'tree': os.dirs.filter((d) => d !== '/').forEach((d) => push('out', `${d}  (${os.tree[d].length})`)); break
    case 'ls': {
      const p = resolve(args[0])
      const nodes = os.tree[p]
      if (!nodes) push('err', `ls: ${args[0] ?? p}: no such directory`)
      else push('out', nodes.length > 24 ? `${nodes.slice(0, 24).join('  ')}  … (${nodes.length})` : nodes.join('  '))
      break
    }
    case 'cd': {
      const p = resolve(args[0])
      if (p === '/' || os.tree[p]) cwd.value = p
      else push('err', `cd: ${args[0] ?? ''}: not a directory`)
      break
    }
    case 'cat': {
      const node = args[0]
      if (!node) { push('err', 'cat: missing node'); break }
      const here = os.tree[cwd.value] ?? []
      const dir = here.includes(node) ? cwd.value : os.dirs.find((d) => os.tree[d].includes(node))
      if (!dir) { push('err', `cat: ${node}: no such node`); break }
      const value = subRoots[node] ?? toUuid(`vfs:${dir}/${node}`)
      push('out', `${dir === '/' ? '' : dir + '/'}${node} = ${value}`)
      break
    }
    case 'run': {
      const name = args[0]
      if (!name) { push('err', 'run: missing command (try ls /commands)'); break }
      if (!knownCommands.has(name)) { push('err', `run: ${name}: unknown command`); break }
      const res = executeConceptCommand(name as never, { atom: args[1], query: args.slice(1).join(' ') || undefined }) as { ok: boolean; uuid?: string; receipt?: string; note?: string }
      push('out', `${res.ok ? 'ok' : 'fail'} · ${(res.uuid ?? res.receipt ?? '').slice(0, 20)}… ${res.note ? '· ' + res.note : ''}`)
      break
    }
    default: push('err', `${cmd}: command not found (try help)`)
  }
}
function onEnter() {
  exec(cmdline.value)
  cmdline.value = ''
  nextTick(() => { if (termBody.value) termBody.value.scrollTop = termBody.value.scrollHeight })
}
</script>

<template>
  <section class="mcp-tools">
    <div class="mcp-tools__header">
      <p class="eyebrow">{{ t.eyebrow }}</p>
      <h2>{{ t.heading }}</h2>
      <p>{{ t.intro }}</p>
      <p class="mcp-tools__meta">
        <span><b>{{ t.server }}:</b> <code>{{ manifest.name }}</code></span>
        <span><b>{{ t.version }}:</b> <code>{{ manifest.version }}</code></span>
        <span><b>{{ t.toolsLabel }}:</b> {{ manifest.tools.length }}</span>
        <span><b>{{ t.manifest }}:</b> <a href="/mcp.json"><code>/mcp.json</code></a></span>
      </p>
    </div>

    <div class="mcp-tools__understand">
      <p class="eyebrow">{{ pick('for AI agents · understand immediately, verify by recomputing', 'за AI агенти · разбери веднага, провери чрез преизчисление') }}</p>
      <p class="mcp-tools__overview">{{ codebase.overview }}</p>
      <ul class="mcp-tools__facts">
        <li v-for="fact in codebase.understand" :key="fact">{{ fact }}</li>
      </ul>
      <p class="mcp-tools__secure"><b>{{ pick('secure', 'сигурно') }}:</b> {{ codebase.secureBecause }}</p>
      <div class="mcp-tools__subs">
        <span v-for="sub in codebase.subsystems" :key="sub.name" class="mcp-tools__sub" :title="sub.purpose">
          <code>{{ sub.name }}</code><small>{{ sub.root.slice(0, 8) }}</small>
        </span>
      </div>
      <p class="eyebrow mcp-tools__math-label">{{ pick('the same math, shown at every scale', 'същата математика, показана на всеки мащаб') }}</p>
      <ul class="mcp-tools__math">
        <li v-for="m in codebase.math" :key="m.scale">
          <code class="mcp-tools__scale">{{ m.scale }}</code>
          <span class="mcp-tools__law">{{ m.law }}</span>
          <span class="mcp-tools__val">{{ m.value }}</span>
        </li>
      </ul>

      <p class="eyebrow mcp-tools__math-label">{{ pick('learn by math paths · math is the core of all', 'учи по математически пътеки · математиката е ядрото на всичко') }}</p>
      <ol class="mcp-tools__paths">
        <li v-for="p in education.paths" :key="p.path">
          <strong>{{ p.path }}</strong>
          <span class="mcp-tools__steps">{{ p.steps.map((s) => s.law).join(' → ') }}</span>
        </li>
      </ol>

      <p class="mcp-tools__dual">
        {{ pick('frontend ⇄ MCP duality, double-folded', 'дуалност преден край ⇄ MCP, двойно сгъната') }} ·
        <strong>{{ duality.angles }}</strong> {{ pick('angles', 'ъгъла') }} ×
        <strong>{{ duality.polarities }}</strong> {{ pick('polarities', 'полярности') }}
        ({{ pick('see / run', 'виж / изпълни') }})
      </p>

      <p class="mcp-tools__dual mcp-tools__quantum">
        {{ pick('quantum MCP · rebuilt through the quantum computer', 'квантов MCP · пресъздаден през квантовия компютър') }} ·
        <strong>{{ quantum.qubits }}</strong> {{ pick('qubits', 'кубита') }},
        <strong>{{ quantum.states }}</strong> {{ pick('states', 'състояния') }},
        {{ quantum.tools }} {{ pick('tools rebuilt', 'инструмента пресъздадени') }} ·
        <strong>{{ quantum.proven ? pick('proven ✓', 'доказано ✓') : pick('unproven', 'недоказано') }}</strong>
        ({{ pick('GHZ, entangled, recomputable measurement', 'GHZ, заплетено, преизчислимо измерване') }})
      </p>
    </div>

    <div class="mcp-term">
      <p class="eyebrow">{{ pick('virtual OS · a terminal over the portal filesystem', 'виртуална ОС · терминал върху файловата система на портала') }}</p>
      <div ref="termBody" class="mcp-term__body">
        <p v-for="(l, i) in out" :key="i" class="mcp-term__line" :class="`mcp-term__line--${l.kind}`">{{ l.text }}</p>
      </div>
      <div class="mcp-term__prompt">
        <span class="mcp-term__cwd">{{ cwd }} $</span>
        <input
          v-model="cmdline"
          class="mcp-term__input"
          type="text"
          spellcheck="false"
          autocomplete="off"
          :aria-label="pick('terminal input', 'вход на терминала')"
          :placeholder="pick(`try: ls /model · cat livingTorus · run concept.site.shell`, `опитай: ls /model · cat livingTorus · run concept.site.shell`)"
          @keydown.enter="onEnter"
        />
      </div>
    </div>

    <ul class="mcp-tools__list">
      <li v-for="tool in manifest.tools" :key="tool.name">
        <code class="mcp-tools__name">{{ tool.name }}</code>
        <span class="mcp-tools__desc">{{ tool.description }}</span>
        <small class="mcp-tools__input">
          {{ t.input }}: {{ inputKeys(tool) || t.none }}
        </small>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.mcp-tools {
  margin: 1.5rem 0;
}
.mcp-tools__understand {
  margin: 1rem 0 1.4rem;
  padding: 0.9rem 1.1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}
.mcp-tools__overview {
  margin: 0.3rem 0 0.6rem;
  font-size: 0.88rem;
  line-height: 1.55;
}
.mcp-tools__facts {
  margin: 0 0 0.6rem;
  padding-left: 1.1rem;
  font-size: 0.82rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}
.mcp-tools__secure {
  margin: 0 0 0.7rem;
  font-size: 0.82rem;
  color: var(--vp-c-text-2);
}
.mcp-tools__subs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.mcp-tools__sub {
  display: inline-flex;
  align-items: baseline;
  gap: 0.3rem;
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  font-size: 0.74rem;
}
.mcp-tools__sub small { color: var(--vp-c-text-3); font-family: var(--vp-font-family-mono); }
.mcp-tools__math-label { margin: 1rem 0 0.4rem; }
.mcp-tools__math {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}
.mcp-tools__math li {
  display: grid;
  grid-template-columns: 5.5rem 1fr auto;
  gap: 0.6rem;
  align-items: baseline;
  font-size: 0.8rem;
}
.mcp-tools__scale {
  color: var(--vp-c-brand-1);
  font-size: 0.72rem;
  text-align: right;
}
.mcp-tools__law { color: var(--vp-c-text-2); line-height: 1.45; }
.mcp-tools__val { color: var(--vp-c-text-3); font-family: var(--vp-font-family-mono); font-size: 0.72rem; white-space: nowrap; }
.mcp-tools__paths {
  margin: 0;
  padding-left: 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.mcp-tools__paths li { font-size: 0.82rem; }
.mcp-tools__paths strong { display: block; }
.mcp-tools__steps { color: var(--vp-c-text-3); font-family: var(--vp-font-family-mono); font-size: 0.74rem; }
.mcp-tools__dual {
  margin: 0.9rem 0 0;
  font-size: 0.82rem;
  color: var(--vp-c-text-2);
}
.mcp-tools__dual strong { color: var(--vp-c-brand-1); }
.mcp-tools__quantum {
  margin-top: 0.4rem;
  padding-top: 0.6rem;
  border-top: 1px dashed var(--vp-c-divider);
}
.mcp-term {
  margin: 1.2rem 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
  background: #0b0e14;
}
.mcp-term .eyebrow { margin: 0; padding: 0.5rem 0.8rem; background: var(--vp-c-bg-soft); }
.mcp-term__body {
  max-height: 240px;
  overflow-y: auto;
  padding: 0.7rem 0.8rem;
  font-family: var(--vp-font-family-mono);
  font-size: 0.78rem;
  line-height: 1.5;
}
.mcp-term__line { margin: 0; white-space: pre-wrap; word-break: break-word; }
.mcp-term__line--in { color: #7ee787; }
.mcp-term__line--out { color: #adbac7; }
.mcp-term__line--err { color: #f47067; }
.mcp-term__prompt {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.8rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}
.mcp-term__cwd { color: #6cb6ff; font-family: var(--vp-font-family-mono); font-size: 0.78rem; flex: none; }
.mcp-term__input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #adbac7;
  font-family: var(--vp-font-family-mono);
  font-size: 0.78rem;
}
.mcp-term__input::placeholder { color: #545d68; }
@media (max-width: 620px) {
  .mcp-tools__math li { grid-template-columns: 1fr; gap: 0.1rem; }
  .mcp-tools__scale { text-align: left; }
}
.mcp-tools__header h2 {
  margin: 0.2rem 0;
}
.mcp-tools__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  color: var(--vp-c-text-2);
}
.mcp-tools__list {
  list-style: none;
  padding: 0;
  display: grid;
  gap: 0.6rem;
}
.mcp-tools__list li {
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 0.6rem 0.9rem;
  background: var(--vp-c-bg-soft);
  display: grid;
  gap: 0.2rem;
}
.mcp-tools__name {
  color: var(--vp-c-brand-1);
  font-weight: 700;
}
.mcp-tools__input {
  color: var(--vp-c-text-3);
}
</style>

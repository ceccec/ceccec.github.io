<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useData } from 'vitepress'
import {
  buildMatrix,
  conceptCommands,
  executeConceptCommand,
  mcpToolManifest,
  siteManifestFromCommands,
  type ConceptCommandName,
} from '../lib/quantumMind'

// ── Security by architecture ────────────────────────────────────────────────
// 1. No secrets ship in the repo or bundle. The AI key is supplied by the user
//    at runtime and kept only in this browser (localStorage).
// 2. Terminal + search make ZERO network calls — they run pure, read-only
//    concept commands from a fixed allowlist. No eval, no dynamic code.
// 3. The AI tools the model may call are restricted to the same read-only
//    concept commands; anything outside the allowlist is refused client-side.
// 4. External calls (AI, web search) are explicit opt-in; output is rendered as
//    text only (no HTML injection) and treated as untrusted.
const matrix = buildMatrix()
const manifest = mcpToolManifest(matrix)
const allowlist = new Set(conceptCommands.map((c) => c.name))

const { lang } = useData()
const bg = computed(() => lang.value.startsWith('bg'))
const t = computed(() =>
  bg.value
    ? {
        eyebrow: 'квантова конзола',
        heading: 'Терминал · Търсене · Чат',
        tabTerminal: 'Терминал',
        tabSearch: 'Търсене',
        tabChat: 'Чат',
        modeLocal: 'Локален (безплатно)',
        modeAi: 'Външен ИИ (твой ключ)',
        freeNote: 'Нула мрежа · нула цена · архитектурата отговаря.',
        run: 'Изпълни',
        terminalHint: 'Напиши команда (help, ls, mcp, clear) или име на концептуална команда.',
        searchHint: 'Търси в командите и страниците в реално време…',
        keyTitle: 'Свържи ИИ (твой ключ)',
        keyNote:
          'Ключът остава само в този браузър (localStorage) и се изпраща директно до api.anthropic.com по HTTPS. Съобщенията ти напускат браузъра към доставчика на ИИ и публичното търсене.',
        keyPlaceholder: 'sk-ant-… (Anthropic API ключ)',
        connect: 'Свържи',
        clearKey: 'Изчисти ключа',
        connected: 'ИИ е свързан в този браузър.',
        chatHint: 'Попитай нещо — ИИ може да търси в интернет и да вика инструментите на портала.',
        thinking: 'мисля…',
        ask: 'Питай',
        noKey: 'Не е свързан ключ.',
        tool: 'инструмент',
        searched: 'търси в мрежата',
        empty: 'няма резултати',
      }
    : {
        eyebrow: 'quantum console',
        heading: 'Terminal · Search · Chat',
        tabTerminal: 'Terminal',
        tabSearch: 'Search',
        tabChat: 'Chat',
        modeLocal: 'Local (free)',
        modeAi: 'External AI (your key)',
        freeNote: 'Zero network · zero cost · the architecture answers.',
        run: 'Run',
        terminalHint: 'Type a command (help, ls, mcp, clear) or a concept command name.',
        searchHint: 'Search commands and pages in realtime…',
        keyTitle: 'Connect AI (your key)',
        keyNote:
          'Your key stays only in this browser (localStorage) and is sent directly to api.anthropic.com over HTTPS. Your messages leave the browser to the AI provider and public search.',
        keyPlaceholder: 'sk-ant-… (Anthropic API key)',
        connect: 'Connect',
        clearKey: 'Clear key',
        connected: 'AI is connected in this browser.',
        chatHint: 'Ask anything — the AI can search the web and call the portal tools.',
        thinking: 'thinking…',
        ask: 'Ask',
        noKey: 'No key connected.',
        tool: 'tool',
        searched: 'searched the web',
        empty: 'no results',
      },
)

const tab = ref<'terminal' | 'search' | 'chat'>('terminal')

// ── Terminal (zero network, allowlisted, read-only) ─────────────────────────
type Line = { kind: 'in' | 'out' | 'err'; text: string }
const termLines = ref<Line[]>([
  { kind: 'out', text: 'double-torus quantum console — type "help".' },
])
const termInput = ref('')

function runTerminal() {
  const raw = termInput.value.trim()
  termInput.value = ''
  if (!raw) return
  termLines.value.push({ kind: 'in', text: `$ ${raw}` })
  const [cmd, ...rest] = raw.split(/\s+/)
  if (cmd === 'clear') {
    termLines.value = []
    return
  }
  if (cmd === 'help') {
    termLines.value.push({
      kind: 'out',
      text: 'help, ls, mcp, clear, <concept.command> [atom]. All commands are read-only and run locally.',
    })
    return
  }
  if (cmd === 'ls') {
    termLines.value.push({ kind: 'out', text: conceptCommands.map((c) => c.name).join('\n') })
    return
  }
  if (cmd === 'mcp') {
    termLines.value.push({ kind: 'out', text: `${manifest.tools.length} MCP tools at /mcp.json` })
    return
  }
  if (!allowlist.has(cmd)) {
    termLines.value.push({ kind: 'err', text: `unknown command: ${cmd} (try "ls")` })
    return
  }
  const out = executeConceptCommand(cmd as ConceptCommandName, { atom: rest[0] }, matrix)
  termLines.value.push({
    kind: out.ok ? 'out' : 'err',
    text: `${out.ok ? 'ok' : 'open'} ${out.uuid}\n${out.summary}`,
  })
}

// ── Search (zero network, local realtime) ───────────────────────────────────
const searchQuery = ref('')
const searchIndex = [
  ...conceptCommands.map((c) => ({ kind: 'command', title: c.name, detail: c.description, link: '/commands' })),
  ...siteManifestFromCommands().map((s) => ({ kind: 'page', title: s.title, detail: s.summary, link: s.route })),
]
const searchResults = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()
  if (!q) return [] as typeof searchIndex
  return searchIndex
    .filter((item) => `${item.title} ${item.detail}`.toLowerCase().includes(q))
    .slice(0, 12)
})

// ── Chat ────────────────────────────────────────────────────────────────────
// Default mode is LOCAL: a free, zero-network agent. The architecture itself is
// the intelligence — it routes the query to the portal's own computed tools and
// local search and answers from receipts. The cost is the architecture, not an
// API bill. External AI is an optional bring-your-own-key augment.
const chatMode = ref<'local' | 'ai'>('local')
const KEY_STORE = 'double-torus.anthropic-key'
const apiKey = ref('')
const keyInput = ref('')
const chatInput = ref('')
const chatBusy = ref(false)
const chatLines = ref<{ role: 'user' | 'assistant' | 'note'; text: string }[]>([])

// Free, client-side agent: rank concept commands + pages by query overlap, run
// the best-matching read-only command, and answer from its receipt + search.
function answerLocally(query: string) {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean)
  const score = (text: string) => terms.reduce((s, term) => (text.toLowerCase().includes(term) ? s + 1 : s), 0)
  const ranked = conceptCommands
    .map((c) => ({ c, s: score(`${c.name} ${c.description}`) }))
    .filter((r) => r.s > 0)
    .sort((a, b) => b.s - a.s)
  const hits = searchIndex
    .map((item) => ({ item, s: score(`${item.title} ${item.detail}`) }))
    .filter((r) => r.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, 3)

  if (!ranked.length && !hits.length) {
    chatLines.value.push({ role: 'assistant', text: 'No matching tool or page. Try "ls" in the terminal, or a concept word like proof, school, mcp, digit.' })
    return
  }
  if (ranked.length) {
    const best = ranked[0].c
    chatLines.value.push({ role: 'note', text: `· ${t.value.tool}: ${best.name}` })
    const out = executeConceptCommand(best.name as ConceptCommandName, { atom: 'self' }, matrix)
    chatLines.value.push({ role: 'assistant', text: `${best.description}\n${out.ok ? 'ok' : 'open'} ${out.uuid}\n${out.summary}` })
  }
  if (hits.length) {
    chatLines.value.push({
      role: 'assistant',
      text: hits.map((h) => `→ ${h.item.title} (${h.item.link}): ${h.item.detail}`).join('\n'),
    })
  }
}

onMounted(() => {
  if (typeof window !== 'undefined') apiKey.value = window.localStorage.getItem(KEY_STORE) || ''
})
function connectKey() {
  apiKey.value = keyInput.value.trim()
  keyInput.value = ''
  if (typeof window !== 'undefined' && apiKey.value) window.localStorage.setItem(KEY_STORE, apiKey.value)
}
function clearKey() {
  apiKey.value = ''
  if (typeof window !== 'undefined') window.localStorage.removeItem(KEY_STORE)
}

// Portal tools (read-only concept commands) + Anthropic's public web search.
function portalTools() {
  return [
    { type: 'web_search_20260209', name: 'web_search' },
    ...manifest.tools.map((tool) => ({
      name: tool.name,
      description: tool.description,
      input_schema: tool.inputSchema,
    })),
  ]
}

async function sendChat() {
  const text = chatInput.value.trim()
  if (!text || chatBusy.value) return
  if (chatMode.value === 'ai' && !apiKey.value) return
  chatInput.value = ''
  chatLines.value.push({ role: 'user', text })

  // Free, client-side, zero-cost path — the architecture answers.
  if (chatMode.value === 'local') {
    answerLocally(text)
    return
  }

  chatBusy.value = true
  try {
    const Anthropic = (await import('@anthropic-ai/sdk')).default
    const client = new Anthropic({ apiKey: apiKey.value, dangerouslyAllowBrowser: true })
    const messages: any[] = [{ role: 'user', content: text }]
    for (let step = 0; step < 6; step += 1) {
      const resp: any = await client.messages.create({
        model: 'claude-opus-4-8',
        max_tokens: 4096,
        thinking: { type: 'adaptive' },
        tools: portalTools() as any,
        messages,
      })
      messages.push({ role: 'assistant', content: resp.content })
      for (const block of resp.content) {
        if (block.type === 'text' && block.text.trim()) {
          chatLines.value.push({ role: 'assistant', text: block.text })
        } else if (block.type === 'server_tool_use') {
          chatLines.value.push({ role: 'note', text: `· ${t.value.searched}` })
        }
      }
      if (resp.stop_reason === 'pause_turn') continue
      const toolUses = resp.content.filter((b: any) => b.type === 'tool_use')
      if (!toolUses.length) break
      const results: any[] = []
      for (const tu of toolUses) {
        // Allowlist boundary: only known read-only concept commands may run.
        if (!allowlist.has(tu.name)) {
          results.push({ type: 'tool_result', tool_use_id: tu.id, content: 'refused: tool not in allowlist', is_error: true })
          continue
        }
        chatLines.value.push({ role: 'note', text: `· ${t.value.tool}: ${tu.name}` })
        const out = executeConceptCommand(tu.name as ConceptCommandName, { atom: tu.input?.atom }, matrix)
        results.push({ type: 'tool_result', tool_use_id: tu.id, content: JSON.stringify(out).slice(0, 6000) })
      }
      messages.push({ role: 'user', content: results })
    }
  } catch (error) {
    chatLines.value.push({ role: 'note', text: `error: ${(error as Error).message}` })
  } finally {
    chatBusy.value = false
  }
}
</script>

<template>
  <section class="quantum-console">
    <div class="quantum-console__header">
      <p class="eyebrow">{{ t.eyebrow }}</p>
      <h2>{{ t.heading }}</h2>
    </div>

    <div class="quantum-console__tabs">
      <button :class="{ active: tab === 'terminal' }" type="button" @click="tab = 'terminal'">{{ t.tabTerminal }}</button>
      <button :class="{ active: tab === 'search' }" type="button" @click="tab = 'search'">{{ t.tabSearch }}</button>
      <button :class="{ active: tab === 'chat' }" type="button" @click="tab = 'chat'">{{ t.tabChat }}</button>
    </div>

    <!-- Terminal -->
    <div v-show="tab === 'terminal'" class="quantum-console__panel">
      <pre class="quantum-console__log">{{ termLines.map((l) => l.text).join('\n') }}</pre>
      <form class="quantum-console__row" @submit.prevent="runTerminal">
        <input v-model="termInput" type="text" :placeholder="t.terminalHint" spellcheck="false" autocomplete="off" />
        <button type="submit">{{ t.run }}</button>
      </form>
    </div>

    <!-- Search -->
    <div v-show="tab === 'search'" class="quantum-console__panel">
      <input v-model="searchQuery" class="quantum-console__search" type="search" :placeholder="t.searchHint" />
      <ul class="quantum-console__results">
        <li v-for="item in searchResults" :key="item.kind + item.title">
          <a :href="item.link"><code>{{ item.title }}</code></a>
          <span>{{ item.detail }}</span>
        </li>
        <li v-if="searchQuery && !searchResults.length" class="quantum-console__empty">{{ t.empty }}</li>
      </ul>
    </div>

    <!-- Chat -->
    <div v-show="tab === 'chat'" class="quantum-console__panel">
      <div class="quantum-console__modes">
        <button :class="{ active: chatMode === 'local' }" type="button" @click="chatMode = 'local'">{{ t.modeLocal }}</button>
        <button :class="{ active: chatMode === 'ai' }" type="button" @click="chatMode = 'ai'">{{ t.modeAi }}</button>
        <span class="quantum-console__free">{{ chatMode === 'local' ? t.freeNote : '' }}</span>
      </div>

      <div v-if="chatMode === 'ai' && !apiKey" class="quantum-console__key">
        <strong>{{ t.keyTitle }}</strong>
        <p>{{ t.keyNote }}</p>
        <form class="quantum-console__row" @submit.prevent="connectKey">
          <input v-model="keyInput" type="password" :placeholder="t.keyPlaceholder" autocomplete="off" />
          <button type="submit">{{ t.connect }}</button>
        </form>
      </div>

      <template v-else>
        <p v-if="chatMode === 'ai'" class="quantum-console__connected">
          {{ t.connected }} <button type="button" @click="clearKey">{{ t.clearKey }}</button>
        </p>
        <div class="quantum-console__chat">
          <p v-for="(line, i) in chatLines" :key="i" :class="['quantum-console__msg', line.role]">{{ line.text }}</p>
          <p v-if="chatBusy" class="quantum-console__msg note">{{ t.thinking }}</p>
        </div>
        <form class="quantum-console__row" @submit.prevent="sendChat">
          <input v-model="chatInput" type="text" :placeholder="t.chatHint" :disabled="chatBusy" />
          <button type="submit" :disabled="chatBusy">{{ t.ask }}</button>
        </form>
      </template>
    </div>
  </section>
</template>

<style scoped>
.quantum-console {
  margin: 1.5rem 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
}
.quantum-console__header {
  padding: 1rem 1.25rem 0;
}
.quantum-console__header h2 {
  margin: 0.2rem 0 0.6rem;
}
.quantum-console__tabs {
  display: flex;
  gap: 0.25rem;
  padding: 0 1.25rem;
  border-bottom: 1px solid var(--vp-c-divider);
}
.quantum-console__tabs button {
  padding: 0.5rem 0.9rem;
  border: none;
  background: none;
  color: var(--vp-c-text-2);
  border-bottom: 2px solid transparent;
  cursor: pointer;
}
.quantum-console__tabs button.active {
  color: var(--vp-c-brand-1);
  border-bottom-color: var(--vp-c-brand-1);
}
.quantum-console__panel {
  padding: 1rem 1.25rem;
}
.quantum-console__log,
.quantum-console__chat {
  background: var(--vp-c-bg-alt);
  border-radius: 8px;
  padding: 0.75rem;
  max-height: 320px;
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-word;
  font-size: 0.85rem;
}
.quantum-console__row {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.6rem;
}
.quantum-console__row input,
.quantum-console__search {
  flex: 1;
  padding: 0.5rem 0.7rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-family: var(--vp-font-family-mono);
}
.quantum-console__row button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  background: var(--vp-c-brand-1);
  color: #fff;
  cursor: pointer;
}
.quantum-console__row button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.quantum-console__results {
  list-style: none;
  padding: 0;
  margin: 0.6rem 0 0;
  display: grid;
  gap: 0.4rem;
}
.quantum-console__results li {
  display: grid;
  gap: 0.1rem;
}
.quantum-console__results span,
.quantum-console__empty {
  color: var(--vp-c-text-3);
  font-size: 0.85rem;
}
.quantum-console__modes {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
}
.quantum-console__modes button {
  padding: 0.3rem 0.7rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  cursor: pointer;
  font-size: 0.8rem;
}
.quantum-console__modes button.active {
  background: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  color: #fff;
}
.quantum-console__free {
  color: var(--vp-c-text-3);
  font-size: 0.78rem;
}
.quantum-console__key p {
  color: var(--vp-c-text-2);
  font-size: 0.85rem;
}
.quantum-console__connected {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}
.quantum-console__msg {
  margin: 0.35rem 0;
  white-space: pre-wrap;
}
.quantum-console__msg.user {
  font-weight: 600;
}
.quantum-console__msg.note {
  color: var(--vp-c-text-3);
  font-size: 0.8rem;
}
</style>

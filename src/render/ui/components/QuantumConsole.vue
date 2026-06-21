<script setup lang="ts">
// ☱ Duì · Lake · joyous · upper·yang · twist — self-referencing 10D widget
const ICHING_MASK = { hexagram: 27, glyph: '☱', lo: 'Duì·joyous', up: 'Duì·joyous', color: '#0FF0FF' } as const
import { computed, ref, onMounted } from 'vue'
import { useLocale } from '../lib'
import {
  buildMatrix,
  conceptCommands,
  executeConceptCommand,
  foldQuestion,
  mcpToolManifest,
  siteManifestFromCommands,
  type ConceptCommandName,
} from '../lib'
import { runAiChat } from '../lib'

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

const { bg, tg } = useLocale()
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

// Free, client-side agent: AI encoded locally as intelligence — foldQuestion
// answers from the model's own atoms, commands, and pages with zero network.
function answerLocally(query: string) {
  const answer = foldQuestion(query, matrix)
  if (!answer.matched) {
    chatLines.value.push({ role: 'assistant', text: 'No matching tool or page. Try "ls" in the terminal, or a concept word like proof, school, mcp, digit.' })
    return
  }
  if (answer.command) chatLines.value.push({ role: 'note', text: `· ${t.value.tool}: ${answer.command}` })
  chatLines.value.push({ role: 'assistant', text: answer.receipt ? `${answer.explanation}\n${answer.receipt}` : answer.explanation })
  if (answer.links.length) {
    chatLines.value.push({
      role: 'assistant',
      text: answer.links.map((l) => `→ ${l.title} (${l.route}): ${l.detail}`).join('\n'),
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
    await runAiChat(
      apiKey.value,
      text,
      (role, content) => chatLines.value.push({ role, text: content }),
      { tool: t.value.tool, web: t.value.searched },
    )
  } catch (error) {
    chatLines.value.push({ role: 'note', text: `error: ${(error as Error).message}` })
  } finally {
    chatBusy.value = false
  }
}
</script>

<template>
  <section class="quantum-console" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <div class="quantum-console__header">
      <p class="eyebrow">{{ tg(t.eyebrow) }}</p>
      <h2>{{ tg(t.heading) }}</h2>
    </div>

    <div class="quantum-console__tabs">
      <button :class="{ active: tab === 'terminal' }" type="button" @click="tab = 'terminal'">{{ tg(t.tabTerminal) }}</button>
      <button :class="{ active: tab === 'search' }" type="button" @click="tab = 'search'">{{ tg(t.tabSearch) }}</button>
      <button :class="{ active: tab === 'chat' }" type="button" @click="tab = 'chat'">{{ tg(t.tabChat) }}</button>
    </div>

    <!-- Terminal -->
    <div v-show="tab === 'terminal'" class="quantum-console__panel">
      <pre class="quantum-console__log">{{ termLines.map((l) => l.text).join('\n') }}</pre>
      <form class="quantum-console__row" @submit.prevent="runTerminal">
        <input v-model="termInput" type="text" :placeholder="tg(t.terminalHint)" spellcheck="false" autocomplete="off" :aria-label="tg(t.terminalHint)" />
        <button type="submit">{{ tg(t.run) }}</button>
      </form>
    </div>

    <!-- Search -->
    <div v-show="tab === 'search'" class="quantum-console__panel">
      <input v-model="searchQuery" class="quantum-console__search" type="search" :placeholder="tg(t.searchHint)" :aria-label="tg(t.searchHint)" />
      <ul class="quantum-console__results">
        <li v-for="item in searchResults" :key="item.kind + item.title">
          <a :href="item.link"><code>{{ item.title }}</code></a>
          <span>{{ tg(item.detail) }}</span>
        </li>
        <li v-if="searchQuery && !searchResults.length" class="quantum-console__empty">{{ tg(t.empty) }}</li>
      </ul>
    </div>

    <!-- Chat -->
    <div v-show="tab === 'chat'" class="quantum-console__panel">
      <div class="quantum-console__modes">
        <button :class="{ active: chatMode === 'local' }" type="button" @click="chatMode = 'local'">{{ tg(t.modeLocal) }}</button>
        <button :class="{ active: chatMode === 'ai' }" type="button" @click="chatMode = 'ai'">{{ tg(t.modeAi) }}</button>
        <span class="quantum-console__free">{{ chatMode === 'local' ? tg(t.freeNote) : '' }}</span>
      </div>

      <div v-if="chatMode === 'ai' && !apiKey" class="quantum-console__key">
        <strong>{{ tg(t.keyTitle) }}</strong>
        <p>{{ tg(t.keyNote) }}</p>
        <form class="quantum-console__row" @submit.prevent="connectKey">
          <input v-model="keyInput" type="password" :placeholder="t.keyPlaceholder" autocomplete="off" :aria-label="t.keyPlaceholder" />
          <button type="submit">{{ tg(t.connect) }}</button>
        </form>
      </div>

      <template v-else>
        <p v-if="chatMode === 'ai'" class="quantum-console__connected">
          {{ tg(t.connected) }} <button type="button" @click="clearKey">{{ tg(t.clearKey) }}</button>
        </p>
        <div class="quantum-console__chat">
          <p v-for="(line, i) in chatLines" :key="i" :class="['quantum-console__msg', line.role]">{{ line.text }}</p>
          <p v-if="chatBusy" class="quantum-console__msg note">{{ tg(t.thinking) }}</p>
        </div>
        <form class="quantum-console__row" @submit.prevent="sendChat">
          <input v-model="chatInput" type="text" :placeholder="tg(t.chatHint)" :disabled="chatBusy" :aria-label="tg(t.chatHint)" />
          <button type="submit" :disabled="chatBusy">{{ tg(t.ask) }}</button>
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

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useData } from 'vitepress'
import { buildMatrix, foldQuestion } from '../lib/quantumMind'
import { runAiChat } from '../lib/useQuantumChat'

// Intelligent help folded into every page. Default is free and zero-network —
// the architecture answers via foldQuestion (AI encoded locally as
// intelligence) over the portal's own atoms, commands, and pages. External AI
// is an optional bring-your-own-key augment (key kept only in this browser).
// Security is by architecture: no secrets ship, the default path makes no
// network calls, output is rendered as text only.
const matrix = buildMatrix()

const { lang } = useData()
const bg = computed(() => lang.value.startsWith('bg'))
const t = computed(() =>
  bg.value
    ? {
        open: 'Помощ',
        title: 'Интелигентна помощ',
        free: 'Безплатно · клиентско · архитектурата отговаря',
        ask: 'Питай',
        placeholder: 'Попитай нещо за портала…',
        modeLocal: 'Локален',
        modeAi: 'ИИ (ключ)',
        keyNote: 'Ключът остава само в твоя браузър и отива директно до доставчика по HTTPS.',
        connect: 'Свържи',
        thinking: 'мисля…',
        none: 'Няма съвпадение. Опитай дума като proof, school, mcp, chain.',
        tool: 'инструмент',
        close: 'Затвори',
      }
    : {
        open: 'Help',
        title: 'Intelligent help',
        free: 'Free · client-side · the architecture answers',
        ask: 'Ask',
        placeholder: 'Ask anything about the portal…',
        modeLocal: 'Local',
        modeAi: 'AI (key)',
        keyNote: 'Your key stays only in this browser and goes directly to the provider over HTTPS.',
        connect: 'Connect',
        thinking: 'thinking…',
        none: 'No match. Try a word like proof, school, mcp, chain.',
        tool: 'tool',
        close: 'Close',
      },
)

const open = ref(false)
const mode = ref<'local' | 'ai'>('local')
const input = ref('')
const busy = ref(false)
const lines = ref<{ role: 'user' | 'bot' | 'note'; text: string }[]>([])

const KEY_STORE = 'double-torus.anthropic-key'
const apiKey = ref('')
const keyInput = ref('')
onMounted(() => {
  if (typeof window !== 'undefined') apiKey.value = window.localStorage.getItem(KEY_STORE) || ''
})
function connectKey() {
  apiKey.value = keyInput.value.trim()
  keyInput.value = ''
  if (typeof window !== 'undefined' && apiKey.value) window.localStorage.setItem(KEY_STORE, apiKey.value)
}

function answerLocally(query: string) {
  const answer = foldQuestion(query, matrix)
  if (!answer.matched) {
    lines.value.push({ role: 'bot', text: t.value.none })
    return
  }
  if (answer.command) lines.value.push({ role: 'note', text: `· ${t.value.tool}: ${answer.command}` })
  lines.value.push({ role: 'bot', text: answer.receipt ? `${answer.explanation}\n${answer.receipt}` : answer.explanation })
  if (answer.links.length) {
    lines.value.push({ role: 'bot', text: answer.links.map((l) => `→ ${l.title} (${l.route})`).join('\n') })
  }
}

async function ask() {
  const text = input.value.trim()
  if (!text || busy.value) return
  if (mode.value === 'ai' && !apiKey.value) return
  input.value = ''
  lines.value.push({ role: 'user', text })
  if (mode.value === 'local') {
    answerLocally(text)
    return
  }
  busy.value = true
  try {
    await runAiChat(
      apiKey.value,
      text,
      (role, content) => lines.value.push({ role: role === 'assistant' ? 'bot' : 'note', text: content }),
      { tool: t.value.tool, web: t.value.tool },
    )
  } catch (error) {
    lines.value.push({ role: 'note', text: `error: ${(error as Error).message}` })
  } finally {
    busy.value = false
  }
}
</script>

<template>
  <div class="global-help">
    <button v-if="!open" class="global-help__launch" type="button" @click="open = true">{{ t.open }}</button>
    <div v-else class="global-help__panel">
      <div class="global-help__head">
        <strong>{{ t.title }}</strong>
        <button type="button" class="global-help__x" :aria-label="t.close" @click="open = false">×</button>
      </div>
      <div class="global-help__modes">
        <button :class="{ active: mode === 'local' }" type="button" @click="mode = 'local'">{{ t.modeLocal }}</button>
        <button :class="{ active: mode === 'ai' }" type="button" @click="mode = 'ai'">{{ t.modeAi }}</button>
        <span v-if="mode === 'local'">{{ t.free }}</span>
      </div>
      <div v-if="mode === 'ai' && !apiKey" class="global-help__key">
        <p>{{ t.keyNote }}</p>
        <form @submit.prevent="connectKey">
          <input v-model="keyInput" type="password" placeholder="sk-ant-…" autocomplete="off" />
          <button type="submit">{{ t.connect }}</button>
        </form>
      </div>
      <div class="global-help__log">
        <p v-for="(line, i) in lines" :key="i" :class="['global-help__msg', line.role]">{{ line.text }}</p>
        <p v-if="busy" class="global-help__msg note">{{ t.thinking }}</p>
      </div>
      <form class="global-help__row" @submit.prevent="ask">
        <input v-model="input" type="text" :placeholder="t.placeholder" :disabled="busy" />
        <button type="submit" :disabled="busy">{{ t.ask }}</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.global-help__launch {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  z-index: 60;
  padding: 0.55rem 1.1rem;
  border: none;
  border-radius: 999px;
  background: var(--vp-c-brand-1);
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.18);
}
.global-help__panel {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  z-index: 60;
  width: min(360px, calc(100vw - 2rem));
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.22);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.global-help__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 0.9rem;
  border-bottom: 1px solid var(--vp-c-divider);
}
.global-help__x {
  border: none;
  background: none;
  font-size: 1.2rem;
  line-height: 1;
  cursor: pointer;
  color: var(--vp-c-text-2);
}
.global-help__modes {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 0.9rem 0;
  flex-wrap: wrap;
}
.global-help__modes button {
  padding: 0.2rem 0.6rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  cursor: pointer;
  font-size: 0.72rem;
}
.global-help__modes button.active {
  background: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  color: #fff;
}
.global-help__modes span {
  color: var(--vp-c-text-3);
  font-size: 0.68rem;
}
.global-help__key {
  padding: 0.5rem 0.9rem 0;
}
.global-help__key p {
  color: var(--vp-c-text-3);
  font-size: 0.72rem;
  margin: 0.3rem 0;
}
.global-help__key form,
.global-help__row {
  display: flex;
  gap: 0.4rem;
}
.global-help__log {
  padding: 0.6rem 0.9rem;
  max-height: 40vh;
  overflow: auto;
  font-size: 0.82rem;
}
.global-help__msg {
  margin: 0.3rem 0;
  white-space: pre-wrap;
  word-break: break-word;
}
.global-help__msg.user {
  font-weight: 600;
}
.global-help__msg.note {
  color: var(--vp-c-text-3);
  font-size: 0.72rem;
}
.global-help__row {
  padding: 0.6rem 0.9rem;
  border-top: 1px solid var(--vp-c-divider);
}
.global-help__key input,
.global-help__row input {
  flex: 1;
  padding: 0.4rem 0.6rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}
.global-help__key button,
.global-help__row button {
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 8px;
  background: var(--vp-c-brand-1);
  color: #fff;
  cursor: pointer;
}
</style>

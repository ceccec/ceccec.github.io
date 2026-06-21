<script setup lang="ts">
// ☳ Zhèn · Thunder · arousing · upper·yang · shrink — self-referencing 10D widget
const ICHING_MASK = { hexagram: 10, glyph: '☳', lower: '☵', upper: '☳', color: '#00F0F0' }
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useLocale } from '../lib'
import { buildMatrix, messageUnlock } from '../lib'

// Realtime chats where the same logic always meets on the architectural level:
// every message is content-addressed (its content UUID is its identity), peers
// meet over a same-origin BroadcastChannel — no server, no cost for the user,
// and forging a message means recomputing the model (max cost for the forger).
// The message unlocks links, but the trinity must be complete to reveal them.
const matrix = buildMatrix()
const { bg } = useLocale()

interface ChatMessage {
  content: string
  contentUuid: string
  unlocked: { area: string; glyph: string; links: { label: string; href: string }[] }[]
  mine: boolean
  at: number
}

const draft = ref('')
const messages = ref<ChatMessage[]>([])
let channel: BroadcastChannel | null = null

function buildMessage(content: string, mine: boolean): ChatMessage {
  const unlock = messageUnlock(content, matrix)
  return { content, contentUuid: unlock.contentUuid, unlocked: unlock.unlocked, mine, at: Date.now() }
}

function send() {
  const content = draft.value.trim()
  if (!content) return
  const message = buildMessage(content, true)
  messages.value.push(message)
  channel?.postMessage({ content, at: message.at })
  draft.value = ''
}

onMounted(() => {
  if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
    channel = new BroadcastChannel('double-torus-chat')
    channel.onmessage = (event: MessageEvent) => {
      const content = String(event.data?.content ?? '')
      if (content) messages.value.push(buildMessage(content, false))
    }
  }
})
onUnmounted(() => channel?.close())

const t = computed(() =>
  bg.value
    ? {
        eyebrow: 'чат в реално време · среща на архитектурно ниво',
        placeholder: 'Съобщение… (опитай: nature, music, energy)',
        send: 'Изпрати',
        uuid: 'UUID на съдържанието',
        unlocked: 'отключени връзки (пълна троица)',
        locked: 'нищо не е отключено — троицата не е пълна',
        note: 'Без сървър: връстниците се срещат през един и същ произход. Без цена за теб; фалшифицирането изисква преизчисляване на модела.',
      }
    : {
        eyebrow: 'realtime chat · meets on the architectural level',
        placeholder: 'Message… (try: nature, music, energy)',
        send: 'Send',
        uuid: 'content UUID',
        unlocked: 'unlocked links (complete trinity)',
        locked: 'nothing unlocked — the trinity is not complete',
        note: 'No server: peers meet on the same origin. No cost to you; forging a message means recomputing the model.',
      },
)
</script>

<template>
  <section class="chat dt-card" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <div class="chat__log">
      <article v-for="(m, i) in messages" :key="i" class="chat__msg" :class="{ mine: m.mine }">
        <p class="chat__content">{{ m.content }}</p>
        <p class="chat__uuid"><span>{{ t.uuid }}:</span> <code>{{ m.contentUuid }}</code></p>
        <div v-if="m.unlocked.length" class="chat__unlocked">
          <p class="chat__unlocked-label">🔓 {{ t.unlocked }}</p>
          <p v-for="area in m.unlocked" :key="area.area" class="chat__area">
            <span class="chat__glyph">{{ area.glyph }}</span>
            <a v-for="link in area.links" :key="link.label" :href="link.href"><code>{{ link.label }}</code></a>
          </p>
        </div>
        <p v-else class="chat__locked">🔒 {{ t.locked }}</p>
      </article>
    </div>
    <form class="chat__row" @submit.prevent="send">
      <input v-model="draft" type="text" :placeholder="t.placeholder" :aria-label="t.placeholder" />
      <button class="dt-btn" type="submit">{{ t.send }}</button>
    </form>
    <p class="chat__note">{{ t.note }}</p>
  </section>
</template>

<style scoped>
.chat {
  margin: 1.25rem 0;
  border-radius: 12px;
  padding: 1rem 1.25rem;
}
.chat__log {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-height: 20rem;
  overflow-y: auto;
  margin-bottom: 0.7rem;
}
.chat__msg {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 0.5rem 0.7rem;
  background: var(--vp-c-bg);
}
.chat__msg.mine {
  border-color: var(--vp-c-brand-1);
}
.chat__content {
  margin: 0;
  font-size: 0.9rem;
  color: var(--vp-c-text-1);
}
.chat__uuid {
  margin: 0.25rem 0 0;
  font-size: 0.66rem;
  color: var(--vp-c-text-3);
}
.chat__uuid code {
  font-size: 0.64rem;
  word-break: break-all;
}
.chat__unlocked {
  margin-top: 0.4rem;
  border-top: 1px dashed var(--vp-c-divider);
  padding-top: 0.4rem;
}
.chat__unlocked-label {
  margin: 0 0 0.2rem;
  font-size: 0.68rem;
  color: var(--vp-c-brand-1);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.chat__area {
  margin: 0.15rem 0;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  flex-wrap: wrap;
}
.chat__glyph {
  font-size: 1.05rem;
}
.chat__area a {
  text-decoration: none;
}
.chat__area code {
  font-size: 0.7rem;
}
.chat__locked {
  margin: 0.4rem 0 0;
  font-size: 0.7rem;
  color: var(--vp-c-text-3);
}
.chat__row {
  display: flex;
  gap: 0.5rem;
}
.chat__row input {
  flex: 1;
  padding: 0.4rem 0.6rem;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}
.chat__row button {
  padding: 0.4rem 1.1rem;
}
.chat__note {
  margin: 0.7rem 0 0;
  font-size: 0.74rem;
  color: var(--vp-c-text-2);
  border-left: 3px solid var(--vp-c-brand-1);
  padding-left: 0.6rem;
}
</style>

<script setup lang="ts">
// ☴ Xùn · Wind · gentle · upper·yang · twist — self-referencing 10D widget
const ICHING_MASK = { hexagram: 48, glyph: '☴', lo: '☷', up: '☴', color: '#FF0000', name: 'TrinitySearch' }
import { computed, ref } from 'vue'
import { useLocale } from '../lib/useLocale'
import { buildMatrix, searchTrinity, charUuids, wordUuids } from '../lib/quantumMind'

// Each char a UUID, then the words, and a search of three characters reveals the
// first trinity. Type and watch text become content-addressed at every grain —
// char to word — and at three characters the first complete trinity opens.
const matrix = buildMatrix()
const query = ref('')
const chars = computed(() => charUuids(query.value).chars)
const words = computed(() => wordUuids(query.value).words)
const search = computed(() => searchTrinity(query.value, matrix))
const { bg } = useLocale()
const t = computed(() =>
  bg.value
    ? { eyebrow: 'търсене · всеки символ UUID · троица при 3', placeholder: 'Пиши… (nat, mus, heal)', chars: 'символи', words: 'думи', hint: 'въведи 3 символа, за да разкриеш първата троица', revealed: 'разкрита троица' }
    : { eyebrow: 'search · each char a UUID · trinity at 3', placeholder: 'Type… (nat, mus, heal)', chars: 'chars', words: 'words', hint: 'type 3 characters to reveal the first trinity', revealed: 'trinity revealed' },
)
</script>

<template>
  <section class="ts dt-card" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <input v-model="query" type="text" :placeholder="t.placeholder" class="ts__input" :aria-label="t.placeholder" />
    <template v-if="query.length">
      <p class="ts__label">{{ chars.length }} {{ t.chars }}</p>
      <p class="ts__chars">
        <span v-for="c in chars" :key="c.index" :title="c.uuid">{{ c.char === ' ' ? '␣' : c.char }}</span>
      </p>
      <p v-if="words.length" class="ts__label">{{ words.length }} {{ t.words }}</p>
      <p v-if="words.length" class="ts__words">
        <code v-for="w in words" :key="w.index" :title="w.uuid">{{ w.word }}<small>{{ w.uuid.slice(0, 6) }}</small></code>
      </p>
      <div v-if="search.revealed && search.trinity" class="ts__trinity">
        <p class="ts__revealed">🔓 {{ t.revealed }}: <span class="ts__glyph">{{ search.trinity.glyph }}</span> {{ search.trinity.area }}</p>
        <p class="ts__links"><code v-for="link in search.trinity.links" :key="link.command">{{ link.label }}</code></p>
      </div>
      <p v-else class="ts__hint">🔒 {{ t.hint }}</p>
    </template>
  </section>
</template>

<style scoped>
.ts {
  margin: 1.25rem 0;
  border-radius: 12px;
  padding: 1rem 1.25rem;
}
.ts__input {
  width: 100%;
  padding: 0.45rem 0.7rem;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}
.ts__label {
  margin: 0.7rem 0 0.2rem;
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--vp-c-text-3);
}
.ts__chars {
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.2rem;
}
.ts__chars span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.4rem;
  height: 1.4rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 5px;
  font-family: var(--vp-font-family-mono);
  font-size: 0.8rem;
  cursor: help;
}
.ts__words {
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}
.ts__words code {
  display: inline-flex;
  flex-direction: column;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  padding: 0.15rem 0.4rem;
  font-size: 0.78rem;
  cursor: help;
}
.ts__words small {
  color: var(--vp-c-text-3);
  font-size: 0.6rem;
}
.ts__trinity {
  margin-top: 0.7rem;
  border-top: 1px dashed var(--vp-c-divider);
  padding-top: 0.5rem;
}
.ts__revealed {
  margin: 0 0 0.3rem;
  font-size: 0.85rem;
  color: var(--vp-c-brand-1);
}
.ts__glyph {
  font-size: 1.05rem;
}
.ts__links {
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}
.ts__links code {
  font-size: 0.72rem;
}
.ts__hint {
  margin: 0.7rem 0 0;
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
}
</style>

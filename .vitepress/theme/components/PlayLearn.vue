<script setup lang="ts">
import { computed, ref } from 'vue'
import { playLearn } from '../lib/quantumMind'
import { useLocale } from '../lib/useLocale'
import { useTones } from '../lib/useTones'

// Kids like to learn playing: type a word, every letter is a colour and a note,
// and the word is a little song. Tap a tile to hear it, or play the whole word —
// the same word always plays the same song.
const { bg, pick } = useLocale()
const word = ref(pick('play', 'игра'))
const data = computed(() => playLearn(word.value))
const { playing, current, playSequence, blip } = useTones()

function playWord() {
  playSequence(data.value.letters.map((letter) => ({ frequency: letter.frequency })), { duration: 0.36, peak: 0.16 })
}
function tap(frequency: number) {
  blip(frequency, { peak: 0.14, duration: 0.45 })
}
const t = computed(() =>
  pick(
    { eyebrow: 'play & learn · type a word, hear its song', label: 'your word', play: 'Play the word ▸', hint: 'The same word always plays the same song. Try your name!' },
    { eyebrow: 'играй и учи · напиши дума, чуй песента ѝ', label: 'твоята дума', play: 'Свири думата ▸', hint: 'Същата дума винаги свири същата песен. Опитай името си!' },
  ),
)
</script>

<template>
  <section class="play dt-card">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <label class="play__seed">{{ t.label }}:
      <input v-model="word" type="text" maxlength="16" spellcheck="false" :aria-label="t.label" />
    </label>
    <div class="play__tiles">
      <button
        v-for="(letter, i) in data.letters"
        :key="i"
        type="button"
        class="play__tile"
        :class="{ on: current === i }"
        :style="{ background: letter.hsl }"
        :aria-label="`${letter.char} · ${letter.note}`"
        :title="`${letter.note} · ${letter.frequency} Hz`"
        @click="tap(letter.frequency)"
      >{{ letter.char }}<small>{{ letter.note }}</small></button>
    </div>
    <div class="play__row">
      <button type="button" class="dt-btn" :disabled="playing || data.count === 0" @click="playWord">{{ t.play }}</button>
      <span class="play__hint">{{ t.hint }}</span>
    </div>
  </section>
</template>

<style scoped>
.play {
  margin: 1.5rem 0;
  border-radius: 14px;
  padding: 1.2rem 1.4rem;
}
.play__seed {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.3rem 0 0.9rem;
  font-size: 0.9rem;
}
.play__seed input {
  padding: 0.35rem 0.6rem;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 1rem;
  width: 9rem;
}
.play__tiles {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
  min-height: 3.4rem;
}
.play__tile {
  width: 3rem;
  height: 3.4rem;
  display: grid;
  place-items: center;
  border: none;
  border-radius: 12px;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 800;
  cursor: pointer;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  transition: transform 0.12s ease, box-shadow 0.12s ease;
}
.play__tile:hover {
  transform: translateY(-3px);
}
.play__tile.on {
  transform: translateY(-7px) scale(1.08);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.28);
}
.play__tile small {
  font-size: 0.6rem;
  font-weight: 700;
  opacity: 0.85;
}
.play__row {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  flex-wrap: wrap;
}
.play__hint {
  font-size: 0.84rem;
  color: var(--vp-c-text-2);
}
</style>

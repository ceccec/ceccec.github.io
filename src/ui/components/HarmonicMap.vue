<script setup lang="ts">
// ☴ Xùn · Wind · gentle · upper·yang · twist — self-referencing 10D widget
const ICHING_MASK = { hexagram: 48, glyph: '☴', lo: '☷', up: '☴', color: '#FF0000', name: 'HarmonicMap' }
import { computed, ref, watch } from 'vue'
import { buildMatrix, harmonicMap } from '../lib'
import { useLocale } from '../lib'
import { useTones } from '../lib'

// The harmonic map, seen and heard: every component an overtone of one
// fundamental, laid out in octave bands. Click a band to play it through the
// shared audio engine. Raw overtone frequencies climb high, so playback folds
// each note into a comfortable listening octave — the model keeps the true Hz.
const data = harmonicMap(buildMatrix())
const { bg } = useLocale()
const { playing, current, playSequence, stop } = useTones()
const activeOctave = ref(-1)

watch(playing, (on) => {
  if (!on) activeOctave.value = -1
})

function fold(frequency: number) {
  let hz = frequency
  while (hz > 880) hz /= 2
  while (hz < 165) hz *= 2
  return hz
}
function playBand(octave: number, members: { frequency: number }[]) {
  if (playing.value) {
    stop()
    return
  }
  activeOctave.value = octave
  playSequence(members.map((member) => ({ frequency: fold(member.frequency) })), { duration: 0.26, peak: 0.16 })
}

const t = computed(() =>
  bg.value
    ? { eyebrow: 'хармонична карта · структурата като обертонове', sub: `основа ${data.fundamental} Hz · ${data.count} обертона · ${data.octaves} октави`, play: 'Свири октавата', stop: 'Спри', octave: 'октава' }
    : { eyebrow: 'harmonic map · the structure as overtones', sub: `fundamental ${data.fundamental} Hz · ${data.count} overtones · ${data.octaves} octaves`, play: 'Play octave', stop: 'Stop', octave: 'octave' },
)
</script>

<template>
  <section class="hmap dt-card" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <p class="hmap__sub">{{ t.sub }}</p>
    <div class="hmap__bands">
      <div v-for="band in data.bands" :key="band.octave" class="hmap__band">
        <div class="hmap__bandhead">
          <span class="hmap__octave">{{ t.octave }} {{ band.octave }}</span>
          <button
            type="button"
            :aria-label="`${t.play}, ${t.octave} ${band.octave}`"
            :aria-pressed="playing && activeOctave === band.octave"
            @click="playBand(band.octave, band.members)"
          >
            {{ playing && activeOctave === band.octave ? t.stop : t.play }}
          </button>
        </div>
        <ul class="hmap__notes">
          <li
            v-for="(member, i) in band.members"
            :key="member.name"
            :class="{ sounding: activeOctave === band.octave && current === i }"
            :title="`${member.name} · overtone ${member.overtone} · ${member.frequency} Hz`"
          >
            <strong>{{ member.note }}</strong>
            <small>{{ member.name }}</small>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hmap {
  margin: 1.5rem 0;
  border-radius: 14px;
  padding: 1.2rem 1.4rem;
}
.hmap__sub {
  margin: 0.2rem 0 0.9rem;
  color: var(--vp-c-text-3);
  font-size: 0.8rem;
}
.hmap__bands {
  display: grid;
  gap: 0.7rem;
}
.hmap__band {
  border-left: 3px solid var(--vp-c-brand-1);
  padding-left: 0.8rem;
}
.hmap__bandhead {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.4rem;
}
.hmap__octave {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--vp-c-text-3);
}
.hmap__bandhead button {
  padding: 0.2rem 0.7rem;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 999px;
  background: transparent;
  color: var(--vp-c-brand-1);
  cursor: pointer;
  font-size: 0.72rem;
}
.hmap__notes {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
.hmap__notes li {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  min-width: 2.1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 7px;
  padding: 0.2rem 0.3rem;
  transition: border-color 0.1s ease, background 0.1s ease, transform 0.1s ease;
}
.hmap__notes li.sounding {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  transform: translateY(-2px);
}
.hmap__notes strong {
  color: var(--vp-c-brand-1);
  font-size: 0.82rem;
}
.hmap__notes small {
  color: var(--vp-c-text-3);
  font-size: 0.58rem;
  max-width: 4.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>

<script setup>
// ☰ Qián · Heaven · creative · upper·yang · shrink — self-referencing 10D widget
const ICHING_MASK = { hexagram: 59, trigram: '☱☰', glyph: '☱☰', lo: 'Duì·joyous', up: 'Qián·creative', color: '#FFF0FF' }
// I CHING ORACLE — a game AND a worked example of the architecture. Cast six lines (yin/yang) bottom→top to
// build a hexagram; it resolves — by the SAME content-addressing every page and component uses (iChing) — to
// the component whose own hexagram matches. The knowledge answers. Live (reads iChing), animated (lines flip
// in via CSS), legible (the hexagram, its trigrams, and the component it lands on, all as text). The cast uses
// browser Math.random (a game, not a model computation); the resolution from the cast is deterministic.
import { ref, computed } from 'vue'
import { useTones } from '../lib'
import { iChing } from '../lib'
import { useLocale } from '../lib'

const { pick } = useLocale()
const t = (en, b) => pick(en, b)
const tones = useTones()
const ic = iChing()

const lines = ref([]) // cast bottom→top; 0 = yin (broken), 1 = yang (solid)
const complete = computed(() => lines.value.length === 6)
const hexagram = computed(() => lines.value.reduce((n, l, i) => n | (l << i), 0)) // bottom line = LSB
const upperTri = computed(() => ic.trigrams[(hexagram.value >> 3) & 7])
const lowerTri = computed(() => ic.trigrams[hexagram.value & 7])
const landed = computed(() => ic.placed.find((p) => p.hexagram === hexagram.value) || ic.placed.filter((p) => p.set === ((hexagram.value >> 3) & 7))[0])
const rows = [5, 4, 3, 2, 1, 0] // display top→bottom

function castLine() {
  if (lines.value.length >= 6) return
  const line = Math.random() < 0.5 ? 0 : 1
  lines.value = [...lines.value, line]
  tones.blip(line ? 648 : 432, { type: 'sine', peak: 0.06, duration: 0.15 })
}
function reset() { lines.value = [] }
</script>

<template>
  <section class="ora" aria-labelledby="ora-title" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <p class="ora__eyebrow">{{ t('Double Torus · the oracle', 'Двоен торус · оракулът') }}</p>
    <h2 id="ora-title">{{ t('Cast a hexagram', 'Хвърли хексаграма') }}</h2>
    <p class="ora__lede">{{ t('Cast six lines; the hexagram resolves — by the same content-addressing every page and component uses — to one of the components. The architecture answering.', 'Хвърли шест черти; хексаграмата се разрешава — чрез същото съдържателно адресиране — до един от компонентите. Архитектурата отговаря.') }}</p>

    <div class="ora__cast">
      <div class="ora__lines" :aria-label="t('the cast hexagram', 'хвърлената хексаграма')">
        <span v-for="r in rows" :key="r" class="ora__line"
          :class="lines[r] === undefined ? 'ora__line--empty' : (lines[r] ? 'ora__line--yang' : 'ora__line--yin')"></span>
      </div>
      <div class="ora__ctl">
        <button v-if="!complete" type="button" class="ora__btn" @click="castLine">
          {{ t('Cast line', 'Хвърли черта') }} {{ lines.length + 1 }}/6
        </button>
        <button v-else type="button" class="ora__btn ora__btn--again" @click="reset">{{ t('Cast again', 'Отново') }}</button>
      </div>
    </div>

    <div v-if="complete" class="ora__reading">
      <p class="ora__hex"><span class="ora__glyphs">{{ upperTri.glyph }}{{ lowerTri.glyph }}</span>
        {{ t('hexagram', 'хексаграма') }} {{ hexagram }} · {{ upperTri.name }} {{ t('over', 'над') }} {{ lowerTri.name }}</p>
      <p v-if="landed" class="ora__landed">
        {{ t('lands on', 'пада на') }} <span class="ora__sw" :style="{ background: landed.color }"></span>
        <code>{{ landed.component }}</code> <span class="ora__meta">{{ landed.lines }} · {{ landed.codon }}</span>
      </p>
    </div>
  </section>
</template>

<style scoped>
.ora { margin: 2.5rem 0; padding: 1.2rem 1.3rem; border: 1px solid var(--vp-c-divider); border-radius: 14px; background: var(--vp-c-bg-soft); container-type: inline-size; }
.ora__eyebrow { font-size: 0.78rem; letter-spacing: 0.04em; text-transform: uppercase; color: var(--vp-c-text-2); margin: 0 0 0.25rem; }
.ora h2 { border: 0; margin: 0 0 0.4rem; font-size: 1.3rem; }
.ora__lede { color: var(--vp-c-text-2); max-width: 60ch; font-size: 0.9rem; }
.ora__cast { display: flex; gap: 1.5rem; align-items: center; margin: 1.25rem 0 0.5rem; flex-wrap: wrap; }
.ora__lines { display: grid; gap: 6px; width: 120px; }
.ora__line { height: 12px; border-radius: 3px; }
.ora__line--empty { background: var(--vp-c-default-soft); opacity: 0.5; }
.ora__line--yang { background: var(--vp-c-brand-1); animation: ora-in 0.4s ease backwards; }
.ora__line--yin { background: linear-gradient(90deg, var(--vp-c-brand-1) 0 42%, transparent 42% 58%, var(--vp-c-brand-1) 58% 100%); animation: ora-in 0.4s ease backwards; }
@keyframes ora-in { from { opacity: 0; transform: scaleX(0.4); } }
.ora__btn { font-size: 0.88rem; font-weight: 600; cursor: pointer; padding: 0.5rem 1.1rem; border-radius: 9px;
  border: 1px solid var(--vp-c-brand-1); background: color-mix(in oklab, var(--vp-c-brand-1) 12%, transparent); color: var(--vp-c-brand-1); }
.ora__btn:focus-visible { outline: 2px solid var(--vp-c-brand-1); outline-offset: 2px; }
.ora__btn--again { border-color: var(--vp-c-divider); background: var(--vp-c-bg); color: var(--vp-c-text-2); }
.ora__reading { margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid var(--vp-c-divider); animation: ora-reveal 0.5s ease; }
@keyframes ora-reveal { from { opacity: 0; transform: translateY(6px); } }
.ora__hex { margin: 0 0 0.4rem; font-weight: 600; }
.ora__glyphs { font-size: 1.5rem; letter-spacing: -2px; margin-right: 0.4rem; }
.ora__landed { margin: 0; font-size: 0.92rem; }
.ora__sw { display: inline-block; width: 13px; height: 13px; border-radius: 4px; border: 1px solid var(--vp-c-divider); vertical-align: middle; margin: 0 0.2rem; }
.ora__meta { font-size: 0.74rem; color: var(--vp-c-text-2); font-variant-numeric: tabular-nums; }
@media (prefers-reduced-motion: reduce) { .ora__line, .ora__reading { animation: none; } }
</style>

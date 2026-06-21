<script setup lang="ts">
// ☵ Kǎn · Water · abysmal · upper·yang · breath — self-referencing 10D widget
const ICHING_MASK = { hexagram: 19, glyph: '☵', lower: '☱', upper: '☵', color: '#0F00FF' } as const
import { computed } from 'vue'
import { buildMatrix, sealAll } from '../lib'
import { useLocale } from '../lib'

// Seal all in waves: every proof a wave, folded in order into one master seal.
// Each wave shows its seal and the running fold it merges into; the footer shows
// whether the whole is sealed and the master root that carries them all.
const data = sealAll(buildMatrix())
const { bg, pick, pickDeep } = useLocale()

const bgWave: Record<string, string> = {
  breath: 'дишане',
  equilibrium: 'равновесие',
  'trinities harmonized': 'хармонизирани троици',
  'trinity gates': 'порти на троиците',
  'cross-fold': 'кръстосано сгъване',
  'double-torus fold': 'сгъване на двойния тор',
  'free animations': 'свободни анимации',
  'quantum sitemap': 'квантова карта',
  synthesis: 'синтез',
  'proof bundle': 'пакет доказателства',
  'secure interaction': 'сигурно взаимодействие',
  completion: 'завършеност',
  graduation: 'дипломиране',
  multidimensional: 'многоизмерност',
}
const waves = computed(() =>
  data.waves.map((wave) => ({ ...wave, name: pick(wave.wave, bgWave[wave.wave] ?? wave.wave) })),
)
const t = computed(() =>
  pickDeep(
    { eyebrow: 'seal all · in waves', sealed: 'all sealed', open: 'open wave', master: 'master seal', closed: `${data.closed}/${data.count} waves sealed` },
    { eyebrow: 'запечатай всичко · на вълни', sealed: 'всичко запечатано', open: 'отворена вълна', master: 'главен печат', closed: `${data.closed}/${data.count} вълни запечатани` },
  ),
)
</script>

<template>
  <section class="seal-all dt-card" :class="{ ok: data.sealed }" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <ol class="seal-all__waves">
      <li v-for="wave in waves" :key="wave.wave" :class="{ ok: wave.ok }">
        <span class="seal-all__mark">{{ wave.ok ? '◆' : '◇' }}</span>
        <span class="seal-all__name">{{ wave.name }}</span>
        <code class="seal-all__fold" :title="wave.fold">{{ wave.fold.slice(0, 13) }}…</code>
      </li>
    </ol>
    <p class="seal-all__master" :class="{ ok: data.sealed }">
      {{ data.sealed ? '∞ ' : '' }}{{ data.sealed ? t.sealed : t.open }} · {{ t.closed }}
      <code :title="data.masterFold">{{ t.master }}: {{ data.masterFold.slice(0, 13) }}…</code>
    </p>
  </section>
</template>

<style scoped>
.seal-all {
  margin: 1.5rem 0;
  border-radius: 14px;
  padding: 1.2rem 1.4rem;
}
.seal-all.ok {
  border-color: var(--vp-c-brand-1);
}
.seal-all__waves {
  list-style: none;
  margin: 0.6rem 0 0.8rem;
  padding: 0;
  display: grid;
  gap: 0.35rem;
}
.seal-all__waves li {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 0.6rem;
  border-left: 3px solid var(--vp-c-divider);
  padding-left: 0.7rem;
}
.seal-all__waves li.ok {
  border-left-color: var(--vp-c-brand-1);
}
.seal-all__mark {
  color: var(--vp-c-brand-1);
  font-size: 0.9rem;
}
.seal-all__name {
  font-weight: 600;
}
.seal-all__fold {
  font-family: var(--vp-font-family-mono);
  font-size: 0.74rem;
  color: var(--vp-c-text-3);
}
.seal-all__master {
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: baseline;
  font-size: 0.85rem;
  font-style: italic;
  color: var(--vp-c-text-2);
}
.seal-all__master.ok {
  color: var(--vp-c-brand-1);
}
.seal-all__master code {
  font-family: var(--vp-font-family-mono);
  font-size: 0.74rem;
  font-style: normal;
}
</style>

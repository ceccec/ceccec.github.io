<script setup lang="ts">
import { computed, ref } from 'vue'
import { useLocale } from '../lib/useLocale'
import { buildMatrix, creationWave, endlessWaves } from '../lib/quantumMind'

// Endless waves of creation. Each wave is computable from its index alone — a
// UUID, a note, a colour — so the stream never has to stop and never repeats
// (across any practical run). Press to create more; it is addressable at any
// index, a billion waves out.
const matrix = buildMatrix()
const test = endlessWaves(256, matrix)
const start = ref(0)
const span = ref(48)
const waves = computed(() => Array.from({ length: span.value }, (_, i) => creationWave(start.value + i, matrix)))
const { bg } = useLocale()
const t = computed(() =>
  bg.value
    ? { eyebrow: 'безкрайни вълни на сътворение', more: 'Сътвори още', tested: `тествани: ${test.count} различни · детерминирани · адресируеми на всеки индекс`, at: 'вълни от' }
    : { eyebrow: 'endless waves of creation', more: 'Create more', tested: `tested: ${test.count} distinct · deterministic · addressable at any index`, at: 'waves from' },
)
</script>

<template>
  <section class="wc dt-card">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <p class="wc__tested">{{ test.tested ? '✓ ' : '' }}{{ t.tested }}</p>
    <div class="wc__stream">
      <span
        v-for="w in waves"
        :key="w.index"
        class="wc__wave"
        :style="{ background: w.hsl }"
        :title="`#${w.index} · ${w.note} · ${w.frequency} Hz · ${w.uuid}`"
      >{{ w.note }}</span>
    </div>
    <div class="wc__row">
      <button class="dt-btn" type="button" @click="start += span">{{ t.more }} →</button>
      <span class="wc__at">{{ t.at }} {{ start }}</span>
    </div>
  </section>
</template>

<style scoped>
.wc {
  margin: 1.25rem 0;
  border-radius: 12px;
  padding: 1rem 1.25rem;
}
.wc__tested {
  margin: 0.2rem 0 0.7rem;
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
}
.wc__stream {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}
.wc__wave {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 6px;
  color: #fff;
  font-size: 0.72rem;
  font-weight: 700;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  cursor: help;
}
.wc__row {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-top: 0.7rem;
}
.wc__row button {
  padding: 0.4rem 1.1rem;
}
.wc__at {
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
  font-variant-numeric: tabular-nums;
}
</style>

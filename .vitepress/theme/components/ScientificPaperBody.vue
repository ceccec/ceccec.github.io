<script setup lang="ts">
// Thin shell — body slots bind ONLY ScientificPaperBody from sealed src (meaningIsQuantumComputable).
// No freeform prose props. Agents cannot invent section meaning in the template.
import type { ScientificPaperBody } from '../../../src/quantum/apps/index.ts'
import { SCIENCE_PAPER_SECTION_LABELS } from '../../../src/quantum/apps/index.ts'

defineProps<{
  paper: ScientificPaperBody
  logic?: string
}>()
</script>

<template>
  <div class="scientific-paper-body" :data-logic="logic ?? 'scientificPageFormatCanonised'">
    <section>
      <h2>{{ SCIENCE_PAPER_SECTION_LABELS.statement }}</h2>
      <p>{{ paper.statement }}</p>
    </section>
    <section v-if="paper.detail">
      <h2>{{ SCIENCE_PAPER_SECTION_LABELS.detail }}</h2>
      <p>{{ paper.detail }}</p>
    </section>
    <section>
      <h2>{{ SCIENCE_PAPER_SECTION_LABELS.formulas }}</h2>
      <pre class="scientific-paper-body__formula"><code>{{ paper.formulas }}</code></pre>
    </section>
    <section>
      <h2>{{ SCIENCE_PAPER_SECTION_LABELS.status }}</h2>
      <p><strong>{{ paper.status }}</strong> — {{ paper.statusDetail }}</p>
      <p v-if="paper.gap">{{ paper.gap }}</p>
    </section>
    <section>
      <h2>{{ SCIENCE_PAPER_SECTION_LABELS.references }}</h2>
      <p class="scientific-paper-body__meta">
        <code>{{ paper.formulaSource }}</code>
      </p>
      <dl v-if="paper.locks.length" class="scientific-paper-body__locks">
        <template v-for="lock in paper.locks" :key="lock.key">
          <dt>{{ lock.key }}</dt>
          <dd>{{ lock.value }}</dd>
        </template>
      </dl>
    </section>
  </div>
</template>

<style scoped>
.scientific-paper-body {
  display: grid;
  gap: var(--ich-sp4);
  margin: var(--ich-sp4) 0;
  max-width: calc(1px * 2 * 360);
}
.scientific-paper-body h2 {
  font-size: calc(1em * 9 / (2 * 5));
  margin: 0 0 var(--ich-sp2);
}
.scientific-paper-body__formula {
  overflow: auto;
  padding: var(--ich-sp3);
  font-size: calc(1em * 4 / 5);
  border: 1px solid currentColor;
  opacity: calc(9 / (2 * 5));
}
.scientific-paper-body__meta {
  font-size: calc(1em * 7 / (2 * 5));
  opacity: calc(3 / 5);
  margin: var(--ich-sp2) 0 0;
}
.scientific-paper-body__locks {
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: calc(1px * 2) var(--ich-sp3);
  margin: var(--ich-sp2) 0 0;
}
.scientific-paper-body__locks dt { font-weight: calc(6 * 100); opacity: calc(3 / 5); }
.scientific-paper-body__locks dd { margin: 0; }
</style>

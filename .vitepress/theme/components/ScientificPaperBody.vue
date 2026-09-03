<script setup lang="ts">
// Thin shell — body slots bind ONLY ScientificPaperBody from sealed src (meaningIsQuantumComputable).
// No freeform prose props. Agents cannot invent section meaning in the template.
import { computed } from 'vue'
import type { ScientificPaperBody } from '../../render'
import { SCIENCE_PAPER_SECTION_LABELS, paperFormulaParts } from '../../render'
import { useSiteLocale } from '../../lib/mounts'

// autotranslate section labels + prose (statement/detail/status/gap) via t(); formulas, source, receipt-locks
// stay as technical identifiers (not transliterated). bg glossary-bounded · gla transliterated · en unchanged.
const { t } = useSiteLocale()

// The parts are COMPUTED in src (paperFormulaParts); the shell only chooses typography for each kind.
const props = defineProps<{
  paper: ScientificPaperBody
  logic?: string
}>()

// The parts are COMPUTED in src (paperFormulaParts); the shell only chooses typography per kind.
const formulaParts = computed(() => paperFormulaParts(props.paper.formulas))
</script>

<template>
  <div class="scientific-paper-body" :data-logic="logic ?? 'scientificPageFormatCanonised'">
    <section>
      <h2>{{ t(SCIENCE_PAPER_SECTION_LABELS.statement) }}</h2>
      <p>{{ t(paper.statement) }}</p>
    </section>
    <section v-if="paper.detail">
      <h2>{{ t(SCIENCE_PAPER_SECTION_LABELS.detail) }}</h2>
      <p>{{ t(paper.detail) }}</p>
    </section>
    <section>
      <h2>{{ t(SCIENCE_PAPER_SECTION_LABELS.formulas) }}</h2>
      <!-- A theorem environment, not a code listing: bold run-in head, italic statement, hanging ∎. -->
      <div class="scientific-paper-body__theorem" role="doc-abstract">
        <p
          v-for="(part, i) in formulaParts"
          :key="i"
          class="scientific-paper-body__line"
          :class="`scientific-paper-body__line--${part.kind}`"
        >
          <span v-if="part.head" class="scientific-paper-body__head">{{ part.head }}</span>
          <span class="scientific-paper-body__body">{{ part.body }}</span>
          <span v-if="part.qed" class="scientific-paper-body__qed" aria-label="end of proof">∎</span>
        </p>
      </div>
    </section>
    <section>
      <h2>{{ t(SCIENCE_PAPER_SECTION_LABELS.status) }}</h2>
      <p><strong>{{ t(paper.status) }}</strong> — {{ t(paper.statusDetail) }}</p>
      <p v-if="paper.gap">{{ t(paper.gap) }}</p>
    </section>
    <section>
      <h2>{{ t(SCIENCE_PAPER_SECTION_LABELS.references) }}</h2>
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
/* A THEOREM ENVIRONMENT, SET FOR PAPER. Serif body, run-in heads, italic statement, hanging ∎ —
   the conventions a printed theorem uses. No monospace: that is the typography of a listing. */
.scientific-paper-body__theorem {
  font-family: var(--vp-font-family-serif, Georgia, 'Times New Roman', serif);
  padding: var(--ich-sp3) 0;
  border-top: 1px solid currentColor;
  border-bottom: 1px solid currentColor;
  max-width: 34em;              /* a printed measure — ~66 characters */
}
.scientific-paper-body__line {
  margin: 0 0 var(--ich-sp2);
  line-height: calc(8 / 5);
  text-align: justify;
  hyphens: auto;
}
.scientific-paper-body__line:last-child { margin-bottom: 0; }
.scientific-paper-body__head {
  font-weight: bold;
  margin-right: calc(1em / 2);
}
.scientific-paper-body__line--theorem .scientific-paper-body__body { font-style: italic; }
.scientific-paper-body__line--proof .scientific-paper-body__head { font-style: italic; font-weight: normal; }
.scientific-paper-body__qed {
  float: right;
  margin-left: calc(1em / 2);
}

/* PRINT: the page IS the paper. Keep a theorem whole across a page break, drop the chrome,
   set black on white, and let the ∎ sit where the last line ends. */
@media print {
  .scientific-paper-body__theorem {
    break-inside: avoid;
    page-break-inside: avoid;
    border-color: #000;
    color: #000;
    max-width: none;
  }
  .scientific-paper-body__line { orphans: 3; widows: 3; }
  .scientific-paper-body h2 { break-after: avoid; page-break-after: avoid; }
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

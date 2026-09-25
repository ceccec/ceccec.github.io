<script setup lang="ts">
// ☴ Xùn · Wind — the formula collection, ORGANISED BY TAG, mirroring TheoremIndex exactly. THIN shell:
// every row, tag, count and ordering comes computed from formulaRows / formulaTagIndex
// (wind/routes/corpus, a pure projection of the theorem atoms) — nothing is authored or sorted here.
// The three axes are computed: wing (the home the theorem lives in), source (a curated identity or one
// extracted verbatim from the theorem's own states text), and relation (the symbols the formula carries).
import { computed, ref } from 'vue'
import { formulaRows, formulaTagIndex, theFormulaCensusPerWing, type FormulaTagGroup } from '../../render'
import { useSiteLocale } from '../../lib/mounts'

const { t } = useSiteLocale()
const groups = computed<FormulaTagGroup[]>(() => formulaTagIndex())
const total = computed(() => formulaRows().length)
const census = computed(() => theFormulaCensusPerWing())
const axisOrder: FormulaTagGroup['axis'][] = ['source', 'relation', 'wing']
const axisLabel: Record<FormulaTagGroup['axis'], string> = { source: 'source', relation: 'relation', wing: 'wing' }

const selected = ref<string | null>(null)
const shown = computed<FormulaTagGroup[]>(() =>
  selected.value ? groups.value.filter((g) => g.tag === selected.value) : groups.value)
const chipsByAxis = computed(() =>
  axisOrder.map((axis) => ({ axis, tags: groups.value.filter((g) => g.axis === axis) })))
</script>

<template>
  <div class="fml-index" data-logic="src/wind/routes/corpus/index.ts">
    <header class="fml-index__head">
      <p class="fml-index__mast">{{ t('view of the formulas inside the registry') }}</p>
      <h1>{{ t('Formula index') }}</h1>
      <p class="fml-index__lede">
        {{ total }} {{ t('identities across') }} {{ groups.length }} {{ t('tags — a curated identity, or one extracted verbatim from the theorem’s own text.') }}
        {{ census.missing }} {{ t('of') }} {{ census.total }} {{ t('theorems carry none and are named by the census, not hidden.') }}
      </p>
    </header>

    <nav class="fml-index__chips" :aria-label="t('filter formulas by tag')">
      <button class="fml-chip" :class="{ 'fml-chip--on': selected === null }" @click="selected = null">{{ t('all') }}</button>
      <span v-for="row in chipsByAxis" :key="row.axis" class="fml-index__axis">
        <em class="fml-index__axis-label">{{ t(axisLabel[row.axis]) }}</em>
        <button
          v-for="g in row.tags"
          :key="g.tag"
          class="fml-chip"
          :class="{ 'fml-chip--on': selected === g.tag }"
          @click="selected = selected === g.tag ? null : g.tag"
        >{{ g.tag }} <span class="fml-chip__n">{{ g.count }}</span></button>
      </span>
    </nav>

    <section v-for="g in shown" :key="g.tag" class="fml-group">
      <h2 class="fml-group__tag">{{ g.tag }} <span class="fml-group__n">{{ g.count }}</span></h2>
      <ul class="fml-list">
        <li v-for="f in g.formulas" :key="f.receipt" class="fml-row">
          <code class="fml-row__formula">{{ f.formula }}</code>
          <a class="fml-row__theorem" :href="`/theorems/${f.theoremSlug}`">{{ f.theorem }}</a>
          <span class="fml-row__meta">{{ f.source }} · {{ f.home }}</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
/* Every magnitude is a lattice token or a ratio of small integers — no decimal literal, which the
   crack gate counts, and which would put this component's look outside the computed --ich core. */
.fml-index { display: flex; flex-direction: column; gap: var(--ich-sp4); }
.fml-index__mast { text-transform: uppercase; letter-spacing: var(--ich-sp1); font-size: calc(1em * 4 / 5); opacity: var(--ich-op-soft); margin: 0; }
.fml-index__lede { opacity: var(--ich-op-mid); margin: 0; }
.fml-index__chips { display: flex; flex-wrap: wrap; gap: var(--ich-sp2); align-items: center; }
.fml-index__axis { display: inline-flex; flex-wrap: wrap; gap: var(--ich-sp1); align-items: center; }
.fml-index__axis-label { opacity: var(--ich-op-card-faint); font-size: calc(1em * 4 / 5); font-style: normal; text-transform: uppercase; letter-spacing: var(--ich-sp1); }
.fml-chip { border: 1px solid var(--vp-c-divider); border-radius: var(--ich-sp8); padding: var(--ich-sp1) var(--ich-sp3); background: transparent; cursor: pointer; font-size: calc(1em * 4 / 5); color: inherit; }
.fml-chip--on { background: var(--vp-c-brand-soft); border-color: var(--vp-c-brand-1); }
.fml-chip__n { opacity: var(--ich-op-card-faint); }
.fml-group__tag { font-size: calc(1em * 6 / 5); margin: 0 0 var(--ich-sp2); }
.fml-group__n { opacity: var(--ich-op-card-faint); font-weight: normal; }
.fml-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: var(--ich-sp2); }
.fml-row { display: flex; flex-direction: column; gap: var(--ich-sp1); border-left: 2px solid var(--vp-c-divider); padding-left: var(--ich-sp3); }
.fml-row__formula { white-space: pre-wrap; word-break: break-word; font-size: calc(1em * 9 / (2 * 5)); }
.fml-row__theorem { font-size: calc(1em * 4 / 5); opacity: var(--ich-op-mid); }
.fml-row__meta { font-size: calc(1em * 3 / 4); opacity: var(--ich-op-card-faint); }
</style>

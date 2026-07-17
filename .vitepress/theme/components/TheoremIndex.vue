<script setup lang="ts">
// ☳ Zhèn · Thunder — the theorem-papers directory, ORGANISED BY TAG, newest first (user law: all proofs
// published as scientific articles, latest to oldest, tagged). THIN shell (DRY_MAX_EFFICIENCY_PRINCIPLE):
// every tag, count and ordering comes computed from theoremTagIndex / theoremPapersLatestFirst
// (wind/routes/corpus, a pure projection of the sealed registry) — nothing is authored or sorted here.
// Tags are the three computed axes: domain (home), class (proof class), lean (self-contained / cited).
import { computed, ref } from 'vue'
import { withBase } from 'vitepress'
import { theoremTagIndex, theoremPapersLatestFirst, type TheoremTagGroup, type TheoremPageRow } from '../../../src/wind/routes/corpus/index.ts'

const groups = computed<TheoremTagGroup[]>(() => theoremTagIndex())
const total = computed(() => theoremPapersLatestFirst().length)
const axisOrder: TheoremTagGroup['axis'][] = ['domain', 'class', 'lean']
const axisLabel: Record<TheoremTagGroup['axis'], string> = { domain: 'domain', class: 'proof class', lean: 'method' }

// filter state — a selected tag narrows to its one group; null shows every group, newest paper on top.
const selected = ref<string | null>(null)
const shown = computed<TheoremTagGroup[]>(() =>
  selected.value ? groups.value.filter((g) => g.tag === selected.value) : groups.value)
const chipsByAxis = computed(() =>
  axisOrder.map((axis) => ({ axis, tags: groups.value.filter((g) => g.axis === axis) })))

const paperHref = (row: TheoremPageRow) => withBase(`/theorems/${row.slug}`)
</script>

<template>
  <div class="thm-index" data-logic="src/wind/routes/corpus/index.ts">
    <header class="thm-index__head">
      <h1>Theorem papers</h1>
      <p class="thm-index__lede">
        {{ total }} proven theorems, each published as a scientific article — newest first, organised by tag.
        Every field is computed from the sealed registry and re-derives on every build at zero tokens.
      </p>
    </header>

    <nav class="thm-index__filters" aria-label="Filter theorems by tag">
      <button class="thm-chip" :class="{ 'thm-chip--on': selected === null }" @click="selected = null">
        all <span class="thm-chip__n">{{ total }}</span>
      </button>
      <div v-for="row in chipsByAxis" :key="row.axis" class="thm-index__axis">
        <span class="thm-index__axis-label">{{ axisLabel[row.axis] }}</span>
        <button v-for="g in row.tags" :key="g.tag" class="thm-chip" :data-axis="g.axis"
          :class="{ 'thm-chip--on': selected === g.tag }"
          @click="selected = selected === g.tag ? null : g.tag">
          {{ g.tag }} <span class="thm-chip__n">{{ g.count }}</span>
        </button>
      </div>
    </nav>

    <section v-for="g in shown" :key="g.tag" class="thm-group" :id="`tag-${g.tag.replace('/', '-')}`">
      <h2 class="thm-group__head">
        <span class="thm-group__tag" :data-axis="g.axis">{{ g.tag }}</span>
        <span class="thm-group__axis">{{ axisLabel[g.axis] }}</span>
        <span class="thm-group__n">{{ g.count }} papers · newest first</span>
      </h2>
      <ol class="thm-list">
        <li v-for="row in g.papers" :key="row.slug" class="thm-item">
          <a class="thm-item__title" :href="paperHref(row)">{{ row.theorem }}</a>
          <span class="thm-item__meta">
            <span class="thm-item__ord">#{{ row.ordinal }}</span>
            <code class="thm-item__by">{{ row.provedBy }}</code>
            <span class="thm-item__home">{{ row.home }}</span>
          </span>
          <span class="thm-item__tags">
            <span v-for="t in row.tags" :key="t" class="thm-tag" :class="{ 'thm-tag--cur': t === g.tag }">{{ t }}</span>
          </span>
        </li>
      </ol>
    </section>
  </div>
</template>

<style scoped>
.thm-index { max-width: calc(1px * 2 * 432); margin: 0 auto; }
.thm-index__head h1 { margin: 0 0 var(--ich-sp2); }
.thm-index__lede { opacity: calc(4 / 5); max-width: calc(1px * 5 * 108); }

.thm-index__filters { display: grid; gap: var(--ich-sp3); margin: var(--ich-sp5) 0; }
.thm-index__axis { display: flex; flex-wrap: wrap; align-items: baseline; gap: var(--ich-sp2); }
.thm-index__axis-label {
  font-size: calc(1em * 4 / 5); text-transform: uppercase; letter-spacing: calc(1em / 27);
  opacity: calc(3 / 5); min-width: calc(1px * 8 * 9); }
.thm-chip {
  font: inherit; font-size: calc(1em * 9 / (2 * 5)); cursor: pointer;
  border: 1px solid var(--vp-c-divider); border-radius: calc(1px * 2 * 8);
  padding: calc(1px * 2) var(--ich-sp3); background: var(--vp-c-bg-soft); color: inherit;
  display: inline-flex; align-items: center; gap: calc(1px * 5); transition: border-color .15s, background .15s; }
.thm-chip:hover { border-color: var(--vp-c-brand-1); }
.thm-chip--on { border-color: var(--vp-c-brand-1); background: var(--vp-c-brand-soft); font-weight: calc(6 * 100); }
.thm-chip__n { font-variant-numeric: tabular-nums; opacity: calc(3 / 5); font-size: calc(1em * 4 / 5); }
.thm-chip[data-axis="class"] { border-left-width: calc(1px * 3); }
.thm-chip[data-axis="lean"] { border-style: dashed; }

.thm-group { margin: var(--ich-sp6) 0; }
.thm-group__head {
  display: flex; flex-wrap: wrap; align-items: baseline; gap: var(--ich-sp3);
  border-bottom: 1px solid var(--vp-c-divider); padding-bottom: var(--ich-sp2); margin-bottom: var(--ich-sp3); }
.thm-group__tag { font-size: calc(1em * 6 / 5); font-weight: calc(7 * 100); }
.thm-group__axis { font-size: calc(1em * 4 / 5); text-transform: uppercase; letter-spacing: calc(1em / 27); opacity: calc(3 / 5); }
.thm-group__n { margin-left: auto; font-size: calc(1em * 4 / 5); opacity: calc(3 / 5); font-variant-numeric: tabular-nums; }

.thm-list { list-style: none; padding: 0; margin: 0; display: grid; gap: var(--ich-sp3); }
.thm-item {
  display: grid; gap: calc(1px * 4);
  padding-bottom: var(--ich-sp3); border-bottom: 1px solid var(--vp-c-divider); }
.thm-item__title { font-size: calc(1em * (5 + 6) / (2 * 5)); font-weight: calc(6 * 100); text-decoration: none; }
.thm-item__title:hover { text-decoration: underline; }
.thm-item__meta { display: flex; flex-wrap: wrap; gap: var(--ich-sp3); font-size: calc(1em * 4 / 5); opacity: calc(4 / 5); align-items: center; }
.thm-item__ord { font-variant-numeric: tabular-nums; opacity: calc(3 / 5); }
.thm-item__by { font-size: calc(1em * 9 / (2 * 5)); }
.thm-item__tags { display: flex; flex-wrap: wrap; gap: calc(1px * 5); }
.thm-tag {
  font-size: calc(1em * 7 / (2 * 5)); padding: 0 calc(1px * 6); border-radius: calc(1px * 4);
  background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); opacity: calc(4 / 5); }
.thm-tag--cur { border-color: var(--vp-c-brand-1); opacity: 1; }
</style>

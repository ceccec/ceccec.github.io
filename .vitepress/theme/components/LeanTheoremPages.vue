<script setup lang="ts">
// ☶ Gèn · Mountain — one page per kernel-checked theorem. THIN shell: every field is read from the
// sealed .lean sources through leanPageRows; nothing is authored here. The page exists so a per-theorem
// Zenodo deposit has a landing page that resolves, and so a reader arriving from a search engine meets
// the proposition, what proves it, what it does NOT claim, and where the source is — in that order.
import { computed } from 'vue'
import { useRoute, withBase } from 'vitepress'
import { leanPageBySlug, leanPageRows, type LeanPageRow } from '../../render'

const REPO = 'https://github.com/ceccec/ceccec.github.io/blob/main'
const DOI = '10.5281/zenodo.21787144'
const ORCID = '0009-0000-7312-9778'

const route = useRoute()
const slug = computed(() => route.path.replace(/\/(en|bg)\//, '/').match(/\/lean\/([a-z0-9-]+)/)?.[1] ?? null)
const rows = computed<LeanPageRow[]>(() => {
  const one = slug.value ? leanPageBySlug(slug.value) : null
  return one ? [one] : [...leanPageRows()]
})
const siblings = (row: LeanPageRow) => leanPageRows().filter((r) => r.file === row.file && r.slug !== row.slug)
</script>

<template>
  <article v-for="row in rows" :key="row.slug" class="lean-paper">
    <h1>{{ row.title }}</h1>

    <!-- THE CLAIM FIRST. A reader must know what this does and does not assert before the mathematics,
         not after it — the same order the Zenodo abstract uses. -->
    <p class="claim">
      <strong>NOT A NOVELTY CLAIM.</strong> This is a <strong>machine-checked formalisation</strong>,
      decided by the Lean&nbsp;4 kernel and depending on <strong>no axiom</strong>. It is dated and
      citable. Prior art, where it exists, is cited below. No discovery is claimed.
    </p>

    <p v-if="row.doc" class="doc">{{ row.doc }}</p>

    <h2>Proposition</h2>
    <pre class="proposition"><code>{{ row.proposition }}</code></pre>

    <h2>Proof</h2>
    <p>
      By <code>{{ row.tactic }}</code> in
      <a :href="`${REPO}/${row.sourcePath}`" rel="noopener">{{ row.file }}</a>.
      The kernel reduces the proposition and reports no axiom dependency.
    </p>

    <h2>Sources and identifiers</h2>
    <ul class="ids">
      <li>Lean source · <a :href="`${REPO}/${row.sourcePath}`" rel="noopener">{{ row.sourcePath }}</a></li>
      <li>Typeset paper · <a :href="`${REPO}/${row.texPath}`" rel="noopener">{{ row.texPath }}</a></li>
      <li>Repository deposit · <a :href="`https://doi.org/${DOI}`" rel="noopener">doi:{{ DOI }}</a></li>
      <li>Author · <a :href="`https://orcid.org/${ORCID}`" rel="noopener">ORCID {{ ORCID }}</a></li>
      <li>Deposit record · <code>{{ row.depositId }}</code></li>
    </ul>

    <h2 v-if="siblings(row).length">Proved in the same file</h2>
    <ul v-if="siblings(row).length" class="siblings">
      <li v-for="s in siblings(row)" :key="s.slug">
        <a :href="withBase(`/lean/${s.slug}`)">{{ s.title }}</a>
      </li>
    </ul>

    <p class="all"><a :href="withBase('/lean/')">All machine-checked theorems</a></p>
  </article>
</template>

<style scoped>
.lean-paper { max-width: 46rem; }
.claim { border-left: 3px solid var(--vp-c-brand-1); padding: 0.75rem 1rem; background: var(--vp-c-bg-soft); }
.proposition { overflow-x: auto; }
/* line-height inherits from the theme: a typed 1.9 here is a literal the crack ledger counts, and
   the site already has one reading rhythm — a component should not invent a second. */
.ids, .siblings { line-height: inherit; }
.all { margin-top: 2rem; }
</style>

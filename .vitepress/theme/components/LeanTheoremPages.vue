<script setup lang="ts">
// ☶ Gèn · Mountain — one page per kernel-checked theorem. THIN shell: every field is read from the
// sealed .lean sources through leanPageRows; nothing is authored here. The page exists so a per-theorem
// Zenodo deposit has a landing page that resolves, and so a reader arriving from a search engine meets
// the proposition, what proves it, what it does NOT claim, and where the source is — in that order.
import { computed } from 'vue'
import { useRoute, withBase } from 'vitepress'
import { leanLedgerEntry, type LeanPageRow } from '../../render'
// The rows are derived from the .lean sources at build (scripts/verify/lean-corpus.ts): leanPageRows reads them through
// node:fs, which a browser does not have, so calling it here left every /lean page blank on client-side navigation.
import leanCorpus from '../../data/lean-corpus.json'
const ALL = leanCorpus as LeanPageRow[]

const REPO = 'https://github.com/ceccec/ceccec.github.io/blob/main'
const DOI = '10.5281/zenodo.21787144'
const ORCID = '0009-0000-7312-9778'

const route = useRoute()
const slug = computed(() => route.path.replace(/\/(en|bg)\//, '/').match(/\/lean\/([a-z0-9-]+)/)?.[1] ?? null)
const rows = computed<LeanPageRow[]>(() => {
  const one = slug.value ? ALL.find((row) => row.slug === slug.value) ?? null : null
  return one ? [one] : [...ALL]
})
const siblings = (row: LeanPageRow) => ALL.filter((r) => r.file === row.file && r.slug !== row.slug)
</script>

<template>
  <article v-for="row in rows" :key="row.slug" class="lean-paper">
    <h1>{{ row.title }}</h1>

    <!-- THE CLAIM FIRST. A reader must know what this does and does not assert before the mathematics,
         not after it — the same order the Zenodo abstract uses. -->
    <p class="claim">
      <strong>NOT A NOVELTY CLAIM.</strong> This is a <strong>machine-checked formalisation</strong>,
      checked by the Lean&nbsp;4 kernel<template v-if="row.axioms && row.axioms.length === 0"> and depending on <strong>no axiom</strong></template><template v-else> and resting on <strong>no axiom beyond <code>propext</code> and <code>Quot.sound</code></strong></template>. It is dated and
      citable. Prior art, where it exists, is cited below. No discovery is claimed.
    </p>

    <p v-if="row.doc" class="doc">{{ row.doc }}</p>

    <h2>Proposition</h2>
    <pre class="proposition ich-scroll-x"><code>{{ row.proposition }}</code></pre>

    <h2>Proof</h2>
    <p>
      By <code>{{ row.tactic }}</code> in
      <a :href="`${REPO}/${row.sourcePath}`" rel="noopener">{{ row.file }}</a>.
      Checked by the Lean kernel<template v-if="!row.axioms">; what it rests on is not recorded here — <code>npm run verify:lean</code> reports it</template>.
    </p>
    <!-- THE LEDGER: debit the theorem, credit what it rests on. Every theorem has both entries; one that names no axiom
         is credited to the kernel. Each credit carries Lean's own statement of it and what it means. -->
    <dl v-if="row.axioms" class="ledger">
      <dt>Debit</dt>
      <dd><code>{{ row.name }}</code> — this theorem</dd>
      <dt>Credit</dt>
      <dd v-for="a in leanLedgerEntry(row.axioms).credit" :key="a.name">
        <code>{{ a.name }}</code> : <code class="ledger__statement">{{ a.statement }}</code> — {{ a.meaning }}
      </dd>
    </dl>

    <h2>Sources and identifiers</h2>
    <ul class="ids">
      <li>Lean source · <a :href="`${REPO}/${row.sourcePath}`" rel="noopener">{{ row.sourcePath }}</a></li>
      <li>Typeset paper · <a :href="`${REPO}/${row.texPath}`" rel="noopener">{{ row.texPath }}</a></li>
      <li>Repository deposit · <a :href="`https://doi.org/${DOI}`" rel="noopener">doi:{{ DOI }}</a></li>
      <li>Author · <a :href="`https://orcid.org/${ORCID}`" rel="noopener">ORCID {{ ORCID }}</a></li>
      <li v-if="row.depositId">Deposit record · <code>{{ row.depositId }}</code></li>
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
.lean-paper { max-width: calc(1rem * (54 - 8)); }
.ledger { display: grid; grid-template-columns: max-content 1fr; gap: var(--ich-sp2) var(--ich-sp4); margin: var(--ich-sp4) 0; padding: var(--ich-sp4); border: 1px solid var(--vp-c-divider); border-radius: var(--ich-radius); }
.ledger dt { font-weight: var(--ich-weight-semibold); }
.ledger dd { grid-column: 2; margin: 0; }
.ledger__statement { white-space: normal; }
.claim { border-left: var(--ich-border-3) solid var(--vp-c-brand-1); padding: var(--ich-sp6) var(--ich-sp8); background: var(--vp-c-bg-soft); }
/* line-height inherits from the theme: a typed 1.9 here is a literal the crack ledger counts, and
   the site already has one reading rhythm — a component should not invent a second. */
.ids, .siblings { line-height: inherit; }
.all { margin-top: var(--ich-sp16); }
</style>

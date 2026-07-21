<script setup lang="ts">
// Domain-proof papers — canonical sections (statement · explanation · formulas · status).
// Clay Prize Rules / Clay hub provenance only when isClayChallenge (millennium + clay-challenges-computable).
// All fields from domainProofCatalog / clayMillenniumPrizeRulesMapping (sealed src).
// Internal nav: VitePress API only (useRoute · withBase) — standing rule linksUseOnlyVitePressApi.
// UI↔prose: one statement owns meaning — H1 = title; PaperFrame owns abstract; no section-1 title echo.
import { computed } from 'vue'
import { useRoute, withBase } from 'vitepress'
import {
  domainProofPageBySlug,
  domainProofPageRows,
  clayMillenniumPrizeRulesMapping,
  type DomainProofCatalogRow,
} from '../../../src/wind/research/index.ts'

const route = useRoute()
const slugFromRoute = computed(() => {
  const match = route.path.replace(/\/(en|bg)\//, '/').match(/\/proofs\/([a-z0-9-]+)/)
  return match?.[1] ?? null
})
const rows = computed<DomainProofCatalogRow[]>(() => {
  const one = slugFromRoute.value ? domainProofPageBySlug(slugFromRoute.value) : null
  return one ? [one] : domainProofPageRows()
})
const rules = computed(() => clayMillenniumPrizeRulesMapping())
const isHub = computed(() => !slugFromRoute.value)
/** Clay Prize Rules / Clay hub links — only for Millennium challenge rows (not science/honesty apparatus). */
const isClayChallenge = (row: DomainProofCatalogRow) =>
  row.kind === 'millennium' || row.id === 'clay-challenges-computable'

/** VitePress withBase — sole internal href emitter on this surface. */
const vpHref = (path: string) => withBase(path.startsWith('/') ? path : `/${path}`)
</script>

<template>
  <div class="proofs" data-logic="src/wind/research/index.ts#domainProofCatalog">
    <header v-if="isHub" class="proofs__hub">
      <p class="proofs__mast">ceccec · catalog</p>
      <!-- page H1 from frontmatter title owns "Domain proofs" (uiProseDuplicationRemoved) -->
      <p class="proofs__lede">
        Canonical sections (statement · explanation · formulas · status) for sealed domains.
        <strong>Clay</strong> marks only the seven Millennium Prize challenges (computable paths ≠ CMI Prize solved).
        Not a second theorem hub — the registry is
        <a :href="vpHref('/frontiers')">/frontiers</a>.
      </p>
      <p class="proofs__provenance">
        Clay Millennium (challenges only):
        <a :href="rules.problemsUrl" rel="noopener noreferrer" target="_blank">Millennium Problems</a>
        ·
        <a :href="rules.rulesPdfUrl" rel="noopener noreferrer" target="_blank">Prize Rules PDF</a>
        (approved {{ rules.rulesApproved }})
      </p>
      <ul class="proofs__index">
        <li v-for="row in rows" :key="row.id">
          <a :href="vpHref(row.route)">{{ row.title }}</a>
          <code>{{ row.status }}</code>
          <span>{{ row.kind }}</span>
          <code v-if="isClayChallenge(row)">Clay challenge</code>
        </li>
      </ul>
    </header>

    <article
      v-for="row in rows"
      v-show="!isHub"
      :key="row.id"
      :id="`domain-proof-${row.slug}`"
      class="domain-proof"
    >
      <header class="domain-proof__masthead">
        <span>ceccec</span>
        <span class="domain-proof__id">proofs/{{ row.slug }}</span>
      </header>

      <h1 class="domain-proof__title">{{ row.title }}</h1>
      <p class="domain-proof__byline">
        {{ row.fold }} · {{ row.pair }} · status {{ row.status }}
      </p>

      <section>
        <h2>1 · Precise statement</h2>
        <p>{{ row.officialStatement }}</p>
      </section>

      <section>
        <h2>2 · Detailed explanation</h2>
        <p>{{ row.detailedExplanation }}</p>
      </section>

      <section>
        <h2>3 · Formulas</h2>
        <pre class="domain-proof__formula"><code>{{ row.formula }}</code></pre>
        <p class="domain-proof__meta">Source fold: <code>{{ row.formulaSource }}</code> — sealed expressions only; not invented for UI.</p>
      </section>

      <section>
        <h2>4 · Status / what is proved at call time</h2>
        <p><strong>{{ row.status }}</strong> — {{ row.statusDetail }}</p>
        <p v-if="row.gap">Gap: {{ row.gap }}</p>
        <dl class="domain-proof__locks">
          <dt>claySolvedByThisFold</dt><dd>{{ row.claySolvedByThisFold }}</dd>
          <dt>physicalFtlClaim</dt><dd>{{ row.physicalFtlClaim }}</dd>
          <template v-if="isClayChallenge(row)">
            <dt>qualifiesAsProposedSolutionUnderClayRules (§5)</dt><dd>{{ row.qualifiesAsProposedSolutionUnderClayRules }}</dd>
            <dt>publishedInQualifyingOutlet (§6)</dt><dd>{{ row.publishedInQualifyingOutlet }}</dd>
          </template>
          <template v-else>
            <dt>millenniumChallenge</dt><dd>false</dd>
          </template>
        </dl>
      </section>

      <section v-if="isClayChallenge(row)">
        <h2>5 · Publication &amp; refereeing norms (Clay Prize Rules)</h2>
        <p>
          Under the
          <a :href="rules.rulesPdfUrl" rel="noopener noreferrer" target="_blank">CMI Millennium Prize Rules</a>
          ({{ rules.rulesApproved }}), a Prize requires publication in a Qualifying Outlet, ≥2 years of community
          examination, general acceptance, and CMI determination that the official Problem description is answered
          (§4–§7). This page’s sealed receipts are local recompute — not a Qualifying Outlet and not a Proposed Solution.
          claySolvedByThisFold={{ row.claySolvedByThisFold }}.
        </p>
        <ul class="domain-proof__rules">
          <li v-for="c in rules.clauses.filter((x) => row.ruleClauses.includes(x.facet))" :key="c.facet">
            <strong>{{ c.clause }}</strong>
            → {{ c.pageSection }}
            <span class="domain-proof__meta">{{ c.ceccecHonesty }}</span>
          </li>
        </ul>
      </section>
      <section v-else>
        <h2>5 · Honesty / publication status</h2>
        <p>
          Canonical sealed apparatus — related science or structural honesty, not a Clay Millennium challenge.
          Local recompute only; claySolvedByThisFold={{ row.claySolvedByThisFold }}.
        </p>
      </section>

      <section>
        <h2>6 · Trinity wiring</h2>
        <dl class="domain-proof__locks">
          <dt>forward</dt><dd><code>{{ row.trinity.forward }}</code></dd>
          <dt>inverse</dt><dd><code>{{ row.trinity.inverse }}</code></dd>
          <dt>reverse</dt><dd><code>{{ row.trinity.reverse }}</code></dd>
        </dl>
      </section>

      <section>
        <h2>7 · CLI / agents.json</h2>
        <p><code>{{ row.cli }}</code> · pair <code>{{ row.pair }}</code></p>
        <p class="domain-proof__meta">Receipt <code>{{ row.receipt }}</code></p>
        <p v-if="isClayChallenge(row)">
          Official Clay hub:
          <a :href="rules.problemsUrl" rel="noopener noreferrer" target="_blank">{{ rules.problemsUrl }}</a>
        </p>
      </section>

      <p class="domain-proof__nav">
        <a :href="vpHref('/proofs')">← Domain proofs hub</a>
        ·
        <a :href="vpHref('/frontiers')">Theorem registry</a>
        ·
        <a :href="vpHref('/research')">Research</a>
      </p>
    </article>
  </div>
</template>

<style scoped>
.proofs { display: grid; gap: var(--ich-sp6); }
.proofs__hub { max-width: calc(1px * 2 * 360); margin: 0 auto; }
.proofs__mast,
.domain-proof__masthead {
  display: flex; justify-content: space-between; gap: var(--ich-sp4);
  font-size: calc(1em * 4 / 5); letter-spacing: calc(1em / 100);
  text-transform: uppercase; opacity: calc(7 / (2 * 5));
  border-bottom: 1px solid currentColor; padding-bottom: var(--ich-sp2);
}
.proofs__lede { max-width: 40rem; opacity: calc(4 / 5); }
.proofs__provenance { font-size: calc(1em * 7 / (2 * 5)); }
.proofs__index { list-style: none; padding: 0; margin: var(--ich-sp4) 0 0; display: grid; gap: var(--ich-sp3); }
.proofs__index li { display: flex; flex-wrap: wrap; gap: var(--ich-sp3); align-items: baseline; }
.proofs__index code { font-size: calc(1em * 7 / (2 * 5)); opacity: calc(4 / 5); }
.domain-proof {
  font-family: Georgia, 'Times New Roman', serif;
  line-height: calc(8 / 5);
  max-width: calc(1px * 2 * 360);
  margin: 0 auto;
}
.domain-proof__title { font-size: calc(1em * 2); line-height: calc(6 / 5); margin: var(--ich-sp4) 0 var(--ich-sp2); }
.domain-proof__byline { font-style: italic; opacity: calc(4 / 5); }
.domain-proof h2 { font-size: calc(1em * 6 / 5); margin: var(--ich-sp5) 0 var(--ich-sp2); }
.domain-proof__formula {
  white-space: pre-wrap; font-family: ui-monospace, Menlo, monospace;
  font-size: calc(1em * 9 / (2 * 5)); padding: var(--ich-sp4);
  border-left: calc(1px * 3) solid currentColor; overflow-x: auto;
}
.domain-proof__meta { font-size: calc(1em * 4 / 5); opacity: calc(3 / 5); }
.domain-proof__locks { display: grid; grid-template-columns: max-content 1fr; gap: calc(1px * 2) var(--ich-sp3); }
.domain-proof__locks dt { font-weight: calc(6 * 100); opacity: calc(3 / 5); }
.domain-proof__locks dd { margin: 0; }
.domain-proof__rules { list-style: none; padding: 0; display: grid; gap: var(--ich-sp3); }
.domain-proof__nav { margin-top: var(--ich-sp6); font-size: calc(1em * 4 / 5); }
</style>

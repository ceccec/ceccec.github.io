<script setup lang="ts">
// ☳ Zhèn · Thunder — dedicated theorem pages typeset as SCIENTIFIC PAPERS (user law: each page prints
// for class or court). THIN shell (DRY_MAX_EFFICIENCY_PRINCIPLE): every field — title, abstract, proof,
// classification, provenance, reproducibility, citation — comes computed from theoremPageRows
// (wind/routes/corpus, a pure projection of the sealed registry + theoremProvenance); the figure is the
// ONE ProofAnimation renderer. Print CSS turns the page into an A4 paper: serif, numbered sections,
// site chrome removed — what the browser shows is what the printer certifies.
import { computed, onMounted, ref } from 'vue'
import { useRoute, withBase } from 'vitepress'
import { theoremPageBySlug, theoremPageRows, type TheoremPageRow } from '../../../src/wind/routes/corpus/index.ts'
import type { ProofAnimationSpec } from '../../../src/thunder/waves'
import ProofAnimation from './ProofAnimation.vue'
import TheoremFigure from './TheoremFigure.vue'
import PageComputedGaps from './PageComputedGaps.vue'
import { theoremFigure } from '../../../src/wind/routes/corpus/index.ts'
import { useSiteLocale } from '../../lib/mounts'

// autotranslate headings + paper prose via t(); formulas, code, receipts stay technical. bg glossary-bounded ·
// gla transliterated · en unchanged. Locale from VitePress-native useSiteLocale (useData/route).
const { t } = useSiteLocale()
const route = useRoute()
const slugFromRoute = computed(() => {
  const match = route.path.replace(/\/(en|bg)\//, '/').match(/\/theorems\/([a-z0-9-]+)/)
  return match?.[1] ?? null
})
const rows = computed<TheoremPageRow[]>(() => {
  const one = slugFromRoute.value ? theoremPageBySlug(slugFromRoute.value) : null
  return one ? [one] : theoremPageRows()
})
const specOf = (row: TheoremPageRow) => row.spec as ProofAnimationSpec | undefined

// The source of the proof machine itself (user law: every card page exposes how all is achieved).
// Brace-matched into theorem-sources.json each cross wave; fetched once, shared by every paper.
const sources = ref<Record<string, { home: string; code: string }>>({})
onMounted(async () => {
  try {
    const res = await fetch('/theorem-sources.json')
    if (res.ok) sources.value = (await res.json()).sources ?? {}
  } catch { /* dev without artifact — the section hides itself */ }
})
const sourceOf = (row: TheoremPageRow) => sources.value[row.provedBy]
// tags link back to the organised index, scrolling to that tag's group (ids computed in TheoremIndex).
const tagHref = (tag: string) => withBase(`/theorems/#tag-${tag.replace('/', '-')}`)
// the computed graph for this theorem, if src exposes one (else no figure — never invented).
const figureOf = (row: TheoremPageRow) => theoremFigure(row.slug)
</script>

<template>
  <div class="theorem-papers" data-logic="src/wind/routes/corpus/index.ts">
    <article v-for="row in rows" :key="row.slug" :id="`theorem-${row.slug}`" class="theorem-paper">
      <header class="theorem-paper__masthead">
        <span>ceccec theorem registry · computed &amp; sealed</span>
        <span class="theorem-paper__id">theorems/{{ row.slug }}</span>
      </header>

      <figure class="theorem-paper__figure theorem-paper__hero">
        <ProofAnimation v-if="specOf(row)" :spec="specOf(row)!" :size="2 * 9 * 5 * 4" />
        <figcaption v-if="specOf(row)">
          {{ specOf(row)!.kind }}
          · φ⁻{{ specOf(row)!.ratePhi }}
          · hue {{ specOf(row)!.hueDigit }}
          · {{ specOf(row)!.points }}
        </figcaption>
      </figure>

      <h1 class="theorem-paper__title">{{ t(row.theorem) }}</h1>
      <p class="theorem-paper__byline">{{ row.provedBy }} · {{ row.home }} · {{ row.proofClass }}</p>
      <p class="theorem-paper__tags" aria-label="tags">
        <a v-for="tag in row.tags" :key="tag" class="theorem-paper__tag" :href="tagHref(tag)">{{ t(tag) }}</a>
      </p>

      <section class="theorem-paper__abstract">
        <h2>{{ t('Abstract') }}</h2>
        <p>{{ t(row.proof) }}</p>
      </section>

      <section v-if="figureOf(row)" class="theorem-paper__figure-block">
        <h2>{{ t('Figure — the proof, computed and plotted') }}</h2>
        <TheoremFigure :figure="figureOf(row)!" />
      </section>

      <section>
        <h2>1 · {{ t('Classification') }}</h2>
        <p>{{ t(row.classification) }}</p>
      </section>

      <section>
        <h2>2 · {{ t('Provenance') }}</h2>
        <p>{{ t(row.provenance) }}</p>
      </section>

      <section class="theorem-paper__ack">
        <h2>{{ t('Acknowledgment') }}</h2>
        <p>{{ t(row.acknowledgment.line) }}</p>
        <dl class="theorem-paper__ack-grid">
          <dt>{{ t('Prior art') }}</dt><dd>{{ t(row.acknowledgment.priorArt) }}</dd>
          <dt>{{ t('Novelty') }}</dt><dd>{{ t(row.acknowledgment.novelToHumanity ? 'a first proof, claimed only with a complete computation' : 'not new to humanity — a re-derivation (humanityNovel = false)') }}</dd>
          <dt>{{ t('Contribution') }}</dt><dd>{{ t(row.acknowledgment.contribution) }}</dd>
        </dl>
      </section>

      <section>
        <h2>3 · {{ t('Reproducibility') }}</h2>
        <p>{{ t(row.reproducibility) }}</p>
      </section>

      <section class="theorem-paper__formulas">
        <h2>4 · {{ t('Formulas') }}</h2>
        <pre class="theorem-paper__formula"><code>{{ row.formulas.join('\n') }}</code></pre>
        <p class="theorem-paper__source-home"><code>{{ row.formulaSource }}</code></p>
      </section>

      <section v-if="sourceOf(row)" class="theorem-paper__source">
        <h2>5 · {{ t('Code') }}</h2>
        <p class="theorem-paper__source-home">
          <code>{{ row.provedBy }}</code> · <code>{{ sourceOf(row)!.home }}/index.ts</code>
        </p>
        <pre class="theorem-paper__code"><code>{{ sourceOf(row)!.code }}</code></pre>
      </section>

      <footer class="theorem-paper__cite">
        <h2>{{ t('Cite as') }}</h2>
        <p>{{ t(row.citation) }}</p>
      </footer>

      <PageComputedGaps page-kind="theorem" />
    </article>
  </div>
</template>

<style scoped>
/* ── the paper, on screen and on A4 — serif body, justified measure, numbered sections ── */
.theorem-papers { display: grid; gap: var(--ich-sp6); }
.theorem-paper {
  font-family: Georgia, 'Times New Roman', serif;
  line-height: calc(8 / 5);
  max-width: calc(1px * 2 * 360);
  margin: 0 auto;
}
.theorem-paper__masthead {
  display: flex; justify-content: space-between; gap: var(--ich-sp4);
  font-size: calc(1em * 4 / 5); letter-spacing: calc(1em / 100);
  text-transform: uppercase; opacity: calc(7 / (2 * 5));
  border-bottom: 1px solid currentColor; padding-bottom: var(--ich-sp2);
}
.theorem-paper__id { font-variant-numeric: tabular-nums; }
.theorem-paper__title { font-size: calc(1em * 2); line-height: calc(6 / 5); margin: var(--ich-sp4) 0 var(--ich-sp2); }
.theorem-paper__byline { font-style: italic; opacity: calc(4 / 5); margin: 0 0 var(--ich-sp2); }
.theorem-paper__tags { display: flex; flex-wrap: wrap; gap: calc(1px * 6); margin: 0 0 var(--ich-sp4); }
.theorem-paper__tag {
  font-family: ui-monospace, Menlo, monospace; font-size: calc(1em * 7 / (2 * 5)); text-decoration: none;
  padding: 0 calc(1px * 6); border: 1px solid currentColor; border-radius: calc(1px * 4); opacity: calc(4 / 5); }
.theorem-paper__tag:hover { opacity: 1; }
.theorem-paper__ack-grid { display: grid; grid-template-columns: max-content 1fr; gap: calc(1px * 2) var(--ich-sp3); margin: var(--ich-sp2) 0 0; }
.theorem-paper__ack-grid dt { font-weight: calc(6 * 100); opacity: calc(3 / 5); }
.theorem-paper__ack-grid dd { margin: 0; text-align: justify; }
@media print { .theorem-paper__tag { border-color: black; } }
.theorem-paper__abstract {
  border-left: calc(1px * 3) solid currentColor; padding-left: var(--ich-sp4);
  margin: var(--ich-sp4) 0;
}
.theorem-paper__abstract p { font-size: calc(1em * 9 / (2 * 5)); }
.theorem-paper h2 {
  font-size: calc(1em); text-transform: none; letter-spacing: normal;
  margin: var(--ich-sp5) 0 var(--ich-sp2); border: none; padding: 0;
}
.theorem-paper section p, .theorem-paper__cite p { text-align: justify; hyphens: auto; margin: 0; }
.theorem-paper__figure { margin: var(--ich-sp5) auto; display: grid; justify-items: center; gap: var(--ich-sp2); }
.theorem-paper__figure figcaption {
  font-size: calc(1em * 4 / 5); text-align: center; max-width: calc(1px * 5 * 100); opacity: calc(4 / 5);
}
.theorem-paper__hero { margin-top: var(--ich-sp4); }
.theorem-paper__source-home { font-size: calc(1em * 4 / 5); opacity: calc(4 / 5); }
.theorem-paper__formula,
.theorem-paper__code {
  font-size: calc(1em * 7 / (2 * 5)); line-height: calc(7 / 5); overflow-x: auto;
  border: 1px solid currentColor; border-radius: calc(1px * 4); padding: var(--ich-sp3);
  font-family: ui-monospace, Menlo, monospace; text-align: left; white-space: pre;
}
.theorem-paper__cite { margin-top: var(--ich-sp5); border-top: 1px solid currentColor; padding-top: var(--ich-sp3); }
.theorem-paper__cite p { font-size: calc(1em * 9 / (2 * 5)); font-variant-numeric: tabular-nums; }
</style>

<style>
/* ── print: the page IS the paper — A4 margins, black on white, site chrome removed (unscoped so the
   VitePress shell obeys; only active inside @media print, so the screen theme is untouched) ── */
@media print {
  @page { size: A4; margin: calc(1cm * 2) calc(1cm * 2); }
  .VPNav, .VPLocalNav, .VPSidebar, .VPFooter, .VPDocFooter, .VPDocAside, .vp-doc .edit-link, aside { display: none !important; }
  .VPDoc, .VPDoc .container, .VPDoc .content { padding: 0 !important; margin: 0 !important; max-width: none !important; }
  body { background: white !important; }
  .theorem-paper { color: black; max-width: none; break-inside: avoid-page; }
  .theorem-paper__figure, .theorem-paper section { break-inside: avoid; }
  .theorem-paper__masthead { opacity: 1; }
  .theorem-paper + .theorem-paper { break-before: page; }
}
</style>

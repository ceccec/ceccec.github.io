<script setup lang="ts">
// ☳ Zhèn · Thunder — dedicated theorem pages typeset as SCIENTIFIC PAPERS (user law: each page prints
// for class or court). THIN shell (DRY_MAX_EFFICIENCY_PRINCIPLE): every field — title, abstract, proof,
// classification, provenance, reproducibility, citation — comes computed from theoremPageRows
// (wind/routes/corpus, a pure projection of the sealed registry + theoremProvenance); the figure is the
// ONE ProofAnimation renderer. Print CSS turns the page into an A4 paper: serif, numbered sections,
// site chrome removed — what the browser shows is what the printer certifies.
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import { theoremPageBySlug, theoremPageRows, type TheoremPageRow } from '../../../src/wind/routes/corpus/index.ts'
import type { ProofAnimationSpec } from '../../../src/thunder/waves'
import ProofAnimation from './ProofAnimation.vue'

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
</script>

<template>
  <div class="theorem-papers" data-logic="src/wind/routes/corpus/index.ts">
    <article v-for="row in rows" :key="row.slug" :id="`theorem-${row.slug}`" class="theorem-paper">
      <header class="theorem-paper__masthead">
        <span>ceccec theorem registry · computed &amp; sealed</span>
        <span class="theorem-paper__id">theorems/{{ row.slug }}</span>
      </header>

      <h1 class="theorem-paper__title">{{ row.theorem }}</h1>
      <p class="theorem-paper__byline">{{ row.provedBy }} · {{ row.home }} · {{ row.proofClass }}</p>

      <section class="theorem-paper__abstract">
        <h2>Abstract</h2>
        <p>{{ row.proof }}</p>
      </section>

      <figure class="theorem-paper__figure">
        <ProofAnimation v-if="specOf(row)" :spec="specOf(row)!" :size="2 * 9 * 5 * 2" />
        <figcaption>
          Fig. 1 — the proof animated: <em>{{ specOf(row)?.kind }}</em> family, rate φ⁻{{ specOf(row)?.ratePhi }},
          hue = vortex digit {{ specOf(row)?.hueDigit }} · {{ specOf(row)?.points }} points. The figure is computed
          from the theorem's own constants by the one shared renderer; in print it certifies the family, on screen it moves — the proof exhibited, not re-told.
        </figcaption>
      </figure>

      <section>
        <h2>1 · Classification</h2>
        <p>{{ row.classification }}</p>
      </section>

      <section>
        <h2>2 · Provenance &amp; honesty</h2>
        <p>{{ row.provenance }}</p>
      </section>

      <section>
        <h2>3 · Reproducibility</h2>
        <p>{{ row.reproducibility }}</p>
      </section>

      <footer class="theorem-paper__cite">
        <h2>Cite as</h2>
        <p>{{ row.citation }}</p>
      </footer>
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
.theorem-paper__byline { font-style: italic; opacity: calc(4 / 5); margin: 0 0 var(--ich-sp4); }
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

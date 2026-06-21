<script setup>
// ☷ Kūn · Earth · receptive · upper·yang · twist — self-referencing 10D widget
const ICHING_MASK = { hexagram: 1, glyph: '☷', trigram: 'Kūn·receptive', color: '#00000F' }
// I CHING — the components organised on the eight trigrams (bāguà), live from iChing(): every component placed
// by its own content-address (seed → a 6-bit hexagram → upper trigram = its set), reusing the 2⁶=4³ identity.
// Minimal, render-safe baseline (no reactive style values — the alpha mishandles a ref nested in :style); the
// richer interactive bāguà wheel builds on this once the render path is confirmed.
import { iChing, livingTrigramSvg } from '../lib'
const ic = iChing()
// The eight trigrams as LIVING symbols — each DRAWN (not a font glyph), moving and folding by its own bits, its
// three lines coloured by scaleColor at this scale. Glyph → 3-bit value (yang = solid, read bottom-to-top, bit0 =
// bottom line). The SVG carries its own CSS-@keyframes animation and prefers-reduced-motion still.
const TRI_VALUE = { '☰': 7, '☱': 3, '☲': 5, '☳': 1, '☴': 6, '☵': 2, '☶': 4, '☷': 0 }
const triSvg = (glyph) => livingTrigramSvg(TRI_VALUE[glyph] ?? 0, { size: 44 })
</script>

<template>
  <section class="ich" aria-labelledby="ich-title" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <p class="ich__eyebrow">Double Torus · the eight-fold</p>
    <h2 id="ich-title">The components, organised on the I Ching</h2>
    <p class="ich__lede">
      All {{ ic.count }} components are placed on the eight trigrams by their own content-address — seed → a
      6-bit hexagram (0–63), the upper trigram its set — using the existing 2⁶=4³ hexagram·colour·codon identity.
    </p>
    <ul class="ich__sets">
      <li v-for="s in ic.sets" :key="s.bits" class="ich__set">
        <span class="ich__glyph" aria-hidden="true" v-html="triSvg(s.glyph)" />
        <span class="ich__name">{{ s.pinyin }} · {{ s.name }}</span>
        <span class="ich__attr">{{ s.attribute }} · {{ s.family }}</span>
        <span class="ich__n">{{ s.components.length }}</span>
      </li>
    </ul>
    <p class="ich__verdict">{{ ic.hexagrams }} hexagrams · 8 trigrams · {{ ic.count }} components, content-addressed and recomputable.</p>
  </section>
</template>

<style scoped>
.ich { margin: 2.5rem 0; }
.ich__eyebrow { font-size: 0.78rem; letter-spacing: 0.04em; text-transform: uppercase; color: var(--vp-c-text-2); margin: 0 0 0.25rem; }
.ich h2 { border: 0; margin: 0 0 0.5rem; }
.ich__lede { color: var(--vp-c-text-2); max-width: 64ch; }
.ich__sets { list-style: none; padding: 0; margin: 1.25rem 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.5rem; }
.ich__set { display: grid; grid-template-columns: auto 1fr auto; grid-template-rows: auto auto; column-gap: 0.6rem; align-items: center;
  padding: 0.6rem 0.8rem; border: 1px solid var(--vp-c-divider); border-radius: 12px; background: var(--vp-c-bg-soft);
  animation: ich-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) backwards; transition: border-color 0.2s, transform 0.2s; }
.ich__set:hover { border-color: var(--vp-c-brand-1); transform: translateY(-2px); }
.ich__set:nth-child(1) { animation-delay: 0.03s; } .ich__set:nth-child(2) { animation-delay: 0.08s; }
.ich__set:nth-child(3) { animation-delay: 0.13s; } .ich__set:nth-child(4) { animation-delay: 0.18s; }
.ich__set:nth-child(5) { animation-delay: 0.23s; } .ich__set:nth-child(6) { animation-delay: 0.28s; }
.ich__set:nth-child(7) { animation-delay: 0.33s; } .ich__set:nth-child(8) { animation-delay: 0.38s; }
.ich__glyph { grid-row: 1 / 3; display: inline-flex; align-items: center; width: 2.4rem; }
.ich__glyph :deep(svg) { width: 100%; height: auto; display: block; }
@keyframes ich-in { from { opacity: 0; transform: scale(0.6) translateY(10px); } }
@media (prefers-reduced-motion: reduce) { .ich__set { animation: none; } }
.ich__name { font-weight: 700; font-size: 0.9rem; }
.ich__attr { grid-column: 2; font-size: 0.74rem; color: var(--vp-c-text-2); }
.ich__n { grid-row: 1 / 3; grid-column: 3; font-size: 1.1rem; font-weight: 700; color: var(--vp-c-brand-1); font-variant-numeric: tabular-nums; }
.ich__verdict { margin-top: 1.25rem; font-size: 0.86rem; color: var(--vp-c-text-2); padding: 0.9rem 1.1rem; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); }
</style>

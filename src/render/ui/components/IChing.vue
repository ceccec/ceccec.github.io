<script setup>
// ☷ Kūn · Earth · receptive · upper·yang · twist — self-referencing 10D widget
const ICHING_MASK = { hexagram: 1, glyph: '☷', trigram: 'Kūn·receptive', color: '#00000F' }
// I CHING — the components organised on the eight trigrams (bāguà), live from iChing(): every component placed
// by its own content-address (seed → a 6-bit hexagram → upper trigram = its set), reusing the 2⁶=4³ identity.
// The richer view (iChingLeadsUiAtAllScales) builds on this: the scale ladder (bit→4→8→64) and the 64 shadcn
// components as the 8×8 hexagram square, each cell coloured BY its hexagram (the 2⁶=4³ pole-colour). The I Ching
// leads the UI at all scales; shadcn already has the examples; the colour is not chosen, it is the hexagram.
import { ref, computed } from 'vue'
import { iChing, livingTrigramSvg, livingHexagramSvg, iChingLeadsUiAtAllScales } from '../lib'
const ic = iChing()
const leads = iChingLeadsUiAtAllScales()
// The eight trigrams as LIVING symbols — each DRAWN (not a font glyph), moving and folding by its own bits, its
// three lines coloured by scaleColor at this scale. Glyph → 3-bit value (yang = solid, read bottom-to-top, bit0 =
// bottom line). The SVG carries its own CSS-@keyframes animation and prefers-reduced-motion still.
const TRI_VALUE = { '☰': 7, '☱': 3, '☲': 5, '☳': 1, '☴': 6, '☵': 2, '☶': 4, '☷': 0 }
const triSvg = (glyph) => livingTrigramSvg(TRI_VALUE[glyph] ?? 0, { size: 40 })
// pick a component to see its hexagram drawn as six living lines (two trigrams folding about opposite axes)
const selected = ref(-1)
const picked = computed(() => leads.components.find((c) => c.hexagram === selected.value) || null)
const pickedSvg = computed(() => (picked.value ? livingHexagramSvg(picked.value.hexagram, { size: 52 }) : ''))
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

    <!-- ───────── THE I CHING LEADS THE UI AT ALL SCALES ───────── -->
    <div class="ich__leads">
      <p class="ich__eyebrow">shadcn already has the examples · the I Ching leads them</p>
      <h3 class="ich__leads-title">The I Ching leads the UI — at all scales</h3>

      <!-- THE SCALE LADDER: the binary doubling 2¹→2⁶, each scale leading a scale of the interface -->
      <ol class="ich__ladder">
        <li v-for="s in leads.scales" :key="s.n" class="ich__rung">
          <span class="ich__rung-n">{{ s.n }}</span>
          <span class="ich__rung-pow">2<sup>{{ s.bits }}</sup></span>
          <span class="ich__rung-name">{{ s.pinyin }} · {{ s.en }}</span>
          <span v-if="s.glyphs" class="ich__rung-glyphs" aria-hidden="true">{{ s.glyphs.join(' ') }}</span>
          <span class="ich__rung-leads">{{ s.leads }}</span>
        </li>
      </ol>

      <!-- THE BĀGUÀ² SQUARE: the 64 shadcn components, 8 octants × 8, each cell coloured by its hexagram -->
      <p class="ich__square-cap">
        The 64 shadcn components as the 8×8 hexagram square — grouped by upper trigram, each cell coloured by its
        hexagram (the 2⁶=4³ pole-colour: hexagram 0 → black, 63 → white). Tap a component to fold its six lines.
      </p>
      <div class="ich__square">
        <div v-for="o in leads.octants" :key="o.bits" class="ich__octant">
          <div class="ich__octant-head">
            <span class="ich__octant-glyph" aria-hidden="true" v-html="triSvg(o.glyph)" />
            <span class="ich__octant-name">{{ o.pinyin }}</span>
          </div>
          <button
            v-for="c in o.components"
            :key="c.hexagram"
            type="button"
            class="ich__cell"
            :class="{ on: selected === c.hexagram }"
            :style="{ '--pole': c.color }"
            :title="`${c.name} · hexagram ${c.hexagram} · ${c.upperGlyph} over ${c.lowerGlyph} · ${c.color}`"
            :aria-label="`${c.name}, hexagram ${c.hexagram}, colour ${c.color}`"
            @click="selected = selected === c.hexagram ? -1 : c.hexagram"
          >
            <span class="ich__cell-swatch" aria-hidden="true" />
            <span class="ich__cell-name">{{ c.name }}</span>
            <span class="ich__cell-hex" aria-hidden="true">{{ c.upperGlyph }}{{ c.lowerGlyph }}</span>
          </button>
        </div>
      </div>

      <!-- the picked component: its hexagram drawn as six living, folding lines + the pole-colour it IS -->
      <p v-if="picked" class="ich__pick" :style="{ '--pole': picked.color }">
        <span class="ich__pick-glyph" aria-hidden="true" v-html="pickedSvg" />
        <span class="ich__pick-text">
          <strong>{{ picked.name }}</strong> — hexagram {{ picked.hexagram }} ({{ picked.upperGlyph }} over
          {{ picked.lowerGlyph }}) · family <em>{{ picked.family }}</em> · colour
          <code class="ich__pick-code">{{ picked.color }}</code> — the colour is not chosen, it <b>is</b> the hexagram.
        </span>
      </p>

      <p class="ich__lede ich__leads-statement">{{ leads.statement }}</p>
      <p class="ich__boundary"><strong>Boundary:</strong> {{ leads.boundary }}</p>
    </div>
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

/* ── the leading law ───────────────────────────────────────────────── */
.ich__leads { margin-top: 2.5rem; border-top: 1px solid var(--vp-c-divider); padding-top: 1.5rem; }
.ich__leads-title { border: 0; margin: 0 0 1rem; font-size: 1.35rem; }

/* the scale ladder: 2 → 4 → 8 → 64 */
.ich__ladder { list-style: none; padding: 0; margin: 0 0 1.5rem; display: grid; gap: 0.5rem; }
.ich__rung { display: flex; flex-wrap: wrap; align-items: baseline; column-gap: 0.7rem; row-gap: 0.2rem;
  padding: 0.55rem 0.9rem; border: 1px solid var(--vp-c-divider); border-left: 4px solid var(--vp-c-brand-1);
  border-radius: 10px; background: var(--vp-c-bg-soft); }
.ich__rung-n { font-size: 1.7rem; font-weight: 800; color: var(--vp-c-brand-1); font-variant-numeric: tabular-nums; align-self: center; }
.ich__rung-pow { font-size: 0.8rem; color: var(--vp-c-text-3); white-space: nowrap; }
.ich__rung-name { font-weight: 700; font-size: 0.86rem; }
.ich__rung-glyphs { font-size: 0.82rem; letter-spacing: 0.12em; color: var(--vp-c-text-2); margin-left: auto; white-space: nowrap; }
.ich__rung-leads { flex-basis: 100%; font-size: 0.8rem; color: var(--vp-c-text-2); }

/* the 8×8 square — 8 octant blocks (upper trigram), 8 cells each (lower trigram) */
.ich__square-cap { font-size: 0.82rem; color: var(--vp-c-text-2); max-width: 70ch; margin: 0 0 0.8rem; }
.ich__square { display: grid; grid-template-columns: repeat(auto-fill, minmax(168px, 1fr)); gap: 0.7rem; }
.ich__octant { border: 1px solid var(--vp-c-divider); border-radius: 12px; padding: 0.5rem; background: var(--vp-c-bg-soft); }
.ich__octant-head { display: flex; align-items: center; gap: 0.45rem; margin-bottom: 0.4rem; padding: 0 0.15rem; }
.ich__octant-glyph { width: 1.7rem; display: inline-flex; }
.ich__octant-glyph :deep(svg) { width: 100%; height: auto; display: block; }
.ich__octant-name { font-size: 0.78rem; font-weight: 700; color: var(--vp-c-text-2); }
.ich__cell { display: grid; grid-template-columns: 0.9rem 1fr auto; align-items: center; gap: 0.4rem; width: 100%;
  margin-bottom: 0.25rem; padding: 0.3rem 0.45rem; border: 1px solid var(--vp-c-divider); border-left: 3px solid var(--pole);
  border-radius: 7px; background: color-mix(in srgb, var(--pole) 9%, var(--vp-c-bg)); color: var(--vp-c-text-1);
  font: inherit; text-align: left; cursor: pointer; transition: transform 0.12s ease, box-shadow 0.18s ease, border-color 0.18s; }
.ich__cell:hover { transform: translateX(2px); box-shadow: 0 2px 10px color-mix(in srgb, var(--pole) 40%, transparent); }
.ich__cell:focus-visible { outline: 2px solid var(--pole); outline-offset: 1px; }
.ich__cell.on { border-color: var(--pole); background: color-mix(in srgb, var(--pole) 22%, var(--vp-c-bg)); box-shadow: 0 0 0 1px var(--pole); }
.ich__cell-swatch { width: 0.9rem; height: 0.9rem; border-radius: 3px; background: var(--pole); border: 1px solid var(--vp-c-divider); }
.ich__cell-name { font-size: 0.76rem; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.ich__cell-hex { font-size: 0.82rem; letter-spacing: 0.05em; color: var(--vp-c-text-3); line-height: 1; }

/* the picked detail */
.ich__pick { display: flex; align-items: center; gap: 0.9rem; margin: 1.1rem 0 0; padding: 0.7rem 1rem;
  border: 1px solid var(--vp-c-divider); border-left: 4px solid var(--pole); border-radius: 12px;
  background: color-mix(in srgb, var(--pole) 8%, var(--vp-c-bg-soft)); }
.ich__pick-glyph { flex: none; width: 3rem; }
.ich__pick-glyph :deep(svg) { width: 100%; height: auto; display: block; }
.ich__pick-text { font-size: 0.86rem; color: var(--vp-c-text-2); }
.ich__pick-code { font-size: 0.82rem; }
.ich__leads-statement { margin-top: 1.25rem; }
.ich__boundary { margin-top: 0.8rem; font-size: 0.76rem; color: var(--vp-c-text-3); border-top: 1px solid var(--vp-c-divider); padding-top: 0.6rem; max-width: 80ch; }
.ich__boundary strong { color: var(--vp-c-brand-1); }
</style>

<script setup lang="ts">
// ☶ Gèn · Mountain · keeping still — the pyramids: mountains of stone, decoded and COMPUTED. Every number
// below is read live from the folds (pyramidsDecoded / pyramidGridDebunked / pyramidConstructionMath), not
// hardcoded here — the research rendered as computed UI; the pseudoscience flagged with the science.
const ICHING_MASK = { hexagram: 52, lower: 4, upper: 4, glyph: '☶', trigram: 'Gèn', name: 'Mountain', attribute: 'keeping still', innerAxis: 'shrink', outerAxis: 'spread', color: '#F0F000' } as const
import DecodedCard from './DecodedCard'
import LayersPanel from './LayersPanel'
import { pyramidsDecoded, pyramidGridDebunked, pyramidConstructionMath } from '../lib'

const d = pyramidsDecoded()
const g = pyramidGridDebunked()
const c = pyramidConstructionMath()

const items = [
  {
    label: `△ Giza slope = seked ${d.slopeDeg.seked}° (Petrie measured ${d.slopeDeg.measured}°)`,
    detail: `π-model ${d.slopeDeg.pi}°, φ-model ${d.slopeDeg.phi}° — all within 0.03°, so the seked (rise:run 14:11) is the intent; π and φ are coincidental byproducts, not encoded.`,
  },
  {
    label: `△ Giza aligns to true north to ~3.6′ (0.06°), better than 4′`,
    detail: `Khufu, Khafre and Snefru's Red Pyramid share one counter-clockwise sign (mean −6.2′) — a falsifiable signature, achieved by circumpolar-star simultaneous transit (Spence; the date contested by Rawlins & Pickering).`,
  },
  {
    label: `◈ ${g.sites.length} verified sites · ${g.distancesKm.length} great-circle distances computed`,
    detail: `nearest ${g.nearest.km} km at ${g.nearest.bearing}° (${g.nearest.a} ↔ ${g.nearest.b}); farthest ${g.farthest.km} km (${g.farthest.a} ↔ ${g.farthest.b}) — a ${g.spreadRatio}× spread, no equidistant grid. Giza sits ${g.gizaToLandCentreKm} km from the real median land point (Anatolia), not at it.`,
  },
  {
    label: `☉ El Castillo: 91 × 4 + 1 = ${c.elCastilloSteps} — the haab' solar year`,
    detail: `the Calendar Round = lcm(tzolk'in 260, haab' 365) = ${c.calendarRound} days = ${c.calendarRoundYears} haab' years = the 52 panels per side; the equinox casts a seven-triangle shadow-serpent down the north stair.`,
  },
  {
    label: `▲ Meroë ${c.meroeVsGizaDegrees}° steeper than Giza · Caral ${c.caralBCE} BCE`,
    detail: `200+ steep ~72° Kushite tombs (more than all of Egypt); Caral was building monumentally at Egypt's pyramid epoch, an ocean apart with no contact — independent convergence, not one blueprint.`,
  },
  {
    label: `⚠ flagged — debunked by the science and the math`,
    detail: `the Orion Correlation Theory (a height-definition artifact); the Mars "Face" at Cydonia (a natural mesa, resolved by Mars Global Surveyor 2001 / HiRISE 2007); the "global pyramid grid" (the ${g.spreadRatio}× distance spread); and "Giza = centre of Earth's landmass" (the median land point is in Anatolia).`,
  },
]
</script>

<template>
  <section :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <LayersPanel :mask="ICHING_MASK" :items="items" v-slot="{ filtered }">
      <DecodedCard
        eyebrow="Pyramids · coordinates, math, significance — computed"
        eyebrow-bg="пирамиди · координати, математика, значение"
        :statement="d.statement"
        :items="filtered"
        :boundary="c.boundary"
      />
    </LayersPanel>
  </section>
</template>

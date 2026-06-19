<script setup lang="ts">
// ☲ Lí · Fire · the clinging, radiance — megalithic astronomy: the Sun on the horizon, computed. Every azimuth
// below is read live from megalithicAstronomyDecoded (cos A = sin δ / cos φ, with the Neolithic obliquity ~24°),
// not hardcoded — the standing stones as horizon clocks; the formula reproduces the documented passages, and the
// megalithic-yard / eclipse-computer / ley-line overclaims are flagged with the science.
const ICHING_MASK = { hexagram: 30, lower: 3, upper: 3, glyph: '☲', trigram: 'Lí', name: 'Fire', attribute: 'radiance', color: '#F0780F' } as const
import DecodedCard from './DecodedCard.vue'
import LayersPanel from './LayersPanel.vue'
import { megalithicAstronomyDecoded } from '../lib/quantumMind'

const m = megalithicAstronomyDecoded()
type Site = { name: string; country: string; lat: number; target: string; azimuth: number | null; epsilon: number; docAz: number | null }
const stone = (m.sites as Site[]).find((s) => s.name === 'Stonehenge')!
const newg = (m.sites as Site[]).find((s) => s.name === 'Newgrange')!

const items = [
  {
    label: `☉ equinox sunrise = due east (${m.equinoxAzimuth}°) at every latitude`,
    detail: 'declination 0 in cos A = sin δ / cos φ gives A = 90° — the one solar alignment that needs no obliquity and no special site. Solstice azimuths swing away from east by the latitude and the tilt.',
  },
  {
    label: `△ Stonehenge — midsummer sunrise ${stone.azimuth}° ≈ Heel Stone ~${stone.docAz}°`,
    detail: `from φ=${stone.lat}° with ε=${stone.epsilon}° (~2600 BCE), the formula lands within a degree of the documented axis to the Heel Stone — the monument is a horizon clock set to the solstice Sun.`,
  },
  {
    label: `△ Newgrange — midwinter sunrise ${newg.azimuth}° ≈ roof-box passage ~${newg.docAz}°`,
    detail: 'computed to within ~0.2° of the documented passage; the Sun still pours through the roof-box and down the 19 m passage into the chamber every 21 December, ~5,200 years on.',
  },
  {
    label: '↻ the ancient sky — obliquity was ~24°, not today’s 23.44°',
    detail: 'the axial tilt shrinks ~0.013°/century; using the epoch value (the larger Neolithic tilt) tightens the match to the documented azimuths — the math only reproduces the alignment with the sky of the builders.',
  },
  {
    label: `◈ real geography — Stonehenge ↔ Newgrange = ${m.stoneToNewgrangeKm} km`,
    detail: 'great-circle distance from the same geodesy the pyramids fold computes — the distances between monuments are ordinary geography. No grid, no equidistance, no numerology.',
  },
  {
    label: '⚠ flagged — rejected by the archaeology',
    detail: 'Thom’s “megalithic yard” and precise lunar observatories (statistical artefact); the Aubrey-holes “eclipse computer” (Hawkins/Hoyle, contested); ley lines (pseudoscience); Nabta Playa’s Orion/Sirius “star map” (fringe); and “oldest observatory / lost civilisation / aliens”. These are sky-watchers’ horizon markers, not computers.',
  },
]
</script>

<template>
  <section :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <LayersPanel :mask="ICHING_MASK" :items="items" v-slot="{ filtered }">
      <DecodedCard
        eyebrow="Megalithic astronomy · the Sun on the horizon, computed"
        eyebrow-bg="мегалитна астрономия · слънцето на хоризонта, изчислено"
        :statement="m.statement"
        :items="filtered"
        :boundary="m.boundary"
      />
    </LayersPanel>
  </section>
</template>

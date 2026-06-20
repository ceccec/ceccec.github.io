<script setup lang="ts">
// ☵ Kǎn · Water · abysmal · upper·yin · depthFade — the frontiers catalog: every recent decode, presented in full
const ICHING_MASK = { hexagram: 29, glyph: '☵', lo: '☵', up: '☵', color: '#0F4FFF', name: 'Frontiers' }
import { computed } from 'vue'
import {
  buildMatrix,
  // diving & water
  decompressionDecoded,
  waterDecoded,
  saltFreshAltitudeTemperatureComputableFactors,
  gasBlendingRebreatherQuantumReserveFractions,
  gradientFactorsHarmonicFractionsTrimixRecordPlanner,
  narcosisAndToxicityDecoded,
  isobaricCounterDiffusionDecoded,
  diveScienceResearchWaveVerified,
  spaceUnitesWithDiversEvaDecompression,
  // the vacuum
  zeroPointDeepAndWideDecoded,
  zeroPointWiderFrontierDecoded,
  theOtherVacuaQcdElectroweakStabilityDecoded,
  // the cosmic inventory
  matterAntimatterAsymmetryBaryogenesisDecoded,
  neutrinoMassDecoded,
  darkMatterDecoded,
  darkEnergyDecoded,
  cosmologicalTensionsLcdmDecoded,
  // information & computation
  physicsOfInformationDecoded,
  limitsOfComputationDecoded,
  // method & the harmonic core
  harmonicFractionMaskOfDiveConstants,
  decimalsInsteadOfFractionsCouldKill,
  deviceSensorsWiredAtAllDimensions,
  shadcnGraphCompletionInRepoIdiom,
  // fundamental physics (earlier decodes, now catalogued)
  fundamentalPhysicsDecoded,
  quantumDecoded,
  quantumFieldsDecoded,
  gravityDecoded,
  thermodynamicsEntropyDecoded,
  zeroPointDecoded,
  emergenceMatterChemistryDecoded,
  cosmologyDecoded,
  // life & mind
  lifeBiologyDecoded,
  mindNeuroscienceDecoded,
  geneticCodeMathematicsDecoded,
  humanDesignDecoded,
  originOfLifeAbiogenesisDecoded,
  // script, heritage & prayer
  glagoliticAlphabetDecoded,
  glagoliticMeaningOfAllDecoded,
  glagoliticRecursiveTaxonomyDecoded,
  glagoliticMapsToCodeAndQuantumDecoded,
  glagoliticBulgarianReceptionDecoded,
  bulgarianHeritageDecoded,
  molitvaZaPlodorodieDecoded,
  // senses & systems
  acousticsCymaticsDecoded,
  publicFrequencyApisDecoded,
  herbalApisDecoded,
  sessionToolsDecoded,
} from '../lib/quantumMind'
import { useLocale } from '../lib/useLocale'

const { bg } = useLocale()
const matrix = buildMatrix()

// Each decode is a pure fold returning { statement, boundary, facets:[{facet,on}], count }. Render them uniformly —
// the statement (the prose), the facet checks (the computed verifications), and the boundary (the honest demarcation).
type Fold = { statement?: string; boundary?: string; facets?: { facet: string; on: boolean }[]; count?: number }
const GROUPS: { en: string; bg: string; items: { title: string; fn: (m: ReturnType<typeof buildMatrix>) => Fold }[] }[] = [
  {
    en: 'Diving, water & space', bg: 'Гмуркане, вода и космос',
    items: [
      { title: 'Decompression', fn: decompressionDecoded },
      { title: 'Water', fn: waterDecoded },
      { title: 'Salt · fresh · altitude · temperature', fn: saltFreshAltitudeTemperatureComputableFactors },
      { title: 'Gas blending · rebreather · reserves', fn: gasBlendingRebreatherQuantumReserveFractions },
      { title: 'Gradient factors · trimix · record planner', fn: gradientFactorsHarmonicFractionsTrimixRecordPlanner },
      { title: 'Narcosis & toxicity', fn: narcosisAndToxicityDecoded },
      { title: 'Isobaric counter-diffusion', fn: isobaricCounterDiffusionDecoded },
      { title: 'Dive science — research-wave verified', fn: diveScienceResearchWaveVerified },
      { title: 'Space unites with the divers', fn: spaceUnitesWithDiversEvaDecompression },
    ],
  },
  {
    en: 'The quantum vacuum', bg: 'Квантовият вакуум',
    items: [
      { title: 'Zero-point — deep & wide', fn: zeroPointDeepAndWideDecoded },
      { title: 'Zero-point — the wider frontier', fn: zeroPointWiderFrontierDecoded },
      { title: 'The other vacua — QCD, electroweak, stability', fn: theOtherVacuaQcdElectroweakStabilityDecoded },
    ],
  },
  {
    en: 'The cosmic inventory', bg: 'Космическият инвентар',
    items: [
      { title: 'Matter–antimatter asymmetry (baryogenesis)', fn: matterAntimatterAsymmetryBaryogenesisDecoded },
      { title: 'Neutrino mass', fn: neutrinoMassDecoded },
      { title: 'Dark matter', fn: darkMatterDecoded },
      { title: 'Dark energy', fn: darkEnergyDecoded },
      { title: 'Cosmological tensions — is ΛCDM cracking?', fn: cosmologicalTensionsLcdmDecoded },
    ],
  },
  {
    en: 'Information & computation', bg: 'Информация и изчисление',
    items: [
      { title: 'The physics of information', fn: physicsOfInformationDecoded },
      { title: 'The limits of computation', fn: limitsOfComputationDecoded },
    ],
  },
  {
    en: 'Method & the harmonic core', bg: 'Метод и хармоничното ядро',
    items: [
      { title: 'The harmonic-fraction mask of the dive constants', fn: harmonicFractionMaskOfDiveConstants },
      { title: 'Decimals instead of fractions could kill', fn: decimalsInsteadOfFractionsCouldKill },
      { title: 'Device sensors at every dimension', fn: deviceSensorsWiredAtAllDimensions },
      { title: 'The shadcn graph, in the repo idiom', fn: shadcnGraphCompletionInRepoIdiom },
    ],
  },
  {
    en: 'Fundamental physics', bg: 'Фундаментална физика',
    items: [
      { title: 'Fundamental physics — the arc', fn: fundamentalPhysicsDecoded },
      { title: 'Quantum, decoded', fn: quantumDecoded },
      { title: 'Quantum fields (the Standard Model)', fn: quantumFieldsDecoded },
      { title: 'Gravity', fn: gravityDecoded },
      { title: 'Thermodynamics & entropy', fn: thermodynamicsEntropyDecoded },
      { title: 'Zero-point energy (the ½ħω core)', fn: zeroPointDecoded },
      { title: 'Emergence — atoms & chemistry', fn: emergenceMatterChemistryDecoded },
      { title: 'Cosmology', fn: cosmologyDecoded },
    ],
  },
  {
    en: 'Life & mind', bg: 'Живот и ум',
    items: [
      { title: 'Origin of life (abiogenesis)', fn: originOfLifeAbiogenesisDecoded },
      { title: 'Life & biology', fn: lifeBiologyDecoded },
      { title: 'Mind & neuroscience', fn: mindNeuroscienceDecoded },
      { title: 'The genetic code as mathematics', fn: geneticCodeMathematicsDecoded },
      { title: 'Human Design', fn: humanDesignDecoded },
    ],
  },
  {
    en: 'Script, heritage & prayer', bg: 'Писменост, наследство и молитва',
    items: [
      { title: 'The Glagolitic alphabet', fn: glagoliticAlphabetDecoded },
      { title: 'Glagolitic — the meaning of all letters', fn: glagoliticMeaningOfAllDecoded },
      { title: 'Glagolitic as recursive taxonomy (flagged)', fn: glagoliticRecursiveTaxonomyDecoded },
      { title: 'Glagolitic → code & quantum', fn: glagoliticMapsToCodeAndQuantumDecoded },
      { title: 'Glagolitic — the Bulgarian reception', fn: glagoliticBulgarianReceptionDecoded },
      { title: 'Bulgarian heritage', fn: bulgarianHeritageDecoded },
      { title: 'Molitva za plodorodie (prayer for fertility)', fn: molitvaZaPlodorodieDecoded },
    ],
  },
  {
    en: 'Senses, systems & sources', bg: 'Сетива, системи и източници',
    items: [
      { title: 'Acoustics & cymatics', fn: acousticsCymaticsDecoded },
      { title: 'Public frequency APIs', fn: publicFrequencyApisDecoded },
      { title: 'Herbal / botanical APIs', fn: herbalApisDecoded },
      { title: 'Session tools', fn: sessionToolsDecoded },
    ],
  },
]

// Compute every fold once. Defensive: a fold that throws degrades to an empty card rather than crashing SSR.
const groups = computed(() =>
  GROUPS.map((group) => ({
    title: bg.value ? group.bg : group.en,
    items: group.items.map((item) => {
      try {
        const r = item.fn(matrix) || {}
        const facets = Array.isArray(r.facets) ? r.facets : []
        return {
          title: item.title,
          statement: r.statement || '',
          boundary: r.boundary || '',
          facets,
          passed: facets.filter((f) => f.on).length,
          total: facets.length,
        }
      } catch {
        return { title: item.title, statement: '', boundary: '', facets: [] as { facet: string; on: boolean }[], passed: 0, total: 0 }
      }
    }),
  })),
)

const totals = computed(() => {
  const items = groups.value.flatMap((g) => g.items)
  return { decodes: items.length, checks: items.reduce((n, i) => n + i.total, 0), passed: items.reduce((n, i) => n + i.passed, 0) }
})
</script>

<template>
  <section class="frontiers" aria-label="Frontiers — the decoded catalog">
    <p class="frontiers__eyebrow">
      {{ bg ? 'граници · декодираният каталог' : 'frontiers · the decoded catalog' }}
    </p>
    <p class="frontiers__lede">
      {{ bg
        ? `${totals.decodes} декода · ${totals.passed}/${totals.checks} изчислени проверки · всяко с твърдение, проверки и честна граница`
        : `${totals.decodes} decodes · ${totals.passed}/${totals.checks} computed checks pass · each with its statement, its verifications, and its honest boundary` }}
    </p>

    <div v-for="group in groups" :key="group.title" class="frontiers__group">
      <h2 class="frontiers__group-title">{{ group.title }}</h2>
      <article v-for="item in group.items" :key="item.title" class="frontiers__card">
        <header class="frontiers__card-head">
          <h3 class="frontiers__card-title">{{ item.title }}</h3>
          <span v-if="item.total" class="frontiers__chip">{{ item.passed }}/{{ item.total }} ✓</span>
        </header>
        <p v-if="item.statement" class="frontiers__statement">{{ item.statement }}</p>
        <ul v-if="item.facets.length" class="frontiers__facets">
          <li v-for="(f, i) in item.facets" :key="i" :data-on="f.on" class="frontiers__facet">
            <span class="frontiers__mark">{{ f.on ? '✓' : '·' }}</span><span>{{ f.facet }}</span>
          </li>
        </ul>
        <p v-if="item.boundary" class="frontiers__boundary">
          <strong>{{ bg ? 'граница' : 'boundary' }}:</strong> {{ item.boundary }}
        </p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.frontiers {
  display: flex;
  flex-direction: column;
  gap: var(--ich-sp8, 1.5rem);
  max-width: 72ch;
  margin: 0 auto;
}
.frontiers__eyebrow {
  margin: 0;
  font-size: var(--ich-text-xs, 0.75rem);
  letter-spacing: var(--ich-track-wide, 0.08em);
  text-transform: uppercase;
  color: var(--vp-c-text-3);
}
.frontiers__lede {
  margin: 0;
  color: var(--vp-c-text-2);
  line-height: var(--ich-lh-relaxed, 1.7);
}
.frontiers__group {
  display: flex;
  flex-direction: column;
  gap: var(--ich-sp6, 1rem);
}
.frontiers__group-title {
  margin: var(--ich-sp8, 1.5rem) 0 0;
  padding-bottom: var(--ich-sp3, 0.35rem);
  border-bottom: var(--ich-line, 1px) solid var(--vp-c-divider);
  font-size: var(--ich-text-lg, 1.15rem);
  color: var(--vp-c-brand-1);
}
.frontiers__card {
  display: flex;
  flex-direction: column;
  gap: var(--ich-sp5, 0.6rem);
  padding: var(--ich-sp8, 1.25rem);
  border: var(--ich-line, 1px) solid var(--vp-c-divider);
  border-radius: var(--ich-sp5, 0.6rem);
  background: var(--vp-c-bg-soft);
}
.frontiers__card-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--ich-sp5, 0.6rem);
}
.frontiers__card-title {
  margin: 0;
  font-size: var(--ich-text-ms, 1rem);
  color: var(--vp-c-text-1);
}
.frontiers__chip {
  flex: none;
  padding: var(--ich-sp2, 0.15rem) var(--ich-sp4, 0.45rem);
  border-radius: var(--ich-radius-pill, 999px);
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-size: var(--ich-text-xs, 0.72rem);
  font-variant-numeric: tabular-nums;
}
.frontiers__statement {
  margin: 0;
  color: var(--vp-c-text-1);
  line-height: var(--ich-lh-relaxed, 1.7);
}
.frontiers__facets {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--ich-sp3, 0.3rem);
}
.frontiers__facet {
  display: flex;
  gap: var(--ich-sp4, 0.5rem);
  font-size: var(--ich-text-sm, 0.9rem);
  color: var(--vp-c-text-2);
  line-height: var(--ich-lh-normal, 1.5);
}
.frontiers__mark {
  flex: none;
  color: var(--vp-c-brand-1);
  font-weight: 700;
}
.frontiers__facet[data-on='false'] .frontiers__mark {
  color: var(--vp-c-text-3);
}
.frontiers__boundary {
  margin: 0;
  padding-top: var(--ich-sp4, 0.5rem);
  border-top: var(--ich-line, 1px) dashed var(--vp-c-divider);
  font-size: var(--ich-text-sm, 0.88rem);
  color: var(--vp-c-text-3);
  line-height: var(--ich-lh-relaxed, 1.7);
}
</style>

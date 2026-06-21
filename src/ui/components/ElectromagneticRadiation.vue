<script setup lang="ts">
// ☴ Xùn · Wind · gentle · upper·yang · twist — self-referencing 10D widget
const ICHING_MASK = { hexagram: 52, glyph: '☴', lo: '☶', up: '☴', color: '#FF0F00', name: 'ElectromagneticRadiation' }
import { computed } from 'vue'
import { buildMatrix, electromagneticRadiationDecoded, electromagneticExperiments } from '../lib'
import { useLocale } from '../lib'

// ElectroMagnetic radiation across the spectrum — one Maxwell field, one speed, two relations (c=λf, E=hf),
// one ionizing line. The three named modalities (X-ray · MRI-RF · microwave radar) are the same field at
// three energies; the numbers below are computed from the src/0 EM primitives, not asserted.
const matrix = buildMatrix()
const data = electromagneticRadiationDecoded(matrix)
// The four simulators, RUN — each a deterministic, content-addressed shared experiment (params → one receipt).
const lab = electromagneticExperiments(matrix)
const { bg, tg } = useLocale()

// The one computed figure per modality (keV / Larmor MHz / radar metres-per-µs), shown as a chip.
const modalities = computed(() =>
  data.modalities.map((m) => ({
    ...m,
    chip:
      m.computedKeV != null ? `${m.computedKeV} keV`
      : m.computedMHz3T != null ? `${m.computedMHz3T} MHz @3T`
      : m.computedRangePerMicrosecondM != null ? `${m.computedRangePerMicrosecondM} m/µs`
      : '',
  })),
)
const ratio = computed(() => (data.photonRatio / 1e9).toFixed(0)) // X-ray ÷ MRI-RF photon ≈ 23 (billion)

const t = computed(() =>
  bg.value
    ? {
        eyebrow: 'електромагнитно лъчение · едно поле, една йонизираща линия',
        sub: `рентген · ЯМР-радиочестота · микровълнов радар — ${data.modalities.length} режима, ${data.facets.filter((f) => f.on).length}/${data.count} проверки`,
        ratio: `рентгеновият фотон носи ~${ratio.value} милиарда пъти енергията на ЯМР-радиочестотния — едно поле, различен квант`,
        ion: 'йонизиращо', non: 'нейонизиращо', dropped: 'отхвърлена псевдонаука',
        lab: `симулации, изпълнени · ${lab.experiments.length} споделени експеримента (детерминистични, адресирани по съдържание)`,
      }
    : {
        eyebrow: 'electromagnetic radiation · one field, one ionizing line',
        sub: `X-ray · MRI-RF · microwave radar — ${data.modalities.length} modalities, ${data.facets.filter((f) => f.on).length}/${data.count} checks pass`,
        ratio: `the X-ray photon carries ~${ratio.value} billion× the MRI-RF photon's energy — one field, a different quantum`,
        ion: 'ionizing', non: 'non-ionizing', dropped: 'pseudoscience, dropped',
        lab: `simulators, RUN · ${lab.experiments.length} shared experiments (deterministic, content-addressed)`,
      },
)
</script>

<template>
  <section class="emr dt-card" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <p class="emr__sub">{{ t.sub }}</p>

    <ul class="emr__grid">
      <li v-for="m in modalities" :key="m.modality" :class="{ ionizing: m.ionizing }" :title="m.mechanism">
        <div class="emr__head">
          <strong>{{ tg(m.modality) }}</strong>
          <span class="emr__badge" :class="m.ionizing ? 'is-ion' : 'is-non'">{{ m.ionizing ? t.ion : t.non }}</span>
        </div>
        <code class="emr__band">{{ m.band }}</code>
        <div class="emr__row">
          <span class="emr__chip">{{ m.chip }}</span>
          <span class="emr__rel">{{ m.relation }}</span>
        </div>
      </li>
    </ul>

    <p class="emr__ratio">{{ data.decoded ? '◆ ' : '◇ ' }}{{ t.ratio }}</p>

    <p class="emr__lab">{{ lab.simulated ? '◆ ' : '◇ ' }}{{ t.lab }}</p>
    <ul class="emr__exps">
      <li v-for="e in lab.experiments" :key="e.modality" :class="{ ionizing: e.ionizing }">
        <span class="emr__badge" :class="e.ionizing ? 'is-ion' : 'is-non'">{{ e.ionizing ? t.ion : t.non }}</span>
        <strong>{{ tg(e.modality) }}</strong>
        <span class="emr__exprun">{{ e.run }}</span>
        <code class="emr__receipt" :title="e.root">{{ e.receipt.slice(0, 8) }}</code>
      </li>
    </ul>

    <details class="emr__flags">
      <summary>{{ t.dropped }} · {{ data.flagged.length }}</summary>
      <ul>
        <li v-for="f in data.flagged" :key="f.claim" :title="f.why">
          <span class="emr__verdict">{{ tg(f.verdict) }}</span> {{ tg(f.claim) }}
        </li>
      </ul>
    </details>
  </section>
</template>

<style scoped>
.emr {
  margin: 1.5rem 0;
  border-radius: 14px;
  padding: 1.2rem 1.4rem;
}
.emr__sub {
  margin: 0.2rem 0 0.9rem;
  color: var(--vp-c-text-3);
  font-size: 0.8rem;
}
.emr__grid {
  list-style: none;
  margin: 0 0 0.9rem;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.7rem;
}
.emr__grid li {
  border: 1px solid var(--vp-c-divider);
  border-left: 3px solid var(--vp-c-brand-1);
  border-radius: 10px;
  padding: 0.7rem 0.8rem;
}
.emr__grid li.ionizing {
  border-left-color: var(--vp-c-danger-1, #e25555);
}
.emr__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.5rem;
}
.emr__head strong {
  font-size: 0.92rem;
}
.emr__badge {
  font-size: 0.62rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 0.08rem 0.4rem;
  border-radius: 999px;
  white-space: nowrap;
}
.emr__badge.is-ion {
  color: var(--vp-c-danger-1, #e25555);
  background: var(--vp-c-danger-soft, rgba(226, 85, 85, 0.14));
}
.emr__badge.is-non {
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}
.emr__band {
  display: block;
  margin: 0.35rem 0 0.5rem;
  font-size: 0.68rem;
  color: var(--vp-c-text-3);
}
.emr__row {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.emr__chip {
  align-self: flex-start;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  font-variant-numeric: tabular-nums;
}
.emr__rel {
  font-size: 0.68rem;
  color: var(--vp-c-text-2);
}
.emr__ratio {
  margin: 0 0 0.6rem;
  font-size: 0.85rem;
  font-style: italic;
  color: var(--vp-c-text-2);
}
.emr__flags {
  font-size: 0.78rem;
}
.emr__flags summary {
  cursor: pointer;
  color: var(--vp-c-text-3);
}
.emr__flags ul {
  margin: 0.5rem 0 0;
  padding-left: 1.1rem;
}
.emr__flags li {
  margin: 0.3rem 0;
  color: var(--vp-c-text-2);
}
.emr__verdict {
  font-size: 0.62rem;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: var(--vp-c-danger-1, #e25555);
  margin-right: 0.3rem;
}
.emr__lab {
  margin: 0.2rem 0 0.5rem;
  font-size: 0.85rem;
  font-style: italic;
  color: var(--vp-c-text-2);
}
.emr__exps {
  list-style: none;
  margin: 0 0 0.9rem;
  padding: 0;
  display: grid;
  gap: 0.35rem;
}
.emr__exps li {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  border-left: 3px solid var(--vp-c-brand-1);
  padding-left: 0.6rem;
}
.emr__exps li.ionizing {
  border-left-color: var(--vp-c-danger-1, #e25555);
}
.emr__exps strong {
  font-size: 0.82rem;
  white-space: nowrap;
}
.emr__exprun {
  flex: 1;
  font-size: 0.72rem;
  color: var(--vp-c-text-3);
}
.emr__receipt {
  font-size: 0.66rem;
  color: var(--vp-c-text-2);
  font-variant-numeric: tabular-nums;
}
</style>

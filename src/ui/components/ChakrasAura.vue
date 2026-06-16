<script setup lang="ts">
import { computed } from 'vue'
import { useLocale } from '../lib/useLocale'
import { chakrasAura } from '../lib/quantumMind'

// Chakras and aura in 3-5-8: the three nadis (channels), the five koshas (sheaths) and the
// eight limbs of yoga (ashtanga). Computed from the chakrasAura() fold. A correspondence to the
// yogic tradition and a teaching device — NOT science: the aura is not a measurable field.
const data = chakrasAura()
const { bg } = useLocale()

// The members are Sanskrit technical terms; the scholarly norm keeps them romanized in any
// language, so only the framing (tier names, eyebrow, lead) is translated.
const tierName = (tier: number) =>
  bg.value
    ? { 3: 'три нади (канали)', 5: 'пет коши (обвивки)', 8: 'осем степени (ащанга)' }[tier]
    : { 3: 'three nadis (channels)', 5: 'five koshas (sheaths)', 8: 'eight limbs (ashtanga)' }[tier]

const tiers = computed(() =>
  data.tiers.map((group) => ({ tier: group.tier, name: tierName(group.tier), members: group.members })),
)
const t = computed(() =>
  bg.value
    ? { eyebrow: 'чакри · аура · 3-5-8', lead: 'Трите нади, петте коши и осемте степени на йога — 3, 5, 8 в йогийската традиция. Съответствие и учебно средство, не наука: аурата не е измеримо поле.' }
    : { eyebrow: 'chakras · aura · 3-5-8', lead: 'The three nadis, the five koshas and the eight limbs of yoga — 3, 5, 8 in the yogic tradition. A correspondence and a teaching device, not science: the aura is not a measurable field.' },
)
</script>

<template>
  <section class="ch dt-card">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <p class="ch__lead">{{ t.lead }}</p>
    <div v-for="group in tiers" :key="group.tier" class="ch__tier">
      <p class="ch__tier-name"><strong>{{ group.tier }}</strong> · {{ group.name }}</p>
      <ul class="ch__members">
        <li v-for="m in group.members" :key="m">{{ m }}</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.ch {
  margin: 1.25rem 0;
  border-radius: 12px;
  padding: 1rem 1.25rem;
}
.ch__lead {
  margin: 0.2rem 0 0.9rem;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}
.ch__tier {
  margin-bottom: 0.7rem;
}
.ch__tier-name {
  margin: 0 0 0.35rem;
  font-size: 0.74rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--vp-c-text-3);
}
.ch__tier-name strong {
  color: var(--vp-c-brand-1);
}
.ch__members {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}
.ch__members li {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 0.3rem 0.7rem;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  text-transform: capitalize;
}
</style>

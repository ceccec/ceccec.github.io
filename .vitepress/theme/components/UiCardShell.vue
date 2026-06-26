<script setup lang="ts">
import { computed } from 'vue'
import { UiCard, UiCardContent } from '../../lib/shadcn-ui.ts'
import { useCardMovie, useImmersiveMovie, type MovieIntensity } from '../../lib/mounts'
import type { QuantumProjection } from '@vp-lib/hero-movie'
import CardBackgroundMovie from './CardBackgroundMovie.vue'

const props = withDefaults(
  defineProps<{
    seedParts: readonly (string | undefined)[]
    title?: string
    ghost?: boolean
    component?: string
    immersiveShadow?: boolean
    movieIntensity?: MovieIntensity
    /** Paint a quantum-app projection of the shared field as the card movie. */
    movieApp?: QuantumProjection
  }>(),
  { immersiveShadow: true, movieIntensity: 'full' },
)

const { seed, cardStyle } = useCardMovie(() => props.seedParts)
const { textShadow } = useImmersiveMovie()

const contentStyle = computed(() =>
  props.immersiveShadow ? { textShadow: textShadow.value } : undefined,
)
</script>

<template>
  <UiCard
    :ghost="ghost"
    :class="$attrs.class"
    :style="cardStyle"
    :data-component="component"
  >
    <CardBackgroundMovie :seed="seed" :title="title" :intensity="movieIntensity" :app="movieApp" />
    <UiCardContent class="vp-doc" :style="contentStyle">
      <slot />
    </UiCardContent>
  </UiCard>
</template>

<script lang="ts">
export default { inheritAttrs: false }
</script>

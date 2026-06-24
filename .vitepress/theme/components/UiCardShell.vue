<script setup lang="ts">
import { computed } from 'vue'
import { useCardMovie, useImmersiveMovie, type MovieIntensity } from '../../lib/mounts'
import CardBackgroundMovie from './CardBackgroundMovie.vue'

const props = withDefaults(
  defineProps<{
    seedParts: readonly (string | undefined)[]
    title?: string
    ghost?: boolean
    component?: string
    immersiveShadow?: boolean
    movieIntensity?: MovieIntensity
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
  <article
    class="ui-card"
    :class="{
      'ui-card--ghost': ghost,
    }"
    data-shadcn="card"
    :data-component="component"
    :style="cardStyle"
  >
    <CardBackgroundMovie :seed="seed" :title="title" :intensity="movieIntensity" />
    <div class="ui-card__content vp-doc" :style="contentStyle">
      <slot />
    </div>
  </article>
</template>

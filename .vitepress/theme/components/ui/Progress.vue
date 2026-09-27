<script setup lang="ts">
// THIS BAR ALWAYS RENDERED FULL, WHATEVER value SAID. .ui-progress__indicator is `width: 100%` with a
// `transition: transform`, and NOTHING anywhere ever set a transform — radix-vue leaves that to the
// consumer's CSS, and the consumer's CSS declared the transition and forgot the transform. So a vendor
// dependency was carried into the eager shell for a component that could not display a value.
// The indicator is offset here, from the value, which is also what makes the existing transition mean
// something. Clamped so a value outside [0, max] cannot translate the bar off its own track.
import { computed } from 'vue'
import { cn } from '../../../lib/cn.ts'

const props = withDefaults(defineProps<{ class?: string; value?: number; max?: number }>(), {
  value: 0,
  max: 100,
})

const max = computed(() => (Number.isFinite(props.max) && props.max > 0 ? props.max : 100))
const value = computed(() => Math.min(Math.max(Number.isFinite(props.value) ? props.value : 0, 0), max.value))
const percent = computed(() => (value.value / max.value) * 100)
</script>

<template>
  <div
    :class="cn('ui-progress', props.class)"
    data-shadcn="progress"
    role="progressbar"
    :data-state="percent >= 100 ? 'complete' : 'loading'"
    :data-value="value"
    :data-max="max"
    :aria-valuemin="0"
    :aria-valuemax="max"
    :aria-valuenow="value"
  >
    <div class="ui-progress__indicator" :style="{ transform: `translateX(-${100 - percent}%)` }" />
  </div>
</template>

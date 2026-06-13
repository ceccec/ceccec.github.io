<script setup lang="ts">
// Computed calligraphy — a real broad-nib stroke. The centerline (ductus), the pen angle and the
// thick/thin width are all computed from the seed by calligraphyStroke: the stroke is thick where it
// crosses the nib, thin where it runs along it. Same seed, same hand. The stroke draws itself in on
// mount. (An abstract calligraphic flourish from the content-address, not handwritten text.)
import { computed } from 'vue'
import { calligraphyStroke } from '../lib/quantumMind'

const props = defineProps<{ seed?: string; size?: number; ink?: boolean }>()
const stroke = computed(() => calligraphyStroke(props.seed ?? 'calligraphy'))
const px = computed(() => props.size ?? 120)
</script>

<template>
  <svg
    class="calligraphy"
    :width="px"
    :height="px"
    viewBox="0 0 100 100"
    role="img"
    :aria-label="`calligraphic stroke, nib ${stroke.penAngleDeg}°`"
    :title="`pen ${stroke.penAngleDeg}° · nib ${stroke.nib}`"
  >
    <path
      :d="stroke.d"
      :fill="`hsl(${stroke.hue} 38% 22%)`"
      :stroke="`hsl(${stroke.hue} 45% 32%)`"
      stroke-width="0.4"
      stroke-linejoin="round"
      :class="['calligraphy-ink', { 'calligraphy-draw': ink !== false }]"
    />
  </svg>
</template>

<style scoped>
.calligraphy { display: inline-block; overflow: visible; }
.calligraphy-ink {
  /* the stroke draws itself in, like wet ink laid down */
  transition: clip-path 0.9s ease;
}
.calligraphy-draw {
  animation: calligraphy-ink 1.6s ease forwards;
}
@keyframes calligraphy-ink {
  from { clip-path: inset(0 100% 0 0); }
  to { clip-path: inset(0 0 0 0); }
}
@media (prefers-reduced-motion: reduce) {
  .calligraphy-draw { animation: none; }
}
:root.dark .calligraphy-ink { filter: brightness(1.8); }
</style>

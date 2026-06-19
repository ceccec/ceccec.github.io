<script setup lang="ts">
// ☶ Gèn · Mountain · keeping still — the layer panel holds all dimensions in stillness until called.
const ICHING_MASK = { hexagram: 52, lower: 4, upper: 4, glyph: '☶', trigram: 'Gèn', name: 'Mountain', attribute: 'keeping still', color: '#F0F000' } as const
import { ref, computed } from 'vue'
import { LAYER_NAMES, LAYER_GROUP, LAYER_BADGE, useLayers } from '../lib/useLayers'

const props = defineProps<{
  mask: {
    hexagram: number
    glyph: string
    color?: string
    innerAxis?: string
    outerAxis?: string
  }
  items: { label: string; detail?: string }[]
}>()

const { depth, visible, apply, toggle } = useLayers()
const open = ref(false)
const filtered = computed(() => apply(props.items))

function isNative(name: string): boolean {
  return name === props.mask.innerAxis || name === props.mask.outerAxis
}

const accent = computed(() => props.mask.color ?? 'var(--vp-c-brand-1)')
</script>

<template>
  <div class="lp" :style="{ '--lp-accent': accent, '--dt-depth': depth, '--depth-t': depth / 10 }">

    <!-- ── control bar ── -->
    <div class="lp-bar" role="toolbar" :aria-label="`dimension controls · hex ${mask.hexagram}`">
      <span class="lp-glyph" :title="`☯ hexagram ${mask.hexagram}`">{{ mask.glyph }}</span>

      <span class="lp-depth-display">
        <span class="lp-depth-num">{{ depth }}</span><span class="lp-d">D</span>
      </span>

      <button class="lp-step" :disabled="depth === 0"
        @click="depth = Math.max(0, depth - 1)" aria-label="decrease depth">−</button>

      <input
        class="lp-slider"
        type="range" min="0" max="10" :value="depth"
        @input="depth = +($event.target as HTMLInputElement).value"
        aria-label="dimension depth 0 to 10"
      />

      <button class="lp-step" :disabled="depth === 10"
        @click="depth = Math.min(10, depth + 1)" aria-label="increase depth">+</button>

      <button
        class="lp-toggle" :class="{ 'lp-toggle--open': open }"
        @click="open = !open"
        :aria-expanded="open"
        aria-label="toggle layers panel"
      >⊟</button>
    </div>

    <!-- ── layers panel ── -->
    <Transition name="lp-slide">
      <div v-if="open" class="lp-panel" role="list" aria-label="dimension layers">

        <template v-for="(name, i) in LAYER_NAMES" :key="name">
          <div v-if="i === 3 || i === 6" class="lp-sep" role="separator" />

          <div
            class="lp-row"
            :class="{
              'lp-row--hidden': !visible[i],
              'lp-row--beyond': i >= depth,
              'lp-row--native': isNative(name),
            }"
            role="listitem"
          >
            <button
              class="lp-eye"
              @click="toggle(i)"
              :aria-pressed="visible[i]"
              :aria-label="`${visible[i] ? 'hide' : 'show'} ${name}`"
            >{{ visible[i] ? '●' : '○' }}</button>

            <span class="lp-stripe" :data-group="LAYER_GROUP[i]" />

            <span class="lp-name">{{ name }}</span>
            <span class="lp-badge">{{ LAYER_BADGE[i] }}</span>
            <span class="lp-idx">{{ i }}</span>
          </div>
        </template>

      </div>
    </Transition>

    <!-- ── slot: consumers get the filtered items ── -->
    <slot :filtered="filtered" />
  </div>
</template>

<style scoped>
.lp { --lp-accent: var(--vp-c-brand-1); }

/* ── bar ── */
.lp-bar {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.35rem 0.7rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px 8px 0 0;
  font-size: 0.78rem;
  user-select: none;
}
.lp-glyph {
  font-size: 1.05rem;
  color: var(--lp-accent);
  min-width: 1.3rem;
  cursor: default;
}
.lp-depth-display {
  min-width: 2.4rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  color: var(--vp-c-text-1);
}
.lp-d { color: var(--vp-c-text-3); font-weight: 400; margin-left: 1px; }

.lp-step {
  background: none;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  width: 1.4rem;
  height: 1.4rem;
  cursor: pointer;
  font-size: 0.85rem;
  color: var(--vp-c-text-1);
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  padding: 0;
  flex-shrink: 0;
}
.lp-step:disabled { opacity: 0.3; cursor: not-allowed; }
.lp-step:not(:disabled):hover { border-color: var(--lp-accent); color: var(--lp-accent); }

.lp-slider {
  flex: 1;
  height: 3px;
  accent-color: var(--lp-accent);
  cursor: pointer;
  min-width: 60px;
}

.lp-toggle {
  background: none;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  padding: 0.1rem 0.45rem;
  cursor: pointer;
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  line-height: 1;
  flex-shrink: 0;
  transition: color 0.15s, border-color 0.15s;
}
.lp-toggle--open,
.lp-toggle:hover { color: var(--lp-accent); border-color: var(--lp-accent); }

/* ── panel ── */
.lp-panel {
  border: 1px solid var(--vp-c-divider);
  border-top: none;
  border-bottom: none;
  background: var(--vp-c-bg-elv, var(--vp-c-bg-soft));
  font-size: 0.75rem;
}
.lp-sep {
  height: 1px;
  background: var(--vp-c-divider);
  margin: 0.15rem 0.5rem;
}
.lp-row {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.22rem 0.55rem;
  transition: opacity 0.12s;
}
.lp-row--hidden  { opacity: 0.35; }
.lp-row--beyond  { opacity: 0.2; }
.lp-row--native {
  background: color-mix(in srgb, var(--lp-accent) 10%, transparent);
  border-left: 2px solid var(--lp-accent);
  padding-left: calc(0.55rem - 2px);
}

.lp-eye {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.65rem;
  padding: 0;
  min-width: 0.8rem;
  color: var(--vp-c-text-2);
  line-height: 1;
}
.lp-eye:hover { color: var(--lp-accent); }

.lp-stripe {
  width: 3px;
  height: 0.9rem;
  border-radius: 2px;
  flex-shrink: 0;
}
.lp-stripe[data-group="inner"] { background: var(--vp-c-brand-1); }
.lp-stripe[data-group="outer"] { background: var(--ich-success-1); } /* the computed holds-green (hex 27, 152°) — was a hardcoded #3dd68c */
.lp-stripe[data-group="loop"]  { background: var(--vp-c-text-3); }

.lp-name {
  flex: 1;
  font-family: var(--vp-font-family-mono, monospace);
  color: var(--vp-c-text-1);
  letter-spacing: -0.01em;
}
.lp-badge {
  color: var(--vp-c-text-3);
  letter-spacing: 0.01em;
  font-size: 0.68rem;
}
.lp-idx {
  min-width: 1rem;
  text-align: right;
  color: var(--vp-c-text-3);
  font-variant-numeric: tabular-nums;
}

/* ── keyboard focus: a visible, accent-coloured ring on every control (was browser-default) ── */
.lp-step:focus-visible,
.lp-toggle:focus-visible,
.lp-eye:focus-visible,
.lp-slider:focus-visible {
  outline: 2px solid var(--lp-accent);
  outline-offset: 2px;
  border-radius: 4px;
}

/* ── transitions ── */
.lp-slide-enter-active { transition: max-height 0.22s ease, opacity 0.18s ease; overflow: hidden; }
.lp-slide-leave-active { transition: max-height 0.18s ease, opacity 0.14s ease; overflow: hidden; }
.lp-slide-enter-from  { max-height: 0; opacity: 0; }
.lp-slide-leave-to    { max-height: 0; opacity: 0; }
.lp-slide-enter-to,
.lp-slide-leave-from  { max-height: 320px; opacity: 1; }
</style>

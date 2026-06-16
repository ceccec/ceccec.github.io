<script setup lang="ts">
// ☷ Kūn · Earth · receptive · upper·yang · twist — self-referencing 10D widget
const ICHING_MASK = { hexagram: 1, glyph: '☷', trigram: 'Kūn·receptive', color: '#00000F' }
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useLocale } from '../lib/useLocale'
import { emfApplications } from '../lib/quantumMind'

// Extend into EMF applications, honestly. Read the device's magnetometer (the
// ambient magnetic field in microtesla) where the Generic Sensor API allows it;
// otherwise fall back to compass heading from orientation; otherwise say so. A
// web page can READ these EM signals — it cannot emit, alter, or harmonise any
// field, and makes no health claim.
const data = emfApplications()
const { bg } = useLocale()

const status = ref<'idle' | 'magnetometer' | 'compass' | 'unavailable'>('idle')
const field = ref<{ x: number; y: number; z: number; magnitude: number } | null>(null)
const heading = ref<number | null>(null)
let sensor: { stop?: () => void } | null = null
let orientHandler: ((e: DeviceOrientationEvent) => void) | null = null

async function read() {
  if (typeof window === 'undefined') return
  // Preferred: the real magnetometer (Generic Sensor API).
  const Mag = (window as unknown as { Magnetometer?: new (opts?: { frequency?: number }) => EventTarget & { x: number; y: number; z: number; start: () => void; stop: () => void } }).Magnetometer
  if (Mag) {
    try {
      const m = new Mag({ frequency: 10 })
      m.addEventListener('reading', () => {
        const x = m.x ?? 0
        const y = m.y ?? 0
        const z = m.z ?? 0
        field.value = { x, y, z, magnitude: Math.sqrt(x * x + y * y + z * z) }
      })
      m.start()
      sensor = { stop: () => m.stop() }
      status.value = 'magnetometer'
      return
    } catch {
      /* permission denied or unavailable: fall through */
    }
  }
  // Fallback: compass heading (magnetometer-derived) from orientation.
  if ('DeviceOrientationEvent' in window) {
    orientHandler = (e: DeviceOrientationEvent) => {
      const h = (e as unknown as { webkitCompassHeading?: number }).webkitCompassHeading
      heading.value = typeof h === 'number' ? h : e.alpha != null ? 360 - e.alpha : null
    }
    window.addEventListener('deviceorientation', orientHandler)
    status.value = 'compass'
    return
  }
  status.value = 'unavailable'
}

onMounted(read)
onUnmounted(() => {
  sensor?.stop?.()
  if (orientHandler) window.removeEventListener('deviceorientation', orientHandler)
})

const t = computed(() =>
  bg.value
    ? { eyebrow: 'ЕМ приложения · магнитно поле', field: 'магнитно поле (µT)', heading: 'компас', spectrum: 'електромагнитен спектър', can: 'браузърът може да чете', cannot: 'не може', unavailable: 'Сензорите за магнитно поле не са налични тук.', note: 'Уеб страница ЧЕТЕ тези ЕМ сигнали — не може да излъчва, променя или „хармонизира“ поле, и не прави здравни твърдения.' }
    : { eyebrow: 'emf applications · magnetic field', field: 'magnetic field (µT)', heading: 'compass', spectrum: 'electromagnetic spectrum', can: 'a browser can read', cannot: 'cannot', unavailable: 'Magnetic-field sensors are unavailable here.', note: 'A web page READS these EM signals — it cannot emit, alter, or “harmonise” a field, and makes no health claim.' },
)
</script>

<template>
  <section class="emf dt-card" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <div class="emf__reading">
      <template v-if="status === 'magnetometer' && field">
        <p class="emf__big">{{ field.magnitude.toFixed(1) }} <small>µT</small></p>
        <p class="emf__xyz">x {{ field.x.toFixed(1) }} · y {{ field.y.toFixed(1) }} · z {{ field.z.toFixed(1) }}</p>
      </template>
      <template v-else-if="status === 'compass'">
        <p class="emf__big">{{ heading != null ? heading.toFixed(0) + '°' : '—' }}</p>
        <p class="emf__xyz">{{ t.heading }}</p>
      </template>
      <p v-else-if="status === 'unavailable'" class="emf__unavailable">⚠ {{ t.unavailable }}</p>
      <p v-else class="emf__xyz">…</p>
    </div>
    <p class="emf__sub">{{ t.spectrum }}</p>
    <ul class="emf__spectrum">
      <li v-for="b in data.spectrum" :key="b.band" :class="{ visible: b.band === 'visible light' }">
        <strong>{{ b.band }}</strong><span>{{ b.range }}</span>
      </li>
    </ul>
    <div class="emf__cans">
      <p><b class="emf__yes">{{ t.can }}:</b> {{ data.canRead.join(' · ') }}</p>
      <p><b class="emf__no">{{ t.cannot }}:</b> {{ data.cannot.join(' · ') }}</p>
    </div>
    <p class="emf__note">⚠ {{ t.note }}</p>
  </section>
</template>

<style scoped>
.emf {
  margin: 1.25rem 0;
  border-radius: 12px;
  padding: 1rem 1.25rem;
}
.emf__reading {
  text-align: center;
  padding: 0.4rem 0;
}
.emf__big {
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  font-variant-numeric: tabular-nums;
}
.emf__big small {
  font-size: 0.9rem;
  color: var(--vp-c-text-3);
}
.emf__xyz {
  margin: 0.1rem 0 0;
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
}
.emf__unavailable {
  color: var(--vp-c-warning-1, #d97706);
  font-size: 0.82rem;
}
.emf__sub {
  margin: 0.7rem 0 0.3rem;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--vp-c-text-3);
}
.emf__spectrum {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 0.2rem;
}
.emf__spectrum li {
  display: flex;
  justify-content: space-between;
  gap: 0.4rem;
  font-size: 0.76rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  padding: 0.2rem 0.4rem;
}
.emf__spectrum li.visible {
  border-color: var(--vp-c-brand-1);
}
.emf__spectrum strong {
  color: var(--vp-c-text-1);
}
.emf__spectrum span {
  color: var(--vp-c-text-3);
}
.emf__cans {
  margin: 0.7rem 0 0;
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
}
.emf__yes {
  color: var(--vp-c-brand-1);
}
.emf__no {
  color: var(--vp-c-warning-1, #d97706);
}
.emf__note {
  margin: 0.7rem 0 0;
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  border-left: 3px solid var(--vp-c-warning-1, #d97706);
  padding-left: 0.6rem;
}
</style>

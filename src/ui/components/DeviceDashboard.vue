<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { createAnimationEngine } from '../lib/quantumMind'

// All hardware made visible in a computed dashboard of widgets — the 4 merkabas (CPU·GPU·memory·storage)
// as CMYK channels (the hardware.cmyk.merkaba.fusion mapping). Every reading is from a REAL browser API;
// nothing native, nothing sent out. DRY: one widget primitive (a label + value + optional bar), rendered
// data-driven for every metric. HONEST: browsers expose no temperature — the closest is the Compute
// Pressure API's CPU pressure STATE (nominal/fair/serious/critical), shown as "thermal pressure", not
// degrees. Unsupported readings show "—". Energy- and SSR-safe (client-only, guarded).

const CMYK = {
  C: { hex: '#13b6c4', merkaba: 'memory' },
  M: { hex: '#d6336c', merkaba: 'gpu' },
  Y: { hex: '#e0a200', merkaba: 'storage' },
  K: { hex: '#46606e', merkaba: 'cpu' },
} as const
type Ch = keyof typeof CMYK

const r = ref({
  cores: 0, ram: 0, gpu: '—', platform: '—',
  heapUsed: 0, heapLimit: 0, storeUsed: 0, storeQuota: 0,
  batLevel: -1, batCharging: false, netType: '—', downlink: 0, rtt: 0,
  fps: 0, pressure: '—',
})

let frames = 0, last = 0, timer = 0
let observer: { disconnect(): void } | null = null
let battery: { level: number; charging: boolean; addEventListener: (e: string, f: () => void) => void; removeEventListener: (e: string, f: () => void) => void } | null = null
const onBattery = () => { if (battery) { r.value.batLevel = battery.level; r.value.batCharging = battery.charging } }

function tick(t: number) {
  frames += 1
  if (t - last >= 1000) { r.value.fps = Math.round((frames * 1000) / (t - last)); frames = 0; last = t }
}
// The shared animation engine (src/0) drives the FPS-meter loop.
const engine = createAnimationEngine(tick)

async function refresh() {
  const perf = (performance as unknown as { memory?: { usedJSHeapSize: number; jsHeapSizeLimit: number } }).memory
  if (perf) { r.value.heapUsed = perf.usedJSHeapSize / 1048576; r.value.heapLimit = perf.jsHeapSizeLimit / 1048576 }
  if (navigator.storage?.estimate) {
    const e = await navigator.storage.estimate()
    r.value.storeUsed = (e.usage ?? 0) / 1048576; r.value.storeQuota = (e.quota ?? 0) / 1048576
  }
  const c = (navigator as unknown as { connection?: { effectiveType?: string; downlink?: number; rtt?: number } }).connection
  if (c) { r.value.netType = c.effectiveType ?? '—'; r.value.downlink = c.downlink ?? 0; r.value.rtt = c.rtt ?? 0 }
}

onMounted(async () => {
  const n = navigator as unknown as {
    hardwareConcurrency?: number; deviceMemory?: number
    getBattery?: () => Promise<typeof battery>
    userAgentData?: { getHighEntropyValues: (h: string[]) => Promise<{ platform?: string; architecture?: string }> }
  }
  r.value.cores = n.hardwareConcurrency ?? 0
  r.value.ram = n.deviceMemory ?? 0
  // GPU model — the only way the browser names the graphics hardware
  try {
    const gl = document.createElement('canvas').getContext('webgl') as WebGLRenderingContext | null
    const dbg = gl?.getExtension('WEBGL_debug_renderer_info')
    if (gl && dbg) r.value.gpu = String(gl.getParameter((dbg as { UNMASKED_RENDERER_WEBGL: number }).UNMASKED_RENDERER_WEBGL))
  } catch { /* WebGL unavailable */ }
  try { const ua = await n.userAgentData?.getHighEntropyValues(['platform', 'architecture']); if (ua) r.value.platform = `${ua.platform ?? ''} ${ua.architecture ?? ''}`.trim() } catch { /* UA-CH unavailable */ }
  try { battery = (await n.getBattery?.()) ?? null; if (battery) { onBattery(); battery.addEventListener('levelchange', onBattery); battery.addEventListener('chargingchange', onBattery) } } catch { /* Battery API unavailable */ }
  // Compute Pressure — the one legitimate "thermal" signal (a STATE, not degrees)
  try {
    const PO = (window as unknown as { PressureObserver?: new (cb: (records: { state: string }[]) => void) => { observe: (s: string, o: object) => Promise<void>; disconnect(): void } }).PressureObserver
    if (PO) {
      const ob = new PO((records) => { const rec = records[records.length - 1]; if (rec) r.value.pressure = rec.state })
      await ob.observe('cpu', { sampleInterval: 2000 }); observer = ob
    }
  } catch { /* Compute Pressure unavailable */ }
  await refresh()
  timer = window.setInterval(refresh, 2000)
  last = performance.now(); engine.start()
})

onUnmounted(() => {
  engine.dispose()
  if (timer) clearInterval(timer)
  if (observer) try { observer.disconnect() } catch { /* already gone */ }
  if (battery) { battery.removeEventListener('levelchange', onBattery); battery.removeEventListener('chargingchange', onBattery) }
})

interface W { ch: Ch; label: string; value: number | string; unit?: string; pct?: number }
const widgets = computed<W[]>(() => {
  const v = r.value
  return [
    { ch: 'K', label: 'logical cores', value: v.cores || '—' },
    { ch: 'K', label: 'thermal pressure', value: v.pressure },
    { ch: 'K', label: 'render rate', value: v.fps, unit: 'fps', pct: Math.min(100, (v.fps / 60) * 100) },
    { ch: 'K', label: 'battery', value: v.batLevel < 0 ? '—' : Math.round(v.batLevel * 100), unit: v.batCharging ? '% ⚡' : '%', pct: v.batLevel < 0 ? undefined : v.batLevel * 100 },
    { ch: 'M', label: 'renderer', value: v.gpu },
    { ch: 'C', label: 'device RAM', value: v.ram || '—', unit: v.ram ? 'GB' : '' },
    { ch: 'C', label: 'JS heap', value: v.heapUsed ? Math.round(v.heapUsed) : '—', unit: 'MB', pct: v.heapLimit ? (v.heapUsed / v.heapLimit) * 100 : undefined },
    { ch: 'Y', label: 'storage used', value: v.storeUsed ? Math.round(v.storeUsed) : '—', unit: 'MB', pct: v.storeQuota ? (v.storeUsed / v.storeQuota) * 100 : undefined },
    { ch: 'Y', label: 'network', value: v.netType, unit: v.downlink ? `${v.downlink}Mb·${v.rtt}ms` : '' },
  ]
})
const channels = ['C', 'M', 'Y', 'K'] as Ch[]
const byChannel = computed(() => channels.map((ch) => ({ ch, ...CMYK[ch], items: widgets.value.filter((w) => w.ch === ch) })))

// The more device info loaded, the more keyspace: each live (non-"—") reading is a 128-bit address, so
// the device load spans 2^(128 × active) fold-states, growing by 2^128 with each metric that resolves.
// HONEST: this is keyspace STRUCTURE (addressable states), not entropy — the cipher is AES-256 regardless.
const keyspaceBits = computed(() => widgets.value.filter((w) => w.value !== '—' && w.value !== 0 && w.value !== '').length * 128)
</script>

<template>
  <ClientOnly>
    <section class="dev-dash">
      <header class="dev-dash__head">
        <span class="dev-dash__title">hardware · 4 merkabas (CMYK)</span>
        <span class="dev-dash__keyspace" title="keyspace structure spanned by the live device stream — 2^(128 × active metrics). Structure, not entropy; the cipher is AES-256.">keyspace 2<sup>{{ keyspaceBits }}</sup></span>
        <span class="dev-dash__plat">{{ r.platform }}</span>
      </header>
      <div class="dev-dash__grid">
        <div v-for="c in byChannel" :key="c.ch" class="dev-dash__chan" :style="{ '--ch': c.hex }">
          <div class="dev-dash__chan-head"><b class="dev-dash__chip">{{ c.ch }}</b> {{ c.merkaba }}</div>
          <div v-for="w in c.items" :key="w.label" class="dev-dash__w">
            <div class="dev-dash__w-top">
              <span class="dev-dash__w-label">{{ w.label }}</span>
              <span class="dev-dash__w-val">{{ w.value }}<i v-if="w.unit"> {{ w.unit }}</i></span>
            </div>
            <div v-if="w.pct !== undefined" class="dev-dash__bar"><i :style="{ width: Math.max(2, Math.min(100, w.pct)) + '%' }" /></div>
          </div>
        </div>
      </div>
      <p class="dev-dash__note">Real browser APIs only — nothing native, nothing sent out. No browser exposes temperature; “thermal pressure” is the Compute Pressure CPU state (nominal/fair/serious/critical), not degrees. Unsupported readings show “—”. The keyspace grows 2¹²⁸ per live reading — that is structure (addressable fold-states), not entropy; the cipher is AES-256 regardless.</p>
    </section>
  </ClientOnly>
</template>

<style scoped>
.dev-dash {
  margin: 1.5rem 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  padding: 1rem 1.1rem 0.9rem;
  background: var(--vp-c-bg-soft);
}
.dev-dash__head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 0.8rem;
}
.dev-dash__title { font-weight: 600; font-size: 0.92rem; }
.dev-dash__plat { font-size: 0.72rem; color: var(--vp-c-text-3); font-variant-numeric: tabular-nums; }
.dev-dash__keyspace {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  font-variant-numeric: tabular-nums;
  color: var(--vp-c-brand-1);
}
.dev-dash__keyspace sup { font-size: 0.7em; }
.dev-dash__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.7rem;
}
.dev-dash__chan {
  border: 1px solid color-mix(in srgb, var(--ch) 40%, var(--vp-c-divider));
  border-top: 3px solid var(--ch);
  border-radius: 10px;
  padding: 0.6rem 0.7rem;
  background: var(--vp-c-bg);
}
.dev-dash__chan-head {
  font-size: 0.74rem;
  letter-spacing: 0.04em;
  color: var(--vp-c-text-2);
  margin-bottom: 0.5rem;
  text-transform: lowercase;
}
.dev-dash__chip {
  display: inline-grid;
  place-items: center;
  width: 1.2rem; height: 1.2rem;
  border-radius: 4px;
  background: var(--ch);
  color: #fff;
  font-size: 0.66rem;
  margin-right: 0.35rem;
}
.dev-dash__w { margin: 0.35rem 0; }
.dev-dash__w-top {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  font-size: 0.74rem;
}
.dev-dash__w-label { color: var(--vp-c-text-3); }
.dev-dash__w-val {
  color: var(--vp-c-text-1);
  font-variant-numeric: tabular-nums;
  font-weight: 600;
  text-align: right;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 60%;
}
.dev-dash__w-val i { color: var(--vp-c-text-3); font-style: normal; font-weight: 400; font-size: 0.92em; }
.dev-dash__bar {
  margin-top: 0.22rem;
  height: 4px;
  border-radius: 999px;
  background: var(--vp-c-divider);
  overflow: hidden;
}
.dev-dash__bar i {
  display: block;
  height: 100%;
  border-radius: 999px;
  background: var(--ch);
  transition: width 0.5s ease;
}
.dev-dash__note {
  margin: 0.8rem 0 0.2rem;
  font-size: 0.68rem;
  line-height: 1.5;
  color: var(--vp-c-text-3);
}
</style>

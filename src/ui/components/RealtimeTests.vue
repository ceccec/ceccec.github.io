<script setup lang="ts">
// ☵ Kǎn · Water · abysmal · upper·yang · breath — self-referencing 10D widget
const ICHING_MASK = { hexagram: 17, glyph: '☵', lower: '☳', upper: '☵', color: '#0F000F' } as const
import { onMounted, reactive } from 'vue'
import { backtestRealPrices, spectrumFromSamples, larmorFromMicrotesla, dopplerFromMotion, liveCapture, realtimeExperiments } from '../lib/quantumMind'
import { sharedAudioContext } from '../lib/useTones'
import { useLocale } from '../lib/useLocale'

// Test all on LIVE data: the deterministic sims/strategies (src) consume REAL inputs ingested at the edge —
// no-key public APIs (auto-fetched) + device sensors (permission-gated, graceful fallback). Each capture is
// content-addressed (liveCapture) into a reproducible snapshot. HONEST: mic audio is SOUND not EM; device
// motion feeds the radar EQUATION not real radar; magnetometer→Larmor is a real field, no actual NMR.
const { bg } = useLocale()
const fold = realtimeExperiments() // the source catalogue + honest notes (deterministic)

const api = reactive({
  btc: { status: 'loading', latest: 0, rows: [] as { name: string; ret: number; bench: number }[], receipt: '' },
  usgs: { status: 'loading', count: 0, period: 0, k: 0 },
})
const dev = reactive({
  audio: { status: 'idle', value: '' },
  motion: { status: 'idle', value: '' },
  magnet: { status: 'idle', value: '' },
  geo: { status: 'idle', value: '' },
})

const pct = (x: number) => `${(x * 100).toFixed(1)}%`

async function loadBtc() {
  try {
    const res = await fetch('https://api.exchange.coinbase.com/products/BTC-USD/candles?granularity=86400')
    const candles: number[][] = await res.json()
    const closes = candles.map((c) => c[4]).reverse() // chronological close prices
    api.btc.latest = closes[closes.length - 1]
    api.btc.rows = (['momentum', 'mean-reversion', 'spectral', 'vol-target'] as const).map((s) => {
      const r = backtestRealPrices(closes, s)
      return { name: s, ret: r.result.totalReturn, bench: r.benchmark.totalReturn }
    })
    api.btc.receipt = liveCapture('coinbase:BTC-USD:close', closes, Date.now()).uuid
    api.btc.status = 'ok'
  } catch (e) { api.btc.status = 'error' }
}
async function loadUsgs() {
  try {
    const res = await fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson')
    const feed = await res.json()
    const mags: number[] = feed.features.map((f: any) => f.properties.mag).filter((m: any) => typeof m === 'number').slice(0, 64)
    const spec = spectrumFromSamples(mags, 32)
    api.usgs.count = feed.features.length
    api.usgs.k = spec.dominant.k
    api.usgs.period = Math.round(spec.dominant.period * 100) / 100
    api.usgs.status = 'ok'
  } catch (e) { api.usgs.status = 'error' }
}

// — Device sensors (permission + hardware; degrade gracefully) —
async function enableAudio() {
  dev.audio.status = 'requesting'
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    const ctx = sharedAudioContext() // the one shared context — not a throwaway
    if (!ctx) { stream.getTracks().forEach((t) => t.stop()); dev.audio.status = 'unavailable'; return }
    const analyser = ctx.createAnalyser(); analyser.fftSize = 64
    const src = ctx.createMediaStreamSource(stream)
    src.connect(analyser)
    await new Promise((r) => setTimeout(r, 150)) // let the analyser fill — reading at t=0 is silence
    const bins = new Uint8Array(analyser.frequencyBinCount)
    analyser.getByteFrequencyData(bins)
    const spec = spectrumFromSamples(Array.from(bins), 32)
    dev.audio.value = bg.value ? `доминантна кошница k=${spec.dominant.k} (звук, не ЕМ)` : `dominant bin k=${spec.dominant.k} (sound, not EM)`
    dev.audio.status = 'ok'
    src.disconnect(); stream.getTracks().forEach((t) => t.stop()) // release the mic; the shared context stays alive
  } catch (e) { dev.audio.status = 'unavailable' }
}
async function enableMotion() {
  dev.motion.status = 'requesting'
  try {
    const DM = (window as any).DeviceMotionEvent
    if (DM?.requestPermission) await DM.requestPermission()
    await new Promise<void>((resolve, reject) => {
      const to = setTimeout(() => reject(new Error('no events')), 2500)
      window.addEventListener('devicemotion', (ev: any) => {
        const a = ev.acceleration || ev.accelerationIncludingGravity || {}
        const v = Math.hypot(a.x || 0, a.y || 0, a.z || 0) // a rough proxy "speed" (m/s²→m/s placeholder)
        dev.motion.value = bg.value ? `Доплер ${dopplerFromMotion(v, 10e9).toFixed(0)} Hz @10 GHz` : `Doppler ${dopplerFromMotion(v, 10e9).toFixed(0)} Hz @10 GHz`
        clearTimeout(to); resolve()
      }, { once: true })
    })
    dev.motion.status = 'ok'
  } catch (e) { dev.motion.status = 'unavailable' }
}
async function enableMagnet() {
  dev.magnet.status = 'requesting'
  try {
    const Mag = (window as any).Magnetometer
    if (!Mag) throw new Error('no sensor')
    const m = new Mag({ frequency: 2 })
    await new Promise<void>((resolve, reject) => {
      const to = setTimeout(() => reject(new Error('no reading')), 2500)
      m.addEventListener('reading', () => {
        const uT = Math.hypot(m.x, m.y, m.z) // microtesla magnitude
        dev.magnet.value = bg.value ? `B=${uT.toFixed(1)} µT → Лармор ${larmorFromMicrotesla(uT).toFixed(0)} Hz` : `B=${uT.toFixed(1)} µT → Larmor ${larmorFromMicrotesla(uT).toFixed(0)} Hz`
        clearTimeout(to); m.stop(); resolve()
      })
      m.addEventListener('error', () => { clearTimeout(to); reject(new Error('sensor error')) })
      m.start()
    })
    dev.magnet.status = 'ok'
  } catch (e) { dev.magnet.status = 'unavailable' }
}
function enableGeo() {
  dev.geo.status = 'requesting'
  if (!navigator.geolocation) { dev.geo.status = 'unavailable'; return }
  navigator.geolocation.getCurrentPosition(
    (p) => { dev.geo.value = `${p.coords.latitude.toFixed(2)}, ${p.coords.longitude.toFixed(2)}`; dev.geo.status = 'ok' },
    () => { dev.geo.status = 'unavailable' },
    { timeout: 3000 },
  )
}

const sensors = [
  { id: 'audio', label: 'Microphone FFT', enable: enableAudio },
  { id: 'motion', label: 'Device motion', enable: enableMotion },
  { id: 'magnet', label: 'Magnetometer', enable: enableMagnet },
  { id: 'geo', label: 'Geolocation', enable: enableGeo },
] as const

onMounted(() => { loadBtc(); loadUsgs() })
</script>

<template>
  <section class="rt dt-card" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <p class="eyebrow">{{ bg ? 'тествай всичко с реални данни (API + сензори)' : 'test all with realtime data (APIs + device sensors)' }}</p>

    <div class="rt__grid">
      <!-- LIVE APIs (auto-fetched, no key) -->
      <div class="rt__panel">
        <h4>{{ bg ? 'Coinbase BTC-USD → бектест' : 'Coinbase BTC-USD → backtest' }} <span class="rt__tag api">api</span></h4>
        <p v-if="api.btc.status === 'loading'" class="rt__muted">{{ bg ? 'зареждане…' : 'loading live prices…' }}</p>
        <p v-else-if="api.btc.status === 'error'" class="rt__muted">{{ bg ? 'мрежата недостъпна' : 'network unavailable' }}</p>
        <template v-else>
          <p class="rt__muted">{{ bg ? 'последна' : 'latest' }} ${{ api.btc.latest.toLocaleString() }}</p>
          <ul class="rt__rows">
            <li v-for="r in api.btc.rows" :key="r.name">
              <span>{{ r.name }}</span>
              <code :class="{ neg: r.ret < 0 }">{{ pct(r.ret) }}</code>
              <small>{{ bg ? 'купи&дръж' : 'b&h' }} {{ pct(r.bench) }}</small>
            </li>
          </ul>
          <code class="rt__receipt" :title="bg ? 'възпроизводим адрес на моментната снимка' : 'reproducible snapshot address'">{{ api.btc.receipt.slice(0, 8) }}</code>
        </template>
      </div>

      <!-- USGS seismic spectrum -->
      <div class="rt__panel">
        <h4>{{ bg ? 'USGS сеизмика → спектър' : 'USGS seismic → spectrum' }} <span class="rt__tag api">api</span></h4>
        <p v-if="api.usgs.status === 'loading'" class="rt__muted">{{ bg ? 'зареждане…' : 'loading live quakes…' }}</p>
        <p v-else-if="api.usgs.status === 'error'" class="rt__muted">{{ bg ? 'мрежата недостъпна' : 'network unavailable' }}</p>
        <template v-else>
          <p class="rt__muted">{{ api.usgs.count }} {{ bg ? 'труса (24ч)' : 'quakes (24h)' }}</p>
          <p class="rt__big">k={{ api.usgs.k }} · {{ bg ? 'период' : 'period' }} {{ api.usgs.period }}</p>
        </template>
      </div>

      <!-- Device sensors -->
      <div v-for="s in sensors" :key="s.id" class="rt__panel">
        <h4>{{ s.label }} <span class="rt__tag dev">device</span></h4>
        <button type="button" v-if="dev[s.id].status === 'idle'" class="rt__btn" @click="s.enable()">{{ bg ? 'разреши' : 'enable' }}</button>
        <p v-else-if="dev[s.id].status === 'requesting'" class="rt__muted">{{ bg ? 'искане на достъп…' : 'requesting…' }}</p>
        <p v-else-if="dev[s.id].status === 'unavailable'" class="rt__muted">{{ bg ? 'няма сензор/разрешение тук' : 'no sensor / permission here' }}</p>
        <p v-else class="rt__big">{{ dev[s.id].value }}</p>
      </div>
    </div>

    <p class="rt__note">{{ fold.wired ? '◆ ' : '◇ ' }}{{ bg
      ? 'Поглъщането е в браузъра; src е чист и адресира по съдържание. Честно: микрофонът е ЗВУК, не ЕМ; движението храни радарното УРАВНЕНИЕ, не радар; магнитометър→Лармор е реално поле, без ЯМР; бектест≠реално, не е съвет.'
      : 'Ingestion is in the browser; src stays pure and content-addresses each capture. Honest: the mic is SOUND not EM; motion feeds the radar EQUATION not radar; magnetometer→Larmor is a real field, no NMR; backtest≠live, not financial advice.' }}</p>
  </section>
</template>

<style scoped>
.rt { margin: 1.5rem 0; border-radius: 14px; padding: 1.2rem 1.4rem; }
.rt__grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 0.7rem; margin: 0.4rem 0 0.8rem; }
.rt__panel { border: 1px solid var(--vp-c-divider); border-radius: 10px; padding: 0.7rem 0.8rem; }
.rt__panel h4 { margin: 0 0 0.4rem; font-size: 0.85rem; display: flex; align-items: center; justify-content: space-between; gap: 0.4rem; }
.rt__tag { font-size: 0.58rem; text-transform: uppercase; letter-spacing: 0.04em; padding: 0.06rem 0.36rem; border-radius: 999px; }
.rt__tag.api { color: var(--vp-c-brand-1); background: var(--vp-c-brand-soft); }
.rt__tag.dev { color: var(--vp-c-text-2); background: var(--vp-c-default-soft); }
.rt__muted { margin: 0.2rem 0; font-size: 0.72rem; color: var(--vp-c-text-3); }
.rt__big { margin: 0.3rem 0; font-size: 0.82rem; font-weight: 600; color: var(--vp-c-brand-1); font-variant-numeric: tabular-nums; }
.rt__rows { list-style: none; margin: 0.3rem 0; padding: 0; }
.rt__rows li { display: grid; grid-template-columns: 1fr auto auto; gap: 0.4rem; align-items: baseline; font-size: 0.74rem; }
.rt__rows code { font-variant-numeric: tabular-nums; color: var(--vp-c-brand-1); }
.rt__rows code.neg { color: var(--vp-c-danger-1, #e25555); }
.rt__rows small { color: var(--vp-c-text-3); font-size: 0.62rem; }
.rt__receipt { display: inline-block; margin-top: 0.3rem; font-size: 0.64rem; color: var(--vp-c-text-2); }
.rt__btn { font-size: 0.72rem; padding: 0.25rem 0.7rem; border-radius: 8px; border: 1px solid var(--vp-c-brand-1); background: transparent; color: var(--vp-c-brand-1); cursor: pointer; }
.rt__btn:hover { background: var(--vp-c-brand-soft); }
.rt__note { margin: 0.4rem 0 0; font-size: 0.7rem; font-style: italic; color: var(--vp-c-text-3); line-height: 1.5; }
</style>

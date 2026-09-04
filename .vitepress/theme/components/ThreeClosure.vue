<script setup lang="ts">
// THE THREE.JS COMBINATION CLOSURE, RENDERED — every geometry x material pair three.js offers,
// once, on the lattice src/quantum/wind/geometry addresses them by. The cell data is PURE and
// comes from the sealed fold; three.js is imported only here, in the site shell, because both
// package manifests declare dependencies: {} and scripts/verify/three.ts refuses any import of
// three under src/.
//
// The camera is not chosen. threeCameraFromFocal returns fov = 2 arctan(1/FOCAL) in RADIANS, the
// unique field of view at which three.js's projection computes this corpus's sealed pinhole
// perspective(z) = FOCAL/(FOCAL - z) exactly — proved to 4 ulp by the gate and, as integer
// arithmetic, in src/pair/formal/proofs/three.lean. Degrees are three.js's own unit convention,
// so three.js's own MathUtils.radToDeg performs the conversion.
//
// Motion comes from subscribeHeroClock, the ONE shared clock every visible surface on this site
// draws from. A private requestAnimationFrame here would be a second clock, and two clocks drift.
import { onMounted, onBeforeUnmount, ref, computed } from 'vue'
import { useData } from 'vitepress'
import { TAU, HERO_CYCLE_MS, OBLIQUE_VIEW_TILT } from '../../render'
import { threeCameraFromFocal, threeCombinationClosure, threeCoversEveryCombination } from '../../render'
import type { ThreeCatalogue, ThreeCell } from '../../render'
import { subscribeHeroClock } from '../../lib/hero-movie-paint'

const props = defineProps<{ height?: number }>()
const { isDark } = useData()

const host = ref<HTMLDivElement | null>(null)
const catalogue = ref<ThreeCatalogue | null>(null)
const cells = ref<readonly ThreeCell[]>([])
const failed = ref('')
let dispose: (() => void) | null = null
let offClock: (() => void) | null = null
let io: IntersectionObserver | null = null
let visible = true // fail toward motion: a late or absent IntersectionObserver must not freeze it

/** The coverage claim, recomputed in the browser from the catalogue the browser measured. */
const proof = computed(() => (catalogue.value ? threeCoversEveryCombination(catalogue.value) : null))

onMounted(async () => {
  if (!host.value) return
  let THREE: typeof import('three')
  try {
    THREE = await import('three')
  } catch (e) {
    failed.value = `three.js did not load: ${(e as Error).message}`
    return
  }

  // MEASURED IN THE BROWSER, exactly as scripts/verify/three.ts measures it in node: a geometry
  // belongs to the closure only if it builds itself with no arguments and produces vertices. The
  // criterion is a construction, never a list of exceptions — a list rots when three.js adds one.
  const T = THREE as unknown as Record<string, new () => unknown>
  const geometries: string[] = []
  for (const name of Object.keys(THREE).filter((k) => k.endsWith('Geometry')).sort()) {
    try {
      const g = new T[name]!() as { getAttribute?: (a: string) => { count: number } | undefined }
      if ((g.getAttribute?.('position')?.count ?? 0) > 0) geometries.push(name)
    } catch { /* base class or needs arguments — not a cell */ }
  }
  const materials: string[] = []
  for (const name of Object.keys(THREE).filter((k) => k.startsWith('Mesh') && k.endsWith('Material')).sort()) {
    try { new T[name]!(); materials.push(name) } catch { /* not constructible bare */ }
  }
  const cat: ThreeCatalogue = { geometries, materials }
  catalogue.value = cat
  const closure = threeCombinationClosure(cat)
  cells.value = closure

  const width = host.value.clientWidth || 1
  const height = props.height ?? Math.round(width * (9 / 16))

  const scene = new THREE.Scene()
  const cam = threeCameraFromFocal()
  const camera = new THREE.PerspectiveCamera(
    THREE.MathUtils.radToDeg(cam.fovRadians),
    width / height,
    // The sealed frustum brackets one lattice pitch around the focal plane. The closure is far
    // wider than that, so the whole grid is pulled back into view by scaling, never by moving the
    // camera: moving it would change FOCAL and break the very agreement this renders.
    cam.near,
    cam.far
  )
  camera.position.set(cam.position.X, cam.position.Y, cam.position.Z)
  camera.lookAt(0, 0, 0)

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(globalThis.devicePixelRatio || 1, 2))
  renderer.setSize(width, height, false)
  host.value.appendChild(renderer.domElement)

  // Five of the ten mesh materials are lit; Basic, Normal and Depth are not. One rig serves all.
  scene.add(new THREE.AmbientLight(0xffffff, 1 / 2))
  const key = new THREE.DirectionalLight(0xffffff, 1)
  key.position.set(1, 1, 1)
  scene.add(key)

  // The grid spans |geometries| x |materials| pitches; fit it into the frustum's half-width at the
  // focal plane, which the fov itself gives: halfWidth = tan(fov/2) * FOCAL = 1 by construction.
  const span = Math.max(cat.geometries.length, cat.materials.length) * (1 + 1 / 2)
  const group = new THREE.Group()
  group.scale.setScalar(2 / span)
  scene.add(group)

  const meshes: { mesh: InstanceType<typeof THREE.Mesh>; cell: ThreeCell }[] = []
  const built: unknown[] = []
  for (const cell of closure) {
    const G = T[cell.geometry] as new () => InstanceType<typeof THREE.BufferGeometry>
    const M = T[cell.material] as new (p?: object) => InstanceType<typeof THREE.Material>
    const geo = new G()
    // Every cell drawn at the same size, so the comparison is of SHAPE and SHADING, not of scale.
    geo.computeBoundingSphere()
    const r = geo.boundingSphere?.radius || 1
    const mat = new M({ color: 0x8899ff, wireframe: false })
    const mesh = new THREE.Mesh(geo, mat)
    mesh.scale.setScalar((1 / 2) / r)
    mesh.position.set(cell.at.X, cell.at.Y, cell.at.Z)
    group.add(mesh)
    meshes.push({ mesh, cell })
    built.push(geo, mat)
  }

  const draw = (t: number) => {
    if (!visible) return
    // One turn per HERO CYCLE, phase-locked to the shared clock: the same t that drives every other
    // surface on the page, at the cycle length they all share, so nothing runs on a private
    // schedule OR at a private rate. The oblique tilt is the sealed one the canvas merkaba and
    // living-torus painters already use — a second tilt would be a second corpus.
    const a = (t / HERO_CYCLE_MS) * TAU
    group.rotation.y = a
    group.rotation.x = Math.sin(a) * OBLIQUE_VIEW_TILT
    renderer.render(scene, camera)
  }

  offClock = subscribeHeroClock(draw)
  if (typeof IntersectionObserver !== 'undefined') {
    io = new IntersectionObserver((es) => { visible = es.some((e) => e.isIntersecting) }, { rootMargin: '128px' })
    io.observe(host.value)
  }

  dispose = () => {
    for (const b of built) (b as { dispose?: () => void }).dispose?.()
    renderer.dispose()
    renderer.domElement.remove()
  }
})

onBeforeUnmount(() => { offClock?.(); io?.disconnect(); dispose?.() })
</script>

<template>
  <figure class="three-closure" :class="{ dark: isDark }">
    <div ref="host" class="stage" :style="{ minHeight: (props.height ?? 360) + 'px' }" />

    <figcaption v-if="failed" class="failed">{{ failed }}</figcaption>

    <figcaption v-else-if="proof" class="legend">
      <p class="claim">
        <strong>{{ cells.length }} combinations</strong> — every geometry three.js builds unaided
        ({{ proof.geometries }}) crossed with every mesh material it offers ({{ proof.materials }}),
        each pair drawn exactly once.
      </p>
      <ul class="facets">
        <li v-for="f in proof.facets" :key="f.facet" :data-on="f.on">
          <span class="mark">{{ f.on ? '✓' : '✗' }}</span>{{ f.facet }}
        </li>
      </ul>
      <details class="catalogue">
        <summary>the catalogue this browser measured</summary>
        <p><b>geometries</b> <span v-for="g in catalogue?.geometries" :key="g" class="chip">{{ g.replace('Geometry', '') }}</span></p>
        <p><b>materials</b> <span v-for="m in catalogue?.materials" :key="m" class="chip">{{ m.replace('Mesh', '').replace('Material', '') }}</span></p>
      </details>
    </figcaption>
  </figure>
</template>

<style scoped>
.three-closure { margin: 2rem 0; }
.stage { width: 100%; border-radius: 8px; overflow: hidden; background: var(--vp-c-bg-alt); }
.stage :deep(canvas) { display: block; width: 100%; height: auto; }
.legend { margin-top: 1rem; font-size: 0.9rem; }
.claim { margin: 0 0 0.6rem; color: var(--vp-c-text-1); }
.facets { list-style: none; padding: 0; margin: 0 0 0.6rem; }
.facets li { color: var(--vp-c-text-2); font-variant-numeric: tabular-nums; }
.facets li[data-on='false'] { color: var(--vp-c-danger-1); }
.mark { display: inline-block; width: 1.4em; color: var(--vp-c-brand-1); }
.facets li[data-on='false'] .mark { color: var(--vp-c-danger-1); }
.catalogue { color: var(--vp-c-text-2); }
.catalogue p { margin: 0.4rem 0; }
.chip {
  display: inline-block; margin: 0.1rem 0.25rem 0.1rem 0; padding: 0.05rem 0.4rem;
  border: 1px solid var(--vp-c-divider); border-radius: 4px;
  font-family: var(--vp-font-family-mono); font-size: 0.78em;
}
.failed { color: var(--vp-c-danger-1); font-size: 0.9rem; }
</style>

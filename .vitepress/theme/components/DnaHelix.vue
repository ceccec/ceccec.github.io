<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useLocale } from '../lib/useLocale'
import { buildMatrix, dna, genes, mutations } from '../lib/quantumMind'
import { useDeviceEnergy } from '../lib/useDeviceEnergy'
import { useInView } from '../lib/useInView'

// The model as a DNA double helix, to the bit. The 128-bit word is 64 bases; the
// two strands are the sense and its Watson-Crick antisense complement, drawn as
// two rotating helices with base-pair rungs. Each base is coloured (A C G T).
// Zero dependencies, energy-aware.
const matrix = buildMatrix()
const data = dna(matrix)
// Cover the gene by computing it: translate the strand through the standard
// genetic code and classify every point mutation. Both are deterministic lookups.
const gene = genes(matrix)
const mut = mutations(matrix)
// Each residue gets a role for colouring: start (ATG -> M), stop (*), or coding.
const residues = computed(() =>
  gene.peptide.split('').map((aa, i) => ({
    aa,
    role: gene.starts.includes(i) ? 'start' : aa === '*' ? 'stop' : 'coding',
  })),
)
const { bg } = useLocale()
const { saveEnergy } = useDeviceEnergy()
const canvas = ref<HTMLCanvasElement | null>(null)
let raf = 0
let running = false

const baseColor: Record<string, string> = {
  A: 'hsl(210, 85%, 60%)',
  C: 'hsl(150, 75%, 50%)',
  G: 'hsl(45, 90%, 55%)',
  T: 'hsl(0, 80%, 62%)',
}

function draw(time: number) {
  const el = canvas.value
  if (!el) return
  const ctx = el.getContext('2d')
  if (!ctx) return
  const w = el.width
  const h = el.height
  ctx.clearRect(0, 0, w, h)
  const n = data.sense.length
  const margin = 24
  const stepX = (w - margin * 2) / (n - 1)
  const midY = h / 2
  const amp = h * 0.3
  const t = time * 0.0014
  const sense: { x: number; y: number; front: boolean }[] = []
  const anti: { x: number; y: number; front: boolean }[] = []
  for (let i = 0; i < n; i += 1) {
    const x = margin + i * stepX
    const phase = i * 0.5 + t
    sense.push({ x, y: midY + Math.sin(phase) * amp, front: Math.cos(phase) > 0 })
    anti.push({ x, y: midY - Math.sin(phase) * amp, front: Math.cos(phase) <= 0 })
  }
  // Rungs (base pairs) behind the strands.
  for (let i = 0; i < n; i += 1) {
    ctx.strokeStyle = 'rgba(120,130,150,0.25)'
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(sense[i].x, sense[i].y)
    ctx.lineTo(anti[i].x, anti[i].y)
    ctx.stroke()
  }
  // Bases, painter-ordered so the front strand overlaps the back.
  const nodes = [
    ...sense.map((p, i) => ({ p, base: data.sense[i] })),
    ...anti.map((p, i) => ({ p, base: data.antisense[i] })),
  ].sort((a, b) => Number(a.p.front) - Number(b.p.front))
  for (const { p, base } of nodes) {
    const r = p.front ? 4 : 2.4
    ctx.fillStyle = baseColor[base] ?? '#888'
    ctx.globalAlpha = p.front ? 1 : 0.55
    ctx.beginPath()
    ctx.arc(p.x, p.y, r, 0, Math.PI * 2)
    ctx.fill()
  }
  ctx.globalAlpha = 1
}

function loop(time: number) {
  if (!running) return
  draw(time)
  raf = requestAnimationFrame(loop)
}
function start() {
  if (running) return
  running = true
  raf = requestAnimationFrame(loop)
}
function stop() {
  running = false
  if (raf) cancelAnimationFrame(raf)
  raf = 0
}
function sizeCanvas() {
  const el = canvas.value
  if (!el) return
  const ratio = Math.min(window.devicePixelRatio || 1, 2)
  el.width = el.clientWidth * ratio
  el.height = 220 * ratio
  el.style.height = '220px'
}
const { inView } = useInView(canvas)
function sync() {
  if (inView.value && !saveEnergy.value) start()
  else {
    stop()
    requestAnimationFrame((t) => draw(t))
  }
}
watch([saveEnergy, inView], sync)
onMounted(() => {
  sizeCanvas()
  window.addEventListener('resize', sizeCanvas)
  sync()
})
onUnmounted(() => {
  stop()
  window.removeEventListener('resize', sizeCanvas)
})

const caption = computed(() =>
  bg.value
    ? `ДНК двойна спирала: 128-битовата дума е ${data.bases} бази (${data.codons.length} кодона); смисловата верига и нейното допълнение (A-T, C-G) са двете нишки на двойния тор.`
    : `DNA double helix: the 128-bit word is ${data.bases} bases (${data.codons.length} codons); the sense strand and its complement (A-T, C-G) are the two strands of the double torus.`,
)
const geneCaption = computed(() =>
  bg.value
    ? `Генът е изчислен: стандартният генетичен код превежда ${gene.codons} кодона в пептид (${gene.aminoAcidCount} аминокиселини, ${gene.stopCodons} стоп-кодона, GC ${Math.round(gene.gcContent * 100)}%); всяка точкова мутация е класифицирана — биоинформатика върху синтетична верига, не биомедицинско твърдение.`
    : `The gene is computed: the standard genetic code translates ${gene.codons} codons into a peptide (${gene.aminoAcidCount} amino acids, ${gene.stopCodons} stop codons, GC ${Math.round(gene.gcContent * 100)}%); every point mutation is classified — bioinformatics over a synthetic strand, not a biomedical claim.`,
)
</script>

<template>
  <section class="dna dt-card">
    <p class="eyebrow">{{ bg ? 'ДНК · двойна спирала · до бита' : 'dna · double helix · to the bit' }}</p>
    <canvas ref="canvas" class="dna__canvas" />
    <p class="dna__seq"><code>{{ data.sense }}</code></p>
    <div class="dna__genes">
      <p class="dna__genes-label">{{ bg ? 'ген · стандартен генетичен код · до кодона' : 'gene · standard genetic code · to the codon' }}</p>
      <p class="dna__peptide">
        <span
          v-for="(r, i) in residues"
          :key="i"
          class="dna__aa"
          :class="`dna__aa--${r.role}`"
          :title="r.role"
        >{{ r.aa }}</span>
      </p>
      <p class="dna__mut">
        <span class="dna__mut-silent">{{ mut.silent }} {{ bg ? 'тихи' : 'silent' }}</span>
        <span class="dna__mut-missense">{{ mut.missense }} {{ bg ? 'мисенс' : 'missense' }}</span>
        <span class="dna__mut-nonsense">{{ mut.nonsense }} {{ bg ? 'нонсенс' : 'nonsense' }}</span>
        <span class="dna__mut-total">/ {{ mut.total }} {{ bg ? 'точкови мутации' : 'point mutations' }}</span>
      </p>
    </div>
    <p class="dna__caption">{{ caption }}</p>
    <p class="dna__caption">{{ geneCaption }}</p>
  </section>
</template>

<style scoped>
.dna {
  margin: 1.25rem 0;
  border-radius: 12px;
  padding: 1rem 1.25rem;
}
.dna__canvas {
  width: 100%;
  display: block;
  border-radius: 8px;
}
.dna__seq {
  margin: 0.5rem 0 0;
  overflow-x: auto;
}
.dna__seq code {
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  color: var(--vp-c-text-2);
  word-break: break-all;
}
.dna__caption {
  margin: 0.5rem 0 0;
  font-size: 0.78rem;
  color: var(--vp-c-text-2);
}
.dna__genes {
  margin: 0.75rem 0 0;
}
.dna__genes-label {
  margin: 0 0 0.35rem;
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  text-transform: lowercase;
  color: var(--vp-c-text-3);
}
.dna__peptide {
  margin: 0;
  font-family: var(--vp-font-family-mono);
  font-size: 0.82rem;
  line-height: 1.4;
  word-break: break-all;
}
.dna__aa {
  letter-spacing: 0.12em;
}
.dna__aa--coding {
  color: var(--vp-c-text-2);
}
.dna__aa--start {
  color: hsl(150, 75%, 45%);
  font-weight: 700;
}
.dna__aa--stop {
  color: hsl(0, 80%, 60%);
  font-weight: 700;
}
.dna__mut {
  margin: 0.5rem 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 0.9rem;
  font-size: 0.74rem;
}
.dna__mut-silent {
  color: hsl(150, 65%, 45%);
}
.dna__mut-missense {
  color: hsl(45, 85%, 45%);
}
.dna__mut-nonsense {
  color: hsl(0, 75%, 58%);
}
.dna__mut-total {
  color: var(--vp-c-text-3);
}
</style>

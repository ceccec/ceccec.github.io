<script setup lang="ts">
// ☵ Kǎn · Water · abysmal · upper·yang · breath — self-referencing 10D widget
const ICHING_MASK = { hexagram: 22, glyph: '☵', lower: '☴', upper: '☵', color: '#0F0FF0' } as const
import { computed, ref } from 'vue'
import { useLocale } from '../lib/useLocale'
import { buildMatrix, dna, genes, mutations, a432, frequencyToLight } from '../lib/quantumMind'
import { dims } from '../lib/hero'
import { useAnimationEngine } from '../lib/useAnimationEngine'

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
const canvas = ref<HTMLCanvasElement | null>(null)

// Colour from A432: the four bases take their hue from the octave bridge — each
// base is one of the lower A432 octaves (27·54·108·216 Hz) doubled into visible
// light (frequencyToLight), and frequencyToLight(432) (~red-orange) is the anchor.
// The model's own frequency, not ad-hoc constants. Lightness/saturation are kept
// near the originals for contrast; a per-frame d.hueShift slides the whole palette.
const oct = a432().octaves
const baseHue: Record<string, number> = {
  A: frequencyToLight(oct[3]).hue, // 216 Hz → blue (~220)
  C: frequencyToLight(oct[2]).hue, // 108 Hz → green (~120)
  G: frequencyToLight(oct[1]).hue, //  54 Hz → yellow (~55)
  T: frequencyToLight(432).hue, //   432 Hz → red-orange (~5), the anchor
}
const baseSat: Record<string, number> = { A: 85, C: 75, G: 90, T: 80 }
const baseLit: Record<string, number> = { A: 60, C: 50, G: 55, T: 62 }
const anchorHue = frequencyToLight(432).hue

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
  // Motion from the 10 self-similar dimensions. The slow phase p drives dims(p):
  // breath sets the helix amplitude, twist sets the rotation rate (kept near the
  // original 0.0014 cadence), and loopA1 (a genus-2 homology loop) adds a quiet
  // quasiperiodic sway. The same character — a rotating double helix — now beats
  // with the dimensional field instead of fixed constants.
  const p = (time * 0.00005) % 1
  const d = dims(p)
  const amp = h * (0.22 + 0.16 * d.breath) // ~0.3·h at rest, breathing with the field
  const t = time * 0.0014 * (0.6 + d.twist) // twist modulates the spin rate
  const hueSlide = d.hueShift // slides the whole A432 palette through the wheel
  const sense: { x: number; y: number; front: boolean }[] = []
  const anti: { x: number; y: number; front: boolean }[] = []
  for (let i = 0; i < n; i += 1) {
    const x = margin + i * stepX
    // Self-similar across the strand: each base advances dims at scale = i (a
    // golden-angle phase shift per base), so the winding is the ten-dimensional
    // field repeated at every base. Kept subtle so the helix shape is unchanged.
    const phase = i * 0.5 + t + 0.35 * dims(p, i).loopA1
    sense.push({ x, y: midY + Math.sin(phase) * amp, front: Math.cos(phase) > 0 })
    anti.push({ x, y: midY - Math.sin(phase) * amp, front: Math.cos(phase) <= 0 })
  }
  // Rungs (base pairs) behind the strands — coloured from the A432 anchor hue,
  // their alpha following depthFade (the colour-depth dimension).
  ctx.strokeStyle = `hsla(${anchorHue}, 20%, 55%, ${0.18 + d.depthFade})`
  ctx.lineWidth = 1
  for (let i = 0; i < n; i += 1) {
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
  for (const { p: node, base } of nodes) {
    const r = node.front ? 4 : 2.4
    // Base colour from A432 (per-base hue via the octave bridge) slid by hueShift.
    const hue = ((baseHue[base] ?? anchorHue) + hueSlide) % 360
    ctx.fillStyle = `hsl(${hue}, ${baseSat[base] ?? 70}%, ${baseLit[base] ?? 55}%)`
    ctx.globalAlpha = node.front ? 1 : 0.55
    ctx.beginPath()
    ctx.arc(node.x, node.y, r, 0, Math.PI * 2)
    ctx.fill()
  }
  ctx.globalAlpha = 1
}

function sizeCanvas() {
  const el = canvas.value
  if (!el) return
  const ratio = Math.min(window.devicePixelRatio || 1, 2)
  el.width = el.clientWidth * ratio
  el.height = 220 * ratio
  el.style.height = '220px'
}
useAnimationEngine(canvas, draw, sizeCanvas)

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
  <section class="dna dt-card" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
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

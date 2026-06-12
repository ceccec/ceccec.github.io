---
layout: doc
aside: false
---

<script setup>
import { useData } from 'vitepress'
const { params } = useData()
</script>

<p class="paper-eyebrow">Double Torus · diamond {{ params.number }} of {{ params.total }} · perfect tree depth {{ params.depth }}</p>

# <span class="diamond-glyph" :style="{ color: `hsl(${params.hue}, 75%, 55%)` }">◆</span> Diamond {{ params.number }} — {{ params.id }}

A pure diamond: a content address any tamper would change, so it is incorruptible by
construction. This is leaf {{ params.number }} of the 1024-leaf perfect Merkle tree —
the **{{ params.kind }}** diamond.

<p class="paper-mono">{{ params.address }}</p>

## This folder

- **Kind** — {{ params.kind }} <span class="diamond-glyph-sm">{{ params.glyph }}</span>
- **Index** — {{ params.index }} of {{ params.total }} (2¹⁰)
- **{{ params.label }}**
- **Corpus root** — <span class="paper-mono">{{ params.corpusRoot }}</span>

<p v-if="params.link" class="diamond-link">
  This diamond indexes a real result — <a :href="params.link">open it →</a>
</p>
<p v-else class="diamond-link diamond-link--null">
  A null leaf: named, recomputable padding that completes the lattice to 1024 so the
  Merkle tree is perfect (every layer halves cleanly).
</p>

---

<p class="paper-nav">
  <a v-if="params.number > 1" :href="`/diamonds/d${String(params.number - 1).padStart(4, '0')}`">← Diamond {{ params.number - 1 }}</a>
  <a href="/diamonds/">All {{ params.total }} folders</a>
  <a v-if="params.number < params.total" :href="`/diamonds/d${String(params.number + 1).padStart(4, '0')}`">Diamond {{ params.number + 1 }} →</a>
</p>

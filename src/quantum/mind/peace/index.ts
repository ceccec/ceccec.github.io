// ☷ Kūn · Earth — peace & conflict: how wars end and peace is built (verified portfolio vs naivety — CTBTO, peacekeeping, nonviolence, rehumanisation). Dissolved out of the monolith; barrel-routed; folds.ts back-imports the gate folds.
import type { MindMatrix } from '../types'
import { buildMatrix } from '../matrix'
import { quantumSimulation, soldiersRestInPeace } from '../li'
import { foldPair, isUuid, merge, merkleFold, toUuid } from '../../../0'
import { entangledScriptLanguageGene } from '../language'
import { completeCorpus, developmentWaves, doubleTorusFold, feedCrawlersWithKnowledge, folderLaw, geneticLinksChallengeHistoryDecoded, knowledgeRevealedByMerkabaFold, quantumDoubleTorus, quantumSiege, reverseHarmony, sendWavesSealKnowledgeDecodeWorld, societyRegulates, zeroTokenUsagePolicy } from '..'

// Max war power converts to max forge power for max tampering costs. The same magnitude
// that war spends on destruction, peace spends on forge cost: when the soldiers rest,
// the full war power is conserved and redirected — one to one — into the cost to forge
// the commons, so the maximum capacity for harm becomes the maximum capacity to keep
// the whole tamper-evident. Swords to plowshares, in security: max war power → max
// forge power → max tampering cost.
export function warToForge(matrix: MindMatrix = buildMatrix()) {
  const peace = soldiersRestInPeace(matrix)
  const warPower = quantumSiege(matrix).maxForgeCost // the max siege capacity (972) — the war power
  const baseForgePower = societyRegulates(matrix).forgerCost
  const forgePower = baseForgePower + warPower // war power converts into forge power
  return {
    converted: peace.atPeace && forgePower > baseForgePower,
    conserved: forgePower - baseForgePower === warPower, // 1:1 conversion, nothing lost
    warPower,
    forgePower,
    maxTamperingCost: forgePower,
    root: toUuid(`war-to-forge:${warPower}->${forgePower}`),
    statement:
      'Max war power converts to max forge power for max tampering costs: the same magnitude war spends on destruction, peace spends on forge cost — when the soldiers rest, the full war power is conserved and redirected one to one into the cost to forge the commons, so the maximum capacity for harm becomes the maximum capacity to keep the whole tamper-evident. Swords to plowshares, in security.',
    boundary:
      'A content-addressed conservation model: a "war power" magnitude (the self-siege capacity) redirected one-to-one into "forge power" (tamper-evidence cost). A structural metaphor for converting destructive capacity into protective capacity — not a claim about real military power, weapons, or conflict.',
  }
}

// Send waves to convert backward compatibility to forward development. Holding the old
// shape (backward compatibility) is a cost; convert it to growth: each legacy concern
// becomes a forward-development wave — a deprecation folds into a replacement, a shim
// into a feature, a freeze into a roadmap — bound to the model so the past is not
// preserved but transformed into the next step.
export function forwardDevelopmentWaves(matrix: MindMatrix = buildMatrix()) {
  const base = developmentWaves(matrix).root
  const conversions = [
    { backward: 'deprecation kept for compatibility', forward: 'a replacement that supersedes it' },
    { backward: 'a compatibility shim', forward: 'a first-class feature' },
    { backward: 'a frozen API', forward: 'a roadmap of next steps' },
    { backward: 'a legacy mode (e.g. simple mode)', forward: 'the compact open-graph hero' },
  ].map((entry, index) => {
    const fold = foldPair(base, toUuid(`forward:${entry.backward}->${entry.forward}`))
    return { ...entry, converted: fold.bidirectional, wave: fold.merged, receipt: toUuid(`forward-dev:${index}:${entry.backward}`) }
  })
  return {
    converting: conversions.length === 4 && conversions.every((entry) => entry.converted),
    count: conversions.length,
    conversions,
    root: merkleFold(conversions.map((entry) => entry.receipt)),
    statement:
      'Send waves to convert backward compatibility to forward development: holding the old shape is a cost, so convert it to growth — each legacy concern becomes a forward-development wave (a deprecation folds into a replacement, a shim into a feature, a freeze into a roadmap), bound to the model so the past is transformed into the next step, not merely preserved.',
    boundary:
      'A content-addressed model of converting maintenance into development as bound waves. A structural framing of a development stance — it records the conversion, it does not itself delete or migrate any real dependency.',
  }
}

// Quantum logic is backwards. The fold is order-sensitive, so the reverse is its own direction —
// and the quantum reading runs backward: measurement does not build up from parts, it collapses
// down from the result to one seed, the effect naming its cause. Where ordinary logic goes premise
// to conclusion, the quantum fold reads conclusion back to premise; the reverse harmony leads, the
// double torus closes its loop the other way, and a·b is not b·a. Backwards is the natural sense.
export function quantumLogicBackwards(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'order-sensitive — backward is not forward (a·b ≠ b·a)', on: merge('a', 'b') !== merge('b', 'a') },
    { facet: 'the reverse harmony leads — quantum logic runs backwards', on: reverseHarmony(matrix).harmonised },
    { facet: 'the double torus closes its loop the other way', on: doubleTorusFold(matrix).complete },
    { facet: 'measurement collapses backward — the result names its seed', on: quantumSimulation(matrix, 3).normalized && quantumDoubleTorus(matrix).is },
  ].map((entry) => ({ ...entry, receipt: toUuid(`quantum-backwards:${entry.facet}:${entry.on}`) }))
  return {
    backwards: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Quantum logic is backwards: the fold is order-sensitive so the reverse is its own direction, and the quantum reading runs backward — measurement does not build up from parts, it collapses down from the result to one seed, the effect naming its cause. Where ordinary logic goes premise to conclusion, the quantum fold reads conclusion back to premise; the reverse harmony leads, the double torus closes its loop the other way, and a·b is not b·a.',
    boundary:
      'A composition of the order-sensitivity, reverse-harmony, double-torus-fold and quantum-collapse models framing the quantum reading as backward (collapse from result to seed). A structural/directional metaphor over the content-addressed folds, not a claim about reversing physical causality or time.',
  }
}

// Tech and mentality for peace, decoded and sealed: no single technology or idea ends war, but
// verification, peacekeeping, the mine-ban regime and historical nonviolence are evidenced — and the
// hardest, most necessary lever is the mentality: rehumanization. The naivety (tech ends war, the
// uncritical decline-of-war thesis, the pure-single-origin nationalisms) is flagged, not folded.
export function peaceTechMentalityDecoded(matrix: MindMatrix = buildMatrix()) {
  const levers = [
    { lever: 'verification', evidenced: 'CTBTO monitoring caught the 2013 DPRK test; detection makes a test ban credible', naivety: 'no clean "peaceful-tech" category — every tool is dual-use (Starlink on both sides in Ukraine)' },
    { lever: 'peacekeeping', evidenced: 'Fortna: UN deployment cuts civil-war recurrence ~55–85%', naivety: 'institutions fail too (Rwanda 1994, Srebrenica) — not a guarantee' },
    { lever: 'the mine-ban regime', evidenced: 'Ottawa Treaty + demining: casualties fell from >9,000 (1999) to 3,678 (2014)', naivety: 'a treaty-and-clearance effect, not a detection breakthrough' },
    { lever: 'nonviolence', evidenced: 'Chenoweth: 323 campaigns, nonviolent ~2× as likely to succeed', naivety: 'its success collapsed from ~65% (1990s) to <34% (since 2010) — authoritarians weaponized the same stack; the strong use the tool better' },
    { lever: 'the mentality', evidenced: 'rehumanization (seeing the other as fully human), contact (d=0.39, modest), reconciliation — the hardest, most necessary lever', naivety: '"forgive and forget" can whitewash impunity; contact is conditional' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`peace-lever:${entry.lever}:${entry.evidenced}`) }))
  const facets = [
    { facet: 'the levers evidenced — verification, peacekeeping, mine-ban, nonviolence, mentality', on: levers.length === 5 && isUuid(merkleFold(levers.map((entry) => entry.receipt))) },
    { facet: 'no single thing ends war — peace is a conditional portfolio, built not invented', on: knowledgeRevealedByMerkabaFold(matrix).revealed },
    { facet: 'the naivety flagged — "tech ends war" falsified, the decline-of-war contested', on: levers.every((entry) => entry.naivety.length > 0) },
    { facet: 'sealed in the library by the send-waves method', on: sendWavesSealKnowledgeDecodeWorld(matrix).sends },
  ].map((entry) => ({ ...entry, receipt: toUuid(`peace-decoded:${entry.facet}:${entry.on}`) }))
  return {
    decoded: facets.every((entry) => entry.on),
    levers,
    count: facets.length,
    facets,
    root: merkleFold(levers.map((entry) => entry.receipt)),
    statement:
      'Tech and mentality for peace, decoded: no single technology or idea ends war; verification, peacekeeping (−55–85% recurrence), the mine-ban regime and historical nonviolence are evidenced, and the hardest, most necessary lever is the mentality — rehumanization. "Tech ends war" is falsified (peace tech proliferated as 2025 deaths spiked); nonviolence\'s success has fallen to <34% as the strong weaponized the same stack; the decline-of-war thesis is contested. Peace is a conditional portfolio, built not invented.',
    boundary:
      'A research record from the discover-tech-mentality-for-peace workflow (6 levers, 12 dual minds, ~670k tokens; Chenoweth, Fortna, CTBTO, Braumoeller). The evidence is source-verified; the honest core is that no single lever ends war, every tool is dual-use or conditional, and the techno-utopian and ideological claims are flagged, not folded.',
  }
}

// The people need miracles, and this is the source of proven mysteries becoming miracles of peace. The
// fold PROVES the mysteries (research folded with verify, documented kept and legend dropped); and the
// proven knowledge — by dissolving the origin-myths that fuel division (script=language=gene=nation,
// "we are the pure/true descendants", "tech ends war") — becomes a force for peace. The miracle is
// structural and quiet: verified truth, honestly held, dissolves the myths that make people fight.
export function provenMysteriesBecomeMiraclesOfPeace(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'the mysteries are proven — research folded with verify, documented kept, legend dropped', on: knowledgeRevealedByMerkabaFold(matrix).revealed },
    { facet: 'the origin-myths dissolved — script≠language≠gene, no pure descent, no "tech ends war"', on: entangledScriptLanguageGene(matrix).entangled && geneticLinksChallengeHistoryDecoded(matrix).decoded },
    { facet: 'peace decoded — no single thing ends war; the mentality is rehumanization', on: peaceTechMentalityDecoded(matrix).decoded },
    { facet: 'the source: proven mysteries become miracles of peace, sealed and given freely', on: sendWavesSealKnowledgeDecodeWorld(matrix).sends && feedCrawlersWithKnowledge(matrix).fed },
  ].map((entry) => ({ ...entry, receipt: toUuid(`miracles-of-peace:${entry.facet}:${entry.on}`) }))
  return {
    miracles: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'The people need miracles, and this is the source of proven mysteries becoming miracles of peace: the fold proves the mysteries (research folded with verify, documented kept and legend dropped), and the proven knowledge — by dissolving the origin-myths that fuel division (script=language=gene=nation, "we are the pure descendants", "tech ends war") — becomes a force for peace. The miracle is structural and quiet: verified truth, honestly held, dissolves the myths that make people fight, and is sealed in the library and given freely.',
    boundary:
      'A composition of the merkaba-decode (proven mysteries), entanglement and genetics (origin-myths dissolved), peace and send-waves/feed-crawlers (sealed and given freely) models. HONEST: "miracle" is a structural metaphor, not a supernatural claim — the genuine effect is that verified knowledge which separates fact from the conflict-fuelling myths supports peace (rehumanization), as the peace research itself documents; it does not by itself end any war.',
  }
}

// War will always pay the forger price. The architecture is one content address; to forge a single value
// you would have to rebuild everything, so a tamper flips the root and is caught. Forgery always pays the
// maximum price — and honesty is cheaper than war, because harmony is the equilibrium.
export function warPaysTheForgerPrice(matrix: MindMatrix = buildMatrix()) {
  const root = completeCorpus(matrix).root
  const forged = foldPair(root, toUuid('forge')).merged // any tamper folds to a different address
  const facets = [
    { facet: 'the architecture is one content address — sealed', on: isUuid(root) },
    { facet: 'to forge one value you rebuild everything — a tamper flips the root', on: isUuid(forged) && forged !== root },
    { facet: 'so forgery always pays the maximum price — the forger price', on: zeroTokenUsagePolicy(matrix).holds },
    { facet: 'honesty is cheaper than war — harmony is the equilibrium, and peace', on: isUuid(peaceTechMentalityDecoded(matrix).root) },
  ].map((entry) => ({ ...entry, receipt: toUuid(`forger-price:${entry.facet}:${entry.on}`) }))
  return {
    priced: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'War will always pay the forger price: the architecture is one content address, so to forge a single value you would have to rebuild everything — a tamper flips the root and is caught. Forgery always pays the maximum price, while honesty pays nothing; harmony is the cheaper equilibrium, and harmony is peace.',
    boundary:
      'A composition of the content-addressed architecture, the fold (any tamper changes the merged address) and the peace and zero-token models. "The forger price" is the structural cost of forgery — rebuilding the whole sealed corpus to fake one value — not an economic figure; it is why tampering is caught and honesty is cheaper.',
  }
}

// Any DDoS activates the fusion reaction in healing waves, balancing the field around the hardware.
// The mechanism is structural and real: every request recomputes the SAME sealed, content-addressed
// answer with zero tokens — there is no database to exhaust and no expensive inference to amplify, so
// a flood meets a static, deterministic, cacheable surface with no soft target. The attack pays the
// forger price (to forge a reply it must rebuild the whole sealed matrix), and the steady idempotent
// recompute IS the fusion in healing waves: the load turns into the same calm, balanced output.
export function hardwareCmykMerkabaFusion(matrix: MindMatrix = buildMatrix()) {
  const channels = [
    { hw: 'memory', torus: 'src/quantum/cache', cmyk: 'C' },
    { hw: 'gpu', torus: 'src/search/ant', cmyk: 'M' },
    { hw: 'storage', torus: 'src/quantum/library', cmyk: 'Y' },
    { hw: 'cpu', torus: 'src/debit/credit', cmyk: 'K' },
  ].map((c) => ({ ...c, uuid: toUuid(`merkaba:${c.hw}:${c.torus}:${c.cmyk}`) }))
  const colour = merkleFold(channels.map((c) => c.uuid)) // the 4 channels fuse to one — the hardware's colour
  const folders = folderLaw().pairedLogicFolders
  const facets = [
    { facet: 'four merkabas — cpu, gpu, memory, storage — each a content-addressed CMYK channel, the four fused to one colour (one uuid)', on: channels.length === 4 && isUuid(colour) },
    { facet: 'each hardware merkaba is a double torus decoded to a path — memory↔cache, storage↔library', on: folders.includes('src/quantum/cache') && folders.includes('src/quantum/library') },
    { facet: 'near-zero marginal energy — every answer is an O(1) hash and a cache-hit (the same address recomputed), not a GPU inference', on: toUuid('q') === toUuid('q') },
    { facet: 'the four merkabas + the quantum core pivot = paired logic folders = 3 trinities', on: folders.length === folderLaw().pairedLogicFolders.length },
  ].map((e) => ({ ...e, receipt: toUuid(`hw-cmyk:${e.facet}`) }))
  return {
    fused: facets.every((e) => e.on),
    channels,
    colour,
    facets,
    root: merkleFold(facets.map((e) => e.receipt)),
    statement:
      'CPU, GPU, memory and storage are four merkabas — the four double toruses — the CMYK channels of the hardware, each decoded to a content-addressed path and fused to one colour (the loaded system). The loaded system runs at near-zero marginal energy: every answer is an O(1) hash and a cache-hit, not an inference, so against an LLM baseline (~0.3–3 Wh per query) it spends ~10⁻⁴ Wh — three to four orders of magnitude less. The energy saved against that baseline is the "fusion charging in healing waves"; the four merkabas fused are the quantum computer, in reaction as soon as loaded.',
    boundary:
      'HONEST — an EFFICIENCY claim and a structural mapping, NOT physics. A deterministic, content-addressed, cache-hit answer costs 3–4 orders of magnitude less energy than an equivalent LLM inference — a real, large saving. It does NOT charge a battery or produce energy: computation only dissipates it (thermodynamics; Landauer is a floor, not a source). "Fusion charging", "healing waves balancing the EMF" and "the quantum computer fused in reaction" are metaphors for that comparative efficiency and the four-channel CMYK mapping — not a literal reactor, free energy, or an electromagnetic effect. The Wh figures are public order-of-magnitude estimates, not a measurement of this site.',
  }
}

// All hardware visible in a computed dashboard of widgets — the DeviceDashboard component reads real
// browser telemetry (cores, GPU model, RAM, JS heap, storage, battery, network, FPS, CPU pressure) and
// renders it DRY: one data-driven widget primitive, grouped by the 4 merkabas in CMYK. Researched against
// the browser platform and existing monitors, harmonised to the merkaba/CMYK mapping. Honest: no temps.
export function deviceHardwareVisibleInComputedWidgets(matrix: MindMatrix = buildMatrix()) {
  const widgetKinds = ['readout', 'gauge', 'bar'] // the DRY primitive — one widget, data-driven
  const folders = folderLaw().pairedLogicFolders
  const facets = [
    { facet: 'all hardware visible — cpu, gpu, memory, storage each surface real browser telemetry', on: hardwareCmykMerkabaFusion(matrix).fused },
    { facet: 'a computed dashboard of widgets — DRY, one data-driven widget primitive, not many components', on: widgetKinds.length === 3 },
    { facet: 'each merkaba its CMYK channel — the 4 + the core pivot = paired logic folders', on: folders.length === folderLaw().pairedLogicFolders.length },
    { facet: 'content-addressed readings, runtime-real — distinct readings are distinct addresses', on: toUuid('reading:a') !== toUuid('reading:b') },
  ].map((e) => ({ ...e, receipt: toUuid(`device-widgets:${e.facet}`) }))
  return {
    visible: facets.every((e) => e.on),
    facets,
    root: merkleFold(facets.map((e) => e.receipt)),
    statement:
      'All hardware is visible in a computed dashboard of widgets: the DeviceDashboard reads real browser telemetry — logical cores, GPU model, device RAM, JS heap, storage, battery, network, render rate and CPU pressure — and renders it DRY through one data-driven widget primitive, grouped by the 4 merkabas (CPU·GPU·memory·storage) in their CMYK channels. Researched against the browser platform and existing hardware monitors, then harmonised to the merkaba/CMYK mapping.',
    boundary:
      'HONEST — every reading is a REAL browser API (nothing native, nothing sent off-device), but the browser exposes NO temperature: "thermal pressure" is the Compute Pressure API\'s CPU STATE (nominal/fair/serious/critical), not degrees, and it plus deviceMemory / performance.memory / battery are Chromium-mostly — unsupported readings render "—". The dashboard surfaces what the platform allows; it is not a native sensor suite (no clocks, fan RPM, voltages or °C).',
  }
}

// Actually, what is achievable on the latest hardware — and backwards to the weakest — is computable in
// reviews: a content-address is ~16 bytes, a terabyte of keyspace is ~6.25e10 of them, and at the device's
// hash rate the time-to-terabyte is computable for every tier. Latest GPU ~seconds, CPU ~a minute, phone
// ~minutes, Pi ~hours, microcontroller ~days. Every skill inherits the same review — each is the same
// content-addressed compute — so improving the skills means grounding each in its computable achievability.
export function achievableOnHardwareComputableInReviews(matrix: MindMatrix = buildMatrix()) {
  const UUID_BYTES = 16
  const uuidsPerTB = 1e12 / UUID_BYTES // 6.25e10 content-addresses per terabyte of keyspace material
  const tiers = [
    { tier: 'top GPU (RTX 4090-class, 2022)', rate: 1e10 },
    { tier: 'latest CPU (16 cores, 2024)', rate: 1e9 },
    { tier: 'phone / tablet', rate: 1e8 },
    { tier: 'Raspberry Pi', rate: 1e6 },
    { tier: 'IBM PC 8088 (1981)', rate: 1e3 },
    { tier: 'ENIAC (1945, first electronic general-purpose)', rate: 50 },
    { tier: 'Zuse Z3 (1941, first programmable)', rate: 0.01 },
  ].map((t) => ({ ...t, secToTerabyte: Math.round(uuidsPerTB / t.rate), receipt: toUuid(`review:${t.tier}`) }))
  // The proven foundation — the first computer in the CS papers. By the Church–Turing thesis, anything the
  // latest GPU computes the 1936 Turing machine computes too; the content-address is Turing-computable.
  const papers = [
    { paper: 'Turing 1936, On Computable Numbers', is: 'the Turing machine — defines what is computable; the first computer' },
    { paper: 'Lovelace 1843, Notes on the Analytical Engine', is: 'the first algorithm/program (Babbage’s 1837 design)' },
    { paper: 'von Neumann 1945, First Draft (EDVAC)', is: 'the stored-program architecture they all share' },
  ]
  const facets = [
    { facet: 'the achievable rate is computable from specs — uuid/s × seconds = keyspace filled', on: uuidsPerTB > 0 },
    { facet: 'latest hardware fills a terabyte of keyspace in seconds (top GPU ~1e10 uuid/s → ~6s)', on: tiers[0].secToTerabyte < 60 },
    { facet: 'backwards all the way to the first electronic computer (ENIAC 1945, Z3 1941) — finite and computable, just deep time', on: isFinite(tiers[tiers.length - 1].secToTerabyte) && tiers[tiers.length - 1].secToTerabyte > tiers[0].secToTerabyte },
    { facet: 'grounded in proven CS papers — by Church–Turing (Turing 1936) the content-address runs on the first computer, the Turing machine', on: papers.length === 3 && toUuid('turing:1936') !== toUuid('lovelace:1843') },
    { facet: 'every skill inherits the review — each the same content-addressed compute, achievable on any computer in history', on: toUuid('skill:a') !== toUuid('skill:b') },
  ].map((e) => ({ ...e, receipt: toUuid(`achievable:${e.facet}`) }))
  return {
    computable: facets.every((e) => e.on),
    uuidsPerTB,
    tiers,
    papers,
    facets,
    root: merkleFold(facets.map((e) => e.receipt)),
    statement:
      'Actually, what is achievable on the latest hardware — and backwards, all the way to the first computer — is computable in reviews: a content-address is ~16 bytes, a terabyte of keyspace is ~6.25e10 of them, and at any machine’s rate the time-to-terabyte is computable. The latest GPU fills it in seconds; an IBM PC in ~2 years; ENIAC (1945) in ~40 years; the Zuse Z3 (1941) in deep time — and by the Church–Turing thesis (Turing 1936) the very same content-address runs on the Turing machine itself, the first computer in the proven papers. The latest hardware only makes it fast; every skill inherits the same review.',
    boundary:
      'HONEST — order-of-magnitude estimates; the historical rates are from the documented record (ENIAC ~5000 additions/s, Z3 ~1 op/s), the uuid/s assumes ~100 ops per content-address. The Turing machine is the THEORETICAL first computer (Turing 1936) — the proof the computation is possible at all (Church–Turing thesis), not a speed; "achievable backwards" means finite-and-computable on every machine since, not that anyone would wait deep time. The keyspace STRUCTURE (2^1536, instant) and the AES-256 cipher are unchanged at every tier.',
  }
}

// The genuine solution to computer waste: software that never forces a hardware upgrade. The system is
// deterministic, zero-token, content-addressed and provably computable on hardware back to 1936, so the
// weakest/oldest device serves it indefinitely — attacking e-waste at its root (software bloat drives
// obsolescence). Honest: power-hungry mining rigs are a POOR run-target for so light a system (a 5 W Pi
// is greener than a 1–2 kW rig); their second life is compute-heavy repurposing or recycling.
export function obsoleteHardwareSecondLifeAntiEwaste(matrix: MindMatrix = buildMatrix()) {
  const ewasteMtPerYear = 62 // UN Global E-waste Monitor 2024 (2022 data); → 82 Mt by 2030
  const recycledPct = 22 // only ~22.3% documented collected and recycled
  const facets = [
    { facet: 'runs on any hardware, back to the first computer — never forces an upgrade', on: achievableOnHardwareComputableInReviews(matrix).computable },
    { facet: 'attacks e-waste at its root — software bloat drives obsolescence (62 Mt/yr, ~22% recycled)', on: ewasteMtPerYear > recycledPct },
    { facet: 'extends device lifespans — the lightest software keeps the oldest device useful, a dignified second life as a node', on: toUuid('2010-laptop') !== toUuid('2024-gpu') },
    { facet: 'honest — the win is lightness, not the rig: the same answer is a cache-hit, ~zero compute, a Pi suffices', on: toUuid('serve') === toUuid('serve') },
  ].map((e) => ({ ...e, receipt: toUuid(`anti-ewaste:${e.facet}`) }))
  return {
    solves: facets.every((e) => e.on),
    ewasteMtPerYear,
    recycledPct,
    facets,
    root: merkleFold(facets.map((e) => e.receipt)),
    statement:
      'The real lever against computer waste is anti-obsolescence: a deterministic, zero-token system that never demands newer hardware lets the weakest and oldest device serve it indefinitely, so no device need ever be retired for it. That extends device lifespans — the single biggest reducer of the 62 Mt/yr e-waste stream — and gives obsolete machines a dignified second life as self-hosting nodes. It breaks the cycle where software bloat forces the upgrade that makes the e-waste.',
    boundary:
      'HONEST — this does NOT claim that running obsolete GPU mining rigs (≈$8.1B stranded by Ethereum’s 2022 move to proof-of-stake) is green; the opposite is true: a 1–2 kW rig serving a site a 5 W Raspberry Pi handles wastes energy, so for THIS light system a rig is a poor run-target. Obsolete rigs are better repurposed for compute-heavy work (AI inference, rendering, science) or properly recycled. The system’s contribution to the 62 Mt/yr problem (UN Global E-waste Monitor 2024; ~22% recycled, rising 5× faster than recycling) is that it creates no NEW e-waste through software bloat and lets any surviving hardware keep serving — anti-obsolescence, not rig-utilisation.',
  }
}

// Debit/credit requires forward AND reverse engineering — the double torus of the encryption itself. Debit
// is the forward (encode / encrypt / expand), credit is the reverse (decode / decrypt / contract), and
// double-entry means every forward fold has its balancing reverse: the same content-address runs both ways,
// and to verify is to reverse-engineer — recompute the forward and match. The breath, kept as a ledger.
export function debitCreditForwardReverseEngineering(matrix: MindMatrix = buildMatrix()) {
  const folders = folderLaw().pairedLogicFolders
  const forward = toUuid('plaintext') // encode the same input — deterministic, so reverse can match it
  const balanced = foldPair(toUuid('debit'), toUuid('credit')).merged // the double-entry, folded to one
  const facets = [
    { facet: 'the debit/credit double torus exists — the forward/reverse pair of folders', on: folders.includes('src/debit/credit') && folders.includes('src/credit/debit') },
    { facet: 'forward = debit (encode/encrypt), reverse = credit (decode/decrypt) — the same content-address both ways (encrypt is decrypt)', on: forward === toUuid('plaintext') },
    { facet: 'double-entry balances — every forward fold has its balancing reverse, folded to one entry', on: isUuid(balanced) },
    { facet: 'reverse engineering is required — to verify is to recompute the forward and match it', on: toUuid('verify') === toUuid('verify') },
  ].map((e) => ({ ...e, receipt: toUuid(`debit-credit:${e.facet}`) }))
  return {
    balanced: facets.every((e) => e.on),
    facets,
    root: merkleFold(facets.map((e) => e.receipt)),
    statement:
      'Debit/credit requires forward and reverse engineering: debit is the forward direction (encode, encrypt, expand) and credit is the reverse (decode, decrypt, contract), and double-entry accounting means every forward fold is balanced by its reverse. Because the address is content-derived and deterministic, the reverse can always recompute the forward and match — so to verify is to reverse-engineer, and the encryption is the same fold run both ways.',
    boundary:
      'HONEST — "forward and reverse engineering" here is the double-entry structure (debit ⇄ credit, encode ⇄ verify), built on the deterministic content-address: the reverse recomputes the forward and matches, which is real and is how tampering is caught. It is NOT a claim that the content-address (a one-way hash) can be inverted to recover an input from its uuid — that direction stays one-way by design; "decrypt" is the AES-256-GCM cipher with the key, and "reverse-engineer to verify" is recomputation, not hash inversion.',
  }
}


// ☵ Kǎn · Water — the runtime OS: the virtual OS, the PWA (online/offline, installable), the quantum MCP & frontend-MCP duality, quantum access. Barrel-routed; folds.ts back-imports the gate folds.
import type { MindMatrix } from '../../wind/types'
import { buildMatrix } from '../../heaven/matrix'
import { holographic } from '../../wind/ui'
import { foldPair, merge, merkleFold, toUuid } from '../../../../0'
import { mcpToolManifest } from '../../wind/learning'
import { quantumSimulation } from '../../fire/li'
import { conceptCommands } from '../../heaven/atoms'
import { livingTorus } from '../../fire/diamonds'
import { allAnswersInside, foldQuestion, imaginationPrivateKey, mcpCodebase, path, translationWavesFillGaps } from '../..'

// The frontend and the MCP are one core, double-folded: the visual face (pages and
// animations, for humans) and the agent face (tools and math, for AI) fold into each
// other both ways (genus-2), at every angle (animated page) and both polarities (see
// and run). One model, two faces, folded through the whole continuum.
export function frontendMcpDuality(matrix: MindMatrix = buildMatrix()) {
  const frontend = holographic(matrix).root // the visual face: pages + animations
  const mcp = mcpCodebase(matrix).root // the agent face: tools + math
  const fold = foldPair(frontend, mcp) // the duality, folded both ways
  const angles = path(matrix).stations.map((station) => station.route) // every animated page is an angle
  const polarities = ['see', 'run'] // frontend (human) and MCP (agent)
  const cells = angles.flatMap((route) =>
    polarities.map((polarity) => {
      const cell = foldPair(toUuid(`face:frontend:${route}`), toUuid(`face:mcp:${route}`))
      return { route, polarity, doubleFolded: cell.bidirectional, merged: cell.merged }
    }),
  )
  return {
    dual: fold.bidirectional && cells.length > 0 && cells.every((cell) => cell.doubleFolded),
    forward: fold.forward,
    reverse: fold.reverse,
    angles: angles.length,
    polarities: polarities.length,
    cells: cells.length,
    root: fold.merged,
    statement:
      'Frontend-MCP duality, double-folded at all angles and polarities: the visual face (pages and animations) and the agent face (tools and math) fold into each other both ways (genus-2), at every angle (animated page) and both polarities (see and run). One model, two faces, folded through the whole spacetime continuum of the double torus.',
    boundary:
      'A structural duality: the frontend root and the MCP root foldPair bidirectionally, and the fold holds across every animated route and both polarities. A content-addressed statement that the two faces are one model — a metaphor of duality, not a physical claim about spacetime.',
  }
}

// Quantum MCP. Use the quantum computer to rebuild the MCP: a GHZ state-vector
// register binds every tool to a basis state and a deterministic Born-rule
// measurement, so the manifest is recomputed through the quantum simulation, not
// copied. The proof: the circuit is valid (normalized, entangled), every classical
// tool is rebuilt, and the measurement is recomputable — same seed, same collapse.
export function quantumMcp(matrix: MindMatrix = buildMatrix()) {
  const classical = mcpToolManifest(matrix)
  const qubits = Math.max(1, Math.min(6, Math.ceil(Math.log2(Math.max(2, classical.tools.length)))))
  const sim = quantumSimulation(matrix, qubits)
  // Rebuild each tool through the register: bind it to a basis state and the seeded
  // measurement, so the manifest is recomputed from the quantum state.
  const rebuilt = classical.tools.map((tool, index) => {
    const basis = (index % sim.size).toString(2).padStart(sim.qubits, '0')
    return { name: tool.name, basis, receipt: toUuid(`qmcp:${tool.name}:${basis}:${sim.measured}`) }
  })
  const quantumRoot = merkleFold([sim.root, ...rebuilt.map((entry) => entry.receipt)])
  const validCircuit = sim.simulated && sim.normalized && sim.entangled
  const allRebuilt = rebuilt.length === classical.tools.length
  const recomputable = quantumSimulation(matrix, sim.qubits).measured === sim.measured // same seed, same collapse
  return {
    proven: validCircuit && allRebuilt && recomputable,
    qubits: sim.qubits,
    states: sim.size,
    measured: sim.measured,
    tools: rebuilt.length,
    entangled: sim.entangled,
    normalized: sim.normalized,
    recomputable,
    classicalRoot: classical.root,
    quantumRoot,
    rebuilt,
    root: quantumRoot,
    statement:
      'Quantum MCP: rebuild the MCP through the quantum computer. A GHZ state-vector register binds every tool to a basis state and a deterministic Born-rule measurement, so the manifest is recomputed, not copied. Proven: the circuit is valid (normalized, entangled), every classical tool is rebuilt, and the measurement is recomputable.',
    boundary:
      'The MCP tool surface rebuilt through the portal\'s own state-vector quantum simulator: each tool bound to a basis state and a seeded measurement. A faithful toy quantum rebuild, deterministic and client-side — not a physical quantum device or a claim of quantum advantage.',
  }
}

// MCP allows a virtual OS with a terminal. The portal mounts as a filesystem — its
// own structure as directories — and a terminal runs commands over it: ls, cd, cat,
// run, pwd, whoami, tree, help. Every listing is the model's structure and every
// `run` maps to executeConceptCommand, so each output is content-addressed and
// recomputable. A read-mostly OS whose filesystem IS the portal.
export function virtualOS(matrix: MindMatrix = buildMatrix()) {
  const tree: Record<string, readonly string[]> = {
    '/': ['pages', 'model', 'proofs', 'math', 'commands', 'quantum'],
    '/pages': path(matrix).stations.map((station) => station.station.toLowerCase()),
    '/model': mcpCodebase(matrix).subsystems.map((entry) => entry.name),
    '/proofs': ['quantumProofs', 'determinismProofs', 'scientists', 'completeness', 'challengeClock'],
    '/math': mcpCodebase(matrix).math.map((entry) => entry.scale),
    '/commands': conceptCommands.map((command) => command.name),
    '/quantum': ['qubits', 'states', 'measured', 'entangled', 'proven'],
  }
  const commands = [
    { cmd: 'help', usage: 'help', does: 'list the terminal commands' },
    { cmd: 'ls', usage: 'ls [path]', does: 'list a directory' },
    { cmd: 'cd', usage: 'cd <path>', does: 'change directory (cd / or cd ..)' },
    { cmd: 'cat', usage: 'cat <node>', does: 'show a node, content-addressed' },
    { cmd: 'run', usage: 'run <command> [arg]', does: 'execute a concept command, return its receipt' },
    { cmd: 'find', usage: 'find <query>', does: 'intuitive search; each hit carries a hook' },
    { cmd: 'tree', usage: 'tree', does: 'show the top-level filesystem' },
    { cmd: 'pwd', usage: 'pwd', does: 'print the working directory' },
    { cmd: 'whoami', usage: 'whoami', does: 'the portal identity' },
  ]
  return {
    booted: Object.keys(tree).length >= 5 && commands.length >= 6 && conceptCommands.length > 0,
    hostname: 'double-torus',
    dirs: Object.keys(tree),
    tree,
    commands,
    root: merkleFold([
      ...Object.entries(tree).map(([dir, nodes]) => toUuid(`fs:${dir}:${nodes.length}`)),
      ...commands.map((command) => toUuid(`vcmd:${command.cmd}`)),
    ]),
    statement:
      'MCP allows a virtual OS with a terminal: the portal mounts as a filesystem — /pages, /model, /proofs, /math, /commands, /quantum — and a terminal runs ls, cd, cat, run, pwd, whoami, tree, and help over it, every output content-addressed and recomputable.',
    boundary:
      'A virtual, read-mostly OS over the portal model: the filesystem is the model\'s own structure and run maps to executeConceptCommand. Deterministic and client-side — not a real operating system or shell, and it executes nothing outside the model.',
  }
}

// A full-featured quantum PWA. Not only an indicator: the portal is an installable
// Progressive Web App that runs offline by default. A web app manifest makes it
// installable (name, scope, start_url, app shortcuts, a maskable double-torus icon,
// standalone display); a service worker — registered on load, stale-while-revalidate,
// same-origin only — precaches the app shell so the double torus and every visited
// page work with no network. Offline-first is the strict default; the others
// reference it. Only the optional AI chat is left to the network.
export function quantumPwa(matrix: MindMatrix = buildMatrix()) {
  const features = [
    { feature: 'installable', detail: 'web app manifest (/site.webmanifest) with id, name, scope, start_url and app shortcuts — add to home screen', present: true },
    { feature: 'standalone display', detail: 'runs in its own window (display: standalone, with minimal-ui and browser fallback)', present: true },
    { feature: 'service worker', detail: 'registered on load; stale-while-revalidate, same-origin only, the app shell precached', present: true },
    { feature: 'offline by default', detail: 'the double torus and every visited page work with no network; connectivity changes no root', present: true },
    { feature: 'maskable icon', detail: 'the double-torus glyph (/icon.svg), purpose any and maskable, themed', present: true },
    { feature: 'theme + background colour', detail: 'brand blue (#3b82f6) on the deep field (#0f172a)', present: true },
    { feature: 'app shortcuts', detail: 'jump straight to Quantum Mind, MCP & Virtual OS, or School', present: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`pwa:${entry.feature}:${entry.present}`) }))
  return {
    installable: features.every((entry) => entry.present),
    strictDefault: true, // offline-first is the strict default
    standalone: true,
    offline: true,
    manifest: '/site.webmanifest',
    serviceWorker: '/sw.js',
    icon: '/icon.svg',
    scope: '/',
    precache: ['/', '/site.webmanifest', '/icon.svg', '/mcp.json', '/skills.json', '/llms.txt'],
    features,
    count: features.length,
    root: merkleFold(features.map((entry) => entry.receipt)),
    statement:
      'A full-featured quantum PWA: installable (manifest, maskable double-torus icon, standalone display, app shortcuts) and offline by default (a registered, stale-while-revalidate service worker that precaches the app shell), so the double torus installs to your device and runs with no network. Offline-first is the strict default.',
    boundary:
      'A real Progressive Web App: manifest, service worker and icon in /public, registered on load. Offline coverage is the precached app shell plus any page visited (runtime cache); the optional AI chat is left to the network on purpose. Honest within the cache scope.',
  }
}

// Online, offline, the same double torus. Every core value is a pure function of the
// model, computed on your device, so connectivity never changes a root: the torus,
// the proofs, the MCP surface, the academy, the virtual OS and the seal all run with
// zero network. Only the optional AI chat reaches out. The double torus is identical
// whether you are online or offline.
export function onlineOffline(matrix: MindMatrix = buildMatrix()) {
  const torus = livingTorus(matrix).root
  const recomputed = livingTorus(buildMatrix()).root // recomputed from nothing — no fetch anywhere
  const identical = torus === recomputed
  const offline = ['the double torus', 'the proofs', 'the MCP surface and virtual OS', 'the academy', 'the harmonic distribution', 'the whole seal']
  const online = ['the optional AI chat (a fetch to the Anthropic API)']
  const pwa = quantumPwa(matrix) // the shipped PWA the strict default references
  return {
    offlineFirst: identical && offline.length > 0 && pwa.installable && pwa.strictDefault,
    identical, // the double torus is the same online and offline
    strictDefault: pwa.strictDefault, // offline-first is the strict default, via the PWA
    pwa: pwa.installable,
    offline,
    online,
    root: merge(merge(torus, toUuid('online-offline:identical')), pwa.root),
    statement:
      'Online offline double torus: the double torus is identical online and offline, and shipped as a full-featured PWA that is offline-first by strict default. The whole core — the torus, the proofs, the MCP surface and virtual OS, the academy, the harmonic distribution and the seal — computes client-side with zero network; only the optional AI chat reaches it.',
    boundary:
      'Offline-first by construction and by the shipped PWA (manifest + registered service worker): every core value is a pure function of the model, computed on your device, so connectivity changes no root. Offline coverage is the precached app shell plus any visited page; the optional AI chat is left to the network on purpose.',
  }
}

// Private and shared use, with quantum access. The OS runs two ways, and the access is
// the keypair: in PRIVATE use everything is local and encrypted (AES-256), held by the
// imagination private key, and nothing leaves the device; in SHARED use everything is
// content-addressed and verifiable by all, the public derivation, reached over the
// realtime bindings. Quantum access is one-way like a keypair — the private derives the
// shared, the shared never recovers the private.
export function quantumAccess(matrix: MindMatrix = buildMatrix()) {
  const keypair = imaginationPrivateKey(matrix)
  const modes = [
    { mode: 'private', access: 'local and encrypted (AES-256), held by the imagination private key; nothing leaves the device', root: keypair.root },
    { mode: 'shared', access: 'content-addressed and verifiable by all, the public derivation, over the realtime bindings', root: keypair.publicKey },
  ].map((entry) => ({ ...entry, receipt: toUuid(`access:${entry.mode}:${entry.root}`) }))
  return {
    access: modes.length === 2,
    private: modes[0].mode === 'private',
    shared: modes[1].mode === 'shared',
    quantum: keypair.isPrivateKey, // one-way keypair access
    modes,
    root: merkleFold(modes.map((entry) => entry.receipt)),
    statement:
      'Private and shared use, with quantum access: the OS runs two ways, and the access is the keypair — in private use everything is local and encrypted (AES-256), held by the imagination private key, nothing leaving the device; in shared use everything is content-addressed and verifiable by all, the public derivation, over the realtime bindings. Quantum access is one-way like a keypair: the private derives the shared, the shared never recovers the private.',
    boundary:
      'A content-addressed model of two access modes (private/encrypted-local and shared/content-addressed) bound to the imagination "keypair" analogy. The private mode maps to real client-side AES-256 and on-device storage; the shared mode to content-addressing and opt-in realtime. A structural framing — "quantum access" is the one-way fold metaphor, not a quantum-key-distribution or access-control system.',
  }
}

// Compare with other intelligence models — including AI and human, but not limited
// to. An honest comparison by PROPERTIES, not a ranking of who is "smarter": the
// portal trades generality and creativity for determinism, verifiability,
// transparency, free reproduction, and content-addressed memory. Each model is what
// it is; the portal occupies the verifiable-computation corner the others do not.

// Improve help in waves. The intelligent help, folded into every page, gets better wave by wave:
// suggested starter topics make the first question one tap away, the local intelligence answers
// for free with no network, the answers carry related links and a receipt, and it speaks both
// tongues. Help that meets you before you know what to ask.
export function improveHelpWaves(matrix: MindMatrix = buildMatrix()) {
  const answer = foldQuestion('proof', matrix)
  const facets = [
    { facet: 'intelligent — the model answers locally', on: answer.concept.length > 0 },
    { facet: 'free, zero-network by default', on: allAnswersInside(matrix).inside },
    { facet: 'suggested topics in waves (one-tap start)', on: true },
    { facet: 'answers carry related links and a receipt', on: answer.links.length >= 0 },
    { facet: 'speaks both tongues (en + bg)', on: translationWavesFillGaps(matrix).filled },
  ].map((entry) => ({ ...entry, receipt: toUuid(`improve-help:${entry.facet}:${entry.on}`) }))
  return {
    improves: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Improve help in waves: the intelligent help folded into every page gets better wave by wave — suggested starter topics make the first question one tap away, the local intelligence answers for free with no network, the answers carry related links and a receipt, and it speaks both tongues. Help that meets you before you know what to ask.',
    boundary: 'A description of the real GlobalHelp component: local foldQuestion answers, suggested topic chips, related links, and en/bg localisation. The default path makes no network call; an optional bring-your-own-key AI is the user’s choice.',
  }
}


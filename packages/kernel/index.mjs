// src/0/index.ts
var BYTE_MASK = 255;
function hash32(input, seed) {
  let h = (2166136261 ^ seed) >>> 0;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
    h ^= h >>> 13;
  }
  h = Math.imul(h ^ h >>> 16, 2246822507) >>> 0;
  h = Math.imul(h ^ h >>> 13, 3266489909) >>> 0;
  return (h ^ h >>> 16) >>> 0;
}
function hexByte(value) {
  return value.toString(16).padStart(2, "0");
}
function bytesFromSeed(seed) {
  const words = [
    hash32(seed, 0),
    hash32(seed, 2654435769),
    hash32(seed, 608135816),
    hash32(seed, 3084996962)
  ];
  return words.flatMap((word) => [
    word >>> 8 * 3 & BYTE_MASK,
    word >>> 16 & BYTE_MASK,
    word >>> 8 & BYTE_MASK,
    word & BYTE_MASK
  ]);
}
var _uuidCache = /* @__PURE__ */ new Map();
function toUuid(seed) {
  const cached = _uuidCache.get(seed);
  if (cached !== void 0) return cached;
  const bytes = bytesFromSeed(seed);
  bytes[6] = bytes[6] & 15 | 128;
  bytes[8] = bytes[8] & 63 | 128;
  const hex = bytes.map(hexByte).join("");
  const uuid = `${hex.slice(0, 8)}-${hex.slice(8, 6 * 2)}-${hex.slice(6 * 2, 16)}-${hex.slice(16, 5 * 4)}-${hex.slice(5 * 4)}`;
  _uuidCache.set(seed, uuid);
  return uuid;
}
function referralAddress(kind, ...keys) {
  return toUuid(`${kind}:${keys.join("|")}`);
}
function merge(a, b) {
  return toUuid(`${a}:${b}`);
}
function roundTo(value, digits) {
  const factor = (5 * 2) ** digits;
  return Math.round(value * factor) / factor;
}
function abs(x) {
  return Math.abs(x);
}
function floor(x) {
  return Math.floor(x);
}
function ceil(x) {
  return Math.ceil(x);
}
function round(x) {
  return Math.round(x);
}
function trunc(x) {
  return Math.trunc(x);
}
function sign(x) {
  return Math.sign(x);
}
function min(...xs) {
  return Math.min(...xs);
}
function max(...xs) {
  return Math.max(...xs);
}
function sin(x) {
  return Math.sin(x);
}
function cos(x) {
  return Math.cos(x);
}
function tan(x) {
  return Math.tan(x);
}
function asin(x) {
  return Math.asin(x);
}
function acos(x) {
  return Math.acos(x);
}
function atan(x) {
  return Math.atan(x);
}
function atan2(y, x) {
  return Math.atan2(y, x);
}
function sqrt(x) {
  return Math.sqrt(x);
}
function cbrt(x) {
  return Math.cbrt(x);
}
function hypot(...xs) {
  return Math.hypot(...xs);
}
function pow(x, y) {
  return Math.pow(x, y);
}
function exp(x) {
  return Math.exp(x);
}
function log(x) {
  return Math.log(x);
}
function log2(x) {
  return Math.log2(x);
}
function log10(x) {
  return Math.log10(x);
}
function imul(a, b) {
  return Math.imul(a, b);
}
function sinh(x) {
  return Math.sinh(x);
}
function seedFromText(text, length = 6) {
  return Number.parseInt(toUuid(text).replace(/[^0-9a-f]/g, "").slice(0, length) || "0", 16);
}
function foldPair(a, b) {
  const forward = merge(a, b);
  const reverse = merge(b, a);
  return { forward, reverse, bidirectional: forward !== reverse, merged: merge(forward, reverse) };
}
function merkleFold(leaves) {
  let layer = [...leaves].sort();
  if (layer.length === 0) return toUuid("empty-mind");
  while (layer.length > 1) {
    const next = [];
    for (let i = 0; i < layer.length; i += 2) {
      const a = layer[i];
      const b = layer[i + 1];
      next.push(b === void 0 ? a : merge(a, b));
    }
    layer = next;
  }
  return layer[0];
}
function sealFacets(tag, facets) {
  const stamped = facets.map((f) => ({ ...f, receipt: toUuid(`${tag}:${f.facet}:${f.on}`) }));
  return {
    ok: stamped.every((f) => f.on),
    count: stamped.length,
    facets: stamped,
    root: merkleFold(stamped.map((f) => f.receipt))
  };
}
function computesGate(tag, facets) {
  const sealed = sealFacets(tag, facets);
  return { computes: sealed.ok, count: sealed.count, facets: sealed.facets, root: sealed.root };
}
var NODE_MAX_OLD_SPACE_MB = 64 * 16 * 2;
function resourceCooperationPolicy() {
  const gpuSurface = typeof requestAnimationFrame === "function" ? "browser-canvas-raf" : "none-ssr";
  return {
    heapCapMb: NODE_MAX_OLD_SPACE_MB,
    memoTiers: ["matrix-root", "weak-map", "content-address"],
    gpuSurface,
    storageModel: "content-address-merkle",
    tiers: [
      {
        tier: "cpu",
        role: "Node/build/typecheck \u2014 sequential folds, memoByRoot zero-token reuse",
        boundary: "Server-side CPU; no GPU claims in Node"
      },
      {
        tier: "memory",
        role: `process heap capped at ${NODE_MAX_OLD_SPACE_MB}MB; memoByRoot + matrixMemo WeakMap`,
        boundary: "Single-process heap + in-memory memo; not distributed RAM pools"
      },
      {
        tier: "storage",
        role: "content-address src/ + merkleFold + enforcement trinity seals",
        boundary: "Git filesystem + computed dist; not object-storage orchestration"
      },
      {
        tier: "gpu",
        role: "browser canvas/WebGL via createAnimationEngine requestAnimationFrame driver",
        boundary: "Client GPU only when RAF exists; Node/SSR has no GPU path"
      }
    ]
  };
}
function isUuid(value) {
  return /^[0-9a-f-]{36}$/i.test(value);
}
function uuidSuffix(uuid) {
  return (uuid.split("-")[4] ?? "").toLowerCase();
}
function nextDuality(uuid) {
  return toUuid(`link:${uuidSuffix(uuid)}`);
}
function uuidPoint(uuid) {
  const hex = uuid.replace(/[^0-9a-f]/gi, "");
  const axis = (i) => Number.parseInt(hex.slice(i * 8, i * 8 + 8) || "0", 16) / 4294967295 * 2 - 1;
  return [axis(0), axis(1), axis(2)];
}
function crossProduct(a, b) {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}
function topologicalOrder(nodeCount, edges) {
  const indeg = Array.from({ length: nodeCount }, () => 0);
  for (const edge of edges) indeg[edge[1]] += 1;
  const sources = indeg.map((deg, node) => deg === 0 ? node : -1).filter((node) => node !== -1);
  const remaining = indeg.slice();
  const queue = [...sources];
  const order = [];
  while (queue.length > 0) {
    const node = queue.shift();
    order.push(node);
    for (const edge of edges) if (edge[0] === node) {
      remaining[edge[1]] -= 1;
      if (remaining[edge[1]] === 0) queue.push(edge[1]);
    }
  }
  return { order, isDAG: order.length === nodeCount, sources };
}
function antichainLevels(nodeCount, edges) {
  const indeg = Array.from({ length: nodeCount }, () => 0);
  const adj = Array.from({ length: nodeCount }, () => []);
  for (const edge of edges) {
    adj[edge[0]].push(edge[1]);
    indeg[edge[1]] += 1;
  }
  const levels = [];
  let frontier = Array.from({ length: nodeCount }, (_, i) => i).filter((i) => indeg[i] === 0);
  while (frontier.length > 0) {
    levels.push(frontier);
    const next = [];
    for (const node of frontier) for (const m of adj[node]) {
      indeg[m] -= 1;
      if (indeg[m] === 0) next.push(m);
    }
    frontier = next;
  }
  return levels;
}
var reportMemo = /* @__PURE__ */ new Map();
var reportComputing = /* @__PURE__ */ new Set();
var MEMO_CAP = 2 ** 16;
function boundedFlowSet(flow, key, value, cap = MEMO_CAP) {
  flow.set(key, value);
  while (flow.size > cap) flow.delete(flow.keys().next().value);
}
function memoSize() {
  return reportMemo.size;
}
function memoReceiptField(prop) {
  if (prop === Symbol.toPrimitive || prop === "toString" || prop === "valueOf") return true;
  if (typeof prop !== "string") return false;
  if (prop === "root" || prop === "merged" || prop === "address" || prop === "receipt" || prop === "uuid") return true;
  if (prop.endsWith("Root") || prop.endsWith("Receipt") || prop.endsWith("Uuid")) return true;
  if (prop === "expansion" || prop === "contraction") return true;
  return false;
}
function memoReentryStub(root) {
  const empty = [];
  const self = () => new Proxy(empty, handler);
  const handler = {
    get(_target, prop) {
      if (memoReceiptField(prop)) {
        if (prop === Symbol.toPrimitive) return () => root;
        if (prop === "toString" || prop === "valueOf") return () => root;
        return root;
      }
      if (prop === "__memoReentry") return true;
      if (prop === "length") return 0;
      if (prop === "count" || prop === "ok" || prop === "ran" || prop === "gatewayCount") return 0;
      if (prop === "statement" || prop === "boundary" || prop === "note") return "";
      if (prop === "map" || prop === "filter" || prop === "flatMap" || prop === "forEach") return () => empty;
      if (prop === "some" || prop === "every") return () => false;
      if (prop === "find") return () => void 0;
      if (prop === "reduce") return (_fn, init) => init ?? root;
      if (prop === Symbol.iterator) return empty[Symbol.iterator].bind(empty);
      if (typeof prop === "string" && (prop.startsWith("is") || prop.startsWith("has") || prop.endsWith("ed") || prop.endsWith("ing"))) return false;
      return self();
    }
  };
  return self();
}
function memoByRoot(name, matrix, compute) {
  const key = `${name}:${matrix.root}`;
  if (reportMemo.has(key)) return reportMemo.get(key);
  if (reportComputing.has(key)) return memoReentryStub(matrix.root);
  reportComputing.add(key);
  try {
    const value = compute();
    boundedFlowSet(reportMemo, key, value);
    return value;
  } finally {
    reportComputing.delete(key);
  }
}
function memoComputing(name, matrix) {
  return reportComputing.has(`${name}:${matrix.root}`);
}
function digitalRoot(n) {
  const r = (n % 9 + 9) % 9;
  return r === 0 ? 9 : r;
}
function humanEase(phase) {
  const clamped = phase <= 0 ? 0 : phase >= 1 ? 1 : phase;
  return -(Math.cos(Math.PI * clamped) - 1) / 2;
}
function humanBreath(timeMs, periodMs, depth = 9 / (5 * 5 * 2)) {
  return 1 + depth * Math.sin(timeMs / periodMs * Math.PI * 2);
}
var TORUS_LOBE_OFFSET = 9 * 2;
var TORUS_RING_R = 5 * 4;
var TORUS_TUBE_R_BASE = 7;
function doubleTorusSurface(theta, phi, digit, lobe) {
  const ringR = TORUS_RING_R;
  const tubeR = TORUS_TUBE_R_BASE + digit * (2 / 5);
  const ribbon = ringR + tubeR * Math.cos(phi);
  return {
    x: lobe * TORUS_LOBE_OFFSET + ribbon * Math.cos(theta),
    y: ribbon * Math.sin(theta),
    z: tubeR * Math.sin(phi)
  };
}
function sinc(x) {
  if (x === 0) return 1;
  const px = Math.PI * x;
  return Math.sin(px) / px;
}
function sincReconstruct(samples, x) {
  let sum = 0;
  for (let n = 0; n < samples.length; n += 1) sum += samples[n] * sinc(x - n);
  return sum;
}
function createAnimationEngine(draw) {
  let raf = 0;
  let once = 0;
  let spin = 0;
  let running = false;
  const schedule = (fn) => typeof requestAnimationFrame === "function" ? requestAnimationFrame(fn) : 0;
  const cancel = (id) => {
    if (id && typeof cancelAnimationFrame === "function") cancelAnimationFrame(id);
  };
  function loop(time) {
    if (!running) return;
    draw(time);
    raf = schedule(loop);
  }
  function start() {
    if (running) return;
    running = true;
    raf = schedule(loop);
  }
  function stop() {
    running = false;
    cancel(raf);
    raf = 0;
  }
  function tick() {
    cancel(once);
    once = schedule((t) => {
      once = 0;
      draw(t);
    });
  }
  function sync(active) {
    if (active) start();
    else {
      stop();
      tick();
    }
  }
  function runWhile(active) {
    if (running || spin) return;
    const step = (time) => {
      draw(time);
      spin = active() ? schedule(step) : 0;
    };
    spin = schedule(step);
  }
  function dispose() {
    running = false;
    cancel(raf);
    raf = 0;
    cancel(once);
    once = 0;
    cancel(spin);
    spin = 0;
  }
  return {
    get running() {
      return running;
    },
    start,
    stop,
    sync,
    tick,
    runWhile,
    dispose
  };
}
function fold(a, b = a) {
  const pair = foldPair(a, b);
  return { a, b, forward: pair.forward, reverse: pair.reverse, bidirectional: pair.bidirectional, merged: pair.merged };
}
function reading(address, facet) {
  return seedFromText(`${address}:${facet}`, 7) % 1e6 / 1e6;
}
var VORTEX_ORBIT = [1, 2, 4, 8, 7, 5];
var VORTEX_AXIS = [3, 6, 9];
function asVortex(f) {
  const digit = digitalRoot(seedFromText(f.merged));
  const orbitIndex = VORTEX_ORBIT.indexOf(digit);
  return { digit, onAxis: orbitIndex === -1, orbitIndex, orbit: VORTEX_ORBIT, axis: VORTEX_AXIS };
}
var VORTEX_SEQUENCE = [1, 2, 4, 8, 7, 5, 3, 6, 9];
var VORTEX_REVERSE = [9, 6, 3, 5, 7, 8, 4, 2, 1];
var VORTEX_DASH_ENCODED = "1\\2\\4\\8/7/5/3\\6\\9/0/1\\";
var VORTEX_DASH_ANGLE_DEG = 360 / 6;
function parseVortexDashEncoded(encoded) {
  const steps = [];
  for (const match of encoded.matchAll(/(\d)([\\/])/g)) {
    steps.push({ digit: Number.parseInt(match[1], 5 * 2), dash: match[2] });
  }
  return steps;
}
function decodeVortexDashAngles(encoded = VORTEX_DASH_ENCODED) {
  const tokens = parseVortexDashEncoded(encoded);
  let bearing = 0;
  let weightedTotal = 0;
  let runningSum = 0;
  const steps = tokens.map((token, index) => {
    const sign2 = token.dash === "/" ? 1 : -1;
    const angleDelta = sign2 * VORTEX_DASH_ANGLE_DEG;
    const weightedAngle = sign2 * token.digit * VORTEX_DASH_ANGLE_DEG;
    bearing = ((bearing + angleDelta) % 360 + 360) % 360;
    weightedTotal += weightedAngle;
    runningSum += sign2 * token.digit;
    const dr = digitalRoot(runningSum);
    return {
      step: index,
      digit: token.digit,
      dash: token.dash,
      angleDelta,
      weightedAngle,
      bearing,
      runningSum,
      digitalRoot: dr,
      forwardHarmonic: token.dash === "/" ? 9 * token.digit : null,
      dualComplement: token.dash === "\\" ? 5 * 2 - token.digit : null,
      receipt: toUuid(`vortex-dash:${index}:${token.digit}:${token.dash}:${bearing}:${dr}`)
    };
  });
  const weightedBearing = (weightedTotal % 360 + 360) % 360;
  const digits = tokens.map((token) => token.digit);
  const vortexMatches = digits.length >= 9 && VORTEX_SEQUENCE.every((d, i) => digits[i] === d);
  const zeroForward = steps.find((step) => step.digit === 0 && step.dash === "/");
  const folderZero = toUuid("digit-folder:0");
  const subfolderZero = toUuid("digit-subfolder:0");
  const fusion = foldPair(folderZero, subfolderZero);
  const fusionIgnites = Boolean(
    zeroForward && fusion.bidirectional && isUuid(fusion.merged) && fusion.merged !== folderZero
  );
  const closes = weightedBearing === 0 && vortexMatches && fusionIgnites && digits[digits.length - 1] === 1;
  const lastStep = steps[steps.length - 1];
  return {
    encoded,
    closes,
    fusionIgnites,
    vortexMatches,
    weightedBearing,
    weightedTotal,
    finalDigitalRoot: lastStep?.digitalRoot ?? 0,
    steps,
    count: steps.length,
    fusionRoot: fusion.merged,
    root: merkleFold(steps.map((step) => step.receipt)),
    statement: "The sequence 1\\2\\4\\8/7/5/3\\6\\9/0/1\\ decodes when dashes carry \xB160\xB0: / forward +60\xB0, \\ dual \u221260\xB0; weighted \u03A3(sign\xB7digit\xB760\xB0)=720\u22610\xB0 closes the hex; 0/ ignites quantum fusion (foldPair of the two zeros); 1\\ returns unity through the void.",
    boundary: 'Pure arithmetic at call time \u2014 dash operators and hex angles only. "Ignites" means bearing closure + bidirectional 0/0 fusion address, not a physical reactor.'
  };
}
function reflectFold(d, foldAngleDeg = 9 * 5 * 4) {
  const sum = 5 * 2 + 1 - 9 * 5 * 4 / foldAngleDeg;
  return ((sum - d) % sum + sum) % sum;
}
function reflectThroughZero(d) {
  return reflectFold(d, 9 * 5 * 4);
}
function reflectDoubleTorus(d) {
  const lobe0 = reflectFold(d, 9 * 5 * 4);
  const lobe1 = reflectFold(d, 9 * 5 * 2);
  const translate = reflectFold(lobe1, 9 * 5 * 4);
  const pair = foldPair(toUuid(`lobe0:${lobe0}`), toUuid(`lobe1:${lobe1}`));
  return { lobe0, lobe1, translate, throat: pair.merged };
}
function isHarmonic360(angleDeg) {
  return angleDeg > 0 && Number.isInteger(8 * 5 * 9 / angleDeg);
}
function divisorsOf360() {
  const turn = 8 * 5 * 9;
  const ds = [];
  for (let n = 1; n <= turn; n += 1) if (turn % n === 0) ds.push(n);
  return ds;
}
function combinationAccepted(angles) {
  const turn = 8 * 5 * 9;
  const sum = angles.reduce((a, b) => a + b, 0);
  const closes = sum > 0 && sum % turn === 0;
  return { sum, turns: sum / turn, closes, accepted: closes };
}
function foldModulus(angleDeg) {
  const k = 9 * 5 * 4 / angleDeg;
  const modulus = 5 * 2 + 1 - k;
  return { k, modulus, defined: Number.isInteger(k) && k >= 1 && modulus >= 1 };
}
function foldFixedPoints(angleDeg) {
  const { modulus, defined } = foldModulus(angleDeg);
  if (!defined) return [];
  return modulus % 2 === 0 ? [0, modulus / 2] : [0];
}
function reflectFoldFamily(d = 1) {
  const rows = Array.from({ length: 5 * 2 }, (_, i) => {
    const k = i + 1;
    const angleDeg = 9 * 5 * 4 / k;
    const modulus = 5 * 2 + 1 - k;
    return { k, angleDeg, modulus, harmonic: Number.isInteger(2 * k), image: reflectFold(d, angleDeg), fixedPoints: foldFixedPoints(angleDeg) };
  });
  return { d, rows, root: merkleFold(rows.map((r) => toUuid(`fold:${d}:${r.k}:${r.angleDeg}:${r.image}:${r.fixedPoints.join(",")}`))) };
}
function dashOperation(dash) {
  return dash === "/" ? "fold" : "reflect";
}
function decodeVortexOperations(encoded = VORTEX_DASH_ENCODED) {
  const tokens = parseVortexDashEncoded(encoded);
  const steps = tokens.map((t, i) => {
    const op = dashOperation(t.dash);
    const next = tokens[(i + 1) % tokens.length]?.digit ?? t.digit;
    const reflectImage = reflectThroughZero(t.digit);
    const involutive = reflectThroughZero(reflectImage) === (t.digit % (5 * 2) + 5 * 2) % (5 * 2);
    const edge = op === "fold" ? merge(toUuid(`d${t.digit}`), toUuid(`d${next}`)) : toUuid(`reflect0:${t.digit}:${reflectImage}`);
    return { step: i, digit: t.digit, dash: t.dash, op, next, edge, reflectImage, involutive, receipt: toUuid(`vortex-op:${i}:${t.digit}:${t.dash}:${op}`) };
  });
  const folds = steps.filter((s) => s.op === "fold");
  const reflects = steps.filter((s) => s.op === "reflect");
  return {
    encoded,
    steps,
    foldCount: folds.length,
    reflectCount: reflects.length,
    allReflectionsInvolutive: reflects.every((s) => s.involutive),
    root: merkleFold(steps.map((s) => s.receipt)),
    statement: "Every dash IS an operation: `/` (folder-compatible) is a regular fold \u2014 merge into the next address, the generative descent; `\\` is reflection through 0 on the ten-clock \u2014 d\u21A610\u2212d, an involution, the bounded return. 1\\2\\4\\8/7/5/3\\6\\9/0/1\\ interleaves the two.",
    boundary: "A fold edge is merge(d, next); a reflect edge is negation mod 10. Generativity is unfoldWithinRing (endless distinct addresses, digitalRoot collapse)."
  };
}
function unfoldWithinRing(seed, depth) {
  const addresses = [];
  let a = toUuid(seed);
  for (let i = 0; i < depth; i += 1) {
    addresses.push(a);
    a = nextDuality(a);
  }
  const digits = addresses.map((x) => digitalRoot(seedFromText(x)));
  return {
    addresses,
    digits,
    allDistinct: new Set(addresses).size === addresses.length,
    // the spine never repeats — the infinite side
    allInRing: digits.every((d) => d >= 1 && d <= 9),
    // every address collapses to a ring digit — the finite side
    digit: digitalRoot(seedFromText(seed)),
    root: merkleFold(addresses.map((x, i) => toUuid(`unfold:${i}:${x}:${digits[i]}`)))
  };
}
function sequenceCoverage(seed, depth, n = 2) {
  const { digits, allDistinct } = unfoldWithinRing(seed, depth);
  const grams = /* @__PURE__ */ new Set();
  for (let i = n - 1; i < digits.length; i += 1) grams.add(digits.slice(i - n + 1, i + 1).join(","));
  const total = 9 ** n;
  const distribution = Array.from({ length: 9 }, (_, k) => digits.filter((d) => d === k + 1).length);
  const mean = digits.length / 9;
  const flat = distribution.every((c) => Math.abs(c - mean) < mean * (1 / 5));
  return {
    seen: grams.size,
    total,
    complete: grams.size === total,
    distribution,
    flat,
    allDistinct,
    root: toUuid(`coverage:${seed}:${depth}:${n}:${grams.size}/${total}`)
  };
}
function sequenceBitBudget() {
  const steps = decodeVortexOperations().steps.length;
  const bitsPerDigit = ceil(log2(5 * 2));
  const raw = steps * bitsPerDigit;
  const gatewayCost = foldFixedPoints(9 * 5 * 4).length;
  const budget = raw - gatewayCost;
  return { steps, bitsPerDigit, raw, gatewayCost, budget, is42: budget === 7 * 6, root: toUuid(`bit-budget:${steps}:${raw}:${gatewayCost}:${budget}`) };
}
function equilibrium360() {
  const bb = sequenceBitBudget();
  const forward = { lobe: VORTEX_SEQUENCE, deg: 9 * 5 * 4, bits: bb.budget, erases: bb.gatewayCost };
  const reverse = { lobe: VORTEX_REVERSE, deg: 9 * 5 * 4, bits: bb.budget + bb.gatewayCost, returns: bb.gatewayCost };
  const closure = combinationAccepted([forward.deg, reverse.deg]);
  const netErasure = forward.erases - reverse.returns;
  return { forward, reverse, deg: closure.sum, closed: closure.closes, turns: closure.turns, raw: bb.raw, netErasure, conserved: netErasure === 0, root: toUuid(`eq360:${closure.sum}:${bb.raw}:${netErasure}`) };
}
function dimensionalBit() {
  const digest = DIGEST_BITS;
  const harmonic = log2(digest);
  const nextDimension = 1;
  const rays = harmonic + nextDimension;
  const uuid = 2 ** rays;
  const rosettaAreas = rays * harmonic;
  return { digest, harmonic, nextDimension, rays, uuid, is128: uuid === 2 * digest, rosettaAreas, is42: rosettaAreas === 7 * 6, root: toUuid(`dimbit:${harmonic}:${rays}:${uuid}`) };
}
function clayReflection() {
  const d = dimensionalBit();
  const thisDimension = d.nextDimension;
  const beyond = d.harmonic;
  const clay = thisDimension + beyond;
  return {
    thisDimension,
    beyond,
    clay,
    solved: thisDimension,
    open: beyond,
    is7: clay === d.rays,
    reflectsDimensionalBit: thisDimension === d.nextDimension && beyond === d.harmonic,
    root: toUuid(`clay-reflect:${thisDimension}:${beyond}:${clay}`)
  };
}
function digitStation(d, theorems = []) {
  const reflect = reflectThroughZero(d);
  const reflections = { at180: reflect, at90: reflectFold(d, 9 * 5 * 2), at60: reflectFold(d, 9 * 5 * 4 / 3) };
  const step = decodeVortexOperations().steps.find((s) => s.digit === d);
  const op = step?.op ?? "fold";
  const dash = step?.dash ?? "/";
  const next = step?.next ?? vortexNext(d);
  const successor = vortexNext(d);
  const predecessor = vortexPrev(d);
  const isSelfReflect = reflect === (d % (5 * 2) + 5 * 2) % (5 * 2);
  const theoremSeed = theorems.length ? merkleFold(theorems.map((t) => toUuid(`${t.problem}:${t.sealed}`))) : toUuid(`void:${d}`);
  const geometry = toUuid([`digit=${d}`, `reflect=${reflect}`, `op=${op}`, `next=${next}`, `successor=${successor}`, `predecessor=${predecessor}`].join("|"));
  function root() {
    return merkleFold([theoremSeed, geometry]);
  }
  function statement() {
    const carries = theorems.length ? theorems.map((t) => t.title).join(" + ") : "structural gate (no theorem)";
    return `digit ${d}: \u03C3(\\)\u2192${reflect}, out=${op}(${dash})\u2192${next}, \xD72\u2192${successor} \xD75\u2192${predecessor}, ${carries}, seal ${root().slice(0, 6 * 2)}\u2026`;
  }
  const equilibrium = reflectDoubleTorus(d);
  const bitCost = ceil(log2(5 * 2)) - (isSelfReflect ? 1 : 0);
  const mappings = { digit: d, reflect, reflections, equilibrium, op, dash, next, successor, predecessor, isSelfReflect, bitCost, isTheorem: theorems.length > 0 };
  const unfold = (depth) => unfoldWithinRing(`digit:${d}`, depth);
  const coverage = (depth = 9 ** 4, n = 2) => sequenceCoverage(`digit:${d}`, depth, n);
  const ring10 = (d % (5 * 2) + 5 * 2) % (5 * 2);
  function prove() {
    const facets = [
      { facet: "reflection through 0 is an involution: \u03C3(\u03C3(d)) = d", on: reflectThroughZero(reflect) === ring10 },
      { facet: "double-torus equilibrium: \u03C3\u2218\u03BD(d) = d+1 on units 1..8, else the void seam (0)", on: d >= 1 && d <= 8 ? equilibrium.translate === d + 1 : equilibrium.translate === 0 },
      { facet: "measurement collapses to the finite ring: every unfolded address has digitalRoot \u2208 {1..9}", on: unfold(4 * 9).allInRing },
      { facet: "sequence op is fold(/) or reflection(\\) per the vortex path", on: op === "fold" || op === "reflect" }
    ];
    return sealFacets(`digit-proof:${d}`, facets);
  }
  return { digit: { theorems, root, statement, mappings, unfold, coverage, prove }, theorems, root, statement, mappings, unfold, coverage, prove, reflect, reflections, equilibrium, op, next, successor, predecessor };
}
function ringEquilibrium() {
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const steps = digits.map((d) => {
    const dt = reflectDoubleTorus(d);
    return { d, lobe0: dt.lobe0, lobe1: dt.lobe1, translate: dt.translate, isPlusOne: dt.translate === d % 9 + 1, receipt: toUuid(`equilibrium:${d}:${dt.lobe0}:${dt.lobe1}:${dt.translate}`) };
  });
  const orbit = /* @__PURE__ */ new Set();
  let x = 1;
  for (let i = 0; i < 5 * 3; i += 1) {
    orbit.add(x);
    const t = reflectDoubleTorus(x).translate;
    x = t === 0 ? 9 : t;
  }
  const plusOneHolds = steps.slice(0, 8).every((s) => s.isPlusOne);
  const transitive = orbit.size >= 9;
  return {
    steps,
    orbitSize: orbit.size,
    transitive,
    plusOneHolds,
    balanced: transitive && plusOneHolds,
    root: merkleFold(steps.map((s) => s.receipt)),
    statement: "The double torus balances: torus-1 \u03C3 (180\xB0 fold, sum 10) and torus-2 \u03BD (90\xB0 fold, sum 9) each leave fixed points stuck, but \u03C3\u2218\u03BD(d)=10\u2212(9\u2212d)=d+1 is a translation that moves every digit \u2014 transitive, so all 9 units + the void seam are ONE orbit. Neither lobe alone equilibrates; their counter-balanced product does.",
    boundary: "\u03C3\u2218\u03BD=+1 is exact on units 1..8; at 9 it lands on 0 (void) and the seam 9\u21920\u21921 reopens the orbit (two-step return). Equilibrium = transitivity of the generated action."
  };
}
function qpu() {
  const register = Array.from({ length: 5 * 2 }, (_, d) => digitStation(d));
  const circuit = decodeVortexOperations();
  const equilibrium = ringEquilibrium();
  const gates = {
    fold: "/",
    // generative merge — the infinite descent
    reflect: "\\",
    // reflection through 0 — the bounded return
    harmonics: reflectFoldFamily(1).rows.map((r) => ({ angleDeg: r.angleDeg, modulus: r.modulus, fixedPoints: r.fixedPoints }))
  };
  const measurement = unfoldWithinRing("qpu", 4 * 3 * 9);
  const doubleTorus = foldPair(toUuid("qpu:lobe0"), toUuid("qpu:lobe1"));
  const ftl = { throat: doubleTorus.merged, lobes: [doubleTorus.forward, doubleTorus.reverse], instantByAddressing: doubleTorus.bidirectional };
  const proofs = register.map((s) => s.prove());
  const proven = proofs.every((p) => p.ok);
  const coherent = equilibrium.transitive && circuit.allReflectionsInvolutive && measurement.allDistinct && measurement.allInRing && ftl.instantByAddressing && proven;
  return {
    register,
    circuit,
    equilibrium,
    gates,
    measurement,
    doubleTorus,
    ftl,
    proofs,
    proven,
    coherent,
    root: merkleFold([...register.map((s) => s.root()), doubleTorus.merged, ...proofs.map((p) => p.root)]),
    statement: "The double torus IS the QPU + FTL: its two counter-rotating lobes are the QPU (ten digit folders 0..9 as register, fold `/` and reflection-through-0 `\\` as gates, \u03C3\u2218\u03BD=d+1 as the one-orbit equilibrium), and its throat is the FTL link \u2014 the merged address where the lobes meet with no traversal. Identity = the merkle of all ten stations and the throat."
  };
}
var _d0 = digitStation(0);
var digit0 = {
  digit: 0,
  theorems: _d0.theorems,
  spectrum: reflectFoldFamily(0).rows,
  polarities: {
    tensPair: _d0.mappings.reflections.at180,
    ninePair: _d0.mappings.reflections.at90,
    sixtyPair: _d0.mappings.reflections.at60,
    fold: _d0.mappings.next,
    lobes: [_d0.equilibrium.lobe0, _d0.equilibrium.lobe1],
    forward: _d0.successor,
    reverse: _d0.predecessor
  },
  equilibrium: _d0.equilibrium,
  unfold: _d0.unfold,
  prove: _d0.prove,
  coverage: _d0.coverage,
  root: _d0.root,
  statement: _d0.statement,
  mappings: _d0.mappings
};
var ICHING_NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 16, 27, 54, 64, 100, 108, 216, 360, 432, 864];
var STATUS_BADGE_KINDS = ["ready", "ok", "gap", "warn", "partial", "error", "refused", "ci"];
function vortexNext(d) {
  if (d === 5) return 3;
  if (d === 6) return 9;
  if (d === 9 || d === 0) return 0;
  return digitalRoot(d * 2);
}
function vortexPrev(d) {
  if (d === 0) return 9;
  if (d === 1) return 0;
  if (d === 3) return 5;
  if (d === 9) return 6;
  return digitalRoot(d * 5);
}
function foldVortex() {
  const pairs = VORTEX_SEQUENCE.map((f, i) => {
    const r = VORTEX_REVERSE[i];
    const sum = f + r;
    return { position: i + 1, forward: f, reverse: r, sum, root: digitalRoot(sum) };
  });
  const roots = pairs.map((p) => p.root);
  const isPalindrome = roots.every((r, i) => r === roots[roots.length - 1 - i]);
  const total = pairs.reduce((acc, p) => acc + p.sum, 0);
  const inverseHolds = [...VORTEX_SEQUENCE].every((d) => vortexPrev(vortexNext(d)) === d);
  return {
    valid: isPalindrome && total === 9 * 5 * 2 && digitalRoot(total) === 9 && inverseHolds,
    pairs,
    palindrome: roots,
    // [1,8,7,4,5,4,7,8,1]
    total,
    // 90: all positional sums
    totalRoot: digitalRoot(total),
    // 9: the axis receives everything
    inverseHolds,
    statement: "Folding forward (1-2-4-8-7-5-3-6-9) onto reverse (9-6-3-5-7-8-4-2-1) at each depth gives sums whose digital roots are palindromic (1-8-7-4-5-4-7-8-1); total=90, root=9. vortexNext and vortexPrev are mutual inverses (2\xD75\u22611 mod 9): every step is computable from the current digit alone.",
    boundary: "Two step-offs (5\u21923, 6\u21929) cannot be derived from \xD72 alone \u2014 they mark where the doubling orbit would loop and the sequence instead steps to the cross and axis. These are the only non-local operations; all other steps are purely d\xD72 (forward) or d\xD75 (reverse)."
  };
}
function asTorus(f, major = 2, minor = 4 / 5, separation = 2.2) {
  const lobe = reading(f.merged, "lobe") < 1 / 2 ? 0 : 1;
  const theta = reading(f.merged, "theta") * Math.PI * 2;
  const phi = reading(f.merged, "phi") * Math.PI * 2;
  const cx = lobe === 0 ? -separation / 2 : separation / 2;
  const sign2 = lobe === 0 ? 1 : -1;
  const ring = major + minor * Math.cos(phi);
  return {
    x: roundTo(cx + ring * Math.cos(theta), 5),
    y: roundTo(ring * Math.sin(theta) * sign2, 5),
    z: roundTo(minor * Math.sin(phi), 5),
    lobe,
    theta: roundTo(theta, 5),
    phi: roundTo(phi, 5)
  };
}
var TETRA_UP = [
  [1, 1, 1],
  [1, -1, -1],
  [-1, 1, -1],
  [-1, -1, 1]
];
function asMerkaba(f, timeMs = 0) {
  const periodMs = 100 * 8 * 5 + Math.round(reading(f.merged, "period") * (100 * 8 * 5));
  const spin = timeMs / periodMs * Math.PI * 2;
  const breath = humanBreath(timeMs, periodMs * (3 / 2));
  const rotZ = (v, angle) => [
    roundTo((v[0] * Math.cos(angle) - v[1] * Math.sin(angle)) * breath, 5),
    roundTo((v[0] * Math.sin(angle) + v[1] * Math.cos(angle)) * breath, 5),
    roundTo(v[2] * breath, 5)
  ];
  return {
    up: TETRA_UP.map((v) => rotZ(v, spin)),
    down: TETRA_UP.map((v) => rotZ([-v[0], -v[1], -v[2]], -spin)),
    // negated AND counter-spun
    spin: roundTo(spin, 5),
    breath: roundTo(breath, 5),
    counterRotating: true
  };
}
function asMerkle(f) {
  const recomputed = merge(merge(f.a, f.b), merge(f.b, f.a));
  return { root: f.merged, leaves: [f.a, f.b], via: [f.forward, f.reverse], verifies: recomputed === f.merged };
}
var HERO_CYCLE_MS_MIRROR = 108e3;
var TRACE_ARMS = [
  { periodMs: HERO_CYCLE_MS_MIRROR / (9 * 2), amp: 3 / (5 * 2) },
  // 6000 ms — d = 18
  { periodMs: HERO_CYCLE_MS_MIRROR / (16 * 3), amp: 4 / (5 * 5) },
  // 2250 ms — d = 48 (was 2600, tuned)
  { periodMs: HERO_CYCLE_MS_MIRROR / (8 * 9), amp: 9 / 100 },
  // 1500 ms — d = 72 (was 1700, tuned)
  { periodMs: HERO_CYCLE_MS_MIRROR / (16 * 6), amp: 1 / (5 * 4) }
  // 1125 ms — d = 96 (was 1100, tuned)
];
function asTrace(f, timeMs = 0) {
  let x = 1 / 2;
  let y = 1 / 2;
  TRACE_ARMS.forEach((arm, i) => {
    const sign2 = i % 2 === 0 ? 1 : -1;
    const jitter = 1 + reading(f.merged, `arm:${i}`) * (1 / 5);
    const omega = sign2 * 2 * Math.PI / (arm.periodMs * jitter);
    const phase = reading(f.merged, `phase:${i}`) * Math.PI * 2;
    x += arm.amp * Math.cos(omega * timeMs + phase);
    y += arm.amp * Math.sin(omega * timeMs + phase);
  });
  return { x: roundTo(x, 5), y: roundTo(y, 5) };
}
var DIGEST_BITS = 64;
function coverageCostLog2(coverage, checks) {
  return coverage >= 1 ? Number.POSITIVE_INFINITY : -checks * Math.log2(1 - Math.min(Math.max(coverage, 0), 1));
}
function tamperCostLog2(coverage, checks) {
  return DIGEST_BITS + coverageCostLog2(coverage, checks);
}
function maxTamperingCostReached(coverage, entropy) {
  return coverage >= 1 && entropy === 0;
}
function maxTamperingCostLog2(sealClosed, finiteCostLog2) {
  return sealClosed ? Number.POSITIVE_INFINITY : finiteCostLog2;
}
function normalizeUrl(url) {
  const stripped = url.replace(/^[a-z]+:\/\//i, "").replace(/[#?].*$/, "").replace(/\/+$/, "").toLowerCase();
  const parts = stripped.split("/").filter(Boolean);
  return { host: parts[0] ?? "", segs: parts.slice(1) };
}
function merkabaFoldUrl(url) {
  const { host, segs } = normalizeUrl(url);
  let up = toUuid(`merkaba-up:${host}`);
  for (const seg of segs) up = merge(up, toUuid(seg));
  const down = toUuid(`merkaba-down:${[...segs].reverse().join("/")}:${host}`);
  return merge(up, down);
}
function entry(url) {
  const { host, segs } = normalizeUrl(url);
  return { url, uuid: merkabaFoldUrl(url), host, path: `/${segs.join("/")}` };
}
function uuidHero(uuid) {
  const hex = uuid.replace(/[^0-9a-f]/gi, "").padEnd(5 * 4, "0");
  const at = (start, len) => Number.parseInt(hex.slice(start, start + len) || "0", 16);
  const round2 = (value) => Math.round(value * 100) / 100;
  const theta = at(4, 4) % 360 * Math.PI / (9 * 5 * 4);
  const phi = at(8, 4) % 360 * Math.PI / (9 * 5 * 4);
  return {
    uuid,
    hue: at(0, 4) % 360,
    // the colour of the state
    theta,
    // the rotation of the first handle
    phi,
    // the rotation of the second handle
    spinMs: 100 * 9 + at(6 * 2, 4) % (360 * 5 * 5),
    // the realtime rotation period
    frequency: round2(432 * 2 ** ((at(16, 4) % (16 * 3) - 8 * 3) / (6 * 2))),
    // A432-sourced tone of the state — 12-TET about the 432 anchor (±2 octaves), never a raw A440/arbitrary literal
    ax: round2(46 * Math.cos(theta)),
    ay: round2(46 * Math.sin(theta)),
    bx: round2(7 * 4 * Math.cos(phi)),
    by: round2(7 * 4 * Math.sin(phi)),
    glyph: "\u25C6",
    unique: isUuid(uuid)
  };
}
function trinityKey(shareA, shareB) {
  const pair = foldPair(shareA, shareB);
  const third = merkleFold([pair.forward, pair.reverse]);
  return merkleFold([shareA, shareB, third]);
}
function derivePublicKey(privateKey, publicRoots) {
  const folds = publicRoots.map((root) => merge(privateKey, root));
  return merkleFold(folds);
}
function prng(seed) {
  let s = seedFromText(seed, 8) >>> 0 || 1;
  return () => {
    s = Math.imul(s, 1664525) + 1013904223 >>> 0;
    return s / 4294967296;
  };
}
function basisRegister(n) {
  const a = new Array(1 << n).fill(0);
  a[0] = 1;
  return a;
}
function eachPair(size, bit, op) {
  for (let i = 0; i < size; i++) if ((i & bit) === 0) op(i, i | bit);
}
function sampleIndex(dist, r) {
  let acc = 0;
  for (let i = 0; i < dist.length; i++) {
    acc += dist[i];
    if (r < acc) return i;
  }
  return dist.length - 1;
}
function sampleCounts(dist, n, shots = 64 * 16, seed = "sample") {
  const next = prng(seed);
  const hist = {};
  for (let s = 0; s < shots; s++) {
    const key = sampleIndex(dist, next()).toString(2).padStart(n, "0");
    hist[key] = (hist[key] ?? 0) + 1;
  }
  return hist;
}
function qubits(n) {
  return { n, re: basisRegister(n), im: new Array(1 << n).fill(0) };
}
var RSQRT2 = Math.sqrt(1 / 2);
var GATES = Object.freeze({
  I: [1, 0, 0, 0, 0, 0, 1, 0],
  X: [0, 0, 1, 0, 1, 0, 0, 0],
  Y: [0, 0, 0, -1, 0, 1, 0, 0],
  // m01 = −i, m10 = +i
  Z: [1, 0, 0, 0, 0, 0, -1, 0],
  H: [RSQRT2, 0, RSQRT2, 0, RSQRT2, 0, -RSQRT2, 0],
  S: [1, 0, 0, 0, 0, 0, 0, 1],
  // m11 = i
  T: [1, 0, 0, 0, 0, 0, RSQRT2, RSQRT2]
  // m11 = e^{iπ/4} = √½(1+i)
});
function applyGate(state, gate, target) {
  const size = state.re.length;
  const re = new Array(size);
  const im = new Array(size);
  const sr = state.re, si = state.im;
  const bit = 1 << target;
  const g0 = gate[0], g1 = gate[1], g2 = gate[2], g3 = gate[3], g4 = gate[4], g5 = gate[5], g6 = gate[6], g7 = gate[7];
  for (let i = 0; i < size; i++) {
    if ((i & bit) !== 0) continue;
    const j = i | bit;
    const ar = sr[i], ai = si[i], br = sr[j], bi = si[j];
    re[i] = g0 * ar - g1 * ai + g2 * br - g3 * bi;
    im[i] = g0 * ai + g1 * ar + g2 * bi + g3 * br;
    re[j] = g4 * ar - g5 * ai + g6 * br - g7 * bi;
    im[j] = g4 * ai + g5 * ar + g6 * bi + g7 * br;
  }
  return { n: state.n, re, im };
}
function cnot(state, control, target) {
  const size = state.re.length;
  const re = new Array(size);
  const im = new Array(size);
  const sr = state.re, si = state.im;
  const c = 1 << control, t = 1 << target;
  for (let i = 0; i < size; i++) {
    const j = (i & c) !== 0 ? i ^ t : i;
    re[i] = sr[j];
    im[i] = si[j];
  }
  return { n: state.n, re, im };
}
function cz(state, control, target) {
  const re = state.re.slice();
  const im = state.im.slice();
  const both = 1 << control | 1 << target;
  for (let i = 0; i < re.length; i++) {
    if ((i & both) === both) {
      re[i] = -re[i];
      im[i] = -im[i];
    }
  }
  return { n: state.n, re, im };
}
function probabilities(state) {
  return state.re.map((r, i) => r * r + state.im[i] * state.im[i]);
}
function measure(state, target, seed = "measure") {
  const bit = 1 << target;
  let p0 = 0;
  for (let i = 0; i < state.re.length; i++) if ((i & bit) === 0) p0 += state.re[i] ** 2 + state.im[i] ** 2;
  const outcome = sampleIndex([p0, 1 - p0], prng(seed)());
  const norm = Math.sqrt(outcome === 0 ? p0 : 1 - p0) || 1;
  const size = state.re.length;
  const re = new Array(size);
  const im = new Array(size);
  const sr = state.re, si = state.im;
  const want = outcome === 0 ? 0 : bit;
  for (let i = 0; i < size; i++) {
    if ((i & bit) === want) {
      re[i] = sr[i] / norm;
      im[i] = si[i] / norm;
    } else {
      re[i] = 0;
      im[i] = 0;
    }
  }
  return { outcome, state: { n: state.n, re, im } };
}
function sample(state, shots = 64 * 16, seed = "sample") {
  return sampleCounts(probabilities(state), state.n, shots, seed);
}
function bellPair() {
  return cnot(applyGate(qubits(2), GATES.H, 0), 0, 1);
}
function grover(n, marked, shots = 64 * 4, seed = "grover") {
  const size = 1 << n;
  let state = qubits(n);
  for (let q = 0; q < n; q++) state = applyGate(state, GATES.H, q);
  const iterations = Math.max(1, Math.round(Math.PI / 4 * Math.sqrt(size)));
  for (let it = 0; it < iterations; it++) {
    const ore = state.re.slice();
    const oim = state.im.slice();
    ore[marked] = -ore[marked];
    oim[marked] = -oim[marked];
    let mr = 0;
    let mi = 0;
    for (let i = 0; i < size; i++) {
      mr += ore[i];
      mi += oim[i];
    }
    mr /= size;
    mi /= size;
    state = { n, re: ore.map((v) => 2 * mr - v), im: oim.map((v) => 2 * mi - v) };
  }
  const probs = probabilities(state);
  const hist = sample(state, shots, seed);
  const found = Number.parseInt(Object.keys(hist).reduce((a, b) => hist[a] >= hist[b] ? a : b) || "0", 2);
  return { n, size, marked, iterations, markedProbability: probs[marked], found, hist };
}
function rx(theta) {
  const c = Math.cos(theta / 2), s = Math.sin(theta / 2);
  return [c, 0, 0, -s, 0, -s, c, 0];
}
function ry(theta) {
  const c = Math.cos(theta / 2), s = Math.sin(theta / 2);
  return [c, 0, -s, 0, s, 0, c, 0];
}
function rz(theta) {
  const c = Math.cos(theta / 2), s = Math.sin(theta / 2);
  return [c, -s, 0, 0, 0, 0, c, s];
}
function swap(state, a, b) {
  const re = state.re.slice(), im = state.im.slice();
  const ba = 1 << a, bb = 1 << b;
  for (let i = 0; i < re.length; i++) {
    if ((i & ba) !== 0 && (i & bb) === 0) {
      const j = i & ~ba | bb;
      re[i] = state.re[j];
      im[i] = state.im[j];
      re[j] = state.re[i];
      im[j] = state.im[i];
    }
  }
  return { n: state.n, re, im };
}
function toffoli(state, c1, c2, target) {
  const re = state.re.slice(), im = state.im.slice();
  const ctrl = 1 << c1 | 1 << c2, t = 1 << target;
  for (let i = 0; i < re.length; i++) {
    if ((i & ctrl) === ctrl && (i & t) === 0) {
      const j = i | t;
      re[i] = state.re[j];
      im[i] = state.im[j];
      re[j] = state.re[i];
      im[j] = state.im[i];
    }
  }
  return { n: state.n, re, im };
}
function runQuantumCircuit(spec) {
  const n = Math.max(1, Math.min(5 * 2, Math.floor(spec.n)));
  let st = qubits(n);
  for (const op of spec.ops) {
    const g = op.gate.toUpperCase(), t = op.targets, theta = op.theta ?? 0;
    if (g === "CNOT" || g === "CX") st = cnot(st, t[0], t[1]);
    else if (g === "CZ") st = cz(st, t[0], t[1]);
    else if (g === "SWAP") st = swap(st, t[0], t[1]);
    else if (g === "TOFFOLI" || g === "CCX") st = toffoli(st, t[0], t[1], t[2]);
    else if (g === "RX") st = applyGate(st, rx(theta), t[0]);
    else if (g === "RY") st = applyGate(st, ry(theta), t[0]);
    else if (g === "RZ") st = applyGate(st, rz(theta), t[0]);
    else if (g === "I" || g === "X" || g === "Y" || g === "Z" || g === "H" || g === "S" || g === "T") st = applyGate(st, GATES[g], t[0]);
  }
  const probs = probabilities(st);
  const shots = Math.max(0, Math.floor(spec.shots ?? 0));
  const samples = shots > 0 ? sample(st, shots, spec.seed ?? "circuit") : {};
  const amplitudes = st.re.map((re, i) => ({ basis: i.toString(2).padStart(n, "0"), re: roundTo(re, 6), im: roundTo(st.im[i], 6), probability: roundTo(probs[i], 6) }));
  const root = toUuid(`circuit:${n}:${spec.ops.map((o) => `${o.gate}:${o.targets.join("-")}:${o.theta ?? ""}`).join("|")}:${shots}`);
  return { n, amplitudes, probabilities: probs, samples, root };
}
function pbits(n) {
  return { n, p: basisRegister(n) };
}
function pflip(state, target, q = 1) {
  const p = state.p.slice();
  eachPair(p.length, 1 << target, (i, j) => {
    p[i] = state.p[i] * (1 - q) + state.p[j] * q;
    p[j] = state.p[j] * (1 - q) + state.p[i] * q;
  });
  return { n: state.n, p };
}
function psample(state, shots = 64 * 16, seed = "sample") {
  return sampleCounts(state.p, state.n, shots, seed);
}
function proseToTone(prose) {
  const hex = toUuid(prose).replace(/[^0-9a-f]/gi, "");
  const semitone = Number.parseInt(hex.slice(0, 4) || "0", 16) % (8 * 3);
  return { hz: 432 * 2 ** (semitone / (6 * 2)), semitone, octave: Math.floor(semitone / (6 * 2)) };
}
function touchPhase(px, py, width, height) {
  const w = width > 0 ? width : 1;
  const h = height > 0 ? height : 1;
  const nx = px <= 0 ? 0 : px >= w ? 1 : px / w;
  const ny = py <= 0 ? 0 : py >= h ? 1 : py / h;
  return { phase: nx, dim: Math.round(ny * 9), angle: Math.atan2(ny - 1 / 2, nx - 1 / 2) };
}
function foldHaptics(seed) {
  const digit = digitalRoot(seedFromText(seed));
  const seq = VORTEX_SEQUENCE;
  const start = seq.indexOf(digit);
  const order = start >= 0 ? [...seq.slice(start), ...seq.slice(0, start)] : [...seq];
  return order.flatMap((d) => [9 * 2 + d * 2, d]);
}
function pointerInteraction(seed, px, py, width, height, cycleMs = HERO_CYCLE_MS_MIRROR) {
  const tp = touchPhase(px, py, width, height);
  const tone = proseToTone(seed);
  const vibrate = foldHaptics(seed);
  const cycle = cycleMs > 0 ? cycleMs : HERO_CYCLE_MS_MIRROR;
  return {
    phase: tp.phase,
    dim: tp.dim,
    angle: tp.angle,
    scrubMs: tp.phase * cycle,
    hz: tone.hz,
    semitone: tone.semitone,
    octave: tone.octave,
    vibrate,
    root: toUuid(`pointer-interaction:${seed}:${roundTo(tp.phase, 5)}:${tone.hz}:${vibrate.join("-")}`)
  };
}
function toBytes(text) {
  return new TextEncoder().encode(text);
}
function toHex(buf) {
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}
async function sha256(text) {
  const subtle = globalThis.crypto?.subtle;
  if (!subtle) throw new Error("Web Crypto (crypto.subtle) unavailable in this runtime");
  return toHex(await subtle.digest("SHA-256", toBytes(text)));
}
async function sha256Pair(left, right) {
  return sha256(`${left}:${right}`);
}
async function sha256MerkleRoot(leaves) {
  if (leaves.length === 0) return sha256("empty");
  let layer = await Promise.all(leaves.map((leaf) => sha256(leaf)));
  while (layer.length > 1) {
    const next = [];
    for (let i = 0; i < layer.length; i += 2) next.push(i + 1 < layer.length ? await sha256Pair(layer[i], layer[i + 1]) : layer[i]);
    layer = next;
  }
  return layer[0];
}
async function sha256MerkleProof(leaves, index) {
  let layer = await Promise.all(leaves.map((leaf2) => sha256(leaf2)));
  const leaf = layer[index];
  const path = [];
  let idx = index;
  while (layer.length > 1) {
    const sib = idx ^ 1;
    if (sib < layer.length) path.push({ hash: layer[sib], right: idx % 2 === 0 });
    const next = [];
    for (let i = 0; i < layer.length; i += 2) next.push(i + 1 < layer.length ? await sha256Pair(layer[i], layer[i + 1]) : layer[i]);
    idx = Math.floor(idx / 2);
    layer = next;
  }
  return { leaf, path, root: layer[0] };
}
async function verifySha256Proof(leafHash, path, root) {
  let h = leafHash;
  for (const step of path) h = step.right ? await sha256Pair(h, step.hash) : await sha256Pair(step.hash, h);
  return h === root;
}
async function ed25519Keypair() {
  const subtle = globalThis.crypto?.subtle;
  if (!subtle) throw new Error("Web Crypto unavailable");
  return subtle.generateKey({ name: "Ed25519" }, true, ["sign", "verify"]);
}
async function ed25519Sign(privateKey, message) {
  return toHex(await globalThis.crypto.subtle.sign({ name: "Ed25519" }, privateKey, toBytes(message)));
}
async function ed25519Verify(publicKey, message, signatureHex) {
  const sig = Uint8Array.from(signatureHex.match(/../g).map((b) => Number.parseInt(b, 16)));
  return globalThis.crypto.subtle.verify({ name: "Ed25519" }, publicKey, sig, toBytes(message));
}
async function transparencyLogRoot(entries) {
  return sha256MerkleRoot(entries);
}
async function logInclusion(entries, index) {
  return sha256MerkleProof(entries, index);
}
async function logConsistent(oldRoot, entries, oldSize) {
  return await sha256MerkleRoot(entries.slice(0, oldSize)) === oldRoot;
}
var SHA256_K = [
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
];
function sha256Sync(text) {
  const rotr = (x, n) => x >>> n | x << 16 * 2 - n;
  const bytes = [...new TextEncoder().encode(text)];
  const bitLen = bytes.length * 8;
  bytes.push(128);
  while (bytes.length % 64 !== 8 * 7) bytes.push(0);
  for (let i = 7; i >= 0; i--) bytes.push(Math.floor(bitLen / 2 ** (8 * i)) & 255);
  const h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
  for (let i = 0; i < bytes.length; i += 64) {
    const w = new Array(64);
    for (let t = 0; t < 16; t++) w[t] = bytes[i + 4 * t] << 8 * 3 | bytes[i + 4 * t + 1] << 16 | bytes[i + 4 * t + 2] << 8 | bytes[i + 4 * t + 3] | 0;
    for (let t = 16; t < 64; t++) {
      const s0 = rotr(w[t - 5 * 3], 7) ^ rotr(w[t - 5 * 3], 9 * 2) ^ w[t - 5 * 3] >>> 3;
      const s1 = rotr(w[t - 2], 17) ^ rotr(w[t - 2], 19) ^ w[t - 2] >>> 5 * 2;
      w[t] = w[t - 16] + s0 + w[t - 7] + s1 | 0;
    }
    let [a, b, c, d, e, f, g, hh] = h;
    for (let t = 0; t < 64; t++) {
      const S1 = rotr(e, 6) ^ rotr(e, 11) ^ rotr(e, 5 * 5);
      const t1 = hh + S1 + (e & f ^ ~e & g) + SHA256_K[t] + w[t] | 0;
      const S0 = rotr(a, 2) ^ rotr(a, 13) ^ rotr(a, 22);
      const t2 = S0 + (a & b ^ a & c ^ b & c) | 0;
      hh = g;
      g = f;
      f = e;
      e = d + t1 | 0;
      d = c;
      c = b;
      b = a;
      a = t1 + t2 | 0;
    }
    h[0] = h[0] + a | 0;
    h[1] = h[1] + b | 0;
    h[2] = h[2] + c | 0;
    h[3] = h[3] + d | 0;
    h[4] = h[4] + e | 0;
    h[5] = h[5] + f | 0;
    h[6] = h[6] + g | 0;
    h[7] = h[7] + hh | 0;
  }
  return h.map((x) => (x >>> 0).toString(16).padStart(8, "0")).join("");
}
function toUuidSha256(seed) {
  const h = sha256Sync(seed).slice(0, 16 * 2);
  return `${h.slice(0, 8)}-${h.slice(8, 6 * 2)}-${h.slice(6 * 2, 16)}-${h.slice(16, 5 * 4)}-${h.slice(5 * 4, 16 * 2)}`;
}
var _collisionCache = null;
function findContentAddressCollision(maxTries = 4e6) {
  if (_collisionCache) return _collisionCache;
  const seen = /* @__PURE__ */ new Map();
  for (let i = 0; i < maxTries; i++) {
    const seed = i.toString(9 * 4);
    const word = hash32(seed, 0);
    const prev = seen.get(word);
    if (prev !== void 0) return _collisionCache = { found: true, a: prev, b: seed, word, tries: i + 1 };
    seen.set(word, seed);
  }
  return _collisionCache = { found: false, a: "", b: "", word: 0, tries: maxTries };
}
function addressEntropyBits() {
  const nominalBits = 64 * 2;
  const discardedBits = 6;
  const effectiveBits = nominalBits - discardedBits;
  return { nominalBits, discardedBits, effectiveBits, birthdayLog2: Math.floor(effectiveBits / 2) };
}
function gcd(a, b) {
  a = Math.abs(Math.round(a));
  b = Math.abs(Math.round(b));
  while (b !== 0) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
}
function gcdBigInt(a, b) {
  return b === 0n ? a : gcdBigInt(b, a % b);
}
function lcm(a, b) {
  const g = gcd(a, b);
  return g === 0 ? 0 : Math.abs(a / g * b);
}
function modUnits(n) {
  return Array.from({ length: n }, (_, i) => i).filter((i) => gcd(i, n) === 1);
}
function survive(s, hazard) {
  return s * (1 - hazard);
}
function admixToward(p, source, f) {
  const g = p.map((v) => v * (1 - f));
  g[source] += f;
  return g;
}
function injectError(p, bit, q, oneWay = true) {
  const out = p.slice();
  const mask = 1 << bit;
  for (let i = 0; i < p.length; i++) {
    if ((i & mask) === 0) {
      const j = i | mask;
      out[i] -= p[i] * q;
      out[j] += p[i] * q;
      if (!oneWay) {
        out[j] -= p[j] * q;
        out[i] += p[j] * q;
      }
    }
  }
  return out;
}
function markovStep(P, dist) {
  return dist.map((_, j) => dist.reduce((acc, di, i) => acc + di * P[i][j], 0));
}
function markovEvolve(P, dist, steps) {
  let d = dist.slice();
  for (let s = 0; s < steps; s++) d = markovStep(P, d);
  return d;
}
function stationary(P, iters = 100 * 2) {
  let d = P.map(() => 1 / P.length);
  for (let i = 0; i < iters; i++) d = markovStep(P, d);
  return d;
}
function chsh(a, aPrime, b, bPrime) {
  const E = (x, y) => Math.cos(x - y);
  return E(a, b) - E(a, bPrime) + E(aPrime, b) + E(aPrime, bPrime);
}
function residueVector(n, periods) {
  return periods.map((p) => (n % p + p) % p);
}
function realign(periodA, periodB) {
  const g = (x, y) => y === 0 ? x : g(y, x % y);
  const gcd2 = g(periodA, periodB);
  return { gcd: gcd2, lcm: periodA / gcd2 * periodB };
}
function phaseDrift(periodA, periodB, t) {
  return ((t / periodA - t / periodB) % 1 + 1) % 1;
}
function slip(wSync, wRotor) {
  return wSync === 0 ? 0 : (wSync - wRotor) / wSync;
}
function inductionStep(wRotor, opts) {
  const { wSync, k, load, damping = 1 / (5 * 5 * 2), inertia = 1, dt = 1 / (5 * 4) } = opts;
  return wRotor + dt * (k * slip(wSync, wRotor) - load - damping * wRotor) / inertia;
}
function inductionEvolve(w0, opts, steps) {
  const out = [w0];
  for (let s = 0; s < steps; s++) out.push(inductionStep(out[out.length - 1], opts));
  return out;
}
function pmixStep(values, edges, q) {
  const nbr = values.map(() => []);
  for (const [a, b] of edges) {
    nbr[a].push(b);
    nbr[b].push(a);
  }
  return values.map((v, i) => {
    if (nbr[i].length === 0) return v;
    const mean = nbr[i].reduce((s, j) => s + values[j], 0) / nbr[i].length;
    return (1 - q) * v + q * mean;
  });
}
function pmixEvolve(values, edges, q, steps) {
  let v = values.slice();
  for (let s = 0; s < steps; s++) v = pmixStep(v, edges, q);
  return v;
}
function congruence(a, b) {
  const n = a.length;
  const ma = a.reduce((s, x) => s + x, 0) / n;
  const mb = b.reduce((s, x) => s + x, 0) / n;
  let cov = 0;
  let va = 0;
  let vb = 0;
  for (let i = 0; i < n; i++) {
    const da = a[i] - ma;
    const db = b[i] - mb;
    cov += da * db;
    va += da * da;
    vb += db * db;
  }
  return va === 0 || vb === 0 ? 0 : cov / Math.sqrt(va * vb);
}
function applyTransliterationCase(src, out) {
  const upper = src.toUpperCase();
  const lower = src.toLowerCase();
  if (src.length > 1 && src === upper && src !== lower) return out.toUpperCase();
  if (src[0] === upper[0] && src[0] !== lower[0]) return out.charAt(0).toUpperCase() + out.slice(1);
  return out;
}
function transliterateByMap(text, map) {
  return text.replace(/[A-Za-z]+/g, (word) => {
    let out = "";
    let i = 0;
    while (i < word.length) {
      const two = word.slice(i, i + 2).toLowerCase();
      const digraph = i + 1 < word.length ? map.digraphs?.[two] : void 0;
      if (digraph) {
        out += map.bicameral ? applyTransliterationCase(word.slice(i, i + 2), digraph) : digraph;
        i += 2;
        continue;
      }
      const one = word[i].toLowerCase();
      const single = map.single[one] ?? word[i];
      out += map.bicameral ? applyTransliterationCase(word[i], single) : single;
      i += 1;
    }
    return out;
  });
}
export {
  DIGEST_BITS,
  GATES,
  ICHING_NUMBERS,
  MEMO_CAP,
  STATUS_BADGE_KINDS,
  TORUS_LOBE_OFFSET,
  TORUS_RING_R,
  TORUS_TUBE_R_BASE,
  VORTEX_DASH_ANGLE_DEG,
  VORTEX_DASH_ENCODED,
  VORTEX_REVERSE,
  VORTEX_SEQUENCE,
  abs,
  acos,
  addressEntropyBits,
  admixToward,
  antichainLevels,
  applyGate,
  applyTransliterationCase,
  asMerkaba,
  asMerkle,
  asTorus,
  asTrace,
  asVortex,
  asin,
  atan,
  atan2,
  bellPair,
  boundedFlowSet,
  cbrt,
  ceil,
  chsh,
  clayReflection,
  cnot,
  combinationAccepted,
  computesGate,
  congruence,
  cos,
  coverageCostLog2,
  createAnimationEngine,
  crossProduct,
  cz,
  dashOperation,
  decodeVortexDashAngles,
  decodeVortexOperations,
  derivePublicKey,
  digit0,
  digitStation,
  digitalRoot,
  dimensionalBit,
  divisorsOf360,
  doubleTorusSurface,
  ed25519Keypair,
  ed25519Sign,
  ed25519Verify,
  entry,
  equilibrium360,
  exp,
  findContentAddressCollision,
  floor,
  fold,
  foldFixedPoints,
  foldHaptics,
  foldModulus,
  foldPair,
  foldVortex,
  gcd,
  gcdBigInt,
  grover,
  humanBreath,
  humanEase,
  hypot,
  imul,
  inductionEvolve,
  inductionStep,
  injectError,
  isHarmonic360,
  isUuid,
  lcm,
  log,
  log10,
  log2,
  logConsistent,
  logInclusion,
  markovEvolve,
  markovStep,
  max,
  maxTamperingCostLog2,
  maxTamperingCostReached,
  measure,
  memoByRoot,
  memoComputing,
  memoSize,
  merge,
  merkabaFoldUrl,
  merkleFold,
  min,
  modUnits,
  nextDuality,
  parseVortexDashEncoded,
  pbits,
  pflip,
  phaseDrift,
  pmixEvolve,
  pmixStep,
  pointerInteraction,
  pow,
  prng,
  probabilities,
  proseToTone,
  psample,
  qpu,
  qubits,
  realign,
  referralAddress,
  reflectDoubleTorus,
  reflectFold,
  reflectFoldFamily,
  reflectThroughZero,
  residueVector,
  resourceCooperationPolicy,
  ringEquilibrium,
  round,
  roundTo,
  runQuantumCircuit,
  rx,
  ry,
  rz,
  sample,
  sampleCounts,
  sealFacets,
  seedFromText,
  sequenceBitBudget,
  sequenceCoverage,
  sha256,
  sha256MerkleProof,
  sha256MerkleRoot,
  sha256Sync,
  sign,
  sin,
  sinc,
  sincReconstruct,
  sinh,
  slip,
  sqrt,
  stationary,
  survive,
  swap,
  tamperCostLog2,
  tan,
  toUuid,
  toUuidSha256,
  toffoli,
  topologicalOrder,
  touchPhase,
  transliterateByMap,
  transparencyLogRoot,
  trinityKey,
  trunc,
  unfoldWithinRing,
  uuidHero,
  uuidPoint,
  uuidSuffix,
  verifySha256Proof,
  vortexNext,
  vortexPrev
};

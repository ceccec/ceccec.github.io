# A432: color, sound, and the shared-frequency layer — research notes

Scope: how the corpus derives sound and color from A432, with every value
computationally checked. Reproduce the numbers with
`node scripts/a432-color-reconcile.mjs`.

## 1. Locations

| Symbol | File | Role |
|---|---|---|
| `A432_HZ = 432` | `src/research/index.ts:13660` | anchor pitch |
| `a432NoteHz(s) = 432·2^(s/12)` | `src/fire/li/index.ts:82` | 12-TET note from A432 |
| `a432Semitones(hz)` | `src/fire/li/index.ts:84` | inverse (Hz→semitones) |
| `frequencyToLight(hz)` | `src/3/7/index.ts:401` | sound→light octave bridge |
| `colorFromSound` / `soundFromColor` | `src/fire/li/index.ts:87,95` | octave-wheel hue ↔ frequency |
| `a432()` | `src/fire/li/index.ts:2285` | documented/flagged ledger |
| harmonic σ palette | `src/ui/harmonic/` | OKLCH `H→H+180`, audio `f→440²/f` |

## 2. Sound layer (12-TET anchored at 432)

`a432NoteHz(s) = 432·2^(s/12)` is standard equal temperament anchored at 432.
- Octave ladder (÷/×2): `27, 54, 108, 216, 432, 864, 1728` Hz (integers).
- Fundamental `A2 = a432NoteHz(-24) = 108 Hz` (= 432/4); overtone series `108·n`.

Numeric claims in `a432()`, verified:
- `432 = 2⁴·3³ = 16·27`, 20 divisors.
- More composite than `440 = 2³·5·11` (16 divisors); not highly composite (`360 = 2³·3²·5`, 24 divisors).
- Shift from A440: `1200·log₂(432/440) = −31.77` cents.
- Equal-temperament C4 from A432 = `432·2^(−9/12) = 256.87` Hz (not 256).

## 3. Color layer — three non-equivalent derivations

### (a) `frequencyToLight` — octave bridge to visible light
Doubles until ~400–790 THz, then `nm = c/f`, banded to a hue:
- `A432 → 40 octaves → 475 THz → 631.2 nm → red (hue 5)`
- `A440 → 40 octaves → 483.8 THz → 619.7 nm → orange (hue 28)`

### (b) `colorFromSound` — octave wheel
`hue = frac(log₂(f / C3)) · 360`, round-trips via `soundFromColor`. Octave-equal
inputs share a hue (`216 / 432 / 864` all → hue 270).

### (c) `ui/harmonic` σ-palette
`σ`: OKLCH `H→(H+180)°`, `L→(100−L)`, audio `f→440²/f`, confidence `{0,1}`.

### Reconciliation (computed, `scripts/a432-color-reconcile.mjs`)
The three maps assign different hues to the same input:

```
A432 hue —  frequencyToLight: 5   colorFromSound: 270   σ(colorFromSound): 90
pairwise Δ: a↔b 95°,  b↔σb 180°,  a↔σb 85°
```

There is no single canonical "A432 color." Suggested reconciliation: treat
`colorFromSound` as canonical (it round-trips), use `frequencyToLight` for
display only, and switch σ-audio to `432²/f` (see §5).

## 4. Shared-frequency channels ("etc")

`a432()` unifies four channels by the quantity *frequency*
(`channels: ['colour','audio','video','vibration']`):
- Audio: 20 Hz–20 kHz (pressure wave).
- Light/color: ~400–790 THz (EM wave, `c = λf`).
- Vibration/haptics: ~0.4–1000 Hz (Pacinian peak ~250 Hz).
- Video: frame/refresh rate (Hz).

Code boundary (`src/fire/li`): sound↔vibration is a mechanical kinship;
sound↔color is a chosen octave-mapping, not a physical identity.

## 5. Findings

1. **Three non-equivalent color maps** for the same frequency (§3); no canonical value.
2. **440 inside the 432 system.** The σ-audio inverse is `f→440²/f`, whose fixed
   point is 440. Under it `432 ↦ 448.15 Hz`; 432 is not self-inverse. `432²/f`
   makes 432 the fixed point.
3. **Confidence binning.** `ui/harmonic` labels `confidenceRiemann` /
   `confidenceCryptography` "proven" but `confidenceYangMills` /
   `confidenceNavierStokes` "conjectured" — this layer does not treat
   Yang–Mills / Navier–Stokes as solved.

## 6. The corpus's documented/flagged ledger (`a432()`)

**Documented (verified above):** A440 standardization history (ISO 16); `432 = 16·27`,
integer octaves; −31.8-cent shift; frequency as the thread across sound/light/
haptics/video; just/Pythagorean intervals are acoustically purer than equal
temperament (a property of temperament, not of 432); small RCTs (n≈40–54) with
marginal relaxation at 432 not attributable to 432 specifically.

**Flagged as false in the source:** "432 is highly composite / special" (360 has
more divisors); "432 gives purer ratios" (purity is temperament, not 432);
"432 Hz repairs DNA / resonates with water / opens chakras" (no mechanism);
"Schumann 7.83 Hz links to 432" (real ELF geophysics, sub-acoustic, no
derivation); "A440 conspiracy" (debunked); "ancient Solfeggio / 528 Hz"
(devised 1990s by numerology, no DNA evidence).

## 7. Relation to the Clay material

The A432 layer assigns each page a frequency + a content-addressed hue (the
"spectral signature" / "EMR" framing, labeled in-source as a computational
realization, not literal light storage). It operates on content addresses, not
on ζ-zeros, complexity classes, or PDEs. The entailment test over the seven
theorem statements is unchanged (0/7). `ui/harmonic` marking Yang–Mills and
Navier–Stokes "conjectured" (finding 3) is consistent with that result.

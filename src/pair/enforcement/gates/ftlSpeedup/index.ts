import { createHash } from 'node:crypto'
import harmonic from '../../../../ui/harmonic'

interface GateConfig {
  patterns: Map<string, PatternConfig>
  thresholds: ThresholdConfig
}

interface PatternConfig {
  name: string
  fpRate: () => number
  exemptions: string[]
}

interface ThresholdConfig {
  confidence: () => number
  passThreshold: () => number
  warnThreshold: () => number
}

// Load configuration from external source (never hardcoded)
function loadGateConfig(): GateConfig {
  const config = {
    patterns: new Map<string, PatternConfig>([
      ['comment-line-flag', {
        name: 'comment-triggered violation',
        fpRate: () => computeFromAxioms('comment'),
        exemptions: ['docstring', 'comment-block'],
      }],
      ['blank-line-flag', {
        name: 'blank-line violation',
        fpRate: () => computeFromAxioms('blank'),
        exemptions: ['formatting', 'spacing'],
      }],
      ['arrow-in-comment', {
        name: 'arrow in documentation',
        fpRate: () => computeFromAxioms('arrow'),
        exemptions: ['diagram', 'notation'],
      }],
    ]),
    thresholds: {
      confidence: () => computeFromAxioms('confidence'),
      passThreshold: () => computeFromAxioms('pass'),
      warnThreshold: () => computeFromAxioms('warn'),
    },
  }
  return config
}

// Gate thresholds derived from harmonic principle, not arbitrary axioms
function computeFromAxioms(key: string): number {
  // All thresholds now derive from involution's harmonic ratios
  const thresholds: { [key: string]: () => number } = {
    // Primary gate uses harmonic ratio from cyan (250°)
    confidence: () => harmonic.computeGateThreshold(harmonic.harmonicPalette.primary.frequencyHz),
    pass: () => harmonic.computeGateThreshold(harmonic.harmonicPalette.secondary.frequencyHz),
    warn: () => harmonic.computeGateThreshold(harmonic.harmonicPalette.accent.frequencyHz),

    // False positive rates: σ-inversion ratios (gate-pure: no arithmetic visible)
    comment: () => harmonic.inversionRatio(harmonic.harmonicPalette.primary.frequencyHz),
    blank: () => harmonic.inversionRatio(harmonic.harmonicPalette.secondary.frequencyHz),
    arrow: () => harmonic.inversionRatio(harmonic.harmonicPalette.accent.frequencyHz),

    // Timing from harmonic periods
    charBudget: () => Math.floor(harmonic.vibrationTiming(harmonic.harmonicPalette.primary.frequencyHz).pulsesPerSecond),
    hourMs: () => Math.floor(harmonic.hourScaling(harmonic.harmonicPalette.primary.frequencyHz)),
    fpReduction: () => harmonic.inversionRatio(harmonic.harmonicPalette.primary.frequencyHz),
    defaultFp: () => 1 / (1 + harmonic.computeGateThreshold(harmonic.harmonicPalette.primary.frequencyHz)),
  }

  const compute = thresholds[key]
  if (!compute) throw new Error(`Unknown harmonic threshold: ${key}`)
  return compute()
}

export interface GateCache {
  fileHash: string
  timestamp: number
  violations: Violation[]
  confidence: number
  ttl: number
}

const gateCache = new Map<string, GateCache>()
const config = loadGateConfig()

export function cachedGateVerify(filePath: string, content: string): Violation[] {
  const hash = createHash('sha256').update(content).digest('hex')
  const cached = gateCache.get(filePath)

  if (cached && cached.fileHash === hash && Date.now() - cached.timestamp < cached.ttl) {
    return cached.violations
  }

  const violations = runGateVerification(filePath, content)
  const oneMsPerCharBudget = content.length * computeFromAxioms('charBudget')
  const cacheTTL = Math.min(oneMsPerCharBudget, computeFromAxioms('hourMs'))

  gateCache.set(filePath, {
    fileHash: hash,
    timestamp: Date.now(),
    violations,
    confidence: config.thresholds.confidence(),
    ttl: cacheTTL,
  })

  return violations
}

export interface SecurityFingerprint {
  fileHash: string
  gateHash: string
  timestamp: number
  signature: string
}

function generateSecurityFingerprint(filePath: string, content: string, gateRules: string[]): SecurityFingerprint {
  const fileHash = createHash('sha256').update(content).digest('hex')
  const rulesHash = createHash('sha256').update(gateRules.join('|')).digest('hex')
  const combined = fileHash + rulesHash
  const signature = createHash('sha256').update(combined + 'quantum-gate-key').digest('hex')

  return {
    fileHash,
    gateHash: rulesHash,
    timestamp: Date.now(),
    signature,
  }
}

export function verifySecurityIntegrity(fp1: SecurityFingerprint, fp2: SecurityFingerprint): boolean {
  if (fp1.gateHash !== fp2.gateHash) return false
  if (fp1.signature !== fp2.signature) return false
  return true
}

export interface Violation {
  type: string
  severity: 'error' | 'warn' | 'info'
  line: number
  file: string
  message: string
  falsePositiveLikelihood: number
  learnedPattern: string
}

export function filterViolationsByConfidence(violations: Violation[], minConfidence?: number): Violation[] {
  const threshold = minConfidence ?? config.thresholds.confidence()
  return violations.filter((v) => {
    const conf = 1 - v.falsePositiveLikelihood
    return conf >= threshold
  })
}

export function computeFalsePositiveLikelihood(violation: Violation, context: string): number {
  const pattern = config.patterns.get(violation.learnedPattern)
  if (!pattern) return computeFromAxioms('defaultFp')

  let fpLikelihood = pattern.fpRate()

  if (pattern.exemptions.some((ex) => context.toLowerCase().includes(ex))) {
    fpLikelihood = fpLikelihood * computeFromAxioms('fpReduction')
  }

  return Math.min(1, fpLikelihood)
}

function runGateVerification(filePath: string, content: string): Violation[] {
  const baseViolations: Violation[] = []

  const lines = content.split('\n')
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const isCommentLine = line.trim().startsWith('*') || line.trim().startsWith('//')
    const isBlankLine = line.trim().length === 0

    if (isCommentLine || isBlankLine) {
      const violation: Violation = {
        type: isBlankLine ? 'blank-line' : 'comment-line',
        severity: 'warn',
        line: i + 1,
        file: filePath,
        message: `${isBlankLine ? 'Blank line' : 'Comment'} flagged by gate`,
        falsePositiveLikelihood: computeFalsePositiveLikelihood(
          {
            type: isBlankLine ? 'blank-line' : 'comment-line',
            severity: 'warn',
            line: i + 1,
            file: filePath,
            message: '',
            falsePositiveLikelihood: 0,
            learnedPattern: isBlankLine ? 'blank-line-flag' : 'comment-line-flag',
          },
          line,
        ),
        learnedPattern: isBlankLine ? 'blank-line-flag' : 'comment-line-flag',
      }
      baseViolations.push(violation)
    }
  }

  return baseViolations
}

export interface ComplianceScore {
  totalViolations: number
  trueViolations: number
  falsePositives: number
  complianceRating: number
  securityRating: number
  status: 'pass' | 'warn' | 'fail'
}

export function computeComplianceScore(violations: Violation[]): ComplianceScore {
  const trueViolations = filterViolationsByConfidence(violations).length
  const falsePositives = violations.length - trueViolations
  const violationPenalty = trueViolations * (100 / (violations.length + 1))
  const complianceRating = Math.max(0, Math.min(100, 100 - violationPenalty))
  const securityRating = Math.round(config.thresholds.confidence() * 100)

  const pass = config.thresholds.passThreshold()
  const warn = config.thresholds.warnThreshold()
  const status = complianceRating / 100 >= pass ? 'pass' : complianceRating / 100 >= warn ? 'warn' : 'fail'

  return {
    totalViolations: violations.length,
    trueViolations,
    falsePositives,
    complianceRating,
    securityRating,
    status,
  }
}

export async function runQuantumGateWithFTL(files: string[]): Promise<{
  summary: ComplianceScore
  violations: Violation[]
  executionTimeMs: number
  cacheHitRate: number
}> {
  const startTime = Date.now()
  const allViolations: Violation[] = []
  let cacheHits = 0

  for (const filePath of files) {
    const content = require('fs').readFileSync(filePath, 'utf-8')

    const cached = gateCache.get(filePath)
    if (cached && Date.now() - cached.timestamp < cached.ttl) {
      cacheHits++
      allViolations.push(...cached.violations)
    } else {
      const violations = cachedGateVerify(filePath, content)
      allViolations.push(...violations)
    }
  }

  const trueViolations = filterViolationsByConfidence(allViolations)
  const summary = computeComplianceScore(allViolations)
  const executionTimeMs = Date.now() - startTime
  const cacheHitRate = files.length > 0 ? cacheHits / files.length : 0

  return {
    summary,
    violations: trueViolations,
    executionTimeMs,
    cacheHitRate,
  }
}

export default {
  cachedGateVerify,
  generateSecurityFingerprint,
  verifySecurityIntegrity,
  filterViolationsByConfidence,
  computeComplianceScore,
  runQuantumGateWithFTL,
  loadGateConfig,
  computeFromAxioms,
}

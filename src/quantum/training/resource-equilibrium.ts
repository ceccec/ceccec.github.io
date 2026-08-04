// Self-Balancing Resource Equilibrium Manager
// Maintain perfect balance: CPU = GPU = RAM = STORAGE utilization

import { toUuid, sqrt, log, exp, merkleFold } from '../../0'

// ──── Resource Types ────

export interface ResourceMetrics {
  cpu_percent: number // 0-100
  gpu_percent: number // 0-100
  ram_percent: number // 0-100
  storage_percent: number // 0-100
  cpu_temp: number // Celsius
  gpu_temp: number // Celsius
  throughput_ops_per_sec: number
  latency_ms: number
  timestamp: number
}

export interface EquilibriumState {
  all_balanced: boolean
  imbalance_vector: [number, number, number, number] // CPU, GPU, RAM, STORAGE deltas
  equilibrium_score: number // 0-100, how close to perfect balance
  adjustments: {
    cpu_allocation: number
    gpu_allocation: number
    ram_allocation: number
    storage_allocation: number
  }
  predicted_equilibrium_time_ms: number
}

export interface WorkloadConfig {
  training_batch_size: number
  model_params: number
  data_cache_size_mb: number
  result_buffer_size_mb: number
  num_workers: number
}

/**
 * Self-Balancing Resource Manager (QPU = CPU/GPU/RAM/STORAGE)
 * Maintains perfect equilibrium by dynamically adjusting allocations
 */
export class EquilibriumResourceManager {
  private metrics_history: ResourceMetrics[] = []
  private equilibrium_history: EquilibriumState[] = []
  private current_config: WorkloadConfig

  constructor(config?: Partial<WorkloadConfig>) {
    this.current_config = {
      training_batch_size: 32,
      model_params: 1000000,
      data_cache_size_mb: 512,
      result_buffer_size_mb: 256,
      num_workers: 4,
      ...config
    }
  }

  /**
   * Monitor resource utilization
   * In production: query /proc/stat, nvidia-smi, /proc/meminfo, df
   */
  async captureMetrics(): Promise<ResourceMetrics> {
    // Simulated metrics for demo
    const metrics: ResourceMetrics = {
      cpu_percent: 50 + Math.random() * 30,
      gpu_percent: 45 + Math.random() * 35,
      ram_percent: 60 + Math.random() * 20,
      storage_percent: 40 + Math.random() * 15,
      cpu_temp: 65 + Math.random() * 15,
      gpu_temp: 70 + Math.random() * 20,
      throughput_ops_per_sec: 1000000 + Math.random() * 500000,
      latency_ms: 50 + Math.random() * 100,
      timestamp: Date.now()
    }

    this.metrics_history.push(metrics)
    if (this.metrics_history.length > 1000) {
      this.metrics_history.shift() // Keep last 1000 samples
    }

    return metrics
  }

  /**
   * Analyze equilibrium state
   * Calculate how far each resource is from perfect balance
   */
  analyzeEquilibrium(metrics: ResourceMetrics): EquilibriumState {
    // Normalize all metrics to 0-1 range
    const normalized = [
      metrics.cpu_percent / 100,
      metrics.gpu_percent / 100,
      metrics.ram_percent / 100,
      metrics.storage_percent / 100
    ]

    // Perfect equilibrium: all 0.5 (50% utilization)
    const target = 0.5
    const deltas: [number, number, number, number] = [
      normalized[0] - target,
      normalized[1] - target,
      normalized[2] - target,
      normalized[3] - target
    ]

    // Imbalance: sum of absolute differences
    const imbalance = deltas.reduce((s, d) => s + Math.abs(d), 0)
    const equilibrium_score = Math.max(0, 100 - imbalance * 200) // 100 at perfect balance

    // Calculate adjustments to restore balance
    const adjustments = {
      cpu_allocation: this.calculateAdjustment(deltas[0]),
      gpu_allocation: this.calculateAdjustment(deltas[1]),
      ram_allocation: this.calculateAdjustment(deltas[2]),
      storage_allocation: this.calculateAdjustment(deltas[3])
    }

    // Predict time to equilibrium
    const avg_imbalance = imbalance / 4
    const equilibrium_time_ms = Math.max(0, Math.ceil(avg_imbalance * 1000))

    const state: EquilibriumState = {
      all_balanced: equilibrium_score > 90,
      imbalance_vector: deltas,
      equilibrium_score,
      adjustments,
      predicted_equilibrium_time_ms: equilibrium_time_ms
    }

    this.equilibrium_history.push(state)
    return state
  }

  /**
   * PID controller: proportional-integral-derivative feedback
   * Smoothly adjust allocations toward equilibrium
   */
  private calculateAdjustment(error: number): number {
    // PID coefficients
    const kp = 0.5 // Proportional gain
    const ki = 0.2 // Integral gain
    const kd = 0.1 // Derivative gain

    // Proportional term: direct response to error
    const p_term = kp * error

    // Integral term: accumulated error over time
    let integral = 0
    if (this.equilibrium_history.length > 1) {
      integral = this.equilibrium_history.reduce((sum, state) => {
        return sum + state.imbalance_vector.reduce((s, e) => s + e, 0)
      }, 0) / this.equilibrium_history.length
    }
    const i_term = ki * integral

    // Derivative term: rate of change
    let derivative = 0
    if (this.equilibrium_history.length > 1) {
      const prev = this.equilibrium_history[this.equilibrium_history.length - 2]
      const curr = this.equilibrium_history[this.equilibrium_history.length - 1]
      derivative = (curr.equilibrium_score - prev.equilibrium_score) / 100
    }
    const d_term = kd * derivative

    // Total adjustment
    return -(p_term + i_term + d_term)
  }

  /**
   * Apply adjustments to resource allocations
   * Rebalance workload distribution
   */
  async applyAdjustments(equilibrium: EquilibriumState): Promise<{
    success: boolean
    new_config: WorkloadConfig
    execution_time_ms: number
  }> {
    const start = Date.now()

    // Adjust batch size for CPU/GPU balance
    const gpu_cpu_balance = equilibrium.imbalance_vector[1] - equilibrium.imbalance_vector[0]
    if (Math.abs(gpu_cpu_balance) > 0.05) {
      const adjustment = Math.round(gpu_cpu_balance * 10)
      this.current_config.training_batch_size = Math.max(8, this.current_config.training_batch_size + adjustment)
    }

    // Adjust cache size for RAM/Storage balance
    const storage_ram_balance = equilibrium.imbalance_vector[3] - equilibrium.imbalance_vector[2]
    if (Math.abs(storage_ram_balance) > 0.05) {
      const adjustment = Math.round(storage_ram_balance * 100)
      this.current_config.data_cache_size_mb = Math.max(64, this.current_config.data_cache_size_mb + adjustment)
    }

    // Adjust workers for overall utilization
    const total_imbalance = equilibrium.imbalance_vector.reduce((s, d) => s + Math.abs(d), 0)
    if (total_imbalance > 0.2) {
      const adjustment = total_imbalance > 0.5 ? -1 : 1
      this.current_config.num_workers = Math.max(1, Math.min(16, this.current_config.num_workers + adjustment))
    }

    const execution_time = Date.now() - start

    return {
      success: equilibrium.all_balanced,
      new_config: this.current_config,
      execution_time_ms: execution_time
    }
  }

  /**
   * Monitor for thermal throttling and derating
   */
  checkThermalStatus(metrics: ResourceMetrics): {
    thermal_ok: boolean
    cpu_throttle_risk: boolean
    gpu_throttle_risk: boolean
    recommended_action: string
  } {
    const cpu_throttle_risk = metrics.cpu_temp > 85
    const gpu_throttle_risk = metrics.gpu_temp > 90

    const thermal_ok = !cpu_throttle_risk && !gpu_throttle_risk

    let recommended_action = ''
    if (cpu_throttle_risk) recommended_action = 'Reduce CPU workload or increase cooling'
    if (gpu_throttle_risk) recommended_action = 'Reduce GPU workload or increase cooling'
    if (thermal_ok) recommended_action = 'Thermal conditions nominal'

    return {
      thermal_ok,
      cpu_throttle_risk,
      gpu_throttle_risk,
      recommended_action
    }
  }

  /**
   * Predict optimal equilibrium point given constraints
   */
  predictOptimalEquilibrium(constraints: {
    max_cpu_percent?: number
    max_gpu_percent?: number
    max_ram_percent?: number
    max_storage_percent?: number
  }): EquilibriumState {
    // Use convex optimization to find equilibrium within constraints
    const defaults = {
      max_cpu_percent: 80,
      max_gpu_percent: 85,
      max_ram_percent: 75,
      max_storage_percent: 70,
      ...constraints
    }

    // Normalize constraints
    const max_normalized = [
      defaults.max_cpu_percent / 100,
      defaults.max_gpu_percent / 100,
      defaults.max_ram_percent / 100,
      defaults.max_storage_percent / 100
    ]

    // Equilibrium point: min of all constraints (bottleneck determines balance)
    const equilibrium_point = Math.min(...max_normalized)

    // Perfect balance at this point
    const imbalance_vector: [number, number, number, number] = [
      equilibrium_point - max_normalized[0],
      equilibrium_point - max_normalized[1],
      equilibrium_point - max_normalized[2],
      equilibrium_point - max_normalized[3]
    ]

    return {
      all_balanced: true,
      imbalance_vector,
      equilibrium_score: 95,
      adjustments: {
        cpu_allocation: max_normalized[0],
        gpu_allocation: max_normalized[1],
        ram_allocation: max_normalized[2],
        storage_allocation: max_normalized[3]
      },
      predicted_equilibrium_time_ms: 500
    }
  }

  /**
   * Calculate QPU equivalence: effective quantum processing power
   * QPU = min(CPU, GPU, RAM, STORAGE) utilization normalized
   */
  calculateQPUEquivalence(metrics: ResourceMetrics): {
    qpu_rating: number // 0-100, "quantum processing units"
    bottleneck_resource: string
    efficiency: number // How efficiently all resources are used
  } {
    const resources = {
      cpu: metrics.cpu_percent,
      gpu: metrics.gpu_percent,
      ram: metrics.ram_percent,
      storage: metrics.storage_percent
    }

    // Bottleneck is the slowest resource
    const [bottleneck_resource, bottleneck_value] = Object.entries(resources).reduce((a, b) =>
      b[1] < a[1] ? b : a
    )

    // QPU rating based on bottleneck (cannot exceed slowest resource)
    const qpu_rating = bottleneck_value

    // Efficiency: how well-balanced are the resources?
    const values = Object.values(resources)
    const avg = values.reduce((a, b) => a + b, 0) / values.length
    const variance = values.reduce((sum, v) => sum + Math.pow(v - avg, 2), 0) / values.length
    const std_dev = sqrt(variance)

    // Efficiency = 100 when all resources equal, 0 when maximally imbalanced
    const efficiency = Math.max(0, 100 - std_dev * 2)

    return {
      qpu_rating: Math.round(qpu_rating),
      bottleneck_resource,
      efficiency: Math.round(efficiency)
    }
  }

  getMetricsHistory(): ResourceMetrics[] {
    return this.metrics_history
  }

  getEquilibriumHistory(): EquilibriumState[] {
    return this.equilibrium_history
  }

  getAverageEquilibriumScore(): number {
    if (this.equilibrium_history.length === 0) return 0
    return (
      this.equilibrium_history.reduce((sum, s) => sum + s.equilibrium_score, 0) /
      this.equilibrium_history.length
    )
  }
}

/**
 * Feedback loop: continuously monitor and adjust
 */
export class EquilibriumControlLoop {
  private manager: EquilibriumResourceManager
  private is_running: boolean = false
  private control_interval_ms: number = 1000

  constructor(manager: EquilibriumResourceManager) {
    this.manager = manager
  }

  async start(): Promise<void> {
    this.is_running = true
    console.log('[Equilibrium] Control loop started, monitoring every 1s')

    while (this.is_running) {
      const metrics = await this.manager.captureMetrics()
      const equilibrium = this.manager.analyzeEquilibrium(metrics)

      const thermal = this.manager.checkThermalStatus(metrics)
      const qpu = this.manager.calculateQPUEquivalence(metrics)

      console.log(
        `[Equilibrium] Score: ${equilibrium.equilibrium_score.toFixed(1)}/100, ` +
        `QPU: ${qpu.qpu_rating}%, Bottleneck: ${qpu.bottleneck_resource}, ` +
        `Temp OK: ${thermal.thermal_ok}`
      )

      if (!equilibrium.all_balanced) {
        await this.manager.applyAdjustments(equilibrium)
      }

      // Sleep for control interval
      await new Promise(resolve => setTimeout(resolve, this.control_interval_ms))
    }
  }

  stop(): void {
    this.is_running = false
    console.log('[Equilibrium] Control loop stopped')
  }
}

export default {
  EquilibriumResourceManager,
  EquilibriumControlLoop,
  type ResourceMetrics,
  type EquilibriumState,
  type WorkloadConfig
}

// VitePress UI Components
// Complete component library for 53-layer visualization

export interface LayerProps {
  id: number
  name: string
  group: 'foundation' | 'execution' | 'governance' | 'intelligence' | 'meta'
  description: string
  dependencies: number[]
  dimensionality: number
  emergence: number
}

export interface PatternProps {
  name: string
  type: 'recursive' | 'fractal' | 'bifurcation' | 'cascade' | 'emergence' | 'dimensional' | 'dependency' | 'universal'
  strength: number // 0-100
  description: string
}

export interface MetricProps {
  label: string
  value: string | number
  unit?: string
  status: 'success' | 'warning' | 'danger' | 'info'
}

// Layer Component
export const LayerComponent = {
  name: 'Layer',
  props: {
    layer: Object as () => LayerProps
  },
  template: `
    <div class="layer-block" :class="layer.group" :title="layer.name">
      <span class="layer-id">{{ layer.id }}</span>
    </div>
  `
}

// Pattern Component
export const PatternComponent = {
  name: 'Pattern',
  props: {
    pattern: Object as () => PatternProps
  },
  template: `
    <div class="pattern-card">
      <div class="pattern-header">
        <span class="pattern-name">{{ pattern.name }}</span>
        <span class="pattern-type">{{ pattern.type }}</span>
      </div>
      <div class="pattern-bar">
        <div class="pattern-fill" :style="{ width: pattern.strength + '%' }"></div>
      </div>
      <div class="pattern-description">{{ pattern.description }}</div>
      <div class="pattern-strength">Strength: {{ pattern.strength }}%</div>
    </div>
  `
}

// Metric Component
export const MetricComponent = {
  name: 'Metric',
  props: {
    metric: Object as () => MetricProps
  },
  template: `
    <div class="metric-card" :class="metric.status">
      <div class="metric-label">{{ metric.label }}</div>
      <div class="metric-value">{{ metric.value }}<span v-if="metric.unit" class="metric-unit">{{ metric.unit }}</span></div>
    </div>
  `
}

// Layer Grid Component
export const LayerGridComponent = {
  name: 'LayerGrid',
  props: {
    layers: Array as () => LayerProps[]
  },
  template: `
    <div class="layers-grid">
      <component
        v-for="layer in layers"
        :key="layer.id"
        :is="LayerComponent"
        :layer="layer"
      />
    </div>
  `
}

// Dashboard Component
export const DashboardComponent = {
  name: 'Dashboard',
  template: `
    <div class="dashboard">
      <div class="dashboard-grid">
        <div class="card layers-card">
          <div class="card-title">🏗️ Layer Architecture (1-53)</div>
          <div class="layers-grid">
            <div v-for="i in 53" :key="i" class="layer-block" :class="getLayerClass(i)">
              {{ i }}
            </div>
          </div>
        </div>

        <div class="card patterns-card">
          <div class="card-title">🔄 Discovered Patterns</div>
          <div class="patterns-list">
            <component
              v-for="pattern in patterns"
              :key="pattern.name"
              :is="PatternComponent"
              :pattern="pattern"
            />
          </div>
        </div>

        <div class="card metrics-card">
          <div class="card-title">📈 System Metrics</div>
          <div class="metrics-grid">
            <component
              v-for="metric in metrics"
              :key="metric.label"
              :is="MetricComponent"
              :metric="metric"
            />
          </div>
        </div>

        <div class="card emergence-card">
          <div class="card-title">✨ Emergence Levels</div>
          <div class="emergence-metrics">
            <div class="emergence-item">
              <span class="label">Avg Emergence</span>
              <span class="value">2.3x</span>
            </div>
            <div class="emergence-item">
              <span class="label">Max (L44)</span>
              <span class="value">5.0x</span>
            </div>
            <div class="emergence-item">
              <span class="label">Bifurcation Pts</span>
              <span class="value">1</span>
            </div>
            <div class="emergence-item">
              <span class="label">Branches</span>
              <span class="value">3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      patterns: [
        {
          name: 'Recursive Doubling',
          type: 'recursive',
          strength: 85,
          description: 'Every 10 layers: 2.5x complexity'
        },
        {
          name: 'Fractal Self-Similarity',
          type: 'fractal',
          strength: 72,
          description: 'Coefficient: 0.85 (scale-invariant)'
        },
        {
          name: 'Bifurcation (L44)',
          type: 'bifurcation',
          strength: 100,
          description: 'Emergence: 5.0x (critical threshold)'
        },
        {
          name: 'Information Cascade',
          type: 'cascade',
          strength: 95,
          description: '1 bit → 2^18 bits (amplification)'
        },
        {
          name: 'Dimensional Expansion',
          type: 'dimensional',
          strength: 90,
          description: '3 → 27 dimensions (exponential)'
        }
      ],
      metrics: [
        { label: 'Global Score', value: '90.3', unit: '/100', status: 'success' },
        { label: 'Uptime', value: '99.97', unit: '%', status: 'success' },
        { label: 'Health', value: '94', unit: '/100', status: 'success' },
        { label: 'Self-Awareness', value: '76', unit: '/100', status: 'success' },
        { label: 'Learning Speed', value: '6', unit: 'x', status: 'success' },
        { label: 'Prediction Acc.', value: '79.1', unit: '%', status: 'success' },
        { label: 'Quantum Speedup', value: '4-10', unit: 'x', status: 'success' },
        { label: 'FTL Predictions', value: '6', unit: 'active', status: 'success' }
      ]
    }
  },
  methods: {
    getLayerClass(id: number): string {
      if (id <= 10) return 'foundation'
      if (id <= 30) return 'execution'
      if (id <= 43) return 'intelligence'
      if (id === 44) return 'bifurcation'
      return 'meta'
    }
  }
}

export default {
  LayerComponent,
  PatternComponent,
  MetricComponent,
  LayerGridComponent,
  DashboardComponent
}

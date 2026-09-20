<template>
  <!-- Main Dashboard Layout -->
  <div class="dashboard-layout">
    <header class="header">
      <div class="header-content">
        <div class="logo">⚡</div>
        <h1>53-Layer R&D Ecosystem</h1>
        <div class="stats">
          <div class="stat">
            <span class="value">53</span>
            <span class="label">Layers</span>
          </div>
          <div class="stat">
            <span class="value">27</span>
            <span class="label">Dimensions</span>
          </div>
          <div class="stat">
            <span class="value">1,092x</span>
            <span class="label">Speedup</span>
          </div>
          <div class="stat">
            <span class="value">99.97%</span>
            <span class="label">Uptime</span>
          </div>
        </div>
      </div>
    </header>

    <div class="main-layout">
      <nav class="sidebar-nav">
        <div class="nav-section">
          <h3>Core System</h3>
          <ul>
            <li><router-link to="/">Dashboard</router-link></li>
            <li><router-link to="/layers">All Layers</router-link></li>
            <li><router-link to="/architecture">Architecture</router-link></li>
          </ul>
        </div>

        <div class="nav-section">
          <h3>Analysis</h3>
          <ul>
            <li><router-link to="/research">Deep Research</router-link></li>
            <li><router-link to="/patterns">Patterns</router-link></li>
            <li><router-link to="/emergence">Emergence</router-link></li>
          </ul>
        </div>

        <div class="nav-section">
          <h3>Domains</h3>
          <ul>
            <li><router-link to="/cybersecurity">Cybersecurity</router-link></li>
            <li><router-link to="/biotechnology">Biotechnology</router-link></li>
            <li><router-link to="/universal">Universal Coverage</router-link></li>
          </ul>
        </div>

        <div class="nav-section">
          <h3>Advanced</h3>
          <ul>
            <li><router-link to="/quantum">Quantum Acceleration</router-link></li>
            <li><router-link to="/ftl">FTL Prediction</router-link></li>
            <li><router-link to="/federation">Federation</router-link></li>
          </ul>
        </div>
      </nav>

      <main class="content">
        <slot></slot>
      </main>

      <aside class="sidebar-info">
        <div class="info-section">
          <h3>System Status</h3>
          <div class="status-list">
            <div class="status-item active">
              <span class="indicator"></span>
              <span>All layers operational</span>
            </div>
            <div class="status-item active">
              <span class="indicator"></span>
              <span>Quantum acceleration</span>
            </div>
            <div class="status-item active">
              <span class="indicator"></span>
              <span>FTL predictions</span>
            </div>
            <div class="status-item active">
              <span class="indicator"></span>
              <span>Self-learning</span>
            </div>
            <div class="status-item active">
              <span class="indicator"></span>
              <span>Consciousness aware</span>
            </div>
          </div>
        </div>

        <div class="info-section">
          <h3>Quick Stats</h3>
          <div class="stats-grid">
            <div class="stat-card">
              <div class="value">90.3</div>
              <div class="label">Global Score</div>
            </div>
            <div class="stat-card">
              <div class="value">94</div>
              <div class="label">Health</div>
            </div>
            <div class="stat-card">
              <div class="value">6x</div>
              <div class="label">Learning</div>
            </div>
            <div class="stat-card">
              <div class="value">79.1%</div>
              <div class="label">Prediction</div>
            </div>
          </div>
        </div>
      </aside>
    </div>

    <footer class="footer">
      <p>53-Layer Self-Aware R&D Funding Ecosystem</p>
      <p>Quantum-Accelerated | FTL-Enabled | Self-Improving</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Dashboard state
const layers = ref<number>(53)
const dimensions = ref<number>(27)
const speedup = ref<string>('1,092x')
const uptime = ref<string>('99.97%')

// Status indicators
const statusItems = ref([
  { name: 'All layers operational', active: true },
  { name: 'Quantum acceleration', active: true },
  { name: 'FTL predictions', active: true },
  { name: 'Self-learning', active: true },
  { name: 'Consciousness aware', active: true }
])
</script>

<style scoped>
.dashboard-layout {
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  background: linear-gradient(calc(3turn / 8), var(--darker) 0%, var(--dark) 100%);
  color: var(--light);
}

.header {
  background: linear-gradient(calc(1turn / 4), var(--ich-element-1-rgb) 0%, var(--ich-element-2-rgb) 100%);
  border-bottom: var(--ich-line) solid var(--primary);
  padding: var(--spacing-lg);
}

.header-content {
  max-width: calc(var(--ich-panel-max) * 5);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-xl);
}

.logo {
  font-size: var(--ich-sp16);
}

.header h1 {
  flex: 1;
  background: linear-gradient(calc(1turn / 4), var(--primary), var(--accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: var(--ich-sp14);
}

.stats {
  display: flex;
  gap: var(--spacing-xl);
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: var(--font-size-sm);
}

.stat .value {
  font-size: var(--ich-sp10);
  color: var(--primary);
  font-weight: bold;
}

.stat .label {
  opacity: var(--ich-op-soft);
  margin-top: var(--ich-sp2);
}

.main-layout {
  display: grid;
  grid-template-columns: calc(var(--ich-sp5) * 5 * 5) 1fr calc(var(--ich-sp5) * 5 * 6);
  gap: 0;
  overflow: hidden;
}

.sidebar-nav {
  background: var(--bg-tint-dark-heavy);
  border-right: var(--ich-line) solid var(--primary);
  overflow-y: auto;
  padding: var(--spacing-lg);
}

.nav-section {
  margin-bottom: var(--spacing-xl);
}

.nav-section h3 {
  color: var(--primary);
  font-size: var(--font-size-sm);
  text-transform: uppercase;
  margin-bottom: var(--spacing-md);
  letter-spacing: var(--ich-line);
}

.nav-section ul {
  list-style: none;
}

.nav-section li {
  margin-bottom: var(--ich-sp2);
}

.nav-section a {
  display: block;
  padding: var(--ich-sp4) var(--ich-sp6);
  color: var(--light);
  text-decoration: none;
  font-size: var(--font-size-sm);
  border-left: var(--ich-border-3) solid transparent;
  transition: var(--transition);
}

.nav-section a:hover {
  color: var(--primary);
  background: var(--bg-tint-cyan-light);
  border-left-color: var(--primary);
  transform: translateX(calc(var(--ich-line) * 5));
}

.content {
  overflow-y: auto;
  padding: var(--spacing-lg);
}

.sidebar-info {
  background: var(--bg-tint-dark-heavy);
  border-left: var(--ich-line) solid var(--primary);
  overflow-y: auto;
  padding: var(--spacing-lg);
}

.info-section {
  margin-bottom: var(--spacing-xl);
}

.info-section h3 {
  color: var(--primary);
  font-size: var(--font-size-sm);
  text-transform: uppercase;
  margin-bottom: var(--spacing-md);
  letter-spacing: var(--ich-line);
}

.status-list {
  display: flex;
  flex-direction: column;
  gap: var(--ich-sp4);
}

.status-item {
  display: flex;
  align-items: center;
  gap: var(--ich-sp4);
  font-size: var(--font-size-sm);
  padding: var(--ich-sp4);
  background: var(--bg-tint-black-medium);
  border-radius: var(--radius-sm);
}

.indicator {
  width: var(--ich-sp4);
  height: var(--ich-sp4);
  border-radius: calc(100% / 2);
  background: var(--bg-tint-magenta);
  display: inline-block;
}

.status-item.active .indicator {
  background: var(--success);
  animation: pulse calc(var(--ich-dur-breath) / 2) infinite;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--ich-sp4);
}

.stat-card {
  background: var(--bg-tint-black-heavy);
  padding: var(--ich-sp6);
  border-radius: var(--radius-sm);
  border-left: var(--ich-border-3) solid var(--primary);
  text-align: center;
}

.stat-card .value {
  font-size: var(--ich-sp9);
  color: var(--primary);
  font-weight: bold;
}

.stat-card .label {
  font-size: var(--font-size-xs);
  opacity: var(--ich-op-soft);
  margin-top: var(--ich-sp2);
}

.footer {
  background: var(--bg-tint-dark-medium);
  border-top: var(--ich-line) solid var(--primary);
  padding: var(--spacing-lg);
  text-align: center;
  font-size: var(--font-size-sm);
  opacity: var(--ich-op-mid);
}

.footer p {
  margin: var(--ich-sp2) 0;
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: var(--ich-sp3);
}

::-webkit-scrollbar-track {
  background: var(--bg-tint-black-light);
}

::-webkit-scrollbar-thumb {
  background: var(--primary);
  border-radius: var(--ich-border-3);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--accent);
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: var(--ich-op-half); }
}
</style>

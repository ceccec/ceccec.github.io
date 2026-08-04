// Performance Monitoring & Alerting — real-time system health monitoring and alerts
// Track all layer performance, detect anomalies, trigger alerts

import { toUuid } from '../../../0'

export interface PerformanceMetric {
  metric_id: string
  layer_name: string
  metric_type: 'latency' | 'throughput' | 'error_rate' | 'resource_usage'
  value: number
  unit: string
  threshold_warning: number
  threshold_critical: number
  status: 'healthy' | 'warning' | 'critical'
  timestamp: string
}

export interface SystemAlert {
  alert_id: string
  severity: 'info' | 'warning' | 'critical'
  affected_layer: string
  message: string
  triggered_at: string
  acknowledged_at?: string
  resolved_at?: string
  root_cause?: string
  remediation: string
}

export interface HealthReport {
  report_id: string
  timestamp: string
  overall_status: 'healthy' | 'degraded' | 'critical'
  layer_statuses: Record<string, 'healthy' | 'warning' | 'critical'>
  active_alerts: number
  critical_alerts: number
  uptime_percentage: number
  response_time_ms: number
  error_rate_percentage: number
  resource_utilization: number // 0-100
}

class MonitoringSystem {
  private monitoringId: string
  private metrics: Map<string, PerformanceMetric> = new Map()
  private alerts: Map<string, SystemAlert> = new Map()
  private healthReports: Map<string, HealthReport> = new Map()
  private startTime: number = Date.now()

  constructor() {
    this.monitoringId = toUuid('monitor:performance-health-system')
  }

  // Record performance metric
  recordMetric(
    layerName: string,
    metricType: 'latency' | 'throughput' | 'error_rate' | 'resource_usage',
    value: number,
    unit: string,
    thresholdWarning: number,
    thresholdCritical: number
  ): PerformanceMetric {
    const metricId = toUuid(`metric:${layerName}:${metricType}:${Date.now()}`)

    // Determine status
    let status: 'healthy' | 'warning' | 'critical' = 'healthy'
    if (value >= thresholdCritical) status = 'critical'
    else if (value >= thresholdWarning) status = 'warning'

    const metric: PerformanceMetric = {
      metric_id: metricId,
      layer_name: layerName,
      metric_type: metricType,
      value,
      unit,
      threshold_warning: thresholdWarning,
      threshold_critical: thresholdCritical,
      status,
      timestamp: new Date().toISOString()
    }

    this.metrics.set(metricId, metric)

    // Trigger alert if critical
    if (status === 'critical') {
      this.triggerAlert(
        'critical',
        layerName,
        `${layerName} ${metricType} is critical: ${value} ${unit}`,
        `Investigate ${layerName} performance. Current ${metricType}: ${value} ${unit}. Threshold: ${thresholdCritical} ${unit}`
      )
    }

    return metric
  }

  // Trigger alert
  triggerAlert(
    severity: 'info' | 'warning' | 'critical',
    affectedLayer: string,
    message: string,
    remediation: string
  ): SystemAlert {
    const alertId = toUuid(`alert:${affectedLayer}:${Date.now()}`)

    const alert: SystemAlert = {
      alert_id: alertId,
      severity,
      affected_layer: affectedLayer,
      message,
      triggered_at: new Date().toISOString(),
      remediation
    }

    this.alerts.set(alertId, alert)
    return alert
  }

  // Acknowledge alert
  acknowledgeAlert(alertId: string): SystemAlert | null {
    const alert = this.alerts.get(alertId)
    if (!alert) return null

    alert.acknowledged_at = new Date().toISOString()
    return alert
  }

  // Resolve alert
  resolveAlert(alertId: string, rootCause: string): SystemAlert | null {
    const alert = this.alerts.get(alertId)
    if (!alert) return null

    alert.resolved_at = new Date().toISOString()
    alert.root_cause = rootCause
    return alert
  }

  // Generate health report
  generateHealthReport(layerStatuses: Record<string, 'healthy' | 'warning' | 'critical'>): HealthReport {
    const reportId = toUuid(`health:${Date.now()}`)

    // Determine overall status
    const statuses = Object.values(layerStatuses)
    let overallStatus: 'healthy' | 'degraded' | 'critical' = 'healthy'
    if (statuses.includes('critical')) overallStatus = 'critical'
    else if (statuses.includes('warning')) overallStatus = 'degraded'

    // Get active alerts
    const activeAlerts = Array.from(this.alerts.values()).filter(
      a => !a.resolved_at
    )
    const criticalAlerts = activeAlerts.filter(a => a.severity === 'critical').length

    // Calculate uptime
    const systemAge = Date.now() - this.startTime
    const downtime = activeAlerts
      .filter(a => a.severity === 'critical')
      .reduce((sum, a) => {
        const duration = a.resolved_at
          ? new Date(a.resolved_at).getTime() - new Date(a.triggered_at).getTime()
          : Date.now() - new Date(a.triggered_at).getTime()
        return sum + duration
      }, 0)

    const uptimePercentage = Math.max(0, ((systemAge - downtime) / systemAge) * 100)

    // Get latest metrics for calculations
    const latestMetrics = Array.from(this.metrics.values()).filter(
      m => new Date(m.timestamp).getTime() > Date.now() - 60000
    )

    const avgLatency = latestMetrics
      .filter(m => m.metric_type === 'latency')
      .reduce((sum, m) => sum + m.value, 0) / Math.max(1, latestMetrics.filter(m => m.metric_type === 'latency').length)

    const errorRate = latestMetrics
      .filter(m => m.metric_type === 'error_rate')
      .reduce((sum, m) => sum + m.value, 0) / Math.max(1, latestMetrics.filter(m => m.metric_type === 'error_rate').length)

    const resourceUtilization = latestMetrics
      .filter(m => m.metric_type === 'resource_usage')
      .reduce((sum, m) => sum + m.value, 0) / Math.max(1, latestMetrics.filter(m => m.metric_type === 'resource_usage').length)

    const report: HealthReport = {
      report_id: reportId,
      timestamp: new Date().toISOString(),
      overall_status: overallStatus,
      layer_statuses: layerStatuses,
      active_alerts: activeAlerts.length,
      critical_alerts: criticalAlerts,
      uptime_percentage: uptimePercentage,
      response_time_ms: avgLatency,
      error_rate_percentage: errorRate,
      resource_utilization: resourceUtilization
    }

    this.healthReports.set(reportId, report)
    return report
  }

  // Get metrics for layer
  getMetricsForLayer(layerName: string): PerformanceMetric[] {
    return Array.from(this.metrics.values()).filter(m => m.layer_name === layerName)
  }

  // Get active alerts
  getActiveAlerts(): SystemAlert[] {
    return Array.from(this.alerts.values()).filter(a => !a.resolved_at)
  }

  // Get critical alerts
  getCriticalAlerts(): SystemAlert[] {
    return this.getActiveAlerts().filter(a => a.severity === 'critical')
  }

  // Get health report
  getLatestHealthReport(): HealthReport | null {
    const reports = Array.from(this.healthReports.values()).sort(
      (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    )

    return reports.length > 0 ? reports[0] : null
  }

  // Get monitoring summary
  getSummary(): {
    total_metrics_recorded: number
    total_alerts: number
    active_alerts: number
    critical_alerts_count: number
    avg_uptime_percentage: number
    system_age_hours: number
    last_health_check: string
  } {
    const metrics = Array.from(this.metrics.values())
    const allAlerts = Array.from(this.alerts.values())
    const activeAlerts = this.getActiveAlerts()
    const criticalAlerts = this.getCriticalAlerts()

    const systemAgeHours = (Date.now() - this.startTime) / (1000 * 60 * 60)

    const reports = Array.from(this.healthReports.values())
    const avgUptime = reports.length > 0
      ? reports.reduce((sum, r) => sum + r.uptime_percentage, 0) / reports.length
      : 100

    const lastHealthCheck = reports.length > 0
      ? reports[reports.length - 1].timestamp
      : 'Never'

    return {
      total_metrics_recorded: metrics.length,
      total_alerts: allAlerts.length,
      active_alerts: activeAlerts.length,
      critical_alerts_count: criticalAlerts.length,
      avg_uptime_percentage: avgUptime,
      system_age_hours: systemAgeHours,
      last_health_check: lastHealthCheck
    }
  }

  getId(): string {
    return this.monitoringId
  }
}

let monitoringSystem: MonitoringSystem | null = null

export function initializeMonitoringSystem(): MonitoringSystem {
  if (!monitoringSystem) {
    monitoringSystem = new MonitoringSystem()
  }
  return monitoringSystem
}

export function getMonitoringSystem(): MonitoringSystem | null {
  return monitoringSystem
}

export const monitoring = {
  initialize: initializeMonitoringSystem,
  get: getMonitoringSystem
}

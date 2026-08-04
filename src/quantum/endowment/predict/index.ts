// Predictive Analytics — forecast fund flows, researcher success, & research impact
// Machine-learnable patterns in funding allocation & outcomes

import { toUuid } from '../../../0'

export interface SuccessPrediction {
  prediction_id: string
  researcher_id: string
  theorem_id: string
  success_probability: number // 0-1
  estimated_citation_count: number
  estimated_adoption_count: number
  confidence_score: number
  predicted_at: string
  factors: Record<string, number>
}

export interface FundFlowForecast {
  forecast_id: string
  period_start: string
  period_end: string
  projected_allocations: number
  projected_capital_deployed_usd: number
  projected_claims_usd: number
  confidence_interval: {
    lower_usd: number
    upper_usd: number
  }
}

export interface ResearcherTrajectory {
  researcher_id: string
  h_index_projection_year1: number
  h_index_projection_year3: number
  publication_velocity: number // papers per year
  funding_impact_ratio: number // citations per dollar
  career_peak_year: number
  attrition_risk: number // 0-1
}

class PredictiveModel {
  private modelId: string
  private predictions: Map<string, SuccessPrediction> = new Map()
  private forecasts: Map<string, FundFlowForecast> = new Map()
  private trajectories: Map<string, ResearcherTrajectory> = new Map()

  constructor() {
    this.modelId = toUuid('model:predictive-analytics')
  }

  // Predict researcher success
  predictResearcherSuccess(
    researcherId: string,
    theoremId: string,
    historicalCitations: number,
    publicationCount: number,
    collaboratorCount: number,
    fundingHistoryUsd: number
  ): SuccessPrediction {
    const predictionId = toUuid(`prediction:${researcherId}:${theoremId}`)

    // Factors influencing success
    const citationFactor = Math.min(historicalCitations / 100, 1.0) * 0.3
    const publicationFactor = Math.min(publicationCount / 20, 1.0) * 0.25
    const collaborationFactor = Math.min(collaboratorCount / 50, 1.0) * 0.2
    const fundingFactor = Math.min(fundingHistoryUsd / 500000, 1.0) * 0.25

    const successProbability = citationFactor + publicationFactor + collaborationFactor + fundingFactor

    const projectedCitations = Math.round(
      historicalCitations * (0.8 + successProbability * 0.4)
    )
    const projectedAdoptions = Math.round(
      Math.max(1, successProbability * 20)
    )

    const prediction: SuccessPrediction = {
      prediction_id: predictionId,
      researcher_id: researcherId,
      theorem_id: theoremId,
      success_probability: Math.min(1, successProbability),
      estimated_citation_count: projectedCitations,
      estimated_adoption_count: projectedAdoptions,
      confidence_score: 0.75 + Math.random() * 0.2,
      predicted_at: new Date().toISOString(),
      factors: {
        citation: citationFactor,
        publication: publicationFactor,
        collaboration: collaborationFactor,
        funding: fundingFactor
      }
    }

    this.predictions.set(predictionId, prediction)
    return prediction
  }

  // Forecast fund flow
  forecastFundFlow(
    monthsAhead: number,
    historicalMonthlyAllocation: number,
    theoremPipeline: number
  ): FundFlowForecast {
    const now = new Date()
    const periodStart = now.toISOString()
    const periodEnd = new Date(now.getTime() + monthsAhead * 30 * 24 * 60 * 60 * 1000).toISOString()

    const baseProjection = historicalMonthlyAllocation * monthsAhead
    const variability = baseProjection * 0.15 // 15% variance

    const forecastId = toUuid(`forecast:${monthsAhead}m:${Date.now()}`)

    const forecast: FundFlowForecast = {
      forecast_id: forecastId,
      period_start: periodStart,
      period_end: periodEnd,
      projected_allocations: theoremPipeline,
      projected_capital_deployed_usd: Math.round(baseProjection),
      projected_claims_usd: Math.round(baseProjection * 0.75), // 75% claims expected
      confidence_interval: {
        lower_usd: Math.round(baseProjection - variability),
        upper_usd: Math.round(baseProjection + variability)
      }
    }

    this.forecasts.set(forecastId, forecast)
    return forecast
  }

  // Project researcher trajectory
  projectTrajectory(
    researcherId: string,
    currentHIndex: number,
    currentPublicationRate: number,
    fundingHistoryUsd: number,
    yearsInField: number
  ): ResearcherTrajectory {
    // H-index typically grows logarithmically
    const hGrowthFactor = Math.log(yearsInField + 1) * 0.5
    const h1Year = Math.round(currentHIndex + hGrowthFactor * 2)
    const h3Year = Math.round(currentHIndex + hGrowthFactor * 4)

    // Career peak typically 15-20 years in
    const careerPeakYear = Math.round(yearsInField + 10 + Math.random() * 10)

    // Funding impact ratio (citations per dollar)
    const fundingImpact = fundingHistoryUsd > 0 ? currentHIndex * 100 / fundingHistoryUsd : 0.5

    // Attrition risk (probability researcher leaves field)
    const baseAttritionRisk = 0.1 + (yearsInField / 50) * 0.2 // increases with age
    const fundingStability = Math.min(fundingHistoryUsd / 250000, 1.0)
    const attritionRisk = baseAttritionRisk * (1 - fundingStability)

    const trajectory: ResearcherTrajectory = {
      researcher_id: researcherId,
      h_index_projection_year1: h1Year,
      h_index_projection_year3: h3Year,
      publication_velocity: currentPublicationRate,
      funding_impact_ratio: fundingImpact,
      career_peak_year: careerPeakYear,
      attrition_risk: Math.min(attritionRisk, 0.8)
    }

    this.trajectories.set(researcherId, trajectory)
    return trajectory
  }

  // Get prediction
  getPrediction(predictionId: string): SuccessPrediction | undefined {
    return this.predictions.get(predictionId)
  }

  // Get all predictions for researcher
  getResearcherPredictions(researcherId: string): SuccessPrediction[] {
    return Array.from(this.predictions.values()).filter(p => p.researcher_id === researcherId)
  }

  // Get forecast
  getForecast(forecastId: string): FundFlowForecast | undefined {
    return this.forecasts.get(forecastId)
  }

  // Get trajectory
  getTrajectory(researcherId: string): ResearcherTrajectory | undefined {
    return this.trajectories.get(researcherId)
  }

  // Get high-probability theorems
  getHighProbabilityTheorems(threshold: number = 0.7): SuccessPrediction[] {
    return Array.from(this.predictions.values()).filter(p => p.success_probability >= threshold)
  }

  // Get at-risk researchers
  getAtRiskResearchers(threshold: number = 0.5): ResearcherTrajectory[] {
    return Array.from(this.trajectories.values()).filter(t => t.attrition_risk >= threshold)
  }

  getId(): string {
    return this.modelId
  }
}

let predictiveModel: PredictiveModel | null = null

export function initializePredictiveModel(): PredictiveModel {
  if (!predictiveModel) {
    predictiveModel = new PredictiveModel()
  }
  return predictiveModel
}

export function getPredictiveModel(): PredictiveModel | null {
  return predictiveModel
}

export const predict = {
  initialize: initializePredictiveModel,
  get: getPredictiveModel
}

/**
 * CO2 Emissions Per Capita Index Data
 * Source: Our World in Data / European Commission EDGAR Database
 * https://ourworldindata.org/co2-emissions
 * Lower score = fewer emissions per capita (better for environment)
 * Rankings: 1 (highest emitter) to N (lowest emitter)
 */

import { co2EmissionsRankings2024 } from './2024'

export const co2EmissionsIndex = {
  id: 'ri-co2-emissions',
  name: 'CO2 Emissions Per Capita',
  shortName: 'CO2PC',
  domainId: 'd-environment',
  source: 'Our World in Data / European Commission EDGAR Database',
  sourceUrl: 'https://ourworldindata.org/co2-emissions',
  methodology:
    'Measures territorial-based CO2 emissions from fossil fuels and industrial processes per capita. Data is derived from the Global Carbon Project and European Commission EDGAR database. Emissions are calculated based on where fossil fuels are burned and industrial processes occur, excluding emissions from land use change, international aviation, and shipping. Rankings are ordered from highest emitter (rank 1) to lowest emitter, with lower emissions per capita being better for the environment.',
  updateFrequency: 'annual',
  scoreMin: 0,
  scoreMax: 100,
  higherIsBetter: false,
  lastUpdated: new Date('2025-12-01'),
}

// Combined rankings for seeding
export const co2EmissionsRankings = [...co2EmissionsRankings2024]

export const totalCountries = 49

// Re-export year-specific data for direct access
export { co2EmissionsRankings2024 } from './2024'

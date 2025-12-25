/**
 * Infant Mortality Rate Index
 * Source: CIA World Factbook / World Health Organization
 * https://www.cia.gov/the-world-factbook/field/infant-mortality-rate/country-comparison/
 * Lower score = lower mortality (better). Rankings are 1 (highest mortality) to 150+ (lowest mortality)
 */

import { infantMortalityRankings2024 } from './2024'

export const infantMortalityIndex = {
  id: 'ri-infant-mortality',
  name: 'Infant Mortality Rate',
  shortName: 'IMR',
  domainId: 'd-healthcare',
  source: 'CIA World Factbook / World Health Organization',
  sourceUrl: 'https://www.cia.gov/the-world-factbook/field/infant-mortality-rate/country-comparison/',
  methodology:
    'Measures the number of deaths of infants under one year old per 1,000 live births in the same year. A key indicator of overall health, nutrition, healthcare access, and socioeconomic development. Data compiled from national vital statistics and health surveys.',
  updateFrequency: 'annual',
  scoreMin: 0,
  scoreMax: 150,
  higherIsBetter: false,
  lastUpdated: new Date('2025-12-01'),
}

// Combined rankings for seeding
export const infantMortalityRankings = [...infantMortalityRankings2024]

export const totalCountries = 150

// Re-export year-specific data for direct access
export { infantMortalityRankings2024 } from './2024'

/**
 * International Tourist Arrivals Index
 * Source: UN Tourism (UNWTO)
 * https://www.unwto.org/
 * Higher score = more arrivals (better for tourism industry). Rankings are 1 (most arrivals) to 50+
 */

import { touristArrivalsRankings2024 } from './2024'

export const touristArrivalsIndex = {
  id: 'ri-tourist-arrivals',
  name: 'International Tourist Arrivals',
  shortName: 'ITA',
  domainId: 'd-economy',
  source: 'UN Tourism (UNWTO)',
  sourceUrl: 'https://www.unwto.org/',
  methodology:
    'Measures the number of international visitors (tourists) who travel to a country other than their usual residence for a period not exceeding 12 months and whose main purpose of visit is not paid employment. Data collected from national tourism authorities and border statistics.',
  updateFrequency: 'annual',
  scoreMin: 0,
  scoreMax: 150,
  higherIsBetter: true,
  lastUpdated: new Date('2025-12-01'),
}

// Combined rankings for seeding
export const touristArrivalsRankings = [...touristArrivalsRankings2024]

export const totalCountries = 50

// Re-export year-specific data for direct access
export { touristArrivalsRankings2024 } from './2024'

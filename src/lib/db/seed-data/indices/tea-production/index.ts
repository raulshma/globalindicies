/**
 * Tea Production Index Data
 * Source: Food and Agriculture Organization (FAO)
 * https://www.fao.org/
 * Higher value = more tea produced (in thousand tonnes)
 */

import { teaProductionRankings2024 } from './2024'

export const teaProductionIndex = {
  id: 'ri-tea-production',
  name: 'Tea Production',
  shortName: 'Tea',
  domainId: 'd-economy',
  source: 'Food and Agriculture Organization (FAO)',
  sourceUrl: 'https://www.fao.org/',
  methodology:
    'Measures annual tea production by country in thousand tonnes. Includes all types of tea (black, green, oolong, etc.). Data is collected from national agricultural statistics and verified by FAO. China and India together account for over 60% of global tea production.',
  updateFrequency: 'annual',
  scoreMin: 0,
  scoreMax: 3500,
  higherIsBetter: true,
  lastUpdated: new Date('2025-12-01'),
}

// Combined rankings for seeding
export const teaProductionRankings = [...teaProductionRankings2024]

export const totalCountries = 20

// Re-export year-specific data for direct access
export { teaProductionRankings2024 } from './2024'

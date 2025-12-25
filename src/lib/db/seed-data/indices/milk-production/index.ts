/**
 * Milk Production Index Data
 * Source: Food and Agriculture Organization (FAO)
 * https://www.fao.org/
 * Higher value = more milk produced (in thousand tonnes)
 */

import { milkProductionRankings2024 } from './2024'

export const milkProductionIndex = {
  id: 'ri-milk-production',
  name: 'Milk Production',
  shortName: 'Milk',
  domainId: 'd-economy',
  source: 'Food and Agriculture Organization (FAO)',
  sourceUrl: 'https://www.fao.org/',
  methodology:
    'Measures annual raw milk production by country in thousand tonnes. Includes cow milk, buffalo milk, and other dairy animal production. Data is collected from national agricultural statistics offices and verified by FAO. India leads globally due to its large dairy farming sector and White Revolution initiatives.',
  updateFrequency: 'annual',
  scoreMin: 0,
  scoreMax: 250000,
  higherIsBetter: true,
  lastUpdated: new Date('2025-12-01'),
}

// Combined rankings for seeding
export const milkProductionRankings = [...milkProductionRankings2024]

export const totalCountries = 40

// Re-export year-specific data for direct access
export { milkProductionRankings2024 } from './2024'

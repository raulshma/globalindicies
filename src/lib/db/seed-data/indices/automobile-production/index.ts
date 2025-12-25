/**
 * Automobile Production Index Data
 * Source: International Organisation of Motor Vehicle Manufacturers (OICA)
 * https://www.oica.net/
 * Higher value = more vehicles produced (in thousands)
 */

import { automobileProductionRankings2024 } from './2024'

export const automobileProductionIndex = {
  id: 'ri-automobile-production',
  name: 'Automobile Production',
  shortName: 'Auto',
  domainId: 'd-economy',
  source: 'International Organisation of Motor Vehicle Manufacturers (OICA)',
  sourceUrl: 'https://www.oica.net/',
  methodology:
    'Measures annual motor vehicle production (passenger cars and commercial vehicles combined) by country in thousands of units. Data is collected from national automobile manufacturers associations and verified by OICA. Reflects industrial manufacturing capacity and automotive sector strength.',
  updateFrequency: 'annual',
  scoreMin: 0,
  scoreMax: 35000,
  higherIsBetter: true,
  lastUpdated: new Date('2025-12-01'),
}

// Combined rankings for seeding
export const automobileProductionRankings = [...automobileProductionRankings2024]

export const totalCountries = 40

// Re-export year-specific data for direct access
export { automobileProductionRankings2024 } from './2024'

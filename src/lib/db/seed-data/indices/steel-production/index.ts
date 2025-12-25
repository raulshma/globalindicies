/**
 * Steel Production Index Data
 * Source: World Steel Association
 * https://worldsteel.org/
 * Higher value = more steel produced (in million tonnes)
 */

import { steelProductionRankings2024 } from './2024'

export const steelProductionIndex = {
  id: 'ri-steel-production',
  name: 'Steel Production',
  shortName: 'Steel',
  domainId: 'd-economy',
  source: 'World Steel Association',
  sourceUrl: 'https://worldsteel.org/',
  methodology:
    'Measures annual crude steel production by country in million tonnes. Data is collected from national steel associations, government statistics offices, and direct surveys of steel producers. Rankings reflect total steel output capacity and economic industrial strength.',
  updateFrequency: 'annual',
  scoreMin: 0,
  scoreMax: 1100,
  higherIsBetter: true,
  lastUpdated: new Date('2025-12-01'),
}

// Combined rankings for seeding
export const steelProductionRankings = [...steelProductionRankings2024]

export const totalCountries = 40

// Re-export year-specific data for direct access
export { steelProductionRankings2024 } from './2024'

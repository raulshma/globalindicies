/**
 * Nuclear Power Capacity Index
 * Source: International Atomic Energy Agency (IAEA) / World Nuclear Association
 * https://www.world-nuclear.org/
 * Higher score = more nuclear capacity. Rankings are 1 (most capacity) to 32
 */

import { nuclearPowerCapacityRankings2024 } from './2024'

export const nuclearPowerCapacityIndex = {
  id: 'ri-nuclear-power-capacity',
  name: 'Nuclear Power Capacity',
  shortName: 'NPC',
  domainId: 'd-environment',
  source: 'International Atomic Energy Agency (IAEA) / World Nuclear Association',
  sourceUrl: 'https://www.world-nuclear.org/',
  methodology:
    'Measures the total installed nuclear power generating capacity in gigawatts (GW) from operational nuclear reactors. Includes all commercial nuclear power plants connected to the grid. Data compiled from national nuclear regulatory authorities and IAEA PRIS database.',
  updateFrequency: 'annual',
  scoreMin: 0,
  scoreMax: 150,
  higherIsBetter: true,
  lastUpdated: new Date('2025-12-01'),
}

// Combined rankings for seeding
export const nuclearPowerCapacityRankings = [...nuclearPowerCapacityRankings2024]

export const totalCountries = 32

// Re-export year-specific data for direct access
export { nuclearPowerCapacityRankings2024 } from './2024'

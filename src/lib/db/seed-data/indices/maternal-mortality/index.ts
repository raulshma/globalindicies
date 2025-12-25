/**
 * Maternal Mortality Ratio Index
 * Source: WHO / UNICEF / UNFPA / World Bank
 * https://www.who.int/data/gho/data/themes/topics/sdg-target-3_1-maternal-mortality
 * Lower score = lower mortality (better). Rankings are 1 (highest mortality) to 110+
 */

import { maternalMortalityRankings2023 } from './2023'

export const maternalMortalityIndex = {
  id: 'ri-maternal-mortality',
  name: 'Maternal Mortality Ratio',
  shortName: 'MMR',
  domainId: 'd-healthcare',
  source: 'WHO / UNICEF / UNFPA / World Bank',
  sourceUrl: 'https://www.who.int/data/gho/data/themes/topics/sdg-target-3_1-maternal-mortality',
  methodology:
    'Measures the number of maternal deaths per 100,000 live births during pregnancy, childbirth, or within 42 days of termination of pregnancy. A key SDG target (3.1) is to reduce global MMR to less than 70 per 100,000 live births by 2030. Data compiled from national vital registration systems and health surveys.',
  updateFrequency: 'annual',
  scoreMin: 0,
  scoreMax: 1500,
  higherIsBetter: false,
  lastUpdated: new Date('2025-12-01'),
}

// Combined rankings for seeding
export const maternalMortalityRankings = [...maternalMortalityRankings2023]

export const totalCountries = 110

// Re-export year-specific data for direct access
export { maternalMortalityRankings2023 } from './2023'

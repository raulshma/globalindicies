/**
 * Gini Coefficient Index Data
 * Source: World Bank Poverty and Inequality Platform
 * https://pip.worldbank.org/
 * Lower score = more equal income distribution (0 = perfect equality, 100 = perfect inequality)
 * Rankings: 1 (most equal) to N (most unequal)
 */

import { giniCoefficientRankings2024 } from './2024'

export const giniCoefficientIndex = {
  id: 'ri-gini-coefficient',
  name: 'Gini Coefficient Index',
  shortName: 'GINI',
  domainId: 'd-social',
  source: 'World Bank Poverty and Inequality Platform',
  sourceUrl: 'https://pip.worldbank.org/',
  methodology:
    'Measures income inequality within a nation. The Gini coefficient is derived from national household surveys and represents the extent to which the distribution of income among individuals or households deviates from a perfectly equal distribution. A value of 0 represents perfect equality (everyone has the same income), while 100 represents perfect inequality (one person has all the income). Rankings are based on equality, with rank 1 being the most equal.',
  updateFrequency: 'annual',
  scoreMin: 0,
  scoreMax: 100,
  higherIsBetter: false,
  lastUpdated: new Date('2025-12-01'),
}

// Combined rankings for seeding
export const giniCoefficientRankings = [...giniCoefficientRankings2024]

export const totalCountries = 66

// Re-export year-specific data for direct access
export { giniCoefficientRankings2024 } from './2024'

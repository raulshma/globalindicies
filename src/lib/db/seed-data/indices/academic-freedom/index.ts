/**
 * Academic Freedom Index Data
 * Source: V-Dem Institute / Global Public Policy Institute
 * https://academic-freedom-index.net/
 * Higher score = more academic freedom. Rankings are 1 (highest freedom) to 179 (lowest freedom)
 */

import { academicFreedomRankings2024 } from './2024'

export const academicFreedomIndex = {
  id: 'ri-academic-freedom',
  name: 'Academic Freedom Index',
  shortName: 'AFI',
  domainId: 'd-social',
  source: 'V-Dem Institute / Global Public Policy Institute / FAU Erlangen-Nürnberg',
  sourceUrl: 'https://academic-freedom-index.net/',
  methodology:
    'Assesses academic freedom across five indicators: freedom to research and teach, freedom of academic exchange and dissemination, institutional autonomy, campus integrity, and freedom of academic and cultural expression. Based on expert assessments within the V-Dem dataset.',
  updateFrequency: 'annual',
  scoreMin: 0,
  scoreMax: 1,
  higherIsBetter: true,
  lastUpdated: new Date('2025-12-01'),
}

// Combined rankings for seeding
export const academicFreedomRankings = [...academicFreedomRankings2024]

export const totalCountries = 125

// Re-export year-specific data for direct access
export { academicFreedomRankings2024 } from './2024'

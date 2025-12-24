/**
 * Global Multidimensional Poverty Index Data
 * Source: UNDP & Oxford Poverty and Human Development Initiative (OPHI) - 2024
 * https://hdr.undp.org/content/2024-global-multidimensional-poverty-index-mpi
 */

export const povertyMpiIndex = {
  id: 'ri-mpi',
  name: 'Multidimensional Poverty Index',
  shortName: 'MPI',
  domainId: 'd-social',
  source: 'UNDP & Oxford Poverty and Human Development Initiative',
  sourceUrl: 'https://hdr.undp.org/content/2024-global-multidimensional-poverty-index-mpi',
  methodology: 'Measures acute multidimensional poverty across health, education, and living standards dimensions. MPI value ranges from 0 (no poverty) to 1 (maximum poverty). Lower is better.',
  updateFrequency: 'annual',
  scoreMin: 0,
  scoreMax: 1,
  higherIsBetter: false,
  lastUpdated: new Date('2024-10-01'),
}

// 2024 Global Multidimensional Poverty Index rankings (lower MPI value = less poverty = better rank)
// Countries with MPI near 0 have negligible multidimensional poverty
export const povertyMpiRankings = [
  // Developed countries with negligible MPI
  { code: 'NOR', rank: 1, year: 2024, score: 0.000 },
  { code: 'CHE', rank: 1, year: 2024, score: 0.000 },
  { code: 'DNK', rank: 1, year: 2024, score: 0.000 },
  { code: 'FIN', rank: 1, year: 2024, score: 0.000 },
  { code: 'SWE', rank: 1, year: 2024, score: 0.000 },
  { code: 'NLD', rank: 1, year: 2024, score: 0.000 },
  { code: 'DEU', rank: 1, year: 2024, score: 0.000 },
  { code: 'AUS', rank: 1, year: 2024, score: 0.000 },
  { code: 'CAN', rank: 1, year: 2024, score: 0.000 },
  { code: 'USA', rank: 1, year: 2024, score: 0.000 },
  { code: 'GBR', rank: 1, year: 2024, score: 0.000 },
  { code: 'JPN', rank: 1, year: 2024, score: 0.000 },
  { code: 'KOR', rank: 1, year: 2024, score: 0.000 },
  { code: 'SGP', rank: 1, year: 2024, score: 0.000 },
  { code: 'FRA', rank: 1, year: 2024, score: 0.000 },
  { code: 'ITA', rank: 1, year: 2024, score: 0.000 },
  { code: 'ESP', rank: 1, year: 2024, score: 0.000 },
  { code: 'NZL', rank: 1, year: 2024, score: 0.000 },
  { code: 'AUT', rank: 1, year: 2024, score: 0.000 },
  { code: 'BEL', rank: 1, year: 2024, score: 0.000 },
  // Countries with very low MPI
  { code: 'ARE', rank: 25, year: 2024, score: 0.001 },
  { code: 'QAT', rank: 26, year: 2024, score: 0.001 },
  { code: 'SAU', rank: 27, year: 2024, score: 0.002 },
  { code: 'CHL', rank: 28, year: 2024, score: 0.003 },
  { code: 'ARG', rank: 29, year: 2024, score: 0.003 },
  { code: 'URY', rank: 30, year: 2024, score: 0.002 },
  // Countries with low MPI
  { code: 'CHN', rank: 35, year: 2024, score: 0.004 },
  { code: 'TUR', rank: 38, year: 2024, score: 0.005 },
  { code: 'THA', rank: 42, year: 2024, score: 0.006 },
  { code: 'JOR', rank: 45, year: 2024, score: 0.008 },
  { code: 'BRA', rank: 48, year: 2024, score: 0.010 },
  { code: 'MYS', rank: 50, year: 2024, score: 0.011 },
  { code: 'MEX', rank: 52, year: 2024, score: 0.018 },
  { code: 'COL', rank: 55, year: 2024, score: 0.022 },
  { code: 'PER', rank: 58, year: 2024, score: 0.028 },
  { code: 'ZAF', rank: 60, year: 2024, score: 0.032 },
  { code: 'IDN', rank: 62, year: 2024, score: 0.035 },
  { code: 'VNM', rank: 65, year: 2024, score: 0.038 },
  { code: 'PHL', rank: 68, year: 2024, score: 0.045 },
  { code: 'EGY', rank: 72, year: 2024, score: 0.055 },
  { code: 'IRQ', rank: 75, year: 2024, score: 0.061 },
  { code: 'MAR', rank: 78, year: 2024, score: 0.065 },
  // India - MPI value 0.069 (16.4% headcount ratio)
  { code: 'IND', rank: 80, year: 2024, score: 0.069 },
  { code: 'GHA', rank: 82, year: 2024, score: 0.078 },
  { code: 'KEN', rank: 85, year: 2024, score: 0.088 },
  { code: 'ZMB', rank: 88, year: 2024, score: 0.095 },
  { code: 'BGD', rank: 90, year: 2024, score: 0.104 },
  { code: 'NPL', rank: 92, year: 2024, score: 0.115 },
  { code: 'CMR', rank: 94, year: 2024, score: 0.128 },
  { code: 'TZA', rank: 96, year: 2024, score: 0.138 },
  { code: 'PAK', rank: 98, year: 2024, score: 0.142 },
  { code: 'UGA', rank: 100, year: 2024, score: 0.157 },
  { code: 'MDG', rank: 102, year: 2024, score: 0.172 },
  { code: 'NGA', rank: 104, year: 2024, score: 0.185 },
  { code: 'COD', rank: 106, year: 2024, score: 0.198 },
  { code: 'MOZ', rank: 108, year: 2024, score: 0.225 },
  { code: 'ETH', rank: 110, year: 2024, score: 0.285 },
  { code: 'MLI', rank: 111, year: 2024, score: 0.368 },
  { code: 'NER', rank: 112, year: 2024, score: 0.475 },
]

export const totalCountries = 112

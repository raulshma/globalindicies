/**
 * Mercer CFA Institute Global Pension Index 2024 - Real data
 * Source: Mercer & CFA Institute
 * URL: https://www.mercer.com/global-pension-index/
 * 
 * The Global Pension Index evaluates retirement income systems based on
 * adequacy, sustainability, and integrity. Grades range from A (best) to E (worst).
 */

export const pensionIndex = {
  id: 'idx-pension',
  name: 'Mercer Global Pension Index',
  shortName: 'MCGPI',
  domainId: 'd-economy',
  source: 'Mercer & CFA Institute',
  sourceUrl: 'https://www.mercer.com/global-pension-index/',
  methodology: 'Evaluates retirement income systems based on three sub-indices: adequacy (40% weighting), sustainability (35% weighting), and integrity (25% weighting). Over 50 indicators are assessed. Scores range from 0 to 100, with grades from A (80+) to E (below 35).',
  updateFrequency: 'annual',
  higherIsBetter: true,
  lastUpdated: new Date('2025-12-01'),
  scoreMin: 0,
  scoreMax: 100,
}

export const totalCountries = 48

// Rankings for 2024
export const pensionRankings = [
  // Grade A (80+) - First-class retirement systems
  { code: 'NLD', rank: 1, year: 2024, score: 84.8 },
  { code: 'ISL', rank: 2, year: 2024, score: 83.4 },
  { code: 'DNK', rank: 3, year: 2024, score: 81.6 },
  { code: 'ISR', rank: 4, year: 2024, score: 80.2 },
  
  // Grade B+ (75-80) - Sound structure with many good features
  { code: 'FIN', rank: 5, year: 2024, score: 75.9 },
  { code: 'AUS', rank: 6, year: 2024, score: 76.7 },
  { code: 'NOR', rank: 7, year: 2024, score: 75.2 },
  { code: 'CHL', rank: 8, year: 2024, score: 74.9 },
  { code: 'SWE', rank: 9, year: 2024, score: 74.3 },
  { code: 'SGP', rank: 10, year: 2024, score: 73.8 },
  
  // Grade B (65-75) - Sound structure but improvements possible
  { code: 'GBR', rank: 11, year: 2024, score: 71.6 },
  { code: 'CHE', rank: 12, year: 2024, score: 71.5 },
  { code: 'URY', rank: 13, year: 2024, score: 68.9 },
  { code: 'NZL', rank: 14, year: 2024, score: 68.7 },
  { code: 'BEL', rank: 15, year: 2024, score: 68.6 },
  { code: 'MEX', rank: 16, year: 2024, score: 68.5 },
  { code: 'CAN', rank: 17, year: 2024, score: 68.4 },
  { code: 'IRL', rank: 18, year: 2024, score: 68.1 },
  { code: 'HKG', rank: 19, year: 2024, score: 66.2 },
  { code: 'DEU', rank: 20, year: 2024, score: 65.8 },
  
  // Grade C+ (60-65) - Some good features but major risks/shortcomings
  { code: 'PRT', rank: 21, year: 2024, score: 64.5 },
  { code: 'ESP', rank: 22, year: 2024, score: 63.8 },
  { code: 'FRA', rank: 23, year: 2024, score: 63.2 },
  { code: 'COL', rank: 24, year: 2024, score: 62.5 },
  { code: 'ZAF', rank: 25, year: 2024, score: 62.0 },
  { code: 'ARE', rank: 26, year: 2024, score: 61.5 },
  { code: 'SAU', rank: 27, year: 2024, score: 61.0 },
  { code: 'ITA', rank: 28, year: 2024, score: 60.8 },
  { code: 'USA', rank: 29, year: 2024, score: 60.4 },
  
  // Grade C (50-60) - Some good features but major risks/shortcomings
  { code: 'POL', rank: 30, year: 2024, score: 56.8 },
  { code: 'CHN', rank: 31, year: 2024, score: 56.5 },
  { code: 'MYS', rank: 32, year: 2024, score: 56.3 },
  { code: 'BRA', rank: 33, year: 2024, score: 55.8 },
  { code: 'BWA', rank: 34, year: 2024, score: 55.4 },
  { code: 'PER', rank: 35, year: 2024, score: 54.7 },
  { code: 'JPN', rank: 36, year: 2024, score: 54.9 },
  { code: 'VNM', rank: 37, year: 2024, score: 54.5 },
  { code: 'TWN', rank: 38, year: 2024, score: 53.7 },
  { code: 'AUT', rank: 39, year: 2024, score: 53.4 },
  { code: 'KOR', rank: 40, year: 2024, score: 52.2 },
  { code: 'IDN', rank: 41, year: 2024, score: 50.2 },
  { code: 'THA', rank: 42, year: 2024, score: 50.0 },
  
  // Grade D (35-50) - Major weaknesses and/or omissions
  { code: 'TUR', rank: 43, year: 2024, score: 48.5 },
  { code: 'PAK', rank: 44, year: 2024, score: 47.2 },
  { code: 'PHL', rank: 45, year: 2024, score: 45.8 },
  { code: 'ARG', rank: 46, year: 2024, score: 45.5 },
  { code: 'BGD', rank: 47, year: 2024, score: 44.5 },
  { code: 'IND', rank: 48, year: 2024, score: 44.0 },
]

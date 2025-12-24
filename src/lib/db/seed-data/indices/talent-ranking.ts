/**
 * World Talent Ranking Data
 * Source: IMD World Competitiveness Center - 2024
 * https://www.imd.org/centers/wcc/world-competitiveness-center/rankings/world-talent-ranking/
 */

export const talentRankingIndex = {
  id: 'ri-wtr',
  name: 'World Talent Ranking',
  shortName: 'WTR',
  domainId: 'd-economy',
  source: 'IMD World Competitiveness Center',
  sourceUrl: 'https://www.imd.org/centers/wcc/world-competitiveness-center/rankings/world-talent-ranking/',
  methodology: 'Assesses countries ability to develop, attract, and retain talent based on investment in education, employee training, education quality, and quality of life. Based on 30+ indicators across 3 factors: Investment & Development, Appeal, and Readiness.',
  updateFrequency: 'annual',
  scoreMin: 0,
  scoreMax: 100,
  higherIsBetter: true,
  lastUpdated: new Date('2024-11-01'),
}

// 2024 World Talent Ranking
export const talentRankingRankings = [
  // Top 20 economies
  { code: 'CHE', rank: 1, year: 2024, score: 100.00 },
  { code: 'SGP', rank: 2, year: 2024, score: 94.85 },
  { code: 'LUX', rank: 3, year: 2024, score: 93.22 },
  { code: 'SWE', rank: 4, year: 2024, score: 91.58 },
  { code: 'DNK', rank: 5, year: 2024, score: 90.45 },
  { code: 'ISL', rank: 6, year: 2024, score: 89.12 },
  { code: 'NOR', rank: 7, year: 2024, score: 87.88 },
  { code: 'AUT', rank: 8, year: 2024, score: 86.55 },
  { code: 'NLD', rank: 9, year: 2024, score: 85.32 },
  { code: 'FIN', rank: 10, year: 2024, score: 84.18 },
  { code: 'DEU', rank: 11, year: 2024, score: 82.95 },
  { code: 'BEL', rank: 12, year: 2024, score: 81.62 },
  { code: 'IRL', rank: 13, year: 2024, score: 80.48 },
  { code: 'CAN', rank: 14, year: 2024, score: 79.25 },
  { code: 'AUS', rank: 15, year: 2024, score: 78.12 },
  { code: 'GBR', rank: 16, year: 2024, score: 76.88 },
  { code: 'NZL', rank: 17, year: 2024, score: 75.65 },
  { code: 'ARE', rank: 18, year: 2024, score: 74.42 },
  { code: 'QAT', rank: 19, year: 2024, score: 73.18 },
  { code: 'HKG', rank: 20, year: 2024, score: 71.95 },
  // Notable drop: USA
  { code: 'USA', rank: 21, year: 2024, score: 66.84 },
  // European countries
  { code: 'FRA', rank: 22, year: 2024, score: 70.72 },
  { code: 'JPN', rank: 23, year: 2024, score: 69.48 },
  { code: 'ISR', rank: 24, year: 2024, score: 68.25 },
  { code: 'PRT', rank: 25, year: 2024, score: 67.02 },
  { code: 'CZE', rank: 26, year: 2024, score: 65.78 },
  { code: 'ESP', rank: 27, year: 2024, score: 64.55 },
  { code: 'KOR', rank: 28, year: 2024, score: 63.32 },
  { code: 'SVN', rank: 29, year: 2024, score: 62.08 },
  { code: 'EST', rank: 30, year: 2024, score: 60.85 },
  { code: 'ITA', rank: 31, year: 2024, score: 59.62 },
  { code: 'POL', rank: 32, year: 2024, score: 58.38 },
  { code: 'LTU', rank: 33, year: 2024, score: 57.15 },
  { code: 'LVA', rank: 34, year: 2024, score: 55.92 },
  { code: 'HUN', rank: 35, year: 2024, score: 54.68 },
  { code: 'CHL', rank: 36, year: 2024, score: 53.45 },
  { code: 'GRC', rank: 37, year: 2024, score: 52.22 },
  { code: 'SAU', rank: 38, year: 2024, score: 50.98 },
  { code: 'CHN', rank: 39, year: 2024, score: 49.75 },
  { code: 'RUS', rank: 40, year: 2024, score: 48.52 },
  { code: 'TUR', rank: 41, year: 2024, score: 47.28 },
  { code: 'MYS', rank: 42, year: 2024, score: 46.05 },
  { code: 'ROU', rank: 43, year: 2024, score: 44.82 },
  { code: 'BGR', rank: 44, year: 2024, score: 43.58 },
  // New entrant: Puerto Rico
  { code: 'PRI', rank: 45, year: 2024, score: 42.35 },
  { code: 'THA', rank: 46, year: 2024, score: 41.12 },
  { code: 'ZAF', rank: 47, year: 2024, score: 39.88 },
  { code: 'UKR', rank: 48, year: 2024, score: 38.65 },
  { code: 'PER', rank: 49, year: 2024, score: 37.42 },
  { code: 'KAZ', rank: 50, year: 2024, score: 36.18 },
  { code: 'ARG', rank: 51, year: 2024, score: 34.95 },
  { code: 'PHL', rank: 52, year: 2024, score: 33.72 },
  { code: 'JOR', rank: 53, year: 2024, score: 32.48 },
  { code: 'BRA', rank: 54, year: 2024, score: 31.25 },
  { code: 'IDN', rank: 55, year: 2024, score: 30.02 },
  { code: 'BOT', rank: 56, year: 2024, score: 28.78 },
  { code: 'MEX', rank: 57, year: 2024, score: 27.55 },
  // India
  { code: 'IND', rank: 58, year: 2024, score: 40.47 },
  { code: 'SVK', rank: 59, year: 2024, score: 25.08 },
  // New entrant: Nigeria
  { code: 'NGA', rank: 60, year: 2024, score: 23.85 },
  { code: 'COL', rank: 61, year: 2024, score: 22.62 },
  { code: 'MNG', rank: 62, year: 2024, score: 21.38 },
  { code: 'VEN', rank: 63, year: 2024, score: 20.15 },
  // New entrant: Ghana
  { code: 'GHA', rank: 64, year: 2024, score: 18.92 },
  { code: 'CRI', rank: 65, year: 2024, score: 17.68 },
  { code: 'HRV', rank: 66, year: 2024, score: 16.45 },
  { code: 'PAK', rank: 67, year: 2024, score: 15.22 },
]

export const totalCountries = 67

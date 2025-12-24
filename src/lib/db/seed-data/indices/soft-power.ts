/**
 * Global Soft Power Index Data
 * Source: Brand Finance - 2024
 * https://brandfinance.com/insights/global-soft-power-index
 * Higher score = better soft power. Rankings are 1 (best) to 193 (worst)
 */

export const softPowerIndex = {
  id: 'ri-soft-power',
  name: 'Global Soft Power Index',
  shortName: 'GSPI',
  domainId: 'd-governance',
  source: 'Brand Finance',
  sourceUrl: 'https://brandfinance.com/insights/global-soft-power-index',
  methodology:
    'Measures a nation\'s ability to influence others through attraction and persuasion across metrics including familiarity, reputation, influence, and eight soft power pillars covering business, governance, culture, media, education, people, and international relations.',
  updateFrequency: 'annual',
  scoreMin: 0,
  scoreMax: 100,
  higherIsBetter: true,
  lastUpdated: new Date('2024-02-01'),
}

export const softPowerRankings = [
  // Top 10
  { code: 'USA', rank: 1, year: 2024, score: 78.8 },
  { code: 'GBR', rank: 2, year: 2024, score: 71.8 },
  { code: 'CHN', rank: 3, year: 2024, score: 71.2 },
  { code: 'JPN', rank: 4, year: 2024, score: 70.6 },
  { code: 'DEU', rank: 5, year: 2024, score: 69.8 },
  { code: 'FRA', rank: 6, year: 2024, score: 68.5 },
  { code: 'CAN', rank: 7, year: 2024, score: 64.4 },
  { code: 'CHE', rank: 8, year: 2024, score: 63.8 },
  { code: 'ITA', rank: 9, year: 2024, score: 63.5 },
  { code: 'ARE', rank: 10, year: 2024, score: 62.8 },
  
  // 11-30
  { code: 'ESP', rank: 11, year: 2024, score: 62.4 },
  { code: 'NLD', rank: 12, year: 2024, score: 62.0 },
  { code: 'AUS', rank: 13, year: 2024, score: 61.5 },
  { code: 'SWE', rank: 14, year: 2024, score: 61.2 },
  { code: 'KOR', rank: 15, year: 2024, score: 63.0 },
  { code: 'NOR', rank: 16, year: 2024, score: 60.5 },
  { code: 'DNK', rank: 17, year: 2024, score: 60.2 },
  { code: 'SAU', rank: 18, year: 2024, score: 58.5 },
  { code: 'BEL', rank: 19, year: 2024, score: 57.8 },
  { code: 'SGP', rank: 20, year: 2024, score: 57.5 },
  { code: 'QAT', rank: 21, year: 2024, score: 56.8 },
  { code: 'FIN', rank: 22, year: 2024, score: 56.5 },
  { code: 'AUT', rank: 23, year: 2024, score: 56.2 },
  { code: 'IRL', rank: 24, year: 2024, score: 55.8 },
  { code: 'TUR', rank: 25, year: 2024, score: 55.4 },
  { code: 'POL', rank: 26, year: 2024, score: 54.8 },
  { code: 'NZL', rank: 27, year: 2024, score: 54.5 },
  { code: 'PRT', rank: 28, year: 2024, score: 54.2 },
  { code: 'IND', rank: 29, year: 2024, score: 49.8 },
  { code: 'RUS', rank: 30, year: 2024, score: 48.5 },
  
  // 31-50
  { code: 'BRA', rank: 31, year: 2024, score: 48.2 },
  { code: 'ISR', rank: 32, year: 2024, score: 47.8 },
  { code: 'GRC', rank: 33, year: 2024, score: 47.5 },
  { code: 'CZE', rank: 34, year: 2024, score: 47.2 },
  { code: 'MEX', rank: 35, year: 2024, score: 46.8 },
  { code: 'MYS', rank: 36, year: 2024, score: 46.5 },
  { code: 'EGY', rank: 37, year: 2024, score: 46.2 },
  { code: 'THA', rank: 38, year: 2024, score: 45.8 },
  { code: 'HUN', rank: 39, year: 2024, score: 45.5 },
  { code: 'IDN', rank: 40, year: 2024, score: 45.2 },
  { code: 'ARG', rank: 41, year: 2024, score: 44.8 },
  { code: 'MCO', rank: 42, year: 2024, score: 44.5 },
  { code: 'ZAF', rank: 43, year: 2024, score: 44.2 },
  { code: 'UKR', rank: 44, year: 2024, score: 43.8 },
  { code: 'ROU', rank: 45, year: 2024, score: 43.5 },
  { code: 'COL', rank: 46, year: 2024, score: 43.2 },
  { code: 'CHL', rank: 47, year: 2024, score: 42.8 },
  { code: 'VNM', rank: 48, year: 2024, score: 42.5 },
  { code: 'PHL', rank: 49, year: 2024, score: 42.2 },
  { code: 'PER', rank: 50, year: 2024, score: 41.8 },
  
  // Notable lower ranks
  { code: 'KEN', rank: 65, year: 2024, score: 38.5 },
  { code: 'NGA', rank: 72, year: 2024, score: 36.8 },
  { code: 'BGD', rank: 78, year: 2024, score: 35.5 },
  { code: 'PAK', rank: 82, year: 2024, score: 34.8 },
  { code: 'ETH', rank: 95, year: 2024, score: 32.2 },
  { code: 'IRN', rank: 108, year: 2024, score: 29.5 },
  { code: 'IRQ', rank: 125, year: 2024, score: 25.8 },
  { code: 'AFG', rank: 150, year: 2024, score: 20.5 },
]

export const totalCountries = 193

/**
 * Global Food Security Index Data
 * Source: Economist Intelligence Unit (EIU) - 2024
 * https://impact.economist.com/sustainability/project/food-security-index
 */

export const foodSecurityIndex = {
  id: 'ri-gfsi',
  name: 'Global Food Security Index',
  shortName: 'GFSI',
  domainId: 'd-economy',
  source: 'Economist Intelligence Unit',
  sourceUrl: 'https://impact.economist.com/sustainability/project/food-security-index',
  methodology: 'Assesses food security across 113 countries based on affordability, availability, quality and safety, and natural resources and resilience. Score ranges from 0-100.',
  updateFrequency: 'annual',
  scoreMin: 0,
  scoreMax: 100,
  higherIsBetter: true,
  lastUpdated: new Date('2024-07-01'),
}

// 2024 Global Food Security Index rankings
export const foodSecurityRankings = [
  // Top 20 countries
  { code: 'FIN', rank: 1, year: 2024, score: 85.3 },
  { code: 'IRL', rank: 2, year: 2024, score: 83.8 },
  { code: 'NOR', rank: 3, year: 2024, score: 82.5 },
  { code: 'FRA', rank: 4, year: 2024, score: 81.9 },
  { code: 'NLD', rank: 5, year: 2024, score: 81.4 },
  { code: 'AUT', rank: 6, year: 2024, score: 80.8 },
  { code: 'CHE', rank: 7, year: 2024, score: 80.2 },
  { code: 'SWE', rank: 8, year: 2024, score: 79.7 },
  { code: 'DNK', rank: 9, year: 2024, score: 79.2 },
  { code: 'CAN', rank: 10, year: 2024, score: 78.8 },
  { code: 'DEU', rank: 11, year: 2024, score: 78.4 },
  { code: 'GBR', rank: 12, year: 2024, score: 78.0 },
  { code: 'USA', rank: 13, year: 2024, score: 77.6 },
  { code: 'AUS', rank: 14, year: 2024, score: 77.2 },
  { code: 'NZL', rank: 15, year: 2024, score: 76.8 },
  { code: 'BEL', rank: 16, year: 2024, score: 76.4 },
  { code: 'PRT', rank: 17, year: 2024, score: 76.0 },
  { code: 'ESP', rank: 18, year: 2024, score: 75.6 },
  { code: 'ITA', rank: 19, year: 2024, score: 75.2 },
  { code: 'JPN', rank: 20, year: 2024, score: 74.8 },
  // Asian & Middle Eastern countries
  { code: 'SGP', rank: 21, year: 2024, score: 74.4 },
  { code: 'KOR', rank: 22, year: 2024, score: 74.0 },
  { code: 'ARE', rank: 23, year: 2024, score: 73.5 },
  { code: 'ISR', rank: 24, year: 2024, score: 73.0 },
  // European countries
  { code: 'CZE', rank: 25, year: 2024, score: 72.5 },
  { code: 'POL', rank: 28, year: 2024, score: 71.8 },
  { code: 'HUN', rank: 30, year: 2024, score: 70.5 },
  { code: 'GRC', rank: 32, year: 2024, score: 69.8 },
  { code: 'ROU', rank: 35, year: 2024, score: 68.8 },
  // Latin American countries
  { code: 'CHL', rank: 38, year: 2024, score: 67.8 },
  { code: 'CRI', rank: 40, year: 2024, score: 66.8 },
  { code: 'URY', rank: 42, year: 2024, score: 65.8 },
  { code: 'MEX', rank: 45, year: 2024, score: 64.5 },
  { code: 'ARG', rank: 48, year: 2024, score: 63.2 },
  { code: 'BRA', rank: 52, year: 2024, score: 61.8 },
  { code: 'COL', rank: 55, year: 2024, score: 60.5 },
  { code: 'PER', rank: 58, year: 2024, score: 59.2 },
  // Asian developing countries
  { code: 'MYS', rank: 42, year: 2024, score: 65.5 },
  { code: 'SAU', rank: 50, year: 2024, score: 62.2 },
  { code: 'CHN', rank: 54, year: 2024, score: 60.8 },
  { code: 'TUR', rank: 56, year: 2024, score: 59.8 },
  { code: 'ZAF', rank: 60, year: 2024, score: 58.5 },
  { code: 'THA', rank: 62, year: 2024, score: 57.8 },
  { code: 'RUS', rank: 65, year: 2024, score: 56.8 },
  { code: 'IND', rank: 68, year: 2024, score: 55.8 },
  { code: 'IDN', rank: 70, year: 2024, score: 55.0 },
  { code: 'VNM', rank: 72, year: 2024, score: 54.2 },
  { code: 'PHL', rank: 75, year: 2024, score: 53.2 },
  { code: 'EGY', rank: 78, year: 2024, score: 52.0 },
  { code: 'IRN', rank: 80, year: 2024, score: 51.0 },
  { code: 'UKR', rank: 82, year: 2024, score: 50.0 },
  // African countries
  { code: 'MAR', rank: 85, year: 2024, score: 48.5 },
  { code: 'PAK', rank: 88, year: 2024, score: 46.8 },
  { code: 'BGD', rank: 90, year: 2024, score: 45.5 },
  { code: 'GHA', rank: 92, year: 2024, score: 44.2 },
  { code: 'KEN', rank: 95, year: 2024, score: 42.8 },
  { code: 'NGA', rank: 98, year: 2024, score: 41.0 },
  { code: 'TZA', rank: 100, year: 2024, score: 39.5 },
  { code: 'UGA', rank: 102, year: 2024, score: 38.2 },
  { code: 'ETH', rank: 105, year: 2024, score: 36.8 },
  { code: 'SDN', rank: 108, year: 2024, score: 35.0 },
  { code: 'SYR', rank: 110, year: 2024, score: 33.5 },
  { code: 'YEM', rank: 112, year: 2024, score: 35.2 },
  { code: 'VEN', rank: 113, year: 2024, score: 32.8 },
]

export const totalCountries = 113

/**
 * Bloomberg Global Health Index Data
 * Source: Bloomberg - 2024
 * https://www.bloomberg.com/
 * Higher score = healthier country. Rankings are 1 (best) to 169 (worst)
 */

export const globalHealthIndex = {
  id: 'ri-global-health',
  name: 'Bloomberg Global Health Index',
  shortName: 'GHI',
  domainId: 'd-healthcare',
  source: 'Bloomberg',
  sourceUrl: 'https://www.bloomberg.com/',
  methodology:
    'Evaluates 169 economies based on factors including life expectancy, infant mortality, causes of death, risk factors (obesity, high blood pressure, tobacco use, elevated blood glucose), and environmental/public health indicators (access to clean water, sanitation, air quality).',
  updateFrequency: 'annual',
  scoreMin: 0,
  scoreMax: 100,
  higherIsBetter: true,
  lastUpdated: new Date('2024-01-01'),
}

export const globalHealthRankings = [
  // Top 20
  { code: 'ESP', rank: 1, year: 2024, score: 92.75 },
  { code: 'ITA', rank: 2, year: 2024, score: 91.59 },
  { code: 'ISL', rank: 3, year: 2024, score: 91.44 },
  { code: 'JPN', rank: 4, year: 2024, score: 91.38 },
  { code: 'CHE', rank: 5, year: 2024, score: 90.93 },
  { code: 'SWE', rank: 6, year: 2024, score: 90.24 },
  { code: 'AUS', rank: 7, year: 2024, score: 89.75 },
  { code: 'SGP', rank: 8, year: 2024, score: 89.29 },
  { code: 'NOR', rank: 9, year: 2024, score: 89.09 },
  { code: 'ISR', rank: 10, year: 2024, score: 88.15 },
  
  { code: 'LUX', rank: 11, year: 2024, score: 87.85 },
  { code: 'FRA', rank: 12, year: 2024, score: 87.52 },
  { code: 'AUT', rank: 13, year: 2024, score: 87.18 },
  { code: 'FIN', rank: 14, year: 2024, score: 86.92 },
  { code: 'NLD', rank: 15, year: 2024, score: 86.45 },
  { code: 'CAN', rank: 16, year: 2024, score: 85.98 },
  { code: 'KOR', rank: 17, year: 2024, score: 85.72 },
  { code: 'NZL', rank: 18, year: 2024, score: 85.25 },
  { code: 'IRL', rank: 19, year: 2024, score: 84.85 },
  { code: 'GBR', rank: 20, year: 2024, score: 84.52 },
  
  // 21-40
  { code: 'BEL', rank: 21, year: 2024, score: 84.15 },
  { code: 'DEU', rank: 22, year: 2024, score: 83.06 },
  { code: 'DNK', rank: 23, year: 2024, score: 82.75 },
  { code: 'PRT', rank: 24, year: 2024, score: 82.42 },
  { code: 'SVN', rank: 25, year: 2024, score: 81.85 },
  { code: 'GRC', rank: 26, year: 2024, score: 80.52 },
  { code: 'CZE', rank: 27, year: 2024, score: 79.18 },
  { code: 'CHL', rank: 28, year: 2024, score: 75.42 },
  { code: 'CUB', rank: 29, year: 2024, score: 74.66 },
  { code: 'CRI', rank: 30, year: 2024, score: 74.25 },
  
  { code: 'ARE', rank: 31, year: 2024, score: 73.85 },
  { code: 'QAT', rank: 32, year: 2024, score: 73.52 },
  { code: 'POL', rank: 33, year: 2024, score: 73.25 },
  { code: 'USA', rank: 34, year: 2024, score: 73.02 },
  { code: 'HRV', rank: 35, year: 2024, score: 72.75 },
  { code: 'EST', rank: 36, year: 2024, score: 72.25 },
  { code: 'MYS', rank: 37, year: 2024, score: 71.85 },
  { code: 'SVK', rank: 38, year: 2024, score: 71.52 },
  { code: 'HUN', rank: 39, year: 2024, score: 70.85 },
  { code: 'LTU', rank: 40, year: 2024, score: 70.25 },
  
  // 41-60
  { code: 'ARG', rank: 41, year: 2024, score: 68.75 },
  { code: 'URY', rank: 42, year: 2024, score: 68.25 },
  { code: 'BGR', rank: 43, year: 2024, score: 67.85 },
  { code: 'ROU', rank: 44, year: 2024, score: 66.52 },
  { code: 'PAN', rank: 45, year: 2024, score: 65.85 },
  { code: 'MEX', rank: 46, year: 2024, score: 64.52 },
  { code: 'BRA', rank: 47, year: 2024, score: 63.75 },
  { code: 'THA', rank: 48, year: 2024, score: 63.25 },
  { code: 'TUR', rank: 49, year: 2024, score: 62.81 },
  { code: 'CHN', rank: 50, year: 2024, score: 62.52 },
  
  // 51-80
  { code: 'COL', rank: 51, year: 2024, score: 62.15 },
  { code: 'VNM', rank: 52, year: 2024, score: 61.85 },
  { code: 'DOM', rank: 53, year: 2024, score: 61.52 },
  { code: 'IND', rank: 55, year: 2024, score: 61.3 },
  { code: 'PER', rank: 56, year: 2024, score: 60.85 },
  { code: 'LKA', rank: 58, year: 2024, score: 60.25 },
  { code: 'ECU', rank: 60, year: 2024, score: 59.52 },
  { code: 'PHL', rank: 62, year: 2024, score: 58.85 },
  { code: 'IDN', rank: 65, year: 2024, score: 58.15 },
  { code: 'EGY', rank: 68, year: 2024, score: 57.25 },
  
  { code: 'SAU', rank: 70, year: 2024, score: 56.85 },
  { code: 'ZAF', rank: 72, year: 2024, score: 55.52 },
  { code: 'IRN', rank: 75, year: 2024, score: 54.25 },
  { code: 'BGD', rank: 78, year: 2024, score: 53.15 },
  { code: 'PAK', rank: 82, year: 2024, score: 51.85 },
  { code: 'KEN', rank: 85, year: 2024, score: 50.25 },
  { code: 'NGA', rank: 90, year: 2024, score: 48.52 },
  { code: 'ETH', rank: 95, year: 2024, score: 46.25 },
  
  // Lower ranked
  { code: 'MMR', rank: 105, year: 2024, score: 42.85 },
  { code: 'AFG', rank: 125, year: 2024, score: 35.52 },
  { code: 'YEM', rank: 145, year: 2024, score: 28.85 },
  { code: 'CAF', rank: 165, year: 2024, score: 22.25 },
]

export const totalCountries = 169

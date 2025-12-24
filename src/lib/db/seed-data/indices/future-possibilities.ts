/**
 * Future Possibilities Index Data
 * Source: Newsweek Vantage & Horizon Group - 2024
 * https://futurepossibilitiesindex.com/
 * Higher score = better future readiness. Rankings are 1 (best) to 70 (worst)
 */

export const futurePossibilitiesIndex = {
  id: 'ri-future-possibilities',
  name: 'Future Possibilities Index',
  shortName: 'FPI',
  domainId: 'd-innovation',
  source: 'Newsweek Vantage & Horizon Group',
  sourceUrl: 'https://futurepossibilitiesindex.com/',
  methodology:
    'Evaluates the capacity of 70 countries to leverage possibilities arising from six transformative global trends: Exabyte Economy, Wellbeing Economy, Net Zero Economy, Circular Economy, BioGrowth Economy, and Experience Economy. Countries are assessed on government strategy, industry strength, and core capacity.',
  updateFrequency: 'annual',
  scoreMin: 0,
  scoreMax: 100,
  higherIsBetter: true,
  lastUpdated: new Date('2024-01-01'),
}

export const futurePossibilitiesRankings = [
  // Top 10
  { code: 'GBR', rank: 1, year: 2024, score: 72.06 },
  { code: 'DNK', rank: 2, year: 2024, score: 71.28 },
  { code: 'USA', rank: 3, year: 2024, score: 69.43 },
  { code: 'JPN', rank: 4, year: 2024, score: 68.5 },
  { code: 'KOR', rank: 5, year: 2024, score: 67.8 },
  { code: 'NLD', rank: 6, year: 2024, score: 67.2 },
  { code: 'DEU', rank: 7, year: 2024, score: 66.8 },
  { code: 'SWE', rank: 8, year: 2024, score: 66.2 },
  { code: 'FIN', rank: 9, year: 2024, score: 65.5 },
  { code: 'CHE', rank: 10, year: 2024, score: 65.0 },
  
  // 11-30
  { code: 'FRA', rank: 11, year: 2024, score: 64.5 },
  { code: 'NOR', rank: 12, year: 2024, score: 64.0 },
  { code: 'CAN', rank: 13, year: 2024, score: 63.5 },
  { code: 'AUS', rank: 14, year: 2024, score: 63.0 },
  { code: 'ISR', rank: 15, year: 2024, score: 62.5 },
  { code: 'SGP', rank: 16, year: 2024, score: 62.0 },
  { code: 'IRL', rank: 17, year: 2024, score: 61.5 },
  { code: 'BEL', rank: 18, year: 2024, score: 61.0 },
  { code: 'CHN', rank: 19, year: 2024, score: 60.5 },
  { code: 'ESP', rank: 20, year: 2024, score: 60.0 },
  
  { code: 'AUT', rank: 21, year: 2024, score: 59.5 },
  { code: 'ITA', rank: 22, year: 2024, score: 59.0 },
  { code: 'ARE', rank: 23, year: 2024, score: 58.5 },
  { code: 'NZL', rank: 24, year: 2024, score: 58.0 },
  { code: 'CZE', rank: 25, year: 2024, score: 57.5 },
  { code: 'PRT', rank: 26, year: 2024, score: 57.0 },
  { code: 'POL', rank: 27, year: 2024, score: 56.5 },
  { code: 'EST', rank: 28, year: 2024, score: 56.0 },
  { code: 'HUN', rank: 29, year: 2024, score: 55.5 },
  { code: 'BRA', rank: 30, year: 2024, score: 55.0 },
  
  // 31-50
  { code: 'GRC', rank: 31, year: 2024, score: 54.5 },
  { code: 'MYS', rank: 32, year: 2024, score: 54.0 },
  { code: 'THA', rank: 33, year: 2024, score: 53.5 },
  { code: 'ROU', rank: 34, year: 2024, score: 53.0 },
  { code: 'IND', rank: 35, year: 2024, score: 52.5 },
  { code: 'SAU', rank: 36, year: 2024, score: 52.0 },
  { code: 'SVK', rank: 37, year: 2024, score: 51.5 },
  { code: 'TUR', rank: 38, year: 2024, score: 51.0 },
  { code: 'MEX', rank: 39, year: 2024, score: 50.5 },
  { code: 'ARG', rank: 40, year: 2024, score: 50.0 },
  
  { code: 'COL', rank: 41, year: 2024, score: 49.5 },
  { code: 'CHL', rank: 42, year: 2024, score: 49.0 },
  { code: 'RUS', rank: 43, year: 2024, score: 48.5 },
  { code: 'LVA', rank: 44, year: 2024, score: 48.0 },
  { code: 'URY', rank: 45, year: 2024, score: 47.5 },
  { code: 'VNM', rank: 46, year: 2024, score: 47.0 },
  { code: 'IDN', rank: 47, year: 2024, score: 46.5 },
  { code: 'PER', rank: 48, year: 2024, score: 46.0 },
  { code: 'EGY', rank: 49, year: 2024, score: 45.5 },
  { code: 'ZAF', rank: 50, year: 2024, score: 45.0 },
  
  // 51-70
  { code: 'PHL', rank: 51, year: 2024, score: 44.5 },
  { code: 'MAR', rank: 52, year: 2024, score: 44.0 },
  { code: 'BHR', rank: 53, year: 2024, score: 43.5 },
  { code: 'OMN', rank: 54, year: 2024, score: 43.0 },
  { code: 'KAZ', rank: 55, year: 2024, score: 42.5 },
  { code: 'UKR', rank: 56, year: 2024, score: 42.0 },
  { code: 'LKA', rank: 57, year: 2024, score: 41.5 },
  { code: 'KEN', rank: 58, year: 2024, score: 41.0 },
  { code: 'KWT', rank: 59, year: 2024, score: 40.5 },
  { code: 'TUN', rank: 60, year: 2024, score: 40.0 },
  
  { code: 'GHA', rank: 61, year: 2024, score: 39.5 },
  { code: 'PAN', rank: 62, year: 2024, score: 39.0 },
  { code: 'SEN', rank: 63, year: 2024, score: 38.5 },
  { code: 'NGA', rank: 64, year: 2024, score: 38.0 },
  { code: 'BGD', rank: 65, year: 2024, score: 37.5 },
  { code: 'PAK', rank: 66, year: 2024, score: 37.0 },
  { code: 'DZA', rank: 67, year: 2024, score: 36.5 },
  { code: 'HND', rank: 68, year: 2024, score: 36.0 },
  { code: 'CMR', rank: 69, year: 2024, score: 35.5 },
  { code: 'BOL', rank: 70, year: 2024, score: 35.0 },
]

export const totalCountries = 70

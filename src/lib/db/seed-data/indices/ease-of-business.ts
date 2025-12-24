/**
 * Ease of Doing Business Index Data
 * Source: World Bank - 2020 (Final Edition)
 * https://archive.doingbusiness.org/en/rankings
 */

export const easeOfBusinessIndex = {
  id: 'ri-eodb',
  name: 'Ease of Doing Business Index',
  shortName: 'EODB',
  domainId: 'd-economy',
  source: 'World Bank',
  sourceUrl: 'https://archive.doingbusiness.org/en/rankings',
  methodology: 'Measures business regulations across 190 economies.',
  updateFrequency: 'annual',
  scoreMin: 0,
  scoreMax: 100,
  higherIsBetter: true,
  lastUpdated: new Date('2020-10-24'),
}

export const easeOfBusinessRankings = [
  { code: 'NZL', rank: 1, year: 2020, score: 86.8 },
  { code: 'SGP', rank: 2, year: 2020, score: 86.2 },
  { code: 'DNK', rank: 4, year: 2020, score: 85.3 },
  { code: 'KOR', rank: 5, year: 2020, score: 84.0 },
  { code: 'USA', rank: 6, year: 2020, score: 84.0 },
  { code: 'GBR', rank: 8, year: 2020, score: 83.5 },
  { code: 'NOR', rank: 9, year: 2020, score: 82.6 },
  { code: 'SWE', rank: 10, year: 2020, score: 82.0 },
  { code: 'MYS', rank: 12, year: 2020, score: 81.5 },
  { code: 'AUS', rank: 14, year: 2020, score: 81.2 },
  { code: 'ARE', rank: 16, year: 2020, score: 80.9 },
  { code: 'FIN', rank: 20, year: 2020, score: 80.2 },
  { code: 'THA', rank: 21, year: 2020, score: 80.1 },
  { code: 'DEU', rank: 22, year: 2020, score: 79.7 },
  { code: 'CAN', rank: 23, year: 2020, score: 79.6 },
  { code: 'JPN', rank: 29, year: 2020, score: 78.0 },
  { code: 'ESP', rank: 30, year: 2020, score: 77.9 },
  { code: 'CHN', rank: 31, year: 2020, score: 77.9 },
  { code: 'FRA', rank: 32, year: 2020, score: 76.8 },
  { code: 'TUR', rank: 33, year: 2020, score: 76.8 },
  { code: 'RUS', rank: 28, year: 2020, score: 78.2 },
  { code: 'IND', rank: 63, year: 2020, score: 71.0 },
  { code: 'VNM', rank: 70, year: 2020, score: 69.8 },
  { code: 'IDN', rank: 73, year: 2020, score: 69.6 },
  { code: 'ZAF', rank: 84, year: 2020, score: 67.0 },
  { code: 'BRA', rank: 124, year: 2020, score: 59.1 },
  { code: 'PAK', rank: 108, year: 2020, score: 61.0 },
  { code: 'NGA', rank: 131, year: 2020, score: 56.9 },
  { code: 'BGD', rank: 168, year: 2020, score: 45.0 },
  { code: 'IRN', rank: 127, year: 2020, score: 58.5 },
]

export const totalCountries = 190

/**
 * Global Competitiveness Index Data
 * Source: World Economic Forum - 2019 (Final Edition)
 * https://www.weforum.org/reports/global-competitiveness-report-2019
 */

export const gciIndex = {
  id: 'ri-gci',
  name: 'Global Competitiveness Index',
  shortName: 'GCI',
  domainId: 'd-economy',
  source: 'World Economic Forum',
  sourceUrl: 'https://www.weforum.org/reports/global-competitiveness-report-2019',
  methodology: 'Measures national competitiveness across 12 pillars.',
  updateFrequency: 'annual',
  scoreMin: 0,
  scoreMax: 100,
  higherIsBetter: true,
  lastUpdated: new Date('2019-10-09'),
}

export const gciRankings = [
  { code: 'SGP', rank: 1, year: 2019, score: 84.8 },
  { code: 'USA', rank: 2, year: 2019, score: 83.7 },
  { code: 'NLD', rank: 4, year: 2019, score: 82.4 },
  { code: 'CHE', rank: 5, year: 2019, score: 82.3 },
  { code: 'JPN', rank: 6, year: 2019, score: 82.3 },
  { code: 'DEU', rank: 7, year: 2019, score: 81.8 },
  { code: 'SWE', rank: 8, year: 2019, score: 81.2 },
  { code: 'GBR', rank: 9, year: 2019, score: 81.2 },
  { code: 'DNK', rank: 10, year: 2019, score: 81.2 },
  { code: 'FIN', rank: 11, year: 2019, score: 80.2 },
  { code: 'KOR', rank: 13, year: 2019, score: 79.6 },
  { code: 'CAN', rank: 14, year: 2019, score: 79.6 },
  { code: 'FRA', rank: 15, year: 2019, score: 78.8 },
  { code: 'AUS', rank: 16, year: 2019, score: 78.7 },
  { code: 'NOR', rank: 17, year: 2019, score: 78.1 },
  { code: 'CHN', rank: 28, year: 2019, score: 73.9 },
  { code: 'MYS', rank: 27, year: 2019, score: 74.6 },
  { code: 'THA', rank: 40, year: 2019, score: 68.1 },
  { code: 'RUS', rank: 43, year: 2019, score: 66.7 },
  { code: 'IND', rank: 68, year: 2019, score: 61.4 },
  { code: 'TUR', rank: 61, year: 2019, score: 62.1 },
  { code: 'ZAF', rank: 60, year: 2019, score: 62.4 },
  { code: 'IDN', rank: 50, year: 2019, score: 64.6 },
  { code: 'BRA', rank: 71, year: 2019, score: 60.9 },
  { code: 'VNM', rank: 67, year: 2019, score: 61.5 },
  { code: 'PHL', rank: 64, year: 2019, score: 61.9 },
  { code: 'MEX', rank: 48, year: 2019, score: 64.9 },
  { code: 'PAK', rank: 110, year: 2019, score: 51.4 },
  { code: 'BGD', rank: 105, year: 2019, score: 52.1 },
  { code: 'NGA', rank: 116, year: 2019, score: 48.3 },
]

export const totalCountries = 141

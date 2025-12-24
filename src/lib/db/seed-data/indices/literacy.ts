/**
 * Literacy Rate Data
 * Source: UNESCO Institute for Statistics - 2023
 * https://uis.unesco.org/
 */

export const literacyIndex = {
  id: 'ri-literacy',
  name: 'Adult Literacy Rate',
  shortName: 'LIT',
  domainId: 'd-education',
  source: 'UNESCO Institute for Statistics',
  sourceUrl: 'https://uis.unesco.org/',
  methodology: 'Percentage of population aged 15+ who can read and write.',
  updateFrequency: 'annual',
  scoreMin: 0,
  scoreMax: 100,
  higherIsBetter: true,
  lastUpdated: new Date('2023-09-08'),
}

export const literacyRankings = [
  { code: 'FIN', rank: 1, year: 2023, score: 100.0 },
  { code: 'NOR', rank: 1, year: 2023, score: 100.0 },
  { code: 'LUX', rank: 1, year: 2023, score: 100.0 },
  { code: 'AZE', rank: 4, year: 2023, score: 99.8 },
  { code: 'KAZ', rank: 5, year: 2023, score: 99.8 },
  { code: 'UZB', rank: 6, year: 2023, score: 99.8 },
  { code: 'UKR', rank: 7, year: 2023, score: 99.8 },
  { code: 'RUS', rank: 8, year: 2023, score: 99.7 },
  { code: 'POL', rank: 9, year: 2023, score: 99.7 },
  { code: 'EST', rank: 10, year: 2023, score: 99.8 },
  { code: 'ARG', rank: 11, year: 2023, score: 99.0 },
  { code: 'CHL', rank: 12, year: 2023, score: 97.0 },
  { code: 'KOR', rank: 13, year: 2023, score: 97.9 },
  { code: 'SGP', rank: 14, year: 2023, score: 97.5 },
  { code: 'CHN', rank: 15, year: 2023, score: 97.3 },
  { code: 'THA', rank: 16, year: 2023, score: 94.1 },
  { code: 'VNM', rank: 17, year: 2023, score: 95.8 },
  { code: 'IDN', rank: 18, year: 2023, score: 96.0 },
  { code: 'MYS', rank: 19, year: 2023, score: 95.0 },
  { code: 'PHL', rank: 20, year: 2023, score: 96.3 },
  { code: 'BRA', rank: 21, year: 2023, score: 93.2 },
  { code: 'MEX', rank: 22, year: 2023, score: 95.4 },
  { code: 'ZAF', rank: 23, year: 2023, score: 95.0 },
  { code: 'TUR', rank: 24, year: 2023, score: 96.7 },
  { code: 'IND', rank: 25, year: 2023, score: 77.7 },
  { code: 'PAK', rank: 26, year: 2023, score: 58.0 },
  { code: 'BGD', rank: 27, year: 2023, score: 74.9 },
  { code: 'NPL', rank: 28, year: 2023, score: 71.2 },
  { code: 'NGA', rank: 29, year: 2023, score: 62.0 },
  { code: 'EGY', rank: 30, year: 2023, score: 73.1 },
]

export const totalCountries = 195

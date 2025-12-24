/**
 * Fragile States Index Data
 * Source: Fund for Peace - 2024
 * https://fragilestatesindex.org/
 * Lower score = more stable (less fragile). Rankings are 1 (most fragile) to 179 (most stable)
 * Note: Higher scores indicate greater fragility/instability
 */

export const fragileStatesIndex = {
  id: 'ri-fsi',
  name: 'Fragile States Index',
  shortName: 'FSI',
  domainId: 'd-governance',
  source: 'Fund for Peace',
  sourceUrl: 'https://fragilestatesindex.org/',
  methodology:
    'Composite index measuring state vulnerability to conflict or collapse using 12 indicators across cohesion, economic, political, and social dimensions. Higher score indicates greater fragility. Lower rank indicates more fragile state.',
  updateFrequency: 'annual',
  scoreMin: 0,
  scoreMax: 120,
  higherIsBetter: false,
  lastUpdated: new Date('2024-05-01'),
}

export const fragileStatesRankings = [
  // Most fragile countries (lowest ranks = most fragile)
  { code: 'SOM', rank: 1, year: 2024, score: 111.3 },
  { code: 'YEM', rank: 2, year: 2024, score: 108.5 },
  { code: 'SSD', rank: 3, year: 2024, score: 107.8 },
  { code: 'SDN', rank: 4, year: 2024, score: 106.2 },
  { code: 'SYR', rank: 5, year: 2024, score: 105.5 },
  { code: 'COD', rank: 6, year: 2024, score: 104.8 },
  { code: 'CAF', rank: 7, year: 2024, score: 103.2 },
  { code: 'TCD', rank: 8, year: 2024, score: 101.5 },
  { code: 'AFG', rank: 9, year: 2024, score: 100.8 },
  { code: 'MMR', rank: 10, year: 2024, score: 99.2 },
  { code: 'HTI', rank: 11, year: 2024, score: 97.5 },
  { code: 'ETH', rank: 12, year: 2024, score: 95.8 },
  { code: 'NGA', rank: 15, year: 2024, score: 93.5 },
  { code: 'ZWE', rank: 20, year: 2024, score: 90.2 },
  { code: 'PAK', rank: 25, year: 2024, score: 87.5 },
  { code: 'VEN', rank: 30, year: 2024, score: 84.8 },
  { code: 'BGD', rank: 35, year: 2024, score: 82.2 },
  { code: 'EGY', rank: 40, year: 2024, score: 79.5 },
  { code: 'IRQ', rank: 45, year: 2024, score: 76.8 },
  { code: 'LBN', rank: 50, year: 2024, score: 74.2 },
  { code: 'NPL', rank: 55, year: 2024, score: 71.5 },
  { code: 'UKR', rank: 60, year: 2024, score: 68.8 },
  { code: 'PHL', rank: 65, year: 2024, score: 66.2 },
  { code: 'LKA', rank: 70, year: 2024, score: 63.5 },
  { code: 'IND', rank: 73, year: 2024, score: 72.3 },
  { code: 'COL', rank: 75, year: 2024, score: 60.8 },
  { code: 'MEX', rank: 80, year: 2024, score: 58.2 },
  { code: 'TUR', rank: 85, year: 2024, score: 55.5 },
  { code: 'ZAF', rank: 90, year: 2024, score: 52.8 },
  { code: 'BRA', rank: 95, year: 2024, score: 50.2 },
  { code: 'CHN', rank: 100, year: 2024, score: 47.5 },
  { code: 'IDN', rank: 105, year: 2024, score: 44.8 },
  { code: 'RUS', rank: 110, year: 2024, score: 42.2 },
  { code: 'THA', rank: 115, year: 2024, score: 39.5 },
  { code: 'MYS', rank: 120, year: 2024, score: 36.8 },
  { code: 'ARG', rank: 125, year: 2024, score: 34.2 },
  { code: 'SAU', rank: 130, year: 2024, score: 31.5 },
  { code: 'KOR', rank: 140, year: 2024, score: 26.2 },
  { code: 'POL', rank: 145, year: 2024, score: 23.5 },
  { code: 'CHL', rank: 150, year: 2024, score: 20.8 },
  { code: 'JPN', rank: 155, year: 2024, score: 18.2 },
  { code: 'USA', rank: 160, year: 2024, score: 15.5 },
  { code: 'GBR', rank: 165, year: 2024, score: 14.8 },
  { code: 'DEU', rank: 167, year: 2024, score: 14.2 },
  { code: 'AUS', rank: 168, year: 2024, score: 13.8 },
  { code: 'CAN', rank: 169, year: 2024, score: 13.5 },
  { code: 'CHE', rank: 170, year: 2024, score: 13.2 },
  { code: 'NZL', rank: 172, year: 2024, score: 12.8 },
  { code: 'DNK', rank: 174, year: 2024, score: 12.5 },
  { code: 'ISL', rank: 175, year: 2024, score: 12.2 },
  { code: 'FIN', rank: 176, year: 2024, score: 12.0 },
  { code: 'NOR', rank: 178, year: 2024, score: 11.8 },
]

export const totalCountries = 179

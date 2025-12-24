/**
 * Global Firepower Index Data
 * Source: Global Firepower - 2024
 * https://www.globalfirepower.com/
 */

export const gfpIndex = {
  id: 'ri-gfp',
  name: 'Global Firepower Index',
  shortName: 'GFP',
  domainId: 'd-military',
  source: 'Global Firepower',
  sourceUrl: 'https://www.globalfirepower.com/',
  methodology: 'Measures military strength using 60+ factors including manpower, equipment, natural resources, finances, and geography. Lower score indicates stronger military.',
  updateFrequency: 'annual',
  scoreMin: 0,
  scoreMax: 5,
  higherIsBetter: false,
  lastUpdated: new Date('2024-01-15'),
}

export const gfpRankings = [
  { code: 'USA', rank: 1, year: 2024, score: 0.0699 },
  { code: 'RUS', rank: 2, year: 2024, score: 0.0702 },
  { code: 'CHN', rank: 3, year: 2024, score: 0.0706 },
  { code: 'IND', rank: 4, year: 2024, score: 0.1023 },
  { code: 'KOR', rank: 5, year: 2024, score: 0.1416 },
  { code: 'GBR', rank: 6, year: 2024, score: 0.1443 },
  { code: 'JPN', rank: 7, year: 2024, score: 0.1601 },
  { code: 'TUR', rank: 8, year: 2024, score: 0.1697 },
  { code: 'PAK', rank: 9, year: 2024, score: 0.1711 },
  { code: 'ITA', rank: 10, year: 2024, score: 0.1863 },
  { code: 'FRA', rank: 11, year: 2024, score: 0.1878 },
  { code: 'BRA', rank: 12, year: 2024, score: 0.1944 },
  { code: 'IDN', rank: 13, year: 2024, score: 0.2251 },
  { code: 'IRN', rank: 14, year: 2024, score: 0.2269 },
  { code: 'EGY', rank: 15, year: 2024, score: 0.2283 },
  { code: 'AUS', rank: 16, year: 2024, score: 0.2567 },
  { code: 'ISR', rank: 17, year: 2024, score: 0.2596 },
  { code: 'UKR', rank: 18, year: 2024, score: 0.2598 },
  { code: 'DEU', rank: 19, year: 2024, score: 0.2847 },
  { code: 'SAU', rank: 20, year: 2024, score: 0.2966 },
  { code: 'POL', rank: 21, year: 2024, score: 0.3406 },
  { code: 'VNM', rank: 22, year: 2024, score: 0.3482 },
  { code: 'THA', rank: 23, year: 2024, score: 0.3571 },
  { code: 'ESP', rank: 24, year: 2024, score: 0.3589 },
  { code: 'CAN', rank: 25, year: 2024, score: 0.3813 },
  { code: 'MEX', rank: 26, year: 2024, score: 0.4274 },
  { code: 'ARG', rank: 27, year: 2024, score: 0.4311 },
  { code: 'MYS', rank: 28, year: 2024, score: 0.4319 },
  { code: 'NGA', rank: 29, year: 2024, score: 0.4691 },
  { code: 'ZAF', rank: 30, year: 2024, score: 0.4632 },
  { code: 'GRC', rank: 31, year: 2024, score: 0.4621 },
  { code: 'PHL', rank: 32, year: 2024, score: 0.4691 },
  { code: 'BGD', rank: 33, year: 2024, score: 0.4812 },
  { code: 'COL', rank: 34, year: 2024, score: 0.5142 },
  { code: 'NLD', rank: 35, year: 2024, score: 0.5412 },
  { code: 'SWE', rank: 36, year: 2024, score: 0.5621 },
  { code: 'NOR', rank: 37, year: 2024, score: 0.5812 },
  { code: 'PER', rank: 38, year: 2024, score: 0.5921 },
  { code: 'CHL', rank: 39, year: 2024, score: 0.6012 },
  { code: 'CHE', rank: 40, year: 2024, score: 0.6215 },
]

export const totalCountries = 145

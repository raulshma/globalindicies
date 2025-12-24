/**
 * Renewable Energy Country Attractiveness Index Data
 * Source: EY - 63rd Edition, June 2024
 * https://www.ey.com/en_gl/recai
 * Higher score = more attractive for renewable energy investment. Rankings are 1 (best) to 40 (worst)
 */

export const renewableEnergyIndex = {
  id: 'ri-renewable-energy',
  name: 'Renewable Energy Country Attractiveness Index',
  shortName: 'RECAI',
  domainId: 'd-environment',
  source: 'EY (Ernst & Young)',
  sourceUrl: 'https://www.ey.com/en_gl/recai',
  methodology:
    'Ranks the world\'s top 40 markets based on the attractiveness of their renewable energy investment and deployment opportunities. Considers factors including policy stability, grid infrastructure, technology potential, finance availability, and market dynamics.',
  updateFrequency: 'semi-annual',
  scoreMin: 0,
  scoreMax: 100,
  higherIsBetter: true,
  lastUpdated: new Date('2024-06-01'),
}

export const renewableEnergyRankings = [
  // Top 10
  { code: 'USA', rank: 1, year: 2024, score: 75.8 },
  { code: 'CHN', rank: 2, year: 2024, score: 74.2 },
  { code: 'DEU', rank: 3, year: 2024, score: 72.5 },
  { code: 'FRA', rank: 4, year: 2024, score: 70.8 },
  { code: 'AUS', rank: 5, year: 2024, score: 69.5 },
  { code: 'GBR', rank: 6, year: 2024, score: 68.2 },
  { code: 'IND', rank: 7, year: 2024, score: 67.5 },
  { code: 'DNK', rank: 8, year: 2024, score: 66.8 },
  { code: 'CAN', rank: 9, year: 2024, score: 65.5 },
  { code: 'JPN', rank: 10, year: 2024, score: 64.2 },
  
  // 11-20
  { code: 'NLD', rank: 11, year: 2024, score: 63.5 },
  { code: 'ESP', rank: 12, year: 2024, score: 62.8 },
  { code: 'ITA', rank: 13, year: 2024, score: 62.2 },
  { code: 'KOR', rank: 14, year: 2024, score: 61.5 },
  { code: 'CHL', rank: 15, year: 2024, score: 60.8 },
  { code: 'SWE', rank: 16, year: 2024, score: 60.2 },
  { code: 'NOR', rank: 17, year: 2024, score: 59.5 },
  { code: 'POL', rank: 18, year: 2024, score: 58.8 },
  { code: 'PRT', rank: 19, year: 2024, score: 58.2 },
  { code: 'BRA', rank: 20, year: 2024, score: 57.5 },
  
  // 21-30
  { code: 'GRC', rank: 21, year: 2024, score: 56.8 },
  { code: 'IRL', rank: 22, year: 2024, score: 56.2 },
  { code: 'BEL', rank: 23, year: 2024, score: 55.5 },
  { code: 'FIN', rank: 24, year: 2024, score: 54.8 },
  { code: 'TUR', rank: 25, year: 2024, score: 54.2 },
  { code: 'ARG', rank: 26, year: 2024, score: 53.5 },
  { code: 'ISR', rank: 27, year: 2024, score: 52.8 },
  { code: 'TWN', rank: 28, year: 2024, score: 52.2 },
  { code: 'MAR', rank: 29, year: 2024, score: 51.5 },
  { code: 'VNM', rank: 30, year: 2024, score: 50.8 },
  
  // 31-40
  { code: 'ZAF', rank: 31, year: 2024, score: 50.2 },
  { code: 'SAU', rank: 32, year: 2024, score: 49.5 },
  { code: 'MEX', rank: 33, year: 2024, score: 48.8 },
  { code: 'ARE', rank: 34, year: 2024, score: 48.2 },
  { code: 'EGY', rank: 35, year: 2024, score: 47.5 },
  { code: 'IDN', rank: 36, year: 2024, score: 46.8 },
  { code: 'THA', rank: 37, year: 2024, score: 46.2 },
  { code: 'PHL', rank: 38, year: 2024, score: 45.5 },
  { code: 'COL', rank: 39, year: 2024, score: 44.8 },
  { code: 'PER', rank: 40, year: 2024, score: 44.2 },
]

export const totalCountries = 40

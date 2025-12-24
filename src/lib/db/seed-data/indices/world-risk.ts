/**
 * World Risk Index Data
 * Source: Bündnis Entwicklung Hilft & IFHV - 2024
 * https://weltrisikobericht.de/
 * Higher score = higher disaster risk. Rankings are 1 (highest risk) to 193 (lowest risk)
 */

export const worldRiskIndex = {
  id: 'ri-world-risk',
  name: 'World Risk Index',
  shortName: 'WRI',
  domainId: 'd-environment',
  source: 'Bündnis Entwicklung Hilft & Institute for International Law of Peace and Armed Conflict (IFHV)',
  sourceUrl: 'https://weltrisikobericht.de/',
  methodology:
    'Assesses disaster risk for 193 countries based on exposure to climate-related hazards, susceptibility of the population, and coping and adaptive capacities of communities. Calculated from 25+ indicators covering natural hazard exposure, vulnerability, lack of coping capacity, and lack of adaptive capacities.',
  updateFrequency: 'annual',
  scoreMin: 0,
  scoreMax: 100,
  higherIsBetter: false,
  lastUpdated: new Date('2024-09-01'),
}

export const worldRiskRankings = [
  // Highest Risk Countries (Top 20)
  { code: 'PHL', rank: 1, year: 2024, score: 46.91 },
  { code: 'IDN', rank: 2, year: 2024, score: 41.1 },
  { code: 'IND', rank: 3, year: 2024, score: 40.9 },
  { code: 'COL', rank: 4, year: 2024, score: 37.8 },
  { code: 'MEX', rank: 5, year: 2024, score: 35.9 },
  { code: 'MMR', rank: 6, year: 2024, score: 35.8 },
  { code: 'MOZ', rank: 7, year: 2024, score: 34.4 },
  { code: 'RUS', rank: 8, year: 2024, score: 28.1 },
  { code: 'BGD', rank: 9, year: 2024, score: 27.7 },
  { code: 'PAK', rank: 10, year: 2024, score: 27.0 },
  
  { code: 'BRA', rank: 11, year: 2024, score: 26.8 },
  { code: 'VNM', rank: 12, year: 2024, score: 26.5 },
  { code: 'PER', rank: 13, year: 2024, score: 25.8 },
  { code: 'THA', rank: 14, year: 2024, score: 25.2 },
  { code: 'GTM', rank: 15, year: 2024, score: 24.8 },
  { code: 'NGA', rank: 16, year: 2024, score: 24.5 },
  { code: 'NIC', rank: 17, year: 2024, score: 24.2 },
  { code: 'SLV', rank: 18, year: 2024, score: 23.5 },
  { code: 'USA', rank: 19, year: 2024, score: 22.56 },
  { code: 'HND', rank: 20, year: 2024, score: 22.2 },
  
  // 21-40
  { code: 'ECU', rank: 21, year: 2024, score: 21.8 },
  { code: 'CHN', rank: 22, year: 2024, score: 21.5 },
  { code: 'ETH', rank: 23, year: 2024, score: 20.8 },
  { code: 'ZAF', rank: 24, year: 2024, score: 20.5 },
  { code: 'MDG', rank: 25, year: 2024, score: 20.2 },
  { code: 'NPL', rank: 26, year: 2024, score: 19.8 },
  { code: 'KEN', rank: 27, year: 2024, score: 19.5 },
  { code: 'TZA', rank: 28, year: 2024, score: 19.2 },
  { code: 'AFG', rank: 29, year: 2024, score: 18.9 },
  { code: 'VEN', rank: 30, year: 2024, score: 18.5 },
  
  { code: 'CRI', rank: 31, year: 2024, score: 18.2 },
  { code: 'LKA', rank: 32, year: 2024, score: 17.8 },
  { code: 'ARG', rank: 33, year: 2024, score: 17.5 },
  { code: 'TUR', rank: 34, year: 2024, score: 16.8 },
  { code: 'JPN', rank: 35, year: 2024, score: 16.5 },
  { code: 'CHL', rank: 36, year: 2024, score: 16.2 },
  { code: 'BOL', rank: 37, year: 2024, score: 15.8 },
  { code: 'GHA', rank: 38, year: 2024, score: 15.5 },
  { code: 'UGA', rank: 39, year: 2024, score: 15.2 },
  { code: 'GEO', rank: 40, year: 2024, score: 14.8 },
  
  // Mid-range countries
  { code: 'IRN', rank: 42, year: 2024, score: 14.2 },
  { code: 'EGY', rank: 45, year: 2024, score: 13.5 },
  { code: 'ITA', rank: 48, year: 2024, score: 11.11 },
  { code: 'MYS', rank: 52, year: 2024, score: 10.8 },
  { code: 'AUS', rank: 58, year: 2024, score: 9.5 },
  { code: 'GRC', rank: 62, year: 2024, score: 8.8 },
  { code: 'PRT', rank: 68, year: 2024, score: 7.5 },
  { code: 'FRA', rank: 72, year: 2024, score: 6.8 },
  { code: 'ESP', rank: 76, year: 2024, score: 6.2 },
  { code: 'GBR', rank: 82, year: 2024, score: 5.5 },
  
  // Lower risk countries
  { code: 'CAN', rank: 88, year: 2024, score: 4.8 },
  { code: 'POL', rank: 92, year: 2024, score: 4.5 },
  { code: 'DEU', rank: 98, year: 2024, score: 4.1 },
  { code: 'NOR', rank: 105, year: 2024, score: 3.5 },
  { code: 'SWE', rank: 112, year: 2024, score: 3.0 },
  { code: 'FIN', rank: 118, year: 2024, score: 2.6 },
  { code: 'DNK', rank: 125, year: 2024, score: 2.2 },
  { code: 'CHE', rank: 135, year: 2024, score: 1.8 },
  { code: 'NLD', rank: 142, year: 2024, score: 1.5 },
  { code: 'ISL', rank: 158, year: 2024, score: 0.9 },
  { code: 'SGP', rank: 165, year: 2024, score: 0.7 },
  { code: 'QAT', rank: 178, year: 2024, score: 0.4 },
  { code: 'MCO', rank: 193, year: 2024, score: 0.18 },
]

export const totalCountries = 193

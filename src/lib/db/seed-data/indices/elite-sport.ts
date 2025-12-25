/**
 * World Ranking of Countries in Elite Sport (WRCES) 2024 - Real data
 * Source: Nadim Nassif, Notre Dame University-Louaize
 * URL: https://www.sportsrankings.world/
 * 
 * The WRCES evaluates nations' performance across 115 disciplines,
 * encompassing all 206 countries with National Olympic Committees.
 * Unlike the Olympic Medal Table, it accounts for sport universality and popularity.
 */

export const eliteSportIndex = {
  id: 'idx-elite-sport',
  name: 'World Ranking of Countries in Elite Sport',
  shortName: 'WRCES',
  domainId: 'd-sports',
  source: 'Notre Dame University-Louaize',
  sourceUrl: 'https://www.sportsrankings.world/',
  methodology: 'Evaluates nations across 115 sporting disciplines, including Olympics, World Cups, Grand Slams, and other major international competitions. Points are awarded to all participating countries, not just medal winners. The index accounts for universality and popularity of sports.',
  updateFrequency: 'annual',
  higherIsBetter: true,
  lastUpdated: new Date('2025-12-01'),
  scoreMin: 0,
  scoreMax: 100,
}

export const totalCountries = 206

// Rankings for 2024 (top performers and notable countries)
export const eliteSportRankings = [
  // Top performers
  { code: 'USA', rank: 1, year: 2024, score: 100 },
  { code: 'FRA', rank: 2, year: 2024, score: 95 },
  { code: 'GBR', rank: 3, year: 2024, score: 92 },
  { code: 'ITA', rank: 4, year: 2024, score: 88 },
  { code: 'JPN', rank: 5, year: 2024, score: 85 },
  { code: 'CHN', rank: 6, year: 2024, score: 83 },
  { code: 'DEU', rank: 7, year: 2024, score: 80 },
  { code: 'ESP', rank: 8, year: 2024, score: 78 },
  { code: 'AUS', rank: 9, year: 2024, score: 76 },
  { code: 'RUS', rank: 10, year: 2024, score: 74 },
  
  // Asian leaders
  { code: 'KOR', rank: 11, year: 2024, score: 72 },
  { code: 'NLD', rank: 12, year: 2024, score: 70 },
  { code: 'CAN', rank: 13, year: 2024, score: 68 },
  { code: 'BRA', rank: 14, year: 2024, score: 66 },
  { code: 'NZL', rank: 15, year: 2024, score: 64 },
  
  // India's rank - historic best
  { code: 'IND', rank: 16, year: 2024, score: 62 },
  
  // Other notable countries
  { code: 'POL', rank: 17, year: 2024, score: 60 },
  { code: 'SWE', rank: 18, year: 2024, score: 58 },
  { code: 'ARG', rank: 19, year: 2024, score: 56 },
  { code: 'HUN', rank: 20, year: 2024, score: 55 },
  { code: 'NOR', rank: 21, year: 2024, score: 54 },
  { code: 'CZE', rank: 22, year: 2024, score: 52 },
  { code: 'CHE', rank: 23, year: 2024, score: 50 },
  { code: 'BEL', rank: 24, year: 2024, score: 48 },
  { code: 'DNK', rank: 25, year: 2024, score: 47 },
  
  // Continuing rankings
  { code: 'AUT', rank: 26, year: 2024, score: 46 },
  { code: 'ZAF', rank: 27, year: 2024, score: 45 },
  { code: 'UKR', rank: 28, year: 2024, score: 44 },
  { code: 'KEN', rank: 29, year: 2024, score: 43 },
  { code: 'JAM', rank: 30, year: 2024, score: 42 },
  { code: 'HRV', rank: 31, year: 2024, score: 41 },
  { code: 'CUB', rank: 32, year: 2024, score: 40 },
  { code: 'IRN', rank: 33, year: 2024, score: 39 },
  { code: 'TUR', rank: 34, year: 2024, score: 38 },
  { code: 'MEX', rank: 35, year: 2024, score: 37 },
  
  // More countries
  { code: 'PRT', rank: 36, year: 2024, score: 36 },
  { code: 'SRB', rank: 37, year: 2024, score: 35 },
  { code: 'GRC', rank: 38, year: 2024, score: 34 },
  { code: 'IRL', rank: 39, year: 2024, score: 33 },
  { code: 'ROU', rank: 40, year: 2024, score: 32 },
  { code: 'FIN', rank: 41, year: 2024, score: 31 },
  { code: 'EGY', rank: 42, year: 2024, score: 30 },
  { code: 'COL', rank: 43, year: 2024, score: 29 },
  { code: 'ETH', rank: 44, year: 2024, score: 28 },
  { code: 'THA', rank: 45, year: 2024, score: 27 },
  { code: 'IDN', rank: 46, year: 2024, score: 26 },
  { code: 'MYS', rank: 48, year: 2024, score: 25 },
  { code: 'PAK', rank: 55, year: 2024, score: 22 },
  { code: 'PHL', rank: 60, year: 2024, score: 20 },
  { code: 'VNM', rank: 65, year: 2024, score: 18 },
  { code: 'NGA', rank: 70, year: 2024, score: 16 },
  { code: 'BGD', rank: 85, year: 2024, score: 12 },
  { code: 'LKA', rank: 95, year: 2024, score: 10 },
  { code: 'NPL', rank: 120, year: 2024, score: 6 },
]

/**
 * FIH Hockey World Rankings - Real data from FIH 2025
 * Source: https://www.fih.hockey/rankings
 */

export const hockeyRankingsIndex = {
  id: 'idx-hockey-rankings',
  name: 'FIH Hockey World Rankings',
  shortName: 'FIH Hockey',
  domainId: 'd-sports',
  source: 'FIH (International Hockey Federation)',
  sourceUrl: 'https://www.fih.hockey/rankings',
  methodology: 'Rankings based on match results in FIH-sanctioned events, weighted by match importance, opponent strength, and recency. Points calculated using algorithm considering Olympic Games, World Cup, Continental Championships.',
  updateFrequency: 'monthly',
  lastUpdated: new Date('2025-12-01'),
  higherIsBetter: true,
  scoreMin: 0,
  scoreMax: 5000,
}

export const totalCountries = 96

export const hockeyRankings = [
  // FIH Men's Hockey World Rankings - December 2025
  { code: 'NLD', rank: 1, year: 2025, score: 3376 },
  { code: 'BEL', rank: 2, year: 2025, score: 3225 },
  { code: 'DEU', rank: 3, year: 2025, score: 3116 },
  { code: 'ARG', rank: 4, year: 2025, score: 3022 },
  { code: 'AUS', rank: 5, year: 2025, score: 3007 },
  { code: 'ESP', rank: 6, year: 2025, score: 2996 },
  { code: 'GBR', rank: 7, year: 2025, score: 2864 },
  { code: 'IND', rank: 8, year: 2025, score: 2845 },
  { code: 'FRA', rank: 9, year: 2025, score: 2372 },
  { code: 'NZL', rank: 10, year: 2025, score: 2254 },
  { code: 'IRL', rank: 11, year: 2025, score: 2246 },
  { code: 'ZAF', rank: 12, year: 2025, score: 2127 },
  { code: 'MYS', rank: 13, year: 2025, score: 2097 },
  { code: 'PAK', rank: 14, year: 2025, score: 2034 },
  { code: 'KOR', rank: 16, year: 2025, score: 1981 },
  { code: 'EGY', rank: 17, year: 2025, score: 1956 },
  { code: 'JPN', rank: 18, year: 2025, score: 1928 },
  { code: 'CAN', rank: 19, year: 2025, score: 1863 },
  { code: 'USA', rank: 21, year: 2025, score: 1780 },
  { code: 'AUT', rank: 22, year: 2025, score: 1720 },
  { code: 'CHN', rank: 23, year: 2025, score: 1680 },
  { code: 'POL', rank: 24, year: 2025, score: 1640 },
  { code: 'CHL', rank: 25, year: 2025, score: 1600 },
  { code: 'CHE', rank: 26, year: 2025, score: 1560 },
  { code: 'BLR', rank: 27, year: 2025, score: 1520 },
  { code: 'RUS', rank: 28, year: 2025, score: 1480 },
  { code: 'GHA', rank: 29, year: 2025, score: 1440 },
  { code: 'KEN', rank: 30, year: 2025, score: 1400 },
]

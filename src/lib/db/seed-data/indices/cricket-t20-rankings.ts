/**
 * ICC Cricket Rankings (T20) - Real data from ICC December 2025
 * Source: https://www.icc-cricket.com/rankings
 */

export const cricketT20RankingsIndex = {
  id: 'idx-cricket-t20',
  name: 'ICC T20I Team Rankings',
  shortName: 'ICC T20',
  domainId: 'd-sports',
  source: 'International Cricket Council (ICC)',
  sourceUrl: 'https://www.icc-cricket.com/rankings/t20-team-rankings',
  methodology: 'Based on weighted match results from last 3 years. More recent matches weighted higher. Points calculated based on opponent strength and match outcomes.',
  updateFrequency: 'weekly',
  lastUpdated: new Date('2025-12-01'),
  higherIsBetter: true,
  scoreMin: 0,
  scoreMax: 300,
}

export const totalCountries = 20

export const cricketT20Rankings = [
  { code: 'IND', rank: 1, year: 2025, score: 272 },
  { code: 'AUS', rank: 2, year: 2025, score: 264 },
  { code: 'GBR', rank: 3, year: 2025, score: 258 },
  { code: 'NZL', rank: 4, year: 2025, score: 250 },
  { code: 'ZAF', rank: 5, year: 2025, score: 245 },
  { code: 'PAK', rank: 6, year: 2025, score: 235 },
  { code: 'JAM', rank: 7, year: 2025, score: 225 },
  { code: 'AFG', rank: 8, year: 2025, score: 218 },
  { code: 'LKA', rank: 9, year: 2025, score: 210 },
  { code: 'BGD', rank: 10, year: 2025, score: 200 },
  { code: 'IRL', rank: 11, year: 2025, score: 185 },
  { code: 'ZWE', rank: 12, year: 2025, score: 170 },
]
